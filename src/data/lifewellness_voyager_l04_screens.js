// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L04 — Food, Nutrition, And The Diet Culture Problem
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Food Literacy, Anti-Diet, Sociocultural
// CALIBRATED: Voyager spec v1.1 (May 2026)
// SAFETY: No specific numbers, targets, or plans; media-literacy framing;
//         early escalation path; National Alliance for Eating Disorders reference
// Interaction format: ARGUMENT BUILDER (nutritional-science / anti-diet / sociocultural)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l04-v1";

const LIFEWELLNESS_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-04`,
      title: `Food, Nutrition, And The Diet Culture Problem`,
      duration: 35,
      xpReward: 75,
      badge: `food-literate`,
      badgeName: `Food Literate`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, diet culture is the water you swim in — the assumption that thinness equals health, that food is good or bad, that your body needs fixing. It's everywhere and mostly invisible. This lesson names it, examines what nutrition science actually says, and introduces the frameworks that push back against it. You'll never read a health headline the same way again.`,
          headline: `Food, Nutrition, And The Diet Culture Problem`,
          subtitle: `Three serious positions. Media literacy, not prescription. No numbers, no targets, no rules.`,
          visual: `/voyager-assets/life-wellness/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Diet Culture Is (And Why It Matters For You)`,
          paragraphs: [
            `Before any of the research positions, name the thing in the room. Diet culture is a set of beliefs and practices that pop content treats as common sense but that researchers have identified as a specific harmful cultural pattern. Christy Harrison, in her 2019 book "Anti-Diet," defines diet culture as a system that worships thinness, equates being thin with being healthy and morally good, treats certain ways of eating as virtuous and others as shameful, and produces enormous profits for the diet and wellness industries.`,
            `Diet culture operates through specific patterns. Foods get sorted into "good" and "bad" categories that have nothing to do with actual nutrition. Eating certain things becomes a moral question, with "I was so good today" or "I was so bad" language attached. Bodies get sorted similarly, with thinness treated as virtuous and larger bodies as failure. The wellness industry has dressed up much of this in newer language ("clean eating," "wellness," "real food," various restrictive eating patterns marketed as health) but the underlying structure is the same.`,
            `Why diet culture matters specifically for 11-12 year olds. The research is unambiguous: adolescence is a developmentally critical period for body image and eating relationship formation. Body dissatisfaction during adolescence is one of the strongest predictors of eating disorder development. Eating disorders are serious medical conditions with the highest mortality rate of any mental illness category. Exposure to diet culture during adolescence is associated with worse mental health outcomes, more body dissatisfaction, and increased eating disorder risk. The diet culture environment your generation is growing up in is more intense than any previous generation has experienced because of social media.`,
            `Where I'm going to draw lines in this lesson. I won't tell you what to eat, what to weigh, what to avoid, or what foods are "healthy" or "unhealthy." I won't give you numbers (calories, grams, macros, BMI) because research on adolescent eating is clear that this kind of detail often produces more harm than benefit, regardless of intent. I'll engage with three research positions on the broader question of what eating well actually means; you can build your argument for which framing fits your understanding.`,
            `If you're struggling with food, body image, or eating right now. Please talk to a trusted adult: a parent, school counselor, doctor, or another adult you trust. You can also call or text the National Alliance for Eating Disorders helpline (the main current resource as of this writing). Disordered eating in adolescence is treatable, and earlier treatment produces better outcomes. The shame diet culture attaches to these struggles is itself part of diet culture; getting help is the opposite of failure.`,
          ],
          image: `/voyager-assets/life-wellness/l04-s1-diet-culture.webp`,
          imageCaption: `Diet culture defined (Christy Harrison): worships thinness, equates thin with healthy and morally good, makes eating a moral question. Particularly harmful during adolescence.`,
          vocab: [
            {
              word: `diet culture`,
              definition: `System of beliefs that worships thinness, equates thinness with health and moral goodness, treats eating as a moral question (good vs bad foods), and produces profits for diet and wellness industries. Christy Harrison's framing in "Anti-Diet" (2019). Operates through food moralizing ("good"/"bad" foods), body moralizing (thin as virtuous), and restrictive practices marketed as wellness. Adolescent exposure is associated with body dissatisfaction, worse mental health, and increased eating disorder risk.`,
              audioPrompt: `Diet culture, as defined by Christy Harrison in her 2019 book "Anti-Diet," is a system of beliefs and practices, {name}. It worships thinness. It equates being thin with being healthy and morally good. It treats eating as a moral question, sorting foods into "good" and "bad" categories that often have little to do with actual nutrition. It produces enormous profits for the diet and wellness industries. Diet culture operates through specific patterns. Foods get sorted into virtuous and shameful categories. Eating becomes a moral question with "I was so good today" or "I was so bad" language attached. Bodies get sorted similarly. The wellness industry has dressed much of this up in newer language: clean eating, wellness, real food, various restrictive eating patterns marketed as health. The underlying structure is the same. Adolescent exposure is particularly harmful because adolescence is a critical period for body image and eating relationship formation. Body dissatisfaction during adolescence is one of the strongest predictors of eating disorder development.`,
            },
            {
              word: `body dissatisfaction`,
              definition: `Negative evaluation of one's own body that research identifies as one of the strongest predictors of eating disorder development during adolescence. According to the text, adolescence is a developmentally critical period for body image formation, and diet culture exposure during this period is associated with increased body dissatisfaction, worse mental health, and higher eating disorder risk.`,
              audioPrompt: `Body dissatisfaction is a negative evaluation of one's own body, {name}. Terra here — the text identifies it as one of the strongest predictors of eating disorder development, specifically during adolescence. Adolescence is a developmentally critical period: body image and the relationship with food are forming in ways that tend to persist. Research is clear that diet culture exposure during this period is associated with increased body dissatisfaction, worse mental health outcomes, and elevated eating disorder risk. Eating disorders are serious medical conditions with the highest mortality rate of any mental illness category, making body dissatisfaction not a minor concern but a significant one. The diet culture environment your generation is growing up in is more intense than any previous generation has experienced because of social media — constant exposure to images, messaging, and influencer content that sorts bodies into acceptable and unacceptable. The text is direct about what this means practically: building media literacy about how diet culture operates provides a degree of protection. Being able to recognize the patterns Christy Harrison names — the moralizing of food and bodies, the worship of thinness, the wellness industry repackaging restriction as health — reduces their power to shape how you see yourself.`,
            },
            {
              word: `food moralizing`,
              definition: `The practice of assigning moral value to food choices and eating patterns — calling certain foods "good" or "bad," using "I was so good today" or "I was bad" language about eating, treating restriction as virtue and indulgence as failure. The text identifies food moralizing as one of the core operating patterns of diet culture, distinct from any actual nutritional science about how different foods affect health.`,
              audioPrompt: `Food moralizing is the practice of assigning moral value to food choices and eating patterns, {name}. Terra here — this is one of the core operating patterns Christy Harrison names in diet culture. "I was so good today" attached to eating a salad. "I was so bad" attached to eating a piece of cake. Foods sorted into "good" and "bad" categories, or "clean" and "dirty," or "healthy" and "cheat" foods. The moral framing goes beyond nutritional claims; it connects what you eat to who you are as a person. The text distinguishes this from actual nutritional science, which makes empirical claims about how eating patterns affect health outcomes but does not attach moral worth to food choices. Diet culture adds that moral layer — and then the wellness industry has dressed it up in newer, science-sounding language: "clean eating," "real food," "plant-based," various restrictive patterns marketed as wellness rather than diet. The underlying structure of food moralizing remains the same underneath the newer vocabulary. Recognizing food moralizing when it appears — in social media content, in product marketing, in everyday conversation — is a basic component of diet culture media literacy.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Conventional Nutritional Science`,
          paragraphs: [
            `The first position: there's real science about how food affects bodies and health, and eating well means engaging with that research. Bodies need certain nutrients to develop and function. Eating patterns affect chronic disease risk across the lifespan. Public health benefits enormously from research-informed dietary guidance at population scale.`,
            `Defenders include much of mainstream nutrition science, registered dietitians, public health researchers, and medical professionals. The framework has produced real achievements. Identification of nutrient deficiencies that caused devastating diseases (scurvy, beriberi, pellagra, rickets) and the public health interventions that mostly eliminated them. Research on dietary patterns and chronic disease risk. Food safety regulations preventing widespread foodborne illness. None of this is small; nutrition science has contributed to dramatic improvements in human health.`,
            `The framework's strengths. It's empirically grounded: real research, peer-reviewed, replicated. It addresses real biological reality: bodies do need nutrients; eating patterns do affect health. It works at population scale: nutrition policy interventions have measurable effects. Compared to "eat whatever you feel like" frameworks, conventional nutrition science offers actual information about food and health.`,
            `The framework's limits. Conventional nutrition science has been deeply entangled with diet culture, often without examining that entanglement. Population-scale findings get translated into individual prescriptions that don't account for cultural, social, economic, and personal variation. The "official" guidance keeps changing in ways that suggest the field is less settled than it presents itself (eggs were bad, then good, then complicated; fat was bad, then not; saturated fat, sugar, gluten, dairy have cycled through being demonized). Weight-focused interventions have been supported by mainstream nutrition science despite extensive evidence they fail long-term in most people.`,
            `One particularly important critique. Nutritional science has often confused association with causation in observational studies. A finding that "people who eat more X have better outcomes" doesn't establish that X causes the outcomes; people who eat more X often differ in many other ways. The field has refined its methods over decades, but a lot of nutrition advice you encounter in pop content is based on weaker evidence than it appears.`,
            `What this position implies practically. Take nutrition research seriously while maintaining appropriate skepticism. Understand that bodies have real nutritional needs. Recognize that population-level findings might or might not apply to your specific situation. Be especially skeptical of any framing that treats specific foods as "good" or "bad" in a moral sense; that's diet culture wearing nutrition science as a costume.`,
          ],
          image: `/voyager-assets/life-wellness/l04-s2-nutrition.webp`,
          imageCaption: `Position 1: conventional nutritional science. Real achievements: deficiency diseases eliminated. Real limits: entangled with diet culture, confuses association with causation, official advice keeps changing.`,
          vocab: [
            {
              word: `conventional nutritional science`,
              definition: `Mainstream nutrition research and dietary guidance from registered dietitians, public health, and medicine. Real achievements: identifying nutrient deficiencies and reducing them at population scale; research on dietary patterns and disease risk; food safety regulation. Real limits: entanglement with diet culture; population findings translated into individual prescriptions; "official" guidance has shifted repeatedly; often confuses association with causation in observational studies; has supported weight-focused interventions that fail long-term in most people.`,
              audioPrompt: `Conventional nutritional science refers to the mainstream nutrition research and dietary guidance from registered dietitians, public health agencies, and medicine, {name}. The field has real achievements. Identification of nutrient deficiencies like scurvy from lack of vitamin C, beriberi from lack of thiamine, pellagra from lack of niacin, and the public health interventions that mostly eliminated them at population scale. Research on dietary patterns and chronic disease risk. Food safety regulations preventing foodborne illness. None of this is small; nutrition science has contributed to dramatic improvements in human health. The field also has real limits. It has been entangled with diet culture, often without examining that entanglement. Population-scale findings get translated into individual prescriptions that don't account for variation. The official guidance keeps changing in ways that suggest the field is less settled than it presents itself. Mainstream nutrition science has often confused association with causation in observational studies; a lot of nutrition advice in pop content is based on weaker evidence than it appears.`,
            },
            {
              word: `nutrient deficiency`,
              definition: `A shortage of a specific nutrient that the body requires for normal function. The text identifies addressing nutrient deficiencies as one of conventional nutritional science's genuine achievements — identifying diseases like scurvy, beriberi, pellagra, and rickets as caused by specific deficiencies, then producing public health interventions that mostly eliminated them at population scale.`,
              audioPrompt: `A nutrient deficiency is a shortage of a specific nutrient the body requires for normal function, {name}. Terra here — the text identifies addressing nutrient deficiencies as one of conventional nutritional science's genuine achievements, and it is worth understanding why this is significant. Before researchers identified the cause, diseases like scurvy, beriberi, pellagra, and rickets caused widespread suffering and death. Scurvy, from lack of vitamin C, caused sailors and others without access to fresh food to suffer bleeding gums, wound failure, and death. Beriberi, from lack of thiamine (vitamin B1), caused nerve damage and heart failure. Pellagra, from lack of niacin, caused what was historically called the "four Ds" — dermatitis, diarrhea, dementia, and death. Rickets, from lack of vitamin D, caused soft and deformed bones in children. Nutritional science identified each of these conditions as caused by specific deficiencies, then produced public health interventions — food fortification, dietary guidelines, supplementation programs — that mostly eliminated them at population scale in developed countries. This is the kind of concrete, measurable achievement the text points to when distinguishing what nutritional science gets right from what it gets wrong in its entanglement with diet culture.`,
            },
            {
              word: `association vs causation`,
              definition: `A critical distinction in evaluating nutrition research. A finding that people who eat more of something have better outcomes does not establish that the food causes the outcomes — those people may differ in many other ways. The text identifies confusion of association with causation as a key limit of conventional nutritional science and a reason why much pop content nutrition advice is based on weaker evidence than it appears.`,
              audioPrompt: `Association versus causation is a critical distinction in evaluating nutrition research, {name}. Terra here — this is one of the most important analytical tools for reading any health claim, including food claims. An association finding says: people who do X tend to have outcome Y. It does not say: X causes Y. The text gives the general form of the problem: a finding that "people who eat more of something have better outcomes" doesn't establish that the food causes those outcomes, because people who eat more of that food often differ in many other ways. They may have higher income, which also provides better healthcare access. They may have different activity patterns, stress levels, sleep quality, or dozens of other factors that also affect the outcomes being measured. Nutritional research is especially vulnerable to this problem because most of it involves observational studies — watching what people eat and what happens to them — rather than controlled experiments where eating is randomly assigned. The text notes that the field has refined its methods over decades but that a lot of nutrition advice in pop content is based on observational associations presented as if they were established causation. Building the habit of asking "is this an association finding or a causation finding?" is basic scientific literacy for navigating food claims.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Anti-Diet And Weight-Inclusive`,
          paragraphs: [
            `The second position pushes back hard on diet culture and on weight-focused approaches to health. The core argument: diet culture causes more harm than benefit, weight is a poor proxy for health, intentional weight loss approaches fail in the vast majority of cases long-term, and building a healthy relationship with food matters more than restriction or weight management.`,
            `Defenders include Christy Harrison ("Anti-Diet," 2019; "The Wellness Trap," 2023), Aubrey Gordon ("What We Don't Talk About When We Talk About Fat," 2020; "You Just Need to Lose Weight," 2023), the Health at Every Size (HAES) movement, intuitive eating researchers Evelyn Tribole and Elyse Resch, weight stigma researcher Rebecca Puhl at the University of Connecticut, and many registered dietitians who have moved away from weight-focused practice. The position is grounded in extensive research, even where specific claims within it have been debated.`,
            `Specific research-based findings supporting the position. Meta-analyses of weight loss interventions (such as Mann and colleagues' 2007 review) find that the vast majority of people who lose weight through dieting regain it within 3-5 years; many gain more than they lost. Weight stigma research (Puhl and others) documents measurable physical and mental health harms from anti-fat bias, independent of weight itself. Intuitive eating research (developed from Tribole and Resch's framework starting in 1995) has documented benefits across multiple measures of physical and mental health when people stop dieting and learn to respond to internal hunger and fullness signals.`,
            `What this position implies practically. Reject diet culture and the moralizing of food. Don't categorize foods as "good" or "bad." Build a relationship with food based on listening to internal signals (hunger, fullness, what your body seems to need) rather than external rules. Recognize that weight is influenced by many factors largely outside individual control (genetics, medications, life circumstances, history of dieting). Address weight stigma as a real harm. Treat the relationship with food and body as the thing that matters, not specific food choices.`,
            `The position's strengths. Addresses real harms of diet culture that conventional nutrition science often ignored. Backed by extensive data on dieting failure rates, weight stigma harms, and intuitive eating benefits. Reduces eating disorder risk by removing the food-moralizing patterns that contribute to disordered eating development. Treats people of different body sizes with dignity rather than as problems to be solved.`,
            `The position's limits. Some specific HAES claims and specific advocates have been critiqued by other researchers; Lindo Bacon, an early major HAES figure, has been criticized for various professional issues that the movement has since distanced from. The position can be misread as "any eating pattern is fine" or "nutrition doesn't matter," which goes beyond what the framework actually claims. It engages less directly with structural food environment issues than the sociocultural position does. The framework is mostly stronger in critiquing diet culture than in offering positive guidance about food.`,
          ],
          image: `/voyager-assets/life-wellness/l04-s3-antidiet.webp`,
          imageCaption: `Position 2: anti-diet and weight-inclusive. Harrison, Gordon, intuitive eating researchers (Tribole, Resch), weight stigma research (Puhl). Backed by dieting failure data and weight stigma research.`,
          vocab: [
            {
              word: `anti-diet`,
              definition: `Research-grounded framework rejecting diet culture and weight-focused health interventions. Core findings: dieting fails long-term in the vast majority of cases (Mann et al 2007 meta-analysis); weight stigma causes measurable harm independent of weight itself (Puhl); intuitive eating produces health benefits across multiple measures (Tribole, Resch); building a relationship with food matters more than restriction. Major voices: Christy Harrison, Aubrey Gordon, HAES movement, weight-inclusive registered dietitians.`,
              audioPrompt: `The anti-diet and weight-inclusive framework is a research-grounded position that rejects diet culture and weight-focused health interventions, {name}. Core findings supporting the position. Meta-analyses of weight loss interventions, such as Mann and colleagues' 2007 review, find that the vast majority of people who lose weight through dieting regain it within 3 to 5 years, many gain more than they lost. Weight stigma research from Rebecca Puhl at the University of Connecticut and others documents measurable physical and mental health harms from anti-fat bias, independent of weight itself. Intuitive eating research developed from Evelyn Tribole and Elyse Resch's framework starting in 1995 has documented benefits across multiple measures of physical and mental health when people stop dieting and learn to respond to internal hunger and fullness signals. Major voices include Christy Harrison's books "Anti-Diet" 2019 and "The Wellness Trap" 2023, Aubrey Gordon's work, the Health at Every Size movement, and many weight-inclusive registered dietitians who have moved away from weight-focused practice.`,
            },
            {
              word: `intuitive eating`,
              definition: `A framework developed by Evelyn Tribole and Elyse Resch starting in 1995 that involves stopping dieting and learning to respond to internal hunger and fullness signals rather than external food rules. Research has documented benefits across multiple measures: better mental health, more stable eating patterns, and less eating disorder symptomatology compared to restriction-based approaches.`,
              audioPrompt: `Intuitive eating is a framework developed by Evelyn Tribole and Elyse Resch starting in 1995, {name}. Terra here — the core of the framework is stopping the use of external food rules to govern eating and instead learning to respond to internal signals: hunger, fullness, and what your body seems to need. This sounds simple but is more involved than it appears, because diet culture actively suppresses these internal signals through years of rule-following. People who have dieted extensively often report that they no longer recognize hunger clearly, that they feel fear or guilt around fullness, and that they have learned to distrust their body's signals in favor of external rules. Intuitive eating is a process of rebuilding that internal attunement. Research has documented benefits across multiple measures. Better mental health. More stable eating patterns. Less eating disorder symptomatology compared to restriction-based approaches. The text is careful to note that the framework is not "eat whatever, whenever" — it is a specific framework with developed principles. It also has limits: some specific HAES claims have been critiqued by other researchers, and the framework engages less directly with structural food environment issues than the sociocultural position does. It is strongest as a critique of diet culture and as a guide to building a healthier relationship with food.`,
            },
            {
              word: `weight stigma`,
              definition: `Bias and discrimination against people based on body size, documented by researcher Rebecca Puhl at the University of Connecticut and others to cause measurable physical and mental health harms independent of weight itself. Research shows stigma exposure produces stress responses, depressive symptoms, anxiety, and avoidance of healthcare — meaning harms often attributed to weight may be partly attributable to the stigma surrounding it.`,
              audioPrompt: `Weight stigma refers to bias and discrimination against people based on body size, {name}. Terra here — Rebecca Puhl at the University of Connecticut and other researchers have documented that weight stigma causes measurable physical and mental health harms independent of weight itself. This is a significant finding. Stigma exposure produces stress responses, depressive symptoms, anxiety, and avoidance of healthcare. When people in larger bodies avoid medical appointments because of the stigmatizing experiences they have had in healthcare settings, they miss care that affects their health. When chronic stress from stigma exposure affects metabolic and cardiovascular systems, that is a direct health harm from the stigma, not from the body size itself. The text notes this has significant implications for programs that try to help by encouraging weight loss: if those programs expose people to more stigmatizing framing, they may produce worse health outcomes rather than better ones, through the mechanism of increased stigma exposure. Weight-inclusive approaches address this directly by removing the stigmatizing framing and treating all body sizes with dignity. The research on weight stigma is one of the most important findings the anti-diet position draws on.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Sociocultural And Structural`,
          paragraphs: [
            `The third position takes yet another angle. Food choices aren't primarily individual decisions made by free agents; they're shaped enormously by environment, culture, marketing, economics, family patterns, and structural factors that individuals don't control. Understanding food and eating requires understanding the systems that shape what people eat, not just individual choices.`,
            `Defenders include Marion Nestle at NYU (the food politics researcher, not the candy company), Michael Pollan ("In Defense of Food," "The Omnivore's Dilemma," and others), food justice researchers, food environment researchers studying how neighborhoods affect eating patterns, and structural public health researchers. The framework draws on sociology, anthropology, food studies, and public health research that's largely been outside the mainstream nutrition science and outside the anti-diet conversation.`,
            `Specific research and findings supporting the position. Food environment research shows that what people eat is strongly predicted by what's available, affordable, and marketed in their neighborhoods. Food industry research (Nestle and others) documents how processed food companies use marketing, lobbying, and scientific research funding to shape both individual preferences and dietary guidelines. Food justice research documents how race, class, and geography shape food access in ways that have nothing to do with individual choice. Historical food research shows how dramatically eating patterns have changed across generations due to industrialization, marketing, and policy.`,
            `What this position implies practically. Recognize that your eating happens in a context that was largely shaped before you got there. Family food patterns, what's available where you live, what's marketed to you on social media, what's affordable, what your culture and community eat — these shape your eating far more than individual willpower or knowledge does. The right "lever" for change at the population level is often structural (policy, food environment, regulation) rather than individual (telling people what to eat). At the individual level, recognizing the structural factors operating on you helps you see what's actually happening rather than blaming yourself for environment-shaped patterns.`,
            `The position's strengths. Captures real structural factors that the other positions underweight. Explains why individual-focused interventions fail at population scale. Addresses food industry manipulation directly. Provides a framework for thinking about food that doesn't blame individuals for systemic patterns. Engages with cultural and anthropological dimensions of food that pure nutrition science misses.`,
            `The position's limits. Can underweight individual agency; even within constrained environments, people make choices. Structural changes are slow; the position doesn't help much in the meantime. Can become defeatist if read as "individuals can't do anything until structures change." The framework works best as a complement to individual frameworks rather than as a replacement for them.`,
          ],
          image: `/voyager-assets/life-wellness/l04-s4-structural.webp`,
          imageCaption: `Position 3: sociocultural and structural. Marion Nestle, Michael Pollan, food justice researchers. Food choices shaped by environment, marketing, policy, culture, economics. Structural lever for population change.`,
          vocab: [
            {
              word: `structural factors`,
              definition: `Framework recognizing that food choices are shaped enormously by environment, culture, marketing, economics, and policy rather than primarily by individual choice. Marion Nestle's "Food Politics" documents food industry influence on dietary guidelines and consumer preferences. Food justice research documents how race, class, and geography shape access. Structural framework implies population-level change comes mostly from policy and environment, not telling individuals what to eat. Complements individual-focused frameworks rather than replacing them.`,
              audioPrompt: `The food environment and structural framework recognizes that food choices are shaped enormously by environment, culture, marketing, economics, and policy rather than primarily by individual choice, {name}. Defenders include Marion Nestle at NYU, whose book "Food Politics" documents food industry influence on dietary guidelines and consumer preferences; Michael Pollan in books like "In Defense of Food" and "The Omnivore's Dilemma"; food justice researchers documenting how race, class, and geography shape food access; and food environment researchers studying how neighborhoods affect eating patterns. Food environment research shows that what people eat is strongly predicted by what's available, affordable, and marketed in their neighborhoods. Food industry research documents how processed food companies use marketing, lobbying, and scientific research funding to shape both individual preferences and dietary guidelines. The right lever for change at the population level is often structural rather than individual. At the individual level, recognizing the structural factors operating on you helps you see what's actually happening rather than blaming yourself for environment-shaped patterns.`,
            },
            {
              word: `food environment`,
              definition: `The physical and economic context that determines what food is available, affordable, and marketed in a given neighborhood or community. Food environment research shows that what people eat is strongly predicted by these environmental conditions — not primarily by individual knowledge or willpower. Race, class, and geography shape food environment in ways that are outside individual control.`,
              audioPrompt: `The food environment is the physical and economic context that determines what food is available, affordable, and marketed in a given neighborhood or community, {name}. Terra here — food environment research makes a specific empirical claim: what people eat is strongly predicted by what their environment offers, not primarily by individual knowledge, willpower, or values. If a neighborhood has many fast food outlets and few grocery stores with fresh produce, people in that neighborhood will eat differently from people in neighborhoods with different options — not because of different willpower, but because of different environments. The text names how race, class, and geography shape food environments in ways that individuals did not choose and largely cannot change on their own. Food justice researchers have documented systematic patterns in which lower-income and predominantly nonwhite neighborhoods have less access to affordable, nutritious food — a pattern sometimes called a food desert. Marion Nestle's research documents how processed food companies influence what gets available and marketed in different communities through lobbying, marketing strategy, and scientific research funding. The practical implication for individual self-understanding is significant: recognizing the structural factors operating on you helps you see what is actually shaping your eating rather than defaulting to self-blame for patterns that are largely environment-produced.`,
            },
            {
              word: `food politics`,
              definition: `The study of how industry interests, lobbying, marketing, and policy shape food supply, dietary guidelines, and consumer behavior. Marion Nestle at NYU is a leading researcher in this area, documenting how processed food companies use research funding, lobbying, and marketing to influence both official dietary recommendations and individual preferences — often in ways that serve commercial interests over public health.`,
              audioPrompt: `Food politics refers to the study of how industry interests, lobbying, marketing, and policy shape food supply, dietary guidelines, and consumer behavior, {name}. Terra here — Marion Nestle at NYU, not the candy company, is a leading researcher in this area. Her book "Food Politics" and subsequent work document specific mechanisms by which processed food companies influence what gets recommended and consumed. They fund research that produces findings favorable to their products. They lobby government agencies responsible for dietary guidelines to soften or remove recommendations that would hurt their sales. They use marketing strategies designed to shape consumer preferences, including targeting advertising to children. They position themselves as partners in public health while systematically working against public health goals when those goals conflict with profit. The text notes this as a key finding the sociocultural position emphasizes: what you are told to eat is not determined purely by what nutrition science has found to be healthy; it is shaped by an industry with strong interests in what you buy. Building this kind of structural awareness does not mean individual choices don't matter — the text explicitly notes the position can become defeatist if read as "individuals can't do anything." It means understanding the context in which individual choices are made.`,
            },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature understanding integrates elements: nutrition science has real findings worth knowing; diet culture causes real harm and weight is a poor proxy for health; structural factors shape eating powerfully. The forcing function of the argument is committing to a primary framing that guides how you think about food.`,
            `One framing as you decide. Each position implies different defaults when you encounter food messaging. Position 1: ask what the actual nutrition research shows and how strong the evidence is. Position 2: ask whether the messaging is diet culture in disguise and what its effect on your relationship with food would be. Position 3: ask what environmental and structural factors shape the situation and what's actually within individual control.`,
            `Another framing. Each position addresses different failure modes. Conventional nutrition science addresses nutrient deficiencies and population-scale chronic disease risk. Anti-diet addresses diet culture harm and eating disorder development. Sociocultural addresses food industry manipulation and structural inequity. The failure mode you find most important might guide which position you prioritize.`,
            `One critical reminder before you go further. If you notice any of the following in yourself or someone you care about, it's worth talking to a trusted adult and possibly a professional: preoccupation with food or weight that interferes with daily life; restriction beyond what feels comfortable; eating in secret or feeling shame about eating; significant distress about food choices; dramatic changes in eating patterns; using food or exercise as punishment or earning; body image distress that affects daily functioning. The National Alliance for Eating Disorders helpline is the main current resource. Eating disorders are serious medical conditions, and earlier intervention produces better outcomes.`,
            `One last framing. You're 12. The relationship with food you build over the next decade compounds across the rest of your life. Most adults absorbed whatever framework their environment offered without examining it; many have eating relationships shaped by diet culture they never chose. Examining your framework now, deliberately, lets you build something better.`,
          ],
          image: `/voyager-assets/life-wellness/l04-s5-before.webp`,
          imageCaption: `Three positions, different defaults, different failure modes addressed. Warning signs of disordered eating warrant talking to a trusted adult and the National Alliance for Eating Disorders helpline.`,
          vocab: [
            {
              word: `escalation path`,
              definition: `Patterns warranting professional support: preoccupation with food/weight interfering with daily life; restriction beyond comfort; secretive eating or eating shame; significant distress about food choices; dramatic changes in eating patterns; using food/exercise as punishment or earning; body image distress affecting functioning. Escalation: trusted adult (parent, school counselor, doctor); National Alliance for Eating Disorders helpline (main current resource as of 2026). Eating disorders are serious medical conditions; earlier intervention produces better outcomes.`,
              audioPrompt: `Warning signs warranting professional support include several specific patterns, {name}. Preoccupation with food or weight that interferes with daily life. Restriction beyond what feels comfortable. Eating in secret or feeling shame about eating. Significant distress about food choices. Dramatic changes in eating patterns. Using food or exercise as punishment or as a way to earn things. Body image distress that affects daily functioning. If you notice these patterns in yourself or someone you care about, talk to a trusted adult: parent, school counselor, doctor, or another adult you trust. The National Alliance for Eating Disorders helpline is the main current resource as of this writing. Eating disorders are serious medical conditions with significant mortality. They're also treatable, especially with earlier intervention. The shame diet culture attaches to these struggles is itself part of diet culture; getting help is the opposite of failure.`,
            },
            {
              word: `media literacy`,
              definition: `The ability to critically analyze messages from media, advertising, and social media — including recognizing when wellness content is actually diet culture in different packaging. The text frames food media literacy as identifying the patterns Christy Harrison names: food moralizing, body moralizing, and restrictive practices marketed as wellness. Building this literacy early provides lasting protection against decades of diet culture messaging.`,
              audioPrompt: `Food media literacy is the ability to critically analyze food and wellness messages from media, advertising, and social media, {name}. Terra here — the text frames this lesson not as telling you what to eat but as building media literacy about how diet culture operates. The specific skill is recognizing the patterns Christy Harrison names even when they appear in new packaging. Clean eating. Wellness. Real food. Anti-inflammatory diets. Gut health protocols. Many of these terms signal a new vocabulary wrapped around the same underlying structure: foods sorted into virtuous and shameful categories, restriction treated as health, thinness worshipped as moral goodness. Your generation is exposed to this more intensely than any previous generation because social media brings it constantly and directly. Influencer content, product marketing, and peer discussion all operate as channels for diet culture messaging. Media literacy means asking: Is this food moralizing? Is this treating a specific eating restriction as wellness? Is this sorting bodies into acceptable and unacceptable? Is this built on evidence or on commercial interest? The text argues that building this literacy explicitly, at 12, provides protection across decades of exposure to messaging that profits from people who never learned to analyze it.`,
            },
            {
              word: `eating relationship`,
              definition: `The overall quality of a person's connection with food — including whether eating involves shame, fear, or rigid rules, or instead involves responsiveness to internal signals, enjoyment, and flexibility. The anti-diet position argues that building a healthy eating relationship matters more than specific food choices. The text identifies adolescence as the critical period when this relationship is most actively forming.`,
              audioPrompt: `The eating relationship refers to the overall quality of a person's connection with food, {name}. Terra here — the anti-diet position, including Christy Harrison's framing and Evelyn Tribole and Elyse Resch's intuitive eating work, emphasizes that the relationship with food matters more than specific food choices. A person can eat a wide variety of foods with flexibility, responsiveness to internal signals like hunger and fullness, and genuine enjoyment — or they can eat with rigid rules, shame around certain foods, fear of eating the wrong thing, and preoccupation with control. The latter pattern is associated with worse mental health and elevated eating disorder risk, even if the specific foods being eaten look "nutritious" by conventional standards. The text identifies adolescence as the critical period when this relationship is most actively forming. Family patterns, diet culture exposure through media and peer groups, experiences around food at home and school — all of these shape the eating relationship during a window that tends to set patterns for adult life. The practical implication: paying attention to the quality of the relationship — is there shame, fear, or preoccupation? — is at least as important as paying attention to specific food choices.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l04-argument-builder`,
          type: `argument-builder`,
          headline: `What Does "Eating Well" Actually Mean?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders in real research.`,
          positions: [
            {
              id: `nutrition-science`,
              label: `Nutritional science: real research about food and health exists and matters`,
              summary: `Bodies have real nutritional needs; eating patterns affect chronic disease risk at population scale; nutrition science has identified and largely eliminated deficiency diseases. Defenders: mainstream nutrition research, registered dietitians, public health. Strength: empirically grounded, addresses real biology, works at population scale. Limit: entangled with diet culture; population findings translated into individual prescriptions; official guidance keeps changing; has supported weight-focused interventions that fail long-term.`,
            },
            {
              id: `anti-diet`,
              label: `Anti-diet: diet culture causes more harm than benefit; relationship with food matters more than rules`,
              summary: `Diet culture causes documented harm; dieting fails long-term in vast majority of cases (Mann et al 2007); weight is poor proxy for health; weight stigma causes measurable damage (Puhl); intuitive eating produces benefits (Tribole, Resch). Defenders: Harrison, Gordon, HAES movement, weight-inclusive dietitians. Strength: addresses real diet culture harms, reduces eating disorder risk, treats people of different sizes with dignity. Limit: some specific HAES claims and advocates have been critiqued; can be misread as "any pattern is fine"; engages less with structural issues.`,
            },
            {
              id: `sociocultural`,
              label: `Sociocultural: food choices are shaped enormously by environment, culture, and structure`,
              summary: `Food choices shaped by environment, marketing, economics, family patterns, policy. Defenders: Marion Nestle, Michael Pollan, food justice researchers, food environment research. Strength: captures real structural factors others underweight; explains why individual interventions fail at population scale; addresses food industry manipulation. Limit: can underweight individual agency; structural change is slow; can become defeatist if read as "individuals can't do anything until structures change."`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Mann and colleagues' 2007 meta-analysis (and subsequent reviews) found that the vast majority of people who lose weight through dieting regain it within 3-5 years; many gain more than they lost. The finding has been replicated across many studies and represents one of the most robust findings in obesity research.`,
              source: `Mann et al 2007; subsequent meta-analyses`,
            },
            {
              id: `e2`,
              text: `Rebecca Puhl's research at the University of Connecticut and other weight stigma research has documented measurable physical and mental health harms from anti-fat bias, independent of weight itself. Stigma exposure produces stress responses, depressive symptoms, anxiety, and avoidance of healthcare that produces worse health outcomes.`,
              source: `Puhl and colleagues 2000s+; ongoing weight stigma research`,
            },
            {
              id: `e3`,
              text: `Intuitive eating research, developed from Evelyn Tribole and Elyse Resch's framework starting in 1995, has documented benefits across multiple measures when people stop dieting and learn to respond to internal hunger and fullness signals. Better mental health, more stable eating patterns, less eating disorder symptomatology.`,
              source: `Tribole and Resch 1995+; intuitive eating research literature`,
            },
            {
              id: `e4`,
              text: `Christy Harrison defines diet culture as a system worshipping thinness, equating thinness with health and moral goodness, moralizing food, and profiting enormously from this. The framing has helped name and identify patterns that previous frameworks missed or accepted as common sense.`,
              source: `Harrison "Anti-Diet" 2019; "The Wellness Trap" 2023`,
            },
            {
              id: `e5`,
              text: `Conventional nutritional science has produced real achievements: identification of nutrient deficiencies (scurvy, beriberi, pellagra, rickets) and the public health interventions that mostly eliminated them. Food safety regulations. Population-scale research on dietary patterns and chronic disease.`,
              source: `Public health history; nutrition science achievements`,
            },
            {
              id: `e6`,
              text: `Marion Nestle's "Food Politics" and subsequent work document how processed food companies use marketing, lobbying, and research funding to shape both individual preferences and official dietary guidelines. The food industry has substantial influence on what gets recommended.`,
              source: `Nestle 2002+; ongoing food policy research`,
            },
            {
              id: `e7`,
              text: `Food environment research shows that what people eat is strongly predicted by what's available, affordable, and marketed in their neighborhoods. Race, class, and geography shape food access in ways that have nothing to do with individual choice. Structural factors operate powerfully on individual eating patterns.`,
              source: `Food justice and food environment research`,
            },
            {
              id: `e8`,
              text: `Body dissatisfaction during adolescence is one of the strongest predictors of eating disorder development. Eating disorders have the highest mortality rate of any mental illness category. Diet culture exposure during adolescence is associated with worse mental health and increased eating disorder risk.`,
              source: `Eating disorder research; adolescent body image research`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions try to make general claims about what eating well means, but maybe eating is fundamentally too contextual for any general framework. What's right for one body, one culture, one family, one age, one activity level, one genetic profile, one medical condition might be wrong for another. Nutrition science generalizes across populations that vary enormously. Anti-diet generalizes about eating patterns that look very different for different people. Sociocultural generalizes about structural factors that vary by country and community. Maybe the most honest position is that eating is too individual and contextual for general frameworks to be useful — and that frameworks of any kind risk substituting external rules for the actual contextual judgment eating requires. Why think any general framework is the right approach to something this individual and contextual?"`,
            promptInstruction: `In 3-4 sentences, respond. Is there a useful general framework for eating, or is eating too contextual for general frameworks? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "diet culture" according to Christy Harrison?`,
              options: [
                `Just eating`,
                `System of beliefs and practices: worships thinness; equates thinness with health and moral goodness; treats eating as a moral question (good vs bad foods); produces enormous profits for diet and wellness industries; operates through food moralizing, body moralizing, and restrictive practices marketed as wellness`,
                `Random culture`,
                `Healthy living`,
              ],
              correctIndex: 1,
              explanation: `Harrison's definition in "Anti-Diet" (2019) names patterns that pop content treats as common sense. The wellness industry has dressed much of diet culture in newer language ("clean eating," "wellness," "real food") but the underlying structure is the same. Adolescent exposure is particularly harmful.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does conventional nutritional science get right and wrong?`,
              options: [
                `It's all right`,
                `Right: real achievements — identification of nutrient deficiencies (scurvy, beriberi, pellagra) and public health interventions that mostly eliminated them; food safety; population-scale research. Wrong: entangled with diet culture; confuses association with causation in observational studies; supports weight-focused interventions that fail long-term; official guidance shifts repeatedly`,
                `It's all wrong`,
                `Random critique`,
              ],
              correctIndex: 1,
              explanation: `Both the strengths and limits are real. Nutrition science has contributed dramatically to human health AND has been entangled with diet culture in ways the field is now beginning to examine. Mature engagement takes both seriously.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the Mann et al (2007) meta-analysis show?`,
              options: [
                `Random study`,
                `Meta-analysis of weight loss interventions found that the vast majority of people who lose weight through dieting regain it within 3-5 years; many gain more than they lost; finding has been replicated across many subsequent studies; represents one of the most robust findings in obesity research`,
                `Diets work`,
                `Random review`,
              ],
              correctIndex: 1,
              explanation: `This research is foundational for the anti-diet position. Despite the robustness of findings about dieting failure rates, mainstream public health continued to recommend weight-loss interventions for decades. The finding challenges the basic assumption that weight loss is a meaningful intervention for most people.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is weight stigma research (Puhl) about?`,
              options: [
                `Random research`,
                `Rebecca Puhl at UConn and others document measurable physical and mental health harms from anti-fat bias, independent of weight itself; stigma exposure produces stress responses, depressive symptoms, anxiety, healthcare avoidance; the harms attributed to weight may be partly or largely attributable to weight stigma rather than weight per se`,
                `Just bias`,
                `Random topic`,
              ],
              correctIndex: 1,
              explanation: `The research has significant implications: programs that try to "help" by encouraging weight loss often produce more stigma exposure, which itself produces worse health outcomes. Weight-inclusive approaches address this directly by removing the stigmatizing framing.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "intuitive eating" (Tribole, Resch)?`,
              options: [
                `Random concept`,
                `Framework developed by Evelyn Tribole and Elyse Resch starting in 1995; involves stopping dieting and learning to respond to internal hunger and fullness signals rather than external food rules; research has documented benefits across multiple measures (better mental health, more stable eating patterns, less eating disorder symptomatology)`,
                `Just feelings`,
                `Random eating`,
              ],
              correctIndex: 1,
              explanation: `Intuitive eating is not "eat whatever, whenever" — it's a specific framework with ten principles developed from research. The framework requires learning skills that diet culture has often suppressed: recognizing hunger and fullness, distinguishing emotional eating from physical hunger, allowing food without moralizing.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the sociocultural/structural position emphasize?`,
              options: [
                `Random factors`,
                `Food choices shaped enormously by environment, culture, marketing, economics, family patterns, policy rather than primarily individual choice; Marion Nestle's "Food Politics" documents food industry influence; food environment research shows neighborhood-level effects; food justice documents how race, class, geography shape access`,
                `Just culture`,
                `Random position`,
              ],
              correctIndex: 1,
              explanation: `The position implies population-level change comes mostly from policy and environment, not telling individuals what to eat. At the individual level, recognizing structural factors helps you see what's actually happening rather than blaming yourself for environment-shaped patterns.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is adolescent exposure to diet culture particularly harmful?`,
              options: [
                `Random concern`,
                `Adolescence is a developmentally critical period for body image and eating relationship formation; body dissatisfaction during adolescence is one of the strongest predictors of eating disorder development; eating disorders have the highest mortality rate of any mental illness category; diet culture exposure is associated with worse mental health outcomes in adolescents`,
                `Just timing`,
                `Random reason`,
              ],
              correctIndex: 1,
              explanation: `Your generation is exposed to more diet culture than any previous generation because of social media. The intensity of exposure during a developmentally critical period creates real risk. Building media literacy about diet culture early provides protection.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What warning signs warrant talking to a trusted adult and possibly a professional?`,
              options: [
                `Just curiosity`,
                `Preoccupation with food/weight interfering with daily life; restriction beyond comfort; eating in secret or feeling shame about eating; significant distress about food choices; dramatic changes in eating patterns; using food/exercise as punishment or earning; body image distress affecting functioning; trusted adult plus National Alliance for Eating Disorders helpline as escalation paths`,
                `Random signs`,
                `Just hunger`,
              ],
              correctIndex: 1,
              explanation: `Eating disorders are serious medical conditions; earlier intervention produces better outcomes. The shame diet culture attaches to these struggles is itself part of diet culture; getting help is the opposite of failure. The National Alliance for Eating Disorders helpline is the main current resource as of this writing.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Most "wellness" content marketed online is grounded in serious nutrition research.`,
              correctAnswer: false,
              explanation: `False. Most wellness content marketed online is closer to diet culture in newer packaging than to serious nutrition research. The wellness industry uses science-sounding language to sell products, restrictive eating patterns, and weight-focused interventions that have weak evidence or contradict what serious research shows. Media literacy means recognizing this pattern.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm starting this clean eating thing — cutting out all sugar, dairy, gluten, processed food. I saw a wellness influencer say it changed her life." Based on this lesson, what should you point out?`,
              options: [
                `"Sounds great"`,
                `"That's diet culture in wellness packaging — Christy Harrison has written extensively about how 'clean eating' is restrictive dieting with newer language. The pattern of cutting out broad food categories based on a wellness influencer's claims has several issues. The 'before and after' framing is the same pattern diet culture has used forever. The promise of life-changing transformation through restriction is what intuitive eating research and weight stigma research push back on. Restrictive eating in adolescence is associated with eating disorder development. If you notice that focus on food rules is becoming preoccupying, interfering with normal life, producing shame around eating, or showing up alongside body image distress, that's worth talking to a parent or school counselor about. The National Alliance for Eating Disorders helpline is also a resource. The wellness industry sells exactly what you're describing; the research on it is much less encouraging than the marketing."`,
                `"Cut out more"`,
                `"Don't eat"`,
              ],
              correctIndex: 1,
              explanation: `Real applied food/diet culture literacy. Name the specific pattern (clean eating = diet culture in newer language) and the specific researcher who has documented it. Include the warning signs and escalation path. Don't moralize the friend or shame their interest; redirect to the underlying issue (restriction marketed as wellness) and the support available.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you understand about diet culture? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which framework have you been operating from? Where did you learn it?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with explicit media literacy about diet culture, what does that protect across decades?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific food message you've encountered recently. Apply the three positions. What's actually happening in that message?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument said eating is too contextual for general frameworks. How much general framework is useful, vs how much is just rules substituting for actual judgment?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Notice one wellness/food message you encounter this week. What's it actually selling? What's the implicit moral framing?` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Food and body relationship at 12 shapes the relationship across decades. Two paths.`,
          familyActivity: {
            title: `The Family Diet Culture Conversation`,
            duration: `45 minutes`,
            description: `Share Harrison's definition of diet culture and the three positions. Ask family members about food messages they grew up with. Most adults have absorbed diet culture without examining it; the conversation often surfaces patterns that affect everyone. Consider establishing family practices that push back on diet culture: no moralizing food at the table ("good food/bad food"), no body talk that judges anyone's body, taking the focus off restriction and onto the relationship with food.`,
          },
          projectOption: {
            title: `Read Christy Harrison, Aubrey Gordon, or Marion Nestle, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Christy Harrison's "Anti-Diet" (2019) or "The Wellness Trap" (2023, on the wellness industry specifically), Aubrey Gordon's "What We Don't Talk About When We Talk About Fat" (2020) or "You Just Need to Lose Weight" (2023), or Marion Nestle's "Food Politics" (the structural food industry critique). Apply concepts during the reading period. Write 1,500 words on what you learned. Reading real food media literacy at 12 protects against decades of diet culture messaging.`,
            offerToParent: `Parent: opt your kid into this project. Real food literacy at 12 is one of the highest-leverage protections you can give them — the diet culture environment your generation faces is more intense than any previous generation's.`,
          },
          identityQuestion: `If you become someone with explicit media literacy about diet culture — able to recognize the patterns Harrison, Gordon, and others have named — what does that protect across decades of food messaging?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can spot diet culture even when it's dressed as wellness.`,
            `A person who doesn't moralize food or bodies.`,
            `Someone who knows when food-related struggles warrant professional support.`,
          ],
          saveKey: `identity_responses_lw_11_12_4`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourth Life Wellness lesson done. You can now define diet culture (Harrison), distinguish three serious positions on food and eating (nutritional science, anti-diet, sociocultural), name key thinkers (Harrison, Gordon, Tribole, Resch, Puhl, Nestle, Pollan), recognize warning signs warranting professional support, and know where to turn (trusted adult, National Alliance for Eating Disorders helpline). That's media literacy that protects across decades. Next time we go into movement — also done carefully, framed around capability rather than appearance, with warning signs about exercise compulsion. Case Study format. Let's go. — Terra`,
          badge: `food-literate`,
          badgeName: `Food Literate`,
          xpEarned: 75,
          competencies: [
            `Defines diet culture (Harrison) and recognizes its patterns`,
            `Distinguishes three serious positions: nutritional science, anti-diet, sociocultural`,
            `Names key thinkers (Harrison, Gordon, Tribole, Resch, Puhl, Nestle, Pollan)`,
            `Recognizes warning signs warranting professional support`,
            `Knows escalation path (trusted adult + National Alliance for Eating Disorders helpline)`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: Movement and Physical Capability`,
            hook: `Movement framed around capability, not appearance. Three case studies including exercise compulsion warning signs.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L04 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
