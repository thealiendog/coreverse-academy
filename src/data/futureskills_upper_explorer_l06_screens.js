// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L06 — Using AI Wisely
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : practical AI usage skills. When to use AI, when NOT to use AI,
//            how to verify, how to keep your own thinking sharp alongside.
//            Builds on L05 (what AI is) into concrete practice. Foundation
//            for healthy AI usage habits for life.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of using AI wisely)
// SCOPE: know what to use AI for vs. think for yourself, verify EVERYTHING
//        important, never outsource thinking that builds your mind, protect
//        your privacy and personal info, keep building your own skills
// VOICE: Byte = practical, honest, treats AI as a tool to wield well
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-06`,
      title: `Using AI Wisely`,
      duration: 18,
      xpReward: 75,
      badge: `wise-ai-user`,
      badgeName: `Wise AI User`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Now that you understand WHAT AI is (L05), let's get practical. AI is a powerful tool. Like any tool, it can help you a LOT, or it can hurt you, depending on HOW YOU USE IT. A hammer helps you build a house or smashes your finger; same hammer, different use. AI is the same. Today you learn the practical wisdom of using AI well, when to reach for it, when to think for yourself, how to verify what it tells you, how to protect yourself, and how to keep your own brain sharp alongside it. The kids who learn this now will use AI as a real advantage their whole lives. Let's go.`,
          headline: `Using AI Wisely`,
          subtitle: `How to use AI as a powerful tool. Without letting it replace your thinking`,
          visual: `/ue-assets/fs/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When to Use AI, When to Think for Yourself`,
          paragraphs: [
            `Here's the first wise move. Some tasks are GREAT for AI. Others are tasks where USING AI ACTUALLY HURTS YOU. Knowing the difference is critical. GOOD uses of AI: brainstorming ideas you'll then develop yourself, getting help structuring a writing piece you'll then write yourself, asking for explanations of concepts (then verifying), summarizing long content to scan it quickly, translating, getting feedback on something you wrote, coding help, breaking down a hard problem into steps. For these, AI is a helpful assistant that saves you time without replacing your thinking.`,
            `BAD uses of AI: having AI write your homework, your school essay, or your creative work for you to turn in. Letting AI think through hard problems FOR you when the WHOLE POINT of the assignment is to develop YOUR thinking skill. Outsourcing real social or emotional decisions to AI. Letting AI replace experiences that BUILD YOU as a person, like writing, problem-solving, deep reading, real conversation. Here's the key insight, if the WHOLE POINT of an activity is to develop your own skill (essay writing builds your thinking and writing; math practice builds your math reasoning; creative work builds your creativity), letting AI do it for you DEFEATS THE POINT. You miss the skill-building. Your mind doesn't grow. You become dependent on AI for things you should be able to do yourself. The kid who lets AI do all their homework actually becomes less capable, not more.`,
          ],
          image: `/ue-assets/fs/l06-s1-when.webp`,
          imageCaption: `Use AI to amplify your thinking. Don't use AI to replace your thinking. Critical difference.`,
          vocab: [
            { word: `amplify vs. replace`,
              definition: `The core distinction in using AI wisely. AMPLIFY: AI helps you do something better while YOU still do the thinking (brainstorming you develop, drafts you revise, problems you solve with help). REPLACE: AI does the thinking FOR you (homework you don't actually do, problems you don't actually solve). Replace makes you less capable; amplify makes you more.`,
              audioPrompt: `Amplify versus replace is the core distinction in using AI wisely, {name}. Amplify means AI helps you do something better while YOU still do the thinking. Brainstorming you develop. Drafts you revise. Problems you solve with help. Replace means AI does the thinking FOR you. Homework you don't do. Essays you don't write. If the point of an activity is to build your own skill, letting AI do it defeats the point. Your mind doesn't grow. You become dependent. Amplify makes you more capable, replace makes you less.` },
            { word: `good ai uses`,
              definition: `The specific tasks where AI genuinely helps without replacing your thinking. Brainstorming ideas you develop. Structuring writing you write yourself. Summarizing long content. Getting concept explanations then verifying. Translating. Getting feedback on your own work. Coding help. Breaking hard problems into steps. For all of these, you stay in charge of the thinking. AI is the assistant, not the decision-maker.`,
              audioPrompt: `Good AI uses are the specific tasks where AI genuinely helps, {name}. Brainstorming ideas you'll then develop yourself. Getting help structuring writing you'll then write yourself. Summarizing long content quickly. Asking for explanations of concepts then verifying them. Translating languages. Getting feedback on your own writing. Coding help. Breaking down hard problems into steps. For all of these, you stay in charge of the thinking. AI is the assistant, not the decision-maker. These are the uses worth building as habits.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Verify Everything Important`,
          paragraphs: [
            `Remember from L05, AI HALLUCINATES. It confidently produces fake facts, made-up quotes, invented citations, wrong statistics. This means you can NEVER take AI's word as final on anything that matters. The rule, VERIFY EVERYTHING IMPORTANT. For facts, dates, names, statistics, citations, quotes, scientific claims: cross-check with at least 2 trustworthy sources (L03!) before using anywhere it matters. For complex topics, look up what real experts say. For school work, your teacher cares about the truth, NEVER turn in AI-generated "facts" without verification.`,
            `Here's a useful pattern: when AI gives you information, ask yourself, "How would I check if this is true?" Then actually check. This adds 30 seconds to most tasks but saves you from huge embarrassment when AI is wrong. Real adults have lost jobs and credibility for sharing AI-hallucinated facts as truth. Don't let it happen to you. The kid who VERIFIES is the kid who builds a reputation as someone who actually knows things. The kid who blindly shares AI output gets caught and loses trust. Foxes verify trails. Verification is just basic respect for truth.`,
          ],
          image: `/ue-assets/fs/l06-s2-verify.webp`,
          imageCaption: `Verify everything that matters. AI sounds confident even when wrong. Cross-check with real sources.`,
          vocab: [
            { word: `ai verification`,
              definition: `The practice of cross-checking AI output (facts, dates, names, statistics, citations, quotes) with at least 2 trustworthy sources before using anywhere important. Adds 30 seconds, saves huge embarrassment. AI hallucinates confidently, so verification is non-negotiable for anything that matters.`,
              audioPrompt: `AI verification is the practice of cross-checking AI output with trustworthy sources before using anywhere important, {name}. AI hallucinates. It confidently produces fake facts, made-up quotes, invented citations, wrong statistics. So you can never take AI's word as final on anything that matters. For facts, dates, names, citations, statistics, quotes, cross-check with at least 2 trustworthy sources. For school work, your teacher cares about the truth. Never turn in AI-generated facts without verification. The kid who verifies builds a reputation as someone who actually knows things.` },
            { word: `source checking`,
              definition: `The specific habit of looking up AI's claims in 2 or more trustworthy sources before using them anywhere that matters. AI hallucinates facts, quotes, citations, and statistics with confidence. For anything important, identify the claim, then find it confirmed in real sources like established journalism, textbooks, or official websites. Source checking turns AI from a risky shortcut into a useful starting point.`,
              audioPrompt: `Source checking is the specific habit of looking up AI's claims in 2 or more trustworthy sources before using them anywhere that matters, {name}. AI hallucinates facts, quotes, citations, and statistics with complete confidence. So for anything important, you identify the claim, then find it confirmed in real sources like established journalism, textbooks, or official websites. If you can't find confirmation, don't use it. Source checking turns AI from a risky shortcut into a useful starting point. Smart researchers do this automatically.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Protect Your Privacy and Personal Stuff`,
          paragraphs: [
            `Here's something most kids don't think about. When you type stuff into AI tools, your words often go to a company that runs the AI. They may store what you said. They may use it to train future AI versions. They may have data breaches that leak it. This means: be careful what you SHARE with AI. DON'T share things you wouldn't want others to see, your full name and address together, private family stuff, personal struggles, embarrassing things, passwords or financial information. The AI will respond like it's a private conversation, but it isn't private the way talking to a trusted friend is. Treat AI more like writing a letter that might end up on a wall.`,
            `Also: DON'T let AI become your main emotional support system. AI can produce caring-sounding text (L05!), but there's no consciousness inside actually caring. For real emotional support, REAL HUMANS, parents, friends, counselors, family, are different and irreplaceable. If you're struggling with something big, tell a trusted adult. Don't outsource your hard moments to AI. This isn't because AI is bad, it's because real human connection matters more than ever, especially in a world where AI is everywhere. The kids who keep real human connection strong while using AI as a tool grow up healthy. The kids who let AI replace human connection often end up lonely and unwell.`,
          ],
          image: `/ue-assets/fs/l06-s3-privacy.webp`,
          imageCaption: `Don't share private stuff with AI. Don't let AI replace real human connection. Protect both.`,
          vocab: [
            { word: `ai privacy and connection`,
              definition: `Two protective practices. (1) Don't share private info with AI (full name+address, private family stuff, struggles, passwords) because companies may store it. (2) Don't let AI replace real human emotional support, real humans (parents, friends, counselors) are different and irreplaceable. Use AI as a tool, keep human connection real.`,
              audioPrompt: `AI privacy and connection are two protective practices, {name}. First, don't share things with AI that you wouldn't want others to see. Your full name and address together, private family stuff, personal struggles, passwords. The AI will respond like it's a private conversation, but it isn't private the way talking to a trusted friend is. Companies may store it. Second, don't let AI replace real human emotional support. AI can produce caring-sounding text, but there's no consciousness actually caring. For real support, real humans are different and irreplaceable.` },
            { word: `ai data storage`,
              definition: `The fact that what you type into AI tools often gets kept by the companies that run them. They may store conversations for research, use them to train future AI, or have data breaches that leak them. This is why you treat AI like writing a letter that might end up on a wall, not a private diary. Protect full identifying details, private family situations, personal struggles, and passwords.`,
              audioPrompt: `AI data storage is the fact that what you type into AI tools often gets kept by the companies that run them, {name}. They may store your conversations for research, use them to train future AI, or have data breaches that leak them. This is why you treat AI like writing a letter that might end up on a wall, not a private diary. Don't share full identifying details, private family situations, personal struggles, or passwords. Protect what matters.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Keep Building Your Own Skills`,
          paragraphs: [
            `Here's the deepest move, and it's what separates kids who thrive with AI from kids who suffer. KEEP DEVELOPING YOUR OWN SKILLS while using AI. Even when AI can write something for you, KEEP WRITING yourself sometimes. Even when AI can solve math for you, KEEP DOING math yourself. Even when AI can answer questions, KEEP READING and thinking deeply yourself. Your brain works like a muscle: use it, it grows; don't use it, it weakens. If AI does all your thinking, your thinking shrinks. If you keep thinking ALONGSIDE AI, your mind stays sharp AND you have a powerful tool.`,
            `Researchers studying skill development have found that people who use AI as ASSISTANTS while still doing the work themselves stay sharp and capable. People who let AI replace their work lose the skills over time and end up dependent. This is true for writing, math, reasoning, creativity, decision-making, everything. The wise practice is to USE AI for amplification (faster brainstorming, drafting help, idea generation), but KEEP DOING the core work yourself enough to keep growing. Byte's first teaching: AI is a powerful tool. Use it for what it's good at. Verify everything important. Protect your privacy. Don't replace human connection. And, most importantly, keep building your OWN thinking, your own writing, your own creating, your own problem-solving. The kid who treats AI as a tool that AMPLIFIES rather than REPLACES becomes the adult with both the powerful tool AND the capable mind. That's the goal. That's the fox way.`,
          ],
          image: `/ue-assets/fs/l06-s4-skills.webp`,
          imageCaption: `Keep building your own skills alongside AI. Use the tool. Don't lose the muscle.`,
          vocab: [
            { word: `keeping your skills`,
              definition: `The practice of continuing to do core skill-building work yourself (writing, math, reasoning, problem-solving) even when AI could do it for you. Your brain works like a muscle, use it, it grows; don't use it, it weakens. Wise users get AI's amplification AND keep their own capable mind. Lazy users lose the skills.`,
              audioPrompt: `Keeping your skills is the practice of doing core skill-building work yourself even when AI could do it for you, {name}. When AI can write for you, keep writing yourself. When AI can solve math, keep doing math. When AI can answer questions, keep reading and thinking deeply. Your brain works like a muscle: use it, it grows; don't use it, it weakens. If AI does all your thinking, your thinking shrinks. If you keep thinking alongside AI, your mind stays sharp and you have a powerful tool.` },
            { word: `brain as muscle`,
              definition: `The principle that mental skills grow with use and weaken without it. Writing regularly makes you a better writer. Reading deeply makes you a sharper thinker. Doing math yourself builds math reasoning. If AI does all these things for you, your skills don't grow, they shrink. Keeping your own thinking sharp alongside AI is the difference between becoming more capable and becoming more dependent over time.`,
              audioPrompt: `Brain as muscle is the principle that mental skills grow with use and weaken without it, {name}. Writing regularly makes you a better writer. Reading deeply makes you a sharper thinker. Doing math yourself builds math reasoning. Solving hard problems yourself builds problem-solving ability. If AI does all these things for you, your skills don't grow. They shrink. This is why keeping your own thinking sharp alongside AI isn't just nice to have. It's the difference between becoming more capable over time and becoming more dependent.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the moves of using AI wisely in order, {name}. Here are five steps, from FIRST DECISION to ONGOING PRACTICE. Use the arrows to arrange them.`,
          items: [
            { id: `step-decide`,    label: `DECIDE WHAT TO USE AI FOR (and what NOT to) — amplification yes (brainstorming, drafting help, summarizing), replacement no (don't outsource thinking that builds you)`,        position: 1 },
            { id: `step-verify`,    label: `VERIFY EVERYTHING THAT MATTERS. AI hallucinates confidently. Cross-check facts, dates, quotes, citations with 2+ trustworthy sources. Takes 30 seconds, saves embarrassment`,    position: 2 },
            { id: `step-dont-replace`, label: `NEVER LET AI REPLACE THINKING THAT BUILDS YOU. Writing, math, reasoning, creativity, hard problem-solving. Do the core work yourself enough to keep growing`,                      position: 3 },
            { id: `step-privacy`,   label: `PROTECT YOUR PRIVACY AND HUMAN CONNECTION — don't share private info (full identity, personal struggles, passwords); don't let AI replace real human emotional support`,         position: 4 },
            { id: `step-keep-building`, label: `KEEP BUILDING YOUR OWN SKILLS. Use AI as amplifier. Keep writing, reading deeply, problem-solving yourself. Your mind is a muscle, use it or lose it. This lasts a lifetime`,    position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of using AI wisely: decide what to use it for, verify everything that matters, never let it replace skill-building thinking, protect your privacy and human connections, and keep building your own skills. Practice these. AI will keep getting more powerful. The kid who builds these habits early stays in the driver's seat their whole life.`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is the CORE distinction in using AI wisely?`,
              options: [
                `Use it a lot vs. a little`,
                `AMPLIFY (AI helps while YOU still do the thinking) vs. REPLACE (AI does the thinking FOR you). Amplify makes you more capable, replace makes you less`,
                `Fun vs. serious`,
                `Old vs. new`,
              ],
              correctIndex: 1,
              explanation: `The core distinction: AMPLIFY vs. REPLACE. Amplify means AI helps you do something better while YOU still do the thinking (brainstorming you develop, drafts you revise). Replace means AI does the thinking FOR you (homework you don't actually do, problems you don't actually solve). Replace makes you less capable; amplify makes you more.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is a GOOD use of AI?`,
              options: [
                `Writing your school essay for you`,
                `BRAINSTORMING ideas YOU'LL then develop, getting help structuring something YOU'LL write, summarizing to scan quickly, translating, getting feedback on YOUR work`,
                `Solving math homework completely`,
                `Living your social life for you`,
              ],
              correctIndex: 1,
              explanation: `Good uses of AI: brainstorming ideas you'll then develop yourself, getting help structuring a writing piece you'll then write yourself, asking for explanations (then verifying), summarizing long content, translating, getting feedback on your own work, coding help, breaking down hard problems. Helpful assistant; you still do the thinking.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `Why is letting AI do your homework BAD?`,
              options: [
                `It's just bad`,
                `If the WHOLE POINT of the assignment is to develop YOUR thinking skill, letting AI do it DEFEATS THE POINT. You miss skill-building, your mind doesn't grow, you become dependent`,
                `Teachers don't like it`,
                `Random reason`,
              ],
              correctIndex: 1,
              explanation: `If the whole point of an activity is to develop your own skill (essay writing builds your thinking; math practice builds your math reasoning; creative work builds your creativity), letting AI do it for you DEFEATS THE POINT. You miss skill-building. Your mind doesn't grow. The kid who lets AI do all homework becomes less capable, not more.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `What's the RULE about verifying AI?`,
              options: [
                `Never check`,
                `VERIFY EVERYTHING IMPORTANT. Facts, dates, quotes, citations, statistics. Cross-check with 2+ trustworthy sources. Takes 30 seconds, saves huge embarrassment`,
                `Only check easy stuff`,
                `AI is always right`,
              ],
              correctIndex: 1,
              explanation: `Verify everything important. AI hallucinates, confidently produces fake facts, quotes, citations, statistics. Cross-check with at least 2 trustworthy sources before using anywhere it matters. Takes 30 seconds, saves huge embarrassment. Real adults have lost jobs sharing AI hallucinations as truth.` },

            { id: `l06-q5`, format: `true-false`,
              question: `True or false: It's totally fine to share your full name, address, personal struggles, and passwords with AI tools — it's like talking to a private friend.`,
              correctAnswer: false,
              explanation: `False. When you type into AI tools, your words often go to a company that runs the AI. They may store it, use it for training, or have data breaches that leak it. The AI feels private, but it isn't private the way talking to a trusted friend is. Don't share private personal info, identifying details, struggles, or passwords with AI.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `Why should you NOT let AI replace REAL HUMAN connection?`,
              options: [
                `Humans are better at everything`,
                `AI produces caring-sounding text but there's no consciousness actually caring. Real humans (parents, friends, counselors) are different and irreplaceable for real emotional support`,
                `Random reason`,
                `AI is mean`,
              ],
              correctIndex: 1,
              explanation: `AI can produce caring-sounding text, but there's no consciousness inside actually caring (L05!). For real emotional support, real humans, parents, friends, counselors, family, are different and irreplaceable. Tell trusted adults when you're struggling. The kids who keep real human connection strong while using AI grow up healthy.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `What did researchers find about people who let AI REPLACE their work?`,
              options: [
                `They get smarter`,
                `Lose the skills over time, become dependent. Your brain is a muscle, use it or it weakens`,
                `Nothing changes`,
                `Random results`,
              ],
              correctIndex: 1,
              explanation: `Researchers found that people who use AI as ASSISTANTS while still doing the work themselves stay sharp and capable. People who let AI replace their work lose the skills over time and become dependent. Your brain works like a muscle: use it, it grows; don't use it, it weakens. Wise users get AI's amplification AND keep their capable mind.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about using AI wisely?`,
              options: [
                `Use AI for everything`,
                `AI is a powerful tool. Use it for what it's good at. Verify everything important. Protect privacy. Don't replace human connection. Keep building YOUR thinking, writing, creating. AMPLIFIES not REPLACES`,
                `Never use AI`,
                `Be afraid`,
              ],
              correctIndex: 1,
              explanation: `AI is a powerful tool. Use it for what it's good at. Verify everything important. Protect your privacy. Don't replace human connection. And, most importantly, keep building your own thinking, writing, creating, problem-solving. Treat AI as a tool that AMPLIFIES rather than REPLACES. The kid who does this becomes the adult with both the powerful tool AND the capable mind.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever used AI for homework or schoolwork? Be honest, was it amplifying your thinking or replacing it? What might you do differently?` },
            { id: `r2`, text: `Have you ever shared something private with AI you wouldn't have shared publicly? What might you do differently next time?` },
            { id: `r3`, text: `Of the five wise moves (decide, verify, don't replace, protect, keep building), which feels most important for YOU to grow this month?` },
            { id: `r4`, text: `What's ONE thing you commit to keep doing YOURSELF, even when AI could do it for you, because it builds you?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Research on AI usage in education is rapidly developing, and the patterns are clear. Students who use AI as a research and brainstorming tool while doing the actual thinking themselves perform better and develop stronger skills. Students who let AI do their work for them perform worse on tests where AI isn't available, develop weaker reasoning, and often get caught for plagiarism with serious consequences. Real journalists, scientists, and professionals are also figuring out where AI helps and where it hurts in their work. The patterns are similar everywhere, AI as amplification works; AI as replacement fails. Byte's note: you're growing up at the exact moment when humans are figuring out how to use AI well. Most adults are still confused. You'll have the chance to be ahead of them, just by building the wise habits early. Use AI to brainstorm, draft, translate, summarize, and explore ideas, while keeping your own writing, math, reading, problem-solving, and judgment sharp. Verify everything. Protect your privacy. Keep real humans in your life. The kid who builds these five wise moves at 9 or 10 has a real advantage for the next sixty-plus years of an AI-shaped world.`,
          familyAdventure: `Family AI Usage Agreement. As a family, talk through together: what does our family agree about AI use? When is it okay (brainstorming, getting unstuck, learning explanations)? When is it not (homework AI is supposed to do for you, sharing personal info, replacing real conversations)? What do we verify? Write down a simple family AI agreement everyone signs. Adults model it too. Building this together as a family is one of the most important conversations of your decade. It protects everyone from both extremes (worship and fear) and grows healthy AI habits in your home.`,
          creativePrompt: {
            intro: `Write your personal AI Usage Plan — the five wise moves applied to your life.`,
            floor: `Write at least 5 sentences. Name what you'll use AI for and what you won't.`,
            stretch: `Write 8 to 10 sentences. Build a fuller plan.`,
            open: `Write as much as you want. Write your full personal AI USAGE PLAN. List what you WILL use AI for (good amplification uses, brainstorming, summarizing, translating, draft help). List what you WON'T use AI for (replacement uses, homework you should do yourself, real social/emotional decisions, anything that builds your skills). Describe your verification practice for when AI gives you facts (cross-check with trustworthy sources from L03!). Describe your privacy practice (what you won't share with AI). Describe your human-connection commitment (who you'll keep close instead of outsourcing to AI). End with the SKILLS you'll keep building YOURSELF for life, even when AI could do them, because they build you. Make it specific and personal. Keep this. Revisit it as AI and your life evolve.`,
            frames: [
              `What I WILL use AI for: ___.`,
              `What I will NOT use AI for: ___.`,
              `My verification practice will be ___.`,
              `My privacy commitment is ___.`,
              `My human-connection commitment is ___.`,
              `Skills I'll keep building MYSELF for life: ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Practical, sharp work, {name}! You now know the five wise moves of using AI: decide what to use it for, verify everything important, never let it replace skill-building thinking, protect your privacy and human connections, and keep building your own skills. Be the user who thinks clearly, not the tool's tool. Next, we learn how to SPOT AI-generated content in the wild, fake photos, fake videos, AI-written articles. The skill of telling real from AI is more important every year. SPOTTING AI-GENERATED CONTENT. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `wise-ai-user`,
          badgeName: `Wise AI User`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L06;
