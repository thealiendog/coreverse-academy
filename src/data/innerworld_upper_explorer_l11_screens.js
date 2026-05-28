// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L11 — Dr. Joe Dispenza for Kids: Thoughts Become Things
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : Dr. Joe Dispenza's framework + Bruce Lipton/epigenetics, kid-level.
//            Brief heart-brain coherence mention previewing L16.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (Dispenza practice / just thinking / old loop)
// SCOPE: 4 concepts — who Dispenza is + what he discovered, rehearsing the
//        new self (with brief heart-brain coherence touch), breaking the
//        habit of being yourself, epigenetics (Lipton) — thoughts switch genes
// VOICE: Sage = respectful awe, never breathless. The science is amazing
//        enough; let it speak for itself.
// FRAMING NOTE: Builds on L08. Lipton + epigenetics in section 4 makes
//        the lesson scientifically bulletproof. "Growing field of science
//        with thousands of studies" line preempts the "just one guy" reaction.
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-11`,
      title: `Dr. Joe Dispenza for Kids: Thoughts Become Things`,
      duration: 20,
      xpReward: 75,
      badge: `new-self`,
      badgeName: `Becoming a New Self`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we go deeper into one of the most exciting areas of modern science: how your thoughts and feelings actually CHANGE your brain, your body, and even which parts of your genes turn on. We met Dr. JOE DISPENZA briefly in our manifestation lesson. Today he becomes our teacher. Along with him, we'll meet another remarkable scientist named Dr. BRUCE LIPTON. The picture they paint together is extraordinary: you have far more influence over who you become than people once believed. Take a slow, calm breath, and let's explore together.`,
          headline: `Dr. Joe Dispenza for Kids`,
          subtitle: `How thoughts truly become things, with real science to back it up`,
          visual: `/ue-assets/iw/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Who Is Dr. Joe Dispenza?`,
          paragraphs: [
            `Dr. JOE DISPENZA is a neuroscientist and researcher who has spent decades studying something fascinating: how MEDITATION combined with ELEVATED EMOTION measurably changes the brain and body. His team uses brain scans, heart monitors, and other scientific tools to study what happens in real people doing real practice. They've documented results that surprise scientists, people creating real changes in their health, their wellbeing, and even their lives. Some of these results science is still working to fully explain. That's exciting, that's how cutting-edge science always works.`,
            `Dispenza isn't alone. He's part of a GROWING field with thousands of studies and many researchers exploring how mind, body, and reality connect. His big message is hopeful and practical: you're not a fixed person with a fixed brain and a fixed body. You can become a NEW version of yourself, on purpose, by deliberately changing what you think, feel, and pay attention to. The methods he teaches are based on real neuroscience, and they're being practiced by people all over the world with remarkable results. Today we'll learn the core of what he teaches, in a way you can actually use.`,
          ],
          image: `/ue-assets/iw/l11-s1-who-is.webp`,
          imageCaption: `Dr. Joe Dispenza: neuroscientist studying how meditation + emotion change brain and body.`,
          vocab: [
            {
              word: `Dr. Joe Dispenza`,
              definition: `A neuroscientist and researcher who studies how meditation combined with elevated emotion measurably changes the brain and body. His work shows you can become a new version of yourself by deliberately changing what you think, feel, and attend to.`,
              audioPrompt: `Dr. Joe Dispenza is a neuroscientist and researcher, {name}. He studies how meditation combined with elevated emotion measurably changes the brain and body. His team uses brain scans and heart monitors to document real results in real people. They've found remarkable changes in health, wellbeing, and lives. He's part of a growing field with thousands of studies exploring how mind, body, and reality connect. His message is hopeful: you can become a new version of yourself, on purpose, by changing what you think, feel, and attend to.`,
            },
            {
              word: `meditation`,
              definition: `In Dispenza's method, a daily practice of deliberately shifting into the emotional state of your future self, not just relaxing or clearing the mind. Done consistently, it breaks the habit of repeating the same thoughts and feelings each day and wires new brain pathways.`,
              audioPrompt: `Meditation is a practice of deliberately shifting your inner state, {name}. In Dispenza's method it's not just relaxing or clearing your mind. It's actively rehearsing a new version of yourself while generating genuine elevated emotions like gratitude and joy. Done daily, meditation in this form helps break the habit of repeating the same thoughts and feelings each day. It creates the space to become someone new before anything outside has changed. Dispenza calls this the core practice of real personal change.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Rehearse Being Your Future Self`,
          paragraphs: [
            `Here's the heart of Dispenza's discovery, and it's beautiful. Remember from our manifestation lesson that your brain often can't tell the difference between something you vividly imagine and something you actually experience? Dispenza's work shows what to DO with this. If you spend time each day vividly imagining yourself as the FUTURE version of you, the kinder, calmer, more confident, more capable you, AND if you generate genuine elevated emotion (gratitude, joy, love) while you imagine it, your brain begins forming new pathways for THAT person. Your body chemistry shifts. Cells respond. You begin BECOMING that version before anything outside has changed.`,
            `Dispenza emphasizes something important: this works best when you combine your BRAIN and your HEART. Real research (which we'll explore deeply in L16) shows that the heart isn't just a pump. It's a powerful organ that, when in a state called COHERENCE with the brain, profoundly affects the whole body. Elevated emotion connects them. When you genuinely feel love, gratitude, or joy while you visualize, your heart and brain start working together in coherence, and the rehearsal lands more deeply. So real Dispenza practice isn't cold mental imagining. It's warm, full-bodied, feeling-rich rehearsal of the future you. The thinking AND the feeling, together.`,
          ],
          image: `/ue-assets/iw/l11-s2-rehearse.webp`,
          imageCaption: `Rehearse the future you, with vivid imagining + elevated emotion. Brain + heart together.`,
          vocab: [
            {
              word: `rehearsal`,
              definition: `Vividly imagining being your future self, while genuinely feeling the elevated emotions (gratitude, joy, love) of that life. Done daily, your brain and body start changing as if it were real, before anything outside has changed.`,
              audioPrompt: `Rehearsal in Dispenza's work means vividly imagining being your future self, {name}. While genuinely feeling the elevated emotions of that life, like gratitude, joy, and love. Your brain often can't tell the difference between something vividly imagined and something real. So if you rehearse the future you with real feeling every day, your brain begins forming new pathways for that person and your body chemistry shifts. You begin becoming that version before anything outside has changed. The thinking and the feeling together.`,
            },
            {
              word: `future self`,
              definition: `The version of you who has already grown into who you're becoming. In Dispenza's practice, you don't wait to feel like that person when life changes — you rehearse being them now, with genuine emotion, before anything outside has shifted. Each rehearsal wires you closer.`,
              audioPrompt: `Your future self is the version of you who has already grown into who you're becoming, {name}. In Dispenza's practice, you don't wait to feel like that person when life changes. You rehearse being that person now, in your mind, with genuine emotion, before anything outside has shifted. This is powerful because your brain and body respond to the feeling as if it were real. Each rehearsal wires you a little closer to that future version. The future self becomes the present self over time.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Breaking the Habit of Being Yourself`,
          paragraphs: [
            `Dispenza's most famous book is called "Breaking the Habit of Being Yourself," and that phrase is the key to his whole framework. Here's what he means. Most people, without realizing it, wake up each morning and repeat the SAME thoughts, the SAME feelings, and the SAME reactions they had yesterday. Because of neuroplasticity (L02) and the subconscious (L04), repeating the same patterns daily keeps producing the same brain, the same body chemistry, and the same kind of life. We become a HABIT of who we've always been. And then we wonder why nothing changes.`,
            `Real change requires deliberately INTERRUPTING that loop. Through meditation and rehearsal, you spend time each day NOT as your familiar old self, but as the new self you're growing toward. You feel the new emotions, hold the new thoughts, picture the new behaviors. Over time, the old default fades and the new self becomes who you actually ARE. This applies to limiting beliefs (L03), harsh self-talk (L05), reactive patterns, even physical habits. You're not stuck. The brain you have, the moods you have, the reactions you have, were practiced into existence. You can practice new ones in. That's not wishful thinking. It's how the brain actually works, applied on purpose.`,
          ],
          image: `/ue-assets/iw/l11-s3-breaking-habit.webp`,
          imageCaption: `We become a habit of who we've always been. Real change interrupts that loop.`,
          vocab: [
            {
              word: `breaking the habit`,
              definition: `Dispenza's idea: most people repeat the same thoughts and feelings every day, which keeps producing the same brain, body, and life. Real change means deliberately interrupting that loop and rehearsing a new self until it becomes the default.`,
              audioPrompt: `Breaking the habit of being yourself is Dispenza's most famous teaching, {name}. Most people, without realizing it, wake up each morning and repeat the same thoughts, feelings, and reactions they had yesterday. Repeating the same patterns daily keeps producing the same brain, body, and life. We become a habit of who we've always been. Real change requires deliberately interrupting that loop, spending time each day not as your old self, but as the new self you're growing toward.`,
            },
            {
              word: `subconscious`,
              definition: `The part of your mind that runs below awareness, storing habits, beliefs, and automatic reactions. The subconscious changes through consistent daily practice and vivid feeling — not just deciding to be different. Dispenza's method works by reprogramming the subconscious, not just the thinking mind.`,
              audioPrompt: `The subconscious mind is the part of your mind that runs below awareness, {name}. It stores your habits, beliefs, and automatic reactions. Without realizing it, your subconscious keeps replaying the same patterns day after day, because repetition is how it works. In Dispenza's framework, this is why real change requires more than just deciding to be different. The subconscious changes through consistent daily practice, vivid feeling, and repetition of new thoughts and states. You're not just convincing your thinking mind. You're reprogramming the part that runs on autopilot.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Epigenetics: Your Thoughts Switch Genes On and Off`,
          paragraphs: [
            `Now meet another remarkable scientist: Dr. BRUCE LIPTON, a cell biologist who spent his career studying CELLS. Here's what he and many other scientists have shown, and it's revolutionary: your genes are NOT a fixed destiny. The field that studies this is called EPIGENETICS, and it shows that which genes are TURNED ON or OFF depends on signals from your environment, your nutrition, your stress, your relationships, AND your thoughts and feelings. Cells respond to your perception of life. So your inner state isn't just changing your mood, it's signaling your body which biological possibilities to activate.`,
            `Think about what this means. The genes you inherited give you possibilities, like a piano with many keys. Which "songs" get played depends on what gets pressed, and what gets pressed depends partly on the messages your body receives from your mind. Chronic stress, fear, and limiting beliefs send one set of signals (often activating genes connected to inflammation, illness, and stuck patterns). Calm, gratitude, love, and elevated emotion send a very different set of signals (often activating genes connected to health, healing, and growth). This isn't fringe science. Epigenetics is a major, well-established field with thousands of studies, taught in medical schools around the world. It's one of the deepest places where consciousness and biology meet. Sage's teaching: your thoughts and feelings reach into your cells. Your inner world is shaping your biology, every day. That's both an enormous gift and a real responsibility. Use it kindly, especially with yourself.`,
          ],
          image: `/ue-assets/iw/l11-s4-epigenetics.webp`,
          imageCaption: `Epigenetics: which genes turn on depends on environment, stress, and thoughts and feelings.`,
          vocab: [
            {
              word: `epigenetics`,
              definition: `The well-established field of science showing that genes aren't a fixed destiny. Which genes turn ON or OFF depends on signals from your environment, nutrition, stress, relationships, and thoughts and feelings. Your inner state shapes your biology.`,
              audioPrompt: `Epigenetics is the science showing that genes aren't a fixed destiny, {name}. Which genes turn on or off depends on signals from your environment, stress, relationships, and your thoughts and feelings. Cells respond to your perception of life. Dr. Bruce Lipton helped show this: your inner state signals your body which biological possibilities to activate. Chronic stress and fear send one set of signals. Calm, gratitude, and elevated emotion send a very different set. Epigenetics is a major field with thousands of studies, taught in medical schools worldwide.`,
            },
            {
              word: `perception`,
              definition: `How you interpret and experience the world around you. In Dr. Bruce Lipton's research, perception has a profound biological meaning: the signals your cells receive depend on how you perceive your life. Chronic stress perception activates inflammatory pathways. Calm and safety signals activate health and growth.`,
              audioPrompt: `Perception is how you interpret and experience the world around you, {name}. In Dr. Bruce Lipton's research, perception has a profound biological meaning: the signals your cells receive depend on how you perceive your life. Two people can face the same situation, and because they perceive it differently, their cells receive different signals and different genes activate. Chronic stress perception signals threat and activates inflammatory pathways. Calm and safety signals activate health and growth. Your perception isn't just a feeling. It's a message your biology listens to.`,
            },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids trying to change something about themselves. Classify each one: DISPENZA-STYLE PRACTICE (meditating into the new state, with real feeling, daily), JUST THINKING (thinking about change without any felt emotion or repetition), or THE OLD LOOP (repeating the same thoughts and feelings every day, which keeps producing the same self)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `practice`, label: `Dispenza-Style Practice`, color: `#34D399`, description: `Meditating into the future self, with genuine elevated emotion, daily. Real practice.` },
            { id: `thinking`, label: `Just Thinking`,           color: `#94A3B8`, description: `Thinking about change without felt emotion or repetition. Doesn't reach the body.` },
            { id: `loop`,     label: `The Old Loop`,            color: `#F87171`, description: `Repeating the same thoughts and feelings every day. Keeps the same self.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid wants to become more confident. Every morning, they sit quietly for 10 minutes.` },
                { text: `They vividly picture themselves as a confident version of themselves and genuinely FEEL the joy, calm, and gratitude of being that person.` },
                { text: `They've done this every day for two months, and people around them have started noticing real changes.` },
              ],
              correctAnswer: `practice`,
              realWorldExample: `Daily meditation with elevated emotion is core Dispenza practice.`,
              explanation: `Vivid imagining + genuine elevated emotion + daily repetition = full Dispenza practice. Pure practice. The brain forms new pathways, the body chemistry shifts, and the new self gradually becomes the default. The changes others notice are biology catching up to the inner work.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid says: "I want to be calmer." They think the thought once a day.` },
                { text: `They don't picture it clearly, don't feel any calm emotion, and don't sit in meditation with it.` },
                { text: `Three months later, they're just as reactive as before.` },
              ],
              correctAnswer: `thinking`,
              realWorldExample: `Thinking about change without feeling or repetition doesn't change you.`,
              explanation: `A thought without elevated emotion and without daily repetition is just a fleeting wish. Pure just thinking. It doesn't reach the body, doesn't activate epigenetic changes, doesn't wire new pathways. The kid is hoping for change, not practicing it.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid wakes up every morning thinking the same worried thoughts they had yesterday.` },
                { text: `They feel the same anxiety, react the same way to the same situations, and replay the same patterns.` },
                { text: `Each evening, they wonder why nothing in their life ever seems to shift.` },
              ],
              correctAnswer: `loop`,
              realWorldExample: `Repeating the same daily pattern produces the same self.`,
              explanation: `Same thoughts + same feelings + same reactions = same brain, same body, same life. Pure old loop. This is what Dispenza means by "the habit of being yourself." It's not a flaw, almost everyone does it. Real change starts by interrupting the loop and rehearsing something new.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `A kid sits down to meditate for 15 minutes every morning. They close their eyes and try to imagine being braver.` },
                { text: `But the whole time, they're still feeling the same anxious, frustrated emotions they always feel.` },
                { text: `Six weeks later, nothing has changed. They wonder why "meditation doesn't work" for them.` },
              ],
              correctAnswer: `loop`,
              realWorldExample: `Meditating without state change is the old loop in disguise.`,
              explanation: `Tricky! The kid LOOKS like they're doing Dispenza practice (sitting daily, trying to imagine a new self). You might call this "Dispenza practice." But look closely. They're staying in the same old emotional state the whole time, just with their eyes closed. Without genuine elevated emotion (the heart of the practice), they're rehearsing the SAME self every day. Pure old loop in disguise. Sage's important lesson: meditation without state change is just sitting still. The whole point is to genuinely SHIFT into the elevated emotions of the future self while you meditate, gratitude, love, joy, calm, confidence. The brain and heart-brain coherence respond to the FEELING. This is one of the most important nuances in this whole subject. Don't just sit and rehearse who you've always been. Sit and become someone new.`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `Who is Dr. Joe Dispenza, and what does he study?`,
              options: [
                `A poet who writes about feelings`,
                `A neuroscientist who studies how meditation combined with elevated emotion measurably changes the brain and body`,
                `Someone who only writes self-help`,
                `Not a real scientist`,
              ],
              correctIndex: 1,
              explanation: `Dispenza is a neuroscientist and researcher who studies how meditation combined with elevated emotion measurably changes the brain and body. His team uses brain scans and heart monitors to document real results in real people. He's part of a growing scientific field.` },

            { id: `l11-q2`, format: `true-false`,
              question: `True or false: Dispenza's work is fringe and unconnected to other science.`,
              correctAnswer: false,
              explanation: `False. Dispenza is part of a growing field with thousands of studies and many researchers exploring how mind, body, and reality connect. His work builds on real neuroscience and is being practiced by people worldwide with remarkable results.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What is the heart of Dispenza's practice?`,
              options: [
                `Just thinking about change once`,
                `Vividly rehearsing being your future self, while genuinely feeling elevated emotions like gratitude and joy, daily`,
                `Wishing without action`,
                `Avoiding all feelings`,
              ],
              correctIndex: 1,
              explanation: `The practice combines vivid rehearsal of the future self with genuine elevated emotion (gratitude, joy, love), done daily. Your brain often can't tell the difference between vivid imagining and real experience, so you literally begin becoming that version before anything outside has changed.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `Why does Dispenza emphasize combining the BRAIN and the HEART?`,
              options: [
                `He doesn't, only the brain matters`,
                `Real research shows the heart, when in coherence with the brain, profoundly affects the whole body — elevated emotion connects them`,
                `Hearts can think`,
                `It's a metaphor only`,
              ],
              correctIndex: 1,
              explanation: `Research shows the heart is more than a pump. When it's in coherence with the brain (we'll go deep in L16), it profoundly affects the whole body. Elevated emotion connects them. Real practice is warm, full-bodied, feeling-rich rehearsal, not cold mental imagining.` },

            { id: `l11-q5`, format: `multiple-choice`,
              question: `What does "breaking the habit of being yourself" mean?`,
              options: [
                `Pretending you don't exist`,
                `Most people repeat the same thoughts and feelings daily, producing the same self — real change interrupts that loop and rehearses a new self`,
                `Becoming a completely different person overnight`,
                `Ignoring your past`,
              ],
              correctIndex: 1,
              explanation: `Most people unconsciously repeat the same thoughts, feelings, and reactions every day, which (through neuroplasticity and the subconscious) keeps producing the same brain, body, and life. Real change means interrupting that loop and deliberately rehearsing a new self until it becomes your default.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `What is EPIGENETICS?`,
              options: [
                `That genes are a fixed destiny`,
                `The science showing that which genes turn ON or OFF depends on signals from environment, stress, relationships, AND your thoughts and feelings`,
                `A type of medicine`,
                `Just a theory with no evidence`,
              ],
              correctIndex: 1,
              explanation: `Epigenetics is the well-established field showing that genes aren't a fixed destiny. Which genes turn on or off depends on signals from your environment, nutrition, stress, relationships, AND thoughts and feelings. Cells respond to your perception of life. It's taught in medical schools worldwide.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `Who is Dr. Bruce Lipton, and what did he help show?`,
              options: [
                `He wrote a novel`,
                `A cell biologist who helped show cells respond to your PERCEPTION of life — your inner state signals your body which biological possibilities to activate`,
                `He invented the heart`,
                `He studies stars`,
              ],
              correctIndex: 1,
              explanation: `Dr. Bruce Lipton is a cell biologist whose work helped show that cells respond to your perception of life. Your thoughts and feelings send signals to your body about which genes to switch on. Inner state shapes biology, not as wishful thinking, but as real cell science.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `Why is meditation WITHOUT genuine elevated emotion not the full practice?`,
              options: [
                `Sitting still is the whole point`,
                `Without the FEELING, you're just rehearsing the same old self with your eyes closed — the brain and body change in response to the elevated emotion`,
                `Meditation isn't useful`,
                `Emotions ruin meditation`,
              ],
              correctIndex: 1,
              explanation: `Meditation without state change is just sitting still. The whole point is to genuinely shift into the elevated emotions of the future self (gratitude, love, joy, calm). The brain and heart-brain coherence respond to the FEELING. Without it, you're rehearsing who you've always been.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Take a slow, gentle breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `If your thoughts and feelings really do shape your biology, how does that change the way you want to talk to yourself?` },
            { id: `r2`, text: `Notice the "habit of being yourself" gently and kindly. Are there thoughts or feelings you repeat every day that you might be ready to outgrow?` },
            { id: `r3`, text: `If you spent 10 minutes a day vividly being the future version of you (with genuine elevated emotion), who would that person be? Describe them.` },
            { id: `r4`, text: `Epigenetics shows your inner state reaches into your cells. Does it change anything to know your gentleness with yourself is also a kind of medicine?` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `What you've learned today is being practiced by millions of people worldwide and studied in labs from neuroscience to cell biology. Athletes, business leaders, healers, teachers, and ordinary kids and adults are using these tools to change real things in their lives. The combination of meditation, elevated emotion, and consistent daily practice is supported by real research and is producing remarkable results. Sage's note: you've been handed a real, science-backed toolkit for becoming who you want to be. Use it gently. Be patient with yourself, real change is daily, not instant. And remember: your inner kindness toward yourself isn't just a nice feeling. It's a signal reaching all the way down to your cells. Treat yourself like someone whose biology is listening, because it is.`,
          familyAdventure: `Family Future-Self Meditation. As a family, set aside 10 quiet minutes one morning this week. Each person closes their eyes and vividly imagines being a future version of themselves, a year from now, in some way kinder, calmer, or more capable. The important part: genuinely FEEL the gratitude, joy, or love of being that person, in this moment. After, share what it felt like (only if comfortable). Notice that you don't have to BELIEVE it's possible to FEEL it as if it were true, that's the practice. If you enjoy it, do it again. You're rehearsing new selves, together.`,
          creativePrompt: {
            intro: `Write a vivid letter from your future self, one year from now, who has been doing this practice and has truly become a new version of you.`,
            floor: `Write at least 5 sentences. Describe one or two real ways you've changed and how it feels.`,
            stretch: `Write 8 to 10 sentences. Describe the new self in real detail, what you think, feel, and do differently, and what helped most.`,
            open: `Write as much as you want. Write a full letter to your present self from your future self, one year from now, who has been rehearsing daily with vivid imagining + elevated emotion. Describe who you've become, what feels different in your brain, body, feelings, and life. Describe what daily practice has been like (the patient days, the breakthroughs, the moments of doubt and gentle return). Speak with the kindness of someone who knows your current self deeply. Encourage your present self to keep going, and to be gentle. Sign it with hope and love. Honor that this is a real, science-backed possibility, not a fantasy.`,
            frames: [
              `Dear past me, a year ago today, you started practicing being me, and ___.`,
              `What feels most different now is ___.`,
              `My daily practice looked like ___.`,
              `The hardest part was ___, and what helped me through it was ___.`,
              `Keep going. I'm becoming us. ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Beautiful, powerful work, {name}. You've learned the heart of Dr. Joe Dispenza's framework, with the supporting science of Dr. Bruce Lipton and epigenetics. You now understand rehearsing your future self, the importance of elevated emotion, breaking the habit of being yourself, and how your thoughts reach all the way into your cells. This is some of the most exciting science in the world right now, and you have the real toolkit. Next, we explore meditation itself and the remarkable brain-wave states it creates. MEDITATION AND BRAIN WAVES. Practice gently, and I'll see you there. — Sage.`,
          badge: `new-self`,
          badgeName: `Becoming a New Self`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L11.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L11 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
