// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L07 — Flow States: When You Lose Track of Time
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : positive psychology (Csikszentmihalyi's flow) at a kid level.
//            Grounded, real research.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify the state by challenge-vs-skill balance:
//            flow / boredom / anxiety-overwhelm)
// SCOPE: 4 concepts — what flow is, the signs of flow, the challenge-skill
//        balance (the flow channel), how to find more flow
// VOICE: Sage = warm, encouraging, a little joyful here
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-07`,
      title: `Flow States: When You Lose Track of Time`,
      duration: 18,
      xpReward: 75,
      badge: `flow-finder`,
      badgeName: `Flow Finder`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Have you ever been so absorbed in something, drawing, building, playing, reading, that you completely lost track of time? An hour passed and felt like minutes. You forgot to be hungry or self-conscious. You were just fully THERE, doing the thing. That magical, focused state has a name: FLOW. It's one of the most enjoyable and productive states a human mind can enter, and the wonderful news is you can learn to find it more often. Take a breath, and let's explore this joyful corner of your inner world.`,
          headline: `Flow States`,
          subtitle: `Those magical times when you're so absorbed you lose track of time`,
          visual: `/ue-assets/iw/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Flow?`,
          paragraphs: [
            `FLOW is a state of complete absorption in what you're doing, where you feel focused, energized, and fully present. A scientist named Mihaly Csikszentmihalyi (you say it "cheek-sent-me-hi") spent his life studying it. He interviewed athletes, artists, musicians, scientists, and everyday people about their best, most joyful moments, and discovered they all described the same special state. People sometimes call it being "in the zone." In flow, you're so engaged in an activity that everything else seems to fade away.`,
            `Flow isn't just pleasant, it's one of the states where people do their BEST work and feel their happiest. When you're in flow, your full attention is gathered on one thing, your skills are being used well, and you often produce wonderful results almost effortlessly. Csikszentmihalyi found that people report some of the most meaningful, satisfying moments of their lives happening during flow. So learning about flow isn't just interesting, it's a key to doing great work AND feeling deeply content. And as you'll see, flow doesn't just happen by luck. There are real conditions that invite it, conditions you can learn to create.`,
          ],
          image: `/ue-assets/iw/l07-s1-what-is-flow.webp`,
          imageCaption: `Flow: complete absorption, focused and present, where we do our best and happiest work.`,
          vocab: [
            {
              word: `flow`,
              definition: `A state of complete absorption in an activity, where you feel focused, energized, and fully present, often losing track of time. Studied by psychologist Mihaly Csikszentmihalyi. Also called being "in the zone."`,
              audioPrompt: `Flow is a state of complete absorption in what you're doing, {name}. You feel focused, energized, and fully present. A scientist named Mihaly Csikszentmihalyi spent his life studying it. He interviewed athletes, artists, and everyday people about their best moments, and they all described the same special state. People call it being in the zone. Flow isn't just pleasant. It's where people do their best work and feel their happiest. And it doesn't happen by luck. There are real conditions that invite it.`,
            },
            {
              word: `positive psychology`,
              definition: `The scientific study of what makes people thrive — happiness, flow, strengths, and meaning. Mihaly Csikszentmihalyi was one of its founders, and flow was one of his greatest discoveries.`,
              audioPrompt: `Positive psychology is the scientific study of what makes people thrive, {name}. Instead of only studying problems, it asks: what makes life wonderful? What helps people feel happy, engaged, and meaningful? Mihaly Csikszentmihalyi was one of its founders, and flow was one of his greatest discoveries. Positive psychology has also studied strengths, gratitude, resilience, and purpose. It's changing how schools and parents think about wellbeing. Inner World draws from positive psychology constantly, because understanding what makes us flourish is just as important as understanding problems.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Signs of Flow`,
          paragraphs: [
            `How do you know when you're in flow? Researchers found it has clear signs. Time feels strange, usually it seems to fly by, though sometimes a single moment can feel stretched and rich. Your focus becomes complete; distractions melt away and you're not thinking about anything else. Your self-consciousness disappears, you stop worrying about how you look or what others think, because you're absorbed in the doing. The activity feels rewarding all by itself, you're doing it because you love doing it, not for a prize. And often, things feel almost effortless, even when you're working hard, your skills flow out smoothly.`,
            `You've almost certainly experienced flow already, even if you didn't have a name for it. Maybe while drawing or painting, playing a sport or an instrument, building with blocks or building in a video game, reading a gripping book, solving a puzzle, dancing, or making up a story. Flow can happen in almost any activity. The key isn't WHICH activity it is, it's the special relationship between you and the task in that moment. And that relationship comes down to one beautiful balance, which we'll explore next.`,
          ],
          image: `/ue-assets/iw/l07-s2-signs.webp`,
          imageCaption: `Signs of flow: time distorts, focus is total, self-consciousness fades, it feels rewarding.`,
          vocab: [
            {
              word: `in the zone`,
              definition: `Another name for being in flow: completely absorbed and focused, with distractions and self-consciousness fading away, often feeling effortless even while working hard.`,
              audioPrompt: `In the zone is another name for being in flow, {name}. How do you know when you're in it? Researchers found clear signs. Time feels strange, usually flying by. Your focus becomes complete, and distractions melt away. Your self-consciousness disappears, because you're absorbed in the doing. The activity feels rewarding all by itself. And often things feel almost effortless, even when you're working hard. You've probably experienced it already, while drawing, playing a sport, or reading a gripping book.`,
            },
            {
              word: `absorption`,
              definition: `Being so completely focused on an activity that the outside world and self-consciousness fade away. One of the main features of flow, and what makes it feel both peaceful and productive at the same time.`,
              audioPrompt: `Absorption is being so completely focused on an activity that the outside world fades away, {name}. It's one of the main features of flow. When you're absorbed, you're not thinking about what others think, or checking the time. Your full attention is on just this one thing. Absorption is what makes flow feel peaceful and productive at the same time. The more you find activities that pull you into absorption, the more flow you'll experience. It's one of the most enjoyable states the mind can enter.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Secret: Challenge Meets Skill`,
          paragraphs: [
            `Here's the heart of flow, and it's wonderfully simple. Flow happens when the CHALLENGE of an activity is well-matched to your SKILL level. The task has to be hard enough to fully engage you, but not so hard that you feel overwhelmed. It's a "just right" balance, like the Goldilocks zone for your attention. When challenge and skill meet at the right point, you slip into flow.`,
            `Think about what happens when they DON'T match. If a task is too EASY for your skill level (challenge too low), you get BORED. Your mind wanders, you lose interest, and flow can't happen. If a task is too HARD for your current skill (challenge too high), you feel ANXIOUS or overwhelmed. You get frustrated or want to give up, and flow can't happen either. But right in between, where the challenge stretches your skills just enough, lies the "flow channel." Here's the really cool part: as your skills GROW (remember neuroplasticity?), you need bigger challenges to stay in flow. That's why a game or skill that once thrilled you can later feel boring, you outgrew that challenge level and need a harder one. Flow gently pulls you to keep growing.`,
          ],
          image: `/ue-assets/iw/l07-s3-challenge-skill.webp`,
          imageCaption: `Flow lives where challenge meets skill. Too easy = boredom. Too hard = anxiety.`,
          vocab: [
            {
              word: `challenge-skill balance`,
              definition: `The key condition for flow: the difficulty of a task matched well to your skill level. Too easy leads to boredom; too hard leads to anxiety. The "just right" balance in between is where flow happens.`,
              audioPrompt: `The challenge-skill balance is the key to flow, {name}. It's wonderfully simple: flow happens when challenge is well matched to your skill. Hard enough to engage you, but not so hard you feel overwhelmed. It's the just-right balance for your attention. If a task is too easy, you get bored. If it's too hard, you feel anxious or overwhelmed. But right in between lies the flow channel. As your skills grow, you need bigger challenges to stay in flow. Flow gently pulls you to keep growing.`,
            },
            {
              word: `optimal experience`,
              definition: `Mihaly Csikszentmihalyi's term for flow: the best, most fulfilling state a person can enter, where challenge and skill are perfectly matched. People report their most meaningful moments happening during optimal experiences.`,
              audioPrompt: `Optimal experience is Mihaly Csikszentmihalyi's term for flow, {name}. He used it because flow isn't just pleasant, it's the best state a human can enter. When challenge and skill are perfectly matched, you enter an optimal experience: fully engaged, deeply satisfied, doing your best work. Csikszentmihalyi found that people report the most meaningful moments of their lives during these states, not during rest or entertainment, but during absorbed, challenging activity. Flow is the peak of feeling fully alive.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Find More Flow`,
          paragraphs: [
            `Since flow feels wonderful AND helps you do your best, how can you find it more often? A few gentle keys. First, choose activities you genuinely enjoy and care about, flow comes easiest when you actually want to do the thing. Second, adjust the challenge to match your skill: if you're bored, make it a bit harder (add a goal, a time limit, a tricky variation); if you're overwhelmed, make it a bit easier (break it into smaller steps, slow down). Third, remove distractions, flow needs your full attention, so put away the things that pull your focus away. Fourth, give it time, flow usually takes a little while to settle into, so be patient at the start.`,
            `Understanding flow also helps you understand yourself. When you feel bored, it might mean you're ready for a bigger challenge. When you feel overwhelmed, it might mean you need to build up your skills step by step first. Neither is a problem with YOU, they're just signals about the challenge-skill balance. Sage's gentle teaching: flow is one of life's quiet treasures, those moments of joyful, absorbed focus where you're fully alive and doing what you love. The more you understand it, the more you can invite it into your days. And here's something beautiful: the path to more flow is also the path of growth, because staying in flow means continually stretching your skills. Doing what you love, growing a little each time, and losing yourself happily in the doing. That's a wonderful way to live.`,
          ],
          image: `/ue-assets/iw/l07-s4-find-flow.webp`,
          imageCaption: `Find flow: do what you love, match the challenge, remove distractions, be patient.`,
          vocab: [
            {
              word: `flow channel`,
              definition: `The "just right" zone between boredom (too easy) and anxiety (too hard), where challenge stretches your skills just enough to create flow. As your skills grow, you need bigger challenges to stay in it.`,
              audioPrompt: `The flow channel is the just-right zone between boredom and anxiety, {name}. If a task is too easy, you're bored. If it's too hard, you're anxious. Right in between lies the flow channel. How can you find more flow? Choose activities you genuinely enjoy. Adjust the challenge to match your skill: if you're bored, make it harder; if overwhelmed, break it into smaller steps. Remove distractions, since flow needs your full attention. And be patient, flow usually takes a little while to settle into.`,
            },
            {
              word: `intrinsic motivation`,
              definition: `Doing something for the pure joy of doing it, not for a prize or reward. A key feature of flow: when you're in flow, the activity itself is the reward. Flow is one of the clearest signs of intrinsic motivation.`,
              audioPrompt: `Intrinsic motivation means doing something for the pure joy of doing it, {name}. Not for a prize or reward. It's a key feature of flow: when you're in flow, the activity itself is the reward. You're doing it because it feels wonderful. Research shows that intrinsic motivation leads to deeper learning and more creativity than working for external rewards. And flow is one of the clearest signs that you're intrinsically motivated. When you lose track of time doing something, you're doing it for love.`,
            },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Let's investigate, {name}. Here are four kids doing activities. Using the challenge-skill balance, classify what each is experiencing: FLOW (challenge matches skill, fully absorbed), BOREDOM (too easy for their skill), or ANXIETY/OVERWHELM (too hard for their current skill)?\n\nOne is trickier than it looks.`,
          options: [
            { id: `flow`,    label: `Flow`,                color: `#34D399`, description: `Challenge matches skill. Fully absorbed, focused, time flying by.` },
            { id: `bored`,   label: `Boredom`,             color: `#94A3B8`, description: `The task is too easy for their skill. Mind wandering, losing interest.` },
            { id: `anxiety`, label: `Anxiety / Overwhelm`, color: `#F87171`, description: `The task is too hard for their current skill. Frustrated, wanting to give up.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Activity #1`,
              clues: [
                { text: `A kid who's a decent reader is reading a gripping adventure book that's just a little challenging.` },
                { text: `They've read for an hour and it felt like minutes.` },
                { text: `They forgot all about their snack and the time.` },
              ],
              correctAnswer: `flow`,
              realWorldExample: `A great book at the right level is classic flow.`,
              explanation: `The challenge (a slightly hard, gripping book) matches their skill (a decent reader). Absorbed, time flying, forgetting everything else. Pure flow. This is the challenge-skill balance working perfectly.`,
            },
            {
              id: `case-2`,
              caseTitle: `Activity #2`,
              clues: [
                { text: `A skilled chess player is forced to play against a beginner's app set to "very easy."` },
                { text: `They win instantly every time without thinking.` },
                { text: `Their mind keeps wandering, and they want to quit.` },
              ],
              correctAnswer: `bored`,
              realWorldExample: `Too-easy tasks bore skilled people quickly.`,
              explanation: `The challenge (very easy) is far below their skill (skilled player). Mind wandering, wanting to quit. Pure boredom. The fix? Raise the challenge, play a tougher opponent, to climb back into the flow channel.`,
            },
            {
              id: `case-3`,
              caseTitle: `Activity #3`,
              clues: [
                { text: `A kid who just started piano last week is handed an extremely difficult concert piece.` },
                { text: `They can barely play the notes and keep making mistakes.` },
                { text: `They feel frustrated, stressed, and want to give up.` },
              ],
              correctAnswer: `anxiety`,
              realWorldExample: `A too-hard task overwhelms a beginner.`,
              explanation: `The challenge (an expert piece) is far above their current skill (just started). Frustrated, stressed, wanting to quit. Pure anxiety/overwhelm. The fix? Lower the challenge, start with a simple beginner song, and build skill step by step.`,
            },
            {
              id: `case-4`,
              caseTitle: `Activity #4 — The Tricky One`,
              clues: [
                { text: `A kid LOVES a certain video game and used to be totally absorbed in it for hours, true flow.` },
                { text: `But they've gotten really good at it, and now the easy levels feel dull.` },
                { text: `They're starting to feel restless and bored, even though they still love the game.` },
              ],
              correctAnswer: `bored`,
              realWorldExample: `Outgrowing a challenge level turns old flow into boredom.`,
              explanation: `Tricky, {name}! You might say "flow," because the kid used to be in flow here and still loves the game. But read carefully: their SKILL grew, so the old challenge level is now too easy, and they've drifted into boredom. This is exactly what Sage taught: as your skills grow, you need BIGGER challenges to stay in flow. The game didn't change, the kid did, by getting better! Pure boredom (for now). The beautiful fix: move up to harder levels or a tougher mode to climb back into the flow channel. Lesson: feeling bored with something you used to love can simply mean you've grown and you're ready for a bigger challenge. That's not a problem, it's a sign of your own growth. Flow always invites you to keep stretching.`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is FLOW?`,
              options: [
                `Being bored and distracted`,
                `A state of complete absorption in an activity — focused, energized, and fully present, often losing track of time`,
                `Falling asleep`,
                `Doing many things at once`,
              ],
              correctIndex: 1,
              explanation: `Flow is a state of complete absorption where you feel focused, energized, and fully present, often losing track of time. Studied by Mihaly Csikszentmihalyi, it's also called being "in the zone." It's where people do their best and happiest work.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `Which is a SIGN that you're in flow?`,
              options: [
                `You keep checking the clock`,
                `Time seems to fly by, your focus is complete, and self-consciousness fades away`,
                `You feel bored and distracted`,
                `You can't stop worrying what others think`,
              ],
              correctIndex: 1,
              explanation: `Signs of flow: time feels strange (usually flying by), focus becomes complete, self-consciousness disappears, the activity feels rewarding by itself, and things often feel almost effortless even while you work hard.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `What is the SECRET condition that creates flow?`,
              options: [
                `Doing something super easy`,
                `The challenge of the task being well-matched to your skill level (challenge-skill balance)`,
                `Doing something impossibly hard`,
                `Having lots of distractions`,
              ],
              correctIndex: 1,
              explanation: `Flow happens when the challenge of an activity is well-matched to your skill level: hard enough to fully engage you, but not so hard you feel overwhelmed. It's a "just right" balance, like a Goldilocks zone for your attention.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `What happens when a task is too EASY for your skill?`,
              options: [
                `You enter deep flow`,
                `You get BORED — your mind wanders and you lose interest`,
                `You feel overwhelmed`,
                `Nothing changes`,
              ],
              correctIndex: 1,
              explanation: `When a task is too easy for your skill level (challenge too low), you get bored. Your mind wanders and you lose interest, so flow can't happen. The fix is to raise the challenge to climb back into the flow channel.` },

            { id: `l07-q5`, format: `multiple-choice`,
              question: `What happens when a task is too HARD for your current skill?`,
              options: [
                `You feel calm and bored`,
                `You feel ANXIOUS or overwhelmed — frustrated and wanting to give up`,
                `You enter perfect flow`,
                `You fall asleep`,
              ],
              correctIndex: 1,
              explanation: `When a task is too hard for your current skill (challenge too high), you feel anxious or overwhelmed, frustrated and wanting to give up, so flow can't happen. The fix is to lower the challenge or build skill step by step first.` },

            { id: `l07-q6`, format: `true-false`,
              question: `True or false: As your skills GROW, you need bigger challenges to stay in flow.`,
              correctAnswer: true,
              explanation: `True. As your skills grow (neuroplasticity!), you need bigger challenges to stay in flow. That's why a game or skill that once thrilled you can later feel boring, you outgrew that level and need a harder one. Flow gently pulls you to keep growing.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `Which is a good way to FIND more flow?`,
              options: [
                `Pick activities you hate`,
                `Choose what you enjoy, match the challenge to your skill, remove distractions, and be patient`,
                `Add as many distractions as possible`,
                `Only do impossibly hard things`,
              ],
              correctIndex: 1,
              explanation: `To find more flow: choose activities you genuinely enjoy, adjust the challenge to match your skill (harder if bored, easier if overwhelmed), remove distractions so you can fully focus, and be patient since flow takes a little while to settle into.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What can BOREDOM with something you used to love actually mean?`,
              options: [
                `Something is wrong with you`,
                `You may have GROWN — your skill outgrew the challenge, and you're ready for a bigger one`,
                `You should never do it again`,
                `Flow isn't real`,
              ],
              correctIndex: 1,
              explanation: `Feeling bored with something you used to love often means you've grown: your skill outgrew the old challenge level, so you're ready for a bigger one. That's not a problem, it's a sign of your growth. Flow always invites you to keep stretching.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Take a gentle breath, {name}. Pick ONE question and answer it just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `When have you been so absorbed in something that you lost track of time? What were you doing? That was flow.` },
            { id: `r2`, text: `Think of something that bores you. Could it be too EASY for you now? How might you make it more challenging?` },
            { id: `r3`, text: `Think of something that overwhelms you. Could you break it into smaller, do-able steps to find the flow channel?` },
            { id: `r4`, text: `What's an activity you'd love to experience more flow in? What's one small way you could set up the right conditions for it?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Understanding flow is a genuine life skill, used by top performers everywhere. Athletes train to enter "the zone." Musicians, writers, scientists, and game designers all chase flow because it's where the best, most joyful work happens. Knowing how flow works helps you study better, practice skills faster, enjoy your hobbies more deeply, and even choose activities and (one day) work that bring you alive. It also helps you read your own feelings wisely: boredom and overwhelm aren't failures, they're helpful signals about the challenge-skill balance. Sage's note: a life with lots of flow, doing things you love at just the right level of challenge, is a life that feels both deeply satisfying and full of growth. Learning to find your flow is learning to find your joy.`,
          familyAdventure: `Family Flow Hunt. As a family, each person shares an activity where they've felt flow, lost track of time, fully absorbed. Notice what they have in common (challenge matched to skill, doing something loved, focused). Then, each person picks one activity they'd like more flow in this week and adjusts the challenge: make a too-easy thing harder, or break a too-hard thing into smaller steps. Check in afterward about what happened. You're learning to design more joyful, absorbed moments together.`,
          creativePrompt: {
            intro: `Write about a time you (or a character) were completely "in the zone," in deep flow. Bring the feeling to life.`,
            floor: `Write at least 5 sentences. Describe the activity, how absorbed you were, and how time seemed to change.`,
            stretch: `Write 8 to 10 sentences. Capture the full experience of flow: the focus, the fading of distractions and self-consciousness, the effortless feeling, and the challenge-skill balance.`,
            open: `Write as much as you want. Write a vivid story or description of being in deep flow. Choose an activity (real or imagined) and take the reader inside the experience: how you got absorbed, how the outside world and your worries melted away, how time seemed to fly or stretch, how your skills flowed out almost effortlessly even though it was challenging, and how the challenge perfectly matched your skill. Capture how alive and content flow feels. Then reflect on what conditions made it possible and how you might find that state again.`,
            frames: [
              `I was ___, and at first I had to concentrate, but then ___.`,
              `The outside world seemed to ___.`,
              `Time felt like ___.`,
              `Even though it was challenging, my skills ___.`,
              `Afterward, I realized flow happened because ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You now understand one of life's quiet treasures: flow, that joyful state of complete absorption. You've learned its signs, the secret challenge-skill balance, and how to invite more flow into your days. You even discovered that boredom can be a sign of your own growth. May you find many hours of joyful flow ahead. Next, we explore a topic full of wonder and big ideas: what manifestation really means, and the genuine science behind how our focus shapes our lives. MANIFESTATION AND THE SCIENCE BEHIND IT. Be well, and I'll see you there. — Sage.`,
          badge: `flow-finder`,
          badgeName: `Flow Finder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L07 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
