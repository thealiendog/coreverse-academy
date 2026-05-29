// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L19 — Your Body Across a Lifetime
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : long-view of wellness, compound effects across decades, the
//            wisdom of starting young. Research from longitudinal health
//            studies (Harvard Adult Development, blue zones research).
//            Honest about aging without fear; hopeful framing.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 truths about your body across a lifetime, from
//            now to old age)
// SCOPE: small daily care compounds into massive lifetime outcomes; aging
//        is natural, not failure; you're building decades right now; the
//        habits you build at 9-10 shape your 80-year-old self; long-view
//        kindness over short-term fixes
// VOICE: Terra = elder wolf wisdom, deeply tender, looking far ahead with
//        love. The pack-mother who's seen many decades.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-19`,
      title: `Your Body Across a Lifetime`,
      duration: 18,
      xpReward: 75,
      badge: `lifetime-tender`,
      badgeName: `Lifetime Tender`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we zoom way out. We look at your body not just for today, not just for this year, but for your ENTIRE LIFE. Decades. The body you have at 9 or 10 is going to be with you at 25, 50, 80, and beyond. How you treat it now matters more than you might realize, kindness today compounds into wellness across your whole life. This isn't to scare you, it's to give you a HOPEFUL long view. Most of the choices about your future wellness are being made RIGHT NOW, with the daily habits and care you give your body. Take a settled breath, and let's look down the road together.`,
          headline: `Your Body Across a Lifetime`,
          subtitle: `The body you have now is the body you'll have for decades. Kindness compounds`,
          visual: `/ue-assets/lw/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You're Building Decades Right Now`,
          paragraphs: [
            `Here's something most kids never think about: the body you have today is the same body you'll have at 25, at 50, at 80. The wellness habits you build NOW (sleep, food, movement, breath, hydration, nature, connection, body kindness) compound across decades into massive lifetime outcomes. Researchers studying long-term health (the Harvard Adult Development Study, the BLUE ZONES research on long-lived populations) have found something remarkable: the people who are HEALTHIEST AND HAPPIEST in their 70s, 80s, and 90s aren't usually the ones who started taking care of themselves at 50. They're the ones who built KIND HABITS young, sustained them across decades, and let the compound effects accumulate.`,
            `Think of it like planting a tree. A tiny seedling planted today is barely visible. But with consistent care, it grows steadily into a massive tree across decades. Your wellness habits work the same way. One night of good sleep doesn't change much. Two thousand nights of good sleep change EVERYTHING. One glass of water is small. A lifetime of staying well-hydrated transforms your health. The tiny habits you build at 9 or 10 plant the seedlings of your 80-year-old self. This is one of the most hopeful truths in wellness science. You don't have to be perfect. You don't have to figure out everything at once. Small kindness, repeated, compounds into massive long-term outcomes. The starting point is just being awake to it.`,
          ],
          image: `/ue-assets/lw/l19-s1-decades.webp`,
          imageCaption: `Tiny habits planted now compound across decades into massive lifetime outcomes.`,
          vocab: [
            { word: `compound wellness`,
              definition: `The way small daily habits accumulate over decades into massive lifetime outcomes. Like a tree from a seedling. Research shows people who are healthiest in their 70s-90s usually built kind habits YOUNG and sustained them. Tiny consistency is more powerful than big late-life changes.`,
              audioPrompt: `Compound wellness is the way small daily habits accumulate over decades into massive lifetime outcomes, {name}. Like a tree from a seedling. Researchers studying long-term health, including the Harvard Adult Development Study and the Blue Zones research, found the people healthiest and happiest in their 70s, 80s, and 90s aren't usually ones who started at 50. They're ones who built kind habits young, sustained them across decades, and let compound effects accumulate. One night of good sleep doesn't change much. Two thousand nights change everything.` },
            { word: `the long view`,
              definition: `Making wellness choices with years and decades in mind — not just today. Research shows people who think in decades make consistently kinder daily choices. Small decisions compound into who you become at 50, 70, 90. The long view is available to you right now.`,
              audioPrompt: `The long view is making wellness choices with years and decades in mind, {name}. Most decisions feel small in the moment. One night of good sleep. One glass of water. One outside walk. But across two thousand nights, across a lifetime of walks, across decades of hydration, these small choices compound into who you become at 50, 70, 90. Researchers studying long-lived populations found that people who think in decades make consistently kinder daily choices for their bodies. The long view is available to you right now.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Aging Is Natural. Not Failure.`,
          paragraphs: [
            `Here's an important truth: AGING is a natural, beautiful part of being alive. Bodies change as they age, that's how they're designed. Older bodies have wrinkles, gray hair, different shapes, different energy patterns than younger bodies. NONE of this is failure. NONE of it is "ugly." Older bodies have carried someone through decades of life, that's astonishing, not shameful. The wellness goal isn't to "stay young forever" (impossible and exhausting). The goal is to be HEALTHY AND CAPABLE for as long as possible, while letting natural aging happen with grace.`,
            `Modern culture often sells products that promise to "fight aging." This framing is unkind to bodies. Aging isn't the enemy. It's life happening. The wiser frame: care for your body so it can carry you well for many decades, AND let your appearance change naturally as time passes. The grandparents and elders you love don't need to look 25, they need to feel CAPABLE and connected and at peace in their bodies. That's what you're building for, your own future self at 80, living in a body they've cared for across a lifetime, still able to do what they love, still at peace with how they look, because they never made an enemy of natural aging. The kid who learns this avoids decades of body-shame about getting older.`,
          ],
          image: `/ue-assets/lw/l19-s2-aging.webp`,
          imageCaption: `Aging is natural, not failure. Goal: healthy and capable for many decades, with grace.`,
          vocab: [
            { word: `aging with grace`,
              definition: `The mature understanding that aging is natural and beautiful, not failure. Goal isn't to "stay young forever" but to be HEALTHY AND CAPABLE for as long as possible while letting appearance change naturally. Modern anti-aging culture is unkind to bodies. The wiser frame: long-term care + grace.`,
              audioPrompt: `Aging with grace is the understanding that aging is natural and beautiful, not failure, {name}. Bodies change as they age. That's how they're designed. Older bodies have wrinkles, gray hair, different shapes, different energy. None of this is failure. Older bodies have carried someone through decades of life. That's astonishing, not shameful. Modern culture sells products that promise to fight aging. This framing is unkind. The wiser frame: care for your body so it can carry you well for decades, and let your appearance change naturally as time passes.` },
            { word: `lifestyle longevity`,
              definition: `The research finding that long, healthy lives are shaped more by daily habits than by genetics or wealth. Blue Zones populations share patterns: regular movement, mostly real food, rest, close relationships, purpose, community. Most are things you've already been learning. Longevity isn't a destination — it's how you live.`,
              audioPrompt: `Lifestyle longevity is the finding that long, healthy lives are shaped more by daily habits than by genetics or wealth, {name}. Blue Zones researchers studying populations who live longest and healthiest found shared patterns: they move their bodies in everyday activities, eat mostly real food, stop eating when satisfied, take rest seriously, maintain close relationships, have a strong sense of purpose, and belong to communities they care about. Most of these patterns are things you've already been learning. Lifestyle longevity isn't a destination. It's how you live from today forward.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Compounds Most`,
          paragraphs: [
            `Researchers studying lifelong health have identified the practices that COMPOUND most powerfully across decades. Going to list them now because they're worth knowing. SLEEP (L02) is at the top, consistent good sleep across a lifetime correlates strongly with health, longevity, and brain function. REAL FOOD (L03) most of the time. Eating mostly whole foods for decades is more powerful than any diet plan. MOVEMENT (L04) consistently across life, not necessarily intense, just regular. People who move daily into old age stay capable far longer than those who don't.`,
            `STRESS RECOVERY (L07) and NERVOUS-SYSTEM REGULATION (L06) protect your brain and heart across decades. People stuck in chronic activation age faster. SOCIAL CONNECTION (L14), the Harvard Adult Development Study found this is the SINGLE STRONGEST predictor of who is healthy at 80, stronger than wealth, fame, or even genes. OUTSIDE TIME (L13) and SUNLIGHT regulate your circadian rhythm and hormones for life. AVOIDING TOXINS (heavy drinking, smoking, excessive caffeine and sugar) protects your organs for the long haul. PURPOSE and meaning, having things you care about, people you love, projects that matter, all of these correlate with longevity. Notice what's NOT on the list: extreme diets, expensive supplements, surgery, or fads. The compound winners are the basic ones, done consistently for decades. You've learned all of them in this subject. You're way ahead.`,
          ],
          image: `/ue-assets/lw/l19-s3-compounds.webp`,
          imageCaption: `What compounds most. Sleep, real food, movement, recovery, connection, outside, purpose.`,
          vocab: [
            { word: `compound winners`,
              definition: `The wellness practices that accumulate most powerfully across decades. Sleep, real food, regular movement, stress recovery, social connection, outside time, avoiding toxins, having purpose. Research-backed. Notice what's NOT on the list, extreme diets, supplements, surgery, fads. Basics done for decades win.`,
              audioPrompt: `Compound winners are the wellness practices that accumulate most powerfully across decades, {name}. Sleep, real food, regular movement, stress recovery and nervous-system regulation, social connection (the Harvard Adult Development Study found this is the single strongest predictor of who is healthy at 80), outside time and sunlight, avoiding toxins like heavy drinking and smoking, and having purpose. Notice what's NOT on the list. Extreme diets, expensive supplements, surgery, or fads. The compound winners are the basic ones done consistently for decades. You've learned all of them in this subject.` },
            { word: `preventive wisdom`,
              definition: `Protecting your health BEFORE problems develop, through daily kind habits rather than waiting for crisis. Most adult health problems are largely preventable through consistent wellness habits started young. Prevention is the side effect of living kindly in your body, day after day, decade after decade.`,
              audioPrompt: `Preventive wisdom is protecting your health BEFORE problems develop, through daily kind habits rather than waiting for crisis, {name}. Most adult health problems, heart disease, type two diabetes, chronic stress, sleep disorders, anxiety, are largely preventable through consistent wellness habits started young. The good news is that the same practices that prevent disease also make you feel better and more joyful every day. Prevention isn't a separate project. It's the side effect of living kindly in your body, day after day, decade after decade. You're building it right now.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `You're Already in Your Lifetime`,
          paragraphs: [
            `Here's a way of thinking that changes everything: you're not "going to start" your wellness life someday. You're ALREADY IN IT. Today is part of your lifetime. The choices you make today are part of the long unfolding of your life. The breath you took five minutes ago is part of your lifetime. The meal you ate today shapes your tomorrow, slightly. The way you treated your body today is one of thousands of moments that add up to who you are at 80. This isn't pressure, it's permission. Permission to start RIGHT NOW. Whatever happened before today matters less than what you do from today forward. You don't have to wait for anything to start being kind to your body.`,
            `Here's the deepest truth: the version of you at 80, the elder you'll one day be, is a real person who exists in the future. They're going to live in the body you're caring for right now. They're going to remember the kindnesses you gave yourself across decades. They're going to be grateful for the habits you built, and gentle with the times you fell short. Picture them now. Imagine they could send a message back to you today. What would they say? Probably something like: "Be kind to yourself. Sleep well. Move joyfully. Eat real food. Love your body. Stay connected. Get outside. Trust your wisdom. I'm so glad you started gently and stayed kind. I'm here because of you." Terra's first teaching about the long view: you're building decades right now. Tiny daily kindness compounds. Aging is natural, not failure. The basics are the compound winners. Start today. Stay kind. Your 80-year-old self is counting on you, AND already proud of you.`,
          ],
          image: `/ue-assets/lw/l19-s4-already.webp`,
          imageCaption: `You're already in your lifetime. Today is part of it. Your 80-year-old self is counting on you.`,
          vocab: [
            { word: `your future self`,
              definition: `The real version of you that exists in the future, at 25, 50, 80. They will live in the body you're caring for right now. The choices you make today shape who they get to be. Picturing them as a real person can guide kind daily choices. They're counting on you, and already grateful.`,
              audioPrompt: `Your future self is the real version of you that exists in the future, {name}. The you at 25, 50, 80. They will live in the body you're caring for right now. They'll remember the kindnesses you gave yourself across decades. Picture them now. Imagine they could send a message back. They'd probably say be kind to yourself, sleep well, move joyfully, eat real food, love your body, stay connected, get outside, trust your wisdom. I'm so glad you started gently. I'm here because of you.` },
            { word: `tender witness`,
              definition: `The inner stance of watching yourself with kindness rather than harsh judgment. A tender witness notices hard days without a harsh verdict — you slept poorly, that happens, what did your body need? Research shows people with this compassionate inner voice sustain habits longer and recover from hard days faster.`,
              audioPrompt: `A tender witness is the inner stance of watching yourself with kindness rather than harsh judgment, {name}. Most people talk to themselves harshly about their wellness choices. I should have slept more. I ate poorly. I didn't move today. A tender witness notices the same things, but without the harsh verdict. You slept poorly. That happens. What did your body need? This compassionate inner voice is one of the most protective wellness practices there is. People who develop it sustain their habits longer and recover from hard days faster.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the truths about your body across a lifetime in order, {name}. From FOUNDATIONAL truth to OUTERMOST living practice. Use the arrows to arrange them.`,
          items: [
            { id: `truth-decades`,     label: `YOU'RE BUILDING DECADES RIGHT NOW. The body you have today is the same body you'll have at 25, 50, 80. What you do now compounds across your whole life`,                             position: 1 },
            { id: `truth-natural`,     label: `AGING IS NATURAL, NOT FAILURE. Older bodies have carried someone through decades, that's beautiful, not shameful. Aim for healthy and capable, not "young forever"`,               position: 2 },
            { id: `truth-compounds`,   label: `THE BASICS COMPOUND. Sleep, real food, movement, recovery, connection, outside, purpose. Not extreme diets or supplements or fads. The simple things done for decades win`,       position: 3 },
            { id: `truth-already`,     label: `YOU'RE ALREADY IN YOUR LIFETIME. Today is part of it. You don't need to "start someday." The choices you make right now are shaping your future`,                                 position: 4 },
            { id: `truth-future-self`, label: `YOUR 80-YEAR-OLD SELF IS COUNTING ON YOU. And already grateful. The elder version of you is real and is shaped by the kindness you give your body now`,                           position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. Carry these five truths through your whole life. You're building decades. Aging is natural. The basics compound. You're already in your lifetime. Your 80-year-old self is counting on you. Live by these and watch your whole life slowly become a quiet masterpiece of self-care.`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l19-q1`, format: `true-false`,
              question: `True or false: The wellness habits you build at 9-10 don't really matter for your 80-year-old health.`,
              correctAnswer: false,
              explanation: `False. The wellness habits you build now compound across decades into massive lifetime outcomes. Researchers studying long-term health found people healthiest in their 70s-90s usually built kind habits YOUNG and sustained them. The tiny seedlings you plant now grow into the tree of your future self.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `What does COMPOUND WELLNESS mean?`,
              options: [
                `Doing a lot at once`,
                `The way small daily habits ACCUMULATE over decades into massive lifetime outcomes. Like a tree from a seedling`,
                `Random`,
                `Big yearly changes`,
              ],
              correctIndex: 1,
              explanation: `Compound wellness is the way small daily habits accumulate over decades into massive outcomes. One night of good sleep doesn't change much. Two thousand nights change everything. One glass of water is small; a lifetime of staying well-hydrated transforms your health. Tiny consistency is more powerful than big late changes.` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `What is the WISE attitude toward AGING?`,
              options: [
                `Fight it forever`,
                `Aging is NATURAL and beautiful, not failure. Goal is healthy and capable for many decades while letting appearance change with grace`,
                `Hide all signs`,
                `It doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Aging is natural and beautiful, not failure. Older bodies have carried someone through decades of life, that's astonishing. The wellness goal isn't to "stay young forever" (impossible and exhausting). The goal is to be HEALTHY AND CAPABLE for as long as possible while letting natural aging happen with grace.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `What did the Harvard Adult Development Study find is the SINGLE STRONGEST predictor of being healthy at 80?`,
              options: [
                `Wealth`,
                `SOCIAL CONNECTION. The quality of close relationships across decades, more important than wealth, fame, or even genes`,
                `Fame`,
                `Good genes`,
              ],
              correctIndex: 1,
              explanation: `The Harvard Adult Development Study (the longest study of human well-being ever conducted) found that the quality of close relationships across decades was the single strongest predictor of being healthy and happy at 80. More important than wealth, fame, success, or even genes. Connection is foundational.` },

            { id: `l19-q5`, format: `multiple-choice`,
              question: `What are the COMPOUND WINNERS for lifelong health?`,
              options: [
                `Extreme diets and supplements`,
                `Sleep, real food, regular movement, stress recovery, social connection, outside time, avoiding toxins, having purpose. The BASICS done for decades`,
                `Surgery and fads`,
                `Random fixes`,
              ],
              correctIndex: 1,
              explanation: `Compound winners: sleep, real food, regular movement, stress recovery, social connection, outside time, avoiding toxins (heavy drinking, smoking), having purpose. Notice what's NOT on the list: extreme diets, supplements, surgery, fads. The basics done consistently for decades win. You've learned all the basics in this subject.` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `Why is it powerful to PICTURE your 80-year-old self?`,
              options: [
                `Random imagination`,
                `They're a REAL person who will live in the body you're caring for right now. Picturing them as real can guide kind daily choices`,
                `It doesn't help`,
                `Just for fun`,
              ],
              correctIndex: 1,
              explanation: `Your 80-year-old self is a real person who exists in the future. They will live in the body you're caring for right now. They will remember the kindnesses you gave yourself across decades. Picturing them as real can guide kind daily choices. They're counting on you, and already grateful.` },

            { id: `l19-q7`, format: `true-false`,
              question: `True or false: You're not "going to start" your wellness life someday — you're ALREADY IN IT.`,
              correctAnswer: true,
              explanation: `True. Today is part of your lifetime. The choices you make today are part of the long unfolding of your life. You don't have to wait to start being kind to your body. Whatever happened before today matters less than what you do from today forward.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about the long view?`,
              options: [
                `Wait until you're older`,
                `You're building decades right now. Tiny daily kindness compounds. Aging is natural. The basics are compound winners. Start today. Stay kind. Your 80-year-old self is counting on you, AND already proud of you`,
                `Don't bother`,
                `Only matters at 50`,
              ],
              correctIndex: 1,
              explanation: `You're building decades right now. Tiny daily kindness compounds. Aging is natural, not failure. The basics are the compound winners. Start today. Stay kind. Your 80-year-old self is counting on you, and already proud of you.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Take a settled breath, {name}. Pick ONE question and answer it slowly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Close your eyes for a moment and picture yourself at 80. What do you hope they can still do? How do you hope they feel in their body?` },
            { id: `r2`, text: `If your 80-year-old self could send you a message today, what do you think it would say? Write what comes.` },
            { id: `r3`, text: `Of all the compound winners (sleep, real food, movement, recovery, connection, outside, purpose), which ONE do you most want to invest in across decades?` },
            { id: `r4`, text: `What's ONE small kindness you can give your body today that your future self will be grateful for?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Research on long-term health is some of the most powerful in modern science. The Harvard Adult Development Study has followed people for over 80 years and produced findings that have transformed how doctors and researchers think about lifelong wellness. The Blue Zones research has identified populations around the world who live the longest, healthiest lives, and the patterns are remarkably consistent: sleep well, eat mostly real food, move regularly, manage stress, stay connected, get outside, have purpose. These aren't surprising. They're the basics you've been learning. The surprise is just how POWERFULLY they compound when done across a lifetime. Terra's note: most adults arrive in their 40s, 50s, or 60s and wish they'd started kind habits earlier. You don't have to be them. Start now. Tiny daily kindness across decades quietly builds the healthy, capable, peaceful elder you'll get to be one day. That elder is real. They're counting on you. They're also already proud, because you're learning these truths at 9 or 10 instead of waiting decades. That's a gift you give them, and yourself.`,
          familyAdventure: `Family Lifetime Conversation. As a family, talk together: what does each person hope their body can still do at 80? Walking? Dancing? Playing with grandkids? Hiking? Cooking? Then share ONE small kindness each family member wants to give their body THIS WEEK to support that long-term hope. Adults model it too. You're building a family that thinks in DECADES, not just days. This kind of long-view thinking is rare and incredibly protective. Many families find that doing this together becomes a tradition they return to year after year, gentle accountability and gentle hope, woven together.`,
          creativePrompt: {
            intro: `Write a letter from your 80-year-old self to your current self — encouraging, grateful, wise.`,
            floor: `Write at least 5 sentences. Imagine your 80-year-old self thanking you and giving advice.`,
            stretch: `Write 8 to 10 sentences. Build a fuller letter with specific gratitudes and gentle guidance.`,
            open: `Write as much as you want. Write a full LETTER FROM YOUR 80-YEAR-OLD SELF to your current self. Imagine they're real (because they will be), looking back across decades of life lived in the body you're caring for now. What are they grateful for? What kindnesses you gave yourself stand out? What hard moments did they get through because of habits you started young? What gentle guidance would they give you about the years ahead? Have them mention specific compound winners (sleep, food, movement, breath, connection, outside, body kindness). Have them be loving, patient, and proud, NOT scolding or fearful. End the letter with their signature, your name with "at 80" or "the elder you" or whatever feels right. Sign back if you want. This letter is yours. Keep it. Return to it across your life.`,
            frames: [
              `Dear [your name], thank you for ___.`,
              `Some kindnesses you gave yourself that I'm grateful for are ___.`,
              `A hard moment I got through because of habits you built was ___.`,
              `What I hope you know about the years ahead is ___.`,
              `One gentle piece of advice from me to you is ___.`,
              `With love, [your name] at 80.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Deep, hopeful work, {name}. You now hold the LONG VIEW. You're building decades right now. Aging is natural, not failure. The basics compound. You're already in your lifetime. Your 80-year-old self is counting on you, AND already proud. Carry this view. Let it guide your daily kindness to yourself. Next, our final lesson together. Everything we've learned woven into a complete wellness identity. Terra's farewell. The capstone. DESIGNING YOUR WELLNESS WAY. Carry your noble pack-heart, and I'll see you there one last time. — Terra.`,
          badge: `lifetime-tender`,
          badgeName: `Lifetime Tender`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L19;
