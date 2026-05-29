// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L07 — Stress & Recovery
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real stress research (Robert Sapolsky, Emily & Amelia Nagoski's
//            "Burnout"), the stress cycle, why RECOVERY is the missing piece
//            most people skip. Builds directly on L06 (nervous system).
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 steps of completing a stress cycle)
// SCOPE: stress isn't bad, the problem is incomplete cycles, the stress
//        cycle has a beginning AND END, real recovery practices
// VOICE: Terra = grounded, honest about stress being normal, models healthy
//        recovery as wolf wisdom
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-07`,
      title: `Stress & Recovery`,
      duration: 18,
      xpReward: 75,
      badge: `cycle-completer`,
      badgeName: `Stress Cycle Completer`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore something every kid and adult deals with: STRESS. And the missing piece almost no one talks about: RECOVERY. Most people think stress is the problem, that they need to "reduce stress" or "stop being stressed." Researchers have learned something different and more useful. Stress isn't the real problem. The real problem is INCOMPLETE STRESS CYCLES, getting activated and never coming all the way back to calm. Today, you learn how the stress cycle actually works, and the specific practices that COMPLETE it. This is one of the most life-changing skills you can build. Take a settled breath, and let's begin.`,
          headline: `Stress & Recovery`,
          subtitle: `Stress isn't the problem. Incomplete cycles are. How to actually finish them.`,
          visual: `/ue-assets/lw/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Stress Isn't Bad. Incomplete Cycles Are.`,
          paragraphs: [
            `Here's something most kids don't know: STRESS itself isn't bad. Stress is your body's response to challenge or threat, the heart racing, the focus sharpening, the energy mobilizing. Stress is what helps you sprint when needed, focus on a test, get through a hard moment. Researcher Robert SAPOLSKY found that brief, manageable stress actually STRENGTHENS the body, like a workout that makes muscles stronger. The trouble isn't having stress responses, it's what happens AFTER, whether your body comes all the way back down to rest, or stays stuck in activation.`,
            `Here's the key insight. Stress isn't a state, it's a CYCLE. It has a beginning (activation, your body mobilizes for challenge), a middle (action or experience, you face the thing), and an END (recovery, your body comes back to rest and integrates what happened). In ancient times, completing the cycle was natural. You ran from a threat, you survived, you returned to the pack, you rested, you ate, you slept, your body finished the cycle on its own. Modern life often skips the ENDING. You stress about a test, you take the test, then you go right to homework, screens, more tasks, your body never gets the recovery signal that says "you're safe now." Over time, this builds up. Stress without recovery is what actually damages people.`,
          ],
          image: `/ue-assets/lw/l07-s1-not-bad.webp`,
          imageCaption: `Stress is normal and even helpful. Incomplete cycles (no recovery) are the real problem.`,
          vocab: [
            { word: `stress cycle`,
              definition: `The body's full response to challenge: BEGINNING (activation), MIDDLE (facing the thing), END (recovery and integration). Has to complete to be healthy. Modern life often skips the ending, leaving people stuck in chronic activation. Completing the cycle is the wellness skill most people miss.`,
              audioPrompt: `A stress cycle is the body's full response to challenge, {name}. It has a beginning, activation, the middle, facing the thing, and an end, recovery. In ancient times, completing the cycle was natural. You ran from a threat, you survived, you returned to the pack, you rested, your body finished the cycle. Modern life often skips the ending. You stress about a test, you take it, then you go right to homework, screens, more tasks. Your body never gets the recovery signal. Stress without recovery is what actually damages people.` },
            { word: `stress response`,
              definition: `Your body's automatic preparation for challenge. Heart speeds up, breathing quickens, muscles tense, focus sharpens, energy mobilizes. Designed to help you handle real challenges. Brief, manageable stress even strengthens the body. The trouble isn't having a stress response — it's getting activated without ever coming back to rest.`,
              audioPrompt: `A stress response is your body's automatic preparation for challenge, {name}. Heart speeds up, breathing quickens, muscles tense, focus sharpens, energy mobilizes. It's designed to help you handle real challenges, a tough game, an important test, a hard moment, danger. Researcher Robert Sapolsky found that brief, manageable stress actually strengthens the body, like a workout that makes muscles stronger. The trouble isn't having stress responses. It's getting activated without ever coming all the way back to rest and recovery.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Recovery Is the Missing Piece`,
          paragraphs: [
            `Researchers Emily and Amelia NAGOSKI wrote a book on this called "Burnout," and they found that the BIGGEST mistake people make with stress is thinking that DEALING WITH THE STRESSOR is the same as dealing with the STRESS itself. They're not. The "stressor" is the thing you're stressed about (the test, the conflict, the worry). The "stress" is what's happening in your BODY (the activation, the racing heart, the tense muscles). When you take the test, you handle the stressor. But the STRESS in your body doesn't automatically go away just because the stressor did. It needs its own recovery process.`,
            `This is why people often feel "off" or exhausted even after a stressful thing ends. Their bodies are still holding the activation, still in alert mode (L06!), even though the actual challenge is over. Without active recovery, the next stressor stacks on top of the unfinished one. Over weeks and months, this stacking creates what researchers call ALLOSTATIC LOAD, the wear and tear on the body from incomplete stress cycles. It shows up as poor sleep, frequent illness, low mood, fatigue, focus problems, body pain. The good news, you can complete the cycle on purpose. Specific practices SIGNAL to your body "the danger is past, you're safe now," which lets your nervous system come all the way back to rest. Those practices are what we're learning today.`,
          ],
          image: `/ue-assets/lw/l07-s2-recovery.webp`,
          imageCaption: `Handling the stressor isn't the same as recovering from the stress. Recovery is the missing piece.`,
          vocab: [
            { word: `recovery`,
              definition: `The active practices that complete a stress cycle and bring your body all the way back to rest. NOT the same as just "ending the stressful thing." The body needs specific signals (movement, breath, connection, comfort) to release the stress and return to baseline.`,
              audioPrompt: `Recovery is the active practices that complete a stress cycle and bring your body back to rest, {name}. Researchers Emily and Amelia Nagoski found that the biggest mistake people make is thinking dealing with the stressor is the same as dealing with the stress. They're not. The stressor is the thing stressing you. The stress is what's happening in your body. Even after the stressor ends, your body needs its own recovery process. Without it, stress stacks up over time, causing what researchers call allostatic load, real wear and tear.` },
            { word: `allostatic load`,
              definition: `The wear and tear on your body from incomplete stress cycles stacking up over time. Shows up as poor sleep, frequent illness, low mood, fatigue, focus problems, and body pain. What actually damages people isn't stress itself — it's stress without recovery, accumulated over weeks and months.`,
              audioPrompt: `Allostatic load is the wear and tear on your body from incomplete stress cycles stacking up over time, {name}. When stressors keep coming and the body never fully recovers between them, the damage accumulates. It shows up as poor sleep, frequent illness, low mood, fatigue, focus problems, and body pain. This is what actually damages people, not stress itself, but stress without recovery. The body is designed to handle challenge. It's not designed to be chronically activated with no rest.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Practices That Complete a Cycle`,
          paragraphs: [
            `Here are the specific practices researchers have found that COMPLETE the stress cycle. They work because they signal to your body "the danger is over, you can settle now." First, MOVEMENT. Specifically, moving in a way that COMPLETES the activated energy. Your body geared up to run or fight, so giving it some real movement (a brisk walk, jumping, dancing, sports, even running up stairs) releases the stress chemicals and signals safety. Even 20-30 minutes of movement makes a huge difference. Second, SLOW BREATHING (L05!). Slow exhales for several minutes activate the parasympathetic nervous system (L06!) directly. Especially useful when you can't move (in class, in a car, in bed).`,
            `Third, CONNECTION. Hugs, laughter, talking with someone you trust, even being near a calm person (L06's co-regulation!). Researchers found that genuine social connection is one of the most powerful stress-cycle completers known. Fourth, CRYING (when you need it). Real crying releases stress hormones and helps your body process big experiences. Not forced or performed, just letting tears come when they want to. Fifth, CREATIVE EXPRESSION. Drawing, writing, music, dance, building things, any way of expressing what's inside helps your body process and release. Sixth, REST AND SLEEP (L02!). Deep sleep is when your body does final stress processing. None of these need to be perfect or long. Even small amounts of each, used as you need them, complete cycles and keep you flowing back to rest. The kid who builds these tools never lets stress fully pile up.`,
          ],
          image: `/ue-assets/lw/l07-s3-practices.webp`,
          imageCaption: `Cycle completers: movement, slow breath, connection, crying, creative expression, sleep.`,
          vocab: [
            { word: `cycle completers`,
              definition: `Specific practices that signal to your body "the stress is over, you can settle." Movement, slow breath, connection, crying, creative expression, sleep. Each helps your nervous system finish a stress cycle instead of staying stuck in activation.`,
              audioPrompt: `Cycle completers are specific practices that signal to your body the stress is over and you can settle, {name}. Movement, slow breath, connection (hugs, laughter, talking with trusted people), crying when you need it, creative expression like drawing or writing or music, and rest and sleep. Each helps your nervous system finish a stress cycle. None need to be perfect or long. Even small amounts, used as needed, complete cycles and keep you flowing back to rest. The kid who builds these tools never lets stress fully pile up.` },
            { word: `creative expression`,
              definition: `Using art, writing, music, drawing, building, or any form of making something to process and release what's inside you. One of the most effective cycle completers. Helps the nervous system move from activation toward rest. You don't need to be talented — just express what's there.`,
              audioPrompt: `Creative expression is using art, writing, music, drawing, building, or any form of making something to process and release what's inside you, {name}. When something hard or heavy has happened, putting it into a creative form helps your nervous system process and integrate the experience. Researchers studying stress recovery have found that creative expression is one of the most effective cycle completers. It helps the body move from activation toward rest. You don't need to be talented. Just express what's there.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building Recovery Into Your Real Life`,
          paragraphs: [
            `Here's the practical truth: your life will keep producing stress. Tests, conflicts, hard days, big feelings, real challenges. You can't avoid stress, but you CAN make recovery a non-negotiable part of your day. Researchers have found that even small recovery moments WOVEN throughout the day work better than trying to "save up" rest for weekends. Five minutes of slow breathing after a hard test. A few minutes of stretching after a stressful conversation. A hug from a parent after a tough school moment. A few songs and dancing in your room when you're wound up. A real conversation with a friend when something is heavy.`,
            `These aren't "extras," they're MAINTENANCE for a healthy nervous system. The mistake many adults make is treating recovery as something to do "when there's time," which usually means never. Then they wonder why they feel burned out. The kid who learns to weave recovery into daily life avoids this trap entirely. Terra's first teaching about stress: stress isn't the enemy. Stress without recovery is. Make recovery a daily practice, small and consistent. Move your body, breathe slowly, connect with people you love, cry when you need to, create, sleep well. Your nervous system will keep flowing between activation and rest the way it's designed to. And life, which will keep being challenging, will become handle-able in a way that doesn't damage you. This is one of the deepest wellness skills there is, and you're learning it at the perfect age.`,
          ],
          image: `/ue-assets/lw/l07-s4-real-life.webp`,
          imageCaption: `Weave small recovery moments into every day. Maintenance, not optional extras.`,
          vocab: [
            { word: `recovery as maintenance`,
              definition: `The mature understanding that recovery isn't a luxury or "extra," it's daily maintenance for a healthy nervous system. Small recovery moments woven through your day work better than saving rest for weekends. The skill that prevents burnout across a lifetime.`,
              audioPrompt: `Recovery as maintenance is the mature understanding that recovery isn't a luxury or extra, {name}. It's daily maintenance for a healthy nervous system. Small recovery moments woven through your day work better than trying to save up rest for weekends. Five minutes of slow breathing after a hard test. Stretching after a stressful conversation. A hug after a tough moment. Dancing in your room when wound up. These aren't extras. The practice prevents burnout across a lifetime. The kid who weaves recovery into daily life avoids the burnout trap.` },
            { word: `burnout`,
              definition: `What happens when stress accumulates without enough recovery over a long period of time. The body and mind reach deep exhaustion where even rest doesn't feel restoring. Builds slowly, often without notice. Consistent small daily recovery practices prevent it — the kid who recovers daily rarely burns out.`,
              audioPrompt: `Burnout is what happens when stress accumulates without enough recovery over a long period of time, {name}. The body and mind reach a state of deep exhaustion where even rest doesn't feel restoring. Researchers studying burnout find it builds slowly, often in people who push through stress without completing cycles, week after week. Most burnout victims don't notice it coming until it's already here. The good news: consistent small recovery practices prevent it. The kid who learns to recover daily rarely burns out.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put completing a stress cycle in order, {name}. Here are five steps of moving through a stress moment all the way to recovery, scrambled. Use the arrows to arrange them from FIRST (when the stress starts) to LAST (full return to baseline). This is the real practice.`,
          items: [
            { id: `step-notice`,    label: `NOTICE THE ACTIVATION. Recognize the body signs (racing heart, tense muscles, shallow breath, racing thoughts)`,                          position: 1 },
            { id: `step-release`,   label: `RELEASE THE ENERGY. Movement (walking, jumping, dancing) OR slow exhale breathing to signal safety`,                                       position: 2 },
            { id: `step-seek`,      label: `SEEK COMFORT. Co-regulation with a calm person, a hug, talking with someone trusted, a pet, gentle touch`,                                position: 3 },
            { id: `step-process`,   label: `PROCESS THE EXPERIENCE. Let yourself feel what came up. Cry if needed. Talk about it. Draw or write about it. Let emotions move through`,  position: 4 },
            { id: `step-return`,    label: `RETURN TO BASELINE. Slow breath, settle into rest mode. The cycle is complete. You're back at calm and ready for the next thing`,         position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of completing a stress cycle: notice the activation, release the energy through movement or breath, seek comfort and connection, process the experience, and return to baseline. Practice this. Your nervous system will thank you. Most adults never learn this. You have it now.`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l07-q1`, format: `true-false`,
              question: `True or false: Stress itself is bad and should be avoided as much as possible.`,
              correctAnswer: false,
              explanation: `False. Stress itself isn't bad. Brief, manageable stress actually STRENGTHENS the body. The real problem isn't having stress responses, it's INCOMPLETE STRESS CYCLES, getting activated and never coming all the way back to recovery and calm.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `What's a STRESS CYCLE?`,
              options: [
                `Endless suffering`,
                `The body's full response to challenge. BEGINNING (activation), MIDDLE (facing the thing), END (recovery). Has to complete to be healthy`,
                `Just feeling bad`,
                `Only adults have them`,
              ],
              correctIndex: 1,
              explanation: `A stress cycle has a beginning (activation), middle (facing the challenge), and end (recovery). In ancient times, the cycle completed naturally. Modern life often skips the ending. The body never gets the "you're safe now" signal. Completing the cycle is the wellness skill most people miss.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `What did researchers Emily and Amelia NAGOSKI discover about stress?`,
              options: [
                `Stress is impossible to handle`,
                `Dealing with the STRESSOR isn't the same as dealing with the STRESS. Even after the stressful thing ends, the stress in your body needs its own recovery process`,
                `Stress doesn't exist`,
                `Only adults experience stress`,
              ],
              correctIndex: 1,
              explanation: `The Nagoski sisters found that dealing with the stressor (the thing you're stressed about) isn't the same as dealing with the stress (what's happening in your body). Even after the stressful situation ends, your body's stress response needs its own recovery to fully complete the cycle.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `What is ALLOSTATIC LOAD?`,
              options: [
                `A type of food`,
                `The wear and tear on your body from INCOMPLETE stress cycles stacking up over time. Shows as poor sleep, illness, low mood, fatigue, focus issues`,
                `Body weight`,
                `Imaginary`,
              ],
              correctIndex: 1,
              explanation: `Allostatic load is the wear and tear on your body from incomplete stress cycles stacking up over time. Shows as poor sleep, frequent illness, low mood, fatigue, focus problems, body pain. The actual damage isn't from stress, it's from never recovering between stressors.` },

            { id: `l07-q5`, format: `multiple-choice`,
              question: `What are the REAL practices that complete a stress cycle?`,
              options: [
                `Push through, ignore feelings`,
                `MOVEMENT, slow BREATHING, CONNECTION, CRYING when needed, CREATIVE EXPRESSION, REST and SLEEP. They signal "the danger is over, settle now"`,
                `Eat more sugar`,
                `More screens`,
              ],
              correctIndex: 1,
              explanation: `Real cycle completers: MOVEMENT (releases activated energy), slow BREATHING (signals safety), CONNECTION (hugs, talking, co-regulation), CRYING when needed (releases stress hormones), CREATIVE EXPRESSION (drawing, writing, music), and REST/SLEEP. Each helps the body finish the cycle.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `Why is MOVEMENT so powerful for completing the stress cycle?`,
              options: [
                `It burns calories`,
                `Your body geared up to RUN or FIGHT, so movement RELEASES the stress chemicals and signals safety. Even 20-30 minutes makes a huge difference`,
                `Random reason`,
                `It doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Movement is powerful because your body's stress response prepared you to run or fight. Real movement releases the activated stress chemicals and signals "you survived, you're safe now." Even 20-30 minutes (a brisk walk, dancing, sports) makes a huge difference.` },

            { id: `l07-q7`, format: `true-false`,
              question: `True or false: Small recovery moments throughout the day work better than "saving up" rest for the weekend.`,
              correctAnswer: true,
              explanation: `True. Small recovery moments WOVEN throughout your day work better than trying to save rest for weekends. Five minutes of slow breathing after a test. A hug after a hard moment. Dancing when wound up. Weaving these in prevents stress from piling up.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about stress?`,
              options: [
                `Avoid all stress`,
                `Stress isn't the enemy. Stress WITHOUT RECOVERY is. Make recovery a daily practice, small and consistent. Your nervous system will keep flowing the way it's designed to`,
                `Stress is your fault`,
                `Ignore your body`,
              ],
              correctIndex: 1,
              explanation: `Stress isn't the enemy. Stress without recovery is. Make recovery a daily practice, small and consistent. Move, breathe slowly, connect, cry when needed, create, sleep well. Your nervous system will keep flowing between activation and rest the way it's designed to. Life will keep being challenging, but it becomes handleable.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Take a slow, full breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest, when something stressful ends for you, do you actively RECOVER, or do you just move on to the next thing?` },
            { id: `r2`, text: `What's a recent stressful moment where you DIDN'T complete the cycle? What might have helped you finish it?` },
            { id: `r3`, text: `Of the cycle completers (movement, slow breath, connection, crying, creative expression, sleep), which one feels most natural for YOU?` },
            { id: `r4`, text: `What's ONE small recovery practice you could weave into your daily life this week (a few slow breaths after school, a walk after a hard moment, a hug from a parent)?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Stress research is some of the most important work in modern health science. Studies have linked CHRONIC INCOMPLETE STRESS CYCLES (not stress itself) to almost every long-term health issue: heart disease, immune system problems, depression, anxiety, gut issues, sleep problems. The good news is the opposite is also true: people who actively complete stress cycles, through movement, connection, breath, creative expression, sleep, have remarkably better health and emotional well-being across decades. Terra's note: most adults never learn that recovery is the missing piece. They try to white-knuckle through stress, "just deal with it," "push through." Then they burn out, get sick, or struggle emotionally without quite knowing why. You're learning at the perfect age that completing cycles isn't optional, it's how your body is designed to work. Move when you're activated. Breathe when you can't move. Connect when you're overwhelmed. Cry when you need to. Create when something needs to come out. Sleep when your body asks. Do this and stress becomes a flow, not a trap.`,
          familyAdventure: `Family Recovery Practice. As a family, after dinner each evening this week, take 5-10 minutes to do something recovery-oriented together. Maybe a walk around the block. Maybe a few minutes of stretching while talking about your days. Maybe sitting quietly and listening to a calm song. Maybe a board game or art project. The goal: weave a daily recovery moment into your family rhythm. Adults model the practice too. After a week, notice if the whole family feels calmer, more connected, sleeping better. Recovery as a family habit transforms how everyone handles stress.`,
          creativePrompt: {
            intro: `Write about a recent stressful experience and either how you completed the cycle, or how you could have.`,
            floor: `Write at least 5 sentences. Describe the stress and the recovery (real or imagined).`,
            stretch: `Write 8 to 10 sentences. Show the full cycle, activation, facing the thing, and active recovery.`,
            open: `Write as much as you want. Write a full piece about a recent stress experience and the stress cycle. Set the scene: what was stressful, what was happening in your body (activation signs), how it ended (or hasn't yet). Then either describe the recovery you actually did, OR describe the recovery you would do now using the cycle completers (movement, slow breath, connection, crying, creative expression, sleep). Reflect on the difference between dealing with the stressor and recovering from the stress itself. End with a commitment to building recovery into your daily life as maintenance, not as something extra. Make it specific, kind, and honest.`,
            frames: [
              `The stressful experience was ___.`,
              `My body signs of activation were ___.`,
              `What I did (or wish I had done) for recovery was ___.`,
              `Dealing with the stressor vs. recovering from the stress was different because ___.`,
              `My commitment to daily recovery is ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Deep, important work, {name}. You now understand the wellness insight most adults never learn: stress isn't the enemy, INCOMPLETE CYCLES are. You know the stress cycle, the difference between handling the stressor and recovering from the stress, the cycle completers (movement, slow breath, connection, crying, creative expression, sleep), and the truth that small daily recovery is maintenance, not extra. Practice this. Your whole life will be different. Next, we look honestly at something that affects most kids today, SCREENS. The real science of what they do to your brain, and how to use them wisely. SCREEN TIME & YOUR BRAIN. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `cycle-completer`,
          badgeName: `Stress Cycle Completer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L07 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
