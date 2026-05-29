// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L18 — Habits That Stick
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real habit formation science — James Clear ("Atomic Habits"),
//            BJ Fogg (tiny habits), Charles Duhigg (habit loop). Applied
//            specifically to wellness practices from this entire subject.
//            Direct callback to Inner World L17 and Social Leadership L18.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (sustainable habits / "willpower" attempts /
//            all-or-nothing perfectionism). Trick case = the "I'll start
//            Monday with EVERYTHING" all-or-nothing trap.
// SCOPE: habits are how wellness actually sticks; start TINY; habit stacking;
//        the all-or-nothing trap; identity-based habits
// VOICE: Terra = practical, encouraging, deeply realistic about how change
//        actually happens. NOT motivational fluff.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-18`,
      title: `Habits That Stick`,
      duration: 18,
      xpReward: 75,
      badge: `habit-builder`,
      badgeName: `Habit Builder`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. You've learned so much across this whole subject, body wisdom, sleep, food, movement, hydration, breath, nervous system, stress recovery, screens, hunger, growing, posture, pain, nature, connection, energy, sickness, body love. But here's the truth most adults wish they'd learned earlier: KNOWING things doesn't change your life. DOING them consistently does. Today, we explore the real science of how HABITS form, and how to actually make wellness practices STICK in your daily life. Not through willpower or motivation, those run out. Through smart design. Take a settled breath, and let's begin.`,
          headline: `Habits That Stick`,
          subtitle: `How wellness practices actually become part of your life. Real habit science`,
          visual: `/ue-assets/lw/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Knowing Isn't Doing`,
          paragraphs: [
            `Most kids and adults THINK they need more INFORMATION to be healthier. "If I just knew the right thing to do, I'd do it." The truth is, most people already KNOW what to do (sleep more, eat real food, move, hydrate, breathe slowly, less screens). The hard part isn't knowing, it's DOING those things consistently over time. Researchers studying behavior have found that knowing facts almost never changes behavior on its own. What changes behavior is HABITS, automatic patterns that happen without requiring willpower or motivation each time.`,
            `Think about brushing your teeth. You don't have to motivate yourself every morning. You don't decide each day whether to brush. It just HAPPENS, because it's a habit. Habits are the brain's brilliant way of automating things so you have mental energy for harder choices. Wellness practices work the same way. When sleep, real food, movement, water, breath, and connection become HABITS, they happen without effort. When they're just "things you should do," they happen sometimes, often not. Building habits is the missing piece for almost everyone. Today, you learn the real science of how habits actually form, so you can build them in your own life.`,
          ],
          image: `/ue-assets/lw/l18-s1-knowing-doing.webp`,
          imageCaption: `Knowing isn't doing. Habits are how wellness actually becomes part of your life.`,
          vocab: [
            { word: `habits`,
              definition: `Automatic patterns that happen without willpower or motivation each time. Your brain's way of automating things so you have mental energy for harder choices. Wellness practices stick when they become habits, NOT when you just "know" you should do them.`,
              audioPrompt: `Habits are automatic patterns that happen without willpower or motivation each time, {name}. Your brain's brilliant way of automating things so you have mental energy for harder choices. Think about brushing your teeth. You don't motivate yourself every morning. It just happens because it's a habit. Wellness practices work the same way. When sleep, real food, movement, water, and breath become habits, they happen without effort. When they're just things you should do, they happen sometimes, often not. Building habits is the missing piece for almost everyone.` },
            { word: `habit loop`,
              definition: `The three-part cycle behind every habit: cue (trigger), routine (behavior), reward (what makes your brain repeat it). Researcher Charles Duhigg mapped how this loop drives nearly all automatic behavior. Understanding the loop helps you build new habits on purpose.`,
              audioPrompt: `A habit loop is the three-part cycle behind every habit: cue, routine, reward, {name}. The cue is a trigger that starts the behavior, a time of day, a location, or another habit. The routine is the behavior itself. The reward is what makes your brain remember to repeat it. Researcher Charles Duhigg mapped how this loop drives nearly all automatic behavior. Understanding the loop helps you build new habits on purpose by designing a clear cue, a tiny routine, and a satisfying reward.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Start TINY (The Most Important Habit Rule)`,
          paragraphs: [
            `Here's the biggest mistake people make trying to build wellness habits: they start TOO BIG. "I'm going to exercise an hour every day starting Monday!" "I'm going to drink 8 glasses of water and meditate every morning!" "I'm going to sleep 10 hours every night from now on!" Researcher BJ FOGG (who studies habit formation at Stanford) found that BIG starts almost always fail. Why? Because they require huge willpower, and willpower runs out fast. The brain resists big sudden changes. Within days, motivation drops, the habit collapses, and the person feels like a failure. They blame themselves, when really the strategy was wrong.`,
            `The wise approach: start RIDICULOUSLY TINY. So tiny it feels almost silly. Instead of "exercise an hour daily," start with "do 5 squats after I brush my teeth." Instead of "drink 8 glasses of water," start with "drink one glass of water right when I wake up." Instead of "meditate 20 minutes," start with "take 3 slow breaths before I get out of bed." Researcher James CLEAR (who wrote "Atomic Habits") found that tiny habits stick because they don't trigger the brain's resistance, they're SO small that doing them is easier than not doing them. Once a tiny habit is automatic (often takes a few weeks), you can grow it gradually. The kid who starts tiny and grows builds habits that last years. The kid who starts big and crashes builds nothing.`,
          ],
          image: `/ue-assets/lw/l18-s2-tiny.webp`,
          imageCaption: `Start ridiculously tiny. Tiny habits stick. Big starts crash. Grow gradually once tiny is automatic.`,
          vocab: [
            { word: `start tiny`,
              definition: `The most important habit rule. Start ridiculously small (5 squats, one glass of water, 3 slow breaths) so doing the habit is easier than not doing it. Tiny habits don't trigger brain resistance. Big starts almost always fail because willpower runs out. Once tiny is automatic, grow gradually.`,
              audioPrompt: `Start tiny is the most important habit rule, {name}. Researchers BJ Fogg and James Clear both found that big starts almost always fail. Big starts require huge willpower, and willpower runs out fast. The brain resists big sudden changes. The wise approach: start ridiculously tiny. So tiny it feels almost silly. Instead of exercise an hour daily, start with 5 squats after brushing teeth. Instead of meditate 20 minutes, start with 3 slow breaths before bed. Tiny habits stick because they don't trigger brain resistance. Grow gradually once automatic.` },
            { word: `willpower`,
              definition: `The mental energy used to make yourself do something your habits haven't automated yet. Research shows it works like a muscle — useful but it fatigues within a day. Habits are more powerful because they run automatically, using no willpower at all. Build habits to save willpower for choices that need it.`,
              audioPrompt: `Willpower is the mental energy used to make yourself do something your habits haven't automated yet, {name}. Researchers found willpower works like a muscle: useful but it fatigues within a day. The more decisions you make, the less willpower you have left. This is why habits are more powerful than willpower. Habits run automatically and use no willpower at all. Every wellness practice you turn into a habit is one less thing draining your daily willpower. Build habits so you can save willpower for choices that actually need it.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Stack Habits Onto Things You Already Do`,
          paragraphs: [
            `Here's a brilliant technique researchers have discovered: HABIT STACKING. Instead of trying to build a new habit from scratch (hard), STACK the new habit onto something you ALREADY do automatically. Your brain already has dozens of automatic routines, brushing teeth, eating breakfast, getting into bed, the morning bus ride. Each of those is an ANCHOR you can attach a new habit to. The formula: "After I [existing habit], I will [new tiny habit]." Examples. "After I brush my teeth in the morning, I will drink one glass of water." "After I sit down for breakfast, I will take 3 slow breaths first." "After I get home from school, I will go outside for 5 minutes."`,
            `Habit stacking works because the existing habit AUTOMATICALLY reminds you to do the new one. You don't have to remember on your own. The trigger is already built into your day. Within a few weeks, the new habit becomes automatic too, attached to the existing one. Once you've stacked one habit, you can stack ANOTHER onto either of them. Over time, you build chains of habits that run automatically through your day. This is how lifelong-healthy people actually live, not through willpower, but through stacked habit chains that took years to build. You can start that process now. One tiny habit, stacked onto something you already do. That's the entire start.`,
          ],
          image: `/ue-assets/lw/l18-s3-stacking.webp`,
          imageCaption: `Stack new habits onto existing automatic ones. The old habit becomes the trigger for the new.`,
          vocab: [
            { word: `habit stacking`,
              definition: `Attaching a new tiny habit onto an existing automatic routine using the formula "After I [existing habit], I will [new tiny habit]." The existing habit becomes a built-in reminder. Researcher-backed technique that lets you build habit chains over time. How lifelong-healthy people actually live.`,
              audioPrompt: `Habit stacking is attaching a new tiny habit onto an existing automatic routine, {name}. Your brain already has dozens of automatic routines — brushing teeth, eating breakfast, getting into bed. Each is an anchor for a new habit. The formula: after I do existing habit, I will do new tiny habit. After I brush my teeth, I'll drink one glass of water. After breakfast, I'll take 3 slow breaths. After school, I'll go outside for 5 minutes. The existing habit becomes a built-in reminder. No willpower needed.` },
            { word: `habit anchor`,
              definition: `An existing automatic routine you already do reliably that you attach a new tiny habit to. Good anchors: brushing teeth, eating meals, bedtime routines, moments of transition. The more automatic the anchor, the better — your new habit piggybacks on pathways already in your brain.`,
              audioPrompt: `A habit anchor is an existing automatic routine you already do reliably that you attach a new tiny habit to, {name}. The anchor is the foundation of habit stacking. Good anchors include morning routines like brushing teeth, eating meals, commute or travel times, bedtime routines, or moments of transition like getting home from school. The more automatic the anchor, the better it works. When you choose a strong anchor, your new habit piggybacks on your brain's existing automatic pathways instead of having to build new ones from scratch.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Identity Habits (Connecting to Inner World L17!)`,
          paragraphs: [
            `Here's the deepest level of habit building, and it connects directly to Inner World L17 (if you took that subject), every action is a vote for the kind of person you want to become. The deepest habits are the ones connected to IDENTITY, who you ARE, not just what you do. Instead of saying "I'm going to try to exercise more," say "I'm becoming someone who moves their body daily." Instead of "I should sleep more," say "I'm becoming someone who sleeps well." This subtle shift is incredibly powerful. Researchers have found that people who identify WITH the habit (rather than feeling forced to do it) keep it longer and find it easier.`,
            `Each tiny wellness action becomes evidence of who you're becoming. Drink one glass of water in the morning? You're someone who hydrates. Step outside for 5 minutes? You're someone who lives in connection with nature. Take 3 slow breaths? You're someone who knows how to calm themselves. The habits and the identity reinforce each other. Over time, you don't have to FIGHT yourself to be healthy, you just ARE someone who treats their body kindly. Terra's first teaching about habits: knowing isn't doing. Start tiny. Stack onto existing routines. Build identity, not just behaviors. Be patient, real habits take weeks to become automatic. And then they last for years. The kid who builds wellness habits now, even tiny ones, becomes an adult who lives healthy almost by default. You have the rest of your life to grow these. The starting place is just ONE tiny habit. What will yours be?`,
          ],
          image: `/ue-assets/lw/l18-s4-identity.webp`,
          imageCaption: `"I'm becoming someone who [moves daily / sleeps well / breathes calmly]." Identity > willpower.`,
          vocab: [
            { word: `identity-based habits`,
              definition: `The deepest habits, connected to who you ARE, not just what you do. "I'm becoming someone who [moves daily/sleeps well/breathes calmly]." Each tiny action becomes evidence of who you're becoming. Research shows identity-based habits stick longer than willpower-based ones. Habits and identity reinforce each other.`,
              audioPrompt: `Identity-based habits are the deepest habits, connected to who you ARE, {name}. Instead of "I should exercise more," say "I'm becoming someone who moves daily." Instead of "I should sleep more," say "I'm becoming someone who sleeps well." Research shows people who identify with a habit keep it longer than those who feel forced to do it. Each tiny action becomes evidence of who you're becoming. Drink one glass of water, you're someone who hydrates. Step outside, you're someone who loves nature. Habits and identity reinforce each other.` },
            { word: `behavior design`,
              definition: `The practice of arranging your environment to make healthy habits easier and unhealthy ones harder. Leave a water glass by your bed, put shoes by the door, phone charger in another room. Researcher BJ Fogg calls this making the good behavior the path of least resistance. Design environment first, then habits follow.`,
              audioPrompt: `Behavior design is the practice of arranging your environment to make healthy habits easier and unhealthy ones harder, {name}. Instead of relying on willpower, you change the environment. Leave a water glass by your bed: hydration becomes easier. Put walking shoes by the door: movement becomes easier. Put your phone charger in another room: less screen time at night becomes easier. Researcher BJ Fogg calls this making the good behavior the path of least resistance. Your environment quietly shapes your behavior, so shape your environment first.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids trying to build wellness habits. Classify each: SUSTAINABLE HABIT (tiny, stacked, identity-connected, designed to actually stick), WILLPOWER ATTEMPT (relying on motivation that runs out), or ALL-OR-NOTHING TRAP (so big or strict that one slip-up crashes everything)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `sustainable`, label: `Sustainable Habit`,   color: `#34D399`, description: `Tiny, stacked onto existing routine, identity-connected. Designed to actually stick. Real habit science.` },
            { id: `willpower`,   label: `Willpower Attempt`,   color: `#FBBF24`, description: `Relying on motivation or daily decision-making. Willpower runs out. Works briefly, then fails.` },
            { id: `allnothing`,  label: `All-Or-Nothing Trap`, color: `#F87171`, description: `So big, strict, or perfect that one missed day collapses the whole thing. Shame spiral, then quitting.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Attempt #1`,
              clues: [
                { text: `A kid wants to drink more water.` },
                { text: `They decide: "After I brush my teeth in the morning, I'll drink one glass of water."` },
                { text: `After two weeks it's automatic, so they add "and a second glass at lunch."` },
              ],
              correctAnswer: `sustainable`,
              realWorldExample: `Tiny, stacked onto existing habit, gradual growth. A sustainable habit.`,
              explanation: `Pure sustainable habit. The kid started TINY (one glass), STACKED onto an existing habit (brushing teeth), and grew it gradually only AFTER the first habit was automatic. This is exactly the science of habit formation. In a year, they'll be drinking water consistently throughout the day without thinking about it. This is how lifelong-healthy people actually build wellness.`,
            },
            {
              id: `case-2`,
              caseTitle: `Attempt #2`,
              clues: [
                { text: `A kid decides to "really focus on being healthy."` },
                { text: `They feel motivated for about a week, exercising hard, eating "perfectly," etc.` },
                { text: `By week two, the motivation fades. They go back to their old routine and feel disappointed in themselves.` },
              ],
              correctAnswer: `willpower`,
              realWorldExample: `Pure motivation without structure. A willpower attempt that fades.`,
              explanation: `Pure willpower attempt. The kid relied entirely on motivation, which always fades. There's no tiny start, no habit stacking, no identity work, no system. Just "trying harder." Within weeks, willpower runs out, the practices collapse, and they feel like they failed. This is the most common pattern in wellness, and it's almost universal. The fix isn't more willpower. It's better DESIGN, tiny habits stacked onto existing ones.`,
            },
            {
              id: `case-3`,
              caseTitle: `Attempt #3`,
              clues: [
                { text: `A kid decides to "transform their wellness."` },
                { text: `Plan: 60 minutes of exercise + 10 hours of sleep + 8 glasses of water + meditate + no sugar + no screens, ALL DAILY, starting Monday.` },
                { text: `By Wednesday they miss one thing, feel like they "ruined it," and quit the whole plan.` },
              ],
              correctAnswer: `allnothing`,
              realWorldExample: `Six big habits, strict daily perfection, collapse from one miss. An all-or-nothing trap.`,
              explanation: `Pure all-or-nothing trap. SIX big habits all at once, daily perfection required, no margin for being human. This was set up to fail. When one thing slipped on Wednesday (because life happens), the whole structure collapsed in a shame spiral. The fix: start with ONE TINY habit. Just one. Get it automatic. THEN add another. All-or-nothing is the most discouraging habit pattern there is, and it's everywhere.`,
            },
            {
              id: `case-4`,
              caseTitle: `Attempt #4: The Tricky One`,
              clues: [
                { text: `A kid says: "Starting tomorrow I'm going to be a NEW PERSON."` },
                { text: `They make a big detailed plan with reminders, charts, rewards, the whole thing.` },
                { text: `It looks well-organized, but the plan has 10 new habits starting at once.` },
              ],
              correctAnswer: `allnothing`,
              realWorldExample: `Well-organized is still an all-or-nothing trap when too many habits start at once.`,
              explanation: `Tricky, {name}! It LOOKS like sustainable habit building because there's a plan, charts, organization. So you might call this sustainable. But look closely. 10 new habits starting at once. Researchers found that even with organization, trying to build many habits simultaneously almost always fails because the brain can only really absorb 1-2 new patterns at a time. Pure all-or-nothing in disguise (the "well-organized" version). Lesson: organization and reminders are good, but they can't override the basic rule, build ONE TINY habit at a time. Get it automatic. THEN add the next. Even the most organized big-plan attempts usually crash within weeks. The wise version: pick ONE tiny habit, master it, then add another. Slow and steady actually builds lasting wellness. Fast and big almost never does.`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l18-q1`, format: `true-false`,
              question: `True or false: KNOWING what to do for wellness automatically leads to actually doing it.`,
              correctAnswer: false,
              explanation: `False. Most people already KNOW what to do (sleep more, eat real food, move, hydrate, less screens). Knowing facts almost never changes behavior on its own. What changes behavior is HABITS, automatic patterns that happen without requiring willpower or motivation each time.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `What is a HABIT?`,
              options: [
                `Something hard`,
                `An AUTOMATIC pattern that happens without willpower or motivation. Your brain's way of automating things so you have mental energy for harder choices`,
                `Random behavior`,
                `Just trying`,
              ],
              correctIndex: 1,
              explanation: `A habit is an automatic pattern that happens without willpower or motivation each time. Like brushing your teeth, you don't have to decide each morning. It just happens. Habits are your brain's brilliant way of automating things so you have mental energy for harder choices. Wellness works the same way.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `What's the BIGGEST mistake people make trying to build wellness habits?`,
              options: [
                `Starting too small`,
                `Starting too BIG. Willpower runs out fast, the brain resists big sudden changes, the habit collapses, they feel like a failure`,
                `Telling people`,
                `Drinking water`,
              ],
              correctIndex: 1,
              explanation: `The biggest mistake is starting too BIG. "I'm going to exercise an hour every day starting Monday!" Researchers BJ Fogg and James Clear found that big starts almost always fail. They require huge willpower, which runs out fast. Within days the habit collapses and the person feels like a failure. Strategy was wrong, not them.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `What is the WISE approach to starting a habit?`,
              options: [
                `Start huge with motivation`,
                `Start RIDICULOUSLY TINY. So small that doing it is easier than not doing it (5 squats, one glass of water, 3 slow breaths)`,
                `Skip habits entirely`,
                `Plan for months`,
              ],
              correctIndex: 1,
              explanation: `Start ridiculously tiny. So tiny it feels almost silly. Instead of "exercise an hour daily," start with "do 5 squats after I brush my teeth." Tiny habits stick because they don't trigger the brain's resistance, they're so small that doing them is easier than not doing them. Once tiny is automatic, grow gradually.` },

            { id: `l18-q5`, format: `multiple-choice`,
              question: `What is HABIT STACKING?`,
              options: [
                `Putting habits in piles`,
                `Attaching a new tiny habit onto an EXISTING automatic routine. "After I [existing habit], I will [new tiny habit]"`,
                `Doing many habits at once`,
                `Random combinations`,
              ],
              correctIndex: 1,
              explanation: `Habit stacking attaches a new tiny habit onto an existing automatic routine. Formula: "After I [existing habit], I will [new tiny habit]." Examples: "After I brush my teeth, I'll drink one glass of water." "After breakfast, I'll take 3 slow breaths." The existing habit becomes a built-in reminder.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `What are IDENTITY-BASED habits?`,
              options: [
                `Wearing a name tag`,
                `Habits connected to WHO YOU ARE, not just what you do. "I'm becoming someone who moves daily, sleeps well, or breathes calmly." Stick longer than willpower-based`,
                `Personality tests`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Identity-based habits are connected to who you ARE. Instead of "I should exercise," say "I'm becoming someone who moves their body daily." Research shows people who identify WITH the habit keep it longer and find it easier. Each tiny action becomes evidence of who you're becoming.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `Why do ALL-OR-NOTHING attempts usually FAIL?`,
              options: [
                `They don't, they're great`,
                `So big, strict, or perfect that one missed day COLLAPSES the whole thing. Shame spiral, then quitting`,
                `Random reasons`,
                `Just bad luck`,
              ],
              correctIndex: 1,
              explanation: `All-or-nothing attempts are so big or strict that one missed day collapses the whole thing. Person feels they "ruined it" and quits. The fix isn't more willpower, it's building ONE tiny habit at a time. Even well-organized plans with many habits at once usually fail. Slow and steady actually builds lasting wellness.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about habits?`,
              options: [
                `Try harder`,
                `Knowing isn't doing. Start TINY. Stack onto existing routines. Build IDENTITY, not just behaviors. Be patient. Real habits take weeks. Then they last for years`,
                `Habits don't matter`,
                `Information is enough`,
              ],
              correctIndex: 1,
              explanation: `Knowing isn't doing. Start tiny. Stack onto existing routines. Build identity, not just behaviors. Be patient, real habits take weeks to become automatic. And then they last for years. The kid who builds wellness habits now, even tiny ones, becomes an adult who lives healthy almost by default.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever tried to "be healthier" with willpower and motivation, then crashed? Be gentle, what was the pattern?` },
            { id: `r2`, text: `Of all the wellness practices in this subject (sleep, food, movement, breath, hydration, nature, connection, etc.), which ONE feels most important for you to build into a habit?` },
            { id: `r3`, text: `What's a TINY version of that habit you could start with? Even smaller than you think. And what EXISTING habit could you stack it onto?` },
            { id: `r4`, text: `Try writing an identity statement: "I'm becoming someone who ___." Notice how it feels different from "I should ___."` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Habit research has transformed how psychologists, doctors, and behavior scientists think about health behavior change. The old model (try harder, willpower, motivation) almost always fails. The new science-backed model (start tiny, stack onto existing routines, build identity, be patient) works much better. James Clear's book Atomic Habits has sold millions of copies because the principles actually work. Terra's note: across this whole subject, you've learned what to do for wellness. Today is about HOW to actually live it. Don't try to do everything at once. Pick ONE tiny habit. Stack it onto something you already do. Let it become automatic over a few weeks. Then add another. In a year, you'll have built several wellness habits. In 5 years, more. By the time you're an adult, you'll have built the foundation that most adults wish they had. The starting place is just ONE tiny habit, today. The smallest possible step is the most powerful one.`,
          familyAdventure: `Family Tiny Habit Practice. As a family, each person picks ONE tiny wellness habit to stack onto an existing routine this week. Examples: "After I brush my teeth, I'll drink one glass of water." "After dinner, we'll take a 5-minute walk together." "Before bed, we'll do 3 slow breaths." Tiny. One. Stacked. Adults model it too. At the end of the week, share whether the tiny habit stuck. Notice the difference between approaches that worked (truly tiny) and ones that didn't (still too big). Building tiny-habit awareness as a family is a gift that lasts.`,
          creativePrompt: {
            intro: `Write your personal Habit Plan — ONE tiny wellness habit you'll start now, stacked onto an existing routine.`,
            floor: `Write at least 5 sentences. Name the habit, the stack, and the identity it connects to.`,
            stretch: `Write 8 to 10 sentences. Build a fuller plan with the tiny habit, stack, identity, and how you'll grow it over time.`,
            open: `Write as much as you want. Write your full personal HABIT PLAN. Identify ONE wellness practice from this whole subject (sleep, food, movement, breath, hydration, nature, connection, body kindness, anything) that matters most to you right now. Describe the TINY version of that practice (smaller than you think). Identify the EXISTING habit you'll stack it onto using "After I X, I will Y." Connect it to IDENTITY ("I'm becoming someone who..."). Describe how you'll keep it tiny for the first few weeks (no growing yet), then how you'll consider growing it gradually. Acknowledge that you'll miss days, that's human, and write yourself a kind sentence for those days. End with the truth that you're building habits that will support your wellness for the rest of your life, one tiny moment at a time. Make it specific, realistic, and kind.`,
            frames: [
              `The ONE wellness practice I want to make a habit is ___.`,
              `The tiny version of it is ___.`,
              `The existing habit I'll stack it onto is ___, so: "After I ___, I will ___."`,
              `The identity I'm building is "I'm becoming someone who ___."`,
              `When I miss a day, I'll remind myself ___.`,
              `In a year, this tiny habit will have built ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Smart, practical work, {name}. You now know the real science of how habits stick. Knowing isn't doing. Start tiny. Stack onto existing routines. Build identity, not just behaviors. Be patient, real habits take weeks. Then they last for years. Pick ONE tiny habit and start. That's the entire secret. Next, we zoom out to the LONG view, your body across an entire lifetime. The kind care you're learning compounds across decades. YOUR BODY ACROSS A LIFETIME. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `habit-builder`,
          badgeName: `Habit Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L18;
