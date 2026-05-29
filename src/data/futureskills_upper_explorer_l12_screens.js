// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L12 — Problem-Solving
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : systematic problem-solving — Polya's "How to Solve It," first
//            principles thinking (used by Elon Musk and many engineers),
//            working backwards, analogies, when to ask for help. Builds on
//            L01-L11 by applying sharp thinking to specific hard problems.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of solving any hard problem)
// SCOPE: define problem clearly first (most people skip this), break it
//        into smaller parts, use first principles AND analogies, try
//        approaches and iterate, ask for help when truly stuck
// VOICE: Byte = curious detective, treats hard problems like the best
//        puzzles
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-12`,
      title: `Problem-Solving`,
      duration: 18,
      xpReward: 75,
      badge: `problem-solver`,
      badgeName: `Problem Solver`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we tackle one of the most useful skills in life: PROBLEM-SOLVING. You'll face problems your entire life. Hard math problems. Friend problems. Project problems. Big questions about what to do next. Career problems. Life problems. The kids who learn how to APPROACH problems systematically can solve almost any challenge that comes their way. The kids who never learn just get stuck and feel helpless. Today, you learn the fox-detective approach to solving hard problems. This is one of the most empowering lessons in this whole subject. Let's go.`,
          headline: `Problem-Solving`,
          subtitle: `Systematic approach to any hard problem in life. Fox-detective style`,
          visual: `/ue-assets/fs/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Define the Problem CLEARLY First`,
          paragraphs: [
            `Here's the biggest problem-solving mistake almost everyone makes. They TRY TO SOLVE the problem before they've clearly DEFINED what the problem actually is. A kid says "I'm stuck on my homework" but doesn't know exactly which part is stuck. A friend says "I'm unhappy" but hasn't identified what specifically is wrong. A teen says "I don't know what to do with my life" but hasn't broken it down into specific questions. Researcher George POLYA, who wrote one of the most influential books on problem-solving ever, said the single most important step is "UNDERSTAND THE PROBLEM." Most people skip it and waste tons of time trying to fix the wrong thing.`,
            `Here's how to define a problem clearly. Ask yourself: "What EXACTLY is the problem?" "What do I ACTUALLY want to happen?" "What's the GAP between where I am and where I want to be?" "Can I state this problem in ONE clear sentence?" If you can't state it clearly, you don't understand it yet. The fox-style move: write down the problem in plain words. Often, when you do this, you suddenly see what you actually need to solve, and sometimes you realize you were trying to solve the WRONG problem. Real problem-solvers spend MORE time defining the problem than amateur ones, who jump straight to "how do I fix this." A clear problem is half solved.`,
          ],
          image: `/ue-assets/fs/l12-s1-define.webp`,
          imageCaption: `Define the problem CLEARLY first. Write it down. Most people skip this and waste time on the wrong problem.`,
          vocab: [
            { word: `problem definition`,
              definition: `The most important first step in problem-solving. State the problem CLEARLY in one sentence. What EXACTLY is the problem? What do I want to happen? What's the gap? Researcher George Polya said this is the single most important step. Most people skip it and waste time trying to fix the wrong thing.`,
              audioPrompt: `Problem definition is the most important first step in problem-solving, {name}. State the problem clearly in one sentence. What exactly is the problem? What do I actually want to happen? What's the gap between where I am and where I want to be? Researcher George Polya said the single most important step is understand the problem. Most people skip it and waste tons of time trying to fix the wrong thing. If you can't state the problem clearly, you don't understand it yet. A clear problem is half solved.` },
            { word: `understand the problem`,
              definition: `George Polya's most important principle. Before solving anything, make sure you actually understand what the problem is. State it in one clear sentence. Know the gap. Most problem-solving failures happen because people try to fix the wrong thing — they skip definition and jump straight to solutions.`,
              audioPrompt: `Understand the problem is George Polya's most important principle in problem-solving, {name}. Before you try to solve anything, make sure you actually understand what the problem is. State it clearly in one sentence. What exactly is wrong? What do you want to happen? What's the gap? Most problem-solving failures happen because people try to fix the wrong thing. They skip definition and jump straight to solutions. A clear problem statement is already half the solution. Write it down. Then solve.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Break Big Problems Into Smaller Ones`,
          paragraphs: [
            `Here's the second power move. Almost every hard problem is actually MANY SMALLER PROBLEMS stacked together. The kid who tries to solve a huge problem all at once gets overwhelmed and stuck. The kid who BREAKS IT INTO PIECES solves it part by part. Researchers studying expert problem-solvers found this is one of the most consistent differences between experts and beginners. Experts break problems down; beginners try to take them whole. Example. "I need to do a science project." Huge. Overwhelming. Break it down. "(1) Pick a topic. (2) Do research. (3) Form a hypothesis. (4) Design an experiment. (5) Gather materials. (6) Run the experiment. (7) Record results. (8) Write it up. (9) Make a display board. (10) Practice presenting." Each piece is now a SOLVABLE problem on its own.`,
            `Same goes for life problems. "I'm stressed about school" is too big to solve. Break it down. "Specifically I'm stressed about (a) the math test next week, (b) the fight with my friend, (c) feeling tired most days." Each one becomes a smaller problem with its own approach. (Math test: study, get help. Fight: have a real conversation. Tired: better sleep.) Even ENORMOUS problems break down. Want to learn an instrument? Break it down by week, month, year. Want to save money for something? Break it down by daily, weekly amounts. The fox doesn't try to eat the whole rabbit at once. Bite by bite.`,
          ],
          image: `/ue-assets/fs/l12-s2-breakdown.webp`,
          imageCaption: `Huge problems are stacked smaller ones. Break them down. Solve part by part.`,
          vocab: [
            { word: `breaking it down`,
              definition: `The second power move in problem-solving. Almost every hard problem is many smaller problems stacked together. Experts break problems into smaller solvable parts. Beginners try to take problems whole and get overwhelmed. Works for school projects, life problems, big goals, anything. Bite by bite, not whole at once.`,
              audioPrompt: `Breaking it down is the second power move in problem-solving, {name}. Almost every hard problem is actually many smaller problems stacked together. The kid who tries to solve a huge problem all at once gets overwhelmed and stuck. The kid who breaks it into pieces solves it part by part. Researchers found this is one of the most consistent differences between expert and beginner problem-solvers. Experts break problems down. Beginners try to take them whole. The fox doesn't try to eat the whole rabbit at once.` },
            { word: `decomposition`,
              definition: `The problem-solving technique of breaking big problems into smaller, manageable parts. Researchers found it's one of the most consistent skills separating expert from beginner problem-solvers. Experts decompose naturally; beginners try to solve problems whole. Works for school projects, life challenges, big goals, learning anything.`,
              audioPrompt: `Decomposition is the technique of breaking a big problem into smaller manageable parts, {name}. It's one of the most consistent skills separating expert from beginner problem-solvers. Experts decompose naturally. Beginners try to take problems whole and get overwhelmed. A science project broken into 10 steps becomes 10 solvable problems instead of one impossible one. Stress about school broken into specific issues gives you specific fixes. Decomposition works for anything. A goal, a project, a decision, a life challenge. Break it down first. Then solve the parts.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Two Powerful Lenses (First Principles + Analogies)`,
          paragraphs: [
            `Here are two thinking tools that unlock huge numbers of problems. FIRST PRINCIPLES THINKING means breaking a problem down to its most BASIC TRUTHS, then building back up from those, instead of assuming "this is how it's always been done." Engineer Elon Musk uses this. Example: when building rockets, people said "rockets cost millions because they always have." First-principles thinking asks "what are rockets actually MADE OF? What do the raw materials cost? How much SHOULD they cost?" Turned out the actual material cost was much lower than assumed, and that insight led to cheaper rockets. First principles asks "what's really TRUE here, ignoring assumptions?"`,
            `ANALOGIES are the second lens. Many hard problems become easier when you find a SIMILAR PROBLEM that's been solved elsewhere. "How do schools of fish stay together?" became the solution for "how do groups of drones fly without crashing?" "How does the brain organize memory?" inspired how computers organize data. Researchers studying how scientists make breakthroughs found they often borrow solutions from OTHER FIELDS through analogy. The fox-move: when stuck, ask "what's SIMILAR to this problem that has already been solved? In nature, in history, in another field, in another person's life?" Borrowing solutions across fields is one of the most powerful problem-solving moves. Combined with first principles (and the breakdown skill from section 2), these two lenses solve many "hard" problems.`,
          ],
          image: `/ue-assets/fs/l12-s3-lenses.webp`,
          imageCaption: `First principles: ignore assumptions, ask what's really true. Analogies: find similar solved problems elsewhere.`,
          vocab: [
            { word: `first principles and analogies`,
              definition: `Two powerful problem-solving lenses. FIRST PRINCIPLES: break problems down to basic truths, ignore assumptions about "how it's always done" (used by engineers, scientists, Elon Musk style). ANALOGIES: find similar problems solved elsewhere (fish schools to drone flocks; brain memory to computer storage). Borrow solutions across fields.`,
              audioPrompt: `First principles and analogies are two powerful problem-solving lenses, {name}. First principles thinking means breaking a problem down to its basic truths, not assuming how it's always been done. When people said rockets cost millions, first-principles thinking asked what are they actually made of? That insight led to cheaper rockets. Analogies are the second lens. Find a similar problem solved elsewhere. Schools of fish inspired drone flocks. Brain memory inspired computer storage. Researchers found scientists borrow solutions across fields through analogy.` },
            { word: `working backwards`,
              definition: `A powerful problem-solving technique where you START from the desired outcome and work back to figure out what steps are needed. Knowing where you want to end up lets you trace the path backward to where you are. Used by mathematicians, engineers, and strategic planners. Often reveals steps that forward-thinking misses.`,
              audioPrompt: `Working backwards is a powerful problem-solving technique, {name}. Instead of starting from where you are and hoping to reach your goal, you start from the goal and trace back the steps needed to get there. If you know you want to pass a test in three weeks, work backwards. What do you need to know? When do you need to study what? Working backwards often reveals the specific steps that forward-thinking misses. Mathematicians, engineers, and strategic planners use this regularly. Start with the end. Then trace back.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Try, Iterate, Ask for Help When Stuck`,
          paragraphs: [
            `Here's how real problem-solving actually works. You define the problem, break it down, apply lenses, then you TRY something. The first try usually doesn't fully solve it. That's NORMAL, not a sign of failure. Real problem-solving is ITERATIVE, you try, see what happens, learn from what worked and what didn't, then try again with better understanding. Researchers studying expert problem-solvers found they EXPECT this iteration. They don't get discouraged when the first try fails; they get curious. "What did this attempt teach me about the problem?" Each iteration brings you closer to the solution.`,
            `Finally, the wisest move of all: KNOW WHEN TO ASK FOR HELP. Some problems are too big or too unfamiliar to solve alone. Asking for help isn't weakness, it's smart resource use. Real problem-solvers know which problems they can solve alone and which need other people's knowledge, experience, or perspectives. Ask trusted adults. Ask experts. Ask AI (used wisely, L06!). Ask friends. Asking for help isn't giving up, it's a strategic move toward solving the problem better and faster. Byte's first teaching: problem-solving is a process. Define clearly, break it down, use first principles AND analogies, try and iterate, ask for help when stuck. Used together, this 5-move system solves an enormous range of life problems. Most adults never learn this systematic approach, they just panic when problems feel big. You'll be calmer and more effective than most people you meet. The fox-detective always works the problem.`,
          ],
          image: `/ue-assets/fs/l12-s4-iterate.webp`,
          imageCaption: `Try. Learn. Try again. Ask for help when truly stuck. Real problem-solving is iterative, not magic.`,
          vocab: [
            { word: `iterate and ask`,
              definition: `Two final moves in problem-solving. ITERATE: real problem-solving is trying, learning, trying again, not getting solutions perfectly on first try. Each iteration teaches you more. ASK FOR HELP when truly stuck, not weakness, smart resource use. Trusted adults, experts, AI (wisely), friends. Strategic move toward better/faster solutions.`,
              audioPrompt: `Iterate and ask are two final moves in problem-solving, {name}. Iterate means real problem-solving is trying, learning, trying again. The first try usually doesn't fully solve the problem. That's normal, not a sign of failure. Researchers found experts expect this. They don't get discouraged when the first try fails. They get curious. What did this attempt teach me? Ask for help is the wisest move. Some problems are too big to solve alone. Asking isn't weakness, it's smart resource use. Trusted adults, experts, AI used wisely, friends.` },
            { word: `iteration mindset`,
              definition: `The expectation that solving problems requires multiple attempts, each one teaching you more than the last. Expert problem-solvers don't get discouraged when the first try fails — they get curious. The iteration mindset turns "failure" into information. Builds calm, methodical confidence over panic.`,
              audioPrompt: `The iteration mindset is the expectation that solving any problem takes multiple attempts, {name}. Each one teaches you more than the last. Expert problem-solvers don't get discouraged when the first try fails. They get curious. What did this attempt teach me about the problem? The iteration mindset turns failure into information. Every try is a step closer, even when it doesn't solve it. Researchers found this is one of the clearest differences between expert and beginner problem-solvers. Experts expect iteration. Beginners expect to get it right first time.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the 5 moves of solving any hard problem in order, {name}. From FIRST UNDERSTANDING to FINAL DOOR. Use the arrows to arrange them.`,
          items: [
            { id: `step-define`,    label: `DEFINE THE PROBLEM CLEARLY — state it in ONE sentence; what EXACTLY is the problem? what do I want to happen? what's the gap?`,                                                  position: 1 },
            { id: `step-breakdown`, label: `BREAK IT DOWN. Most hard problems are SMALLER problems stacked together. Identify the pieces, then solve them one at a time`,                                                position: 2 },
            { id: `step-lenses`,    label: `APPLY THINKING LENSES — FIRST PRINCIPLES (what's really true here, ignoring assumptions?) AND ANALOGIES (what similar problem has been solved elsewhere?)`,                  position: 3 },
            { id: `step-try`,       label: `TRY SOMETHING and ITERATE — first try usually doesn't fully solve; expect iteration; learn from each attempt, adjust, try again with better understanding`,                  position: 4 },
            { id: `step-help`,      label: `ASK FOR HELP when truly stuck. Not weakness, smart resource use. Trusted adults, experts, AI used wisely (L06), friends. Strategic move toward better/faster solutions`,       position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of solving hard problems: define clearly, break it down, apply lenses (first principles + analogies), try and iterate, ask for help when stuck. Use this 5-move system on any hard problem in your life. You'll be calmer and more effective than most people. Foxes work problems methodically. Now so can you.`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What's the BIGGEST problem-solving mistake most people make?`,
              options: [
                `Trying too hard`,
                `Trying to SOLVE the problem before clearly DEFINING what it is. Polya said understanding the problem is the most important step. Most people skip it`,
                `Asking for help`,
                `Breaking it down`,
              ],
              correctIndex: 1,
              explanation: `The biggest mistake is trying to solve the problem before clearly defining what it is. Researcher George Polya said the single most important step is "understand the problem." Most people skip it and waste tons of time trying to fix the wrong thing. Real problem-solvers spend MORE time defining than amateur ones.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `How do you DEFINE a problem clearly?`,
              options: [
                `Just start solving`,
                `Ask: "What EXACTLY is the problem?" "What do I WANT to happen?" "What's the GAP?" State it in ONE clear sentence`,
                `Random questions`,
                `Skip it`,
              ],
              correctIndex: 1,
              explanation: `Define a problem by asking: What EXACTLY is the problem? What do I actually want to happen? What's the gap between where I am and where I want to be? Can I state this in one clear sentence? If you can't state it clearly, you don't understand it yet. Write it down in plain words.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `What does it mean to BREAK A PROBLEM DOWN?`,
              options: [
                `Give up`,
                `Almost every hard problem is SMALLER problems stacked together. Identify the pieces and solve them one at a time, like eating a rabbit bite by bite`,
                `Just one piece`,
                `Random pieces`,
              ],
              correctIndex: 1,
              explanation: `Almost every hard problem is many smaller problems stacked together. The kid who tries to solve a huge problem at once gets overwhelmed. The kid who breaks it into pieces solves it part by part. Researchers found this is one of the most consistent differences between expert and beginner problem-solvers.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What is FIRST PRINCIPLES THINKING?`,
              options: [
                `Doing things how they've always been done`,
                `Breaking a problem down to its BASIC TRUTHS, ignoring assumptions about "how it's always been done" — engineers use this to find non-obvious solutions`,
                `Random principle`,
                `Following rules`,
              ],
              correctIndex: 1,
              explanation: `First principles thinking breaks a problem down to its most basic truths, then builds back up, instead of assuming this is how it's always been done. When people said "rockets cost millions because they always have," first principles asked "what are they actually made of? What do materials cost?" That insight led to cheaper rockets.` },

            { id: `l12-q5`, format: `multiple-choice`,
              question: `What are ANALOGIES in problem-solving?`,
              options: [
                `Random comparisons`,
                `Finding a SIMILAR problem that's been solved ELSEWHERE — fish schools inspired drone flocks; brain memory inspired computer storage; scientists often borrow solutions across fields`,
                `Old solutions`,
                `Made-up examples`,
              ],
              correctIndex: 1,
              explanation: `Analogies find similar problems solved elsewhere. "How do schools of fish stay together?" became the solution for drone flocks. "How does the brain organize memory?" inspired computer storage. Researchers studying scientific breakthroughs found scientists often borrow solutions from other fields through analogy. Powerful when stuck.` },

            { id: `l12-q6`, format: `true-false`,
              question: `True or false: Real problem-solving means getting the right answer on the FIRST TRY.`,
              correctAnswer: false,
              explanation: `False. Real problem-solving is ITERATIVE, you try, see what happens, learn, try again. The first try usually doesn't fully solve it. That's normal, not a sign of failure. Researchers found expert problem-solvers EXPECT iteration. They get curious about what each attempt teaches them, not discouraged.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `When should you ASK FOR HELP?`,
              options: [
                `Never, that's weakness`,
                `When TRULY STUCK. Not weakness, smart resource use. Trusted adults, experts, AI used wisely (L06), friends. Strategic move toward better/faster solutions`,
                `For every problem`,
                `Only when failing`,
              ],
              correctIndex: 1,
              explanation: `Ask for help when truly stuck. Not weakness, smart resource use. Some problems are too big or too unfamiliar to solve alone. Real problem-solvers know which problems need other people's knowledge, experience, or perspectives. Trusted adults, experts, AI (wisely), friends. Asking is a strategic move.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about problem-solving?`,
              options: [
                `Just guess`,
                `5-move system. DEFINE clearly, BREAK DOWN, apply LENSES (first principles + analogies), TRY and ITERATE, ASK for help when stuck`,
                `Random approach`,
                `Give up early`,
              ],
              correctIndex: 1,
              explanation: `Problem-solving is a process. Define clearly, break it down, use first principles AND analogies, try and iterate, ask for help when stuck. Used together, this 5-move system solves an enormous range of life problems. Most adults never learn this systematic approach, they just panic when problems feel big. You'll be calmer and more effective than most people.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Take a focused breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of a hard problem in your life RIGHT NOW. Can you state it in ONE clear sentence? Try.` },
            { id: `r2`, text: `Take that problem and BREAK IT DOWN into 3-5 smaller pieces. Notice how it feels less overwhelming once broken down.` },
            { id: `r3`, text: `For your problem, try BOTH lenses. First principles: what's really true here, ignoring assumptions? Analogies: what similar problem has been solved elsewhere?` },
            { id: `r4`, text: `When you're truly stuck on a problem, who do you ASK FOR HELP? Have you been asking enough, or trying too hard to figure it out alone?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Problem-solving research goes back over a century, and the principles are remarkably consistent. George Polya's "How to Solve It" (1945) is still required reading for math students. First principles thinking has been used by engineers, scientists, and entrepreneurs across history. Analogies and cross-field borrowing have driven many of humanity's breakthroughs. The systematic 5-move approach you've learned today is what real problem-solvers actually do across math, science, engineering, business, art, social issues, and personal life. Byte's note: you're going to face problems your whole life. School problems. Friend problems. Work problems someday. Big life questions. The kid who learns to APPROACH problems systematically, instead of panicking or freezing or giving up, has a real advantage that compounds for decades. You don't have to be the smartest person in the room. You just have to be the person who works problems methodically. Foxes have always been the patient methodical hunters. You can be one of the best problem-solvers around. Stay calm, work the system, ask for help when stuck. Most problems are solvable, even the ones that don't feel like it at first.`,
          familyAdventure: `Family Problem-Solving Practice. As a family, pick ONE small family problem this week (it can be silly or real, the meal-planning chaos, the cluttered hallway, whatever). Apply the 5-move system together. (1) Define it clearly. (2) Break it down. (3) Use first principles AND analogies. (4) Try something and see what happens. (5) Ask each other for help. Adults model it. Building a family practice of methodical problem-solving is a quiet superpower for everyone, kids who grow up doing this become adults who navigate life's problems much better than most.`,
          creativePrompt: {
            intro: `Pick a hard problem in your life and write your problem-solving plan using the 5-move system.`,
            floor: `Write at least 5 sentences. Pick a problem, define it, break it down, apply at least one lens.`,
            stretch: `Write 8 to 10 sentences. Build a fuller plan with all 5 moves.`,
            open: `Write as much as you want. Pick a HARD PROBLEM in your life RIGHT NOW (school challenge, friendship issue, project, goal, decision, anything). Write your full PROBLEM-SOLVING PLAN. (1) DEFINE the problem in one clear sentence. What exactly is the problem? What's the gap? (2) BREAK IT DOWN into 3-5 smaller pieces. (3) Apply FIRST PRINCIPLES, what's really true here ignoring assumptions? Then ANALOGIES, what similar problem has been solved elsewhere? (4) TRY something (describe your first attempt). Be honest that it might not fully work and that's okay. (5) Identify WHO you could ASK FOR HELP if you get truly stuck. End with a commitment to work the problem systematically rather than panic or give up. Make it specific and steady.`,
            frames: [
              `The problem I want to solve is ___.`,
              `Defining it clearly: ___.`,
              `Breaking it into smaller parts: ___.`,
              `First principles: what's really true here? ___.`,
              `Analogies: similar problems solved elsewhere? ___.`,
              `My first attempt will be ___.`,
              `If I get truly stuck, I'll ask: ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Sharp, methodical work, {name}! You now have a 5-move SYSTEM for solving any hard problem: define clearly, break it down, apply lenses (first principles + analogies), try and iterate, ask for help when stuck. Use this for school, friendships, projects, life decisions. Most adults never learn this. You will navigate life with calm methodical strength. Next, we apply your sharpening skills to communicating in a fast-changing world, where AI writes, voices change, and clear writing matters more than ever. COMMUNICATION FOR THE FUTURE. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `problem-solver`,
          badgeName: `Problem Solver`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L12;
