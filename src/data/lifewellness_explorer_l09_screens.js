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
          headline: `Screens Aren't the Enemy`,
          paragraphs: [
            `Screens aren't going away. They're how we connect, create, and learn.`,
            `The real question isn't "should I avoid them?" but "what are they doing to my brain, and how do I use them in ways I actually feel good about?"`,
          ],
          image: `/explorer-assets/wellness/l09-s1-not-the-enemy.png`,
          imageCaption: `Screens aren't the problem. How you use them is. Understanding the difference puts you back in charge.`,
          vocab: [
            { word: `balanced`,  definition: `A measured approach to screens — not total avoidance, not unlimited use. Just thoughtful, conscious choice.`, audioPrompt: `Terra wants you to know there's a balanced position with screens, {name} — and it's not "never" or "always." It's "with awareness." Some screen time is genuinely valuable. Some is genuinely wasted. The skill is telling the difference and choosing accordingly. That kind of balance is more grown-up than any strict rule.` },
            { word: `conscious`, definition: `Aware of what you're doing and why. The opposite of automatic screen use — and the key to real control.`, audioPrompt: `Conscious screen use means you're the one deciding, {name} — not the platform, not the habit, not boredom. You picked up the screen for a reason, you used it for that reason, and you put it down when the reason was done. That's conscious. The opposite is drifting in and out without ever quite choosing. Big difference.` },
            { word: `choice`,    definition: `What you have when you understand the design. Instead of being managed by the platform, you stay in charge of the tool.`, audioPrompt: `Choice is what you protect by understanding how screens work, {name}. The platforms are designed by very smart people to keep you engaged — that's not a conspiracy, it's just business. Knowing that doesn't make screens evil. It just gives you back the power to choose deliberately instead of being managed by the design.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Screens Do to Attention`,
          paragraphs: [
            `Screens deliver constant novelty at a pace nothing in real life can match.`,
            `Once your brain is calibrated to that speed, slower activities — reading, conversation, being outside — start to feel boring. That's not a character flaw. It's training.`,
          ],
          image: `/explorer-assets/wellness/l09-s2-attention-and-screens.png`,
          imageCaption: `Heavy screen use trains your brain for speed. Then slower, deeper things feel boring by comparison. That's training, not a flaw.`,
          vocab: [
            { word: `novelty`,        definition: `Something new or different. Screens deliver constant novelty at a pace real life can rarely match.`, audioPrompt: `Novelty is what makes screens feel so compelling, {name}. Every scroll brings something new — a new image, a new video, a new notification. Your brain is naturally drawn to new information. Screens exploit that by delivering novelty at a pace nothing in real life can match. Once your brain is used to that speed, slower things — reading, conversations, being outside — can feel oddly underwhelming by comparison.` },
            { word: `attention span`, definition: `Your brain's ability to stay with one thing. Like a muscle — strengthened by practice, weakened by constant switching.`, audioPrompt: `Attention span is your brain's ability to stay with one thing, {name}. Think of it like a muscle — it grows with practice and weakens without it. Heavy passive screen use trains your brain for rapid switching between things, which makes sustained focus on slower activities progressively harder. That's not a character flaw. It's your brain responding to the environment it spends time in.` },
            { word: `stimulation`,    definition: `Input that activates your brain. Screens provide very high stimulation — which can make ordinary life feel flat by comparison.`, audioPrompt: `Stimulation isn't bad, {name} — your brain needs it. The question is what kind and at what pace. Screens deliver extremely high stimulation very fast. When your brain gets calibrated to that level, ordinary life — which runs at a naturally slower pace — can feel flat or boring by comparison. That contrast is what makes it hard to put the screen down.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Active vs Passive`,
          paragraphs: [
            `Not all screen time is the same.`,
            `ACTIVE: creating, learning, connecting, problem-solving. PASSIVE: endless scrolling, autoplay, watching without engaging. Time passes either way — but only active screen time builds something.`,
          ],
          image: `/explorer-assets/wellness/l09-s3-active-vs-passive.png`,
          imageCaption: `Active screen time leaves you with something — a skill, a connection, knowledge. Passive time just passes.`,
          vocab: [
            { word: `active`,  definition: `Screen use that creates, learns, connects, or solves problems. You're the one driving — and your brain is engaged.`, audioPrompt: `Active screen time is when you're the one driving, {name}. Creating something, learning something, having a real conversation, solving a problem. Your brain is engaged, challenged, and building. Coding, digital art, video calling someone you love, following a tutorial — these are active uses. They leave you with something you didn't have before.` },
            { word: `passive`, definition: `Mindless screen use that consumes without creating. Endless scrolling, autoplay, watching without engagement.`, audioPrompt: `Passive screen time is when the platform is driving, not you, {name}. Scroll, scroll, scroll — content just appearing without you choosing it, without building anything, without connecting meaningfully with anyone. Time passes, but nothing is created or learned. Occasional passive use is fine. The question is whether it's become the default.` },
            { word: `ratio`,   definition: `The proportion of active to passive time. Matters more than total hours on screens.`, audioPrompt: `It's not just how long you're on a screen that shapes how it affects you, {name} — it's the ratio of active to passive. Two hours creating and learning is very different from two hours scrolling. Terra believes the most useful question to ask isn't "how long?" but "what was I doing, and did I feel better or worse afterward?"` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Social Media's Hidden Mechanics`,
          paragraphs: [
            `Social media is designed to keep you coming back.`,
            `Likes deliver hits of social APPROVAL. Notifications keep you checking. You compare your full life to other people's CURATED highlight reels. Knowing the design helps you not get caught by it.`,
          ],
          image: `/explorer-assets/wellness/l09-s4-social-media-design.png`,
          imageCaption: `Likes. Notifications. Highlight reels. Each one engineered. Knowing the design doesn't make you immune — but it does break the spell.`,
          vocab: [
            { word: `approval`,   definition: `Validation from others. What likes and notifications deliver in small doses — activating reward circuits and driving more checking.`, audioPrompt: `Social approval feels good to every human brain, {name} — we're wired for it. Platforms are designed knowing that, building in likes and notifications that deliver small hits of approval and keep you checking back for more. Understanding that design doesn't make you immune to it. But it does help you see it clearly, and choose how much weight to give it.` },
            { word: `curated`,    definition: `Carefully selected and edited to look its best. What people share on social media — not the full range of their experience.`, audioPrompt: `What you see on someone's profile is curated, {name} — the best photos, the exciting moments, the achievements worth posting. Nobody shares the boring Tuesday or the hard week. When you scroll through curated highlight reels and compare them to your unedited daily life, the comparison is almost always going to make your life look less impressive. That's the design, not the reality.` },
            { word: `comparison`, definition: `Measuring yourself against others. Amplified unfairly by social media — your full life against their best moments.`, audioPrompt: `Social comparison is something humans have always done, {name} — but social media makes it almost unavoidable, and it stacks the comparison unfairly against you. You're comparing your whole life, including the hard and ordinary parts, to someone else's carefully chosen, often edited best moments. That's not an honest comparison. Knowing it's happening is the first step to not letting it land so hard.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Notice How You Feel`,
          paragraphs: [
            `The most powerful tool isn't a strict rule. It's AWARENESS.`,
            `Notice how you feel BEFORE picking up a screen. DURING using it. AFTER putting it down. When you actually pay attention, you naturally start making different choices.`,
          ],
          image: `/explorer-assets/wellness/l09-s5-notice-how-you-feel.png`,
          imageCaption: `Rules can be broken. Awareness travels with you. Noticing how you feel changes decisions from the inside.`,
          vocab: [
            { word: `awareness`, definition: `Paying attention to what you're actually doing and how it makes you feel. The most powerful screen-management tool there is.`, audioPrompt: `Awareness is the superpower here, {name}. Noticing how you feel before picking up a screen, what you're actually doing while on it, and how you feel when you put it down — that noticing is what keeps you in control. Rules can be broken. Awareness is something you carry with you. It changes decisions from the inside.` },
            { word: `intention`, definition: `Choosing on purpose vs picking up automatically. The difference between conscious use and habit.`, audioPrompt: `Intention is the difference between choosing and drifting, {name}. "I'm going to video call my friend" is intention. Picking up your phone because it was there and you were bored is automatic. Both lead to screen time — but only one leaves you feeling like you were in control. Building the habit of asking "why am I picking this up?" changes everything.` },
            { word: `check-in`,  definition: `A brief moment of asking yourself how you're feeling. Before, during, and after a screen session — quietly, without judgment.`, audioPrompt: `A check-in is just a brief pause to notice, {name} — how am I feeling right now? Energized? Bored? Anxious? Restless? Doing that before a screen session, once during, and once after will teach you more about your own patterns than any rule could. Three short check-ins, repeated, build the awareness that genuinely changes how you use screens.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Build New Defaults`,
          paragraphs: [
            `For many people, screens have become the default for every moment of boredom or transition.`,
            `Build new defaults: phones out of bedrooms at night. Screen-free meals. App timers. Reach for a book or go outside first. Small changes, real difference.`,
          ],
          image: `/explorer-assets/wellness/l09-s6-new-defaults.png`,
          imageCaption: `Defaults are powerful because they run on habit. Designing new ones means screens stop being the answer to every quiet moment.`,
          vocab: [
            { word: `default`,     definition: `What you do without thinking. For many people, screens have become the default for every moment of boredom — but defaults can be redesigned.`, audioPrompt: `A default is what you do when you're not deciding, {name} — and for many people, screens have become the default for every moment of boredom, transition, or discomfort. Building healthy habits means designing new defaults: reach for a book, go outside, call someone. Not rules, just new automatic choices that you set up deliberately.` },
            { word: `environment`, definition: `The physical setup around you. Affects screen use without requiring willpower — phone in another room is harder to scroll.`, audioPrompt: `Environment is one of the most underrated tools for changing screen habits, {name}. A phone in another room is harder to scroll than one on your bedside table. A book within arm's reach is more likely to get picked up. You don't need to white-knuckle your way to better habits — you can just rearrange the environment so the better choice becomes the easier one.` },
            { word: `substitute`,  definition: `An alternative activity ready to step in when you reach for a screen out of boredom. The replacement that makes new defaults possible.`, audioPrompt: `A substitute is what you reach for INSTEAD, {name}. Bored? Pick up a book. Restless? Go outside. Lonely? Call someone. The substitute matters because just trying to "use screens less" without something else to do almost always fails. The new behavior fills the same need the old one did — and that's what makes it stick.` },
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
    fetch('/explorer-assets/wellness/l09-s1-not-the-enemy.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-s2-attention-and-screens.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-s3-active-vs-passive.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-s4-social-media-design.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-s5-notice-how-you-feel.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-s6-new-defaults.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L09] One or more magazine assets missing'));
}
