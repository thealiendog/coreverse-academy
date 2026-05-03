// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L06 — Teamwork: Together We're Stronger
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L06 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-06',
      title:     `Teamwork: Together We're Stronger`,
      duration:  12,
      xpReward:  50,
      badge:     'team-player',
      badgeName: 'Team Player',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l06-welcome',
          type:     'welcome',
          headline: `Teamwork: Together We're Stronger`,
          subtitle: `What makes teams work — and what makes them fall apart`,
          visual:   '/explorer-assets/leadership/l06-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l06-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Why teams outperform individuals`,
            body: `No Olympic athlete wins alone. No great film is made by one person. No skyscraper is built by a single pair of hands. Teams work because they combine different strengths, catch each other's mistakes, share the workload, and keep each other motivated. A team of five people with **different** skills will almost always outperform five people with the same skills — because each person contributes something unique. The best teams aren't built from people who are all alike. They're built to cover all the bases.`,
            image:   '/explorer-assets/leadership/l06-magazine-1.png',
            caption: `Complementary strengths beat identical skills every time`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l06-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `The five behaviours of effective teams`,
            body: `Researcher Patrick Lencioni studied what separates great teams from ordinary ones, and found five behaviours that highly effective teams share. **Trust** — team members are honest with each other and admit mistakes. **Healthy conflict** — they can disagree productively without it becoming personal. **Commitment** — they back decisions even when they had a different view. **Accountability** — they hold each other to high standards. **Results** — they focus on what the team achieves, not individual recognition. Take away any one of these, and the whole team suffers.`,
            image:   '/explorer-assets/leadership/l06-magazine-2.png',
            caption: `Trust, healthy conflict, commitment, accountability, results`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l06-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Roles on a team`,
            body: `Every effective team needs people filling different roles — not just job titles, but different ways of thinking. The **Idea Generator** brings creative solutions nobody else thought of. The **Implementer** turns ideas into action. The **Detail Person** catches what others miss. The **Connector** keeps relationships strong and communication flowing. The **Challenger** asks hard questions to make ideas better. The **Encourager** keeps morale up when things get tough. Most people can play several of these roles — great team members notice what their team needs and step up to fill it.`,
            image:   '/explorer-assets/leadership/l06-magazine-3.png',
            caption: `Every team needs different kinds of thinkers`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l06-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `When teamwork is hard`,
            body: `Teams break down in predictable ways: when people don't communicate honestly, when one person dominates or stops contributing, when credit isn't shared fairly, when people have different levels of commitment, or when conflict gets personal instead of staying focused on the work. Most team failures trace back to one root: **trust**. When people don't trust each other, they hide problems, avoid honest feedback, and hold back their best effort. Trust is the foundation everything else is built on — which is why the small things (keeping promises, being honest, showing up) matter so much.`,
            image:   '/explorer-assets/leadership/l06-magazine-4.png',
            caption: `When trust breaks down, everything else follows`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l06-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'builds', label: `💪 Builds the Team`, color: '#34D399' },
              { id: 'breaks', label: `💥 Breaks the Team`, color: '#F87171' },
            ],
            items: [
              {
                id:            'l06-g1',
                image:         'l06-game-1.png',
                label:         `Admitting you made a mistake so the team can fix it together.`,
                correctBucket: 'builds',
                matchPhrase:   `Owning a mistake and fixing it together — that's what trust looks like in a team.`,
              },
              {
                id:            'l06-g2',
                image:         'l06-game-2.png',
                label:         `Listening carefully to a teammate's idea even if you're not sure it will work.`,
                correctBucket: 'builds',
                matchPhrase:   `Giving ideas a fair hearing is how teams find their best solutions.`,
              },
              {
                id:            'l06-g3',
                image:         'l06-game-3.png',
                label:         `Taking all the credit for something the whole group worked on.`,
                correctBucket: 'breaks',
                matchPhrase:   `Credit belongs to the whole team — taking it all for yourself erodes trust fast.`,
              },
              {
                id:            'l06-g4',
                image:         'l06-game-4.png',
                label:         `Going quiet and stopping your effort when you disagree with the team's decision.`,
                correctBucket: 'breaks',
                matchPhrase:   `Disengaging hurts everyone — even if you disagree, the team needs your best effort.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l06-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l06-q1',
              format:       'mc',
              question:     `Why do teams with different skills outperform teams where everyone has the same skills?`,
              options:      [
                `Because larger groups always accomplish more`,
                `Because each person contributes something unique, covering more bases together than any one person could alone`,
                `Because diverse teams have less conflict`,
                `Because identical skills create too much competition`,
              ],
              correctIndex: 1,
              explanation:  `Complementary strengths mean the team covers blind spots and brings more solutions to any problem. Sameness limits a team — difference makes it stronger.`,
            },

            // Q2 — MC (source)
            {
              id:           'l06-q2',
              format:       'mc',
              question:     `What is the foundation that all other team behaviours are built on?`,
              options:      [
                `Clear goals and deadlines`,
                `A strong leader who makes all decisions`,
                `Trust — when people trust each other, they can be honest, commit, and hold each other accountable`,
                `Equal contribution from every team member`,
              ],
              correctIndex: 2,
              explanation:  `Without trust, people hide problems and hold back. With trust, teams can be honest, handle conflict productively, and focus on what actually matters.`,
            },

            // Q3 — MC (source)
            {
              id:           'l06-q3',
              format:       'mc',
              question:     `What is the difference between healthy conflict and destructive conflict on a team?`,
              options:      [
                `Healthy conflict is short; destructive conflict is long`,
                `Healthy conflict focuses on ideas and work; destructive conflict becomes personal`,
                `Healthy conflict involves a leader; destructive conflict doesn't`,
                `There is no such thing as healthy conflict on a team`,
              ],
              correctIndex: 1,
              explanation:  `Disagreeing about ideas makes teams better — it sharpens thinking and surfaces better solutions. Conflict becomes destructive when it targets people rather than ideas.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l06-q4',
              format:       'tf',
              question:     `A team where everyone thinks the same way and always agrees is usually the most effective kind of team.`,
              correctAnswer: false,
              explanation:  `False. Teams where everyone thinks alike keep solving problems the same way. Different perspectives — even when they create productive disagreement — lead to better decisions and more creative solutions.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l06-q5',
              format:       'fill-blank',
              question:     `The invisible foundation that every effective team is built on is ___.`,
              options:      ['trust', 'goals', 'rules', 'size'],
              correctIndex: 0,
              explanation:  `Trust is what allows every other team behaviour to exist. Without it, honest communication, productive conflict, and real commitment all break down.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l06-q6',
              format:       'mc',
              question:     `What does it mean to put the team above yourself in teamwork?`,
              options:      [
                `Doing whatever the loudest person says`,
                `Working harder than everyone else to prove yourself`,
                `Caring more about the group's outcome than your own individual recognition`,
                `Letting others make all the decisions`,
              ],
              correctIndex: 2,
              explanation:  `Putting the team first means focusing on what the group achieves together, not on who gets the credit. That mindset is what separates great team members from just good ones.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l06-realworld',
          type: 'real-world',
          content: {
            scenario:    `Team Tower Challenge`,
            description: `Think of a team you're part of — a class project, a sports team, or your family. Which role do you naturally play? Which role does your team most need right now?`,
            familyAdventure: `Take on a real family team project this week — cook a complex meal together, build something, or organise a space at home. Assign specific roles before you start. Halfway through, check in: is everyone contributing? At the end, talk about what made your team work — and what would make it even stronger.`,
            realWorldConnection: `Every field — sport, science, medicine, the arts — relies on teams. The skills that make teams work (trust, honest communication, shared credit) are exactly the same whether the team is four people or four thousand.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l06-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that the best teams aren't built from people who are all the same — they're built from people who trust each other and bring different strengths to the table. Being a great team member takes real character. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L06.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L06] Loaded: "Teamwork: Together We're Stronger" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l06-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l06-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L06] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L06] One or more magazine assets missing'));
}
