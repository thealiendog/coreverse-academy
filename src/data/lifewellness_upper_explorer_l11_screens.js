// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L11 — Posture & How You Carry Yourself
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real research on posture and mood (Amy Cuddy's work and the
//            subsequent replications/critiques), body-mind feedback loop.
//            Honest about what's clearly proven and what's debated.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (empowered posture / collapsed / locked-rigid)
//            Trick case = "looks strong but actually tense" — locked
//            rigid mistaken for empowered.
// SCOPE: posture affects body AND mood, three patterns to recognize,
//        empowered settled posture is the goal, NOT about looking "right"
//        but feeling honest in your body
// VOICE: Terra = grounded, never preachy about "good posture," focused on
//        body-mind connection
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-11`,
      title: `Posture & How You Carry Yourself`,
      duration: 18,
      xpReward: 75,
      badge: `body-aligned`,
      badgeName: `Body Aligned`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore something most people don't realize is a wellness skill: HOW YOU CARRY YOUR BODY. The position of your shoulders, the openness of your chest, how you stand, sit, and walk. This isn't about "good posture" rules from old-fashioned grown-ups. It's about something much more interesting, the way you HOLD your body actually affects how you FEEL. Your body and mind talk to each other constantly, in both directions. Today, you learn the science. Take a settled breath, lengthen your spine just a bit, and let's begin.`,
          headline: `Posture & How You Carry Yourself`,
          subtitle: `How you hold your body changes how you feel. The body-mind loop`,
          visual: `/ue-assets/lw/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Body and Mind Talk Both Ways`,
          paragraphs: [
            `Here's a fascinating truth from research: your body and mind communicate in BOTH DIRECTIONS, not just one. Most people think: when I feel sad, I slump. When I feel happy, I stand tall. That's true. But the OPPOSITE is also true: when I slump, I start to FEEL sadder. When I stand tall, I start to FEEL more confident. Your body posture sends signals BACK to your brain about what mood to be in. Researchers studying this have found measurable mood, energy, and even hormone changes from just a few minutes of holding different postures.`,
            `This means how you hold your body isn't just a result of how you feel, it's also a CAUSE of how you feel. If you've been slumped over a screen for hours, you'll likely feel some of the low energy and dullness that posture creates. If you take a few moments to lengthen your spine, open your chest, and breathe deeply, your brain often shifts into a clearer, more positive state. This isn't magic. It's a real feedback loop that your nervous system runs on. Researcher Amy CUDDY famously studied this with what she called "power posing." Some of her early specific claims have been debated, but the broader finding (that posture affects mood and energy) has been confirmed many times since. How you hold your body matters more than you think.`,
          ],
          image: `/ue-assets/lw/l11-s1-both-ways.webp`,
          imageCaption: `Body and mind talk both ways. Posture doesn't just reflect mood. It shapes it.`,
          vocab: [
            { word: `body-mind feedback loop`,
              definition: `The two-way communication between your body and brain. Mood affects posture AND posture affects mood. How you hold your body sends signals back to your brain about what state to be in. Research shows measurable changes from just a few minutes of holding different postures.`,
              audioPrompt: `The body-mind feedback loop is the two-way communication between your body and brain, {name}. Most people think mood affects posture. When sad, you slump. When happy, you stand tall. That's true. But the opposite is also true. When you slump, you start to feel sadder. When you stand tall, you start to feel more confident. Your body posture sends signals back to your brain about what mood to be in. Researchers have found measurable mood, energy, and hormone changes from just a few minutes of holding different postures.` },
            { word: `postural feedback`,
              definition: `The measurable signal your body's posture sends back to your brain, affecting mood and energy. Posture runs in both directions: mood shapes posture AND posture shapes mood. Holding open, grounded posture shifts the brain toward confidence. Holding collapsed posture for hours shifts the brain toward low, sad states.`,
              audioPrompt: `Postural feedback is the measurable signal your body's posture sends back to your brain, affecting your mood and energy levels, {name}. Most people assume the link goes one way: I feel sad, I slump. But research shows it runs in both directions. Holding an open, grounded posture for even a few minutes shifts your brain toward more confident, focused states. Holding collapsed posture for hours shifts your brain toward lower, sadder states. Posture isn't just a result of how you feel. It's also a cause of how you feel.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Common Posture Patterns`,
          paragraphs: [
            `Notice that people generally hold their bodies in one of three patterns. First, EMPOWERED SETTLED posture. The body is open and grounded, spine long but not rigid, shoulders relaxed but not slumped, chest open enough to breathe deeply, head balanced on the neck. This posture sends signals to your brain that say "I'm here, I'm safe, I can handle this." Research shows kids and adults who default to this posture tend to feel more confident, focused, and emotionally steady.`,
            `Second, COLLAPSED posture. The body is curled inward, shoulders rolled forward, chest pressed in, head dropped, spine rounded. This is what most people do when they're sad, exhausted, defeated, or hours into screen time. Held briefly, no problem. Held for hours or days, it sends signals to your brain that say "I'm small, defeated, sad," and your mood actually drops to match. Researchers found that kids who collapse for long hours (often from sitting at screens or feeling down) tend to feel worse, even when nothing else is wrong. Third, LOCKED-RIGID posture. The body is held VERY upright but in a tense, forced way. Shoulders pulled back too hard, jaw clenched, breathing shallow. Looks "strong" from outside but the body is actually braced and tense. Held over time, this creates physical strain and exhaustion. Looks empowered but isn't.`,
          ],
          image: `/ue-assets/lw/l11-s2-three-patterns.webp`,
          imageCaption: `Empowered settled (open and grounded), collapsed (curled inward), locked-rigid (forced strength).`,
          vocab: [
            { word: `empowered settled posture`,
              definition: `Body open and grounded, spine long but NOT rigid, shoulders relaxed, chest open enough to breathe deeply, head balanced. Sends "I'm here, safe, capable" signals to the brain. Kids who default to this feel more confident, focused, and steady.`,
              audioPrompt: `Empowered settled posture is body open and grounded, {name}. Spine long but not rigid. Shoulders relaxed but not slumped. Chest open enough to breathe deeply. Head balanced on the neck. This posture sends signals to your brain that say I'm here, I'm safe, I can handle this. Research shows kids and adults who default to this posture tend to feel more confident, focused, and emotionally steady. It's not about looking impressive. It's about being honest and settled in your body.` },
            { word: `collapsed posture`,
              definition: `The curled-inward body pattern: shoulders rolled forward, chest pressed in, head dropped, spine rounded. Normal briefly. Held for many hours, sends "small, defeated, low energy" signals to the brain. Mood drops to match. Body aches and dullness after long screen sessions are often direct effects.`,
              audioPrompt: `Collapsed posture is the curled-inward body pattern with shoulders rolled forward, chest pressed in, head dropped, and spine rounded, {name}. This is what most people do when exhausted, sad, or hours into screen time. Held briefly, it's fine. Held for many hours, it sends real defeat and low-energy signals to your brain, and your mood drops to match. Body aches, low energy, and dullness after long screen sessions are often direct effects of the collapsed posture held during them.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Modern Kids Get Stuck in Collapsed Posture`,
          paragraphs: [
            `Here's a hard truth: kids today spend MANY hours a day in collapsed posture without realizing it. Hours at desks with rounded backs. Hours on phones with the head dropped forward (called "tech neck"). Hours hunched over schoolwork. Researchers measuring kids' postures have found a real shift over the last 20 years toward more collapse, more forward head position, less open chest. This isn't your fault. It's a real consequence of how modern kids spend their days. But it has real costs, more fatigue, worse mood, reduced breathing capacity, more body aches, and over years, real changes in how the spine forms during growth.`,
            `The good news: small daily counter-moves work. Every hour or so when you've been sitting, do a 30-second RESET. Stand up. Roll your shoulders back. Open your chest. Take a few deep breaths with your spine long. Look up at the ceiling for a moment. Stretch your arms wide. This tiny pattern, done several times a day, COUNTERS the collapse pattern building up. Many kids and adults feel a real mood shift after just 30 seconds of this. It's not about "good posture" rules, it's about giving your body real moments of opening and breath in a day that often forces it closed.`,
          ],
          image: `/ue-assets/lw/l11-s3-modern-kids.webp`,
          imageCaption: `Many hours of screens and desks build collapse. Small resets every hour counter it.`,
          vocab: [
            { word: `posture reset`,
              definition: `A 30-second body-opening practice done several times a day to counter hours of collapsed posture. Stand up, roll shoulders back, open chest, deep breath with long spine, stretch arms wide. Tiny pattern, big mood and energy shift.`,
              audioPrompt: `A posture reset is a 30-second body-opening practice done several times a day, {name}. Stand up. Roll your shoulders back. Open your chest. Take a few deep breaths with your spine long. Stretch your arms wide. This tiny pattern, done several times a day, counters the collapse pattern that builds up from screens and desks. Many kids and adults feel a real mood shift after just 30 seconds. It's not about good posture rules, it's about giving your body real moments of opening and breath.` },
            { word: `tech neck`,
              definition: `The posture pattern of head dropped forward over a screen or phone, creating strain on the neck and upper spine. Common in kids who use phones and screens many hours a day. Effects: neck soreness, headaches, reduced breathing capacity, low mood. Small hourly resets counter it.`,
              audioPrompt: `Tech neck is the posture pattern of head dropped forward over a screen or phone, creating strain on the neck and upper spine, {name}. With every inch the head drops forward from its balanced position, the effective weight on the neck roughly doubles. Kids who use phones and screens many hours a day build tech neck without realizing it. Effects include neck soreness, headaches, reduced breathing capacity, and low mood from the collapsed chest. Small hourly resets — standing, stretching, looking up — counter it.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Carrying Yourself With Quiet Confidence`,
          paragraphs: [
            `Beyond posture moment-to-moment, there's the bigger idea of HOW YOU CARRY YOURSELF, the way you move through the world, the energy you bring to a room, the way your body shows up when you walk into school, into a friend's house, into a hard conversation. This isn't about being impressive or fake. It's about a quiet, honest confidence that your body remembers when your mind sometimes forgets. The kid who walks into a room with empowered settled posture (not rigid, not collapsed) tends to feel more capable, AND comes across as more capable. People respond differently to bodies that hold themselves with quiet confidence.`,
            `Here's the kindest part: you don't have to perform this. It's not about looking impressive to others. It's about being HONEST in your body. Your body, when you let it settle in its natural strength, knows how to stand, walk, and sit in a way that supports you. Often, just remembering "spine long, shoulders soft, chest open, breath deep" is enough to shift back into it. Terra's first teaching about posture: how you hold your body matters because your body and mind are in constant conversation. Spend many hours collapsed and you'll feel collapsed. Spend a few minutes opening and breathing deeply and you'll feel different. This is real, science-backed, and SO USEFUL across your whole life. Carry yourself honestly, with quiet confidence, and your body will keep showing you its strength.`,
          ],
          image: `/ue-assets/lw/l11-s4-quiet-confidence.webp`,
          imageCaption: `Quiet, honest body confidence. Not performed. Just honest, settled, capable.`,
          vocab: [
            { word: `how you carry yourself`,
              definition: `The bigger pattern of how your body shows up in the world day after day, not just one posture moment. Quiet, honest body confidence, not performed strength. Empowered settled posture as a default. People respond differently to bodies that hold themselves this way.`,
              audioPrompt: `How you carry yourself is the bigger pattern of how your body shows up in the world day after day, {name}. Not just one posture moment. This isn't about being impressive or fake. It's about a quiet honest confidence. Your body, when you let it settle in its natural strength, knows how to stand, walk, and sit in a way that supports you. Just remembering spine long, shoulders soft, chest open, breath deep is often enough.` },
            { word: `quiet confidence`,
              definition: `The honest, settled body energy you carry when in empowered settled posture and genuinely present in yourself. Not performed. Not about looking impressive. The natural expression of a body that is open, grounded, and breathing well. Built by practicing empowered settled posture until it becomes your natural default.`,
              audioPrompt: `Quiet confidence is the honest, settled body energy you carry when you're in empowered settled posture and genuinely present in yourself, {name}. It isn't performed, not about looking impressive or trying to seem strong. It's the natural expression of a body that is open, grounded, and breathing well. People respond to quiet confidence differently than they respond to forced bravado or collapse. It comes across as capable and trustworthy. It's built by practicing empowered settled posture until it becomes your natural default.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four moments showing a kid's posture. Classify each: EMPOWERED SETTLED (open, grounded, body honestly capable), COLLAPSED (curled inward, sending defeat signals to the brain), or LOCKED-RIGID (forced strength, actually tense and braced underneath)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `empowered`, label: `Empowered Settled`,     color: `#34D399`, description: `Open and grounded, spine long but not rigid, shoulders relaxed, chest open, breath deep. Body says "I'm here, capable."` },
            { id: `collapsed`, label: `Collapsed`,              color: `#94A3B8`, description: `Curled inward, shoulders rolled forward, head down, spine rounded. Body says "I'm small, defeated." Briefly fine; held long is costly.` },
            { id: `locked`,    label: `Locked-Rigid`,           color: `#F87171`, description: `Held VERY upright but tense and braced. Shoulders pulled back too hard, jaw clenched, breath shallow. Looks strong, actually exhausting.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Posture #1`,
              clues: [
                { text: `A kid walks into a new classroom on the first day of school.` },
                { text: `Their spine is naturally long, shoulders relaxed, chest open enough to breathe deeply.` },
                { text: `They make eye contact with the teacher and find a seat with a settled, calm presence.` },
              ],
              correctAnswer: `empowered`,
              realWorldExample: `Open spine, relaxed shoulders, deep breath, calm presence. Empowered settled.`,
              explanation: `Pure empowered settled posture. The kid's body is honest, open, and grounded, not stiff, not slumped. This sends signals to their brain that say "I'm here, I'm safe, I can handle this." They feel more confident AND come across as more capable. This is the goal posture, not performed, not impressive, just honestly settled in the body.`,
            },
            {
              id: `case-2`,
              caseTitle: `Posture #2`,
              clues: [
                { text: `A kid has been on their phone for two hours, curled into the couch.` },
                { text: `Their shoulders are rolled forward, head dropped, chest compressed.` },
                { text: `When they finally get up, they feel low energy, slightly sad, and have a sore neck.` },
              ],
              correctAnswer: `collapsed`,
              realWorldExample: `Hours on phone, curled body, low mood, body aches afterward. Collapsed pattern.`,
              explanation: `Pure collapsed posture, the classic modern-kid version. Two hours of phone time in a curled position sends real "small, defeated, low energy" signals to the brain. Body aches and dropped mood are direct results, not coincidences. Brief moments of collapse are totally fine (resting in a soft couch is great). Hours of it is where the cost shows up.`,
            },
            {
              id: `case-3`,
              caseTitle: `Posture #3`,
              clues: [
                { text: `A kid is about to give a presentation. They stand VERY upright, chest puffed out hard.` },
                { text: `Shoulders pulled back tightly, jaw clenched, holding it perfectly still.` },
                { text: `Their breath is shallow. They look "strong" but their body is actually braced and tense.` },
              ],
              correctAnswer: `locked`,
              realWorldExample: `Looks strong externally, body braced and tense internally. Locked-rigid.`,
              explanation: `Pure locked-rigid posture. The kid is trying to look strong by FORCING the body into an upright shape, but their muscles are tense, their breath is shallow, and the energy underneath is anxious. Held briefly, no big deal. Held during the whole presentation, it creates exhaustion and actually makes them MORE nervous (because tense muscles + shallow breath signal alarm to the brain). The fix: soft shoulders, deep breath, spine long but not rigid. Genuine, not performed.`,
            },
            {
              id: `case-4`,
              caseTitle: `Posture #4: The Tricky One`,
              clues: [
                { text: `A kid plays a sport where coaches yell "STAND TALL!" and "SHOULDERS BACK!"` },
                { text: `The kid pulls their shoulders back hard and locks their chest forward.` },
                { text: `It LOOKS like good posture in the moment, but their breathing gets shallow and their neck starts to hurt.` },
              ],
              correctAnswer: `locked`,
              realWorldExample: `"Good posture" rules often produce locked-rigid, not actual empowered settled.`,
              explanation: `Tricky, {name}! Most people would call this "good posture" because the kid is doing what they were told. But look closely. Shoulders pulled hard, chest locked forward, breathing shallow, neck pain. That's LOCKED-RIGID, not empowered settled. Pure locked-rigid in disguise (the "trying-to-have-good-posture" version). Lesson: a lot of what people call "good posture" rules actually produce locked-rigid, not the relaxed empowerment your body actually wants. Real empowered settled is OPEN and RELAXED, not pulled back and tense. The cue isn't "shoulders back." Better cues, "spine long, shoulders soft, breath deep, chest open enough to breathe well." If your posture makes you tense or strained, it's not really good posture, no matter how it looks. Trust how your body feels, not just how it appears.`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l11-q1`, format: `true-false`,
              question: `True or false: Your body and mind talk in BOTH directions, posture affects mood AND mood affects posture.`,
              correctAnswer: true,
              explanation: `True. Body and mind communicate both ways. Mood affects posture (sad makes you slump) AND posture affects mood (slumping makes you feel sadder). Research shows measurable mood, energy, and even hormone changes from just a few minutes of holding different postures.` },

            { id: `l11-q2`, format: `multiple-choice`,
              question: `What is EMPOWERED SETTLED posture?`,
              options: [
                `Stiff and impressive`,
                `Body OPEN and GROUNDED. Spine long but NOT rigid, shoulders relaxed, chest open enough to breathe deeply, head balanced. Sends "I'm here, capable" signals to the brain`,
                `Slumped`,
                `Held perfectly still`,
              ],
              correctIndex: 1,
              explanation: `Empowered settled is body open and grounded, spine long but NOT rigid, shoulders relaxed but not slumped, chest open enough to breathe deeply, head balanced. Sends "I'm here, safe, capable" signals to brain. The goal posture, not stiff, just honestly settled.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What does COLLAPSED posture do when held for HOURS?`,
              options: [
                `Nothing`,
                `Sends "I'm small, defeated, sad" signals to your brain. Your mood actually drops to match. Body aches and fatigue often follow`,
                `Makes you stronger`,
                `Improves digestion`,
              ],
              correctIndex: 1,
              explanation: `Held for hours (often from screens, phones, slumped sitting), collapsed posture sends "I'm small, defeated, sad" signals to the brain. Your mood actually drops. Body aches and fatigue follow. Brief moments of collapse are fine; hours of it have real costs.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `What is LOCKED-RIGID posture?`,
              options: [
                `Real strength`,
                `Held VERY upright but TENSE and BRACED. Shoulders pulled too hard, jaw clenched, breath shallow. Looks strong, actually exhausting`,
                `Empowered`,
                `Relaxed`,
              ],
              correctIndex: 1,
              explanation: `Locked-rigid is held very upright but tense and braced. Shoulders pulled too hard, jaw clenched, breath shallow. LOOKS strong from outside but body is actually braced and tense. Held over time, creates strain and exhaustion. Not real empowerment.` },

            { id: `l11-q5`, format: `true-false`,
              question: `True or false: Many "good posture" rules ("shoulders back!") actually produce LOCKED-RIGID, not empowered settled.`,
              correctAnswer: true,
              explanation: `True. A lot of what people call "good posture" rules actually produce locked-rigid, not relaxed empowerment. Real empowered settled is OPEN and RELAXED, not pulled back and tense. Better cues: "spine long, shoulders soft, breath deep, chest open enough to breathe well." Trust how your body feels.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `Why do MODERN kids often get stuck in collapsed posture?`,
              options: [
                `They're lazy`,
                `Many hours at SCREENS and desks build collapse over time. "Tech neck," rounded backs, hunched over schoolwork. Researchers measure real shifts in kids' postures`,
                `Random reasons`,
                `Bad parents`,
              ],
              correctIndex: 1,
              explanation: `Modern kids spend many hours at screens and desks, building collapsed posture without realizing it. "Tech neck" (head dropped over phone), rounded backs from desks, hunched over schoolwork. Real measurable shifts in kids' postures over the last 20 years. Not the kid's fault, but real costs.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `What is a POSTURE RESET?`,
              options: [
                `A long workout`,
                `A 30-SECOND body-opening practice done several times a day. Stand up, roll shoulders back, open chest, deep breath, stretch arms wide`,
                `Sitting down`,
                `Doing pushups`,
              ],
              correctIndex: 1,
              explanation: `A posture reset is a 30-second body-opening practice done several times a day. Stand up, roll shoulders back, open chest, deep breath with long spine, stretch arms wide. Tiny pattern, real mood and energy shift. Counters the collapse pattern of modern life.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about posture?`,
              options: [
                `Always stand perfectly upright`,
                `How you hold your body matters because body and mind are in constant conversation. Carry yourself honestly with quiet confidence, not performed`,
                `Posture doesn't matter`,
                `Slump as you like`,
              ],
              correctIndex: 1,
              explanation: `How you hold your body matters because your body and mind are in constant conversation. Spend hours collapsed and you'll feel collapsed. Spend a few minutes opening and breathing deeply, you'll feel different. Carry yourself honestly, with quiet confidence, not performed.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}, lengthen your spine just a bit, and let your shoulders soften. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Right now, what posture are you in? Open and settled, collapsed, or locked-rigid? Be curious, not judgmental.` },
            { id: `r2`, text: `Think about an average school day. How many hours do you spend curled over a screen or desk? What might that be doing to your mood and body?` },
            { id: `r3`, text: `Try a 30-second posture reset right now. Stand up, roll shoulders back, open chest, deep breaths. What do you notice?` },
            { id: `r4`, text: `Picture yourself walking into a hard situation (a test, hard conversation, new place) with EMPOWERED SETTLED posture. How would that feel different?` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Research on posture and mood has been one of the more debated areas in psychology in the last decade. Some specific early findings (like the original "power pose" hormone claims) have been questioned and revised. But the broader body-mind connection (that posture and breath affect mood) has been confirmed many times in many different studies. The body-mind feedback loop is real, and it's measurable. Terra's note: posture isn't about looking impressive or following old-fashioned rules. It's about honoring the simple fact that your body and brain are in constant conversation. Spend hours collapsed, you feel collapsed. Spend a few moments lengthening, opening, and breathing deeply, your mood shifts. The kid who knows this has a free, instant, always-available wellness tool. Use it before tests. Use it in hard moments. Use it as your default whenever you can. Empowered settled posture is one of life's small, quiet, deeply useful skills.`,
          familyAdventure: `Family Posture Reset Practice. As a family, try this for one week: at one shared moment each day (maybe dinner, maybe before bed), everyone does a 30-second posture reset together. Stand up. Roll shoulders back. Open chest. Deep breaths. Look up. Stretch arms wide. Notice how it feels. Adults model it too. Building this into family rhythm helps everyone counter the collapse that modern life creates. Many families find it becomes a small but meaningful daily reset together.`,
          creativePrompt: {
            intro: `Write about how you carry your body — what you notice, what you'd like to grow.`,
            floor: `Write at least 5 sentences. Describe your usual posture patterns and one change you'd like to try.`,
            stretch: `Write 8 to 10 sentences. Reflect on the body-mind loop in your own daily life.`,
            open: `Write as much as you want. Write a full piece about your relationship with how you carry your body. Describe the posture patterns you notice in yourself, hours of collapse from screens or desks, moments of locked-rigid when trying to look strong, moments of natural empowered settled when you feel really yourself. Reflect on what you've learned about the body-mind feedback loop, and what this means for your daily life. Describe the kind of way-of-carrying-yourself you want to build, quiet, honest, settled, capable. End with specific cues you'll use ("spine long, shoulders soft, chest open, breath deep") and when you'll use them. Make it specific, grounded, and self-honoring.`,
            frames: [
              `The posture patterns I notice in myself are ___.`,
              `When I'm in collapsed posture, I usually feel ___.`,
              `When I'm in empowered settled posture, I usually feel ___.`,
              `The way I want to carry myself is ___.`,
              `My posture cues will be ___ and I'll use them when ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Strong work, {name}. You now understand the body-mind feedback loop, the three posture patterns (empowered settled, collapsed, locked-rigid), why modern kids often get stuck in collapse, and the 30-second reset that counters it. Carry yourself with quiet honest confidence. Your body and brain will keep talking, in healthier directions. Next, we explore another important body conversation, the one PAIN has with you. How to listen wisely. PAIN & LISTENING TO IT. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `body-aligned`,
          badgeName: `Body Aligned`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L11.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L11 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
