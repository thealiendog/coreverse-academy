// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L03 — The Stress Response
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Physiology, Stress Science
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (acute-response / chronic-load / polyvagal-state)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l03-v1";

const LIFEWELLNESS_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-03`,
      title: `The Stress Response`,
      duration: 35,
      xpReward: 75,
      badge: `stress-literate`,
      badgeName: `Stress Literate`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, stress is one of the most misunderstood concepts in wellness. Pop content treats stress as a single thing: bad, to be reduced. Real research is more interesting. Acute stress and chronic stress do different things in the body. The fight-or-flight model that most people know is incomplete; recent research from Stephen Porges has added a third response (freeze/shutdown) that explains a lot of what fight-or-flight doesn't. Today we work through three serious positions on what stress actually is: acute physiological response (Selye, Cannon), chronic allostatic load (McEwen), and polyvagal state regulation (Porges). Each has real evidence and real implications. By the end you'll have a working framework that's actually accurate to what's happening in your body, not the pop-content version.`,
          headline: `The Stress Response`,
          subtitle: `Three serious positions on what stress actually is. The pop-content version is incomplete.`,
          visual: `/voyager-assets/life-wellness/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Most People Get Wrong About Stress`,
          paragraphs: [
            `Most pop content treats stress as a single bad thing. "Reduce your stress." "Stress is killing you." "Manage your stress." The framing implies stress is uniformly negative and the goal is to minimize it. Real research has a more nuanced picture, and the nuance matters because it changes what you should actually do.`,
            `First problem with the pop framing: it conflates acute stress with chronic stress. Acute stress (short-term activation) is the body's adaptive response to challenges. It mobilizes energy, sharpens attention, prepares you for action. Acute stress isn't bad; it's often essential for performance and survival. Chronic stress (long-term activation that doesn't resolve) is genuinely harmful: it produces the cardiovascular, metabolic, immune, and mental health damage people associate with "stress." Treating these as the same thing leads to wrong interventions.`,
            `Second problem: the fight-or-flight model is incomplete. Walter Cannon's 1915 work introduced "fight or flight" as the body's response to threat. Hans Selye's mid-20th-century work expanded into the "general adaptation syndrome" with phases of alarm, resistance, and exhaustion. These frameworks have been hugely influential. But they don't fully explain why some responses to threat involve freezing, dissociation, shutdown rather than activation. Stephen Porges's polyvagal theory (1994 onward) added the third response, which explains a lot of what the older models couldn't.`,
            `Third problem: "stress management" as commonly framed treats stress as something to eliminate rather than something to regulate. The body's stress response system is designed to activate AND to recover. Healthy stress physiology involves appropriate activation when challenge is present AND complete return to baseline when it's over. Most adolescents (and most adults) have problems with the recovery side: they activate appropriately but don't return to baseline, leaving them in chronic partial activation that has real costs.`,
            `For 12-year-olds, the misframing matters because the developmental period is particularly sensitive to stress physiology. Bruce McEwen's work on "allostatic load" (the cumulative wear from sustained stress system activation) shows that adolescent and childhood stress patterns shape stress system function across the lifespan. Building accurate framework now, rather than absorbing pop messaging, lets you actually work with your stress system rather than trying to fight it.`,
          ],
          image: `/voyager-assets/life-wellness/l03-s1-wrong.webp`,
          imageCaption: `Three problems with pop stress framing: conflates acute/chronic, fight-or-flight is incomplete, "stress management" treats activation as the problem instead of recovery failure.`,
          vocab: [
            {
              word: `chronic stress`,
              definition: `Critical distinction in stress science. Acute stress: short-term activation in response to specific challenge; mobilizes energy, sharpens attention, prepares for action; often adaptive and essential for performance. Chronic stress: long-term activation that doesn't resolve; produces cardiovascular, metabolic, immune, and mental health damage. The two require different interventions: acute stress benefits from recovery practices; chronic stress benefits from addressing the underlying ongoing stressor.`,
              audioPrompt: `Acute versus chronic stress is a critical distinction in stress science, {name}. Acute stress is short-term activation in response to specific challenge. Your body mobilizes energy, sharpens attention, prepares for action. Heart rate increases, breathing quickens, stress hormones release. Acute stress is often adaptive and essential for performance. Athletes need it, students need it for exams, anyone facing a real challenge needs it. After the challenge passes, healthy physiology returns to baseline within minutes to hours. Chronic stress is long-term activation that doesn't resolve. The system stays partially activated continuously for weeks, months, or years. Chronic stress is genuinely harmful: produces cardiovascular damage, metabolic disruption, immune suppression, increased risk of depression and anxiety. The two require different interventions. Acute stress benefits from recovery practices that help the system return to baseline. Chronic stress benefits from addressing the underlying ongoing stressor that's keeping the system activated. Treating them the same way leads to wrong interventions; the distinction matters.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: The Acute Response View (Cannon, Selye)`,
          paragraphs: [
            `The first position focuses on stress as an acute physiological response system. Walter Cannon at Harvard introduced "fight or flight" in 1915 to describe how the body responds to threat through specific physiological activation. Hans Selye (Hungarian-Canadian endocrinologist) expanded this in his mid-20th-century work into the "general adaptation syndrome" with three phases: alarm (initial response), resistance (sustained coping), and exhaustion (system depletion).`,
            `The physiology in this view is well-mapped. The sympathetic nervous system activates, releasing norepinephrine and epinephrine (adrenaline). The HPA axis (hypothalamus-pituitary-adrenal) activates, releasing cortisol. Heart rate and blood pressure rise. Blood flow shifts to muscles. Digestion slows. Glucose mobilizes for energy. The bronchi dilate for more oxygen. The body prepares for physical action.`,
            `This response served humans well for evolutionary threats: predators, fights, escape from danger. It works less well for modern threats that don't resolve through fighting or fleeing: tests, social conflict, ongoing relationship stress, financial pressure. The body can't fight or flee from these, so it activates and doesn't get the resolution that ends activation. Modern stress is often acute response systems being chronically engaged by situations they weren't designed to handle.`,
            `Defenders include much of mainstream physiology and medicine. The framework has produced extensive research, well-mapped pathways, and clear understanding of how acute stress affects the body. Cortisol patterns, heart rate variability, blood pressure responses have all been studied extensively. The framework gives you specific, measurable physiology to work with.`,
            `What the framework implies practically. Build recovery practices that help your system return to baseline after activation. Slow breathing (4 seconds in, 6-8 seconds out) activates the parasympathetic nervous system, the "rest and digest" counterpart to fight-or-flight. Physical movement helps complete the activation cycle (your body was prepared for physical action; giving it some helps). Time in nature, social connection, sleep all support recovery. The goal isn't avoiding activation; it's ensuring complete recovery between activations.`,
            `Limits of this position. The model doesn't explain why some people respond to threat with freezing, shutdown, dissociation rather than activation. Fight-or-flight describes one major response pattern but not the full range of human stress responses. The next position addresses this gap.`,
          ],
          image: `/voyager-assets/life-wellness/l03-s2-acute.webp`,
          imageCaption: `Position 1: acute response. Cannon's fight-or-flight (1915), Selye's general adaptation syndrome. Well-mapped physiology. Doesn't explain freeze/shutdown responses.`,
          vocab: [
            {
              word: `general adaptation syndrome`,
              definition: `Framework from Hans Selye describing the body's response to sustained stress in three phases. Alarm: initial activation of fight-or-flight system. Resistance: sustained adaptation where the system stays engaged trying to cope. Exhaustion: depletion phase where the system can no longer maintain adaptation, producing damage. Foundational stress physiology framework from mid-20th century. Has been refined and extended by subsequent research but core findings have held up.`,
              audioPrompt: `The general adaptation syndrome is a framework from Hans Selye, the Hungarian-Canadian endocrinologist whose work in the mid-20th century laid much of the foundation for stress science, {name}. Selye described the body's response to sustained stress in three phases. The alarm phase is the initial activation of the fight-or-flight system. Sympathetic nervous system activation, cortisol release, mobilization of energy resources, preparation for action. The resistance phase is sustained adaptation where the system stays engaged trying to cope with continuing stress. The body works to maintain function despite ongoing demands. Resources are spent maintaining the adapted state. The exhaustion phase is depletion where the system can no longer maintain adaptation. Resources are depleted; the system breaks down. This phase produces the cardiovascular, metabolic, immune, and mental health damage associated with chronic stress. Foundational stress physiology framework that has been refined and extended by subsequent research but whose core findings have held up. Bruce McEwen's later work on allostatic load builds directly on Selye's framework.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: The Allostatic Load View (McEwen)`,
          paragraphs: [
            `The second position focuses on chronic stress as cumulative wear on the body. Bruce McEwen at Rockefeller University developed the concept of "allostatic load" in the 1990s to capture what happens when stress response systems are activated repeatedly or chronically across time. The key insight: it's not single stress events that produce most stress-related damage; it's the cumulative burden of repeated activation without sufficient recovery.`,
            `"Allostasis" refers to the body maintaining stability through change, adjusting physiological set points to meet demands. The body doesn't have one "normal" state; it has appropriate states for different demands. The system works well when activation happens appropriately and recovery happens completely. Allostatic load is what happens when the system is forced to maintain elevated states for too long or too often; the wear accumulates.`,
            `What allostatic load looks like physiologically. Persistent elevated cortisol producing metabolic disruption, immune suppression, hippocampal atrophy. Persistent elevated blood pressure producing cardiovascular damage. Chronic inflammation producing tissue damage across multiple systems. Disrupted sleep architecture (covered in L02). Hyperreactive amygdala producing increased anxiety and threat sensitivity. Each of these is a real physiological process; together they represent the body's "wear and tear" from sustained stress system activation.`,
            `Research on allostatic load has produced strong findings. Childhood and adolescent chronic stress is associated with worse adult health outcomes across many domains; the famous ACEs (Adverse Childhood Experiences) study by Felitti and Anda showed how childhood adversity produces lifelong health effects. Chronic occupational stress is associated with cardiovascular disease, depression, and other outcomes. Caregiver chronic stress shows similar patterns. The cumulative wear model fits the data better than single-event models do.`,
            `What this position implies practically. The right intervention often isn't reducing acute stressors but enabling better recovery between activations. Sleep, physical activity, social connection, time in nature, meaningful work all reduce allostatic load over time even if specific stressors continue. The framework also implies that early childhood and adolescence are particularly important: stress patterns established now shape allostatic load across decades.`,
            `One important nuance. Allostatic load isn't just about "stressful events." Subjective experience matters: the same external situation produces different load depending on whether you perceive it as threat or challenge, whether you have control, whether you have social support, whether you have recovery resources. Two people in the same situation can have very different allostatic load based on these factors. The framework supports both reducing actual stressors AND building the resources that buffer against load from unavoidable stressors.`,
          ],
          image: `/voyager-assets/life-wellness/l03-s3-allostatic.webp`,
          imageCaption: `Position 2: allostatic load. McEwen's framework. Cumulative wear from repeated activation without sufficient recovery. ACEs research, recovery practices, early developmental importance.`,
          vocab: [
            {
              word: `allostatic load`,
              definition: `Concept from Bruce McEwen at Rockefeller University (1990s+). Cumulative wear on the body from repeated stress system activation without sufficient recovery. Different from acute stress (single event); captures the burden of sustained activation. Physiological signatures include persistent elevated cortisol, blood pressure, inflammation; disrupted sleep; hippocampal atrophy; hyperreactive amygdala. Childhood and adolescent stress patterns shape allostatic load across the lifespan. Reducing load requires both reducing actual stressors AND building recovery resources.`,
              audioPrompt: `Allostatic load is a concept developed by Bruce McEwen at Rockefeller University starting in the 1990s, {name}. Captures the cumulative wear on the body from repeated stress system activation without sufficient recovery. Different from acute stress, which is a single event; allostatic load is the cumulative burden across many activations. "Allostasis" refers to the body maintaining stability through change, adjusting physiological set points to meet demands. The body doesn't have one normal state; it has appropriate states for different demands. The system works when activation happens appropriately and recovery happens completely. Allostatic load is what happens when the system is forced to maintain elevated states for too long or too often. Physiological signatures include persistent elevated cortisol producing metabolic disruption, persistent elevated blood pressure producing cardiovascular damage, chronic inflammation, disrupted sleep architecture, hippocampal atrophy from sustained cortisol, and hyperreactive amygdala producing increased anxiety. Childhood and adolescent stress patterns shape allostatic load across the lifespan. The ACEs study by Felitti and Anda demonstrated this clearly.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Polyvagal State Regulation (Porges)`,
          paragraphs: [
            `The third position adds a dimension the older frameworks missed. Stephen Porges at Indiana University developed polyvagal theory starting in 1994. The core insight: the autonomic nervous system has three distinct response states, not just two (sympathetic activation vs parasympathetic rest). The third state, the "dorsal vagal" response, explains why some stress responses involve freezing, dissociation, and shutdown rather than activation.`,
            `The three states. Ventral vagal: the social engagement state. Calm, connected, able to interact. Heart rate variable, breathing relaxed, facial expression engaged. This is the baseline state for safety and connection. Sympathetic: activation state. Fight or flight, mobilization for action. Heart rate up, breathing quickened, muscles tensed. This is what Cannon described. Dorsal vagal: shutdown state. Freezing, immobilization, dissociation, conservation. Heart rate may slow, but in a maladaptive way; the system has decided action won't work and is preserving energy.`,
            `Why this matters. Many people experience stress responses that the fight-or-flight model doesn't explain: feeling frozen rather than activated, dissociating from situations, going numb, shutting down emotionally. These responses are often pathologized or misunderstood under the older framework. Polyvagal theory reframes them as appropriate adaptive responses to specific situations, particularly situations where fight or flight isn't possible or hasn't worked.`,
            `The hierarchy matters too. The autonomic system shifts down through these states under stress. Safety supports ventral vagal (social engagement). Manageable threat activates sympathetic (fight/flight). Overwhelming threat or threat that can't be escaped activates dorsal vagal (shutdown). Recovery moves back up the hierarchy: from shutdown to activation to engagement. Many people who experienced overwhelming stress (especially in childhood) get stuck cycling between activation and shutdown, missing the ventral vagal engagement state that should be baseline.`,
            `What this position implies practically. Recovery practices matter at every level. Slow breathing, especially long exhales, supports the vagus nerve and shifts toward ventral vagal state. Co-regulation through safe relationships helps shift state when self-regulation isn't enough. Awareness of which state you're in helps target appropriate intervention: activation state needs different practices than shutdown state. The framework has been particularly influential in trauma research and clinical practice; it explains patterns that older frameworks couldn't.`,
            `One important caveat about polyvagal theory. Some neuroscientists have criticized specific neurophysiological claims Porges makes (the precise anatomical and evolutionary details of vagal pathways). The clinical framework is influential and useful; the underlying neuroanatomy claims are more contested. The framework as a working clinical tool for understanding states and intervention is well-supported even where specific anatomy claims are debated.`,
          ],
          image: `/voyager-assets/life-wellness/l03-s4-polyvagal.webp`,
          imageCaption: `Position 3: polyvagal state regulation. Porges's three states (ventral vagal/sympathetic/dorsal vagal). Explains freeze/shutdown responses that fight-or-flight doesn't.`,
          vocab: [
            {
              word: `polyvagal theory`,
              definition: `Framework from Stephen Porges at Indiana University (1994+). Autonomic nervous system has three distinct states, not two. Ventral vagal (social engagement, calm baseline). Sympathetic (fight/flight activation). Dorsal vagal (shutdown, freeze, dissociation). The third state explains responses fight-or-flight models can't. Influential in trauma research and clinical practice. Some specific neurophysiological claims are contested by other neuroscientists; the clinical framework as a working tool is well-supported.`,
              audioPrompt: `Polyvagal theory is a framework developed by Stephen Porges at Indiana University starting in 1994, {name}. The core insight: the autonomic nervous system has three distinct response states, not just the two (sympathetic activation versus parasympathetic rest) that earlier models assumed. The three states form a hierarchy. Ventral vagal is the social engagement state. Calm, connected, able to interact with others. This is baseline for safety and social connection. Sympathetic is the activation state. Fight or flight. Mobilization for action. What Cannon described in 1915. Dorsal vagal is the shutdown state. Freezing, immobilization, dissociation, conservation. The system has decided action won't work and is preserving energy. The system shifts down through these states under stress: safety supports ventral vagal; manageable threat activates sympathetic; overwhelming threat activates dorsal vagal. Recovery moves back up. Influential particularly in trauma research and clinical practice because it explains responses fight-or-flight models couldn't. Some specific neuroanatomical claims have been critiqued; the clinical framework as a working tool is well-supported.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature understanding integrates elements: acute stress physiology is real (position 1); chronic load accumulates from repeated activation (position 2); state regulation includes shutdown as well as activation responses (position 3). The forcing function of the argument is committing to a primary framing.`,
            `One framing to consider. Each position implies different default interventions. Position 1: recovery practices that restore baseline (slow breathing, physical movement, sleep, social connection). Position 2: reducing cumulative load (better sleep, sustained recovery resources, addressing chronic stressors). Position 3: state-specific interventions (different practices for activation vs shutdown vs engagement).`,
            `Another framing. The positions correspond to different time scales and different aspects of the stress system. Acute response operates in seconds to minutes. Allostatic load operates across years and decades. State regulation operates moment to moment in current functioning. All three are real; the question is which to prioritize when designing your own practices and understanding your own experience.`,
            `One important note about stress and mental health. Chronic stress and persistent shutdown states can be features of mental health conditions (depression, anxiety disorders, PTSD). If you're noticing stress patterns that persist for weeks despite normal recovery practices, that's worth discussing with a trusted adult and potentially a mental health professional. Stress physiology and mental health are deeply connected; some patterns are signals that something is going on that needs more support than self-management can provide.`,
            `One last framing. You're 12. The stress patterns you're building now influence the stress system you'll have at 30, 50, 70. McEwen's research shows clearly that early stress patterns matter for the long term. Building accurate framework and good recovery practices now is one of the highest-leverage investments in your long-term health.`,
          ],
          image: `/voyager-assets/life-wellness/l03-s5-before.webp`,
          imageCaption: `Three positions operate at different time scales: seconds (acute), years (allostatic load), moments (state regulation). Mature understanding integrates all three.`,
          vocab: [
            {
              word: `recovery vs reduction`,
              definition: `Important reframing in stress science. The pop framing focuses on stress reduction (eliminate stressors); the research framing emphasizes recovery (ensure complete return to baseline after activation). Many stressors can't be eliminated (school, social demands, real challenges); recovery practices work with the system that's designed to activate and recover. Sleep, breathing practices, physical movement, social connection, time in nature all support recovery. Most adolescents and adults have a recovery problem more than a stressor problem.`,
              audioPrompt: `Recovery versus reduction is an important reframing in stress science, {name}. The pop framing focuses on stress reduction: eliminate stressors, avoid difficult situations, minimize challenge. The research framing emphasizes recovery: ensure complete return to baseline after activation. The two have very different implications. Reduction-focused thinking can become avoidance of normal life challenges that would benefit from acute activation; recovery-focused thinking accepts appropriate activation while ensuring the system returns to baseline. Many stressors can't be eliminated. School, social demands, real challenges, important deadlines, difficult conversations. These produce stress responses that are often appropriate and even useful. The system is designed to activate and recover; the problem isn't activation but failed recovery. Most adolescents and adults have a recovery problem more than a stressor problem. Sleep is foundational for recovery. Breathing practices (especially slow exhale) support recovery. Physical movement completes the activation cycle. Social connection supports state regulation. Time in nature has measurable recovery effects. Focusing on recovery instead of reduction usually produces better outcomes.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l03-argument-builder`,
          type: `argument-builder`,
          headline: `What Is Stress, Really?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders in real research.`,
          positions: [
            {
              id: `acute-response`,
              label: `Acute response: stress is the body's physiological mobilization for challenge`,
              summary: `Stress is the acute physiological response system: sympathetic nervous system activation, cortisol release, mobilization for action. Cannon's fight-or-flight (1915), Selye's general adaptation syndrome. Well-mapped physiology. Acute stress is often adaptive and essential for performance; the goal is complete recovery between activations, not avoiding activation. Strength: well-researched physiology, clear interventions (recovery practices). Limit: doesn't explain freeze/shutdown responses; treats stress primarily as activation.`,
            },
            {
              id: `chronic-load`,
              label: `Chronic load: stress is cumulative wear on the body from sustained activation`,
              summary: `Stress is allostatic load: cumulative burden from repeated stress system activation without sufficient recovery. McEwen's framework (1990s+). Persistent elevated cortisol, blood pressure, inflammation; disrupted sleep; hyperreactive amygdala. ACEs research shows childhood/adolescent stress shapes adult health for decades. The right intervention often isn't reducing acute stressors but enabling better recovery; subjective perception, control, and social support buffer load. Strength: explains long-term health effects, fits cumulative data. Limit: harder to address in the moment than acute framework.`,
            },
            {
              id: `polyvagal`,
              label: `Polyvagal: stress involves three nervous system states, not just activation`,
              summary: `Stress responses span three states: ventral vagal (social engagement, calm baseline), sympathetic (fight/flight activation), dorsal vagal (shutdown, freeze, dissociation). Porges's framework (1994+). Explains responses fight-or-flight models can't (freezing, dissociation, numbness, shutdown). Influential in trauma research and clinical practice. State-specific interventions: different practices for activation vs shutdown vs engagement. Strength: explains the full range of human stress responses; clinically useful. Limit: some specific neuroanatomical claims contested by other neuroscientists; the clinical framework is more established than the underlying neuroanatomy.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Walter Cannon's 1915 work introduced "fight or flight" describing the body's response to threat through sympathetic activation. Hans Selye's mid-20th-century work expanded into general adaptation syndrome (alarm/resistance/exhaustion). Foundational physiology framework that has produced extensive research.`,
              source: `Cannon 1915, Selye mid-20th century, ongoing stress physiology research`,
            },
            {
              id: `e2`,
              text: `The acute response system mobilizes resources for action: sympathetic nervous system activation, norepinephrine/epinephrine release, HPA axis activation with cortisol release, heart rate and blood pressure rise, glucose mobilization. Well-mapped, measurable, actionable physiology.`,
              source: `Stress physiology research; mainstream medical understanding`,
            },
            {
              id: `e3`,
              text: `Bruce McEwen developed "allostatic load" in the 1990s to capture cumulative wear from sustained activation. Persistent elevated cortisol produces metabolic disruption, immune suppression, hippocampal atrophy. Persistent elevated blood pressure produces cardiovascular damage. The cumulative wear model fits long-term data better than single-event models.`,
              source: `McEwen 1990s+ and subsequent allostatic load research`,
            },
            {
              id: `e4`,
              text: `The ACEs (Adverse Childhood Experiences) study by Felitti and Anda demonstrated that childhood adversity produces lifelong health effects across many domains. Multiple subsequent studies have replicated and extended these findings. Early stress patterns shape allostatic load across decades.`,
              source: `Felitti and Anda 1998 and subsequent ACEs research`,
            },
            {
              id: `e5`,
              text: `Stephen Porges developed polyvagal theory starting in 1994. Three autonomic states (ventral vagal, sympathetic, dorsal vagal) explain responses fight-or-flight models can't: freezing, dissociation, numbness, shutdown. Influential in trauma research; explains clinical patterns the older models missed.`,
              source: `Porges 1994+ and ongoing polyvagal research`,
            },
            {
              id: `e6`,
              text: `Many people experience stress responses involving freezing, dissociation, or shutdown rather than activation. These don't fit the fight-or-flight model and were often pathologized under that framework. Polyvagal theory reframes them as appropriate adaptive responses to specific situations.`,
              source: `Clinical trauma research; polyvagal-informed practice`,
            },
            {
              id: `e7`,
              text: `Subjective perception matters for stress impact. The same external situation produces different load depending on whether you perceive it as threat or challenge, whether you have control, whether you have social support, whether you have recovery resources. Two people in the same situation can have very different allostatic load.`,
              source: `Stress appraisal research; Lazarus, social support research`,
            },
            {
              id: `e8`,
              text: `Recovery practices work with the system that's designed to activate and recover: slow breathing (especially long exhales), physical movement, social connection, sleep, time in nature. Most adolescents and adults have a recovery problem more than a stressor problem.`,
              source: `Stress recovery research; multiple sources across positions`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions treat stress as primarily a physiological phenomenon to be understood and managed through physiological interventions: breathing, sleep, exercise, recovery practices, vagal tone work. But for many people, particularly adolescents in difficult social or family situations, the real source of chronic stress is social and structural: bullying, family conflict, unsafe environments, economic insecurity, racism, social rejection. Physiological recovery practices don't address these underlying causes; they help the body recover from harms that keep being inflicted. Maybe the most important stress framework isn't physiological at all; it's structural: focusing on what's causing the activation rather than how to manage it. Why think any individual physiological framework gets at what stress is, when so much of what produces stress is social and structural rather than physiological?"`,
            promptInstruction: `In 3-4 sentences, respond. Is stress primarily physiological or structural? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the distinction between acute and chronic stress?`,
              options: [
                `Same thing`,
                `Acute stress: short-term activation in response to specific challenge; mobilizes energy, sharpens attention; often adaptive and essential for performance. Chronic stress: long-term activation that doesn't resolve; produces cardiovascular, metabolic, immune, and mental health damage. Two require different interventions: acute benefits from recovery practices; chronic benefits from addressing underlying stressor`,
                `Random distinction`,
                `Just intensity`,
              ],
              correctIndex: 1,
              explanation: `Treating these as the same thing leads to wrong interventions. Pop content often conflates them: "stress is bad, reduce stress." Real research treats them as distinct phenomena with different mechanisms and different appropriate responses.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the "general adaptation syndrome" (Selye)?`,
              options: [
                `Random model`,
                `Framework from Hans Selye describing body's response to sustained stress in three phases: alarm (initial fight-or-flight activation), resistance (sustained adaptation), exhaustion (system depletion producing damage); foundational stress physiology from mid-20th century; refined by subsequent research but core findings have held up`,
                `Three steps`,
                `Just adaptation`,
              ],
              correctIndex: 1,
              explanation: `Bruce McEwen's later work on allostatic load builds directly on Selye's framework. The exhaustion phase corresponds to what allostatic load research describes as the cumulative wear that produces stress-related disease.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "allostatic load" (McEwen)?`,
              options: [
                `Heavy load`,
                `Cumulative wear on the body from repeated stress system activation without sufficient recovery; different from acute stress (single event); captures sustained burden; signatures include persistent elevated cortisol, blood pressure, inflammation, disrupted sleep, hippocampal atrophy, hyperreactive amygdala; childhood/adolescent stress patterns shape allostatic load across lifespan`,
                `Random concept`,
                `Just exhaustion`,
              ],
              correctIndex: 1,
              explanation: `The ACEs (Adverse Childhood Experiences) study by Felitti and Anda demonstrated childhood adversity produces lifelong health effects. Reducing allostatic load requires both reducing actual stressors AND building recovery resources.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are the three states in polyvagal theory (Porges)?`,
              options: [
                `Random states`,
                `Ventral vagal (social engagement, calm baseline: connected, able to interact), sympathetic (fight/flight activation), dorsal vagal (shutdown, freeze, dissociation, conservation); third state explains responses fight-or-flight models can't; from Stephen Porges starting 1994; influential in trauma research`,
                `Three levels`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `The states form a hierarchy: safety supports ventral vagal; manageable threat activates sympathetic; overwhelming threat or threat that can't be escaped activates dorsal vagal. Recovery moves back up the hierarchy. Some specific neuroanatomical claims are contested; the clinical framework is well-supported.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is the fight-or-flight model considered incomplete?`,
              options: [
                `It's old`,
                `Doesn't explain why some stress responses involve freezing, dissociation, shutdown rather than activation; many people experience these responses, which were often pathologized under the older framework; polyvagal theory added the third response (dorsal vagal/shutdown) which explains responses fight-or-flight couldn't`,
                `Random critique`,
                `Random model`,
              ],
              correctIndex: 1,
              explanation: `Fight-or-flight describes one major response pattern but not the full range of human stress responses. Adding the shutdown state explains why some people freeze rather than fight or flee, why dissociation happens, why some stress responses look like withdrawal rather than activation.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the distinction between "recovery" and "reduction" framing of stress?`,
              options: [
                `Same thing`,
                `Pop framing focuses on stress reduction (eliminate stressors, avoid challenges, minimize); research framing emphasizes recovery (ensure complete return to baseline after activation); many stressors can't be eliminated; system is designed to activate and recover; most adolescents and adults have a recovery problem more than a stressor problem`,
                `Random distinction`,
                `Just words`,
              ],
              correctIndex: 1,
              explanation: `Reduction-focused thinking can become avoidance of normal life challenges that would benefit from acute activation. Recovery-focused thinking accepts appropriate activation while ensuring complete recovery. Sleep, breathing practices (especially slow exhale), physical movement, social connection, time in nature all support recovery.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does ACEs research (Felitti and Anda) show?`,
              options: [
                `Random study`,
                `1998 study and subsequent research demonstrated that Adverse Childhood Experiences (abuse, neglect, household dysfunction) produce lifelong health effects across many domains; provides empirical support for allostatic load model; early stress patterns shape adult health for decades; one of the most influential public health findings of recent decades`,
                `Just childhood`,
                `Random research`,
              ],
              correctIndex: 1,
              explanation: `Multiple subsequent studies have replicated and extended these findings. Early childhood and adolescence are particularly important periods for stress system development. The findings support both individual recovery practices AND broader social interventions to reduce childhood adversity.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does subjective perception matter for stress impact?`,
              options: [
                `It doesn't`,
                `Same external situation produces different load depending on whether you perceive it as threat or challenge, whether you have control, whether you have social support, whether you have recovery resources; two people in same situation can have very different allostatic load based on these factors; both reducing actual stressors AND building buffer resources matter`,
                `Just attitude`,
                `Random factor`,
              ],
              correctIndex: 1,
              explanation: `Stress appraisal research (Lazarus and successors) demonstrated that the same external situation produces different stress responses depending on cognitive appraisal. This isn't "stress is all in your head" (the external stressors are real), but the impact depends partly on the appraisal and resources around them.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All stress is bad and should be eliminated.`,
              correctAnswer: false,
              explanation: `False. Acute stress is often adaptive and essential for performance. Athletes need it, students need it for exams, anyone facing a real challenge needs it. The problem is chronic stress (sustained activation without recovery) and failed recovery from acute stress. The goal isn't avoiding activation; it's ensuring complete recovery between activations.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm so stressed all the time. I need to find ways to feel less stressed." Based on this lesson, what should you point out?`,
              options: [
                `"Try meditation"`,
                `"Two questions before reaching for stress-reduction techniques. First: is this acute or chronic? If you're going through a specific challenging period (exam season, conflict with someone), acute stress is appropriate and the question is recovery between activations, not feeling less activated during them. If it's been going on for months with no specific trigger, you might be in chronic load territory and the underlying ongoing stressor matters more than feel-better techniques. Second: what's the actual source? If it's social or structural (bullying, family conflict, unsafe environment, real ongoing problems), no breathing practice will fix that; those need to be addressed at the source, including with adult help if needed. Stress recovery practices work for what they work for: helping the system return to baseline after appropriate activation. Sleep matters most. Slow breathing especially long exhales. Physical movement. Time in nature. Real social connection. But if stress patterns persist for weeks despite normal recovery practices, that warrants talking to a trusted adult and potentially a mental health professional. Chronic stress and persistent shutdown states can be features of mental health conditions that need more support than self-management."`,
                `"You're fine"`,
                `"Random advice"`,
              ],
              correctIndex: 1,
              explanation: `Real applied stress literacy. Don't just offer techniques; help the friend distinguish acute from chronic, surface vs source. Name what recovery practices actually do and when they're not enough. Include the escalation path (mental health support) because stress patterns are sometimes signals of conditions that need more than self-management.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working understanding of stress? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which state do you experience most often (engagement, activation, shutdown)? What does that produce in your daily life?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who understands their own stress system and uses recovery practices deliberately across decades, what does that change about your long-term health?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific recovery practice you could build into your daily routine. What's stopping you? What would it take to actually do it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument said stress is mostly structural rather than physiological. How much of your own stress comes from situations you didn't choose vs how you respond to them? What does that mean for what should actually change?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `For one week, track which state you're in throughout the day (engagement, activation, shutdown). Notice what triggers shifts. Notice what helps you recover.` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Stress literacy compounds across decades of health. Two paths.`,
          familyActivity: {
            title: `The Family Stress Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions and the recovery-vs-reduction framing. Ask family members about their stress patterns and recovery practices. Most adults have implicit stress frameworks they've never examined; the conversation often surfaces useful patterns. Consider naming family-level recovery practices (no phones at dinner, real weekend rest, time in nature) that benefit everyone's allostatic load.`,
          },
          projectOption: {
            title: `Read McEwen, Porges, or Sapolsky on stress, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Robert Sapolsky's "Why Zebras Don't Get Ulcers" (accessible synthesis of stress physiology and health effects), Bruce McEwen's "The End of Stress as We Know It" (allostatic load framework directly from McEwen), or Stephen Porges's accessible work like "The Polyvagal Theory in Therapy" (polyvagal framework). Apply concepts during the reading period. Write 1,500 words on what you learned.`,
            offerToParent: `Parent: opt your kid into this project. Real stress literacy at 12 protects against decades of chronic stress damage.`,
          },
          identityQuestion: `If you become someone who understands their own stress system, recognizes which state they're in, and uses appropriate recovery practices across decades. What does that change about your long-term physical health, mental health, and capacity to handle real challenges?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes the difference between acute and chronic stress.`,
            `A person who builds recovery into life rather than just trying to eliminate stressors.`,
            `Someone who knows which nervous system state they're in and what helps each.`,
          ],
          saveKey: `identity_responses_lw_11_12_3`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Third Life Wellness lesson done. You now have three serious frameworks for what stress actually is (acute response, allostatic load, polyvagal state regulation), know the major thinkers (Cannon, Selye, McEwen, Porges, Sapolsky, Felitti and Anda), understand the recovery-vs-reduction distinction, and know when stress patterns warrant escalation to professional support. Most pop content treats stress as one thing to be eliminated; you understand it as three things operating at different time scales requiring different interventions. Next time we go into a deeply contested wellness topic: food and nutrition, done carefully, without diet culture. Argument Builder format. Let's go. — Terra`,
          badge: `stress-literate`,
          badgeName: `Stress Literate`,
          xpEarned: 75,
          competencies: [
            `Distinguishes acute from chronic stress and corresponding interventions`,
            `Articulates Cannon's fight-or-flight, Selye's general adaptation syndrome`,
            `Understands McEwen's allostatic load framework and ACEs research`,
            `Knows Porges's polyvagal theory and the three nervous system states`,
            `Applies recovery-vs-reduction framing to stress practices`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Food, Nutrition, And The Diet Culture Problem`,
            hook: `A contested topic done carefully. Three positions on what nutrition actually is.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L03 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
