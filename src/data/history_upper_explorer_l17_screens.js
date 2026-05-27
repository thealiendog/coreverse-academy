// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L17 — The Digital Revolution
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what the Digital Revolution is, computers,
//        internet, smartphones and AI, costs and benefits
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-17`,
      title: `The Digital Revolution`,
      duration: 18,
      xpReward: 75,
      badge: `digital-historian`,
      badgeName: `Digital Historian`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Today we cover a revolution YOU are still living through. The DIGITAL REVOLUTION. In just about 60 years, humans went from computers the size of rooms to computers in our pockets. The internet now connects nearly half the planet. Smartphones have changed how families communicate, how shops work, how people fall in love, how news spreads, and how kids learn. We'll trace how it all happened and think honestly about both the gifts and the costs. Let's go.`,
          headline: `The Digital Revolution`,
          subtitle: `The transformation you're still living through`,
          visual: `/ue-assets/history/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Digital Revolution Is`,
          paragraphs: [
            `The DIGITAL REVOLUTION is the period since about 1950 when COMPUTERS, the INTERNET, and other electronic technology have transformed how humans live, work, and connect. Some historians compare it to the Agricultural Revolution and the Industrial Revolution we covered earlier. It might be the biggest transformation in human life since farming was invented 12,000 years ago.`,
            `What makes it different from earlier revolutions is the SPEED. The Industrial Revolution took about 200 years to change daily life. The Digital Revolution has done arguably more in about 60. Your great-grandparents probably grew up without computers in homes. Your grandparents probably didn't have internet until they were adults. Your parents may have grown up using flip phones. You're growing up with smartphones, social media, and AI that can write essays. Four generations, four completely different worlds.`,
          ],
          image: `/ue-assets/history/l17-s1-overview.webp`,
          imageCaption: `Computers, internet, smartphones, AI. The fastest transformation in human history.`,
          vocab: [
            { word: `Digital Revolution`,
              definition: `The period since about 1950 when computers, the internet, and other electronic technology have transformed how humans live, work, and connect. Still ongoing.`,
              audioPrompt: `The Digital Revolution is the period since about 1950, {name}. When computers, the internet, and other electronic technology have transformed how humans live, work, and connect. Some historians compare it to the Agricultural Revolution and the Industrial Revolution as one of the biggest changes in human history. What's different about it is the speed. Most major changes have taken hundreds of years. The Digital Revolution has done massive change in just decades. And it's still happening right now.` },
            { word: `computer`,
              definition: `An electronic device that processes and stores information and can perform many tasks. Computers transformed from room-sized machines in the 1940s to devices small enough to fit in your pocket.`,
              audioPrompt: `A computer is an electronic device that processes and stores information, {name}. The first electronic computers were built in the 1940s. They were huge, expensive, and could only do a few things. By the 1980s, personal computers had arrived in homes and businesses. Today, the phone in your pocket is millions of times more powerful than those early machines. Computers are now in cars, appliances, toys, medical devices, and almost every electronic product. They are the foundation of the entire Digital Revolution.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Computers and the Internet`,
          paragraphs: [
            `The first electronic COMPUTERS were built during World War II to crack enemy codes. Early computers were huge, slow, and expensive. ENIAC, built in 1945, weighed about 30 tons and filled a room. Over the following decades, computers got smaller and faster. By the 1980s, the PERSONAL COMPUTER had arrived. Companies like Apple, IBM, and Microsoft made computers small and cheap enough for homes and businesses. Word processing replaced typewriters. Spreadsheets revolutionized accounting. Video games became a major industry.`,
            `The INTERNET was originally a U.S. government research network in the 1960s. By the 1990s, it had grown into a global network linking computers around the world. The WORLD WIDE WEB, invented by Tim Berners-Lee in 1989, made the internet easy to use. Suddenly, anyone could publish information, read articles, send messages, and shop online. The internet now connects about 5 billion people, more than half the planet. Most of what you do on a phone or computer depends on it.`,
          ],
          image: `/ue-assets/history/l17-s2-computers.webp`,
          imageCaption: `From room-sized machines to global network. In about 50 years.`,
          vocab: [
            { word: `internet`,
              definition: `A global network that connects computers around the world, allowing them to share information almost instantly. Most modern digital life depends on it.`,
              audioPrompt: `The internet is a global network connecting computers around the world, {name}. It allows them to share information almost instantly. It started as a U.S. government research project in the 1960s. By the 1990s, the World Wide Web made it easy to use for regular people. Today about 5 billion people use the internet, more than half of all humans on Earth. Almost everything you do on a phone or computer depends on it. Email. Video calls. Streaming. Online shopping. Games. Search. All of it runs on the internet.` },
            { word: `World Wide Web`,
              definition: `The system of web pages and links that makes the internet easy to use and navigate. Invented by Tim Berners-Lee in 1989, it turned the internet from a research tool into something anyone could use.`,
              audioPrompt: `The World Wide Web is the system of web pages and links that makes the internet usable, {name}. Tim Berners-Lee invented it in 1989. Before the Web, the internet existed but was mostly used by researchers and military. The Web created a way to publish and navigate information through clickable links and pages. Once the Web arrived, anyone could put information online and anyone could access it. The Web turned the internet from a specialist tool into the backbone of modern life. Every website you visit is part of it.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Smartphones and AI`,
          paragraphs: [
            `In 2007, Apple released the iPhone. Within a decade, SMARTPHONES had transformed daily life across the world. Today's smartphones do things ENIAC's designers couldn't have imagined. They take photos, navigate roads, translate languages, play music, run apps, and connect to billions of other devices. Over 6 billion people now own smartphones. Even very poor countries have widespread mobile phone use.`,
            `Most recently, ARTIFICIAL INTELLIGENCE (AI) has made another huge leap. Computers can now write essays, generate images, hold conversations, drive cars, and beat humans at complex games like chess and Go. AI is being used to discover new medicines, analyze climate data, and translate languages in real time. AI is also raising serious questions about jobs (will it replace many human workers?), accuracy (it sometimes makes things up), and fairness (it can copy human prejudices in its training data). The AI boom is happening right now, while you're learning this lesson. The story is still being written.`,
          ],
          image: `/ue-assets/history/l17-s3-smartphone-ai.webp`,
          imageCaption: `Smartphones in everyone's pockets. AI that writes essays. The newest waves.`,
          vocab: [
            { word: `artificial intelligence`,
              definition: `Computer systems that perform tasks usually requiring human intelligence, like writing, decision-making, image recognition, or language translation. Sometimes called AI.`,
              audioPrompt: `Artificial intelligence, or AI, refers to computer systems that perform tasks usually requiring human intelligence, {name}. Writing essays. Recognizing images. Translating languages. Making decisions. AI has existed since the 1950s, but became dramatically more powerful starting around 2015. AI now writes, draws, and answers questions in ways that often surprise even the engineers who built it. It's also raising big questions about jobs, accuracy, and fairness. The AI revolution is still unfolding. You're living through it right now.` },
            { word: `smartphone`,
              definition: `A pocket-sized computer with internet access, a camera, and thousands of apps. Since the iPhone launched in 2007, smartphones have transformed communication, navigation, commerce, and daily life.`,
              audioPrompt: `A smartphone is a pocket-sized computer with internet access, a camera, and thousands of applications, {name}. The iPhone launched in 2007 and changed the world. Within a decade, over 6 billion people owned smartphones. They do things that room-sized computers from the 1950s couldn't dream of. Navigate any city. Translate any language. Connect instantly to anyone on Earth. Take photos and share them globally. Run apps for every imaginable purpose. Smartphones may be the most transformative single device in human history.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Real Costs and Lasting Benefits`,
          paragraphs: [
            `Digital technology has brought enormous benefits. Information is more accessible than ever. Communication across the world is nearly instant and free. Many medical advances would be impossible without computers. People can work from home, learn new skills online, and connect with others who share their interests anywhere on the planet. Whole industries (and many jobs) exist because of digital technology.`,
            `Digital technology also has real costs. SOCIAL MEDIA has been linked to rising mental health issues, especially in teens. Manipulation of online information has affected elections and public health. People spend large parts of their lives looking at screens, sometimes missing real-world relationships and physical activity. PRIVACY has been deeply eroded as tech companies collect huge amounts of data about everyone. Like every revolution we've studied, the Digital Revolution offers real progress AND real costs. The honest task isn't to celebrate or condemn the whole thing. It's to be thoughtful about which parts help and which parts harm, and to make wise choices.`,
          ],
          image: `/ue-assets/history/l17-s4-costs-benefits.webp`,
          imageCaption: `Real benefits. Real costs. The thoughtful question is which is which.`,
          vocab: [
            { word: `social media`,
              definition: `Online services that let people post content and connect with others. Examples include platforms for sharing photos, videos, and messages. Has reshaped how people communicate, but also raised concerns about mental health and misinformation.`,
              audioPrompt: `Social media is the set of online services that let people post content and connect with others, {name}. Social media has connected people across the world in ways earlier generations could only dream of. It's also been linked to rising mental health issues, especially in young people. Misinformation often spreads faster on social media than accurate news. The same tools that help families share photos can also spread harmful rumors at world-shaking speed. Like most digital technology, it's a tool that depends heavily on how it's used.` },
            { word: `privacy`,
              definition: `The right to control information about yourself and what others know about you. Digital technology has made privacy harder to protect as companies collect and store vast amounts of personal data.`,
              audioPrompt: `Privacy is the right to control information about yourself and what others can know about you, {name}. Digital technology has put privacy under serious pressure. Every time you use an app, search the internet, or buy something online, data about you is collected and stored. Tech companies use this data to target advertising, and it can sometimes be sold or hacked. Many people don't realize how much information about them exists in digital systems.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about the Digital Revolution. For each one, identify what it represents: BIG BENEFIT (something digital technology has genuinely improved), REAL COST (a real downside or harm), or MIXED OUTCOME (clearly both good AND bad)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `big-benefit`,    label: `Big Benefit`,    color: `#34D399`, description: `Something digital technology has genuinely improved for many people.` },
            { id: `real-cost`,      label: `Real Cost`,      color: `#F87171`, description: `A real downside or harm that digital technology has caused.` },
            { id: `mixed-outcome`,  label: `Mixed Outcome`,  color: `#FBBF24`, description: `Clearly both helpful AND harmful, depending on use.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `In 1990, less than 1% of the world had internet access.` },
                { text: `Today, over 5 billion people (more than half of all humans on Earth) use the internet.` },
                { text: `This includes access to information, education, communication, and tools that would have been impossible to reach a generation ago.` },
              ],
              correctAnswer: `big-benefit`,
              realWorldExample: `Internet access has expanded faster than any communication technology in history.`,
              explanation: `Massive expansion of access to information, education, and communication. This is clearly a big benefit for billions of people. Whatever you think about specific uses of the internet, the basic spread of access has improved lives at a scale unmatched by earlier technologies.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `Multiple studies have linked heavy social media use in teens to higher rates of anxiety, depression, and sleep problems.` },
                { text: `Comparison and bullying online can affect mental health.` },
                { text: `Many parents and schools are working on healthier social media practices.` },
              ],
              correctAnswer: `real-cost`,
              realWorldExample: `Teen mental health and social media research is one of the most active areas of current study.`,
              explanation: `Documented mental health impact. This is a real cost. The research is still developing and the connection is complicated, but the harm to many young people is real enough that it counts as a serious downside.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `Smartphones allow people to navigate any city, translate languages in real time, take photos and videos, and call family across the world.` },
                { text: `They also enable constant work emails, social media comparison, addictive games, and reduced face-to-face conversation.` },
                { text: `Most adults sleep with phones next to their beds. Many check them dozens of times a day.` },
              ],
              correctAnswer: `mixed-outcome`,
              realWorldExample: `Smartphones are the clearest example of digital technology with major benefits and major costs.`,
              explanation: `Real benefits (navigation, communication, photos, work) AND real costs (constant interruption, sleep disruption, addiction). Smartphones are the best example of a mixed outcome. They've genuinely improved daily life in many ways AND they've genuinely added stress and distraction.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `Artificial intelligence can now write essays, generate images, and translate languages at near-human levels.` },
                { text: `Doctors are using AI to spot diseases in scans. Scientists use AI to discover new medicines and analyze climate data.` },
                { text: `AI is also raising concerns about jobs being replaced, students using AI to cheat, and AI sometimes generating false information that sounds true.` },
              ],
              correctAnswer: `mixed-outcome`,
              realWorldExample: `AI is one of the most rapidly developing technologies in history.`,
              explanation: `Tricky because AI is brand new and still developing fast. Benefits and costs are both real and both rapidly growing. Helping doctors and scientists is genuinely huge. Risks around jobs, cheating, and false information are also genuinely serious. The lesson: brand new technologies often have unsettled mixed outcomes. The wise approach is to recognize both sides and make thoughtful choices about which to encourage and which to be careful about.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `When did the DIGITAL REVOLUTION begin?`,
              options: [
                `1700s`,
                `Around 1950, with the rise of electronic computers`,
                `2010`,
                `Last year`,
              ],
              correctIndex: 1,
              explanation: `The Digital Revolution began around 1950 with the rise of electronic computers. It's still ongoing. AI is just the latest wave of the same transformation.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `Why is the Digital Revolution sometimes compared to the Agricultural and Industrial Revolutions?`,
              options: [
                `It also uses farms`,
                `Because it's transforming how humans live, work, and connect at a massive scale, possibly the biggest change since farming was invented`,
                `It also uses factories`,
                `Because it's also old`,
              ],
              correctIndex: 1,
              explanation: `Some historians think the Digital Revolution may be the biggest transformation in human life since farming was invented 12,000 years ago. It's changing work, communication, learning, relationships, and almost everything else.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `What is the INTERNET?`,
              options: [
                `A type of computer`,
                `A global network that connects computers around the world, allowing them to share information almost instantly`,
                `A search engine`,
                `A type of phone`,
              ],
              correctIndex: 1,
              explanation: `The internet is a global network linking billions of computers. It started in the 1960s as a U.S. government research project. Today over 5 billion people use it. Most modern digital life depends on it.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `Which year did Apple release the iPhone, marking the start of the smartphone era?`,
              options: [
                `1995`,
                `2007`,
                `2018`,
                `2025`,
              ],
              correctIndex: 1,
              explanation: `The iPhone launched in 2007. Within a decade, smartphones had transformed daily life across most of the world. Today over 6 billion people own smartphones.` },

            { id: `l17-q5`, format: `true-false`,
              question: `True or false: The Digital Revolution has only had positive effects on human life.`,
              correctAnswer: false,
              explanation: `False. The Digital Revolution has brought huge benefits AND real costs. Mental health impacts from social media, privacy erosion, misinformation, and screen addiction are all real. Like every major revolution we've studied, this one has mixed effects.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `What is ARTIFICIAL INTELLIGENCE (AI)?`,
              options: [
                `Robots that look like humans`,
                `Computer systems that perform tasks usually requiring human intelligence, like writing, decision-making, image recognition, or language translation`,
                `Smart cars only`,
                `Anything electronic`,
              ],
              correctIndex: 1,
              explanation: `AI refers to computer systems doing tasks that normally require human intelligence. Writing essays. Generating images. Translating languages. AI got dramatically more powerful starting around 2015 and is still developing rapidly.` },

            { id: `l17-q7`, format: `multiple-choice`,
              question: `Which is TRUE about social media?`,
              options: [
                `It only helps people`,
                `It only harms people`,
                `It can both connect people across the world AND has been linked to rising mental health issues, especially in teens`,
                `Nobody uses it`,
              ],
              correctIndex: 2,
              explanation: `Social media is a mixed outcome. It connects families and communities across the world. It also has been linked to mental health problems, misinformation, and addictive design. Recognizing both sides is honest history.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `When studying the Digital Revolution, what's the WISE approach?`,
              options: [
                `Celebrate everything about it`,
                `Reject everything about it`,
                `Recognize both real benefits and real costs, and make thoughtful choices about which technologies to embrace and which to use carefully`,
                `Ignore it`,
              ],
              correctIndex: 2,
              explanation: `Wise people don't celebrate or condemn major technologies all at once. They look at specific benefits and specific costs, then make thoughtful choices. The Digital Revolution is no different from previous revolutions in needing this kind of honest, balanced thinking.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Imagine telling your great-grandparents (born around 1925) about your typical day. What would shock them the most about how you live?` },
            { id: `r2`, text: `What's ONE digital technology that helps your life most? What's ONE that you think might be harming you or your family?` },
            { id: `r3`, text: `If you could redesign social media from scratch, what would you keep and what would you change?` },
            { id: `r4`, text: `Artificial intelligence is changing fast. What's something you hope it can do well someday? What's something you hope it never replaces about being human?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `You're living through the Digital Revolution. Most of what's been built in the last 50 years has affected your life directly. The way you learn (this app is digital learning), the way your family communicates, the way your parents work, the news you see, the games you play. Understanding this revolution isn't just about looking back at history. It's about thinking carefully about a transformation that's still going. The choices being made about AI, privacy, social media, and screen time are choices YOUR generation will inherit and continue.`,
          familyAdventure: `Family Tech Audit. As a family, pick ONE digital habit (texting, social media, screen time, news consumption, whatever). Track how everyone uses it for one week. At the end, discuss together: what's helping? what's hurting? what would you each change? You're doing what every generation has had to do during major technological transformations. Figuring out what to embrace and what to handle carefully.`,
          creativePrompt: {
            intro: `Write a letter to a younger version of yourself about how to use digital technology wisely.`,
            floor: `Write at least 5 sentences. Cover one piece of advice about social media, one about phones, and one about AI or screen time.`,
            stretch: `Write 8 to 10 sentences. Cover specific habits to build, specific habits to avoid, and your honest thoughts about what helps your life vs. what hurts.`,
            open: `Write as much as you want. Build a thoughtful letter that recognizes BOTH the gifts of digital technology AND the real costs, with practical advice about navigating both.`,
            frames: [
              `Dear younger me, the digital world has gifts and costs.`,
              `The best gift I've found is ___.`,
              `The biggest cost I've noticed is ___.`,
              `One habit I'd encourage you to keep is ___.`,
              `One habit I'd encourage you to drop is ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what the Digital Revolution is, describe how computers and the internet evolved, name how smartphones and AI are still transforming life, and hold both the benefits AND the real costs honestly. Next lesson: we look at how the digital world has been part of something even bigger. GLOBALIZATION, the way the entire world has connected into one interconnected system. See you there. — Lyra.`,
          badge: `digital-historian`,
          badgeName: `Digital Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L17.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L17 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
