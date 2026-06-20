// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L09 — Adaptability and Change
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Resilience Research, Change Management
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three real cases of adapting to significant change)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l09-v1";

const FUTURESKILLS_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-09`,
      title: `Adaptability and Change`,
      duration: 35,
      xpReward: 75,
      badge: `change-navigator`,
      badgeName: `Change Navigator`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, adaptability is not just resilience — it's a specific set of capacities: cognitive flexibility, emotional regulation, learning agility, tolerance for uncertainty. The growth mindset research is real but often overstated. This lesson covers what actually helps people navigate significant change.`,
          headline: `Adaptability and Change`,
          subtitle: `Three real cases. Adaptability is a learnable skill, not a personality trait.`,
          visual: `/voyager-assets/future-skills/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Adaptability Actually Is`,
          paragraphs: [
            `Adaptability gets used loosely. People treat it as if it were a single thing you either have or don't. Researchers who study how people actually navigate change have a more specific picture. Effective adaptation involves at least four distinguishable components, and people who are "adaptable" usually have all four; people who struggle with change are usually weak on at least one.`,
            `First: accurate situation assessment. You can't adapt well if you misunderstand what's actually changing. Some people minimize ("it'll all go back to normal soon") when it won't. Others catastrophize ("everything is ruined") when it isn't. Skilled adapters see the situation roughly as it is: what's actually different, what's still the same, what's uncertain. This sounds obvious but is unusual; under stress, most people misperceive change in predictable directions.`,
            `Second: emotional regulation under uncertainty. Change typically produces uncomfortable emotions (anxiety, grief for what was, frustration at not being in control). Adaptable people don't avoid these feelings; they experience them without being controlled by them. They can act effectively while feeling uncomfortable. This is what researchers like Susan David ("Emotional Agility," 2016) study: the ability to engage with difficult emotions productively rather than either suppressing them or being consumed by them.`,
            `Third: willingness to update beliefs and approaches. When circumstances change, the strategies that worked before often don't anymore. Adaptable people notice when their old approach isn't working and try something different. People who struggle with change keep applying old strategies harder and longer than the new situation justifies. This is partly cognitive (recognizing that the situation has shifted) and partly emotional (letting go of the approach that was working).`,
            `Fourth: action under uncertainty. At some point, you have to do something. Adaptable people commit to action with incomplete information, learn from the results, and adjust. People who freeze when uncertain often miss the window when adaptation was possible. This is the hardest component; it requires tolerating the discomfort of acting without certainty.`,
          ],
          image: `/voyager-assets/future-skills/l09-s1-components.webp`,
          imageCaption: `Four components of adaptability: accurate assessment, emotional regulation, belief updating, action under uncertainty.`,
          vocab: [
            {
              word: `emotional agility`,
              definition: `Term used by psychologist Susan David in her 2016 book of the same name. The ability to engage with difficult emotions productively rather than either suppressing them or being consumed by them. Distinct from "positive thinking" (which often involves suppression) and from "letting feelings drive you" (which often involves being controlled by them). Crucial for adaptation.`,
              audioPrompt: `Emotional agility is a term used by psychologist Susan David in her 2016 book of the same name, {name}. The ability to engage with difficult emotions productively rather than either suppressing them or being consumed by them. David's research at Harvard built on decades of work in clinical psychology. Emotional agility is distinct from "positive thinking," which often involves suppression of legitimate negative emotions. It's also distinct from "letting feelings drive you," which often involves being controlled by emotions rather than informed by them. The skill is feeling the feeling fully while also being able to choose your response. People with emotional agility can act effectively while feeling uncomfortable. They can grieve what was while engaging with what's now. They can be afraid and still take needed action. This is crucial for adaptation because change typically produces difficult emotions.`,
            },
            {
              word: `accurate situation assessment`,
              definition: `The first component of effective adaptability: seeing what is actually changing roughly as it is, without minimizing ("it'll go back to normal") or catastrophizing ("everything is ruined"). Under stress, most people misperceive change in predictable directions. Skilled adapters see what's actually different, what's still the same, and what's uncertain.`,
              audioPrompt: `Accurate situation assessment is the first component of effective adaptability, {name}. You can't adapt well if you misunderstand what's actually changing. Some people minimize: "it'll all go back to normal soon," when it won't. Others catastrophize: "everything is ruined," when it isn't. Skilled adapters see the situation roughly as it is: what's actually different, what's still the same, what's uncertain. This sounds obvious but is genuinely unusual. Under stress, most people misperceive change in predictable directions. Minimizers tend to delay adaptation; catastrophizers tend to flood their capacity for calm thinking. Both misperceptions extend the suffering by preventing the effective response that accurate assessment makes possible. Developing accurate situation assessment doesn't require optimism or pessimism. It requires honest observation of what is actually happening, which is harder than it sounds under emotional pressure.`,
            },
            {
              word: `action under uncertainty`,
              definition: `The fourth component of effective adaptability: committing to action with incomplete information, learning from the results, and adjusting. The hardest component because it requires tolerating the discomfort of acting without certainty. People who freeze when uncertain often miss the window when adaptation was possible. Adaptable people act and adjust rather than waiting for certainty.`,
              audioPrompt: `Action under uncertainty is the fourth component of effective adaptability, {name}. At some point, you have to do something. Adaptable people commit to action with incomplete information, learn from the results, and adjust. People who freeze when uncertain often miss the window when adaptation was possible. Certainty usually arrives too late to be useful. This is the hardest component of adaptability because it requires tolerating genuine discomfort: the discomfort of acting when you might be wrong, when you might fail, when more information might have helped but isn't available. The alternative, waiting for certainty, often produces paralysis that becomes its own problem. The window for effective action passes while you wait. Adaptable people learn to commit to a response while holding it loosely: "this is my best read on the situation; I'll adjust as I learn more." That combination of commitment and openness to revision is what action under uncertainty looks like in practice.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Growth Mindset, Honestly`,
          paragraphs: [
            `Carol Dweck's research on "growth mindset" (Stanford, decades of work) is the most popular framework for adaptability. The core finding: people who believe their abilities can grow with effort tend to persist through difficulty, learn more from feedback, and develop higher abilities over time. People who believe abilities are fixed tend to avoid challenges that might expose limits and develop less.`,
            `The pop version of growth mindset has gotten oversimplified, and it's worth being honest about. "Just believe you can do anything" isn't the finding. The research shows that BELIEF combined with ACTUAL EFFORT and SKILLED FEEDBACK produces growth. Belief alone doesn't. The schools that taught "growth mindset posters" without changing how students actually engaged with challenge produced minimal improvements. The schools that combined growth mindset framing with deliberate practice, useful feedback, and tolerance for productive struggle produced real gains.`,
            `What this means for adaptability. Believing you can adapt to change matters. So does actually doing the work of adaptation (the four components from section 1). So does getting feedback from people who can see your adaptation more clearly than you can. Growth mindset is a foundation, not a magic incantation. The kids who internalize it carefully (belief + effort + feedback) become genuinely more adaptable over time; the kids who treat it as a slogan do not.`,
            `One more thing worth knowing. Growth mindset isn't universal — there are skills that have real ceilings, contexts where effort doesn't pay off because the situation is structurally unfair, and life circumstances where adaptation is genuinely hard regardless of mindset. The honest framing acknowledges that mindset matters AND structural factors matter. Pretending mindset is everything ignores real constraints; pretending mindset is nothing ignores real benefits. Adaptability research takes both seriously.`,
          ],
          image: `/voyager-assets/future-skills/l09-s2-mindset.webp`,
          imageCaption: `Growth mindset honestly: belief + effort + feedback. Belief alone doesn't produce growth. Real research is more nuanced than pop versions.`,
          vocab: [
            {
              word: `growth mindset`,
              definition: `Carol Dweck's research finding: people who believe abilities can grow with effort tend to persist through challenge and develop higher abilities than people who believe abilities are fixed. Pop version oversimplifies by removing the effort and feedback components. Real growth mindset is belief + actual practice + useful feedback, not "just believe in yourself."`,
              audioPrompt: `Growth mindset is Carol Dweck's research finding from Stanford, accumulated over decades, {name}. People who believe their abilities can grow with effort tend to persist through challenge, learn more from feedback, and develop higher abilities than people who believe abilities are fixed. The pop version of growth mindset has gotten oversimplified. "Just believe you can do anything" isn't the finding. The research shows that BELIEF combined with ACTUAL EFFORT and SKILLED FEEDBACK produces growth. Belief alone doesn't. Schools that taught growth mindset posters without changing how students engaged with challenge produced minimal improvements. Schools that combined growth mindset framing with deliberate practice, useful feedback, and tolerance for productive struggle produced real gains. Knowing the honest version protects you from both dismissing the research (it's real) and from naive pop versions (which don't work).`,
            },
            {
              word: `productive struggle`,
              definition: `Engagement with difficulty that is calibrated to produce growth rather than either frustration or boredom. The growth mindset research shows that tolerance for productive struggle is a key component of actual development. Neither avoiding all difficulty nor facing difficulty without support produces the growth that productive struggle with useful feedback does.`,
              audioPrompt: `Productive struggle is engagement with difficulty that is calibrated to produce growth rather than either frustration or boredom, {name}. It is a key component of what the growth mindset research actually shows. The schools that combined growth mindset framing with deliberate practice and useful feedback specifically included tolerance for productive struggle as part of the approach. The struggle must be productive: calibrated to be hard enough to require real effort and produce genuine learning, but not so hard that it produces only confusion and failure. Pure ease produces no growth. Pure difficulty without support produces frustration and learned helplessness. The middle — real challenge with the resources to engage it — is productive struggle. For adaptability, productive struggle means facing the discomfort of changing beliefs and approaches rather than either avoiding all discomfort or collapsing under it.`,
            },
            {
              word: `structural factors`,
              definition: `External conditions like systemic inequality, economic circumstances, or life situation that affect how difficult adaptation is, independent of mindset. Growth mindset matters AND structural factors matter. Pretending mindset is everything ignores real constraints; pretending it's nothing ignores real benefits. Honest adaptability research takes both seriously.`,
              audioPrompt: `Structural factors are external conditions that affect how difficult adaptation is, independent of mindset, {name}. They include systemic inequality, economic circumstances, family situation, health conditions, and many other features of a person's environment that are not simply a matter of attitude or belief. Growth mindset research is real and the effects are real. Structural factors are also real. Pretending mindset is everything ignores genuine constraints that some people face that make adaptation harder regardless of how they think about it. A person facing economic hardship adapts under different conditions than someone with resources. Pretending structural factors are everything ignores the real benefits of mindset and skill. The honest version of adaptability research takes both seriously: mindset matters, effort matters, and circumstances matter. The kids who benefit most from growth mindset and adaptability training are the ones who also have enough structural support for those skills to operate.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Goes Wrong When People Don't Adapt`,
          paragraphs: [
            `Understanding adaptation requires understanding the patterns of how it fails. Researchers have documented several recurring failure modes. Recognizing them in yourself before they become serious is one of the most valuable things this lesson can give you.`,
            `First failure: denial. Refusing to acknowledge that change has happened. "This is temporary." "Things will go back." "If I just hold the line, this will pass." Sometimes true. Often a way to avoid the discomfort of accepting that the situation has shifted. Denial tends to extend the period of suffering by preventing the adaptation that would actually help. The longer denial lasts, the harder eventual adaptation becomes.`,
            `Second failure: doubling down on what used to work. When a strategy stops working, the intuitive response is often to apply it harder. "I just need to study more the same way." "I just need to push the relationship harder in the way we always have." Sometimes the issue really is insufficient effort. Often the issue is that the situation has changed and the old strategy no longer fits. Recognizing the difference is hard but important.`,
            `Third failure: catastrophizing. Treating change as worse than it actually is. "This ruins everything." "I'll never recover from this." Catastrophizing produces emotional flooding that prevents the careful thinking adaptation requires. The situation usually isn't as bad as the catastrophizing suggests; treating it as if it were makes effective response harder. This is the opposite failure mode from denial; both involve misreading the situation.`,
            `Fourth failure: paralysis. Recognizing change is real but being unable to act. "I don't know what to do." "I need to wait until I have more information." Sometimes more information genuinely helps. Often paralysis becomes its own problem: the window for effective action passes while you wait for certainty that never comes. Adaptable people commit to action with incomplete information, knowing they'll adjust as they learn more.`,
            `Fifth failure: identity defense. Treating the change as a threat to who you are rather than as a circumstance to navigate. "I'm not the kind of person who does that." "If I adapt, I'll lose who I am." Sometimes identity protection is legitimate (some things are worth not changing). Often it's a way to avoid the discomfort of growth. The skill is distinguishing between adaptations that compromise something important and adaptations that simply extend who you can be.`,
          ],
          image: `/voyager-assets/future-skills/l09-s3-failures.webp`,
          imageCaption: `Five failure modes: denial, doubling down, catastrophizing, paralysis, identity defense. Recognizing them early prevents serious harm.`,
          vocab: [
            {
              word: `cognitive reframing`,
              definition: `Skill of consciously changing how you interpret a situation, especially when the original interpretation isn't helping. Distinct from "lying to yourself" because the new interpretation must also be accurate. Different accurate interpretations of the same situation produce different emotional and practical responses; choosing the most useful accurate interpretation is the skill.`,
              audioPrompt: `Cognitive reframing is the skill of consciously changing how you interpret a situation, especially when the original interpretation isn't helping, {name}. Distinct from "lying to yourself" because the new interpretation must also be accurate. Different accurate interpretations of the same situation produce different emotional and practical responses. Choosing the most useful accurate interpretation is the skill. Example: "I failed the test" and "I haven't yet learned this material well enough" are both accurate descriptions of the same situation. The first treats failure as a static fact about you. The second treats it as a current state that can change. Same situation; different practical response. Cognitive reframing comes from cognitive behavioral therapy and related psychological research. It's one of the most useful adaptability skills because it changes what you experience as well as what you do about it.`,
            },
            {
              word: `identity defense`,
              definition: `Treating a change as a threat to who you are rather than as a circumstance to navigate. One of the five adaptability failure modes. "I'm not the kind of person who does that." The skill is distinguishing between adaptations that genuinely compromise something important and those that simply extend who you can be. Identity defense is sometimes legitimate and often a way to avoid the discomfort of growth.`,
              audioPrompt: `Identity defense is the failure mode of treating change as a threat to who you are rather than as a circumstance to navigate, {name}. It is one of the five documented adaptability failure modes. "I'm not the kind of person who does that." "If I adapt, I'll lose who I am." Sometimes identity protection is legitimate: some things genuinely are worth not changing about yourself, and some adaptations would compromise something important. Often, though, identity defense is a way to avoid the discomfort of growth. The sport injury case illustrates this: treating the sport as the only valid identity makes the loss feel total and prevents the natural rebuilding of identity through new engagement. The skill is distinguishing between adaptations that compromise something important and adaptations that simply extend who you can be. Real identity is more robust than the defended version usually assumes; people who adapt significantly often find they're still recognizably themselves.`,
            },
            {
              word: `doubling down`,
              definition: `The failure mode of applying a strategy harder and longer when it stops working, instead of recognizing that the situation has changed and a different approach is needed. Intuitive because previous success with the strategy makes it feel like the right tool. Harmful because it delays the recognition that adaptation is required.`,
              audioPrompt: `Doubling down is the failure mode of applying a strategy harder when it stops working, instead of recognizing that the situation has changed and a different approach is needed, {name}. It is one of the most common adaptability failure modes and one of the hardest to recognize in yourself. When a strategy stops working, the intuitive response is often to do more of it. "I just need to study harder the same way." "I just need to push the relationship more in the pattern that worked before." Sometimes the issue really is insufficient effort and the same strategy applied more intensely will work. Often the issue is that the situation has changed and the old strategy no longer fits. Recognizing the difference is hard because previous success with the strategy makes it feel like the right tool. The diagnostic question is: has the strategy been applied consistently without results, or has it just not been applied enough? If consistently without results, doubling down is probably wrong.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Three Cases Of Significant Change`,
          paragraphs: [
            `Now to the cases. The three challenges below represent three different change contexts: a kid whose family is moving across the country in two months, a teen whose long-term sport has been ended by injury, and someone whose group of friends has rapidly shifted in ways that left them outside.`,
            `In each case, the immediate emotional response is real and legitimate. The cases aren't about pretending change doesn't hurt. The cases are about what adaptation actually looks like in the days, weeks, and months after the initial shock. The intuitive responses to each situation often extend the suffering; the more skilled responses don't eliminate it but they shorten it and produce better outcomes.`,
            `One framing as you read each case. Notice what the more effective approach requires giving up. Usually some combination of: the comfort of denial, the satisfaction of being right that the situation is unfair, the safety of paralysis, the identity protection of refusing to engage. These are all real things that the skilled adapter trades away. The trade is worth it, but the costs are real. Adaptation isn't free.`,
            `One last framing. Different changes call for different specific responses. The four components of adaptability (accurate assessment, emotional regulation, belief updating, action under uncertainty) apply broadly, but how they play out varies. As you work through the cases, notice both what's general (the components recur) and what's specific to each situation. Real adaptability requires both: principles plus the judgment to apply them to specific circumstances.`,
          ],
          image: `/voyager-assets/future-skills/l09-s4-cases.webp`,
          imageCaption: `Three change contexts: moving, injury, social shift. Same components apply differently across each.`,
          vocab: [
            {
              word: `chronic change`,
              definition: `Acute change: sudden, time-bound event (move, injury, breakup). Chronic change: ongoing shift over time (gradual social drift, slow physical changes, gradual loss). Both require adaptation but in different ways. Acute change shocks but is bounded; chronic change accumulates and is often harder to notice until significant.`,
              audioPrompt: `The distinction between acute and chronic change matters for adaptability, {name}. Acute change is sudden and time-bound: a move happening in two months, an injury that occurs in one moment, a breakup announced at one specific time. Acute change shocks but is bounded; you can mark when it started and direct your adaptation toward the new situation. Chronic change is ongoing shift over time: a friendship slowly drifting, a body gradually changing, a parent's job slowly demanding more time. Chronic change accumulates and is often harder to notice until it becomes significant. Both require adaptation but in different ways. Acute change calls for acute response; chronic change calls for ongoing reassessment. Knowing the distinction helps you recognize what kind of change you're dealing with and what kind of response it actually calls for.`,
            },
            {
              word: `identity reconstruction`,
              definition: `The process of rebuilding who you are after a significant loss or change, rather than either forcing the old identity or erasing it. Takes months to years. Works best when the loss is grieved properly first, existing skills are identified as transferable, and new engagement is allowed to produce new identity organically rather than forcing it.`,
              audioPrompt: `Identity reconstruction is the process of rebuilding who you are after a significant loss or change, {name}. Distinct from identity defense, which resists change, and from identity erasure, which abandons the old self entirely. The sport injury case illustrates it: six years of competitive sport built skills, relationships, and a sense of self that can't just be discarded. The specific competitive future is gone, but what was built doesn't disappear. Identity reconstruction acknowledges what was real about the old identity, identifies what transfers to new contexts, and lets new identity emerge through new engagement over time. It takes months to years, not days. It works best when the loss is grieved properly first, rather than skipped. Trying to build a new identity on top of unprocessed loss tends to produce fragile results. Integration is more durable than either forced continuation or complete replacement.`,
            },
            {
              word: `social adaptation`,
              definition: `Adapting when changes involve other people's choices and feelings, not just your own circumstances. Requires the same four adaptability components plus the additional complexity of multiple parties. Often involves honest engagement rather than either denial or overreaction. Social changes are often gradual; the response should match the pace.`,
              audioPrompt: `Social adaptation is adapting to changes that involve other people's choices and feelings, not just your own circumstances, {name}. It requires the same four components of effective adaptability, with the additional complexity of multiple other people's feelings, choices, and responses. A friend group shifting, a relationship changing, or a social dynamic evolving requires you to assess the situation accurately while also recognizing that you can't fully control how other people respond. The social case in this lesson illustrates the key moves: honest observation rather than accusation, naming what you've noticed, listening to what the other person says, and making a decision about how to invest your social energy based on what you learn. Social changes are often gradual rather than sudden, which means the response should match the pace: neither ignoring gradual drift nor dramatically overreacting to it. The honest conversation is often the most important single action.`,
            },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `As you work through each case, ask yourself: which failure modes would I default into in this situation? Honest answer matters more than performative answer. Most of us have one or two failure modes we slide into under stress. Knowing yours is the first step to noticing them earlier next time.`,
            `One important note about the cases. The "best" approach in each case isn't a guaranteed happy ending. Sometimes adaptations succeed; sometimes circumstances are genuinely too hard for any approach to fix. The skilled approach increases the probability of good outcomes and reduces the duration of suffering; it doesn't guarantee perfect resolution. Real life has cases where bad things happen and no amount of skill makes them okay. The framework is for the situations where adaptation is possible — which is most of them but not all of them.`,
            `Another note. The cases involve significant changes but not catastrophic ones. The four-component framework still applies to genuinely catastrophic change (death, abuse, major illness, war), but those situations also require professional support that goes beyond what this lesson covers. The framework gives you tools for the changes you'll most often face. For genuinely catastrophic change, the most adaptive move often includes "seek professional help."`,
            `One final framing. Adaptability is one of the meta-skills that compounds most over a lifetime. Someone who learns the four components and the failure modes at 12 will navigate hundreds of significant changes more effectively than someone who doesn't develop the skill until 30. The compound effect across decades is enormous. Your generation will face more change than any generation in living memory — technology, economy, climate, demographics. The framework you build now will be tested many times.`,
          ],
          image: `/voyager-assets/future-skills/l09-s5-before.webp`,
          imageCaption: `Adaptability is the meta-skill for an unpredictable future. Building it at 12 produces decades of compound returns.`,
          vocab: [
            {
              word: `resilience`,
              definition: `Capacity to recover from setbacks and continue functioning effectively. Related to but distinct from adaptability. Adaptability is about navigating change; resilience is about bouncing back from harm. Researchers like Richard Davidson and George Bonanno study what predicts resilience; findings include strong relationships, sense of meaning, and learned skills rather than just personality traits.`,
              audioPrompt: `Resilience is the capacity to recover from setbacks and continue functioning effectively, {name}. Related to but distinct from adaptability. Adaptability is about navigating change. Resilience is about bouncing back from harm. Both matter; both are learnable. Researchers like Richard Davidson at Wisconsin and George Bonanno at Columbia study what predicts resilience. Findings include strong relationships, sense of meaning and purpose, the ability to find positive meaning in difficult experiences, willingness to seek help, and learned skills like cognitive reframing. Resilience isn't just personality; it's largely the product of specific patterns of thinking and behaving that develop over time. The same is true of adaptability. Knowing this prevents the false belief that some people are just "born resilient" and others aren't.`,
            },
            {
              word: `adaptability compounding`,
              definition: `The way adaptability skills accumulate in value over a lifetime. Someone who learns the four components and the five failure modes at 12 will navigate hundreds of significant changes more effectively than someone who develops the skill at 30. The compound effect across decades of a life facing technological, economic, and personal change is substantial.`,
              audioPrompt: `Adaptability compounding is the way adaptability skills accumulate in value over a lifetime, {name}. Adaptability is one of the meta-skills that compounds most over time. Someone who learns the four components and the failure modes at 12 will navigate hundreds of significant changes more effectively than someone who doesn't develop the skill until 30. The compound effect across decades is enormous because significant changes occur constantly throughout life: family moves, relationship shifts, health challenges, career transitions, technological disruptions, economic changes. Each change handled more effectively than it would otherwise have been is a real-world benefit. Your generation will face more change than any generation in living memory — technology, economy, climate, demographics. The framework you build now will be tested many times. Building it early means more practice at the skill and more compounding time for the skill to produce better outcomes.`,
            },
            {
              word: `professional support`,
              definition: `Help from therapists, counselors, or other trained professionals for navigating change, especially in cases of genuinely catastrophic or traumatic events. The four-component adaptability framework provides tools for changes that are difficult but navigable. For genuinely catastrophic change, professional support is an adaptive move in itself.`,
              audioPrompt: `Professional support means help from therapists, counselors, or other trained professionals for navigating significant change, {name}. The four-component adaptability framework in this lesson provides tools for the changes you'll most often face. For genuinely catastrophic change — death, abuse, major illness, trauma — those components still apply, but they also need to be combined with professional support that goes beyond what any single lesson covers. Importantly, seeking professional support is itself an adaptive move. It's not a sign of weakness or failure to adapt; it's a recognition that some changes are beyond what anyone should navigate alone without specialized help. People with strong adaptability skills are often more willing to seek professional support when needed, not less, because they understand that using available resources is part of effective adaptation. The most adaptive response to genuinely catastrophic change often includes "identify and access professional help."`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l09-case-study`,
          type: `case-study`,
          headline: `Three Real Cases Of Significant Change`,
          intro: `{name}, three people face different changes. Each has an intuitive response and a research-informed response available. For each, identify what would actually serve them better.`,
          cases: [
            {
              id: `case-1`,
              title: `Your Family Is Moving Across The Country In Two Months`,
              context: `Your parent got a job in a city 2,000 miles away. The family will move in eight weeks. You've lived in this neighborhood your whole life. Your best friends are here. The school you've been planning to start in the fall is here. Your parents are excited about the opportunity but also stressed. You're scared, angry, and grieving without quite knowing how to name it.`,
              question: `What approach is most likely to actually help you navigate this well?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Refuse to engage. Don't help pack. Don't research the new city. Hope that if you resist hard enough, the move won't happen or your parents will change their minds.`,
                  outcome: `This is denial plus identity defense. It's understandable as an immediate response but extends the suffering. The move is still going to happen. The eight weeks you spend in denial are eight weeks you're not adapting. When you land in the new city completely unprepared, the adjustment is much harder. The relationship with your parents is strained, which removes one of your main resources for adaptation. The intuitive resistance doesn't actually serve you, even though it feels right in the moment.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Let yourself feel the difficult feelings fully (grief for what you're leaving, anger at not having control, fear of the unknown). Talk to a trusted adult about them. Then start active adaptation: research the new city, look up the new school, identify what you want to maintain (online connection with current friends, specific hobbies). Plan a goodbye that honors the chapter ending. Arrive in the new city with some preparation rather than complete shock.`,
                  outcome: `This is the four-component approach. Emotional regulation (feel without being controlled), accurate assessment (the move is happening; what's the actual situation?), belief updating (some things will be different; some can be maintained), action under uncertainty (research and prepare even though you don't know exactly what will happen). The adaptation isn't pain-free. But the period of suffering is shorter, you arrive better prepared, your relationship with your parents survives the transition, and you bring more of who you are into the new place rather than arriving emptied out.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Suppress the feelings completely. Pretend you're fine with the move. Don't talk about it. Focus on packing efficiently.`,
                  outcome: `This is the opposite failure from option A but produces similar problems. Suppressed emotions don't disappear; they leak out as irritability, sleep problems, or sudden breakdowns. The lack of conversation with your parents leaves you isolated. Pretending you're fine means people around you don't offer support. When you arrive in the new city, the unprocessed feelings come up anyway, often in worse forms than if you'd worked through them earlier. Suppression looks mature but isn't.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates all four adaptability components working together. The key insight: difficult feelings don't go away through denial OR suppression; they pass through being acknowledged, named, and experienced fully. The skilled response includes the feelings AND the practical adaptation. Trying to skip the feelings (option C) is as bad as drowning in them (option A). The middle path is harder but works.`,
            },
            {
              id: `case-2`,
              title: `Your Long-Term Sport Just Ended Because Of Injury`,
              context: `You've trained competitively in your sport for 6 years. It's a major part of your identity and your social world. Two weeks ago, you broke a bone in a way that means you can't return to the sport at competitive level. The doctor was clear: not "rest and you'll be back," but "this is permanent." You feel like a huge part of who you are just got taken away.`,
              question: `What approach is most likely to help you actually rebuild?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Push through anyway. Train harder when you're medically cleared. Try to return to competitive level despite the doctor's warning. If you can't have your sport, what's even the point?`,
                  outcome: `This is identity defense combined with denial of medical reality. It often produces re-injury, sometimes worse than the original. It also delays the actual adaptation by months or years. You're treating the sport as the only valid identity, which makes the loss feel total. Some people in this situation cause permanent additional damage trying to defy medical advice. Others spend years stuck trying to be what they can't be anymore, which prevents them from discovering what else they could become.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Grieve the loss properly: the sport mattered, the identity built around it mattered, the version of your future that included it is gone. Then start exploring what skills the sport gave you that transfer (discipline, work ethic, ability to learn complex physical skills, teamwork, comfort with discomfort). Look for new domains where those skills apply. Stay connected to your sport community as a coach, mentor, or in some adjacent role if that fits. Identity rebuilds slowly through new engagement, not through forcing it.`,
                  outcome: `This is the integrated approach. Acknowledge the loss is real. Recognize that the skills you built transfer to other domains. Use the sport community connection as a resource rather than something to leave behind. Let identity rebuild through new engagement rather than trying to manufacture it. The new identity won't replace the old; it'll be something different, possibly better in ways you can't see yet. The grief and the rebuilding happen simultaneously over months and years.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Drop everything related to the sport. Don't talk to your former teammates. Find completely new activities. Pretend the sport never mattered.`,
                  outcome: `This is identity erasure rather than identity rebuilding. The connections, skills, and meaning from 6 years of the sport are real and valuable; cutting them off entirely loses resources you'd need. The new identity built on top of suppressed loss tends to be fragile because the underlying grief hasn't been processed. People who do this often resurface the loss years later in ways they didn't expect. Integration works better than amputation.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates identity reconstruction through skilled adaptation. The intuitive approaches (force the old identity or erase it entirely) both fail. The middle path acknowledges what was real about the old identity, identifies what transfers, and lets the new identity emerge through new engagement over time. Identity isn't static; it can be rebuilt. The rebuilding takes years, not months, and works best when the loss is grieved properly first.`,
            },
            {
              id: `case-3`,
              title: `Your Friend Group Has Shifted And You're Outside`,
              context: `Over the past six months, the friend group you were part of has changed. New people joined; old dynamics shifted. You're still nominally part of the group, but you increasingly feel like an outsider at the gatherings. The conversations don't include you the way they used to. You're not sure if you did something wrong or if the group just naturally evolved past where you fit. The next gathering is in three days and you're dreading it.`,
              question: `What approach is most likely to help you navigate this well?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Keep showing up the same way. Pretend nothing has changed. Hope that if you act normal long enough, the group will reset to how it used to be.`,
                  outcome: `This is denial of an ongoing change. The group has shifted; pretending otherwise doesn't reverse the shift. Continuing to show up while feeling like an outsider gradually accumulates resentment and discomfort. The people in the group can usually tell something's off but don't have language to address it. The friendships fade through unaddressed drift rather than honest engagement. Six months from now you're in the same situation or worse.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Have one honest conversation with the friend in the group you're closest to. Not accusatory ("you guys have excluded me") but observational ("I've noticed the group has changed and I'm feeling outside of it; have you noticed this too?"). Listen for what they say. Some shifts can be addressed through naming them; some are real drift that won't reverse but is worth understanding. Then make an honest choice: invest in repair if it's possible, or invest more in friendships outside this group if it isn't.`,
                  outcome: `This is the integrated adaptability approach. Accurate assessment (the situation has shifted; what's actually happening?). Emotional regulation (engage with the discomfort rather than avoiding it). Belief updating (maybe the group has changed permanently; maybe not; the honest conversation tells you). Action under uncertainty (commit to a response based on what you learn). The conversation itself often clarifies the situation. Sometimes it produces unexpected repair. Sometimes it confirms drift is real, which allows you to invest your social energy more wisely.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Cut everyone in the group off immediately. Block them on social media. Find a new group from scratch. Don't acknowledge what happened.`,
                  outcome: `This is overreaction and identity defense combined. Some of the friendships in the group are probably still real and worth preserving even if the group dynamic has changed. Cutting everyone off loses resources you'd need. It also signals to other potential friend groups that you handle social difficulty by burning bridges, which makes new groups harder to form. Less dramatic responses usually serve you better.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates social adaptation, which requires the same components as other adaptation but with the added complexity of multiple other people's feelings and choices. The skilled approach involves honest engagement (the conversation), accepting what the conversation reveals, and adjusting investment based on what you learn. Social changes are often gradual; the response should match the pace rather than reacting dramatically to either presence or absence of resolution.`,
            },
          ],
          reflectionPrompt: `All three cases share a pattern: the intuitive responses (denial, force, suppression, overreaction) feel like protection but cost more than they save. The skilled responses involve more discomfort in the short term and produce better outcomes. Which case felt most personally relevant?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the four components of effective adaptability?`,
              options: [
                `Hope, action, faith, persistence`,
                `Accurate situation assessment, emotional regulation under uncertainty, willingness to update beliefs and approaches, action under uncertainty; people who are "adaptable" usually have all four; people who struggle with change are usually weak on at least one`,
                `Confidence, optimism, planning, networking`,
                `Patience, intelligence, charm, money`,
              ],
              correctIndex: 1,
              explanation: `Adaptability isn't a single trait. Researchers who study it identify these specific components. Knowing them lets you diagnose which one you're weak on and build that specifically.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "emotional agility"?`,
              options: [
                `Quick emotions`,
                `Term from Susan David's 2016 book: ability to engage with difficult emotions productively rather than either suppressing them or being consumed by them; distinct from "positive thinking" (which involves suppression) and "letting feelings drive you" (controlled by them); crucial for adaptation`,
                `Mood swings`,
                `Emotional intelligence`,
              ],
              correctIndex: 1,
              explanation: `Emotional agility lets you feel the feeling fully while choosing your response. People with this skill can act effectively while feeling uncomfortable. They can grieve what was while engaging with what's now. They can be afraid and still take needed action.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the "honest" version of growth mindset?`,
              options: [
                `Just believe in yourself`,
                `Carol Dweck's research finding: belief that abilities can grow with effort PLUS actual effort PLUS skilled feedback produces growth; belief alone doesn't; pop versions oversimplify by removing effort and feedback components; "growth mindset posters" alone don't work`,
                `Positive thinking always wins`,
                `Anyone can do anything`,
              ],
              correctIndex: 1,
              explanation: `Schools that taught growth mindset posters without changing how students engaged with challenge produced minimal improvements. Schools that combined growth mindset framing with deliberate practice, useful feedback, and tolerance for productive struggle produced real gains.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are common failure modes when people don't adapt well?`,
              options: [
                `Being too smart`,
                `Denial (refusing to acknowledge change), doubling down on what used to work, catastrophizing (treating change as worse than it is), paralysis (recognizing change but unable to act), identity defense (treating change as threat to who you are)`,
                `Being too emotional`,
                `Caring too much`,
              ],
              correctIndex: 1,
              explanation: `Most people have one or two failure modes they slide into under stress. Knowing yours is the first step to noticing them earlier. Recognizing failure modes in yourself before they become serious is one of the most valuable adaptability skills.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "cognitive reframing"?`,
              options: [
                `Changing your thoughts`,
                `Skill of consciously changing how you interpret a situation, especially when the original interpretation isn't helping; distinct from "lying to yourself" because the new interpretation must also be accurate; different accurate interpretations produce different practical responses`,
                `Positive thinking`,
                `Wishful thinking`,
              ],
              correctIndex: 1,
              explanation: `"I failed the test" and "I haven't yet learned this material well enough" are both accurate descriptions of the same situation. The first treats failure as a static fact; the second treats it as a current state that can change. Same situation; different practical response.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the difference between acute and chronic change?`,
              options: [
                `Severity`,
                `Acute change: sudden, time-bound event (move, injury, breakup); chronic change: ongoing shift over time (gradual friendship drift, slow physical changes); both require adaptation but in different ways; chronic is often harder to notice until significant`,
                `Pain levels`,
                `Importance`,
              ],
              correctIndex: 1,
              explanation: `Acute change shocks but is bounded; you can mark when it started. Chronic change accumulates and is harder to notice. Knowing the distinction helps you recognize what kind of change you're dealing with and what kind of response it calls for.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "resilience" and how does it differ from adaptability?`,
              options: [
                `Strong personality`,
                `Resilience: capacity to recover from setbacks and continue functioning effectively; adaptability: about navigating change; resilience is largely product of patterns (relationships, sense of meaning, cognitive reframing) rather than just personality; both are learnable`,
                `Same thing`,
                `Born trait`,
              ],
              correctIndex: 1,
              explanation: `Researchers like Richard Davidson and George Bonanno study what predicts resilience. Findings include strong relationships, sense of meaning, ability to find positive meaning in difficulty. Resilience isn't just personality; it's largely learnable patterns.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does identity defense often fail as a response to change?`,
              options: [
                `Identity doesn't matter`,
                `Treating change as threat to who you are (rather than circumstance to navigate) often prevents the adaptation that would help; sometimes legitimate (some things worth not changing) but often a way to avoid the discomfort of growth; the skill is distinguishing adaptations that compromise something important from ones that simply extend who you can be`,
                `You should always change`,
                `Identity is bad`,
              ],
              correctIndex: 1,
              explanation: `Identity isn't static; it can extend and reshape over a lifetime. Refusing to let it shift when circumstances genuinely change traps you in a version of yourself that no longer fits the situation.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Adaptability is a personality trait you're born with or without.`,
              correctAnswer: false,
              explanation: `False. Adaptability research consistently shows it's largely learnable skills, not innate personality. The four components (accurate assessment, emotional regulation, belief updating, action under uncertainty) can all be developed. Same for resilience (relationships, meaning, cognitive reframing). Knowing this prevents the false belief that some people are just "born adaptable."`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "My parents are getting divorced; I'm just going to ignore it and act like nothing's happening." Based on this lesson, what's the most useful response?`,
              options: [
                `"Good plan, stay strong"`,
                `"That sounds like denial-plus-suppression, which is understandable as an immediate response but tends to extend the suffering. The divorce is happening; pretending otherwise doesn't reverse it. Suppressed feelings don't disappear; they leak out as irritability, sleep problems, or sudden breakdowns. A better approach: let yourself feel the difficult feelings (grief, anger, fear) with a trusted adult or friend. Then take small specific actions on the things you can affect (your relationships with each parent, your own routines, what you want to maintain). Talk to a counselor if available. The skilled approach isn't pain-free, but it shortens the period of suffering and produces better outcomes than pretending."`,
                `"Just be strong"`,
                `"Your parents are wrong"`,
              ],
              correctIndex: 1,
              explanation: `Real applied adaptability literacy. Don't endorse the denial response; identify it as the failure mode it is. Suggest the integrated approach (acknowledge feelings + take action). This is the kind of advice that can shift someone's trajectory during a hard family event.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you think of adaptability as a trait or a skill? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the five failure modes (denial, doubling down, catastrophizing, paralysis, identity defense) do you slide into most often under stress? Honest answer?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can navigate change well, what does that mean for the dozens of significant changes you'll face over the next 50 years?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one ongoing change in your life right now. Apply the four-component framework. Where are you strong? Where are you weak?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there changes the framework doesn't handle well? What about genuinely catastrophic events—abuse, death, war, illness? When does the framework reach its limits?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult you respect about a major change they navigated. What did they do? Which of the four components did they rely on most?` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Adaptability compounds across a lifetime of changes. Two paths.`,
          familyActivity: {
            title: `The Family Change History Conversation`,
            duration: `45 minutes`,
            description: `At dinner, share the four components and the failure modes. Then ask each adult to share a significant change they've navigated (job change, move, loss, life shift). What worked? What didn't? Which failure modes did they slide into? The conversation usually surfaces a lot of family history that explains current dynamics. It also gives you concrete examples from people you know of how adaptation actually unfolds over time.`,
          },
          projectOption: {
            title: `Read One Real Adaptability Book, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one foundational book: Susan David's "Emotional Agility" (2016) for the emotional component, Carol Dweck's "Mindset" (the honest version, not just the slogan) for the belief component, or George Bonanno's "The End of Trauma" (2021) for the resilience research. Read carefully over 4 weeks. Apply concepts to ongoing changes in your life. Write 2,000 words at the end on what you learned. Real applied adaptability work at a level few adults do.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Reading a real adaptability book at 12 is genuinely unusual and useful.`,
          },
          identityQuestion: `If you become someone who can navigate significant change well (including changes you didn't choose and don't want), what does that mean for what kind of life you can build?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the four components of adaptability and can apply them deliberately.`,
            `A person who can name my own failure modes and catch them earlier.`,
            `Someone willing to feel difficult emotions fully instead of avoiding them.`,
          ],
          saveKey: `identity_responses_fs_11_12_09`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. Ninth Future Skills lesson done. You now know the four components of adaptability (accurate assessment, emotional regulation, belief updating, action under uncertainty), the honest version of growth mindset, the five failure modes, the difference between acute and chronic change, cognitive reframing, and resilience as a learnable pattern rather than personality trait. Real researchers: Carol Dweck, Susan David, Richard Davidson, George Bonanno. You'll face dozens of significant changes over the next 50 years; the framework you build now compounds. Next time we go into another huge meta-skill: collaboration and teamwork. What actually makes teams work? Three real positions. Argument Builder format. Let's go. — Byte`,
          badge: `change-navigator`,
          badgeName: `Change Navigator`,
          xpEarned: 75,
          competencies: [
            `Articulates four components of adaptability (assessment, regulation, updating, action)`,
            `Knows honest growth mindset (belief + effort + feedback)`,
            `Recognizes five failure modes (denial, doubling down, catastrophizing, paralysis, identity defense)`,
            `Distinguishes acute from chronic change`,
            `Knows cognitive reframing and resilience as learnable patterns`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Collaboration & Teamwork`,
            hook: `Three positions on what makes teams actually work. Individual excellence vs team dynamics vs context-matching. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L09 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
