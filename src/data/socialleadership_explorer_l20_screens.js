// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L20 — My Leadership Journey
// Age band : explorers (6–8)   Guide: valor
// FINAL LESSON — Social & Leadership subject complete (20/20)
// ─────────────────────────────────────────────────────────────────────────────

const SL_L20 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-20',
      title:     'My Leadership Journey',
      duration:  12,
      xpReward:  50,
      badge:     'leader',
      badgeName: 'Leader',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l20-welcome',
          type:     'welcome',
          headline: 'My Leadership Journey',
          subtitle: `Leadership is not a destination — it's a journey you're already on`,
          visual:   '/explorer-assets/leadership/l20-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l20-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Leadership is not a destination`,
            body: `The most dangerous belief about leadership is that there's a point where you've "made it" — where you know enough and no longer need to grow. Every great leader in history, when asked, describes themselves as still learning. Warren Buffett — widely considered one of the greatest investors and business leaders alive — reads for five to six hours a day, well into his nineties. Malala Yousafzai, who has already changed global policy on girls' education, continues to travel and listen to the girls she advocates for. The moment you believe you've arrived as a leader is usually the moment you begin declining. **Great leadership is a daily practice, not a certificate you earn once.**`,
            image:   '/explorer-assets/leadership/l20-magazine-1.png',
            caption: `The best leaders never stop learning — they stay curious long after others think they've arrived`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l20-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Your leadership strengths`,
            body: `You already have leadership strengths — ways you naturally influence, help, and lead others. Some people naturally **listen and create connection**: they're the ones others come to when something is hard. Others naturally **cast vision and inspire**: they see possibilities others miss. Others naturally **organise and execute**: they make things happen that everyone else only talked about. Others naturally **challenge and push**: they ask the hard questions that make ideas stronger. There is no single leadership type that is superior to the others. The most effective leaders know their natural strengths and lead from them — while deliberately working on the areas where they're weaker.`,
            image:   '/explorer-assets/leadership/l20-magazine-2.png',
            caption: `Your natural strengths are your starting point — not your limit`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l20-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Your growth edges`,
            body: `A **growth edge** is the place just beyond your current comfort zone — where you're stretched but not overwhelmed. For someone who is naturally quiet: speaking up in a group. For someone naturally bold: listening carefully before acting. For someone naturally analytical: developing empathy and connection. For someone naturally empathetic: developing directness and the ability to make clear decisions. Your growth edges are not flaws or failures. They are simply the next chapter of your leadership development — the specific places where choosing to stretch will make you significantly more effective. Everyone has them. The best leaders work on theirs deliberately, not reluctantly.`,
            image:   '/explorer-assets/leadership/l20-magazine-3.png',
            caption: `Growth edges are not weaknesses — they're the next chapter`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l20-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `The daily practice`,
            body: `Leadership is built in **daily practice**, not in occasional big moments. The practices that compound over time: read about leaders and ideas that genuinely challenge your thinking. Notice how people around you respond to different approaches — curiosity is one of the best leadership tools available. Ask for feedback from people you trust, and really listen to what they say. Take on one thing each day that is slightly outside your comfort zone. And at the end of each day, reflect: what went well? What would I do differently? What did I learn? These are not extraordinary things. They are small, quiet, consistent choices. And over time, the compound effect of those choices builds leadership that no shortcut can match.`,
            image:   '/explorer-assets/leadership/l20-magazine-4.png',
            caption: `Small daily choices compound into something extraordinary — that's how real leadership is built`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l20-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'practice',    label: `📈 Part of a Daily Leadership Practice`, color: '#34D399' },
              { id: 'not-habit',   label: `⏸️ Not a Leadership Habit`,              color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l20-g1',
                image:         'l20-game-1.png',
                label:         `At the end of the day, you take a minute to ask yourself: what went well today, and what would I do differently?`,
                correctBucket: 'practice',
                matchPhrase:   `Daily reflection turns every experience into a lesson — that's how small moments add up to real growth.`,
              },
              {
                id:            'l20-g2',
                image:         'l20-game-2.png',
                label:         `You ask someone you trust to tell you honestly what you could do better — and you really listen.`,
                correctBucket: 'practice',
                matchPhrase:   `Actively seeking feedback and genuinely listening to it is one of the most powerful habits a leader can build.`,
              },
              {
                id:            'l20-g3',
                image:         'l20-game-3.png',
                label:         `You tell yourself you'll work on your weaker areas once everything else is already going well.`,
                correctBucket: 'not-habit',
                matchPhrase:   `"Once everything else is sorted" rarely arrives. Growth edges only shrink when you work on them deliberately — not someday.`,
              },
              {
                id:            'l20-g4',
                image:         'l20-game-4.png',
                label:         `You stick to things you're already good at because stretching beyond that feels uncomfortable.`,
                correctBucket: 'not-habit',
                matchPhrase:   `Staying in your comfort zone keeps you safe — but it also keeps you exactly where you already are.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l20-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l20-q1',
              format:       'mc',
              question:     `Why is leadership a journey rather than a destination?`,
              options:      [
                `Because leadership is too complex to ever fully understand`,
                `Because every situation requires growth, and the best leaders never stop learning and developing`,
                `Because leadership skills become outdated and have to be completely relearned`,
                `Because you can only become a real leader after many years of experience`,
              ],
              correctIndex: 1,
              explanation:  `The leaders who have the most impact are almost always the ones who stay genuinely curious and committed to growing — not those who reached a certain level and stopped. Leadership is a practice you build every day, not a status you achieve once.`,
            },

            // Q2 — MC (source)
            {
              id:           'l20-q2',
              format:       'mc',
              question:     `What is a growth edge?`,
              options:      [
                `A weakness that defines your leadership style`,
                `The place just beyond your current comfort zone where you're stretched in a way that builds new capability`,
                `A skill you were born without and cannot develop`,
                `The boundary between what leaders do and what followers do`,
              ],
              correctIndex: 1,
              explanation:  `A growth edge is where real development happens — stretched but not overwhelmed. Everyone has them, and the leaders who make the most progress are the ones who identify theirs and work on them deliberately rather than avoiding them.`,
            },

            // Q3 — MC (source)
            {
              id:           'l20-q3',
              format:       'mc',
              question:     `How is extraordinary leadership built over time?`,
              options:      [
                `By studying leadership theory and earning formal qualifications`,
                `Through one major challenge or experience that transforms you`,
                `Through the compound effect of small daily practices — reflection, reading, feedback, and taking on growth challenges`,
                `By closely following a highly effective leader and copying their methods`,
              ],
              correctIndex: 2,
              explanation:  `There is no single transformative moment that makes someone a great leader. It's the accumulation of small, consistent choices — reflecting, seeking feedback, stretching slightly further each day — that compounds into something extraordinary over time.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l20-q4',
              format:       'tf',
              question:     `Every person — including you — already has natural leadership strengths they can build on right now.`,
              correctAnswer: true,
              explanation:  `True. Leadership doesn't start when you get a title or a role. The natural strengths you already have — how you listen, organise, inspire, or challenge — are already leadership strengths. The work is knowing them and developing them deliberately.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l20-q5',
              format:       'fill-blank',
              question:     `The place just beyond your current comfort zone — where you're stretched but not overwhelmed — is called your growth ___.`,
              options:      ['edge', 'limit', 'zone', 'gap'],
              correctIndex: 0,
              explanation:  `A growth edge is specifically the zone just beyond what's comfortable — far enough to stretch you, close enough that you can actually work there. It's where real development happens, which is why the best leaders seek it out rather than avoid it.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l20-q6',
              format:       'mc',
              question:     `Which daily habit does the most to build leadership over time?`,
              options:      [
                `Setting bigger and bigger goals each week so you're always challenged`,
                `Reading about leadership every morning without fail`,
                `Asking for feedback from people you trust and genuinely listening to what they say`,
                `Reflecting on what went well and what you'd do differently — so every day teaches you something`,
              ],
              correctIndex: 3,
              explanation:  `Daily reflection turns every experience into a lesson. When you consistently ask "what went well and what would I do differently?" — every day, not just the big ones — every situation becomes material for your development. That compound effect is hard to replicate any other way.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l20-realworld',
          type: 'real-world',
          content: {
            scenario:    `My Leadership Declaration`,
            description: `Write down three leadership strengths you already have and one growth edge you're committing to — not someday, but starting this week. Sign it and put it somewhere you'll see it.`,
            familyAdventure: `Hold a family leadership celebration: each person names one leadership quality they genuinely see in every other family member, and shares one growth they're committing to for themselves. Write them all down somewhere you'll see them.`,
            realWorldConnection: `The world needs people who know how to lead well — in classrooms, communities, teams, and families. Everything you've learned across this subject is the beginning of a practice you'll build for the rest of your life.`,
          },
        },

        // ── 9. CELEBRATION (subject-completion) ─────────────────────────────
        {
          id:   'l20-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You've now completed the entire Social & Leadership journey — twenty lessons of real skills, real courage, and real choices about the kind of person you want to be. Leadership isn't something you achieve once. It's who you become, one small brave choice at a time. You have what it takes. Valor is so proud to share all of this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L20.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L20] Loaded: "My Leadership Journey" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l20-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l20-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l20-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l20-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L20] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L20] One or more magazine assets missing'));
}
