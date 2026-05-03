// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L11 — Trust: How to Build It and Keep It
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L11 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-11',
      title:     'Trust: How to Build It and Keep It',
      duration:  12,
      xpReward:  50,
      badge:     'trust-builder',
      badgeName: 'Trust Builder',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l11-welcome',
          type:     'welcome',
          headline: 'Trust: How to Build It and Keep It',
          subtitle: `Trust is built in drops and lost in buckets — the small choices matter most`,
          visual:   '/explorer-assets/leadership/l11-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l11-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What trust is made of`,
            body: `Trust researcher Charles Feltman describes trust as choosing to make something you value vulnerable to another person's actions. He identified four components that hold it together. **Sincerity** — you say what you mean and mean what you say. **Reliability** — you do what you say you'll do. **Competence** — you actually have the ability to follow through on what you've committed to. **Care** — you put other people's interests alongside your own, not just your own first. When any one of these breaks down, trust starts to erode — even if the other three are still strong.`,
            image:   '/explorer-assets/leadership/l11-magazine-1.png',
            caption: `Sincerity, reliability, competence, and care — all four matter`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l11-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `How trust is built`,
            body: `Trust isn't built through grand gestures. It's built through **small, consistent actions** over time. Showing up when you said you would. Doing what you said you'd do. Being honest even when it's uncomfortable. Admitting what you don't know instead of pretending. Being consistent between what you say and what you do. Caring about others' wellbeing, not just your own. Every time you do any of these things, you make a small deposit in the trust account. Over time, those deposits add up to something nobody can take away quickly.`,
            image:   '/explorer-assets/leadership/l11-magazine-2.png',
            caption: `Small consistent actions build what grand gestures never can`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l11-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `How trust is broken`,
            body: `Trust breaks in predictable ways: betraying a confidence (sharing something that was told to you privately), lying (even small ones erode trust more than people realise), inconsistency (being different behind someone's back than to their face), not following through on commitments, and prioritising your own interests when you said you wouldn't. Here's the key insight: trust is **asymmetric**. It takes far longer to build than to destroy. A friendship built over years can be shaken by one serious betrayal. This asymmetry is why maintaining trust is a daily practice — not something you earn once and keep forever.`,
            image:   '/explorer-assets/leadership/l11-magazine-3.png',
            caption: `Trust takes much longer to build than to break`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l11-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Rebuilding broken trust`,
            body: `Trust can be rebuilt after it's broken — but it takes time, consistency, and genuine change. The steps are: **acknowledge** what happened honestly, without minimising or making excuses; **understand the impact** it had on the other person — really listen; **apologise genuinely** with all three parts (what you did, real regret, commitment to change); and then **demonstrate change** through consistent new behaviour over time. Here's the hardest part: the other person gets to decide when trust is restored — not you. That's not unfair. It's how trust actually works. Some trust, once broken, may take a very long time to rebuild, which is exactly why protecting it matters so much in the first place.`,
            image:   '/explorer-assets/leadership/l11-magazine-4.png',
            caption: `Rebuilding trust takes time, consistency, and letting the other person lead the pace`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l11-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'builds', label: `🤝 Builds Trust`, color: '#34D399' },
              { id: 'breaks', label: `💔 Breaks Trust`, color: '#F87171' },
            ],
            items: [
              {
                id:            'l11-g1',
                image:         'l11-game-1.png',
                label:         `Showing up when you said you would, every single time.`,
                correctBucket: 'builds',
                matchPhrase:   `Reliability is one of the cornerstones of trust — every time you show up, you make a deposit.`,
              },
              {
                id:            'l11-g2',
                image:         'l11-game-2.png',
                label:         `Admitting to a friend that you don't actually know the answer, even though it's embarrassing.`,
                correctBucket: 'builds',
                matchPhrase:   `Honesty — even when it's uncomfortable — builds deeper trust than pretending you know.`,
              },
              {
                id:            'l11-g3',
                image:         'l11-game-3.png',
                label:         `Telling someone something a friend shared with you in private.`,
                correctBucket: 'breaks',
                matchPhrase:   `Betraying a confidence is one of the fastest ways to break trust — people need to know their words are safe with you.`,
              },
              {
                id:            'l11-g4',
                image:         'l11-game-4.png',
                label:         `Promising you'll help with something and then forgetting all about it.`,
                correctBucket: 'breaks',
                matchPhrase:   `Not following through on commitments erodes trust — even when it seems small at the time.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l11-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (replaced — conceptual)
            {
              id:           'l11-q1',
              format:       'mc',
              question:     `Which of these actions best builds trust between people?`,
              options:      [
                `Making one big grand gesture to show how much you care`,
                `Keeping small promises consistently over time`,
                `Telling people how trustworthy you are`,
                `Never admitting you made a mistake`,
              ],
              correctIndex: 1,
              explanation:  `Trust isn't built through grand gestures. It's built through small, reliable actions repeated over time — showing up, following through, and being honest even when it costs you something.`,
            },

            // Q2 — MC (source)
            {
              id:           'l11-q2',
              format:       'mc',
              question:     `How is trust built?`,
              options:      [
                `Through one grand gesture that proves your loyalty`,
                `By telling people you are trustworthy`,
                `Through small consistent actions over time — keeping promises, being honest, and caring about others`,
                `By never making a single mistake`,
              ],
              correctIndex: 2,
              explanation:  `Trust is earned through repeated small choices, not single grand moments. Every time you keep a promise, admit what you don't know, or show up when expected, you're building it.`,
            },

            // Q3 — MC (source)
            {
              id:           'l11-q3',
              format:       'mc',
              question:     `What must the person who broke trust do to rebuild it?`,
              options:      [
                `Give the other person a gift to show remorse`,
                `Simply promise never to do it again`,
                `Acknowledge what happened honestly, apologize genuinely, and demonstrate change through consistent new behavior over time`,
                `Wait for the other person to forgive them when they're ready`,
              ],
              correctIndex: 2,
              explanation:  `Rebuilding trust requires all three steps — honest acknowledgment, genuine apology, and demonstrated change over time. A promise alone isn't enough; consistent new behaviour is what actually restores trust.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l11-q4',
              format:       'tf',
              question:     `Trust takes far longer to build than it does to destroy — which is why the small, everyday choices matter so much.`,
              correctAnswer: true,
              explanation:  `True. Trust is asymmetric — built slowly through dozens of consistent actions, but capable of being shaken by a single serious betrayal. That's exactly why the small daily choices carry so much weight.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l11-q5',
              format:       'fill-blank',
              question:     `Trust is said to be built in ___ and lost in buckets — small actions add up, but a betrayal can undo a great deal quickly.`,
              options:      ['drops', 'bursts', 'moments', 'leaps'],
              correctIndex: 0,
              explanation:  `"Built in drops, lost in buckets" captures the asymmetry of trust — it accumulates slowly through small reliable actions, and can drain quickly through betrayal or inconsistency.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l11-q6',
              format:       'mc',
              question:     `Why does the person who broke trust not get to decide when it is restored?`,
              options:      [
                `Because they no longer have any say in the relationship`,
                `Because trust must be rebuilt through consistent new actions that the other person experiences over time`,
                `Because forgiveness takes exactly the same amount of time for everyone`,
                `Because the relationship is permanently changed`,
              ],
              correctIndex: 1,
              explanation:  `The person who broke trust can do everything right — acknowledge, apologise, change — but the other person has to actually experience that change over time before trust can return. That process can't be rushed.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l11-realworld',
          type: 'real-world',
          content: {
            scenario:    `Trust Inventory`,
            description: `Think of someone who trusts you. What have you done to earn that? Is there anything you've been inconsistent about that might be creating tiny cracks without you realising?`,
            familyAdventure: `Try a trust walk: one person is blindfolded and guided through a simple obstacle course in your home using only verbal instructions. Switch roles. Afterward, discuss: what made you feel safe or nervous? How does this connect to how trust works in everyday relationships?`,
            realWorldConnection: `Trust is the foundation of every team, every friendship, and every community. Doctors, teachers, coaches, and leaders in every field all point to trustworthiness as the quality that earns them the ability to help others.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l11-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that trust is built drop by drop — in the small choices you make every day when nobody is giving you a prize for it. That kind of steady reliability is one of the finest things a person can offer others. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L11.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L11] Loaded: "Trust: How to Build It and Keep It" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l11-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l11-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L11] One or more magazine assets missing'));
}
