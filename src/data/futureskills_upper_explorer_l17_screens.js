// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L17 — The Ethics of Tech
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : practical tech ethics for kids — the user/used distinction,
//            privacy, honesty online, sharing others' content/info,
//            the "what if everyone did this?" test (Kant's universal law
//            simplified), respecting others' boundaries online. Builds
//            on Social Leadership (character) and connects to L05-L07
//            (AI literacy).
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (ethical / gray / clearly wrong)
//            Trick case = "everyone does it" defense which doesn't actually
//            make something ethical.
// SCOPE: are you the USER or the USED?; privacy as a value; honest
//        online behavior; what about other people in your content?;
//        AI ethics in daily life; the universal test
// VOICE: Byte = thoughtful, not preachy, treats ethics as practical wisdom
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-17`,
      title: `The Ethics of Tech`,
      duration: 18,
      xpReward: 75,
      badge: `tech-ethicist`,
      badgeName: `Tech Ethicist`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we tackle one of the most important and least-taught topics of your generation: TECH ETHICS. Tech isn't neutral. Every choice you make online and with tech, what you share, what you click, what you say, what apps you use, how you treat other people, has ethical weight. The kids who think clearly about tech choices avoid harming themselves and others. The kids who don't often cause real damage (sometimes to themselves, sometimes to friends, sometimes to strangers) without meaning to. Today, you build practical tech ethics. Not preachy. Not scary. Just real wisdom. Let's go.`,
          headline: `The Ethics of Tech`,
          subtitle: `Tech isn't neutral — every choice has ethical weight; practical wisdom for daily decisions`,
          visual: `/ue-assets/fs/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Are You the User, or Are You Being Used?`,
          paragraphs: [
            `Here's a clarifying question to ask about any tech product or app you use. AM I THE USER, or AM I BEING USED? When you USE a tech tool to do something YOU want to do (write, learn, create, talk to people you love), you're the user. The tool serves you. When the tool is designed to capture as much of your TIME, ATTENTION, and DATA as possible, often without you noticing, you're being USED. Many of the most popular apps fall into the second category. They look "free" but you pay with your attention and data. Researchers studying tech design have a saying, "If you're not paying for the product, you ARE the product." This isn't paranoid; it's how a lot of modern tech actually works.`,
            `This doesn't mean ALL "free" apps are bad, some are genuinely useful and respect your autonomy. But it means PAY ATTENTION to which apps treat you as a user and which treat you as a resource. The signs of being USED: endless scrolling designed to keep you, notifications interrupting deep work (L10!), ads showing things you don't need, content algorithms feeding you whatever keeps you engaged regardless of whether it's good for you. The signs of being a USER: you finish what you came for and stop, the tool serves a clear goal you have, you control when and how you use it. The fox-style move: notice which tools treat you which way. Use the ones that treat you as a user. Limit the ones that use you.`,
          ],
          image: `/ue-assets/fs/l17-s1-user.webp`,
          imageCaption: `Are you the user or being used? Tools that serve you vs. tools designed to capture your time/attention.`,
          vocab: [
            { word: `user vs. used`,
              definition: `The clarifying question for any tech product. Am I the USER (the tool serves my goal, I control it, I leave when done) or am I BEING USED (designed to capture my time, attention, data)? Many popular "free" apps treat you as the product. "If you're not paying for the product, you ARE the product." Notice which tools treat you which way.`,
              audioPrompt: `User versus used is a clarifying question for any tech product or app, {name}. When you use a tech tool to do something you want to do, write, learn, create, talk to people you love, you're the user. The tool serves you. When the tool is designed to capture as much of your time, attention, and data as possible, often without you noticing, you're being used. Researchers have a saying. If you're not paying for the product, you are the product.` },
            { word: `attention economy`,
              definition: `The system where companies compete for your attention as their most valuable resource. Instead of selling you a product for money, many apps sell your attention to advertisers. The more time you spend, the more money they make. Endless scrolling, notifications, recommendations — all designed to keep you watching. Understanding this helps you recognize when you're being used instead of being a user.`,
              audioPrompt: `The attention economy is the system where companies compete for your attention as their most valuable resource, {name}. Instead of selling you a product for money, many apps sell your attention to advertisers. The more time you spend, the more money they make. This is why apps are designed to be as engaging as possible, endless scrolling, notifications, recommendations that keep you watching. Understanding the attention economy helps you recognize when you're being used instead of being a user.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Privacy Is a Value Worth Protecting`,
          paragraphs: [
            `Some kids hear "privacy" and think "what do I have to hide?" That's the wrong frame. PRIVACY isn't about hiding wrong things. It's about CONTROL over your own life and information. Researchers studying privacy have found that even when people have nothing illegal or shameful to hide, having privacy makes them more honest, more creative, and more themselves. When you're being watched constantly (or feel like you are), you perform instead of being real. Privacy lets you be REAL. Same for your data, even when you're doing nothing wrong, having your information collected, stored, sold, and used to predict and influence you isn't neutral.`,
            `Practical privacy moves at your age. Don't share full identifying information (your full address, your school, your daily schedule) on public platforms. Be careful what you post about yourself, things you put online tend to stay there longer than you expect, and the kid you are at 10 isn't the same person you'll be at 16 or 25. Don't share OTHER PEOPLE'S private info or photos without their permission (more on this in section 3). Ask trusted adults about app permissions, what is this app asking for? Why? Use strong unique passwords (or a password manager when older). Privacy isn't paranoia; it's self-respect AND respect for others. Foxes have always been careful about leaving fewer tracks. You can be too.`,
          ],
          image: `/ue-assets/fs/l17-s2-privacy.webp`,
          imageCaption: `Privacy isn't hiding wrong things. It's control over your own life. Lets you be real, not performing.`,
          vocab: [
            { word: `privacy as a value`,
              definition: `The understanding that privacy isn't about hiding wrong things, it's about CONTROL over your own life and information. Even with nothing illegal to hide, privacy makes people more honest, creative, and real. Practical moves, don't share full identifying info publicly, be careful what you post, protect passwords, respect others' privacy too.`,
              audioPrompt: `Privacy as a value is the understanding that privacy isn't about hiding wrong things, it's about control over your own life and information, {name}. Some kids hear privacy and think what do I have to hide. That's the wrong frame. Researchers found that even when people have nothing illegal or shameful to hide, having privacy makes them more honest, more creative, and more themselves. When you're being watched constantly, you perform instead of being real. Privacy lets you be real.` },
            { word: `data footprint`,
              definition: `The trail of information you leave behind whenever you use technology. Every app you open, every search you make, every post you like creates data about you. Companies collect this data, store it, analyze it, and often sell it to advertisers. Your data footprint can last for years. Be thoughtful about which apps you use and what permissions you give.`,
              audioPrompt: `A data footprint is the trail of information you leave behind whenever you use technology, {name}. Every app you open, every search you make, every post you like, every website you visit creates data about you. Companies collect this data, store it, analyze it, and often sell it to advertisers. Your data footprint can last for years. This is why what you share online matters even when it feels small or temporary. Practical wisdom: be thoughtful about which apps you use and what permissions you give.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Other People in Your Content`,
          paragraphs: [
            `Here's the topic almost no one talks about with kids your age, and it matters. When you share content (photos, videos, conversations, anything), OTHER PEOPLE are often in it. They have rights too. The ethics question: did THEY agree to this being shared? A photo of you and your friend, both of you should agree before it's posted. A funny clip of your sibling, did they want that public? A screenshot of someone's text message, do they know you're sharing it? Researchers and ethicists studying online behavior have found that one of the most common harms to kids is content posted about them by family or friends WITHOUT THEIR CONSENT. Once it's online, it's hard to take back.`,
            `The kindest, most ethical practice. ASK before posting anything that includes another person. "Is it cool if I post this?" If they say no or seem unsure, don't post it. This goes for siblings, friends, classmates, family. Also, don't share private conversations, screenshots, or messages without permission, your friend trusted you with that. Don't post embarrassing content about people you're mad at (which is bullying, even if it feels deserved). And here's a deeper one, if someone asks you to take something down about them, take it down. Their feelings matter more than your post. The fox-style move: treat others' privacy with the same care you want for your own. The world has WAY more kindness if we all do this.`,
          ],
          image: `/ue-assets/fs/l17-s3-others.webp`,
          imageCaption: `Others have privacy too. Ask before posting. If they say no, don't. Take it down if they ask.`,
          vocab: [
            { word: `consent in sharing`,
              definition: `The practice of asking before posting content that includes other people. Their face, their conversation, their text, their moment. ASK first. If they say no or seem unsure, don't post. If they ask you to take it down later, take it down. One of the most common online harms to kids is content posted about them without consent.`,
              audioPrompt: `Consent in sharing is the practice of asking before posting content that includes other people, {name}. When you share content, photos, videos, conversations, other people are often in it. They have rights too. The ethics question, did they agree to this being shared? A photo of you and your friend, both should agree before it's posted. A funny clip of your sibling, did they want that public? Researchers found one of the most common online harms to kids is content posted about them by family or friends without their consent.` },
            { word: `digital consent`,
              definition: `Getting permission before sharing anything about another person online — photos, videos, screenshots, messages, conversations. The key question: did they agree to this being shared? Ask first. If they say no, don't. If they ask you to take it down later, take it down immediately. One of the most basic acts of digital respect.`,
              audioPrompt: `Digital consent is the practice of getting permission before sharing anything about another person online, {name}. It applies to photos, videos, screenshots, messages, conversations, anything that involves someone else. The key question: did they agree to this being shared? Getting consent is simple. Ask. Is it okay if I post this? Is it okay if I share this? If they say yes, proceed. If they say no or seem unsure, don't. If they ask you to take it down later, take it down immediately.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The "What If Everyone Did This?" Test`,
          paragraphs: [
            `Here's a thinking tool philosophers have used for centuries, simplified for tech ethics. Before making a tech choice, ask yourself: "WHAT IF EVERYONE did this?" If you're thinking about pirating a movie, "what if everyone pirated movies?" (creators couldn't survive). If you're thinking about posting an embarrassing photo of a friend, "what if everyone did that to their friends?" (no one would trust each other). If you're considering writing a fake angry review of a place, "what if everyone faked reviews?" (you couldn't trust any reviews). This test is called UNIVERSAL THINKING (Kant's categorical imperative simplified), and it cuts through "but I'm only one person" excuses fast.`,
            `This test also catches the "everyone does it" trap. Just because lots of people DO something doesn't make it ethical. Lots of kids talk badly about classmates online; doesn't make it right. Lots of people pirate things; doesn't mean it's fine. The universal test asks, would the WORLD be GOOD if everyone did this? If yes, you're probably fine. If no, you're part of a problem even if just barely. Byte's first teaching: tech isn't neutral; every choice has ethical weight. Ask if you're the USER or being USED. Protect your privacy AND others'. Get consent before sharing about other people. Use the universal test for hard choices. Tech ethics isn't about being perfect, it's about being THOUGHTFUL. Foxes have always thought before they pounced. Be one of those thoughtful ones in a world full of careless tech use.`,
          ],
          image: `/ue-assets/fs/l17-s4-universal.webp`,
          imageCaption: `"What if everyone did this?" Universal test for ethical choices. Cuts through "but I'm only one person."`,
          vocab: [
            { word: `universal test`,
              definition: `A thinking tool. Before making a tech choice, ask "what if EVERYONE did this?" If the result would be bad for the world, you're probably part of a problem (even just barely). Cuts through "but I'm only one person" and "everyone does it" excuses. Kant's categorical imperative simplified. Useful for hard tech ethics calls.`,
              audioPrompt: `The universal test is a thinking tool philosophers have used for centuries, simplified for tech ethics, {name}. Before making a tech choice, ask, what if everyone did this? If you're thinking about pirating a movie, what if everyone pirated movies? Creators couldn't survive. If you're thinking about posting an embarrassing photo of a friend, what if everyone did that? No one would trust each other. The test cuts through but I'm only one person excuses. Would the world be good if everyone did this?` },
            { word: `ethical reasoning`,
              definition: `The practice of thinking carefully about what's actually RIGHT, not just what's allowed or easy. Different from following rules — it asks deeper questions. How would I feel if someone did this to me? Does this respect the other person's rights? The universal test is one tool. Building this habit takes practice, but the pause before acting is the simple starting point.`,
              audioPrompt: `Ethical reasoning is the practice of thinking carefully about the right thing to do, not just the easy thing, {name}. It's different from following rules. Rules tell you what's allowed. Ethical reasoning asks what's actually right. The universal test is one tool. How would I feel if someone did this to me? Would I be comfortable if everyone I respect could see this choice? Does this respect the other person's rights? Building ethical reasoning takes practice, but the habit is simple. Before any significant tech choice, pause and ask.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four tech choices. Classify each: ETHICAL CHOICE (respectful, honest, universal test passes), MORALLY GRAY (depends on context, needs more thought), or CLEARLY WRONG (deception, manipulation, harm to others)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `ethical`,  label: `Ethical Choice`,  color: `#34D399`, description: `Respectful, honest, considers others, passes the "what if everyone did this?" test. Clearly fine.` },
            { id: `gray`,     label: `Morally Gray`,     color: `#FBBF24`, description: `Depends on context. Needs more thought. Could be okay with right intention OR could cause harm. Not clear-cut.` },
            { id: `wrong`,    label: `Clearly Wrong`,    color: `#F87171`, description: `Deception, manipulation, harm to others, violation of consent. Not okay regardless of "everyone does it."` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Tech Choice #1`,
              clues: [
                { text: `A kid wants to post a photo of themselves and a friend together at a birthday party.` },
                { text: `Before posting, they ask the friend: "Is it cool if I share this?"` },
                { text: `The friend says yes. The kid posts.` },
              ],
              correctAnswer: `ethical`,
              realWorldExample: `Asking before posting, getting consent, posting. Clearly ethical sharing.`,
              explanation: `Pure ethical choice. The kid did the most basic ethical move, ASKED before sharing content that included another person. The friend got to choose. Both are now comfortable with the post. This is exactly how online sharing should work, with consent. It takes 5 seconds and protects both the relationship AND each person's autonomy. If everyone did this, the world would have way less online conflict and hurt.`,
            },
            {
              id: `case-2`,
              caseTitle: `Tech Choice #2`,
              clues: [
                { text: `A kid takes a funny clip of their sibling making a weird face at dinner.` },
                { text: `Without asking, they post it to a group chat with their friends.` },
                { text: `The sibling finds out later and feels humiliated. Friends keep referencing the clip for weeks.` },
              ],
              correctAnswer: `wrong`,
              realWorldExample: `No consent, content about someone else, lasting embarrassment. Clearly wrong.`,
              explanation: `Pure clearly wrong. The sibling didn't agree to be shared. The clip went to others who keep referencing it, causing ongoing embarrassment. This is one of the most common ethical harms among siblings and friends, sharing content about people without consent. The kid probably didn't MEAN to harm. Doesn't matter, the harm happened. The fix: always ask first. Then if they say no, accept it. The sibling's feelings matter way more than the laugh in the group chat.`,
            },
            {
              id: `case-3`,
              caseTitle: `Tech Choice #3`,
              clues: [
                { text: `A kid finds out a friend is being talked badly about in another chat.` },
                { text: `They take screenshots and send them to the friend so the friend knows what's being said.` },
                { text: `Their intention is to protect the friend.` },
              ],
              correctAnswer: `gray`,
              realWorldExample: `Sharing screenshots without consent, good intention, complicated outcomes. Morally gray.`,
              explanation: `Morally gray. The kid's INTENTION was protective (help a friend know what's being said about them). But they shared screenshots from a chat without the chat members' consent. AND the screenshots might escalate the situation, hurt the friend more, or violate the friend's ability to choose how to learn the news. This is a real ethical complication. Not clearly right, not clearly wrong, depends on context. Better approach: tell the friend in person that something's being said, let them decide if they want details. Or tell a trusted adult who can help. Many "I was trying to help" situations turn out gray. Think carefully.`,
            },
            {
              id: `case-4`,
              caseTitle: `Tech Choice #4: The Tricky One`,
              clues: [
                { text: `A kid downloads a movie illegally because "everyone does it" and "the company is rich anyway."` },
                { text: `They reason: "What harm does one download do? The company won't notice."` },
                { text: `Plus, all their friends share downloads with each other.` },
              ],
              correctAnswer: `wrong`,
              realWorldExample: `Universal test fails, "everyone does it" trap, creators harmed. Clearly wrong.`,
              explanation: `Tricky, {name}! The kid's reasoning ("everyone does it," "they're rich," "one download doesn't hurt") sounds plausible. So you might call this morally gray. But apply the universal test, "what if EVERYONE downloaded movies illegally?" Creators couldn't make a living making movies. The whole system would collapse, no more movies, music, books, games made by people earning a living. The "everyone does it" defense is exactly what the universal test exposes. Pure clearly wrong. Lesson: just because something feels victimless ("the company won't notice") doesn't make it ethical when you apply the universal test. Real foxes ask, what would the world look like if everyone did this? If you don't want to live in that world, don't do the thing.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l17-q1`, format: `true-false`,
              question: `True or false: Tech is NEUTRAL — there's no ethical weight to tech choices.`,
              correctAnswer: false,
              explanation: `False. Tech isn't neutral; every choice has ethical weight. What you share, what you click, what apps you use, how you treat others online, all have real impact. The kids who think clearly about tech choices avoid harming themselves and others. The kids who don't often cause real damage without meaning to.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `What does "USER vs. USED" mean for tech?`,
              options: [
                `All apps are equal`,
                `Am I the USER (tool serves my goal, I control it) or am I BEING USED (designed to capture my time/attention/data)? — "If you're not paying for the product, you ARE the product"`,
                `Random distinction`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `User vs. used is the clarifying question for any tech product. Am I the USER (tool serves my goal, I control it, leave when done) or BEING USED (designed to capture my time, attention, data)? "If you're not paying for the product, you ARE the product." Notice which tools treat you which way.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `What is PRIVACY really about?`,
              options: [
                `Hiding wrong things`,
                `CONTROL over your own life and information. Even with nothing to hide, privacy makes people more honest, creative, and REAL (instead of performing)`,
                `Being suspicious`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Privacy isn't about hiding wrong things. It's about CONTROL over your own life and information. Researchers found even when people have nothing illegal to hide, privacy makes them more honest, creative, and themselves. When watched constantly, you perform instead of being real. Privacy lets you be real. Self-respect, not paranoia.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `What should you do before posting content that INCLUDES OTHER PEOPLE?`,
              options: [
                `Just post it`,
                `ASK FIRST — "Is it cool if I post this?" If they say no or seem unsure, don't post; if they later ask you to take it down, take it down`,
                `Post if it's funny`,
                `Decide for them`,
              ],
              correctIndex: 1,
              explanation: `Ask before posting content that includes another person. Their face, conversation, screenshot, moment. "Is it cool if I post this?" If they say no or seem unsure, don't post. If they later ask you to take it down, take it down. One of the most common online harms to kids is content posted about them by family or friends without consent.` },

            { id: `l17-q5`, format: `multiple-choice`,
              question: `What is the UNIVERSAL TEST?`,
              options: [
                `Random question`,
                `"WHAT IF EVERYONE DID THIS?" — if the result would be bad for the world, you're probably part of a problem; cuts through "I'm only one person" and "everyone does it" excuses`,
                `What's legal`,
                `What feels good`,
              ],
              correctIndex: 1,
              explanation: `The universal test is "what if everyone did this?" If pirating a movie: "what if everyone did?" (creators couldn't survive). If posting an embarrassing photo: "what if everyone did that to friends?" (no one would trust each other). Cuts through "I'm only one person" and "everyone does it" excuses. Kant's categorical imperative simplified.` },

            { id: `l17-q6`, format: `true-false`,
              question: `True or false: If LOTS of people do something online, that makes it ethical.`,
              correctAnswer: false,
              explanation: `False. Just because lots of people DO something doesn't make it ethical. Lots of kids talk badly about classmates online; doesn't make it right. Lots of people pirate things; doesn't make it fine. The universal test asks would the WORLD be GOOD if everyone did this? Not whether some people do.` },

            { id: `l17-q7`, format: `multiple-choice`,
              question: `What is the protective practice with PRIVATE conversations and screenshots?`,
              options: [
                `Share freely`,
                `Don't share private conversations, screenshots, or messages without permission — your friend TRUSTED you with that; don't post embarrassing content about people, even when mad`,
                `Random sharing`,
                `Always share`,
              ],
              correctIndex: 1,
              explanation: `Don't share private conversations, screenshots, or messages without permission. Your friend TRUSTED you with that. Don't post embarrassing content about people you're mad at (which is bullying, even if it feels deserved). Treat others' privacy with the same care you want for your own. The world has way more kindness if everyone does this.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about tech ethics?`,
              options: [
                `Tech is neutral`,
                `Tech isn't neutral; every choice has ethical weight. Ask USER or USED. Protect YOUR privacy AND others'. Get consent. Use the universal test. Be THOUGHTFUL`,
                `Just don't use tech`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Tech isn't neutral; every choice has ethical weight. Ask if you're the user or being used. Protect your privacy AND others'. Get consent before sharing about other people. Use the universal test for hard choices. Tech ethics isn't about being perfect, it's about being THOUGHTFUL. Be one of the thoughtful ones in a world full of careless tech use.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Look at the apps you use most. Which treat you as the USER (serve your goal, you control it)? Which treat you as USED (designed to capture your time/attention)?` },
            { id: `r2`, text: `Have you ever posted content about another person without asking them? Looking back, how do you feel about it? What would you do differently?` },
            { id: `r3`, text: `Has someone posted content about YOU without asking? How did it feel? What does that tell you about how you want to treat others?` },
            { id: `r4`, text: `Apply the universal test to ONE tech habit of yours: "What if everyone did this?" Would the world be good? Notice what you learn.` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Tech ethics has become one of the most important emerging fields of our time. Companies, researchers, governments, and educators are racing to figure out the ethics of new tech (AI, social media, surveillance, deepfakes) as it develops. The principles you've learned today, user vs. used distinction, privacy as a value, consent in sharing, the universal test, are the same principles that ethicists, philosophers, and good tech designers actually use. They're not made up for kids. They're the real frameworks. Byte's note: you're going to make thousands of small tech choices throughout your life. Each one is a chance to be thoughtful or careless. The kids who build ethical thinking early become the adults whose tech use makes the world slightly better, instead of slightly worse, every day. Foxes have always been thoughtful predators, choosing carefully when and what to act on. Be a thoughtful tech user. The world has plenty of careless ones.`,
          familyAdventure: `Family Tech Ethics Talk. As a family, sit down and talk about your tech habits this week. Ask: For each app we use most, are we users or being used? What's our family policy on posting content with each other's faces or names? Do we ask each other for consent? What would the universal test say about our family's most common tech habits? Adults model honest reflection. Building these conversations into family life shapes how everyone uses tech for the long term. Many families find their first ethics conversation changes their whole digital culture.`,
          creativePrompt: {
            intro: `Write your personal Tech Ethics Code — your principles for thoughtful tech use.`,
            floor: `Write at least 5 sentences. Name 2-3 ethical practices you'll commit to.`,
            stretch: `Write 8 to 10 sentences. Build a fuller code.`,
            open: `Write as much as you want. Write your personal TECH ETHICS CODE. Start by reflecting on whether you think of yourself as a thoughtful tech user or a careless one (be honest, no judgment). List the apps you use most and classify each as USER or BEING USED. State your personal PRIVACY commitments (what you will and won't share publicly, what you'll protect). State your CONSENT commitment (asking before posting about others, taking things down when asked). Identify ONE tech habit you want to apply the UNIVERSAL TEST to and what you'll change as a result. Describe the kind of online presence you want to have, what feeling you want to leave when you post or comment. End with a commitment to being a thoughtful tech user in a world full of careless ones. Make it specific and grounded.`,
            frames: [
              `Honestly, my current tech use is mostly ___.`,
              `Apps that treat me as USER: ___.`,
              `Apps that treat me as USED: ___.`,
              `My privacy commitments: ___.`,
              `My consent commitment: ___.`,
              `Universal test applied: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Thoughtful, wise work, {name}! You now have a real ethics toolkit for the tech-saturated life you're growing into. User vs. used. Privacy as control. Consent in sharing. The universal test. Use these for every tech choice you make. Most adults haven't built this either. You'll be one of the thoughtful ones. Next, we tackle a truth about life that's only becoming more true, EVERYTHING CHANGES. School, friends, tech, family, the world itself. The skill of adapting well to change is one of the most important you'll ever build. ADAPTING TO CHANGE. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `tech-ethicist`,
          badgeName: `Tech Ethicist`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L17;
