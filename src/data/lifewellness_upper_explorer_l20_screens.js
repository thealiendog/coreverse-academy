// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L20 — Designing Your Wellness Way (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : capstone integration of all 7 LW pillars — body listening, rest
//            and recovery, nourishment, movement and breath, nature and outside,
//            real connection, identity and habits. Woven into one personal
//            wellness identity. Terra's farewell lesson.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (7 pillars of your wellness way)
// SCOPE: integrating all 7 pillars into one seamless wellness identity;
//        body as friend (not enemy); noble pack-heart as inner stance;
//        gentle beginnings after hard days; wellness rippling outward
// VOICE: Terra = wolf elder at farewell, warm and proud, deeply tender.
//        Celebrating the whole journey. Parting with love.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-20`,
      title: `Designing Your Wellness Way`,
      duration: 20,
      xpReward: 100,
      badge: `wellness-architect`,
      badgeName: `Wellness Architect`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Welcome back one final time, {name}. Terra here. This is our last lesson together, and I've been looking forward to it. Today we don't learn something new. Today we WEAVE EVERYTHING TOGETHER. Every lesson you've completed in this subject — body listening, sleep, food, movement, breath, stress, nervous system, emotions, shame, connection, phones, outside, body image, habits, your lifetime — all of it flows together now into one complete wellness identity. Today you become a wellness architect. Not someone who follows rules, but someone who KNOWS their body, designs their own wellness way, and moves through the world from the inside out. Take a deep, settled breath. Feel your body. I'm here, you're here, and we're doing this together one last time.`,
          headline: `Designing Your Wellness Way`,
          subtitle: `Seven pillars, one woven life. This is your capstone`,
          visual: `/ue-assets/lw/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Wellness Way`,
          paragraphs: [
            `Here's the beautiful truth about everything you've learned: it was never a list of separate things to do. It was always one thing. YOUR WELLNESS WAY. The way you move through life as someone who knows and loves their body. Body listening and sleep and food and movement and breath and stress recovery and emotions and connection and outside time and body image and habits — these aren't separate tasks to check off. They're seven pillars of one integrated way of being. When you live your wellness way, you're not following a program. You're being yourself. A self who trusts their body's signals, who sleeps well because rest matters, who eats real food because their body deserves energy, who moves joyfully because movement is life, who breathes intentionally because breath changes everything, who stays connected because humans need each other, who gets outside because nature is medicine.`,
            `The research on this is powerful: people who INTEGRATE their wellness practices — who weave them together rather than treating them as separate boxes to check — are healthier, happier, and more consistent than people who treat wellness as a list. Integration means each pillar feeds the others. Good sleep makes better food choices easier. Better food choices give energy for movement. Movement completes your stress cycle. Completing your stress cycle improves emotional regulation. Better emotional regulation deepens connection. Deep connection gives you purpose. Purpose makes habits sustainable. Habits build your lifetime. And around it goes. That's what integration feels like. That's what YOUR WELLNESS WAY is. Today, we name the seven pillars, put them in your hands, and send you forward.`,
          ],
          image: `/ue-assets/lw/l20-s1-way.webp`,
          imageCaption: `Your wellness way: seven pillars woven into one seamless life.`,
          vocab: [
            { word: `your wellness way`,
              definition: `Your personal integrated practice of all seven pillars, woven into one seamless way of living. Not a list of tasks or a rigid program — a living way of moving through the world as someone who knows and loves their body. Body listening, rest, nourishment, movement and breath, nature, real connection, identity and habits: one woven whole.`,
              audioPrompt: `Your wellness way is your personal integrated practice of the seven pillars, {name}. It's not a rigid routine or a program — it's a living, breathing way of moving through the world that's uniquely yours. Body listening. Rest and recovery. Nourishment. Movement and breath. Nature and outside. Real connection. Identity and habits. Seven pillars woven together. When you weave them into your daily life, you're not following a list. You're being the kind of person who knows and loves their body. That's your wellness way.` },
            { word: `wellness integration`,
              definition: `When separate wellness practices flow together into one seamless way of living. Each pillar feeds the others: sleep improves food choices, food fuels movement, movement completes stress cycle, stress recovery deepens connection, connection gives purpose, purpose sustains habits. Nothing feels forced. The practices become one woven whole, not a list.`,
              audioPrompt: `Wellness integration is when separate practices flow together into one seamless way of living, rather than feeling like a list of tasks, {name}. When body listening informs your food choices, and those choices fuel joyful movement, and movement completes your stress cycle, and rest restores your capacity for connection, and connection gives you purpose, that's integration. Each pillar feeds the others. Nothing feels forced. The practices become one woven whole. You just live the way someone who knows and loves their body lives. That's what integration feels like.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Seven Pillars`,
          paragraphs: [
            `Let's name the seven pillars of your wellness way, with the key practices from each. BODY LISTENING (L01): interoception, body check-ins, trusting your body's signals, noticing early before signals get loud. REST AND RECOVERY (L02, L07): deep sleep, completing your stress cycle, honoring sickness as repair, not pushing through fatigue. NOURISHMENT (L03): real food most of the time, intuitive eating signals, eating for real energy, not for numbing or reward. MOVEMENT AND BREATH (L04, L05, L06): joyful movement that fits your body, slow exhale to shift your nervous system, posture as a daily tool for energy and mood.`,
            `NATURE AND OUTSIDE (L13): morning sunlight to anchor your circadian rhythm, real green time to lower cortisol, touching earth, weather in your face, presence in natural spaces. REAL CONNECTION (L14, L15): your pack, phones away for real presence, protective awareness about what social media does to your brain and body image. IDENTITY AND HABITS (L17, L18, L19): body kindness as identity (I'm someone who treats my body with love), tiny stacked habits for the long haul, the lifetime view. Seven pillars. All interlocking. All supporting each other. You've been learning them all year. They're yours now, woven together into the one practice called YOUR WELLNESS WAY.`,
          ],
          image: `/ue-assets/lw/l20-s2-pillars.webp`,
          imageCaption: `Seven pillars, all yours. Woven together, they're called your wellness way.`,
          vocab: [
            { word: `seven pillars`,
              definition: `The seven integrated foundations of your wellness way: body listening, rest and recovery, nourishment, movement and breath, nature and outside, real connection, identity and habits. Each pillar connects to the others. Together, they form one complete way of living as someone who knows and loves their body.`,
              audioPrompt: `The seven pillars are the integrated foundation of your wellness practice, {name}. Body listening: interoception, body check-ins, trusting your body's signals. Rest and recovery: deep sleep, stress cycle completion, honoring sickness. Nourishment: real food, intuitive eating signals, real energy. Movement and breath: joyful movement, slow exhale, posture. Nature and outside: morning sunlight, real green time, touching earth. Real connection: your pack, phones away, protective awareness. Identity and habits: body kindness as identity, tiny stacked habits, lifetime view. One woven way of living.` },
            { word: `interoceptive foundation`,
              definition: `The reason body listening sits at the base of all seven pillars. Interoception — the ability to sense what's happening inside your body — makes every other wellness practice smarter. Without it, sleep advice is abstract, hunger signals are noise, stress goes unnoticed. With it, you notice early and respond wisely, making choices that fit YOUR body.`,
              audioPrompt: `Interoceptive foundation is the reason body listening sits at the base of all seven pillars, {name}. Interoception, the ability to sense what's happening inside your body, is the skill that makes every other wellness practice smarter. Without it, sleep advice is abstract. Hunger signals are noise. Stress goes unnoticed until it overflows. Pain is ignored until it shouts. With interoception, you notice early and respond wisely. You make choices that fit YOUR body, not a general rule. Everything else you've learned in this subject flows from it.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Your Body as a Friend`,
          paragraphs: [
            `Here's Terra's deepest teaching, and the one that holds all seven pillars together: YOUR BODY IS YOUR FRIEND. Not your enemy. Not a problem to fix. Not something to fight, punish, manage, or be ashamed of. Your body is your wise, loyal, beautiful companion, who has been with you your whole life, who carries you through every moment, who sends you signals to help you, who is ALWAYS trying to take care of you. When your body sends hunger signals, it's trying to help you. When it sends tiredness, it's trying to help you. When it sends stress responses, it's trying to protect you. When it gets sick, it's fighting for you. Your body has never been your enemy. It's been your most faithful ally.`,
            `The wellness journey isn't about WINNING AGAINST your body. It's about LIVING IN PARTNERSHIP WITH IT. A partnership looks like this: your body signals, you listen. Your body needs rest, you give it. Your body craves nourishment, you provide it. Your body wants to move, you let it. Your body needs connection, you prioritize it. This partnership is the foundation under all seven pillars. Everything gets easier when you're working WITH your body instead of against it. The kindness you give your body ripples outward too. People who treat their bodies with care tend to treat others with care. Wellness isn't just a personal thing. It radiates.`,
          ],
          image: `/ue-assets/lw/l20-s3-friend.webp`,
          imageCaption: `Your body is your wise, loyal, beautiful friend. Wellness is partnership.`,
          vocab: [
            { word: `body as friend`,
              definition: `Terra's deepest teaching: your body is your wise, loyal, beautiful companion, always trying to help you. Wellness isn't about winning against your body — it's living in partnership with it. The kid who treats their body as a friend lives in a completely different reality than one who treats it as a problem. Kindness ripples outward.`,
              audioPrompt: `Body as friend is Terra's deepest teaching, {name}. Your body is your wise, loyal, beautiful friend, who has been with you your whole life, who carries you through every moment, always trying to help you. Wellness isn't about winning against your body, it's living in partnership with it. The kid who treats their body as a friend lives in completely different reality than the kid who treats it as a problem. Kindness toward yourself is the same energy as kindness toward others. Wellness ripples outward into a kinder world.` },
            { word: `wellness partnership`,
              definition: `The relationship you build with your body when you treat it as a collaborator rather than something to control. A partner relationship listens and responds: I'm tired — what do you need? A management relationship pushes through. Research on long-term health shows people who develop a partner relationship with their body make better decisions, sustain habits longer, and report higher quality of life.`,
              audioPrompt: `Wellness partnership is the relationship you build with your body when you treat it as a collaborator rather than something to control, {name}. A partner relationship sounds like: I'm tired, what do you need? I'm hungry, what would actually help? I'm stressed, what would help right now? A management relationship sounds like: push through, ignore that, override this. Research on long-term health shows that people who develop a partner relationship with their body make better decisions, sustain habits longer, and report higher quality of life.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Noble Pack-Heart`,
          paragraphs: [
            `Before we go, Terra has a parting gift for you. It's called your NOBLE PACK-HEART. This is the inner stance that makes your wellness way last — the emotional foundation under everything. What is the noble pack-heart? It's the inner stance of facing your wellness with steady, patient, kind care for yourself as a partner. Like a wolf in a pack, you tend yourself with the same loyalty you'd give a beloved family member. The pack-heart doesn't punish when you have a hard week. It doesn't give up when you fall short. It doesn't wait for perfect conditions. It doesn't call you a failure. It says: you're still here, I'm still here, let's begin again, gently.`,
            `Here's what GENTLE BEGINNINGS looks like in practice. You have a sick week — no sleep, poor food, no movement, too much screen time. A harsh inner voice says: you failed, you're so far behind, you have to restart from zero. The noble pack-heart says: that was a hard week, your body got through it, today we begin again gently. No drama. No big announcement. Just pick up the next small habit. Take one slow breath. Drink one glass of water. Go outside for five minutes. That's it. That's the noble pack-heart. Every hard day in your life, you'll have this inner wolf who says: we're still here, let's begin again. The world will tell you you're not enough. Terra says: you have always been enough. Trust your body. Live with peace. Carry your pack-heart through your whole life.`,
          ],
          image: `/ue-assets/lw/l20-s4-pack.webp`,
          imageCaption: `Your noble pack-heart: steady, patient, kind. Begin again, gently. Always.`,
          vocab: [
            { word: `noble pack-heart`,
              definition: `Terra's parting gift: the inner stance of facing your wellness with steady, patient, kind care for yourself as a partner. Like a wolf in a pack, you tend yourself with the same loyalty you'd give a beloved family member. No punishment for hard days. No giving up. Always ready to begin again, gently.`,
              audioPrompt: `Your noble pack-heart is Terra's parting gift, {name}. The inner stance of facing your wellness with steady, patient, kind care for yourself as a partner. Like a wolf in a pack, you tend yourself with the same loyalty you'd give a beloved family member. The world will try to convince you you're not enough. Stay kind to yourself. Trust your body. Live with peace, not war. Take a slow breath, summon the wolf in your heart, and I'm always there.` },
            { word: `gentle beginnings`,
              definition: `The practice of returning to your wellness way with kindness after hard days or long gaps. Most people wait for motivation or plan a big restart — neither works. The wiser path: just begin again, gently, with no drama. Pick up the next small habit. Take the next slow breath. Each return is not failure. It's proof of the noble pack-heart.`,
              audioPrompt: `Gentle beginnings is the practice of returning to your wellness way with kindness after hard days or long gaps, {name}. Most people treat hard days as proof that they've failed. They wait for motivation to return. They plan a big restart. None of these work. The wiser alternative is simply beginning again, gently, with no drama. Just pick up the next small habit today. Take the next slow breath. Drink the next glass of water. Each return is not a failure. It's proof of the noble pack-heart.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the seven pillars of your wellness way in order, {name}. From your INNERMOST sensing to your OUTWARD identity. These are yours now. Use the arrows to arrange them.`,
          items: [
            { id: `pillar-body-listening`, label: `BODY LISTENING — Interoception, body check-ins, trusting your body's signals. The innermost pillar. The foundation of all wellness`,                                                          position: 1 },
            { id: `pillar-rest`,           label: `REST AND RECOVERY — Deep sleep, stress cycle completion, honoring sickness as repair. Your body's greatest daily need`,                                                                       position: 2 },
            { id: `pillar-nourishment`,    label: `NOURISHMENT — Real food most of the time, intuitive eating signals, eating for real energy. What your body actually runs on`,                                                                  position: 3 },
            { id: `pillar-movement`,       label: `MOVEMENT AND BREATH — Joyful movement, slow exhale, posture. The daily practices that shift your whole nervous system`,                                                                        position: 4 },
            { id: `pillar-nature`,         label: `NATURE AND OUTSIDE — Morning sunlight, real green time, touching earth. Your circadian anchor and stress medicine`,                                                                            position: 5 },
            { id: `pillar-connection`,     label: `REAL CONNECTION — Your pack, phones away, protective awareness. The single strongest predictor of lifelong health`,                                                                            position: 6 },
            { id: `pillar-identity`,       label: `IDENTITY AND HABITS — Body kindness as identity, tiny stacked habits, the lifetime view. Your outward wellness architecture`,                                                                  position: 7 },
          ],
          completionMessage: `Perfectly done, {name}. Seven pillars, all yours. Body listening. Rest and recovery. Nourishment. Movement and breath. Nature and outside. Real connection. Identity and habits. Woven together, they're not a list. They're YOUR WELLNESS WAY. You're a wellness architect now. Carry these pillars into every decade of your life.`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Let's see what you carry with you, {name}. These are yours now.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What does WELLNESS INTEGRATION mean?`,
              options: [
                `Doing all pillars at once`,
                `When separate wellness practices FLOW TOGETHER into one seamless way of living, each pillar feeding the others`,
                `Random mixing`,
                `Following a strict routine`,
              ],
              correctIndex: 1,
              explanation: `Wellness integration is when separate practices flow together into one seamless way of living. Each pillar feeds the others: sleep improves food choices, food fuels movement, movement completes stress cycle, recovery deepens connection, connection gives purpose, purpose sustains habits. Nothing feels forced. That's integration.` },

            { id: `l20-q2`, format: `multiple-choice`,
              question: `How many pillars are in YOUR WELLNESS WAY?`,
              options: [`5`, `6`, `7`, `8`],
              correctIndex: 2,
              explanation: `Seven pillars: body listening, rest and recovery, nourishment, movement and breath, nature and outside, real connection, identity and habits. All seven interlocking, all supporting each other, all woven into one personal wellness way.` },

            { id: `l20-q3`, format: `true-false`,
              question: `True or false: Terra's deepest teaching is that your body is your FRIEND, not your enemy.`,
              correctAnswer: true,
              explanation: `True. Your body is your wise, loyal, beautiful friend who has been with you your whole life, who carries you through every moment, always trying to help you. Wellness isn't about winning against your body — it's living in partnership with it.` },

            { id: `l20-q4`, format: `multiple-choice`,
              question: `What is the NOBLE PACK-HEART?`,
              options: [
                `A heart condition`,
                `The inner stance of facing your wellness with STEADY, PATIENT, KIND care for yourself as a partner — like a wolf tending the pack`,
                `A motivation trick`,
                `Random encouragement`,
              ],
              correctIndex: 1,
              explanation: `The noble pack-heart is Terra's parting gift: the inner stance of facing your wellness with steady, patient, kind care for yourself as a partner. Like a wolf in a pack, you tend yourself with the same loyalty you'd give a beloved family member. No punishment for hard days. Always ready to begin again gently.` },

            { id: `l20-q5`, format: `multiple-choice`,
              question: `What is GENTLE BEGINNINGS?`,
              options: [
                `Starting slowly`,
                `Returning to your wellness way with KINDNESS after hard days or long gaps — no drama, just begin again with the next small habit`,
                `Beginning a new program`,
                `Planning a big restart`,
              ],
              correctIndex: 1,
              explanation: `Gentle beginnings is the practice of returning to your wellness way with kindness after hard days or long gaps. Not waiting for motivation, not planning a big restart. Just beginning again, gently, with no drama. Pick up the next small habit. Take the next slow breath. Each return is proof of the noble pack-heart.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `Which pillar does research show is the SINGLE STRONGEST predictor of lifelong health?`,
              options: [
                `Nourishment`,
                `Movement`,
                `REAL CONNECTION — the quality of close relationships across decades`,
                `Rest`,
              ],
              correctIndex: 2,
              explanation: `Real connection. The Harvard Adult Development Study found that the quality of close relationships across decades was the single strongest predictor of being healthy and happy at 80. More important than wealth, fame, success, or even genes. Connection is foundational.` },

            { id: `l20-q7`, format: `true-false`,
              question: `True or false: The INTEROCEPTIVE FOUNDATION means body listening sits at the base of all seven pillars.`,
              correctAnswer: true,
              explanation: `True. Interoception — the ability to sense what's happening inside your body — is the skill that makes every other wellness practice smarter. Without it, sleep advice is abstract, hunger signals are noise, stress goes unnoticed. With it, you notice early and respond wisely, making choices that fit YOUR body.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `What does YOUR WELLNESS WAY mean?`,
              options: [
                `A strict diet and exercise plan`,
                `Your PERSONAL integrated practice of all seven pillars, woven into one seamless way of living as someone who knows and loves their body`,
                `A wellness app`,
                `A list of rules to follow`,
              ],
              correctIndex: 1,
              explanation: `Your wellness way is your personal integrated practice of all seven pillars, woven into one seamless way of living. Not a program, not a list — a living way of moving through the world as someone who knows and loves their body. Body listening, rest, nourishment, movement and breath, nature, real connection, identity and habits: one woven whole.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `Take a deep, settled breath, {name}. Pick ONE question and answer it slowly, just for you. I'll hold what you share with care.`,
          prompts: [
            { id: `r1`, text: `Of the seven pillars, which one do you feel STRONGEST in right now? Which feels like your natural home base?` },
            { id: `r2`, text: `Which pillar would you most like to GROW in? What's one small step you could take this week?` },
            { id: `r3`, text: `What does your NOBLE PACK-HEART feel like? Describe it. Give it a name if you want.` },
            { id: `r4`, text: `Write a letter to yourself from Terra — what would she say to you, personally, about your wellness journey this year?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `This is the capstone lesson of Life Wellness. Everything you've learned in this subject — from body listening in Lesson One to the long-view of your lifetime, from food and sleep and movement and breath, from nervous system and emotions and shame, from connection and phones and the outside world, from body image and habits and the lifetime ahead of you — it all flows into this: YOUR WELLNESS WAY. Seven pillars, woven into one personal practice that's uniquely yours. The research on integrated wellness is clear. People who weave their practices together, who see wellness as a way of being rather than a list of boxes, sustain their health and happiness far longer and more joyfully than those who treat it as a program. You're not following a program anymore. You're a wellness architect. You design your own way. Terra's farewell: stay kind to yourself. Trust your body. Move through the world with the noble pack-heart. Begin again gently, every time. Wellness ripples outward from people who treat themselves with love, into kinder families, communities, and eventually a kinder world. You're part of that. Every small kindness you give yourself matters. Go well, {name}. I'm always with you.`,
          familyAdventure: `Family Wellness Architecture. As a family, sit down together and name YOUR FAMILY'S WELLNESS WAY. What are your pillars? Which ones is your family already strong in? Which ones would you like to grow together? Each person shares: one pillar they want to commit to this month, one small habit from that pillar. Put it somewhere visible. Return to it at the end of the month. Many families find that naming their wellness way together creates a shared identity around caring for their bodies — not as rules or a program, but as what our family does. It becomes a foundation that holds up through hard times and gets stronger across years.`,
          creativePrompt: {
            intro: `Design YOUR WELLNESS WAY — as a drawing, map, poster, or written document.`,
            floor: `Write or draw your seven pillars. Give each one a key practice. Put your name on it.`,
            stretch: `Create a full wellness map with all seven pillars labeled, your strongest pillar highlighted, and your noble pack-heart named.`,
            open: `Design your complete Wellness Architecture. This is YOUR document — a map, poster, or written plan that captures your personal integrated wellness way. Include: all seven pillars with your personal key practices for each. Your wellness identity statement (I am someone who ___). Your noble pack-heart (name it, describe it, draw it). Your gentle beginning plan (what you'll do after a hard day). Your lifetime vision (one sentence about the 80-year-old you're building). This is your capstone artifact. Keep it. Return to it across your life. Add to it as you grow. It's the map of who you're becoming.`,
            frames: [
              `My seven pillars are ___.`,
              `My strongest pillar is ___ because ___.`,
              `My wellness identity statement is: I am someone who ___.`,
              `My noble pack-heart is called ___ and it feels like ___.`,
              `After a hard day, I'll begin again by ___.`,
              `My 80-year-old self is counting on me to ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `WELLNESS ARCHITECT. That's you, {name}. You've completed ALL of Life Wellness. From body listening to the long view of your lifetime, you've built a complete wellness way that's yours forever. Seven pillars, woven together. Your noble pack-heart, steady and kind. Your body as your friend, not your enemy. Begin again gently, every time. Let your wellness ripple outward into a kinder world. Terra says: it has been my greatest honor. Stay kind to yourself. Trust your body. You are enough, always. — Terra, always with you.`,
          badge: `wellness-architect`,
          badgeName: `Wellness Architect`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L20;
