// ─────────────────────────────────────────────────────────────────────────────
// Future Skills  |  L18 — Making Games: Introduction to Game Design
// Age band : explorers (6–8)   Guide: byte
// ─────────────────────────────────────────────────────────────────────────────

const FS_L18 = {
  ageBand:   `explorers`,
  subjectId: `future-skills`,
  guide:     `byte`,

  lessons: [
    {
      id:        `fs-6-8-18`,
      title:     `Making Games: Introduction to Game Design`,
      duration:  12,
      xpReward:  50,
      badge:     `game-designer`,
      badgeName: `Game Designer`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}. Quick question — what's the most fun you've ever had playing a game? Think about it for a second. Now here's the part most people don't know: that feeling was designed. Someone sat down and deliberately built the rules, the challenges, the feedback, the rewards — everything — to create exactly that experience. Today we're going to pull back the curtain on game design. And by the end, you're going to see every game differently. Let's go.`,
          headline: `Making Games: Introduction to Game Design`,
          subtitle: `What makes a game fun — and how do designers create that feeling?`,
          visual: `/explorer-assets/future-skills/l18-welcome.png`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Every Game Was Designed`,
          paragraphs: [
            `That favorite game of yours? Someone designed every rule, every reward, every level — on purpose. Game design is real, and it's centuries old. Chess and soccer follow the same principles as the latest video games.`,
          ],
          image: `/explorer-assets/future-skills/l18-s1-ancient-modern.png`,
          imageCaption: `Chess. Soccer. The latest video game. Same DNA — same design principles.`,
          vocab: [
            { word: `game designer`,     definition: `Someone whose job is to invent the rules, goals, and systems that make a game fun.`,
              audioPrompt: `A game designer is an architect of fun, {name}. They don't just write code or draw pictures — they think deeply about what makes a player feel excited or satisfied. Then they build that feeling on purpose.` },
            { word: `design principles`, definition: `Ideas that help creators build things that work well — game designers use them to keep games fair, fun, and engaging.`,
              audioPrompt: `Design principles are a designer's toolkit, {name}. Things like "rewards should feel earned" and "challenge should grow with the player." Tested across thousands of games. Reusable.` },
            { word: `play`,              definition: `Voluntary activity done for fun within rules — what every game, from chess to video games, is built to create.`,
              audioPrompt: `Play is something Byte finds fascinating, {name}. Scientists study it seriously — it's one of the most powerful ways humans learn. Games are just carefully designed spaces for play.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Goals and Rules`,
          paragraphs: [
            `Every game needs goals (something to aim for — reach the end, score the most, survive the longest) and rules (what you can and can't do — that's where the challenge lives).`,
          ],
          image: `/explorer-assets/future-skills/l18-s2-goals-rules.png`,
          imageCaption: `A goal without rules is just walking. Rules without a goal is just rules. Together: a game.`,
          vocab: [
            { word: `goal`,       definition: `Something to aim for in a game — winning, reaching the end, scoring the most, surviving longest. Gives the game a point.`,
              audioPrompt: `Without a goal, there's no game, {name} — just activity. The goal is what gives every choice meaning. Even simple games have one: get the highest score, last the longest, get to the finish line.` },
            { word: `rule`,       definition: `What you can and can't do in a game. Rules create the challenge.`,
              audioPrompt: `Rules are where the challenge lives, {name}. If you could do anything, there'd be no game. Rules say: here's what you can do, here's what you can't. The interesting question is what you do inside those limits.` },
            { word: `constraint`, definition: `A limit that shapes how you play. Rules are constraints — and constraints are what make games interesting.`,
              audioPrompt: `Constraints sound limiting, {name}, but they're actually what makes games fun. Imagine basketball with no out-of-bounds — boring. The constraint creates the puzzle.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Feedback and Progression`,
          paragraphs: [
            `Feedback tells you how you're doing right now — flashing health bar, score counter, sound effect. Progression means things get harder or more interesting as you improve.`,
          ],
          image: `/explorer-assets/future-skills/l18-s3-feedback-progression.png`,
          imageCaption: `Feedback = the game talking to you. Progression = the game growing with you.`,
          vocab: [
            { word: `feedback`,    definition: `Information that tells you how you're doing right now — score, health bar, sound effect.`,
              audioPrompt: `Feedback is how a game talks to you, {name}. Without it, you'd never know what just happened. A coin sound, a flash, a number ticking up — these are all the game saying "good move."` },
            { word: `progression`, definition: `How a game grows more interesting or harder as you improve. New levels, new abilities, new challenges.`,
              audioPrompt: `Progression keeps games from going flat, {name}. At the start, everything is new. Then the game has to grow with you — new abilities, new challenges. Without it, even a great game gets stale.` },
            { word: `reward`,      definition: `Something good a game gives you when you accomplish a goal — coins, XP, new abilities, story progress.`,
              audioPrompt: `Rewards are the game's way of saying "you did it," {name}. They feel best when they're earned — not handed out for nothing. That's the secret to a satisfying reward system.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Flow — The Sweet Spot`,
          paragraphs: [
            `Flow is the feeling of being completely absorbed — time disappears. It happens when challenge matches skill perfectly. Too easy = bored. Too hard = frustrated. Just right = flow.`,
          ],
          image: `/explorer-assets/future-skills/l18-s4-flow-zone.png`,
          imageCaption: `Boredom on one side. Frustration on the other. Flow lives right in the middle — and that's the whole craft.`,
          vocab: [
            { word: `flow`,             definition: `Complete absorption when challenge perfectly matches your skill. Time disappears.`,
              audioPrompt: `Flow is one of Byte's favorite discoveries, {name}. You're so locked in you forget about everything else. The challenge is just right — hard enough to engage you, easy enough that you're not stuck.` },
            { word: `difficulty curve`, definition: `How a game's challenge gradually rises as you improve. Keeps you in the flow zone the whole way.`,
              audioPrompt: `Imagine every level being equally hard, {name} — beginners would quit, experts would be bored. A good difficulty curve starts gentle and rises with the player. That's where flow lives.` },
            { word: `frustration`,      definition: `Feeling stuck when challenge rises too fast for your current skill. A warning sign for designers.`,
              audioPrompt: `Frustration is the opposite of flow, {name}. It hits when the gap between what you can do and what the game asks gets too wide. Good designers see it as a warning to pull difficulty back.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Core Loop`,
          paragraphs: [
            `The core loop is the main action you repeat over and over: run, jump, collect. Build, explore, defend. If the core loop feels satisfying every time, the game works.`,
          ],
          image: `/explorer-assets/future-skills/l18-s5-core-loop.png`,
          imageCaption: `The core loop is what you do over and over. Get this right, and everything else falls into place.`,
          vocab: [
            { word: `core loop`,  definition: `The main action a player repeats throughout a game. The heartbeat of the experience.`,
              audioPrompt: `The core loop is a game's heartbeat, {name}. Run, jump, collect. Build, explore, defend. Whatever you do over and over — that's it. If it feels good every time, the game works.` },
            { word: `satisfying`, definition: `Rewarding and pleasing to do. Every core loop must feel satisfying or players won't keep coming back.`,
              audioPrompt: `Satisfying is a designer's favorite word, {name}. A satisfying core loop means each repetition feels good — landing a jump, hitting a target. Without that feeling, the game falls apart.` },
            { word: `repetition`, definition: `Doing something many times. Even repeated actions need to feel good — that's what makes a great core loop.`,
              audioPrompt: `Repetition isn't a bad thing in games, {name} — it's where the joy lives. The same action, done well, again and again. The magic is making each repetition feel fresh.` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You Can Make Games Too`,
          paragraphs: [
            `Free tools like Scratch (scratch.mit.edu) and Godot let anyone build real games — no experience needed. Many great game studios started as one person with one idea.`,
          ],
          image: `/explorer-assets/future-skills/l18-s6-anyone-can-make.png`,
          imageCaption: `Free tools. Free tutorials. The only barrier to making your first game is sitting down to start.`,
          vocab: [
            { word: `game engine`, definition: `Software that handles the technical side of making a game — physics, graphics, sound — so designers can focus on the experience.`,
              audioPrompt: `A game engine is like a power tool for designers, {name}. It handles the boring math — how things fall, bounce, collide — so you can focus on the fun part: designing the experience.` },
            { word: `open source`, definition: `Software that anyone can use, study, and improve for free. Scratch and Godot are open source.`,
              audioPrompt: `Open source means the code is shared with everyone, {name}. Scratch, Godot, Linux — built by people who wanted others to learn and build on top. That spirit is part of why software moves so fast.` },
            { word: `iteration`,   definition: `Play it, fix it, play it again. Every great game went through dozens of rounds of iteration before it felt right.`,
              audioPrompt: `Iteration is how all great games get made, {name}. Play it, find problems, fix them, play again. The first version of nearly every great game felt broken. The fun emerged through iteration.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `goal`,
              label: `🎯 Goal`,
              color: `#60A5FA`,
            },
            {
              id: `rules`,
              label: `📋 Rules`,
              color: `#F87171`,
            },
            {
              id: `feedback`,
              label: `📊 Feedback`,
              color: `#F59E0B`,
            },
            {
              id: `progression`,
              label: `⬆️ Progression`,
              color: `#34D399`,
            },
          ],
          items: [
            {
              id: `l18-g1`,
              image: `l18-game-1.png`,
              label: `Reaching the end of the level before the timer runs out.`,
              matchPhrase: `That's a goal — something specific to aim for.`,
              correctMatch: `goal`,
            },
            {
              id: `l18-g2`,
              image: `l18-game-2.png`,
              label: `You can only double-jump if you've collected a power token first.`,
              matchPhrase: `That's a rule — it defines what you can and can't do.`,
              correctMatch: `rules`,
            },
            {
              id: `l18-g3`,
              image: `l18-game-3.png`,
              label: `Your health bar flashes red and a warning sound plays when you take damage.`,
              matchPhrase: `That's feedback — it tells you what's happening right now.`,
              correctMatch: `feedback`,
            },
            {
              id: `l18-g4`,
              image: `l18-game-4.png`,
              label: `Earning enough XP unlocks a new special ability you didn't have before.`,
              matchPhrase: `That's progression — things get richer and more complex as you improve.`,
              correctMatch: `progression`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l18-q1`,
              format: `multiple-choice`,
              question: `Which four elements do game designers say every game needs?`,
              options: [
                `Levels, characters, music, and graphics`,
                `Goals, rules, feedback, and progression`,
                `Points, timers, enemies, and rewards`,
                `Story, movement, colour, and sound`,
              ],
              correctIndex: 1,
              explanation: `Every game — from chess to the latest video game — relies on goals (something to aim for), rules (what you can and can't do), feedback (how you're doing), and progression (increasing challenge).`,
            },
            {
              id: `l18-q2`,
              format: `multiple-choice`,
              question: `What is "flow" in the context of game design?`,
              options: [
                `When a game has a smooth, bug-free experience`,
                `The state of complete absorption when challenge perfectly matches your skill level`,
                `The way a character moves through a level`,
                `When all four game elements work together`,
              ],
              correctIndex: 1,
              explanation: `Flow is a psychological state where you're completely absorbed — time disappears. Game designers aim to keep players in this sweet spot by matching challenge to skill.`,
            },
            {
              id: `l18-q3`,
              format: `multiple-choice`,
              question: `What is a game's "core loop"?`,
              options: [
                `The main story that connects all the levels together`,
                `The circular path a character takes through a level`,
                `The main action a player repeats over and over throughout the game`,
                `The sequence of menus you navigate to start a game`,
              ],
              correctIndex: 2,
              explanation: `The core loop is the central repeating action — attack-dodge-collect, or run-jump-land. If the core loop isn't satisfying, no amount of great graphics or story will save the game.`,
            },
            {
              id: `l18-q4`,
              format: `true-false`,
              question: `"Flow" happens when a game's challenge level is perfectly matched to the player's skill — not too easy and not too hard.`,
              correctAnswer: true,
              explanation: `True. Flow is the psychological sweet spot between boredom (too easy) and frustration (too hard). Great game designers constantly adjust difficulty to keep players there.`,
            },
            {
              id: `l18-q5`,
              format: `fill-blank`,
              question: `The main action a player repeats throughout a game — the heart of the experience — is called the core ___.`,
              options: [
                `loop`,
                `score`,
                `level`,
                `path`,
              ],
              correctIndex: 0,
              explanation: `The core loop is what you do over and over. If it feels satisfying every time, the game is likely to be fun. If it feels repetitive or dull, players will stop.`,
            },
            {
              id: `l18-q6`,
              format: `multiple-choice`,
              question: `If a player finds a game too easy and starts to feel bored, what has the designer failed to maintain?`,
              options: [
                `A strong story and interesting characters`,
                `Enough rules to keep the game fair`,
                `The right level of challenge to stay in the flow zone`,
                `Enough feedback to know how the player is doing`,
              ],
              correctIndex: 2,
              explanation: `Boredom happens when challenge falls below the player's skill level. Good designers increase difficulty gradually to keep players in flow.`,
            },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Game designers work at studios large and small, and many start by making their own games at home. Tools like Scratch (scratch.mit.edu) are completely free — you could build a real, playable game today.`,
          familyAdventure: `Play a simple board game or card game with a family member. After playing, talk about the four elements: What was the goal? What were the key rules? How did the game give feedback? Did it get harder or more interesting as you played?`,
          creativePrompt: `Pick a simple game concept — it could be a card game, a jumping game, or a puzzle. Write down its goal, three rules, how it gives feedback, and how it gets harder over time. You've just drafted a game design document!`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Brilliant work, {name}! You now understand the four elements that make every game work — goals, rules, feedback, and progression — and why flow is the feeling designers are always chasing. Next time you play a game, you'll be thinking like its designer. Byte is so proud to share this knowledge with you.`,
          badge: `game-designer`,
          badgeName: `Game Designer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default FS_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = FS_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = FS_L18.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = FS_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-FUTURESKILLS-L18] Loaded: "Making Games: Introduction to Game Design" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l18-s1-ancient-modern.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-s2-goals-rules.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-s3-feedback-progression.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-s4-flow-zone.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-s5-core-loop.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-s6-anyone-can-make.png',    { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-FUTURESKILLS-L18] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-FUTURESKILLS-L18] One or more magazine assets missing'));
}
