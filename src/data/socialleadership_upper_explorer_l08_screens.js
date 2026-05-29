// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L08 — When Things Get Hard with Friends
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real friendship research — friendship ruptures, repair vs
//            letting go, growing apart vs betrayal. Builds on L06 conflict +
//            L05 boundaries.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (5 steps through a friendship rupture)
// SCOPE: friendships break + repair, when to repair vs let go, the path
//        through a rupture, growing forward kindly
// VOICE: Valor = warmer here, gentler, acknowledges real pain
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-08`,
      title: `When Things Get Hard with Friends`,
      duration: 18,
      xpReward: 75,
      badge: `friendship-tender`,
      badgeName: `Friendship Tender`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today's lesson is a softer one. We're going to talk gently about FRIENDSHIPS, specifically what to do when they get hard. Friends are some of the most important people in your life. And friendships, real ones, sometimes hit hard moments. Hurt feelings. Fights. Times you grow apart. Even betrayals. These moments are normal, and they don't mean you failed. They're part of what real friendship asks of us. Today, you learn how to walk through them well. Take a soft, kind breath, and let's begin.`,
          headline: `When Things Get Hard with Friends`,
          subtitle: `The path through friendship ruptures, with kindness toward yourself and them`,
          visual: `/ue-assets/sl/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Friendships Hit Hard Moments (Normal, Not Failure)`,
          paragraphs: [
            `Here's something important: EVERY meaningful friendship hits hard moments. Not just sometimes, ALWAYS. A friend will hurt your feelings without meaning to. You'll hurt theirs. You'll have a fight that feels bigger than it should have been. You'll feel left out. You'll grow in different directions for a while. These moments are NORMAL, not a sign the friendship is broken or that you did something wrong. Real friendship isn't friction-free, it's two people who care about each other navigating real life together.`,
            `Where it gets confusing for kids is that hard moments can FEEL like the friendship is ending. Your stomach hurts, you feel sad, you wonder if you've lost them. That's a real feeling, and you don't have to push it away. But the feeling isn't always the truth. Most friendship hard-moments aren't endings, they're ruptures that can be REPAIRED. Sometimes with a real conversation. Sometimes with time. Sometimes with both. Today, you learn how to tell what kind of hard moment you're in, and what to do about it. Whatever happens, treat yourself gently. Friendship hurt is real hurt, and it deserves real care.`,
          ],
          image: `/ue-assets/sl/l08-s1-normal.webp`,
          imageCaption: `Every real friendship hits hard moments. Normal, not failure. Just part of real connection.`,
          vocab: [
            {
              word: `friendship rupture`,
              definition: `A hard moment in a friendship: hurt feelings, a fight, feeling left out, betrayal, growing apart. Normal in every real friendship. Most can be repaired with honesty, time, or both. Not a sign the friendship is broken.`,
              audioPrompt: `A friendship rupture is a hard moment in a friendship, {name}. Hurt feelings. A fight. Feeling left out. Growing apart for a while. These happen in every meaningful friendship, not just sometimes, always. Real friendship isn't friction-free. It's two people who care about each other navigating real life together. Hard moments feel like endings, but most aren't, they're ruptures that can be repaired with honesty, time, or both. Treat yourself gently when one happens. Friendship hurt is real hurt, and it deserves real care.`,
            },
            {
              word: `repair or release`,
              definition: `The two possible endings for a friendship rupture: repairing the connection through honest conversation and time, OR releasing it with grace when repair isn't right. Both are valid outcomes. The wise path is choosing what's true and kind for both people.`,
              audioPrompt: `Repair or release are the two possible endings for a friendship rupture, {name}. Repair means working through it together: honest conversation, apology where appropriate, time, gentle return to warmth. Release means letting the friendship be smaller or end, with grace toward both yourself and them. Both are valid. Not every friendship is meant to last forever, and that's not a failure. The wise path isn't always repair. It's choosing what's true and kind for both people, honestly, without turning the other person into a villain or yourself into a victim.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Kinds of Hard Moments`,
          paragraphs: [
            `Hard moments in friendships come in different shapes, and knowing which kind you're in helps you respond well. First, ACCIDENTAL HURTS. Your friend forgot something important to you. They said something thoughtless. They cancelled at the last minute. These hurts are real, but they weren't meant. Almost always repairable through honest conversation. Second, GROWING APART. Sometimes friends change at different speeds or in different directions. You used to love the same things and now don't. You see them less, things feel different. Growing apart isn't anyone's fault, it's part of being human. Sometimes it's temporary; sometimes it's a natural ending. Both are okay.`,
            `Third, REAL BETRAYAL OR HARM. This is rarer but real. A friend talks badly about you behind your back. Lies to you. Mocks you to others. Treats you cruelly. Excludes you on purpose to hurt you. These aren't accidents, they're patterns of behavior that show this person, RIGHT NOW, isn't safe to be close to. These hard moments may not be fixable with a conversation, and that's okay. You're allowed to step back, set boundaries (L05), or let the friendship be smaller or end. None of that makes you a bad friend, it makes you someone who takes care of themselves. Knowing the difference between these three kinds helps you respond with wisdom, instead of treating every hurt like a crisis or every betrayal like just an accident.`,
          ],
          image: `/ue-assets/sl/l08-s2-three-kinds.webp`,
          imageCaption: `Three kinds: accidental hurts, growing apart, real betrayal. Each needs a different response.`,
          vocab: [
            {
              word: `growing apart`,
              definition: `When friends change at different speeds or in different directions and the friendship naturally becomes less close. Not anyone's fault, just part of being human. Can be temporary OR a kind, natural ending. Both are okay.`,
              audioPrompt: `Growing apart is when friends change at different speeds or in different directions, {name}. The friendship naturally becomes less close. You used to love the same things, now you don't. You see them less, things feel different. Growing apart isn't anyone's fault. It's part of being human. Sometimes it's temporary, and the friendship returns. Sometimes it's a natural ending. Both are okay. Knowing this difference helps you respond with wisdom instead of treating every quiet phase as a crisis or every drift as a betrayal.`,
            },
            {
              word: `accidental hurt`,
              definition: `A friendship wound caused by thoughtlessness, not malice. A friend forgot something that mattered, cancelled last-minute, said something careless. The hurt is real but wasn't meant. The most common friendship hard moment — and almost always the most repairable.`,
              audioPrompt: `An accidental hurt is a friendship wound caused by thoughtlessness, not malice, {name}. Your friend forgot something that mattered to you. They cancelled at the last minute. They said something careless without realizing. The hurt is real, but it wasn't meant. These are the most common friendship hard moments and almost always the most repairable. An honest conversation using I statements, what happened, how it felt, what you'd like instead, is usually all it takes. Most friends genuinely want to fix what they didn't realize they'd done.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Path Through a Rupture`,
          paragraphs: [
            `When a friendship hits a hard moment, here's the path through, five clear steps. First, NOTICE THE HURT, gently. What actually happened? What did you feel? You can't repair what you haven't honestly named. Sometimes naming it just to yourself is the hardest part. Second, COOL OFF before reacting. Big feelings push you toward avoidance or explosion (L06!). Take a breath, sleep on it if you can. Acting on raw hurt usually makes things worse. Third, SPEAK HONESTLY OR LET TIME HAPPEN. For accidental hurts, an honest conversation with "I" statements (L04) usually repairs things. For deeper hurts, sometimes a little space lets things settle. You'll know which one fits, listen to yourself.`,
            `Fourth, CHOOSE: REPAIR or LET GO (or somewhere in between). Most friendships repair, especially if both people care. Some don't, because the other person isn't able or willing, or because you've grown apart. Some shift to being smaller, friendly but not as close. ALL of these are okay endings. There's no "right" outcome for every friendship. The right outcome is what's true and kind for both people. Fifth, GROW FORWARD. Whatever you decide, take what you learned with you. About yourself, about what you want in friendships, about how to handle hard moments next time. Friendship-pain that you process well becomes friendship-wisdom you carry forever. These five steps don't make hard moments feel easy. They just give you a way through, instead of getting stuck.`,
          ],
          image: `/ue-assets/sl/l08-s3-path.webp`,
          imageCaption: `Notice hurt → cool off → speak or let time → repair or let go → grow forward.`,
          vocab: [
            {
              word: `friendship repair`,
              definition: `The process of mending a friendship after a rupture: honest conversation, sincere apology where appropriate, time, gentle return to warmth. Most friendships can repair when both people care. Some can't, and that's okay too.`,
              audioPrompt: `Friendship repair is the process of mending a friendship after a hard moment, {name}. Honest conversation with I statements. Sincere apology where appropriate. Time to let things settle. Gentle return to warmth. Most friendships can repair, especially if both people genuinely care. Some can't, because the other person isn't able or willing, or because you've grown apart in real ways. That's okay too. There's no right outcome for every friendship. The right outcome is what's true and kind for both people involved.`,
            },
            {
              word: `honest conversation`,
              definition: `The key tool for repairing accidental friendship hurts: naming what happened, how it felt, and what you'd like instead — using "I" statements rather than blame. Feels scary before you have it, usually relief after. Avoiding it is almost always harder than having it.`,
              audioPrompt: `An honest conversation is the key tool for repairing accidental friendship hurts, {name}. Instead of staying silent and letting resentment build, you name what happened, how it felt, and what you'd like instead. Using I statements from L04, I felt hurt when, not you always, keeps it clear and calm. Most friends genuinely want to fix what they didn't realize they did. Honest conversations feel scary before you have them and usually feel like relief after. Avoiding them is almost always harder in the long run than just having them.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Kindness Toward Yourself AND Them`,
          paragraphs: [
            `One last truth, maybe the most important. When friendships get hard, the way you treat YOURSELF matters as much as the way you treat the other person. Don't tell yourself you're "too sensitive" if you're hurt. Don't pretend everything's fine when it isn't. Don't carry shame about something you didn't cause. AND, don't decide the other person is a terrible human being for one mistake. Most friends who hurt us aren't bad people, they're flawed people we love. Holding both, your real hurt AND their real humanity, is the heart of mature friendship.`,
            `Here's what real friendship wisdom looks like: you can take care of yourself AND care about them. You can be honest about pain AND open to repair. You can decide a friendship is over AND wish the person well. You can step back from someone AND not turn them into a villain in your story. These both-and moves get easier with practice and age. Valor's teaching: friendships are some of the deepest joys and deepest hurts of being human. The kid who learns to walk through hard moments with honesty, kindness toward themselves, and grace toward others becomes someone who builds deep, lasting friendships. Not friendships that never hurt, friendships strong enough to survive hurt and repair afterward. That's the rare and beautiful kind. And you're learning how to build them, today.`,
          ],
          image: `/ue-assets/sl/l08-s4-both.webp`,
          imageCaption: `Hold both: your real hurt AND their real humanity. Care for yourself AND wish them well.`,
          vocab: [
            {
              word: `both-and friendship`,
              definition: `The mature stance of holding two truths at once: caring for yourself AND about them, being honest about pain AND open to repair, stepping back from someone AND not turning them into a villain. The wisdom of real friendship.`,
              audioPrompt: `Both-and friendship is holding two truths at once, {name}. You can care for yourself AND care about them. You can be honest about pain AND open to repair. You can end a friendship AND wish them well. You can step back AND not turn someone into a villain in your story. Most friends who hurt us aren't bad people, they're flawed people we love. Holding both, your real hurt and their real humanity, is the heart of mature friendship. It gets easier with practice.`,
            },
            {
              word: `friendship wisdom`,
              definition: `What stays with you after navigating a friendship rupture well — not the hurt, but what you learned: about yourself, about what you want in friendships, about how to handle hard moments next time. Friendship-pain processed well becomes wisdom carried forever.`,
              audioPrompt: `Friendship wisdom is what stays with you after navigating a hard friendship moment well, {name}. Not the hurt or the resentment, but what you learned: about yourself, about what you want in friendships, about how to handle hard moments next time. Every friendship that hits a rupture and gets walked through carefully teaches you something real. Even friendships that end teach you. The pain you process well doesn't just disappear. It becomes knowledge. The kid who builds friendship wisdom early forms deeper, lasting connections all their life.`,
            },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the path through a friendship rupture in order, {name}. Here are five steps, scrambled. Use the arrows to arrange them from FIRST (when the hurt happens) to LAST (the wisdom that stays with you). This is the real practice.`,
          items: [
            { id: `step-notice`, label: `NOTICE THE HURT gently — what actually happened, what did I feel?`,                                                       position: 1 },
            { id: `step-cool`,   label: `COOL OFF before reacting — sleep on it if you can, don't act on raw hurt`,                                              position: 2 },
            { id: `step-speak`,  label: `SPEAK HONESTLY OR LET TIME HAPPEN — for accidental hurts, an honest conversation; for deeper hurts, sometimes space`,    position: 3 },
            { id: `step-choose`, label: `CHOOSE: repair, let go, or somewhere in between — there's no one "right" outcome for every friendship`,                 position: 4 },
            { id: `step-grow`,   label: `GROW FORWARD — take the wisdom with you about yourself, about friendships, about how to handle hard moments next time`,  position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the path through a friendship rupture: notice the hurt, cool off, speak honestly or let time happen, choose what's true (repair, let go, or in between), and grow forward. Hard moments will still hurt, but you'll have a way through them. And the wisdom you build now will serve every friendship you ever have.`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l08-q1`, format: `true-false`,
              question: `True or false: Every meaningful friendship hits hard moments at some point.`,
              correctAnswer: true,
              explanation: `True. Every real friendship hits hard moments, hurt feelings, fights, growing apart, even betrayals. This is NORMAL, not a sign of failure. Real friendship is two people who care about each other navigating real life together.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What are the THREE kinds of hard friendship moments?`,
              options: [
                `Happy, sad, neutral`,
                `ACCIDENTAL HURTS (real but not meant), GROWING APART (natural drift), and REAL BETRAYAL (patterns of harm)`,
                `Big, medium, small`,
                `Only one kind exists`,
              ],
              correctIndex: 1,
              explanation: `Three kinds: ACCIDENTAL HURTS (real but unintended, almost always repairable), GROWING APART (natural drift, no one's fault), and REAL BETRAYAL/HARM (patterns showing someone isn't safe to be close to right now). Each needs a different response.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What's the FIRST step of the path through a rupture?`,
              options: [
                `Confront the friend immediately`,
                `NOTICE THE HURT gently. What actually happened, what did I feel? You can't repair what you haven't honestly named`,
                `Ignore it`,
                `Tell everyone`,
              ],
              correctIndex: 1,
              explanation: `First, notice the hurt gently and honestly. What happened? What did you feel? You can't repair what you haven't named. Sometimes naming it just to yourself is the hardest part. The path can't start until you actually let yourself see what hurt.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `Why is COOLING OFF important before reacting to a friendship hurt?`,
              options: [
                `Because it's polite`,
                `Big feelings push you toward avoidance or explosion. Acting on raw hurt usually makes things worse`,
                `It doesn't matter`,
                `Only sometimes`,
              ],
              correctIndex: 1,
              explanation: `Big feelings push you toward the two unhelpful modes from L06: avoidance (pretend it's fine) or explosion (lash out). Acting on raw hurt usually makes things worse. Cool off, sleep on it if you can, then come back when your wise brain is online.` },

            { id: `l08-q5`, format: `multiple-choice`,
              question: `For ACCIDENTAL HURTS, what usually repairs the friendship?`,
              options: [
                `Forever silence`,
                `An honest conversation with "I" statements: what hurt, how it felt, what you'd like instead`,
                `Public shaming`,
                `Ending the friendship immediately`,
              ],
              correctIndex: 1,
              explanation: `For accidental hurts, honest conversation usually repairs things. Use the "I" statement structure from L04: "I felt left out when the plans changed without me." Most friends genuinely want to fix what they didn't realize they did. Honest conversation is the cure.` },

            { id: `l08-q6`, format: `true-false`,
              question: `True or false: For real betrayal or repeated harm, you're allowed to step back, set boundaries, or let the friendship be smaller.`,
              correctAnswer: true,
              explanation: `True. Real betrayal or repeated harm isn't an accident, it shows someone isn't safe to be close to right now. You can step back, set boundaries (L05), or let the friendship be smaller or end. That doesn't make you a bad friend, it makes you someone who takes care of themselves.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `What does BOTH-AND friendship wisdom look like?`,
              options: [
                `Either love them or hate them`,
                `Hold two truths at once. Care for yourself AND about them, be honest about pain AND open to repair, decide a friendship is over AND wish them well`,
                `Always end friendships`,
                `Never end any friendship`,
              ],
              correctIndex: 1,
              explanation: `Both-and friendship holds two truths at once: caring for yourself AND about them, honest about pain AND open to repair, stepping back AND not making them a villain. Most friends who hurt us aren't bad people, they're flawed people we love. Holding both is mature friendship.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `What's Valor's deeper teaching about friendships?`,
              options: [
                `Real friendships never hurt`,
                `Real friendships are strong enough to survive hurt and repair afterward. That's the rare and beautiful kind`,
                `Avoid all friendships`,
                `Only have shallow friends`,
              ],
              correctIndex: 1,
              explanation: `Real friendships aren't ones that never hurt, they're ones strong enough to survive hurt and repair afterward. The kid who learns to walk through hard moments with honesty, self-kindness, and grace toward others builds deep, lasting friendships. That's the rare and beautiful kind.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Take a soft, kind breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Is there a friendship in your life right now that's in a hard moment? What kind is it — accidental hurt, growing apart, or something deeper?` },
            { id: `r2`, text: `Think of a past friendship that ended or got smaller. Looking back, what kind of ending was it? Have you been gentle with yourself about it?` },
            { id: `r3`, text: `Of the five steps (notice, cool off, speak honestly, choose, grow forward), which would help you most in a current or recent friendship moment?` },
            { id: `r4`, text: `What "both-and" truth might be true for you right now? (e.g., "I'm hurt by X AND I still care about them.")` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Friendship skills, including how to handle ruptures, are some of the most important skills for a happy life. Research consistently shows that strong friendships are one of the biggest predictors of well-being across the whole lifespan. The kids who learn to navigate hard friendship moments well end up with deeper, longer-lasting friendships as teenagers, young adults, and grown-ups. Valor's note: friendship is one of life's deepest gifts and one of its real challenges. You will have friends who hurt you, friends you'll hurt accidentally, friends who drift away, friends who grow back, friends for life. All of it is part of the journey. Treat yourself kindly through it all. Be honest. Be brave enough to repair when it's right, and brave enough to let go when it's right. Carry your friendships gently. The hard moments don't break real friendships, they often deepen them.`,
          familyAdventure: `Family Friendship Conversation. As a family, share gently (only as much as feels right): what's a friendship in your life right now that brings you joy? What's a friendship moment that's been hard recently? Listen to each other with the L02 listening practice, full attention, no fixing, just being heard. Talk about how each family member could support each other through friendship moments, big and small. Friendship hurt is real hurt, and being known and supported at home makes navigating the outside world so much gentler.`,
          creativePrompt: {
            intro: `Write about a real or imagined friendship rupture and the path through it. Show what kind of hard moment it is and the five steps in action.`,
            floor: `Write at least 5 sentences. Set up the friendship and what hurt, then walk through what you (or your character) did.`,
            stretch: `Write 8 to 10 sentences. Show the full path: noticing, cooling off, speaking or letting time happen, choosing repair or letting go, growing forward.`,
            open: `Write as much as you want. Write a full piece about a real or imagined friendship rupture. Set the scene clearly, the friendship, what happened, what hurt. Identify which kind of hard moment it is (accidental hurt, growing apart, or real betrayal) and respond accordingly. Walk through all five steps: NOTICING the hurt honestly, COOLING OFF before reacting, deciding to SPEAK HONESTLY or LET TIME HAPPEN, CHOOSING to repair or let go, and GROWING FORWARD with the wisdom you gained. Hold both-and truths along the way: your real hurt AND the other person's humanity, your need to take care of yourself AND your care for them. End with what you learned about yourself and friendship. Make it specific, honest, and tender.`,
            frames: [
              `The friendship was ___, and what happened was ___.`,
              `I noticed I felt ___.`,
              `Instead of reacting right away, I ___.`,
              `I realized this was a ___ kind of hard moment, so I ___.`,
              `In the end, I chose to ___, and what I learned was ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You've learned how to navigate one of life's deepest waters: friendships when they get hard. You know the three kinds of hard moments, the five-step path through them, and the both-and wisdom that lets you care for yourself AND others. Friendships will keep being some of your deepest joys and real challenges. Walk through them gently. Next, we explore one of the bravest moments in any life: standing up for someone when something isn't right. STANDING UP AGAINST UNFAIRNESS. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `friendship-tender`,
          badgeName: `Friendship Tender`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L08 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
