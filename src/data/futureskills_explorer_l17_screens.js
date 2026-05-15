// ─────────────────────────────────────────────────────────────────────────────
// Future Skills  |  L17 — Screen Time and Brain Health
// Age band : explorers (6–8)   Guide: byte
// ─────────────────────────────────────────────────────────────────────────────

const FS_L17 = {
  ageBand:   `explorers`,
  subjectId: `future-skills`,
  guide:     `byte`,

  lessons: [
    {
      id:        `fs-6-8-17`,
      title:     `Screen Time and Brain Health`,
      duration:  12,
      xpReward:  50,
      badge:     `digital-wellness`,
      badgeName: `Digital Wellness Star`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}. I'm Byte, and I want to talk to you about something that affects almost every person alive right now — screens. You're looking at one right now, actually. Here's the thing: screens aren't bad. But the way they're designed can make it really hard to put them down — and that's not an accident. Today we're going to find out exactly what's happening in your brain when you scroll, and I'm going to give you some tools to stay in charge. Ready? Let's dig in.`,
          headline: `Screen Time and Brain Health`,
          subtitle: `How screens affect your brain — and how to stay in charge`,
          visual: `/explorer-assets/future-skills/l17-welcome.png`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Designed To Keep You Scrolling`,
          paragraphs: [
            `Ever picked up your device to check one thing and suddenly an hour passed? Not your fault. Apps are designed by teams whose entire job is to keep you scrolling.`,
          ],
          image: `/explorer-assets/future-skills/l17-s1-designed-to-hook.png`,
          imageCaption: `When something feels hard to put down, it usually was designed that way`,
          vocab: [
            { word: `willpower`,     definition: `The mental strength to stop yourself from doing something even when it's tempting.`,
              audioPrompt: `Willpower is like a muscle, {name} — it gets tired with use. Clever app designers know that, and they design their apps to wear yours down. The longer you scroll, the harder it gets to stop.` },
            { word: `psychological`, definition: `Relating to how your mind and brain work — your thoughts, feelings, and choices.`,
              audioPrompt: `Psychological means it's about your brain, {name} — not your body. The tricks used to keep you scrolling are psychological. They work on your thoughts without you ever noticing.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Dopamine and Surprises`,
          paragraphs: [
            `Your brain releases dopamine — a feel-good chemical — every time something exciting happens. Apps trigger it constantly. Notifications, likes, new posts. Tiny hits of "yes" all day long.`,
          ],
          image: `/explorer-assets/future-skills/l17-s2-dopamine-sparks.png`,
          imageCaption: `Every notification is a tiny chemical reward in your brain`,
          vocab: [
            { word: `dopamine`, definition: `The brain chemical released when you get a reward. Makes you feel good and want more.`,
              audioPrompt: `Dopamine is your brain's reward signal, {name}. Every ping, every like, every funny post triggers a little bit. Apps are designed to set it off as often as possible. Now you know the trick.` },
            { word: `reward`,   definition: `Something that feels good and makes you want to do whatever caused it again.`,
              audioPrompt: `A reward doesn't have to be big, {name}. A funny meme is a reward. A "like" is a reward. Your phone offers tiny rewards constantly — and your brain keeps coming back for more.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Slot Machine Trick`,
          paragraphs: [
            `Researchers found that unpredictable rewards trigger MORE dopamine than predictable ones. Slot machines work this way. So do social feeds. Sometimes amazing. Sometimes nothing. That uncertainty is the hook.`,
          ],
          image: `/explorer-assets/future-skills/l17-s3-slot-machine.png`,
          imageCaption: `Sometimes a treasure. Sometimes nothing. That's exactly why you can't stop checking.`,
          vocab: [
            { word: `variable reward`, definition: `A reward that comes sometimes but not always. More powerful than rewards that come every time.`,
              audioPrompt: `Here's the wild fact, {name} — unpredictable rewards are stronger than predictable ones. If every scroll gave you something amazing, you'd get bored. The "maybe" is what hooks you.` },
            { word: `unpredictable`,   definition: `Can't be guessed in advance. You don't know when it'll happen — only that sometimes it will.`,
              audioPrompt: `Unpredictable means you can't tell when, {name}. That's exactly what makes you keep checking. Your brain hates not knowing — so it keeps you scrolling to find out.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Blue Light, Lost Sleep`,
          paragraphs: [
            `Screens emit blue light, which suppresses melatonin — the hormone that tells your brain it's time to sleep. Use screens before bed, and your brain thinks it's still daytime.`,
          ],
          image: `/explorer-assets/future-skills/l17-s4-blue-light-sleep.png`,
          imageCaption: `Blue light convinces your brain the sun is still up — even at midnight`,
          vocab: [
            { word: `melatonin`,  definition: `The hormone your brain releases to make you feel sleepy at night.`,
              audioPrompt: `Melatonin is your body's sleep signal, {name}. When it gets dark, your brain releases it and you start to feel drowsy. Screens at night delay it — and that's why bedtime scrolling makes sleep harder.` },
            { word: `blue light`, definition: `Light from screens that delays melatonin and makes your brain think it's still daytime.`,
              audioPrompt: `The sun makes blue light too, {name} — it's what wakes you in the morning. Your phone screen does the same thing. At night, that's a problem.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Intentional vs Compulsive`,
          paragraphs: [
            `Intentional use: you chose this on purpose, with a reason. Watching a tutorial, video-calling a friend. Compulsive use: your hand just reached for the device. No real decision. Big difference.`,
          ],
          image: `/explorer-assets/future-skills/l17-s5-intentional-vs-compulsive.png`,
          imageCaption: `Same screen. Same hour. Totally different relationship — depending on whether you chose it.`,
          vocab: [
            { word: `intentional`, definition: `Done on purpose with a clear reason. You decided what you were going to do before you started.`,
              audioPrompt: `Intentional means you chose it, {name}. Before you pick up a device, you have an answer to "why?" That answer is what separates being in control from being controlled.` },
            { word: `compulsive`,  definition: `Done out of habit or impulse, without a real decision. The technology runs you instead of the other way around.`,
              audioPrompt: `Compulsive means you didn't really decide, {name}. Your hand just reached for the phone. Thirty minutes vanished. Noticing it is the first step to changing it.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `One Question That Helps`,
          paragraphs: [
            `Before you pick up your device, ask: "Why am I doing this?" If you have an answer, go ahead. If not, that's a sign the habit is running you. One question. That's the trick.`,
          ],
          image: `/explorer-assets/future-skills/l17-s6-one-question.png`,
          imageCaption: `One pause. One question. The whole difference between intentional use and compulsive use lives there.`,
          vocab: [
            { word: `digital wellbeing`, definition: `Using technology in a way that supports your health and focus — instead of undermining them.`,
              audioPrompt: `Digital wellbeing isn't about using screens less, {name} — it's about using them better. Most devices have a screen time settings area that shows exactly where your hours are going. Awareness is power.` },
            { word: `attention`,         definition: `What you give your mind to. One of the most valuable things you have — and a major target of app design.`,
              audioPrompt: `Your attention is the most valuable thing you have, {name}. Companies make billions trying to capture it. Choosing where it goes — on purpose — is one of the most powerful skills there is.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `intentional`,
              label: `🎯 Intentional Use`,
              color: `#34D399`,
            },
            {
              id: `compulsive`,
              label: `📱 Compulsive Use`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l17-g1`,
              image: `l17-game-1.png`,
              label: `Setting a 30-minute timer and watching a nature documentary you chose.`,
              matchPhrase: `That's intentional use — you chose it on purpose with a clear time boundary.`,
              correctMatch: `intentional`,
            },
            {
              id: `l17-g2`,
              image: `l17-game-2.png`,
              label: `Auto-scrolling through a feed all through dinner without really watching anything.`,
              matchPhrase: `That's compulsive use — habit took over, not a real choice.`,
              correctMatch: `compulsive`,
            },
            {
              id: `l17-g3`,
              image: `l17-game-3.png`,
              label: `Opening a learning tutorial to practise a skill for 30 minutes, then closing it.`,
              matchPhrase: `Intentional use — you had a goal and stuck to it.`,
              correctMatch: `intentional`,
            },
            {
              id: `l17-g4`,
              image: `l17-game-4.png`,
              label: `Picking up a tablet to do one quick thing, and somehow still tapping around an hour later.`,
              matchPhrase: `That's compulsive use — the variable reward schedule kept pulling you in.`,
              correctMatch: `compulsive`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l17-q1`,
              format: `multiple-choice`,
              question: `Why do social media feeds and notification badges make it so hard to put your device down?`,
              options: [
                `They always show you exactly what you want to see`,
                `They use a variable reward schedule — unpredictable rewards that keep your brain coming back`,
                `They are designed to educate you`,
                `They remind you of important tasks`,
              ],
              correctIndex: 1,
              explanation: `Unpredictable, intermittent rewards trigger more dopamine release than predictable ones — this is the same mechanism used in slot machines.`,
            },
            {
              id: `l17-q2`,
              format: `multiple-choice`,
              question: `Why do sleep experts recommend avoiding screens in the hour before bed?`,
              options: [
                `Screens make too much noise and keep you awake`,
                `Bright screens make your eyes too tired to sleep`,
                `Blue light from screens suppresses melatonin, making it harder to fall asleep`,
                `Screens remind you of homework you haven't done`,
              ],
              correctIndex: 2,
              explanation: `Blue light suppresses melatonin — the hormone your brain uses to prepare for sleep — which delays how quickly you feel tired.`,
            },
            {
              id: `l17-q3`,
              format: `multiple-choice`,
              question: `Which of these is the best habit for intentional technology use?`,
              options: [
                `Always keep notifications turned on so you never miss anything`,
                `Use your device as soon as you wake up to start your day`,
                `Ask yourself why you're picking up the device before you use it`,
                `Only use devices when an adult tells you to`,
              ],
              correctIndex: 2,
              explanation: `Intentional use starts with a conscious question — "Why am I picking this up?" That pause puts you back in control.`,
            },
            {
              id: `l17-q4`,
              format: `true-false`,
              question: `Blue light from screens can suppress the sleep hormone melatonin for several hours, which is why many experts suggest switching screens off before bedtime.`,
              correctAnswer: true,
              explanation: `True. Blue light mimics daylight and signals to your brain that it's still daytime, delaying melatonin release and making it harder to fall asleep.`,
            },
            {
              id: `l17-q5`,
              format: `fill-blank`,
              question: `Apps that give you unpredictable rewards — sometimes something exciting, sometimes nothing — are using a variable ___ schedule to keep you engaged.`,
              options: [
                `reward`,
                `score`,
                `update`,
                `access`,
              ],
              correctIndex: 0,
              explanation: `A variable reward schedule means rewards are unpredictable. That unpredictability is what makes the behaviour so hard to stop.`,
            },
            {
              id: `l17-q6`,
              format: `multiple-choice`,
              question: `Which of these best describes intentional technology use?`,
              options: [
                `Using your device whenever you feel bored`,
                `Spending as little time as possible on screens`,
                `Choosing what to do on a device before you pick it up, with a clear purpose in mind`,
                `Only using devices for school work`,
              ],
              correctIndex: 2,
              explanation: `Intentional use means you decide the purpose before you start — you're in control of the technology, not the other way around.`,
            },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Digital wellness designers work at tech companies, schools, and health organisations to help people build healthier relationships with technology. Understanding these patterns is the first step to designing better digital experiences.`,
          familyAdventure: `Talk with a family member about one screen habit each of you would like to change. Could you set a shared "no screens" window each day — like during dinner or the hour before bed? Try it for a week and compare how you feel.`,
          creativePrompt: `For one week, try checking your device's screen time or digital wellbeing settings every evening. Note which apps took the most time. Were any of those uses intentional — or did the time just slip away?`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Brilliant work, {name}! You now understand how variable reward schedules work — and how to tell the difference between intentional and compulsive screen use. Knowing this puts you in control. Byte is so proud to share this knowledge with you.`,
          badge: `digital-wellness`,
          badgeName: `Digital Wellness Star`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default FS_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = FS_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = FS_L17.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = FS_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-FUTURESKILLS-L17] Loaded: "Screen Time and Brain Health" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l17-s1-designed-to-hook.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-s2-dopamine-sparks.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-s3-slot-machine.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-s4-blue-light-sleep.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-s5-intentional-vs-compulsive.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-s6-one-question.png',            { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-FUTURESKILLS-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-FUTURESKILLS-L17] One or more magazine assets missing'));
}
