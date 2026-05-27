// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L09 — The Research Process: Finding Credible Sources
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS W.4.7 / W.5.7 — Conduct short research projects
//            CCSS W.4.8 / W.5.8 — Recall information from experiences or gather from sources
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — starting with a research question, primary vs secondary sources,
//        the CRAAP test for credibility, organizing what you find
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-09`,
      title: `The Research Process: Finding Credible Sources`,
      duration: 18,
      xpReward: 75,
      badge: `research-pro`,
      badgeName: `Research Pro`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. The internet has more information than any human library that ever existed. It also has more lies. Every minute, somebody publishes something fake on purpose, and somebody else accidentally publishes something wrong. Real research is the skill of finding what's true in that mess. Today you'll learn the four steps of the research process and the famous CRAAP test for evaluating sources. By the end, you'll know how to research like a scholar. Let's go.`,
          headline: `The Research Process`,
          subtitle: `How to find sources you can actually trust`,
          visual: `/ue-assets/ela/l09-welcome.webp`,
        },

        // ── SECTION 1 — START WITH A QUESTION ─────────────────────────────────
        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Start With a Real Question`,
          paragraphs: [
            `Every good research project starts with a clear, focused QUESTION. Bad research starts with a topic that's too big. "Volcanoes" isn't a research question. "Why do some volcanoes erupt violently while others erupt gently?" is. A real question is specific, it's debatable or curious enough to actually research, and it tells you where to look.`,
            `The narrower your question, the better your research. A focused question keeps you from drowning in too much information. It tells you when a source matters and when to skip it. If you find yourself reading for an hour and not getting closer to an answer, your question was probably too broad. Tighten it and start again.`,
          ],
          image: `/ue-assets/ela/l09-s1-research-question.webp`,
          imageCaption: `A focused question is the GPS of any research project.`,
          vocab: [
            { word: `research question`,
              definition: `A specific, focused question that drives a research project and guides where to look.`,
              audioPrompt: `A research question is the specific question driving a research project, {name}. Not a vague topic. A real question. "What caused the Roman Empire to fall?" "How do bees find their way home?" "Why do some kids prefer audiobooks over reading?" Focused questions give your research direction. Without one, you'll wander forever and never feel like you found the answer.` },
            { word: `inquiry`,
              definition: `A question-driven investigation into a topic. Research is a form of structured inquiry.`,
              audioPrompt: `Inquiry means asking questions and investigating to find answers, {name}. All research is a form of inquiry. You start with something you don't know. You ask a focused question about it. Then you go looking for evidence. Without a good inquiry question driving the project, research tends to drift and never land anywhere useful.` },
          ],
        },

        // ── SECTION 2 — PRIMARY VS SECONDARY ─────────────────────────────────
        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Primary Sources and Secondary Sources`,
          paragraphs: [
            `Two big categories of sources exist. PRIMARY sources are firsthand. The actual original evidence. A letter Lincoln wrote. A scientist's original experiment notes. A photograph from a war. An interview with someone who was there. Primary sources are the closest you can get to "the real thing."`,
            `SECONDARY sources analyze, interpret, or summarize primary sources. A textbook explaining the Civil War is secondary. A news article describing a scientific study is secondary. Most things you read in school are secondary sources. They're useful for getting background, but the strongest research USUALLY uses both: secondary sources to understand the topic, primary sources to dig deeper.`,
          ],
          image: `/ue-assets/ela/l09-s2-primary-secondary.webp`,
          imageCaption: `Primary: original evidence. Secondary: someone analyzing primary.`,
          vocab: [
            { word: `primary source`,
              definition: `An original firsthand record. Letters, photographs, original experiments, interviews, eyewitness accounts.`,
              audioPrompt: `A primary source is firsthand evidence, {name}. The closest you can get to the real thing. A letter someone wrote during a war. A scientist's original lab notes. A photograph from a historic event. An interview with someone who was actually there. Primary sources are powerful because they haven't been filtered through someone else's interpretation. They're the raw material every secondary source is built from.` },
            { word: `secondary source`,
              definition: `A source that analyzes, interprets, or summarizes primary sources. Textbooks, news articles, documentaries.`,
              audioPrompt: `A secondary source analyzes or interprets primary sources, {name}. A textbook explaining what happened during the Civil War is secondary. A documentary about a scientific discovery is secondary. Most of what you read in school is secondary. Secondary sources are great for building background understanding, but strong research also digs into the primary sources they're built on.` },
          ],
        },

        // ── SECTION 3 — THE CRAAP TEST ────────────────────────────────────────
        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The CRAAP Test`,
          paragraphs: [
            `Researchers use a famous five-part check called the CRAAP test. CURRENCY: is the source recent enough? RELEVANCE: does it actually answer your question? AUTHORITY: who wrote it, and are they qualified? ACCURACY: is the information backed by evidence and other sources? PURPOSE: why was this written, to inform, to sell, to entertain? A source that passes all five is likely worth using.`,
            `Not every source has to ace every part of the CRAAP test. A 1920 newspaper isn't current, but it might be a great primary source. A blog by a credentialed expert might pass authority but feel a little promotional. Use the test as a checklist, not a deal-breaker. The goal is awareness. When you know exactly where a source is weak, you know exactly how cautiously to read it.`,
          ],
          image: `/ue-assets/ela/l09-s3-craap-test.webp`,
          imageCaption: `CRAAP: Currency, Relevance, Authority, Accuracy, Purpose.`,
          vocab: [
            { word: `credibility`,
              definition: `How trustworthy a source is, based on factors like the author's qualifications, the publisher, evidence used, and purpose.`,
              audioPrompt: `Credibility is how trustworthy a source is, {name}. Sources earn credibility through qualified authors, reputable publishers, real evidence, and honest purpose. A website with no author, no date, no sources, and obvious ads is low credibility. A peer-reviewed study by a university researcher is high credibility. The format doesn't decide credibility. The substance does.` },
            { word: `currency`,
              definition: `How recent a source is. In the CRAAP test, currency asks whether the information is up to date for the topic.`,
              audioPrompt: `Currency in research means how recent a source is, {name}. It's the C in the CRAAP test. Some topics change fast. Medical research from 10 years ago might be outdated. Other topics are timeless. A 200-year-old letter from a historical figure is old and still perfect as a primary source. The question isn't just "how old?" It's "does the age matter for THIS topic?"` },
          ],
        },

        // ── SECTION 4 — ORGANIZING YOUR RESEARCH ──────────────────────────────
        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Stay Organized or Drown`,
          paragraphs: [
            `Research without organization is a swamp. You'll find a great fact and lose where it came from. You'll think you remember something and discover you don't. You'll waste hours retracing your steps. Strong researchers organize from the start. For each piece of information they find, they write the fact in their own words, record the source (title, author, date, link), and note which part of the research question it answers.`,
            `The time you spend organizing pays back triple when it's time to write. Disorganized notes make writing miserable. Organized notes turn writing into assembly. Pick a system that works for you. Note cards. A research notebook. A digital document with clear headings. The system matters less than actually using one.`,
          ],
          image: `/ue-assets/ela/l09-s4-organize.webp`,
          imageCaption: `Notes you can use later beat notes you take in a hurry.`,
          vocab: [
            { word: `citation`,
              definition: `A clear record of where a piece of information came from. Author, title, date, and source.`,
              audioPrompt: `A citation is a record of where information came from, {name}. Author name, title of the article or book, date, and where to find it. Citations make your research honest. They show readers where your facts came from, so they can check for themselves. They also protect you from accidentally taking credit for someone else's work. Every researcher needs to learn how to cite, and the habit starts early.` },
            { word: `source`,
              definition: `Any material you draw information from during research — articles, books, interviews, videos, and more.`,
              audioPrompt: `A source is anything you draw information from during research, {name}. Articles, books, interviews, videos, data sets — all of these are sources. Not all sources are equal. Some are credible. Some are weak. Part of being a skilled researcher is knowing which sources to trust and which to skip. Keeping a clear record of every source you use is how organized research starts.` },
          ],
        },

        // ── INTERACTIVE GAME — Source Evaluation Investigation ────────────────
        {
          id: `l09-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. You're researching this question: "How does sleep affect kids' memory?" Four sources show up. For each one, decide whether it's a STRONG SOURCE (use it), a WEAK SOURCE (probably skip it), or a PRIMARY SOURCE you should treat carefully.\n\nOne is sneakier than it looks.`,
          options: [
            { id: `strong-secondary`, label: `Strong Secondary Source`, color: `#34D399`, description: `Credible expert, recent, real evidence, neutral purpose. Use it.` },
            { id: `weak-source`,      label: `Weak Source`,             color: `#F87171`, description: `No clear author, no sources cited, obvious bias, or out of date. Probably skip.` },
            { id: `primary-source`,   label: `Primary Source`,          color: `#FBBF24`, description: `Firsthand evidence: original study, interview, dataset. Powerful but needs context.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Source #1`,
              clues: [
                { text: `A 2022 article from the American Academy of Pediatrics journal.` },
                { text: `Author: Dr. Maria Chen, sleep researcher with 20 years of experience.` },
                { text: `Cites a dozen recent studies and is published by a respected medical organization.` },
              ],
              correctAnswer: `strong-secondary`,
              realWorldExample: `The kind of source a real researcher would build their whole project around.`,
              explanation: `Recent (currency). Directly relevant. Qualified author (authority). Multiple cited studies (accuracy). Published by a medical association, not a company selling something (purpose). Passes every part of the CRAAP test. Strong source.`,
            },
            {
              id: `case-2`,
              caseTitle: `Source #2`,
              clues: [
                { text: `A blog post titled "Sleep is everything!"` },
                { text: `No author name listed. No date.` },
                { text: `Cites no sources. The page is full of ads for melatonin supplements.` },
              ],
              correctAnswer: `weak-source`,
              realWorldExample: `Common pattern of low-quality content marketing.`,
              explanation: `No author = no authority. No date = no way to check currency. No sources = no accuracy verification. Ads for products = a clear purpose (selling, not informing). Fails almost every CRAAP test. Skip it.`,
            },
            {
              id: `case-3`,
              caseTitle: `Source #3`,
              clues: [
                { text: `The original 2019 study from Stanford University.` },
                { text: `Methods section, data tables, and a 50-page write-up of the actual experiment.` },
                { text: `Hard to read, but it's the original research itself, not a summary.` },
              ],
              correctAnswer: `primary-source`,
              realWorldExample: `An actual scientific study, the raw evidence everyone else is interpreting.`,
              explanation: `This is the firsthand evidence itself. The actual experiment. Primary source. Strong, but harder to read than secondary sources. Real researchers use a mix. Start with secondary sources to understand the topic, then dig into primary sources for the original evidence.`,
            },
            {
              id: `case-4`,
              caseTitle: `Source #4 — The Tricky One`,
              clues: [
                { text: `A YouTube video titled "Scientists shocked! Sleep secret revealed!"` },
                { text: `Presenter calls himself "Dr. Sleep" and has 2 million subscribers.` },
                { text: `The video cites "studies" but never names them. He sells a sleep coaching course in the description.` },
              ],
              correctAnswer: `weak-source`,
              realWorldExample: `Common pattern of pseudo-expert content marketing.`,
              explanation: `Tricky because the presenter sounds confident, has a big following, and calls himself "Dr." But check carefully. No real expert credentials are shown. No sources are named. A course is for sale. Popularity isn't credibility. A million followers don't make someone a credible source. This is content marketing dressed up as research. Skip it.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What makes a good RESEARCH QUESTION?`,
              options: [
                `As broad as possible`,
                `Specific, focused, and curious enough to actually research`,
                `Already has a known answer`,
                `Has only one possible source`,
              ],
              correctIndex: 1,
              explanation: `Good research questions are focused. "Volcanoes" is a topic. "Why do some volcanoes erupt violently while others erupt gently?" is a question. The narrower the question, the better the research.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `What's the difference between a PRIMARY and a SECONDARY source?`,
              options: [
                `Primary sources are newer; secondary are older`,
                `Primary sources are firsthand evidence; secondary sources analyze or interpret primary sources`,
                `Primary sources are always better`,
                `There's no real difference`,
              ],
              correctIndex: 1,
              explanation: `Primary sources are firsthand: original letters, photos, experiments, interviews. Secondary sources interpret or summarize primary sources: textbooks, articles, documentaries. Both have their place.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `What does the "A" in CRAAP stand for?`,
              options: [
                `Audience`,
                `Authority: who wrote it and are they qualified?`,
                `Author's age`,
                `Availability`,
              ],
              correctIndex: 1,
              explanation: `Authority asks who wrote the source and whether they have the qualifications to be trusted. A heart doctor writing about heart health = authority. A random blogger = no authority. The "two A's" in CRAAP are Authority and Accuracy.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `Why is it important to ORGANIZE your research as you go?`,
              options: [
                `It looks more professional`,
                `Organized research makes writing easy; disorganized research makes it painful and slow`,
                `Teachers require it`,
                `Only professional researchers need to organize`,
              ],
              correctIndex: 1,
              explanation: `Disorganized notes turn writing into a swamp. Organized notes turn writing into assembly. The time you spend organizing pays back triple when you sit down to write.` },

            { id: `l09-q5`, format: `true-false`,
              question: `True or false: A source with a million social media followers is automatically credible.`,
              correctAnswer: false,
              explanation: `False. Popularity isn't credibility. A million followers don't prove someone is qualified or honest. Always check the real credentials, real evidence, and real purpose behind a source.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `A presenter calls himself "Dr. Sleep," shows confidence, and sells a sleep coaching course. He cites "studies" without naming them. How credible is this source?`,
              options: [
                `Very credible because of the "Dr." title and large following`,
                `Weak: missing real credentials, no named sources, and a clear product to sell`,
                `Only credible if you watch the whole video`,
                `Credible for entertainment but not for facts`,
              ],
              correctIndex: 1,
              explanation: `Real credentials, named sources, and clear purpose are what make a source credible. Confidence, fame, and self-applied titles are not. When someone is selling you a product, treat the source with extra caution.` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `Which is the BEST example of a PRIMARY source for a research project on a 1969 moon landing?`,
              options: [
                `A textbook chapter about the moon landing`,
                `A documentary made in 2020 about the moon landing`,
                `A diary entry written by an astronaut on the day of the mission`,
                `A news article published last year summarizing the event`,
              ],
              correctIndex: 2,
              explanation: `The astronaut's own diary from that day is firsthand. The textbook, documentary, and recent article are all secondary sources that analyze and interpret primary materials. The diary is the closest you can get to the real thing.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `Why is research one of the most valuable life skills, even outside school?`,
              options: [
                `It impresses adults`,
                `It lets you find real answers in a world full of fake information, biased sources, and confident liars`,
                `It's required for every job`,
                `It makes papers longer`,
              ],
              correctIndex: 1,
              explanation: `The world is full of information, and a lot of it is wrong. The people who can sort truth from noise have a real advantage in school, in work, in money decisions, in health decisions, and in life. Research is one of the highest-leverage skills you can build.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a question you'd genuinely love to research? Why does it interest you?` },
            { id: `r2`, text: `Have you ever believed something because of a source, and later found out the source was wrong? What happened?` },
            { id: `r3`, text: `Which part of the CRAAP test do you think you usually skip when reading something online?` },
            { id: `r4`, text: `Why do you think people accept low-credibility sources so easily, even when better sources exist?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Research isn't just for school papers. Adults research every day. Buying a car. Choosing a doctor. Voting in an election. Deciding whether a news story is true or rumor. The same five-step CRAAP test scientists use is the same one you can use on a TikTok health claim or a Wikipedia article. The skill of sorting reliable from unreliable information is one of the most valuable skills a person can have. The good news? It's just a habit. Once you build it, it's automatic.`,
          familyAdventure: `Family CRAAP Test Night. Pick one trending topic everyone has heard about recently. Each person finds ONE source about it from somewhere different (a video, a news article, a blog, a social post). At dinner, run each source through the CRAAP test out loud as a family. Currency, Relevance, Authority, Accuracy, Purpose. Decide together which source you'd actually trust. Discuss why.`,
          creativePrompt: {
            intro: `Pick a real question you're curious about. Find two sources to answer it. Run each one through the CRAAP test.`,
            floor: `Write at least 5 sentences. State your question. Name your two sources. For each one, write one sentence about Authority and one about Purpose.`,
            stretch: `Write 8 to 10 sentences. Cover the full CRAAP test for both sources. Rate each one. Then write the answer to your question, citing which source you trusted most and why.`,
            open: `Write as much as you want. Find three sources, run a full CRAAP test on each, and write a mini research report with citations.`,
            frames: [
              `My research question is ___.`,
              `My first source is ___.`,
              `The CRAAP test shows it's ___ because ___.`,
              `My second source is ___.`,
              `The most trustworthy answer based on my research is ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now form a real research question, tell primary sources from secondary, run any source through the CRAAP test, and organize your notes so writing later feels like assembly instead of survival. Next lesson: we dig deeper into source evaluation. How do you spot bias, fake authority, and sources that are technically true but secretly biased? See you there. — Quill.`,
          badge: `research-pro`,
          badgeName: `Research Pro`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L09 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
