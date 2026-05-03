// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L18 — Leadership Styles
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L18 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-18',
      title:     'Leadership Styles',
      duration:  12,
      xpReward:  50,
      badge:     'style-adapter',
      badgeName: 'Style Adapter',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l18-welcome',
          type:     'welcome',
          headline: 'Leadership Styles',
          subtitle: `Great leaders don't lead the same way in every situation — they read what's needed and adapt`,
          visual:   '/explorer-assets/leadership/l18-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l18-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Autocratic leadership`,
            body: `Autocratic leaders make decisions alone and direct others to carry them out. This style is fast and decisive — essential in emergencies or time-critical situations. A surgeon in the operating room, a pilot in a crisis, or a team captain responding to an urgent problem all benefit from autocratic clarity. The downside: team members feel less ownership, creativity is suppressed, and the leader must be right. **Effective autocratic leaders use this style only when the situation demands it** — not as a default because it's faster or easier for them.`,
            image:   '/explorer-assets/leadership/l18-magazine-1.png',
            caption: `Fast and decisive — but best saved for emergencies, not everyday decisions`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l18-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Democratic leadership`,
            body: `Democratic leaders involve their team in decision-making — gathering input and perspectives before deciding. This style creates **high buy-in**: when people help shape a decision, they're more committed to carrying it out. It also surfaces more information and ideas than any one leader would have alone. The downside: it's slower, and can feel frustrating when people want a decisive leader. Democratic leadership works best when the team is experienced, the decision isn't urgent, and there is genuine time to gather meaningful input before acting.`,
            image:   '/explorer-assets/leadership/l18-magazine-2.png',
            caption: `More voices, more buy-in — best when there's time and the team has something to contribute`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l18-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Transformational leadership`,
            body: `Transformational leaders inspire others by connecting them to a compelling vision — something bigger than themselves or the immediate task. They don't just manage what's already happening; they **transform** what people believe is possible. They help people see beyond immediate self-interest to a larger purpose. Martin Luther King Jr., Malala Yousafzai, and leaders like them created extraordinary commitment in others not by telling people what to do, but by showing them what was worth fighting for. The downside: this style can be exhausting to sustain and can create dependence on the leader's personal energy and vision.`,
            image:   '/explorer-assets/leadership/l18-magazine-3.png',
            caption: `Transformational leaders change what people believe is possible`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l18-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Servant leadership`,
            body: `Servant leaders put the needs of those they lead above their own. Their primary question is: **how can I help my team succeed?** They remove obstacles, provide resources, develop others' skills, and prioritise the wellbeing of the people around them. Research consistently shows that servant leadership produces some of the highest levels of team satisfaction and performance. Counterintuitively, leaders who focus most on serving others often get the best results — because people give their best for leaders who genuinely care about them, not just about what they can produce.`,
            image:   '/explorer-assets/leadership/l18-magazine-4.png',
            caption: `"How can I help you succeed?" — servant leaders put the team first`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match (4 buckets) ─────────────────────────
        {
          id:     'l18-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'autocratic',      label: `⚡ Autocratic`,      color: '#F87171' },
              { id: 'democratic',      label: `🗳️ Democratic`,      color: '#60A5FA' },
              { id: 'transformational', label: `🔥 Transformational`, color: '#F59E0B' },
              { id: 'servant',         label: `🤝 Servant`,          color: '#34D399' },
            ],
            items: [
              {
                id:            'l18-g1',
                image:         'l18-game-1.png',
                label:         `The fire alarm goes off in the building. You say "Everyone this way — follow me now."`,
                correctBucket: 'autocratic',
                matchPhrase:   `Emergencies need fast, clear direction — autocratic leadership is exactly right here.`,
              },
              {
                id:            'l18-g2',
                image:         'l18-game-2.png',
                label:         `Your group needs to decide how to present your project. You ask everyone to share their ideas before picking a direction together.`,
                correctBucket: 'democratic',
                matchPhrase:   `Gathering everyone's input before deciding builds buy-in and usually surfaces better ideas.`,
              },
              {
                id:            'l18-g3',
                image:         'l18-game-3.png',
                label:         `Your group has lost motivation. You remind them why this project matters and what it could actually change for real people.`,
                correctBucket: 'transformational',
                matchPhrase:   `Reconnecting people to a bigger purpose — why the work matters — is the heart of transformational leadership.`,
              },
              {
                id:            'l18-g4',
                image:         'l18-game-4.png',
                label:         `A teammate is struggling with their part. Instead of taking it over, you ask what they need and help them figure it out.`,
                correctBucket: 'servant',
                matchPhrase:   `Putting the other person's growth and success first — not your own convenience — is servant leadership in action.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l18-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l18-q1',
              format:       'mc',
              question:     `When is autocratic leadership most appropriate?`,
              options:      [
                `Always — the leader should always have the final say in every decision`,
                `When the team is very experienced and needs minimal direction`,
                `In emergencies or time-critical situations requiring fast, clear decisions`,
                `When the leader knows more than everyone else on the team`,
              ],
              correctIndex: 2,
              explanation:  `Autocratic leadership is at its best when speed and clarity matter most — emergencies, safety situations, time-critical calls. Using it as a default outside those situations tends to reduce team ownership and suppress good ideas.`,
            },

            // Q2 — MC (source)
            {
              id:           'l18-q2',
              format:       'mc',
              question:     `What is the main advantage of democratic leadership?`,
              options:      [
                `Decisions are made much faster than any other method`,
                `The leader has less personal responsibility for the outcome`,
                `Team members have more ownership and commitment to decisions they helped shape`,
                `It produces the most creative solutions in every situation`,
              ],
              correctIndex: 2,
              explanation:  `When people help shape a decision, they're more committed to making it work. Democratic leadership is slower — but the buy-in it creates often makes the outcome better and the execution easier.`,
            },

            // Q3 — MC (source)
            {
              id:           'l18-q3',
              format:       'mc',
              question:     `What distinguishes a servant leader?`,
              options:      [
                `They never make decisions alone`,
                `They are the most humble person on the team`,
                `They put the needs of those they lead above their own, focusing on how they can help their team succeed`,
                `They serve the organisation's goals rather than personal ones`,
              ],
              correctIndex: 2,
              explanation:  `Servant leadership is defined by the question "how can I help you succeed?" — not "how can I look good?" or "how can I stay in charge?" Leaders who genuinely put their team first often get the best results precisely because of that orientation.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l18-q4',
              format:       'tf',
              question:     `Knowing when to use different leadership styles depending on the situation is one of the marks of an effective leader.`,
              correctAnswer: true,
              explanation:  `True. There is no single best leadership style for every situation. A great leader reads what's needed — urgent crisis, creative collaboration, motivation, development — and adapts their approach to match. That flexibility is itself a form of leadership skill.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l18-q5',
              format:       'fill-blank',
              question:     `A leader who asks "how can I help you succeed?" and puts their team's needs first is called a ___ leader.`,
              options:      ['servant', 'democratic', 'transformational', 'autocratic'],
              correctIndex: 0,
              explanation:  `Servant leadership flips the usual picture of leadership: instead of the team serving the leader, the leader serves the team. Research consistently shows it produces some of the highest levels of satisfaction and performance.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l18-q6',
              format:       'mc',
              question:     `Which situation would most call for transformational leadership?`,
              options:      [
                `Your team is arguing about a detail and someone needs to make a quick call`,
                `A new team member needs help learning their role and building confidence`,
                `Your team has the skills to do the work but has lost sight of why it matters and feels unmotivated`,
                `A decision needs input from everyone before it can be made`,
              ],
              correctIndex: 2,
              explanation:  `When people have the skills but have lost their sense of purpose, what they need isn't more instructions — they need to reconnect with why the work matters. That's exactly what transformational leadership does.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l18-realworld',
          type: 'real-world',
          content: {
            scenario:    `Style Spotter`,
            description: `Think of a leader in your life — a teacher, coach, or team captain. Which leadership style do they use most? Does it fit the situations they face, or do you think a different approach would sometimes work better?`,
            familyAdventure: `Think of three leaders in your family's life and decide together which style each mainly uses. Is there a moment where a different style would have worked better? Talk through it as a family and see whether you agree.`,
            realWorldConnection: `Great coaches, teachers, commanders, and community leaders all shift between styles depending on what the moment needs. The ability to read a situation and adapt your approach is one of the clearest signs of leadership maturity.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l18-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that great leaders don't lead the same way in every situation — they adapt, read what's needed, and put the right approach to work at the right moment. That kind of flexibility is one of the marks of real leadership. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L18.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L18] Loaded: "Leadership Styles" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l18-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l18-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l18-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l18-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L18] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L18] One or more magazine assets missing'));
}
