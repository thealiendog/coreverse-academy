// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L08 — How to Learn Anything
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : real learning science — Make It Stick (Brown, Roediger,
//            McDaniel), spaced repetition, active recall, retrieval practice,
//            the difference between recognizing and knowing. Foundation of
//            self-directed learning for life.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of learning anything well)
// SCOPE: knowing how to learn is a meta-skill that beats raw intelligence;
//        active recall vs. passive review; spaced repetition; the
//        recognition-knowledge gap; teaching as the deepest learning test
// VOICE: Byte = excited mentor, treats learning as the best game there is
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-08`,
      title: `How to Learn Anything`,
      duration: 18,
      xpReward: 75,
      badge: `learning-master`,
      badgeName: `Learning Master`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we explore one of the most powerful skills a human can develop. Knowing HOW TO LEARN. Most schools teach kids subjects (math, history, science) but rarely teach the actual SKILL of learning itself. Which is wild, because learning is what lets you understand any subject. Imagine being a great chef who never learned how to use a knife. The kid who learns HOW TO LEARN can teach themselves anything for the rest of their life. New skills, new languages, new instruments, new careers, new ideas. This is one of the most empowering skills you'll ever build. Let's go.`,
          headline: `How to Learn Anything`,
          subtitle: `The meta-skill that lets you teach yourself anything for the rest of your life`,
          visual: `/ue-assets/fs/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Knowing How to Learn Beats Being "Smart"`,
          paragraphs: [
            `Here's something most people get wrong about success. They think people who are "smart" do well. But researchers studying learning have found that being smart MATTERS LESS than knowing HOW TO LEARN. People who are average in raw intelligence but who know GOOD LEARNING METHODS outperform "smarter" people who don't. Why? Because learning is a skill (L01!), and skills can be developed. The kid who learns how to learn becomes able to MASTER anything they're interested in, even if they don't seem naturally gifted at it.`,
            `This is great news. You don't have to be the "smart kid" to do well. You just have to know HOW to learn anything you want. And that's the empowering skill almost no one teaches. Most of how kids are told to "study" is actually pretty bad based on learning science. Re-reading? Mostly useless. Highlighting? Doesn't help much. Just listening to a teacher? Forgotten within days. Today, you learn what ACTUALLY works according to real research on learning. The science is clear. The methods are simple. Almost no one uses them. Foxes do.`,
          ],
          image: `/ue-assets/fs/l08-s1-meta.webp`,
          imageCaption: `Knowing how to learn beats being "smart." It's a skill. Anyone can build it.`,
          vocab: [
            { word: `learning is a meta-skill`,
              definition: `The understanding that knowing HOW to learn is more important than how "smart" you are. Research shows people of average intelligence with good learning methods outperform "smarter" people without them. Learning itself is a skill that can be developed. Empowering and rare, because almost no one teaches it.`,
              audioPrompt: `Learning is a meta-skill is the understanding that knowing how to learn is more important than how smart you are, {name}. Researchers have found that being smart matters less than knowing good methods. People of average intelligence with good methods outperform smarter people without them. Why? Because learning is a skill, and skills can be developed. The kid who learns how to learn can master anything they're interested in. You don't have to be the smart kid. You just have to know how to learn.` },
            { word: `passive review`,
              definition: `The set of study habits most kids use that research shows are far less effective than active methods. Re-reading notes or textbook chapters. Highlighting. Just listening to a teacher without retrieving. All feel productive because they're easy and familiar. But the brain doesn't strengthen memories for information it receives passively. Passive review produces recognition, not knowing.`,
              audioPrompt: `Passive review is the set of study habits most kids use that research shows are far less effective than active methods, {name}. Re-reading notes or textbook chapters. Highlighting with markers. Just listening to a teacher without retrieving. Watching videos without pausing to recall. All of these feel productive because they're easy and familiar. But the brain doesn't strengthen memories for information it receives passively. Passive review produces recognition, not knowing. The kid who switches from passive review to active recall immediately becomes a more effective learner.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Recognition Trap (And Active Recall)`,
          paragraphs: [
            `Here's the single biggest learning mistake almost everyone makes, and once you see it, you'll see it everywhere. RECOGNIZING is not the same as KNOWING. When you re-read a chapter, the words look familiar, you feel like you "know" the material. But that's just RECOGNITION, your brain saying "yeah I've seen this." If someone asked you to explain it from memory, you couldn't. Real learning means being able to RETRIEVE information from your own mind, without looking. This is called ACTIVE RECALL, and researchers studying learning (Brown, Roediger, McDaniel) have found it's the MOST POWERFUL learning technique there is.`,
            `Here's how to actually do it. Instead of re-reading, CLOSE THE BOOK and try to recall the main points. Instead of just listening to a lesson, write down what you remember afterward. Instead of just looking at flashcards, try to ANSWER FIRST before flipping. The struggle to remember is what STRENGTHENS the memory. This feels harder than re-reading. That's because it IS harder. And that's exactly why it works. The brain only strengthens what it WORKS for. Re-reading is too easy, so the brain doesn't bother strengthening it. Active recall forces the brain to actually build the memory. Researchers have found active recall is roughly 50% more effective than passive review, sometimes much more. The kid who learns this gets massive leverage.`,
          ],
          image: `/ue-assets/fs/l08-s2-recall.webp`,
          imageCaption: `Recognition isn't knowing. Active recall, closing the book and remembering, is the most powerful technique.`,
          vocab: [
            { word: `active recall`,
              definition: `The most powerful learning technique. Instead of re-reading or passively reviewing, you close the book and TRY TO REMEMBER from your own mind. The struggle to retrieve strengthens the memory. Roughly 50% more effective than passive review. Feels harder, works much better. The brain only strengthens what it works for.`,
              audioPrompt: `Active recall is the most powerful learning technique, {name}. Instead of re-reading, you close the book and try to recall the main points. Instead of just listening, write down what you remember afterward. Instead of just looking at flashcards, try to answer first before flipping. The struggle to remember is what strengthens the memory. Researchers Brown, Roediger, and McDaniel found active recall is roughly 50% more effective than passive review, sometimes much more. Feels harder, works much better. The brain only strengthens what it works for.` },
            { word: `recognition vs. knowing`,
              definition: `One of the most important distinctions in all of learning. Recognition is your brain saying "I've seen this before" when you re-read something. Knowing means you can retrieve it from your own mind without looking. The recognition trap fools almost everyone — you feel like you've learned something when you've really just seen it again. Active recall is the cure.`,
              audioPrompt: `Recognition versus knowing is one of the most important distinctions in all of learning, {name}. Recognition is your brain saying I've seen this before when you re-read something. It feels like you know the material. But if someone took the book away and asked you to explain it, you couldn't. Knowing means you can retrieve it from your own mind without looking. The recognition trap fools almost everyone. Active recall is the cure: close the book and try to retrieve.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Spaced Repetition (The Time Trick)`,
          paragraphs: [
            `Here's the second power-tool of real learning. SPACED REPETITION. Most kids and adults try to learn something by studying it ALL AT ONCE the day before a test. This is called CRAMMING. It seems efficient. It's actually one of the WORST ways to remember anything long-term. Researchers have shown that information learned through cramming is mostly FORGOTTEN within a few days or weeks. The brain doesn't bother building strong long-term storage for information you only saw once in a panic.`,
            `Spaced repetition is the opposite. You learn something, then REVIEW IT at increasing intervals. Day 1, learn it. Day 2, review (close-book recall). Day 4, review again. Day 8. Day 16. Day 32. Each review takes only a few minutes once you know the material. The spacing tells your brain "this matters, store it for real." Researchers have found spaced repetition can multiply your retention by 5x or more compared to cramming. People who learn languages, medical knowledge, and complex skills all rely on it. The fox combination: ACTIVE RECALL (close-book retrieval) plus SPACED REPETITION (at growing intervals). Together they make learning almost magical. Stuff you would have forgotten, you keep for years.`,
          ],
          image: `/ue-assets/fs/l08-s3-spaced.webp`,
          imageCaption: `Cramming forgets. Spaced repetition keeps. Review at growing intervals. Day 1, 2, 4, 8, 16, 32.`,
          vocab: [
            { word: `spaced repetition`,
              definition: `Learning technique where you review material at INCREASING intervals (Day 1, 2, 4, 8, 16, 32). Each review only takes minutes once you know it. The spacing tells your brain "this matters, store for real." Researchers found it multiplies retention by 5x or more vs. cramming. Used by language learners, doctors, and serious students worldwide.`,
              audioPrompt: `Spaced repetition is a learning technique where you review material at increasing intervals, {name}. Day 1, learn it. Day 2, review with active recall. Day 4, review again. Day 8. Day 16. Day 32. Each review takes only a few minutes once you know the material. The spacing tells your brain this matters, store it for real. Researchers found spaced repetition can multiply your retention by 5x or more compared to cramming. The fox combination, active recall plus spaced repetition, makes learning almost magical.` },
            { word: `cramming`,
              definition: `The practice of massing all your study into one intense session right before a deadline. Produces short-term recognition but not real knowing. Researchers found crammed information is mostly forgotten within days or weeks. The brain doesn't build strong long-term storage for information seen once in a panic. Spaced repetition is dramatically more effective.`,
              audioPrompt: `Cramming is the practice of massing all your study into one intense session right before a deadline, {name}. It feels productive, and you often do okay on the test the next day. But researchers found crammed information is mostly forgotten within days or weeks. Your brain doesn't build strong long-term storage for information seen once in a panic. Cramming produces short-term recognition without real knowing. Spaced repetition is dramatically more effective. Five minutes reviewing every few days beats three hours cramming the night before.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Teaching Is the Deepest Learning Test`,
          paragraphs: [
            `Here's a final move that takes learning to the deepest level. If you can TEACH something to someone else, you actually know it. If you can't teach it, you don't really know it yet. Researchers call this the FEYNMAN TECHNIQUE (named after physicist Richard Feynman, who used it himself). To use it: pick something you want to truly understand. Try to EXPLAIN IT in simple words, as if to a younger kid. Notice where you get stuck. Those are the gaps in your real understanding. Go back, fill the gaps, then try again. Once you can explain it simply, you know it for real.`,
            `This is also why CONVERSATIONS about ideas help you learn. When you discuss something with a friend, family member, or even an AI tool (used wisely from L06!), you have to organize your thoughts. That organizing is learning. Same goes for WRITING about what you're learning. Same for asking and answering your own questions (L02!). All of these are forms of active retrieval and teaching. The kid who learns this whole system, get curious, break it down, active recall, space it out, teach it, can master ANYTHING they want over time. Byte's first teaching: learning is a skill, and the skill of LEARNING ITSELF is the most powerful one you'll ever build. Skip the bad methods (re-reading, highlighting, cramming). Use the good ones (active recall, spaced repetition, teaching). Apply them to anything you want to know. You'll outpace people who think they're smarter. Foxes don't have to be the strongest. They just have to be the cleverest.`,
          ],
          image: `/ue-assets/fs/l08-s4-teaching.webp`,
          imageCaption: `If you can teach it, you know it. The Feynman Technique. Explain it simply, fill the gaps.`,
          vocab: [
            { word: `feynman technique`,
              definition: `The deepest learning test. Pick something you want to understand. Explain it in simple words as if to a younger kid. Notice where you get stuck, those are your gaps. Fill them, try again. Once you can explain it simply, you really know it. Named after physicist Richard Feynman. Teaching = the strongest form of learning.`,
              audioPrompt: `The Feynman Technique is the deepest learning test, {name}, named after physicist Richard Feynman. To use it, pick something you want to truly understand. Try to explain it in simple words, as if to a younger kid. Notice where you get stuck. Those are the gaps in your real understanding. Fill the gaps, then try again. Once you can explain it simply, you know it for real. This is why conversations about ideas help you learn. When you discuss something, you have to organize your thoughts. That organizing is learning.` },
            { word: `interleaving`,
              definition: `A learning technique where you mix different topics or subjects in one study session instead of doing one subject all the way through. Researchers found interleaving strengthens learning by forcing the brain to switch gears and retrieve differently each time. It feels harder than blocking one subject — that's exactly why it works. Mixing is better than massing.`,
              audioPrompt: `Interleaving is a learning technique where you mix different topics or subjects in one study session instead of doing one subject all the way through, {name}. For example, instead of doing 30 minutes of math then 30 of history, you alternate: a bit of math, then history, then math again. Researchers found interleaving strengthens learning by forcing the brain to switch gears and retrieve differently each time. It feels harder than blocking one subject. That's exactly why it works. Mixing is better than massing.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the moves of learning anything well in order, {name}. Here are five steps, from FIRST CURIOSITY to DEEPEST MASTERY. Use the arrows to arrange them.`,
          items: [
            { id: `step-curious`,    label: `GET CURIOUS. Pick something you genuinely want to learn. Curiosity is the fuel. Without it, no method works well`,                                                              position: 1 },
            { id: `step-breakdown`,  label: `BREAK IT DOWN — divide the topic into smaller chunks; you can't learn a whole subject at once, but you can master one chunk at a time`,                                       position: 2 },
            { id: `step-recall`,     label: `PRACTICE ACTIVE RECALL. Close the book and TRY TO REMEMBER from your own mind. Struggle equals strengthening. Beats re-reading by 50% or more`,                              position: 3 },
            { id: `step-space`,      label: `SPACE IT OUT. Review at growing intervals (Day 1, 2, 4, 8, 16, 32). Cramming forgets, spacing keeps. Multiplies retention by 5x or more`,                                    position: 4 },
            { id: `step-teach`,      label: `TEACH IT (FEYNMAN TECHNIQUE). Explain what you learned in simple words, as if to a younger kid. Notice gaps, fill them, try again. Teaching is the deepest knowing`,         position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of learning anything: curiosity, break it down, active recall, spaced repetition, teach it. These five moves, used together, can let you master almost any skill or subject. Most kids never learn this. You have it now. Use it for life.`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l08-q1`, format: `true-false`,
              question: `True or false: Being "smart" matters more than knowing HOW to learn.`,
              correctAnswer: false,
              explanation: `False. Researchers found that being smart MATTERS LESS than knowing how to learn. People of average intelligence with good learning methods outperform "smarter" people who don't have them. Why? Learning is a skill, and skills can be developed. The kid who learns how to learn can master anything they're interested in.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is the difference between RECOGNIZING and KNOWING?`,
              options: [
                `They're the same`,
                `RECOGNIZING is just "I've seen this before" when re-reading; KNOWING is being able to RETRIEVE information from your mind without looking — only retrieval is real learning`,
                `Recognizing is harder`,
                `Knowing is easier`,
              ],
              correctIndex: 1,
              explanation: `Recognizing is just "I've seen this before" when re-reading; the words look familiar. Knowing is being able to retrieve information from your mind without looking. Real learning means retrieval, not recognition. The biggest mistake almost everyone makes is confusing one for the other.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What is ACTIVE RECALL?`,
              options: [
                `Re-reading a book`,
                `Closing the book and TRYING TO REMEMBER from your own mind. The most powerful learning technique. Roughly 50% more effective than passive review`,
                `Highlighting`,
                `Just listening`,
              ],
              correctIndex: 1,
              explanation: `Active recall is closing the book and trying to remember from your own mind. Researchers Brown, Roediger, and McDaniel found it's the most powerful learning technique, roughly 50% more effective than passive review. The struggle to retrieve strengthens the memory. Feels harder, works much better. The brain only strengthens what it works for.` },

            { id: `l08-q4`, format: `true-false`,
              question: `True or false: CRAMMING (studying everything the day before a test) builds long-term knowledge.`,
              correctAnswer: false,
              explanation: `False. Cramming is one of the WORST ways to learn long-term. Researchers found information learned through cramming is mostly forgotten within a few days or weeks. The brain doesn't build strong long-term storage for information you only saw once in a panic. Spaced repetition (reviewing at growing intervals) is far better.` },

            { id: `l08-q5`, format: `multiple-choice`,
              question: `What is SPACED REPETITION?`,
              options: [
                `Studying all at once`,
                `Reviewing material at INCREASING intervals (Day 1, 2, 4, 8, 16, 32). Tells your brain "this matters, store for real." Multiplies retention by 5x or more vs. cramming`,
                `Random review`,
                `Studying once`,
              ],
              correctIndex: 1,
              explanation: `Spaced repetition is reviewing material at increasing intervals. Day 1, learn it. Day 2, review. Day 4. Day 8. Day 16. Day 32. The spacing tells your brain "this matters, store it for real." Researchers found it multiplies retention by 5x or more compared to cramming. Used by language learners, doctors, and serious students worldwide.` },

            { id: `l08-q6`, format: `multiple-choice`,
              question: `What is the FEYNMAN TECHNIQUE?`,
              options: [
                `A new computer`,
                `Explaining something in SIMPLE words, as if to a younger kid, noticing where you get stuck, filling those gaps. Teaching is the deepest learning test`,
                `A type of food`,
                `Reading hard books`,
              ],
              correctIndex: 1,
              explanation: `The Feynman Technique is explaining something in simple words, as if to a younger kid. Notice where you get stuck, those are your real gaps. Fill them, try again. Once you can explain it simply, you really know it. Named after physicist Richard Feynman. Teaching is the deepest form of learning.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `What are the FIVE moves of learning anything well?`,
              options: [
                `Just memorize everything`,
                `(1) Get curious, (2) Break it down, (3) Active recall, (4) Spaced repetition, (5) Teach it`,
                `Random study`,
                `Cram before test`,
              ],
              correctIndex: 1,
              explanation: `Five moves: (1) Get curious (curiosity is fuel), (2) Break it down (chunks, not whole subject), (3) Active recall (close-book retrieval), (4) Spaced repetition (review at growing intervals), (5) Teach it (Feynman Technique). Used together, these let you master almost any skill or subject. Most kids never learn this. You have it now.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about learning?`,
              options: [
                `Just memorize`,
                `Learning is a SKILL, and the skill of LEARNING ITSELF is the most powerful one. Skip bad methods (re-reading, cramming). Use good ones (active recall, spaced repetition, teaching)`,
                `Random study`,
                `Just try hard`,
              ],
              correctIndex: 1,
              explanation: `Learning is a skill, and the skill of learning ITSELF is the most powerful one you'll ever build. Skip the bad methods (re-reading, highlighting, cramming). Use the good ones (active recall, spaced repetition, teaching). Apply them to anything you want to know. You'll outpace people who think they're smarter. Foxes don't have to be the strongest. They just have to be the cleverest.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What's the difference between how you currently study and the active-recall + spaced-repetition method? Be honest about your current habits.` },
            { id: `r2`, text: `Pick something you've been trying to learn. How could you apply the FIVE moves (curiosity, break it down, active recall, spacing, teach it)?` },
            { id: `r3`, text: `Try the Feynman Technique now. Pick something you've learned recently. Can you explain it simply, in your own words? Where do you get stuck?` },
            { id: `r4`, text: `What's ONE skill or subject you'd love to master if you knew you had powerful learning methods? Could you start now?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Research on learning is one of the most established fields in psychology. The book "Make It Stick" (Brown, Roediger, McDaniel) summarizes decades of research showing that active recall, spaced repetition, interleaving (mixing topics), and teaching are the four most powerful learning techniques. Almost everything most kids are told to do (re-read, highlight, cram, just listen) is far less effective. The gap between what science shows and what schools usually teach is huge, but you don't have to wait for schools to catch up. You can use the real methods now. Byte's note: this skill, knowing HOW to learn, is one of the greatest gifts you can give yourself. The world will keep changing fast. New skills will keep being needed. Careers will shift. Technology will evolve. The kid who knows HOW to learn anything can keep up across decades, while others fall behind. You don't have to know everything. You just have to know HOW TO LEARN whatever you need next. Foxes who keep learning stay sharp their whole lives.`,
          familyAdventure: `Family Learning Practice. As a family, each person picks ONE small thing they want to learn this month (a skill, a topic, anything). Then everyone applies the FIVE moves together. Get curious about each other's topics. Break them down. Practice active recall (test each other). Use spaced repetition (review weekly). Teach each other (Feynman style). Adults model it too. Building a family that LEARNS HOW TO LEARN together is one of the most powerful things you can do. Many families find this practice changes how they approach challenges across years.`,
          creativePrompt: {
            intro: `Write about how you'll apply the learning methods to something you want to master.`,
            floor: `Write at least 5 sentences. Name what you want to learn and how you'll use the five moves.`,
            stretch: `Write 8 to 10 sentences. Build a fuller learning plan.`,
            open: `Write as much as you want. Write your full personal LEARNING PLAN for something you want to master. Identify the SKILL or SUBJECT (a language, an instrument, a math area, a sport, a topic that fascinates you). Describe what made you CURIOUS about it. Describe how you'll BREAK IT DOWN into smaller chunks. Describe specifically how you'll use ACTIVE RECALL (close-book retrieval, flashcards with retrieval first, writing what you remember). Describe how you'll SPACE OUT your review (Day 1, 2, 4, 8, 16, 32). Describe how you'll use the FEYNMAN TECHNIQUE to test your understanding by teaching it (to a sibling, parent, friend, or in writing). End with a commitment to APPLY these methods, and a note to your future self about the joy of learning how to learn. Make it specific, hopeful, and excited.`,
            frames: [
              `What I want to learn: ___.`,
              `Why it makes me curious: ___.`,
              `How I'll break it down: ___.`,
              `My active recall practice: ___.`,
              `My spaced repetition schedule: ___.`,
              `Who/how I'll teach it: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Sharp, empowering work, {name}! You now know one of the most powerful skills any human can have, how to LEARN ANYTHING. Five moves: curiosity, break it down, active recall, spaced repetition, teach it. Skip the bad methods, use the good ones, and you can master almost anything you want. This is a forever skill. Next, we go deeper into how your MEMORY actually works, the real science behind how you remember and forget, and how to remember better. MEMORY & HOW IT REALLY WORKS. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `learning-master`,
          badgeName: `Learning Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L08;
