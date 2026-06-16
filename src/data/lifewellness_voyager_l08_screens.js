// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L08 — Attention and Focus
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Attention Science, Tech Ethics
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (cognitive-resource / attention-economy / embodied-state)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l08-v1";

const LIFEWELLNESS_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-08`,
      title: `Attention and Focus`,
      duration: 35,
      xpReward: 75,
      badge: `attention-literate`,
      badgeName: `Attention Literate`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, attention is one of the most consequential wellness topics for your generation specifically. Your generation has grown up with attention being actively competed for by the most sophisticated technology ever built. Real research treats attention seriously and disagrees about what attention is and what produces real focus. Today we work through three serious positions: attention as cognitive resource (Kahneman, cognitive science), attention as captured by environment (attention economy critics, Tristan Harris), and attention as embodied state (sleep, exercise, nutrition, stress shaping focus capacity). Each position has real evidence. The framework you build today shapes how you'll think about focus, distraction, and your relationship with technology across decades. Most adults have absorbed shallow framings; choosing yours deliberately puts you ahead.`,
          headline: `Attention and Focus`,
          subtitle: `Three serious positions on what attention is. Real research, real disagreement.`,
          visual: `/voyager-assets/life-wellness/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Attention Is The Wellness Topic For Your Generation`,
          paragraphs: [
            `Every previous generation faced its own wellness challenges that distinguished it. For your generation, attention is the defining issue in a way it wasn't for any prior generation. The reason isn't mysterious. Most of the technology you use was designed by people whose explicit job was to maximize how much of your attention it captures.`,
            `Specific numbers worth knowing. Adolescents in the US spend an average of 8-9 hours per day on screens for entertainment (Common Sense Media and similar surveys); the figure has risen substantially across the past decade and is higher for your cohort than for earlier ones at the same age. Tristan Harris, a former Google design ethicist, has documented how major tech platforms are designed using techniques from gambling, persuasion psychology, and behavioral conditioning to maximize engagement. The Center for Humane Technology's work documents the specific design patterns being used.`,
            `What gets called "tech addiction" or "screen addiction" in pop content is more accurately understood as products engineered to capture and hold attention, interacting with brains that aren't fully developed yet (prefrontal cortex, responsible for executive function and inhibition, matures into the mid-20s). It's not weakness; the product is designed to be hard to put down. Recognizing this changes the response from self-blame to design awareness.`,
            `Real research on attention has expanded substantially in response. Cognitive scientists studying attention. Tech ethicists studying design choices. Sleep researchers studying how exhaustion affects focus. Movement researchers studying how physical activity affects cognitive function. The research is converging on a picture more nuanced than pop content presents.`,
            `For 11-12 year olds specifically, this is when attention habits are being built that will compound across decades. The patterns you develop now around focus, distraction, technology use, deep work — these shape your cognitive function for the rest of your life. Building deliberate framework now produces outcomes most adults never develop because they absorbed defaults without examining them.`,
          ],
          image: `/voyager-assets/life-wellness/l08-s1-generation.webp`,
          imageCaption: `Adolescents in US: 8-9 hours/day average screens. Tech designed by ethicists like Tristan Harris (formerly Google) using techniques from gambling, persuasion psychology. Prefrontal cortex matures into mid-20s.`,
          vocab: [
            {
              word: `attention economy`,
              definition: `Framework for understanding how modern technology is designed to capture and hold attention. Tristan Harris (former Google design ethicist) and the Center for Humane Technology have documented design techniques drawn from gambling, persuasion psychology, and behavioral conditioning used to maximize engagement. What gets called "tech addiction" is more accurately understood as products engineered to be hard to put down, interacting with developing brains. Adolescents in US spend 8-9 hours/day average on screens; figure has risen substantially across the past decade.`,
              audioPrompt: `The attention economy is a framework for understanding how modern technology is designed to capture and hold attention, {name}. Tristan Harris, a former Google design ethicist, and the Center for Humane Technology have documented specific design techniques used by major tech platforms. Techniques drawn from gambling, persuasion psychology, and behavioral conditioning. Variable reward schedules. Infinite scroll. Push notifications. Algorithmic feeds optimized for engagement. Social validation features. These design choices are not accidental. The explicit job of many engineers, designers, and product managers at major tech companies is maximizing how much of users' attention the product captures. What gets called "tech addiction" or "screen addiction" in pop content is more accurately understood as products engineered to capture and hold attention, interacting with brains that aren't fully developed yet. The prefrontal cortex, responsible for executive function and inhibition, matures into the mid-20s. It's not weakness; the product is designed to be hard to put down. Recognizing this changes the response from self-blame to design awareness.`,
            },
            {
              word: `prefrontal cortex`,
              definition: `Brain region responsible for executive function and inhibition, including the ability to regulate attention and resist impulses. The prefrontal cortex matures into the mid-20s, meaning adolescent brains are still developing the very circuitry that manages resistance to attention capture by technology.`,
              audioPrompt: `The prefrontal cortex is the brain region responsible for executive function and inhibition, {name}. Executive function includes regulating attention, planning, making decisions, and resisting impulses — the suite of capacities that lets someone put down an engaging app deliberately. The relevant detail for understanding attention in adolescence is that the prefrontal cortex matures into the mid-20s. That means the circuitry most responsible for managing attention and resisting designed capture is still developing during the exact years when adolescents are most heavily exposed to products engineered to hold attention. This is not a character flaw or a moral failure. What gets called "tech addiction" or "screen addiction" in popular content is more accurately understood as products engineered to capture and hold attention, interacting with brains whose executive function systems aren't fully mature yet. Recognizing the developmental reality changes the response: from self-blame toward design awareness and structural interventions. You're not weak; the product is designed to be hard to put down, and your prefrontal cortex is still finishing the very hardware that handles resistance.`,
            },
            {
              word: `design awareness`,
              definition: `Shift in framing from self-blame toward recognition that tech products are deliberately engineered to capture attention using gambling, persuasion psychology, and behavioral conditioning. Design awareness means understanding that focus difficulty with technology is a predictable outcome of product design, not individual weakness.`,
              audioPrompt: `Design awareness is the shift from self-blame to understanding that tech products are deliberately engineered to capture attention, {name}. Tristan Harris, a former Google design ethicist, has documented how major tech platforms use techniques from gambling, persuasion psychology, and behavioral conditioning to maximize engagement. The Center for Humane Technology's work documents the specific design patterns being used. The explicit job of many engineers, designers, and product managers at these companies is maximizing how much of users' attention the product captures. Design awareness means recognizing this clearly. When you find it hard to put your phone down, that difficulty is a predictable consequence of how the product was built — not evidence that you lack discipline. Adolescents in the US spend an average of eight to nine hours per day on screens for entertainment; the figure has risen substantially over the past decade and is higher for current cohort than for earlier ones at the same age. That rise is not because a generation became weak. It is because the products became more engineered. Understanding this doesn't remove responsibility for choices; it correctly frames where the problem lives.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Attention As Cognitive Resource`,
          paragraphs: [
            `The first position treats attention as a finite cognitive resource that can be allocated, depleted, and trained. The framework comes from cognitive science and has substantial research support across decades.`,
            `Defenders include cognitive psychologists from Daniel Kahneman ("Thinking, Fast and Slow") to attention researchers like Michael Posner, Earl Miller, and Adam Gazzaley. The framework treats attention as a system with measurable properties: focused attention is finite per session; switching between tasks has real costs; sustained focus requires energy that depletes; some forms of attention can be trained through specific practices.`,
            `Specific findings from this research tradition. Multitasking is largely myth; what feels like multitasking is rapid task-switching, with real costs in time and accuracy. Each task switch incurs a "switch cost" in the seconds-to-minutes range; multiple switches per hour add up to substantial productivity loss. Sustained focus periods produce qualitatively different work than fragmented attention; this is what Cal Newport calls "deep work" in his 2016 book of the same name.`,
            `Attention training is possible. Mindfulness research (despite some over-claims in popular content) has documented measurable changes in attention-related neural systems with sustained practice. Meditation training improves specific attention capacities (sustained, selective, executive attention) in research-controlled studies. The effects are real but modest compared to popular claims; treating meditation as a panacea overshoots what evidence supports.`,
            `What this position implies practically. Treat attention as something to allocate deliberately. Reduce task-switching when sustained focus matters. Build conditions that support deep work: minimal interruptions, sufficient time blocks, sleep enough to have cognitive resources. Consider training attention through specific practices (meditation, sustained reading, focused work without devices). Recognize that focus capacity is finite per day and design accordingly.`,
            `Limits of this position. The cognitive-resource framework treats attention primarily as something internal that the individual controls. Critics argue this underweights the role of environment in determining what attention is captured by, and underweights structural and embodied factors. The framework can produce self-blame for what is partly an environmental and biological problem.`,
          ],
          image: `/voyager-assets/life-wellness/l08-s2-cognitive.webp`,
          imageCaption: `Position 1: cognitive resource. Kahneman, Posner, Miller, Gazzaley, Newport. Attention is finite, allocable, trainable. Multitasking is task-switching with real costs.`,
          vocab: [
            {
              word: `model attention`,
              definition: `Framework treating attention as a finite cognitive resource that can be allocated, depleted, and trained. From cognitive science (Posner, Miller, Gazzaley, Kahneman). Specific findings: multitasking is largely myth (rapid task-switching with switch costs); sustained focus produces qualitatively different work than fragmented attention (Newport's "deep work"); attention training is possible through specific practices (meditation, sustained focus work). Strength: measurable, actionable. Limit: underweights environmental and embodied factors; can produce self-blame for partly external problems.`,
              audioPrompt: `The cognitive resource model of attention treats attention as a finite cognitive resource that can be allocated, depleted, and trained, {name}. From cognitive science research over decades. Daniel Kahneman in "Thinking, Fast and Slow." Attention researchers including Michael Posner, Earl Miller, Adam Gazzaley. The framework treats attention as a system with measurable properties. Focused attention is finite per session. Switching between tasks has real costs. Sustained focus requires energy that depletes. Some forms of attention can be trained through specific practices. Specific findings: multitasking is largely myth; what feels like multitasking is rapid task-switching with real costs in time and accuracy. Sustained focus periods produce qualitatively different work than fragmented attention; this is what Cal Newport calls deep work. Attention training is possible: meditation research has documented measurable changes in attention-related neural systems with sustained practice. The framework's strength is being measurable and actionable. Its limit is underweighting the role of environment and embodiment; the cognitive resource model can produce self-blame for what is partly external.`,
            },
            {
              word: `task switching`,
              definition: `What actually happens when people believe they are multitasking: rapid alternating between tasks, each switch incurring a real cost in time and accuracy. Cognitive research has shown that multiple task switches per hour accumulate into substantial productivity loss, and what feels like efficient multitasking is typically the opposite.`,
              audioPrompt: `Task switching is what actually happens when people believe they are multitasking, {name}. What feels like doing two things at once is the brain rapidly alternating between tasks — and each switch incurs a real cost. Cognitive scientists call this the switch cost. It operates in the seconds-to-minutes range per switch: time lost reorienting, accuracy lost from interrupted context, energy spent re-establishing focus. Multiple task switches per hour add up to substantial productivity loss across a session. Cognitive scientists studying attention — including researchers like Earl Miller and Adam Gazzaley — have established this across many studies. Sustained focus periods produce qualitatively different work than fragmented attention. This is what Cal Newport calls deep work in his 2016 book: work done with full concentration, no switching, for sufficient uninterrupted time. The practical implication from the cognitive resource framework is to reduce task switching when quality matters — not through more willpower, but through structuring work to make switching less likely: single task, minimal interruptions, sufficient time blocks.`,
            },
            {
              word: `deep work`,
              definition: `Cal Newport's term for work performed with full concentration on a cognitively demanding task, without distraction or task switching. The cognitive resource framework treats sustained focus as producing qualitatively different output than fragmented attention; deep work names the conditions that make that sustained focus possible.`,
              audioPrompt: `Deep work is Cal Newport's term for work performed with full concentration on a cognitively demanding task, without distraction or task switching, {name}. Newport introduced the term in his 2016 book of the same name, synthesizing research on sustained focus periods producing qualitatively different work than fragmented attention. The cognitive resource framework treats attention as finite and allocable; deep work names the conditions under which the full allocation happens. Minimal interruptions. Sufficient time blocks. Single-task focus. No device switching. What makes deep work increasingly rare and valuable in modern knowledge work is exactly the conditions that make it hard: environments designed for engagement, constant notification streams, social validation features, open browser tabs. The same cognitive research that establishes task switching costs also establishes what removing switching enables. The practical implication: when quality of output matters, build conditions that make deep work possible — not as a productivity trick but as recognition that cognitive resources are finite and fragmented attention consumes them without producing equivalent output.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Attention As Captured By Environment`,
          paragraphs: [
            `The second position argues attention isn't primarily an individual resource but a target captured by environment, particularly designed environments. The framework treats focus problems less as individual failures and more as predictable outcomes of being immersed in environments optimized to capture attention.`,
            `Defenders include Tristan Harris and the Center for Humane Technology, attention economy researchers, Johann Hari (whose 2022 book "Stolen Focus" synthesizes much of this research for general audiences, though some specific claims have been critiqued), and tech ethics researchers studying design choices in modern platforms. The framework draws on persuasion psychology, behavioral economics, and design ethics.`,
            `Specific research and arguments supporting the position. Apps and platforms use specific design techniques to maximize engagement: variable reward schedules (like slot machines), infinite scroll (removing natural stopping cues), push notifications (interrupting focus), algorithmic feeds (selecting content optimized for engagement), social validation features (creating compulsive checking), and many others. These techniques work; they're documented in design ethics literature. Adolescents and adults using these products lose attention not because they're weak but because the products are designed to capture attention against users' interests.`,
            `Specific findings on environmental attention effects. The mere presence of a smartphone (even silent, even face-down) measurably reduces cognitive performance on attention tasks; research by Adrian Ward and colleagues at the University of Texas (2017) found significant cognitive drain from smartphone proximity. Notifications interrupting work add seconds-to-minutes of recovery time per interruption. Multitasking attempts (driven partly by environmental cues) impair both tasks compared to either alone. These aren't moral failures; they're predictable consequences of being in attention-hostile environments.`,
            `What this position implies practically. The intervention isn't building more willpower; it's changing the environment to reduce attention capture. Phone in another room while working. Notifications off during focus periods. Apps that block distracting sites during deep work blocks. Physical separation from devices for sustained periods. The framework is structural rather than individual: change the conditions, change the outcomes.`,
            `Limits of this position. Can underweight individual agency; even in attention-hostile environments, people make choices. Can become defeatist if read as "until tech changes, nothing can change." The position works best as a complement to individual frameworks rather than as a replacement for them. Some critics have also noted that "Stolen Focus" and similar popular works sometimes overstate the historical novelty of attention problems; concerns about attention go back to ancient times.`,
          ],
          image: `/voyager-assets/life-wellness/l08-s3-environment.webp`,
          imageCaption: `Position 2: environment captures attention. Harris, Center for Humane Technology, Hari. Tech designed for engagement. Smartphone presence measurably reduces cognitive performance (Ward et al 2017).`,
          vocab: [
            {
              word: `environmental capture`,
              definition: `Framework treating attention as captured by environment, particularly designed environments using techniques from persuasion psychology and behavioral conditioning. From Tristan Harris, Center for Humane Technology, attention economy researchers. Specific design techniques: variable reward schedules, infinite scroll, push notifications, algorithmic feeds, social validation features. Adrian Ward et al 2017: mere presence of smartphone (even silent, face-down) measurably reduces cognitive performance. Intervention: change environment, not willpower. Limit: can underweight individual agency.`,
              audioPrompt: `The attention economy and environmental capture framework treats attention as primarily captured by environment rather than as an individual resource, {name}. From Tristan Harris and the Center for Humane Technology, attention economy researchers, Johann Hari in "Stolen Focus" though some specific claims have been critiqued, and tech ethics researchers. Apps and platforms use specific design techniques to maximize engagement. Variable reward schedules like slot machines. Infinite scroll removing natural stopping cues. Push notifications interrupting focus. Algorithmic feeds selecting content optimized for engagement. Social validation features creating compulsive checking. These techniques work; they're documented in design ethics literature. Adolescents and adults using these products lose attention not because they're weak but because the products are designed to capture attention against users' interests. Adrian Ward and colleagues at the University of Texas in 2017 found that mere presence of a smartphone, even silent and face-down, measurably reduces cognitive performance on attention tasks. The intervention isn't building more willpower; it's changing the environment to reduce attention capture.`,
            },
            {
              word: `variable reward schedules`,
              definition: `Design technique borrowed from gambling and behavioral psychology in which rewards (likes, new posts, messages) appear unpredictably rather than on a fixed schedule. Variable reward schedules are documented as the most powerful driver of compulsive checking behavior and are deliberately used by major tech platforms to maximize engagement.`,
              audioPrompt: `Variable reward schedules are a design technique borrowed from gambling and behavioral psychology, {name}. In a fixed reward schedule, you know exactly when the reward arrives — pull the lever, get the coin every time. In a variable reward schedule, rewards arrive unpredictably. Sometimes you pull and nothing happens. Sometimes something arrives. The unpredictability itself is what drives compulsive checking. Behavioral research has established that variable schedules produce the highest rates of repeated behavior — the same mechanism that makes slot machines hard to walk away from. Tristan Harris and the Center for Humane Technology have documented that this technique is deliberately used by major tech platforms. When you open an app and check whether there are new likes, messages, or posts, you're pulling a lever on a variable reward schedule. The design choice is intentional. Apps and platforms use variable reward schedules, infinite scroll, push notifications, algorithmic feeds, and social validation features specifically because these techniques maximize engagement. The environmental capture framework argues this is why focus problems are better addressed through structural environmental change than through willpower.`,
            },
            {
              word: `smartphone proximity`,
              definition: `The finding from Adrian Ward and colleagues at the University of Texas (2017) that the mere presence of a smartphone — even silent and face-down — measurably reduces cognitive performance on attention tasks. The effect is environmental and operates without active use of the device.`,
              audioPrompt: `Smartphone proximity refers to the finding that the mere presence of a smartphone measurably reduces cognitive performance, even when the phone is silent and face-down, {name}. Adrian Ward and colleagues at the University of Texas conducted this research in 2017. Participants completed attention tasks with their smartphones either in another room, face-down on the desk, or in their pocket or bag. Cognitive performance was significantly better when the smartphone was in another room. The effect was environmental, not behavioral: participants did not have to use the phone for it to affect them. The researchers described this as a "brain drain" — the smartphone's presence pulls cognitive resources even when you are not interacting with it. This finding has dramatic practical implications within the environmental capture framework. "Not using" your phone during focused work is not enough. "Just put it face-down" is not enough. Physical separation — phone in another room — addresses a real documented environmental effect on attention. Structural interventions at the environment level, not willpower at the individual level, are what the research supports.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Attention As Embodied State`,
          paragraphs: [
            `The third position treats attention as fundamentally embodied: shaped by sleep, movement, nutrition, stress, and overall physiological state. The capacity to focus isn't separable from the body's condition. A well-rested, well-nourished, regularly-moving body has different attention capacity than a depleted one.`,
            `Defenders include researchers studying how various biological factors affect cognitive function. Sleep researchers (covered in Lesson 2) documenting the dramatic effects of sleep loss on attention and executive function. Exercise researchers documenting cognitive benefits of regular movement (covered in Lesson 5). Nutritional cognitive researchers studying how blood sugar regulation, hydration, and broader nutritional state affect focus. Stress researchers (covered in Lesson 3) documenting how chronic stress affects attention and executive function.`,
            `Specific findings supporting the position. Sleep loss produces dramatic attention decrements: research shows that 17-19 hours awake produces cognitive performance similar to legal alcohol intoxication; chronic partial sleep loss accumulates across days. Regular aerobic movement produces measurable improvements in attention-related cognitive function in research-controlled studies. Blood sugar dysregulation (large swings) impairs sustained attention; chronic dehydration measurably reduces cognitive performance. Chronic stress impairs prefrontal function specifically, which is where executive attention is managed.`,
            `What's striking about the embodied position. The same person has dramatically different attention capacity in different states. The kid who can't focus might be sleep-deprived, dehydrated, sedentary, chronically stressed, or some combination, rather than having an attention deficiency that needs to be fixed at the attention level. Addressing the underlying state often resolves the apparent attention problem far better than attention-specific interventions can.`,
            `For adolescents specifically, the embodied position has particular relevance. Adolescent biology requires substantial sleep (8-10 hours), substantial movement, real food, and adequate recovery from stress to support cognitive development. The conditions most adolescents are in — chronic sleep deprivation, sedentary days, chaotic eating, high chronic stress — predict the attention problems many adolescents experience. Addressing these foundations changes attention capacity in ways that attention-specific interventions can't.`,
            `Limits of this position. Doesn't address designed-environment capture even when bodies are in good state. Can be misread as "if you're well-rested everything is fine," which underestimates real environmental factors. Works best as a complement to the other positions, treating embodied state as foundation and the other positions as what to build on it.`,
          ],
          image: `/voyager-assets/life-wellness/l08-s4-embodied.webp`,
          imageCaption: `Position 3: attention is embodied. Sleep, movement, nutrition, stress shape focus capacity. 17-19 hours awake = legal alcohol intoxication cognitive equivalent. Foundation for the other positions.`,
          vocab: [
            {
              word: `embodied attention framework`,
              definition: `Framework treating attention as fundamentally shaped by sleep, movement, nutrition, stress, and overall physiological state. Capacity to focus isn't separable from body's condition. Key findings: 17-19 hours awake produces cognitive performance similar to legal alcohol intoxication; chronic partial sleep loss accumulates; regular aerobic movement improves attention-related cognitive function; blood sugar dysregulation and chronic dehydration impair attention; chronic stress impairs prefrontal function specifically. Same person has dramatically different attention capacity in different states.`,
              audioPrompt: `The embodied attention framework treats attention as fundamentally shaped by sleep, movement, nutrition, stress, and overall physiological state, {name}. The capacity to focus isn't separable from the body's condition. A well-rested, well-nourished, regularly-moving body has different attention capacity than a depleted one. Specific findings supporting the position: sleep loss produces dramatic attention decrements; research shows that 17 to 19 hours awake produces cognitive performance similar to legal alcohol intoxication. Chronic partial sleep loss accumulates across days. Regular aerobic movement produces measurable improvements in attention-related cognitive function. Blood sugar dysregulation (large swings) impairs sustained attention. Chronic dehydration measurably reduces cognitive performance. Chronic stress impairs prefrontal function specifically, which is where executive attention is managed. What's striking: the same person has dramatically different attention capacity in different states. Addressing the underlying state often resolves the apparent attention problem far better than attention-specific interventions can.`,
            },
            {
              word: `sleep loss attention`,
              definition: `The dramatic reduction in attention and cognitive performance caused by insufficient sleep. Research shows that 17-19 hours awake produces cognitive performance similar to legal alcohol intoxication, and chronic partial sleep loss accumulates across days rather than resolving on its own.`,
              audioPrompt: `Sleep loss attention refers to the dramatic reduction in attention and cognitive performance caused by insufficient sleep, {name}. Sleep researchers have established that 17 to 19 hours awake produces cognitive performance similar to legal alcohol intoxication. This is not a metaphor — tests of attention, reaction time, and executive function show equivalent impairment. Chronic partial sleep loss, the pattern most adolescents are in, accumulates across days rather than resolving on its own. The embodied attention framework treats these findings as fundamental: no amount of attention training, environmental redesign, or willpower compensates for a sleep-deprived brain. Adolescent biology specifically requires eight to ten hours of sleep to support cognitive development. The conditions most adolescents are in — chronic sleep deprivation from early school start times, late device use, phase-delayed melatonin timing — predict the attention problems many adolescents experience. Addressing sleep directly often resolves apparent attention problems far better than any attention-specific intervention can. Sleep is not a soft recommendation within the embodied framework; it is the foundation that other interventions build on.`,
            },
            {
              word: `blood sugar`,
              definition: `Blood glucose levels, which fluctuate based on food intake and affect sustained attention. Large blood sugar swings from dysregulated eating impair sustained attention, and chronic dehydration measurably reduces cognitive performance, making nutritional state a direct variable in attention capacity.`,
              audioPrompt: `Blood sugar levels are a direct variable in attention capacity, {name}. The embodied attention framework treats nutritional state — including blood glucose regulation and hydration — as one of the foundations that determines how much focus capacity a person has at any given moment. Specifically, large blood sugar swings impair sustained attention. When blood glucose spikes after high-sugar intake and then crashes, the crash period is accompanied by impaired cognitive function. Chronic dehydration measurably reduces cognitive performance in research-controlled studies. These findings mean that chaotic eating patterns and inadequate hydration are not just nutrition issues — they are direct attention-capacity issues. The same person eating regular balanced meals and staying hydrated has measurably better sustained attention than the same person in a blood-sugar-spike-and-crash cycle. For adolescents specifically, the embodied position notes that adolescent biology requires real food and adequate hydration to support cognitive development. The conditions many adolescents are in — irregular meals, high-sugar food, chronic mild dehydration — predict impaired attention in ways that no amount of cognitive training can compensate for.`,
            },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature understanding integrates elements: attention is a finite cognitive resource (position 1); environments capture it through deliberate design (position 2); embodied state determines baseline capacity (position 3). The forcing function of the argument is committing to a primary framing.`,
            `One framing as you decide. Each position implies different defaults when focus isn't working. Position 1: examine attention practices (multitasking, training, deep work conditions). Position 2: examine environment (phones, notifications, designed apps). Position 3: examine embodied state (sleep, movement, nutrition, stress). The right intervention often depends on which factor is most actionable in your situation.`,
            `Another framing. The positions operate at different scales. Cognitive resource framework is moment-to-moment and session-to-session. Environmental capture framework is hour-to-hour and day-to-day. Embodied state framework is week-to-week and year-to-year. All three are operating simultaneously; the question is which matters most for what you're trying to do.`,
            `One important note. For your generation specifically, the environmental factor is unprecedented in scale. No previous generation had to navigate environments designed at this level of sophistication to capture attention. Underweighting position 2 is the most common error among adults who absorbed cognitive-resource frameworks before the attention economy intensified. Your generation needs explicit environmental literacy that older generations could partially do without.`,
            `One last framing. You're 12. The attention patterns and frameworks you build over the next decade compound across the rest of your life. Most adults absorb whichever framework their environment offered (often "just have more willpower"); explicitly choosing yours, especially one that takes the environmental factor seriously, protects against decades of designed-environment capture.`,
          ],
          image: `/voyager-assets/life-wellness/l08-s5-before.webp`,
          imageCaption: `Three positions operate at different scales: cognitive (moment), environmental (day), embodied (year). Environmental factor unprecedented for your generation; explicit literacy needed.`,
          vocab: [
            {
              word: `attention frameworks`,
              definition: `Mature attention literacy integrates all three frameworks. Cognitive resource: moment-to-moment allocation, training, deep work conditions. Environmental capture: hour-to-hour, designed-environment awareness, structural interventions (phones, notifications). Embodied state: week-to-week and year-to-year, foundations of sleep/movement/nutrition/stress. All three operate simultaneously. For Voyager-age adolescents, environmental factor is unprecedented in scale; explicit literacy about designed environments protects against decades of attention capture.`,
              audioPrompt: `Integrating the three attention frameworks is what mature attention literacy involves, {name}. Each framework operates at a different scale. Cognitive resource framework is moment-to-moment and session-to-session: attention as something you allocate, train, sustain. Environmental capture framework is hour-to-hour and day-to-day: attention as something captured by designed environments using sophisticated techniques. Embodied state framework is week-to-week and year-to-year: attention as something shaped by sleep, movement, nutrition, stress. All three operate simultaneously. The question is which matters most for what you're trying to do. For your generation specifically, the environmental factor is unprecedented in scale. No previous generation had to navigate environments designed at this level of sophistication to capture attention. Underweighting the environmental position is the most common error among adults who absorbed cognitive-resource frameworks before the attention economy intensified. Your generation needs explicit environmental literacy that older generations could partially do without.`,
            },
            {
              word: `environmental literacy`,
              definition: `Explicit awareness of how designed environments — particularly tech products — are built to capture attention through sophisticated techniques from persuasion psychology and behavioral conditioning. The lesson argues that environmental literacy is specifically necessary for the current generation in a way that older generations could partially avoid.`,
              audioPrompt: `Environmental literacy is explicit awareness of how designed environments are built to capture attention, {name}. The lesson makes a specific argument about why this matters for your generation in particular. No previous generation had to navigate environments designed at this level of sophistication to capture attention. Major tech platforms are built by engineers, designers, and product managers whose explicit job is maximizing engagement using techniques from gambling, persuasion psychology, and behavioral conditioning. Adults who grew up before the attention economy reached its current intensity absorbed cognitive-resource frameworks — attention as something to manage through personal discipline and training. That framing underweights what your generation is actually facing. Underweighting the environmental position is the most common error among adults who absorbed those frameworks before the tools became this sophisticated. Environmental literacy means being able to name the design techniques: variable reward schedules, infinite scroll, push notifications, algorithmic feeds optimized for engagement, social validation features. It means understanding that attention difficulty with technology is a predictable consequence of product design. And it means knowing that structural environmental interventions — not willpower — are what actually work against designed capture.`,
            },
            {
              word: `primary framing`,
              definition: `The single framework a person defaults to first when attention problems arise. The lesson argues that while mature understanding integrates all three frameworks, committing to a primary framing is useful because each position implies different default interventions — cognitive, environmental, or embodied — depending on what factor is most actionable.`,
              audioPrompt: `Primary framing is the single attention framework a person defaults to first when focus problems arise, {name}. The three frameworks — cognitive resource, environmental capture, embodied state — are not strictly mutually exclusive. Most mature understanding integrates elements of all three. But the argument-building exercise in this lesson has a forcing function: commit to a primary framing. The reason is practical. Each position implies different defaults when focus isn't working. Position one says examine attention practices: are you multitasking, switching tasks, working in fragmented sessions instead of deep work conditions? Position two says examine environment: is your phone in the room, are notifications on, are designed apps open and competing for attention? Position three says examine embodied state: have you slept enough, moved today, eaten real food, addressed chronic stress? The right intervention often depends on which factor is most actionable in a given situation. Choosing a primary framing doesn't mean dismissing the others; it means knowing where you look first, and building the habit of checking all three scales — moment-to-moment cognitive, hour-to-day environmental, week-to-year embodied — when attention problems persist.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l08-argument-builder`,
          type: `argument-builder`,
          headline: `What Is Attention, Really?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders.`,
          positions: [
            {
              id: `cognitive-resource`,
              label: `Cognitive resource: attention is a finite internal capacity that can be trained and allocated`,
              summary: `Attention is finite cognitive resource that can be allocated, depleted, and trained. Cognitive science research (Posner, Miller, Gazzaley, Kahneman). Multitasking is myth; rapid task-switching with switch costs. Sustained focus produces qualitatively different work than fragmented attention (Newport's "deep work"). Attention training possible (meditation research). Strength: measurable, actionable. Limit: underweights environmental and embodied factors; can produce self-blame for partly external problems.`,
            },
            {
              id: `environmental`,
              label: `Environmental capture: attention is captured by designed environments using sophisticated techniques`,
              summary: `Attention captured by environment, particularly designed environments. Tristan Harris, Center for Humane Technology, attention economy researchers. Specific design techniques from persuasion psychology and behavioral conditioning. Smartphone presence alone reduces cognitive performance (Ward et al 2017). Intervention: change environment, not willpower. Strength: addresses unprecedented scale of designed attention capture for your generation. Limit: can underweight individual agency; can become defeatist.`,
            },
            {
              id: `embodied`,
              label: `Embodied state: attention capacity is determined by sleep, movement, nutrition, stress`,
              summary: `Attention fundamentally shaped by physiological state. Sleep, movement, nutrition, stress shape focus capacity. 17-19 hours awake produces cognitive performance similar to legal alcohol intoxication. Chronic stress impairs prefrontal function specifically. Same person has dramatically different attention in different states. Strength: addresses foundations that other interventions can't substitute for. Limit: doesn't address designed-environment capture even when body is in good state.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Cognitive science research (Posner, Miller, Gazzaley, Kahneman, others) treats attention as finite cognitive resource with measurable properties. Multitasking research shows what feels like multitasking is rapid task-switching with real costs in time and accuracy.`,
              source: `Cognitive science attention research; Kahneman 2011 and others`,
            },
            {
              id: `e2`,
              text: `Cal Newport's "deep work" framework synthesizes research on sustained focus periods producing qualitatively different work than fragmented attention. Sustained focus is increasingly rare and increasingly valuable in modern knowledge work.`,
              source: `Newport 2016 and underlying research`,
            },
            {
              id: `e3`,
              text: `Tristan Harris (former Google design ethicist) and the Center for Humane Technology have documented specific design techniques used by major tech platforms to maximize engagement: variable reward schedules, infinite scroll, push notifications, algorithmic feeds optimized for engagement, social validation features.`,
              source: `Harris and Center for Humane Technology work; tech ethics research`,
            },
            {
              id: `e4`,
              text: `Adrian Ward and colleagues at University of Texas (2017) found that mere presence of a smartphone (even silent, even face-down) measurably reduces cognitive performance on attention tasks. The effect is environmental, not behavioral; you don't have to use the phone for it to affect you.`,
              source: `Ward et al 2017; subsequent replications`,
            },
            {
              id: `e5`,
              text: `Sleep research shows 17-19 hours awake produces cognitive performance similar to legal alcohol intoxication; chronic partial sleep loss accumulates across days. Sleep loss produces dramatic attention decrements that no amount of attention training can compensate for.`,
              source: `Sleep deprivation cognitive research; multiple sources`,
            },
            {
              id: `e6`,
              text: `Adolescents in US spend average 8-9 hours per day on screens for entertainment (Common Sense Media); figure has risen substantially across past decade and is higher for current cohort than for earlier ones at same age.`,
              source: `Common Sense Media and similar surveys`,
            },
            {
              id: `e7`,
              text: `Mindfulness and attention training research has documented measurable changes in attention-related neural systems with sustained practice. Effects are real but modest compared to popular claims; treating meditation as panacea overshoots what evidence supports.`,
              source: `Meditation and attention research; multiple sources`,
            },
            {
              id: `e8`,
              text: `Chronic stress impairs prefrontal function specifically, which is where executive attention is managed. The same person has very different attention capacity in different stress states, with the prefrontal effects being a specific neurological substrate of the cognitive impact.`,
              source: `Stress and cognitive research; McEwen and others`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that focused attention and deep work are unambiguously good things to be optimizing for. But maybe the framing itself is part of a problematic productivity culture that treats attention primarily as a resource for producing output. Some research and philosophical traditions argue that distraction, mind-wandering, and fragmented attention have their own value: creative insight often emerges from mind-wandering; some forms of learning happen through low-intensity exposure rather than deep focus; some cultures and traditions value being attentive to one's surroundings and people rather than locked in deep work. Maybe the obsession with focus and deep work is itself a cultural artifact of late-capitalist productivity culture rather than a universal human value. Why think focused attention is what we should be optimizing at all? What does your position assume about what attention is for?"`,
            promptInstruction: `In 3-4 sentences, respond. Is focused attention the right thing to be optimizing? Or does your position assume things about what attention is for that should be examined?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the cognitive resource model of attention?`,
              options: [
                `Just focus`,
                `Framework treating attention as finite cognitive resource that can be allocated, depleted, and trained; from cognitive science (Posner, Miller, Gazzaley, Kahneman); specific findings include multitasking being myth (task-switching with switch costs), sustained focus producing different work than fragmented attention (Newport's "deep work"), attention training possible through specific practices`,
                `Random`,
                `Just willpower`,
              ],
              correctIndex: 1,
              explanation: `The framework treats attention as measurable and trainable. Useful for thinking about attention allocation and deep work. Limit: underweights environmental and embodied factors that can swamp individual attention practices.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the attention economy framework argue?`,
              options: [
                `Just tech bad`,
                `Attention is captured by environment, particularly designed environments using techniques from persuasion psychology and behavioral conditioning; specific techniques include variable reward schedules, infinite scroll, push notifications, algorithmic feeds, social validation features; from Tristan Harris and Center for Humane Technology; intervention is environmental change, not willpower`,
                `Random`,
                `Bad tech`,
              ],
              correctIndex: 1,
              explanation: `The framework reframes "tech addiction" as predictable consequence of being in environments designed to capture attention. Changes the response from self-blame to design awareness. Particularly important for your generation: no previous generation faced environments designed at this sophistication level.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What did Adrian Ward et al (2017) find about smartphones?`,
              options: [
                `Nothing`,
                `Mere presence of a smartphone (even silent, even face-down) measurably reduces cognitive performance on attention tasks; the effect is environmental not behavioral (don't have to use the phone for it to affect you); finding has been replicated; implications: physical separation from devices matters more than just "not using" them`,
                `Random`,
                `Phones are fine`,
              ],
              correctIndex: 1,
              explanation: `This finding has dramatic practical implications. "Just put your phone away" or "in another room" isn't an arbitrary intervention; it addresses a real environmental effect on attention that operates without active use of the phone. Surface-level "don't use phones during work" isn't enough.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the embodied attention framework argue?`,
              options: [
                `Just biology`,
                `Attention is fundamentally shaped by sleep, movement, nutrition, stress, and overall physiological state; same person has dramatically different attention capacity in different states; 17-19 hours awake = legal alcohol intoxication cognitive equivalent; chronic stress impairs prefrontal function specifically; addressing underlying state often resolves apparent attention problems better than attention-specific interventions`,
                `Random`,
                `Just rest`,
              ],
              correctIndex: 1,
              explanation: `The framework treats embodied state as the foundation that other interventions build on. A sleep-deprived person doing deep work practice gets limited benefit; addressing sleep produces attention improvements that no attention-specific intervention can match. Particularly relevant for adolescents whose biology demands substantial sleep and movement.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the deal with "multitasking"?`,
              options: [
                `It works`,
                `Largely myth; what feels like multitasking is rapid task-switching, with real costs in time and accuracy; each task switch incurs "switch cost" (seconds-to-minutes); multiple switches per hour add up to substantial productivity loss; cognitive research has established this across many studies; "I'm good at multitasking" is usually wrong`,
                `Random claim`,
                `Just efficient`,
              ],
              correctIndex: 1,
              explanation: `The research is unambiguous. People who think they're good at multitasking generally perform worse on attention tasks than people who don't try to multitask. The self-assessment is unreliable; objective measurement is reliable.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is the environmental factor unprecedented for your generation specifically?`,
              options: [
                `It isn't`,
                `Major tech platforms designed by engineers, designers, product managers whose explicit job is maximizing engagement using techniques from gambling, persuasion psychology, behavioral conditioning; adolescents in US spend average 8-9 hours/day on screens; figure has risen substantially; no previous generation faced environments designed at this sophistication; prefrontal cortex (executive function) matures into mid-20s, meaning adolescent brains are particularly vulnerable`,
                `Random`,
                `Same as before`,
              ],
              correctIndex: 1,
              explanation: `Underweighting the environmental factor is the most common error among adults who absorbed cognitive-resource frameworks before the attention economy intensified. Your generation needs explicit environmental literacy that older generations could partially do without.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `At what scale does each framework operate?`,
              options: [
                `Same scale`,
                `Cognitive resource: moment-to-moment and session-to-session (allocation, training, deep work). Environmental capture: hour-to-hour and day-to-day (designed environment awareness, structural interventions). Embodied state: week-to-week and year-to-year (sleep, movement, nutrition, stress foundations). All three operate simultaneously; matter most depending on what you're trying to do`,
                `Random`,
                `Just attention`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the scale at which each framework operates helps with picking the right intervention for a specific problem. Today's specific focus problem might be cognitive (multitasking); this week's might be environmental (phone use); this year's might be embodied (chronic sleep loss).`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does mindfulness/attention training research actually show?`,
              options: [
                `Magic cure`,
                `Has documented measurable changes in attention-related neural systems with sustained practice; meditation training improves specific attention capacities (sustained, selective, executive) in research-controlled studies; effects are real but modest compared to popular claims; treating meditation as panacea overshoots what evidence supports`,
                `Random`,
                `Nothing`,
              ],
              correctIndex: 1,
              explanation: `Both the strengths and limits are real. Meditation produces real measurable effects on attention; meditation is not a cure-all and doesn't fix what other factors are breaking. Pop content often overshoots; the research findings, while real, are modest.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Having strong willpower can compensate for being in an environment designed to capture attention.`,
              correctAnswer: false,
              explanation: `False. The environmental capture research is clear: designed attention-capture environments work against users' interests using techniques from persuasion psychology and behavioral conditioning. Even strong-willpower individuals lose attention in these environments because the products are designed to capture attention. Structural interventions (removing devices, changing environment) work; pure willpower against designed capture mostly doesn't.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I can't focus during homework. I just need more discipline. I'll try harder tomorrow." Based on this lesson, what should you point out?`,
              options: [
                `"Try harder"`,
                `"That framing assumes attention is purely a cognitive resource you can will into existence. Real research is more interesting. Three factors are probably operating: cognitive (multitasking, task-switching, fragmentary work patterns), environmental (phone in the room, notifications, social media tabs open), and embodied (sleep enough? moving enough? real food today? chronic stress?). 'More discipline' addresses none of these. Specific interventions that might actually work: put your phone in another room, not just face-down in your room (mere presence reduces cognitive performance per Ward et al 2017); turn off notifications during homework; close all non-homework tabs; do one task at a time, no switching; check whether sleep, movement, nutrition, stress are in baseline ranges or whether one is causing the apparent attention problem. The environment design isn't your fault; the products are designed to capture attention against your interests, and previous generations weren't dealing with environments at this sophistication. Try changing the environment for one homework session and see what happens. 'More willpower' is the framing that lets the attention-capture industry off the hook."`,
                `"Random advice"`,
                `"Discipline only"`,
              ],
              correctIndex: 1,
              explanation: `Real applied attention literacy. Don't endorse the "more willpower" framing; name all three frameworks. Give specific structural interventions. Reference real research (Ward et al). Connect to the embodied foundation. The shift from self-blame to design-and-environment awareness is itself the major skill being built.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for attention and focus? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which of the three frameworks have you been operating from (often unconsciously)? Where did it come from?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with explicit attention literacy — recognizing designed environments, training cognitive resources, attending to embodied foundations — what does that change across decades?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific focus problem you've been having. Apply all three frameworks. Which factor is most actionable?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument questioned whether focused attention is even the right thing to optimize. How much of "attention as productivity tool" is cultural artifact vs universal human value?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Try one specific environmental intervention (phone in another room during work) for one week. Note what changes.` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Attention literacy at 12 protects across decades of designed environment capture. Two paths.`,
          familyActivity: {
            title: `The Family Attention Conversation`,
            duration: `45 minutes`,
            description: `Share the three frameworks and the attention economy specifically. Most adults grew up before the attention economy intensified to current levels; they often don't have explicit framework for what's happening. The conversation often surfaces specific family patterns worth changing (phones at dinner, devices in bedrooms, evenings spent on social media when family time was possible). Consider establishing family attention practices: device-free meals, phones in another room during deep work or family time, weekly review of family screen time vs intended priorities.`,
          },
          projectOption: {
            title: `Read on attention, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Cal Newport's "Deep Work" (2016, cognitive resource framework with practical application), Tristan Harris's work or the Center for Humane Technology's content (attention economy framework), Daniel Kahneman's "Thinking, Fast and Slow" (cognitive science foundation, denser but worth it). Apply concepts during reading period. Write 1,500 words on what you learned about attention and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Real attention literacy at 12 is one of the highest-leverage protections you can give them against decades of designed-environment attention capture.`,
          },
          identityQuestion: `If you become someone who recognizes designed-environment attention capture immediately, attends to embodied foundations, and trains cognitive attention skills deliberately across decades — what does that change about your work, learning, relationships, and life?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes designed-environment attention capture and changes the environment.`,
            `A person who treats embodied foundations as where attention literacy starts.`,
            `Someone who trains cognitive attention without believing willpower alone is the answer.`,
          ],
          saveKey: `identity_responses_lw_11_12_8`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighth Life Wellness lesson done. You now have three serious frameworks for attention (cognitive resource, environmental capture, embodied state), know the major thinkers (Kahneman, Posner, Miller, Gazzaley, Newport, Harris, Center for Humane Technology, Ward et al), understand the attention economy as unprecedented for your generation, and have practical interventions across all three scales. Most adults absorbed "just have more willpower"; you've built something far more accurate. Next time we go into emotional regulation. Three real situations. Case Study format. Let's go. — Terra`,
          badge: `attention-literate`,
          badgeName: `Attention Literate`,
          xpEarned: 75,
          competencies: [
            `Distinguishes three serious attention frameworks (cognitive, environmental, embodied)`,
            `Knows major researchers (Kahneman, Posner, Newport, Harris, Ward et al)`,
            `Understands attention economy and its sophistication`,
            `Recognizes embodied foundations of attention (sleep, movement, nutrition, stress)`,
            `Applies multi-framework analysis to specific attention problems`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Emotional Regulation`,
            hook: `Three real situations on managing emotions. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L08 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
