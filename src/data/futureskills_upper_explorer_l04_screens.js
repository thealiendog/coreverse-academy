// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L04 — The Information Diet
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : information consumption research, attention economy critique,
//            algorithmic curation, the parallel between food diet and info
//            diet. Builds on L03 (spotting what's real) by asking what
//            you consume daily.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of building a healthy info diet)
// SCOPE: what you consume shapes who you become, algorithms ≠ truth,
//        social media business model, healthy info patterns, the practice
//        of curating your information environment
// VOICE: Byte = playful, slightly disruptive, knows how the game is rigged
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-04`,
      title: `The Information Diet`,
      duration: 18,
      xpReward: 75,
      badge: `info-curator`,
      badgeName: `Info Curator`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we explore an idea that changed how I think about my own mind — and will change yours too. You already know that the FOOD you eat shapes your body (Life Wellness L03). Here's the parallel truth most people miss: the INFORMATION you consume shapes your MIND. The videos you watch, the posts you scroll, the news you absorb, the conversations you join, ALL OF IT shapes how you think, what you believe, what you care about, even how you feel emotionally. You have an INFORMATION DIET, even if you've never thought of it that way. Today we look at yours — honestly — and learn to curate it like the careful fox you're becoming. Perk those ears, let's go.`,
          headline: `The Information Diet`,
          subtitle: `What you consume shapes who you become. Applied to information`,
          visual: `/ue-assets/fs/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What You Consume Shapes Who You Become`,
          paragraphs: [
            `Here's a parallel that's worth thinking about carefully. Your BODY is shaped by what you eat. Eat mostly real food, you tend toward steady energy and good health. Eat mostly junk, your body pays the price (Life Wellness L15!). Your MIND works the same way. The information you consume regularly shapes how you think, what you worry about, what you find interesting, even what you believe is normal. If you spend 4 hours a day scrolling drama-filled social media, your mind gets shaped by drama. If you spend 4 hours reading thoughtful books and watching educational content, your mind gets shaped by depth. Same brain, totally different shaping. The kid who never thinks about this gets shaped passively by whatever the algorithms push at them. The kid who thinks about it gets to CHOOSE.`,
            `Researchers studying media consumption have found that what kids watch and read regularly has measurable effects on attention spans, anxiety levels, what they value, what they fear, even on how they treat other people. This isn't theory, it's measurable. The good news: you have more control than you might think. You can choose your info diet, just like (with a bit more freedom) you can choose what you eat. Today, you start being intentional about it.`,
          ],
          image: `/ue-assets/fs/l04-s1-shapes.webp`,
          imageCaption: `Food shapes your body. Information shapes your mind. Same parallel. Same stakes.`,
          vocab: [
            { word: `information diet`,
              definition: `The full stream of information you consume daily — videos, posts, articles, news, conversations, everything. Like food, it shapes you. Research shows what kids consume regularly has measurable effects on attention, anxiety, values, and how they treat others. You have an info diet whether you think about it or not.`,
              audioPrompt: `Your information diet is the full stream of information you consume daily, {name}. Videos, posts, articles, news, conversations, everything. Like food, it shapes you. Your body is shaped by what you eat. Your mind is shaped by what you consume mentally. If you spend 4 hours a day scrolling drama-filled social media, your mind gets shaped by drama. If you spend 4 hours reading thoughtful books, your mind gets shaped by depth. Researchers have found measurable effects on attention spans, anxiety levels, values, even how kids treat each other.` },
            { word: `attention economy`,
              definition: `The business model of social media and entertainment companies that sell your ATTENTION to advertisers. They make money by capturing and holding your attention as long as possible — so feeds, notifications, and recommendations are all optimized to keep you scrolling longer. Your attention is the product. You are not the customer.`,
              audioPrompt: `The attention economy is the business model of social media and entertainment companies that sell your ATTENTION to advertisers, {name}. They make money by capturing and holding your attention as long as possible. Every feed, notification, and recommendation is optimized to keep you on the app longer, not to make you wiser. Your attention is the product. You are not the customer. Understanding this is the first step to being intentional about how you spend your attention rather than having it captured without knowing.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Algorithms Actually Work`,
          paragraphs: [
            `Here's something most kids and adults don't fully understand: the social media and video apps you use don't show you what's TRUE, or what's IMPORTANT, or what's GOOD FOR YOU. They show you what KEEPS YOU SCROLLING. That's how their business works. The companies make money when you stay on the app longer (more ads, more data). So they use ALGORITHMS, computer programs that watch what makes you stop scrolling, what makes you angry, what makes you compare yourself to others, and then show you MORE of that, because more of that means more time on the app.`,
            `This means the feed you see on social media isn't designed to make you a better thinker or a happier person. It's designed to make you stay. Research has found that algorithm-driven content tends to be MORE EMOTIONAL, more EXTREME, more DRAMATIC, and more DIVISIVE than reality actually is, because emotional content keeps people scrolling. People who consume a lot of algorithm-driven content often end up feeling more anxious, more divided from others, more comparing themselves to others, and more confused about what's actually true. This isn't because they're weak. It's because the system is DESIGNED to do that. Knowing this is the first step to taking back control. The algorithm isn't your friend. It's a profit machine that happens to know you really well.`,
          ],
          image: `/ue-assets/fs/l04-s2-algorithms.webp`,
          imageCaption: `Algorithms show what keeps you scrolling. Not what's true or good for you. Big difference.`,
          vocab: [
            { word: `algorithm-driven content`,
              definition: `Content shown to you by social media and video apps based on what KEEPS YOU SCROLLING, not what's true, important, or good for you. Tends to be more emotional, extreme, dramatic, and divisive than reality. Research shows it raises anxiety, comparison, and confusion. The algorithm is a profit machine, not your friend.`,
              audioPrompt: `Algorithm-driven content is what social media apps show you based on what keeps you scrolling, {name}. Not what's true, important, or good for you. Companies make money when you stay longer. So algorithms watch what makes you angry, what makes you compare yourself, then show more of that. The content tends to be more emotional, extreme, and divisive than reality. Research shows heavy consumers end up more anxious, more divided, more comparing. The algorithm is a profit machine, not your friend.` },
            { word: `echo chamber`,
              definition: `A situation where you only see information that agrees with what you already believe. Algorithms do this automatically by showing you content you engage with. Inside an echo chamber, views feel more confirmed and more extreme over time because you never encounter good challenges. Sharp thinkers deliberately seek out different angles and trustworthy sources that challenge their views.`,
              audioPrompt: `An echo chamber is a situation where you only see information that agrees with what you already believe, {name}. Algorithms do this automatically by showing you content you engage with. Inside an echo chamber, your views feel more confirmed and more extreme over time because you never encounter good challenges. Sharp thinkers deliberately seek out different angles and trustworthy sources that challenge their views. This keeps the mind sharp and prevents the rigid thinking trap. Disagreement, thoughtfully considered, is one of the best tools for growth.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Junk Info vs. Real Info`,
          paragraphs: [
            `Just like with food, information comes in roughly two categories. JUNK INFO is designed to grab your attention and keep it. It's emotional, dramatic, instantly satisfying, easy to consume, and leaves you feeling kind of empty afterward. Examples: most algorithm-driven social media feeds, drama-focused entertainment, gossip content, click-bait articles, endless short video scrolling. Junk info isn't necessarily BAD in small doses (a fun scroll can be fine sometimes). The problem is when it becomes most of what you consume. Like junk food, junk info hits hard, satisfies briefly, then leaves you craving more without nourishing your mind.`,
            `REAL INFO actually nourishes your thinking. Examples: books on topics you care about, long-form articles from trustworthy sources (L03!), documentaries, thoughtful conversations with people you respect, real journalism, podcasts that go deep, learning videos on actual subjects. Real info is often slower, less instantly satisfying, more effort to consume, BUT it leaves your mind STRONGER and more interesting over time. The kids and adults who consume mostly real info think more clearly, learn more, are less anxious, and develop into more interesting humans. The kids and adults who live on junk info often feel a low-grade fog they can't quite name. The fox-style move: junk in tiny portions, real info as the main course.`,
          ],
          image: `/ue-assets/fs/l04-s3-junk-real.webp`,
          imageCaption: `Junk info. Dramatic, easy, empty. Real info. Nourishing, slower, makes you stronger.`,
          vocab: [
            { word: `junk info vs. real info`,
              definition: `JUNK INFO is dramatic, easy, satisfying briefly, leaves you empty (algorithm-driven feeds, gossip, click-bait, endless short videos). REAL INFO nourishes thinking (books, long-form articles, documentaries, real journalism, thoughtful conversations). The parallel with food. Tiny portions of junk fine; real info as the main course.`,
              audioPrompt: `Junk info versus real info is the parallel with junk food versus real food, {name}. Junk info grabs attention and keeps it. Emotional, dramatic, instantly satisfying, leaves you empty. Examples: algorithm-driven feeds, drama entertainment, gossip, click-bait, endless short videos. Fine in small doses. Problem is when it becomes most of what you consume. Real info nourishes your thinking. Books, long-form articles, documentaries, thoughtful conversations, real journalism. Slower, more effort, but leaves your mind stronger and more interesting.` },
            { word: `deep reading`,
              definition: `The habit of reading long, complex material that requires focus and slow thinking, as opposed to scrolling short content. Research shows deep reading builds vocabulary, trains attention, grows empathy, and develops critical thinking in ways short-form content cannot. People who read deeply tend to think more clearly and more patiently. Books, long-form articles, and serious journalism are the main sources.`,
              audioPrompt: `Deep reading is the habit of reading long, complex material that requires focus and slow thinking, as opposed to scrolling short content, {name}. Research shows deep reading builds vocabulary, trains attention, grows empathy, and develops critical thinking in ways short-form content cannot. People who read deeply tend to think more clearly and more patiently. Books, long-form articles, and serious journalism are the main sources. Even a little deep reading every day adds up to a significantly sharper mind over months.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Curating Your Info Diet`,
          paragraphs: [
            `Here's the practical move. You can actually CURATE your information diet, just like you can curate your food. CURATE means "carefully choose and arrange," like a museum curator chooses art for an exhibit. You become the curator of your own mind. Cut down on the JUNK (less algorithm-driven scrolling, less drama content, less endless feeds). Add REAL info you actually care about (books on topics that fascinate you, long-form articles, documentaries, thoughtful YouTube channels, podcasts, conversations with smart people). Set LIMITS on the apps designed to capture your attention (most phones have screen-time settings; ask trusted adults if you want help setting them). Most kids who set limits report feeling more focused, less anxious, and like they have more time. That's because they DO have more time. Scrolling steals it.`,
            `One more important move: CHECK YOURSELF regularly. Once a month or so, take an honest look at your info diet. What are you consuming? How is it affecting your mood, attention, what you worry about, what you compare yourself to? If something is making you feel worse, you can stop consuming it. You're allowed to. You don't owe any app, account, or piece of content your attention. Byte's first teaching: what you consume shapes who you become. Your information diet matters as much as your food diet. The algorithm isn't your friend. Be the careful curator of your own mind. Junk in tiny portions, real info as the main course. Limits on attention-grabbing apps. Regular check-ins. The fox who curates carefully becomes the human with the clearest mind. That's a real superpower in this world.`,
          ],
          image: `/ue-assets/fs/l04-s4-curate.webp`,
          imageCaption: `Be the curator of your own mind. Cut junk. Add real. Set limits. Check yourself.`,
          vocab: [
            { word: `curating your mind`,
              definition: `The active practice of carefully choosing what you consume mentally, just like a museum curator chooses what's in an exhibit. Cut the junk (less algorithm scrolling, less drama content). Add real info (books, documentaries, thoughtful sources). Set limits on attention-grabbing apps. Check yourself monthly. You don't owe any content your attention.`,
              audioPrompt: `Curating your mind is the active practice of carefully choosing what you consume mentally, {name}. Just like a museum curator chooses what's in an exhibit. You become the curator of your own mind. Cut junk: algorithm-driven scrolling, drama content, endless feeds. Add real info: books, long-form articles, documentaries, thoughtful channels, podcasts. Set limits on apps designed to capture attention. Check yourself monthly: how is your diet affecting your mood and focus? You don't owe any app your attention. You can stop.` },
            { word: `screen-time intentionality`,
              definition: `The practice of deciding IN ADVANCE how you'll use your phone or device, rather than reacting to notifications and recommendations. Intentional use means setting a purpose before opening an app — am I doing something specific, or just scrolling? Research shows intentional screen users feel more satisfied and less anxious than reactive scrollers.`,
              audioPrompt: `Screen-time intentionality is the practice of deciding IN ADVANCE how you'll use your phone or device, rather than reacting to notifications and recommendations, {name}. Intentional use means setting a purpose before opening an app. Am I doing something specific? Or just scrolling? If scrolling, is this the best use of this time? Research shows people who use screens intentionally feel more satisfied and less anxious than those who scroll reactively. The difference isn't how much you use screens. It's whether you're driving or being driven.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the moves of building a healthy info diet in order, {name}. Here are five steps, from FIRST AWARENESS to ONGOING PRACTICE. Use the arrows to arrange them.`,
          items: [
            { id: `step-notice`,   label: `NOTICE WHAT YOU CONSUME. For one week, just pay attention. How much algorithm scrolling, drama content, real reading, conversations? No judgment, just awareness`,             position: 1 },
            { id: `step-cut-junk`, label: `CUT THE JUNK — less algorithm-driven scrolling, less drama content, less endless feeds; tiny portions of junk are fine, but it shouldn't be the main course`,              position: 2 },
            { id: `step-real`,     label: `CHOOSE REAL SOURCES. Books on topics you care about, long-form articles, documentaries, thoughtful channels, podcasts, real journalism (trustworthy sources from L03)`,         position: 3 },
            { id: `step-limits`,   label: `SET LIMITS on attention-grabbing apps. Screen-time settings, app limits, no-phone times. Trusted adults can help. The apps are designed to capture you, so design back`,        position: 4 },
            { id: `step-check`,    label: `CHECK YOURSELF REGULARLY — once a month, honestly review your info diet; how is it affecting your mood, attention, worries, comparisons? adjust as needed; you're the curator`,  position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the practice of curating your information diet — notice what you consume, cut the junk, choose real sources, set limits, and check yourself regularly. Most kids never think about this. You do now. Apply it across your whole life. Your mind will thank you.`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l04-q1`, format: `true-false`,
              question: `True or false: The information you consume daily SHAPES how you think, what you worry about, what you believe is normal.`,
              correctAnswer: true,
              explanation: `True. Just as the food you eat shapes your body, the information you consume regularly shapes your mind — how you think, what you worry about, what you find interesting, what you believe is normal. Researchers found measurable effects on attention, anxiety, values, and how kids treat others. Same brain, different shaping based on input.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What do ALGORITHMS on social media actually show you?`,
              options: [
                `What's true`,
                `What KEEPS YOU SCROLLING. Not what's true, important, or good for you. That's how the apps make money`,
                `What's important`,
                `What's good for you`,
              ],
              correctIndex: 1,
              explanation: `Algorithms show you what keeps you scrolling, not what's true, important, or good for you. The companies make money when you stay on the app longer (more ads, more data). Algorithms watch what makes you stop scrolling, what makes you angry, what makes you compare yourself, then show more of that.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What kind of content does algorithm-driven feeds tend to be?`,
              options: [
                `Calm and accurate`,
                `More EMOTIONAL, EXTREME, DRAMATIC, and DIVISIVE than reality actually is. Because emotional content keeps people scrolling`,
                `Random`,
                `Boring`,
              ],
              correctIndex: 1,
              explanation: `Algorithm-driven content is more emotional, extreme, dramatic, and divisive than reality, because emotional content keeps people scrolling. People who consume a lot end up feeling more anxious, more divided, more comparing themselves. The system is DESIGNED to do that. Knowing it is the first step.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `What is JUNK INFO?`,
              options: [
                `Books`,
                `Dramatic, easy, instantly satisfying, leaves you EMPTY — algorithm feeds, drama, gossip, click-bait, endless short videos; like junk food, tiny portions fine but shouldn't be the main course`,
                `Documentaries`,
                `Real journalism`,
              ],
              correctIndex: 1,
              explanation: `Junk info is dramatic, easy, instantly satisfying, leaves you empty afterward. Examples: algorithm-driven feeds, drama content, gossip, click-bait, endless short videos. Not necessarily bad in small doses, but the problem is when it becomes MOST of what you consume. Hits hard, satisfies briefly, leaves you craving more without nourishing your mind.` },

            { id: `l04-q5`, format: `multiple-choice`,
              question: `What is REAL INFO?`,
              options: [
                `Random content`,
                `Information that NOURISHES your thinking. Books on topics you care about, long-form articles, documentaries, real journalism, thoughtful conversations. Slower, more effort, but makes your mind STRONGER`,
                `Just news`,
                `Boring stuff`,
              ],
              correctIndex: 1,
              explanation: `Real info nourishes your thinking. Books, long-form articles from trustworthy sources, documentaries, thoughtful conversations, real journalism, podcasts that go deep, learning videos on actual subjects. Slower, less instantly satisfying, more effort, BUT leaves your mind stronger and more interesting over time.` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `What does it mean to CURATE your information diet?`,
              options: [
                `Random consumption`,
                `CAREFULLY CHOOSE what you consume mentally, like a museum curator chooses art. Cut junk, add real, set limits, check yourself regularly`,
                `Consume nothing`,
                `Trust algorithms`,
              ],
              correctIndex: 1,
              explanation: `Curate means "carefully choose and arrange," like a museum curator. You become the curator of your own mind. Cut down on junk (less algorithm scrolling). Add real info (books, documentaries). Set limits on attention-grabbing apps. Check yourself monthly. The fox who curates carefully becomes the human with the clearest mind.` },

            { id: `l04-q7`, format: `true-false`,
              question: `True or false: You OWE social media apps your attention, and you have to scroll whenever they show you content.`,
              correctAnswer: false,
              explanation: `False. You don't owe ANY app, account, or piece of content your attention. You can stop consuming things that make you feel worse. You can set limits. You can choose what's in your info diet. You're allowed to. Most kids who set limits report feeling more focused, less anxious, and like they have more time.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about the information diet?`,
              options: [
                `Consume everything`,
                `What you consume shapes who you become. Junk in tiny portions, real info as the main course. Limits on attention-grabbing apps. Regular check-ins. The careful curator becomes the human with the clearest mind`,
                `Stop reading`,
                `Trust algorithms`,
              ],
              correctIndex: 1,
              explanation: `What you consume shapes who you become. Your information diet matters as much as your food diet. The algorithm isn't your friend. Be the careful curator of your own mind. Junk in tiny portions, real info as the main course. Limits on attention-grabbing apps. Regular check-ins. That's a real superpower in this world.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Take an honest breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Honestly, what's your current info diet mostly made of? Algorithm-driven feeds? Real reading? Conversations? Don't judge, just notice.` },
            { id: `r2`, text: `Has algorithm-driven content ever made you feel worse (more anxious, comparing yourself, angry)? What did it cost you?` },
            { id: `r3`, text: `What's ONE topic you're genuinely curious about that you could feed with REAL info this month (a book, documentary, long-form article)?` },
            { id: `r4`, text: `What's one boundary you could set on attention-grabbing apps? (Time limits, app-free hours, specific times of day with no scrolling)` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Research on social media and information consumption has become some of the most important and discussed work in modern psychology. Studies on kids and teens have found that heavy consumption of algorithm-driven feeds correlates with increased anxiety, depression, attention problems, and body image issues. The Surgeon General Vivek Murthy has called for major reforms in how kids interact with social media because of these findings. The attention economy (the business model where apps make money by capturing your attention) is not designed with your wellness in mind. Byte's note: this is a hard one because the apps are designed to be hard to step back from. They use real psychological techniques to keep you scrolling. Knowing this isn't enough by itself — you have to actually take action, set limits, choose real info, check yourself regularly. The kid who learns to curate their information diet gets a real advantage in life — clearer thinking, calmer mind, more time, more depth. Most adults haven't figured this out. You can. Foxes don't follow whoever is loudest. They follow the real trails. Do the same with information.`,
          familyAdventure: `Family Info Diet Check. As a family, each person spends one day (just one) honestly noticing what they consume. What apps, what shows, what scrolling, what reading. Then come together and share. No judgment, just honest noticing. Talk about what felt nourishing vs. what felt junky. Decide together if there are any small family experiments worth trying (no-phone meals, screen-time limits, family reading time, an algorithm-free hour daily). Adults model it too. Doing this together helps everyone, and creates a family culture of being thoughtful about media consumption.`,
          creativePrompt: {
            intro: `Write about your current information diet and the curator you want to become.`,
            floor: `Write at least 5 sentences. Describe what you consume and one shift you want to make.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on curating your mind.`,
            open: `Write as much as you want. Write a full honest piece about your information diet. Describe what you currently consume — what apps, what kind of content, how much time, what you read or watch. Reflect honestly on how it affects you — your mood, your attention, your anxiety, what you compare yourself to, what you worry about. Describe what you've learned about algorithms (they show you what keeps you scrolling, not what's true). Describe the curator of your own mind you want to become — what real info you'll add (specific books, documentaries, channels, podcasts), what junk you'll cut, what limits you'll set. End with specific commitments for the next month. Make it honest, kind, and forward-looking.`,
            frames: [
              `My current info diet is mostly ___.`,
              `How it affects my mood and thinking is ___.`,
              `Real info I want to add includes ___.`,
              `Junk I want to cut includes ___.`,
              `Limits I'll set are ___.`,
              `My specific commitments this month are ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Sharp, honest work, {name}! You now understand one of the most important truths of modern life. What you consume shapes who you become, and you have an information diet whether you've thought about it or not. Algorithms aren't your friends. Be the careful curator of your own mind. Junk in tiny portions, real info as the main course. Set limits. Check yourself. Next, we tackle one of the biggest topics of your whole generation — AI: WHAT IT ACTUALLY IS. Honest, age-appropriate, neither hype nor fear. Sharpen your ears, and I'll see you there. — Byte.`,
          badge: `info-curator`,
          badgeName: `Info Curator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L04;
