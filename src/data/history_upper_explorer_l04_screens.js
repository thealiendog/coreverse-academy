// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L04 — Ancient India: The Vedas and Yoga
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects of historical developments
//            C3 D2.His.16.3-5 — Use evidence to develop claims about the past
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — Indus Valley civilization, the Vedas and Vedic period,
//        yoga and meditation, mathematical and cultural legacy
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-04`,
      title: `Ancient India: The Vedas and Yoga`,
      duration: 18,
      xpReward: 75,
      badge: `india-explorer`,
      badgeName: `Ancient India Explorer`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson we visited Mesopotamia, where writing and laws began. Today we travel east, to ancient India. The civilization there is one of the oldest in human history. The people there invented the practice of YOGA, wrote some of the world's oldest religious texts (the VEDAS), and even came up with the number ZERO. If you've ever done a yoga pose, sat in meditation, or used the number zero, you're using ideas from ancient India. Let's go.`,
          headline: `Ancient India`,
          subtitle: `The civilization that gave us yoga, the Vedas, and the number zero`,
          visual: `/ue-assets/history/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Indus Valley Civilization`,
          paragraphs: [
            `Around 5,000 years ago, while Mesopotamia was building its first cities, another major civilization was rising near a river called the INDUS, in what's now Pakistan and northwestern India. This is called the INDUS VALLEY CIVILIZATION. Its two biggest cities were HARAPPA and MOHENJO-DARO, both with tens of thousands of people. These cities were shockingly advanced. They had grid-pattern streets, indoor plumbing, drainage systems, and uniform-sized bricks made to one standard across hundreds of miles.`,
            `Strangely, the Indus Valley civilization had NO huge palaces or massive temples like other ancient civilizations. No giant tombs of rulers. Historians still aren't sure how it was governed. The Indus people also had their own writing system, but it has never been fully decoded. After about 1,000 years of success, the civilization slowly faded around 1900 BCE, probably because of climate change drying up their main rivers. Even today, the Indus Valley is one of the great mysteries of ancient history.`,
          ],
          image: `/ue-assets/history/l04-s1-indus.webp`,
          imageCaption: `Sophisticated cities with plumbing and drainage 4,000 years ago.`,
          vocab: [
            { word: `Indus Valley`,
              definition: `One of the world's earliest civilizations, located along the Indus River in modern-day Pakistan and northwestern India. Famous for sophisticated cities with indoor plumbing.`,
              audioPrompt: `The Indus Valley was one of the earliest civilizations, {name}. Located along the Indus River in what's now Pakistan and northwestern India. Around 5,000 years ago, they built cities with grid-pattern streets, indoor plumbing, and drainage systems thousands of years before most other cultures had any of this. Their civilization slowly declined, partly due to climate change, but their legacy lived on in the cultures that came after.` },
            { word: `Harappa`,
              definition: `One of the two largest cities of the Indus Valley civilization, located in modern-day Pakistan. Famous for advanced city planning, uniform bricks, and drainage systems.`,
              audioPrompt: `Harappa was one of the two biggest cities of the Indus Valley civilization, {name}. Located in what's now Pakistan. Like its twin city Mohenjo-Daro, Harappa had grid-pattern streets, indoor plumbing, and standardized bricks made to the same size across hundreds of miles. Archaeologists rediscovered it in the 1920s. The sophistication of what they found shocked the world.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Vedas and the Beginnings of Hinduism`,
          paragraphs: [
            `Around 1500 BCE, a new period began in ancient India. Groups speaking an ancient language called SANSKRIT moved into the region and mixed with the people already there. They composed sacred poems and hymns that were memorized and passed down by mouth for hundreds of years before being written down. These texts are called the VEDAS, and they're some of the world's oldest religious writings. The word "veda" means "knowledge."`,
            `The Vedas became the foundation of HINDUISM, one of the major world religions. Hinduism is unusual because it doesn't have just one founder or one sacred book. It grew over thousands of years, mixing many traditions. Hindus believe in one universal spirit that takes many forms in different gods like Brahma, Vishnu, and Shiva. They also believe in concepts like KARMA (your actions shape your future) and REINCARNATION (souls being born again in new bodies). These ideas have shaped Indian culture for over 3,000 years.`,
          ],
          image: `/ue-assets/history/l04-s2-vedas.webp`,
          imageCaption: `Memorized for centuries, then written down. The world's oldest religious texts.`,
          vocab: [
            { word: `Vedas`,
              definition: `The oldest sacred texts of Hinduism. Composed in Sanskrit starting around 1500 BCE. Originally memorized and spoken aloud before being written down.`,
              audioPrompt: `The Vedas are the oldest sacred texts of Hinduism, {name}. The word "veda" means knowledge. They were composed in an ancient language called Sanskrit starting around 1500 BCE. For hundreds of years, they were memorized and spoken aloud, passed from teacher to student before anyone wrote them down. The Vedas describe gods, rituals, and the basic ideas that became Hinduism.` },
            { word: `Hinduism`,
              definition: `One of the world's major religions, with roots in ancient India and the Vedas. Believes in one universal spirit, karma, and reincarnation. Has no single founder.`,
              audioPrompt: `Hinduism is one of the world's oldest and largest religions, {name}. It grew from the Vedas in ancient India over thousands of years. Unlike many religions, it has no single founder and no single sacred book. Hindus believe in one universal spirit that appears in many forms as different gods. They also believe in karma, the idea that your actions shape your future, and reincarnation, the idea that souls are reborn after death.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Invention of Yoga and Meditation`,
          paragraphs: [
            `Ancient Indian thinkers developed something the rest of the world had never seen. Practices designed to calm the mind, train the body, and connect a person to something larger than themselves. YOGA literally means "union," from the same root as the English word "yoke." Yoga is a series of physical postures, breathing exercises, and meditation techniques developed over thousands of years to bring mind and body together.`,
            `MEDITATION is a practice of focused attention. Sitting quietly, breathing, and learning to notice thoughts without getting carried away by them. Both yoga and meditation started as part of Hindu and Buddhist spiritual practice. Today, millions of people around the world do them with no religious connection at all. Modern research shows that meditation reduces stress, improves focus, and even changes the brain in measurable ways. Ancient Indian thinkers figured this out thousands of years before science could confirm it.`,
          ],
          image: `/ue-assets/history/l04-s3-yoga.webp`,
          imageCaption: `Yoga means "union." Mind and body, trained together.`,
          vocab: [
            { word: `yoga`,
              definition: `An ancient Indian practice that combines physical postures, breathing exercises, and meditation to unite mind and body. The word means "union."`,
              audioPrompt: `Yoga is an ancient Indian practice, {name}. The word yoga literally means union. Yoga combines physical postures, breathing techniques, and meditation to bring mind and body together. It started as part of Hindu spiritual practice thousands of years ago. Today, millions of people around the world practice yoga for health, calm, and focus, often with no religious connection at all.` },
            { word: `karma`,
              definition: `The Hindu and Buddhist belief that a person's actions shape their future. Good actions lead to good outcomes; harmful actions lead to negative consequences.`,
              audioPrompt: `Karma is the idea that your actions shape your future, {name}. It's a central belief in both Hinduism and Buddhism. The word comes from Sanskrit and means action. If you act well, good things return to you. If you act harmfully, those consequences come back. Karma isn't just about reward and punishment. It's a whole way of thinking about cause and effect in a person's life over time, across many choices.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `India's Gifts to the World`,
          paragraphs: [
            `Ancient India contributed enormously to mathematics. Their biggest gift was the concept of ZERO. Before zero existed as a number, math was much harder. You couldn't write 100, or 1,000, or do most of modern arithmetic. Indian mathematicians fully developed the concept of zero around the 5th century CE. This system, including the digits 0 through 9 we use today, spread through the Islamic world to Europe. People still call them "Arabic numerals," but they originated in India.`,
            `India also gave the world Buddhism, founded by Siddhartha Gautama around 500 BCE. Like Hinduism, Buddhism emphasizes meditation, ethical living, and the search for inner peace. Buddhism spread from India across Asia, eventually becoming one of the largest world religions. Yoga, the Vedas, zero, Buddhism, meditation. These ideas from ancient India have shaped the entire world. They're still spreading today.`,
          ],
          image: `/ue-assets/history/l04-s4-zero.webp`,
          imageCaption: `Zero. The number that changed math forever. Invented in India.`,
          vocab: [
            { word: `meditation`,
              definition: `A practice of focused attention and quiet awareness, training the mind to be calm and present. Started in ancient India as part of yoga.`,
              audioPrompt: `Meditation is a practice of focused attention, {name}. Sitting quietly, breathing slowly, and learning to notice your thoughts without getting carried away by them. Meditation started in ancient India as part of yoga and spiritual practice. Modern science shows it lowers stress, improves focus, and even changes how the brain works. People around the world meditate today, both as a religious practice and as a way to stay calm and clear.` },
            { word: `Buddhism`,
              definition: `A major world religion founded in ancient India around 500 BCE by Siddhartha Gautama. Emphasizes meditation, ethical living, and the search for inner peace.`,
              audioPrompt: `Buddhism is a major world religion that started in ancient India around 500 BCE, {name}. It was founded by a man named Siddhartha Gautama, who became known as the Buddha, meaning "the awakened one." Buddhism teaches meditation, ethical living, and the search for inner peace. It spread from India across Asia and is now one of the world's largest religions, with hundreds of millions of followers.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four items connected to ancient India. For each one, identify which part of Indian heritage it came from: INDUS VALLEY (the early civilization), VEDIC PERIOD (Vedas, early Hinduism), or YOGA/MEDITATION (spiritual practices)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `indus-valley`,    label: `Indus Valley`,      color: `#60A5FA`, description: `Early civilization with planned cities, plumbing, and uniform bricks (3000-1900 BCE).` },
            { id: `vedic-period`,    label: `Vedic Period`,      color: `#A78BFA`, description: `Sanskrit-speaking culture, the Vedas, beginnings of Hinduism (1500-500 BCE).` },
            { id: `yoga-meditation`, label: `Yoga & Meditation`, color: `#34D399`, description: `Spiritual practices combining body, breath, and mind. Connected to Hinduism and Buddhism.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Find #1`,
              clues: [
                { text: `Archaeologists in modern Pakistan find a 4,500-year-old city.` },
                { text: `The city has perfectly straight grid streets, indoor toilets connected to drainage systems, and bricks of uniform size.` },
                { text: `No giant palace or temple. No tombs of kings. Mostly homes and workshops.` },
              ],
              correctAnswer: `indus-valley`,
              realWorldExample: `Either Harappa or Mohenjo-Daro, the two great cities of the Indus Valley.`,
              explanation: `Grid streets. Indoor plumbing. Uniform bricks. No giant palace. All classic Indus Valley features. This is one of the most advanced ancient civilizations ever found, and it was largely forgotten until archaeologists rediscovered it in the 1920s.`,
            },
            {
              id: `case-2`,
              caseTitle: `Find #2`,
              clues: [
                { text: `A series of 3,000-year-old hymns in the ancient Sanskrit language.` },
                { text: `They were originally memorized and recited for centuries before being written down.` },
                { text: `They describe gods, rituals, and basic ideas like karma and the cycle of life and death.` },
              ],
              correctAnswer: `vedic-period`,
              realWorldExample: `Texts from the Rigveda, the oldest of the Vedas.`,
              explanation: `Sanskrit hymns. Memorized for centuries. Describing gods and Hindu ideas. This is the Vedas in action. The Vedic period began around 1500 BCE and laid the foundation for Hinduism.`,
            },
            {
              id: `case-3`,
              caseTitle: `Find #3`,
              clues: [
                { text: `Carved figurines of a person sitting cross-legged with eyes closed in a calm posture.` },
                { text: `Texts describing eight steps of practice including physical poses, breath control, and quiet focus.` },
                { text: `Used by both Hindus and Buddhists to train mind and body.` },
              ],
              correctAnswer: `yoga-meditation`,
              realWorldExample: `Patanjali's Yoga Sutras describe these eight steps.`,
              explanation: `Cross-legged posture. Eight steps. Body, breath, focus. Used by Hindus and Buddhists. This is the formal system of yoga, organized about 2,000 years ago by a scholar named Patanjali but based on practices that were already ancient.`,
            },
            {
              id: `case-4`,
              caseTitle: `Find #4 — The Tricky One`,
              clues: [
                { text: `Carvings from the Indus Valley civilization showing a figure sitting cross-legged in what looks like a meditation pose.` },
                { text: `The figure is surrounded by animals.` },
                { text: `This carving is over 4,000 years old, predating the Vedas by 1,500 years.` },
              ],
              correctAnswer: `indus-valley`,
              realWorldExample: `The famous "Pashupati seal" from Mohenjo-Daro.`,
              explanation: `Tricky because the pose LOOKS like classic yoga, and you might guess yoga/meditation. But this carving is from the INDUS VALLEY, 4,000+ years ago, which is before the Vedas were even composed. It hints that some of the practices later organized as yoga may go back even further than we usually think. The lesson: cultures build on each other. What we call "yoga" today has roots that may stretch back to the Indus Valley civilization.`,
            },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What were Harappa and Mohenjo-Daro?`,
              options: [
                `Two ancient gods`,
                `The two biggest cities of the Indus Valley civilization`,
                `Two important kings`,
                `Two sacred texts`,
              ],
              correctIndex: 1,
              explanation: `These were the largest cities of the Indus Valley civilization, both with tens of thousands of people. They had advanced features like grid streets and indoor plumbing thousands of years before most other cultures.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What are the VEDAS?`,
              options: [
                `Ancient weapons`,
                `The oldest sacred texts of Hinduism, originally memorized and spoken aloud before being written down`,
                `A type of palace`,
                `A set of laws`,
              ],
              correctIndex: 1,
              explanation: `The Vedas are some of the world's oldest religious writings. Composed in Sanskrit starting around 1500 BCE. The word "veda" means knowledge.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What does the word YOGA literally mean?`,
              options: [
                `Stretching`,
                `Union (joining together of mind and body)`,
                `Strength`,
                `Quiet`,
              ],
              correctIndex: 1,
              explanation: `Yoga means "union." From the same root as the English word "yoke." It's a system designed to unite mind and body through postures, breath, and meditation.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `Which of these BIG ideas in math came from ancient India?`,
              options: [
                `Addition`,
                `The concept of ZERO as a number`,
                `Geometry`,
                `Multiplication`,
              ],
              correctIndex: 1,
              explanation: `Indian mathematicians developed the full concept of zero as a number around the 5th century CE. Without zero, modern math wouldn't be possible. The digits 0-9 we use today started in India.` },

            { id: `l04-q5`, format: `true-false`,
              question: `True or false: Yoga only became popular in modern times.`,
              correctAnswer: false,
              explanation: `False. Yoga is THOUSANDS of years old. It started as part of ancient Indian spiritual practice. Some Indus Valley carvings from over 4,000 years ago show figures in poses that look like yoga.` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `What is MEDITATION?`,
              options: [
                `A type of dance`,
                `A practice of focused attention and quiet awareness, training the mind to be calm and present`,
                `Sleeping during the day`,
                `Talking to friends`,
              ],
              correctIndex: 1,
              explanation: `Meditation is sitting quietly, breathing slowly, and learning to notice your thoughts without getting pulled around by them. It started in ancient India and is now practiced worldwide.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `Which religion was founded in ancient India around 500 BCE?`,
              options: [
                `Christianity`,
                `Buddhism`,
                `Judaism`,
                `Islam`,
              ],
              correctIndex: 1,
              explanation: `Buddhism was founded by Siddhartha Gautama around 500 BCE in India. It emphasizes meditation, ethical living, and the search for inner peace. It later spread across Asia and is now one of the world's major religions.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `Why does ancient India still matter for the modern world?`,
              options: [
                `It doesn't`,
                `Because yoga, meditation, the number zero, and several major world religions all started there and shape life today`,
                `Only because of tourism`,
                `Only people in India care about ancient India`,
              ],
              correctIndex: 1,
              explanation: `Ancient India gave the world yoga, meditation, the number zero, Hinduism, and Buddhism. Millions of people use these gifts every day, often without realizing where they came from.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Have you ever tried yoga or meditation? What did you notice about your mind or body?` },
            { id: `r2`, text: `The Vedas were memorized for centuries before being written down. What's something you've memorized? How accurate do you think you'd be after a year of not seeing it?` },
            { id: `r3`, text: `Why do you think the Indus Valley civilization built sophisticated cities WITHOUT huge palaces or temples? What might that say about how they lived?` },
            { id: `r4`, text: `Imagine doing math WITHOUT the number zero. What would be hard? What would be impossible?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Ancient India is one of the most underrated civilizations in Western education. Students often spend weeks on Greece and Rome, but ancient India had cities with indoor plumbing while London was still a swamp. Ancient Indian thinkers developed zero, yoga, meditation, and major world religions, all of which are part of daily life for billions of people today. Recognizing ancient India's contributions is part of seeing world history honestly, instead of through a narrow lens.`,
          familyAdventure: `Family Meditation Minute. As a family, try sitting quietly for ONE MINUTE with your eyes closed, just paying attention to your breath. No phones, no music, no talking. Notice how hard it is. Notice what your mind does. This is the basic practice that ancient Indian thinkers developed thousands of years ago. After the minute, talk about what came up. Modern science says even short meditations can change how you feel.`,
          creativePrompt: {
            intro: `Imagine you're an explorer 200 years from now writing about ancient India for people who don't know much about it.`,
            floor: `Write at least 5 sentences. Pick three things you think future people should know about ancient India and explain each one.`,
            stretch: `Write 8 to 10 sentences. Cover the Indus Valley, the Vedas, yoga, and at least one mathematical or religious contribution.`,
            open: `Write as much as you want. Build a full historical summary including the Indus Valley civilization, the Vedic period, the rise of yoga and meditation, the invention of zero, and the spread of Buddhism. Connect each to modern life.`,
            frames: [
              `The Indus Valley civilization was important because ___.`,
              `The Vedas matter because ___.`,
              `Yoga and meditation came from ___ and today they help people ___.`,
              `The most useful gift of ancient India is ___.`,
              `Without ancient India, the modern world would not have ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now describe the Indus Valley civilization, explain what the Vedas were, define yoga and meditation, and connect ancient Indian inventions like zero to the modern world. Next lesson: we travel to Africa, to a stretch of history most schools skip. The MALI EMPIRE, including one of the richest people who ever lived. See you there. — Lyra.`,
          badge: `india-explorer`,
          badgeName: `Ancient India Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
