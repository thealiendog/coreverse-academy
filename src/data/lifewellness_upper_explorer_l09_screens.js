// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L09 — Hunger & Fullness
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : intuitive eating principles (Tribole/Resch), the hunger-fullness
//            scale, distinguishing physical from emotional hunger. Builds on
//            L01 (body wisdom) and L03 (food as information).
// CALIBRATED: UE spec v1.1 — protective, anti-restriction, anti-shame
// GAME FORMAT: investigation (real physical hunger / not-hunger signals like
//            boredom/anxiety/thirst / fullness signals). Trick case = "I
//            haven't eaten in 6 hours but I'm not hungry" — body is shut down,
//            not body is fine.
// SCOPE: real hunger signals, real fullness signals, signals that get mistaken
//        for hunger, eating in middle of hunger scale not extremes
// VOICE: Terra = warm, protective, no diet talk, treats hunger as wise
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-09`,
      title: `Hunger & Fullness`,
      duration: 18,
      xpReward: 75,
      badge: `signal-reader`,
      badgeName: `Hunger Signal Reader`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore one of the most important wellness skills you'll ever build: listening to your body's HUNGER and FULLNESS signals. Your body has a beautiful, accurate system for telling you when to eat and when to stop. Many adults have lost touch with these signals from years of dieting, restricting, or eating by rules instead of body wisdom. You can build a different relationship from the start, one where you TRUST your body, eat when you're truly hungry, stop when you're comfortably full, and never feel guilty about either. Take a curious breath, and let's begin.`,
          headline: `Hunger & Fullness`,
          subtitle: `Your body's wise system for telling you when to eat and when to stop`,
          visual: `/ue-assets/lw/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Body Knows When to Eat`,
          paragraphs: [
            `Your body has a sophisticated system for managing energy. When energy gets low, your body sends HUNGER signals to tell you it's time to eat. When you've had enough, your body sends FULLNESS signals to tell you to stop. This system is incredibly accurate, kids are born with it working perfectly. Watch a young toddler who's allowed to eat freely. They eat when hungry, stop when full, and don't think about it much. They TRUST their body completely. Then, over time, many kids lose touch with these signals. They get told to "clean their plate" when they're full. They get put on schedules that don't match their hunger. They start eating for reasons other than hunger (boredom, anxiety, social, just because food is there).`,
            `Researchers Evelyn TRIBOLE and Elyse RESCH developed an approach called INTUITIVE EATING based on the idea that your body's signals are WISE, and learning to honor them is the foundation of a healthy relationship with food. Their research and many others show that kids and adults who eat based on body signals (rather than diet rules or external timers) have healthier relationships with food, more stable weight across their lifetime, less stress around eating, and better digestion. Your body knows. Today, you learn to listen again.`,
          ],
          image: `/ue-assets/lw/l09-s1-body-knows.webp`,
          imageCaption: `Your body has a wise hunger system. Kids are born with it working perfectly. You can reconnect.`,
          vocab: [
            { word: `intuitive eating`,
              definition: `An approach to eating based on listening to your body's hunger and fullness signals, instead of following diet rules or external schedules. Founded by Tribole and Resch. Research shows kids who eat this way have healthier relationships with food, less stress, better digestion.`,
              audioPrompt: `Intuitive eating is an approach to eating based on listening to your body's hunger and fullness signals, {name}. Founded by researchers Evelyn Tribole and Elyse Resch. The core idea is your body's signals are wise, and learning to honor them is the foundation of a healthy relationship with food. Kids are born with this system working perfectly. Many lose touch over time from being told to clean their plate, eating on schedules that don't match hunger, or eating for reasons other than hunger. Reconnecting with these signals rebuilds that wisdom.` },
            { word: `hunger signal`,
              definition: `Your body's way of saying it needs food. Empty or growling stomach, light hollow feeling, dipping energy, mild grumpiness, maybe a slight headache. Clearest when several signals appear together. Real hunger usually builds over time, not all at once. Trust it and eat without guilt.`,
              audioPrompt: `A hunger signal is your body's way of saying it needs food, {name}. Empty or growling stomach. Light hollow feeling. Energy starting to dip. Maybe a slight headache or trouble focusing. Sometimes mild grumpiness. The clearest hunger signal is when several things show up together, empty stomach plus dipping energy plus mild grumpiness. That's your body saying time to eat. Real hunger usually builds over time, not all at once. Trust these signals. They're wise. Eat when you feel them, without guilt or delay.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Real Signals of Hunger and Fullness`,
          paragraphs: [
            `Let's get specific. The REAL signals of physical HUNGER. Empty or growling stomach. Light hollow feeling. Energy starting to dip. Maybe a slight headache or trouble focusing. Sometimes mild grumpiness. As hunger gets stronger, you might feel shaky, very low energy, or quite distracted. The signal usually builds over time, not all at once. The CLEAREST signal is when several things show up together (empty stomach + dipping energy + mild grumpiness, for example). That's your body saying "time to eat."`,
            `The REAL signals of FULLNESS. Comfortable, satisfied feeling. Stomach feels pleasantly fed but not stretched. Food starts to taste less interesting (your body's brilliant way of saying "okay we've got enough"). Mood lifts, energy comes back. You feel like you could comfortably stop now. The CLEAREST fullness signal is the moment food starts tasting less amazing AND your stomach feels satisfied, that's the signal to stop. Most people miss this signal and keep eating past it because they're distracted (screens during meals!), eating too fast, or trained to finish what's on their plate. Eating slowly without distractions makes hunger and fullness signals much easier to hear.`,
          ],
          image: `/ue-assets/lw/l09-s2-real-signals.webp`,
          imageCaption: `Hunger. Empty stomach, dipping energy. Fullness. Satisfied, food tasting less interesting.`,
          vocab: [
            { word: `fullness signal`,
              definition: `Your body's "I have enough now" message: comfortably satisfied stomach, food starting to taste less interesting, mood lifting, energy returning. Easy to miss when distracted or eating fast. Stop when comfortably full, not when stuffed. Eating without screens or distractions makes this signal clear.`,
              audioPrompt: `A fullness signal is your body's "I have enough now" message, {name}. Comfortably satisfied stomach, food starting to taste less interesting, your body's brilliant way of saying we've got enough, mood lifting, energy coming back. The clearest fullness signal is the moment food starts tasting less amazing AND your stomach feels satisfied. That's the moment to stop. Most people miss this signal and keep eating past it because they're distracted by screens, eating too fast, or trained to finish their plate. Eating slowly without distractions makes the signal clear.` },
            { word: `mindful eating`,
              definition: `The practice of eating with full attention — no screens, no rushing, just being present with your food. Makes hunger and fullness signals much easier to hear. Research shows mindful eaters enjoy food more, eat what they actually need, and have less stress around meals.`,
              audioPrompt: `Mindful eating is the practice of eating with full attention, no screens, no rushing, just being present with your food, {name}. Eating mindfully makes hunger and fullness signals much easier to hear. When you're distracted, you miss the moment food starts tasting less interesting, the key fullness signal. When you slow down and pay attention, you can notice when you're satisfied and stop comfortably. Research shows people who eat mindfully enjoy food more, eat what they actually need, and have less stress around meals.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Signals That Aren't Hunger (But Feel Like It)`,
          paragraphs: [
            `Sometimes you'll feel like eating, but it's NOT physical hunger. Common impostors. THIRST, classic L01 misread signal. The brain often confuses thirst for hunger. If you feel "hungry" but ate recently, try water first. BOREDOM, when nothing's happening, food can seem appealing just for entertainment. The trick is noticing the urge isn't body hunger but mind looking for stimulation. ANXIETY or STRESS, big feelings can drive people toward food for comfort. This isn't moral failing, it's a real thing brains do. Naming it (oh, I'm stressed, not actually hungry) often helps you choose differently.`,
            `SOCIAL eating, food is around, people are eating, it feels social. Sometimes you'll eat for connection even if you're not physically hungry, and that's okay! Birthday cake at a party is a perfect example. The key is AWARENESS, knowing why you're eating in any given moment. None of these reasons are bad. Sometimes you'll eat for reasons besides hunger and that's part of being human. The skill is being able to TELL THE DIFFERENCE, so you can choose with awareness. The kid who builds this awareness early has a lifelong gift, knowing what their body actually needs vs. what their mind or emotions are looking for. This protects them from confusion about food forever.`,
          ],
          image: `/ue-assets/lw/l09-s3-impostors.webp`,
          imageCaption: `Common impostors. Thirst, boredom, anxiety, social. Not bad, just not physical hunger.`,
          vocab: [
            { word: `hunger impostors`,
              definition: `Feelings that LOOK like hunger but aren't physical hunger. Common impostors: thirst, boredom, anxiety/stress, social eating. Not bad or moral failures, just real things to notice. The skill is being aware of WHY you're eating in any moment, so you can choose with clarity.`,
              audioPrompt: `Hunger impostors are feelings that look like hunger but aren't physical hunger, {name}. Common impostors include thirst, the brain often confuses thirst for hunger. Boredom, when nothing's happening, food can seem appealing just for entertainment. Anxiety or stress, big feelings can drive people toward food for comfort. Social, food is around, people are eating, it feels social. None of these are bad. Sometimes you'll eat for reasons besides hunger and that's part of being human. The skill is being able to tell the difference, so you can choose with awareness.` },
            { word: `emotional eating`,
              definition: `Using food to manage feelings — eating when anxious, sad, bored, or stressed. Not a moral failure. The skill isn't to never eat for emotional reasons, but to be aware when it's happening. Noticing the feeling underneath lets you choose with clarity: eat, find another comfort, or both.`,
              audioPrompt: `Emotional eating is using food to manage feelings, like eating when anxious, sad, bored, or stressed, {name}. It's not a moral failure. Brains really do seek comfort through food when big feelings show up. The skill isn't to never eat for emotional reasons, but to be aware of when it's happening. Notice the feeling underneath. Ask: am I physically hungry, or am I trying to soothe something? Being aware lets you choose whether to eat, find another comfort, or do both.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Eating in the Middle, Trusting Your Body`,
          paragraphs: [
            `Here's a helpful idea: think of hunger and fullness as a SCALE from 1 to 10. 1 is starving (uncomfortable, shaky, distracted). 5 is neutral, neither hungry nor full. 10 is uncomfortably stuffed (overfull, sluggish, regretful). The healthiest place to live is in the MIDDLE of the scale. Start eating when you're around a 3 or 4 (clearly hungry but not desperate). Stop when you're around a 6 or 7 (comfortably satisfied, not stuffed). This is where your body feels best and your energy is most stable. Eating from the middle of the scale avoids both extremes, the panic of being too hungry and the discomfort of being too full.`,
            `One important note. Sometimes your body will be hungrier on growing days, on active days, or when something exciting is happening. Sometimes you'll be less hungry on calm days or when you're sick. This is NORMAL. Your body knows what it needs and signals accordingly. Don't try to override your body's wisdom. Trust the signals, they're wise. Terra's first teaching about hunger and fullness: your body has a brilliant system for energy. Listen to it. Eat when you're truly hungry. Stop when you're comfortably full. Notice when something other than hunger is calling you to food. Eat without shame, with full presence and joy. Trust your body. It knows what it needs. This skill, built early, protects you from a lifetime of food anxiety and disconnection. You're learning at the perfect age.`,
          ],
          image: `/ue-assets/lw/l09-s4-middle.webp`,
          imageCaption: `Eat when you're around 3-4 hungry. Stop when you're around 6-7 satisfied. Middle of the scale.`,
          vocab: [
            { word: `hunger-fullness scale`,
              definition: `A helpful 1-10 scale for body awareness. 1 = starving, 5 = neutral, 10 = uncomfortably stuffed. Healthiest to eat from middle: start at 3-4 (clearly hungry, not desperate), stop at 6-7 (comfortably satisfied, not stuffed). Avoids both extremes.`,
              audioPrompt: `The hunger-fullness scale is a helpful 1 to 10 way of thinking about body awareness, {name}. 1 is starving, uncomfortable, shaky, distracted. 5 is neutral, neither hungry nor full. 10 is uncomfortably stuffed, overfull, sluggish, regretful. The healthiest place to live is in the middle. Start eating when you're around a 3 or 4, clearly hungry but not desperate. Stop when you're around a 6 or 7, comfortably satisfied, not stuffed. This is where your body feels best and your energy is most stable. Avoids both extremes.` },
            { word: `body trust`,
              definition: `The practice of believing your body knows what it needs and honoring those signals. Eating when hungry, stopping when comfortably full, letting appetite vary from day to day without worry. Research shows people who trust their body's signals have healthier relationships with food and less anxiety around eating.`,
              audioPrompt: `Body trust is the practice of believing that your body knows what it needs and honoring those signals, {name}. Your body has been managing energy accurately since you were born. Trusting it means eating when you're hungry, stopping when you're comfortably full, and letting your appetite vary from day to day without worry. Research shows people who trust their body's signals have healthier relationships with food, less anxiety around eating, and more stable energy across their lives. Your body is on your side.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four moments when a kid feels like eating. Classify each: REAL PHYSICAL HUNGER (body signaling it genuinely needs food, worth honoring), HUNGER IMPOSTOR (feeling that looks like hunger but isn't physical, like thirst, boredom, or anxiety), or FULLNESS SIGNAL (body saying it's had enough, time to stop)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `hunger`,    label: `Real Physical Hunger`,  color: `#34D399`, description: `Body signaling it genuinely needs food. Empty stomach, dipping energy, building over time. Worth honoring.` },
            { id: `impostor`,  label: `Hunger Impostor`,        color: `#FBBF24`, description: `Feeling that looks like hunger but isn't physical. Thirst, boredom, anxiety, social. Worth noticing.` },
            { id: `fullness`,  label: `Fullness Signal`,         color: `#94A3B8`, description: `Body saying "I have enough now." Comfortably satisfied, food less interesting. Time to stop.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Moment #1`,
              clues: [
                { text: `A kid hasn't eaten since breakfast 5 hours ago.` },
                { text: `Their stomach feels empty and growling. Their energy is dipping, they're a bit grumpy and slightly distracted.` },
                { text: `When they eat a balanced lunch, the feelings completely resolve.` },
              ],
              correctAnswer: `hunger`,
              realWorldExample: `Empty stomach, dipping energy, grumpiness, builds over time. Real hunger.`,
              explanation: `Pure real physical hunger. Multiple body signals showing up together (empty stomach, low energy, grumpiness, distraction) is exactly what real hunger looks like. The kid is around 3-4 on the hunger scale, ready to eat. The resolution after lunch confirms it was real hunger. This is the perfect moment to eat and honor the body's wisdom.`,
            },
            {
              id: `case-2`,
              caseTitle: `Moment #2`,
              clues: [
                { text: `A kid is halfway through dinner. Their stomach feels comfortably fed, not stretched.` },
                { text: `The food doesn't taste as exciting as it did at the start. Their mood feels good and stable.` },
                { text: `They feel like they could comfortably stop now.` },
              ],
              correctAnswer: `fullness`,
              realWorldExample: `Food tastes less amazing, comfortable stomach, steady mood. Fullness signal.`,
              explanation: `Pure fullness signal. The kid is around 6-7 on the scale, the sweet spot. Food tasting less interesting is your body's brilliant way of saying "okay, we've got enough." Mood good, stomach comfortable, not stretched. This is the moment to stop. Most people miss this signal and keep eating because they're distracted or trained to finish their plate. Listen to this. Stopping at 6-7 feels great. Going to 9-10 feels uncomfortable.`,
            },
            {
              id: `case-3`,
              caseTitle: `Moment #3`,
              clues: [
                { text: `A kid finished a snack 30 minutes ago and is sitting alone with nothing happening.` },
                { text: `They suddenly feel like having more snacks.` },
                { text: `Their stomach isn't empty. They aren't really tired or low energy. They're just... bored.` },
              ],
              correctAnswer: `impostor`,
              realWorldExample: `Recently ate, stomach not empty, just feeling bored. Classic impostor.`,
              explanation: `Pure hunger impostor. Boredom is one of the most common impostors. When nothing's happening, food can seem appealing just for entertainment. The body signs are wrong, stomach not empty, energy fine, recently ate. Naming it ("Oh, I'm bored, not hungry") often helps. Better options for boredom, do something active, call a friend, work on a project, even just sitting with the boredom (L08 boredom practice!). Not a moral failing, just a moment of awareness.`,
            },
            {
              id: `case-4`,
              caseTitle: `Moment #4: The Tricky One`,
              clues: [
                { text: `A kid hasn't eaten in 6 hours but doesn't feel hungry at all.` },
                { text: `They've been stressed all morning about a big presentation later that day.` },
                { text: `Their stomach feels kind of tight and shut down. The thought of food doesn't appeal at all.` },
              ],
              correctAnswer: `impostor`,
              realWorldExample: `Stress can shut DOWN hunger signals. Not the same as being fine without food.`,
              explanation: `Tricky, {name}! It LOOKS like just "not hungry," so you might say it's a fullness signal or "no signal." But look closely. The kid hasn't eaten in 6 hours, so their body actually NEEDS food. And they're stressed, in alert mode (L06!). When the body is activated by stress, digestion shuts down and hunger signals get suppressed. The kid's "not hungry" feeling is actually a hunger IMPOSTOR caused by stress, not real fullness. Pure impostor in disguise (the suppressed-hunger version). Lesson: stress can OVERRIDE hunger signals, making you feel "not hungry" when you actually need food. The fix: eat something gentle anyway (small balanced snack), or use slow breath (L05!) to settle, which lets hunger return. Listen to L01 body wisdom on what's actually happening, not just the surface feeling. Watching out for this prevents kids and adults from accidentally under-eating during stressful periods (very common during exams, big events, hard times).`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l09-q1`, format: `true-false`,
              question: `True or false: Your body has a built-in, accurate system for knowing when to eat and when to stop.`,
              correctAnswer: true,
              explanation: `True. Your body has a sophisticated, accurate system for managing energy. Kids are born with it working perfectly. Many lose touch over time from being told to clean their plate, eating on schedules that don't match hunger, or external rules. Reconnecting with these signals is foundational wellness.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `What is INTUITIVE EATING?`,
              options: [
                `Eating randomly`,
                `Eating based on your body's HUNGER and FULLNESS signals, instead of following diet rules or external schedules. Founded by Tribole and Resch`,
                `Skipping meals`,
                `Following strict rules`,
              ],
              correctIndex: 1,
              explanation: `Intuitive eating means eating based on your body's hunger and fullness signals instead of following diet rules or external schedules. Founded by researchers Tribole and Resch. Research shows it leads to healthier relationships with food, less stress, better digestion, and more stable weight over a lifetime.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `What are signs of REAL physical HUNGER?`,
              options: [
                `Just one feeling`,
                `Empty/growling stomach, dipping energy, maybe slight headache, mild grumpiness. Usually MULTIPLE signs together, builds over time`,
                `Tightness in chest`,
                `Sweaty palms`,
              ],
              correctIndex: 1,
              explanation: `Real hunger usually shows up as multiple signs together: empty/growling stomach, dipping energy, mild grumpiness, maybe slight headache, trouble focusing. It usually builds over time, not all at once. Multiple signals together is the clearest message.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `What's the FULLNESS signal most people miss?`,
              options: [
                `Stomach exploding`,
                `Food starting to TASTE LESS INTERESTING. Your body's brilliant way of saying "we've got enough"`,
                `Falling asleep`,
                `Burping`,
              ],
              correctIndex: 1,
              explanation: `The clearest fullness signal: food starts tasting less amazing AND your stomach feels comfortably satisfied. Your body's brilliant way of saying "okay, we've got enough." Most people miss this because they're distracted by screens, eating too fast, or trained to finish their plate.` },

            { id: `l09-q5`, format: `multiple-choice`,
              question: `What are HUNGER IMPOSTORS?`,
              options: [
                `Real hunger`,
                `Feelings that look like hunger but aren't physical. Thirst, boredom, anxiety, social eating. Not bad, just worth noticing`,
                `Fake people`,
                `Imaginary`,
              ],
              correctIndex: 1,
              explanation: `Hunger impostors are feelings that look like hunger but aren't physical hunger. Common ones: thirst (often confused with hunger), boredom (food for entertainment), anxiety/stress (food for comfort), social (food because people are eating). Not bad, just worth being aware of, so you can choose with clarity.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `What is the HUNGER-FULLNESS scale?`,
              options: [
                `A scale for weight`,
                `1 to 10. 1 starving, 5 neutral, 10 stuffed. Healthiest is eating from the MIDDLE, start at 3-4, stop at 6-7`,
                `For temperature`,
                `Random numbers`,
              ],
              correctIndex: 1,
              explanation: `The hunger-fullness scale is 1 to 10. 1 = starving (uncomfortable). 5 = neutral. 10 = uncomfortably stuffed. Healthiest to eat from middle: start at 3-4 (clearly hungry, not desperate), stop at 6-7 (comfortably satisfied, not stuffed). Avoids both extremes.` },

            { id: `l09-q7`, format: `true-false`,
              question: `True or false: STRESS can shut DOWN hunger signals, making you feel "not hungry" when you actually need food.`,
              correctAnswer: true,
              explanation: `True. When the body is activated by stress (L06!), digestion shuts down and hunger signals get suppressed. You can feel "not hungry" when you actually need food. The fix: eat something gentle anyway, or use slow breath (L05) to settle so hunger can return. Watch for this during stressful times.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about hunger and fullness?`,
              options: [
                `Follow strict rules`,
                `Your body has a brilliant system. Listen to it. Eat when truly hungry. Stop when comfortably full. Eat without shame. Trust your body. It knows what it needs`,
                `Ignore your body`,
                `Always finish your plate`,
              ],
              correctIndex: 1,
              explanation: `Your body has a brilliant system for energy. Listen to it. Eat when truly hungry. Stop when comfortably full. Notice when something other than hunger is calling you to food. Eat without shame, with full presence and joy. Trust your body. It knows what it needs.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Right now, do a body check-in (L01). On the hunger-fullness scale of 1-10, where are you? What's the signal telling you?` },
            { id: `r2`, text: `Have you noticed yourself eating from a hunger impostor (boredom, anxiety, social)? What was the real feeling underneath?` },
            { id: `r3`, text: `When you eat, are you usually present (no screens, eating slowly) or distracted? How might that be affecting your signals?` },
            { id: `r4`, text: `What's ONE small change you could try this week to listen more to your body's hunger and fullness signals?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Intuitive eating research is some of the most important work in modern nutrition and psychology. Studies on kids, teens, and adults consistently find that people who eat based on internal body signals (rather than diet rules, external timers, or restriction) have healthier relationships with food, more stable weight across their lifetime, less anxiety around eating, fewer eating problems, and better digestion. Restrictive thinking (avoiding "bad" foods, eating on rigid schedules, ignoring hunger or fullness) creates more food problems than it solves. Body trust creates real wellness. Terra's note: you'll eat tens of thousands of meals across your life. Building a calm, trusting, joyful relationship with food, knowing when to eat, knowing when to stop, eating without shame, is one of the most important gifts you can give yourself. Your body knows. Listen. Trust it. Eat with joy. The kid who builds this awareness early avoids the food confusion that plagues so many adults.`,
          familyAdventure: `Family Mindful Meal Practice. As a family, try this once or twice this week. Eat one meal together WITHOUT screens. Eat a little slower than usual. Each person does a body check-in at the start (how hungry am I?) and partway through (how full am I now?). Talk about what you notice. Don't shame anyone for any signal, just notice together. Adults model this practice too. Building family mealtimes around body awareness instead of "clean your plate" or rigid rules helps everyone reconnect with their hunger and fullness signals. A family that eats mindfully together grows kids who trust their bodies for life.`,
          creativePrompt: {
            intro: `Write about your relationship with hunger and fullness, what works, what doesn't, and the kind of eater you want to become.`,
            floor: `Write at least 5 sentences. Describe your usual eating patterns and one small change you want to try.`,
            stretch: `Write 8 to 10 sentences. Reflect on body signals, impostors, and the hunger-fullness scale.`,
            open: `Write as much as you want. Write a full piece about your relationship with hunger and fullness. Describe how you usually experience hunger (what signals come up, how strong, what helps). Describe what fullness usually feels like for you, and whether you usually stop at 6-7 or go past it. Reflect on hunger impostors, have you eaten from boredom, anxiety, or social pressure? End with a description of the kind of eater you want to become, present, trusting, free of shame, attentive to body wisdom, and the small daily practices you'll build. Make it kind, specific, and curious.`,
            frames: [
              `My usual hunger signs are ___.`,
              `My usual fullness signals are ___.`,
              `Hunger impostors I notice in myself are ___.`,
              `The kind of eater I want to become is ___.`,
              `My small commitments this week are ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now understand the most powerful self-trust skill there is around food, listening to your body's HUNGER and FULLNESS signals. You know the real signs of each, the common impostors (thirst, boredom, anxiety, social), the hunger-fullness scale, and the truth that stress can shut down hunger temporarily. Trust your body. Eat with awareness, stop when comfortably full, never with shame. Next, we explore something every kid experiences but few are guided through, YOUR BODY IS CHANGING during these years, and that's normal. YOUR GROWING BODY. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `signal-reader`,
          badgeName: `Hunger Signal Reader`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L09 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
