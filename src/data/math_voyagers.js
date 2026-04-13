// ============================================================
// COREVERSE ACADEMY — MATHEMATICS · VOYAGERS (Ages 11-12)
// All 20 Lessons · Standards: Common Core State Standards (CCSS)
// Guide: Remi the Raccoon
// File: math_voyagers.js
// Export: mathVoyagers
// ============================================================

export const mathVoyagers = [

  // ── LESSON 1 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-01",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 1,
    title: "Real Numbers: Rational, Irrational, and the Number System",
    duration: "15-20 min",
    hook: "The square root of 2 is a number that cannot be written as a fraction — its decimal goes on forever without repeating. Ancient Greeks were so disturbed by this that legend says they drowned the mathematician who proved it. Today irrational numbers are everywhere: the diagonal of every square, the circumference of every circle, the frequency of every musical note. Understanding the full number system means understanding the fabric of mathematics itself. Remi the Raccoon is ready to map every corner of the number line.",
    bigIdea: "The real number system includes rational numbers (expressible as fractions) and irrational numbers (non-repeating, non-terminating decimals), and together they fill every point on the number line with no gaps.",
    sections: [
      {
        title: "The Number System Hierarchy",
        emoji: "🏗️",
        content: "Numbers are organized in a nested hierarchy. Natural numbers (1, 2, 3...) are the counting numbers. Whole numbers add zero. Integers add negatives. Rational numbers include every number that can be written as a fraction p/q where q is not zero — this covers all integers (5 = 5/1), all terminating decimals (0.75 = 3/4), and all repeating decimals (0.333... = 1/3). Irrational numbers are decimals that go on forever without repeating. Together, rationals and irrationals form the real numbers, filling the entire number line."
      },
      {
        title: "Rational Numbers in Depth",
        emoji: "🔢",
        content: "A rational number is any number expressible as a ratio of two integers. Its decimal form either terminates (like 0.625) or repeats (like 0.272727...). To check if a decimal is rational, look for a repeating block: 0.142857142857... repeats 142857, so it equals 1/7 and is rational. Every fraction you have ever used is rational. Even numbers that look complex, like −17/23, are rational because they fit the definition: one integer divided by another nonzero integer."
      },
      {
        title: "Irrational Numbers",
        emoji: "🌀",
        content: "Irrational numbers cannot be written as fractions, and their decimals never terminate and never repeat. The most famous are π (3.14159265...), √2 (1.41421356...), and e (2.71828182...). These are not rare — they appear constantly in geometry, physics, and nature. The diagonal of a 1-by-1 square is √2. The circumference of any circle divided by its diameter is π. You cannot avoid irrational numbers, so the goal is to work with them confidently, using approximations when needed and exact symbols when precision matters."
      },
      {
        title: "The Complete Number Line",
        emoji: "📏",
        content: "The real number line has no gaps. Between any two rational numbers there is an irrational number, and between any two irrational numbers there is a rational number. They are infinitely interleaved. This is what makes the real numbers complete — every point on the line corresponds to exactly one real number. When you see √5 on the number line, it sits between 2 and 3 (since 2² = 4 and 3² = 9), closer to 2.236. Remi knows that understanding where numbers live on the line is the foundation for every concept in algebra and beyond."
      }
    ],
    activity: {
      title: "Number Classification Challenge",
      instructions: "Write down 15 numbers of different types: whole numbers, negative integers, fractions, terminating decimals, repeating decimals, square roots, and π-based expressions. Examples: 7, −3, 2/5, 0.875, 0.333..., √9, √7, π, 3π/2, −√2, 0, 1.414, 22/7, 0.101001000100001..., √16. For each one, classify it as natural, whole, integer, rational, or irrational. Some fit multiple categories — list all that apply. Then place all 15 on a number line drawn on a long piece of paper, using a calculator for decimal approximations of the irrational ones."
    },
    quiz: [
      {
        question: "What makes a number irrational?",
        answer: "Its decimal expansion goes on forever without repeating, and it cannot be written as a fraction",
        options: [
          "It is a negative number that does not make logical sense",
          "Its decimal expansion goes on forever without repeating, and it cannot be written as a fraction",
          "It is a number that exists only in theory and cannot be calculated",
          "It is any number with a very long decimal expansion"
        ]
      },
      {
        question: "Which of these is a rational number?",
        answer: "0.272727... — because the repeating decimal can be written as a fraction",
        options: [
          "π — because it is used in formulas",
          "√2 — because it is the square root of a whole number",
          "0.272727... — because the repeating decimal can be written as a fraction",
          "0.101001000100001... — because it has a clear pattern"
        ]
      },
      {
        question: "What are the two main categories that make up the real numbers?",
        answer: "Rational numbers and irrational numbers",
        options: [
          "Positive numbers and negative numbers",
          "Whole numbers and fractions",
          "Rational numbers and irrational numbers",
          "Integers and decimals"
        ]
      },
      {
        question: "Is √9 rational or irrational?",
        answer: "Rational — because √9 = 3, which is an integer and therefore rational",
        options: [
          "Irrational — because all square roots are irrational",
          "Rational — because √9 = 3, which is an integer and therefore rational",
          "Neither — square roots are in a separate category",
          "It depends on whether you write it as √9 or as 3"
        ]
      },
      {
        question: "Between any two rational numbers on the number line, what can you always find?",
        answer: "An irrational number — rationals and irrationals are infinitely interleaved",
        options: [
          "Exactly one whole number",
          "Nothing — rational numbers are packed with no space between them",
          "Only other rational numbers",
          "An irrational number — rationals and irrationals are infinitely interleaved"
        ]
      }
    ],
    familyAdventure: "Play Number or Not at the dinner table. One person names a number — like √10, 0.75, π/4, 22/7, or 0.123123123... — and everyone else has 10 seconds to call out whether it is rational or irrational. Keep score across 15 rounds. Discuss the tricky ones: is 22/7 rational? (Yes — it is a fraction, even though it approximates π.) Is √25 irrational? (No — it equals 5.) Is 0.9999... rational? (Yes — it actually equals 1.) The trickier the numbers, the better the conversation.",
    badge: "Number System Navigator",
    nextLesson: "math-11-12-02"
  },

  // ── LESSON 2 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-02",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 2,
    title: "Linear Equations and Inequalities",
    duration: "15-20 min",
    hook: "Every time you calculate how many hours you need to work to afford something, you are solving a linear equation. Every time you figure out the maximum you can spend while staying under budget, you are solving an inequality. These are not abstract exercises — they are the tools adults use daily for financial planning, scheduling, and decision-making. Today you will master both, and you will see that inequalities are just equations with a wider set of solutions. Remi the Raccoon always calculates before committing.",
    bigIdea: "Linear equations have one solution that makes both sides equal, while linear inequalities have a range of solutions — and both are solved using the same inverse-operation strategy, with one extra rule for inequalities involving negative multiplication or division.",
    sections: [
      {
        title: "Multi-Step Linear Equations",
        emoji: "🔗",
        content: "You already know one-step and two-step equations. Multi-step equations add complexity: variables on both sides, parentheses, or more operations. For 3(x + 2) = 2x + 10, first distribute: 3x + 6 = 2x + 10. Then get variables on one side: subtract 2x to get x + 6 = 10. Finally subtract 6: x = 4. The strategy is always the same — simplify, collect variable terms on one side, isolate the variable. Always check by substituting back: 3(4 + 2) = 3(6) = 18, and 2(4) + 10 = 18. Confirmed."
      },
      {
        title: "What Is an Inequality?",
        emoji: "⚖️",
        content: "An inequality uses symbols like < (less than), > (greater than), ≤ (less than or equal to), or ≥ (greater than or equal to) instead of an equals sign. The statement x > 5 means x can be any number greater than 5 — there are infinitely many solutions. Inequalities describe ranges, not single points. You solve them the same way as equations: use inverse operations to isolate the variable. The solution is not one number but an entire region of the number line."
      },
      {
        title: "The Negative Flip Rule",
        emoji: "🔄",
        content: "There is one critical rule that makes inequalities different from equations: when you multiply or divide both sides by a negative number, you must flip the inequality sign. For example, −2x > 8 becomes x < −4 when you divide by −2. Why? Because multiplying by a negative reverses the order of numbers. Since 3 < 5, multiplying both by −1 gives −3 > −5 — the direction reverses. Forgetting this rule is the single most common mistake in solving inequalities. Remi always checks: did I multiply or divide by a negative? If yes, flip the sign."
      },
      {
        title: "Graphing Solutions on a Number Line",
        emoji: "📍",
        content: "Equation solutions are single points on a number line. Inequality solutions are rays or segments. For x > 3, draw an open circle at 3 (meaning 3 is not included) and shade everything to the right. For x ≤ −1, draw a filled circle at −1 (meaning −1 is included) and shade everything to the left. Compound inequalities like −2 < x ≤ 5 shade the region between −2 and 5, with an open circle at −2 and a filled circle at 5. The graph is a visual map of every number that satisfies the inequality."
      }
    ],
    activity: {
      title: "Equation vs Inequality Challenge",
      instructions: "Solve these six problems and graph each solution on a number line. (1) 4(x − 3) = 2x + 6. (2) 5x + 7 = 3x − 9. (3) 2x + 1 > 9. (4) −3x ≤ 12. (5) 7 − 2x < 1. (6) −4 ≤ 2x + 2 < 10. For the equations, mark the single solution point. For the inequalities, shade the solution region. Pay special attention to problem 4 — remember the negative flip rule. Write a sentence for each explaining what real-world situation it could represent."
    },
    quiz: [
      {
        question: "How do you solve 3(x + 2) = 2x + 10?",
        answer: "Distribute to get 3x + 6 = 2x + 10, subtract 2x to get x + 6 = 10, subtract 6 to get x = 4",
        options: [
          "Divide both sides by 3, then subtract 2x and 10",
          "Distribute to get 3x + 2 = 2x + 10, then subtract to get x = 8",
          "Distribute to get 3x + 6 = 2x + 10, subtract 2x to get x + 6 = 10, subtract 6 to get x = 4",
          "Add 3 to both sides, then divide by x"
        ]
      },
      {
        question: "What does the solution x > 5 mean?",
        answer: "x can be any number greater than 5 — there are infinitely many solutions",
        options: [
          "x equals exactly 5",
          "x can be any number greater than 5 — there are infinitely many solutions",
          "x is between 0 and 5",
          "x equals 6 because 6 is the next number after 5"
        ]
      },
      {
        question: "When solving −4x > 20, what happens to the inequality sign?",
        answer: "It flips — dividing by a negative reverses the sign, giving x < −5",
        options: [
          "Nothing — you get x > −5",
          "It flips — dividing by a negative reverses the sign, giving x < −5",
          "It becomes an equals sign, giving x = −5",
          "You cannot divide an inequality by a negative number"
        ]
      },
      {
        question: "On a number line, how do you show x ≤ 3?",
        answer: "A filled circle at 3 with shading to the left",
        options: [
          "An open circle at 3 with shading to the right",
          "A filled circle at 3 with shading to the left",
          "An open circle at 3 with shading to the left",
          "A filled circle at 3 with no shading"
        ]
      },
      {
        question: "How are equations and inequalities similar?",
        answer: "Both are solved using inverse operations to isolate the variable",
        options: [
          "Both always have exactly one solution",
          "Both use the same symbols",
          "Both are solved using inverse operations to isolate the variable",
          "They are not similar — they require completely different methods"
        ]
      }
    ],
    familyAdventure: "Create real-life inequality challenges for each other. Each family member writes two scenarios as inequalities. For example: I want to save at least $50 this month and I earn $8 per hour — how many hours must I work? (8h ≥ 50, so h ≥ 6.25, meaning at least 7 full hours.) Or: the restaurant bill must stay under $60 and each dish costs $14 — how many can we order? (14d < 60, so d < 4.28, meaning at most 4.) Solve each other's problems, graph the solutions, and discuss which situations naturally produce inequalities vs equations.",
    badge: "Inequality Master",
    nextLesson: "math-11-12-03"
  },

  // ── LESSON 3 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-03",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 3,
    title: "Systems of Equations",
    duration: "15-20 min",
    hook: "You buy 3 apples and 2 bananas for $4.50. Your friend buys 1 apple and 4 bananas for $3.50. What does one apple cost? You cannot solve this with one equation — you need two. A system of equations is a pair of equations that work together to pinpoint the exact values of two unknowns. One equation narrows the possibilities; the second locks in the answer. Remi the Raccoon loves puzzles with two clues.",
    bigIdea: "A system of equations is two or more equations with the same variables, and solving it means finding values that satisfy all equations simultaneously — using substitution, elimination, or graphing.",
    sections: [
      {
        title: "What Is a System?",
        emoji: "🔀",
        content: "A system of equations is a set of two or more equations that share the same variables. For example: x + y = 10 and 2x − y = 5. The solution is the pair (x, y) that makes both equations true simultaneously. A single linear equation with two variables has infinitely many solutions — the entire line. But two equations together typically intersect at exactly one point, giving one unique solution. That intersection is what you are solving for."
      },
      {
        title: "Solving by Substitution",
        emoji: "🔄",
        content: "Substitution means solving one equation for one variable, then plugging that expression into the other. From x + y = 10, you get y = 10 − x. Substitute into the second equation: 2x − (10 − x) = 5. Simplify: 3x − 10 = 5, so 3x = 15, so x = 5. Then y = 10 − 5 = 5. Check: 5 + 5 = 10 and 2(5) − 5 = 5. Both check out. Substitution works best when one equation is already solved for a variable or easily rearranged."
      },
      {
        title: "Solving by Elimination",
        emoji: "✂️",
        content: "Elimination means adding or subtracting equations to cancel a variable. For 3x + 2y = 14 and x − 2y = 2, add them: 4x = 16, so x = 4. Substitute back: 4 − 2y = 2, so y = 1. Solution: (4, 1). Sometimes you multiply one equation first to align coefficients. For 2x + 3y = 12 and 5x + y = 13, multiply the second by 3 to get 15x + 3y = 39, then subtract the first: 13x = 27. Elimination works best when coefficients nearly match."
      },
      {
        title: "Graphing Systems",
        emoji: "📈",
        content: "Every linear equation graphs as a straight line. A system of two equations graphs as two lines. If they intersect at one point, that is the unique solution. If the lines are parallel (same slope, different intercept), there is no solution. If the lines are identical, there are infinitely many solutions. Graphing gives visual understanding of what the algebra is doing. Remi always sketches a quick graph to verify his algebraic answer makes sense."
      }
    ],
    activity: {
      title: "Three Methods, One System",
      instructions: "Take the system: 2x + y = 8 and x − y = 1. Solve it three ways: by substitution, by elimination, and by graphing on graph paper. Verify all three give the same answer. Then create your own system based on a real scenario — two friends buying different combinations of items with known totals. Write the system, solve it, and check. Challenge a family member to solve your system using a different method than you used."
    },
    quiz: [
      {
        question: "What is a system of equations?",
        answer: "Two or more equations with the same variables that must be solved simultaneously",
        options: [
          "A single equation with two variables",
          "Two or more equations with the same variables that must be solved simultaneously",
          "A set of equations that each have different variables",
          "Any problem that requires more than one step to solve"
        ]
      },
      {
        question: "In the substitution method, what do you do first?",
        answer: "Solve one equation for one variable, then substitute that expression into the other equation",
        options: [
          "Add the two equations together to eliminate a variable",
          "Graph both equations and find the intersection",
          "Solve one equation for one variable, then substitute that expression into the other equation",
          "Multiply both equations by the same number"
        ]
      },
      {
        question: "If two lines in a system are parallel, how many solutions exist?",
        answer: "No solutions — parallel lines never intersect",
        options: [
          "Exactly one solution at the midpoint between them",
          "No solutions — parallel lines never intersect",
          "Infinitely many solutions",
          "Exactly two solutions, one on each line"
        ]
      },
      {
        question: "Solve: x + y = 7 and x − y = 3. What is x?",
        answer: "x = 5 — add the equations to get 2x = 10",
        options: [
          "x = 4 — subtract to get 2y = 4",
          "x = 5 — add the equations to get 2x = 10",
          "x = 3 — because x − y = 3 means x = 3",
          "x = 7 — because x + y = 7 means x = 7"
        ]
      },
      {
        question: "When is elimination the best method?",
        answer: "When the coefficients of one variable are the same or opposites, making cancellation easy",
        options: [
          "When both equations are already solved for y",
          "When the coefficients of one variable are the same or opposites, making cancellation easy",
          "When you have access to graph paper",
          "Elimination always works best regardless of the system"
        ]
      }
    ],
    familyAdventure: "Play the Mystery Price Game. One person secretly assigns prices to two items — say, cookies cost $2 and juice boxes cost $3. They give two clues: I bought 3 cookies and 2 juices for $12, and 1 cookie and 4 juices for $14. Everyone else solves the system to find the prices. Take turns being the price setter. Start with whole-number prices and gradually use decimals for extra challenge.",
    badge: "System Solver",
    nextLesson: "math-11-12-04"
  },

  // ── LESSON 4 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-04",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 4,
    title: "Functions: Domain, Range, and Notation",
    duration: "15-20 min",
    hook: "A scientist measures temperature every hour. A business tracks revenue every quarter. A doctor monitors heart rate every minute. In every case, one quantity depends on another — and that dependence is a function. You learned basics earlier; now it is time to go deeper. Function notation, domain, range, and the vertical line test let you analyze any input-output relationship with precision. Remi the Raccoon is upgrading from understanding functions to mastering them.",
    bigIdea: "Function notation f(x) names the rule and input precisely, the domain defines all valid inputs, the range defines all possible outputs, and the vertical line test confirms whether a graph represents a function.",
    sections: [
      {
        title: "Function Notation",
        emoji: "📝",
        content: "Function notation replaces y with f(x), read as f of x. The statement f(x) = 3x − 2 means the function named f takes input x, triples it, and subtracts 2. The power is precision: f(5) = 13 tells you instantly the input is 5 and output is 13. You can name different functions with different letters: g(x) = x² + 1, h(x) = √x. You can evaluate composed functions: if f(x) = 2x and g(x) = x + 3, then f(g(4)) = f(7) = 14. Notation is language, and function notation is how mathematicians speak clearly."
      },
      {
        title: "Domain: What Goes In",
        emoji: "🚪",
        content: "The domain is the complete set of inputs for which a function produces a valid output. For f(x) = 2x + 1, the domain is all real numbers. But f(x) = 1/x cannot accept x = 0 because division by zero is undefined. And f(x) = √x requires x ≥ 0 because you cannot take a real square root of a negative. Identifying the domain means asking: what values of x would break this function? Those are excluded; everything else is in."
      },
      {
        title: "Range: What Comes Out",
        emoji: "📤",
        content: "The range is the set of all outputs a function can produce. For f(x) = x², every output is zero or positive — squaring never gives a negative. So the range is y ≥ 0. For f(x) = 2x + 1, any real number can be an output, so the range is all real numbers. A good way to find range is to graph the function and see what y-values the curve reaches. Remi always checks: what is the smallest output? The largest? Are there gaps?"
      },
      {
        title: "The Vertical Line Test",
        emoji: "📊",
        content: "Not every graph is a function. The vertical line test: if any vertical line crosses the graph at more than one point, it is not a function. That would mean one input produces two outputs — violating the definition. A circle fails (a vertical line through the middle hits two points). A parabola opening upward passes (every vertical line hits at most one point). This test connects visual graphs to the algebraic definition of a function."
      }
    ],
    activity: {
      title: "Function Analysis Portfolio",
      instructions: "Analyze four functions: f(x) = 3x − 5, g(x) = x², h(x) = 1/(x − 2), and k(x) = √(x + 4). For each: write the domain and range, evaluate at x = −1, 0, 3, and 5 (skip inputs outside the domain), create a table of 6 input-output pairs, and graph on graph paper. Apply the vertical line test to each. Then draw a circle on a coordinate plane and show why it fails. Write a one-sentence explanation for each domain restriction."
    },
    quiz: [
      {
        question: "What does f(3) = 7 mean?",
        answer: "When the input is 3, the function f produces an output of 7",
        options: [
          "f equals 3 and also equals 7",
          "When the input is 3, the function f produces an output of 7",
          "The function has 3 inputs and 7 outputs",
          "f is a fraction: 3/7"
        ]
      },
      {
        question: "What is the domain of f(x) = 1/x?",
        answer: "All real numbers except x = 0, because division by zero is undefined",
        options: [
          "All real numbers",
          "Only positive numbers",
          "All real numbers except x = 0, because division by zero is undefined",
          "Only integers"
        ]
      },
      {
        question: "What is the range of f(x) = x²?",
        answer: "All real numbers greater than or equal to 0",
        options: [
          "All real numbers",
          "All positive numbers only",
          "All real numbers greater than or equal to 0",
          "Only perfect squares like 1, 4, 9, 16"
        ]
      },
      {
        question: "What does the vertical line test determine?",
        answer: "Whether a graph represents a function — it passes if every vertical line hits the graph at most once",
        options: [
          "Whether a graph is linear or curved",
          "Whether a graph has a positive or negative slope",
          "Whether a graph represents a function — it passes if every vertical line hits the graph at most once",
          "Whether the domain includes negative numbers"
        ]
      },
      {
        question: "If f(x) = 2x + 1 and g(x) = x², what is f(g(3))?",
        answer: "19 — because g(3) = 9, then f(9) = 2(9) + 1 = 19",
        options: [
          "7 — because f(3) = 7",
          "49 — because g(f(3)) = g(7) = 49",
          "19 — because g(3) = 9, then f(9) = 2(9) + 1 = 19",
          "13 — because 2(3) + 1 = 7, then 7 + 6 = 13"
        ]
      }
    ],
    familyAdventure: "Create a Function Machine Chain. Write three simple functions on cards: f(x) = 2x, g(x) = x + 5, h(x) = x². Line up three family members as machines. Give an input to the first person, who applies their function and passes the output to the next. The final person announces the result. Everyone predicts before the reveal. Then change the order — same functions, different sequence. Does the order matter? (Yes!) This demonstrates function composition tangibly.",
    badge: "Function Analyst",
    nextLesson: "math-11-12-05"
  },

  // ── LESSON 5 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-05",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 5,
    title: "Slope and Linear Functions",
    duration: "15-20 min",
    hook: "The steepness of a ski slope, the rate your phone battery drains, the speed of a car on the highway — all of these are slopes. Slope is the single most important concept in linear algebra because it tells you how fast something is changing. A steep graph means rapid change. A flat graph means no change. A falling graph means decrease. Once you understand slope, you can read any straight-line graph like a story. Remi the Raccoon always checks the slope before choosing his path.",
    bigIdea: "Slope measures the rate of change between two variables — calculated as rise over run (change in y divided by change in x) — and slope-intercept form y = mx + b reveals the slope and starting point of any linear function.",
    sections: [
      {
        title: "What Slope Means",
        emoji: "⛰️",
        content: "Slope measures how steep a line is — how much y changes for every one-unit change in x. A slope of 3 means y increases by 3 for every 1-unit increase in x. A slope of −2 means y decreases by 2 per unit increase in x. A slope of 0 means y does not change — horizontal line. An undefined slope means x does not change — vertical line. Slope is rate of change, and rates of change are everywhere: miles per hour, dollars per item, degrees per minute."
      },
      {
        title: "Calculating Slope",
        emoji: "📐",
        content: "The slope formula is m = (y₂ − y₁) / (x₂ − x₁), where (x₁, y₁) and (x₂, y₂) are any two points on the line. For points (1, 3) and (4, 9): m = (9 − 3)/(4 − 1) = 6/3 = 2. The line rises 2 units for every 1 unit right. You can use any two points — the slope is constant everywhere because the line is straight. That constant rate of change is what makes a function linear."
      },
      {
        title: "Slope-Intercept Form",
        emoji: "📝",
        content: "The most useful form of a linear equation is y = mx + b. The letter m is the slope and b is the y-intercept — where the line crosses the y-axis. For y = 2x + 3, the slope is 2 and the line crosses at (0, 3). To graph: start at (0, 3), go right 1 and up 2 to (1, 5), then right 1 and up 2 to (2, 7). Connect with a straight line. Any linear equation can be rearranged into this form, making slope and intercept immediately visible."
      },
      {
        title: "Parallel and Perpendicular Lines",
        emoji: "✖️",
        content: "Parallel lines have the same slope but different y-intercepts — they never meet. Lines y = 3x + 1 and y = 3x − 4 are parallel. Perpendicular lines meet at right angles, and their slopes are negative reciprocals. If one line has slope 2, the perpendicular has slope −1/2. If one has slope −3/4, the perpendicular has slope 4/3. Multiply the two slopes and you get −1. Remi uses this to check corners: if slopes multiply to −1, the angle is exactly 90 degrees."
      }
    ],
    activity: {
      title: "Slope in the Real World",
      instructions: "Find three real-world linear relationships and calculate their slopes. Ideas: track pages read over several days (pages per day), record temperature at the same time daily for a week (degrees per day), or measure water draining from a container over time. Plot each on a coordinate plane with time on x. Calculate slope from two data points. Write the equation in y = mx + b form. Which has the steepest slope? Which is positive vs negative? What does each slope tell you about the real situation?"
    },
    quiz: [
      {
        question: "What does slope measure?",
        answer: "The rate of change — how much y changes for every one-unit change in x",
        options: [
          "The total distance between two points",
          "The rate of change — how much y changes for every one-unit change in x",
          "The midpoint of a line segment",
          "The angle of the line in degrees"
        ]
      },
      {
        question: "What is the slope of a line through (2, 4) and (5, 10)?",
        answer: "2 — because (10 − 4)/(5 − 2) = 6/3 = 2",
        options: [
          "3 — because 5 − 2 = 3",
          "6 — because 10 − 4 = 6",
          "2 — because (10 − 4)/(5 − 2) = 6/3 = 2",
          "14 — because 4 + 10 = 14"
        ]
      },
      {
        question: "In y = mx + b, what does b represent?",
        answer: "The y-intercept — where the line crosses the y-axis",
        options: [
          "The slope of the line",
          "The x-intercept",
          "The y-intercept — where the line crosses the y-axis",
          "The length of the line"
        ]
      },
      {
        question: "What is true about slopes of perpendicular lines?",
        answer: "They are negative reciprocals — their product is −1",
        options: [
          "They have the same slope",
          "One is always 0 and the other undefined",
          "They are negative reciprocals — their product is −1",
          "They always have slopes of 1 and −1"
        ]
      },
      {
        question: "A line with a negative slope looks like what on a graph?",
        answer: "It falls from left to right — y decreases as x increases",
        options: [
          "The line is horizontal",
          "The line rises steeply left to right",
          "It falls from left to right — y decreases as x increases",
          "The line is below the x-axis"
        ]
      }
    ],
    familyAdventure: "Go on a Slope Walk around your neighborhood. Look for slopes everywhere: ramps, rooflines, staircases, driveways, hills. For each, estimate the rise and run. Calculate slope as rise ÷ run. Which neighborhood slope is steepest? Gentlest? Compare a staircase to a ramp — why is the ramp slope smaller? (Accessibility requires gentler slopes.) Take photos and label them with calculated slopes. Slope is literally all around you.",
    badge: "Slope Specialist",
    nextLesson: "math-11-12-06"
  },

  // ── LESSON 6 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-06",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 6,
    title: "Polynomials: Adding, Subtracting, and Multiplying",
    duration: "15-20 min",
    hook: "The path of a basketball through the air, the profit curve of a growing business, the shape of a suspension bridge cable — none of these are straight lines. They are curves described by polynomials. A polynomial is an expression with variables raised to whole-number powers, and learning to work with them unlocks the mathematics of curves, growth, and change. Remi the Raccoon is about to move beyond straight lines and into the elegant world of polynomial expressions.",
    bigIdea: "Polynomials are expressions with one or more terms involving variables raised to whole-number powers, and you can add, subtract, and multiply them by combining like terms and using the distributive property.",
    sections: [
      {
        title: "What Is a Polynomial?",
        emoji: "📐",
        content: "A polynomial is an expression made of terms that are each a coefficient multiplied by a variable raised to a whole-number exponent. Examples: 3x² + 2x − 5 (a trinomial with three terms), 7x⁴ − x (a binomial with two terms), and 12 (a monomial — a constant). The degree of a polynomial is the highest exponent: 3x² + 2x − 5 has degree 2 (called a quadratic), while x³ − 4x has degree 3 (called a cubic). The degree tells you the shape of the curve when graphed and how many times it can cross the x-axis."
      },
      {
        title: "Adding and Subtracting Polynomials",
        emoji: "➕",
        content: "To add polynomials, combine like terms — terms with the same variable raised to the same power. For (3x² + 2x − 1) + (x² − 5x + 4): combine x² terms (3x² + x² = 4x²), x terms (2x − 5x = −3x), and constants (−1 + 4 = 3). Result: 4x² − 3x + 3. To subtract, distribute the negative sign first: (3x² + 2x − 1) − (x² − 5x + 4) becomes 3x² + 2x − 1 − x² + 5x − 4, which simplifies to 2x² + 7x − 5. Line up terms by degree to avoid mistakes."
      },
      {
        title: "Multiplying Polynomials",
        emoji: "✖️",
        content: "To multiply polynomials, every term in the first must multiply every term in the second. For (x + 3)(x + 5): x·x = x², x·5 = 5x, 3·x = 3x, 3·5 = 15. Combine: x² + 8x + 15. This process is called FOIL for binomials (First, Outer, Inner, Last), but the underlying principle — distribute every term — works for any size polynomial. For (2x + 1)(x² − 3x + 4), you multiply 2x by each term, then 1 by each term, then combine like terms."
      },
      {
        title: "Why Polynomials Matter",
        emoji: "🌍",
        content: "Polynomials model countless real-world situations. The height of a thrown ball over time is a quadratic polynomial. Revenue as a function of price often follows a polynomial curve. The volume of a box as you change one dimension is polynomial. Engineers use polynomials to approximate complex functions that would otherwise be impossible to calculate. Learning to manipulate polynomials gives you the ability to describe, predict, and optimize curved relationships — a massive step up from the straight lines of linear functions. Remi sees polynomials as the curves that connect real-world dots."
      }
    ],
    activity: {
      title: "Polynomial Operations Practice",
      instructions: "Complete these operations and verify each answer. (1) Add: (4x² − 3x + 7) + (2x² + 5x − 2). (2) Subtract: (6x³ + x² − 4) − (2x³ − 3x² + 1). (3) Multiply: (x + 4)(x − 3). (4) Multiply: (2x − 1)(x² + 3x − 5). (5) Multiply: (x + 2)². For problem 5, first expand using FOIL, then verify by substituting x = 3 into both (x + 2)² and your expanded form — both should give 25. Create two polynomial multiplication problems of your own and trade with a family member to solve."
    },
    quiz: [
      {
        question: "What is the degree of the polynomial 5x³ − 2x + 7?",
        answer: "3 — because the highest exponent on x is 3",
        options: [
          "5 — because the leading coefficient is 5",
          "3 — because the highest exponent on x is 3",
          "7 — because the constant term is 7",
          "2 — because there are two variable terms"
        ]
      },
      {
        question: "What is (2x² + 3x) + (x² − 5x + 4)?",
        answer: "3x² − 2x + 4",
        options: [
          "3x² − 2x + 4",
          "3x² + 8x + 4",
          "2x⁴ − 15x + 4",
          "3x² − 2x − 4"
        ]
      },
      {
        question: "What is (x + 3)(x + 5)?",
        answer: "x² + 8x + 15",
        options: [
          "x² + 15",
          "x² + 8x + 15",
          "2x + 8",
          "x² + 8x + 8"
        ]
      },
      {
        question: "What does FOIL stand for in polynomial multiplication?",
        answer: "First, Outer, Inner, Last — the order for multiplying two binomials",
        options: [
          "Factor, Order, Identify, List",
          "First, Outer, Inner, Last — the order for multiplying two binomials",
          "Find, Operate, Isolate, Locate",
          "Fraction, Operation, Integer, Linear"
        ]
      },
      {
        question: "Why are polynomials important in the real world?",
        answer: "They model curved relationships like projectile paths, profit curves, and growth patterns",
        options: [
          "They are only used in abstract math with no real applications",
          "They replace all linear equations in advanced math",
          "They model curved relationships like projectile paths, profit curves, and growth patterns",
          "They are required for basic addition and subtraction"
        ]
      }
    ],
    familyAdventure: "Build polynomial area models with paper. Cut a large square from cardboard or paper and label each side (x + 3). Now cut the square into four pieces: an x-by-x piece, two x-by-3 pieces, and a 3-by-3 piece. Label each piece with its area: x², 3x, 3x, and 9. Add them up: x² + 6x + 9. You just proved that (x + 3)² = x² + 6x + 9 using physical pieces. Try it with (x + 2)(x + 5) — cut the rectangle into four pieces and verify the algebra. This geometric proof makes abstract multiplication visual and tangible.",
    badge: "Polynomial Pro",
    nextLesson: "math-11-12-07"
  },

  // ── LESSON 7 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-07",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 7,
    title: "Factoring Polynomials",
    duration: "15-20 min",
    hook: "Multiplication builds polynomials up. Factoring breaks them back down. If you know that x² + 8x + 15 = (x + 3)(x + 5), you have unlocked the structure hidden inside the expression — and that structure tells you where the graph crosses the x-axis, how to solve equations, and how to simplify complex fractions. Factoring is reverse multiplication, and it is one of the most powerful skills in all of algebra. Remi the Raccoon takes things apart to understand how they were built.",
    bigIdea: "Factoring is the process of rewriting a polynomial as a product of simpler expressions — it reverses multiplication and is essential for solving quadratic equations and simplifying algebraic expressions.",
    sections: [
      {
        title: "Greatest Common Factor",
        emoji: "🔍",
        content: "The first factoring strategy is always to look for a greatest common factor (GCF). In 6x² + 9x, both terms share a factor of 3x, so 6x² + 9x = 3x(2x + 3). In 4x³ − 8x² + 12x, the GCF is 4x, giving 4x(x² − 2x + 3). Always check for a GCF before trying any other method. It simplifies the remaining expression and makes further factoring easier. Remi always looks for the biggest shared piece first."
      },
      {
        title: "Factoring Trinomials",
        emoji: "🧩",
        content: "A trinomial of the form x² + bx + c factors into (x + p)(x + q) where p + q = b and p × q = c. For x² + 8x + 15: you need two numbers that add to 8 and multiply to 15. Those are 3 and 5, so x² + 8x + 15 = (x + 3)(x + 5). For x² − 7x + 12: you need numbers that add to −7 and multiply to 12. Those are −3 and −4: (x − 3)(x − 4). Practice the mental search: what two numbers have this sum and this product?"
      },
      {
        title: "Special Patterns",
        emoji: "⭐",
        content: "Two factoring patterns appear constantly. The difference of squares: a² − b² = (a + b)(a − b). So x² − 49 = (x + 7)(x − 7) and 4x² − 25 = (2x + 5)(2x − 5). Perfect square trinomials: a² + 2ab + b² = (a + b)² and a² − 2ab + b² = (a − b)². So x² + 10x + 25 = (x + 5)² and x² − 6x + 9 = (x − 3)². Recognizing these patterns saves time and reduces errors. They come up in geometry, physics, and every branch of higher mathematics."
      },
      {
        title: "Why Factoring Solves Equations",
        emoji: "🎯",
        content: "Factoring connects to equation solving through the zero product property: if a × b = 0, then either a = 0 or b = 0 (or both). So if x² + 8x + 15 = 0, factor to get (x + 3)(x + 5) = 0, which means x + 3 = 0 or x + 5 = 0, giving x = −3 or x = −5. These are the x-intercepts of the parabola y = x² + 8x + 15. Factoring transforms a quadratic equation into two simple linear equations. It is elegant, efficient, and one of the most satisfying moves in mathematics."
      }
    ],
    activity: {
      title: "Factor and Verify",
      instructions: "Factor each polynomial completely. (1) 8x² + 12x. (2) x² + 7x + 10. (3) x² − 9x + 20. (4) x² − 36. (5) x² + 14x + 49. (6) 2x² + 7x + 3 (challenge — leading coefficient is not 1). For each, verify by multiplying your factors back together to confirm you get the original polynomial. Then use the zero product property to solve problems 2-5 set equal to zero. Write the two solutions for each and explain what they mean on a graph."
    },
    quiz: [
      {
        question: "What is factoring?",
        answer: "Rewriting a polynomial as a product of simpler expressions — reversing multiplication",
        options: [
          "Multiplying two polynomials together",
          "Rewriting a polynomial as a product of simpler expressions — reversing multiplication",
          "Finding the greatest value in a polynomial",
          "Dividing a polynomial by its degree"
        ]
      },
      {
        question: "What is the factored form of x² + 7x + 12?",
        answer: "(x + 3)(x + 4) — because 3 + 4 = 7 and 3 × 4 = 12",
        options: [
          "(x + 2)(x + 6)",
          "(x + 3)(x + 4) — because 3 + 4 = 7 and 3 × 4 = 12",
          "(x + 1)(x + 12)",
          "(x − 3)(x − 4)"
        ]
      },
      {
        question: "What is x² − 25 in factored form?",
        answer: "(x + 5)(x − 5) — using the difference of squares pattern",
        options: [
          "(x − 5)(x − 5)",
          "(x + 25)(x − 1)",
          "(x + 5)(x − 5) — using the difference of squares pattern",
          "Cannot be factored"
        ]
      },
      {
        question: "What is the zero product property?",
        answer: "If a × b = 0, then a = 0 or b = 0 — at least one factor must be zero",
        options: [
          "Zero multiplied by anything equals zero",
          "If a × b = 0, then a = 0 or b = 0 — at least one factor must be zero",
          "A product is zero only when both factors are zero",
          "Zero is the identity element for multiplication"
        ]
      },
      {
        question: "If x² + 5x + 6 = 0, what are the solutions?",
        answer: "x = −2 and x = −3 — because (x + 2)(x + 3) = 0",
        options: [
          "x = 2 and x = 3",
          "x = −2 and x = −3 — because (x + 2)(x + 3) = 0",
          "x = 1 and x = 6",
          "x = −1 and x = −6"
        ]
      }
    ],
    familyAdventure: "Play Factor Bingo. Create bingo cards with polynomial expressions in each square: x² + 5x + 6, x² − 9, x² + 10x + 25, 3x² + 6x, and so on. One person reads out a factored form like (x + 2)(x + 3) — everyone checks if the original polynomial is on their card. If it is, they cover that square. First to get a row wins. This game builds the mental connection between polynomials and their factors, which is the key fluency needed for advanced algebra.",
    badge: "Factoring Champion",
    nextLesson: "math-11-12-08"
  },

  // ── LESSON 8 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-08",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 8,
    title: "Quadratic Equations and the Quadratic Formula",
    duration: "15-20 min",
    hook: "When a soccer ball arcs through the air, its path traces a parabola — a curve described by a quadratic equation. Finding where that ball lands means solving the equation. Factoring works for some quadratics, but not all. The quadratic formula works for every single one. It is a master key that unlocks every quadratic equation in existence, no matter how messy. Remi the Raccoon carries this formula in his toolkit because it never fails.",
    bigIdea: "The quadratic formula x = (−b ± √(b² − 4ac)) / 2a solves any equation of the form ax² + bx + c = 0, and the discriminant (b² − 4ac) tells you how many real solutions exist before you even solve.",
    sections: [
      {
        title: "Standard Form and the Formula",
        emoji: "📋",
        content: "Every quadratic equation can be written in standard form: ax² + bx + c = 0, where a, b, and c are numbers and a is not zero. The quadratic formula gives the solutions directly: x = (−b ± √(b² − 4ac)) / 2a. The ± symbol means there are potentially two solutions — one using + and one using −. For 2x² + 5x − 3 = 0: a = 2, b = 5, c = −3. Plug in: x = (−5 ± √(25 + 24)) / 4 = (−5 ± 7) / 4. So x = 2/4 = 0.5 or x = −12/4 = −3."
      },
      {
        title: "The Discriminant",
        emoji: "🔮",
        content: "The expression under the square root, b² − 4ac, is called the discriminant. It tells you how many real solutions exist before you finish solving. If b² − 4ac > 0, there are two different real solutions — the parabola crosses the x-axis twice. If b² − 4ac = 0, there is exactly one real solution — the parabola touches the x-axis at its vertex. If b² − 4ac < 0, there are no real solutions — the parabola never reaches the x-axis. Checking the discriminant first saves time and guides your expectations."
      },
      {
        title: "Multiple Solving Methods",
        emoji: "🛤️",
        content: "You now have three methods for solving quadratics. Factoring works when the polynomial factors neatly — it is the fastest method when it applies. The quadratic formula works always — use it when factoring fails or the numbers are messy. Completing the square is a third method that rewrites the equation in a form that reveals the vertex of the parabola. Each method has its strengths, and skilled mathematicians choose the right tool for each problem. Remi tries factoring first; if it does not work in 30 seconds, he uses the formula."
      },
      {
        title: "Quadratics in Real Life",
        emoji: "🏀",
        content: "Quadratic equations model projectile motion (how high and far an object travels), area optimization (maximizing the space inside a fence with fixed perimeter), profit curves (finding the price that maximizes revenue), and braking distances (how far a car travels before stopping). The solutions to the equation tell you where something starts, peaks, or ends. The vertex tells you the maximum or minimum value. Understanding quadratics means understanding the mathematics of arcs, peaks, and optimization — the curves of real life."
      }
    ],
    activity: {
      title: "Quadratic Formula Lab",
      instructions: "Solve each quadratic equation using the quadratic formula. (1) x² − 5x + 6 = 0 (also verify by factoring). (2) 2x² + 3x − 2 = 0. (3) x² + 4x + 4 = 0 (notice the discriminant is 0). (4) x² + x + 1 = 0 (notice the discriminant is negative). (5) 3x² − 7x + 2 = 0. For each, identify a, b, c, calculate the discriminant, then find the solutions. State how many real solutions each has and why. For problem 1, compare your formula answer to factoring — they should match."
    },
    quiz: [
      {
        question: "What is the quadratic formula?",
        answer: "x = (−b ± √(b² − 4ac)) / 2a — it solves any equation of the form ax² + bx + c = 0",
        options: [
          "x = −b / 2a — it finds the vertex of a parabola",
          "x = (−b ± √(b² − 4ac)) / 2a — it solves any equation of the form ax² + bx + c = 0",
          "x = (a + b + c) / 2 — it finds the average of the coefficients",
          "x = b² − 4ac — it calculates the discriminant"
        ]
      },
      {
        question: "What does the discriminant tell you?",
        answer: "How many real solutions the quadratic equation has",
        options: [
          "The exact values of the solutions",
          "Whether the equation is quadratic or linear",
          "How many real solutions the quadratic equation has",
          "The vertex of the parabola"
        ]
      },
      {
        question: "If the discriminant is negative, what does that mean?",
        answer: "The equation has no real solutions — the parabola does not cross the x-axis",
        options: [
          "The equation has two negative solutions",
          "The equation has exactly one solution",
          "The equation has no real solutions — the parabola does not cross the x-axis",
          "You made a calculation error because the discriminant cannot be negative"
        ]
      },
      {
        question: "For x² − 5x + 6 = 0, what are a, b, and c?",
        answer: "a = 1, b = −5, c = 6",
        options: [
          "a = 1, b = 5, c = 6",
          "a = −5, b = 6, c = 1",
          "a = 1, b = −5, c = 6",
          "a = 0, b = −5, c = 6"
        ]
      },
      {
        question: "When should you use the quadratic formula instead of factoring?",
        answer: "When the polynomial does not factor neatly or when the coefficients make factoring difficult",
        options: [
          "Always — the formula is better than factoring in every situation",
          "Never — factoring always works if you try hard enough",
          "When the polynomial does not factor neatly or when the coefficients make factoring difficult",
          "Only when the discriminant is exactly zero"
        ]
      }
    ],
    familyAdventure: "Launch a ball or crumpled paper into the air and time how long it stays airborne. The height of a thrown object follows the equation h = −16t² + vt + h₀ (in feet, where v is initial velocity and h₀ is starting height). Estimate v by throwing straight up and timing the throw — v is approximately 16 × total air time (in ft/s). Set h = 0 and use the quadratic formula to find when the object hits the ground. Compare your calculated time to your stopwatch. Discuss why one solution is positive (landing time) and the other is negative (not physically meaningful).",
    badge: "Quadratic Solver",
    nextLesson: "math-11-12-09"
  },

  // ── LESSON 9 ────────────────────────────────────────────────────────────────
  {
    id: "math-11-12-09",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 9,
    title: "Exponents and Exponential Functions",
    duration: "15-20 min",
    hook: "If you fold a piece of paper in half 42 times — if you could — it would be tall enough to reach the moon. That is the power of exponential growth: doubling just 42 times turns a fraction of a millimeter into 440,000 kilometers. Exponents are the mathematics of repeated multiplication, and exponential functions describe the fastest-growing (and fastest-shrinking) phenomena in nature, finance, and technology. Remi the Raccoon knows that exponential thinking separates those who understand the future from those who are surprised by it.",
    bigIdea: "Exponents represent repeated multiplication, exponent rules simplify complex expressions, and exponential functions model real-world growth and decay that accelerates over time — fundamentally different from the steady change of linear functions.",
    sections: [
      {
        title: "Exponent Rules",
        emoji: "📏",
        content: "The core exponent rules are: product rule (aᵐ × aⁿ = aᵐ⁺ⁿ), quotient rule (aᵐ ÷ aⁿ = aᵐ⁻ⁿ), power rule ((aᵐ)ⁿ = aᵐⁿ), zero exponent (a⁰ = 1 for any nonzero a), and negative exponent (a⁻ⁿ = 1/aⁿ). These rules let you simplify expressions like (2x³)² × x⁴ = 4x⁶ × x⁴ = 4x¹⁰. Every rule follows logically from the definition of exponents as repeated multiplication. Learn them deeply, not just as memorized formulas."
      },
      {
        title: "Exponential Growth",
        emoji: "📈",
        content: "An exponential function has the form f(x) = a × bˣ, where a is the starting amount and b is the growth factor. If b > 1, the function grows — the larger b is, the faster the growth. Population doubling, compound interest, and viral spread all follow exponential growth. The key feature: the rate of growth itself increases. A linear function adds the same amount each step. An exponential function multiplies by the same factor each step. That is why exponential growth eventually overwhelms any linear growth, no matter how large the linear rate."
      },
      {
        title: "Exponential Decay",
        emoji: "📉",
        content: "When b is between 0 and 1, the exponential function decreases — this is exponential decay. A substance with a half-life loses half its amount in each time period: f(t) = a × (0.5)ᵗ. Radioactive decay, cooling coffee, and depreciating car values follow this pattern. After one period, half remains. After two, a quarter. After three, an eighth. The amount never reaches zero — it gets infinitely close but never arrives. Decay is the mirror image of growth, governed by the same mathematical structure."
      },
      {
        title: "Exponential vs Linear",
        emoji: "⚡",
        content: "Linear functions change at a constant rate: add 5 each step and you get 5, 10, 15, 20. Exponential functions change at a constant ratio: multiply by 2 each step and you get 2, 4, 8, 16, 32, 64. At first, linear growth can seem faster — 5, 10, 15 vs 2, 4, 8. But exponential functions always catch up and then accelerate past. By step 10, the linear function is at 50 while the exponential is at 1,024. This is why understanding exponential growth matters for pandemics, technology, and investing. Remi respects the power of exponential change."
      }
    ],
    activity: {
      title: "Exponential Growth Experiment",
      instructions: "Start with one grain of rice (or one penny). Double it each day for 20 days — just on paper: 1, 2, 4, 8, 16... Record each day's amount. At the same time, track a linear increase of 100 per day: 100, 200, 300... On what day does the exponential overtake the linear? Graph both on the same axes. Then calculate: if you invested $100 at 10% annual growth (multiply by 1.10 each year), how much would you have after 5, 10, 20, and 30 years? Compare to linear growth of $10 per year. When does exponential pull dramatically ahead?"
    },
    quiz: [
      {
        question: "What does the product rule of exponents state?",
        answer: "aᵐ × aⁿ = aᵐ⁺ⁿ — when multiplying same bases, add the exponents",
        options: [
          "aᵐ × aⁿ = aᵐˣⁿ — multiply the exponents",
          "aᵐ × aⁿ = aᵐ⁺ⁿ — when multiplying same bases, add the exponents",
          "aᵐ × bⁿ = (ab)ᵐ⁺ⁿ — add exponents and multiply bases",
          "aᵐ × aⁿ = 2aᵐⁿ — double the base and multiply exponents"
        ]
      },
      {
        question: "What is a⁰ equal to (when a is not zero)?",
        answer: "1 — any nonzero number raised to the zero power equals 1",
        options: [
          "0 — anything times zero is zero",
          "a — the exponent disappears",
          "1 — any nonzero number raised to the zero power equals 1",
          "Undefined — you cannot raise a number to zero"
        ]
      },
      {
        question: "How does exponential growth differ from linear growth?",
        answer: "Exponential multiplies by a constant factor each step; linear adds a constant amount",
        options: [
          "Exponential growth is always faster from the start",
          "Linear growth involves multiplication while exponential uses addition",
          "Exponential multiplies by a constant factor each step; linear adds a constant amount",
          "They are the same thing described in different ways"
        ]
      },
      {
        question: "In f(x) = 500 × (0.8)ˣ, is the function growing or decaying?",
        answer: "Decaying — because the base (0.8) is between 0 and 1",
        options: [
          "Growing — because 500 is a large starting number",
          "Decaying — because the base (0.8) is between 0 and 1",
          "Neither — because 0.8 is close to 1",
          "Growing — because x can be any positive number"
        ]
      },
      {
        question: "Why does exponential growth eventually overwhelm linear growth?",
        answer: "Because the rate of change itself keeps increasing, while linear growth adds the same amount each time",
        options: [
          "Because exponential functions use larger numbers",
          "Because linear functions eventually stop growing",
          "Because the rate of change itself keeps increasing, while linear growth adds the same amount each time",
          "It does not — linear growth is always faster in the long run"
        ]
      }
    ],
    familyAdventure: "Take the Rice Doubling Challenge together. Place 1 grain of rice in square 1 of a checkerboard (or draw 20 squares on paper). Double the grains each square: 1, 2, 4, 8, 16... See how far you get with real rice before you run out. Most families run out before square 20. Calculate how much rice would be on square 64 (the last square of a checkerboard): 2⁶³ grains — more rice than exists on Earth. Discuss: where have you seen exponential growth in real life? Social media followers, compound interest, virus spread? Exponential thinking changes how you see the world.",
    badge: "Exponent Expert",
    nextLesson: "math-11-12-10"
  },

  // ── LESSON 10 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-10",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 10,
    title: "Radicals and Rational Exponents",
    duration: "15-20 min",
    hook: "The square root symbol has been around since the 1500s, but for centuries mathematicians treated roots and exponents as separate ideas. Then someone realized that √x is the same as x^(1/2) — and that single insight unified two major branches of algebra. Rational exponents let you write any root as a power, simplify complex expressions, and connect ideas that once seemed unrelated. Remi the Raccoon appreciates elegant connections, and this one is among the most elegant in mathematics.",
    bigIdea: "Radicals (roots) and rational exponents are two notations for the same operation — x^(1/n) = ⁿ√x — and understanding their equivalence lets you simplify, evaluate, and manipulate expressions with far greater flexibility.",
    sections: [
      {
        title: "Radicals Review",
        emoji: "√",
        content: "A radical extracts a root. √25 = 5 because 5² = 25. ³√8 = 2 because 2³ = 8. ⁴√81 = 3 because 3⁴ = 81. The number under the radical is the radicand, and the small number in the notch is the index (2 for square root, 3 for cube root, etc.). Square roots of non-perfect-squares are irrational: √2, √3, √5, and so on. You can simplify radicals by factoring: √50 = √(25 × 2) = 5√2. Always look for perfect square factors hiding inside the radicand."
      },
      {
        title: "The Radical-Exponent Connection",
        emoji: "🔗",
        content: "The key equivalence is: x^(1/n) = ⁿ√x. So x^(1/2) = √x, x^(1/3) = ³√x, and x^(1/4) = ⁴√x. More generally, x^(m/n) = ⁿ√(xᵐ) = (ⁿ√x)ᵐ. For example, 8^(2/3) = ³√(8²) = ³√64 = 4, or equivalently (³√8)² = 2² = 4. Both paths give the same answer. This equivalence means all exponent rules apply to radicals too. Remi uses whichever notation makes the calculation easier."
      },
      {
        title: "Simplifying with Rational Exponents",
        emoji: "🧹",
        content: "Rational exponents let you use exponent rules on expressions that contain roots. To multiply √x × ³√x, convert: x^(1/2) × x^(1/3) = x^(1/2 + 1/3) = x^(5/6). To simplify (x^(2/3))^(3/4), use the power rule: x^(2/3 × 3/4) = x^(1/2) = √x. Try doing these with radical notation alone — it is much harder. Rational exponents turn root problems into fraction arithmetic, which is often simpler and always more systematic."
      },
      {
        title: "When Radicals Cannot Be Simplified",
        emoji: "🚫",
        content: "Not every radical simplifies to a whole number. √7 is irrational and stays as √7 — that is its simplest form. But you can still work with it: √7 × √7 = 7, and 3√7 + 2√7 = 5√7 (combine like terms, just as with variables). You cannot add unlike radicals: √2 + √3 does not simplify. Think of radicals like variables — you can add 3x + 2x but not 3x + 2y. This analogy helps you navigate radical arithmetic without making common mistakes."
      }
    ],
    activity: {
      title: "Radical and Exponent Converter",
      instructions: "Convert between radical and rational exponent forms, then simplify. (1) Write √x³ as a rational exponent. (2) Write x^(3/4) as a radical. (3) Simplify: √72 (find perfect square factors). (4) Simplify: x^(1/3) × x^(2/3). (5) Evaluate: 27^(2/3). (6) Simplify: (x^(4/5))^(5/2). (7) Add: 3√5 + 7√5. (8) Explain why √2 + √3 cannot be combined. Show all work, and verify numerical answers with a calculator."
    },
    quiz: [
      {
        question: "What is x^(1/2) equivalent to?",
        answer: "√x — the square root of x",
        options: [
          "x ÷ 2",
          "2x",
          "√x — the square root of x",
          "x² — x squared"
        ]
      },
      {
        question: "What is 8^(2/3)?",
        answer: "4 — because ³√8 = 2, and 2² = 4",
        options: [
          "4 — because ³√8 = 2, and 2² = 4",
          "16 — because 8 × 2 = 16",
          "6 — because 8 × 2/3 = 16/3 ≈ 6",
          "512 — because 8³ = 512"
        ]
      },
      {
        question: "How do you simplify √50?",
        answer: "5√2 — because √50 = √(25 × 2) = √25 × √2 = 5√2",
        options: [
          "25 — because √50 rounds to 25",
          "5√2 — because √50 = √(25 × 2) = √25 × √2 = 5√2",
          "√50 cannot be simplified",
          "7.07 — because that is the decimal approximation"
        ]
      },
      {
        question: "What is x^(1/2) × x^(1/3)?",
        answer: "x^(5/6) — because 1/2 + 1/3 = 5/6",
        options: [
          "x^(1/6) — because 1/2 × 1/3 = 1/6",
          "x^(5/6) — because 1/2 + 1/3 = 5/6",
          "x^(2/5) — because you add numerators and denominators",
          "x — because the exponents cancel out"
        ]
      },
      {
        question: "Why can you add 3√5 + 2√5 but not √2 + √3?",
        answer: "Like radicals (same radicand) can be combined like like terms; unlike radicals cannot",
        options: [
          "Because 3 and 2 are consecutive numbers but 2 and 3 are different radicands",
          "Because √5 is rational and √2 and √3 are not",
          "Like radicals (same radicand) can be combined like like terms; unlike radicals cannot",
          "You actually can add √2 + √3 — it equals √5"
        ]
      }
    ],
    familyAdventure: "Play Root Detective. Each person writes five expressions — some in radical form and some in rational exponent form — on separate cards. Shuffle all cards together face down. Flip two at a time: if they are equivalent expressions (like √x³ and x^(3/2)), it is a match and you keep the pair. If not, flip them back. The person with the most pairs at the end wins. This memory-style game builds fluency in converting between the two notations, which is critical for advanced algebra and calculus.",
    badge: "Radical Ranger",
    nextLesson: "math-11-12-11"
  },

  // ── LESSON 11 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-11",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 11,
    title: "Geometry: Proofs, Congruence, and Similarity",
    duration: "15-20 min",
    hook: "How do you know — really know — that two triangles are the same shape? Not by measuring every side and angle (that takes forever), but by checking just three specific things. Congruence and similarity are the frameworks that let you make certain conclusions from limited information. And proofs are the logical chains that take you from what you know to what you can guarantee. Today you enter the world of geometric reasoning. Remi the Raccoon builds certainty one logical step at a time.",
    bigIdea: "Congruent figures are identical in shape and size, similar figures have the same shape but different sizes, and geometric proofs use logical reasoning to demonstrate that relationships are true — not just likely, but guaranteed.",
    sections: [
      {
        title: "Congruence",
        emoji: "🔲",
        content: "Two figures are congruent if they have the same shape and size — one is an exact copy of the other. For triangles, you do not need to check all six measurements (3 sides, 3 angles). The congruence shortcuts are: SSS (three pairs of equal sides), SAS (two sides and the included angle), ASA (two angles and the included side), and AAS (two angles and a non-included side). If any shortcut is satisfied, the triangles are guaranteed congruent. These shortcuts exist because of the rigid structure of triangles — once certain measurements are fixed, the rest are determined."
      },
      {
        title: "Similarity",
        emoji: "🔍",
        content: "Two figures are similar if they have the same shape but possibly different sizes. Their corresponding angles are equal and corresponding sides are proportional. For triangles, the similarity shortcuts are: AA (two pairs of equal angles — the third is automatically equal since angles sum to 180°), SSS similarity (all three pairs of sides are proportional), and SAS similarity (two sides proportional with the included angle equal). Similar triangles are everywhere: shadows create similar triangles with objects, maps are similar to real terrain, and scale models are similar to full-size structures."
      },
      {
        title: "Introduction to Proofs",
        emoji: "🔗",
        content: "A geometric proof is a logical argument that starts with given information and reaches a conclusion through a chain of justified steps. Each step must be supported by a definition, postulate, or previously proven theorem. For example: Given that AB = CD and BC = BC (reflexive property), you can prove AC = BD by adding equals to equals. Proofs are not about memorizing — they are about reasoning. Every step answers the question: why is this true? Remi approaches proofs like detective work — each clue builds toward an airtight conclusion."
      },
      {
        title: "Why Proofs Matter",
        emoji: "💡",
        content: "Proofs train your mind to think logically, construct arguments, and distinguish between something that seems true and something that is proven true. These skills transfer far beyond geometry — into science (building hypotheses), law (constructing arguments), programming (debugging logic), and everyday reasoning (evaluating claims). When someone says all swans are white, a proof-trained mind asks: have you checked every swan, or could there be a black one? Geometric proofs are where mathematical certainty begins."
      }
    ],
    activity: {
      title: "Congruence and Similarity Detective",
      instructions: "Draw two triangles that are congruent using the SAS shortcut: make two sides and the included angle identical. Measure the remaining sides and angles to confirm full congruence. Then draw two similar triangles using AA: make two angles the same but change the size. Measure all sides and verify they are proportional. Calculate the scale factor. Finally, write a simple two-column proof: Given that triangle ABC has angle A = angle D and angle B = angle E, prove that the triangles are similar by AA. List each statement and its justification."
    },
    quiz: [
      {
        question: "What does it mean for two triangles to be congruent?",
        answer: "They have the same shape and size — all corresponding sides and angles are equal",
        options: [
          "They have the same angles but different side lengths",
          "They have the same shape and size — all corresponding sides and angles are equal",
          "They share at least one side",
          "They can be placed inside each other"
        ]
      },
      {
        question: "Which is a valid triangle congruence shortcut?",
        answer: "SAS — two sides and the included angle are equal",
        options: [
          "SSA — two sides and a non-included angle are equal",
          "AAA — all three angles are equal",
          "SAS — two sides and the included angle are equal",
          "SS — two sides are equal"
        ]
      },
      {
        question: "What makes two figures similar?",
        answer: "Same shape but possibly different size — equal angles and proportional sides",
        options: [
          "They are the exact same figure placed in different locations",
          "Same shape but possibly different size — equal angles and proportional sides",
          "They share at least one angle",
          "They have the same perimeter"
        ]
      },
      {
        question: "Why is AA sufficient to prove triangle similarity?",
        answer: "Because if two angles match, the third must also match (angles sum to 180°), guaranteeing proportional sides",
        options: [
          "Because two angles automatically determine all three side lengths",
          "Because if two angles match, the third must also match (angles sum to 180°), guaranteeing proportional sides",
          "Because angle measurements are more precise than side measurements",
          "AA is actually not sufficient — you need all three angles"
        ]
      },
      {
        question: "What is the purpose of a geometric proof?",
        answer: "To demonstrate through logical reasoning that a statement is guaranteed true, not just likely",
        options: [
          "To memorize geometric formulas",
          "To draw accurate geometric figures",
          "To demonstrate through logical reasoning that a statement is guaranteed true, not just likely",
          "To calculate the measurements of unknown angles and sides"
        ]
      }
    ],
    familyAdventure: "Go on a Similarity Safari. Find pairs of similar shapes in your home and neighborhood: a window and a door (both rectangles — are they similar?), a full pizza and a slice-shaped wedge, a photo and a poster of the same image. For each pair, measure dimensions and check if the ratios are consistent. Calculate the scale factor for each pair. Discuss: are all squares similar to each other? (Yes!) Are all rectangles similar? (No!) What about circles? (Yes!) This builds intuition about when shape is preserved across different sizes.",
    badge: "Proof Pioneer",
    nextLesson: "math-11-12-12"
  },

  // ── LESSON 12 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-12",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 12,
    title: "Right Triangle Trigonometry",
    duration: "15-20 min",
    hook: "How do you find the height of a tree without climbing it? Measure your distance from the base, measure the angle to the top, and use trigonometry. Ancient astronomers used this technique to estimate the distance to the moon. Surveyors use it to map mountains. Engineers use it to design bridges. Trigonometry — the study of triangle relationships — turns angles into distances and distances into angles. Remi the Raccoon is about to learn the three ratios that unlock the geometry of the real world: sine, cosine, and tangent.",
    bigIdea: "In a right triangle, the three trigonometric ratios — sine (opposite/hypotenuse), cosine (adjacent/hypotenuse), and tangent (opposite/adjacent) — connect angles to side lengths, letting you calculate unknown measurements from limited information.",
    sections: [
      {
        title: "SOH-CAH-TOA",
        emoji: "📐",
        content: "The three basic trigonometric ratios are defined for an acute angle in a right triangle. Sine = Opposite / Hypotenuse (SOH). Cosine = Adjacent / Hypotenuse (CAH). Tangent = Opposite / Adjacent (TOA). The opposite side is across from the angle you are measuring. The adjacent side is next to the angle (not the hypotenuse). The hypotenuse is always the longest side, opposite the right angle. SOH-CAH-TOA is the memory tool that keeps these straight."
      },
      {
        title: "Finding Side Lengths",
        emoji: "📏",
        content: "If you know one angle and one side of a right triangle, you can find any other side. In a right triangle where one angle is 35° and the hypotenuse is 10: the opposite side = 10 × sin(35°) = 10 × 0.574 = 5.74. The adjacent side = 10 × cos(35°) = 10 × 0.819 = 8.19. Choose the ratio that connects what you know (the angle and one side) to what you want (the unknown side). A calculator gives you the sine, cosine, and tangent values for any angle."
      },
      {
        title: "Finding Angles",
        emoji: "🔄",
        content: "If you know two sides but not the angle, use the inverse trigonometric functions. If the opposite side is 4 and the hypotenuse is 10, then sin(θ) = 4/10 = 0.4. To find θ, use sin⁻¹(0.4) = 23.6°. The inverse functions (sin⁻¹, cos⁻¹, tan⁻¹) take a ratio and return an angle. On a calculator, these are often labeled arcsin, arccos, and arctan. This lets you work both directions: from angles to sides and from sides to angles."
      },
      {
        title: "Trigonometry in the Real World",
        emoji: "🌍",
        content: "Surveyors measure distances to unreachable points by measuring angles and using trig. Pilots calculate descent angles and runway approach paths. Architects calculate roof pitch and rafter lengths. Astronomers measure the distances to stars using parallax angles and trigonometry. Even your phone uses trigonometric calculations for GPS positioning. Every field that involves measuring things that are difficult to reach directly — heights, depths, distances across water or chasms — relies on trigonometry. Remi never climbs what he can calculate."
      }
    ],
    activity: {
      title: "Trig Height Calculator",
      instructions: "Measure the height of something tall without climbing it. Stand a known distance from a tall object (a tree, building, or flagpole). Use a protractor or phone inclinometer app to measure the angle from your eye level to the top. The height above your eye level = distance × tan(angle). Add your eye height to get the total height. Do this for three different objects. Then work backward: if a ladder is 12 feet long and leans against a wall at a 70° angle, calculate how high it reaches (12 × sin(70°)) and how far the base is from the wall (12 × cos(70°))."
    },
    quiz: [
      {
        question: "What does SOH-CAH-TOA stand for?",
        answer: "Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent",
        options: [
          "Sine = Over/Hypotenuse, Cosine = Across/Hypotenuse, Tangent = Over/Across",
          "Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent",
          "Sum of Hypotenuse, Cosine and Hypotenuse, Tangent on Angle",
          "It is just a nonsense word to remember triangle types"
        ]
      },
      {
        question: "In a right triangle with angle 40° and hypotenuse 15, how do you find the opposite side?",
        answer: "Opposite = 15 × sin(40°), because sine = opposite/hypotenuse",
        options: [
          "Opposite = 15 × cos(40°)",
          "Opposite = 15 × sin(40°), because sine = opposite/hypotenuse",
          "Opposite = 15 ÷ tan(40°)",
          "Opposite = 40 × sin(15°)"
        ]
      },
      {
        question: "What are inverse trig functions used for?",
        answer: "Finding an angle when you know two sides of a right triangle",
        options: [
          "Finding side lengths when you know all three angles",
          "Finding an angle when you know two sides of a right triangle",
          "Flipping the triangle upside down for a different perspective",
          "Calculating the area of the triangle"
        ]
      },
      {
        question: "Which side of a right triangle is the hypotenuse?",
        answer: "The longest side — always opposite the 90° angle",
        options: [
          "The shortest side — always next to the right angle",
          "The side you are measuring the angle from",
          "The longest side — always opposite the 90° angle",
          "It depends on which angle you choose"
        ]
      },
      {
        question: "How can trigonometry help you find the height of a tree?",
        answer: "Measure your distance from the base and the angle to the top, then use tangent to calculate the height",
        options: [
          "Measure the shadow length and divide by 2",
          "Use the Pythagorean Theorem with the trunk width",
          "Measure your distance from the base and the angle to the top, then use tangent to calculate the height",
          "Trigonometry only works with man-made structures, not trees"
        ]
      }
    ],
    familyAdventure: "Do a family Trig Challenge outside. Each person picks a tall object — a tree, a lamppost, a building. Using a tape measure for distance and a phone inclinometer or homemade protractor for angles, calculate the height of each object using tangent. Write down your calculations and compare. Then find the actual height if possible (look up the building height online, or use a long string for a tree). How close were your trigonometric calculations? Discuss sources of error. The most accurate calculator wins bragging rights as the family's Chief Trigonometer.",
    badge: "Trig Trailblazer",
    nextLesson: "math-11-12-13"
  },

  // ── LESSON 13 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-13",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 13,
    title: "Circles: Circumference, Area, and Arc Length",
    duration: "15-20 min",
    hook: "Every wheel, every pizza, every planet's orbit, every ripple on a pond — circles are the most common shape in nature. And they are all governed by one mysterious number: π. The ratio of every circle's circumference to its diameter is π, no matter how big or small the circle. Today you will master the geometry of circles: circumference, area, sectors, and arcs. Remi the Raccoon sees circles everywhere and calculates them all.",
    bigIdea: "The circumference of a circle is C = 2πr, the area is A = πr², and arc length and sector area are proportional parts of the whole — all built on the relationship between the radius and the constant π.",
    sections: [
      {
        title: "Circumference",
        emoji: "⭕",
        content: "Circumference is the distance around a circle. The formula is C = 2πr, where r is the radius, or equivalently C = πd, where d is the diameter. Since π ≈ 3.14159, a circle with radius 5 has circumference 2 × π × 5 ≈ 31.42. The relationship C = πd is the definition of π: it is the ratio of any circle's circumference to its diameter. This ratio is the same for every circle in the universe — from a coin to a planet's orbit."
      },
      {
        title: "Area",
        emoji: "🟣",
        content: "The area of a circle is A = πr². For a circle with radius 5: A = π × 25 ≈ 78.54 square units. Notice that area grows with the square of the radius: double the radius and the area quadruples. A circle with radius 10 has area π × 100 ≈ 314.16 — four times the area of the radius-5 circle. This quadratic relationship between radius and area shows up when comparing different pizza sizes, irrigation circles, and satellite coverage areas."
      },
      {
        title: "Arc Length and Sectors",
        emoji: "🍕",
        content: "An arc is a portion of the circumference, and a sector is a pizza-slice-shaped portion of the area. If the central angle is θ degrees, the arc length is (θ/360) × 2πr and the sector area is (θ/360) × πr². For a 90° sector of a circle with radius 8: arc length = (90/360) × 2π(8) = (1/4) × 16π = 4π ≈ 12.57. Sector area = (1/4) × π(64) = 16π ≈ 50.27. The fraction θ/360 tells you what portion of the full circle you are measuring."
      },
      {
        title: "Circles in Application",
        emoji: "🎯",
        content: "Pizza pricing shows circle math in action: a 14-inch pizza has about 153 square inches while a 10-inch has about 78.5 — the larger pizza has nearly twice the area for far less than twice the price. Sprinkler coverage is a circle: doubling the spray radius covers four times the lawn. Ferris wheel car paths are circles with specific arc lengths. Car tires rotate a distance equal to their circumference per revolution — tire circumference determines odometer accuracy. Remi knows that circle geometry is practical math you will use for life."
      }
    ],
    activity: {
      title: "Circle Measurement Lab",
      instructions: "Find three circular objects: a plate, a can, a clock face. For each: measure the diameter with a ruler, calculate the radius, then calculate circumference (C = πd) and area (A = πr²). Verify circumference by wrapping a string around the object and measuring the string. How close is your calculation to the actual measurement? Then calculate: if you eat 2 slices of a pizza cut into 8 pieces (each slice has a 45° angle) and the pizza has a 14-inch diameter, what is the arc length of crust you ate and the area of pizza you consumed?"
    },
    quiz: [
      {
        question: "What is the formula for the circumference of a circle?",
        answer: "C = 2πr or equivalently C = πd",
        options: [
          "C = πr²",
          "C = 2πr or equivalently C = πd",
          "C = 2r + 2π",
          "C = πr"
        ]
      },
      {
        question: "If you double the radius of a circle, what happens to the area?",
        answer: "It quadruples — because area depends on r², so doubling r multiplies area by 4",
        options: [
          "It doubles",
          "It quadruples — because area depends on r², so doubling r multiplies area by 4",
          "It increases by π",
          "It stays the same"
        ]
      },
      {
        question: "What fraction of a circle is a 90° sector?",
        answer: "One-quarter — because 90/360 = 1/4",
        options: [
          "One-half — because 90 is half of 180",
          "One-quarter — because 90/360 = 1/4",
          "One-third — because there are three other sectors",
          "90% — because the angle is 90 degrees"
        ]
      },
      {
        question: "What is π?",
        answer: "The ratio of any circle's circumference to its diameter — approximately 3.14159",
        options: [
          "Exactly 3.14 — a terminating decimal",
          "The area of a circle with radius 1",
          "The ratio of any circle's circumference to its diameter — approximately 3.14159",
          "A rational number that equals 22/7"
        ]
      },
      {
        question: "How do you calculate arc length for a central angle of θ degrees?",
        answer: "Arc length = (θ/360) × 2πr — the fraction of the full circumference",
        options: [
          "Arc length = θ × r",
          "Arc length = θ × π",
          "Arc length = (θ/360) × 2πr — the fraction of the full circumference",
          "Arc length = 2πr − θ"
        ]
      }
    ],
    familyAdventure: "Host a Pizza Math Night. Order or make two different sized pizzas. Before eating, measure each diameter and calculate the area of each pizza. Determine which is the better value (area per dollar). Cut one pizza into 8 slices and calculate the sector area and arc length of each slice. As everyone eats, keep a running total of total pizza area consumed per person. The person who eats the most area wins (they might not be the person who ate the most slices if the slices are different sizes). This is delicious math.",
    badge: "Circle Scholar",
    nextLesson: "math-11-12-14"
  },

  // ── LESSON 14 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-14",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 14,
    title: "Statistics: Analyzing Data Distributions",
    duration: "15-20 min",
    hook: "Two classes both average 80% on a test. But in Class A, everyone scored between 75 and 85. In Class B, scores ranged from 40 to 100. The average tells the same story, but the distributions tell completely different ones. Understanding how data is spread — not just its center — is what separates amateur data analysis from expert analysis. Today you go beyond mean and median into the shape, spread, and story of data. Remi the Raccoon reads the full distribution, not just the headline number.",
    bigIdea: "Analyzing a data distribution means examining its center (mean, median), spread (range, interquartile range, standard deviation), shape (symmetric, skewed), and outliers — because a single summary number never tells the whole story.",
    sections: [
      {
        title: "Shape of Distributions",
        emoji: "📊",
        content: "Data distributions have shapes. A symmetric distribution is balanced — the left half mirrors the right, like a bell curve. A right-skewed distribution has a long tail stretching right (a few very high values pull the tail), while a left-skewed distribution has a long tail stretching left. Income data is typically right-skewed: most people earn moderate amounts, but a few earn enormously more. Test scores are often approximately symmetric. The shape tells you which measure of center is most appropriate — mean works well for symmetric data, median works better for skewed data."
      },
      {
        title: "Measures of Spread",
        emoji: "📏",
        content: "Range (maximum minus minimum) gives the simplest measure of spread but is sensitive to outliers. The interquartile range (IQR) is more robust: it measures the spread of the middle 50% of data. Q1 is the median of the lower half, Q3 is the median of the upper half, and IQR = Q3 − Q1. Standard deviation measures the average distance of each data point from the mean. A small standard deviation means data clusters tightly around the mean. A large standard deviation means data is widely spread."
      },
      {
        title: "Box Plots and Five-Number Summary",
        emoji: "📦",
        content: "A box plot (box-and-whisker plot) displays the five-number summary: minimum, Q1, median, Q3, and maximum. The box spans from Q1 to Q3 (the middle 50%), a line inside marks the median, and whiskers extend to the minimum and maximum (or to a boundary, with outliers plotted as dots beyond). Box plots let you compare distributions side by side at a glance: which has a higher median? Which has more spread? Which has outliers? They compress a lot of information into a compact visual."
      },
      {
        title: "Outliers and Their Impact",
        emoji: "🔴",
        content: "An outlier is a data point significantly different from the rest. A common rule: a point is an outlier if it falls more than 1.5 × IQR below Q1 or above Q3. Outliers can be errors (a typo entered 1000 instead of 100) or real but unusual values (a CEO salary in an employee dataset). Outliers pull the mean toward them but do not affect the median much. When analyzing data, always check for outliers and decide: should they be included, investigated, or removed? Remi investigates outliers before drawing conclusions."
      }
    ],
    activity: {
      title: "Distribution Analysis Project",
      instructions: "Collect a dataset of at least 20 values — ideas: daily high temperatures for a month (from a weather site), scores from a game you play, or prices of items in an online store. Calculate the five-number summary (min, Q1, median, Q3, max), mean, range, IQR, and identify any outliers using the 1.5 × IQR rule. Draw a box plot. Describe the shape: is it symmetric, left-skewed, or right-skewed? Which is a better measure of center for your data — mean or median — and why? Write a paragraph summarizing what the distribution tells you."
    },
    quiz: [
      {
        question: "What does it mean for a distribution to be right-skewed?",
        answer: "The data has a long tail extending to the right — a few high values pull the distribution that way",
        options: [
          "Most data is on the right side of the graph",
          "The data has a long tail extending to the right — a few high values pull the distribution that way",
          "The mean is lower than the median",
          "The data forms a perfectly symmetric bell curve"
        ]
      },
      {
        question: "What is the interquartile range (IQR)?",
        answer: "Q3 minus Q1 — the range of the middle 50% of the data",
        options: [
          "The maximum minus the minimum",
          "The mean minus the median",
          "Q3 minus Q1 — the range of the middle 50% of the data",
          "The standard deviation times 2"
        ]
      },
      {
        question: "What does a box plot display?",
        answer: "The five-number summary: minimum, Q1, median, Q3, and maximum",
        options: [
          "The mean, median, and mode",
          "Every individual data point",
          "The five-number summary: minimum, Q1, median, Q3, and maximum",
          "The probability of each value occurring"
        ]
      },
      {
        question: "When is the median a better measure of center than the mean?",
        answer: "When the data is skewed or has outliers, because the median is not pulled by extreme values",
        options: [
          "When the data set is very large",
          "When all values are positive",
          "When the data is skewed or has outliers, because the median is not pulled by extreme values",
          "The mean is always better than the median"
        ]
      },
      {
        question: "How do you identify an outlier using the IQR method?",
        answer: "A point is an outlier if it is more than 1.5 × IQR below Q1 or above Q3",
        options: [
          "Any point more than 10 away from the mean",
          "The highest and lowest values are always outliers",
          "A point is an outlier if it is more than 1.5 × IQR below Q1 or above Q3",
          "Any point that is different from the mode"
        ]
      }
    ],
    familyAdventure: "Collect screen time data from every family member for the past week (most phones track this). Calculate each person's daily average, median, and range. Create a box plot for each person and put them side by side. Who has the most consistent screen time? Who has the most variation? Are there any outlier days (unusually high or low)? What caused them? Discuss as a family: does the mean or median better represent typical screen time for each person? This combines real family data with statistical analysis — and might spark interesting conversations about tech habits.",
    badge: "Distribution Detective",
    nextLesson: "math-11-12-15"
  },

  // ── LESSON 15 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-15",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 15,
    title: "Probability: Compound Events and Simulations",
    duration: "15-20 min",
    hook: "What are the chances of flipping heads three times in a row? What about drawing two aces from a deck? These are compound events — situations where you need to figure out the probability of multiple things happening together or in sequence. Simple probability handles one event. Compound probability handles the real world, where decisions stack, events chain, and outcomes depend on what happened before. Remi the Raccoon thinks in sequences, not isolated moments.",
    bigIdea: "Compound probability calculates the likelihood of multiple events occurring together — using multiplication for 'and' (both events happen) and addition for 'or' (either event happens) — while distinguishing between independent and dependent events.",
    sections: [
      {
        title: "Independent vs Dependent Events",
        emoji: "🔗",
        content: "Two events are independent if one does not affect the other's probability. Flipping a coin and rolling a die are independent — the coin result does not change the die probabilities. Drawing a card and not replacing it before drawing again creates dependent events — the first draw changes the probabilities for the second. Identifying whether events are independent or dependent is the critical first step, because the math differs. Remi always asks: does the first event change the conditions for the second?"
      },
      {
        title: "Multiplication Rule (AND)",
        emoji: "✖️",
        content: "For independent events, P(A and B) = P(A) × P(B). The probability of flipping heads AND rolling a 6 is (1/2) × (1/6) = 1/12. For dependent events, P(A and B) = P(A) × P(B given A). The probability of drawing two hearts in a row without replacement: P(first heart) = 13/52, then P(second heart given first was heart) = 12/51. So P(both hearts) = (13/52) × (12/51) = 156/2652 ≈ 0.059 or about 5.9%."
      },
      {
        title: "Addition Rule (OR)",
        emoji: "➕",
        content: "For mutually exclusive events (they cannot happen at the same time), P(A or B) = P(A) + P(B). The probability of rolling a 2 or a 5 on a die is 1/6 + 1/6 = 2/6 = 1/3. For overlapping events (they can happen simultaneously), P(A or B) = P(A) + P(B) − P(A and B). The probability of drawing a heart or a queen: P(heart) = 13/52, P(queen) = 4/52, P(queen of hearts) = 1/52. So P(heart or queen) = 13/52 + 4/52 − 1/52 = 16/52 ≈ 30.8%."
      },
      {
        title: "Simulations",
        emoji: "🎮",
        content: "When probability calculations are complex, simulations provide an alternative. Run the experiment many times (or simulate it with random number generators) and observe the results. If you want to know the probability of rolling at least one 6 in four rolls of a die, you could calculate it or you could roll four dice 100 times and count successes. With enough trials, the experimental result approaches the theoretical answer. Simulations are used in weather forecasting, financial modeling, medical research, and game design. They turn hard math into practical experiments."
      }
    ],
    activity: {
      title: "Compound Probability Experiments",
      instructions: "Run three compound probability experiments. (1) Flip two coins 30 times. Record how many times you get two heads. Compare to theoretical probability (1/4). (2) Roll two dice 36 times. Record how many times the sum is 7. Compare to theoretical (6/36 = 1/6). (3) From a deck of cards, draw two cards without replacement 20 times (shuffle between trials). Record how many times both are the same suit. Calculate the theoretical probability and compare. For each experiment, discuss: how close was your experimental result to the theoretical prediction? What would happen with more trials?"
    },
    quiz: [
      {
        question: "What makes two events independent?",
        answer: "One event does not affect the probability of the other",
        options: [
          "They happen at the same time",
          "One event does not affect the probability of the other",
          "They have the same probability",
          "They are mutually exclusive"
        ]
      },
      {
        question: "What is the probability of flipping heads twice in a row?",
        answer: "1/4 — because (1/2) × (1/2) = 1/4",
        options: [
          "1/2 — because each flip is 1/2",
          "1/4 — because (1/2) × (1/2) = 1/4",
          "1/3 — because there are three possible outcomes (HH, HT, TT)",
          "0 — because two heads in a row is very unlikely"
        ]
      },
      {
        question: "When using the addition rule, why do you subtract P(A and B) for overlapping events?",
        answer: "To avoid counting the overlap twice — items in both categories would be added once for A and once for B",
        options: [
          "To make the probability smaller",
          "Because overlapping events cancel each other out",
          "To avoid counting the overlap twice — items in both categories would be added once for A and once for B",
          "You do not subtract — the formula is always P(A) + P(B)"
        ]
      },
      {
        question: "Drawing cards without replacement makes the draws ___.",
        answer: "Dependent — because removing a card changes the probabilities for the next draw",
        options: [
          "Independent — because each draw is a separate event",
          "Dependent — because removing a card changes the probabilities for the next draw",
          "Impossible to calculate",
          "Mutually exclusive — because you cannot draw the same card twice"
        ]
      },
      {
        question: "What is the purpose of a probability simulation?",
        answer: "To estimate probabilities by running many trials when calculation is complex",
        options: [
          "To prove that theoretical probability is wrong",
          "To replace all mathematical probability calculations",
          "To estimate probabilities by running many trials when calculation is complex",
          "To make random events predictable"
        ]
      }
    ],
    familyAdventure: "Play the Compound Probability Card Game. Shuffle a deck of cards. Before each round, everyone predicts the probability of the draw. Round 1: draw one card — what is P(red)? Round 2: draw two cards without replacement — what is P(both black)? Round 3: draw one card — what is P(heart or face card)? Round 4: draw three cards — what is P(at least one ace)? Calculate the theoretical probability together, then do the draw. Play 10 rounds with different challenges. Keep score: one point for correct probability calculation, one bonus point if the predicted event actually occurs.",
    badge: "Compound Probability Pro",
    nextLesson: "math-11-12-16"
  },

  // ── LESSON 16 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-16",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 16,
    title: "Transformations: Translations, Rotations, and Reflections",
    duration: "15-20 min",
    hook: "Every animation you watch, every video game character that moves on screen, every architectural blueprint that gets mirrored — these all use geometric transformations. A transformation takes a shape and moves, flips, or turns it according to precise mathematical rules. Understanding transformations means understanding how shapes relate to each other in space and how movement can be described with math. Remi the Raccoon is about to learn the geometry of motion.",
    bigIdea: "Geometric transformations — translations (slides), reflections (flips), and rotations (turns) — move figures in the coordinate plane according to specific rules, and rigid transformations preserve shape and size while changing position or orientation.",
    sections: [
      {
        title: "Translations",
        emoji: "➡️",
        content: "A translation slides every point of a figure the same distance in the same direction. On a coordinate plane, translating a point (x, y) by h units right and k units up gives the new point (x + h, y + k). If you translate triangle with vertices (1, 2), (3, 4), (5, 2) right 3 and up 1, the new vertices are (4, 3), (6, 5), (8, 3). The shape does not change — it just moves. Translations are like picking up a figure and placing it somewhere else without rotating or flipping it."
      },
      {
        title: "Reflections",
        emoji: "🪞",
        content: "A reflection flips a figure across a line of reflection, creating a mirror image. Reflecting (x, y) across the y-axis gives (−x, y) — the x-coordinate flips sign. Reflecting across the x-axis gives (x, −y). Reflecting across the line y = x swaps the coordinates: (x, y) becomes (y, x). The reflected figure is congruent to the original but has opposite orientation — like your left hand and right hand. Text reflected across a vertical line becomes backward, which is why ambulances write their name in reverse."
      },
      {
        title: "Rotations",
        emoji: "🔄",
        content: "A rotation turns a figure around a fixed point (the center of rotation) by a specified angle. A 90° counterclockwise rotation around the origin transforms (x, y) to (−y, x). A 180° rotation gives (−x, −y). A 270° counterclockwise (or 90° clockwise) gives (y, −x). The shape stays congruent — same size, same shape — but its orientation changes. Clock hands, spinning wheels, and turning pages are all real-world rotations. The center of rotation stays fixed while everything else moves."
      },
      {
        title: "Combining Transformations",
        emoji: "🎮",
        content: "Transformations can be combined in sequence. Translate then reflect. Rotate then translate. The order matters — different sequences can produce different final positions. A glide reflection is a translation followed by a reflection, seen in footprint patterns. Computer graphics use transformation matrices to animate characters — every frame is a sequence of translations, rotations, and scaling. Understanding how transformations combine is the foundation of computer animation, robotics, and spatial reasoning."
      }
    ],
    activity: {
      title: "Transformation Art",
      instructions: "On graph paper, draw a simple shape (a triangle or arrow) with vertices you can identify. Perform each transformation and draw the result in a different color: (1) Translate right 5, up 3. (2) Reflect across the y-axis. (3) Rotate 90° counterclockwise around the origin. (4) Combine: translate right 4, then reflect across the x-axis. Label each transformed shape with the transformation used. Verify each new vertex using the coordinate rules. For a bonus, design a repeating pattern (like a wallpaper or tile pattern) using translations and reflections of a single shape."
    },
    quiz: [
      {
        question: "What happens to the point (3, 5) when translated right 2 and down 4?",
        answer: "(5, 1) — add 2 to x and subtract 4 from y",
        options: [
          "(1, 9) — subtract 2 from x and add 4 to y",
          "(5, 1) — add 2 to x and subtract 4 from y",
          "(5, 9) — add 2 to both coordinates",
          "(3, 5) — translations do not change coordinates"
        ]
      },
      {
        question: "What is the reflection of (4, −2) across the y-axis?",
        answer: "(−4, −2) — the x-coordinate changes sign",
        options: [
          "(4, 2) — the y-coordinate changes sign",
          "(−4, −2) — the x-coordinate changes sign",
          "(−4, 2) — both coordinates change sign",
          "(2, −4) — the coordinates swap"
        ]
      },
      {
        question: "What does a 180° rotation around the origin do to a point (x, y)?",
        answer: "It becomes (−x, −y) — both coordinates change sign",
        options: [
          "It becomes (y, x) — the coordinates swap",
          "It stays at (x, y) — 180° returns to start",
          "It becomes (−x, −y) — both coordinates change sign",
          "It becomes (−y, x) — only y changes sign and they swap"
        ]
      },
      {
        question: "Which transformation creates a mirror image?",
        answer: "Reflection — it flips the figure across a line, reversing orientation",
        options: [
          "Translation — it slides the figure to a mirror position",
          "Rotation — it turns the figure to face the opposite direction",
          "Reflection — it flips the figure across a line, reversing orientation",
          "All transformations create mirror images"
        ]
      },
      {
        question: "Why does the order of transformations matter?",
        answer: "Different sequences can produce different final positions — translate then reflect is not the same as reflect then translate",
        options: [
          "It does not matter — the result is always the same",
          "Because some transformations cancel others out",
          "Different sequences can produce different final positions — translate then reflect is not the same as reflect then translate",
          "Because you can only apply one transformation at a time"
        ]
      }
    ],
    familyAdventure: "Play Transformation Charades. Write transformation instructions on cards: translate 3 right and 2 up, reflect across the vertical line, rotate 90° clockwise. One person draws a simple shape on graph paper and performs the written transformation. Everyone else must identify which transformation was used just by looking at the original and result. Take turns being the transformer. Then go on a real-world hunt: find examples of each transformation type in your home or neighborhood — reflections in mirrors, rotations on hinges, translations of repeated tile patterns.",
    badge: "Transformation Tracker",
    nextLesson: "math-11-12-17"
  },

  // ── LESSON 17 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-17",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 17,
    title: "Introduction to Sequences and Series",
    duration: "15-20 min",
    hook: "The pattern 2, 4, 6, 8, 10 is a sequence — each number follows a rule. What is the 100th number? You could count all the way there, or you could use the rule (2n) to jump straight to 200. Sequences let you describe infinite patterns with a single formula, and series let you add up any number of terms instantly. These tools power loan calculations, population modeling, and even music theory. Remi the Raccoon loves patterns, and sequences are patterns made precise.",
    bigIdea: "A sequence is an ordered list of numbers following a rule, a series is the sum of a sequence's terms, and arithmetic and geometric sequences each have formulas that let you find any term or sum without calculating every step.",
    sections: [
      {
        title: "Arithmetic Sequences",
        emoji: "📊",
        content: "An arithmetic sequence adds the same number (the common difference, d) each time: 3, 7, 11, 15, 19... has d = 4. The nth term formula is aₙ = a₁ + (n − 1)d, where a₁ is the first term. For the sequence 3, 7, 11...: the 50th term is 3 + (49)(4) = 199. You jumped straight to term 50 without listing 49 terms. The formula turns a process into a shortcut. Linear functions and arithmetic sequences are closely related — both have constant rates of change."
      },
      {
        title: "Geometric Sequences",
        emoji: "📈",
        content: "A geometric sequence multiplies by the same number (the common ratio, r) each time: 2, 6, 18, 54... has r = 3. The nth term formula is aₙ = a₁ × r^(n−1). For the sequence 2, 6, 18...: the 10th term is 2 × 3⁹ = 2 × 19,683 = 39,366. Geometric sequences grow (or shrink) exponentially. They model compound interest, population growth, radioactive decay, and any situation where growth is proportional to current size."
      },
      {
        title: "Series: Adding It Up",
        emoji: "➕",
        content: "A series is the sum of terms in a sequence. The sum of the first n terms of an arithmetic sequence is Sₙ = n/2 × (a₁ + aₙ). For 1 + 2 + 3 + ... + 100: S = 100/2 × (1 + 100) = 50 × 101 = 5,050. Legend says the mathematician Gauss discovered this formula as a child when his teacher tried to keep the class busy adding numbers. For geometric series with |r| < 1, the sum converges to a finite number: S = a₁/(1 − r). This is how banks calculate the total of infinite recurring payments."
      },
      {
        title: "Sequences in the Real World",
        emoji: "🌍",
        content: "Arithmetic sequences appear in salary raises (add $2,000 each year), stacking patterns (add one more row each level), and linear depreciation. Geometric sequences appear in compound interest (multiply by 1.05 each year), drug metabolism (your body eliminates a fraction each hour), and fractal geometry. The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13...) where each term is the sum of the previous two appears in flower petals, pinecone spirals, and seashell curves. Remi knows that recognizing the pattern is the first step to controlling it."
      }
    ],
    activity: {
      title: "Sequence Explorer",
      instructions: "Identify whether each sequence is arithmetic, geometric, or neither, then find the requested term. (1) 5, 8, 11, 14... — find the 20th term. (2) 3, 12, 48, 192... — find the 8th term. (3) 1, 1, 2, 3, 5, 8... — find the 12th term (you will need to list these). (4) Calculate: what is the sum of the first 50 terms of the arithmetic sequence 2, 5, 8, 11...? (5) If you save $1 the first week, $2 the second, $4 the third (doubling each week), how much total have you saved after 10 weeks? Use the geometric series formula."
    },
    quiz: [
      {
        question: "What is the common difference in the sequence 10, 15, 20, 25...?",
        answer: "5 — because each term is 5 more than the previous",
        options: [
          "10 — because the first term is 10",
          "5 — because each term is 5 more than the previous",
          "15 — because the second term is 15",
          "2.5 — because 25 ÷ 10 = 2.5"
        ]
      },
      {
        question: "What is the 100th term of the arithmetic sequence 1, 4, 7, 10...?",
        answer: "298 — because a₁₀₀ = 1 + (99)(3) = 298",
        options: [
          "300 — because 100 × 3 = 300",
          "298 — because a₁₀₀ = 1 + (99)(3) = 298",
          "301 — because 1 + (100)(3) = 301",
          "297 — because 99 × 3 = 297"
        ]
      },
      {
        question: "What type of sequence is 5, 15, 45, 135...?",
        answer: "Geometric — each term is multiplied by 3",
        options: [
          "Arithmetic — each term increases by a fixed amount",
          "Geometric — each term is multiplied by 3",
          "Fibonacci — each term is the sum of the two before it",
          "None of the above"
        ]
      },
      {
        question: "What is the sum of the first 100 positive integers (1 + 2 + 3 + ... + 100)?",
        answer: "5,050 — using the formula S = n/2 × (first + last) = 50 × 101",
        options: [
          "10,000 — because 100 × 100 = 10,000",
          "5,000 — because 100 × 50 = 5,000",
          "5,050 — using the formula S = n/2 × (first + last) = 50 × 101",
          "100 — because the average of 1 and 100 is about 50"
        ]
      },
      {
        question: "Why do geometric sequences model compound interest?",
        answer: "Because interest is calculated as a percentage of the current balance — each period multiplies by the same factor",
        options: [
          "Because interest adds the same dollar amount each period",
          "Because interest is calculated as a percentage of the current balance — each period multiplies by the same factor",
          "Because banks prefer geometric formulas over arithmetic ones",
          "They do not — compound interest uses arithmetic sequences"
        ]
      }
    ],
    familyAdventure: "Play the Sequence Guessing Game. One person writes a sequence of 4-5 numbers and the rest of the family tries to identify the pattern and predict the next three terms. Start simple (arithmetic and geometric) and get creative: try square numbers (1, 4, 9, 16...), triangular numbers (1, 3, 6, 10...), or powers of 2. Then tackle a real problem together: if your family saves $10 the first month, $20 the second, $30 the third (arithmetic), or $10, $15, $22.50 (geometric with r = 1.5), how much total savings after 12 months? Calculate both and compare. Which savings plan wins?",
    badge: "Sequence Seeker",
    nextLesson: "math-11-12-18"
  },

  // ── LESSON 18 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-18",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 18,
    title: "Introduction to Matrices",
    duration: "15-20 min",
    hook: "Every time Netflix recommends a show, it is using matrices. Every time a video game renders a 3D character, matrices are rotating and scaling the shapes. Every time Google ranks search results, a matrix is organizing millions of connections. A matrix is simply a rectangular grid of numbers — but that simple structure powers some of the most sophisticated technology on the planet. Remi the Raccoon is about to learn the math behind modern computing.",
    bigIdea: "A matrix is a rectangular array of numbers organized in rows and columns, and basic matrix operations — addition, scalar multiplication, and matrix multiplication — are the computational backbone of computer graphics, data science, and machine learning.",
    sections: [
      {
        title: "What Is a Matrix?",
        emoji: "🔲",
        content: "A matrix is a rectangular arrangement of numbers in rows and columns. A 2×3 matrix has 2 rows and 3 columns. Each number is called an element, identified by its row and column position: element a₁₂ is in row 1, column 2. Matrices organize data compactly: a store's inventory across 3 locations for 5 products is a 5×3 matrix. A student's grades in 4 subjects across 3 semesters is a 4×3 matrix. The structure makes patterns visible and calculations systematic."
      },
      {
        title: "Matrix Addition and Scalar Multiplication",
        emoji: "➕",
        content: "Matrices of the same dimensions can be added by adding corresponding elements. If matrix A has element 3 in row 1, column 1, and matrix B has 5 in the same position, the sum matrix has 8 there. Scalar multiplication means multiplying every element by a single number: 2 × [1, 3; 2, 4] = [2, 6; 4, 8]. These operations follow the same intuitive rules as regular arithmetic. They are useful for combining datasets, adjusting values uniformly, or averaging multiple data tables."
      },
      {
        title: "Matrix Multiplication",
        emoji: "✖️",
        content: "Matrix multiplication is more complex. To multiply matrix A (m×n) by matrix B (n×p), each element of the result is the dot product of a row from A and a column from B. For [1, 2; 3, 4] × [5, 6; 7, 8]: element (1,1) = 1×5 + 2×7 = 19, element (1,2) = 1×6 + 2×8 = 22, element (2,1) = 3×5 + 4×7 = 43, element (2,2) = 3×6 + 4×8 = 50. Result: [19, 22; 43, 50]. The inner dimensions must match (n), and order matters — AB usually does not equal BA."
      },
      {
        title: "Matrices in Technology",
        emoji: "💻",
        content: "Computer graphics use transformation matrices to rotate, scale, and translate every pixel of every image you see on screen. Machine learning uses matrices to store and process training data — neural networks are essentially layers of matrix multiplications. Google's original PageRank algorithm used a massive matrix representing the entire web's link structure. Spreadsheets are matrices. Databases are matrices. Even the image on your screen is a matrix of pixel values. Learning matrices now means learning the language of modern technology."
      }
    ],
    activity: {
      title: "Matrix Operations Practice",
      instructions: "Complete these matrix operations by hand. (1) Add: [3, 1; 2, 5] + [1, 4; 3, 2]. (2) Scalar multiply: 3 × [2, −1; 0, 4]. (3) Multiply: [1, 2; 3, 4] × [2, 0; 1, 5]. (4) Create a matrix that represents your weekly schedule: rows are days (Mon-Fri) and columns are time blocks (morning, afternoon, evening). Fill in with numbers representing hours of different activities. (5) If you had two weeks of schedule data as two matrices, what operation would you use to find the combined total? What about the average?"
    },
    quiz: [
      {
        question: "What is a 3×2 matrix?",
        answer: "A rectangular array with 3 rows and 2 columns",
        options: [
          "A matrix with 3 elements and 2 operations",
          "A rectangular array with 3 rows and 2 columns",
          "A matrix with 3 columns and 2 rows",
          "A square matrix with 6 elements"
        ]
      },
      {
        question: "How do you add two matrices?",
        answer: "Add corresponding elements — the matrices must have the same dimensions",
        options: [
          "Multiply each row of one by each column of the other",
          "Add corresponding elements — the matrices must have the same dimensions",
          "Place one matrix next to the other",
          "Add all elements together into a single number"
        ]
      },
      {
        question: "Can you multiply a 2×3 matrix by a 3×4 matrix?",
        answer: "Yes — the inner dimensions match (3), and the result is a 2×4 matrix",
        options: [
          "No — the matrices must be the same size",
          "Yes — the inner dimensions match (3), and the result is a 2×4 matrix",
          "Yes — and the result is a 3×3 matrix",
          "Only if all elements are positive"
        ]
      },
      {
        question: "Is matrix multiplication commutative (does AB = BA)?",
        answer: "No — in general AB does not equal BA, and sometimes BA is not even defined",
        options: [
          "Yes — just like regular multiplication",
          "No — in general AB does not equal BA, and sometimes BA is not even defined",
          "Only when both matrices are square",
          "Only when the matrices are identical"
        ]
      },
      {
        question: "Where are matrices used in modern technology?",
        answer: "Computer graphics, machine learning, search engines, image processing, and data science",
        options: [
          "Only in pure mathematics with no practical applications",
          "Only in spreadsheet software",
          "Computer graphics, machine learning, search engines, image processing, and data science",
          "Only in government and military systems"
        ]
      }
    ],
    familyAdventure: "Create a Family Data Matrix. Choose 4-5 categories (hours of sleep, minutes of exercise, glasses of water, pages read, minutes of screen time) and track them for each family member for 3 days. Organize the data into matrices — one matrix per person, with rows as days and columns as categories. Then add the matrices to find family totals, and use scalar multiplication (divide by the number of family members) to find averages. Discuss: which category has the most variation between family members? Which is most consistent? This is real data science using real matrices.",
    badge: "Matrix Maven",
    nextLesson: "math-11-12-19"
  },

  // ── LESSON 19 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-19",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 19,
    title: "Financial Mathematics: Compound Interest, Loans, and Investing",
    duration: "15-20 min",
    hook: "If you invest $1,000 at 8% annual return and never add another dollar, in 30 years you will have over $10,000. If you start at age 12 instead of age 22, that same $1,000 becomes over $21,000 — more than double — because of 10 extra years of compound growth. The difference between understanding financial math and not understanding it can be worth hundreds of thousands of dollars over a lifetime. This is the most practically valuable math lesson you will ever learn. Remi the Raccoon invests early and understands every calculation.",
    bigIdea: "Compound interest grows money exponentially because interest earns interest — the formula A = P(1 + r/n)^(nt) calculates future value, and understanding it is the foundation of smart saving, investing, and borrowing decisions.",
    sections: [
      {
        title: "Simple vs Compound Interest",
        emoji: "💰",
        content: "Simple interest is calculated only on the original principal: I = Prt. You learned this earlier. Compound interest is calculated on the principal plus previously earned interest — interest on interest. After year 1, $1,000 at 5% gives $1,050. In year 2, you earn 5% on $1,050 (not just $1,000), giving $1,102.50. The difference seems small at first but grows dramatically over time. After 30 years: simple interest gives $2,500 while compound interest gives $4,322. That extra $1,822 came purely from interest earning interest."
      },
      {
        title: "The Compound Interest Formula",
        emoji: "📐",
        content: "The formula A = P(1 + r/n)^(nt) calculates the future value of an investment. P = principal (starting amount), r = annual interest rate as a decimal, n = number of times interest compounds per year, t = time in years, A = final amount. For $5,000 invested at 6% compounded monthly for 10 years: A = 5,000(1 + 0.06/12)^(12×10) = 5,000(1.005)^120 = 5,000 × 1.8194 = $9,097. Your money nearly doubled without you adding a penny."
      },
      {
        title: "The Rule of 72",
        emoji: "⏱️",
        content: "The Rule of 72 is a quick estimation tool: divide 72 by the interest rate to find approximately how many years it takes for money to double. At 6% interest: 72 ÷ 6 = 12 years to double. At 8%: 72 ÷ 8 = 9 years. At 3%: 72 ÷ 3 = 24 years. This rule works in reverse too — if prices increase at 3% inflation per year, the cost of living doubles in about 24 years. The Rule of 72 gives you instant financial intuition without needing a calculator."
      },
      {
        title: "Loans and the Cost of Borrowing",
        emoji: "🏦",
        content: "Compound interest works against you when you borrow. A $10,000 student loan at 6% for 10 years costs about $13,322 total — you pay $3,322 in interest. A $200,000 mortgage at 4% for 30 years costs about $343,739 total — you pay $143,739 in interest, more than half the original loan. Credit cards are worse: 20% interest compounded monthly turns a $1,000 balance into $1,219 in just one year if unpaid. Understanding these numbers is the difference between making debt work for you (low-interest investments) and having debt control you (high-interest consumer debt). Remi borrows carefully and invests strategically."
      }
    ],
    activity: {
      title: "Financial Future Calculator",
      instructions: "Calculate these scenarios using A = P(1 + r/n)^(nt). (1) You invest $500 at 7% compounded annually for 20 years. What is A? (2) You invest $500 at 7% compounded monthly for 20 years. How much more do you earn from monthly vs annual compounding? (3) Use the Rule of 72: how long to double your money at 4%? At 9%? At 12%? (4) You put $2,000 on a credit card at 18% interest compounded monthly and make no payments for 2 years. How much do you owe? (5) Compare: investing $1,000 at age 12 vs age 22, both at 8% until age 62. Who has more, and by how much?"
    },
    quiz: [
      {
        question: "What is the key difference between simple and compound interest?",
        answer: "Compound interest earns interest on previously earned interest; simple interest only earns on the original principal",
        options: [
          "Compound interest uses a higher rate",
          "Simple interest compounds more frequently",
          "Compound interest earns interest on previously earned interest; simple interest only earns on the original principal",
          "There is no difference — they are two names for the same thing"
        ]
      },
      {
        question: "Using the Rule of 72, how long does it take to double money at 8% interest?",
        answer: "About 9 years — because 72 ÷ 8 = 9",
        options: [
          "About 8 years — because the rate is 8%",
          "About 9 years — because 72 ÷ 8 = 9",
          "About 72 years — because the rule says 72",
          "About 12 years — because 8 × 12 = 96"
        ]
      },
      {
        question: "In the formula A = P(1 + r/n)^(nt), what does n represent?",
        answer: "The number of times interest compounds per year",
        options: [
          "The number of years",
          "The number of dollars invested",
          "The number of times interest compounds per year",
          "The total number of interest payments"
        ]
      },
      {
        question: "Why is starting to invest early so powerful?",
        answer: "Because compound interest has more time to work — each year of growth builds on all previous years",
        options: [
          "Because young people get higher interest rates",
          "Because inflation is lower for younger investors",
          "Because compound interest has more time to work — each year of growth builds on all previous years",
          "Because banks offer special accounts for young people"
        ]
      },
      {
        question: "A $200,000 mortgage at 4% for 30 years costs about $343,739 total. How much of that is interest?",
        answer: "About $143,739 — the total minus the original loan amount",
        options: [
          "About $8,000 — which is 4% of $200,000",
          "About $40,000 — which is 4% times 10 years",
          "About $143,739 — the total minus the original loan amount",
          "About $200,000 — you pay back double"
        ]
      }
    ],
    familyAdventure: "Hold a Family Investment Challenge on paper. Give each family member a hypothetical $10,000 to invest at different rates and compounding frequencies. Person 1: 5% compounded annually. Person 2: 4.5% compounded monthly. Person 3: 6% compounded annually but starting 5 years later. Calculate the value after 10, 20, and 30 years for each scenario. Who wins at each milestone? Discuss the trade-offs: does a slightly higher rate beat more frequent compounding? How much does a 5-year head start matter? Use these calculations to have a real conversation about saving for the future.",
    badge: "Financial Mathematician",
    nextLesson: "math-11-12-20"
  },

  // ── LESSON 20 ───────────────────────────────────────────────────────────────
  {
    id: "math-11-12-20",
    subject: "Mathematics",
    ageGroup: "11-12",
    band: "Voyagers",
    guide: "Remi",
    guideAnimal: "Raccoon",
    lessonNumber: 20,
    title: "Mathematical Modeling: Using Math to Solve Real Problems",
    duration: "15-20 min",
    hook: "Climate scientists model global temperature. Epidemiologists model disease spread. City planners model traffic flow. Engineers model bridge stress. In every case, mathematics turns a real-world problem into equations, solves those equations, and turns the answers back into real-world decisions. Mathematical modeling is the ultimate application of everything you have learned — it is math with a purpose, aimed at understanding and improving the world. Remi the Raccoon builds models because models build understanding.",
    bigIdea: "Mathematical modeling is the process of translating real-world problems into mathematical language, solving the mathematical problem, interpreting the solution in context, and validating whether the model accurately represents reality.",
    sections: [
      {
        title: "What Is a Mathematical Model?",
        emoji: "🏗️",
        content: "A mathematical model is a simplified representation of a real situation using equations, graphs, tables, or algorithms. It captures the essential features of a problem while ignoring unnecessary complexity. A model of a ball's trajectory might include gravity and initial velocity but ignore wind resistance. A model of population growth might use exponential functions but ignore seasonal variations. The art of modeling is knowing what to include and what to leave out. A perfect model would be as complex as reality itself — and therefore useless."
      },
      {
        title: "The Modeling Process",
        emoji: "🔄",
        content: "Mathematical modeling follows a cycle. Step 1: Identify the real-world problem and what you want to predict or optimize. Step 2: Make assumptions and choose variables — decide what matters and what to ignore. Step 3: Build the mathematical model — write equations or create algorithms. Step 4: Solve the mathematical problem. Step 5: Interpret the solution in the real-world context. Step 6: Validate — does the model's prediction match actual data? Step 7: Refine — adjust assumptions and improve the model. This cycle repeats until the model is useful enough for its purpose."
      },
      {
        title: "Types of Models You Already Know",
        emoji: "📚",
        content: "You have been building models throughout this course without always calling them that. A linear function modeling cost per item is a model. A quadratic function modeling projectile height is a model. A compound interest formula modeling investment growth is a model. A probability calculation predicting outcomes is a model. Statistical analysis describing data patterns is a model. Every time you translated a word problem into an equation, you built a model. Now you are learning to do it consciously and systematically."
      },
      {
        title: "Modeling Responsibly",
        emoji: "⚠️",
        content: "Models are powerful but imperfect. Every model has assumptions, and if those assumptions are wrong, the predictions will be wrong. A model that works in one context may fail in another. The phrase all models are wrong, but some are useful (attributed to statistician George Box) captures this perfectly. Responsible modeling means stating your assumptions clearly, testing your model against real data, acknowledging its limitations, and never treating a model's output as absolute truth. Remi uses models as guides — not as guarantees — and always checks them against reality."
      }
    ],
    activity: {
      title: "Build Your Own Model",
      instructions: "Choose a real problem you care about and build a mathematical model. Ideas: How much water does your household use per month? (Track usage, find a pattern, build a function, predict next month.) How many hours of study produce what grade? (Use data from your own experience, plot it, fit a function.) If your city's population grows at a certain rate, when will it double? (Find the current population and growth rate, use an exponential model.) For your chosen problem: state the question, list your assumptions, choose your variables, write the equation, solve it, interpret the answer, and describe how you would validate it with real data. Present your model to your family."
    },
    quiz: [
      {
        question: "What is a mathematical model?",
        answer: "A simplified representation of a real situation using mathematical language",
        options: [
          "A physical replica of a building or object",
          "A simplified representation of a real situation using mathematical language",
          "A perfect copy of reality expressed in numbers",
          "A graph that shows all possible outcomes"
        ]
      },
      {
        question: "Why do models make simplifying assumptions?",
        answer: "Because including every real-world variable would make the model too complex to be useful",
        options: [
          "Because mathematicians are too lazy to include everything",
          "Because real data is unreliable",
          "Because including every real-world variable would make the model too complex to be useful",
          "Because assumptions make the model perfectly accurate"
        ]
      },
      {
        question: "What does 'validate a model' mean?",
        answer: "Test whether the model's predictions match actual real-world data",
        options: [
          "Prove that the math in the model is correct",
          "Get a teacher to approve the model",
          "Test whether the model's predictions match actual real-world data",
          "Make sure the model uses advanced mathematics"
        ]
      },
      {
        question: "What does the quote 'all models are wrong, but some are useful' mean?",
        answer: "No model perfectly represents reality, but models can still provide valuable insights and predictions",
        options: [
          "Mathematical modeling is a waste of time",
          "Only correct models should ever be used",
          "No model perfectly represents reality, but models can still provide valuable insights and predictions",
          "Models become correct after enough refinement"
        ]
      },
      {
        question: "Which of these is NOT a step in the mathematical modeling process?",
        answer: "Memorizing all possible formulas before starting",
        options: [
          "Identify the problem and make assumptions",
          "Build equations and solve the math",
          "Memorizing all possible formulas before starting",
          "Validate the model against real data and refine it"
        ]
      }
    ],
    familyAdventure: "Take on a Family Modeling Challenge. Pick a real question your family has been wondering about: How much will our next road trip cost? How long until we save enough for a goal? What time should we leave to arrive on time given traffic? Build a model together. Identify the variables, make assumptions, write the math, and calculate an answer. Then compare your model's prediction to reality when the event happens. Was your model close? What assumptions were off? This is how scientists, engineers, and business leaders make decisions — and now your family can too. Celebrate completing the entire Voyager math journey together.",
    badge: "Master Modeler",
    nextLesson: null
  },

];

export default mathVoyagers;

