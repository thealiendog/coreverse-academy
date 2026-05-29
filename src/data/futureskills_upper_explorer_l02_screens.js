// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L02 — Asking Good Questions
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : Socratic method, question hierarchy (Bloom's taxonomy basics),
//            research on how questions drive learning. The most underrated
//            thinking skill.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of asking better questions, from FIRST
//            curiosity to DEEPEST inquiry)
// SCOPE: questions are the engine of thinking, types of questions (yes/no,
//        open, deep), the five-question move, asking questions of YOURSELF
// VOICE: Byte = playful, sharp, treats questions like the best toys ever
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-02`,
      title: `Asking Good Questions`,
      duration: 18,
      xpReward: 75,
      badge: `question-asker`,
      badgeName: `Question Asker`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Byte here. Today we explore the single most underrated thinking skill there is: ASKING QUESTIONS. Most kids think being smart means having ANSWERS. Foxes know better. The smartest people in history were the BEST QUESTION-ASKERS. Albert Einstein, Marie Curie, Leonardo da Vinci — they all said the same thing: "I have no special talent. I am only passionately curious." Questions are how thinking actually moves forward. Today you learn to ask the kinds of questions that unlock real understanding. Sharpen your curiosity, perk those fox ears, and let's go.`,
          headline: `Asking Good Questions`,
          subtitle: `The most underrated thinking skill. The smartest people ask the best questions`,
          visual: `/ue-assets/fs/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Questions Are the Engine of Thinking`,
          paragraphs: [
            `Here's a truth most people miss: thinking doesn't move forward on ANSWERS, it moves forward on QUESTIONS. Every important discovery in history started with someone asking a question no one else was asking. "Why does that apple fall down?" (Newton, gravity). "What's the smallest part of matter?" (countless scientists, atoms). "Why are some kids healthier than others?" (medical research). The QUESTIONS came first. Then the curiosity. Then the search. Then the answers. People who only repeat ANSWERS they learned aren't really thinking — they're just storing. People who ask QUESTIONS are actually thinking.`,
            `Researchers studying learning have found that kids who ASK MORE QUESTIONS learn faster, remember more, and understand more deeply than kids who just receive information. The brain stays awake when it's asking. It goes to sleep when it's just listening. Same goes for life. Adults who keep asking questions stay sharper as they age. Adults who stop asking become rigid (L01!). Byte's truth: questions are the FUEL of a thinking life. Most kids stop asking as much as they get older because they're afraid of looking dumb. Don't do that. Ask. Ask. Ask. The kids who keep asking become the adults who keep growing.`,
          ],
          image: `/ue-assets/fs/l02-s1-engine.webp`,
          imageCaption: `Questions are the engine of thinking. The smartest people ask more than they tell.`,
          vocab: [
            { word: `questions as engine`,
              definition: `The truth that thinking moves forward through QUESTIONS, not just answers. Every important discovery started with someone asking what others weren't asking. Kids who ask more questions learn faster, remember more, understand deeper. The brain stays awake when asking, sleeps when only receiving.`,
              audioPrompt: `Questions as engine is the truth that thinking moves forward through questions, not just answers, {name}. Every major discovery in history started with someone asking a question no one else was asking. Why does the apple fall? Newton, gravity. Researchers studying learning found that kids who ask more questions learn faster, remember more, and understand more deeply. The brain stays awake when it's asking. It goes to sleep when it's just listening. Most kids stop asking as they get older because they fear looking dumb. Don't do that. Ask.` },
            { word: `learning by asking`,
              definition: `The research finding that curiosity-driven question-asking is one of the most powerful learning methods. When you ask a question before receiving information, your brain actively searches for the answer — and when you get it, it sticks far better. Researchers call this the generation effect. Questions before, during, and after learning drive deep understanding.`,
              audioPrompt: `Learning by asking is the finding that curiosity-driven question-asking is one of the most powerful learning methods there is, {name}. When you ask a question before receiving information, your brain actively searches for the answer. When you get it, it sticks far better than information you passively received. Researchers call this the generation effect. The brain doesn't just record information, it builds understanding around what it was searching for. Asking questions before, during, and after learning is one of the simplest and most powerful moves for deep understanding.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Levels of Questions`,
          paragraphs: [
            `Not all questions are created equal. There are roughly THREE LEVELS, and knowing the difference makes you a way better thinker. Level 1: YES/NO QUESTIONS. "Is the sky blue?" "Did you finish your homework?" "Is this true?" These are good for quick facts but don't push thinking very far. They get a small answer and stop. Sometimes you need them. But they're the easiest, weakest kind of question.`,
            `Level 2: OPEN QUESTIONS. "Why is the sky blue?" "How did you do on your homework?" "What's the evidence for this claim?" Open questions can't be answered with just yes or no. They invite real thinking. They lead to longer answers and more learning. Level 3: DEEP QUESTIONS. "What would change my mind about this?" "How do we know what we know?" "What's the BIGGEST question here that no one is asking?" Deep questions push past the obvious and ask about FOUNDATIONS, assumptions, what's actually true underneath. These are the questions that move thinking forward most. Sharp thinkers ASK MORE LEVEL 2 AND 3 QUESTIONS. Most people stop at Level 1. The fox-style is leveling up.`,
          ],
          image: `/ue-assets/fs/l02-s2-three-levels.webp`,
          imageCaption: `Yes/no (Level 1). Open (Level 2). Deep (Level 3). Sharp thinkers ask higher levels.`,
          vocab: [
            { word: `three levels of questions`,
              definition: `Three depths of questions. LEVEL 1: yes/no (quick facts, weak). LEVEL 2: open (invite real thinking, "why," "how"). LEVEL 3: deep (push past obvious to foundations, "what would change my mind," "how do we know"). Sharp thinkers ask more Levels 2 and 3.`,
              audioPrompt: `The three levels of questions are different depths you can ask, {name}. Level 1 is yes/no questions. Is the sky blue? Did you finish? Good for quick facts but don't push thinking far. Level 2 is open questions. Why is the sky blue? What's the evidence? Open questions invite real thinking and longer answers. Level 3 is deep questions. What would change my mind? How do we know? Deep questions push past the obvious to foundations and assumptions. Sharp thinkers ask more Level 2 and 3.` },
            { word: `closed vs open questions`,
              definition: `A key distinction in sharp thinking. A closed question gets a yes, no, or single fact — it stops conversation. An open question can't be answered in one word — it invites exploration and discovery. Most classrooms use closed questions. Sharp thinkers deliberately choose open ones. Instead of "did you understand?" ask "what parts surprised you?"`,
              audioPrompt: `Closed versus open questions is one of the most practical distinctions in sharp thinking, {name}. A closed question gets a yes, no, or a single fact. It stops conversation and learning. An open question can't be answered with one word. It invites exploration, longer thinking, and discovery. Most conversations, classrooms, and news headlines use closed questions. Sharp thinkers deliberately choose open questions because they go further. Instead of did you understand? ask what parts surprised you? Instead of is this true? ask what would make this more convincing?` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Five Question Words That Unlock Everything`,
          paragraphs: [
            `Researchers studying critical thinking have found a simple but powerful tool: FIVE QUESTION WORDS that, asked well, can unlock almost any topic. WHO? Who said this? Who benefits if it's true? Who else is studying it? WHAT? What's the actual claim? What's the evidence? What would change my mind? WHEN? When was this claim made? When did this happen? Is it still true? WHERE? Where is the information from? Where might bias be coming from? WHY? Why does this matter? Why might this be true OR false? Why is it being said now?`,
            `Then there's a bonus word: HOW? How do we know? How might this be wrong? How could we test it? These six question words, used carefully on any topic, are how journalists, scientists, detectives, and lawyers actually figure things out. They're called the "5 W's and an H," and they've been the foundation of clear investigation for centuries. Try this with literally anything you encounter — a viral claim, a homework question, something a friend says, a news story. Run it through Who, What, When, Where, Why, How. You'll see things others miss. This is how foxes hunt for truth — by asking through the woods, not just running through it.`,
          ],
          image: `/ue-assets/fs/l02-s3-five-words.webp`,
          imageCaption: `Who. What. When. Where. Why. How. The fox's hunting tools for truth.`,
          vocab: [
            { word: `the 5 Ws and H`,
              definition: `The six question words that unlock almost any topic: WHO (said it, benefits, studied it), WHAT (claim, evidence, would change mind), WHEN (made, happened, still true), WHERE (info from, bias), WHY (matters, true or false), HOW (we know, might be wrong, test it). The foundation of clear investigation.`,
              audioPrompt: `The 5 Ws and H are six question words that unlock almost any topic, {name}. Who said this? Who benefits? What's the actual claim? What's the evidence? When was this made? When did it happen? Where is the information from? Where might bias come from? Why does this matter? Why might this be true or false? And the bonus, How? How do we know? How might it be wrong? Journalists, scientists, detectives, and lawyers use these six words. They're the foundation of clear investigation. Try them on any topic.` },
            { word: `Socratic method`,
              definition: `A way of building knowledge through asking and answering questions rather than delivering answers. Named after the ancient Greek philosopher Socrates, who only asked questions — never gave answers. He believed real understanding comes from thinking through guided by good questions, not from being told what to believe. Still used in law schools and philosophy classes today.`,
              audioPrompt: `The Socratic method is a way of building knowledge through asking and answering questions rather than delivering answers, {name}. Named after the ancient Greek philosopher Socrates, who never gave answers — only asked questions. He believed real understanding comes from thinking through for yourself, guided by good questions, rather than being told what to believe. Still used in law schools, philosophy classes, and the best classrooms. The fox version: ask what makes you think that? Ask what would change your mind? Good questions guide thinking better than handed-over answers.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Asking Questions of Yourself (The Secret Move)`,
          paragraphs: [
            `Here's the deepest move, and it changes everything. The questions you ask OTHERS are powerful. But the questions you ask YOURSELF are even more powerful. Researchers call this METACOGNITION (thinking about your own thinking). Sharp thinkers regularly ask themselves: "Why do I believe what I believe?" "What evidence would change my mind?" "Am I just defending an opinion I already had, or am I actually thinking?" "What might I be missing?" "Is there a different angle I haven't considered?" These questions, asked of yourself, are how you grow PAST your own biases.`,
            `Most people never question their own thinking. They just react. They have an opinion and defend it. They believe what they were taught and never check. Sharp thinkers — foxes of the mind — regularly TURN THE QUESTIONS INWARD. "Am I right about this?" "Why am I so sure?" "What would I think if I'd grown up somewhere else?" This isn't doubt or weakness — it's STRENGTH. It's what lets you grow past who you used to be. Byte's first teaching: questions are the engine. Ask others Level 2 and 3 questions. Use the 5 Ws and H. And, most importantly, ask YOURSELF the hardest questions of all. The kid who builds this skill becomes someone who keeps growing and learning their whole life, instead of stopping at age 18 like most adults secretly do.`,
          ],
          image: `/ue-assets/fs/l02-s4-yourself.webp`,
          imageCaption: `Ask questions of YOURSELF. "Why do I believe this?" "What would change my mind?"`,
          vocab: [
            { word: `metacognition`,
              definition: `Thinking about your own thinking. Asking yourself: "Why do I believe what I believe?" "What evidence would change my mind?" "What am I missing?" The deepest thinking move. Sharp thinkers regularly turn questions INWARD. This is how you grow past your own biases. Most people never do it.`,
              audioPrompt: `Metacognition is thinking about your own thinking, {name}. Asking yourself, why do I believe what I believe? What evidence would change my mind? Am I just defending an opinion or actually thinking? What might I be missing? Is there a different angle? These questions, asked of yourself, are how you grow past your own biases. Most people never question their own thinking. They just react. Sharp thinkers regularly turn the questions inward. This isn't doubt or weakness, it's strength. It's what lets you grow past who you used to be.` },
            { word: `self-questioning`,
              definition: `The habit of regularly asking yourself challenging questions about your own beliefs and reasoning — "Why do I believe this? What would change my mind? Am I avoiding a different angle?" Most people question others but rarely themselves, leaving biases invisible. Self-questioning creates just enough space between you and your belief to see it more clearly.`,
              audioPrompt: `Self-questioning is the habit of regularly asking yourself challenging questions about your own beliefs and reasoning, {name}. Why do I believe this? What would change my mind? Am I avoiding a different angle? Most people question others but rarely question themselves. This leaves biases and blind spots invisible. The most powerful version of metacognition is self-questioning, because it's the hardest to do. Your own opinions feel true from the inside. Self-questioning creates a small gap between you and your belief — just enough room to see it clearly.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the moves of asking GOOD questions in order, {name}. Here are five steps of building question-asking skill, from FIRST CURIOSITY to DEEPEST INQUIRY. Use the arrows to arrange them.`,
          items: [
            { id: `step-curious`,  label: `GET CURIOUS — instead of accepting what you hear, notice when you don't know something or want to understand better; that's the spark`,                                                        position: 1 },
            { id: `step-yes-no`,   label: `ASK A QUICK YES/NO QUESTION if needed — "is this true?" — but don't stop here; this is just the easiest level`,                                                                          position: 2 },
            { id: `step-open`,     label: `LEVEL UP TO OPEN QUESTIONS — "why?" "how?" "what's the evidence?" — these invite real thinking and longer answers`,                                                                       position: 3 },
            { id: `step-5ws`,      label: `USE THE 5 Ws AND H. Who? What? When? Where? Why? How? Runs any topic through the foundation of clear investigation`,                                                                      position: 4 },
            { id: `step-inward`,   label: `TURN THE QUESTIONS INWARD (metacognition). "Why do I believe this? What would change my mind? What am I missing?" The deepest move — how you grow past your own biases`,               position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice: get curious, level up your questions (Level 1 to 2 to 3), use the 5 Ws and H, and turn the questions inward through metacognition. Most adults never master this. You're learning it at 9 or 10. Build it. Your whole life will be sharper because of it.`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l02-q1`, format: `true-false`,
              question: `True or false: Being smart means having ANSWERS, not asking questions.`,
              correctAnswer: false,
              explanation: `False. The smartest people in history (Einstein, Curie, da Vinci) were the BEST QUESTION-ASKERS. Thinking moves forward on QUESTIONS, not just answers. Researchers found kids who ask more questions learn faster, remember more, understand deeper. People who only repeat answers aren't really thinking. People who ask are.` },

            { id: `l02-q2`, format: `multiple-choice`,
              question: `What are the THREE LEVELS of questions?`,
              options: [
                `Easy, medium, hard`,
                `LEVEL 1, yes/no (quick facts, weak). LEVEL 2, open (invite thinking, "why," "how"). LEVEL 3, deep (push past obvious, "what would change my mind")`,
                `Small, medium, large`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Three levels: Level 1 yes/no (quick facts, weakest). Level 2 open (why, how, what's the evidence, invite real thinking). Level 3 deep (what would change my mind, how do we know, push past obvious to foundations). Sharp thinkers ask more Levels 2 and 3.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What are the 5 Ws AND H?`,
              options: [
                `A school subject`,
                `WHO, WHAT, WHEN, WHERE, WHY, HOW. Six question words that unlock almost any topic. Foundation of journalists, scientists, detectives, lawyers`,
                `Random letters`,
                `A code`,
              ],
              correctIndex: 1,
              explanation: `Who, What, When, Where, Why, How. Six question words that unlock almost any topic. Who said it, who benefits? What's the claim, what's the evidence? When made, when happened? Where from, where bias? Why true or false? How do we know? Journalists, scientists, detectives use these. Foundation of clear investigation.` },

            { id: `l02-q4`, format: `true-false`,
              question: `True or false: The brain stays AWAKE when asking questions and goes to sleep when just listening.`,
              correctAnswer: true,
              explanation: `True. Researchers studying learning found that asking questions keeps the brain actively engaged. Just receiving information puts it on auto-pilot. That's why kids who ask more questions learn faster, remember more, understand deeper than kids who just listen.` },

            { id: `l02-q5`, format: `multiple-choice`,
              question: `What is METACOGNITION?`,
              options: [
                `Random thinking`,
                `Thinking about your OWN thinking. Asking yourself "why do I believe this?" "what would change my mind?" "what am I missing?" The deepest thinking move`,
                `Forgetting things`,
                `Quick decisions`,
              ],
              correctIndex: 1,
              explanation: `Metacognition is thinking about your own thinking. Asking yourself why do I believe what I believe? What evidence would change my mind? What am I missing? These inward questions are how you grow past your own biases. Most people never do this. Sharp thinkers regularly turn questions inward.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `Why do most kids ASK FEWER questions as they get older?`,
              options: [
                `They learn everything`,
                `They become AFRAID OF LOOKING DUMB. But this kills their thinking growth. The kids who keep asking become adults who keep growing`,
                `Boring`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Most kids stop asking as many questions as they get older because they're afraid of looking dumb. This actually kills their thinking growth. The kids who keep asking, even when it feels embarrassing, become the adults who keep growing. Adults who stop asking become rigid.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `What is a DEEP question?`,
              options: [
                `Yes/no question`,
                `Pushes past the OBVIOUS to FOUNDATIONS and assumptions. "What would change my mind?" "How do we know what we know?" Moves thinking forward most`,
                `Hard math`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Deep questions (Level 3) push past the obvious to foundations and assumptions. "What would change my mind?" "How do we know what we know?" "What's the BIGGEST question here no one is asking?" These are the questions that move thinking forward most.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about asking questions?`,
              options: [
                `Stop asking`,
                `Questions are the ENGINE. Ask Level 2 and 3 questions. Use the 5 Ws and H. And, most importantly, ask YOURSELF the hardest questions of all`,
                `Be quiet`,
                `Know it all`,
              ],
              correctIndex: 1,
              explanation: `Questions are the engine. Ask others Level 2 and 3 questions. Use the 5 Ws and H. And most importantly, ask yourself the hardest questions of all. The kid who builds this skill keeps growing and learning their whole life, instead of stopping at 18 like most adults secretly do.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Do you ask LOTS of questions, or have you started holding them back? What might have changed?` },
            { id: `r2`, text: `Pick something you believe strongly. Ask yourself: "Why do I believe this? What would change my mind?" Notice what comes up.` },
            { id: `r3`, text: `Pick a topic you're curious about. Run it through the 5 Ws and H. What new questions show up?` },
            { id: `r4`, text: `What's ONE question you'd like to ask a trusted adult this week that you've been holding back?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Research on questioning and learning is some of the most consistent in education. Kids who ask more questions outperform kids who don't, in every measurable way. The Socratic method (used in law schools, philosophy classes, and the best high schools) is built entirely on questioning. Journalists are trained to use the 5 Ws and H on every story. Scientists ask "what would prove this wrong?" before believing any theory. The pattern is everywhere. Byte's note: in a world full of confident answers (from people, from AI, from media, from internet), the kids who learn to ASK GOOD QUESTIONS have a real edge. They're harder to fool. They learn faster. They grow throughout their lives. They become the adults who keep getting wiser instead of getting stuck. Keep asking. Ask others Levels 2 and 3. Run things through the 5 Ws and H. Turn the hardest questions inward. Most adults stopped asking around age 18. You don't have to. Foxes ask their whole lives. So can you.`,
          familyAdventure: `Family Question Practice. As a family, try this for one week: at dinner, each person shares ONE good question they asked or want to ask about something. Not an answer — a question. Adults model it too. Build a family culture where good questions are celebrated, not just right answers. The home that practices questioning together grows sharper thinkers naturally. You can also try the "5 Ws and H" together on any topic from the day. See what new angles open up.`,
          creativePrompt: {
            intro: `Write about your own questioning — what you'd like to ask, who you'd like to ask, and the questioner you want to grow into.`,
            floor: `Write at least 5 sentences. Name 2-3 questions you'd like to ask and the kind of asker you want to be.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on questioning in your life.`,
            open: `Write as much as you want. Write a full piece about your own relationship with asking questions. Honestly describe whether you ask LOTS or hold back, and why. List 5-10 GOOD questions you'd like to ask someone (a trusted adult, a teacher, a parent, a researcher, an expert). Make some of them Level 2 (why, how) and some Level 3 (deep, foundation questions). Then list 3-5 questions you want to ask YOURSELF this week (metacognition). Describe the kind of questioner you want to grow into — brave, curious, comfortable with not knowing, willing to turn questions inward. End with a commitment to ask MORE this week. Make it specific and curious.`,
            frames: [
              `My honest relationship with asking questions is ___.`,
              `Good questions I'd like to ask others are ___.`,
              `Questions I want to ask MYSELF are ___.`,
              `The questioner I want to become is ___.`,
              `My commitment this week is ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Curious, sharp work, {name}! You now know the most underrated thinking skill. Questions are the engine. Three levels (yes/no, open, deep). The 5 Ws and H. And metacognition — the deepest move — asking questions of YOURSELF. Practice this. Ask more, tell less. Watch your thinking sharpen weekly. Next, we apply your sharpening skills to one of the most important tasks of modern life — SPOTTING WHAT'S REAL. In a world of misinformation, critical thinking is the skill of skills. Sharpen your ears, and I'll see you there. — Byte.`,
          badge: `question-asker`,
          badgeName: `Question Asker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L02;
