// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L14 — Money, Tech & Choices
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : age-appropriate financial literacy + digital money awareness.
//            Needs/wants distinction, saving, pause-before-buying, awareness
//            of digital money traps (in-app purchases, subscriptions, scams,
//            algorithm-driven shopping), compound thinking. NO anxiety, NO
//            "get rich" framing, NO making kids worry about adult things.
// CALIBRATED: UE spec v1.1 — PROTECTIVE FRAMING
// GAME FORMAT: sequence (5 moves of healthy money habits)
// SCOPE: money is a TOOL not a goal, needs vs wants, save before spend,
//        pause before buying, digital money traps (subscriptions, in-app,
//        scams), compound thinking; KEPT AGE-APPROPRIATE
// VOICE: Byte = practical, calm, treats money as a tool to use wisely
//        without anxiety; protects kids from money fear AND consumerism
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-14`,
      title: `Money, Tech & Choices`,
      duration: 18,
      xpReward: 75,
      badge: `money-wise`,
      badgeName: `Money Wise`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we talk about MONEY honestly and age-appropriately. You don't need to worry about adult money stuff yet, that's your parents' job. What you DO benefit from is starting to build smart money habits early. Most adults didn't learn this when they were your age and wish they had. We'll also look at how TECH meets money in your world, in-app purchases, subscriptions, ads designed to make you want things, online scams. No anxiety, no get-rich pressure, just real wisdom. Foxes know that a smart relationship with food keeps them strong; a smart relationship with money does the same. Let's go.`,
          headline: `Money, Tech & Choices`,
          subtitle: `Age-appropriate money wisdom. Calm, honest, no anxiety, no get-rich talk`,
          visual: `/ue-assets/fs/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Money Is a Tool, Not a Goal`,
          paragraphs: [
            `Here's a calm, mature truth about money that most kids and many adults get wrong. MONEY is a TOOL, not a GOAL. Like a hammer, money helps you do certain things, buy food and shelter, take care of people you love, learn things, share with others, build a life you care about. The hammer isn't the point. The house you build with it is. Same with money. Money is meant to support a GOOD LIFE, not to be the point of life. Kids who grow up thinking "more money = better life" miss this and become adults who chase money endlessly without ever feeling satisfied. Research is clear, beyond enough to meet basic needs, MORE money has a much smaller effect on happiness than most people think.`,
            `Here's the other side. Some kids grow up SCARED of money, refuse to talk about it, feel guilty about wanting things, or believe money is "bad." That's the other extreme, also unhealthy. The middle path is to treat money as a NEUTRAL TOOL. It's neither evil nor magic. It's a thing you'll use throughout your life, and learning to use it well makes life calmer and more capable. The fox-style relationship with money: calm, clear-eyed, neither worshipful nor fearful. Money serves a good life. It's not the boss.`,
          ],
          image: `/ue-assets/fs/l14-s1-tool.webp`,
          imageCaption: `Money is a TOOL. Not a goal. Not evil. Not magic. Just a tool serving a good life.`,
          vocab: [
            { word: `money as tool`,
              definition: `The mature understanding that money is a TOOL serving a good life, not a goal in itself. Like a hammer is for building a house. Neither evil nor magic. Beyond meeting basic needs, more money has a much smaller effect on happiness than most people think. Calm, clear-eyed relationship with money.`,
              audioPrompt: `Money as a tool is the mature understanding that money is for supporting a good life, not the point of life, {name}. Like a hammer, money helps you do certain things, buy food and shelter, take care of people you love, learn things, share. The hammer isn't the point. The house is. Same with money. Research is clear, beyond enough to meet basic needs, more money has a much smaller effect on happiness than most people think. Some kids worship money. Some fear it. Neither is healthy.` },
            { word: `contentment`,
              definition: `Being genuinely satisfied with what you have rather than constantly wanting more. Research shows contentment is one of the biggest predictors of both life satisfaction AND financial health. Kids who learn to be content save more, spend less on comparison-driven wants, and feel genuinely happier. Social media constantly invites comparison; contentment is the antidote.`,
              audioPrompt: `Contentment is being genuinely satisfied with what you have rather than constantly wanting more, {name}. Researchers studying happiness found that comparing your stuff to others is one of the biggest sources of unhappiness and overspending. Social media constantly invites comparison, which is expensive. Kids who learn early to be content become both happier and wealthier over time. They save instead of spending on comparison. They appreciate what's there. They don't chase satisfaction through buying. Contentment is the antidote to the comparison trap, and it's free.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Needs vs. Wants (And the Pause)`,
          paragraphs: [
            `Here's a core money skill that protects you for life. KNOW THE DIFFERENCE between NEEDS and WANTS. Needs are things you genuinely require, food, shelter, safety, basic clothing, education, health. Wants are things that would be nice but you can live well without, the cool new gadget, fancy clothes, special toys, the upgraded version. Both are okay! Wants aren't bad. The skill is just NAMING which one something is, instead of confusing them. Most marketing tries to convince you that WANTS are NEEDS. "You NEED this!" the ad says. You don't. The kid who sees through this stays calmer and smarter about money.`,
            `Now the practical move that builds wealth and freedom over time. PAUSE BEFORE BUYING wants, especially impulse ones. Researchers studying spending have found that people who PAUSE (even 24 hours) before non-essential purchases buy far less impulse stuff, save more money, and feel better about what they DO buy. The brain's reward circuit lights up wanting things; the pause lets it cool down. Many of the things you "really wanted" turn out to be things you've totally forgotten about 24 hours later. The fox-pause: when you want something, say "I'll think about it for a day." Then notice if you still want it. Most impulse buys quietly disappear. That's your money saved for things that actually matter.`,
          ],
          image: `/ue-assets/fs/l14-s2-needs-wants.webp`,
          imageCaption: `Needs vs. wants. Both okay, just name them. Pause before buying wants. Most impulse cravings fade.`,
          vocab: [
            { word: `needs vs. wants and the pause`,
              definition: `Needs are what you genuinely require (food, shelter, safety, education). Wants are nice but optional (gadgets, fancy versions, extras). Both okay; just NAME them. Then PAUSE 24 hours before buying wants. Research shows pausing dramatically reduces impulse spending. Most "really wanted" things quietly disappear from desire.`,
              audioPrompt: `Needs vs wants and the pause is a core money skill, {name}. Needs are what you genuinely require, food, shelter, safety, education. Wants are nice but optional, gadgets, fancy versions, extras. Both are okay. The skill is naming which one something is. Most marketing tries to convince you wants are needs. The kid who sees through this stays calmer. Then the pause, when you want something, say I'll think about it for a day. Most impulse buys disappear when given 24 hours. That's your money saved for things that matter.` },
            { word: `the pause`,
              definition: `The practice of waiting 24 hours before non-essential purchases. Research shows people who pause buy far less impulse stuff and feel better about what they DO buy. The brain's reward circuit lights up wanting things; the pause lets it cool down. Most impulse buys quietly disappear when given a day. One of the simplest and most effective money habits.`,
              audioPrompt: `The pause is the practice of waiting 24 hours before buying non-essential things, {name}. When you want something, say I'll think about it for a day. Your brain's reward circuit lights up wanting things. The pause lets it cool down. Researchers studying spending found that people who pause buy far less impulse stuff and feel better about what they do buy. Many things you really wanted turn out to be forgotten 24 hours later. That's your money saved for things that actually matter. Simple. Effective. Free.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Digital Money Traps (You Should Know)`,
          paragraphs: [
            `Tech and money cross paths in ways that affect kids your age every day. Here are the most common DIGITAL MONEY TRAPS to watch out for. IN-APP PURCHASES, games designed to make spending money feel small ("just $2.99 for this skin!") but they add up FAST. Many kids spend hundreds without realizing it. Some games are deliberately designed to get kids spending more, called "manipulative monetization." Always ask a trusted adult before in-app purchases. SUBSCRIPTIONS that auto-renew, you sign up for one month and forget; they keep charging for months or years. Companies count on you forgetting. ALWAYS check what you're actually subscribed to.`,
            `ALGORITHM-DRIVEN SHOPPING, social media and apps show you ads for things you don't need but their algorithms know you'll want (L04!). The more you scroll, the more you spend on stuff you wouldn't have wanted without the ads. SCAMS aimed at kids, "free" offers that turn out to cost money, fake giveaways, "claim your prize!" messages, sketchy strangers offering money. If something seems too good to be true, it is. Tell a trusted adult. Be SKEPTICAL OF FREE, often "free" means they're selling your data or your attention. None of this is to scare you, it's to PREPARE you. Foxes know where the traps are. You can too.`,
          ],
          image: `/ue-assets/fs/l14-s3-traps.webp`,
          imageCaption: `In-app purchases, auto-renew subscriptions, algorithm shopping, kid-targeted scams. Watch for them.`,
          vocab: [
            { word: `digital money traps`,
              definition: `Common ways digital tech tries to extract money from kids. IN-APP PURCHASES (small amounts add up fast, "manipulative monetization"). AUTO-RENEWING subscriptions (charged for months you forgot). ALGORITHM-DRIVEN ads (sell you stuff you don't need). KID-TARGETED scams. Watch for all of them; ask trusted adults before spending.`,
              audioPrompt: `Digital money traps are common ways tech tries to extract money from kids, {name}. In-app purchases, games designed to make spending money feel small. Just two ninety-nine for this skin, but they add up fast. Kids spend hundreds without realizing it. Subscriptions that auto-renew, you sign up for one month and forget, they keep charging. Algorithm-driven shopping, apps show you ads for things you don't need but they know you'll want. Scams aimed at kids, free offers that cost money, fake giveaways, sketchy strangers.` },
            { word: `skepticism about free`,
              definition: `The practice of questioning "free" offers, because often "free" means they're selling your data, capturing your attention for advertisers, or setting you up for a later charge. Free apps sell attention. Free trials auto-renew. If it seems too good to be true, it usually is. Real foxes know: when something's free, check what you're REALLY paying with.`,
              audioPrompt: `Skepticism about free is an important digital money habit, {name}. When something is advertised as free, ask what you're really paying with. Often free means they're selling your data, capturing your attention for advertisers, or setting you up for a later charge. Free apps sell your attention. Free games hook you on in-app purchases. Free trials auto-renew into paid subscriptions. If something seems too good to be true, it usually is. Real foxes know when something's free, check what you're actually paying.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Compound Thinking (The Most Important Money Idea)`,
          paragraphs: [
            `Here's the most powerful money idea, and it's the one almost no adults learn early enough. SMALL MONEY HABITS COMPOUND OVER TIME. Save a little regularly, and it grows. Spend a little carelessly on small things daily, and it adds up to a LOT over years. A $5 daily snack adds up to about $1,800 a year. A small monthly subscription you forgot to cancel costs hundreds over time. The fox-truth: tiny money habits done consistently SHAPE YOUR WHOLE FINANCIAL LIFE. This is great news. You don't need to make a lot. You need to develop GOOD HABITS with whatever you have. Save a portion of any money you get (allowance, gifts, jobs as you grow up). Spend less than you have. Notice subscriptions and small recurring charges. Avoid impulse buys (the pause from section 2!).`,
            `One more move that compounds positively, learn to BE CONTENT with what you have. Researchers studying happiness have found that comparing your stuff to others' stuff (which social media constantly invites) is one of the biggest sources of unhappiness and overspending. Kids who learn early to ENJOY what they have, rather than constantly wanting more, become both happier and wealthier over time. They save instead of spending on comparison. They appreciate what's there. They don't chase satisfaction through buying. Byte's first teaching: money is a tool, not a goal. Know the difference between needs and wants. Pause before buying. Watch digital money traps. Build small consistent habits, they compound. Be content with what you have. Most adults wish they'd learned this at 9 or 10. You are. Calm, smart, careful with money. Foxes hunt patiently. So can wise money-spenders.`,
          ],
          image: `/ue-assets/fs/l14-s4-compound.webp`,
          imageCaption: `Small habits compound over years. Save a portion, spend less than you have, be content with what you have.`,
          vocab: [
            { word: `compound thinking`,
              definition: `The most powerful money idea. Small money habits, daily savings or daily small wastes, COMPOUND over years. $5 daily snack = ~$1,800/year. You don't need to make a lot; you need good habits with whatever you have. Save a portion, spend less than you have, avoid impulse buys, be content with what you have.`,
              audioPrompt: `Compound thinking is the most powerful money idea, {name}. Small money habits compound over time. Save a little regularly, and it grows. Spend a little carelessly on small things daily, and it adds up to a lot over years. A 5 dollar daily snack adds up to about 1,800 dollars a year. A small monthly subscription you forgot to cancel costs hundreds over time. Tiny money habits done consistently shape your whole financial life. You don't need to make a lot. You need good habits with whatever you have.` },
            { word: `save a portion first`,
              definition: `The foundational saving habit. When you get any money (allowance, gift, earnings), save a portion BEFORE spending — not all, just a piece. This builds the saving habit while amounts are small and easy. The habit of saving-before-spending, built now, is one of the most valuable financial habits for your whole life.`,
              audioPrompt: `Save a portion first is the foundational saving habit, {name}. When you get any money, allowance, gift, earnings, save a portion before spending it. Not all of it. Just a piece. This builds the saving habit while the amounts are small and easy. The habit of saving before spending, practiced consistently now, is one of the most valuable financial habits for your whole life. Adults who developed this early have dramatically better financial outcomes. You don't need to start with a lot. Start with any amount and build the habit.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the 5 moves of healthy money habits in order, {name}. From FOUNDATION understanding to ONGOING habit. Use the arrows to arrange them.`,
          items: [
            { id: `step-needs-wants`,  label: `KNOW THE DIFFERENCE (NEEDS vs. WANTS) — needs are required (food, shelter, safety, education); wants are nice but optional (gadgets, extras); name what's what`,             position: 1 },
            { id: `step-save`,         label: `SAVE A PORTION FIRST. When you get money (allowance, gift), save a portion BEFORE spending. Not all of it, just a piece. This builds the saving habit early`,                  position: 2 },
            { id: `step-pause`,        label: `PAUSE BEFORE BUYING WANTS. 24-hour rule on impulse buys. Most "really wanted" things quietly disappear from desire when given a day. Protects from regret`,                   position: 3 },
            { id: `step-digital`,      label: `UNDERSTAND DIGITAL TRAPS. In-app purchases ("manipulative monetization"), auto-renewing subscriptions, algorithm-driven shopping ads, kid scams. Ask trusted adults`,        position: 4 },
            { id: `step-compound`,     label: `THINK COMPOUND. Small daily money habits SHAPE YOUR LIFE over years. $5 daily equals $1,800/year. Be content with what you have. Tiny consistency beats big lucky moments`,    position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of healthy money habits: know the difference, save a portion, pause before buying, understand digital traps, and think compound. Use these for life. Most adults didn't learn this until they were 30. You're building it at 9 or 10. Calm, smart, and wise with money.`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What IS money, in a mature way of seeing it?`,
              options: [
                `A goal in life`,
                `A TOOL serving a good life, like a hammer is for building a house. Neither evil nor magic. Beyond meeting needs, more money has a much smaller effect on happiness than most think`,
                `Evil`,
                `Magic`,
              ],
              correctIndex: 1,
              explanation: `Money is a tool serving a good life, not the point of life. Like a hammer is for building a house. Neither evil nor magic. Researchers found beyond enough to meet basic needs, more money has a much smaller effect on happiness than most people think. Some kids worship money, some fear it. The middle path treats it as a neutral useful tool.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between needs and wants?`,
              options: [
                `Same thing`,
                `NEEDS are genuinely required (food, shelter, safety, education). WANTS are nice but optional (gadgets, fancy versions, extras). Both okay, just NAME which is which`,
                `Wants are bad`,
                `Needs are bad`,
              ],
              correctIndex: 1,
              explanation: `Needs are what you genuinely require, food, shelter, safety, basic clothing, education, health. Wants are things that'd be nice but you can live well without, gadgets, fancy versions, extras. Both are okay. The skill is naming which one something is. Most marketing tries to convince you wants are needs.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `What is the PAUSE before buying?`,
              options: [
                `Don't buy ever`,
                `Wait 24 HOURS before non-essential purchases. Most impulse buys quietly disappear from desire. Research shows people who pause buy far less impulse stuff and save more`,
                `Buy faster`,
                `Random delay`,
              ],
              correctIndex: 1,
              explanation: `The pause is waiting 24 hours before non-essential purchases. The brain's reward circuit lights up wanting things; the pause lets it cool down. Many things you "really wanted" turn out to be totally forgotten 24 hours later. Researchers found people who pause buy far less impulse stuff and feel better about what they DO buy.` },

            { id: `l14-q4`, format: `multiple-choice`,
              question: `What is a common DIGITAL MONEY TRAP?`,
              options: [
                `Saving money`,
                `IN-APP PURCHASES (small amounts add up FAST, sometimes "manipulative monetization"), AUTO-RENEWING subscriptions (charged for months you forgot), kid-targeted scams`,
                `Books`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Common digital money traps include in-app purchases (small amounts add up fast, "manipulative monetization"), auto-renewing subscriptions (charged for months after you forgot), algorithm-driven shopping ads (selling you stuff you don't need), kid-targeted scams (fake giveaways, "claim your prize"). Watch for all. Ask trusted adults before spending.` },

            { id: `l14-q5`, format: `true-false`,
              question: `True or false: A $5 daily snack habit adds up to roughly $1,800 a year.`,
              correctAnswer: true,
              explanation: `True. Small daily money habits compound over time. $5 a day x 365 days ≈ $1,800/year. A small monthly subscription you forgot adds up to hundreds over years. This works both directions, small wastes drain a lot over time, AND small savings build a lot over time. Tiny consistency shapes your whole financial life.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `What is COMPOUND THINKING about money?`,
              options: [
                `Cramming money`,
                `Small daily money habits SHAPE YOUR LIFE over years — save a portion, spend less than you have, avoid impulse buys; you don't need to make a lot, you need GOOD HABITS`,
                `Random luck`,
                `Quick wins`,
              ],
              correctIndex: 1,
              explanation: `Compound thinking is the most powerful money idea. Small money habits compound over time. Save a little regularly, and it grows. Spend a little carelessly daily, and it adds up to a lot over years. You don't need to make a lot; you need to develop good habits with whatever you have. Tiny consistency beats big lucky moments.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `What does CONTENTMENT do for money over time?`,
              options: [
                `Makes you poor`,
                `Reduces SPENDING on comparison-driven wants, increases SAVING, and increases HAPPINESS. Researchers found contentment is one of the biggest predictors of life satisfaction AND wealth over time`,
                `Nothing`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Contentment is enjoying what you have rather than constantly wanting more. Researchers studying happiness found comparing your stuff to others' is one of the biggest sources of unhappiness and overspending. Kids who learn early to be content become both happier and wealthier over time. They save instead of spending on comparison.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about money?`,
              options: [
                `Get rich fast`,
                `Money is a TOOL not a goal. Know needs vs. wants. Pause before buying. Watch digital traps. Build small consistent habits, they compound. Be content with what you have`,
                `Money is evil`,
                `Don't care`,
              ],
              correctIndex: 1,
              explanation: `Money is a tool, not a goal. Know the difference between needs and wants. Pause before buying. Watch digital money traps. Build small consistent habits, they compound. Be content with what you have. Most adults wish they'd learned this at 9 or 10. You are. Calm, smart, careful with money.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Take a calm breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Pick a recent thing you bought (or really wanted to buy). Was it a need or a want? Be honest. Did you pause first or buy impulsively?` },
            { id: `r2`, text: `Have you (or has anyone in your family) been caught by a digital money trap (in-app purchases, forgotten subscription, kid scam)? What happened?` },
            { id: `r3`, text: `When you get money (allowance, gift), what's your current habit? What might a healthier habit look like (saving a portion first)?` },
            { id: `r4`, text: `Honestly, do you feel CONTENT with what you have? Or do you mostly want more? Where might that come from (social media, ads, comparison)?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Financial literacy research is one of the saddest areas in modern social science, sad because the evidence is overwhelming and yet schools rarely teach it. People who develop basic money skills early, needs vs wants, save before spending, avoid impulse buys, watch subscriptions and digital traps, build compound habits, have dramatically better financial outcomes throughout life. People who don't often struggle financially even when they earn good money, because the habits aren't there. Researchers have found that many adults wish someone had explained these simple ideas when they were 9 or 10. Byte's note: you're getting this early. Not to make you worried about money (you don't need to worry, that's your parents' job for now). But to start building the calm, smart, content relationship with money that will serve you the rest of your life. Foxes hunt patiently and live within their means. They don't chase shiny things that won't feed them. You can be one of those wise foxes. Calm, clear-eyed, thoughtful, content. Money serves a good life. It's not the boss.`,
          familyAdventure: `Family Money Talk. As a family, talk gently and openly about money this week. Adults share, age-appropriately, how they think about needs vs. wants, saving, the importance of being content. Kids share what they've learned. Look at any current family subscriptions together. Are they being used? Any that could be canceled? Talk about the difference between buying things you actually need/love and impulse buying things you'll forget about. Adults model openness and calm. Building a family that talks calmly about money instead of avoiding the topic, OR being anxious about it, is one of the most valuable things you can do together. Many families find their first money conversation changes their whole approach.`,
          creativePrompt: {
            intro: `Write about your relationship with money and the calm wise money person you want to grow into.`,
            floor: `Write at least 5 sentences. Describe your current money habits and one shift you want to make.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on calm money wisdom.`,
            open: `Write as much as you want. Write a full honest piece about your relationship with money. Describe what your current habits look like (do you save? spend impulsively? understand needs vs wants?). Describe what you've learned about money as a TOOL, not a goal. Describe what calm, wise money wisdom means to you, NOT chasing get-rich dreams, NOT being scared, just calm and clear-eyed and thoughtful. List specific habits you want to build (save a portion of money you get, pause 24 hours before non-essential buys, notice digital traps, be content with what you have). Acknowledge that you don't need to figure out adult money stuff yet, but you ARE building the foundation. End with a calm commitment to the kind of money-relationship you want for life. Make it grounded, hopeful, and unhurried.`,
            frames: [
              `My current money habits: ___.`,
              `What I've learned about money as a TOOL: ___.`,
              `Money habits I want to build: ___.`,
              `One digital trap I want to watch for: ___.`,
              `Being content with what I have looks like: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Calm, wise work, {name}! You now have age-appropriate money wisdom most adults wish they'd learned at your age. Money is a tool. Needs vs. wants. Pause before buying. Digital money traps. Small habits compound. Contentment beats consumerism. You don't need to worry about adult money stuff. You DO get to build calm smart habits now. Next, we tackle one of life's most important skills, learning to FAIL well and ITERATE. Failure isn't the opposite of success; it's part of how success actually happens. FAILURE & ITERATION. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `money-wise`,
          badgeName: `Money Wise`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L14;
