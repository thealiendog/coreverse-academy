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
