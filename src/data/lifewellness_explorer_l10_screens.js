// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L10 — Friendship and Social Health
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L10 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-10',
      title:     'Friendship and Social Health',
      duration:  12,
      xpReward:  50,
      badge:     'friend-builder',
      badgeName: 'Friend Builder',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l10-welcome',
          type:     'welcome',
          headline: 'Friendship and Social Health',
          subtitle: `Strong friendships are one of the most powerful forces in a human life — and like all living things, they grow with care and attention`,
          visual:   '/explorer-assets/wellness/l10-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l10-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Why friendships matter so much`,
            body: `The longest-running study on human happiness ever conducted — tracking people for over 80 years — found that the **single most important factor in long-term health and happiness was the quality of close relationships**. Not wealth, not fame, not achievement — relationships. People with strong social connections live longer, recover from illness faster, experience less cognitive decline as they age, and consistently report higher happiness. Loneliness, on the other hand, activates the **same brain regions as physical pain**. Social connection is not a nice extra — it's a fundamental human need.`,
            image:   '/explorer-assets/wellness/l10-magazine-1.png',
            caption: `Decades of research agree: the quality of your relationships is the biggest factor in long-term happiness`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l10-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `What makes a good friend`,
            body: `Research on friendship consistently identifies the same qualities. **Reliability** — they show up when they said they would. **Honesty** — they tell you the truth, kindly. **Reciprocity** — they're as interested in your life as you are in theirs. **Support** — they're there when things are hard, not just when things are easy. **Consistency** — they're the same person in private as in public. Friendships where these qualities are missing often feel **draining rather than energising** — that's usually a sign the relationship isn't balanced. The most sustaining friendships are ones where both people genuinely show up for each other.`,
            image:   '/explorer-assets/wellness/l10-magazine-2.png',
            caption: `Reliability, honesty, reciprocity, support, consistency — these are what make friendship feel safe`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l10-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `How to build real friendships`,
            body: `Research by psychologist Robin Dunbar found that close friendships require **regular in-person interaction and shared experiences** — you can't build deep friendship purely online. The recipe for building friendship: **proximity** (spend time in the same places), **repetition** (see each other regularly), **vulnerability** (share something real, not just surface topics), and **reciprocity** (both people invest). The single biggest friendship-builder is also the simplest: **show genuine interest in the other person's life, remember what they told you, and ask about it later**. This one habit communicates care more powerfully than almost anything else.`,
            image:   '/explorer-assets/wellness/l10-magazine-3.png',
            caption: `Proximity, repetition, vulnerability, reciprocity — and genuine interest in the other person's life`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l10-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Navigating friendship challenges`,
            body: `Friendships hit bumps. Some common ones: a friend changes and you grow apart, a friend says something hurtful, a third person causes conflict between friends, a friend treats you differently when others are around. These situations are normal — almost every close friendship experiences them. The friendships that survive these moments often become stronger for it. The key skills: **address issues directly and privately** rather than through other people, **use I-statements** ("I felt hurt when..."), **give people the benefit of the doubt** before assuming bad intent, and know that **not every friendship is meant to last forever** — and that's okay too.`,
            image:   '/explorer-assets/wellness/l10-magazine-4.png',
            caption: `Every close friendship hits bumps — addressing them directly and privately is what lets them survive`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l10-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'quality',    label: `💛 Quality Friendship Habit (shows up and gives back)`, color: '#34D399' },
              { id: 'one-sided',  label: `↔️ One-Sided Friendship Habit (takes without giving)`,  color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l10-g1',
                image:         'l10-game-1.png',
                label:         `Remembering something your friend mentioned last week and asking how it turned out.`,
                correctBucket: 'quality',
                matchPhrase:   `This small habit — remembering and following up — is one of the most powerful signals that you genuinely care about someone's life, not just your own.`,
              },
              {
                id:            'l10-g2',
                image:         'l10-game-2.png',
                label:         `Showing up for a friend who's going through something hard, even when it's not convenient.`,
                correctBucket: 'quality',
                matchPhrase:   `Being there in hard moments — not just easy ones — is what separates a real friendship from a convenient one.`,
              },
              {
                id:            'l10-g3',
                image:         'l10-game-3.png',
                label:         `Only reaching out to a friend when you need something, and staying quiet the rest of the time.`,
                correctBucket: 'one-sided',
                matchPhrase:   `Friendships need to flow both ways — a connection where one person only receives without giving back gradually loses its foundation.`,
              },
              {
                id:            'l10-g4',
                image:         'l10-game-4.png',
                label:         `Being warm and friendly to someone when you're alone, but ignoring them when others are around.`,
                correctBucket: 'one-sided',
                matchPhrase:   `Consistency is one of the core qualities of a real friend — behaving differently depending on who's watching makes the friendship feel unsafe.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l10-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (replaced stat-recall)
            {
              id:           'l10-q1',
              format:       'mc',
              question:     `What does research consistently show about strong social connections and health?`,
              options:      [
                `Social connection is beneficial but has no measurable effect on physical health`,
                `People with strong friendships are slightly happier but live the same length of life`,
                `Strong social connections are linked to longer life, faster recovery from illness, and significantly higher happiness`,
                `The quality of friendships only affects mental health, not physical health`,
              ],
              correctIndex: 2,
              explanation:  `The research on this is among the most consistent in all of human health science. Strong, high-quality social connections are linked to longer lifespans, faster recovery from illness, lower rates of cognitive decline, and higher self-reported happiness. Loneliness, on the other hand, activates the same brain regions as physical pain. Relationships are not optional extras — they're foundational.`,
            },

            // Q2 — MC (replaced list-recall)
            {
              id:           'l10-q2',
              format:       'mc',
              question:     `What is the most reliable thing you can do to deepen a friendship?`,
              options:      [
                `Share your problems with them so they feel needed`,
                `Spend as much time together as possible, even if you're not really talking`,
                `Show genuine interest in their life, remember what they tell you, and ask about it later`,
                `Make sure to text them every day so they know you're thinking about them`,
              ],
              correctIndex: 2,
              explanation:  `Remembering what someone told you and asking about it later communicates something simple but powerful: I was actually listening. I care about what's happening in your life, not just my own. This habit — more than any other — builds the trust and warmth that makes a friendship feel real and safe.`,
            },

            // Q3 — MC (source)
            {
              id:           'l10-q3',
              format:       'mc',
              question:     `When a friendship hits a difficult patch, what is the most effective response?`,
              options:      [
                `Give the friendship space and see if it resolves on its own`,
                `Talk to mutual friends to get their perspective first`,
                `Address the issue directly and privately with the friend, using I-statements and giving them benefit of the doubt`,
                `End the friendship to avoid further hurt`,
              ],
              correctIndex: 2,
              explanation:  `Direct, private conversation — using I-statements and approaching with good faith — resolves the actual issue and preserves the friendship's trust. Going through other people usually adds complexity and hurt without resolving anything. Most friendship problems can be worked through if both people approach them with honesty and goodwill.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l10-q4',
              format:       'tf',
              question:     `Strong friendships require investment from both people — a friendship where only one person does the reaching out is a sign something is out of balance.`,
              correctAnswer: true,
              explanation:  `True. Reciprocity — both people investing — is one of the defining qualities of a healthy friendship. A relationship where one person consistently does all the work while the other receives without contributing back is draining rather than energising. Noticing this imbalance isn't a reason to give up on a friendship, but it is useful information.`,
            },

            // Q5 — Fill-blank (fresh, named study removed per adjustment 3)
            {
              id:           'l10-q5',
              format:       'fill-blank',
              question:     `The longest happiness study ever run found that the most important factor in long-term health and happiness was the quality of your ___.`,
              options:      ['relationships', 'career', 'wealth', 'health'],
              correctIndex: 0,
              explanation:  `The research conclusion is clear and consistent: relationships — not wealth, not achievement, not status — are the most reliable predictor of long-term health and happiness. People with high-quality close relationships live longer, stay healthier, and report significantly higher life satisfaction. Who you have around you matters more than almost anything else.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l10-q6',
              format:       'mc',
              question:     `Why is it better to address a friendship problem directly with the person rather than through other people?`,
              options:      [
                `Because it's more polite to sort things out face to face`,
                `Because other people will take sides and make it worse`,
                `It resolves the actual issue and preserves trust — going through others usually creates more problems than it solves`,
                `Because the other person won't know about the issue unless you tell them directly`,
              ],
              correctIndex: 2,
              explanation:  `Direct conversation addresses the real issue at its source. Going through other people adds interpretations, perspectives, and sometimes hurt feelings that weren't originally there. It also signals distrust — that you weren't willing to talk to the person directly. Direct, private, kind conversation is almost always the path that preserves both the friendship and each person's dignity.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l10-realworld',
          type: 'real-world',
          content: {
            scenario:    `Friendship Investment`,
            description: `Think of one friend you haven't properly connected with in a while. Send them a message today — not because you need something, just because you thought of them. Notice how that feels.`,
            familyAdventure: `Do a connection audit as a family. Each person names their three closest friendships, when they last spent quality time with each person, and one thing they could do this week to invest in each one. Then make a commitment: reach out to one person you've been meaning to connect with but haven't yet.`,
            realWorldConnection: `Decades of research on human health and happiness consistently point to the same thing: the quality of your relationships matters more than almost anything else. Doctors, therapists, and researchers all treat social connection as a health priority — not a nice extra.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l10-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that friendship is one of the most powerful forces in a human life — and that like all living things, it grows with care and attention. The friendships you build and protect now are some of the most valuable things you'll ever have. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L10.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L10] Loaded: "Friendship and Social Health" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l10-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L10] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L10] One or more magazine assets missing'));
}
