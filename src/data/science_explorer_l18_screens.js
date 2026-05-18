// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L18 — Engineering: Designing Solutions
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-2-ETS1-1, ETS1-2, ETS1-3 (engineering design)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L18 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-18`,
      title:     `Engineering: Designing Solutions`,
      duration:  12,
      xpReward:  50,
      badge:     `engineer-explorer`,
      badgeName: `Engineer Explorer`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! You've been learning a LOT of science — about how nature works. Today, we look at how HUMANS use science to SOLVE PROBLEMS. That's called ENGINEERING. Engineers design bridges, airplanes, medicines, computers, toys, houses — almost everything humans build. You're going to learn how engineers think. And spoiler — YOU can be an engineer too. Let's go!`,
          headline: `Engineering: Designing Solutions`,
          subtitle: `How humans use science and creativity to solve real-world problems`,
          visual: `/explorer-assets/science/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Solving Problems with Design`,
          paragraphs: [
            `EVERY building, machine, and tool humans use was DESIGNED by an ENGINEER.`,
            `Think about it — someone designed your phone. Someone designed cars, bridges, computers, refrigerators, airplanes, video games, robots, medicines, water systems, and shoes. They all started as PROBLEMS to solve. (How do we cross this river? How do we travel fast? How do we cure this disease?) Engineers are people who use SCIENCE plus CREATIVITY to design SOLUTIONS. They take what scientists discover — and put it to use. Engineering is science in ACTION.`,
          ],
          image: `/explorer-assets/science/l18-s1-problems-solutions.webp`,
          imageCaption: `Engineers design things that solve problems. Bridges, planes, medicines, phones — all engineered.`,
          vocab: [
            { word: `engineer`,       definition: `A person who DESIGNS solutions to problems using science and creativity.`,
              audioPrompt: `An engineer, {name}, is a person who designs solutions to problems using science and creativity. Engineers design bridges, planes, computers, medicines, robots, buildings, video games — almost everything humans make. They take science (what we know about how the world works) and use it to make things that help people. Engineering is one of the most important jobs on Earth.` },
            { word: `engineering`,    definition: `Using science to SOLVE PROBLEMS. ENGINEERING makes useful things.`,
              audioPrompt: `Engineering, {name}, is using science to solve problems. It's the action side of science. Scientists discover how nature works. Engineers use that knowledge to make useful things. Houses, vehicles, tools, technology — all the work of engineering. Engineers are problem-solvers. They make life better through design.` },
            { word: `problem`,        definition: `Something that needs to be FIXED or improved. Engineers solve PROBLEMS.`,
              audioPrompt: `A problem, {name}, is something that needs to be fixed or improved. Engineers solve problems. How do we cross a river? Build a bridge. How do we travel fast? Build a car. How do we communicate over distances? Build a phone. Every engineering project starts with a problem. Engineers identify the problem, then design a solution.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: ASK Questions`,
          paragraphs: [
            `Engineers follow a STEP-BY-STEP process to solve problems. Step ONE — ASK QUESTIONS.`,
            `Before designing anything, an engineer needs to UNDERSTAND the problem. They ask: WHAT is the problem? WHO needs the solution? WHERE will it be used? WHAT does it need to do? WHAT are the limits (like cost, time, materials)? These questions are SO IMPORTANT. A problem you don't understand can't be solved well. Engineers spend lots of time asking questions before they start designing. It saves time later.`,
          ],
          image: `/explorer-assets/science/l18-s2-ask-question.webp`,
          imageCaption: `Step 1: Ask questions. What's the problem? Who needs it? What are the limits? Understand first.`,
          vocab: [
            { word: `ask questions`,  definition: `Step 1 of engineering. ASK QUESTIONS to understand the problem.`,
              audioPrompt: `Ask questions, {name} — that's step 1 of engineering. Before designing anything, engineers ask questions to understand the problem deeply. What's the problem? Who needs the solution? What conditions must it work in? Asking good questions makes everything easier. Skipping this step often leads to bad designs.` },
            { word: `understand`,     definition: `To KNOW deeply. Engineers must UNDERSTAND the problem before solving it.`,
              audioPrompt: `To understand, {name}, is to know deeply. Engineers must understand the problem before solving it. A doctor wouldn't prescribe medicine without understanding the symptoms. An engineer doesn't design without understanding the need. Understanding first. Solving second. That's how good engineering works.` },
            { word: `limits`,         definition: `Boundaries you must STAY WITHIN. Every project has LIMITS — like money, time, or size.`,
              audioPrompt: `Limits, {name}, are boundaries you must stay within. Every engineering project has limits. Limited money. Limited time. Limited materials. Limited space. Engineers must understand these limits early. Designing something perfect that costs a million dollars isn't useful if the budget is only $100. Limits guide engineering decisions.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: IMAGINE Solutions`,
          paragraphs: [
            `Once engineers understand the problem, step TWO is — IMAGINE many possible solutions.`,
            `Engineers brainstorm — they think of LOTS of ideas. Some weird. Some smart. Some impossible. Some practical. The goal isn't perfection — it's QUANTITY. The more ideas, the better. Then they pick the BEST ones to try. Some of the biggest inventions came from CRAZY ideas. The Wright Brothers imagined humans flying when nobody believed it was possible. Engineers must IMAGINE. Without imagination, no new designs.`,
          ],
          image: `/explorer-assets/science/l18-s3-imagine-ideas.webp`,
          imageCaption: `Step 2: Imagine LOTS of solutions. Weird ones too. The crazier ideas often spark the best ones.`,
          vocab: [
            { word: `imagine`,        definition: `To PICTURE solutions in your head. Engineers IMAGINE many possible designs.`,
              audioPrompt: `To imagine, {name}, is to picture solutions in your head. Engineers imagine. They picture different designs. Different approaches. Different materials. They let their minds explore. Imagining helps generate ideas. Without imagination, engineers couldn't create new things. They'd just be stuck with what already exists. Imagination is essential.` },
            { word: `brainstorm`,     definition: `To think of LOTS of ideas. Engineers BRAINSTORM solutions.`,
              audioPrompt: `To brainstorm, {name}, is to think of lots of ideas. Engineers brainstorm. They generate many possible solutions, even silly ones. The goal isn't to find the perfect idea right away. It's to GENERATE many ideas. Then they pick the best ones. Sometimes the wildest brainstorms lead to the smartest solutions.` },
            { word: `creativity`,     definition: `The power to think of new ideas. Engineering requires CREATIVITY plus science.`,
              audioPrompt: `Creativity, {name}, is the power to think of new ideas. Engineering requires creativity plus science. Without creativity, engineers couldn't imagine new things. They'd just copy what already exists. Creativity lets engineers see problems differently — and find solutions nobody thought of. Engineering is one of the most creative jobs.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: PLAN and Step 4: CREATE`,
          paragraphs: [
            `Now they get to work. Step THREE — PLAN. Step FOUR — CREATE.`,
            `Engineers DRAW their best idea on paper or computer. Sometimes they make detailed plans called BLUEPRINTS. They figure out what MATERIALS to use, how big each part should be, how it all fits together. After planning, they CREATE a PROTOTYPE — a first version. The prototype might be simple — paper, cardboard, or basic materials. It doesn't have to be fancy. It just has to TEST the idea. The first prototype rarely works perfectly. That's okay! It's just step 4 of the process.`,
          ],
          image: `/explorer-assets/science/l18-s4-plan-create.webp`,
          imageCaption: `Step 3: Plan it. Draw, calculate, choose materials. Step 4: Build the PROTOTYPE — the first version.`,
          vocab: [
            { word: `plan`,           definition: `To draw out and DESIGN before building. Engineers PLAN carefully before they create.`,
              audioPrompt: `To plan, {name}, is to draw out and design before building. Engineers plan carefully before they create. They sketch their ideas. They calculate measurements. They choose materials. They figure out how things will fit together. Planning saves time and money. Building without planning often leads to mistakes that have to be fixed later.` },
            { word: `prototype`,      definition: `A FIRST VERSION of a design — built to test the idea.`,
              audioPrompt: `A prototype, {name}, is a first version of a design — built to test the idea. Prototypes don't have to be perfect. They just need to test whether the idea WORKS. Engineers build prototypes from simple materials sometimes — cardboard, tape, basic stuff. Then they test the prototype, see what works, what doesn't, and improve from there.` },
            { word: `blueprint`,      definition: `A detailed DRAWING of what you'll build. Engineers use BLUEPRINTS to plan.`,
              audioPrompt: `A blueprint, {name}, is a detailed drawing of what you'll build. Engineers use blueprints to plan complex things — bridges, houses, machines. The blueprint shows exact measurements, materials, and how parts fit together. Blueprints help engineers communicate their designs to others. Builders read blueprints to know exactly how to construct things.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 5: TEST and IMPROVE`,
          paragraphs: [
            `Now the BEST part — step 5: TEST it. Then IMPROVE it. Then TEST again. Then IMPROVE again.`,
            `Engineers test their prototypes to see what works and what doesn't. Maybe the bridge wobbles too much. Maybe the toy breaks easily. Maybe the medicine has side effects. Each TEST gives information. Engineers use that information to MAKE IT BETTER. They redesign. Make changes. Try again. Test again. Improve again. Over and over. The Wright Brothers tested HUNDREDS of designs before they got their first airplane to fly. Engineers don't get it right on the FIRST try. They get it right on the FIFTIETH try. Failure isn't bad — it's PART of how engineers learn.`,
          ],
          image: `/explorer-assets/science/l18-s5-test-improve.webp`,
          imageCaption: `Step 5: Test → improve → test → improve. Failure is part of progress. The Wright Brothers tested HUNDREDS of designs.`,
          vocab: [
            { word: `test`,           definition: `To try something out. Engineers TEST prototypes to see what works.`,
              audioPrompt: `To test, {name}, is to try something out. Engineers test prototypes to see what works. They put them through real-world conditions. They observe what happens. Does the bridge hold? Does the toy work safely? Does the medicine cure the disease? Each test gives information that helps engineers improve their designs.` },
            { word: `improve`,        definition: `To make BETTER. After testing, engineers IMPROVE their designs.`,
              audioPrompt: `To improve, {name}, is to make better. After testing, engineers improve their designs. They identify problems. They make changes. They make the design stronger, safer, easier to use, cheaper, or better in some way. Then they test again. The cycle of test-improve-test is how engineering really works.` },
            { word: `failure`,        definition: `When something DOESN'T WORK. In engineering, FAILURE leads to LEARNING.`,
              audioPrompt: `Failure, {name}, is when something doesn't work. In engineering, failure leads to learning. Every failed test teaches the engineer something. What broke? Why? How can it be stronger? Failures aren't bad. They're how engineers find what doesn't work — so they can find what DOES. Some of the biggest inventions came from many failures along the way.` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Engineers Everywhere`,
          paragraphs: [
            `There are LOTS of different kinds of engineers — all solving different problems.`,
            `CIVIL ENGINEERS design bridges, roads, and buildings. MECHANICAL ENGINEERS design machines and engines. ELECTRICAL ENGINEERS design electronics and computer chips. CHEMICAL ENGINEERS create new materials. BIOMEDICAL ENGINEERS design medical equipment. AEROSPACE ENGINEERS design planes and rockets. SOFTWARE ENGINEERS design computer programs and video games. AND many many more. Engineers work everywhere. They solve big problems (curing diseases) and small problems (designing better water bottles). The world needs engineers. And maybe — YOU could be one someday.`,
          ],
          image: `/explorer-assets/science/l18-s6-engineers-everywhere.webp`,
          imageCaption: `Many kinds of engineers: civil, mechanical, electrical, chemical, biomedical, aerospace, software, and more.`,
          vocab: [
            { word: `civil engineer`, definition: `An engineer who designs BRIDGES, ROADS, and BUILDINGS. They make INFRASTRUCTURE.`,
              audioPrompt: `A civil engineer, {name}, designs bridges, roads, and buildings. They make the infrastructure that lets cities work. They figure out how to build a bridge that can hold thousands of cars. How to build a skyscraper that doesn't fall. How to make a road that lasts. Civil engineering is one of the oldest engineering fields. Ancient civilizations had civil engineers too — like the people who built the pyramids.` },
            { word: `software engineer`, definition: `An engineer who designs COMPUTER PROGRAMS, apps, and video games.`,
              audioPrompt: `A software engineer, {name}, designs computer programs, apps, and video games. They write code — special instructions that tell computers what to do. Every app on a phone, every website, every game — designed by software engineers. It's one of the fastest-growing engineering fields. The world depends on software more and more.` },
            { word: `kinds of engineers`, definition: `Many different KINDS of engineers solve different kinds of problems.`,
              audioPrompt: `Kinds of engineers, {name} — many different kinds of engineers solve different kinds of problems. Civil for buildings. Mechanical for machines. Electrical for electronics. Chemical for materials. Biomedical for medical. Aerospace for flight. Software for code. And many more — environmental, agricultural, marine, automotive. If you want to solve problems, there's an engineering field for that.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `ENGINEERING uses science and creativity to SOLVE PROBLEMS — making bridges, planes, medicines, computers.`,
              matchPhrase: `Yes! Engineers solve problems by designing new things. They take what scientists discover and put it to use. Almost everything humans build was engineered by someone.`,
              correctMatch: `fact` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `Testing and IMPROVING designs is how engineers make great solutions — failure leads to learning.`,
              matchPhrase: `True! Engineers test their prototypes, find what doesn't work, and improve. Over and over. The Wright Brothers tested hundreds of designs before they got their plane to fly.`,
              correctMatch: `fact` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `Engineers ALWAYS get their designs PERFECT on the very first try — no testing or improvement needed.`,
              matchPhrase: `Not at all! Engineers rarely get it right on the first try. They test, fail, improve, test, fail, improve — many times. That's how the design process works. Failure is part of the path to success.`,
              correctMatch: `myth` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `ENGINEERING has NO CREATIVITY — it's just boring math and no imagination.`,
              matchPhrase: `Definitely not! Engineering requires LOTS of creativity. Engineers imagine new solutions, design unique structures, and think outside the box. It's one of the most creative jobs out there. Math AND creativity together.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What do ENGINEERS do?`,
              options: [`Watch TV all day`, `DESIGN solutions to problems using science and creativity`, `Just clean up labs`, `Never solve problems`],
              correctIndex: 1,
              explanation: `Engineers design solutions to problems. They take science (what we know) and creativity (new ideas) and make useful things — bridges, planes, medicines, technology, video games, and more.` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `What's the FIRST step of engineering design?`,
              options: [`Start building`, `ASK QUESTIONS — understand the problem first`, `Get coffee`, `Make a YouTube video`],
              correctIndex: 1,
              explanation: `Ask questions! Engineers must understand the problem before designing. What's the problem? Who needs the solution? What are the limits? Understanding first leads to better designs.` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is a PROTOTYPE?`,
              options: [`A type of cookie`, `A FIRST version of a design — built to test ideas`, `A final perfect product`, `A type of car`],
              correctIndex: 1,
              explanation: `A prototype is the first version of a design. It doesn't have to be perfect or fancy — it just needs to test the idea. Engineers build prototypes, test them, and improve.` },
            { id: `l18-q4`, format: `true-false`,
              question: `Engineers TEST their prototypes and use FAILURES to learn — improving the design each time.`,
              correctAnswer: true,
              explanation: `True! Test → improve → test → improve. Failures aren't bad in engineering — they're how engineers find out what doesn't work, so they can find what does.` },
            { id: `l18-q5`, format: `fill-blank`,
              question: `Engineers ___ many possible solutions before choosing the best one — they brainstorm.`,
              options: [`imagine`, `eat`, `sleep`, `paint`],
              correctIndex: 0,
              explanation: `Imagine! Engineers brainstorm many possible solutions. Some weird, some smart, some impossible. The more ideas, the better. Then they pick the best ones to try.` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `What kind of engineer designs BRIDGES, ROADS, and BUILDINGS?`,
              options: [`Software engineer`, `CIVIL engineer`, `Astronaut`, `Chef`],
              correctIndex: 1,
              explanation: `Civil engineer! They design the infrastructure that lets cities work — bridges, roads, buildings. Civil engineering is one of the oldest engineering fields.` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Many famous inventions came from EVERYDAY problems that engineers solved. Velcro? Invented by a Swiss engineer after noticing burrs sticking to his dog's fur on a walk. Microwaves? A radar engineer was eating a chocolate bar when his radar equipment melted it — he realized radar waves could cook food. Sticky notes? A chemist accidentally made glue that wasn't very sticky — and an engineer turned it into Post-its. Engineering is full of stories like these. ANYONE who notices a problem and tries to solve it is starting to think like an engineer. That includes YOU.`,
          familyAdventure: `Engineer a SOLUTION together. Pick a small problem at home: a messy bookshelf, a hard-to-reach shelf, a wobbly chair, a draft from a window. Walk through the design process: 1) ASK questions about the problem. 2) IMAGINE possible solutions. 3) PLAN your best one. 4) CREATE it (using what's around). 5) TEST and IMPROVE. Take photos along the way. You just engineered a solution!`,
          creativePrompt: `Design YOUR DREAM INVENTION. Pick a problem you've seen — maybe at home, school, or out in the world. On paper, draw your INVENTION. Label its parts. Explain how it solves the problem. Add the materials needed. Show how big it is. Be CREATIVE. Inventors started just like this — drawing crazy ideas. Maybe your idea will become real someday.`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now understand ENGINEERING. Engineers use SCIENCE and CREATIVITY to solve problems. They follow a process: ASK, IMAGINE, PLAN, CREATE, TEST, IMPROVE. Failure is part of learning. There are many KINDS of engineers — civil, mechanical, electrical, software, and more. The world NEEDS engineers. You could be one someday. See you next lesson!`,
          badge: `engineer-explorer`,
          badgeName: `Engineer Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L18] Loaded: "Engineering: Designing Solutions" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
