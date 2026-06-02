// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L06 — Mental Health Basics
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Mental Health Literacy, Clinical Distinction
// CALIBRATED: Voyager spec v1.1 (May 2026)
// SAFETY: Validates mental health conditions as real medical conditions;
//         clear escalation path; does not pathologize ordinary struggles;
//         crisis resources included; 988 Suicide & Crisis Lifeline mentioned
//         only in escalation context (not techniques/methods)
// Interaction format: CASE STUDY (sadness vs depression / worry vs anxiety / focus vs ADHD)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l06-v1";

const LIFEWELLNESS_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-06`,
      title: `Mental Health Basics`,
      duration: 35,
      xpReward: 75,
      badge: `mental-health-literate`,
      badgeName: `Mental Health Literate`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, mental health is one of the most important topics in this band. Real mental health conditions (depression, anxiety disorders, ADHD, OCD, eating disorders, trauma-related conditions) are medical conditions, not character flaws or weaknesses. They affect millions of people including many of your peers right now. At the same time, ordinary difficult emotions and struggles are part of being human and don't always indicate clinical conditions. Mental health literacy is about knowing the difference, knowing when to seek help, and knowing how to support yourself and others without either over-medicalizing ordinary struggles or dismissing real conditions. Today we work through three real situations that show the distinction. By the end you'll know warning signs that suggest seeking professional help, you'll know what professional help actually looks like, and you'll know who to reach out to. This lesson will save lives over the decades you'll use it.`,
          headline: `Mental Health Basics`,
          subtitle: `Distinguishing ordinary struggles from clinical conditions. Three case studies. When and how to seek help.`,
          visual: `/voyager-assets/life-wellness/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Mental Health Conditions Are Real Medical Conditions`,
          paragraphs: [
            `Start with what's not controversial in the research. Mental health conditions are real medical conditions involving the brain and how it functions. Depression isn't just sadness; clinical anxiety disorders aren't just worry; ADHD isn't just being easily distracted; OCD isn't just being neat. These are specific clinical conditions with characteristic patterns, neurobiological substrates, and effective treatments. Decades of research across psychiatry, psychology, neuroscience, and clinical research support this picture.`,
            `Prevalence is substantial. National Institute of Mental Health (NIMH) data and similar international sources find that roughly 1 in 5 adolescents experiences a diagnosable mental health condition each year, and roughly 1 in 3 will experience one by age 18. Depression and anxiety disorders are the most common. ADHD affects roughly 9-10% of children and adolescents. These numbers mean that in any classroom, multiple people are likely experiencing real mental health conditions, often without recognizing them and without getting help.`,
            `Mental health conditions are treatable. Multiple effective treatments exist. Cognitive behavioral therapy (CBT) has strong evidence across many conditions. Other therapy approaches (DBT, ACT, IPT, family-based treatment for eating disorders, trauma-focused therapy) have evidence for specific conditions. Medications work for some conditions in some people. Combination treatment often works better than either alone. The treatments aren't perfect and don't work for everyone, but the field has real treatments backed by real research.`,
            `Stigma is a real obstacle. People with mental health conditions often delay seeking help because of shame, fear of judgment, or worry about being "weak" or "crazy." Research is clear that this delay produces worse outcomes; earlier treatment is more effective for most conditions. The stigma is irrational (we don't treat diabetes or asthma as moral failings; mental health conditions are similar medical conditions) but its effects are real. Part of mental health literacy is recognizing the stigma as the irrational thing rather than the help-seeking.`,
            `For 11-12 year olds specifically. Adolescence is when many mental health conditions first emerge. Depression and anxiety disorders often have onset in early adolescence. Catching conditions early and getting professional help dramatically improves outcomes; conditions left untreated through adolescence often persist into adulthood and become harder to treat. This isn't about pathologizing normal teenage moodiness; it's about recognizing the difference between normal struggles and clinical patterns that need real help.`,
          ],
          image: `/voyager-assets/life-wellness/l06-s1-real.webp`,
          imageCaption: `Mental health conditions are real medical conditions. ~1 in 5 adolescents has a diagnosable condition each year. Treatable with effective evidence-based treatments. Stigma is the obstacle, not the help-seeking.`,
          vocab: [
            {
              word: `mental health conditions as medical conditions`,
              definition: `Real clinical conditions with characteristic patterns, neurobiological substrates, and effective treatments. Roughly 1 in 5 adolescents experiences diagnosable condition each year; ~1 in 3 by age 18 (NIMH and similar data). Depression and anxiety disorders most common; ADHD affects ~9-10%. Treatable: CBT, DBT, ACT, family-based treatments, medications. Stigma produces help-seeking delay that worsens outcomes. Earlier treatment dramatically improves outcomes; adolescent-onset conditions often persist if untreated.`,
              audioPrompt: `Mental health conditions are real medical conditions involving the brain and how it functions, {name}. Depression isn't just sadness; clinical anxiety disorders aren't just worry; ADHD isn't just being easily distracted; OCD isn't just being neat. These are specific clinical conditions with characteristic patterns, neurobiological substrates, and effective treatments. Decades of research support this picture. Prevalence is substantial. National Institute of Mental Health data find that roughly 1 in 5 adolescents experiences a diagnosable mental health condition each year, and roughly 1 in 3 will experience one by age 18. Depression and anxiety disorders are the most common. ADHD affects roughly 9 to 10 percent of children and adolescents. Mental health conditions are treatable. Multiple effective treatments exist including cognitive behavioral therapy, dialectical behavior therapy, acceptance and commitment therapy, family-based treatment for eating disorders, trauma-focused therapy, and medications for some conditions. The treatments aren't perfect but the field has real treatments backed by real research. Stigma is a real obstacle that produces help-seeking delay; earlier treatment is more effective for most conditions.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Ordinary Struggles vs Clinical Conditions`,
          paragraphs: [
            `One of the most important distinctions in mental health literacy: ordinary difficult emotions and life experiences vs clinical conditions. Both are real; both deserve respect; but they often need different responses.`,
            `Ordinary struggles include things like: sadness after losing something or someone important; anxiety before tests, performances, or new situations; difficulty focusing when bored or tired; mood changes during adolescent development; periods of feeling lost, uncertain, or unhappy with circumstances. These are part of being human. They usually respond to ordinary supports: time, social connection, sleep, talking with people you trust, addressing the specific causes when possible. They typically don't require professional treatment unless they're particularly severe or prolonged.`,
            `Clinical conditions involve patterns that go beyond ordinary struggles in specific ways. Persistence over time (weeks to months). Severity that interferes with daily functioning. Lack of clear external cause or persistence even after causes resolve. Specific symptoms patterns that match recognized clinical conditions. Significant distress or impairment beyond what ordinary supports address. The key markers researchers and clinicians look for are duration, severity, and functional impact.`,
            `Why the distinction matters. Treating ordinary struggles as clinical conditions over-medicalizes normal human experience; produces unnecessary diagnoses, treatments, and stigma; can make people feel broken for having normal feelings. Treating clinical conditions as ordinary struggles produces dangerous delays in getting help; conditions worsen without treatment; treatable conditions become chronic and harder to treat. Both errors are common and produce real harm.`,
            `Where to err on the side of caution. If you're not sure whether something is ordinary or clinical, talking to a professional doesn't commit you to anything. A good mental health professional can help you distinguish; they're not trying to diagnose everyone who walks in. Pediatricians, school counselors, and mental health professionals can all help with this question. Erring toward "ask someone" rather than "decide alone" usually produces better outcomes.`,
            `One important reframing. Asking for help isn't weakness; it's often the harder thing. Many people who deeply struggle have learned to hide it because of stigma. Asking for help (for yourself or for someone you care about) is what changes outcomes. The script can be simple: "I've been struggling with [specific things]. Can we talk about whether I should see someone?" Most adults who care about you will respond well to this; the few who don't are wrong, and other adults are available.`,
          ],
          image: `/voyager-assets/life-wellness/l06-s2-distinguish.webp`,
          imageCaption: `Ordinary struggles vs clinical conditions. Key markers: duration, severity, functional impact. Both real; both deserve respect; often need different responses. When unsure, ask.`,
          vocab: [
            {
              word: `ordinary struggles vs clinical conditions`,
              definition: `Critical distinction. Ordinary struggles: difficult emotions, life experiences, normal adolescent development; usually respond to ordinary supports (time, connection, sleep, addressing causes). Clinical conditions: persistence (weeks-months), severity interfering with functioning, specific symptom patterns matching recognized conditions, significant distress beyond ordinary supports. Key markers: duration, severity, functional impact. Both real; both deserve respect; often need different responses. When unsure, err toward asking a professional.`,
              audioPrompt: `One of the most important distinctions in mental health literacy is ordinary difficult emotions and life experiences versus clinical conditions, {name}. Both are real and both deserve respect, but they often need different responses. Ordinary struggles include things like sadness after losing something or someone important, anxiety before tests or new situations, difficulty focusing when bored or tired, mood changes during adolescent development, periods of feeling lost or uncertain or unhappy with circumstances. These are part of being human. They usually respond to ordinary supports including time, social connection, sleep, talking with people you trust, and addressing the specific causes when possible. Clinical conditions involve patterns that go beyond ordinary struggles in specific ways. Persistence over time, weeks to months. Severity that interferes with daily functioning. Lack of clear external cause or persistence even after causes resolve. Specific symptom patterns that match recognized clinical conditions. The key markers researchers and clinicians look for are duration, severity, and functional impact. When unsure whether something is ordinary or clinical, talking to a professional doesn't commit you to anything. A good mental health professional can help you distinguish; they're not trying to diagnose everyone who walks in.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Therapy Actually Does (And When To Seek It)`,
          paragraphs: [
            `Pop content treats therapy as either a magic fix or a sign of being damaged. Research on what therapy actually does is more interesting and more useful.`,
            `Therapy works through specific mechanisms that depend on the type. Cognitive behavioral therapy (CBT, developed largely by Aaron Beck starting in the 1960s) works by examining and changing patterns of thinking and behavior that maintain mental health conditions. Strong evidence across depression, anxiety disorders, OCD, eating disorders, PTSD, and others. Dialectical behavior therapy (DBT, developed by Marsha Linehan) emphasizes skills for emotional regulation, distress tolerance, and interpersonal effectiveness; originally developed for borderline personality disorder, now used for many conditions involving emotional dysregulation. Acceptance and commitment therapy (ACT) focuses on accepting difficult experiences while committing to values-aligned action. Family-based treatment (FBT) is the leading evidence-based treatment for adolescent eating disorders.`,
            `What therapy actually looks like in practice. Regular sessions (usually weekly), structured conversation, specific skills and frameworks being taught and practiced, work between sessions, gradual change over months. Not just venting; not just nodding; not magic. The therapist is trained in specific techniques and using them in collaboration with you. Different therapists have different styles; finding one that fits matters. Therapy that doesn't seem to be helping after a reasonable time (3-4 months) is worth reassessing; sometimes switching therapists or approaches makes the difference.`,
            `When to seek therapy. Persistent symptoms beyond a few weeks that interfere with daily life. Mental health condition warning signs (covered in the cases that follow). Coping with significant life events (loss, trauma, family changes) that are producing prolonged distress. Repeated patterns that you can see in yourself but can't seem to change alone. Worth seeking even if you're not sure it's "bad enough"; therapy can help with things that don't meet diagnostic thresholds.`,
            `What about medication. For some conditions in some people, medication is helpful and sometimes necessary. Decisions about medication involve a doctor (usually a psychiatrist or psychiatric nurse practitioner, sometimes a pediatrician for milder cases) and depend on the specific condition, severity, age, and many individual factors. Medication can be combined with therapy and often produces better outcomes than either alone. Mental health medications aren't "happy pills" and don't fundamentally change who you are; they address specific neurobiological patterns that contribute to specific conditions. The decision is medical, not moral.`,
            `Crisis situations require different responses. If you or someone you care about is in immediate crisis (thinking about hurting themselves, in immediate danger, or unable to function), the response isn't a therapy intake appointment in 3 weeks. The 988 Suicide and Crisis Lifeline is available 24/7 by call or text. Emergency rooms can provide crisis intervention. Crisis-trained professionals can provide immediate support and connect to ongoing care. The general help-seeking conversation is for non-crisis concerns; crisis situations have their own escalation paths.`,
          ],
          image: `/voyager-assets/life-wellness/l06-s3-therapy.webp`,
          imageCaption: `Therapy works through specific mechanisms: CBT (Beck), DBT (Linehan), ACT, FBT. Regular sessions, structured skills, work between sessions. Medication for some conditions. Crisis situations need different escalation.`,
          vocab: [
            {
              word: `evidence-based mental health treatment`,
              definition: `Therapies and medications backed by research evidence for specific conditions. CBT (Cognitive Behavioral Therapy, Beck): examining and changing thought/behavior patterns; strong evidence across depression, anxiety, OCD, PTSD, eating disorders. DBT (Dialectical Behavior Therapy, Linehan): emotional regulation, distress tolerance, interpersonal effectiveness. ACT (Acceptance and Commitment Therapy): acceptance plus values-aligned action. FBT (Family-Based Treatment): leading treatment for adolescent eating disorders. Medications: useful for some conditions in some people, decision made with doctor.`,
              audioPrompt: `Evidence-based mental health treatments are therapies and medications backed by research evidence for specific conditions, {name}. Cognitive behavioral therapy, developed largely by Aaron Beck starting in the 1960s, works by examining and changing patterns of thinking and behavior that maintain mental health conditions. Strong evidence across depression, anxiety disorders, OCD, eating disorders, PTSD. Dialectical behavior therapy, developed by Marsha Linehan, emphasizes skills for emotional regulation, distress tolerance, and interpersonal effectiveness. Originally developed for borderline personality disorder, now used for many conditions involving emotional dysregulation. Acceptance and commitment therapy focuses on accepting difficult experiences while committing to values-aligned action. Family-based treatment is the leading evidence-based treatment for adolescent eating disorders. Therapy actually looks like regular sessions, usually weekly, structured conversation, specific skills and frameworks being taught and practiced, work between sessions, gradual change over months. For some conditions in some people, medication is helpful and sometimes necessary, decided with a doctor.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Warning Signs Worth Acting On`,
          paragraphs: [
            `Specific patterns warrant talking to a trusted adult and seeking professional evaluation. These aren't diagnostic (only a professional can diagnose), but they're warning signs that something might benefit from professional attention.`,
            `For depression-spectrum concerns. Persistent sadness, emptiness, or hopelessness lasting weeks rather than days. Loss of interest in things you used to enjoy. Significant changes in sleep, appetite, or energy. Difficulty concentrating that's new and persistent. Withdrawal from friends, family, or activities you previously engaged with. Persistent self-critical thinking that goes beyond ordinary self-doubt. Thoughts of death or self-harm (these warrant immediate response, not waiting).`,
            `For anxiety-spectrum concerns. Persistent worry that's hard to control and interferes with daily life. Physical symptoms (racing heart, shortness of breath, stomach issues, sweating) tied to anxiety. Avoidance of specific situations or activities because of anxiety. Panic attacks (sudden episodes of intense fear with physical symptoms). Sleep disruption from worry. Significant distress that doesn't respond to ordinary calming strategies.`,
            `For OCD-spectrum concerns. Intrusive, unwanted thoughts that feel impossible to dismiss. Compulsive behaviors performed to relieve anxiety (washing, checking, counting, mental rituals). Significant time spent on these patterns. Distress when prevented from performing compulsions. Awareness that the thoughts/behaviors don't make sense but inability to stop.`,
            `For ADHD-spectrum concerns. Significant, persistent difficulty with attention, focus, organization that's beyond ordinary kid-being-bored patterns. Difficulties present across multiple settings (not just at school). Significant impact on functioning (academic, social, family). Impulsivity that's beyond developmental norms. The diagnosis is complicated and requires professional evaluation; many things can produce attention difficulties (sleep, anxiety, depression, learning differences, ordinary developmental variation) and ADHD specifically requires meeting clinical criteria.`,
            `For trauma-spectrum concerns. Significant distressing experiences that continue to affect you weeks or months later. Flashbacks, nightmares, or intrusive memories of difficult events. Avoidance of reminders. Hypervigilance or feeling constantly on edge. Changes in mood, thinking, or self-perception after significant experiences. Trauma can come from many sources; the response isn't determined by the size of the event but by your experience of it.`,
            `The general framework. If something is persistent (weeks+), severe (interferes with daily life), or distressing in a way that doesn't respond to ordinary supports, it's worth talking to a trusted adult about getting professional evaluation. You don't need to diagnose yourself; you need to recognize "this seems beyond ordinary" and let a professional sort it out. Crisis situations (thoughts of self-harm, immediate danger, inability to function) need immediate response: 988 Suicide and Crisis Lifeline by call or text, emergency room, crisis services.`,
          ],
          image: `/voyager-assets/life-wellness/l06-s4-warning-signs.webp`,
          imageCaption: `Warning signs across depression, anxiety, OCD, ADHD, trauma. Persistent + severe + distressing = worth talking to trusted adult. Crisis = immediate response (988, ER).`,
          vocab: [
            {
              word: `mental health warning signs and escalation`,
              definition: `Patterns warranting professional evaluation: persistent (weeks+), severe (interferes with daily life), distressing beyond ordinary supports. Depression-spectrum: persistent sadness, loss of interest, sleep/appetite/energy changes, withdrawal. Anxiety-spectrum: persistent worry, physical symptoms, avoidance, panic attacks. OCD-spectrum: intrusive thoughts, compulsive behaviors. ADHD-spectrum: persistent attention/focus difficulties across settings. Trauma-spectrum: persistent distress after experiences, flashbacks, hypervigilance. Escalation: trusted adult → professional evaluation. Crisis (self-harm thoughts, immediate danger): 988 Suicide and Crisis Lifeline, ER, crisis services immediately.`,
              audioPrompt: `Mental health warning signs warranting professional evaluation include several patterns across condition categories, {name}. Depression-spectrum: persistent sadness, emptiness, or hopelessness lasting weeks; loss of interest in activities you used to enjoy; changes in sleep, appetite, or energy; withdrawal from friends and family; persistent self-critical thinking. Anxiety-spectrum: persistent worry interfering with daily life; physical symptoms tied to anxiety; avoidance of situations; panic attacks. OCD-spectrum: intrusive unwanted thoughts; compulsive behaviors to relieve anxiety; significant time spent on these patterns. ADHD-spectrum: persistent difficulty with attention and focus across multiple settings; significant functional impact. Trauma-spectrum: persistent distress after significant experiences, flashbacks, nightmares, hypervigilance. The general framework: persistent plus severe plus distressing in ways that don't respond to ordinary supports warrants talking to a trusted adult about professional evaluation. Crisis situations including thoughts of self-harm, immediate danger, or inability to function need immediate response: 988 Suicide and Crisis Lifeline by call or text, emergency room, crisis services.`,
            },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Cases`,
          paragraphs: [
            `In the cases that follow, three young people face different mental health situations. Each one shows the distinction between ordinary struggles and clinical conditions. Work through what would actually serve them given everything you've read in sections 1-4.`,
            `One framing as you work. The cases involve people who might or might not have clinical conditions. The skill isn't diagnosing them (you can't, and shouldn't try); the skill is recognizing the warning signs that suggest professional evaluation. The professional then does the actual assessment.`,
            `Another framing. None of the case responses involve doing nothing. Even ordinary struggles deserve real engagement (talking with trusted people, addressing causes, ordinary supports). Clinical conditions need the additional layer of professional help. The wrong responses are minimizing real signs or pathologizing ordinary experience.`,
            `One important reminder. Many adolescents experiencing real mental health conditions don't recognize what they're experiencing, partly because of stigma, partly because they've never had a reference point for what's normal, partly because the conditions affect the very thinking they'd use to recognize them. If you're reading this and noticing yourself in any of the warning signs, please talk to a trusted adult. The shame of asking for help is itself part of what mental health conditions can produce; asking anyway is what changes outcomes.`,
            `One last framing. You're 12. Mental health literacy at 12 is one of the highest-leverage forms of self-knowledge available. Adolescence is when many conditions emerge; recognizing them and getting help early dramatically improves outcomes. This lesson and its companion topics across the band may save your life or someone you care about. Take it seriously.`,
          ],
          image: `/voyager-assets/life-wellness/l06-s5-before.webp`,
          imageCaption: `Three case studies on distinguishing ordinary struggles from clinical conditions. The skill is recognizing warning signs, not diagnosing.`,
          vocab: [
            {
              word: `crisis resources and escalation`,
              definition: `Critical resources for mental health crises. 988 Suicide and Crisis Lifeline: available 24/7 by call or text in the US; crisis-trained counselors; supports people in distress and those concerned about others. Emergency rooms: provide crisis intervention for immediate danger. School counselors and trusted adults can connect to crisis services. Non-crisis concerns: pediatrician, school counselor, mental health professional. The decision to call for help, including crisis support, doesn't commit you to specific outcomes; it gets you connected to people trained to help with the specific situation.`,
              audioPrompt: `Crisis resources and escalation paths are critical to know in advance, {name}. The 988 Suicide and Crisis Lifeline is available 24 hours a day, 7 days a week, by call or text in the US. It's staffed by crisis-trained counselors who support people in distress and people concerned about others. Emergency rooms provide crisis intervention for immediate danger. School counselors and trusted adults can connect to crisis services. For non-crisis concerns: pediatrician, school counselor, mental health professional. The decision to call for help, including crisis support, doesn't commit you to specific outcomes; it gets you connected to people trained to help with the specific situation. If you or someone you care about is in immediate crisis (thinking about hurting themselves, in immediate danger, or unable to function), the response isn't waiting for a therapy intake appointment in 3 weeks; it's the crisis resources. Knowing these resources in advance, before any crisis, is part of mental health literacy.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l06-case-study`,
          type: `case-study`,
          headline: `Three Mental Health Situations`,
          intro: `{name}, three real situations distinguishing ordinary struggles from clinical conditions. For each, identify what would actually serve the person.`,
          cases: [
            {
              id: `case-1`,
              title: `Sadness After Loss vs Depression`,
              context: `Jordan's grandmother, who he was very close to, died 4 months ago. He's been sad, with periods of crying and missing her, particularly around significant dates and reminders. But he's continued to function: going to school, maintaining friendships, doing his activities. Recently his sister, who has clinical depression, has been suggesting he might have depression too. Jordan isn't sure. He still feels sad sometimes but also has periods of normal mood, laughter with friends, and engagement with things he enjoys.`,
              question: `What's actually going on with Jordan?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Jordan has clinical depression and needs treatment immediately. Any persistent sadness in adolescence indicates depression.`,
                  outcome: `This over-medicalizes ordinary grief. What Jordan describes (sadness over a significant loss, particularly around reminders, while continuing to function and experience normal mood and engagement in between) is normal grief, not clinical depression. Grief and depression can look similar but differ in important ways. Grief usually fluctuates (sad moments alongside normal mood); depression is more pervasive. Grief is centered on the specific loss; depression is broader. Treating ordinary grief as clinical depression produces unnecessary diagnosis, treatment, and potentially stigma. The right response is real grief support, not diagnosis.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `What Jordan describes sounds like ordinary grief rather than clinical depression: sadness centered on a real loss, fluctuating with normal mood and engagement, while continuing to function. Grief is a normal response to loss and usually doesn't require clinical treatment; it does benefit from real grief support. Helpful: talking with people who knew his grandmother, family conversations about her, allowing himself to feel sad without trying to suppress it, finding ways to remember her that feel meaningful, accessing community supports (grief groups for kids exist; school counselors can often help). That said: grief can sometimes complicate into prolonged grief disorder or depression, especially if multiple risk factors are present. Worth checking in periodically: is the sadness changing, lifting at all, or getting worse? Is functioning getting worse over time? Is hope present? Are there thoughts of self-harm? If signs of worsening appear, that warrants seeing a professional, like a pediatrician or counselor, who can help assess. For now: grief support, time, normal life, and watching for changes.`,
                  outcome: `This is the research-informed response. Grief is normal; treating every prolonged sadness as clinical depression both over-medicalizes ordinary experience and obscures what grief actually is. At the same time, grief can sometimes complicate, and watching for warning signs (worsening over time, loss of functioning, no relief at all, thoughts of self-harm) is appropriate. The response honors the real loss, provides real grief support, and includes the framework for recognizing if the situation changes. The sister's suggestion was well-intentioned but missed the distinction between grief and depression.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Tell Jordan to just get over it. It's been 4 months; he needs to move on.`,
                  outcome: `This dismisses real grief, which is harmful. Grief has no fixed timeline; "getting over" a significant loss isn't how grief works. Pressuring people to suppress grief or hurry it produces specific problems including complicated grief, depression, and damaged emotional functioning. Real grief support involves accepting that grief takes time, varies between people, and benefits from real engagement rather than suppression.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates distinguishing ordinary grief from clinical depression. Both involve sadness; they differ in pattern (grief fluctuates and centers on the loss; depression is more pervasive and broader), functional impact (grief usually preserves more functioning), and response to ordinary supports (grief usually responds to grief-specific supports). Treating grief as depression over-medicalizes; treating depression as just grief delays needed help. The skill is recognizing the pattern and matching response appropriately, including watching for changes that would shift the assessment.`,
            },
            {
              id: `case-2`,
              title: `Test Anxiety vs Anxiety Disorder`,
              context: `Sam is in 7th grade. She's always been somewhat anxious, but this year it's gotten dramatically worse. She experiences intense worry most days that she can't seem to control. She has stomach problems she didn't have before. She's started avoiding situations she used to handle: hanging out with new groups, raising her hand in class, going to events that involve unfamiliar people. She had two panic attacks in the last month (sudden racing heart, shortness of breath, feeling like she was going to die, lasting about 15 minutes each). She's still mostly going to school but it's gotten harder, and her grades are slipping because she can't focus when worried. Her parents think she's just "going through a phase" and will grow out of it.`,
              question: `What's actually going on with Sam?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Sam's parents are right; this is just normal teenage anxiety. She'll grow out of it. No need to do anything.`,
                  outcome: `This dangerously misses real warning signs. What Sam describes goes well beyond ordinary anxiety: persistent worry most days that she can't control; physical symptoms (stomach problems); avoidance of activities she used to handle; panic attacks; functional impact (grades slipping); persistence over months. These are characteristic warning signs of generalized anxiety disorder or panic disorder. Waiting for her to "grow out of it" is what produces worse outcomes; untreated anxiety disorders in adolescence often persist into adulthood and become more severe. The "phase" framing is exactly how real conditions get missed.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Sam is showing multiple warning signs that warrant professional evaluation: persistent worry she can't control; physical symptoms; avoidance of normal activities; panic attacks; functional impact (grades). These together strongly suggest a clinical anxiety disorder, possibly generalized anxiety disorder or panic disorder. Sam should: have a conversation with her parents about what she's experiencing using specific examples (panic attacks are not "just anxiety"; persistent uncontrollable worry interfering with functioning is not "just teenagers"). If her parents continue to minimize, she should talk to a school counselor who can advocate for evaluation and connect to resources. Professional evaluation should be by a mental health professional (psychologist, psychiatrist, or pediatrician comfortable with mental health screening). Anxiety disorders are highly treatable: CBT has strong evidence for anxiety disorders in adolescents; in some cases medication is helpful; combination treatment often works best. The earlier she gets help, the better the outcomes. The "growing out of it" framing is wrong here; clinical anxiety disorders typically don't resolve on their own and tend to worsen with avoidance, which is what's already happening.`,
                  outcome: `This is the research-informed response. The pattern Sam describes is textbook anxiety disorder warning signs, and the treatment evidence is strong. The parental "phase" framing is well-intentioned but produces dangerous delays in treatment that lead to worse outcomes. The skill of advocating for evaluation when adults minimize symptoms is important; Sam may need to talk to a school counselor or another adult to get the evaluation if parents don't engage. Anxiety disorders are highly treatable but treatment requires recognizing them as conditions, not just heightened ordinary worry.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Sam should just push herself through the anxiety. Avoidance is the problem; exposure to feared things will cure it.`,
                  outcome: `This contains a partial truth (avoidance does maintain anxiety; gradual exposure is part of CBT for anxiety disorders) wrapped in dangerously wrong implementation. Forcing oneself through severe anxiety without professional support and structured technique often produces worse anxiety, panic, and trauma rather than recovery. CBT for anxiety involves gradual, structured exposure with a trained therapist, not "just push through it." DIY exposure without professional guidance can make things worse, not better.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates clinical anxiety disorder warning signs being dismissed as "phase." Multiple specific warning signs are present including the physical symptoms, panic attacks, avoidance pattern, and functional impact. Untreated anxiety disorders worsen with avoidance and persist into adulthood. Treatable with evidence-based approaches (CBT, sometimes medication). The skill of advocating for evaluation when adults minimize is important; school counselors can be allies when parents aren't engaging yet.`,
            },
            {
              id: `case-3`,
              title: `Distraction vs ADHD`,
              context: `Maya is in 7th grade. She's always been described as "distractible" but this year teachers have been raising concerns. She can't sit still in class. She loses track of assignments constantly. Her room is chronically chaotic in a way that interferes with finding her things. She forgets important commitments. She often starts tasks without finishing them. These patterns have been present throughout her life but are more obvious now because middle school requires more independent organization. They show up at school, at home, in activities, not just one setting. Her parents think she's just "lazy" or "not trying"; she's been internalizing this and feels increasingly bad about herself.`,
              question: `What's actually going on with Maya?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Maya's parents are right; she just needs to try harder. ADHD is overdiagnosed and most "ADHD" kids just need better discipline.`,
                  outcome: `This dismisses real signs and damages a kid who's likely struggling with a real condition. What Maya describes — long-standing patterns of difficulty with attention, organization, task completion, sitting still, present across multiple settings, interfering with functioning, more obvious as demands increase — is the textbook pattern that warrants ADHD evaluation. The "just lazy" framing is exactly what kids with ADHD often internalize, producing significant secondary harm: depression, anxiety, low self-esteem, identity damage. Untreated ADHD in adolescence is associated with worse academic outcomes, mental health complications, and substance use risk in adulthood. "Try harder" is what every ADHD kid has been told their entire life; it's not the solution because effort isn't the missing thing.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `What Maya describes warrants professional evaluation for ADHD. The pattern is textbook: long-standing (throughout life), present across multiple settings (school, home, activities), involving multiple domains (attention, organization, task completion, sitting still), with significant functional impact that's more obvious as demands increase. This is exactly the pattern ADHD assessment looks for, though only a professional can actually diagnose. Important context: ADHD is highly genetic (often present in parents and siblings, though often undiagnosed in older generations); the "just lazy" framing is one of the most damaging things kids with ADHD experience and is closely associated with later depression and anxiety. Maya's parents should pursue evaluation by a psychiatrist, psychologist, or pediatrician familiar with ADHD assessment. If ADHD is diagnosed, treatments include behavioral interventions, accommodations (school can implement these), executive function coaching, and for some kids medications. Medications are well-researched and effective for many but not all kids with ADHD; the decision is medical, made with a doctor. The key thing right now: Maya's experience is real and not a character flaw. Helping her get evaluated and accurate information about her brain can change her relationship with herself and produce dramatically better outcomes than continued "try harder" messaging.`,
                  outcome: `This is the research-informed response. ADHD is a real, well-researched neurodevelopmental condition with characteristic patterns that match Maya's description. "Just lazy" is one of the most harmful framings for kids with ADHD because it produces internalized shame and identity damage that compound for decades. Professional evaluation can produce accurate diagnosis and access to interventions that change outcomes. The pattern Maya shows isn't ambiguous; multiple specific markers including pervasive presence across settings and long-standing nature point toward ADHD. The genetic point matters because many parents of ADHD kids have undiagnosed ADHD themselves, which both makes recognition harder and provides important family information.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Maya definitely has ADHD; she should start medication immediately without any other evaluation.`,
                  outcome: `This skips important steps. You don't diagnose ADHD by reading descriptions on the internet; professional evaluation by a qualified practitioner is required. Many things can produce attention difficulties: anxiety, depression, sleep problems, learning differences, normal developmental variation, family stress, and other conditions. ADHD specifically requires meeting diagnostic criteria and ruling out alternative explanations. Medication decisions, if relevant, come after diagnosis and involve a doctor evaluating the specific case. Skipping evaluation produces both missed conditions (something else might be going on) and inappropriate treatment.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates dismissal of likely ADHD as "laziness." The pattern Maya shows is textbook ADHD warning signs but only professional evaluation can diagnose. The "just lazy" framing is closely associated with depression and anxiety development in kids with ADHD; the secondary harms from missed diagnosis can be as significant as the primary condition. Genetic component matters: undiagnosed parental ADHD often makes recognition harder. Treatment evidence is strong; outcomes change dramatically with appropriate intervention. The deeper skill is recognizing that "try harder" isn't always the right response; sometimes the missing thing isn't effort but appropriate diagnosis and support.`,
            },
          ],
          reflectionPrompt: `All three cases involve adults missing real signs that warrant professional evaluation. What's common across the misses?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's true about mental health conditions as medical conditions?`,
              options: [
                `Not real`,
                `Real clinical conditions with characteristic patterns, neurobiological substrates, and effective treatments; ~1 in 5 adolescents experiences diagnosable condition each year; ~1 in 3 by age 18 (NIMH data); depression and anxiety disorders most common; ADHD affects ~9-10%; treatable with evidence-based therapies and sometimes medications; stigma produces help-seeking delay that worsens outcomes`,
                `Just feelings`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Mental health conditions aren't character flaws or weaknesses. They're medical conditions involving brain function, with effective treatments. The stigma is irrational (we don't treat diabetes as moral failing) but its effects on help-seeking are real and produce worse outcomes.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the distinction between ordinary struggles and clinical conditions?`,
              options: [
                `Same thing`,
                `Ordinary struggles: difficult emotions, life experiences, normal adolescent development; respond to ordinary supports (time, connection, sleep, addressing causes). Clinical conditions: persistence (weeks+), severity interfering with functioning, specific symptom patterns matching recognized conditions, significant distress beyond ordinary supports. Key markers: duration, severity, functional impact. When unsure, ask a professional`,
                `Random distinction`,
                `Just severity`,
              ],
              correctIndex: 1,
              explanation: `Both errors produce harm: treating ordinary struggles as clinical conditions over-medicalizes normal experience; treating clinical conditions as ordinary struggles produces dangerous treatment delays. The skill is recognizing the patterns and letting professionals do the actual assessment.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is CBT (Cognitive Behavioral Therapy)?`,
              options: [
                `Random therapy`,
                `Therapy approach developed largely by Aaron Beck starting in 1960s; works by examining and changing patterns of thinking and behavior that maintain mental health conditions; strong evidence across depression, anxiety disorders, OCD, eating disorders, PTSD; involves regular sessions, structured skills, work between sessions, gradual change over months`,
                `Just talk`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `CBT is the most evidence-based therapy approach for many conditions. Other approaches (DBT, ACT, FBT for eating disorders, trauma-focused therapies) have evidence for specific conditions. Therapy isn't magic and isn't just venting; it involves trained techniques applied collaboratively.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are warning signs for depression-spectrum conditions?`,
              options: [
                `Just sadness`,
                `Persistent sadness, emptiness, or hopelessness lasting weeks (not days); loss of interest in things previously enjoyed; changes in sleep, appetite, or energy; difficulty concentrating that's new and persistent; withdrawal from friends, family, or activities; persistent self-critical thinking beyond ordinary self-doubt; thoughts of death or self-harm (immediate response, not waiting)`,
                `Random signs`,
                `Just mood`,
              ],
              correctIndex: 1,
              explanation: `Pattern matters: persistence, severity, functional impact, multiple symptoms together. Thoughts of self-harm or death are crisis-level warning signs requiring immediate response (988, ER), not waiting for routine appointment.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are warning signs for anxiety-spectrum conditions?`,
              options: [
                `Just worry`,
                `Persistent worry hard to control, interfering with daily life; physical symptoms (racing heart, shortness of breath, stomach issues) tied to anxiety; avoidance of specific situations because of anxiety; panic attacks (sudden episodes of intense fear with physical symptoms); sleep disruption from worry; significant distress not responding to ordinary calming strategies`,
                `Random signs`,
                `Just nerves`,
              ],
              correctIndex: 1,
              explanation: `Clinical anxiety disorders are highly treatable but typically don't resolve on their own and tend to worsen with avoidance. Early evidence-based treatment (CBT, sometimes medication) produces much better outcomes than waiting for someone to "grow out of it."`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are warning signs for ADHD?`,
              options: [
                `Just distraction`,
                `Long-standing (throughout life) patterns of difficulty with attention, focus, organization; present across multiple settings (school, home, activities, not just one); significant impact on functioning; more obvious as demands increase; "just lazy" framing is harmful and is associated with secondary depression/anxiety; requires professional evaluation that rules out alternative explanations`,
                `Random signs`,
                `Just hyperactivity`,
              ],
              correctIndex: 1,
              explanation: `ADHD is real, well-researched, and highly genetic. The "just lazy" framing produces significant internalized shame and secondary mental health problems. Many things can cause attention difficulties; ADHD specifically requires meeting diagnostic criteria via professional evaluation. Treatment evidence is strong.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `When should someone use crisis resources rather than routine help-seeking?`,
              options: [
                `Never`,
                `Crisis situations: thoughts of self-harm or suicide; immediate danger to self or others; inability to function. Crisis resources: 988 Suicide and Crisis Lifeline (24/7 call or text); emergency rooms; crisis-trained professionals. Non-crisis concerns: pediatrician, school counselor, mental health professional via routine appointment. Crisis resources don't commit you to specific outcomes`,
                `Always`,
                `Random situations`,
              ],
              correctIndex: 1,
              explanation: `Knowing crisis resources in advance, before any crisis, is part of mental health literacy. The 988 line is staffed by crisis-trained counselors who support people in distress and people concerned about others. The decision to call doesn't commit you to specific outcomes; it connects you to people trained for the specific situation.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is "just a phase" or "grow out of it" framing often wrong for clinical conditions?`,
              options: [
                `Always wrong`,
                `Clinical mental health conditions typically don't resolve on their own and often worsen without treatment; untreated anxiety disorders persist into adulthood and become more severe; untreated depression often becomes chronic; untreated ADHD produces secondary depression/anxiety; untreated trauma can produce PTSD development; earlier evidence-based treatment dramatically improves outcomes`,
                `Just adults`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Adolescent-onset conditions left untreated often persist into adulthood and become harder to treat. The "phase" framing is well-intentioned but produces dangerous delays. Real clinical conditions warrant real professional evaluation regardless of whether adults around the kid recognize them.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: You should diagnose mental health conditions yourself based on information from the internet.`,
              correctAnswer: false,
              explanation: `False. Recognizing warning signs and seeking professional evaluation is appropriate; diagnosing yourself or others is not. Many conditions have overlapping symptoms; many things can produce similar patterns; professional evaluation rules out alternatives and produces accurate diagnosis. Self-diagnosis often produces wrong conclusions and prevents getting actually appropriate help.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I've been feeling really down for like 2 months, sleeping way too much, not interested in anything, not even my usual stuff with friends. But I don't want to make a big deal out of it." Based on this lesson, what should you point out?`,
              options: [
                `"You're fine"`,
                `"Those are warning signs worth taking seriously: persistent low mood for 2 months (not days), sleep changes, loss of interest in things you usually enjoy (including friends), persistence beyond ordinary supports. That's the kind of pattern professional evaluation is for. It doesn't mean you definitely have depression (only a professional can assess that), but it means it's worth talking to a trusted adult and probably seeing a counselor or doctor. The 'don't want to make a big deal out of it' part is part of how depression operates and is part of why so many people don't get help until things get much worse. Asking for help isn't making a big deal out of nothing; it's the appropriate response to what you're describing. Talk to a parent, school counselor, or doctor. If at any point you're having thoughts of hurting yourself or feel like you can't function, that's crisis territory: the 988 Suicide and Crisis Lifeline is available 24/7 by call or text. The earlier you get help, the better outcomes are. Treatable conditions become harder to treat the longer they go untreated. This is exactly what mental health professionals are for."`,
                `"Push through"`,
                `"Random advice"`,
              ],
              correctIndex: 1,
              explanation: `Real applied mental health literacy. Don't dismiss the friend; recognize the warning signs (persistent low mood, sleep changes, loss of interest, duration). Validate the experience while encouraging professional evaluation. Address the "don't make a big deal" framing directly because that's part of how depression maintains itself. Include crisis resources because the situation could change. Don't diagnose; do recognize and connect to help.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your understanding of mental health conditions vs ordinary struggles? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: is there something you've been experiencing that might warrant talking to someone about? What's stopping you from doing so?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with real mental health literacy (for yourself and others), what does that change about how you'll navigate the next 70 years?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of one person in your life who might be struggling. Apply the framework. Are there signs that warrant professional evaluation? Is there a conversation you could have?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where the framework doesn't apply well? When does the "ordinary vs clinical" distinction become hard to make? When might professional evaluation be inappropriate?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Look up the National Institute of Mental Health website or another reliable resource. Note one fact you didn't know before. Practice having the resource in mind.` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Mental health literacy at 12 saves lives across decades. Two paths.`,
          familyActivity: {
            title: `The Family Mental Health Conversation`,
            duration: `60 minutes`,
            description: `Share the framework: mental health conditions are real medical conditions; ordinary struggles vs clinical conditions; warning signs; when to seek help; crisis resources. Many adults grew up with stigma around mental health and have undiagnosed conditions themselves. Establishing family-level mental health literacy and openness about getting help when needed protects everyone. Specifically: name the warning signs together, identify who family members would talk to if needed, post crisis resources somewhere visible (988 Lifeline for the US), normalize that asking for help is appropriate response.`,
          },
          projectOption: {
            title: `Read a book on mental health for adolescents or families, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Options vary; current recommendations include works from major adolescent psychiatrists, family-oriented mental health writers, or anti-stigma authors. Avoid sensationalized memoir without clinical framework. Apply concepts during reading. Write 1,500 words on what you learned. Reading real mental health literacy at 12 builds foundation that protects across decades.`,
            offerToParent: `Parent: opt your kid into this project. Mental health literacy at 12 may literally save their life or someone they love. This is one of the highest-leverage investments you can make in their long-term wellbeing.`,
          },
          identityQuestion: `If you become someone who can recognize mental health warning signs (in yourself and others), knows when and how to seek help, and treats mental health conditions as medical conditions rather than character flaws, what does that change across a lifetime of relationships and challenges?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can spot mental health warning signs in themselves and others.`,
            `A person who treats asking for help as the appropriate response, not weakness.`,
            `Someone who knows crisis resources and uses them when needed.`,
          ],
          saveKey: `identity_responses_lw_11_12_6`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixth Life Wellness lesson done. You can now distinguish mental health conditions from ordinary struggles, know warning signs across depression, anxiety, OCD, ADHD, and trauma spectrums, understand what evidence-based therapy actually is (CBT, DBT, ACT, FBT), know crisis resources (988 Suicide and Crisis Lifeline for the US), and know how to talk with people about getting help. That's literacy that saves lives. Three lessons left in this batch's cluster. Next time we go into habits and behavior change: the science of how change actually happens. Source Evaluation format. Let's go. — Terra`,
          badge: `mental-health-literate`,
          badgeName: `Mental Health Literate`,
          xpEarned: 75,
          competencies: [
            `Recognizes mental health conditions as real medical conditions with effective treatments`,
            `Distinguishes ordinary struggles from clinical conditions using duration, severity, functional impact`,
            `Knows warning signs across depression, anxiety, OCD, ADHD, and trauma spectrums`,
            `Articulates what evidence-based therapy involves (CBT, DBT, ACT, FBT)`,
            `Knows crisis resources (988 Suicide and Crisis Lifeline) and routine help-seeking paths`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Habits and Behavior Change`,
            hook: `The science of how change actually happens. Three sources, contested research. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L06 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
