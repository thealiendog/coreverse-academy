// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L03 — Empathy in Action
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real empathy research — Brené Brown's empathy/sympathy
//            distinction, Theresa Wiseman's 4 attributes of empathy,
//            empathy vs pity. Grounded SEL.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (empathy in action / sympathy only /
//            not empathy at all). Trick case: well-meaning "silver lining"
//            response that actually dismisses the feeling.
// SCOPE: 4 concepts — what empathy is (and isn't), the 4 moves of empathy,
//        empathy vs sympathy (the difference matters), how to grow it
// VOICE: Valor = noble, warm, deeply respectful. Models empathy in his
//        warmth toward the kid.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-03`,
      title: `Empathy in Action`,
      duration: 18,
      xpReward: 75,
      badge: `empath-leader`,
      badgeName: `Empath Leader`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Last lesson, you learned the rare skill of real listening. Today we go one step deeper, into EMPATHY. Empathy is what makes listening matter. It's the ability to actually understand what another person is feeling, to sense their world from the inside, and to care about it. Empathy is at the heart of every great friendship, every healthy team, and every real leader. It's also one of the most misunderstood skills there is, most people confuse it with feeling sorry for someone, which is something very different. Today, we get clear on what real empathy is, and how to practice it. Take a breath, settle in, and let's begin.`,
          headline: `Empathy in Action`,
          subtitle: `Understanding what others feel, and showing you care`,
          visual: `/ue-assets/sl/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Empathy Really Is`,
          paragraphs: [
            `EMPATHY is the ability to SENSE and UNDERSTAND what another person is feeling, and to genuinely CARE about it. It's almost like you can feel their feeling with them, not exactly the same, but close enough to honor what they're going through. A kid with empathy notices when a friend looks sad, even if they're trying to hide it. They sense the embarrassment when someone trips in the hallway. They feel the worry on a parent's face. Empathy is a deeply human skill, you have it built in, and it can be grown enormously with practice.`,
            `Researchers (including a famous social scientist named Dr. BRENÉ BROWN, who studies empathy and connection) have found that empathy has FOUR key parts. First, PERSPECTIVE TAKING (seeing the situation from the other person's view). Second, STAYING OUT OF JUDGMENT (not deciding "they shouldn't feel that way"). Third, RECOGNIZING the emotion in the other person. Fourth, COMMUNICATING that you understand. Notice that empathy isn't a feeling that just happens to you. It's a SKILL with moves you can practice. Anyone can grow it, and people with strong empathy become the friends, family members, and leaders that others most trust and rely on.`,
          ],
          image: `/ue-assets/sl/l03-s1-what-is.webp`,
          imageCaption: `Empathy: sensing another's feeling, understanding it, caring. A skill with real moves.`,
          vocab: [
            { word: `empathy`,
              definition: `The ability to sense and understand what another person is feeling, and genuinely care about it. A skill (not just a feeling) with four key parts: perspective taking, staying out of judgment, recognizing emotion, communicating understanding.`,
              audioPrompt: `Empathy is the ability to sense and understand what another person is feeling, and to genuinely care, {name}. Almost like you can feel their feeling with them, close enough to honor what they're going through. A kid with empathy notices when a friend looks sad, even if they're trying to hide it. Researchers including Dr. Brené Brown found that empathy has four key parts. Perspective taking. Staying out of judgment. Recognizing the emotion. Communicating that you understand. Empathy isn't just a feeling. It's a skill you can grow.` },
            { word: `empathy attributes`,
              definition: `The four components of empathy identified by researcher Theresa Wiseman and used by Dr. Brené Brown: perspective taking, staying out of judgment, recognizing the emotion, and communicating that you understand.`,
              audioPrompt: `The four empathy attributes are the components of real empathy, {name}. Researcher Theresa Wiseman, studied by Dr. Brené Brown, identified them. First, perspective taking: seeing the situation from the other person's view. Second, staying out of judgment: not deciding they shouldn't feel that way. Third, recognizing the emotion: noticing what they're actually feeling. Fourth, communicating that you understand with real words or presence. These four moves turn empathy from a vague feeling into a real skill. Knowing the moves means you can actually practice them.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Empathy vs. Sympathy (The Difference Matters)`,
          paragraphs: [
            `Here's a distinction that changes everything: EMPATHY and SYMPATHY are NOT the same. Brené Brown explains it beautifully. Imagine someone you care about has fallen into a deep, dark hole. Empathy is climbing DOWN into the hole with them, sitting beside them in the dark, and saying "I'm here. This is hard. I'm with you." You don't fix it, you don't rush them out, you don't make it better. You just join them where they are. SYMPATHY, on the other hand, stays at the top of the hole, looking down, and calls out, "Oh, that's terrible! Well, at least it could be worse! Here's a silver lining! Look on the bright side!" The intent is kind, but the effect is the opposite, it leaves the person feeling MORE alone in their hole, not less.`,
            `Most "kind" responses people give to someone hurting are actually sympathy or "silver lining" answers, not empathy. They feel like helping, but they accidentally minimize what the person is feeling. ("It's not that bad." "At least you still have...." "Just think positive!") These responses tell the person their feeling is too much, wrong, or inconvenient. Empathy does the opposite. It says, with words or even silence, "Your feeling makes sense. I'm here. You're not alone." That tiny shift, from rushing to fix or brighten, to truly meeting someone where they are, is one of the most transformative things you can offer another person. It costs nothing. It changes everything.`,
          ],
          image: `/ue-assets/sl/l03-s2-vs-sympathy.webp`,
          imageCaption: `Empathy climbs into the hole and sits with you. Sympathy stays at the top and tells you to cheer up.`,
          vocab: [
            { word: `empathy vs sympathy`,
              definition: `Empathy joins someone where they are ("This is hard. I'm here with you."). Sympathy stays at a distance and offers "silver lining" answers ("It's not so bad! Cheer up!"). Empathy connects; sympathy unintentionally leaves people more alone.`,
              audioPrompt: `Empathy and sympathy are not the same, {name}. Brené Brown explains it like this. Imagine someone has fallen into a dark hole. Empathy climbs down into the hole with them. Sits beside them in the dark. Says: I'm here. This is hard. I'm with you. You join them where they are. Sympathy stays at the top and calls down: at least it could be worse, look on the bright side! The intent is kind, but it leaves the person feeling more alone. Empathy connects. Sympathy doesn't.` },
            { word: `silver lining response`,
              definition: `A well-meaning but minimizing reply to someone's pain. "At least it could be worse!" or "Just think positive!" comes from sympathy, not empathy. Silver lining responses leave people more alone in their struggle, not less.`,
              audioPrompt: `A silver lining response is a well-meaning but minimizing reply to someone's pain, {name}. Things like: at least it could be worse. Just think positive. The intent is kind, but the effect is the opposite of empathy. It tells the person their feeling is too much or should be quickly fixed. People feel more alone after silver lining responses, not less. Real empathy skips the silver lining. It joins the person where they are and says: this is hard. I'm here. That simple shift changes everything.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Four Moves of Empathy`,
          paragraphs: [
            `So how do you actually DO empathy? Here are the four moves, in order. First, PAUSE AND NOTICE. When you sense someone is going through something (their face, their voice, what they said), pause your own train of thought. Don't rush past it. The empathy starts the moment you actually notice. Second, PUT YOURSELF IN THEIR SHOES. Briefly imagine: if I were them, in their situation, how might I be feeling? You don't have to have lived their exact experience to imagine theirs. This is PERSPECTIVE TAKING, the heart of empathy.`,
            `Third, STAY OUT OF JUDGMENT. Don't decide "they shouldn't feel that way," or "I wouldn't react like that," or "they're overreacting." Whatever they're feeling is what they're feeling. Honor it, even if you wouldn't feel it. Fourth, SHOW THAT YOU UNDERSTAND. This is where words help. You don't need a fancy speech. Simple, real responses land best: "That sounds really hard." "I'm so sorry, that must have hurt." "I can see why you'd feel that way." "I'm here." Sometimes silence and presence say more than any words. Notice what empathy AVOIDS: fixing, advising, comparing ("at least..."), minimizing ("it's not that bad"), making it about you ("when that happened to me..."). All of those, even when well-meaning, pull you OUT of empathy and into something else.`,
          ],
          image: `/ue-assets/sl/l03-s3-four-moves.webp`,
          imageCaption: `Four moves: notice, perspective-take, no judgment, show you understand.`,
          vocab: [
            { word: `perspective taking`,
              definition: `The heart of empathy: briefly imagining yourself in the other person's situation and considering how you might feel. You don't have to share their exact experience to imagine theirs. Practiced by all empathic leaders.`,
              audioPrompt: `Perspective taking is the heart of empathy, {name}. Briefly imagining yourself in the other person's situation and considering how you might feel. If I were them, what might I be feeling? You don't have to have lived their exact experience to imagine theirs. It's what lets you connect with someone whose life is very different from yours. Great leaders, teachers, and friends are all skilled at perspective taking. They make others feel deeply understood by genuinely trying to see the world through their eyes.` },
            { word: `staying out of judgment`,
              definition: `One of the four empathy attributes: not deciding that the other person "shouldn't" feel what they feel or that they're overreacting. Judgment closes empathy; suspending it opens the door to real connection.`,
              audioPrompt: `Staying out of judgment is one of the four key moves of empathy, {name}. Not deciding the other person shouldn't feel what they feel. Not thinking: they're overreacting, I wouldn't feel that way, this isn't a big deal. Whatever they're feeling is what they're feeling. Judgment shuts empathy down the moment it enters. When you catch yourself about to judge a feeling, pause and ask: what might this feel like from the inside? Suspending judgment keeps the door to real empathy open. It's harder than it sounds.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Grow Your Empathy`,
          paragraphs: [
            `Empathy is built in, but like a muscle, it grows with use. Here are real ways to practice. First, NOTICE FACES AND VOICES. Most people walk through their day half-aware. An empathic kid notices that a friend's shoulders are tense, a teacher's voice sounds tired, a parent looks worried. Just noticing more is the first practice. Second, READ STORIES AND WATCH MOVIES with empathy in mind. Studies show that reading fiction (especially with rich characters) measurably builds empathy, because you're practicing seeing the world through other people's eyes. Books and stories are empathy gyms.`,
            `Third, ASK PEOPLE QUESTIONS about their experience, especially people whose lives are different from yours. ("What's that like for you?") Then listen with the L02 listening practice. The more you genuinely learn about other people's worlds, the more your empathy stretches. Fourth, REFLECT ON YOUR OWN FEELINGS. You can't really understand someone else's feelings if you've stopped noticing your own. The more aware you are of your own inner world, the more accurately you can sense someone else's. (Inner World subject was a great prep for this.) Valor's teaching: empathy is one of the most powerful gifts you can give another human being, and one of the most important skills of a real leader. In a world that often rushes past one another's pain, the kid who slows down and truly understands becomes the trusted center of every room they enter. Grow your empathy gently and consistently. The world will be different because you did.`,
          ],
          image: `/ue-assets/sl/l03-s4-grow.webp`,
          imageCaption: `Grow empathy: notice faces, read fiction, ask questions, know your own feelings.`,
          vocab: [
            { word: `empathy practice`,
              definition: `The deliberate growing of empathy through real daily practice: noticing faces and voices, reading fiction, asking people questions about their experience, reflecting on your own inner world. Empathy is built in, but it strengthens with use.`,
              audioPrompt: `Empathy practice is the deliberate growing of empathy through daily practice, {name}. Like a muscle, empathy grows with use. Notice faces and voices more carefully throughout your day. Read fiction, it's an empathy gym. Ask people questions about their experience, especially those whose lives are different from yours. Then listen well. Reflect on your own feelings too. You can't really understand someone else's feelings if you've stopped noticing your own. The more aware you are of your inner world, the more accurately you can sense someone else's.` },
            { word: `emotional attunement`,
              definition: `The ability to sense, notice, and respond to the emotional state of another person through subtle signals in faces, voice, and body language. Attunement grows with self-awareness and empathy practice.`,
              audioPrompt: `Emotional attunement is the ability to sense and respond to the emotional state of another person, {name}. Attuned people pick up on subtle signals. A voice that sounds quieter than usual. Shoulders that look tense. An expression that says "I'm struggling" even when nothing is said. Attunement grows as you practice noticing your own emotions, because the more clearly you understand your inner world, the more accurately you can read someone else's. Leaders with strong emotional attunement are trusted deeply, because people feel truly understood without needing to explain much.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. A friend says: "I didn't make the team. I really thought I would. I feel like I'm not good at anything." Here are four responses kids might give. Classify each: EMPATHY IN ACTION (joining them where they are, no fixing, just real understanding), SYMPATHY ONLY (silver-lining or "at least" responses that minimize), or NOT EMPATHY AT ALL (dismissing, judging, making it about themselves)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `empathy`,  label: `Empathy in Action`,  color: `#34D399`, description: `Joining them where they are. Sensing the feeling. Communicating understanding. No fixing.` },
            { id: `sympathy`, label: `Sympathy Only`,       color: `#FBBF24`, description: `Well-meaning "silver lining" or "at least" responses that minimize the feeling.` },
            { id: `none`,     label: `Not Empathy At All`,  color: `#F87171`, description: `Dismissing, judging, or making the moment about themselves. Misses the person entirely.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Response #1`,
              clues: [
                { text: `"That sounds really hard. I'm so sorry. It hurts when something you really wanted doesn't happen."` },
                { text: `They sit beside the friend. They don't try to fix it or change the subject.` },
                { text: `They let their friend feel what they're feeling without rushing it.` },
              ],
              correctAnswer: `empathy`,
              realWorldExample: `Joining someone in their feeling, with no fix, is real empathy.`,
              explanation: `Pure empathy in action. The kid sensed the feeling, took their friend's perspective, stayed out of judgment, and communicated understanding ("That sounds really hard"). They didn't try to fix it, didn't minimize it, didn't make it about themselves. They just sat with their friend in the hole. This is exactly what Brené Brown means by climbing into the hole with someone. It's the most powerful response there is.`,
            },
            {
              id: `case-2`,
              caseTitle: `Response #2`,
              clues: [
                { text: `"Oh come on, it's just one team. At least you still have other things you're good at!"` },
                { text: `"Just think positive! It's not THAT bad!"` },
                { text: `"You'll forget about it by next week, trust me."` },
              ],
              correctAnswer: `sympathy`,
              realWorldExample: `"Silver lining" answers minimize the feeling, even when well-meaning.`,
              explanation: `These are classic sympathy / silver-lining responses. The intent is kind, but the effect is that the friend feels MORE alone, not less, because their feeling has been minimized. Pure sympathy only. "It's not that bad" and "at least you..." tell someone their feeling is too much or wrong. Even well-meaning, these responses don't connect, they push the person back into their hole alone.`,
            },
            {
              id: `case-3`,
              caseTitle: `Response #3`,
              clues: [
                { text: `"Why are you crying about that? It's just a team."` },
                { text: `"My coach said I had to switch teams last year, that was way worse. Let me tell you about it."` },
                { text: `"You're being kind of dramatic, honestly."` },
              ],
              correctAnswer: `none`,
              realWorldExample: `Dismissing, judging, or hijacking the moment isn't empathy.`,
              explanation: `Pure not-empathy at all. The first response judges the friend ("being dramatic," "why are you crying"). The second makes the moment about themselves. The third dismisses the feeling. All three pull AWAY from the friend instead of toward them. Whatever the intent, these responses leave the friend feeling unseen and worse, not better. Easy mistakes to make, important to avoid.`,
            },
            {
              id: `case-4`,
              caseTitle: `Response #4 — The Tricky One`,
              clues: [
                { text: `"I totally get how you feel, the same thing happened to me last year. I cried for like a week, but you'll be okay, I promise!"` },
                { text: `The kid genuinely cares and is trying to relate.` },
                { text: `But the response quickly turns into the kid's own story, and ends with reassurance ("you'll be okay") rather than meeting the friend's feeling.` },
              ],
              correctAnswer: `sympathy`,
              realWorldExample: `Sharing your own story can hijack the moment if you're not careful.`,
              explanation: `Tricky, {name}! This SOUNDS empathic ("I get how you feel") and the kid genuinely cares. So you might call this empathy in action. But look closer. Two things go wrong. First, they quickly turn the moment to their OWN experience instead of staying with the friend. Second, they wrap it up with reassurance ("you'll be okay") which is a "silver lining" move, dismissing the feeling. Pure sympathy in disguise (the well-meaning version). Lesson: sharing your own story can hijack a moment of empathy if you do it too quickly. A small acknowledgment ("I've been there too") can be empathic, but pivoting fully to your story makes it about you. And rushing to "you'll be okay" minimizes what they're currently feeling. Real empathy would have stayed with the friend longer: "That sounds so painful. I remember how hard that kind of moment can be. What hurts most right now?" Notice the difference: staying centered on THEM, asking a real question, not rushing to fix or reassure. The most powerful empathy holds space, it doesn't fill it with your story or with cheer-up. This nuance is the key.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is EMPATHY, really?`,
              options: [
                `Feeling sorry for someone from a distance`,
                `Sensing and understanding what another person is feeling, and genuinely caring about it — a skill with real moves`,
                `Fixing other people's problems`,
                `Agreeing with everything`,
              ],
              correctIndex: 1,
              explanation: `Empathy is the ability to sense and understand what another person is feeling, and genuinely care about it. It's a SKILL (not just a feeling) with four key parts: perspective taking, staying out of judgment, recognizing emotion, and communicating understanding.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `According to Brené Brown's metaphor, what's the difference between EMPATHY and SYMPATHY?`,
              options: [
                `They're the same`,
                `Empathy CLIMBS DOWN into the hole with someone; sympathy stays at the top calling "silver lining" advice down`,
                `Sympathy is always better`,
                `Empathy is a type of pity`,
              ],
              correctIndex: 1,
              explanation: `Empathy climbs down into the hole and sits beside the person, joining them where they are. Sympathy stays at the top of the hole calling down "silver lining" answers ("at least it could be worse!"). Sympathy's intent is kind, but the effect is to leave the person more alone, not less.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `What are the FOUR moves of empathy?`,
              options: [
                `Run, hide, deny, ignore`,
                `PAUSE and notice, PUT YOURSELF in their shoes, STAY OUT of judgment, SHOW that you understand`,
                `Fix, advise, lecture, compare`,
                `Talk, talk, talk, talk`,
              ],
              correctIndex: 1,
              explanation: `Four moves: pause and NOTICE that someone's going through something, take their PERSPECTIVE (imagine being them), stay OUT OF JUDGMENT (don't decide they shouldn't feel that way), and SHOW you understand with simple words or presence.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `What does empathy AVOID?`,
              options: [
                `Caring`,
                `Fixing, advising, comparing ("at least..."), minimizing ("it's not that bad"), making it about you`,
                `Listening`,
                `Being present`,
              ],
              correctIndex: 1,
              explanation: `Real empathy avoids: fixing, advising (unless asked), comparing ("at least it could be worse"), minimizing ("it's not that bad"), and making the moment about you ("when that happened to me..."). All these, even well-meaning, pull you OUT of empathy.` },

            { id: `l03-q5`, format: `true-false`,
              question: `True or false: "Silver lining" responses like "at least you still have..." or "just look on the bright side!" are real empathy.`,
              correctAnswer: false,
              explanation: `False. Silver-lining responses are SYMPATHY, not empathy. They feel like helping, but they minimize the person's feeling and leave them more alone. Real empathy joins someone where they are, without rushing them to feel better. "That sounds hard" lands far better than "look on the bright side."` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `What is PERSPECTIVE TAKING?`,
              options: [
                `Looking at art`,
                `Briefly imagining yourself in the other person's situation and considering how you might feel — the heart of empathy`,
                `Painting a picture`,
                `Comparing heights`,
              ],
              correctIndex: 1,
              explanation: `Perspective taking is the heart of empathy: briefly imagining yourself in the other person's situation and considering how you might feel. You don't have to have lived their exact experience to imagine theirs. Great leaders, teachers, friends, and family are all skilled at this.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `Which is a real way to GROW empathy?`,
              options: [
                `Avoid all feelings`,
                `Notice faces and voices more carefully, read fiction (an empathy gym), ask people questions, reflect on your own feelings`,
                `Ignore everyone`,
                `Only think about yourself`,
              ],
              correctIndex: 1,
              explanation: `Real practices that grow empathy: notice faces and voices more carefully, read fiction (studies show it measurably grows empathy), ask people questions about their experience and listen, and reflect on your own inner world. Empathy is built in, but it strengthens with use.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `What's the empathy lesson about sharing your OWN story?`,
              options: [
                `Always share your story right away`,
                `A brief acknowledgment ("I've been there") can be empathic, but pivoting fully to your story HIJACKS the moment — keep the focus on them`,
                `Never share anything`,
                `Make it always about you`,
              ],
              correctIndex: 1,
              explanation: `A small acknowledgment ("I've been there too") can be empathic, but pivoting fully to your own story makes the moment about you. And rushing to "you'll be okay" minimizes the feeling. Real empathy stays centered on THEM longer. "That sounds painful. What hurts most right now?" lands far better.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Take a slow, warm breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of a time someone responded to your hurt with REAL empathy. What did they do? How did it feel?` },
            { id: `r2`, text: `Have you ever heard a "silver lining" response that was meant to be kind but made you feel worse? What do you wish they had said instead?` },
            { id: `r3`, text: `Notice gently, do you tend toward fixing, advising, "silver lining," or making things about yourself when someone shares pain? (No judgment, just noticing.)` },
            { id: `r4`, text: `Who in your life this week could use real empathy from you? What's one specific empathic thing you could say or do?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Empathy is one of the most studied and most predictive skills in psychology. Research consistently shows that empathic people have stronger friendships, more cooperative families, better teamwork, lower conflict, and (when grown into adults) more effective leadership. Empathy isn't soft, it's foundational. The best therapists, teachers, doctors, coaches, leaders, and parents in the world are deeply empathic. And the surprising research finding: empathy is one of the most TRAINABLE skills you have. The more you practice perspective taking and stay out of judgment, the more your brain literally builds the circuits for it. Valor's note: you live in a world that often rushes past one another's pain. The kid who slows down and truly understands becomes the trusted center of every room. Grow your empathy gently. Practice it daily. It will be one of your most powerful leadership tools, and one of the greatest gifts you give the people you love.`,
          familyAdventure: `Family Empathy Practice. As a family, try this for one week. When anyone shares something hard, no matter how small, the first response from others is empathy ONLY, NO fixing, NO advising, NO "silver lining," NO making it about anyone else. Just real empathic responses: "That sounds hard." "I'm sorry." "That makes sense." "I'm here." Notice how different the conversations feel. Most families default to fixing or "at least..." responses without realizing it. One week of practicing empathy first can transform how your family feels to each other. You're building a home where everyone feels truly understood.`,
          creativePrompt: {
            intro: `Write a scene where a kid responds to a friend in real EMPATHY (instead of sympathy or fix-it mode). Show the four empathy moves in action.`,
            floor: `Write at least 5 sentences. Show what the friend is going through, and the kid's empathic response.`,
            stretch: `Write 8 to 10 sentences. Build a fuller scene with the four empathy moves visible (pause, perspective-take, no judgment, show understanding).`,
            open: `Write as much as you want. Write a full scene showing real empathy in action between two kids. Set up the situation: the friend is going through something genuinely hard (a hurt, a disappointment, a loss, a fear, an embarrassment). Show the empathic kid moving through the four empathy moves clearly: PAUSING when they notice, TAKING THE FRIEND'S PERSPECTIVE, staying OUT OF JUDGMENT, and SHOWING THEY UNDERSTAND with simple, real words or quiet presence. Show what they DON'T do too, no fixing, no "silver lining," no pivoting to their own story, no minimizing. End with the friend feeling truly understood, and the empathic kid quietly knowing they did something rare and powerful. Make it specific, real, and tender.`,
            frames: [
              `The friend was struggling with ___.`,
              `When [empathic kid] noticed, instead of rushing to fix it, they ___.`,
              `They imagined what their friend was feeling: ___.`,
              `Instead of saying any of the easy unhelpful things, they simply said ___.`,
              `By the end, the friend felt ___, because real empathy is ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You've learned one of the most transformative skills in this whole subject: real empathy. You understand the four moves, the crucial difference from sympathy, what to avoid, and how to grow it daily. Almost no one practices empathy this well, and now you can. Use it gently with the people you love. Next, we explore the courage to share what you really think, without crushing anyone. SPEAKING UP KINDLY. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `empath-leader`,
          badgeName: `Empath Leader`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
