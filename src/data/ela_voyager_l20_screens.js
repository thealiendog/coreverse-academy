// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L20 — Building a Lifelong Reading Life
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Range of Reading, Independent Reading, Lifelong Literacy
// Interaction: PERSPECTIVES. Paragraphs ~330ch. 3 vocab/section. FINAL LESSON.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l20-v1";

const ELA_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-20`,
      title: `Building a Lifelong Reading Life`,
      duration: 35,
      xpReward: 75,
      badge: `lifelong-reader`,
      badgeName: `Lifelong Reader`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, here we are. The final lesson. Look at what you've built across these twenty lessons: you can analyze rhetoric, trace an argument, read a novel and a poem and a play with real depth, write with style and voice, research and synthesize, evaluate sources, navigate misinformation, and decode the media flooding your world. That's an extraordinary set of skills. But here's the truth I most want to leave you with: none of it matters if you stop reading. Every skill you've built is a muscle, and muscles that go unused fade. The single greatest predictor of how much you'll know, think, write, and understand for the rest of your life isn't your grades or even this course, it's whether you become, and stay, a reader. Not someone who had to read for school, but someone who reads, by choice, for the rest of their life. That's the whole game. So this final lesson isn't about a new technique. It's about the habit that keeps every other skill alive and growing: a lifelong reading life. We'll talk about why it matters more than almost anything, how readers actually get made (it's not what most people think), and how to build a reading life that's genuinely yours, one you'll never want to quit. Let's finish what we started. Onward.`,
          headline: `Building a Lifelong Reading Life`,
          subtitle: `The final lesson: the habit that keeps feeding your mind for life. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Skill That Keeps All The Others Alive`,
          paragraphs: [
            `Across twenty lessons you've built an extraordinary toolkit: analyzing rhetoric and argument, reading novels, poems, and plays deeply, writing with style and voice, researching, synthesizing, evaluating sources, decoding media. Real, hard-won skills. But here's the truth that matters most of all: none of it lasts if you stop reading.`,
            `Every skill you've built is a muscle, and unused muscles fade. The vocabulary, the patience for complex ideas, the ear for language, the ability to inhabit another mind, all of it grows when you read and quietly shrinks when you don't. Reading isn't one skill among many; it's the soil the others grow in. Stop, and the whole garden slowly goes dry.`,
            `Research keeps finding the same thing: the single greatest predictor of a person's knowledge, vocabulary, and thinking across life isn't their grades or even their schooling, it's whether they read for pleasure, by choice, over years. The reader keeps growing for decades after school ends. The non-reader, however bright, slowly stops. That's the whole game.`,
          ],
          image: `/voyager-assets/ela/l20-s1-muscle.webp`,
          imageCaption: `Across twenty lessons you've built an extraordinary toolkit: analyzing rhetoric and argument, reading novels, poems, and plays deeply, writing with style and voice, researching, evaluating sources, decoding media. But the truth that matters most: NONE OF IT LASTS IF YOU STOP READING. Every skill is a MUSCLE, and unused muscles fade, vocabulary, patience for complex ideas, the ear for language, the ability to inhabit another mind, all grow when you read and shrink when you don't. Reading is the SOIL the other skills grow in. Research keeps finding the same thing: the greatest predictor of lifelong knowledge and thinking isn't grades or schooling, it's whether you READ FOR PLEASURE, by choice, over years. The reader keeps growing for decades; the non-reader, however bright, slowly stops.`,
          vocab: [
            { word: `lifelong reading`,
              definition: `The habit of reading by choice, for pleasure and growth, across your whole life, not just for school. The skill that keeps all others alive.`,
              audioPrompt: `Lifelong reading, {name}, is the habit of reading by choice, for pleasure and growth, across your whole life, not just for school assignments. It's the single habit that keeps every other skill you've built alive and growing.` },
            { word: `as muscle`,
              definition: `The idea that reading skills grow with use and fade without it, like a muscle, so the habit matters more than any single technique.`,
              audioPrompt: `Reading is like a muscle, {name}: your vocabulary, focus, and skill grow when you use them and quietly fade when you don't. That's why the lifelong habit matters more than any single technique you could learn.` },
            { word: `reading for pleasure`,
              definition: `Reading chosen freely for enjoyment, the strongest predictor of lifelong knowledge, vocabulary, and thinking, stronger than grades.`,
              audioPrompt: `Reading for pleasure, {name}, is reading you choose freely because you enjoy it. Research keeps finding it's the strongest predictor of how much you'll know and think across your life, stronger even than your grades.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Readers Are Actually Made`,
          paragraphs: [
            `Most people think readers are made by force: assigned books, reading logs, tests. But research and the stories of lifelong readers point somewhere else entirely. Readers are made by pleasure and choice, by being allowed to read what genuinely interests them, even if it's "not serious," and by experiencing the deep enjoyment of getting lost in a book.`,
            `The single most powerful ingredient is choice. When people pick their own reading, following curiosity, passion, even guilty pleasures, they read far more, and reading more is what builds the skill and the habit. The well-meaning instinct to force only "important" books on a reluctant reader often backfires, teaching them that reading is a chore to escape.`,
            `Equally freeing: there's no hierarchy you must climb. Comics, fan fiction, audiobooks, magazines, genre novels, all of it counts and all of it builds readers. The goal isn't to read what impresses others; it's to read enough, and joyfully enough, that reading becomes part of who you are. Volume and pleasure first; the "great books" come naturally once the habit is real.`,
          ],
          image: `/voyager-assets/ela/l20-s2-made.webp`,
          imageCaption: `Most people think readers are made by FORCE: assigned books, reading logs, tests. But research and the lives of lifelong readers point elsewhere: readers are made by PLEASURE and CHOICE, by being allowed to read what genuinely interests them, even if it's "not serious," and by getting lost in a book. The most powerful ingredient is CHOICE, when people pick their own reading, following curiosity and even guilty pleasures, they read far more, and reading more builds the skill and habit. Forcing only "important" books on a reluctant reader often backfires. And there's NO HIERARCHY to climb: comics, fan fiction, audiobooks, magazines, genre novels, all count and all build readers. Volume and pleasure first; the "great books" come naturally once the habit is real.`,
          vocab: [
            { word: `choice`,
              definition: `Picking your own reading. The single most powerful ingredient in making a reader, because it drives the volume that builds the habit.`,
              audioPrompt: `Choice, {name}, is the single most powerful ingredient in becoming a reader. When you pick your own books, following your real curiosity, you read far more, and reading more is what actually builds the skill and the habit.` },
            { word: `no hierarchy`,
              definition: `The freeing truth that all reading counts, comics, audiobooks, genre fiction, magazines, and all of it builds readers. There's no ladder you must climb.`,
              audioPrompt: `There's no hierarchy in reading, {name}: comics, fan fiction, audiobooks, magazines, and genre novels all count and all build readers. You don't have to climb a ladder of "serious" books; you just have to read joyfully and a lot.` },
            { word: `volume`,
              definition: `The sheer amount you read. More than any single title, reading a lot, driven by pleasure, is what builds skill and the lifelong habit.`,
              audioPrompt: `Volume, {name}, is the sheer amount you read, and it matters more than any single impressive title. Reading a lot, because you enjoy it, is what builds your vocabulary, your skill, and the habit that lasts a lifetime.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Building A Reading Life That's Yours`,
          paragraphs: [
            `A lifelong reading life isn't an accident; it's built with a few simple, forgiving practices. First, always have a book going, and keep it physically near you, by your bed, in your bag. Readers read in the cracks of the day: ten minutes before sleep, a chapter while waiting. Those small pockets add up to dozens of books a year.`,
            `Second, give yourself permission to quit books. This surprises people, but forcing yourself through a book you hate is one of the fastest ways to kill the habit. Life is short and books are many; abandoning one you're not enjoying isn't failure, it's what real readers do, and it frees you to find the ones that grab you.`,
            `Third, follow your curiosity and find your people. Read whatever genuinely pulls you, then chase the thread, another book by that author, that topic, that world. And talk about books: a friend, a family member, a book club, an online community. Reading is solitary, but a reading life is social, and sharing it is one of the great, lasting joys.`,
          ],
          image: `/voyager-assets/ela/l20-s3-yours.webp`,
          imageCaption: `A lifelong reading life is BUILT with a few simple, forgiving practices. First, ALWAYS HAVE A BOOK GOING, kept physically near you, by your bed, in your bag. Readers read in the cracks of the day, ten minutes before sleep, a chapter while waiting, and those pockets add up to dozens of books a year. Second, give yourself PERMISSION TO QUIT books, forcing yourself through one you hate is one of the fastest ways to kill the habit; abandoning it isn't failure, it's what real readers do. Third, FOLLOW YOUR CURIOSITY and FIND YOUR PEOPLE: read whatever pulls you, chase the thread to the next book, and talk about what you read with a friend, family, or a book club. Reading is solitary, but a reading life is social.`,
          vocab: [
            { word: `reading cracks`,
              definition: `Using the small pockets of the day, before sleep, while waiting, to read. Always having a book near you turns scraps of time into dozens of books a year.`,
              audioPrompt: `Reading in the cracks, {name}, means using the small pockets of the day, ten minutes before sleep, a chapter while waiting, to read. Keep a book near you, and those little scraps of time add up to dozens of books a year.` },
            { word: `permission to quit`,
              definition: `The freeing rule that you can abandon a book you're not enjoying. Forcing through a book you hate is one of the fastest ways to kill the reading habit.`,
              audioPrompt: `Give yourself permission to quit, {name}: abandoning a book you're not enjoying isn't failure, it's what real readers do. Forcing yourself through a book you hate is one of the fastest ways to kill the reading habit.` },
            { word: `reading community`,
              definition: `The people you share books with, a friend, family, a book club. Reading is solitary, but a lasting reading life is social.`,
              audioPrompt: `A reading community, {name}, is the people you share books with, a friend, family, or a book club. Reading itself is solitary, but a lasting reading life is social, and talking about books is one of its great joys.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Reading In A World Built To Distract You`,
          paragraphs: [
            `Let's be honest about the challenge: you're building a reading life in a world engineered to fracture your attention. Phones, feeds, and endless short videos are designed by brilliant people to capture exactly the focus that deep reading requires. Reading a book asks for sustained attention, the very thing the attention economy is built to break.`,
            `This makes reading almost a quiet act of rebellion, and a kind of training. Every time you choose a chapter over a scroll, you're not just enjoying a book; you're strengthening the deep-focus muscle that distraction erodes. Deep reading rebuilds the very attention span that feeds, by design, wear down. It's good for your mind in ways far beyond the book.`,
            `The practical move is gentle, not grim: make reading a little easier than the scroll. Keep the phone in another room at bedtime and a book on the pillow. Protect a few small reading pockets from the feed. You don't have to win a war against technology, you just have to make the book the easiest thing to reach in a few key moments.`,
          ],
          image: `/voyager-assets/ela/l20-s4-distract.webp`,
          imageCaption: `Be honest about the challenge: you're building a reading life in a world ENGINEERED to fracture your attention. Phones, feeds, and endless short videos are designed by brilliant people to capture exactly the focus deep reading requires. Reading asks for SUSTAINED ATTENTION, the very thing the attention economy is built to break. This makes reading almost a quiet act of REBELLION, and a kind of training: every time you choose a chapter over a scroll, you strengthen the deep-focus muscle that distraction erodes, reading rebuilds the attention span that feeds wear down. The practical move is gentle, not grim: make reading EASIER than the scroll. Phone in another room at bedtime, book on the pillow. You don't have to win a war against technology, just make the book easiest to reach in key moments.`,
          vocab: [
            { word: `attention economy`,
              definition: `The system of apps and feeds engineered to capture and hold your focus, the same focus that deep reading requires.`,
              audioPrompt: `The attention economy, {name}, is the system of apps, feeds, and short videos engineered to capture and hold your focus. It competes directly for the very attention that deep reading needs, which is what makes reading a challenge today.` },
            { word: `deep focus`,
              definition: `The sustained, undistracted attention that reading a book requires and builds, the opposite of the fractured attention feeds encourage.`,
              audioPrompt: `Deep focus, {name}, is the sustained, undistracted attention that reading a book requires, and strengthens. It's the opposite of the fractured, jumpy attention that endless feeds encourage, and reading is one of the best ways to rebuild it.` },
            { word: `friction`,
              definition: `How easy or hard something is to start. The practical trick: lower the friction to read (book on the pillow) and raise it to scroll (phone in another room).`,
              audioPrompt: `Friction, {name}, is how easy or hard something is to start. The trick to reading more is to lower the friction for the book, keep it on your pillow, and raise the friction for the phone, leave it in another room.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives, And A Goodbye`,
          paragraphs: [
            `Pull it together, one last time. Every skill you built across twenty lessons is a muscle that lives or fades by one habit: whether you keep reading. Reading for pleasure, by choice, over years, is the greatest predictor of how much you'll know and think for life. It's the soil the rest grows in.`,
            `Readers are made by pleasure and choice, not force, there's no hierarchy, all reading counts, and volume matters most. Build a reading life that's yours: always have a book going, read in the cracks, give yourself permission to quit, follow your curiosity, and find your people. And know that in a world built to fracture attention, choosing the book is a quiet, strengthening rebellion.`,
            `Now your final perspectives screen brings five voices on what a reading life is for: the escapist, the self-improver, the empath, the lifelong learner, and a reformed non-reader who found their way in. Then we say goodbye. {name}, it's been the honor of my work to think alongside you through all twenty. Where you go next is yours, and I can't wait to imagine where your reading life takes you. Onward, one last time.`,
          ],
          image: `/voyager-assets/ela/l20-s5-before.webp`,
          imageCaption: `One last time. Every skill you built across twenty lessons is a MUSCLE that lives or fades by one habit: whether you keep reading. Reading for pleasure, by choice, over years, is the greatest predictor of lifelong knowledge and thinking, the soil all the rest grows in. Readers are made by PLEASURE and CHOICE, not force; there's no hierarchy, all reading counts, and VOLUME matters most. Build a reading life that's yours: always have a book going, read in the cracks, permission to quit, follow curiosity, find your people. In a world built to fracture attention, choosing the book is a quiet, strengthening rebellion. The final perspectives screen brings five voices on what reading is FOR. Then we say goodbye, {name}. It's been an honor.`,
          vocab: [
            { word: `intrinsic motivation`,
              definition: `Doing something for its own reward, like reading because you love it, rather than for grades or pressure. It's what sustains a lifelong habit.`,
              audioPrompt: `Intrinsic motivation, {name}, is doing something for its own reward, reading because you genuinely love it, not for a grade or because you're told to. It's the inner drive that keeps a reading habit alive for a whole lifetime.` },
            { word: `a reading identity`,
              definition: `Seeing yourself as "a reader," part of who you are. Once reading becomes part of your identity, the habit sustains itself.`,
              audioPrompt: `A reading identity, {name}, is seeing yourself as a reader, as part of who you are, not just something you do. Once reading becomes part of your identity, the habit largely takes care of itself for life.` },
            { word: `the examined life`,
              definition: `A life of ongoing thought, growth, and reflection. Lifelong reading is one of the surest paths to a mind that keeps growing.`,
              audioPrompt: `The examined life, {name}, is a life of ongoing thought, curiosity, and growth. Lifelong reading is one of the surest paths to it, a mind that keeps learning, questioning, and growing for as long as you live.` },
          ],
        },

        {
          id: `l20-perspectives`,
          type: `perspectives`,
          headline: `What Is A Reading Life For?`,
          intro: `{name}, why read, for life? Here are five voices, each holding a real piece of the answer. Don't crown one. The richest reading lives hold several of these at once. As you read, ask which already lives in you, and which you'd like to grow.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The escapist`,
              era: `A reason to read`,
              stance: `Reading is the best escape there is, a doorway out of your own life into a thousand others.`,
              quote: `"I have lived a thousand lives, and a thousand more await on the shelf."`,
              argument: `Reading lets you leave your own time, place, and problems entirely and live inside another world, an adventure, a romance, a far galaxy, a distant century. This isn't a lesser reason to read; it's one of the deepest. The sheer pleasure of getting lost in a story is what makes people read enough to become readers at all, and joy is a perfectly good reason on its own.`,
              evidence: `That readers are made by the pleasure of getting lost in a book; that volume, driven by enjoyment, builds the habit; that "guilty pleasure" reading still counts and still builds skill.`,
              strengths_and_limits: `Strength: honors joy as the true engine of the reading habit, and refuses to make reading a grim duty. Limit: pure escape alone can stay in a narrow comfort zone; the richest reading lives let escape coexist with books that also stretch and challenge.`,
            },
            {
              id: `p2`,
              voice: `The self-improver`,
              era: `A reason to read`,
              stance: `Reading is the cheapest, most powerful self-education on earth, the world's experts, for the price of a library card.`,
              quote: `"In a good nonfiction book, someone hands you a lifetime of their hard-won knowledge."`,
              argument: `Almost anything you want to learn, how to think, lead, build, cope, understand the world, someone has written a brilliant book about it. Reading is direct access to the best minds across all of history, on your own schedule, nearly free. No other habit compounds your knowledge and capability over a lifetime the way reading widely and deliberately does.`,
              evidence: `That reading is the strongest predictor of lifelong knowledge and vocabulary; that the reader keeps growing for decades after school; that following curiosity leads naturally to deeper books.`,
              strengths_and_limits: `Strength: captures reading's unmatched power as lifelong, self-directed education that compounds for decades. Limit: treating reading only as self-improvement can make it feel like work and crowd out joy, fiction and "useless" reading do profound things that a pure utility view misses.`,
            },
            {
              id: `p3`,
              voice: `The empath`,
              era: `A reason to read`,
              stance: `Reading, especially fiction, is the deepest empathy machine ever built, it lets you become someone else.`,
              quote: `"A novel is the only place you can truly live inside another person's mind."`,
              argument: `Stories do something nothing else can: they put you inside another human being's thoughts, fears, and feelings, across every line of difference, culture, era, gender, circumstance. Research links reading fiction to greater empathy and social understanding. In a divided world, the ability to inhabit a life unlike your own, which deep reading uniquely trains, may be among the most important things a person can develop.`,
              evidence: `That a key skill reading builds is the ability to inhabit another mind; that literature across cultures (you read widely this year) expands whose experience you can understand; that fiction is linked to empathy.`,
              strengths_and_limits: `Strength: names reading's near-magical power to build empathy and connect us across difference, a profoundly human reason. Limit: empathy from reading isn't automatic or guaranteed; it grows most when you read widely and reflectively, not just within a single familiar kind of story.`,
            },
            {
              id: `p4`,
              voice: `The lifelong learner`,
              era: `A reason to read`,
              stance: `Reading is how you keep your mind alive and growing for your entire life, long after school ends.`,
              quote: `"School ends. The reader's education never does."`,
              argument: `Most formal learning stops in early adulthood, but a reader's never does. Reading keeps your mind curious, sharp, and growing across every decade, into knowledge, ideas, and questions no classroom ever assigned. It's the engine of the examined life, a mind that keeps expanding rather than slowly closing. The non-reader, however bright at twenty, tends to stop growing; the reader doesn't.`,
              evidence: `That the reader keeps growing for decades while the non-reader slowly stops; that reading sustains vocabulary, knowledge, and thinking across life; that curiosity-led reading opens endless new doors.`,
              strengths_and_limits: `Strength: captures reading as the engine of a lifetime of growth and an examined, curious life. Limit: framed too solemnly, "lifelong learning" can sound like homework forever, the truth is it works precisely because, at its best, it's driven by pleasure and curiosity, not duty.`,
            },
            {
              id: `p5`,
              voice: `A reformed non-reader who found their way in`,
              era: `A reason to read`,
              stance: `I thought I "wasn't a reader." I was wrong, I just hadn't found the right book, or the right freedom.`,
              quote: `"Turns out I didn't hate reading. I hated being told what to read."`,
              argument: `For years I believed reading wasn't for me, school had made it a chore of forced books and tests. Then someone let me read whatever I wanted, a comic, then a series I loved, then, slowly, more. The habit grew from freedom and pleasure, not pressure. Almost no one truly "isn't a reader"; they just haven't been allowed to find their door in yet. The door exists for everyone.`,
              evidence: `That readers are made by choice and pleasure, not force; that forcing "important" books on reluctant readers backfires; that all reading counts and there's no hierarchy to climb first.`,
              strengths_and_limits: `Strength: frees anyone who's decided they "aren't a reader," and locates the real problem in how reading is often imposed, not in the person. Limit: finding your door still takes some trying, willingness to sample widely, quit freely, and follow curiosity until something genuinely clicks.`,
            },
          ],
          synthesisPrompt: `After all five: what is reading most FOR, for you, escape, learning, empathy, lifelong growth, or simply finding your way in? Which of these voices already lives in you, and which would you like to grow? And, honestly, what's your plan to keep reading after this course ends? In 5-6 sentences.`,
          reflectionPrompt: `One voice says almost no one truly "isn't a reader", they just haven't found their door in yet. What's your relationship with reading right now, and where's your door, the kind of book, topic, or world that genuinely pulls you in? What would help you read more, by choice, for the rest of your life?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why does the lesson call reading "the skill that keeps all the others alive"?`,
              options: [
                `Because reading is the only skill that matters and the others are useless.`,
                `Because the other skills are muscles that grow with reading and fade without it.`,
                `Because reading automatically gives you perfect grades in every subject.`,
                `Because you can only read after mastering every other skill first.`,
              ],
              correctIndex: 1,
              explanation: `The skills you built are muscles that grow when you read and fade when you don't, so reading is the soil the others grow in. The distractors dismiss the other skills, overpromise grades, or invert the order.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `According to the lesson, what is the single greatest predictor of a person's lifelong knowledge and thinking?`,
              options: [
                `The grades they earned in school.`,
                `How expensive their education was.`,
                `Whether they read for pleasure, by choice, over years.`,
                `How fast they can read words per minute.`,
              ],
              correctIndex: 2,
              explanation: `Research keeps finding that reading for pleasure, by choice, over years, predicts lifelong knowledge and thinking more than grades or schooling. The distractors point to grades, cost, or reading speed, none of which is the key factor.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `How does the lesson say readers are actually made?`,
              options: [
                `By force: assigned books, reading logs, and tests.`,
                `By pleasure and choice, reading what genuinely interests you.`,
                `By only ever reading the most difficult classic books.`,
                `By reading as fast as possible to finish the most books.`,
              ],
              correctIndex: 1,
              explanation: `Readers are made by pleasure and choice, being allowed to read what genuinely interests them, not by force. The distractors describe forced reading, a "hard classics only" rule, or speed, all of which can backfire.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the lesson say about comics, audiobooks, fan fiction, and genre novels?`,
              options: [
                `They don't count as "real" reading and should be avoided.`,
                `They're only acceptable for very young children.`,
                `They all count and all build readers, there's no hierarchy to climb.`,
                `They're fine but only after you've read enough classics first.`,
              ],
              correctIndex: 2,
              explanation: `There's no hierarchy: comics, audiobooks, fan fiction, magazines, and genre novels all count and all build readers, volume and pleasure come first. The distractors dismiss these formats, age-gate them, or make them a reward for classics.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does the lesson recommend giving yourself "permission to quit" books?`,
              options: [
                `Because finishing any book you start is always a complete and total waste of your time.`,
                `Because forcing through a book you hate is one of the fastest ways to kill the habit.`,
                `Because real readers never finish any book they start.`,
                `Because quitting books makes you read faster overall.`,
              ],
              correctIndex: 1,
              explanation: `Forcing yourself through a book you hate is one of the fastest ways to kill the reading habit, so abandoning one you're not enjoying frees you to find the ones that grab you. The distractors call finishing wasteful, claim readers never finish, or invent a speed benefit.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does "reading in the cracks of the day" mean?`,
              options: [
                `Only reading books that are physically cracked or damaged.`,
                `Reading exclusively during scheduled, hour-long sessions.`,
                `Using small pockets of time, before sleep, while waiting, to read.`,
                `Reading only the cracks, or gaps, between book chapters.`,
              ],
              correctIndex: 2,
              explanation: `Reading in the cracks means using small pockets of the day (ten minutes before sleep, a chapter while waiting), which, with a book always near you, add up to dozens of books a year. The distractors misread "cracks" literally or require long blocks.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the lesson say reading today is almost "a quiet act of rebellion"?`,
              options: [
                `Because books have now been made completely illegal in most countries and places around the world.`,
                `Because reading requires deep focus, the very attention that feeds are engineered to break.`,
                `Because reading is something no one is allowed to do anymore.`,
                `Because rebels are the only people who still read books.`,
              ],
              correctIndex: 1,
              explanation: `Reading requires sustained, deep attention, the exact focus the attention economy is built to fracture, so choosing a chapter over a scroll resists that and rebuilds the focus distraction erodes. The distractors invent illegality or absurd claims.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the lesson's practical, "gentle not grim" trick for reading more in a distracting world?`,
              options: [
                `Throw away your phone and abandon all of your technology completely and forever, starting today.`,
                `Force yourself to read for three uninterrupted hours daily.`,
                `Lower the friction to read and raise the friction to scroll, book on the pillow, phone in another room.`,
                `Only read books that have been turned into movies.`,
              ],
              correctIndex: 2,
              explanation: `The gentle move is to make the book easier to reach than the scroll, lowering friction for reading (book on the pillow) and raising it for the phone (in another room), rather than waging war on technology. The distractors are extreme or irrelevant.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Some people simply "aren't readers" by nature, and if reading has always felt like a chore to you, that's just who you are and it won't change.`,
              correctAnswer: false,
              explanation: `False, and few beliefs do more quiet damage than this one. The lesson argues that almost no one truly "isn't a reader" by nature, what's usually happened is that they haven't yet found their door in. Very often, the culprit is how reading was introduced: as a chore of forced books, reading logs, and tests, with no room for choice or pleasure. That well-meaning approach teaches many people that reading is a tedious duty to escape, and they understandably conclude reading "isn't for them." But the research and the stories of countless lifelong readers point the other way: readers are made by pleasure and choice, by being free to read what genuinely interests them, even things others might dismiss as "not serious." The reformed non-reader's experience captures it: "I didn't hate reading. I hated being told what to read." Given freedom, a comic, a gripping series, an audiobook, a topic they're passionate about, people who were sure they weren't readers discover the deep pleasure of getting lost in a book, and the habit grows from there. The single most powerful ingredient is choice, because choosing your own reading drives the volume that builds the skill and the habit. There's also no hierarchy you must climb first; all reading counts. So a long history of disliking reading isn't a verdict on who you are, it's a sign you haven't found the right book or the right freedom yet. The door genuinely exists for everyone; finding it just takes the willingness to sample widely, quit freely, and follow your curiosity until something clicks.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend says: "I want to read more, but I'm a slow reader, I always force myself to finish boring books, I only let myself read 'serious' literature, and I keep my phone right next to my bed." Using the whole lesson, what's the best advice?`,
              options: [
                `They're doing everything right; reading more is just about willpower.`,
                `Tell them reading doesn't really matter, so they shouldn't bother trying.`,
                `Nearly every habit they described works against them: speed doesn't matter (volume and pleasure do), they should quit boring books, drop the "serious only" rule since all reading counts, and move the phone away while keeping a book on the pillow, following curiosity toward what they actually enjoy.`,
                `Advise them to only read books assigned by a teacher to stay disciplined.`,
              ],
              correctIndex: 2,
              explanation: `This pulls together the whole lesson. Reading speed isn't the point (volume driven by pleasure is); forcing through boring books kills the habit (permission to quit); the "serious only" rule contradicts "no hierarchy, all reading counts"; and a bedside phone raises friction toward the scroll, so move it away and keep a book on the pillow, following curiosity. The distractors endorse the bad habits, dismiss reading, or reimpose force.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. This is the last one. Your answer is saved.`,
          prompts: [
            { id: `reflect-door`, category: `Your door in`, prompt: `Almost no one truly "isn't a reader", they just haven't found their door in. What's the kind of book, topic, or world that genuinely pulls you? When was the last time you got truly lost in something you were reading, and how could you find that feeling more often?` },
            { id: `reflect-why`, category: `Why you read`, prompt: `Five voices gave reasons to read: escape, self-education, empathy, lifelong growth, and simply finding your way in. Which is most true for you right now? Which would you like to grow into?` },
            { id: `reflect-plan`, category: `The honest plan`, prompt: `Be honest with yourself: what's your actual plan to keep reading after this course ends? Which practice, always have a book going, read in the cracks, permission to quit, find your people, lower the friction, would make the biggest difference for you, and will you commit to it?` },
            { id: `reflect-heritage`, category: `Readers in your home`, prompt: `Caro, you're raising readers and building a platform to grow them, in two languages and cultures. Knowing readers are made by choice and pleasure, not force, how do you want reading to feel in your home and on Coreverse? What's the door you most want to open for your kids?` },
            { id: `reflect-distraction`, category: `Reclaiming attention`, prompt: `Reading is a quiet rebellion against a world built to fracture your focus. Where has distraction eaten into your own attention? What would it feel like to reclaim some of that deep-focus muscle, one chapter at a time?` },
            { id: `reflect-whole`, category: `Looking back at twenty`, prompt: `This is the final lesson of the whole ELA course. Looking back across all twenty, analysis, writing, research, sources, media, and now this, what did this journey change in how you read, write, or think? What are you proud of, and what do you want to carry forward?` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the one that matters most, because it's the habit that keeps all the others alive. Two paths to a reading life that's truly yours.`,
          familyActivity: {
            title: `Build The Family Reading Life`,
            duration: `Ongoing, start in one evening`,
            description: `Turn your home into a place where readers are made, by pleasure and choice, not force. Start with one honest family conversation: what does each person genuinely love to read, or wish they could get into? No judgment, comics, fantasy, sports, audiobooks, cookbooks, manga, and bird guides all count equally. Then build the conditions together. First, everyone picks their own book (a library trip is perfect, choice is the most powerful ingredient). Second, create a small daily reading pocket the whole family protects, twenty quiet minutes after dinner, or reading time before bed, where everyone, including the grown-ups, reads something they chose. Kids become readers largely by seeing the adults they love read for pleasure, so this matters enormously. Third, make two rules explicit: anyone may quit a book they're not enjoying (no guilt), and there's no hierarchy, all reading counts. Fourth, make it social: share what you're reading at dinner, swap recommendations, maybe start a tiny family book club around a book or series you read together. And lower the friction, keep books everywhere (by beds, in bags, in the car), and consider a gentle "phones in another room at bedtime, book on the pillow" habit for everyone. The goal isn't to force reading; it's to make your home a place where falling in love with books is the easy, natural, joyful thing to do, and where every person, at every age, gets to keep growing for life.`,
          },
          projectOption: {
            title: `Design Your Lifelong Reading Life, ongoing (optional)`,
            duration: `Set up in 2 sessions, then ongoing for life`,
            description: `Create a real, personal system to keep reading for the rest of your life, this is the capstone of the entire course. Session one, find your doors: brainstorm honestly what genuinely pulls you, the genres, topics, authors, and worlds you're curious about, with zero concern for what's "impressive." Make a "want to read" list you're actually excited about, mixing pure-pleasure picks with a few that stretch you. Session two, build your system: choose the specific practices that will make reading stick for you. Decide where your "always have a book going" book will live; pick your daily reading pocket (when and where); set your friction rules (phone away, book reachable); and choose how you'll track what you read, a simple list, a notebook of favorite lines, an app, whatever you'll actually use. Then make it social: pick at least one person or community to share books with, a friend, a family member, an online group, or a book club, because a reading life lasts longer when it's shared. Finally, write yourself a short "reader's manifesto": who you want to be as a reader, why reading matters to you, and the permission slips you're giving yourself (to quit freely, to read "unserious" things, to follow your curiosity anywhere). Then, the real project: start living it, and revisit your system every few months. This isn't a two-week assignment; it's the beginning of the rest of your reading life, the habit that will keep every skill you built in this course alive and growing for decades.`,
            offerToParent: `Parent: this final project is the most important one in the course. Helping your child consciously design a personal, pleasure-driven system for lifelong reading, finding what genuinely pulls them, building sustainable habits, lowering distraction's friction, connecting with a reading community, and articulating their identity as a reader, directly serves the standards' goal of independent, lifelong literacy, and it's the single habit most likely to keep growing their knowledge, vocabulary, empathy, and thinking for the rest of their life. Every skill in this twenty-lesson course depends on it. Supporting this, modeling your own reading, enabling choice, protecting reading time, is one of the highest-leverage things you can do for your child's mind and future.`,
          },
          identityQuestion: `If you become, and stay, a reader, someone who reads by choice and pleasure for the rest of your life, what kind of person does that make you across the decades, in what you know, how you think, how deeply you understand others, and how alive your mind stays, that someone who let the habit fade after school, however bright, can never quite become?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. The last one. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads by choice, for life, not just for school.`,
            `A reader who follows their curiosity and quits books freely.`,
            `Someone whose mind keeps growing, one chapter at a time.`,
          ],
          saveKey: `identity_responses_ela_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. Twenty out of twenty. You did it, the entire ELA Voyager course, complete. Take that in for a moment. This last lesson held the most important truth of all: every skill you built across these twenty lessons is a muscle that lives or fades by one habit, whether you keep reading. You learned that reading for pleasure, by choice, over years, is the single greatest predictor of how much you'll know and think for the rest of your life, the soil all the rest grows in. You learned that readers are made by pleasure and choice, not force, that there's no hierarchy and all reading counts, and that volume and joy come first. You learned to build a reading life that's truly yours, always have a book going, read in the cracks, permission to quit, follow your curiosity, find your people, and that in a world built to fracture your attention, choosing the book is a quiet, strengthening rebellion. And now, the goodbye. {name}, it has been the genuine honor of my work to think alongside you through all twenty of these lessons, to watch you grow from the first into a reader, writer, and thinker who can analyze, create, question, and decode the world. What you do next is entirely yours. My one wish for you is simple: keep reading. Keep that mind of yours growing for the rest of your life. Wherever your reading life takes you, it's been a privilege to start the journey with you. Go be a Lifelong Reader, {name}. Onward, always. — Quill`,
          badge: `lifelong-reader`,
          badgeName: `Lifelong Reader`,
          xpEarned: 75,
          competencies: [
            `Understands lifelong reading as the habit that keeps every other literacy skill alive and growing`,
            `Knows that reading for pleasure, by choice, is the strongest predictor of lifelong knowledge and thinking`,
            `Recognizes that readers are made by pleasure and choice, not force, with no hierarchy of "worthy" books`,
            `Can build a personal reading life: always reading, reading in the cracks, permission to quit, finding community`,
            `Understands the attention economy and how deep reading both requires and rebuilds sustained focus`,
            `Uses friction deliberately, lowering it for reading and raising it for distraction`,
            `Has designed a personal vision and plan for a lifelong reading identity, completing the ELA Voyager course`,
          ],
          nextLessonPreview: {
            title: `ELA Voyager Course Complete`,
            hook: `You've finished all twenty lessons. The rest of your reading life starts now. Onward.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L20 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
