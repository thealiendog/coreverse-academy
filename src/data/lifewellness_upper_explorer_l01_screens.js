// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L01 — Your Body Is Wise
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : interoception research (Mahler, Khalsa), the body as a wisdom
//            source, distinguishing real signals from misread ones and noise.
//            Foundation lesson for the entire subject.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (wise signal / misread signal / passing static).
//            Trick case: a "signal" that's actually anxiety/big emotion in the
//            body, easy to misread.
// SCOPE: 4 concepts — your body is talking to you, three kinds of body
//        signals, why we lose touch with our bodies, how to start listening
// VOICE: Terra = grounded, nurturing, pack-protective. Watches out for the
//        whole family. Wolf wisdom: practical, calm, deeply caring.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-01`,
      title: `Your Body Is Wise`,
      duration: 18,
      xpReward: 75,
      badge: `body-listener`,
      badgeName: `Body Listener`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. I'm Terra, and I'm honored to be your guide on this journey through your wellness, your body, your energy, your real, vibrant life. We start with the most important truth in this whole subject: YOUR BODY IS WISE. Your body knows things, important things, that your brain alone doesn't. Hunger, fullness, tiredness, energy, pain, calm, excitement, fear, joy. Your body is communicating with you constantly through sensations. Most kids and most adults stop listening over time. The kid who learns to truly listen to their body becomes someone with deep self-knowledge. Take a slow breath, feel your body for a moment, and let's begin.`,
          headline: `Your Body Is Wise`,
          subtitle: `The foundation of all wellness: learning to listen to what your body is telling you`,
          visual: `/ue-assets/lw/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Body Is Talking to You, All the Time`,
          paragraphs: [
            `Right now, while you're reading this, your body is sending you dozens of signals. The temperature of the air on your skin. The way your stomach feels (full, empty, neutral). Whether your muscles are relaxed or tense. How your breathing is, fast or slow, shallow or deep. The energy level you have. Whether you're thirsty. How comfortable your posture is. Most of the time, we ignore almost all of these signals. We're busy thinking, doing, scrolling. Our body is talking, and we're not really listening. This isn't bad, our brains are designed to filter most signals out. But it does mean we miss a lot of information that's actually useful.`,
            `Researchers call the ability to sense and understand what's happening inside your body INTEROCEPTION (in-tair-o-SEP-shun). It's like a sixth sense, the awareness of your own internal state. Studies show that kids and adults with strong interoception make better health decisions, manage emotions better, and feel more connected to themselves. The good news: interoception is a SKILL, not a fixed trait. Like a muscle, it grows with use. The more you practice paying attention to what your body is actually feeling, the clearer the signals become. Today, we start growing this skill. It will serve you your entire life.`,
          ],
          image: `/ue-assets/lw/l01-s1-talking.webp`,
          imageCaption: `Your body sends signals constantly. Listening is a skill that grows with practice.`,
          vocab: [
            { word: `interoception`,
              definition: `Your ability to sense and understand what's happening inside your body, hunger, fullness, energy, breath, tension, calm. A real "sixth sense." Kids with strong interoception make better health decisions and connect better with themselves. A skill that grows with practice.`,
              audioPrompt: `Interoception is your ability to sense and understand what's happening inside your body, {name}. Hunger, fullness, tiredness, energy, breath, tension, calm. It's like a sixth sense, the awareness of your own internal state. Research shows kids and adults with strong interoception make better health decisions, manage emotions better, and feel more connected to themselves. The good news, interoception is a skill, not a fixed trait. Like a muscle, it grows with use. The more you practice paying attention to what your body is actually feeling, the clearer the signals become.` },
            { word: `body scan`,
              definition: `The practice of deliberately moving your attention from head to toe, noticing what each part of your body feels like. Warm or cool. Tense or relaxed. Comfortable or uncomfortable. You don't fix anything — you just notice. One of the simplest and most effective interoception practices there is.`,
              audioPrompt: `A body scan is the practice of deliberately moving your attention from head to toe, noticing what each part of your body feels like, {name}. Warm or cool. Tense or relaxed. Comfortable or uncomfortable. Still or wanting to move. The body scan is one of the simplest interoception practices there is. You don't fix anything, you just notice. Researchers use body scans in mindfulness research and find they quickly improve body awareness. Even a short daily scan measurably strengthens your ability to read your body's signals.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Kinds of Body Signals`,
          paragraphs: [
            `Once you start listening, you'll notice three kinds of body signals. First, REAL WISE SIGNALS. These are your body telling you something important and accurate. Hunger when you actually need food. Tiredness when you need rest. Thirst when you need water. Pain when something needs attention. The "stop" feeling when you're full. Real wise signals are usually clear once you tune in. They're your body's actual messages, and they're almost always worth honoring.`,
            `Second, MISREAD SIGNALS. These are real signals you've MISUNDERSTOOD. The most famous example: many people think they're hungry when they're actually THIRSTY. The brain confuses the two. Another example: feeling "tired" when you're actually bored, OR feeling restless when you're actually overstimulated and need quiet. Misread signals are real, but you've labeled them wrong. Learning to interpret them more accurately is a huge wellness skill. Third, PASSING STATIC. These are just small body noises that aren't really messages, a tiny muscle twitch, a small grumble, a sensation that comes and goes. Not every sensation is a signal. Some are just normal body noise. Knowing the difference between real messages and passing static keeps you from over-reacting to every body whisper.`,
          ],
          image: `/ue-assets/lw/l01-s2-three-kinds.webp`,
          imageCaption: `Three signals: real and wise, misread (real but mislabeled), or just passing static (no message).`,
          vocab: [
            { word: `misread signal`,
              definition: `A real body signal you've misunderstood, like thinking you're hungry when you're actually thirsty, or feeling tired when you're actually bored. Real, but mislabeled. Learning to interpret signals accurately is a huge wellness skill.`,
              audioPrompt: `A misread signal is a real body signal you've misunderstood, {name}. The most famous example, many people think they're hungry when they're actually thirsty. The brain confuses the two. Another example, feeling tired when you're actually bored. Or feeling restless when you're actually overstimulated and need quiet. Misread signals are real, but you've labeled them wrong. Learning to interpret them more accurately is a huge wellness skill. The fix, pause, ask, what is my body actually telling me? Often, you can pick the right answer once you slow down.` },
            { word: `passing static`,
              definition: `Normal body noise that isn't a real message worth analyzing. Tiny muscle twitches, small grumbles, minor sensations that come and go. Not every sensation is a signal. Knowing the difference between real messages and passing static keeps you from over-reacting to every tiny body whisper.`,
              audioPrompt: `Passing static is normal body noise that isn't a real message worth analyzing, {name}. Tiny muscle twitches, small grumbles, minor sensations that come and go. Your body makes small sounds and feelings constantly, and most of them resolve on their own with no action needed. Not every sensation is a signal. Knowing the difference between real messages and passing static keeps you from over-reacting to every tiny body whisper. Bodies are noisy, and most noise is just that, noise, not a message.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why We Lose Touch (And How to Get It Back)`,
          paragraphs: [
            `Most kids start life with great body listening. Babies cry when they're hungry, tired, or uncomfortable. Toddlers stop eating when they're full, run when they're full of energy, sleep when they're tired. Then something happens. We start being told what to do with our bodies. Eat what's on your plate (even if you're full). Go to sleep now (even if you're not tired). Don't move so much (even though your body wants to move). Hold your bathroom needs (even when you really have to go). These rules are sometimes necessary, but over time, kids and adults start IGNORING their own body signals because they've been overridden so often. The body still talks. We just stop listening.`,
            `The good news, the connection isn't lost. It's just gotten quiet from disuse. You can rebuild it. The simple practice: PAUSE and CHECK IN. Several times a day, stop and ask yourself: How is my body actually feeling right now? Am I hungry? Thirsty? Tired? Tense? Energetic? Comfortable? Don't worry about being "right." Just notice. The more you ask, the louder the signals become. Researchers have found that even a few weeks of daily body check-ins measurably improves interoception. Your body is incredibly patient. It will keep sending signals as long as you live. The moment you start listening again, it will respond by speaking more clearly. Listening is the start of every other wellness skill we'll learn.`,
          ],
          image: `/ue-assets/lw/l01-s3-lose-touch.webp`,
          imageCaption: `We get quiet from rules and overrides. The connection isn't lost, just unused. Pause and check in.`,
          vocab: [
            { word: `body check-in`,
              definition: `The simple practice of pausing several times a day to ask, "how is my body actually feeling right now?" Hunger, thirst, tiredness, tension, energy. Even a few weeks of daily check-ins measurably improve interoception. The foundation skill of all wellness.`,
              audioPrompt: `A body check-in is the simple practice of pausing several times a day to ask, how is my body actually feeling right now, {name}. Am I hungry, thirsty, tired, tense, energetic, comfortable. Don't worry about being right. Just notice. The more you ask, the louder the signals become. Researchers have found that even a few weeks of daily body check-ins measurably improves interoception. It will keep sending signals as long as you live. The moment you start listening again, it will respond by speaking more clearly.` },
            { word: `override culture`,
              definition: `The pattern of being repeatedly told to ignore your body's signals — eat when not hungry, sleep when not tired, hold your needs, don't move — until body listening weakens from disuse. The signals don't stop. The habit of listening gets quieter. The connection isn't lost, just quiet. You can rebuild it.`,
              audioPrompt: `Override culture is the pattern of being repeatedly told to ignore your body's signals, eat when you're not hungry, sleep when you're not tired, hold your needs, don't move, until your body listening weakens from disuse, {name}. Most kids experience this to some degree. The signals don't stop, but the habit of listening gets quieter over time. Understanding override culture isn't about blaming adults who set rules. It's about reclaiming your body awareness now. The connection isn't lost, just quiet. You can rebuild it.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Body as a Wise Friend`,
          paragraphs: [
            `Here's a way to think about your body that changes everything: your body is a WISE FRIEND who's been with you your entire life, who has access to information your brain alone doesn't, and who is always trying to help you. Not perfect, not always right, but on your team. Like any good friendship, the relationship grows when you LISTEN. When your body says "I'm tired," and you keep pushing without rest, you're ignoring a friend. When your body says "I'm full," and you keep eating because the food is there, you're overriding a friend. When your body says "this person makes me feel uncomfortable," and you stay anyway because you don't want to be rude, you're not honoring what your body knows. Body wisdom isn't always right, but it's almost always worth listening to.`,
            `Here's one more important truth: your body holds wisdom your BRAIN sometimes can't access. Researchers studying intuition have found that gut feelings often pick up on information before the conscious mind catches up. The "something feels off about this" sensation. The "this feels right" warmth in your chest. These aren't magic, they're your body integrating tons of signals (body language of others, smells, energy in the room, past experiences) faster than your brain can name. Trust your body's wisdom while keeping your brain on. Both together, working as a team, make you smarter than either alone. Terra's first teaching: your body is on your side. Treat it like the wise friend it is. Listen to what it's actually saying. Honor the signals when you can. And trust the deeper knowing it gives you. This is the foundation of every other wellness skill in this whole subject.`,
          ],
          image: `/ue-assets/lw/l01-s4-wise-friend.webp`,
          imageCaption: `Your body is a wise friend who's been with you your entire life. Treat it like one.`,
          vocab: [
            { word: `body wisdom`,
              definition: `The understanding that your body holds real, accurate information your brain alone doesn't, hunger, fullness, intuition, gut feelings, energy signals. Not always perfect, but almost always worth honoring. The deepest wellness foundation.`,
              audioPrompt: `Body wisdom is the understanding that your body holds real, accurate information your brain alone doesn't, {name}. Hunger, fullness, intuition, gut feelings, energy signals. Not always perfect, but almost always worth honoring. Researchers studying intuition have found that gut feelings often pick up on information before the conscious mind catches up. Trust your body's wisdom while keeping your brain on. Both together make you smarter than either alone. Your body is a wise friend. Treat it like one.` },
            { word: `gut feeling`,
              definition: `The body's intuitive response — a sensation or sense of knowing that arrives before you can fully explain why. Researchers find gut feelings often integrate information faster than conscious thought. Not always right, but always worth pausing to hear. Trusting body intuition while checking it with your brain is a powerful combination.`,
              audioPrompt: `A gut feeling is the body's intuitive response, a sensation or sense of knowing that arrives before you can fully explain why, {name}. Researchers studying intuition find that gut feelings often integrate information faster than conscious thought can catch up. They draw on body language of others, smells, energy in a room, and stored memories. This doesn't make gut feelings always right. But it does make them worth pausing to hear. Trusting your body's intuitive signals while checking them with your brain is a powerful combination for decision-making.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four moments when a kid notices a body sensation. Classify each: REAL WISE SIGNAL (your body telling you something important and accurate, worth honoring), MISREAD SIGNAL (a real signal that's been MISUNDERSTOOD, like hunger that's actually thirst), or PASSING STATIC (just normal body noise, not a message)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `wise`,    label: `Real Wise Signal`,  color: `#34D399`, description: `Real, accurate, body's actual message. Hunger, tiredness, thirst, pain. Worth honoring.` },
            { id: `misread`, label: `Misread Signal`,    color: `#FBBF24`, description: `Real signal misunderstood. Hunger that's actually thirst. Tiredness that's actually boredom. Real, but mislabeled.` },
            { id: `static`,  label: `Passing Static`,    color: `#94A3B8`, description: `Normal body noise, not really a message. Tiny twitches, small sensations that come and go.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Sensation #1`,
              clues: [
                { text: `A kid hasn't eaten in 4 hours. They feel a hollow, growling feeling in their stomach.` },
                { text: `Their energy is starting to dip and they're a little grumpy.` },
                { text: `When they eat a balanced snack, the feeling goes away and their energy comes back.` },
              ],
              correctAnswer: `wise`,
              realWorldExample: `Hollow stomach + low energy + grumpy = real hunger signal.`,
              explanation: `Pure real wise signal. Real hunger usually shows up as multiple body cues at once: hollow/growling stomach, dipping energy, sometimes grumpiness. The body is accurately saying "I need food now." This is exactly what wise hunger looks like. Honoring it (eating a balanced meal or snack) restores energy and mood. Real wise signal honored well.`,
            },
            {
              id: `case-2`,
              caseTitle: `Sensation #2`,
              clues: [
                { text: `A kid has been sitting still for 30 minutes and feels a tiny twinge in their leg.` },
                { text: `They wiggle their foot and the twinge goes away within seconds.` },
                { text: `They don't think about it again.` },
              ],
              correctAnswer: `static`,
              realWorldExample: `Tiny twinge that resolves with a small movement is normal body noise.`,
              explanation: `Pure passing static. A small twinge that goes away with a tiny adjustment is normal body noise, not a real message worth analyzing. Not every sensation is a signal. Bodies make small sounds and feelings all the time, and most of them resolve on their own. Knowing this keeps you from over-reacting to every tiny body whisper.`,
            },
            {
              id: `case-3`,
              caseTitle: `Sensation #3`,
              clues: [
                { text: `A kid feels "hungry" between meals.` },
                { text: `They had a big breakfast 90 minutes ago and shouldn't really be hungry yet.` },
                { text: `When they drink a big glass of water, the "hungry" feeling completely disappears.` },
              ],
              correctAnswer: `misread`,
              realWorldExample: `Thirst often gets misread as hunger, a classic body mix-up.`,
              explanation: `Pure misread signal. The kid felt "hungry," but the real signal was THIRST. The brain often confuses the two, both feel like vague low-energy emptiness. The water clearing it up is the proof. This is one of the most common misread signals in the world. Lesson: if you feel "hungry" but you ate recently, try water first. It often is the actual answer.`,
            },
            {
              id: `case-4`,
              caseTitle: `Sensation #4: The Tricky One`,
              clues: [
                { text: `A kid feels their stomach get tight and a little fluttery before a test.` },
                { text: `It feels kind of like hunger but kind of not.` },
                { text: `They eat a snack, but the feeling stays. After the test is over, the feeling goes away on its own.` },
              ],
              correctAnswer: `misread`,
              realWorldExample: `Anxiety in the body often gets mistaken for hunger or sickness.`,
              explanation: `Tricky, {name}! It LOOKS like a hunger or stomach issue. So you might call it a wise signal or static. But look closely. The kid ate, and the feeling didn't change. It only resolved when the test ended. This is the giveaway. The real signal here is ANXIETY, the body's stress response showing up as butterflies and tightness in the stomach. Pure misread signal in disguise (the emotional version). Lesson: BIG FEELINGS (anxiety, excitement, nervousness) often show up in the BODY. Stomach tightness, butterflies, racing heart, sweaty palms, shallow breathing. If you eat and the feeling doesn't change, the signal probably isn't physical hunger. It's emotional, and your body is sharing important information about how you feel. The fix: name the feeling, take some slow breaths, remember it'll pass. Body wisdom includes hearing what your body is saying about your emotions, too.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is INTEROCEPTION?`,
              options: [
                `Reading other people's minds`,
                `Your ability to sense and understand what's happening INSIDE your body. Hunger, fullness, energy, breath, tension. A "sixth sense" of internal awareness`,
                `Counting your heartbeat`,
                `A type of food`,
              ],
              correctIndex: 1,
              explanation: `Interoception is your ability to sense and understand what's happening inside your body. Hunger, fullness, energy, breath, tension, calm. A real "sixth sense" of internal awareness. Studies show kids with strong interoception make better health decisions and connect better with themselves. It's a SKILL that grows with practice.` },

            { id: `l01-q2`, format: `true-false`,
              question: `True or false: Interoception is a fixed trait. You either have good body awareness or you don't.`,
              correctAnswer: false,
              explanation: `False. Interoception is a SKILL, not a fixed trait. Like a muscle, it grows with use. The more you practice paying attention to what your body is actually feeling, the clearer the signals become. Even a few weeks of daily body check-ins measurably improves it.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `What are the THREE kinds of body signals?`,
              options: [
                `Loud, medium, quiet`,
                `REAL WISE SIGNALS (accurate messages), MISREAD SIGNALS (real signals you've labeled wrong), and PASSING STATIC (just normal body noise, not a message)`,
                `Hunger, thirst, sleep`,
                `Only one kind exists`,
              ],
              correctIndex: 1,
              explanation: `Three kinds: REAL WISE SIGNALS (your body's accurate messages, like hunger, tiredness, pain), MISREAD SIGNALS (real but labeled wrong, like thinking you're hungry when actually thirsty), and PASSING STATIC (normal body noise that's not really a message).` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `What's a CLASSIC misread signal?`,
              options: [
                `Hunger that's actually hunger`,
                `Thinking you're HUNGRY when you're actually THIRSTY. The brain often confuses the two`,
                `Tiredness when you're tired`,
                `Pain when you're hurt`,
              ],
              correctIndex: 1,
              explanation: `One of the most common misread signals: thinking you're hungry when you're actually thirsty. The brain often confuses the two because both feel like vague low-energy emptiness. Try water first if you ate recently. It often is the actual answer.` },

            { id: `l01-q5`, format: `multiple-choice`,
              question: `Why do most kids LOSE TOUCH with their body signals over time?`,
              options: [
                `Their bodies stop sending signals`,
                `They get OVERRIDDEN by rules (eat what's on your plate, sleep now, hold your bathroom needs). The body still talks, we just stop listening`,
                `Brains shrink`,
                `It just happens`,
              ],
              correctIndex: 1,
              explanation: `Most kids start with great body listening. Then they get overridden, eat when not hungry, sleep when not tired, hold needs, don't move when the body wants to. Over time, they stop listening because they've been overridden so often. The body still talks; we just stop hearing it.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `What's the SIMPLE practice that rebuilds body listening?`,
              options: [
                `Long meditation`,
                `BODY CHECK-IN. Several times a day, pause and ask "how is my body actually feeling right now?" Hunger, thirst, tiredness, tension, energy`,
                `Eating constantly`,
                `Sleeping more`,
              ],
              correctIndex: 1,
              explanation: `Body check-in: several times a day, pause and ask "how is my body actually feeling right now?" Hunger, thirst, tiredness, tension, energy, comfort. Don't worry about being "right" — just notice. The more you ask, the louder the signals become. Foundation of all wellness skills.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `What do BIG FEELINGS often look like in the body?`,
              options: [
                `Nothing physical`,
                `Stomach tightness, butterflies, racing heart, sweaty palms, shallow breathing. Anxiety and excitement show up physically`,
                `Only headaches`,
                `Big feelings are all in your head`,
              ],
              correctIndex: 1,
              explanation: `Big feelings (anxiety, excitement, nervousness) often show up in the body. Stomach tightness, butterflies, racing heart, sweaty palms, shallow breathing. These can be misread as hunger or sickness if you don't know. Body wisdom includes hearing what your body says about your emotions.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about your body?`,
              options: [
                `Distrust everything it says`,
                `Your body is a WISE FRIEND on your side. Listen to what it's saying, honor signals when you can, trust the deeper knowing it gives you`,
                `Bodies are unreliable`,
                `Ignore your body`,
              ],
              correctIndex: 1,
              explanation: `Your body is a wise friend who's been with you your entire life, has access to information your brain alone doesn't, and is always trying to help you. Not perfect, but on your team. Listen, honor signals when you can, trust the deeper knowing. Foundation of every other wellness skill.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Take a slow, settled breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Right now, do a body check-in. Without judgment, what is your body actually telling you in this moment? (Hungry? Thirsty? Tired? Tense? Comfortable?)` },
            { id: `r2`, text: `Be gentle with yourself, what's a time you might have IGNORED a body signal recently? What was it asking for?` },
            { id: `r3`, text: `When you feel big emotions, where in your BODY do you usually feel them? (Stomach? Chest? Throat? Head?)` },
            { id: `r4`, text: `If your body were a wise friend you could talk to, what would you most want to ask it right now?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Interoception research is one of the most exciting areas in modern psychology and health science. Studies consistently show that people with strong body awareness have better mental health, better physical health, healthier eating, better sleep, better emotional regulation, and stronger intuition. They make better decisions because they're integrating body wisdom with brain wisdom, instead of relying on the brain alone. Kids who learn body listening early carry this advantage their whole lives. Terra's note: your body is talking to you right now, as you read this. It will keep talking your entire life. The only question is whether you'll listen. The kid who learns to listen well, kindly, without judgment, gains one of the most powerful self-knowledge skills there is. You'll know when you're hungry, tired, sick, overwhelmed, or just fine. You'll trust your gut when it speaks. You'll honor your body's needs without shame. That kid grows into an adult with deep wellness wisdom that no amount of research, advice, or rules can replace.`,
          familyAdventure: `Family Body Check-In Practice. As a family, try this for one week: once a day (maybe at dinner or before bed), each person shares one body check-in. "I notice my shoulders are tense from sitting all day." "I'm actually thirsty, not hungry." "I feel really energized after that walk." No judgment, no fixing, just noticing together. Adults model it too. Over time, your whole family becomes more attuned to body wisdom. The home that listens to bodies together becomes a home where everyone takes better care of themselves.`,
          creativePrompt: {
            intro: `Write about what your body is telling you right now (really paying attention), or about a time your body sent you a wise signal you ignored or honored.`,
            floor: `Write at least 5 sentences. Describe what you notice in your body, or tell a story about a body signal moment.`,
            stretch: `Write 8 to 10 sentences. Build a fuller body check-in or story with several specific signals noticed.`,
            open: `Write as much as you want. Write a full piece about your body's wisdom. Choose one direction: either describe in detail what your body is telling you RIGHT NOW (slow down and really listen, head to toe (energy, hunger, thirst, tiredness, tension, breath, comfort)), OR tell a story about a time your body sent you a wise signal that mattered (you ignored it and regretted it, or honored it and were glad you did). Reflect on what you've learned about interoception, the three kinds of signals, and the importance of listening. End with reflection on the kind of body-listener you want to become and one small daily practice you'll commit to. Make it specific, kind, and curious.`,
            frames: [
              `Right now, what I notice in my body is ___.`,
              `A time my body sent me a wise signal was ___.`,
              `What I learned from that moment is ___.`,
              `The kind of body-listener I want to become is ___.`,
              `My one small daily practice will be ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Strong, gentle work, {name}. You've laid the foundation for every wellness lesson to come: your body is wise, talks to you constantly, and listening is a skill that grows with practice. You know the three kinds of signals (wise, misread, static) and the simple practice of daily body check-ins. Listen kindly. Trust your body's wisdom. The skills only deepen from here. Next, we explore one of the most important wellness foundations of all, SLEEP. The magic reset that shapes everything else. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `body-listener`,
          badgeName: `Body Listener`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
