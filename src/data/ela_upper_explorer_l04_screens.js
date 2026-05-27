// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L04 — Comparing Multiple Texts on the Same Topic
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RI.4.9 / RI.5.9 — Integrate information from multiple texts
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — why compare, finding agreement, finding disagreement, synthesis
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-04`,
      title: `Comparing Multiple Texts on the Same Topic`,
      duration: 18,
      xpReward: 75,
      badge: `multi-source-scholar`,
      badgeName: `Multi-Source Scholar`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Here's a trap most readers fall into: they read ONE article about something, and they think they understand the topic. They don't. They understand ONE perspective on the topic. The actual truth almost always lives in the space between several sources. Today you'll learn how to compare multiple texts on the same topic, where to look for agreement, where to look for disagreement, and how to combine them into something stronger than any single source on its own. Let's go.`,
          headline: `Comparing Multiple Texts`,
          subtitle: `Why one source is rarely enough, and how to combine many`,
          visual: `/ue-assets/ela/l04-welcome.webp`,
        },

        // ── SECTION 1 — WHY ONE SOURCE ISN'T ENOUGH ──────────────────────────
        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why One Source Isn't Enough`,
          paragraphs: [
            `Every author writes from one perspective with one purpose. An article about the Amazon rainforest written by NASA might focus on satellite data. An economist might focus on the cost of saving it. A scientist who studies the trees might focus on how the ecosystem actually works. None of them is wrong. Each one is just incomplete.`,
            `The goal of reading multiple sources isn't to find the ONE right text. It's to combine the best of what each one offers. The fuller picture lives between them. Whatever topic you're trying to understand seriously, the move is always the same: don't stop at one.`,
          ],
          image: `/ue-assets/ela/l04-s1-multiple-sources.webp`,
          imageCaption: `Each source sees part of the picture. Combining them shows you more.`,
          vocab: [
            { word: `source`,
              definition: `Where a piece of information comes from. A book, article, website, study, or person.`,
              audioPrompt: `A source is where information comes from, {name}. A specific book, article, website, study, or expert. Every text you read is one source, with one perspective. Strong readers don't trust a single source on important topics. They pull in two, three, or more, and look for where the sources agree, where they disagree, and what each one notices that the others miss.` },
            { word: `perspective`,
              definition: `The particular viewpoint or angle an author brings to a topic, shaped by their background, purpose, and expertise.`,
              audioPrompt: `Perspective is the angle an author is writing from, {name}. A scientist and a journalist covering the same discovery will emphasize different things. A CEO and an employee describing the same company will tell you different stories. Neither is automatically wrong. Every source has a perspective. The more sources you read on a topic, the fuller a picture you get, because you're seeing it from multiple angles at once.` },
          ],
        },

        // ── SECTION 2 — FINDING AGREEMENT ─────────────────────────────────────
        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Finding Agreement`,
          paragraphs: [
            `When several independent sources agree on the same fact, that's a strong signal it's probably true. If three articles from different authors all say the Pacific is the largest ocean, you can trust that more than if one source says it. Independent agreement is one of the most powerful tools in research.`,
            `The key word is INDEPENDENT. Three websites that all copied from the same source aren't really three sources. They're one source repeated three times. Always check: did these sources gather their information separately, or did they all pull from the same place? Real agreement comes from real independent confirmation.`,
          ],
          image: `/ue-assets/ela/l04-s2-agreement.webp`,
          imageCaption: `When independent sources agree, that's a strong truth signal.`,
          vocab: [
            { word: `independent`,
              definition: `Sources that gathered their information separately, not copying from each other.`,
              audioPrompt: `Independent sources are ones that researched the same topic separately, {name}. If three scientists in three different countries all measured the depth of the ocean and got the same answer, that's powerful. If three websites all copied the same Wikipedia entry, that's not three sources. It's one source repeated three times. Independence is what makes agreement meaningful.` },
            { word: `confirmation`,
              definition: `When a second or third independent source agrees with what a first source said, strengthening the case that it is true.`,
              audioPrompt: `Confirmation is when a separate source backs up what you already read, {name}. One source makes a claim. A second independent source, which did its own research, arrives at the same conclusion. That's confirmation. It's one of the most powerful signals in research that something is actually true. The key word is independent. Confirmation only counts when the sources did their own work.` },
          ],
        },

        // ── SECTION 3 — FINDING DISAGREEMENT ──────────────────────────────────
        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Finding Disagreement`,
          paragraphs: [
            `Disagreement between sources isn't a bug. It's a clue. When one article says social media is harmful to teens and another says the evidence is mixed, that disagreement is telling you something. The issue isn't fully settled. The science is still developing. Or the two authors are looking at different parts of the picture.`,
            `Smart readers see disagreement and lean in instead of giving up. Who are the two authors? What evidence does each one use? Where does the disagreement actually come from? Sometimes one source is wrong. Sometimes both are partially right. Sometimes the topic is just genuinely complicated. Disagreement is an invitation to think harder, not a reason to walk away.`,
          ],
          image: `/ue-assets/ela/l04-s3-disagreement.webp`,
          imageCaption: `Disagreement is a clue, not a dead end.`,
          vocab: [
            { word: `contradiction`,
              definition: `When two sources say opposite things about the same topic.`,
              audioPrompt: `A contradiction is when two sources say opposite things, {name}. One article says coffee is good for you. Another says it's bad. That's a contradiction. The right move isn't to pick one and ignore the other. It's to dig deeper. Who said what? What did each one measure? Often, contradictions reveal that the truth depends on details, like how much, how often, or for whom.` },
            { word: `disagreement`,
              definition: `When sources differ in what they say about a topic, even if they don't completely contradict each other.`,
              audioPrompt: `Disagreement is when sources don't say the same thing about a topic, {name}. Unlike a flat contradiction, a disagreement can be more subtle. One source says social media is harmful. Another says it depends on how it's used. Both might be partly right. Disagreement between credible sources is almost always a clue that the topic is more complicated than any single source can explain alone.` },
          ],
        },

        // ── SECTION 4 — SYNTHESIS ─────────────────────────────────────────────
        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Synthesis: Putting It All Together`,
          paragraphs: [
            `Synthesis is the highest level of reading. It means taking information from multiple sources and combining it into a new, fuller understanding, in your own words. Not just summarizing each source separately. Actually weaving them together. Source A explains the history. Source B brings the data. Source C adds a real human story. Together they create a picture none of them could give you alone.`,
            `Synthesis is what college papers, professional reports, and serious journalism are built on. It's also what serious thinking looks like in everyday life. Anytime you're trying to make a real decision, you're synthesizing what you've heard from different people, different articles, and your own experience. Practicing it now puts you years ahead of most readers your age.`,
          ],
          image: `/ue-assets/ela/l04-s4-synthesis.webp`,
          imageCaption: `Synthesis: weaving multiple sources into one understanding.`,
          vocab: [
            { word: `synthesis`,
              definition: `Combining information from multiple sources into a new, fuller understanding, in your own words.`,
              audioPrompt: `Synthesis is combining information from multiple sources into one fuller understanding, {name}. Not just summarizing each one separately. Actually weaving them together so the picture is more complete than any single source could give you. Strong synthesis quotes nobody and steals from nobody. It uses what you learned from many places, in your own voice, to build something new.` },
            { word: `integrate`,
              definition: `To bring multiple pieces of information together into a single unified understanding, combining them rather than keeping them separate.`,
              audioPrompt: `To integrate means to bring things together into one unified whole, {name}. When you integrate information from multiple sources, you're not just listing what each one said. You're finding how they connect, where they agree, where they differ, and what the combination tells you that no single source could. Integrating sources is the move that separates a good researcher from someone who just quotes one thing.` },
          ],
        },

        // ── INTERACTIVE GAME — Source Comparison: Four Scenarios ─────────────
        {
          id: `l04-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. You're a researcher comparing sources for a paper. Each case shows what your sources say. Your job: decide whether the situation is INDEPENDENT AGREEMENT (strong signal), CONTRADICTION (needs more research), or COPYCAT SOURCES (not real agreement).\n\nOne is sneakier than it looks. Watch carefully.`,
          options: [
            { id: `independent-agreement`, label: `Independent Agreement`, color: `#34D399`, description: `Multiple separate sources agree. Strong truth signal.` },
            { id: `contradiction`,         label: `Contradiction`,         color: `#FBBF24`, description: `Sources disagree. Need to investigate which is right, or whether both are partially right.` },
            { id: `copycat`,               label: `Copycat Sources`,       color: `#F87171`, description: `Sources look separate but actually pulled from the same place. Not real agreement.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Topic: How deep is the Mariana Trench?`,
              clues: [
                { text: `Source A: National Geographic, citing their own 2020 measurement: about 35,876 feet.` },
                { text: `Source B: NOAA government report, citing US Navy data: 35,853 feet.` },
                { text: `Source C: A Japanese ocean research center, citing their independent 2021 mission: about 35,876 feet.` },
              ],
              correctAnswer: `independent-agreement`,
              realWorldExample: `Three separate organizations, three separate measurements, basically the same answer.`,
              explanation: `Three sources from three countries, each gathering their own data, all landing within 25 feet of each other. The small differences are normal measurement variation. This is what real independent confirmation looks like.`,
            },
            {
              id: `case-2`,
              caseTitle: `Topic: Is dark chocolate healthy?`,
              clues: [
                { text: `Source A: A Harvard study found small heart-health benefits from dark chocolate in moderation.` },
                { text: `Source B: A British medical journal said the benefits are real but tiny, and the sugar negates them.` },
                { text: `Source C: A nutrition expert said the answer depends on how much you eat and what's in the specific chocolate.` },
              ],
              correctAnswer: `contradiction`,
              realWorldExample: `A genuinely complicated topic where the answer depends on details.`,
              explanation: `Three credible sources, three different angles. Not a clean agreement, not exactly opposite. The truth involves "yes, but..." The right move is to read all three carefully and notice that they disagree about the DETAILS, not the basics.`,
            },
            {
              id: `case-3`,
              caseTitle: `Topic: When was the printing press invented?`,
              clues: [
                { text: `Source A: A history textbook says around 1440 by Johannes Gutenberg in Germany.` },
                { text: `Source B: A British Library article, written separately, also says around 1440 by Gutenberg.` },
                { text: `Source C: A history podcast, independently researched, agrees: around 1440, Gutenberg.` },
              ],
              correctAnswer: `independent-agreement`,
              realWorldExample: `Settled historical fact backed by multiple independent sources.`,
              explanation: `Three sources from three formats, all researched separately, all landing on the same date and the same person. This is a settled fact. You can trust it.`,
            },
            {
              id: `case-4`,
              caseTitle: `Topic: New trend says drinking lemon water cures everything. — The Tricky One`,
              clues: [
                { text: `Source A: A wellness blog says lemon water cures headaches, fatigue, and skin problems.` },
                { text: `Source B: A social media health influencer says the same thing, citing "studies."` },
                { text: `Source C: A different wellness blog repeats the same claims, almost word for word.` },
              ],
              correctAnswer: `copycat`,
              realWorldExample: `Classic pattern of wellness misinformation: same claims repeated by sources that copied each other.`,
              explanation: `It LOOKS like three sources agreeing. But look closer. None of them did original research. The blog cites no one. The influencer cites unnamed "studies." The third blog seems to copy the first. They're not three independent sources. They're one rumor repeated three times. This is one of the most common ways misinformation spreads online.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `Why is reading multiple sources better than reading just one?`,
              options: [
                `It uses more paper`,
                `Each source has one perspective, and multiple sources together give a fuller picture`,
                `Books are more reliable than articles`,
                `Schools always require it`,
              ],
              correctIndex: 1,
              explanation: `Every author writes from one angle. Multiple sources fill in what each individual one misses. That's why serious research always uses several.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What does it mean for sources to be INDEPENDENT?`,
              options: [
                `They're written by famous people`,
                `They gathered their information separately, not by copying each other`,
                `They are very long`,
                `They are recent`,
              ],
              correctIndex: 1,
              explanation: `Independent sources did their own research. Sources that all copy from the same place look separate but aren't. Independence is what makes agreement meaningful.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `Three independent sources agree on a fact. What does this suggest?`,
              options: [
                `Nothing. Agreement is random.`,
                `The fact is likely accurate, because independent agreement is a strong truth signal.`,
                `Only one of them is right.`,
                `They probably copied each other.`,
              ],
              correctIndex: 1,
              explanation: `When sources researched something separately and arrived at the same answer, that's strong evidence the answer is correct. Independent agreement is one of the most powerful tools in research.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `Two sources contradict each other on a topic. What's the best move?`,
              options: [
                `Believe whichever one you read first`,
                `Ignore both and find a different topic`,
                `Investigate why they disagree, including who wrote each and what evidence they used`,
                `Pick the one with the better website design`,
              ],
              correctIndex: 2,
              explanation: `Contradiction is a clue, not a dead end. Look at who wrote each source and what evidence they used. Sometimes one is wrong. Sometimes both are partly right. Sometimes the topic is genuinely complicated.` },

            { id: `l04-q5`, format: `true-false`,
              question: `True or false: If three websites all say the same thing, that's automatically strong independent confirmation.`,
              correctAnswer: false,
              explanation: `False. Three websites that all copied the same original aren't three sources. They're one source repeated three times. Always check: did each one do its own research?` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `What is SYNTHESIS?`,
              options: [
                `Copying the best sentences from each source`,
                `Combining information from multiple sources into a new understanding in your own words`,
                `Picking one source and ignoring the rest`,
                `Writing a separate summary for each source`,
              ],
              correctIndex: 1,
              explanation: `Synthesis weaves multiple sources into something fuller than any single one. It's in your own words, and it pulls the best from each. This is what serious research and writing are built on.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `A wellness blog claims lemon water cures everything, a social media influencer makes the same claim, and a different wellness blog repeats the same exact list. What's most likely?`,
              options: [
                `This is strong independent agreement.`,
                `These are copycat sources. They probably all copied from one another or from a single original.`,
                `The claim is definitely true because so many sources agree.`,
                `Each one did separate research.`,
              ],
              correctIndex: 1,
              explanation: `When sources repeat the same claim with no original research and no real evidence, they're not independent. This is exactly how online misinformation spreads. Real agreement comes from real independent investigation.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `Why do real researchers, journalists, and serious writers always use multiple sources?`,
              options: [
                `Because their teachers required it`,
                `Because no single source gives the full picture, and multiple sources let you catch errors, fill gaps, and build a fuller understanding`,
                `Because they're paid by the page`,
                `Because longer papers look more impressive`,
              ],
              correctIndex: 1,
              explanation: `Single-source thinking is the easiest way to get something wrong. Multiple sources catch each other's mistakes and fill each other's gaps. That's why every field that takes accuracy seriously builds on multiple sources.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `When was the last time you believed something based on just one source? Would you check it differently now?` },
            { id: `r2`, text: `If you had to research a topic for school, what would your steps be to find at least three INDEPENDENT sources?` },
            { id: `r3`, text: `Why do you think copycat sources spread so easily on the internet?` },
            { id: `r4`, text: `What's a topic where you've seen two trusted sources contradict each other? How did you decide what to believe?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something most people never figure out: on the internet, the same rumor can be repeated by hundreds of accounts and STILL be wrong. Volume isn't truth. Independent confirmation from real sources is. That's why doctors, scientists, journalists, and judges all rely on multiple independent sources before believing something serious. Building that habit now is one of the highest-leverage skills you'll ever develop.`,
          familyAdventure: `Run a Source Investigation as a family. Pick one news story or trending topic. Each family member finds ONE source about it from somewhere different. At dinner, compare. Where did they agree? Where did they disagree? Did any of them seem to be copying each other? Then together, write one paragraph that synthesizes the best information from all the sources. Congratulations, your family just did real research.`,
          creativePrompt: {
            intro: `Pick a topic you genuinely care about. Find at least two sources on it. Write a comparison.`,
            floor: `Write at least 5 sentences. State your topic and your sources. Say where they agree. Say where they disagree. State what you think is true based on combining them.`,
            stretch: `Write 8 to 10 sentences. Cover agreement, disagreement, what each source emphasized, and what you'd want a third source to address.`,
            open: `Write as much as you want. Build a full synthesis paragraph that uses information from all your sources, in your own words, to build a fuller picture than any single source gave you.`,
            frames: [
              `My topic is ___.`,
              `My sources were ___.`,
              `Where they agree: ___.`,
              `Where they disagree: ___.`,
              `Based on combining them, I think the most accurate picture is ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now spot the difference between real independent agreement and copycat sources, see disagreement as a clue, and start synthesizing across multiple texts. Next lesson: we leave informational text and dive into stories. How do characters change inside a story, and what does that change tell us about the deeper meaning? See you there. — Quill.`,
          badge: `multi-source-scholar`,
          badgeName: `Multi-Source Scholar`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
