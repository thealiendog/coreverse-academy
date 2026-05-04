// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L09 — Screen Time and Your Brain
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L09 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-09`,
      title:     `Screen Time and Your Brain`,
      duration:  12,
      xpReward:  50,
      badge:     `screen-conscious`,
      badgeName: `Screen Conscious`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Let's be honest about something, {name}: screens are not going away. Phones, tablets, laptops — they're part of life, part of how we connect and create and learn. The question is never really "should I avoid screens?" The question is: what does screen time actually do to your brain, and how can you use that knowledge to make choices you actually feel good about? Today we're going to look at the science — what happens in your brain during different kinds of screen use, how it affects sleep and attention, and what the research says about using technology in a way that serves you rather than the other way around.`,
          headline: `Screen Time and Your Brain`,
          subtitle: `Screens aren't the problem — it's how you use them that matters. Understanding that gives you real control`,
          visual: `/explorer-assets/wellness/l09-welcome.png`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How screens affect attention`,
          paragraphs: [
            `Screens are designed to deliver **constant novelty** — new content, new notifications, new stimulation — at a pace no real life can match. When you're used to this pace, slower activities (reading, conversation, being in nature) can feel boring by comparison. Your attention span has been calibrated for speed. Research shows that heavy screen users develop shorter attention spans and more difficulty sustaining focus on a single task. This affects how well you learn, how deeply you connect with people, and your ability to engage with the slower, more rewarding parts of life — the ones that aren't optimised for constant novelty.`,
          ],
          image: `/explorer-assets/wellness/l09-magazine-1.png`,
          imageCaption: `Screens deliver constant novelty — which can make slower, deeper activities feel harder to enjoy`,
          vocab: [
            { word: `novelty`, definition: `Something new or different — screens deliver constant novelty through new content, new notifications, and new stimulation at a pace that everyday life rarely matches.`, audioPrompt: `Novelty is what makes screens feel so compelling, {name}. Every scroll brings something new — a new image, a new video, a new notification. Your brain is naturally drawn to new information. Screens exploit that by delivering novelty at a pace nothing in real life can match. Once your brain is used to that speed, slower things — reading, conversations, being outside — can feel oddly underwhelming by comparison.` },
            { word: `attention span`, definition: `The length of time you can focus on a single task — which research shows can shorten with heavy passive screen use as the brain adapts to rapid stimulation.`, audioPrompt: `Attention span is your brain's ability to stay with one thing, {name}. Think of it like a muscle — it grows with practice and weakens without it. Heavy passive screen use trains your brain for rapid switching between things, which makes sustained focus on slower activities progressively harder. That's not a character flaw. It's your brain responding to the environment it spends time in.` },
            { word: `stimulation`, definition: `Input that activates your brain — screens provide very high levels of rapid stimulation, which can make lower-stimulation activities feel less engaging by comparison.`, audioPrompt: `Stimulation isn't bad, {name} — your brain needs it. The question is what kind and at what pace. Screens deliver extremely high stimulation very fast. When your brain gets calibrated to that level, ordinary life — which runs at a naturally slower pace — can feel flat or boring by comparison. That contrast is what makes it hard to put the screen down.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Active vs passive screen time`,
          paragraphs: [
            `Not all screen time is equal. **Active screen time** involves creating, learning, communicating, or solving problems: coding, video editing, digital art, learning through an app, video calling family, or playing strategic games. **Passive screen time** is mindless consumption: endless scrolling, autoplay videos, watching others play games without any interaction. Active use develops real skills and provides genuine value. Passive use delivers the sensation of entertainment without the substance — time passes, but nothing is built or learned. **The ratio of active to passive matters more than the total amount of time.**`,
          ],
          image: `/explorer-assets/wellness/l09-magazine-2.png`,
          imageCaption: `Active screen time builds something — passive screen time consumes without creating. The ratio is what matters`,
          vocab: [
            { word: `active`, definition: `Screen use that involves creating, learning, communicating, or solving problems — the kind that builds real skills or meaningful connections.`, audioPrompt: `Active screen time is when you're the one driving, {name}. Creating something, learning something, having a real conversation, solving a problem. Your brain is engaged, challenged, and building. Coding, digital art, video calling someone you love, following a tutorial — these are active uses. They leave you with something you didn't have before.` },
            { word: `passive`, definition: `Mindless screen use that consumes without creating — like endless scrolling or watching videos without purpose or engagement.`, audioPrompt: `Passive screen time is when the platform is driving, not you, {name}. Scroll, scroll, scroll — content just appearing without you choosing it, without building anything, without connecting meaningfully with anyone. Time passes, but nothing is created or learned. Occasional passive use is fine. The question is whether it's become the default.` },
            { word: `ratio`, definition: `The proportion of one thing relative to another — in screen use, the ratio of active to passive time matters more than the total hours spent on screens.`, audioPrompt: `It's not just how long you're on a screen that shapes how it affects you, {name} — it's the ratio of active to passive. Two hours creating and learning is very different from two hours scrolling. Terra believes the most useful question to ask isn't "how long?" but "what was I doing, and did I feel better or worse afterward?"` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Social media and the developing brain`,
          paragraphs: [
            `Social media platforms are particularly impactful on young developing brains. The **like system** activates dopamine reward circuits — every notification creates a small hit of social approval. This can create approval-seeking behaviour and anxiety when posts don't get responses. **Social comparison** — seeing curated highlight reels of other people's lives — consistently decreases wellbeing, because you're comparing your full experience (including the hard parts) to someone else's edited best moments. Research has linked heavy social media use in young people to higher rates of anxiety and loneliness — understanding why these platforms are designed the way they are helps you use them more intentionally.`,
          ],
          image: `/explorer-assets/wellness/l09-magazine-3.png`,
          imageCaption: `Likes, notifications, highlight reels — understanding how these work puts you back in control`,
          vocab: [
            { word: `social comparison`, definition: `The act of measuring yourself against others — amplified by social media, where you compare your full experience to curated highlight reels of other people's best moments.`, audioPrompt: `Social comparison is something humans have always done, {name} — but social media makes it almost unavoidable, and it stacks the comparison unfairly against you. You're comparing your whole life, including the hard and ordinary parts, to someone else's carefully chosen, often edited best moments. That's not an honest comparison. Knowing it's happening is the first step to not letting it land so hard.` },
            { word: `approval`, definition: `Validation from others — what likes, comments, and notifications deliver in small doses, activating the brain's reward system and driving the urge to seek more.`, audioPrompt: `Social approval feels good to every human brain, {name} — we're wired for it. Platforms are designed knowing that, building in likes and notifications that deliver small hits of approval and keep you checking back for more. Understanding that design doesn't make you immune to it. But it does help you see it clearly, and choose how much weight to give it.` },
            { word: `curated`, definition: `Carefully selected and edited to look its best — what people share on social media is curated, showing highlights rather than the full range of their experience.`, audioPrompt: `What you see on someone's profile is curated, {name} — the best photos, the exciting moments, the achievements worth posting. Nobody shares the boring Tuesday or the hard week. When you scroll through curated highlight reels and compare them to your unedited daily life, the comparison is almost always going to make your life look less impressive. That's the design, not the reality.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building healthy screen habits`,
          paragraphs: [
            `Practical healthy screen habits: set **specific screen-free times** — meals, one hour before bed, the first hour after waking. Use **app timers** to prevent endless use without deciding to keep going. Keep **phones out of bedrooms at night**. Front-load your day with non-screen activities so screens don't fill time by default. Most importantly: **notice how you feel before, during, and after different types of screen use** — this awareness is what keeps you in control. The goal isn't to eliminate screens. It's to stay conscious about how and why you're using them, rather than defaulting to automatic use without thinking.`,
          ],
          image: `/explorer-assets/wellness/l09-magazine-4.png`,
          imageCaption: `Screen-free times, app timers, phones out of bedrooms — small habits that keep you in control`,
          vocab: [
            { word: `awareness`, definition: `Conscious attention to what you're doing and why — the most powerful tool for building a healthier relationship with screens, more effective than any strict rule.`, audioPrompt: `Awareness is the superpower here, {name}. Noticing how you feel before picking up a screen, what you're actually doing while on it, and how you feel when you put it down — that noticing is what keeps you in control. Rules can be broken. Awareness is something you carry with you. It changes decisions from the inside.` },
            { word: `intention`, definition: `Choosing to use a screen for a specific purpose rather than picking it up by default — what separates conscious screen use from automatic habit.`, audioPrompt: `Intention is the difference between choosing and drifting, {name}. "I'm going to video call my friend" is intention. Picking up your phone because it was there and you were bored is automatic. Both lead to screen time — but only one leaves you feeling like you were in control. Building the habit of asking "why am I picking this up?" changes everything.` },
            { word: `default`, definition: `Your automatic behavior when you're not making a conscious choice — and building healthy screen habits means changing what your default behavior looks like.`, audioPrompt: `A default is what you do when you're not deciding, {name} — and for many people, screens have become the default for every moment of boredom, transition, or discomfort. Building healthy habits means designing new defaults: reach for a book, go outside, call someone. Not rules, just new automatic choices that you set up deliberately.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `active`,
              label: `🧠 Active Screen Time (creates, learns, or connects)`,
              color: `#34D399`,
            },
            {
              id: `passive`,
              label: `📺 Passive Screen Time (mindless consumption)`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l09-g1`,
              image: `l09-game-1.png`,
              label: `Following a tutorial to build something new in a game or creative app.`,
              matchPhrase: `Creating and learning through a screen is building a real skill — your brain is engaged, challenged, and growing.`,
              correctMatch: `active`,
            },
            {
              id: `l09-g2`,
              image: `l09-game-2.png`,
              label: `Video calling a friend or family member to have a real conversation.`,
              matchPhrase: `Using a screen to connect meaningfully with someone is exactly what technology is good for — this is active, purposeful use.`,
              correctMatch: `active`,
            },
            {
              id: `l09-g3`,
              image: `l09-game-3.png`,
              label: `Scrolling endlessly through a social feed without any particular purpose.`,
              matchPhrase: `When there's no intention behind the scroll, the platform is in control — not you. Time passes, but nothing is built or gained.`,
              correctMatch: `passive`,
            },
            {
              id: `l09-g4`,
              image: `l09-game-4.png`,
              label: `Watching someone else play a game for two hours without ever playing yourself.`,
              matchPhrase: `There's nothing inherently wrong with this occasionally — but if it's the default, your brain is consuming without creating, connecting, or learning.`,
              correctMatch: `passive`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l09-q1`,
              format: `multiple-choice`,
              question: `What does heavy passive screen use do to your attention span?`,
              options: [
                `It improves multitasking ability over time`,
                `It calibrates the brain for rapid stimulation, making slower activities feel boring and reducing ability to sustain focus`,
                `It has no effect on attention — only the content matters`,
                `It increases attention for screens but not for other activities`,
              ],
              correctIndex: 1,
              explanation: `Screens are engineered to deliver novelty at a pace nothing else in real life can match. When your brain adapts to that pace, slower activities — reading, conversation, sitting outside — start to feel under-stimulating by comparison. Attention span shortens not because something is wrong with you, but because the tool has calibrated your brain for speed.`,
            },
            {
              id: `l09-q2`,
              format: `multiple-choice`,
              question: `What is the difference between active and passive screen time?`,
              options: [
                `Active is educational; passive is entertainment`,
                `Active involves creating, learning, or solving problems; passive is mindless consumption without purpose`,
                `Active is on a computer; passive is on a phone`,
                `Active requires more focus; passive is fine in small amounts`,
              ],
              correctIndex: 1,
              explanation: `The distinction isn't about the device or the topic — it's about whether you're building something, learning something, or connecting meaningfully with someone. Active screen time leaves you with a skill, a connection, or knowledge. Passive screen time passes time without creating anything.`,
            },
            {
              id: `l09-q3`,
              format: `multiple-choice`,
              question: `Why does social media comparison often decrease wellbeing?`,
              options: [
                `Social media shows everyone looking more attractive than they do in real life`,
                `People post curated highlight reels, making others' lives look perfect compared to your full experience including hard moments`,
                `Following more accounts exposes you to more negative content overall`,
                `Social media algorithms show you posts from people who are more successful than you`,
              ],
              correctIndex: 1,
              explanation: `What you see on social media is a highlight reel — the best moments, carefully chosen and often edited. You're comparing that to your full life, including the ordinary and difficult parts. This comparison is almost always unfair to yourself, and understanding why it happens is the first step to not letting it affect how you feel about your own life.`,
            },
            {
              id: `l09-q4`,
              format: `true-false`,
              question: `Not all screen time is the same — using a screen to create, learn, or connect is very different from mindless scrolling, and your brain responds differently to each.`,
              correctAnswer: true,
              explanation: `True. The research distinguishes clearly between active and passive screen time. Active use — creating, learning, connecting with purpose — engages the brain in ways that build skills and provide genuine value. Passive use activates reward circuits without building anything. What matters is how you're using screens, not just how long.`,
            },
            {
              id: `l09-q5`,
              format: `fill-blank`,
              question: `Social media platforms are designed to deliver social ___ — likes, comments, notifications — that keep your brain coming back for more.`,
              options: [
                `approval`,
                `pressure`,
                `anxiety`,
                `content`,
              ],
              correctIndex: 0,
              explanation: `Every like, comment, and notification delivers a small hit of social approval — activating the same dopamine reward circuits that respond to other forms of social recognition. Platforms are designed this way deliberately, because approval-seeking behaviour drives engagement. Knowing this doesn't make you immune to it, but it helps you see it clearly.`,
            },
            {
              id: `l09-q6`,
              format: `multiple-choice`,
              question: `What is the most powerful thing you can do to build a healthier relationship with screens?`,
              options: [
                `Set a timer for exactly one hour of screen time per day`,
                `Only use screens for school and never for entertainment`,
                `Notice how you feel before, during, and after different types of screen use — awareness is what keeps you in control`,
                `Delete all social media accounts permanently`,
              ],
              correctIndex: 2,
              explanation: `The most powerful tool isn't a strict rule — it's awareness. When you notice how you feel after 30 minutes of scrolling versus 30 minutes of creating or connecting, you naturally start making different choices. That awareness is what keeps you the one in control of the tool, rather than the tool controlling you.`,
            },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Technology designers, researchers, and educators all distinguish between active and passive screen use. The most effective digital literacy programmes teach awareness of how and why you're using screens — not just how long. You're building exactly that skill.`,
          familyAdventure: `Do a 24-hour screen audit together as a family. Everyone tracks every screen interaction — work and school count too. At the end, share: total time, ratio of active to passive, most valuable screen use, most wasteful. Agree on one habit change to try for a week.`,
          creativePrompt: `For one day, after each screen session notice whether it felt active or passive — no judgement, just notice. Did you feel energised, neutral, or flat afterwards? That noticing is more powerful than any rule.`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that screens aren't the problem — it's how you use them that matters. When you choose active over passive, and stay aware of why you're picking up a screen, you stay in control of the tool instead of the other way around. Terra is so proud to walk this path with you.`,
          badge: `screen-conscious`,
          badgeName: `Screen Conscious`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L09.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L09] Loaded: "Screen Time and Your Brain" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l09-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L09] One or more magazine assets missing'));
}
