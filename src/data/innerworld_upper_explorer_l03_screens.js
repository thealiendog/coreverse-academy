// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L03 — Limiting Beliefs and Where They Come From
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : cognitive psychology at a kid level (beliefs, self-concept)
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify thoughts: limiting / empowering / neutral fact)
// SCOPE: 4 concepts — what a belief is, limiting vs empowering beliefs,
//        where limiting beliefs come from, beliefs can be questioned & changed
// VOICE: Sage = gentle, validating, never shaming; beliefs aren't the kid's fault
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-03`,
      title: `Limiting Beliefs and Where They Come From`,
      duration: 18,
      xpReward: 75,
      badge: `belief-detective`,
      badgeName: `Belief Detective`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. You've learned that your brain creates your emotions, and that you can shape your brain through practice. Today we explore something quieter but very powerful: your BELIEFS. The things you believe about yourself, deep down, shape what you try, what you avoid, and even what you think is possible for you. Some beliefs lift you up. Others, called limiting beliefs, can quietly hold you back, often without you even noticing. The good news? Once you can SEE a belief, you can question it. Take a gentle breath, and let's begin.`,
          headline: `Limiting Beliefs and Where They Come From`,
          subtitle: `The quiet stories you believe about yourself, and how to question them`,
          visual: `/ue-assets/iw/exp-iw-l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is a Belief?`,
          paragraphs: [
            `A BELIEF is something you accept as true about yourself, other people, or the world, often without even questioning it. You have thousands of beliefs, and most of them run quietly in the background of your mind. Some are about facts ("the sky is blue"). But the most powerful beliefs are the ones about YOU: "I'm good at art," "I'm not a math person," "people like me," "I always mess things up." These self-beliefs shape your whole life, because you tend to act in ways that match what you believe about yourself.`,
            `Here's the important thing to understand: many of your beliefs about yourself are not actually FACTS. They're more like stories you've come to accept, often without realizing it. A belief can feel completely true and still be inaccurate. For example, a kid who believes "I'm bad at sports" will feel like that's just a fact about them. But it's really a story, one that might have formed from a single bad experience, and one that (thanks to neuroplasticity, which you learned about) can actually change. Learning to tell the difference between a real fact and a believed story is one of the most freeing skills you can develop.`,
          ],
          image: `/ue-assets/iw/exp-iw-l03-s1-what-is-belief.webp`,
          imageCaption: `A belief is a story you accept as true, often without questioning it. Many aren't facts.`,
          vocab: [
            {
              word: `belief`,
              definition: `Something you accept as true about yourself, others, or the world, often without questioning it. Beliefs shape how you act. Many self-beliefs feel like facts but are really stories that can change.`,
              audioPrompt: `A belief is something you accept as true about yourself, other people, or the world, {name}. Often without questioning it. You have thousands of beliefs, most running quietly in the background of your mind. The most powerful are about you: I'm good at art, or I'm not a math person. These self-beliefs shape your life, because you act in ways that match what you believe about yourself. But many self-beliefs are not facts. They're stories you've come to accept. A belief can feel true and still be inaccurate.`,
            },
            {
              word: `self-concept`,
              definition: `The overall picture you have of yourself — who you are, what you're like, and what you're capable of. Built from your accumulated beliefs, your self-concept shapes what you try and expect from yourself.`,
              audioPrompt: `Your self-concept is the overall picture you have of yourself, {name}. Who you are, what you're like, and what you're capable of. It's built from all the beliefs you've accumulated about yourself over time. A self-concept shaped by empowering beliefs leads you to expect success and try new things. One shaped by limiting beliefs can hold you back, even when you're completely capable. The good news is that as you examine and update your beliefs, your self-concept can grow and change too.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Limiting Beliefs vs Empowering Beliefs`,
          paragraphs: [
            `Beliefs about yourself come in two main kinds. An EMPOWERING belief lifts you up and opens doors: "I can learn hard things," "I'm a kind friend," "mistakes help me grow." These beliefs give you courage to try, to keep going, and to bounce back. A LIMITING belief does the opposite, it quietly holds you back and closes doors: "I'm just not smart," "I'll never be good at this," "people always leave," "I'm too shy to make friends." Limiting beliefs act like invisible fences, keeping you from even attempting things you might actually be able to do.`,
            `Here's why limiting beliefs are so sneaky and powerful: they tend to come TRUE, not because they're accurate, but because of how they make you act. If you believe "I'm bad at math," you might avoid practicing math, give up quickly, or get too anxious to think clearly, and then you do poorly, which seems to "prove" the belief. It becomes a self-fulfilling cycle. The belief shapes your actions, and your actions seem to confirm the belief. The encouraging flip side is just as real: empowering beliefs also tend to come true, because they lead you to try, practice, and persist. Your beliefs don't just describe your life; they help create it.`,
          ],
          image: `/ue-assets/iw/exp-iw-l03-s2-limiting-vs-empowering.webp`,
          imageCaption: `Limiting beliefs are invisible fences. Empowering beliefs open doors. Both tend to come true.`,
          vocab: [
            {
              word: `limiting belief`,
              definition: `A belief that holds you back and closes doors, like "I'm just not smart." It acts like an invisible fence. Limiting beliefs often come true, not because they're accurate, but because of how they make you act.`,
              audioPrompt: `A limiting belief quietly holds you back and closes doors, {name}. Like I'm just not smart, or I'll never be good at this. Limiting beliefs act like invisible fences, keeping you from trying things you might be able to do. Here's why they're sneaky. They tend to come true, not because they're accurate, but because of how they make you act. If you believe you're bad at math, you might avoid practicing, give up quickly, and then do poorly, which seems to prove the belief. That's a self-fulfilling cycle.`,
            },
            {
              word: `cognitive reframing`,
              definition: `The process of consciously choosing to see a thought or situation in a different, more accurate or helpful way. Like changing "I'm bad at this" to "I'm still learning this."`,
              audioPrompt: `Cognitive reframing means consciously choosing to see a thought or situation in a different, more helpful way, {name}. When you notice a limiting belief and deliberately replace it with a more accurate, empowering one, that's cognitive reframing in action. Like changing I'm bad at this to I'm still learning this. It doesn't mean ignoring reality or lying to yourself. It means choosing the frame that's most accurate and most useful. Reframing is a skill, and like all skills, it gets easier with practice.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where Do Limiting Beliefs Come From?`,
          paragraphs: [
            `Here's something important and kind to understand: your limiting beliefs are usually NOT your fault. They're learned, often when you were very young, from experiences and from the people and world around you. Sometimes a single difficult moment plants one: you stumbled during a school presentation once, and a belief formed: "I'm bad at speaking." Sometimes they come from words others said, even people who loved you and didn't mean harm. Sometimes they come from comparing yourself to others, or from messages in the world about who you "should" be. Your young brain absorbed these like a sponge, before you had the thinking skills to question them.`,
            `This matters because it changes how you treat yourself. A limiting belief isn't a true fact carved in stone, and it isn't evidence that something is wrong with you. It's simply an old story your brain picked up, usually trying (in its own way) to protect you or make sense of an experience. Understanding this lets you be GENTLE with yourself. You're not broken for having limiting beliefs; everyone has them. And because beliefs are learned, and your brain can change (remember neuroplasticity?), they can also be UN-learned and replaced. The first step is simply noticing them, with curiosity instead of judgment. That's what makes you a belief detective.`,
          ],
          image: `/ue-assets/iw/exp-iw-l03-s3-where-from.webp`,
          imageCaption: `Limiting beliefs are learned young, often not your fault. They can be unlearned.`,
          vocab: [
            {
              word: `self-fulfilling cycle`,
              definition: `When a belief leads you to act in ways that make the belief seem to come true. For example, believing "I'm bad at this" can make you avoid practice, so you stay bad, which seems to confirm the belief.`,
              audioPrompt: `A self-fulfilling cycle is when a belief leads you to act in ways that make the belief seem true, {name}. For example, if you believe you're bad at something, you might avoid practicing, give up quickly, or get too anxious to do your best. Then you do poorly, which seems to prove the belief. But it wasn't accurate. It was the belief shaping your actions. Empowering beliefs work the same way in reverse. They also tend to come true, because they lead you to try, practice, and keep going.`,
            },
            {
              word: `inner critic`,
              definition: `The internal voice that repeats limiting beliefs or harsh judgments about yourself. The inner critic draws on old, learned beliefs and can reinforce a self-fulfilling cycle when left unexamined.`,
              audioPrompt: `Your inner critic is the internal voice that repeats limiting beliefs or harsh judgments about yourself, {name}. It says things like you're not good enough, you'll fail, or you're bad at this. The inner critic draws on old beliefs, often learned in early childhood, and can fuel a self-fulfilling cycle by making you avoid challenges. The key is noticing it with curiosity, not shame. When you recognize the inner critic as an old story rather than the truth, you take the first step to quieting it.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Beliefs Can Be Questioned and Changed`,
          paragraphs: [
            `Here's the freeing truth: because beliefs are learned stories, not permanent facts, you can QUESTION them and choose new ones. When you notice a limiting belief, you can gently put it on trial, like a detective examining evidence. Ask yourself: "Is this actually TRUE? Is it true ALL the time? What's the evidence FOR it? What's the evidence AGAINST it? Where did this belief even come from? Is it helping me or holding me back?" Often, when you really examine a limiting belief, you discover it's not nearly as solid or true as it felt.`,
            `Then comes the powerful part: you can begin to REPLACE a limiting belief with a more accurate, empowering one. "I'm bad at math" can become "I'm still learning math, and my brain grows with practice." "Nobody likes me" can become "I'm building friendships, and I'm worth knowing." This isn't about lying to yourself or pretending. It's about choosing beliefs that are MORE accurate and more helpful, and then (remember neuroplasticity) strengthening them with practice until they feel natural. We'll go deeper into how to do this in lessons ahead. Sage's gentle teaching: you are not your limiting beliefs. They are old stories, not the truth of who you are. With awareness and kindness, you can become the author of your own beliefs, and that changes everything about what feels possible for you.`,
          ],
          image: `/ue-assets/iw/exp-iw-l03-s4-question-change.webp`,
          imageCaption: `Put limiting beliefs on trial. Then choose more accurate, empowering ones.`,
          vocab: [
            {
              word: `empowering belief`,
              definition: `A belief that lifts you up and opens doors, like "I can learn hard things." Empowering beliefs give you courage to try and persist, and they tend to come true because they lead you to take helpful action.`,
              audioPrompt: `An empowering belief lifts you up and opens doors, {name}. Like I can learn hard things, or I'm a kind friend, or mistakes help me grow. Empowering beliefs give you courage to try, keep going, and bounce back. Because beliefs are learned stories, not permanent facts, you can question a limiting belief and replace it with an empowering one. I'm bad at math can become I'm still learning math, and my brain grows with practice. This isn't lying to yourself. It's choosing a belief that's more accurate and more helpful.`,
            },
            {
              word: `self-compassion`,
              definition: `The practice of treating yourself with the same kindness you would show a good friend — especially when you notice limiting beliefs or make mistakes. Research shows it helps you grow faster than harsh self-criticism.`,
              audioPrompt: `Self-compassion means treating yourself with the same kindness you would show a good friend, {name}. Especially when you notice limiting beliefs or make mistakes. Instead of judging yourself harshly, self-compassion says this is hard, and that's okay. Research shows that self-compassion actually helps you learn and grow faster than harsh self-criticism does, because it keeps your thinking brain engaged instead of shutting it down. Being kind to yourself isn't weakness. It's one of the most effective tools you have for becoming who you want to be.`,
            },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to be a belief detective, {name}. Here are four thoughts. Examine each one and classify it: LIMITING BELIEF (a story that holds you back, that you could question), EMPOWERING BELIEF (a story that lifts you up and opens doors), or NEUTRAL FACT (just a plain true fact, not really a self-belief at all)?\n\nOne is trickier than it looks.`,
          options: [
            { id: `limiting`,   label: `Limiting Belief`,   color: `#F87171`, description: `A story that holds you back. Feels true, but can be questioned and changed.` },
            { id: `empowering`, label: `Empowering Belief`, color: `#34D399`, description: `A story that lifts you up, gives courage, and opens doors.` },
            { id: `fact`,       label: `Neutral Fact`,      color: `#60A5FA`, description: `A plain, true fact about the world, not a belief about your worth or ability.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Thought #1`,
              clues: [
                { text: `"I'm just not a creative person. I never have been."` },
                { text: `It makes the kid avoid art, music, and writing.` },
                { text: `It feels like a fact, but it closes doors.` },
              ],
              correctAnswer: `limiting`,
              realWorldExample: `"I'm not creative" stops people from ever trying.`,
              explanation: `This is a story that holds the kid back and closes doors, even though it feels like a fact. Pure limiting belief. It can be questioned ("Is that really true all the time?") and replaced ("I'm still discovering my creativity").`,
            },
            {
              id: `case-2`,
              caseTitle: `Thought #2`,
              clues: [
                { text: `"I can get better at things when I practice, even if they're hard at first."` },
                { text: `It gives the kid courage to try new challenges.` },
                { text: `It opens doors and helps them keep going.` },
              ],
              correctAnswer: `empowering`,
              realWorldExample: `This belief drives people to try and persist.`,
              explanation: `This story lifts the kid up, gives courage, and opens doors. Pure empowering belief. It's also accurate, thanks to neuroplasticity! Empowering beliefs tend to come true because they lead you to try and practice.`,
            },
            {
              id: `case-3`,
              caseTitle: `Thought #3`,
              clues: [
                { text: `"Water freezes into ice when it gets cold enough."` },
                { text: `It's simply a true statement about how the world works.` },
                { text: `It's not about the kid's worth or abilities at all.` },
              ],
              correctAnswer: `fact`,
              realWorldExample: `Plain facts about the world aren't self-beliefs.`,
              explanation: `This is just a true statement about the world, not a belief about the kid's worth or what's possible for them. Pure neutral fact. Not every thought is a self-belief! Some are simply facts. The key is spotting the self-beliefs hiding among them.`,
            },
            {
              id: `case-4`,
              caseTitle: `Thought #4 — The Tricky One`,
              clues: [
                { text: `"I got a low score on my last math test."` },
                { text: `That part is simply true: it really happened.` },
                { text: `BUT the kid then thinks: "...so I'm just bad at math and always will be."` },
              ],
              correctAnswer: `limiting`,
              realWorldExample: `A true event often gets turned into a limiting belief.`,
              explanation: `Tricky, {name}! The FIRST part ("I got a low score") is a neutral fact. It really happened, and that's okay. You might be tempted to call the whole thing a fact. But look at the SECOND part: the kid turned that one true event into a sweeping story about themselves: "I'm just bad at math and always will be." THAT is a limiting belief, and it's the part that holds them back. So the best answer is limiting belief. Sage's gentle lesson: this is exactly how limiting beliefs form. One real event ("I scored low this time") gets stretched into a permanent story ("I'm bad at this forever"). A belief detective learns to separate the two. The fact: "I scored low this time." The empowering replacement: "I scored low this time, and with practice my brain can grow." Same event, completely different story, and a completely different future.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is a BELIEF?`,
              options: [
                `Always a proven scientific fact`,
                `Something you accept as true (often about yourself) without questioning it — and it shapes how you act`,
                `Only something adults have`,
                `A type of feeling`,
              ],
              correctIndex: 1,
              explanation: `A belief is something you accept as true about yourself, others, or the world, often without questioning it. The most powerful are self-beliefs, which shape how you act. Importantly, many self-beliefs feel like facts but are really stories that can change.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `What's the difference between a LIMITING and an EMPOWERING belief?`,
              options: [
                `No difference`,
                `Limiting beliefs hold you back and close doors; empowering beliefs lift you up and open doors`,
                `Limiting beliefs are always true`,
                `Empowering beliefs are lies`,
              ],
              correctIndex: 1,
              explanation: `A limiting belief holds you back and closes doors ("I'm just not smart"). An empowering belief lifts you up and opens doors ("I can learn hard things"). Limiting beliefs act like invisible fences; empowering ones give courage to try.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `Why do limiting beliefs often seem to "come true"?`,
              options: [
                `Because they're always accurate`,
                `Because of how they make you act — you avoid trying or give up, which seems to confirm the belief (a self-fulfilling cycle)`,
                `By magic`,
                `They never come true`,
              ],
              correctIndex: 1,
              explanation: `Limiting beliefs come true not because they're accurate, but because of how they make you act. Believe "I'm bad at math," and you might avoid practice and give up, then do poorly, which seems to "prove" it. That's a self-fulfilling cycle.` },

            { id: `l03-q4`, format: `true-false`,
              question: `True or false: Having limiting beliefs means something is wrong with you, and it's your fault.`,
              correctAnswer: false,
              explanation: `False. Limiting beliefs are usually NOT your fault. They're learned young, from experiences and the world around you, before you could question them. Everyone has them. You're not broken, and understanding this lets you be gentle with yourself.` },

            { id: `l03-q5`, format: `multiple-choice`,
              question: `Where do limiting beliefs usually come from?`,
              options: [
                `You're born with them`,
                `They're learned young — from experiences, others' words, comparisons, and messages in the world`,
                `They appear randomly at age 20`,
                `From eating certain foods`,
              ],
              correctIndex: 1,
              explanation: `Limiting beliefs are learned, often when very young, from experiences, words others said (even loving people), comparing yourself to others, and messages in the world. Your young brain absorbed them before you could question them.` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `How can you "put a limiting belief on trial" like a detective?`,
              options: [
                `Just accept it as true`,
                `Ask: Is it really true? All the time? What's the evidence for and against? Where did it come from? Is it helping me?`,
                `Shout at it`,
                `Ignore it forever`,
              ],
              correctIndex: 1,
              explanation: `You question a limiting belief by examining it like evidence: Is it actually true? True all the time? What's the evidence for and against? Where did it come from? Is it helping or holding me back? Often it turns out far less solid than it felt.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `Is replacing "I'm bad at math" with "I'm still learning, and my brain grows with practice" just lying to yourself?`,
              options: [
                `Yes, it's a lie`,
                `No — it's choosing a belief that's MORE accurate and more helpful (and it's true, thanks to neuroplasticity)`,
                `Yes, you should never change beliefs`,
                `It makes no difference`,
              ],
              correctIndex: 1,
              explanation: `It's not lying. It's choosing a belief that's more accurate AND more helpful. "I'm still learning, and my brain grows with practice" is actually true thanks to neuroplasticity. Then you strengthen the new belief with practice until it feels natural.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `What makes it POSSIBLE to change a limiting belief?`,
              options: [
                `Nothing — beliefs are permanent`,
                `Beliefs are learned stories (not fixed facts), and your brain can change — so beliefs can be un-learned and replaced`,
                `Only a doctor can change them`,
                `You have to be an adult`,
              ],
              correctIndex: 1,
              explanation: `Because beliefs are learned stories rather than permanent facts, and because your brain can change (neuroplasticity), limiting beliefs can be un-learned and replaced with more accurate, empowering ones. The first step is noticing them with curiosity.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Can you think of a limiting belief you sometimes have about yourself? Remember, having it isn't your fault. Just notice it with kindness.` },
            { id: `r2`, text: `Pick a limiting belief and put it on trial: what's the evidence FOR it, and what's the evidence AGAINST it? Is it as solid as it felt?` },
            { id: `r3`, text: `What's an empowering belief you'd like to grow? How might your life feel different if you truly believed it?` },
            { id: `r4`, text: `Beliefs shape actions, which shape results. Where do you notice a self-fulfilling cycle (good or limiting) in your own life?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Understanding limiting beliefs is genuinely life-changing, because so much of what people achieve (or never attempt) comes down to what they believe is possible for them. Athletes, artists, scientists, and leaders often credit their success partly to refusing to accept limiting beliefs about themselves. Learning to spot a limiting belief, question it, and choose a more accurate one is a skill you'll use for the rest of your life, in school, friendships, challenges, and dreams. Sage's note: you cannot change a belief you can't see. So the simple act of NOTICING your beliefs, with curiosity and kindness instead of judgment, is already a powerful step toward freedom. You're learning to author your own inner story.`,
          familyAdventure: `Family Belief Detectives. As a family, gently and without any judgment, share one limiting belief each person sometimes notices in themselves (grown-ups have them too, and sharing yours helps kids feel safe). For each one, work together as detectives: Where might it have come from? Is it really true all the time? What's a more accurate, empowering belief to replace it with? The goal is kindness and curiosity, never criticism. You're helping each other become the authors of your own stories.`,
          creativePrompt: {
            intro: `Imagine a limiting belief as a small, sneaky character that whispers discouraging things. Write a story where you (or a hero) become a "belief detective" and transform it.`,
            floor: `Write at least 5 sentences. Describe the limiting-belief character, what it whispers, and how the hero questions and changes it.`,
            stretch: `Write 8 to 10 sentences. Show where the belief came from, how the hero puts it on trial, and how they replace it with an empowering belief.`,
            open: `Write as much as you want. Write a full story about a hero who discovers a sneaky "limiting belief" character living in their mind, whispering things like "you can't" and "you're not good enough." Show where the belief originally came from (a past experience), how the hero becomes a belief detective and puts it on trial (examining the evidence for and against), how they realize it was just an old story and not the truth, and how they transform it into an empowering belief that opens new doors. Make it imaginative AND show real understanding of how beliefs work.`,
            frames: [
              `In the corner of the hero's mind lived a sneaky little belief named ___.`,
              `It whispered things like ___.`,
              `The hero discovered it had come from ___.`,
              `Becoming a belief detective, the hero examined the evidence and realized ___.`,
              `In its place, the hero chose a new, empowering belief: ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You're now a belief detective. You understand what beliefs are, the difference between limiting and empowering ones, where limiting beliefs come from (and that they're not your fault), and the freeing truth that beliefs can be questioned and changed. This awareness is the key that unlocks so much ahead. Next, we go even deeper, into the hidden part of your mind that runs most of the show without you noticing. THE SUBCONSCIOUS MIND. Be gentle with yourself, and I'll see you there. — Sage.`,
          badge: `belief-detective`,
          badgeName: `Belief Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
