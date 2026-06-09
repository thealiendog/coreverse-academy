// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L12 — Time and Energy Management
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Energy Management, Sustainable Productivity
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: MATCHING GAME (5 principles × 5 applications)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l12-v1";

const LIFEWELLNESS_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-12`,
      title: `Time and Energy Management`,
      duration: 35,
      xpReward: 75,
      badge: `energy-literate`,
      badgeName: `Energy Literate`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, this lesson reframes one of the most common framings most adults absorb: that "time management" is what produces good outcomes. Real research and serious productivity thinkers point in a different direction: energy management beats time management for sustainable performance across decades. The same 24 hours produces dramatically different outcomes depending on your energy state — sleep, recovery, focus blocks, environmental conditions, sustainable patterns. Today we work through 5 research-supported principles and match them to specific applications. The matching game format helps you connect abstract principles to concrete practice. By the end you'll have framework that protects against the burnout and exhaustion patterns most adults absorb during their own adolescence.`,
          headline: `Time and Energy Management`,
          subtitle: `Energy beats time. Five principles, five applications. Matching Game.`,
          visual: `/voyager-assets/life-wellness/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Energy Management Beats Time Management`,
          paragraphs: [
            `The dominant framing for productivity in pop content treats time as the scarce resource: optimize your hours, schedule everything, fit more in. Real research and serious productivity literature increasingly converges on a different view: time is the obvious resource, but energy is the limiting one. The same hour produces dramatically different output depending on your energy state.`,
            `Tony Schwartz and Jim Loehr's book "The Power of Full Engagement" (2003) is one of the foundational popular works developing this framing, drawing on research on elite performance, recovery, and sustainable productivity. Their framework distinguishes four types of energy: physical (body's state), emotional (mood and feeling), mental (focus and cognition), spiritual (meaning and motivation). All four affect performance; depletion in any one reduces what's possible.`,
            `Why time management isn't enough. Time management techniques (scheduling, planning, prioritizing) can help with how you spend time, but they don't address the underlying state that determines what's possible during that time. The same student with the same 2-hour study block produces dramatically different results depending on sleep state, stress level, attention capacity, motivation, environment. Time management treats time as the variable; energy management treats time as a constant and energy as the variable.`,
            `For adolescents specifically. Adolescent biology requires substantial sleep (8-10 hours), substantial recovery, real food, social connection, and physical movement. The conditions most adolescents are in (chronic sleep deprivation, sedentary days, chaotic eating, high stress, fragmented attention) predict exhaustion that no time management technique can address. The intervention is at the energy level, not the schedule level.`,
            `What the research-based picture looks like. Schedule recovery as deliberately as productive work. Recognize that attention and energy aren't unlimited; protect them rather than trying to extend them through caffeine and willpower. Sustainable patterns across years beat heroic patterns that burn out. Boring consistency beats dramatic transformation pushes. The compounding effects of small consistent practices across decades produce results no intensity-based approach can match.`,
            `For 11-12 year olds, this is one of the most generationally important framings. Most adults absorbed time management frameworks ("hustle," "grind," "optimize," "12 productivity hacks") that are largely from late-20th-century productivity culture and that produce documented harms (burnout, mental health decline, broken relationships, exhaustion). Learning energy management as your default framework protects against these patterns.`,
          ],
          image: `/voyager-assets/life-wellness/l12-s1-energy.webp`,
          imageCaption: `Schwartz and Loehr (2003): four energies (physical, emotional, mental, spiritual). Time is constant; energy is variable. Energy management beats time management for sustainable performance.`,
          vocab: [
            {
              word: `energy management framework`,
              definition: `Tony Schwartz and Jim Loehr's "Power of Full Engagement" (2003) and related research: energy is the limiting resource, not time. Four types: physical (body's state), emotional (mood/feeling), mental (focus/cognition), spiritual (meaning/motivation). Same hour produces dramatically different output depending on energy state. Time management treats time as variable; energy management treats time as constant and energy as variable. Schedule recovery as deliberately as productive work. Sustainable patterns across years beat heroic patterns that burn out.`,
              audioPrompt: `Energy management framework reframes one of the most common framings most adults absorb, {name}. The dominant framing for productivity in pop content treats time as the scarce resource: optimize your hours, schedule everything, fit more in. Real research and serious productivity literature increasingly converges on a different view: time is the obvious resource, but energy is the limiting one. Tony Schwartz and Jim Loehr's book "The Power of Full Engagement" from 2003 is one of the foundational popular works developing this framing, drawing on research on elite performance, recovery, and sustainable productivity. Their framework distinguishes four types of energy. Physical energy is the body's state. Emotional energy is mood and feeling. Mental energy is focus and cognition. Spiritual energy is meaning and motivation. All four affect performance; depletion in any one reduces what's possible. Time management techniques can help with how you spend time, but they don't address the underlying state that determines what's possible during that time. The same student with the same 2-hour study block produces dramatically different results depending on sleep state, stress level, attention capacity, motivation, environment.`,
            },
            {
              word: `four energies`,
              definition: `Tony Schwartz and Jim Loehr's framework distinguishing four types of energy that together determine performance capacity: physical (the body's state), emotional (mood and feeling), mental (focus and cognition), and spiritual (meaning and motivation). Depletion in any one type reduces what is possible, regardless of available time.`,
              audioPrompt: `The four energies framework distinguishes the types of energy that together determine performance capacity, {name}. Tony Schwartz and Jim Loehr developed this framework in their 2003 book "The Power of Full Engagement," drawing on research on elite performance, recovery, and sustainable productivity. Physical energy is the body's state: sleep, nutrition, movement, recovery. When physical energy is depleted — through chronic sleep deprivation, sedentary days, chaotic eating — everything else suffers. Emotional energy is mood and feeling: stress, anxiety, connection, motivation. When emotional energy is depleted through chronic stress, relationship difficulty, or unprocessed difficulty, cognitive and physical capacity are reduced. Mental energy is focus and cognition: attention, working memory, sustained thinking. When mental energy is depleted through fragmented attention, task switching, or overloading working memory, the quality of cognitive work declines. Spiritual energy is meaning and motivation: why the work matters, what it connects to. When work feels meaningless or disconnected from anything that matters, performance suffers even when the other three energies are adequate. All four affect performance; depletion in any one reduces what's possible. This is why the same hour produces dramatically different output depending on state.`,
            },
            {
              word: `sustainable performance`,
              definition: `The approach to productivity that treats human beings as needing their biology, attention, and motivation supported rather than overridden across the long term. The lesson frames sustainable performance as the research-based alternative to productivity culture's intensity-based approach, which produces documented burnout.`,
              audioPrompt: `Sustainable performance is the approach to productivity that treats human beings as needing biology, attention, and motivation supported rather than overridden, {name}. The lesson frames this as the research-based alternative to productivity culture's intensity-based approach. The pop-content framing treats productivity as something to optimize like a video game: more output per hour, more hours per day, more accomplishment per year. The research-based picture treats productivity as something to sustain across a lifetime, with the goal being meaningful work and life over decades rather than maximum output this year. Adolescent biology specifically requires substantial sleep (eight to ten hours), substantial recovery, real food, social connection, and physical movement. The conditions most adolescents are in — chronic sleep deprivation, sedentary days, chaotic eating, high stress, fragmented attention — predict exhaustion that no time management technique can address. The intervention is at the energy level, not the schedule level. Sustainable patterns across years beat heroic patterns that burn out. Boring consistency beats dramatic transformation pushes. The compounding effects of small consistent practices across decades produce results no intensity-based approach can match. Building this framework at twelve protects against patterns that take adults years to undo.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Five Principles`,
          paragraphs: [
            `For the matching game that follows, you'll work with 5 principles drawn from research and serious productivity literature. Here's the brief explanation of each.`,
            `Principle 1: Energy management beats time management. As discussed in section 1. Track what energizes vs depletes you; structure your week around energy patterns, not just hours; recognize that the same time produces different output depending on state. Tony Schwartz, Jim Loehr, broader sustainable performance research.`,
            `Principle 2: Recovery is part of the work, not a reward for it. Anders Ericsson's deliberate practice research established that elite performers don't just practice more; they practice intensely AND recover deliberately. The same applies to most cognitive and physical work. Scheduling rest, downtime, unstructured time, and sleep deliberately produces better outcomes than treating recovery as something you get after you've earned it. Sleep research (covered in L02), exercise research on recovery, ultradian rhythm research (90-minute productive cycles followed by needed breaks).`,
            `Principle 3: Environmental design beats willpower. Research on habits (Wood, covered in L07), attention (Newport, Harris, Ward et al, covered in L08), and behavior change consistently shows that environment shapes behavior more reliably than willpower. Remove friction from desired behaviors (phone in another room, books visible, healthy food accessible, focus tools available). Add friction to undesired behaviors (delete distracting apps, unfollow accounts that don't serve you, use blockers during deep work). Environmental design is what consistent performers actually use.`,
            `Principle 4: Deep work requires sustained blocks. Cal Newport's "Deep Work" (2016) synthesizes research showing that sustained focus periods produce qualitatively different output than fragmented attention. Multitasking research (covered in L08) shows what feels like multitasking is rapid task-switching with real costs. Practical implication: protect 1-3 hour blocks of uninterrupted time for cognitively demanding work. Recognize that fragmented attention can't substitute for sustained attention even with equal total time.`,
            `Principle 5: Compounding beats intensity. Across many domains (learning, fitness, relationships, financial wellbeing, skill development), small consistent practices across years dramatically outperform dramatic short-term efforts. The "1% better every day" math is interesting (compounds to ~37x in a year) but doesn't literally work in any specific domain; what does work is sustainable practice across long timeframes. Building patterns you can maintain for decades produces results that intensity-based approaches can't match. The implication: prefer the sustainable over the dramatic; prefer boring consistency over transformation pushes; trust that small consistent practice compounds across years even when results aren't visible in the short term.`,
          ],
          image: `/voyager-assets/life-wellness/l12-s2-principles.webp`,
          imageCaption: `Five principles: energy > time, recovery is part of work, environment > willpower, deep work needs blocks, compounding > intensity. Research-supported. Applicable across decades.`,
          vocab: [
            {
              word: `management principles`,
              definition: `(1) Energy management beats time management: track energizing vs depleting activities; structure around energy patterns. (2) Recovery is part of work: schedule rest deliberately; not a reward but a component. (3) Environmental design beats willpower: remove friction from desired behaviors, add friction to undesired. (4) Deep work requires sustained blocks: protect 1-3 hour blocks; fragmented attention can't substitute for sustained. (5) Compounding beats intensity: small consistent practices across years dramatically outperform short-term efforts; sustainable over dramatic.`,
              audioPrompt: `Five energy management principles drawn from research and serious productivity literature, {name}. Principle 1: energy management beats time management. Track what energizes versus depletes you; structure your week around energy patterns, not just hours; recognize that the same time produces different output depending on state. Principle 2: recovery is part of the work, not a reward for it. Anders Ericsson's deliberate practice research established that elite performers don't just practice more; they practice intensely AND recover deliberately. Principle 3: environmental design beats willpower. Research on habits, attention, and behavior change consistently shows that environment shapes behavior more reliably than willpower. Principle 4: deep work requires sustained blocks. Cal Newport's "Deep Work" 2016 synthesizes research showing that sustained focus periods produce qualitatively different output than fragmented attention. Principle 5: compounding beats intensity. Across many domains, small consistent practices across years dramatically outperform dramatic short-term efforts; sustainable patterns produce results that intensity-based approaches can't match.`,
            },
            {
              word: `deliberate practice`,
              definition: `Anders Ericsson's research-supported framework for skill development through intensive, focused practice in areas just outside current competence, combined with deliberate recovery. Ericsson's research established that elite performers don't just practice more; they practice intensely and recover deliberately — distinguishing deliberate practice from mere repetition.`,
              audioPrompt: `Deliberate practice is Anders Ericsson's research-supported framework for skill development, {name}. Ericsson's research established that elite performers don't just practice more; they practice intensely in areas just outside current competence — focused on specific weaknesses, with immediate feedback — and they recover deliberately. The recovery isn't optional; it's part of what makes the intensive practice possible and sustainable. This research grounds the second of the five principles: recovery is part of the work, not a reward for it. Deliberate practice without recovery produces diminishing returns and ultimately breakdown. The same principle applies beyond elite performance to most cognitive and physical work. A student who studies intensely for ninety minutes and then recovers deliberately will typically produce better outcomes over a week than a student who grinds for twelve hours without recovery, even if the second student spends more total hours studying. The quality and sustainability of the work depend on the recovery as much as on the intensity. The lesson frames this in opposition to productivity culture's implicit framing that rest is laziness or a reward for sufficient productivity — a framing that produces the burnout patterns documented across the past fifteen years.`,
            },
            {
              word: `compounding practice`,
              definition: `The principle that small consistent practices across years dramatically outperform dramatic short-term efforts in most domains. The compounding effect of sustainable habits across decades produces results that intensity-based approaches cannot match. The lesson identifies preferring sustainable over dramatic as one of the five core energy management principles.`,
              audioPrompt: `Compounding practice is the principle that small consistent practices across years dramatically outperform dramatic short-term efforts in most domains, {name}. The lesson applies this across learning, fitness, relationships, financial wellbeing, and skill development. Building patterns you can maintain for decades produces results that intensity-based approaches cannot match. The "one percent better every day" math is interesting but doesn't literally work in any specific domain; what does work is sustainable practice across long timeframes. The lesson frames the implication directly: prefer the sustainable over the dramatic. When considering whether to adopt a practice, ask not just "will this work?" but "can I sustain this for years?" The thirty-day extreme push that you can't maintain produces less than the modest practice you can sustain across a decade. Boring consistency beats dramatic transformation pushes for most outcomes you actually want across a lifetime. This principle directly opposes the productivity culture framing that glorifies dramatic transformation stories. Social media shows the dramatic push; it rarely shows the boring consistency. The boring consistency is what actually produces the outcomes. Trust that small consistent practice compounds across years even when results aren't visible in the short term.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What These Principles Look Like In Practice`,
          paragraphs: [
            `Each principle has practical applications. The matching game tests whether you can connect each principle to its most direct application. Here's brief explanation of each application, in random order to avoid telegraphing the matches.`,
            `Application: protect 1-3 hour blocks of uninterrupted time for cognitively demanding work. This shows up most directly when you have something difficult that requires sustained focus: writing an essay, learning something challenging, working through a complex problem. Fragmented attention across many shorter periods produces qualitatively worse output than sustained focus across one longer block, even with equal total time. The block doesn't have to be heroically long; 60-90 minutes of real focus beats 4 hours of fragmented attention.`,
            `Application: track what activities energize vs deplete you, and structure your week around energy patterns. This requires actual observation rather than assumption. Notice what specific activities, people, environments, and times of day leave you with more energy vs less. Schedule demanding work during energy peaks; schedule recovery and lighter work during energy valleys. Your patterns are individual; finding them takes deliberate attention.`,
            `Application: remove friction from desired behaviors (phone in another room, books visible, healthy food accessible, focus tools available); add friction to undesired behaviors (delete distracting apps, unfollow accounts, use blockers during focus). This is the most actionable form of behavior change. Don't rely on willpower; design environment so the desired behavior is easier than the undesired one.`,
            `Application: schedule rest, downtime, unstructured time, and sleep as deliberately as productive work. Treat recovery as essential rather than optional. Block time for it. Protect it from being absorbed by "more important" activities. The recovery isn't time away from work; it's part of what makes the work possible.`,
            `Application: prefer the sustainable over the dramatic; build patterns you can maintain for decades. When considering whether to adopt a practice, ask not just "will this work?" but "can I sustain this for years?" The 30-day extreme push that you can't maintain produces less than the modest practice you can sustain. Boring consistency beats dramatic transformation pushes for most outcomes you actually want across a lifetime.`,
            `Notice as you read these applications that each maps to one of the five principles. The matching game tests whether you can pair them. The mapping isn't always immediately obvious; some applications could plausibly fit multiple principles, but each principle has a most-direct application.`,
          ],
          image: `/voyager-assets/life-wellness/l12-s3-applications.webp`,
          imageCaption: `Five applications to match to five principles. Each principle has a most-direct application; some applications could fit multiple but the strongest match is what the game tests.`,
          vocab: [
            {
              word: `environmental design`,
              definition: `Removing friction from desired behaviors and adding friction to undesired ones so the right choice is structurally easier than the wrong one — more reliable than relying on willpower.`,
              audioPrompt: `Environmental design is one of the most actionable principles you'll encounter, {name}. Instead of relying on willpower to make good choices every time, you engineer your environment so the desired behavior is easier than the undesired one. Remove friction from what you want to do: put your phone in another room, keep books visible, have healthy food accessible, have focus tools ready. Add friction to what you're trying to avoid: delete distracting apps, unfollow accounts that pull you off track, use website blockers during focus time. The key insight is that willpower is a limited resource that depletes across a day — environmental design removes the need for it by making the default choice the right one.`,
            },
            {
              word: `friction`,
              definition: `In the context of environmental design, the resistance or effort required to do a specific behavior. Removing friction from desired behaviors (placing healthy food at eye level, keeping books visible) makes those behaviors easier to do by default. Adding friction to undesired behaviors (deleting distracting apps, putting the phone in another room) makes them harder to do impulsively.`,
              audioPrompt: `Friction is the resistance or effort required to do a specific behavior, and it is the core mechanism in environmental design, {name}. Research on habits, attention, and behavior change consistently shows that environment shapes behavior more reliably than willpower. The mechanism is friction: how easy or hard a specific behavior is in the moment. When the desired behavior has low friction — the book is on the desk, the healthy food is at eye level, the focus tools are ready — it happens more often. When the undesired behavior has high friction — the distracting app is deleted and requires reinstallation, the phone is in another room, the social media site is blocked — it happens less often. Willpower is a limited resource that depletes across a day. Environmental design removes the need for willpower by engineering the default. The research supporting this spans habit research from Wood covered in L07, attention research from Newport, Harris, and Ward covered in L08, and behavior change research more broadly. Consistent performers actually use environmental design; what looks like extraordinary discipline from outside is often extraordinary environment design that makes the desired behavior easy. The lesson frames this as more reliable than heroic willpower: change the environment, change the behavior, without needing to force it repeatedly.`,
            },
            {
              word: `energy peaks`,
              definition: `Times of day or week when a person's energy state — physical, emotional, mental — is highest, producing the best capacity for demanding work. Energy management involves tracking individual energy patterns to schedule cognitively demanding work during peaks and lighter work or recovery during energy valleys.`,
              audioPrompt: `Energy peaks are times of day or week when a person's energy state is highest, producing the best capacity for demanding work, {name}. One of the practical implications of the energy management framework is to track what activities energize versus deplete you and structure your week around energy patterns rather than just hours. The pattern is individual: some people have high mental energy in the morning, others in the late afternoon; some are more socially energized after physical activity; some have depleted emotional energy at the end of the week. Finding your patterns takes deliberate attention — actually observing, rather than assuming. Once you know your patterns, you can schedule demanding work (difficult studying, complex problem-solving, creative work requiring sustained focus) during energy peaks, and schedule recovery, lighter tasks, and administrative work during energy valleys. This produces better output from the same hours. The same student with the same two-hour study block produces dramatically different results depending on whether it falls during an energy peak or valley. Time management tells you to schedule the block; energy management tells you to schedule it when your state will support it. The application is individual observation, then deliberate scheduling around what you actually find.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Matters For Your Generation`,
          paragraphs: [
            `Each previous Voyager Life Wellness lesson has noted ways your generation faces unprecedented conditions. This lesson is no exception. The productivity environment your generation is growing up in is more intense, more designed for engagement, and more likely to produce burnout than any previous generation's.`,
            `Specific patterns. Hustle culture explicitly framing constant work and minimal sleep as virtuous. Social media glorifying entrepreneurial "grind" without showing the costs. Academic pressure intensified by college admissions environment. Tracking and metrics applied to every domain (steps, study hours, social media followers, grades). Attention economy products absorbing the recovery time that previous generations had. The intersection of all these creates productivity expectations that aren't sustainable and aren't producing what they promise.`,
            `What the data shows. Burnout rates among adolescents and young adults are at record highs. Mental health declines tracking with productivity culture intensification. Sleep deprivation widespread. Reports of exhaustion, anxiety, and difficulty maintaining basic functioning have risen substantially across the past 15 years. These aren't individual failures; they're predictable outcomes of being immersed in productivity culture that doesn't match human biology.`,
            `What protects against this. Energy management framework explicitly. Recognition that recovery is required, not optional. Environmental design that removes pressure rather than absorbing it. Deep work practices that actually produce results rather than performative busy-ness. Compounding patterns that don't require unsustainable intensity. Each of the five principles is partly a response to productivity culture's specific failures.`,
            `For 11-12 year olds, building these principles now (before being deeply absorbed into hustle culture, before academic pressure peaks, before professional pressure starts) produces protection that's much harder to retrofit later. Adults who absorbed productivity culture before learning these principles often spend years recovering from burnout patterns that the principles would have prevented.`,
            `One last framing before the matching game. Pop content treats productivity as something you optimize like a video game (more output per hour, more hours per day, more accomplishment per year). The research-based picture treats productivity as something you sustain across a lifetime, with the goal being meaningful work and life over decades rather than maximum output this year. The difference compounds enormously across a career.`,
          ],
          image: `/voyager-assets/life-wellness/l12-s4-generation.webp`,
          imageCaption: `Hustle culture, academic pressure, attention economy, tracking everything. Burnout rates at record highs among adolescents and young adults. Principles are partly response to productivity culture's specific failures.`,
          vocab: [
            {
              word: `its costs`,
              definition: `Late-20th-century productivity culture explicitly framing constant work as virtuous; intensified for your generation through hustle culture, social media "grind" glorification, college admissions pressure, ubiquitous tracking and metrics, attention economy absorbing recovery time. Burnout rates among adolescents and young adults at record highs. Mental health declines tracking with productivity culture intensification. Energy management principles are partly response to specific failures of this culture. Building principles now protects against decades of patterns adults often spend years recovering from.`,
              audioPrompt: `Productivity culture and its costs are important to understand, {name}. Late-20th-century productivity culture explicitly framed constant work and minimal sleep as virtuous. For your generation, this has intensified through hustle culture, social media glorifying entrepreneurial "grind" without showing the costs, academic pressure intensified by college admissions environment, tracking and metrics applied to every domain, attention economy products absorbing the recovery time that previous generations had. The intersection of all these creates productivity expectations that aren't sustainable and aren't producing what they promise. Burnout rates among adolescents and young adults are at record highs. Mental health declines tracking with productivity culture intensification. Sleep deprivation widespread. These aren't individual failures; they're predictable outcomes of being immersed in productivity culture that doesn't match human biology. The five principles you'll work with in the matching game are partly response to these specific failures. Building them now, before being deeply absorbed into hustle culture, protects against decades of patterns adults often spend years recovering from.`,
            },
            {
              word: `hustle culture`,
              definition: `A productivity culture framing that explicitly presents constant work and minimal sleep as virtuous, often glorified through social media "grind" content. The lesson identifies hustle culture as a specific contributor to record-high burnout rates among adolescents and young adults, representing productivity expectations that don't match human biology.`,
              audioPrompt: `Hustle culture is a productivity culture framing that explicitly presents constant work and minimal sleep as virtuous, {name}. It shows up in social media glorifying entrepreneurial grind without showing the costs, in celebrity endorsements of four-hour sleep schedules, in the framing of rest as laziness and busyness as accomplishment. For your generation this has intensified through multiple reinforcing channels: hustle culture content online, academic pressure from college admissions environments, tracking and metrics applied to every domain including sleep and steps, and attention economy products absorbing the recovery time that previous generations had without those products. The intersection creates productivity expectations that aren't sustainable and aren't producing what they promise. Burnout rates among adolescents and young adults are at record highs. Mental health declines have tracked with productivity culture intensification across the past fifteen years. Sleep deprivation is widespread. These aren't individual failures; they're predictable outcomes of being immersed in a culture that doesn't match human biology. The five principles in this lesson are partly direct response to hustle culture's specific failures: energy management acknowledges biology, recovery recognizes necessity, environmental design replaces willpower, deep work blocks replace fragmented busy-ness, compounding replaces dramatic intensity. Building this framework now, before being deeply absorbed into hustle culture, protects against patterns that take adults years to undo.`,
            },
            {
              word: `recovery scheduling`,
              definition: `The practice of treating rest, downtime, unstructured time, and sleep as deliberately scheduled components of a productive week, rather than as rewards earned after sufficient productivity. Grounded in deliberate practice research (Ericsson), recovery scheduling produces better sustainable performance than treating recovery as optional.`,
              audioPrompt: `Recovery scheduling is the practice of treating rest, downtime, unstructured time, and sleep as deliberately scheduled components of a productive week, {name}. The second principle in this lesson's framework is: recovery is part of the work, not a reward for it. Anders Ericsson's deliberate practice research established that elite performers practice intensely and recover deliberately — the recovery isn't optional but is part of what makes the intensive practice possible and sustainable. The same applies to cognitive and physical work more broadly. Ultradian rhythm research suggests that productive cognitive work tends to happen in roughly ninety-minute cycles followed by needed breaks; working through the breaks produces diminishing returns and depletes mental energy. The practical implication: schedule recovery as deliberately as you schedule productive work. Block time for rest and sleep. Protect it from being absorbed by "more important" activities. Treat the recovery not as a reward earned by sufficient productivity — a framing that means it only happens when you've completed everything, which is never — but as an essential component that makes the rest of the schedule possible. Adults who absorbed productivity culture often spend years learning this after burnout teaches it to them; building it as default framework now changes the pattern.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Play The Matching Game`,
          paragraphs: [
            `The matching game tests whether you can pair each principle with its most-direct application. Some pairings will be obvious; some require thinking through what the principle is most centrally about.`,
            `One framing as you play. Each principle has a core insight that maps most directly to one application. "Energy management beats time management" is most centrally about observation of energy patterns. "Recovery is part of work" is most centrally about scheduling rest deliberately. "Environmental design beats willpower" is most centrally about designed friction. "Deep work requires sustained blocks" is most centrally about protected time blocks. "Compounding beats intensity" is most centrally about sustainable patterns.`,
            `Another framing. As you connect principles to applications, notice how the five together produce a coherent framework for sustainable performance across decades. They aren't separate techniques; they're aspects of the same underlying view. The view is that human beings produce best when their biology, attention, and motivation are supported rather than overridden.`,
            `One important point. This framework is research-supported but doesn't include specific numbers, programs, or schedules. That's intentional. The principles apply across different people, different ages, different life circumstances, different work types. The specific application (exactly how long your focus blocks should be, exactly how much recovery you need, exactly what environmental design fits your situation) requires individual observation and adjustment. The framework gives you the structure; the implementation is yours.`,
            `One last framing. You're 12. The patterns you build around energy management and sustainable performance now will compound across decades of work, study, relationships, and life. Most adults around you absorbed productivity-culture framings that produce predictable burnout and exhaustion; the principles you're learning are explicit response to those failures, supported by research and serious productivity thinkers. Building deliberate framework now protects against patterns that take adults years to undo.`,
          ],
          image: `/voyager-assets/life-wellness/l12-s5-before.webp`,
          imageCaption: `Five principles produce coherent framework for sustainable performance. Research-supported, no specific numbers/programs; individual implementation. Building deliberate framework at 12 protects across decades.`,
          vocab: [
            {
              word: `across decades`,
              definition: `Five principles produce coherent framework: energy management beats time management; recovery is part of work; environmental design beats willpower; deep work requires sustained blocks; compounding beats intensity. Together they treat humans as needing biology, attention, and motivation supported rather than overridden. Research-supported but doesn't include specific numbers/programs/schedules; framework gives structure, implementation is individual. Building deliberate framework at 12 protects against productivity-culture patterns that take adults years to undo.`,
              audioPrompt: `The framework for sustainable performance across decades consists of five principles that together produce a coherent view, {name}. Energy management beats time management. Recovery is part of work, not a reward for it. Environmental design beats willpower. Deep work requires sustained blocks. Compounding beats intensity. They aren't separate techniques; they're aspects of the same underlying view. The view is that human beings produce best when their biology, attention, and motivation are supported rather than overridden. The framework is research-supported but doesn't include specific numbers, programs, or schedules. That's intentional. The principles apply across different people, different ages, different life circumstances, different work types. The specific application requires individual observation and adjustment. The framework gives you the structure; the implementation is yours. Building deliberate framework at 12 protects against productivity-culture patterns that take adults years to undo.`,
            },
            {
              word: `meaningful work`,
              definition: `Work that connects to meaning, motivation, and values — the "spiritual energy" dimension in Schwartz and Loehr's framework. The lesson frames the goal of sustainable performance as meaningful work and life over decades, rather than maximum output in the short term, explicitly contrasting this with productivity culture's optimization framing.`,
              audioPrompt: `Meaningful work is the goal that sustainable performance is supposed to serve, and distinguishing it from maximum output is one of the lesson's key reframings, {name}. Tony Schwartz and Jim Loehr's four-energy framework includes spiritual energy — meaning and motivation — as one of the essential energy types that affect performance. When work feels meaningless or disconnected from anything that matters, performance suffers even when physical, emotional, and mental energy are adequate. The lesson's final framing makes this explicit: pop content treats productivity as something to optimize like a video game (more output per hour, more hours per day, more accomplishment per year). The research-based picture treats productivity as something to sustain across a lifetime, with the goal being meaningful work and life over decades rather than maximum output this year. The difference compounds enormously across a career. Pursuing maximum short-term output through productivity culture patterns produces documented burnout, mental health decline, and broken relationships. Building sustainable patterns grounded in energy management protects both the capacity to do good work and the meaning that makes that work worth doing. For eleven and twelve year olds, building this framing before productivity culture patterns become entrenched means entering that culture with a framework that protects against it.`,
            },
            {
              word: `individual implementation`,
              definition: `The principle that while the five energy management frameworks apply broadly, the specific application — how long focus blocks should be, how much recovery each person needs, what environmental design fits a given situation — requires individual observation and adjustment. Generic programs claiming to work for everyone miss this.`,
              audioPrompt: `Individual implementation is the principle that the specific application of the five energy management frameworks requires individual observation and adjustment, {name}. The lesson makes this explicit: the framework is research-supported but doesn't include specific numbers, programs, or schedules. That's intentional. The principles apply across different people, different ages, different life circumstances, and different work types. But exactly how long your focus blocks should be, exactly how much recovery you need, exactly what environmental design fits your situation — that requires you to observe yourself and adjust. Your energy patterns are individual. Your peak hours, your depletion triggers, your environmental vulnerabilities, your capacity for sustained focus — these vary across people. Finding them takes deliberate attention and experimentation rather than following a prescribed program. This connects to the source evaluation skills from L07: universal programs claiming to work for everyone are typically viral content without research backing. Research-based frameworks provide structure and then require individual implementation. The framework tells you what to optimize; the optimization itself is yours. Generic morning routines and viral productivity programs often fail for exactly this reason — they prescribe specific implementations without accounting for individual variation. The five principles give you the structure; paying attention to your own patterns gives you the implementation.`,
            },
          ],
        },

        // ───── MATCHING GAME ─────────────────────────────────────────────────
        {
          id: `l12-matching-game`,
          type: `matching-game`,
          headline: `Match Principles To Applications`,
          intro: `{name}, drag each application to its matching principle. Each principle has one most-direct application even if other applications could plausibly fit.`,
          principles: [
            {
              id: `p1`,
              label: `Energy management beats time management`,
              description: `Energy is the limiting resource, not time. The same hour produces dramatically different output depending on state.`,
            },
            {
              id: `p2`,
              label: `Recovery is part of the work, not a reward for it`,
              description: `Rest, downtime, sleep are essential components of sustainable performance, not optional rewards earned by sufficient productivity.`,
            },
            {
              id: `p3`,
              label: `Environmental design beats willpower`,
              description: `Environment shapes behavior more reliably than willpower. Design conditions for desired behavior rather than forcing it.`,
            },
            {
              id: `p4`,
              label: `Deep work requires sustained blocks`,
              description: `Sustained focus periods produce qualitatively different output than fragmented attention; fragmented attention can't substitute even with equal total time.`,
            },
            {
              id: `p5`,
              label: `Compounding beats intensity`,
              description: `Small consistent practices across years dramatically outperform dramatic short-term efforts; sustainable over dramatic.`,
            },
          ],
          applications: [
            {
              id: `a1`,
              label: `Track what activities energize vs deplete you; schedule demanding work during energy peaks; schedule recovery during energy valleys`,
              matchesPrincipleId: `p1`,
            },
            {
              id: `a2`,
              label: `Schedule sleep, downtime, and unstructured time deliberately; treat recovery as essential rather than optional; protect it from being absorbed by "more important" activities`,
              matchesPrincipleId: `p2`,
            },
            {
              id: `a3`,
              label: `Phone in another room during focus work; delete distracting apps; remove friction from desired behaviors and add friction to undesired ones`,
              matchesPrincipleId: `p3`,
            },
            {
              id: `a4`,
              label: `Protect 1-3 hour blocks of uninterrupted time for cognitively demanding work; recognize fragmented attention can't substitute for sustained attention`,
              matchesPrincipleId: `p4`,
            },
            {
              id: `a5`,
              label: `Prefer modest practices you can maintain for years over dramatic 30-day pushes; trust that consistent small practice compounds across decades even when short-term results aren't visible`,
              matchesPrincipleId: `p5`,
            },
          ],
          reflectionPrompt: `Which principle do you currently apply best? Which do you most need to develop? What's one specific application you could start practicing this week?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the energy management framework argue?`,
              options: [
                `Just time`,
                `Energy is the limiting resource, not time. The same hour produces dramatically different output depending on state. Schwartz and Loehr's "Power of Full Engagement" identifies four types: physical, emotional, mental, spiritual. Time management techniques don't address underlying state; energy management treats time as constant and energy as variable`,
                `Random`,
                `Just hours`,
              ],
              correctIndex: 1,
              explanation: `Time management is widely taught in school and pop content; energy management is less common but more useful. The shift in framing changes what interventions to use: instead of "fit more in," ask "what state am I in for this work?"`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the research show about recovery?`,
              options: [
                `Optional`,
                `Recovery is essential component of sustainable performance, not reward earned by productivity. Anders Ericsson's deliberate practice research: elite performers practice intensely AND recover deliberately. Sleep, rest, downtime, unstructured time all matter. Treating recovery as optional produces burnout patterns documented across many domains; treating it as essential produces sustainable performance across decades`,
                `Just rest`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The reframing from "recovery as reward" to "recovery as essential component" is significant. It shifts how recovery gets scheduled (deliberately, protectedly) and how guilt operates around it (none).`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the research show about environmental design vs willpower?`,
              options: [
                `Willpower wins`,
                `Environment shapes behavior more reliably than willpower (habit research from Wood, attention research from Newport/Harris/Ward, behavior change research generally). Remove friction from desired behaviors; add friction to undesired. Designed environment beats trying to force behavior through willpower across time. Consistent performers actually use environmental design, not heroic willpower`,
                `Random`,
                `Same thing`,
              ],
              correctIndex: 1,
              explanation: `The framing changes what interventions to use. "I just need more discipline" usually fails; "what environmental changes would make the desired behavior easier than the undesired one" usually produces better outcomes.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does Cal Newport's "Deep Work" framework establish?`,
              options: [
                `Random`,
                `Sustained focus periods produce qualitatively different output than fragmented attention; multitasking research shows what feels like multitasking is rapid task-switching with real costs; fragmented attention can't substitute for sustained attention even with equal total time; protect 1-3 hour blocks for cognitively demanding work; deep work increasingly rare and increasingly valuable`,
                `Just focus`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The implication is concrete: if you have something demanding to do, fragmenting it across many short periods produces worse output than one sustained block, even with the same total time. Protecting the blocks is more important than total hours.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the "compounding beats intensity" principle argue?`,
              options: [
                `Just consistency`,
                `Small consistent practices across years dramatically outperform dramatic short-term efforts in most domains (learning, fitness, relationships, financial wellbeing, skill development); building patterns you can maintain for decades produces results intensity-based approaches can't match; prefer the sustainable over the dramatic; boring consistency over transformation pushes`,
                `Random`,
                `Just slow`,
              ],
              correctIndex: 1,
              explanation: `The principle has specific implications for choosing practices: ask not just "will this work?" but "can I sustain this for years?" The 30-day extreme push you can't maintain produces less than the modest practice you can sustain across a decade.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does productivity culture produce documented harms for your generation specifically?`,
              options: [
                `Just life`,
                `Hustle culture, social media "grind" glorification, college admissions pressure, ubiquitous tracking, attention economy absorbing recovery time. Burnout rates at record highs among adolescents and young adults. Mental health declines tracking with intensification. Pop framings ("optimize everything," "12 productivity hacks," "hustle harder") don't match human biology. The five principles are partly response to these specific failures`,
                `Random`,
                `Always the same`,
              ],
              correctIndex: 1,
              explanation: `Recognizing productivity culture as producing predictable harm shifts the response from "just try harder" to "this culture is structured against you; here's what protects against it." Building energy management framework now is protection against patterns that adults often spend years recovering from.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why don't the principles include specific numbers, programs, or schedules?`,
              options: [
                `Random`,
                `The principles apply across different people, different ages, different life circumstances, different work types. Specific implementation (exactly how long focus blocks should be, exactly how much recovery, exactly what environmental design fits) requires individual observation and adjustment. Framework gives structure; implementation is individual. Generic programs ("the 5AM morning routine") miss this`,
                `Just incomplete`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `This connects to the source evaluation skills from L07. Universal programs claiming to work for everyone are usually Tier 3 viral content; research-based frameworks provide structure and require individual implementation. The principles tell you what to optimize; the optimization itself is yours.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the difference between "time management" and "energy management" framings in practice?`,
              options: [
                `Same`,
                `Time management: treats time as variable, focuses on scheduling/planning/fitting more in; doesn't address underlying state. Energy management: treats time as constant, focuses on optimizing energy state during available time; addresses what determines output during specific hours. Energy framing produces different interventions (recovery, environmental design, deep work blocks) than time framing (just scheduling)`,
                `Random`,
                `Just words`,
              ],
              correctIndex: 1,
              explanation: `The framing shift produces different interventions. Time framing asks "how can I fit more in?" Energy framing asks "what state am I in for this work and what would improve it?" The energy framing tends to produce more sustainable outcomes.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Dramatic 30-day transformation pushes are the most effective way to build new habits across years.`,
              correctAnswer: false,
              explanation: `False. Research consistently shows that small consistent practices across years dramatically outperform dramatic short-term efforts. The 30-day push that you can't sustain produces less than the modest practice you can maintain. Sustainable over dramatic; boring consistency over transformation. The compounding effects of small consistent practice across decades produce results no intensity-based approach can match.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm going to start studying 8 hours every day, exercising 2 hours every day, and only sleeping 5 hours. I'll be unstoppable." Based on this lesson, what should you point out?`,
              options: [
                `"Great plan"`,
                `"That plan is going to fail and probably cause harm. Several specific issues. First, the framing is intensity-based; research consistently shows sustainable patterns across years outperform dramatic short-term efforts. Second, 5 hours of sleep is well below what adolescent biology requires (8-10 hours); chronic sleep deprivation produces dramatic attention decrements, mental health impacts, and physical health costs that no studying can offset. Third, 8 hours of study at a stretch will produce fragmented attention with diminishing returns; sustained focus blocks are dramatically more effective than maximum hours. Fourth, the plan doesn't include recovery, which research shows is essential not optional. Fifth, the underlying framing is productivity culture exactly as the research has identified it producing burnout, mental health decline, and unsustainable patterns. A research-based alternative: define what specific outcomes you actually want; identify which 1-3 hour focus blocks during the week would actually advance them; design environment to support those blocks; protect sleep absolutely; schedule recovery as deliberately as work; trust that consistent modest practice across months and years produces dramatically better outcomes than unsustainable intensity. The 'unstoppable' framing is exactly how productivity culture sells patterns that produce burnout. Choose sustainable patterns you can maintain for decades."`,
                `"More work"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied energy management literacy. Name all five principles in specific application. Address the productivity culture framing directly. Provide alternative approach grounded in research. Don't endorse the harmful pattern; point toward what actually works across timescales that matter.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for productivity? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which principle do you most violate currently? Why?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with sustainable performance practice across decades, what does that protect at 30, 50, 80?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific area where you're struggling (school, exercise, sleep, social). Apply the five principles. What would change?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where intensity beats sustainable practice? When is dramatic effort the right approach?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `For one week, track what activities energize vs deplete you. Apply the energy management principle in scheduling.` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Time and energy patterns at 12 compound across decades of work and life. Two paths.`,
          familyActivity: {
            title: `The Family Energy Conversation`,
            duration: `45 minutes`,
            description: `Share the five principles. Most adults absorbed productivity culture framings without examining them; the conversation often surfaces specific family patterns worth changing (sleep deprivation framed as virtue, recovery framed as laziness, busy-ness framed as accomplishment). Consider establishing family practices: prioritizing sleep across the household, scheduled recovery time, environmental design for the home, recognition of deep work needs, sustainable patterns over intense ones.`,
          },
          projectOption: {
            title: `Read Cal Newport, Tony Schwartz, or related, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Cal Newport's "Deep Work" (2016, deep work + environmental design), Schwartz and Loehr's "Power of Full Engagement" (2003, four energies framework), or Newport's "Slow Productivity" (more recent, sustainable performance). Apply concepts during reading period. Write 1,500 words on what you learned about energy management and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Energy management literacy at 12 protects against decades of burnout patterns and produces dramatically better sustainable outcomes than productivity-culture framings.`,
          },
          identityQuestion: `If you become someone with sustainable energy management across decades (protecting recovery, designing environment, doing deep work, building compounding patterns), what does that change about your work, mental health, and life at 30, 50, 80?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who manages energy rather than just time.`,
            `A person who treats recovery as essential, not as a reward.`,
            `Someone who chooses sustainable patterns over dramatic intensity.`,
          ],
          saveKey: `identity_responses_lw_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelfth Life Wellness lesson done. You now have five research-supported principles for sustainable performance (energy > time, recovery is part of work, environment > willpower, deep work needs blocks, compounding > intensity), specific applications matched to each, and explicit framework against productivity culture. Twelve lessons in this band complete. Eight to go. Next time: money and wellness. Case Study format. Let's go. — Terra`,
          badge: `energy-literate`,
          badgeName: `Energy Literate`,
          xpEarned: 75,
          competencies: [
            `Distinguishes energy management from time management as framework`,
            `Articulates five research-supported principles for sustainable performance`,
            `Matches principles to specific applications`,
            `Recognizes productivity culture as source of documented burnout patterns`,
            `Names key thinkers (Schwartz, Loehr, Ericsson, Newport, Wood) and their contributions`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Money and Wellness`,
            hook: `Three cases on money's effect on wellbeing. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const matching = l.screens.find((s) => s.type === `matching-game`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L12 ${VERSION}] "${l.title}" mags=${mags} principles=${matching?.principles?.length ?? 0} applications=${matching?.applications?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
