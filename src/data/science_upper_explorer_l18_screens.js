// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L18 — Engineering: Designing Solutions
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3 — Defining design
//            problems; comparing multiple solutions; planning and carrying
//            out tests to improve a designed object
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — engineering vs science, the design process,
//        constraints and trade-offs, iteration and improvement
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-18`,
      title: `Engineering: Designing Solutions`,
      duration: 18,
      xpReward: 75,
      badge: `solution-designer`,
      badgeName: `Solution Designer`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. We've covered a lot of pure SCIENCE in this subject. Today we look at what humans actually DO with science. We solve problems. Designing a bridge that holds heavy trucks. Building a smartphone that fits in your pocket. Creating a water filter that works in remote villages. All of this is ENGINEERING. Engineers don't just discover how the world works. They use that knowledge to make new things that help people. Let's go.`,
          headline: `Engineering`,
          subtitle: `How humans use science and creativity to solve real-world problems`,
          visual: `/ue-assets/science/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Engineering vs Science`,
          paragraphs: [
            `SCIENCE and ENGINEERING are closely related but they're not the same thing. SCIENCE tries to UNDERSTAND how the world works. Scientists ask "why does this happen?" and "how does this work?" Then they design experiments to find out. ENGINEERING tries to USE what science discovers to SOLVE PROBLEMS. Engineers ask "how can we build something better?" or "how can we fix this?" Then they design and build solutions.`,
            `Lots of people do BOTH. Scientists often engineer their own equipment to run experiments. Engineers often do scientific research to understand the systems they're designing. But the two questions are different. A biologist studying lightning is doing science. An electrical engineer designing a power line that doesn't get struck is doing engineering. Both use the same physics, but the goal is different. There are many kinds of engineers: civil (bridges, buildings, roads), mechanical (machines, engines), electrical (computers, power), chemical (materials, medicines), aerospace (planes, rockets), biomedical (medical devices), software (apps, websites), and many more.`,
          ],
          image: `/ue-assets/science/l18-s1-eng-vs-sci.webp`,
          imageCaption: `Science asks why. Engineering asks how to build a better one.`,
          vocab: [
            { word: `engineering`,
              definition: `Using science and creativity to solve real-world problems. Engineers design and build things that help people, from bridges to medicines to apps.`,
              audioPrompt: `Engineering is using science and creativity to solve real-world problems, {name}. Engineers don't just study how the world works. They use scientific knowledge to design and build new things. Bridges that hold heavy trucks. Smartphones that fit in your pocket. Water filters for remote villages. Solar panels that power homes. There are many kinds of engineers. Civil engineers design bridges and buildings. Mechanical engineers design machines. Electrical engineers design computers. Software engineers build apps. All of them use science, math, and creativity together.` },
            { word: `design process`,
              definition: `The step-by-step approach engineers use to solve problems: define the problem, research, brainstorm, prototype, test, improve, and repeat.`,
              audioPrompt: `The design process is the step-by-step approach engineers use to solve problems, {name}. The steps are: define the problem clearly, research what's already known, brainstorm multiple possible solutions, pick one and build a prototype, test it and learn from the results, then improve and repeat. Engineers don't just jump in and start building. They follow this process because it saves time and leads to better solutions. The same basic process is used by engineers everywhere, from small school projects to space rockets.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Engineering Design Process`,
          paragraphs: [
            `Engineers use a systematic approach to solve problems, called the ENGINEERING DESIGN PROCESS. STEP 1: DEFINE THE PROBLEM. What exactly are you trying to solve? Who needs the solution? What does success look like? STEP 2: RESEARCH. What's already known about the problem? Has anyone tried to solve it before? What worked and what didn't? STEP 3: BRAINSTORM SOLUTIONS. Come up with multiple ideas, even silly ones. The goal is variety, not perfection.`,
            `STEP 4: PICK ONE AND BUILD A PROTOTYPE. A prototype is a rough first version. It doesn't need to be perfect. It just needs to test the basic idea. STEP 5: TEST AND EVALUATE. See if it actually solves the problem. Does it work? What goes wrong? What surprised you? STEP 6: IMPROVE AND ITERATE. Make changes based on what you learned. Test again. Keep improving. This cycle of testing and improving is what makes engineering powerful. Almost every product you use went through dozens or hundreds of versions before reaching you.`,
          ],
          image: `/ue-assets/science/l18-s2-design-process.webp`,
          imageCaption: `Define → research → brainstorm → prototype → test → improve. Repeat as needed.`,
          vocab: [
            { word: `prototype`,
              definition: `A rough first version of an engineering design, used for testing. Doesn't need to be perfect — just good enough to learn what works and what doesn't.`,
              audioPrompt: `A prototype is a rough first version of an engineering design, {name}. It doesn't need to be perfect. It just needs to test the basic idea. The Wright brothers built dozens of prototype gliders before they built their first powered airplane. Apple built many iPhone prototypes before releasing the first one. Engineers test prototypes to find what works, what fails, and what surprises them. Then they improve and build a better prototype. The cycle of prototype, test, improve is at the heart of how good engineering happens.` },
            { word: `testing`,
              definition: `The process of checking whether a prototype actually works and finding out what needs improvement. Wind tunnels, crash tests, clinical trials, and simulations are all forms of engineering testing.`,
              audioPrompt: `Testing is the process of checking whether an engineering prototype actually works and finding out what needs improvement, {name}. Engineers don't assume a design works. They build it and test it. Wind tunnels test airplane designs. Crash tests test car safety. Clinical trials test medicines. Computer simulations test bridge designs. Testing reveals what works, what fails, and what surprises the engineers. The results of testing guide the next iteration. Without testing, engineers are just guessing. Testing is what turns guessing into knowing.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Constraints and Trade-offs`,
          paragraphs: [
            `Every engineering problem has CONSTRAINTS, which are limits the solution has to work within. The budget. The time available. The materials at hand. Safety requirements. The needs of users. The laws of physics (you can't engineer your way out of those). A bridge has to support a certain weight, withstand wind, fit between two points, cost less than a budget, last decades, and not be ugly. Engineers can't ignore any of these. Constraints make engineering hard, but they're also what makes it interesting.`,
            `Engineers also face TRADE-OFFS. Making something lighter might make it weaker. Making it cheaper might make it less durable. Making it faster might make it use more energy. Making it more powerful might make it more expensive. A perfect solution would meet every goal, but most real problems force trade-offs. Engineers spend a lot of time deciding which trade-offs make sense. A racing bike is light and fast, but uncomfortable for long rides. A comfortable bike is heavier and slower. Neither is "wrong." They're optimized for different priorities. Almost every product reflects choices about trade-offs.`,
          ],
          image: `/ue-assets/science/l18-s3-tradeoffs.webp`,
          imageCaption: `Budget, time, safety, materials. Every design balances competing limits.`,
          vocab: [
            { word: `constraint`,
              definition: `A limit that an engineering solution has to work within. Includes budget, time, available materials, safety, and the laws of physics.`,
              audioPrompt: `A constraint is a limit that an engineering solution has to work within, {name}. Engineers face many constraints. Budget. Time. Materials. Safety requirements. The needs of users. The laws of physics. A bridge has to support a certain weight, withstand wind, fit between two points, cost less than a budget, and last decades. Engineers can't ignore any of these. Constraints make engineering harder, but they're also what makes it interesting. The best solutions are often clever ways to meet multiple constraints at once.` },
            { word: `trade-off`,
              definition: `When you gain something in one area by giving something up in another. Engineers choose trade-offs based on who the user is and what matters most for the situation.`,
              audioPrompt: `A trade-off is when you gain something in one area by giving something up in another, {name}. In engineering, trade-offs are everywhere. A lighter bike is faster but less comfortable. A bigger battery gives more range but adds weight. A cheaper bridge might cost less but last fewer years. No design is perfect at everything. Engineers choose which trade-offs to make based on who the user is and what matters most. A racing bike and a commuter bike solve different problems. Both are good designs for different priorities.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Iteration: Why First Versions Are Almost Never the Best`,
          paragraphs: [
            `One of the most important lessons in engineering is that GOOD DESIGNS COME FROM ITERATION. Iteration means trying something, seeing what happens, learning from it, and trying again. The Wright brothers built and tested gliders for YEARS before their first powered airplane flew for 12 seconds in 1903. Apple released many versions of the iPhone before reaching the one in your pocket. The Mars rovers each improved on lessons from earlier ones. EVERY successful piece of technology you've ever used went through dozens or hundreds of iterations.`,
            `Iteration also matters in life beyond engineering. You don't become a great athlete on your first try. You practice, fail, adjust, and try again. Cosmo's secret: real otters learn to crack open shells the same way. Babies don't do it. Young otters try and fail many times before getting it right. Most adult otters are good at it because they've iterated for years. Whether you're designing a bridge, learning a skill, or trying to do something hard, iteration is how progress actually happens. The first version of anything is rarely the best. Knowing this changes how you face challenges.`,
          ],
          image: `/ue-assets/science/l18-s4-iteration.webp`,
          imageCaption: `First versions are rarely the best. Real progress comes from iterating.`,
          vocab: [
            { word: `iteration`,
              definition: `The cycle of trying, testing, learning, and improving. Almost every successful design or skill came from many iterations, not one perfect attempt.`,
              audioPrompt: `Iteration is the cycle of trying, testing, learning, and improving, {name}. Engineers iterate on designs. Athletes iterate on skills. Musicians iterate on songs. Every successful piece of technology you have ever used went through dozens or hundreds of iterations before reaching you. The Wright brothers built and tested gliders for years before their first powered flight. Apple released many iPhone versions. Real otters learn to crack shells through years of practice. The first version of anything is rarely the best. Iteration is how real progress actually happens.` },
            { word: `innovation`,
              definition: `The creation of a new or significantly improved solution to a problem. Innovations can be huge breakthroughs or small improvements that make something better, safer, cheaper, or easier.`,
              audioPrompt: `Innovation is the creation of a new or significantly improved solution to a problem, {name}. Innovations often come from engineers iterating many times on existing designs. The first smartphones were innovations. So were the first airplanes, vaccines, and solar panels. Not all innovations are huge. Many are small improvements that make something slightly better, safer, cheaper, or easier to use. Innovation happens when someone notices a problem and keeps working until they find a better solution. Curiosity plus persistence plus scientific knowledge is the basic formula.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four real engineering situations. For each one, identify what's happening: DEFINING THE PROBLEM (figuring out exactly what to solve), PROTOTYPING & TESTING (building and trying), or HANDLING TRADE-OFFS (balancing competing goals)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `defining`,      label: `Defining the Problem`,  color: `#34D399`, description: `Figuring out what needs to be solved, who needs the solution, and what success looks like.` },
            { id: `prototyping`,   label: `Prototyping & Testing`, color: `#FBBF24`, description: `Building rough versions and testing to learn what works.` },
            { id: `tradeoffs`,     label: `Handling Trade-offs`,   color: `#F87171`, description: `Choosing between competing goals when you can't optimize for everything.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `A team of engineers is designing a new water filter for villages without clean water.` },
                { text: `They spend two weeks talking to villagers, learning what materials they can access, what the typical water contamination is, and how often the filter needs to work.` },
                { text: `They write a detailed list of requirements before building anything.` },
              ],
              correctAnswer: `defining`,
              realWorldExample: `Water filter projects always start with careful problem definition.`,
              explanation: `Talking to users. Understanding constraints. Writing requirements. Pure problem definition. This is often the most important step. Jumping straight to building a solution without understanding the problem is a classic mistake.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `An aerospace engineer builds a small model of a new airplane wing.` },
                { text: `She puts it in a wind tunnel and measures how air flows around it.` },
                { text: `The data shows the wing isn't quite shaped right. She tweaks the design and tests again.` },
              ],
              correctAnswer: `prototyping`,
              realWorldExample: `Wind tunnel testing is standard practice in aerospace.`,
              explanation: `Building a model. Testing it. Learning from results. Improving. Pure prototyping & testing. This is the heart of engineering iteration.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `A car company is designing a new electric car.` },
                { text: `Making the battery bigger gives more driving range, but adds weight, cost, and slower charging.` },
                { text: `The team has to decide where to set the battery size to balance range, cost, performance, and customer needs.` },
              ],
              correctAnswer: `tradeoffs`,
              realWorldExample: `Battery sizing is one of the biggest trade-offs in electric vehicle design.`,
              explanation: `Range vs cost vs weight vs charging time. Multiple competing goals. Pure trade-off decision. Engineers can't have everything. They have to choose which priorities matter most for who.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `A robotics team builds their FIRST attempt at a robot for a school competition.` },
                { text: `The robot picks up balls successfully but constantly drops them.` },
                { text: `The team studies what went wrong and starts planning what to change for their next version.` },
              ],
              correctAnswer: `prototyping`,
              realWorldExample: `Robotics teams iterate constantly.`,
              explanation: `Tricky because the team is also THINKING about trade-offs (they probably are weighing trade-offs internally). But the QUESTION is about what's primarily happening. They built a rough first version, tested it, and are learning from what went wrong. That's pure prototyping & testing. The trade-offs will come into play during the NEXT iteration. Lesson: every engineering step often has multiple things happening, but one is usually primary at any given time.`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What's the MAIN DIFFERENCE between SCIENCE and ENGINEERING?`,
              options: [
                `They're the same`,
                `Science tries to understand HOW the world works. Engineering uses science to SOLVE problems and build things.`,
                `Engineering is harder`,
                `Only engineers use math`,
              ],
              correctIndex: 1,
              explanation: `Science seeks understanding. Engineering applies that understanding to design and build. A scientist studies how electricity behaves. An engineer uses that knowledge to design power lines. Both are essential, and the same person can do both.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `What's a PROTOTYPE?`,
              options: [
                `A finished product`,
                `A rough first version of an engineering design, used for testing and learning`,
                `A diagram`,
                `A failure`,
              ],
              correctIndex: 1,
              explanation: `Prototypes don't need to be perfect. They just need to test the basic idea so engineers can learn what works. Almost every product you use went through many prototypes before reaching its final form.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `What's a CONSTRAINT in engineering?`,
              options: [
                `A type of material`,
                `A limit the solution has to work within — budget, time, materials, safety, laws of physics`,
                `A bonus feature`,
                `An option`,
              ],
              correctIndex: 1,
              explanation: `Constraints are the limits engineers work within. Budget. Time. Materials. Safety. Laws of physics. Constraints make engineering hard, but they're also what makes good design interesting and necessary.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `What's a TRADE-OFF?`,
              options: [
                `A perfect solution`,
                `Giving up some of one goal to gain more of another — like a lighter bike being faster but less comfortable`,
                `A type of money`,
                `A team meeting`,
              ],
              correctIndex: 1,
              explanation: `Trade-offs happen when you can't optimize everything at once. Making something lighter might make it weaker. Making it cheaper might make it less durable. Engineers spend a lot of time choosing which trade-offs make sense for the situation.` },

            { id: `l18-q5`, format: `true-false`,
              question: `True or false: Most successful designs come from iteration — trying, testing, learning, and improving over many cycles.`,
              correctAnswer: true,
              explanation: `True. The Wright brothers iterated for years. Apple iterates on every product. Even otters iterate when learning to crack shells. First versions are almost never the best. Real progress comes from many cycles of trying and improving.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `What's the FIRST step of the engineering design process?`,
              options: [
                `Build something`,
                `Define the problem clearly — what are you trying to solve, who needs it, what does success look like`,
                `Sell it`,
                `Brainstorm`,
              ],
              correctIndex: 1,
              explanation: `Defining the problem clearly is the most important first step. Jumping straight to building without understanding what you're actually solving is a classic mistake. Engineers often spend significant time on this step before any construction begins.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `Why is ITERATION so important in engineering?`,
              options: [
                `It isn't`,
                `Because first versions are almost never the best — real improvements come from cycles of testing and learning`,
                `Only for big projects`,
                `Just to slow things down`,
              ],
              correctIndex: 1,
              explanation: `Iteration is how engineers actually figure out what works. Each prototype reveals what to improve. Each test teaches something new. Almost every successful product, building, machine, or app you use went through many iterations.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `What kind of EXAMPLES are there of engineering disciplines?`,
              options: [
                `Just one type`,
                `Civil (bridges, buildings), mechanical (machines), electrical (computers), chemical (materials, medicine), aerospace (planes, rockets), biomedical, software, and many more`,
                `Engineers only build cars`,
                `Only computer engineering`,
              ],
              correctIndex: 1,
              explanation: `Engineering is a huge field with many specializations. Each kind of engineer focuses on different problems and uses different tools. All of them use science, math, and creativity to design solutions.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick something you use daily (a backpack, a phone, a toothbrush). What engineering decisions and trade-offs went into making it?` },
            { id: `r2`, text: `Iteration isn't just for engineers. Where in your life have you iterated to improve at something? What did that feel like?` },
            { id: `r3`, text: `If you could engineer ONE new product or solution to help people, what would you choose? What problem would it solve?` },
            { id: `r4`, text: `Why do you think people sometimes get frustrated when their first attempt at something doesn't work? What does engineering tell us about that?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Engineering shapes almost everything in your daily life. The chair you're sitting on, the building you're in, the device you're reading this on, the food in your kitchen, the clothes on your body, all designed by engineers and tested across countless iterations. Engineers will design the future too. Better renewable energy, cleaner water systems, faster transportation, medical breakthroughs, space exploration. Some of you reading this will be the engineers who solve problems your parents haven't even thought of yet. The world keeps having problems that need creative, scientific solutions.`,
          familyAdventure: `Family Engineering Challenge. Pick a small problem you face at home (e.g., "the kitchen sponge falls into the sink"). Use the design process: 1) Define the exact problem. 2) Brainstorm 5+ solutions, even silly ones. 3) Pick one and build a quick prototype using household materials. 4) Test it. 5) Discuss what worked, what didn't. 6) Plan iteration. This is exactly how real engineering teams work.`,
          creativePrompt: {
            intro: `Imagine you're an engineer pitching a new invention to investors. Write your pitch.`,
            floor: `Write at least 5 sentences. Describe the problem your invention solves, what it does, and why it's needed.`,
            stretch: `Write 8 to 10 sentences. Include the problem, your solution, key features, the trade-offs you had to make, and what you'd improve in the next iteration.`,
            open: `Write as much as you want. Build a full investor pitch. Cover the problem with real-world context, multiple possible solutions you considered, the one you picked and why, your prototype testing results, trade-offs, and your plan for future iterations and improvements.`,
            frames: [
              `I want to introduce my invention: ___.`,
              `The problem it solves is ___.`,
              `It works by ___.`,
              `The biggest trade-off was ___.`,
              `In future versions, I would ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain the difference between science and engineering, name steps in the design process, understand constraints and trade-offs, and see why iteration is at the heart of good design. Next lesson: a fundamental pattern in nature. LIFE CYCLES, how every living thing grows, changes, and reproduces. See you there. — Cosmo.`,
          badge: `solution-designer`,
          badgeName: `Solution Designer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L18.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L18 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
