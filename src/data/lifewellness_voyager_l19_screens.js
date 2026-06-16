// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L19 — When To Seek Help
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Mental Health Resources, Source Evaluation Applied
// CALIBRATED: Voyager spec v1.1 (May 2026) + extra-care calibration for mental health
//
// SAFETY CALIBRATION:
//   - All crisis resources rendered as text (988, Crisis Text Line HOME to 741741)
//   - Recognition that access varies enormously (insurance, geography, cost)
//   - Names the realities of underserved care without overstating fixes
//   - "Coach" vs "therapist" distinction made clearly without stigmatizing
//   - Evidence-based modalities named (CBT, DBT, ACT) with what they actually do
//   - BetterHelp/Talkspace named with both access and criticism realities
//
// Interaction format: SOURCE EVALUATION (credentialed therapy / serious popular / viral wellness coach)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l19-v1";

const LIFEWELLNESS_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-19`,
      title: `When To Seek Help`,
      duration: 35,
      xpReward: 75,
      badge: `help-seeking-literate`,
      badgeName: `Help-Seeking Literate`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, knowing when and where to get help is one of the most consequential life skills. Most people don't get help they could benefit from because they don't know what's available, don't recognize when they need it, or get caught in unhelpful versions of help. Today we apply the source evaluation skill you built in Lesson 14 specifically to mental health and wellness support: three tiers of resources, from credentialed evidence-based therapy through serious popular resources to viral monetized "wellness coaches." This isn't theoretical for your generation. Mental health support needs are real and growing; access to good help varies enormously; the difference between helpful and harmful support can be substantial. By the end you'll have framework for getting actual help when you or someone you care about needs it.`,
          headline: `When To Seek Help`,
          subtitle: `Three tiers of wellness/mental health resources. Source evaluation applied to getting help.`,
          visual: `/voyager-assets/life-wellness/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Recognizing When Help Is Needed`,
          paragraphs: [
            `Most people seek mental health support later than they would have benefited from it. The pattern is documented across research: people wait until crisis to access help that would have prevented or substantially reduced the crisis if accessed earlier. Recognizing thresholds for help-seeking before crisis matters.`,
            `Specific signs warranting professional support. Persistent functional impairment: difficulty completing school work, maintaining friendships, basic self-care for weeks rather than days. Persistent mood disturbance: sadness, anxiety, anger, or numbness that doesn't shift with normal interventions over weeks. Specific symptoms: difficulty sleeping or eating significantly, withdrawing from previously enjoyed activities, racing thoughts that interrupt functioning. Thoughts of suicide or self-harm: any frequency or intensity warrants immediate professional support, not waiting until the thoughts become urgent. Specific clinical concerns: symptoms of disordered eating, body dysmorphic disorder, obsessive-compulsive patterns, panic attacks, dissociation, trauma reactions. After significant loss or trauma: even healthy grief and trauma recovery often benefit from professional support; particularly after death of close person, ongoing serious family illness, violence or abuse, or traumatic events.`,
            `What doesn't necessarily warrant professional support. Normal range emotions: sadness when something bad happens, anxiety before tests or social situations, frustration with difficult relationships, grief after losses. These are responses to life, not conditions requiring fixing. Temporary difficulty during transitions: starting a new school, family changes, friendship shifts produce temporary disruption that usually resolves. Disagreement with parents or peers about your behavior: their concern isn't necessarily evidence you need professional support, though it's worth taking seriously.`,
            `Important distinction. There's a difference between "I'm having a hard time" (often workable through self-care, friends, family, time) and "I'm struggling in ways that aren't moving" (warrants professional support). The signal isn't intensity in any moment but persistence and impact over time. Severe emotion that resolves within days isn't necessarily clinical; mild ongoing struggle that persists for weeks may be.`,
            `Adolescent-specific considerations. Adolescents often don't recognize when they need help because they don't have reference for how they "should" feel. Adolescents sometimes hide struggling because they're worried about being seen as weak or causing problems for family. Adolescents sometimes can't access help on their own because they need parent involvement (insurance, transportation, consent). Adolescents from cultural backgrounds where mental health support is stigmatized face additional barriers. These barriers don't change whether help is appropriate; they just make accessing it harder.`,
            `One important framing. Seeking professional support isn't a sign of weakness or failure. The cultural framing that "you should be able to handle it on your own" reflects specific cultural assumptions, not what research shows about how humans actually navigate difficulty. Most people who get appropriate professional support for clinical concerns benefit substantially; most people who don't get support for clinical concerns suffer longer and often more than they would have.`,
          ],
          image: `/voyager-assets/life-wellness/l19-s1-recognizing.webp`,
          imageCaption: `Recognizing thresholds for help-seeking. Most people wait too long. Specific signs: persistent functional impairment, persistent mood disturbance, specific symptoms, suicidal/self-harm thoughts, post-trauma. Cultural barriers don't change appropriateness.`,
          vocab: [
            {
              word: `is warranted`,
              definition: `Most people seek mental health support later than would benefit them. Signs warranting professional support: persistent functional impairment (school, friendships, self-care for weeks); persistent mood disturbance over weeks; specific symptoms (sleep/eating changes, withdrawal, racing thoughts); thoughts of suicide or self-harm at any frequency; specific clinical concerns (disordered eating, body dysmorphic disorder, OCD, panic, dissociation, trauma); after significant loss or trauma. Distinction: "having a hard time" vs "struggling in ways that aren't moving"; signal is persistence and impact over time, not moment-intensity. Adolescent-specific barriers (recognition, hiding, access, cultural stigma) don't change appropriateness.`,
              audioPrompt: `Recognizing when help is warranted is one of the most consequential life skills, {name}. Most people seek mental health support later than they would have benefited from it. The pattern is documented across research: people wait until crisis to access help that would have prevented or substantially reduced the crisis if accessed earlier. Specific signs warranting professional support. Persistent functional impairment: difficulty completing school work, maintaining friendships, basic self-care for weeks rather than days. Persistent mood disturbance: sadness, anxiety, anger, or numbness that doesn't shift with normal interventions over weeks. Specific symptoms: difficulty sleeping or eating significantly, withdrawing from previously enjoyed activities, racing thoughts that interrupt functioning. Thoughts of suicide or self-harm: any frequency or intensity warrants immediate professional support, not waiting until the thoughts become urgent. Specific clinical concerns: symptoms of disordered eating, body dysmorphic disorder, obsessive-compulsive patterns, panic attacks, dissociation, trauma reactions. After significant loss or trauma: even healthy grief and trauma recovery often benefit from professional support.`,
            },
            {
              word: `functional impairment`,
              definition: `One of the key signals distinguishing clinical conditions that warrant professional support from ordinary emotional difficulty: difficulty completing school work, maintaining friendships, or managing basic self-care that persists for weeks rather than days. The lesson distinguishes "having a hard time" (often workable through self-care, time, and support) from "struggling in ways that aren't moving" (where the signal is persistence and impact on functioning over time). Functional impairment at the clinical level is qualitatively different from temporary emotional distress.`,
              audioPrompt: `Functional impairment is one of the key signals distinguishing conditions that warrant professional support from ordinary emotional difficulty, {name}. The term refers to difficulty completing the basic activities of daily life: school work, maintaining friendships, basic self-care. When these become substantially harder than usual and the difficulty persists over weeks rather than days, that is functional impairment at a level that warrants professional support. The lesson's important distinction is between "having a hard time" and "struggling in ways that aren't moving." Having a hard time is a normal feature of human life — sadness when something bad happens, anxiety before important events, difficulty in relationships, frustration with circumstances. These responses usually shift with time, self-care, and support from people you trust. Struggling in ways that aren't moving is different: the difficulty persists across weeks without improving despite normal interventions, it affects your ability to function in areas that matter to your life, and it may include specific symptoms that suggest a clinical condition. The signal isn't how intense the emotion feels in any moment but how long it persists and how much it affects your functioning over time.`,
            },
            {
              word: `suicidal ideation threshold`,
              definition: `The lesson's position that thoughts of suicide or self-harm at ANY frequency warrant immediate professional support, not waiting until the thoughts become more urgent or frequent. There is no safe frequency or intensity threshold for suicidal ideation that warrants waiting. Resources: 988 Suicide and Crisis Lifeline (call or text 988), Crisis Text Line (text HOME to 741741), school counselor, or emergency services are appropriate responses to any level of suicidal ideation.`,
              audioPrompt: `The suicidal ideation threshold in this lesson is clear: thoughts of suicide or self-harm at any frequency warrant immediate professional support, {name}. Not when they become more frequent. Not when they feel more serious. Any frequency, any intensity. This is one of the most important distinctions the lesson makes, and it is grounded in what research shows about how suicidal ideation progresses and when intervention is most effective. The "waiting until it's serious" pattern reflects a common misunderstanding: suicidal ideation that feels manageable can escalate; earlier intervention produces substantially better outcomes than waiting for crisis. If you are having thoughts of suicide or self-harm, please reach out to someone now. The 988 Suicide and Crisis Lifeline at call or text 988 is available 24 hours a day, 7 days a week, and is free and anonymous. The Crisis Text Line at text HOME to 741741 is available 24/7 for text-based support. A school counselor, trusted adult, or emergency services are all appropriate options. There is no frequency threshold to clear before help is appropriate — any frequency warrants reaching out.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Tier A: Credentialed Evidence-Based Care`,
          paragraphs: [
            `The highest tier of mental health and wellness support is credentialed care using evidence-based modalities. This is what most people don't know exists or how to access; understanding what it actually involves is the first step.`,
            `Specific credentials worth knowing. Licensed psychologist (PhD or PsyD): doctoral-level training in psychology, can provide therapy, assessment, and diagnosis. Cannot prescribe medication in most states. Psychiatrist (MD or DO with psychiatry residency): medical doctor with psychiatric training; can prescribe medication; may or may not provide ongoing therapy. Licensed Clinical Social Worker (LCSW), Licensed Mental Health Counselor (LMHC), Licensed Marriage and Family Therapist (LMFT): master's-level licensed therapists; provide therapy. Each license requires graduate-level training, supervised practice hours, and passing exams; each is regulated by state licensing boards that protect patients.`,
            `Specific evidence-based therapy modalities. Cognitive Behavioral Therapy (CBT): substantial research support for depression, anxiety, OCD, many other conditions; structured approach focused on thoughts and behaviors; typically 8-20 sessions. Dialectical Behavior Therapy (DBT): originally developed by Marsha Linehan for borderline personality disorder; now used for many conditions involving emotional regulation difficulties; combines individual therapy with skills groups; substantial research support. Acceptance and Commitment Therapy (ACT, covered briefly in Lesson 9): values-based approach focused on psychological flexibility; growing research support. EMDR (Eye Movement Desensitization and Reprocessing): specific protocol for trauma; substantial research support for PTSD specifically. Other evidence-based approaches: Cognitive Processing Therapy (trauma), Family-Based Treatment (eating disorders), Interpersonal Therapy (depression). These are different from generic "talking" therapy; they have specific protocols and research support.`,
            `What "evidence-based" means specifically. The modality has been studied in randomized controlled trials and shown to produce better outcomes than no treatment, waitlist control, or in some cases comparison treatments. The provider has been trained in the specific protocol, not just generic therapy. Not all licensed therapists provide evidence-based therapy; some provide approaches with less research support. When seeking help, asking specifically about the therapist's training and which evidence-based modalities they practice matters.`,
            `How to access. Insurance often covers some mental health care, though access varies enormously by plan, location, and specific providers in-network. Pediatrician or primary care doctor can provide referrals and sometimes initial assessment. School counselor can connect to community resources (often the most accessible entry for adolescents). Community mental health centers often provide sliding-scale fees. University training clinics provide lower-cost therapy from trainees supervised by licensed professionals. For specific conditions, specialized clinics (eating disorder programs, trauma programs) exist in most regions. The mental health workforce is genuinely understaffed in many regions; access challenges are real.`,
            `Important caveats about access. Mental health care is genuinely underserved in many regions; waiting lists are common. Insurance often covers less than physical health care. Cost without insurance is substantial. Geographic access varies enormously (urban areas have more options than rural). Cultural fit matters; finding a provider who understands your background can be hard, particularly for marginalized groups. These access challenges are structural, not individual failures; recognizing them as structural matters for how to respond.`,
          ],
          image: `/voyager-assets/life-wellness/l19-s2-tier-a.webp`,
          imageCaption: `Tier A: credentialed evidence-based care. Licensed psychologists, psychiatrists, social workers, counselors. Evidence-based modalities: CBT, DBT, ACT, EMDR. Access challenges real and structural.`,
          vocab: [
            {
              word: `health care`,
              definition: `Highest tier: licensed providers using evidence-based modalities. Credentials: licensed psychologist (PhD/PsyD); psychiatrist (MD with psychiatric residency, can prescribe medication); LCSW, LMHC, LMFT (master's-level licensed therapists). Each license: graduate training, supervised practice hours, state licensing exams, ongoing regulation. Evidence-based modalities: Cognitive Behavioral Therapy (CBT) for depression/anxiety/OCD; Dialectical Behavior Therapy (DBT, Linehan) for emotional regulation; Acceptance and Commitment Therapy (ACT); EMDR for trauma; specialized protocols for specific conditions. "Evidence-based" means studied in RCTs and shown to produce better outcomes. Access: insurance (varies), pediatrician/school counselor referrals, community centers (sliding scale), university training clinics. Access challenges genuinely structural.`,
              audioPrompt: `Tier A is the highest tier of mental health and wellness support: credentialed care using evidence-based modalities, {name}. Specific credentials worth knowing: Licensed psychologist with a PhD or PsyD has doctoral-level training in psychology and can provide therapy, assessment, and diagnosis. Psychiatrist with an MD plus psychiatric residency is a medical doctor with psychiatric training who can prescribe medication. Licensed Clinical Social Worker, Licensed Mental Health Counselor, Licensed Marriage and Family Therapist are master's-level licensed therapists who provide therapy. Each license requires graduate-level training, supervised practice hours, and passing exams. Specific evidence-based therapy modalities: Cognitive Behavioral Therapy or CBT has substantial research support for depression, anxiety, OCD, and many other conditions. Dialectical Behavior Therapy or DBT, originally developed by Marsha Linehan, is now used for many conditions involving emotional regulation difficulties. Acceptance and Commitment Therapy or ACT is a values-based approach. EMDR is a specific protocol for trauma with substantial research support for PTSD specifically. How to access: insurance often covers some mental health care; pediatrician or primary care doctor can provide referrals; school counselor can connect to community resources, often the most accessible entry for adolescents.`,
            },
            {
              word: `dialectical behavior therapy`,
              definition: `DBT: an evidence-based therapy originally developed by Marsha Linehan for borderline personality disorder, now used for many conditions involving emotional regulation difficulties. DBT combines individual therapy with skills groups and teaches specific skills in four domains: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. DBT has substantial research support and is particularly useful for people who experience intense emotions that feel difficult to manage.`,
              audioPrompt: `Dialectical Behavior Therapy, or DBT, is an evidence-based therapy originally developed by Marsha Linehan for borderline personality disorder, now used for many conditions involving emotional regulation difficulties, {name}. The lesson identifies it as one of the major evidence-based modalities in Tier A care. DBT combines individual therapy sessions with skills groups and teaches specific skills in four domains. Mindfulness skills: developing the capacity to observe your own thoughts and emotions without being swept away by them. Distress tolerance skills: coping with intense distress without making it worse. Emotion regulation skills: understanding emotions, reducing vulnerability to intense emotions, and changing unwanted emotional states. Interpersonal effectiveness skills: maintaining relationships and self-respect across difficult interactions. DBT was originally developed for people who struggled with extremely intense emotions and self-harm; it has since been adapted for many conditions involving emotional dysregulation, including eating disorders, depression, anxiety, and various other presentations. The research support for DBT is substantial across many conditions. It connects to the lesson 9 framework on emotion regulation and the ACT elements covered in that lesson and elsewhere in the band.`,
            },
            {
              word: `EMDR`,
              definition: `Eye Movement Desensitization and Reprocessing: an evidence-based therapy with substantial research support specifically for PTSD and trauma. EMDR uses guided eye movements or other bilateral stimulation while the person recalls traumatic memories, which appears to help the brain process and integrate the memories differently. It has become one of the most widely studied and recommended treatments for post-traumatic stress, recommended by multiple clinical guideline bodies including the WHO.`,
              audioPrompt: `EMDR stands for Eye Movement Desensitization and Reprocessing, and it is an evidence-based therapy with substantial research support specifically for PTSD and trauma, {name}. The lesson identifies it as one of the major evidence-based modalities in Tier A care, alongside CBT, DBT, and ACT. EMDR uses guided eye movements or other forms of bilateral stimulation while the person recalls traumatic memories, which appears to help the brain process and integrate those memories differently — reducing their emotional intensity and their power to produce intrusive symptoms. The mechanism is not fully understood, but the research support is substantial: EMDR has been studied in multiple randomized controlled trials and is recommended by multiple clinical guideline bodies including the World Health Organization as a first-line treatment for PTSD. The therapy is particularly relevant to the lesson's coverage of traumatic loss from Lesson 16: loss that involves trauma (suicide, accidents, violence, witnessing death) often produces grief with PTSD-like features, and EMDR is one of the modalities with specific research support for these presentations. A provider trained in EMDR is distinct from a general therapist; when trauma with PTSD features is present, specifically seeking a provider with EMDR training matters.`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tier B: Serious Popular Resources`,
          paragraphs: [
            `Tier B includes resources that aren't licensed therapy but are research-grounded, serious in approach, and helpful for many people: school counselors, established self-help books by credentialed authors, evidence-based apps, peer support groups, primary care doctors, helplines. These resources are how most people actually access mental health support, particularly given access barriers to Tier A.`,
            `School counselors specifically. School counselors are often the most accessible mental health resource for adolescents. They can provide initial assessment, brief counseling, referrals to community resources, family communication support, and crisis intervention. They're free, immediate, and don't require parent involvement for initial contact in most schools. Quality varies (some school counselors are excellent, some are limited by caseload) but using them as entry point usually works well. For many adolescents, the school counselor is the single most useful resource available.`,
            `Established self-help books by credentialed authors. Some self-help books synthesize evidence-based therapy approaches and are useful adjuncts or initial resources. Examples with substantial credentials and research grounding: David Burns "Feeling Good" (CBT for depression, classic and accessible); Marsha Linehan's DBT skills workbook (DBT skills for general application); Kristin Neff "Self-Compassion" (research-grounded self-compassion practice); Russ Harris "The Happiness Trap" (ACT for general audiences); Bessel van der Kolk "The Body Keeps the Score" (trauma synthesis, very influential though some specific claims contested); Lisa Damour's books on adolescent mental health ("Untangled," "Under Pressure"). Quality marker: the author has actual credentials (PhD, MD, licensed therapist) and the book synthesizes research rather than presenting personal philosophy as universal truth.`,
            `Evidence-based apps. Some mental health apps have actual research support. Examples: Woebot (CBT-based chatbot, peer-reviewed research); CBT-i Coach (CBT for insomnia, VA-developed); Sanvello (acceptance-and-mindfulness based, some research support); Calm and Headspace (meditation, research support for general stress reduction). Many apps have minimal research support; the "wellness app" market is largely unregulated. Apps aren't replacements for therapy when therapy is warranted, but can supplement or serve as initial resource for milder concerns.`,
            `Peer support and helplines. 988 Suicide and Crisis Lifeline (call or text 988 in the US): 24/7 crisis support, free, anonymous; staffed by trained counselors; not just for suicide but for any crisis. Crisis Text Line (text HOME to 741741): text-based crisis support, 24/7. The Trevor Project (1-866-488-7386 or text START to 678-678): LGBTQ+ youth-specific crisis and support. National Alliance for Eating Disorders helpline (1-866-662-1235): eating disorder support. Each is staffed by trained people and produces real benefit for many users. NAMI (National Alliance on Mental Illness) provides peer support groups, family support, and educational resources.`,
            `Online therapy platforms. BetterHelp and Talkspace are widely advertised platforms providing online therapy. Quality varies significantly. Advantages: lower cost than many in-person options, accessibility from home, available to many people who can't access local providers. Concerns: critiques from professional bodies about therapist screening, supervision, and quality control; specific scandals about marketing practices and data privacy; some therapists on these platforms provide good care, others less so. If using these platforms, verifying therapist credentials and evidence-based training matters; the platform itself doesn't guarantee quality. Not appropriate for crisis situations or severe conditions; suitable for some milder concerns when in-person care isn't accessible.`,
            `What Tier B provides. Accessibility (often the only realistic option given Tier A access barriers). Real benefit for many conditions, particularly milder ones. Entry point that can lead to Tier A when needed. The cost is that Tier B resources are mixed in quality and require some discernment about which specific resources are research-grounded vs not.`,
          ],
          image: `/voyager-assets/life-wellness/l19-s3-tier-b.webp`,
          imageCaption: `Tier B: school counselors, established self-help books (Burns, Linehan, Neff, Harris), evidence-based apps (Woebot, CBT-i Coach), peer support and helplines (988, Crisis Text Line HOME to 741741, Trevor Project), online platforms (BetterHelp/Talkspace with caveats).`,
          vocab: [
            {
              word: `health resources`,
              definition: `Research-grounded resources that aren't licensed therapy. School counselors (often most accessible for adolescents). Established self-help books by credentialed authors: Burns "Feeling Good" (CBT); Linehan DBT skills workbook; Neff "Self-Compassion"; Harris "The Happiness Trap" (ACT); Lisa Damour adolescent mental health. Evidence-based apps: Woebot (CBT), CBT-i Coach (insomnia), Calm/Headspace (meditation). Helplines: 988 Suicide and Crisis Lifeline (call/text 988), Crisis Text Line (text HOME to 741741), Trevor Project (1-866-488-7386 or text START to 678-678), National Alliance for Eating Disorders (1-866-662-1235), NAMI peer support. Online platforms: BetterHelp/Talkspace with caveats (verify therapist credentials; not for crisis or severe conditions).`,
              audioPrompt: `Tier B sources are resources that aren't licensed therapy but are research-grounded and serious in approach, {name}. School counselors specifically are often the most accessible mental health resource for adolescents. They can provide initial assessment, brief counseling, referrals to community resources, and crisis intervention. They're free, immediate, and don't require parent involvement for initial contact in most schools. Established self-help books by credentialed authors with substantial research grounding: David Burns "Feeling Good" for CBT and depression. Marsha Linehan's DBT skills workbook. Kristin Neff's "Self-Compassion." Russ Harris "The Happiness Trap" for ACT. Lisa Damour's books on adolescent mental health. Evidence-based apps include Woebot, which is a CBT-based chatbot with peer-reviewed research support. Peer support and helplines: the 988 Suicide and Crisis Lifeline at call or text 988 in the US is available 24 hours, 7 days. Crisis Text Line at text HOME to 741741 is available 24/7. The Trevor Project provides LGBTQ+ youth-specific crisis and support. National Alliance for Eating Disorders helpline at 1-866-662-1235.`,
            },
            {
              word: `cognitive behavioral therapy`,
              definition: `CBT: an evidence-based therapy with the strongest research support across the widest range of conditions, including depression, anxiety disorders, OCD, PTSD, eating disorders, and many others. CBT is structured and focused on the relationship between thoughts, feelings, and behaviors, typically lasting 8-20 sessions. The CBT principle: identifying and changing unhelpful thought patterns and behaviors produces measurable improvements in emotional wellbeing. Both licensed therapists and self-help books like David Burns's "Feeling Good" can provide CBT frameworks.`,
              audioPrompt: `Cognitive Behavioral Therapy, or CBT, is the evidence-based therapy modality with the strongest research support across the widest range of conditions, {name}. The lesson identifies it as one of the major evidence-based modalities in Tier A care. CBT is structured and time-limited, typically 8 to 20 sessions, focused on the relationship between thoughts, feelings, and behaviors. The core CBT principle: unhelpful thought patterns (like catastrophizing, all-or-nothing thinking, and negative self-evaluation) produce and maintain emotional difficulties; identifying and changing those patterns produces measurable improvements in mood and functioning. CBT has substantial randomized controlled trial support for depression, anxiety disorders, OCD, PTSD, eating disorders, and many other conditions. It is often what is meant by evidence-based treatment in mental health contexts. The lesson also notes that self-help books synthesizing CBT approaches — particularly David Burns's "Feeling Good" — are Tier B resources with genuine research grounding that can serve as accessible entry points for people who can't immediately access Tier A care. The CBT framework also connects to the lesson 9 coverage of cognitive appraisal and the lesson 8 coverage of attention patterns; the frameworks are related because all involve the relationship between thinking patterns and wellbeing outcomes.`,
            },
            {
              word: `Trevor Project`,
              definition: `A crisis intervention and suicide prevention organization specifically for LGBTQ+ youth, available 24/7 at 1-866-488-7386 or by text START to 678-678. The Trevor Project addresses the documented higher rates of suicidal ideation, self-harm, and mental health difficulty among LGBTQ+ youth. Its crisis line is staffed by trained counselors specifically knowledgeable about LGBTQ+ youth experiences. Mentioned alongside the 988 Suicide and Crisis Lifeline and the Crisis Text Line as essential crisis resources.`,
              audioPrompt: `The Trevor Project is a crisis intervention and suicide prevention organization specifically for LGBTQ+ youth, available 24 hours a day, 7 days a week at 1-866-488-7386 or by text START to 678-678, {name}. The organization exists because LGBTQ+ youth experience substantially higher rates of suicidal ideation, self-harm, and mental health difficulty than their non-LGBTQ+ peers — and because general crisis resources sometimes don't fully address the specific experiences and concerns of LGBTQ+ young people. The Trevor Project's crisis line is staffed by counselors who are specifically knowledgeable about LGBTQ+ youth experiences, making it a particularly appropriate resource for LGBTQ+ youth or for anyone supporting an LGBTQ+ young person in crisis. The lesson names it alongside the 988 Suicide and Crisis Lifeline and the Crisis Text Line as one of the essential crisis resources that everyone should know. If you or a friend who is LGBTQ+ is experiencing a crisis, the Trevor Project is the right resource. If you're unsure which resource to use, any of the three crisis lines — 988, Crisis Text Line, or the Trevor Project — are appropriate starting points.`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Tier C: Viral Wellness Coaches And Influencer Mental Health Content`,
          paragraphs: [
            `Tier C includes viral wellness coaches, mental health influencers without credentials, supplement-pushing "wellness" brands, monetized mental health content, and "alternative" mental health products. This category has grown explosively in the past decade through social media monetization. Recognizing it as Tier C matters because it's where most adolescents encounter mental health content.`,
            `Common Tier C patterns. "Wellness coaches" or "life coaches" without mental health credentials offering services that look like therapy but aren't licensed. Mental health influencers diagnosing conditions through TikTok or Instagram (ADHD, autism, OCD, BPD, trauma, etc.) and selling courses, programs, or products. Supplement and "wellness" brands marketing products as solutions to mental health problems (often with substantially less research support than they claim). "Alternative" mental health approaches (energy work, crystals, certain "trauma release" practices) marketed as alternatives to evidence-based treatment. Programs that mix some legitimate ideas with extensive monetization and inflated claims.`,
            `Why Tier C is problematic specifically for mental health. Unlike viral content on tech or money topics, mental health Tier C content can directly harm vulnerable users. Misdiagnosis via TikTok can lead to incorrect self-treatment. Unlicensed "coaches" without proper training can mishandle disclosures of suicidality, trauma, or crisis. Supplement and alternative product marketing can delay people from accessing real treatment when they need it. The combination of vulnerability (people seeking help when struggling) and monetization (financial incentive to claim to solve the problem) is particularly bad.`,
            `Specific patterns to recognize. The creator has no licensed mental health credentials but provides what looks like clinical content (diagnoses, treatment recommendations). The content sells something: a course, a program, supplements, a paid app, coaching services. Claims of cures, definitive answers, or "the real truth about [condition]"; research rarely supports such confident claims. "Anti-therapy" or "anti-medication" content that frames evidence-based treatment as the problem and the creator's approach as the solution. Symptoms presented as quizzes ("5 signs you have ADHD") that produce flattering or interesting diagnoses to drive engagement.`,
            `Important caveat. Not all unlicensed content is harmful, and not all licensed content is helpful. Some good resources come from non-clinical sources (people with lived experience can offer genuine insight); some licensed practitioners practice poorly. The tier framework is about reliability and how much weight to give specific claims, not about absolute rules. Tier C content sometimes contains useful information; the problem is that the framing, monetization, and confidence often exceed what the underlying information actually supports.`,
            `Three questions for Tier C mental health content. First: what credentials does the creator have? Specifically, are they licensed? What evidence-based training do they have? Second: what does the content sell? If the framing supports a course, supplement, program, or coaching that the creator monetizes, the financial incentive shapes the framing. Third: does the content acknowledge limits, uncertainty, and the appropriateness of professional help? Confident definitive claims about complex conditions usually reflect missing the actual complexity.`,
            `For your generation specifically. Mental health Tier C content is everywhere. TikTok mental health content has exploded; Instagram "wellness coaches" target adolescents and young adults; YouTube has extensive monetized mental health content. Recognition of patterns matters because this content is shaping how your generation thinks about mental health, and the framings are often substantially different from what the research actually supports. Building tier-evaluation skill specifically for mental health protects you from getting help that doesn't help (or actively harms).`,
          ],
          image: `/voyager-assets/life-wellness/l19-s4-tier-c.webp`,
          imageCaption: `Tier C: viral wellness coaches without credentials, TikTok mental health diagnoses, supplement brands, "alternative" approaches, anti-therapy content. Particularly problematic because vulnerable users + monetization. Recognition patterns matter for adolescents.`,
          vocab: [
            {
              word: `health content`,
              definition: `Viral wellness coaches without mental health credentials, mental health influencers diagnosing via TikTok/Instagram, supplement and "wellness" brands marketing products as mental health solutions, "alternative" approaches marketed as replacements for evidence-based treatment. Particularly problematic for mental health: vulnerable users + monetization. Recognition patterns: unlicensed creator providing clinical content; content sells something; cure/definitive answer claims; anti-therapy or anti-medication framing; "signs you have X" quizzes that drive engagement. Three questions: what credentials? what does the content sell? does it acknowledge limits, uncertainty, appropriateness of professional help?`,
              audioPrompt: `Tier C sources for mental health and wellness include viral wellness coaches, mental health influencers without credentials, supplement-pushing wellness brands, monetized mental health content, and alternative mental health products, {name}. This category has grown explosively in the past decade through social media monetization. Common Tier C patterns: wellness coaches or life coaches without mental health credentials offering services that look like therapy but aren't licensed. Mental health influencers diagnosing conditions through TikTok or Instagram, including ADHD, autism, OCD, BPD, trauma, and selling courses, programs, or products. Supplement and wellness brands marketing products as solutions to mental health problems. Why Tier C is problematic specifically for mental health: unlike viral content on tech or money topics, mental health Tier C content can directly harm vulnerable users. Misdiagnosis via TikTok can lead to incorrect self-treatment. Unlicensed coaches without proper training can mishandle disclosures of suicidality, trauma, or crisis. Supplement and alternative product marketing can delay people from accessing real treatment when they need it. Three questions for Tier C mental health content: what credentials does the creator have? What does the content sell? Does the content acknowledge limits, uncertainty, and the appropriateness of professional help?`,
            },
            {
              word: `life coach certification`,
              definition: `An unregulated credential requiring no graduate training, no supervised clinical hours, and no licensing exam. "Certified life coach" or "certified wellness coach" credentials are commonly offered through online programs, sometimes completed in days or weeks. They do not qualify the holder to diagnose conditions, provide clinical treatment, or practice therapy. The lesson identifies these credentials as a key Tier C recognition pattern: creators presenting clinical-looking content based on non-clinical credentials.`,
              audioPrompt: `Life coach certification is an unregulated credential that requires no graduate training, no supervised clinical hours, and no licensing exam, {name}. Certification as a "life coach," "wellness coach," or "health coach" can typically be obtained through online programs completed in days or weeks. There is no government regulation of these credentials; anyone can obtain them and use them to market services. This is in stark contrast to licensed mental health credentials — licensed psychologist, licensed social worker, licensed counselor, licensed marriage and family therapist — each of which requires graduate-level training, hundreds or thousands of supervised practice hours, a licensing examination, and ongoing state regulation. The lesson identifies "life coach" certification as one of the key Tier C recognition patterns: creators who present clinical-looking content — diagnosing conditions, recommending treatments, offering what looks like therapy — based on credentials that don't qualify them to do any of these things. The WellnessGuruMia example in the source evaluation illustrates this: a "certified life coach" and "trauma-informed yoga instructor" presenting ADHD and CPTSD diagnostic content and selling a $497 healing course is exactly the pattern the lesson is teaching you to recognize.`,
            },
            {
              word: `anti-therapy framing`,
              definition: `A Tier C pattern in which creators position evidence-based professional care as the problem and their product or approach as the solution. Anti-therapy content may claim that "the therapy industrial complex" doesn't work, that medication is harmful, or that the creator's course or program succeeds where professional care fails. This framing is particularly harmful because it redirects vulnerable people away from evidence-based treatment. It is a recognizable pattern worth flagging in any mental health content.`,
              audioPrompt: `Anti-therapy framing is a Tier C pattern in which creators position evidence-based professional care as the problem and their own product or approach as the solution, {name}. The WellnessGuruMia example in the source evaluation illustrates this: she criticizes "the therapy industrial complex," claims her methods work where therapy fails, and tells stories of clients who "healed in 6 weeks what therapy couldn't fix in years." This framing is particularly harmful for several reasons. First, evidence-based therapy (CBT, DBT, ACT, EMDR and other modalities) has substantial research support that the creator's methods typically don't. Second, redirecting people away from professional care delays them from accessing treatment that works. Third, the framing is directly tied to monetization: if you believe therapy doesn't work and the creator's course does, you're more likely to buy the course. Fourth, the creator's claims about therapy are often based on limited or misrepresented understanding of what evidence-based care actually involves. The three questions for Tier C content from this lesson and from Lesson 14 apply directly: what credentials does the creator have? What are they selling? Do they acknowledge limits and recommend professional help when appropriate? Anti-therapy framing almost always fails the third question.`,
            },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Source Evaluation`,
          paragraphs: [
            `The source evaluation that follows tests whether you can identify which tier different mental health and wellness support sources belong to. This isn't theoretical for your generation; the difference between getting real help and getting unhelpful or harmful "help" can be substantial.`,
            `One framing as you evaluate. The three tiers represent different reliability levels and different appropriate uses. Tier A: credentialed evidence-based care; appropriate for diagnosed conditions, significant struggles, crisis, ongoing care. Tier B: serious popular resources; appropriate as entry points, for milder concerns, as supplements to Tier A, when Tier A isn't accessible. Tier C: viral content; rarely the right primary resource for mental health concerns specifically; sometimes contains useful information but should not be primary basis for mental health decisions.`,
            `Another framing. For your generation, recognizing patterns matters more than memorizing specific resources. Patterns of credentials, monetization, evidence-acknowledgment, appropriate humility about complex conditions. These patterns generalize beyond mental health to all areas where vulnerable people seek help in monetized environments.`,
            `One practical framing. If you or someone you care about needs help, the practical sequence usually works: school counselor first (accessible, can connect to resources); pediatrician or primary care doctor for assessment and referral; helplines (988, Crisis Text Line HOME to 741741, Trevor Project) for crisis or initial support; established self-help books or evidence-based apps for milder concerns or supplements; eventually credentialed therapist if appropriate. The sequence works because it starts with accessible resources and builds toward more specialized as needed.`,
            `One last framing. You're 12. Mental health support across decades will involve navigating these tiers many times: for yourself, for friends, for family. Building source evaluation skill specifically for mental health now produces protection across decades of the inevitable times when you or someone you care about needs help. Most adults around you don't have this framework explicitly; the cost shows up in unhelpful "help" they've received or in barriers to getting real help.`,
          ],
          image: `/voyager-assets/life-wellness/l19-s5-before.webp`,
          imageCaption: `Three tiers for different uses. Practical sequence: school counselor → pediatrician → helplines → established resources → credentialed therapist as needed. Patterns generalize beyond mental health.`,
          vocab: [
            {
              word: `support tiers`,
              definition: `Three tiers represent different reliability levels and appropriate uses. Tier A (credentialed evidence-based care): appropriate for diagnosed conditions, significant struggles, crisis, ongoing care. Tier B (serious popular resources): appropriate as entry points, milder concerns, supplements to Tier A, when Tier A isn't accessible. Tier C (viral content): rarely right primary resource for mental health; sometimes useful information but not basis for decisions. Practical sequence for getting help: school counselor → pediatrician → helplines (988 Suicide and Crisis Lifeline call/text 988, Crisis Text Line text HOME to 741741, Trevor Project 1-866-488-7386 or text START to 678-678) → established resources → credentialed therapist as needed.`,
              audioPrompt: `Navigating mental health support tiers is the practical skill you're building, {name}. The three tiers represent different reliability levels and different appropriate uses. Tier A (credentialed evidence-based care) is appropriate for diagnosed conditions, significant struggles, crisis, and ongoing care. Tier B (serious popular resources) is appropriate as entry points, for milder concerns, as supplements to Tier A, and when Tier A isn't accessible. Tier C (viral content) is rarely the right primary resource for mental health concerns specifically; it sometimes contains useful information but should not be the primary basis for mental health decisions. If you or someone you care about needs help, the practical sequence usually works: school counselor first because it's accessible and can connect to resources; pediatrician or primary care doctor for assessment and referral; helplines for crisis or initial support including 988 Suicide and Crisis Lifeline at call or text 988, Crisis Text Line at text HOME to 741741, and Trevor Project at 1-866-488-7386 for LGBTQ+ youth; established self-help books or evidence-based apps for milder concerns; eventually credentialed therapist if appropriate.`,
            },
            {
              word: `mental health access barriers`,
              definition: `Structural challenges that prevent people from accessing Tier A credentialed care: cost without insurance (often $100-300 per session), insurance networks excluding many qualified providers, waitlists (the mental health workforce is genuinely understaffed in many regions), geographic access disparities (urban areas have more options than rural), and cultural fit challenges (finding a provider who understands your background). The lesson identifies these as structural, not individual failures. They don't change whether professional support is appropriate; they make accessing it harder.`,
              audioPrompt: `Mental health access barriers are structural challenges that prevent people from accessing Tier A credentialed care, {name}. The lesson names them explicitly as structural rather than individual failures. Cost without insurance: individual therapy sessions with a licensed psychologist often cost between $100 and $300, amounts that are inaccessible to many families. Insurance: mental health care is often covered less generously than physical health care, many qualified providers are not in-network, and deductibles can make even covered care expensive. Waitlists: the mental health workforce is genuinely understaffed in many regions; waiting months for an initial appointment is common in areas with limited providers. Geographic access: urban areas have substantially more mental health providers than rural areas, meaning people in some regions have very few accessible options. Cultural fit: finding a provider who understands your specific cultural background, identity, and experiences can be difficult, particularly for people from marginalized communities. These barriers are real and the lesson doesn't minimize them. What the lesson does is provide a practical sequence that starts with accessible Tier B resources (school counselor first) precisely because Tier A access barriers are real. The access challenges are structural — they result from policy choices about mental health parity, insurance regulation, and workforce training — not from anything about the individuals who can't access care.`,
            },
            {
              word: `mental health stigma`,
              definition: `Cultural frameworks and social norms that attach shame, weakness, or social risk to seeking mental health support. The lesson notes that adolescents from cultural backgrounds where mental health support is stigmatized face additional barriers to seeking help, beyond the structural access challenges. Stigma-based framings like "you should be able to handle it on your own" reflect specific cultural assumptions, not what research shows about how humans actually navigate difficulty. The lesson names stigma as a barrier alongside structural access challenges.`,
              audioPrompt: `Mental health stigma describes cultural frameworks and social norms that attach shame, weakness, or social risk to seeking mental health support, {name}. The lesson identifies it as one of the barriers that some adolescents face beyond the structural access challenges. For adolescents from cultural backgrounds where mental health support is stigmatized — where the expectation is that you handle difficulties privately, that seeking outside help reflects family failure, that mental health concerns are weakness or character failure — the barriers to getting help are compounded. The lesson addresses this directly: the cultural framing that "you should be able to handle it on your own" reflects specific cultural assumptions, not what research shows about how humans actually navigate difficulty. Most people who get appropriate professional support for clinical concerns benefit substantially; most people who don't get support for clinical concerns suffer longer. Stigma is a real barrier, but it doesn't change whether help is appropriate; it just makes accessing it harder. Recognizing stigma-based thinking when it appears — in yourself, in your family, in the culture around you — as cultural framing rather than truth is part of building the help-seeking literacy this lesson develops.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l19-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources Of Mental Health Support`,
          intro: `{name}, three sources offering mental health/wellness support. Evaluate each: what tier? what credentials? what's being sold? does it acknowledge appropriate limits and recommend professional help when warranted?`,
          sources: [
            {
              id: `source-a`,
              tier: `A`,
              title: `Credentialed clinical psychologist (licensed practitioner offering evidence-based therapy)`,
              content: `Dr. Sarah Chen is a licensed clinical psychologist (PhD from a university clinical psychology program; APA-accredited internship; state license; ongoing continuing education). Her practice provides individual therapy using evidence-based modalities: Cognitive Behavioral Therapy for depression and anxiety, Dialectical Behavior Therapy skills for emotional regulation, Acceptance and Commitment Therapy for various concerns, EMDR for trauma. Sessions are typically 50 minutes, weekly or biweekly, generally 8-20 sessions for specific concerns or longer for complex presentations. She accepts several insurance plans and offers sliding-scale fees for uninsured patients. Her intake process includes a thorough assessment of presenting concerns, history, symptoms, and goals; she provides clear treatment plans with specific goals and methods; she refers to psychiatrists for medication evaluation when appropriate; she follows ethical guidelines from her licensing board including confidentiality protections and clear scope of practice. For crisis situations between sessions, she has a backup plan including providing 988 and local emergency information. She has training in adolescent treatment specifically and works with patients 12 and older.`,
              evaluation: {
                tier: `Tier A`,
                strengths: `Doctoral credentials in clinical psychology with state licensure and ongoing regulation. Multiple evidence-based modalities (CBT, DBT, ACT, EMDR) with specific protocols and research support. Clear treatment structure with specific goals. Insurance and sliding-scale access. Crisis backup plan with appropriate referrals. Ethical practice including confidentiality and scope-of-practice. Specific training in adolescent treatment.`,
                concerns: `Cost without insurance can be substantial. Access can be limited (waitlist common in many regions). Insurance networks often exclude many qualified providers. Cultural fit may or may not be present; finding a provider who understands your specific background may require effort. Not all licensed psychologists practice evidence-based care; verifying specific training matters.`,
                weight: `High weight for significant concerns. This is the kind of care appropriate for diagnosed conditions, significant struggles, ongoing treatment. The credentials, training, and structure produce reliable quality. Access barriers are real but separable from quality.`,
              },
            },
            {
              id: `source-b`,
              tier: `B`,
              title: `School counselor: Mrs. Patel, certified school counselor at Sam's middle school`,
              content: `Mrs. Patel is a certified school counselor (master's degree in school counseling; state certification; ongoing professional development). Her role includes initial assessment of student concerns, brief counseling for school-related and personal issues, crisis intervention, family communication when appropriate (with appropriate confidentiality protections), referrals to community resources for ongoing care, and educational programming. Students can self-refer through office visits during free periods; appointments can be scheduled. Confidentiality protections apply with exceptions for safety concerns (suicidality, abuse, harm to others). Mrs. Patel has connections with community mental health resources, including knowing specific providers who accept various insurance plans, sliding-scale options, and community mental health centers. She has training in adolescent development, crisis intervention, and identifying when students need higher-level care. She's free, accessible during school hours, and doesn't require parent involvement for initial contact (though parent involvement is often recommended and required for ongoing concerns). She isn't equipped to provide ongoing therapy for clinical conditions but is an excellent entry point and bridge.`,
              evaluation: {
                tier: `Tier B`,
                strengths: `Genuinely accessible (free, immediate, no parent involvement required for initial contact). Master's-level training with state certification. Knows community resources and can make appropriate referrals. Confidentiality protections appropriate to setting. Crisis intervention training. Adolescent-specific knowledge. Often the most realistic entry point for adolescents.`,
                concerns: `Not equipped for ongoing therapy of clinical conditions; appropriate as bridge to higher-level care, not as primary treatment for complex concerns. Quality varies; some school counselors are excellent, some are limited by caseload or training. Confidentiality has appropriate exceptions for safety that students should understand. Not all schools have well-resourced counseling.`,
                weight: `High weight as entry point for adolescents. Particularly valuable for initial assessment, school-related concerns, crisis intervention, and connection to community resources. Should be used as bridge to Tier A for clinical concerns, not as substitute.`,
              },
            },
            {
              id: `source-c`,
              tier: `C`,
              title: `"WellnessGuruMia": TikTok influencer with 2M followers, "trauma healing coach"`,
              content: `WellnessGuruMia is a TikTok influencer with 2M followers who describes herself as a "trauma healing coach" and "nervous system regulation expert." She has no licensed mental health credentials; her credentials are listed as "certified life coach" through an online certification program (no licensing requirement, no clinical training), "trauma-informed yoga instructor," and "extensive personal healing journey." Her content includes diagnostic-style videos ("5 signs you have CPTSD without knowing it," "Are you actually autistic? Here's how to tell"), promotion of her $497 "Nervous System Reset" course, supplement recommendations through affiliate links (specific brands she's paid to promote), criticism of "the therapy industrial complex," claims that her methods work where therapy fails, and stories of clients who "healed in 6 weeks what therapy couldn't fix in years." Her course doesn't require crisis screening; her content doesn't include appropriate referral to professional help for suicidal users; her recommendations include alternative practices (specific breathwork patterns, somatic exercises, supplements) marketed as alternatives to evidence-based treatment. Her comment sections are full of vulnerable users asking about specific symptoms; her replies often redirect to her course.`,
              evaluation: {
                tier: `Tier C`,
                strengths: `Some content reflects underlying research (somatic awareness, nervous system regulation, breathwork) accurately enough that not all individual claims are false. Accessible format. Addresses real concerns (trauma, anxiety) that many people experience.`,
                concerns: `No licensed mental health credentials. "Life coach" certification has no licensing requirement and no clinical training. Diagnostic content (signs you have CPTSD, autism) provided without clinical assessment to vulnerable audience. $497 course and supplement affiliate income tied to alarmist content. Anti-therapy framing actively redirects from evidence-based treatment. Cure claims ("healed in 6 weeks what therapy couldn't fix") exceed what evidence supports. No appropriate crisis screening for vulnerable users. Direct monetization tied to maintaining audience perception of clinical authority she doesn't have.`,
                weight: `Low weight as mental health resource. Engagement-optimized content with direct monetization tied to clinical-sounding claims without clinical credentials. Some individual claims may be accurate but the framework is unsafe for vulnerable users. Should be recognized as Tier C and not used as basis for mental health decisions. The "trauma healing coach" framing combined with anti-therapy positioning is a documented pattern that has caused real harm to vulnerable users seeking help.`,
              },
            },
          ],
          synthesisPrompt: `Looking at the three sources together: if you or a friend needed mental health support, which would you turn to first? In what sequence? What does each source provide that the others don't, and what are the limits of each?`,
          reflectionPrompt: `The Tier C source provides content that's particularly problematic because vulnerable people seek mental health help when struggling. How do you balance the genuine inaccessibility of Tier A care (cost, geography, waitlists) with the real harm Tier C content can cause to people who can't access higher tiers?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What signs warrant professional mental health support?`,
              options: [
                `Just feeling sad`,
                `Persistent functional impairment (school, friendships, self-care over weeks); persistent mood disturbance (sadness, anxiety, anger, numbness not shifting); specific symptoms (sleep/eating changes, withdrawal, racing thoughts); thoughts of suicide or self-harm at ANY frequency; specific clinical concerns (disordered eating, body dysmorphic disorder, OCD, panic, dissociation, trauma); after significant loss or trauma. Signal is persistence and impact over time, not moment-intensity`,
                `Random`,
                `Just emotions`,
              ],
              correctIndex: 1,
              explanation: `Most people seek help later than they would have benefited from it. Recognizing thresholds for help-seeking before crisis matters. The signal isn't intensity in any moment but persistence and impact over time.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What credentials qualify someone as a licensed mental health provider?`,
              options: [
                `Just a course`,
                `Licensed psychologist (PhD or PsyD, doctoral-level psychology training, state license); psychiatrist (MD with psychiatry residency, can prescribe medication); LCSW/LMHC/LMFT (master's-level licensed therapists). Each requires graduate training, supervised practice hours, state licensing exams, and ongoing regulation. State licensing boards protect patients`,
                `Random`,
                `Just feelings`,
              ],
              correctIndex: 1,
              explanation: `Recognizing licensed credentials matters because licensing involves graduate training, supervised practice, and regulation that protect patients. "Coach" certifications often have none of these and shouldn't be confused with licensed credentials.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does "evidence-based" mean for therapy modalities?`,
              options: [
                `Just popular`,
                `The modality has been studied in randomized controlled trials and shown to produce better outcomes than no treatment, waitlist control, or comparison treatments. Examples: CBT (depression, anxiety, OCD), DBT (emotional regulation, originally for BPD), ACT (values-based), EMDR (trauma/PTSD specifically). Provider has been trained in the specific protocol. Not all licensed therapists provide evidence-based care; verifying specific training matters`,
                `Random`,
                `Just any therapy`,
              ],
              correctIndex: 1,
              explanation: `Evidence-based modalities have specific protocols and research support. Generic "talking therapy" without specific evidence-based training produces less reliable outcomes. Asking about specific training matters when seeking care.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What makes school counselors particularly valuable for adolescents?`,
              options: [
                `Random`,
                `Genuinely accessible: free, immediate, during school hours, no parent involvement required for initial contact in most schools. Master's-level training with state certification. Crisis intervention training. Knowledge of community resources for referrals. Confidentiality protections with safety exceptions. Often the single most useful mental health resource available to adolescents specifically. Should be used as entry point and bridge to higher-level care when appropriate`,
                `Just teachers`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `School counselors are often underutilized despite being highly accessible. They're trained, free, immediate, and connected to community resources. For most adolescents, the school counselor is the right first stop when something feels off.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What patterns identify problematic Tier C mental health content?`,
              options: [
                `Random`,
                `Creator lacks licensed mental health credentials but provides clinical-looking content (diagnoses, treatment recommendations). Content sells something: course, supplement, program, coaching. Cure claims or definitive answers about complex conditions. Anti-therapy or anti-medication framing that redirects from evidence-based treatment. "Signs you have X" quizzes that drive engagement through flattering or interesting diagnoses. Combination of vulnerability + monetization particularly problematic for mental health specifically`,
                `Just bad`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Mental health Tier C content is particularly problematic because vulnerable users + monetization can produce real harm. Recognition of patterns matters because this content is shaping how your generation thinks about mental health, often in ways that don't match research.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are the main crisis support resources for the US?`,
              options: [
                `Random`,
                `988 Suicide and Crisis Lifeline: call or text 988, 24/7, free, anonymous, trained counselors, not just for suicide but for any crisis. Crisis Text Line: text HOME to 741741, 24/7 text-based crisis support. Trevor Project: 1-866-488-7386 or text START to 678-678, LGBTQ+ youth-specific. National Alliance for Eating Disorders helpline: 1-866-662-1235. NAMI peer support groups. Each staffed by trained people and produces real benefit`,
                `Just 911`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Knowing crisis resources before you need them matters. 988 specifically has replaced older suicide hotlines and is the universal US mental health crisis number. Crisis Text Line is important for those who prefer text-based support. The Trevor Project provides LGBTQ+ youth-specific support.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the realistic practical sequence for getting mental health support?`,
              options: [
                `Random`,
                `School counselor first (accessible, can connect to resources); pediatrician or primary care doctor for assessment and referral; helplines (988, Crisis Text Line HOME to 741741, Trevor Project) for crisis or initial support; established self-help books or evidence-based apps for milder concerns or supplements; eventually credentialed therapist if appropriate. Sequence starts with accessible resources and builds toward more specialized as needed`,
                `Just one path`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The practical sequence matters because it acknowledges the real barriers to Tier A care while providing concrete paths forward. Starting with accessible resources usually works and can connect to higher-level care when needed.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What are real concerns about online therapy platforms like BetterHelp and Talkspace?`,
              options: [
                `Random`,
                `Quality varies significantly. Critiques from professional bodies about therapist screening, supervision, quality control. Specific scandals about marketing practices and data privacy. Some therapists provide good care, others less so. If using, verifying individual therapist credentials and evidence-based training matters; platform itself doesn't guarantee quality. Not appropriate for crisis situations or severe conditions. Suitable for some milder concerns when in-person care isn't accessible`,
                `Always good`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Online platforms have real benefits (access, cost) and real concerns (quality control, severe situations). Recognizing both matters. The platforms aren't substitutes for crisis intervention or care of severe conditions, but can serve real role for milder concerns when in-person care isn't accessible.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If you're having thoughts of suicide or self-harm, you should wait until they become "really serious" before seeking professional support.`,
              correctAnswer: false,
              explanation: `False. Thoughts of suicide or self-harm at ANY frequency warrant immediate professional support, not waiting until they become urgent. Earlier support produces dramatically better outcomes than waiting until crisis. Resources: 988 Suicide and Crisis Lifeline (call/text 988) is available 24/7; Crisis Text Line (text HOME to 741741) is available 24/7; school counselors and pediatricians can help connect to ongoing care. There's no threshold to clear before help is appropriate.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend tells you she thinks she might have ADHD because of a TikTok she watched. She's planning to buy a $297 "ADHD focus course" from a TikTok creator who diagnosed her in the video. What should you point out based on this lesson?`,
              options: [
                `"Yes buy it"`,
                `"Several specific things. First, TikTok diagnoses aren't actual diagnoses; ADHD is a clinical condition with specific diagnostic criteria that require professional assessment, not a checklist someone watched. The 'signs you might have X' format is a documented Tier C pattern that drives engagement by providing flattering or interesting diagnoses to as many viewers as possible. Many people who think they have ADHD from TikTok don't; some who don't think they have ADHD actually do; clinical assessment matters. Second, the $297 course is selling something based on the diagnosis the creator made. That financial incentive shapes the framing; the creator needs people to believe they have ADHD to sell the course. The credentialed mental health field has actual research-supported treatments for ADHD (some involving medication, some involving therapy, some involving behavioral strategies) that don't cost $297 and aren't selling through TikTok. Third, what would actually help: if she's experiencing significant functional difficulty (attention, organization, impulsivity that's substantially affecting school, friendships, daily life), that warrants real assessment. School counselor can be entry point. Pediatrician can do initial assessment and refer if needed. Psychologist or psychiatrist with ADHD assessment training can provide actual diagnosis if appropriate. Real ADHD treatment is evidence-based and well-supported by research. Fourth, what to avoid: paying $297 for unlicensed coaching based on a TikTok diagnosis. The creator has no clinical training, no licensing, no diagnostic capability, and direct financial incentive in the diagnosis being maintained. The course almost certainly won't help and may delay her from getting real help if she does have ADHD. Fifth, the broader pattern: 'TikTok told me I have ADHD/autism/CPTSD/BPD/trauma' has become extremely common and is a documented Tier C pattern. Some people who get TikTok diagnoses do have the conditions; many don't. The path forward isn't trusting the TikTok or rejecting it but getting actual clinical assessment when functional difficulty is significant. Sixth, ADHD specifically is one of the more common adolescent conditions; if she does have it, evidence-based treatment is genuinely helpful, and earlier diagnosis matters. The intervention isn't 'TikTok is wrong' but 'TikTok isn't diagnostic; here's how to actually find out.'"`,
                `"Random"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied help-seeking literacy. Identify the Tier C pattern (TikTok diagnosis + monetized course). Distinguish recognition of possible condition from actual clinical assessment. Provide specific path forward (school counselor, pediatrician, real clinical assessment). Don't dismiss the friend's concern; provide a better path for addressing it.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for getting mental health help? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: have you encountered Tier C mental health content? What did it offer? Did it shape what you believed?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who knows how to navigate mental health support across decades, what does that change about your willingness to get help and your ability to help others get it?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick a specific concern you have or might have. Apply the practical sequence. What would you actually do?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Tier A access is genuinely limited (cost, geography, waitlists). How should that affect your evaluation of Tier B and Tier C resources?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find out what specific resources are available in your school and community. Make a list. Share with parents or trusted adults.` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Help-seeking literacy at 12 protects across decades of times you or someone you care about needs support. Two paths.`,
          familyActivity: {
            title: `The Family Mental Health Resources Conversation`,
            duration: `60 minutes`,
            description: `Share the three-tier framework and specific resources. Many families don't know what's available or how to access; the conversation often surfaces specific knowledge gaps worth filling. Consider establishing family practices: a family list of mental health resources (school counselor contact, pediatrician, local mental health centers, helplines printed and accessible); explicit family permission and encouragement to access help when needed; conversation about cultural framings that might create barriers (stigma, "be strong," "we handle our own problems") and how to navigate them. For families with members who have benefited from professional support, sharing experiences (appropriately) reduces stigma for adolescents.`,
          },
          projectOption: {
            title: `Build a personal mental health resources document, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Research and document the specific resources available to you. School counselor contact information and hours. Pediatrician or family doctor and how to schedule. Crisis resources (988, Crisis Text Line HOME to 741741, Trevor Project, eating disorder helplines, specific to your needs). Local mental health centers and what they offer (sliding-scale fees, specialties). Insurance coverage for mental health (ask parents to clarify). Local therapists who accept your insurance or offer sliding-scale fees. Make a personal document you can access if needed. Share appropriate sections with parents. Write 1,000 words on what you learned about local mental health access.`,
            offerToParent: `Parent: support your kid in building this resource document. Having specific resources documented before they're needed dramatically reduces barriers when they are needed. This is one of the highest-leverage protective investments available.`,
          },
          identityQuestion: `If you become someone who recognizes when help is needed and knows how to access real help (for yourself and for people you care about), what does that change about how you'll navigate the inevitable difficult times across decades?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes when help is warranted before crisis.`,
            `A person who distinguishes credentialed evidence-based care from viral wellness coaching.`,
            `Someone who knows the practical resources available to me and people I care about.`,
          ],
          saveKey: `identity_responses_lw_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. Nineteenth Life Wellness lesson done. You now have framework for recognizing when help is warranted, three-tier evaluation of mental health resources (credentialed/serious popular/viral monetized), specific knowledge of crisis resources (988, Crisis Text Line HOME to 741741, Trevor Project), and practical sequence for getting help (school counselor → pediatrician → helplines → established resources → credentialed therapist). That's framework most adults navigating help-seeking have never explicitly built. One lesson to go: the capstone. Your Wellness Philosophy. 100 XP, 45 minutes. Build the framework you'll carry across decades. Let's finish this. — Terra`,
          badge: `help-seeking-literate`,
          badgeName: `Help-Seeking Literate`,
          xpEarned: 75,
          competencies: [
            `Recognizes specific signs warranting professional mental health support`,
            `Distinguishes Tier A credentialed evidence-based care from Tier B serious popular resources from Tier C viral monetized content`,
            `Knows specific crisis resources (988 Suicide and Crisis Lifeline call/text 988, Crisis Text Line text HOME to 741741, Trevor Project)`,
            `Applies practical sequence for getting help (school counselor → pediatrician → helplines → established → credentialed)`,
            `Identifies evidence-based therapy modalities (CBT, DBT, ACT, EMDR) and what they treat`,
          ],
          nextLessonPreview: {
            title: `Lesson 20 (CAPSTONE): Your Wellness Philosophy`,
            hook: `Build your wellness philosophy. 100 XP, 45 minutes. The synthesis of everything.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L19 ${VERSION}] "${l.title}" mags=${mags} sources=${sourceEval?.sources?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
