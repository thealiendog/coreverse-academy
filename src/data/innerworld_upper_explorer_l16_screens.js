// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L16 — Setting Intentions for My Day
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : morning intentions — bridging RAS (L15) and Identity (L17).
// GAME FORMAT: investigation
// VERSION: v1  |  UE spec v1.1 compliant
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-16`,
      title: `Setting Intentions for My Day`,
      duration: 18,
      xpReward: 75,
      badge: `intention-setter`,
      badgeName: `Intention Setter`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Last lesson you learned about the RAS, the filter in your brain that decides what you notice. Today we build on that with something beautifully simple: SETTING INTENTIONS. An intention is a quiet decision about how you want to show up, made BEFORE the day sweeps you along. Most people let the morning happen to them. But a few quiet moments of intention can change what your RAS filters for, how you act, and over time, who you become. This is the bridge between what you NOTICE and who you ARE. Take a slow, curious breath, and let's begin.`,
          headline: `Setting Intentions for My Day`,
          subtitle: `How a few quiet morning moments can shape your whole day`,
          visual: `/ue-assets/iw/exp-iw-l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is an Intention?`,
          paragraphs: [
            `An intention is a quiet, clear statement about how you want to BE, not just what you want to GET. That's the key difference. "I want to get an A on my test" is a goal. "I intend to be focused and calm during my test" is an intention. See the difference? A goal is about the RESULT. An intention is about who you are WHILE you're doing the thing. You can't always control results. But you can almost always choose how you show up. That's why intentions are so powerful. They put the power back where it belongs: with you.`,
            `Here's another way to think about it. An intention is like setting the direction of your compass before you start walking. You might not know exactly where you'll end up, but you know which direction you're heading. "Today I intend to be kind, even when things are hard." "Today I intend to notice one thing I'm grateful for." "Today I intend to speak up when I have something to share." These aren't wishes. They're quiet decisions made before the day starts. And because they're about YOUR choices rather than other people's behavior, they're always within your power.`,
          ],
          image: `/ue-assets/iw/exp-iw-l16-s1-what-intention.webp`,
          imageCaption: `An intention is a quiet decision about how you want to show up, made before the day begins.`,
          vocab: [
            {
              word: `intention`,
              definition: `A quiet, clear statement about how you want to BE or show up — not what you want to get. Unlike a goal (which focuses on results), an intention focuses on your choices, attitude, and presence. You set it before the moment arrives.`,
              audioPrompt: `An intention is a quiet, clear statement about how you want to BE, {name}. Not what you want to get. Here's the difference. I want to get an A on my test is a goal. I intend to be focused and calm during my test is an intention. A goal is about the result. An intention is about who you are while you're doing the thing. You can't always control results. But you can almost always choose how you show up. That's why intentions are so powerful.`,
            },
            {
              word: `goal`,
              definition: `A specific result or outcome you want to achieve. Goals focus on what you GET. Intentions focus on how you SHOW UP. Both are useful, but intentions are always within your power because they're about your own choices, not outside results.`,
              audioPrompt: `A goal is a specific result or outcome you want to achieve, {name}. Goals focus on what you get. Intentions focus on how you show up. Here's why that matters. You might set a goal to win the game. But you can't fully control that. You can set an intention to play with full effort and good sportsmanship. That's always within your power. Both goals and intentions are useful. But intentions put the power where it belongs, with your choices.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Morning Matters`,
          paragraphs: [
            `Why set intentions in the MORNING? Because the first few minutes after you wake up are special. Your brain is shifting from sleep mode into daytime mode. Your brain waves are moving from the slow, dreamy rhythms of sleep (theta waves, remember from L12?) into the faster rhythms of being awake. During that transition, your mind is more open and receptive than it will be for the rest of the day. It's like the soil is soft and ready for planting. Whatever you plant in those first minutes tends to take root.`,
            `Most kids (and most adults) fill those first moments with whatever grabs them. A phone screen. A rush to get dressed. Worry about the day ahead. And their RAS starts filtering accordingly, filtering for stress, for screens, for rushing. But if you take even TWO MINUTES to sit quietly and set a clear intention, something different happens. You're giving your RAS a clear signal FIRST, before the noise of the day starts. "Show me kindness today." "Help me notice my own courage." "Let me spot moments where I'm growing." Your RAS hears that. And it starts filtering the whole day through that lens.`,
          ],
          image: `/ue-assets/iw/exp-iw-l16-s2-morning.webp`,
          imageCaption: `The first minutes of your day are when your mind is most open to intention.`,
          vocab: [
            {
              word: `morning practice`,
              definition: `A short, deliberate routine done in the first minutes after waking — before the rush of the day begins. A morning practice might include breathing, setting an intention, or quiet reflection. It works because the brain is especially open and receptive during the transition from sleep to wakefulness.`,
              audioPrompt: `A morning practice is a short, deliberate routine done in the first minutes after waking, {name}. Before the rush of the day begins. It might include breathing, setting an intention, or quiet reflection. Why morning? Because your brain is shifting from sleep mode into daytime mode. During that transition, your mind is more open and receptive than it will be for the rest of the day. Whatever you plant in those first minutes tends to take root. Even two minutes can shape the whole day.`,
            },
            {
              word: `receptive`,
              definition: `Open and ready to receive new information or direction. Your brain is especially receptive in the first minutes after waking, which is why morning is the ideal time to set an intention — the signal goes deeper and sticks better.`,
              audioPrompt: `Receptive means open and ready to receive new information or direction, {name}. Your brain is especially receptive in the first minutes after waking. The brain waves are shifting from slow sleep rhythms into faster waking rhythms. During that transition, your mind is like soft soil ready for planting. That's why morning is the ideal time to set an intention. The signal goes deeper and sticks better than it would later in the day when your mind is already full of noise.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Intention Meets Your RAS`,
          paragraphs: [
            `Here's where L15 and L16 connect beautifully. Remember, your RAS filters the world based on what you've signaled is IMPORTANT. An intention is one of the clearest, most direct signals you can send. When you sit quietly in the morning and say to yourself, "Today I intend to notice moments of kindness," you are literally programming your RAS. You're telling the filter: kindness matters today. Let it through. And your RAS will obey. Throughout the day, you'll start spotting kind moments you would have completely missed without the intention.`,
            `But it goes even deeper than noticing. When your RAS is filtering for kindness, you don't just SEE more kindness. You also start ACTING more kindly yourself. This is because what you pay attention to shapes how you feel, and how you feel shapes how you behave. Intention → RAS filter → what you notice → how you feel → how you act. It's a chain reaction that starts with one quiet moment in the morning. The same principle works for courage, patience, creativity, gratitude, anything you set your intention toward. You're not just changing what you see. You're changing what you DO. And that changes who you become.`,
          ],
          image: `/ue-assets/iw/exp-iw-l16-s3-ras-bridge.webp`,
          imageCaption: `Intention programs your RAS. Your RAS shapes what you notice. What you notice shapes how you act.`,
          vocab: [
            {
              word: `intention chain`,
              definition: `The sequence that connects a morning intention to real change: Intention → RAS filter → what you notice → how you feel → how you act → who you become. Each step flows naturally from the one before it. It all starts with one quiet decision.`,
              audioPrompt: `The intention chain is the sequence that connects a morning intention to real change, {name}. Intention, then RAS filter, then what you notice, then how you feel, then how you act, then who you become. Each step flows naturally from the one before. Set an intention to notice courage. Your RAS filters for it. You spot brave moments. That makes you feel braver. You act with more courage. Over time, you become a more courageous person. It all starts with one quiet morning decision.`,
            },
            {
              word: `signal`,
              definition: `A message you send to your brain about what matters. An intention is a signal. A belief is a signal. A repeated question is a signal. Your RAS uses these signals to decide what to filter for. Clear, deliberate signals produce the best results.`,
              audioPrompt: `A signal is a message you send to your brain about what matters, {name}. An intention is a signal. A belief is a signal. A repeated question is a signal. Your RAS uses these signals to decide what to filter for. Vague signals produce vague filtering. Clear, deliberate signals produce focused filtering. That's why sitting quietly and stating a clear intention works so well. You're sending your RAS the clearest possible signal about what to show you today.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `From Daily Intention to Identity`,
          paragraphs: [
            `Here's the deepest part, and it connects forward to L17. When you set an intention once, you shape one day. When you set intentions regularly, day after day, you shape something much bigger: your IDENTITY. Remember from neuroplasticity (L02): neurons that fire together, wire together. Every time you set the intention "I show up with kindness," and then your RAS helps you notice and act on kindness throughout the day, you're strengthening a neural pathway. After weeks and months, "being kind" stops being something you TRY to do. It becomes something you ARE. The intention became a habit. The habit became a trait. The trait became part of your identity.`,
            `This is how the Inner World lessons connect. Your beliefs program your RAS (L15). Your intentions direct your RAS each morning (L16). And your repeated actions, guided by those intentions, shape your identity over time (L17). It's one beautiful system. And the entry point, the place where YOU get to take the wheel, is that quiet moment each morning. Sage's gentle teaching: you don't become who you want to be by thinking about it once. You become who you want to be by showing up as that person, one day at a time, one intention at a time. The morning practice is small. The results, over time, are enormous.`,
          ],
          image: `/ue-assets/iw/exp-iw-l16-s4-identity-bridge.webp`,
          imageCaption: `Daily intentions become habits. Habits become traits. Traits become identity.`,
          vocab: [
            {
              word: `identity formation`,
              definition: `The gradual process by which your repeated choices, actions, and intentions shape who you ARE over time. Identity isn't fixed — it's formed through daily practice. Setting intentions regularly is one of the most powerful ways to deliberately shape your identity.`,
              audioPrompt: `Identity formation is the gradual process by which your repeated choices and intentions shape who you are over time, {name}. Identity isn't fixed. It's formed through daily practice. You set the intention I show up with courage. Your RAS helps you notice and act on courage throughout the day. You're strengthening a neural pathway. After weeks and months, being courageous stops being something you try to do. It becomes something you are. The intention became a habit. The habit became a trait. The trait became identity.`,
            },
            {
              word: `compound effect`,
              definition: `The way small, repeated actions add up to enormous change over time. One intention shapes one day. But intentions set daily, week after week, compound into identity shifts that feel almost magical — even though they're just consistent small choices adding up.`,
              audioPrompt: `The compound effect is the way small, repeated actions add up to enormous change over time, {name}. One intention shapes one day. That's nice, but small. But intentions set daily, week after week, compound into something much bigger. After a month of intending kindness, you don't just notice more kindness. You ARE kinder. After a month of intending courage, you don't just spot brave moments. You ARE braver. The morning practice is small. The compound effect, over time, is enormous.`,
            },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids and their morning routines. Classify each: CLEAR INTENTION (the kid is setting a real intention about how to show up), GOAL NOT INTENTION (the kid is focused on a result, not how they'll be), REACTIVE START (the kid is letting the morning happen to them with no direction), or INTENTION IN ACTION (the kid's daily intention has already started shaping their identity).\n\nOne is sneakier than it looks.`,
          options: [
            { id: `intention`,  label: `Clear Intention`,     color: `#34D399`, description: `The kid is setting a real intention about how they want to show up today.` },
            { id: `goal`,       label: `Goal Not Intention`,  color: `#60A5FA`, description: `The kid is focused on a result or outcome, not on how they'll be.` },
            { id: `reactive`,   label: `Reactive Start`,      color: `#F87171`, description: `The kid is letting the morning happen to them with no direction.` },
            { id: `identity`,   label: `Intention In Action`,  color: `#FBBF24`, description: `The kid's repeated daily intentions have already started shaping who they are.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid wakes up and immediately checks their phone.` },
                { text: `They scroll through videos while getting dressed.` },
                { text: `They rush out the door feeling scattered and already behind.` },
              ],
              correctAnswer: `reactive`,
              realWorldExample: `Most mornings start this way unless you choose otherwise.`,
              explanation: `Pure reactive start. No intention, no direction. The kid's RAS is being programmed by whatever the phone shows them — which is usually designed to grab attention, not to serve the kid's growth. The day is happening TO them. There's no judgment here — most people start their day this way. But there's a better option.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid sits on the edge of their bed for two minutes each morning.` },
                { text: `They take three slow breaths and say quietly: "Today I intend to be patient, even when things are frustrating."` },
                { text: `They head into the day feeling calm and directed.` },
              ],
              correctAnswer: `intention`,
              realWorldExample: `Two minutes of intention can reshape the whole day.`,
              explanation: `Clear intention. The kid is making a quiet decision about how they want to SHOW UP (patient), not what they want to GET. They're sending their RAS a clear signal before the day's noise begins. Two minutes. That's all it takes. The patience intention will now shape what they notice, how they feel, and how they respond to frustration throughout the day.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid wakes up thinking: "I need to score at least two goals in today's game."` },
                { text: `They visualize the ball going into the net.` },
                { text: `They feel anxious about whether it'll happen.` },
              ],
              correctAnswer: `goal`,
              realWorldExample: `Goals focus on results you can't fully control.`,
              explanation: `Goal, not intention. The kid is focused on a RESULT (two goals) that depends on many things they can't control — the other team, the weather, the referee, luck. That's why they feel anxious. An intention version would be: "I intend to play with full effort and joy today." Same game, but the power is back with the kid's own choices, not the scoreboard.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `A kid doesn't do a formal morning practice anymore.` },
                { text: `But they naturally wake up thinking about what they're grateful for.` },
                { text: `Without trying, they walk into school already noticing kind moments and looking for ways to help.` },
              ],
              correctAnswer: `identity`,
              realWorldExample: `When intention becomes identity, it no longer feels like effort.`,
              explanation: `Tricky! This kid doesn't even do a formal practice anymore, so you might think it's a reactive start. But look closer. They're naturally waking up with gratitude and kindness. Why? Because they practiced intentions so consistently that it rewired their brain. The intention became a habit. The habit became a trait. The trait became identity. They don't need to set the intention anymore — they ARE the intention. This is the compound effect in action.`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is an INTENTION?`,
              options: [
                `A wish you make on a star`,
                `A quiet, clear statement about how you want to BE or show up — not what you want to get`,
                `The same thing as a goal`,
                `Something only adults can do`,
              ],
              correctIndex: 1,
              explanation: `An intention is a quiet, clear statement about how you want to BE or show up. Unlike a goal (which focuses on results), an intention focuses on your choices, attitude, and presence. It's always within your power because it's about YOUR choices.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `What's the KEY DIFFERENCE between a goal and an intention?`,
              options: [
                `Goals are better than intentions`,
                `A goal focuses on the RESULT you want to get; an intention focuses on how you SHOW UP while doing the thing`,
                `They're exactly the same`,
                `Intentions are only for sports`,
              ],
              correctIndex: 1,
              explanation: `A goal focuses on a result (get an A, score two goals). An intention focuses on how you show up (be focused and calm, play with full effort). You can't always control results, but you can almost always choose how you show up.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `Why is MORNING the best time to set an intention?`,
              options: [
                `It's not — evening is better`,
                `Your brain is transitioning from sleep, making it more open and receptive — whatever you plant in those first minutes tends to take root`,
                `Because you're hungry`,
                `It doesn't matter when you do it`,
              ],
              correctIndex: 1,
              explanation: `In the first minutes after waking, your brain is shifting from sleep rhythms into waking rhythms. During that transition, your mind is more open and receptive. Whatever you plant in those first minutes tends to take root and shape the rest of your day.` },

            { id: `l16-q4`, format: `true-false`,
              question: `True or false: Setting an intention in the morning programs your RAS to filter for that quality throughout the day.`,
              correctAnswer: true,
              explanation: `True. An intention is one of the clearest signals you can send to your RAS. When you say "Today I intend to notice kindness," you're telling your RAS filter: kindness matters today, let it through. And it will.` },

            { id: `l16-q5`, format: `multiple-choice`,
              question: `What is the INTENTION CHAIN?`,
              options: [
                `A piece of jewelry`,
                `Intention → RAS filter → what you notice → how you feel → how you act → who you become`,
                `A type of food`,
                `Something that only works for adults`,
              ],
              correctIndex: 1,
              explanation: `The intention chain shows how one quiet morning decision creates a chain reaction: your intention programs your RAS, which shapes what you notice, which affects how you feel, which changes how you act, which over time shapes who you become.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `How do daily intentions connect to IDENTITY?`,
              options: [
                `They don't connect at all`,
                `One intention shapes one day; repeated daily intentions compound into habits, traits, and eventually identity`,
                `Identity is fixed and can't change`,
                `Only goals shape identity`,
              ],
              correctIndex: 1,
              explanation: `One intention shapes one day. But intentions set daily, week after week, compound. The intention becomes a habit. The habit becomes a trait. The trait becomes part of your identity. That's the compound effect — small daily choices adding up to who you become.` },

            { id: `l16-q7`, format: `multiple-choice`,
              question: `A kid says: "I want to win the spelling bee." Is this an intention or a goal?`,
              options: [
                `Intention`,
                `Goal — it focuses on a RESULT (winning) rather than how the kid will SHOW UP`,
                `Both`,
                `Neither`,
              ],
              correctIndex: 1,
              explanation: `This is a goal — it focuses on a result (winning) that the kid can't fully control. An intention version would be: "I intend to stay calm and focused during the spelling bee." Same event, but the power is with the kid's own choices.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `What happens when someone practices intentions so consistently that they no longer need to set them deliberately?`,
              options: [
                `They forgot`,
                `The intention became a habit, the habit became a trait, the trait became identity — they ARE the intention now`,
                `It stopped working`,
                `Nothing changes`,
              ],
              correctIndex: 1,
              explanation: `When intention becomes identity, it no longer feels like effort. The kid who practiced gratitude intentions for months now naturally wakes up grateful. They don't need to set the intention anymore — they ARE the intention. That's the compound effect at its most powerful.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Take a slow, curious breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What's one quality you'd like to show up with more often — kindness, courage, patience, curiosity, something else? Why that one?` },
            { id: `r2`, text: `Think about your usual morning. What happens in the first five minutes after you wake up? How might two minutes of quiet intention change the rest of your day?` },
            { id: `r3`, text: `Can you think of a time you set a goal and felt anxious about it? How would an intention (about how you'd SHOW UP) have felt different?` },
            { id: `r4`, text: `If you set the same intention every morning for a month, what quality would you choose? What kind of person do you think you'd become?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Setting intentions is one of the simplest and most powerful practices in the entire Inner World subject. Athletes set intentions before every game. Surgeons set intentions before every operation. Musicians set intentions before every performance. They're not wishing for results — they're choosing how to show up. And here's the beautiful part: you don't need any equipment, any app, any special place. Just two minutes, a few slow breaths, and one clear sentence about who you want to be today. That's it. The morning practice is small. The compound effect, over time, is life-changing.`,
          familyAdventure: `Family Morning Intention Week. For one week, each family member sets a quiet intention each morning — just one sentence about how they want to show up that day. Write it on a sticky note and put it somewhere you'll see it. At dinner, share: did your intention shape your day? What did you notice that you might have missed? Did the same intention feel different on different days? At the end of the week, talk about what you learned. You might find that this small practice, done together, changes the whole feel of your family's week.`,
          creativePrompt: {
            intro: `Write about a morning where you set an intention and followed the chain: intention → what you noticed → how you felt → how you acted → who you were becoming.`,
            floor: `Write at least 5 sentences. Pick one intention and describe how it shaped your day.`,
            stretch: `Write 8 to 10 sentences. Show the contrast between a reactive morning and an intentional morning, with vivid examples from the same day.`,
            open: `Write as much as you want. Imagine two versions of the same kid on the same day. Version A wakes up reactively — phone, rush, scattered. Version B takes two quiet minutes to set a clear intention. Walk the reader through BOTH versions of the day, same events, same school, same people, but completely different experiences because of the different morning. Show how the intention shaped the RAS filter, what the kid noticed, how they felt, how they acted, and who they were becoming. Make it vivid and specific.`,
            frames: [
              `The intention I set this morning was ___.`,
              `The first thing I noticed differently was ___.`,
              `Because I was filtering for ___, I felt ___.`,
              `That feeling led me to ___.`,
              `By the end of the day, I realized ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now understand one of the simplest and most powerful practices in the Inner World: setting intentions. You know the difference between a goal and an intention. You know why morning is the ideal time. You understand the intention chain — how one quiet sentence programs your RAS, shapes what you notice, changes how you feel and act, and over time forms your identity. And you know about the compound effect: small daily intentions adding up to who you become. Next, we explore that identity question directly: WHO AM I BECOMING? IDENTITY, and how you have far more say in it than you might think. Take a slow breath, and I'll see you there. — Sage.`,
          badge: `intention-setter`,
          badgeName: `Intention Setter`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L16.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L16 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
