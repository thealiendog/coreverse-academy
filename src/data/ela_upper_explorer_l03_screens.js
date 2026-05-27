// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L03 — Analyzing Evidence: How Authors Support Claims
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RI.4.8 / RI.5.8 — Author's reasoning and evidence
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes used sparingly
// SCOPE: 4 concepts — claims need evidence, types of evidence, evaluating quality,
//        spotting weak or missing evidence
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-03`,
      title: `Analyzing Evidence: How Authors Support Claims`,
      duration: 18,
      xpReward: 75,
      badge: `evidence-analyst`,
      badgeName: `Evidence Analyst`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Anyone can SAY something. "Chocolate is the best flavor." "Exercise makes you smarter." "This product changed my life." Until someone backs up a claim with actual evidence, it's just an opinion floating in the air. Today you'll learn what counts as real evidence, how to tell strong from weak, and how to spot fake evidence pretending to be real. By the end, you'll be harder to fool than most adults. Let's go.`,
          headline: `Analyzing Evidence`,
          subtitle: `How authors back up what they say, and how to tell strong evidence from weak`,
          visual: `/ue-assets/ela/l03-welcome.webp`,
        },

        // ── SECTION 1 — CLAIMS NEED EVIDENCE ──────────────────────────────────
        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Claims Need Evidence`,
          paragraphs: [
            `A claim is a statement an author wants you to believe. "Reading every day makes you smarter." That's a claim. By itself, it's just an opinion. Anyone can say it. Until the author backs it up with proof, you have no real reason to agree.`,
            `Now watch the same claim with evidence: "A Harvard study followed 1,200 kids for two years. The ones who read 20 minutes a day scored 18 percent higher on reading tests." Suddenly the claim has weight. Strong writers know this. Every important claim they make gets anchored with something solid. Strong readers know it too. Every claim they hear, they ask one question: where's the proof?`,
          ],
          image: `/ue-assets/ela/l03-s1-claim.webp`,
          imageCaption: `A claim without evidence is just an opinion floating in the air.`,
          vocab: [
            { word: `claim`,
              definition: `A statement an author wants you to believe, which should be backed up by evidence.`,
              audioPrompt: `A claim is a statement an author wants you to believe, {name}. "Chocolate is the best flavor." "Exercise makes you smarter." "This phone is the fastest one ever made." All claims. None of them is automatically true just because someone said it. The question to ask about every claim you read or hear is the same: what's the evidence? Strong claims come with proof. Weak claims hope you won't ask.` },
            { word: `proof`,
              definition: `Evidence strong enough to support or confirm that a claim is true.`,
              audioPrompt: `Proof is evidence strong enough to support a claim, {name}. Not every piece of evidence qualifies as proof. A vague mention of unnamed studies isn't proof. A personal story isn't proof. Actual proof is specific, verifiable, and comes from a credible source. When you read a claim, don't just look for any evidence. Look for actual proof. Ask: is this specific enough and credible enough to confirm the claim?` },
          ],
        },

        // ── SECTION 2 — THE TYPES OF EVIDENCE ─────────────────────────────────
        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Types of Evidence`,
          paragraphs: [
            `Evidence comes in five main types. FACTS are verifiable truths (the Earth orbits the Sun). STATISTICS are numerical data (78 percent of teens report feeling tired in school). EXAMPLES are specific instances (one school in Ohio tried a later start time and grades went up). EXPERT OPINIONS come from qualified specialists (a sleep scientist citing decades of research). ANECDOTES are personal stories ("my brother slept more and felt better").`,
            `Here's the rule: the more types of evidence an author uses, the stronger the argument. A claim supported by a statistic AND an expert opinion AND a specific example is much harder to dismiss than the same claim supported by one person's story. Mixing types is how serious writers build a case.`,
          ],
          image: `/ue-assets/ela/l03-s2-types-of-evidence.webp`,
          imageCaption: `Five types: facts, statistics, examples, expert opinions, anecdotes.`,
          vocab: [
            { word: `evidence`,
              definition: `Facts, statistics, examples, expert opinions, or stories that an author uses to support a claim.`,
              audioPrompt: `Evidence is what an author uses to support a claim, {name}. Five main types: facts, statistics, examples, expert opinions, and anecdotes. Some are stronger than others. A peer-reviewed study beats one person's experience. A named expert beats an unnamed "researcher." The strongest writers stack several types together, so the claim doesn't lean on any single piece of proof.` },
            { word: `statistic`,
              definition: `A piece of numerical data used as evidence, such as a percentage, count, or measurement from a study or survey.`,
              audioPrompt: `A statistic is a piece of numerical data used as evidence, {name}. "78 percent of students reported feeling better." "The average test score increased by 12 points." Statistics can be powerful because numbers feel objective. But watch where the numbers come from. Who collected them? How was the question asked? A statistic from a well-designed study is strong. A statistic with no source named is a red flag.` },
          ],
        },

        // ── SECTION 3 — STRONG VS WEAK EVIDENCE ───────────────────────────────
        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Strong vs Weak Evidence`,
          paragraphs: [
            `Not all evidence is created equal. Strong evidence has three qualities. It's RELEVANT (actually connected to the claim). It's SUFFICIENT (enough to be convincing). And it's CREDIBLE (from a trustworthy source). A claim about a medicine supported by three large studies in major medical journals is strong. The same claim supported by one tweet from a stranger is weak.`,
            `Watch the source. A study by a university scientist is usually credible. A "study" funded by the company selling the product, less so. A claim about climate from a climate researcher carries weight. The same claim from a random celebrity does not. Sources matter as much as the evidence itself. Always ask: who said this, and why should I trust them?`,
          ],
          image: `/ue-assets/ela/l03-s3-strong-vs-weak.webp`,
          imageCaption: `Strong evidence: relevant, sufficient, credible.`,
          vocab: [
            { word: `credible`,
              definition: `Trustworthy. Credible evidence comes from sources with the qualifications and honesty to be believed.`,
              audioPrompt: `Credible means trustworthy, {name}. Credible evidence comes from people or organizations qualified to know what they're talking about. A heart doctor is credible on heart health. A random podcaster, less so. A peer-reviewed study is credible. A blog post citing no sources, less so. The question to ask about every piece of evidence: who's behind this, and do they have a reason to bend the truth?` },
            { word: `relevant`,
              definition: `Directly connected to the claim being made. Relevant evidence actually supports the point; irrelevant evidence doesn't.`,
              audioPrompt: `Relevant means directly connected to the claim, {name}. Strong evidence isn't just credible. It also has to actually support the specific claim being made. A study about adults sleeping better tells you nothing about whether kids study better after sleeping. The evidence might be real, but if it doesn't match the claim, it's not relevant. Always ask: does this evidence actually connect to what the author is arguing?` },
          ],
        },

        // ── SECTION 4 — WHEN EVIDENCE IS MISSING OR FAKE ──────────────────────
        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Evidence Is Missing or Fake`,
          paragraphs: [
            `Sometimes authors make claims with no real evidence at all. Or evidence that sounds good but falls apart when you look closely. Watch for these red flags: "Studies show..." (which studies, by whom?), "Experts agree..." (which experts?), "Many parents say..." (how many, where?). Vague evidence is often no evidence.`,
            `Be especially careful with anecdotes. One person's story can be powerful, but it's not proof. Your friend's older sister got an A after eating one specific brand of cereal does not mean that cereal makes kids smarter. Anecdotes feel convincing because they're personal. But to actually prove a claim, you usually need many cases, not one. Trained readers respect anecdotes as stories, not as evidence.`,
          ],
          image: `/ue-assets/ela/l03-s4-missing-evidence.webp`,
          imageCaption: `"Studies show..." is not the same as studies actually showing.`,
          vocab: [
            { word: `anecdote`,
              definition: `A single personal story used as evidence. Often persuasive, but rarely strong proof on its own.`,
              audioPrompt: `An anecdote is a single personal story, {name}. Anecdotes feel powerful because they're personal and specific. "My cousin tried this and it changed her life." But one story isn't proof of anything. The cousin might be unusual. The story might be told a little wrong. To actually prove a claim, you usually need many cases. Anecdotes work as illustrations. They don't work as evidence on their own.` },
            { word: `vague`,
              definition: `Unclear or lacking specific details. Vague evidence uses general words where real proof would have names, numbers, and sources.`,
              audioPrompt: `Vague means unclear and lacking specific details, {name}. "Studies show" is vague. Which studies? "Experts agree" is vague. Which experts? "Many people say" is vague. How many, and who? Real evidence is specific: it names the study, the researcher, the year, and the number. Vague evidence is a red flag because real evidence doesn't need to hide its details. When details are missing, it usually means the evidence isn't strong enough to name.` },
          ],
        },

        // ── INTERACTIVE GAME — Evidence Trial: Four Claims, Four Verdicts ─────
        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Court is in session, {name}. Four claims, four pieces of evidence to evaluate. For each one, your job is to decide: is this evidence STRONG, WEAK, or ANECDOTE-ONLY? Watch for vague sources, paid experts, and stories that aren't proof.\n\nOne of these tries to look strong but isn't. Watch closely.`,
          options: [
            { id: `strong`,   label: `Strong Evidence`, color: `#34D399`, description: `Multiple credible sources, specific data, relevant to the claim.` },
            { id: `weak`,     label: `Weak Evidence`,   color: `#F87171`, description: `Vague sources, biased sources, or evidence that doesn't really fit the claim.` },
            { id: `anecdote`, label: `Anecdote Only`,   color: `#FBBF24`, description: `Just one or two personal stories. Not enough to prove the claim.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Claim #1: "Sleep helps you remember what you learned."`,
              clues: [
                { text: `Evidence A: A 2021 Harvard study followed 500 college students for one semester.` },
                { text: `Evidence B: Students who slept 7 or more hours scored 22 percent higher on memory tests than students who slept less than 5.` },
                { text: `Evidence C: Dr. Sarah Chen, a sleep researcher at Stanford, says: "The link between sleep and memory is now one of the most studied findings in neuroscience."` },
              ],
              correctAnswer: `strong`,
              realWorldExample: `This is what strong evidence looks like in a real article.`,
              explanation: `A specific study from a named university. A real statistic showing the difference. A named expert from a credible institution. Three types of evidence stacked together. Strong.`,
            },
            {
              id: `case-2`,
              caseTitle: `Claim #2: "Cats are smarter than dogs."`,
              clues: [
                { text: `Evidence A: "My friend Sarah has a cat that figured out how to open the fridge."` },
                { text: `Evidence B: "Her cat is way smarter than any dog I've ever met."` },
                { text: `Evidence C: "I just feel like cats have to be smarter, based on how mine acts."` },
              ],
              correctAnswer: `anecdote`,
              realWorldExample: `This is anecdotes pretending to be argument.`,
              explanation: `Three personal observations about specific pets. No study, no statistic, no expert. One smart cat doesn't prove anything about all cats vs all dogs. These are stories, not evidence.`,
            },
            {
              id: `case-3`,
              caseTitle: `Claim #3: "Reading reduces stress."`,
              clues: [
                { text: `Evidence A: A 2009 University of Sussex study measured stress levels in participants doing different activities.` },
                { text: `Evidence B: Just six minutes of reading reduced stress levels by 68 percent.` },
                { text: `Evidence C: The same study found that reading reduced stress more effectively than listening to music or going for a walk.` },
              ],
              correctAnswer: `strong`,
              realWorldExample: `A famous real study often cited in stress research.`,
              explanation: `Specific study, specific statistic, and direct comparison to alternatives. Everything is named and verifiable. Strong.`,
            },
            {
              id: `case-4`,
              caseTitle: `Claim #4: "BrightMind brain supplement boosts memory." — The Tricky One`,
              clues: [
                { text: `Evidence A: "BrightMind contains breakthrough ingredients researchers say improve memory."` },
                { text: `Evidence B: "In a recent study, users reported feeling sharper after one week."` },
                { text: `Evidence C: "Dr. James Bell, M.D., recommends BrightMind to anyone seeking memory support." (Dr. Bell is paid by BrightMind.)` },
              ],
              correctAnswer: `weak`,
              realWorldExample: `This is the pattern most product ads use.`,
              explanation: `Looks scientific at first. But which researchers? What study? Bell is paid by the company. "Users reported feeling sharper" is a subjective survey, not real measurement. Vague claims plus a paid expert is the recipe for fake-looking evidence. Once you can spot this pattern, you'll see it in ads everywhere.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is a CLAIM in writing?`,
              options: [
                `A fact that everyone already agrees on`,
                `A statement an author wants you to believe, which needs evidence`,
                `The title of a research paper`,
                `A quote from a famous person`,
              ],
              correctIndex: 1,
              explanation: `A claim is what the author wants you to accept. Without evidence, a claim is just an opinion. With evidence, it becomes an argument worth taking seriously.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `Which of these is a STATISTIC?`,
              options: [
                `"My grandfather lived to 95 and ate eggs every day."`,
                `"Studies show eggs are mostly healthy."`,
                `"In a 2020 survey, 64 percent of cardiologists said eggs were safe in moderation."`,
                `"Eggs are delicious."`,
              ],
              correctIndex: 2,
              explanation: `Statistics are numerical data. A specific percent from a survey is a statistic. The others are: anecdote, vague claim, and opinion.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `Which of these makes a source CREDIBLE?`,
              options: [
                `They have a popular social media account`,
                `Qualifications, transparency about sources, and no obvious reason to bend the truth`,
                `They sound very confident when they speak`,
                `Their website looks professionally designed`,
              ],
              correctIndex: 1,
              explanation: `Credibility comes from qualifications and honesty, not popularity or appearance. A great-looking website can still publish weak evidence. A confident speaker can still be wrong.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `Why are ANECDOTES considered weak evidence on their own?`,
              options: [
                `Anecdotes are always made up`,
                `One personal story may not represent the wider truth, and one person's experience could be unusual`,
                `Anecdotes use big words`,
                `Anecdotes are only used in fiction`,
              ],
              correctIndex: 1,
              explanation: `Anecdotes can be true and interesting and still not prove a claim. Proving something usually takes many cases, not one. Your friend's cousin had one experience. That doesn't mean it works for everyone.` },

            { id: `l03-q5`, format: `true-false`,
              question: `True or false: An article that says "studies show..." without naming any specific studies is using strong evidence.`,
              correctAnswer: false,
              explanation: `False. "Studies show" with no studies named is one of the biggest red flags in writing. Real evidence has names, dates, and details. Vague evidence is often no evidence.` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `Which combination makes for the STRONGEST argument?`,
              options: [
                `Three personal stories from the author's family`,
                `A study, a statistic from that study, and a quote from a credible expert`,
                `One emotional anecdote with vivid description`,
                `A claim repeated several times for emphasis`,
              ],
              correctIndex: 1,
              explanation: `Stacking multiple types of evidence (study, statistic, expert) makes a claim much harder to dismiss. Repetition and stories alone aren't evidence, even if they feel convincing.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `A product ad cites "Dr. Smith" recommending the product, but Dr. Smith is paid by the company that makes the product. How credible is this expert opinion?`,
              options: [
                `Very credible, because Dr. Smith is a doctor`,
                `Weak, because Dr. Smith has a reason to favor the product regardless of whether it works`,
                `It depends on how much Dr. Smith is paid`,
                `Always credible, because the ad cited an expert`,
              ],
              correctIndex: 1,
              explanation: `A paid expert isn't really independent. They have a reason to be positive about the product. That doesn't mean they're lying, but it does mean the evidence is weaker than the same opinion from an unpaid, independent expert.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `What's the single most useful question to ask about any piece of evidence?`,
              options: [
                `How long is this?`,
                `Where did this come from, and who's behind it?`,
                `Does this sound impressive?`,
                `Has this been written recently?`,
              ],
              correctIndex: 1,
              explanation: `Every piece of evidence has a source. Knowing the source tells you most of what you need to know about whether to trust it. A credible source with a clear track record beats a flashy claim from nowhere every time.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a claim you've believed before that turned out to have weak evidence behind it?` },
            { id: `r2`, text: `Which type of evidence (facts, statistics, examples, expert opinions, anecdotes) feels most convincing to you, and why might that be?` },
            { id: `r3`, text: `Where do you see "studies show..." or "experts agree..." used in your daily life? Did you ever check if the studies or experts were real?` },
            { id: `r4`, text: `If you had to teach someone the difference between an anecdote and real evidence, what example would you use?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's the truth about evidence: a huge amount of what gets sold to you in life uses weak or fake evidence to sound smart. Products promise things based on "studies" no one can find. Politicians cite "experts" they don't name. Influencers share personal stories like they're scientific proof. Learning to ask "where did this come from?" is one of the highest-value skills you'll ever build. It saves you money, time, and bad decisions for the rest of your life.`,
          familyAdventure: `Run an Evidence Trial at dinner. Each family member finds one ad, article, or social post that makes a claim. Read it out loud. As a group, ask: what's the claim? What evidence is offered? Strong, weak, or anecdote-only? Bonus round: see who can find the sneakiest case where weak evidence is dressed up to look strong.`,
          creativePrompt: {
            intro: `Pick a claim you've seen in an ad, a video, or an article. Write an Evidence Analyst report on it.`,
            floor: `Write at least 5 sentences. State the claim. List the evidence you saw. Rate it as strong, weak, or anecdote-only, and say why.`,
            stretch: `Write 8 to 10 sentences. Cover the claim, every piece of evidence, your rating, AND what evidence the author would need to add to make the case actually strong.`,
            open: `Write as much as you want. Build a full evaluation, including what's missing, who the source is, and whether the source has any reason to bend the truth.`,
            frames: [
              `The claim I picked is ___.`,
              `The evidence offered was ___.`,
              `The types of evidence used were ___.`,
              `I rate this evidence as ___ because ___.`,
              `To make this claim actually convincing, the author would need to add ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now spot a claim, name the five types of evidence, tell strong from weak, and notice when a source isn't as credible as it looks. Next lesson: most readers stop after one source. The sharpest ones don't. We'll learn how to compare multiple texts on the same topic to find where they agree, where they disagree, and where the real truth lives. See you there. — Quill.`,
          badge: `evidence-analyst`,
          badgeName: `Evidence Analyst`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
