// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L05 — Sleep: The Superpower You're Missing
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L05 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-05`,
      title:     `Sleep: The Superpower You're Missing`,
      duration:  12,
      xpReward:  50,
      badge:     `sleep-champion`,
      badgeName: `Sleep Champion`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Here's a question for you, {name}: when was the last time you woke up feeling genuinely good? Energetic, clear-headed, ready for the day? If that doesn't happen very often, you're not alone — but you are missing something important. Sleep is not just rest. It's when your brain consolidates everything it learned that day. It's when your body repairs itself. It's when growth hormone is released. The science of what happens while you sleep is remarkable — and once you understand it, you might start treating those hours very differently. Let's take a look at what's really going on.`,
          headline: `Sleep: The Superpower You're Missing`,
          subtitle: `Sleep is when your body and brain do their most important work — and protecting it is one of the best things you can do for yourself`,
          visual: `/explorer-assets/wellness/l05-welcome.png`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Sleep Is Active Work`,
          paragraphs: [
            `Sleep isn't passive rest.`,
            `It's your body and brain's most active repair and reset period. While you sleep, more biology happens than during most of your waking hours. Sleep is when the real work gets done.`,
          ],
          image: `/explorer-assets/wellness/l05-s1-active-work.png`,
          imageCaption: `Sleep looks still from the outside. Inside, it's the busiest your body and brain will be all day.`,
          vocab: [
            { word: `active`,      definition: `Not passive. Your body and brain are doing real work during sleep — not just resting, but repairing, building, and processing.`,
              audioPrompt: `Sleep is one of the most active states your body experiences, {name} — even though from the outside it looks completely still. Inside, repair is happening. Memories are being filed. Hormones are being released. Cells are dividing. The work you do during sleep is some of the most important biology of your whole day.` },
            { word: `restoration`, definition: `The repair and renewal that happens while you sleep. Muscles, bones, immunity, mood — all restored overnight.`,
              audioPrompt: `Terra loves this word, {name}: restoration. Sleep is when your body actually repairs itself — muscles rebuild, immune cells replenish, growth hormone is released, emotional experiences are processed. You're not just resting. Your body is doing some of its most important biological work in those hours. That's what restoration means.` },
            { word: `biology`,     definition: `The actual physical processes happening inside you. Sleep is not optional for any of them — it's when most happen.`,
              audioPrompt: `When Terra says sleep is biological, {name}, it means real chemical and physical processes are running — not just feelings or vibes. Growth hormone is literally released. Toxic waste is literally flushed from your brain. Memories are literally consolidated. None of that biology has an alternative. Sleep is where it happens.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your Brain Cleans House`,
          paragraphs: [
            `While you sleep, your brain flushes out toxic waste through the GLYMPHATIC SYSTEM.`,
            `It also moves new memories from short-term to long-term storage. Everything you learned that day gets filed away properly. That's why "sleep on it" actually works.`,
          ],
          image: `/explorer-assets/wellness/l05-s2-brain-cleans.png`,
          imageCaption: `Your brain literally cleans itself at night — and files away everything you learned. "Sleep on it" is real biology.`,
          vocab: [
            { word: `glymphatic system`, definition: `Your brain's waste-clearance system. Runs most actively during sleep — flushing out byproducts that build up during the day.`,
              audioPrompt: `While you sleep, {name}, your brain is running its cleaning system — the glymphatic system. It flushes out the metabolic waste that builds up during the day. Think of it as a nightly maintenance cycle your brain cannot run properly while you're awake. This is one of the core reasons sleep deprivation affects how well you think so quickly.` },
            { word: `consolidation`,     definition: `Moving memories from short-term to long-term storage. Happens during sleep — which is why studying then sleeping beats staying up to study more.`,
              audioPrompt: `Everything you learn during the day is still fragile, {name} — it hasn't been filed away yet. Memory consolidation happens during sleep: your brain replays experiences, strengthens the connections between them, and moves them into long-term storage. That's why studying then sleeping works better than staying up to study more.` },
            { word: `toxic waste`,       definition: `Byproducts that build up in your brain during the day. Flushed out by the glymphatic system at night.`,
              audioPrompt: `Your brain produces waste products all day, {name} — natural byproducts of all the thinking and processing it does. During sleep, the glymphatic system flushes them out. Without enough sleep, that waste accumulates — and you can feel it as brain fog, slow thinking, or moodiness. Cleaning happens. Sleep is when.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Your Body Repairs`,
          paragraphs: [
            `Sleep is also when your body does its most important biological work.`,
            `GROWTH HORMONE is released — kids literally grow during sleep. Muscles repair. Immune cells multiply. Emotional experiences get processed. Every system uses sleep to restore.`,
          ],
          image: `/explorer-assets/wellness/l05-s3-body-repairs.png`,
          imageCaption: `Kids literally grow during sleep. Muscles repair. Immunity strengthens. Emotional experiences get processed. The body does its real work overnight.`,
          vocab: [
            { word: `growth hormone`, definition: `Released during deep sleep. What helps kids literally grow taller — and repairs tissues all over the body.`,
              audioPrompt: `Growth hormone gets released during deep sleep, {name} — and that's not a metaphor. Kids literally grow taller during the night. Your body releases this hormone to lengthen bones, build muscle, and repair tissues. Missing sleep means missing growth hormone release. That's why sleep matters more during childhood than at almost any other time of life.` },
            { word: `immune`,         definition: `Your body's defense system against illness. Strengthened during sleep — kids who sleep well get sick less often.`,
              audioPrompt: `Your immune system does some of its most important work while you sleep, {name}. It produces new immune cells. It identifies and remembers threats. Kids who sleep enough genuinely get sick less often than those who don't. Sleep isn't just rest — it's how your body builds the defenses that keep you healthy.` },
            { word: `processing`,     definition: `How your brain digests emotional experiences from the day. Happens during sleep — especially REM sleep.`,
              audioPrompt: `Emotional processing happens largely during sleep, {name} — your brain works through the hard or confusing experiences of the day, making sense of them, fitting them into your understanding. Without enough sleep, emotions feel rawer the next day. Sleep is one of the body's most reliable tools for emotional regulation, and it works whether you notice it or not.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Cycles`,
          paragraphs: [
            `Sleep comes in 90-minute CYCLES. Each cycle has different stages doing different work.`,
            `REM (dreaming, emotions, memory). DEEP SLEEP (physical repair). You need MULTIPLE complete cycles. Cutting sleep short cuts the REM-heavy later cycles disproportionately.`,
          ],
          image: `/explorer-assets/wellness/l05-s4-cycles.png`,
          imageCaption: `Cutting sleep short by an hour can cost you more REM than you'd expect — because the REM-rich cycles come at the end.`,
          vocab: [
            { word: `cycle`,      definition: `One complete 90-minute sequence of sleep stages — including light sleep, deep sleep, and REM. You need several per night.`,
              audioPrompt: `Each night of sleep is made up of cycles about 90 minutes long, {name} — and each cycle moves through different stages doing different work. You need multiple complete cycles to get the full repair, memory, and emotional processing your body and brain need. Cutting the night short cuts off cycles from the end — where the most REM tends to be.` },
            { word: `REM sleep`,  definition: `Rapid Eye Movement sleep. When dreams happen, emotions get processed, and memories get consolidated. Concentrated in later cycles.`,
              audioPrompt: `REM sleep is when your brain is almost as active as when you're awake, {name} — it's when dreams happen, emotions get processed, and memories get filed. The tricky thing: REM is concentrated in the later sleep cycles. So cutting sleep short by even an hour can cost you a disproportionate amount of REM, and you might not notice until your mood or memory feels off.` },
            { word: `deep sleep`, definition: `The slow-wave stage when physical restoration happens — muscle repair, bone growth, immune work. Concentrated earlier in the night.`,
              audioPrompt: `Deep sleep is your body's prime maintenance period, {name}. This is when growth hormone is released, muscles repair themselves, bones strengthen, and your immune system does critical work. It's not passive rest — it's active biological repair. Missing it regularly is one of the fastest ways to feel physically worn down.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `How Much Kids Need`,
          paragraphs: [
            `Sleep needs vary by age. Kids 6-12 need 9-12 hours per night.`,
            `Most kids run on less than they need. The effects of chronic short sleep look remarkably like ADHD: trouble focusing, mood swings, impulsivity. Sleep isn't a luxury. It's a biological need.`,
          ],
          image: `/explorer-assets/wellness/l05-s5-how-much.png`,
          imageCaption: `9-12 hours for ages 6-12. Most kids run short. The effects look a lot like ADHD — focus problems, mood swings, restlessness.`,
          vocab: [
            { word: `sleep deprivation`, definition: `Getting less sleep than your body needs. Effects on mood, focus, learning, and physical health — even from one short night.`,
              audioPrompt: `Sleep deprivation doesn't always feel dramatic, {name} — sometimes it just feels like being a bit off. More irritable than usual. Harder to concentrate. Slower to respond. Craving more food. The effects of running short on sleep accumulate, and they look a lot like ADHD symptoms. The fix is often simpler than people think: more sleep.` },
            { word: `chronic`,           definition: `Ongoing and persistent over time. Chronic short sleep means missing sleep night after night — and the effects compound.`,
              audioPrompt: `One bad night of sleep is recoverable, {name}. Chronic short sleep — night after night, week after week — is a different thing entirely. The effects compound: attention suffers, emotional regulation becomes harder, immunity weakens, and mood becomes less stable. Terra wants you to know that protecting your sleep most nights genuinely changes how you feel across your whole life.` },
            { word: `biological need`,   definition: `Something your body genuinely requires to function. Not a preference, not a reward — fundamental, like food and water.`,
              audioPrompt: `Sleep being called a biological need means exactly what it sounds like, {name}: your body cannot function well without it, no matter how much you might want to stay awake. It's in the same category as food and water. Not a luxury, not a reward for good behavior — a genuine requirement that your brain and body rely on every single night.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Setting Up for Sleep`,
          paragraphs: [
            `Sleep hygiene = the habits that help you sleep well.`,
            `Consistent bedtime (even weekends — your body clock doesn't take days off). No screens an hour before. Cool, dark room. Wind-down routine. Small habits. Big difference.`,
          ],
          image: `/explorer-assets/wellness/l05-s6-setup-for-sleep.png`,
          imageCaption: `Consistent bedtime. No screens. Cool, dark room. Wind-down routine. Small, simple habits that genuinely change how you feel.`,
          vocab: [
            { word: `melatonin`,        definition: `The hormone your brain produces to signal "time to sleep." Suppressed by blue light from screens.`,
              audioPrompt: `Melatonin is your brain's natural sleep signal, {name} — it rises as it gets dark and tells your body to prepare for rest. The problem with screens is that their blue light looks like daylight to your brain, which suppresses melatonin and delays the whole process. Removing screens an hour before bed lets melatonin rise naturally. It's a simple change with a real effect.` },
            { word: `circadian rhythm`, definition: `Your body's internal 24-hour clock. Regulates when you feel sleepy and alert — kept accurate by consistent bedtimes.`,
              audioPrompt: `Your circadian rhythm is the internal 24-hour clock your body runs on, {name}. It regulates energy, alertness, hunger, and sleep — all cycling in a predictable pattern. Consistent bedtimes keep that clock accurate. Irregular schedules confuse it, making it harder to fall asleep when you want to and harder to wake up feeling rested. Consistency is the simplest way to keep it working for you.` },
            { word: `wind-down`,        definition: `A calming pre-sleep routine. The same sequence each night signals your brain that sleep is approaching.`,
              audioPrompt: `Your brain learns from repetition, {name} — it builds associations between sequences of events. A consistent wind-down routine becomes a reliable signal: this is the pattern that comes before sleep. Over time, your brain starts preparing for sleep as soon as the routine begins. It doesn't have to be elaborate. Just consistent. And consistent is what makes it work.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `helps`,
              label: `😴 Helps You Sleep Well`,
              color: `#34D399`,
            },
            {
              id: `hurts`,
              label: `😬 Makes Sleep Harder`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l05-g1`,
              image: `l05-game-1.png`,
              label: `Putting your tablet away an hour before bedtime and reading a book instead.`,
              matchPhrase: `Removing screen blue light an hour before bed lets your melatonin rise naturally — your brain gets the signal that sleep is coming.`,
              correctMatch: `helps`,
            },
            {
              id: `l05-g2`,
              image: `l05-game-2.png`,
              label: `Keeping your bedroom cool, quiet, and dark when you go to bed.`,
              matchPhrase: `A cool, dark room helps your body temperature drop slightly — which is one of the signals your body needs to move into sleep.`,
              correctMatch: `helps`,
            },
            {
              id: `l05-g3`,
              image: `l05-game-3.png`,
              label: `Watching exciting videos right up until the moment you turn your light off.`,
              matchPhrase: `Screen blue light right before bed suppresses melatonin — and exciting content keeps your brain alert just when it needs to wind down.`,
              correctMatch: `hurts`,
            },
            {
              id: `l05-g4`,
              image: `l05-game-4.png`,
              label: `Eating a big sugary snack right before bedtime.`,
              matchPhrase: `A sugar spike right before bed can disrupt your blood sugar during the night, interrupting the deep sleep stages your body needs most.`,
              correctMatch: `hurts`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l05-q1`,
              format: `multiple-choice`,
              question: `What does your brain do during sleep that doesn't happen while you're awake?`,
              options: [
                `It creates entirely new brain cells from scratch`,
                `It flushes out toxic waste products through the glymphatic system`,
                `It increases in size by around 20%`,
                `It stops all activity to conserve energy`,
              ],
              correctIndex: 1,
              explanation: `The glymphatic system is essentially your brain's waste-clearance system — it runs most effectively during sleep, flushing out the toxic byproducts that build up during the day. This is one of the reasons sleep deprivation has such rapid effects on how well your brain functions.`,
            },
            {
              id: `l05-q2`,
              format: `multiple-choice`,
              question: `What happens to your memory and learning when you cut your sleep short?`,
              options: [
                `Nothing — your brain catches up on memory storage during the next day`,
                `You lose some memory but fully recover it the following night`,
                `The later sleep cycles that handle memory consolidation get cut off, so less of what you learned gets stored long-term`,
                `Your brain speeds up during the day to make up for the lost processing time`,
              ],
              correctIndex: 2,
              explanation: `The later cycles of sleep are disproportionately rich in REM — the stage where memory consolidation and emotional processing happen. Cutting sleep short cuts these cycles off first, which is why even moderate sleep reduction can significantly affect how well you remember and learn.`,
            },
            {
              id: `l05-q3`,
              format: `multiple-choice`,
              question: `Why should you avoid screens for an hour before bed?`,
              options: [
                `Screens keep your brain too entertained to feel tired`,
                `Blue light from screens suppresses melatonin, the hormone that signals your brain it's time to sleep`,
                `Screens emit radiation that keeps you physically alert`,
                `Watching screens makes your eyes too tired to close properly`,
              ],
              correctIndex: 1,
              explanation: `Melatonin is the hormone your brain produces to signal that it's time to sleep — and blue light from screens directly suppresses its production. Removing screens an hour before bed lets melatonin rise naturally, making it easier to fall asleep and stay asleep.`,
            },
            {
              id: `l05-q4`,
              format: `true-false`,
              question: `Having a consistent bedtime — going to sleep and waking up at the same time each day — helps your body know when to feel sleepy.`,
              correctAnswer: true,
              explanation: `True. Your body runs on a circadian rhythm — an internal clock that regulates when you feel sleepy and when you feel alert. Consistent sleep and wake times keep this clock well-calibrated. Irregular schedules confuse it, making it harder to fall asleep and harder to wake up feeling rested.`,
            },
            {
              id: `l05-q5`,
              format: `fill-blank`,
              question: `During deep sleep, your body releases growth hormone and repairs itself — this is when your body does its most important ___.`,
              options: [
                `restoration`,
                `exercise`,
                `dreaming`,
                `waking`,
              ],
              correctIndex: 0,
              explanation: `Deep sleep (slow-wave sleep) is your body's prime restoration period — muscles repair, bones strengthen, growth hormone is released, and your immune system reinforces itself. It's not rest in the passive sense; it's active maintenance.`,
            },
            {
              id: `l05-q6`,
              format: `multiple-choice`,
              question: `What is the main purpose of a wind-down routine before bed?`,
              options: [
                `To give you something to do when you are not tired yet`,
                `To send a consistent signal to your brain that sleep is coming, so it begins preparing`,
                `To make sure you have finished all your tasks before sleeping`,
                `To reduce the total amount of deep sleep your body needs each night`,
              ],
              correctIndex: 1,
              explanation: `Your brain learns from patterns. The same sequence of activities each night — however simple — becomes a signal that sleep is approaching. Over time, your brain starts preparing for sleep as soon as the routine begins, making it much easier to fall asleep quickly and deeply.`,
            },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Sleep researchers call it the most underrated health tool there is — it affects everything from how well you learn to how strong your immune system stays. Every world-class athlete and performer treats sleep as part of their training.`,
          familyAdventure: `Design a family sleep challenge for one week — consistent bedtime, no screens one hour before bed, and a wind-down routine. Track how everyone feels each morning. Which habits felt hardest? Which do you want to keep?`,
          creativePrompt: `Try going to bed 15 minutes earlier than usual tonight, and keep your screens in another room. Notice in the morning whether anything feels different.`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that sleep is when your body and brain do their most important work — growing, repairing, and storing everything you've learned. Protecting your sleep is one of the most caring things you can do for yourself. Terra is so proud to walk this path with you.`,
          badge: `sleep-champion`,
          badgeName: `Sleep Champion`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L05.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L05] Loaded: "Sleep: The Superpower You're Missing" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l05-s1-active-work.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-s2-brain-cleans.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-s3-body-repairs.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-s4-cycles.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-s5-how-much.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-s6-setup-for-sleep.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L05] One or more magazine assets missing'));
}
