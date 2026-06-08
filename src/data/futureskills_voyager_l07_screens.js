// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L07 — Problem Solving
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Problem Solving, Heuristics, Engineering Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (top-down first principles / bottom-up empirical / hybrid iterative)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l07-v1";

const FUTURESKILLS_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-07`,
      title: `Problem Solving`,
      duration: 35,
      xpReward: 75,
      badge: `problem-solver`,
      badgeName: `Problem Solver`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, you face problems every day. Most are small ("how do I get this done before dinner"). Some are bigger ("how do I deal with this conflict with my friend"). Eventually you'll face larger ones ("what should I do with my career", "how should we approach this engineering challenge", "how should we structure this business"). Here's the thing nobody tells you: there are real frameworks for problem solving, with real tradeoffs, used by real high-performers. Most people just default to whatever feels natural and never realize there are other approaches that would work better for certain problems. Today we work through three real approaches: top-down first-principles thinking, bottom-up empirical thinking, and the hybrid approach that combines both. Build your argument for which framework you'd commit to as your default. By the end you'll be thinking about problems more deliberately than most adults.`,
          headline: `Problem Solving`,
          subtitle: `Three real approaches. Real tradeoffs. Most people use one without knowing the others exist.`,
          visual: `/voyager-assets/future-skills/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Problem Solving" Actually Means`,
          paragraphs: [
            `A problem is a gap between where you are and where you want to be, plus some uncertainty about how to close the gap. If you knew exactly what to do, it wouldn't be a problem; it would just be a task. Problem solving is the work of figuring out what to do when the path isn't obvious.`,
            `Problems vary along several dimensions. Some are well-defined (clear goal, clear constraints, mostly about finding the right path). Others are ill-defined (the goal itself is fuzzy, constraints unclear, the problem is partly about figuring out what the problem actually is). Some have unique correct answers; others have many acceptable answers. Some can be solved in your head; others require physical experimentation. Some happen on a timescale of minutes; others of decades.`,
            `These differences matter because different approaches work for different problems. A math homework problem (well-defined, unique answer, head-solvable) calls for different methods than designing a community garden (ill-defined, multiple acceptable answers, requires physical experimentation). Many people default to one problem-solving style and apply it to every situation, which is part of why some problems get solved poorly.`,
            `Real research on expert problem solving has produced consistent findings since at least the 1940s, starting with George Pólya's classic "How to Solve It" (1945). Experts approach problems differently from novices: they spend more time understanding the problem before attacking it, they recognize patterns from previous similar problems, they break problems into sub-problems, they monitor whether their approach is working and switch when it isn't. These features are learnable. They're also the foundation for the three approaches we're going to compare today.`,
          ],
          image: `/voyager-assets/future-skills/l07-s1-problems.webp`,
          imageCaption: `Problems vary; approaches should too. Defaulting to one style misses what makes expert problem solving work.`,
          vocab: [
            {
              word: `heuristic`,
              definition: `Mental shortcut or rule of thumb for solving problems that doesn't guarantee a correct answer but typically gets you to a good answer faster than exhaustive analysis. From Greek "to discover." George Pólya's "How to Solve It" (1945) is the foundational text on heuristics. Real problem solving uses many heuristics rather than rigid algorithms.`,
              audioPrompt: `A heuristic is a mental shortcut or rule of thumb for solving problems, {name}. The word comes from Greek and means "to discover." Heuristics don't guarantee a correct answer, but they typically get you to a good answer faster than exhaustive analysis. George Pólya's classic 1945 book "How to Solve It" is the foundational text on heuristics. Pólya proposed heuristics like "have you seen a similar problem before?" "Can you solve a simpler version of this problem?" "Can you work backward from the goal?" Real problem solving uses many heuristics rather than rigid algorithms. The skill is having a large repertoire of heuristics and choosing the right one for the problem in front of you. This is one of the most useful intellectual skills available and is genuinely learnable.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Approach 1: Top-Down (First Principles)`,
          paragraphs: [
            `The top-down approach starts from fundamentals and derives solutions. You identify the most basic, irreducible aspects of the problem, then build up to specific solutions from there. The classic version is "first principles" thinking, popularized by Elon Musk but with roots going back to Aristotle's notion of "first causes" and Descartes's method of beginning with what cannot be doubted.`,
            `First-principles thinking in practice. Take a difficult problem (say, "how do we make rocket launches cheap"). Ask what's actually true at the fundamental level (rockets need fuel, structure, engines; the materials cost X dollars per kilogram). Then ask whether current solutions reflect those fundamentals or just accumulated convention ("rockets are expensive because they've always been expensive" is a non-answer). This is how SpaceX approached rocket launches, why they ended up with reusable boosters, and why they could undercut competitors who took the existing structure for granted.`,
            `Top-down works powerfully when you can correctly identify the actual fundamentals. It cuts through accumulated assumptions, conventions, and dogma. People who reason from first principles often see solutions that everyone else missed because they weren't questioning the underlying frame. Top-down also produces clean explanations that can be communicated and replicated.`,
            `Top-down has real limits. The "fundamentals" you start from can themselves be wrong, in which case the elegant reasoning produces an elegant wrong answer. It works less well for problems involving messy human behavior, complex systems with many interacting variables, or domains where you don't actually understand the fundamentals (which is most of biology, psychology, economics, and any field involving emergent complexity). Aristotle reasoned beautifully from first principles to many wrong conclusions about physics because his "first principles" were wrong. Top-down without good empirical grounding can be confidently wrong at scale.`,
            `Major defenders of top-down thinking include physicists (the entire approach of theoretical physics), some engineers, and writers like Elon Musk (in his more careful moments) and Naval Ravikant. The approach has real power when applied to problems where fundamentals can be correctly identified.`,
          ],
          image: `/voyager-assets/future-skills/l07-s2-topdown.webp`,
          imageCaption: `Top-down: start from fundamentals, derive solutions. Powerful when fundamentals are right; elegant wrong answers when they're not.`,
          vocab: [
            {
              word: `first principles thinking`,
              definition: `Approach to problem solving that begins with the most basic, irreducible aspects of a problem and builds up to solutions from there. Has roots in Aristotle and Descartes. Popularized in modern usage by Elon Musk. Cuts through accumulated convention but only works well when you can correctly identify the actual fundamentals.`,
              audioPrompt: `First principles thinking is an approach to problem solving that begins with the most basic, irreducible aspects of a problem and builds up to solutions from there, {name}. The approach has roots going back at least to Aristotle's notion of first causes and Descartes's method of beginning with what cannot be doubted. In modern usage, the term has been popularized by Elon Musk, who used it to approach rocket launches. The classic application: rockets are expensive because of accumulated convention; the materials themselves are much cheaper than the launch prices suggested. Therefore SpaceX could find ways to make rockets cheap by questioning the conventions and starting from materials cost. First principles thinking cuts through accumulated conventions and dogma. It only works well when you can correctly identify the actual fundamentals. When fundamentals are wrong, first principles thinking produces elegant wrong answers.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Approach 2: Bottom-Up (Empirical)`,
          paragraphs: [
            `The bottom-up approach starts with concrete observations and experiments, then builds up patterns from there. You don't claim to know the fundamentals; you let the data tell you what's actually true. This is the approach of empirical science, design thinking, evolutionary processes, and many forms of skilled craft. It's also what most working scientists actually do, despite the popular image of science as deductive theorizing.`,
            `Bottom-up thinking in practice. Take a problem (say, "what makes some students learn faster than others"). Don't start with a theory; observe many students learning, look for patterns, run small experiments to test what you think you see, refine the patterns as more data comes in. The scientific method, properly understood, is essentially bottom-up. The patterns you end up with might not match what theory would have predicted, but they fit reality better.`,
            `Bottom-up works powerfully when you don't trust your theoretical models, when the system is complex enough that your assumptions are probably wrong, or when small experimentation is cheap. Bottom-up tolerates uncertainty about fundamentals because it's not relying on them. It updates as evidence comes in. It catches surprises that top-down approaches would miss. Most progress in biology, medicine, and social science comes from bottom-up work.`,
            `Bottom-up has its own limits. It can be expensive and slow (running real experiments takes time). It produces correlations that may or may not reflect underlying causes; you can find a robust pattern without understanding why it works. It risks getting stuck in local optima (refining the same approach forever without realizing a completely different approach would work better). And it requires actual experimentation infrastructure, which not every problem allows.`,
            `Major defenders of bottom-up thinking include working scientists, design thinkers (Tim Brown, IDEO), Lean Startup advocates (Eric Ries), and educators who emphasize learning by doing. The approach has real power when applied to complex domains where fundamentals are hard to identify with confidence.`,
          ],
          image: `/voyager-assets/future-skills/l07-s3-bottomup.webp`,
          imageCaption: `Bottom-up: start with observations, build patterns from data. Powerful for complex systems; can get stuck in local optima.`,
          vocab: [
            {
              word: `empirical`,
              definition: `Based on observation and experiment rather than pure theory. Empirical claims are grounded in actual evidence. The scientific method, design thinking, and many forms of skilled practice are empirical at their core. Distinct from "rational" or "theoretical" approaches, though the best problem solving usually combines both.`,
              audioPrompt: `Empirical means based on observation and experiment rather than pure theory, {name}. Empirical claims are grounded in actual evidence: you ran experiments, observed what happened, looked for patterns. The scientific method, design thinking, and many forms of skilled practice are empirical at their core. The opposite is "rational" or "theoretical" approaches, which start from premises and reason out conclusions without necessarily testing them against reality. The best problem solving usually combines both: you use theory to suggest experiments, then experiments to refine theory. Pure empirical work without theory can be slow and disjointed; pure theoretical work without empirical grounding can be confidently wrong. The distinction matters because different approaches dominate different fields. Physics is more theoretical at the highest levels; biology, psychology, and most engineering are more empirical.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Approach 3: Hybrid / Iterative`,
          paragraphs: [
            `The hybrid approach alternates between top-down and bottom-up. You use whatever fundamentals you do have to generate initial hypotheses, then test them empirically, then update the fundamentals based on what you learned, then generate new hypotheses, and so on. This is what most experienced problem solvers actually do, despite their being described (or describing themselves) as one or the other.`,
            `Hybrid thinking in practice. Take a real problem (say, "what should I build for my next school project"). Start with whatever you know about the fundamentals (what counts as good in this domain, what your constraints are, what's been tried before). Generate three or four candidates that seem promising from those fundamentals. Test the candidates against reality (talk to your audience, build small prototypes, look for early signals). Use what you learn to revise both your candidate solutions AND your model of the fundamentals. Iterate.`,
            `The hybrid approach is closer to how real engineering, real research, and real design actually work. Donald Schön's concept of "reflection-in-action" describes this pattern: practitioners alternate between executing on their current best understanding and stepping back to revise that understanding based on what they're observing. It's the same loop that drives effective scientific work, despite the textbook version of "the scientific method" oversimplifying it.`,
            `Hybrid thinking has the strengths of both approaches. It's grounded in fundamentals enough to generate non-obvious candidates. It's empirical enough to update when reality contradicts theory. It tolerates uncertainty in both directions: you don't have to claim full confidence in your fundamentals OR claim that empirical work alone will discover everything. Most expert problem solvers eventually settle into some version of this pattern across many domains.`,
            `The hybrid approach also has limits. It's less elegant in description than either pure top-down or pure bottom-up. It's harder to teach because it requires judgment about when to lean which way. And it can be slower than either pure approach when the situation is well-suited to one approach. Pure top-down is faster for well-defined math problems; pure bottom-up is faster for some kinds of design problems. Hybrid is more general but not always optimal.`,
            `Defenders of hybrid thinking include most working scientists who reflect honestly on their practice, design thinkers who go beyond pure user-research approaches, engineers who combine fundamentals with prototyping, and writers like Donald Schön ("The Reflective Practitioner," 1983), Stuart Russell, and Daniel Kahneman. The approach is what most expert problem solvers converge on with enough experience.`,
          ],
          image: `/voyager-assets/future-skills/l07-s4-hybrid.webp`,
          imageCaption: `Hybrid: alternate between top-down and bottom-up. What most experienced solvers actually do, even when they describe themselves as one or the other.`,
          vocab: [
            {
              word: `reflection-in-action`,
              definition: `Concept from Donald Schön's "The Reflective Practitioner" (1983): the pattern where skilled practitioners alternate between executing on their current best understanding and stepping back to revise that understanding based on what they observe. The core loop of expert problem solving in many domains.`,
              audioPrompt: `Reflection-in-action is a concept from Donald Schön's 1983 book "The Reflective Practitioner," {name}. Schön studied how skilled practitioners actually work across many domains: architects, doctors, engineers, urban planners. His finding: skilled practitioners alternate between executing on their current best understanding and stepping back to revise that understanding based on what they observe. They don't fully apply theory; they don't fully wing it. They do both at once, in iterative cycles. Schön called this reflection-in-action. The core loop of expert problem solving in many domains. It's what most experienced practitioners do regardless of whether they describe themselves as theoretical or empirical. Knowing about reflection-in-action helps you recognize it in skilled people you observe and develop the same pattern in your own work over time.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three approaches aren't strictly mutually exclusive. Most expert problem solvers use elements of all three. But people typically have a default that they lean toward, and the default shapes how they approach new problems. Identifying your current default and choosing it deliberately (rather than inheriting it by accident) is the immediate value of this lesson.`,
            `One framing to consider. Each approach assumes a different relationship between theory and evidence. Top-down assumes you can know enough fundamentals to derive useful solutions from them. Bottom-up assumes the fundamentals are too uncertain to trust, so you should let evidence lead. Hybrid assumes both have some validity and the skill is alternating between them appropriately. Which assumption feels most accurate about how the world actually works?`,
            `Another framing. Each approach has different cost structures. Top-down is cheap (no experiments needed) but risks being elegantly wrong. Bottom-up is expensive (experiments take time and resources) but is harder to get wrong by elegant theorizing. Hybrid is medium-cost but requires judgment about when to lean which way. Which cost structure fits the kinds of problems you'll actually face?`,
            `One final framing. The point of building an argument today isn't to lock in a permanent approach. The point is to make explicit what's usually implicit. Most people develop a problem-solving style by accident and never realize they had alternatives. Once you can name three approaches and articulate their tradeoffs, you can choose more deliberately. Your choice may evolve as you face different problems and develop different skills. Today is the start.`,
          ],
          image: `/voyager-assets/future-skills/l07-s5-before.webp`,
          imageCaption: `Make your default explicit. Real expert problem solvers know the alternatives even when they prefer one approach.`,
          vocab: [
            {
              word: `meta-cognition`,
              definition: `Awareness of your own problem-solving process: knowing which approach you're using, when it's working, when to switch, when to back up. Expert problem solvers spend significant cognitive effort on meta-cognition; novices typically don't. The skill is learnable and pays compounding returns across problem domains.`,
              audioPrompt: `Meta-cognition in problem solving is awareness of your own problem-solving process, {name}. Knowing which approach you're using. Knowing when it's working. Knowing when to switch to a different approach. Knowing when to back up and reconsider your framing of the problem itself. Expert problem solvers spend significant cognitive effort on meta-cognition. Novices typically don't; they execute one approach and either get an answer or get stuck. The meta-cognition skill is learnable and pays compounding returns across problem domains. Pólya's heuristics in "How to Solve It" are partly heuristics about heuristics: when to use which technique. Schön's reflection-in-action is largely meta-cognitive. The kids who develop meta-cognitive awareness at 12 will outperform peers who never develop it.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l07-argument-builder`,
          type: `argument-builder`,
          headline: `Which Problem-Solving Approach Should Be Your Default?`,
          intro: `Pick the approach that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real high-performers defend each.`,
          positions: [
            {
              id: `top-down`,
              label: `Top-down (first principles): start from fundamentals, derive solutions`,
              summary: `Start with the most basic, irreducible aspects of a problem; build up to specific solutions from there. Cuts through accumulated convention and dogma. Powerful when you can correctly identify the actual fundamentals. Used by theoretical physicists and reasoning-from-fundamentals engineers. Defenders include Elon Musk (in his more careful moments), Naval Ravikant, theoretical physicists. Limit: fundamentals you start from can be wrong, producing elegant wrong answers. Aristotle reasoned beautifully from first principles to many incorrect conclusions about physics.`,
            },
            {
              id: `bottom-up`,
              label: `Bottom-up (empirical): start with observations and experiments`,
              summary: `Don't claim to know fundamentals; let data tell you what's actually true. Observe, look for patterns, run small experiments, refine patterns as more data comes in. The actual practice of working scientists, design thinkers, Lean Startup methodology. Defenders include Tim Brown (IDEO), Eric Ries (Lean Startup), working scientists, evolutionary approaches. Powerful for complex systems where fundamentals are uncertain. Limit: can be slow and expensive; produces correlations that may not reflect underlying causes; can get stuck in local optima.`,
            },
            {
              id: `hybrid`,
              label: `Hybrid (iterative): alternate between top-down and bottom-up`,
              summary: `Use whatever fundamentals you do have to generate hypotheses; test empirically; update fundamentals based on what you learned; generate new hypotheses. Donald Schön's "reflection-in-action" (1983). What most expert problem solvers actually do across many domains. Defenders include Schön, most working scientists who reflect honestly on practice, design thinkers beyond pure user-research, engineers combining fundamentals with prototyping. Strength: combines both approaches' advantages. Limit: less elegant in description, harder to teach, not always optimal when situation is well-suited to one pure approach.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Theoretical physics has produced extraordinary results through first-principles thinking: Einstein deriving general relativity largely from thought experiments and mathematical structure, with empirical confirmation coming later. First-principles thinking can produce massive leaps that empirical work alone wouldn't have found.`,
              source: `History of theoretical physics; Einstein 1915 general relativity development`,
            },
            {
              id: `e2`,
              text: `Aristotle reasoned from first principles to many wrong conclusions about physics (heavier things fall faster, vacuum is impossible, motion requires constant force). Galileo and Newton overturned these through empirical work. First-principles thinking with wrong fundamentals can produce confident wrong answers at scale.`,
              source: `History of science; multiple historical analyses`,
            },
            {
              id: `e3`,
              text: `Most progress in biology, medicine, and behavioral science comes from bottom-up empirical work. Theories often follow patterns observed in data rather than predicting them in advance. Bottom-up dominates these domains because the complexity is too high for top-down derivation.`,
              source: `Standard philosophy of biology and medicine; multiple sources`,
            },
            {
              id: `e4`,
              text: `Donald Schön's "The Reflective Practitioner" (1983) studied how skilled practitioners actually work across architects, doctors, engineers, urban planners. His finding: they alternate between executing current best understanding and revising it based on what they observe. The hybrid pattern is what experts converge on empirically.`,
              source: `Schön 1983; subsequent professional practice research`,
            },
            {
              id: `e5`,
              text: `SpaceX's reusable rockets came from first-principles questioning of accumulated convention: rockets are expensive because they've always been expensive; the materials themselves are cheap. First-principles thinking produced solutions decades of incremental aerospace engineering had missed.`,
              source: `SpaceX history; multiple analyses of aerospace innovation`,
            },
            {
              id: `e6`,
              text: `Lean Startup methodology (Eric Ries, 2011) formalized bottom-up empirical iteration for businesses: build small experiments, measure user response, learn, iterate. Has been applied successfully across thousands of businesses. The empirical-iteration approach often outperforms careful top-down business planning.`,
              source: `Ries 2011; multiple business case studies`,
            },
            {
              id: `e7`,
              text: `George Pólya's "How to Solve It" (1945) catalogued problem-solving heuristics used by expert mathematicians. The heuristics include both top-down ("can you derive this from a more general principle?") and bottom-up ("can you find a simpler version of this problem to solve first?"). Pólya's framework is implicitly hybrid.`,
              source: `Pólya 1945; foundational problem-solving research`,
            },
            {
              id: `e8`,
              text: `Daniel Kahneman's "Thinking, Fast and Slow" (2011) describes System 1 (fast, intuitive, pattern-based) and System 2 (slow, deliberate, principled). Expert performance often combines both: deliberate top-down reasoning checked against intuitive pattern-recognition built up empirically over time. Pure System 1 or pure System 2 alone tends to underperform their combination.`,
              source: `Kahneman 2011; extensive cognitive psychology research`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked an approach. Here's the strongest objection. All three positions assume that having ANY default problem-solving approach is better than having no default at all. But maybe the right move is to be radically context-dependent: use top-down for well-defined math problems, bottom-up for design problems, hybrid for engineering problems, and pure intuition for fast-moving social situations. The 'default approach' framing might itself be the mistake. Why think you should commit to one approach instead of becoming fluent in matching approach to problem? Isn't claiming any default just a way to feel more organized than you actually are?"`,
            promptInstruction: `In 3-4 sentences, respond. Is the "default approach" framing itself the right framing? Or should you become fluent in matching approach to problem without commitment to any default? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the two approaches you didn't pick, which one would you find hardest to dismiss if pressed? Why?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a "problem" in problem-solving terms?`,
              options: [
                `Something bad that happened`,
                `A gap between where you are and where you want to be, plus some uncertainty about how to close the gap; if you knew exactly what to do, it wouldn't be a problem, it would be a task`,
                `A math equation`,
                `Random difficulties`,
              ],
              correctIndex: 1,
              explanation: `Problems involve uncertainty about the path. Different kinds of problems (well-defined vs ill-defined, unique answer vs many acceptable answers, fast vs slow timescale) call for different approaches.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a "heuristic"?`,
              options: [
                `A scientific theory`,
                `Mental shortcut or rule of thumb for solving problems that doesn't guarantee correct answers but typically gets you to good answers faster than exhaustive analysis; George Pólya's "How to Solve It" (1945) is foundational; real problem solving uses many heuristics rather than rigid algorithms`,
                `A logical proof`,
                `A computer algorithm`,
              ],
              correctIndex: 1,
              explanation: `The skill is having a large repertoire of heuristics and choosing the right one for the problem in front of you. Pólya's heuristics include "have you seen a similar problem before?" "Can you solve a simpler version?" "Can you work backward from the goal?"`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "first principles thinking"?`,
              options: [
                `Following rules`,
                `Approach to problem solving that begins with the most basic, irreducible aspects of a problem and builds up to solutions from there; roots in Aristotle and Descartes; popularized by Elon Musk; cuts through convention but only works when fundamentals are correctly identified`,
                `Original ideas`,
                `Starting over`,
              ],
              correctIndex: 1,
              explanation: `SpaceX's reusable rockets came from first-principles questioning: rockets are expensive because they've always been expensive; the materials are cheap. First principles thinking produced solutions decades of incremental aerospace engineering had missed.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the limit of top-down (first principles) thinking?`,
              options: [
                `It's too slow`,
                `The "fundamentals" you start from can themselves be wrong, producing elegant wrong answers; works less well for messy human behavior, complex systems with many interacting variables, or domains where fundamentals aren't really known; Aristotle reasoned beautifully to many incorrect conclusions`,
                `It's too fast`,
                `Too math-heavy`,
              ],
              correctIndex: 1,
              explanation: `Top-down can produce confident wrong answers at scale when fundamentals are wrong. Aristotle is the historical case study; many fields where humans don't actually understand fundamentals are modern cases. Empirical grounding helps.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "empirical" problem solving?`,
              options: [
                `Old-fashioned`,
                `Based on observation and experiment rather than pure theory; grounded in actual evidence; the scientific method, design thinking, and many forms of skilled practice are empirical at their core; distinct from rational/theoretical approaches though best problem solving combines both`,
                `Just guessing`,
                `Mathematical proof`,
              ],
              correctIndex: 1,
              explanation: `Most progress in biology, medicine, and behavioral science comes from bottom-up empirical work. Theories often follow patterns observed in data rather than predicting them. Bottom-up dominates complex domains.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "reflection-in-action"?`,
              options: [
                `Looking in a mirror`,
                `Concept from Donald Schön's "The Reflective Practitioner" (1983): pattern where skilled practitioners alternate between executing on current best understanding and stepping back to revise based on what they observe; core loop of expert problem solving across many domains`,
                `Meditation while working`,
                `Reviewing your work`,
              ],
              correctIndex: 1,
              explanation: `Schön studied architects, doctors, engineers, urban planners. His finding: they alternate between execution and revision in iterative cycles. They don't fully apply theory; they don't fully wing it. They do both at once. This is what most expert problem solvers converge on.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the hybrid approach to problem solving?`,
              options: [
                `Cars`,
                `Alternate between top-down and bottom-up: use whatever fundamentals you have to generate hypotheses, test empirically, update fundamentals based on what you learned, generate new hypotheses; what most expert problem solvers actually do across many domains; described by Schön (1983), implicit in Pólya, Kahneman, others`,
                `Half-thinking`,
                `Compromise approach`,
              ],
              correctIndex: 1,
              explanation: `Strength: combines both approaches' advantages. Limit: less elegant in description, harder to teach, requires judgment about when to lean which way. Most expert problem solvers eventually settle into some version of this pattern.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "meta-cognition" in problem solving?`,
              options: [
                `Thinking about thinking`,
                `Awareness of your own problem-solving process: knowing which approach you're using, when it's working, when to switch, when to back up; expert problem solvers spend significant cognitive effort on this; novices typically don't; learnable, pays compounding returns`,
                `Higher-level math`,
                `Philosophy`,
              ],
              correctIndex: 1,
              explanation: `The meta-cognition skill is learnable and pays compounding returns across problem domains. Pólya's heuristics are partly heuristics about heuristics: when to use which technique. Kids who develop meta-cognitive awareness at 12 will outperform peers who never do.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three approaches (top-down, bottom-up, hybrid) is clearly the right one and the other two are mistakes.`,
              correctAnswer: false,
              explanation: `False. Each approach has real strengths and real limits. Top-down works well when fundamentals are knowable; bottom-up works well for complex domains where they aren't; hybrid combines both for many real problems. Most expert problem solvers use elements of all three depending on the problem.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I just dive in and try things until something works—why think it through?" Based on this lesson, what's the most useful response?`,
              options: [
                `"You're right, thinking is overrated"`,
                `"That's pure bottom-up empirical, which is one defensible approach—working scientists, designers, and Lean Startup advocates use it. But it has real limits: it can be expensive and slow, it can get stuck refining the same approach without realizing a completely different approach would work better, and it doesn't help you anticipate problems before they bite. Try the hybrid alternative: start with whatever fundamentals you do know (constraints, goals, what's been tried), generate two or three candidate approaches that seem promising, then test empirically. You combine the speed of having a starting hypothesis with the reality-check of actually trying things. Most expert problem solvers use this hybrid pattern even when they describe themselves as 'just diving in.'"`,
                `"Thinking is everything; never just try"`,
                `"All problems are the same"`,
              ],
              correctIndex: 1,
              explanation: `Real applied problem-solving literacy. Don't dismiss "just diving in" as wrong; identify it as one defensible approach with specific limits. Offer the hybrid alternative. This is how meta-cognitive understanding transfers into useful advice.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your default problem-solving approach? Did you know there were alternatives?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Think about the last hard problem you solved well. Which approach did you actually use? Was it the one you'd describe yourself as using?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can deliberately match approach to problem rather than defaulting to one style, what does that change about your capability across the next 50 years?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current problem you're stuck on. Try each approach mentally: what would top-down suggest? What would bottom-up suggest? What would hybrid suggest? Notice which generates the most useful options.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there approaches the lesson didn't cover? What about pure intuition, expert-guided learning, community-based problem solving? Where do those fit?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult who's good at solving hard problems: how do they actually approach a new problem? Listen for whether they describe top-down, bottom-up, hybrid, or something else.` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Problem-solving frameworks compound over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Problem-Solving Audit`,
            duration: `40 minutes`,
            description: `At dinner, share the three approaches. Ask each family member to think about a recent problem they solved (work, household, relationship, life decision). Which approach did they actually use? Did they realize at the time? Most family members will discover they have a default they never named. The conversation reveals how different family members approach problems differently, which explains a lot about why some conversations get stuck.`,
          },
          projectOption: {
            title: `Run A Three-Approach Experiment On One Real Problem, 3 weeks (optional)`,
            duration: `3 weeks, ~30 minutes per session`,
            description: `Pick a real problem you're facing (school project, hobby challenge, social situation). Spend one week trying pure top-down: identify fundamentals, derive candidate solutions, evaluate. Spend the next week trying pure bottom-up: run small experiments, observe results, iterate. Spend the third week with explicit hybrid alternation. Write 2,000 words at the end on what each approach revealed and what fits your thinking best. Real applied problem-solving practice at a level few adults try.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Running the same problem through three different approaches is genuinely formative.`,
          },
          identityQuestion: `If you become someone who deliberately chooses approach to fit problem rather than defaulting to one style, how does that change the range of problems you can actually solve well over a lifetime?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows three real problem-solving approaches and can name the tradeoffs.`,
            `A person who notices my default and can choose a different approach when the problem calls for it.`,
            `Someone willing to alternate between fundamentals and evidence instead of committing to one style.`,
          ],
          saveKey: `identity_responses_fs_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventh Future Skills lesson done. You now know three real problem-solving approaches (top-down first principles, bottom-up empirical, hybrid iterative), the real tradeoffs of each, and the major thinkers behind each (Pólya, Schön, Kahneman, Musk's better moments, Eric Ries). You can match approach to problem rather than defaulting to one style. You understand heuristics, reflection-in-action, and meta-cognition as named concepts most adults don't have language for. You'll spend the rest of your life solving problems; the framework you build here compounds. Next time we go into creativity in the AI era—a topic where most pop framings are completely wrong and the real answer is more interesting. Argument Builder format. Let's go. — Byte`,
          badge: `problem-solver`,
          badgeName: `Problem Solver`,
          xpEarned: 75,
          competencies: [
            `Articulates three problem-solving approaches (top-down first principles, bottom-up empirical, hybrid iterative)`,
            `Knows major thinkers: Pólya, Schön, Kahneman, Musk, Brown, Ries`,
            `Understands heuristics, reflection-in-action, and meta-cognition as concepts`,
            `Recognizes own default and the tradeoffs of each approach`,
            `Can match approach to problem rather than defaulting to one style`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Creativity in the AI Era`,
            hook: `Three positions on what AI changes about creativity: fundamentally human, AI changes nothing, AI changes everything. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L07 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
