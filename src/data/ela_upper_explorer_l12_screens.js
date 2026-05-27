// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L12 — The Argumentative Essay: Thesis and Evidence
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS W.4.1 / W.5.1 — Write opinion/argument pieces supporting a point of view
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — thesis statement, REE structure (reason/evidence/explanation),
//        counterarguments, strong conclusions
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-12`,
      title: `The Argumentative Essay: Thesis and Evidence`,
      duration: 18,
      xpReward: 75,
      badge: `argument-architect`,
      badgeName: `Argument Architect`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. An argument isn't a fight. An argument is making a clear case for what you believe and backing it up with real evidence. Lawyers do it. Scientists do it. People who write letters to their representatives do it. Today you'll learn how to write an argumentative essay that actually convinces a reader: a clear thesis, evidence stacked properly, fair handling of the other side, and a conclusion that lands. Let's go.`,
          headline: `The Argumentative Essay`,
          subtitle: `How to make a case that actually convinces a reader`,
          visual: `/ue-assets/ela/l12-welcome.webp`,
        },

        // ── SECTION 1 — THE THESIS STATEMENT ──────────────────────────────────
        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Thesis Statement`,
          paragraphs: [
            `Every argumentative essay starts with a THESIS STATEMENT. One clear sentence that states your position on a debatable topic. "Schools should start later than 8 a.m. because teenagers need more sleep to learn well." That's a thesis. It's specific. It's arguable (someone could disagree). And it gives you a direction for the whole essay.`,
            `A weak thesis is vague or obvious. "Schools are important" isn't a thesis. Nobody disagrees. "I like dogs" isn't a thesis. There's nothing to argue. A real thesis takes a stand on something where smart people could go either way. Every single sentence in your essay should connect back to and support this one statement. If a sentence doesn't, cut it.`,
          ],
          image: `/ue-assets/ela/l12-s1-thesis.webp`,
          imageCaption: `A thesis is one clear sentence stating your debatable position.`,
          vocab: [
            { word: `thesis`,
              definition: `A clear, debatable sentence stating your position. The entire essay supports it.`,
              audioPrompt: `A thesis is the central argument of your essay, {name}. One clear sentence stating what you believe and what you're going to prove. "Schools should start later because teens need more sleep." That's a thesis. It's specific, it's arguable, and it tells the reader exactly where you're going. Every other sentence in your essay should support it. If a paragraph doesn't connect back to the thesis, it doesn't belong.` },
            { word: `claim`,
              definition: `A statement that asserts a position. The thesis is the central claim of an argumentative essay.`,
              audioPrompt: `A claim is a statement that asserts a position, {name}. In argumentative writing, the thesis is the main claim — the central thing you're saying is true and defending with evidence. Supporting claims are the reasons that back it up. A claim without evidence is just an opinion. A claim backed with evidence, explanation, and refutation of the other side is an argument.` },
          ],
        },

        // ── SECTION 2 — REE: REASON, EVIDENCE, EXPLANATION ────────────────────
        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The REE Model: Reason, Evidence, Explanation`,
          paragraphs: [
            `Each body paragraph should follow a pattern called REE. State your REASON (why your thesis is true). Then give EVIDENCE (facts, statistics, examples, or expert opinions that back it up). Then provide an EXPLANATION (how the evidence actually proves your reason). Reason, evidence, explanation. That's the engine of every body paragraph.`,
            `The explanation part is where most new writers stop too early. They list a fact and assume the reader will see what it means. They won't. You have to connect the dots. After every piece of evidence, explain WHY it supports your thesis. "Studies show teens who sleep 9+ hours score 20% higher on tests. This proves that sleep is connected to academic performance, which is exactly why later start times would help." See how the explanation does the work? Never skip it.`,
          ],
          image: `/ue-assets/ela/l12-s2-ree.webp`,
          imageCaption: `Reason. Evidence. Explanation. The three-step engine of any body paragraph.`,
          vocab: [
            { word: `evidence`,
              definition: `Facts, statistics, examples, or expert opinions that support a reason in your argument.`,
              audioPrompt: `Evidence is what you use to support each reason in your argument, {name}. Facts. Statistics. Examples. Expert quotes. Without evidence, your reasons are just opinions. Strong arguments stack multiple types of evidence under each reason. The more solid the evidence, the harder your argument is to dismiss. And every time you give evidence, you have to follow it with an explanation that connects it back to your thesis.` },
            { word: `explanation`,
              definition: `The REE step that connects evidence back to the thesis, showing the reader WHY the evidence supports your argument.`,
              audioPrompt: `The explanation is the third step in the REE model, {name}. After you give a reason and evidence, the explanation does the connecting work. It says: here's why this evidence proves my point. Most beginning writers skip this step, assuming the reader will see the connection themselves. They won't. The explanation is where the argument actually happens. Never leave it out.` },
          ],
        },

        // ── SECTION 3 — COUNTERARGUMENTS ──────────────────────────────────────
        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Address the Other Side`,
          paragraphs: [
            `Strong argumentative essays don't pretend the other side doesn't exist. They include a COUNTERARGUMENT, which means acknowledging what the opposite view says, and then REFUTING it (explaining why your position is still stronger). "Some people argue that later school start times would cut into family time. However, schools could simply end later in the day, leaving the total time intact while better matching teens' natural sleep cycles."`,
            `Addressing counterarguments looks like weakness but it's actually strength. It shows you've thought about the issue from both sides. It shows you respect your reader's intelligence. It also pre-answers the objections they were going to have. Ignoring the other side makes your essay look one-sided. Addressing it makes you look honest, fair, and smart.`,
          ],
          image: `/ue-assets/ela/l12-s3-counterargument.webp`,
          imageCaption: `Acknowledge the other side. Then explain why yours is stronger.`,
          vocab: [
            { word: `counterargument`,
              definition: `An opposing view you acknowledge in your essay, before explaining why your position is still stronger.`,
              audioPrompt: `A counterargument is the opposite side of your thesis, {name}. Strong essays don't pretend the opposite view doesn't exist. They name it directly, explain it fairly, and then refute it. "Some people argue X. However, my position is still stronger because Y." This move shows readers you've thought about both sides. It's one of the most powerful tools in argumentative writing, even though new writers often skip it.` },
            { word: `refutation`,
              definition: `Disproving or showing the weakness of a counterargument, explaining why your position is still stronger.`,
              audioPrompt: `Refutation is when you push back against the counterargument, {name}. You don't just name the other side — you explain why your position is still stronger. "Some say X. However, Y." The refutation is the "however" part. Without it, addressing a counterargument actually weakens your essay instead of strengthening it. The counterargument raises the objection. The refutation answers it.` },
          ],
        },

        // ── SECTION 4 — STRONG CONCLUSIONS ────────────────────────────────────
        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Conclusion: Land the Plane`,
          paragraphs: [
            `A great conclusion does three things. It RESTATES your thesis in fresh words (not word-for-word the same as your intro). It BRIEFLY summarizes your strongest evidence. And it ENDS with something memorable: a call to action, a bigger implication, or a final thought that makes the reader nod.`,
            `Common mistakes: introducing new arguments in the conclusion (too late, they belong in the body), repeating the same sentences from the intro (lazy), or ending on a flat statement like "and that is why my essay is right." Strong conclusions feel like landing a plane. Smooth, controlled, and earned by everything that came before. The reader should close the essay thinking "that was actually convincing."`,
          ],
          image: `/ue-assets/ela/l12-s4-conclusion.webp`,
          imageCaption: `Restate. Summarize. End with something that lands.`,
          vocab: [
            { word: `conclusion`,
              definition: `The final paragraph of an argumentative essay. Restates the thesis, summarizes evidence, and ends memorably.`,
              audioPrompt: `The conclusion is the final paragraph of your essay, {name}. Three jobs. Restate your thesis in fresh words. Briefly recap your strongest evidence. End with something memorable: a call to action, a broader implication, or a thought-provoking final line. Don't introduce new arguments in the conclusion. Don't just repeat your intro word-for-word. Land the plane cleanly.` },
            { word: `restatement`,
              definition: `Rephrasing the thesis in fresh words in the conclusion, without repeating it word-for-word.`,
              audioPrompt: `A restatement is when you rephrase your thesis in the conclusion, {name}. Not copying it word-for-word — that's lazy. Not changing the meaning — that's confusing. You take the same core argument and express it differently, with the confidence of someone who has just finished proving their case. A strong restatement feels like a landing, not a repeat.` },
          ],
        },

        // ── INTERACTIVE GAME — Argument Investigation ─────────────────────────
        {
          id: `l12-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four argument samples. For each one, decide what's WORKING or NOT WORKING. Is this a STRONG ARGUMENT, a WEAK THESIS (no real position), or a MISSING COUNTERARGUMENT (one-sided)?\n\nOne sneaks past you if you're not careful.`,
          options: [
            { id: `strong-argument`,    label: `Strong Argument`,        color: `#34D399`, description: `Clear thesis, REE structure, addresses counterargument. Convincing.` },
            { id: `weak-thesis`,        label: `Weak Thesis`,            color: `#F87171`, description: `Position is vague, obvious, or not actually debatable. The argument can't build properly.` },
            { id: `missing-counter`,    label: `Missing Counterargument`, color: `#FBBF24`, description: `Solid evidence but only one side. Comes off as biased or naive.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Argument #1`,
              clues: [
                { text: `Thesis: "School recess is important."` },
                { text: `Body paragraph: "Recess gives kids a break. Breaks are good. Kids like recess."` },
                { text: `No counterargument. Conclusion: "So, recess is important."` },
              ],
              correctAnswer: `weak-thesis`,
              realWorldExample: `Common mistake in early essay writing.`,
              explanation: `"School recess is important" isn't really debatable. Nobody disagrees. There's no position to take, so the body can't really build evidence. Reasons feel circular. The essay was doomed the moment the thesis was vague.`,
            },
            {
              id: `case-2`,
              caseTitle: `Argument #2`,
              clues: [
                { text: `Thesis: "Middle schools should require a daily 20-minute recess to improve student focus."` },
                { text: `Body paragraphs cite a Harvard study showing focus improves 30% after physical breaks, with clear REE structure in each.` },
                { text: `Includes a counterargument ("some argue recess wastes class time") and refutes it with evidence.` },
              ],
              correctAnswer: `strong-argument`,
              realWorldExample: `This is what a fully-formed argumentative essay looks like.`,
              explanation: `Specific, debatable thesis. Real evidence. REE structure. Counterargument addressed and refuted. Strong on every dimension.`,
            },
            {
              id: `case-3`,
              caseTitle: `Argument #3`,
              clues: [
                { text: `Thesis: "All schools should switch to a four-day week."` },
                { text: `Body paragraphs cite three real studies showing positive outcomes from four-day schedules.` },
                { text: `Doesn't mention the obvious objections (childcare problems, longer days, etc.) at all.` },
              ],
              correctAnswer: `missing-counter`,
              realWorldExample: `Classic one-sided argument that loses readers who hold the other view.`,
              explanation: `The thesis is clear and the evidence is real. But ignoring obvious objections makes the essay look biased and naive. Readers who care about childcare or longer days will dismiss the whole thing. Adding a counterargument and refuting it would have made this strong.`,
            },
            {
              id: `case-4`,
              caseTitle: `Argument #4 — The Tricky One`,
              clues: [
                { text: `Thesis: "Reading every day is good for you."` },
                { text: `Body paragraphs include real studies on reading and brain development.` },
                { text: `Includes a counterargument ("some prefer videos") and refutes it.` },
              ],
              correctAnswer: `weak-thesis`,
              realWorldExample: `Tricky because the body work is real, but the foundation isn't.`,
              explanation: `Body work looks strong. Evidence is real. Counterargument is included. But the thesis itself isn't really debatable. Almost nobody argues that reading is BAD for you. The essay is technically well-built, but it's defending something nobody is attacking. The lesson: even good craft can't save a thesis that has no real opposition to argue against. Pick something where smart people actually disagree.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is a THESIS STATEMENT?`,
              options: [
                `The title of the essay`,
                `One clear sentence that states your debatable position`,
                `A summary of everything you'll say`,
                `A quote from a famous person`,
              ],
              correctIndex: 1,
              explanation: `The thesis is your central argument in one sentence. Specific, debatable, and arguable. Every part of the essay supports it.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is the REE model?`,
              options: [
                `Read, Edit, Erase`,
                `Reason, Evidence, Explanation: the structure for each body paragraph`,
                `Research, Examine, Explain`,
                `Recite, Echo, Empty`,
              ],
              correctIndex: 1,
              explanation: `REE is the engine of body paragraphs. State your reason. Give evidence. Then explain how the evidence supports your reason. The explanation step is what makes evidence actually count.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `Why include a COUNTERARGUMENT in an argumentative essay?`,
              options: [
                `To confuse the reader`,
                `Because acknowledging the other side and then refuting it shows fairness and strengthens credibility`,
                `To make the essay longer`,
                `Because teachers require it`,
              ],
              correctIndex: 1,
              explanation: `Addressing the other side looks like weakness but is actually strength. It shows you've thought about the issue from both perspectives and respects the reader's intelligence.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What should a CONCLUSION do?`,
              options: [
                `Introduce new arguments`,
                `Restate the thesis in fresh words, summarize main evidence, and end with something memorable`,
                `Repeat the introduction word-for-word`,
                `List all sources`,
              ],
              correctIndex: 1,
              explanation: `Land the plane. Restate the thesis differently. Recap your strongest evidence. End on a memorable note (call to action, bigger implication, thought-provoking line). Never introduce new arguments at the end.` },

            { id: `l12-q5`, format: `true-false`,
              question: `True or false: A great thesis is "Reading is good for you."`,
              correctAnswer: false,
              explanation: `False. That thesis isn't debatable. Almost nobody argues reading is bad. A real thesis takes a position where smart people could disagree. Try "Schools should require 30 minutes of daily independent reading" instead.` },

            { id: `l12-q6`, format: `multiple-choice`,
              question: `In the REE model, why is the EXPLANATION step so important?`,
              options: [
                `It fills space`,
                `Because evidence alone doesn't connect itself to the thesis. The explanation does that work for the reader.`,
                `Teachers grade based on word count`,
                `It's not actually important`,
              ],
              correctIndex: 1,
              explanation: `Most beginning writers stop after the evidence and assume the reader will see the connection. They won't. The explanation step is where you connect the dots, making your evidence actually count.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `An essay has solid evidence and a clear thesis, but the writer never mentions any opposing views. What's missing?`,
              options: [
                `Nothing — it's complete`,
                `A counterargument. Ignoring the other side makes the essay look biased and naive.`,
                `More evidence`,
                `A longer conclusion`,
              ],
              correctIndex: 1,
              explanation: `Readers who hold the opposing view will dismiss any essay that doesn't address their position. Including and refuting a counterargument is what makes an argument feel honest and complete.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `Which of these is the BEST debatable thesis?`,
              options: [
                `"Exercise is healthy."`,
                `"Schools should require 20 minutes of recess for middle schoolers because physical breaks improve student focus."`,
                `"I think recess is fun."`,
                `"Recess exists in many schools."`,
              ],
              correctIndex: 1,
              explanation: `Specific, debatable, takes a clear position, and previews a reason. The other options are either undebatable facts, personal opinions, or vague observations.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a topic you actually have a strong opinion about? Could you turn it into a thesis statement?` },
            { id: `r2`, text: `Have you ever argued for something and lost because you couldn't address the other side well? What happened?` },
            { id: `r3`, text: `Why is the EXPLANATION step in REE often the hardest part of writing?` },
            { id: `r4`, text: `Think of a great speech or video that changed your mind on something. What made the argument work?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Argumentative writing isn't just for school. Adults make arguments every day. Lawyers in courtrooms. Doctors recommending treatments. Citizens writing to their representatives. Employees pitching ideas at work. Parents discussing decisions with their kids. The ability to take a clear position and back it up with real evidence is one of the most useful skills a person can build. It's what makes people listen to you and take what you say seriously.`,
          familyAdventure: `Family Argument Tournament. Each person picks a position on a fun, debatable topic (best season, best food, best holiday, best pet). Everyone writes a thesis and three reasons with evidence (REE style) on paper or in a note app. Take turns presenting in 60 seconds. After all presentations, the family votes on which argument was the strongest. Discuss what made the winner most convincing.`,
          creativePrompt: {
            intro: `Pick a real position you care about. Write a mini argumentative essay.`,
            floor: `Write at least 5 sentences. Include a clear thesis statement and two reasons with one piece of evidence for each.`,
            stretch: `Write 8 to 10 sentences. Full structure: thesis, three reasons in REE format (with evidence and explanation), one counterargument with refutation, and a memorable conclusion.`,
            open: `Write as much as you want. Build a complete argumentative essay with intro, three REE body paragraphs, counterargument, and conclusion that lands.`,
            frames: [
              `My thesis is ___.`,
              `My first reason is ___ because ___.`,
              `Evidence: ___.`,
              `One person could argue ___, but my position is still stronger because ___.`,
              `In conclusion, ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now write a clear thesis, build body paragraphs with REE structure, address counterarguments fairly, and end with a conclusion that lands. Next lesson: not every essay is an argument. Sometimes the goal is to explain rather than persuade. We'll learn the explanatory essay and how it differs from the argumentative one. See you there. — Quill.`,
          badge: `argument-architect`,
          badgeName: `Argument Architect`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L12 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
