// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L14 — Trauma and Resilience: What Happens in Our Bodies
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : real trauma science (van der Kolk, polyvagal theory basics)
//            + Lipton/epigenetics deeper + resilience practices.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (trauma response still firing / resilience in
//            action / needs more support — modeling reaching out)
// SENSITIVITY: This is the most sensitive lesson in the subject. Kids in
//            this audience may have lived or be living it. Tone is softer,
//            validating, never scary, repeatedly: NOT YOUR FAULT.
//            Section 4 makes asking for help non-negotiable and brave.
// SCOPE: 4 concepts — what trauma is (inclusive, gentle), trauma lives in
//        the body (van der Kolk + polyvagal), epigenetics deeper (Lipton,
//        intergenerational), resilience + asking for help is brave.
// VOICE: Sage = softer than usual, deeply validating, hopeful, never preachy.
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-14`,
      title: `Trauma and Resilience: What Happens in Our Bodies`,
      duration: 20,
      xpReward: 75,
      badge: `resilient-heart`,
      badgeName: `Resilient Heart`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today's lesson is a little quieter and very important. We're going to talk gently about TRAUMA, what it really is, what it does inside our bodies, and how we HEAL and grow stronger. Almost everyone, at some point, goes through hard things. You may have. Someone you love may have. Today is about understanding all of that with kindness and real science, so it makes sense and so you know there is real hope. Please be especially gentle with yourself in this lesson. Take a slow, soft breath, and let's begin.`,
          headline: `Trauma and Resilience`,
          subtitle: `What hard things do to our bodies, and how we heal and grow`,
          visual: `/ue-assets/iw/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Trauma Really Is`,
          paragraphs: [
            `TRAUMA is what happens INSIDE us when something hard overwhelms our nervous system, faster than we can handle it. People often think trauma only means huge events like accidents, loss of someone we love, or being hurt. Those count, absolutely. But trauma can also come from ongoing things, like being bullied, feeling unsafe at home, losing connection with someone important, or living through long stress. There's no contest about which kind "counts." If something overwhelmed your nervous system, it's real, and it deserves care.`,
            `Here's the most important thing to understand: a trauma response is your nervous system trying to PROTECT you. When something hard happens, your body activates ancient survival systems (remember the amygdala from L01?) to keep you safe. That's not weakness, that's a wise body doing its job. Sometimes, after the danger passes, the nervous system stays "switched on," still in protect-mode even when there's no current threat. That's the part that needs gentle help. None of this is your fault. None of this means something is wrong with you. It means your body is human, and it cares so much about keeping you alive that it remembers.`,
          ],
          image: `/ue-assets/iw/l14-s1-what-is.webp`,
          imageCaption: `Trauma is what happens INSIDE us when something overwhelms the nervous system. Not weakness.`,
          vocab: [
            {
              word: `trauma`,
              definition: `What happens inside us when something hard overwhelms our nervous system, faster than we can handle. Can come from big events (accidents, loss, being hurt) or ongoing stress (bullying, unsafety). It's not weakness, it's the body trying to protect us.`,
              audioPrompt: `Trauma is what happens inside us when something hard overwhelms our nervous system, {name}. Faster than we can handle. People often think trauma only means huge events like accidents or loss. Those count. But trauma can also come from ongoing things, like being bullied, feeling unsafe, or living through long stress. There's no contest about which kind counts. If something overwhelmed your nervous system, it's real and deserves care. A trauma response is your nervous system trying to protect you. That's not weakness. It's a wise body doing its job.`,
            },
            {
              word: `nervous system`,
              definition: `The vast communication network that runs your body and monitors for safety or danger. Includes your brain, spinal cord, and nerves throughout your body. The part of you most affected by trauma — and most capable of healing with the right support.`,
              audioPrompt: `Your nervous system is the vast communication network that runs your body and monitors for safety or danger, {name}. It includes your brain, spinal cord, and nerves that reach every part of you. The nervous system is the part of you most affected by trauma. When something hard happens, it activates ancient survival responses to keep you safe. When something overwhelming happens, it can get stuck in protect-mode even after the danger is gone. Understanding your nervous system is the foundation of understanding trauma, stress, and healing.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Trauma Lives in the Body`,
          paragraphs: [
            `A psychiatrist named Dr. BESSEL VAN DER KOLK wrote a famous book called "The Body Keeps the Score," and the title tells the truth in five words. After hard experiences, the MIND often tries to move on (forget, push it away, "be fine"), but the BODY remembers. The nervous system can stay in survival mode long after the danger is gone. This is why "just thinking your way out of it" usually doesn't work. Trauma isn't only a thought, it's a pattern stored in the body and the nervous system.`,
            `Your nervous system has three main protect-modes. FIGHT (your body gets activated, hot, angry, ready to push back). FLIGHT (your body wants to escape, run, hide, avoid). FREEZE (your body goes still, numb, quiet, far away). All three are wise responses to overwhelming things, your body picks whichever might keep you safe. The trouble is when the nervous system gets "stuck" in one of these even when you're safe now. Stuck-fight can look like big anger and reactivity. Stuck-flight can look like constant anxiety and busyness. Stuck-freeze can look like feeling numb, far away, or like you can't move. Recognizing these is the first step in becoming free of them. None of these are character flaws. They are nervous system patterns, and patterns can be changed (remember neuroplasticity?).`,
          ],
          image: `/ue-assets/iw/l14-s2-body.webp`,
          imageCaption: `The body keeps the score. Fight, flight, freeze: protective patterns that can get stuck.`,
          vocab: [
            {
              word: `fight-flight-freeze`,
              definition: `The three main protective responses your nervous system makes to overwhelming things. Fight (push back), flight (escape), freeze (go still). All three are wise survival responses. Trouble happens only when the system stays stuck in one after the danger is gone.`,
              audioPrompt: `Fight, flight, and freeze are the three main protect-modes of your nervous system, {name}. Fight is when your body gets hot and ready to push back. Flight is when your body wants to escape or avoid. Freeze is when your body goes still, numb, far away. All three are wise responses to overwhelming things. The trouble is when the system gets stuck in one even when you're safe now. Stuck-fight looks like constant reactivity. Stuck-flight looks like anxiety. Stuck-freeze looks like numbness or feeling far away.`,
            },
            {
              word: `Dr. Bessel van der Kolk`,
              definition: `A psychiatrist and researcher whose famous book "The Body Keeps the Score" showed that trauma lives in the body and nervous system, not just the mind. His key insight: healing has to reach the body, not just the thinking mind. His work changed how therapists treat trauma worldwide.`,
              audioPrompt: `Dr. Bessel van der Kolk is a psychiatrist and researcher who spent decades studying how trauma affects the body and nervous system, {name}. His famous book, The Body Keeps the Score, changed how therapists, doctors, and teachers understand and treat trauma. His key discovery: the mind often tries to move on after hard things, but the body remembers. Healing has to reach the body, not just the mind. His work helped establish body-based trauma therapies that help nervous systems heal safely and gently.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Stress Reaches Your Cells (Epigenetics, Again)`,
          paragraphs: [
            `Remember EPIGENETICS from our Dispenza lesson? Dr. Bruce Lipton and many other scientists have shown that signals from our environment, our experiences, and our emotional states reach all the way down to our cells, switching certain genes ON or OFF. Trauma is one of the most powerful of these signals. CHRONIC stress (long-lasting feelings of unsafety, fear, or overwhelm) sends signals that switch on genes linked to inflammation, immune trouble, and stuck patterns. Calm, safety, and connection do the opposite, they switch on genes linked to healing, balance, and growth. Trauma isn't just "in your head." It's in the cells. And gentle healing reaches the cells too.`,
            `Here's an extra layer that science is still understanding: studies suggest that some effects of trauma can be passed down through the generations, through epigenetic changes. Children of people who lived through hard things sometimes carry biological echoes of those experiences. This is NOT a curse or a destiny, it's just biology being honest. The wonderful flip side is just as true: the SAME mechanism means HEALING can also be passed forward. When someone works gently to heal their trauma, that healing affects how they show up for their family, the signals they send to their kids' nervous systems, and yes, even potentially their own epigenetic patterns. Healing is generational, in both directions. That's a real, hopeful insight from cutting-edge science.`,
          ],
          image: `/ue-assets/iw/l14-s3-cells.webp`,
          imageCaption: `Stress switches genes on. Calm switches different ones. Healing reaches the cells too.`,
          vocab: [
            {
              word: `chronic stress`,
              definition: `Long-lasting feelings of unsafety, fear, or overwhelm that keep the nervous system activated over time. Chronic stress sends signals that switch on genes linked to inflammation and trouble. Calm and safety do the opposite.`,
              audioPrompt: `Chronic stress is long-lasting feelings of unsafety, fear, or overwhelm that keep the nervous system on alert over time, {name}. Through epigenetics, these signals reach all the way down to your cells, switching certain genes on or off. Chronic stress switches on genes linked to inflammation and stuck patterns. Calm, safety, and connection switch on genes linked to healing and growth. Trauma isn't just in your head. It's in the cells. And gentle healing reaches the cells too.`,
            },
            {
              word: `intergenerational healing`,
              definition: `The hopeful truth that healing passes forward through generations, just as trauma can. When someone works gently to heal their own trauma, it changes how they show up for their family and the signals they send to their children's nervous systems. Healing is generational in both directions.`,
              audioPrompt: `Intergenerational healing is the hopeful flip side of intergenerational trauma, {name}. Science is discovering that some effects of trauma can pass through generations via epigenetics. Children of people who lived through hard things sometimes carry biological echoes. But healing also passes forward. When someone works gently to heal their trauma, it changes how they show up for their family and the signals they send to their children's nervous systems. Healing is generational in both directions. The work you do for yourself matters beyond you.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Resilience and Asking for Help (Both Brave)`,
          paragraphs: [
            `Here is the hopeful heart of this lesson. RESILIENCE doesn't mean being unbreakable, never feeling hurt, or "getting over" things quickly. Real resilience is the ability to REPAIR and GROW after hard things, with kindness toward yourself. Trauma can absolutely heal. Nervous systems can settle. Stuck patterns can soften. People who have been through enormous hardship can build deeply meaningful lives. The brain and body have remarkable powers to heal, especially when we support them gently. Things that help: safe relationships, breath and body practices (since trauma lives in the body, healing has to reach the body, not just the mind), meditation, mindful movement, time in nature, creative expression, and the inner-world skills you've been building all subject.`,
            `Now the most important paragraph in this whole lesson. Some things are TOO BIG for a kid (or anyone) to handle alone. Big trauma needs MORE than self-practice. It needs trusted adults, sometimes a therapist or counselor who is trained to help nervous systems heal safely. Asking for that help is one of the BRAVEST and WISEST things a person can do. It is never weak. It is the same courage as setting a broken bone or seeing a doctor when sick. Your nervous system deserves the right kind of care. If something hard is living inside you, or if you don't feel safe, please tell a trusted adult, a parent, teacher, school counselor, family friend. If you don't know who to ask, ask any adult you do trust. Sage's gentle promise: there is real, science-backed help in this world for what hurts. You are not alone. You are not broken. And asking for help is part of the practice.`,
          ],
          image: `/ue-assets/iw/l14-s4-resilience.webp`,
          imageCaption: `Resilience = repair and grow, with kindness. Asking for help is one of the bravest things.`,
          vocab: [
            {
              word: `resilience`,
              definition: `The ability to repair, heal, and grow after hard things, with kindness toward yourself. Not being unbreakable. The brain and body have remarkable powers to heal, especially with safe relationships, practices, and the right support.`,
              audioPrompt: `Resilience is the ability to repair, heal, and grow after hard things, {name}. With kindness toward yourself. It doesn't mean being unbreakable or getting over things quickly. Real resilience is repair and growth. Trauma can absolutely heal. Nervous systems can settle. Stuck patterns can soften. People who have been through enormous hardship can build deeply meaningful lives. Things that help include safe relationships, breath and body practices, meditation, and time in nature. And asking for help when something is too big is part of resilience too.`,
            },
            {
              word: `trusted adult`,
              definition: `A grown-up you feel safe with and can tell hard things to. A parent, grandparent, teacher, school counselor, or family friend. When something is too big to handle alone, telling a trusted adult is one of the bravest things you can do. Therapists and counselors are trained to help nervous systems heal safely.`,
              audioPrompt: `A trusted adult is a grown-up you feel safe with and can tell hard things to, {name}. A parent or guardian. A grandparent. A teacher. A school counselor. A family friend. When something is too big to handle alone, telling a trusted adult is one of the bravest and wisest things you can do. It is never weak. Therapists and counselors are trained to help nervous systems heal safely. If you don't know who to ask, tell any adult you do trust. You are not alone. There is help.`,
            },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Let's investigate gently, {name}. Here are four moments from kids' lives. With kindness, classify what's happening: TRAUMA RESPONSE STILL FIRING (nervous system stuck in protect-mode even when there's no current danger), RESILIENCE IN ACTION (regulating, repairing, growing with support), or NEEDS MORE SUPPORT (a situation where the kid should reach out to a trusted adult or professional)?\n\nOne is the most important of the four.`,
          options: [
            { id: `response`,   label: `Trauma Response Firing`, color: `#F87171`, description: `Nervous system stuck in fight, flight, or freeze even when there's no current danger.` },
            { id: `resilience`, label: `Resilience in Action`,    color: `#34D399`, description: `Gently regulating, repairing, growing, using practices and support.` },
            { id: `support`,    label: `Needs More Support`,      color: `#FBBF24`, description: `A situation that is too big to handle alone — reach out to a trusted adult or professional.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Moment #1`,
              clues: [
                { text: `A kid hears a loud noise that isn't actually dangerous, like a slammed door.` },
                { text: `Their heart pounds, they freeze in place, and they feel a wave of fear far bigger than the situation calls for.` },
                { text: `It takes them several minutes to calm down. They've reacted this way ever since a scary moment last year.` },
              ],
              correctAnswer: `response`,
              realWorldExample: `Body reacting strongly to small triggers is the nervous system still firing.`,
              explanation: `The body is reacting in full protect-mode to something that's not actually dangerous now. The nervous system learned to be on guard during a hard moment and is still stuck there. Pure trauma response firing. This isn't a flaw, it's the body trying to protect them. Gentle practices and (if it keeps happening) help from a trusted adult can settle the nervous system over time.`,
            },
            {
              id: `case-2`,
              caseTitle: `Moment #2`,
              clues: [
                { text: `A kid went through a really hard year. Now, slowly, they're using practices that help: meditation, breath, time with safe people, art, nature walks.` },
                { text: `Some days are still hard, but more and more days feel calmer and more like themselves.` },
                { text: `They're talking gently to themselves about what happened and feeling things slowly heal.` },
              ],
              correctAnswer: `resilience`,
              realWorldExample: `Slow, gentle, supported healing is resilience.`,
              explanation: `The kid is doing real, science-backed healing work. Breath, body, safe relationships, gentle practices, time. Pure resilience in action. Notice that resilience didn't mean "got over it instantly." It meant repairing and growing, day by day, with kindness. That's the real picture.`,
            },
            {
              id: `case-3`,
              caseTitle: `Moment #3`,
              clues: [
                { text: `A kid finishes a tough school project and feels frustrated. They take a few slow breaths and use the calming practice they've learned.` },
                { text: `Within a few minutes, they feel steady again and can move on with their afternoon.` },
                { text: `This is just normal life stress, nothing overwhelming, and they handled it with their skills.` },
              ],
              correctAnswer: `resilience`,
              realWorldExample: `Daily skills handling everyday stress is resilience too.`,
              explanation: `Not every hard moment is trauma! This is normal life stress, and the kid used their practiced skills to handle it well. Pure resilience in action (the everyday version). Practiced inner-world skills make a kid more resilient in small AND big moments. This is the practice paying off in real life.`,
            },
            {
              id: `case-4`,
              caseTitle: `Moment #4 — The Most Important One`,
              clues: [
                { text: `A kid is going through something really hard. They feel unsafe at home, or someone is hurting them, or they feel hopeless a lot of the time.` },
                { text: `They've tried using their inner-world practices on their own, but the hard thing is bigger than they can handle alone.` },
                { text: `They aren't sure what to do.` },
              ],
              correctAnswer: `support`,
              realWorldExample: `Some things are bigger than a kid alone — that's what trusted adults and professionals are for.`,
              explanation: `This, {name}, is the most important moment in this whole lesson. When something is too big to handle alone, when a kid feels unsafe, or hurt, or hopeless, that is exactly the time to reach out to a trusted adult. A parent. A grandparent. A teacher. A school counselor. A family friend. If the first person doesn't help, try another. Therapists and counselors are trained to help nervous systems heal safely. Asking for help is not weak. It is one of the bravest, wisest things a person can ever do, just as brave as setting a broken bone or going to a doctor when sick. Your nervous system deserves the right kind of care. If anything in this lesson feels like your life, please tell a trusted adult. You are not alone. You are not broken. And there is real help.`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}. Take your time.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is TRAUMA, really?`,
              options: [
                `Only huge events like accidents`,
                `What happens INSIDE us when something hard overwhelms our nervous system — can be big events OR ongoing stress`,
                `A character weakness`,
                `Only for grown-ups`,
              ],
              correctIndex: 1,
              explanation: `Trauma is what happens INSIDE us when something hard overwhelms our nervous system. It can come from big events (accidents, loss) or ongoing things (bullying, unsafety, long stress). There's no contest about which counts. If it overwhelmed you, it's real and deserves care.` },

            { id: `l14-q2`, format: `true-false`,
              question: `True or false: A trauma response means something is wrong with you or that you're weak.`,
              correctAnswer: false,
              explanation: `False. A trauma response is your nervous system trying to PROTECT you. Your body activates wise survival systems when something hard happens. That's not weakness, it's a wise body doing its job. None of it is your fault.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `Who is Dr. BESSEL VAN DER KOLK, and what did he show?`,
              options: [
                `A poet`,
                `A psychiatrist whose famous book "The Body Keeps the Score" shows that trauma lives in the body and nervous system, not just the mind`,
                `An inventor of medicine`,
                `Not a real doctor`,
              ],
              correctIndex: 1,
              explanation: `Dr. Bessel van der Kolk is a famous psychiatrist whose book "The Body Keeps the Score" showed that trauma lives in the body and nervous system, not just the mind. That's why "just thinking your way out" usually doesn't work, healing has to reach the body too.` },

            { id: `l14-q4`, format: `multiple-choice`,
              question: `What are the THREE main protect-modes of the nervous system?`,
              options: [
                `Happy, sad, neutral`,
                `Fight (push back), flight (escape), freeze (go still and numb)`,
                `Eat, sleep, run`,
                `Loud, quiet, asleep`,
              ],
              correctIndex: 1,
              explanation: `Fight, flight, and freeze are the three main protect-modes. Fight (push back, anger), flight (escape, anxiety), freeze (go still, numb). All three are wise survival responses. The trouble is only when the system gets STUCK in one even when you're safe.` },

            { id: `l14-q5`, format: `multiple-choice`,
              question: `How does CHRONIC STRESS reach your cells, according to epigenetics?`,
              options: [
                `It doesn't reach cells`,
                `It sends signals that switch on genes linked to inflammation and trouble — and calm switches on different genes linked to healing`,
                `Cells are unaffected by stress`,
                `Only food affects cells`,
              ],
              correctIndex: 1,
              explanation: `Chronic stress sends signals that reach all the way down to your cells, switching on genes linked to inflammation, immune trouble, and stuck patterns. Calm, safety, and connection do the opposite. Trauma isn't just "in your head," it's in the cells. And healing reaches the cells too.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `What does science suggest about trauma and healing across GENERATIONS?`,
              options: [
                `Nothing crosses generations`,
                `Some effects of trauma may pass through epigenetics — and the same mechanism means HEALING is also passed forward`,
                `Only bad things pass down`,
                `Generations don't matter`,
              ],
              correctIndex: 1,
              explanation: `Some effects of trauma may pass through epigenetics across generations. But the same mechanism means HEALING is also passed forward: when someone heals, it affects their family and the signals their kids' nervous systems receive. Healing is generational, in both directions.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `What is RESILIENCE, really?`,
              options: [
                `Being unbreakable and never hurt`,
                `The ability to REPAIR and GROW after hard things, with kindness toward yourself`,
                `"Getting over" things instantly`,
                `Pretending you're fine`,
              ],
              correctIndex: 1,
              explanation: `Resilience is the ability to repair and grow after hard things, with kindness toward yourself. NOT being unbreakable, never hurt, or "getting over" things quickly. The brain and body have remarkable powers to heal, especially with safe relationships and support.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What does Sage say about ASKING FOR HELP when something is too big?`,
              options: [
                `It's weak — handle everything alone`,
                `It's one of the BRAVEST and WISEST things a person can do — never weak, just as brave as setting a broken bone`,
                `Only adults can ask`,
                `Help isn't available`,
              ],
              correctIndex: 1,
              explanation: `Asking for help is one of the bravest, wisest things a person can do. It's never weak, it's the same courage as setting a broken bone or seeing a doctor. If something hard is too big to handle alone, tell a trusted adult: parent, teacher, counselor, or family friend. You are not alone, and there is real help.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Take a slow, very kind breath, {name}. Pick ONE question and answer it gently, just for you, only if you'd like to. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What did you learn today that you wish more people understood about trauma and the body?` },
            { id: `r2`, text: `If you (or someone you love) is going through something hard, what's ONE small kind thing you could do for them, or for yourself, today?` },
            { id: `r3`, text: `Asking for help is brave, not weak. Who is one trusted adult you could turn to if something ever felt too big to handle alone?` },
            { id: `r4`, text: `Healing passes forward through generations too. How does it feel to know that gentle work you do for yourself helps your future family too?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Understanding trauma and resilience is some of the most important and hopeful knowledge available today. The science of how trauma affects the nervous system, body, and cells (and how to heal) has changed how therapists, doctors, teachers, and parents help people. Real healing is possible, real practices work, and no one needs to suffer in silence. Sage's note: if anything in this lesson connects to your life, please remember three things. First, none of it is your fault. Second, you are not alone, this is incredibly common and there are many people who understand. Third, real help exists, and asking for it is one of the bravest, wisest things you can do. Trusted adults, school counselors, therapists, and family friends are there exactly for this. You deserve every bit of the gentle care available. Always.`,
          familyAdventure: `Family Resilience Conversation. As a family, talk gently (only as deeply as feels right) about what helps each of you when things are hard. What practices, people, or places help you feel safe and reset? Make a "resilience kit" together, a list each person keeps of: a few trusted people they can talk to, a few body practices that help (breath, walking, stretching), a few comfort things (favorite music, a soft blanket, time outside). The kit isn't for "weakness," it's for being human. And make sure each kid knows clearly: "if anything is ever too big, you can always tell us, and we will always listen and help you find help if you need it."`,
          creativePrompt: {
            intro: `Write gently about resilience: what it looks like, what helps, and the truth that asking for help is brave.`,
            floor: `Write at least 5 sentences. Describe what real resilience means to you, what helps you (or could help) bounce back, and one person you'd turn to if needed.`,
            stretch: `Write 8 to 10 sentences. Explore what you learned about trauma in the body, what practices help heal, and the bravery of asking for help.`,
            open: `Write as much as you want. Write a gentle, honest piece about resilience and healing. Reflect on what you learned today about how trauma lives in the body, the science of how stress reaches our cells, what real resilience means (repair and grow, not unbreakable), what practices help (breath, body, safe people, time, meditation), and the brave wisdom of asking for help when something is too big. End with a note of kindness to yourself, or to anyone else who's been through hard things. Honor the truth: you are not alone, you are not broken, and there is real help in this world. Write with the gentleness you'd offer a friend.`,
            frames: [
              `One thing I learned today that I want to remember is ___.`,
              `When something feels hard, the things that help me are ___.`,
              `If something were ever too big for me alone, the trusted people I could turn to are ___.`,
              `What real resilience looks like is ___.`,
              `To anyone who has been through hard things, I'd say ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Beautifully done, {name}. You've sat gently with one of the most important topics in the whole subject. You now understand what trauma really is, how it lives in the body (not just the mind), the science of how stress reaches our cells, what real resilience looks like, and the truth that asking for help is one of the bravest things a person can do. Please carry this with kindness, for yourself and for anyone you love. Next, we explore one of the most remarkable systems in your brain, the one that filters what you NOTICE in the world. THE RETICULAR ACTIVATING SYSTEM. Be gentle with yourself, and I'll see you there. — Sage.`,
          badge: `resilient-heart`,
          badgeName: `Resilient Heart`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L14 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
