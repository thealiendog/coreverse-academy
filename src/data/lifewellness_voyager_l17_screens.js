// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L17 — Meaning and Purpose
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Meaning in Life Research, Wellbeing
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (contribution / connection / self-development)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l17-v1";

const LIFEWELLNESS_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-17`,
      title: `Meaning and Purpose`,
      duration: 35,
      xpReward: 75,
      badge: `meaning-literate`,
      badgeName: `Meaning Literate`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, meaning and purpose are among the most important wellness topics that pop content largely doesn't address. The research is striking: meaning in life predicts wellbeing more strongly than almost any other factor, including happiness itself; people with strong sense of meaning have better mental health, physical health, longevity, and resilience through difficulty. Yet most adolescents grow up with little explicit framework for thinking about meaning. Today we work through three serious positions on what produces meaning: meaning through contribution to something larger than yourself, meaning through deep relationships, and meaning through self-development and authentic expression. Each has substantial defenders, philosophical pedigree, and research support. By the end you'll have framework for one of the most consequential wellness questions across a life.`,
          headline: `Meaning and Purpose`,
          subtitle: `Three serious positions. Research-grounded. Among the most consequential wellness topics.`,
          visual: `/voyager-assets/life-wellness/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Meaning Research Actually Shows`,
          paragraphs: [
            `Meaning in life has become one of the most researched topics in psychology over the past several decades. The findings are striking enough to warrant taking the topic seriously rather than treating it as vague self-help.`,
            `Specific findings. People with strong sense of meaning in life have better mental health outcomes (lower depression, anxiety, suicidality), better physical health outcomes (longevity, immune function, recovery from illness), more resilience through difficulty (better functioning after major losses, traumas, life transitions), and higher life satisfaction. The effects are large and consistent across many studies. Meaning in life predicts wellbeing more strongly than many factors that get more attention (income above security, life events, even reported happiness).`,
            `What "meaning in life" specifically refers to in research. Michael Steger and colleagues developed the most-used measure (Meaning in Life Questionnaire) and the most-influential conceptual framework: meaning has three components. Comprehension (life makes sense to me; I can make sense of my experiences). Purpose (life has direction; I'm working toward things that matter to me). Significance/Mattering (my life has worth; what I do matters; I matter). All three components contribute to overall meaning; weakness in any one reduces overall meaning.`,
            `Roy Baumeister's "Meanings of Life" (1991) and subsequent research clarified an important distinction: meaning and happiness aren't the same thing. People can have happy lives with low meaning (pleasant but feeling empty), meaningful lives with substantial difficulty (purpose-driven through hardship), both, or neither. The most-cited research (Baumeister, Vohs, Aaker, Garbinsky 2013) found that meaning and happiness have overlapping but distinct features: happiness is more focused on present, on getting needs met, on receiving from others; meaning is more focused on past/future integration, on giving to others, on connecting to something larger.`,
            `For adolescents specifically. Research on adolescent meaning has documented that adolescents who develop sense of meaning earlier have better trajectories across many measures including academic performance, mental health, life satisfaction. Identity development during adolescence is partly about building meaning frameworks; this happens whether or not it's explicit. Building deliberate framework now produces protection that's harder to retrofit later.`,
            `One important framing. Meaning is not "found" the way pop content sometimes suggests (as if it's somewhere out there waiting to be discovered). Meaning is constructed through specific activities, relationships, and frameworks. Different paths produce meaning; the question isn't which path is right universally but which path produces meaning for you given your specific situation and values.`,
          ],
          image: `/voyager-assets/life-wellness/l17-s1-research.webp`,
          imageCaption: `Meaning in life research (Steger, Baumeister, others). Three components (comprehension, purpose, significance/mattering). Meaning ≠ happiness; both matter. Predicts mental health, physical health, longevity, resilience.`,
          vocab: [
            {
              word: `life research`,
              definition: `Substantial research literature: meaning predicts mental health (depression, anxiety, suicidality), physical health (longevity, immune function), resilience, life satisfaction more strongly than many factors getting more attention. Michael Steger's Meaning in Life Questionnaire and conceptual framework: three components: comprehension (life makes sense), purpose (life has direction), significance/mattering (life has worth, I matter). Baumeister "Meanings of Life" 1991 and subsequent research: meaning and happiness distinct (overlapping but different); meaning focused on past/future integration, giving, connecting to larger. Meaning constructed through activities/relationships/frameworks, not "found."`,
              audioPrompt: `Meaning in life research has become one of the most researched topics in psychology over the past several decades, {name}. The findings are striking. People with strong sense of meaning in life have better mental health outcomes (lower depression, anxiety, suicidality). Better physical health outcomes (longevity, immune function, recovery from illness. More resilience through difficulty. Higher life satisfaction. The effects are large and consistent across many studies. Meaning in life predicts wellbeing more strongly than many factors that get more attention, including income above security and even reported happiness. Michael Steger and colleagues developed the most-used measure, the Meaning in Life Questionnaire, and the most-influential conceptual framework: meaning has three components. Comprehension: life makes sense to me; I can make sense of my experiences. Purpose: life has direction; I'm working toward things that matter to me. Significance or mattering: my life has worth; what I do matters; I matter. All three components contribute to overall meaning. Roy Baumeister's "Meanings of Life" from 1991 clarified an important distinction: meaning and happiness aren't the same thing.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Meaning Through Contribution`,
          paragraphs: [
            `The first serious position is that meaning comes primarily from contributing to something larger than yourself: a cause, community, work, mission, family, or tradition. The framing has both philosophical and research pedigree.`,
            `Defenders include Viktor Frankl, whose "Man's Search for Meaning" (1946) is one of the most influential books ever written on the topic. Frankl was a psychiatrist who survived the Nazi concentration camps and used the experience to develop logotherapy, a therapy focused on meaning. His central claim: humans need purpose and contribution to flourish, and even in the most extreme suffering, those who maintained sense of purpose were more likely to survive psychologically. Other defenders include the major religious traditions (which generally frame meaning through service to God, community, or transcendent purpose), philosophers in the prosocial and ethical traditions, and research traditions documenting positive effects of prosocial behavior.`,
            `Specific research supporting the position. Self-determination theory (Deci and Ryan): humans have basic psychological needs including autonomy, competence, and relatedness; relatedness specifically includes connection to something larger. Research on volunteerism and prosocial behavior: people who regularly contribute to others or causes have better mental health, longevity, and life satisfaction even controlling for many other factors. Research on "calling" (sense that one's work serves something beyond self-interest) predicts substantially better work outcomes and life satisfaction.`,
            `Mihaly Csikszentmihalyi's research on flow (the state of full absorption in challenging meaningful activity) found that the most reliably flow-producing activities involve contribution to something beyond self. Flow itself predicts substantial wellbeing benefits, and contribution-oriented flow seems particularly potent.`,
            `What this position implies practically. Identify what you can contribute to that you actually care about (causes, communities, family, work, art that serves others). Make ongoing contribution a regular practice rather than occasional gesture. Recognize when activities serve only self vs serve beyond self; the latter produces more meaning even when less pleasant. Build skills that increase contribution capacity over time. Accept that contribution-oriented meaning often involves real cost (time, money, effort) that pure self-focused life doesn't.`,
            `Strengths of the position. Strongest research support across many measures. Philosophical pedigree across most cultures and traditions. Provides direction during difficulty (Frankl: meaning sustains during suffering). Builds on humans' natural orientation toward connection and contribution.`,
            `Limits of the position. Can be co-opted into self-sacrifice that produces burnout (giving until empty doesn't sustain). Can be confused with people-pleasing or external validation. Some traditions of "service" have been used to suppress legitimate needs of marginalized people (telling oppressed groups they should serve their oppressors). Requires care about what you're contributing to (contribution to harmful causes doesn't produce meaning in the relevant sense).`,
          ],
          image: `/voyager-assets/life-wellness/l17-s2-contribution.webp`,
          imageCaption: `Position 1: meaning through contribution. Frankl "Man's Search for Meaning." Self-determination theory, volunteerism research, flow (Csikszentmihalyi). Strongest research support. Limits: burnout risk, self-sacrifice misuse.`,
          vocab: [
            {
              word: `contribution position`,
              definition: `Framework: meaning comes primarily from contributing to something larger than yourself (cause, community, work, mission, family, tradition). Viktor Frankl's "Man's Search for Meaning" 1946: humans need purpose and contribution to flourish, even in extreme suffering. Religious traditions, prosocial/ethical philosophical traditions. Research: self-determination theory (Deci & Ryan): relatedness as basic need; volunteerism/prosocial behavior research; "calling" research; Csikszentmihalyi's flow research (contribution-oriented flow particularly potent). Strengths: strongest research support; philosophical pedigree across cultures; provides direction during difficulty. Limits: burnout/self-sacrifice misuse; can be confused with people-pleasing; requires care about what you contribute to.`,
              audioPrompt: `The meaning through contribution position argues that meaning comes primarily from contributing to something larger than yourself, {name}. A cause, community, work, mission, family, or tradition. Defenders include Viktor Frankl, whose book "Man's Search for Meaning" from 1946 is one of the most influential books ever written on the topic. Frankl was a psychiatrist who survived the Nazi concentration camps and used the experience to develop logotherapy, a therapy focused on meaning. His central claim: humans need purpose and contribution to flourish, and even in the most extreme suffering, those who maintained sense of purpose were more likely to survive psychologically. Other defenders include the major religious traditions, which generally frame meaning through service to God, community, or transcendent purpose, and research traditions documenting positive effects of prosocial behavior. Specific research supporting the position includes self-determination theory from Deci and Ryan, identifying relatedness as a basic psychological need. Research on volunteerism and prosocial behavior consistently shows that people who regularly contribute to others or causes have better mental health, longevity, and life satisfaction even controlling for many other factors.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Meaning Through Deep Relationships`,
          paragraphs: [
            `The second serious position is that meaning comes primarily from deep relationships: close family, deep friendship, romantic partnership, mentorship, community. The framework has both philosophical and research pedigree.`,
            `Defenders include Martin Buber, whose "I and Thou" (1923) is foundational philosophical work on what genuine encounter between persons involves; the philosophical traditions that emphasize friendship and community (Aristotle on friendship of virtue, covered in L10; communitarian philosophers); attachment theory researchers (whose work on how early relationships shape later capacity for meaning is foundational); and contemporary positive psychology researchers including those at the Harvard Study of Adult Development.`,
            `Specific research supporting the position. The Harvard Study of Adult Development is the longest-running study of human flourishing, following men for over 80 years (extending later to women and diverse groups). Its central finding, summarized by current director Robert Waldinger: the most important predictor of long-term wellbeing across measures is the quality of close relationships, not money, achievement, or fame. The Holt-Lunstad loneliness research covered in L10: lack of social connection has health effects comparable to smoking 15 cigarettes per day; deep relationships are biologically protective.`,
            `Research on attachment: secure attachment (the kind of relationship where you can both depend on someone and develop autonomously) predicts substantially better outcomes across mental health, physical health, achievement, and resilience. Multiple lines of research converge on relationships as one of the strongest predictors of wellbeing.`,
            `What this position implies practically. Invest substantially in close relationships across decades. Prioritize depth (small number of deep connections) over breadth (many shallow). Build skill in being known and knowing others (vulnerability, presence, listening, repair after conflict). Recognize that relationships require ongoing investment; they don't sustain on autopilot. Build community across multiple dimensions (family, friends, romantic, mentorship, broader community).`,
            `Strengths of the position. Strong empirical support; Harvard Adult Development Study and Holt-Lunstad research are among the most influential in wellbeing research. Aligns with what most cultures across history have known about flourishing. Provides framework for some of the most consequential life decisions (who to spend time with, who to commit to, how to invest in others).`,
            `Limits of the position. Doesn't fully account for meaning available to people without close relationships (whether by choice or circumstance). Can be co-opted into codependency where relationships substitute for other meaning sources. Can underweight individual contribution to something beyond relationships (the position 1 critique). Relationships are partly outside individual control (people die, leave, change); building meaning entirely around them creates vulnerability.`,
          ],
          image: `/voyager-assets/life-wellness/l17-s3-relationships.webp`,
          imageCaption: `Position 2: meaning through deep relationships. Buber "I and Thou." Aristotle. Harvard Study of Adult Development (Waldinger). Holt-Lunstad loneliness research. Attachment theory. Limits: vulnerability, can underweight contribution.`,
          vocab: [
            {
              word: `relationships position`,
              definition: `Framework: meaning comes primarily from deep relationships (close family, deep friendship, romantic partnership, mentorship, community). Defenders: Martin Buber "I and Thou" 1923; Aristotle on friendship of virtue; communitarian philosophers; attachment theorists. Harvard Study of Adult Development (Waldinger director): longest study of human flourishing; relationships strongest predictor of long-term wellbeing. Holt-Lunstad loneliness research (L10): social connection biologically protective. Attachment research: secure attachment predicts better outcomes. Strengths: strong empirical support; aligns with most cultures across history. Limits: doesn't fully account for solitary lives; can be co-opted into codependency; vulnerability to relationship changes.`,
              audioPrompt: `The meaning through relationships position argues that meaning comes primarily from deep relationships, {name}. Close family, deep friendship, romantic partnership, mentorship, community. Defenders include Martin Buber, whose book "I and Thou" from 1923 is foundational philosophical work on what genuine encounter between persons involves. The philosophical traditions that emphasize friendship and community, including Aristotle on friendship of virtue. Attachment theory researchers and contemporary positive psychology researchers. The Harvard Study of Adult Development is the longest-running study of human flourishing, following men for over 80 years and extending later to women and diverse groups. Its central finding, summarized by current director Robert Waldinger: the most important predictor of long-term wellbeing across measures is the quality of close relationships, not money, achievement, or fame. The Holt-Lunstad loneliness research covered in lesson 10 found that lack of social connection has health effects comparable to smoking 15 cigarettes per day. Deep relationships are biologically protective. Research on attachment: secure attachment predicts substantially better outcomes across mental health, physical health, achievement, and resilience.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Meaning Through Self-Development`,
          paragraphs: [
            `The third serious position is that meaning comes primarily from developing yourself: your capacities, your authentic expression, your understanding, your creative or intellectual or athletic or craft mastery. The framework has substantial philosophical and research pedigree.`,
            `Defenders include the eudaimonic tradition originating with Aristotle (whose ethics framed flourishing as exercise of human capacities, particularly reason); existentialist philosophers (Friedrich Nietzsche, Søren Kierkegaard, Jean-Paul Sartre, Simone de Beauvoir, Albert Camus) who emphasized authentic self-creation against social pressure to conform; humanistic psychologists (Abraham Maslow, Carl Rogers) who centered self-actualization; and research traditions on flow, mastery, and competence.`,
            `Specific research supporting the position. Self-determination theory (Deci and Ryan again, covered above) identifies competence (sense of effectiveness, capability, mastery) as a basic psychological need alongside autonomy and relatedness. People who have opportunities to develop competence in domains they value have substantially better wellbeing. Anders Ericsson's deliberate practice research: developing genuine mastery in a domain produces specific satisfactions that other activities don't. Csikszentmihalyi's flow research (mentioned in position 1): flow occurs in challenging activities at the edge of one's current capacity, requiring skill development.`,
            `Research on "authenticity" and "meaning making" (Steger, Heine, and others): people who feel they're living in alignment with their actual values and capacities report substantially higher meaning than people whose lives feel disconnected from authentic self. This isn't the social media "authenticity" of performing yourself online; it's the deeper question of whether your life expresses what you actually are and value.`,
            `What this position implies practically. Identify what genuinely interests you and develop capacities in those domains across years. Develop skills (intellectual, creative, athletic, craft, professional) that you find genuinely satisfying. Resist pressure to conform to social expectations that don't match your actual values. Build identity sources beyond social roles. Accept that genuine self-development is often slow and involves difficulty; the satisfaction is in the development itself, not just outcomes.`,
            `Strengths of the position. Captures something real about human flourishing that other positions can underweight. Provides framework for resisting external pressure to conform. Aligns with substantial research on competence, mastery, flow, and authenticity. Provides direction during life transitions when external structures change. Honors the philosophical tradition's recognition that humans aren't only social or service-oriented beings.`,
            `Limits of the position. Can be co-opted into individualism that underweights relationships and contribution. Can become narcissistic (self-development as self-obsession). "Authenticity" can be a license for behavior that harms others. Mastery for its own sake without consideration of impact can serve harmful ends. Best as complement to relationship and contribution dimensions, not as replacement for them.`,
            `One important framing about all three positions. They're not strictly exclusive. Most flourishing lives integrate elements: relationships matter; contribution matters; self-development matters. The forcing function of choosing a primary framing is recognizing which dimension you're currently underweighting and need to develop. Different times in life may call for different primary emphases (deep self-development in adolescence and early adulthood; relationships and contribution intensifying in adulthood; integration across the lifespan).`,
          ],
          image: `/voyager-assets/life-wellness/l17-s4-self-development.webp`,
          imageCaption: `Position 3: meaning through self-development. Aristotle eudaimonia, existentialists, humanistic psychology. Self-determination theory (competence), Ericsson deliberate practice, flow, authenticity research. Limits: individualism, narcissism risk.`,
          vocab: [
            {
              word: `selfdevelopment position`,
              definition: `Framework: meaning comes primarily from developing your capacities, authentic expression, understanding, mastery in domains you value. Defenders: Aristotle's eudaimonic tradition (flourishing as exercise of capacities); existentialists (Nietzsche, Kierkegaard, Sartre, Beauvoir, Camus) on authentic self-creation; humanistic psychologists (Maslow, Rogers) on self-actualization. Research: self-determination theory's competence need (Deci & Ryan); Ericsson deliberate practice; Csikszentmihalyi flow; authenticity research (Steger, Heine). Strengths: captures real dimension of flourishing other positions underweight; framework for resisting conformity. Limits: individualism risk; narcissism risk; "authenticity" can license harmful behavior.`,
              audioPrompt: `The meaning through self-development position argues that meaning comes primarily from developing yourself, {name}. Your capacities, your authentic expression, your understanding, your creative or intellectual or athletic or craft mastery. Defenders include the eudaimonic tradition originating with Aristotle, whose ethics framed flourishing as exercise of human capacities. Existentialist philosophers including Friedrich Nietzsche, Søren Kierkegaard, Jean-Paul Sartre, Simone de Beauvoir, and Albert Camus, who emphasized authentic self-creation against social pressure to conform. Humanistic psychologists including Abraham Maslow and Carl Rogers, who centered self-actualization. Research traditions on flow, mastery, and competence. Self-determination theory identifies competence (sense of effectiveness, capability, mastery) as a basic psychological need alongside autonomy and relatedness. Anders Ericsson's deliberate practice research: developing genuine mastery in a domain produces specific satisfactions that other activities don't. Research on authenticity and meaning making: people who feel they're living in alignment with their actual values and capacities report substantially higher meaning than people whose lives feel disconnected from authentic self.`,
            },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `The three positions aren't strictly exclusive. Most flourishing lives integrate contribution, relationships, and self-development. The forcing function of the argument is committing to a primary framing that shapes how you'll invest your time, attention, and identity development.`,
            `One framing as you decide. Each position implies different responses to the question "what should I do with my life?" Position 1 (contribution): what can I contribute that matters? What cause, community, or mission can I serve? Position 2 (relationships): who am I building deep connection with? What relationships am I investing in for the long term? Position 3 (self-development): what capacities am I developing? What's authentically mine to express, create, or master?`,
            `Another framing. The positions operate at somewhat different scales and produce somewhat different vulnerabilities. Contribution-meaning is vulnerable to burnout and the cause/mission changing. Relationship-meaning is vulnerable to people changing, dying, leaving. Self-development-meaning is vulnerable to physical decline, changing capacities, isolation. Most mature meaning frameworks integrate enough that any single vulnerability doesn't collapse the whole.`,
            `One specific framing for your generation. You're being asked to make meaning in conditions older generations didn't face: substantial structural uncertainty about work, climate, politics; algorithmic-engineered comparison; explicit attention-economy products designed to consume the time and attention meaning-construction requires; widely-distributed information that can fragment rather than integrate. Whichever position you commit to, building deliberate meaning framework now is more important than it was for previous generations because the structural conditions don't produce meaning automatically the way some social structures historically did.`,
            `One last framing. You're 12. The meaning framework you build now will shape decades of decisions about how to spend time, what to invest in, what to commit to. Most adults around you didn't explicitly build meaning framework; they absorbed cultural defaults (often consumerism, achievement, and self-focus) that the research has shown produces lower wellbeing than the three positions in this lesson. Building deliberate framework at this age is among the highest-leverage wellness investments available.`,
          ],
          image: `/voyager-assets/life-wellness/l17-s5-before.webp`,
          imageCaption: `Three positions integrate in practice. Different scales, different vulnerabilities. Generational conditions don't produce meaning automatically. Patterns at 12 shape decades.`,
          vocab: [
            {
              word: `integrating meaning frameworks`,
              definition: `Mature meaning literacy integrates contribution (what I'm building beyond myself), relationships (who I'm deeply connected with), and self-development (capacities, authentic expression, mastery). Different vulnerabilities: contribution-meaning vulnerable to burnout and changing causes; relationship-meaning vulnerable to people changing/dying/leaving; self-development-meaning vulnerable to physical decline and isolation. Generational conditions for your age cohort: structural uncertainty (work, climate, politics); algorithmic comparison; attention economy; fragmented information. Building deliberate framework now more important than it was for previous generations because structural conditions don't produce meaning automatically.`,
              audioPrompt: `Integrating meaning frameworks is what mature meaning literacy involves, {name}. The three positions aren't strictly exclusive. Most flourishing lives integrate contribution, relationships, and self-development. The forcing function of the argument is committing to a primary framing that shapes how you'll invest your time, attention, and identity development. Each position implies different responses to "what should I do with my life?" Position 1 contribution: what can I contribute that matters? Position 2 relationships: who am I building deep connection with? Position 3 self-development: what capacities am I developing? The positions also produce somewhat different vulnerabilities. Contribution-meaning is vulnerable to burnout and the cause changing. Relationship-meaning is vulnerable to people changing, dying, leaving. Self-development-meaning is vulnerable to physical decline, changing capacities, isolation. Most mature meaning frameworks integrate enough that any single vulnerability doesn't collapse the whole. For your generation specifically, building deliberate meaning framework now is more important than it was for previous generations because the structural conditions don't produce meaning automatically the way some social structures historically did.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l17-argument-builder`,
          type: `argument-builder`,
          headline: `What Produces Meaning In A Life?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders and substantial research support.`,
          positions: [
            {
              id: `contribution`,
              label: `Contribution: meaning comes from contributing to something larger than yourself (cause, community, work, mission, family)`,
              summary: `Meaning through contribution to something beyond self. Frankl "Man's Search for Meaning"; religious traditions; prosocial research; self-determination theory's relatedness need; volunteerism research; Csikszentmihalyi flow (contribution-oriented particularly potent); "calling" research. Strongest research support across many measures. Limits: burnout/self-sacrifice misuse; requires care about what you contribute to.`,
            },
            {
              id: `relationships`,
              label: `Relationships: meaning comes from deep connection with others (family, friends, partner, community)`,
              summary: `Meaning through deep relationships. Buber "I and Thou"; Aristotle friendship of virtue; attachment theory; Harvard Study of Adult Development (Waldinger): relationships strongest predictor of long-term wellbeing across 80+ years; Holt-Lunstad loneliness research. Strengths: strong empirical support; aligns with most cultures across history. Limits: vulnerability to relationship changes; can become codependency.`,
            },
            {
              id: `self_development`,
              label: `Self-development: meaning comes from developing your capacities and authentic expression`,
              summary: `Meaning through development of capacities, authentic expression, mastery. Aristotle's eudaimonia; existentialists (Nietzsche, Kierkegaard, Sartre, Beauvoir, Camus); humanistic psychology (Maslow, Rogers); self-determination theory's competence need; Ericsson deliberate practice; Csikszentmihalyi flow; authenticity research. Strengths: captures dimension other positions underweight; framework against conformity. Limits: individualism/narcissism risks; "authenticity" can license harm.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Viktor Frankl's "Man's Search for Meaning" (1946) developed logotherapy from his experience surviving Nazi concentration camps; central claim that humans need purpose and contribution to flourish, even in extreme suffering. Among the most influential books on the topic.`,
              source: `Frankl 1946; logotherapy literature`,
            },
            {
              id: `e2`,
              text: `Harvard Study of Adult Development is the longest-running study of human flourishing, following participants for over 80 years. Central finding: most important predictor of long-term wellbeing across measures is quality of close relationships, not money, achievement, or fame.`,
              source: `Harvard Study of Adult Development; Waldinger summary`,
            },
            {
              id: `e3`,
              text: `Self-determination theory (Deci and Ryan) identifies three basic psychological needs: autonomy, competence, relatedness. Each maps onto one of the three positions (competence → self-development; relatedness → relationships and contribution). Research support across many studies and cultures.`,
              source: `Deci & Ryan; ongoing self-determination research`,
            },
            {
              id: `e4`,
              text: `Steger's Meaning in Life Questionnaire framework identifies three components: comprehension (life makes sense), purpose (life has direction), significance/mattering (life has worth, I matter). All three contribute to overall meaning.`,
              source: `Steger meaning in life research`,
            },
            {
              id: `e5`,
              text: `Holt-Lunstad meta-analyses (covered in L10): lack of social connection has health effects comparable to smoking 15 cigarettes per day; deep relationships are biologically protective. Strongest evidence for relationships position.`,
              source: `Holt-Lunstad loneliness research`,
            },
            {
              id: `e6`,
              text: `Csikszentmihalyi's flow research: most reliably flow-producing activities involve challenging capability-edge work; flow itself predicts substantial wellbeing benefits. Maps onto both self-development (flow requires skill) and contribution (contribution-oriented flow particularly potent).`,
              source: `Csikszentmihalyi flow research`,
            },
            {
              id: `e7`,
              text: `Roy Baumeister's "Meanings of Life" (1991) and Baumeister et al 2013 research: meaning and happiness distinct (overlapping but different); meaning focused on past/future integration, giving to others, connecting to something larger.`,
              source: `Baumeister meaning research`,
            },
            {
              id: `e8`,
              text: `Multiple research traditions converge on relationships, contribution, and self-development as the strongest predictors of long-term wellbeing. Income above security, life events, and even reported happiness are weaker predictors than these three.`,
              source: `Multiple research traditions; converging findings`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that meaning is something that humans construct and can deliberately shape. But maybe meaning is what emerges when you stop trying to construct it; when you just live, do what's in front of you, respond to what comes, without making meaning a project. Many wisdom traditions across cultures (Zen Buddhism, Taoism, various contemplative traditions, some strands of Christianity) suggest that meaning-seeking itself can be the obstacle to meaning. The pursuit of meaning becomes another acquisition project that puts you outside your actual life rather than in it. Maybe the most meaningful life isn't the one that successfully executes a meaning framework but the one that doesn't need a framework: that's just lived. Why are we trying to engineer meaning rather than just being?"`,
            promptInstruction: `In 3-4 sentences, respond. Is meaning constructed deliberately or does it emerge through living? How does your position handle this challenge from the contemplative traditions?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does meaning in life research show about wellbeing?`,
              options: [
                `Random`,
                `Meaning in life predicts mental health (depression, anxiety, suicidality), physical health (longevity, immune function, recovery from illness), resilience through difficulty, life satisfaction; effects large and consistent across many studies; predicts wellbeing more strongly than many factors getting more attention (income above security, even reported happiness)`,
                `Just feelings`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The research has shifted how serious psychology treats meaning. It's not vague self-help; it's one of the most robust predictors of wellbeing across measures. Building deliberate meaning framework matters.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are the three components of meaning in Steger's framework?`,
              options: [
                `Random`,
                `Comprehension (life makes sense to me; I can make sense of my experiences); Purpose (life has direction; I'm working toward things that matter); Significance/Mattering (my life has worth; what I do matters; I matter); all three contribute to overall meaning; weakness in any one reduces overall meaning`,
                `Just purpose`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Steger's three-component framework is the most-used in current meaning research. Each component can be cultivated somewhat separately; all three matter for full meaning.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the distinction between meaning and happiness in research?`,
              options: [
                `Same`,
                `Overlapping but distinct. Happiness more focused on present, on getting needs met, on receiving from others. Meaning more focused on past/future integration, on giving to others, on connecting to something larger. People can have happy-low-meaning lives (pleasant but empty), meaningful-with-difficulty lives (purpose-driven through hardship), both, or neither. Baumeister et al 2013 research`,
                `Random`,
                `Just words`,
              ],
              correctIndex: 1,
              explanation: `The distinction matters for life decisions. Pop content often conflates the two. Recognizing they're related but distinct allows for better choices about what to invest in for which outcome.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did Frankl's logotherapy establish?`,
              options: [
                `Random`,
                `Humans need purpose and contribution to flourish, and even in extreme suffering (concentration camp experience), those who maintained sense of purpose were more likely to survive psychologically; "Man's Search for Meaning" 1946; logotherapy as meaning-focused therapy; one of the most influential frameworks for meaning through contribution`,
                `Just therapy`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Frankl's work matters partly because of the extremity of his experience; he developed his framework while surviving conditions designed to destroy meaning. The framework has been applied across many less extreme contexts since.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did the Harvard Study of Adult Development find?`,
              options: [
                `Random`,
                `Longest-running study of human flourishing, following participants for over 80 years; central finding (Waldinger summary): most important predictor of long-term wellbeing across measures is quality of close relationships, not money, achievement, or fame; strongest evidence for relationships position on meaning`,
                `Just life`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The study's findings are particularly influential because of its length and methodology. Watching the same people across 80 years allows tracking what actually produced long-term flourishing, and relationships emerged as the strongest predictor.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What three basic psychological needs does self-determination theory identify?`,
              options: [
                `Random`,
                `Autonomy (sense of self-direction, choice), competence (sense of effectiveness, capability, mastery), relatedness (connection to others and to something larger); each maps onto a position on meaning (competence → self-development; relatedness → relationships and contribution); research across many studies and cultures`,
                `Just one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Self-determination theory has been one of the most influential frameworks in motivation and wellbeing research. The three needs framework helps map why each meaning position has research support.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does flow research (Csikszentmihalyi) contribute to meaning frameworks?`,
              options: [
                `Random`,
                `Flow is the state of full absorption in challenging meaningful activity; occurs at the edge of one's current capacity; predicts substantial wellbeing benefits; most reliably flow-producing activities involve challenging skill development AND contribution to something beyond self; maps onto both self-development (flow requires skill) and contribution (contribution-oriented flow particularly potent)`,
                `Just focus`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Flow research is important because it identifies specific conditions under which deep meaning emerges in activity. Flow-producing activities are usually challenging, skill-building, and oriented toward something beyond pure self-pleasure.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is building meaning framework particularly important for your generation?`,
              options: [
                `Random`,
                `Structural conditions don't produce meaning automatically the way some social structures historically did: substantial uncertainty about work, climate, politics; algorithmic-engineered comparison; attention economy products consuming time/attention meaning-construction requires; fragmented information. Building deliberate framework matters more than for previous generations who absorbed cultural defaults more directly`,
                `Just normal`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Recognizing that previous generations had social structures that produced meaning more automatically (religion, community, stable employment, family across generations) helps explain why deliberate meaning construction is more important now. The structural conditions have changed.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Meaning is something you "find"; it's out there waiting to be discovered.`,
              correctAnswer: false,
              explanation: `False. Research consistently shows meaning is constructed through specific activities, relationships, and frameworks, not found pre-existing in the world. The "find your purpose" pop framing misunderstands how meaning works. Different paths produce meaning; the question isn't which path is universally right but which path produces meaning for you given your specific situation.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I just feel empty. I don't know what to do with my life. Everyone tells me to 'find my passion' but nothing feels meaningful." Based on this lesson, what should you point out?`,
              options: [
                `"Random"`,
                `"Several specific things. First, the 'find your passion' framing is largely wrong according to current research. Meaning isn't 'found' as if it's pre-existing somewhere; it's constructed through specific activities, relationships, and frameworks. People who wait to 'find' meaning often don't, while people who build meaning through deliberate practice usually do. Second, research has identified three serious paths to meaning. Contribution: what you can contribute to something larger than yourself (cause, community, work, family). Relationships: deep connection with others, which the Harvard Study of Adult Development shows is the strongest predictor of long-term wellbeing. Self-development: developing your capacities and authentic expression. You're probably underweighting one of these. Third, Steger's framework: meaning has three components: comprehension (does life make sense?), purpose (does life have direction?), and significance/mattering (does my life have worth?). The 'empty' feeling often reflects weakness in one of these specifically, not in all of them. Worth identifying which. Fourth, specific things that tend to produce meaning experimentally: contributing regularly to something you actually care about (volunteering, helping family, working toward a cause), investing deeply in 2-3 specific relationships, developing genuine skill in a domain you find interesting. Pick one to start. Fifth, the meaning you're looking for usually shows up through doing these things, not through more thinking about them. Frankl, the Harvard Study, self-determination theory all converge on this. Sixth, if the emptiness is severe (affecting basic functioning, including thoughts of suicide or self-harm), that's beyond what frameworks can address and warrants professional support. 988 Suicide and Crisis Lifeline always available; school counselor can help connect. Otherwise: the 'empty' feeling at your age often reflects not having explicit meaning framework yet, which is normal. Building it deliberately tends to work better than waiting for meaning to find you."`,
                `"Just find it"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied meaning literacy. Address the "find your passion" framing as research-unsupported. Reference all three positions (contribution, relationships, self-development) and Steger's components. Provide specific experimental approach. Include professional support threshold with resources. Don't promise quick fixes; meaning construction is ongoing work.`,
            },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for meaning and purpose? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which of the three positions are you currently weakest in? Which strongest? What would shifting that balance look like?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with deliberate meaning framework across decades, what does that change about your sense of self, your decisions, your resilience through difficulty?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific area where you feel empty or directionless. Apply the three positions. What might help?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument questioned whether meaning should be a project at all. Are meaning-construction frameworks themselves part of the problem? Where do you land?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read Frankl's "Man's Search for Meaning" or Robert Waldinger's "The Good Life" (Harvard Study synthesis). Apply during reading.` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Meaning framework at 12 shapes decades of decisions about how to spend time and what to invest in. Two paths.`,
          familyActivity: {
            title: `The Family Meaning Conversation`,
            duration: `60 minutes`,
            description: `Share the research findings (Steger framework, three positions, Harvard Study, Frankl, self-determination theory). Many adults haven't explicitly built meaning framework; many absorbed consumerism, achievement, or self-focus defaults that research has shown produce lower wellbeing. The conversation often surfaces specific values and patterns worth examining. Consider establishing family practices: explicit conversation about what each family member is contributing to, who they're investing in deeply, what they're developing in themselves; family practices that build meaning (volunteering together, family rituals, shared meaningful activities).`,
          },
          projectOption: {
            title: `Read on meaning, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Viktor Frankl's "Man's Search for Meaning" (foundational, accessible, profound), Robert Waldinger's "The Good Life" (Harvard Study synthesis, very current), Roy Baumeister's "Meanings of Life" (denser but foundational), or Michael Steger's research on meaning. Apply concepts during reading. Write 1,500 words on what you learned about meaning and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Meaning literacy at 12 is among the highest-leverage life investments. It shapes decades of decisions about time, relationships, work, and what to commit to.`,
          },
          identityQuestion: `If you become someone with deliberate meaning framework (integrating contribution, relationships, and self-development across decades), what does that change about your wellbeing, resilience, and life across 30, 50, 80?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who builds meaning through contribution to something larger.`,
            `A person who invests deeply in close relationships across decades.`,
            `Someone who develops genuine capacities and authentic expression.`,
          ],
          saveKey: `identity_responses_lw_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventeenth Life Wellness lesson done. You now have three serious positions on meaning (contribution, relationships, self-development), substantial research support (Frankl, Steger, Baumeister, Harvard Study of Adult Development, self-determination theory, flow), specific frameworks (Steger three components, Baumeister meaning-happiness distinction), and recognition that meaning is constructed not found. That's framework most adults navigating life decisions have never explicitly built. Three lessons to go. Next time: building wellness practices that last. Case Study format. Let's go. — Terra`,
          badge: `meaning-literate`,
          badgeName: `Meaning Literate`,
          xpEarned: 75,
          competencies: [
            `Knows meaning in life research (Steger framework, Baumeister, multiple traditions)`,
            `Distinguishes three positions (contribution, relationships, self-development)`,
            `Articulates Frankl logotherapy and Harvard Study findings`,
            `Recognizes self-determination theory's three basic needs (autonomy, competence, relatedness)`,
            `Distinguishes meaning from happiness; recognizes meaning as constructed not found`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: Building Wellness Practices That Last`,
            hook: `Three cases on common failure modes in sustainable practice. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L17 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
