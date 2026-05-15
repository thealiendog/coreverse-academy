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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'What Is Data?',
          paragraphs: [
            'Data is any information that can be collected, stored, and analyzed.',
            'Numbers, text, images, videos, locations, temperatures, movement — anything measurable counts. People call data "the new oil" of the digital economy.',
          ],
          image:        '/explorer-assets/future-skills/l13-s1-data-universe.png',
          imageCaption: 'Data isn\'t just numbers. It\'s anything that can be measured, recorded, and analyzed. Almost everything qualifies.',
          vocab: [
            { word: 'data',         definition: 'Any information that can be collected, stored, and analyzed — numbers, text, images, sounds, locations, anything measurable.', audioPrompt: 'Data — any information that can be collected, stored, and analyzed: numbers, text, images, sounds, locations, anything measurable.' },
            { word: 'digital data', definition: 'Information stored as binary code (0s and 1s). The form computers use for everything from a text message to a movie.', audioPrompt: 'Digital data — information stored as binary code, 0s and 1s. The form computers use for everything from a text message to a movie.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'You Create Data Constantly',
          paragraphs: [
            'Every photo you take. Every message you send. Every site you visit. Every step your phone counts. All of it is data.',
            'You create it whether you mean to or not. The digital traces you leave add up to billions of data points worldwide every day.',
          ],
          image:        '/explorer-assets/future-skills/l13-s2-data-trail.png',
          imageCaption: 'You don\'t have to "share" data to create it. Just using your phone leaves a constant trail behind you.',
          vocab: [
            { word: 'digital footprint', definition: 'The trail of data you leave behind every time you use the internet. Grows even when you\'re not paying attention.', audioPrompt: 'Digital footprint — the trail of data you leave behind every time you use the internet. Grows even when you\'re not paying attention.' },
            { word: 'behavioral data',   definition: 'Information about what you do — clicks, taps, watches, purchases, scrolls. Some of the most valuable data companies collect.', audioPrompt: 'Behavioral data — information about what you do: clicks, taps, watches, purchases, scrolls. Some of the most valuable data companies collect.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Structured vs Unstructured',
          paragraphs: [
            'Structured data fits neatly into rows and columns — a spreadsheet of names, grades, and scores. Easy for computers to sort and search.',
            'Unstructured data doesn\'t fit a clean format. Photos, videos, social posts, emails. About 80% of all data created today is unstructured.',
          ],
          image:        '/explorer-assets/future-skills/l13-s3-structured-unstructured.png',
          imageCaption: 'Spreadsheets are tidy. Social media is messy. Both are data — they just need very different tools to analyze.',
          vocab: [
            { word: 'structured data',   definition: 'Data organized in rows and columns — like a spreadsheet. Easy for computers to sort and search without AI.', audioPrompt: 'Structured data — data organized in rows and columns, like a spreadsheet. Easy for computers to sort and search without AI.' },
            { word: 'unstructured data', definition: 'Data with no fixed format — photos, videos, social posts, emails. Hard for old software, but AI handles it well.', audioPrompt: 'Unstructured data — data with no fixed format: photos, videos, social posts, emails. Hard for old software, but AI handles it well.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Data Becomes Valuable When Analyzed',
          paragraphs: [
            'Raw data alone isn\'t worth much. Analysis is what creates value.',
            'A streaming service tracks what you watch, pause, replay, and quit — then uses those patterns to predict what you\'ll want next.',
          ],
          image:        '/explorer-assets/future-skills/l13-s4-patterns-emerging.png',
          imageCaption: 'Data without analysis is just a pile. Patterns are what turn data into predictions — and predictions into money.',
          vocab: [
            { word: 'data analysis', definition: 'Finding patterns and insights in collected data. What transforms raw information into something useful.', audioPrompt: 'Data analysis — finding patterns and insights in collected data. What transforms raw information into something useful.' },
            { word: 'pattern',       definition: 'A regular feature found in data — like always watching cooking shows after 8pm. Patterns enable predictions.', audioPrompt: 'Pattern — a regular feature found in data, like always watching cooking shows after 8pm. Patterns enable predictions.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'How Apps Use Your Data',
          paragraphs: [
            'Apps use your data to predict what you\'ll like, buy, watch, or click next.',
            'A music app analyzes every song you skip vs play. A shop tracks every product you hover over. Your behavior teaches their algorithm.',
          ],
          image:        '/explorer-assets/future-skills/l13-s5-algorithm-recommends.png',
          imageCaption: 'The "for you" feed isn\'t magic. It\'s your own behavior being analyzed and fed back to you as predictions.',
          vocab: [
            { word: 'algorithm',      definition: 'A system that analyzes data and uses patterns to predict what you\'ll like next. Behind every "for you" feed.', audioPrompt: 'Algorithm — a system that analyzes data and uses patterns to predict what you\'ll like next. Behind every "for you" feed.' },
            { word: 'recommendation', definition: 'A prediction-based suggestion: what to watch, buy, listen to, follow. Personalized by your behavioral data.', audioPrompt: 'Recommendation — a prediction-based suggestion: what to watch, buy, listen to, follow. Personalized by your behavioral data.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'If It\'s Free, You\'re the Product',
          paragraphs: [
            'Free apps are often "free" because YOUR data is what they sell — to advertisers and companies who want to predict and influence your choices.',
            'That\'s not bad on its own. But knowing the trade lets you ask: is the value I get worth what I\'m giving up?',
          ],
          image:        '/explorer-assets/future-skills/l13-s6-free-trade.png',
          imageCaption: 'When the app costs nothing, the company is usually selling something else: your attention, your behavior, your data.',
          vocab: [
            { word: 'data privacy',     definition: 'The right to control who collects, uses, and shares information about you. Increasingly important as more of life is digital.', audioPrompt: 'Data privacy — the right to control who collects, uses, and shares information about you. Increasingly important as more of life is digital.' },
            { word: 'terms of service', definition: 'The legal agreement that says what an app can do with your data. Rarely read; often grants very broad rights.', audioPrompt: 'Terms of service — the legal agreement that says what an app can do with your data. Rarely read; often grants very broad rights.' },
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
    fetch('/explorer-assets/future-skills/l13-s1-data-universe.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-s2-data-trail.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-s3-structured-unstructured.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-s4-patterns-emerging.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-s5-algorithm-recommends.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l13-s6-free-trade.png',             { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L13] data-universe: ${r1.ok}, data-trail: ${r2.ok}, structured-unstructured: ${r3.ok}, patterns-emerging: ${r4.ok}, algorithm-recommends: ${r5.ok}, free-trade: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L13] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l13_screens;
