// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L18 — Wealth, Status, and Happiness: What Research Actually Says
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Behavioral Economics, Well-Being Research
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (Kahneman-Deaton vs Killingsworth vs viral wealth content)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l18-v1";

const MONEYBUSINESS_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-18`,
      title: `Wealth, Status, and Happiness: What Research Actually Says`,
      duration: 35,
      xpReward: 75,
      badge: `wellbeing-researcher`,
      badgeName: `Wellbeing Researcher`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, after 17 lessons on money, business, and finance, we ask a deeper question: does the money actually matter for happiness? The answer is more interesting than either extreme. "Money can't buy happiness" is partially wrong; research consistently finds that income matters for happiness. "Money is everything that matters" is also wrong; research shows income's effect on happiness has serious limits and gets dramatically smaller above certain levels. Today we look at three sources with very different framings of the wealth-happiness relationship. By the end you'll know more about this question than most adults arguing about it.`,
          headline: `Wealth, Status, and Happiness`,
          subtitle: `What research actually says about the money-happiness relationship.`,
          visual: `/voyager-assets/money-business/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Question Researchers Actually Ask`,
          paragraphs: [
            `Researchers studying wealth and happiness face an immediate problem: "happiness" can mean different things. There's day-to-day emotional well-being (how often do you experience pleasant vs unpleasant feelings?). There's life satisfaction (when you reflect on your life overall, how good is it?). There's meaning and purpose (does your life feel meaningful?). These are related but distinct, and money affects them differently.`,
            `The most-cited research uses standardized survey instruments. Daily experience surveys ask people to report emotions at random moments throughout the day, capturing real-time emotional well-being. Life satisfaction surveys ask people to rate their lives overall, capturing reflective evaluation. Larger national surveys (US Census, OECD, Gallup) track these measures across populations and over time. Smaller experimental studies test specific interventions (like income changes, lottery wins, financial setbacks) to see effects.`,
            `Three findings appear consistently across rigorous research. First: more income produces higher happiness on average. The relationship is real and measurable. Second: the effect of income on day-to-day emotional well-being has diminishing returns, with effects flattening or even ceasing above certain levels. Third: the effect of income on life satisfaction continues at higher levels with less flattening, though it's still less dramatic than at lower incomes. Different measures, different patterns.`,
            `Beyond income, several factors consistently matter for happiness: meaningful relationships, sense of autonomy and control, work that engages your strengths, physical and mental health, sense of progress and growth, contribution to something larger than yourself. Money helps with some of these (health care access, autonomy through reduced financial stress) and is largely independent of others (relationships, meaning).`,
          ],
          image: `/voyager-assets/money-business/l18-s1-question.webp`,
          imageCaption: `Happiness isn't one thing. Income affects different parts of it differently.`,
          vocab: [
            {
              word: `life satisfaction`,
              definition: `A person's reflective evaluation of how good their life is overall. Different from day-to-day emotional well-being. Income tends to affect life satisfaction more than daily emotional experience, especially at higher levels.`,
              audioPrompt: `Life satisfaction is a person's reflective evaluation of how good their life is overall, {name}. Different from day-to-day emotional well-being. When you think about your life as a whole, how satisfied are you with it? That's life satisfaction. Income tends to affect life satisfaction more than daily emotional experience, especially at higher levels. Someone earning a lot can have a high life satisfaction (the reflective assessment) while still having a moderate day-to-day emotional experience. Both measures matter. Knowing the difference helps you understand research findings that initially seem contradictory.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Kahneman-Deaton Finding`,
          paragraphs: [
            `In 2010, Daniel Kahneman (Nobel laureate, "Thinking Fast and Slow" author) and Angus Deaton (another Nobel laureate) published influential research analyzing 450,000 American survey responses. Their finding became famous: emotional well-being increases with income up to about $75,000 per year, but plateaus above that level. Life satisfaction continued to rise with income above $75,000.`,
            `The finding generated extensive coverage and became "common knowledge": money makes you happy up to about $75K, then stops mattering. The implication seemed to be that beyond covering basic needs, more money didn't really improve daily emotional life. The result was widely cited in discussions of inequality, work-life balance, and personal finance.`,
            `What the research actually said was more nuanced. The plateau was in self-reported emotional well-being (how often did you experience pleasant vs unpleasant feelings recently?), not life satisfaction. The $75,000 figure was specific to the 2010 economy and the US samples. The plateau was an average pattern that didn't apply equally to everyone.`,
            `Other researchers raised methodological concerns. The original study's measure of emotional well-being only allowed for limited variation at the top of the scale, which could have created an artificial appearance of plateau. The cross-sectional design couldn't fully separate income from other correlated factors. The findings were robust enough to be taken seriously, but they weren't the final word.`,
          ],
          image: `/voyager-assets/money-business/l18-s2-kahneman.webp`,
          imageCaption: `Kahneman-Deaton 2010: $75K plateau on emotional well-being became famous; nuance was lost.`,
          vocab: [
            {
              word: `plateau effect`,
              definition: `When the relationship between two variables flattens out beyond a certain point. The Kahneman-Deaton finding suggested emotional well-being plateaued around $75K of household income in 2010. Later research has complicated this.`,
              audioPrompt: `A plateau effect is when the relationship between two variables flattens out beyond a certain point, {name}. The Kahneman-Deaton finding from 2010 suggested emotional well-being plateaued around 75,000 dollars of household income in that era. Beyond that level, more money didn't seem to produce more daily emotional well-being on average. The finding was widely reported as proving "money stops mattering at 75K." Later research has complicated this picture. The plateau may have been partially a measurement artifact. The exact level varies by location and time. And the plateau effect for emotional well-being doesn't apply to life satisfaction in the same way.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Killingsworth Update And Reconciliation`,
          paragraphs: [
            `In 2021, Matthew Killingsworth published research using a different methodology. He had collected over 1.7 million real-time happiness reports from over 33,000 people via a smartphone app called Track Your Happiness. The methodology asked people to rate their happiness in the moment when randomly prompted, providing finer-grained data than traditional surveys.`,
            `Killingsworth found that both emotional well-being AND life satisfaction continued to rise with income beyond $75,000, with no clear plateau. The relationship was logarithmic (each doubling of income produced roughly the same boost in happiness), meaning the marginal effect got smaller at higher levels, but the effect didn't vanish. This contradicted the famous Kahneman-Deaton plateau.`,
            `In 2023, Kahneman and Killingsworth jointly published an "adversarial collaboration" study that reconciled the findings. Their conclusion: for the average person, more income continues to produce more happiness across all income levels measured. The original plateau finding mostly applied to a specific subset: people who were already unhappy due to other factors (poor relationships, health issues, etc.). For this minority, more money didn't help. For the majority of people, money continued to correlate with happiness beyond $75K.`,
            `The reconciled understanding: income matters for happiness throughout the income range, with diminishing returns at higher levels (each new dollar matters less than the last) but no hard plateau. Other factors (relationships, health, meaning, sense of progress) matter independently. The "$75K plateau" framing of common knowledge was too simple.`,
          ],
          image: `/voyager-assets/money-business/l18-s3-killingsworth.webp`,
          imageCaption: `Reconciled: income matters throughout the range, with diminishing returns but no hard plateau.`,
          vocab: [
            {
              word: `diminishing returns`,
              definition: `When each additional unit of input produces less additional output than the previous unit. Income shows diminishing returns to happiness: going from $40K to $80K typically matters more than going from $140K to $180K.`,
              audioPrompt: `Diminishing returns is when each additional unit of input produces less additional output than the previous unit, {name}. Income shows diminishing returns to happiness. Going from 40,000 dollars to 80,000 dollars typically produces a noticeable improvement in well-being for most people. Going from 140,000 dollars to 180,000 dollars typically produces a smaller improvement, though still positive. The relationship is roughly logarithmic: each doubling of income produces roughly similar happiness gains. This means the same 40,000 dollar increase has different impact depending on starting point. Doubling from 30K to 60K matters more than adding 40K to 200K.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Else Actually Matters For Happiness`,
          paragraphs: [
            `Research has identified other factors that consistently correlate with happiness, often as strongly or more strongly than income. Quality relationships top almost every well-being study. The Harvard Study of Adult Development, the longest-running study of adult life (started 1938, ongoing), consistently finds that the quality of relationships at age 50 predicts physical and mental health at age 80 better than cholesterol levels or wealth. Loneliness has been linked to mortality risk comparable to smoking.`,
            `Autonomy and control over your life consistently predicts happiness. Self-determination theory research finds three universal psychological needs: autonomy (feeling that your actions are self-directed), competence (feeling effective), and relatedness (feeling connected to others). Meeting these needs is at least as predictive of well-being as income.`,
            `Engaging work matters. The "flow" research by Mihaly Csikszentmihalyi identifies states of deep engagement that consistently produce well-being. Work that engages your strengths and provides flow is consistently more satisfying than work that doesn't, even when income is similar. People in lower-paying but engaging work often report higher life satisfaction than people in higher-paying but unfulfilling work.`,
            `Physical and mental health affects almost every other dimension of well-being. Exercise has been consistently linked to better mood, lower depression, and higher life satisfaction. Sleep quality predicts daily emotional well-being more strongly than most other variables. Mental health conditions (depression, anxiety) often matter more for daily happiness than income changes.`,
            `Sense of meaning and contribution matters. People who see their life as serving a purpose larger than themselves consistently report higher well-being, especially life satisfaction. This can come from family, religion, civic involvement, art, science, or other sources. The specific source matters less than the sense that what you do matters.`,
          ],
          image: `/voyager-assets/money-business/l18-s4-other.webp`,
          imageCaption: `Income is one factor among several. Relationships, autonomy, engaging work, health, meaning.`,
          vocab: [
            {
              word: `Harvard Study of Adult Development`,
              definition: `The longest-running study of adult life (started 1938, ongoing). Has followed participants for 80+ years. Consistently finds that quality of relationships predicts late-life health and happiness better than wealth or cholesterol.`,
              audioPrompt: `The Harvard Study of Adult Development is the longest-running study of adult life ever conducted, {name}. Started in 1938 and still ongoing, it has followed original participants for over 80 years. Its findings are among the most robust in well-being research because of the unusual time scale. The study consistently finds that the quality of a person's relationships at age 50 predicts their physical and mental health at age 80 better than cholesterol levels, blood pressure, or wealth. Loneliness has been linked to mortality risk comparable to smoking. The study provides some of the strongest evidence available that relationships matter enormously for long-term well-being.`,
            },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources discussing wealth and happiness. The first is the original Kahneman-Deaton 2010 research. The second is the Killingsworth-Kahneman 2023 reconciliation. The third is viral wealth content from a social media account selling courses on "luxury mindset." Three very different types of sources, three very different reliability levels.`,
            `As you rank them, watch for methodology, evidence quality, conflicts of interest, and calibrated confidence. Note also that the two academic sources differ in their findings—the 2023 reconciliation refined the 2010 paper. Both can be credible and yet produce different findings. Scientific research updates as new methods reveal new patterns.`,
            `One framing as you walk through this lesson and the next two: you have spent 18 lessons learning how money and business actually work. The question of whether the money matters and what it's for has been implicit throughout. Now it becomes explicit. The next two lessons (ethics of money, designing your financial life) take this question even further. The financial literacy you've built is in service of a life worth living, not the other way around.`,
          ],
          image: `/voyager-assets/money-business/l18-s5-before.webp`,
          imageCaption: `Financial literacy is in service of a life worth living, not the other way around.`,
          vocab: [
            {
              word: `adversarial collaboration`,
              definition: `When researchers with different findings work together to design studies that resolve their disagreements. Strong methodology because both sides agree to the design before seeing results. Kahneman & Killingsworth's 2023 paper is a notable example.`,
              audioPrompt: `Adversarial collaboration is when researchers with different findings work together to design studies that resolve their disagreements, {name}. Strong methodology because both sides agree to the study design before seeing the results. The 2023 paper by Kahneman and Killingsworth is a notable example. Kahneman had found a happiness plateau at 75,000 dollars. Killingsworth had found no plateau. Rather than continue to disagree in separate papers, they collaborated on a study that could resolve the difference. The result was a richer understanding than either had alone. Adversarial collaboration is increasingly seen as a model for how science can resolve disagreements productively.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l18-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Wealth And Happiness`,
          intro: `Three sources discuss the relationship between wealth and happiness. Rank them from most credible to least credible based on methodology, evidence, and conflicts of interest. Then see how a careful analyst would evaluate them.`,
          topic: `What does research actually say about whether more money makes people happier, and what should that mean for how someone lives their life?`,
          sources: [
            {
              id: `source-a`,
              name: `Kahneman & Killingsworth (2023) — "Income and emotional well-being: A conflict resolved" (PNAS)`,
              type: `Peer-reviewed academic research conducted as an adversarial collaboration; published in Proceedings of the National Academy of Sciences; combines and reconciles two large prior studies`,
              claim: `Reconciled analysis of multiple large datasets (Kahneman's 2010 survey of 450,000 Americans plus Killingsworth's 2021 sample of 33,000 with 1.7M real-time observations) finds that emotional well-being and life satisfaction both continue to rise with income beyond $75,000 for most people. The originally-reported plateau primarily applied to a subset already unhappy due to non-income factors. For the average person, income produces diminishing but not vanishing returns to happiness throughout the measured income range. Effect is logarithmic: each doubling of income produces similar happiness gains.`,
              evidence: `Adversarial collaboration between researchers with previously different findings. Multiple large datasets combined. Peer-reviewed in one of the most prestigious science journals. Detailed methodology published with data. Authors disclosed funding sources and methodology limitations. Both lead authors are Nobel-caliber experts in their fields (Kahneman is a Nobel laureate). Replicates and refines prior findings rather than overturning them. Subject to ongoing peer scrutiny.`,
            },
            {
              id: `source-b`,
              name: `Kahneman & Deaton (2010) — "High income improves evaluation of life but not emotional well-being" (PNAS)`,
              type: `Original peer-reviewed academic research that became widely cited; conducted by two Nobel laureates analyzing 450,000 American survey responses`,
              claim: `Analysis of 450,000 Gallup survey responses from US adults found that life satisfaction continued to rise with income at all levels measured, but emotional well-being (frequency of pleasant vs unpleasant emotions) plateaued at around $75,000 per year. The findings suggest that beyond a certain income, additional money doesn't improve daily emotional life, though it continues to improve overall life evaluations. The $75K threshold became widely cited as evidence that "money stops mattering" above middle-class incomes.`,
              evidence: `Peer-reviewed in PNAS. Large sample size (450,000). Both authors are Nobel laureates. Methodology made public. Findings widely cited in subsequent research. Subsequent research (including the 2021 Killingsworth study and the 2023 adversarial reconciliation) refined these findings and showed the plateau was overstated. The original research wasn't wrong; it was using survey methodology with limitations that newer real-time methodology partially overcame. The 2023 reconciliation is the more complete picture.`,
            },
            {
              id: `source-c`,
              name: `@LuxuryLifeMentor — Instagram account, 850K followers, sells $1,997 "Wealth Mindset Mastery" course`,
              type: `Viral Instagram account run by self-described "wealth coach" who sells courses claiming to teach the mindset of the ultra-rich`,
              claim: `"Studies show money DOES buy happiness—the more you earn, the happier you'll be. Period. Anyone telling you 'money can't buy happiness' is broke and trying to make themselves feel better about it. Look at the data: the wealthy are statistically happier than everyone else. My students went from broke and depressed to rich and fulfilled in 12 months. The secret is the wealth mindset. Comment 'RICH' for early access to my $1,997 program. First 100 people save $1,000. Lifestyle of the wealthy is your birthright. Don't let broke advisors convince you otherwise."`,
              evidence: `Cherry-picks one direction of the actual research (income matters) while ignoring nuance (diminishing returns, other factors matter). Frames complex research as obvious binary truth. Attacks alternative views as personal failure ("broke"). No engagement with methodological complexity. Unverifiable testimonials about students. Course at the end. Pattern matches recognizable get-rich-quick promotion. The actual underlying research doesn't support the "more is always better in proportion" framing—diminishing returns are real, and other factors matter independently.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? How do you weigh the two academic sources against each other?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the most credible for current understanding. Adversarial collaboration is methodologically strong because both sides agreed to the design before seeing results. Combines and refines two prior large studies. Peer-reviewed at the highest level (PNAS). Both authors are Nobel-caliber. Provides the most complete picture currently available of the wealth-happiness relationship. When two prior studies conflict, the adversarial collaboration that reconciles them is usually the strongest source.`,
              `Source B is also credible and shouldn't be dismissed. It's peer-reviewed research by two Nobel laureates at a top journal. The $75K plateau finding was widely cited because it was real research with real evidence. But subsequent research (including the 2023 reconciliation) refined and partially corrected it. This is how science actually works: findings update as new methodologies reveal new patterns. The 2010 paper isn't "wrong"—it's a partial picture that the 2023 reconciliation makes more complete. Knowing how to weight earlier vs later research, including how to follow scientific developments over time, is a real skill.`,
              `Source C is the recognizable scam pattern. Cherry-picks one direction of complex research. Frames nuanced findings as obvious binary truth. Attacks alternative views by attacking the people who hold them. Includes a $1,997 course as the actual product. Uses urgency-driven pricing. The underlying research actually contradicts the source's simplistic "more is always better" framing—diminishing returns are real, and the Harvard Study of Adult Development consistently finds that relationships matter as much or more than wealth. This is the same scheme-promotion pattern from earlier lessons applied to happiness research.`,
              `The deeper lesson: high-quality research often produces complex, nuanced findings. Bad sources flatten this complexity into binary claims that fit their sales pitch. The "money buys happiness, period" framing of Source C is just as wrong as the simplistic "$75K plateau" framing that emerged from Source B in popular media. The actual findings are: income matters throughout the range, with diminishing returns, alongside many other factors that matter independently. Living well financially is about understanding this complexity, not picking the simplistic version that someone is selling you.`,
            ],
          },
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the difference between "emotional well-being" and "life satisfaction" in happiness research?`,
              options: [
                `They're the same`,
                `Emotional well-being is day-to-day pleasant vs unpleasant feelings; life satisfaction is reflective evaluation of life overall; income tends to affect them differently`,
                `Emotional well-being is for kids only`,
                `Life satisfaction is illegal`,
              ],
              correctIndex: 1,
              explanation: `These measures are related but distinct. Income's effect on life satisfaction continues at higher levels with less plateau than its effect on emotional well-being. Knowing the difference helps you understand seemingly contradictory findings.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did the original Kahneman-Deaton 2010 study find?`,
              options: [
                `Money doesn't matter`,
                `Life satisfaction continued to rise with income at all levels; emotional well-being appeared to plateau around $75K; the $75K plateau became widely cited as "money stops mattering"`,
                `Money is everything`,
                `Random results`,
              ],
              correctIndex: 1,
              explanation: `The 2010 finding became famous as "the $75K plateau." Subsequent research refined this. The original wasn't wrong but was a partial picture that newer methodology made more complete.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What did Killingsworth's 2021 research find and how did the 2023 reconciliation resolve it?`,
              options: [
                `Money never matters`,
                `2021: emotional well-being and life satisfaction both continue to rise with income beyond $75K with no clear plateau. 2023 reconciliation: for the average person, income continues to produce diminishing but not vanishing returns to happiness throughout the income range; the original plateau primarily applied to a subset already unhappy due to non-income factors`,
                `Money is always best`,
                `No conclusion possible`,
              ],
              correctIndex: 1,
              explanation: `Adversarial collaboration produces the strongest reconciled finding. The picture is more nuanced than either original paper alone, and updates as methodology improves.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's "diminishing returns" in the wealth-happiness context?`,
              options: [
                `Money loses value`,
                `When each additional dollar of income produces less additional happiness than the previous one; income shows diminishing returns roughly logarithmically (each doubling produces similar gains)`,
                `Insurance claims`,
                `Stock market crashes`,
              ],
              correctIndex: 1,
              explanation: `Going from $40K to $80K matters more than going from $140K to $180K. The relationship doesn't vanish, but each new dollar matters less than the last. Understanding this is crucial for evaluating income tradeoffs.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the Harvard Study of Adult Development consistently find?`,
              options: [
                `Money is everything`,
                `Quality of relationships at age 50 predicts physical and mental health at age 80 better than cholesterol levels or wealth; loneliness has been linked to mortality risk comparable to smoking; relationships matter enormously for long-term well-being`,
                `Money matters more than relationships`,
                `Nothing matters`,
              ],
              correctIndex: 1,
              explanation: `Started in 1938, the Harvard Study is the longest-running study of adult life. Its findings about relationships are among the most robust in well-being research because of the 80+ year time horizon.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are the three universal psychological needs identified by self-determination theory?`,
              options: [
                `Food, water, shelter`,
                `Autonomy (feeling self-directed), competence (feeling effective), and relatedness (feeling connected); meeting these is at least as predictive of well-being as income`,
                `Money, fame, power`,
                `Just happiness`,
              ],
              correctIndex: 1,
              explanation: `Decades of research from Edward Deci and Richard Ryan find these three needs universally matter for well-being. Income can support meeting them but doesn't replace them.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "adversarial collaboration"?`,
              options: [
                `Fighting in research`,
                `When researchers with different findings work together to design studies that resolve disagreements; both sides agree to design before seeing results; strong methodology`,
                `Refusing to publish`,
                `Stealing data`,
              ],
              correctIndex: 1,
              explanation: `Adversarial collaboration is increasingly seen as a model for productively resolving scientific disagreements. The 2023 Kahneman-Killingsworth paper is a notable example.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What was the pattern in Source C (the "Luxury Life Mentor")?`,
              options: [
                `Accurate research summary`,
                `Cherry-picked one direction of complex research while ignoring nuance; framed findings as obvious binary truth; attacked alternative views by attacking the people; included $1,997 course as the actual product; matches recognizable scheme-promotion pattern from earlier lessons`,
                `Free educational content`,
                `Peer-reviewed science`,
              ],
              correctIndex: 1,
              explanation: `The "money buys happiness, period" framing is just as wrong as the simplistic "$75K plateau" framing. Real research is nuanced. Sources that flatten nuance for simple sales pitches are unreliable.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Research consistently finds that meaningful relationships matter as much or more than wealth for long-term well-being.`,
              correctAnswer: true,
              explanation: `True. The Harvard Study of Adult Development and many other studies consistently find this. Relationships predict late-life health and happiness better than wealth or cholesterol. Money helps with some dimensions of well-being but is largely independent of others.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone says "I'm going to focus 100% on making as much money as possible until I'm 50, then start working on relationships and meaning." Based on this lesson, what's the most useful response?`,
              options: [
                `"Great plan, money first"`,
                `"The research doesn't support that strategy. Relationships, health, meaning, and engaging work matter for happiness alongside income, not as something to add later. The Harvard Study finds that relationship quality at 50 predicts well-being at 80 better than wealth—meaning the relationships you neglect in your 30s and 40s may not be repairable later. A more research-supported approach: pursue meaningful income while also investing in relationships and engaging work throughout your life. Income matters; it just isn't a complete substitute for the other dimensions of well-being."`,
                `"Pure focus is the only path"`,
                `"Wait until 60"`,
              ],
              correctIndex: 1,
              explanation: `Real applied well-being literacy. Honor the income ambition. Name the research finding about relationships requiring sustained investment. Offer the integrated approach. This is the kind of thinking the lesson is building toward.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you assume about the relationship between money and happiness? Has it shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Why is the simplified "money buys happiness" or "money doesn't matter" framing so much more popular than the actual research?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who pursues income alongside (not instead of) relationships, meaning, autonomy, and engaging work, what does that change about your 30s and 40s?` },
            { id: `reflect-application`, category: `Application`, prompt: `Look at the adults in your life. Who seems happiest? What does their life have that the research suggests matters? Be specific.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is the diminishing returns finding sufficient justification for limiting income ambitions? Or are there reasons the marginal extra income still matters even when it produces less marginal happiness?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Track your own happiness for one week. Rate each day's overall feeling. What activities or interactions correlate with higher ratings? With lower?` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Well-being literacy shapes how you spend the next 60 years. Two paths.`,
          familyActivity: {
            title: `The Family Well-Being Conversation`,
            duration: `45 minutes`,
            description: `At dinner, share what you learned about the actual research on wealth and happiness. Ask each adult: when have they been happiest in their life? What was going on then? How much was money the driver vs other factors? Many adults will share that their happiest periods weren't necessarily their highest-income periods. The conversation often reveals what the research finds: relationships, engaging work, autonomy, health, and meaning matter alongside income. This conversation can reshape how a family thinks about life choices going forward.`,
          },
          projectOption: {
            title: `Read One Well-Being Research Source, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Pick one accessible book or paper on well-being research. "The Good Life" by Robert Waldinger and Marc Schulz (summary of Harvard Study findings) is excellent and teen-readable. Alternatively: Daniel Kahneman's "Thinking, Fast and Slow" has sections on happiness research. Read for 30 minutes per day for 14 days. After 14 days, write 1,000 words on what you learned. The research is genuinely fascinating and changes how people think about life choices. Reading actual well-being research at 12 puts you years ahead of where most adults ever get.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Reading the Harvard Study findings is one of the most useful life-skills inputs available.`,
          },
          identityQuestion: `If you balance income with relationships, meaning, and engaging work, what does that compound to across 60 years of life?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows income matters AND relationships matter, alongside several other factors.`,
            `A person who isn't fooled by either "money buys happiness" or "money doesn't matter" framings.`,
            `Someone willing to invest in relationships, autonomy, and meaning alongside income.`,
          ],
          saveKey: `identity_responses_mb_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate what well-being research actually says about wealth and happiness; distinguish emotional well-being from life satisfaction; explain the Kahneman-Deaton finding and the 2023 reconciliation; identify the other major factors that matter for happiness (relationships, autonomy, engaging work, health, meaning); and recognize sources that flatten complex research into binary sales claims. You understand the actual relationship between money and life better than most adults. Next time we go into the explicit ethical questions money raises. Whose interests do you weight in financial decisions? What's an ethical relationship to wealth? Argument Builder format. See you there. — Ace`,
          badge: `wellbeing-researcher`,
          badgeName: `Wellbeing Researcher`,
          xpEarned: 75,
          competencies: [
            `Distinguishes emotional well-being from life satisfaction in happiness research`,
            `Knows the Kahneman-Deaton finding and its 2023 reconciliation`,
            `Articulates diminishing returns of income to happiness`,
            `Identifies other major factors that matter (relationships, autonomy, engaging work, health, meaning)`,
            `Recognizes sources that flatten nuanced research into binary sales claims`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: The Ethics of Money`,
            hook: `Whose interests do you weight? Three positions on ethical investing and spending: maximize returns, ESG-aware, minimum harm. Real philosophical disagreements.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L18 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
