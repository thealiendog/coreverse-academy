// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L20 — Designing Your Financial Life: CAPSTONE
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Synthesis, Personal Finance Integration
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER CAPSTONE (three integrating life philosophies; 100 XP)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l20-v1";

const MONEYBUSINESS_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-20`,
      title: `Designing Your Financial Life`,
      duration: 40,
      xpReward: 100,
      badge: `financial-architect`,
      badgeName: `Financial Architect`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, you made it. Twenty lessons. From the macro mechanics of money in L01 to the ethics of financial decisions in L19, you've covered more applied financial literacy than most adults will ever encounter. The point of all of it has never been the individual facts. The point is the integrated framework you can now use to design a financial life that actually makes sense for you. Today is the capstone. We pull together every prior lesson and ask: what kind of financial life are you building? Three serious philosophies emerge from the research and the ethics. You build your final argument. This is 100 XP. Make it count. — Ace`,
          headline: `Designing Your Financial Life`,
          subtitle: `The capstone. Synthesize everything. Build the framework you'll use for 60+ years.`,
          visual: `/voyager-assets/money-business/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What The 19 Lessons Together Actually Teach`,
          paragraphs: [
            `Stepping back from the individual lessons, several integrated patterns emerge. First: the math of compound interest is the single most important financial concept. From L02 through every subsequent lesson, compounding has appeared again and again. Five dollars a month at 14 becomes $25,000 by 65. Twenty-two percent credit card debt doubles in 3.6 years. Skill depth compounds. Habits compound. The financial life you build is the result of small consistent decisions over decades, not heroic single moments.`,
            `Second: the boring path beats the exciting path for almost everyone. L05 (stocks), L13 (get rich quick), and L16 (financial news) all converge on the same finding. Index funds beat active stock picking for most investors. Get-rich-quick schemes lose for almost everyone. Boring journalism beats cable speculation. The fact that mainstream advice is unexciting doesn't mean it's wrong. The exciting alternatives almost always have something to sell.`,
            `Third: most financial mistakes are pattern mistakes, not isolated errors. The same psychological tendencies (impatience, social comparison, fear of missing out, susceptibility to confident narratives) drive bad decisions across many financial categories. Building pattern recognition (dark patterns in L10, scam schemes in L13, get-rich-quick recognition, insurance product evaluation) protects you across dozens of decision contexts at once.`,
            `Fourth: financial decisions affect, but don't determine, well-being. L18 made this explicit, but it ran through the whole band. Money matters for happiness throughout the income range with diminishing returns; it doesn't replace relationships, autonomy, engaging work, health, and meaning. A financial life designed without these other dimensions isn't actually a good life, no matter how much money it accumulates.`,
            `Fifth: ethical and practical considerations interact. L19 made this explicit. The kind of financial life that's right for you depends on your values about responsibility, harm, autonomy, and what you owe to others. Different people with the same financial knowledge can build very different lives because their values differ. This isn't a problem; it's the point.`,
          ],
          image: `/voyager-assets/money-business/l20-s1-synthesis.webp`,
          imageCaption: `Five integrating patterns across all twenty lessons.`,
          vocab: [
            {
              word: `integration`,
              definition: `Bringing separate concepts together into a unified understanding. Individual financial facts are useful; an integrated framework that connects them is much more powerful. The capstone goal of any educational journey.`,
              audioPrompt: `Integration is bringing separate concepts together into a unified understanding, {name}. Individual financial facts are useful, but an integrated framework that connects them is much more powerful. Knowing compound interest in isolation is useful. Knowing how compound interest connects to career trajectory, debt management, insurance decisions, and ethical investing is much more powerful because each concept reinforces the others. The capstone goal of any educational journey is integration. You've spent 19 lessons building components. Today you put them together into a coherent framework that will guide decisions for the rest of your life.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What's Settled, What's Contested`,
          paragraphs: [
            `Some financial questions have clear empirical answers. The math of compound interest doesn't depend on values; $500/month at 8% over 40 years really does produce ~$1.5M. The SPIVA data on active manager underperformance is robust. MLM income distributions are documented across decades. Insurance loss ratios are publicly reported. These aren't ethical questions; they're empirical ones where evidence settles the matter.`,
            `Other questions are partly empirical and partly normative. Should you save aggressively in your 20s? Empirical: the math favors early saving heavily. Normative: depends on whether you value future security over present experience, and how much. Should you go to college, trades, or skip both? Empirical: lifetime earnings differ predictably by path. Normative: depends on your interests, values, and what you'd be good at. The right answers for you mix evidence with values.`,
            `Some questions are genuinely contested even with all the evidence in. Should taxes be higher or lower? Should investments be ESG-screened? Should you prioritize financial security or meaningful work? Should you pursue maximum income or accept lower income for better life balance? Real philosophers, economists, and thoughtful citizens disagree about these. There isn't a single "right answer" that emerges from pure logic.`,
            `Knowing which questions are which matters. Settled empirical questions deserve confident answers. Mixed empirical-normative questions need framework thinking that weights both evidence and values. Contested normative questions require humility about your own conclusions, even as you commit to them for your own life. Conflating these categories produces bad thinking in both directions: dogmatic certainty about contested value questions, and dismissive uncertainty about empirically settled ones.`,
          ],
          image: `/voyager-assets/money-business/l20-s2-settled.webp`,
          imageCaption: `Settled, mixed, contested. Knowing which is which produces better thinking.`,
          vocab: [
            {
              word: `epistemic humility`,
              definition: `Recognizing the limits of your own knowledge and being open to being wrong. Especially important on contested value questions. Doesn't mean refusing to commit; means committing while staying open to evidence.`,
              audioPrompt: `Epistemic humility is recognizing the limits of your own knowledge and being open to being wrong, {name}. Especially important on contested value questions where reasonable people disagree. It doesn't mean refusing to commit to positions. It means committing while staying open to evidence that might change your mind. The opposite of epistemic humility is dogmatism: holding positions so firmly that no evidence could change them. Both extremes are problematic. Healthy thinking commits to positions based on current best understanding, while remaining willing to update as evidence accumulates. Building this habit at 12 produces a lifetime of better thinking on hard questions.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Integrating Life Philosophies`,
          paragraphs: [
            `Across the twenty lessons, three integrating philosophies emerge for how to actually live financially. These aren't tactics; they're frameworks for organizing all the tactics around what you fundamentally want from your financial life.`,
            `Philosophy 1: Financial Independence and Early Freedom. Aggressively save 30-50% of income from your 20s onward. Use index funds, minimize lifestyle inflation, avoid most debt, maximize tax-advantaged accounts. The goal: reach a point in your 40s or 50s where work becomes optional. The FIRE movement (Financial Independence, Retire Early) embodies this. The argument: time and autonomy matter more than current consumption; aggressive saving and frugality buy decades of freedom that working longer doesn't.`,
            `Philosophy 2: Balanced Saving With Present Living. Save consistently (15-25% of income), invest in low-cost index funds, but also spend meaningfully on present experiences, relationships, and personal growth. The goal: a sustainable financial life that supports both future security and present joy. Most mainstream personal finance advice falls in this range. The argument: life has to be lived along the way, not just at the end; rigorous frugality often produces neither significant wealth nor a good life if maintained for decades.`,
            `Philosophy 3: Maximum Meaning, Adequate Money. Choose work and life that maximizes meaning, engagement, and contribution, accepting that this may produce lower income than alternative paths. Save what you can without making it the central organizing principle of life. The goal: a life where money serves a meaningful existence rather than dictating it. Many people in service careers (teaching, social work, nonprofits), creative work, or family-centered lives embody this. The argument: a life optimized around financial accumulation often misses what actually mattered; better to have less money and more meaning.`,
            `These philosophies aren't strict categories. Most people blend elements of all three across different life phases. The argument-builder isn't about picking a permanent identity; it's about identifying which philosophy is most strongly currently pulling you, and building a coherent case for it that you can revisit, refine, and possibly evolve as you grow.`,
          ],
          image: `/voyager-assets/money-business/l20-s3-philosophies.webp`,
          imageCaption: `Three integrating philosophies. None is universally correct. All are coherent.`,
          vocab: [
            {
              word: `FIRE movement`,
              definition: `Financial Independence, Retire Early. A philosophy emphasizing aggressive saving (often 30-50%+ of income) and investing to reach financial independence in your 40s or 50s. Started in books like "Your Money or Your Life" (1992) and grew online. Reaches into Philosophy 1.`,
              audioPrompt: `FIRE stands for Financial Independence, Retire Early, {name}. A philosophy emphasizing aggressive saving, often 30 to 50 percent or more of income, and investing in index funds to reach financial independence in your 40s or 50s. The movement started with books like Your Money or Your Life from 1992 and grew online through communities like the Bogleheads forum, Mr. Money Mustache blog, and ChooseFI podcast. FIRE has subvariants: leanFIRE (cover modest expenses), regularFIRE (cover middle-class expenses), and fatFIRE (cover upper-middle-class expenses). Critics note FIRE often requires high income to be practical and may sacrifice meaningful experiences along the way. The movement has thousands of documented success stories alongside ongoing debate about whether it's the right path for most people.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How To Hold This Lightly`,
          paragraphs: [
            `At 12, you're not making the major decisions yet. You're not choosing your career. You're not setting your savings rate. You're not building your investment portfolio. What you ARE doing is forming the values, frameworks, and habits you'll use when you start making those decisions in 6-15 years. Today's argument isn't a permanent commitment; it's a snapshot of how you're currently thinking.`,
            `Your philosophy will evolve. People in their 20s often gravitate toward Philosophy 1 (financial independence) because they have fewer dependents and more energy for aggressive saving. People in their 30s and 40s often shift toward Philosophy 2 (balanced) as family responsibilities and present life demand more resources. People in their 50s and 60s sometimes shift toward Philosophy 3 (maximum meaning) as they realize what they actually valued all along. None of these shifts is failure. They're growth.`,
            `What matters more than picking the "right" philosophy now is developing the underlying skills you've built across this band. Pattern recognition for scams. Comfort with the math of compounding. Ability to evaluate financial sources. Recognition of dark patterns. Understanding of insurance, debt, taxes, and investments. Frameworks for ethical money decisions. These skills serve you in any philosophy and across philosophical shifts throughout your life.`,
            `One more thing: you're going to make financial mistakes. Everyone does. The mistakes don't have to be catastrophic. The frameworks you've built across this band should protect you from the worst categories of mistake: catastrophic debt, get-rich-quick losses, predatory insurance, manipulated purchases. Beyond those protections, you have permission to experiment, learn, and grow. Financial wisdom is built across decades, not memorized in lessons. You have a head start. That's the point.`,
          ],
          image: `/voyager-assets/money-business/l20-s4-lightly.webp`,
          imageCaption: `Hold the philosophy lightly. Hold the skills firmly. Both matter.`,
          vocab: [
            {
              word: `wisdom`,
              definition: `Practical knowledge that integrates facts with judgment, values, and experience. Different from intelligence (raw cognitive ability) or knowledge (accumulated facts). Builds across decades of applying frameworks to real decisions and learning from outcomes.`,
              audioPrompt: `Wisdom is practical knowledge that integrates facts with judgment, values, and experience, {name}. Different from intelligence, which is raw cognitive ability. Different from knowledge, which is accumulated facts. Wisdom is the ability to apply knowledge well in real situations with their complexity and uncertainty. It builds across decades of applying frameworks to real decisions and learning from outcomes. You can't be fully wise at 12. But you can build the foundations: the frameworks, the pattern recognition, the willingness to update beliefs in light of evidence, the values that orient your decisions. Financial wisdom is built from these foundations across a lifetime of practice. You have your foundations. The rest comes from living.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Capstone Argument`,
          paragraphs: [
            `This is the final argument you'll build in the Money & Business band. The synthesis. You're choosing not just a position on a narrow question but an integrating framework for the financial life you're building toward.`,
            `As you build, draw on the full twenty lessons. Compound interest math. The active vs index debate. Real career trajectories. Pattern recognition for scams. Insurance evaluation. Negotiation skills. Tax understanding. Marketing literacy. Wealth-happiness research. Ethical frameworks. Each lesson contributed to the integrated framework you now have. Show that synthesis in your argument.`,
            `The counterargument will push hard. You'll have to defend your philosophy against the strongest case for the alternatives. The skill isn't just picking a side; it's holding your position with conviction while engaging seriously with the best arguments against it. That's the mark of a mature thinker.`,
            `One last framing: most adults never do this exercise. They drift into a financial life shaped by their employer's 401(k) defaults, what their friends do, what social media tells them, and what they remember from one finance article they read once. You're explicitly choosing your framework. That alone puts you ahead. Now make the choice well.`,
          ],
          image: `/voyager-assets/money-business/l20-s5-before.webp`,
          imageCaption: `Most adults drift. You're choosing. That alone matters.`,
          vocab: [
            {
              word: `synthesis`,
              definition: `Combining separate concepts, ideas, or experiences into a coherent whole. The highest level of learning. What separates someone who knows individual facts from someone who has built a working framework.`,
              audioPrompt: `Synthesis is combining separate concepts, ideas, or experiences into a coherent whole, {name}. The highest level of learning. What separates someone who knows individual facts from someone who has built a working framework. Synthesis is harder than memorization, harder than analysis, harder than evaluation. It requires holding many pieces simultaneously and seeing how they fit together. The capstone argument you're about to build is an exercise in synthesis. You're pulling together compound interest, career math, scam recognition, insurance evaluation, negotiation, ethics, well-being research, and your own values into one coherent philosophy. Do this well, and the rest of your financial life has a structure to grow into.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER (CAPSTONE) ────────────────────────────────────
        {
          id: `l20-argument-builder`,
          type: `argument-builder`,
          headline: `Which Financial Life Are You Building?`,
          intro: `Pick the philosophy that best integrates what you've learned across all 20 lessons. Build your case with 4-5 pieces of evidence drawn from across the band. Then respond to the strongest counterargument. This is the capstone — make it count.`,
          positions: [
            {
              id: `financial-independence`,
              label: `Financial independence and early freedom`,
              summary: `Aggressively save 30-50% of income from your 20s onward. Use low-cost index funds. Minimize lifestyle inflation. Maximize tax-advantaged accounts. Goal: reach a point in your 40s or 50s where work becomes optional. The math of compounding strongly favors aggressive early saving. Time and autonomy matter more than current consumption. Frugality and discipline buy decades of freedom that working longer doesn't.`,
            },
            {
              id: `balanced-living`,
              label: `Balanced saving with present living`,
              summary: `Save consistently (15-25% of income), invest in low-cost index funds, but also spend meaningfully on present experiences, relationships, and personal growth. Goal: a sustainable financial life supporting both future security and present joy. Life has to be lived along the way, not just at the end. Rigorous frugality maintained for decades often produces neither significant wealth nor a good life. Boring index investing plus reasonable saving plus meaningful spending produces strong outcomes across many dimensions.`,
            },
            {
              id: `maximum-meaning`,
              label: `Maximum meaning, adequate money`,
              summary: `Choose work and life that maximizes meaning, engagement, and contribution, accepting this may produce lower income than alternatives. Save what you can without making it central. Goal: a life where money serves a meaningful existence rather than dictating it. Well-being research consistently finds that relationships, engaging work, meaning, and health matter as much or more than income above adequacy. A life optimized around financial accumulation often misses what actually mattered.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Compound interest math (L02): $500/month invested at 8% over 40 years produces about $1.5M. The compounding advantage of early saving is mathematically enormous. Aggressive savers in their 20s build wealth fast.`,
              source: `Lesson 02: Compound interest fundamentals`,
            },
            {
              id: `e2`,
              text: `Index funds outperform 80-90% of active managers over 10-year periods (L05). Boring consistent index investing produces strong long-term returns without requiring sophisticated investment skill.`,
              source: `Lesson 05: SPIVA reports`,
            },
            {
              id: `e3`,
              text: `Career trajectory research (L11): job-switchers earn 30-50% more over careers than job-stayers. Geographic and field choices compound enormously. Real income gains require active career management, not passive employment.`,
              source: `Lesson 11: BLS career data`,
            },
            {
              id: `e4`,
              text: `Get-rich-quick schemes consistently fail (L13): 99% of MLM participants lose money or earn less than minimum wage; 70-95% of day traders lose; survivorship bias hides the losses. The boring path beats the exciting one for almost everyone.`,
              source: `Lesson 13: FTC research; SEC/FINRA data`,
            },
            {
              id: `e5`,
              text: `Wealth-happiness research (L18): income matters throughout the range with diminishing returns; relationships, autonomy, engaging work, health, and meaning matter as much or more above adequacy. Money alone doesn't produce happiness.`,
              source: `Lesson 18: Kahneman-Killingsworth; Harvard Study of Adult Development`,
            },
            {
              id: `e6`,
              text: `Most financial mistakes are pattern mistakes (L06, L10, L13, L17): bad debt, dark patterns, schemes, predatory insurance share predictable structures. Pattern recognition protects across many decision contexts at once.`,
              source: `Multiple lessons on pattern recognition`,
            },
            {
              id: `e7`,
              text: `Insurance and tax literacy (L12, L17): most adults overpay on both due to poor framework knowledge. Conscious decisions in these areas typically save thousands per year, which compounds across decades.`,
              source: `Lessons 12 and 17`,
            },
            {
              id: `e8`,
              text: `Ethical frameworks (L19): different philosophies (maximize returns, ESG, minimum harm) lead to different financial lives. Choosing a framework explicitly produces better alignment between money and values than drifting.`,
              source: `Lesson 19: Ethics of money`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your philosophy. Here's the strongest objection. All three philosophies assume you can shape your financial life through deliberate choices. But most adults' financial lives are shaped by forces beyond their control: economic recessions, layoffs, family obligations, health crises, market timing, the cost of housing in your area, what jobs were available when you needed one. The 'design your financial life' framing is itself a privileged way of thinking that assumes you have meaningful choices to make. For most people through most of history, financial life is something that happens to you, not something you design. Why does your chosen philosophy hold up against the reality that you may have far less control than the framework assumes? And does your philosophy work for people whose circumstances are harder than the case studies suggest?"`,
            promptInstruction: `In 4-5 sentences, respond. How does your philosophy handle the reality of constraints and circumstances beyond your control? Does it require privilege to work, or does it adapt to different starting positions and unexpected events?`,
          },
          reflectionPrompt: `Looking at the philosophies you didn't choose, which was hardest to leave behind? What does that reveal about you?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the five integrating patterns from the 20 lessons?`,
              options: [
                `Different lessons have nothing in common`,
                `Compound interest is the most important concept; boring beats exciting; mistakes are pattern mistakes; money affects but doesn't determine well-being; ethical and practical considerations interact`,
                `Save more, spend less`,
                `Work hard, get lucky`,
              ],
              correctIndex: 1,
              explanation: `These five patterns connect every prior lesson into an integrated framework. Individual facts matter less than the unified understanding they produce.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Which questions in finance are settled empirically vs contested normatively?`,
              options: [
                `All questions are settled`,
                `Settled empirical: compound interest math, SPIVA active manager underperformance, MLM income distributions, insurance loss ratios. Mixed empirical/normative: aggressive saving timing, career path choice. Contested normative: ESG screening, tax level, prioritization of security vs meaning`,
                `All questions are contested`,
                `Only government decides`,
              ],
              correctIndex: 1,
              explanation: `Knowing which category a question falls in produces better thinking. Confident answers on settled questions, framework thinking on mixed questions, epistemic humility on contested ones.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "epistemic humility"?`,
              options: [
                `Being shy about what you know`,
                `Recognizing the limits of your own knowledge and being open to being wrong; especially important on contested value questions; doesn't mean refusing to commit, means committing while staying open to evidence`,
                `Refusing to take positions`,
                `Being dogmatic`,
              ],
              correctIndex: 1,
              explanation: `Healthy thinking commits to positions based on current best understanding while remaining willing to update. Building this habit at 12 produces a lifetime of better thinking on hard questions.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the FIRE movement emphasize?`,
              options: [
                `Burning money`,
                `Financial Independence, Retire Early: aggressive saving (30-50%+ of income), low-cost index investing, reaching independence in 40s-50s; subvariants include leanFIRE, regularFIRE, fatFIRE`,
                `Tax avoidance`,
                `Buy now, pay later`,
              ],
              correctIndex: 1,
              explanation: `FIRE has thousands of documented success stories alongside ongoing debate about whether it's the right path for most people. Critics note it often requires high income and may sacrifice meaningful experiences.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does Philosophy 2 (balanced living) argue?`,
              options: [
                `Save nothing, spend everything`,
                `Save consistently (15-25% of income) in index funds, but also spend meaningfully on present experiences, relationships, and personal growth; sustainable financial life supporting both future security and present joy`,
                `Aggressive frugality forever`,
                `Maximum income at any cost`,
              ],
              correctIndex: 1,
              explanation: `This philosophy represents most mainstream personal finance advice. The argument: life has to be lived along the way; rigorous frugality maintained for decades often produces neither significant wealth nor a good life.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does Philosophy 3 (maximum meaning) emphasize?`,
              options: [
                `Spiritual practice only`,
                `Choose work and life that maximizes meaning, engagement, and contribution, accepting potentially lower income; well-being research finds relationships, engaging work, meaning, and health matter as much or more than income above adequacy`,
                `Avoid all money`,
                `Get rich quick`,
              ],
              correctIndex: 1,
              explanation: `Many people in service careers, creative work, or family-centered lives embody this philosophy. The argument: a life optimized around financial accumulation often misses what actually mattered.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is "synthesis" the highest level of learning?`,
              options: [
                `Because it's hardest`,
                `Because it combines separate concepts, ideas, or experiences into a coherent whole; separates someone who knows individual facts from someone who has built a working framework`,
                `Because it requires memorization`,
                `Because it's tested`,
              ],
              correctIndex: 1,
              explanation: `Synthesis is what this capstone is designed to develop. Most adults know individual financial facts. Few have built integrated frameworks. The framework is what produces better life decisions.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is your current philosophy likely to evolve over time?`,
              options: [
                `Because you'll be wrong`,
                `People in their 20s often gravitate toward financial independence; 30s-40s often shift toward balanced as family/responsibilities grow; 50s-60s sometimes toward maximum meaning as values clarify; growth, not failure`,
                `Because circumstances change`,
                `Because money loses value`,
              ],
              correctIndex: 1,
              explanation: `Evolution of philosophy across life stages is normal and healthy. The skills built across this band (pattern recognition, math comfort, source evaluation) serve you in any philosophy and across philosophical shifts.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The point of this band has been the individual facts in each lesson, not the integrated framework they produce.`,
              correctAnswer: false,
              explanation: `False. The point has always been the integrated framework. Individual facts in isolation are useful but limited. The framework that connects them is much more powerful and is the goal of the capstone.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend dismissively says "Money is just money, why are you thinking about it so deeply?" Based on this entire band, what's the most useful response?`,
              options: [
                `"You're right, it's not worth thinking about"`,
                `"Money is the ongoing material decision space where almost every other choice gets made. How you spend it, save it, earn it, invest it, give it away—every one of those is shaping your life in ways most people don't see because they never look. Thinking about it deeply at 12 means your future self is shaped by deliberate choices instead of defaults. Not deeply caring about money in the obsessive sense; deeply understanding the system that shapes nearly every adult choice. That's different from being greedy. It's the foundation of an actually-chosen life."`,
                `"I'm just memorizing for school"`,
                `"It's only about getting rich"`,
              ],
              correctIndex: 1,
              explanation: `Real applied synthesis. The friend's framing is common and unfortunately produces drifting financial lives. The response articulates why the deep thinking matters without being preachy. This is the capstone synthesis in action.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved. This is the capstone — these reflections matter.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which of the three philosophies most closely matches how you'd want to live? Be specific about why.` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Across all 20 lessons, which one changed your thinking most? What did you believe before that you don't believe now?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you actually live the philosophy you chose, who does that make you at 30? At 50? At 70?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one financial decision you (or your family) will make in the next year. How does your chosen philosophy inform that decision?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's the strongest critique of your chosen philosophy? Can you steelman it and still hold your position?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `What financial habit could you actually start this month, at 12, that would compound across the next 50 years? Pick one and start it.` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the capstone. The synthesis becomes real when you act on it. Two paths.`,
          familyActivity: {
            title: `The Family Financial Philosophy Conversation`,
            duration: `60 minutes`,
            description: `At dinner, share what you learned across the entire Money & Business band. Ask each adult: which of the three philosophies (financial independence, balanced living, maximum meaning) is closest to how they actually live? Is it the one they'd choose if starting over? Have they ever shifted philosophies? Then share which philosophy you're currently most drawn to and why. This conversation will probably reveal that family members are operating from different philosophies without consciously naming them. That's fine. Naming them lets the family have richer conversations about financial decisions going forward. Most families never have this conversation. Initiating it at 12 is unusual and valuable.`,
          },
          projectOption: {
            title: `Build Your Own Financial Life Document, 4 weeks (CAPSTONE PROJECT)`,
            duration: `4 weeks, ~30 minutes per week`,
            description: `Write a 2,000-word personal financial philosophy document. Sections to include: your chosen integrating philosophy and why; your specific values and priorities; your current understanding of compound interest, debt, taxes, insurance, and investing; your framework for ethical money decisions; the kinds of mistakes you're committed to avoiding; the financial habits you're committed to building; how your philosophy might evolve over the next 30 years; what you'd want a future version of yourself reading this document to know. This is the capstone synthesis in document form. Many adults never write anything like this for themselves. Doing it at 12 produces a reference document you can return to throughout your life, update as your thinking evolves, and use as the foundation for major decisions. Save the document. Re-read it in 5 years. Re-read it in 20.`,
            offerToParent: `Parent: opt your kid into this capstone project from the dashboard. The 4-week document is genuinely worth supporting. Reading it together at the end can be one of the most substantive parent-child conversations you'll ever have about money and life.`,
          },
          identityQuestion: `If you build a coherent financial philosophy at 12 and update it across 60 years of living, who does that make you?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson — and this entire band — making you?`,
          prompt: `One sentence. The biggest one yet. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who designed their financial life deliberately instead of drifting into one shaped by defaults.`,
            `A person who can integrate compound interest, ethics, well-being research, and pattern recognition into one coherent framework.`,
            `Someone willing to commit to a philosophy while staying open to evolving it across decades of living.`,
          ],
          saveKey: `identity_responses_mb_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You did it. Twenty lessons. Twenty serious investigations into how money and business actually work in the world. You've covered more applied financial literacy than most people will encounter in their entire lives. You understand compound interest, inflation, investing, debt, credit scores, budgeting, business models, marketing manipulation, income types, taxes, schemes, entrepreneurship, negotiation, financial media, insurance, well-being research, and money ethics. You can synthesize all of it into an integrated framework for designing your own financial life. Most adults can't. You can. The badge for this lesson is Financial Architect because that's what you are now. The capstone project is optional but transformative; consider doing it. Your financial life starts being deliberate from this point forward. You have my respect. — Ace`,
          badge: `financial-architect`,
          badgeName: `Financial Architect`,
          xpEarned: 100,
          competencies: [
            `Synthesizes 19 prior lessons into an integrated framework for financial life`,
            `Articulates three integrating philosophies (financial independence, balanced living, maximum meaning)`,
            `Distinguishes settled empirical questions from contested value questions`,
            `Applies epistemic humility while still committing to positions`,
            `Has built a coherent personal philosophy that can evolve across 60+ years of living`,
          ],
          nextLessonPreview: {
            title: `Money & Business band: COMPLETE`,
            hook: `You've finished all twenty lessons. The framework is yours. Take it into your life and let it grow with you. — Ace, signing off this subject. See you in another one.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L20 ${VERSION}] CAPSTONE "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection, ${l.xpReward} XP`
  );
}
