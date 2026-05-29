// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L01 — How to Think Well
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : thinking as a skill — Daniel Kahneman (fast/slow thinking),
//            critical thinking research, metacognition basics. Foundation
//            lesson for the entire subject.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (sharp thinking / lazy thinking / rigid thinking)
//            Trick case = "confident-sounding" rigid thinking that LOOKS
//            like sharp thinking.
// SCOPE: 4 concepts — thinking is a skill, fast vs slow thinking, the
//        three thinking patterns, how to build sharp thinking
// VOICE: Byte = quick, clever, playful, loves puzzles. Makes thinking
//        feel like a sport. Fox energy: curious, sharp, fun.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-01`,
      title: `How to Think Well`,
      duration: 18,
      xpReward: 75,
      badge: `sharp-thinker`,
      badgeName: `Sharp Thinker`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Foxes are made for thinking — quick, curious, always sniffing out clues. And I'm SO glad to be your guide for this whole subject, because we're about to explore something most kids never get taught: HOW TO THINK WELL. Think about that for a second. You go to school for years to learn FACTS, but almost no one teaches you HOW your mind works, how to use it sharply, how to spot bad thinking, how to keep learning forever. Today we start there. Thinking is a SKILL, not a fixed thing. The kid who learns to think well has an advantage that lasts a whole life. Take a curious breath, perk up your ears, and let's begin.`,
          headline: `How to Think Well`,
          subtitle: `Thinking is a SKILL. Not just something that happens to you`,
          visual: `/ue-assets/fs/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Thinking Is a Skill. Not a Fixed Thing.`,
          paragraphs: [
            `Here's something most kids don't realize: your THINKING is a skill you can develop, just like running, drawing, or playing an instrument. Some kids and adults think being "smart" is something you either ARE or aren't. Research shows the opposite. Thinking can be TRAINED. People who practice asking good questions, evaluating information, slowing down before big decisions, and considering different angles get measurably sharper at it over time. The brain is built to upgrade itself through practice (that's what neuroplasticity is, if you've heard the word). Your thinking ability isn't locked at any age. It can grow your whole life.`,
            `Here's why this matters MORE than ever right now. You're growing up in a world with infinite information at your fingertips. AI tools that can write, draw, and answer questions instantly. Social media designed to grab your attention. Misinformation that looks like real news. Choices, choices, choices everywhere. The kids who navigate all this well — who can think CLEARLY, ask GOOD questions, spot WHAT'S REAL, and keep LEARNING — are going to thrive. The ones who don't develop these skills are going to struggle. The good news: you can build these skills now. Foxes have known this forever. Sharp thinking is a hunter's tool. Today, you start sharpening yours.`,
          ],
          image: `/ue-assets/fs/l01-s1-skill.webp`,
          imageCaption: `Thinking is a skill. Practice sharpens it. Foxes know.`,
          vocab: [
            { word: `thinking as a skill`,
              definition: `The understanding that your ability to think clearly, ask good questions, evaluate information, and consider different angles is a SKILL that can be trained and improved, not a fixed trait you're born with. Research-backed. The brain is built to upgrade through practice. Sharp thinking grows your whole life.`,
              audioPrompt: `Thinking as a skill is the understanding that your ability to think well is something you can train and improve, not a fixed trait, {name}. Some kids think being smart is something you either ARE or aren't. Research shows the opposite. People who practice asking good questions, evaluating information, slowing down before decisions, and considering different angles get measurably sharper over time. The brain is built to upgrade itself through practice. Your thinking ability isn't locked at any age. It can grow your whole life. Foxes have known this forever.` },
            { word: `neuroplasticity`,
              definition: `The brain's built-in ability to change and strengthen through practice and learning. Every time you practice sharp thinking, your brain actually changes — new connections form and existing ones strengthen. Intelligence isn't mostly fixed. It can grow throughout life. The sharp thinker you become is literally built into your brain through practice.`,
              audioPrompt: `Neuroplasticity is the brain's built-in ability to change and strengthen through practice and learning, {name}. Your brain is not fixed at birth. Every time you practice asking good questions or thinking through a hard problem, your brain actually changes — new connections form, existing ones strengthen. Researchers used to think intelligence was mostly fixed. They now know it can grow throughout life. This means the sharp thinker you become from practicing is literally built into your brain. The brain you're growing right now keeps getting stronger with practice.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your Brain Has Two Speeds`,
          paragraphs: [
            `Here's a fascinating thing researcher Daniel KAHNEMAN discovered about how your brain works. You actually have TWO ways of thinking. FAST THINKING is automatic, instant, doesn't take effort. It's how you know "2 plus 2 equals 4" without thinking. It's how you recognize a friend's face instantly. It's how you flinch when something flies toward your head. Fast thinking is great for familiar, quick stuff. SLOW THINKING is deliberate, careful, takes real effort. It's how you solve a hard math problem. It's how you decide whether something you read is true. It's how you plan a big project. Slow thinking is what you use for harder, more important questions.`,
            `Here's the trick: people often use FAST thinking for things that actually need SLOW thinking. A friend says something confidently? Fast thinking says "must be true." A flashy headline appears? Fast thinking says "wow, that's important." An adult says "kids your age can't do that"? Fast thinking says "okay." That's how we get tricked, fooled, and miss important things. Sharp thinking means knowing when to SLOW DOWN. When you face something important, complex, or you're not sure about, slow thinking is the move. Pause. Ask questions. Consider angles. Take your time. This isn't about being slow as a person — it's about giving important things the careful thought they deserve. Most adults never learn this. You're getting it at 9 or 10.`,
          ],
          image: `/ue-assets/fs/l01-s2-two-speeds.webp`,
          imageCaption: `Fast thinking. Automatic, quick. Slow thinking. Deliberate, careful. Know when to use each.`,
          vocab: [
            { word: `fast and slow thinking`,
              definition: `Daniel Kahneman's discovery that your brain has TWO ways of thinking. FAST is automatic (2+2=4, recognizing faces, flinching). SLOW is deliberate, takes effort (hard problems, evaluating truth, big decisions). Sharp thinking is knowing when to SLOW DOWN for important things.`,
              audioPrompt: `Fast and slow thinking is Daniel Kahneman's discovery that your brain has two ways of thinking, {name}. Fast thinking is automatic, instant, doesn't take effort. It's how you know 2 plus 2 equals 4 without thinking. Slow thinking is deliberate, careful, takes real effort. It's how you solve a hard problem or decide whether something is true. The trick is, people often use fast thinking for things that actually need slow thinking. That's how we get fooled. Sharp thinking means knowing when to slow down for important things.` },
            { word: `cognitive bias`,
              definition: `A pattern in your brain that makes you lean toward certain beliefs without noticing. Everyone has them — from where you grew up, who you know, what you've seen most. You might trust confident-sounding speakers or sources that agree with you. Biases aren't a flaw, just how brains work. Noticing them is the move that opens up sharper thinking.`,
              audioPrompt: `Cognitive bias is a pattern in your brain that makes you lean toward certain beliefs without noticing, {name}. Everyone has them. They come from where you grew up, who you're close to, what you've seen most. For example, you might believe information more when someone sounds confident, or trust sources that agree with you. Biases aren't a character flaw — they're just how brains work. The sharp thinker doesn't try to eliminate biases, but learns to NOTICE them. Noticing is the move that opens up sharper thinking.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Thinking Patterns`,
          paragraphs: [
            `Once you start noticing how people think, you'll see three main patterns. SHARP THINKING is what we're building. The sharp thinker is CURIOUS, asks questions, considers different angles, evaluates information before believing it, says "I don't know yet" when they don't, and CHANGES their mind when new information shows up. Sharp thinkers are interesting to talk to because they're actually thinking, not just repeating what they've heard.`,
            `LAZY THINKING is the opposite. The lazy thinker accepts the FIRST answer that pops into their head, believes things just because someone said them confidently, follows the crowd without questioning, doesn't fact-check, and avoids hard mental work. Lazy thinking is the default mode of most people most of the time — NOT because they're dumb, but because thinking carefully takes effort. RIGID THINKING is sneakier. The rigid thinker has an opinion and WON'T change it, even when new information shows up. They look at evidence only when it agrees with what they already believe. They might sound confident, but they're actually stuck. Rigid thinking is the trap of "I already know," which prevents real learning. Sharp thinkers SLOW DOWN, lazy thinkers DON'T BOTHER, rigid thinkers WON'T BUDGE. Today, you start building toward the sharp version.`,
          ],
          image: `/ue-assets/fs/l01-s3-three-patterns.webp`,
          imageCaption: `Sharp thinking. Curious, updates. Lazy thinking. Accepts first answer. Rigid thinking. Won't budge.`,
          vocab: [
            { word: `sharp thinking`,
              definition: `Thinking that is curious, asks questions, considers different angles, evaluates information before believing it, says "I don't know" when uncertain, and CHANGES the mind when new evidence appears. The trainable skill. Different from lazy thinking (accepts first answer) and rigid thinking (won't update opinion).`,
              audioPrompt: `Sharp thinking is what we're building, {name}. The sharp thinker is curious, asks questions, considers different angles, evaluates information before believing it, says I don't know yet when they don't, and changes their mind when new information shows up. Sharp thinkers are interesting to talk to because they're actually thinking, not just repeating what they've heard. Lazy thinking accepts the first answer. Rigid thinking won't change its mind. Sharp thinking slows down, asks questions, and updates with new information.` },
            { word: `lazy thinking`,
              definition: `The brain's default mode of accepting the first answer rather than doing the harder work of evaluating it. Not about being dumb — the brain saves energy, and careful thinking takes effort. A confident speaker or viral headline triggers it. Sharp thinking is what you BUILD on top of the default.`,
              audioPrompt: `Lazy thinking is the brain's default mode of accepting the first answer rather than doing the harder work of evaluating it, {name}. It's not about being dumb. The brain is designed to save energy, and careful thinking takes effort. So the brain often goes with the first convincing answer it gets. A confident speaker, a viral headline, a popular friend — and lazy thinking accepts it without checking. Sharp thinking is what you BUILD on top of the default. Notice when you've accepted something without questioning. Then question it.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Build Sharp Thinking`,
          paragraphs: [
            `Here's how you actually GROW sharp thinking. It's simpler than it sounds, but takes practice. First, ASK MORE QUESTIONS. Instead of accepting what you hear, get curious. "How do they know that?" "Is that always true?" "What's the other side?" "What would change my mind?" Questions are the fox's claws of sharp thinking. Sharp thinkers ASK more than they tell. Second, SLOW DOWN ON IMPORTANT THINGS. When something matters (a big decision, a claim that affects you, something you're not sure about), don't go with your first reaction. Take a breath. Think it through. Use slow thinking deliberately.`,
            `Third, BE OKAY WITH "I DON'T KNOW." This is huge. People who say "I don't know yet, let me think about it" are usually MUCH sharper thinkers than people who always have an instant confident answer. Saying "I don't know" leaves room for actual learning. Fourth, UPDATE YOUR MIND WHEN NEW INFO SHOWS UP. If you believed X yesterday and learned Y today, change your view. That's not weakness, that's intelligence in action. Stubborn unchanged minds aren't strong, they're stuck. Fifth, KNOW YOUR OWN BIASES. We all have them — ideas we believe because of where we grew up, who we hang out with, what we've seen most often. Noticing them is the start of seeing past them. Byte's first teaching: thinking is a skill, foxes practice it like a sport, and you can start sharpening yours today. Curiosity, slow-down moments, "I don't know," updating, knowing your biases. These are the moves. Most adults never learn them. You're getting started early.`,
          ],
          image: `/ue-assets/fs/l01-s4-build.webp`,
          imageCaption: `Ask questions, slow down on important things, say "I don't know," update, know your biases.`,
          vocab: [
            { word: `intellectual humility`,
              definition: `The skill of being okay with "I don't know" and updating your mind when new information appears. People who say "I don't know yet, let me think" are usually sharper thinkers than people with instant confident answers. Stubborn unchanged minds aren't strong; they're stuck.`,
              audioPrompt: `Intellectual humility is the skill of being okay with I don't know and updating your mind when new information appears, {name}. People who say I don't know yet, let me think about it are usually much sharper thinkers than people who always have an instant confident answer. Saying I don't know leaves room for actual learning. If you believed X yesterday and learned Y today, change your view. That's not weakness, that's intelligence in action. Stubborn unchanged minds aren't strong, they're stuck.` },
            { word: `rigid thinking`,
              definition: `The trap of "I already know," where an opinion gets defended rather than tested. Rigid thinkers only look at evidence that agrees with them, dismiss other angles, and sound very confident — but they're actually stuck. The real test: do they update when new evidence appears? Sharp thinkers update. Rigid thinkers dig in.`,
              audioPrompt: `Rigid thinking is the trap of I already know, where an opinion gets defended rather than tested, {name}. Rigid thinkers only look at evidence that agrees with them, dismiss other angles, and sound very confident. The danger is that rigid thinking can look like sharp thinking from the outside. The real test: does this person update when new evidence appears? Do they genuinely consider other angles? Do they ever say I'm not sure? No on all three means rigid thinking in disguise. Sharp thinkers update. Rigid thinkers dig in.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids responding to information. Classify each: SHARP THINKING (curious, evaluates, considers angles, willing to update), LAZY THINKING (accepts the first answer, doesn't bother to check, follows the crowd), or RIGID THINKING (won't update opinion even with new evidence)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `sharp`,  label: `Sharp Thinking`,  color: `#34D399`, description: `Curious, asks questions, considers different angles, evaluates information, willing to update when new info appears.` },
            { id: `lazy`,   label: `Lazy Thinking`,   color: `#FBBF24`, description: `Accepts the first answer, believes confident-sounding things without checking, follows the crowd, avoids hard mental work.` },
            { id: `rigid`,  label: `Rigid Thinking`,  color: `#F87171`, description: `Has an opinion and WON'T update it, even with new evidence. Only looks at info that agrees with them. Sounds confident, actually stuck.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Response #1`,
              clues: [
                { text: `A kid sees a viral video claiming "scientists have proven X."` },
                { text: `Instead of believing it instantly, they ask: "Which scientists? What was the study? Has anyone else confirmed it?"` },
                { text: `They check a few different sources before forming an opinion.` },
              ],
              correctAnswer: `sharp`,
              realWorldExample: `Curious questions, checking sources, willing to take time. Sharp thinking in action.`,
              explanation: `Pure sharp thinking. The kid didn't believe a confident-sounding claim just because it was confident. They asked GOOD questions (which scientists, what study, anyone else confirmed) and checked sources before forming an opinion. This is exactly what sharp thinkers do. They slow down on important claims. Most kids and most adults would just accept the viral video. This kid is way ahead.`,
            },
            {
              id: `case-2`,
              caseTitle: `Response #2`,
              clues: [
                { text: `A popular kid says "everyone knows X is true."` },
                { text: `Without thinking, our kid agrees and starts repeating it to others.` },
                { text: `They never check whether X is actually true.` },
              ],
              correctAnswer: `lazy`,
              realWorldExample: `Accepts what a confident person says without checking. Classic lazy thinking.`,
              explanation: `Pure lazy thinking. The kid accepted the claim just because someone confident said it ("everyone knows"). No questions, no checking, no slow thinking. This is the most common thinking pattern in the world — NOT because people are dumb, but because thinking carefully takes effort. Lazy thinking is the brain's default mode. Sharp thinking is what you build to override it.`,
            },
            {
              id: `case-3`,
              caseTitle: `Response #3`,
              clues: [
                { text: `A kid believes their favorite sports team is the best.` },
                { text: `When shown clear stats that another team is actually better this year, they say "those stats don't matter, my team is still the best."` },
                { text: `They refuse to update their view no matter what evidence they're shown.` },
              ],
              correctAnswer: `rigid`,
              realWorldExample: `Refusing to update with new evidence is rigid thinking, even when topic is small.`,
              explanation: `Pure rigid thinking. New evidence appeared, but the kid won't update. They're not engaging with the actual stats — they're defending an opinion. Rigid thinking happens on small stuff (favorite team) and big stuff (important beliefs). The pattern is the same: "I already know, don't confuse me with evidence." This is the opposite of intellectual humility. Sharp thinkers UPDATE when new info appears.`,
            },
            {
              id: `case-4`,
              caseTitle: `Response #4: The Tricky One`,
              clues: [
                { text: `A kid speaks VERY confidently about a complex topic.` },
                { text: `They use big words, sound certain, and never say "I'm not sure" about anything.` },
                { text: `When someone politely brings up a different angle, they say "no, that's just wrong" without considering it.` },
              ],
              correctAnswer: `rigid`,
              realWorldExample: `Confident-sounding isn't the same as sharp. Refusing to consider angles is rigid in disguise.`,
              explanation: `Tricky, {name}! The kid SOUNDS like a sharp thinker — confident, articulate, using big words. So you might call this sharp thinking. But look closely. They never say "I'm not sure," they don't consider other angles, they dismiss differences without engaging. Pure rigid thinking in disguise (the confident-sounding version). Lesson: CONFIDENCE isn't the same as SHARPNESS. Some of the most rigid thinkers sound the smartest. The real test isn't how confident someone sounds — it's whether they ask good questions, consider angles, say "I don't know" when uncertain, and update with new info. Watch for this in adults, friends, online voices, anywhere. Confidence is easy. Real sharp thinking is rarer and quieter.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l01-q1`, format: `true-false`,
              question: `True or false: Being a "smart thinker" is something you either ARE or aren't — it can't be developed.`,
              correctAnswer: false,
              explanation: `False. Thinking is a SKILL, not a fixed trait. Research shows people who practice asking good questions, evaluating information, slowing down before decisions, and considering different angles get measurably sharper over time. The brain is built to upgrade through practice. Your thinking ability can grow your whole life.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What did Daniel KAHNEMAN discover about how your brain thinks?`,
              options: [
                `It only has one mode`,
                `Your brain has TWO ways of thinking. FAST (automatic, instant, like 2+2 equals 4) and SLOW (deliberate, takes effort, hard problems, evaluating truth)`,
                `Brains don't think`,
                `Random patterns`,
              ],
              correctIndex: 1,
              explanation: `Kahneman discovered your brain has two ways of thinking. FAST is automatic, instant (recognizing faces, simple math, flinching). SLOW is deliberate, takes effort (hard problems, evaluating truth, big decisions). Sharp thinking is knowing when to use each. People often use fast for things that need slow, and that's how they get fooled.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `What is SHARP THINKING?`,
              options: [
                `Talking fast`,
                `CURIOUS, asks questions, considers angles, evaluates information, says "I don't know" when uncertain, and UPDATES the mind when new evidence appears`,
                `Knowing everything`,
                `Sounding confident`,
              ],
              correctIndex: 1,
              explanation: `Sharp thinking is curious, asks good questions, considers different angles, evaluates information before believing it, says "I don't know" when uncertain, and CHANGES mind when new evidence shows up. Sharp thinkers are interesting because they're actually thinking, not just repeating.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `What is LAZY THINKING?`,
              options: [
                `Slow thinking`,
                `Accepts the FIRST answer, believes confident-sounding things without checking, follows the crowd, avoids hard mental work. The brain's default mode`,
                `No thinking at all`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Lazy thinking accepts the first answer, believes things just because someone said them confidently, follows the crowd without questioning, doesn't fact-check, and avoids hard mental work. The brain's default mode — NOT because people are dumb, but because thinking carefully takes effort. Sharp thinking is what you build to override it.` },

            { id: `l01-q5`, format: `multiple-choice`,
              question: `What is RIGID THINKING?`,
              options: [
                `Strong opinions`,
                `Has an opinion and WON'T update it even with new evidence. Only looks at info that agrees with what they already believe. Sounds confident, actually stuck`,
                `Sharp thinking`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Rigid thinking has an opinion and won't change it, even with new evidence. Only considers information that agrees with what they already believe. Might sound confident, but actually stuck. The trap of "I already know," which prevents learning. Sharp thinkers UPDATE with new info; rigid thinkers WON'T BUDGE.` },

            { id: `l01-q6`, format: `true-false`,
              question: `True or false: Sounding CONFIDENT means someone is a SHARP thinker.`,
              correctAnswer: false,
              explanation: `False. Confidence isn't the same as sharpness. Some of the most rigid thinkers sound the smartest. The real test isn't how confident someone sounds — it's whether they ask good questions, consider angles, say "I don't know" when uncertain, and update with new info.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `What's HUGE about saying "I DON'T KNOW"?`,
              options: [
                `It's weak`,
                `People who say "I don't know yet, let me think" are usually SHARPER than people with instant confident answers. Leaves room for actual learning`,
                `It's wrong`,
                `Means you're dumb`,
              ],
              correctIndex: 1,
              explanation: `People who say "I don't know yet, let me think about it" are usually MUCH sharper thinkers than people who always have an instant confident answer. Saying "I don't know" leaves room for actual learning. That's intellectual humility — one of the strongest thinking moves there is.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about thinking?`,
              options: [
                `Just trust everything you hear`,
                `Thinking is a SKILL. Foxes practice it. Curiosity, slow-down moments, "I don't know," updating, knowing your biases. These are the moves`,
                `Be confident always`,
                `Don't bother`,
              ],
              correctIndex: 1,
              explanation: `Thinking is a skill, foxes practice it like a sport, and you can start sharpening yours today. Curiosity, slow-down moments, "I don't know," updating, knowing your biases. These are the moves. Most adults never learn them. You're getting started early.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest: which thinking pattern do you tend toward most — sharp, lazy, or rigid? Notice gently, without judgment.` },
            { id: `r2`, text: `Think of a time you believed something confidently, then learned you were wrong. What was that like? Did you UPDATE or push back?` },
            { id: `r3`, text: `When was the last time you said "I don't know, let me think about that"? How did it feel?` },
            { id: `r4`, text: `What's a topic you'd like to think more SHARPLY about (ask better questions, consider angles, evaluate sources)?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Critical thinking research is one of the most important areas in modern education and psychology. Studies on kids and adults consistently find that people who develop sharp thinking skills (curiosity, asking questions, evaluating information, intellectual humility, willingness to update) make better decisions, learn faster, are harder to mislead, and adapt better to change. In a world of infinite information, AI, and rapid change, these skills aren't optional — they're the foundation of thriving. Byte's note: foxes have known this forever — sharp thinking is the hunter's edge. You don't have to be the strongest, fastest, or loudest to do well in life. You just have to think CLEARLY. The kid who builds sharp thinking now — asking questions, slowing down on important things, saying "I don't know," updating with new info — becomes an adult who navigates the world with real clarity. That's a quiet superpower no one can take from you. Sharpen it across the next 19 lessons. We're just getting started.`,
          familyAdventure: `Family Sharp-Thinking Practice. As a family, try this for one week: when someone makes a confident claim ("everyone knows X" or "always Y"), instead of just agreeing or disagreeing, ASK ONE GOOD QUESTION together. "How do we know that?" "What would change our minds?" "Is there another angle?" Adults model it too. Building a family habit of curious questioning grows sharp thinkers naturally. The home where good questions are welcome becomes a home where everyone thinks more clearly together.`,
          creativePrompt: {
            intro: `Write about your own thinking — what patterns you notice in yourself and the kind of thinker you want to become.`,
            floor: `Write at least 5 sentences. Describe your tendencies and one move you want to practice.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on sharp thinking in your own life.`,
            open: `Write as much as you want. Write a full piece about your relationship with your own thinking. Honestly describe which patterns you tend toward — sharp, lazy, or rigid. Reflect on a time you accepted something without questioning, OR a time you updated your mind with new evidence and felt that growth. Describe the kind of thinker you want to grow into — curious, slow-when-it-matters, comfortable with "I don't know," willing to update, aware of your biases. End with 1-2 specific commitments for practicing sharp thinking this week. Make it specific, honest, and curious.`,
            frames: [
              `The thinking pattern I tend toward most is ___.`,
              `A time I updated my mind well was ___.`,
              `The kind of thinker I want to become is ___.`,
              `Specifically, I want to be someone who ___.`,
              `My commitments this week are ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Sharp, curious work, {name}! You've laid the foundation for the whole subject. Thinking is a skill, your brain has two speeds (fast and slow), and there are three patterns (sharp, lazy, rigid). You know the moves of sharp thinking: ask questions, slow down on important stuff, say "I don't know," update with new info, know your biases. This is how foxes hunt for truth. Next, we explore the single most powerful thinking skill there is — ASKING GOOD QUESTIONS. Sharpen your ears, and I'll see you there. — Byte.`,
          badge: `sharp-thinker`,
          badgeName: `Sharp Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L01;
