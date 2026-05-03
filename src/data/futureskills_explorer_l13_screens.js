// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 13
// "What Is Data?"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l13_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-13',
      title:     `What Is Data?`,
      duration:  12,
      xpReward:  50,
      badge:     'data-detective',
      badgeName: `Data Detective`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every time you use an app, watch a video, click a link, or make a purchase online, you create data. Companies collect this data, analyze it, and use it to understand you — sometimes better than you understand yourself. Data has been called "the new oil" of the digital economy. Understanding what data is and how it works gives you real power in a world that runs on it.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Data?`,
          paragraphs: [
            `Data is any information that can be collected, stored, and analyzed. Numbers, text, images, videos, sounds, locations, temperatures, movement patterns — all of these are data. Digital data is information stored as binary code (0s and 1s), which is how computers handle everything from a single text message to a full-length film. Data doesn't have to be something you choose to share — it includes anything that can be measured and recorded.`,
            `We create data constantly, whether we mean to or not. Every photo you take creates image data. Every message you send creates text data. Every website you visit creates browsing data. Every step your phone counts creates movement data. Every purchase you make creates transaction data. The amount of data created globally every single day is staggering — billions of photos, messages, searches, and interactions, all generating digital traces that persist long after the moment passes.`,
            `Data has become one of the most valuable resources in the modern world — worth more than oil in some analyses. The reason is simple: data reveals patterns, and patterns enable predictions. A business that knows what its customers want before they ask can act faster and more effectively than one that's guessing. A hospital that can spot disease patterns early saves lives. A city that can predict traffic or energy demand can serve residents better. Data is the raw material that intelligence — human or artificial — runs on.`,
          ],
          image:        '/explorer-assets/future-skills/l13-magazine-what-is-data.png',
          imageCaption: `What is data — any information that can be collected, stored, and analyzed, from numbers and text to images, locations, and movement`,
          vocab: [
            { word: `data`,         definition: `Any information that can be collected, stored, and analyzed — including numbers, text, images, sounds, locations, and measurements of any kind.`,                                                audioPrompt: `Data — any information that can be collected, stored, and analyzed. Including numbers, text, images, sounds, locations, and measurements of any kind.` },
            { word: `digital data`, definition: `Information stored as binary code (0s and 1s) — the form in which computers store and process everything, from a single text message to a full-length film.`,                                   audioPrompt: `Digital data — information stored as binary code, 0s and 1s. The form in which computers store and process everything, from a single text message to a full-length film.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Structured vs Unstructured Data`,
          paragraphs: [
            `Not all data looks the same. Structured data is organized in a clear, consistent format — like a spreadsheet with rows and columns. A school's database of student names, grades, and attendance is structured. A hospital's record of patient names, diagnoses, and test results is structured. Structured data is easy for traditional software to search, sort, and analyze because every piece of information has a defined place and format.`,
            `Unstructured data has no standard format. Social media posts, emails, videos, photos, audio recordings, and handwritten notes are all unstructured. They can contain enormously valuable information — but it doesn't fit neatly into rows and columns. About 80% of all data created in the world is unstructured. For most of computing history, this data was very difficult to analyze at scale, because traditional database tools were designed for structured information.`,
            `AI has dramatically changed what's possible with unstructured data. Machine learning systems can find patterns in social media posts, recognize objects in photos, transcribe audio, and extract meaning from documents that no human could read in a lifetime. This is one of the reasons AI has become so valuable: it makes the vast majority of the world's data — the unstructured 80% — actually analyzable. And the ability to find patterns in previously unanalyzable data creates entirely new types of insight.`,
          ],
          image:        '/explorer-assets/future-skills/l13-magazine-structured-unstructured.png',
          imageCaption: `Structured vs unstructured data — spreadsheets and databases vs. posts, videos, and photos — about 80% of all data is unstructured`,
          vocab: [
            { word: `structured data`,   definition: `Data organized in a clear, consistent format — like rows and columns in a spreadsheet — making it easy for computers to search, sort, and analyze.`,                                      audioPrompt: `Structured data — data organized in a clear, consistent format, like rows and columns in a spreadsheet. Making it easy for computers to search, sort, and analyze.` },
            { word: `unstructured data`, definition: `Data with no standard format — like social media posts, videos, photos, and emails — making it harder for traditional software to analyze, though AI is increasingly capable of it.`,     audioPrompt: `Unstructured data — data with no standard format, like social media posts, videos, photos, and emails. Harder for traditional software to analyze, though AI is increasingly capable of it.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `How Data Creates Value`,
          paragraphs: [
            `Raw data alone isn't valuable — analysis is what creates value. A streaming service collects data on everything you watch: what you finish, what you quit halfway through, what you replay, what time of day you watch, and how long you browse before choosing something. Their algorithms analyze this data to build a model of your preferences — and use that model to predict what you'll want to watch next. The goal is to keep you engaged, because every minute you watch generates more data and more value.`,
            `An online shop tracks your purchase history, browsing patterns, search terms, and even how long you hover over certain products before moving on. By analyzing millions of customers' behavior patterns, they can predict what any individual is likely to buy next and show it to them before they've thought to search for it. This kind of predictive recommendation drives a substantial portion of all online sales — not because customers were convinced by advertising, but because the data revealed what they already wanted.`,
            `A music app tracks every song you play, skip, replay, or add to a playlist — and compares your patterns with those of millions of other listeners. From these patterns it builds a model of your musical taste that can predict, with surprising accuracy, what you'll enjoy from songs you've never heard. This is data analysis at scale: raw behavior generating predictions that feel almost personal. The pattern is the same across all of these examples — collect behavior data, find patterns, use patterns to predict what comes next, and make that prediction useful.`,
          ],
          image:        '/explorer-assets/future-skills/l13-magazine-data-value.png',
          imageCaption: `How data creates value — raw behavior patterns, analyzed at scale, become predictions that feel personal and drive billions of decisions`,
          vocab: [
            { word: `data analysis`, definition: `The process of examining raw data to find patterns, draw conclusions, and support decisions — what transforms raw collected information into something genuinely useful.`,                         audioPrompt: `Data analysis — the process of examining raw data to find patterns, draw conclusions, and support decisions. What transforms raw collected information into something genuinely useful.` },
            { word: `algorithm`,     definition: `In this context, the software system that analyzes a user's data and uses discovered patterns to predict what they'll want to see, hear, or buy next.`,                                         audioPrompt: `Algorithm — in this context, the software system that analyzes a user's data and uses discovered patterns to predict what they'll want to see, hear, or buy next.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Your Data and Privacy`,
          paragraphs: [
            `Every app you use is almost certainly collecting data about you. Location data tells companies where you go. Usage data tells them what you do and for how long. Contact data tells them who you know. Behavioral data tells them how you make decisions. Together, these paint a detailed picture of your habits, interests, relationships, and vulnerabilities. Most people are surprised, when they look carefully at app permissions, by how much they've agreed to share without realizing it.`,
            `Free apps are often "free" because your data is the product — it's collected and sold to advertisers, data brokers, and other businesses who want to understand and influence your behavior. The business model is simple: the more you use the app for free, the more data they collect, the more they can charge advertisers to reach people like you. You've probably never read a terms of service agreement, but many of them grant companies very broad rights to collect, analyze, and share your information.`,
            `Understanding that your attention and data have real commercial value is the first step to making smarter choices. You don't have to avoid all apps — but you can ask: does this app need the permissions it's asking for? What is the company's business model, and does it involve selling my data? Is the value I get from this service worth what I'm giving up? These questions won't always lead to the same answers — but asking them consistently is how you stay in control rather than being the product.`,
          ],
          image:        '/explorer-assets/future-skills/l13-magazine-data-privacy.png',
          imageCaption: `Your data and privacy — every app collects information about you, and understanding that changes how thoughtfully you can choose what to share`,
          vocab: [
            { word: `data privacy`,    definition: `The right to control who can collect, access, use, and share information about you — increasingly important as more of daily life generates digital data.`,                                    audioPrompt: `Data privacy — the right to control who can collect, access, use, and share information about you. Increasingly important as more of daily life generates digital data.` },
            { word: `terms of service`, definition: `The legal agreement between a user and a platform that outlines what the platform can do with your data — rarely read, but often granting broad rights to collect and use your information.`, audioPrompt: `Terms of service — the legal agreement between a user and a platform that outlines what the platform can do with your data. Rarely read, but often granting broad rights to collect and use your information.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each example, then decide: is it structured data or unstructured data?`,
          guideText:     `Structured data fits neatly into rows and columns — clear categories, consistent format. Unstructured data has no standard format — like posts, videos, and conversations. Can you tell the difference?`,
          columnHeaders: [`The Data Example`, `Structured or Unstructured?`],
          items: [
            { image: 'l13-game-spreadsheet.png',  label: `A table with a row for each student and columns for their name, grade, and test score.`,                                            correctMatch: 'structured',   objectPosition: 'center 50%', matchPhrase: `Structured Data! A table with defined rows and columns — where every entry fits into a predetermined category — is the clearest example of structured data. Each student has a row; each attribute (name, grade, score) has a column. This format is easy for traditional database software to search, sort, and analyze without any AI. "How many students scored above 90?" is a question a simple database can answer instantly from structured data.` },
            { image: 'l13-game-video.png',         label: `A two-minute video of a birthday party with no labels, categories, or descriptions attached.`,                                      correctMatch: 'unstructured', objectPosition: 'center 50%', matchPhrase: `Unstructured Data! A raw video file has no rows or columns — it's a stream of image frames and audio samples. There's no standard place to put the information it contains (who's in it, what's happening, what emotions are expressed). To analyze it, you need AI — specifically computer vision and audio analysis — to extract meaning from the raw content. About 80% of all data created every day looks like this: rich with information but without the structure that makes it easy to search or analyze.` },
            { image: 'l13-game-database.png',      label: `A purchase log with columns for date, product name, quantity, and price — one row per sale.`,                                       correctMatch: 'structured',   objectPosition: 'center 50%', matchPhrase: `Structured Data! A purchase log with consistent columns — date, product, quantity, price — is classic structured data. Every transaction fits the same format, which makes it straightforward to run analyses: total sales by product, revenue by month, most popular items. This is how retailers, banks, and logistics companies have tracked transactions for decades. The structure makes the analysis possible without needing AI — though AI can find deeper patterns even here.` },
            { image: 'l13-game-social-post.png',   label: `A social media post with a photo, a written caption, emoji reactions, and comment replies.`,                                       correctMatch: 'unstructured', objectPosition: 'center 50%', matchPhrase: `Unstructured Data! A social media post combines an image, free-form text, symbols (emoji), and other people's responses — none of which fit a standard row-and-column format. To understand what's in a post — the sentiment, the subject, the relationships between people commenting — you need AI: image recognition for the photo, natural language processing for the text, sentiment analysis for the tone. This is why social media platforms invest so heavily in AI — their entire product is built on unstructured data.` },
          ],
          buckets: [
            { id: 'structured',   label: `📊 Structured Data`,   color: '#60A5FA' },
            { id: 'unstructured', label: `📂 Unstructured Data`, color: '#F59E0B' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about data. Answer all 6 questions to earn your Data Detective badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is data?`,
              options:      [`Only numbers and statistics`, `Any information that can be collected, stored, and analyzed`, `Information only found on the internet`, `Computer code that runs programs`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why is raw data alone not very valuable?`,
              options:      [`Because data takes too much storage space`, `Because data is usually inaccurate`, `Because you need analysis to find the patterns and insights that make data useful`, `Because most data is unstructured`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Why are many apps free to use?`,
              options:      [`Because companies want to be generous`, `Because governments fund them`, `Because your data is the product — it's collected and sold to advertisers`, `Because free apps make money from donations`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Every photo you take, every message you send, and every website you visit creates data — even if you never deliberately choose to share it.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `About 80% of all data has no standard format — like social media posts, videos, and emails — and is called ___ data.`,
              options:      [`unstructured`, `broken`, `invisible`, `raw`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `A streaming service collects data on what you watch, when you pause, what you replay, and what you quit. What is the main reason it does this?`,
              options:      [`To report viewing habits to the government`, `To predict what you'll want to watch next and keep you engaged`, `To share your preferences with other users`, `To make videos load faster`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for "how much data is created every day" — the visualizations people have made to show it are genuinely staggering. Then search "data broker" to see who collects and sells the data that apps gather about you.`,
          familyAdventure: `Go to your phone's settings and look at app permissions together. Which apps have access to your location? Your microphone? Your contacts? Your camera? Are any of these surprising? Discuss: does this app really need this permission to work? Turn off any that seem unnecessary. This is data privacy in practice — and it takes about five minutes.`,
          creativePrompt:  `Collect data about your own week for five days. Each day, record: hours of sleep, minutes of screen time, meals eaten, and how you'd rate your energy level from 1 to 10. At the end, make a simple chart and look for patterns. Does sleep affect energy? Does screen time affect sleep? You've just run a real data analysis — on yourself.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'data-detective',
          badgeName: `Data Detective`,
          message:   `Brilliant work, {name}! You now know that data is everywhere — and that raw data only becomes powerful when it's analyzed to find patterns. Every app you use, every search you make, every tap you take generates data about you. Understanding that gives you real power to make smarter choices about what you share and why. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l13_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L13] Loaded: "What Is Data?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l13-magazine-what-is-data.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-magazine-structured-unstructured.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-magazine-data-value.png',              { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-magazine-data-privacy.png',            { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L13] what-is-data: ${r1.ok}, structured-unstructured: ${r2.ok}, data-value: ${r3.ok}, data-privacy: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L13] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l13_screens;
