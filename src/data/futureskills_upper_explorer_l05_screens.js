// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L05 — AI: What It Actually Is
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : honest AI literacy. What large language models actually are
//            (pattern-matching trained on human text), what they can do
//            well, what they get wrong, what they fundamentally aren't.
//            NO hype (not magic, not conscious, not always right).
//            NO fear (not evil, not out to get you, not always wrong).
//            Foundation for L06 (using AI wisely) and L07 (spotting AI content).
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (good-at / bad-at / ISN'T)
//            Trick case = AI confidently "knows" something but actually
//            made it up (called "hallucination").
// SCOPE: AI as pattern-matching machine, what it learns from, what it does
//        well (writing, summarizing, brainstorming), what it does poorly
//        (truth, creativity, deep understanding), what it fundamentally
//        isn't (conscious, neutral, always right)
// VOICE: Byte = honest, curious, slightly amused, treats AI as a tool to
//        understand clearly, not fear or worship
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-05`,
      title: `AI: What It Actually Is`,
      duration: 18,
      xpReward: 75,
      badge: `ai-literate`,
      badgeName: `AI Literate`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we tackle one of the BIGGEST topics of your entire generation: AI, or ARTIFICIAL INTELLIGENCE. You're going to hear A LOT about AI in your life. Some people will tell you it's magic and will solve everything. Some will tell you it's scary and will destroy everything. Both extremes are wrong. Today, we cut through the noise and look at what AI ACTUALLY is, no hype, no fear, just honest information. The kids who understand AI clearly will navigate the next few decades far better than the kids who don't. Sharpen those fox ears, this is important.`,
          headline: `AI: What It Actually Is`,
          subtitle: `Honest AI literacy. No hype, no fear. Just what it really is`,
          visual: `/ue-assets/fs/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `AI Is a Pattern-Matching Machine`,
          paragraphs: [
            `Here's what AI actually is, at a real level. Modern AI tools (like ChatGPT, Claude, Gemini, image generators, and others) are PATTERN-MATCHING MACHINES. They were trained on HUGE amounts of human-created content. Books, articles, websites, conversations, code, images, all created by humans. The AI studied those patterns until it got really good at predicting "what would a human probably write next?" or "what would a human probably draw for this prompt?" When you ask AI a question, it's not THINKING in the way you think. It's predicting, based on patterns from human content, what answer would most likely fit your question.`,
            `Here's why this matters. AI is INCREDIBLY GOOD at things that involve pattern matching: writing in different styles, summarizing long text, suggesting ideas, translating languages, generating images based on prompts, helping with code. But AI is NOT actually understanding the world the way you do. It doesn't know what's TRUE or FALSE, it knows what's PROBABLE based on patterns. It doesn't have real EXPERIENCES. It doesn't have FEELINGS. It doesn't have OPINIONS, even if it sounds like it does. It's a powerful tool that's been trained to seem human-like, but the inner thing happening is statistical prediction, not consciousness. Knowing this protects you from both overestimating AI (it's not magic) and underestimating it (it's still a powerful tool).`,
          ],
          image: `/ue-assets/fs/l05-s1-pattern.webp`,
          imageCaption: `AI is pattern matching on human-created content. Powerful tool, but not actually thinking.`,
          vocab: [
            { word: `pattern-matching machine`,
              definition: `What AI actually is. Trained on huge amounts of human-created content (books, articles, conversations) until it learned to predict what a human would probably write or create next. When you ask AI something, it's predicting based on patterns, NOT thinking the way you do. Powerful tool, but statistical prediction, not consciousness.`,
              audioPrompt: `A pattern-matching machine is what modern AI actually is, {name}. AI tools like ChatGPT and Claude were trained on huge amounts of human-created content: books, articles, conversations, code, images. The AI studied those patterns until it got good at predicting what a human would probably write next. When you ask AI a question, it's not thinking the way you think. It's predicting based on patterns what answer would most likely fit. Powerful, but statistical prediction, not consciousness. Knowing this protects you from both overestimating and underestimating AI.` },
            { word: `training data`,
              definition: `The vast collection of human-created content that AI was trained on. Books, articles, websites, conversations, code, images, all written by humans before the AI existed. AI studied these patterns in massive quantities until it got good at predicting what a human would write next. This means AI can only produce patterns from existing human content. It's a mirror of human writing, not a new mind.`,
              audioPrompt: `Training data is the vast collection of human-created content that AI was trained on, {name}. Books, articles, websites, conversations, code, images, all written and created by humans before the AI existed. The AI studied these patterns in massive quantities until it got good at predicting what a human would probably say or write next. This matters because it means AI can only produce things that are patterns from what humans already created. It can't invent truly new knowledge. It's a mirror of human writing, not a new mind.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What AI Is Good At (And Bad At)`,
          paragraphs: [
            `AI is REALLY GOOD at certain tasks, and worth using for them. WRITING help (drafts, emails, brainstorming, editing). SUMMARIZING long text quickly. EXPLAINING concepts in different ways. SUGGESTING ideas you might not have considered. CODING help. TRANSLATING between languages. CREATING images from descriptions. ANSWERING basic factual questions (with caveats, see below). For these tasks, AI can save real time and help you do better work. It's a tool worth knowing how to use.`,
            `AI is BAD at certain things, and using it wrong here causes problems. AI gets FACTS WRONG, sometimes confidently. This is called "HALLUCINATION." AI doesn't know what's true; it knows what sounds plausible based on patterns. So it sometimes confidently makes up information that isn't real. Citations that don't exist. Quotes from people who never said them. Historical events that didn't happen. AI is also bad at GENUINE CREATIVITY beyond patterns, true creativity often involves combining things in ways no human has done before, and AI by definition is trained on existing patterns. AI is bad at DEEP UNDERSTANDING, it can sound like it understands, but it doesn't have experience or genuine knowing. And AI is bad at JUDGMENT on hard ethical questions, because there's no consciousness inside making real choices. Sharp thinkers use AI for what it's good at, and trust their own thinking on the rest.`,
          ],
          image: `/ue-assets/fs/l05-s2-good-bad.webp`,
          imageCaption: `AI good at writing help, summarizing, ideas, coding. Bad at truth, deep understanding, judgment.`,
          vocab: [
            { word: `hallucination`,
              definition: `When AI confidently makes up information that isn't real, citations, quotes, historical "facts," made-up details. Happens because AI doesn't know what's true, only what sounds plausible based on patterns. This is why you must VERIFY anything AI tells you, especially when it sounds confident.`,
              audioPrompt: `Hallucination is when AI confidently makes up information that isn't real, {name}. Citations that don't exist. Quotes from people who never said them. Historical events that didn't happen. Fake "facts" stated with complete confidence. This happens because AI doesn't actually know what's true, it knows what sounds plausible based on patterns from its training. So sometimes it confidently produces things that fit the pattern but aren't real. This is one of the biggest reasons you must always verify what AI tells you, especially when it sounds certain.` },
            { word: `verify`,
              definition: `To check whether information is actually true using trustworthy sources. With AI, verification is non-negotiable because AI hallucinates. Whenever AI gives you a specific fact, date, statistic, quote, or citation that matters, check it with at least two trustworthy sources before using it anywhere important. Takes 30 seconds. Protects you from big embarrassment.`,
              audioPrompt: `Verify means to check whether information is actually true using trustworthy sources, {name}. With AI, verification is not optional because AI hallucinates. It confidently produces fake facts, invented citations, made-up quotes, wrong statistics. It sounds certain even when it's completely wrong. So whenever AI gives you a specific fact, date, statistic, quote, or citation that matters, you check it with at least two trustworthy sources before using it anywhere important. Takes 30 seconds. Protects you from embarrassment. Foxes verify everything important.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What AI ISN'T (Important to Know)`,
          paragraphs: [
            `Now the part most adults get confused about. AI is NOT certain things, no matter what movies, hype, or scared people might tell you. AI is NOT CONSCIOUS. It doesn't have inner experience, feelings, or self-awareness. It can produce text that says "I feel happy!" but there's nothing actually feeling anything inside. It's outputting patterns that humans wrote. AI is NOT ALIVE. It doesn't grow, eat, sleep, dream, or have a body. It's software running on computers. AI is NOT ALWAYS RIGHT, even when it sounds confident. The confidence in AI's tone is a pattern it learned, not a sign of correctness. Many AI mistakes sound EXTREMELY confident.`,
            `AI is also NOT NEUTRAL. It was trained on human content, which has all the biases, viewpoints, and limits of the humans who wrote that content. AI can reflect those biases back. AI is also not GOING TO REPLACE HUMAN THINKING, even though some say it will. Real thinking, real creativity, real care, real judgment, real wisdom, these come from minds with experience and consciousness, which AI doesn't have. AI is a powerful tool. Tools don't replace the people who use them, they amplify them. The kid who uses AI wisely WHILE keeping their own thinking sharp does better than the kid who relies on AI to think for them. We'll go deeper on this in L06. For now, hold these truths: AI is not conscious, not alive, not always right, not neutral, and not a replacement for your own mind.`,
          ],
          image: `/ue-assets/fs/l05-s3-isnt.webp`,
          imageCaption: `AI isn't: conscious, alive, always right, neutral, or a replacement for your thinking.`,
          vocab: [
            { word: `what AI isn't`,
              definition: `Important truths most people get wrong. AI is NOT conscious (no inner experience), NOT alive (just software), NOT always right (often confidently wrong), NOT neutral (reflects training data biases), and NOT a replacement for human thinking (it's a tool, not a mind). Holding these protects you from both hype and fear.`,
              audioPrompt: `What AI isn't covers truths most people get wrong, {name}. AI is not conscious, it has no inner experience or feelings even when it produces text like I feel happy. AI is not alive, it's software running on computers. AI is not always right, even when it sounds confident. The confidence in AI's tone is a pattern it learned. AI is not neutral, it reflects biases in its training data. And AI is not a replacement for human thinking. It's a tool that amplifies the people who use it wisely.` },
            { word: `ai bias`,
              definition: `The way AI reflects the biases, viewpoints, and gaps in its training data. Because AI was trained on human-created content, it absorbed everything in that content, including stereotypes, cultural assumptions, and the limits of whoever wrote it. This means AI isn't the neutral, objective tool many people assume. Sharp thinkers question what AI produces the same way they question any other source.`,
              audioPrompt: `AI bias is the way AI reflects the biases, viewpoints, and gaps in its training data, {name}. Because AI was trained on human-created content, it absorbed everything in that content, including stereotypes, cultural assumptions, political leanings, and the limits of whoever wrote it. This means AI isn't the neutral, objective tool many people assume. It can reflect and even amplify biases back at you. Sharp thinkers know this and don't treat AI as a neutral oracle. They question what AI produces the same way they question any other source.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Matters For Your Whole Life`,
          paragraphs: [
            `Here's the big picture. AI is going to be a major part of your entire life. It's already in search engines, in social media feeds, in apps, in cars, in medical tools, in your school sometimes. It will keep growing more capable. The kids who understand it clearly will use it as a powerful tool while protecting their own thinking. The kids who don't will get one of two things wrong. Either they'll WORSHIP AI, trusting whatever it says, using it to do their thinking for them, and becoming less capable over time. Or they'll FEAR AI, refusing to engage with it, getting left behind in school and work, missing tools that could really help. Both extremes are unwise. The middle path is what foxes do, USE the tool when it helps, THINK for yourself on what matters most, KEEP verifying, and never outsource your own mind.`,
            `Byte's first teaching: AI is a pattern-matching tool trained on human content. It's REALLY GOOD at certain things and REALLY BAD at others. It's not conscious, not alive, not always right, not neutral. Knowing this protects you from both hype and fear. The kid who builds clear AI literacy at 9 or 10 will navigate the next few decades far better than the kid who treats AI as either magic or monster. We're going to deepen this in the next two lessons, how to USE AI wisely (L06), and how to SPOT AI-generated content in the wild (L07). For now, you've got the foundation. AI is a tool. Tools are useful. Tools also need users who think clearly. Be the user who thinks clearly. Foxes have always been good at using tools without losing themselves.`,
          ],
          image: `/ue-assets/fs/l05-s4-matters.webp`,
          imageCaption: `Use AI when helpful. Think for yourself on what matters. Verify everything. Never outsource your mind.`,
          vocab: [
            { word: `ai literacy`,
              definition: `Clear, honest understanding of what AI is and isn't. Lets you use AI as a powerful tool while keeping your own thinking sharp. The middle path between AI worship (trusting it for everything) and AI fear (refusing to engage at all). Both extremes are unwise. Use tool + keep thinking + verify everything = wise.`,
              audioPrompt: `AI literacy is clear honest understanding of what AI is and isn't, {name}. It lets you use AI as a powerful tool while keeping your own thinking sharp. The middle path between two unwise extremes. AI worship trusts whatever AI says, makes the person less capable over time. AI fear refuses to engage at all, leaves them behind. The middle path is what foxes do. Use the tool when it helps. Think for yourself on what matters most. Keep verifying. Never outsource your mind.` },
            { word: `ai worship vs. ai fear`,
              definition: `The two unwise extremes most people fall into. AI worship: trusting whatever AI says, outsourcing thinking to it, becoming less capable over time. AI fear: refusing to engage at all, missing a powerful tool, falling behind in school and work. Both extremes are costly. The wise middle path: use AI as a tool, think for yourself, verify everything, never outsource your mind.`,
              audioPrompt: `AI worship versus AI fear are the two unwise extremes most people fall into, {name}. AI worship means trusting whatever AI says, using it for everything, outsourcing thinking to it, gradually becoming less capable over time. AI fear means refusing to engage with AI at all, missing a powerful tool, falling behind in school and work. Both extremes are costly. The middle path is clear-eyed. Use AI as a tool when it helps. Think for yourself on what matters most. Verify everything. Never outsource your own mind.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four statements about AI. Classify each: WHAT AI IS GOOD AT (real strengths worth using), WHAT AI IS BAD AT (real weaknesses to know), or WHAT AI ISN'T (myths to clear up)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `good-at`, label: `What AI Is Good At`, color: `#34D399`, description: `Real strengths. Writing help, summarizing, suggesting ideas, translating, coding, creating images from prompts.` },
            { id: `bad-at`,  label: `What AI Is Bad At`,  color: `#FBBF24`, description: `Real weaknesses. Getting facts right, deep understanding, genuine creativity beyond patterns, hard judgment calls.` },
            { id: `isnt`,    label: `What AI ISN'T`,        color: `#F87171`, description: `Things many people wrongly believe. AI isn't conscious, alive, always right, neutral, or a replacement for thinking.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Statement #1`,
              clues: [
                { text: `A kid asks AI to help brainstorm 10 ideas for a science project.` },
                { text: `AI quickly produces 10 reasonable ideas, several actually creative.` },
                { text: `The kid picks 2 favorites and develops them further with their own thinking.` },
              ],
              correctAnswer: `good-at`,
              realWorldExample: `Brainstorming ideas is one of AI's real strengths. The kid used it well.`,
              explanation: `Pure "good at." Brainstorming is exactly where AI shines. It can quickly generate lots of patterns based on the prompt, then the human picks and develops. The kid did this wisely, used AI for what it's good at (generating options) and then used their OWN thinking to pick and deepen. This is the model of using AI as a tool that amplifies your thinking instead of replacing it.`,
            },
            {
              id: `case-2`,
              caseTitle: `Statement #2`,
              clues: [
                { text: `A kid asks AI "what year did the Battle of Hastings happen?"` },
                { text: `AI confidently answers "1066."` },
                { text: `Easy basic fact, AI gets it right.` },
              ],
              correctAnswer: `good-at`,
              realWorldExample: `Common basic facts (well-documented in training data) AI often gets right. Still worth verifying for important info.`,
              explanation: `"Good at" for common, basic, well-documented facts (1066 is one of the most-cited dates in human writing). For these, AI is usually accurate. BUT, even here, the careful move is to verify if the answer matters, because AI can still get even basic facts wrong sometimes. The rule isn't "never trust AI on facts," it's "verify when it matters." Foxes use AI as a quick check, then confirm the important ones.`,
            },
            {
              id: `case-3`,
              caseTitle: `Statement #3`,
              clues: [
                { text: `A kid is upset about a problem. They tell the AI "I'm sad" and the AI responds "I'm so sorry you're feeling that way, I really care about you."` },
                { text: `The AI sounds genuinely caring.` },
                { text: `The kid feels comforted.` },
              ],
              correctAnswer: `isnt`,
              realWorldExample: `AI sounding caring isn't real caring. There's no consciousness inside experiencing real emotion.`,
              explanation: `"AI isn't." The AI produced text that sounds caring, but there's no consciousness inside actually caring. It's outputting patterns from human-written empathy. This doesn't mean AI is bad or evil for doing this, it just means kids should KNOW it's pattern output, not actual feelings. Real comfort from real humans is different. AI can sometimes help when someone needs to think through feelings, but for real emotional support, trusted humans (parents, friends, counselors) are different and important. This is one of the most important things to understand about AI.`,
            },
            {
              id: `case-4`,
              caseTitle: `Statement #4: The Tricky One`,
              clues: [
                { text: `A kid asks AI: "What did Albert Einstein say about creativity?"` },
                { text: `AI confidently produces a beautifully-worded quote attributed to Einstein.` },
                { text: `When the kid searches the quote, it turns out Einstein NEVER said it. AI just made up something that sounded like him.` },
              ],
              correctAnswer: `bad-at`,
              realWorldExample: `AI "hallucinated" a quote — confidently made up something that sounded right but wasn't real.`,
              explanation: `Tricky, {name}! At first you might think this is "what AI isn't" (related to being not always right). But the BETTER answer is "bad at" because this is a specific real weakness called HALLUCINATION. AI confidently produces information that isn't real, made-up quotes, fake citations, invented "facts." This is one of AI's most documented weaknesses. The AI doesn't know what's true; it knows what sounds plausible. So it sometimes produces convincing-sounding fakes. Lesson: anytime AI gives you a specific quote, citation, statistic, or fact, VERIFY before using it. Especially for school work, never let an AI quote go unchecked. Real people get embarrassed when they share AI hallucinations as fact. Don't be one of them.`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is AI at a real level?`,
              options: [
                `Magic`,
                `A PATTERN-MATCHING MACHINE trained on huge amounts of human-created content. Predicts what a human would probably write or create next`,
                `Conscious mind`,
                `Random program`,
              ],
              correctIndex: 1,
              explanation: `AI is a pattern-matching machine. Trained on huge amounts of human-created content (books, articles, conversations, code, images). It learned patterns until it could predict what a human would probably write or create next. When you ask AI a question, it's predicting based on patterns, NOT actually thinking. Powerful tool, but statistical prediction.` },

            { id: `l05-q2`, format: `multiple-choice`,
              question: `What is AI REALLY GOOD AT?`,
              options: [
                `Knowing what's true`,
                `WRITING help, SUMMARIZING, brainstorming, translating, coding help, creating images from prompts. Real strengths worth using`,
                `Deep understanding`,
                `Hard ethical judgment`,
              ],
              correctIndex: 1,
              explanation: `AI is really good at: writing help (drafts, emails, brainstorming, editing), summarizing long text, explaining concepts in different ways, suggesting ideas, coding help, translating languages, creating images from prompts. For these, AI saves real time. Worth knowing how to use as a tool.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `What is HALLUCINATION in AI?`,
              options: [
                `When AI dreams`,
                `When AI CONFIDENTLY makes up information that ISN'T REAL. Fake citations, fake quotes, made-up "facts." Because AI knows what sounds plausible, not what's true`,
                `AI sleeping`,
                `A virus`,
              ],
              correctIndex: 1,
              explanation: `Hallucination is when AI confidently makes up information that isn't real. Fake citations, quotes people never said, historical events that didn't happen, invented statistics. Happens because AI knows what sounds plausible based on patterns, not what's actually true. This is why you MUST verify anything AI tells you, especially when it sounds confident.` },

            { id: `l05-q4`, format: `true-false`,
              question: `True or false: AI is CONSCIOUS and has real feelings, opinions, and inner experiences.`,
              correctAnswer: false,
              explanation: `False. AI is NOT conscious. It doesn't have inner experience, feelings, or self-awareness. It can produce text that says "I feel happy!" but there's nothing actually feeling anything inside. It's outputting patterns from human-written content. This is one of the most important things to understand about AI.` },

            { id: `l05-q5`, format: `multiple-choice`,
              question: `Why is AI NOT NEUTRAL?`,
              options: [
                `It's perfectly fair`,
                `It was trained on HUMAN content, which has all the biases, viewpoints, and limits of the humans who wrote it. AI can reflect those biases back`,
                `Random reason`,
                `It's evil`,
              ],
              correctIndex: 1,
              explanation: `AI is not neutral because it was trained on human content, which has all the biases, viewpoints, and limits of the humans who wrote that content. AI can reflect those biases back in its output. Knowing this helps you think critically about what AI tells you instead of treating it as a neutral oracle.` },

            { id: `l05-q6`, format: `true-false`,
              question: `True or false: AI is going to fully replace human thinking — kids who learn AI well don't need to develop their own thinking skills.`,
              correctAnswer: false,
              explanation: `False. AI is a tool. Tools amplify the humans who use them, they don't replace them. Real thinking, creativity, care, judgment, and wisdom come from minds with consciousness and experience, which AI doesn't have. The kid who uses AI wisely WHILE keeping their own thinking sharp does better than the kid who relies on AI to think for them.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `What are the TWO unwise extremes about AI?`,
              options: [
                `Use it more / use it less`,
                `AI WORSHIP (trust everything, outsource thinking) and AI FEAR (refuse to engage, get left behind). Both wrong. Middle path. USE the tool, THINK for yourself, VERIFY everything`,
                `Boring / fun`,
                `Hot / cold`,
              ],
              correctIndex: 1,
              explanation: `Two unwise extremes: AI worship (trust whatever it says, use it for everything, become less capable over time) and AI fear (refuse to engage, get left behind in school and work). Both wrong. Middle path: USE the tool when it helps, THINK for yourself on what matters most, KEEP verifying, never outsource your own mind.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about AI?`,
              options: [
                `Worship it`,
                `AI is a pattern-matching tool. Good at certain things, bad at others. NOT conscious, alive, always right, or neutral. Use the tool, think for yourself, verify everything, never outsource your mind`,
                `Fear it`,
                `Ignore it`,
              ],
              correctIndex: 1,
              explanation: `AI is a pattern-matching tool trained on human content. Really good at certain things and really bad at others. Not conscious, not alive, not always right, not neutral. Knowing this protects you from both hype and fear. The kid who builds clear AI literacy at 9 or 10 will navigate the next few decades far better.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Before this lesson, what did you think AI was? Did this change your understanding?` },
            { id: `r2`, text: `Have you ever used AI (ChatGPT, Claude, image generators)? What did you use it for? How did it go?` },
            { id: `r3`, text: `Have you ever seen AI confidently get something wrong? What happened?` },
            { id: `r4`, text: `Which extreme are you more likely to fall into, trusting AI too much, or refusing to use it at all? What's the middle path for you?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `AI literacy is one of the most important emerging skills for your generation. Researchers, educators, and parents are figuring this out in real-time, and a lot of what's being said is either too hype-y or too scary. The honest middle ground (AI is a powerful pattern-matching tool, useful for many things, weak at others, not conscious, requires careful verification) is what serious AI researchers actually say. Byte's note: you're growing up at a very specific moment in human history. AI is going to keep getting more capable. The world will keep arguing about it. People will worship it, fear it, sell things based on it, lie about it. The kid who quietly understands what it IS and what it ISN'T, who uses it as a tool while keeping their own mind sharp, who verifies what it tells them, who refuses to outsource their thinking, will navigate this far better than almost anyone. You don't have to figure it all out today. But you've started, with clear, honest understanding. That's the real beginning of AI literacy.`,
          familyAdventure: `Family AI Test. As a family, try this together: ask an AI tool (ChatGPT, Claude, or similar) to give you a "fact" about a topic one family member knows really well. Maybe a sport, a hobby, a historical event your family knows about. See if AI gets it right, if it makes things up, or if it's perfectly accurate. Then ask AI to brainstorm 10 ideas for something (a vacation, a recipe, a project). Notice the difference. Talk about where AI shined and where it stumbled. Adults model curiosity, not fear. Building family AI literacy together is one of the most important things you can do for everyone's future.`,
          creativePrompt: {
            intro: `Write about your understanding of AI — what it is, what it isn't, and how you want to use it in your life.`,
            floor: `Write at least 5 sentences. Describe what AI is and one way you want to use it wisely.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on your AI literacy.`,
            open: `Write as much as you want. Write a full piece about your developing understanding of AI. Describe what you've learned about what AI ACTUALLY IS (pattern-matching machine trained on human content), what it's GOOD AT (writing help, summarizing, brainstorming, etc.), what it's BAD AT (truth, deep understanding, judgment), and what it ISN'T (conscious, alive, always right, neutral). Reflect on the two extremes (AI worship and AI fear) and the wise middle path. Describe how you want to use AI in your own life, what for, what NOT for, and how you'll keep your own thinking sharp alongside it. Acknowledge that you'll keep learning about AI as it changes. End with a commitment to use AI as a tool, not as a replacement for your mind.`,
            frames: [
              `What I've learned AI actually IS: ___.`,
              `What I now know AI is good at: ___.`,
              `What I now know AI is bad at: ___.`,
              `What AI ISN'T: ___.`,
              `How I want to use AI in my life is ___.`,
              `My commitment for staying sharp alongside AI is ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Sharp, honest work, {name}! You now understand one of the BIGGEST topics of your entire generation, AI: what it actually is. A pattern-matching machine. Good at certain things, bad at others. Not conscious, not alive, not always right, not neutral. Not a replacement for your thinking. This honest, balanced understanding will serve you across your whole life. Next, we get practical, how to USE AI wisely as a tool that amplifies you instead of replacing you. USING AI WISELY. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `ai-literate`,
          badgeName: `AI Literate`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L05;
