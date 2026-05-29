// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L09 — Standing Up Against Unfairness
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real bystander research (Latane/Darley diffusion of
//            responsibility), upstander vs bystander, allyship, courage
//            in everyday moments. Anti-bullying research.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (upstander / bystander / aggressive crusading)
// SCOPE: bystander effect, what upstanders do, how to stand up safely AND
//        effectively, the both-and of safety + courage
// VOICE: Valor = the lion's heart shows here. Brave, calm, never reckless.
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-09`,
      title: `Standing Up Against Unfairness`,
      duration: 18,
      xpReward: 75,
      badge: `upstander`,
      badgeName: `Upstander`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore one of the bravest, most defining moments in any life: standing up when something isn't right. When you see someone being treated unfairly, mocked, bullied, excluded, hurt, what you do (or don't do) matters more than you might realize. Today you learn the difference between staying silent, standing up well, and crusading aggressively. And you learn the calm, smart courage of being an UPSTANDER, someone who steps in safely AND effectively, in the moments that count. Take a brave breath, and let's begin.`,
          headline: `Standing Up Against Unfairness`,
          subtitle: `The calm, smart courage of the upstander`,
          visual: `/ue-assets/sl/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Bystander Effect (Why "Someone Else Will Help" Usually Means Nobody Does)`,
          paragraphs: [
            `Researchers have discovered something important and a little disturbing: when many people see someone being hurt or treated unfairly, individuals are LESS likely to help than if they were alone. It's called the BYSTANDER EFFECT, and it's one of the most studied findings in social psychology. The reason? Everyone assumes someone ELSE will step in. So nobody does. The person being hurt is left alone, surrounded by people who silently watch. Knowing this changes things, because once you know about the bystander effect, you can choose not to be part of it.`,
            `Here's the practical truth: in a moment of unfairness, the question isn't "will someone help?" It's "will I?" When you see someone being mocked, excluded on purpose, or treated cruelly, your INTERNAL decision is the only one you can actually make. If you assume someone else will step in, you become part of the silence that hurts the person. If you choose to be an UPSTANDER, someone who actually does something, you change the moment. Sometimes you're the only one. Sometimes others join once one person breaks the silence. Either way, your decision matters more than you might think.`,
          ],
          image: `/ue-assets/sl/l09-s1-bystander.webp`,
          imageCaption: `Bystander effect: everyone assumes someone else will help, so nobody does. Knowing this changes you.`,
          vocab: [
            {
              word: `bystander effect`,
              definition: `A well-studied finding in psychology: when many people witness someone being hurt, individuals are LESS likely to help than if alone, because everyone assumes someone else will step in. Knowing about it lets you choose not to be part of it.`,
              audioPrompt: `The bystander effect is a well-studied finding in psychology, {name}. When many people see someone being hurt or treated unfairly, individuals are less likely to help than if they were alone. Everyone assumes someone else will step in. So nobody does. The person being hurt is left alone, surrounded by people who silently watch. Knowing about the bystander effect changes things. Once you know about it, you can choose not to be part of it. In a moment of unfairness, the question isn't, will someone help? It's, will I?`,
            },
            {
              word: `diffusion of responsibility`,
              definition: `The psychological mechanism behind the bystander effect: when a group sees someone being hurt, the sense of personal responsibility spreads across every witness, making each person feel less individually responsible for acting. The more witnesses, the thinner responsibility spreads.`,
              audioPrompt: `Diffusion of responsibility is the mechanism behind the bystander effect, {name}. When a group sees someone being hurt, the sense of responsibility spreads across every witness. Each person feels less personally responsible because others are there. The more people present, the thinner the responsibility spreads, and the less likely anyone is to act. Everyone waits for someone else, and nobody moves. Understanding this is the first step to overcoming it. When you feel that pull to wait, recognize it for what it is. Then be the one who acts.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Kinds of Witnesses (Be the Third)`,
          paragraphs: [
            `When you see someone being treated unfairly, you have three basic choices. First, BYSTANDER: do nothing. Watch silently, look away, hope it stops on its own, tell yourself "it's not my problem." Bystanders aren't bad people, they're often scared, unsure what to do, or trapped in the bystander effect. But their silence usually makes things worse for the person being hurt. Second, AGGRESSIVE CRUSADER: rush in loudly, yell at the people doing harm, escalate, sometimes start a fight. This LOOKS like standing up, but it often makes the situation more dangerous, draws attention away from the person being hurt, and even hurts the upstander.`,
            `Third, and the one to grow toward: UPSTANDER. An upstander steps in calmly, smartly, and effectively, without escalating. They don't rush in screaming. They don't stay silent. They do something specific that shifts the moment. Maybe they say "hey, that's not cool" calmly. Maybe they go stand next to the person being mocked. Maybe they include them in a conversation. Maybe they tell a trusted adult. Maybe they message the person privately later to check on them. There are many ways to stand up. The best upstanders aren't the loudest, they're the most thoughtful, and they care more about helping the person being hurt than about looking heroic.`,
          ],
          image: `/ue-assets/sl/l09-s2-three-kinds.webp`,
          imageCaption: `Bystander (silent), Aggressive Crusader (loud and escalating), Upstander (calm, smart, effective).`,
          vocab: [
            {
              word: `upstander`,
              definition: `Someone who steps in calmly, smartly, and effectively when they see unfairness, without escalating or becoming aggressive. Cares more about helping the person being hurt than about looking heroic. The brave, useful middle path.`,
              audioPrompt: `An upstander is someone who steps in calmly and effectively when they see unfairness, {name}. Without escalating or becoming aggressive. The best upstanders aren't the loudest, they're the most thoughtful. They care more about helping the person being hurt than about looking heroic. Upstanders might say that's not cool, calmly. They might stand next to the person being mocked or include them in a conversation. They might tell a trusted adult or message privately later to check in. There are many ways to stand up. All of them matter.`,
            },
            {
              word: `aggressive crusading`,
              definition: `The counterproductive form of "standing up" that escalates the situation, makes it more dangerous, and is more about looking heroic than helping the person being hurt. Rushing in loudly, yelling, starting a fight — it looks brave but usually backfires.`,
              audioPrompt: `Aggressive crusading is the counterproductive form of standing up that escalates the situation and is more about looking heroic than helping the person hurt, {name}. Rushing in yelling, starting a fight, making the moment about your outrage, all feel brave but usually backfire. The person being mocked often ends up more embarrassed, not less. The harmer gets a dramatic confrontation to play to a crowd. Real upstander work is calm and focused on the person being hurt, not on performing courage for an audience.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to Stand Up Safely AND Effectively`,
          paragraphs: [
            `Standing up matters. So does staying safe. Real upstander work is BOTH AT ONCE. Here are five real moves you can use. First, BREAK THE SILENCE, gently. Sometimes all it takes is one person saying "that's not okay" or "not cool" to break the spell. Other witnesses often join once one person speaks. Second, REDIRECT THE MOMENT. Change the subject, suggest a different activity, draw the person being hurt into something else. ("Hey, come help me with this.") You don't always need to confront the harmer directly to interrupt the harm.`,
            `Third, BE PRESENT WITH THE PERSON. Go stand near them. Sit by them. Include them. Sometimes presence is more powerful than words. The harmer often loses interest when the target isn't isolated. Fourth, TELL A TRUSTED ADULT, especially for ongoing harm or serious situations. This isn't tattling, it's getting backup. Adults can do things kids can't, and asking for adult help is a strong upstander move, not a weak one. Fifth, CHECK IN PRIVATELY LATER. Even if you couldn't do anything in the moment, a private message ("hey, that wasn't right, are you okay?") can mean everything to the person who was hurt. They often remember the kindness of one person more than they remember the cruelty of others. And one important note: if a situation is dangerous, getting an adult or removing yourself is the right call. Bravery doesn't mean recklessness. Real courage knows when to act, when to get help, and when to step back.`,
          ],
          image: `/ue-assets/sl/l09-s3-how.webp`,
          imageCaption: `Break the silence, redirect, be present, tell an adult, check in later. All real upstander moves.`,
          vocab: [
            {
              word: `breaking the silence`,
              definition: `The simple upstander move of being the first person to say something. Often all it takes is one calm voice ("that's not okay") to break the spell of the bystander effect and let others join in standing up.`,
              audioPrompt: `Breaking the silence is the simple upstander move of being the first person to say something, {name}. Sometimes all it takes is one person saying that's not okay, calmly, to break the spell of the bystander effect. Other witnesses often join once one person speaks. You don't have to give a big speech. You don't have to confront the harmer dramatically. Just one calm voice can shift the whole moment. Breaking the silence is one of the bravest, most underrated upstander acts. You can do it. Anyone can.`,
            },
            {
              word: `redirect`,
              definition: `An upstander move that interrupts harm without directly confronting the harmer: changing the subject, drawing the person being hurt into something else, or inviting them away. Works because it removes the target from the situation without escalating.`,
              audioPrompt: `A redirect is an upstander move that interrupts harm without directly confronting the harmer, {name}. Change the subject. Draw the person being hurt into something else. Hey, come help me with this. Want to sit with us? Redirecting works because it removes the target from the situation without making a scene. The harmer often loses interest when their target is no longer isolated. Redirecting is especially useful when you're not sure what to say directly or don't want to escalate. It doesn't feel dramatic, but it's genuinely effective.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Quiet Courage of the Upstander`,
          paragraphs: [
            `Here's the truth about being an upstander: it's scary. You may worry about being targeted yourself. You may not be sure what to say. Your heart will pound. That's normal, and it doesn't mean you shouldn't act. The courage isn't the absence of fear, it's choosing to do something useful WITH the fear present. The smallest acts count. Going to sit next to someone being excluded counts. Saying "hey, that's not cool" counts. Texting "are you okay?" later counts. You don't have to be a movie hero. You just have to do something real.`,
            `One more truth, especially important. Not every kid is in a position to stand up loudly. If you're someone who could be in real danger, or if speaking up could make things significantly worse, getting an adult is the upstander move. There's no shame in that. Different situations call for different moves. The thing that matters is that you DO SOMETHING, however small, instead of staying frozen in the bystander silence. Valor's teaching: the world needs upstanders, more than it needs more "good people who didn't do anything." History remembers the quiet ones who stepped in when it mattered, even in small ways. Be that kid. Practice in small moments. The brave kind voice you build now will serve every important moment of your life. People will be safer because you exist. That is real leadership.`,
          ],
          image: `/ue-assets/sl/l09-s4-courage.webp`,
          imageCaption: `Courage isn't absence of fear. It's doing something useful WITH the fear present.`,
          vocab: [
            {
              word: `quiet courage`,
              definition: `The everyday bravery of doing something useful WITH fear present, not waiting until you feel completely brave. Small acts (sitting with someone, saying "not cool", checking in later) count as real courage. You don't have to be a movie hero.`,
              audioPrompt: `Quiet courage is the everyday bravery of doing something useful with fear present, {name}. Not waiting until you feel completely brave. The courage isn't the absence of fear. It's choosing to do something useful with the fear there. The smallest acts count. Going to sit next to someone being excluded counts. Saying that's not cool counts. Texting are you okay later counts. You don't have to be a movie hero. You just have to do something real. The world needs more upstanders, not more good people who didn't do anything.`,
            },
            {
              word: `allyship`,
              definition: `The ongoing practice of standing with and for people being treated unfairly — not just in big dramatic moments, but consistently in small everyday acts. Noticing exclusion and including people. Speaking up when someone is mocked. Checking in privately. Upstander energy as a habit.`,
              audioPrompt: `Allyship is the ongoing practice of standing with and for people being treated unfairly, not just in big dramatic moments but consistently in small everyday acts, {name}. An ally notices when someone is excluded and includes them. They speak up when someone is mocked. They check in privately. They don't look away and assume someone else will act. Allyship is upstander energy practiced as a habit, not just reserved for emergencies. People who experience real allyship know they aren't alone, and that knowledge protects them in powerful ways.`,
            },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. A kid is being mocked by a few others in the hallway. Here are four responses from witnesses nearby. Classify each: UPSTANDER (calm, smart, effective action to help), BYSTANDER (silent, looking away, hoping someone else helps), or AGGRESSIVE CRUSADING (loud, escalating, makes the moment more dangerous and sometimes about themselves)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `up`,      label: `Upstander`,            color: `#34D399`, description: `Calm, smart, effective. Helps the person being hurt. Cares more about them than looking heroic.` },
            { id: `by`,      label: `Bystander`,            color: `#94A3B8`, description: `Stays silent, looks away, assumes someone else will help. Silence usually makes things worse.` },
            { id: `crusade`, label: `Aggressive Crusading`, color: `#F87171`, description: `Rushes in loudly, escalates, makes the situation more dangerous. Often about looking heroic.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Witness #1`,
              clues: [
                { text: `A kid sees the mocking, feels uncomfortable, but looks at their phone and walks past.` },
                { text: `They tell themselves "it's not my problem" and "someone else will deal with it."` },
                { text: `Later they feel bad but assume it's over.` },
              ],
              correctAnswer: `by`,
              realWorldExample: `Looking away and assuming someone else will help is the bystander effect.`,
              explanation: `Pure bystander. The kid isn't a bad person, they're caught in the bystander effect (everyone assumes someone else will act). But silence in moments of harm usually makes things worse for the person being hurt. The fix isn't shame, it's awareness: the question isn't "will someone help?" but "will I?"`,
            },
            {
              id: `case-2`,
              caseTitle: `Witness #2`,
              clues: [
                { text: `A kid walks over and calmly says "hey, that's not cool" — then walks over to the kid being mocked.` },
                { text: `They say "want to come hang out with us?" and invite them away from the moment.` },
                { text: `Later, they message the kid privately to check on them.` },
              ],
              correctAnswer: `up`,
              realWorldExample: `Calm, multi-step, focused on the person being hurt.`,
              explanation: `Pure upstander. The kid broke the silence calmly, redirected the moment, was present with the person being hurt, and followed up later. Multiple real upstander moves layered together. Not dramatic, not aggressive, just effective. This is exactly the courage to grow.`,
            },
            {
              id: `case-3`,
              caseTitle: `Witness #3`,
              clues: [
                { text: `A kid rushes over yelling "WHAT IS WRONG WITH YOU?! YOU'RE LITERAL TRASH!"` },
                { text: `They start a loud argument with the mockers, which draws a crowd.` },
                { text: `The kid being mocked just stands there, even more uncomfortable and embarrassed.` },
              ],
              correctAnswer: `crusade`,
              realWorldExample: `Loud escalation isn't real help, even if it feels brave.`,
              explanation: `Pure aggressive crusading. The witness yelled, escalated, drew more attention to the moment, and made the kid being mocked even more uncomfortable. The point of standing up is to HELP the person being hurt, not to look heroic or to win a fight with the harmer. Calm, focused upstander moves help. Loud escalation usually doesn't.`,
            },
            {
              id: `case-4`,
              caseTitle: `Witness #4 — The Tricky One`,
              clues: [
                { text: `A kid feels the moment is wrong but doesn't know what to do.` },
                { text: `Instead of saying anything in the hallway, they quietly leave and find a trusted teacher to tell.` },
                { text: `The teacher steps in within minutes and the situation is handled.` },
              ],
              correctAnswer: `up`,
              realWorldExample: `Telling a trusted adult IS upstander work.`,
              explanation: `Tricky, {name}! You might call this a bystander because the kid didn't say anything to the harmers directly. But look closer. They DID something specific and effective: they got an adult who could actually stop the situation. That's a real upstander move. Telling a trusted adult isn't tattling, it's getting backup. Adults can do things kids can't. Asking for adult help in serious moments is strong upstander courage, not weakness. Lesson: there are many ways to stand up. The best move depends on the situation. The thing that matters isn't whether you confronted the harmer dramatically. It's whether you DID SOMETHING useful for the person being hurt.`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is the BYSTANDER EFFECT?`,
              options: [
                `When people help quickly`,
                `When many people see someone being hurt, individuals are LESS likely to help, because everyone assumes someone else will step in`,
                `When bystanders cause harm`,
                `Imaginary, not real research`,
              ],
              correctIndex: 1,
              explanation: `The bystander effect is well-studied in psychology: when many witnesses are present, individuals are LESS likely to help because everyone assumes someone else will. Knowing about it lets you choose differently. The question becomes "will I?" instead of "will someone?"` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `What are the THREE kinds of witnesses?`,
              options: [
                `Tall, short, medium`,
                `BYSTANDER (silent), AGGRESSIVE CRUSADER (loud and escalating), and UPSTANDER (calm and effective)`,
                `Only one kind`,
                `Loud, louder, loudest`,
              ],
              correctIndex: 1,
              explanation: `Three kinds: BYSTANDER (silent, looks away), AGGRESSIVE CRUSADER (loud, escalating, often about looking heroic), and UPSTANDER (calm, smart, effective, helps the person being hurt). Only upstander work actually helps.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `What is an UPSTANDER?`,
              options: [
                `The loudest person`,
                `Someone who steps in calmly, smartly, and effectively to help. Without escalating, and caring more about helping than looking heroic`,
                `Someone who yells the most`,
                `Someone who watches silently`,
              ],
              correctIndex: 1,
              explanation: `An upstander steps in calmly and effectively, without escalating. They aren't the loudest, they're the most thoughtful. They care more about helping the person being hurt than about looking heroic. There are many real ways to upstand.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `Which of these is a REAL upstander move?`,
              options: [
                `Yelling loudly at the harmer`,
                `Breaking the silence calmly, redirecting the moment, being present with the person, telling an adult, checking in later`,
                `Looking away`,
                `Joining the harm`,
              ],
              correctIndex: 1,
              explanation: `Real upstander moves: BREAK THE SILENCE calmly ("that's not okay"), REDIRECT (change the subject, draw the person away), BE PRESENT (stand by them), TELL AN ADULT (especially for ongoing harm), CHECK IN LATER ("are you okay?"). All count.` },

            { id: `l09-q5`, format: `true-false`,
              question: `True or false: Telling a trusted adult about ongoing harm is "tattling" and a weak move.`,
              correctAnswer: false,
              explanation: `False. Telling a trusted adult is GETTING BACKUP, and it's a strong upstander move, not a weak one. Adults can do things kids can't. For ongoing or serious harm, getting an adult is often the most effective thing you can do.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `What's the truth about COURAGE for an upstander?`,
              options: [
                `You have to feel completely brave first`,
                `Courage isn't the absence of fear. It's choosing to do something useful WITH fear present`,
                `Only fearless people are brave`,
                `Courage requires no fear`,
              ],
              correctIndex: 1,
              explanation: `Courage isn't the absence of fear. It's choosing to do something useful with fear present. Your heart will pound. That's normal. You don't have to wait until you feel fearless. The smallest acts (saying "not cool," sitting next to someone, checking in later) all count as real courage.` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `What does Valor say about WHEN to use which upstander move?`,
              options: [
                `Always confront loudly`,
                `Different situations call for different moves. When something could be dangerous, get an adult. When small, your own calm voice may be enough`,
                `Only one move works`,
                `Never do anything`,
              ],
              correctIndex: 1,
              explanation: `Different situations call for different moves. For small moments, breaking the silence may be enough. For ongoing or dangerous harm, getting an adult is the upstander move. Bravery doesn't mean recklessness. Real courage knows when to act, when to get help, and when to step back.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `Why does ONE upstander matter so much, even alone?`,
              options: [
                `One person doesn't matter`,
                `Other witnesses often JOIN once one person breaks the silence. And the person being hurt remembers the kindness of one person far more than the cruelty of many`,
                `Only crowds matter`,
                `Adults are the only real upstanders`,
              ],
              correctIndex: 1,
              explanation: `One upstander breaks the bystander spell, and others often join. And the person being hurt remembers the kindness of one person more than the cruelty of others. Your single calm voice can change the entire moment AND mean everything to the person who was hurt.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Take a brave, settled breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever been a bystander when something wasn't right? Be gentle with yourself, just notice. What might you have done as an upstander?` },
            { id: `r2`, text: `Have you ever stood up for someone (or been stood up for)? What happened, and how did it feel?` },
            { id: `r3`, text: `Of the five upstander moves (break silence, redirect, be present, tell an adult, check in later), which feels most natural for you?` },
            { id: `r4`, text: `What's ONE small upstander act you could practice this week, even in a low-stakes moment?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Research on the bystander effect, upstander training, and allyship has shown again and again that even one upstander can change outcomes for people being targeted. Anti-bullying programs that train kids to be upstanders measurably reduce harm, far more than just telling people "don't be mean." Upstanders matter in schools, workplaces, and societies. History remembers the few who stepped in during dark moments, often when it was hardest. Valor's note: the world has always had bystanders and bullies. What it needs more of are quiet, brave upstanders, ordinary kids and adults who notice when something isn't right and do something real about it, calmly. You can be that kid. Practice in small low-stakes moments. The brave kind voice you build will be there when bigger moments come. People are safer because upstanders exist. Choose to be one of them.`,
          familyAdventure: `Family Upstander Conversation. As a family, share gently: a time someone stood up for you (or for someone you know), and what it meant. A time you wished someone had stood up. A time you DID stand up, even in a small way. Talk about what makes standing up hard, and what kinds of small upstander moves your family wants to practice. Adults share their own examples (kids learn upstander courage best by hearing real stories from grown-ups they love). You're building a family that watches out for others, gently and bravely.`,
          creativePrompt: {
            intro: `Write a scene where a kid notices something unfair and chooses to be an upstander — calmly, smartly, effectively.`,
            floor: `Write at least 5 sentences. Set up what's happening, the kid's choice, and one specific upstander move.`,
            stretch: `Write 8 to 10 sentences. Show the bystander effect happening around them, then the kid breaking the silence, plus one follow-up move.`,
            open: `Write as much as you want. Write a full scene showing real upstander courage. Set the moment: someone is being treated unfairly (mocked, excluded, bullied, hurt), and other witnesses are doing nothing (the bystander effect in action). Show the kid noticing the moment, feeling the fear, and choosing to act anyway. Walk through one or more upstander moves: BREAKING THE SILENCE calmly, REDIRECTING the moment, BEING PRESENT with the person being hurt, getting an ADULT if needed, or CHECKING IN LATER. Show that the kid's voice may shake, that they're scared, AND they act anyway. Show what changes because of their action, both for the person who was hurt and for the other witnesses. End with the quiet pride of doing something real. Make it specific and true.`,
            frames: [
              `What was happening was ___.`,
              `Other witnesses were ___, and [kid] felt ___.`,
              `Even though they were scared, [kid] chose to ___.`,
              `What changed in that moment was ___.`,
              `Later, [kid] also ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Brave work, {name}. You now understand the bystander effect, the three kinds of witnesses, and the calm, smart courage of the upstander. You know five real upstander moves and that courage means acting WITH fear, not waiting until you feel fearless. Practice in small daily moments. People will be safer because you exist. Next, we explore one of the most underrated leadership tools you have, your words. THE POWER OF A KIND WORD. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `upstander`,
          badgeName: `Upstander`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L09 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
