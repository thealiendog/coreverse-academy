// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L01 — Reading Fluency: Accuracy, Rate, and Expression
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RF.1-3.4
// REWRITE v2 (May 2026): Grade 1 accessible, ACCURACY/RATE/EXPRESSION
// identification game, shorter audio prompts, no em-dash chains
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
          guideText: `Welcome, {name}! I'm QUILL the porcupine. I LOVE words and books! Today we learn something called FLUENCY. Fluency is what makes reading feel SMOOTH, not bumpy. By the end you'll know how to read smoothly. Ready? Let's go!`,
          headline: `Reading Fluency: Accuracy, Rate, and Expression`,
          subtitle: `What makes reading smooth — and how to grow as a reader`,
          visual: `/explorer-assets/ela/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Reading Is Like Magic!`,
          paragraphs: [
            `Reading is AMAZING! Your eyes see letters on a page. Your brain turns them into PICTURES, FEELINGS, and IDEAS!`,
            `Look at this word: DRAGON. Did your brain imagine a dragon? Maybe a scaly one breathing fire? Six little letters made a whole creature appear in your mind! That's reading. It's a kind of MAGIC. The more you read, the more magical worlds you can visit!`,
          ],
          image: `/explorer-assets/ela/l01-s1-letters-meaning.webp`,
          imageCaption: `Letters become words. Words become pictures in your mind!`,
          vocab: [
            { word: `reading`, definition: `Looking at letters and understanding what they mean.`,
              audioPrompt: `Reading is one of the coolest things humans do! Your brain turns letters into stories, facts, and feelings. The more you practice, the better you get!` },
            { word: `letter`,  definition: `One symbol that stands for a sound. English has 26 letters.`,
              audioPrompt: `A letter is one symbol that stands for a sound. English has 26 letters. Put them together and you get words. Every book uses these same 26 letters!` },
            { word: `meaning`, definition: `What a word tells you. Understanding meaning is the goal of reading.`,
              audioPrompt: `Meaning is what a word tells you. Good reading isn't just SAYING words out loud. It's UNDERSTANDING what they mean. That's where the magic is!` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Part 1: ACCURACY`,
          paragraphs: [
            `Fluent reading has THREE parts! The first one is ACCURACY.`,
            `Accuracy means reading the RIGHT words. Not skipping. Not guessing. Not swapping words. If the page says "The fox ran fast," you read "The fox ran fast." Not "The dog ran far." Accuracy matters — even small slips can change the whole story!`,
          ],
          image: `/explorer-assets/ela/l01-s2-accuracy.webp`,
          imageCaption: `Accuracy — read the right words exactly as they are on the page.`,
          vocab: [
            { word: `fluency`,  definition: `Reading that's smooth and easy.`,
              audioPrompt: `Fluency is reading that's smooth and easy. Not bumpy. Not stuck on every word. Smooth like a river! When you're fluent, your brain can focus on the story!` },
            { word: `accuracy`, definition: `Reading the right words exactly as they are on the page.`,
              audioPrompt: `Accuracy is reading the right words exactly as they appear. If the page says BEAR, you read BEAR. Not BIRD. Accuracy is the foundation of fluency!` },
            { word: `skip`,     definition: `To miss or leave out. Skipping words is a common mistake.`,
              audioPrompt: `To skip means to miss or leave out. Sometimes our brains skip small words like THE or A. But every word matters! Slow down so you don't skip!` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Part 2: RATE`,
          paragraphs: [
            `The second part of fluency is RATE — your reading SPEED.`,
            `Reading too SLOWLY makes it hard to follow the story. By the end of the sentence, you might forget the beginning! Reading too FAST is also tricky — your brain can't keep up. The goal is JUST RIGHT. A steady, comfortable pace. Like walking, not racing!`,
          ],
          image: `/explorer-assets/ela/l01-s3-rate.webp`,
          imageCaption: `Rate — a comfortable, steady pace. Not too fast. Not too slow!`,
          vocab: [
            { word: `rate`,        definition: `How fast or slow you read.`,
              audioPrompt: `Rate means how fast or slow you read. Not super fast. Not super slow. JUST RIGHT — a pace where your brain can keep up with the meaning!` },
            { word: `pace`,        definition: `Another word for speed. A good reading pace feels comfortable.`,
              audioPrompt: `Pace is another word for speed. Good readers find a pace that works for them. Hard books need a slower pace. Easy books can go faster!` },
            { word: `comfortable`, definition: `Feeling good and easy.`,
              audioPrompt: `Comfortable means feeling good and easy. When reading is comfortable, it's not stressful. As you grow, your comfortable pace gets faster. That's how it should work!` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Part 3: EXPRESSION`,
          paragraphs: [
            `The third part of fluency is the most FUN — EXPRESSION!`,
            `Expression means reading with FEELING! When a character is surprised, your voice goes UP. When a character whispers, your voice goes SOFT. When you see a question mark? Your voice goes up at the end? When you see an exclamation point! Your voice gets EXCITED! Expression brings stories to LIFE!`,
          ],
          image: `/explorer-assets/ela/l01-s4-expression.webp`,
          imageCaption: `Expression — read with feeling. Voice up, voice soft, voice excited!`,
          vocab: [
            { word: `expression`, definition: `Reading with feeling in your voice.`,
              audioPrompt: `Expression is reading with feeling in your voice. Happy, sad, surprised, excited. When you use expression, the story becomes a PERFORMANCE that comes alive!` },
            { word: `voice`,      definition: `The sound that comes out when you talk or read.`,
              audioPrompt: `Your voice is the sound that comes out when you talk or read. Voices can get loud, soft, high, low, fast, or slow. Use your voice to bring stories to life!` },
            { word: `feeling`,    definition: `An emotion like happy, sad, scared, or excited.`,
              audioPrompt: `A feeling is an emotion. Happy. Sad. Scared. Excited. Stories are full of feelings! When you read with expression, you SHOW the feelings in your voice!` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why Fluency Matters`,
          paragraphs: [
            `Why do all three parts matter? Here's the secret!`,
            `When you read FLUENTLY, your brain stops working so hard on the WORDS. It can focus on the STORY! You stop thinking "what's this letter?" and start thinking "WOW, what happens next?" Fluent readers get LOST in books. They live inside the story. That's the goal!`,
          ],
          image: `/explorer-assets/ela/l01-s5-why-matters.webp`,
          imageCaption: `Fluent readers don't just read — they LIVE inside the story!`,
          vocab: [
            { word: `brain`,    definition: `The part of you that thinks.`,
              audioPrompt: `Your brain is the part of you that thinks. When you read fluently, your brain stops working hard on words. It has more energy for the story!` },
            { word: `lost`,     definition: `So into something you forget everything else.`,
              audioPrompt: `Getting lost in a book is the BEST feeling! You're so into the story you forget about everything else. Adults love this feeling too!` },
            { word: `worth it`, definition: `Valuable enough that the effort pays off.`,
              audioPrompt: `Worth it means the effort pays off. Practicing reading takes work. But it's SO worth it! Every fluent reader practiced their way there!` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `How to Practice`,
          paragraphs: [
            `How do readers GET fluent? They PRACTICE! Here are five ways:`,
            `One — READ EVERY DAY. Even just a little! Two — REREAD favorite books. Three — READ ALOUD. Four — LISTEN to good readers (audiobooks, parents reading to you). Five — DON'T WORRY about being perfect. EVERY reader was once a beginner. Even me!`,
          ],
          image: `/explorer-assets/ela/l01-s6-practice.webp`,
          imageCaption: `Practice every day. Reread favorites. Read aloud. Listen. Just keep going!`,
          vocab: [
            { word: `practice`, definition: `Doing something over and over to get better.`,
              audioPrompt: `Practice is doing something over and over to get better. Nobody is born knowing how to read. Every reader practiced their way to fluency. So can you!` },
            { word: `reread`,   definition: `To read something again. Helps you get more fluent.`,
              audioPrompt: `To reread means to read something again. Rereading is GOOD! Every time you reread, you read it better. You notice new things. Reread the books you love!` },
            { word: `beginner`, definition: `Someone just starting to learn.`,
              audioPrompt: `A beginner is someone just starting to learn. EVERY fluent reader was once a beginner. There's no shame in starting. It's where every skill begins!` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 ways readers can be fluent. Drag each one to the part it shows — accuracy, rate, or expression!`,
          buckets: [
            { id: `accuracy`,   label: `🎯 ACCURACY`,   color: `#FBBF24` },
            { id: `rate`,       label: `⏱️ RATE`,       color: `#34D399` },
            { id: `expression`, label: `🎭 EXPRESSION`, color: `#A78BFA` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `Reading the word "cat" when the page says "cat" — not guessing "dog."`,
              matchPhrase: `Yes! That's ACCURACY — reading the right words exactly as they appear!`,
              correctMatch: `accuracy` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `Making your voice excited when you see an exclamation point!`,
              matchPhrase: `Great! That's EXPRESSION — reading with feeling in your voice!`,
              correctMatch: `expression` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `Reading at a steady, comfortable pace — not too fast, not too slow.`,
              matchPhrase: `Yes! That's RATE — finding your just-right reading speed!`,
              correctMatch: `rate` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `Whispering softly when a character is whispering in the story.`,
              matchPhrase: `Perfect! That's EXPRESSION — matching your voice to what's happening!`,
              correctMatch: `expression` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What are the THREE parts of fluent reading?`,
              options: [`Speed, loudness, confidence`, `Accuracy, rate, expression`, `Letters, words, pictures`, `Books, glasses, quiet`],
              correctIndex: 1,
              explanation: `Accuracy, rate, expression! Three parts that work together to make smooth reading.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `What does ACCURACY mean in reading?`,
              options: [`Reading super fast`, `Reading the right words exactly as they appear`, `Reading very loudly`, `Reading with no breaks`],
              correctIndex: 1,
              explanation: `Accuracy means reading the right words exactly as they appear. Not skipping. Not guessing. Not swapping words!` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `What's the BEST reading RATE?`,
              options: [`The fastest you can go`, `Super slow, one word at a time`, `Comfortable and steady — just right`, `Different every day`],
              correctIndex: 2,
              explanation: `Comfortable and steady! Not racing. Not crawling. A pace where your brain can keep up with the meaning!` },
            { id: `l01-q4`, format: `true-false`,
              question: `Reading with EXPRESSION means using feeling in your voice.`,
              correctAnswer: true,
              explanation: `True! Expression brings stories to life. Voice up for surprise. Voice soft for whispers. Voice excited for exclamations!` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `Doing something over and over to get better is called ___.`,
              options: [`practice`, `playing`, `running`, `eating`],
              correctIndex: 0,
              explanation: `Practice! Every fluent reader practiced their way there. Reading every day. Rereading favorites. Reading aloud!` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why does fluency MATTER?`,
              options: [`So you can finish books faster than friends`, `When you're fluent, your brain can focus on the story instead of the words`, `So adults are impressed`, `Fluency doesn't matter`],
              correctIndex: 1,
              explanation: `When you're fluent, your brain doesn't work so hard on words. It has more energy for the STORY! You get lost in books!` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Even GROWN-UP readers practice fluency! Audiobook narrators get PAID to read with great expression. Famous voice actors started as kids reading aloud. Reading isn't just a school skill — it's a skill for your whole life!`,
          familyAdventure: `Have a FAMILY READ-ALOUD tonight! Pick a book everyone likes. Take turns reading a page out loud. Practice all THREE parts: read the right words (accuracy), comfortable speed (rate), and feeling (expression). Make different voices for different characters!`,
          creativePrompt: `Design your DREAM READING SPOT! Draw a picture of where you'd love to read. A cozy chair? A treehouse? A pillow fort? Make it perfect for YOU. Add pets, snacks, books — whatever! Then talk to a grown-up about making one for real.`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}! You know what reading FLUENCY is — accuracy, rate, and expression! Three parts that turn bumpy reading into smooth reading. Every reader was once a beginner. You're on the path right now. Keep going! Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L01] Loaded: "Reading Fluency" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
