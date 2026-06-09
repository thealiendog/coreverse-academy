// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L01 — What "Wellness" Actually Is
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Health Philosophy, Public Health Research
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (biomedical / holistic flourishing / capability-based)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l01-v1";

const LIFEWELLNESS_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-01`,
      title: `What "Wellness" Actually Is`,
      duration: 35,
      xpReward: 75,
      badge: `wellness-foundations`,
      badgeName: `Wellness Foundations`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, welcome to Life Wellness. I'm Terra. Before we go into any specific topic (sleep, stress, food, movement, mental health, relationships, meaning) we have to settle a more basic question. What does "wellness" actually mean? You'd think this would be obvious. It isn't. The word gets used in three very different ways, and which definition you adopt shapes everything else. There's also a $5.6 trillion wellness industry that has its own answer (one that mostly serves selling things to you). Real research on what wellness is gives us three serious positions that have been developed and defended by significant thinkers. Today you build your argument for which fits your understanding. The position you commit to here shapes how you'll think about every other lesson in this band, and how you'll relate to your own wellbeing for the rest of your life.`,
          headline: `What "Wellness" Actually Is`,
          subtitle: `Three serious positions. The choice shapes how you think about your own wellbeing.`,
          visual: `/voyager-assets/life-wellness/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Definition Matters`,
          paragraphs: [
            `The word "wellness" gets thrown around constantly. Wellness influencers. Wellness products. Wellness retreats. Wellness brands. The global wellness industry is worth roughly $5.6 trillion as of recent estimates from the Global Wellness Institute. That's larger than the global pharmaceutical industry. The scale tells you something: enormous commercial interest shapes how the word gets used.`,
            `Most commercial wellness content uses the word loosely on purpose. It signals "good for you" without committing to any specific definition you could test. A drink can be marketed as a "wellness drink" without explaining what specifically makes it wellness-related. A practice can be promoted as a "wellness practice" without specifying what wellness it produces. The vagueness is a feature, not a bug: it lets the marketing imply benefits that the product doesn't have to deliver.`,
            `Real research has done better. Public health, medicine, psychology, philosophy, and economics have all engaged seriously with the question "what does it actually mean to be well?" The answers diverge. Three major positions exist with substantial empirical and theoretical support. Each implies different priorities, different practices, and different ways of evaluating your own situation.`,
            `The World Health Organization, in its 1948 founding constitution, defined health as "a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity." That definition has been hugely influential, and hugely criticized. Some scholars argue the WHO definition is too broad (does anyone ever achieve "complete" wellbeing?). Others argue it's too narrow (it underweights meaning, purpose, capability). The debate is still alive 75+ years later.`,
            `For you at 12, the question matters because your wellness habits are forming right now. The framework you use to think about wellbeing shapes which habits you build, which warning signs you notice, when you seek help, and how you understand yourself when things get hard. Picking a framework deliberately produces different outcomes than absorbing whatever your environment offers by default.`,
          ],
          image: `/voyager-assets/life-wellness/l01-s1-matters.webp`,
          imageCaption: `Wellness is a $5.6 trillion industry. Three serious research positions on what the word actually means. The WHO definition has been influential and criticized.`,
          vocab: [
            {
              word: `wellness industry`,
              definition: `The global wellness industry is estimated by the Global Wellness Institute at roughly $5.6 trillion as of recent reports. Includes physical activity, healthy eating products, personal care, wellness real estate, mental wellness products, traditional and complementary medicine, public health spending, preventive medicine, and several other categories. Larger than the global pharmaceutical industry. Scale shapes how the word "wellness" gets used in commercial contexts; vague usage is commercially useful even when not informative.`,
              audioPrompt: `The wellness industry, according to the Global Wellness Institute, is estimated at roughly $5.6 trillion globally as of recent reports, {name}. The Institute tracks multiple categories: physical activity and fitness, healthy eating products and supplements, personal care and beauty, wellness real estate, mental wellness products and services, traditional and complementary medicine, public health spending, preventive medicine, and several others. The total is larger than the global pharmaceutical industry. That's a useful comparison: many people don't realize how much of the economy is wellness-related. The scale shapes how the word "wellness" gets used in commercial contexts. Vague usage of "wellness" is commercially useful: a product can be marketed as wellness-related without committing to any specific definition that could be tested or falsified. The vagueness lets marketing imply benefits the product doesn't have to deliver. Recognizing this pattern protects you from being sold things based on the implication of wellness rather than its substance.`,
            },
            {
              word: `WHO definition`,
              definition: `The World Health Organization's 1948 founding constitution defined health as "a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity." Hugely influential and hugely criticized: some argue it is too broad because no one achieves complete wellbeing, while others argue it is too narrow because it underweights meaning, purpose, and capability.`,
              audioPrompt: `The WHO definition of health comes from the World Health Organization's 1948 founding constitution, {name}. It reads: "a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity." Terra here — that phrase "not merely the absence of disease" was a deliberate push against a narrower view that treated health as simply not being sick. The definition has been hugely influential in shaping how public health institutions and governments think about health policy for over 75 years. But it has also been hugely criticized from two directions. Some scholars argue it is too broad: does anyone ever actually achieve "complete" wellbeing? If not, then by this definition everyone is always unwell, which doesn't help. Others argue it is too narrow: it mentions physical, mental, and social well-being, but underweights meaning, purpose, and the capability to live the life you want. That debate — started in 1948 — is still alive today, and the fact that serious researchers are still arguing about it shows how genuinely hard the question is.`,
            },
            {
              word: `deliberate framework`,
              definition: `Choosing an explicit, examined framework for thinking about wellbeing rather than absorbing whichever framework your environment offers by default. According to the text, picking a framework deliberately produces different outcomes — in habits, warning signs noticed, when you seek help, and how you understand yourself when things get hard.`,
              audioPrompt: `A deliberate framework means choosing an explicit, examined way of thinking about wellbeing rather than absorbing whatever your environment offers by default, {name}. Terra here — the text makes a specific argument about why this matters at your age. Your wellness habits are forming right now, at 12. The framework you use shapes which habits you build, which warning signs you notice, when you decide to seek help, and how you make sense of yourself when things get difficult. Most people never choose their wellness framework explicitly; they absorb it from family, advertising, culture, and social media without examining it. The Global Wellness Institute's $5.6 trillion industry, the WHO's 1948 constitution, and three major research positions all offer different frameworks — and each implies different priorities, different practices, and different ways of evaluating your own situation. Picking deliberately, with awareness of the options and their tradeoffs, puts you in a different position than someone who simply inherited a default view. The text's argument is that this deliberate choice, made early, compounds across decades.`,
            },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Biomedical Wellness`,
          paragraphs: [
            `The first position: wellness is the absence of disease. If your medical markers are within normal ranges, you're well. If they're outside those ranges, you're not. The framework is measurable, testable, falsifiable. You don't have to feel a certain way; you have to have specific biological conditions that medicine can identify.`,
            `Defenders include much of mainstream medicine, especially specialties focused on disease treatment and prevention. The framework has produced extraordinary results. Vaccines, antibiotics, sanitation, surgery, chronic disease management. Most of the dramatic increases in human lifespan and reduction in suffering over the past two centuries have come from biomedical advances. The framework works. People who would have died in childhood now reach old age routinely because medicine engages with their bodies as biological systems.`,
            `The position has clear strengths. It's empirically grounded: you can measure blood pressure, cholesterol, blood glucose, infection markers, scan for tumors. It's actionable: specific medical interventions produce specific changes in specific markers. It's defensible: claims can be checked. Compared to vague wellness frameworks, biomedical wellness offers real information rather than aesthetic vibes.`,
            `The position has clear limits. The absence of disease isn't the same as flourishing. Many people without any diagnosable disease feel terrible: depressed, anxious, exhausted, disconnected, without meaning. The biomedical model has historically underweighted mental health, social connection, and meaning because they're harder to measure. The WHO's 1948 definition was an explicit reaction to this limitation: "not merely the absence of disease" pushes back against the biomedical model's narrowness.`,
            `One specific failure mode. The biomedical framework can produce people whose markers look fine while their lives are falling apart. Doctors trained primarily in biomedical thinking sometimes miss real wellbeing problems because they don't show up on standard tests. The strength of the framework (measurable, testable) is also its limit (only counts what can be measured biologically).`,
            `For you at 12, the position implies specific practices. Get checkups. Pay attention to physical signals (pain, energy, sleep, digestion). Don't dismiss symptoms that persist. Trust medical evidence over anecdote. But also: don't treat "no diagnosis" as the same as "completely well." Some real wellbeing problems don't have biomedical signatures yet.`,
          ],
          image: `/voyager-assets/life-wellness/l01-s2-biomedical.webp`,
          imageCaption: `Position 1: biomedical wellness. Absence of disease, measurable medical markers. Has produced extraordinary results. Limit: doesn't capture flourishing beyond disease.`,
          vocab: [
            {
              word: `model health`,
              definition: `Framework treating health primarily as biological condition, measurable through medical markers and explainable through physiology, anatomy, biochemistry. Dominant in mainstream medicine. Has produced extraordinary results: vaccines, antibiotics, sanitation, surgery, chronic disease management. Strengths: empirically grounded, actionable, defensible. Limits: underweights mental health, social factors, meaning, capability. Often criticized for treating "no diagnosis" as equivalent to "well."`,
              audioPrompt: `The biomedical model of health is a framework treating health primarily as a biological condition, {name}. Measurable through medical markers like blood pressure, cholesterol, blood glucose, and infection indicators. Explainable through physiology, anatomy, biochemistry, and other biological sciences. Dominant in mainstream medicine, especially specialties focused on disease treatment and prevention. The model has produced extraordinary results over the past two centuries. Vaccines, antibiotics, sanitation, surgical techniques, chronic disease management. Most of the dramatic increases in human lifespan and reduction in suffering have come from biomedical advances. Strengths: empirically grounded, actionable through specific interventions, defensible because claims can be checked. Limits: underweights mental health, social connection, meaning, and capability because these are harder to measure biologically. The WHO's 1948 definition of health as "not merely the absence of disease" was an explicit reaction to the biomedical model's narrowness. Both the strengths and limits are real; the question is what weight to give the model in any specific situation.`,
            },
            {
              word: `medical markers`,
              definition: `Measurable biological indicators used in the biomedical model to assess health status, including blood pressure, cholesterol, blood glucose, and infection markers. When markers fall within normal ranges, the biomedical framework classifies a person as well. The framework's strength is that these markers are empirically grounded, actionable, and defensible — claims can be checked against actual measurements.`,
              audioPrompt: `Medical markers are measurable biological indicators that the biomedical model uses to assess whether someone is well, {name}. Terra here — the text names specific examples: blood pressure, cholesterol, blood glucose, infection markers, and tumor scans. The biomedical position is clear on what wellness means: if your markers are within normal ranges, you're well; if they're outside those ranges, you're not. This makes the framework measurable, testable, and falsifiable — you don't have to feel a certain way or report a certain experience; medicine can identify specific biological conditions. That's a genuine strength. Specific medical interventions produce specific changes in specific markers, and those claims can be checked and verified. Compared to vague wellness frameworks that signal "good for you" without committing to any definition, biomedical markers offer real, concrete information. The limit, as the text points out, is that the framework only counts what can be measured biologically — and many real wellbeing problems, including depression, exhaustion, disconnection, and lack of meaning, don't show up on standard tests even when they are genuinely serious.`,
            },
            {
              word: `absence of disease`,
              definition: `The core claim of biomedical wellness: a person is well if they have no diagnosable disease and their medical markers fall within normal ranges. The text identifies this as the position's key limit — absence of disease is not the same as flourishing. Many people without any diagnosable condition still feel depressed, anxious, exhausted, or disconnected.`,
              audioPrompt: `Absence of disease is the core claim of the biomedical position on wellness, {name}. Terra here — the position says: if your medical markers are within normal ranges and no disease is present, you are well. If markers fall outside those ranges, you are not. It is a clean, testable definition. But the text identifies this as the framework's central limit, and it is worth sitting with. The absence of disease is not the same as flourishing. The text gives concrete examples: many people without any diagnosable disease feel depressed, anxious, exhausted, disconnected, and without meaning. These are real wellbeing problems. The biomedical model has historically underweighted them because they are harder to measure biologically. The WHO's 1948 definition — "not merely the absence of disease" — was written as an explicit reaction to exactly this limitation. And the specific failure mode the text names is important: the biomedical framework can produce people whose markers look completely fine while their lives are falling apart. Doctors trained primarily in biomedical thinking sometimes miss these real problems because they do not show up on standard tests.`,
            },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Holistic Flourishing`,
          paragraphs: [
            `The second position: wellness is flourishing across multiple dimensions: physical, mental, social, and meaning. The biomedical model captures one dimension but misses several others that matter for actual wellbeing. To be truly well, you need physical health AND mental health AND meaningful relationships AND a sense of purpose. Missing any of these produces real wellbeing deficits even when others are present.`,
            `Defenders include much of contemporary psychology, especially positive psychology developed by Martin Seligman starting around 2000. Seligman's PERMA framework identifies five elements of flourishing: Positive emotion, Engagement, Relationships, Meaning, and Accomplishment. People high in PERMA elements report higher wellbeing across many measures; people low in them report worse outcomes even when biomedical markers are normal. The framework has been studied extensively and replicates across cultures.`,
            `Related thinkers extend the picture. Carol Ryff at Wisconsin developed a six-factor model of psychological wellbeing: self-acceptance, positive relations with others, autonomy, environmental mastery, purpose in life, and personal growth. Edward Diener studied subjective wellbeing through life satisfaction and emotion. Mihaly Csikszentmihalyi studied "flow": the experience of full engagement in challenging activities matched to skill — as a key contributor to wellbeing.`,
            `The WHO's 1948 definition fits this position: "complete physical, mental and social well-being." The framework has been hugely influential in public health, education, and increasingly in medical practice. It pushes back against the biomedical model's narrowness while still taking biological health seriously. Most modern hospitals now have mental health services; most schools address social-emotional learning; most workplaces engage with engagement and meaning. These changes reflect holistic-flourishing thinking spreading into institutional practice.`,
            `The position has strengths. It captures real wellbeing dimensions the biomedical model misses. It explains why physically healthy people can be deeply unwell. It produces actionable practices across multiple domains rather than just medical ones. It treats humans as more than biological systems.`,
            `The position has limits too. The breadth becomes vagueness if not carefully specified. "Be well in all dimensions" doesn't tell you what to do today. Some critics argue the framework expands "health" to mean "good life," which conflates two distinct things. The medicalization of meaning and purpose can also produce its own problems: treating ordinary human struggles as health issues that need professional intervention. The position works best when it specifies what's meant rather than gesturing at vague flourishing.`,
          ],
          image: `/voyager-assets/life-wellness/l01-s3-holistic.webp`,
          imageCaption: `Position 2: holistic flourishing. Physical + mental + social + meaning. Seligman's PERMA, Ryff's six factors, Diener, Csikszentmihalyi. Captures what biomedical misses.`,
          vocab: [
            {
              word: `PERMA model`,
              definition: `Framework from positive psychology developed by Martin Seligman starting around 2000. Five elements of flourishing: Positive emotion (feeling good), Engagement (absorption in activity, related to Csikszentmihalyi's "flow"), Relationships (meaningful connection), Meaning (purpose larger than self), Accomplishment (mastery, achievement). People high in PERMA elements report higher wellbeing across measures; people low in them report worse outcomes even when biomedical markers are normal. Has been studied extensively and replicates across cultures.`,
              audioPrompt: `The PERMA model is a framework from positive psychology developed by Martin Seligman starting around 2000, {name}. PERMA stands for five elements of flourishing. P is Positive emotion: feeling good, experiencing positive states. E is Engagement: absorption in activity, related to Mihaly Csikszentmihalyi's concept of "flow" where you lose track of time in something appropriately challenging. R is Relationships: meaningful connection with other people. M is Meaning: sense of purpose larger than yourself. A is Accomplishment: mastery, achievement, completion of meaningful work. Seligman's research found that people high in PERMA elements report higher wellbeing across many measures, while people low in them report worse outcomes even when their biomedical markers are normal. The framework has been studied extensively and replicates across cultures. It captures dimensions of wellbeing the biomedical model misses while still being specific enough to be actionable. One important note: PERMA is descriptive of wellbeing, not prescriptive of how to live; many ways of being human meet PERMA criteria differently.`,
            },
            {
              word: `positive psychology`,
              definition: `A branch of psychology developed especially by Martin Seligman starting around 2000 that studies what makes people flourish rather than just what causes disorder. Produced frameworks like PERMA to identify elements of wellbeing across multiple dimensions. Research in positive psychology has been studied extensively and replicates across cultures.`,
              audioPrompt: `Positive psychology is a branch of psychology developed especially by Martin Seligman starting around 2000, {name}. Terra here — traditional psychology had focused heavily on disorder: diagnosing and treating mental illness, understanding what goes wrong. Positive psychology shifted the question toward what makes people flourish. What actually produces wellbeing? What are its components? How can they be measured and built? Seligman's PERMA framework — Positive emotion, Engagement, Relationships, Meaning, Accomplishment — came directly from this research program. Related thinkers extended the work. Carol Ryff at Wisconsin developed a six-factor model of psychological wellbeing covering self-acceptance, positive relations with others, autonomy, environmental mastery, purpose in life, and personal growth. Edward Diener studied subjective wellbeing through life satisfaction and emotional experience. Mihaly Csikszentmihalyi studied flow — the experience of full engagement in challenging activities matched to skill — as a key contributor to wellbeing. The common thread is empirical research into the positive dimensions of human experience, not just the absence of pathology. The research has been studied extensively and replicates across cultures, giving it stronger grounding than many wellness frameworks that lack empirical testing.`,
            },
            {
              word: `medicalization`,
              definition: `The process of treating ordinary human experiences or struggles as medical or health issues requiring professional intervention. The text identifies this as a risk of holistic-flourishing frameworks: expanding "health" to mean "good life" can conflate two distinct things and turn normal difficulties into conditions that need treatment.`,
              audioPrompt: `Medicalization is the process of treating ordinary human experiences or struggles as medical or health issues that need professional intervention, {name}. Terra here — the text raises this as a specific limit of holistic-flourishing frameworks, and it is worth understanding carefully. The holistic position's strength is its breadth: it captures physical, mental, social, and meaning dimensions that the biomedical model misses. But that same breadth creates a risk. Some critics argue that expanding "health" to mean "good life" conflates two distinct things. Living a good life involves navigating real difficulty, loss, conflict, and uncertainty — experiences that are part of being human, not signs of illness. If the holistic framework is applied carelessly, normal grief, ordinary anxiety, everyday frustration, or the absence of peak meaning could get framed as health deficits requiring professional treatment. That framing can produce its own problems. The position works best, the text says, when it specifies what it means rather than gesturing at vague flourishing across all dimensions of life. Understanding this limit helps you use the holistic framework's genuine insights without expanding it beyond what it can reasonably claim.`,
            },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Capability-Based Wellness`,
          paragraphs: [
            `The third position takes a different angle: wellness is the capacity to live the life you actually want to live. It's not primarily about how you feel or what your markers show; it's about whether you have the physical, mental, and social functioning to do what matters to you. Two people with identical biomedical markers and identical emotional states might have very different wellness if one can do the things they care about and the other can't.`,
            `The position draws on the capabilities approach developed by economist Amartya Sen and philosopher Martha Nussbaum starting in the 1980s. Sen won the Nobel Prize in 1998 partly for this work; Nussbaum has developed it into a comprehensive framework for evaluating human wellbeing across many domains. The core idea: what matters isn't just whether people have resources or feel good, but whether they have the actual capabilities to function as they choose. Applied to health and wellness specifically, the framework asks: can you do the things that matter to you?`,
            `Specific dimensions in Nussbaum's framework that translate directly to wellness: bodily health (good health, adequate nutrition, shelter), bodily integrity (able to move freely, secure against assault), senses, imagination, and thought (able to use senses, imagine, think, reason), emotions (able to have attachments, love, grieve, experience), practical reason (able to form conception of the good), affiliation (able to live with others, engage in social interaction), and play (able to laugh, enjoy recreational activities).`,
            `What makes this distinct from the holistic-flourishing position. PERMA and similar frameworks focus on subjective states: feelings, experiences, perceptions. Capability frameworks focus on functioning: what you can actually do. Someone might feel happy but lack capability (e.g., chronic illness prevents activities they value); someone might not feel particularly happy but have rich capability (e.g., able to work, love, create, contribute). The frameworks measure different things.`,
            `The position is increasingly influential in medicine, disability rights, public health, and rehabilitation research. Modern rehabilitation often emphasizes functional capacity (can you do what matters to you?) over symptom elimination (do your scans look better?). The shift reflects capability thinking. The disability community has long argued that wellness should be measured by capability to live well, not by adherence to a particular biological norm.`,
            `What this position implies practically. Build the physical, mental, and social capacities that let you live the life you want. Don't optimize for markers or feelings alone; optimize for functional capability to do meaningful things. Recognize that wellness is partly defined by what you're trying to do; the same body and mind might be "well" for one set of goals and "less well" for another.`,
          ],
          image: `/voyager-assets/life-wellness/l01-s4-capability.webp`,
          imageCaption: `Position 3: capability-based wellness. Wellness = capacity to live the life you want. Sen and Nussbaum's capabilities approach. Influential in disability rights, rehabilitation.`,
          vocab: [
            {
              word: `capabilities approach`,
              definition: `Framework for evaluating human wellbeing developed by economist Amartya Sen (Nobel Prize 1998) and philosopher Martha Nussbaum starting in the 1980s. Core idea: what matters isn't just resources or subjective states, but whether people have actual capabilities to function as they choose. Nussbaum's list includes bodily health, bodily integrity, senses/imagination/thought, emotions, practical reason, affiliation, and play. Applied to wellness: focuses on what you can actually do rather than just how you feel or what markers show.`,
              audioPrompt: `The capabilities approach is a framework for evaluating human wellbeing developed by economist Amartya Sen and philosopher Martha Nussbaum starting in the 1980s, {name}. Sen won the Nobel Prize in Economics in 1998 partly for this work. Nussbaum has developed it into a comprehensive framework applied across health, education, disability, gender, and many other domains. The core idea: what matters isn't just whether people have resources or feel good, but whether they have the actual capabilities to function as they choose. Two people with identical resources or identical feelings might have very different wellbeing if one can do what matters to them and the other can't. Nussbaum's list of capabilities includes bodily health, bodily integrity, senses/imagination/thought, emotions, practical reason, affiliation, and play, among others. Applied to wellness specifically, the framework asks whether you can do the things that matter to you. Increasingly influential in medicine, disability rights, rehabilitation research, and public health. The shift toward measuring functional capacity rather than just symptoms reflects capability thinking.`,
            },
            {
              word: `functional capacity`,
              definition: `The ability to actually do what matters to you — work, love, create, contribute, engage in social interaction, pursue meaningful activities. In capability-based wellness, functional capacity is the key measure of wellness rather than medical markers or subjective emotional states. Modern rehabilitation research increasingly emphasizes functional capacity over symptom elimination.`,
              audioPrompt: `Functional capacity is the ability to actually do what matters to you, {name}. Terra here — in capability-based wellness, this is the key measure. Can you work, love, create, contribute, engage in social interaction, laugh, pursue the activities you value? The text draws a sharp contrast with the other two frameworks. The biomedical model asks whether your medical markers are within normal ranges. The holistic-flourishing model asks how you feel across multiple dimensions. Capability-based wellness asks something different: can you do the things that matter to you? The text gives a concrete example of why this distinction matters. Someone might feel happy but lack functional capacity — chronic illness prevents activities they value. Someone else might not feel particularly happy but have rich functional capacity — they are able to work, love, create, and contribute. The frameworks measure different things, and in specific situations they can point in different directions. The disability community has long argued for this framing: wellness should be measured by capability to live well, not by adherence to a particular biological norm. Modern rehabilitation research reflects this shift — emphasizing what patients can do over what their scans show.`,
            },
            {
              word: `Nussbaum's list`,
              definition: `Martha Nussbaum's enumeration of specific human capabilities that translate directly to wellness: bodily health, bodily integrity, senses/imagination/thought, emotions, practical reason, affiliation, and play. Developed from the capabilities approach she built with Amartya Sen starting in the 1980s. Each capability represents something a person must be able to do to be considered truly well under this framework.`,
              audioPrompt: `Nussbaum's list refers to Martha Nussbaum's specific enumeration of human capabilities that translate directly to wellness, {name}. Terra here — Nussbaum is a philosopher who developed the capabilities approach alongside economist Amartya Sen starting in the 1980s, and her contribution was to specify what the relevant capabilities actually are. The list includes: bodily health, meaning good health, adequate nutrition, and shelter; bodily integrity, meaning being able to move freely and being secure against assault; senses, imagination, and thought, meaning being able to use your senses, imagine, think, and reason; emotions, meaning being able to have attachments, love, grieve, and experience a full emotional life; practical reason, meaning being able to form your own conception of what is good; affiliation, meaning being able to live with others and engage in genuine social interaction; and play, meaning being able to laugh and enjoy recreational activities. This list makes the framework concrete and testable in a way that vague appeals to capability do not. It also shows why the approach is influential in disability rights and rehabilitation: it provides a specific picture of what a person needs to be able to do in order to count as living well.`,
            },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature views integrate elements: take biomedical markers seriously without treating them as the whole picture; attend to flourishing dimensions across mental, social, and meaning domains; ultimately measure success by capacity to live the life you want. The forcing function of the argument is committing to a primary framing.`,
            `One framing to consider. Each position implies different defaults when you're trying to decide if you're "doing okay." Position 1: check your medical markers and physical symptoms. Position 2: check your feelings, relationships, sense of meaning, engagement across life. Position 3: check whether you can do the things that matter to you and whether you're building capability for what you want to do next.`,
            `Another framing. Each position implies different defaults when something feels off. Position 1: see a doctor; rule out biological causes. Position 2: examine the multiple dimensions of your life; ask what's not flourishing. Position 3: ask whether your capabilities are sufficient for what you're trying to do; ask whether what you're trying to do matches what would actually serve you.`,
            `One important note. The commercial wellness industry mostly works against all three of these serious positions. It sells products that don't address biomedical conditions, don't reliably improve flourishing, and don't actually expand capabilities. Recognizing what wellness actually is, under any of the three positions, protects you from being sold what wellness isn't.`,
            `One last framing. You're 12. The wellness habits and frameworks you build over the next decade compound across the next 70 years. Most adults absorb whichever framework their environment offered without explicit examination. Explicitly choosing yours puts you ahead of most working adults on a question that shapes your whole life.`,
          ],
          image: `/voyager-assets/life-wellness/l01-s5-before.webp`,
          imageCaption: `Three serious positions: biomedical / holistic flourishing / capability-based. Commercial wellness industry mostly works against all three. Pick deliberately.`,
          vocab: [
            {
              word: `research wellness`,
              definition: `Distinction worth maintaining. Commercial wellness uses the word "wellness" loosely to imply benefits in marketing of products and services without committing to definitions that could be tested. Research wellness engages with what wellbeing actually is using empirical methods and philosophical analysis. The two often produce opposite recommendations: commercial wellness sells purchases; research wellness usually points to behaviors and frameworks that don't require purchases. Recognizing the distinction protects you from being sold what wellness isn't.`,
              audioPrompt: `Commercial wellness versus research wellness is a distinction worth maintaining, {name}. Commercial wellness uses the word "wellness" loosely to imply benefits in marketing of products and services. A drink is marketed as wellness-related; a supplement is positioned as wellness support; a service is sold as wellness coaching. The marketing typically doesn't commit to definitions that could be tested. The vagueness is commercially useful because it lets marketing imply benefits the product doesn't have to deliver. Research wellness engages with what wellbeing actually is using empirical methods and philosophical analysis. Public health research, medical research, psychological research, philosophical analysis. The two often produce opposite recommendations. Commercial wellness sells purchases. Research wellness usually points to behaviors and frameworks that don't require purchases: sleep enough, move regularly, eat reasonably, build real relationships, do meaningful work, manage stress, seek medical care when needed. None of these require expensive products. Recognizing the distinction protects you from being sold what wellness isn't.`,
            },
            {
              word: `compounding habits`,
              definition: `The principle that wellness habits and frameworks built early in life accumulate and compound across decades. The text argues that the framework chosen at age 12 shapes habits, warning signs noticed, and responses to difficulty across the next 70 years — making early deliberate choice disproportionately valuable compared to absorbing a default framework later.`,
              audioPrompt: `Compounding habits refers to the principle that wellness habits and frameworks built early in life accumulate and multiply their effects across decades, {name}. Terra here — the text makes a specific argument about timing. You are 12. The habits and frameworks you build over the next decade do not just affect the next decade; they compound across the next 70 years of your life. Most adults absorb whichever wellness framework their environment offered them — from family, advertising, culture, social media — without ever examining it explicitly. They end up operating from a default they never chose. Explicitly choosing your framework now, with awareness of the three serious positions and their tradeoffs, puts you ahead of most working adults on a question that shapes your whole life. The three positions each imply different defaults for when you are deciding if you are doing okay, and different defaults for when something feels off. Those defaults, repeated thousands of times across a life, produce very different outcomes. The commercial wellness industry, worth $5.6 trillion, profits from people who never developed an explicit framework and are therefore susceptible to being sold things based on the implication of wellness rather than its substance.`,
            },
            {
              word: `primary framing`,
              definition: `The core wellness position a person commits to as their main lens, even while integrating elements of others. The text argues that choosing a primary framing — biomedical, holistic flourishing, or capability-based — is the forcing function of mature wellness thinking, because each implies different defaults for evaluating one's own wellbeing and responding when things feel off.`,
              audioPrompt: `Primary framing is the core wellness position you commit to as your main lens for thinking about your own wellbeing, {name}. Terra here — the text is careful to note that the three positions are not strictly mutually exclusive. Most mature views integrate elements of all three: taking biomedical markers seriously without treating them as the whole picture, attending to flourishing dimensions across mental, social, and meaning domains, and ultimately measuring success by the capacity to live the life you want. But the text also argues that the forcing function of serious wellness thinking is committing to a primary framing. Why does this matter? Because each position implies different defaults in practice. When you are trying to decide if you are doing okay, Position 1 says check your medical markers and physical symptoms; Position 2 says check your feelings, relationships, sense of meaning, and engagement; Position 3 says check whether you can do the things that matter to you and whether you are building capacity for what you want next. When something feels off, each position implies a different first step. Knowing which position is your primary framing tells you which default to apply — and that clarity, repeated across a life, produces meaningfully different outcomes.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l01-argument-builder`,
          type: `argument-builder`,
          headline: `What Is Wellness, Really?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders in real research.`,
          positions: [
            {
              id: `biomedical`,
              label: `Biomedical: wellness is absence of disease, measurable through medical markers`,
              summary: `Wellness is biological. Measurable markers (blood pressure, cholesterol, infection indicators) determine whether you're well. The framework has produced extraordinary results: vaccines, antibiotics, sanitation, surgery, chronic disease management. Defenders include mainstream medicine, especially disease treatment and prevention specialties. Strength: empirically grounded, actionable, defensible. Limit: underweights mental health, social connection, meaning, capability; can produce people whose markers look fine while their lives fall apart.`,
            },
            {
              id: `holistic-flourishing`,
              label: `Holistic flourishing: wellness is thriving across physical, mental, social, and meaning dimensions`,
              summary: `Wellness is multidimensional. PERMA framework (Seligman): Positive emotion, Engagement, Relationships, Meaning, Accomplishment. Carol Ryff's six factors. Diener on subjective wellbeing. Csikszentmihalyi on flow. WHO 1948 definition fits here ("complete physical, mental and social well-being"). Strength: captures real wellbeing dimensions biomedical misses; explains why physically healthy people can be deeply unwell. Limit: breadth becomes vagueness if not specified; can medicalize ordinary human struggles; "wellness" expands to mean "good life."`,
            },
            {
              id: `capability`,
              label: `Capability-based: wellness is the capacity to live the life you actually want`,
              summary: `Wellness is functional. Sen and Nussbaum's capabilities approach (1980s+). What matters isn't just markers or feelings but whether you have actual capabilities to function as you choose. Nussbaum's list: bodily health, bodily integrity, senses/imagination/thought, emotions, practical reason, affiliation, play. Influential in medicine, disability rights, rehabilitation. Strength: focuses on what you can actually do; doesn't conflate feeling good with being well. Limit: requires knowing what life you want; harder to measure than markers; capability for what matters to one person might differ from another.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Most dramatic increases in human lifespan and reduction in suffering over the past two centuries have come from biomedical advances: vaccines, antibiotics, sanitation, surgery, chronic disease management. The biomedical framework has produced results that other frameworks haven't matched at population scale.`,
              source: `Public health history; multiple sources`,
            },
            {
              id: `e2`,
              text: `Many people without any diagnosable disease feel terrible: depressed, anxious, exhausted, disconnected, without meaning. The biomedical model has historically underweighted mental health, social connection, and meaning because they're harder to measure. WHO's 1948 definition was explicit reaction to this limitation.`,
              source: `WHO 1948 founding constitution; subsequent mental health research`,
            },
            {
              id: `e3`,
              text: `Martin Seligman's PERMA framework identifies five elements of flourishing (Positive emotion, Engagement, Relationships, Meaning, Accomplishment). People high in PERMA elements report higher wellbeing across many measures; people low in them report worse outcomes even when biomedical markers are normal. Studied extensively, replicates across cultures.`,
              source: `Seligman 2000+ and subsequent positive psychology research`,
            },
            {
              id: `e4`,
              text: `Carol Ryff's six-factor model of psychological wellbeing identifies self-acceptance, positive relations with others, autonomy, environmental mastery, purpose in life, and personal growth. Each dimension matters independently for actual wellbeing.`,
              source: `Ryff and colleagues, ongoing research since 1989`,
            },
            {
              id: `e5`,
              text: `Sen and Nussbaum's capabilities approach argues what matters isn't just resources or subjective states, but whether people have actual capabilities to function as they choose. Sen won Nobel Prize partly for this work in 1998; Nussbaum's framework has been applied across health, disability, education, gender.`,
              source: `Sen 1980s+, Nussbaum 1990s+, ongoing capabilities literature`,
            },
            {
              id: `e6`,
              text: `Modern rehabilitation often emphasizes functional capacity (can you do what matters to you?) over symptom elimination (do your scans look better?). The shift reflects capability thinking spreading into medical practice.`,
              source: `Contemporary rehabilitation research and clinical practice`,
            },
            {
              id: `e7`,
              text: `The biomedical framework can produce people whose markers look fine while their lives are falling apart. Doctors trained primarily in biomedical thinking sometimes miss real wellbeing problems because they don't show up on standard tests.`,
              source: `Critiques of biomedical model; integrative medicine literature`,
            },
            {
              id: `e8`,
              text: `Some critics argue holistic-flourishing frameworks expand "health" to mean "good life," which conflates two distinct things. Medicalizing meaning and purpose can produce its own problems: treating ordinary human struggles as health issues requiring professional intervention.`,
              source: `Critiques of medicalization; Ivan Illich and successors`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions treat 'wellness' as something individual: your biology, your flourishing, your capability. But maybe wellness is fundamentally social and structural. Whether you're well depends enormously on conditions you don't individually control: clean air and water, safe neighborhoods, access to healthcare, economic stability, cultural patterns around food and movement, working conditions, public policy. Two people with identical individual choices can have very different wellness based on which country, neighborhood, family, and historical moment they were born into. Maybe focusing on individual frameworks misses the point: wellness is mostly produced by social conditions, not individual choices. Why think any individual-focused framework gets at what wellness actually is, when so much of what determines whether people are well happens at scales much larger than individual choice?"`,
            promptInstruction: `In 3-4 sentences, respond. Is wellness mostly individual or mostly structural? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the Global Wellness Institute estimate about the wellness industry?`,
              options: [
                `Small market`,
                `Roughly $5.6 trillion globally as of recent reports; includes physical activity, healthy eating products, personal care, wellness real estate, mental wellness products, traditional medicine, public health, preventive medicine; larger than the global pharmaceutical industry; scale shapes how the word "wellness" gets used commercially`,
                `Random size`,
                `Same as pharma`,
              ],
              correctIndex: 1,
              explanation: `The scale tells you something: enormous commercial interest shapes how the word gets used. Vague usage of "wellness" is commercially useful because it lets marketing imply benefits the product doesn't have to deliver. Recognizing this pattern protects you from being sold things based on the implication of wellness rather than its substance.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the WHO 1948 definition of health?`,
              options: [
                `Random definition`,
                `"A state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity"; from the World Health Organization's 1948 founding constitution; hugely influential; also criticized as too broad (does anyone achieve "complete" wellbeing?) and too narrow (underweights meaning, purpose, capability); debate still alive 75+ years later`,
                `Just absence of disease`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `The "not merely the absence of disease" framing was explicit reaction to the biomedical model's narrowness. The definition has shaped how health is treated institutionally for decades while also generating ongoing debate about whether it's the right framing.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the biomedical model of health argue?`,
              options: [
                `Random position`,
                `Health is primarily biological condition, measurable through medical markers (blood pressure, cholesterol, blood glucose, infection markers) and explainable through physiology; dominant in mainstream medicine; has produced extraordinary results (vaccines, antibiotics, sanitation, surgery); strengths: empirically grounded, actionable; limits: underweights mental health, social factors, meaning, capability`,
                `Just disease`,
                `Random model`,
              ],
              correctIndex: 1,
              explanation: `Both the strengths and limits of the biomedical model are real. The framework can produce people whose markers look fine while their lives fall apart; the strength of the framework (measurable, testable) is also its limit (only counts what can be measured biologically).`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the PERMA model (Seligman)?`,
              options: [
                `Random framework`,
                `Framework from positive psychology developed by Martin Seligman starting around 2000; five elements of flourishing: Positive emotion, Engagement (related to Csikszentmihalyi's "flow"), Relationships, Meaning (purpose larger than self), Accomplishment (mastery, achievement); people high in PERMA elements report higher wellbeing even when biomedical markers normal`,
                `Five steps`,
                `Random model`,
              ],
              correctIndex: 1,
              explanation: `The framework captures dimensions of wellbeing the biomedical model misses while being specific enough to be actionable. Has been studied extensively and replicates across cultures. PERMA is descriptive of wellbeing, not prescriptive of how to live; many ways of being human meet PERMA criteria differently.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the capabilities approach (Sen, Nussbaum)?`,
              options: [
                `Random theory`,
                `Framework developed by economist Amartya Sen (Nobel Prize 1998) and philosopher Martha Nussbaum starting in 1980s; core idea: what matters isn't just resources or subjective states, but whether people have actual capabilities to function as they choose; Nussbaum's list includes bodily health, bodily integrity, senses/imagination/thought, emotions, practical reason, affiliation, play`,
                `Just abilities`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `Two people with identical resources or identical feelings might have very different wellbeing if one can do what matters to them and the other can't. Increasingly influential in medicine, disability rights, rehabilitation research, public health. Shift toward measuring functional capacity rather than just symptoms reflects capability thinking.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What distinguishes "commercial wellness" from "research wellness"?`,
              options: [
                `Same thing`,
                `Commercial wellness uses "wellness" loosely to imply benefits in marketing without committing to testable definitions; vagueness is commercially useful. Research wellness engages with what wellbeing actually is using empirical methods. Often produce opposite recommendations: commercial sells purchases; research points to behaviors and frameworks that don't require purchases`,
                `Random distinction`,
                `Same approach`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the distinction protects you from being sold what wellness isn't. Most research-supported wellness practices (sleep, movement, relationships, meaningful work, medical care when needed) don't require expensive products. Commercial wellness mostly works against all three serious research positions.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why might capability-based wellness differ from holistic flourishing?`,
              options: [
                `Same thing`,
                `PERMA and similar frameworks focus on subjective states (feelings, experiences, perceptions). Capability frameworks focus on functioning (what you can actually do). Someone might feel happy but lack capability (chronic illness prevents valued activities); someone might not feel happy but have rich capability (able to work, love, create, contribute). Frameworks measure different things`,
                `Random distinction`,
                `Same focus`,
              ],
              correctIndex: 1,
              explanation: `The distinction matters because the two frameworks can recommend different things. The same situation might count as "wellness" under one framework and not the other. Mature wellness thinking often involves engaging with both rather than treating either as the whole story.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the strongest critique of holistic-flourishing wellness frameworks?`,
              options: [
                `Random critique`,
                `Some argue the framework expands "health" to mean "good life," which conflates two distinct things; medicalizing meaning and purpose can produce its own problems: treating ordinary human struggles as health issues requiring professional intervention; the breadth becomes vagueness if not carefully specified`,
                `It's too positive`,
                `Random objection`,
              ],
              correctIndex: 1,
              explanation: `Ivan Illich and successors have made versions of this critique. "Be well in all dimensions" doesn't tell you what to do today. The position works best when it specifies what's meant rather than gesturing at vague flourishing.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Having normal medical markers (blood pressure, cholesterol, etc.) means you're definitely well.`,
              correctAnswer: false,
              explanation: `False. Normal medical markers mean you don't have specific biological problems those markers detect. They don't capture mental health, social connection, meaning, capability, or many other dimensions of wellbeing that research frameworks treat as real. The biomedical framework can produce people whose markers look fine while their lives are falling apart.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I bought this $80 wellness drink because it has all these natural ingredients that are good for you." Based on this lesson, what should you point out?`,
              options: [
                `"Sounds good"`,
                `"That's commercial wellness language. The drink is being sold using 'wellness' to imply benefits without committing to definitions you could test. 'Natural ingredients that are good for you' doesn't specify what biological condition it addresses (biomedical), what flourishing dimension it improves (holistic), or what capability it builds (capability-based). Probably none. Most research-supported wellness practices don't require expensive products: sleep enough, move regularly, eat reasonably, build real relationships, do meaningful work, manage stress, see a doctor when needed. The $80 is mostly buying the implication of wellness rather than its substance. If you actually want to improve your wellbeing, the question isn't what to buy; it's which framework you're using and what specific practice it implies."`,
                `"Buy more"`,
                `"Drink water"`,
              ],
              correctIndex: 1,
              explanation: `Real applied wellness literacy. Don't just dismiss the friend's interest; redirect from commercial wellness framing to research wellness framing. Name the specific pattern (commercial uses "wellness" vaguely to imply benefits). Give concrete research-supported alternatives that don't require purchases.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working definition of wellness? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which framework have you been operating from without realizing it? What does that produce in your actual life?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with an explicit, research-grounded wellness framework over decades, what does that change about how you'll relate to your own wellbeing?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific way you're currently trying to "be well." Which framework does it serve? Is that the right framework for what you actually want?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument said wellness is mostly structural rather than individual. How much of your own wellness is shaped by conditions you didn't choose? What does that mean for how you should think about wellbeing?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Notice one wellness product or message you encounter this week. Apply the commercial-vs-research distinction. What's actually being sold? What would research wellness suggest instead?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Wellness framework shapes how you'll think about your own wellbeing for decades. Two paths.`,
          familyActivity: {
            title: `The Family Wellness Framework Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions. Ask family members which framework they've been operating from. Most adults haven't articulated theirs explicitly; the conversation often surfaces real differences within families. A parent operating from a biomedical framework might be missing flourishing concerns in a kid; a kid operating from a flourishing framework might be underweighting biomedical signals. Surfacing the implicit frameworks often produces useful recalibration.`,
          },
          projectOption: {
            title: `Read one foundational wellness research book, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Martin Seligman's "Flourish" (2011, accessible introduction to PERMA), or Martha Nussbaum's "Creating Capabilities" (2011, accessible introduction to capabilities approach), or Barbara Ehrenreich's "Bright-Sided" (2009, critique of wellness culture and positive thinking industry). Apply concepts during the reading period. Write 1,500 words on what you learned. Reading a real wellness book at 12 produces durable framework that most adults never develop.`,
            offerToParent: `Parent: opt your kid into this project. Reading real wellness research at 12 protects against decades of commercial wellness messaging.`,
          },
          identityQuestion: `If you become someone with a deliberate, research-grounded wellness framework, one you've examined and chosen rather than absorbed from a $5.6 trillion industry. What does that change about how you'll relate to your own wellbeing across a lifetime?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who has a deliberate wellness framework rather than absorbing commercial messaging.`,
            `A person who attends to capabilities rather than just markers or feelings.`,
            `Someone who can spot the difference between commercial wellness and research wellness.`,
          ],
          saveKey: `identity_responses_lw_11_12_1`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. First Life Wellness lesson done. You can now distinguish three serious wellness frameworks (biomedical, holistic flourishing, capability-based), know the key thinkers (WHO 1948, Seligman/PERMA, Ryff, Csikszentmihalyi, Sen, Nussbaum), and tell the difference between commercial wellness and research wellness. Most adults absorb whatever framework their environment offered without examination. You've chosen deliberately at 12. The next lessons go into specific wellness territory, starting with one of the most important and most ignored topics: sleep. Three case studies. Case Study format. Let's go. — Terra`,
          badge: `wellness-foundations`,
          badgeName: `Wellness Foundations`,
          xpEarned: 75,
          competencies: [
            `Distinguishes three serious wellness frameworks (biomedical, holistic flourishing, capability-based)`,
            `Knows WHO 1948 definition and its limits`,
            `Articulates Seligman's PERMA framework`,
            `Understands Sen and Nussbaum's capabilities approach as applied to wellness`,
            `Tells the difference between commercial wellness and research wellness`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: Sleep`,
            hook: `Three case studies on real sleep situations. What research actually says.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L01 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
