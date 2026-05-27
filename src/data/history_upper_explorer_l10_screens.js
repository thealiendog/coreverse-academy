// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L10 — The Scientific Revolution
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what changed, the scientific method, key figures
//        (Copernicus, Galileo, Newton), why it still shapes our world
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-10`,
      title: `The Scientific Revolution`,
      duration: 18,
      xpReward: 75,
      badge: `revolution-scientist`,
      badgeName: `Revolution Scientist`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson the Black Death cracked open the medieval world. Today we look at one of the most important shifts in human history. Between about 1500 and 1700, European thinkers stopped accepting what authority figures said about how the universe works and started TESTING ideas against actual evidence. This is called the Scientific Revolution, and the way you do science in school today, observation, experiment, evidence, comes directly from this period. Let's go.`,
          headline: `The Scientific Revolution`,
          subtitle: `When humans started asking nature questions and listening to its answers`,
          visual: `/ue-assets/history/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Actually Changed`,
          paragraphs: [
            `For most of human history, "how does the world work?" got answered by tradition and authority. Whatever the ancient philosophers or the religious leaders said was true. If Aristotle wrote that heavier objects fall faster than lighter ones (he did, and he was wrong), people accepted it for nearly 2,000 years. Questioning these authorities could get you in real trouble.`,
            `Starting around 1500, a new generation of thinkers in Europe began doing something different. They TESTED ideas by observing nature carefully and running experiments. If the experiment disagreed with the authority, they trusted the experiment. This shift is called the SCIENTIFIC REVOLUTION. It didn't happen overnight, but over about 200 years it completely changed how humans understand the world.`,
          ],
          image: `/ue-assets/history/l10-s1-shift.webp`,
          imageCaption: `Tradition said one thing. Evidence said another. The shift was earthshaking.`,
          vocab: [
            { word: `Scientific Revolution`,
              definition: `A period from about 1500 to 1700 CE when European thinkers began using observation and experiment to test ideas, instead of just trusting tradition and authority.`,
              audioPrompt: `The Scientific Revolution was a period from about 1500 to 1700 CE, {name}. Before this, most people accepted what ancient writers and religious leaders said about nature. During the Scientific Revolution, European thinkers started testing these claims by observing nature and running experiments. If the experiment disagreed with authority, they trusted the experiment. This shift is the foundation of every modern science you learn in school.` },
            { word: `observation`,
              definition: `Carefully watching and noting what actually happens in nature, without assuming the outcome in advance. Observation is the first step in the scientific method.`,
              audioPrompt: `Observation means carefully watching and recording what actually happens, {name}. Not what you expect to happen. Not what an ancient book says should happen. What actually happens. The Scientific Revolution began when thinkers started trusting careful observation over traditional authority. Galileo didn't just assume moons orbited Earth. He looked through his telescope and observed moons orbiting Jupiter. Observation over assumption is still the foundation of every modern science.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Scientific Method`,
          paragraphs: [
            `Out of this period came a simple but powerful idea called the SCIENTIFIC METHOD. The basic steps are: OBSERVE something interesting. Form a HYPOTHESIS, which is a possible explanation. Design an EXPERIMENT to test it. Look at the RESULTS carefully. If the results match your hypothesis, you've learned something. If they don't, change your hypothesis and test again. Repeat as needed.`,
            `It sounds obvious now. It was revolutionary then. The scientific method demanded that no claim was safe just because someone important said it. Even a famous philosopher could be wrong if the evidence said so. Every modern science class still teaches this method, and almost every breakthrough in medicine, technology, and engineering since 1700 used some version of it. The Scientific Revolution didn't just produce new knowledge. It produced a better TOOL for finding new knowledge.`,
          ],
          image: `/ue-assets/history/l10-s2-method.webp`,
          imageCaption: `Observe. Hypothesize. Test. Refine. Repeat.`,
          vocab: [
            { word: `scientific method`,
              definition: `A way of testing ideas about how nature works: observe, form a hypothesis, run experiments, analyze the results, and refine the idea based on evidence.`,
              audioPrompt: `The scientific method is a way of testing ideas about how nature works, {name}. Observe something. Come up with a possible explanation, called a hypothesis. Design an experiment to test it. Look at the results. If the evidence supports your idea, great. If it doesn't, change your idea and try again. This method seems obvious now, but inventing it was one of the biggest breakthroughs in human history. Every modern science depends on it.` },
            { word: `evidence`,
              definition: `Observable facts or results from experiments that can be used to support or challenge a claim. In the scientific method, evidence always wins over tradition or authority.`,
              audioPrompt: `Evidence is observable facts or results that support or challenge a claim, {name}. In the scientific method, evidence is everything. No matter how famous a thinker is, if the evidence contradicts their claim, the claim must change. Galileo's telescope observations provided evidence that contradicted 1,400 years of accepted belief. Newton's mathematics provided evidence for universal gravity. Evidence is what separates science from opinion.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Thinkers Who Changed Everything`,
          paragraphs: [
            `NICOLAUS COPERNICUS published a book in 1543 arguing that the SUN, not Earth, was at the center of the solar system. For 1,400 years, almost everyone had believed Earth was the center of everything. Copernicus was right, but the idea took decades to be accepted. GALILEO GALILEI built telescopes and saw moons orbiting Jupiter, mountains on the Moon, and spots on the Sun. He defended Copernicus loudly and got in serious trouble with the Catholic Church, which put him under house arrest for the rest of his life.`,
            `ISAAC NEWTON, working in England in the late 1600s, brought it all together. He showed that the SAME LAWS that pull an apple to the ground ALSO keep the planets in orbit around the Sun. One set of mathematical rules described both. He invented calculus along the way. Newton's "Principia," published in 1687, is one of the most influential books in human history. Together, these three thinkers (and many others) replaced the medieval picture of the universe with a model so accurate it still works for almost everything you experience in daily life.`,
          ],
          image: `/ue-assets/history/l10-s3-thinkers.webp`,
          imageCaption: `Copernicus moved the Sun. Galileo built the telescope. Newton tied it together.`,
          vocab: [
            { word: `hypothesis`,
              definition: `A possible explanation for something you've observed, which can be tested through experiments.`,
              audioPrompt: `A hypothesis is a possible explanation for something, {name}. Not a wild guess. A specific, testable idea. "I think heavy balls fall faster than light balls because they have more mass." That's a hypothesis. You can test it by dropping different balls and timing them. Galileo did exactly that and found the hypothesis was wrong. All scientific work starts with a hypothesis and then tests it.` },
            { word: `Galileo`,
              definition: `An Italian scientist (1564–1642) who used telescopes to observe the sky, supported Copernicus's sun-centered model, and was punished by the Catholic Church for contradicting accepted beliefs.`,
              audioPrompt: `Galileo Galilei was an Italian scientist who lived from 1564 to 1642, {name}. He built some of the first powerful telescopes and used them to study the sky. He saw moons orbiting Jupiter, proving that not everything orbits Earth. He saw mountains on the Moon, proving the heavens weren't "perfect." He defended Copernicus's sun-centered model publicly. The Catholic Church put him under house arrest for the rest of his life. Galileo is one of the clearest examples of what it cost to challenge authority with evidence.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Still Shapes Everything`,
          paragraphs: [
            `By 1700, the basic outlines of modern science were in place. The next 300 years built on this foundation at incredible speed. Electricity. Germ theory. Evolution. Antibiotics. Computers. Vaccines. Space travel. Every one of these grew out of the method invented during the Scientific Revolution. Without it, the modern world is unimaginable. Your phone, your medicine, your transportation, your food supply, all depend on knowledge built scientifically.`,
            `The deeper gift wasn't any specific discovery. It was a NEW WAY of asking questions. Don't just trust what you're told. Don't accept claims just because they're old or popular. Test them. Look at the evidence. Be willing to change your mind when the evidence demands it. That habit of thought, more than any single invention, is what the Scientific Revolution gave humanity.`,
          ],
          image: `/ue-assets/history/l10-s4-legacy.webp`,
          imageCaption: `Modern medicine, technology, and engineering all built on this one habit.`,
          vocab: [
            { word: `experiment`,
              definition: `A test designed to check whether a hypothesis is correct. Experiments need careful design so the results actually show whether the idea holds up.`,
              audioPrompt: `An experiment is a test designed to check whether a hypothesis is correct, {name}. Good experiments are designed carefully. They control for variables. They have a clear way to measure results. Galileo's famous experiment of rolling balls down ramps tested whether heavy balls really did fall faster than light ones. Newton's experiments with prisms tested how white light splits into colors. Modern science is built on millions of careful experiments stacked over centuries.` },
            { word: `Isaac Newton`,
              definition: `An English scientist (1643–1727) who showed that the same laws of gravity govern objects on Earth and planets in space, and invented calculus. His work unified the Scientific Revolution.`,
              audioPrompt: `Isaac Newton was an English scientist who lived from 1643 to 1727, {name}. He showed that the same force (gravity) that pulls an apple to the ground also keeps the Moon in orbit around Earth and planets orbiting the Sun. He invented a whole new branch of mathematics called calculus to work it all out. His book the Principia, published in 1687, is still one of the most influential scientific works ever written. His mathematics is still accurate enough to send rockets to Mars today.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four claims about nature from the Scientific Revolution era. For each one, decide which category fits best: SUPPORTED BY EVIDENCE (real Scientific Revolution discovery), CHALLENGED OLD AUTHORITY (correctly overturned an ancient belief), or TURNED OUT WRONG (an early hypothesis that was later corrected)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `supported`,    label: `Supported by Evidence`,   color: `#34D399`, description: `A real Scientific Revolution finding backed by careful observation and experiment.` },
            { id: `challenged`,   label: `Challenged Old Authority`, color: `#60A5FA`, description: `A claim that correctly overturned a long-held but wrong ancient belief.` },
            { id: `turned-wrong`, label: `Turned Out Wrong`,         color: `#F87171`, description: `An early hypothesis that seemed reasonable at the time but was later proven incorrect.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Claim #1`,
              clues: [
                { text: `Copernicus argued the SUN, not Earth, was at the center of the solar system.` },
                { text: `For 1,400 years, Europeans had followed Ptolemy's model with Earth at the center.` },
                { text: `Galileo's telescope observations later supported Copernicus.` },
              ],
              correctAnswer: `challenged`,
              realWorldExample: `Copernicus's heliocentric model, one of the most important shifts in scientific history.`,
              explanation: `Copernicus was challenging Ptolemy, an ancient Greek authority who had been trusted for over a thousand years. His model was right, but at the time he was directly contradicting accepted authority. That's the definition of challenging old authority.`,
            },
            {
              id: `case-2`,
              caseTitle: `Claim #2`,
              clues: [
                { text: `Galileo dropped balls of different weights from a tall tower (the story may be legend, but he definitely did similar experiments with ramps).` },
                { text: `He measured the time it took each ball to fall.` },
                { text: `Aristotle had said heavier balls would fall faster. Galileo's experiments showed all balls fall at the same rate.` },
              ],
              correctAnswer: `supported`,
              realWorldExample: `Galileo's experiments on falling bodies became foundational physics.`,
              explanation: `Galileo's claim was tested by experiment and supported by real evidence. The balls really did fall at the same rate, regardless of weight. This is the scientific method in action. A claim backed by careful measurement is supported.`,
            },
            {
              id: `case-3`,
              caseTitle: `Claim #3`,
              clues: [
                { text: `Many scientists of the 1600s believed light traveled through an invisible material called "ether" filling all of space.` },
                { text: `Even Newton himself thought something like ether existed.` },
                { text: `In 1887, careful experiments by Michelson and Morley showed no ether could be detected.` },
              ],
              correctAnswer: `turned-wrong`,
              realWorldExample: `The "ether" theory was eventually disproven, paving the way for Einstein's relativity.`,
              explanation: `Scientists of the Scientific Revolution and after assumed an "ether" filled space. It was a reasonable hypothesis. But two centuries later, experiments proved no ether existed. The lesson: even brilliant scientists working with the scientific method can be wrong. Science self-corrects over time. That's its strength.`,
            },
            {
              id: `case-4`,
              caseTitle: `Claim #4 — The Tricky One`,
              clues: [
                { text: `Newton showed that the SAME laws govern an apple falling from a tree AND the Moon orbiting Earth.` },
                { text: `Before Newton, most people thought Earth and the heavens followed completely different rules.` },
                { text: `Newton's mathematics is still accurate enough to send rockets to Mars today.` },
              ],
              correctAnswer: `supported`,
              realWorldExample: `Newton's law of universal gravitation is one of the most successful scientific theories ever.`,
              explanation: `Tricky because Newton's claim could ALSO count as "challenging old authority." It really did overturn ancient beliefs that heaven and earth followed different laws. But the strongest fit is "supported by evidence." Newton's math was tested for centuries and worked every single time. It's still used today by NASA. When a claim is BOTH revolutionary AND massively supported by evidence, "supported" wins. The lesson: many great scientific revolutions are both, but evidence is the real foundation.`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `Roughly when did the Scientific Revolution take place?`,
              options: [
                `100-300 CE`,
                `1500-1700 CE`,
                `1800-1900 CE`,
                `1950-Today`,
              ],
              correctIndex: 1,
              explanation: `The Scientific Revolution happened roughly from 1500 to 1700 CE in Europe, building on knowledge passed forward from the Islamic Golden Age and ancient Greece.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `What's the SCIENTIFIC METHOD?`,
              options: [
                `Memorizing what scientists wrote`,
                `Observing, forming a hypothesis, experimenting, looking at the results, and refining the idea based on evidence`,
                `Voting on what's true`,
                `Asking authority figures`,
              ],
              correctIndex: 1,
              explanation: `The scientific method is a process for testing ideas against reality. Observation, hypothesis, experiment, results, refinement. It's the most important tool for finding out how nature works that humans have ever invented.` },

            { id: `l10-q3`, format: `multiple-choice`,
              question: `What was COPERNICUS's big idea?`,
              options: [
                `Earth is flat`,
                `The Sun, not Earth, is at the center of the solar system`,
                `There's no center`,
                `Stars are gods`,
              ],
              correctIndex: 1,
              explanation: `Copernicus argued in 1543 that Earth orbits the Sun, not the other way around. It contradicted 1,400 years of accepted belief. He was right, but the idea took decades to be widely accepted.` },

            { id: `l10-q4`, format: `multiple-choice`,
              question: `What did GALILEO use his telescope to discover?`,
              options: [
                `New planets`,
                `Moons orbiting Jupiter, mountains on the Moon, and spots on the Sun`,
                `Aliens`,
                `Nothing important`,
              ],
              correctIndex: 1,
              explanation: `Galileo's telescope observations supported Copernicus and overturned centuries of belief that the heavens were "perfect." He saw moons orbiting Jupiter (proving things orbited bodies other than Earth) and imperfections on the Moon and Sun.` },

            { id: `l10-q5`, format: `true-false`,
              question: `True or false: Isaac Newton showed that the same physical laws apply to an apple falling AND to the Moon orbiting Earth.`,
              correctAnswer: true,
              explanation: `True. This was one of Newton's most important insights. Before him, people thought Earth and the heavens followed different rules. Newton showed gravity works the same everywhere. His mathematics is still accurate enough to send rockets into space.` },

            { id: `l10-q6`, format: `multiple-choice`,
              question: `What is a HYPOTHESIS?`,
              options: [
                `A proven fact`,
                `A possible, testable explanation for something you've observed`,
                `A guess with no evidence`,
                `Another word for theory`,
              ],
              correctIndex: 1,
              explanation: `A hypothesis is a specific, testable explanation. Not a random guess, and not a proven fact, but an idea you can check with experiments. "Heavy balls fall faster than light balls" is a hypothesis. Galileo tested it and found it was wrong.` },

            { id: `l10-q7`, format: `multiple-choice`,
              question: `Why was the Scientific Revolution so important?`,
              options: [
                `It produced cool facts`,
                `It produced a NEW METHOD for finding knowledge, which led to almost every modern advance in medicine, technology, and engineering`,
                `It made Europe rich`,
                `It ended religion`,
              ],
              correctIndex: 1,
              explanation: `The biggest gift wasn't any one discovery. It was the scientific METHOD itself. Once humans had this tool, the speed of knowledge gain exploded. Everything from electricity to vaccines to space travel came from applying the same basic approach.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `Why does science still self-correct today, just as it did during the Scientific Revolution?`,
              options: [
                `Scientists are smarter now`,
                `Because the scientific method requires evidence, when better experiments contradict old ideas, the ideas must change`,
                `Science is always right`,
                `Modern technology never makes mistakes`,
              ],
              correctIndex: 1,
              explanation: `The strength of the scientific method is that it never settles for "we already know this." Even confident scientists can be wrong, and better evidence forces ideas to change. The "ether" theory was overturned. Newton's physics was refined by Einstein. Self-correction is how science gets closer to truth over time.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's something you used to believe that turned out to be wrong when you learned more about it? How did finding out feel?` },
            { id: `r2`, text: `Galileo was punished for telling the truth. Why do you think powerful people sometimes resist new evidence, even today?` },
            { id: `r3`, text: `If you had a hypothesis about something in your life right now (school, friends, the world), what experiment could you design to test it?` },
            { id: `r4`, text: `The scientific method requires you to change your mind when evidence demands it. Is that easy or hard for humans? Why?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `The scientific method is one of the most useful skills any person can develop, not just scientists. Anyone making real-life decisions benefits from testing ideas against evidence instead of just trusting first impressions. Doctors check whether treatments actually work. Engineers test whether bridges actually hold weight. Even good cooks experiment with recipes and refine them. The pattern from the Scientific Revolution shows up everywhere good thinking happens today.`,
          familyAdventure: `Family Experiment Night. Pick something the family wonders about. Does ice melt faster in salt water or fresh water? Does putting a wet towel in the freezer make it dry faster? Does music help homework focus? Form a hypothesis, design a simple experiment, run it, and discuss the results. This is exactly what Galileo, Newton, and other Scientific Revolution thinkers were doing 400 years ago, just at a smaller scale.`,
          creativePrompt: {
            intro: `Imagine you're an assistant to Galileo in the year 1610. He hands you his telescope and asks you to make observations of the night sky. Write a journal entry about what you see.`,
            floor: `Write at least 5 sentences. Describe what you see through the telescope, what surprises you, and what you wonder.`,
            stretch: `Write 8 to 10 sentences. Cover what you observe, how it contradicts what you were taught, what you and Galileo discuss, and what risks come with publishing these findings.`,
            open: `Write as much as you want. Build a full first-person account that captures the wonder of looking at the universe properly for the first time AND the danger of contradicting the Church's official teaching.`,
            frames: [
              `Tonight Galileo asked me to look through his telescope at ___.`,
              `What I saw was ___.`,
              `This surprised me because ___.`,
              `Galileo says this means ___.`,
              `The danger of saying this publicly is ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what the Scientific Revolution was, describe the scientific method, name important thinkers like Copernicus, Galileo, and Newton, and understand why this shift made the modern world possible. Next lesson: a different kind of revolution. The INDUSTRIAL REVOLUTION, which changed how humans work, live, and even think about time itself. See you there. — Lyra.`,
          badge: `revolution-scientist`,
          badgeName: `Revolution Scientist`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L10.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L10 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
