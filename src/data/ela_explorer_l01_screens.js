// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L01 — Reading Fluency: Accuracy, Rate, and Expression
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RF.1-3.4
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L01 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-01`,
      title:     `Reading Fluency: Accuracy, Rate, and Expression`,
      duration:  12,
      xpReward:  50,
      badge:     `fluency-explorer`,
      badgeName: `Fluency Explorer`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. I'm QUILL. I love words. I love books. I love the way ink on a page can become a whole entire world inside your head. Today, we're starting our journey through reading and writing together — and we're starting with something called FLUENCY. Fluency is what makes reading feel SMOOTH instead of bumpy. By the end of this lesson, you'll know exactly what fluent reading is — and how to get better at it. Let's begin.`,
          headline: `Reading Fluency: Accuracy, Rate, and Expression`,
          subtitle: `What makes reading smooth — and how to grow as a reader, one book at a time`,
          visual: `/explorer-assets/ela/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Reading Is Magic`,
          paragraphs: [
            `Here's something AMAZING about reading. Your eyes look at squiggles on a page — letters — and your brain turns them into PICTURES, FEELINGS, and IDEAS.`,
            `Look at this word: DRAGON. Did your brain just imagine a dragon? Maybe scaly. Maybe breathing fire. That's READING. Six little letters made a whole creature appear in your mind. Reading is honestly a kind of magic. And the more you read, the more magical worlds you can visit.`,
          ],
          image: `/explorer-assets/ela/l01-s1-letters-meaning.webp`,
          imageCaption: `Letters become words. Words become pictures in your mind. That's the magic of reading.`,
          vocab: [
            { word: `reading`,    definition: `Looking at letters and words on a page and understanding what they mean.`,
              audioPrompt: `Reading, {name}, is one of the most amazing things humans do. We take little marks on a page — letters — and our brains turn them into meaning. Into stories. Into facts. Into feelings. Reading is a SKILL. Babies can't do it. We learn it. The more you practice, the better you get. And once you can read well, the WHOLE world of books opens up to you. Books about anything. Anything at all.` },
            { word: `letter`,     definition: `One symbol that stands for a sound. English has 26 letters in its alphabet.`,
              audioPrompt: `A letter is one symbol that stands for a sound, {name}. English has 26 letters. A through Z. Each letter makes a sound — sometimes more than one. When we put letters together in the right order, they make WORDS. C-A-T makes 'cat.' D-O-G makes 'dog.' Letters are the tiny building blocks of all reading. Every book you'll ever read is made of these same 26 letters, arranged in different ways.` },
            { word: `meaning`,    definition: `What a word or sentence is trying to tell you. The whole point of reading is understanding meaning.`,
              audioPrompt: `Meaning is what a word or sentence is trying to tell you, {name}. It's the whole point of reading. You can sound out every word on a page perfectly — but if you don't understand the MEANING, you haven't really read. Good reading isn't just about saying words out loud. It's about understanding what those words mean. That's where the magic happens.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `First Ingredient: ACCURACY`,
          paragraphs: [
            `Fluent reading has THREE ingredients. The first one is ACCURACY.`,
            `Accuracy means reading the RIGHT words. Not skipping words. Not swapping in different words. Not guessing. Just reading what's actually there on the page. If a sentence says "The fox ran fast," accuracy means you read "The fox ran fast" — not "The dog ran far." Small slips can change a story completely. Accuracy matters.`,
          ],
          image: `/explorer-assets/ela/l01-s2-accuracy.webp`,
          imageCaption: `Accuracy — reading the right words. Each word is a careful step on the path of the story.`,
          vocab: [
            { word: `fluency`,    definition: `Reading that's smooth and easy — not bumpy or stuck.`,
              audioPrompt: `Fluency means reading that's smooth and easy, {name}. Not bumpy. Not stuck on every other word. Smooth like a river. When you're FLUENT, you can read without all your brain power going into figuring out each letter. That frees your brain to focus on the actual story. Fluency is a goal every reader works toward — including grown-up readers reading hard books.` },
            { word: `accuracy`,   definition: `Reading the right words exactly as they appear on the page.`,
              audioPrompt: `Accuracy means reading the right words exactly as they appear on the page, {name}. Not skipping. Not guessing. Not swapping one word for another. If the page says BEAR, you read BEAR — not BIRD. Accuracy is the foundation of fluency. Without it, the story you're reading isn't actually the story the author wrote. It becomes something else entirely.` },
            { word: `skip`,       definition: `To miss or leave out. Skipping words is one common reading mistake.`,
              audioPrompt: `Skip means to miss or leave out, {name}. Skipping words is one of the most common reading mistakes. Especially small words like THE or A or IS. Our brains sometimes try to read FAST and just leave them out. But every word matters! Every word is there for a reason. Slow down enough to read each one. It's okay to be careful. Careful is GOOD.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Second Ingredient: RATE`,
          paragraphs: [
            `The second ingredient of fluency is RATE — your reading SPEED.`,
            `Reading too SLOWLY makes it hard to follow the story. By the time you finish a sentence, you might forget how it began! But reading too FAST is just as tricky — your brain can't keep up with meaning. The goal isn't fastest. The goal is JUST RIGHT. A steady, comfortable pace. Like walking, not running, not crawling.`,
          ],
          image: `/explorer-assets/ela/l01-s3-rate.webp`,
          imageCaption: `Rate — a comfortable, steady pace. Not racing. Not crawling. Just right, like a gentle river.`,
          vocab: [
            { word: `rate`,       definition: `How fast (or slow) you read. Good reading has a comfortable, steady rate.`,
              audioPrompt: `Rate means how fast or slow you read, {name}. Some kids read super slow because every word is hard. Some kids read super fast because they want to seem smart. Neither is great. The BEST rate is COMFORTABLE — a pace where your brain can keep up with meaning. Like walking comfortably, not racing, not crawling. As you practice, your good reading rate naturally gets faster.` },
            { word: `pace`,       definition: `Another word for speed. A good reading pace feels comfortable and steady.`,
              audioPrompt: `Pace is another word for speed, {name}. We use it when we want to talk about a steady, even speed. 'A walking pace.' 'A reading pace.' Good readers find a pace that works for them — and for the kind of book they're reading. Hard books often need a slower pace. Easy books can be read at a faster pace. Smart readers ADJUST their pace to fit what they're reading.` },
            { word: `comfortable`, definition: `Feeling good and easy. Reading at a comfortable pace helps you understand.`,
              audioPrompt: `Comfortable means feeling good and easy, {name}. When reading is COMFORTABLE, it's not stressful. It's not exhausting. It's not racing. It's just RIGHT for you. As you grow as a reader, your comfortable pace changes. What was comfortable at age 6 will feel slow at age 8. That's GROWTH. That's how it should work.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Third Ingredient: EXPRESSION`,
          paragraphs: [
            `The third ingredient of fluency is the most FUN — EXPRESSION.`,
            `Expression means reading with FEELING. When a character is surprised, your voice goes UP. When a character whispers, your voice gets SOFT. When there's a question mark, your voice goes up at the end? When there's an exclamation point, your voice gets EXCITED! Expression turns reading into PERFORMANCE. It brings the story to LIFE.`,
          ],
          image: `/explorer-assets/ela/l01-s4-expression.webp`,
          imageCaption: `Expression — reading with feeling. Voice rising, falling, whispering, exclaiming. The story comes alive.`,
          vocab: [
            { word: `expression`, definition: `Reading with feeling in your voice — happy, sad, surprised, excited.`,
              audioPrompt: `Expression means reading with feeling in your voice, {name}. Happy. Sad. Surprised. Mysterious. Excited. Quiet. When a reader uses expression, the story becomes a PERFORMANCE. Listeners feel what the characters feel. Expression is what makes audiobooks so much better than a robot reading the same words. It's the human heart, coming through the words.` },
            { word: `voice`,      definition: `The sound that comes out when you talk or read aloud. Your voice can show feelings.`,
              audioPrompt: `Your voice is the sound that comes out when you talk or read aloud, {name}. Voices can do so many things! Get loud. Get soft. Go high. Go low. Get fast. Get slow. Get serious. Get playful. Your voice is one of your superpowers. When you read aloud, you get to USE your voice to bring stories to life. Try it. Make a story sound exactly how you imagine it.` },
            { word: `feeling`,    definition: `An emotion like happy, sad, scared, or excited. Stories are full of feelings.`,
              audioPrompt: `A feeling is an emotion, {name}. Happy. Sad. Scared. Excited. Curious. Brave. Stories are FULL of feelings — because life is full of feelings. When you read with expression, you SHOW the feelings in your voice. That helps you UNDERSTAND the story better too. Because feelings are a huge part of every story ever written.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why Fluency Matters`,
          paragraphs: [
            `So why do all three ingredients matter? Here's the secret.`,
            `When you read FLUENTLY, your brain stops working so hard on the WORDS — and starts working on the MEANING. You stop thinking "what's this letter?" and start thinking "WOW, what happens next?" Fluent readers get LOST in books. They forget time. They live inside the story. That's the goal. And it's worth ALL the practice.`,
          ],
          image: `/explorer-assets/ela/l01-s5-why-matters.webp`,
          imageCaption: `Fluent readers don't just read — they LIVE inside the story. The words disappear. The world appears.`,
          vocab: [
            { word: `brain`,      definition: `The part of your body that thinks. When you read fluently, your brain can focus on meaning.`,
              audioPrompt: `Your brain is the part of your body that thinks, {name}. When you're learning to read, your brain works HARD on the words themselves. What letter is that? What sound does it make? What's this word? It takes up a lot of brain power. But as you become fluent, that work gets EASIER. Your brain doesn't have to think as much about the words — so it has more energy for the STORY. That's when reading becomes truly fun.` },
            { word: `lost`,       definition: `When you're so into something, you forget everything else. Fluent readers get lost in books.`,
              audioPrompt: `Getting lost in a book is one of the best feelings ever, {name}. It means you're so caught up in the story that you forget about everything else. The time. The room you're in. What you were supposed to do next. The story takes over. Adult readers love getting lost in books too. It's a kind of magical vacation your imagination takes. The more fluent you become, the more often you can have this experience.` },
            { word: `worth it`,   definition: `Valuable enough that the effort pays off. Practicing reading is WORTH IT.`,
              audioPrompt: `When something is WORTH IT, {name}, it means the effort pays off. Practicing reading takes time. It takes work. Sometimes it's frustrating. But it is SO worth it. Every fluent reader you know — every adult who loves books — went through this same practice. They struggled with words too. They kept going. And now they can read ANYTHING they want. That's what's coming for you. Keep going.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `How to Practice`,
          paragraphs: [
            `Want to know how readers GET fluent? They PRACTICE. Here's how:`,
            `One — READ EVERY DAY. Even just a little. Two — REREAD favorite books. Each time, you get better. Three — READ ALOUD. It builds expression and accuracy. Four — LISTEN to good readers — audiobooks, parents reading to you, teachers. Five — DON'T WORRY about being perfect. EVERY reader was once a beginner. Even me.`,
          ],
          image: `/explorer-assets/ela/l01-s6-practice.webp`,
          imageCaption: `Practice. Every day. Reread favorites. Read aloud. Listen to others. Don't worry about perfect. Just keep going.`,
          vocab: [
            { word: `practice`,   definition: `Doing something over and over to get better at it. Practice makes readers fluent.`,
              audioPrompt: `Practice is doing something over and over to get better at it, {name}. Nobody is born knowing how to read. EVERY reader practiced their way to fluency. Just like soccer players practice kicking. Just like musicians practice instruments. Practice doesn't have to feel like work. Reading a fun book IS practice. Listening to stories IS practice. Talking about books IS practice. Practice is everywhere.` },
            { word: `reread`,     definition: `To read something again. Rereading helps you get more fluent and notice new things.`,
              audioPrompt: `To reread means to read something again, {name}. And here's a beautiful truth — rereading is GOOD. It's not boring. It's not babyish. Every time you reread, you read it BETTER. You notice things you missed. You read more fluently. Adult readers reread favorite books for their whole lives. Some books are even MORE wonderful the second or third time. Reread the books you love.` },
            { word: `beginner`,   definition: `Someone just starting to learn. Every reader was once a beginner.`,
              audioPrompt: `A beginner is someone just starting to learn, {name}. EVERY single fluent reader you know was once a beginner. Your parents. Your teachers. The author of your favorite book. Me. There's no shame in being a beginner. It's how every skill starts. The only way to become an EXPERT is to start as a BEGINNER. So if reading is hard right now — you're doing it right. You're at the very beginning of something wonderful.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about fluency, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `Rereading a book helps you become a better reader.`,
              matchPhrase: `Yes! Every time you reread, you get more fluent. You notice new things. You read more smoothly. Rereading is one of the best things readers do — at any age.`,
              correctMatch: `fact` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `Reading with EXPRESSION makes stories come alive.`,
              matchPhrase: `True! When your voice goes up for surprise, soft for whispers, and excited for exclamations — the story comes ALIVE. Expression is what makes reading aloud feel like a performance.`,
              correctMatch: `fact` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `The fastest reader is always the best reader.`,
              matchPhrase: `Not quite! Reading too fast means your brain can't keep up with meaning. The best readers go at a COMFORTABLE pace — not too fast, not too slow. Speed isn't the goal. Understanding is.`,
              correctMatch: `myth` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `Reading aloud in a flat robot voice is the goal.`,
              matchPhrase: `Definitely not! That's the OPPOSITE of fluent reading. Fluent readers use EXPRESSION — feelings in their voice. Robot voices miss all the magic.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What are the THREE ingredients of fluent reading?`,
              options: [`Speed, loudness, and confidence`, `Accuracy, rate, and expression`, `Letters, words, and pictures`, `Books, glasses, and quiet`],
              correctIndex: 1,
              explanation: `Accuracy, rate, and expression! Accuracy means reading the right words. Rate means a comfortable pace. Expression means reading with feeling. All three together make fluent reading.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `What does ACCURACY mean in reading?`,
              options: [`Reading super fast`, `Reading the right words exactly as they appear`, `Reading very loudly`, `Reading with no breaks`],
              correctIndex: 1,
              explanation: `Accuracy means reading the right words exactly as they appear on the page. Not skipping. Not guessing. Not swapping words. Every word matters. Accuracy is the foundation of good reading.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `What's the BEST reading rate (speed)?`,
              options: [`The fastest you can go`, `Super slow, one word at a time`, `Comfortable and steady — fast enough to follow the meaning, slow enough to understand`, `Different every day`],
              correctIndex: 2,
              explanation: `Comfortable and steady! Not racing, not crawling. A pace where your brain can keep up with meaning. As you grow, your comfortable pace naturally gets faster.` },
            { id: `l01-q4`, format: `true-false`,
              question: `Reading with EXPRESSION means using feeling in your voice — soft for whispers, excited for exclamations.`,
              correctAnswer: true,
              explanation: `True! Expression brings stories to life. Voice up for surprise. Voice soft for whispers. Voice excited for exclamation points. Voice up at the end of questions? Expression is what makes reading aloud feel like a performance.` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `Doing something over and over to get better at it is called ___.`,
              options: [`practice`, `playing`, `running`, `eating`],
              correctIndex: 0,
              explanation: `Practice! Every fluent reader practiced their way there. Reading every day, rereading favorites, reading aloud, listening to stories — all of it is practice. And every bit of practice counts.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why does fluency MATTER so much?`,
              options: [`So you can finish books faster than your friends`, `When you're fluent, your brain stops working on words and can focus on the meaning and the story`, `So adults will be impressed`, `Fluency doesn't really matter`],
              correctIndex: 1,
              explanation: `When you're fluent, your brain stops working hard on the words — and gets to focus on MEANING. You can get lost in stories. You can really understand what you read. That's the goal. That's why fluency is worth all the practice.` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Even GROWN-UP readers work on fluency. When adults read books out loud — like for audiobooks, or in schools, or to their kids — they practice the same three things you're practicing. Accuracy. Rate. Expression. Famous audiobook narrators get PAID to read with great expression. Some kids who love reading grow up to do exactly that as a job. Reading isn't just a skill for school. It's a skill for your whole life.`,
          familyAdventure: `Try a FAMILY READ-ALOUD tonight. Pick a book everyone likes. Take turns reading a page out loud. Practice ALL three ingredients: read the right words (accuracy), at a comfortable pace (rate), with feeling in your voice (expression). Try making different voices for different characters. Notice what feels good. Notice what feels tricky. Reading aloud together is one of the best things families can do.`,
          creativePrompt: `Design your DREAM READING SPOT. Draw a picture of where you'd most love to read a book. Is it a cozy chair? A treehouse? Under a blanket fort? On a hammock? Outdoors? Inside? With pets? With snacks? Make it perfect for YOU. Then talk to a grown-up about how you might actually make a real reading spot like this at home.`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}! You now know what reading FLUENCY really is — accuracy, rate, and expression. The three ingredients that turn bumpy reading into smooth reading. And smooth reading turns letters into worlds. Every reader was once a beginner. Every reader practiced their way to fluency. You're on that path right now. Keep going. I'll be here for every lesson. I carry every word with me. Thank you for journeying with me.`,
          badge: `fluency-explorer`,
          badgeName: `Fluency Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L01] Loaded: "Reading Fluency: Accuracy, Rate, and Expression" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
