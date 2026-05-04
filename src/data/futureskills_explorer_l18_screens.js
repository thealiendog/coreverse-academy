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
          headline: `Every game you love was designed`,
          paragraphs: [
            `Think of a crafting survival game where you build and explore, or a racing game where you drift around corners. These experiences didn't just appear — every rule, every reward, every level was carefully designed by a team of people who thought deeply about what makes play feel fun. And they weren't just having fun themselves — they were studying how your brain works. Even ancient games like chess and sports like soccer follow the same design principles as today's most popular video games.`,
          ],
          image: `/explorer-assets/future-skills/l18-magazine-1.png`,
          imageCaption: `Great games are built on ideas that have existed for centuries`,
          vocab: [
            { word: `game designer`, definition: `A person whose job is to invent the rules, goals, and systems that make a game fun to play.`, audioPrompt: `A game designer is like an architect of fun, {name}. They don't just draw pictures or write code — they think deeply about what makes a player feel excited, challenged, or satisfied. Then they build that feeling deliberately, piece by piece.` },
            { word: `design principles`, definition: `A set of ideas that help creators build things that work well — game designers use them to make sure games feel fair, fun, and engaging.`, audioPrompt: `Design principles are like a game designer's toolkit, {name}. Instead of making random choices, they follow principles — like "rewards should feel earned" or "the challenge should grow with the player." These ideas have been tested across thousands of games.` },
            { word: `play`, definition: `Voluntary activity done for fun, within rules or boundaries — the thing all games, from chess to video games, are built to create.`, audioPrompt: `Play is something Byte finds fascinating, {name}. Scientists study it seriously because it's one of the most powerful ways humans learn. Every great game is really just a carefully designed space for play — with just enough structure to make it feel meaningful.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The four elements of every game`,
          paragraphs: [
            `Game designers talk about four core elements that every game needs. **Goals** give you something to aim for — reach the end, score the most points, survive the longest. **Rules** define what you can and can't do — they create the challenge. **Feedback** tells you how you're doing right now — a flashing health bar, a score counter, a sound effect. And **progression** means things get harder or more interesting as you improve — new levels, new abilities, new challenges. Without all four, a game usually falls flat.`,
          ],
          image: `/explorer-assets/future-skills/l18-magazine-2.png`,
          imageCaption: `Goals, rules, feedback, and progression — the building blocks of fun`,
          vocab: [
            { word: `feedback`, definition: `Information that tells you how you're doing right now — score counters, health bars, and sound effects are all forms of game feedback.`, audioPrompt: `Feedback is how a game talks to you, {name}. Without it, you'd never know if you were winning or losing. A flashing health bar, a satisfying coin sound, a score ticking up — these are all the game saying: here's what just happened.` },
            { word: `progression`, definition: `The way a game grows more interesting or challenging as you improve — new abilities, harder levels, and unlocked content are all forms of progression.`, audioPrompt: `Progression is what keeps games from feeling flat, {name}. At the start, everything is new. Over time, the game needs to grow with you — new challenges, new abilities, new secrets. Without progression, even a great core loop gets stale.` },
            { word: `core loop`, definition: `The main action a player repeats over and over throughout a game — if the core loop isn't satisfying, the game won't work.`, audioPrompt: `The core loop is the heartbeat of any game, {name}. Run, jump, collect. Build, explore, defend. Whatever you do over and over — that's the core loop. If it feels good every single time, the game works. If it doesn't, nothing else can save it.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Flow: the sweet spot of challenge`,
          paragraphs: [
            `Game psychologists talk about a state called **flow** — the feeling of being completely absorbed in what you're doing, where time seems to disappear. Flow happens when a challenge is perfectly matched to your current skill level. Too easy and you get bored. Too hard and you get frustrated. The best game designers constantly adjust difficulty to keep players right in that sweet spot. This is also why games feel different at the start (easier) than later on. The **core loop** — the main action you repeat over and over — has to feel satisfying every single time.`,
          ],
          image: `/explorer-assets/future-skills/l18-magazine-3.png`,
          imageCaption: `The best games keep you in the 'flow zone' — not too easy, not too hard`,
          vocab: [
            { word: `flow`, definition: `The state of complete focus where challenge and skill are perfectly matched — time seems to disappear and you feel fully absorbed.`, audioPrompt: `Flow is one of Byte's favorite discoveries, {name}. It's when you're so locked into something that you forget about everything else. It happens when the challenge is just right — hard enough to keep you engaged, easy enough that you're not stuck. Great games live here.` },
            { word: `difficulty curve`, definition: `The way a game gradually increases in challenge as the player improves — keeping them in the flow zone throughout.`, audioPrompt: `Imagine if every level was equally hard, {name}. The first level would overwhelm beginners, and the last level would bore experts. A difficulty curve solves this — it starts gentle, rises steadily, and keeps everyone right at the edge of their ability. That's where flow lives.` },
            { word: `frustration`, definition: `The feeling of being stuck or overwhelmed — in game design, it happens when challenge rises too fast for the player's current skill.`, audioPrompt: `Frustration is the opposite of flow, {name}. It hits when the gap between what you can do and what the game demands is too wide. Good designers realize frustration is a warning sign — the difficulty curve jumped too fast. Time to pull it back and let the player catch up.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `You can make games too`,
          paragraphs: [
            `Game design is one of the most accessible creative fields there is. Free tools like **Scratch** (scratch.mit.edu) and **Godot** let beginners build real, playable games with no experience needed. Building your own robot or programmable device to interact with a game is another way in. Some of the most celebrated game studios grew from tiny solo projects — a single determined person with an idea that people connected with. The next great game idea could start with you, right now.`,
          ],
          image: `/explorer-assets/future-skills/l18-magazine-4.png`,
          imageCaption: `Free tools like Scratch and Godot let anyone start designing games today`,
          vocab: [
            { word: `open source`, definition: `Software that anyone can use, study, and improve for free — tools like Scratch and Godot are open source, which is why they're free for anyone to use.`, audioPrompt: `Open source means the code is shared with everyone, {name}. Byte's favorite examples are the tools that let anyone build great things for free — Scratch, Godot, Linux. The people who built them shared their work so others could learn, improve, and build on top of it. That spirit is part of why software moves so fast.` },
            { word: `game engine`, definition: `A software tool that handles the technical side of making a game — physics, graphics, sound — so designers can focus on creating the experience.`, audioPrompt: `A game engine is like a power tool for game designers, {name}. Instead of writing all the math that makes things fall, bounce, and collide from scratch, designers use an engine that handles all of it. That frees them up to focus on what matters: making the experience fun.` },
            { word: `iteration`, definition: `Testing your game, noting what isn't working, changing it, and testing again — most good games go through many rounds of iteration before they feel right.`, audioPrompt: `Iteration in game design means play it, fix it, play it again, {name}. The first version of almost every great game felt broken or boring. It was through dozens of rounds of playing, noticing problems, and improving that the fun emerged. There's no shortcut — iteration is the process.` },
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
    fetch('/explorer-assets/future-skills/l18-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l18-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-FUTURESKILLS-L18] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-FUTURESKILLS-L18] One or more magazine assets missing'));
}
