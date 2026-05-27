// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L07 — The Islamic Golden Age
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.3.3-5 — Generate questions about individuals and groups
//            C3 D2.His.14.3-5 — Causes and effects of historical developments
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what the Islamic Golden Age was, Baghdad and the House
//        of Wisdom, scholars in math/medicine/astronomy, why it ended and matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-07`,
      title: `The Islamic Golden Age`,
      duration: 18,
      xpReward: 75,
      badge: `golden-age-scholar`,
      badgeName: `Golden Age Scholar`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson, the Silk Road connected continents. Today we visit one of the most underrated periods in human history. From about 750 to 1250 CE, while much of Europe was in what's sometimes called the "Dark Ages," the Islamic world was experiencing something remarkable. Scholars were inventing algebra, advancing medicine by centuries, mapping the stars, and translating the works of ancient Greece and India into Arabic. This stretch is called the ISLAMIC GOLDEN AGE, and it shaped modern science in ways most people don't realize. Let's go.`,
          headline: `The Islamic Golden Age`,
          subtitle: `When the Islamic world led the world in science and scholarship`,
          visual: `/ue-assets/history/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Islamic Golden Age Was`,
          paragraphs: [
            `The ISLAMIC GOLDEN AGE was a period roughly from 750 to 1250 CE when civilizations across the Islamic world (stretching from Spain to Central Asia) made enormous advances in science, math, medicine, and philosophy. The Islamic religion had spread quickly after its founding by the Prophet Muhammad in the 600s CE. By 750, Islamic empires controlled territory from Spain to India. With trade flowing along the Silk Road and across the Mediterranean, knowledge from many cultures poured into the Islamic world.`,
            `What made this period special was an active commitment to scholarship. Islamic rulers funded libraries, universities, and translation projects on a massive scale. Scholars were encouraged to study, write, and innovate. Christians, Jews, and Muslims often worked side by side in major Islamic cities. The result was one of the most productive periods of scientific and intellectual progress anywhere in pre-modern history.`,
          ],
          image: `/ue-assets/history/l07-s1-overview.webp`,
          imageCaption: `Spain to Central Asia. 500 years of major scientific and scholarly progress.`,
          vocab: [
            { word: `Islamic Golden Age`,
              definition: `A period from about 750 to 1250 CE when civilizations across the Islamic world led the world in science, math, medicine, and philosophy.`,
              audioPrompt: `The Islamic Golden Age was a period from about 750 to 1250 CE, {name}. The Islamic world stretched from Spain to Central Asia. Rulers actively funded libraries, universities, and translations. Scholars from many religions worked together. The period produced enormous advances in math, medicine, astronomy, and philosophy. Most modern science still uses tools and concepts developed during this time.` },
            { word: `translation`,
              definition: `The work of converting a text from one language into another. Islamic scholars translated ancient Greek, Persian, Indian, and Chinese texts into Arabic, preserving knowledge that might otherwise have been lost.`,
              audioPrompt: `Translation means converting writing from one language into another, {name}. During the Islamic Golden Age, translation was one of the most important scholarly activities in the world. Rulers paid teams of translators to bring Greek, Persian, Indian, and Chinese knowledge into Arabic. Without these translations, many ancient texts would have been lost forever. Europe later rediscovered ancient Greek ideas largely through Arabic translations made during this period.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Baghdad and the House of Wisdom`,
          paragraphs: [
            `The center of all this activity was BAGHDAD, the capital of the Abbasid Caliphate. In 832 CE, Caliph al-Ma'mun expanded a major institution called the HOUSE OF WISDOM. It was part library, part university, part research center. Scholars from across the known world were invited to translate Greek, Persian, Indian, and Chinese texts into Arabic. The goal was to gather and preserve ALL the world's knowledge in one place.`,
            `The translations themselves were a huge gift to humanity. Without Islamic scholars, many works of ancient Greece (like much of Aristotle and many medical texts) would have been LOST FOREVER. Europe later rediscovered ancient Greek thought largely THROUGH Arabic translations. The House of Wisdom and similar centers across the Islamic world were where the world's knowledge survived through what Europeans sometimes call the Dark Ages.`,
          ],
          image: `/ue-assets/history/l07-s2-house-of-wisdom.webp`,
          imageCaption: `Baghdad's House of Wisdom: where the world's knowledge was gathered.`,
          vocab: [
            { word: `caliph`,
              definition: `The political and religious leader of the Islamic world after Muhammad. Many caliphs were major sponsors of science, art, and scholarship during the Golden Age.`,
              audioPrompt: `A caliph was the political and religious leader of the Islamic world after Muhammad, {name}. During the Islamic Golden Age, several caliphs were major sponsors of science and scholarship. Caliph al-Ma'mun famously expanded the House of Wisdom in Baghdad and personally encouraged scholars. The caliphs spent vast sums on libraries, universities, and translation projects. Their funding made the Golden Age possible.` },
            { word: `House of Wisdom`,
              definition: `A famous institution in Baghdad that combined a library, university, and research center. Scholars from many cultures gathered there to translate texts and advance knowledge during the Islamic Golden Age.`,
              audioPrompt: `The House of Wisdom was one of the most important institutions in human history, {name}. Located in Baghdad, it combined a massive library, a university, and a research center. Scholars of many religions and cultures were invited to translate the world's knowledge into Arabic and push it forward. Caliph al-Ma'mun expanded it in 832 CE. When the Mongols destroyed it in 1258, it was one of the most devastating losses of knowledge in history.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Scholars Who Changed the World`,
          paragraphs: [
            `AL-KHWARIZMI, a Persian mathematician working in Baghdad around 820 CE, wrote the founding book of ALGEBRA. The word "algebra" itself comes from the Arabic word "al-jabr" in his book title. The word "algorithm" is also based on his name. Every computer program in the world today owes something to al-Khwarizmi. IBN AL-HAYTHAM made huge advances in OPTICS and is sometimes called the "father of the scientific method" for his rigorous approach to experimenting. AL-RAZI and IBN SINA (known in Europe as Avicenna) wrote medical encyclopedias used for over 600 years.`,
            `Islamic astronomers gave many stars the Arabic names we still use today, like Aldebaran, Altair, and Vega. They built observatories with instruments so accurate they wouldn't be matched for centuries. Islamic geographers like AL-IDRISI made some of the most accurate world maps of their era. In medicine, Islamic doctors were already requiring hospital licensing, washing surgical tools, and using anesthesia centuries before Europe.`,
          ],
          image: `/ue-assets/history/l07-s3-scholars.webp`,
          imageCaption: `Algebra. Algorithms. Astronomy. Medicine. All advanced here.`,
          vocab: [
            { word: `algebra`,
              definition: `A branch of mathematics where letters and symbols represent numbers in equations. Founded in its modern form by al-Khwarizmi in Baghdad around 820 CE.`,
              audioPrompt: `Algebra is a branch of mathematics where letters and symbols stand for numbers in equations, {name}. The name comes from the Arabic word "al-jabr," from a book written by a Persian mathematician named al-Khwarizmi around 820 CE. Algebra is one of the most useful inventions in math because it lets you solve problems where one or more numbers are unknown. Every science, engineering, and computer program on Earth depends on algebra today.` },
            { word: `algorithm`,
              definition: `A step-by-step set of instructions for solving a problem. The word comes from the name of the mathematician al-Khwarizmi, who developed systematic methods for solving equations.`,
              audioPrompt: `An algorithm is a step-by-step method for solving a problem, {name}. The word comes from the name of al-Khwarizmi, the Islamic Golden Age mathematician who developed systematic ways to solve equations. Today, algorithms run every piece of software on Earth. Your phone, the internet, video games, search engines — all powered by algorithms. Every time you hear the word, you're hearing the name of a ninth-century scholar from Baghdad.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The End and the Legacy`,
          paragraphs: [
            `The Golden Age slowly ended for several reasons. Political fragmentation broke the unified Islamic world into competing kingdoms. In 1258, MONGOL armies (we'll cover them next lesson) sacked Baghdad and destroyed the House of Wisdom. Tradition says the Tigris River ran black with ink from the thousands of books thrown in. After that, the center of scholarship slowly shifted away from the Islamic world toward Europe, where the Renaissance was about to begin.`,
            `But the legacy never went away. Algebra. Algorithms. Modern medicine. Scientific method. The numerals you write every day (0-9). The names of stars you see at night. All gifts of the Islamic Golden Age. Europe's later Scientific Revolution didn't come from nowhere. It built on translations, formulas, and ideas that Islamic scholars had developed and preserved for centuries. Without the Golden Age, the modern world would look completely different.`,
          ],
          image: `/ue-assets/history/l07-s4-legacy.webp`,
          imageCaption: `The Golden Age ended. Its inventions are everywhere today.`,
          vocab: [
            { word: `scholar`,
              definition: `Someone who studies a topic deeply and produces serious knowledge or writing about it. The Islamic Golden Age was famous for its enormous community of scholars.`,
              audioPrompt: `A scholar is someone who studies a subject deeply and produces serious work about it, {name}. The Islamic Golden Age had one of the most active scholar communities in human history. Mathematicians like al-Khwarizmi. Doctors like Ibn Sina. Astronomers like al-Battani. Philosophers like al-Farabi. Working together, often in places like the House of Wisdom in Baghdad, they advanced knowledge in almost every field. Modern universities still teach from the foundations they built.` },
            { word: `Renaissance`,
              definition: `A European cultural movement from the 1300s to 1600s CE marked by a revival of art, science, and learning. It built heavily on knowledge preserved and developed during the Islamic Golden Age.`,
              audioPrompt: `The Renaissance was a European cultural flowering from roughly the 1300s to 1600s CE, {name}. It's known for great art, science, and new ideas. What most people don't learn is how much the Renaissance owed to the Islamic Golden Age. European scholars discovered ancient Greek texts through Arabic translations. Islamic advances in medicine, astronomy, and mathematics flowed into Europe and helped fuel the Renaissance. The Islamic Golden Age didn't just happen before the Renaissance. It helped make it possible.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four discoveries from the Islamic Golden Age. For each one, identify the FIELD it belongs to: MATHEMATICS (numbers, equations), MEDICINE (health, healing, anatomy), or ASTRONOMY (stars, planets, navigation)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `mathematics`,  label: `Mathematics`,  color: `#34D399`, description: `Numbers, equations, algebra, geometry, algorithms.` },
            { id: `medicine`,     label: `Medicine`,     color: `#F87171`, description: `Anatomy, healing, surgery, disease, public health.` },
            { id: `astronomy`,    label: `Astronomy`,    color: `#A78BFA`, description: `Stars, planets, navigation, observatories, calendars.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Discovery #1`,
              clues: [
                { text: `Al-Khwarizmi wrote a book around 820 CE called "The Compendious Book on Calculation by Completion and Balancing."` },
                { text: `The book introduced a systematic method for solving equations with unknown quantities.` },
                { text: `Today, his work is the foundation of an entire branch of math.` },
              ],
              correctAnswer: `mathematics`,
              realWorldExample: `This book founded algebra.`,
              explanation: `Al-Khwarizmi's book founded algebra. The word "algebra" comes from the Arabic title "al-jabr." The word "algorithm" is from his name. Pure mathematics, and one of the most important math advances in history.`,
            },
            {
              id: `case-2`,
              caseTitle: `Discovery #2`,
              clues: [
                { text: `Ibn Sina (known in Europe as Avicenna) wrote "The Canon of Medicine" around 1025 CE.` },
                { text: `It became a standard textbook used in European universities for over 600 years.` },
                { text: `It described surgical techniques, drug treatments, and many diseases for the first time.` },
              ],
              correctAnswer: `medicine`,
              realWorldExample: `One of the most influential medical books in history.`,
              explanation: `Ibn Sina's medical encyclopedia was used in Europe for over six centuries. He described surgical techniques, drug interactions, and diseases in detail unmatched anywhere else at the time. Pure medicine.`,
            },
            {
              id: `case-3`,
              caseTitle: `Discovery #3`,
              clues: [
                { text: `Islamic scholars built observatories with instruments so accurate they weren't matched in Europe for centuries.` },
                { text: `They named hundreds of stars with Arabic names still used today, like Aldebaran, Altair, and Vega.` },
                { text: `They calculated the size of the Earth to within just a few percent of its true value.` },
              ],
              correctAnswer: `astronomy`,
              realWorldExample: `The Maragheh and Samarkand observatories.`,
              explanation: `Stars, observatories, Earth measurements. Pure astronomy. Many of the star names we still use today are Arabic, because Islamic astronomers were the ones who systematically catalogued the sky for centuries.`,
            },
            {
              id: `case-4`,
              caseTitle: `Discovery #4 — The Tricky One`,
              clues: [
                { text: `Ibn al-Haytham, around 1020 CE, studied how light enters the eye.` },
                { text: `He wrote "The Book of Optics" which carefully described how vision actually works.` },
                { text: `He developed the experimental method of testing ideas before believing them. He's often called the father of the scientific method.` },
              ],
              correctAnswer: `medicine`,
              realWorldExample: `Ibn al-Haytham revolutionized our understanding of vision.`,
              explanation: `Tricky because optics (light and lenses) is usually grouped with physics, and the scientific method is usually grouped with science generally. But Ibn al-Haytham was specifically studying VISION (how the eye works), which is part of medicine. He bridged physics and medicine in ways most modern fields don't. The lesson: Islamic Golden Age scholars often crossed fields. A modern textbook would label them mathematicians or doctors. They didn't think in those boxes.`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `Roughly when was the ISLAMIC GOLDEN AGE?`,
              options: [
                `100-300 CE`,
                `750-1250 CE`,
                `1500-1700 CE`,
                `1900-Today`,
              ],
              correctIndex: 1,
              explanation: `The Islamic Golden Age was roughly 750-1250 CE, a period of about 500 years of major scientific and scholarly progress across the Islamic world.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `What was the HOUSE OF WISDOM?`,
              options: [
                `A famous mosque`,
                `A major library, university, and research center in Baghdad`,
                `A royal palace`,
                `A type of religious building`,
              ],
              correctIndex: 1,
              explanation: `The House of Wisdom in Baghdad combined library, university, and research center. Scholars from many religions translated and developed knowledge there for centuries.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `Who is AL-KHWARIZMI famous for?`,
              options: [
                `Inventing the wheel`,
                `Writing the founding book of algebra around 820 CE`,
                `Discovering America`,
                `Building the pyramids`,
              ],
              correctIndex: 1,
              explanation: `Al-Khwarizmi's book founded algebra. The word "algebra" comes from his Arabic title. The word "algorithm" comes from his name. He's one of the most important mathematicians in history.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `Why does Europe owe something to the Islamic Golden Age?`,
              options: [
                `Europe doesn't owe anything to it`,
                `Islamic scholars preserved and translated ancient Greek knowledge that would otherwise have been lost, and Europe rediscovered it through Arabic translations`,
                `Islamic scholars taught in European universities`,
                `Islamic armies conquered Europe`,
              ],
              correctIndex: 1,
              explanation: `Many ancient Greek texts (like much of Aristotle and medical works) would have been lost forever without Islamic scholars translating and preserving them. Europe's later Renaissance was built on these recovered texts.` },

            { id: `l07-q5`, format: `true-false`,
              question: `True or false: Only Muslims worked as scholars during the Islamic Golden Age.`,
              correctAnswer: false,
              explanation: `False. Christians, Jews, and Muslims often worked side by side in places like the House of Wisdom. The Islamic Golden Age was known for its multi-religious collaboration in scholarship.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `What did IBN AL-HAYTHAM contribute?`,
              options: [
                `Algebra`,
                `Major advances in optics and the early scientific method`,
                `Astronomy only`,
                `Modern medicine`,
              ],
              correctIndex: 1,
              explanation: `Ibn al-Haytham studied how vision works and developed an early version of the scientific method. He's sometimes called the "father of the scientific method" for his rigorous experimental approach.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `Why are many star names ARABIC today (like Aldebaran, Altair, Vega)?`,
              options: [
                `Random chance`,
                `Because Islamic astronomers systematically catalogued and named stars during the Golden Age`,
                `Because Arabs were the first to see stars`,
                `Modern astronomers chose Arabic names`,
              ],
              correctIndex: 1,
              explanation: `Islamic astronomers spent centuries mapping the night sky and naming stars. Their names stuck because they were the most accurate catalogues available for centuries. We still use them today.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What ended the Islamic Golden Age?`,
              options: [
                `Disease`,
                `Several factors, including political fragmentation and the Mongol sack of Baghdad in 1258`,
                `Lack of funding`,
                `Religious changes`,
              ],
              correctIndex: 1,
              explanation: `The Golden Age slowly ended for many reasons. The Mongol destruction of Baghdad in 1258 was a major blow. After that, the center of scholarship gradually shifted toward Europe, where the Renaissance was about to begin.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Did you ever learn about the Islamic Golden Age in school before today? Why do you think this period gets less attention than European history?` },
            { id: `r2`, text: `Imagine being a scholar at the House of Wisdom around 900 CE, with access to translations from every major civilization. What subject would you focus on?` },
            { id: `r3`, text: `Algebra was invented by an Islamic mathematician. How does it feel to know that something you've used in school traces back to a different culture?` },
            { id: `r4`, text: `Why is it important to recognize the contributions of cultures other than your own?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `The Islamic Golden Age is one of the most underrepresented periods in standard Western education. Many people grow up thinking science went straight from ancient Greeks to European Renaissance, completely skipping 500 years of incredible Islamic scholarship in between. That's not just inaccurate. It misses some of the most important sources of modern math, medicine, and science. Recognizing the Islamic Golden Age is part of seeing the real story of how knowledge developed across cultures over time.`,
          familyAdventure: `Family Names of the Stars. On a clear night, look up at the stars together. Look up the names of three bright stars you can see. Check how many have Arabic names (probably most). Trace where each name comes from. You're using a star-naming system that was systematic 1,000 years before modern astronomy. Then discuss: what does it tell you that astronomical names from Islamic civilization are still standard worldwide?`,
          creativePrompt: {
            intro: `Imagine you're a scholar at the House of Wisdom in Baghdad around 900 CE. Write about what you're studying.`,
            floor: `Write at least 5 sentences. Describe what subject you study, who you work with, what books you're translating, and what you've recently learned.`,
            stretch: `Write 8 to 10 sentences. Cover your work, your colleagues from different religions, a discovery you've made, and what you hope to contribute to human knowledge.`,
            open: `Write as much as you want. Build a full first-person account that includes real Golden Age scholars, real fields of study, the city of Baghdad, and reflection on how privileged you are to live in this remarkable place and time.`,
            frames: [
              `My name is ___, and I work at the House of Wisdom in Baghdad.`,
              `I study ___.`,
              `Today I translated a book from ___ into Arabic.`,
              `The most important thing I've discovered is ___.`,
              `I hope my work helps the world by ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what the Islamic Golden Age was, describe the House of Wisdom, name important scholars like al-Khwarizmi and Ibn Sina, and connect Golden Age advances to modern math, medicine, and astronomy. Next lesson: the empire that ended the Golden Age and built the biggest contiguous empire in human history. The MONGOLS. See you there. — Lyra.`,
          badge: `golden-age-scholar`,
          badgeName: `Golden Age Scholar`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L07 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
