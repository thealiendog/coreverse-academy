// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L09 — Emotional Regulation
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Emotion Science, Regulation Strategies
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (suppression / rumination / social-emotional contagion)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l09-v1";

const LIFEWELLNESS_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-9`,
      title: `Emotional Regulation`,
      duration: 35,
      xpReward: 75,
      badge: `emotion-literate`,
      badgeName: `Emotion Literate`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, emotional regulation is one of the most useful wellness skills you can build. Real research on emotions has dramatically changed across the last 30 years. The old framing treated emotions as fixed biological responses to be controlled or suppressed; recent research treats emotions as constructed experiences that can be reappraised, named, and worked with in much more sophisticated ways. Today we work through three real situations involving emotional regulation: a kid who suppresses emotions and pays a cost, a kid who ruminates and spirals, and a kid dealing with social-emotional contagion in a friend group. By the end you'll have specific research-backed strategies (from James Gross, Marc Brackett, and the broader emotion regulation literature) that are dramatically more useful than the pop framings most adults absorbed.`,
          headline: `Emotional Regulation`,
          subtitle: `Three real situations. Research from Gross, Brackett, emotion regulation literature.`,
          visual: `/voyager-assets/life-wellness/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Emotions Actually Are`,
          paragraphs: [
            `Start with the basic picture from current research, which differs from what most adults absorbed. Emotions aren't fixed biological responses universal across people. They're constructed experiences that emerge from biological signals, cognitive appraisal, contextual cues, and learned categories.`,
            `Lisa Feldman Barrett at Northeastern University has done some of the most influential work in this area. Her constructed emotion theory argues that what we call "emotions" are concepts the brain uses to make sense of bodily signals in context. The same bodily state (elevated heart rate, sweating, focused attention) might be experienced as fear, anxiety, excitement, anger, or arousal depending on context and interpretation. This isn't to say emotions aren't real; it's to say they're more constructed and more interpretable than the older "basic emotions" framework suggested.`,
            `Practical implications. If emotions are constructed, then how we name and interpret bodily signals shapes what we experience. Calling racing-heart-before-presentation "anxiety" produces different experience than calling it "anticipation" or "excitement"; the bodily state is similar, the experience differs based on interpretation. This isn't denying that the experience is real; it's recognizing that interpretation is part of what produces the experience.`,
            `Another foundational researcher: James Gross at Stanford, who developed the influential process model of emotion regulation. Gross identified specific strategies people use to regulate emotion (situation selection, situation modification, attentional deployment, cognitive change/reappraisal, response modulation/suppression). The strategies have different consequences. Some (like reappraisal) generally produce better outcomes than others (like suppression). The research base behind the model is substantial.`,
            `For 11-12 year olds specifically, this matters because adolescence involves dramatic emotional development. The capacity for sophisticated emotion regulation is still building; the adult patterns adolescents establish often persist for decades. Learning that emotions are workable (not just things that happen to you) and that specific strategies have specific effects is one of the highest-leverage life skills available.`,
          ],
          image: `/voyager-assets/life-wellness/l09-s1-emotions.webp`,
          imageCaption: `Current research: emotions as constructed experiences. Barrett's constructed emotion theory. Gross's process model. Emotions are workable; strategies have specific effects.`,
          vocab: [
            {
              word: `constructed emotion (Barrett) + process model (Gross)`,
              definition: `Two foundational frameworks. Barrett's constructed emotion theory: emotions are concepts the brain uses to make sense of bodily signals in context; same bodily state can be experienced as different emotions depending on interpretation. Gross's process model of emotion regulation: identifies specific strategies (situation selection, situation modification, attentional deployment, reappraisal, suppression); strategies have different consequences. Together: emotions are constructed and workable; how we name and interpret bodily signals matters; specific strategies have specific effects.`,
              audioPrompt: `Constructed emotion theory and the process model of emotion regulation are two foundational frameworks from current emotion research, {name}. Lisa Feldman Barrett at Northeastern University developed constructed emotion theory. The argument: what we call emotions are concepts the brain uses to make sense of bodily signals in context. The same bodily state (elevated heart rate, sweating, focused attention) might be experienced as fear, anxiety, excitement, anger, or arousal depending on context and interpretation. Emotions are constructed and interpretable, not fixed biological responses universal across people. James Gross at Stanford developed the process model of emotion regulation. Gross identified specific strategies people use to regulate emotion: situation selection (avoiding situations that produce difficult emotions), situation modification (changing what's happening), attentional deployment (where you focus), cognitive change or reappraisal (changing how you interpret), and response modulation including suppression (changing your expression or experience after emotion is generated). The strategies have different consequences. Reappraisal generally produces better outcomes than suppression.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Strategies That Work And Strategies That Backfire`,
          paragraphs: [
            `Gross's process model and subsequent research have identified specific patterns in how emotion regulation strategies work or fail. The findings have practical implications for what to actually do with difficult emotions.`,
            `Reappraisal generally works well. Reappraisal involves changing how you interpret a situation, which changes the emotion the situation produces. The kid told to do an unwanted presentation can reappraise from "this is going to be terrible" to "this is a chance to practice talking in front of people, which I'll need across my life." The bodily state stays similar (some activation); the experience differs (apprehension instead of dread). Research consistently shows reappraisal produces better long-term outcomes than suppression: less negative emotion, better relationships, less depressive symptomatology, better physical health.`,
            `Suppression often backfires. Suppression involves trying to hide or push down emotions after they've been generated. Research consistently shows suppression has costs: doesn't actually reduce the underlying emotional state (often increases physiological arousal), makes relationships harder (people perceive suppressors as less authentic and harder to connect with), uses cognitive resources that could go elsewhere, and is associated with worse mental health outcomes when used habitually. Suppression isn't always wrong (situational use can be appropriate); habitual use is the problem.`,
            `Rumination is its own category of failure. Rumination is repetitive, passive focus on negative emotional content without productive engagement. Susan Nolen-Hoeksema's research established that rumination is a major risk factor for depression and anxiety, particularly in adolescents and women. The pattern: dwelling on what's wrong, asking "why do I feel this way" repeatedly without arriving anywhere, replaying difficult events. Rumination feels productive ("I'm processing this") but typically isn't; it deepens the difficult state rather than resolving it.`,
            `Distinguishing reflection from rumination. Reflection has structure, leads somewhere, examines a specific question, and arrives at understanding or action. Rumination is repetitive, circular, doesn't reach conclusions, and intensifies the difficult emotion rather than resolving it. The difference matters: reflection is useful; rumination is corrosive. Most adolescents who think they're "processing" their feelings are ruminating; teaching the difference is itself a high-leverage skill.`,
            `Other research-supported strategies. Naming emotions specifically (rather than vague "I feel bad") reduces their intensity; Matthew Lieberman's research has shown that affect labeling produces measurable reduction in amygdala activation. Marc Brackett's RULER framework at Yale develops emotional intelligence skills explicitly: Recognize, Understand, Label, Express, Regulate. Specific physical practices (slow breathing especially long exhales) shift physiological state, which shifts emotional experience.`,
          ],
          image: `/voyager-assets/life-wellness/l09-s2-strategies.webp`,
          imageCaption: `Reappraisal generally works. Suppression backfires. Rumination is corrosive (Nolen-Hoeksema). Affect labeling reduces amygdala activation (Lieberman). RULER framework (Brackett).`,
          vocab: [
            {
              word: `emotion regulation strategies (research-based)`,
              definition: `Specific strategies with specific consequences. Reappraisal (changing interpretation) generally produces better outcomes: less negative emotion, better relationships, better health. Suppression (hiding/pushing down) has costs: doesn't reduce underlying state, harms relationships, uses cognitive resources. Rumination (repetitive passive focus on negative content) is corrosive (Nolen-Hoeksema); risk factor for depression and anxiety. Naming/affect labeling reduces amygdala activation (Lieberman). RULER framework (Brackett, Yale): Recognize, Understand, Label, Express, Regulate.`,
              audioPrompt: `Research has identified specific emotion regulation strategies with specific consequences, {name}. Reappraisal involves changing how you interpret a situation, which changes the emotion the situation produces. Generally produces better outcomes: less negative emotion, better relationships, less depressive symptomatology, better physical health. Suppression involves trying to hide or push down emotions after they've been generated. Often backfires: doesn't actually reduce the underlying emotional state, often increases physiological arousal, makes relationships harder. Rumination is repetitive, passive focus on negative emotional content without productive engagement. Susan Nolen-Hoeksema's research established rumination as major risk factor for depression and anxiety. Rumination feels productive but typically isn't; deepens difficult states rather than resolving them. Naming emotions specifically reduces their intensity: Matthew Lieberman's research on affect labeling shows measurable reduction in amygdala activation. Marc Brackett's RULER framework at Yale develops emotional intelligence skills explicitly: Recognize, Understand, Label, Express, Regulate.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Emotions Are Information vs Noise`,
          paragraphs: [
            `One sophisticated distinction in emotion research: when emotions are accurate information about your situation vs when they're noise that shouldn't drive decisions.`,
            `Emotions often contain information worth attending to. Anxiety before a real threat is information. Anger at being treated unfairly is information. Grief after loss is information. Discomfort about a relationship problem is information. Trying to suppress or reappraise away accurate emotional information loses the data the emotion was conveying. Some emotional content is the right response to the situation and shouldn't be regulated away.`,
            `Emotions can also be inaccurate or disproportionate to the situation. Panic during a routine school presentation is disproportionate. Anxiety about an irrational possibility is inaccurate. Sadness driven by depression rather than current circumstances can outlast its cause. In these cases, the emotion isn't pointing to something needing response; it's noise that's interfering with appropriate response.`,
            `Distinguishing accurate from inaccurate emotion is partly a skill. Susan David, in her work on "emotional agility," emphasizes pausing to examine whether emotional content is information about the situation or noise from earlier patterns. The question "what is this feeling telling me?" sometimes reveals real information; sometimes reveals patterns from the past that aren't fitting the current situation.`,
            `For adolescents specifically, this distinction has particular relevance. Adolescent emotions can be intense and feel definitive. Sometimes they're accurate information (a relationship really is unhealthy; a school environment really is hostile; a decision really is wrong). Sometimes they're disproportionate to the current situation (a small social slight feels catastrophic; an academic setback feels permanent; a fight with a parent feels terminal). Building skill at distinguishing requires practice and often outside perspective.`,
            `One specific failure mode: dismissing all difficult emotions as overreaction. Many adults respond to adolescent emotions with "you're overreacting" or "it's not that bad." This often misses real information the emotion was conveying. The corrective isn't to validate all emotional intensity as accurate; it's to take emotions seriously enough to examine what they're communicating before deciding whether they're information or noise.`,
          ],
          image: `/voyager-assets/life-wellness/l09-s3-information.webp`,
          imageCaption: `Emotions as information vs noise. Susan David's emotional agility. Ask "what is this feeling telling me?" Some emotions accurate; some inaccurate. Building skill at distinguishing matters.`,
          vocab: [
            {
              word: `emotions as information vs noise`,
              definition: `Important distinction. Emotions often contain accurate information: anxiety before real threat, anger at unfair treatment, grief after loss, discomfort about real relationship problems. Trying to suppress accurate emotional information loses the data. Emotions can also be inaccurate or disproportionate: panic at routine situations, anxiety about irrational possibilities, depression-driven sadness outlasting circumstances. Susan David's "emotional agility" emphasizes pausing to examine: "what is this feeling telling me?" Sometimes reveals real information; sometimes reveals old patterns.`,
              audioPrompt: `Emotions as information versus noise is an important distinction in emotion regulation, {name}. Emotions often contain accurate information worth attending to. Anxiety before a real threat is information. Anger at being treated unfairly is information. Grief after loss is information. Discomfort about a relationship problem is information. Trying to suppress or reappraise away accurate emotional information loses the data the emotion was conveying. Emotions can also be inaccurate or disproportionate to the situation. Panic during a routine school presentation. Anxiety about an irrational possibility. Sadness driven by depression rather than current circumstances. In these cases, the emotion isn't pointing to something needing response; it's noise that's interfering with appropriate response. Distinguishing accurate from inaccurate emotion is partly a skill. Susan David in her work on emotional agility emphasizes pausing to examine whether emotional content is information about the situation or noise from earlier patterns. The question "what is this feeling telling me?" sometimes reveals real information; sometimes reveals patterns from the past that aren't fitting the current situation.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Social-Emotional Dynamics`,
          paragraphs: [
            `Emotions are partly individual but also deeply social. The emotional climate of a friend group, family, or social environment shapes the emotions individuals experience. Understanding the social dimension is part of mature emotion regulation.`,
            `Emotional contagion is real and documented. Research has shown that emotions spread through social networks, particularly close ones. Christakis and Fowler's research on the spread of happiness, depression, and other states through social networks documented measurable effects across multiple degrees of separation. Specific friend groups can develop emotional climates (anxious, depressed, dramatic, calm) that pull individuals toward those states.`,
            `For adolescents, the social dimension is particularly intense. Adolescent social networks involve high emotional reactivity and high mutual influence. A friend group going through a dramatic phase pulls members toward dramatic emotional patterns. A friend group with stable adults and supportive dynamics produces different emotional climate than one without. The peers you spend time with don't just keep you company; they shape your emotional life.`,
            `Specific patterns to recognize. Co-rumination: friend groups that bond through repeatedly discussing problems often deepen negative emotional states for everyone involved without producing resolution. Research by Amanda Rose and others has documented this pattern, particularly in adolescent girls' friendships. The friendship can feel close (mutual sharing of difficulty) while the emotional cost is real (depressive and anxious symptoms increasing for all involved). The pattern isn't malicious; it emerges from connection that takes a problematic form.`,
            `What helps in social-emotional contexts. Boundaries that protect emotional baseline while maintaining friendship: you can be a good friend without absorbing every emotion someone shares with you. Recognizing when a friend group's emotional climate is consistently dragging you down. Diversifying social connections so no single friend group dominates emotional life. Knowing the difference between supporting a friend through a difficult time and being pulled into a chronic negative emotional pattern.`,
            `One critical pattern. Some friend groups develop competitive negative emotion: who has the worst time, who's most struggling, who's most distressed. The dynamic feels like solidarity but functions as mutual reinforcement of negative emotional patterns. Recognizing this pattern as something other than connection, and distinguishing it from real mutual support, is a sophisticated emotional skill that protects against significant mental health costs.`,
          ],
          image: `/voyager-assets/life-wellness/l09-s4-social.webp`,
          imageCaption: `Emotional contagion documented (Christakis, Fowler). Co-rumination patterns in friend groups (Rose). Diversifying connections, recognizing chronic vs supportive sharing matters.`,
          vocab: [
            {
              word: `social emotional dynamics (contagion, co-rumination)`,
              definition: `Emotions spread through social networks (Christakis and Fowler research on happiness, depression spread). Friend groups develop emotional climates. Co-rumination (Rose et al): friend groups bonding through repeatedly discussing problems often deepen negative states for all involved without producing resolution; particularly documented in adolescent girls' friendships. Recognizing chronic vs supportive sharing matters. Some friend groups develop competitive negative emotion that functions as mutual reinforcement; distinguishing from real mutual support is sophisticated emotional skill.`,
              audioPrompt: `Social emotional dynamics are real and documented in research, {name}. Christakis and Fowler's research on the spread of happiness, depression, and other states through social networks documented measurable effects across multiple degrees of separation. Emotions spread through close social connections. Specific friend groups develop emotional climates (anxious, depressed, dramatic, calm) that pull individuals toward those states. For adolescents specifically, the social dimension is particularly intense. Co-rumination is a specific pattern documented by Amanda Rose and others: friend groups that bond through repeatedly discussing problems often deepen negative emotional states for everyone involved without producing resolution. The friendship can feel close because of the mutual sharing of difficulty while the emotional cost is real. The pattern isn't malicious; it emerges from connection taking a problematic form. Recognizing it as something other than connection, and distinguishing it from real mutual support, is a sophisticated emotional skill that protects against significant mental health costs.`,
            },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Cases`,
          paragraphs: [
            `In the cases that follow, three young people face different emotion regulation situations. Each has an intuitive response and a research-informed response based on the strategies you've read about.`,
            `One framing as you work. The cases are specific, but the underlying skills generalize: distinguishing reflection from rumination; using reappraisal where it serves; recognizing when emotions are information vs noise; managing social-emotional contagion; using affect labeling and other research-supported strategies appropriately.`,
            `Another framing. Most adults around you weren't taught these distinctions explicitly. They absorbed pop framings: "control your emotions" (often code for suppression), "process your feelings" (often code for rumination), "be authentic" (often code for emotional expression without regulation). The research-based picture is more sophisticated than any of these and produces better outcomes than any of them used alone.`,
            `One reminder about escalation. If emotions are consistently overwhelming, regulation strategies aren't working, social dynamics feel impossible to navigate, or any of the mental health warning signs from L06 are present, that warrants talking to a trusted adult and possibly a professional. Emotional regulation is a skill that can be built, but if the situation is beyond skill-building (clinical mental health conditions, severe stressors, trauma), professional support is what works.`,
            `One last framing. You're 12. The emotional regulation patterns you build now compound across decades. Most adults are working with patterns established in adolescence; adults who developed sophisticated patterns then often have dramatically better mental health and relationships than adults who absorbed pop framings. Building deliberate framework now is one of the highest-leverage life skills available.`,
          ],
          image: `/voyager-assets/life-wellness/l09-s5-before.webp`,
          imageCaption: `Three cases. Pop framings (control, process, be authentic) are incomplete. Research framework integrates reappraisal, naming, social literacy, escalation when needed.`,
          vocab: [
            {
              word: `integrated emotional regulation skill`,
              definition: `Mature emotional regulation integrates multiple research-based strategies. Reappraisal (changing interpretation) where it serves. Affect labeling (naming specifically) reduces intensity. Distinguishing reflection (productive engagement) from rumination (circular dwelling). Recognizing emotions as information vs noise. Managing social-emotional contagion. Knowing when skill-building isn't enough and professional support is appropriate. Most adults absorbed pop framings (suppression, rumination labeled as "processing," authenticity without regulation) that produce worse outcomes than the research-based picture.`,
              audioPrompt: `Integrated emotional regulation skill is what mature practice involves, {name}. It integrates multiple research-based strategies rather than relying on any single approach. Reappraisal (changing how you interpret a situation) where it serves the situation. Affect labeling (naming emotions specifically) to reduce their intensity (Lieberman's research). Distinguishing reflection (productive engagement that leads somewhere) from rumination (circular dwelling that deepens difficult states without resolution). Recognizing emotions as information versus noise; some emotions are accurate signals about real situations and shouldn't be regulated away. Managing social-emotional contagion; friend group emotional climates affect individual emotion. Knowing when skill-building isn't enough and professional support is appropriate. Most adults absorbed pop framings: suppression presented as control, rumination labeled as processing, authenticity without regulation. These pop framings produce worse outcomes than the research-based picture. Building deliberate framework now compounds across decades.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l09-case-study`,
          type: `case-study`,
          headline: `Three Emotion Regulation Situations`,
          intro: `{name}, three real situations involving emotional regulation. For each, identify what would actually serve the person based on research.`,
          cases: [
            {
              id: `case-1`,
              title: `Suppression Pattern`,
              context: `Alex has learned, from family and culture, that emotions should be controlled. When difficult feelings come up (anger, sadness, frustration, fear), Alex pushes them down, projects calm, and tries to keep going. Over time, Alex notices: stomach problems, trouble sleeping, irritability that comes out at unexpected moments, distance in close relationships, a vague sense of not really knowing what they feel. From the outside, Alex looks well-regulated. From the inside, something is wrong. Alex thinks they just need to "manage stress better" and try harder.`,
              question: `What's actually going on with Alex?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Alex is doing the right thing. Controlling emotions is mature; the body symptoms are unrelated stress that needs better stress management.`,
                  outcome: `This misses what's actually happening. Alex isn't regulating emotions; Alex is suppressing them. The two look similar from outside but have very different consequences. Suppression research (Gross and others) shows specifically what Alex is experiencing: physical symptoms (stomach, sleep), unexpected emotional leakage (irritability), relational distance (suppressors are perceived as less authentic, harder to connect with), and disconnection from one's own emotional experience. The pattern isn't a stress management problem; it's a regulation strategy problem. "Try harder at suppression" deepens the harm.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Alex is in a suppression pattern that research shows has predictable costs: physical symptoms, unexpected emotional leakage, relational distance, disconnection from internal experience. The shift Alex needs isn't more suppression but a different regulation approach. Specifically: begin practicing affect labeling; when difficult emotions arise, name them specifically rather than pushing them down ("I'm feeling angry about this thing specifically" instead of "fine"); learn reappraisal by examining the interpretations that are producing the emotional response and consider whether other interpretations fit better; practice talking with at least one trusted person about emotional experience; consider whether the suppression pattern emerged from family or cultural messages that emotions are weakness, and whether those messages are accurate (mostly they're not). If physical symptoms persist or emotional disconnection feels severe, this is worth talking to a school counselor or therapist about; chronic suppression patterns established in adolescence can be hard to shift without support, and therapy is genuinely useful here.`,
                  outcome: `This is the research-informed approach. Suppression research is unambiguous about the costs and the alternative approaches that work better. The specific suggestions (affect labeling, reappraisal, talking with someone, examining the source of the pattern) are research-supported. The escalation path (school counselor, therapist) is appropriate because patterns established in adolescence are harder to shift later, and professional support produces better outcomes than DIY change for entrenched patterns. The reframing (from "stress management problem" to "regulation strategy problem") is itself a critical shift.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Alex should let all emotions out without filter. Authentic expression of everything is the answer.`,
                  outcome: `This goes too far in the other direction and misses what regulation actually involves. Unfiltered expression of all emotions in all contexts isn't the alternative to suppression; reappraisal, naming, and selective expression with appropriate context are. The "be authentic about everything always" framing produces its own problems: relational damage, emotional contagion that hurts others, treating one's own emotional reactions as more important than others' experience. Research-based regulation involves choosing strategies appropriate to the situation, not abandoning all regulation.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates the costs of habitual suppression and the research-supported alternatives. Suppression is appropriate situationally but corrosive habitually. The shift involves specific learnable strategies (affect labeling, reappraisal, selective expression) rather than either pure suppression or pure expression. Patterns established in adolescence are harder to shift later; professional support is appropriate when patterns are entrenched. The reframing from "stress management problem" to "regulation strategy problem" is critical because it changes what intervention to use.`,
            },
            {
              id: `case-2`,
              title: `Rumination Spiral`,
              context: `Jordan had a conflict with a close friend two weeks ago. The conflict has been mostly resolved; they've talked, both apologized for things, the friendship continues. But Jordan keeps thinking about it: replaying the original incident, going through what they could have said differently, imagining how the friend really feels, wondering if the friendship is actually okay. The thinking happens for hours each day, particularly at night. Jordan feels increasingly bad. Their other relationships, schoolwork, and sleep are starting to suffer. Jordan tells themselves they're "processing the conflict" and "trying to understand what happened."`,
              question: `What's actually going on with Jordan?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Jordan is doing important emotional work. Processing conflict thoroughly is healthy. The work just needs to continue until it's complete.`,
                  outcome: `This misnames rumination as processing. The two look similar from outside but differ in critical ways. Reflection has structure, examines specific questions, leads somewhere, arrives at understanding or decisions. Rumination is repetitive, circular, doesn't reach conclusions, intensifies difficult emotion rather than resolving it. Nolen-Hoeksema's research established rumination as a major risk factor for depression and anxiety; calling it "processing" doesn't make it productive. Jordan's life is deteriorating (sleep, other relationships, school); productive emotional work doesn't typically deteriorate other life domains. The "processing" label is exactly how rumination justifies itself.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Jordan is ruminating, not processing. Specific markers: the situation is already resolved (apologies made, friendship continuing); the thinking is repetitive and circular rather than leading to new understanding; it's happening for hours each day; life is deteriorating (sleep, other relationships, school). Rumination is corrosive, not productive (Nolen-Hoeksema's research). Specific shifts: when the rumination thoughts come up, recognize them as rumination, not processing; intentionally redirect to something else (a specific activity, a different topic, physical movement). Make a specific list of what's actually been concluded and what's actually still unresolved; usually almost nothing is genuinely unresolved when rumination is in full swing. If unresolved questions remain, address them directly with the friend rather than rehearsing them mentally. Limit "thinking about the conflict" to specific bounded times (15-20 minutes, then redirect). If rumination patterns persist despite these interventions, that warrants talking to a school counselor or therapist; chronic rumination is a depression risk factor that benefits from professional support.`,
                  outcome: `This is the research-informed approach. Naming the pattern as rumination (not processing) is itself a critical shift; rumination justifies itself as productive work. The specific interventions (pattern recognition, redirection, examining what's actually unresolved, bounded reflection time) are research-supported approaches. The escalation path matters because chronic rumination is a real risk factor for depression and anxiety that benefits from professional support when it's not responding to self-management.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Jordan should just stop thinking about it. Push the thoughts away every time they come up.`,
                  outcome: `This is suppression of thoughts rather than addressing rumination, and it doesn't work well. Thought suppression research (Wegner and others) shows that trying to push thoughts away often makes them more frequent and intrusive (the "white bear" effect). The right approach to rumination isn't suppression but redirection toward something specific, examination of what's actually unresolved, and bounded engagement rather than open-ended dwelling.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates rumination disguised as processing. The "I'm processing" framing is exactly how rumination justifies itself. Specific markers distinguish rumination from reflection: repetitive vs structured, circular vs leading somewhere, doesn't conclude vs reaches understanding, deteriorates other life domains vs supports them. Research-supported interventions involve recognition, redirection, bounded engagement, and escalation when patterns persist. Chronic rumination is a real depression risk factor; treating it seriously rather than as "important work" matters.`,
            },
            {
              id: `case-3`,
              title: `Friend Group Emotional Climate`,
              context: `Sam's friend group has shifted over the past 6 months. They used to do varied things together; now most interactions involve detailed discussion of who's struggling most, who's most depressed, whose family situation is worst. The friends bond through mutual sharing of difficulty; the more someone is suffering, the more attention and care they get. Sam initially found the closeness meaningful but has noticed: their own mood has gotten worse; they feel they need to have struggles to share to fit in; they've started exaggerating minor difficulties to participate; they feel exhausted after hanging out with this group; their parents have noticed they seem more depressed.`,
              question: `What's actually going on with Sam?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Sam has found a meaningful friend group with real emotional intimacy. Stay with them; their depth of sharing is rare and valuable.`,
                  outcome: `This conflates intimacy with co-rumination. The friend group sounds like it's developed competitive negative emotion: who's struggling most, who deserves the most concern. This pattern is documented in research (Rose et al on co-rumination, particularly in adolescent girls' friendships) as something other than healthy intimacy. The signs Sam is noticing are specific to co-rumination harm: own mood worsening, needing struggles to fit in, exaggerating difficulties to participate, exhaustion after interaction. The friend group feels close because of mutual sharing of difficulty but functions as mutual reinforcement of negative emotional patterns.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Sam's friend group has developed a co-rumination pattern that's harming everyone involved, including Sam. Co-rumination is when friend groups bond through repeatedly discussing problems without producing resolution; feels close but deepens negative emotional states for everyone (Rose et al research, particularly documented in adolescent girls' friendships). The specific signs are textbook: mood worsening, performing struggle to fit in, exaggerating difficulties to participate, exhaustion after interaction. What might serve Sam: diversifying social connections so this group isn't the only one (different friend groups produce different emotional climates); changing the kinds of interactions with this group when possible (suggesting different activities, refusing to participate in the competitive negative emotion); recognizing that this friend group isn't bad-faith malicious but is in a pattern that's harming everyone; talking with a trusted adult about what's happening (school counselor can be useful). If Sam is showing signs of worsening depression beyond friend group context, that warrants seeing a doctor or therapist; co-rumination can be both cause and symptom of depression patterns.`,
                  outcome: `This is the research-informed approach. Naming the pattern as co-rumination (not intimacy) is critical; the friend group feels meaningful precisely because the bonding feels deep. The interventions (diversifying connections, changing interaction patterns, recognizing the dynamic without demonizing it, professional support if depression patterns persist) are appropriate to the actual situation. The "different friend groups produce different emotional climates" point matters because adolescents often don't realize they have power to shape which influences operate on them.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Sam should just leave the friend group entirely and cut them off. They're toxic.`,
                  outcome: `This goes too far. The friend group isn't operating in bad faith; they're in a pattern that's harming everyone, themselves included. "Toxic" framing and cutting people off misses both the genuine connection that exists and the possibility of changing the interaction pattern rather than the relationships. Some friend groups can shift co-rumination patterns when one member changes how they participate; abandoning friendships should be a later option, not the first one. The diversifying-connections approach (without cutting off) usually serves better.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates co-rumination as documented social-emotional pattern (Rose et al). The friend group feels close precisely because of the dynamic that's harming everyone. The intervention isn't framing the group as toxic or abandoning friendships; it's recognizing the pattern, diversifying social connections, changing interaction patterns where possible, and seeking professional help if depression patterns persist. The deeper skill (recognizing that friend group emotional climates shape your own emotional life and that you have some agency over which influences operate on you) is one of the most important social-emotional skills available.`,
            },
          ],
          reflectionPrompt: `All three cases involve people misnaming what they're doing (control vs suppression, processing vs rumination, intimacy vs co-rumination). What's common about how research-based framings differ from intuitive framings?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is Barrett's constructed emotion theory?`,
              options: [
                `Random theory`,
                `Lisa Feldman Barrett at Northeastern: what we call emotions are concepts the brain uses to make sense of bodily signals in context; same bodily state can be experienced as different emotions depending on interpretation; emotions are constructed and interpretable, not fixed biological responses universal across people; how we name and interpret bodily signals shapes what we experience`,
                `Just feelings`,
                `Random model`,
              ],
              correctIndex: 1,
              explanation: `This isn't denying that emotions are real; it's recognizing that interpretation is part of what produces the experience. Practical implication: how we name racing-heart-before-presentation ("anxiety" vs "excitement") shapes the experience even when bodily state is similar.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is Gross's process model of emotion regulation?`,
              options: [
                `Random`,
                `James Gross at Stanford developed influential model identifying specific strategies: situation selection (avoiding situations that produce difficult emotions), situation modification (changing what's happening), attentional deployment (where you focus), cognitive change/reappraisal (changing interpretation), response modulation including suppression; strategies have different consequences (reappraisal generally produces better outcomes than suppression)`,
                `Just five steps`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The model is influential because it gets specific about which strategies work when. Reappraisal generally produces better outcomes than suppression across measures: less negative emotion, better relationships, less depressive symptomatology, better physical health.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the research show about reappraisal vs suppression?`,
              options: [
                `Same`,
                `Reappraisal (changing interpretation): generally produces better long-term outcomes: less negative emotion, better relationships, less depressive symptomatology, better physical health. Suppression (hiding/pushing down after generated): often backfires; doesn't reduce underlying state (often increases physiological arousal), harms relationships, uses cognitive resources, associated with worse mental health when habitual; situational use sometimes appropriate, habitual use is the problem`,
                `Random comparison`,
                `Suppression wins`,
              ],
              correctIndex: 1,
              explanation: `The research is consistent across many studies. Reappraisal is the more useful default strategy for habitual emotion regulation. Suppression has specific situational uses (controlling expression in inappropriate moments) but as habit produces predictable costs.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did Nolen-Hoeksema's research establish about rumination?`,
              options: [
                `Random`,
                `Rumination (repetitive, passive focus on negative emotional content without productive engagement) is a major risk factor for depression and anxiety, particularly in adolescents and women; feels productive ("I'm processing this") but typically isn't; deepens difficult states rather than resolving them; distinct from reflection which is structured, leads somewhere, examines specific questions, arrives at understanding`,
                `Just thinking`,
                `Random research`,
              ],
              correctIndex: 1,
              explanation: `The "I'm processing" framing is exactly how rumination justifies itself. The distinction between reflection (productive) and rumination (corrosive) is critical because they look similar from outside but have opposite effects. Adolescent rumination patterns predict adult depression risk.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is Lieberman's affect labeling research?`,
              options: [
                `Random`,
                `Matthew Lieberman's research showed that naming emotions specifically reduces their intensity; affect labeling produces measurable reduction in amygdala activation; "I'm feeling angry about this specifically" reduces the intensity more than vague awareness; one of the simplest research-supported emotion regulation interventions; works through specific neurological mechanisms`,
                `Just naming`,
                `Random study`,
              ],
              correctIndex: 1,
              explanation: `The intervention is simple but powerful. Specific naming activates language and prefrontal regions that down-regulate amygdala activation. Most adolescents have been taught to describe emotions vaguely ("I feel bad"); learning specific naming is a discrete skill with measurable effects.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the distinction between emotions as information vs noise?`,
              options: [
                `Same`,
                `Emotions often contain accurate information: anxiety before real threat, anger at unfair treatment, grief after loss, discomfort about real problems. Emotions can also be inaccurate or disproportionate: panic at routine situations, anxiety about irrational possibilities, depression-driven sadness outlasting circumstances. Susan David's "emotional agility": pause to examine "what is this feeling telling me?"`,
                `Random distinction`,
                `Just feelings`,
              ],
              correctIndex: 1,
              explanation: `Both errors are common: dismissing all difficult emotions as overreaction loses real information; treating all emotional intensity as accurate prevents recognizing patterns that don't fit current situations. Building skill at distinguishing requires practice and often outside perspective.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is co-rumination?`,
              options: [
                `Random`,
                `Pattern documented by Amanda Rose and others, particularly in adolescent girls' friendships: friend groups that bond through repeatedly discussing problems often deepen negative emotional states for everyone involved without producing resolution; feels close because of mutual sharing of difficulty; functions as mutual reinforcement of negative patterns; not malicious; emerges from connection taking a problematic form`,
                `Just complaining`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `Recognizing co-rumination as something other than healthy intimacy is critical because the dynamic feels like deep connection. Diversifying social connections, changing interaction patterns, and seeking professional help if depression patterns persist are research-supported responses.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the RULER framework (Brackett)?`,
              options: [
                `Random tool`,
                `Marc Brackett at Yale developed framework for emotional intelligence skills: Recognize (notice emotions in self and others), Understand (what they signal and what produced them), Label (name them specifically), Express (communicate them appropriately), Regulate (manage them effectively); systematic skill-building rather than vague emotion-related advice; backed by research and used in schools`,
                `Just letters`,
                `Random model`,
              ],
              correctIndex: 1,
              explanation: `RULER is one of the more systematic frameworks for building emotional intelligence skills. Each letter is a distinct skill that can be practiced. Used in many schools as part of social-emotional learning curricula. Backed by research on outcomes.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: "Just be authentic and express all your feelings always" is the research-supported approach to emotion regulation.`,
              correctAnswer: false,
              explanation: `False. Unfiltered expression of all emotions in all contexts isn't the research-supported alternative to suppression. Research-supported regulation involves reappraisal, affect labeling, situational appropriateness, and choosing strategies based on context. "Authentic about everything always" produces its own problems including relational damage and emotional contagion.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I just can't stop thinking about that thing that happened. I've been processing it for weeks. I think I just need to keep working through it until I'm done." Based on this lesson, what should you point out?`,
              options: [
                `"Keep going"`,
                `"That might be rumination, not processing. Specific question: is the thinking structured (leading somewhere, examining specific questions, arriving at understanding) or repetitive (circular, not concluding, intensifying the difficult emotion)? If it's the first, that's reflection and can be productive. If it's the second, that's rumination: a documented risk factor for depression and anxiety per Nolen-Hoeksema's research. The 'I'm processing' framing is exactly how rumination justifies itself. Specific check: has anything actually concluded after weeks of thinking? Is your sleep, schoolwork, or other relationships getting worse from the time spent? If rumination is happening, the research-supported response is recognition (name it as rumination), bounded engagement (limit it to specific times), redirection to other activities, and examining what's actually unresolved (usually almost nothing when rumination is in full swing). Affect labeling (specific naming of what you're feeling) helps. If rumination persists despite these, that's worth talking to a school counselor or therapist about; chronic rumination is a real risk factor that benefits from professional support."`,
                `"Just stop"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied emotional regulation literacy. Don't dismiss; don't endorse the "processing" framing reflexively. Apply the distinction. Suggest specific research-supported interventions. Include the escalation path. The reframing from "important emotional work" to "potentially harmful pattern that needs different response" is itself the major skill.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for emotion regulation? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which strategies do you default to (suppression, rumination, reappraisal, naming)? What's the cost of your defaults?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with sophisticated emotion regulation across decades, what does that change about your mental health, relationships, work, and life?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific emotional situation you've been navigating. Apply the research strategies. What would change with reappraisal? With affect labeling? With recognizing information vs noise?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where the research framework doesn't apply well? When is suppression appropriate? When does reappraisal undermine accurate information?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `For one week, practice specific affect labeling whenever a strong emotion comes up. Note whether the intensity changes with naming.` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Emotional regulation patterns at 12 compound across decades. Two paths.`,
          familyActivity: {
            title: `The Family Emotion Conversation`,
            duration: `45 minutes`,
            description: `Share the framework: research on suppression vs reappraisal, rumination vs reflection, affect labeling, emotions as information vs noise, social-emotional dynamics. Most adults absorbed pop framings (control emotions, process feelings, be authentic) without sophisticated distinctions. The conversation often surfaces specific family patterns (suppression culture, co-rumination at the family level) worth changing. Consider establishing family-level emotion practices: specific naming rather than vague labels, distinguishing reflection from rumination, recognizing co-rumination patterns when they arise.`,
          },
          projectOption: {
            title: `Read Marc Brackett, Susan David, or James Gross, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Marc Brackett's "Permission to Feel" (RULER framework, accessible introduction), Susan David's "Emotional Agility" (emotional agility framework), or selected James Gross papers (more technical, but foundational). Apply concepts during reading. Write 1,500 words on what you learned about emotion regulation and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Real emotion regulation literacy at 12 is one of the highest-leverage mental health investments available.`,
          },
          identityQuestion: `If you become someone with sophisticated emotion regulation (distinguishing suppression from reappraisal, reflection from rumination, information from noise, healthy intimacy from co-rumination), what does that change across decades of mental health, relationships, work, and life?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who names emotions specifically rather than vaguely.`,
            `A person who can distinguish reflection from rumination in their own thinking.`,
            `Someone who recognizes co-rumination in friend groups and protects against it.`,
          ],
          saveKey: `identity_responses_lw_11_12_9`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. Ninth Life Wellness lesson done. You now know constructed emotion theory (Barrett), the process model (Gross), the research on reappraisal vs suppression, the distinction between reflection and rumination (Nolen-Hoeksema), affect labeling (Lieberman), the RULER framework (Brackett), emotional agility (David), and social-emotional dynamics including co-rumination (Rose et al). That's emotion regulation literacy most adults have never built. Three more lessons in this band's first half. Next time: friendship as wellness, including the loneliness research that's been making news. Argument Builder format. Let's go. — Terra`,
          badge: `emotion-literate`,
          badgeName: `Emotion Literate`,
          xpEarned: 75,
          competencies: [
            `Knows constructed emotion theory (Barrett) and process model (Gross)`,
            `Distinguishes reappraisal from suppression and their research-supported outcomes`,
            `Distinguishes reflection from rumination (Nolen-Hoeksema)`,
            `Applies affect labeling (Lieberman) and RULER (Brackett) frameworks`,
            `Recognizes social-emotional dynamics including co-rumination (Rose et al)`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Friendship as Wellness`,
            hook: `Loneliness research, friendship as wellness practice. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L09 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
