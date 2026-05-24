// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L19 — Current Events
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.10.3-5 / D3.1.3-5 / D3.2.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: drag-identify (Sort sources by type — media literacy)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-19`,
      title: `Current Events`,
      duration: 22,
      xpReward: 75,
      badge: `media-literate`,
      badgeName: `Media Literate`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey {name}. Today's lesson is one of the most practical we've done. We look at how to actually read the news. With social media, blogs, podcasts, AI-generated content, and twenty-four hour news channels, you face more information every day than any human in history. Some of it is true. Some is misleading. Some is outright fake. Knowing how to tell the difference is one of the most useful skills you can develop. By the end, you'll be able to sort information sources like a real media literate person.`,
          headline: `Current Events`,
          subtitle: `How to actually read the news — and tell what's reliable`,
          visual: `/ue-assets/social-studies/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Current Events" Actually Means`,
          paragraphs: [
            `Current events are the major things happening in the world right now — politics, conflicts, scientific discoveries, sports, technology, business, culture. Adults talk about them. Kids see them in passing. They're the topics that shape conversations, votes, and policies.`,
            `Why should you care about current events as a kid? Because the world isn't separate from your life. The decisions made today about climate change, technology, education, and policy will shape what your life looks like in twenty years. Paying attention now means you grow up understanding context — instead of having to learn it all suddenly as an adult.`,
            `But you can't just trust everything you see. Information today comes from thousands of sources, and not all of them are trying to inform you accurately. Some are trying to entertain you. Some are trying to make you angry, so you'll click. Some are trying to sell you things. Some are spreading misinformation on purpose. Learning to tell the difference is a skill — one most adults still haven't mastered.`,
          ],
          image: `/ue-assets/social-studies/l19-s1-current-events.webp`,
          imageCaption: `News is everywhere. Quality isn't.`,
          vocab: [
            { word: `current events`,
              definition: `The important things happening in the world right now — politics, science, conflicts, culture, and more.`,
              audioPrompt: `Current events are the important things happening in the world right now, {name}. Politics, conflicts, scientific discoveries, sports, business, technology — all are current events. Adults talk about them. They shape laws, elections, and what life looks like in your country and beyond. Paying attention to current events isn't just for adults. The earlier you start, the more context you build over time. Most adults wish they'd started taking the news seriously much sooner than they did. You don't have to make their mistake.` },
            { word: `primary source`,
              definition: `An original document, study, statement, or evidence — the actual source rather than a summary or second-hand report.`,
              audioPrompt: `A primary source is an original document or evidence — the actual source, rather than a summary or second-hand report, {name}. In journalism, a primary source is the original study, the official statement, the court document, or the firsthand witness. When a news article says a new study found something, the primary source is the study itself. Going to primary sources takes more effort — but it helps you avoid the distortions that happen when claims get passed through multiple layers of reporting. Good journalists always cite theirs.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Types of Information Sources`,
          paragraphs: [
            `Not all sources are the same. Knowing what type of source you're reading is the first step in evaluating it.`,
            `News reporting: Journalists working at established newspapers, TV networks, or news websites investigate events and report what they find. Good news reporting verifies facts, quotes multiple sources, separates facts from opinions, and corrects mistakes when caught. The New York Times, BBC, Associated Press, and Reuters are examples of established news organizations. Opinion / editorial: Same writers, but the goal is to give their view of events, not report neutrally. Op-eds, editorials, and columns are opinion. Opinion isn't bad — it's just different from straight reporting, and should be labeled clearly.`,
            `Social media posts: People share their thoughts, jokes, and reactions on platforms like Instagram, TikTok, X, and others. Some social media posts are well-informed. Many are not. None go through the same fact-checking as established news. Sponsored content / ads: Material designed to look like news but actually trying to sell you something. Good media platforms label these clearly. Bad ones disguise them. AI-generated content: Articles, images, and videos generated by artificial intelligence. Some are accurate. Many include errors. They can also be used to spread false information at huge scale. Knowing which type you're reading is half the battle.`,
          ],
          image: `/ue-assets/social-studies/l19-s2-source-types.webp`,
          imageCaption: `News. Opinion. Social media. Ads. AI. Different sources, different reliability.`,
          vocab: [
            { word: `journalism`,
              definition: `The work of investigating events, verifying facts, and reporting accurately to inform the public.`,
              audioPrompt: `Journalism is the work of investigating events, verifying facts, and reporting accurately to inform the public, {name}. Good journalism takes time — reporters check multiple sources, separate facts from opinions, and correct mistakes. It's also expensive — which is why much of the best journalism is found in places that pay for it, like major newspapers and news organizations. Journalism is different from opinion writing, social media, or ads — but treating any of them as the same is a common mistake.` },
            { word: `misinformation`,
              definition: `False information that is spread, whether or not the person spreading it knows it's false.`,
              audioPrompt: `Misinformation is false information that gets spread, {name}, whether or not the person spreading it knows it's false. Some misinformation is honest mistakes — someone saw something wrong and passed it along. Some is intentional — that's sometimes called disinformation, when someone is deliberately spreading lies. Social media has made spreading both much faster. Recognizing misinformation is a real skill. It usually requires checking facts against multiple reliable sources, being suspicious of emotional reactions, and slowing down before sharing anything that seems shocking.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to Evaluate a Source`,
          paragraphs: [
            `Once you know what kind of source you're reading, you can evaluate it. Several questions help.`,
            `Who wrote it? Is the author named? What's their expertise? What's their potential bias? An article about new vaccines written by a doctor is different from one written by an anonymous influencer. What's the source's track record? Some news organizations have been around for decades and have built credibility through consistent accurate reporting and clear corrections when wrong. Others are brand new or have a history of bias or errors. Where does the information come from? Good reporting cites sources — names of people, specific studies, official documents. If an article just makes claims without naming where they came from, that's a warning sign.`,
            `Is it confirmed by other reliable sources? If a story is true, multiple independent sources usually report it. If only ONE source has the story — especially if it's a sensational claim — be cautious. What's missing? Is the story telling you everything, or only certain parts? Good reporting acknowledges what isn't known. Bad reporting pretends to know more than it does. These habits take practice. The more you use them, the more automatic they become.`,
          ],
          image: `/ue-assets/social-studies/l19-s3-evaluate.webp`,
          imageCaption: `Who. Where. Sourced. Confirmed. The questions that protect you from being fooled.`,
          vocab: [
            { word: `bias`,
              definition: `A tendency to see things from a particular point of view, often without realizing it.`,
              audioPrompt: `Bias is a tendency to see things from a particular point of view, {name}, often without realizing it. Everyone has biases — they come from your background, your experiences, your group. Bias isn't always bad — it just means you're not perfectly neutral. The danger is when bias affects what facts you accept, what stories you trust, and what perspectives you ignore. Recognizing bias in YOURSELF is one of the most useful skills you can develop. Recognizing bias in the SOURCES you read is the other half.` },
            { word: `verification`,
              definition: `Checking whether something is actually true before accepting or sharing it.`,
              audioPrompt: `Verification is checking whether something is actually true before accepting or sharing it, {name}. It's one of the core skills of journalism — and one of the most important skills for anyone using social media. Verification can be as simple as checking if multiple reliable sources are reporting the same thing. It can be as complex as tracing claims back to original studies or documents. The temptation is always to share first and verify later — resist it.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building Habits That Work`,
          paragraphs: [
            `Media literacy isn't a one-time skill — it's a habit you build over time. Some practices that work for adults can start working for you now.`,
            `Read more than one source on big stories. If you only ever read one news outlet, you'll think their version is the whole story. Even good sources have blind spots. Reading the same story across two or three different outlets gives you a fuller picture. Distinguish between news and opinion. Most papers separate the two. Pay attention to the labels. If you're reading opinion, treat it as one person's view — not as facts.`,
            `Slow down on shocking stories. The most dramatic claims are also the most often false or distorted. If a story makes you feel a strong emotion within seconds, pause. Check it later. Be skeptical of headlines. Headlines are written to make you click. They often exaggerate or simplify what the article actually says. Always read past the headline. Don't trust your feed alone. Social media algorithms show you things that get your attention, not things that are accurate. Following thoughtful journalists, reading actual articles, and looking up topics for yourself all build a better information diet than just scrolling.`,
          ],
          image: `/ue-assets/social-studies/l19-s4-habits.webp`,
          imageCaption: `Multiple sources. Slow down. Skip emotional manipulation. Built over time.`,
          vocab: [
            { word: `media literacy`,
              definition: `The ability to evaluate information sources critically — knowing what's reliable and what isn't.`,
              audioPrompt: `Media literacy is the ability to evaluate information sources critically, {name} — knowing what's reliable and what isn't. It's one of the most important skills for the modern world. It involves knowing the type of source you're reading, checking who wrote it, looking for evidence and citations, comparing claims across multiple sources, and recognizing your own biases. Media literacy isn't about cynicism. It's about knowing what to trust, when, and why. The earlier you build it, the more useful it becomes.` },
            { word: `algorithm`,
              definition: `A set of rules a computer follows to decide what to show you — like which posts appear in your social media feed.`,
              audioPrompt: `An algorithm is a set of rules a computer follows to decide what to show you, {name} — like which posts or articles appear in your social media feed. Social media algorithms are designed to maximize engagement — showing you content that keeps you on the platform longer. That often means emotional, outrageous, or sensational content, because those get the most clicks and reactions. Algorithms don't care whether what they show you is accurate. They care whether you stay.` },
          ],
        },

        // ── DRAG-IDENTIFY GAME — Sort Information Sources ──────────────────────
        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Real practice time, {name}. I'll show you eight examples of things you might encounter online or in the news. For each one, sort it into the right category. Read carefully — some are tricky on purpose. Knowing what kind of source you're looking at is the first step to evaluating it.`,
          buckets: [
            { id: `news-reporting`, label: `News Reporting`,     color: `#34D399` },
            { id: `opinion`,         label: `Opinion / Editorial`, color: `#A78BFA` },
            { id: `social-media`,    label: `Social Media Post`,   color: `#0EA5E9` },
            { id: `ad-sponsored`,    label: `Ad / Sponsored`,      color: `#F87171` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `A New York Times article reporting on a Senate vote, citing multiple sources and quoting senators from both parties`,
              matchPhrase: `News reporting. Established outlet, multiple sources, named quotes, balanced perspectives.`, correctMatch: `news-reporting` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `An op-ed in the Washington Post titled "Why I Think the New Education Policy Will Fail"`,
              matchPhrase: `Opinion. Op-eds are written to share the author's view, not to report neutrally. The "Why I Think" tells you immediately.`, correctMatch: `opinion` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `An Instagram post with a flashy image saying "DOCTORS HATE HIM! Try this one weird trick to lose weight fast"`,
              matchPhrase: `Ad / Sponsored. Classic clickbait ad style. Sensational claims, promises of dramatic results, designed to make you click.`, correctMatch: `ad-sponsored` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `A TikTok video where someone shares their personal opinion about a school policy`,
              matchPhrase: `Social media post. One person's view, no fact-checking, not verified against multiple sources.`, correctMatch: `social-media` },
            { id: `l19-g5`, image: `l19-game-5.webp`, label: `A Reuters article reporting hurricane damage with named witnesses, official statistics, and a map of affected areas`,
              matchPhrase: `News reporting. Established wire service, named witnesses, official data, factual presentation.`, correctMatch: `news-reporting` },
            { id: `l19-g6`, image: `l19-game-6.webp`, label: `An Instagram post that says "Paid partnership with [brand]" at the top, showing someone using a product`,
              matchPhrase: `Ad / Sponsored. "Paid partnership" is the platform's required disclosure that this is an ad.`, correctMatch: `ad-sponsored` },
            { id: `l19-g7`, image: `l19-game-7.webp`, label: `A Wall Street Journal editorial expressing the newspaper's position on tax policy`,
              matchPhrase: `Opinion. Editorials express the paper's institutional view, not its news reporting. They're a key part of the paper but distinct from news.`, correctMatch: `opinion` },
            { id: `l19-g8`, image: `l19-game-8.webp`, label: `A friend's tweet saying "Just saw a UFO over the city, no joke, here's a blurry photo"`,
              matchPhrase: `Social media post. One unverified personal account, no expertise, no second sources. Interesting maybe, evidence not really.`, correctMatch: `social-media` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Quick test, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What are current events?`,
              options: [
                `Old news from history`,
                `The important things happening in the world right now — politics, science, conflicts, and more`,
                `Just sports`,
                `Just weather`,
              ],
              correctIndex: 1,
              explanation: `Current events are the important things happening right now. They shape policy, elections, and what life looks like — including your life as you grow up.` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `What's journalism?`,
              options: [
                `Anything posted online`,
                `The work of investigating events, verifying facts, and reporting accurately to inform the public`,
                `Personal opinions only`,
                `Advertisements`,
              ],
              correctIndex: 1,
              explanation: `Journalism involves investigating, verifying facts, and reporting accurately. It's different from opinion, social media, or ads — even though they can look similar online.` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What's misinformation?`,
              options: [
                `Information that's hard to read`,
                `False information that gets spread, whether or not the person sharing it knows it's false`,
                `News from another country`,
                `Anything you disagree with`,
              ],
              correctIndex: 1,
              explanation: `Misinformation is false information being spread. Sometimes intentionally (called disinformation), sometimes by mistake. Recognizing it requires checking facts and slowing down before sharing.` },
            { id: `l19-q4`, format: `multiple-choice`,
              question: `What's a good question to ask when evaluating a source?`,
              options: [
                `What's the color scheme?`,
                `Who wrote it, where does the information come from, and do multiple reliable sources confirm it?`,
                `Did the writer go to college?`,
                `Is it written in English?`,
              ],
              correctIndex: 1,
              explanation: `The right questions are about the source's reliability — author, evidence, confirmation. Color schemes and fancy presentation don't tell you anything about whether something is true.` },
            { id: `l19-q5`, format: `true-false`,
              question: `True or false: Just because something appears on a social media feed doesn't mean it's been fact-checked.`,
              correctAnswer: true,
              explanation: `True. Social media posts aren't reviewed for accuracy before they go up. They're shared based on what gets engagement, which often favors emotional or shocking content — accurate or not.` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `What's the difference between news reporting and an opinion piece?`,
              options: [
                `There's no difference`,
                `News reporting tries to present facts; opinion pieces share the writer's view of events`,
                `Opinion pieces are always false`,
                `News reporting is shorter`,
              ],
              correctIndex: 1,
              explanation: `News reports facts. Opinion shares the writer's view. Both have their place — but treating opinion as if it were neutral reporting is a common mistake. Pay attention to which you're reading.` },
            { id: `l19-q7`, format: `multiple-choice`,
              question: `If you see a shocking headline that makes you really angry within seconds, what's the smart move?`,
              options: [
                `Share it immediately`,
                `Pause. The most emotional headlines are often the most distorted. Check the actual story and other sources before reacting.`,
                `Believe everything in it`,
                `Ignore the article completely`,
              ],
              correctIndex: 1,
              explanation: `Strong emotional reactions are exactly when you should slow down. Many of the most distorted or false stories are designed to trigger anger. The pause is one of the most useful media literacy habits.` },
            { id: `l19-q8`, format: `multiple-choice`,
              question: `Why is reading multiple sources on the same story useful?`,
              options: [
                `It takes more time`,
                `Even good sources have blind spots — comparing across sources gives you a fuller picture`,
                `It's required by law`,
                `Most sources lie`,
              ],
              correctIndex: 1,
              explanation: `Every source has its own perspective, biases, and gaps. Reading two or three different sources on a story almost always gives you a fuller picture than relying on just one — even if that one is reliable.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Where do you usually get news or information about the world? How reliable are those sources?` },
            { id: `r2`, text: `Have you ever shared something online that you later found out was wrong? What did you learn from it?` },
            { id: `r3`, text: `What's one media literacy habit you'd like to start practicing now?` },
            { id: `r4`, text: `Why do you think misinformation spreads so fast on social media?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Right now, billions of pieces of content are being posted online. Some are accurate. Many aren't. AI-generated content is making it easier than ever to create convincing fake news, photos, and videos. The skill of telling reliable from unreliable has gone from "useful" to "essential." Your generation will face the most information-saturated environment of any generation in history. The ones who learn to navigate it well will have an enormous advantage. The ones who don't will get used.`,
          familyAdventure: `Together, pick a major recent news story. Find how three different news sources reported it — try to pick sources with different perspectives. Read all three together. Talk about what's the same, what's different, and which seems most reliable. Bonus: try to find the ORIGINAL primary source (study, official statement, document) the news is based on.`,
          creativePrompt: {
            intro: `Imagine you're starting your own news source. What would you focus on? How would you make sure your reporting was reliable?`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Describe specific practices you'd use to keep it accurate and trustworthy.`,
            open: `Write as much as you want. Imagine your news source running for years.`,
            frames: [
              `My news source would focus on ___.`,
              `The audience I'd want to reach is ___.`,
              `Specific practices I'd use to keep it accurate are ___.`,
              `How I'd handle making a mistake is ___.`,
              `Why I think this would matter is ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Practical skills banked, {name}. You can now define current events, recognize different types of sources, evaluate them with real questions, and use habits that protect you from being fooled. These are some of the most useful skills you'll ever learn. One lesson left in your social studies UE journey — the capstone. We pull it all together. — Atlas.`,
          badge: `media-literate`,
          badgeName: `Media Literate`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L19;
