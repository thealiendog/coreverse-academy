// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L06 — Your Nervous System
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real autonomic nervous system science — sympathetic vs
//            parasympathetic, fight/flight/freeze (Polyvagal-informed),
//            stuck states and how to come back to calm. Stephen Porges.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (sympathetic activated / parasympathetic rest /
//            stuck activation needing tools). Trick case = "stuck activated"
//            mistaken for personality.
// SCOPE: nervous system has two modes, both are normal and needed, getting
//        STUCK in one is the problem, how to come back to balance with tools
// VOICE: Terra = grounded, calm, deeply knowing — the wolf's regulated
//        nervous system is the model
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-06`,
      title: `Your Nervous System`,
      duration: 18,
      xpReward: 75,
      badge: `nervous-system-friend`,
      badgeName: `Nervous System Friend`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore something inside your body that runs almost everything you feel, your NERVOUS SYSTEM. Specifically, the part that decides whether you're alert and ready for action, OR calm and able to rest. This system is brilliantly designed, BOTH modes are healthy and necessary. The trouble starts when we get STUCK in one mode (usually the alert one) and can't come back to calm. Today, you learn how this system works, the two modes, the signs you're in each, and the real tools to bring yourself back to balance when you need to. Take a slow, settled breath, and let's begin.`,
          headline: `Your Nervous System`,
          subtitle: `The "alert mode" vs. "rest mode" inside you — and how to find balance`,
          visual: `/ue-assets/lw/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Modes: Alert and Rest`,
          paragraphs: [
            `Inside your body is an automatic system called the AUTONOMIC NERVOUS SYSTEM. It runs in the background, controlling your heart rate, breathing, digestion, hormones, and energy, without you having to think about it. This system has TWO MAIN MODES. The first is SYMPATHETIC, your "alert mode." When activated, your heart speeds up, breathing gets quicker, muscles tense, focus narrows, digestion slows. Your body is preparing for ACTION, fight, flight, or freeze. This mode is essential when there's a real challenge, a tough game, an important test, a hard moment, danger. It gives you energy and focus to handle things.`,
            `The second mode is PARASYMPATHETIC, your "rest and repair mode." When activated, your heart slows, breathing deepens, muscles relax, digestion works well, energy gets restored. Your body is RECOVERING and HEALING. This mode is essential too, it's when your body does its repair work, when you can think clearly, learn, connect with others, and feel calm. Both modes are healthy and necessary. The problem isn't having either one, it's getting STUCK in one (especially the alert mode) without being able to return to rest. Researcher Stephen PORGES studied this for decades and found that humans need to flow BETWEEN the two modes throughout the day, alert when needed, then back to calm. When the system stays activated for too long, mental and physical health start to suffer.`,
          ],
          image: `/ue-assets/lw/l06-s1-two-modes.webp`,
          imageCaption: `Two modes: alert (sympathetic) and rest (parasympathetic). Both healthy. Flowing between is key.`,
          vocab: [
            { word: `autonomic nervous system`,
              definition: `The automatic system inside your body that controls heart rate, breathing, digestion, hormones, and energy without conscious thought. Has two modes: SYMPATHETIC (alert/action) and PARASYMPATHETIC (rest/repair). Both healthy; flowing between them is the goal.`,
              audioPrompt: `Your autonomic nervous system is the automatic system inside your body that runs everything in the background, {name}. Heart rate, breathing, digestion, hormones, energy. It has two main modes. Sympathetic is alert mode, when activated, your heart speeds up, breathing gets quicker, muscles tense, focus narrows. Parasympathetic is rest mode, your heart slows, breathing deepens, muscles relax, digestion works well, energy gets restored. Both modes are healthy and necessary. The problem isn't either one. It's getting stuck in one, especially alert mode, without being able to return to rest.` },
            { word: `fight, flight, or freeze`,
              definition: `The three automatic responses your nervous system uses in alert mode. Fight means facing the challenge head-on. Flight means escaping. Freeze means going very still. All three are survival responses for real danger — the trouble is modern stressors (tests, screens, social pressure) can trigger these same ancient responses.`,
              audioPrompt: `Fight, flight, or freeze are the three responses your nervous system uses in alert mode, {name}. Fight means facing the challenge head-on. Flight means running away or escaping. Freeze means going very still, sometimes hiding, sometimes shutting down. All three are survival responses your body runs automatically when it senses a threat or big challenge. They're brilliant for real danger. The trouble is that modern stress, social pressure, tests, and screens can trigger these same ancient responses even when there's no real physical threat.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Body Signs of Each Mode`,
          paragraphs: [
            `Learning to recognize which mode you're in is a major wellness skill. The body signs of SYMPATHETIC ACTIVATION (alert mode). Heart racing or beating hard. Faster, shallower breathing. Tense shoulders, jaw, or stomach. Sweaty palms, dry mouth. Mind racing or jumping to worst-case scenarios. Hard to sit still, fidgety. Feeling on-edge, irritable, or scared. Trouble focusing on calm tasks. Digestion paused (you might feel "not hungry" even at meal times). This is your body saying "I'm preparing to handle something." Normal and useful when actually needed.`,
            `The body signs of PARASYMPATHETIC REST (rest mode). Heart steady and calm. Slow, deep breathing. Relaxed muscles. Soft jaw, soft belly. Able to focus easily. Connecting well with others. Feeling settled, content, or curious. Hungry at meal times. Sleepy when it's time to sleep. This is your body saying "I'm safe enough to rest and repair." Notice: when you're in REST MODE, learning works better, friendships feel easier, you're more creative, your immune system works well, and you actually feel like yourself. That's why bringing yourself back to rest mode after stress is one of the most important wellness skills.`,
          ],
          image: `/ue-assets/lw/l06-s2-signs.webp`,
          imageCaption: `Alert mode: heart racing, tense muscles, shallow breath. Rest mode: steady, soft, calm, present.`,
          vocab: [
            { word: `nervous system signs`,
              definition: `The body signals that tell you which mode you're in. Alert mode: racing heart, shallow breath, tense muscles, mind racing, irritable, digestion paused. Rest mode: steady heart, deep breath, relaxed muscles, calm, hungry/sleepy on schedule. Recognize the signs, then respond.`,
              audioPrompt: `Nervous system signs are the body signals that tell you which mode you're in, {name}. Alert mode signs, heart racing, faster shallow breathing, tense shoulders or jaw, sweaty palms, mind racing, hard to sit still, irritable, digestion paused, you might feel not hungry even at meals. Rest mode signs, heart steady, slow deep breathing, relaxed muscles, soft jaw, able to focus easily, connecting well with others, feeling settled, hungry at meal times, sleepy when it's time to sleep. Knowing the signs lets you respond on purpose.` },
            { word: `body awareness`,
              definition: `The skill of noticing what your body is actually doing right now. Heart fast or steady? Breathing shallow or deep? Muscles tense or relaxed? This lets you check which nervous system mode you're in before reacting — then use tools to respond on purpose rather than react automatically.`,
              audioPrompt: `Body awareness is the skill of noticing what your body is actually doing right now, {name}. Heart fast or steady? Breathing shallow or deep? Muscles tense or relaxed? Jaw clenched or soft? This skill lets you check which nervous system mode you're in before reacting. When you notice the signs of alert mode, you can choose to respond with a slow exhale or another tool. When you notice rest mode, you can appreciate it. Body awareness is the beginning of all regulation.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Getting Back to Rest Mode`,
          paragraphs: [
            `When you notice you're stuck in alert mode (and rest is what's needed), here are the real tools to come back. First, SLOW EXHALE (L05!). The single fastest tool, longer exhales than inhales for a few minutes. This directly tells your nervous system "you're safe, you can settle." Second, MOVEMENT (L04!), but the RIGHT KIND. Sometimes hard exercise helps complete the activated energy (running, a quick walk, jumping). Other times gentle movement (slow walking, stretching) helps more. Listen to your body (L01). Third, SAFETY CUES. Familiar voices (a parent, a sibling, a friend), familiar places, warm temperature, soft lighting, comforting smells. Your nervous system uses these cues to know "I'm safe now."`,
            `Fourth, NATURE. Researchers have found that even 20 minutes in a natural setting (a park, near trees, looking at the sky, watching water, a quiet outside spot) significantly calms the nervous system. Fifth, GENTLE CONNECTION. Talking with a trusted person, hugs, even cuddling with a pet. Co-regulation (your nervous system settling near another regulated one) is one of the most powerful tools humans have. Sixth, REDUCING INPUT. Less screen time, less noise, less crowd. Sometimes the most powerful tool is just less stimulation for a while. The goal isn't to NEVER feel alert mode, that's healthy when really needed. The goal is to be able to come back to rest when you need to. The kid who builds these tools early carries deep nervous-system wisdom for life.`,
          ],
          image: `/ue-assets/lw/l06-s3-back-to-rest.webp`,
          imageCaption: `Tools: slow exhale, movement, safety cues, nature, connection, reducing input. Choose what fits.`,
          vocab: [
            { word: `co-regulation`,
              definition: `When your nervous system settles by being near another calm nervous system, a parent, sibling, trusted friend, even a pet. One of the most powerful tools humans have. Being with a regulated person is often more soothing than any technique done alone.`,
              audioPrompt: `Co-regulation is when your nervous system settles by being near another calm nervous system, {name}. A parent, sibling, trusted friend, even a pet. It's one of the most powerful nervous-system tools humans have. Being with a regulated person is often more soothing than any technique done alone. Babies regulate by being held. Kids and adults still do this, hugs from a calm person settle our system, talking with a steady friend brings us back, even cuddling a pet helps. We're built to settle together.` },
            { word: `safety cues`,
              definition: `Signals from the environment that tell your nervous system you're safe, helping it shift from alert to rest mode. Familiar voices, a trusted person's face, warm lighting, comfortable temperature, familiar smells, a known place. Your nervous system scans for these automatically and relaxes when it finds them.`,
              audioPrompt: `Safety cues are signals from the environment that tell your nervous system you're safe, helping it shift from alert to rest mode, {name}. Familiar voices, a trusted person's face, warm lighting, a comfortable temperature, familiar smells, a known place. Your nervous system scans for these automatically. When it finds them, it can begin to relax. This is why being home, hearing a calm parent's voice, or sitting in a familiar spot can shift your mood. You can also build safety cues deliberately into your space.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Getting STUCK Is the Real Problem`,
          paragraphs: [
            `Here's the truth most people don't know: alert mode isn't bad, getting STUCK in it is. Many kids and adults today are walking around in chronic LOW-LEVEL ACTIVATION, never quite calm, often irritable, sleeping poorly, struggling to focus, easily reactive. They've been activated for so long (busy schedules, lots of screens, constant news, big feelings, sometimes hard life events) that they've forgotten what real rest feels like. Their nervous system has been on for so long they assume "this is just how I am." Researchers call this DYSREGULATION, and it's incredibly common today, especially in kids.`,
            `The good news, you can rebuild the system. The tools above (slow exhale, movement, safety cues, nature, connection, reducing input) consistently bring people back to rest mode when used regularly. Sleep (L02), good food (L03), hydration (L05), regular movement (L04), all support nervous-system regulation too. This whole subject is, in a way, about building a healthy nervous system. Terra's first teaching about the nervous system: BOTH modes are healthy. The skill isn't avoiding alert mode, it's flowing between alert and rest as life calls for each. When you notice you've been activated for too long, use the tools. Come back to rest. Your body, brain, and soul will thank you. This skill, recognized and built early, is one of the most life-changing gifts you can give yourself.`,
          ],
          image: `/ue-assets/lw/l06-s4-stuck.webp`,
          imageCaption: `Stuck in alert is the real problem. Tools bring you back. Both modes flow naturally with practice.`,
          vocab: [
            { word: `dysregulation`,
              definition: `Being stuck in alert mode (or sometimes shut-down freeze mode) when you should be able to flow into rest. Causes chronic irritability, poor sleep, focus issues, reactivity. Very common today, especially in kids. The good news: tools rebuild the flow.`,
              audioPrompt: `Dysregulation is being stuck in alert mode when you should be able to flow into rest, {name}. Many kids and adults today live in chronic low-level activation, never quite calm, often irritable, sleeping poorly, struggling to focus, easily reactive. They've been on so long they've forgotten what real rest feels like and assume this is just how they are. It's incredibly common today. The good news, tools rebuild the flow. Slow exhale, movement, safety cues, nature, connection. Used regularly, they bring people back to rest.` },
            { word: `chronic activation`,
              definition: `When your nervous system stays in alert mode far longer than needed. Busy schedules, lots of screens, constant noise, and real-world stressors keep many kids activated most of the day. Signs: wired but tired, irritable, poor sleep, hard to focus, easily reactive. Often mistaken for personality. Tools can bring it back.`,
              audioPrompt: `Chronic activation is when your nervous system stays in alert mode for much longer than needed, {name}. Busy schedules, lots of screens, constant noise, big feelings, and real-world stressors can keep kids activated far more than is healthy. The signs, feeling wired but tired, irritable, sleeping poorly, having trouble focusing, being easily reactive. Many people assume this is just their personality. But it's often a nervous system that's been on too long and hasn't had enough rest. The good news: tools can bring it back.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids in different moments. Classify each: SYMPATHETIC ACTIVATED (alert mode for a real moment, healthy and useful), PARASYMPATHETIC REST (rest mode, settled, calm, healthy), or STUCK ACTIVATED (chronically in alert mode when they should be at rest, and need tools to come back)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `sympa`,   label: `Sympathetic Activated`,  color: `#FBBF24`, description: `Alert mode for a real moment. Heart up, focused, energized. Healthy when there's something real to handle.` },
            { id: `para`,    label: `Parasympathetic Rest`,   color: `#34D399`, description: `Rest mode. Heart steady, breath deep, calm, settled. Healthy and restorative.` },
            { id: `stuck`,   label: `Stuck Activated`,         color: `#F87171`, description: `Chronically in alert mode when rest is what's needed. Tools needed to come back to balance.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Moment #1`,
              clues: [
                { text: `A kid is at the starting line of a 100-meter race. Their heart is pounding, breath quick.` },
                { text: `Their muscles are tense, ready to spring. Their focus is razor-narrow on the track ahead.` },
                { text: `When the race ends and they're back with friends, their breathing settles and they feel good.` },
              ],
              correctAnswer: `sympa`,
              realWorldExample: `Pre-race activation is healthy alert mode. Recovery afterward shows the flow is working.`,
              explanation: `Pure sympathetic activated. The kid's body is appropriately prepared for action with a race ahead, heart pumping, muscles ready, focus sharp. This is exactly what alert mode is for. And the key part is they recover afterward, flowing back to rest. That's healthy nervous-system function. Alert when needed, then back to calm. The system working beautifully.`,
            },
            {
              id: `case-2`,
              caseTitle: `Moment #2`,
              clues: [
                { text: `A kid is reading a book on the couch on a quiet Saturday morning.` },
                { text: `Their breathing is slow and deep. Their muscles are relaxed.` },
                { text: `They feel settled and absorbed in the story, hungry when lunch time comes, fully present.` },
              ],
              correctAnswer: `para`,
              realWorldExample: `Calm, settled, present, hungry on cue, deep breath. Beautiful rest mode.`,
              explanation: `Pure parasympathetic rest. Everything points to rest mode, slow breath, relaxed muscles, settled feeling, hungry at lunch time (digestion working well, the body says "we're safe, eating works now"), full presence with the activity. This is the rest mode where learning, recovery, immune system work, and good moods happen. Healthy nervous-system rest.`,
            },
            {
              id: `case-3`,
              caseTitle: `Moment #3`,
              clues: [
                { text: `A kid wakes up most days with a tight chest and racing thoughts.` },
                { text: `They have trouble sitting still even during quiet activities, jaw clenched a lot.` },
                { text: `They sleep poorly, get headaches often, and feel "wired but tired" almost daily.` },
              ],
              correctAnswer: `stuck`,
              realWorldExample: `Chronic activation showing up as constant tension and "wired but tired."`,
              explanation: `Pure stuck activation. Almost every sign of sympathetic activation is showing up CHRONICALLY (every day, not just when there's a real thing to handle). Wired but tired is a classic stuck-activation pattern. The system has been on so long it can't drop back to rest, even when there's nothing to alert about. This needs tools: slow exhale practice, more sleep, safety cues, less screen time, possibly support from a trusted adult. Not a personality, a dysregulated nervous system that can heal.`,
            },
            {
              id: `case-4`,
              caseTitle: `Moment #4 — The Tricky One`,
              clues: [
                { text: `A kid describes themselves as "just always anxious" and "always energetic."` },
                { text: `Family says "that's just how they are, always wired."` },
                { text: `But notice: the kid struggles to fall asleep, has constant stomach issues, snaps easily, can't relax even on weekends.` },
              ],
              correctAnswer: `stuck`,
              realWorldExample: `"Always wired" isn't always personality — sometimes it's chronic activation.`,
              explanation: `Tricky, {name}! Everyone in the kid's life thinks this is just "who they are," anxious, energetic, wired. So you might call this normal sympathetic activation. But look at the body signs, trouble sleeping, constant stomach issues, can't relax even on weekends, snaps easily. Those are classic signs of being STUCK in alert mode. Pure stuck activation in disguise (the personality-disguise version). Lesson: sometimes what people call a personality trait ("they're just always anxious") is actually CHRONIC NERVOUS-SYSTEM ACTIVATION that could ease with the right tools. The kid isn't fundamentally "wired" as a person, their nervous system has been on too long. With consistent tools (slow exhale practice, more rest, safety cues, less stimulation, possibly some support) they can learn what rest mode feels like for the first time. This is one of the most hopeful insights in wellness science. Lots of "personality" might actually be nervous-system patterns that can soften.`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is the AUTONOMIC NERVOUS SYSTEM?`,
              options: [
                `An imaginary thing`,
                `The automatic system inside your body that runs heart rate, breathing, digestion, hormones, and energy without conscious thought`,
                `Your bones`,
                `Your skin`,
              ],
              correctIndex: 1,
              explanation: `The autonomic nervous system is the automatic system inside your body that runs heart rate, breathing, digestion, hormones, and energy without conscious thought. It has two main modes: sympathetic (alert) and parasympathetic (rest).` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What are the TWO main modes of the nervous system?`,
              options: [
                `On and off`,
                `SYMPATHETIC (alert mode, fight/flight/freeze) and PARASYMPATHETIC (rest and repair mode). Both healthy. Flowing between them is the goal`,
                `Happy and sad`,
                `Awake and asleep`,
              ],
              correctIndex: 1,
              explanation: `Two modes: SYMPATHETIC (alert mode, for action when needed) and PARASYMPATHETIC (rest mode, for recovery and connection). Both are healthy and necessary. Flowing between them throughout the day is the goal. Getting stuck in one is the problem.` },

            { id: `l06-q3`, format: `true-false`,
              question: `True or false: Alert mode is bad and we should avoid it.`,
              correctAnswer: false,
              explanation: `False. Alert mode is HEALTHY and necessary when there's a real challenge (a hard test, a tough game, a moment that needs action). The problem isn't alert mode itself, it's getting STUCK in alert when rest is what's needed. Both modes flowing well is the goal.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `What are signs you're in ALERT mode?`,
              options: [
                `Slow breathing`,
                `Heart racing, faster breathing, tense shoulders, mind racing, hard to sit still, digestion paused, irritable`,
                `Feeling calm`,
                `Sleepy`,
              ],
              correctIndex: 1,
              explanation: `Alert mode signs: heart racing, faster shallower breathing, tense muscles, sweaty palms, racing mind, hard to sit still, feeling on-edge or scared, trouble focusing on calm tasks, digestion paused. Useful when there's something real to handle.` },

            { id: `l06-q5`, format: `multiple-choice`,
              question: `What's the SINGLE FASTEST tool to come back to REST mode?`,
              options: [
                `A long nap`,
                `SLOW EXHALE — longer exhales than inhales (in for 4, out for 6-7) for a few minutes; tells your nervous system "you're safe, you can settle"`,
                `Eating a lot`,
                `More screens`,
              ],
              correctIndex: 1,
              explanation: `Slow exhale is the fastest tool. Longer exhales than inhales (in for 4, out for 6-7) for a few minutes directly tells your nervous system "you're safe, you can settle." Activates the parasympathetic mode. Works in seconds.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `What is CO-REGULATION?`,
              options: [
                `Regulating others`,
                `When your nervous system SETTLES by being near another CALM nervous system (a parent, sibling, friend, pet) — one of the most powerful tools we have`,
                `Sharing food`,
                `Cooperating on a project`,
              ],
              correctIndex: 1,
              explanation: `Co-regulation is when your nervous system settles by being near another calm nervous system. A parent, sibling, trusted friend, even a pet. One of the most powerful tools humans have. Being with a regulated person is often more soothing than any technique done alone.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `What is DYSREGULATION?`,
              options: [
                `A type of food`,
                `Being STUCK in alert mode when you should be able to flow into rest. Causes chronic irritability, poor sleep, focus issues, reactivity. Common today, especially in kids`,
                `Sleeping too much`,
                `Random reactions`,
              ],
              correctIndex: 1,
              explanation: `Dysregulation is being stuck in alert mode when you should be at rest. Causes chronic irritability, poor sleep, focus issues, reactivity. Very common today, especially in kids. People might call it "just my personality." Often, it's a nervous system that's been on too long. Tools help.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about the nervous system?`,
              options: [
                `Avoid alert mode forever`,
                `BOTH modes are healthy. The skill isn't avoiding alert mode, it's FLOWING between alert and rest as life calls for each — when stuck in alert, use the tools to come back`,
                `Stay calm always, no matter what`,
                `Be activated constantly`,
              ],
              correctIndex: 1,
              explanation: `Both modes are healthy. The skill isn't avoiding alert mode, it's flowing between alert and rest as life calls for each. When you notice you've been activated too long, use the tools (slow exhale, movement, safety cues, nature, connection, reducing input). Come back to rest. This skill is one of the most life-changing.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Take a slow, settled breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Right now, which mode are you in? Notice your breath, heart, muscles, focus. Be curious, not judgmental.` },
            { id: `r2`, text: `Be honest, do you ever feel "wired but tired" or struggle to relax even on weekends? What might that be telling you?` },
            { id: `r3`, text: `Of the tools (slow exhale, movement, safety cues, nature, connection, reducing input), which feels most natural for YOU when you need to come back to calm?` },
            { id: `r4`, text: `Who in your life is a CALM regulating presence for you? When could you spend more time near them?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Nervous system science (especially Polyvagal Theory from Stephen Porges) is one of the most exciting areas in modern wellness research. The findings have transformed how doctors, therapists, teachers, and parents understand kids' behaviors. So much of what gets labeled as "bad behavior," "anxiety," or "ADHD" is actually nervous-system dysregulation that can heal with the right tools. Kids who learn this early get a huge head start. Terra's note: chronic activation is one of the biggest invisible problems facing kids and adults today. Phones, busy schedules, constant input, big feelings, real-world stressors, they keep us in alert mode far more than humans evolved to be. The good news, you can come back. The tools work. The body remembers how to rest. Practice them. Build them into your daily life. Notice your modes without judgment. Use slow exhale, movement, safety cues, nature, connection, and reducing input as your real wellness tools. The kid who builds nervous-system wisdom early carries one of life's greatest health gifts.`,
          familyAdventure: `Family Nervous System Check-In. As a family, try this for one week. At dinner each night, each person shares one moment from their day when they were in ALERT mode (something exciting, stressful, or activating) AND one moment in REST mode (calm, settled, connected). Talk about what brought you back to rest. Notice patterns. Adults model it too, sharing their own honest moments. You're growing a family that recognizes nervous-system modes without judgment. The home that names this together becomes a place where everyone learns to regulate, together. Co-regulation, in action.`,
          creativePrompt: {
            intro: `Write about your own nervous system patterns and the tools you want to grow.`,
            floor: `Write at least 5 sentences. Describe a recent activated moment and how you came back (or wished you had).`,
            stretch: `Write 8 to 10 sentences. Reflect on your typical patterns and the tools you want to add.`,
            open: `Write as much as you want. Write a full piece about your nervous system. Describe a recent moment when you were in alert mode, what was happening, what your body signs were, and what brought you back to rest (or what tools you wish you'd used). Reflect on your typical patterns, do you flow well between alert and rest, or do you tend to get stuck somewhere? Describe the tools (slow exhale, movement, safety cues, nature, connection, reducing input) you want to grow as your real wellness practices. End with one specific commitment for when you next notice you're stuck in alert. Make it specific, curious, kind.`,
            frames: [
              `A recent activated moment was ___.`,
              `My body signs were ___.`,
              `What helped me come back (or what would have) was ___.`,
              `My typical nervous-system pattern is ___.`,
              `Tools I want to grow are ___.`,
              `Next time I notice I'm stuck in alert, I'll ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Strong, deep work, {name}. You now understand the most important wellness system in your body, the AUTONOMIC NERVOUS SYSTEM. Two modes (alert + rest). Both healthy. Flowing between is the goal. You know the body signs, the tools to come back to rest, what dysregulation is, and the truth that "personality" sometimes hides stuck activation that can heal. Practice the tools. Build the flow. Next, we explore something deeply connected, the difference between STRESS (normal and useful) and the missing piece most people don't know about, RECOVERY. STRESS & RECOVERY. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `nervous-system-friend`,
          badgeName: `Nervous System Friend`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L06 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
