// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L10 — Your Growing Body
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : the growth and change years (ages 9–14), body timing variability,
//            emotional shifts from hormones, wellness practices during growth,
//            trusted adults as support. Warm, normalizing, anti-shame.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 things to know about the growth and change years)
// SCOPE: physical changes are normal, timing varies hugely, feelings get bigger,
//        wellness matters more now, trusted adults are essential
// VOICE: Terra = warm, grounded, matter-of-fact, pack-protective, no shame
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-10`,
      title: `Your Growing Body`,
      duration: 18,
      xpReward: 75,
      badge: `body-grown`,
      badgeName: `Body Wisdom Keeper`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we talk about something real, something every kid your age is experiencing or will soon. Your body is entering what I call the GROWTH AND CHANGE YEARS. Roughly ages 9 to 14. One of the biggest biological projects your body will ever take on. A lot of kids feel confused, weird, or behind during this time, because no one explained what's actually happening. Today, we fix that. No mystery, no shame, just real information from someone in your pack who wants you to understand and feel less alone in it. Everything that's happening is normal. Let's go.`,
          headline: `Your Growing Body`,
          subtitle: `What's actually happening during the growth and change years — and why it's all normal.`,
          visual: `/ue-assets/lw/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's Happening Is Normal`,
          paragraphs: [
            `Between about ages 9 and 14, your body begins one of the most significant transitions of your entire life. This is what scientists call PUBERTY, but Terra prefers the simpler name: the GROWTH AND CHANGE YEARS. During this period, your body is slowly transitioning from a child body to a young adult body, a process that unfolds over several years, not days or months. Every human who has ever lived went through this. Every parent, every teacher, every adult you've ever met went through it. It's completely normal, completely necessary, and designed into your biology from the start.`,
            `So what actually happens? You might grow taller, sometimes in fast spurts, sometimes slowly. Your appetite might shift significantly, sometimes you need a lot more food than usual. Your sleep needs may change. You might find yourself feeling emotions more intensely than before. Your skin and hair might start to change. Your body shape gradually shifts. These changes happen at different rates for different kids and in different areas for different people. There is no right order, no right pace, and no right age for any of it. Everything that happens during the growth and change years is your body doing exactly what it was always going to do. It's not a problem. It's a project, and you're right on time.`,
          ],
          image: `/ue-assets/lw/l10-s1-normal.webp`,
          imageCaption: `Every human goes through the growth and change years. You're right on time.`,
          vocab: [
            { word: `growth and change years`,
              definition: `The period roughly between ages 9 and 14 when the body transitions from a child body toward a young adult body. Driven by hormones. Includes physical changes, appetite shifts, sleep changes, and bigger emotions. Happens at different rates for every person — all completely normal.`,
              audioPrompt: `The growth and change years are the roughly ages 9 to 14 period when your body does one of the biggest growth and transition jobs of your whole life, {name}. Your body is preparing to slowly transition from a child body to a young adult body. During this time, lots of changes happen. You might grow taller, sometimes fast, sometimes slow. Your appetite might change. Your sleep needs might shift. You might feel emotions more intensely. Your skin and hair might start changing too. All completely normal.` },
            { word: `appetite changes`,
              definition: `Normal shifts in how much food your body needs during the growth and change years. During active growth spurts, your body often needs significantly more food. During slower periods, appetite returns to normal. These shifts are healthy signals — honoring them supports healthy growth.`,
              audioPrompt: `Appetite changes during the growth and change years are completely normal and expected, {name}. During active growth spurts, your body needs significantly more food than usual. You might feel much hungrier than you expect. This is healthy and important to honor. During slower periods, appetite may return to normal. This is your body's brilliant self-regulation, eating more when building and growing, eating normally when coasting. Trust your hunger signals (L09) even more during these years, your body knows exactly what it needs.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Every Body Has Its Own Timing`,
          paragraphs: [
            `One of the most confusing parts of the growth and change years is looking around and noticing that everyone seems to be changing at DIFFERENT RATES. Some kids in your class look much older. Some look much younger. Some changed a lot over summer. Some haven't changed at all yet. This can feel like something is wrong with you if you're early, or like you're behind if you're late. Here's the truth: the RANGE of normal timing is enormous. Some kids start their growth and change years as early as 8 or 9. Others don't start until 13 or 14. Both are completely normal. Your body has its own schedule, and that schedule is correct for you.`,
            `Medical research confirms this huge range. Bodies vary significantly in when they start changing, how fast they change, and in what areas first. The kid who looks older isn't ahead. The kid who looks younger isn't behind. There is no race, no finish line, and no prize for early or late. Every body in that range is on its own perfect schedule. Comparing your timing to someone else's is like comparing how fast two different plants flower, and it's just as unhelpful. Your body is doing its job. Watching it unfold, rather than measuring it against others, is the wiser path. Trust your body. It knows what it's doing.`,
          ],
          image: `/ue-assets/lw/l10-s2-timing.webp`,
          imageCaption: `The range of normal timing is huge. Every body in that range is on its own perfect schedule.`,
          vocab: [
            { word: `body timing`,
              definition: `The unique schedule each body follows during the growth and change years. Some kids start changing as early as 8-9. Some start as late as 13-14. Both are completely normal. The range of normal timing is huge — comparing body timing to peers' is painful and unhelpful.`,
              audioPrompt: `Body timing is the unique schedule each body follows during the growth and change years, {name}. Some kids start changing earlier, as early as 8 or 9. Some kids start later, as late as 13 or 14. Both are completely normal. Some grow in spurts, some steadily. There is no right age or right way. The range is huge, and every body in that range is on its own perfect schedule. Comparing body timing with peers is painful and unhelpful. Trust your body. It knows what it's doing.` },
            { word: `comparison trap`,
              definition: `When you measure your body's changes against other kids' bodies and feel worse because of the difference. Painful and unhelpful because the normal range during growth years is so huge. The kid who looks older isn't ahead. The kid who looks younger isn't behind. Every body is on its own perfect schedule.`,
              audioPrompt: `The comparison trap is when you measure your body's changes against other kids' bodies, and feel worse because of the difference, {name}. During growth and change years, bodies vary enormously. Some kids are changing a lot, some a little. Some look much older, some much younger. Comparing is painful because the range is so huge. The kid who looks older isn't ahead. The kid who looks younger isn't behind. Every body is on its own perfect schedule. The comparison trap is optional. Step out of it.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Bigger Feelings Are Normal`,
          paragraphs: [
            `One thing almost every kid notices during the growth and change years is that FEELINGS get bigger. Moodiness, irritability, sudden weepiness, anxiety, feeling things more intensely than before. You might snap at someone and not quite know why. You might feel intensely happy one hour and intensely sad the next. You might feel overwhelmed by things that never bothered you before. Here's what's important to know: this isn't a character flaw. It's not that you're "too sensitive" or "dramatic" or "difficult." The shift in emotional intensity during the growth and change years is BIOLOGICAL. It's caused by real chemical changes happening in your body.`,
            `During the growth and change years, the body's HORMONE levels begin to shift. Hormones are chemical messengers that regulate growth, mood, energy, and development. When hormone levels change, emotional experience changes too. The emotional intensity many kids feel during this period is real, it's caused by something real, and it's completely normal. The wellness practices you've been building in this course (sleep, water and breath, stress cycle completion, nervous system care) matter MORE during these years than ever before. They help your nervous system handle the hormone shifts with more stability and less overwhelm. And trusted adults, your pack, are essential too.`,
          ],
          image: `/ue-assets/lw/l10-s3-feelings.webp`,
          imageCaption: `Bigger feelings during growth years are real and biological, not dramatic. Wellness practices help.`,
          vocab: [
            { word: `growth-year feelings`,
              definition: `The bigger emotions that often come along with the physical changes of the growth and change years. Moodiness, irritability, weepiness, anxiety, intensity. Real and biologically caused by hormone shifts — not character flaws or drama. Wellness practices (sleep, movement, breath, connection) help significantly.`,
              audioPrompt: `Growth-year feelings are the bigger emotions that often come along with the physical changes of growth years, {name}. Moodiness, irritability, weepiness, anxiety, feeling things way more intensely than before. These are real, caused by hormone changes in your body, not in your head. Lots of kids think something is wrong with me. Nothing is wrong with you. Your body is recalibrating and your emotional system is adjusting too. Wellness practices help, sleep, movement, slow breath, nervous system care, stress recovery. Trusted adults are essential too.` },
            { word: `hormones`,
              definition: `Chemical messengers in the body that regulate growth, mood, energy, and physical development. During the growth and change years, hormone levels begin to shift — driving physical changes and contributing to bigger emotional experiences. Understanding this helps kids be kind to themselves when feelings feel intense.`,
              audioPrompt: `Hormones are chemical messengers in your body that regulate many things, including growth, mood, energy, and physical development, {name}. During the growth and change years, hormone levels begin to shift. This is what drives the physical changes in your body. It's also what can cause bigger feelings during these years, moodiness, irritability, weepiness, anxiety. These aren't 'in your head' or dramatic. They're real chemical changes happening in your body. Understanding this helps you be kind to yourself when feelings feel bigger than expected.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Pack Is There — Trusted Adults Are Essential`,
          paragraphs: [
            `Here is one of the most practical pieces of wisdom Terra can give you about the growth and change years: DON'T GO THROUGH THEM ALONE. Every generation of humans who has ever lived went through this. None of them figured it out perfectly alone, and the ones who had good guidance and trusted people around them had a significantly easier time. The growth and change years are designed to be navigated with a PACK, with caring adults who have been there themselves and can help you make sense of what's happening.`,
            `A TRUSTED ADULT is a caring adult in your life you can go to with questions, worries, or hard feelings about your changing body and life. A parent, a family member, a school counselor, a doctor, a teacher, or a coach you respect. You don't need to figure out which changes are normal, which feelings make sense, or which questions to ask on your own. Trusted adults handle these questions regularly. Doctors handle body questions for a living. School counselors are trained for exactly these conversations. There are no embarrassing questions, only honest ones. If anything is happening that worries you, confuses you, or feels weird, talking to a trusted adult is one of the smartest and strongest things you can do. That's how packs work.`,
          ],
          image: `/ue-assets/lw/l10-s4-adults.webp`,
          imageCaption: `Trusted adults are your pack during the growth years. Asking for help is wisdom, not weakness.`,
          vocab: [
            { word: `trusted adult`,
              definition: `A caring adult in your life you can go to with questions, worries, or hard feelings about your changing body and life. A parent, family member, school counselor, doctor, teacher, or coach. Going through growth years with trusted adults is much easier than alone. There are no embarrassing questions, only honest ones.`,
              audioPrompt: `A trusted adult is a caring adult in your life you can go to with questions, worries, or hard feelings about your changing body and life, {name}. A parent, family member, school counselor, doctor, teacher, or coach you respect. Going through these years with trusted adults is so much easier than alone. Identify your trusted adults now. There are no embarrassing questions, only honest ones. If anything is happening that worries, confuses, or feels weird, talk to a trusted adult. They went through it too.` },
            { word: `asking for help`,
              definition: `A sign of wisdom and pack intelligence, not weakness. Every generation of humans has gone through the growth and change years. None figured it out perfectly alone. Trusted adults — parents, counselors, doctors — are there specifically to help. When something feels weird, confusing, or worrying, asking is always the right move.`,
              audioPrompt: `Asking for help during the growth and change years is a sign of wisdom, not weakness, {name}. Every generation of humans goes through this. None of them figured it out perfectly alone. The ones who had good guidance had a much easier time. Trusted adults have been through it. Doctors handle body questions for a living. School counselors are trained for exactly this. There are no embarrassing questions, only honest ones. When something feels weird, confusing, or worrying, ask someone. That's how packs work. No one navigates alone.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Here are five things every kid needs to know about the growth and change years, scrambled. Use the arrows to arrange them in the order Terra shared them — from the most foundational truth to the most practical step. This is your roadmap.`,
          items: [
            { id: `step-normal`,     label: `WHAT'S HAPPENING IS NORMAL. Your body is doing one of its biggest biological projects. Every human goes through this. You're right on time`,        position: 1 },
            { id: `step-timing`,     label: `EVERY BODY HAS ITS OWN TIMING. The normal range is huge (ages 8 to 14). No one is ahead or behind. Comparing is painful and unhelpful`,         position: 2 },
            { id: `step-feelings`,   label: `BIGGER FEELINGS ARE NORMAL. Moodiness, intensity, weepiness, and anxiety during growth years are biological, not character flaws`,              position: 3 },
            { id: `step-wellness`,   label: `WELLNESS PRACTICES MATTER MORE NOW. Sleep, movement, breath, stress recovery, and good nutrition support your body through the changes`,         position: 4 },
            { id: `step-pack`,       label: `TRUSTED ADULTS ARE YOUR PACK. Ask questions. Share worries. There are no embarrassing questions. You don't have to navigate this alone`,        position: 5 },
          ],
          completionMessage: `Well done, {name}. That's the real roadmap for the growth and change years. What's happening is normal. Every body has its own timing. Bigger feelings are biological, not wrong. Wellness practices matter more now than ever. And trusted adults are your pack. You have what you need. These years are a big project — and you're not doing them alone.`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what landed, {name}.`,
          questions: [
            { id: `l10-q1`, format: `true-false`,
              question: `True or false: If a kid starts the growth and change years at age 13 or 14, something is wrong with them.`,
              correctAnswer: false,
              explanation: `False. The range of normal timing is enormous — some kids start as early as 8 or 9, others as late as 13 or 14. Both are completely normal. There is no right age. Every body is on its own perfect schedule.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `What are the "growth and change years"?`,
              options: [
                `A type of school class`,
                `The roughly ages 9 to 14 period when the body transitions from a child body to a young adult body, driven by hormone shifts`,
                `Only for girls`,
                `Something adults made up`,
              ],
              correctIndex: 1,
              explanation: `The growth and change years are the roughly ages 9 to 14 period when the body transitions from a child body to a young adult body. Driven by hormones. Includes physical changes, appetite shifts, sleep changes, and bigger emotions. Every human goes through it.` },

            { id: `l10-q3`, format: `multiple-choice`,
              question: `Why do feelings get BIGGER during the growth and change years?`,
              options: [
                `Kids are being dramatic`,
                `Hormone levels begin to shift during these years, causing real chemical changes that affect mood and emotional intensity`,
                `They just decide to feel more`,
                `Screen time`,
              ],
              correctIndex: 1,
              explanation: `Bigger feelings during growth years are caused by real hormone shifts happening in the body. This is biology, not character. The moodiness, irritability, weepiness, and intensity are real and biologically caused. Wellness practices help the nervous system handle these shifts.` },

            { id: `l10-q4`, format: `true-false`,
              question: `True or false: The kid who looks older than their classmates is ahead in development.`,
              correctAnswer: false,
              explanation: `False. There is no ahead or behind — just different timing schedules, all within the normal range. The normal range is enormous. The kid who looks older isn't ahead. The kid who looks younger isn't behind. Every body is on its own perfect schedule.` },

            { id: `l10-q5`, format: `multiple-choice`,
              question: `What is a TRUSTED ADULT?`,
              options: [
                `Only parents`,
                `A caring adult you can go to with questions, worries, or hard feelings — a parent, family member, counselor, doctor, teacher, or coach`,
                `Any adult`,
                `A stranger`,
              ],
              correctIndex: 1,
              explanation: `A trusted adult is a caring adult you can go to with questions, worries, or hard feelings about your changing body and life. Can be a parent, family member, school counselor, doctor, teacher, or coach. Going through the growth years with trusted adults is much easier than alone.` },

            { id: `l10-q6`, format: `multiple-choice`,
              question: `Why do WELLNESS PRACTICES matter MORE during the growth and change years?`,
              options: [
                `They don't`,
                `The body is going through major changes AND hormone shifts affect the nervous system — sleep, movement, breath, and stress recovery help your body handle the changes with more stability`,
                `Just for exercise`,
                `Because adults said so`,
              ],
              correctIndex: 1,
              explanation: `During the growth and change years, the body is managing major physical changes while hormone shifts also affect the nervous system. Wellness practices — sleep, movement, slow breath, stress cycle completion, good nutrition — support the body through this and help the nervous system stay more stable during the changes.` },

            { id: `l10-q7`, format: `true-false`,
              question: `True or false: Asking a trusted adult for help about growth and change years is a sign of weakness.`,
              correctAnswer: false,
              explanation: `False. Asking for help is a sign of wisdom and pack intelligence. Every generation of humans has gone through this. None figured it out perfectly alone. The ones who had guidance had an easier time. There are no embarrassing questions, only honest ones.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `What is the COMPARISON TRAP during the growth years?`,
              options: [
                `Something helpful`,
                `Measuring your body's timing against others' and feeling worse — painful and unhelpful because the normal range is so huge. Every body is on its own perfect schedule`,
                `A video game`,
                `A class at school`,
              ],
              correctIndex: 1,
              explanation: `The comparison trap is measuring your body's changes against other kids' and feeling worse because of the difference. Painful because the normal range during growth years is enormous. The kid who looks older isn't ahead. The kid who looks younger isn't behind. Every body is on its own perfect schedule.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}. Pick ONE question and answer it honestly, just for you.`,
          prompts: [
            { id: `r1`, text: `Is there anything about the growth and change years that has felt confusing or worrying to you? What would help you feel less alone about it?` },
            { id: `r2`, text: `Who is a trusted adult in your life you could go to with questions about the growth years? What makes them feel safe to ask?` },
            { id: `r3`, text: `Have you ever fallen into the comparison trap about body timing? What would it feel like to trust your body's own schedule instead?` },
            { id: `r4`, text: `Which of the 5 things Terra shared (normal, timing, feelings, wellness, trusted adults) feels most important for you right now? Why?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `The growth and change years are one of the most researched periods in human development. Scientists know that how kids navigate this period has real long-term effects on physical health, emotional well-being, and self-image. Kids who have accurate information, trusted adults, and solid wellness practices during these years genuinely do better long-term, in body image, emotional regulation, physical health, and life satisfaction. The kids who struggle most are often those who had no information, felt shame about what was happening, or tried to navigate alone. Terra's note: you are doing something genuinely important by learning this now. The growth and change years aren't a crisis, they're a transition. All transitions are easier with information, community, and support. You have the information. Your pack is around you. Ask questions when you have them. Trust your body's timing. Keep your wellness practices. You're going to be okay. More than okay.`,
          familyAdventure: `Family Growth Conversation. Find a quiet moment with a trusted adult in your family this week. Ask them one real question about the growth and change years, their experience of it, what they wish they had known, what helped them. Then share something from today's lesson that surprised you or felt helpful. This doesn't need to be a big formal conversation. Just a real one. Families who talk openly about these things create the safety and trust that makes the growth years less scary and more navigable. Adults, this is your invitation to share and normalize.`,
          creativePrompt: {
            intro: `Write about what you want your pack (family, trusted adults) to know about how you're experiencing the growth and change years — or what you want them to know about how to support you.`,
            floor: `Write at least 5 sentences. Share something honest about what these years feel like for you.`,
            stretch: `Write 8 to 10 sentences. Include what's confusing, what you need, and one question you have.`,
            open: `Write as much as you want. Write a real letter to your pack (your family, a trusted adult, or imagined support people) about what you need from them during the growth and change years. Be specific and honest. What's confusing or worrying you? What kind of support would help? What do you wish adults understood about this? What questions do you have that no one has answered? End with what you're going to do to make sure you don't navigate these years alone. Make it real.`,
            frames: [
              `Something about the growth years that confuses or worries me is ___.`,
              `What I wish adults knew about this time is ___.`,
              `A trusted adult I can go to is ___.`,
              `A wellness practice that helps me right now is ___.`,
              `My commitment to not navigating these years alone is ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Outstanding, {name}. You just completed ten Life Wellness lessons. That's real. You now know that what's happening in your body is normal, that every body has its own timing, that bigger feelings are biological not wrong, that wellness practices matter more than ever now, and that trusted adults are your pack. You're not navigating the growth and change years alone. You have information, you have tools, and you have people. That's everything you need. Terra is proud of you. Keep your wellness practices. Trust your body. Ask questions when you have them. The pack is with you. — Terra.`,
          badge: `body-grown`,
          badgeName: `Body Wisdom Keeper`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L10.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L10 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
