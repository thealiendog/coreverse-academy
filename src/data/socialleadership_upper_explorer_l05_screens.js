// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L05 — Healthy Boundaries
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real boundary research — Cloud & Townsend, Nedra Tawwab,
//            modern boundary work. The crucial distinction: boundaries are
//            rules about YOUR behavior, not commands for others.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (healthy boundary / controlling someone else /
//            no boundary at all - people-pleasing). Trick case = "if you do
//            X, I'll punish you" disguised as a boundary.
// SCOPE: 4 concepts — what boundaries really are (and aren't), why they're
//        an act of kindness not selfishness, how to set them kindly, what
//        happens when people push back (the test of a real boundary)
// VOICE: Valor = noble, calm, deeply grounded. Models boundaries himself.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-05`,
      title: `Healthy Boundaries`,
      duration: 18,
      xpReward: 75,
      badge: `boundary-keeper`,
      badgeName: `Boundary Keeper`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Last lesson, you learned to speak up kindly. Today we explore something closely related but often misunderstood: HEALTHY BOUNDARIES. Knowing where your "yes" and your "no" really live, and being willing to honor them, even when it's hard. Boundaries aren't mean. They aren't selfish. And they aren't about controlling other people. They're an act of self-respect AND kindness, both at once. Today, you learn what a real boundary actually is, and how to set one with strength and care. Take a steady, settled breath, and let's begin.`,
          headline: `Healthy Boundaries`,
          subtitle: `Knowing where your "yes" and your "no" really live`,
          visual: `/ue-assets/sl/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Boundaries Really Are (and Aren't)`,
          paragraphs: [
            `Here's the most important truth about boundaries, and almost no one teaches it right. A real BOUNDARY is a rule about YOUR OWN behavior, NOT a command for someone else. Big difference. Most kids (and adults) confuse "setting a boundary" with telling someone else what to do. ("You can't talk to me like that!" or "Stop doing that!") That's not a boundary, that's an attempt to control another person. And it usually doesn't work, because you can't actually control other people. What you CAN control is YOU, your own choices, your own actions, your own responses.`,
            `A real boundary sounds like this: "If you keep yelling at me, I'm going to step away from this conversation." Notice it doesn't tell the other person to stop yelling. It says what YOU will do if they keep yelling. That's a boundary. The other person can choose whether to yell or not, that's their choice. YOU choose how you'll respond. That's yours. The same logic works in friendships, family, school, anywhere. Boundaries protect your peace, your time, your energy, your values. They tell people, gently and clearly, "here's what I will and won't do." They don't tell others what to do, they just communicate what you choose for yourself. That single shift, from controlling others to honoring yourself, is the heart of healthy boundaries.`,
          ],
          image: `/ue-assets/sl/l05-s1-what-they-are.webp`,
          imageCaption: `A boundary is a rule about YOUR behavior, not a command for someone else.`,
          vocab: [
            { word: `boundary`,
              definition: `A rule about your OWN behavior, NOT a command for someone else. Tells people what YOU will do, not what they must do. ("If yelling continues, I'll step away.") Protects your peace, time, energy, and values without trying to control anyone.`,
              audioPrompt: `A boundary is a rule about your own behavior, {name}. Not a command for someone else. Most kids confuse setting a boundary with telling someone else what to do. You can't talk to me like that! That's not a boundary, that's trying to control another person. A real boundary sounds like: if you keep yelling at me, I'm going to step away. Notice it doesn't tell them to stop. It says what YOU will do. The other person chooses what they do. You choose how you respond. That's healthy boundaries.` },
            { word: `people-pleasing`,
              definition: `The pattern of saying yes when you mean no, going along to avoid conflict, and prioritizing others' comfort over your own needs. Feels kind short-term but builds silent resentment over time. The opposite of healthy boundaries.`,
              audioPrompt: `People-pleasing is saying yes when you mean no, {name}. Going along to avoid conflict. It feels kind in the moment, but over time it builds silent resentment. You start to feel like you don't matter. You may even come to dislike people you love, because you let them ask too much and never said so. People-pleasing isn't real kindness. It slowly erases your real self. Real kindness says yes when it means yes, and no when it means no. That's what healthy boundaries make possible.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Boundaries Are Kindness, Not Selfishness`,
          paragraphs: [
            `Many kids think setting a boundary is being mean or selfish. The opposite is true. Boundaries are actually an act of KINDNESS, in two directions. First, they're kind to YOU. Without boundaries, you say yes when you mean no. You let people treat you in ways that hurt. You give your time and energy until you're exhausted, resentful, or quietly unhappy. You stop being honest with the people you love because honesty feels risky. Over time, no boundaries means losing yourself. Healthy boundaries protect the person you are, so you can keep being a kind, generous, real human being.`,
            `Second, they're kind to OTHER PEOPLE too. When you don't have boundaries, you build silent resentment. You start to dislike people you actually love, because you let them ask too much of you and never said so. The relationship secretly damages, even while looking fine on the outside. A friend who has clear boundaries is actually EASIER and MORE PEACEFUL to be friends with. They tell you where they stand. You don't have to guess. You can trust their yes because they're capable of saying no. Same goes for family, classmates, teammates, anyone. Boundaries make relationships HEALTHIER, not colder. The kindest people in the world tend to be the ones with the clearest boundaries. Their warmth is real, because it's freely given, not extracted.`,
          ],
          image: `/ue-assets/sl/l05-s2-kindness.webp`,
          imageCaption: `Boundaries are kindness, in both directions. They prevent resentment and protect real warmth.`,
          vocab: [
            { word: `self-respect`,
              definition: `Treating yourself like someone worth honoring: your time, your energy, your feelings, your values. Healthy boundaries are an expression of self-respect. Not selfishness — kindness toward the person you're becoming.`,
              audioPrompt: `Self-respect is treating yourself like someone worth honoring, {name}. Your time, your energy, your feelings, your values. Many kids think setting a boundary is selfish. The opposite is true. Without boundaries, you say yes when you mean no. You let people treat you in ways that hurt. You give until you're exhausted or resentful. Over time, no boundaries means losing yourself. Healthy boundaries protect the person you are, so you can keep being a kind, genuine human being. That's kindness toward you AND toward others.` },
            { word: `authentic yes`,
              definition: `A "yes" that actually means yes, only possible when you're also capable of saying "no." When you have healthy boundaries, your yes carries real warmth and real weight. People can trust it fully.`,
              audioPrompt: `An authentic yes is a yes that actually means yes, {name}. Only possible when you're also capable of saying no. When you can't say no, your yes means nothing, because it's the only answer you have. People sense this. They can't fully trust a yes that was never really a choice. But when you have healthy boundaries and people know you can say no, your yes becomes powerful. It carries real warmth. People can count on it. Your yes becomes something worth having, because it was freely given.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to Set a Boundary Kindly`,
          paragraphs: [
            `Setting a boundary kindly has three main moves. First, GET CLEAR on what YOU want or need. Where is your "yes" and where is your "no"? What are you okay with, and what's not okay for you? Sometimes the hardest part is just being honest with yourself about what you actually need, instead of guessing what others want. Second, COMMUNICATE the boundary clearly. Calm, direct, without explaining for ten minutes or apologizing endlessly. "I'm not going to talk about this with you anymore." "I need some quiet time right now." "If the joke keeps going, I'm going to walk away." Keep it simple. The clearer it is, the more easily people can respect it.`,
            `Third, HONOR THE BOUNDARY YOURSELF. This is the part most people miss. A boundary you set but don't follow through on isn't really a boundary, it's a wish. If you said "I'll walk away if the yelling continues," and the yelling continues, you actually walk away. That's the practice. The first few times you honor a boundary, it'll feel uncomfortable. People may push back. You may feel mean or guilty. That's normal, and it passes. The discomfort isn't a sign you're doing it wrong, it's the muscle building. The more consistently you honor your boundaries, the more they become natural, and the more people learn to respect them without testing. And remember from L04: use "I" statements, name behavior not character, leave space for the other person. The skills connect.`,
          ],
          image: `/ue-assets/sl/l05-s3-how-to.webp`,
          imageCaption: `Three moves: get clear, communicate calmly, honor the boundary yourself.`,
          vocab: [
            { word: `honoring a boundary`,
              definition: `The part most people skip: actually following through on the boundary you set, especially when uncomfortable. A boundary you don't honor is just a wish. Honoring means doing what you said you'd do, calmly, even if people push back.`,
              audioPrompt: `Honoring a boundary means actually following through on it, {name}. A boundary you set but don't follow through on isn't really a boundary, it's a wish. If you said you'll walk away if the yelling continues, and it continues, you actually walk away. That's the practice. The first few times will feel uncomfortable. You may feel mean or guilty. That's normal, and it passes. The discomfort isn't a sign you're doing it wrong, it's the muscle building. The more you honor your boundaries, the more people learn to respect them.` },
            { word: `if-then boundary`,
              definition: `The clearest structure for a healthy boundary: "If [this behavior], then I will [my response]." Focused on your own behavior, not commanding others. Easy to state clearly and easy to honor when tested.`,
              audioPrompt: `An if-then boundary is the clearest way to set a healthy boundary, {name}. If you keep yelling, I'll step away. If the joke continues, I'll leave the conversation. If my things are taken without asking, I'll keep them locked. Notice the structure: if something happens, then you say what YOU will do. Not what they must do. This structure is clear and easy to follow through on. People can understand it. You can honor it. It keeps the boundary focused on your choices, exactly where it should be.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When People Push Back (The Real Test)`,
          paragraphs: [
            `Here's the real test of a boundary: what happens when people push back? Because they often will, especially at first. Some people may say "you're being mean," "you've changed," "you're so dramatic." Family members may take it personally. Friends may try to talk you out of it. This is normal, and it's NOT a sign that your boundary is wrong. It's actually a sign that the boundary is doing its job, it's protecting something that mattered. Here's the truth: people who genuinely respect you will adjust to your boundaries over time, even if they grumble at first. The people who keep pushing or punishing you for honoring your "no" are showing you something important about what they actually want from you.`,
            `When someone pushes back, stay calm and stay kind, but stay firm. You don't need to defend, explain at length, or apologize. A simple "I understand you're disappointed, AND this is what I've decided for me" works almost anywhere. Don't argue. Don't escalate. Just gently keep honoring your boundary. Over time, most people learn. Valor's teaching: real leaders have clear boundaries. They say their "yes" with their whole heart, because they're capable of saying "no." They protect themselves so they can keep showing up for others with real warmth. They don't apologize for taking care of themselves, because they understand that without that care, they'd have nothing to offer. Set boundaries kindly. Honor them bravely. Trust the people worth trusting to adjust. You'll become someone solid, real, and deeply trusted, the kind of leader anyone would want around.`,
          ],
          image: `/ue-assets/sl/l05-s4-pushback.webp`,
          imageCaption: `Pushback is normal. Stay calm and firm. People who respect you will adjust over time.`,
          vocab: [
            { word: `boundary pushback`,
              definition: `When other people resist or react to your boundary ("you've changed," "you're mean"). Normal and expected, especially at first. NOT a sign the boundary is wrong, often a sign it's doing its job. Stay calm, kind, and firm.`,
              audioPrompt: `Boundary pushback is when other people resist or react to your boundary, {name}. Things like: you've changed, you're being mean, you're so dramatic. This is normal, especially at first. Not a sign your boundary is wrong. Often a sign it's doing its job. When someone pushes back, stay calm and kind, but stay firm. A simple "I understand you're disappointed, AND this is what I've decided for me" works almost anywhere. Don't argue or escalate. Just gently keep honoring your boundary. People who respect you will adjust.` },
            { word: `the AND response`,
              definition: `A calm, firm way to handle boundary pushback without arguing: "I understand you're disappointed, AND this is what I've decided for me." The AND holds both truths — acknowledging their feeling AND maintaining your boundary — without giving in.`,
              audioPrompt: `The AND response is a simple way to handle pushback when you've set a boundary, {name}. I understand you're disappointed, AND this is what I've decided for me. Notice what AND does. It holds two truths at once. You acknowledge their feeling. You stand by your boundary. You don't argue or take it back. You don't explain for ten minutes. You just hold both: I hear you, AND I'm still honoring this. The AND response keeps you calm and kind without giving in. Practice it. It works almost everywhere.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kid scenarios. Classify each: HEALTHY BOUNDARY (a rule about their OWN behavior, kindly stated and honored), CONTROLLING SOMEONE ELSE (trying to command another person's behavior — not a real boundary), or NO BOUNDARY AT ALL (people-pleasing, saying yes when meaning no)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `healthy`,     label: `Healthy Boundary`,         color: `#34D399`, description: `A rule about YOUR OWN behavior. Calm, clear, honored when tested.` },
            { id: `controlling`, label: `Controlling Someone Else`,  color: `#F87171`, description: `Trying to command another person's behavior. Not a real boundary, an attempt at control.` },
            { id: `none`,        label: `No Boundary At All`,        color: `#94A3B8`, description: `Saying yes when meaning no. People-pleasing. Building silent resentment.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scenario #1`,
              clues: [
                { text: `A kid is on a group chat where teasing is starting to feel mean.` },
                { text: `They say: "Hey, this is getting too rough for me. I'm going to mute the chat for the night if it keeps up."` },
                { text: `When it keeps up, they actually mute it. They don't argue or apologize.` },
              ],
              correctAnswer: `healthy`,
              realWorldExample: `Stating what YOU will do, and following through, is a real boundary.`,
              explanation: `The kid stated a rule about their OWN behavior ("I'll mute if it keeps up") and then honored it when it did. They didn't command anyone to stop teasing, that would be controlling others. They just communicated what THEY would do. Pure healthy boundary. This is exactly how boundary work is supposed to look.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scenario #2`,
              clues: [
                { text: `A kid is exhausted and overwhelmed. A friend asks if they can come over.` },
                { text: `The kid says "yes!" even though they really need rest. They tell themselves "it's fine."` },
                { text: `Afterward, they feel resentful toward the friend, who didn't actually do anything wrong.` },
              ],
              correctAnswer: `none`,
              realWorldExample: `Saying yes when meaning no builds resentment, not connection.`,
              explanation: `The kid had no boundary. They said yes when they really meant "I need rest tonight." This is classic people-pleasing. Pure no boundary at all. The damage is real: the kid is now resentful toward a friend who did nothing wrong, just because they didn't honor their own "no." A kind boundary would have been: "I'd love to but I really need a quiet night. Tomorrow?"`,
            },
            {
              id: `case-3`,
              caseTitle: `Scenario #3`,
              clues: [
                { text: `A kid is frustrated their sibling keeps borrowing their stuff without asking.` },
                { text: `They yell: "You can NEVER touch my things again! I forbid it!"` },
                { text: `They never say what they'll do, just demand the sibling stop.` },
              ],
              correctAnswer: `controlling`,
              realWorldExample: `Trying to command another person isn't a boundary, it's control.`,
              explanation: `The kid is trying to COMMAND the sibling's behavior, not setting a boundary about their own. Pure controlling someone else. The real boundary would sound like: "If you take my things without asking, I'm going to keep them in my locked drawer." That's a rule about THEIR own behavior (locking things up), not a command for the sibling. The sibling can still choose what they do; the kid chooses how to respond.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scenario #4 — The Tricky One`,
              clues: [
                { text: `A kid is annoyed that their friend cancels plans last minute often.` },
                { text: `They text: "If you cancel on me one more time, I'm never going to invite you anywhere AGAIN. EVER."` },
                { text: `It sounds like a boundary, but it's framed as a punishment.` },
              ],
              correctAnswer: `controlling`,
              realWorldExample: `Threats and punishments disguised as boundaries are still control.`,
              explanation: `Tricky, {name}! It sounds like a boundary because it uses the "if X, I'll do Y" structure we learned. So you might call this a healthy boundary. But look closer. The Y isn't a calm, self-honoring choice, it's a PUNISHMENT designed to force the friend to behave. "I'll never invite you EVER AGAIN" is an extreme threat meant to control. Pure controlling someone else in disguise. Lesson: real boundaries are calm and proportional. ("If you cancel last-minute, I'm going to stop counting on those plans and make backup plans.") They're not designed to punish; they're designed to honor what's true for you. The giveaway is the energy and the extremity. Threats wrapped in boundary-language are still about control. Real boundaries protect YOU; they don't punish them. Stay calm. Stay proportional. Stay focused on what YOU choose, not on hurting them.`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is a REAL BOUNDARY?`,
              options: [
                `A command telling someone else what to do`,
                `A rule about YOUR OWN behavior: what YOU will do, not what they must do`,
                `A way to punish people`,
                `A wall that keeps everyone out`,
              ],
              correctIndex: 1,
              explanation: `A real boundary is a rule about your OWN behavior, not a command for someone else. "If yelling continues, I'll step away" is a boundary. "Stop yelling!" is trying to control. You can't actually control other people, but you can always control yourself.` },

            { id: `l05-q2`, format: `true-false`,
              question: `True or false: Setting boundaries is selfish and mean.`,
              correctAnswer: false,
              explanation: `False. Boundaries are an act of KINDNESS in both directions. Kind to you (they protect your time, energy, feelings, values). Kind to others (they prevent silent resentment and make your warmth real instead of extracted). The kindest people often have the clearest boundaries.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `What happens when you HAVE NO BOUNDARIES?`,
              options: [
                `Life is perfect`,
                `You say yes when you mean no, build silent resentment, get exhausted, and slowly lose yourself, and relationships secretly damage`,
                `You stay calm forever`,
                `Everyone respects you more`,
              ],
              correctIndex: 1,
              explanation: `No boundaries means saying yes when you mean no, letting people treat you in ways that hurt, giving until exhausted, and building silent resentment. Relationships secretly damage even while looking fine. Over time, no boundaries means losing yourself.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `What are the THREE moves of setting a boundary kindly?`,
              options: [
                `Yell, threaten, walk out`,
                `GET CLEAR on what you need, COMMUNICATE it calmly and simply, then HONOR the boundary yourself`,
                `Apologize, explain, give in`,
                `Ignore everyone`,
              ],
              correctIndex: 1,
              explanation: `Three moves: GET CLEAR on what you need or want (the inside work), COMMUNICATE the boundary calmly without long apologies or explanations, and HONOR it yourself (follow through on what you said). All three matter.` },

            { id: `l05-q5`, format: `multiple-choice`,
              question: `What does HONORING a boundary mean?`,
              options: [
                `Hoping people respect it`,
                `Actually following through. If you said "I'll step away if yelling continues" and it continues, you actually step away`,
                `Forgetting about it`,
                `Punishing the other person`,
              ],
              correctIndex: 1,
              explanation: `Honoring means actually following through, calmly. A boundary you don't honor is just a wish. If you said you'd walk away if X, and X happens, you walk away. The first few times feel uncomfortable. That's normal, and it passes. Consistency is what makes boundaries real.` },

            { id: `l05-q6`, format: `multiple-choice`,
              question: `What's NORMAL when you first set a boundary?`,
              options: [
                `Everyone instantly accepts it`,
                `PUSHBACK, where people may say "you're being mean" or "you've changed." This is normal and often means the boundary is doing its job`,
                `Instant punishment`,
                `It works without effort`,
              ],
              correctIndex: 1,
              explanation: `Pushback is normal, especially at first. "You're being mean." "You've changed." "You're dramatic." This isn't a sign your boundary is wrong, it's often a sign it's doing its job. People who genuinely respect you will adjust over time, even if they grumble first.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `When someone PUSHES BACK on your boundary, what's the right response?`,
              options: [
                `Defend yourself for an hour`,
                `Stay calm and kind, but stay FIRM. A simple "I understand you're disappointed, AND this is what I've decided for me" works almost anywhere`,
                `Apologize and take it back`,
                `Yell back louder`,
              ],
              correctIndex: 1,
              explanation: `Stay calm, kind, and firm. Don't defend at length, apologize excessively, or argue. "I understand you're disappointed, AND this is what I've decided for me" works almost anywhere. Don't escalate. Just gently keep honoring your boundary.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `Why does Valor say BOUNDARIES are part of real leadership?`,
              options: [
                `Leaders don't need boundaries`,
                `Real leaders say "yes" with their whole heart BECAUSE they're capable of "no." Boundaries make their warmth real, not extracted`,
                `Only leaders can have boundaries`,
                `Leaders use boundaries to control others`,
              ],
              correctIndex: 1,
              explanation: `Real leaders have clear boundaries. Their "yes" means something because they're capable of "no." They don't apologize for taking care of themselves, because they understand that without that care, they'd have nothing to offer. They become solid, real, and deeply trusted, the kind anyone would want around.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Take a slow, settled breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Is there a place in your life right now where you say YES when you really mean NO? Notice gently, without judgment.` },
            { id: `r2`, text: `Have you ever tried to "set a boundary" by commanding someone else's behavior, and noticed it didn't work? How might it have worked better as a rule about YOUR behavior?` },
            { id: `r3`, text: `Think of someone who has clear boundaries that you actually respect. What do they do that you'd like to grow in yourself?` },
            { id: `r4`, text: `What's ONE small boundary you'd like to start honoring this week? Where will you practice it?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Healthy boundaries are studied across psychology, family research, and leadership work as one of the foundations of healthy adult life. Adults who learned boundaries young have better friendships, healthier relationships, less burnout, and stronger careers. Adults who didn't learn this often spend years (or decades) building resentment, saying yes when they mean no, and quietly losing themselves to please others. You're learning this now, at the perfect age. The discomfort of setting your first boundaries is real but small compared to the lifetime cost of never learning. Valor's note: boundaries aren't walls that keep love out. They're the doors and windows of your real self, deciding what comes in and what doesn't. The people who love you for who you really are will respect them. The people who don't will reveal themselves. Both are valuable to know. Set boundaries kindly. Honor them bravely. Trust the people worth trusting to adjust. You become solid this way, the steady, loved, deeply trusted human only boundaries can build.`,
          familyAdventure: `Family Boundary Practice. As a family, try this: each person identifies ONE small boundary they'd like to honor this week (about phone use, alone time, how disagreements happen, snack-sharing, whatever fits your family). They state it CALMLY, in "I" terms ("I need 20 minutes of quiet after school," not "Everyone leave me alone forever"). Then everyone agrees to support each other in honoring those boundaries, including when it's uncomfortable. Adults model it too, kids learn boundaries best from grown-ups who set them clearly and kindly. Talk at the end of the week about what was hard and what felt better. You're learning to take care of each other AND yourselves, together.`,
          creativePrompt: {
            intro: `Write a scene where a kid sets a healthy boundary with a friend or sibling — and handles pushback calmly and kindly.`,
            floor: `Write at least 5 sentences. Show the situation, the kid setting a clear boundary about their OWN behavior, and how they handle a small pushback.`,
            stretch: `Write 8 to 10 sentences. Build a fuller scene with the three moves visible (get clear, communicate calmly, honor it), and the kid handling pushback with grace.`,
            open: `Write as much as you want. Write a full scene showing real boundary work in action. Set up the situation: a kid is in a relationship (friend, sibling, classmate, teammate) where something has been bothering them, where they keep saying yes when they mean no, or where they're being treated in a way that's not okay for them. Show the kid moving through the three boundary moves clearly. First, GETTING CLEAR with themselves about what they actually need. Second, COMMUNICATING the boundary calmly, simply, in "I" terms (a rule about their own behavior, NOT a command for the other person). Third, HONORING the boundary when it's tested. Show pushback realistically, the other person grumbles, accuses, or tries to talk them out of it. Show the kid staying calm, kind, AND firm. End with the kid feeling solid in themselves, and the relationship actually growing healthier because of the honesty. Make it specific, brave, and real.`,
            frames: [
              `What had been bothering [kid] was ___.`,
              `Inside themselves, they got clear that what they really needed was ___.`,
              `They calmly said: "I'm going to ___ if ___."`,
              `When the other person pushed back saying ___, [kid] stayed calm and ___.`,
              `By the end, [kid] felt solid in themselves because ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Strong, brave work, {name}. You now understand one of the most life-changing skills in this whole subject: real healthy boundaries. A rule about YOUR behavior, not a command for others. An act of kindness, not selfishness. Three moves: get clear, communicate calmly, honor it yourself. And pushback is normal, not a sign you're wrong. Set boundaries kindly. Honor them bravely. You'll become someone solid, real, and deeply trusted. Next, we explore what happens when disagreements arise, and how to navigate them without damage. RESOLVING CONFLICT. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `boundary-keeper`,
          badgeName: `Boundary Keeper`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L05 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
