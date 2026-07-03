// ============================================================
// math_ue_l01_v2.js — Coreverse Academy
// Math UE L01 v2: Place Value to 1,000,000
// Manipulative-first rebuild. 8-screen format for MathLessonPlayer.
// Blocks build to 999 concretely; quick-check bridges to
// larger numbers abstractly.
// Guide: Remi the Raccoon.
// ============================================================

export const mathUeL01V2 = {
  id: "math-9-10-01",
  version: 2,
  subject: "Math",
  ageGroup: "9-10",
  band: "Upper Explorers",
  guide: "Remi",
  guideAnimal: "Raccoon",
  lessonNumber: 1,
  title: "Place Value to 1,000,000 — Building Numbers",
  duration: "13-18 min",
  badge: "Place Value Pro",
  xp: 100,

  screens: [
    // ── 1. WELCOME ──────────────────────────────────────────
    {
      type: "welcome",
      audio:
        "Hey there! Today we're going to BUILD numbers. Not read about them. Build them, with actual blocks you can drag around. Ready? Let's go.",
      buttonLabel: "Start",
    },

    // ── 2. EXPLORE (free play) ──────────────────────────────
    {
      type: "explore",
      minSeconds: 30,
      audio:
        "Drag some blocks up. See what happens. The number at the top shows what you've made. Play with it. Try putting ten small ones together and watch closely.",
      continueAudio:
        "Cool. You're getting it. Let's try some specific numbers.",
    },

    // ── 3. GUIDED TASKS ─────────────────────────────────────
    {
      type: "guided-task",
      tasks: [
        {
          target: 23,
          prompt: "Make the number 23",
          audio:
            "First challenge. Make the number twenty three. Watch the counter at the top. Tap Check when you think you've got it.",
          hint:
            "Try making one rod first. That's ten. How many tens are in twenty three?",
          successAudio:
            "Yes! Two rods and three units. Two tens and three ones make twenty three.",
        },
        {
          target: 147,
          prompt: "Make the number 147",
          audio:
            "Now a bigger one. Make one hundred forty seven. You'll need one of the big squares for this.",
          hint:
            "The big square is worth one hundred. Start with one of those. Then how many tens do you need?",
          successAudio:
            "Perfect! One flat, four rods, seven units. One hundred, four tens, seven ones.",
        },
        {
          target: 305,
          prompt: "Make the number 305",
          audio:
            "Last one, and it's tricky. Make three hundred five. Listen carefully. Three hundred FIVE. Not three hundred fifty.",
          hint:
            "Three hundred five has three hundreds and five ones. How many tens does it have? Think about it.",
          successAudio:
            "You got it! Three flats, ZERO rods, five units. That zero in the middle matters. Hold that thought.",
        },
      ],
    },

    // ── 4. CONCEPT NAME ─────────────────────────────────────
    {
      type: "concept-name",
      cardTitle: "PLACE VALUE",
      cardText:
        "Every number you built had three kinds of places: ones (the small squares), tens (the rods), and hundreds (the flats). Each place is 10 times bigger than the one to its right. This pattern keeps going forever: thousands, ten thousands, hundred thousands, all the way to a million and beyond.",
      audio:
        "You just did something amazing. Every number you built had three kinds of places. Ones, the small squares. Tens, the rods. And hundreds, the flats. Each one is ten times bigger than the one to its right. This is called PLACE VALUE. It's the secret code behind every number you'll ever see. And here's the wild part. The pattern never stops. Ten hundreds make a thousand. Ten thousands make ten thousand. Keep going and you hit a million. Same code, all the way up.",
    },

    // ── 5. APPLIED PROBLEMS ─────────────────────────────────
    {
      type: "applied-problems",
      problems: [
        {
          kind: "tap-part",
          question: "In the number 458, what does the 4 mean? Tap it.",
          audio:
            "Here's four hundred fifty eight, already built. In the number four five eight, what does the four mean? Tap the blocks that show it.",
          preload: { flats: 4, rods: 5, units: 8 },
          answerType: "flat",
          hint: "The four is in the hundreds place. Which blocks are worth one hundred each?",
          successAudio:
            "Exactly! The four means four HUNDREDS. Four flats. That's four hundred right there.",
        },
        {
          kind: "build-notice",
          target: 305,
          prompt: "Build 305 again. Then look closely.",
          audio:
            "Build three hundred five one more time. Then look at what's missing.",
          insightText:
            "Zero rods. The 0 in 305 is doing real work — it holds the tens place open so the 5 stays in the ones spot and the 3 stays in the hundreds spot. Without that zero, 305 would collapse into 35.",
          insightAudio:
            "See that? Zero rods. The zero in three hundred five is doing real work. It holds the tens place open, so the five stays in the ones spot and the three stays in the hundreds. Take the zero away and three hundred five collapses into thirty five. Zero is a placeholder, and it's powerful.",
        },
        {
          kind: "expanded-form",
          target: 47,
          prompt: "Build 47. Then fill in the blanks below.",
          audio:
            "Last problem. Build forty seven with your blocks. Then fill in the blanks. Forty seven equals how many tens plus how many ones?",
          blanks: [
            { label: "tens", answer: 4 },
            { label: "ones", answer: 7 },
          ],
          hint: "Count your rods. That's your tens. Count your units. That's your ones.",
          successAudio:
            "Perfect. Forty seven equals four tens plus seven ones. You just wrote a number in expanded form. That's exactly how mathematicians break numbers apart.",
        },
      ],
    },

    // ── 6. QUICK CHECK ──────────────────────────────────────
    {
      type: "quick-check",
      intro:
        "Quick check time. Five questions. You've already done all of this with your hands, so trust yourself.",
      questions: [
        {
          question: "In the number 672, what does the 7 mean?",
          answer: "7 tens, which is 70",
          options: [
            "7 ones, which is 7",
            "7 tens, which is 70",
            "7 hundreds, which is 700",
            "Nothing — it is just a digit",
          ],
        },
        {
          question:
            "You build a number with 3 flats, 0 rods, and 9 units. What number is it?",
          answer: "309",
          options: ["39", "390", "309", "903"],
        },
        {
          question: "What happens when you put 10 rods together?",
          answer: "They regroup into 1 flat, because 10 tens make 100",
          options: [
            "They regroup into 1 flat, because 10 tens make 100",
            "They regroup into 1 unit, because 10 tens make 1",
            "Nothing — rods cannot be combined",
            "They regroup into 100 units spread across the workspace",
          ],
        },
        {
          question: "Which number equals 8 hundreds + 0 tens + 4 ones?",
          answer: "804",
          options: ["840", "804", "8,004", "480"],
        },
        {
          question:
            "The place value pattern keeps going past hundreds. What is 10 times bigger than 100,000?",
          answer: "1,000,000 — one million",
          options: [
            "1,000,000 — one million",
            "100,001",
            "110,000",
            "10,000 — ten thousand",
          ],
        },
      ],
    },

    // ── 7. REAL WORLD ───────────────────────────────────────
    {
      type: "real-world",
      audio:
        "Place value is everywhere. The number on your house. The price of stuff at the store. Phone numbers. The distance to the Moon. All of it uses the exact same system you just learned.",
      familyAdventure:
        "Tonight, find three numbers around your house. Tell someone in your family which digit is in which place. That's it.",
    },

    // ── 8. CELEBRATION ──────────────────────────────────────
    {
      type: "celebration",
      badge: "Place Value Pro",
      xp: 100,
      audio:
        "Nice work! You can now build any number up to nine hundred ninety nine with place value blocks, and you know the pattern goes all the way to a million. Next time we'll use these same blocks to ADD big numbers together.",
    },
  ],

  nextLesson: "math-9-10-02",
};

export default mathUeL01V2;
