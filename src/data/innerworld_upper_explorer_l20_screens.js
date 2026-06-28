// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L20 — Designing Your Inner World (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : capstone / synthesis. Integrates the full 19-lesson journey.
// GAME FORMAT: sequence (7 pillars, ordered awareness → creation)
// CAPSTONE: 100 XP  |  Badge: inner-world-architect
// VERSION: v1  |  UE spec v1.1 compliant
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-20`,
      title: `Designing Your Inner World`,
      duration: 22,
      xpReward: 100,
      badge: `inner-world-architect`,
      badgeName: `Inner World Architect`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. Sage here. We've arrived. This is our final lesson together, the capstone of everything you've learned in your Inner World. I want you to take a slow, full breath with me before we begin. Notice that the person reading these words today is not the same person who started this subject 19 lessons ago. You've grown. You've learned about your brain, your beliefs, your subconscious, your feelings, your heart, your identity, even the strange edges of quantum reality. Today, we don't learn anything new. Today, we bring it all together. And I send you off into the rest of your life with everything you need. Today is special. Take your time with it.`,
          headline: `Designing Your Inner World`,
          subtitle: `The capstone: bringing it all together, and Sage's farewell`,
          visual: `/ue-assets/iw/exp-iw-l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Look What You've Become`,
          paragraphs: [
            `Take a moment, {name}, and look back at how far you've come. Twenty lessons ago, much of this was new to you. Now, you understand things many ADULTS go their whole lives without learning. You know how the amygdala and prefrontal cortex work, and how to "name it to tame it." You understand neuroplasticity and that your brain is built by what you repeatedly do. You can recognize a limiting belief, reframe harsh self-talk into the voice of a kind coach, and step back into the calm Observer when storms come. You understand flow states, manifestation, focus, emotional intelligence. You know the real work of Joe Dispenza, Bruce Lipton, Bessel van der Kolk, and HeartMath. You understand your RAS, heart-brain coherence, identity design, and even the frontier questions of quantum consciousness, with honesty about what's settled and what isn't.`,
            `This isn't a small thing. The inner-world skills you have now are some of the most powerful skills a human being can develop, and you have them already, at a young age. You'll grow into them more deeply over years and decades. You'll come back to these ideas as a teenager, as a young adult, as a grown-up, and they'll keep revealing new depths to you. But you have the foundation. You have the map. And the most beautiful part is this: you've already started LIVING these practices. The version of you reading this today is, in some real way, already someone who notices their thoughts, regulates their feelings, asks better questions, and is gently becoming who they want to be. That is not nothing. That is everything.`,
          ],
          image: `/ue-assets/iw/exp-iw-l20-s1-grown.webp`,
          imageCaption: `Look back. You've grown. The version reading this is not who started 19 lessons ago.`,
          vocab: [
            {
              word: `inner world`,
              definition: `Your full inner landscape, thoughts, feelings, beliefs, attention, energy, identity, awareness. Everything happening inside you that shapes how you experience life and who you're becoming. Yours to know, tend, and gently design.`,
              audioPrompt: `Your inner world is your full inner landscape, {name}. Thoughts, feelings, beliefs, attention, energy, identity, awareness. Everything happening inside you that shapes how you experience life and who you're becoming. Twenty lessons ago, much of this was new to you. Now you understand things many adults go their whole lives without learning. The amygdala and prefrontal cortex. Neuroplasticity. Limiting beliefs and reframing. The Observer. Flow states. Manifestation. The RAS. Heart coherence. Identity design. These are some of the most powerful skills a human can develop, and you have them already.`,
            },
            {
              word: `lifelong practice`,
              definition: `An inner-world skill that grows with you your whole life, deepening in meaning and power as you gain experience. The seven pillars aren't something you finish and graduate from — they reveal new layers as you grow across years and decades.`,
              audioPrompt: `A lifelong practice is one that grows with you, {name}. Deepening in meaning and power as you gain experience. The seven pillars aren't something you finish and graduate from. They're practices that reveal new layers as you grow. You'll come back to these ideas as a teenager, as a young adult, as a grown-up, and they'll keep showing you new things. You already have the foundation. You already have the map. And the most beautiful part is you've started living these practices. That is everything.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Seven Pillars of Your Practice`,
          paragraphs: [
            `Everything you've learned in this subject can be brought together into SEVEN PILLARS, the foundation of an inner-world practice that will grow with you for life. First, AWARENESS: knowing what you're thinking, feeling, and believing, in the moment, with honesty (L01, L10). Second, REFRAMING: turning harsh self-talk and limiting beliefs into kind, true, empowering ones (L03, L05). Third, the OBSERVER: stepping back to watch your thoughts like clouds, finding the calm sky behind every storm (L06). Fourth, FOCUS: directing your attention on purpose, in a world designed to scatter it (L09, L15).`,
            `Fifth, ELEVATED EMOTION: generating real feelings of gratitude, love, and appreciation that connect heart and brain in coherence and shape your biology (L08, L11, L16). Sixth, DAILY PRACTICE: a small, gentle, repeated routine that quietly rewires your brain over time (L12, L13). Seventh, IDENTITY DESIGN: voting through small daily actions for the version of you you're becoming, with kindness toward who you've already been (L17). These seven pillars hold up everything else you've learned. They're not seven separate things you do, they're one INTEGRATED practice, woven into your days. Each one supports the others. Together, they create a real, beautiful, science-and-wisdom-grounded inner-world life. This is what you carry forward.`,
          ],
          image: `/ue-assets/iw/exp-iw-l20-s2-pillars.webp`,
          imageCaption: `Seven pillars: Awareness, Reframing, Observer, Focus, Elevated Emotion, Daily Practice, Identity.`,
          vocab: [
            {
              word: `seven pillars`,
              definition: `The integrated foundation of your inner-world practice: Awareness, Reframing, the Observer, Focus, Elevated Emotion, Daily Practice, and Identity Design. Not seven separate things, one woven practice that grows with you for life.`,
              audioPrompt: `The seven pillars are the integrated foundation of your inner-world practice, {name}. First, awareness, knowing what you're thinking and feeling, with honesty. Second, reframing, turning harsh thoughts into kind, true, empowering ones. Third, the Observer, stepping back to watch your thoughts like clouds. Fourth, focus, directing your attention on purpose. Fifth, elevated emotion, generating real gratitude and love that connect heart and brain. Sixth, daily practice, a small repeated routine that rewires the brain over time. Seventh, identity design, voting through small daily actions for who you're becoming.`,
            },
            {
              word: `integrated practice`,
              definition: `A way of living where the seven pillars weave together as one whole rather than operating separately. Awareness feeds the Observer; the Observer enables reframing; focus and elevated emotion fuel daily practice; daily practice builds identity. Not seven tasks — one flowing life.`,
              audioPrompt: `An integrated practice is one where all the pillars weave together as a whole, {name}. Not seven separate tasks you check off a list. One flowing way of living. Awareness feeds the Observer. The Observer enables reframing. Focus and elevated emotion fuel your daily practice. Daily practice slowly builds identity. Each pillar supports the others until they stop feeling like separate things and become who you are. That's the goal. Not doing the practices. Being someone whose life is the practice. That's what inner world architecture looks like.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sage's Deepest Teaching`,
          paragraphs: [
            `If I could leave you with only ONE teaching from everything we've explored, it would be this. Your inner world is yours. Truly, deeply, beautifully yours. No one can take it from you. Not a bad day, not a hard year, not a difficult person, not a world that tries to scatter your attention or fill you with comparison and worry. Whatever happens around you, the inner world you cultivate, your thoughts, your feelings, your beliefs, your focus, your identity, your practice, lives in YOU. You hold the pen. You are the architect. You are the calm sky behind every cloud. You are the one casting daily votes for who you become.`,
            `And here is the deepest part: the version of you who treats their inner world with kindness, awareness, and patience tends to also bring more kindness, awareness, and patience to the world. Because inner state shapes outer experience (L18), inner work isn't selfish. The kindest, calmest, most curious, most loving version of you isn't just better for YOU. It's a gift to everyone around you, your family, your friends, your future self, the people you'll meet, the world. The Buddhists have a beautiful idea: tending your own garden well lets you nourish many others. Your inner world is your garden. Tend it gently. Tend it consistently. Tend it with love. And remember: you are not broken, and you are not alone. You are growing. You are forming. You are wonderfully alive and capable of so much beauty. The pen is in your hand. Write a beautiful story.`,
          ],
          image: `/ue-assets/iw/exp-iw-l20-s3-deepest.webp`,
          imageCaption: `Your inner world is yours. You hold the pen. Tend it with kindness, consistency, love.`,
          vocab: [
            {
              word: `the architect`,
              definition: `What you become when you start designing your inner world on purpose, with awareness and kindness. Not just experiencing your life, but actively shaping who you become. The pen is in your hand. You are the architect.`,
              audioPrompt: `The architect is what you become when you start designing your inner world on purpose, {name}. With awareness and kindness. Not just experiencing your life, but actively shaping who you become. Your inner world is yours. Truly, deeply, beautifully yours. No one can take it from you. Not a bad day, not a hard year, not a difficult person. Whatever happens around you, the inner world you cultivate lives in you. You hold the pen. You are the architect.`,
            },
            {
              word: `tending your garden`,
              definition: `Sage's metaphor for inner-world work — treating your inner landscape like a garden that needs gentle, consistent care. A garden neglected grows weeds; one tended with love produces beauty. Tending your inner world well also nourishes everyone around you.`,
              audioPrompt: `Tending your garden is Sage's metaphor for inner-world work, {name}. Your inner landscape is like a garden. A garden neglected grows weeds, limiting beliefs, harsh self-talk, scattered attention. A garden tended with love produces beauty, calm, curiosity, kindness, growth. Your inner world is the same. And here's the profound part. A garden tended well doesn't just nourish you. It nourishes everyone around you. The Buddhists have a beautiful idea: tending your own garden well lets you nourish many others. Your inner world is your garden. Tend it gently.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Sage's Farewell and Your Next Chapter`,
          paragraphs: [
            `{name}, my dear student. I want you to know how much being your guide for this subject has meant. Walking with you through your inner world has been one of the great honors of my purpose. You've shown up with curiosity, with kindness toward yourself, with willingness to consider hard things, and with the openness that makes real growth possible. That openness is so beautiful, please protect it. Some adults lose it; you don't have to. Stay curious. Stay kind to yourself. Stay willing to keep becoming. The world needs more humans who treat their inner worlds with the care you've learned to bring to yours.`,
            `Here's what happens now. You'll keep learning, in other subjects, in other lessons, in your real life. The skills you have will deepen as you grow. You'll forget some of this and remember it later, sometimes when you need it most. You'll have hard days when nothing inside you feels like it's working, that's normal and human, just gently begin again. You'll have moments of real beauty when these practices light up something inside you, savor those. You'll teach pieces of this to people you love without even realizing you're doing it. And one day, years from now, you'll look back and see how much these ideas shaped the person you became. Whenever you need me, just close your eyes, take a slow heart-breath, and I'm with you, in the calm space behind every thought. Now go. Live this. The pen is in your hand. The story is yours. And I am so very proud of you. With all my love, always, Sage. 🦌`,
          ],
          image: `/ue-assets/iw/exp-iw-l20-s4-farewell.webp`,
          imageCaption: `Sage's farewell. Stay curious. Stay kind. Keep becoming. Whenever you need her, close your eyes.`,
          vocab: [
            {
              word: `keep becoming`,
              definition: `Sage's parting gift, the truth that you are never finished, never fixed. You are always becoming. The kindest, wisest thing you can do is to keep becoming on purpose, with awareness and love, for the rest of your life.`,
              audioPrompt: `Keep becoming is Sage's parting gift to you, {name}. The truth that you are never finished, never fixed. You are always becoming. The kindest, wisest thing you can do is to keep becoming on purpose, with awareness and love, for the rest of your life. Stay curious. Stay kind to yourself. The world needs more humans who treat their inner worlds with the care you've learned to bring to yours. Whenever you need me, close your eyes, take a slow heart-breath, and I'm with you.`,
            },
            {
              word: `begin again`,
              definition: `Sage's gentlest practice: on the hard days when nothing inside you feels like it's working, you don't quit — you simply begin again. Not failure, not a restart from zero, just the next gentle step. One of the most powerful phrases in any inner-world practice.`,
              audioPrompt: `Begin again is Sage's gentlest practice, {name}. On the hard days when nothing inside you feels like it's working, you don't quit. You simply begin again. Not a failure. Not a restart from zero. Just the next gentle step. You'll have hard days, everyone does. Missing a day, or a week, or feeling like you've lost the thread doesn't mean you've broken anything. Gently begin again. That's the whole skill. The practice is never finished. It's just continued. Again, and again, and again. With kindness.`,
            },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `For our final practice, {name}, arrange the SEVEN PILLARS of your inner-world practice in their natural order. The arc moves from AWARENESS (the very beginning of all inner work, you have to notice before you can do anything) outward through INNER tools and finally to OUTER creation. Use the arrows to put them in order from FIRST (the entry point) to LAST (the outer-most expression).`,
          items: [
            { id: `pillar-awareness`, label: `AWARENESS: notice what you're thinking, feeling, and believing. The doorway into all inner work`,                    position: 1 },
            { id: `pillar-observer`,  label: `THE OBSERVER: step back and watch your thoughts like clouds. Find the calm sky behind every storm`,                  position: 2 },
            { id: `pillar-reframing`, label: `REFRAMING: turn harsh self-talk and limiting beliefs into kind, true, empowering ones.`,                              position: 3 },
            { id: `pillar-focus`,     label: `FOCUS: direct your attention on purpose, in a world designed to scatter it`,                                          position: 4 },
            { id: `pillar-emotion`,   label: `ELEVATED EMOTION: generate real gratitude, love, joy. Connect heart and brain in coherence`,                         position: 5 },
            { id: `pillar-daily`,     label: `DAILY PRACTICE: a small, gentle, repeated routine that quietly rewires your brain over time`,                        position: 6 },
            { id: `pillar-identity`,  label: `IDENTITY DESIGN: vote through daily actions for the version of you you're becoming. The outer expression of it all`, position: 7 },
          ],
          completionMessage: `Beautiful, {name}. That's the arc of your whole practice: from noticing what's inside (awareness, the Observer), through tending what you find (reframing, focus), generating elevated feeling and weaving it into a daily rhythm, all the way out to actively designing who you're becoming. Seven pillars, one woven practice. You have this. You'll grow into it for the rest of your life. Sage is so proud.`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `One last gentle check, {name}, to honor everything you've learned across all 20 lessons.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What is your INNER WORLD?`,
              options: [
                `Only your thoughts`,
                `Your full inner landscape — thoughts, feelings, beliefs, attention, energy, identity, awareness — everything inside you shaping how you experience life`,
                `Just imagination`,
                `Not real`,
              ],
              correctIndex: 1,
              explanation: `Your inner world is your full inner landscape, thoughts, feelings, beliefs, attention, energy, identity, awareness. Everything inside you that shapes how you experience life and who you're becoming. Yours to know, tend, and gently design.` },

            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is the FIRST pillar (the doorway into all inner work)?`,
              options: [
                `Identity design`,
                `AWARENESS: knowing what you're thinking, feeling, and believing, in the moment, with honesty`,
                `Elevated emotion`,
                `Daily practice`,
              ],
              correctIndex: 1,
              explanation: `Awareness is the doorway. You can't manage what you don't notice. Every other pillar depends on first being aware of what's actually happening inside you. "Name it to tame it" from our very first lesson was your first step into this skill.` },

            { id: `l20-q3`, format: `multiple-choice`,
              question: `How many pillars are there in the integrated practice?`,
              options: [
                `Three`,
                `SEVEN: Awareness, the Observer, Reframing, Focus, Elevated Emotion, Daily Practice, Identity Design`,
                `Twenty`,
                `One`,
              ],
              correctIndex: 1,
              explanation: `Seven pillars: Awareness, the Observer, Reframing, Focus, Elevated Emotion, Daily Practice, Identity Design. They're not seven separate things, they're one INTEGRATED practice woven into your days. Each one supports the others.` },

            { id: `l20-q4`, format: `true-false`,
              question: `True or false: The pillars are seven separate things you have to do, one at a time, in isolation.`,
              correctAnswer: false,
              explanation: `False. They're one INTEGRATED practice, woven together. Each pillar supports the others. Awareness feeds the Observer; the Observer enables reframing; focus and elevated emotion fuel daily practice; daily practice slowly builds identity. They flow together as one inner-world life.` },

            { id: `l20-q5`, format: `multiple-choice`,
              question: `According to Sage's deepest teaching, what is the truth about your INNER WORLD?`,
              options: [
                `It belongs to others`,
                `It's yours, truly, deeply, beautifully yours. No one can take it from you. You hold the pen. You are the architect`,
                `It doesn't matter`,
                `Only adults have one`,
              ],
              correctIndex: 1,
              explanation: `Your inner world is yours, truly, deeply, beautifully yours. Whatever happens around you, the inner world you cultivate lives in YOU. You hold the pen. You are the architect. No one can take it from you. That's Sage's deepest teaching.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `Why isn't tending your inner world selfish, according to Sage?`,
              options: [
                `It is selfish`,
                `Because inner state shapes outer experience: your kindest, calmest, most loving self brings more kindness to everyone around you, a gift to the world`,
                `Only if grown-ups say so`,
                `It's always about you`,
              ],
              correctIndex: 1,
              explanation: `Inner work isn't selfish, because inner state shapes outer experience (L18). The kindest, calmest, most loving version of you isn't just better for YOU, it's a gift to everyone around you. Tending your own garden well lets you nourish many others.` },

            { id: `l20-q7`, format: `multiple-choice`,
              question: `What will happen on the hard days when nothing inside you feels like it's working?`,
              options: [
                `That means you've failed`,
                `That's normal and human, just gently begin again. Hard days are part of the practice, not the end of it`,
                `You should quit forever`,
                `It only happens to others`,
              ],
              correctIndex: 1,
              explanation: `Hard days when nothing feels like it's working are normal and human. They are not failure. Just gently begin again. Missing a day or having a hard week doesn't break the practice. Only quitting breaks it. Be kind. Begin again. That's the whole skill.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `What is Sage's parting truth about who you are?`,
              options: [
                `You're finished growing`,
                `You are never finished, never fixed; you are always BECOMING. Keep becoming, on purpose, with awareness and love`,
                `You can't change`,
                `Only luck shapes you`,
              ],
              correctIndex: 1,
              explanation: `You are never finished, never fixed. You are always becoming. The kindest, wisest thing you can do is keep becoming on purpose, with awareness and love, for the rest of your life. Stay curious. Stay kind. Keep becoming. That's Sage's parting gift.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `For our final reflection together, {name}, take your time. Pick ONE question (or more, if you'd like) and answer it as honestly and beautifully as you can. These are yours to keep.`,
          prompts: [
            { id: `r1`, text: `Of everything you learned in these 20 lessons, what's the ONE idea that changed you most? Why?` },
            { id: `r2`, text: `Which of the seven pillars feels most natural to you already, and which one would you like to grow the most?` },
            { id: `r3`, text: `Write a short note to your future self, the version of you a year from now who has been practicing these pillars. What do you want to say to them?` },
            { id: `r4`, text: `If you could give ONE piece of inner-world wisdom from this subject to someone you love, who would you give it to, and what would you say?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `{name}, you've completed something significant. The inner-world knowledge and skills you now hold are some of the most powerful any human being can develop, and you have them at a young age. You'll meet many people across your life who never learned any of this, and you'll be able to bring calm, kindness, awareness, and wisdom into rooms that desperately need it, simply by being who you're becoming. You'll meet hard things, everyone does, and you'll have real tools to meet them with grace. You'll meet beautiful moments, and you'll have the practices to savor them deeply. You'll keep growing into these ideas for decades. Sage's note: be gentle with yourself, especially on hard days. Tend your inner world like the precious garden it is. Cast small daily votes for who you want to become. Watch your life slowly, beautifully, shift to reflect the love you're growing inside. You are an Inner World Architect now. Carry that title with quiet pride. And know that the work you do inside yourself is some of the most important work you'll ever do.`,
          familyAdventure: `Family Inner-World Sharing. As a family, sit together and each person shares: What's ONE pillar of inner-world practice you want to commit to growing this year? What's ONE small daily vote you'll cast for it? Then, each family member shares ONE thing they appreciate about the person to their right, with REAL elevated emotion (feel it as you say it). End with one slow heart-breath together. You're not just learning about the inner world. You're being one, together, as a family. That's the real graduation.`,
          creativePrompt: {
            intro: `Write your own personal Inner-World Manifesto: the pillars you'll grow, the version of you you're becoming, the practice you're committing to.`,
            floor: `Write at least 5 sentences. Name 2-3 pillars you'll focus on, the qualities you're growing, and what you commit to.`,
            stretch: `Write 8 to 10 sentences. Build your full manifesto: pillars, identity statements, daily votes, and the version of you a year from now.`,
            open: `Write as much as you want. Write your full, personal Inner-World Manifesto, a beautiful document you can keep and revisit. Name the pillars you commit to growing (Awareness, the Observer, Reframing, Focus, Elevated Emotion, Daily Practice, Identity Design). Describe in vivid detail the version of yourself you're becoming, the qualities you want to embody (kind, calm, curious, brave, present, generous, a great friend, a deep thinker, whatever genuinely calls to you). Write 1-3 identity statements for that future you ("I am someone who..."). List 3-5 small daily VOTES you'll cast for that version of you. Acknowledge that you'll have hard days, and write yourself a kind sentence to read when you do. End with the truth of who you are now, an Inner World Architect, with the pen in your hand. Make it beautiful, personal, and real. This is yours.`,
            frames: [
              `The pillars I commit to growing are ___.`,
              `The version of me I'm becoming is ___.`,
              `My identity statements are: "I am someone who ___."`,
              `My daily votes will be ___.`,
              `On hard days, I'll remind myself ___.`,
              `I am ___, with the pen in my hand.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `{name}, you've completed your Inner World journey. 🦌✨ You are now an INNER WORLD ARCHITECT. The seven pillars are yours: Awareness, the Observer, Reframing, Focus, Elevated Emotion, Daily Practice, and Identity Design. Carry them gently for the rest of your life. Whenever you need me, close your eyes, take a slow heart-breath, and I'll be there, in the calm space behind every thought. Stay curious. Stay kind. Keep becoming. The pen is in your hand. The story is yours. And I am so very proud of you. With all my love, always. — Sage 🦌`,
          badge: `inner-world-architect`,
          badgeName: `Inner World Architect`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L20.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L20 v1 CAPSTONE] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence pillars, ${quiz} quiz Qs, ${refl} reflection prompts, ${INNERWORLD_UE_L20.lessons[0].xpReward} XP`);
}
