// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L13 — Systems Thinking
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Systems Thinking, System Dynamics
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: INVESTIGATION GAME (sort 9 scenarios into 3 buckets: reinforcing / balancing / delays)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l13-v1";

const FUTURESKILLS_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-13`,
      title: `Systems Thinking`,
      duration: 35,
      xpReward: 75,
      badge: `systems-thinker`,
      badgeName: `Systems Thinker`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, here's something that explains a lot about why the world is so confusing. Almost everything important is a system: an interconnected set of parts where the parts affect each other and the behavior of the whole isn't just the sum of the parts. Your body. Your school. Your friend group. The climate. The economy. Your own habits. Systems behave in patterns that surprise people who don't think systemically. Small changes have huge effects. Big efforts produce nothing. Solutions create new problems. Effects show up years after causes. Once you can see these patterns, much of the world becomes more legible. Today we work through the three most useful patterns (reinforcing feedback, balancing feedback, delays) and you sort nine real-world scenarios into the right buckets. By the end you'll see systems where most people see chaos.`,
          headline: `Systems Thinking`,
          subtitle: `Three patterns. Nine scenarios. See systems where most people see chaos.`,
          visual: `/voyager-assets/future-skills/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Systems Are And Why They're Tricky`,
          paragraphs: [
            `A system is a set of interconnected parts where the parts affect each other and the behavior of the whole isn't simply the sum of the parts. Your body is a system: organs interact, hormones flow, signals loop. A school is a system: students, teachers, administrators, families, curriculum, schedule all affect each other. The climate is a system. The economy is a system. Your friend group is a system. Even your own habits form a system with feedback between behaviors, environments, and identities.`,
            `Systems are tricky because the rules of a single isolated thing don't transfer to interconnected things. A simple chain of cause and effect (do X, get Y) often becomes more complex in a system (do X, which causes Y, which causes Z, which feeds back to affect X, sometimes after a long delay). The unexpected outcomes that result are predictable once you understand systems but baffling otherwise.`,
            `Researchers who study how systems behave have identified consistent patterns across very different domains. The same patterns show up in biology, economics, sociology, ecology, engineering, organizational behavior, and personal habits. Donella Meadows's book "Thinking in Systems: A Primer" (published 2008, written earlier) is the foundational accessible text. Jay Forrester at MIT developed "system dynamics" as a formal field starting in the 1950s. Peter Senge's "The Fifth Discipline" (1990) brought systems thinking into business and organizational practice.`,
            `For your purposes, three patterns are most useful to know first: reinforcing feedback (small changes amplify), balancing feedback (systems self-correct toward equilibrium), and delays (effects show up later than causes). Most surprising system behavior comes from these three operating together. Recognizing them when they're operating is the foundational systems thinking skill.`,
          ],
          image: `/voyager-assets/future-skills/l13-s1-systems.webp`,
          imageCaption: `Systems are tricky because parts affect each other. Same patterns appear across biology, economics, ecology, organizations.`,
          vocab: [
            {
              word: `system`,
              definition: `Set of interconnected parts where the parts affect each other and the behavior of the whole isn't simply the sum of the parts. Bodies, ecosystems, economies, organizations, climate, and many other important things are systems. Behave in patterns (feedback loops, delays, nonlinearity) that don't apply to isolated objects.`,
              audioPrompt: `A system is a set of interconnected parts where the parts affect each other and the behavior of the whole isn't simply the sum of the parts, {name}. Your body is a system: organs interact, hormones flow, signals loop. A school is a system: students, teachers, administrators, families, curriculum, schedule all affect each other. The climate is a system. The economy is a system. Your friend group is a system. Even your own habits form a system. Systems behave in patterns that don't apply to isolated objects: feedback loops, delays, nonlinearity, emergence. These patterns can be learned. They show up consistently across very different domains: biology, economics, ecology, organizations. Recognizing systems where most people see disconnected events is the first step in systems thinking. The recognition is learnable through practice.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Reinforcing Feedback (Amplification)`,
          paragraphs: [
            `Reinforcing feedback (sometimes called "positive feedback," though the name is misleading because it can amplify good or bad things) is when a change in one direction triggers further changes in the same direction. Small things become big things. This pattern is responsible for many of the most dramatic phenomena in systems.`,
            `Classic examples. Compound interest: money earns interest, the interest is added to the principal, the larger principal earns more interest, repeat. Over decades, this produces exponential growth that intuition badly underestimates. Population growth in early stages: more people produce more children, who produce more children. Skill acquisition: practicing a skill makes you better at the skill, which makes practicing more rewarding, which produces more practice. Social media virality: each share makes more shares more likely, until something either burns out or reaches saturation.`,
            `Reinforcing loops also work in destructive directions. Debt: borrowing means interest payments, which leave less money to pay down principal, which means more borrowing, which means more interest. Erosion: small water damage weakens a structure, which lets in more water, which causes more damage. Reputational decline: one bad incident makes you more suspect for the next one, which makes the next perception worse. The same mathematical pattern can produce growth or collapse depending on direction.`,
            `Why reinforcing loops are tricky. Their early stages are deceptively small. The first ten years of compound interest look almost linear. The first few viral shares look like nothing. The first months of skill practice produce minimal visible improvement. Then suddenly the curve bends upward (or downward) and what was barely visible becomes dominant. People who don't think in reinforcing loops underestimate them in early stages and overestimate them at maturity. People who can see them coming get into them early (or out of bad ones early).`,
          ],
          image: `/voyager-assets/future-skills/l13-s2-reinforcing.webp`,
          imageCaption: `Reinforcing feedback: small changes amplify. Compound interest, viral content, skill practice, debt, erosion. Curves bend over time.`,
          vocab: [
            {
              word: `reinforcing feedback loop`,
              definition: `Pattern where a change in one direction triggers further changes in the same direction. Small things become big things. Produces exponential growth (compound interest, skill practice) or exponential decline (debt spirals, reputational collapse) depending on direction. Often invisible in early stages. Same mathematical pattern.`,
              audioPrompt: `A reinforcing feedback loop is a pattern where a change in one direction triggers further changes in the same direction, {name}. Small things become big things. Sometimes called "positive feedback," though the name is misleading because the pattern can amplify good or bad things equally. Classic examples: compound interest produces exponential growth over decades; debt spirals produce exponential decline; skill practice produces increasing capability; reputational decline produces accumulating suspicion. Reinforcing loops are tricky because their early stages are deceptively small. The first ten years of compound interest look almost linear. The first few viral shares look like nothing. Then suddenly the curve bends and what was barely visible becomes dominant. People who can see reinforcing loops coming get into good ones early or out of bad ones early.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Balancing Feedback (Self-Correction)`,
          paragraphs: [
            `Balancing feedback (sometimes called "negative feedback," again a misleading name) is the opposite pattern: a change in one direction triggers responses that counteract the change, pushing the system back toward equilibrium. Balancing loops are why many systems stay stable despite constant disturbance, and why some efforts to change systems produce nothing.`,
            `Classic examples. Body temperature: when you get hot, you sweat (cooling you); when you get cold, you shiver (warming you); the system stays around 98.6°F despite enormous variation in environment. Thermostats: when temperature rises above setting, heating turns off; when it falls below, heating turns on. Predator-prey populations: more rabbits means more food for foxes, more foxes means fewer rabbits, fewer rabbits means less food for foxes, fewer foxes means more rabbits — populations oscillate around an equilibrium. Markets: when supply exceeds demand, prices fall; when demand exceeds supply, prices rise; the system adjusts.`,
            `Balancing loops in your own life. Hunger: when you don't eat, you get hungry; when you eat, hunger decreases; the system regulates calorie intake (mostly; the regulation can be disrupted, which is why some weight loss is so hard). Social regulation: when you do something inappropriate in your friend group, you get social pushback; when you do something appreciated, you get social reinforcement; behavior regulates toward group norms. Energy: when you're tired, you rest; when rested, you have energy to act; the cycle keeps you functioning.`,
            `Why balancing loops surprise people. The system "wants" to stay at its set point. Efforts to push it elsewhere often trigger balancing responses that defeat the push. Weight loss efforts produce metabolic adaptations that resist the loss. Diet changes produce hunger that drives you back to old patterns. Organizational change efforts produce resistance that returns the organization to its previous state. Trying to push against a balancing loop without understanding it usually fails. Working WITH the loop (changing what the system tries to balance toward) usually works better.`,
            `Both reinforcing and balancing loops are common. Many systems contain both. Understanding which type is operating at any given moment is the diagnostic skill.`,
          ],
          image: `/voyager-assets/future-skills/l13-s3-balancing.webp`,
          imageCaption: `Balancing feedback: systems self-correct toward equilibrium. Temperature regulation, populations, markets, hunger, energy.`,
          vocab: [
            {
              word: `balancing feedback loop`,
              definition: `Pattern where a change in one direction triggers responses that counteract the change, pushing the system back toward equilibrium. Body temperature regulation, thermostats, predator-prey cycles, market price adjustments. Often defeats efforts to push the system elsewhere by triggering compensating responses. Working WITH balancing loops (changing the set point) usually works better than pushing against them.`,
              audioPrompt: `A balancing feedback loop is a pattern where a change in one direction triggers responses that counteract the change, {name}. Pushes the system back toward equilibrium. Sometimes called "negative feedback," again a misleading name because the pattern often produces beneficial stability. Classic examples: body temperature regulation through sweating and shivering, thermostats turning heating on and off, predator-prey populations oscillating around equilibrium, market prices adjusting between supply and demand. Balancing loops surprise people because the system "wants" to stay at its set point. Efforts to push it elsewhere often trigger balancing responses that defeat the push. Weight loss efforts produce metabolic adaptations that resist the loss. Trying to push against a balancing loop usually fails. Working with the loop, changing what the system balances toward, usually works better.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Delays (Time Lags)`,
          paragraphs: [
            `Delays are when effects show up significantly later than their causes. This is one of the most consistently underestimated patterns in systems because human intuition strongly expects immediate cause-and-effect. When causes and effects are separated by months or years, we usually fail to connect them.`,
            `Classic examples. Climate: greenhouse gas emissions today produce warming effects that play out over decades; reductions today take similar time to show effects. Childhood nutrition: what kids eat at 8 affects health outcomes at 50; the effects are real but invisible at the time of the eating. Education: skills you build at 12 affect career options at 30; the relationship is real but you don't see it at the time. Compound interest in early years: putting money in a retirement account at 22 looks the same as not doing so, until the difference becomes enormous at 65.`,
            `Why delays are tricky. The cause-effect relationship is broken in time. When the cause happens, you don't see the effect. When the effect happens, the cause is forgotten or attributed to something more recent. This makes systems with delays hard to manage: by the time you observe the effect you're trying to change, the cause is far in the past and your response targets something else entirely. Climate policy is hard partly because of this; the emissions today will affect 2050, and we'll need to respond to 2050 conditions with policies that take effect by 2080.`,
            `Delays also create instability when combined with feedback loops. A balancing loop with delays often overshoots its target before correcting back, producing oscillation. Markets crash because the correction comes after prices have already moved too far. Population cycles in predator-prey systems oscillate because both populations respond to past conditions, not present ones. Recognizing delays helps you anticipate when systems will overshoot rather than smoothly settling.`,
            `The personal version of delays. Habits build cumulatively over time. The first month of exercise looks like nothing; the first year produces visible change; ten years produces a dramatically different body. The first weeks of practicing an instrument sound bad; the first year produces competence; ten years produces real skill. The delays between effort and visible result are why most people quit early. Understanding the delay pattern protects you from quitting just before the curve bends.`,
          ],
          image: `/voyager-assets/future-skills/l13-s4-delays.webp`,
          imageCaption: `Delays: cause and effect separated in time. Climate, childhood nutrition, education, habits. Most underestimated pattern.`,
          vocab: [
            {
              word: `delay`,
              definition: `Time lag between cause and effect in a system. Greenhouse gas emissions today produce climate effects decades later; childhood nutrition affects adult health; daily habits produce visible change only over years. Most underestimated systems pattern because human intuition expects immediate cause-and-effect. Creates oscillation when combined with feedback loops.`,
              audioPrompt: `A delay in a system is the time lag between cause and effect, {name}. Greenhouse gas emissions today produce climate effects decades later. Childhood nutrition affects adult health 40 years on. Daily exercise habits produce visible change only over months and years. Compound interest looks like nothing in the first decade and dominates in later decades. Delays are one of the most consistently underestimated patterns in systems. Human intuition strongly expects immediate cause-and-effect. When causes and effects are separated by months or years, we usually fail to connect them. This makes systems with delays hard to manage. By the time you observe the effect you want to change, the cause is far in the past. Delays also create instability when combined with feedback loops, producing oscillation in markets, populations, and other dynamic systems.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Sort The Scenarios`,
          paragraphs: [
            `In the investigation that follows, you'll sort nine real-world scenarios into three buckets: reinforcing feedback, balancing feedback, and delays. Some scenarios fit clearly into one bucket. Others contain multiple patterns and require you to pick the dominant one. The exercise builds the pattern-recognition skill that makes systems thinking useful.`,
            `Some sorting strategies. First: identify what's changing in the scenario. Then ask: does change in one direction trigger more change in the same direction (reinforcing)? Trigger correction back toward equilibrium (balancing)? Or show up significantly later than its cause (delay)?`,
            `Second: notice that many systems contain multiple patterns. A predator-prey system has balancing loops AND delays AND can be considered reinforcing in specific sub-loops. For the investigation, pick the pattern that's most dominant in producing the behavior the scenario describes.`,
            `Third: notice that the same mathematical pattern can produce very different real-world phenomena. Compound interest, viral content, skill acquisition, and reputational decline are all reinforcing loops despite looking different. Once you see the underlying pattern, the surface differences become less important.`,
            `Donella Meadows said the goal of systems thinking is "places to intervene in a system" — finding the leverage points where small changes produce large effects. Recognizing patterns is the first step. Once you know which pattern is operating, you know where the leverage might be. Reinforcing loops are leveraged by getting in early or breaking the loop. Balancing loops are leveraged by changing what they balance toward. Delays are leveraged by acting before the visible effect appears.`,
          ],
          image: `/voyager-assets/future-skills/l13-s5-before.webp`,
          imageCaption: `Three patterns, real scenarios, leverage points. The foundational skill of systems thinking.`,
          vocab: [
            {
              word: `leverage point`,
              definition: `Place in a system where a small change produces a large effect. Term from Donella Meadows. Goal of systems thinking is identifying leverage points and acting on them. Reinforcing loops leveraged by getting in early; balancing loops by changing what they balance toward; delays by acting before effects appear.`,
              audioPrompt: `A leverage point is a place in a system where a small change produces a large effect, {name}. Term from Donella Meadows. The goal of systems thinking is identifying leverage points and acting on them. Once you know which pattern is operating in a system, you know where the leverage might be. Reinforcing loops are leveraged by getting in early on the good ones or breaking the bad ones before they amplify. Balancing loops are leveraged by changing what they balance toward, rather than fighting them. Delays are leveraged by acting on causes early, before the visible effect appears. Meadows wrote a famous essay called "Leverage Points: Places to Intervene in a System" identifying twelve types in order of effectiveness. The deepest leverage points are usually about changing the goals or paradigms of the system, not the parameters.`,
            },
          ],
        },

        // ───── INVESTIGATION GAME ─────────────────────────────────────────────
        {
          id: `l13-investigation`,
          type: `investigation`,
          headline: `Sort the scenarios by dominant systems pattern`,
          intro: `{name}, you have nine real-world scenarios. Sort each into the bucket that best describes its dominant pattern. Some have multiple patterns; pick the one that most explains the behavior described. Get them all right and you have a working systems thinking toolkit.`,
          buckets: [
            {
              id: `reinforcing`,
              label: `Reinforcing feedback (small changes amplify, exponential growth or decline)`,
            },
            {
              id: `balancing`,
              label: `Balancing feedback (system self-corrects toward equilibrium)`,
            },
            {
              id: `delays`,
              label: `Delays (effects show up significantly later than causes)`,
            },
          ],
          items: [
            {
              id: `item-1`,
              label: `Money invested in an index fund at age 22 grows from $5,000 to ~$80,000 by age 65 even with no additional contributions, due to compound returns.`,
              correctBucket: `reinforcing`,
            },
            {
              id: `item-2`,
              label: `When you get cold, you shiver; the shivering generates heat through muscle activity; body temperature returns to ~98.6°F.`,
              correctBucket: `balancing`,
            },
            {
              id: `item-3`,
              label: `Greenhouse gas emissions in 2026 will affect global temperatures most strongly between 2050 and 2100.`,
              correctBucket: `delays`,
            },
            {
              id: `item-4`,
              label: `A viral TikTok video gains 100,000 views in the first hour, which triggers the algorithm to show it more, which produces another 500,000 views in the second hour, which triggers even wider distribution.`,
              correctBucket: `reinforcing`,
            },
            {
              id: `item-5`,
              label: `When supply of a product exceeds demand, prices fall; falling prices reduce production and increase consumption until supply and demand re-equilibrate.`,
              correctBucket: `balancing`,
            },
            {
              id: `item-6`,
              label: `What you eat as a child affects your risk of cardiovascular disease 40-50 years later.`,
              correctBucket: `delays`,
            },
            {
              id: `item-7`,
              label: `A student who practices an instrument daily for 6 months sees minimal visible improvement; by year 3, the skill is dramatically better than the daily effort would suggest is possible.`,
              correctBucket: `delays`,
            },
            {
              id: `item-8`,
              label: `When you don't eat for several hours, you get hungry; eating reduces hunger; the system regulates calorie intake.`,
              correctBucket: `balancing`,
            },
            {
              id: `item-9`,
              label: `Someone with growing debt makes minimum payments; interest accrues, which means the principal grows; the larger principal generates more interest; the debt spirals upward.`,
              correctBucket: `reinforcing`,
            },
          ],
          reflectionPrompt: `Which item was hardest to sort? What made it ambiguous? What does that ambiguity reveal about real systems?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a "system"?`,
              options: [
                `Any computer`,
                `Set of interconnected parts where the parts affect each other and the behavior of the whole isn't simply the sum of the parts; bodies, ecosystems, economies, organizations, climate are all systems; behave in patterns (feedback, delays, nonlinearity) that don't apply to isolated objects`,
                `Government structure`,
                `Math equation`,
              ],
              correctIndex: 1,
              explanation: `Systems show the same patterns across very different domains (biology, economics, ecology, organizations). Recognizing systems where most people see disconnected events is the first step in systems thinking.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a "reinforcing feedback loop"?`,
              options: [
                `Encouragement`,
                `Pattern where a change in one direction triggers further changes in the same direction; small things become big things; produces exponential growth (compound interest, skill practice) or exponential decline (debt spirals, reputational collapse); often invisible in early stages`,
                `Strong system`,
                `Positive thinking`,
              ],
              correctIndex: 1,
              explanation: `Sometimes called "positive feedback" but the name is misleading because the pattern can amplify good or bad things equally. The first ten years of compound interest look almost linear; the first few viral shares look like nothing; then suddenly the curve bends.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is a "balancing feedback loop"?`,
              options: [
                `Equal opposite`,
                `Pattern where a change in one direction triggers responses that counteract the change, pushing the system back toward equilibrium; body temperature regulation, thermostats, predator-prey cycles, market prices; often defeats efforts to push the system elsewhere`,
                `Stable system`,
                `Negative feedback only`,
              ],
              correctIndex: 1,
              explanation: `Working WITH balancing loops (changing what they balance toward) usually works better than pushing against them. Weight loss efforts produce metabolic adaptations that resist the loss; that's a balancing loop in action.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why are delays "the most underestimated" systems pattern?`,
              options: [
                `Random underestimation`,
                `Human intuition strongly expects immediate cause-and-effect; when causes and effects are separated by months or years, we usually fail to connect them; by the time you observe the effect, the cause is far in the past and your response targets something else entirely`,
                `They're boring`,
                `They're complex`,
              ],
              correctIndex: 1,
              explanation: `Climate policy is hard partly because of this: emissions today affect 2050, and we'll need to respond to 2050 conditions with policies that take effect by 2080. The delay pattern is responsible for many policy failures across domains.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Who is Donella Meadows?`,
              options: [
                `Old researcher`,
                `Systems thinker whose book "Thinking in Systems: A Primer" (published 2008, written earlier) is the foundational accessible text on systems thinking; introduced "leverage points" as the goal of systems analysis; central figure in environmental systems thinking before her death in 2001`,
                `Politician`,
                `Tech CEO`,
              ],
              correctIndex: 1,
              explanation: `Meadows's work shaped how multiple generations of researchers, policymakers, and environmentalists think about systems. "Thinking in Systems" is accessible enough for a 12-year-old and useful enough that adults still reference it daily.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is a "leverage point"?`,
              options: [
                `Physics term`,
                `Place in a system where a small change produces a large effect; Donella Meadows's term; goal of systems thinking is identifying leverage points; reinforcing loops leveraged by getting in early, balancing loops by changing what they balance toward, delays by acting before effects appear`,
                `Strength advantage`,
                `Negotiation tactic`,
              ],
              correctIndex: 1,
              explanation: `Meadows's famous essay "Leverage Points: Places to Intervene in a System" identified twelve types in order of effectiveness. The deepest leverage points are usually about changing goals or paradigms of the system, not parameters.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why do reinforcing loops surprise people in early stages?`,
              options: [
                `They're hidden`,
                `Early stages are deceptively small; the first ten years of compound interest look almost linear; the first few viral shares look like nothing; the first months of skill practice produce minimal visible improvement; then suddenly the curve bends upward`,
                `Math is hard`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `People who don't think in reinforcing loops underestimate them in early stages and overestimate them at maturity. People who can see them coming get into good ones early or out of bad ones early.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why do delays combined with feedback loops cause oscillation?`,
              options: [
                `Random instability`,
                `When responses come after the system has already moved, the response often overshoots the target before correcting back; markets crash because the correction comes after prices have already moved too far; population cycles oscillate because populations respond to past conditions rather than present ones`,
                `System failure`,
                `Math error`,
              ],
              correctIndex: 1,
              explanation: `Recognizing delays helps you anticipate when systems will overshoot rather than smoothly settling. This applies to markets, populations, organizational change, personal habits, and many other domains.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A predator-prey ecosystem is purely a balancing loop with no reinforcing or delay components.`,
              correctAnswer: false,
              explanation: `False. Predator-prey systems contain balancing loops (more rabbits → more foxes → fewer rabbits → fewer foxes → more rabbits) AND reinforcing loops within sub-dynamics AND significant delays (population responses lag environmental changes). Most real systems contain multiple patterns. For the investigation, you pick the most dominant pattern; in reality systems are layered.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I tried exercising for two weeks and I don't see any results, so I'm giving up." Based on this lesson, what should you point out?`,
              options: [
                `"You're not strong enough"`,
                `"Exercise effects on body composition involve significant delays. The first two weeks look like nothing because the visible effects are months to years away. The compound effect of consistent exercise over years produces dramatic differences from sedentary peers, but the first weeks show almost nothing. Quitting now is quitting before the curve bends — the same mistake people make with compound interest, skill practice, language learning, almost anything with significant delays. The mathematically correct move is to keep going through the period of invisible progress because the eventual results are real even though you can't see them yet. Track other metrics (energy, sleep, mood) that change faster as you build toward the slower visible changes."`,
                `"Exercise doesn't work"`,
                `"You're wasting time"`,
              ],
              correctIndex: 1,
              explanation: `Real applied systems thinking. The delay pattern in habit-based change explains why most people quit just before the curve bends. Recognizing the pattern protects you from giving up at exactly the wrong time. This advice applies to exercise, instruments, languages, skills, and almost any cumulative practice.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit names for these three patterns? Has anything shifted about how you see the world?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which pattern do you most often miss in your own life? Reinforcing loops compounding? Balancing loops defeating change efforts? Delays making causes invisible?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who sees systems where most people see chaos, what does that change about the kinds of decisions you can make well over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current situation in your life (school, friendship, habit, family). Apply the three patterns. Which is dominant? Where's the leverage point?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there phenomena the three patterns can't capture? What about purely random events? Emergent behavior? Cultural change? How would systems thinking extend?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pick one news story from the last week. Apply the three patterns. Which feedback loops and delays are operating? Most news stories become clearer through this lens.` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Systems thinking compounds over a lifetime of decisions. Two paths.`,
          familyActivity: {
            title: `The Family Systems Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share the three patterns. Then pick one family system to analyze together (the family budget, household routines, kids' habits, screen time, anything ongoing). Identify which reinforcing loops, balancing loops, and delays are operating. The conversation usually surfaces real insights: many family conflicts come from one person not seeing a pattern others see, or everyone fighting against a balancing loop that's defeating them. The framework gives shared language for what's happening.`,
          },
          projectOption: {
            title: `Read "Thinking in Systems" by Donella Meadows, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Read Donella Meadows's "Thinking in Systems: A Primer" (2008). It's accessible (around 200 pages) and one of the best non-textbook introductions to systems thinking available. Take notes on specific examples. After reading, apply the framework to three systems in your own life (school, friendships, habits) and write 2,000 words analyzing them. Real applied systems thinking at a level few adults reach. The book reshapes how you see the world; the writing exercise locks in the framework.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Reading Meadows at 12 is genuinely transformative.`,
          },
          identityQuestion: `If you become someone who automatically sees reinforcing loops, balancing loops, and delays in everyday situations, what does that change about your ability to make decisions that compound well over decades?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes reinforcing loops in early stages instead of underestimating them.`,
            `A person who notices balancing loops and stops fighting against them.`,
            `Someone willing to act on causes that won't show effects for decades.`,
          ],
          saveKey: `identity_responses_fs_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteenth Future Skills lesson done. You now know three foundational systems patterns: reinforcing feedback (small changes amplify), balancing feedback (systems self-correct), delays (effects later than causes). You know Donella Meadows's leverage points framework and the major thinkers (Meadows, Forrester, Senge). You can spot these patterns across very different domains (biology, economics, your own habits). Most adults never explicitly develop this skill, which is part of why so many policy efforts, life decisions, and organizational changes fail in predictable ways. You have the framework at 12. Next time we go into another foundational meta-skill: emotional intelligence. What's real EI vs the pop version? Source Evaluation format. Let's go. — Byte`,
          badge: `systems-thinker`,
          badgeName: `Systems Thinker`,
          xpEarned: 75,
          competencies: [
            `Articulates three systems patterns (reinforcing, balancing, delays)`,
            `Knows Donella Meadows, Jay Forrester, Peter Senge as major thinkers`,
            `Recognizes patterns across diverse domains (biology, economics, habits, climate)`,
            `Understands leverage points as the goal of systems intervention`,
            `Can apply patterns to real situations in own life`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Emotional Intelligence`,
            hook: `Real EI vs pop EI. Three sources. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const investigation = l.screens.find((s) => s.type === `investigation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L13 ${VERSION}] "${l.title}" — ${mags} magazine, investigation game w/ ${investigation?.items?.length ?? 0} items in ${investigation?.buckets?.length ?? 0} buckets, ${quiz} quiz, ${reflect} reflection`
  );
}
