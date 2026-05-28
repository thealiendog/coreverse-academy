// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L05 — Reprogramming Negative Self-Talk
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : cognitive psychology at a kid level (self-talk, reframing,
//            self-compassion). Grounded in real CBT-style ideas.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify self-talk: harsh critic / kind coach / reframe)
// SCOPE: 4 concepts — what self-talk is, the inner critic, how to reframe,
//        the kind-coach voice & self-compassion
// VOICE: Sage = gentle, validating, models the kind-coach voice
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-05`,
      title: `Reprogramming Negative Self-Talk`,
      duration: 18,
      xpReward: 75,
      badge: `kind-coach`,
      badgeName: `Kind Inner Coach`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we explore the voice inside your head, the one that talks to you all day long. You might not always notice it, but you have an inner voice constantly commenting: "I did well," "I look silly," "I can't do this," "I've got this." This is your SELF-TALK, and it has an enormous effect on how you feel and what you do. The wonderful news is that you can learn to change it, to turn a harsh inner critic into a kind, encouraging coach. Take a gentle breath, and let's begin this important practice.`,
          headline: `Reprogramming Negative Self-Talk`,
          subtitle: `Turning the harsh voice in your head into a kind, encouraging coach`,
          visual: `/ue-assets/iw/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Voice Inside Your Head`,
          paragraphs: [
            `Right now, and almost all day long, there's a voice in your mind talking to you. This is SELF-TALK: the inner conversation you have with yourself. Some of it you notice; much of it runs quietly in the background (remember the subconscious from last lesson?). Your self-talk comments on everything: how you're doing, what others think, what might happen, who you are. We all have it. It's a completely normal part of being human.`,
            `Here's why self-talk matters so much: it powerfully shapes your FEELINGS and your ACTIONS. Remember from our earliest lesson how naming a feeling can calm it? Self-talk works similarly, but in both directions. Kind, encouraging self-talk ("I can handle this, I'll take it one step at a time") helps you feel calmer and braver, and helps you keep trying. Harsh, critical self-talk ("I'm so stupid, I always fail") makes you feel worse and more likely to give up. The voice you use with yourself becomes the emotional weather you live in. And just like any pattern in your brain, your self-talk can be noticed, questioned, and gradually changed.`,
          ],
          image: `/ue-assets/iw/l05-s1-the-voice.webp`,
          imageCaption: `Self-talk is your inner conversation. It shapes how you feel and what you do.`,
          vocab: [
            {
              word: `self-talk`,
              definition: `The inner conversation you have with yourself all day. It comments on how you're doing, what others think, and who you are. Self-talk powerfully shapes your feelings and actions, and it can be changed.`,
              audioPrompt: `Self-talk is the inner conversation you have with yourself, {name}. There's a voice in your mind talking to you all day long. Some you notice; much runs quietly in the background. It comments on everything: how you're doing, what others think, who you are. We all have it. Here's why it matters: self-talk powerfully shapes your feelings and actions. Kind self-talk helps you feel calmer and braver. Harsh self-talk makes you feel worse and more likely to give up.`,
            },
            {
              word: `inner monologue`,
              definition: `The constant stream of thoughts and commentary running through your mind, making up most of your self-talk. Getting to know your inner monologue is the first step to changing it.`,
              audioPrompt: `Inner monologue is the constant stream of thoughts and commentary running through your mind all day, {name}. It's the part of self-talk you're most aware of: the voice that narrates your experiences, plans ahead, and replays the past. Some inner monologue is helpful and focused. Some is scattered or harsh. Getting to know your inner monologue is the first step to changing it. When you notice what your inner voice is saying, you can begin to choose thoughts that are truer and kinder.`,
            },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Meet Your Inner Critic`,
          paragraphs: [
            `Many people have a part of their self-talk that's harsh and critical, often called the INNER CRITIC. It's the voice that says things like "you're not good enough," "everyone's better than you," "you always mess up," "don't even try, you'll fail." Here's something important and kind to understand: almost everyone has an inner critic, and it usually isn't trying to hurt you on purpose. Often it formed early (remember limiting beliefs?), sometimes even trying to "protect" you by warning you away from risk or embarrassment. But its harsh methods usually do far more harm than good.`,
            `The inner critic is sneaky in two ways. First, it often speaks in EXTREMES: "always," "never," "everyone," "nothing." ("I ALWAYS fail." "NOBODY likes me.") These absolute words are almost never accurate. Second, it presents opinions as if they were FACTS. ("I'm stupid" feels like a fact, but it's actually a harsh opinion.) Here's a powerful test you can use: would you EVER talk to a good friend the way your inner critic talks to you? Almost certainly not. You'd be far kinder. Noticing this gap is the first step. You deserve at least the same kindness from yourself that you'd offer a friend, and learning to give it is a skill you can build.`,
          ],
          image: `/ue-assets/iw/l05-s2-inner-critic.webp`,
          imageCaption: `The inner critic speaks in extremes and disguises opinions as facts. Notice it gently.`,
          vocab: [
            {
              word: `inner critic`,
              definition: `The harsh, critical part of your self-talk that says things like "you're not good enough." It often speaks in extremes ("always," "never") and disguises opinions as facts. Almost everyone has one.`,
              audioPrompt: `The inner critic is the harsh, critical part of your self-talk, {name}. It says things like you're not good enough, or you always mess up. It's sneaky in two ways. First, it speaks in extremes: always, never, everyone, nothing. These absolute words are almost never accurate. Second, it presents opinions as facts. Here's a powerful test: would you ever talk to a good friend the way your inner critic talks to you? Almost certainly not. You deserve the same kindness from yourself that you'd offer a friend.`,
            },
            {
              word: `cognitive distortion`,
              definition: `A pattern of thinking that's inaccurate or exaggerated — like "I always fail" or "nobody likes me." Cognitive distortions are one of the inner critic's main tools. Spotting them is the beginning of reframing.`,
              audioPrompt: `Cognitive distortion is a pattern of thinking that's inaccurate or exaggerated, {name}. It's one of the inner critic's main tools. Extremes like always and never are distortions: they feel true, but they're almost never accurate. Treating opinions like facts is another distortion. For example, I'm stupid is an opinion, not a fact. When you spot a cognitive distortion, you've caught your inner critic in the act. That moment of spotting is the beginning of reframing. The more you recognize distortions, the less power they have over you.`,
            },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to Reframe Negative Self-Talk`,
          paragraphs: [
            `Now for the practical skill: REFRAMING. To reframe means to take a harsh, unhelpful thought and gently rewrite it into one that's more accurate AND more helpful. This isn't about fake positivity or lying to yourself, your wise mind would reject that. It's about finding a truer, kinder way to see the same situation. Here's the process: First, NOTICE the harsh thought ("I'm terrible at this"). Second, QUESTION it (is that really true? always? is it a fact or an opinion?). Third, REFRAME it into something true and kind.`,
            `Watch how it works. "I'm terrible at this" becomes "This is hard for me right now, and I'm still learning." "I always mess everything up" becomes "I made a mistake this time, and mistakes help me grow." "Nobody likes me" becomes "Making friends takes time, and I'm worth knowing." Notice the reframes aren't fantasy, they're often MORE accurate than the harsh version, while also being kind. A great reframe usually removes the extreme words ("always," "never"), turns opinions back into honest facts, and adds the hope of growth (often with that powerful word "yet"). With practice, reframing becomes a skill you can use anytime your inner critic speaks up.`,
          ],
          image: `/ue-assets/iw/l05-s3-reframe.webp`,
          imageCaption: `Reframe: notice the harsh thought, question it, rewrite it true AND kind.`,
          vocab: [
            {
              word: `reframing`,
              definition: `Taking a harsh, unhelpful thought and rewriting it into one that's more accurate AND more kind. Not fake positivity, but a truer, gentler way to see the same situation. Often removes extremes and adds hope.`,
              audioPrompt: `Reframing means gently rewriting a harsh thought into one that's more accurate and more kind, {name}. This isn't fake positivity. It's finding a truer, kinder way to see the same situation. Here's the process: first, notice the harsh thought. Second, question it: is it a fact or an opinion? Third, reframe it into something true and kind. For example, I'm terrible at this becomes this is hard for me right now, and I'm still learning. The reframe is often more accurate than the harsh version, while also being kinder.`,
            },
            {
              word: `thought challenging`,
              definition: `Questioning whether a negative thought is actually true before accepting it as fact. The second step of reframing: asking "is this really accurate?" before rewriting the thought into something truer and kinder.`,
              audioPrompt: `Thought challenging means asking honest questions about a negative thought before accepting it as true, {name}. Is this thought really accurate? Is it a fact or a harsh opinion? Am I using extreme words like always or never? Would the evidence actually support this? What would I tell a good friend who had this thought? This is the second step of reframing: pausing to question before you rewrite. Thought challenging is not about arguing with yourself. It's about being a fair, honest witness to your own thinking.`,
            },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Becoming Your Own Kind Coach`,
          paragraphs: [
            `The goal isn't to silence your inner voice, it's to transform it from a harsh critic into a KIND COACH. Think about a great coach or a wonderful teacher. They don't ignore your mistakes or pretend everything's perfect. But they're encouraging, patient, and believe in you. They say things like "Good effort, let's try that part again," and "You're improving, keep going." That's exactly the voice you can learn to use with yourself. A kind coach is honest AND supportive at the same time. This is also called SELF-COMPASSION: treating yourself with the same kindness you'd offer a good friend.`,
            `And here's why this truly works, not just feels nice: remember neuroplasticity and the subconscious? Every time you practice reframing a harsh thought into a kind one, you strengthen that new pathway in your brain. At first you'll have to do it consciously and on purpose. But with repetition, kinder self-talk gradually becomes more automatic, your new default voice. You are literally re-programming your inner voice through practice. Sage's gentle teaching: you talk to yourself more than anyone else ever will, all day, every day, for your whole life. Learning to make that voice kind, honest, and encouraging may be one of the greatest gifts you ever give yourself. Be patient. Be gentle. You are learning to become your own best coach.`,
          ],
          image: `/ue-assets/iw/l05-s4-kind-coach.webp`,
          imageCaption: `Become your own kind coach: honest AND supportive. Practice rewires the voice.`,
          vocab: [
            {
              word: `self-compassion`,
              definition: `Treating yourself with the same kindness, patience, and understanding you'd offer a good friend, especially when you struggle or make mistakes. The opposite of harsh self-criticism.`,
              audioPrompt: `Self-compassion means treating yourself with the same kindness you'd offer a good friend, {name}. Especially when you struggle or make a mistake. The goal isn't to silence your inner voice. It's to transform it from a harsh critic into a kind coach. A great coach doesn't ignore mistakes, but stays encouraging and patient. That's the voice you can use with yourself. Every time you reframe a harsh thought into a kind one, you strengthen that new brain pathway. With repetition, kinder self-talk becomes your new default voice.`,
            },
            {
              word: `kind coach`,
              definition: `The encouraging inner voice that replaces the harsh inner critic. A kind coach is honest about challenges AND warmly supportive at the same time — the voice you'd use with a good friend who's learning.`,
              audioPrompt: `Kind coach is the name for the encouraging inner voice that replaces the harsh inner critic, {name}. A kind coach is honest about challenges AND warmly supportive at the same time. It sounds like: good effort, let's try that again, or you're learning and improving. Unlike fake positivity, the kind coach doesn't pretend everything is perfect. And unlike the harsh critic, it never speaks in extremes. When you practice reframing, you're building your kind coach voice. Over time, that voice becomes your new default inner companion.`,
            },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Let's practice listening, {name}. Here are four examples of self-talk. Classify each one: HARSH CRITIC (cruel, extreme, opinions disguised as facts), KIND COACH (honest AND encouraging, the voice you'd use with a friend), or REFRAME IN ACTION (someone actively rewriting a harsh thought into a kinder, truer one)?\n\nOne is trickier than it looks.`,
          options: [
            { id: `critic`,  label: `Harsh Critic`,      color: `#F87171`, description: `Cruel, extreme ("always," "never"), opinions disguised as facts.` },
            { id: `coach`,   label: `Kind Coach`,         color: `#34D399`, description: `Honest AND encouraging. The voice you'd use with a good friend.` },
            { id: `reframe`, label: `Reframe in Action`,  color: `#FBBF24`, description: `Someone catching a harsh thought and rewriting it into a kinder, truer one.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Self-Talk #1`,
              clues: [
                { text: `"You're so stupid. You ALWAYS ruin everything. Why even try?"` },
                { text: `It uses extreme words and calls the kid names.` },
                { text: `It presents harsh opinions as if they were facts.` },
              ],
              correctAnswer: `critic`,
              realWorldExample: `This is the inner critic at its harshest.`,
              explanation: `Cruel, extreme ("always," "everything"), and disguising opinions ("stupid") as facts. Pure inner critic. Remember the test: you'd never say this to a friend, so you don't deserve it from yourself either.`,
            },
            {
              id: `case-2`,
              caseTitle: `Self-Talk #2`,
              clues: [
                { text: `"That part was hard. Good effort. Let's try it again, one step at a time."` },
                { text: `It's honest about the difficulty but stays encouraging.` },
                { text: `It's the voice you'd use with a friend who's learning.` },
              ],
              correctAnswer: `coach`,
              realWorldExample: `This is exactly how a great coach speaks.`,
              explanation: `Honest about the challenge AND warmly encouraging, just like a great coach or kind teacher. Pure kind coach. This is the voice you can practice using with yourself: supportive and true at the same time.`,
            },
            {
              id: `case-3`,
              caseTitle: `Self-Talk #3`,
              clues: [
                { text: `A kid thinks "I'm terrible at drawing," then pauses.` },
                { text: `They catch it and say: "Wait, that's harsh. The truth is, I'm still learning to draw, and I'm getting better with practice."` },
                { text: `They rewrote the harsh thought into a truer, kinder one.` },
              ],
              correctAnswer: `reframe`,
              realWorldExample: `Catching and rewriting a thought is reframing.`,
              explanation: `The kid noticed a harsh thought, questioned it, and rewrote it into something true AND kind. Pure reframe in action. This is the exact skill of reframing, and the more you practice it, the more automatic kind self-talk becomes.`,
            },
            {
              id: `case-4`,
              caseTitle: `Self-Talk #4 — The Tricky One`,
              clues: [
                { text: `"It's totally fine! I'm amazing at everything! Nothing is ever hard for me and I never need to practice!"` },
                { text: `It sounds positive and cheerful on the surface.` },
                { text: `But it's not honest, and it uses extreme words like "everything" and "never."` },
              ],
              correctAnswer: `critic`,
              realWorldExample: `Fake positivity is just the critic in disguise.`,
              explanation: `Tricky, {name}! This SOUNDS positive, so you might call it a kind coach. But look closer. It's not honest (nobody is amazing at everything and never needs practice), and it uses the same extreme words ("everything," "never") as the critic. This is FAKE positivity, and it's actually unhelpful, because it denies reality and sets you up to feel like a failure the moment something IS hard. A true kind coach is HONEST and encouraging. This voice is neither honest nor truly helpful, so it belongs with the unhelpful self-talk: closest to the harsh critic in disguise. Sage's gentle lesson: reframing is NOT pretending everything is perfect. That fake cheerfulness can be just as unhelpful as harsh criticism, because deep down you know it isn't true. Real self-compassion sounds like: "This is genuinely hard, AND I can keep learning." Honest and kind, together. That's the voice to grow.`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is SELF-TALK?`,
              options: [
                `Talking out loud to friends`,
                `The inner conversation you have with yourself all day, which shapes your feelings and actions`,
                `A type of homework`,
                `Only something you do when sad`,
              ],
              correctIndex: 1,
              explanation: `Self-talk is the inner conversation you have with yourself all day. It comments on how you're doing and who you are. Some you notice, much runs in the background. It powerfully shapes your feelings and actions, and it can be changed.` },

            { id: `l05-q2`, format: `multiple-choice`,
              question: `What is the INNER CRITIC?`,
              options: [
                `A helpful teacher`,
                `The harsh, critical part of your self-talk that says things like "you're not good enough"`,
                `A movie reviewer`,
                `Someone else's voice`,
              ],
              correctIndex: 1,
              explanation: `The inner critic is the harsh part of your self-talk ("you're not good enough," "you always fail"). Almost everyone has one. It usually isn't trying to hurt you on purpose, but its harsh methods do more harm than good.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `What are TWO sneaky tricks the inner critic uses?`,
              options: [
                `Whispering and singing`,
                `Speaking in extremes ("always," "never") and presenting opinions as if they were facts`,
                `Being quiet and polite`,
                `Only speaking at night`,
              ],
              correctIndex: 1,
              explanation: `The inner critic speaks in extremes ("I ALWAYS fail," "NOBODY likes me"), which are almost never accurate, and it disguises opinions as facts ("I'm stupid" feels like a fact but is a harsh opinion). Spotting these tricks helps you question it.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `What's a powerful TEST for whether your self-talk is too harsh?`,
              options: [
                `Ask if it rhymes`,
                `Ask: would I ever talk to a good friend this way? (If not, you don't deserve it from yourself either)`,
                `Ask if it's loud`,
                `Ask a teacher`,
              ],
              correctIndex: 1,
              explanation: `A powerful test: would you EVER talk to a good friend the way your inner critic talks to you? Almost certainly not, you'd be far kinder. You deserve at least the same kindness from yourself that you'd offer a friend.` },

            { id: `l05-q5`, format: `multiple-choice`,
              question: `What does it mean to REFRAME a thought?`,
              options: [
                `Put it in a picture frame`,
                `Take a harsh, unhelpful thought and rewrite it into one that's more accurate AND more kind`,
                `Ignore it completely`,
                `Make it louder`,
              ],
              correctIndex: 1,
              explanation: `Reframing means taking a harsh thought and rewriting it into one that's more accurate AND kind. "I'm terrible at this" becomes "This is hard right now, and I'm still learning." It's not fake positivity, it's a truer, gentler view.` },

            { id: `l05-q6`, format: `true-false`,
              question: `True or false: A good reframe means pretending everything is perfect and you're amazing at everything.`,
              correctAnswer: false,
              explanation: `False. That's FAKE positivity, which is unhelpful because deep down you know it isn't true. A real reframe is honest AND kind: "This is genuinely hard, AND I can keep learning." Real self-compassion never requires lying to yourself.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `What is the KIND COACH voice?`,
              options: [
                `A voice that ignores all mistakes`,
                `A voice that's honest about challenges AND encouraging — like a great coach who believes in you`,
                `A harsh drill sergeant`,
                `Total silence`,
              ],
              correctIndex: 1,
              explanation: `The kind coach is honest about challenges AND encouraging, like a great coach who says "Good effort, let's try again" and "You're improving." It's the voice of self-compassion: supportive and true at the same time, the voice to grow.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `Why does practicing kinder self-talk actually WORK over time?`,
              options: [
                `It doesn't work`,
                `Through neuroplasticity — each time you reframe, you strengthen that pathway, so kind self-talk gradually becomes automatic`,
                `Because someone forces you`,
                `Only if you're naturally positive`,
              ],
              correctIndex: 1,
              explanation: `Each time you reframe a harsh thought into a kind one, you strengthen that new brain pathway (neuroplasticity). At first it's deliberate, but with repetition, kinder self-talk gradually becomes your automatic default voice. You're re-programming your inner voice.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Take a slow, kind breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What does your inner critic tend to say when you make a mistake? Just notice it gently, with curiosity, not judgment.` },
            { id: `r2`, text: `Would you ever say those harsh words to a good friend? What WOULD you say to a friend in the same situation?` },
            { id: `r3`, text: `Pick one harsh thought you sometimes have and try reframing it right now into something true AND kind. How does the kinder version feel?` },
            { id: `r4`, text: `If your inner voice became a patient, encouraging coach, how do you think your days might feel different?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Learning to reframe negative self-talk is one of the most powerful skills for a happy, resilient life, and it's used everywhere. Top athletes train their self-talk as carefully as their bodies, because the voice in their head affects their performance. Therapists help people reframe harsh thoughts as a core part of feeling better. And anyone facing challenges (which is everyone) does better with an encouraging inner coach than a cruel inner critic. Sage's note: you'll spend your whole life with your own inner voice as your constant companion. Slowly, patiently turning that voice kind is not selfish or silly, it's wise. It changes how every single day feels. Be gentle with yourself as you practice. That gentleness IS the skill.`,
          familyAdventure: `Family Kind-Coach Practice. As a family, gently share (only what feels comfortable) one thing your inner critic sometimes says. Then, together, reframe each one into what a kind coach would say instead, honest AND encouraging. Make it a game: when someone catches their own harsh self-talk during the week, they can say "critic alert!" and the family helps reframe it. Grown-ups should play too, kids learn self-compassion best by seeing the adults they love practice it. You're building kinder inner voices together.`,
          creativePrompt: {
            intro: `Imagine your inner critic and your kind coach as two characters. Write a scene where the kind coach helps you (or a hero) through a tough moment.`,
            floor: `Write at least 5 sentences. Show the critic saying something harsh, then the kind coach reframing it into something true and encouraging.`,
            stretch: `Write 8 to 10 sentences. Show a real challenge, the critic's harsh take, and the kind coach helping the hero reframe and keep going.`,
            open: `Write as much as you want. Write a full story with two characters: the harsh Inner Critic (who speaks in extremes and disguises opinions as facts) and the wise Kind Coach (honest AND encouraging). Put your hero in a genuinely hard moment, a mistake, a failure, a scary challenge. Show the Inner Critic pouncing with harsh words, then show the Kind Coach gently stepping in to reframe each harsh thought into something truer and kinder, helping the hero feel calmer and braver and able to keep going. Show the hero learning they can choose which voice to listen to. Make it heartfelt and show real understanding of reframing and self-compassion.`,
            frames: [
              `When the hard moment came, the Inner Critic immediately said ___.`,
              `It made the hero feel ___.`,
              `Then the Kind Coach gently stepped in and said ___.`,
              `The Kind Coach reframed the harsh thought into ___.`,
              `The hero realized they could choose to ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You've learned one of the most valuable skills in all of Inner World: transforming negative self-talk. You now understand your self-talk and inner critic, the sneaky tricks the critic uses, how to reframe harsh thoughts into ones that are true AND kind, and how to become your own gentle, encouraging coach. Practice it patiently, and your inner voice will slowly grow kinder. Next, we learn a remarkable skill: how to step back and simply WATCH your thoughts. THE OBSERVER. Be gentle with yourself, and I'll see you there. — Sage.`,
          badge: `kind-coach`,
          badgeName: `Kind Inner Coach`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L05 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
