// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L02 — Leading by Example
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L02 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-02',
      title:     'Leading by Example',
      duration:  12,
      xpReward:  50,
      badge:     'role-model',
      badgeName: 'Role Model',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l02-welcome',
          type:     'welcome',
          headline: 'Leading by Example',
          subtitle: `The most powerful form of leadership is what you do when no one is watching`,
          visual:   '/explorer-assets/leadership/l02-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l02-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Actions speak louder than words`,
            body: `People follow what you *do*, not what you *say*. A coach who stays late to practise is more inspiring than one who gives great speeches but leaves early. A parent who reads every night creates readers. A teacher who stays endlessly curious creates curious students. A leader who admits mistakes creates a team where people aren't afraid to fail. Whatever behaviour you want to see in others, you have to show it yourself first — consistently, not just occasionally.`,
            image:   '/explorer-assets/leadership/l02-magazine-1.png',
            caption: `What you do every day says more than any speech`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l02-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Consistency: the foundation of trust`,
            body: `Trust is built when your behaviour is **consistent** — when you are the same person whether someone is watching or not, whether it's convenient or not, whether you feel like it or not. People notice inconsistency immediately. A leader who is kind in public but dismissive in private, or who demands excellence from others while cutting corners themselves, destroys trust fast. Consistency doesn't mean perfection — it means predictable integrity. People can follow someone consistent even when they're imperfect.`,
            image:   '/explorer-assets/leadership/l02-magazine-2.png',
            caption: `Being the same person in every situation is what builds real trust`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l02-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `The ripple effect`,
            body: `Your behaviour creates ripples. When you hold the door for someone, they're more likely to hold it for the next person. When you pick up litter, others who see it are more likely to do the same. When you speak kindly to someone having a hard day, they often pass that kindness on. Research shows that positive behaviours are contagious — they spread through groups. Your single act of leading well can influence dozens of people you never directly interacted with.`,
            image:   '/explorer-assets/leadership/l02-magazine-3.png',
            caption: `One act of kindness or courage can ripple outward further than you know`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l02-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `When it's hard to lead by example`,
            body: `Leading by example is hardest exactly when it matters most — when you're frustrated, tired, or when doing the right thing is unpopular. It's easy to be patient when everything is going well. Leading by example means being patient when you're stressed. It's easy to be honest when honesty is convenient. Leading by example means being honest when it costs you something. The moments when it's hardest to model good behaviour are the moments when doing so matters most. That's where real character is built.`,
            image:   '/explorer-assets/leadership/l02-magazine-4.png',
            caption: `Character is what you do when things are hard, not when they're easy`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l02-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'leading',  label: `✅ Leading by Example`,     color: '#34D399' },
              { id: 'not',      label: `❌ Not Leading by Example`,  color: '#F87171' },
            ],
            items: [
              {
                id:            'l02-g1',
                image:         'l02-game-1.png',
                label:         `Arriving on time to every practice, even when you don't feel like it.`,
                correctBucket: 'leading',
                matchPhrase:   `Showing up consistently — that's leading by example.`,
              },
              {
                id:            'l02-g2',
                image:         'l02-game-2.png',
                label:         `Admitting to the group that you got something wrong.`,
                correctBucket: 'leading',
                matchPhrase:   `Owning a mistake in front of others takes real courage — that's leading by example.`,
              },
              {
                id:            'l02-g3',
                image:         'l02-game-3.png',
                label:         `Telling your team to work hard while you scroll on your phone.`,
                correctBucket: 'not',
                matchPhrase:   `Your actions and words have to match — or people stop listening to both.`,
              },
              {
                id:            'l02-g4',
                image:         'l02-game-4.png',
                label:         `Being kind in front of others but dismissive when no one is watching.`,
                correctBucket: 'not',
                matchPhrase:   `Consistency matters — if you're different in private, people will notice.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l02-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l02-q1',
              format:       'mc',
              question:     `What does "leading by example" mean?`,
              options:      [
                `Telling others exactly how to act`,
                `Your actions consistently match your values, whether or not anyone is watching`,
                `Being the best at everything you ask others to do`,
                `Following rules set by authority figures`,
              ],
              correctIndex: 1,
              explanation:  `Leading by example isn't about being perfect — it's about your private behaviour matching your public behaviour, consistently.`,
            },

            // Q2 — MC (source)
            {
              id:           'l02-q2',
              format:       'mc',
              question:     `Why is consistency essential for a leader?`,
              options:      [
                `Because followers need to know exactly what to expect every minute`,
                `Because trust is built when people can predict your behaviour and count on you to act with integrity`,
                `Because inconsistent leaders get replaced`,
                `Because rules need to be followed the same way every time`,
              ],
              correctIndex: 1,
              explanation:  `Trust grows when people can rely on you — not because you're perfect, but because your integrity is predictable. Inconsistency breaks trust even when intentions are good.`,
            },

            // Q3 — MC (source)
            {
              id:           'l02-q3',
              format:       'mc',
              question:     `What is the ripple effect of positive leadership behaviour?`,
              options:      [
                `Leaders' actions only affect the people directly around them`,
                `One person's positive actions can spread through a group and influence people they never directly interacted with`,
                `Positive behaviour only ripples in large organisations`,
                `The ripple effect only works for negative behaviours`,
              ],
              correctIndex: 1,
              explanation:  `Positive behaviour is contagious. A single act of kindness or courage can travel far beyond the original moment — touching people the leader never met.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l02-q4',
              format:       'tf',
              question:     `Leading by example only counts when other people are there to see what you do.`,
              correctAnswer: false,
              explanation:  `False. Leading by example means behaving the same whether or not anyone is watching — that's exactly what makes it real leadership rather than performance.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l02-q5',
              format:       'fill-blank',
              question:     `Trust is built when your behaviour is ___ — the same whether anyone is watching or not.`,
              options:      ['consistent', 'fair', 'brave', 'visible'],
              correctIndex: 0,
              explanation:  `Consistency is the root of trust. People follow those whose behaviour they can predict — not because they're perfect, but because they're reliably themselves.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l02-q6',
              format:       'mc',
              question:     `A leader admits in front of their team that they made a mistake. What does this show?`,
              options:      [
                `That they aren't ready to lead`,
                `Leading by example — honesty and accountability, even when it's hard`,
                `That the team should distrust them`,
                `That mistakes don't matter`,
              ],
              correctIndex: 1,
              explanation:  `Admitting a mistake publicly takes courage and models the honesty you want to see in others. It builds trust rather than damaging it.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l02-realworld',
          type: 'real-world',
          content: {
            scenario:    `The Mirror Challenge`,
            description: `For one day, notice every time someone around you does something kind or brave — and ask yourself: did YOU do that today too?`,
            familyAdventure: `Do a family "leading by example" week. Each person picks one behaviour to model — putting their phone away at meals, saying something kind to a stranger, or helping without being asked. Check in each evening: did you do it? Did anyone else start doing it too?`,
            realWorldConnection: `Every field — sport, medicine, teaching, engineering — needs people who model the behaviour they want to see. The ripple effect of one person choosing integrity spreads further than they ever know.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l02-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that the most powerful form of leadership isn't a speech — it's what you do when it's hard, and when no one is watching. That's the kind of character Valor is proud to see you building.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L02.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L02] Loaded: "Leading by Example" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l02-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l02-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L02] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L02] One or more magazine assets missing'));
}
