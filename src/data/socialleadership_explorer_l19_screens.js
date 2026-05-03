// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L19 — Starting a Club or Project
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L19 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-19',
      title:     'Starting a Club or Project',
      duration:  12,
      xpReward:  50,
      badge:     'founder',
      badgeName: 'Founder',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l19-welcome',
          type:     'welcome',
          headline: 'Starting a Club or Project',
          subtitle: `Every organisation you've ever admired started as one person who decided to begin`,
          visual:   '/explorer-assets/leadership/l19-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l19-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Why starting something matters`,
            body: `When you start something — a project, a club, a campaign — you learn things that can't be learned any other way. You learn to **communicate your vision** to others clearly enough that people want to join. You learn to **handle setbacks** without quitting. You learn to organise people and resources. You discover what you're capable of when there's no one to do it for you. Starting something — even something small — builds a kind of confidence that no class, no qualification, and no amount of preparation alone can give you. That's exactly why the act of beginning is itself a form of leadership.`,
            image:   '/explorer-assets/leadership/l19-magazine-1.png',
            caption: `Starting something teaches what nothing else can — including what you're actually capable of`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l19-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Six steps to starting`,
            body: `Every successful start follows a similar sequence. **Step 1: Identify the purpose** — what problem does this solve, or what experience does it create? **Step 2: Name it** — a clear name helps people understand and remember what you're building. **Step 3: Find your founding team** — two to five people who share your vision. **Step 4: Make your first plan** — what will you do first, second, and third? **Step 5: Tell people** — communicate your idea and invite others in. **Step 6: Start before you're ready** — launch a small version and learn from it. The biggest mistake people make is waiting until everything is perfect. It never will be. Starting is the only thing that makes it real.`,
            image:   '/explorer-assets/leadership/l19-magazine-2.png',
            caption: `Purpose, name, team, plan, communicate, start — in that order`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l19-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Leading through the hard parts`,
            body: `Every new project hits hard points — low turnout at the first meeting, conflict among the founding team, losing momentum after the initial excitement fades. Great leaders expect these moments and prepare for them. The most powerful antidote to losing momentum is **small visible wins**: find something you can accomplish quickly and completely, and make a big deal of it. Progress fuels motivation. When people see that something is real and moving — even if it's moving slowly — they want to be part of it. The hardest stretch isn't the beginning; it's the quiet middle, when the excitement has worn off and the results aren't there yet.`,
            image:   '/explorer-assets/leadership/l19-magazine-3.png',
            caption: `Small visible wins keep momentum alive through the hard middle stretch`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l19-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Knowing when to stop or hand off`,
            body: `Not every project should run forever. Some initiatives accomplish their goal and should celebrate that, close well, and move on. Others need to evolve beyond what the founding team can take them. Great leaders know when to **transition leadership to someone who can take the project further** — and they hand off with generosity, not possessiveness. The goal was never to be in charge forever. It was to create something valuable. When that's achieved — whether you're still at the helm or not — success has happened. Clinging to a project beyond its time, or beyond your own capacity, is the thing that actually limits it.`,
            image:   '/explorer-assets/leadership/l19-magazine-4.png',
            caption: `Handing off with generosity — not possessiveness — is its own form of leadership`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l19-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'launches', label: `🚀 Gets a Project Off the Ground`, color: '#34D399' },
              { id: 'stuck',    label: `🛑 Keeps It Stuck`,                color: '#F87171' },
            ],
            items: [
              {
                id:            'l19-g1',
                image:         'l19-game-1.png',
                label:         `You launch a small first version of your club even though it isn't perfect — so you can learn from what actually happens.`,
                correctBucket: 'launches',
                matchPhrase:   `Starting before everything is perfect is how you find out what actually works — no amount of planning replaces that.`,
              },
              {
                id:            'l19-g2',
                image:         'l19-game-2.png',
                label:         `Only three people show up to your first meeting — but you make it count and celebrate what you've started.`,
                correctBucket: 'launches',
                matchPhrase:   `Small wins matter. Three people who feel good about the first meeting is a better start than ten who didn't.`,
              },
              {
                id:            'l19-g3',
                image:         'l19-game-3.png',
                label:         `You keep waiting until you have the perfect name, the perfect plan, and the perfect team before doing anything.`,
                correctBucket: 'stuck',
                matchPhrase:   `Waiting for perfection before starting usually means never starting. A small real beginning beats a perfect imaginary one.`,
              },
              {
                id:            'l19-g4',
                image:         'l19-game-4.png',
                label:         `After one difficult meeting, you decide the whole idea was wrong and walk away.`,
                correctBucket: 'stuck',
                matchPhrase:   `Hard moments are part of every project — they're not evidence the idea is wrong. They're just the hard middle.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l19-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l19-q1',
              format:       'mc',
              question:     `Why is starting a club or project one of the best ways to develop leadership?`,
              options:      [
                `Because it looks impressive on school applications`,
                `It builds skills — vision, communication, organisation, persistence — that can't be learned in a classroom`,
                `Because groups always accomplish more than individuals working alone`,
                `Because it teaches you how to manage other people's time`,
              ],
              correctIndex: 1,
              explanation:  `Starting something develops skills that can only be built by doing: communicating a vision to real people, handling real setbacks, organising actual resources. No amount of reading or preparation gives you the same thing.`,
            },

            // Q2 — MC (source)
            {
              id:           'l19-q2',
              format:       'mc',
              question:     `What is the biggest mistake people make when starting something new?`,
              options:      [
                `Starting without telling enough people about it`,
                `Waiting until everything is perfect before launching`,
                `Not having enough funding or resources to begin`,
                `Starting with too many people on the founding team`,
              ],
              correctIndex: 1,
              explanation:  `Waiting for perfect conditions is how most good ideas never happen. A small real start — imperfect, messy, with three people in a room — teaches you more than any amount of planning. Starting is what makes it real.`,
            },

            // Q3 — MC (source)
            {
              id:           'l19-q3',
              format:       'mc',
              question:     `What is the best antidote when a new project starts losing momentum?`,
              options:      [
                `Adding more people to the team to share the workload`,
                `Making a bigger announcement to re-energise interest`,
                `Creating small visible wins that show people real progress is happening`,
                `Setting more ambitious goals to re-excite the team`,
              ],
              correctIndex: 2,
              explanation:  `When motivation drops, people need evidence that the project is moving — something completed, something tangible, something they can point to. Small visible wins provide that proof and give everyone a reason to keep going.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l19-q4',
              format:       'tf',
              question:     `Starting small and learning from real experience is more valuable than waiting until your plan is completely perfect.`,
              correctAnswer: true,
              explanation:  `True. A small real beginning gives you information that no amount of planning can provide. You discover what works, what doesn't, and who actually shows up — and that information makes the next version better.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l19-q5',
              format:       'fill-blank',
              question:     `When a project has achieved its goal, a great leader is willing to hand off leadership with generosity rather than ___.`,
              options:      ['possessiveness', 'pride', 'fear', 'disappointment'],
              correctIndex: 0,
              explanation:  `The goal was to create something valuable — not to stay in charge forever. Handing off with generosity when the time is right is itself a form of leadership; it gives the project the best chance to grow beyond what you could do alone.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l19-q6',
              format:       'mc',
              question:     `What does a small visible win do for a project that is losing momentum?`,
              options:      [
                `It proves to outsiders that the project deserves their support`,
                `It reduces the amount of work the rest of the team needs to do`,
                `It gives people evidence that real progress is happening, which reignites their motivation to keep going`,
                `It sets a new goal that resets everyone's expectations`,
              ],
              correctIndex: 2,
              explanation:  `Progress fuels motivation. When people see that something is actually moving — even if it's a small step — it confirms that the project is real and worth continuing. That feeling is what carries teams through the hard middle.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l19-realworld',
          type: 'real-world',
          content: {
            scenario:    `Project Launch Plan`,
            description: `Think of one thing at school, in your neighbourhood, or with friends that you wish existed or could be better. Write down the purpose and the single first step you could take this week — then take it.`,
            familyAdventure: `As a family, pick one real small thing you could start together — a neighbourhood project, a family tradition, something for a cause you care about. Write the six steps together and commit to doing the first one before the week is out.`,
            realWorldConnection: `Every team, club, charity, and community project started with someone who decided to begin — without a perfect plan, without permission, and often without knowing exactly how it would go. Starting something real builds more confidence and skill than any amount of preparation alone.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l19-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that every great team, movement, and project started with one person who decided to begin — without a perfect plan, without permission, and often without knowing exactly how it would turn out. You don't need to wait until you're ready. The beginning is the first act of leadership. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L19.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L19] Loaded: "Starting a Club or Project" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l19-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L19] One or more magazine assets missing'));
}
