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
          headline: `Everyone Has Mental Health`,
          paragraphs: [
            `Here's something that doesn't get said enough: everyone has mental health.`,
            `Not just people who are struggling — EVERYONE. Just like everyone has physical health. It can be strong or fragile, thriving or under pressure.`,
          ],
          image: `/explorer-assets/wellness/l11-s1-everyone-has.png`,
          imageCaption: `Mental health isn't just for people who are struggling. Everyone has it. Everyone's changes over time. Everyone deserves care for theirs.`,
          vocab: [
            { word: `mental health`,   definition: `Your emotional, psychological, and social wellbeing. How you think, feel, and behave — and everyone has it.`,
              audioPrompt: `Mental health is something everyone has, {name} — not just people who are struggling. It's how you think, how you feel, how you handle stress, how you connect with people. Just like physical health, it can be strong or fragile, thriving or under strain. Knowing this is the first step to caring for yours the way it deserves.` },
            { word: `physical health`, definition: `Your body's condition. Connected closely to mental health — what happens in one affects the other.`,
              audioPrompt: `Physical and mental health are more connected than people realize, {name}. When you sleep well, your mood lifts. When you move your body, anxiety often eases. When you're chronically stressed, your immune system weakens. They're not two separate systems — they're the same system, working together. Caring for one is caring for both.` },
            { word: `wellbeing`,       definition: `How well you're actually doing overall — including emotionally, mentally, and socially. Bigger than just being happy.`,
              audioPrompt: `Wellbeing is bigger than just mood, {name}. It's how you're doing across all the dimensions of your inner life: your emotional balance, your sense of meaning, your ability to cope when things are hard, your connection to others. Good wellbeing doesn't mean everything is perfect. It means you have the resources to navigate what isn't.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `A Spectrum, Not a Label`,
          paragraphs: [
            `Mental health isn't something you either have or don't have.`,
            `It's a SPECTRUM. Everyone moves up and down on it throughout life — depending on what they're experiencing. Wherever you are right now, it's not permanent.`,
          ],
          image: `/explorer-assets/wellness/l11-s2-spectrum.png`,
          imageCaption: `Up and down. Through hard seasons and easier ones. Everyone moves. Where you are today isn't where you'll always be.`,
          vocab: [
            { word: `spectrum`, definition: `A continuous range. Mental health exists on a spectrum — everyone is somewhere on it, and that place shifts over time.`,
              audioPrompt: `Mental health isn't something you either have or don't have, {name}. It's a spectrum — a continuous range — and everyone is somewhere on it, and that place shifts over time. Hard periods move you in one direction; good support, rest, and connection move you in the other. Understanding this takes away shame, because wherever you are right now, it's not permanent.` },
            { word: `moves`,    definition: `What mental health does. It changes — based on circumstances, support, and how much care you're giving it.`,
              audioPrompt: `Your place on the mental health spectrum moves, {name}. Stress can push it one way. Sleep, connection, support, and time can push it back. Knowing this means you don't have to panic about a hard week or a tough season. It also means staying still doesn't keep you safe — care does.` },
            { word: `normal`,   definition: `Shifts in mental health are a normal part of being human. Not a sign something's wrong — just a sign you're a person.`,
              audioPrompt: `It's completely normal to have weeks where mental health feels harder, {name} — and other weeks where it feels easier. That movement isn't a malfunction. It's part of being alive. Big events, hormones, sleep changes, hard seasons — all of them shift where you are. The shift itself is normal. What matters is having tools and people you can lean on when the shift goes downward.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What It Can Look Like`,
          paragraphs: [
            `When mental health is under strain, common experiences include:`,
            `ANXIETY (worry that feels bigger than the situation, physical symptoms). LOW MOOD (persistent low energy, loss of interest). These aren't character flaws. They're real experiences that deserve care.`,
          ],
          image: `/explorer-assets/wellness/l11-s3-what-it-looks-like.png`,
          imageCaption: `These experiences are real, common, and not character flaws. The same way a broken arm deserves care, so does what you're feeling.`,
          vocab: [
            { word: `anxiety`,  definition: `Worry that feels bigger than the situation. Often comes with physical symptoms — racing heart, stomachache. Real, common, deserves care.`,
              audioPrompt: `Anxiety is more than just being nervous, {name}. It's when worry starts to feel bigger than the situation actually calls for — when your brain keeps running worst-case scenarios even when you try to stop it. It often shows up in your body too: tight chest, fast heartbeat, stomach discomfort. These experiences are real, they're common, and they deserve care.` },
            { word: `low mood`, definition: `Persistent flatness and reduced interest in things you usually enjoy. Different from a bad day — worth attention when it lasts.`,
              audioPrompt: `Low mood is different from just having a bad day, {name}. It's when the flatness persists — when things you usually enjoy stop feeling enjoyable, when energy stays low, when it's hard to feel much of anything positive. If that feeling lasts more than a couple of weeks, it's a signal worth taking seriously and talking to someone about. It doesn't have to be carried alone.` },
            { word: `valid`,    definition: `Real and worthy of care. What anxiety, low mood, and other hard feelings are — not weakness, not flaws.`,
              audioPrompt: `Hard feelings are valid, {name} — meaning they're real, they matter, and they deserve to be taken seriously rather than dismissed. Nobody benefits from being told to "just snap out of it." What helps is being heard, being supported, and having tools and people you can lean on. The first step is just knowing: what you feel is real, and it matters.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Daily Habits That Help`,
          paragraphs: [
            `Mental health maintenance looks a lot like physical health maintenance.`,
            `Regular MOVEMENT. Consistent SLEEP. Time with people who care. Nourishing food. An OUTLET for expression. Daily breathing or quiet moments. None of these are cures — they're foundation.`,
          ],
          image: `/explorer-assets/wellness/l11-s4-daily-habits.png`,
          imageCaption: `The daily habits aren't dramatic. Move. Sleep. Connect. Eat. Express. Breathe. They build resilience before you need it.`,
          vocab: [
            { word: `foundation`,  definition: `The daily habits that build resilience before you need it. Not cures — the things that hold you steady.`,
              audioPrompt: `The daily habits are foundation, {name} — not last-minute rescue. Movement, sleep, connection, nourishment, expression. Each one is small on its own. Stacked together, done consistently, they build the foundation that holds you up when life gets hard. You can't pour the foundation during the storm. You pour it during the calm — so it's there when you need it.` },
            { word: `resilience`,  definition: `The ability to recover from setbacks and adapt to hard things. Built gradually through daily habits.`,
              audioPrompt: `Resilience isn't about never struggling, {name}. It's about having the inner resources to keep going when things are hard. Movement, sleep, nourishment, connection, expression — these aren't just individual habits. They're the foundation of resilience. You build it in the ordinary days, so it's there when the hard ones arrive.` },
            { word: `maintenance`, definition: `Ongoing care. What keeps mental health steady over time — not a one-time fix, but daily attention.`,
              audioPrompt: `Mental health needs maintenance the same way physical health does, {name}. Not a single dramatic action, but daily attention. The brushing-your-teeth equivalent for your mind. A few minutes of breathing. A walk outside. A real conversation. A good night's sleep. Done consistently, it changes everything. Done occasionally, it doesn't.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Don't Carry It Alone`,
          paragraphs: [
            `You weren't designed to carry everything alone.`,
            `Unexpressed feelings don't disappear — they stay heavy. Finding ways to share what you're carrying (with a friend, a parent, in art, in writing, in music) genuinely lightens the load.`,
          ],
          image: `/explorer-assets/wellness/l11-s5-dont-carry-alone.png`,
          imageCaption: `Feelings kept inside grow heavy. Feelings shared — with a person, through art, through writing — get lighter. That's not weakness. It's how humans are built.`,
          vocab: [
            { word: `outlet`,   definition: `A way to express what's inside you. Art, music, journaling, sport, conversation — somewhere for feelings to go.`,
              audioPrompt: `An outlet is how you move what's inside you outside, {name}. Difficult feelings don't disappear when you suppress them — they stay in your body and grow heavier. Finding your outlet — whether it's drawing, running, writing, music, or talking — is one of the most important things you can do for your mental health. Everyone needs somewhere for feelings to go.` },
            { word: `share`,    definition: `Telling someone you trust what you're carrying. Even just naming it out loud often makes it feel smaller.`,
              audioPrompt: `Sharing what you're feeling — even with just one trusted person — genuinely lightens the load, {name}. You don't have to have it all figured out before you talk to someone. You just have to start. "I've been feeling something heavy lately" is enough to begin. The right person will meet you there. Sharing isn't weakness. It's how humans were designed to handle hard things.` },
            { word: `regulate`, definition: `Notice, work with, and return from difficult emotions. A skill that gets better with practice.`,
              audioPrompt: `Emotional regulation is a skill, {name} — one that gets better with practice. It doesn't mean never feeling big emotions. It means being able to notice what you're feeling, not be swept completely away by it, and find your way back to steadiness. Breathing, movement, sleep, and talking to someone you trust are all ways of supporting that regulation.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `When to Reach Out`,
          paragraphs: [
            `Talk to a TRUSTED ADULT when hard feelings stay for weeks, get in the way of daily life, or feel too heavy to carry alone.`,
            `You don't have to wait for a crisis. Therapy is a tool, not a last resort. Asking for help is strength.`,
          ],
          image: `/explorer-assets/wellness/l11-s6-reach-out.png`,
          imageCaption: `You don't have to wait for a crisis. You don't have to have it figured out first. Reaching out — to a parent, a teacher, a counselor — is one of the bravest things you can do.`,
          vocab: [
            { word: `trusted adult`, definition: `A safe, caring grown-up — parent, teacher, school counselor. Always a good first step when something feels too heavy to carry alone.`,
              audioPrompt: `A trusted adult is someone who makes you feel safe enough to be honest, {name}. A parent, a teacher, a school counselor — someone who will listen without judgment and help you figure out what comes next. You don't have to have everything figured out before you talk to them. You just have to start the conversation. That first step is always the most important one.` },
            { word: `therapy`,       definition: `A professional space to talk through feelings and build tools. A resource for anyone — not just for crises.`,
              audioPrompt: `Therapy is a tool, {name} — not a last resort. Many people use it regularly as part of how they take care of their mental health, the same way others exercise or practice breathing. A therapist gives you a safe, private space to understand what you're feeling, build new tools, and work through things that feel stuck. It's an act of care, not a sign something is broken.` },
            { word: `strength`,      definition: `What asking for help actually is. Not weakness — the opposite. Knowing you don't have to carry everything alone is wisdom.`,
              audioPrompt: `Asking for help is strength, {name} — and Terra wants you to know this with everything in her. Knowing you don't have to carry everything alone is wisdom, not weakness. Reaching out when something feels too heavy takes more courage than pretending you're fine. The bravest people in your life are the ones willing to say "I need some help with this." That kind of bravery changes lives.` },
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
    fetch('/explorer-assets/wellness/l11-s1-everyone-has.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-s2-spectrum.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-s3-what-it-looks-like.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-s4-daily-habits.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-s5-dont-carry-alone.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l11-s6-reach-out.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L11] One or more magazine assets missing'));
}
