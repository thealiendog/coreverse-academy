// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L20 — My Wellness Blueprint
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L20 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-20`,
      title:     `My Wellness Blueprint`,
      duration:  12,
      xpReward:  50,
      badge:     `wellness-architect`,
      badgeName: `Wellness Architect`,

      screens: [

        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, you've done something really meaningful over these twenty lessons. You've learned how your body runs, how your mind works, how sleep and movement and stress and relationships all connect. You know more about yourself now than most adults ever take the time to learn. This last lesson is yours to keep — we're putting it all together into something practical, something personal. Your wellness blueprint. Not a rulebook from someone else — a map drawn from your own understanding of what helps you thrive. I'm proud of you. Let's make it real.`,
          headline: `My Wellness Blueprint`,
          subtitle: `You've now learned how your body and mind work — this final lesson is about putting it all together into something you can actually live`,
          visual: `/explorer-assets/wellness/l20-welcome.png`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Map Drawn From Knowing Yourself`,
          paragraphs: [
            `A wellness BLUEPRINT isn't a rulebook from someone else.`,
            `It's a personal map of the values, practices, and habits that support how you want to FEEL and who you want to BECOME — drawn from your own understanding.`,
          ],
          image: `/explorer-assets/wellness/l20-s1-map-from-knowing.png`,
          imageCaption: `Twenty lessons of understanding, drawn into one personal map. Not a program someone gave you — a blueprint built from what you now know about yourself.`,
          vocab: [
            { word: `blueprint`, definition: `A personal plan or map. Built from your understanding of what helps you thrive — not rules handed down from someone else.`,
              audioPrompt: `A blueprint is your plan, {name} — not someone else's rules handed to you, but your own map drawn from what you now understand about yourself. Terra has been thinking about this for a long time: the most powerful wellness plan is the one you make for yourself, built on real knowledge. That's what these twenty lessons have been building toward — the understanding you need to design something that actually fits your life.` },
            { word: `practice`,  definition: `A healthy behavior you return to regularly. Not a perfect performance — a consistent commitment to showing up.`,
              audioPrompt: `A practice is different from a performance, {name}. You don't have to do it perfectly — you just have to keep coming back to it. Sleep, movement, time in nature, tending your relationships: these are all practices. They don't require perfection. They require showing up, most of the time, over a long time. That consistency is what makes them powerful. Terra believes the most important word in wellness is not "best" — it's "regular."` },
            { word: `values`,    definition: `What genuinely matters to you. The compass underneath every habit choice — what makes a blueprint truly yours, not someone else's.`,
              audioPrompt: `Your values are what genuinely matter to you, {name} — the things that, when you look honestly at your life, you want it to be built around. Energy. Connection. Curiosity. Strength. Calm. Whatever yours are, they're the compass underneath every habit choice you'll ever make. A blueprint built on your real values fits you. One built on someone else's values fits no one for long.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Seven Areas`,
          paragraphs: [
            `A complete blueprint covers seven connected areas.`,
            `NUTRITION. MOVEMENT. SLEEP. STRESS MANAGEMENT. RELATIONSHIPS. MENTAL HEALTH. NATURE. These aren't separate topics — they're one interconnected system. Each shapes the others.`,
          ],
          image: `/explorer-assets/wellness/l20-s2-seven-areas.png`,
          imageCaption: `Seven areas. One system. Each strand strengthens or weakens the others. Together they're the picture of what it actually means to thrive.`,
          vocab: [
            { word: `holistic`,  definition: `Viewing wellness as one whole system. All seven areas connected — not seven separate to-do lists.`,
              audioPrompt: `Holistic means whole, {name} — and it's the right word for wellness because none of these areas live alone. You can't really separate "sleep wellness" from "stress wellness" from "relationship wellness." They all flow into each other. Approaching your wellbeing holistically means accepting that, and working with it instead of against it.` },
            { word: `nutrition`, definition: `How you nourish yourself with food and water. One of seven core wellness areas — and one that affects every other one.`,
              audioPrompt: `Nutrition is one of the seven, {name}, and it touches every other area. What you eat affects your energy, your mood, your sleep, your immunity, even your gut microbiome's influence on your brain. You don't have to follow a strict plan to nourish yourself well. Variety, mostly whole foods, enough water, regular meals — these are the basics, and the basics are what matter most.` },
            { word: `balance`,   definition: `Attention spread across all seven areas — none neglected, all supported in some way. The goal isn't perfection in each, just presence.`,
              audioPrompt: `Balance doesn't mean perfection in every area, {name} — it means none of them are getting completely ignored. You don't have to do all seven things brilliantly. You just have to make sure each is getting at least some of your attention. A small amount of care, spread across all seven areas, tends to outperform intense focus on just one or two.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Everything Is Connected`,
          paragraphs: [
            `Nothing in your wellness operates alone.`,
            `Poor sleep → high stress → harder food choices → less energy → less movement → worse sleep. The loop runs in REVERSE too. Improve one area, and ripple effects follow across the system.`,
          ],
          image: `/explorer-assets/wellness/l20-s3-everything-connected.png`,
          imageCaption: `Drop a stone in one area and ripples spread to all of them. This is good news — you don't have to fix everything to start feeling better.`,
          vocab: [
            { word: `interconnected`, definition: `Linked together so each part affects the others. The defining quality of how wellness areas actually function.`,
              audioPrompt: `Interconnected means nothing works alone, {name}. Your sleep affects your stress. Your stress affects your food choices. Your food choices affect your energy. Your energy affects how much you move. And movement affects your sleep. Every part of your wellness connects to every other part. This is actually good news — it means improving anything helps everything. You don't need to fix it all at once. You just need to start somewhere.` },
            { word: `ripple effect`, definition: `What happens when a change in one area spreads outward and creates improvements in others — like a stone dropped in still water.`,
              audioPrompt: `A ripple effect is when one change sets off others you didn't plan, {name}. Better sleep creates better energy for movement. Better movement reduces stress. Reduced stress improves your mood and your relationships. None of those later changes required extra effort — they followed from the first one. Terra loves this idea because it means you don't need to do everything. You just need to find the right first stone to drop.` },
            { word: `momentum`,      definition: `The tendency for things to keep moving in the same direction. Positive habits build it — making the next good choice easier.`,
              audioPrompt: `Momentum is what happens when good choices start making the next good choice easier, {name}. A few consistent nights of sleep and your energy goes up. Your energy goes up and movement feels less like effort. Movement becomes easier and your mood lifts. Your mood lifts and your relationships feel warmer. That's momentum — the system reinforcing itself. Terra has seen this happen again and again. The beginning is the hardest part. Once you have momentum, it starts carrying you.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Sustainable Over Extreme`,
          paragraphs: [
            `The most important word in long-term health: SUSTAINABLE.`,
            `People who thrive long-term are not the most intense — they're the most CONSISTENT. Consistent sleep. Consistent movement. Boring habits compound into a different quality of life.`,
          ],
          image: `/explorer-assets/wellness/l20-s4-sustainable-extreme.png`,
          imageCaption: `Boring beats brilliant. A habit you can keep doing for years outperforms an intense one you abandon in a month. Consistency is the quiet power behind every lasting result.`,
          vocab: [
            { word: `sustainable`, definition: `Able to be kept going over a long time. A sustainable habit fits your life well enough that you can actually keep doing it.`,
              audioPrompt: `Sustainable is the most important word in long-term health, {name}. A habit you can keep doing for years is worth far more than an intense one you abandon in a month. Terra believes this deeply — not because easy is better, but because something you do consistently for three years will always outperform something brilliant that you stopped after six weeks. Ask yourself not just whether something is good for you, but whether it's something you can honestly keep up.` },
            { word: `consistency`, definition: `Showing up regularly, even imperfectly. What produces lasting results — more than intensity, more than perfection.`,
              audioPrompt: `Consistency is the quiet ingredient behind every lasting wellness result, {name}. People who go hard for a month and then stop don't get the same outcomes as people who do something modest and reliable for a year. Showing up most days — even on the days when you don't feel like it, even when your version is small — is what builds the patterns that change your life. It's not glamorous. It's just true.` },
            { word: `compound`,    definition: `Grow by building on what came before. Small consistent habits compound over time into much bigger results than they seem to at the start.`,
              audioPrompt: `Compound is a word from math, {name}, but it applies beautifully to health. When small habits build on themselves over time, the results grow bigger than they appear at the start. A consistent sleep routine now isn't just giving you better days this week — it's building the foundation for better energy, sharper thinking, and stronger health for years ahead. Small consistent choices compound into a life that looks very different from one built on nothing. That's worth understanding early.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Start Where You Have Energy`,
          paragraphs: [
            `You don't have to fix everything at once.`,
            `Start with ONE area. The one where you have energy right now. A small, consistent change. The ripple effects will follow. Patience does what willpower can't.`,
          ],
          image: `/explorer-assets/wellness/l20-s5-where-energy.png`,
          imageCaption: `One area. One small change. Done consistently. The system will respond — and the next area will get easier from there.`,
          vocab: [
            { word: `start`,    definition: `The act of beginning somewhere small. More important than picking the perfect place — any honest start beats a perfect plan that never begins.`,
              audioPrompt: `Starting matters more than picking the perfect place to start, {name}. The most common reason people don't build wellness habits isn't lack of knowledge — it's waiting for the right moment, the right plan, the right amount of energy. Start anywhere. Start small. Start today. An imperfect start beats a perfect plan you never begin. The system is forgiving — it responds to anything you do.` },
            { word: `patience`, definition: `Trusting the system over time. What makes sustainable change actually work — letting compounding do its quiet work.`,
              audioPrompt: `Patience is what most quick-fix wellness approaches lack, {name}. Real change happens through compounding — small consistent actions, repeated over time, gradually transforming what's possible for you. The first week feels small. The first month feels modest. The first year feels meaningful. The fifth year feels like a different life. Trust the system. Patience is doing real work even when you can't see it yet.` },
            { word: `one`,      definition: `The number of habits to focus on at any one time. More than that divides your attention and dilutes what each can become.`,
              audioPrompt: `One is the magic number in habit-building, {name} — one new habit at a time. Trying to build five at once almost guarantees none of them stick. Pick one. Get it automatic. Then add the next. It feels slower at first, but it's how lives actually change. The people who transform their wellness over years are the ones who kept doing this — one solid habit, then the next, then the next. Patient and certain.` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Health Is Yours`,
          paragraphs: [
            `Here's the most empowering truth: your health is YOURS to care for.`,
            `The habits, knowledge, and self-awareness you build now create a FOUNDATION that grows with you. You don't need to have it all figured out. Just keep making small choices toward who you're becoming.`,
          ],
          image: `/explorer-assets/wellness/l20-s6-health-is-yours.png`,
          imageCaption: `What you build now grows with you. The knowledge is yours. The agency is yours. The future is being built one small choice at a time — and you already know how.`,
          vocab: [
            { word: `agency`,         definition: `The power to make choices and take action in your own life. The knowledge that your daily choices genuinely shape your health and your future.`,
              audioPrompt: `Agency is the knowledge that your choices matter, {name} — that you are not just responding to things that happen to you, but actively shaping what happens next. Every good night's sleep, every time you reach out to someone you care about, every walk outside with your phone away — those are acts of agency. They're small, but they're real. And they add up. Your health is yours to care for, and you now know enough to actually do it. That's something worth holding on to.` },
            { word: `self-awareness`, definition: `Knowing yourself — how you feel, what you need, what helps or hinders you. Grows through practice and paying honest attention.`,
              audioPrompt: `Self-awareness is one of the greatest gifts you can give yourself, {name}. Knowing how you feel when you're sleep-deprived, what helps you manage stress, what kinds of movement energize you, what drains you — all of that is knowledge you can only get by paying attention over time. Terra believes this is something you've been building across every one of these twenty lessons. You know yourself better now. That matters for everything that comes next.` },
            { word: `foundation`,     definition: `The base everything else is built on. The habits you build now become the foundation supporting your health for the rest of your life.`,
              audioPrompt: `A foundation is what holds everything up, {name}. The habits you build now — consistent sleep, regular movement, good relationships, the ability to manage stress — these aren't just useful this year. They're the foundation your whole future health is built on. Terra has been thinking about this for a long time: what you do in these early years compounds in ways that are hard to fully see until later. But they're real. You are building something lasting right now.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `sustainable`,
              label: `🌱 Sustainable Wellness Habit (lasts over time)`,
              color: `#34D399`,
            },
            {
              id: `extreme`,
              label: `💥 Extreme Approach (hard to maintain)`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l20-g1`,
              image: `l20-game-1.png`,
              label: `Getting into a regular sleep routine and protecting it most nights.`,
              matchPhrase: `A consistent sleep routine is one of the highest-impact sustainable habits you can build — it supports every other area of wellness, and it compounds over time into a genuinely different quality of energy and focus.`,
              correctMatch: `sustainable`,
            },
            {
              id: `l20-g2`,
              image: `l20-game-2.png`,
              label: `Choosing movement you actually enjoy and making it a regular part of your week.`,
              matchPhrase: `Enjoyment is the most reliable predictor of whether you'll keep doing something. Movement you look forward to is infinitely more sustainable than exercise you dread — and it creates the same health benefits over time.`,
              correctMatch: `sustainable`,
            },
            {
              id: `l20-g3`,
              image: `l20-game-3.png`,
              label: `Deciding to change everything about how you live all at once, starting tomorrow.`,
              matchPhrase: `Changing everything at once overwhelms the systems that build habits, depletes willpower, and usually ends in giving up on all of it. Starting with one small change — done reliably — builds far more effectively.`,
              correctMatch: `extreme`,
            },
            {
              id: `l20-g4`,
              image: `l20-game-4.png`,
              label: `Setting such a rigid rule for yourself that any small slip feels like total failure.`,
              matchPhrase: `Perfectionism is the enemy of consistency. The goal is not a perfect record — it's a direction. Missing once is fine. What matters is getting back to it the next day.`,
              correctMatch: `extreme`,
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l20-q1`,
              format: `multiple-choice`,
              question: `Why is "sustainable" the most important word in long-term health?`,
              options: [
                `Because sustainable habits are easier to do and require less commitment`,
                `Because extreme approaches tend to create cycles of intensity and giving up — while consistent habits compound into lasting change over time`,
                `Because sustainable habits can be done without any effort or discipline`,
                `Because health goals should always be gradual rather than ambitious`,
              ],
              correctIndex: 1,
              explanation: `Extreme approaches — rigid rules, dramatic overhauls — often cycle through intensity, exhaustion, failure, and giving up. Sustainable habits, by contrast, are boring and consistent — and they compound. Over months and years, showing up consistently in every area of wellness adds up to a genuinely different quality of life. The goal is not the most intense approach; it's the one you can actually keep doing.`,
            },
            {
              id: `l20-q2`,
              format: `multiple-choice`,
              question: `How are different wellness areas connected to each other?`,
              options: [
                `They aren't — each area of wellness functions independently`,
                `Improving one area creates ripple effects in others — sleep affects stress, stress affects choices, choices affect energy, energy affects sleep`,
                `They only connect when you're already healthy in most areas`,
                `They connect through nutrition, which is the foundation all others depend on`,
              ],
              correctIndex: 1,
              explanation: `Wellness is a system, and systems respond to inputs anywhere in the loop. Poor sleep raises stress hormones, which affects food choices, energy, and movement — and the same loop runs in reverse. This means you don't need to fix everything at once. Starting with one area creates improvement in others, which creates momentum. Start where you have energy and let the ripple effects follow.`,
            },
            {
              id: `l20-q3`,
              format: `multiple-choice`,
              question: `What do people who thrive long-term tend to have in common?`,
              options: [
                `They started with the most dramatic possible changes and committed completely`,
                `They had perfect discipline and never missed a healthy habit`,
                `They built consistent, sustainable practices early and kept showing up even when it was imperfect`,
                `They focused only on the wellness areas that were most natural for them`,
              ],
              correctIndex: 2,
              explanation: `Research consistently shows that long-term thriving is not about intensity — it's about consistency. The people who maintain their health across decades are not the ones who did the most dramatic things. They're the ones who built reliable, sustainable habits, kept showing up even when it wasn't perfect, and made their health a consistent priority rather than an occasional project.`,
            },
            {
              id: `l20-q4`,
              format: `true-false`,
              question: `Improving one wellness area — like sleep or movement — creates ripple effects that improve other areas too, because they're all part of one connected system.`,
              correctAnswer: true,
              explanation: `True. Wellness areas are interconnected: better sleep improves stress management, which supports clearer thinking and better choices, which makes movement feel more achievable, which improves sleep quality. The loop runs in both directions. This is genuinely good news — you don't need to fix everything at once. A meaningful improvement in one area can set off a positive cascade across the whole system.`,
            },
            {
              id: `l20-q5`,
              format: `fill-blank`,
              question: `A wellness blueprint covers nutrition, movement, sleep, stress management, ___, mental health, and nature — all as one connected system.`,
              options: [
                `relationships`,
                `work`,
                `studies`,
                `sports`,
              ],
              correctIndex: 0,
              explanation: `Relationships are a core wellness area — they shape how you feel about yourself every day and are consistently found to be one of the strongest predictors of long-term wellbeing. A complete wellness blueprint includes all seven areas: nutrition, movement, sleep, stress management, relationships, mental health, and nature. None of these operate in isolation; all of them are interconnected.`,
            },
            {
              id: `l20-q6`,
              format: `multiple-choice`,
              question: `Why are the most effective wellness habits often described as "not dramatic"?`,
              options: [
                `Because dramatic habits are too expensive for most people to maintain`,
                `Because health goals should always be modest rather than ambitious`,
                `Because consistency over time matters more than intensity — simple habits done reliably compound into a genuinely different quality of life`,
                `Because dramatic habits are too attention-seeking and distract from the goal`,
              ],
              correctIndex: 2,
              explanation: `The power of habits comes from compounding — small actions, done reliably over a long time, add up to dramatic outcomes. A consistent sleep schedule, regular movement you enjoy, a reliable stress management practice — none of these sound dramatic. But built over years, they compound into resilience, energy, and health that people who chase dramatic approaches rarely achieve. Consistency is the quiet power behind every lasting result.`,
            },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Health professionals, researchers, and people who study long-term wellbeing consistently point to the same truth: the foundation of a healthy life is built in the habits of childhood and adolescence. The knowledge, awareness, and practices you build now do not disappear — they compound. You are, right now, laying the groundwork for the person you will be for decades to come.`,
          familyAdventure: `Share your wellness blueprints as a family. Each person reads what they wrote — where they are, what they want to improve, and what one small change they're going to try. Support each other without judgement. Check in in two weeks. This kind of shared commitment, done gently and honestly, is one of the most powerful things a family can do for each other's long-term health.`,
          creativePrompt: `Take twenty minutes to write your own personal wellness blueprint. For each of the seven areas — nutrition, movement, sleep, stress management, relationships, mental health, and nature — write one honest sentence about where you are now and one sentence about one small change you want to make. Then choose one area to start with this week. Just one. Keep it small enough to actually do.`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You've now completed the entire Life & Wellness journey — twenty lessons about how your body and mind work, and what they need to truly thrive. The knowledge you've built here is yours to carry for life. Every good night's sleep, every time you move your body, every meal that nourishes you, every time you reach out to someone you care about — it all adds up. Take care of yourself the way you've learned to, and share that care with the people around you. Terra is so proud to have walked every step of this path with you.`,
          badge: `wellness-architect`,
          badgeName: `Wellness Architect`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L20.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L20] Loaded: "My Wellness Blueprint" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l20-s1-map-from-knowing.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-s2-seven-areas.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-s3-everything-connected.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-s4-sustainable-extreme.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-s5-where-energy.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-s6-health-is-yours.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L20] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L20] One or more magazine assets missing'));
}
