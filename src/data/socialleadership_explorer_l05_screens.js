// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L05 — Conflict Resolution: Solving Problems Peacefully
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L05 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-05',
      title:     'Conflict Resolution: Solving Problems Peacefully',
      duration:  12,
      xpReward:  50,
      badge:     'peacemaker',
      badgeName: 'Peacemaker',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l05-welcome',
          type:     'welcome',
          headline: 'Conflict Resolution: Solving Problems Peacefully',
          subtitle: `The goal isn't to win — it's to find a solution that works for everyone`,
          visual:   '/explorer-assets/leadership/l05-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l05-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Why conflict happens`,
            body: `Conflict is completely normal. Even the best relationships, best teams, and closest families have conflict. It happens when two people have different needs, values, or perspectives that seem to clash. Here's the important thing: **conflict isn't always bad**. It often surfaces important issues that actually need to be talked about. Many positive changes in history — in families, communities, and society — came from people willing to engage in difficult conversations rather than ignore the problem. The question is never whether conflict will happen. It's whether you have the skills to handle it well when it does.`,
            image:   '/explorer-assets/leadership/l05-magazine-1.png',
            caption: `Conflict isn't the problem — how you handle it is what matters`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l05-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `The PEACE method`,
            body: `A simple framework for resolving conflict — one step at a time. **Pause** — take a breath before saying anything. Both people need to calm down first, or the conversation won't go anywhere useful. **Express** — share how *you* feel using "I" statements: "I felt left out when..." rather than "you always exclude me." **Ask** — genuinely ask the other person how they feel, and actually listen. **Consider** — together, look for a solution that works for both of you. **Evaluate** — check in later to see if the solution actually worked. This takes practice, but it becomes natural over time.`,
            image:   '/explorer-assets/leadership/l05-magazine-2.png',
            caption: `Pause, Express, Ask, Consider, Evaluate — one step at a time`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l05-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Positions vs interests`,
            body: `Here's one of the most useful ideas in conflict resolution. Two siblings are arguing over the last orange in the bowl. Both of them say: "I want it." That's their **position** — what they want. But when you ask *why* — their **interests** — the picture changes completely. One sibling wants to eat the fruit. The other only wants the peel to use in a recipe. They both get exactly what they need. There was never really a conflict at all. Understanding *why* someone wants something almost always reveals solutions that arguing over positions would never find. Ask "why does this matter to you?" — and really listen to the answer.`,
            image:   '/explorer-assets/leadership/l05-magazine-3.png',
            caption: `Ask "why does this matter to you?" — the answer usually unlocks the solution`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l05-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `When to get help`,
            body: `Some conflicts are beyond what two people should handle alone — and knowing when to ask for help is a sign of wisdom, not weakness. If a conflict involves safety, if the same argument keeps happening without getting resolved, or if emotions are running too high for a calm conversation, it's wise to bring in a neutral person: a trusted adult, a teacher, or a mediator. Even adults and organisations with enormous resources use outside mediators when conflicts get too big to resolve internally. Getting help is how you give the conflict the best possible chance of a real solution.`,
            image:   '/explorer-assets/leadership/l05-magazine-4.png',
            caption: `Knowing when to ask for help is part of resolving conflict well`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l05-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'helps', label: `☮️ Helps Resolve It`, color: '#34D399' },
              { id: 'worse', label: `⚡ Makes It Worse`,   color: '#F87171' },
            ],
            items: [
              {
                id:            'l05-g1',
                image:         'l05-game-1.png',
                label:         `Taking a breath and waiting until you're calm before talking about it.`,
                correctBucket: 'helps',
                matchPhrase:   `Pausing is the first step — nothing good comes from a conversation that starts before both people are calm.`,
              },
              {
                id:            'l05-g2',
                image:         'l05-game-2.png',
                label:         `"I felt left out when that happened — can we talk about it?"`,
                correctBucket: 'helps',
                matchPhrase:   `An "I" statement opens a conversation. It names your feeling without putting the other person on the defensive.`,
              },
              {
                id:            'l05-g3',
                image:         'l05-game-3.png',
                label:         `Bringing up three other things they did wrong while you're already arguing.`,
                correctBucket: 'worse',
                matchPhrase:   `Piling on old grievances makes the conflict bigger and harder to solve. One thing at a time.`,
              },
              {
                id:            'l05-g4',
                image:         'l05-game-4.png',
                label:         `Walking away and refusing to talk about it at all.`,
                correctBucket: 'worse',
                matchPhrase:   `Shutting down leaves things unresolved — the tension stays, and the same conflict will come back.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l05-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l05-q1',
              format:       'mc',
              question:     `What is the goal of conflict resolution?`,
              options:      [
                `To win the argument and prove you're right`,
                `To avoid all future conflict`,
                `To find a solution where both people feel heard and the relationship stays intact`,
                `To get a neutral adult to decide who was right`,
              ],
              correctIndex: 2,
              explanation:  `Winning an argument and losing a relationship is a bad trade. The goal is a solution both people can live with — and a relationship that comes out stronger for having worked through it.`,
            },

            // Q2 — MC (source)
            {
              id:           'l05-q2',
              format:       'mc',
              question:     `What is an "I statement" and why does it help in a conflict?`,
              options:      [
                `A way of talking only about yourself in conversation`,
                `Describing how YOU feel rather than blaming the other person — it's less threatening and more honest`,
                `A legal statement you make when filing a complaint`,
                `A technique only therapists use`,
              ],
              correctIndex: 1,
              explanation:  `"I felt..." describes your experience without accusing. "You always..." puts people on the defensive and usually makes them argue back instead of listen.`,
            },

            // Q3 — MC (source)
            {
              id:           'l05-q3',
              format:       'mc',
              question:     `What is the difference between a position and an interest in a conflict?`,
              options:      [
                `Positions are more important than interests`,
                `A position is what you want; an interest is why you want it — understanding interests reveals more solutions`,
                `Interests change but positions never do`,
                `They mean the same thing in conflict situations`,
              ],
              correctIndex: 1,
              explanation:  `Two people can share the same position (both want the same thing) but have completely different interests (different reasons why). When you understand the interests, solutions often appear that neither person had thought of.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l05-q4',
              format:       'tf',
              question:     `Conflict is always a sign that something has gone wrong in a relationship.`,
              correctAnswer: false,
              explanation:  `False. Conflict is a normal part of any real relationship. It often surfaces important things that need to be talked about — and handled well, it can actually make relationships stronger.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l05-q5',
              format:       'fill-blank',
              question:     `In the PEACE method, the first step is to ___ — take a breath and calm down before saying anything.`,
              options:      ['pause', 'argue', 'express', 'ask'],
              correctIndex: 0,
              explanation:  `Pausing before reacting is the step that makes everything else possible. Conversations that start before both people are calm almost never go anywhere useful.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l05-q6',
              format:       'mc',
              question:     `Two friends both want the last piece of fruit — but one wants to eat it and the other just wants the peel for a recipe. What does this story teach us?`,
              options:      [
                `Someone always has to lose in a conflict`,
                `Small conflicts should just be ignored`,
                `Understanding why someone wants something often reveals a solution both people can accept`,
                `Conflicts about everyday things are never worth resolving`,
              ],
              correctIndex: 2,
              explanation:  `When you look past what people want (their position) to why they want it (their interest), you often find that the conflict was smaller than it looked — or had a solution nobody had noticed yet.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l05-realworld',
          type: 'real-world',
          content: {
            scenario:    `Conflict Solver`,
            description: `Next time a disagreement comes up, try asking "why does this matter to you?" before jumping to a solution. You might be surprised what you discover about what's really going on.`,
            familyAdventure: `Think of one small but recurring conflict in your family — chores, screen time, bedtimes. Sit down together and use PEACE: each person shares their position (what they want) AND their interest (why it matters). Work toward a solution everyone can live with, and write it down.`,
            realWorldConnection: `Conflict resolution is used every day by mediators, diplomats, lawyers, coaches, and teachers. The same skills that help two friends work through a disagreement help countries reach agreements that avoid much larger problems.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l05-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that conflict isn't the problem — it's how you handle it that matters. Choosing to stay calm, listen, and look for solutions both people can accept — that's real courage. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L05.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L05] Loaded: "Conflict Resolution: Solving Problems Peacefully" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l05-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l05-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L05] One or more magazine assets missing'));
}
