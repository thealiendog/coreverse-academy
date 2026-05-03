// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L01 — What Makes a Good Leader?
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L01 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-01',
      title:     'What Makes a Good Leader?',
      duration:  12,
      xpReward:  50,
      badge:     'born-leader',
      badgeName: 'Born Leader',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l01-welcome',
          type:     'welcome',
          headline: 'What Makes a Good Leader?',
          subtitle: `Leadership isn't a title — it's a choice anyone can make`,
          visual:   '/explorer-assets/leadership/l01-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l01-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What leadership really is`,
            body: `Most people think leadership means being the boss, having authority, or being the loudest person in the room. But the best leaders throughout history understood something different: leadership is about **influence**, not position. You don't need a title to be a leader. You lead every time you help someone, every time you stand up for what's right, and every time you bring out the best in the people around you. Leadership is a choice you make — not a role you're given.`,
            image:   '/explorer-assets/leadership/l01-magazine-1.png',
            caption: `Leadership is a choice, not a title`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l01-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `The qualities of great leaders`,
            body: `What do great leaders actually have in common? Research across history and many different fields reveals a consistent list: **integrity** (doing the right thing even when no one is watching), **empathy** (genuinely caring about others), **courage** (acting on your values even when it's hard), **vision** (seeing what could be, not just what is), **humility** (knowing you don't have all the answers), and **consistency** (being the same person in every situation). Notice what's not on the list: being the smartest person in the room, or being the most popular.`,
            image:   '/explorer-assets/leadership/l01-magazine-2.png',
            caption: `Integrity, courage, and empathy matter more than popularity`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l01-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Leaders vs bosses`,
            body: `There's a big difference between a boss and a leader. A boss uses authority to make people do things. A leader inspires people to *want* to do things. A boss says "do this because I said so." A leader says "here's why this matters, and here's how I can help you." A boss takes credit when things go well and assigns blame when they don't. A leader gives credit to the team — and when things go wrong, asks: "how can we do better?" Which kind would you rather follow?`,
            image:   '/explorer-assets/leadership/l01-magazine-3.png',
            caption: `A leader asks "how can I help?" — a boss just gives orders`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l01-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Leadership at any age`,
            body: `You don't have to be an adult or have a title to be a leader. Malala Yousafzai started speaking up for girls' education at age eleven. Ruby Bridges led through enormous courage at age six, simply by walking into a school. Greta Thunberg began her climate campaign at age fifteen. You lead right now — when you include someone who's left out, when you speak up when something is wrong, when you help a friend through a hard time, and when you work harder than you have to. Leadership starts the moment you choose it.`,
            image:   '/explorer-assets/leadership/l01-magazine-4.png',
            caption: `Leaders come in every age — including yours`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l01-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'leader', label: `🦁 Leader`, color: '#34D399' },
              { id: 'boss',   label: `👔 Boss`,   color: '#F87171' },
            ],
            items: [
              {
                id:            'l01-g1',
                image:         'l01-game-1.png',
                label:         `Giving credit to the whole team when the project goes well.`,
                correctBucket: 'leader',
                matchPhrase:   `That's a leader — they put the team first and share the win.`,
              },
              {
                id:            'l01-g2',
                image:         'l01-game-2.png',
                label:         `Asking "how can we do better?" when things go wrong.`,
                correctBucket: 'leader',
                matchPhrase:   `Leaders focus on improvement, not blame.`,
              },
              {
                id:            'l01-g3',
                image:         'l01-game-3.png',
                label:         `Saying "do this because I said so" without explaining why.`,
                correctBucket: 'boss',
                matchPhrase:   `That's bossing, not leading — no reason, just authority.`,
              },
              {
                id:            'l01-g4',
                image:         'l01-game-4.png',
                label:         `Taking all the credit after the group worked hard together.`,
                correctBucket: 'boss',
                matchPhrase:   `A real leader shares the win — taking all the credit pushes people away.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l01-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l01-q1',
              format:       'mc',
              question:     `What is the most accurate definition of leadership?`,
              options:      [
                `Being in charge and telling others what to do`,
                `Influencing and inspiring others to work toward a common goal`,
                `Having the most experience or knowledge`,
                `Being the most popular person in the group`,
              ],
              correctIndex: 1,
              explanation:  `Leadership is about influence, not position. You don't need authority or popularity — you need the ability to inspire others to move toward something together.`,
            },

            // Q2 — MC (source)
            {
              id:           'l01-q2',
              format:       'mc',
              question:     `What is the key difference between a boss and a leader?`,
              options:      [
                `A boss earns more money than a leader`,
                `A boss uses authority to make people comply; a leader inspires people to want to contribute`,
                `A boss works harder than a leader`,
                `A leader has a formal title; a boss doesn't`,
              ],
              correctIndex: 1,
              explanation:  `The difference is in *how* they get things done. Bosses rely on authority. Leaders create a reason people want to follow.`,
            },

            // Q3 — MC (source)
            {
              id:           'l01-q3',
              format:       'mc',
              question:     `What quality do great leaders consistently show?`,
              options:      [
                `Being the smartest person in the room`,
                `Always having the right answer`,
                `Integrity — doing the right thing even when no one is watching`,
                `Never making mistakes`,
              ],
              correctIndex: 2,
              explanation:  `Integrity is the foundation of lasting leadership. People follow those they trust — and trust is built by doing the right thing consistently, not just when it's easy.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l01-q4',
              format:       'tf',
              question:     `Leadership is a choice anyone can make — you don't need a title or a position to lead others.`,
              correctAnswer: true,
              explanation:  `True. Every time you help someone, stand up for what's right, or bring out the best in people around you, you're leading — regardless of your age or role.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l01-q5',
              format:       'fill-blank',
              question:     `Great leaders serve others, not ___.`,
              options:      ['themselves', 'the team', 'a goal', 'a group'],
              correctIndex: 0,
              explanation:  `Serving yourself — your reputation, your credit, your comfort — is the opposite of leadership. Great leaders ask what others need, not what they can gain.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l01-q6',
              format:       'mc',
              question:     `Which of these shows someone leading rather than bossing?`,
              options:      [
                `Telling the team to work harder without offering any help`,
                `Giving credit to the group after a big win`,
                `Making all the decisions without asking anyone`,
                `Using their title to get what they want`,
              ],
              correctIndex: 1,
              explanation:  `Sharing credit is a hallmark of leadership — it shows the leader values the team above their own recognition.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l01-realworld',
          type: 'real-world',
          content: {
            scenario:    `Leadership in Action`,
            description: `Think of someone you know — a teacher, coach, or family member — who leads by inspiring others rather than by being in charge. What do they do that makes people want to follow them?`,
            familyAdventure: `Interview a leader you respect — a parent, coach, teacher, or family friend. Ask them: When did you first feel like a leader? What's the hardest part of leading? What mistake taught you the most? Listen carefully and share the most surprising thing you learned.`,
            realWorldConnection: `Leadership shows up in every field — from sport to science to community work. The qualities that make someone a great leader are the same whether they're running a team, organising a community project, or standing up for a friend.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l01-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that leadership isn't about a title — it's about influence, integrity, and choosing to bring out the best in others. That kind of courage is something you can build starting right now. Valor is so proud to explore this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L01.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L01] Loaded: "What Makes a Good Leader?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l01-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l01-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L01] One or more magazine assets missing'));
}
