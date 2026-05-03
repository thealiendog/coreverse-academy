// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L17 — Healthy Relationships
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L17 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-17',
      title:     `Healthy Relationships`,
      duration:  12,
      xpReward:  50,
      badge:     'relationship-wise',
      badgeName: 'Relationship Wise',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l17-welcome',
          type:     'welcome',
          headline: `Healthy Relationships`,
          subtitle: `The relationships in your life shape how you feel about yourself every single day — and understanding what a healthy relationship looks and feels like is one of the most valuable things you can know`,
          visual:   '/explorer-assets/wellness/l17-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l17-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What makes a relationship healthy`,
            body: `Healthy relationships — whether friendships, family connections, or romantic relationships — share the same core qualities. **Mutual respect**: both people treat each other with consideration, not contempt. **Trust**: you can rely on each other and feel safe being honest. **Honesty**: you can speak truthfully without fear of the reaction. **Support**: you genuinely want the other person to do well, and they want the same for you. **Equity**: neither person consistently carries all the emotional weight or makes all the decisions. **Independence**: both people can maintain their own interests, friendships, and sense of self — a healthy relationship adds to your life, it doesn't replace it. These qualities are not ideals — they're the baseline.`,
            image:   '/explorer-assets/wellness/l17-magazine-1.png',
            caption: `Respect, trust, honesty, support, equity, independence — the foundations of any healthy relationship`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l17-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Warning signs worth knowing`,
            body: `Not all difficult moments mean a relationship is unhealthy — conflict happens in every relationship. But some patterns are **warning signs worth paying attention to**: someone who tries to **control** what you do, who you see, or how you dress. Someone who consistently **disrespects** you — your opinions, your boundaries, your feelings. Someone who makes you regularly feel **guilty, afraid, or worthless**. Someone whose **jealousy blocks you from other friendships**. Someone who **pressures** you to do things you don't want to do. Someone who **humiliates** you in front of others. None of these are normal relationship friction. They are patterns that deserve to be recognised and responded to.`,
            image:   '/explorer-assets/wellness/l17-magazine-2.png',
            caption: `Control, disrespect, guilt, jealousy, pressure, humiliation — patterns that deserve recognition`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l17-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Boundaries: knowing your own limits`,
            body: `A **boundary** is a limit you set about what you're comfortable with — physically, emotionally, or in terms of your time and energy. Boundaries are not walls; they're a way of clearly communicating what you need. **You have the right to say no** — to physical contact you don't want, to situations that feel uncomfortable, to requests that cross a line for you. You don't owe anyone an explanation beyond "I'm not comfortable with that." Anyone who respects you will accept your no — even if they're disappointed. **Anyone who continues to pressure you after a clear no is not respecting you** — and that matters, regardless of who they are. Your boundaries are valid.`,
            image:   '/explorer-assets/wellness/l17-magazine-3.png',
            caption: `A boundary is a limit you set — and anyone who respects you will honour it`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l17-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Relationships and your sense of self`,
            body: `One of the most useful ways to evaluate a relationship is to ask: **how do I feel about myself when I'm around this person?** Healthy relationships make you feel **more fully yourself** — more confident, more understood, more capable. They give you energy. Unhealthy relationship patterns, over time, tend to do the opposite: they make you feel smaller, less confident, more uncertain about your own worth. If you **consistently feel worse about yourself** in a particular relationship — not occasionally, but as a pattern — that is a meaningful signal. It doesn't always mean cutting someone off; sometimes it means a conversation. But it always means **paying attention**. You deserve connections that build you up, not ones that wear you down.`,
            image:   '/explorer-assets/wellness/l17-magazine-4.png',
            caption: `Healthy relationships make you feel more fully yourself — consistently feeling smaller is a signal`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l17-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'healthy', label: `💚 Sign of a Healthy Relationship`,  color: '#34D399' },
              { id: 'notice',  label: `🚨 Worth Paying Attention To`,       color: '#F87171' },
            ],
            items: [
              {
                id:            'l17-g1',
                image:         'l17-game-1.png',
                label:         `A friend who celebrates your good news without making you feel like you should downplay it.`,
                correctBucket: 'healthy',
                matchPhrase:   `Genuine support means wanting good things for the other person — not competing, not minimising. A friend who celebrates your wins is showing you exactly what mutual support looks like.`,
              },
              {
                id:            'l17-g2',
                image:         'l17-game-2.png',
                label:         `Being able to say no to something and having it respected without drama or guilt-tripping.`,
                correctBucket: 'healthy',
                matchPhrase:   `Someone who accepts your no — even if they're disappointed — is showing you that they respect your boundaries. That's one of the clearest signs of a healthy relationship.`,
              },
              {
                id:            'l17-g3',
                image:         'l17-game-3.png',
                label:         `A person who only reaches out when they need something, then goes quiet the rest of the time.`,
                correctBucket: 'notice',
                matchPhrase:   `Relationships that only flow one way — where you're always giving and rarely receiving — are worth noticing. A healthy connection has some sense of balance and mutual care over time.`,
              },
              {
                id:            'l17-g4',
                image:         'l17-game-4.png',
                label:         `Someone who gets cold or upset whenever you spend time with other friends.`,
                correctBucket: 'notice',
                matchPhrase:   `Jealousy that blocks you from maintaining other friendships is a warning sign. Healthy relationships support your independence — they don't require you to give up the rest of your world to prove your loyalty.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l17-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l17-q1',
              format:       'mc',
              question:     `What is the key difference between a healthy and an unhealthy relationship pattern?`,
              options:      [
                `Healthy relationships never involve any conflict or disagreement`,
                `Healthy relationships involve mutual respect, trust, and support — unhealthy ones involve control, disrespect, or patterns that make you feel worse about yourself`,
                `Healthy relationships last longer than unhealthy ones`,
                `Healthy relationships only exist between people who have known each other for a long time`,
              ],
              correctIndex: 1,
              explanation:  `The difference is not whether conflict ever happens — it does in every relationship. The difference is whether the overall pattern is one of mutual respect, support, and trust, or one involving control, disrespect, guilt, fear, or consistent patterns that leave you feeling worse about yourself. Conflict can be worked through; patterns of disrespect are a different matter.`,
            },

            // Q2 — MC (source)
            {
              id:           'l17-q2',
              format:       'mc',
              question:     `What is a personal boundary?`,
              options:      [
                `A rule you set for others to follow whether they agree or not`,
                `A limit you set about what you're comfortable with — which anyone who respects you will honour`,
                `A wall that prevents you from getting close to anyone`,
                `A formal agreement about how a relationship works`,
              ],
              correctIndex: 1,
              explanation:  `A boundary is a limit you set about what you're comfortable with — not a demand or a wall, but a clear communication of what you need. You have the right to say no to anything that crosses that line, and you don't owe anyone a long explanation. The key signal: someone who respects you will accept your boundary, even if disappointed. Someone who continues to pressure you after a clear no is not respecting you.`,
            },

            // Q3 — MC (source)
            {
              id:           'l17-q3',
              format:       'mc',
              question:     `What should a healthy relationship consistently make you feel?`,
              options:      [
                `Grateful and lucky to have it, no matter how it makes you feel day-to-day`,
                `Occasionally happy but mostly uncertain about where you stand`,
                `Seen, valued, and safe to be exactly who you are`,
                `Challenged and pushed to be better than you currently are`,
              ],
              correctIndex: 2,
              explanation:  `Healthy relationships make you feel seen — like the other person really knows and accepts you. They make you feel valued — like your presence genuinely matters. And they make you feel safe to be yourself — without having to perform, shrink, or pretend. That doesn't mean every moment is perfect, but it should be the consistent experience of the relationship.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l17-q4',
              format:       'tf',
              question:     `A healthy relationship supports you being more fully yourself — if you consistently feel smaller and less confident around someone, that's a meaningful signal worth paying attention to.`,
              correctAnswer: true,
              explanation:  `True. How you feel about yourself when you're around someone is one of the most honest guides to relationship health. Healthy relationships add to your sense of self — they don't diminish it. Feeling occasionally insecure or having a difficult moment is normal. But a consistent pattern of feeling worse about yourself around a particular person is a signal that deserves attention, not explanation away.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l17-q5',
              format:       'fill-blank',
              question:     `A boundary is a ___ you set about what you're comfortable with — and anyone who respects you will honour it.`,
              options:      ['limit', 'wall', 'rule', 'distance'],
              correctIndex: 0,
              explanation:  `A boundary is a limit — not a wall that keeps everyone out, and not a rigid rule imposed on others. It's your clear communication about what you need and what you're comfortable with. Healthy relationships involve both people's limits being respected. Setting a boundary and having it honoured is a sign of mutual respect; having it ignored or pressured past is a warning sign.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l17-q6',
              format:       'mc',
              question:     `Why does a healthy relationship include both people maintaining their own friendships and interests?`,
              options:      [
                `Because spending time apart prevents arguments`,
                `Because healthy relationships add to your life rather than replacing it — requiring you to give up other friendships or interests is a warning sign`,
                `Because people need variety to stay interested in each other`,
                `Because it shows both people are independent enough not to need the relationship`,
              ],
              correctIndex: 1,
              explanation:  `Healthy relationships enrich your life — they don't consume it. Independence means both people continue to have their own friendships, interests, and sense of self outside the relationship. When someone requires you to give up other friendships or parts of your life as a condition of the relationship, that's a pattern of control — not closeness. A relationship that adds to who you are is fundamentally different from one that replaces who you are.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l17-realworld',
          type: 'real-world',
          content: {
            scenario:    `Relationship Check-In`,
            description: `Think about your closest relationships — friendships, family, anyone you spend a lot of time with. For each one, ask: do I feel more like myself around this person, or less? Do I feel respected? Can I be honest? You don't need to take any action — just notice. Awareness is always the first step.`,
            familyAdventure: `Have a family conversation about what healthy relationships look like to your family. What values matter most? What does respect look like in your household? You might also talk about a time when someone had to set a boundary and how it went. These conversations build the kind of relational awareness that protects people for life.`,
            realWorldConnection: `Relationship researchers consistently find that the quality of your close relationships is one of the strongest predictors of long-term wellbeing — more than income, achievement, or status. The skills you build now for recognising and nurturing healthy connections are investments that pay back across your entire life.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l17-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know what healthy relationships look and feel like — and what the warning signs are when something isn't right. That awareness is one of the most protective things you can carry through life. You deserve connections that make you feel seen, valued, and safe to be yourself. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L17.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L17] Loaded: "Healthy Relationships" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l17-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L17] One or more magazine assets missing'));
}
