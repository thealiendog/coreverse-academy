// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L15 — Influence vs. Manipulation
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : Cialdini's influence research (the 6 principles), the integrity
//            line between influence and manipulation, the "transparency test"
//            (would I be okay if they saw what I'm doing?).
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (honest influence / manipulation / mixed -
//            good intent but sketchy methods). Trick case = "for their own
//            good" manipulation.
// SCOPE: influence is normal, the line that makes it manipulation, the 6
//        principles (and how each can go either way), the transparency test
// VOICE: Valor = ethically grounded, names the line clearly
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-15`,
      title: `Influence vs. Manipulation`,
      duration: 18,
      xpReward: 75,
      badge: `honest-influencer`,
      badgeName: `Honest Influencer`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore one of the most important leadership lines there is: INFLUENCE vs. MANIPULATION. Influence is one of the most powerful tools leaders use, and you use it every day already. But there's a line between honest influence (helping others move toward something good in ways they can see) and manipulation (using hidden tactics to control them for your benefit). Real leaders know exactly where that line is and stay on the honest side. Today, you learn to see the line clearly. Take a steady breath, and let's begin.`,
          headline: `Influence vs. Manipulation`,
          subtitle: `The integrity line every real leader walks carefully`,
          visual: `/ue-assets/sl/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Influence Is Normal and Necessary`,
          paragraphs: [
            `Let's start with something important: INFLUENCE is normal, healthy, and used by everyone every day. When you convince a friend to try a new game, you're influencing. When you make a case to your parents about why you should be able to do something, you're influencing. When a teacher explains why effort matters, they're influencing. When you encourage a teammate during a hard moment, you're influencing. Influence isn't bad. It's how humans communicate, persuade, and lead. The world needs people who can influence others toward good things.`,
            `Researcher Robert CIALDINI spent decades studying how influence works. He identified six main principles that consistently influence human behavior: RECIPROCITY (we feel like helping people who help us), COMMITMENT (we tend to stick with what we've publicly said), SOCIAL PROOF (we follow what we see others doing), AUTHORITY (we listen to people we see as credible), LIKING (we're influenced by people we like), and SCARCITY (we value things that seem rare). These principles are part of being human. Used HONESTLY, they help leaders, teachers, parents, and friends do good in the world. Used DISHONESTLY, the same principles become manipulation. Understanding both sides lets you use influence well, and recognize when others are trying to manipulate you.`,
          ],
          image: `/ue-assets/sl/l15-s1-normal.webp`,
          imageCaption: `Influence is normal and healthy. Everyone does it daily. The question is how.`,
          vocab: [
            {
              word: `influence`,
              definition: `The ability to shape what others think, feel, or do, through transparent and honest means. Normal and healthy. Researcher Robert Cialdini found 6 main principles that influence people. Used honestly, influence is one of the most powerful leadership tools.`,
              audioPrompt: `Influence is the ability to shape what others think, feel, or do, through transparent and honest means, {name}. It's normal and healthy. Everyone uses influence every day. When you convince a friend to try something, when you make a case to your parents, when you encourage a teammate, you're influencing. Researcher Robert Cialdini spent decades studying how influence works. He found six main principles. Reciprocity. Commitment. Social proof. Authority. Liking. Scarcity. Used honestly, they help leaders do good. Used dishonestly, they become manipulation.`,
            },
            {
              word: `reciprocity`,
              definition: `Cialdini's first influence principle — humans naturally feel compelled to return what others give them. Used honestly, it builds mutual generosity and trust. Used dishonestly, favors are given strategically to create debt, then cashed in.`,
              audioPrompt: `Reciprocity is Cialdini's first influence principle, {name}. Humans naturally feel compelled to return what others give them. When you help someone, they feel motivated to help back. Used honestly, reciprocity builds genuine generosity and mutual trust. You helped me with the project, can you help with this too? That's honest reciprocity. Used dishonestly, favors are given strategically to create a sense of debt, then cashed in. One way to spot dishonest reciprocity: the favor came with strings you didn't see coming.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Line: When Influence Becomes Manipulation`,
          paragraphs: [
            `Here's the key distinction. INFLUENCE is honest and transparent: the other person can SEE what you're doing and choose freely. MANIPULATION is hidden, deceptive, or exploiting human weaknesses, and the other person can't see what's actually happening. A friend saying "I'd really love it if you came to my birthday party" is honest influence, you can see the ask and decide freely. A "friend" guilt-tripping you with "fine, I guess I'll just be alone on my birthday, I bet no one cares about me" is manipulation, they're using guilt to force a result they want, hiding their actual ask behind emotional pressure.`,
            `The clearest test for whether your influence is honest or sliding into manipulation is the TRANSPARENCY TEST: Would I be okay if the other person could see EXACTLY what I'm doing and why? If yes, it's honest influence. If you'd feel uncomfortable having your real strategy seen, you're probably manipulating. Real leaders pass the transparency test almost always. They might use Cialdini's principles (asking for help, giving generously, sharing what others have done), but they do it openly, so the other person can choose freely. Manipulators hide their motives and exploit emotion, fear, guilt, or confusion. This single test, applied to yourself when you're trying to influence someone, will keep you honest your whole life.`,
          ],
          image: `/ue-assets/sl/l15-s2-line.webp`,
          imageCaption: `Transparency test: would I be okay if they could see exactly what I'm doing and why?`,
          vocab: [
            {
              word: `manipulation`,
              definition: `Hidden, deceptive, or exploitative influence the other person can't fully see. Uses guilt, fear, emotion, or trickery to force a result that benefits the manipulator. Fails the transparency test. Damaging to trust and to relationships.`,
              audioPrompt: `Manipulation is hidden, deceptive, or exploitative influence the other person can't fully see, {name}. It uses guilt, fear, or trickery to force a result that benefits the manipulator. A friend saying I'd love it if you came to my party is honest influence. A friend saying fine, I guess I'll just be alone is manipulation. The clearest test: would I be okay if the other person saw exactly what I'm doing? If you'd feel uncomfortable, you're probably manipulating.`,
            },
            {
              word: `guilt trip`,
              definition: `A manipulation tactic that uses someone's sense of obligation or caring to force a desired action. "After all I've done for you" or "if you really cared." Hides the actual ask behind emotional pressure and fails the transparency test.`,
              audioPrompt: `A guilt trip is a manipulation tactic that uses someone's sense of obligation or caring to force a desired action, {name}. After all I've done for you. If you really cared about me. These phrases hide the actual ask behind emotional pressure. The person can't see the real ask clearly, which is why guilt trips fail the transparency test. The honest version is simply asking directly. Can you help me with this? That respects the other person's freedom to say yes or no without feeling like a bad person.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Six Principles (And How Each Can Go Either Way)`,
          paragraphs: [
            `Let's look at how Cialdini's 6 principles work HONESTLY vs. dishonestly. RECIPROCITY honest: "Hey, I helped you with your homework yesterday, would you help me practice for the test?" (You're being open about the exchange.) Dishonest: secretly doing favors to make someone "owe" you, then weaponizing the debt. COMMITMENT honest: "You said you wanted to get better at this, want to practice together?" Dishonest: trapping someone into a small "yes" then escalating into something bigger they didn't agree to. SOCIAL PROOF honest: "Most of the other team uses this drill and finds it helpful." Dishonest: lying about what others are doing to pressure conformity ("EVERYONE'S doing it, you're weird if you don't").`,
            `AUTHORITY honest: "My coach taught me this technique, want to try?" Dishonest: pretending to be more of an expert than you are. LIKING honest: being yourself and building real friendships, which naturally makes people open to your influence. Dishonest: faking friendship to get something. SCARCITY honest: "I really want to see you tonight because I'll be away for a week." Dishonest: creating fake urgency or fake scarcity to pressure people. Notice the pattern: each principle, used WITH transparency, is healthy. Used to TRICK someone, the same principle becomes manipulation. The line is whether the person could see what you're doing and still choose freely.`,
          ],
          image: `/ue-assets/sl/l15-s3-six.webp`,
          imageCaption: `Each principle (reciprocity, commitment, social proof, authority, liking, scarcity) can go either way.`,
          vocab: [
            {
              word: `transparency test`,
              definition: `The integrity check for influence. "Would I be okay if the other person could see EXACTLY what I'm doing and why?" If yes, honest influence. If no, probably manipulation. Real leaders pass this test almost always. Apply it to yourself when in doubt.`,
              audioPrompt: `The transparency test is the integrity check for influence, {name}. Ask yourself, would I be okay if the other person could see exactly what I'm doing and why? If yes, it's honest influence. If you'd feel uncomfortable having your real strategy seen, you're probably manipulating. This single test, applied to yourself when you're trying to influence someone, will keep you honest your whole life. Real leaders pass this test almost always. They use Cialdini's principles openly, so the other person can choose freely. Manipulators hide their motives.`,
            },
            {
              word: `social proof`,
              definition: `Cialdini's principle that people are influenced by what they see others doing. Used honestly: sharing what others actually do. Used dishonestly: exaggerating or lying about what others do to pressure conformity. The same principle, two very different intentions.`,
              audioPrompt: `Social proof is Cialdini's principle that people are influenced by what they see others doing, {name}. When we don't know what to do, we look around. If everyone else is doing it, it must be okay. Used honestly, social proof shares what others actually do. Most of the team uses this drill and finds it helpful. Used dishonestly, it exaggerates or lies about what others are doing to pressure conformity. Everyone is doing it is often manipulation. The honest version includes how many and gives evidence.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Recognizing Manipulation (Including the "For Your Own Good" Kind)`,
          paragraphs: [
            `Knowing influence vs. manipulation lets you protect YOURSELF too. Watch for these manipulation signs: guilt tripping ("after all I've done for you"), fake scarcity ("act now or you'll lose this forever"), love-bombing followed by withdrawal, "if you really cared about me, you would..." statements, gaslighting (denying things you saw with your own eyes), pressure to decide quickly, and isolation from other voices. Real influence doesn't need urgency, guilt, or hidden agendas to work. If something feels wrong, listen to that. Your gut is often picking up manipulation before your mind names it.`,
            `One especially tricky kind: "FOR YOUR OWN GOOD" manipulation. Someone might say "I'm only doing this because I care about you" while actually controlling your choices for THEIR benefit. Real care respects your autonomy. Real care lets you decide for yourself, even if they disagree. If someone's "concern" feels controlling, it might be manipulation dressed up as love. This doesn't mean dismissing all advice, real care often DOES include honest input. The difference is whether the person trusts you to make your own decisions, or tries to force what they want by controlling you. Valor's teaching: real leaders are influential AND honest. They never need to manipulate, because their character, transparent goals, and genuine care for others naturally draw people toward them. Be that kind of leader, and protect yourself from those who aren't. The line between influence and manipulation is one of the most important integrity lines you'll walk your whole life.`,
          ],
          image: `/ue-assets/sl/l15-s4-recognize.webp`,
          imageCaption: `Watch for guilt-tripping, fake urgency, gaslighting, isolation, "for your own good" control.`,
          vocab: [
            {
              word: `for-your-own-good manipulation`,
              definition: `When someone uses "I'm only doing this because I care about you" to actually control your choices for THEIR benefit. Real care respects autonomy and lets you decide. Controlling concern is manipulation dressed as love. Trust your gut when concern feels controlling.`,
              audioPrompt: `For-your-own-good manipulation is when someone uses I'm only doing this because I care about you to control your choices for THEIR benefit, {name}. Real care respects your autonomy and lets you decide for yourself, even if they disagree. If someone's concern feels controlling, it might be manipulation dressed up as love. This doesn't mean dismissing all advice. Real care does include honest input. The difference is whether the person trusts you to make your own decisions, or forces what they want by controlling you.`,
            },
            {
              word: `gaslighting`,
              definition: `A manipulation tactic where someone denies or distorts what you saw, heard, or experienced, making you doubt your own perception. "That never happened." "You're too sensitive." One of the most damaging forms of manipulation because it targets trust in your own mind.`,
              audioPrompt: `Gaslighting is a manipulation tactic where someone denies or distorts what you saw, heard, or experienced, making you doubt your own perception, {name}. That never happened. You're imagining things. You're too sensitive. Gaslighting is one of the most damaging forms of manipulation because it targets your trust in your own mind. The fix: trust your gut. If you know what you saw, don't let someone else's denial overwrite it. Real care and honest influence never need to distort your reality to work.`,
            },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four situations where someone is trying to influence another person. Classify each: HONEST INFLUENCE (transparent, the other person can see and choose freely), MANIPULATION (hidden, exploits emotion, fails the transparency test), or MIXED (good intent but using sketchy methods)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `honest`, label: `Honest Influence`, color: `#34D399`, description: `Transparent, open about the ask, the other person can see clearly and choose freely.` },
            { id: `manip`,  label: `Manipulation`,     color: `#F87171`, description: `Hidden, exploits guilt/fear/emotion. The other person can't see what's actually happening. Fails the transparency test.` },
            { id: `mixed`,  label: `Mixed`,            color: `#FBBF24`, description: `Good intent, sketchy methods. Wants something good for the other person but uses pressure, urgency, or hidden tactics.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Situation #1`,
              clues: [
                { text: `A kid wants their friend to try out for the school play with them.` },
                { text: `They say: "I think you'd be great at this, and I'd love to have you there with me. Want to try?"` },
                { text: `When the friend says they're not sure, the kid says "totally up to you, no pressure either way."` },
              ],
              correctAnswer: `honest`,
              realWorldExample: `Transparent ask, real freedom to say no. Honest influence.`,
              explanation: `Pure honest influence. The kid is open about what they want and why ("I'd love to have you there"), uses LIKING and CONNECTION as influence, but respects the friend's freedom to decide ("no pressure either way"). Passes the transparency test easily, the friend can see exactly what's happening and choose freely.`,
            },
            {
              id: `case-2`,
              caseTitle: `Situation #2`,
              clues: [
                { text: `A kid wants their friend to give them their lunch dessert.` },
                { text: `They say: "If you were REALLY my friend, you'd give it to me. Don't you care about our friendship at all?"` },
                { text: `When the friend hesitates, the kid says "wow, okay, I'll just remember this."` },
              ],
              correctAnswer: `manip`,
              realWorldExample: `Guilt-tripping + threat = textbook manipulation.`,
              explanation: `Pure manipulation. Uses guilt ("if you were really my friend") and threat ("I'll remember this") to force a result. Hides the actual ask (just give me your dessert) behind emotional pressure. Fails the transparency test, would feel sketchy if the friend could see exactly what's happening. Real friendship doesn't need guilt.`,
            },
            {
              id: `case-3`,
              caseTitle: `Situation #3`,
              clues: [
                { text: `A kid genuinely wants to help their friend who's been eating only junk food.` },
                { text: `They secretly throw away the friend's snacks and put healthy ones in their lunchbox without telling them.` },
                { text: `When asked later, they say "I did it because I CARE about you. You need to eat better."` },
              ],
              correctAnswer: `mixed`,
              realWorldExample: `Good intent, but the methods bypass the other person's choice.`,
              explanation: `Pure mixed. The intent is genuine (wanting the friend to be healthier), but the methods are sketchy: hiding what they're doing, removing the friend's choice, then using "I care about you" to justify the deception. Doesn't pass the transparency test, the friend couldn't see what was happening. Real care would say openly: "I've been worried about your eating. Can we talk about it?" Good intent doesn't excuse manipulation methods.`,
            },
            {
              id: `case-4`,
              caseTitle: `Situation #4 — The Tricky One`,
              clues: [
                { text: `A kid wants their younger sibling to clean up their toys.` },
                { text: `They say sweetly: "Wow, you're SUCH a big kid now! Big kids ALWAYS clean up their toys. I bet you're the BIGGEST kid here."` },
                { text: `The little sibling beams and starts cleaning. The older kid smirks.` },
              ],
              correctAnswer: `manip`,
              realWorldExample: `Flattery designed to manipulate is still manipulation, even when "nice."`,
              explanation: `Tricky, {name}! It SOUNDS nice. The little sibling is happy. So you might call it mixed or even honest. But look at the smirk and the strategy. The older kid isn't really expressing genuine appreciation, they're using flattery and the "big kid" label to trick the sibling into doing what they want. Pure manipulation in disguise (the nice version). Fails the transparency test, if the little sibling could SEE what was happening ("I'm using flattery to get you to clean for me"), they'd feel tricked. Lesson: even nice-sounding manipulation is manipulation. Honest influence would have been: "Hey, can you help me clean up? I'd appreciate it." That respects the sibling's choice instead of tricking them. Flattery with hidden purpose is one of the most common manipulation tactics, and now you can spot it.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l15-q1`, format: `true-false`,
              question: `True or false: All influence is bad and manipulative.`,
              correctAnswer: false,
              explanation: `False. INFLUENCE is normal, healthy, and used by everyone every day. When you convince a friend, encourage a teammate, or make a case to your parents, you're influencing. The world needs people who can influence others toward good things. The question isn't whether to influence; it's HOW.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `Who is researcher Robert CIALDINI, and what did he find?`,
              options: [
                `He invented social media`,
                `He spent decades studying influence and found 6 main principles: RECIPROCITY, COMMITMENT, SOCIAL PROOF, AUTHORITY, LIKING, SCARCITY`,
                `He's fictional`,
                `He studied weather`,
              ],
              correctIndex: 1,
              explanation: `Cialdini studied how influence works and named 6 principles that consistently shape human behavior: reciprocity, commitment, social proof, authority, liking, scarcity. Each can be used HONESTLY (transparent) or DISHONESTLY (manipulation). Understanding them helps you use influence well and recognize manipulation.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `What's the KEY difference between INFLUENCE and MANIPULATION?`,
              options: [
                `Loudness`,
                `Influence is HONEST and TRANSPARENT (the person can see and choose freely); manipulation is HIDDEN or exploits weakness`,
                `Age`,
                `Whether you write it down`,
              ],
              correctIndex: 1,
              explanation: `Influence is honest and transparent. The other person can see what you're doing and choose freely. Manipulation is hidden, deceptive, or exploits emotion, so the person can't fully see what's happening. That's the integrity line every real leader walks carefully.` },

            { id: `l15-q4`, format: `multiple-choice`,
              question: `What is the TRANSPARENCY TEST?`,
              options: [
                `Looking through windows`,
                `Ask yourself: "Would I be okay if the other person could see EXACTLY what I'm doing and why?" — if no, you're probably manipulating`,
                `Clear glasses`,
                `Counting your words`,
              ],
              correctIndex: 1,
              explanation: `The transparency test: "Would I be okay if the other person could see EXACTLY what I'm doing and why?" If yes, honest influence. If no, probably manipulation. This single test, applied to yourself when you're trying to influence someone, will keep you honest your whole life.` },

            { id: `l15-q5`, format: `multiple-choice`,
              question: `Can the SAME principle (like SOCIAL PROOF) be used honestly OR dishonestly?`,
              options: [
                `Only honestly`,
                `Yes — honest: "the team uses this drill and finds it helpful" / dishonest: lying about what others do to pressure conformity ("EVERYONE'S doing it!")`,
                `Only dishonestly`,
                `Principles don't matter`,
              ],
              correctIndex: 1,
              explanation: `Yes. Each Cialdini principle can be used either way. Social proof used honestly: sharing what others actually do. Used dishonestly: lying or exaggerating to pressure conformity. Same with all six principles. The line is transparency: can the person see what you're doing and choose freely?` },

            { id: `l15-q6`, format: `multiple-choice`,
              question: `What are CLASSIC MANIPULATION SIGNS to watch for?`,
              options: [
                `Honesty and clarity`,
                `Guilt-tripping ("if you cared..."), fake urgency, gaslighting, isolation, "for your own good" control, hidden motives`,
                `Respectful asking`,
                `Listening well`,
              ],
              correctIndex: 1,
              explanation: `Manipulation signs: guilt-tripping ("if you really cared..."), fake scarcity ("act now or lose forever"), gaslighting (denying what you saw), pressure to decide quickly, isolation from other voices, "for your own good" control, hidden motives. Real influence doesn't need these tactics.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `What is FOR-YOUR-OWN-GOOD MANIPULATION?`,
              options: [
                `Good advice from a parent`,
                `When someone uses "I care about you" to actually CONTROL your choices for their benefit — real care respects your autonomy and lets you decide`,
                `Always doing what others say`,
                `Helpful coaching`,
              ],
              correctIndex: 1,
              explanation: `For-your-own-good manipulation is when someone uses "I care about you" to actually control your choices for their benefit. Real care respects your autonomy and lets you decide. If concern feels controlling rather than respectful, it might be manipulation dressed as love. Trust your gut.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `What's Valor's truth about real leaders and influence?`,
              options: [
                `Real leaders manipulate carefully`,
                `Real leaders are influential AND honest — they never need to manipulate, because their character, transparency, and care naturally draw people toward them`,
                `Leaders must always trick others`,
                `Honesty is too weak for leaders`,
              ],
              correctIndex: 1,
              explanation: `Real leaders are influential AND honest. They never need to manipulate, because their character, transparent goals, and genuine care for others naturally draw people in. Be that kind of leader. The line between influence and manipulation is one of the most important integrity lines you'll walk.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest with yourself, can you think of a time you used a slightly manipulative tactic (guilt, flattery, hidden pressure) to get something? What could you have done with honest influence instead?` },
            { id: `r2`, text: `Have you ever been manipulated by someone? Looking back, what tactic did they use? How did it feel to realize?` },
            { id: `r3`, text: `Apply the transparency test to something you want this week, would you be okay if the other person could see exactly what you're doing and why?` },
            { id: `r4`, text: `Of the 6 Cialdini principles, which one do you notice yourself using most (honestly)?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Cialdini's research is some of the most-cited and most-applied in psychology, used by leaders, sales people, doctors, teachers, parents, and unfortunately also by con artists, advertisers, and abusers. Understanding influence isn't just a leadership skill, it's a SELF-PROTECTION skill. The kid who recognizes manipulation can spot it coming and stay clear. The adult who understands influence can use it for good and avoid being used. Valor's note: you will be around influence and manipulation your whole life. Friends, family, advertisers, social media, politicians, romantic partners, eventually colleagues. Knowing the difference between honest influence and manipulation is one of the most empowering skills you can carry. Use the 6 principles honestly. Apply the transparency test to yourself constantly. Trust your gut when something feels off. And be the kind of leader who never needs to manipulate, because your character and care speak for themselves.`,
          familyAdventure: `Family Influence Awareness. As a family, talk together: where in your daily lives do you see influence used? (Ads, social media, school, friends, family.) Which feels honest, and which feels manipulative? Each person shares one example. Then talk about the transparency test, and apply it to something each person wants. Discuss what honest influence vs. manipulation looks like in your family interactions (avoiding guilt-tripping, fake urgency, "for your own good" control). Adults are honest about their own mistakes here. You're building a family that knows the difference and uses influence well, together.`,
          creativePrompt: {
            intro: `Write a scene where someone uses HONEST influence to convince someone of something — and contrast it with how a manipulator might have done it.`,
            floor: `Write at least 5 sentences. Show the honest version, then briefly the manipulative version.`,
            stretch: `Write 8 to 10 sentences. Build both versions with the transparency test made visible.`,
            open: `Write as much as you want. Write a full scene showing the line between honest influence and manipulation. Choose a situation where someone wants to influence another person (a friend, sibling, classmate, parent). First, show the HONEST version: transparent ask, real respect for the other person's freedom, using Cialdini principles openly (reciprocity, liking, social proof) without hiding anything. Then, briefly show what the MANIPULATIVE version of the same situation would look like: guilt-tripping, fake urgency, flattery with hidden purpose, "for your own good" control. Reflect on the transparency test and what it reveals about the difference. End with a quiet commitment to being a person who influences honestly. Make it specific and brave.`,
            frames: [
              `The situation was ___, and [kid] wanted ___.`,
              `The honest version: they ___ and ___.`,
              `The manipulative version (what they didn't do): ___.`,
              `The transparency test reveals: ___.`,
              `The kind of influencer I want to be is ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Strong, brave work, {name}. You now understand one of life's most important integrity lines: influence vs. manipulation. You know the 6 Cialdini principles, the transparency test, and how to recognize manipulation including the "for your own good" kind. Use influence honestly. Refuse to manipulate. Protect yourself from those who try. Next, we explore the foundation that makes all leadership possible: BUILDING TRUST. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `honest-influencer`,
          badgeName: `Honest Influencer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
