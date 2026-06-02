// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L10 — Friendship as Wellness
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Social Connection, Loneliness Research
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (instrumental / intrinsic / structural)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l10-v1";

const LIFEWELLNESS_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-10`,
      title: `Friendship as Wellness`,
      duration: 35,
      xpReward: 75,
      badge: `connection-literate`,
      badgeName: `Connection Literate`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, friendship is one of the most important wellness topics that pop content treats as if it doesn't need attention. The research is striking: loneliness has health effects comparable to smoking 15 cigarettes a day (Holt-Lunstad's meta-analyses). The US Surgeon General has declared a loneliness epidemic. Adolescent loneliness has risen dramatically across the past decade. At the same time, friendship is genuinely one of the deepest sources of meaning in human life across philosophical traditions going back thousands of years. Today we work through three serious positions on what friendship actually is: friendship as instrumental (what it provides), friendship as intrinsic (what it is in itself), and friendship as structural/cultural (shaped by conditions). By the end you'll have framework that protects across decades of friendship across many forms and contexts.`,
          headline: `Friendship as Wellness`,
          subtitle: `Three serious positions. Loneliness research, philosophical tradition, structural conditions.`,
          visual: `/voyager-assets/life-wellness/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What The Loneliness Research Actually Shows`,
          paragraphs: [
            `Start with the empirical picture. Julianne Holt-Lunstad at Brigham Young University has conducted some of the most influential research on social connection and health. Her meta-analyses (synthesizing many studies) have established several findings that have changed how public health thinks about loneliness.`,
            `Specific findings. Lacking social connection has health effects comparable to smoking 15 cigarettes a day. Loneliness is associated with substantially increased mortality risk, comparable to or exceeding traditional health risk factors like obesity. The effects show up in cardiovascular disease, immune function, mental health, cognitive decline, and overall mortality. Social connection isn't just nice; it's biologically protective in measurable ways.`,
            `In 2023, US Surgeon General Vivek Murthy released an advisory declaring loneliness and social isolation a public health epidemic. His 2020 book "Together" synthesizes the research and his observations from his medical career. Loneliness rates have been rising across decades in the US and many other countries, with particularly steep rises among adolescents over the past 10-15 years.`,
            `What's specific about adolescent loneliness. Multiple data sources (CDC, Common Sense Media, academic researchers) show adolescent loneliness has increased dramatically since approximately 2012, coinciding with widespread smartphone adoption and social media use. The relationship is complicated (correlation, not necessarily causation) but the timing pattern is striking. Adolescents today report less in-person time with friends, more digital communication, and higher loneliness rates than previous generations at the same age.`,
            `What protects against loneliness, according to research. Time spent in person with people who know you. Regular interaction (not just occasional). Relationships of varying intimacy levels (close friends, friendly acquaintances, community ties). Activities that involve shared focus on something other than the relationship itself (working together, playing together, learning together). Phone-mediated interaction is less effective at preventing loneliness than in-person interaction, though it's better than no interaction.`,
            `For 11-12 year olds, friendship patterns being established now compound across decades. Adults with strong social connections in adolescence are far more likely to have them later; adults whose adolescent loneliness wasn't addressed often carry the pattern through adulthood. Building deliberate friendship framework now produces protection that's hard to retrofit later.`,
          ],
          image: `/voyager-assets/life-wellness/l10-s1-research.webp`,
          imageCaption: `Holt-Lunstad: loneliness = ~15 cigarettes/day mortality risk. Surgeon General (Murthy 2023): loneliness epidemic. Adolescent loneliness rising since ~2012, coinciding with smartphone/social media adoption.`,
          vocab: [
            {
              word: `loneliness research (Holt-Lunstad, Murthy)`,
              definition: `Empirical research on loneliness and health. Julianne Holt-Lunstad's meta-analyses: lacking social connection has health effects comparable to smoking 15 cigarettes/day; loneliness substantially increases mortality risk comparable to obesity; effects in cardiovascular disease, immune function, mental health, cognitive decline. US Surgeon General Vivek Murthy declared loneliness epidemic in 2023; book "Together" (2020) synthesizes research. Adolescent loneliness rising dramatically since ~2012. Phone-mediated interaction less effective than in-person at preventing loneliness.`,
              audioPrompt: `Loneliness research has established several findings that have changed how public health thinks about social connection, {name}. Julianne Holt-Lunstad at Brigham Young University has conducted some of the most influential research. Her meta-analyses, which synthesize many studies, have found that lacking social connection has health effects comparable to smoking 15 cigarettes a day. Loneliness is associated with substantially increased mortality risk, comparable to or exceeding traditional health risk factors like obesity. The effects show up in cardiovascular disease, immune function, mental health, cognitive decline, and overall mortality. In 2023, US Surgeon General Vivek Murthy released an advisory declaring loneliness and social isolation a public health epidemic. His 2020 book "Together" synthesizes the research and his observations from his medical career. Adolescent loneliness has increased dramatically since approximately 2012, coinciding with widespread smartphone adoption and social media use. Phone-mediated interaction is less effective at preventing loneliness than in-person interaction.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Friendship As Instrumental`,
          paragraphs: [
            `The first position treats friendship primarily through what it provides. Social support during difficulty. Practical help. Information networks. Career and life opportunities. Emotional regulation through co-regulation with others. Sense of belonging. Identity formation through being known. The framing is largely outcome-focused: friendship matters because of what friendship produces.`,
            `Defenders include social capital researchers (Robert Putnam's "Bowling Alone" being a major example), public health researchers studying social determinants of health, social network researchers (Mark Granovetter on "strength of weak ties"), and pragmatic philosophers and writers. The framework treats friendship as an important domain of human flourishing largely because of what it does.`,
            `Specific research and findings supporting the position. Robert Putnam's "Bowling Alone" documented the decline of social capital in late-20th-century America and the consequences for civic, economic, and personal life. Holt-Lunstad's loneliness research (above) shows direct health consequences of social connection or lack thereof. Granovetter's "strength of weak ties" research shows that distant social connections (not just close friends) provide substantial career and information benefits. Family and friendship support buffers stress, depression, and many other negative health outcomes.`,
            `What this position implies practically. Maintain friendships because they're valuable for what they provide. Diversify your social network across close friends, casual friends, weak ties, community connections. Invest in the relationships that provide the most across multiple dimensions (support, information, opportunity, belonging). Recognize when friendships have stopped providing what they once did and adjust appropriately.`,
            `The position's strengths. Empirically grounded; engages with real evidence on what friendship does for people. Practically actionable; helps people see why friendship matters and invest accordingly. Captures real benefits that other positions sometimes downplay.`,
            `The position's limits. Treats friendship instrumentally, which Aristotle and the philosophical tradition argued misses something important: friendship valued only for what it provides can be replaced when something better-providing comes along. The instrumental framing can produce friendships that are calculating rather than freely given, and that don't survive when one party stops being useful to the other.`,
          ],
          image: `/voyager-assets/life-wellness/l10-s2-instrumental.webp`,
          imageCaption: `Position 1: friendship as instrumental. Putnam, Holt-Lunstad, Granovetter. Friendship matters for what it provides: support, information, opportunity, belonging. Limit: can be replaceable.`,
          vocab: [
            {
              word: `instrumental view of friendship`,
              definition: `Framework treating friendship primarily through what it provides: social support, practical help, information networks, opportunities, belonging, identity. Defenders include social capital researchers (Putnam "Bowling Alone"), public health researchers, social network researchers (Granovetter's "strength of weak ties"). Strength: empirically grounded, practically actionable. Limit: friendship valued only for what it provides can be replaceable when something better-providing comes along; can produce calculating rather than freely-given relationships.`,
              audioPrompt: `The instrumental view of friendship treats friendship primarily through what it provides, {name}. Social support during difficulty. Practical help. Information networks. Career and life opportunities. Emotional regulation through co-regulation with others. Sense of belonging. Identity formation through being known. Defenders include social capital researchers like Robert Putnam, whose book "Bowling Alone" documented the decline of social capital in late-20th-century America. Public health researchers studying social determinants of health. Social network researchers including Mark Granovetter on the strength of weak ties. The framework treats friendship as an important domain of human flourishing largely because of what it does. Strengths include being empirically grounded and practically actionable. Limits include treating friendship instrumentally, which the philosophical tradition argued misses something important: friendship valued only for what it provides can be replaceable when something better-providing comes along.`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Friendship As Intrinsic`,
          paragraphs: [
            `The second position argues friendship is valuable in itself, not primarily for what it provides. This framing has the longest philosophical pedigree of any position on friendship and continues to find defenders today.`,
            `Defenders include the philosophical tradition going back to Aristotle (whose treatment of friendship in "Nicomachean Ethics" books 8 and 9 remains foundational), the Stoic tradition, contemporary philosophers writing on friendship, and many religious and wisdom traditions across cultures. The position treats friendship as one of the constitutive elements of a flourishing human life, not as a means to other ends.`,
            `Aristotle's famous distinction. He identified three types of friendship. Friendships of utility (people are friends because of what they get from each other) — these are real friendships but limited; they dissolve when the utility goes away. Friendships of pleasure (people are friends because of enjoyment together) — also real but limited; they fade when the pleasure does. Friendships of virtue or character (people are friends because of who the other person is and shared commitment to flourishing) — these are the deepest form, the slowest to develop, and the most durable. Aristotle thought most people only had a few friendships of the third kind across an entire life.`,
            `What this position implies practically. Cultivate friendships not as means to ends but as ends in themselves. Invest deeply in a small number of relationships rather than maintaining many shallow ones. Recognize that friendships of virtue require time (years, sometimes decades), shared experiences, mutual investment, and genuine knowledge of each other. Don't expect to have many such friendships; the few you have are among the most important things in a human life.`,
            `The position's strengths. Captures something real about deep friendship that instrumental framings miss. Provides framework for distinguishing genuine connection from networking. Honors the philosophical tradition's accumulated wisdom on human flourishing. Suggests that the slow development of deep friendship is valuable rather than inefficient.`,
            `The position's limits. Can underweight the real benefits friendship provides (the instrumental view captures real things). Can be elitist if it suggests utility friendships and pleasure friendships are "lesser" — most actual human friendship includes elements of all three Aristotelian types. Can be defeatist if read as "you'll only have a few real friends ever, so don't bother with anything less."`,
          ],
          image: `/voyager-assets/life-wellness/l10-s3-intrinsic.webp`,
          imageCaption: `Position 2: friendship as intrinsic. Aristotle's "Nicomachean Ethics." Three types (utility, pleasure, virtue). Deep friendships valuable in themselves. Limit: can underweight real benefits.`,
          vocab: [
            {
              word: `intrinsic view of friendship (Aristotle)`,
              definition: `Framework treating friendship as valuable in itself, not primarily for what it provides. Longest philosophical pedigree. Aristotle's "Nicomachean Ethics" Books 8-9: three types of friendship — utility (for benefit), pleasure (for enjoyment), virtue/character (for who the other person is). Friendships of virtue are deepest, slowest to develop, most durable; most people only have a few across an entire life. Strength: captures something real about deep friendship that instrumental framings miss; honors accumulated philosophical wisdom. Limit: can underweight real benefits; can be elitist about utility and pleasure friendships.`,
              audioPrompt: `The intrinsic view of friendship treats friendship as valuable in itself, not primarily for what it provides, {name}. This framing has the longest philosophical pedigree of any position on friendship. Aristotle's treatment in his "Nicomachean Ethics" Books 8 and 9 remains foundational. Aristotle's famous distinction: he identified three types of friendship. Friendships of utility, where people are friends because of what they get from each other; these are real friendships but limited and dissolve when the utility goes away. Friendships of pleasure, where people are friends because of enjoyment together; also real but limited and fade when the pleasure does. Friendships of virtue or character, where people are friends because of who the other person is and shared commitment to flourishing; these are the deepest form, the slowest to develop, and the most durable. Aristotle thought most people only had a few friendships of the third kind across an entire life. The framework implies cultivating friendships not as means to ends but as ends in themselves.`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Friendship As Structural`,
          paragraphs: [
            `The third position argues friendship is shaped enormously by structural and cultural conditions. The friendship possibilities available to a person aren't just about individual choice; they're shaped by community design, work patterns, communication technology, cultural norms, geography, and economics. Understanding friendship requires understanding the conditions that make it possible or difficult.`,
            `Defenders include sociologists studying friendship in different cultures and times, urban designers and community planners (whose work shapes which friendships can form), technology critics like Sherry Turkle (whose "Reclaiming Conversation" and other works examine how communication tech changes friendship), historians studying how friendship has changed across centuries, and structural public health researchers.`,
            `Specific research and arguments supporting the position. Jeffrey Hall at the University of Kansas studied how friendships form and found that friendship formation requires substantial in-person hours: roughly 50 hours of together-time to become a "casual friend," 90 hours to become a "friend," and over 200 hours to become a "close friend." Modern conditions often don't provide these hours easily. Robert Putnam's research documented how changes in work patterns, suburbanization, and television-then-internet have reduced the kind of regular community contact that historically supported friendship. Sherry Turkle has documented how always-available phone-mediated communication can paradoxically reduce the kind of sustained conversation that builds depth.`,
            `Specific structural factors affecting friendship today. Schools structured around individual achievement rather than collaborative work. Suburban and exurban geography requiring driving for most interaction. Increasingly long work hours and homework loads. Decline of "third places" (places that are neither home nor work where people gather casually, per Ray Oldenburg's research). Social media that substitutes for in-person interaction. Smartphone use that interrupts in-person interaction when it does happen. All of these are structural conditions, not individual choices.`,
            `What this position implies practically. Recognize that your friendship possibilities are partly shaped by conditions outside your control. Don't blame yourself for difficulties in friendship that are largely structural. Where possible, seek out conditions that support friendship: in-person time, repeated contact, shared activities, third places, sustained conversation. Recognize that some forms of friendship that were common in earlier generations may be harder to access for structural reasons.`,
            `The position's limits. Can underweight individual agency; even within difficult conditions, friendships can be cultivated. Can become defeatist if read as "until society changes, friendship is impossible." Works best as a complement to the other positions, treating structural awareness as context for individual investment.`,
          ],
          image: `/voyager-assets/life-wellness/l10-s4-structural.webp`,
          imageCaption: `Position 3: friendship as structural. Hall (50/90/200+ hours for friendship), Putnam, Turkle, Oldenburg (third places). Conditions shape friendship possibility. Modern conditions often hostile.`,
          vocab: [
            {
              word: `structural view of friendship`,
              definition: `Framework treating friendship as shaped enormously by structural and cultural conditions. Defenders: sociologists, urban designers, technology critics (Turkle "Reclaiming Conversation"), historians. Jeffrey Hall research: friendship formation requires substantial in-person hours (50 for casual, 90 for friend, 200+ for close friend). Putnam: changes in work, suburbanization, technology reduced friendship-supporting contact. Oldenburg's "third places" (neither home nor work where people gather casually) declining. Modern conditions often structurally hostile to friendship.`,
              audioPrompt: `The structural view of friendship treats friendship as shaped enormously by structural and cultural conditions, {name}. The friendship possibilities available to a person aren't just about individual choice; they're shaped by community design, work patterns, communication technology, cultural norms, geography, and economics. Jeffrey Hall at the University of Kansas studied how friendships form and found that friendship formation requires substantial in-person hours: roughly 50 hours of together-time to become a casual friend, 90 hours to become a friend, and over 200 hours to become a close friend. Modern conditions often don't provide these hours easily. Robert Putnam's research documented how changes in work patterns, suburbanization, and television-then-internet have reduced the kind of regular community contact that historically supported friendship. Sherry Turkle has documented how always-available phone-mediated communication can paradoxically reduce the kind of sustained conversation that builds depth. Ray Oldenburg's research on "third places" — places that are neither home nor work where people gather casually — documents their decline as friendship-supporting infrastructure.`,
            },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly exclusive. Most mature understanding integrates: friendship provides real benefits (instrumental); friendship is valuable in itself (intrinsic); friendship is shaped by structural conditions (structural). The forcing function of the argument is committing to a primary framing that shapes how you'll invest.`,
            `One framing as you decide. Each position implies different responses to friendship difficulty. Position 1: ask what specific benefits a friendship provides or doesn't, and adjust investment accordingly. Position 2: ask what kind of friendship this is (utility, pleasure, virtue) and what depth is appropriate. Position 3: ask what conditions are making this friendship easier or harder, and what could be changed at the structural level.`,
            `Another framing. The positions operate at different scales. Instrumental: transaction-by-transaction (what's working in this specific friendship?). Intrinsic: life-scale (what kind of person am I being in this relationship?). Structural: societal/decade-scale (what conditions am I navigating?). All three matter simultaneously.`,
            `One critical specific point. For your generation specifically, the structural factors are unprecedented in ways the other positions don't fully address. Adolescent friendship today happens in conditions designed by attention-economy companies to capture interaction time that previously went to in-person friendship. Hall's hours-required research is particularly relevant given how those hours are being absorbed by screens. Underweighting the structural dimension is the most common error among adults who absorbed older frameworks before the conditions changed.`,
            `One last framing. You're 12. The friendship patterns you develop now compound across decades. Adults with deep adolescent friendships often carry them through life; adults whose adolescent friendships were dominated by phone-mediated thin connection often struggle to build deeper relationships later. Building deliberate framework now, especially one that takes the structural dimension seriously, protects against the loneliness epidemic the research has documented.`,
          ],
          image: `/voyager-assets/life-wellness/l10-s5-before.webp`,
          imageCaption: `Three positions operate at different scales: instrumental (transaction), intrinsic (life-scale), structural (societal). Structural factor unprecedented for your generation specifically.`,
          vocab: [
            {
              word: `integrating friendship frameworks`,
              definition: `Mature friendship literacy integrates all three positions. Instrumental (transaction-scale): what benefits does this friendship provide? Intrinsic (life-scale): what kind of friendship is this, what depth is appropriate, who am I being in it? Structural (societal/decade-scale): what conditions support or undermine friendship for me? All three operate simultaneously. For Voyager-age adolescents, structural factor is unprecedented; phone/attention economy absorbs hours that previously went to in-person friendship; Hall's hours-required research particularly relevant given screen displacement.`,
              audioPrompt: `Integrating friendship frameworks is what mature friendship literacy involves, {name}. Each position operates at a different scale. Instrumental framing is transaction-by-transaction: what's working in this specific friendship? What does it provide? Intrinsic framing is life-scale: what kind of friendship is this — utility, pleasure, virtue? What depth is appropriate? Who am I being in this relationship? Structural framing is societal and decade-scale: what conditions support or undermine friendship for me? All three matter simultaneously. For your generation specifically, the structural factors are unprecedented in ways the other positions don't fully address. Adolescent friendship today happens in conditions designed by attention-economy companies to capture interaction time that previously went to in-person friendship. Hall's research on hours required for friendship formation is particularly relevant given how those hours are being absorbed by screens.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l10-argument-builder`,
          type: `argument-builder`,
          headline: `What Is Friendship For?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders.`,
          positions: [
            {
              id: `instrumental`,
              label: `Instrumental: friendship matters for what it provides (support, opportunity, belonging, health)`,
              summary: `Friendship matters because of what it provides: social support, practical help, information networks, career opportunities, emotional regulation, belonging. Defenders: Putnam (social capital, "Bowling Alone"), Holt-Lunstad (loneliness research), Granovetter (strength of weak ties). Strength: empirically grounded, practically actionable, captures real benefits. Limit: instrumental friendship can be replaceable; can produce calculating rather than freely-given relationships.`,
            },
            {
              id: `intrinsic`,
              label: `Intrinsic: friendship is valuable in itself, not primarily for what it provides`,
              summary: `Friendship valuable in itself; constitutive of flourishing human life. Aristotle's "Nicomachean Ethics" Books 8-9: three types (utility, pleasure, virtue/character). Friendships of virtue deepest, slowest, most durable. Most people only have a few such friendships across a life. Strength: captures something real about deep friendship that instrumental framings miss; honors philosophical wisdom. Limit: can underweight real benefits; can be elitist about utility and pleasure friendships.`,
            },
            {
              id: `structural`,
              label: `Structural: friendship is shaped enormously by conditions, design, and culture`,
              summary: `Friendship shaped by structural and cultural conditions. Hall research: friendship formation requires 50/90/200+ hours of in-person time. Modern conditions (suburbanization, work patterns, screens) reduce friendship-supporting contact. Putnam (social capital decline), Turkle (technology effects), Oldenburg (third places). Strength: addresses unprecedented conditions for your generation. Limit: can underweight individual agency; can become defeatist.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Holt-Lunstad's meta-analyses found lacking social connection has health effects comparable to smoking 15 cigarettes a day; substantially increased mortality risk; effects in cardiovascular disease, immune function, mental health, cognitive decline.`,
              source: `Holt-Lunstad meta-analyses; ongoing loneliness research`,
            },
            {
              id: `e2`,
              text: `US Surgeon General Vivek Murthy released 2023 advisory declaring loneliness and social isolation a public health epidemic. His 2020 book "Together" synthesizes research and medical career observations.`,
              source: `Murthy 2020, 2023 advisory`,
            },
            {
              id: `e3`,
              text: `Aristotle's "Nicomachean Ethics" Books 8-9 identified three types of friendship: utility (real but dissolves when utility goes), pleasure (real but fades when pleasure does), virtue/character (deepest, slowest, most durable, rare). Foundation of philosophical thinking on friendship for over 2,000 years.`,
              source: `Aristotle "Nicomachean Ethics"; ongoing philosophical engagement`,
            },
            {
              id: `e4`,
              text: `Jeffrey Hall (University of Kansas) research: friendship formation requires substantial in-person hours — roughly 50 hours for casual friend, 90 for friend, 200+ for close friend. Modern conditions often don't provide these hours easily.`,
              source: `Hall 2018 research`,
            },
            {
              id: `e5`,
              text: `Adolescent loneliness has increased dramatically since approximately 2012 (CDC, Common Sense Media, academic researchers), coinciding with widespread smartphone adoption and social media use. Adolescents today report less in-person time with friends, more digital communication, higher loneliness rates than previous generations at same age.`,
              source: `Multiple population-level data sources`,
            },
            {
              id: `e6`,
              text: `Robert Putnam's "Bowling Alone" (2000) documented decline of social capital in late-20th-century America: declining civic participation, fewer community ties, less neighborhood interaction, consequences for civic and personal life.`,
              source: `Putnam 2000; subsequent research`,
            },
            {
              id: `e7`,
              text: `Sherry Turkle's "Reclaiming Conversation" (2015) and other works document how always-available phone-mediated communication can paradoxically reduce sustained conversation that builds depth. Constant interruption changes the kind of contact that produces close friendship.`,
              source: `Turkle 2011, 2015; tech and connection research`,
            },
            {
              id: `e8`,
              text: `Granovetter's "strength of weak ties" (1973) research shows that distant social connections (not just close friends) provide substantial career and information benefits. The casual acquaintance network turns out to matter substantially for opportunity.`,
              source: `Granovetter 1973; social network research`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that friendship as currently understood in modern Western culture is the right unit of analysis. But maybe the friendship category is itself culturally specific in ways that obscure other forms of human connection. Many cultures across history have organized close non-family relationships differently: extended kinship networks; age-based cohorts that move through life together; communal living arrangements; deep colleague and craft relationships; religious community ties; mentor-student bonds that persist for decades. The modern Western 'friend' (chosen, peer, separate from family and work) is a relatively specific cultural form. Maybe the right question isn't 'what should friendship be?' but 'what forms of close non-family connection actually serve human flourishing, and what conditions support them?' Why assume the friendship category as we know it is the right thing to be optimizing?"`,
            promptInstruction: `In 3-4 sentences, respond. Is "friendship" the right unit, or are there other forms of close connection that serve similar functions? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What did Holt-Lunstad's loneliness research find?`,
              options: [
                `Loneliness is fine`,
                `Lacking social connection has health effects comparable to smoking 15 cigarettes/day; loneliness substantially increases mortality risk comparable to obesity; effects appear in cardiovascular disease, immune function, mental health, cognitive decline; social connection is biologically protective in measurable ways`,
                `Random research`,
                `Just nice`,
              ],
              correctIndex: 1,
              explanation: `The research has changed how public health thinks about loneliness. The "15 cigarettes" comparison is particularly striking because cigarette risks are widely understood; framing loneliness in comparable terms helps people see it as the major health issue it is.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did US Surgeon General Vivek Murthy do regarding loneliness?`,
              options: [
                `Random`,
                `Released 2023 advisory declaring loneliness and social isolation a public health epidemic; 2020 book "Together" synthesizes research and his medical career observations; documents adolescent loneliness rising dramatically over past decade; positions loneliness as comparable in public health significance to other major epidemics`,
                `Nothing`,
                `Just a book`,
              ],
              correctIndex: 1,
              explanation: `The Surgeon General's advisory matters because it positions loneliness officially as a public health issue requiring institutional response, not just individual-level concern. The 2023 advisory specifically called for changes in workplaces, schools, healthcare, and community design.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are Aristotle's three types of friendship?`,
              options: [
                `Random`,
                `Friendships of utility (people are friends because of mutual benefit; real but dissolve when utility goes away); friendships of pleasure (people are friends because of enjoyment together; real but fade when pleasure does); friendships of virtue/character (people are friends because of who the other person is and shared commitment to flourishing; deepest, slowest to develop, most durable, rare); from "Nicomachean Ethics" Books 8-9`,
                `Just friendship`,
                `Random philosophy`,
              ],
              correctIndex: 1,
              explanation: `Aristotle's distinction remains foundational because it captures real differences between kinds of friendship. Most actual friendships include elements of multiple types; the framework helps distinguish what kind of investment is appropriate. Friendships of virtue typically require years and shared deep experiences.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did Jeffrey Hall's research find about friendship formation?`,
              options: [
                `Random`,
                `Friendship formation requires substantial in-person hours: roughly 50 hours of together-time to become a "casual friend," 90 hours to become a "friend," 200+ hours to become a "close friend"; modern conditions often don't provide these hours easily; specific implications for how friendships actually develop`,
                `Just minutes`,
                `Random study`,
              ],
              correctIndex: 1,
              explanation: `The findings matter because they're concrete: friendship isn't magic; it requires specific time investment. The hours can't usually be replaced by phone-mediated contact effectively. Modern conditions (work hours, screen time, geographic spread) often don't provide these hours easily for adolescents or adults.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did Putnam document in "Bowling Alone"?`,
              options: [
                `Random book`,
                `Decline of social capital in late-20th-century America: declining civic participation, fewer community ties, less neighborhood interaction, declining membership in clubs/associations/community groups; documented across multiple measures across decades; identified consequences for civic, economic, and personal life`,
                `Just sports`,
                `Random thesis`,
              ],
              correctIndex: 1,
              explanation: `Putnam's research is foundational for the structural view of friendship and community. The decline he documented continued and arguably accelerated after the book's publication, particularly with smartphone adoption. The structural conditions for friendship have gotten harder, not easier, since 2000.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's particular about adolescent loneliness today?`,
              options: [
                `Same as always`,
                `Increased dramatically since approximately 2012, coinciding with widespread smartphone adoption and social media use; adolescents today report less in-person time with friends, more digital communication, higher loneliness rates than previous generations at same age; relationship complicated (correlation not necessarily causation) but timing pattern striking; structural conditions for adolescent friendship have changed substantially`,
                `Random`,
                `Just typical`,
              ],
              correctIndex: 1,
              explanation: `The pattern is well-documented across multiple data sources (CDC, Common Sense Media, academic researchers). Your generation is experiencing adolescent friendship under conditions that previous generations didn't face. The structural dimension is unprecedented.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does Sherry Turkle argue about technology and friendship?`,
              options: [
                `Tech is fine`,
                `Always-available phone-mediated communication can paradoxically reduce sustained conversation that builds depth; constant interruption changes the kind of contact that produces close friendship; "Reclaiming Conversation" (2015) and other works document this pattern; not that all phone-mediated contact is bad but that always-on connection often substitutes for the depth-building kind`,
                `Random claim`,
                `Just bad`,
              ],
              correctIndex: 1,
              explanation: `Turkle's work nuances simple "tech bad" narratives. Phone-mediated contact has real value (maintaining connections across distance, accessing community for marginalized people, supporting introverts) and real costs (substituting for depth-building in-person time, fragmenting attention during interaction, optimizing for engagement rather than relationship). The structural view treats this seriously.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How do the three positions integrate in practice?`,
              options: [
                `They don't`,
                `Instrumental (transaction-scale): what does this friendship provide? Intrinsic (life-scale): what kind of friendship is this, what depth is appropriate, who am I being? Structural (societal/decade-scale): what conditions support or undermine friendship for me? All three operate simultaneously; mature literacy integrates them`,
                `Random`,
                `Just one`,
              ],
              correctIndex: 1,
              explanation: `For Voyager-age adolescents specifically, the structural dimension is unprecedented in ways that didn't apply to older generations. Underweighting structural factors is the most common error among adults who absorbed older frameworks before conditions changed.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Phone-mediated friendship (texting, social media, video calls) fully substitutes for in-person friendship time.`,
              correctAnswer: false,
              explanation: `False. Research shows phone-mediated interaction is less effective at preventing loneliness than in-person interaction (though better than no interaction). It can maintain existing relationships but generally doesn't build new deep friendships effectively. Hall's hours research suggests in-person time is what produces friendship formation; phone time doesn't substitute one-for-one.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I have like 500 'friends' on social media but I feel lonely all the time. I don't get it. I'm constantly connected." Based on this lesson, what should you point out?`,
              options: [
                `"Just connect more"`,
                `"That makes sense given what loneliness research shows. Three things to think about. First, 'friend' on social media is closer to Aristotle's friendship of utility (mutual brief interaction) than friendship of virtue (deep mutual knowledge); the word 'friend' on platforms is mostly marketing language that doesn't track what philosophical and research traditions mean by friendship. Second, Jeffrey Hall's research shows friendship formation requires substantial in-person hours — roughly 200 to become close friends. Social media interaction generally doesn't substitute for those hours; you can have 500 connections without any close friendships. Third, Holt-Lunstad and Murthy's loneliness research shows that what protects against loneliness specifically is in-person time with people who know you, regular interaction not just occasional, and shared focus on something other than the relationship itself. The phone is partly the cause, not just the workaround. Specific shifts that might help: spend in-person time with a small number of people consistently, ideally doing shared activities (not just hanging out and looking at phones together); diversify connections beyond your immediate phone-mediated network; recognize that the structural conditions of your generation are making this harder than it was for older people, which isn't your fault, and you can still build deliberate practices that work."`,
                `"Random advice"`,
                `"More social media"`,
              ],
              correctIndex: 1,
              explanation: `Real applied friendship literacy. Address all three frameworks: the word "friend" itself is being used in commercially-loaded ways (intrinsic); hours required for actual friendship (instrumental + structural); structural conditions that make modern friendship harder. Give specific actionable shifts. Don't blame the friend for the loneliness; name the structural factors while pointing toward what does work.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for friendship? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: how do you currently distribute your time across in-person friendship, phone-mediated friendship, and other activities? Does that match your stated values?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with deliberate friendship practice across decades, what does that protect and produce?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific friendship you have. Apply all three frameworks. What kind is it (utility/pleasure/virtue)? What's it providing? What structural conditions help or hurt it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument questioned whether "friendship" is even the right unit. Are there other forms of close non-family connection in your life worth attending to (mentors, community ties, religious connections)?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Track your friendship hours for one week: in-person, phone-mediated, none. Compare to Hall's hours-required research and your stated friendship goals.` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Friendship patterns at 12 compound across decades. Two paths.`,
          familyActivity: {
            title: `The Family Friendship Conversation`,
            duration: `45 minutes`,
            description: `Share the loneliness research and three frameworks. Most adults have absorbed friendship patterns from their own adolescence (before current structural conditions) and may not recognize how different conditions are now. The conversation often surfaces specific things worth changing: family practices around phones during gatherings, prioritizing in-person time with extended family/friends, recognizing the loneliness epidemic as a real public health issue worth addressing. Consider establishing family practices that protect friendship time: phones away during shared activities, regular in-person gatherings with close people, recognition of "third places" worth supporting.`,
          },
          projectOption: {
            title: `Read on friendship and loneliness, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Vivek Murthy's "Together" (loneliness research, medical career observations, accessible synthesis), Sherry Turkle's "Reclaiming Conversation" or "Alone Together" (technology and connection), Robert Putnam's "Bowling Alone" (social capital, structural decline, denser but foundational). Apply concepts during reading period. Write 1,500 words on what you learned about friendship and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Real friendship literacy at 12 protects against the loneliness epidemic the research has documented and supports lifelong relational health.`,
          },
          identityQuestion: `If you become someone who treats friendship as one of the most important investments in your life, recognizes the structural conditions affecting it, and builds deliberate practice across decades — what does that change about your mental health, sense of meaning, and connections at age 30, 50, 80?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who treats friendship as one of the most important wellness investments.`,
            `A person who recognizes structural conditions affecting friendship for my generation.`,
            `Someone who builds deep friendships across decades, not just connections across platforms.`,
          ],
          saveKey: `identity_responses_lw_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Tenth Life Wellness lesson done. You now know the loneliness research (Holt-Lunstad, Murthy), three serious positions on friendship (instrumental, intrinsic, structural), key thinkers (Aristotle, Putnam, Hall, Turkle, Granovetter, Oldenburg), specific data on friendship formation hours, and the unprecedented structural conditions affecting your generation specifically. That's framework most adults don't have. Halfway through this band. Next time: family relationships. Three real situations. Case Study format. Let's go. — Terra`,
          badge: `connection-literate`,
          badgeName: `Connection Literate`,
          xpEarned: 75,
          competencies: [
            `Knows loneliness research (Holt-Lunstad, Murthy 2023 advisory)`,
            `Distinguishes three friendship frameworks (instrumental, intrinsic, structural)`,
            `Knows key thinkers (Aristotle three types, Putnam, Hall, Turkle, Granovetter, Oldenburg)`,
            `Articulates Hall's hours-required research (50/90/200+)`,
            `Recognizes unprecedented structural conditions affecting generation's friendship`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Family Relationships`,
            hook: `Three real family situations. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L10 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
