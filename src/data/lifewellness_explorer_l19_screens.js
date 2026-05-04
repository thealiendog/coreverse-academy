// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L19 — Building Healthy Habits That Last
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L19 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-19',
      title:     `Building Healthy Habits That Last`,
      duration:  12,
      xpReward:  50,
      badge:     'habit-builder',
      badgeName: 'Habit Builder',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l19-welcome',
          type:     'welcome',
          guideText: `Here's something about habits, {name}, that I find genuinely interesting: the research shows they're not really about willpower at all. Willpower runs out. It's a limited resource. The people who sustain healthy habits long-term are not more disciplined than everyone else — they've designed their environment and routines in a way that makes the habit easier than the alternative. That's a learnable skill, and it changes everything. Today we're looking at how habits actually form in the brain, why some stick and others don't, and how to use that understanding to build the routines that will carry you toward the health and the life you actually want.`,
          headline: `Building Healthy Habits That Last`,
          subtitle: `Habits are not about willpower — they're about understanding how your brain works, and using that understanding to build the life you actually want`,
          visual:   '/explorer-assets/wellness/l19-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l19-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `The habit loop`,
            body: `Research on habit formation identified a three-part cycle at the heart of every habit you have. First, a **cue** — a trigger that tells your brain to start a particular behaviour. This could be a time of day, a location, an emotion, or something you see. Second, a **routine** — the behaviour itself, automatic or becoming automatic over time. Third, a **reward** — the benefit your brain receives, which tells it this loop is worth repeating. Your brain is constantly building and reinforcing these loops — this is how habits form without conscious effort. **Understanding this cycle gives you a way to work with your brain** rather than against it. You can intentionally design new cues, attach new routines, and create rewards that reinforce the habits you want.`,
            image:   '/explorer-assets/wellness/l19-magazine-1.png',
            caption: `Cue, routine, reward — the three-part cycle your brain uses to build every habit you have`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l19-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Start smaller than you think you need to`,
            body: `Research has consistently found the same counterintuitive truth: the best way to build a new habit is to start far smaller than feels meaningful. Want to build a reading habit? Start with two minutes. Want to build a movement habit? Start with one set of push-ups. The reason this works is that **the habit of showing up regularly matters far more than the size of what you do** — especially at the start. A tiny action done consistently creates a reliable pattern in your brain. Once the pattern is established, you can gradually increase what you do. But if you start too ambitiously, the habit never becomes automatic — it stays an effortful choice, and effort eventually runs out.`,
            image:   '/explorer-assets/wellness/l19-magazine-2.png',
            caption: `Start smaller than feels useful — the habit of showing up consistently is what compounds`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l19-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Design your environment`,
            body: `Research shows that environment shapes behaviour more than motivation does. This means that **arranging your surroundings to make good choices easy and automatic** is one of the most powerful habit tools available. Want to eat more fruit? Put it on the counter where you'll see it. Want to exercise in the morning? Put your trainers by the door the night before. Want to read before sleep? Put a book on your pillow. Want to reduce phone use? Charge it in another room. None of these require willpower — they simply **change what your default choice looks like**. Making the healthy choice the easiest choice is far more reliable than relying on discipline to overcome an environment set up against you.`,
            image:   '/explorer-assets/wellness/l19-magazine-3.png',
            caption: `Environment shapes behaviour — design your surroundings so the healthy choice is the obvious default`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l19-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Become the person who does this`,
            body: `The most powerful form of habit change is not a change in behaviour — it's a change in identity. Instead of "I'm trying to get more sleep," the shift is: **"I'm someone who protects their sleep."** Instead of "I'm trying to exercise," it's: **"I'm someone who moves their body regularly."** Every time you act in line with that identity — even in a small way — you cast a vote for it. Over time, those votes add up into a self-concept that makes the habit feel natural rather than effortful. **Habits become sustainable when they feel like expressions of who you are**, not tasks on a list. You don't have to earn this identity first — you just have to start acting like the person you're becoming.`,
            image:   '/explorer-assets/wellness/l19-magazine-4.png',
            caption: `Identity shift: "I'm someone who..." — every small action is a vote for the person you're becoming`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l19-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'sticks', label: `✅ Makes a New Habit More Likely to Stick`, color: '#34D399' },
              { id: 'harder', label: `❌ Makes a New Habit Harder to Keep`,        color: '#F87171' },
            ],
            items: [
              {
                id:            'l19-g1',
                image:         'l19-game-1.png',
                label:         `Starting with the smallest possible version of a habit — even just two minutes — and doing it consistently.`,
                correctBucket: 'sticks',
                matchPhrase:   `Tiny actions done consistently build the neural pattern that makes a habit automatic. Once the pattern is there, scaling up is easy. Starting too big means the habit never becomes automatic at all.`,
              },
              {
                id:            'l19-g2',
                image:         'l19-game-2.png',
                label:         `Arranging your environment so the healthy choice is easy and obvious — putting trainers by the door, fruit on the counter.`,
                correctBucket: 'sticks',
                matchPhrase:   `Environment shapes behaviour more than motivation does. When the healthy choice is the easiest choice, you don't need willpower to make it — it just happens.`,
              },
              {
                id:            'l19-g3',
                image:         'l19-game-3.png',
                label:         `Trying to change five different habits all at the same time.`,
                correctBucket: 'harder',
                matchPhrase:   `New habits require mental resources to establish. Attempting too many at once divides that resource across all of them, making none of them likely to stick. One habit at a time builds far more reliably.`,
              },
              {
                id:            'l19-g4',
                image:         'l19-game-4.png',
                label:         `Relying only on willpower and motivation to remember and maintain the habit every day.`,
                correctBucket: 'harder',
                matchPhrase:   `Willpower is finite — it depletes over the course of a day and with stress and fatigue. Systems and environment design are far more reliable than willpower alone for sustaining habits long-term.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l19-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l19-q1',
              format:       'mc',
              question:     `What are the three parts of the habit loop?`,
              options:      [
                `Goal, effort, and result`,
                `Cue (trigger), routine (behaviour), and reward (the benefit your brain receives)`,
                `Motivation, action, and outcome`,
                `Intention, repetition, and automaticity`,
              ],
              correctIndex: 1,
              explanation:  `Every habit — wanted or unwanted — runs on the same three-part loop. A cue triggers the behaviour. The routine is the behaviour itself. The reward is what the brain receives from completing the loop — which reinforces it for next time. Understanding this cycle lets you design new habits intentionally: choose your cue, build your routine, and create a clear reward that your brain will want to repeat.`,
            },

            // Q2 — MC (source)
            {
              id:           'l19-q2',
              format:       'mc',
              question:     `Why does starting a new habit with a very small action work better than starting big?`,
              options:      [
                `Because small actions are easier to remember`,
                `Because the habit of showing up consistently matters more than the size of the action — consistency builds the pattern that makes a habit automatic`,
                `Because small habits don't require any motivation at all`,
                `Because it takes less time, making it easier to fit into a busy day`,
              ],
              correctIndex: 1,
              explanation:  `The goal in the early stages of a habit is not achievement — it's pattern. A tiny action done reliably every day builds the neural groove that eventually makes the behaviour automatic. Starting too ambitiously keeps the habit in "effortful" mode, where motivation runs out. Once a small habit is reliable, scaling up is straightforward.`,
            },

            // Q3 — MC (replaced question text — Flag 15)
            {
              id:           'l19-q3',
              format:       'mc',
              question:     `What is the most powerful form of long-lasting habit change?`,
              options:      [
                `Following a strict schedule with no exceptions`,
                `An identity shift — changing how you see yourself, not just what you're trying to do`,
                `Finding the strongest possible motivation for why the habit matters`,
                `Tracking your progress every day to maintain accountability`,
              ],
              correctIndex: 1,
              explanation:  `Behaviour change that lasts tends to follow identity change. When a habit becomes an expression of who you are — "I'm someone who moves regularly" rather than "I'm trying to exercise" — it no longer feels like effort. Every action you take in line with that identity is a vote for it. Over time, those votes build a self-concept that makes the habit sustainable rather than temporary.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l19-q4',
              format:       'tf',
              question:     `The most effective new habits start small enough to do consistently, then gradually scale up — rather than starting at full intensity from day one.`,
              correctAnswer: true,
              explanation:  `True. Starting small is not a compromise — it's a strategy. The brain builds habit patterns through repetition, not through intensity. A two-minute version of a habit done every day for a month creates a stronger foundation than an hour-long version done occasionally. Once the pattern is automatic, increasing the size is easy. Skipping the foundation means the habit never becomes truly automatic.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l19-q5',
              format:       'fill-blank',
              question:     `Every habit runs on a three-part loop: a cue (trigger), a routine (behaviour), and a ___ — the benefit your brain receives that makes it want to repeat the loop.`,
              options:      ['reward', 'result', 'reason', 'reminder'],
              correctIndex: 0,
              explanation:  `The reward is what closes the habit loop and signals to your brain that this pattern is worth repeating. It doesn't have to be dramatic — it just has to be something your brain recognises as a benefit. This is why habits form even when we don't consciously choose them: the brain is constantly identifying cue-routine-reward patterns and reinforcing the ones that feel good. Understanding this gives you the ability to build that loop intentionally.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l19-q6',
              format:       'mc',
              question:     `Why does environment design often work better than willpower for maintaining healthy habits?`,
              options:      [
                `Because willpower doesn't exist — it's just motivation by another name`,
                `Because willpower is a limited resource that depletes with use and stress — environment design makes the healthy choice the default, removing the constant effort`,
                `Because people who design their environments never feel tempted to make unhealthy choices`,
                `Because environmental cues activate the reward part of the habit loop automatically`,
              ],
              correctIndex: 1,
              explanation:  `Willpower is real, but it's finite — it diminishes throughout the day and under stress, exactly when you most need it. Environment design sidesteps this problem entirely: when the healthy choice is the obvious default (trainers at the door, fruit on the counter, phone in another room), you don't need willpower to choose it. The design does the work. This is why small changes to your environment often produce more lasting habit change than repeated acts of discipline.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l19-realworld',
          type: 'real-world',
          content: {
            scenario:    `Habit Design Experiment`,
            description: `Choose one small habit you want to build — something that genuinely matters to you. Make it tiny: two minutes maximum. Identify the cue (what will trigger it), the routine (the action), and the reward (how you'll acknowledge completing it). Design one small change to your environment that makes the habit easier. Do it every day for two weeks without trying to scale up. Notice what happens.`,
            familyAdventure: `Share your habit goals with your family and support each other's experiments. Each person chooses one small habit to build. Check in at the end of each week: did you do it? What made it easier or harder? What small change helped most? Learning to design and track habits together builds a skill that each person will use for the rest of their lives.`,
            realWorldConnection: `Habit researchers consistently find the same thing: the people who sustain healthy behaviour long-term are not the ones with the most willpower — they're the ones who built the best systems. Designing your environment, starting small, and focusing on identity over outcomes are all strategies used by professionals across health, sports, and high performance. These are tools anyone can use.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l19-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that habits are not a mystery — they're a system. And once you understand the system, you can use it to build the life you actually want to live, one small consistent choice at a time. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L19.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L19] Loaded: "Building Healthy Habits That Last" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l19-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L19] One or more magazine assets missing'));
}
