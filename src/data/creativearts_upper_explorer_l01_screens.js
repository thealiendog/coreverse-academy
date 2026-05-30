const CREATIVEARTS_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `ca`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-9-10-01`,
      title: `What Creativity Really Is`,
      duration: 18,
      xpReward: 75,
      badge: `creator`,
      badgeName: `Creator`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hello, beautiful {name}. I'm Muse, your guide through Creative Arts. Before we touch a single paintbrush, instrument, pen, or stage, we need to clear up the biggest misunderstanding about creativity. Most kids your age have started to believe a quiet lie: that "creative" is something some people ARE and others AREN'T. That lie kills more creativity than any other single thing. The truth is wilder and freer. EVERYONE is creative. You. Me. Every single human alive. The question isn't WHETHER you're creative; it's whether you'll DARE to make what only you can make. Today, we begin. Stay with me, butterfly.`,
          headline: `What Creativity Really Is`,
          subtitle: `Everyone is creative. The question is whether you'll dare to make what only you can make.`,
          visual: `/ue-assets/ca/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Creativity Is Universal (Yes, You Too)`,
          paragraphs: [
            `Here is something true and a little wild. EVERY HUMAN BRAIN is built for creativity. We are the species that invented language, music, painting, story, dance, mathematics, recipes, jokes, buildings, gardens, songs. None of that came from a few "creative" people while everyone else watched. It came from millions of humans across thousands of years, EACH of them making things. Researchers studying creativity have found that creativity isn't a rare talent some people get and others don't. It's a HUMAN CAPACITY that some people USE and others don't. Same capacity. Different use.`,
            `If you've ever felt "I'm not creative," I want you to know where that idea probably came from. Somewhere, sometime, someone (a teacher, a sibling, a peer, a comment) suggested your making wasn't good enough. Maybe you drew something and someone laughed. Maybe a teacher graded your art badly. Maybe you compared yourself to someone older and decided you couldn't catch up. So you stopped. The capacity is still there. You haven't lost it. You just stopped using it. The first move in this whole subject is to take back what was always yours. You are creative. Not because Muse says so. Because you are HUMAN. That's the deal.`,
          ],
          image: `/ue-assets/ca/l01-s1-universal.webp`,
          imageCaption: `Every human brain is built for creativity. You haven't lost it. You just stopped using it.`,
          vocab: [
            { word: `creativity is universal`,
              definition: `The truth that every human brain is built for creativity. Research shows it's not a rare talent some people have and others don't. It's a HUMAN CAPACITY that some people USE and others don't. If you've ever felt "I'm not creative," that belief came from somewhere outside you. The capacity is still yours.`,
              audioPrompt: `Creativity is universal, {name}. Every human brain is built for creativity. We are the species that invented language, music, painting, story, dance, mathematics, recipes, jokes, buildings, gardens, songs. None of that came from a few creative people while everyone else watched. It came from millions of humans across thousands of years, each of them making things. Researchers found creativity isn't a rare talent some people have. It's a human capacity some people USE and others don't. Same capacity. Different use.` },
            { word: `the making instinct`,
              definition: `The inborn human drive to create. Our species didn't just survive — we invented language, music, painting, story, dance, mathematics, recipes, jokes, buildings. These didn't come from a few "creative geniuses." They came from the making instinct in every human, used across thousands of years. The instinct is still in you. What varies is whether you USE it.`,
              audioPrompt: `The making instinct is the inborn human drive to create, {name}. Our species didn't just survive. We invented language, music, painting, story, dance, mathematics, recipes, jokes, buildings. These didn't come from a few creative geniuses. They came from the making instinct in every human, used across thousands of years. The instinct is still in you. What varies is whether you use it. If someone suggested you weren't creative, they were wrong about the instinct. It never left. It just waited. Use it.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Art Is Courageous Combination`,
          paragraphs: [
            `Here is what creativity actually IS at its heart. Two ingredients, neither of them magic. INGREDIENT ONE, COMBINATION. Almost every creative thing in human history is a combination of what already existed, put together in a new way. A song is sound + rhythm + words + feeling. A painting is color + shape + space + idea. A dance is body + music + meaning. A story is character + place + event + voice. You don't have to invent things FROM NOTHING. You have to combine what's already in your life into something only you would make. That's actually doable. Right now. With what you have.`,
            `INGREDIENT TWO, COURAGE. This is the secret most people miss. Combining is the easy part. The hard part is DARING to actually make something and let it exist. The blank page is scary. The first stroke is scary. Showing anyone is scary. Many people have brilliant ideas they never make because the COURAGE part is missing. Researchers studying creative people across history found this is the actual difference between "creative people" and "people who could be creative but aren't." Not talent. Not luck. Courage. The willingness to start something imperfect and let it be. Muse-truth: you don't need more talent. You need more bravery. The talent grows by using it.`,
          ],
          image: `/ue-assets/ca/l01-s2-courage.webp`,
          imageCaption: `Combination + courage = creativity. Talent grows by using it. You need bravery more than skill at the start.`,
          vocab: [
            { word: `combination + courage`,
              definition: `The two ingredients of creativity. COMBINATION: almost every creative thing is existing pieces put together in a new way. You combine what's already in your life. COURAGE: the bravery to actually start, make something imperfect, let it exist. The actual difference between "creative people" and "people who could be" is bravery, not talent. Talent grows by using it.`,
              audioPrompt: `Combination plus courage is what creativity actually is at its heart, {name}. Combination, almost every creative thing in human history is existing pieces put together in a new way. A song is sound, rhythm, words, feeling. A painting is color, shape, space, idea. You don't have to invent from nothing. You combine what's already in your life. Courage, the secret most people miss. The hard part is daring to actually make something and let it exist. Not talent. Not luck. Courage.` },
            { word: `the inner critic`,
              definition: `The internal voice that judges your creative work while you're still making it — "this is bad," "who are you to make this?" Most adults have practiced this voice so long it interrupts every line, every note. The key move: separate making from judging. The inner critic can come in AFTER, not during.`,
              audioPrompt: `The inner critic is the internal voice that judges your creative work while you're still making it, {name}. The voice that says this is bad or who are you to make this. Most adults have practiced this voice for so long it interrupts every line, every note, every word. They can't finish anything. You can build the opposite habit early. Separate making from judging. The inner critic comes in AFTER. Not during. While you're making, the only job is to make. Protect that space fiercely.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Gap Between Consuming and Making`,
          paragraphs: [
            `Notice something important about the world you're growing up in. Most of it is designed for you to CONSUME. Watch the video. Scroll the feed. Play the game. Listen to the song someone else made. Read the story someone else wrote. Consuming isn't bad. We all consume. But here is the quiet trap. Many kids your age consume MANY HOURS a day and create almost NOTHING. They take in other people's making and produce nothing of their own. Years pass this way. The making muscle weakens. The voice doesn't develop. Researchers studying child development have found this gap is one of the biggest shifts in modern childhood, kids consume way more art and create way less than kids did 50 years ago.`,
            `This subject is an invitation to flip that ratio. Not to stop consuming. To start MAKING enough that you become a maker, not just a consumer. Even small amounts add up. Twenty minutes of making a day shapes a different kid than zero minutes. A drawing here. A song hummed there. A poem scribbled. A photo taken with care. A dance moved alone in your room. A story written. You don't have to make anything "good." You have to make. Often. Across years. The kid who makes regularly becomes the adult with a creative voice. The kid who only consumes doesn't. Muse-truth, you become what you do most. Make more than you consume, and your life becomes a making life.`,
          ],
          image: `/ue-assets/ca/l01-s3-consume-make.webp`,
          imageCaption: `Most kids consume hours, make minutes. Flip the ratio. Even 20 minutes of making a day shapes a different life.`,
          vocab: [
            { word: `consuming vs. making`,
              definition: `The quiet trap of modern childhood. Most kids consume many hours of art (videos, games, songs, stories) and create almost nothing themselves. Research shows kids consume more and create less than 50 years ago. The making muscle weakens. The fix: make REGULARLY, even small amounts. 20 minutes of making a day shapes a different person than zero.`,
              audioPrompt: `Consuming versus making is a quiet trap of modern childhood, {name}. Most of the world is designed for you to consume. Consuming isn't bad. We all consume. But many kids your age consume many hours a day and create almost nothing of their own. The making muscle weakens. The voice doesn't develop. Researchers found this gap is one of the biggest shifts in modern childhood. The flip is small. 20 minutes of making a day shapes a different kid than zero minutes. You become what you do most.` },
            { word: `the making muscle`,
              definition: `Your creative capacity that grows with use and weakens with disuse — like a physical muscle. Kids who make regularly for years develop a creative voice. Kids who only consume don't. The gap isn't about talent at the start. It's about use. The muscle doesn't require talent to grow. It requires regular practice, even in small amounts.`,
              audioPrompt: `The making muscle is your creative capacity that grows with use and weakens with disuse, like a physical muscle, {name}. Kids who make regularly for years develop a creative voice. Kids who only consume don't. The gap isn't about talent at the start. It's about use. Research shows the difference appears measurably over 12 to 18 months of regular making. The muscle doesn't require talent to grow. It requires practice. Even small amounts. A drawing here, a song hummed there. Use it consistently and it grows.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Protecting the Spark`,
          paragraphs: [
            `Here is the last and most tender truth. Inside every kid is a SPARK. A pull toward making. The little flame that says "what if I tried this?" or "I want to make a thing like that." That spark is precious. It can be protected, and it can be damaged. What protects it: making often (the spark grows when used), being around people who love their own making, having a kind first audience (someone who sees what you made and is glad you made it). What damages it: being mocked, being graded harshly, comparing yourself to people way ahead of you, perfectionism (waiting until you're "good enough"), the inner critic that says "this is bad" while you're still making.`,
            `One of the most important practices for this whole subject. SEPARATE MAKING FROM JUDGING. While you're making something, the only job is to make. Don't critique. Don't compare. Don't decide if it's good yet. Just make. Critique can come later, much later. Many adults can't make anything because their inner critic interrupts every line, every word, every note. They have years of practice at judging mid-creation. You can build the opposite habit early, MAKE FIRST, JUDGE LATER. This single practice protects your spark from the most common thing that kills it. Muse-truth, your spark is yours to protect. Make often. Find kind first audiences. Don't let the critic into the room until the making is done.`,
          ],
          image: `/ue-assets/ca/l01-s4-spark.webp`,
          imageCaption: `The spark is precious. Make first, judge later. Don't let the inner critic into the room while you're making.`,
          vocab: [
            { word: `protecting the spark`,
              definition: `The practice of protecting your creative pull from the things that kill it. Protective: making often, kind first audiences, being around people who love their own making. Damaging: mocking, harsh grading, comparison, perfectionism, the inner critic mid-creation. The key practice: SEPARATE MAKING FROM JUDGING. Make first, judge later.`,
              audioPrompt: `Protecting the spark is one of the most important practices in this whole subject, {name}. Inside every kid is a spark, a pull toward making. The little flame that says what if I tried this. That spark is precious. It can be protected, and it can be damaged. What protects it, making often, kind first audiences. What damages it, being mocked, harsh grading, comparison, perfectionism, the inner critic mid-creation. The key practice, separate making from judging. While you're making, the only job is to make. Critique can come later.` },
            { word: `kind first audience`,
              definition: `The person who sees your early creative work and responds with genuine encouragement — not false praise, not harsh critique. Just seeing what you made and being glad you made it. Research shows this is one of the most important protectors of creative spark in kids. The first person who sees your making shapes whether you make again.`,
              audioPrompt: `A kind first audience is the person who sees your early creative work and responds with genuine encouragement, {name}. Not false praise. Not harsh critique. Just seeing what you made and being glad you made it. Research shows this is one of the most important protectors of creative spark in kids. The first person who sees your making shapes whether you make again. Being mocked early kills creativity. Being genuinely seen grows it. Share small, often, with people who are safe.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four approaches to creativity. Classify each: REAL CREATIVE PRACTICE (research-backed, actually grows the creator), CREATIVITY MYTH (sounds true but isn't), or CREATIVITY BLOCKER (actively kills the spark)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `practice`, label: `Real Creative Practice`, color: `#34D399`, description: `Research-backed practice that grows your creative voice. Making often, separating making from judging, courage to start, kind first audience.` },
            { id: `myth`,     label: `Creativity Myth`,         color: `#FBBF24`, description: `Sounds true and people repeat it, but research shows it doesn't actually work or describe how creativity happens.` },
            { id: `blocker`,  label: `Creativity Blocker`,       color: `#F87171`, description: `Actively kills the creative spark. Comparison, harsh inner critic, perfectionism, waiting until "good enough."` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Approach #1`,
              clues: [
                { text: `A kid draws something every day in a small notebook.` },
                { text: `Most drawings aren't great. Some are okay. A few are surprising.` },
                { text: `They don't show most of them to anyone. They just keep drawing.` },
              ],
              correctAnswer: `practice`,
              realWorldExample: `Daily making + no pressure to show + accepting most won't be great. Pure practice.`,
              explanation: `This is creative practice at its purest. The kid is MAKING REGULARLY (the only way creativity grows). They've separated making from judging (they don't worry about quality each time). They've removed the audience pressure (most drawings stay private). They're letting the making muscle build. Researchers studying creative people across history would recognize this exact pattern. The kid is becoming a real maker without realizing it. After a year, they'll be visibly more skilled. After three years, they'll have a voice.`,
            },
            {
              id: `case-2`,
              caseTitle: `Approach #2`,
              clues: [
                { text: `A kid loves a famous artist's work and decides "I'll never be that good, so what's the point of trying?"` },
                { text: `They stop drawing. They tell themselves they're "being realistic."` },
                { text: `A year later, they've made nothing. The famous artist they admired? They made hundreds of works no one saw before the famous ones.` },
              ],
              correctAnswer: `blocker`,
              realWorldExample: `Comparison to people far ahead + quitting + missing the hundreds of practice works = creativity blocker.`,
              explanation: `Pure creativity blocker. Comparison is one of the deadliest things to creative spark, especially comparing yourself to someone with YEARS of practice ahead of you. The kid forgot that every artist they admire started where they are, with bad early work. By quitting, they guarantee they'll never become a real artist. Researchers studying creativity have found this is one of the most common ways creativity dies in kids around this age. The fix would be the same as case 1, make regularly, don't show most of it, let the muscle build.`,
            },
            {
              id: `case-3`,
              caseTitle: `Approach #3`,
              clues: [
                { text: `A kid plays around making weird songs on a small instrument or app.` },
                { text: `They don't try to write a "real song." They just combine sounds they like.` },
                { text: `Sometimes they stumble onto a phrase that feels surprisingly right.` },
              ],
              correctAnswer: `practice`,
              realWorldExample: `Playful combination + no pressure + occasional discovery = how real creativity grows.`,
              explanation: `Real creative practice. The kid is doing exactly what Muse described in section 2, COMBINATION (sounds they like, put together) and COURAGE (willingness to make weird songs without judging). They're not trying to make a masterpiece. They're playing. Researchers studying creative people have found "playful exploration without pressure" is one of the most reliable conditions for creative breakthroughs. This kid will accidentally develop a real musical ear over time. The "weird songs" become the practice that builds the artist.`,
            },
            {
              id: `case-4`,
              caseTitle: `Approach #4 — The Tricky One`,
              clues: [
                { text: `A kid says: "I want to make art, but I'm going to wait until I'm really good before I show anyone."` },
                { text: `They make a few things in secret. None of them feel "good enough" yet.` },
                { text: `Years pass. They never share. Their making slowly stops because there's no point if no one ever sees it.` },
              ],
              correctAnswer: `blocker`,
              realWorldExample: `"I'll wait until I'm good" sounds humble + actually kills the making + spark dies.`,
              explanation: `Tricky, {name}! It LOOKS humble. The kid sounds like they're being respectful of art ("I'll wait until I'm worthy"). So you might call this a creative myth or even a real practice. But pause. Look at what actually happens. The "until I'm good enough" standard never arrives. The kid stops making because there's no point. The spark dies. Pure creativity blocker in humility's clothes. Lesson, you don't get "good enough" by waiting. You get good enough by making A LOT, including showing rough work to kind audiences along the way. The "I'll wait" is one of the most common ways creativity dies. Muse-move: share a little, often, with people who are kind. Get gentle feedback. Keep making.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l01-q1`, format: `true-false`,
              question: `True or false: Creativity is a rare talent some people HAVE and others DON'T.`,
              correctAnswer: false,
              explanation: `False. Every human brain is built for creativity. Researchers found it's not a rare talent. It's a human CAPACITY some people USE and others don't. Same capacity, different use. If you've felt "I'm not creative," that belief came from somewhere outside you. The capacity is still yours.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What are the TWO INGREDIENTS of creativity at its heart?`,
              options: [
                `Magic and luck`,
                `COMBINATION (existing pieces put together in a new way) + COURAGE (bravery to actually make something imperfect and let it exist)`,
                `Talent and money`,
                `Random ability`,
              ],
              correctIndex: 1,
              explanation: `Two ingredients: COMBINATION (almost every creative thing is existing pieces combined in a new way, you don't invent from nothing) and COURAGE (the bravery to actually start, make something imperfect, let it exist). Researchers found courage is the actual difference between "creative people" and "people who could be." Talent grows by using it.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `What is the QUIET TRAP of modern childhood about creativity?`,
              options: [
                `Nothing changed`,
                `Kids CONSUME many hours of art (videos, games, songs) and CREATE almost nothing — the making muscle weakens; flip the ratio with even 20 minutes of making a day`,
                `Kids make too much`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Most kids consume many hours a day and create almost nothing. They take in other people's making and produce nothing of their own. Years pass this way; the making muscle weakens. Researchers found this gap is one of the biggest shifts in modern childhood. The fix: make REGULARLY, even small amounts. 20 minutes of making a day shapes a different kid than zero.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `What is the SPARK?`,
              options: [
                `A literal fire`,
                `The inner PULL toward making — the little flame that says "what if I tried this?" Every kid has it. It can be protected or damaged`,
                `Random feeling`,
                `Just talent`,
              ],
              correctIndex: 1,
              explanation: `The spark is the inner pull toward making. The little flame that says "what if I tried this?" or "I want to make a thing like that." Every kid has it. It can be protected (by making often, kind first audiences) or damaged (by mocking, harsh grading, comparison, perfectionism, inner critic mid-creation).` },

            { id: `l01-q5`, format: `multiple-choice`,
              question: `What is the KEY PRACTICE for protecting the spark while making?`,
              options: [
                `Judge harshly`,
                `SEPARATE MAKING FROM JUDGING — while you're making, the only job is to make; critique can come later, much later; the inner critic kills creativity if it's in the room during making`,
                `Stop early`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Separate making from judging. While you're making something, the only job is to make. Don't critique. Don't compare. Don't decide if it's good yet. Just make. Critique can come later. Many adults can't make anything because their inner critic interrupts every line, word, note. Build the opposite habit early: MAKE FIRST, JUDGE LATER.` },

            { id: `l01-q6`, format: `true-false`,
              question: `True or false: COMPARISON to famous artists with years ahead of you HELPS your creativity grow.`,
              correctAnswer: false,
              explanation: `False. Comparison is one of the deadliest things to creative spark, especially comparing yourself to someone with years of practice ahead. Every artist you admire started where you are, with bad early work. Comparison makes kids quit, guaranteeing they'll never become real artists. Better to make regularly and not compare.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `Why is "I'll wait until I'm really good before I share" actually a CREATIVITY BLOCKER?`,
              options: [
                `It isn't, it's humble`,
                `The "good enough" standard NEVER ARRIVES; kid stops making because there's no point; spark dies; you get "good enough" by MAKING A LOT, including sharing rough work to kind audiences`,
                `Random`,
                `It's actually fine`,
              ],
              correctIndex: 1,
              explanation: `"I'll wait until I'm good" sounds humble but is a creativity blocker in humility's clothes. The "good enough" standard never arrives. The kid stops making because there's no point. The spark dies. You don't get "good enough" by waiting. You get there by making A LOT, including sharing rough work to kind audiences along the way.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's Muse's first teaching about creativity?`,
              options: [
                `Wait for magic`,
                `EVERYONE is creative. Combination + courage = creativity. Make more than you consume. Protect the spark. Separate making from judging. You become what you do most`,
                `Only special people`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Everyone is creative. Combination plus courage equals creativity. Make more than you consume. Protect the spark by making often, finding kind first audiences, separating making from judging. You become what you do most. Make more than you consume, and your life becomes a making life.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Take a soft breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever told yourself "I'm not creative"? Where do you think that belief came from? Is it actually true?` },
            { id: `r2`, text: `Be honest about your current ratio: how many hours a day do you CONSUME (videos, scrolling, games) vs. MAKE? What's one small thing you could shift?` },
            { id: `r3`, text: `What's ONE thing you'd secretly love to MAKE if you had no fear? A song? A drawing? A story? A video? Why haven't you started?` },
            { id: `r4`, text: `Who is your inner critic when you're making? What does it sound like? What might shift if you asked it to wait until you're done?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Research on creativity is one of the richest fields in modern psychology. Mihaly Csikszentmihalyi, Teresa Amabile, Keith Sawyer, and many others have spent decades studying creative people across art, science, business, and life. The findings are remarkably consistent. Creativity isn't a rare gift. It's a HUMAN CAPACITY that grows with use and shrinks with disuse. The biggest predictors of creative output across a lifetime aren't IQ or talent. They're regular practice, willingness to make imperfect work, courage to share, and protected creative spark in childhood. Muse-note: you're at a pivotal age for creativity. Around 9-10, many kids quietly stop making because they've started comparing and judging. The kids who keep making through this age keep their spark alive into adolescence and adulthood. The kids who quit often don't get it back. This is one of the most important inflection points in a creative life. You're getting the protective framing now. Use it. Make often. Don't let comparison kill what's yours. The world has plenty of consumers. It needs more makers. Be one of them, butterfly.`,
          familyAdventure: `Family Making Hour. As a family, commit to ONE hour each week where everyone MAKES something. Not consumes. Makes. Doesn't have to be "art." Anything that comes from your own hands and mind. Drawing, building, cooking together, writing, music, photography, crafts, anything. Phones away. Adults model making, this matters. Kids see that adults make, not just consume. Many families find this becomes one of their most precious shared traditions. The kids who grow up in families that make grow up assuming they're makers too. The kids who grow up in families that only consume often don't.`,
          creativePrompt: {
            intro: `Write about your relationship with creativity and the maker you want to be.`,
            floor: `Write at least 5 sentences. Name where you are with creativity and one small thing you'll start making.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on the maker you're becoming.`,
            open: `Write as much as you want. Write a full honest piece about your relationship with creativity right now. Have you been told you're "creative" or "not creative"? How do those labels feel? Reflect on your current ratio of consuming vs. making. Be honest. Describe ONE thing you'd love to MAKE (a drawing, a song, a story, a photo, anything) and what's stopped you so far. Acknowledge your inner critic and what it tends to say. Make a commitment to one small making practice you'll try this week, no pressure, no expectation of "good." Just making. End with a kindness to your future maker-self. Make it real and unrushed.`,
            frames: [
              `My current relationship with creativity is ___.`,
              `Where the "I'm not creative" belief came from (if I had it): ___.`,
              `My honest consume vs. make ratio: ___.`,
              `One thing I'd love to make is ___.`,
              `What my inner critic says: ___.`,
              `My small making practice this week: ___.`,
              `A kindness to my future maker-self: ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Welcome, maker {name}. You've taken the first true step. EVERYONE is creative. You. Me. Every human. Combination + courage = creativity. Make more than you consume. Protect the spark. Separate making from judging. This is the foundation under everything Muse will teach you. Next, we explore the secret skill behind all art, learning to SEE. The Creator's Eye, noticing beauty most people walk past. Fluttering on. — Muse 🦋.`,
          badge: `creator`,
          badgeName: `Creator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default CREATIVEARTS_UE_L01;
