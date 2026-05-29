// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L17 — Identity: Who Am I Becoming?
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : developmental psychology — identity as malleable, not fixed.
// GAME FORMAT: investigation
// VERSION: v1  |  UE spec v1.1 compliant
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-17`,
      title: `Identity: Who Am I Becoming?`,
      duration: 18,
      xpReward: 75,
      badge: `identity-architect`,
      badgeName: `Identity Architect`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we explore one of the most important questions you'll ever ask yourself: WHO am I, and even more importantly, who am I BECOMING? Many kids (and grown-ups) think their identity, their sense of who they are, is something fixed they're stuck with. "I'm a shy kid." "I'm bad at math." "I'm the funny one." But modern psychology and everything you've learned in this subject points to a different truth. Identity isn't fixed. It's forming, every day. And you have far more say in who you become than people realize. Take a slow, curious breath, and let's begin.`,
          headline: `Identity: Who Am I Becoming?`,
          subtitle: `Your identity isn't fixed — it's forming, and you hold the pen`,
          visual: `/ue-assets/iw/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Identity Is Forming, Not Fixed`,
          paragraphs: [
            `IDENTITY is your sense of who you are. The stories you tell yourself about what kind of person you are, what you're good at, what you're not, what you like, what you stand for. Most people walk through life with their identity locked in: "I'm just a quiet person." "I've never been athletic." "I'm not a math person." These statements FEEL like simple truths about who they are. But here's the science: they are actually STORIES, often formed early, that became habits of self-description, often without us realizing it.`,
            `Modern psychology, plus everything you've learned in this subject, points to a different truth. Identity is far more like a story being WRITTEN than a label being discovered. The you of next month, next year, ten years from now, hasn't been written yet. The brain you have now (neuroplasticity, L02), the beliefs running quietly (limiting beliefs, L03; subconscious, L04), the patterns you repeat daily (Dispenza, L11), and the filter your RAS uses (L15), all of it is shapable. You aren't stuck with whoever you've been so far. You're FORMING who you're becoming, right now, in real time, with every thought, feeling, and action.`,
          ],
          image: `/ue-assets/iw/l17-s1-forming.webp`,
          imageCaption: `Identity is a story being written, not a label being discovered. You hold the pen.`,
          vocab: [
            {
              word: `identity`,
              definition: `Your sense of who you are, the stories you tell yourself about what kind of person you are. Often felt as fixed truth, but actually more like a story being written, shaped daily by actions, beliefs, and what we hear from others.`,
              audioPrompt: `Identity is your sense of who you are, {name}. The stories you tell yourself about what kind of person you are, what you're good at, what you stand for. Most people walk through life with their identity locked in. I'm just a quiet person. I've never been athletic. These statements feel like simple truths. But here's the science. They became habits of self-description. Identity is far more like a story being written than a label being discovered. You're not stuck with whoever you've been so far.`,
            },
            {
              word: `self-concept`,
              definition: `The overall picture you hold of who you are — your beliefs about your abilities, qualities, and value. Built slowly through experience, what others say, and what you tell yourself. Like identity, self-concept can grow and change over time.`,
              audioPrompt: `Self-concept is the overall picture you hold of who you are, {name}. Your beliefs about your abilities, qualities, and value. It's built slowly through your experiences, what others say, and what you tell yourself again and again. Your self-concept shapes what you try, what you avoid, and what you believe is possible for you. A kid with a healthy, strong inner picture can take on challenges. One with a wounded inner picture tends to shrink from them. And like identity, this inner picture can grow and change.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Identity Gets Shaped`,
          paragraphs: [
            `Three big forces shape your identity, and being aware of them gives you real power. First, your ACTIONS. The things you repeatedly DO become who you are. A kid who reads every day, even just a little, slowly becomes "a reader." A kid who practices kindness becomes "a kind person." Your nervous system, brain, and self-image all update based on what you actually DO over time. Second, your BELIEFS about yourself (limiting and empowering, from L03). If you believe "I'm not creative," your RAS filters for evidence supporting that, and you avoid creative activities, which keeps you from becoming creative. The belief shapes the identity, and the identity shapes the actions.`,
            `Third, what OTHERS say about you, especially when you're young. When important people (family, teachers, friends) repeatedly tell you "you're the smart one," "you're so shy," "you're the troublemaker," those labels often get absorbed into your identity without you noticing. Some of those labels help; some quietly limit you for years. Here's the empowering truth: once you're AWARE of all three forces (your actions, your beliefs, the labels you've absorbed), you can start to question, choose, and reshape them. You don't have to live by stories about yourself that other people wrote or that you adopted long ago. You can write new ones.`,
          ],
          image: `/ue-assets/iw/l17-s2-shaped.webp`,
          imageCaption: `Identity is shaped by what you DO, what you BELIEVE, and what OTHERS say about you.`,
          vocab: [
            {
              word: `identity labels`,
              definition: `The words others use to describe you that get absorbed into your sense of who you are, especially when you're young. "You're so shy." "You're the smart one." Some help; some quietly limit you. Awareness lets you choose which ones to keep.`,
              audioPrompt: `Identity labels are the words others use to describe you that get absorbed into your sense of who you are, {name}. Especially when you're young. When important people, family, teachers, friends, repeatedly tell you you're the smart one, or you're so shy, or you're the troublemaker, those labels often get absorbed into your identity without you noticing. Some of those labels help. Some quietly limit you for years. Once you're aware of the labels you've absorbed, you can choose which ones to keep.`,
            },
            {
              word: `internalization`,
              definition: `The process by which labels and messages from others get absorbed into your sense of who you are. When you internalize a label, it starts shaping your behavior and how you see yourself — as if the label were a fact rather than just a word someone said.`,
              audioPrompt: `Internalization is when messages or labels from others get absorbed so deeply they start to feel like facts about who you are, {name}. It happens quietly, especially when you're young. A teacher says you're talented. A parent says you're stubborn. A friend says you're so serious. Over time, you start to act as if these labels are true, and they shape what you try, avoid, and believe about yourself. The powerful thing is that once you see internalized labels for what they are, you can choose which ones to keep.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Every Action Is a Vote`,
          paragraphs: [
            `Here's one of the most powerful ideas in this whole subject. Every action you take is a VOTE for the kind of person you're becoming. Pick up a book and read for 10 minutes? That's a vote for "I'm a reader." Practice kindness when it would have been easier to be rude? Vote for "I'm a kind person." Stay calm when you wanted to react? Vote for "I'm someone who can regulate myself." Try the hard thing instead of avoiding it? Vote for "I'm brave." You don't have to win every "election" (the kind of person you're becoming) with a single action. You just have to cast votes consistently, day after day. Identity is built through the accumulation of these small, repeated choices.`,
            `Notice that this works in reverse too. Every time you skip the thing you said you cared about, that's a small vote in another direction. Not a moral failing, just data: the actions are telling the truth about who you're becoming. So this isn't about being perfect. It's about being AWARE that you're voting all the time, and gently choosing more of your actions on purpose. The phrasing matters too. Compare "I'm TRYING to read more" with "I AM someone who reads." The first stays at arm's length from your identity. The second IS an identity statement, and your brain (which loves consistency) starts arranging the rest of your behavior to match. Small shift in language, big shift in who you become.`,
          ],
          image: `/ue-assets/iw/l17-s3-vote.webp`,
          imageCaption: `Every action is a vote. Identity is built from the accumulation of small daily choices.`,
          vocab: [
            {
              word: `identity vote`,
              definition: `Each action you take is a small vote for the kind of person you're becoming. Reading is a vote for "I'm a reader." Kindness is a vote for "I'm kind." Identity is built from the accumulation of small, repeated daily choices.`,
              audioPrompt: `An identity vote is each small action you take that signals the kind of person you're becoming, {name}. Pick up a book and read for 10 minutes? That's a vote for I'm a reader. Stay calm when you wanted to react? Vote for I'm someone who can regulate myself. Try the hard thing instead of avoiding it? Vote for I'm brave. You don't have to win every election with a single action. Just cast votes consistently, day after day. Identity is built through the accumulation of small, repeated choices.`,
            },
            {
              word: `process identity`,
              definition: `An identity built around HOW you act ("I am someone who works hard and learns") rather than what you ARE ("I am smart"). Process identity invites growth; trait identity can block it — Carol Dweck's research on growth vs. fixed mindset shows this clearly.`,
              audioPrompt: `Process identity is building your sense of who you are around how you act, rather than what you are, {name}. Compare I am smart with I am someone who works hard and learns. The first is a trait. The second is a process. Here's why it matters. Trait-based identity can make you avoid struggle, because failing threatens who you are. Process-based identity actually invites challenge, because trying hard and learning is exactly what the identity calls for. Carol Dweck's research on growth mindset shows this clearly.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Designing Your Identity on Purpose`,
          paragraphs: [
            `Now the practical part. You can deliberately design your identity, gently, over time. Here's how. First, ask yourself: WHO do I want to be? Not what do I want to have or do, but what kind of person do I want to be? Calm? Curious? Kind? Brave? Creative? A good friend? Pick a few qualities that genuinely resonate with you. Second, write them as identity statements: "I am someone who is curious." "I am someone who is kind." Notice the language, not "I want to be," but "I am." Your brain treats identity statements as instructions for how to behave. Third, cast small daily VOTES that match. If you're becoming someone curious, ask more questions today. If you're becoming someone kind, do one kind thing. The votes don't have to be big, they just have to be real.`,
            `One important note: this isn't about pretending or faking it. It's about choosing which version of yourself you're growing TOWARD, and giving that version the small actions it needs. Combine this with everything you've learned: the future-self rehearsal (L11), the kind coach voice (L05), gratitude and elevated emotion (L08, L11, L16), the Observer (L06), and your RAS (L15). All of it serves one bigger project: becoming the version of you that you genuinely want to be. Sage's gentle teaching: you are not the kid you were last year. You won't be the kid you are today, next year. You are always becoming. The kindest, wisest thing you can do is to become on PURPOSE, with awareness, patience, and love. The pen is in your hand. Write a beautiful story.`,
          ],
          image: `/ue-assets/iw/l17-s4-design.webp`,
          imageCaption: `Design your identity: pick qualities, write "I am" statements, cast small daily votes.`,
          vocab: [
            {
              word: `identity statement`,
              definition: `Saying "I AM someone who [quality]" instead of "I'm trying to" or "I want to be." Identity statements work because the brain treats them as instructions for how to behave and quietly arranges behavior to match.`,
              audioPrompt: `An identity statement is saying I am someone who is curious, or I am someone who is kind, {name}. Notice the language. Not I want to be, but I am. Your brain treats identity statements as instructions for how to behave. Compare I'm trying to read more with I am someone who reads. The first stays at arm's length from your identity. The second is an identity statement, and your brain, which loves consistency, starts arranging your behavior to match. Small shift in language, big shift in who you become.`,
            },
            {
              word: `values`,
              definition: `The qualities and principles that matter most to you and guide who you want to become. Values serve as the compass for designing identity on purpose — when you're clear on what you value (kindness, curiosity, bravery), casting identity votes and writing "I am" statements becomes natural.`,
              audioPrompt: `Values are the qualities and principles that matter most to you and guide how you want to act, {name}. They're the compass behind designing your identity on purpose. When you're clear on what you value, kindness, curiosity, bravery, creativity, the daily choices of who you want to become become much clearer. Your values answer the question: what kind of person do I want to be? Once you know your values, writing identity statements and casting identity votes feels natural. Values are the foundation your identity is built on.`,
            },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids and how they're shaping their identity. Classify each one: FIXED IDENTITY STORY (locked into a label, treating it as unchangeable truth), IDENTITY BY DESIGN (intentionally voting through small daily actions for who they're becoming), or IDENTITY DRIFT (passively accepting whatever labels others put on them, without thinking)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `fixed`,  label: `Fixed Identity Story`, color: `#F87171`, description: `Locked into a label and treating it as fixed truth, even when it limits them.` },
            { id: `design`, label: `Identity by Design`,   color: `#34D399`, description: `Intentionally casting small daily votes through actions for who they want to become.` },
            { id: `drift`,  label: `Identity Drift`,       color: `#94A3B8`, description: `Passively accepting whatever labels others put on them, without thinking.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid says: "I'm just bad at math. I've always been. I always will be."` },
                { text: `Whenever a math challenge comes up, they avoid it because "that's not who I am."` },
                { text: `Their identity statement keeps them from ever really trying or growing.` },
              ],
              correctAnswer: `fixed`,
              realWorldExample: `Locking yourself into a limiting label = fixed identity.`,
              explanation: `The kid has locked into a fixed identity story ("I'm just bad at math") and is treating it as unchangeable truth. Pure fixed identity. This story is now limiting their actions, their RAS filter, and what they're willing to try, which keeps the story "true." Combined with growth mindset and small votes, they could rewrite this story.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid decides they want to become someone CURIOUS.` },
                { text: `Each day, they ask one new question, read one new thing, or try one small new activity.` },
                { text: `Slowly, over months, they really do become more curious, and start identifying with it.` },
              ],
              correctAnswer: `design`,
              realWorldExample: `Picking a quality and casting small daily votes is identity by design.`,
              explanation: `The kid chose a quality (curiosity) and is casting small, real daily votes for it. Pure identity by design. The accumulation of these votes is literally building the curious version of themselves. The identity isn't pretend, it's becoming real through repeated action.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid keeps hearing from family that they're "the shy one." They never really questioned it.` },
                { text: `Without thinking about it, they've started acting more and more shy because "that's who I am."` },
                { text: `They haven't chosen this identity, they just absorbed it from what others repeatedly told them.` },
              ],
              correctAnswer: `drift`,
              realWorldExample: `Absorbing labels from others without questioning is identity drift.`,
              explanation: `The kid didn't choose to be shy, they absorbed the label "the shy one" from family without questioning it, and gradually shaped their identity around it. Pure identity drift. The label may not even be accurate, just repeated. Awareness is the first step. They can now choose: keep the label, modify it, or write a new one.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `A kid has heard their whole life "you're the SMART kid." They believe it. They identify strongly with being smart.` },
                { text: `When a subject is hard, they avoid it, because struggling would prove they're "not really smart."` },
                { text: `They don't try new things they might not be instantly good at, because it would threaten their identity.` },
              ],
              correctAnswer: `fixed`,
              realWorldExample: `"Positive" labels can lock you in too.`,
              explanation: `Tricky! The kid's identity sounds positive ("the smart kid"), so you might call it identity by design. But look closely. They locked into a TRAIT label ("smart"), and now that label is limiting them, they avoid struggle and new challenges because failing would threaten the identity. Pure fixed identity (the "positive" trap version). Lesson: even "positive" fixed identities can limit you. The fix is shifting from TRAIT identity ("I AM smart") to PROCESS identity ("I AM someone who works hard and learns"). Process-based identity invites growth; trait-based identity often blocks it. Carol Dweck's research (growth vs fixed mindset, from L02) shows this clearly. Choose your identity statements wisely, the ones about how you ACT tend to be more empowering than the ones about what you ARE.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is IDENTITY, really?`,
              options: [
                `A fixed label you're stuck with`,
                `Your sense of who you are — actually more like a story being WRITTEN than a label being discovered`,
                `Only what others say about you`,
                `Genetic only`,
              ],
              correctIndex: 1,
              explanation: `Identity is your sense of who you are: the stories you tell yourself about what kind of person you are. It's more like a story being written than a label being discovered. Shaped by actions, beliefs, and what we absorb from others, identity is forming, not fixed.` },

            { id: `l17-q2`, format: `true-false`,
              question: `True or false: Identity is fixed by age 10 and can't really change after that.`,
              correctAnswer: false,
              explanation: `False. Identity is shapable throughout life thanks to neuroplasticity (L02), the subconscious (L04), and your daily actions. The you of next month, next year, ten years from now hasn't been written yet. You're forming who you're becoming, every day, in real time.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `What are the THREE main forces that shape your identity?`,
              options: [
                `Sleep, food, exercise`,
                `Your repeated ACTIONS, your BELIEFS about yourself, and the LABELS others put on you`,
                `Only luck`,
                `Nothing shapes it`,
              ],
              correctIndex: 1,
              explanation: `Three forces shape identity: your actions (what you repeatedly do becomes who you are), your beliefs (what you tell yourself about who you are), and what others say (labels you absorb from family, teachers, friends). Awareness of all three lets you choose and reshape them.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `What's the big idea about IDENTITY VOTES?`,
              options: [
                `Voting in elections only`,
                `Every action you take is a small vote for the kind of person you're becoming — identity is built from the accumulation of choices`,
                `Only big actions matter`,
                `Actions don't matter`,
              ],
              correctIndex: 1,
              explanation: `Every action is a small vote. Reading is a vote for "I'm a reader." Kindness is a vote for "I'm kind." You don't have to win every election with one action. You just have to cast votes consistently. Identity is built from the accumulation of small, repeated choices.` },

            { id: `l17-q5`, format: `multiple-choice`,
              question: `Compare "I'm TRYING to read more" with "I AM someone who reads." What's the difference?`,
              options: [
                `They're the same`,
                `The second is an IDENTITY STATEMENT — your brain treats it as an instruction and arranges behavior to match`,
                `The first is better`,
                `Words don't matter`,
              ],
              correctIndex: 1,
              explanation: `"I AM someone who reads" is an identity statement. Your brain treats identity statements as instructions for how to behave and (loving consistency) starts arranging behavior to match. Small shift in language, big shift in who you become.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `Why can even "POSITIVE" fixed labels (like "the smart kid") sometimes LIMIT you?`,
              options: [
                `They don't, positive labels are always good`,
                `They lock you into a TRAIT — and you may avoid struggle or new challenges because failing would threaten the identity`,
                `Only negative labels matter`,
                `Labels are harmless`,
              ],
              correctIndex: 1,
              explanation: `Even positive fixed labels can limit you. "The smart kid" can make a kid avoid struggle or new challenges because failing threatens the identity. The fix: shift from TRAIT identity ("I am smart") to PROCESS identity ("I am someone who works hard and learns"). Process invites growth.` },

            { id: `l17-q7`, format: `multiple-choice`,
              question: `What's a GOOD way to design your identity on purpose?`,
              options: [
                `Wait for it to happen`,
                `Pick qualities you want (kind, curious, brave), write "I AM" statements, cast small daily votes through actions`,
                `Copy someone else completely`,
                `Hope for the best`,
              ],
              correctIndex: 1,
              explanation: `Design identity by: picking a few qualities you genuinely want (kind, curious, brave), writing them as "I am" statements (not "I'm trying"), and casting small daily votes through real actions that match. The combination is how new identity slowly becomes who you actually are.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `According to Sage, what's the deepest truth about identity?`,
              options: [
                `You can't change who you are`,
                `You are always becoming. The kindest, wisest thing you can do is to become on PURPOSE, with awareness, patience, and love`,
                `Identity is locked at birth`,
                `Only adults can change`,
              ],
              correctIndex: 1,
              explanation: `You are not the kid you were last year. You won't be the kid you are today, next year. You are always becoming. The kindest, wisest thing is to become on purpose, with awareness, patience, and love. The pen is in your hand. Write a beautiful story.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Take a slow, thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What labels have other people put on you over the years? Notice them gently. Which feel like YOU, and which were maybe just absorbed?` },
            { id: `r2`, text: `If you could choose 3 qualities to become more of, what would they be? (Examples: kind, curious, brave, creative, calm, generous, a great friend.)` },
            { id: `r3`, text: `Pick ONE of those qualities. What's ONE small daily "vote" you could cast for it this week?` },
            { id: `r4`, text: `Try writing one "I am" statement for the future you you're becoming. How does it feel to say it?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Identity work is one of the most powerful kinds of inner work, used in psychology, athletics, leadership, and personal growth. The best teachers, coaches, and therapists understand that lasting change happens at the IDENTITY level, not just the behavior level. Someone who identifies as "a runner" runs more easily than someone "trying to exercise." Someone who identifies as "kind" makes kind choices naturally. The science of identity intersects with neuroplasticity, growth mindset, habits, and the subconscious. It's some of the most empowering knowledge there is. Sage's note: you're at an age where your sense of self is actively forming. That's a gift. You get to be aware of the labels you've absorbed, choose the qualities you want to grow, and start voting daily for who you're becoming. Be patient. Be gentle. The pen is in your hand. The story you write will be a beautiful one.`,
          familyAdventure: `Family Identity Design. As a family, each person picks 1-3 qualities they want to grow more of in themselves (kind, curious, brave, calm, generous, creative, a great listener, etc.). Write them as "I am someone who..." statements. Then each person picks ONE small daily "vote" they'll cast this week to match each quality. Check in at the end of the week, who voted, what was hard, what felt good. Make it kind, not strict, the point isn't perfection, it's awareness. You're learning to design your becoming, together.`,
          creativePrompt: {
            intro: `Write a letter to the future version of yourself you're becoming, one year from now, who has grown into the qualities you're voting for daily.`,
            floor: `Write at least 5 sentences. Name 2-3 qualities you're growing into, and what small daily votes you're casting.`,
            stretch: `Write 8 to 10 sentences. Describe the future you in vivid detail, and how your daily votes built that person over the year.`,
            open: `Write as much as you want. Write a full letter to your future self one year from now, who has been gently designing their identity through daily votes. Pick 2-3 specific qualities you're growing into (kind, brave, curious, creative, calm, a great friend, whatever genuinely calls to you). Describe the future you who has grown into these qualities in vivid detail, what they think, feel, do differently, how others experience them. Then describe the daily votes that built that person over the year, the small actions cast again and again. Honor that some days the votes felt easy and some days they felt impossible, and that the voting is what mattered, not perfection. End with encouragement and love for your present self. Write with the warmth of someone who knows you deeply, because you do.`,
            frames: [
              `Dear future me, the qualities I've been voting for are ___.`,
              `What's most different about me now is ___.`,
              `The daily votes I cast looked like ___.`,
              `Some days were hard, especially when ___, but I kept voting because ___.`,
              `To my present self I want to say ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now understand one of the deepest truths in this whole subject: you are not fixed, you are FORMING. Identity is a story being written, and you hold the pen. You know the three forces that shape it, the power of identity votes and identity statements, the limits of fixed labels (even positive ones), and how to design your identity on purpose. Use this gently. You're at the perfect age to start. Next, we explore one of the most profound ideas in this whole subject: the deep connection between your thoughts, your feelings, and the reality you experience. THE CONNECTION BETWEEN THOUGHTS, FEELINGS, AND REALITY. Be gentle with yourself, and I'll see you there. — Sage.`,
          badge: `identity-architect`,
          badgeName: `Identity Architect`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L17.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L17 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
