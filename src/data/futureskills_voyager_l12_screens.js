// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L12 — Coding & Computational Thinking
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Computer Science, Computational Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026) — focuses on the broader mental framework, not syntax
// Interaction format: MATCHING GAME (5 computational thinking concepts ↔ real-world applications)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l12-v1";

const FUTURESKILLS_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-12`,
      title: `Coding & Computational Thinking`,
      duration: 35,
      xpReward: 75,
      badge: `computational-thinker`,
      badgeName: `Computational Thinker`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, "everyone should learn to code" is common advice. Sometimes it's good advice. Sometimes it's not. Whether to learn programming specifically depends on what you want to do. But there's a deeper skill underneath programming that's useful regardless of whether you'll ever write code professionally: computational thinking. It's a specific mental framework for breaking down problems, finding patterns, abstracting essential features, building step-by-step procedures, and systematically debugging when things don't work. The framework was named by Jeannette Wing in a 2006 paper and has shaped how computer science is taught around the world. Today we work through the five core concepts and match them to real applications. By the end you'll have a mental framework that's useful for far more than programming.`,
          headline: `Coding & Computational Thinking`,
          subtitle: `The mental framework underneath programming. Useful for far more than code.`,
          visual: `/voyager-assets/future-skills/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Computational Thinking Actually Is`,
          paragraphs: [
            `Computational thinking is the mental framework that makes programming possible, but it's not the same thing as programming. Programming involves specific languages, syntax, and tools. Computational thinking is the underlying way of breaking down problems and structuring solutions that any programmer uses regardless of the specific language they're working in.`,
            `Jeannette Wing, a computer scientist at Carnegie Mellon, named the concept in a 2006 paper titled "Computational Thinking." Her argument: computational thinking isn't just for computer scientists. It's a general mental skill useful for thinking about almost any complex problem. Wing's framing has shaped how computer science is taught in schools around the world, including the standards (CSTA, ISTE) that guide curriculum.`,
            `The five components most commonly identified are: decomposition (breaking problems into smaller parts), pattern recognition (noticing similarities and recurring elements), abstraction (focusing on essential features while ignoring irrelevant details), algorithms (designing step-by-step procedures), and debugging (systematically finding and fixing what's not working). Each of these is a real cognitive skill that's useful in many contexts beyond programming.`,
            `An important framing. Computational thinking isn't a separate special skill that only some people can develop. It's a way of structuring thought that anyone can practice. The kids who get explicit exposure to it (through coding, math problems treated computationally, or other structured problem-solving) develop the framework faster than kids who don't. But there's nothing innately "computational" about certain personalities. Anyone willing to practice the components becomes good at them.`,
          ],
          image: `/voyager-assets/future-skills/l12-s1-framework.webp`,
          imageCaption: `Computational thinking: the mental framework underneath programming. Five components, all learnable, useful beyond code.`,
          vocab: [
            {
              word: `computational thinking`,
              definition: `Mental framework for breaking down complex problems and structuring solutions in ways that could be carried out by a computer (or a person). Named by Jeannette Wing in her 2006 paper "Computational Thinking." Includes decomposition, pattern recognition, abstraction, algorithms, and debugging. Useful far beyond programming.`,
              audioPrompt: `Computational thinking is a mental framework for breaking down complex problems and structuring solutions in ways that could be carried out by a computer or a person, {name}. The concept was named by Jeannette Wing, a computer scientist at Carnegie Mellon, in her 2006 paper "Computational Thinking." Wing argued that computational thinking isn't just for computer scientists. It's a general mental skill useful for thinking about almost any complex problem. The framework has shaped how computer science is taught in schools around the world. The five most commonly identified components are decomposition, pattern recognition, abstraction, algorithms, and debugging. Each is a real cognitive skill useful in many contexts beyond programming. Computational thinking isn't a separate special skill that only some people can develop. It's a way of structuring thought that anyone can practice.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Decomposition And Pattern Recognition`,
          paragraphs: [
            `Decomposition is breaking a complex problem into smaller, more manageable parts. The classic example: planning a birthday party. The full task "throw a birthday party" is too big to act on directly. Decompose it: guest list, invitations, venue, food, decorations, activities, music, timeline. Each subtask is more manageable. Some of them decompose further (food = appetizers, main course, dessert, drinks). You can now actually act on the individual pieces.`,
            `Decomposition matters because most real problems are too complex to solve in one move. Trying to handle them as a single thing usually produces overwhelm or paralysis. Breaking them down lets you make progress on parts even when the whole feels impossible. Programmers do this constantly: a big software project becomes many small functions, each doing one specific thing. The same skill applies to writing essays, organizing closets, planning trips, managing teams, conducting research, and almost everything else.`,
            `Pattern recognition is noticing similarities and recurring elements, especially across problems that seem different on the surface. A programmer who notices that "sorting a list of names alphabetically" and "ordering a list of dates chronologically" use the same underlying logic can write one general solution that handles both. Same with someone who notices that "negotiating with a parent about screen time" and "negotiating with a teacher about assignment deadlines" use the same conversational moves.`,
            `Pattern recognition matters because it lets you transfer learning across contexts. The kid who notices that the structure of a math word problem is similar to one they've solved before can apply the same approach. The cook who notices that braising chicken and braising tofu use similar techniques can adapt recipes. Strong pattern recognition compounds because each new pattern recognized makes future recognition faster. People with strong pattern recognition often look "smart" — what they actually have is a large library of patterns and the habit of looking for them.`,
          ],
          image: `/voyager-assets/future-skills/l12-s2-decomp.webp`,
          imageCaption: `Decomposition: break problems into manageable parts. Pattern recognition: notice recurring structures across different problems.`,
          vocab: [
            {
              word: `decomposition`,
              definition: `Breaking a complex problem into smaller, more manageable parts that can be addressed individually. Foundational computational thinking skill. Used by programmers (big project → many small functions) and by anyone solving complex problems in any domain. Counter to "overwhelm" — decomposition makes the unmanageable manageable.`,
              audioPrompt: `Decomposition is breaking a complex problem into smaller, more manageable parts that can be addressed individually, {name}. Foundational computational thinking skill. Used by programmers (a big software project becomes many small functions, each doing one specific thing) and by anyone solving complex problems in any domain. The classic example: planning a birthday party. The full task is too big to act on directly. Decompose it into guest list, invitations, venue, food, decorations, activities, music, timeline. Each subtask is more manageable. Some decompose further. The same skill applies to writing essays, organizing closets, planning trips, managing teams, conducting research, and almost everything else. Decomposition is the counter to overwhelm. It makes the unmanageable manageable.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Abstraction And Algorithms`,
          paragraphs: [
            `Abstraction is focusing on essential features while ignoring irrelevant details. A subway map is an abstraction of the actual subway: it shows stops and lines but not the exact distances, curves, depths, or the buildings above. The abstraction is more useful than the full reality for the specific purpose of navigating the system. A street map of the same city would be a different abstraction emphasizing different features. Both are useful for their purposes; neither is "the real" city.`,
            `Programmers use abstraction constantly. When you write a function called "send_email," you don't write all the underlying networking, encryption, and protocol code every time. You write that code once (or use a library someone else wrote), then abstract away the details so that "send_email" can be used as a single concept. Higher-level programs are built by composing abstractions of lower-level operations. Without abstraction, complex software would be impossible to write.`,
            `Abstraction matters in many domains. A scientific theory is an abstraction emphasizing certain features of reality. A novel is an abstraction emphasizing certain features of human experience. A government org chart is an abstraction of an organization. The skill is choosing the right abstraction for the question you're trying to answer. The wrong abstraction makes problems harder than they should be; the right one makes them tractable.`,
            `Algorithms are step-by-step procedures for solving a problem. A recipe is an algorithm. Long division is an algorithm. Instructions for assembling furniture are algorithms. Programmers write algorithms in code, but humans use algorithms constantly in non-programming contexts. The algorithm doesn't have to be precise to the point of being computer-executable; it just has to be specific enough that someone could follow the steps and arrive at a solution.`,
            `Algorithms matter because they make problem-solving teachable. If you can describe exactly the steps you take to solve a problem, you can teach those steps to someone else, automate them, or evaluate whether they're producing the right results. People who can articulate their algorithms (rather than just doing things intuitively) develop expertise faster and can communicate their thinking more clearly. Many of the most useful procedures in domains from medicine to cooking to engineering are formalized algorithms.`,
          ],
          image: `/voyager-assets/future-skills/l12-s3-abstract.webp`,
          imageCaption: `Abstraction: focus on essentials. Algorithms: step-by-step procedures. Both extend far beyond programming.`,
          vocab: [
            {
              word: `abstraction (in computational thinking)`,
              definition: `Focusing on essential features while ignoring irrelevant details. A subway map is an abstraction of the actual subway. The skill is choosing the right abstraction for the question being asked. Used constantly in programming (building higher-level operations from lower-level ones), in science (theories), in everyday life (maps, summaries, models).`,
              audioPrompt: `Abstraction in computational thinking is focusing on essential features while ignoring irrelevant details, {name}. A subway map is an abstraction of the actual subway. It shows stops and lines but not exact distances, curves, depths, or buildings above. The abstraction is more useful than the full reality for the specific purpose of navigating the system. Programmers use abstraction constantly. When you write a function called "send email," you don't write all the underlying networking and protocol code every time. You abstract away the details. Higher-level programs are built by composing abstractions of lower-level operations. Abstraction matters in many domains. A scientific theory is an abstraction. A novel is an abstraction. A government org chart is an abstraction. The skill is choosing the right abstraction for the question you're trying to answer.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Debugging`,
          paragraphs: [
            `Debugging is systematically finding and fixing what's not working. The term comes from computer programming (the apocryphal story involves Grace Hopper, the computer scientist, removing a moth from a vacuum tube relay in the 1940s, though "bug" was already a term for technical problems before that). But debugging as a mental discipline applies far beyond code.`,
            `The core debugging skill: when something isn't working as expected, don't panic, don't guess randomly, and don't try seventeen things at once. Instead: isolate the problem. What specifically is failing? When did it start failing? What changed recently? Can you reproduce the failure consistently? What's the simplest case where it fails? Once you've located the actual problem precisely, the fix is often straightforward. The hard part is locating the problem.`,
            `The reason debugging is a learnable skill rather than just "being smart": it has specific techniques. Print statements (in code) or "tracer statements" (in physical processes) — checking what's actually happening at each step rather than what you think is happening. Binary search — if something works at point A and fails by point Z, check the middle (point M); whichever half contains the failure, check the middle of that half. Working backward from the failure rather than forward from your expected path. Asking what assumption you're making that might be wrong.`,
            `Debugging matters far beyond programming. When your homework isn't producing the expected answer, debugging skills locate the error faster than re-doing the whole problem. When a relationship has a recurring conflict, debugging skills locate what's actually triggering it rather than re-arguing the surface issue. When your sport performance is plateauing, debugging skills locate the specific weakness rather than just "training harder." When a science experiment isn't producing expected results, debugging skills find the methodological problem.`,
            `One final framing. Debugging requires a specific emotional skill: tolerating the uncomfortable feeling of "something is wrong and I don't know what." Many people respond to this discomfort by either giving up or by trying random fixes until something works. Skilled debuggers stay with the discomfort and apply systematic techniques. This is genuinely difficult and gets easier with practice. The kids who develop debugging-tolerance at 12 will solve harder problems faster for decades.`,
          ],
          image: `/voyager-assets/future-skills/l12-s4-debug.webp`,
          imageCaption: `Debugging: isolate the problem before fixing. Specific techniques. Tolerate the discomfort of not yet knowing.`,
          vocab: [
            {
              word: `debugging`,
              definition: `Systematic process of finding and fixing what's not working. Term from computer programming but applies broadly. Core skill: isolate the problem precisely before attempting fixes. Techniques include tracer statements (checking what's actually happening), binary search (narrowing down where failure occurs), and working backward from the failure rather than forward from expected path.`,
              audioPrompt: `Debugging is the systematic process of finding and fixing what's not working, {name}. Term comes from computer programming but the discipline applies broadly. The core skill: when something isn't working as expected, don't panic, don't guess randomly, and don't try seventeen things at once. Instead, isolate the problem. What specifically is failing? When did it start? What changed recently? Can you reproduce the failure consistently? What's the simplest case where it fails? Once you've located the actual problem precisely, the fix is often straightforward. The hard part is locating the problem. Debugging has specific techniques: print statements or tracer statements (checking what's actually happening at each step), binary search (narrowing down where failure occurs by checking the middle), working backward from the failure. Debugging matters far beyond programming. Homework, relationships, sports performance, science experiments all benefit from debugging skills.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Should You Actually Learn To Program?`,
          paragraphs: [
            `Computational thinking is useful regardless of whether you ever write code. But programming itself is a real skill worth considering separately. Whether to learn programming depends on what you want to do.`,
            `Programming is genuinely useful for: building software (obviously), automating repetitive tasks, analyzing data, scientific research in many fields, building interactive media and games, working with AI tools at deeper levels than just prompting, and engaging seriously with how digital technology actually works. If any of these matter to what you'll do, learning to program is worth significant time investment.`,
            `Programming is less critical for: most creative work (writing, visual arts, performing arts), most service work, most management and leadership roles, most education, most healthcare practice, most physical work. Computational thinking still helps; the specific skill of writing code in a particular language doesn't.`,
            `The honest framing for a 12-year-old. Learn computational thinking through whatever means available (Scratch, Python, working on real problems with structure). It's a high-leverage mental framework regardless of career. Whether to specialize in programming depends on where you're headed. AI tools have changed the calculation somewhat — basic coding is now more accessible through natural-language prompting, while deep coding skills remain valuable for specific roles. The right move for most people is some computational thinking development plus targeted programming skill if your direction calls for it.`,
            `Two researchers worth knowing. Seymour Papert (MIT, 1928-2016) developed "constructionism," the educational theory that kids learn best by building things they care about. He created LOGO, an early programming language designed for children, in the 1960s. Mitchel Resnick at MIT Media Lab continued Papert's work and created Scratch, the visual programming language used in millions of schools. Both believed programming is valuable not because everyone needs to be a programmer but because programming teaches computational thinking through doing rather than just talking about it.`,
          ],
          image: `/voyager-assets/future-skills/l12-s5-program.webp`,
          imageCaption: `Programming: useful for some paths, not for others. Computational thinking: useful for nearly everyone regardless.`,
          vocab: [
            {
              word: `constructionism (Papert)`,
              definition: `Educational theory developed by Seymour Papert (MIT, 1928-2016): kids learn best by building things they care about. Papert created LOGO, an early programming language for children, to embody this theory. The approach has shaped programming education and broader maker-style learning. Distinct from "instructionism" (learning through being instructed).`,
              audioPrompt: `Constructionism is an educational theory developed by Seymour Papert at MIT, {name}. Papert lived from 1928 to 2016 and was one of the most influential thinkers in education technology. The core idea: kids learn best by building things they care about. Papert created LOGO, an early programming language designed for children, in the 1960s, to embody this theory. Students would write LOGO programs to move a "turtle" around the screen, building drawings and shapes. The act of building, debugging, and refining their programs taught them mathematical and computational concepts more deeply than passive instruction would. Constructionism has shaped programming education and broader maker-style learning. It's distinct from "instructionism," which is learning through being instructed. Both have their place. Papert's argument: for many things kids learn, construction beats instruction.`,
            },
          ],
        },

        // ───── MATCHING GAME ──────────────────────────────────────────────────
        {
          id: `l12-matching`,
          type: `matching`,
          headline: `Match each concept to its real-world application`,
          intro: `{name}, five computational thinking concepts. Five real-world applications (none of them programming). Match each concept to its best example. Drag to connect. Get them all right and you've internalized the framework as something usable across any domain.`,
          pairs: [
            {
              id: `pair-1`,
              concept: `Decomposition`,
              conceptDescription: `Breaking a complex problem into smaller, more manageable parts`,
              application: `Planning a birthday party by breaking it into guest list, invitations, venue, food, decorations, activities, music, and timeline — each addressable on its own`,
            },
            {
              id: `pair-2`,
              concept: `Pattern recognition`,
              conceptDescription: `Noticing similarities and recurring elements, especially across problems that seem different on the surface`,
              application: `Noticing that "negotiating with a parent about screen time" and "negotiating with a teacher about an extension" use the same conversational structure — and applying what works in one to the other`,
            },
            {
              id: `pair-3`,
              concept: `Abstraction`,
              conceptDescription: `Focusing on essential features while ignoring irrelevant details`,
              application: `A subway map showing stops and lines but not exact distances, curves, depths, or the buildings above — more useful than reality for the specific purpose of navigating the system`,
            },
            {
              id: `pair-4`,
              concept: `Algorithms`,
              conceptDescription: `Step-by-step procedures for solving a problem`,
              application: `A recipe that lists exact ingredients, quantities, and ordered steps — specific enough that anyone could follow them and arrive at the same dish`,
            },
            {
              id: `pair-5`,
              concept: `Debugging`,
              conceptDescription: `Systematically finding and fixing what's not working`,
              application: `When a science experiment isn't producing expected results, isolating exactly where things diverge from expectations (reproducing the failure, checking each step, identifying the assumption that's wrong) rather than redoing the whole experiment`,
            },
          ],
          reflectionPrompt: `Of the five concepts, which do you already do unconsciously? Which would benefit most from explicit practice?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "computational thinking"?`,
              options: [
                `Thinking like a computer`,
                `Mental framework for breaking down complex problems and structuring solutions in ways that could be carried out by a computer or a person; named by Jeannette Wing in her 2006 paper; includes decomposition, pattern recognition, abstraction, algorithms, debugging; useful far beyond programming`,
                `Programming syntax`,
                `Math skills`,
              ],
              correctIndex: 1,
              explanation: `Wing's framing has shaped how computer science is taught around the world. Computational thinking isn't a separate special skill that only some people can develop; it's a way of structuring thought anyone can practice.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "decomposition" in computational thinking?`,
              options: [
                `Breaking down (organic)`,
                `Breaking a complex problem into smaller, more manageable parts; foundational skill used by programmers (big project → small functions) and anyone solving complex problems in any domain; counter to overwhelm`,
                `Falling apart`,
                `Dissecting an animal`,
              ],
              correctIndex: 1,
              explanation: `Most real problems are too complex to solve in one move. Trying to handle them as a single thing produces overwhelm or paralysis. Breaking them down lets you make progress on parts even when the whole feels impossible.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does pattern recognition matter beyond programming?`,
              options: [
                `It's fun`,
                `Lets you transfer learning across contexts; the kid who notices similar structure across math word problems can apply the same approach; strong pattern recognition compounds because each new pattern makes future recognition faster; people with strong pattern recognition often look "smart"`,
                `It's pretty`,
                `Random benefit`,
              ],
              correctIndex: 1,
              explanation: `People with strong pattern recognition have a large library of patterns and the habit of looking for them. The habit is learnable; the library compounds over time.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "abstraction" in computational thinking?`,
              options: [
                `Abstract art`,
                `Focusing on essential features while ignoring irrelevant details; a subway map is an abstraction of the actual subway; programmers use abstraction constantly to build complex software from simpler operations; the skill is choosing the right abstraction for the question`,
                `Theoretical thinking`,
                `Confusing concepts`,
              ],
              correctIndex: 1,
              explanation: `Higher-level programs are built by composing abstractions of lower-level operations. Without abstraction, complex software would be impossible. The same applies in many domains: scientific theories, novels, org charts are all abstractions.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is an "algorithm"?`,
              options: [
                `Just for computers`,
                `Step-by-step procedure for solving a problem; a recipe is an algorithm; long division is an algorithm; algorithms make problem-solving teachable because if you can describe the steps, you can teach, automate, or evaluate them`,
                `Math equation`,
                `Computer code`,
              ],
              correctIndex: 1,
              explanation: `People who can articulate their algorithms (rather than just doing things intuitively) develop expertise faster and can communicate their thinking more clearly. Many useful procedures in medicine, cooking, engineering are formalized algorithms.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "debugging" as a mental discipline?`,
              options: [
                `Removing insects`,
                `Systematic process of finding and fixing what's not working; core skill is isolating the problem precisely before attempting fixes; techniques include tracer statements (checking what's actually happening), binary search, working backward from the failure; applies far beyond programming`,
                `Computer repair`,
                `Random fixing`,
              ],
              correctIndex: 1,
              explanation: `Skilled debuggers stay with the discomfort of "something is wrong and I don't know what" and apply systematic techniques. The skill is genuinely difficult and gets easier with practice. Applies to homework, relationships, sports, science.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Who is Jeannette Wing and why does she matter?`,
              options: [
                `Programmer`,
                `Computer scientist at Carnegie Mellon who coined "computational thinking" in her 2006 paper of the same name; her argument that computational thinking is useful beyond computer science shaped how the subject is taught in schools worldwide`,
                `Math teacher`,
                `Tech CEO`,
              ],
              correctIndex: 1,
              explanation: `Wing's argument: computational thinking is a general mental skill useful for thinking about almost any complex problem. The framing has been adopted in standards (CSTA, ISTE) and curricula in many countries.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "constructionism" (Papert)?`,
              options: [
                `Building things`,
                `Educational theory developed by Seymour Papert (MIT, 1928-2016): kids learn best by building things they care about; Papert created LOGO, an early programming language for children, to embody this theory; distinct from "instructionism" (learning through being instructed)`,
                `Architecture theory`,
                `Construction industry`,
              ],
              correctIndex: 1,
              explanation: `The act of building, debugging, and refining real things teaches concepts more deeply than passive instruction. Mitchel Resnick continued Papert's work at MIT Media Lab and created Scratch. Both believed programming teaches computational thinking through doing.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: You only need computational thinking if you're going to be a programmer.`,
              correctAnswer: false,
              explanation: `False. The whole point of Jeannette Wing's 2006 paper was that computational thinking is useful for almost any complex problem, regardless of whether you'll ever write code. Programming itself is more domain-specific; whether to learn programming depends on where you're headed. Computational thinking is high-leverage for nearly everyone.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Our group project is a mess and I can't figure out what's wrong with our final product." Based on this lesson, what's the most useful response?`,
              options: [
                `"Start over"`,
                `"Sounds like a debugging problem. Don't try seventeen fixes at once. Isolate where the problem actually is. Can you reproduce what's wrong consistently? What specifically is failing — content, structure, presentation, group dynamics? When did things start going off track? What changed recently? Try a tracer approach: look at the project's status at each milestone and find where it diverged from the expected path. Often the fix is straightforward once you've located the actual problem. The hard part is locating it. Apply binary search if you're stuck: if you know it worked at point A and failed by point Z, check the middle. This is the same debugging skill programmers use, applied to your group project."`,
                `"Just work harder"`,
                `"Your group is bad"`,
              ],
              correctIndex: 1,
              explanation: `Real applied computational thinking. Use debugging as a mental framework on a non-programming problem. This is the kind of advice that compounds because it teaches a transferable skill rather than just solving this one situation.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit names for these five thinking patterns? Has anything become clearer?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the five do you do well already? Which would benefit most from explicit practice? Be specific.` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who applies computational thinking automatically across domains, what does that change about the complexity of problems you can solve over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one complex problem you're facing. Apply each of the five concepts to it. Which generated the most useful insight?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there problem types where computational thinking doesn't fit? What about deeply ambiguous problems, moral problems, creative problems? How would the framework adapt?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask an adult who works with complex systems (engineer, doctor, manager): which of the five do they use most? Listen for whether they have explicit language for these patterns.` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Computational thinking is a learnable framework with compounding returns. Two paths.`,
          familyActivity: {
            title: `The Family Decomposition Exercise`,
            duration: `30 minutes`,
            description: `Share the five components. Then pick one upcoming family event or project (a vacation, a holiday meal, a home improvement). Apply decomposition together as a family: break it into all the subtasks, then break the harder subtasks into even smaller pieces. Most families discover they've been carrying an overwhelming "we need to plan X" feeling that decomposes into specific actionable tasks once made explicit. The exercise often produces useful planning AND demonstrates the framework concretely.`,
          },
          projectOption: {
            title: `Build Something Real Using All Five Components, 4 weeks (optional)`,
            duration: `4 weeks, ~45 minutes per session`,
            description: `Pick a real project (a website, a Scratch game, a research paper, a piece of art, organizing a club, planning an event). Use all five components explicitly: decompose the project into subtasks, identify patterns from similar past projects, abstract the essential features from irrelevant details, write step-by-step algorithms for the harder subtasks, debug systematically when things don't work. Write 2,000 words at the end reflecting on which components were most useful. Real applied computational thinking practice.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Building something using all five components explicitly is genuinely formative.`,
          },
          identityQuestion: `If you become someone who applies decomposition, pattern recognition, abstraction, algorithms, and debugging automatically across many domains, what does that change about the kinds of problems you can actually solve well?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who decomposes complex problems instead of being overwhelmed by them.`,
            `A person who debugs systematically rather than randomly trying fixes.`,
            `Someone willing to look for patterns across problems that seem different on the surface.`,
          ],
          saveKey: `identity_responses_fs_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelfth Future Skills lesson done. You now know the five components of computational thinking (decomposition, pattern recognition, abstraction, algorithms, debugging), the major thinkers behind the framework (Jeannette Wing, Seymour Papert, Mitchel Resnick), and the practical question of whether to specialize in programming. The framework is useful across far more than coding: writing, planning, science, relationships, creative work, leadership. Most adults never explicitly learn these as named patterns; you have them at 12. Next time we go into another huge applied skill: systems thinking. How do systems actually behave, why do they often surprise us, and what are the patterns that recur across very different systems? Investigation game format. Let's go. — Byte`,
          badge: `computational-thinker`,
          badgeName: `Computational Thinker`,
          xpEarned: 75,
          competencies: [
            `Articulates five computational thinking components (decomposition, pattern recognition, abstraction, algorithms, debugging)`,
            `Knows Jeannette Wing's 2006 framing and major thinkers (Papert, Resnick)`,
            `Distinguishes computational thinking (general framework) from programming (specific skill)`,
            `Can apply components to non-programming problems`,
            `Understands debugging as a mental discipline beyond code`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Systems Thinking`,
            hook: `How systems actually behave. Reinforcing loops, balancing loops, delays. Sort 9 scenarios into 3 buckets. Investigation game.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const matching = l.screens.find((s) => s.type === `matching`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L12 ${VERSION}] "${l.title}" — ${mags} magazine, matching w/ ${matching?.pairs?.length ?? 0} pairs, ${quiz} quiz, ${reflect} reflection`
  );
}
