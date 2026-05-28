// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L19 — Time: The Deepest Mystery
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS1 (scale of time); nature of science
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order time spans from shortest to longest)
// SCOPE: 4 concepts — what time is, deep time, time is not fixed (relativity,
//        gently), the arrow of time
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-19`,
      title: `Time: The Deepest Mystery`,
      duration: 18,
      xpReward: 75,
      badge: `time-explorer`,
      badgeName: `Time Explorer`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Today we explore something you experience every single second of your life, yet almost nobody truly understands: TIME. What IS time, really? Why does it only flow forward, never backward? And here's a mind-bender that even shocked Einstein: time doesn't actually flow at the same speed for everyone. Time is one of the deepest mysteries in all of science, and exploring it will stretch your mind in wonderful ways. By the end of today, you'll think about time like never before. Let's begin.`,
          headline: `Time: The Deepest Mystery`,
          subtitle: `The thing you experience every second, yet barely understand`,
          visual: `/ue-assets/cosmos/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Time?`,
          paragraphs: [
            `Time is one of those things that's incredibly familiar yet incredibly hard to define. We measure it with clocks, calendars, heartbeats, and the rising and setting Sun. We feel it passing. We divide it into seconds, days, and years. But what IS it, really? One useful way scientists think about it: time is what lets us put events in ORDER (before and after) and measure the DURATION between them. Without time, everything would happen at once, which makes no sense. Time gives the universe its sequence, its story, its unfolding.`,
            `For most of history, people assumed time was a fixed, universal thing, ticking along at the same steady rate everywhere, the same for everyone, all across the universe. It seems obvious, right? A minute is a minute, whether you're here or on the Moon or in a distant galaxy. But in the early 1900s, a scientist named Albert Einstein made a discovery so shocking it changed our understanding of reality forever: that simple, obvious assumption about time turns out to be WRONG. We'll get to that astonishing idea soon. But first, let's stretch our minds in a different direction: the vastness of time itself.`,
          ],
          image: `/ue-assets/cosmos/l19-s1-what-is.webp`,
          imageCaption: `Time lets us order events and measure durations. But it's stranger than it seems.`,
          vocab: [
            {
              word: `duration`,
              definition: `The amount of time something lasts, the "length" of time between a beginning and an end. Along with order (before and after), duration is one of the basic things time lets us measure.`,
              audioPrompt: `Duration is the amount of time something lasts, {name}. The length of time between a beginning and an end. One useful way scientists think about time: it lets us put events in order, before and after, and measure the duration between them. Without time, everything would happen at once, which makes no sense. Time gives the universe its sequence and its story. For most of history, people assumed time was fixed and the same for everyone. But Einstein discovered that this obvious assumption turns out to be wrong.`,
            },
            {
              word: `relativity`,
              definition: `Einstein's theory that time and space are not fixed — they can stretch and bend depending on speed and gravity. One of the most important discoveries in science, it showed that a "minute" is not the same length for everyone.`,
              audioPrompt: `Relativity is Einstein's theory that time and space are not fixed, {name}. They can stretch and bend depending on speed and gravity. Before Einstein, everyone assumed a minute was the same length everywhere, for everyone. Einstein proved that wrong. This wasn't just a thought experiment. Relativity has been confirmed by countless experiments and measurements. It explains why GPS satellites must correct for time dilation, and it predicts strange things like black holes. Relativity changed our understanding of reality more profoundly than almost any other discovery in the history of science.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Deep Time: The Vastness of the Past`,
          paragraphs: [
            `Humans are good at thinking about minutes, days, and years. But we're terrible at imagining truly HUGE spans of time, what scientists call "deep time." Let's stretch your mind. A human life is around 80 years. All of recorded human history is only a few THOUSAND years. That already feels long. But Earth is about 4.5 BILLION years old, and the universe is about 13.8 billion years old. These numbers are so vast they're almost impossible to truly feel.`,
            `Here's a famous way to grasp it. Imagine all of cosmic time, from the Big Bang to now, squeezed into a single CALENDAR YEAR. On that scale, the Big Bang is January 1st. Our Sun and Earth don't form until late summer (around September). The first simple life appears soon after. But dinosaurs don't show up until late December, and they go extinct on December 30th. And ALL of recorded human history (every pharaoh, every war, every invention, your whole family tree) fits into the LAST few SECONDS before midnight on December 31st. We are astonishingly new. Understanding deep time gives you a profound sense of perspective: the universe is unimaginably ancient, and we are a very recent, very precious spark within it.`,
          ],
          image: `/ue-assets/cosmos/l19-s2-deep-time.webp`,
          imageCaption: `On a calendar of all cosmic time, human history is the last few seconds of Dec 31.`,
          vocab: [
            {
              word: `deep time`,
              definition: `The enormous spans of time in Earth's and the universe's history, far longer than human timescales: millions and billions of years. So vast it's almost impossible to truly imagine.`,
              audioPrompt: `Deep time means the enormous spans of time in Earth's and the universe's history, {name}. Far longer than human timescales. A human life is around 80 years. All of recorded human history is only a few thousand years. But Earth is about 4.5 billion years old, and the universe is about 13.8 billion years old. Imagine squeezing all of cosmic time into one calendar year. The Big Bang is January 1st. All of human history fits into the last few seconds of December 31st. We are astonishingly new.`,
            },
            {
              word: `fossil record`,
              definition: `The collection of preserved remains and traces of ancient life found in rocks. The fossil record lets scientists read deep time, tracing billions of years of life's history and how it changed over vast spans.`,
              audioPrompt: `The fossil record is the collection of preserved remains of ancient life found in rocks, {name}. When living things die and are buried in sediment, their bones or shells can slowly turn to rock over millions of years. These fossils let scientists read deep time directly. By studying which fossils appear in which rock layers, scientists can trace the history of life across billions of years. The fossil record shows how life began as simple microbes and slowly diversified over deep time into the enormous variety we see today.`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Time Is Not Fixed: Einstein's Shock`,
          paragraphs: [
            `Now for that mind-bending discovery. Albert Einstein figured out that time does NOT flow at the same rate for everyone. It can actually speed up or slow down depending on two things: how fast you're MOVING, and how strong the GRAVITY around you is. The faster you move, the slower your time passes compared to someone standing still. And the stronger the gravity you're in, the slower your time runs. This is called TIME DILATION, and as strange as it sounds, it's completely real and has been measured many times.`,
            `Here's a real example. The astronauts on the International Space Station are moving very fast around Earth. Because of that speed, time passes very slightly SLOWER for them than for us on the ground. When they return, they've actually aged a tiny fraction of a second LESS than they would have on Earth. The effect is tiny at everyday speeds, but it's real, and it gets dramatic near the speed of light or near a black hole. We even have to correct for time dilation in the GPS satellites that help phones find their location. If we didn't, your maps would be wrong! So time isn't a fixed background that ticks the same everywhere. It bends and stretches. This was one of the most shocking and important discoveries in the history of science.`,
          ],
          image: `/ue-assets/cosmos/l19-s3-dilation.webp`,
          imageCaption: `Time dilation: time runs slower the faster you move, or the stronger the gravity. Real.`,
          vocab: [
            {
              word: `time dilation`,
              definition: `The real effect where time passes more slowly for things moving very fast, or in strong gravity, compared to things at rest. Tiny at everyday speeds, but measured and even corrected for in GPS satellites.`,
              audioPrompt: `Time dilation is the real effect where time passes more slowly for things moving very fast, or in strong gravity, {name}. Einstein discovered that time does not flow at the same rate for everyone. The faster you move, the slower your time passes. Astronauts on the space station move so fast that time passes slightly slower for them than for us. When they return, they've aged a tiny fraction of a second less. We even correct for time dilation in GPS satellites, or your maps would be wrong.`,
            },
            {
              word: `gravity`,
              definition: `The force that pulls objects toward each other. More massive objects have stronger gravity. Gravity also affects time: the stronger the gravity, the slower time runs — a prediction of Einstein's relativity confirmed by experiment.`,
              audioPrompt: `Gravity is the force that pulls objects toward each other, {name}. More massive objects have stronger gravity. Earth's gravity keeps you on the ground, holds the Moon in orbit, and pulls the oceans into tides. Gravity also affects time. The stronger the gravitational pull, the slower time runs. This is one of Einstein's predictions, confirmed by experiments. Near a black hole, where gravity is extreme, time slows dramatically. Even on Earth, clocks at sea level run very slightly slower than clocks on mountaintops, where gravity is a little weaker.`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Arrow of Time`,
          paragraphs: [
            `Here's another deep mystery: why does time only flow ONE way, forward? You can move left or right, up or down, forward or back in SPACE. But in TIME, you can only go forward. You remember the past but not the future. A broken cup never un-breaks itself. Scientists call this one-way flow the "arrow of time." It's connected to a deep idea: the universe tends to go from order toward disorder (a tidy room naturally gets messy, not the reverse, unless you put in effort). This steady increase in disorder seems to give time its forward direction.`,
            `Yet even though time always moves forward, the human experience of it changes. Time seems to fly when you're having fun and crawl when you're bored. A summer felt endless when you were little; now years seem to speed by. Our brains, not just clocks, shape how we feel time. Nova's teaching: time is perhaps the deepest mystery we've explored, familiar yet profound, simple to feel yet impossible to fully grasp. And here's the gift in understanding it: knowing how vast time is, and how precious and brief our moment in it is, can help you treasure the time you have. The same wonder that makes us marvel at the size of the universe can make us cherish a single ordinary afternoon. Of all the things the cosmos has given you, time, your time, may be the most precious of all.`,
          ],
          image: `/ue-assets/cosmos/l19-s4-arrow.webp`,
          imageCaption: `Time flows one way, toward disorder. Knowing its vastness helps us treasure our moment.`,
          vocab: [
            {
              word: `arrow of time`,
              definition: `The one-way flow of time, always forward, never backward. We remember the past but not the future, and broken things don't un-break. It's linked to the universe moving from order toward disorder.`,
              audioPrompt: `The arrow of time is time's one-way flow, always forward, never backward, {name}. You can move left or right, up or down in space. But in time you can only go forward. You remember the past but not the future, and broken things don't un-break themselves. Scientists connect this to a deep idea: the universe tends to move from order toward disorder. A tidy room gets messy on its own, never the reverse. This steady increase in disorder seems to give time its forward direction.`,
            },
            {
              word: `entropy`,
              definition: `A measure of disorder or randomness in a system. The universe tends to move from lower entropy (more ordered) to higher entropy (more disordered). This natural increase in entropy is connected to why time flows in one direction only.`,
              audioPrompt: `Entropy is a measure of disorder in a system, {name}. The universe naturally tends to move from order to greater disorder. A sandcastle crumbles. A neat room becomes messy. Hot things cool down. These changes happen naturally in one direction, not the reverse. Scientists say entropy increases over time. This natural increase in disorder is connected to why time flows only forward, the arrow of time. It takes effort to reduce entropy locally, like tidying a room, but the universe as a whole keeps moving toward greater disorder.`,
            },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to stretch your sense of time, {name}. Here are five spans of time, scrambled up. Use the arrows to arrange them from the SHORTEST (top) to the LONGEST (bottom). Get ready to feel just how vast deep time really is.`,
          items: [
            { id: `step-beat`,     label: `One heartbeat (about one second)`,                     position: 1 },
            { id: `step-life`,     label: `One human lifetime (about 80 years)`,                  position: 2 },
            { id: `step-history`,  label: `All of recorded human history (a few thousand years)`, position: 3 },
            { id: `step-earth`,    label: `The age of the Earth (about 4.5 billion years)`,       position: 4 },
            { id: `step-universe`, label: `The age of the universe (about 13.8 billion years)`,   position: 5 },
          ],
          completionMessage: `Perfect, {name}! From a single heartbeat to the entire age of the universe. Notice the jump: a lifetime feels long, all of human history feels ancient, yet both vanish next to the billions of years of Earth and the cosmos. That's deep time. And remember: all of recorded human history is just the last few seconds of the cosmic calendar. We are astonishingly, preciously new.`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `One useful way scientists describe what TIME does is:`,
              options: [
                `It makes things heavier`,
                `It lets us put events in order (before and after) and measure how long things last`,
                `It creates gravity`,
                `It only exists on Earth`,
              ],
              correctIndex: 1,
              explanation: `Time lets us put events in order (before and after) and measure the duration between them. Without time, everything would happen at once. Time gives the universe its sequence and its unfolding story.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `How old is the universe, roughly?`,
              options: [
                `A few thousand years`,
                `About 13.8 billion years`,
                `About 80 years`,
                `About 1 million years`,
              ],
              correctIndex: 1,
              explanation: `The universe is about 13.8 billion years old, and Earth about 4.5 billion. These spans are so vast they're almost impossible to truly feel. This is what scientists call "deep time."` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `On a "cosmic calendar" (all of time squeezed into one year), where does ALL of recorded human history fit?`,
              options: [
                `The whole month of December`,
                `The last few seconds before midnight on December 31st`,
                `From January to June`,
                `The first day, January 1st`,
              ],
              correctIndex: 1,
              explanation: `On the cosmic calendar, the Big Bang is January 1st, Earth forms around September, dinosaurs appear in late December, and ALL of recorded human history fits in the last few seconds before midnight on Dec 31. We are astonishingly new.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `What is TIME DILATION?`,
              options: [
                `Time stopping completely`,
                `Time passing more slowly for things moving very fast, or in strong gravity, compared to things at rest`,
                `Time running backward`,
                `Clocks breaking`,
              ],
              correctIndex: 1,
              explanation: `Time dilation is the real effect (discovered by Einstein) where time passes more slowly for things moving very fast or in strong gravity. It's tiny at everyday speeds but real, and dramatic near light speed or a black hole.` },

            { id: `l19-q5`, format: `true-false`,
              question: `True or false: Time dilation is just a theory and has never actually been measured.`,
              correctAnswer: false,
              explanation: `False. Time dilation is real and has been measured many times. Astronauts on the space station age a tiny fraction less due to their speed. We even have to correct for time dilation in GPS satellites, or your phone's maps would be wrong!` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `Why do GPS satellites have to correct for time dilation?`,
              options: [
                `They don't`,
                `Because time runs slightly differently for the fast-moving satellites — without the correction, your maps would be wrong`,
                `To save battery`,
                `To talk to aliens`,
              ],
              correctIndex: 1,
              explanation: `GPS satellites move fast and are in weaker gravity than the ground, so time runs slightly differently for them. Engineers must correct for this time dilation, or the location your phone calculates would drift and your maps would be wrong. Real science, every day.` },

            { id: `l19-q7`, format: `multiple-choice`,
              question: `What is the "ARROW OF TIME"?`,
              options: [
                `A type of clock`,
                `The fact that time only flows one way — forward, never backward`,
                `A weapon`,
                `A constellation`,
              ],
              correctIndex: 1,
              explanation: `The arrow of time is time's one-way flow: always forward, never backward. We remember the past but not the future, and broken things don't un-break. It's linked to the universe tending to move from order toward disorder.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `What gift does Nova say comes from understanding how vast time is?`,
              options: [
                `It makes you sad`,
                `Knowing how precious and brief our moment is can help us treasure the time we have`,
                `It lets you time travel`,
                `Nothing useful`,
              ],
              correctIndex: 1,
              explanation: `Understanding deep time gives perspective: the universe is ancient, and our moment in it is brief and precious. That knowledge can help us treasure the time we have. The same wonder that marvels at the cosmos can make us cherish a single ordinary afternoon.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `All of human history fits in the last few seconds of the cosmic calendar. How does it feel to realize how new we are in the universe's story?` },
            { id: `r2`, text: `Time literally runs slower for fast-moving astronauts. What's it like to learn that time, which feels so fixed, actually bends?` },
            { id: `r3`, text: `Time seems to fly when you're having fun and crawl when you're bored. When does time feel fastest or slowest for YOU?` },
            { id: `r4`, text: `Nova says your time may be the most precious thing the cosmos gave you. Does thinking about deep time change how you want to spend yours?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Understanding time matters in surprising, practical ways. Time dilation isn't just a curiosity. It's corrected for in the GPS that guides cars, planes, and phones every day. Understanding deep time is essential for geology, biology, and astronomy, helping scientists read Earth's history in rocks and the universe's history in starlight. And on a personal level, grasping how brief and precious our time is can shape how you choose to live, what you value, and how you treat each day. Nova's note: of all the resources you'll ever have, time is the one you can never make more of. Understanding its true nature, both its vastness and its preciousness, is a kind of wisdom that can guide your whole life.`,
          familyAdventure: `Family Cosmic Calendar. As a family, build your own "cosmic calendar." On a big sheet of paper, draw 12 months. Mark the Big Bang on January 1st, Earth forming in early September, dinosaurs in late December, and all human history in the final seconds of December 31st. Then add YOUR family's history: it would be a tiny fraction of the very last second! Talk about how this perspective makes our time feel both small and incredibly precious. You're making deep time visible.`,
          creativePrompt: {
            intro: `Imagine you could send a message across deep time, to someone 1,000 years in the future. Write what you'd say.`,
            floor: `Write at least 5 sentences. Tell them about your life and time, and ask or tell them one thing about the future.`,
            stretch: `Write 8 to 10 sentences. Describe your moment in history, what matters to you, and what you hope has changed (or stayed the same) in 1,000 years.`,
            open: `Write as much as you want. Write a full message across deep time to someone 1,000 years from now. Describe your moment in the vast cosmic calendar, what your world is like, what you've learned about the universe (the Big Bang, deep time, how new humanity is), what you value most in your brief precious time, and your hopes and questions for the future. Reflect on the strange wonder of reaching across the centuries with words. Make it heartfelt and thoughtful.`,
            frames: [
              `To whoever reads this, 1,000 years from now: ___.`,
              `In my time, the world is ___.`,
              `What I've learned about time and the universe is ___.`,
              `What I treasure most in my brief moment is ___.`,
              `My hope for your future is ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You can now think about time in profound new ways: what it is, the staggering scale of deep time, how time bends with speed and gravity, and why it only flows forward. And you've learned to treasure your own precious moment in the vast cosmic story. Next lesson is our FINAL one together in Cosmos, and it brings everything full circle. THE INTERCONNECTEDNESS OF ALL LIFE. I'll see you there for the grand finale. — Nova.`,
          badge: `time-explorer`,
          badgeName: `Time Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L19.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L19 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
