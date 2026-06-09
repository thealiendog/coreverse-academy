// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L05 — Movement and Physical Capability
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Movement Science, Body Capability
// CALIBRATED: Voyager spec v1.1 (May 2026)
// SAFETY: Framed around capability not appearance; no specific exercise prescriptions
//         (no minutes/reps/sets); exercise compulsion warning signs included;
//         escalation path included
// Interaction format: CASE STUDY (movement-as-punishment / compulsion / pressure to perform)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l05-v1";

const LIFEWELLNESS_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-05`,
      title: `Movement and Physical Capability`,
      duration: 35,
      xpReward: 75,
      badge: `movement-literate`,
      badgeName: `Movement Literate`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, movement is one of the most well-researched things in wellness. Real evidence shows it helps cognition, mood, sleep, cardiovascular function, and longevity. Movement also gets weaponized by diet culture in ways that produce serious harm. The pop framing treats movement as "exercise": something you do to control your body's appearance or earn food. Real research frames movement around capability: what your body can do, what you enjoy, what builds the life you want. Today we work through three real situations involving movement: a kid who hates exercise because of how it was framed, a kid showing signs of exercise compulsion, and a kid feeling social pressure to perform athletically. I won't give you numbers, programs, or prescriptions. The lesson is about your relationship with movement and how to build one that serves you across decades.`,
          headline: `Movement and Physical Capability`,
          subtitle: `Framed around capability, not appearance. Three real situations. No programs, no numbers.`,
          visual: `/voyager-assets/life-wellness/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Real Research Shows About Movement`,
          paragraphs: [
            `Movement research is well-developed and largely uncontroversial in its core findings. Across thousands of studies, physical movement is associated with improved cardiovascular function, better cognitive performance, improved mood and mental health, better sleep, reduced chronic disease risk, and longer life expectancy. The effects are real and substantial.`,
            `What's specifically established. Aerobic movement (anything that elevates heart rate sustained) improves cardiovascular and metabolic health. Resistance work (using muscles against resistance, whether bodyweight or external) builds and maintains muscle and bone density. Flexibility and mobility work maintains range of motion across the lifespan. Different types of movement do different things; variety usually produces better outcomes than monotony.`,
            `Mental health effects are particularly strong. Schuch and colleagues' 2018 meta-analysis found that regular physical activity has effects on depression comparable to medication and therapy for many people. Movement appears to work through multiple mechanisms: neurotransmitter changes (serotonin, dopamine, endorphins), reduced inflammation, improved sleep, social engagement when done with others, and a sense of agency and capability. The mental health effects are large enough that exercise is increasingly recommended as a primary intervention for mild-to-moderate depression alongside other treatments.`,
            `Why this matters for 11-12 year olds specifically. Adolescence is when physical capabilities are developing rapidly, and the movement patterns you build now shape your relationship with movement across the rest of your life. People who develop a healthy relationship with movement in adolescence are far more likely to stay active across their lifespan. People who develop a punitive or diet-culture-driven relationship with movement often stop entirely as soon as they have control over their schedule, or develop other problems with movement (compulsion, exercise as self-punishment).`,
            `What gets in the way of the benefits. Movement framed around appearance, weight, or "earning" food produces measurably worse outcomes than movement framed around capability, enjoyment, or function. Diet-culture-framed exercise predicts disordered eating and exercise patterns. The frame matters as much as the activity.`,
          ],
          image: `/voyager-assets/life-wellness/l05-s1-research.webp`,
          imageCaption: `Movement research is well-established: cardiovascular, cognitive, mental health, sleep, longevity benefits. Schuch et al 2018 found exercise effects on depression comparable to medication/therapy.`,
          vocab: [
            {
              word: `movement research foundations`,
              definition: `Well-established research findings on physical movement and health. Aerobic movement improves cardiovascular and metabolic function. Resistance work builds and maintains muscle and bone. Movement effects on depression comparable to medication/therapy in many cases (Schuch et al 2018 meta-analysis). Mechanisms include neurotransmitter changes, reduced inflammation, improved sleep, social engagement, agency/capability. Movement framed around appearance or weight produces worse outcomes than movement framed around capability, enjoyment, or function.`,
              audioPrompt: `Movement research is well-developed and largely uncontroversial in its core findings, {name}. Across thousands of studies, physical movement is associated with improved cardiovascular function, better cognitive performance, improved mood and mental health, better sleep, reduced chronic disease risk, and longer life expectancy. Aerobic movement that elevates heart rate sustained improves cardiovascular and metabolic health. Resistance work using muscles against resistance builds and maintains muscle and bone density. Flexibility and mobility work maintains range of motion across the lifespan. Mental health effects are particularly strong. Schuch and colleagues' 2018 meta-analysis found that regular physical activity has effects on depression comparable to medication and therapy for many people. Movement appears to work through multiple mechanisms including neurotransmitter changes (serotonin, dopamine, endorphins), reduced inflammation, improved sleep, social engagement when done with others, and a sense of agency and capability. The mental health effects are large enough that exercise is increasingly recommended as a primary intervention for mild-to-moderate depression alongside other treatments.`,
            },
            {
              word: `aerobic movement`,
              definition: `Any physical activity that elevates heart rate in a sustained way, improving cardiovascular and metabolic health. The text identifies aerobic movement as one of the three primary types of physical activity alongside resistance work and flexibility/mobility work. Research has established its benefits for cardiovascular function, metabolic health, and — through multiple mechanisms — mood, sleep, and cognition.`,
              audioPrompt: `Aerobic movement is any physical activity that elevates heart rate in a sustained way, {name}. Terra here — the word aerobic means "with oxygen," and this type of movement is defined by sustained cardiovascular engagement: the heart beats faster, breathing increases, the body's aerobic energy systems are working. Running, biking, swimming, dancing, hiking, sustained sports play — all of these can be aerobic depending on intensity and duration. The text identifies three primary types of movement with distinct benefits. Aerobic movement improves cardiovascular and metabolic health. Resistance work — using muscles against resistance — builds and maintains muscle and bone density. Flexibility and mobility work maintains range of motion across the lifespan. Different types do different things; variety usually produces better outcomes than monotony. Aerobic movement also operates through multiple psychological and physiological mechanisms. Neurotransmitter changes including serotonin, dopamine, and endorphins. Reduced systemic inflammation. Improved sleep architecture. Social engagement when done with others. And a sense of agency and capability — the experience of your body doing something capable and effective. Schuch and colleagues' 2018 meta-analysis found effects on depression comparable to medication and therapy through these combined mechanisms.`,
            },
            {
              word: `movement and depression`,
              definition: `Schuch and colleagues' 2018 meta-analysis found that regular physical activity has effects on depression comparable to medication and therapy for many people. Movement operates through multiple mechanisms: neurotransmitter changes (serotonin, dopamine, endorphins), reduced inflammation, improved sleep, social engagement, and a sense of agency and capability. Exercise is increasingly recommended as a primary intervention for mild-to-moderate depression alongside other treatments.`,
              audioPrompt: `The research on movement and depression is one of the strongest findings in this area, {name}. Terra here — Schuch and colleagues' 2018 meta-analysis examined the effects of regular physical activity across a large body of research and found something striking: the effects on depression are comparable to medication and therapy for many people. Not a minor benefit, not a nice add-on — comparable to first-line clinical treatments. The mechanisms the text names are worth understanding because they explain why the effect is so robust. Neurotransmitter changes: movement increases serotonin, dopamine, and endorphin activity in the brain — the same neurotransmitters many antidepressants target. Reduced inflammation: chronic low-grade inflammation is increasingly understood as a contributor to depression, and movement reduces it. Improved sleep: poor sleep is both a symptom and a cause of depression, and movement improves sleep quality. Social engagement: movement done with others addresses the social isolation that often accompanies and worsens depression. Sense of agency and capability: moving successfully through physical challenges generates a felt sense of competence that counters the helplessness patterns in depression. The text notes this is large enough that exercise is increasingly recommended as a primary intervention for mild-to-moderate depression alongside other treatments — not instead of professional care, but alongside it.`,
            },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Capability Framing vs Appearance Framing`,
          paragraphs: [
            `One of the most important distinctions in movement literacy: capability framing versus appearance framing. The two produce very different relationships with movement and very different long-term outcomes.`,
            `Appearance framing treats movement as a tool to change how your body looks. The goals are external (specific body shape, specific weight, specific aesthetic). The motivation is dissatisfaction with current appearance. The reward is appearance change, which often doesn't come or doesn't last. Movement becomes punishment for eating or for the body being what it is. The relationship is adversarial: your body is a problem and movement is the solution.`,
            `Capability framing treats movement as a way to build and maintain what your body can do. The goals are functional (climb stairs without trouble, lift things, run if needed, play, dance, do work, live the life you want). The motivation is interest in capability rather than dissatisfaction with appearance. The reward is capability itself: noticing what you can do, how movement feels, the engagement and enjoyment of physical activity. The relationship is collaborative: your body is a partner and movement is the practice.`,
            `Research on the two framings is striking. Self-determination theory research on exercise (Ryan, Deci, and colleagues) has found that people who exercise for internal reasons (enjoyment, capability, autonomy) maintain exercise much more reliably than people who exercise for external reasons (appearance, others' expectations, control). They also report more positive psychological effects from the same amount of activity. The framing isn't just philosophical; it shapes what actually happens to people across years.`,
            `Particularly for adolescents, capability framing matters. The body during adolescence is changing rapidly and often unpredictably. Appearance framing during this period produces specific harms: body dissatisfaction, eating disorder risk, exercise as punishment patterns, abandonment of movement when appearance goals don't materialize. Capability framing produces more durable patterns: enjoyment of activities, attention to function, ability to find movement that suits the body you have rather than the body diet culture told you to want.`,
            `What this implies practically. Notice the framing in any movement messaging you encounter. Pop content and the fitness industry overwhelmingly use appearance framing because it sells better; capability framing is harder to monetize. Asking "is this trying to make me hate my body so I'll buy something?" usually surfaces the actual framing. Building your own movement practice around capability (what you enjoy, what makes you feel good, what builds the function you want) protects against the patterns appearance framing produces.`,
          ],
          image: `/voyager-assets/life-wellness/l05-s2-capability.webp`,
          imageCaption: `Capability framing vs appearance framing. Self-determination theory research: internal motivation produces more durable practice and better psychological effects.`,
          vocab: [
            {
              word: `appearance framing`,
              definition: `Critical distinction in movement literacy. Appearance framing: movement to change body shape/weight/aesthetic; external goals; adversarial relationship with body; predicts abandonment when appearance goals fail. Capability framing: movement to build/maintain function; internal goals (enjoyment, capability, autonomy); collaborative relationship with body. Self-determination theory research (Ryan, Deci): internal motivation produces more durable practice and better psychological effects. Particularly important for adolescents whose bodies are changing rapidly.`,
              audioPrompt: `Capability versus appearance framing is one of the most important distinctions in movement literacy, {name}. Appearance framing treats movement as a tool to change how your body looks. The goals are external: specific body shape, specific weight, specific aesthetic. The motivation is dissatisfaction with current appearance. The reward is appearance change, which often doesn't come or doesn't last. Movement becomes punishment for eating or for the body being what it is. Capability framing treats movement as a way to build and maintain what your body can do. The goals are functional: climb stairs, lift things, run, play, do work, live the life you want. The motivation is interest in capability rather than dissatisfaction with appearance. The reward is capability itself. Self-determination theory research from Ryan, Deci, and colleagues has found that people who exercise for internal reasons (enjoyment, capability, autonomy) maintain exercise much more reliably than people who exercise for external reasons (appearance, others' expectations, control). They also report more positive psychological effects from the same amount of activity.`,
            },
            {
              word: `self-determination theory`,
              definition: `A research framework from Ryan and Deci that distinguishes internal motivation (acting from enjoyment, interest, autonomy, and intrinsic values) from external motivation (acting to gain rewards, avoid punishment, or meet others' expectations). Applied to movement, the research shows that internally motivated exercise produces more durable practice and better psychological outcomes than externally motivated exercise — regardless of the amount of activity performed.`,
              audioPrompt: `Self-determination theory is a research framework developed by Ryan and Deci that distinguishes between types of motivation and their effects on behavior and wellbeing, {name}. Terra here — the core distinction is between internal motivation and external motivation. Internally motivated behavior comes from genuine interest, enjoyment, personal values, or a sense of autonomous choice. Externally motivated behavior comes from rewards, punishments, social pressure, or obligation. The theory predicts, and research confirms, that internally motivated behavior tends to be more durable, more satisfying, and more conducive to wellbeing than externally motivated behavior — even when the behavior itself is identical. Applied to movement, the findings are striking. People who exercise for internal reasons — because they enjoy it, because it serves their capability, because they chose it — maintain exercise much more reliably over years than people who exercise for external reasons like appearance change, others' expectations, or social pressure. They also report more positive psychological effects from the same amount of activity. This has a direct implication for how to think about finding movement: the question is not "what should I do for fitness" but "what kind of movement do I actually enjoy and choose freely?" The text identifies the pop culture fitness industry as predominantly using external motivation — appearance goals, social comparison, transformation promises — because external motivation sells products better, even though it produces worse long-term outcomes.`,
            },
            {
              word: `adolescent movement relationship`,
              definition: `The pattern of engagement with physical movement developed during adolescence, which research suggests is disproportionately important for lifetime activity levels. The text notes that people who develop a healthy relationship with movement in adolescence are far more likely to stay active across their lifespan, while those who develop punitive or diet-culture-driven relationships often stop entirely or develop compulsive patterns.`,
              audioPrompt: `The adolescent movement relationship refers to the pattern of engagement with physical movement developed during the teenage years, {name}. Terra here — the text makes a specific empirical claim about why this period matters disproportionately. People who develop a healthy relationship with movement during adolescence are far more likely to stay active across their lifespan. People who develop a punitive or diet-culture-driven relationship with movement often stop entirely as soon as they have control over their own schedule — when high school ends, when a sport is no longer required, when no one is making them go. Some develop other problems: compulsion, exercise as self-punishment, chronic avoidance that leaves them without access to the substantial cognitive, mood, sleep, and health benefits movement provides. The text identifies what produces the healthy versus unhealthy relationship. Capability framing versus appearance framing. Chosen versus imposed activity. Enjoyment versus punishment. Social and fun versus solitary and instrumental. The adolescent brain is also doing developmental work that makes this period particularly important for habit formation; patterns built now tend to persist with unusual durability. Adolescence is when the body is changing most rapidly, which also makes appearance framing especially harmful and capability framing especially valuable.`,
            },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Exercise Compulsion Is A Real Thing`,
          paragraphs: [
            `Most pop content treats more exercise as automatically better. Research is clear that's not true. Exercise compulsion (also called compulsive exercise, exercise dependence, or exercise addiction in different research traditions) is a real pattern that produces measurable harm, particularly in adolescents.`,
            `What exercise compulsion looks like. The exercise is rigid (must happen at specific times, can't be missed, can't be modified). Missing exercise produces significant anxiety, guilt, or distress. Exercise continues despite injury, illness, or contraindication. Life gets organized around exercise rather than exercise fitting into life. Exercise is used to manage difficult emotions or punish eating. Exercise produces shame when missed even briefly. Family, friends, and other activities get sacrificed for exercise. The person has tried to reduce exercise and been unable to.`,
            `Exercise compulsion often co-occurs with disordered eating but can exist independently. Some people develop compulsive exercise patterns through sports culture, through diet culture, through anxiety/OCD-spectrum conditions, or through fitness culture pressure. The compulsion is not "good discipline gone too far"; it's a clinical pattern that can produce real harm including injury, hormonal disruption, growth problems in adolescents, and significant mental health impacts.`,
            `Particularly for adolescents, exercise compulsion can be hard to recognize because the same behaviors that look like "dedication" or "discipline" can be compulsion. Distinguishing markers include flexibility (can the person comfortably modify or miss exercise?), emotion (does missing exercise produce significant distress?), continued despite cost (does exercise continue through injury, illness, or interference with other important things?), and motivation (is exercise driven by enjoyment/capability, or by anxiety/avoidance/diet culture?).`,
            `Research on exercise compulsion has documented specific risks. Adolescents with compulsive exercise patterns have higher rates of overtraining injury, stress fractures, hormonal disruption (including disruption of menstrual cycles in those who menstruate, which has consequences for bone density and other systems), and progression to clinical eating disorders. The pattern is treatable but requires professional help, often coordinated with eating disorder treatment when both are present.`,
            `If you notice these patterns in yourself or someone you care about: talk to a trusted adult, school counselor, or doctor. The pattern doesn't usually resolve on its own and tends to intensify without intervention. The National Alliance for Eating Disorders helpline can help with cases involving co-occurring eating concerns. Recognizing the pattern as something serious (not just dedication) is the first step toward getting help.`,
          ],
          image: `/voyager-assets/life-wellness/l05-s3-compulsion.webp`,
          imageCaption: `Exercise compulsion: rigid patterns, distress when missed, continued despite injury/illness, life organized around exercise. Particularly harmful in adolescents. Treatable with professional help.`,
          vocab: [
            {
              word: `exercise compulsion`,
              definition: `Clinical pattern producing measurable harm, particularly in adolescents. Warning signs: rigid exercise routine (must happen at specific times, can't be missed); significant anxiety/guilt/distress when missing; continues despite injury, illness, or contraindication; life organized around exercise rather than exercise fitting into life; exercise used to manage emotions or punish eating; tried to reduce and been unable. Often co-occurs with disordered eating. Risks: overtraining injury, hormonal disruption, eating disorder progression. Treatable with professional help.`,
              audioPrompt: `Exercise compulsion (also called compulsive exercise, exercise dependence, or exercise addiction in different research traditions) is a real pattern that produces measurable harm, particularly in adolescents, {name}. Warning signs include the exercise being rigid: must happen at specific times, can't be missed, can't be modified. Missing exercise produces significant anxiety, guilt, or distress. Exercise continues despite injury, illness, or contraindication. Life gets organized around exercise rather than exercise fitting into life. Exercise is used to manage difficult emotions or punish eating. Exercise produces shame when missed even briefly. Family, friends, and other activities get sacrificed for exercise. The person has tried to reduce exercise and been unable to. The compulsion is not "good discipline gone too far." It's a clinical pattern that can produce real harm including injury, hormonal disruption, growth problems in adolescents, and significant mental health impacts. The pattern is treatable but usually requires professional help, often coordinated with eating disorder treatment when both are present.`,
            },
            {
              word: `hormonal disruption`,
              definition: `A physiological consequence of excessive exercise in adolescents, particularly when combined with inadequate nutrition. The text identifies cessation of menstrual cycles as a medically serious sign of hormonal disruption that affects bone density and other body systems. Hormonal disruption is one of the specific risks the research on exercise compulsion has documented in adolescents with rigid, high-volume exercise patterns.`,
              audioPrompt: `Hormonal disruption is a physiological consequence of excessive exercise in adolescents that the text identifies as a medically serious warning sign, {name}. Terra here — the text names cessation of menstrual cycles specifically as a critical medical sign in the case of someone showing exercise compulsion patterns. When exercise volume is high and nutrition is inadequate — whether through deliberate restriction or simply through not eating enough to match energy expenditure — the body's hormonal systems respond by reducing energy use in non-survival functions. Reproductive hormone production is one of the first things the body reduces. This produces cessation of menstrual cycles, a condition called amenorrhea, in people who would otherwise menstruate. The consequences extend beyond the reproductive system. Estrogen plays a critical role in bone density maintenance; when estrogen drops due to hormonal disruption, bone density can decrease during exactly the adolescent period when it should be building to lifelong peak levels. The text also notes growth problems as a potential consequence of exercise compulsion in adolescents more broadly. The key practical point is clear: cessation of menstrual cycles is not a minor symptom to note and monitor. It is a medically serious sign indicating real physiological consequences that require professional medical evaluation, not waiting to see.`,
            },
            {
              word: `overtraining injury`,
              definition: `Physical injury resulting from insufficient recovery relative to exercise load — stress fractures, tendon damage, and joint problems that develop when the body does not have adequate time or resources to repair between exercise sessions. The text identifies overtraining injury as one of the documented risks associated with exercise compulsion in adolescents, who are particularly vulnerable because their bodies are still growing.`,
              audioPrompt: `Overtraining injury refers to physical damage that develops when exercise load exceeds the body's capacity to recover between sessions, {name}. Terra here — the research on exercise compulsion in adolescents has documented overtraining injury as one of the specific, measurable harms. The body adapts to exercise stress through a process of damage and repair: movement stresses tissues, the body repairs and strengthens them during rest, and the cycle produces increased capability. When insufficient recovery time is allowed — or when exercise volume is so high that recovery cannot keep pace even with adequate rest — the damage accumulates without adequate repair. Stress fractures are a particularly documented form: repeated loading of bones without adequate recovery time causes microscopic damage to accumulate into fractures that can require weeks to months of no loading to heal. Tendon damage and joint problems follow similar patterns. Adolescents are particularly vulnerable because their bones and connective tissues are still growing and developing, making them less tolerant of the cumulative loading that overtraining produces. The text presents this alongside hormonal disruption and eating disorder progression as the specific risks documented in the research on compulsive exercise patterns — consequences that make the "dedication" framing around rigid high-volume exercise not just philosophically wrong but medically harmful.`,
            },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Makes Movement Stick`,
          paragraphs: [
            `Research on movement adherence (people actually doing it consistently across years) shows clear patterns. The factors that predict whether movement becomes a durable part of life are mostly different from the factors fitness culture emphasizes.`,
            `What predicts adherence. Enjoyment: people who enjoy what they're doing keep doing it; people who hate what they're doing find ways to stop. Autonomy: chosen activities rather than imposed ones produce more durable practice. Capability framing: internal motivations (function, enjoyment, capability) produce more durable practice than external ones (appearance, expectations, weight). Social context: doing things with others or as part of a community usually beats doing them alone. Reasonable expectations: people who expect modest gains and consistency outperform people chasing dramatic transformation. Fit with life: activities that fit into actual life keep happening; activities that require dramatic life rearrangement don't.`,
            `What doesn't predict adherence as well as fitness culture suggests. Intensity: harder isn't usually better for adherence; sustainable beats heroic. Specificity of program: detailed programs often produce less adherence than flexible practice. Equipment: most consistent movers don't need much equipment. Aesthetics: chasing appearance change produces specific motivational dynamics that often fail.`,
            `Particularly for adolescents finding movement. Try things. Adolescents who try multiple types of movement and find what they enjoy tend to develop durable practice; adolescents who stick with one thing they don't enjoy often abandon movement entirely. Find activities that suit your actual body and interests rather than aspirational ones. Movement comes in many forms: walking, hiking, dancing, sports, biking, swimming, climbing, gardening, martial arts, yoga, weightlifting, and many others. The best movement is the one you'll actually do.`,
            `What about people who genuinely don't enjoy any structured movement. That's real for some people; not everyone needs to love working out. The research supports finding ways to move that fit into life (walking instead of driving when possible, taking stairs, choosing active hobbies, building movement into daily activities) rather than forcing structured exercise that produces dread. People who incorporate movement into life often outperform people who do structured exercise they hate.`,
            `One important framing for this lesson. I'm not going to give you a program, a number of minutes, or a recommendation for what to do. Real research on adolescent movement doesn't support specific prescriptions for individual kids; the right amount and type depends on too many factors I don't know about you. What I'll give you is the framework for thinking about your own movement: capability framing, enjoyment-based selection, fit with life, recognition of warning signs.`,
          ],
          image: `/voyager-assets/life-wellness/l05-s4-adherence.webp`,
          imageCaption: `Adherence research: enjoyment, autonomy, capability framing, social context, reasonable expectations, fit with life predict durable movement. Intensity and aesthetics don't.`,
          vocab: [
            {
              word: `movement adherence factors`,
              definition: `Research-supported factors that predict whether movement becomes durable across years. Predict adherence: enjoyment, autonomy (chosen vs imposed), capability framing (internal motivations), social context (community/others), reasonable expectations, fit with actual life. Don't predict as well as fitness culture suggests: intensity, program specificity, equipment, appearance goals. For adolescents: try multiple types, find what you enjoy, find activities that suit your actual body and interests. People who incorporate movement into life often outperform people who do structured exercise they hate.`,
              audioPrompt: `Movement adherence research identifies factors that predict whether movement becomes a durable part of life across years, {name}. The factors are mostly different from what fitness culture emphasizes. Enjoyment predicts adherence: people who enjoy what they're doing keep doing it; people who hate what they're doing find ways to stop. Autonomy predicts adherence: chosen activities rather than imposed ones produce more durable practice. Capability framing predicts adherence: internal motivations including function, enjoyment, capability produce more durable practice than external ones like appearance, expectations, or weight. Social context predicts adherence: doing things with others or as part of a community usually beats doing them alone. Reasonable expectations predict adherence: people who expect modest gains and consistency outperform people chasing dramatic transformation. Fit with life predicts adherence: activities that fit into actual life keep happening; activities that require dramatic life rearrangement don't. Particularly for adolescents finding movement: try things, find what you enjoy, find activities that suit your actual body and interests rather than aspirational ones.`,
            },
            {
              word: `movement autonomy`,
              definition: `The quality of choosing physical activity based on personal interest and preference rather than external obligation or social pressure. Self-determination theory research, applied to movement, finds that autonomous choice of activity is one of the strongest predictors of durable engagement — people who choose what they do continue much more reliably than people who do imposed activities.`,
              audioPrompt: `Movement autonomy is the quality of choosing physical activity based on personal interest and preference rather than external obligation or social pressure, {name}. Terra here — self-determination theory research, applied to movement, identifies autonomy as one of the strongest predictors of durable engagement. When you choose an activity because you are genuinely interested in it and it serves something you care about, you are far more likely to sustain it across months and years. When you do an activity because someone told you to, because you think you should, or because social pressure or appearance goals are driving you, you are much more likely to abandon it as soon as the external pressure is removed or when the hoped-for outcomes don't materialize on schedule. The text gives the practical implication specifically for adolescents: try multiple types of movement and find what you enjoy. Walking, hiking, dancing, sports, biking, swimming, climbing, gardening, martial arts, yoga, weightlifting — movement comes in many forms, and the best one for you is the one you'll actually do. The text also notes that people who incorporate movement into life (walking when possible, active hobbies, movement woven into daily activities) often outperform people who do structured exercise they hate — because fitting into life preserves the autonomy that makes movement sustainable.`,
            },
            {
              word: `social context of movement`,
              definition: `Doing physical activity with others or as part of a community, which the adherence research identifies as one of the factors that predicts durable movement engagement. The text contrasts this with solo structured exercise, noting that social movement often produces better adherence and the social engagement is also one of the mechanisms through which movement produces mental health benefits.`,
              audioPrompt: `Social context of movement refers to doing physical activity with others or as part of a community, {name}. Terra here — movement adherence research identifies social context as one of the factors that reliably predicts whether movement becomes durable across years. Doing things with friends, in a class, as part of a team, or in a community setting usually produces more consistent engagement than doing the same activity alone. The text notes two reasons this matters. First, social context is a direct adherence predictor: the social connection itself motivates showing up, and having others who expect you creates a structure that sustains engagement through the periods when motivation varies. Second, social engagement is one of the mechanisms through which movement produces mental health benefits. The Schuch et al 2018 meta-analysis found movement effects on depression comparable to medication and therapy; one of the mechanisms named is social engagement when movement is done with others. The social and the physical work together. The practical implication: when choosing how to move, considering what involves other people — a walking group, a team sport, a class, movement with friends — often produces both more durable engagement and greater mental health benefit than isolated structured exercise, even when the physical activity itself is similar.`,
            },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Cases`,
          paragraphs: [
            `In the cases that follow, three young people face different movement-related situations. Each has an intuitive response and a research-informed response. Work through what would actually serve them better given everything you've read in sections 1-4.`,
            `One framing as you work. Movement is not the same as exercise, and exercise is not the same as fitness culture. Movement is what bodies do. Exercise is structured movement. Fitness culture is a commercial framework around exercise that often has nothing to do with what's actually good for bodies. Recognizing the distinctions helps with the cases.`,
            `Another framing. The same activity can be healthy or harmful depending on the relationship with it. Running can be enjoyable capability-building practice for one person and compulsive self-punishment for another. The activity isn't what determines whether it's good for someone; the relationship and framing do.`,
            `One reminder about warning signs. If you notice in yourself or someone you know: rigid exercise patterns, significant distress when missing exercise, continued exercise through injury or illness, exercise used as punishment for eating or for the body, life organized around exercise rather than exercise fitting in life, or any of the disordered eating signs from the previous lesson, talk to a trusted adult. National Alliance for Eating Disorders helpline if relevant. These patterns don't usually resolve on their own.`,
            `One last framing. You're 12. The relationship with movement you build now compounds across decades. Adults who developed healthy movement relationships in adolescence are far more likely to stay active across life; adults who developed problematic relationships often stop entirely or develop other problems. Building deliberate framework at 12 protects across decades.`,
          ],
          image: `/voyager-assets/life-wellness/l05-s5-before.webp`,
          imageCaption: `Three case studies. The activity isn't what determines whether movement is good for someone; the relationship and framing do.`,
          vocab: [
            {
              word: `fitness culture`,
              definition: `Three distinct concepts often conflated. Movement: what bodies do, any physical activity. Exercise: structured movement, usually deliberate. Fitness culture: commercial framework around exercise that often has nothing to do with what's actually good for bodies. Pop content typically conflates all three. Recognizing the distinctions helps: someone can have a healthy relationship with movement without engaging much with fitness culture; someone can do "exercise" in deeply harmful ways via fitness culture; movement can happen entirely outside the framework of exercise (walking, gardening, dancing, daily life activity).`,
              audioPrompt: `Movement, exercise, and fitness culture are three distinct concepts that pop content often conflates, {name}. Movement is what bodies do: any physical activity at all. Walking, dancing, climbing stairs, gardening, playing, working, sports, anything. Exercise is structured movement, usually deliberate, often in dedicated sessions. Running on purpose, lifting weights, taking a class. Fitness culture is a commercial framework around exercise that often has nothing to do with what's actually good for bodies. It sells programs, products, aesthetic outcomes, and identity. It often uses appearance framing, intensity worship, and "no pain, no gain" messaging. Recognizing the three as distinct matters. Someone can have a healthy relationship with movement without engaging much with fitness culture. Someone can do "exercise" in deeply harmful ways via fitness culture. Movement can happen entirely outside the framework of exercise. The best movement for most people is whatever they'll actually do consistently, in a form they enjoy, framed around capability rather than appearance.`,
            },
            {
              word: `movement as punishment`,
              definition: `A harmful framing in which exercise is used to compensate for eating, to "earn" food, or to punish the body for what it is. The text identifies this as a pattern associated with both diet culture framing and exercise compulsion. Research shows that movement framed as punishment produces worse outcomes than movement framed around capability, enjoyment, or function — including predicting disordered eating and exercise patterns.`,
              audioPrompt: `Movement as punishment is a harmful framing in which exercise is used to compensate for eating, to "earn" food, or to punish the body for its shape or size, {name}. Terra here — the text identifies this as connected to two distinct problems covered in the lesson. It is one pattern of diet-culture-framed exercise, where the logic is that eating creates a debt that exercise must repay, or that having the wrong body requires physical effort to correct. And it is one of the warning signs of exercise compulsion: the text lists "exercise used to manage difficult emotions or punish eating" as one of the specific markers that distinguish compulsion from healthy practice. Research on movement outcomes shows consistently that this framing produces worse results than capability or enjoyment framing — not just psychologically, but in actual long-term adherence and health outcomes. The case of Mia in the lesson illustrates this directly: her aversion to movement came specifically from a framing in which exercise was what you did to "burn off" what you ate and to correct a body that needed fixing. That framing produced a damaged relationship with movement that extended to activities she used to enjoy before the framing took hold. Rebuilding required separating movement from that frame entirely — which is what the research supports.`,
            },
            {
              word: `imposed competitive activity`,
              definition: `Sports or athletic programs assigned to a young person based on a parent's or institution's expectations rather than the person's own interest or choice. Self-determination theory research, applied to movement, predicts that imposed activities — even physically beneficial ones — tend to damage long-term movement relationships rather than build them, particularly when the child is not thriving in the activity.`,
              audioPrompt: `Imposed competitive activity refers to sports or athletic programs assigned to a young person based on a parent's or institution's expectations rather than the person's own interest or choice, {name}. Terra here — the case of Aaliyah in the lesson illustrates this pattern. Her dad was a high school athlete and signed her up for a competitive track team. She hated it: the early morning practices, the pressure, the focus on competition, the way it had changed how movement felt. Her grades and mental health declined. The self-determination theory framework predicts exactly this outcome. Externally imposed activity — even if the activity itself has real physical benefits — tends to produce aversion, resentment, and abandonment when the external pressure is removed. And when a kid is clearly not thriving, continuing for the parent's sake produces real harm in service of parental expectations. The text identifies what the parent's actual underlying goal likely is: they want their child to be active and well across decades. Imposed competitive activity that damages the movement relationship undermines that actual goal while pursuing the surface-level goal of sports participation. The research-informed response is to treat the child's experience as the primary data — the right metric for whether a sport is working is whether the kid is thriving, not whether it matches the parent's history.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l05-case-study`,
          type: `case-study`,
          headline: `Three Movement Situations`,
          intro: `{name}, three real situations involving movement. For each, identify what would actually serve the person based on real research.`,
          cases: [
            {
              id: `case-1`,
              title: `Hates "Exercise" Because Of How It Was Framed`,
              context: `Mia is in 7th grade. Throughout elementary school, her PE teacher framed exercise as something you do to "burn off" what you ate. Her parents put her in a weight-loss-focused fitness program when she was 10. She came to hate every form of movement. Now she avoids anything that resembles exercise, even activities she used to enjoy as a younger kid (biking, hiking, dancing). She says "I just hate moving" but also feels sluggish and her mood has gotten worse over the past year. Her parents are now telling her she needs to "find something" to do for fitness.`,
              question: `What would actually serve Mia?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Push through the dislike and pick any structured exercise program. Discipline is what builds healthy habits.`,
                  outcome: `This misses the actual problem. Mia doesn't lack discipline; she has a damaged relationship with movement caused by diet culture framing. Forcing more structured exercise under the same diet-culture framing will probably deepen the aversion, not fix it. The "discipline" framing is itself diet culture talk; it treats Mia as the problem rather than the framing she absorbed.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Separate movement from exercise and from diet culture entirely. The problem isn't that Mia "doesn't move enough"; it's that movement got linked to body shame and "earning" food in ways that produce aversion. The path forward involves: rebuilding the connection between movement and enjoyment by trying things she used to like (biking, hiking, dancing) explicitly NOT framed as exercise or weight management; finding social or community contexts that make movement feel like something other than self-improvement work; talking openly with her parents about how the previous framing affected her and asking them to drop the weight/fitness framing; building movement back as something her body does because she enjoys it and it serves her capability, not because she needs to earn anything or change anything. The mood and energy issues may resolve as movement becomes available again, but the framing change has to come first.`,
                  outcome: `This is the research-informed approach. Self-determination theory research is clear that movement framed around external pressures (appearance, weight, others' expectations) produces aversion and abandonment. Rebuilding requires a different framing. Going back to activities she used to enjoy in childhood works specifically because that's before the diet-culture framing took hold. The conversation with parents matters because continued diet-culture framing from them will undermine any progress. The mood/energy improvements often follow once movement becomes available without the loaded framing.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Tell Mia it's fine to not move at all. Movement isn't actually that important if she doesn't enjoy it.`,
                  outcome: `This goes too far in the other direction. The research on movement benefits for mood, cognition, sleep, and physical capability is robust. Mia's current sluggishness and worsening mood may be connected to her near-total movement avoidance. The right response isn't "don't move" but "rebuild a healthy relationship with movement so that you can have the benefits without the harm of diet-culture framing." Anti-diet doesn't mean anti-movement; it means anti-movement-as-punishment.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates damage from diet-culture exercise framing. The intervention isn't more discipline OR total avoidance; it's separating movement from the harmful framing entirely. Self-determination theory supports rebuilding around internal motivation. Going back to childhood-enjoyed activities works because they predate the framing damage. Parent conversation matters because continued external framing will undermine recovery. Movement is real wellness; the framing around it is what determines whether it serves or harms.`,
            },
            {
              id: `case-2`,
              title: `Showing Signs Of Exercise Compulsion`,
              context: `Marcus is in 7th grade. Over the last 8 months, his exercise has intensified dramatically. He now runs every morning before school regardless of weather, exhaustion, or minor injury. He runs even when sick. He's missed family events to make sure he gets his runs in. When his parents tried to insist he take a day off, he became extremely anxious and snuck out to run anyway. He's lost weight (which he denies trying to do) and his menstrual cycles have stopped. He says he's "just dedicated" and his soccer coach praises his work ethic. His parents are worried but don't want to discourage healthy behavior. What's actually going on?`,
              question: `What would actually serve Marcus?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Marcus is just being dedicated. Wait to see if it continues. Healthy discipline shouldn't be discouraged.`,
                  outcome: `This is the most dangerous response. Marcus is exhibiting most of the warning signs of exercise compulsion plus co-occurring concerns suggesting possible eating disorder: rigid pattern (must run every day regardless of conditions); significant distress when prevented; continues through illness/injury/contraindication; life organized around exercise; weight loss with denial of trying; cessation of menstrual cycles (a serious medical sign indicating hormonal disruption). The "dedication" framing is exactly what makes exercise compulsion hard to recognize. Waiting often means the pattern intensifies and produces more harm. The "healthy discipline" framing is wrong here; this isn't healthy.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Marcus is showing serious warning signs that warrant immediate professional evaluation. Specifically: the rigidity of the pattern (every day regardless), the significant distress when prevented, continued exercise through illness/injury, life organized around running (missing family events), weight loss with denial of intent, and cessation of menstrual cycles (a critical medical sign). These patterns together strongly suggest compulsive exercise and possible co-occurring eating disorder. Parents should: have a direct conversation with Marcus about what they're observing (without framing it as criticism); take him to his pediatrician or a doctor familiar with adolescent eating disorders for medical evaluation; reach out to the National Alliance for Eating Disorders helpline for resources; consider working with an eating disorder treatment team if recommended. The cessation of menstrual cycles is medically serious and shouldn't be ignored; it indicates hormonal disruption that affects bone density and other systems. The soccer coach's praise is well-intentioned but reinforces the wrong framing; coaches often need education about distinguishing healthy training from compulsion.`,
                  outcome: `This is the research-informed and medically appropriate approach. Exercise compulsion and eating disorders are clinical conditions that don't usually resolve on their own and tend to intensify without intervention. Earlier intervention produces dramatically better outcomes. The specific signs Marcus shows are textbook warning signs that the eating disorder treatment literature describes. The medical evaluation is critical because cessation of menstrual cycles indicates real physiological consequences happening. Parents are right to be worried; the right response to that worry is professional evaluation, not waiting to see.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Force Marcus to stop exercising completely. He's clearly addicted; cold turkey is the only solution.`,
                  outcome: `This is wrong both clinically and practically. Forcing complete cessation of exercise in someone with compulsive exercise patterns often produces intense distress, possible escalation to other compensatory behaviors, and breakdown of family relationships without addressing the underlying patterns. Eating disorders and exercise compulsion require coordinated professional treatment, not enforced abstinence. The right intervention is medical and psychological evaluation, not parents trying to manage a clinical condition through force.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates exercise compulsion with strong signs of co-occurring eating concerns. The "dedication" framing makes the pattern dangerously easy to miss. Multiple specific warning signs are present including the medically serious sign of menstrual cessation (which affects bone density and other systems and isn't optional to address). Professional evaluation is required; the conditions don't resolve on their own and tend to intensify. The case shows why kids and parents need to know warning signs: well-intentioned waiting can cause real harm in clinical patterns that intensify without intervention.`,
            },
            {
              id: `case-3`,
              title: `Social Pressure To Perform Athletically`,
              context: `Aaliyah is in 7th grade. She used to enjoy running and biking casually with friends. Her dad was a high-school athlete and has been pushing her toward competitive sports throughout middle school. He signed her up for a competitive track team last fall. She hates it: the early morning practices, the pressure, the focus on competition, the way it's changed how movement feels. But she's afraid of disappointing him by quitting. Her own grades and mental health have declined since she started. She wonders if she should just push through or if there's another way.`,
              question: `What would actually serve Aaliyah?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Push through. Her dad is investing in her future. Quitting teaches the wrong lesson.`,
                  outcome: `This treats Aaliyah's experience as less important than her dad's expectations. Self-determination theory research is clear: imposed exercise that conflicts with internal motivation predicts both abandonment of the specific activity AND damaged relationship with movement generally. Aaliyah's grades and mental health declining are signals that the situation is producing real harm. The "pushing through" framing teaches that her own experience doesn't matter, which is exactly the framing that produces adults who have terrible relationships with movement. Continuing for her dad's sake protects her dad's feelings while harming her in real ways.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Have an honest conversation with her dad. The script can be specific: "Dad, I appreciate that you signed me up for track and I know you wanted this to be good for me. But it's not working for me. I'm exhausted, my grades are slipping, I'm not enjoying it, and my mental health has gotten worse since I started. I want to find movement I actually enjoy. Could I quit the competitive team and find something that fits me better?" If he resists, the points to make are: research on adolescent movement clearly shows imposed competitive activity often damages the long-term relationship with movement rather than building it; the right metric for whether sports are working is whether the kid is thriving, not whether the sport matches the parent's history; quitting one activity isn't quitting forever; it's redirecting toward something that actually fits. Her own goal: find movement she enjoys (going back to casual running and biking with friends, trying something new, finding what suits her actual interests and body).`,
                  outcome: `This is the research-informed approach. The capability framing (what serves Aaliyah's actual functioning and life) beats the appearance-or-expectations framing. The conversation gives her dad the information he needs to recognize that his good intentions are producing harm. Many parents pushing kids toward sports do so based on their own histories without recognizing the kid's experience matters more than parental hopes. The redirection toward enjoyable movement protects her relationship with movement for life, which serves her dad's actual underlying goal (he probably wants her to be active and well across decades) better than continuing the harmful pattern.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Just quietly stop trying at practice. That way she doesn't have to talk to her dad but also doesn't have to perform.`,
                  outcome: `This addresses the symptom (forced practice) without addressing the underlying issue (dad's pressure and the misalignment between his expectations and her experience). Quietly disengaging produces its own problems: continued attendance at something she hates, possible negative attention from coaches/team, no actual change in the family dynamic, and no skill development for her in handling situations where her experience differs from a parent's expectations. The honest conversation is harder but produces real change; passive resistance usually doesn't.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates social pressure toward imposed exercise. Self-determination theory research supports prioritizing the kid's actual experience over parent expectations regarding movement. Honest conversation with parents about misalignment is hard but produces better outcomes than either passive resistance or compliance through harm. Parents pushing kids toward sports often have good intentions; giving them clear information about what's happening helps them adjust. The deeper skill (being able to advocate for your own experience when it conflicts with others' expectations) applies far beyond movement.`,
            },
          ],
          reflectionPrompt: `All three cases involve different relationships with movement. Which one resonates most with your own experience or what you've seen in others?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What did Schuch et al's 2018 meta-analysis find about exercise and depression?`,
              options: [
                `Nothing useful`,
                `Regular physical activity has effects on depression comparable to medication and therapy for many people; effects operate through multiple mechanisms (neurotransmitters, reduced inflammation, improved sleep, social engagement, agency/capability); large enough that exercise is increasingly recommended as primary intervention for mild-to-moderate depression alongside other treatments`,
                `Just a little help`,
                `Random study`,
              ],
              correctIndex: 1,
              explanation: `Mental health effects of movement are particularly strong and well-researched. The size of effects makes exercise meaningfully comparable to first-line clinical treatments for depression, not just an add-on. This doesn't replace professional treatment for depression but is an important component.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the difference between capability framing and appearance framing for movement?`,
              options: [
                `Same thing`,
                `Appearance framing: movement to change body shape/weight/aesthetic; external goals; adversarial relationship with body; predicts abandonment when goals fail. Capability framing: movement to build/maintain function; internal goals (enjoyment, capability, autonomy); collaborative relationship with body. Self-determination theory (Ryan, Deci) shows internal motivation produces more durable practice and better psychological effects`,
                `Random distinction`,
                `Same approach`,
              ],
              correctIndex: 1,
              explanation: `The framing matters as much as the activity. Diet-culture-framed exercise predicts disordered eating and exercise patterns. Capability-framed movement produces more durable practice and better outcomes across multiple measures.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are warning signs of exercise compulsion?`,
              options: [
                `Random patterns`,
                `Rigid exercise routine (must happen at specific times, can't be missed); significant anxiety/guilt/distress when missing; continues despite injury, illness, or contraindication; life organized around exercise rather than exercise fitting into life; exercise used to manage emotions or punish eating; family/friends/activities sacrificed for exercise; tried to reduce and been unable; particularly serious when accompanied by weight loss and/or cessation of menstrual cycles`,
                `Just dedication`,
                `Random signs`,
              ],
              correctIndex: 1,
              explanation: `The "dedication" framing makes exercise compulsion dangerously easy to miss. The pattern doesn't usually resolve on its own and tends to intensify without intervention. Earlier professional intervention produces dramatically better outcomes. Cessation of menstrual cycles is a medically serious sign that affects bone density and other systems.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What predicts whether movement becomes durable across years?`,
              options: [
                `Just willpower`,
                `Enjoyment (people who enjoy it keep doing it); autonomy (chosen vs imposed); capability framing (internal motivations); social context (community/others); reasonable expectations (modest gains, consistency); fit with actual life. Don't predict as well as fitness culture suggests: intensity, program specificity, equipment, appearance goals`,
                `Random factors`,
                `Discipline`,
              ],
              correctIndex: 1,
              explanation: `Fitness culture emphasizes intensity, programs, equipment, and aesthetics because those things sell better. Research on what actually predicts adherence supports different factors. The best movement for most people is whatever they'll actually do consistently in a form they enjoy.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the difference between movement, exercise, and fitness culture?`,
              options: [
                `Same thing`,
                `Movement: any physical activity bodies do. Exercise: structured movement, usually deliberate. Fitness culture: commercial framework around exercise that often has nothing to do with what's actually good for bodies; uses appearance framing, intensity worship, sells programs and products. Pop content typically conflates all three; recognizing distinctions matters`,
                `Random concepts`,
                `Same approach`,
              ],
              correctIndex: 1,
              explanation: `Someone can have a healthy relationship with movement without engaging much with fitness culture. Someone can do "exercise" in deeply harmful ways via fitness culture. Movement can happen entirely outside the framework of exercise (walking, gardening, dancing, daily life activity).`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does the framing of movement matter as much as the activity?`,
              options: [
                `It doesn't`,
                `Same activity can be healthy or harmful depending on relationship with it; running can be enjoyable capability-building for one person and compulsive self-punishment for another; diet-culture-framed exercise predicts disordered eating; capability-framed movement predicts durable healthy practice; the framing shapes long-term outcomes more than the activity itself does`,
                `Just words`,
                `Random claim`,
              ],
              correctIndex: 1,
              explanation: `Research on movement adherence and outcomes consistently shows framing effects. The same person doing the same activity gets different outcomes depending on internal vs external motivation, appearance vs capability framing, enjoyment vs punishment.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What should parents do if a kid shows multiple warning signs of exercise compulsion?`,
              options: [
                `Wait it out`,
                `Take the warning signs seriously rather than treating them as "dedication"; have direct conversation about what they're observing; pursue professional medical evaluation (pediatrician or doctor familiar with adolescent eating disorders); contact National Alliance for Eating Disorders helpline for resources; consider working with eating disorder treatment team if recommended; particularly urgent when accompanied by medical signs like cessation of menstrual cycles`,
                `Force stop`,
                `Random advice`,
              ],
              correctIndex: 1,
              explanation: `Earlier professional intervention produces dramatically better outcomes for compulsive exercise and co-occurring eating disorders. "Wait and see" often means the pattern intensifies. Forcing complete cessation through parental control isn't appropriate either; professional treatment is what's needed.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the right response when a kid is being pushed into sports they don't enjoy?`,
              options: [
                `Push through`,
                `Honest conversation about the misalignment between parent expectations and kid experience; the right metric for whether sports are working is whether kid is thriving, not whether sport matches parent's history; quitting one activity isn't quitting forever; it's redirecting toward what fits; protect long-term relationship with movement by avoiding harm now`,
                `Quiet rebellion`,
                `Random response`,
              ],
              correctIndex: 1,
              explanation: `Self-determination theory research supports prioritizing kid's actual experience over parent expectations regarding movement. Imposed competitive activity often damages long-term relationship with movement rather than building it. Honest conversation produces better outcomes than passive resistance or harmful compliance.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: More exercise is always better for adolescents.`,
              correctAnswer: false,
              explanation: `False. Exercise compulsion is a real clinical pattern that produces measurable harm including overtraining injury, hormonal disruption (including menstrual cycle cessation), growth problems, and progression to clinical eating disorders. More isn't always better; healthy movement involves appropriate amount, rest, recovery, and flexibility, not maximum quantity.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm going to start working out every day no matter what, even when I'm sick or busy. Discipline is what builds success." Based on this lesson, what should you point out?`,
              options: [
                `"Great plan"`,
                `"That framing actually predicts harm, not success. Exercising every day regardless of being sick, injured, or having competing priorities is one of the warning signs of exercise compulsion, a clinical pattern that produces measurable harm in adolescents including overtraining injury, hormonal disruption, and progression to eating disorders. The 'discipline at all costs' framing is exactly what makes exercise compulsion hard to recognize and easy to escalate. Healthy movement involves enjoyment, flexibility, recovery, fit with life, not rigid daily performance regardless of conditions. Self-determination theory research is clear that internally motivated, flexible movement produces much better outcomes than rigidly imposed daily exercise. If you're already feeling like you HAVE to exercise every day, that's worth paying attention to. If missing a day produces significant anxiety, if you're exercising through illness or injury, if life starts organizing around exercise rather than exercise fitting into life, those are warning signs. Talk to a parent or school counselor about it. National Alliance for Eating Disorders helpline if it's tied to body concerns. The kind of 'discipline' you're describing isn't what produces long-term healthy movement; it's often what produces problems."`,
                `"More is better"`,
                `"Random advice"`,
              ],
              correctIndex: 1,
              explanation: `Real applied movement literacy. Don't endorse the harmful framing; name the specific pattern (compulsion warning signs) and the research that contradicts it. Include warning signs to watch for and the escalation path. The "discipline" framing is exactly the kind of pop content that makes exercise compulsion dangerously easy to develop and hard to recognize.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, how were you framing movement in your own life? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which framing have you been operating from (appearance vs capability)? Where did it come from?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with a capability-based relationship with movement across decades, what does that protect?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one form of movement you've been doing or avoiding. Apply the framework. Is the relationship serving you?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where the framework doesn't fit well? Competitive athletes? People with medical conditions requiring specific exercise? How does the framework adapt?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Notice the framing in one piece of fitness content this week. What's the implicit framing? Who would it serve?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Movement relationship at 12 shapes how you'll relate to your body across decades. Two paths.`,
          familyActivity: {
            title: `The Family Movement Conversation`,
            duration: `45 minutes`,
            description: `Share the capability-vs-appearance distinction and exercise compulsion warning signs. Ask family members about their relationships with movement. Most adults have implicit framings they've never examined; many have damaged relationships from diet-culture exercise framing earlier in life. Consider establishing family practices that support capability framing: no commenting on bodies, no using movement as punishment for eating, finding activities the family enjoys together.`,
          },
          projectOption: {
            title: `Read on movement research, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one accessible book on movement research framed around capability rather than appearance. Options change over time; recent options include works by movement researchers or sport psychologists who write for general audiences. Avoid fitness industry "transformation" books. Apply concepts during reading period. Write 1,500 words on what you learned.`,
            offerToParent: `Parent: opt your kid into this project. Real movement literacy at 12 protects against decades of harmful fitness culture messaging.`,
          },
          identityQuestion: `If you become someone with a capability-based relationship with movement (and the ability to recognize when others around you are developing harmful patterns), what does that protect across a lifetime of bodies, ages, and life circumstances?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who moves for capability and enjoyment, not appearance.`,
            `A person who can spot exercise compulsion warning signs.`,
            `Someone who can have honest conversations about movement framing in their family.`,
          ],
          saveKey: `identity_responses_lw_11_12_5`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifth Life Wellness lesson done. You now know real research on movement (Schuch et al on depression effects, self-determination theory on adherence), the capability-vs-appearance framing distinction, exercise compulsion warning signs, movement adherence factors, and the difference between movement, exercise, and fitness culture. You can spot diet-culture-framed exercise and recognize when "dedication" is actually a clinical pattern. Next time we go into mental health basics: distinguishing ordinary struggles from clinical conditions, and how to know when to seek help. Case Study format. Let's go. — Terra`,
          badge: `movement-literate`,
          badgeName: `Movement Literate`,
          xpEarned: 75,
          competencies: [
            `Knows real research on movement and health (Schuch et al 2018 on depression effects)`,
            `Distinguishes capability framing from appearance framing (self-determination theory)`,
            `Recognizes exercise compulsion warning signs and when to escalate to professional help`,
            `Articulates movement adherence research findings`,
            `Distinguishes movement, exercise, and fitness culture as distinct concepts`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: Mental Health Basics`,
            hook: `Distinguishing ordinary struggles from clinical conditions. When and how to seek help. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L05 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
