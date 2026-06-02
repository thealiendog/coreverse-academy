// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L02 — Sleep
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Sleep Science, Adolescent Health
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (insomnia onset / social jet lag / phone in bed)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l02-v1";

const LIFEWELLNESS_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-02`,
      title: `Sleep`,
      duration: 35,
      xpReward: 75,
      badge: `sleep-literate`,
      badgeName: `Sleep Literate`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, sleep is the single most important wellness lever you have. Real research shows sleep affects learning, memory, mood, immune function, metabolic health, mental health, and physical performance more than almost anything else under your direct control. Your generation has worse sleep than any previous generation in recorded history, mostly because of screens, social media, and schedules that fight your biology. Adolescent sleep biology is also genuinely different from adult biology, which most adults around you don't realize. Today we work through three real sleep situations using actual sleep science. By the end you'll have a working framework for the most leveraged wellness practice in your life, one that costs nothing and produces dramatically more benefit than $5.6 trillion of wellness products combined.`,
          headline: `Sleep`,
          subtitle: `The single most important wellness lever you have. Three real sleep situations.`,
          visual: `/voyager-assets/life-wellness/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Sleep Architecture (What's Actually Happening)`,
          paragraphs: [
            `Sleep isn't a single state. It's a structured sequence of distinct phases that cycle throughout the night, each doing different work. Understanding the architecture changes how you think about sleep quality.`,
            `Two major categories of sleep alternate across the night. Non-REM sleep has three stages, going progressively deeper. N1 is the light transitional sleep where you might hear external noise. N2 is light sleep where heart rate slows. N3 is deep slow-wave sleep where your body does most of its physical repair, immune work, and waste clearance from the brain. REM (Rapid Eye Movement) sleep is when most vivid dreaming happens; your brain is highly active while your body is paralyzed (which is good: it prevents you from acting out dreams).`,
            `Each cycle is roughly 90 minutes and you go through 4-6 cycles per night. Early cycles have more N3 deep sleep; later cycles have more REM. This means cutting sleep short doesn't proportionally reduce all sleep types: if you sleep 6 hours instead of 8, you lose most of your REM sleep but keep most of your deep sleep, because REM is concentrated in the later cycles.`,
            `Matthew Walker, sleep researcher at UC Berkeley and author of "Why We Sleep" (2017), has done some of the most accessible synthesis of sleep science. Different aspects of his book have been critiqued by other researchers (some specific claims may be overstated), but the core sleep architecture findings are well-established across hundreds of studies. The basic picture isn't controversial: sleep is structured, each phase does work, cutting sleep short cuts specific functions.`,
            `What sleep does, briefly. Memory consolidation: new information learned during the day gets stabilized and integrated during sleep, especially during REM. Physical repair: tissue repair, hormone release, immune function during deep sleep. Brain waste clearance: the glymphatic system, discovered by Maiken Nedergaard in 2012, clears metabolic waste from brain tissue primarily during deep sleep. Emotional regulation: REM sleep processes emotional experiences in ways that affect next-day mood and stress response. None of these functions can be reliably outsourced; sleep is how they happen.`,
          ],
          image: `/voyager-assets/life-wellness/l02-s1-architecture.webp`,
          imageCaption: `Sleep architecture: N1/N2/N3 non-REM + REM, 90-minute cycles, 4-6 cycles per night. Memory consolidation, physical repair, brain waste clearance, emotional regulation.`,
          vocab: [
            {
              word: `sleep cycle architecture`,
              definition: `Structured sequence of sleep phases. Non-REM stages N1 (light transitional), N2 (light), N3 (deep slow-wave; physical repair, immune work, brain waste clearance). REM sleep (vivid dreaming, emotional processing, memory consolidation). Each cycle ~90 minutes; 4-6 cycles per night. Early cycles have more N3 deep sleep; later cycles have more REM. Cutting sleep short disproportionately reduces REM because REM concentrates in later cycles.`,
              audioPrompt: `Sleep cycle architecture is the structured sequence of sleep phases that cycle across the night, {name}. Two major categories alternate. Non-REM sleep has three stages going progressively deeper. N1 is light transitional sleep where you might still hear external noise. N2 is light sleep where heart rate slows. N3 is deep slow-wave sleep where your body does most of its physical repair, immune work, and waste clearance from the brain. REM sleep (Rapid Eye Movement) is when most vivid dreaming happens; the brain is highly active while the body is paralyzed, which is good because it prevents you from acting out dreams. Each cycle is roughly 90 minutes and you go through 4 to 6 cycles per night. Early cycles have more N3 deep sleep; later cycles have more REM. This means cutting sleep short doesn't proportionally reduce all sleep types: if you sleep 6 hours instead of 8, you lose most of your REM sleep but keep most of your deep sleep, because REM is concentrated in the later cycles. Each phase does specific work that can't be skipped without losing that work.`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Adolescent Sleep Biology Is Different`,
          paragraphs: [
            `Your sleep biology around age 11-15 isn't the same as adult sleep biology, and it isn't the same as it was when you were 8. Three major changes happen around puberty that most adults around you don't realize.`,
            `First: circadian phase delay. Your internal clock shifts later during adolescence. Melatonin (the hormone that signals "time to sleep") starts releasing about two hours later in adolescents than in children or adults. A typical adolescent's body wants to fall asleep around 11pm-1am and wake around 8-10am. This isn't laziness or screen-induced; it's biological. Research by Mary Carskadon at Brown University and others has documented this consistently across decades. Adolescents in remote villages with no electronics show the same pattern.`,
            `Second: sleep need stays high. Despite the timing shift, total sleep need remains 8-10 hours per night for adolescents (American Academy of Sleep Medicine guideline). Most teens need closer to 9 hours. So the biological setup is: want to sleep 11pm-8am or so, need 9 hours. School starting at 7:30-8am means biological mismatch. The CDC and AAP have both called for later school start times based on this evidence; some districts have changed, most haven't.`,
            `Third: vulnerability to sleep deprivation increases. Adolescent brains are doing intense developmental work, including frontal lobe maturation and synaptic pruning. Chronic sleep loss during adolescence is associated with worse academic performance, worse mood (especially increased depression and anxiety), worse executive function, increased risky behavior, and worse metabolic health. The effects are larger in adolescents than in adults because the developmental work is happening alongside the sleep loss.`,
            `What this means practically. If you're 11-12 and feel like you can't fall asleep before 10pm even when you try, that's likely your biology, not your willpower. If you're chronically tired in morning classes, that's likely insufficient sleep on a biologically misaligned schedule, not "needing more discipline." The right response isn't to try harder; it's to work with the biology rather than against it. Most of what follows in this lesson is about that.`,
            `One important note. The biology is real but it interacts with environment. Screens at night make the delay worse by suppressing melatonin and providing stimulation. Heavy caffeine after noon makes falling asleep harder. Late evening exercise can delay sleep onset. The biology sets a baseline; behaviors can make it work better or worse.`,
          ],
          image: `/voyager-assets/life-wellness/l02-s2-adolescent.webp`,
          imageCaption: `Adolescent sleep biology: circadian phase delay (melatonin shifts 2 hours later), 8-10 hour sleep need, increased vulnerability to deprivation. Real biological pattern, not behavior.`,
          vocab: [
            {
              word: `adolescent circadian phase delay`,
              definition: `Biological shift during puberty where the internal clock moves later. Melatonin release starts about 2 hours later than in children or adults. Typical adolescent biology wants sleep around 11pm-1am and wake around 8-10am. Not laziness or screen-induced; documented across cultures and contexts including pre-electronic settings. Research from Mary Carskadon at Brown and others has established this consistently. Total sleep need stays high (8-10 hours) despite the timing shift. Foundation for sleep recommendations for this age group.`,
              audioPrompt: `Adolescent circadian phase delay is a biological shift during puberty where the internal clock moves later, {name}. Melatonin, the hormone that signals time to sleep, starts releasing about two hours later in adolescents than in children or adults. A typical adolescent body wants to fall asleep around 11pm to 1am and wake around 8 to 10am. This isn't laziness, isn't screen-induced, isn't a behavior problem to be solved with discipline. It's biology. Research by Mary Carskadon at Brown University and others has documented the pattern consistently across decades. Even adolescents in remote villages with no electronics show the same pattern. Total sleep need stays high at 8 to 10 hours per night according to American Academy of Sleep Medicine guidelines. Most teens need closer to 9 hours. So the biological setup is: want to sleep 11pm to 8am or so, need 9 hours. School starting at 7:30 or 8am creates biological mismatch. The CDC and American Academy of Pediatrics have both called for later school start times based on this evidence; some districts have changed, most haven't.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Actually Helps (And What Doesn't)`,
          paragraphs: [
            `Sleep research has identified specific behaviors that reliably improve sleep and specific behaviors that reliably worsen it. The patterns are well-established across many studies.`,
            `What helps consistently. Consistent sleep and wake times, even on weekends (within an hour or two). Cool, dark, quiet sleeping environment. Avoiding bright light (especially blue light) for 60-90 minutes before bed. Cutting caffeine after early afternoon (caffeine has a 5-7 hour half-life, so caffeine at 3pm is still meaningfully active at 10pm). Daily exposure to bright outdoor light in the morning (anchors circadian timing). Regular physical activity (but not within 2-3 hours of bedtime). Letting yourself wind down for 30-60 minutes before bed without intense stimulation.`,
            `What disrupts sleep. Screens in the hour before bed (both blue light suppressing melatonin and stimulating content keeping the brain activated). Phone in the bedroom even when "not using it" (notifications, the possibility of checking, light leak). Alcohol (suppresses REM sleep dramatically). Late heavy meals. Evening caffeine. Inconsistent schedules (especially weekend "social jet lag"). High room temperature. Sleeping with light sources visible.`,
            `What doesn't reliably help, despite marketing. Sleep tracker apps that score your sleep can produce anxiety about sleep that worsens it (sometimes called "orthosomnia"). Most supplements and "sleep gummies" have weak evidence; melatonin has some evidence for shifting timing but not for general sleep improvement and is widely overdosed. Sleep teas, weighted blankets, and many wellness products have minimal research support; some help some people through placebo effects rather than specific mechanisms. The wellness industry's sleep section is mostly selling things that don't help.`,
            `What about naps. Short naps (15-25 minutes) can boost alertness without disrupting nighttime sleep. Long naps (60-90 minutes) can be restorative but may interfere with night sleep if too late in the day. Naps later than mid-afternoon usually backfire. Adolescents often need short naps because they're chronically underslept; the underlying problem is the night sleep, not the lack of napping.`,
            `One critical pattern: catch-up sleep on weekends doesn't fully repair weekday sleep loss. Some research (Foley et al, others) has examined "weekend recovery sleep" and found partial benefits, but cognitive, metabolic, and mood effects of weekday sleep loss aren't fully reversed by weekend extra sleep. The implication: chronic insufficient sleep across years compounds. Building sustainable sleep practices matters more than trying to repair after the fact.`,
          ],
          image: `/voyager-assets/life-wellness/l02-s3-helps.webp`,
          imageCaption: `What helps: consistency, cool dark room, bright morning light, cutting late caffeine. What doesn't: most sleep supplements and gadgets. Catch-up sleep doesn't fully repair losses.`,
          vocab: [
            {
              word: `sleep hygiene (evidence-based)`,
              definition: `Set of behaviors that reliably improve sleep based on research evidence. Includes consistent sleep/wake times, cool dark quiet environment, avoiding bright light 60-90 min before bed, cutting caffeine after early afternoon, morning bright outdoor light, regular physical activity (not within 2-3 hours of bed), wind-down period. Distinct from "sleep wellness products" (sleep tracker apps, most supplements, sleep gummies, sleep teas, weighted blankets) which have weak research support.`,
              audioPrompt: `Sleep hygiene refers to the set of behaviors that reliably improve sleep based on research evidence, {name}. The well-established practices include consistent sleep and wake times even on weekends within an hour or two; cool, dark, quiet sleeping environment; avoiding bright light especially blue light for 60 to 90 minutes before bed; cutting caffeine after early afternoon because caffeine has a 5 to 7 hour half-life; daily exposure to bright outdoor light in the morning to anchor circadian timing; regular physical activity but not within 2 to 3 hours of bedtime; letting yourself wind down for 30 to 60 minutes before bed without intense stimulation. Distinct from "sleep wellness products" which have much weaker research support. Sleep tracker apps can produce anxiety about sleep that worsens it. Most supplements and sleep gummies have weak evidence. Sleep teas, weighted blankets, and many wellness products have minimal research support. The wellness industry's sleep section is mostly selling things that don't help; the practices that actually help mostly don't require purchases.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Phones, Screens, And Sleep`,
          paragraphs: [
            `One specific topic deserves its own section because the effect is large and the situation is widespread: phones, screens, and adolescent sleep.`,
            `Two distinct mechanisms by which screens harm sleep. First: light exposure. Blue-wavelength light suppresses melatonin production, delaying sleep onset. Smartphones, tablets, and laptops emit substantial blue light. "Night mode" filters help somewhat but don't eliminate the effect. Second: content stimulation. The content itself (social media, games, videos, messaging) activates the brain: interesting, emotional, novel, sometimes anxiety-inducing. Even when light is filtered, the stimulating content keeps the brain too activated to transition to sleep readily.`,
            `Research on adolescent screen use and sleep is extensive. Multiple meta-analyses across thousands of adolescents find consistent associations between bedtime screen use and worse sleep on multiple measures: longer time to fall asleep, shorter total sleep, more night wakings, worse subjective sleep quality, daytime fatigue. The associations are robust across cultures and time periods.`,
            `One particularly important finding: phone in the bedroom matters even if you don't actively use it during the night. The notification possibility keeps the brain in a partial alertness state. The light leak from notifications interrupts sleep cycles. The temptation to check during night awakenings (which everyone has; most people wake briefly several times per night) often turns into 15-45 minute scrolling episodes. Removing the phone from the bedroom (actually putting it in a different room) is one of the highest-impact sleep interventions for adolescents.`,
            `What works specifically. Phone outside the bedroom, charging in another room, with old-school alarm clock for waking. Screens off 60-90 minutes before intended sleep time. If screens must be used in the evening, "night mode" reduces blue light somewhat (helpful but not sufficient alone). Notifications off after a specific time. Apps that block stimulating content in evening hours can help if used; they're easy to override so they only work if you actually commit to them.`,
            `What doesn't work but gets sold as solving the problem. Blue-light-blocking glasses worn during screen use (some research support but limited). Apps that "track your sleep" via phone in the bedroom (defeats the purpose: you've kept the phone in the bedroom). Most "screen detox" products. The genuine solution is structural: don't have the phone in the room and don't use screens in the wind-down period.`,
          ],
          image: `/voyager-assets/life-wellness/l02-s4-screens.webp`,
          imageCaption: `Phones harm sleep two ways: blue light suppresses melatonin + stimulating content keeps brain activated. Phone outside bedroom is one of the highest-impact interventions.`,
          vocab: [
            {
              word: `phone-in-bedroom problem (adolescent sleep)`,
              definition: `Pattern where having a phone in the bedroom at night harms sleep even when not actively used. Multiple mechanisms: notification possibility keeps brain in partial alertness; light leak from notifications interrupts cycles; temptation to check during night awakenings often turns into 15-45 minute scrolling. Research finds consistent association with worse sleep on multiple measures. Removing the phone from the bedroom (actually putting it in another room) is one of the highest-impact sleep interventions for adolescents.`,
              audioPrompt: `The phone-in-bedroom problem is a research-documented pattern where having a phone in the bedroom at night harms sleep even when not actively used, {name}. Multiple mechanisms operate. The notification possibility keeps the brain in a partial alertness state because the brain knows the phone might activate at any moment. The light leak from notifications interrupts sleep cycles even when you don't fully wake. The temptation to check during night awakenings (which everyone has, because most people wake briefly several times per night without remembering) often turns into 15 to 45 minute scrolling episodes. The phone effectively becomes a sleep disruptor across the whole night rather than only when actively used. Research across thousands of adolescents finds consistent associations with worse sleep on multiple measures: longer time to fall asleep, shorter total sleep, more night wakings, worse subjective sleep quality. Removing the phone from the bedroom (actually putting it in a different room with an old-school alarm clock for waking) is one of the highest-impact sleep interventions for adolescents. The interventions that work in this domain mostly don't require purchases; they require structural changes to where the phone lives at night.`,
            },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `In the case study that follows, three people face different sleep situations. Each has an intuitive approach and a research-informed approach using the principles from sections 2-4.`,
            `One framing as you work through the cases. Sleep problems often have multiple causes, and the right intervention depends on what's actually driving the issue. Insomnia onset (can't fall asleep) usually has different causes than maintenance insomnia (can't stay asleep) which has different causes than early morning waking. Identifying the specific pattern helps target the intervention.`,
            `Another framing. The wellness industry sells many sleep "solutions" that don't address what's actually causing most sleep problems. Most adolescent sleep problems are structural: phone in bedroom, inconsistent schedule, late screens, caffeine timing. They are not deficiency problems that supplements fix. The research-informed approach focuses on the structural issues.`,
            `One important note. If sleep problems persist across weeks despite addressing structural issues, that warrants a conversation with a doctor. Sleep disorders (sleep apnea, restless leg syndrome, narcolepsy) are real medical conditions that require diagnosis and treatment. Mental health issues like depression and anxiety often present with sleep problems first. Distinguishing structural sleep problems (which you can fix yourself) from medical sleep problems (which need professional help) matters; we cover when to escalate in the cases.`,
            `One last framing. You're 12. The sleep habits you build now compound across decades. Most adults with chronic sleep problems trace them back to patterns established in adolescence. Building structural sleep practices at 12 is one of the highest-leverage wellness investments available to you.`,
          ],
          image: `/voyager-assets/life-wellness/l02-s5-before.webp`,
          imageCaption: `Three sleep cases. Identify the pattern, target the intervention. Distinguish structural from medical sleep problems.`,
          vocab: [
            {
              word: `structural vs medical sleep problems`,
              definition: `Important distinction. Structural sleep problems come from behaviors and environment (phone in bedroom, inconsistent schedule, late caffeine, screens before bed); fix the structure, problem usually resolves. Medical sleep problems involve underlying conditions (sleep apnea, restless leg syndrome, narcolepsy, sleep disorders associated with depression/anxiety); require professional diagnosis and treatment. Many sleep problems are structural and self-correctable; persistent problems despite structural fixes warrant medical evaluation.`,
              audioPrompt: `Structural versus medical sleep problems is an important distinction in adolescent sleep, {name}. Structural sleep problems come from behaviors and environment. Phone in the bedroom, inconsistent schedule, late caffeine, screens before bed, irregular timing on weekends, room too warm, room too bright. Fix the structure, the problem usually resolves. Most adolescent sleep problems are structural. Medical sleep problems involve underlying conditions that require professional diagnosis and treatment. Sleep apnea where breathing repeatedly stops during sleep. Restless leg syndrome where uncomfortable sensations disrupt sleep onset. Narcolepsy where the sleep-wake regulation system itself is dysfunctional. Sleep disorders associated with depression, anxiety, or other mental health conditions. These don't resolve from sleep hygiene alone; they need professional evaluation. The practical implication: if you're having sleep problems, first address structural issues (phone, schedule, environment). If problems persist for weeks despite structural fixes, talk to a doctor or a parent about getting medical evaluation. Most problems are in the first category and self-correctable; some are in the second and warrant professional help.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l02-case-study`,
          type: `case-study`,
          headline: `Three Sleep Situations`,
          intro: `{name}, three people face different sleep situations. For each, identify what would actually serve them better based on real sleep science.`,
          cases: [
            {
              id: `case-1`,
              title: `Can't Fall Asleep Until Midnight`,
              context: `You've been struggling to fall asleep until around midnight, but you have to be up at 6:30 for school. You're exhausted in morning classes. Your parents say "just go to bed earlier." You try, but you lie in bed not sleeping until late. Your friend says "take melatonin gummies, that's what I do." What should you actually do?`,
              question: `What's the most useful approach to this sleep problem?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Take melatonin gummies every night to make yourself fall asleep earlier. Don't change anything else about your routine or environment.`,
                  outcome: `This addresses the symptom while leaving the underlying structure intact. Melatonin has some evidence for shifting circadian timing, but it's widely overdosed in the US (typical doses 5-10mg vs research-supported doses of 0.3-0.5mg for timing shift) and isn't a replacement for addressing structural issues. If you're using screens until midnight, drinking caffeine after lunch, and have your phone in your room, melatonin won't fix the underlying problem; you'll just be drugged toward sleep while the structure that's keeping you up continues. The melatonin industry has grown dramatically without strong evidence that it solves most sleep problems people use it for.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Address the structural issues first. Move your phone out of your bedroom completely (charge it in the kitchen). Stop screens 60-90 minutes before intended sleep time (so 9pm if you want to sleep by 10:30). Get bright outdoor light in the first hour after waking each morning (anchors circadian timing). Cut caffeine after noon (5-7 hour half-life means 3pm coffee is still active at 10pm). Keep room cool (around 65-68°F) and dark (blackout curtains if possible). Consistent wake time even on weekends within an hour. Try these for 2-3 weeks before considering anything else. If problems persist despite all of these being in place, talk to a parent about seeing a doctor. Some sleep problems are medical (sleep apnea, anxiety/depression presenting as sleep issues) and need professional evaluation.`,
                  outcome: `This is the research-informed approach. The structural interventions address the actual causes of most adolescent sleep problems. The phone outside the bedroom is one of the highest-impact interventions; the morning bright light anchors circadian timing (critical for adolescents whose biology is already shifted late); cutting caffeine after noon respects the actual pharmacokinetics. Two to three weeks gives enough time for the new pattern to establish. The escalation path (talk to doctor if persistent) ensures medical issues aren't missed. This approach addresses 80%+ of adolescent sleep problems without supplements or products.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Force yourself to be in bed at 9pm. Lie there awake for hours. Suffer through it until your body adjusts.`,
                  outcome: `This makes things worse, not better. Lying in bed awake for hours teaches your brain to associate bed with frustration and wakefulness rather than sleep, a real phenomenon studied in sleep research called "conditioned arousal." If you can't fall asleep within 20-30 minutes, sleep medicine actually recommends getting out of bed, doing something boring in dim light, and returning when sleepy. Forcing yourself to be in bed earlier without addressing the structural issues that are preventing sleep often worsens the problem over time.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates how to handle insomnia onset (can't fall asleep). Most adolescent insomnia onset is structural: phone, screens, caffeine, light timing. It is not a deficiency that supplements fix. Address the structure first; supplements and "sleep wellness" products mostly don't address what's actually causing the problem. Escalate to medical professional if structural fixes don't resolve the issue within 2-3 weeks. The wellness industry sells solutions that mostly target the wrong problem.`,
            },
            {
              id: `case-2`,
              title: `Social Jet Lag On Weekends`,
              context: `During the week, you sleep 11pm to 6:30am (about 7.5 hours, which already isn't enough). On weekends, you stay up until 1-2am with friends and sleep until 10-11am, getting 9-10 hours. Sunday night you can't fall asleep until late, and Monday morning is miserable. Your sister says "weekend sleep is when I catch up on the week." What should you actually do?`,
              question: `What's the most useful approach?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Keep doing what you're doing. Sleeping in on weekends "catches up" on the weekday deficit and you need it.`,
                  outcome: `This contains a common misconception. Catch-up sleep on weekends partially helps but doesn't fully repair weekday sleep loss; cognitive, metabolic, and mood effects of chronic weekday sleep deprivation aren't fully reversed by weekend extra sleep. More importantly: the dramatic weekend shift produces "social jet lag," a biological state similar to traveling across time zones, with the misery and disruption that comes with it. The Sunday-night insomnia and Monday-morning struggle aren't random; they're predictable consequences of the weekend shift. The pattern compounds across years; chronic social jet lag is associated with worse mood, worse cognitive performance, and worse metabolic health over time.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Address both sides. First: increase weekday sleep. Going to bed at 10pm instead of 11pm gets you to 8.5 hours, closer to what adolescents need. Identify what's keeping you up (screens? homework timing? phone in bedroom?) and fix the structure. Second: limit weekend shift. Don't go to bed more than 1-2 hours later than weekday bedtime; don't sleep more than 1-2 hours later than weekday wake. Weekend variation within those limits is fine; bigger variation produces social jet lag. Sunday wake time matters most for Monday: getting Sunday morning bright light at a reasonable time anchors Monday. Two weeks of this usually shifts the pattern significantly.`,
                  outcome: `This is the research-informed approach. The weekday side gets enough sleep through structural fixes; the weekend side limits the variation that produces social jet lag. Within-week consistency matters more than people realize; the brain doesn't get to choose what schedule to adopt, but it works much better when the schedule is consistent. Sunday morning is the most important morning of the week for next-week circadian alignment because it sets up the wake-time consistency that the rest of the week needs.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Just sleep more on Sundays so you can't tell you're tired Monday morning. Take a long Sunday afternoon nap.`,
                  outcome: `Long Sunday afternoon naps usually make Sunday-night sleep harder, which then makes Monday worse, not better. Late-day naps interfere with night sleep onset because they reduce homeostatic sleep pressure. Trying to repair sleep debt with naps usually creates new sleep problems rather than fixing the original ones. The pattern of "Sunday nap → can't sleep Sunday night → exhausted Monday → nap again" can become its own cycle that perpetuates the problem.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates social jet lag, the biological pattern produced by large weekend-to-weekday schedule shifts. Weekend catch-up sleep partially helps but doesn't fully repair weekday deficit AND produces its own problems through the schedule variation. The research-informed move is fixing both sides: more sleep during the week (through structural changes) AND limiting weekend variation. Within-week consistency matters more than people realize. Sunday morning sets up the whole next week.`,
            },
            {
              id: `case-3`,
              title: `Phone In Bed Habit`,
              context: `You've been keeping your phone in bed, scrolling for an hour or two before sleep most nights. You wake up tired and notice you're more anxious than you used to be. Your friend says "everyone does this, it's fine." Your mom says "just have more willpower." What should you actually do?`,
              question: `What's the most useful approach?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Use willpower to stop scrolling after a certain time, but keep the phone in your room because you use it as an alarm.`,
                  outcome: `Pure willpower against a phone in the bedroom usually fails. The notification possibility keeps the brain in partial alertness even when you're not actively scrolling. The light leak from notifications interrupts sleep cycles. The temptation to check during the inevitable brief night awakenings often turns into 15-45 minute scrolling episodes. "Willpower" against a phone in the room is a battle most adolescents and adults lose, not because of weak character but because the phone is designed by people optimizing for engagement against your sleep. The structural solution is removing the phone from the room, not trying to resist it more.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Remove the phone from your bedroom entirely. Charge it in the kitchen or another room. Buy an old-school alarm clock (cheap, available anywhere) for waking. Set a screen-off time 60-90 minutes before intended sleep; do the wind-down period with the phone already outside the room. The first 1-2 weeks will be uncomfortable. The brain is adjusted to constant input and will be restless without it. Push through; the discomfort resolves as you re-learn how to be without constant stimulation in the evening. Notice changes in sleep, mood, and anxiety over the 2-3 week period. Many adolescents report dramatic improvements; this is one of the highest-leverage interventions available.`,
                  outcome: `This is the research-informed approach and one of the highest-impact wellness interventions available to adolescents. The structural change (phone outside bedroom) addresses both mechanisms by which the phone harms sleep (light/notifications + temptation/scrolling). The wind-down period without screens lets the brain transition toward sleep. The temporary discomfort is real but resolves; what feels like "needing" the phone is the brain's adjustment to constant input, not an actual need. Research consistently finds this intervention produces measurable sleep improvements within 2-3 weeks. Many adolescents also report mental health benefits (less anxiety, better mood) that compound over months.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Try a "screen time" app that limits social media use after 9pm. Keep everything else the same.`,
                  outcome: `Screen time limiting apps help somewhat but don't solve the structural problem. You can override them; they don't address phone in bedroom; they don't address the wake-time scrolling temptation. Half-measures that keep the phone in the room while trying to limit usage usually produce mixed results because they're fighting against the structural reality that the phone is right there. Apps to limit screen use are useful in specific contexts but aren't a substitute for the structural intervention of removing the phone from the bedroom.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates the phone-in-bedroom problem. The structural intervention (phone outside the room) addresses multiple mechanisms that pure willpower or screen-limiting apps can't. The temporary discomfort during the adjustment is real but resolves. Research finds this is one of the highest-leverage adolescent wellness interventions available. The pattern matters across decades: building the practice of phone-outside-bedroom at 12 protects sleep across the rest of your life, while the alternative pattern is much harder to break later.`,
            },
          ],
          reflectionPrompt: `All three cases share a pattern: structural changes to the environment beat willpower, supplements, and gadgets. Which case felt most personally relevant?`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is sleep cycle architecture?`,
              options: [
                `Just sleep`,
                `Structured sequence of sleep phases: N1 (light transitional), N2 (light), N3 (deep slow-wave: physical repair, immune work, brain waste clearance), and REM (vivid dreaming, emotional processing, memory consolidation); each cycle ~90 minutes, 4-6 cycles per night; cutting sleep short disproportionately reduces REM because it concentrates in later cycles`,
                `Building plans`,
                `Random structure`,
              ],
              correctIndex: 1,
              explanation: `Each phase does specific work that can't be skipped without losing that work. If you sleep 6 hours instead of 8, you lose most of your REM sleep but keep most of your deep sleep. This affects different sleep functions differently.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "adolescent circadian phase delay"?`,
              options: [
                `Random thing`,
                `Biological shift during puberty where internal clock moves later; melatonin release starts ~2 hours later than in children or adults; typical adolescent biology wants sleep ~11pm-1am and wake ~8-10am; not laziness or screen-induced; research from Mary Carskadon and others has documented across decades and cultures; sleep need stays high (8-10 hours)`,
                `Late lazy`,
                `Just teen behavior`,
              ],
              correctIndex: 1,
              explanation: `Adolescents in remote villages with no electronics show the same pattern. School starting at 7:30-8am creates biological mismatch. CDC and American Academy of Pediatrics have both called for later school start times based on this evidence.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "evidence-based sleep hygiene"?`,
              options: [
                `Cleaning`,
                `Set of behaviors that reliably improve sleep based on research: consistent sleep/wake times, cool dark quiet environment, avoiding bright light 60-90 min before bed, cutting caffeine after early afternoon, morning bright outdoor light, regular physical activity (not within 2-3 hours of bed), wind-down period; distinct from "sleep wellness products" with weak evidence`,
                `Random rules`,
                `Just discipline`,
              ],
              correctIndex: 1,
              explanation: `The interventions that work mostly don't require purchases. The wellness industry's sleep section is mostly selling things that don't help: sleep tracker apps can produce "orthosomnia" (sleep anxiety), most supplements have weak evidence, sleep teas and weighted blankets have minimal research support.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the "phone-in-bedroom problem"?`,
              options: [
                `Just clutter`,
                `Pattern where having a phone in the bedroom at night harms sleep even when not actively used: notification possibility keeps brain in partial alertness; light leak interrupts cycles; temptation to check during night awakenings often turns into 15-45 min scrolling; removing phone from bedroom (charging in another room) is one of the highest-impact adolescent sleep interventions`,
                `Random concept`,
                `Tech issue`,
              ],
              correctIndex: 1,
              explanation: `The phone effectively becomes a sleep disruptor across the whole night rather than only when actively used. Research across thousands of adolescents finds consistent associations with worse sleep on multiple measures. Structural change (phone in another room) beats willpower against a phone in the room.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the caffeine half-life imply for sleep?`,
              options: [
                `Not much`,
                `Caffeine has a 5-7 hour half-life, meaning half the caffeine is still in your system 5-7 hours after consumption; caffeine at 3pm is still meaningfully active at 10pm; cutting caffeine after early afternoon is research-supported sleep hygiene; the pharmacokinetics, not personal "tolerance," determine the effect on sleep`,
                `Random fact`,
                `Coffee bad`,
              ],
              correctIndex: 1,
              explanation: `Many people feel they can "drink coffee at 4pm and still sleep" because they fall asleep, but research shows sleep quality (particularly deep sleep) is reduced even when sleep onset isn't dramatically delayed. The biology operates regardless of how you feel about it.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the issue with "social jet lag"?`,
              options: [
                `Just tired`,
                `Biological pattern produced by large weekend-to-weekday schedule shifts; similar to traveling across time zones; weekend catch-up sleep partially helps but doesn't fully repair weekday deficit AND produces its own problems through schedule variation; chronic social jet lag is associated with worse mood, cognitive performance, and metabolic health over time`,
                `Travel issue`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `Within-week consistency matters more than people realize. Sunday-night insomnia and Monday-morning struggle aren't random; they're predictable consequences of the weekend shift. The research-informed move is fixing both sides: more weekday sleep AND limited weekend variation.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the right response if you can't fall asleep within 20-30 minutes?`,
              options: [
                `Keep lying there`,
                `Sleep medicine recommends getting out of bed, doing something boring in dim light, and returning when sleepy; lying in bed awake teaches the brain to associate bed with frustration and wakefulness rather than sleep (called "conditioned arousal"); forcing yourself to stay in bed often worsens the problem over time`,
                `Take pills`,
                `Random advice`,
              ],
              correctIndex: 1,
              explanation: `Conditioned arousal is a real phenomenon studied in sleep research. Bed should become associated with sleep, not with frustration. Getting up and returning when sleepy maintains that association.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `When does a sleep problem warrant medical evaluation?`,
              options: [
                `Never`,
                `If sleep problems persist across 2-3 weeks despite addressing structural issues (phone out of bedroom, consistent schedule, no late caffeine, screens off before bed); sleep disorders like sleep apnea, restless leg syndrome, narcolepsy are real medical conditions requiring diagnosis and treatment; mental health issues like depression and anxiety often present with sleep problems first`,
                `Always`,
                `Random condition`,
              ],
              correctIndex: 1,
              explanation: `Distinguishing structural sleep problems (which you can fix yourself) from medical sleep problems (which need professional help) matters. Most adolescent sleep problems are structural and self-correctable; some are medical and warrant escalation.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Catch-up sleep on weekends fully repairs weekday sleep deficit.`,
              correctAnswer: false,
              explanation: `False. Catch-up sleep partially helps but doesn't fully repair weekday sleep loss. Cognitive, metabolic, and mood effects of chronic weekday sleep deprivation aren't fully reversed by weekend extra sleep. The dramatic weekend shift also produces social jet lag. Building sustainable weekday sleep practices matters more than trying to repair after the fact.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm not sleeping well so I'm going to start taking melatonin every night." Based on this lesson, what should you point out?`,
              options: [
                `"Sure, try it"`,
                `"Melatonin has some evidence for shifting circadian timing but is widely overdosed (typical US doses 5-10mg vs research-supported 0.3-0.5mg for timing shift) and isn't a replacement for addressing structural causes. Most adolescent sleep problems are structural: phone in bedroom, screens before bed, caffeine timing, inconsistent schedule, no morning bright light. Address those first. If your phone is in your bedroom, move it out (charge it in another room, use an old-school alarm clock). Cut caffeine after noon. Get bright outdoor light in the first hour after waking. Stop screens 60-90 minutes before intended sleep. Try those for 2-3 weeks before considering supplements. If problems persist despite all the structural fixes being in place, talk to a doctor; sleep apnea and other medical issues are real and need proper diagnosis. The wellness industry sells supplements for problems that are mostly structural; targeting the actual cause works better than targeting the symptom."`,
                `"Don't take it"`,
                `"Take more"`,
              ],
              correctIndex: 1,
              explanation: `Real applied sleep literacy. Don't dismiss the friend's concern; redirect from supplement-first to structural-first thinking. Name the specific structural interventions and the escalation path (medical evaluation if structural fixes don't resolve). This is the kind of advice that can transform sleep across years.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you know about sleep biology? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: how's your sleep right now? Which structural issues are operating in your situation?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who protects sleep across decades, what does that change about your cognitive performance, mood, and health over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific structural change you could make tonight. What's stopping you? What would it take to actually do it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where the framework doesn't apply well? What about people with genuine medical sleep disorders? Shift workers? People with caregiving responsibilities that disrupt nights?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Try the phone-outside-bedroom intervention for one week. Note the first 2-3 days (uncomfortable) and the later days (often dramatically different). What changes?` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Sleep is the single highest-leverage wellness practice. Two paths.`,
          familyActivity: {
            title: `The Family Sleep Conversation`,
            duration: `45 minutes`,
            description: `Share the framework: sleep architecture, adolescent biology, structural interventions, the phone-in-bedroom problem. Ask family members about their sleep practices. Most adults have sleep problems they've been treating with products rather than structural fixes. The conversation often surfaces opportunities to improve sleep across the whole household. Consider a family "phones charge in the kitchen overnight" practice; many families find it transformative.`,
          },
          projectOption: {
            title: `Read Matthew Walker's "Why We Sleep" or similar, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Matthew Walker's "Why We Sleep" (2017, accessible synthesis of sleep science; note some specific claims have been critiqued but the core architecture and behavior findings hold) or a more recent text like "Sleep Smarter" by Shawn Stevenson. Apply concepts during the reading period. Write 1,500 words on what you learned. Reading real sleep research at 12 produces durable practices most adults never develop.`,
            offerToParent: `Parent: opt your kid into this project. Real sleep literacy at 12 protects against decades of poor sleep and is one of the highest-leverage wellness investments available.`,
          },
          identityQuestion: `If you become someone who protects sleep as one of the highest priorities (sustained across decades), what does that change about cognitive performance, mood, physical health, and life quality across a lifetime?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone whose phone doesn't sleep in the bedroom.`,
            `A person who treats sleep as the highest-priority wellness practice.`,
            `Someone who addresses structural sleep issues before reaching for supplements.`,
          ],
          saveKey: `identity_responses_lw_11_12_2`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. Second Life Wellness lesson done. You now know sleep architecture (N1/N2/N3 + REM, 90-min cycles, what each phase does), adolescent sleep biology (circadian phase delay, why your body wants to sleep late, why school timing is misaligned), evidence-based sleep hygiene (what actually works), the phone-in-bedroom problem and the structural solution, and when to escalate to medical care. Real research from Walker, Carskadon, Nedergaard, AASM, CDC. The single most important wellness lever you have. Next time we go into the body's stress response system. Three positions on what stress actually is. Argument Builder format. Let's go. — Terra`,
          badge: `sleep-literate`,
          badgeName: `Sleep Literate`,
          xpEarned: 75,
          competencies: [
            `Knows sleep architecture (N1/N2/N3, REM, 90-minute cycles, 4-6 per night)`,
            `Articulates adolescent circadian phase delay (Carskadon)`,
            `Applies evidence-based sleep hygiene (consistency, environment, light, caffeine timing)`,
            `Recognizes the phone-in-bedroom problem and the structural solution`,
            `Distinguishes structural from medical sleep problems and knows when to escalate`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: The Stress Response`,
            hook: `What stress actually is in the body. Three positions. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L02 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
