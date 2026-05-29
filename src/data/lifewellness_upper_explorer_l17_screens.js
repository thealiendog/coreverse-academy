// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L17 — Body Image & Self-Love
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : protective body-image work, anti-diet-culture, awareness of
//            social-media comparison harm. Research from body-image psychology
//            (Lindsay Kite & Lexie Kite "More Than a Body"), media literacy.
//            NO weight talk, NO diet talk, NO comparison content.
// CALIBRATED: UE spec v1.1 — PROTECTIVE FRAMING
// GAME FORMAT: sequence (5 truths about your body to carry for life)
// SCOPE: bodies come in many shapes/sizes ALL worthy; social media shows
//        edited highlights NOT real bodies; your body is YOURS, not for
//        others to judge; what your body DOES matters more than how it looks;
//        self-love is treating your body kindly EVERY day
// VOICE: Terra = fiercely protective wolf-mother, deeply kind, anti-shame.
//        Treats kid's body as already worthy of love, not "good enough for
//        love after improvement."
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-17`,
      title: `Body Image & Self-Love`,
      duration: 18,
      xpReward: 75,
      badge: `body-loved`,
      badgeName: `Body Loved`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore one of the most important truths I can give you, the truth that protects you from years of unnecessary suffering. Your BODY is YOURS. It's the one body you'll have your whole life. It does incredible things for you every day, lets you move, sense, feel, hug, play, learn, love. It deserves your KINDNESS and CARE, not your judgment or shame. Today, we talk honestly about body image, about the messages you'll hear from social media and the world, about the wisdom that protects you. Take a soft breath, place a kind hand on your heart if you want, and let's begin. This lesson is for keeps.`,
          headline: `Body Image & Self-Love`,
          subtitle: `Your body is yours. It deserves your kindness, not your shame`,
          visual: `/ue-assets/lw/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Bodies Come in Many Shapes. All Are Worthy`,
          paragraphs: [
            `Here is a truth that most adults wish someone had told them clearly when they were your age: BODIES COME IN MANY SHAPES AND SIZES, and ALL of them are worthy of love and care. Look around at the people you know. Family members, classmates, neighbors, friends. Notice that they all have different bodies. Different heights. Different shapes. Different proportions. Different sizes. Different skin colors. Different abilities. ALL of them are HUMAN BODIES, all deserving of dignity and kindness. Your body is part of this beautiful variety, not something to be compared to a narrow ideal.`,
            `Researchers studying body image have found something important: humans evolved with a huge range of natural body shapes and sizes. There is no single "right" body. The narrow ideals that culture sometimes shows (in movies, advertising, social media) are NOT real human variety, they're a tiny, often edited slice that doesn't reflect actual humans. Your job isn't to fit into someone else's idea of what a body should look like. Your job is to LIVE in your body, KINDLY, and let it do what it does. The kid who learns this early avoids a lifetime of body shame that no amount of "trying to look different" ever cures. Your body is YOURS, and it's already worthy.`,
          ],
          image: `/ue-assets/lw/l17-s1-many-shapes.webp`,
          imageCaption: `Bodies come in beautiful variety. All are worthy. There is no single "right" body shape.`,
          vocab: [
            { word: `body diversity`,
              definition: `The real truth that human bodies come in many different shapes, sizes, heights, abilities, and proportions, ALL worthy of dignity and care. Humans evolved with huge natural variety. Narrow ideals in media don't reflect real bodies. Your body is part of this beautiful range.`,
              audioPrompt: `Body diversity is the truth that human bodies come in many shapes, sizes, heights, and abilities, and ALL are worthy of dignity and care, {name}. Look around at the people you know. They all have different bodies, different heights, shapes, sizes, skin colors, abilities. ALL are human bodies, all deserving of kindness. Researchers found that humans evolved with a huge range of natural body shapes. There is no single right body. The narrow ideals culture sometimes shows are NOT real human variety. Your body is YOURS, and it's already worthy.` },
            { word: `body image`,
              definition: `How you think and feel about your own body — the mental picture you carry of yourself. A positive body image doesn't mean thinking your body is perfect. It means appreciating it for what it is and what it does, without letting cultural messages decide your worth.`,
              audioPrompt: `Body image is how you think and feel about your own body, {name}. It includes the mental picture you carry of yourself. Researchers found that body image starts forming in the early school years. A positive body image doesn't mean thinking your body is perfect. It means appreciating it for what it is and what it does, without letting cultural messages decide whether you're worthy of kindness. Your body image is shaped partly by what you see, and partly by what you choose to believe.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Social Media Shows Edits, Not Real Bodies`,
          paragraphs: [
            `Now an honest truth about social media. The bodies you see on social media (especially on platforms like Instagram, TikTok, YouTube) are NOT what most people actually look like in real life. Here's what happens: photos and videos go through MANY rounds of editing before being posted. Filters smooth skin. Apps reshape bodies. Photos are taken at the most flattering angle, in the best lighting, after hours of preparation, then posted along with a hundred others that didn't make it. What you see is a tiny edited highlight, NOT a real body in a real moment.`,
            `Researchers studying body image and social media have found something important: kids and teens who spend a lot of time on image-focused social media tend to feel WORSE about their own bodies, even when nothing about their actual bodies has changed. They're comparing their REAL, MOMENT-TO-MOMENT bodies to other people's most edited, filtered, posed BEST. Of course they feel worse, that comparison is rigged. Even the people in the photos don't actually look like that in real life. Many of those people also struggle with body image because they're comparing themselves to other edited photos. The whole system is built on COMPARING UNREALITY TO REALITY. Knowing this gives you protection. When you see a "perfect" body online, you can remind yourself: that's an EDIT, not a body. Real bodies have skin texture, normal proportions, asymmetries, and look different in every angle and lighting. The real ones are the real ones. The screens are not real.`,
          ],
          image: `/ue-assets/lw/l17-s2-edits.webp`,
          imageCaption: `Social media shows EDITS. Filters, angles, lighting, editing. Real bodies don't look like that.`,
          vocab: [
            { word: `social media body trap`,
              definition: `The comparison problem of measuring your real, moment-to-moment body against other people's edited, filtered, posed best on social media. Research shows kids who spend lots of time on image-focused social media feel WORSE about their bodies even when nothing has changed. The comparison is rigged.`,
              audioPrompt: `The social media body trap is the comparison problem of measuring your real body against other people's edited, filtered, posed best on social media, {name}. Filters smooth skin. Apps reshape bodies. Photos are taken at the most flattering angle, in the best lighting, after hours of preparation. What you see is a tiny edited highlight, not a real body. Researchers found that kids who spend lots of time on image-focused social media feel worse about their own bodies even when nothing has changed. The comparison is rigged.` },
            { word: `media literacy`,
              definition: `The skill of understanding that photos, videos, and ads are constructed to create specific impressions, not show reality. Asking: what was changed here? Who benefits? Research shows kids with higher media literacy feel less harmed by impossible beauty ideals because they understand the images are constructed, not real.`,
              audioPrompt: `Media literacy is the skill of understanding that photos, videos, and ads are constructed to create specific impressions, not show reality, {name}. When you look at a social media post, an ad, or a magazine photo, someone made decisions about lighting, angle, editing, and framing. Media literacy means asking: what was changed here? Who benefits if I believe this image is real? Researchers found that kids with higher media literacy feel less affected by impossible beauty ideals because they understand the images are constructed, not real.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Your Body DOES Matters More Than How It Looks`,
          paragraphs: [
            `Here's a powerful shift that protects your relationship with your body for life. We're taught (especially through media and ads) to focus on how our body LOOKS. The wiser focus is what your body DOES. Your body lets you run, jump, swim, dance, climb, hug, hold things, throw, catch, sing, breathe, laugh, cry, eat, sleep, see, hear, taste, smell, touch, feel, love. Your body has carried you through every moment of your life so far. It will keep carrying you through your whole life if you treat it kindly. That's astonishing. That's something to be GRATEFUL for, not critical of.`,
            `Researchers Lindsay Kite and Lexie Kite (twin doctors who wrote a book called "More Than a Body") found that kids and adults who learn to think about their body in terms of WHAT IT DOES (rather than how it looks) have much better mental health, much less body shame, and much healthier relationships with food and movement. They call this BODY APPRECIATION. It's not about pretending your body is "perfect" by some outside standard. It's about appreciating your body as YOUR HOME, YOUR INSTRUMENT, YOUR PARTNER. The kid who thinks "my legs let me run with my friends" instead of "my legs are too X" lives in their body with so much more peace. The body becomes a friend, not a problem to fix.`,
          ],
          image: `/ue-assets/lw/l17-s3-does.webp`,
          imageCaption: `What your body DOES matters more than how it looks. Your body is your home, your partner.`,
          vocab: [
            { word: `body appreciation`,
              definition: `The practice (Lindsay & Lexie Kite) of thinking about your body in terms of WHAT IT DOES rather than how it looks. Your body carries you, lets you move/sense/play/love. Research shows kids who practice this have better mental health and healthier relationships with food and movement. Your body as partner, not problem.`,
              audioPrompt: `Body appreciation is the practice from researchers Lindsay and Lexie Kite of thinking about your body in terms of what it DOES rather than how it looks, {name}. Your body lets you run, jump, swim, dance, climb, hug, hold things, breathe, laugh, eat, sleep, see, hear, taste, touch, feel, love. Researchers found that kids and adults who practice this have better mental health, less body shame, and healthier relationships with food and movement. When your body is a partner, not a problem to fix, everything changes.` },
            { word: `body gratitude`,
              definition: `The practice of regularly noticing and appreciating what your body does for you. Most people spend far more time criticizing their body than thanking it. Body gratitude flips this pattern — research shows it shifts how people treat themselves physically. Appreciation naturally leads to better care.`,
              audioPrompt: `Body gratitude is the practice of regularly noticing what your body does for you, {name}. Most people spend far more time criticizing their body than thanking it. Body gratitude flips this. Your body breathed for you while you slept. It healed cuts without being asked. It regulated your temperature, digested your food, and let you see, taste, and touch the world. Researchers found that regular body gratitude shifts how people treat themselves physically. When you appreciate what your body does, you naturally want to take better care of it.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Self-Love Is Treating Your Body Kindly Every Day`,
          paragraphs: [
            `Here's what real self-love is, and it's not what social media says it is. Self-love isn't a feeling you have to FORCE about how you look. It's the DAILY PRACTICE of TREATING YOUR BODY KINDLY. When you sleep well, you're showing your body love. When you eat foods that nourish you, you're showing your body love. When you move joyfully (L04!), you're showing your body love. When you drink water and breathe slowly, that's love. When you rest when you're tired, when you honor pain signals, when you protect your body from harm, that's love. Self-love is mostly ACTIONS, not feelings. Some days you'll FEEL more positive about your body than other days. That's normal. But on the harder days, you can still ACT kindly toward your body. That's what matters most.`,
            `Some of the unkind things to NOTICE and slowly leave behind: harsh self-talk about your body ("I hate my X"). Comparing your body to edited bodies online. Talking negatively about other people's bodies (a habit that hurts you too). Trying to "shrink" or "fix" your body to match some outside standard. Refusing to do things you want to do because of body shame. None of these come from love. They come from a culture that profits from making you feel bad about your body so you'll buy things. You don't have to participate in that. Terra's first teaching about body image: your body is yours, and it's already worthy of love and care. You don't have to earn it. You don't have to wait until it looks different. You're allowed to live kindly in your body starting right now. Treat it well every single day, and watch your whole relationship with yourself slowly heal. The kid who learns this early gives themselves a gift that lasts a lifetime, a body they LIVE IN with peace, not a body they FIGHT WITH for years.`,
          ],
          image: `/ue-assets/lw/l17-s4-kindly.webp`,
          imageCaption: `Self-love means daily kind actions. Sleep, real food, joyful movement, rest, honoring signals.`,
          vocab: [
            { word: `self-love as actions`,
              definition: `The mature understanding that self-love is mostly KIND ACTIONS toward your body every day, sleeping well, eating real food, moving joyfully, resting, honoring signals, NOT a forced positive feeling about how you look. Some days you feel positive, some days less, but the kind actions can be daily.`,
              audioPrompt: `Self-love as actions is the understanding that self-love is mostly kind actions toward your body every day, not a forced positive feeling about how you look, {name}. When you sleep well, you're showing your body love. When you eat foods that nourish you, that's love. When you move joyfully, drink water, breathe slowly, that's love. When you rest, honor pain signals, protect your body from harm, that's love. Self-love is mostly actions, not feelings. On harder days, you can still act kindly. That's what matters most.` },
            { word: `body shame`,
              definition: `The painful feeling that your body is wrong, flawed, or not enough. Research shows people with high body shame move less, eat more erratically, and take less care of their health. The path out isn't changing your body — it's treating it kindly every day, regardless of how it looks.`,
              audioPrompt: `Body shame is the painful feeling that your body is wrong, flawed, or not enough, {name}. Researchers found that people with high body shame move less, eat more erratically, sleep worse, and take less care of their health. Body shame tells you that you have to look different before you're worthy of care. The truth is the opposite. Your body deserves care because it's yours, not because it meets a standard. The path out of body shame isn't changing your body. It's treating it kindly, every day, regardless.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the five truths about your body in order, {name}. Carry these for life. Use the arrows to arrange them from FOUNDATIONAL (most basic and important) to OUTERMOST (the active practice). Take your time with this one. These truths are precious.`,
          items: [
            { id: `truth-worthy`,  label: `BODIES COME IN MANY SHAPES AND ALL ARE WORTHY. There is no single "right" body. Yours is part of the beautiful variety humans actually are. ALL worthy of dignity and care`,      position: 1 },
            { id: `truth-social`,  label: `SOCIAL MEDIA SHOWS EDITS, NOT REAL BODIES — filters, angles, lighting, posing, editing apps; comparing your real body to edited images is rigged; you're seeing UNREALITY`,      position: 2 },
            { id: `truth-does`,    label: `WHAT YOUR BODY DOES MATTERS MORE THAN HOW IT LOOKS. Your body carries you, lets you move, sense, hug, play, love. "Body appreciation" is much healthier than "body criticism"`, position: 3 },
            { id: `truth-yours`,   label: `YOUR BODY IS YOURS — not for others to judge or comment on; you're allowed to live in it kindly without earning it first; you don't have to wait until you look different`,      position: 4 },
            { id: `truth-actions`, label: `SELF-LOVE IS DAILY KIND ACTIONS. Sleep, real food, joyful movement, water, rest, honoring signals. Love is mostly ACTIONS not forced feelings. Some days easier than others`,    position: 5 },
          ],
          completionMessage: `Beautiful, brave work, {name}. Carry these five truths with you forever. Bodies come in many shapes, all worthy. Social media shows edits, not real bodies. What your body does matters more than how it looks. Your body is yours, not for others to judge. Self-love is daily kind actions. Hold these close. They will protect you across your whole life.`,
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l17-q1`, format: `true-false`,
              question: `True or false: There is one "right" body shape, and others should try to look like it.`,
              correctAnswer: false,
              explanation: `False. Humans evolved with a HUGE range of natural body shapes, sizes, and proportions. ALL are worthy of dignity and care. The narrow ideals shown in media are not real human variety, they're a tiny edited slice. Your body is part of the beautiful real range, not something to be compared to a narrow ideal.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `What do bodies on SOCIAL MEDIA actually look like?`,
              options: [
                `Exactly like real bodies`,
                `EDITED. Filters smooth skin, apps reshape bodies, best angles and lighting, hours of preparation. You're seeing UNREALITY, not real bodies`,
                `Random`,
                `Always perfect naturally`,
              ],
              correctIndex: 1,
              explanation: `Social media bodies are edited. Filters smooth skin. Apps reshape bodies. Photos taken at most flattering angle, in best lighting, after hours of preparation, then posted with many others that didn't make it. What you see is a tiny edited highlight, not a real body. Real bodies have skin texture, normal proportions, look different in every angle.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `Why does comparing your body to social-media bodies make you feel WORSE?`,
              options: [
                `It doesn't`,
                `You're comparing your REAL moment-to-moment body to other people's EDITED filtered posed best. The comparison is rigged`,
                `You're not trying hard enough`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `You're comparing your real, moment-to-moment body to other people's most edited, filtered, posed best. Of course you feel worse, that comparison is rigged. Even the people in the photos don't actually look like that in real life. Knowing this gives you protection.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `What did researchers Lindsay & Lexie KITE find about BODY APPRECIATION?`,
              options: [
                `It doesn't help`,
                `Kids and adults who think about their body in terms of WHAT IT DOES (rather than how it looks) have better mental health, less body shame, healthier relationships with food and movement`,
                `Only matters for adults`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Researchers Lindsay and Lexie Kite found that thinking about your body in terms of WHAT IT DOES (rather than how it looks) leads to much better mental health, less body shame, and healthier relationships with food and movement. Your body becomes a friend and partner, not a problem to fix.` },

            { id: `l17-q5`, format: `multiple-choice`,
              question: `What does your body DO that's astonishing?`,
              options: [
                `Nothing much`,
                `Lets you run, jump, swim, dance, climb, hug, hold, throw, catch, breathe, laugh, eat, sleep, see, hear, taste, smell, touch, feel, love. Carries you through every moment of your life`,
                `Just exists`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Your body lets you run, jump, swim, dance, climb, hug, hold things, throw, catch, sing, breathe, laugh, cry, eat, sleep, see, hear, taste, smell, touch, feel, love. It has carried you through every moment of your life so far. That's astonishing. That's something to be GRATEFUL for, not critical of.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `What is REAL self-love?`,
              options: [
                `Forcing positive feelings about how you look`,
                `The DAILY PRACTICE of treating your body KINDLY. Sleep well, eat real food, move joyfully, rest, honor signals. Mostly ACTIONS not feelings`,
                `Buying products`,
                `Posting about yourself`,
              ],
              correctIndex: 1,
              explanation: `Real self-love isn't a forced feeling. It's the daily practice of treating your body kindly. Sleep well, eat foods that nourish, move joyfully, drink water, breathe slowly, rest when tired, honor pain signals. Self-love is mostly actions, not feelings. Some days you feel more positive, some less, but kind actions can be daily.` },

            { id: `l17-q7`, format: `true-false`,
              question: `True or false: You have to wait until your body looks "different" before you're allowed to live in it kindly.`,
              correctAnswer: false,
              explanation: `False. You're allowed to live kindly in your body starting RIGHT NOW. You don't have to earn it. You don't have to wait until it looks different. The kid who learns this early gives themselves a gift that lasts a lifetime, a body they live in with peace, not a body they fight with for years.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about your body?`,
              options: [
                `Body criticism is fine`,
                `Your body is YOURS, and it's already worthy of love and care. You don't have to earn it. Treat it well every day. Watch your whole relationship with yourself slowly heal`,
                `Bodies don't matter`,
                `Force positive feelings`,
              ],
              correctIndex: 1,
              explanation: `Your body is yours, and it's already worthy of love and care. You don't have to earn it. You don't have to wait until it looks different. You're allowed to live kindly in your body starting right now. Treat it well every single day, and watch your whole relationship with yourself slowly heal. A body lived in with peace, not fought with.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Take a kind breath, {name}. Maybe put a soft hand on your heart. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Name THREE things your body has done for you today (let you read, breathe, walk, eat, hug someone, etc.). Notice what shifts when you think about your body this way.` },
            { id: `r2`, text: `Have you ever felt worse about your body after spending time on social media? Be gentle in noticing. What might help (less time, less image-focused content)?` },
            { id: `r3`, text: `What's ONE small kind action you'll do for your body this week (extra sleep, real food, time outside, joyful movement, kind self-talk)?` },
            { id: `r4`, text: `What would it feel like to live in your body as a FRIEND, not a problem to fix? Picture it.` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Research on body image is one of the most important and hopeful areas in modern psychology. Studies consistently show that kids and adults who develop BODY APPRECIATION (thinking about what the body does rather than how it looks) have better mental health, less depression and anxiety, healthier eating, more enjoyment of movement, and stronger overall well-being than people stuck in body criticism. The body-positive and body-neutral movements have given us research-backed alternatives to a culture that profits from body shame. Terra's note: you're growing up in a culture that often makes its money by making people feel bad about their bodies. That's not your fault, and it's not the truth. The truth is that your body is worthy of love RIGHT NOW. You don't have to earn it. You don't have to wait. You don't have to look like anyone else. You can live kindly in your body starting today, and that kindness, repeated across decades, becomes one of the most precious gifts you'll ever give yourself. Carry these truths. Protect your eyes from images that hurt you. Protect your heart from harsh self-talk. Live in your body with the love it deserves.`,
          familyAdventure: `Family Body Appreciation. As a family, take turns naming ONE thing your body did for you today that you appreciate (let you run, hug someone, taste food, sleep well, see something beautiful). Adults model it too. Practice the language of BODY APPRECIATION instead of body criticism. Don't comment on other people's bodies, your own bodies, or appearance in critical ways. Build a home where bodies are appreciated for what they DO, not constantly evaluated for how they look. This single shift, practiced as a family, protects everyone's body image for life.`,
          creativePrompt: {
            intro: `Write a love letter to your body — gently, kindly, focused on what it does and what it deserves.`,
            floor: `Write at least 5 sentences. Name 3-5 things your body does for you and one kind action you'll take this week.`,
            stretch: `Write 8 to 10 sentences. Build a fuller letter expressing appreciation and care.`,
            open: `Write as much as you want. Write a full LOVE LETTER to your body. Start by listing many things your body has done for you (carried you, let you move and sense and feel, held you through your whole life so far). Express GRATITUDE for those things. Acknowledge the hard parts honestly, the cultural messages you've absorbed, the comparison to edited images, the moments you've been unkind to your body. Apologize gently if you want to. Then describe the kind of relationship you want with your body going forward, kindness, appreciation, daily care, fierce protection from cultural harm. End with specific commitments for treating your body kindly this week and beyond. Sign it with love. This letter is yours. Read it back when you need it.`,
            frames: [
              `Dear body, thank you for ___.`,
              `Some things you do for me that I rarely notice are ___.`,
              `I'm sorry for the times I've been unkind to you, like ___.`,
              `Going forward, I want our relationship to be ___.`,
              `My specific commitments for treating you kindly are ___.`,
              `With love, [your name]`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Brave, tender work, {name}. You now carry the five truths that will protect you for life. Bodies come in many shapes, all worthy. Social media shows edits, not real bodies. What your body does matters more than how it looks. Your body is yours, not for others to judge. Self-love is daily kind actions. Hold these close. Live in your body with peace, not war. Next, we explore how to make all the wellness practices in this subject actually STICK as daily habits, the real science of habit formation. HABITS THAT STICK. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `body-loved`,
          badgeName: `Body Loved`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L17;
