// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L18 — Engineering: Designing Solutions
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-2-ETS1-1, ETS1-2, ETS1-3
// REWRITE v2 (May 2026): Grade 1 accessible, ASK / IMAGINE / TEST 3-bucket
// identification game tests sorting actions by engineering design step
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! You've been learning a LOT of science — about how nature works! Today, we look at how HUMANS use science to SOLVE PROBLEMS! That's called ENGINEERING! Engineers design bridges, airplanes, medicines, computers, toys, houses — almost everything humans build! And spoiler — YOU can be an engineer too! Let's go!`,
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
            `EVERY building, machine, and tool humans use was DESIGNED by an ENGINEER, {name}!`,
            `Think about it — someone designed your phone! Someone designed cars, bridges, computers, refrigerators, airplanes, video games, robots, medicines, water systems, and shoes! They all started as PROBLEMS to solve! (How do we cross this river? How do we travel fast?) Engineers are people who use SCIENCE plus CREATIVITY to design SOLUTIONS! They take what scientists discover — and put it to use! Engineering is science in ACTION!`,
          ],
          image: `/explorer-assets/science/l18-s1-problems-solutions.webp`,
          imageCaption: `Engineers design things that solve problems!`,
          vocab: [
            { word: `engineer`,    definition: `A person who designs solutions to problems.`,
              audioPrompt: `An engineer is a person who designs solutions to problems using science and creativity. Engineers design bridges, planes, computers, medicines, robots, buildings, video games — almost everything humans make!` },
            { word: `engineering`, definition: `Using science to solve problems.`,
              audioPrompt: `Engineering is using science to solve problems. It's the action side of science. Scientists discover how nature works. Engineers use that knowledge to make useful things. Houses, vehicles, tools, technology!` },
            { word: `problem`,     definition: `Something that needs to be fixed.`,
              audioPrompt: `A problem is something that needs to be fixed or improved. Engineers solve problems. How do we cross a river? Build a bridge. How do we travel fast? Build a car. Every engineering project starts with a problem!` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: ASK Questions`,
          paragraphs: [
            `Engineers follow a STEP-BY-STEP process to solve problems! Step ONE — ASK QUESTIONS!`,
            `Before designing anything, an engineer needs to UNDERSTAND the problem! They ask: WHAT is the problem? WHO needs the solution? WHERE will it be used? WHAT does it need to do? WHAT are the limits (like cost, time, materials)? These questions are SO IMPORTANT! A problem you don't understand can't be solved well! Engineers spend lots of time asking questions before they start designing! It saves time later!`,
          ],
          image: `/explorer-assets/science/l18-s2-ask-question.webp`,
          imageCaption: `Step 1: Ask questions! Understand first!`,
          vocab: [
            { word: `ask questions`, definition: `Step 1 of engineering.`,
              audioPrompt: `Ask questions — that's step 1 of engineering. Before designing anything, engineers ask questions to understand the problem deeply. What's the problem? Who needs the solution? Asking good questions makes everything easier!` },
            { word: `understand`,    definition: `To know deeply.`,
              audioPrompt: `To understand is to know deeply. Engineers must understand the problem before solving it. A doctor wouldn't prescribe medicine without understanding the symptoms. Understanding first. Solving second!` },
            { word: `limits`,        definition: `Boundaries you must stay within.`,
              audioPrompt: `Limits are boundaries you must stay within. Every engineering project has limits. Limited money. Limited time. Limited materials. Engineers must understand these limits early. Limits guide engineering decisions!` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: IMAGINE Solutions`,
          paragraphs: [
            `Once engineers understand the problem, step TWO is — IMAGINE many possible solutions!`,
            `Engineers brainstorm — they think of LOTS of ideas! Some weird! Some smart! Some impossible! Some practical! The goal isn't perfection — it's QUANTITY! The more ideas, the better! Then they pick the BEST ones to try! Some of the biggest inventions came from CRAZY ideas! The Wright Brothers imagined humans flying when nobody believed it was possible! Engineers must IMAGINE! Without imagination, no new designs!`,
          ],
          image: `/explorer-assets/science/l18-s3-imagine-ideas.webp`,
          imageCaption: `Step 2: Imagine LOTS of solutions!`,
          vocab: [
            { word: `imagine`,    definition: `To picture solutions in your head.`,
              audioPrompt: `To imagine is to picture solutions in your head. Engineers imagine. They picture different designs. Different approaches. Different materials. Imagining helps generate ideas. Imagination is essential!` },
            { word: `brainstorm`, definition: `To think of lots of ideas.`,
              audioPrompt: `To brainstorm is to think of lots of ideas. Engineers brainstorm. They generate many possible solutions, even silly ones. Then they pick the best ones. Sometimes the wildest brainstorms lead to the smartest solutions!` },
            { word: `creativity`, definition: `The power to think of new ideas.`,
              audioPrompt: `Creativity is the power to think of new ideas. Engineering requires creativity plus science. Without creativity, engineers couldn't imagine new things. Creativity lets engineers see problems differently!` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: PLAN and Step 4: CREATE`,
          paragraphs: [
            `Now they get to work! Step THREE — PLAN! Step FOUR — CREATE!`,
            `Engineers DRAW their best idea on paper or computer! Sometimes they make detailed plans called BLUEPRINTS! They figure out what MATERIALS to use, how big each part should be, how it all fits together! After planning, they CREATE a PROTOTYPE — a first version! The prototype might be simple — paper, cardboard, or basic materials! It doesn't have to be fancy! It just has to TEST the idea! The first prototype rarely works perfectly! That's okay!`,
          ],
          image: `/explorer-assets/science/l18-s4-plan-create.webp`,
          imageCaption: `Step 3: Plan it. Step 4: Build the PROTOTYPE!`,
          vocab: [
            { word: `plan`,      definition: `To draw out and design before building.`,
              audioPrompt: `To plan is to draw out and design before building. Engineers plan carefully before they create. They sketch their ideas. They calculate measurements. They choose materials. Planning saves time and money!` },
            { word: `prototype`, definition: `A first version of a design.`,
              audioPrompt: `A prototype is a first version of a design — built to test the idea. Prototypes don't have to be perfect. Engineers build prototypes from simple materials sometimes — cardboard, tape. Then they test!` },
            { word: `blueprint`, definition: `A detailed drawing of what you'll build.`,
              audioPrompt: `A blueprint is a detailed drawing of what you'll build. Engineers use blueprints to plan complex things — bridges, houses, machines. The blueprint shows exact measurements, materials, and how parts fit!` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 5: TEST and IMPROVE`,
          paragraphs: [
            `Now the BEST part — step 5: TEST it! Then IMPROVE it! Then TEST again! Then IMPROVE again!`,
            `Engineers test their prototypes to see what works and what doesn't! Maybe the bridge wobbles too much! Maybe the toy breaks easily! Each TEST gives information! Engineers use that information to MAKE IT BETTER! They redesign! Make changes! Try again! Test again! Improve again! Over and over! The Wright Brothers tested HUNDREDS of designs before they got their first airplane to fly! Engineers don't get it right on the FIRST try! Failure isn't bad — it's PART of how engineers learn!`,
          ],
          image: `/explorer-assets/science/l18-s5-test-improve.webp`,
          imageCaption: `Step 5: Test → improve → test → improve!`,
          vocab: [
            { word: `test`,    definition: `To try something out.`,
              audioPrompt: `To test is to try something out. Engineers test prototypes to see what works. They put them through real-world conditions. Each test gives information that helps engineers improve their designs!` },
            { word: `improve`, definition: `To make better.`,
              audioPrompt: `To improve is to make better. After testing, engineers improve their designs. They identify problems. They make changes. They make the design stronger, safer, easier to use. Then they test again!` },
            { word: `failure`, definition: `When something doesn't work.`,
              audioPrompt: `Failure is when something doesn't work. In engineering, failure leads to learning. Every failed test teaches the engineer something. What broke? Why? Failures aren't bad — they show what doesn't work!` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Engineers Everywhere`,
          paragraphs: [
            `There are LOTS of different kinds of engineers — all solving different problems!`,
            `CIVIL ENGINEERS design bridges, roads, and buildings! MECHANICAL ENGINEERS design machines and engines! ELECTRICAL ENGINEERS design electronics and computer chips! CHEMICAL ENGINEERS create new materials! BIOMEDICAL ENGINEERS design medical equipment! AEROSPACE ENGINEERS design planes and rockets! SOFTWARE ENGINEERS design computer programs and video games! AND many many more! The world needs engineers! And maybe — YOU could be one someday!`,
          ],
          image: `/explorer-assets/science/l18-s6-engineers-everywhere.webp`,
          imageCaption: `Many kinds of engineers solve different problems!`,
          vocab: [
            { word: `civil engineer`,     definition: `Designs bridges, roads, and buildings.`,
              audioPrompt: `A civil engineer designs bridges, roads, and buildings. They make the infrastructure that lets cities work. They figure out how to build a bridge that can hold thousands of cars. Civil engineering is ancient!` },
            { word: `software engineer`,  definition: `Designs computer programs and games.`,
              audioPrompt: `A software engineer designs computer programs, apps, and video games. They write code — special instructions that tell computers what to do. Every app, every website, every game — designed by software engineers!` },
            { word: `kinds of engineers`, definition: `Many different kinds solve different problems.`,
              audioPrompt: `Kinds of engineers — many different kinds solve different problems. Civil for buildings. Mechanical for machines. Electrical for electronics. Software for code. If you want to solve problems, there's a field for that!` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 things engineers do. Drag each one — is it ASK (understand the problem!), IMAGINE (brainstorm solutions!), or TEST (try it and improve!)?`,
          buckets: [
            { id: `ask`,     label: `❓ ASK`,     color: `#FBBF24` },
            { id: `imagine`, label: `💡 IMAGINE`, color: `#67E8F9` },
            { id: `test`,    label: `🔨 TEST`,    color: `#F87171` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `Who needs this bridge and how heavy must it be to hold cars`,
              matchPhrase: `Yes! ASK! Step 1 — understand the problem before designing anything!`,
              correctMatch: `ask` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `Brainstorming ten wild ideas for a new flying machine`,
              matchPhrase: `Right! IMAGINE! Step 2 — brainstorm lots of ideas, even crazy ones!`,
              correctMatch: `imagine` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `Dropping a paper airplane prototype to see if it flies`,
              matchPhrase: `Yes! TEST! Step 5 — try the prototype to see what works and what to improve!`,
              correctMatch: `test` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `Drawing five different shapes for a robot arm on paper`,
              matchPhrase: `Right! IMAGINE! Brainstorming possible designs before picking the best!`,
              correctMatch: `imagine` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What do ENGINEERS do?`,
              options: [`Watch TV all day`, `DESIGN solutions to problems using science and creativity`, `Just clean up labs`, `Never solve problems`],
              correctIndex: 1,
              explanation: `Engineers design solutions to problems using science and creativity. Bridges, planes, medicines, technology!` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `What's the FIRST step of engineering design?`,
              options: [`Start building`, `ASK QUESTIONS — understand the problem first`, `Get coffee`, `Make a YouTube video`],
              correctIndex: 1,
              explanation: `Ask questions! Engineers must understand the problem before designing. Understanding first leads to better designs!` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is a PROTOTYPE?`,
              options: [`A type of cookie`, `A FIRST version of a design — built to test ideas`, `A final perfect product`, `A type of car`],
              correctIndex: 1,
              explanation: `A prototype is the first version of a design. It doesn't have to be perfect — it just needs to test the idea!` },
            { id: `l18-q4`, format: `true-false`,
              question: `Engineers TEST their prototypes and use FAILURES to learn — improving the design each time.`,
              correctAnswer: true,
              explanation: `True! Test → improve → test → improve. Failures aren't bad — they show what doesn't work, so engineers can find what does!` },
            { id: `l18-q5`, format: `fill-blank`,
              question: `Engineers ___ many possible solutions before choosing the best one.`,
              options: [`imagine`, `eat`, `sleep`, `paint`],
              correctIndex: 0,
              explanation: `Imagine! Engineers brainstorm many possible solutions. The more ideas, the better!` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `What kind of engineer designs BRIDGES, ROADS, and BUILDINGS?`,
              options: [`Software engineer`, `CIVIL engineer`, `Astronaut`, `Chef`],
              correctIndex: 1,
              explanation: `Civil engineer! They design the infrastructure that lets cities work!` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Many famous inventions came from EVERYDAY problems engineers solved! Velcro? Invented by a Swiss engineer after noticing burrs sticking to his dog's fur! Microwaves? A radar engineer was eating a chocolate bar when his radar equipment melted it — he realized radar waves could cook food! Sticky notes? A chemist accidentally made glue that wasn't very sticky — and an engineer turned it into Post-its! ANYONE who notices a problem and tries to solve it is starting to think like an engineer! That includes YOU!`,
          familyAdventure: `Engineer a SOLUTION together! Pick a small problem at home: a messy bookshelf, a hard-to-reach shelf, a wobbly chair! Walk through the design process: 1) ASK questions about the problem! 2) IMAGINE possible solutions! 3) PLAN your best one! 4) CREATE it (using what's around)! 5) TEST and IMPROVE! Take photos along the way! You just engineered a solution!`,
          creativePrompt: `Design YOUR DREAM INVENTION! Pick a problem you've seen — maybe at home, school, or out in the world! On paper, draw your INVENTION! Label its parts! Explain how it solves the problem! For a 3-sentence floor: write 3 sentences about your invention (what it is, what problem it solves, what it's made of). For a 5-sentence stretch: also write about who would use it, where they'd use it, and one improvement you'd make after testing!`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now understand ENGINEERING! Engineers use SCIENCE and CREATIVITY to solve problems! They follow a process: ASK, IMAGINE, PLAN, CREATE, TEST, IMPROVE! Failure is part of learning! There are many KINDS of engineers — civil, mechanical, electrical, software, and more! The world NEEDS engineers! You could be one someday! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L18] Loaded: "Engineering" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
