// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L02 — Listening: The Underrated Superpower
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real listening research — attention, active listening,
//            reflective listening. SEL fundamentals.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (5 steps of real listening, from FULL attention
//            inward to one good question outward)
// SCOPE: 4 concepts — most "listening" isn't listening, the real practice,
//        why it matters so much, how it builds your leadership
// VOICE: Valor = noble, quietly confident. Models real listening in his
//        warmth.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-02`,
      title: `Listening: The Underrated Superpower`,
      duration: 18,
      xpReward: 75,
      badge: `deep-listener`,
      badgeName: `Deep Listener`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore something that almost no one practices well, and it might be the single most powerful leadership skill there is: LISTENING. Not hearing words and waiting for your turn to talk. Real listening. The kind that makes the person across from you feel truly understood, sometimes for the first time. People notice when they're really listened to. They remember it for years. And the kid who learns to listen well, deeply, with full attention, becomes someone others trust, respect, and want around. Take a slow breath, settle in, and let's learn the real practice.`,
          headline: `Listening: The Underrated Superpower`,
          subtitle: `The rarest, most powerful skill in any room`,
          visual: `/ue-assets/sl/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Most "Listening" Isn't Listening`,
          paragraphs: [
            `Here's something honest: most of what people CALL listening isn't really listening. Watch any conversation. While one person is talking, the other person is usually doing something else inside their head: planning what they're going to say next, thinking about something unrelated, half-checking their phone, judging what's being said, or just waiting for their turn. Their face looks like listening. Their ears might be working. But their ATTENTION isn't fully there. That's not listening, that's waiting to talk. And the person speaking can often FEEL the difference, even if they don't say so.`,
            `This is normal and human, our brains are busy. But it's also a missed opportunity, because real listening is one of the most powerful gifts you can give anyone. When someone feels truly listened to, with your full, focused attention, something shifts. They feel respected. They feel SEEN. They feel less alone. They open up. They trust you more. Studies show that people who feel deeply heard are calmer, more cooperative, and more willing to think through problems together. Listening isn't passive. It's an active, generous act, and almost no one does it well. Which means even basic real listening makes you stand out in any room.`,
          ],
          image: `/ue-assets/sl/l02-s1-not-listening.webp`,
          imageCaption: `Most "listening" is just waiting to talk. Real listening is rare, and powerful.`,
          vocab: [
            { word: `real listening`,
              definition: `Giving someone your full, focused attention while they speak, without planning your reply, judging, or letting your mind wander. An active, generous act, very different from "waiting to talk." Makes people feel truly seen and respected.`,
              audioPrompt: `Real listening is giving someone your full, focused attention while they speak, {name}. Without planning your reply, judging, or letting your mind wander. Most of what people call listening isn't really listening. While one person is talking, the other is usually planning their reply or letting their mind wander. Their face looks like listening, but their attention isn't fully there. Real listening is rare, and that's exactly why it's so powerful. When someone feels truly listened to, they feel respected, seen, and less alone.` },
            { word: `active listening`,
              definition: `The deliberate practice of giving a speaker your full attention using real listening skills: turning toward them, quieting your inner voice, noticing feelings beneath words, reflecting back, and asking a good question. A skill that can be learned and improved.`,
              audioPrompt: `Active listening is the deliberate practice of giving a speaker your full attention, {name}. It's a choice, not something that just happens naturally. While passive listening means your ears work but your mind wanders, active listening means your whole self is present: turned toward them, inner voice quiet, noticing not just their words but the feelings beneath. Then you reflect back and ask a good question. Active listening takes effort, but the more you practice it, the more natural it becomes, and the deeper your connections grow.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Real Practice of Listening`,
          paragraphs: [
            `Real listening is a skill with real steps. Once you know them, you can practice them anywhere, anytime, with anyone. First, GIVE YOUR FULL ATTENTION. Turn your body toward the person, make calm eye contact (not staring, just present), and put away distractions, especially your phone. Your body language tells them "you matter right now." Second, QUIET YOUR INNER VOICE. This is the hardest part. Don't plan your reply while they're speaking. Don't judge what they're saying. Don't let your mind wander. If it wanders (it will, that's normal), gently bring it back. Listening is a kind of meditation, you're focusing fully on one thing: them.`,
            `Third, REFLECT BACK what you heard. Briefly, in your own words. "So you're saying you felt left out at recess today?" This proves you actually heard, and gives them a chance to clarify if you got it wrong. People feel SO much more understood when you reflect back. Fourth, ASK ONE GOOD QUESTION about what they said, not changing the subject to you. "What was the hardest part of that?" Good questions invite them to go deeper, and show you care. Notice what real listening is NOT. It's not giving advice (unless they ask). It's not fixing their problem. It's not making it about you. It's just being fully there, while they share. That's the practice.`,
          ],
          image: `/ue-assets/sl/l02-s2-practice.webp`,
          imageCaption: `Steps: full attention, quiet inner voice, reflect back, ask one good question.`,
          vocab: [
            { word: `reflective listening`,
              definition: `Briefly saying back, in your own words, what you heard the person say. "So you're saying you felt left out?" Proves you actually heard and lets them clarify. One of the most powerful listening moves.`,
              audioPrompt: `Reflective listening is briefly saying back, in your own words, what you heard the person say, {name}. So you're saying you felt left out at recess today? It sounds like that was really frustrating? This proves you actually heard, and gives them a chance to clarify if you got it wrong. People feel so much more understood when you reflect back. Reflective listening is one of the most powerful listening moves, used by great therapists, teachers, friends, and leaders everywhere.` },
            { word: `open question`,
              definition: `A question that can't be answered with just yes or no, and invites someone to share more. "What was the hardest part?" or "How did that make you feel?" Good open questions deepen conversations and show real care.`,
              audioPrompt: `An open question is one that can't be answered with just yes or no, {name}. It invites someone to share more. What was the hardest part? How did that make you feel? Contrast this with a closed question: Did you like it? That ends the conversation. An open question opens it. After you've listened and reflected back, one good open question shows you really care. It gives the other person space to go deeper, and often reveals what they actually needed to share.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Listening Matters So Much`,
          paragraphs: [
            `Why is listening such a huge leadership skill? Three powerful reasons. First, LISTENING BUILDS TRUST. People who feel listened to trust you. They tell you more. They cooperate with you. They want to be around you. You become the person they come to when something matters. Trust is the foundation of every real relationship and every team that works well, and it's built one listened-to moment at a time. Second, LISTENING TEACHES YOU. While other people are talking-over and waiting-to-talk, you're actually LEARNING who people are, what they care about, what's bothering them, what they need. You'll know your friends, teammates, and family members in a deeper way than almost anyone else around you.`,
            `Third, LISTENING DIFFUSES TENSION. When someone's upset, the FIRST thing they usually need isn't advice, solutions, or even agreement. It's to feel HEARD. A kid in conflict who feels truly listened to often calms down halfway through saying their piece, just because someone finally heard them. A friend going through something hard often doesn't need you to fix it, they need you to listen. Most arguments would end faster if both people just took turns really listening. Valor's teaching: in a world full of people talking, the kid who really listens stands out. Listening is one of the quiet superpowers that shapes friendships, families, teams, and one day, the kind of leader you become.`,
          ],
          image: `/ue-assets/sl/l02-s3-matters.webp`,
          imageCaption: `Listening builds trust, teaches you, and diffuses tension. The quiet superpower.`,
          vocab: [
            { word: `attention as gift`,
              definition: `The idea that your full attention is genuinely one of the most generous things you can give another person. In a world of distraction, focused listening is a real kindness that makes people feel seen and respected.`,
              audioPrompt: `Attention as gift is the idea that your full attention is one of the most generous things you can give another person, {name}. In a world of constant distraction, your focused listening is a real kindness. People feel it. They feel respected, seen, less alone. They often share more deeply with you than with anyone else, because you actually paid attention. Most arguments would end faster if both people just took turns really listening. Listening is the quiet superpower of friendships, families, teams, and great leaders.` },
            { word: `distraction`,
              definition: `Anything that pulls your attention away from the person speaking: your phone, your thoughts, planning your reply. Distraction is the enemy of real listening. Even small distractions signal to others that you're not fully present.`,
              audioPrompt: `Distraction is anything that pulls your attention away from the person speaking, {name}. Your phone. Your thoughts. Planning your reply before they're done. Distraction is the enemy of real listening. And here's the hard part: most distraction is invisible. Your body can look like it's listening while your mind is somewhere else entirely. People often sense this, even when they don't say so. That feeling of not being fully heard is lonely. Removing distractions, especially your phone, is one of the most concrete ways to show someone they matter.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Listening Builds Your Leadership`,
          paragraphs: [
            `Here's the connection back to leadership. Real leaders LISTEN MORE THAN THEY TALK. Think about a teacher you really respected. They likely listened carefully when you spoke. A coach who got the best from a team. They asked good questions and actually heard the answers. A friend who's a steady presence in your life. They listen when you need them. The kids and adults who become trusted leaders almost always share this skill: they make others feel heard. Bossy kids talk over people. True leaders listen first, then respond from understanding.`,
            `Here's the practical move: practice listening in small daily moments. Your sibling tells you something? Put your phone down, look up, listen fully. A friend shares something at school? Don't immediately make it about you. Reflect back what you heard. A family member is upset? Don't rush to fix it. Listen. Each time you really listen, you become more trusted, more respected, more wise about people, and more of a leader. And bonus, you'll find that listening also makes YOU calmer. While you're focused fully on someone else, your own busy mind quiets down. Listening is a gift to others AND to yourself. Practice it gently and often. It's the start of every other leadership skill we'll explore.`,
          ],
          image: `/ue-assets/sl/l02-s4-builds.webp`,
          imageCaption: `Real leaders listen more than they talk. Practice it daily, and trust grows.`,
          vocab: [
            { word: `listen first`,
              definition: `The leadership principle that the first move in almost any situation is to listen, not to respond, advise, or react. Listening first lets you respond from real understanding rather than guessing.`,
              audioPrompt: `Listen first is the leadership principle that the first move in almost any situation is to listen, not respond or react, {name}. Real leaders listen more than they talk. Bossy kids talk over people. True leaders listen first, then respond from understanding. Practice this in small daily moments. Your sibling tells you something? Put your phone down, listen fully. A friend shares something difficult? Don't rush to make it about you. Listen. Each time you really listen, trust grows and you become more of a leader.` },
            { word: `trust`,
              definition: `The feeling of safety, reliability, and respect that builds between people over time. Trust is the foundation of every real relationship and team. It's built one listened-to moment at a time.`,
              audioPrompt: `Trust is the feeling of safety and reliability that builds between people over time, {name}. It's the foundation of every real friendship, family, and team. Trust isn't earned through titles or big moments. It's built slowly, through small consistent acts. When you listen well, again and again, you become someone people trust. They know you're safe to talk to, that you won't dismiss them or make it about you. Every time you really listen, you add to that trust. And people feel it, even if they can't name why.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put real listening in order, {name}. Here are the five steps of the practice, scrambled. Use the arrows to arrange them from the FIRST move (getting ready to listen) to the LAST move (deepening the conversation). This is a real practice you can use today.`,
          items: [
            { id: `step-attention`,  label: `GIVE FULL ATTENTION: turn your body toward them, calm eye contact, put away distractions (especially your phone)`,             position: 1 },
            { id: `step-quiet`,      label: `QUIET YOUR INNER VOICE: don't plan your reply or judge as they speak — when your mind wanders, gently bring it back`,            position: 2 },
            { id: `step-listen`,     label: `ACTUALLY LISTEN to what they're saying — their words, their feelings underneath, what they're really trying to share`,           position: 3 },
            { id: `step-reflect`,    label: `REFLECT BACK what you heard, briefly, in your own words ("So you're saying you felt left out today?")`,                           position: 4 },
            { id: `step-question`,   label: `ASK ONE GOOD QUESTION about what they said (not changing the subject to you) — invite them to share more`,                       position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the practice of real listening: full attention, quiet inner voice, actually listen, reflect back, ask one good question. Use it today with a sibling, a friend, a family member. Watch what happens when someone realizes you're really listening. People will tell you things they don't tell anyone else, and you'll quietly become the trusted one in any room.`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is REAL LISTENING?`,
              options: [
                `Hearing words and waiting for your turn to talk`,
                `Giving someone your full, focused attention without planning your reply, judging, or letting your mind wander`,
                `Nodding while looking at your phone`,
                `Talking louder than them`,
              ],
              correctIndex: 1,
              explanation: `Real listening is giving someone your full, focused attention while they speak, without planning your reply, judging, or letting your mind wander. It's an active, generous act, very different from "waiting to talk." Most people don't actually do it.` },

            { id: `l02-q2`, format: `true-false`,
              question: `True or false: When people are "listening," they're usually planning what to say next or thinking about something unrelated.`,
              correctAnswer: true,
              explanation: `True. Most of what people CALL listening isn't really listening. Their face looks attentive, but their inner attention is on planning their reply, judging, or wandering. People often FEEL the difference, even when they don't say so. That's why real listening stands out.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What's the FIRST step of real listening?`,
              options: [
                `Interrupt with your story`,
                `GIVE FULL ATTENTION: body turned toward them, calm eye contact, distractions away`,
                `Check your phone`,
                `Plan your reply`,
              ],
              correctIndex: 1,
              explanation: `First step: give your FULL attention. Turn your body toward them, calm eye contact, distractions (especially phone) put away. Your body language tells them "you matter right now." This is the foundation of every listening move that follows.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `What does REFLECTIVE LISTENING mean?`,
              options: [
                `Staring into a mirror`,
                `Briefly saying back, in your own words, what you heard — "So you're saying you felt left out?"`,
                `Just nodding`,
                `Repeating word for word`,
              ],
              correctIndex: 1,
              explanation: `Reflective listening is briefly saying back, in your own words, what you heard them say. ("So you're saying you felt left out?") It proves you actually heard and lets them clarify. One of the most powerful listening moves, used by great therapists, teachers, friends, and leaders.` },

            { id: `l02-q5`, format: `multiple-choice`,
              question: `What is real listening NOT supposed to do?`,
              options: [
                `Pay attention`,
                `Give advice (unless asked), fix the problem, or make it about you`,
                `Be present`,
                `Care about the person`,
              ],
              correctIndex: 1,
              explanation: `Real listening is NOT about giving advice (unless they ask), fixing the problem, or making it about you. It's just being fully there while they share. Most people jump to advice or solutions; real listeners hold space and let the person feel heard first.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `What does REAL listening do for the person speaking?`,
              options: [
                `Makes them feel ignored`,
                `Makes them feel respected, seen, less alone, and more willing to share and cooperate`,
                `Makes them angry`,
                `Nothing`,
              ],
              correctIndex: 1,
              explanation: `When someone feels truly listened to, they feel respected, seen, and less alone. They open up more, trust you more, calm down more if they're upset, and cooperate more. Studies show people who feel deeply heard are calmer, more thoughtful, and more willing to work through things together.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `How is LISTENING connected to LEADERSHIP?`,
              options: [
                `Leaders shouldn't listen`,
                `Real leaders listen MORE than they talk — they earn trust, learn deeply about others, and respond from understanding`,
                `Only bosses listen`,
                `Listening makes you weak`,
              ],
              correctIndex: 1,
              explanation: `Real leaders listen more than they talk. They build trust (people feel respected), they learn deeply about others, they diffuse tension, and they respond from real understanding rather than guessing. Bossy kids talk over people. True leaders listen first, then respond. Listening is the start of every other leadership skill.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `What's the practical move for becoming a great listener?`,
              options: [
                `Wait until adulthood`,
                `Practice in small daily moments — sibling, friend, family — put down your phone, listen fully, reflect back, ask one good question`,
                `Take a class`,
                `Stop talking forever`,
              ],
              correctIndex: 1,
              explanation: `Practice listening in small daily moments. When a sibling, friend, or family member shares: put your phone down, give full attention, quiet your inner voice, reflect back, ask one good question. Each time you really listen, trust grows, you learn more, and you become more of a real leader.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Take a slow, steady breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `When was the last time you felt truly LISTENED to? What did the person do that made you feel that way?` },
            { id: `r2`, text: `Be honest, when someone's talking to you, what does your mind usually do? Plan a reply? Wander? Judge? Notice gently, without judgment.` },
            { id: `r3`, text: `Pick ONE person in your life this week to really practice listening with. Who, when, and what's one small move you'll try?` },
            { id: `r4`, text: `How might your friendships, your family, or your team change if you became known as someone who really listens?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `The skill of real listening is used by the best therapists, teachers, coaches, leaders, friends, and family members in the world. It's the foundation of every healthy relationship and every team that works well. People remember being truly listened to for years, sometimes decades. They often can name the person who listened to them when no one else did. That's how powerful it is. In a world flooded with talking, distraction, and noise, the person who knows how to really listen stands out and is deeply trusted. Valor's note: you don't need a title, talent, or special gift to become an exceptional listener. You just need the gentle commitment to put your attention where your body already is, with the person in front of you, fully, when they speak. That commitment, practiced daily, will quietly shape every relationship you ever have. It might be the most important skill in this whole subject.`,
          familyAdventure: `Family Listening Practice. As a family, sit together at one meal this week with NO phones at the table. Each person takes a turn sharing something (a moment from their day, a feeling, a thought) while everyone else practices real listening: full attention, quiet inner voice, no interrupting, then someone reflects back what they heard. Take turns. Notice how different it feels from a normal meal. Often, family members open up about things they wouldn't normally share, because they actually feel heard. You're building a family that listens to each other, which is one of the rarest and most precious gifts.`,
          creativePrompt: {
            intro: `Write about a time you felt truly listened to (or wished you had been), and what it taught you about the power of listening.`,
            floor: `Write at least 5 sentences. Describe the moment, what the listener did (or didn't do), and how it felt.`,
            stretch: `Write 8 to 10 sentences. Bring the moment to life with detail, and reflect on what real listening looked like in action (or what was missing).`,
            open: `Write as much as you want. Write a full piece about real listening. Choose either a moment when you felt truly heard, OR a moment when you wished someone had really listened to you but they didn't. Describe the moment in detail, what was happening, what you needed, what the other person did or didn't do. Then reflect on what real listening looks like in action: the full attention, the quiet inner voice, the reflective response, the good question. End by describing the kind of listener you want to become for the people in your life, and one small daily practice you'll commit to. Make it specific and honest.`,
            frames: [
              `The moment that comes to mind is when ___.`,
              `What I needed was ___.`,
              `What the other person did (or didn't do) was ___.`,
              `If they had been a real listener, they would have ___.`,
              `The kind of listener I want to become is ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Strong work, {name}. You now have the real practice of listening: full attention, quiet inner voice, actually listen, reflect back, ask one good question. Most people never learn this. You have it. Use it daily, in small moments, with people you love. You'll become someone deeply trusted, and that quiet trust is the foundation of true leadership. Next, we explore the closely related skill of truly understanding what others feel. EMPATHY IN ACTION. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `deep-listener`,
          badgeName: `Deep Listener`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L02 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
