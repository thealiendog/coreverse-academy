// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L08 — Screen Time & Your Brain
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real research on screens (Anna Lembke's "Dopamine Nation",
//            Jonathan Haidt's research on kids and phones, attention research).
//            Honest, non-moralistic, age-appropriate.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (useful screen use / sometimes screen use /
//            designed-to-be-addictive screen use). Trick case = "educational"
//            screen content that's actually engineered for engagement.
// SCOPE: not all screens are the same, what designed-addictive features do
//        to your brain, the cost of attention/sleep/mood, how to use
//        screens well (not avoiding them, using them with awareness)
// VOICE: Terra = honest, not moralistic, treats kid as smart enough to
//        understand the actual science
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-08`,
      title: `Screen Time & Your Brain`,
      duration: 18,
      xpReward: 75,
      badge: `screen-wise-kid`,
      badgeName: `Screen-Wise Kid`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we look honestly at something that's part of your daily life: SCREENS. Phones, tablets, gaming, social media, videos, all of it. I'm not going to tell you screens are bad and you should avoid them. I'm going to tell you the TRUTH about what they actually do to your brain, especially the kinds DESIGNED to keep you watching. The kid who understands what's happening can use screens well, instead of being used by them. This isn't about shame or rules, it's about being SMART. Take a clear breath, and let's begin.`,
          headline: `Screen Time & Your Brain`,
          subtitle: `The honest science. How to use screens instead of being used by them`,
          visual: `/ue-assets/lw/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Not All Screens Are the Same`,
          paragraphs: [
            `First, an honest truth: not all screen time is the same. There's a HUGE difference between using a screen to learn something you're curious about (a documentary, a tutorial, a video about something you love), connecting with someone you love (a video call with grandparents who live far away), or creating something (digital art, writing, making music). These uses of screens can be enriching, useful, and even joyful. Then there are screens for ENTERTAINMENT (shows, movies, games). These can be fine in moderation, fun, relaxing, sometimes even bonding when watched together.`,
            `And then there's a third category that's very different: screens specifically ENGINEERED to keep you watching/scrolling/playing as long as possible. Social media feeds, short-form video apps (TikTok-style content), some games with constant rewards, things designed by huge teams of engineers and psychologists whose entire job is making you stay longer than you meant to. These aren't accidents, they're intentional design. Researcher Anna LEMBKE wrote about this in a book called "Dopamine Nation." She found that these designed products affect kids' and adults' brains in measurable ways, especially their ability to focus, sleep, and feel okay without constant stimulation. Knowing the difference between these three categories is the foundation of using screens wisely.`,
          ],
          image: `/ue-assets/lw/l08-s1-not-same.webp`,
          imageCaption: `Three categories. Useful (learning/connecting/creating), sometimes (entertainment), designed-addictive (engineered to hook).`,
          vocab: [
            { word: `designed-to-be-addictive`,
              definition: `Screens and apps specifically engineered by teams of engineers and psychologists to keep you watching, scrolling, or playing longer than you meant to. Social media feeds, short-form videos, some games. Not accidental, intentional design that exploits how brains work.`,
              audioPrompt: `Designed-to-be-addictive describes screens and apps specifically engineered to keep you watching, scrolling, or playing longer than you meant to, {name}. Social media feeds. Short-form video apps. Some games with constant rewards. These are designed by huge teams of engineers and psychologists whose entire job is making you stay longer than you meant to. Not accidents. Intentional design. Researcher Anna Lembke wrote about this in a book called Dopamine Nation. She found these designed products affect brains in measurable ways, especially focus, sleep, and feeling okay without constant stimulation.` },
            { word: `screen categories`,
              definition: `The three types of screen use that affect your brain differently. Useful (learning, connecting, creating): adds real value. Sometimes (entertainment): fine in moderation. Designed-addictive (engineered to hook): costs attention, sleep, and mood. Knowing which category you're in before picking up a device is the foundation of using screens wisely.`,
              audioPrompt: `Screen categories are the three types of screen use that affect your brain differently, {name}. Useful screens, learning, connecting, creating, add real value to life. Sometimes screens, entertainment like shows and movies, are fine in moderation, joyful and relaxing. Designed-addictive screens, social media feeds, short-form video apps, some games, are engineered to keep your brain hooked longer than you meant to stay. Knowing which category you're in before you pick up a device is the foundation of using screens wisely.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Designed-Addictive Screens Do to Your Brain`,
          paragraphs: [
            `Here's the real science. Your brain has a chemical called DOPAMINE that helps you feel motivated and rewarded. Normally, dopamine releases when you achieve something, learn something, connect with people, or experience real life rewards. Designed-addictive apps HIJACK this system by giving your brain tiny dopamine hits constantly, every new post, every notification, every cute video, every game reward. Researchers have found that this is similar to how slot machines are designed, unpredictable rewards keep brains hooked the longest. Your brain gets used to constant stimulation, and regular life starts to feel boring by comparison.`,
            `Over time, several real things happen. Your ATTENTION SPAN gets shorter, you have a harder time focusing on slower things like books, conversations, or learning. Your SLEEP suffers (L02!), screens before bed and the blue light disrupt melatonin. Your MOOD can drop, social comparison on social media has been linked to higher rates of anxiety and sadness in kids and teens. Your CAPACITY FOR BOREDOM disappears, you reach for the screen the moment things get quiet, missing the creativity and self-knowledge that boredom actually grows. Researcher Jonathan HAIDT wrote about all this in research showing measurable declines in mental health in kids and teens since smartphones became universal. This isn't moralizing, it's data. The companies making these products often don't let their own kids use them, which tells you something.`,
          ],
          image: `/ue-assets/lw/l08-s2-what-they-do.webp`,
          imageCaption: `Hijacked dopamine, shorter attention, worse sleep, mood drops, no capacity for boredom.`,
          vocab: [
            { word: `dopamine hijacking`,
              definition: `When designed-addictive apps give your brain tiny rewards constantly, unpredictably, like a slot machine. Trains the brain to need constant stimulation. Over time, regular life starts to feel boring, attention shrinks, sleep and mood suffer.`,
              audioPrompt: `Dopamine hijacking is when designed-addictive apps give your brain tiny rewards constantly and unpredictably, {name}. Every new post, every notification, every cute video, every game reward. This is similar to how slot machines are designed. Unpredictable rewards keep brains hooked longest. Your brain gets used to constant stimulation, and regular life starts to feel boring by comparison. Over time, attention shrinks, you have a harder time focusing on slower things. Sleep suffers from screens before bed. Mood can drop from social comparison. Capacity for boredom disappears.` },
            { word: `attention span`,
              definition: `Your brain's ability to stay focused on one thing over time. Designed-addictive screens consistently shrink it by training the brain to expect constant rapid stimulation. Measurable declines in attention have been linked to widespread smartphone use in kids. Practicing slower activities (reading, boredom, conversation) helps rebuild it.`,
              audioPrompt: `Attention span is your brain's ability to stay focused on one thing over time, {name}. Designed-addictive screens consistently shrink it. When your brain gets used to constant rapid rewards, brief videos, constant notifications, new content every few seconds, it gets harder to focus on slower things. Books. Conversations. Learning. Deep work. Researchers studying kids and teens have found measurable declines in attention in the years since smartphones became universal. The good news: practicing slower activities, reading, boredom, conversation, helps rebuild it.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Using Screens Instead of Being Used by Them`,
          paragraphs: [
            `Here's the empowering part: knowing how this works lets you USE screens instead of being USED BY them. Real practices that protect your brain. First, BE CHOOSY ABOUT WHAT YOU USE. Some screen time is genuinely valuable (learning, connecting, creating, watching things you love), and some is just designed to hook you. Be honest with yourself about which is which. Second, USE SCREENS ON PURPOSE, not by default. Decide what you're going to do BEFORE you pick up the device, then do that and put it down. The mistake is opening a device without a plan and getting sucked into the algorithm's choices instead of your own.`,
            `Third, PROTECT YOUR SLEEP (L02). No screens in bed. Screens out of the bedroom is even better. The hour before sleep especially matters, melatonin and blue light are real. Fourth, PRACTICE BOREDOM. When you feel the urge to grab a device just because things are quiet, sit with it for a minute. Boredom is where creativity, self-reflection, and ideas live. Most adults wish they had this capacity. Build it now while it's easier. Fifth, BE AWARE OF SOCIAL COMPARISON. What you see on social media is highlights, performances, edited moments. Comparing your behind-the-scenes life to other people's highlight reels is a guaranteed way to feel worse. If you notice an app consistently making you feel bad about yourself, that's data, not personal failure.`,
          ],
          image: `/ue-assets/lw/l08-s3-using-not-used.webp`,
          imageCaption: `Use on purpose. Protect sleep. Practice boredom. Know social media is highlights, not real life.`,
          vocab: [
            { word: `intentional screen use`,
              definition: `Using screens on purpose for specific reasons (learning, connecting, creating, intentional entertainment) instead of by default. Decide BEFORE you pick up the device what you're doing, then do that and put it down. The opposite of getting sucked in by algorithms.`,
              audioPrompt: `Intentional screen use is using screens on purpose for specific reasons, {name}. Learning, connecting, creating, intentional entertainment. Instead of by default. Decide before you pick up the device what you're doing. Then do that and put it down. The mistake most people make is opening a device without a plan and getting sucked into the algorithm's choices instead of their own. The minute you get clear about what you're actually using the screen FOR, you stop being used by it. This single shift transforms how screens fit into life.` },
            { word: `social comparison`,
              definition: `Measuring your own life against what you see other people doing or how they look. On social media, especially distorting — you're comparing your behind-the-scenes ordinary life to other people's edited highlights. Linked to higher rates of anxiety and lower self-worth in kids. If an app consistently makes you feel bad, that's data.`,
              audioPrompt: `Social comparison is measuring your own life against what you see other people doing or how they look, {name}. On social media, this is especially distorting because you're comparing your behind-the-scenes ordinary life to other people's edited highlights. Researchers studying social media and kids have found that social comparison on these platforms is linked to higher rates of anxiety, sadness, and lower self-worth, especially in girls. If an app consistently makes you feel bad about yourself, that's data, not a personal failure.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Real Cost (And the Real Benefit of Choosing Wisely)`,
          paragraphs: [
            `Here's a truth most adults wish they'd known earlier: every hour spent on a screen is an hour NOT spent on something else, real friendships, movement, reading, sleep, creating, playing, family time, being outside. Screens aren't usually replacing nothing, they're replacing other valuable things. Researchers studying kids found that kids who spend less time on designed-addictive apps and more time on real-life activities have better mood, focus, sleep, and friendships. This isn't a coincidence, screens often crowd out the things that actually fill you up.`,
            `This doesn't mean zero screen time, screens are part of modern life, and many forms are great. It means being CHOOSY about which kind, and PROTECTING time for everything else. The kid who learns this gets a huge gift, they're more focused at school, sleep better, have richer friendships, more creativity, deeper hobbies, and protect their growing brain during the years it's most rapidly forming. Terra's first teaching about screens: you're smart enough to understand this. Designed-addictive apps are products that profit from your time and attention. Use screens for what they're actually GOOD for (learning, connecting, creating, sometimes fun). Be wary of what's designed to hook you. Protect your sleep, your boredom, your real-life time. The kid who builds this awareness early grows into an adult who uses technology wisely instead of being controlled by it. That's one of the most important wellness skills of this generation.`,
          ],
          image: `/ue-assets/lw/l08-s4-real-cost.webp`,
          imageCaption: `Screens often crowd out friendships, sleep, movement, creativity. Choose what they replace wisely.`,
          vocab: [
            { word: `opportunity cost`,
              definition: `Every hour on a screen is an hour NOT spent on something else, real friendships, movement, reading, sleep, creating, family time. Screens aren't replacing nothing. They're often replacing valuable things. Being aware of this helps you choose where your hours actually go.`,
              audioPrompt: `Opportunity cost means every hour spent on a screen is an hour NOT spent on something else, {name}. Real friendships. Movement. Reading. Sleep. Creating. Family time. Being outside. Screens aren't usually replacing nothing. They're replacing other valuable things. Researchers found kids who spend less time on designed-addictive apps and more on real-life activities have better mood, focus, sleep, and friendships. Being aware of opportunity cost helps you choose where your hours actually go. It doesn't mean zero screens. It means choosing wisely.` },
            { word: `capacity for boredom`,
              definition: `The ability to sit quietly without reaching for stimulation. Boredom is where creativity, self-reflection, and original ideas live. Designed-addictive screens eat this capacity. Building the ability to sit with quiet moments is one of the most valuable practices of this generation — and it gets easier with practice.`,
              audioPrompt: `Capacity for boredom is the ability to sit quietly without reaching for stimulation, {name}. When you're bored, your brain naturally turns inward to reflect, imagine, and create. Boredom is where most original ideas come from. Designed-addictive screens eat this capacity. When the phone is always available, you never experience boredom, and you miss out on all the creativity and self-knowledge boredom grows. Building the ability to sit with quiet moments is one of the most valuable practices of this generation.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four ways kids use screens. Classify each: USEFUL SCREEN USE (learning, connecting, creating, real value), SOMETIMES SCREEN USE (entertainment that's fine in moderation), or DESIGNED-ADDICTIVE SCREEN USE (engineered to hook you, costs more than it gives)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `useful`,    label: `Useful Screen Use`,         color: `#34D399`, description: `Learning, connecting, creating, real value. Adds something to life. Empowering when used intentionally.` },
            { id: `sometimes`, label: `Sometimes Screen Use`,       color: `#FBBF24`, description: `Entertainment like shows, games, movies. Fine in moderation. Joy and relaxation, not designed to hook.` },
            { id: `addictive`, label: `Designed-Addictive Use`,     color: `#F87171`, description: `Engineered to hijack dopamine and keep you hooked longer than you meant. Costs attention, sleep, mood.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Use #1`,
              clues: [
                { text: `A kid wants to learn how to draw realistic dragons.` },
                { text: `They watch a 20-minute tutorial, pause it to try the techniques, and finish feeling satisfied and inspired.` },
                { text: `They put the device down when they're done and pick up their sketchbook.` },
              ],
              correctAnswer: `useful`,
              realWorldExample: `Learning with a clear goal, intentional time, then putting it down. Useful screen use.`,
              explanation: `Pure useful screen use. The kid had a clear purpose (learning to draw), used the screen intentionally for that, then put it down when finished. The screen ADDED to their life (they learned a skill and got inspired to create). This is exactly what good screen use looks like, on purpose, for real value, with a clear ending.`,
            },
            {
              id: `case-2`,
              caseTitle: `Use #2`,
              clues: [
                { text: `A kid watches a movie with their family on Friday night.` },
                { text: `They laugh together, talk about it afterward, and it's a regular family bonding moment.` },
                { text: `When the movie ends, they all go to bed.` },
              ],
              correctAnswer: `sometimes`,
              realWorldExample: `Family movie night is joyful entertainment, not designed-addictive.`,
              explanation: `Pure sometimes screen use. Family movie night is entertainment that's fine in moderation, and it adds connection and joy. It's NOT designed to keep them watching for hours (a movie has a beginning, middle, and end). When it's over, everyone moves on with their life. This is healthy moderate entertainment, perfect example of "sometimes" screen use.`,
            },
            {
              id: `case-3`,
              caseTitle: `Use #3`,
              clues: [
                { text: `A kid opens a short-form video app to "watch just one video" before bed.` },
                { text: `Two hours later, they're still scrolling, having watched hundreds of videos.` },
                { text: `They go to bed late, sleep poorly, feel cranky the next day, and don't remember half the videos.` },
              ],
              correctAnswer: `addictive`,
              realWorldExample: `Engineered to keep you scrolling. A classic designed-addictive pattern.`,
              explanation: `Pure designed-addictive screen use. Notice the pattern, intended to be brief, ended up being two hours, lost track of time, slept poorly, felt cranky. This is exactly what the app was DESIGNED to do. The endless scrolling, unpredictable rewards, autoplay features, all engineered to keep brains hooked. Not the kid's fault, this is what these products do. The cost (sleep, mood, time) is real.`,
            },
            {
              id: `case-4`,
              caseTitle: `Use #4: The Tricky One`,
              clues: [
                { text: `A kid uses an "educational" kids app for hours every day.` },
                { text: `It has bright colors, constant rewards, achievement badges, unlocking new levels, and short clips.` },
                { text: `It's labeled "educational" and the kid feels productive, but they can't focus on a book afterward and feel restless.` },
              ],
              correctAnswer: `addictive`,
              realWorldExample: `"Educational" label doesn't mean it isn't engineered to hook you.`,
              explanation: `Tricky, {name}! It's labeled "educational" and the kid feels productive. So you might call this useful. But look closely. Constant rewards, achievement badges, unlocking new levels, short clips, all the same engagement features as designed-addictive apps. Pure designed-addictive in disguise (the "educational" version). Lesson: just because something is labeled "learning" or "educational" doesn't mean it isn't engineered to hook you. The real test isn't the topic, it's the DESIGN. Constant rewards, autoplay, unpredictable hits of stimulation, all the same brain effects regardless of subject. The aftermath is the giveaway, can't focus afterward, feels restless. Real learning leaves you feeling calm and integrated, not jittery. Watch for this in any "kids' app." Some are genuinely useful (one-off tutorials, structured lessons). Many are designed-addictive in a learning wrapper.`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l08-q1`, format: `true-false`,
              question: `True or false: All screen time is the same — it's all equally good or equally bad.`,
              correctAnswer: false,
              explanation: `False. There's a huge difference. USEFUL screen use (learning, connecting, creating) can add real value. SOMETIMES screen use (entertainment) is fine in moderation. DESIGNED-ADDICTIVE screen use (engineered to hijack your brain) is what causes most of the problems. The kind matters more than the amount.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What are designed-addictive apps engineered to do?`,
              options: [
                `Help you efficiently`,
                `KEEP YOU WATCHING/SCROLLING longer than you meant to. Designed by teams of engineers and psychologists, similar to how slot machines work`,
                `Educate you`,
                `Help you sleep`,
              ],
              correctIndex: 1,
              explanation: `Designed-addictive apps are engineered by teams of engineers and psychologists to keep you watching, scrolling, or playing longer than you meant to. Similar to slot machines, they use unpredictable rewards that keep brains hooked. Not accidents, intentional design.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What is DOPAMINE HIJACKING?`,
              options: [
                `A type of food`,
                `When designed-addictive apps give your brain tiny rewards constantly and UNPREDICTABLY. Trains the brain to need constant stimulation`,
                `Stealing dopamine`,
                `Imaginary`,
              ],
              correctIndex: 1,
              explanation: `Dopamine hijacking is when designed-addictive apps give your brain tiny rewards constantly and unpredictably (every new post, notification, cute video). Similar to slot machines. Over time, regular life starts to feel boring, attention shrinks, sleep and mood suffer.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `What does TOO MUCH designed-addictive screen time do over time?`,
              options: [
                `Nothing`,
                `Shorter attention, worse sleep, mood drops, loss of capacity for boredom. Real measurable changes in kids' and teens' brains`,
                `Makes you smarter`,
                `Random effects`,
              ],
              correctIndex: 1,
              explanation: `Over time: attention span shrinks (harder to focus on slower things), sleep suffers (blue light + late scrolling), mood drops (social comparison), capacity for boredom disappears. Researcher Jonathan Haidt documented measurable declines in mental health in kids and teens since smartphones became universal.` },

            { id: `l08-q5`, format: `multiple-choice`,
              question: `What is INTENTIONAL SCREEN USE?`,
              options: [
                `Avoiding all screens`,
                `Using screens on PURPOSE for specific reasons (learning, connecting, creating, intentional entertainment). Deciding before you pick up the device what you're doing`,
                `Using screens randomly`,
                `Never picking up devices`,
              ],
              correctIndex: 1,
              explanation: `Intentional screen use means using screens on purpose for specific reasons instead of by default. Decide before you pick up the device what you're doing, then do that and put it down. Opposite of getting sucked in by algorithms. Transforms how screens fit into life.` },

            { id: `l08-q6`, format: `true-false`,
              question: `True or false: Boredom is bad and should be avoided by reaching for a screen.`,
              correctAnswer: false,
              explanation: `False. BOREDOM is where creativity, self-reflection, and ideas live. Most adults wish they had the capacity to sit with quiet moments. When you feel the urge to grab a device just because things are quiet, sit with it for a minute. Build that capacity now while it's easier.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `What is OPPORTUNITY COST?`,
              options: [
                `A type of spending`,
                `Every hour on a screen is an hour NOT spent on something else. Real friendships, movement, reading, sleep, creating. Screens often crowd out the things that fill you up`,
                `Random expression`,
                `Imaginary concept`,
              ],
              correctIndex: 1,
              explanation: `Every hour on a screen is an hour not spent on something else. Screens aren't replacing nothing, they're often replacing real friendships, movement, reading, sleep, creating, family time. Being aware of opportunity cost helps you choose where your hours actually go.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about screens?`,
              options: [
                `Avoid all screens forever`,
                `You're smart enough to understand this. Designed-addictive apps are PRODUCTS that profit from your time. Use screens for what they're good for. Be wary of what's designed to hook you`,
                `Use as many screens as possible`,
                `Trust all apps`,
              ],
              correctIndex: 1,
              explanation: `You're smart enough to understand this. Designed-addictive apps are products that profit from your time and attention. Use screens for what they're actually good for (learning, connecting, creating, sometimes fun). Be wary of what's designed to hook you. Protect your sleep, boredom, and real-life time.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Take an honest breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Honestly, which apps or screen activities give you something REAL (learning, connecting, creating)? Which feel like they pull you in and leave you cranky after?` },
            { id: `r2`, text: `Have you ever opened an app meaning to spend 5 minutes and ended up there for an hour? What kind of app was it?` },
            { id: `r3`, text: `What real-life thing (friendship, hobby, sleep, family time) might be getting crowded out by some of your screen time?` },
            { id: `r4`, text: `What's ONE small change you could make this week to use screens more intentionally?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Research on screens and kids is some of the most studied and most concerning areas in modern psychology. Researchers like Jonathan Haidt, Jean Twenge, and Anna Lembke have documented real, measurable declines in attention, sleep, mood, and mental health in kids since smartphones became universal. The companies making these products often DON'T let their own children use them, which tells you something. Terra's note: you're growing up in a world where powerful designed-addictive technologies are everywhere. That's not your fault, and avoiding all screens isn't the answer either. The answer is AWARENESS, knowing what's actually being done to your brain, choosing your screen time on purpose, and protecting space for everything else. The kid who builds this awareness early carries one of the most important wellness skills of this generation. You're smart. Use that intelligence. Use screens, don't be used by them.`,
          familyAdventure: `Family Screen Awareness. As a family, do an honest screen check-in together (without shame). Each person shares: which screen activities ADD to your life (learning, connecting, creating, joyful entertainment) and which COST you (designed-addictive scrolling, things you regret afterward)? Then talk about one small change each family member wants to try this week, maybe no phones at meals, no screens in bedrooms, a specific time you put them away. Adults model it too. You're building a family that uses technology wisely together. Many families find that small changes create big shifts in connection, sleep, and mood.`,
          creativePrompt: {
            intro: `Write honestly about your screen use, what you genuinely value, and what might be costing you.`,
            floor: `Write at least 5 sentences. Describe your screen time honestly and one change you want to try.`,
            stretch: `Write 8 to 10 sentences. Build a fuller reflection on which kinds of screen use add to your life vs. which take.`,
            open: `Write as much as you want. Write a full honest piece about your relationship with screens. Be specific about which screen uses you genuinely value (learning, connecting with people you love, creating, watching things that bring you joy) and which leave you feeling worse afterward (scrolling, comparison, lost time, designed-addictive content). Reflect on the science of how designed-addictive apps work and what they cost. Describe the kind of screen-user you want to be, intentional, aware, choosy. End with 1-2 specific commitments you'll try this week. Make it kind, honest, and free of shame.`,
            frames: [
              `Screen uses I genuinely value are ___.`,
              `Screen uses that cost me are ___.`,
              `What I've learned about designed-addictive apps is ___.`,
              `The kind of screen-user I want to be is ___.`,
              `My specific commitments this week are ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Smart, honest work, {name}. You now understand the real science of screens, that not all screen time is the same, that designed-addictive apps are engineered to hijack your dopamine, that they cost you attention, sleep, mood, and capacity for boredom, and that using screens INTENTIONALLY transforms everything. You're smart. Use that intelligence. Be choosy, protect your sleep and real-life time. Next, we explore something deeply connected to body wisdom and food, listening to the body's hunger and fullness signals. HUNGER & FULLNESS. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `screen-wise-kid`,
          badgeName: `Screen-Wise Kid`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L08 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
