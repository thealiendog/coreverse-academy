// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L11 — Mental Health: It's Okay to Not Be Okay
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L11 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-11`,
      title:     `Mental Health: It's Okay to Not Be Okay`,
      duration:  12,
      xpReward:  50,
      badge:     `mental-wellness`,
      badgeName: `Mental Wellness`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Here's something true that doesn't get said enough, {name}: everyone has mental health. Not just people who are struggling — everyone. Just like everyone has physical health, which can be strong or fragile, thriving or under pressure. Today we're going to talk about mental health honestly and practically. What does it actually mean? What affects it? What does it look like when it's under strain? And most importantly — what can you do to look after yours? This might be one of the most important lessons in our whole journey together, and I'm really glad we're doing it. Let's begin.`,
          headline: `Mental Health: It's Okay to Not Be Okay`,
          subtitle: `Mental health is something everyone has — and like physical health, it needs care. Understanding it gives you real tools to look after yourself and the people you love`,
          visual: `/explorer-assets/wellness/l11-welcome.png`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What is mental health?`,
          paragraphs: [
            `Mental health refers to your **emotional, psychological, and social wellbeing** — how you think, feel, and behave. Good mental health doesn't mean being happy all the time. It means being able to manage life's challenges, maintain meaningful relationships, learn and work effectively, and cope with difficult emotions without being overwhelmed. Mental health exists on a **spectrum** — everyone moves up and down on it throughout their lifetime, depending on what they're experiencing and how they're coping. Just like physical health, everyone has mental health — and it changes.`,
          ],
          image: `/explorer-assets/wellness/l11-magazine-1.png`,
          imageCaption: `Mental health is a spectrum — everyone moves up and down on it depending on what they're experiencing`,
          vocab: [
            { word: `wellbeing`, definition: `Your overall state of emotional, psychological, and social health — including how you feel, think, cope with challenges, and connect with the people around you.`, audioPrompt: `Wellbeing is bigger than just mood, {name}. It's how you're doing across all the dimensions of your inner life: your emotional balance, your sense of meaning, your ability to cope when things are hard, your connection to others. Good wellbeing doesn't mean everything is perfect. It means you have the resources to navigate what isn't.` },
            { word: `spectrum`, definition: `A continuous range rather than a fixed point — mental health exists on a spectrum, meaning everyone moves up and down on it across their lifetime depending on circumstances.`, audioPrompt: `Mental health isn't something you either have or don't have, {name}. It's a spectrum — a continuous range — and everyone is somewhere on it, and that place shifts over time. Hard periods move you in one direction; good support, rest, and connection move you in the other. Understanding this takes away shame, because wherever you are right now, it's not permanent.` },
            { word: `cope`, definition: `To manage and work through difficult emotions or situations — good mental health means being able to cope with life's challenges, not avoiding hard feelings altogether.`, audioPrompt: `Coping doesn't mean never struggling, {name}. It means having ways to work through the struggles when they come. Movement, breathing, talking to someone you trust, getting enough sleep, expressing yourself — these are all forms of coping. Building them before you need them is the smartest thing you can do for your mental health. They're the tools that help you keep going.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Common mental health experiences in kids`,
          paragraphs: [
            `Common mental health experiences in children your age: **anxiety** (worry that feels bigger than the situation, physical symptoms, avoiding things), **low mood** (persistent low energy, loss of interest in things you used to enjoy), **attention difficulties** (trouble focusing or acting before thinking), and **intense fears** about specific situations or things. These are not character flaws or signs of weakness. They are real experiences that deserve care — the same way a broken arm deserves care. Many children experience these things at some point, and support genuinely helps.`,
          ],
          image: `/explorer-assets/wellness/l11-magazine-2.png`,
          imageCaption: `These experiences are real, common, and deserve care — they are not character flaws`,
          vocab: [
            { word: `anxiety`, definition: `Worry that feels bigger than the situation warrants — often accompanied by physical symptoms like a racing heart or stomach ache, and sometimes leading to avoiding things that feel frightening.`, audioPrompt: `Anxiety is more than just being nervous, {name}. It's when worry starts to feel bigger than the situation actually calls for — when your brain keeps running worst-case scenarios even when you try to stop it. It often shows up in your body too: tight chest, fast heartbeat, stomach discomfort. These experiences are real, they're common, and they deserve care.` },
            { word: `low mood`, definition: `A persistent state of low energy and reduced interest in things you usually enjoy — different from ordinary sadness, and worth paying attention to when it lasts more than a few days.`, audioPrompt: `Low mood is different from just having a bad day, {name}. It's when the flatness persists — when things you usually enjoy stop feeling enjoyable, when energy stays low, when it's hard to feel much of anything positive. If that feeling lasts more than a couple of weeks, it's a signal worth taking seriously and talking to someone about. It doesn't have to be carried alone.` },
            { word: `support`, definition: `Help from other people — whether from a trusted adult, a counselor, or a therapist — that makes a real difference when mental health is under strain.`, audioPrompt: `Support genuinely changes outcomes, {name}. When mental health is under strain, being heard by someone who cares — a parent, a teacher, a counselor — can shift things in ways that going it alone cannot. Asking for support is an act of wisdom, not weakness. Terra believes that with everything in her: reaching out is one of the bravest things a person can do.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Taking care of your mental health`,
          paragraphs: [
            `Mental health maintenance looks a lot like physical health maintenance. **Regular movement** — one of the most effective mood-lifters your body has access to. **Consistent sleep** — foundational for emotional regulation; everything feels harder when you're not rested. **Social connection** — being around people who care about you genuinely supports how you feel. **Nourishing your body well** — what you eat affects your brain and mood. **Having outlets for expression** — art, music, journaling, sport, conversation — ways of getting what's inside you outside. And **practising breathing or mindfulness** — which builds the capacity to notice and manage emotions rather than being swept along by them. These aren't cures — they're the habits that build resilience before you need it.`,
          ],
          image: `/explorer-assets/wellness/l11-magazine-3.png`,
          imageCaption: `Movement, sleep, connection, nourishment, expression, and breathing — the habits that build resilience`,
          vocab: [
            { word: `resilience`, definition: `The ability to recover from setbacks and adapt to hard things — built gradually through the daily habits that support your mental and physical health.`, audioPrompt: `Resilience isn't about never struggling, {name}. It's about having the inner resources to keep going when things are hard. Movement, sleep, nourishment, connection, expression — these aren't just individual habits. They're the foundation of resilience. You build it in the ordinary days, so it's there when the hard ones arrive.` },
            { word: `outlet`, definition: `A way of expressing or releasing what's happening inside you — art, music, journaling, sport, or conversation that gets difficult feelings outside instead of keeping them in.`, audioPrompt: `An outlet is how you move what's inside you outside, {name}. Difficult feelings don't disappear when you suppress them — they stay in your body and grow heavier. Finding your outlet — whether it's drawing, running, writing, music, or talking — is one of the most important things you can do for your mental health. Everyone needs somewhere for feelings to go.` },
            { word: `regulate`, definition: `To manage and adjust your emotional state — the ability to notice, work with, and return from difficult emotions rather than being overwhelmed by them.`, audioPrompt: `Emotional regulation is a skill, {name} — one that gets better with practice. It doesn't mean never feeling big emotions. It means being able to notice what you're feeling, not be swept completely away by it, and find your way back to steadiness. Breathing, movement, sleep, and talking to someone you trust are all ways of supporting that regulation.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When to ask for help`,
          paragraphs: [
            `It's time to talk to a trusted adult or professional when: you feel sad, anxious, or angry most of the time for **more than two weeks**; these feelings are getting in the way of school, friendships, or family; or when you find yourself doing things that don't really help, or you just can't shake a heavy feeling on your own. You don't have to wait for a crisis. **Therapy is a tool many people use** — not just when something is wrong, but to help them understand themselves and grow. Asking for support is strength, not weakness. If you need someone to talk to, a trusted adult — a parent, teacher, school counsellor — is always a good place to start.`,
          ],
          image: `/explorer-assets/wellness/l11-magazine-4.png`,
          imageCaption: `You don't have to wait for a crisis — asking for support is strength, not weakness`,
          vocab: [
            { word: `therapy`, definition: `A professional space to talk through feelings, build coping tools, and understand yourself better — useful for anyone, not only people in crisis.`, audioPrompt: `Therapy is a tool, {name} — not a last resort. Many people use it regularly as part of how they take care of their mental health, the same way others exercise or practice breathing. A therapist gives you a safe, private space to understand what you're feeling, build new tools, and work through things that feel stuck. It's an act of care, not a sign something is broken.` },
            { word: `trusted adult`, definition: `A safe, caring adult in your life — a parent, teacher, school counselor, or other person — who is a good first step when mental health feels hard to manage alone.`, audioPrompt: `A trusted adult is someone who makes you feel safe enough to be honest, {name}. A parent, a teacher, a school counselor — someone who will listen without judgment and help you figure out what comes next. You don't have to have everything figured out before you talk to them. You just have to start the conversation. That first step is always the most important one.` },
            { word: `stigma`, definition: `Negative beliefs or shame attached to mental health struggles — which discourages people from getting the help they need, and which is reduced by open, honest conversations like this one.`, audioPrompt: `Stigma is what happens when mental health struggles are treated as something shameful or weak, {name}. It's what keeps people suffering in silence when support would genuinely help. Every honest conversation about mental health — like this lesson — chips away at stigma. Your willingness to learn about this and talk about it openly matters. It's how things change.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `builds`,
              label: `🌱 Builds Your Emotional Wellbeing`,
              color: `#34D399`,
            },
            {
              id: `harder`,
              label: `😓 Makes Emotional Wellbeing Harder`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l11-g1`,
              image: `l11-game-1.png`,
              label: `Talking to a trusted person when something feels too heavy to carry on your own.`,
              matchPhrase: `Sharing what you're carrying — even just naming it out loud to someone you trust — genuinely lightens the load. You were not designed to carry everything alone.`,
              correctMatch: `builds`,
            },
            {
              id: `l11-g2`,
              image: `l11-game-2.png`,
              label: `Getting enough sleep and staying active, even on the harder days.`,
              matchPhrase: `Sleep and movement are two of the most powerful things your body has for supporting how you feel — both are worth protecting even when it's not easy.`,
              correctMatch: `builds`,
            },
            {
              id: `l11-g3`,
              image: `l11-game-3.png`,
              label: `Keeping all your worries inside and pretending everything is fine.`,
              matchPhrase: `Unexpressed feelings don't disappear — they stay in your body and mind, often growing heavier over time. Finding a way to name or express them is usually the first step towards feeling better.`,
              correctMatch: `harder`,
            },
            {
              id: `l11-g4`,
              image: `l11-game-4.png`,
              label: `Pulling away from friends and activities you usually enjoy when you're feeling low.`,
              matchPhrase: `Isolation often feels like what you need when you're struggling — but connection and movement are usually what actually help. Staying in when things are hard can make the heavy feelings last longer.`,
              correctMatch: `harder`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l11-q1`,
              format: `multiple-choice`,
              question: `What does good mental health actually mean?`,
              options: [
                `Never feeling sad, anxious, or angry`,
                `Being able to manage challenges, maintain relationships, and cope with difficult emotions — not being happy all the time`,
                `Having no mental health experiences ever diagnosed by a doctor`,
                `Feeling positive and optimistic every single day`,
              ],
              correctIndex: 1,
              explanation: `Good mental health is not the absence of difficult feelings — it's the capacity to manage them without being overwhelmed. Everyone experiences sadness, anxiety, and hard emotions. The difference is whether you have the tools and support to move through them.`,
            },
            {
              id: `l11-q2`,
              format: `multiple-choice`,
              question: `Are anxiety and low mood character flaws or signs of weakness?`,
              options: [
                `Yes — people with strong character don't struggle with their mental health`,
                `No — they are real experiences that deserve care, the same way physical conditions deserve care`,
                `Sometimes — it depends on how long they last`,
                `Only anxiety is a real condition — low mood is usually a choice`,
              ],
              correctIndex: 1,
              explanation: `Anxiety and low mood are real experiences with real effects on the brain and body — not signs of weak character. They deserve the same care and compassion as any physical health challenge. Understanding this removes shame, and removing shame is what makes it easier to ask for help.`,
            },
            {
              id: `l11-q3`,
              format: `multiple-choice`,
              question: `When should you talk to a trusted adult about how you're feeling?`,
              options: [
                `Only when you feel unable to go to school at all`,
                `When difficult feelings last more than two weeks, interfere with daily life, or when you can't shake a heavy feeling on your own`,
                `Only after trying to manage it yourself for at least a month`,
                `Only when your grades start dropping`,
              ],
              correctIndex: 1,
              explanation: `You don't have to wait until things are at their worst. Two weeks of persistent difficult feelings — or feelings that are getting in the way of your everyday life — is a meaningful signal that you deserve some support. Reaching out early is always better than waiting.`,
            },
            {
              id: `l11-q4`,
              format: `true-false`,
              question: `Good mental health doesn't mean feeling happy all the time — it means being able to handle life's challenges and stay connected to the people you care about.`,
              correctAnswer: true,
              explanation: `True. Mental health is not about a permanent state of happiness — it's about the capacity to cope, connect, and keep going even through difficulty. Everyone has hard days, periods of worry, and moments of low mood. What matters is having tools and support to move through them.`,
            },
            {
              id: `l11-q5`,
              format: `fill-blank`,
              question: `Mental health exists on a ___ — everyone moves up and down on it throughout their life depending on what they're experiencing and how they're coping.`,
              options: [
                `spectrum`,
                `scale`,
                `chart`,
                `level`,
              ],
              correctIndex: 0,
              explanation: `Mental health is not binary — you don't either "have" good mental health or not. It's a spectrum, and everyone moves along it depending on life circumstances, support, and coping strategies. Understanding this makes it easier to notice when you're struggling and take action before things get harder.`,
            },
            {
              id: `l11-q6`,
              format: `multiple-choice`,
              question: `What makes therapy a useful tool even for people who aren't going through a crisis?`,
              options: [
                `It provides medication that helps regulate mood`,
                `It is a tool for understanding yourself and growing — anyone can benefit from it, not just people who are seriously struggling`,
                `It is only useful for people who have been diagnosed with a mental health condition`,
                `It can replace all the other mental health habits like sleep and movement`,
              ],
              correctIndex: 1,
              explanation: `Therapy is not just crisis support — it's a space to understand yourself better, build tools for managing emotions, and work through things that feel stuck. Many people use it as a regular part of looking after themselves, not only during difficult periods.`,
            },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Mental health awareness has grown significantly in recent years — sports stars, musicians, and leaders have spoken openly about their experiences to help reduce stigma. The science is clear: looking after your mental health is not a sign of weakness. It's one of the most important things you can do for your whole life.`,
          familyAdventure: `Create a family mental health agreement: a set of shared commitments about how you'll support each other. We will check in with each other regularly. We will listen without judgment. We will not shame anyone for struggling. We will ask for help when we need it. We will take mental health as seriously as physical health. Write it down somewhere visible.`,
          creativePrompt: `Take a quiet moment today and check in with yourself honestly: How is my energy? My mood? Am I enjoying things I usually like? Am I sleeping okay? Do I feel connected to people I care about? Notice which areas feel lower — those are worth giving a little more care.`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that mental health is just as real and important as physical health — and that how you feel inside genuinely matters and deserves care. Asking for support when you need it is one of the bravest and wisest things you can ever do. Terra is so proud to walk this path with you.`,
          badge: `mental-wellness`,
          badgeName: `Mental Wellness`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L11.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L11] Loaded: "Mental Health: It's Okay to Not Be Okay" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l11-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L11] One or more magazine assets missing'));
}
