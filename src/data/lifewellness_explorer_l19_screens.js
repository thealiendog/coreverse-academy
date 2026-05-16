// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L19 — Building Healthy Habits That Last
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L19 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-19`,
      title:     `Building Healthy Habits That Last`,
      duration:  12,
      xpReward:  50,
      badge:     `habit-builder`,
      badgeName: `Habit Builder`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Here's something about habits, {name}, that I find genuinely interesting: the research shows they're not really about willpower at all. Willpower runs out. It's a limited resource. The people who sustain healthy habits long-term are not more disciplined than everyone else — they've designed their environment and routines in a way that makes the habit easier than the alternative. That's a learnable skill, and it changes everything. Today we're looking at how habits actually form in the brain, why some stick and others don't, and how to use that understanding to build the routines that will carry you toward the health and the life you actually want.`,
          headline: `Building Healthy Habits That Last`,
          subtitle: `Habits are not about willpower — they're about understanding how your brain works, and using that understanding to build the life you actually want`,
          visual: `/explorer-assets/wellness/l19-welcome.png`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Habits Aren't About Willpower`,
          paragraphs: [
            `Here's something genuinely interesting about habits.`,
            `They're not really about willpower — willpower is a LIMITED RESOURCE. The people who sustain healthy habits have designed their environment so the habit is easier than the alternative. That's a SKILL.`,
          ],
          image: `/explorer-assets/wellness/l19-s1-not-willpower.png`,
          imageCaption: `The people with the best habits aren't more disciplined. They've built better systems. And that's something you can learn.`,
          vocab: [
            { word: `willpower`, definition: `A finite mental resource. Depletes through the day and under stress. Not what sustainable habits actually run on.`,
              audioPrompt: `Willpower is real, {name}, but it's also limited. It depletes through the day, especially when you're tired or stressed. That's why relying on it to sustain habits doesn't usually work long-term — exactly when you most need it, it's most depleted. The good news is that you don't have to rely on willpower. You can build systems and environments that make good choices easier without it.` },
            { word: `system`,    definition: `A designed setup — habits, routines, environment — that makes good choices easier and more automatic. Far more reliable than willpower.`,
              audioPrompt: `A system is the structure you build around a habit, {name} — the cues you set up, the environment you arrange, the routines you stack. Once a good system is in place, it does most of the work for you. You don't have to feel motivated each day. You don't have to decide. The system makes the habit happen. That's why people with strong systems often look more disciplined than they actually are.` },
            { word: `skill`,     definition: `What habit-building actually is. Learnable, not innate. People who are good at it learned the techniques — anyone can.`,
              audioPrompt: `Habit-building is a skill, {name} — not a personality trait. The people who are good at it learned specific techniques: starting small, designing environments, working with the habit loop, focusing on one thing at a time. Anyone can learn these. The difference between someone who sustains healthy habits and someone who doesn't isn't usually character — it's whether they know the skill.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Habit Loop`,
          paragraphs: [
            `Every habit you have runs on the same three-part loop.`,
            `CUE (a trigger — time, place, emotion). ROUTINE (the action itself). REWARD (the benefit your brain receives). Understand this loop and you can DESIGN new habits intentionally.`,
          ],
          image: `/explorer-assets/wellness/l19-s2-habit-loop.png`,
          imageCaption: `Cue. Routine. Reward. The three-part cycle behind every habit you have — wanted or unwanted. Once you see it, you can shape it.`,
          vocab: [
            { word: `cue`,     definition: `A trigger — a time, place, emotion, or thing you see — that tells your brain to start a particular behavior automatically.`,
              audioPrompt: `A cue is what starts a habit, {name} — the trigger your brain uses to know it's time to run a familiar pattern. It could be a time of day, a place, a feeling, or something you see or hear. Once a habit is established, the cue alone is enough to set the whole sequence in motion. That's why habits feel so automatic — your brain isn't deciding each time, it's just responding to the signal.` },
            { word: `routine`, definition: `The behavior itself — the action your brain performs once a cue triggers the habit loop.`,
              audioPrompt: `The routine is the action at the center of every habit loop, {name}. It's what happens between the cue and the reward — the behavior that's becoming (or has become) automatic. What Terra finds remarkable is that routines can be almost anything: physical, mental, emotional. Your brain treats them all the same way — as patterns worth reinforcing if a reward follows.` },
            { word: `reward`,  definition: `The benefit your brain receives at the end of a habit loop. What signals to it that this pattern is worth remembering and repeating.`,
              audioPrompt: `The reward is what closes the loop, {name} — it's the signal your brain receives that says this pattern is worth keeping. It doesn't have to be big or obvious. Sometimes a reward is just a feeling of satisfaction, calm, or energy. But it matters, because without it, the brain has no reason to lock in the behavior. When you understand this, you can design habits intentionally — building in a clear reward that makes repeating the loop feel worthwhile.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Start Smaller Than You Think`,
          paragraphs: [
            `The best way to build a new habit is to start SMALL.`,
            `Smaller than feels meaningful. Want to read? Two minutes. Want to move? One set. The habit of SHOWING UP consistently matters more than the size of what you do.`,
          ],
          image: `/explorer-assets/wellness/l19-s3-start-smaller.png`,
          imageCaption: `Start tiny. Show up daily. The pattern is what matters — once it's automatic, scaling up is easy. Most habits fail because they start too big.`,
          vocab: [
            { word: `consistency`,  definition: `Showing up regularly. Doing the habit most days, even in a tiny version. Matters far more than size or intensity.`,
              audioPrompt: `Consistency is what builds habits, {name} — not intensity, not size, not perfect performance. Showing up in a small way every day creates a pattern your brain treats as reliable. And reliable patterns become automatic. Terra has watched so many people abandon habits they genuinely wanted because they started too big. Starting small and showing up consistently is the smarter path — always.` },
            { word: `pattern`,      definition: `A repeated sequence of behavior. What your brain recognizes, stores, and eventually runs automatically. The foundation of every habit.`,
              audioPrompt: `Your brain is a pattern-recognition machine, {name}. When it sees the same sequence repeated enough times, it stores that sequence and starts running it automatically — that's what a habit is. The goal in the early days of a new habit is not to do a lot; it's to repeat the pattern reliably. Even a tiny version of the action, done consistently, is enough to start building the neural groove that makes the habit stick.` },
            { word: `automaticity`, definition: `The point where a habit happens without conscious effort. The destination every habit is heading toward — once you stop having to decide.`,
              audioPrompt: `Automaticity is the point every habit is heading toward, {name} — the stage where you don't have to think about doing it, you just do it. Brushing your teeth, putting on a seatbelt, reaching for water instead of something else: these all used to require a decision. Now they don't. That's what automaticity feels like. The habits that matter most to your wellbeing can get there too — but only if you build them gradually enough that they can become automatic before the effort runs out.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Design Your Environment`,
          paragraphs: [
            `Environment shapes behavior more than motivation does.`,
            `Trainers by the door. Fruit on the counter. Phone in another room. Book on the pillow. Each one makes the healthy choice the EASIEST choice — no willpower required.`,
          ],
          image: `/explorer-assets/wellness/l19-s4-environment-design.png`,
          imageCaption: `Make the right choice the easy choice. Your environment will run on autopilot whether you design it or not — so you might as well design it deliberately.`,
          vocab: [
            { word: `environment design`, definition: `Intentionally arranging your surroundings so good choices are easy, visible, and the obvious default. Removes the need for willpower.`,
              audioPrompt: `Environment design is one of Terra's favorite habit tools, {name}, because it takes willpower out of the equation entirely. When your trainers are by the door, you don't decide to exercise — you just put them on. When fruit is on the counter, you reach for it. The environment makes the decision for you. This is far more reliable than trying to feel motivated at the moment of choice — your surroundings can do the work instead.` },
            { word: `default`,            definition: `What happens automatically when you're not actively deciding. Shaped powerfully by how your environment is arranged.`,
              audioPrompt: `Your default is what happens when you're not really thinking, {name} — what you reach for, where you sit, what you do first. Most of those defaults are set by your environment, not by your character. If your phone is on your desk, it becomes the default. If a book is there instead, that becomes the default. Changing your defaults is one of the highest-leverage things you can do — because defaults are what govern most of your day.` },
            { word: `friction`,           definition: `The effort or resistance involved in doing something. Add it to break a habit, remove it to build one.`,
              audioPrompt: `Friction is the resistance between you and an action, {name}. The more friction there is, the less likely you are to do something — even if you want to. Charging your phone in another room adds friction to scrolling. Putting your water bottle on your desk removes friction from staying hydrated. You can use this deliberately: add friction to habits you want to do less, remove it from the ones you want to build. It's a remarkably simple idea that actually works.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `One at a Time`,
          paragraphs: [
            `New habits take real mental resources to establish.`,
            `Trying to build five at once divides that resource across all of them. None stick. ONE habit at a time. Get it automatic. Then add the next. Patience compounds faster than ambition.`,
          ],
          image: `/explorer-assets/wellness/l19-s5-one-at-a-time.png`,
          imageCaption: `Five new habits at once = none of them stick. One habit, built to automatic, then the next. Slower in feel, faster in result.`,
          vocab: [
            { word: `focus`,      definition: `Directing your habit-building energy at one thing until it's automatic. The single most effective approach to lasting change.`,
              audioPrompt: `Focus matters more in habit-building than most people realize, {name}. Trying to change five things at once feels ambitious — but it almost always fails. Your brain has finite resources for new behavior. Concentrate them on one habit. Get it automatic. Then move on. It feels slower at first, but the habits that actually stick are the ones you've given full attention to.` },
            { word: `bandwidth`,  definition: `The mental capacity you have available at any time. Limited. Divided across too many new habits, it stretches too thin to make any of them stick.`,
              audioPrompt: `Bandwidth is the amount of mental energy you have available, {name}, and it's not infinite. Each new habit you're trying to build takes a piece of it. Three or four at once stretches you thin. Five almost guarantees none will stick. Treating bandwidth as a real, limited resource — and protecting it — is one of the smartest things you can do for sustainable change.` },
            { word: `foundation`, definition: `An established habit, now automatic, that you can stack new habits on. The starting point for adding the next one.`,
              audioPrompt: `Once a habit becomes automatic, it becomes a foundation you can build on, {name}. New habits attach more easily to existing ones — you can stack them. After your morning glass of water is automatic, adding two minutes of stretching is easier. Then a few minutes outside. Each habit is a foundation for the next. That's how lives transform over time — one solid layer at a time.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Become the Person`,
          paragraphs: [
            `The most powerful habit change isn't behavior — it's IDENTITY.`,
            `Not "I'm trying to sleep more." Instead: "I'm someone who protects their sleep." Every small action is a VOTE for that identity. Habits become natural when they feel like expressions of who you are.`,
          ],
          image: `/explorer-assets/wellness/l19-s6-become-person.png`,
          imageCaption: `"I'm someone who..." Every small action votes for that person. You don't have to earn the identity first. Just start acting like the person you're becoming.`,
          vocab: [
            { word: `identity`,     definition: `How you see and describe yourself. The deepest level habits live at — and the most powerful place to drive change.`,
              audioPrompt: `Identity is the deepest level at which habits live, {name}. When you see yourself as someone who takes care of their body, makes time to read, moves regularly, or protects their sleep — those habits start to feel like expressions of who you are, not tasks on a to-do list. Terra believes this shift is one of the most important things a person can make. You don't have to earn the identity first. You just have to start acting like the person you're becoming.` },
            { word: `self-concept`, definition: `The picture you carry of who you are. Not fixed — built and reshaped by accumulated small actions over time.`,
              audioPrompt: `Your self-concept is the story you carry about who you are, {name}. And here's what research shows: that story is not fixed. Every action you take is a small piece of evidence for or against it. Act in line with who you want to be — even once, even in a tiny way — and you've cast a vote for that self-concept. Over time, those votes accumulate into a story that feels true. That's how identity changes: not all at once, but one small choice at a time.` },
            { word: `vote`,         definition: `A small action that counts as evidence for the kind of person you are. No single vote decides who you become — the accumulated pattern does.`,
              audioPrompt: `Think of each small healthy choice as a vote, {name}. Drinking water: a vote. Going outside: a vote. Getting enough sleep: a vote. No single vote decides the election — but the accumulated pattern of votes builds the identity. You don't need to be perfect. You just need to cast more votes in the direction you want to go than in the direction you don't. Terra loves this way of thinking about it, because it makes every small action count for something real.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `sticks`,
              label: `✅ Makes a New Habit More Likely to Stick`,
              color: `#34D399`,
            },
            {
              id: `harder`,
              label: `❌ Makes a New Habit Harder to Keep`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l19-g1`,
              image: `l19-game-1.png`,
              label: `Starting with the smallest possible version of a habit — even just two minutes — and doing it consistently.`,
              matchPhrase: `Tiny actions done consistently build the neural pattern that makes a habit automatic. Once the pattern is there, scaling up is easy. Starting too big means the habit never becomes automatic at all.`,
              correctMatch: `sticks`,
            },
            {
              id: `l19-g2`,
              image: `l19-game-2.png`,
              label: `Arranging your environment so the healthy choice is easy and obvious — putting trainers by the door, fruit on the counter.`,
              matchPhrase: `Environment shapes behaviour more than motivation does. When the healthy choice is the easiest choice, you don't need willpower to make it — it just happens.`,
              correctMatch: `sticks`,
            },
            {
              id: `l19-g3`,
              image: `l19-game-3.png`,
              label: `Trying to change five different habits all at the same time.`,
              matchPhrase: `New habits require mental resources to establish. Attempting too many at once divides that resource across all of them, making none of them likely to stick. One habit at a time builds far more reliably.`,
              correctMatch: `harder`,
            },
            {
              id: `l19-g4`,
              image: `l19-game-4.png`,
              label: `Relying only on willpower and motivation to remember and maintain the habit every day.`,
              matchPhrase: `Willpower is finite — it depletes over the course of a day and with stress and fatigue. Systems and environment design are far more reliable than willpower alone for sustaining habits long-term.`,
              correctMatch: `harder`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l19-q1`,
              format: `multiple-choice`,
              question: `What are the three parts of the habit loop?`,
              options: [
                `Goal, effort, and result`,
                `Cue (trigger), routine (behaviour), and reward (the benefit your brain receives)`,
                `Motivation, action, and outcome`,
                `Intention, repetition, and automaticity`,
              ],
              correctIndex: 1,
              explanation: `Every habit — wanted or unwanted — runs on the same three-part loop. A cue triggers the behaviour. The routine is the behaviour itself. The reward is what the brain receives from completing the loop — which reinforces it for next time. Understanding this cycle lets you design new habits intentionally: choose your cue, build your routine, and create a clear reward that your brain will want to repeat.`,
            },
            {
              id: `l19-q2`,
              format: `multiple-choice`,
              question: `Why does starting a new habit with a very small action work better than starting big?`,
              options: [
                `Because small actions are easier to remember`,
                `Because the habit of showing up consistently matters more than the size of the action — consistency builds the pattern that makes a habit automatic`,
                `Because small habits don't require any motivation at all`,
                `Because it takes less time, making it easier to fit into a busy day`,
              ],
              correctIndex: 1,
              explanation: `The goal in the early stages of a habit is not achievement — it's pattern. A tiny action done reliably every day builds the neural groove that eventually makes the behaviour automatic. Starting too ambitiously keeps the habit in "effortful" mode, where motivation runs out. Once a small habit is reliable, scaling up is straightforward.`,
            },
            {
              id: `l19-q3`,
              format: `multiple-choice`,
              question: `What is the most powerful form of long-lasting habit change?`,
              options: [
                `Following a strict schedule with no exceptions`,
                `An identity shift — changing how you see yourself, not just what you're trying to do`,
                `Finding the strongest possible motivation for why the habit matters`,
                `Tracking your progress every day to maintain accountability`,
              ],
              correctIndex: 1,
              explanation: `Behaviour change that lasts tends to follow identity change. When a habit becomes an expression of who you are — "I'm someone who moves regularly" rather than "I'm trying to exercise" — it no longer feels like effort. Every action you take in line with that identity is a vote for it. Over time, those votes build a self-concept that makes the habit sustainable rather than temporary.`,
            },
            {
              id: `l19-q4`,
              format: `true-false`,
              question: `The most effective new habits start small enough to do consistently, then gradually scale up — rather than starting at full intensity from day one.`,
              correctAnswer: true,
              explanation: `True. Starting small is not a compromise — it's a strategy. The brain builds habit patterns through repetition, not through intensity. A two-minute version of a habit done every day for a month creates a stronger foundation than an hour-long version done occasionally. Once the pattern is automatic, increasing the size is easy. Skipping the foundation means the habit never becomes truly automatic.`,
            },
            {
              id: `l19-q5`,
              format: `fill-blank`,
              question: `Every habit runs on a three-part loop: a cue (trigger), a routine (behaviour), and a ___ — the benefit your brain receives that makes it want to repeat the loop.`,
              options: [
                `reward`,
                `result`,
                `reason`,
                `reminder`,
              ],
              correctIndex: 0,
              explanation: `The reward is what closes the habit loop and signals to your brain that this pattern is worth repeating. It doesn't have to be dramatic — it just has to be something your brain recognises as a benefit. This is why habits form even when we don't consciously choose them: the brain is constantly identifying cue-routine-reward patterns and reinforcing the ones that feel good. Understanding this gives you the ability to build that loop intentionally.`,
            },
            {
              id: `l19-q6`,
              format: `multiple-choice`,
              question: `Why does environment design often work better than willpower for maintaining healthy habits?`,
              options: [
                `Because willpower doesn't exist — it's just motivation by another name`,
                `Because willpower is a limited resource that depletes with use and stress — environment design makes the healthy choice the default, removing the constant effort`,
                `Because people who design their environments never feel tempted to make unhealthy choices`,
                `Because environmental cues activate the reward part of the habit loop automatically`,
              ],
              correctIndex: 1,
              explanation: `Willpower is real, but it's finite — it diminishes throughout the day and under stress, exactly when you most need it. Environment design sidesteps this problem entirely: when the healthy choice is the obvious default (trainers at the door, fruit on the counter, phone in another room), you don't need willpower to choose it. The design does the work. This is why small changes to your environment often produce more lasting habit change than repeated acts of discipline.`,
            },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Habit researchers consistently find the same thing: the people who sustain healthy behaviour long-term are not the ones with the most willpower — they're the ones who built the best systems. Designing your environment, starting small, and focusing on identity over outcomes are all strategies used by professionals across health, sports, and high performance. These are tools anyone can use.`,
          familyAdventure: `Share your habit goals with your family and support each other's experiments. Each person chooses one small habit to build. Check in at the end of each week: did you do it? What made it easier or harder? What small change helped most? Learning to design and track habits together builds a skill that each person will use for the rest of their lives.`,
          creativePrompt: `Choose one small habit you want to build — something that genuinely matters to you. Make it tiny: two minutes maximum. Identify the cue (what will trigger it), the routine (the action), and the reward (how you'll acknowledge completing it). Design one small change to your environment that makes the habit easier. Do it every day for two weeks without trying to scale up. Notice what happens.`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that habits are not a mystery — they're a system. And once you understand the system, you can use it to build the life you actually want to live, one small consistent choice at a time. Terra is so proud to walk this path with you.`,
          badge: `habit-builder`,
          badgeName: `Habit Builder`,
          xpEarned: 50,
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
    fetch('/explorer-assets/wellness/l19-s1-not-willpower.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-s2-habit-loop.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-s3-start-smaller.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-s4-environment-design.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-s5-one-at-a-time.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l19-s6-become-person.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L19] One or more magazine assets missing'));
}
