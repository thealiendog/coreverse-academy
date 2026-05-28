// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L17 — Your Personal Brand
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart — Career readiness and professional identity;
//            C3 D2.Civ — Identity and public presence
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what a personal brand is, you already have one,
//        shaping it intentionally, digital footprint and authenticity
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-17`,
      title: `Your Personal Brand`,
      duration: 18,
      xpReward: 75,
      badge: `personal-brand-builder`,
      badgeName: `Personal Brand Builder`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. In L04 we talked about how businesses build brands. Today we talk about YOUR brand. Yes, YOU have a personal brand, whether you've thought about it or not. Your personal brand is simply what people think of when they think of YOU. The question isn't WHETHER you have one. The question is whether you're shaping it INTENTIONALLY or just letting it happen by accident. Today we cover what a personal brand is, why you already have one, and how to build one that's authentic and serves you well. Let's go.`,
          headline: `Your Personal Brand`,
          subtitle: `You already have a reputation. The question is whether you shape it on purpose.`,
          visual: `/ue-assets/money/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What a Personal Brand Is`,
          paragraphs: [
            `Your PERSONAL BRAND is what people think and feel when they think of YOU. Just like a company brand (L04), it's the overall impression you leave. Are you known as reliable? Creative? Kind? Funny? Smart? Hardworking? Trustworthy? Or as flaky, mean, lazy, or dishonest? All of these are part of your personal brand. It's built from everything you do: how you treat people, what you say, what you create, how you show up, and whether you keep your word.`,
            `A personal brand isn't about being FAKE or "marketing yourself" in a phony way. The best personal brands are AUTHENTIC, meaning they accurately reflect who you really are. The goal isn't to pretend to be someone you're not. The goal is to be intentional about becoming the kind of person you want to be, and letting people see that real version of you clearly. Your personal brand is really just your REPUTATION (from L16), plus how you choose to present yourself to the world.`,
          ],
          image: `/ue-assets/money/l17-s1-what-is.webp`,
          imageCaption: `Personal brand: what people think and feel about you. Authentic beats fake.`,
          vocab: [
            { word: `personal brand`,
              definition: `What people think and feel when they think of you. Built from everything you do: how you treat people, what you create, and whether you keep your word. The best personal brands are authentic.`,
              audioPrompt: `Your personal brand is what people think and feel when they think of you, {name}. Just like a company brand, it's the overall impression you leave. Are you known as reliable, creative, kind, hardworking, trustworthy? Or as flaky, mean, lazy? All of these are part of your personal brand. It's built from everything you do. How you treat people, what you say, what you create, and whether you keep your word. A personal brand isn't about being fake. The best personal brands are authentic, meaning they reflect who you are.` },
            { word: `values`,
              definition: `The core beliefs and principles that guide your decisions. They define what matters most to you. Your values are the foundation of your personal brand — when your brand reflects your values, it's consistent and sustainable.`,
              audioPrompt: `Values are the core beliefs and principles that guide your decisions, {name}. They define what matters most to you. Honesty. Kindness. Hard work. Creativity. Excellence. These are examples of values. Your values are the foundation of your personal brand. When your brand is built on genuine values, it's consistent and sustainable. When your brand contradicts your values, it feels fake and eventually collapses. The clearest personal brands are built on a few strong values, lived consistently. Knowing your values helps you make better decisions without having to think every time.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `You Already Have One`,
          paragraphs: [
            `Here's the thing most people don't realize: you ALREADY have a personal brand, right now, today. Your teachers have an impression of you. Your friends do. Your teammates do. Your family does. Every person who knows you has formed some idea of who you are, based on how you've shown up. This happens automatically, whether you think about it or not. The only question is whether your brand is something you're SHAPING on purpose, or something that's forming by accident.`,
            `Think about your classmates. Without trying, you probably already know: who's reliable, who's funny, who's kind, who's a good listener, who's dramatic, who's trustworthy, who's not. You formed these impressions naturally from how they act. Other people are forming the same kinds of impressions about YOU. The good news: you have real influence over your brand. Not total control (people will always have their own opinions), but real influence. The way you consistently choose to act shapes how people see you over time. Small consistent choices add up to a reputation.`,
          ],
          image: `/ue-assets/money/l17-s2-already.webp`,
          imageCaption: `You already have a personal brand. The only question: accident or intention?`,
          vocab: [
            { word: `authentic`,
              definition: `Genuine and true to who you really are. Authentic personal brands reflect your actual values and personality, rather than a fake image. Authenticity is more sustainable and more trusted than pretending.`,
              audioPrompt: `Authentic means genuine and true to who you are, {name}. Authentic personal brands reflect your actual values and personality, rather than a fake image. The best personal brands aren't about pretending to be someone you're not. They're about being intentional about becoming the kind of person you want to be, and letting people see that real version clearly. Authenticity is more sustainable than faking, because keeping up a fake image is exhausting and people see through it. Being genuinely yourself, at your best, is the strongest personal brand of all.` },
            { word: `self-awareness`,
              definition: `Knowing your own strengths, weaknesses, values, and how others perceive you. The foundation of an authentic personal brand. Self-aware people notice how their actions land with others and adjust.`,
              audioPrompt: `Self-awareness means knowing your own strengths, weaknesses, values, and how others perceive you, {name}. The foundation of an authentic personal brand. You can't build a genuine brand if you don't know who you are. Self-aware people notice how their actions land with others and adjust. They know their real strengths and notice their blind spots. Developing self-awareness means being honest with yourself, asking for feedback, and paying attention. It's uncomfortable. But it's the starting point for any genuinely authentic personal brand.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Shaping Your Brand Intentionally`,
          paragraphs: [
            `If you want to shape your personal brand on purpose, start by asking: what do I WANT to be known for? Reliability? Creativity? Kindness? Skill at something specific? Once you know what you're aiming for, you build that brand through CONSISTENT ACTION over time. If you want to be known as reliable, keep your promises, every time. If you want to be known as creative, make and share things. If you want to be known as kind, treat people well, consistently. Your brand isn't built by what you SAY about yourself. It's built by what you DO, repeatedly.`,
            `One important truth: you can't be known for EVERYTHING. The strongest personal brands are FOCUSED. A person known specifically as "the reliable one who always comes through" has a clearer, stronger brand than someone who's vaguely "nice." Pick a few things that genuinely matter to you and that reflect who you really are. Then live them consistently. Over time, those qualities become what people associate with you. Ace's note: this isn't about manipulating how people see you. It's about deciding who you want to BE, then becoming that person through your actions. The brand follows naturally from the real you.`,
          ],
          image: `/ue-assets/money/l17-s3-shaping.webp`,
          imageCaption: `Decide what to be known for. Build it through consistent action. Stay focused.`,
          vocab: [
            { word: `consistency`,
              definition: `Doing the same things reliably over time. Personal brands are built through consistency, not occasional grand gestures. Small consistent actions add up to a strong reputation.`,
              audioPrompt: `Consistency means doing the same things reliably over time, {name}. Personal brands are built through consistency, not occasional grand gestures. If you want to be known as reliable, you keep your promises every time, not just sometimes. If you want to be known as kind, you treat people well consistently, not just when it's convenient. Your brand isn't built by what you say about yourself. It's built by what you do, repeatedly, over time. One grand gesture means little. A thousand small reliable acts mean everything.` },
            { word: `niche`,
              definition: `A specific focus area where you become especially known. Personal brands are stronger when focused — being the go-to person for one thing is more powerful than being vaguely good at many things.`,
              audioPrompt: `A niche is a specific focus area where you become especially well-known, {name}. Personal brands are stronger when focused on a niche. Being known as the go-to person for science projects, or the most reliable teammate, or the best writer in your class, is more powerful than being vaguely good at many things. You can be known for more than one thing over time. But start with one. Build deep credibility there first. A clear niche makes your personal brand easier to remember and more valuable to others.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Digital Footprint`,
          paragraphs: [
            `In today's world, a big part of your personal brand is your DIGITAL FOOTPRINT: everything about you that exists online. Social media posts, comments, photos, videos, and anything else connected to your name. Here's something many kids don't fully realize: what goes online often stays online, sometimes FOREVER, even if you delete it. Screenshots exist. Archives exist. Future colleges, employers, and others may look you up someday. Your digital footprint becomes part of how the world sees you.`,
            `This doesn't mean you should be afraid of the internet. It means be THOUGHTFUL. A simple test: before posting anything, ask "would I be okay with my grandparent, my future boss, and my future self all seeing this?" If yes, post away. If you're not sure, wait. Building a positive digital footprint (sharing things you're proud of, treating others well online, being authentic) is far easier than cleaning up a negative one later. Ace's warning: many adults have lost jobs, opportunities, and relationships over things they posted online years earlier, often as teenagers. The internet has a long memory. Be the kind of person online that you'd be proud of offline.`,
          ],
          image: `/ue-assets/money/l17-s4-digital.webp`,
          imageCaption: `Your digital footprint lasts. Post like your grandparent and future boss are watching.`,
          vocab: [
            { word: `digital footprint`,
              definition: `Everything about you that exists online: posts, comments, photos, videos, anything connected to your name. Often permanent, even after deletion. A major part of your modern personal brand.`,
              audioPrompt: `Your digital footprint is everything about you that exists online, {name}. Posts, comments, photos, videos — anything connected to your name. What goes online often stays online, sometimes forever, even if you delete it. Screenshots exist. Archives exist. Future colleges, employers, and others may look you up someday. A simple test before posting anything: would I be okay with my grandparent, my future boss, and my future self all seeing this? Building a positive digital footprint is far easier than cleaning up a negative one later.` },
            { word: `online presence`,
              definition: `The total picture of who you are across digital platforms that you intentionally build. Unlike your digital footprint (which includes everything), your online presence is what you choose to create and share.`,
              audioPrompt: `Your online presence is the total picture of who you are across all digital platforms, {name}. Unlike your digital footprint (which is everything about you online, including things you didn't plan), your online presence is what you intentionally build. A YouTube channel about science. A blog about books you love. A portfolio of art you've made. Your online presence can become one of the strongest parts of your personal brand. Built positively and authentically, it can open doors and opportunities far beyond your immediate community.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four situations involving personal brand. For each one, identify what's happening: BUILDING A STRONG BRAND (consistent authentic action that creates a good reputation), DAMAGING A BRAND (actions that hurt reputation), or DIGITAL FOOTPRINT RISK (online activity that could cause future problems)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `building`,   label: `Building a Strong Brand`,  color: `#34D399`, description: `Consistent, authentic action that creates a positive reputation over time.` },
            { id: `damaging`,   label: `Damaging a Brand`,         color: `#F87171`, description: `Actions that hurt how people see you, often through unreliability or unkindness.` },
            { id: `digital`,    label: `Digital Footprint Risk`,   color: `#FBBF24`, description: `Online activity that could cause problems later, even if it seems harmless now.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Situation #1`,
              clues: [
                { text: `Maya always turns in her group project work on time and helps teammates who are struggling.` },
                { text: `She's done this consistently for two years.` },
                { text: `Now, everyone wants Maya on their team because they know she's reliable.` },
              ],
              correctAnswer: `building`,
              realWorldExample: `Reliability over time builds a strong personal brand.`,
              explanation: `Consistent reliability and helpfulness over years. Now she's known as the reliable one everyone wants. Pure brand building. This is exactly how strong personal brands form: consistent authentic action over time.`,
            },
            {
              id: `case-2`,
              caseTitle: `Situation #2`,
              clues: [
                { text: `David promises to help three different friends with things this week.` },
                { text: `He flakes on all three, giving excuses each time.` },
                { text: `His friends start to feel they can't count on him.` },
              ],
              correctAnswer: `damaging`,
              realWorldExample: `Unreliability quickly damages a personal brand.`,
              explanation: `Breaking promises repeatedly. Becoming known as unreliable. Pure brand damage. Each broken promise is a withdrawal from his reputation account. Soon, "flaky" becomes part of David's personal brand, and people stop counting on him.`,
            },
            {
              id: `case-3`,
              caseTitle: `Situation #3`,
              clues: [
                { text: `A 12-year-old posts an angry, mean comment about a classmate on social media.` },
                { text: `Someone screenshots it before he deletes it 10 minutes later.` },
                { text: `Years later, when he applies to a competitive program, the screenshot resurfaces.` },
              ],
              correctAnswer: `digital`,
              realWorldExample: `Old social media posts resurfacing is increasingly common.`,
              explanation: `Online action that seemed temporary but became permanent. Caused problems years later. Pure digital footprint risk. Deleting didn't help because a screenshot existed. The internet has a long memory. This is exactly why thoughtfulness online matters so much.`,
            },
            {
              id: `case-4`,
              caseTitle: `Situation #4 — The Tricky One`,
              clues: [
                { text: `Sara starts a YouTube channel where she shares helpful science experiments for kids.` },
                { text: `She's authentic, kind in the comments, and posts consistently for two years.` },
                { text: `Her digital footprint is growing rapidly, and it's all positive.` },
              ],
              correctAnswer: `building`,
              realWorldExample: `A positive content presence builds a strong personal brand.`,
              explanation: `Tricky because it's BOTH a digital footprint situation AND brand building. She's creating a large digital footprint (which often gets flagged as "risk"). But here, the footprint is POSITIVE, authentic, and consistent. So this is primarily brand BUILDING done through a digital footprint. Lesson: a digital footprint isn't automatically a risk. A positive, authentic, consistent online presence is one of the BEST ways to build a strong personal brand in the modern world. The footprint is only a risk when it's negative. When it's positive and genuine, it's a powerful asset. Sara is building a great brand.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is a PERSONAL BRAND?`,
              options: [
                `A logo you design for yourself`,
                `What people think and feel when they think of you — built from everything you do`,
                `Only for celebrities`,
                `A type of clothing`,
              ],
              correctIndex: 1,
              explanation: `Your personal brand is the overall impression you leave: reliable, creative, kind, trustworthy, or the opposite. It's built from how you treat people, what you create, and whether you keep your word. Just like a company brand, but for you.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `Do YOU already have a personal brand?`,
              options: [
                `No, only adults do`,
                `Yes — everyone who knows you has already formed an impression of who you are, whether you've thought about it or not`,
                `Only if you're on social media`,
                `Only if you have a job`,
              ],
              correctIndex: 1,
              explanation: `You already have a personal brand right now. Your teachers, friends, teammates, and family have all formed impressions of you. The only question is whether you're shaping your brand on purpose or letting it form by accident.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `What does AUTHENTIC mean for a personal brand?`,
              options: [
                `Pretending to be cool`,
                `Genuine and true to who you really are — not a fake image`,
                `Copying someone famous`,
                `Being perfect`,
              ],
              correctIndex: 1,
              explanation: `Authentic personal brands reflect your actual values and personality. The goal isn't to fake an image (exhausting and people see through it). The goal is to be intentional about becoming who you want to be, and letting people see that real version clearly.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `How do you BUILD a personal brand intentionally?`,
              options: [
                `By talking about yourself a lot`,
                `By deciding what you want to be known for, then doing it through consistent action over time`,
                `By buying expensive things`,
                `By copying others`,
              ],
              correctIndex: 1,
              explanation: `Decide what you want to be known for (reliability, creativity, kindness, a specific skill). Then build it through consistent action. Your brand isn't built by what you SAY about yourself. It's built by what you DO, repeatedly, over time.` },

            { id: `l17-q5`, format: `true-false`,
              question: `True or false: The strongest personal brands are FOCUSED — known for a few specific things rather than vaguely good at everything.`,
              correctAnswer: true,
              explanation: `True. A person known specifically as "the reliable one who always comes through" has a stronger brand than someone vaguely "nice." You can't be known for everything. Pick a few things that genuinely matter to you and live them consistently.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `Why does CONSISTENCY matter for a personal brand?`,
              options: [
                `It doesn't`,
                `Because brands are built through consistent action over time, not occasional grand gestures — small reliable acts add up`,
                `Only big moments matter`,
                `Consistency is boring`,
              ],
              correctIndex: 1,
              explanation: `Personal brands form through consistency. If you want to be known as reliable, keep promises EVERY time, not sometimes. One grand gesture means little. A thousand small reliable acts mean everything. Consistency is how reputation is built.` },

            { id: `l17-q7`, format: `multiple-choice`,
              question: `What's a DIGITAL FOOTPRINT?`,
              options: [
                `A shoe size online`,
                `Everything about you that exists online — posts, comments, photos — often permanent even after deletion`,
                `Your typing speed`,
                `A type of password`,
              ],
              correctIndex: 1,
              explanation: `Your digital footprint is all your online activity connected to your name. What goes online often stays online forever, even after deletion (screenshots, archives). Future colleges and employers may look you up. It's a major part of your modern personal brand.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `What's a good TEST before posting something online?`,
              options: [
                `Will it get lots of likes?`,
                `Would I be okay with my grandparent, my future boss, and my future self all seeing this?`,
                `Is it funny right now?`,
                `Will it annoy someone?`,
              ],
              correctIndex: 1,
              explanation: `Before posting, ask if you'd be okay with your grandparent, future boss, and future self all seeing it. If yes, post. If unsure, wait. Building a positive digital footprint is far easier than cleaning up a negative one later. The internet has a long memory.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What do you think your CURRENT personal brand is? What do your friends, teachers, and family probably think of when they think of you?` },
            { id: `r2`, text: `What do you WANT to be known for? Pick 2-3 qualities that genuinely matter to you and reflect the real you.` },
            { id: `r3`, text: `For ONE of those qualities, what's a consistent action you could take to build that part of your brand?` },
            { id: `r4`, text: `Think about your digital footprint (or your future one). What's ONE rule you'd want to follow about what you post online?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Your personal brand shapes the opportunities that come your way, from friendships to college admissions to jobs to partnerships. In a connected world, your reputation (online and offline) travels further and faster than ever. The good news: building a strong personal brand isn't about being fake or famous. It's about deciding who you want to be, then becoming that person through consistent, authentic action. Start now. The personal brand you build in your tens and teens becomes the foundation for everything that follows. Ace's note: be the same good person whether anyone's watching or not. That consistency IS the strongest brand of all.`,
          familyAdventure: `Family Brand Reflection. As a family, each person shares (kindly) what they think each OTHER family member is "known for" in a good way. ("Mom's known for always staying calm." "Little brother's known for being super funny.") Then each person shares what THEY'D like to be known for. Notice the difference between how others see us and how we want to be seen. This is the heart of personal branding.`,
          creativePrompt: {
            intro: `Imagine writing your own "personal brand statement" — a short description of who you are and what you want to be known for.`,
            floor: `Write at least 5 sentences. Cover what you want to be known for, why it matters to you, and one way you'll build it through action.`,
            stretch: `Write 8 to 10 sentences. Include the qualities you want to be known for, how they reflect the real you, the consistent actions you'll take, and how you'll handle your digital footprint.`,
            open: `Write as much as you want. Build a complete personal brand statement. Cover who you authentically are, what you want to be known for, why those qualities matter, the consistent actions you'll take to build them, how you'll show up online and offline, and the reputation you hope to have by adulthood. Make it genuine, not fake.`,
            frames: [
              `I want to be known as someone who ___.`,
              `This reflects the real me because ___.`,
              `I'll build this brand by consistently ___.`,
              `Online, I'll make sure to ___.`,
              `By the time I'm an adult, I hope people say I'm ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what a personal brand is, why you already have one, how to shape it intentionally and authentically, and why your digital footprint matters. Next lesson: a goal many people dream about but few understand clearly. FINANCIAL INDEPENDENCE. What it really means and how it works. — Ace.`,
          badge: `personal-brand-builder`,
          badgeName: `Personal Brand Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L17.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L17 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
