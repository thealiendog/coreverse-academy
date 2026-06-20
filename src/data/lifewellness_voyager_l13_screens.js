// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L13 — Money and Wellness
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Money and Wellbeing Research
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (financial stress / materialism / comparison)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l13-v1";

const LIFEWELLNESS_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-13`,
      title: `Money and Wellness`,
      duration: 35,
      xpReward: 75,
      badge: `money-wellness-literate`,
      badgeName: `Money-Wellness Literate`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, money affects wellbeing, but not the way most people think. Above basic security, the relationship between income and happiness flattens significantly. What matters more — and what the research is clear on — is materialism, financial stress, and social comparison. This lesson examines the actual evidence on money and wellness.`,
          headline: `Money and Wellness`,
          subtitle: `Three real cases on money's effect on wellbeing. Research-grounded, not pop framings.`,
          visual: `/voyager-assets/life-wellness/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What The Research Actually Shows About Money And Happiness`,
          paragraphs: [
            `Two findings dominate the money-and-happiness research. First: financial security matters enormously for wellbeing. People in poverty or financial precarity experience substantially worse mental health, physical health, and life outcomes than people with basic financial security. The effect is real, large, and well-documented across many studies. Above a threshold of financial security, additional income produces substantially smaller wellbeing effects.`,
            `The specific research is interesting. Daniel Kahneman and Angus Deaton's influential 2010 paper found that emotional wellbeing increased with income up to roughly $75,000/year in the US (in 2010 dollars) but plateaued above that level. The finding was widely cited as showing money "stops buying happiness" above a threshold. Matthew Killingsworth's 2021 research, using a different methodology, found that wellbeing continued to increase with income beyond $75K, contradicting Kahneman-Deaton.`,
            `What resolved this. In 2023, Kahneman and Killingsworth published a collaborative paper that reconciled the findings. The picture that emerged: for most people, wellbeing continues to increase modestly with income beyond what Kahneman-Deaton originally suggested, but with diminishing returns. For a subset of people (roughly the bottom 20% in terms of baseline happiness), wellbeing does plateau or even decline above a threshold; for them, more money doesn't help and may correlate with declining wellbeing if other factors are present. The research is genuinely nuanced; pop versions of either finding simplified what's actually a complicated picture.`,
            `Key takeaway from the body of research. Financial security matters substantially for wellbeing; financial precarity is genuinely harmful. Above security, more money produces smaller and smaller wellbeing effects, with the effects partly depending on what the money is spent on and how it's earned. The pop framing "money doesn't buy happiness" is wrong; the pop framing "more is always better" is also wrong. The accurate framing is: money matters enormously for security and modestly beyond; the specifics of how it's earned, spent, and compared with others affect the relationship.`,
            `What this means for adolescents. You're not yet earning income directly, but money is already affecting your wellbeing through family financial situation, comparison with peers, and the financial culture you're immersed in. Building accurate framework now matters because the money-related decisions and beliefs you develop will shape decades of your relationship with money and wellbeing.`,
            `One important caveat. All this research is from primarily US/Western contexts and doesn't fully translate across cultures. Some research suggests the income-happiness relationship is stronger in cultures where material achievement is more central to identity, weaker in cultures where other sources of meaning dominate. The relationship is partly cultural construction, not just universal biology.`,
          ],
          image: `/voyager-assets/life-wellness/l13-s1-research.webp`,
          imageCaption: `Kahneman-Deaton 2010, Killingsworth 2021, Kahneman-Killingsworth 2023. Financial security matters enormously; above security, diminishing returns. Nuanced picture; pop framings simplified.`,
          vocab: [
            {
              word: `wellbeing research`,
              definition: `Daniel Kahneman and Angus Deaton 2010 paper found emotional wellbeing increased with income up to ~$75K/year in US, plateauing above. Matthew Killingsworth's 2021 research using different methodology found wellbeing continued increasing beyond $75K. Their 2023 collaborative paper reconciled findings: most people see continued modest gains beyond Kahneman-Deaton threshold with diminishing returns; subset (~bottom 20% baseline happiness) does plateau or decline. Financial security matters enormously; financial precarity genuinely harmful. Above security, diminishing returns affected by how money earned/spent/compared.`,
              audioPrompt: `Money and wellbeing research has produced more nuanced findings than pop content suggests, {name}. Two findings dominate. First: financial security matters enormously for wellbeing. People in poverty or financial precarity experience substantially worse mental health, physical health, and life outcomes than people with basic financial security. The effect is real, large, and well-documented across many studies. Second: above a threshold of financial security, additional income produces substantially smaller wellbeing effects. Daniel Kahneman and Angus Deaton's influential 2010 paper found that emotional wellbeing increased with income up to roughly 75,000 dollars per year in the United States, but plateaued above that level. Matthew Killingsworth's 2021 research using different methodology found that wellbeing continued to increase with income beyond 75,000. In 2023, Kahneman and Killingsworth published a collaborative paper that reconciled the findings. For most people, wellbeing continues to increase modestly with income beyond what Kahneman-Deaton originally suggested, but with diminishing returns.`,
            },
            {
              word: `financial security`,
              definition: `The condition of having reliable access to basic material needs — housing, food, healthcare, safety — without being in constant precarity. Research consistently shows that financial security matters enormously for wellbeing, and that moving from precarity to security produces large wellbeing gains. Above security, additional income produces substantially smaller effects.`,
              audioPrompt: `Financial security is the condition of having reliable access to basic material needs without being in constant precarity, {name}. Research consistently shows that financial security matters enormously for wellbeing — not as a nice extra but as a major determinant of health and life outcomes. People in poverty or financial precarity experience substantially worse mental health, physical health, and life expectancy than people with basic security. The effect is real, large, and well-documented across many studies. Moving from precarity to security produces large wellbeing gains. What happens above security is different: additional income produces substantially smaller wellbeing effects. The Kahneman-Deaton-Killingsworth research found continued modest gains above security but with strongly diminishing returns. The lesson frames this as a reason the "money doesn't buy happiness" pop framing is wrong: it does buy substantial wellbeing when it provides security. The "more is always better" framing is also wrong: above security, the returns diminish significantly. The accurate picture is that security matters enormously, and above it, how money is earned, spent, and compared with others affects the relationship more than the absolute amount.`,
            },
            {
              word: `diminishing returns`,
              definition: `The pattern in which each additional unit of income above financial security produces smaller and smaller wellbeing gains. Both the Kahneman-Deaton and Killingsworth research confirmed diminishing returns above the security threshold, though they disagreed on where exactly the pattern begins.`,
              audioPrompt: `Diminishing returns describes the pattern in which each additional unit of income above financial security produces smaller and smaller wellbeing gains, {name}. The money-and-wellbeing research confirms this across multiple studies. Kahneman and Deaton's 2010 paper originally found wellbeing plateauing around seventy-five thousand dollars per year in the United States. Killingsworth's 2021 research using different methodology found continued gains beyond that point. Their 2023 collaborative paper reconciled the findings: for most people, wellbeing continues to increase modestly with income above the threshold Kahneman-Deaton originally identified, but with strongly diminishing returns. The gains become smaller and smaller as income increases. This finding matters practically: it means that pursuing income as the primary path to wellbeing above security produces smaller and smaller returns while often costing more in time, relationships, health, and meaning. What produces wellbeing above security is largely non-monetary: relationships, meaningful work, experiences, health, contribution. The diminishing returns on income are real regardless of whether the specific threshold is exactly $75,000 or higher; the pattern is what's established.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Materialism And Its Costs`,
          paragraphs: [
            `Separate from the money-and-wellbeing relationship, there's a substantial research literature on materialism specifically: the orientation toward material acquisition and consumption as a primary source of meaning or status. Materialism is different from having money or wanting financial security; it's a specific value orientation.`,
            `Tim Kasser at Knox College has conducted decades of research on materialistic values and wellbeing. The findings are consistent across many studies and cultures: people with more materialistic values report lower wellbeing, more anxiety and depression, worse relationships, more environmental and ethical problems in their behavior, and less life satisfaction. The pattern holds even controlling for income; materialistic poor people and materialistic rich people both have worse wellbeing than less-materialistic people at the same income level.`,
            `Why does materialism reduce wellbeing? Several mechanisms identified by research. Hedonic adaptation: the satisfaction from material acquisition fades rapidly, requiring more acquisition to maintain the same satisfaction (treadmill effect). Comparison effects: material goods are positional; their value comes partly from what others have, which means you're always potentially behind. Displacement: time and attention going to material acquisition isn't going to other sources of meaning (relationships, meaningful work, contribution, learning). Identity confusion: defining self through material acquisition produces fragile identity dependent on continued acquisition.`,
            `Daniel Gilbert's research on affective forecasting (predicting how things will make you feel) adds another piece. Humans are systematically bad at predicting what will make them happy. Material goods reliably produce less lasting happiness than people predict; experiences reliably produce more lasting happiness than people predict; spending on others reliably produces more happiness than spending on self. These findings are robust across many studies but counter to what most people intuit.`,
            `What this implies for adolescents specifically. The conditions you're being raised in (social media glorifying acquisition, advertising targeting adolescents directly, brand-as-identity messaging, "what I bought today" content) are producing more materialism in your generation than in previous generations at the same age. Research has documented this trend and its mental health consequences. Recognizing materialism as a specific value orientation (rather than just normal wanting things) gives you the framework to develop relationship with material acquisition that doesn't reduce your wellbeing.`,
            `One important framing. This isn't an argument against wanting things or against having things. Material goods can be genuinely useful, can support meaningful activities, can produce real pleasure. The problem is materialism as a primary value orientation, not material goods themselves. The distinction is between "I want this because it serves something I care about" (instrumental) and "I want this because acquiring it is what gives my life meaning" (materialistic).`,
          ],
          image: `/voyager-assets/life-wellness/l13-s2-materialism.webp`,
          imageCaption: `Tim Kasser's materialism research (decades). Materialistic values predict lower wellbeing, more anxiety/depression, worse relationships, even controlling for income. Hedonic adaptation, comparison, displacement, identity confusion.`,
          vocab: [
            {
              word: `materialism and wellbeing`,
              definition: `Tim Kasser at Knox College decades of research: materialistic values predict lower wellbeing, more anxiety/depression, worse relationships, less life satisfaction. Pattern holds controlling for income. Mechanisms: hedonic adaptation (satisfaction fades, requires more acquisition); comparison effects (positional goods); displacement (time/attention from other sources of meaning); identity confusion (fragile self dependent on continued acquisition). Daniel Gilbert affective forecasting research: humans systematically bad at predicting what will make them happy; material goods produce less lasting happiness than predicted; experiences and spending on others produce more.`,
              audioPrompt: `Materialism and wellbeing research from Tim Kasser at Knox College has produced consistent findings across decades, {name}. Materialism is the orientation toward material acquisition and consumption as a primary source of meaning or status. It's different from having money or wanting financial security; it's a specific value orientation. People with more materialistic values report lower wellbeing, more anxiety and depression, worse relationships, and less life satisfaction. The pattern holds even controlling for income. Materialistic poor people and materialistic rich people both have worse wellbeing than less-materialistic people at the same income level. Why does materialism reduce wellbeing? Hedonic adaptation: the satisfaction from material acquisition fades rapidly. Comparison effects: material goods are positional; their value comes partly from what others have. Displacement: time and attention going to material acquisition isn't going to other sources of meaning. Identity confusion: defining self through material acquisition produces fragile identity. Daniel Gilbert's research on affective forecasting adds another piece: humans are systematically bad at predicting what will make them happy. Material goods reliably produce less lasting happiness than people predict; experiences reliably produce more.`,
            },
            {
              word: `hedonic adaptation`,
              definition: `The psychological process by which the satisfaction produced by a new acquisition fades rapidly, returning a person to their baseline level of wellbeing and requiring more acquisition to generate the same feeling. Hedonic adaptation is one of the core mechanisms through which materialism reduces wellbeing — often called the "hedonic treadmill."`,
              audioPrompt: `Hedonic adaptation is the psychological process by which satisfaction from a new acquisition fades rapidly, returning a person to baseline wellbeing and requiring more acquisition to generate the same feeling, {name}. Tim Kasser's materialism research and Daniel Gilbert's affective forecasting research both document this pattern. People systematically predict that material goods will produce more lasting happiness than they actually do; the reality is that the excitement fades within days or weeks for most acquisitions, after which the person is back where they started — and now has a new baseline expectation. The practical result is often called the hedonic treadmill: running to acquire more without getting anywhere. Each new purchase produces a brief elevation that fades, requiring another purchase for the same brief elevation. This mechanism explains why materialism as a primary value orientation reduces wellbeing: the strategy can't work structurally. Material acquisition can produce real and lasting wellbeing when it serves something genuinely valued (tools for meaningful work, equipment for meaningful activity). The problem is acquisition for its own sake, or acquisition as primary source of identity and meaning, which hedonic adaptation structurally prevents from working as intended.`,
            },
            {
              word: `affective forecasting`,
              definition: `Daniel Gilbert's term for the process of predicting how something will make you feel. Research on affective forecasting has established that humans are systematically mistaken in their predictions about happiness: material goods produce less lasting happiness than predicted, experiences produce more, and spending on others produces more than spending on self.`,
              audioPrompt: `Affective forecasting is Daniel Gilbert's term for the process of predicting how something will make you feel, {name}. His research has established that humans are systematically mistaken in specific ways when they make these predictions. Material goods reliably produce less lasting happiness than people predict; the excitement fades faster and more completely than anticipated. Experiences reliably produce more lasting happiness than people predict; the memory of experiences tends to grow in value over time. Spending on others reliably produces more happiness than spending on self, contrary to most people's intuition. These findings are counter to what most people would guess — which is part of why they matter. People are pursuing material goods as a primary happiness strategy while systematically overestimating how much they'll help. The findings apply practically: if you're making a money decision and trying to maximize actual wellbeing rather than anticipated wellbeing, experiences and contributions tend to produce better outcomes than material goods. A vacation produces more lasting wellbeing than buying a comparable amount of clothes. Giving something to someone you care about produces more wellbeing than buying something for yourself. The intuitions point the wrong direction; the research provides the correction.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Financial Stress And Its Effects`,
          paragraphs: [
            `On the other end of the money-wellbeing relationship: financial stress has substantial documented effects on health and wellbeing. People in financial precarity experience higher rates of depression, anxiety, physical health problems, relationship difficulties, and reduced life expectancy. The effects are large and consistent across research.`,
            `Specific findings on financial stress effects. Eldar Shafir and Sendhil Mullainathan's research on scarcity demonstrated that financial scarcity itself reduces cognitive capacity: the mental "bandwidth" available for decision-making, planning, and self-regulation. People under financial stress make worse decisions partly because the stress is occupying mental resources. This isn't a personal failure; it's a documented effect of scarcity on cognition. Their book "Scarcity" (2013) synthesizes this research.`,
            `Other documented effects. Financial stress raises cortisol (stress hormone) chronically, with cardiovascular and immune consequences. It's associated with worse sleep, worse relationship quality, more conflict, and impaired parenting capacity. Children growing up in financially stressed households show measurable differences in cognitive development, mental health, and life outcomes: partly from direct effects of poverty (worse nutrition, worse healthcare, worse housing) and partly from indirect effects through parental stress.`,
            `What's important for adolescents to understand. If your family is in financial stress, the wellbeing effects you're experiencing aren't personal failure on anyone's part. The stress affects everyone in the household, including parents whose capacity may be temporarily reduced. Recognizing this as a documented effect of scarcity (rather than as personal character) shifts response from blame to specific support-seeking.`,
            `What helps in financial stress (research-informed). External support: many communities have specific resources (food assistance, healthcare, mental health support) that families in financial stress often don't fully access. School counselors, social workers, and community organizations can connect families to resources. Maintaining as much stability as possible in the basics (sleep, food security, social connection) buffers against the worst effects. Family communication about the situation (age-appropriate) tends to produce better outcomes than secrecy or denial. Therapy or counseling for family members can address the mental health effects.`,
            `One important framing. Financial stress is a structural condition, not a personal failing. Many factors that produce financial stress (job loss, medical emergencies, structural economic conditions, lack of generational wealth, systemic inequality) aren't individual choices. The "just work harder" framing common in pop content often blames people for structural conditions. Recognizing financial stress as structural doesn't mean nothing can be done; it shifts the framing from shame to specific responses that work.`,
          ],
          image: `/voyager-assets/life-wellness/l13-s3-stress.webp`,
          imageCaption: `Shafir and Mullainathan: financial scarcity reduces cognitive bandwidth, impairs decision-making (not character failure, documented cognitive effect). Substantial documented effects on health, relationships, parenting. Structural condition often.`,
          vocab: [
            {
              word: `effects wellbeing`,
              definition: `Eldar Shafir and Sendhil Mullainathan's research: financial scarcity reduces cognitive bandwidth available for decision-making, planning, self-regulation; people under financial stress make worse decisions partly because stress occupies mental resources (not character failure). Book "Scarcity" (2013). Other effects: chronic cortisol elevation with cardiovascular/immune consequences; worse sleep, relationships, parenting capacity. Children in financially stressed households show cognitive and mental health differences. Structural condition often (job loss, medical emergencies, systemic inequality). Resources: school counselors, social workers, community organizations.`,
              audioPrompt: `Financial stress has substantial documented effects on health and wellbeing, {name}. People in financial precarity experience higher rates of depression, anxiety, physical health problems, relationship difficulties, and reduced life expectancy. Eldar Shafir and Sendhil Mullainathan's research on scarcity demonstrated that financial scarcity itself reduces cognitive capacity: the mental bandwidth available for decision-making, planning, and self-regulation. People under financial stress make worse decisions partly because the stress is occupying mental resources. This isn't a personal failure; it's a documented effect of scarcity on cognition. Their book "Scarcity" from 2013 synthesizes this research. Financial stress raises cortisol chronically, with cardiovascular and immune consequences. It's associated with worse sleep, worse relationship quality, and impaired parenting capacity. Children growing up in financially stressed households show measurable differences in cognitive development, mental health, and life outcomes. Financial stress is a structural condition, not a personal failing. Many factors that produce financial stress aren't individual choices.`,
            },
            {
              word: `cognitive bandwidth`,
              definition: `Shafir and Mullainathan's term for the mental resources available for decision-making, planning, and self-regulation. Their research showed that financial scarcity occupies cognitive bandwidth, leaving less available for other mental work — producing worse decisions not from character failure but from a documented resource constraint.`,
              audioPrompt: `Cognitive bandwidth is Eldar Shafir and Sendhil Mullainathan's term for the mental resources available for decision-making, planning, and self-regulation, {name}. Their research on scarcity, published in their 2013 book of the same name, demonstrated that financial scarcity occupies cognitive bandwidth. When a person is under financial stress — worried about bills, calculating what can and cannot be purchased, managing the anxiety of precarity — those mental operations take up resources that would otherwise be available for other thinking. The result is worse decisions in other domains: not from character failure, not from lack of intelligence, but from a documented resource constraint. People under financial stress make worse decisions partly because the stress is occupying mental resources. The practical implications are significant. For adolescents in households with financial stress, the research helps explain why parents whose capacity may be temporarily reduced are not failing as people — the scarcity itself is affecting their cognition. For the adolescents themselves, the research explains why school performance often declines during household financial stress: not because of personal laziness but because cognitive bandwidth is being occupied by the stress. Recognizing the mechanism shifts response from self-blame to specific support-seeking.`,
            },
            {
              word: `financial precarity`,
              definition: `The condition of lacking reliable access to basic material needs, associated with substantially higher rates of depression, anxiety, physical health problems, relationship difficulties, and reduced life expectancy. Financial precarity is distinct from poverty as an extreme; it includes any condition of ongoing material instability that creates chronic stress.`,
              audioPrompt: `Financial precarity is the condition of lacking reliable access to basic material needs, and research has documented its substantial effects on health and wellbeing, {name}. People in financial precarity experience higher rates of depression, anxiety, physical health problems, relationship difficulties, and reduced life expectancy compared to people with basic financial security. Financial stress raises cortisol — the stress hormone — chronically, with cardiovascular and immune consequences. It's associated with worse sleep, worse relationship quality, more conflict, and impaired parenting capacity. Children growing up in financially stressed households show measurable differences in cognitive development, mental health, and life outcomes — partly from direct effects of material conditions (worse nutrition, worse healthcare, worse housing) and partly from indirect effects through parental stress. Shafir and Mullainathan's scarcity research adds the cognitive dimension: financial precarity occupies cognitive bandwidth that would otherwise be available for planning, decision-making, and self-regulation. The lesson frames financial precarity as a structural condition: many factors that produce it (job loss, medical emergencies, lack of generational wealth, systemic economic inequality) are not primarily individual choices. This framing shifts response from shame to specific support-seeking — school counselors, social workers, community organizations, and mental health resources — which produces better outcomes.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Comparison, Social Media, And Money`,
          paragraphs: [
            `Beyond the absolute level of money you have, money-related comparison has documented effects on wellbeing. People who compare their financial situation unfavorably to others around them experience reduced wellbeing even if their absolute situation is good by objective measures. The comparison itself is what produces the effect.`,
            `Specific research on comparison effects. Richard Easterlin's "Easterlin Paradox" identified that within countries, wealthier people are happier than poorer people; but across time, average happiness in a country doesn't rise much even as everyone becomes substantially wealthier. The interpretation: relative position matters substantially for happiness, not just absolute level. Income inequality research by Richard Wilkinson and Kate Pickett ("The Spirit Level", 2009) documented that more unequal societies have worse outcomes across many measures (health, mental illness, violence, social mobility) even controlling for absolute wealth.`,
            `For your generation specifically. Social media has dramatically intensified comparison effects related to money. Previous generations compared themselves primarily to their immediate community; you're comparing to a curated feed showing the most successful, wealthy, and visible people across the world. The comparison is mathematically rigged: you're seeing the top of distributions presented as if they're the norm. Adolescent and young adult exposure to this comparison environment has been linked to specific mental health effects in research.`,
            `Specific patterns to recognize. "Lifestyle inflation": when income increases produce equivalent expense increases, leaving no actual gain in financial security. "Keeping up" pressure: feeling you need to match peer or media-displayed consumption to be okay. "Fear of missing out" (FOMO) applied to consumer goods: anxiety about not having the latest thing. "Status signaling": buying things primarily for what they communicate to others. Each pattern reduces actual wellbeing while feeling like investing in wellbeing.`,
            `What research shows about responses. Curated social media feeds can be modified (unfollow accounts that reliably make you feel worse; follow accounts that don't trigger comparison). Reducing exposure to comparison-inducing content (advertising, "haul" videos, luxury content) reduces measurable comparison effects. Building wealth comparison-immune sources of identity (relationships, skills, contribution, meaning) buffers against comparison-related effects. Specific awareness of the rigged distribution (the people you see on screens aren't typical) helps recalibrate.`,
            `For 11-12 year olds, building comparison literacy now matters because you're entering peak comparison-vulnerability period (early adolescence to young adulthood). Adults who built comparison literacy late often spent years in patterns of consumption-driven anxiety; building it early prevents those patterns from establishing.`,
          ],
          image: `/voyager-assets/life-wellness/l13-s4-comparison.webp`,
          imageCaption: `Easterlin Paradox: relative position matters substantially. Wilkinson and Pickett "The Spirit Level": unequal societies have worse outcomes. Social media intensifies comparison; rigged distribution (top presented as norm).`,
          vocab: [
            {
              word: `money comparison effects`,
              definition: `Money-related comparison has documented wellbeing effects beyond absolute level. Richard Easterlin's "Easterlin Paradox": within countries wealthier people are happier; across time, average happiness doesn't rise much with growing wealth; relative position matters substantially. Wilkinson and Pickett's "The Spirit Level" (2009): unequal societies have worse outcomes across many measures controlling for absolute wealth. Social media intensified comparison effects: comparing to curated top-of-distribution rather than immediate community. Patterns: lifestyle inflation, keeping up pressure, consumer FOMO, status signaling. Responses: feed modification, exposure reduction, comparison-immune sources of identity.`,
              audioPrompt: `Money comparison effects are documented in research beyond the absolute level of money you have, {name}. People who compare their financial situation unfavorably to others around them experience reduced wellbeing even if their absolute situation is good by objective measures. Richard Easterlin's Easterlin Paradox identified that within countries, wealthier people are happier than poorer people; but across time, average happiness in a country doesn't rise much even as everyone becomes substantially wealthier. The interpretation is that relative position matters substantially for happiness. Income inequality research by Richard Wilkinson and Kate Pickett, in their book "The Spirit Level" from 2009, documented that more unequal societies have worse outcomes across many measures (health, mental illness, violence, social mobility) even controlling for absolute wealth. For your generation specifically, social media has dramatically intensified comparison effects related to money. Previous generations compared themselves primarily to their immediate community; you're comparing to a curated feed showing the most successful, wealthy, and visible people across the world. The comparison is mathematically rigged: you're seeing the top of distributions presented as if they're the norm.`,
            },
            {
              word: `Easterlin Paradox`,
              definition: `Richard Easterlin's finding that within countries, wealthier people are happier than poorer people, but across time, average happiness in a country doesn't rise much even as everyone becomes substantially wealthier. The interpretation is that relative position — where you stand compared to others — matters substantially for happiness, not just absolute income level.`,
              audioPrompt: `The Easterlin Paradox is Richard Easterlin's finding about the relationship between economic growth and happiness, {name}. Within countries, wealthier people are happier than poorer people — that part is what you'd expect. But across time, as a country becomes wealthier overall, average happiness doesn't rise much even when everyone becomes substantially wealthier. Both things are true simultaneously: at any given moment, richer people are happier than poorer people; but across decades of economic growth producing more wealth for everyone, the average happiness level barely moves. The interpretation is that relative position matters substantially for happiness. It's not just how much you have; it's how much you have compared to others around you. When everyone gets wealthier together, no one's relative position changes, so happiness doesn't change much. The paradox helps explain why comparison effects are so powerful: people aren't primarily evaluating their absolute situation but their position relative to their comparison group. For adolescents navigating social media's curated wealth comparisons, the Easterlin Paradox matters because it establishes that comparison to others, not just absolute situation, is a driver of wellbeing — and that social media has dramatically expanded the comparison group to include the wealthiest and most visible people globally.`,
            },
            {
              word: `status signaling`,
              definition: `Buying or displaying goods primarily for what they communicate to others about one's wealth, taste, or social position, rather than for the functional value of the goods themselves. Status signaling is one of the specific patterns the lesson identifies as reducing actual wellbeing while feeling like investment in it.`,
              audioPrompt: `Status signaling is buying or displaying goods primarily for what they communicate to others about social position, wealth, or taste, {name}. It's one of the specific patterns the lesson identifies as reducing actual wellbeing while feeling like investment in it. The mechanism involves comparison effects: status goods derive much of their value from their positional nature — from the fact that not everyone has them, and that having them signals something to those who don't. When everyone gets the same good, the status value evaporates and the acquisition cycle starts again. This produces a specific trap: pursuing goods for their signaling value creates a treadmill in which the signal always needs upgrading as more people acquire the same goods. Research in the comparison tradition (Easterlin, Wilkinson and Pickett) helps explain why this pattern reduces wellbeing: comparison-driven consumption orients toward a reference point that shifts with acquisition, meaning you never arrive. The "keeping up" pressure that the lesson identifies — feeling you need to match peer or media-displayed consumption to be okay — is status signaling in another form. Building identity sources that don't require comparison and signaling to be valuable — relationships, skills, contribution, meaning — produces wellbeing in ways that status signaling structurally cannot.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Cases`,
          paragraphs: [
            `In the three cases that follow, young people face different money-related wellbeing situations. None of the cases are about extreme financial hardship or extreme wealth; each is workable through specific frameworks. The skill being built is recognizing what's actually happening in each situation and what would actually serve the person.`,
            `One framing as you work. The cases test whether you can integrate the four frameworks from the magazine sections: money-and-wellbeing research (security matters, diminishing returns above), materialism research (value orientation effects on wellbeing), financial stress research (scarcity reduces bandwidth, structural conditions), and comparison research (relative position effects, social media intensification).`,
            `Another framing. Each case involves a specific cognitive reframing as well as specific practical interventions. The reframing matters because the pop framings of money-and-wellbeing are largely wrong: "money doesn't buy happiness" is wrong (financial security does buy substantial wellbeing); "more is always better" is wrong (diminishing returns are real). Accurate framing produces better responses than either pop version.`,
            `One last framing. Money decisions you make now shape decades of relationship with money and wellbeing. The patterns established in adolescence (around consumption, comparison, security, materialism, meaning) substantially predict adult financial wellbeing patterns. Building research-grounded framework now produces protection that's hard to retrofit later.`,
          ],
          image: `/voyager-assets/life-wellness/l13-s5-before.webp`,
          imageCaption: `Three cases integrating four frameworks. Pop framings of money-and-wellbeing largely wrong. Patterns established in adolescence predict adult financial wellbeing patterns.`,
          vocab: [
            {
              word: `integrated money-wellbeing framework`,
              definition: `Mature money-wellbeing literacy integrates four research frameworks. Money-and-wellbeing (Kahneman, Killingsworth): security matters substantially, diminishing returns above. Materialism (Kasser, Gilbert): value orientation toward material acquisition reduces wellbeing through hedonic adaptation, comparison, displacement, identity confusion. Financial stress (Shafir, Mullainathan): scarcity reduces cognitive bandwidth, often structural condition not character failure. Comparison (Easterlin, Wilkinson and Pickett): relative position matters substantially, social media intensifies through curated top-of-distribution exposure. Each framework applies to different situations.`,
              audioPrompt: `Integrated money-wellbeing framework is what mature money-wellbeing literacy involves, {name}. It integrates four research frameworks rather than relying on pop framings that are largely wrong. The money-and-wellbeing framework from Kahneman, Deaton, and Killingsworth: financial security matters substantially, diminishing returns above security. The materialism framework from Kasser and Gilbert: value orientation toward material acquisition reduces wellbeing through hedonic adaptation, comparison, displacement, and identity confusion. The financial stress framework from Shafir and Mullainathan: scarcity reduces cognitive bandwidth and is often a structural condition rather than character failure. The comparison framework from Easterlin and Wilkinson and Pickett: relative position matters substantially for happiness, and social media has intensified comparison through curated top-of-distribution exposure. Each framework applies to different situations and produces different specific responses.`,
            },
            {
              word: `comparison immunity`,
              definition: `Building sources of identity and wellbeing that do not depend on comparison to others for their value — relationships, skills, contribution, meaning. Comparison-immune sources protect against the documented wellbeing effects of money-related comparison, particularly from social media exposure to curated top-of-distribution wealth.`,
              audioPrompt: `Comparison immunity refers to building sources of identity and wellbeing that don't require comparison to others for their value, {name}. The lesson identifies this as one of the responses to money-related comparison effects. Some sources of value are inherently relational: a brand's status value depends on others not having it, a lifestyle's appeal depends on others not being able to match it. These sources are structurally vulnerable to comparison — they only work relative to a reference group, and the reference group is subject to shift. Other sources of value are not primarily relational in this way: a skill you've developed, a close relationship, contribution you've made, meaning you've found in your work. These produce wellbeing that doesn't depend on whether others have less. Research suggests that building identity around comparison-immune sources protects against the wellbeing effects of money-related comparison. For adolescents entering peak comparison-vulnerability period in early adolescence through young adulthood, and navigating social media environments that deliberately maximize comparison-inducing exposure, developing comparison-immune sources of identity is one of the most protective things available. The lesson frames this as a specific intervention alongside feed modification and distribution awareness: all three together address the comparison environment at multiple levels.`,
            },
            {
              word: `rigged distribution`,
              definition: `The lesson's term for the mathematically skewed nature of social media comparison environments: adolescents are comparing themselves to a curated feed showing the top of wealth and lifestyle distributions presented as if they represent the norm. The comparison is rigged because the reference group is not a representative sample but a selected extreme.`,
              audioPrompt: `The rigged distribution is the lesson's term for the mathematically skewed nature of social media comparison environments, {name}. Previous generations compared themselves primarily to their immediate community — the people they lived near, went to school with, saw in daily life. That community was roughly representative of the range of economic and lifestyle situations in their area. Social media comparison environments work differently: the feed shows a curated selection of the most successful, wealthy, and visible people across the world. Influencers, wealthy peers, luxury content, lifestyle accounts. The people being shown aren't typical; they're selected from the top of distributions. But they're presented as if they represent normal or achievable standards. The comparison is mathematically rigged: you're measuring yourself against an extreme that's presented as if it's the norm. More money would not solve this — there's always more above any new level, and the feed will always find more above wherever you are. Specific awareness of this helps recalibrate: the people you're seeing on screens are not typical; the distribution being shown is not representative. Reducing exposure to comparison-inducing content (feed modification, the environmental design principle applied to comparison) addresses the comparison environment structurally rather than trying to build willpower against rigged content.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l13-case-study`,
          type: `case-study`,
          headline: `Three Money Situations`,
          intro: `{name}, three real money-and-wellbeing situations. For each, identify what's actually happening and what would actually serve the person.`,
          cases: [
            {
              id: `case-1`,
              title: `Family Financial Stress`,
              context: `Maya's family has been struggling financially for the past year. Her dad lost his job; her mom is working two jobs; bills are tight. Maya is noticing things she didn't before: parents stressed and snapping at each other, no money for things her friends do, conversations cut off when she walks into rooms. She's started feeling guilty for needing things (clothes that fit, school supplies) and has started saying she doesn't want stuff even when she does. She's also doing worse in school recently and feels constantly tired. She thinks she's failing her parents by struggling.`,
              question: `What's actually happening with Maya?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Maya is being a brat about money. She should just work harder and stop complaining.`,
                  outcome: `This blames Maya for what's actually a documented effect of financial stress on a whole household. The "just work harder" framing applied to financial stress reflects misunderstanding of what scarcity does. Shafir and Mullainathan's research shows financial scarcity itself reduces cognitive bandwidth for Maya's parents AND for Maya. Her decline in school performance and constant tiredness aren't laziness; they're documented effects of household financial stress on adolescent cognition and wellbeing. Blaming her makes the situation worse.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `What Maya is experiencing is documented effects of household financial stress, not personal failure. Specific frameworks help. Financial stress (Shafir and Mullainathan): scarcity reduces cognitive bandwidth for everyone in the household, including parents whose capacity may be temporarily reduced AND Maya, whose school performance decline and tiredness are documented effects, not laziness. Her guilt about needing things is also a documented pattern: kids in financially stressed households often internalize the stress in ways that include suppressing legitimate needs. What might help Maya. First, recognize that what's happening isn't personal failure on anyone's part: not hers, not her parents'. Financial stress is a structural condition that's affecting the whole household. Second, the suppression of legitimate needs (saying she doesn't want things she does want) usually makes things worse, not better; it stores resentment and signals to parents that the kid is parenting them. Honest, age-appropriate communication about what she needs (basic things like clothes that fit) is appropriate. Third, talk to a school counselor about the situation; they often know about resources families don't know about (school supplies assistance, free meal programs, mental health support, community resources). Many communities have specific support for families in financial stress that families often don't access. Fourth, take care of basics in her control (sleep, food, social connection, school work as she can) which buffers against the worst effects. Fifth, this is a temporary structural condition, not a permanent identity; framing it that way matters. If the stress is producing significant mental health effects (depression, severe anxiety, persistent inability to function), that warrants professional support: school counselor or doctor can help connect.`,
                  outcome: `This is the research-informed response. Names financial stress as documented condition affecting cognition and wellbeing. Validates Maya's experience without blaming her. Distinguishes legitimate need expression from being demanding. Provides specific resource pathway (school counselor, community resources). Includes appropriate mental health escalation. The reframing from "failing my parents" to "this is a documented stress condition affecting everyone" enables both Maya and her parents to respond more effectively.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Maya should pretend everything is fine and never mention money or needs to her parents.`,
                  outcome: `This is essentially what Maya is already doing, and it's producing real harm (declining school performance, exhaustion, guilt, suppression patterns). The "be strong and never mention it" approach to family financial stress generally doesn't work and often makes things worse. Honest age-appropriate communication produces better outcomes; suppression stores resentment and prevents accessing real help. Some families benefit from explicit conversation about what the financial situation is and what's possible.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates financial stress effects on adolescent wellbeing. The research (Shafir, Mullainathan) shows scarcity itself reduces cognitive bandwidth across the household; Maya's school decline and exhaustion are documented effects, not character failure. The intervention isn't "work harder" or "suppress needs" but recognizing the structural condition, accessing community resources through school counselor, taking care of basics, distinguishing legitimate need expression from being demanding.`,
            },
            {
              id: `case-2`,
              title: `Wealth Without Expected Happiness`,
              context: `Liam's family is wealthy. He has access to almost anything he wants: latest phones, gaming equipment, brand clothes, travel. He's been noticing recently that getting new things produces a brief excitement that fades within days. He's surrounded by friends with similar access, and they're all chasing the next thing. He feels vaguely empty a lot of the time, anxious about the next acquisition, and disconnected from things that used to matter (a sport he loved, friendships outside the wealth bubble, time outside). He's wondering if something's wrong with him because he should be happy.`,
              question: `What's actually happening with Liam?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Liam is just spoiled and ungrateful. He should appreciate what he has.`,
                  outcome: `This dismisses Liam's accurate observation of his own experience and reinforces the pattern that's producing his unhappiness. The research is clear: material acquisition produces less lasting happiness than people predict, with effects fading rapidly (hedonic adaptation); materialism as a value orientation predicts lower wellbeing even among wealthy people; pursuing acquisition displaces other sources of meaning. Liam's "vaguely empty" feeling is a documented pattern in materialism research, not a character flaw. "Should be happy" framing actually makes the pattern worse by adding guilt to the underlying problem.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `What Liam is experiencing is well-documented in materialism research (Tim Kasser at Knox College, decades of studies). Materialistic values predict lower wellbeing even controlling for income; wealthy materialistic people have worse wellbeing than less-materialistic people at the same income level. The specific patterns Liam describes are textbook: hedonic adaptation (the satisfaction from acquisition fades rapidly, requiring more for the same effect); displacement (time and attention going to acquisition isn't going to other sources of meaning, which is why he's disconnected from sport and friendships); identity confusion (defining self through acquisition produces fragile identity dependent on continued acquisition); comparison (positional goods require constantly comparing). The "vaguely empty" feeling is what materialism research has documented. What might help Liam. First, recognize that his observation is accurate, not a character flaw. The research validates what he's noticing. Second, Daniel Gilbert's affective forecasting research shows experiences reliably produce more lasting happiness than material goods; spending on others produces more happiness than spending on self. Shifting some money/time toward experiences and contribution rather than acquisition produces measurable wellbeing gains. Third, the displacement effect suggests rebuilding what's been displaced: the sport, the friendships outside the wealth bubble, time outside. These produce wellbeing in ways acquisition can't. Fourth, his current social environment is largely reinforcing the materialistic value orientation; expanding social connections outside that bubble matters. Fifth, the vague emptiness combined with anxiety about next acquisition is what research has documented as a specific pattern; it's responsive to specific interventions rather than just "appreciate what you have."`,
                  outcome: `This is the research-informed response. Validates Liam's accurate observation. Names the documented patterns (hedonic adaptation, displacement, identity confusion, comparison). Provides specific research-based interventions (experiences over goods, spending on others, rebuilding displaced activities, expanding social environment). The reframing from "should be happy" to "you're experiencing documented effects of materialism, here's what helps" empowers Liam to address the actual situation.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Liam should buy bigger and more expensive things to feel better.`,
                  outcome: `This is exactly what hedonic adaptation produces: escalating acquisition to maintain the same feeling. Research clearly shows this strategy doesn't work; bigger purchases produce slightly larger but equally brief excitement, with the same fade. The intensification of acquisition is what materialism predicts and what makes the underlying problem worse over time. The research supports the opposite intervention: experiences, contribution, displaced activities, expanding identity sources.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates materialism research applied to a wealthy adolescent's experience. The "vaguely empty" feeling among material abundance is a documented pattern (Kasser et al). Specific patterns: hedonic adaptation, displacement, identity confusion, comparison. Interventions: experiences over goods, spending on others, rebuilding displaced activities, expanding identity sources. The case shows that more money doesn't solve wellbeing problems above security; materialism specifically reduces wellbeing.`,
            },
            {
              id: `case-3`,
              title: `Comparison And Social Media`,
              context: `Aisha's family is comfortable; they have what they need and some of what they want. Aisha follows accounts on social media that show wealthy peers and influencers: their clothes, vacations, brands, lifestyles. She's noticed that scrolling through these accounts reliably makes her feel worse about her own life, but she keeps doing it. She's started feeling resentful of her parents (who are doing fine), embarrassed by family vacations that don't match what she sees online, and obsessed with brands she didn't care about a year ago. She thinks she just needs more money.`,
              question: `What's actually happening with Aisha?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Aisha just needs more money. Her parents should give her more or she should earn more.`,
                  outcome: `This misses what's actually happening to Aisha. Her family is comfortable; her absolute situation is good by most measures. What's reducing her wellbeing is comparison effects (Easterlin Paradox, Wilkinson and Pickett research) intensified by social media exposure to curated top-of-distribution content. The "just need more money" framing is exactly what the comparison environment is teaching her, and it's mathematically impossible to win; no amount of money would solve this because there's always more curated content showing more wealth above her. Her parents giving her more or her earning more doesn't address the underlying comparison dynamic.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Aisha is in a well-documented comparison pattern intensified by social media. Specific frameworks: comparison research (Easterlin Paradox, Wilkinson and Pickett) shows relative position matters substantially for wellbeing beyond absolute level. Social media has dramatically intensified comparison effects: previous generations compared to immediate community; Aisha is comparing to curated feed showing top of wealth distribution across the world. The comparison is mathematically rigged; she's seeing the top presented as if normal. The wellbeing decline she's experiencing is the documented effect of this exposure pattern, not a real reflection of her absolute situation. What might help. First, recognize that the comparison environment is the problem, not her income or her parents. Her family is comfortable; her wellbeing is being reduced by something other than absolute situation. Second, modify her feed actively. Unfollow accounts that reliably make her feel worse. Follow accounts that don't trigger comparison. Reduce exposure to advertising, "haul" videos, luxury content, lifestyle influencers. This is environmental design (from Lesson 12) applied to comparison. Third, recognize the rigged distribution: the people she's seeing aren't typical; the top is being presented as norm. Specific awareness of this helps recalibrate. Fourth, build wealth-comparison-immune sources of identity: relationships, skills, contribution, meaning, things that don't require comparison to be valuable. Fifth, the resentment toward parents and embarrassment about family situation are documented patterns of what this comparison environment produces in adolescents; recognizing them as engineered effects rather than as authentic feelings shifts the response. Sixth, more money would not solve this; the comparison dynamic always has more above the new level. The intervention is at the comparison environment level, not the absolute money level.`,
                  outcome: `This is the research-informed response. Names the comparison pattern accurately. Distinguishes Aisha's actual situation (comfortable) from her comparison-induced experience (worse). Provides specific interventions (feed modification, distribution awareness, comparison-immune identity sources). Names the engineered nature of the effects. The reframing from "need more money" to "the comparison environment is the problem" addresses the actual cause.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Aisha should follow MORE wealth and luxury accounts to motivate herself.`,
                  outcome: `This is exactly what produces and intensifies the documented comparison-related wellbeing effects. Research consistently shows that increased exposure to wealth/luxury content produces more comparison-related distress, not less. The "motivation" framing is a misuse of how comparison works; comparison-driven motivation tends to produce anxiety and dissatisfaction rather than sustainable progress. The intervention is reducing exposure, not increasing it.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates comparison effects intensified by social media. Aisha's wellbeing is being reduced by curated top-of-distribution exposure, not absolute situation. Interventions: feed modification (environmental design applied to comparison), distribution awareness (recognizing rigged exposure), comparison-immune identity sources. The reframing from "need more money" to "the comparison environment is the problem" addresses the actual cause; no amount of money solves comparison dynamics.`,
            },
          ],
          reflectionPrompt: `All three cases involve specific cognitive reframings as well as specific interventions. What's common about how research-grounded framings shift the responses?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the money-and-wellbeing research actually show?`,
              options: [
                `Money buys happiness`,
                `Financial security matters enormously for wellbeing (precarity is harmful); above security, additional income produces substantially smaller wellbeing effects with diminishing returns; Kahneman-Deaton 2010 found plateau around $75K, Killingsworth 2021 found continued modest gains, 2023 collaborative paper reconciled; specific subset shows plateau or decline above threshold; nuanced picture, pop framings simplified`,
                `Random`,
                `Money doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `The research is nuanced. Both pop framings ("money doesn't buy happiness" and "more is always better") are wrong. Financial security buys substantial wellbeing; above security, more money helps modestly with diminishing returns. The specifics matter for how to think about money decisions.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does Tim Kasser's materialism research show?`,
              options: [
                `Random`,
                `Materialistic values predict lower wellbeing, more anxiety/depression, worse relationships, less life satisfaction; pattern holds controlling for income (materialistic poor and materialistic rich both have worse wellbeing than less-materialistic people at same income); mechanisms include hedonic adaptation, comparison, displacement, identity confusion; decades of research across cultures`,
                `Just one study`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Kasser's research has been replicated extensively. Materialism is a specific value orientation different from having money or wanting financial security. The orientation itself, regardless of income level, predicts worse wellbeing. This is one of the most consistent findings in wellbeing research.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does Shafir and Mullainathan's scarcity research show?`,
              options: [
                `Just be smart`,
                `Financial scarcity reduces cognitive bandwidth available for decision-making, planning, self-regulation; people under financial stress make worse decisions partly because stress occupies mental resources (not character failure, documented cognitive effect); book "Scarcity" (2013); also documents effects on cortisol, sleep, relationships, parenting capacity, child outcomes`,
                `Random`,
                `Just feelings`,
              ],
              correctIndex: 1,
              explanation: `The scarcity research is important because it reframes financial stress effects from character failure to documented cognitive effect. The "just work harder" framing common in pop content misunderstands what scarcity actually does to cognition.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did Daniel Gilbert's affective forecasting research establish?`,
              options: [
                `Random`,
                `Humans are systematically bad at predicting what will make them happy; material goods reliably produce less lasting happiness than people predict; experiences reliably produce more lasting happiness than people predict; spending on others reliably produces more happiness than spending on self; counter-intuitive but robust findings`,
                `Just luck`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The findings are counter to most people's intuition but have been replicated across many studies. Knowing about affective forecasting errors helps make better decisions about how to spend money for actual wellbeing.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the Easterlin Paradox?`,
              options: [
                `Random`,
                `Within countries, wealthier people are happier than poorer people; but across time, average happiness in a country doesn't rise much even as everyone becomes substantially wealthier; interpretation: relative position matters substantially for happiness, not just absolute level; named for economist Richard Easterlin`,
                `Just paradox`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Easterlin Paradox is one of the most influential findings on money and happiness. It explains why economic growth doesn't necessarily produce more happiness even when everyone benefits; relative position is doing much of the work.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did Wilkinson and Pickett's "The Spirit Level" document?`,
              options: [
                `Random`,
                `More unequal societies have worse outcomes across many measures (health, mental illness, violence, social mobility, education, drug use, teen pregnancy) even controlling for absolute wealth; book published 2009 with extensive cross-country data; key finding that inequality itself produces social harms beyond absolute poverty`,
                `Just wealth`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The book has been influential and controversial. The core finding (that inequality has independent effects beyond absolute poverty) has been broadly supported in subsequent research even where specific claims have been contested.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How has social media changed money-related comparison?`,
              options: [
                `Same as always`,
                `Previous generations compared primarily to immediate community; social media exposure produces comparison to curated top-of-distribution wealth/lifestyle across the world; the comparison is mathematically rigged; top presented as norm; adolescent and young adult exposure linked to documented mental health effects; reducing exposure produces measurable comparison reduction`,
                `Random`,
                `Just slightly`,
              ],
              correctIndex: 1,
              explanation: `The change is substantial and unprecedented for your generation. Previous comparison environments were structurally limited by physical community; current comparison environments are designed for maximum exposure to top-of-distribution content. Specific awareness of this matters.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What patterns reduce money-related wellbeing even when absolute money is fine?`,
              options: [
                `Random`,
                `Lifestyle inflation (income increases produce equivalent expense increases, no actual security gain); keeping-up pressure (matching peer/media consumption); consumer FOMO (anxiety about not having latest); status signaling (buying for what it communicates); each pattern reduces actual wellbeing while feeling like investing in wellbeing`,
                `Just spending`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `These patterns are documented and largely unconscious. Recognizing them as patterns rather than as normal wanting things shifts response. Each can be addressed specifically once recognized.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If you're unhappy and you have enough money for basic security, more money will reliably solve the unhappiness.`,
              correctAnswer: false,
              explanation: `False. Above financial security, additional income produces substantially smaller wellbeing effects. If the underlying issue is materialism, comparison, displacement of meaning sources, or relationship/health issues, more money won't address it. Research consistently shows that what produces wellbeing above security is largely non-monetary: relationships, meaning, health, contribution, experiences.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'd be so much happier if my family had more money. Look at all the things I can't have." Based on this lesson, what should you point out?`,
              options: [
                `"True, get more money"`,
                `"The relationship between money and happiness is more complicated than that. Several specific things. First, the research from Kahneman, Killingsworth, and others shows that financial security matters substantially for wellbeing, but above security, more money produces substantially smaller wellbeing effects with diminishing returns. If your family has financial security, the path to your happiness probably isn't more money. Second, what you're describing ("all the things I can't have") is largely comparison effect. Research from Easterlin, Wilkinson and Pickett shows relative position matters substantially for happiness, and social media has dramatically intensified comparison by exposing you to curated top-of-distribution content. The comparison is mathematically rigged: you're seeing the top presented as norm. More money wouldn't solve this; there's always more above any new level. Third, materialism research from Tim Kasser shows that orientation toward acquisition specifically reduces wellbeing even controlling for income. People with more materialistic values have lower wellbeing whether they're poor or wealthy. Pursuing 'all the things I can have' is associated with worse wellbeing, not better. Fourth, what actually predicts wellbeing above security: relationships, experiences (Gilbert's research shows experiences produce more lasting happiness than goods), meaning, contribution, health. These aren't bought with money primarily. Specific things you could try: modify your social media feed to reduce comparison-inducing content; build identity sources that don't require comparison to be valuable; invest time in relationships and meaningful activities rather than acquisition. The framing 'more money would solve this' is exactly what the comparison environment is teaching, and it doesn't work; adults who pursue this find their unhappiness moves with them as their income increases. The intervention is at the comparison/materialism level, not the absolute money level."`,
                `"Just get richer"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied money-wellbeing literacy. Reference all four frameworks (money-and-wellbeing diminishing returns, materialism, comparison, what actually produces wellbeing). Don't endorse the "more money would solve this" framing because it doesn't match the research. Provide specific alternatives.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for money and happiness? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: how much of your current wellbeing is being affected by money-related comparison? Where does it show up?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with sophisticated money-wellbeing literacy across decades, what does that protect at 30, 50, 80?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific money-related pattern you notice in yourself (lifestyle inflation, comparison, materialism, etc.). Apply the frameworks. What might help?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The research is largely from Western/US contexts. How might money-wellbeing relationships look different in cultures with different values orientations?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Audit your social media feed for one week. Which accounts reliably make you feel worse about money/lifestyle? What happens if you unfollow them?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Money-wellbeing patterns at 12 shape decades of financial relationship and life satisfaction. Two paths.`,
          familyActivity: {
            title: `The Family Money-Wellbeing Conversation`,
            duration: `45 minutes`,
            description: `Share the research findings (money-wellbeing diminishing returns, materialism, comparison, scarcity if relevant). Most adults absorbed money framings from their own families without examining them; many families benefit from explicit conversation about money, comparison, materialism, and wellbeing. Consider establishing family practices: explicit comparison literacy (recognizing engineered nature of social media comparison), spending priorities aligned with research (experiences and others over goods and self), family communication about money that's age-appropriate.`,
          },
          projectOption: {
            title: `Read on money and wellbeing, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Tim Kasser's "The High Price of Materialism" (materialism research, accessible synthesis), Shafir and Mullainathan's "Scarcity" (cognitive effects of financial stress), Wilkinson and Pickett's "The Spirit Level" (inequality and outcomes, denser but foundational), or Daniel Gilbert's "Stumbling on Happiness" (affective forecasting). Apply concepts during reading. Write 1,500 words on what you learned about money and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Money-wellbeing literacy at 12 protects against decades of comparison-driven anxiety and materialism patterns that adults often spend years undoing.`,
          },
          identityQuestion: `If you become someone with research-grounded money-wellbeing framework (distinguishing security from accumulation, recognizing materialism and comparison effects, building wellbeing through what actually produces it), what does that change about your relationship with money across decades?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who builds wellbeing through what actually produces it, not what comparison says.`,
            `A person who recognizes materialism and comparison effects in their own thinking.`,
            `Someone who distinguishes financial security from accumulation.`,
          ],
          saveKey: `identity_responses_lw_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteenth Life Wellness lesson done. You now have four research frameworks on money and wellbeing (Kahneman/Killingsworth on diminishing returns above security; Kasser on materialism; Shafir/Mullainathan on financial stress; Easterlin/Wilkinson/Pickett on comparison), specific patterns to recognize, and explicit framework against pop framings. That's framework most adults navigating money decisions have never explicitly built. Seven lessons to go. Next time: tech and screen use. Source Evaluation format. Let's go. — Terra`,
          badge: `money-wellness-literate`,
          badgeName: `Money-Wellness Literate`,
          xpEarned: 75,
          competencies: [
            `Knows money-and-wellbeing research (Kahneman, Deaton, Killingsworth)`,
            `Articulates materialism effects on wellbeing (Kasser)`,
            `Recognizes financial stress as documented cognitive condition (Shafir, Mullainathan)`,
            `Identifies money comparison effects intensified by social media`,
            `Applies integrated framework to specific money-wellbeing situations`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Tech and Screen Use`,
            hook: `Three tiers of sources on tech and adolescent wellbeing. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L13 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
