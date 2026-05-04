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
          headline: `Why does scrolling feel so hard to stop?`,
          paragraphs: [
            `Have you ever picked up a device to check one thing — and suddenly an hour had passed? You're not alone, and it's not just about willpower. Apps and games are designed by teams of people whose job is to make you want to keep going. They use the same psychological tricks as slot machines: unpredictable little rewards that keep your brain coming back for more. Understanding how this works is the first step to being the one in charge.`,
          ],
          image: `/explorer-assets/future-skills/l17-magazine-1.png`,
          imageCaption: `Your brain loves surprises — but that can be used against you`,
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The variable reward schedule`,
          paragraphs: [
            `Researchers have found that when rewards are unpredictable — sometimes you get something exciting, sometimes you don't — the brain releases more dopamine than when rewards are always the same. This is called a **variable reward schedule**. Social feeds, notification badges, and "likes" are all built on this idea. Every scroll could bring something amazing or nothing at all — and that uncertainty is what makes it so hard to put down.`,
          ],
          image: `/explorer-assets/future-skills/l17-magazine-2.png`,
          imageCaption: `Unpredictable rewards are more powerful than predictable ones`,
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Screens and sleep`,
          paragraphs: [
            `Screens also affect your body, not just your mind. The blue light that comes from phone, tablet, and computer screens can suppress melatonin — the hormone your brain makes to help you fall asleep. Using screens in the hour before bed can make it much harder to fall asleep and reduce the quality of your rest. Sleep matters enormously for learning, memory, and mood. Many sleep experts recommend switching screens off at least 30–60 minutes before bedtime.`,
          ],
          image: `/explorer-assets/future-skills/l17-magazine-3.png`,
          imageCaption: `Blue light tricks your brain into thinking it's still daytime`,
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Intentional use vs compulsive use`,
          paragraphs: [
            `Not all screen time is equal. Watching a tutorial to learn something new, video-calling a friend, or playing a game you deliberately chose are examples of **intentional use** — you decided to do this for a reason. **Compulsive use** is when you pick up a device out of habit or boredom, and keep going even when you'd rather stop. The difference isn't the app or the device — it's whether *you* are in control or the technology is. Most modern devices have a built-in screen time or digital wellbeing settings area that helps you track and limit how long you spend on different apps.`,
          ],
          image: `/explorer-assets/future-skills/l17-magazine-4.png`,
          imageCaption: `Check your device's screen time or digital wellbeing settings to see your habits`,
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
    fetch('/explorer-assets/future-skills/l17-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l17-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-FUTURESKILLS-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-FUTURESKILLS-L17] One or more magazine assets missing'));
}
