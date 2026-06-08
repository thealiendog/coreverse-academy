// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L16 — Building a Spiritual Practice: Which Approach is Strongest?
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Applied Contemplative Practice
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (daily ritual / embedded mindfulness / periodic deep retreat)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l16-v1";

const INNERWORLD_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-16`,
      title: `Building a Spiritual Practice: Which Approach is Strongest?`,
      duration: 35,
      xpReward: 75,
      badge: `practice-builder`,
      badgeName: `Practice Builder`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, after 15 lessons on consciousness, philosophy of self, neuroscience of meditation, archetypes, and contemplative traditions, today we get practical. What does it actually look like to build a spiritual or contemplative practice that fits a real 12-year-old's life? You have school. You have homework. You have family. You have friends. You have screens. You don't have hours of free time a day to sit in silence. Three serious approaches exist for building a practice within a real life. Daily ritual, embedded mindfulness, and periodic deep retreat. Today we look at each, then you pick one and defend it as the strongest approach for someone your age in your circumstances. There is no universally right answer, but some answers fit better than others.`,
          headline: `Building a Spiritual Practice`,
          subtitle: `Three approaches, your circumstances, your call.`,
          visual: `/voyager-assets/inner-world/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Spiritual Practice" Actually Means Here`,
          paragraphs: [
            `Before we go further, let's be clear about terms. "Spiritual practice" in this lesson means any disciplined practice aimed at cultivating awareness, presence, emotional regulation, or connection to something larger than the everyday self. This includes practices that have religious roots (Buddhist meditation, Christian contemplative prayer, Sufi dhikr, Hindu meditation) and secular practices that draw from those roots (mindfulness, breathwork, somatic awareness). It does NOT require any particular religious belief. You can do these practices as an atheist, a Christian, a Buddhist, or someone who hasn't figured out what you believe.`,
            `Why might a 12-year-old want a practice at all? The research from Lesson 7 showed real benefits from meditation: improved attention regulation, reduced anxiety, modest structural brain changes over time. From Lesson 11 on emotional alchemy, contemplative practices help with hearing your own emotions rather than suppressing them. From Lesson 8 on the Default Mode Network, certain practices reduce rumination loops. From Lesson 5 on placebo, expectation and ritual produce real biological effects. The benefits aren't mystical. They're well-documented and modest.`,
            `What this lesson is NOT recommending: hours of daily practice, intense retreats inappropriate for adolescent brains, joining a specific religion, or any of the wellness-industry overreach about manifesting your reality through meditation. The question is more grounded: how do you build a small, real practice that fits a real teen's life and produces the modest, measured benefits the research actually supports?`,
          ],
          image: `/voyager-assets/inner-world/l16-s1-meaning.webp`,
          imageCaption: `Grounded benefits. Real life. No mysticism required.`,
          vocab: [
            {
              word: `spiritual practice`,
              definition: `Any disciplined practice aimed at cultivating awareness, presence, or connection to something larger than the everyday self. Includes religious and secular forms.`,
              audioPrompt: `Spiritual practice in this lesson means any disciplined practice aimed at cultivating awareness, presence, emotional regulation, or connection to something larger than the everyday self, {name}. The word "spiritual" makes some people uncomfortable. If it does, you can substitute "contemplative practice" or "inner work." The label matters less than the substance. The substance: regular practices that have measurable effects on attention, emotion, and well-being. You don't need to believe anything specific to do them. You just need consistency and a real fit with your life.`,
            },
          ,
            {
              word: `contemplative prayer`,
              definition: `A form of disciplined inner practice rooted in religious tradition, particularly Christian, aimed at cultivating presence and connection to something larger than the everyday self.`,
              audioPrompt: `Contemplative prayer is a disciplined practice of inner attention rooted in the Christian tradition, {name}. It is one of the forms the lesson names as examples of spiritual practice — alongside Buddhist meditation, Sufi dhikr, and Hindu meditation. What these forms share is the underlying aim: cultivating awareness, presence, emotional regulation, or connection to something larger than the everyday self. The word "prayer" can make some people assume religious belief is required. In contemplative practice, the substance matters more than the doctrinal framing. The research benefits track the practice itself.`,
            },
            {
              word: `emotional regulation`,
              definition: `The capacity to manage and respond to emotional experience without being overwhelmed or suppressing it. One of the documented benefits of consistent contemplative practice.`,
              audioPrompt: `Emotional regulation is the capacity to manage and respond to emotional experience without being overwhelmed or suppressing it, {name}. It is one of the specific benefits the lesson names as a reason a 12-year-old might want a contemplative practice at all. Research from the lesson connects it to emotional alchemy work: practices that help you hear your own emotions rather than push them away. Emotional regulation is not about becoming less emotional. It is about developing a more spacious relationship to your own emotional life. The benefits are well-documented and modest, not mystical.`,
            }
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Approach 1: Daily Ritual`,
          paragraphs: [
            `The first approach is daily ritual. You commit to a specific contemplative practice at a specific time, every day, in the same place if possible. The classic version: 10-20 minutes of meditation each morning before school. Other versions include morning pages (writing 3 pages stream-of-consciousness as Julia Cameron describes in The Artist's Way), evening reflection journaling, a daily breath practice, daily reading of a wisdom text, or daily prayer for those with religious commitments.`,
            `The strength of daily ritual is consistency. Real benefits from contemplative practice come from cumulative effects over months and years, not from intensity. Research on mindfulness benefits typically uses programs that meet daily or near-daily. The brain changes documented in long-term meditators come from thousands of hours of practice spread across years. Showing up every day, even for a short period, produces results that occasional intense practice doesn't.`,
            `The challenge of daily ritual is realistic for a teen: getting up earlier, finding a quiet space at home, sustaining the practice through the inevitable days when you're tired or stressed or just don't feel like it. Many adults who tried daily practice and quit will say the issue was rigidity. They missed two days, felt like failures, and stopped entirely. Mature daily practice has built-in flexibility: missed days don't mean failure, returning to practice is the practice, and the consistency is over weeks not days. For some people, this approach fits and produces years of benefit. For others, it doesn't fit and they need something else.`,
          ],
          image: `/voyager-assets/inner-world/l16-s2-daily.webp`,
          imageCaption: `Daily ritual: small, consistent, cumulative over time.`,
          vocab: [
            {
              word: `cumulative effect`,
              definition: `An effect that builds up over time through repeated small actions. Most contemplative benefits are cumulative rather than immediate.`,
              audioPrompt: `Cumulative effect is when an effect builds up over time through repeated small actions, {name}. Most of what makes contemplative practice work is cumulative. A single 15-minute meditation does little. 15 minutes daily for six months produces measurable changes in attention, emotional regulation, and even brain structure. Daily ritual leverages cumulative effects. The trick is consistency, not intensity. This is also why occasional weekend intensives don't produce the benefits of regular practice. Cumulative beats intensive in most contemplative work.`,
            },
          ,
            {
              word: `morning pages`,
              definition: `A daily ritual practice of writing three pages of stream-of-consciousness text each morning, described by Julia Cameron in The Artist's Way. One version of the daily ritual approach to contemplative practice.`,
              audioPrompt: `Morning pages is a daily ritual practice of writing three pages stream-of-consciousness each morning, {name}. Julia Cameron describes this practice in her book The Artist's Way. In the context of this lesson, it is offered as one version of the daily ritual approach — alongside meditation, evening reflection journaling, breath practice, reading a wisdom text, or prayer. Morning pages are not meditation in the traditional sense, but they share the core feature of daily ritual: a specific practice, at a specific time, done consistently. The cumulative effect of that consistency is what produces real change.`,
            },
            {
              word: `daily ritual`,
              definition: `A contemplative practice performed at a specific time in a specific place every day. The approach whose core strength is consistency and cumulative effect over months and years.`,
              audioPrompt: `Daily ritual is a contemplative practice performed at a specific time, in a specific place, every day, {name}. It is the first of three approaches to building a spiritual practice explored in this lesson. The classic version is ten to twenty minutes of meditation each morning before school. What makes daily ritual powerful is not the intensity of any single session but the consistency over time. Real benefits from contemplative practice come from cumulative effects across months and years, not from isolated intensity. Missing days is not failure. Returning to practice after missing days is itself part of the practice.`,
            }
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Approach 2: Embedded Mindfulness`,
          paragraphs: [
            `The second approach is embedded mindfulness. Instead of designating a specific time for practice, you weave contemplative attention into activities you're already doing. Walking to school becomes a walking meditation: noticing the breath, the feet, the surroundings, the changing thoughts. Eating becomes a mindful eating practice: actually tasting the food, noticing texture, slowing down for the first three bites. Showering becomes an attention practice: feeling the water, returning attention when it wanders. Even tedious tasks like brushing teeth become opportunities for present-moment awareness.`,
            `The strength of embedded mindfulness is realism for a busy life. You don't have to find extra time. The practice happens inside time you already have. People with chaotic schedules, demanding family situations, or who don't connect with formal sitting practice often find embedded approaches workable in ways daily ritual isn't. Jon Kabat-Zinn's Mindfulness-Based Stress Reduction program, the foundation of much mainstream mindfulness, emphasizes both formal sitting AND informal embedded practice. The informal piece may be where most of the real-life integration happens.`,
            `The challenge of embedded mindfulness is forgetfulness. Without a fixed time and place, it's easy to drift through whole days without practicing. The practice depends on remembering, which itself is something you have to cultivate. Some people use external reminders (a notification, a sticker on the bathroom mirror) until the habit takes. Others find that without the structure of daily ritual, the practice never really lands. For students with packed schedules and unpredictable days, embedded mindfulness may be the only realistic option. For others, it produces too little structure to actually deepen.`,
          ],
          image: `/voyager-assets/inner-world/l16-s3-embedded.webp`,
          imageCaption: `Embedded mindfulness: practice inside the life you already have.`,
          vocab: [
            {
              word: `embedded practice`,
              definition: `Contemplative practice woven into ordinary daily activities (walking, eating, showering) rather than performed at a designated practice time.`,
              audioPrompt: `Embedded practice is contemplative practice woven into ordinary daily activities, {name}. Walking to school as walking meditation. Eating breakfast with full attention. Showering as a presence practice. Embedded practice doesn't require finding extra time. It transforms time you're already spending. The strength is realism. The challenge is remembering. Without a fixed time, the practice depends on you noticing the opportunities. Some people pair embedded with a small daily ritual to anchor the day; that combination often works better than either alone.`,
            },
          ,
            {
              word: `walking meditation`,
              definition: `A form of embedded mindfulness in which walking becomes a contemplative practice by bringing deliberate attention to the breath, the feet, the surroundings, and the changing thoughts.`,
              audioPrompt: `Walking meditation is a form of embedded mindfulness in which walking itself becomes a contemplative practice, {name}. The lesson describes it specifically: noticing the breath, the feet, the surroundings, the changing thoughts as you move. Walking to school becomes the practice. No extra time is required. This is the core principle of embedded mindfulness: contemplative attention woven into activities you are already doing. Walking meditation is one of the oldest forms of practice in Buddhist and other traditions. Applied to an ordinary school commute, it transforms time you were already spending into genuine inner work.`,
            },
            {
              word: `present-moment awareness`,
              definition: `The quality of attending fully to what is happening right now, rather than to thoughts about the past or future. The underlying aim of embedded mindfulness practices.`,
              audioPrompt: `Present-moment awareness is the quality of attending fully to what is happening right now, {name}. It is the underlying aim of embedded mindfulness practices. The lesson describes it appearing in ordinary moments: feeling the water during a shower and returning attention when it wanders, tasting food during eating, noticing the physical sensation of brushing teeth. Present-moment awareness does not require special conditions or extra time. It requires remembering to bring attention back to what is actually happening. That remembering is itself the practice. Over time, the returning becomes more natural and the gaps between it shorter.`,
            }
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Approach 3: Periodic Deep Retreat`,
          paragraphs: [
            `The third approach is periodic deep retreat. Instead of (or in addition to) daily practice, you set aside longer concentrated periods for intensive contemplative work. A weekend silent retreat. A week-long camp. A daylong contemplative experience. The pattern: you live more or less ordinarily most of the time, then enter intensive periods that go far deeper than daily practice would allow.`,
            `The strength of periodic retreat is depth. A weekend of meditation produces experiences that 30 minutes a day cannot. Long silent periods reveal patterns of mind, emotion, and being that get drowned out in normal life. Many serious contemplatives describe a single retreat as transformative in ways years of daily practice weren't. Retreats also create a kind of reset that ordinary life doesn't offer: you return to your normal life slightly different, with new perspectives and changed habits.`,
            `For adolescents specifically, periodic retreat carries cautions. Adult-style intensive retreats (multi-week silence, all-day sitting, sleep deprivation as part of practice) are generally not recommended for developing brains. Adolescent neuroscience suggests that intense disruption of normal patterns may have different effects in younger brains than in adults. Age-appropriate retreats exist: shorter, more structured, with experienced teachers familiar with young people. The strength remains depth; the requirement is appropriate adaptation. Pure periodic retreat without any daily practice is often less effective than retreat as deepening of an ongoing practice.`,
          ],
          image: `/voyager-assets/inner-world/l16-s4-retreat.webp`,
          imageCaption: `Periodic retreat: depth that daily practice alone can't reach.`,
          vocab: [
            {
              word: `retreat`,
              definition: `An intensive period of contemplative practice set apart from ordinary life. Ranges from a single day to weeks. For adolescents, age-appropriate versions are essential.`,
              audioPrompt: `A retreat is an intensive period of contemplative practice set apart from ordinary life, {name}. Retreats range from a single day to weeks or months. The pattern: you stop doing your normal activities and spend extended time in formal practice, often in silence, often with a teacher. Retreats can produce experiences that ordinary daily practice cannot. For adolescents, age-appropriate retreats are essential. Adult-style intensive retreats are generally not recommended for developing brains. Shorter, structured, well-supervised versions are appropriate. The principle is the same: depth comes from concentrated time set apart.`,
            },
          ,
            {
              word: `adolescent neuroscience`,
              definition: `The scientific study of how developing brains in adolescence differ from adult brains in structure, function, and response to experiences. Relevant to which contemplative practices are appropriate for teens.`,
              audioPrompt: `Adolescent neuroscience is the study of how developing brains in adolescence differ from adult brains, {name}. The lesson draws on it specifically in the context of periodic deep retreat. Adult-style intensive retreats — multi-week silence, all-day sitting, sleep deprivation as part of practice — are generally not recommended for developing brains. Adolescent neuroscience suggests that intense disruption of normal patterns may have different effects in younger brains than in adult brains. Age-appropriate retreats exist: shorter, more structured, with experienced teachers familiar with young people. The principle of depth through concentrated time remains; the form must be adapted.`,
            },
            {
              word: `periodic deep retreat`,
              definition: `An approach to contemplative practice in which longer concentrated periods — a weekend, a week, a day — are set aside for intensive inner work, producing depth that daily practice alone cannot reach.`,
              audioPrompt: `Periodic deep retreat is the practice of setting aside longer concentrated periods for intensive contemplative work, {name}. A weekend silent retreat. A week-long camp. A daylong contemplative experience. The pattern is: ordinary life most of the time, then concentrated entry into something deeper. The strength of periodic retreat is depth. A weekend of meditation produces experiences that thirty minutes a day cannot. Many serious contemplatives describe a single retreat as transformative in ways years of daily practice had not been. For adolescents, age-appropriate retreats with experienced teachers are essential. Pure retreat without any daily practice is typically less effective than retreat as the deepening of an ongoing practice.`,
            }
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Choose: Honest Considerations`,
          paragraphs: [
            `Each approach has real strengths and real limits. Daily ritual: consistent, cumulative, hard to maintain through life transitions, requires daily time you may not have. Embedded mindfulness: realistic for busy lives, depends on remembering, may not produce deep changes alone. Periodic retreat: produces depth ordinary practice can't, requires more setup, needs age-appropriate adaptation for teens, often works best as a deepening of ongoing practice.`,
            `The honest answer for most adults who have sustained a practice over many years is that they combine all three: a small daily ritual that anchors the day, embedded mindfulness through ordinary activities, and periodic retreats for depth. The combination is more powerful than any single approach. But this is the mature integrated version, not where most people start. Most people start with one approach that fits their life, sustain it for months, and add others over time.`,
            `For you, at 12, in your specific circumstances, which approach makes most sense as a starting place? This depends on factors only you know. How much time do you actually have in the morning? Does your family situation allow a quiet space? Do you have access to youth-appropriate retreat experiences? Do you respond better to structure or to embedded flexibility? In the argument builder you will pick one approach and defend it as the strongest starting point for someone your age. There is no universally right answer, but some answers fit specific people better.`,
          ],
          image: `/voyager-assets/inner-world/l16-s5-considerations.webp`,
          imageCaption: `Three serious approaches. Your life, your starting point.`,
          vocab: [
            {
              word: `integrated practice`,
              definition: `A spiritual practice that combines daily ritual, embedded mindfulness, and periodic retreat over time. The mature long-term form most sustained practitioners arrive at.`,
              audioPrompt: `Integrated practice combines daily ritual, embedded mindfulness, and periodic retreat over time, {name}. Most adults who have sustained a contemplative practice for many years end up here. The daily ritual anchors the day. The embedded mindfulness saturates ordinary life. The periodic retreats produce depth that ordinary practice can't reach. The integration is more powerful than any single approach. But this is the mature long-term version. Most people start with one approach, sustain it, and add others gradually. Starting with the wrong approach for your life can derail the whole project. Choose carefully.`,
            },
          ,
            {
              word: `life transitions`,
              definition: `Major changes in circumstances — school shifts, family changes, moves — that can disrupt daily ritual practices. A key challenge to the sustainability of the daily ritual approach.`,
              audioPrompt: `Life transitions are major changes in circumstances that can disrupt the consistency of a daily ritual practice, {name}. The lesson names this as one of the honest limitations of the daily ritual approach: hard to maintain through the inevitable disruptions of a real life. School changes, family situations shifting, moving, illness. These can break a practice that depended on a fixed time and place. Mature daily practice builds in flexibility precisely for this reason. The transition itself is not failure. Returning to practice after a transition is part of the long-term work. Some people find their practice survives transitions; others need to rebuild after each one.`,
            },
            {
              word: `quiet space`,
              definition: `A physical environment with minimal noise and distraction, often needed for formal daily ritual practices. Availability of quiet space is a practical factor in whether daily ritual is realistic for a particular teen.`,
              audioPrompt: `A quiet space is a physical environment with minimal noise and distraction, {name}. The lesson names it as one of the practical factors to consider when choosing an approach to building a contemplative practice. Not every home has a quiet space available. For some teens, the family situation makes it difficult to find even ten minutes of stillness in the morning. This is a real constraint, not a failure of will. Embedded mindfulness, in contrast, does not require a quiet space because the practice happens within ordinary activity. Knowing which constraints your actual life has is how you choose a realistic starting approach rather than an impressive-sounding one.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l16-argument-builder`,
          type: `argument-builder`,
          headline: `Build Your Argument: The Strongest Approach For You`,
          intro: `Pick one of three approaches as the strongest starting point for someone your age. Build your case using evidence from this lesson and from your own life situation. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `daily-ritual`,
              label: `Daily ritual is strongest`,
              summary: `Consistency is what produces real change in contemplative practice. Research on meditation benefits comes from regular, ideally daily, practice. Cumulative effects build over months and years. For a 12-year-old, starting with a small daily ritual (10-15 minutes) builds the foundational habit and produces the documented benefits. Other approaches can be added later.`,
            },
            {
              id: `embedded-mindfulness`,
              label: `Embedded mindfulness is strongest`,
              summary: `Adolescent schedules are already overpacked. Adding a daily ritual is often unsustainable for real teens. Embedded mindfulness uses time you're already spending (walking, eating, showering) and produces real benefits without requiring schedule overhaul. Kabat-Zinn's MBSR explicitly includes informal practice. For most teens, embedded is the realistic starting point.`,
            },
            {
              id: `periodic-retreat`,
              label: `Periodic deep retreat is strongest`,
              summary: `Daily practice in a normal teen schedule rarely goes deep enough to produce the experiences that motivate continued practice. A short age-appropriate retreat (a weekend mindfulness camp, a day-long contemplative experience) produces depth that builds motivation for ongoing practice. Start with depth, then add daily once the practitioner knows what they're cultivating.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Research on meditation benefits typically uses programs requiring near-daily practice over 8 weeks. The benefits documented (improved attention, reduced anxiety, modest brain changes) come from this consistency, not from intensity.`,
              source: `MBSR research, Kabat-Zinn and successors`,
            },
            {
              id: `e2`,
              text: `Sara Lazar's research at Harvard documented structural brain changes in long-term meditators with thousands of cumulative hours of practice, mostly accumulated through daily practice over years.`,
              source: `Lazar et al., multiple studies 2005-present`,
            },
            {
              id: `e3`,
              text: `Jon Kabat-Zinn's MBSR program explicitly integrates formal daily sitting practice AND informal embedded mindfulness throughout the day. The combination is the recommended approach, not formal practice alone.`,
              source: `Kabat-Zinn's published MBSR curriculum, in use since 1979`,
            },
            {
              id: `e4`,
              text: `Adolescent neuroscience research suggests adult-style intensive retreats may have different effects on developing brains than on adult brains. Age-appropriate adaptations are essential for retreat experiences for teens.`,
              source: `Established adolescent developmental neuroscience`,
            },
            {
              id: `e5`,
              text: `Many sustained adult practitioners report that single retreats produced experiences and motivation that years of daily practice alone had not generated. Retreat and daily practice are often complementary rather than competing.`,
              source: `Contemplative tradition; Willoughby Britton's qualitative research`,
            },
            {
              id: `e6`,
              text: `Habit formation research (Wood, Lally) shows that small consistent actions, repeated in stable contexts, become automatic in 60-100 days on average. Daily rituals can leverage this established psychology.`,
              source: `Habit formation research, Wood 2019, Lally et al. 2010`,
            },
            {
              id: `e7`,
              text: `Adolescents often have less control over their morning and evening time than adults. School schedules, family expectations, and unpredictable demands can disrupt daily rituals more than embedded practices.`,
              source: `General observation about teen life logistics`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. Most adults who sustain practice combine all three approaches: daily ritual, embedded mindfulness, and periodic retreat. Why should a 12-year-old start with only one when the integrated approach is what actually works long-term? Isn't trying to pick a single strongest approach a false choice?"`,
            promptInstruction: `In 3-4 sentences, respond. Why does picking one make sense as a starting place rather than trying to do everything at once?`,
          },
          reflectionPrompt: `Looking at the approaches you didn't pick, which one might you add to your practice next year? What would have to be true for that to work?`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does "spiritual practice" mean in this lesson?`,
              options: [
                `Only Buddhist meditation`,
                `Only Christian prayer`,
                `Any disciplined practice aimed at cultivating awareness, presence, or connection to something larger than the everyday self; includes religious and secular forms`,
                `Magic rituals`,
              ],
              correctIndex: 2,
              explanation: `The term is inclusive. You can do contemplative practice as an atheist, a Buddhist, a Christian, or someone working things out. The substance matters more than the label.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the central strength of daily ritual?`,
              options: [
                `It's fast`,
                `Consistency produces cumulative effects over months and years; this is how research-documented benefits actually accumulate`,
                `It's exciting`,
                `It requires no time`,
              ],
              correctIndex: 1,
              explanation: `Daily ritual leverages cumulative effects. Real benefits come from showing up consistently, not from intensity. This is the core argument for daily practice.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is embedded mindfulness?`,
              options: [
                `Buried meditation`,
                `Contemplative practice woven into activities you're already doing (walking, eating, showering) rather than performed at a designated practice time`,
                `Online meditation`,
                `A type of yoga`,
              ],
              correctIndex: 1,
              explanation: `Embedded practice transforms time you're already spending. The strength is realism for a busy life. The challenge is remembering without a fixed structure.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the periodic deep retreat approach?`,
              options: [
                `Living alone permanently`,
                `Setting aside longer concentrated periods (a weekend, a week) for intensive contemplative work, in addition to or instead of daily practice`,
                `Daily meditation`,
                `Reading books about meditation`,
              ],
              correctIndex: 1,
              explanation: `Retreats range from a single day to weeks. For teens, age-appropriate adaptations are essential. The strength is depth that daily practice alone cannot reach.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why are adult-style intensive retreats not recommended for adolescents?`,
              options: [
                `Because teens aren't serious`,
                `Because adolescent brains are still developing, and intense disruption of normal patterns may have different effects than on adult brains; age-appropriate adaptations are essential`,
                `Because teens can't sit still`,
                `Because retreats are too expensive`,
              ],
              correctIndex: 1,
              explanation: `Real adolescent neuroscience matters here. The recommendation isn't fragility; it's recognition that developing brains may respond differently to extreme practices than adult brains.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does Jon Kabat-Zinn's MBSR program actually recommend?`,
              options: [
                `Daily formal practice only`,
                `Embedded mindfulness only`,
                `Both formal daily sitting AND informal embedded mindfulness throughout the day; the combination is the recommended approach, not either alone`,
                `Weekly retreats`,
              ],
              correctIndex: 2,
              explanation: `MBSR is one of the most studied mindfulness programs. It includes both formal practice and informal embedded practice. The combination is the methodology.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What do sustained adult practitioners typically do over decades?`,
              options: [
                `Pick one approach and stick with it forever`,
                `Quit and restart`,
                `Combine all three approaches: a daily ritual anchoring the day, embedded mindfulness in ordinary activities, and periodic retreats for depth`,
                `Only meditate when feeling stressed`,
              ],
              correctIndex: 2,
              explanation: `The mature long-term form is integration. But this isn't where most people start. Most start with one approach that fits their life and add others over time.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why might starting with one approach (rather than integrating all three from day one) make sense?`,
              options: [
                `Because integration is impossible`,
                `Because sustaining any practice depends on building a habit; trying to do everything at once often leads to doing nothing; starting with one approach that fits your life and adding others gradually is how sustainable practice actually develops`,
                `Because the other approaches aren't useful`,
                `Because teens can't handle complexity`,
              ],
              correctIndex: 1,
              explanation: `Habit formation research supports starting small. Doing one thing consistently for months beats trying everything for a week. The integration comes over years, not from day one.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: You need to be religious to have a spiritual or contemplative practice.`,
              correctAnswer: false,
              explanation: `False. Contemplative practices have religious roots but are available to anyone regardless of belief. You can practice as an atheist, a Buddhist, a Christian, a Hindu, or someone still figuring it out.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend says "I'd love to meditate but I just don't have time." Based on this lesson, what's the most useful response?`,
              options: [
                `"Then don't bother"`,
                `"Make time, it's important"`,
                `"You probably do have time, just not in the form you're imagining. Embedded mindfulness uses time you're already spending. Try one minute of attention to your breath during something you already do every day, like brushing your teeth. Real practice can start that small. The daily-ritual version isn't the only option."`,
                `"Go on a weekend retreat"`,
              ],
              correctIndex: 2,
              explanation: `Practical and accurate. The standard objection ("I don't have time") usually assumes practice means a long sitting session. Embedded mindfulness reframes the problem. Real practice can start with one minute. This is the realistic version.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which approach actually fits your life right now? Be specific about why; what about your circumstances makes that approach more workable than the others?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Did you pick the approach that fits your life, or the one that sounds most impressive? Notice the difference.` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you built a practice over the next year and stuck with it, who would you become? What would shift?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick ONE specific tiny practice you could start tomorrow. Where, when, how long? Write it down concretely.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is there any reason NOT to build a contemplative practice at 12? Are there costs or risks the lesson didn't mention?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `What's actually stopping you from starting a small practice right now? Time? Distraction? Feeling silly? Family situation? Be honest about the real obstacle.` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the lesson where theory could become practice. Two paths below.`,
          familyActivity: {
            title: `The Family Practice Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned about the three approaches. Then ask each family member: do you have any kind of contemplative or spiritual practice? When did you start? What approach do you actually use (daily ritual, embedded, retreat, none, mix)? You will discover that some family members have practices you didn't know about. Others may have tried and quit. Discuss what made it work or not work for them. This is rare conversation. It can also reveal shared interest in starting something together.`,
          },
          projectOption: {
            title: `Try One Approach For 2 Weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Pick ONE specific practice in your chosen approach. Daily ritual could be 10 minutes of breathing meditation each morning. Embedded could be one full minute of attention to your breath during brushing teeth, twice a day. Retreat could mean preparing for and attending a youth mindfulness day if one is available locally. Commit for 14 days. Each day, log 2-3 sentences: did you do it, what happened, what got in the way. After 14 days, write 500 words on what you learned about yourself, your approach, and whether to continue. This is real applied contemplative work, not theory.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. This is the kind of practice that compounds over a lifetime. Worth supporting.`,
          },
          identityQuestion: `If a small practice over the next year compounds for the rest of your life, what version of yourself are you building right now?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who builds a small practice that actually fits my real life.`,
            `A person who knows the difference between a sustainable practice and an impressive one.`,
            `Someone willing to start tiny instead of waiting for the perfect setup.`,
          ],
          saveKey: `identity_responses_iw_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three serious approaches to building a contemplative practice, recognize the strengths and limits of each, build an argument for the best starting place given specific circumstances, and start something small in your own life if you choose to. The lessons in this band have built toward this practical point. You now have the framework to do real inner work over decades if you want to. Next time we go into one of Jung's most provocative and contested claims: synchronicity, the idea that meaningful coincidences point to a deeper order in events. Source Evaluation format. See you there. — Sage`,
          badge: `practice-builder`,
          badgeName: `Practice Builder`,
          xpEarned: 75,
          competencies: [
            `Can articulate three approaches to building a contemplative practice`,
            `Recognizes the strengths and limits of each approach`,
            `Has built an argument for the best starting place given real circumstances`,
            `Understands cumulative vs intensive practice tradeoffs`,
            `Knows age-appropriate considerations for adolescent retreat experiences`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Synchronicity — Meaningful Coincidence or Statistical Illusion?`,
            hook: `Jung claimed certain coincidences are too meaningful to be random. Statisticians say humans are pattern-finding machines that see meaning everywhere. Three sources, your evaluation.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L16 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
