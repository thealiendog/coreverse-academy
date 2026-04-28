// ============================================================
// COREVERSE ACADEMY — MATHEMATICS · LITTLE STARS (Ages 3-5)
// 20 Lessons · Standards: Common Core State Standards (CCSS)
// Guide: Remi the Raccoon
// File: math_littlestars.js · Export: mathLittleStars
// ============================================================

export const mathLittleStars = [

  { id: "math-3-5-01", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 1, title: "Counting 1–10: How Many Are There?", duration: "10-15 min",
    hook: "One apple, two shoes, three crayons, four fingers, five toes — numbers are everywhere! Counting is the very first math skill, and it unlocks everything else. When you can count, you can tell how many cookies you have, how many friends are at the park, and how many stars you can see. Remi the Raccoon counts everything — acorns, berries, fish in the stream. Let's count together!",
    bigIdea: "Counting means assigning one number to each object in order (1, 2, 3...) — the last number you say tells you how many there are, and this one-to-one correspondence is the foundation of all mathematics.",
    sections: [
      { title: "Counting with Meaning", emoji: "🔢", content: "When you count, you point to each object and say one number: one, two, three, four, five. Each object gets exactly one number — no skipping, no repeating. The last number you say is the total. If you point to five blocks and say five, that means there ARE five blocks. This connection between the number and the quantity is the most important idea in counting." },
      { title: "Numbers Have Order", emoji: "📏", content: "Numbers always come in the same order: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. This order never changes. Three always comes after two and before four. Knowing the order helps you count without mistakes. Practice saying the numbers in order until it feels automatic — like singing a song you know by heart." },
      { title: "Counting Different Things", emoji: "🧸", content: "You can count anything: toys, steps, claps, jumps, bites of food, fingers, people in a room. The objects do not have to look the same — you can count a mix of things too (how many things are on the table?). What matters is pointing to each one and saying a number. Remi counts his acorn collection every night to make sure none are missing." },
      { title: "How Many?", emoji: "❓", content: "The question how many is asking you to count. How many apples? Count them: 1, 2, 3 — three apples! How many fingers on one hand? Count them: 1, 2, 3, 4, 5 — five fingers! After counting, you know the amount. That is the power of counting — it turns a group of things into a number you can use, compare, and remember." }
    ],
    activity: { title: "Count Everything Walk", instructions: "Go on a counting walk around your home or neighborhood. Count: how many doors in your home? How many windows in one room? How many shoes by the front door? How many trees on your street? How many steps from your bedroom to the kitchen? Write down (or draw) each number. Try to count at least 10 different things. The world is full of things to count — once you start, you cannot stop!" },
    quiz: [
      { question: "When you count objects, how many numbers does each object get?", answer: "Exactly one — you point to each object and say one number, no skipping or repeating", options: ["As many as you want", "Exactly one — you point to each object and say one number, no skipping or repeating", "Two numbers each", "Numbers are not needed for counting"] },
      { question: "What does the last number you say when counting tell you?", answer: "How many objects there are in total", options: ["Which object is biggest", "How many objects there are in total", "The name of the last object", "Nothing important"] },
      { question: "What number comes after 7?", answer: "8", options: ["6", "8", "9", "5"] },
      { question: "If you count 4 crayons, how many crayons are there?", answer: "4 — the last number you counted is the total", options: ["More than 4", "4 — the last number you counted is the total", "Less than 4", "You cannot tell"] },
      { question: "Can you count things that are different from each other?", answer: "Yes — you can count any mix of objects by pointing to each one and saying a number", options: ["No — all objects must look the same", "Yes — you can count any mix of objects by pointing to each one and saying a number", "Only if they are the same color", "Only toys can be counted"] }
    ],
    familyAdventure: "Play the Counting Game at dinner. Someone says a number between 1 and 10, and everyone has to find that many of something at the table — 3 forks, 5 peas, 7 bites of bread. Take turns calling numbers. Then count together: how many people at the table? How many plates? How many total pieces of silverware? Counting becomes second nature when you do it playfully every day.",
    badge: "Counting Star", nextLesson: "math-3-5-02",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Remi. Today we learn to count to TEN!' },
      { type: 'story', image: '/game-assets/math/remi-treasure-pile.png', guideText: 'I love finding treasures in the forest! Stars, acorns, little shiny things. I count every single one!' },
      { type: 'count-array', count: 3, image: '/game-assets/math/star-single.png', interactive: true, instruction: 'Tap each star to count them!', guideText: 'One, two, three! Tap them with me!' },
      { type: 'teach', image: '/game-assets/math/numeral-3.png', guideText: 'Three! Every time you count, you find out HOW MANY.' },
      { type: 'count-array', count: 5, image: '/game-assets/math/star-single.png', interactive: true, instruction: 'Now count five stars!', guideText: 'Five is two more than three! Let us count!' },
      { type: 'teach', image: '/game-assets/math/numeral-5.png', guideText: 'Five! You are a counting star, {name}.' },
      { type: 'count-array', count: 10, image: '/game-assets/math/star-single.png', interactive: true, instruction: 'Can you count to ten?', guideText: 'Ten is a big number! Tap each star!' },
      { type: 'family', guideText: 'Tonight, count something together — stairs, fingers, stars outside the window. See how high you can go!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Counting Star', guideText: 'You counted to ten, {name}!' }
    ]
  },

  { id: "math-3-5-02", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 2, title: "Counting 1–20 and Beyond", duration: "10-15 min",
    hook: "You can count to 10 — amazing! But numbers do not stop at 10. After 10 comes 11, 12, 13, all the way to 20 and beyond. The numbers keep going forever! Today you will stretch your counting muscles past 10 and discover that the teens (11-19) follow a pattern. Remi the Raccoon has more than 10 acorns in his collection, so he had to learn to count higher too.",
    bigIdea: "Numbers continue past 10 in a predictable pattern — the teen numbers (11-19) represent ten plus additional ones, and understanding this pattern prepares you for counting to 100 and beyond.",
    sections: [
      { title: "After 10", emoji: "1️⃣", content: "After 10 comes a new group of numbers called the teens: 11, 12, 13, 14, 15, 16, 17, 18, 19. Then comes 20! The teens can be tricky because their names do not always follow the pattern perfectly (eleven and twelve are unique words), but thirteen through nineteen all end in teen. After 20, the pattern becomes much more regular." },
      { title: "The Pattern", emoji: "🔄", content: "The teen numbers are really ten plus more: 11 is ten and one more. 12 is ten and two more. 13 is ten and three more. If you can count to 9, you already know the second part of every teen number. This pattern — a group of ten plus extra ones — is the foundation of our entire number system." },
      { title: "Counting Higher", emoji: "📈", content: "After 20, counting follows a clear pattern: twenty-one, twenty-two, twenty-three... all the way to twenty-nine, then thirty. Each group of ten has a name: thirty, forty, fifty, sixty, seventy, eighty, ninety. Then comes one hundred! You do not need to memorize all these at once — just know that the pattern keeps repeating." },
      { title: "Practice Makes Perfect", emoji: "⭐", content: "Counting higher takes practice. Count objects around the house — you might have more than 10 books, more than 10 blocks, or more than 10 steps. Count as high as you can. Each time you practice, you will get a little further. Remi says: every big number is just a bunch of small numbers stacked together." }
    ],
    activity: { title: "Number Line to 20", instructions: "Draw a number line from 1 to 20 on a long piece of paper (use the back of wrapping paper or tape pages together). Write each number and draw that many dots below it. Then practice: point to each number and say it. Can you go from 1 to 20 without stopping? Try counting backward from 20 to 1 — that is harder! Then find 20 small objects (blocks, coins, crackers) and count them all." },
    quiz: [
      { question: "What number comes after 10?", answer: "11", options: ["20", "11", "9", "100"] },
      { question: "What does the number 15 mean?", answer: "Ten and five more", options: ["One and five", "Ten and five more", "Fifty-one", "Five tens"] },
      { question: "What number comes after 19?", answer: "20", options: ["100", "20", "18", "29"] },
      { question: "Do numbers ever stop?", answer: "No — numbers go on forever; you can always add one more", options: ["Yes — they stop at 100", "No — numbers go on forever; you can always add one more", "They stop at 1,000", "They stop at 20"] },
      { question: "What comes after twenty-nine?", answer: "Thirty (30)", options: ["Twenty-ten", "Thirty (30)", "Forty", "Twenty-nineteen"] }
    ],
    familyAdventure: "Do a 20-item scavenger hunt. Find and collect 20 small objects from around the house (buttons, coins, blocks, crayons). Lay them out in a line and count together from 1 to 20, touching each one. Then arrange them in two rows of 10 — this shows that 20 is two groups of ten. Then try counting to 20 while doing an activity: 20 jumping jacks, 20 claps, 20 steps. Moving and counting together helps the numbers stick.",
    badge: "Big Counter", nextLesson: "math-3-5-03",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we count EVEN HIGHER!' },
      { type: 'story', image: '/game-assets/math/remi-acorns-many.png', guideText: 'I found SO many acorns today! Ten is not enough! I learned to count to twenty, then thirty, then higher and higher!' },
      { type: 'count-array', count: 10, image: '/game-assets/math/acorn-single.png', interactive: false, instruction: 'Here are ten acorns', guideText: 'Ten acorns! But I found MORE!' },
      { type: 'teach', image: '/game-assets/math/numeral-10.png', guideText: 'After ten comes eleven, twelve, thirteen — the numbers keep going!' },
      { type: 'tap-right', readOptions: true, instruction: 'Which is MORE than ten?', guideText: 'Tap the bigger number!',
        items: [
          { image: '/game-assets/math/numeral-10.png', label: 'Ten' },
          { image: '/game-assets/math/numeral-8.png', label: 'Eight' },
          { image: '/game-assets/math/numeral-3.png', label: 'Three' },
          { image: '/game-assets/math/numeral-20.png', label: 'Twenty', correct: true }
        ]
      },
      { type: 'teach', image: '/game-assets/math/math-celebration.png', guideText: 'Numbers go on forever! Twenty, thirty, one hundred, one thousand!' },
      { type: 'yes-no', scenario: 'Can numbers keep going higher and higher forever?', correctAnswer: true, image: '/game-assets/math/math-celebration.png' },
      { type: 'family', guideText: 'Tonight, see how high you can count together. Take turns — you say one, then a grown-up says two, and keep going!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Big Counter', guideText: 'Numbers go on forever, {name}!' }
    ]
  },

  { id: "math-3-5-03", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 3, title: "Counting to 100: Patterns in Numbers", duration: "10-15 min",
    hook: "One hundred! It sounds like a huge number, but it is really just ten groups of ten. Once you see the pattern, counting to 100 is easier than you think. The same digits — 0 through 9 — repeat over and over in a beautiful, predictable pattern. Remi the Raccoon discovered this pattern while sorting his massive acorn collection into groups of ten.",
    bigIdea: "Our number system is based on patterns of ten — the digits 0-9 repeat in a predictable cycle, and understanding this pattern makes counting to 100 (and beyond) systematic rather than memorized.",
    sections: [
      { title: "Groups of Ten", emoji: "🔟", content: "Our number system is based on groups of ten. After you count 1-9, you bundle them into one ten and start over: 10, 11, 12... 19. Then two tens make 20, and you start over again: 20, 21, 22... 29. Each group of ten follows the same pattern: the ones digit goes 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, then the tens digit increases by one." },
      { title: "The Hundreds Chart", emoji: "📊", content: "A hundreds chart arranges numbers 1-100 in rows of ten. Looking down any column, the ones digit stays the same (1, 11, 21, 31...). Looking across any row, the tens digit stays the same (21, 22, 23, 24...). These patterns make the chart predictable. If you know the pattern, you can find any number without counting from 1 every time." },
      { title: "Counting by Tens", emoji: "🏃", content: "A shortcut to counting large groups is counting by tens: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. That is only ten numbers to reach one hundred! Counting by tens is like taking big jumps instead of little steps. If you have 50 blocks, you do not need to count each one — count five groups of ten." },
      { title: "Numbers Are Endless", emoji: "♾️", content: "After 100, the pattern continues: 101, 102... 200, 201... 1,000... 1,000,000 and beyond. Numbers never stop. But for now, mastering 1-100 gives you everything you need. Remi says: once you see the pattern, every number is just the pattern repeating at a bigger scale." }
    ],
    activity: { title: "Build a Hundreds Chart", instructions: "Draw a 10×10 grid (10 rows, 10 columns). Fill in the numbers 1-100. If that is too many, start with 1-50. Color all the numbers ending in 0 (10, 20, 30...) one color. Color all the numbers ending in 5 another color. What patterns do you see? Then practice counting to 100 by ones, then by tens. Try pointing to random numbers on the chart and naming them. A hundreds chart is a map of the number world." },
    quiz: [
      { question: "How many tens make 100?", answer: "Ten — 100 is ten groups of ten", options: ["Five", "Ten — 100 is ten groups of ten", "One hundred", "Twenty"] },
      { question: "What pattern do you see counting by tens?", answer: "10, 20, 30, 40, 50, 60, 70, 80, 90, 100 — the ones digit is always 0", options: ["There is no pattern", "10, 20, 30, 40, 50, 60, 70, 80, 90, 100 — the ones digit is always 0", "The numbers are random", "Only even numbers appear"] },
      { question: "What number comes after 49?", answer: "50", options: ["40", "50", "59", "410"] },
      { question: "On a hundreds chart, what do all the numbers in one column have in common?", answer: "The same ones digit — like 3, 13, 23, 33 all end in 3", options: ["Nothing", "The same ones digit — like 3, 13, 23, 33 all end in 3", "They are all the same number", "They are all even"] },
      { question: "What is the biggest number?", answer: "There is no biggest number — you can always add one more", options: ["100", "There is no biggest number — you can always add one more", "1,000", "A million"] }
    ],
    familyAdventure: "Count to 100 together as a family — taking turns. Person 1 says 1, person 2 says 2, and so on around the circle until you reach 100. If someone makes a mistake, help them and keep going. Then try counting by tens together: 10, 20, 30... to 100. Then collect 100 small objects (cereal pieces, beans, or coins) and arrange them in 10 groups of 10 to SEE what 100 looks like. One hundred is a big number — but it is just ten tens.",
    badge: "Pattern Finder", nextLesson: "math-3-5-04",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we find PATTERNS in numbers!' },
      { type: 'story', image: '/game-assets/math/remi-detective.png', guideText: 'I noticed something amazing. Numbers follow a pattern! 10, 20, 30, 40 — they all end in zero. I felt like a detective!' },
      { type: 'count-array', count: 10, image: '/game-assets/math/star-single.png', interactive: false, instruction: 'Ten stars in a group', guideText: 'Ten! Another ten makes twenty. Another makes thirty!' },
      { type: 'teach', image: '/game-assets/math/numeral-10.png', guideText: 'Every time we add ten more, we get another number ending in zero.' },
      { type: 'tap-right', readOptions: true, instruction: 'Which number ends in ZERO?', guideText: 'Find the zero at the end!',
        items: [
          { image: '/game-assets/math/numeral-10.png', label: 'Ten', correct: true },
          { image: '/game-assets/math/numeral-3.png', label: 'Three' },
          { image: '/game-assets/math/numeral-5.png', label: 'Five' },
          { image: '/game-assets/math/numeral-7.png', label: 'Seven' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/math-celebration.png', guideText: 'Ten, twenty, thirty, forty, fifty! Counting by tens is a pattern!' },
      { type: 'yes-no', scenario: 'Does counting by tens help us count bigger numbers faster?', correctAnswer: true, image: '/game-assets/math/math-celebration.png' },
      { type: 'family', guideText: 'Tonight, count by tens together up to 100 — ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Pattern Finder', guideText: 'You found the pattern, {name}!' }
    ]
  },

  { id: "math-3-5-04", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 4, title: "What Comes Before and After? (Ordering Numbers)", duration: "10-15 min",
    hook: "If you are number 5 in a line, who is in front of you? Number 4! Who is behind you? Number 6! Numbers have a fixed order — each number has a neighbor before it and a neighbor after it. Knowing this helps you count, compare, and understand how numbers relate to each other. Remi the Raccoon arranges his acorn piles in order from smallest to biggest.",
    bigIdea: "Numbers follow a fixed sequence where each number is exactly one more than the number before it and one less than the number after it — understanding this order is essential for counting, comparing, and basic arithmetic.",
    sections: [
      { title: "Number Neighbors", emoji: "🏘️", content: "Every number has neighbors. The number before 5 is 4 (one less). The number after 5 is 6 (one more). The number before 10 is 9. The number after 10 is 11. Knowing number neighbors helps you count forward and backward and helps you figure out missing numbers in a sequence." },
      { title: "Counting Forward and Backward", emoji: "↔️", content: "Counting forward means going up: 1, 2, 3, 4, 5... Each number is one more. Counting backward means going down: 10, 9, 8, 7, 6... Each number is one less. Counting backward is harder but very useful — you need it for subtraction, for countdown timers, and for blast-off sequences (5, 4, 3, 2, 1, blast off!)." },
      { title: "Ordering Numbers", emoji: "📏", content: "Putting numbers in order means arranging them from smallest to biggest (or biggest to smallest). If you have the numbers 7, 3, 9, 1, 5 — in order from smallest to biggest they become 1, 3, 5, 7, 9. A number line helps you see the order: numbers get bigger as you move to the right and smaller as you move to the left." },
      { title: "Missing Numbers", emoji: "🔍", content: "If you see a sequence like 1, 2, __, 4, 5 — what is missing? Three! You use your knowledge of number order to fill in gaps. This skill helps with math problems, puzzles, and understanding patterns. Remi says: if you know the order, you can always figure out what is missing." }
    ],
    activity: { title: "Number Order Games", instructions: "Write numbers 1-10 on separate cards. Shuffle them. Then put them back in order as fast as you can. Time yourself! Try again — can you beat your time? Then try with 1-20. Then play Missing Number: lay out the cards in order but remove one — can your family guess which is missing? Finally, practice counting backward from 10: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, BLAST OFF!" },
    quiz: [
      { question: "What number comes before 8?", answer: "7", options: ["9", "7", "6", "10"] },
      { question: "What number comes after 14?", answer: "15", options: ["13", "15", "16", "20"] },
      { question: "What is counting backward?", answer: "Counting down — each number is one less: 10, 9, 8, 7, 6...", options: ["Counting really fast", "Counting down — each number is one less: 10, 9, 8, 7, 6...", "Counting with your eyes closed", "Counting only even numbers"] },
      { question: "What number is missing: 4, 5, __, 7, 8?", answer: "6", options: ["5", "6", "9", "3"] },
      { question: "When putting numbers in order from smallest to biggest, which comes first: 9 or 3?", answer: "3 — because 3 is smaller than 9", options: ["9", "3 — because 3 is smaller than 9", "They are equal", "It does not matter"] }
    ],
    familyAdventure: "Play Human Number Line. Write numbers 1-10 on paper plates. Scatter them on the floor. Each family member picks up a plate and stands in the correct position on the number line (smallest to biggest, left to right). Then shuffle and do it again faster. Then remove one plate secretly — who can figure out which number is missing? Then try counting backward as a family: everyone counts down from 20 together. Make it dramatic — BLAST OFF at the end!",
    badge: "Number Neighbor", nextLesson: "math-3-5-05",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn BEFORE and AFTER!' },
      { type: 'story', image: '/game-assets/math/remi-acorns-many.png', guideText: 'I line up my acorns in order. One, two, three. Before three comes two. After three comes four. Every number has a neighbor!' },
      { type: 'teach', image: '/game-assets/math/numeral-3.png', guideText: 'Before three is two. After three is four. Every number has one before and one after.' },
      { type: 'tap-right', readOptions: true, instruction: 'What comes AFTER three?', guideText: 'Tap the number that comes next!',
        items: [
          { image: '/game-assets/math/numeral-4.png', label: 'Four', correct: true },
          { image: '/game-assets/math/numeral-2.png', label: 'Two' },
          { image: '/game-assets/math/numeral-7.png', label: 'Seven' },
          { image: '/game-assets/math/numeral-1.png', label: 'One' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/numeral-4.png', guideText: 'Four comes after three. You are counting forward!' },
      { type: 'tap-right', readOptions: true, instruction: 'What comes BEFORE five?', guideText: 'Tap the number that comes just before!',
        items: [
          { image: '/game-assets/math/numeral-4.png', label: 'Four', correct: true },
          { image: '/game-assets/math/numeral-6.png', label: 'Six' },
          { image: '/game-assets/math/numeral-3.png', label: 'Three' },
          { image: '/game-assets/math/numeral-1.png', label: 'One' }
        ]
      },
      { type: 'yes-no', scenario: 'Does every number have a number that comes before it?', correctAnswer: true, image: '/game-assets/math/math-celebration.png' },
      { type: 'family', guideText: 'Tonight, play Before and After. Someone says a number. Then guess what comes before and after together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Number Neighbor', guideText: 'You know what comes next, {name}!' }
    ]
  },

  { id: "math-3-5-05", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 5, title: "More, Less, or the Same? (Comparing Numbers)", duration: "10-15 min",
    hook: "Who has more cookies — the person with 3 or the person with 7? Who has fewer crayons — the person with 10 or the person with 4? Comparing is one of the most important things numbers let you do. When you can compare, you can figure out who has more, who has less, and whether things are equal. Remi the Raccoon compares his acorn pile to his friend's every day — is it more, less, or the same?",
    bigIdea: "Comparing numbers means determining which is greater (more), which is less (fewer), or whether they are equal (the same) — this skill is fundamental to math and everyday decision-making.",
    sections: [
      { title: "More and Fewer", emoji: "⚖️", content: "When one group has a bigger number, it has more. When one group has a smaller number, it has fewer (or less). 8 is more than 5. 3 is fewer than 6. You can compare by counting each group and seeing which number is bigger, or by lining objects up side by side and seeing which line is longer." },
      { title: "Equal Means the Same", emoji: "🟰", content: "When two groups have the same number, they are equal. 4 apples and 4 oranges are equal in number (even though they are different fruits). Equal does not mean identical — it means the same amount. The equal sign (=) means the same as. 3 = 3. Five fingers = five toes." },
      { title: "Comparing Without Counting", emoji: "👀", content: "Sometimes you can compare without counting. If you see a big pile and a small pile, the big pile probably has more. If you line up two rows of blocks and one row is much longer, it has more. But be careful — big objects in a small group might look like more than many small objects. Counting always gives the accurate answer." },
      { title: "Using Comparing", emoji: "🧠", content: "You compare numbers every day: which plate has more food? Who is taller? Which line at the store is shorter? Do I have enough money? Is there enough for everyone? Comparing helps you make fair decisions, solve problems, and understand the world. Remi compares berry bushes to find the one with the most berries." }
    ],
    activity: { title: "Comparing Games", instructions: "Get two dice (or make number cards 1-10). Roll both dice. Which number is more? Which is less? Are they equal? Do this 10 times and keep score — give a point for each correct answer. Then play the Handful Game: two people each grab a handful of small objects (buttons, blocks, cereal). Count each handful. Who has more? How many more? How many fewer? Then try to grab handfuls that are EQUAL — that is the hardest challenge!" },
    quiz: [
      { question: "Which is more: 6 or 9?", answer: "9 — because 9 is farther along the number line than 6", options: ["6", "9 — because 9 is farther along the number line than 6", "They are equal", "Neither — they cannot be compared"] },
      { question: "What does equal mean?", answer: "The same amount — like 5 apples and 5 oranges have equal numbers", options: ["Exactly identical in every way", "The same amount — like 5 apples and 5 oranges have equal numbers", "More than the other", "Only for the same type of object"] },
      { question: "If you have 4 cookies and your friend has 7, who has fewer?", answer: "You — because 4 is less than 7", options: ["Your friend", "You — because 4 is less than 7", "You both have the same", "Cannot tell without seeing the cookies"] },
      { question: "Can you always tell which group has more just by looking?", answer: "Not always — counting gives the accurate answer because looks can be deceiving", options: ["Yes — bigger looking always means more", "Not always — counting gives the accurate answer because looks can be deceiving", "Only with the same objects", "Looking is always wrong"] },
      { question: "What symbol means equal?", answer: "The = sign — it means the same as", options: ["The + sign", "The = sign — it means the same as", "The - sign", "The > sign"] }
    ],
    familyAdventure: "Play Fair Share at snack time. Give each family member a different number of crackers (or grapes, or pretzels). Count each person's amount. Who has more? Who has fewer? Then redistribute until everyone has an equal amount. How did you figure out how to make it fair? This is comparing and equalizing in action. Then play a card game: each person flips a card (use just number cards 1-10). The person with the higher number wins the round. Simple, fun, and full of comparing practice.",
    badge: "More or Less", nextLesson: "math-3-5-06",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn MORE and LESS!' },
      { type: 'story', image: '/game-assets/math/remi-treasure-pile.png', guideText: 'I have three stars. My friend has five stars. Five is MORE than three. Three is LESS than five. I know by counting!' },
      { type: 'count-array', count: 3, image: '/game-assets/math/star-single.png', interactive: false, instruction: 'Three stars', guideText: 'Three stars here!' },
      { type: 'count-array', count: 5, image: '/game-assets/math/star-single.png', interactive: false, instruction: 'Five stars', guideText: 'Five stars here! That is MORE!' },
      { type: 'teach', image: '/game-assets/math/numeral-5.png', guideText: 'Five is more than three. When you count, you can see which group is bigger!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which has MORE stars?', guideText: 'Tap the one with MORE stars!', items: [ { image: '/game-assets/math/stars-group-5.png', label: 'Five stars', correct: true }, { image: '/game-assets/math/stars-group-2.png', label: 'Two stars' }, { image: '/game-assets/math/remi-sharing-stars.png', label: 'Sharing stars' }, { image: '/game-assets/math/star-single.png', label: 'One star' } ] },
      { type: 'yes-no', scenario: 'Five stars is more than two stars. Is that true?', correctAnswer: true, image: '/game-assets/math/stars-group-5.png' },
      { type: 'teach', image: '/game-assets/math/math-celebration.png', guideText: 'Sometimes two groups have the SAME. Two stars here, two stars there — same!' },
      { type: 'yes-no', scenario: 'If you have 4 and your friend has 4, do you have the SAME?', correctAnswer: true, image: '/game-assets/math/numeral-4.png' },
      { type: 'family', guideText: 'Tonight, compare things at dinner. Who has more grapes? Who has less? Who has the same? Count together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'More or Less', guideText: 'You know more and less, {name}!' }
    ]
  },

  { id: "math-3-5-06", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 6, title: "2D Shapes All Around Us", duration: "10-15 min",
    hook: "Look around — shapes are everywhere! The clock on the wall is a circle. The window is a rectangle. The yield sign is a triangle. The tile on the floor might be a square. Shapes are the building blocks of the visual world, and learning their names and features helps you describe, build, and understand everything you see. Remi the Raccoon notices shapes in the forest — circular tree rings, triangular pine trees, and rectangular beaver dams.",
    bigIdea: "Two-dimensional shapes (circles, squares, triangles, rectangles) are flat figures with specific properties — recognizing them by their number of sides and corners builds the foundation for geometry.",
    sections: [
      { title: "Circles", emoji: "⭕", content: "A circle is perfectly round with no straight sides and no corners. It is the same distance from the center to the edge all the way around. Circles roll! Wheels, coins, plates, and clocks are circles. You can draw a circle by tracing around a cup or using a compass." },
      { title: "Squares and Rectangles", emoji: "🟥", content: "A square has 4 equal sides and 4 corners (right angles). All sides are the same length. A rectangle also has 4 sides and 4 corners, but only opposite sides are equal — it is longer in one direction. Windows, books, doors, and screens are usually rectangles. A square is actually a special rectangle where all sides are equal." },
      { title: "Triangles", emoji: "🔺", content: "A triangle has 3 sides and 3 corners. Triangles can look different — some have all equal sides (equilateral), some have two equal sides (isosceles), and some have no equal sides (scalene). You find triangles in roof shapes, pizza slices, and yield signs. Triangles are the strongest shape in building — that is why bridges use them." },
      { title: "Shapes in the World", emoji: "🌍", content: "Once you learn shapes, you see them everywhere. A stop sign is an octagon (8 sides). A honeycomb cell is a hexagon (6 sides). A diamond is a rhombus. Shapes are the language of geometry, and geometry is the math of the visual world. Remi says: shapes are not just in math class — they are the framework of everything you see." }
    ],
    activity: { title: "Shape Hunt", instructions: "Go on a Shape Hunt around your home. Find and draw at least 3 circles, 3 squares, 3 rectangles, and 3 triangles. For each, write or say what the object is (clock = circle, window = rectangle). Then try making shapes with your body: can you make a circle with your arms? A triangle with a friend? Use craft sticks or straws to build each shape. How many sides does each have? How many corners?" },
    quiz: [
      { question: "How many sides does a triangle have?", answer: "3", options: ["4", "3", "5", "0"] },
      { question: "What makes a circle special?", answer: "It has no straight sides and no corners — it is perfectly round", options: ["It has 4 sides", "It has no straight sides and no corners — it is perfectly round", "It has 1 side and 1 corner", "It is the same as a square"] },
      { question: "How is a square different from a rectangle?", answer: "A square has 4 equal sides; a rectangle has equal opposite sides but can be longer in one direction", options: ["They are exactly the same", "A square has 4 equal sides; a rectangle has equal opposite sides but can be longer in one direction", "A rectangle has more sides", "A square has no corners"] },
      { question: "How many corners does a square have?", answer: "4", options: ["2", "4", "3", "0"] },
      { question: "Why are triangles used in bridges and buildings?", answer: "Because triangles are the strongest shape — they distribute weight evenly and do not collapse easily", options: ["Because they look nice", "Because triangles are the strongest shape — they distribute weight evenly and do not collapse easily", "Because they are the cheapest shape", "Triangles are not used in buildings"] }
    ],
    familyAdventure: "Build a Shape City together. Using paper, cardboard, or blocks, build a city made of shapes: square buildings, triangular roofs, circular windows, rectangular doors. Label each shape. Then count: how many of each shape did you use? Which shape appears most? Take a photo of your Shape City. Then on your next drive or walk, play Shape I Spy: I spy something circular (a wheel), I spy something rectangular (a door). Shapes are the building blocks of the world.",
    badge: "Shape Spotter", nextLesson: "math-3-5-07",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we find SHAPES everywhere!' },
      { type: 'story', image: '/game-assets/math/remi-forest.png', guideText: 'I look around the forest and see shapes! Circles in the sun. Squares in windows. Triangles in trees. Shapes are EVERYWHERE!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a CIRCLE?', guideText: 'Tap the round one!',
        items: [
          { image: '/game-assets/math/shape-circle.png', label: 'Circle', correct: true },
          { image: '/game-assets/math/shape-square.png', label: 'Square' },
          { image: '/game-assets/math/shape-triangle.png', label: 'Triangle' },
          { image: '/game-assets/math/shape-rectangle.png', label: 'Rectangle' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/shape-circle.png', guideText: 'A circle is ROUND. Like a ball, the sun, or a wheel!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a TRIANGLE?', guideText: 'Tap the one with three sides!',
        items: [
          { image: '/game-assets/math/shape-triangle.png', label: 'Triangle', correct: true },
          { image: '/game-assets/math/shape-circle.png', label: 'Circle' },
          { image: '/game-assets/math/shape-square.png', label: 'Square' },
          { image: '/game-assets/math/shape-heart.png', label: 'Heart' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/shape-square.png', guideText: 'A square has FOUR sides, all the same size. Like a window or a book!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a SQUARE?', guideText: 'Tap the one with four equal sides!',
        items: [
          { image: '/game-assets/math/shape-square.png', label: 'Square', correct: true },
          { image: '/game-assets/math/shape-triangle.png', label: 'Triangle' },
          { image: '/game-assets/math/shape-circle.png', label: 'Circle' },
          { image: '/game-assets/math/shape-star.png', label: 'Star' }
        ]
      },
      { type: 'family', guideText: 'Tonight, go on a Shape Hunt. Find one circle, one square, and one triangle in your house. Point them out together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Shape Spotter', guideText: 'You see shapes everywhere, {name}!' }
    ]
  },

  { id: "math-3-5-07", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 7, title: "3D Shapes: Spheres, Cubes, and Cylinders", duration: "10-15 min",
    hook: "A ball is not a circle — it is a sphere! A circle is flat, but a sphere is round in every direction. A box is not a square — it is a cube! The world is made of three-dimensional shapes that you can hold, stack, and roll. Today we move from flat shapes to solid shapes — the shapes of the real world. Remi the Raccoon collects round acorns (spheres) and stores them in a hollow log (cylinder).",
    bigIdea: "Three-dimensional shapes (spheres, cubes, cylinders, cones) have length, width, AND height — they occupy space in the real world, and understanding them helps you describe and interact with physical objects.",
    sections: [
      { title: "Flat vs Solid", emoji: "📐", content: "A circle is flat — you can draw it on paper. A sphere is solid — like a ball. A square is flat. A cube is solid — like a dice or a box. Flat shapes are two-dimensional (2D) — they have length and width. Solid shapes are three-dimensional (3D) — they have length, width, AND height. You can hold 3D shapes in your hand." },
      { title: "Spheres and Cubes", emoji: "🔮", content: "A sphere is perfectly round in every direction — balls, globes, and oranges are spheres. They roll easily in any direction. A cube has 6 flat square faces, 8 corners, and 12 edges — dice, sugar cubes, and Rubik's cubes are cubes. Cubes stack neatly and do not roll." },
      { title: "Cylinders and Cones", emoji: "🥫", content: "A cylinder has two flat circles on the top and bottom connected by a curved surface — cans, tubes, and drinking glasses are cylinders. They roll in one direction. A cone has one flat circle on the bottom and comes to a point on top — ice cream cones, traffic cones, and party hats are cones." },
      { title: "3D Shapes Everywhere", emoji: "🏠", content: "Your world is full of 3D shapes. A house is made of rectangular prisms (boxes), pyramids (roofs), and cylinders (pillars). A car has cylinders (wheels/tires), rectangular prisms (body), and curved surfaces. Once you know 3D shape names, you can describe any object in the world. Remi says: flat shapes are for drawing — solid shapes are for building." }
    ],
    activity: { title: "3D Shape Sort", instructions: "Gather objects from around the house: a ball (sphere), a box (rectangular prism or cube), a can (cylinder), a cone-shaped cup or funnel (cone). Sort them by shape type. Then test: which ones roll? (Spheres, cylinders, cones.) Which ones stack? (Cubes, rectangular prisms.) Which ones slide? (All of them!) Then try building a tower using only 3D shapes from your collection. Which shapes make the best base? Which are hardest to balance?" },
    quiz: [
      { question: "What is the difference between a circle and a sphere?", answer: "A circle is flat (2D); a sphere is round in every direction (3D) — like a ball", options: ["They are the same thing", "A circle is flat (2D); a sphere is round in every direction (3D) — like a ball", "A sphere is smaller", "A circle has corners"] },
      { question: "How many flat faces does a cube have?", answer: "6 — each face is a square", options: ["4", "6 — each face is a square", "8", "2"] },
      { question: "What 3D shape is a can of soup?", answer: "A cylinder — two circles connected by a curved surface", options: ["A cube", "A cylinder — two circles connected by a curved surface", "A sphere", "A cone"] },
      { question: "Which 3D shapes roll?", answer: "Spheres, cylinders, and cones — because they have curved surfaces", options: ["Only spheres", "Spheres, cylinders, and cones — because they have curved surfaces", "Cubes roll the best", "No 3D shapes roll"] },
      { question: "What 3D shape is an ice cream cone?", answer: "A cone — one flat circle on the bottom that comes to a point on top", options: ["A cylinder", "A cone — one flat circle on the bottom that comes to a point on top", "A sphere", "A pyramid"] }
    ],
    familyAdventure: "Go on a 3D Shape Hunt in the kitchen. Find: a sphere (orange, ball of dough), a cylinder (can, glass, paper towel roll), a cube or rectangular prism (box, block of cheese, cereal box), and a cone (funnel, ice cream cone, party hat). Line them up and discuss: what makes each unique? Then build the tallest tower you can using only kitchen 3D shapes — which shapes are best for stacking? Worst? Engineering starts with understanding shapes.",
    badge: "3D Explorer", nextLesson: "math-3-5-08",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn 3D SHAPES — shapes with depth!' },
      { type: 'story', image: '/game-assets/math/shape-3d-sphere.png', guideText: 'A circle is flat. But a BALL is round all the way around. It has depth! That makes it a 3D shape — a SPHERE!' },
      { type: 'teach', image: '/game-assets/math/shape-3d-sphere.png', guideText: 'A sphere is round like a ball. You can hold it in your hand!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a SPHERE?', guideText: 'Tap the round ball shape!',
        items: [
          { image: '/game-assets/math/shape-3d-sphere.png', label: 'Sphere', correct: true },
          { image: '/game-assets/math/shape-3d-cube.png', label: 'Cube' },
          { image: '/game-assets/math/shape-3d-cylinder.png', label: 'Cylinder' },
          { image: '/game-assets/math/shape-3d-cone.png', label: 'Cone' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/shape-3d-cube.png', guideText: 'A cube is like a 3D square — like dice or a block!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a CUBE?', guideText: 'Tap the block shape!',
        items: [
          { image: '/game-assets/math/shape-3d-cube.png', label: 'Cube', correct: true },
          { image: '/game-assets/math/shape-3d-sphere.png', label: 'Sphere' },
          { image: '/game-assets/math/shape-3d-cylinder.png', label: 'Cylinder' },
          { image: '/game-assets/math/shape-3d-cone.png', label: 'Cone' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/shape-3d-cylinder.png', guideText: 'A cylinder is tall and round — like a soup can or a glass!' },
      { type: 'family', guideText: 'Tonight, find 3D shapes at home. A ball (sphere), a box (cube), a cup (cylinder), an ice cream cone. Touch them and feel the shape!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: '3D Explorer', guideText: 'You found 3D shapes, {name}!' }
    ]
  },

  { id: "math-3-5-08", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 8, title: "Sorting and Classifying Objects", duration: "10-15 min",
    hook: "Imagine dumping ALL your toys into one giant pile — cars mixed with dolls mixed with blocks mixed with puzzles. What a mess! Sorting means putting things into groups based on what they have in common. You already sort naturally: crayons by color, clothes by type, foods by where they go in the fridge. Sorting is one of the first mathematical skills because math is all about finding patterns and organizing information. Remi the Raccoon sorts his food into piles: berries, nuts, and fish.",
    bigIdea: "Sorting means grouping objects by a shared attribute (color, shape, size, type) — this fundamental skill builds logical thinking, pattern recognition, and the ability to organize information.",
    sections: [
      { title: "What Is Sorting?", emoji: "📦", content: "Sorting means putting things into groups based on something they share. You can sort by color (all red things together), by shape (all circles together), by size (big, medium, small), by type (all animals together), or by any other attribute. The rule you sort by is called the sorting rule. Different sorting rules create different groups from the same objects." },
      { title: "One Group, Many Ways", emoji: "🔄", content: "The same objects can be sorted many different ways. Take a pile of buttons: sort by color (red group, blue group, green group). Now re-sort by size (big, small). Now re-sort by number of holes (two-hole, four-hole). Same buttons, different groups! There is no single right way to sort — it depends on what you are looking for." },
      { title: "Why Sorting Matters", emoji: "🧠", content: "Sorting is the foundation of logical thinking. When you sort, you observe carefully, find similarities, make decisions, and organize information. Scientists sort living things into categories (plants, animals). Libraries sort books by topic. Grocery stores sort food by type. Your brain sorts information constantly to make sense of the world." },
      { title: "Classifying", emoji: "🏷️", content: "Classifying is like sorting with names. When you sort animals into mammals, birds, and fish — you are classifying. When you sort foods into fruits, vegetables, and grains — you are classifying. Classification uses categories with names that describe the shared attribute. It is how we organize knowledge. Remi classifies his forest: safe spots, food spots, and water spots." }
    ],
    activity: { title: "Sorting Station", instructions: "Gather a big mixed pile of objects: buttons, blocks, coins, crayons, small toys, pasta shapes — anything small. First, sort by COLOR — make a pile for each color. Count each pile. Which color has the most? Then mix them up and sort by SIZE — big, medium, small. Then sort by TYPE — toys, art supplies, food items. Then invent your own sorting rule and see if a family member can guess what your rule is. Sorting is a game that trains your brain." },
    quiz: [
      { question: "What does sorting mean?", answer: "Putting things into groups based on something they share — like color, shape, size, or type", options: ["Putting things in a random order", "Putting things into groups based on something they share — like color, shape, size, or type", "Counting things", "Breaking things apart"] },
      { question: "Can the same objects be sorted in different ways?", answer: "Yes — the same objects can be grouped by color, then by size, then by shape, and so on", options: ["No — there is only one right way to sort", "Yes — the same objects can be grouped by color, then by size, then by shape, and so on", "Only by color", "Only if they are the same type"] },
      { question: "What is a sorting rule?", answer: "The attribute you use to decide which group each object goes in — like color, size, or shape", options: ["A law about cleaning your room", "The attribute you use to decide which group each object goes in — like color, size, or shape", "A rule that says you must sort before eating", "Only teachers know sorting rules"] },
      { question: "Why is sorting important for thinking?", answer: "It teaches you to observe carefully, find patterns, make decisions, and organize information", options: ["It is not important", "It teaches you to observe carefully, find patterns, make decisions, and organize information", "Only for cleaning up", "Only scientists need to sort"] },
      { question: "What is classifying?", answer: "Sorting with named categories — like grouping animals into mammals, birds, and fish", options: ["The same as counting", "Sorting with named categories — like grouping animals into mammals, birds, and fish", "Making things smaller", "Only for libraries"] }
    ],
    familyAdventure: "Play Guess My Rule. One person sorts a pile of objects by a secret rule (all round things together, all blue things together, all heavy things together). Everyone else tries to guess the sorting rule. Take turns being the sorter. Then do a laundry sort together: sort clothes by color, then by person, then by type (shirts, pants, socks). Sorting laundry is real-world math you do every week. Then sort a snack mix (trail mix works great): separate nuts, raisins, and chocolate pieces. Count each group. Which has the most? Sorting + counting = mathematical thinking.",
    badge: "Super Sorter", nextLesson: "math-3-5-09",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to SORT!' },
      { type: 'story', image: '/game-assets/math/remi-treasure-pile.png', guideText: 'I found a big pile of treasures — stars, acorns, apples, flowers, all mixed up! I sorted them. Stars with stars. Acorns with acorns. Now everything has a place!' },
      { type: 'teach', image: '/game-assets/math/sorting-two-piles.png', guideText: 'Sorting means putting things that are the SAME together. It helps us see what we have!' },
      { type: 'sort-buckets',
        instruction: 'Sort the treasures! Stars go with stars. Acorns go with acorns.',
        guideText: 'Drag each one into the right bucket!',
        buckets: [
          { label: 'Stars', image: '/game-assets/math/star-single.png' },
          { label: 'Acorns', image: '/game-assets/math/acorn-single.png' }
        ],
        items: [
          { image: '/game-assets/math/star-single.png', bucket: 0 },
          { image: '/game-assets/math/acorn-single.png', bucket: 1 },
          { image: '/game-assets/math/star-single.png', bucket: 0 },
          { image: '/game-assets/math/acorn-single.png', bucket: 1 },
          { image: '/game-assets/math/star-single.png', bucket: 0 },
          { image: '/game-assets/math/acorn-single.png', bucket: 1 }
        ]
      },
      { type: 'teach', image: '/game-assets/math/math-celebration.png', guideText: 'You sorted them all! Now we can count each group easily.' },
      { type: 'yes-no', scenario: 'Does sorting help us see how many of each thing we have?', correctAnswer: true, image: '/game-assets/math/remi-treasure-pile.png' },
      { type: 'family', guideText: 'Tonight, sort something at home together — toys by color, socks by pair, or laundry by person. Sorting is fun!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Super Sorter', guideText: 'You are a sorting champion, {name}!' }
    ]
  },

  { id: "math-3-5-09", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 9, title: "Patterns: What Comes Next?", duration: "10-15 min",
    hook: "Red, blue, red, blue, red, ___? BLUE! You just recognized a pattern — a sequence that repeats in a predictable way. Patterns are everywhere in math and in life: day-night-day-night, seasons repeating, heart beating, stripes on a shirt. Finding and continuing patterns is one of the most powerful math skills because it lets you predict what will happen next. Remi the Raccoon notices patterns in the forest: rain comes after dark clouds, flowers bloom after warm days.",
    bigIdea: "A pattern is a sequence that repeats according to a rule — recognizing, continuing, and creating patterns builds the foundation for algebra, prediction, and understanding regularity in the world.",
    sections: [
      { title: "What Is a Pattern?", emoji: "🔁", content: "A pattern is something that repeats in a predictable way. Red-blue-red-blue is a pattern (the rule is: alternate red and blue). Circle-square-circle-square is a pattern. Clap-clap-stomp-clap-clap-stomp is a pattern. The repeating part is called the core. Once you find the core, you can predict what comes next — forever." },
      { title: "Finding Patterns", emoji: "🔍", content: "To find a pattern, look for the part that repeats. In 1-2-3-1-2-3-1-2-3, the core is 1-2-3. In big-small-big-small, the core is big-small. Ask: what comes next after the pattern so far? Fill in the answer using the rule. If the core is A-B-C and you have A-B-C-A-B, the next one is C." },
      { title: "Making Patterns", emoji: "🎨", content: "You can create your own patterns using colors, shapes, sounds, movements, or numbers. Try: red-red-blue-red-red-blue (AAB pattern). Or: jump-clap-spin-jump-clap-spin (ABC pattern). Or: 2-4-6-8 (growing pattern — each number is 2 more). Creating patterns exercises your creativity AND your mathematical thinking." },
      { title: "Patterns in Nature", emoji: "🌻", content: "Nature is full of patterns. Sunflower seeds spiral in a mathematical pattern. Honeycomb cells are hexagonal patterns. Zebra stripes follow patterns. Day follows night in a pattern. Seasons repeat in a pattern. Even your heartbeat is a pattern. Math is the study of patterns — and patterns are the language of the universe." }
    ],
    activity: { title: "Pattern Creator", instructions: "Use colored blocks, beads, crayons, or cereal pieces to create patterns. Start simple: make an AB pattern (red-blue-red-blue) with at least 8 pieces. Then make an ABC pattern (red-blue-yellow-red-blue-yellow). Then make an AAB pattern (red-red-blue-red-red-blue). Then create your own unique pattern and challenge a family member to figure out the rule and continue it. Then clap a rhythm pattern and have someone repeat it. Patterns can be visual, auditory, or physical!" },
    quiz: [
      { question: "What comes next: circle, square, circle, square, circle, ___?", answer: "Square — the pattern alternates between circle and square", options: ["Triangle", "Square — the pattern alternates between circle and square", "Circle", "Rectangle"] },
      { question: "What is the core of a pattern?", answer: "The part that repeats — once you know the core, you can predict the rest", options: ["The first piece only", "The part that repeats — once you know the core, you can predict the rest", "The last piece only", "The middle piece"] },
      { question: "What comes next: 2, 4, 6, 8, ___?", answer: "10 — the pattern adds 2 each time", options: ["9", "10 — the pattern adds 2 each time", "12", "7"] },
      { question: "Are patterns only in math?", answer: "No — patterns exist in nature, music, art, language, and everyday life", options: ["Yes — only in math class", "No — patterns exist in nature, music, art, language, and everyday life", "Only in art", "Only in music"] },
      { question: "What type of pattern is red-red-blue-red-red-blue?", answer: "An AAB pattern — two of one kind followed by one of another, then repeating", options: ["An AB pattern", "An AAB pattern — two of one kind followed by one of another, then repeating", "An ABC pattern", "Not a pattern at all"] }
    ],
    familyAdventure: "Go on a Pattern Hunt. Find patterns everywhere: on clothing (stripes, plaid), in architecture (brick patterns, tile patterns), in nature (leaf arrangements, flower petals), in music (rhythms), and in daily routines (eat-play-sleep-eat-play-sleep). Each person finds 3 patterns and shares them with the family. Then create a Family Pattern Dance: invent a movement pattern (clap-jump-spin-clap-jump-spin) and perform it together. Patterns are the rhythm of life.",
    badge: "Pattern Master", nextLesson: "math-3-5-10",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we find PATTERNS!' },
      { type: 'story', image: '/game-assets/math/remi-forest.png', guideText: 'I see a pattern in the forest. Red leaf, yellow leaf, red leaf, yellow leaf. What comes next? Another red leaf! Patterns help us guess what is coming.' },
      { type: 'teach', image: '/game-assets/math/pattern-star-heart.png', guideText: 'A pattern is something that repeats. Like star, heart, star, heart, star, heart!' },
      { type: 'tap-right', readOptions: true, headerImage: '/game-assets/math/pattern-star-heart.png', instruction: 'Star, heart, star, heart, what comes NEXT?', guideText: 'Tap what comes next in the pattern!',
        items: [
          { image: '/game-assets/math/shape-star.png', label: 'Star', correct: true },
          { image: '/game-assets/math/shape-circle.png', label: 'Circle' },
          { image: '/game-assets/math/shape-square.png', label: 'Square' },
          { image: '/game-assets/math/shape-triangle.png', label: 'Triangle' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/shape-circle.png', guideText: 'Patterns can be colors, shapes, numbers, or sounds. The trick is to notice what repeats.' },
      { type: 'tap-right', readOptions: true, instruction: 'Circle, square, circle, square, what is NEXT?', guideText: 'Tap the next one!',
        items: [
          { image: '/game-assets/math/shape-circle.png', label: 'Circle', correct: true },
          { image: '/game-assets/math/shape-square.png', label: 'Square' },
          { image: '/game-assets/math/shape-triangle.png', label: 'Triangle' },
          { image: '/game-assets/math/shape-heart.png', label: 'Heart' }
        ]
      },
      { type: 'yes-no', scenario: 'Are patterns things that repeat over and over?', correctAnswer: true, image: '/game-assets/math/pattern-star-heart.png' },
      { type: 'family', guideText: 'Tonight, make a pattern together! Clap-clap-stomp, clap-clap-stomp. Or draw a pattern — red-blue-red-blue!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Pattern Master', guideText: 'You see patterns everywhere, {name}!' }
    ]
  },

  { id: "math-3-5-10", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 10, title: "How Long Is It? Introduction to Measurement", duration: "10-15 min",
    hook: "How tall are you? How long is your bed? How far is it from your room to the kitchen? Measurement answers these questions by using numbers to describe size and distance. Before rulers existed, people measured using their bodies — hands, feet, and arm spans. Today we use standard tools, but the idea is the same: comparing something to a unit to find out how big it is. Remi the Raccoon measures his food stash by how many paw-lengths it stretches.",
    bigIdea: "Measurement is the process of finding out how long, tall, or big something is by comparing it to a unit — and length can be measured using non-standard units (hands, blocks) or standard units (inches, centimeters).",
    sections: [
      { title: "What Is Measurement?", emoji: "📏", content: "Measurement tells you the size of something using numbers. How long is the table? How tall is the plant? How far can you jump? To measure, you compare the object to a unit — something with a known size. The unit could be a block, a paper clip, a hand span, a foot, an inch, or a centimeter. You count how many units fit along the object." },
      { title: "Non-Standard Units", emoji: "✋", content: "Before rulers, people measured with body parts: hand spans, foot lengths, arm spans. You can measure your desk in hand spans — it might be 6 hands long. The problem is that everyone's hand is a different size, so one person might get 6 and another might get 5 for the same desk. This is why standard units (inches, feet, centimeters) were invented — everyone's inch is the same length." },
      { title: "Using a Ruler", emoji: "📐", content: "A ruler is a tool for measuring length in standard units. In the US, rulers show inches (12 inches = 1 foot). Metric rulers show centimeters (100 centimeters = 1 meter). To measure, place the zero end of the ruler at one end of the object and read the number where the object ends. A pencil might be 7 inches long. Your hand span might be 6 inches." },
      { title: "Measurement in Life", emoji: "🏗️", content: "Measurement is used everywhere. Carpenters measure wood before cutting. Tailors measure fabric for clothes. Doctors measure your height and weight. Cooks measure ingredients. Builders measure rooms before buying furniture. Without measurement, nothing would fit right. Remi says: measure twice, cut once — accuracy matters." }
    ],
    activity: { title: "Measure Everything", instructions: "Measure five objects using non-standard units first: how many paper clips long is your pencil? How many blocks wide is your book? How many hand spans is the table? Write down each measurement. Then use a ruler to measure the same objects in inches or centimeters. Compare: did different people get different answers with non-standard units? (Yes!) Did everyone get the same answer with the ruler? (Yes — that is why standard units exist!)" },
    quiz: [
      { question: "What is measurement?", answer: "Finding out how long, tall, or big something is by comparing it to a unit", options: ["Counting things", "Finding out how long, tall, or big something is by comparing it to a unit", "Weighing things only", "Only using a ruler"] },
      { question: "Why were standard units invented?", answer: "Because non-standard units (like hand spans) give different answers for different people — standard units are the same for everyone", options: ["For fun", "Because non-standard units (like hand spans) give different answers for different people — standard units are the same for everyone", "Only scientists need standard units", "Standard units are not important"] },
      { question: "How many inches are in one foot?", answer: "12 inches", options: ["10 inches", "12 inches", "5 inches", "100 inches"] },
      { question: "What tool measures length?", answer: "A ruler — it shows inches or centimeters along its edge", options: ["A clock", "A ruler — it shows inches or centimeters along its edge", "A scale", "A thermometer"] },
      { question: "If your pencil is 5 paper clips long and your book is 8 paper clips long, which is longer?", answer: "The book — because 8 paper clips is more than 5 paper clips", options: ["The pencil", "The book — because 8 paper clips is more than 5 paper clips", "They are the same length", "You cannot compare them"] }
    ],
    familyAdventure: "Do a Family Measurement Challenge. Each person picks 3 objects and measures them in two ways: first using a non-standard unit (hand spans, foot lengths, or paper clips) and then using a ruler (inches or centimeters). Record all measurements. Compare: whose hand span is biggest? Did that person get fewer hand spans for the same object? (Yes — bigger unit = fewer of them.) Then measure each family member's height. Who is tallest? By how much? Make a height chart on the wall and remeasure every few months to track growth.",
    badge: "Measure Master", nextLesson: "math-3-5-11",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we measure HOW LONG things are!' },
      { type: 'story', image: '/game-assets/math/remi-branches-compare.png', guideText: 'I wanted to know which branch was longer. So I lined them up and compared. One was SHORTER. One was LONGER. Now I knew!' },
      { type: 'teach', image: '/game-assets/math/compare-long-short.png', guideText: 'Long, short. Tall, small. We can compare how big things are!' },
      { type: 'yes-no', scenario: 'Is the longer stick the one that goes further along?', correctAnswer: true, image: '/game-assets/math/compare-sticks.png' },
      { type: 'teach', image: '/game-assets/math/shape-rectangle.png', guideText: 'To compare, we line things up and look at which goes farther!' },
      { type: 'yes-no', scenario: 'Can you measure with your hands, like how many hands long a table is?', correctAnswer: true, image: '/game-assets/math/remi-measuring-hands.png' },
      { type: 'teach', image: '/game-assets/math/remi-measuring-hands.png', guideText: 'You can measure with anything — your foot, a shoe, a block, or a ruler!' },
      { type: 'family', guideText: 'Tonight, measure three things at home with your feet. How many foot-steps is the couch? The table? Your bedroom?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Measure Master', guideText: 'You can measure anything, {name}!' }
    ]
  },

  { id: "math-3-5-11", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 11, title: "Heavy or Light? Introduction to Weight", duration: "10-15 min", hook: "Hold a feather in one hand and a book in the other. Which is heavier? The book! Weight tells us how heavy something is. Understanding weight helps you compare objects, cook recipes, and even mail packages. Remi the Raccoon can tell which acorn is heaviest just by holding them — but a scale gives a more accurate answer.", bigIdea: "Weight measures how heavy an object is — it can be estimated by feel, compared using a balance, and measured precisely using a scale in pounds or kilograms.", sections: [ { title: "Heavy and Light", emoji: "⚖️", content: "Some things are heavy — they pull your arm down when you hold them. Some things are light — you can hold them easily. A watermelon is heavy. A cotton ball is light. You can estimate weight by holding objects, but your estimates might be wrong — a small rock can be heavier than a big pillow. Actual weight depends on what the object is made of, not just its size." }, { title: "Comparing Weights", emoji: "🏋️", content: "You can compare two objects by holding one in each hand — the heavier one pulls your hand down more. A balance scale makes this more precise: put one object on each side, and the heavier side goes down. If both sides are level, the objects weigh the same. Comparing weights helps you decide which bag to carry, which box to lift, and whether you have enough of something." }, { title: "Measuring Weight", emoji: "📊", content: "Weight is measured using scales. In the US, we use pounds (lb) and ounces (oz). Most of the world uses kilograms (kg) and grams (g). A loaf of bread weighs about 1 pound. A large watermelon weighs about 20 pounds. YOU might weigh between 30 and 50 pounds. Knowing the units helps you understand weights you hear about." }, { title: "Weight in Daily Life", emoji: "🛒", content: "Weight matters every day. Groceries are priced by weight. Recipe ingredients are measured by weight. Your pediatrician tracks your weight to make sure you are growing well. Luggage has weight limits at the airport. Bridges have weight limits for trucks. Understanding weight helps you navigate the real world." } ], activity: { title: "Weight Guessing Game", instructions: "Gather 10 objects: a book, a shoe, an apple, a spoon, a pillow, a cup of water, a toy, a coin, a rock, and a stuffed animal. First rank them from lightest to heaviest just by guessing. Then pick them up one at a time and re-rank based on feel. Finally, if you have a kitchen scale, weigh each one and see how accurate your guesses were. Which objects fooled you? Was anything heavier or lighter than you expected?" }, quiz: [ { question: "Does a bigger object always weigh more?", answer: "No — a big pillow is lighter than a small rock; weight depends on material, not just size", options: ["Yes — bigger is always heavier", "No — a big pillow is lighter than a small rock; weight depends on material, not just size", "Size and weight are always the same", "Only metal objects are heavy"] }, { question: "How does a balance scale work?", answer: "You put one object on each side — the heavier side goes down", options: ["It measures temperature", "You put one object on each side — the heavier side goes down", "Both sides always balance", "It only works for food"] }, { question: "About how much does a loaf of bread weigh?", answer: "About 1 pound", options: ["About 100 pounds", "About 1 pound", "About 1 ounce", "About 20 pounds"] }, { question: "What unit measures weight in the US?", answer: "Pounds (lb) and ounces (oz)", options: ["Inches and feet", "Pounds (lb) and ounces (oz)", "Degrees", "Minutes and seconds"] }, { question: "Why does weight matter at the grocery store?", answer: "Because many foods are priced by weight — you pay per pound for fruits, vegetables, and meats", options: ["It does not matter at the store", "Because many foods are priced by weight — you pay per pound for fruits, vegetables, and meats", "Only for frozen food", "Only at farmers markets"] } ], familyAdventure: "Play Weight Olympics. Event 1: each person picks up a mystery bag (fill bags with different amounts of rice, beans, or toys) and ranks them heaviest to lightest — then weigh to check. Event 2: estimate the weight of a banana, then weigh it. Closest guess wins! Event 3: find two objects that weigh about the same (feel them, then verify with a scale). Give gold stars for accuracy. This builds estimation skills and number sense around weight.", badge: "Weight Wizard", nextLesson: "math-3-5-12",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn HEAVY and LIGHT!' },
      { type: 'story', image: '/game-assets/math/remi-rock-feather.png', guideText: 'I picked up a rock. Heavy! Then I picked up a feather. Light! Some things push down hard. Some things float up. That is weight!' },
      { type: 'teach', image: '/game-assets/math/shape-3d-sphere.png', guideText: 'Heavy things are hard to lift. Light things are easy to lift!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which would be HEAVY?', guideText: 'Tap the heavy one!',
        items: [
          { image: '/game-assets/math/item-rock.png', label: 'Rock', correct: true },
          { image: '/game-assets/math/flower-single.png', label: 'Flower' },
          { image: '/game-assets/math/item-feather.png', label: 'Feather' },
          { image: '/game-assets/math/item-ribbon.png', label: 'Ribbon' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/flower-single.png', guideText: 'A flower is LIGHT. A big rock is HEAVY. Your body knows the difference when you lift them!' },
      { type: 'yes-no', scenario: 'Is a big truck heavier than a paper airplane?', correctAnswer: true, image: '/game-assets/math/truck-vs-airplane.png' },
      { type: 'sort-buckets',
        instruction: 'Sort things by heavy and light!',
        guideText: 'Drag each one to heavy or light!',
        buckets: [
          { label: 'Heavy', image: '/game-assets/math/item-rock.png' },
          { label: 'Light', image: '/game-assets/math/item-feather.png' }
        ],
        items: [
          { image: '/game-assets/math/item-rock.png', bucket: 0 },
          { image: '/game-assets/math/item-feather.png', bucket: 1 },
          { image: '/game-assets/math/item-rock.png', bucket: 0 },
          { image: '/game-assets/math/item-feather.png', bucket: 1 }
        ]
      },
      { type: 'family', guideText: 'Tonight, pick up three things. Which is heaviest? Which is lightest? Line them up in order!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Weight Wizard', guideText: 'You know heavy and light, {name}!' }
    ]
  },

  { id: "math-3-5-12", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 12, title: "Full or Empty? Introduction to Capacity", duration: "10-15 min", hook: "Pour water into a glass — when does it become full? How many small cups does it take to fill a big bowl? Capacity tells you how much a container can hold. It is the measurement of volume — and it matters every time you pour juice, fill a bathtub, or measure ingredients for a recipe. Remi the Raccoon knows exactly how much water fits in his favorite stream pool.", bigIdea: "Capacity is how much a container can hold — it is measured by comparing containers or using standard units like cups, pints, and liters — and understanding it helps with cooking, pouring, and everyday tasks.", sections: [ { title: "Full, Empty, and In Between", emoji: "🥤", content: "A glass can be empty (nothing inside), half full (filled halfway), or full (no more fits). These are descriptions of how much of a container's capacity is used. A full bathtub has more water than a full cup — even though both are full. The amount they hold when full is their capacity." }, { title: "Comparing Capacities", emoji: "📊", content: "Which holds more — a mug or a bucket? A bucket! You can compare capacities by pouring: fill a small cup with water and pour it into a larger container. Count how many small cups it takes to fill the big one. If a pitcher holds 8 cups of water and a bowl holds 4 cups, the pitcher has a bigger capacity." }, { title: "Measuring Capacity", emoji: "📏", content: "Capacity is measured in standard units. In the US: cups, pints, quarts, and gallons. A pint = 2 cups. A quart = 4 cups. A gallon = 16 cups. In the metric system: milliliters and liters. A water bottle is usually about 500 milliliters or 2 cups. Recipes use these units so everyone makes the same amount." }, { title: "Capacity in Daily Life", emoji: "🍳", content: "You use capacity every time you cook (1 cup of flour), pour a drink (fill the glass but not too full), do laundry (how much detergent), or water plants (enough water but not too much). Understanding capacity helps you follow recipes, avoid spills, and measure liquids accurately. Remi says: knowing how much fits where is practical math you use every day." } ], activity: { title: "Pouring Experiments", instructions: "Gather different containers: a cup, a bowl, a pot, a pitcher, and a plastic bottle. Fill the cup with water and pour it into the bowl — how many cups fill the bowl? Then pour cups into the pot — how many? The pitcher? Create a capacity chart: bowl = __ cups, pot = __ cups, pitcher = __ cups. Which holds the most? Then practice in the bath: use containers of different sizes to pour and measure. Water play is math play!" }, quiz: [ { question: "What is capacity?", answer: "How much a container can hold when it is full", options: ["How heavy something is", "How much a container can hold when it is full", "How tall a container is", "How much a container costs"] }, { question: "Which holds more: a cup or a gallon?", answer: "A gallon — it equals 16 cups", options: ["A cup", "A gallon — it equals 16 cups", "They hold the same amount", "It depends on the cup"] }, { question: "How can you compare the capacity of two containers?", answer: "Fill one with water and pour it into the other — count how many small ones fill the big one", options: ["Just look at them", "Fill one with water and pour it into the other — count how many small ones fill the big one", "Weigh them", "You cannot compare containers"] }, { question: "How many cups are in a pint?", answer: "2 cups", options: ["1 cup", "2 cups", "4 cups", "10 cups"] }, { question: "Why does capacity matter in cooking?", answer: "Recipes use specific amounts — measuring correctly ensures the food turns out right", options: ["It does not matter in cooking", "Recipes use specific amounts — measuring correctly ensures the food turns out right", "Only professional chefs measure", "You can always guess"] } ], familyAdventure: "Cook or bake something together and focus on capacity measurements. Measure 1 cup of flour, 1/2 cup of sugar, 1/4 cup of milk. Talk about the different cup sizes. Then do the Pouring Challenge: can you pour exactly one cup of water into a glass without a measuring cup? (Mark a line on a clear glass at the one-cup level and try to pour to it without looking at the line. Then check!) This builds estimation skills and connects math to a delicious outcome.", badge: "Full and Empty", nextLesson: "math-3-5-13",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn FULL and EMPTY!' },
      { type: 'story', image: '/game-assets/math/remi-baskets-full-empty.png', guideText: 'I have two baskets. One is FULL of acorns. One is EMPTY. I put more acorns in the empty one until it is full too. Now both are full!' },
      { type: 'teach', image: '/game-assets/math/remi-baskets-full-empty.png', guideText: 'Full means it has a lot. Empty means it has nothing. In between is partly full!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which basket is FULL?', guideText: 'Tap the basket with lots inside!',
        items: [
          { image: '/game-assets/math/remi-treasure-pile.png', label: 'Full basket', correct: true },
          { image: '/game-assets/math/basket-empty.png', label: 'Empty basket' },
          { image: '/game-assets/math/star-single.png', label: 'Just one star' },
          { image: '/game-assets/math/flower-single.png', label: 'Just one flower' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/remi-baskets-full-empty.png', guideText: 'A full cup holds lots of water. An empty cup holds nothing. We can fill things up little by little!' },
      { type: 'yes-no', scenario: 'If your glass has no water at all, is it empty?', correctAnswer: true, image: '/game-assets/math/numeral-1.png' },
      { type: 'yes-no', scenario: 'When we pour water IN, does the cup get more full?', correctAnswer: true, image: '/game-assets/math/remi-treasure-pile.png' },
      { type: 'family', guideText: 'Tonight at bath time or dinner, try filling and emptying cups with water. Which holds more? Full to the top — or empty to the bottom?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Full and Empty', guideText: 'You know full and empty, {name}!' }
    ]
  },

  { id: "math-3-5-13", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 13, title: "Making 5: Introduction to Addition", duration: "10-15 min", hook: "You have 2 apples. Your friend gives you 3 more. Now you have... 5 apples! You just did addition — combining two groups into one bigger group. Addition is one of the most important math operations, and it starts with understanding how small numbers combine to make bigger ones. Today we focus on all the ways to make 5. Remi the Raccoon found 2 acorns in the morning and 3 in the afternoon — he added them up to know his total.", bigIdea: "Addition means combining two groups to find the total — learning all the ways to make 5 (0+5, 1+4, 2+3, 3+2, 4+1, 5+0) builds number sense and prepares you for adding larger numbers.", sections: [ { title: "What Is Addition?", emoji: "➕", content: "Addition means putting groups together to find the total. If you have 2 red blocks and 3 blue blocks, you add them: 2 + 3 = 5 blocks total. The + sign means add or combine. The = sign means equals or the total is. Addition answers the question: how many altogether?" }, { title: "Ways to Make 5", emoji: "🖐️", content: "There are many ways to make 5: 0+5, 1+4, 2+3, 3+2, 4+1, 5+0. Each pair adds up to 5. You can see this on your fingers: hold up 1 finger on one hand and 4 on the other — that makes 5! Hold up 2 and 3 — still 5! These are called number pairs or partners of 5. Knowing these pairs by heart makes math faster." }, { title: "Using Objects to Add", emoji: "🧮", content: "When you are learning to add, use objects to help. Put 2 blocks on one side and 3 on the other. Push them together and count: 1, 2, 3, 4, 5. The answer is 5. Using real objects makes addition concrete — you can see and touch the math. As you get better, you will be able to add in your head without objects." }, { title: "Addition Stories", emoji: "📖", content: "Addition shows up in stories: you had 3 cookies and Mom gave you 2 more — how many now? There were 4 birds on the fence and 1 more landed — how many total? Turning stories into addition problems is an important skill. Whenever you hear how many altogether or how many in total, think addition." } ], activity: { title: "Making 5 with Fingers", instructions: "Hold up 5 fingers. Now practice all the ways to make 5: show 0 on one hand and 5 on the other (0+5=5). Show 1 and 4 (1+4=5). Show 2 and 3 (2+3=5). Show 3 and 2. Show 4 and 1. Show 5 and 0. Then use 5 blocks: put some on one side and the rest on the other. How many on each side? Write the number sentence. Try all combinations. Then make up addition stories: 2 dogs were playing, 3 more came — how many dogs now?" }, quiz: [ { question: "What does addition mean?", answer: "Combining two groups to find the total — how many altogether", options: ["Taking things away", "Combining two groups to find the total — how many altogether", "Splitting things in half", "Counting backward"] }, { question: "What is 2 + 3?", answer: "5", options: ["4", "5", "6", "23"] }, { question: "How many ways can you make 5 using two numbers?", answer: "Six ways: 0+5, 1+4, 2+3, 3+2, 4+1, 5+0", options: ["Only one way", "Six ways: 0+5, 1+4, 2+3, 3+2, 4+1, 5+0", "Only two ways", "Infinite ways"] }, { question: "What does the + sign mean?", answer: "Add — combine or put together", options: ["Subtract", "Add — combine or put together", "Equal", "Multiply"] }, { question: "If you have 4 crayons and get 1 more, how many do you have?", answer: "5 — because 4 + 1 = 5", options: ["4", "5 — because 4 + 1 = 5", "3", "6"] } ], familyAdventure: "Play Making 5 with snacks. Give each person 5 small snacks (grapes, crackers, berries). Eat some — how many are left? If you ate 2, you have 3 left (2+3=5). If you ate 4, you have 1 left (4+1=5). This is addition AND subtraction in one delicious activity. Then play Finger Flash: one person holds up some fingers on both hands (totaling 5). Everyone else says the number sentence (3+2=5!). Speed it up for a challenge.", badge: "Addition Ace", nextLesson: "math-3-5-14",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to ADD — to put groups together!' },
      { type: 'story', image: '/game-assets/math/remi-2plus3-stars.png', guideText: 'I have two stars in one paw and three stars in the other. I put them together. Two and three make FIVE! Adding is putting groups together!' },
      { type: 'count-array', count: 2, image: '/game-assets/math/star-single.png', interactive: false, instruction: 'Two stars here', guideText: 'Two stars in this group!' },
      { type: 'count-array', count: 3, image: '/game-assets/math/star-single.png', interactive: false, instruction: 'Three stars here', guideText: 'Three stars in this group!' },
      { type: 'count-array', count: 5, image: '/game-assets/math/star-single.png', interactive: true, celebrationNumber: 5, instruction: 'Two and three make FIVE!', guideText: 'Put them together and count them all!' },
      { type: 'teach', image: '/game-assets/math/numeral-5.png', guideText: 'Two plus three equals FIVE! Adding makes groups bigger!' },
      { type: 'tap-right', readOptions: true, instruction: 'One plus four equals?', guideText: 'Tap the right number!',
        items: [
          { image: '/game-assets/math/numeral-5.png', label: 'Five', correct: true },
          { image: '/game-assets/math/numeral-3.png', label: 'Three' },
          { image: '/game-assets/math/numeral-2.png', label: 'Two' },
          { image: '/game-assets/math/numeral-8.png', label: 'Eight' }
        ]
      },
      { type: 'family', guideText: 'Tonight at dinner, play Making 5. One person holds up some fingers. The other holds up the rest to make 5 together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Addition Ace', guideText: 'You are adding, {name}!' }
    ]
  },

  { id: "math-3-5-14", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 14, title: "Making 10: Addition Stories", duration: "10-15 min", hook: "Ten is the most important number in our math system — and knowing all the ways to make 10 is a math superpower. 7+3, 6+4, 5+5, 8+2, 9+1 — if you know these combinations by heart, you can solve bigger addition problems easily. Remi the Raccoon lines up his acorns in groups of 10 because it makes counting his whole collection faster.", bigIdea: "Learning all the number pairs that make 10 (1+9, 2+8, 3+7, 4+6, 5+5 and their reverses) is essential for mental math and is the foundation for adding larger numbers.", sections: [ { title: "Why 10 Is Special", emoji: "🔟", content: "Our entire number system is based on 10 (that is why it is called base-10). When you can make 10 easily, you can add much bigger numbers. For example: 8+5 is hard to picture. But 8+2=10, and 5 is 2+3, so 8+5 = 10+3 = 13. Making 10 is the bridge to adding any numbers. That is why it is a math superpower." }, { title: "Partners of 10", emoji: "🤝", content: "The number pairs that make 10 are: 0+10, 1+9, 2+8, 3+7, 4+6, 5+5, 6+4, 7+3, 8+2, 9+1, 10+0. Memorize these! Use your fingers: hold up 7 on both hands — how many are down? 3! So 7+3=10. Hold up 4 — how many are down? 6! So 4+6=10. Your fingers are a built-in 10-frame." }, { title: "Ten Frames", emoji: "🔲", content: "A ten frame is a grid with 2 rows of 5 boxes — 10 boxes total. Fill in some boxes with counters and count the empty ones. If you fill 6, there are 4 empty — so 6+4=10. Ten frames help you SEE how numbers relate to 10. They are one of the most powerful visual tools in early math." }, { title: "Addition Stories to 10", emoji: "📖", content: "Practice with stories: 7 ducks were swimming, 3 more joined — how many now? (7+3=10.) You had 4 stickers, your friend gave you 6 — how many total? (4+6=10.) There were 8 seats on the bus, 2 were empty — how many people were sitting? (8+2=10.) Every story that ends in 10 reinforces your partners of 10." } ], activity: { title: "Ten Frame Fun", instructions: "Draw a ten frame (2 rows of 5 squares). Use buttons, coins, or cereal as counters. Place 6 counters in the frame. How many empty squares? (4.) Write: 6+4=10. Clear the frame and try 3 counters — how many empty? (7.) Write: 3+7=10. Do this for every number from 0 to 10. Then quiz yourself: someone says 8, you say 2! (Because 8+2=10.) Speed it up until the pairs are automatic." }, quiz: [ { question: "What is 7 + 3?", answer: "10", options: ["9", "10", "11", "73"] }, { question: "What is the partner of 6 to make 10?", answer: "4 — because 6 + 4 = 10", options: ["6", "4 — because 6 + 4 = 10", "5", "3"] }, { question: "Why is making 10 called a math superpower?", answer: "Because knowing the pairs that make 10 helps you add bigger numbers more easily", options: ["It is not really a superpower", "Because knowing the pairs that make 10 helps you add bigger numbers more easily", "Because 10 is the biggest number", "Only teachers need to know this"] }, { question: "How many empty spaces in a ten frame if 8 are filled?", answer: "2 — because 8 + 2 = 10", options: ["8", "2 — because 8 + 2 = 10", "3", "10"] }, { question: "What is 5 + 5?", answer: "10 — two equal groups of 5 make 10", options: ["55", "10 — two equal groups of 5 make 10", "25", "8"] } ], familyAdventure: "Play Flash 10. One person holds up fingers (1-9). Everyone else holds up the number needed to make 10 as fast as they can. If the leader shows 3, everyone shows 7. If the leader shows 8, everyone shows 2. Go faster and faster. The goal is to make the partners of 10 automatic — no thinking needed. Then play Go Make 10 with a deck of cards (remove face cards). Lay 12 cards face up. Find pairs that add to 10 (6 and 4, 7 and 3). Remove pairs and replace with new cards. Keep going until no more pairs can be made.", badge: "Ten Maker", nextLesson: "math-3-5-15",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we ADD bigger groups to make TEN!' },
      { type: 'story', image: '/game-assets/math/remi-acorns-many.png', guideText: 'I have six acorns. My friend has four acorns. Together we have TEN! Six and four make ten. Adding is magic!' },
      { type: 'count-array', count: 6, image: '/game-assets/math/acorn-single.png', interactive: false, instruction: 'Six acorns', guideText: 'Six acorns in my pile!' },
      { type: 'count-array', count: 4, image: '/game-assets/math/acorn-single.png', interactive: false, instruction: 'Four more acorns', guideText: 'My friend has four acorns!' },
      { type: 'count-array', count: 10, image: '/game-assets/math/acorn-single.png', interactive: true, celebrationNumber: 10, instruction: 'Six and four make TEN!', guideText: 'Count them all together!' },
      { type: 'teach', image: '/game-assets/math/numeral-10.png', guideText: 'Six plus four equals TEN! Many different groups can add up to ten!' },
      { type: 'tap-right', readOptions: true, instruction: 'Five plus five equals?', guideText: 'Tap the right answer!',
        items: [
          { image: '/game-assets/math/numeral-10.png', label: 'Ten', correct: true },
          { image: '/game-assets/math/numeral-5.png', label: 'Five' },
          { image: '/game-assets/math/numeral-7.png', label: 'Seven' },
          { image: '/game-assets/math/numeral-2.png', label: 'Two' }
        ]
      },
      { type: 'family', guideText: 'Tonight, play Ten Buddies. One person says a number. The other says what plus that number makes ten. Three and SEVEN make ten!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Ten Maker', guideText: 'You made ten, {name}!' }
    ]
  },

  { id: "math-3-5-15", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 15, title: "Taking Away: Introduction to Subtraction", duration: "10-15 min", hook: "You have 5 cookies. You eat 2. How many are left? 3! You just did subtraction — taking away from a group to find out how many remain. Subtraction is the opposite of addition, and it is just as important. Every time you share, spend, eat, or lose something, you are subtracting. Remi the Raccoon had 8 acorns but a squirrel stole 3 — Remi needs subtraction to know how many he has left.", bigIdea: "Subtraction means taking away from a group to find how many remain — it is the inverse of addition, uses the minus sign (-), and answers questions about how many are left or how many more one group has.", sections: [ { title: "What Is Subtraction?", emoji: "➖", content: "Subtraction means taking away. If you start with 5 toys and give away 2, you subtract: 5 - 2 = 3. The - sign means minus or take away. The = sign tells you the result. Subtraction answers questions like: how many are left? How many remain? How many fewer?" }, { title: "Subtraction with Objects", emoji: "🧮", content: "Start with 5 blocks. Take 1 away. Count what remains: 4. So 5 - 1 = 4. Start with 7 grapes. Eat 3. Count what remains: 4. So 7 - 3 = 4. Using real objects helps you see subtraction happening. The group gets smaller when you take away — and counting what is left gives you the answer." }, { title: "Subtraction Stories", emoji: "📖", content: "Subtraction appears in daily stories: there were 6 birds on the fence, 2 flew away — how many are left? (6-2=4.) You had 10 stickers, you gave 4 to your friend — how many do you have now? (10-4=6.) There were 8 slices of pizza, your family ate 5 — how many remain? (8-5=3.) Whenever you hear how many are left, think subtraction." }, { title: "Addition and Subtraction Are Related", emoji: "🔄", content: "Addition and subtraction are opposites — they undo each other. If 3+2=5, then 5-2=3. If you add 4 to a group and then subtract 4, you are back where you started. Knowing addition facts helps you with subtraction, and knowing subtraction helps you check your addition. Remi says: addition puts together, subtraction takes apart — they are partners." } ], activity: { title: "Cookie Subtraction", instructions: "Use 10 real snacks (crackers, grapes, or cereal pieces) as your math manipulatives. Start with 10. Eat 1 — how many left? (10-1=9.) Eat 2 more — how many now? (9-2=7.) Keep going until they are all gone. Write each subtraction sentence as you go. Then try it with a specific starting number: start with 8 blocks, take away 3 — how many left? Write 8-3=5. Do 5 different subtraction problems with your snacks or blocks." }, quiz: [ { question: "What does subtraction mean?", answer: "Taking away from a group to find how many remain", options: ["Putting groups together", "Taking away from a group to find how many remain", "Counting forward", "Making groups equal"] }, { question: "What is 5 - 2?", answer: "3", options: ["7", "3", "2", "52"] }, { question: "What does the minus sign (-) mean?", answer: "Take away or subtract", options: ["Add", "Take away or subtract", "Equals", "Multiply"] }, { question: "If you have 8 stickers and give away 3, how many do you have left?", answer: "5 — because 8 - 3 = 5", options: ["11", "5 — because 8 - 3 = 5", "3", "83"] }, { question: "How are addition and subtraction related?", answer: "They are opposites — addition puts together and subtraction takes apart", options: ["They are the same thing", "They are opposites — addition puts together and subtraction takes apart", "They are not related at all", "Only one of them is real math"] } ], familyAdventure: "Play the Subtraction Snack Game. Each person starts with 10 small snacks. Roll a die — subtract that number of snacks (eat them!). Say the math sentence out loud: 10 minus 4 equals 6! Roll again and subtract from what is left. Keep going until someone reaches exactly zero. Then play Finger Subtraction: hold up 8 fingers, put 3 down — how many are still up? (5!) This is subtraction you can see and feel.", badge: "Take Away Hero", nextLesson: "math-3-5-16",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to SUBTRACT — to take away!' },
      { type: 'story', image: '/game-assets/math/remi-sharing-stars.png', guideText: 'I had five stars. I gave two to my friend. How many do I have left? Three! Taking away makes groups smaller. That is subtracting!' },
      { type: 'count-array', count: 5, image: '/game-assets/math/star-single.png', interactive: false, instruction: 'Five stars to start', guideText: 'I have five stars!' },
      { type: 'teach', image: '/game-assets/math/numeral-5.png', guideText: 'Now two fly away. Let us see what is left!' },
      { type: 'count-array', count: 3, image: '/game-assets/math/star-single.png', interactive: true, celebrationNumber: 3, instruction: 'Three stars left!', guideText: 'Count what is left!' },
      { type: 'teach', image: '/game-assets/math/numeral-3.png', guideText: 'Five take away two equals THREE. Subtracting takes some away!' },
      { type: 'tap-right', readOptions: true, instruction: 'Four take away one equals?', guideText: 'Tap the answer!',
        items: [
          { image: '/game-assets/math/numeral-3.png', label: 'Three', correct: true },
          { image: '/game-assets/math/numeral-4.png', label: 'Four' },
          { image: '/game-assets/math/numeral-5.png', label: 'Five' },
          { image: '/game-assets/math/numeral-1.png', label: 'One' }
        ]
      },
      { type: 'family', guideText: 'Tonight at snack time, play Take Away. Start with five cheerios. Eat two. How many left? Eat one more. How many left? Keep going until zero!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Take Away Hero', guideText: 'You are subtracting, {name}!' }
    ]
  },

  { id: "math-3-5-16", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 16, title: "Telling Time: Clocks and Calendars", duration: "10-15 min", hook: "What time do you wake up? What time is lunch? What time is bedtime? Time organizes your whole day — and understanding clocks and calendars helps you know when things happen. Remi the Raccoon tells time by the sun's position, but humans invented clocks and calendars to be more precise.", bigIdea: "Time is measured using clocks (hours and minutes for daily events) and calendars (days, weeks, months for longer periods) — and understanding both helps you plan, organize, and navigate daily life.", sections: [ { title: "Clocks Tell Time", emoji: "🕐", content: "A clock has two hands: the short hour hand tells the hour, and the long minute hand tells the minutes. When the minute hand points to 12 and the hour hand points to 3, it is 3 o'clock. Digital clocks show time with numbers: 3:00. There are 12 hours on a clock face, and the hands go around twice each day (AM for morning, PM for afternoon/evening)." }, { title: "Hours in a Day", emoji: "☀️", content: "A day has 24 hours. You sleep for about 10 hours, go to school or play for about 8 hours, eat meals for about 2 hours, and have free time for about 4 hours. Each hour has 60 minutes. Each minute has 60 seconds. Understanding this structure helps you plan your day and know how much time you have for activities." }, { title: "Days, Weeks, and Months", emoji: "📅", content: "A week has 7 days: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. A month has about 30 days (some have 28, 29, or 31). A year has 12 months and 365 days. Calendars show all the days in a month in a grid. You can mark special days: birthdays, holidays, school events. Calendars help you plan ahead and count down to exciting events." }, { title: "Time Words", emoji: "⏰", content: "Time vocabulary helps you communicate: yesterday (the day before today), today (right now), tomorrow (the day after today), morning, afternoon, evening, night, before, after, soon, later, earlier. Using these words correctly shows you understand how time flows. Remi says: time moves in one direction — forward — so use it wisely." } ], activity: { title: "Make a Clock", instructions: "Make a clock from a paper plate. Write numbers 1-12 around the edge (like a clock face). Cut two arrows from cardboard — a short one (hour hand) and a long one (minute hand). Attach them to the center with a brad or tape. Practice: set your clock to 3:00 (hour hand on 3, minute hand on 12). Then 7:00. Then 12:00. Then ask a grownup what time key events happen and set your clock: wake up time, lunch time, bedtime." }, quiz: [ { question: "Which clock hand tells the hour?", answer: "The short hand — it moves slowly from number to number", options: ["The long hand", "The short hand — it moves slowly from number to number", "Both hands", "Neither hand"] }, { question: "How many hours are in a day?", answer: "24 hours", options: ["12 hours", "24 hours", "60 hours", "100 hours"] }, { question: "How many days are in a week?", answer: "7 — Sunday through Saturday", options: ["5", "7 — Sunday through Saturday", "10", "30"] }, { question: "What does 3:00 look like on a clock?", answer: "The hour hand points to 3 and the minute hand points to 12", options: ["Both hands point to 3", "The hour hand points to 3 and the minute hand points to 12", "The minute hand points to 3", "The hour hand points to 12"] }, { question: "How many months are in a year?", answer: "12", options: ["7", "12", "52", "365"] } ], familyAdventure: "Create a Daily Schedule together. Draw a timeline of your child's typical day from wake-up to bedtime. Mark key events with clock times: 7:00 Wake up, 8:00 Breakfast, 9:00 School/play, 12:00 Lunch, 3:00 Free time, 6:00 Dinner, 8:00 Bedtime. Then practice reading times on both analog and digital clocks throughout the day. Also mark upcoming events on a calendar and count: how many days until [birthday/holiday/trip]? Time becomes real when connected to things you care about.", badge: "Time Keeper", nextLesson: "math-3-5-17",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to read CLOCKS!' },
      { type: 'story', image: '/game-assets/math/clock-12.png', guideText: 'I look at the clock to know when to wake up, when to eat, and when to sleep. The clock has two hands. The short one points to the hour!' },
      { type: 'teach', image: '/game-assets/math/clock-12.png', guideText: 'When both hands point UP at the twelve, it is twelve o\'clock!' },
      { type: 'tap-right', readOptions: true, instruction: 'Which clock shows three o\'clock?', guideText: 'Tap the one where the short hand points to the three!',
        items: [
          { image: '/game-assets/math/clock-3.png', label: 'Three o\'clock', correct: true },
          { image: '/game-assets/math/clock-12.png', label: 'Twelve o\'clock' },
          { image: '/game-assets/math/clock-6.png', label: 'Six o\'clock' },
          { image: '/game-assets/math/clock-9.png', label: 'Nine o\'clock' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/clock-6.png', guideText: 'At six o\'clock, the short hand points down. That might be dinner time!' },
      { type: 'tap-right', readOptions: true, instruction: 'Which clock shows nine o\'clock?', guideText: 'Tap the right one!',
        items: [
          { image: '/game-assets/math/clock-9.png', label: 'Nine o\'clock', correct: true },
          { image: '/game-assets/math/clock-3.png', label: 'Three o\'clock' },
          { image: '/game-assets/math/clock-6.png', label: 'Six o\'clock' },
          { image: '/game-assets/math/clock-12.png', label: 'Twelve o\'clock' }
        ]
      },
      { type: 'yes-no', scenario: 'Does the short hand tell us the hour?', correctAnswer: true, image: '/game-assets/math/clock-12.png' },
      { type: 'family', guideText: 'Tonight, point out the clock at bedtime. What time is it? What time do you wake up? Practice reading the clock together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Time Keeper', guideText: 'You can read a clock, {name}!' }
    ]
  },

  { id: "math-3-5-17", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 17, title: "Counting Money: Pennies, Nickels, and Dimes", duration: "10-15 min", hook: "Clink, clink, clink — coins in a piggy bank! Each coin has a different value: a penny is worth 1 cent, a nickel is worth 5 cents, and a dime is worth 10 cents. Learning to count coins is where math meets real life. Remi the Raccoon cannot use money, but he admires how humans invented this system of counting value.", bigIdea: "US coins have specific values (penny=1¢, nickel=5¢, dime=10¢, quarter=25¢) — counting coins combines skip counting, addition, and value recognition into a practical life skill.", sections: [ { title: "Know Your Coins", emoji: "🪙", content: "A penny is copper-colored and worth 1 cent (1¢). A nickel is silver, larger than a penny, and worth 5 cents (5¢). A dime is silver, the smallest coin, and worth 10 cents (10¢). A quarter is silver, the largest common coin, and worth 25 cents (25¢). Learning to identify each coin by sight and feel is the first step." }, { title: "Counting Pennies", emoji: "1️⃣", content: "Pennies are the easiest to count because each one is worth 1 cent. Count them like regular counting: 1, 2, 3, 4, 5 — five pennies equal 5 cents. Ten pennies equal 10 cents (or one dime). One hundred pennies equal one dollar. Penny counting is just regular counting with a ¢ symbol." }, { title: "Counting Nickels and Dimes", emoji: "5️⃣", content: "Nickels are worth 5 cents each, so you count by fives: 5, 10, 15, 20, 25. Four nickels = 20 cents. Dimes are worth 10 cents each, so you count by tens: 10, 20, 30, 40, 50. Five dimes = 50 cents. Skip counting (by 5s and 10s) makes counting these coins fast." }, { title: "Mixing Coins", emoji: "💰", content: "The real challenge is counting mixed coins. Strategy: start with the largest coins and count down. Count quarters first (by 25s), then dimes (by 10s), then nickels (by 5s), then pennies (by 1s). For example: 1 quarter + 2 dimes + 1 nickel = 25 + 10 + 10 + 5 = 50 cents. This strategy keeps your counting organized." } ], activity: { title: "Coin Counting Practice", instructions: "Gather real coins: at least 10 pennies, 5 nickels, 5 dimes, and 4 quarters. First sort them by type. Count each type: how many cents in your penny pile? Nickel pile? Dime pile? Quarter pile? Then make combinations: can you make 10 cents using only pennies? (10 pennies.) Using nickels? (2 nickels.) Using one dime? (1 dime.) Can you make 25 cents three different ways? Then play Store with real coins — price items at 5¢, 10¢, 15¢, 25¢ and practice paying the right amount." }, quiz: [ { question: "How much is a nickel worth?", answer: "5 cents", options: ["1 cent", "5 cents", "10 cents", "25 cents"] }, { question: "Which coin is worth the most: penny, nickel, or dime?", answer: "Dime — worth 10 cents, even though it is the smallest in size", options: ["Penny — because it is the most common", "Dime — worth 10 cents, even though it is the smallest in size", "Nickel — because it is the biggest", "They are all worth the same"] }, { question: "How many nickels make 25 cents?", answer: "5 nickels (5+5+5+5+5=25)", options: ["25 nickels", "5 nickels (5+5+5+5+5=25)", "3 nickels", "10 nickels"] }, { question: "How many pennies equal one dime?", answer: "10 pennies = 10 cents = 1 dime", options: ["5 pennies", "10 pennies = 10 cents = 1 dime", "25 pennies", "1 penny"] }, { question: "When counting mixed coins, which should you count first?", answer: "The largest coins — quarters, then dimes, then nickels, then pennies", options: ["Pennies first — they are the smallest", "The largest coins — quarters, then dimes, then nickels, then pennies", "It does not matter — count in any order", "Only count one type at a time"] } ], familyAdventure: "Set up a Family Coin Store. Price household items at coin-friendly amounts: toy car = 15¢, book = 30¢, crayon = 5¢, stuffed animal = 50¢. Give each person a mix of coins totaling $1.00. Shop! Practice paying the right amount and making change. The cashier counts the payment and confirms it is correct. Rotate roles. Then count everyone's remaining coins at the end — who spent the most? Who saved the most? This is real financial literacy in action.", badge: "Coin Collector", nextLesson: "math-3-5-18",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about COINS!' },
      { type: 'story', image: '/game-assets/math/coin-penny.png', guideText: 'I found shiny coins in the forest! A copper one is a PENNY. A bigger silver one is a NICKEL. A smaller silver one is a DIME. Each coin has its own name!' },
      { type: 'teach', image: '/game-assets/math/coin-penny.png', guideText: 'A penny is worth one cent. The smallest amount!' },
      { type: 'tap-right', readOptions: true, instruction: 'Which coin is a PENNY?', guideText: 'Tap the copper-colored coin!',
        items: [
          { image: '/game-assets/math/coin-penny.png', label: 'Penny', correct: true },
          { image: '/game-assets/math/coin-nickel.png', label: 'Nickel' },
          { image: '/game-assets/math/coin-dime.png', label: 'Dime' },
          { image: '/game-assets/math/coin-quarter.png', label: 'Quarter' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/coin-nickel.png', guideText: 'A nickel is worth five cents. It is bigger than a penny!' },
      { type: 'tap-right', readOptions: true, instruction: 'Which coin is a DIME?', guideText: 'Tap the smallest silver coin!',
        items: [
          { image: '/game-assets/math/coin-dime.png', label: 'Dime', correct: true },
          { image: '/game-assets/math/coin-nickel.png', label: 'Nickel' },
          { image: '/game-assets/math/coin-penny.png', label: 'Penny' },
          { image: '/game-assets/math/coin-quarter.png', label: 'Quarter' }
        ]
      },
      { type: 'family', guideText: 'Tonight, find coins together at home. Look at the pictures on each one. A penny has Abraham Lincoln. Can you find all three kinds?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Coin Collector', guideText: 'You know your coins, {name}!' }
    ]
  },

  { id: "math-3-5-18", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 18, title: "Addition and Subtraction Word Stories", duration: "10-15 min", hook: "Math is not just numbers on paper — it is stories! You had 3 stickers and got 2 more — how many now? There were 7 birds, 4 flew away — how many are left? Every day you encounter situations where you need to add or subtract. Turning real-life situations into math problems is one of the most important skills you will learn. Remi the Raccoon solves word problems every day: if I found 6 acorns and ate 2, how many can I save?", bigIdea: "Word problems connect math to real life — learning to identify whether a situation requires addition (combining) or subtraction (taking away) and then solving it builds practical mathematical thinking.", sections: [ { title: "Addition Stories", emoji: "➕", content: "Addition stories involve groups coming together. Keywords that signal addition: more, total, altogether, in all, combined, joined, both. Example: There were 4 ducks in the pond. 3 more swam over. How many ducks in all? 4 + 3 = 7 ducks. When you hear groups joining or amounts increasing, think addition." }, { title: "Subtraction Stories", emoji: "➖", content: "Subtraction stories involve things going away or being removed. Keywords that signal subtraction: left, fewer, remain, went away, ate, lost, gave away, difference. Example: You had 8 grapes. You ate 5. How many are left? 8 - 5 = 3 grapes. When you hear amounts decreasing or things disappearing, think subtraction." }, { title: "Drawing to Solve", emoji: "✏️", content: "When a word problem seems tricky, draw a picture! Draw the objects in the story. Cross out the ones that leave (subtraction). Add new ones that arrive (addition). Count what remains. Drawing turns abstract problems into something you can see. Many mathematicians draw pictures to solve problems — it is not just for beginners." }, { title: "Making Your Own Stories", emoji: "📝", content: "The best way to understand word problems is to create your own. Look around and make up math stories: there are 3 chairs at the table, we need 2 more for guests — how many total? There were 6 crackers on the plate, I ate 4 — how many are left? Every situation is a potential word problem. Remi says: the world is full of math stories — you just have to notice them." } ], activity: { title: "Story Problem Creator", instructions: "Create 5 word problems based on real things in your home. Example: There are [count] books on the shelf. If we add [number] more, how many will there be? Or: There are [count] toys on the floor. If you put [number] away, how many are left? Write or dictate each problem. Then solve each one using objects, drawings, or fingers. Then quiz a family member with your problems. Creating problems requires deeper understanding than just solving them." }, quiz: [ { question: "There were 6 apples. You ate 2. How many are left?", answer: "4 — because 6 - 2 = 4", options: ["8", "4 — because 6 - 2 = 4", "2", "62"] }, { question: "You had 3 toys. You got 4 more. How many do you have now?", answer: "7 — because 3 + 4 = 7", options: ["1", "7 — because 3 + 4 = 7", "34", "12"] }, { question: "Which keyword tells you to add?", answer: "Altogether — as in how many altogether", options: ["Left", "Altogether — as in how many altogether", "Remaining", "Fewer"] }, { question: "Which keyword tells you to subtract?", answer: "Left — as in how many are left", options: ["Total", "Left — as in how many are left", "In all", "Combined"] }, { question: "What should you do if a word problem is confusing?", answer: "Draw a picture of the story — seeing the objects helps you figure out the math", options: ["Give up", "Draw a picture of the story — seeing the objects helps you figure out the math", "Guess a random number", "Skip it and do the next one"] } ], familyAdventure: "Turn your whole evening into word problems. At dinner: we started with 12 chicken nuggets. Dad ate 3. How many are left? During cleanup: there are 5 dirty plates. We washed 2. How many are left to wash? At bedtime: you have 8 stuffed animals. 3 are on the bed. How many are on the shelf? Make it a game: whoever spots a word problem situation first gets a point. Math is everywhere when you start looking.", badge: "Story Solver", nextLesson: "math-3-5-19",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we solve MATH STORIES!' },
      { type: 'story', image: '/game-assets/math/remi-birds-branch.png', guideText: 'I tell stories with math! Three birds sat on a branch. Two more joined. How many now? Stories help us see when to add and when to take away!' },
      { type: 'teach', image: '/game-assets/math/numeral-3.png', guideText: 'Three birds plus two more is adding! Three plus two equals FIVE.' },
      { type: 'tap-right', readOptions: true, instruction: 'Three birds plus two birds equals?', guideText: 'Tap the right number!',
        items: [
          { image: '/game-assets/math/numeral-5.png', label: 'Five', correct: true },
          { image: '/game-assets/math/numeral-3.png', label: 'Three' },
          { image: '/game-assets/math/numeral-2.png', label: 'Two' },
          { image: '/game-assets/math/numeral-10.png', label: 'Ten' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/numeral-5.png', guideText: 'Now listen! I had five acorns. I ate two. How many left? Taking away!' },
      { type: 'tap-right', readOptions: true, instruction: 'Five acorns, Remi eats two. How many left?', guideText: 'Tap the answer!',
        items: [
          { image: '/game-assets/math/numeral-3.png', label: 'Three', correct: true },
          { image: '/game-assets/math/numeral-5.png', label: 'Five' },
          { image: '/game-assets/math/numeral-7.png', label: 'Seven' },
          { image: '/game-assets/math/numeral-2.png', label: 'Two' }
        ]
      },
      { type: 'yes-no', scenario: 'When things JOIN TOGETHER, do we add?', correctAnswer: true, image: '/game-assets/math/math-celebration.png' },
      { type: 'family', guideText: 'Tonight at dinner, make up math stories together. You have three grapes, mom gives you two more — how many? Take turns telling stories!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Story Solver', guideText: 'You solved the stories, {name}!' }
    ]
  },

  { id: "math-3-5-19", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 19, title: "Numbers Are Everywhere: Math in Daily Life", duration: "10-15 min", hook: "Look at the numbers around you right now: the clock on the wall, the temperature on the thermostat, the channel on the TV, the numbers on your address, the price tags at the store, the speed limit on the road. Numbers are not just in math class — they run the world. Today we celebrate how math shows up in every part of your daily life. Remi the Raccoon sees math in the forest too: patterns in pine cones, symmetry in butterflies, and geometry in spider webs.", bigIdea: "Mathematics is not just a school subject — numbers, patterns, and mathematical thinking appear everywhere in daily life, from cooking and shopping to telling time and understanding the world.", sections: [ { title: "Numbers at Home", emoji: "🏠", content: "Your home is full of numbers: the address on your house, the temperature on the thermostat, the time on the clock, the channels on the TV, the timer on the microwave, the settings on the washing machine. Every appliance uses numbers. Every recipe uses numbers. Even organizing your room uses mathematical thinking (sorting, arranging, fitting things into spaces)." }, { title: "Numbers Out and About", emoji: "🚗", content: "Outside your home, numbers are everywhere: speed limit signs, addresses, prices, phone numbers, license plates, bus routes, building floors, aisle numbers at the store. When you pay at a store, math calculates your change. When your parent fills the gas tank, math measures the gallons. When you check the weather, math gives you the temperature." }, { title: "Math Without Numbers", emoji: "🧠", content: "Even when you do not see numbers, you are using math. Figuring out which shoe fits which foot (matching). Deciding if a piece fits in a puzzle (spatial reasoning). Sharing equally with friends (division). Finding the shortest route to school (optimization). Recognizing patterns in music (pattern recognition). Math is a way of thinking, not just a subject in school." }, { title: "You Are Already a Mathematician", emoji: "🌟", content: "Every time you count, measure, compare, sort, share, build, or find a pattern, you are doing math. You started doing math before you could talk — sorting toys, stacking blocks, figuring out how many crackers you have. You are already a mathematician. The more math you learn, the more powerful your thinking becomes. Remi says: math is not something you DO — it is something you ARE." } ], activity: { title: "Math in My Day Journal", instructions: "For one full day, notice every time you use math or see numbers. Keep a Math Journal and write or draw each example: I counted 7 steps. I saw the number 25 on a speed limit sign. I shared 6 crackers equally with my sister (3 each). I noticed a pattern on my shirt. I compared two glasses to see which had more. Try to find at least 15 examples. You will be amazed — math is in everything." }, quiz: [ { question: "Where do you see numbers outside of school?", answer: "Everywhere — clocks, addresses, prices, speed limits, temperatures, recipes, and more", options: ["Nowhere — numbers are only in school", "Everywhere — clocks, addresses, prices, speed limits, temperatures, recipes, and more", "Only at the store", "Only on phones"] }, { question: "Is sharing crackers equally with a friend a type of math?", answer: "Yes — dividing equally is division, which is a fundamental math operation", options: ["No — that is just being nice", "Yes — dividing equally is division, which is a fundamental math operation", "Only if you use a calculator", "Only if a teacher is watching"] }, { question: "What kind of math is recognizing a pattern on a shirt?", answer: "Pattern recognition — finding and understanding repeating sequences is mathematical thinking", options: ["That is not math — it is fashion", "Pattern recognition — finding and understanding repeating sequences is mathematical thinking", "Only colors are patterns", "Patterns are only in nature"] }, { question: "Are you already a mathematician?", answer: "Yes — every time you count, compare, sort, share, or find a pattern, you are doing math", options: ["No — only adults with degrees are mathematicians", "Yes — every time you count, compare, sort, share, or find a pattern, you are doing math", "Only if you are good at math in school", "Not until you learn algebra"] }, { question: "Why is math important in daily life?", answer: "It helps you count, measure, compare, cook, shop, tell time, plan, build, and understand the world", options: ["It is not important outside school", "It helps you count, measure, compare, cook, shop, tell time, plan, build, and understand the world", "Only for passing tests", "Only for scientists and engineers"] } ], familyAdventure: "Go on a Family Math Walk. Walk around your neighborhood for 15 minutes and spot as much math as possible: house numbers (what is the pattern?), shapes in architecture, symmetry in buildings, speed limit signs, distances on signs. Each person keeps their own tally. Who spots the most math? Then at home, cook a simple recipe together and focus on the math: measuring cups, counting ingredients, timing, temperatures. Math is the invisible language that runs the world — and now you can see it everywhere.", badge: "Math Detective", nextLesson: "math-3-5-20",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Math is EVERYWHERE — let us look!' },
      { type: 'story', image: '/game-assets/math/remi-forest.png', guideText: 'I use math all day! Counting friends at the park. Measuring how tall I am growing. Telling time for breakfast. Math is a superpower!' },
      { type: 'teach', image: '/game-assets/math/math-celebration.png', guideText: 'We use math when we count, when we cook, when we tell time, and when we play games!' },
      { type: 'tap-right', readOptions: true, instruction: 'Where do we use math?', guideText: 'Tap the right answer!',
        items: [
          { image: '/game-assets/math/math-celebration.png', label: 'Everywhere!', correct: true },
          { image: '/game-assets/math/numeral-1.png', label: 'Only in school' },
          { image: '/game-assets/math/star-single.png', label: 'Only at night' },
          { image: '/game-assets/math/acorn-single.png', label: 'Only on weekends' }
        ]
      },
      { type: 'teach', image: '/game-assets/math/coin-penny.png', guideText: 'At the store, we count money. In the kitchen, we measure. At bedtime, we read the clock. Math helps us every day!' },
      { type: 'yes-no', scenario: 'Do people use math even when they are grown-ups?', correctAnswer: true, image: '/game-assets/math/math-celebration.png' },
      { type: 'yes-no', scenario: 'Can math make life easier and more fun?', correctAnswer: true, image: '/game-assets/math/math-celebration.png' },
      { type: 'family', guideText: 'Tonight, find five places where you used math today. At breakfast? At school? At bedtime? Math is sneaky — it is everywhere!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Math Detective', guideText: 'You see math everywhere, {name}!' }
    ]
  },

  { id: "math-3-5-20", subject: "Mathematics", ageGroup: "3-5", band: "Little Stars", guide: "Remi", guideAnimal: "Raccoon", lessonNumber: 20, title: "Putting It All Together: Math Review", duration: "10-15 min", hook: "You have learned to count, compare, sort, find patterns, measure, tell time, count money, add, and subtract. You know shapes — flat and solid. You see math everywhere in your daily life. Today we put it all together and celebrate everything you have learned. You are not just learning math — you ARE a mathematician. Remi the Raccoon is incredibly proud of how far you have come.", bigIdea: "Mathematics is an interconnected system — counting leads to comparing, comparing leads to adding and subtracting, shapes connect to measurement, and patterns connect everything — and you have built a strong foundation for a lifetime of mathematical thinking.", sections: [ { title: "What You Have Learned", emoji: "📚", content: "You can count to 100. You know number order and can count forward and backward. You can compare numbers (more, less, equal). You recognize and name 2D and 3D shapes. You can sort and find patterns. You can measure length, weight, and capacity. You can tell time and count money. You can add and subtract small numbers. You can solve word problems. That is an incredible foundation." }, { title: "How It All Connects", emoji: "🔗", content: "Math skills build on each other like blocks in a tower. Counting leads to comparing. Comparing leads to adding and subtracting. Shapes connect to measurement. Patterns connect to multiplication (which you will learn next). Money uses all of these skills together. Understanding connections makes you a flexible, powerful thinker." }, { title: "Math Is Your Superpower", emoji: "💪", content: "Math gives you superpowers: the power to count anything, measure anything, compare anything, find patterns in anything, and solve problems logically. These powers work in school, at home, at the store, in the kitchen, and everywhere else. The more you practice, the stronger your powers become." }, { title: "What Is Next", emoji: "🚀", content: "You are ready for bigger math adventures: multiplication, bigger numbers, fractions, more complex shapes, data and graphs, and real-world problem solving. But do not rush — keep practicing what you have learned until it feels automatic. Remi says: a strong foundation makes everything built on top of it stronger. You have built an amazing foundation. The math journey continues — and it only gets more exciting from here." } ], activity: { title: "Math Olympics", instructions: "Hold a Math Olympics with 5 events: (1) Speed Counting: count to 50 as fast as you can. (2) Shape Hunt: find 5 different shapes in 2 minutes. (3) Pattern Creator: make the most complex pattern in 1 minute. (4) Addition Challenge: solve 5 addition problems (use fingers or objects). (5) Measurement Quest: measure 3 objects with a ruler. Award gold, silver, and bronze medals (draw them on paper). Celebrate every participant — everyone who completed the Little Stars math journey is a champion." }, quiz: [ { question: "What is 6 + 3?", answer: "9", options: ["8", "9", "63", "10"] }, { question: "What is 10 - 4?", answer: "6", options: ["14", "6", "5", "7"] }, { question: "How many sides does a rectangle have?", answer: "4", options: ["3", "4", "5", "6"] }, { question: "What comes next in the pattern: 5, 10, 15, 20, ___?", answer: "25 — the pattern adds 5 each time", options: ["21", "25 — the pattern adds 5 each time", "30", "22"] }, { question: "Which is more: 8 or 5?", answer: "8 — because 8 is farther along the number line", options: ["5", "8 — because 8 is farther along the number line", "They are equal", "Neither"] } ], familyAdventure: "Hold a Math Celebration. Each family member shares their favorite math lesson from the course and demonstrates one skill they learned. Then do one final activity together: build the tallest tower you can from blocks or household items, measuring its height, counting the pieces used, and identifying the shapes involved. This combines counting, measurement, shapes, and problem-solving into one grand finale. Remi the Raccoon is immensely proud of every young mathematician who completed this journey. You can count, compare, add, subtract, measure, and find patterns — these are the building blocks of all mathematics. The adventure is just beginning.", badge: "Math Star", nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today is a BIG celebration — you learned so much math!' },
      { type: 'story', image: '/game-assets/math/remi-treasure-pile.png', guideText: 'I am so proud of you! You count. You add. You subtract. You find shapes and patterns. You read clocks and coins. You are a MATH STAR!' },
      { type: 'count-array', count: 10, image: '/game-assets/math/star-single.png', interactive: true, celebrationNumber: 10, instruction: 'Count to ten one more time!', guideText: 'Let us count all the way to ten!' },
      { type: 'teach', image: '/game-assets/math/math-celebration.png', guideText: 'You can count, add, subtract, and see patterns. You are a math treasure!' },
      { type: 'tap-right', readOptions: true, instruction: 'What shape is ROUND?', guideText: 'Tap the round one!',
        items: [
          { image: '/game-assets/math/shape-circle.png', label: 'Circle', correct: true },
          { image: '/game-assets/math/shape-square.png', label: 'Square' },
          { image: '/game-assets/math/shape-triangle.png', label: 'Triangle' },
          { image: '/game-assets/math/shape-rectangle.png', label: 'Rectangle' }
        ]
      },
      { type: 'tap-right', readOptions: true, instruction: 'Two plus three equals?', guideText: 'Tap the answer!',
        items: [
          { image: '/game-assets/math/numeral-5.png', label: 'Five', correct: true },
          { image: '/game-assets/math/numeral-3.png', label: 'Three' },
          { image: '/game-assets/math/numeral-2.png', label: 'Two' },
          { image: '/game-assets/math/numeral-7.png', label: 'Seven' }
        ]
      },
      { type: 'yes-no', scenario: 'Are YOU a math star?', correctAnswer: true, image: '/game-assets/math/math-celebration.png' },
      { type: 'family', guideText: 'Tonight, celebrate together! Have each family member count something they love — steps, stars, kisses, hugs. Math is the language of love!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Math Star', guideText: 'You are a math star, {name}! I am so proud of you!' }
    ]
  },

];

export default mathLittleStars;
