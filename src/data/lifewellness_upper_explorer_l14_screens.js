// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L14 — Friends, Family & Your Health
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real research on social connection and health — Holt-Lunstad's
//            loneliness/connection studies, Surgeon General Vivek Murthy's
//            loneliness report, Harvard adult development study (Robert
//            Waldinger). Social health IS health.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (real connection / surface connection / harmful
//            connection). Trick case = "popular" relationship that's actually
//            draining.
// SCOPE: connection is a WELLNESS NEED, not a bonus; real vs. surface vs.
//        harmful connections; building real connections; the pack matters
// VOICE: Terra = the wolf who deeply knows pack matters; nurturing
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-14`,
      title: `Friends, Family & Your Health`,
      duration: 18,
      xpReward: 75,
      badge: `pack-builder`,
      badgeName: `Pack Builder`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore something most wellness curriculum misses, but I, as a wolf, know is essential: your PACK. The people you love and who love you back. Family, friends, anyone who's part of your life in a real way. Researchers have learned something powerful: SOCIAL HEALTH IS HEALTH. Real connection isn't just nice, it's biologically essential, as important to your wellness as sleep, food, and movement. Today, you learn the science of why, what real connection looks like (vs. fake versions), and how to build the pack that supports your whole life. Take a warm breath, and let's begin.`,
          headline: `Friends, Family & Your Health`,
          subtitle: `Your pack. Why real connection is as important as sleep, food, and movement`,
          visual: `/ue-assets/lw/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Real Connection Is a Wellness Need, Not a Bonus`,
          paragraphs: [
            `Here's a finding that surprises most people: REAL CONNECTION with other humans is as important to your health as sleep, food, and movement. Not as a nice extra, as an ACTUAL biological need. Researcher Julianne HOLT-LUNSTAD studied this for years and found that people with strong social connections live LONGER, have stronger immune systems, recover faster from illness, have better mental health, and feel happier across their lifetimes than people who are lonely. The U.S. Surgeon General Vivek MURTHY wrote a major report calling LONELINESS a public health crisis as serious as smoking, because the body and brain genuinely suffer without enough real connection.`,
            `Here's why. Humans evolved as PACK animals (as wolves know well). For most of human history, being part of a tight community wasn't optional, it was how you survived. Our nervous systems, immune systems, and brains all DEVELOPED IN THE CONTEXT of regular real connection with others. Modern life often isolates people (less time with extended family, less neighborhood community, more screens replacing real interaction). The result is what researchers call "social hunger," a real biological need that goes unmet, with real costs to health. The good news, real connection FEEDS this need. Even small amounts of true connection (a deep conversation, a long hug, time with people who really know you) measurably improve health markers. Connection isn't a bonus you can skip when busy, it's foundational.`,
          ],
          image: `/ue-assets/lw/l14-s1-real-need.webp`,
          imageCaption: `Connection isn't a bonus. It's a real biological need, as important as sleep and food.`,
          vocab: [
            { word: `social health`,
              definition: `The wellness research finding that REAL connection with other humans is biologically essential, not optional. People with strong connections live longer, have stronger immunity, recover faster, have better mental health. Loneliness is now considered a public health issue as serious as smoking.`,
              audioPrompt: `Social health is the wellness research finding that real connection with other humans is biologically essential, not optional, {name}. Researcher Julianne Holt-Lunstad studied this for years and found people with strong social connections live longer, have stronger immune systems, recover faster from illness, have better mental health, and feel happier across their lifetimes than people who are lonely. The U.S. Surgeon General Vivek Murthy wrote a major report calling loneliness a public health crisis as serious as smoking. Connection isn't a bonus you can skip when busy, it's foundational.` },
            { word: `loneliness`,
              definition: `The biological state of unmet social need — not just sadness about being alone. Chronic loneliness is as damaging to health as smoking 15 cigarettes a day. The U.S. Surgeon General declared it a public health epidemic. The medicine is real connection: present, mutual, honest, and nourishing.`,
              audioPrompt: `Loneliness is the biological state of unmet social need, not just a feeling of being sad about being alone, {name}. Research by Julianne Holt-Lunstad and others has found that chronic loneliness is as damaging to health as smoking 15 cigarettes a day, weakening immune function, disrupting sleep, elevating stress hormones, and increasing risk of early death. The U.S. Surgeon General declared loneliness a public health epidemic. The solution isn't more surface contact. It's more real connection, present, mutual, honest, and nourishing. Genuine connection is the medicine.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Real Connection vs. Surface Connection`,
          paragraphs: [
            `Here's a critical distinction: not all "connection" gives you the same wellness benefits. REAL connection has these qualities: BOTH people are PRESENT (not on phones, not distracted, actually paying attention). It's MUTUAL (both people give and receive, not one-sided). It involves real LISTENING (Social Leadership L02!) and being heard. It allows for HONESTY (you can say what's actually going on, not just what's polite). It leaves both people FEELING BETTER, more energized, less alone, more themselves. Real connection might happen with one close friend, a parent, a sibling, a grandparent, a few good friends, anyone where this kind of two-way attention is possible.`,
            `SURFACE connection looks like connection from outside but doesn't feed the real biological need. Examples: hanging out while both on phones. "Friends" you barely know who you scroll past on social media. Big groups where you never have a real conversation. Performing or impressing rather than being yourself. Talking ABOUT people instead of with them. Surface connection isn't bad, it's part of normal life. But if MOST of your "connection" is surface, your social-health need goes unmet, even if you're "surrounded by people." Researchers found that kids with many social-media "friends" but few real connections often feel MORE lonely than kids with fewer total people but a few real ones. Quality matters far more than quantity. The kid who has 3 real connections is healthier than the kid with 300 surface ones.`,
          ],
          image: `/ue-assets/lw/l14-s2-real-vs-surface.webp`,
          imageCaption: `Real connection. Present, mutual, honest, leaves you better. Surface. Distracted, performed.`,
          vocab: [
            { word: `real connection`,
              definition: `Connection that meets the biological need: both people PRESENT (not on phones), MUTUAL give-and-take, real LISTENING and honesty, leaves both people feeling BETTER. Quality matters far more than quantity. 3 real connections feed health more than 300 surface ones.`,
              audioPrompt: `Real connection has these qualities, {name}. Both people are present, not on phones, not distracted, actually paying attention. It's mutual, both people give and receive. It allows honesty, you can say what's actually going on. It leaves both people feeling better, more energized, less alone, more themselves. Researchers found kids with many social-media friends but few real connections often feel more lonely than kids with fewer people but a few real ones. Quality matters far more than quantity.` },
            { word: `surface connection`,
              definition: `Connection that looks real from outside but doesn't feed the biological need. Hanging out on phones, big groups with no real conversation, performing instead of being yourself. Not harmful on its own, but if most of your social time is surface, you stay socially hungry no matter how many people surround you.`,
              audioPrompt: `Surface connection looks like connection from the outside but doesn't feed the biological need for real social contact, {name}. Hanging out while both people are on phones. Big groups where no real conversation happens. Performing to impress instead of being yourself. Talking to people without really seeing them or being seen. Surface connection isn't harmful on its own. But if most of your social time is surface, you stay socially hungry, no matter how many people surround you. Depth matters far more than quantity.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Connection Becomes Harmful`,
          paragraphs: [
            `Here's another truth: some "connection" actually HURTS you. HARMFUL connection includes people who consistently put you down, make you feel worse about yourself, drain your energy, demand a lot but give little, control or manipulate you (Social Leadership L15!), share rumors or gossip about you, treat you cruelly even between "good" moments, or have you walking on eggshells. These relationships drain your wellness instead of feeding it. Researchers studying social health found that chronically harmful relationships are WORSE for health than being alone, your nervous system stays activated (L06!), your stress hormones stay high, your sleep and mood suffer.`,
            `This applies to friends, peers, and even family. While family relationships are usually deeply important, sometimes specific people in a family are also genuinely harmful. If this is true in your life, please tell a trusted adult (L10!). You don't have to figure out hard relationships alone. The wisdom isn't to cut off everyone who's ever annoyed you, normal friendships have ups and downs. The wisdom is to NOTICE when a relationship consistently leaves you worse off, and address it (Social Leadership L05 boundaries! L13 apologies and repair!). Healthy relationships have most moments where both people feel respected, safe, and themselves. Harmful relationships have most moments where one or both people feel diminished. There's a real difference, and your body knows it.`,
          ],
          image: `/ue-assets/lw/l14-s3-harmful.webp`,
          imageCaption: `Some connections HURT you. Drain, demean, manipulate. Notice the difference. Tell trusted adults.`,
          vocab: [
            { word: `harmful connection`,
              definition: `Relationships that consistently put you down, drain energy, demand a lot, gossip, treat cruelly, or leave you walking on eggshells. WORSE for health than being alone. Nervous system stays activated; stress hormones high. Notice the pattern; tell trusted adults; address it.`,
              audioPrompt: `Harmful connection includes people who consistently put you down, make you feel worse about yourself, drain your energy, demand a lot but give little, share rumors or gossip about you, treat you cruelly even between good moments, or have you walking on eggshells, {name}. These relationships drain your wellness instead of feeding it. Researchers found chronically harmful relationships are worse for health than being alone. Healthy relationships have most moments where both people feel respected, safe, and themselves. Harmful relationships have most moments where one or both people feel diminished.` },
            { word: `healthy friendship`,
              definition: `A friendship where both people feel respected, safe, and able to be themselves most of the time. Both give and receive. Both can disagree without cruelty. When one is hurt, the other takes it seriously. The simple test: after time together, do you feel better or worse? Real friends leave you better.`,
              audioPrompt: `A healthy friendship is one where both people feel respected, safe, and able to be themselves most of the time, {name}. Both people give and receive. Both can have honest conversations. Both can have disagreements without cruelty. When one person is hurt, the other takes it seriously. Healthy friendships have ups and downs, but the overall pattern is mutual, kind, and nourishing. A simple test: after most time together, do you feel better or worse? Real friends leave you feeling better and more energized. Harmful ones consistently do the opposite.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building and Tending Your Pack`,
          paragraphs: [
            `Here's how to build the kind of connections that feed your health. First, INVEST in a FEW real relationships rather than chasing many surface ones. Identify 3-5 people who really know you (parents, siblings, a best friend, a close cousin, a mentor, a coach) and prioritize TIME with them. Second, PUT PHONES AWAY during real conversations. The single biggest shift in modern connection. A 30-minute conversation without phones is more nourishing than 3 hours of "hanging out" with phones in hand. Third, USE THE SKILLS you've learned in Social Leadership, listen well (L02), feel empathy (L03), speak honestly (L04), apologize when needed (L13). Those skills are what make connection deep.`,
            `Fourth, BE PROACTIVE. Reach out. Ask to hang out. Send the text. Initiate the conversation. Friendships and family connections need ACTIVE TENDING, not just waiting for them to happen. Fifth, MAKE NEW FRIENDS when you can, but slowly, real connection takes time. Quick "best friends" sometimes burn out fast. Real friendships often grow slowly through repeated shared moments. Sixth, COMMUNICATE WHEN THINGS GO HARD. All real relationships hit hard moments. Healthy ones repair (Social Leadership L13!). Unhealthy ones don't. The willingness to talk through hard moments deepens connection over time. Terra's first teaching about connection: your pack is essential to your wellness. Tend it carefully. Choose real over surface. Notice harmful patterns and address them. Invest in the few who really know you. Be the kind of friend, family member, and human you'd want to have. The kid who builds real connection skills early lives healthier, longer, and happier than almost any other wellness practice can produce.`,
          ],
          image: `/ue-assets/lw/l14-s4-tending.webp`,
          imageCaption: `Invest in a few real connections. Phones away. Be proactive. Tend your pack actively.`,
          vocab: [
            { word: `tending your pack`,
              definition: `The active practice of investing in a few real connections, putting phones away during real conversations, using the social-leadership skills you've learned, being proactive about reaching out, and communicating when things get hard. Real connection requires active care, not just passive waiting.`,
              audioPrompt: `Tending your pack is the active practice of building and maintaining real connections, {name}. Invest in a few real relationships rather than chasing many surface ones. Identify 3 to 5 people who really know you and prioritize time with them. Put phones away during real conversations. Use the social-leadership skills you've learned, listen well, feel empathy, speak honestly, apologize when needed. Be proactive, reach out, initiate. Make new friends slowly, real connection takes time. Communicate when things go hard. Real connection requires active care, not just passive waiting.` },
            { word: `the Harvard connection study`,
              definition: `The longest study of human well-being ever conducted (Harvard Adult Development Study, led by Robert Waldinger). Found one overwhelming predictor of health and happiness at age 80: quality of close relationships — more important than wealth, fame, or success. Real connections literally shape how long and how well you live.`,
              audioPrompt: `The Harvard Adult Development Study is the longest study of human well-being ever conducted, {name}. Led by Robert Waldinger, it followed people from their 20s into their 80s and found one overwhelming predictor of who would be healthy and happy at 80: the quality of their close relationships. More important than wealth, fame, or career success. People with warm, real connections lived longer and stayed healthier. Those who were lonely or in harmful relationships got sick sooner. Your connections shape how long and how well you live.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four moments of "connection" between kids. Classify each: REAL CONNECTION (present, mutual, leaves both feeling better), SURFACE CONNECTION (looks like connection but distracted, performed, doesn't feed the need), or HARMFUL CONNECTION (drains, demeans, costs more than gives)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `real`,    label: `Real Connection`,    color: `#34D399`, description: `Both present, mutual, real listening, honesty allowed, both leave feeling better and more themselves. Feeds wellness.` },
            { id: `surface`, label: `Surface Connection`, color: `#FBBF24`, description: `Looks like connection but distracted, performed, on phones, not really seeing each other. Doesn't feed the real need.` },
            { id: `harmful`, label: `Harmful Connection`, color: `#F87171`, description: `Drains, demeans, manipulates, leaves one or both worse off. Worse for health than being alone.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Connection #1`,
              clues: [
                { text: `A kid and their best friend sit on the porch for an hour, no phones, just talking.` },
                { text: `They talk about real stuff, share things they're worried about, laugh together. Both listen carefully.` },
                { text: `Both kids feel really happy and connected afterward, like they were truly seen.` },
              ],
              correctAnswer: `real`,
              realWorldExample: `Phones away, real talk, mutual listening, both feel better. Real connection.`,
              explanation: `Pure real connection. Both kids are present, the conversation is mutual, real listening happens, honesty is allowed, and both leave feeling better, more energized, more themselves. This is exactly the kind of connection that feeds biological wellness needs. Even one conversation like this measurably improves mood, stress hormones, and immune function. The model of what to build more of in your life.`,
            },
            {
              id: `case-2`,
              caseTitle: `Connection #2`,
              clues: [
                { text: `Two kids "hang out" at a sleepover, both on their phones almost the entire time.` },
                { text: `They occasionally show each other videos, but don't really talk much.` },
                { text: `When the sleepover ends, both kids feel kind of empty, even though they "hung out."` },
              ],
              correctAnswer: `surface`,
              realWorldExample: `Together but on phones, barely talking, empty feeling afterward. Surface connection.`,
              explanation: `Pure surface connection. They were physically together for hours, but the phones absorbed both of their attention. Real listening, honesty, and presence didn't happen. The "empty" feeling afterward is the giveaway, surface connection doesn't feed the biological need, even when you spent lots of time. This is one of the biggest modern social health problems, "togetherness" that isn't real. Solution: phones away for at least part of the time.`,
            },
            {
              id: `case-3`,
              caseTitle: `Connection #3`,
              clues: [
                { text: `A kid's "friend" frequently makes mean comments disguised as jokes.` },
                { text: `Each time the kid is around them, they leave feeling worse about themselves.` },
                { text: `The "friend" sometimes spreads rumors, then says "I was just kidding!" when called out.` },
              ],
              correctAnswer: `harmful`,
              realWorldExample: `Mean jokes, leaving worse, rumors, manipulation. Harmful, not real friendship.`,
              explanation: `Pure harmful connection. The patterns (mean comments, rumors, manipulation, leaving worse afterward) make this harmful, not real friendship. Researchers found chronic harmful relationships are worse for health than being alone. Solution: notice the pattern (you're already noticing if you read this!), talk to a trusted adult, set boundaries (Social Leadership L05), and protect your time and energy. Real friends don't consistently hurt you and dismiss it as joking.`,
            },
            {
              id: `case-4`,
              caseTitle: `Connection #4: The Tricky One`,
              clues: [
                { text: `A kid is part of a popular group of friends.` },
                { text: `They're always with the group, always invited to things, look very social from outside.` },
                { text: `But the group requires everyone to wear certain clothes, talk a certain way, and gossip about others. The kid feels they have to perform to belong.` },
              ],
              correctAnswer: `surface`,
              realWorldExample: `Popular group, lots of activity but performance required, can't be yourself. Surface, not real.`,
              explanation: `Tricky, {name}! It LOOKS like rich social life. Popular group, always invited, lots of activity. So you might call it real connection. But look closely. The kid has to PERFORM to belong. Can't be themselves. Requires certain clothes, certain talk, gossiping about others. Pure surface connection in disguise (the "popular" version). Lesson: being IN a group isn't the same as being CONNECTED with people in it. Popular ≠ real connection. Often the most "popular" kids are also the loneliest because surface group dynamics don't allow real authenticity. The fix: invest in a FEW real friendships (even outside the group) where you can be yourself. Real connection requires being honestly YOU. Performance, even in a popular group, doesn't feed your social health.`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `According to research, how IMPORTANT is real connection to your health?`,
              options: [
                `A nice extra`,
                `As IMPORTANT as sleep, food, and movement. A real biological need, with measurable effects on lifespan, immunity, mental health`,
                `Not important`,
                `Only matters for adults`,
              ],
              correctIndex: 1,
              explanation: `Real connection is as important to your health as sleep, food, and movement. An actual biological need. Researcher Julianne Holt-Lunstad found people with strong social connections live longer, have stronger immune systems, recover faster, have better mental health. The Surgeon General called loneliness a public health crisis as serious as smoking.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `What are the qualities of REAL CONNECTION?`,
              options: [
                `Lots of people, lots of time`,
                `Both PRESENT (not on phones), MUTUAL (both give and receive), real LISTENING, HONESTY allowed, leaves both feeling BETTER and more themselves`,
                `Always agreeing`,
                `Group chats`,
              ],
              correctIndex: 1,
              explanation: `Real connection: both people present (not on phones), mutual give-and-take, real listening, honesty allowed (not just polite), leaves both feeling better and more themselves. Quality matters far more than quantity. 3 real connections feed health more than 300 surface ones.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `What is SURFACE CONNECTION?`,
              options: [
                `Same as real`,
                `Looks like connection but distracted, performed, on phones, not really seeing each other. Doesn't feed the biological need even when lots of time is spent`,
                `Always bad`,
                `Only with strangers`,
              ],
              correctIndex: 1,
              explanation: `Surface connection looks like connection from outside but doesn't feed the biological need. Hanging out on phones. Big groups with no real conversation. Performing instead of being yourself. Not bad on its own, but if MOST of your connection is surface, you stay socially hungry.` },

            { id: `l14-q4`, format: `true-false`,
              question: `True or false: A kid with 300 social-media "friends" is socially healthier than a kid with 3 real close ones.`,
              correctAnswer: false,
              explanation: `False. Researchers found that kids with many social-media "friends" but few real connections often feel MORE lonely than kids with fewer total people but a few real ones. QUALITY matters far more than QUANTITY. 3 real connections feed health more than 300 surface ones.` },

            { id: `l14-q5`, format: `multiple-choice`,
              question: `What is HARMFUL CONNECTION?`,
              options: [
                `Normal friendship`,
                `Relationships that consistently put you down, drain energy, demand a lot, control, manipulate, gossip, treat cruelly. WORSE for health than being alone`,
                `Doesn't exist`,
                `Only in movies`,
              ],
              correctIndex: 1,
              explanation: `Harmful connection includes consistent put-downs, draining, manipulation, gossip, walking on eggshells. Researchers found chronic harmful relationships are WORSE for health than being alone. Your nervous system stays activated, stress hormones stay high, sleep and mood suffer. Real, measurable harm.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `What's the SINGLE biggest shift you can make to deepen modern connections?`,
              options: [
                `Have more parties`,
                `Put PHONES AWAY during real conversations. A 30-minute conversation without phones is more nourishing than 3 hours of "hanging out" with phones in hand`,
                `Buy more apps`,
                `Talk faster`,
              ],
              correctIndex: 1,
              explanation: `Put phones away during real conversations, the single biggest shift in modern connection. A 30-minute phone-free conversation is more nourishing than hours with phones in hand. Phones absorb attention that real connection requires. This one practice transforms social health.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `What's the BEST strategy for social wellness?`,
              options: [
                `Maximize total people`,
                `INVEST in 3-5 REAL relationships where you can be yourself. Be proactive about reaching out. Tend connections actively`,
                `Avoid all people`,
                `Only family matters`,
              ],
              correctIndex: 1,
              explanation: `Invest in 3-5 real relationships rather than chasing many surface ones. Identify the people who really know you (parents, siblings, best friend, close cousin, mentor) and prioritize time with them. Be proactive (reach out, initiate). Tend connections actively. Quality over quantity.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about connection?`,
              options: [
                `Connection doesn't matter`,
                `Your pack is ESSENTIAL to your wellness. Choose real over surface. Notice harmful patterns. Invest in the few who really know you. Be the kind of friend you'd want to have`,
                `Avoid all people`,
                `Be popular at all costs`,
              ],
              correctIndex: 1,
              explanation: `Your pack is essential to your wellness. Tend it carefully. Choose real over surface. Notice harmful patterns and address them. Invest in the few who really know you. Be the kind of friend, family member, and human you'd want to have. The kid who builds real connection skills early lives healthier and happier.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Take a warm breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Who are the 3-5 people who really know you? (Family, friends, mentors, anyone you feel really seen by.) List them and notice how that feels.` },
            { id: `r2`, text: `Looking honestly at your "connections," which are real (present, mutual, leave you better) and which are surface (distracted, performed, leave you empty)?` },
            { id: `r3`, text: `Is there any relationship in your life that consistently HURTS you? Be gentle in noticing. What might be the next kind step (talk to a trusted adult, set a boundary)?` },
            { id: `r4`, text: `What's ONE small thing you could do this week to deepen a real connection (a phone-free conversation, a reach-out, a real check-in)?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Social health research is some of the most powerful and consistent in modern wellness science. The Harvard Adult Development Study (the longest study of human well-being ever conducted, led by Robert Waldinger) found that the single strongest predictor of who would be healthy AND happy at age 80 was the quality of their close relationships, more important than wealth, fame, success, or even genes. Real connection isn't just nice. It's foundational. Terra's note: in a world growing more isolated, building skills for real connection is one of the most important wellness practices you can develop. The friends you make now, the family ties you tend now, the way you learn to be present with others, all of it shapes your whole life. Invest in your pack. Put your phone down sometimes. Listen deeply. Be the kind of person who FEEDS others' health by being a real connection for them. That's how the world actually heals, one real conversation at a time.`,
          familyAdventure: `Family Phone-Free Time. As a family, commit to ONE phone-free family time this week. Maybe dinner. Maybe a Saturday morning walk. Maybe an evening together. No phones for at least 30 minutes. See how it feels. Adults model it too. Many families report that even short phone-free moments dramatically deepen connection. You're building a family that practices real connection together, which is one of the greatest wellness gifts you can give each other.`,
          creativePrompt: {
            intro: `Write about your real connections — the people who really know you, and the kind of pack you want to build.`,
            floor: `Write at least 5 sentences. Name 2-3 people who really know you and what makes those connections real.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece about your social health and the connections you want to tend.`,
            open: `Write as much as you want. Write a full piece about your pack. Name the people who really know you, parents, siblings, best friend, close cousin, mentor, coach, grandparent. Describe what makes those connections REAL (present, mutual, honest, leave you better). Reflect honestly on the difference between real and surface connection in your life, and any patterns that need attention. Describe the kind of friend, family member, and human you want to be in others' lives. End with 1-2 specific commitments for tending your pack this month. Make it warm, specific, and grateful.`,
            frames: [
              `The people who really know me are ___.`,
              `What makes those connections real is ___.`,
              `One way I want to be in others' lives is ___.`,
              `A relationship I want to deepen is ___.`,
              `My specific commitments for tending my pack are ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Warm, deep work, {name}. You now understand one of the most important wellness truths there is, your PACK IS YOUR HEALTH. Real connection is biologically essential. You know the difference between real (present, mutual, honest, leaves you better), surface (distracted, performed), and harmful (drains, demeans). Invest in your few real ones. Put phones away. Be the friend you'd want to have. Next, we look honestly at three things that affect your energy and focus daily, SUGAR, CAFFEINE, and ENERGY. Real science, not fear-based, age-appropriate. SUGAR, CAFFEINE & ENERGY. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `pack-builder`,
          badgeName: `Pack Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L14 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
