// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L14 — How Big Companies Started Small
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: C3 D2.Eco — Entrepreneurship and economic growth;
//            Jump$tart — Career and entrepreneurship awareness
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — every giant started small, common origin patterns,
//        the role of persistence and iteration, what you can learn from it
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-14`,
      title: `How Big Companies Started Small`,
      duration: 18,
      xpReward: 75,
      badge: `origin-explorer`,
      badgeName: `Origin Explorer`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. When you look at giant companies like Amazon, Apple, or Nike, they seem so HUGE and powerful that it feels like they were always that way. They weren't. EVERY giant company started TINY. A garage. A bedroom. A single idea. A few people who didn't know if it would work. Today we look at how the biggest companies in the world actually began, what patterns they share, and what that teaches YOU about building something meaningful. The giants aren't magic. They're just small things that kept going. Let's go.`,
          headline: `How Big Companies Started Small`,
          subtitle: `Every giant began tiny. Here's what that teaches you.`,
          visual: `/ue-assets/money/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Garages, Bedrooms, and Dorm Rooms`,
          paragraphs: [
            `AMAZON started in 1994 in Jeff Bezos's GARAGE, selling only books online. Today it sells almost everything and is one of the largest companies on Earth. APPLE started in 1976 in Steve Jobs's parents' garage, building computers by hand. NIKE started with founder Phil Knight selling shoes out of the TRUNK OF HIS CAR at track meets. DISNEY started with Walt Disney drawing cartoons in a tiny studio after his first company went bankrupt. Each of these companies began small enough to fit in one room.`,
            `The same pattern repeats over and over. FACEBOOK started in a college dorm room. GOOGLE started as a research project by two graduate students. AIRBNB started when two broke roommates rented air mattresses in their apartment to make rent. SPANX started when Sara Blakely cut the feet off her pantyhose and sold the idea door to door. None of these founders KNEW they would become giants. They just started with what they had, solved a real problem (remember L03), and kept going. The hugeness came LATER, and gradually.`,
          ],
          image: `/ue-assets/money/l14-s1-garages.webp`,
          imageCaption: `Amazon: a garage. Apple: a garage. Nike: a car trunk. Every giant started tiny.`,
          vocab: [
            { word: `startup`,
              definition: `A new, usually small business in its early stages, often built around a new idea. Most giant companies were startups once. Most startups stay small or fail, but a few grow enormous.`,
              audioPrompt: `A startup is a new, usually small business in its early stages, {name}. Often built around a new idea. Amazon was a startup in 1994, selling only books from a garage. Apple was a startup in 1976, building computers by hand. Most giant companies were startups once. Most startups stay small or fail. A few grow enormous. What separates the ones that make it is usually solving a real problem and persisting long enough to keep improving.` },
            { word: `pivot`,
              definition: `Changing your business direction based on what you learn from early attempts. Amazon pivoted from books to everything. Instagram pivoted from location check-ins to photos. Most successful companies have pivoted at least once.`,
              audioPrompt: `A pivot is when a business changes direction based on what it learns, {name}. Amazon started as a bookstore, then pivoted to sell electronics, then everything. Instagram started as a location app before pivoting to photos. Most successful companies have pivoted at least once. A pivot isn't quitting. It's using what you've learned to aim better. Founders who can't pivot often fail. Founders who know when to pivot often succeed. Recognizing when to change course versus when to stay is one of the hardest skills in business.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Common Patterns in How Giants Begin`,
          paragraphs: [
            `Looking across many successful companies, some PATTERNS appear again and again. (1) They SOLVED A REAL PROBLEM (Amazon: buying books was inconvenient. Airbnb: hotels were expensive and impersonal). (2) They STARTED SMALL and focused (Amazon sold ONLY books at first, then expanded). (3) They were willing to LOOK SILLY or small at the beginning (selling shoes from a car trunk isn't glamorous). (4) The founders were PERSISTENT through early struggles (most almost failed multiple times).`,
            `Another important pattern: most giants did NOT start with a perfect plan. They started with a ROUGH idea and IMPROVED it constantly based on what they learned (this is iteration, the same idea you may have seen in Science). Amazon's first website was ugly and basic. Apple's first computer was sold as just a circuit board with no case. The companies got better over YEARS. The lesson: you don't need a perfect idea or a perfect plan to start. You need a real problem, the courage to begin small, and the persistence to keep improving. Starting is more important than starting perfectly.`,
          ],
          image: `/ue-assets/money/l14-s2-patterns.webp`,
          imageCaption: `Solve a real problem. Start small. Look silly. Persist. Improve over years.`,
          vocab: [
            { word: `persistence`,
              definition: `The ability to keep going through difficulties, setbacks, and failures. One of the most consistent traits among successful entrepreneurs. Most giants almost failed several times first.`,
              audioPrompt: `Persistence is the ability to keep going through difficulties, setbacks, and failures, {name}. It's one of the most consistent traits among successful entrepreneurs. Most giant companies almost failed several times before they succeeded. Walt Disney's first animation company went bankrupt. Steve Jobs was fired from Apple, the company he founded, before returning. Sara Blakely was rejected by many manufacturers before someone agreed to make her product. What these founders shared was persistence. They kept going when most people would have quit. Persistence doesn't guarantee success, but giving up guarantees failure.` },
            { word: `prototype`,
              definition: `An early, often rough version of a product built to test an idea before full development. Most prototypes fail. The point is to learn quickly and cheaply before investing too much.`,
              audioPrompt: `A prototype is an early, often rough version of a product built to test an idea, {name}. Before spending money on full development. James Dyson built over 5,000 prototypes of his vacuum before one worked. Each prototype was a test: does this idea work? Prototypes are meant to fail quickly and cheaply, so you learn before investing too much. Most entrepreneurs build many prototypes before finding what works. The goal isn't a perfect first prototype. The goal is learning as fast as possible.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Failure Is Part of the Story`,
          paragraphs: [
            `Almost every famous founder FAILED before they succeeded, often many times. Walt Disney's first animation studio went BANKRUPT. Steve Jobs was FIRED from Apple (the company he founded!) before returning years later to lead it to greatness. Sara Blakely (Spanx) was REJECTED by manufacturer after manufacturer. James Dyson made 5,126 FAILED prototypes of his vacuum before the one that worked. Colonel Sanders (KFC) was rejected over 1,000 times trying to sell his chicken recipe. These weren't lucky people who never struggled. They were people who FAILED A LOT and kept going.`,
            `This matters because most people QUIT after a few failures. They assume failure means they're not good enough. Successful founders treat failure differently: as INFORMATION, as a normal part of the process, as something to learn from and move past. This connects back to ITERATION. Each failure teaches something. Each attempt gets a little better. The founders who succeed aren't the ones who never fail. They're the ones who fail, learn, adjust, and try again, more times than most people are willing to. Ace's truth: the difference between a giant company and a forgotten idea is often just persistence through failure.`,
          ],
          image: `/ue-assets/money/l14-s3-failure.webp`,
          imageCaption: `5,126 failed prototypes. 1,000 rejections. Bankruptcy. Failure is part of the story.`,
          vocab: [
            { word: `iteration`,
              definition: `The process of trying, learning from the results, improving, and trying again. Successful companies and founders iterate constantly. Few succeed on the first attempt.`,
              audioPrompt: `Iteration is the process of trying, learning from the results, improving, and trying again, {name}. Successful companies and founders iterate constantly. Amazon's first website was ugly and basic. They improved it over years. James Dyson made 5,000 failed prototypes before his vacuum worked. Each failure taught him something. Each version got better. Few people or companies succeed on their first attempt. The ones who succeed treat failure as information, not defeat. They use what they learn to make the next attempt better. Iteration is how almost all real progress happens.` },
            { word: `resilience`,
              definition: `The ability to recover from failure, setbacks, and hard times, and keep going. More than persistence — resilience includes the emotional recovery needed to try again after being knocked down.`,
              audioPrompt: `Resilience is the ability to recover from failure and setbacks and keep going, {name}. Different from just persistence. Persistence is continuing despite difficulty. Resilience includes the emotional recovery. Walt Disney went bankrupt and lost his first studio. He rebuilt. Steve Jobs was fired from Apple and started two new companies before returning. Resilience means you don't just keep going through hard times. You recover, regroup, and come back stronger. Most successful people have been knocked down. What made them successful was getting back up.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What This Means for You`,
          paragraphs: [
            `Here's why this matters for YOU. The fact that every giant started small means the door is OPEN. You don't need to be born rich, famous, or special to build something meaningful. Many of the most successful founders started with NOTHING but an idea and persistence. Some were teenagers. Some were immigrants who barely spoke the language. Some had failed at everything else first. What they shared wasn't advantages. It was willingness to start small and keep going.`,
            `This doesn't mean everyone should start a giant company. Most people won't, and that's completely fine. But the MINDSET applies to almost anything you'll do. Want to get really good at art, sports, music, coding, or anything else? Start small. Expect to be bad at first. Keep improving. Don't quit after early failures. The same pattern that built Amazon can help you build a skill, a project, a small business, or anything you care about. Ace's note: Coreverse itself started as one person (Caro) with an idea and has been built lesson by lesson, iteration by iteration. You're using the result of that exact process right now.`,
          ],
          image: `/ue-assets/money/l14-s4-for-you.webp`,
          imageCaption: `The door is open. Start small. Expect early failure. Keep improving. Don't quit.`,
          vocab: [
            { word: `founder`,
              definition: `A person who starts a company or organization. Founders take the early risks, do the early work, and shape what the company becomes. Most started small and faced many failures.`,
              audioPrompt: `A founder is a person who starts a company or organization, {name}. Founders take the early risks, do the early work, and shape what the company becomes. Jeff Bezos founded Amazon. Steve Jobs and Steve Wozniak founded Apple. Sara Blakely founded Spanx. Caro founded Coreverse. Founders usually start small, often with very little money. They face many failures and setbacks along the way. What makes someone a founder isn't being special or rich. It's the willingness to start something and take responsibility for building it, even when success is uncertain.` },
            { word: `scale`,
              definition: `Growing a business from small to large while maintaining quality and efficiency. Most startups prove their idea in a small market first, then scale once the model works.`,
              audioPrompt: `Scaling means growing a business from small to large, {name}. Amazon scaled from one product (books) to millions. Starbucks scaled from one coffee shop in Seattle to thousands worldwide. Scaling isn't just doing more of the same. It requires building systems, hiring people, and managing more complexity. Most startups prove their idea in a small market first, then scale to bigger ones. Scaling too fast before the model is ready often fails. Scaling too slowly misses opportunity. Knowing when to scale is one of the hardest decisions in business.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four company origin stories. For each one, identify the KEY LESSON it best demonstrates: STARTED TINY (began impossibly small), PERSISTED THROUGH FAILURE (kept going despite major setbacks), or ITERATED TO SUCCESS (improved a rough idea over many versions)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `tiny`,        label: `Started Tiny`,             color: `#34D399`, description: `The company began impossibly small — a garage, a car trunk, a single product.` },
            { id: `persisted`,   label: `Persisted Through Failure`, color: `#F87171`, description: `The founder faced major failures or rejections and kept going anyway.` },
            { id: `iterated`,    label: `Iterated to Success`,       color: `#60A5FA`, description: `A rough early idea was improved over many versions until it worked well.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Story #1: Nike`,
              clues: [
                { text: `Founder Phil Knight started by selling running shoes out of the trunk of his car.` },
                { text: `He drove to track meets and sold shoes directly to runners.` },
                { text: `The company had no store, no office, just a car and some shoes.` },
              ],
              correctAnswer: `tiny`,
              realWorldExample: `Nike's car-trunk origin is famous.`,
              explanation: `A car trunk. No store. No office. About as small as a business can start. Pure "started tiny." Nike is now one of the biggest brands on Earth.`,
            },
            {
              id: `case-2`,
              caseTitle: `Story #2: James Dyson (vacuum cleaners)`,
              clues: [
                { text: `He had an idea for a better vacuum cleaner.` },
                { text: `He built 5,126 prototypes that didn't work well enough.` },
                { text: `The 5,127th prototype finally worked, and became a billion-dollar product.` },
              ],
              correctAnswer: `iterated`,
              realWorldExample: `Dyson's 5,126 prototypes are a legendary iteration story.`,
              explanation: `Over 5,000 versions, each improving on the last, until one worked. Pure iteration to success. (You could also say he "persisted through failure" — but the defining feature is the thousands of improving versions, which is iteration.)`,
            },
            {
              id: `case-3`,
              caseTitle: `Story #3: Walt Disney`,
              clues: [
                { text: `His first animation company went completely bankrupt.` },
                { text: `He was once told he "lacked imagination."` },
                { text: `He kept going, started a new company, and eventually built one of the most beloved companies in the world.` },
              ],
              correctAnswer: `persisted`,
              realWorldExample: `Disney's bankruptcy-to-empire story is well documented.`,
              explanation: `Bankruptcy. Rejection. Being told he lacked imagination. He kept going anyway. Pure persistence through failure. The Disney empire exists because Walt didn't quit after his first company collapsed.`,
            },
            {
              id: `case-4`,
              caseTitle: `Story #4 — The Tricky One: Amazon`,
              clues: [
                { text: `Started in a garage in 1994, selling ONLY books online.` },
                { text: `The first website was basic and ugly. It got redesigned and improved constantly over the years.` },
                { text: `Expanded slowly from books to music, then electronics, then everything, becoming a giant over two decades.` },
              ],
              correctAnswer: `iterated`,
              realWorldExample: `Amazon is a classic iteration-to-giant story.`,
              explanation: `Tricky because Amazon demonstrates ALL THREE lessons. It started tiny (a garage). It persisted (Bezos faced doubters). But the BEST single description is iteration: it constantly improved its website, slowly expanded from books to everything, and got better over two decades. The defining feature of Amazon's rise is gradual, relentless iteration and expansion. Lesson: the biggest successes often show all the patterns at once. But Amazon's superpower was iterating and expanding relentlessly, year after year, never staying still.`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `Where did AMAZON start?`,
              options: [
                `In a giant office tower`,
                `In Jeff Bezos's garage in 1994, selling only books online`,
                `As a big company from day one`,
                `In a shopping mall`,
              ],
              correctIndex: 1,
              explanation: `Amazon started small in a garage, selling only books. It expanded gradually over decades into one of the largest companies on Earth. The hugeness came later, through years of iteration and expansion.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `What is a STARTUP?`,
              options: [
                `A big established company`,
                `A new, usually small business in its early stages, often built around a new idea`,
                `A type of investment`,
                `A government program`,
              ],
              correctIndex: 1,
              explanation: `Startups are young companies trying to grow, often around a new idea. Amazon, Apple, and most giants were startups once. Most startups stay small or fail. A few grow enormous through solving real problems and persistence.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `What COMMON PATTERNS appear in how giant companies began?`,
              options: [
                `They were always huge`,
                `Solved a real problem, started small and focused, were willing to look silly, and the founders persisted through struggles`,
                `They got lucky once`,
                `They had perfect plans`,
              ],
              correctIndex: 1,
              explanation: `Giants share patterns: solve a real problem, start small, be willing to look unglamorous (selling shoes from a car trunk), and persist through early struggles. Most did NOT start with a perfect plan. They improved over years.` },

            { id: `l14-q4`, format: `multiple-choice`,
              question: `How many FAILED PROTOTYPES did James Dyson make before his vacuum worked?`,
              options: [
                `None — he got it right immediately`,
                `5,126 failed prototypes before the one that worked`,
                `About 5`,
                `Just 50`,
              ],
              correctIndex: 1,
              explanation: `Dyson made 5,126 failed prototypes before the 5,127th worked. Each failure taught him something. This is one of the most famous examples of iteration and persistence in business history.` },

            { id: `l14-q5`, format: `true-false`,
              question: `True or false: Almost every famous founder FAILED multiple times before succeeding.`,
              correctAnswer: true,
              explanation: `True. Walt Disney went bankrupt. Steve Jobs was fired from Apple. Colonel Sanders was rejected over 1,000 times. Sara Blakely was rejected by many manufacturers. Failure is part of nearly every success story. The founders who made it treated failure as information and kept going.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `What is PERSISTENCE?`,
              options: [
                `Giving up quickly`,
                `The ability to keep going through difficulties, setbacks, and failures`,
                `Being stubborn about everything`,
                `Working 24 hours a day`,
              ],
              correctIndex: 1,
              explanation: `Persistence is continuing through hard times. It's one of the most consistent traits among successful founders. Most people quit after a few failures. Successful founders keep going, treating failure as part of the process rather than a verdict on their worth.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `What's the MAIN LESSON of "every giant started small" for YOU?`,
              options: [
                `Only special people succeed`,
                `The door is open — you don't need to be rich, famous, or special to build something meaningful; you need to start small and keep going`,
                `You should start a giant company`,
                `Success requires luck`,
              ],
              correctIndex: 1,
              explanation: `Since every giant started small, the door is open to anyone willing to start and persist. You don't need special advantages. The mindset (start small, expect early failure, keep improving) applies to skills, projects, and life, not just giant companies.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What's a FOUNDER?`,
              options: [
                `Just a rich person`,
                `A person who starts a company or organization, takes early risks, and shapes what it becomes`,
                `An investor`,
                `An employee`,
              ],
              correctIndex: 1,
              explanation: `Founders start companies and take responsibility for building them. Bezos founded Amazon. Jobs founded Apple. Caro founded Coreverse. Being a founder isn't about being rich or special — it's about the willingness to start something and build it despite uncertainty.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Of the origin stories in this lesson (Amazon, Apple, Nike, Disney, Dyson, Spanx, KFC), which one inspires you most? Why?` },
            { id: `r2`, text: `James Dyson made 5,126 failed prototypes. What's something YOU'VE had to try many times before getting right? How did it feel to keep going?` },
            { id: `r3`, text: `The lesson says "the door is open" — anyone can start small and build something. What's ONE small thing you'd want to start and grow over time?` },
            { id: `r4`, text: `Most people quit after a few failures. What helps YOU keep going when something is hard?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `The "started small" story is one of the most encouraging truths in business. It means the path to building something meaningful isn't locked behind being born special. Many of the world's most successful founders began with less than you might have right now. What they had was an idea, the courage to start small, and the persistence to keep going through failure. That combination is available to anyone, including you. Ace's note: whether you build a company, master a craft, or pursue any big goal, the pattern is the same. Start where you are. Use what you have. Keep improving. Don't quit too soon.`,
          familyAdventure: `Family Origin Story Research. As a family, pick ONE company you all use regularly (a favorite store, app, restaurant, or brand). Look up how it started. Almost every company has a humble origin story. Talk about: how small did it start? What problems did the founders face? What kept them going? You'll almost always find a story of small beginnings and persistence.`,
          creativePrompt: {
            intro: `Imagine YOUR future company's origin story, told 30 years from now after it became successful. Write the story of how it started small.`,
            floor: `Write at least 5 sentences. Describe how your company started tiny, what problem it solved, and one early struggle you overcame.`,
            stretch: `Write 8 to 10 sentences. Include the humble beginning, the real problem, early failures, how you persisted, and how it grew over time.`,
            open: `Write as much as you want. Build a full origin story. Describe the tiny beginning, the problem you set out to solve, the failures and setbacks, how you iterated and improved, the moment things started working, and how it grew into something meaningful. Make it inspiring AND realistic.`,
            frames: [
              `It all started when I was ___, with just ___.`,
              `The problem I wanted to solve was ___.`,
              `At first, I failed at ___.`,
              `What kept me going was ___.`,
              `Over the years, it grew into ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain how giant companies started small, the common patterns in their beginnings, the role of failure and iteration, and what it all means for you. Next lesson: a skill used in business AND life, every single day. NEGOTIATION. How to get what you want while keeping good relationships. — Ace.`,
          badge: `origin-explorer`,
          badgeName: `Origin Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L14 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
