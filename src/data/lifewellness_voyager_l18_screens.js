// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L18 — Building Wellness Practices That Last
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Sustainable Behavior Change, Integration
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (overhaul-burnout / all-or-nothing / solo-practice)
// PURPOSE: Integration — applying frameworks from across the band to common failure modes
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l18-v1";

const LIFEWELLNESS_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-18`,
      title: `Building Wellness Practices That Last`,
      duration: 35,
      xpReward: 75,
      badge: `sustainable-practice`,
      badgeName: `Sustainable Practice`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, this lesson is about integration: taking the frameworks built across this band and turning them into practices that actually last across years and decades. Most people learn what's good for them but fail to build it into sustainable practice. The failure modes are predictable and research-supported responses exist. Today we work through three cases of common patterns that derail wellness practice: trying to overhaul everything at once and burning out, getting stuck in all-or-nothing thinking, and trying to build practice solo without community or accountability. Real research on habit formation (Wood, Clear, Fogg), identity-based change, and behavioral support will inform the responses. By the end you'll have framework for turning the wellness literacy you've built into practice that compounds across decades.`,
          headline: `Building Wellness Practices That Last`,
          subtitle: `Three cases on common failure modes. Integration of band frameworks. Sustainable practice.`,
          visual: `/voyager-assets/life-wellness/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Wellness Practice Fails`,
          paragraphs: [
            `The gap between knowing what's good for you and actually doing it consistently is one of the most common patterns in adult life. People learn that sleep matters, exercise helps, meditation works, deep friendships predict wellbeing, and then don't sustain practice in any of these. The pattern isn't laziness or character failure; it's predictable failure modes that have research-supported responses.`,
            `Specific failure modes documented in research. Overhaul-and-burnout: trying to change everything at once produces high initial effort that can't be sustained; failure to maintain produces shame that prevents trying again. All-or-nothing thinking: missing one day of practice gets framed as total failure rather than as normal variation, leading to giving up. Solo practice without support: trying to build practice without community/accountability/structure is dramatically harder than with these. Outcome-focused rather than identity-focused: building practice around results ("lose weight," "get good grades") rather than identity ("be someone who moves regularly," "be someone who studies deeply") produces more brittle practice. Willpower-dependent rather than environment-designed: relying on motivation when conditions don't support the behavior. Generic rather than individualized: trying programs designed for averages rather than building practice that fits your specific life.`,
            `What the research-supported response looks like. Tiny habits (BJ Fogg's framework): start so small that the practice is almost impossible to fail (one push-up; reading one page; meditating one minute). The size matters less than the consistency; small consistent practice compounds dramatically across years (covered in L12). Identity-based rather than outcome-based change (James Clear's framework synthesizing research): change "I want to exercise" to "I'm someone who moves daily"; identity-based change is more durable than outcome-based. Stacking with existing habits (Wendy Wood's research, covered in L07): attach new practices to existing strong habits rather than trying to add them in isolation. Environmental design (covered in L12): remove friction from desired behaviors, add friction to undesired. Social support and community (covered in L10, L17): solo practice is much harder than community-supported practice.`,
            `What's particular about adolescents. Adolescents have less stable existing routines than adults, more parental/structural support, more identity flexibility, and more years for compounding to work. This is partly an advantage: practices built during adolescence shape decades. It's partly a challenge: more environmental variability and identity flux can make consistency harder. Designing practice that works for adolescent life specifically (not adult life patterns) matters.`,
            `One framing about this lesson specifically. It synthesizes frameworks from across the Life Wellness Voyager band. Sleep practice from L02. Movement practice from L05. Mental health support from L06. Habits and behavior change from L07. Attention practices from L08. Emotional regulation from L09. Friendship investment from L10. Family communication from L11. Energy management from L12. Anti-consumerism from L13. Tech use from L14. Body neutrality from L15. Grief framework from L16. Meaning construction from L17. Each lesson built specific framework; this lesson is about turning the frameworks into sustainable practice.`,
            `One last framing. You're 12. The practices you build now will compound across decades. Most adults around you absorbed wellness culture's intensity-and-burnout patterns and spent years recovering from them. Building sustainable practice from the start (using research-supported approaches) produces dramatically different outcomes than the dominant cultural patterns.`,
          ],
          image: `/voyager-assets/life-wellness/l18-s1-failure.webp`,
          imageCaption: `Common wellness practice failure modes: overhaul-burnout, all-or-nothing, solo practice, outcome-focused, willpower-dependent. Research-supported responses: tiny habits (Fogg), identity-based (Clear), stacking (Wood), environmental design, community.`,
          vocab: [
            {
              word: `wellness practice failure modes and research-supported responses`,
              definition: `Documented failure modes: overhaul-and-burnout (trying everything at once); all-or-nothing thinking (missing one day = total failure); solo practice without support; outcome-focused rather than identity-focused; willpower-dependent rather than environment-designed; generic rather than individualized. Research-supported responses: tiny habits (BJ Fogg: start so small that failure is almost impossible); identity-based change (James Clear: "I'm someone who" vs "I want to"); habit stacking (Wendy Wood: attach to existing habits); environmental design (covered L12); social support and community (covered L10, L17). Patterns established in adolescence compound across decades.`,
              audioPrompt: `Why wellness practice fails is well-documented in research, {name}. The gap between knowing what's good for you and actually doing it consistently is one of the most common patterns in adult life. People learn that sleep matters, exercise helps, meditation works, deep friendships predict wellbeing, and then don't sustain practice. The pattern isn't laziness or character failure; it's predictable failure modes. Specific failure modes: overhaul-and-burnout, trying to change everything at once producing high initial effort that can't be sustained. All-or-nothing thinking, missing one day getting framed as total failure rather than as normal variation. Solo practice without support, which is dramatically harder than community-supported practice. Outcome-focused rather than identity-focused change, building practice around results rather than identity. Willpower-dependent rather than environment-designed, relying on motivation when conditions don't support the behavior. The research-supported response includes tiny habits from BJ Fogg's framework: start so small that the practice is almost impossible to fail. Identity-based change from James Clear: change "I want to exercise" to "I'm someone who moves daily." Habit stacking from Wendy Wood: attach new practices to existing strong habits.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Identity Shift`,
          paragraphs: [
            `One of the most important shifts in current behavior change research is the move from outcome-focused to identity-focused change. The framework is most accessibly developed in James Clear's "Atomic Habits" (2018) but draws on extensive underlying research on identity, motivation, and habit formation.`,
            `The basic shift. Outcome-focused change frames practice around goals or results: "I want to lose weight," "I want to get good grades," "I want to be more social." Identity-focused change frames practice around the kind of person you're becoming: "I'm someone who moves daily," "I'm someone who studies deeply," "I'm someone who invests in friendships." The shift seems small but produces different practice.`,
            `Why identity-focused is more durable. Outcome-focused practice depends on the outcome continuing to motivate; when results are slow or non-visible, motivation collapses. Identity-focused practice depends on continuing to be the kind of person you've decided to be; results become evidence of identity rather than the reason for practice. Outcome-focused practice ends when the outcome is achieved (lose 10 pounds, get the A); identity-focused practice continues because there's no endpoint. Outcome-focused practice puts you in adversarial relationship with the present (current state isn't enough); identity-focused practice integrates the practice into who you are now.`,
            `Specific research support. Research on self-perception (Daryl Bem and successors): people often work out what they believe and value by observing what they do; consistent practice over time shifts identity through this self-perception mechanism. Research on values-based action (Acceptance and Commitment Therapy, mentioned in L09): action consistent with chosen values produces wellbeing benefits beyond just outcomes. Research on habit formation (Wood, covered in L07): habits are partly automated behavior; identity-level commitment supports automation in ways outcome-level commitment doesn't.`,
            `What this looks like in practice. Before starting a practice, identify the kind of person you want to become. Frame the practice as something that person does, not as something you have to do to reach a goal. When you don't feel like doing the practice, ask "what would the kind of person I want to be do?" rather than "what's the result I want?" Recognize that the practice itself is part of becoming, not just instrumental to becoming. Avoid metrics and tracking that put you in adversarial relationship with current state; track identity-consistent behavior rather than outcomes.`,
            `Specific examples connecting to this band. From L12 (energy management): "I'm someone who manages energy across decades" rather than "I want to be productive." From L02 (sleep): "I'm someone who protects sleep as foundational" rather than "I want to feel more rested." From L10 (friendship): "I'm someone who invests deeply in close relationships" rather than "I want to be less lonely." From L15 (body image): "I'm someone who builds identity sources beyond appearance" rather than "I want to feel better about my body." Each shift produces different practice.`,
            `One caveat. Identity-based change works best when the chosen identity actually fits what you value. Forcing an identity that doesn't fit produces the same brittleness as outcome-focused change. The identity has to be one you actually want to inhabit; if it's chosen to please others or to perform, it doesn't produce sustainable practice.`,
          ],
          image: `/voyager-assets/life-wellness/l18-s2-identity.webp`,
          imageCaption: `Identity shift from outcome-focused to identity-focused (Clear synthesizing research). "I'm someone who" vs "I want to." Identity-focused is more durable because it doesn't end when outcomes achieved and isn't adversarial to current state.`,
          vocab: [
            {
              word: `identity-based behavior change`,
              definition: `Shift from outcome-focused ("I want to X") to identity-focused ("I'm someone who X") behavior change. James Clear "Atomic Habits" 2018 synthesizes underlying research. Why more durable: doesn't end when outcomes achieved; results become evidence of identity rather than reason for practice; integrates practice into present rather than putting you adversarial to current state. Research support: self-perception research (Bem and successors); values-based action research (ACT); habit formation research (Wood). Practice: identify identity you want to become; ask "what would that person do?" rather than "what outcome do I want?"; track identity-consistent behavior rather than outcomes. Caveat: identity must actually fit values, not be chosen to please others.`,
              audioPrompt: `Identity-based behavior change is one of the most important shifts in current behavior change research, {name}. The framework is most accessibly developed in James Clear's "Atomic Habits" from 2018 but draws on extensive underlying research. The basic shift: outcome-focused change frames practice around goals or results: "I want to lose weight," "I want to get good grades." Identity-focused change frames practice around the kind of person you're becoming: "I'm someone who moves daily," "I'm someone who studies deeply." Why identity-focused is more durable: outcome-focused practice depends on the outcome continuing to motivate; when results are slow or non-visible, motivation collapses. Identity-focused practice depends on continuing to be the kind of person you've decided to be; results become evidence of identity rather than the reason for practice. Outcome-focused practice ends when the outcome is achieved; identity-focused practice continues because there's no endpoint. What this looks like in practice: before starting a practice, identify the kind of person you want to become. Frame the practice as something that person does. When you don't feel like doing the practice, ask "what would the kind of person I want to be do?" rather than "what's the result I want?"`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Starting Small And Stacking`,
          paragraphs: [
            `Two of the most research-supported approaches to building sustainable practice are starting very small and stacking new practices onto existing strong habits. Both are counterintuitive and both work.`,
            `BJ Fogg's tiny habits framework. Fogg is a Stanford behavior scientist who has spent decades studying behavior change. His tiny habits approach (synthesized in "Tiny Habits: The Small Changes That Change Everything" 2019): start so small that the practice is almost impossible to fail. Want to start exercising? Begin with one push-up after brushing your teeth in the morning. Want to start reading more? Read one page after dinner. Want to meditate? Start with one breath of deliberate attention. The key insight: the size of the initial practice matters much less than the consistency. Practices that are too small to fail produce reliable execution; reliable execution shifts identity over time; identity shift makes scaling up natural.`,
            `Why tiny works. Behavior change requires repetition to become automatic (research on habit formation). Practices that are too demanding produce high failure rates; high failure rates produce shame; shame produces avoidance; avoidance prevents the consistency that builds habits. Tiny practices reverse this: high success rate produces positive feelings about practice; positive feelings produce continued engagement; continued engagement produces real change over time. The size at which to start is "smaller than you think you need to"; if you think you can do 20 minutes, start with 2.`,
            `Habit stacking (Wendy Wood's research, covered in L07; James Clear's synthesis). New practices that exist in isolation are hard to maintain because they have no trigger; practices that are attached to existing strong habits get triggered automatically. The formula: "After [existing strong habit], I will [new tiny practice]." Examples: "After I brush my teeth in the morning, I will do one push-up." "After I sit down to eat lunch, I will take three deliberate breaths." "After I close my last school book at night, I will write one sentence about my day." The existing habit provides the trigger; the tiny new practice rides on top of it.`,
            `Why stacking works. Existing habits already have neural pathways and environmental cues that trigger them automatically; new practices borrow this infrastructure rather than needing to build their own. The combined practice becomes a chained sequence that's nearly as automatic as the original habit alone. Across years, the stacked practice can be expanded (one push-up becomes a routine; one sentence becomes journaling) without requiring the same level of conscious effort needed to start from nothing.`,
            `Combining tiny and stacking. The most reliable approach to new wellness practice combines both: start with a practice so small it's almost impossible to fail, attached to an existing strong habit. The combination produces reliable execution that compounds across years. The compounding matters: practice that produces only 1% improvement per day produces dramatically different outcomes over years than practice that's optimized for short-term intensity but doesn't sustain.`,
            `Connection to band frameworks. This integrates with energy management (L12: sustainable over dramatic; compounding beats intensity), habits research (L07: environmental design and automaticity), identity-based change (this lesson: practice as identity expression). Each framework reinforces the others.`,
          ],
          image: `/voyager-assets/life-wellness/l18-s3-tiny-stacking.webp`,
          imageCaption: `Tiny habits (Fogg): start so small failure is almost impossible. Habit stacking (Wood, Clear): "After [existing habit], I will [new tiny practice]." Combination produces compounding sustainable practice.`,
          vocab: [
            {
              word: `tiny habits and habit stacking`,
              definition: `Two research-supported approaches to sustainable practice. Tiny habits (BJ Fogg, "Tiny Habits" 2019): start so small that practice is almost impossible to fail (one push-up, one page, one breath); consistency matters more than size; high success rate produces positive feelings, continued engagement, real change over time. Habit stacking (Wood research from L07; Clear synthesis): "After [existing strong habit], I will [new tiny practice]"; existing habits provide automatic triggers that new practices borrow. Combination produces compounding sustainable practice. Integrates with L12 energy management (sustainable over dramatic), L07 habits research, identity-based change.`,
              audioPrompt: `Tiny habits and habit stacking are two of the most research-supported approaches to building sustainable practice, {name}. BJ Fogg is a Stanford behavior scientist who has spent decades studying behavior change. His tiny habits approach: start so small that the practice is almost impossible to fail. Want to start exercising? Begin with one push-up after brushing your teeth in the morning. Want to start reading more? Read one page after dinner. Want to meditate? Start with one breath of deliberate attention. The key insight: the size of the initial practice matters much less than the consistency. Habit stacking from Wendy Wood's research and James Clear's synthesis: new practices that exist in isolation are hard to maintain because they have no trigger; practices that are attached to existing strong habits get triggered automatically. The formula: "After existing strong habit, I will new tiny practice." The most reliable approach to new wellness practice combines both: start with a practice so small it's almost impossible to fail, attached to an existing strong habit. The combination produces reliable execution that compounds across years.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Community And Recovery From Failure`,
          paragraphs: [
            `Two more aspects of sustainable practice deserve specific attention: the role of community and accountability, and the inevitable recovery from failure that distinguishes sustainable practice from brittle attempts.`,
            `Why community matters substantially. Multiple research traditions converge on social support as one of the strongest predictors of sustained behavior change. Practices done in community (or with accountability partner, or with public commitment) have substantially higher long-term sustainability than solo practices. Reasons: social commitment increases motivation; shared experience reduces feelings of isolation in difficulty; observation of others practicing normalizes the practice; social accountability creates external structure that supplements internal motivation; community provides feedback on what's working.`,
            `Specific applications for adolescents. Friends doing similar practices together (study groups, exercise partners, meditation circles, creative collaborations). Family practices that the household supports together (covered in real-world activity sections across this band). Online communities focused on specific practices (with caution about Tier C influencer monetization from L14). Mentors or older models who exemplify the kind of person you're trying to become. School-based structures (sports teams, clubs, study groups, religious communities).`,
            `Recovery from failure as part of sustainable practice. The reality is that all sustainable practice involves some failure. People miss practices, go through periods of difficulty, lose practices entirely and rebuild. What distinguishes sustainable from brittle practice isn't avoiding failure but how failure is handled. Brittle response: one missed practice → shame → avoidance → giving up entirely. Sustainable response: one missed practice → "that's normal" → resume practice the next day → continue. The pattern of giving up entirely after a single failure is one of the most common and most preventable derailments.`,
            `Research-supported recovery framing. Treat practice as something you do, not as something you have to maintain perfectly. Use "never miss twice" as a guideline: missing once is normal; missing twice in a row is the signal to attend to what's happening. Recognize that variability is normal: practice some days will be deep, some shallow, some skipped; over years, the average matters more than any individual day. Frame setbacks as information rather than as failure: what disrupted the practice? what conditions support practice? what doesn't?`,
            `One important framing connecting to L17 (meaning). Sustainable wellness practice ultimately requires that the practice connect to something you actually care about. Practice without meaning is brittle; practice rooted in meaning (contribution, relationships, self-development) is durable. The meaning framework from L17 provides the foundation that makes sustainable practice possible across decades. The practice serves the life you're building; it isn't the point itself.`,
            `One last framing. Many adults around you have absorbed wellness culture's dramatic intensity-and-burnout patterns and spend years recovering from them. The approach you're learning (small, stacked, identity-based, community-supported, failure-resilient, meaning-rooted) is dramatically different from dominant cultural patterns. Building practice this way from the start protects against decades of struggle that adults often experience trying to undo intensity-burnout patterns.`,
          ],
          image: `/voyager-assets/life-wellness/l18-s4-community.webp`,
          imageCaption: `Community as one of strongest predictors of sustained behavior change. Recovery from failure as part of sustainable practice: "never miss twice." Meaning (L17) as foundation. Different from intensity-burnout patterns adults often absorb.`,
          vocab: [
            {
              word: `community, failure recovery, and meaning in sustainable practice`,
              definition: `Community/accountability one of strongest predictors of sustained behavior change: friends, family practices, online communities (with Tier C caution from L14), mentors, school structures. Recovery from failure as part of sustainable practice: "never miss twice" guideline; variability is normal; setbacks as information not failure; brittle response (one miss → shame → giving up) vs sustainable response (one miss → "normal" → resume). Connection to L17 meaning: practice without meaning is brittle; practice rooted in meaning (contribution, relationships, self-development) is durable. Different from intensity-burnout patterns adults often spend years undoing.`,
              audioPrompt: `Community, failure recovery, and meaning are aspects of sustainable practice that deserve specific attention, {name}. Why community matters substantially: multiple research traditions converge on social support as one of the strongest predictors of sustained behavior change. Practices done in community, or with accountability partner, or with public commitment, have substantially higher long-term sustainability than solo practices. Recovery from failure as part of sustainable practice: the reality is that all sustainable practice involves some failure. What distinguishes sustainable from brittle practice isn't avoiding failure but how failure is handled. Brittle response: one missed practice leads to shame, leads to avoidance, leads to giving up entirely. Sustainable response: one missed practice is normal, resume practice the next day, continue. Use "never miss twice" as a guideline: missing once is normal; missing twice in a row is the signal to attend to what's happening. Sustainable wellness practice ultimately requires that the practice connect to something you actually care about. Practice without meaning is brittle; practice rooted in meaning is durable.`,
            },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Cases`,
          paragraphs: [
            `In the three cases that follow, young people face common wellness practice failure modes. Each case integrates frameworks from across the Life Wellness Voyager band. The skill being built is recognizing the specific failure mode operating and applying research-supported responses.`,
            `One framing as you work. The cases test integration across the band. Recognize what failure mode is operating. Identify which band frameworks apply. Provide specific research-supported responses (tiny habits, identity-based change, habit stacking, community support, failure recovery, meaning connection).`,
            `Another framing. The cases involve common patterns rather than maximally heavy circumstances. Each is workable through skill-building and framework application. None involves clinical conditions requiring professional intervention as primary response, though appropriate escalation paths are noted where relevant.`,
            `One last framing. You're 12. The patterns you build for navigating practice failure modes will substantially shape your wellness practice across decades. Most adults around you don't have explicit framework for these failure modes; they hit them, don't recognize them, and develop avoidance patterns. Building deliberate framework now produces dramatically different outcomes.`,
          ],
          image: `/voyager-assets/life-wellness/l18-s5-before.webp`,
          imageCaption: `Three cases of common wellness practice failure modes. Integration across the band. Patterns established now shape decades of practice.`,
          vocab: [
            {
              word: `integrating sustainable practice frameworks`,
              definition: `Mature sustainable practice integrates multiple frameworks. Tiny habits (Fogg) and habit stacking (Wood, Clear). Identity-based change ("I'm someone who" not "I want to"). Environmental design (L12). Community and accountability. Failure recovery ("never miss twice"; variability normal). Meaning connection (L17). Each framework reinforces the others. Most adults around you absorbed wellness culture's intensity-and-burnout patterns and spent years recovering. Building deliberate sustainable framework now produces dramatically different outcomes than dominant cultural patterns.`,
              audioPrompt: `Integrating sustainable practice frameworks is what mature wellness practice involves, {name}. Tiny habits from Fogg: start so small failure is almost impossible. Habit stacking from Wood and Clear: attach new practices to existing strong habits. Identity-based change: frame practice as "I'm someone who" rather than "I want to." Environmental design from lesson 12: remove friction from desired behaviors, add friction to undesired. Community and accountability: one of the strongest predictors of sustained behavior change. Failure recovery: "never miss twice"; variability normal; setbacks as information not failure. Meaning connection from lesson 17: practice rooted in meaning is durable while practice without meaning is brittle. Each framework reinforces the others. Most adults around you absorbed wellness culture's intensity-and-burnout patterns and spent years recovering from them. Building deliberate sustainable framework now produces dramatically different outcomes.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l18-case-study`,
          type: `case-study`,
          headline: `Three Common Failure Modes`,
          intro: `{name}, three real situations involving common wellness practice failure modes. For each, identify what's happening and what research-supported response would actually help.`,
          cases: [
            {
              id: `case-1`,
              title: `Trying To Overhaul Everything At Once`,
              context: `Ben decided on January 1 that this year would be different. He committed to: meditating 30 minutes daily, exercising 1 hour daily, reading 1 book per week, journaling 20 minutes nightly, eating perfectly clean, sleeping exactly 9 hours, no social media, getting straight As, and making 3 new friends. He stuck to all of it for 9 days. On day 10, he was exhausted, skipped meditation. On day 11, also skipped exercise. By day 14, he'd given up everything and concluded he just doesn't have discipline. Three weeks later, he's actually doing less than before he started; the failure left him demoralized. He thinks something is wrong with him.`,
              question: `What's actually happening with Ben?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Ben just needs more discipline. He should try harder next time and do all of it perfectly.`,
                  outcome: `This is exactly the framing that produces the cycle Ben experienced and that research has documented as one of the most reliable ways to fail at building practice. Trying to overhaul everything at once with high-intensity demands is a documented failure mode (overhaul-and-burnout). The "more discipline" framing misunderstands what causes the pattern: it's not insufficient willpower but unsustainable demands combined with all-or-nothing thinking. Doing it "more perfectly" next time predicts the same outcome at higher cost. Research-supported response is different from "try harder."`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Ben is in a textbook overhaul-and-burnout pattern that research has documented extensively. The pattern: high-intensity attempt to change everything at once → unsustainable demands → inevitable failure → shame → giving up entirely → ending up worse than before starting. Nothing wrong with Ben specifically; this is what trying-to-overhaul reliably produces. Specific frameworks help. Tiny habits (BJ Fogg): the size of practice matters less than consistency; he should start with practices so small failure is nearly impossible (one push-up, one minute meditation, one page, one healthy choice). Habit stacking (Wood, Clear): attach new tiny practices to existing strong habits ("after I brush my teeth, I will do one push-up"; "after dinner, I will read one page"). Identity-based change (Clear): shift from outcome-focused ("I want to be perfect at everything") to identity-focused ("I'm someone who builds sustainable practice across decades"); the second is durable across decades; the first burns out in weeks. Sustainable patterns over dramatic intensity (L12): boring consistency beats heroic effort across timeframes that matter. Failure recovery ("never miss twice"): the missed day on day 10 isn't the problem; the all-or-nothing response to it is. What might Ben do differently. First, pick ONE practice (just one). Start so small it's almost impossible to fail. Attach to existing strong habit. Identity-frame it. Do it for 30 days before adding a second practice. Recognize this approach feels too slow; that's the test. Second, expect failure and plan for recovery: when you miss a day (you will), resume the next day without making it mean anything. Third, recognize that what looks like discipline in people you admire is usually compounding small practices across years, not heroic intensity. Fourth, the cultural framing of "discipline" Ben absorbed is part of what produced the failure; replacing it with research-supported sustainable practice framework matters.`,
                  outcome: `This is the research-informed response. Names the documented failure mode (overhaul-and-burnout). Provides specific research-supported alternatives (tiny habits, habit stacking, identity-based, sustainable over intense, failure recovery). Reframes from "something is wrong with me" to "this is a documented pattern with documented alternatives." Connects to multiple band frameworks.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Ben should just give up trying to improve anything. Stay exactly as he is.`,
                  outcome: `This goes too far the other direction. The failure of overhaul-and-burnout doesn't mean improvement is impossible; it means the specific approach doesn't work. Research-supported approaches (tiny habits, stacking, identity-based, community-supported) do work. Giving up entirely leaves the underlying patterns that motivated trying to change in the first place. The intervention is different approach, not abandoning the project.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates overhaul-and-burnout, one of the most documented wellness practice failure modes. The intervention isn't "more discipline" or "give up" but research-supported sustainable practice approaches: tiny habits, habit stacking, identity-based change, sustainable over intense, failure recovery. Ben's experience isn't personal failure; it's predictable outcome of unsustainable approach combined with all-or-nothing thinking.`,
            },
            {
              id: `case-2`,
              title: `All-Or-Nothing Thinking`,
              context: `Lila has been building good sleep habits for three months. She's been getting 8-9 hours most nights, going to bed at a consistent time, keeping her phone out of her bedroom. She's noticed real differences: better mood, better focus, easier mornings. Last weekend her family had a wedding and she stayed up until 2am. She tried to get back on schedule but had a bad night Monday too. By Tuesday she'd decided she'd "ruined it" and might as well stay up late since she'd already broken the streak. By the following week she was back to staying up to 1am most nights, on her phone in bed, sleeping badly. She thinks she "doesn't have what it takes" to maintain habits.`,
              question: `What's actually happening with Lila?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Lila just needs to be more consistent. She should never break the streak no matter what.`,
                  outcome: `This actually reinforces the all-or-nothing thinking that's the actual problem. The "never break the streak" framing is exactly what produces the catastrophic response to breaking it; if breaking the streak ruins everything, then breaking it once produces a logical (if wrong) decision to abandon entirely. The intervention isn't more rigidity but explicit acceptance of variability as normal. The wedding wasn't the problem; the response to the wedding was.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Lila is in textbook all-or-nothing thinking, one of the most common failure modes in sustainable practice. The pattern: build practice → encounter natural disruption (wedding, illness, travel, family difficulty) → frame disruption as "ruining" everything → respond by giving up entirely → end up worse than before starting. The disruption itself isn't the problem; the all-or-nothing response to it is. Specific frameworks help. Variability is normal: sustainable practice across years includes disrupted days, weeks, sometimes longer periods; this isn't failure but expected feature of long-term practice. "Never miss twice" as guideline: missing one day (the wedding) is normal; missing twice in a row is the signal to attend, not to abandon. Setbacks as information rather than failure: what disrupted the practice? what would support resuming? what conditions tend to disrupt? Sustainable practice over perfect practice: long-term average matters far more than any individual day. The Stroebe and Schut dual-process model framing applies to practice too: oscillation between practice-engaged and practice-disrupted is normal across time; getting stuck in either creates difficulty. What might Lila do. First, reframe the wedding as expected variability, not as ruining anything. Three months of consistent sleep practice doesn't disappear because of one disrupted night. Second, resume the practice Tuesday (the next normal night) rather than treating Monday as evidence of failure. The "next normal night" is always the right time to resume; there's no separate threshold to clear first. Third, recognize the all-or-nothing thinking explicitly when it appears. The voice that says "you ruined it might as well give up" is a well-documented pattern, not accurate information. Fourth, build resilient framing: "I'm someone who maintains sleep practice across years, including through disruptions" (identity-based) rather than "I have a perfect streak going" (outcome/streak-based). Fifth, the three months of practice produced real benefits; those don't disappear in a week. Resuming will produce them again quickly.`,
                  outcome: `This is the research-informed response. Names all-or-nothing thinking as documented failure mode. Provides specific reframing (variability is normal, "never miss twice," setbacks as information, identity-based rather than streak-based). Reframes from "I don't have what it takes" to "this is a documented thinking pattern with documented alternatives."`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Lila should stop trying to build practices at all and just live spontaneously.`,
                  outcome: `This abandons the real benefits Lila had built (better mood, focus, easier mornings) because of all-or-nothing thinking. Sustainable practice across years produces real wellbeing benefits documented across research; giving up the project entirely because of one disruption is exactly the failure mode this case illustrates. The intervention is different framing, not abandoning practice.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates all-or-nothing thinking, one of the most documented failure modes in sustainable practice. The disruption (wedding) wasn't the problem; the all-or-nothing response was. Intervention: variability as normal, "never miss twice" guideline, setbacks as information, identity-based framing. Three months of practice produced real benefits that don't disappear because of one disrupted week.`,
            },
            {
              id: `case-3`,
              title: `Solo Practice Without Community`,
              context: `Ethan has been trying to build several wellness practices for six months: regular exercise, deeper friendships, reading more, less time on his phone. He's been working at it alone: researching what to do, reading books, making plans. He's made some progress but not as much as he'd hoped. He keeps falling off, restarting, falling off again. He's noticed that his friends don't really know what he's working on. He doesn't have anyone to talk to about it. He sees his peers doing similar things (the ones who are doing well) and they seem to have community around their practices, but he doesn't know how to access that. He thinks he should be able to do this on his own.`,
              question: `What's actually happening with Ethan?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Ethan just needs to be more self-reliant. Asking for help is weakness.`,
                  outcome: `This reflects a specific cultural framing (extreme individualism around self-improvement) that research has shown doesn't match how humans actually sustain behavior change. Multiple research traditions converge on social support as one of the strongest predictors of sustained behavior change. The "self-reliance" framing isn't supported by research and actively works against sustainable practice. Ethan's struggle isn't insufficient self-reliance; it's lack of the community/accountability that research shows is one of the strongest enablers of practice.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Ethan is in solo-practice-without-community pattern, one of the most documented failure modes for sustained behavior change. Multiple research traditions converge on social support as one of the strongest predictors of sustained practice: friends doing similar practices, accountability partners, communities (in-person or online with Tier C caution from L14), mentors, family practices, school structures. Practices done in isolation are dramatically harder than community-supported practices. The "I should be able to do this on my own" framing isn't research-supported; it reflects a specific cultural framing (extreme self-reliance in self-improvement) that produces predictable failure. What might Ethan do. First, recognize that community isn't weakness; it's how humans actually sustain practice across time. The cultural framing he absorbed about needing to do it alone is the problem, not his desire for community. Second, identify specific communities that already exist for the practices he wants to build. Exercise: school sports, gym buddies, running groups, family activities. Friendships: more time with people he wants closer relationships with rather than working at it abstractly. Reading: book clubs, reading partners, online communities focused on specific genres. Less phone: friends building similar practices together. Third, share what he's working on with 1-2 close people who can serve as accountability, not as judgment, but as people who know what he's trying to do and can support it. Fourth, look for older models or mentors who exemplify the kind of person he's trying to become; observation and conversation with people further along produces practice support that research alone can't. Fifth, family practices that the household supports (the L18 real-world section addresses this). Sixth, recognize that the peers he sees doing well almost certainly have community around their practices; the visibility makes it look like individual capability but the underlying structure usually includes social support.`,
                  outcome: `This is the research-informed response. Names solo-practice-without-community as documented failure mode. Provides specific community options (existing communities, accountability partners, mentors, family practices). Identifies the cultural framing (extreme self-reliance) as part of the problem. Distinguishes community from weakness or dependency.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Ethan should rely entirely on others to do his practices for him.`,
                  outcome: `This goes too far the other direction. The intervention isn't dependency or abdication but community/accountability that supplements rather than replaces individual practice. Research-supported approaches include community/accountability AND individual practice; neither alone is sufficient for most people. The framework is community-supported individual practice, not community-replaced individual practice.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates solo-practice-without-community, one of the most documented failure modes in sustained behavior change. The intervention isn't more self-reliance but recognition that humans sustain practice through community/accountability/social support. The cultural framing of "I should be able to do this alone" is part of the problem, not the path. Specific community options exist for nearly every practice.`,
            },
          ],
          reflectionPrompt: `All three cases involve common failure modes that have research-supported responses. What's common about how research-grounded responses shift the framings from "something is wrong with me" to "this is a documented pattern with documented alternatives"?`,
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are common failure modes in building sustainable wellness practice?`,
              options: [
                `Just laziness`,
                `Overhaul-and-burnout (trying to change everything at once); all-or-nothing thinking (missing one day = total failure); solo practice without community/accountability; outcome-focused rather than identity-focused; willpower-dependent rather than environment-designed; generic rather than individualized. Each is documented failure mode with research-supported alternative response`,
                `Random`,
                `Personal weakness`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the failure modes as documented patterns shifts response from "something is wrong with me" to "this is a known pattern with known alternatives." The failures aren't personal character issues; they're predictable outcomes of specific approaches that don't match research on how humans sustain practice.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the tiny habits framework (BJ Fogg)?`,
              options: [
                `Random`,
                `Start so small that the practice is almost impossible to fail (one push-up; one page; one breath); size of initial practice matters much less than consistency; high success rate produces positive feelings → continued engagement → real change over time; "smaller than you think you need to"; if you think you can do 20 minutes, start with 2; book "Tiny Habits" 2019`,
                `Just small`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The framework is counterintuitive but research-supported. The size at which to start is well below what feels meaningful because the goal isn't immediate impact but reliable execution that compounds across time.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is habit stacking?`,
              options: [
                `Random`,
                `Attaching new practices to existing strong habits using formula "After [existing strong habit], I will [new tiny practice]"; existing habits provide automatic triggers that new practices borrow; Wood's research on habit formation and Clear's synthesis; combined with tiny habits produces compounding sustainable practice`,
                `Just stacking`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Habit stacking works because existing habits already have neural pathways and environmental cues that trigger them automatically; new practices borrow this infrastructure. The combined practice becomes nearly as automatic as the original.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is identity-based behavior change?`,
              options: [
                `Random`,
                `Shift from outcome-focused ("I want to X") to identity-focused ("I'm someone who X"); James Clear "Atomic Habits" synthesis; more durable because doesn't end when outcomes achieved, results become evidence of identity rather than reason for practice, integrates practice into present rather than putting you adversarial to current state; identity must actually fit values, not be chosen to please others`,
                `Just identity`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Identity-based change is one of the most important shifts in current behavior change research. The framework draws on research on self-perception, values-based action, and habit formation. The shift seems small but produces dramatically different practice over time.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the role of community in sustainable practice?`,
              options: [
                `None`,
                `Multiple research traditions converge on social support as one of strongest predictors of sustained behavior change. Mechanisms: social commitment increases motivation; shared experience reduces isolation in difficulty; observation of others normalizes the practice; social accountability creates external structure supplementing internal motivation; community provides feedback. Solo practice dramatically harder than community-supported. "I should do this alone" framing is cultural, not research-supported`,
                `Random`,
                `Just helpful`,
              ],
              correctIndex: 1,
              explanation: `The "self-reliance" framing common in dominant US culture isn't matched by research on how humans actually sustain practice. Community/accountability/social support is one of the strongest enablers across most domains of behavior change.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the "never miss twice" guideline?`,
              options: [
                `Random`,
                `Recovery-from-failure guideline: missing one day of practice is normal (variability is part of sustainable practice across years); missing twice in a row is the signal to attend to what's happening (what disrupted? what would support resuming? what conditions support practice?). Distinguishes brittle response (one miss → shame → giving up) from sustainable response (one miss → "normal" → resume next day → continue)`,
                `Just twice`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The "never miss twice" guideline is one of the most practical applications of failure-recovery framework. It distinguishes acceptable variability from signals that something needs attention, without producing the all-or-nothing response that destroys most attempted practices.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does sustainable practice ultimately require meaning connection (L17)?`,
              options: [
                `Random`,
                `Practice without meaning is brittle (no underlying reason to sustain when motivation flags); practice rooted in meaning (contribution, relationships, self-development) is durable; meaning provides foundation that makes sustainable practice possible across decades; practice serves the life you're building rather than being the point itself; L17's meaning framework integrates with sustainable practice framework`,
                `Just nice`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The connection to meaning matters because pure technique (tiny habits, stacking, identity-based) without meaning produces practice without purpose. The frameworks work best when they serve something you actually care about across decades.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How does this lesson integrate with the rest of the Life Wellness Voyager band?`,
              options: [
                `Random`,
                `Synthesizes frameworks from across the band: sleep (L02), movement (L05), mental health (L06), habits (L07), attention (L08), emotion (L09), friendship (L10), family (L11), energy management (L12), money/anti-materialism (L13), tech (L14), body image (L15), grief (L16), meaning (L17). Each lesson built specific framework; L18 is about turning the frameworks into sustainable practice. Integration across lessons matters more than individual lessons alone`,
                `Just one lesson`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The integration is the point. Individual frameworks from each lesson matter, but the integrated whole is more valuable than the parts. Building sustainable practice across all these dimensions produces compounding wellness benefits across decades that no individual framework alone could.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: People who sustain wellness practice across decades have unusual willpower or discipline.`,
              correctAnswer: false,
              explanation: `False. Research consistently shows that what looks like discipline in people who sustain practice is usually some combination of: tiny consistent practices that compound across time; identity-based framing rather than outcome-based; habit stacking onto existing routines; environmental design that supports the behavior; community and accountability; recovery from inevitable failures using guidelines like "never miss twice"; meaning connection to something they care about. The "willpower" framing misunderstands how sustained practice actually works.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I've tried to start exercising 12 times this year. Every time I last about a week then quit. I'm just not someone who can stick with anything." Based on this lesson, what should you point out?`,
              options: [
                `"Random"`,
                `"Several specific things. First, the framing 'I'm not someone who can stick with anything' is identity-level conclusion drawn from outcome-level evidence; based on research, the evidence actually shows that you're using approaches that don't work, not that you can't sustain practice. Second, twelve attempts that each last about a week is a textbook pattern for trying-too-big approaches. If you're starting with 45 minutes of exercise 5 days a week, that's why it's failing. Research-supported alternative: start with one push-up. One. After you brush your teeth in the morning. That's the whole practice for the first 30 days. Then maybe add one more. Third, BJ Fogg's tiny habits research and James Clear's habit research consistently show that size of initial practice matters much less than consistency; high success rate produces positive feelings about practice; positive feelings produce continued engagement; continued engagement produces real change over time. Fourth, identity reframe: from 'I want to exercise' (outcome-focused, brittle) to 'I'm someone who moves daily' (identity-focused, durable). The one push-up after brushing teeth is what someone-who-moves-daily does; you become that person by doing what that person does. Fifth, attach to existing habit: 'after I brush my teeth' creates automatic trigger. Sixth, community: do you have anyone who knows you're trying to build this? Research consistently shows community/accountability is one of the strongest predictors of sustained practice. Seventh, plan for failure: when you miss a day (you will), 'never miss twice' is the guideline: resume the next normal day without treating the missed day as evidence of anything. Eighth, this approach feels too small to matter; that's the test. If you can sustain one push-up after brushing teeth for 30 days, you can sustain something larger; if you can't even sustain that, the practice was too big. Twelve attempts at unsustainable approaches isn't evidence about you; it's evidence about the approach."`,
                `"Just do it"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied sustainable practice literacy. Reframe identity conclusion (I can't stick with anything) as evidence about approach (the approaches were unsustainable). Reference tiny habits, habit stacking, identity-based change, community, failure recovery. Provide specific concrete starting point. Address the "feels too small" objection explicitly. Don't promise easy fixes; provide research-supported framework that actually works.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for building practices? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which failure mode have you experienced most? Overhaul-burnout? All-or-nothing? Solo? Outcome-focused? Willpower-dependent? Generic?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with sustainable practice across decades, what does that change about your wellness, capabilities, and life at 30, 50, 80?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick ONE practice from across this band you want to build. Apply tiny habits + stacking + identity framing. Design the specific practice and trigger.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Tiny habits feel inconsequential. When does intensity actually matter more than consistency? What domains does the "compounding beats intensity" framing not apply to?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read BJ Fogg's "Tiny Habits" or James Clear's "Atomic Habits." Apply during reading. Pick ONE practice to build and track for 30 days.` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Practice patterns at 12 compound across decades of wellness. This is the lesson that turns the band's literacy into actual practice. Two paths.`,
          familyActivity: {
            title: `The Family Practice Conversation`,
            duration: `60 minutes`,
            description: `Share the failure modes and research-supported alternatives. Many adults have struggled with sustained practice for decades using approaches that don't match research; family conversation often surfaces specific patterns worth examining. Consider establishing family practices that support sustainable wellness: family members holding each other accountable for tiny practices, shared activities (exercise, reading, cooking, gratitude rituals), explicit recognition of variability as normal, family environmental design (no phones at table, books visible, etc.).`,
          },
          projectOption: {
            title: `Read on sustainable practice and pick ONE practice to build, 30 days (optional)`,
            duration: `30 days, ~15 minutes per session`,
            description: `Pick one book: BJ Fogg's "Tiny Habits" or James Clear's "Atomic Habits." During reading, pick ONE practice from across this band's frameworks to build (sleep, exercise, meditation, deeper friendship, reading, etc.). Apply tiny habits + stacking + identity-based + community + failure recovery. Track 30 days. Write 1,500 words on what you learned about the practice, about behavior change, and about yourself.`,
            offerToParent: `Parent: opt your kid into this project. Sustainable practice literacy at 12 is the difference between accumulating wellness knowledge that never gets applied and building practices that compound across decades.`,
          },
          identityQuestion: `If you become someone with sustainable practice across the wellness dimensions you've learned about (sleep, movement, attention, emotion, relationships, meaning), what does that change about your life at 30, 50, 80? What's the difference between someone who knows wellness research and someone who sustainably practices it?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who builds tiny consistent practices that compound across decades.`,
            `A person whose identity drives practice, not outcomes that burn out.`,
            `Someone who recovers from inevitable failures without giving up entirely.`,
          ],
          saveKey: `identity_responses_lw_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighteenth Life Wellness lesson done. You now have framework for turning the entire band's wellness literacy into sustainable practice: tiny habits (Fogg), habit stacking (Wood, Clear), identity-based change (Clear), environmental design (L12), community/accountability, failure recovery ("never miss twice"), meaning connection (L17). That's framework most adults have never explicitly built. They learn about wellness and don't sustain practice; you'll be different because you have the framework. Two lessons to go. Next time: when to seek help. Source Evaluation format. Then the capstone. Let's go. — Terra`,
          badge: `sustainable-practice`,
          badgeName: `Sustainable Practice`,
          xpEarned: 75,
          competencies: [
            `Identifies common wellness practice failure modes (overhaul-burnout, all-or-nothing, solo, outcome-focused)`,
            `Applies tiny habits framework (Fogg) and habit stacking (Wood, Clear)`,
            `Distinguishes identity-based from outcome-based behavior change (Clear)`,
            `Recognizes community/accountability as one of strongest predictors of sustained practice`,
            `Applies failure recovery framing ("never miss twice"; variability as normal)`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: When To Seek Help`,
            hook: `Three tiers of wellness/mental health resources. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L18 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
