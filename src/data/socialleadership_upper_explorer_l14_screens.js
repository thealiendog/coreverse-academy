// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L14 — Giving and Receiving Feedback
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : Stone & Heen (Thanks for the Feedback), Sheila Heen's research.
//            Three kinds of feedback (appreciation/coaching/evaluation),
//            triggers when receiving, how to give well.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 steps of giving good feedback)
// SCOPE: feedback is data + relationship, three kinds of feedback, how to
//        give it well, how to receive it without crumbling
// VOICE: Valor = honest, generous, models both giving and receiving
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-14`,
      title: `Giving and Receiving Feedback`,
      duration: 18,
      xpReward: 75,
      badge: `feedback-builder`,
      badgeName: `Feedback Builder`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore one of the trickiest social skills there is: FEEDBACK. Giving it well, and receiving it without falling apart. Feedback is information about how you're doing, or how someone else is doing, and it's one of the main ways people grow. But most kids and adults handle it badly: they give it harshly, give it weakly, or give it at the wrong time. They also receive it defensively, crumbling under it, or pretending they didn't hear. Today, you learn the real practice of both sides. Take a steady breath, and let's begin.`,
          headline: `Giving and Receiving Feedback`,
          subtitle: `The honest practice of helping each other grow`,
          visual: `/ue-assets/sl/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Feedback Is Data PLUS Relationship`,
          paragraphs: [
            `Here's the most important truth about feedback: it's never JUST information. It's information PLUS the relationship between two people. The same words ("you talked over me in that meeting") land totally differently depending on who's saying them, when, and how. Said by a kind teacher in private after class: helpful. Said by a sibling in front of friends during dinner: hurtful. Said as criticism: defensive reaction. Said as care: openness. This is why feedback is one of the trickiest social skills. You're not just delivering words, you're shaping a moment.`,
            `Researchers Douglas STONE and Sheila HEEN wrote one of the most respected books on feedback, "Thanks for the Feedback." They found that most feedback failure happens not because the feedback was wrong, but because of HOW it was given or received. Done well, feedback builds trust, helps people grow, and strengthens relationships. Done poorly, feedback damages everything. Today you learn how to do both sides well. This skill will matter in every relationship you ever have: friends, family, teams, eventually work and beyond.`,
          ],
          image: `/ue-assets/sl/l14-s1-data-plus.webp`,
          imageCaption: `Feedback is information PLUS relationship. Same words land differently depending on how they're given.`,
          vocab: [
            {
              word: `feedback`,
              definition: `Information about how you (or someone else) are doing, intended to help growth or repair. Always carries BOTH content AND relationship. Stone and Heen wrote the leading research on it, finding most feedback failure is about HOW it's given, not the content itself.`,
              audioPrompt: `Feedback is information about how you or someone else are doing, intended to help growth or repair, {name}. It's never just information. It's information PLUS the relationship between two people. The same words land totally differently depending on who's saying them, when, and how. Researchers Douglas Stone and Sheila Heen wrote one of the most respected books on feedback, called Thanks for the Feedback. They found that most feedback failure happens not because the feedback was wrong, but because of HOW it was given or received.`,
            },
            {
              word: `growth opportunity`,
              definition: `The mindset of viewing feedback as useful data for improvement rather than as an attack on your worth. People who see feedback this way improve faster, build more trust, and become the kind of teammate others want to grow alongside.`,
              audioPrompt: `A growth opportunity is the mindset of viewing feedback as useful data for improvement, not as an attack on your worth, {name}. People who see feedback this way improve faster, build more trust, and become the kind of teammate others want to grow alongside. Stone and Heen found that the ability to receive feedback well is actually rarer and more valuable than the ability to give it. When you stop defending and start asking what you can learn, you grow faster than almost anyone around you.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Three Kinds of Feedback`,
          paragraphs: [
            `Stone and Heen identified THREE different kinds of feedback, and confusing them is one of the biggest sources of conflict. First, APPRECIATION feedback: "thanks for what you did," "I see you," "you matter here." This kind makes people feel valued. Most people need WAY more of this than they're getting. Second, COACHING feedback: "here's how to do that better next time," "if you tried X, you'd improve at Y." This kind helps people grow. It's most useful when someone is actually trying to improve at something.`,
            `Third, EVALUATION feedback: "here's how you're doing compared to the standard," "you got a B," "you made the team / you didn't." This kind tells people where they stand. The big problem: people often confuse these three. A kid wants APPRECIATION ("good game today!") and instead receives COACHING ("you should have passed more"), and feels unseen. A teammate offers EVALUATION ("you're not as fast as last year") when COACHING was needed. Knowing which kind someone needs in a given moment is key to giving feedback well. The simple move: ASK FIRST. "Do you want feedback on this, or just want to share?" Or "want me to listen, or to help you improve?" That single question prevents most feedback disasters.`,
          ],
          image: `/ue-assets/sl/l14-s2-three-kinds.webp`,
          imageCaption: `Three kinds: Appreciation (you matter), Coaching (here's how to grow), Evaluation (here's where you stand).`,
          vocab: [
            {
              word: `three kinds of feedback`,
              definition: `Stone and Heen's framework. APPRECIATION (you matter), COACHING (here's how to grow), EVALUATION (here's where you stand). Confusing them is one of the biggest sources of feedback conflict. Ask first which kind someone needs.`,
              audioPrompt: `Stone and Heen identified three different kinds of feedback, {name}. Appreciation feedback: thanks for what you did, I see you, you matter. Coaching feedback: here's how to do that better next time. Evaluation feedback: here's how you're doing compared to the standard. Confusing them causes most feedback conflict. A kid wants appreciation but gets coaching instead, and feels unseen. The simple move that prevents most feedback disasters? Ask first. Do you want feedback on this, or just want to share? That single question prevents most disasters.`,
            },
            {
              word: `appreciation deficit`,
              definition: `The gap between how much appreciation feedback people need and how little they actually receive. Stone and Heen found most people are chronically under-appreciated. Sincere, specific appreciation costs nothing and builds trust fast.`,
              audioPrompt: `An appreciation deficit is the gap between how much appreciation people need and how little they actually receive, {name}. Stone and Heen found that most people are chronically under-appreciated. The kind of feedback we give least often, sincere specific appreciation, is the kind people need most. It costs nothing to say, I noticed what you did, and I'm grateful. But it lands more deeply than almost any other form of feedback. Give more specific appreciation than feels necessary. You will almost never give too much.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to GIVE Feedback Well`,
          paragraphs: [
            `Here are the five moves of giving good feedback. First, NOTICE IF IT'S WANTED. Not every observation needs to be shared. Sometimes people aren't asking for feedback, they're just sharing. If they didn't ask for input, sometimes the kindest move is just to listen (L02!) and not give feedback at all. Second, ASK PERMISSION. "Can I share an observation?" "Would feedback be helpful, or do you just want to vent?" This single move respects the other person's autonomy and dramatically increases the chance your feedback will be heard.`,
            `Third, NAME THE BEHAVIOR SPECIFICALLY (L04's lesson!). Not "you're being annoying" (vague, attacks character). Instead: "When you interrupted me three times during the meeting, I noticed I stopped trying to share." Specific = useful. Fourth, DESCRIBE THE IMPACT without exaggerating. "I noticed I felt unheard" rather than "you ALWAYS do this, you NEVER listen!" The impact is real; the catastrophizing isn't. Fifth, OFFER + LEAVE SPACE. If it's coaching feedback, suggest something concrete: "Next time could you pause and let me finish?" Then PAUSE. Let the other person respond. Don't pile on. The goal isn't to win, it's to help them grow if they want to. Done well, feedback like this is a gift. Done poorly, it's a wound.`,
          ],
          image: `/ue-assets/sl/l14-s3-give.webp`,
          imageCaption: `Notice if wanted → ask permission → name behavior → describe impact → offer + leave space.`,
          vocab: [
            {
              word: `ask permission`,
              definition: `The simple but transformative feedback move of asking, "can I share an observation?" or "would feedback help, or do you just want to vent?" before giving feedback. Respects autonomy and dramatically increases the chance your feedback will be heard.`,
              audioPrompt: `Ask permission is the simple but transformative feedback move, {name}. Before giving feedback, ask, can I share an observation? Or, would feedback help, or do you just want to vent? This single move respects the other person's autonomy and dramatically increases the chance your feedback will be heard. Most unwanted feedback bounces off because it wasn't asked for. Wanted feedback gets received because the person was actually ready. The difference between giving feedback and dumping advice is whether you asked first.`,
            },
            {
              word: `specific behavior feedback`,
              definition: `Naming the exact action rather than judging the person's character. "When you interrupted three times" is specific behavior feedback. "You're so rude" is a character attack. Specific feedback gives the other person something they can actually change.`,
              audioPrompt: `Specific behavior feedback is naming the exact action, not judging the person's character, {name}. When you interrupted me three times is specific behavior feedback. You're so rude is a character attack. Specific feedback gives the other person something they can actually change. Character attacks just make them defensive. The same truth, said specifically, lands completely differently than said as judgment. You interrupted me is receivable. You're always so inconsiderate is not. Specific wins every time.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to RECEIVE Feedback Without Crumbling`,
          paragraphs: [
            `Receiving feedback well is even harder than giving it, and even more important. Most people get TRIGGERED when receiving feedback. Stone and Heen named three triggers. The TRUTH trigger: "that's not true!" (when we don't agree). The RELATIONSHIP trigger: "who are YOU to say this to me?" (when we dislike the person). The IDENTITY trigger: "this means I'm a bad person." (when feedback threatens our self-image). All three triggers shut down our ability to actually hear what's being said, even if there's something useful in it.`,
            `Here's the practice for receiving feedback well. First, BREATHE. Don't react right away. Notice your trigger if there is one. Second, LISTEN to UNDERSTAND, not to defend (L02!). What is the person actually saying? Get curious before defensive. Third, ASK CLARIFYING QUESTIONS if you need to. "Can you tell me more about what you mean?" "Can you give an example?" Fourth, FIND the GRAIN OF TRUTH. Even if feedback is mostly wrong, ask yourself: is there ANY part of this worth considering? Often there is. Take the truth, leave the rest. Fifth, THANK them and DECIDE LATER. You don't have to agree on the spot. "Thanks for telling me. I want to think about it." Real growth happens when you can sit with feedback, even hard feedback, without falling apart. Valor's teaching: people who give feedback well AND receive it well become the most growth-oriented, trusted people in any group. This skill, on both sides, is one of the most powerful you'll ever build.`,
          ],
          image: `/ue-assets/sl/l14-s4-receive.webp`,
          imageCaption: `Receive feedback: breathe, listen, ask, find the grain of truth, thank and decide later.`,
          vocab: [
            {
              word: `the three triggers`,
              definition: `Stone and Heen's three feedback-killing reactions. TRUTH trigger ("that's not true!"), RELATIONSHIP trigger ("who are YOU to say this?"), IDENTITY trigger ("this means I'm bad."). All three shut down listening. Naming them when they happen lets you breathe through them.`,
              audioPrompt: `The three triggers are the feedback-killing reactions Stone and Heen identified, {name}. The truth trigger: that's not true, when we don't agree. The relationship trigger: who are YOU to say this, when we dislike the person. The identity trigger: this means I'm a bad person, when feedback threatens our self-image. All three shut down our ability to hear, even if there's something useful in the feedback. Naming them when they happen lets you breathe through them, listen anyway, and find the grain of truth.`,
            },
            {
              word: `grain of truth`,
              definition: `The piece of useful information in almost any feedback, even if imperfect or harshly delivered. Growth-oriented people search for it rather than dismissing feedback whole. Take the grain of truth and leave the rest.`,
              audioPrompt: `The grain of truth is the piece of useful information in almost any feedback, even if the feedback is imperfect or harsh, {name}. Growth-oriented people don't need feedback to be perfectly delivered to find what's worth keeping. They ask themselves: is there any part of this worth considering? Often there is. Take the grain of truth and leave the rest. This practice lets you grow from hard feedback without agreeing with everything in it. It's one of the most mature moves a person can make.`,
            },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the practice of GIVING feedback in order, {name}. Here are five moves of giving feedback well, scrambled. Use the arrows to arrange them from FIRST (before you say anything) to LAST (how you close it). This is the real practice.`,
          items: [
            { id: `step-notice`,     label: `NOTICE IF IT'S WANTED — not every observation needs sharing; sometimes the kindest move is just to listen`,    position: 1 },
            { id: `step-permission`, label: `ASK PERMISSION — "can I share an observation?" or "would feedback help, or do you just want to vent?"`,        position: 2 },
            { id: `step-behavior`,   label: `NAME THE BEHAVIOR SPECIFICALLY — "when you interrupted three times," not "you're annoying"`,                  position: 3 },
            { id: `step-impact`,     label: `DESCRIBE THE IMPACT without exaggerating — "I noticed I stopped trying to share"`,                              position: 4 },
            { id: `step-offer`,      label: `OFFER + LEAVE SPACE — suggest something concrete if it's coaching feedback, then pause and let them respond`,  position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the practice of giving feedback well: notice if it's wanted, ask permission, name the behavior, describe impact, offer and leave space. Done well, feedback is a gift. Done poorly, a wound. Practice this with people you trust, in small low-stakes moments. The skill grows quickly when used.`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is FEEDBACK really?`,
              options: [
                `Just information`,
                `Information PLUS the relationship between two people. The same words land differently depending on who, when, and how`,
                `Always criticism`,
                `Always positive`,
              ],
              correctIndex: 1,
              explanation: `Feedback is never just information. It's information PLUS relationship. Same words land totally differently said by a kind teacher in private vs. a sibling in public. Stone and Heen's research found most feedback failure is about HOW it's given, not the content itself.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `What are the THREE kinds of feedback?`,
              options: [
                `Good, bad, neutral`,
                `APPRECIATION (you matter), COACHING (here's how to grow), EVALUATION (here's where you stand)`,
                `Loud, quiet, written`,
                `Long, short, medium`,
              ],
              correctIndex: 1,
              explanation: `Stone and Heen identified three kinds: APPRECIATION (you matter, I see you), COACHING (here's how to grow), and EVALUATION (here's where you stand vs. a standard). Confusing them is one of the biggest sources of feedback conflict.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `What's the SIMPLE move that prevents most feedback disasters?`,
              options: [
                `Yell louder`,
                `ASK FIRST which kind of feedback is wanted: "do you want input, or just to share?"`,
                `Never give feedback`,
                `Always give all three kinds`,
              ],
              correctIndex: 1,
              explanation: `The single most powerful move: ask first. "Do you want feedback, or just to share?" "Want me to listen, or to help you improve?" That one question prevents most feedback disasters by making sure the right kind is being given.` },

            { id: `l14-q4`, format: `true-false`,
              question: `True or false: Most people are getting WAY too much appreciation feedback.`,
              correctAnswer: false,
              explanation: `False. Most people are getting WAY too LITTLE appreciation feedback. "I see you," "you matter," "thanks for what you did" lands deeply because people don't hear it enough. Give more appreciation than you think is needed. It almost always helps.` },

            { id: `l14-q5`, format: `multiple-choice`,
              question: `What's a KEY move when GIVING feedback?`,
              options: [
                `Pile on every grievance`,
                `NAME THE BEHAVIOR specifically (not character), DESCRIBE THE IMPACT without exaggerating, OFFER + LEAVE SPACE`,
                `Yell once and walk away`,
                `Be vague to be polite`,
              ],
              correctIndex: 1,
              explanation: `Name the SPECIFIC behavior ("when you interrupted three times"), describe the impact honestly ("I noticed I stopped trying to share"), offer something concrete if coaching, then PAUSE and leave space. The goal isn't to win, it's to help if they want to grow.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `What are the THREE TRIGGERS that shut down receiving feedback?`,
              options: [
                `Sleepy, hungry, thirsty`,
                `TRUTH trigger ("that's not true!"), RELATIONSHIP trigger ("who are YOU to say this?"), IDENTITY trigger ("this means I'm bad")`,
                `Loud, soft, medium`,
                `Only one trigger exists`,
              ],
              correctIndex: 1,
              explanation: `Stone and Heen named three triggers. TRUTH (disagreeing with content). RELATIONSHIP (disliking the messenger). IDENTITY (feedback threatening self-image). All three shut down listening. Naming them when they happen lets you breathe through them and stay open.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `What is the GRAIN OF TRUTH practice?`,
              options: [
                `Eating grain`,
                `Asking yourself "is there ANY part of this feedback worth considering?" — take the truth, leave the rest`,
                `Ignoring everything`,
                `Agreeing with everything`,
              ],
              correctIndex: 1,
              explanation: `Even if feedback is mostly wrong, ask yourself: is there ANY part of this worth considering? Often there is. Take the grain of truth and leave the rest. This is how growth-oriented people use even imperfect feedback to keep getting better.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What can you say when you need TIME to think about feedback?`,
              options: [
                `Defend yourself for an hour`,
                `"Thanks for telling me. I want to think about it." You don't have to agree on the spot`,
                `Storm out`,
                `Pretend you didn't hear`,
              ],
              correctIndex: 1,
              explanation: `You don't have to agree (or disagree) on the spot. "Thanks for telling me. I want to think about it." gives you space to sit with feedback, find the grain of truth, and respond from a calm place later. This is mature feedback-receiving at its best.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Take an honest breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest, when you receive feedback, do you tend to get triggered by TRUTH, RELATIONSHIP, or IDENTITY? Notice gently.` },
            { id: `r2`, text: `Have you ever wanted APPRECIATION but received COACHING instead? How did it feel?` },
            { id: `r3`, text: `Is there feedback you've been wanting to give someone, but holding back? If you used the 5 moves, how would you say it?` },
            { id: `r4`, text: `Who in your life is excellent at giving feedback? What do they do that makes it land well?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Feedback skills are some of the most studied and most important in modern work, education, and relationships. People who give and receive feedback well advance further in school, work, and friendships. Those who can't, struggle even with significant talent because they can't grow or help others grow. Stone and Heen's research is now standard in leadership programs worldwide. Valor's note: feedback isn't comfortable, in either direction. It takes courage to give honestly and humility to receive openly. The kid who learns both becomes someone trusted, growth-oriented, and rare. Practice in small low-stakes moments. Tell a sibling specifically what you appreciate. Ask a friend if they want input before you offer it. Receive a small piece of feedback without defending. The muscle grows fast, and the people in your life will trust and love you for it.`,
          familyAdventure: `Family Feedback Practice. As a family, try this: at one meal a week, each person can share ONE piece of appreciation feedback for someone else in the family, specifically. ("I really appreciate how you stayed calm with the dog when she was barking today. That was kind.") Practice the specific kind, not generic ("you're great"). On a separate occasion, try a brave round where each family member can ask for coaching feedback on something specific. ("I'd love feedback on how I handled X.") Adults model BOTH sides, including receiving feedback without defending. You're growing into a family that helps each other grow, kindly and bravely.`,
          creativePrompt: {
            intro: `Write a scene where a kid gives or receives feedback WELL — using the moves we've learned.`,
            floor: `Write at least 5 sentences. Show the feedback being given (or received) and the practice working.`,
            stretch: `Write 8 to 10 sentences. Show all 5 giving steps OR all 5 receiving steps in action.`,
            open: `Write as much as you want. Write a full scene showing real feedback in action. Choose one side. EITHER show a kid GIVING feedback well, moving through all 5 moves: noticing if it's wanted, asking permission, naming the specific behavior, describing the impact, and offering plus leaving space. OR show a kid RECEIVING feedback well, noticing a trigger (truth, relationship, or identity), breathing through it, listening to understand, asking clarifying questions, finding the grain of truth, and thanking the person while reserving the right to think about it. End with what shifts in the relationship because of how the feedback was handled. Make it specific and brave.`,
            frames: [
              `The situation was ___.`,
              `Before saying anything (or before reacting), [kid] ___.`,
              `Then they ___ (one of the moves).`,
              `The other person's response was ___.`,
              `What shifted between them was ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Strong work, {name}. You now understand feedback in BOTH directions. The three kinds (appreciation, coaching, evaluation), the 5 moves of giving well, the 3 triggers and the practice of receiving without crumbling. Practice on both sides. The kid who masters this becomes one of the most growth-oriented and trusted people in any group. Next, we explore an important integrity line: influencing others honestly vs. trying to control them in hidden ways. INFLUENCE vs. MANIPULATION. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `feedback-builder`,
          badgeName: `Feedback Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L14 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
