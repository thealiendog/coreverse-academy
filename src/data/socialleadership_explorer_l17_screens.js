// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L17 — Historical Leaders Who Changed the World
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L17 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-17',
      title:     'Historical Leaders Who Changed the World',
      duration:  12,
      xpReward:  50,
      badge:     'history-maker',
      badgeName: 'History Maker',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l17-welcome',
          type:     'welcome',
          headline: 'Historical Leaders Who Changed the World',
          subtitle: `History isn't made by impersonal forces — it's made by people who decided to act`,
          visual:   '/explorer-assets/leadership/l17-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l17-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Nelson Mandela: forgiveness as strength`,
            body: `Nelson Mandela spent 27 years in prison for fighting apartheid — the system of racial segregation that governed South Africa. When he was released in 1990, many expected him to call for revenge. Instead, he pursued reconciliation. He understood that lasting change required bringing even his former oppressors along, not punishing them. He became South Africa's first Black president in 1994 and created the Truth and Reconciliation Commission — prioritising healing over punishment. His leadership lesson: **forgiveness is not weakness**. It is one of the most powerful tools for lasting change.`,
            image:   '/explorer-assets/leadership/l17-magazine-1.png',
            caption: `Mandela chose reconciliation over revenge — and changed an entire country`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l17-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Malala Yousafzai: voice under fire`,
            body: `At age 11, Malala Yousafzai began writing an anonymous blog about life under Taliban rule in Pakistan's Swat Valley, advocating for girls' right to education. In 2012, at age 15, she was shot on her school bus. She survived — and instead of being silenced, she became the world's most prominent advocate for girls' education. At age 17, she became the youngest Nobel Peace Prize laureate in history. She continues today to listen to and amplify the voices of girls who are still denied access to school. Her leadership lesson: **using your voice even when it's dangerous is how change happens**.`,
            image:   '/explorer-assets/leadership/l17-magazine-2.png',
            caption: `Malala chose to keep speaking when silence would have been the safer choice`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l17-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Frederick Douglass: the power of knowledge`,
            body: `Frederick Douglass was born into slavery in Maryland. Teaching enslaved people to read was illegal — and dangerous for both teacher and student. Douglass secretly taught himself to read and write, understanding instinctively that **knowledge was the path to freedom**. He escaped slavery at age 20 and became one of America's greatest orators, writers, and abolitionists — people who fought to end slavery. His autobiography was so eloquent that many refused to believe a formerly enslaved person could have written it. His story is a reminder that the desire to learn — even against every obstacle — can be one of the most powerful acts of resistance and leadership.`,
            image:   '/explorer-assets/leadership/l17-magazine-3.png',
            caption: `Douglass understood that education is liberation — and proved it with his own life`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l17-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `What these leaders had in common`,
            body: `Different eras, different continents, different challenges — but remarkable commonalities. All three had a **clear vision** of a more just world. All three faced **enormous personal risk** for their beliefs. All three used their **unique gifts** — Mandela's political genius, Malala's voice and story, Douglass's intellect and language — in service of something larger than themselves. All three understood that leadership is not about personal power; it is about **changing conditions for others**. And all three started from positions of disadvantage, not privilege. Their stories are not tales of perfect people. They are examples of what's possible when someone decides to act.`,
            image:   '/explorer-assets/leadership/l17-magazine-4.png',
            caption: `Vision, courage, and service to others — the same qualities, across three continents and three centuries`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l17-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'leadership', label: `🌟 Shows Real Leadership`, color: '#34D399' },
              { id: 'easy-path', label: `🚶 Taking the Easy Path`,  color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l17-g1',
                image:         'l17-game-1.png',
                label:         `Speaking up for what you believe is right, even when everyone around you is staying silent.`,
                correctBucket: 'leadership',
                matchPhrase:   `Using your voice when silence would be safer is one of the clearest forms of leadership courage.`,
              },
              {
                id:            'l17-g2',
                image:         'l17-game-2.png',
                label:         `Working hard to learn something others say you shouldn't — because you know it matters for your future.`,
                correctBucket: 'leadership',
                matchPhrase:   `The willingness to learn and grow — even against obstacles — is a powerful form of leadership in itself.`,
              },
              {
                id:            'l17-g3',
                image:         'l17-game-3.png',
                label:         `Going along with something unfair because speaking up feels too risky.`,
                correctBucket: 'easy-path',
                matchPhrase:   `Staying quiet to avoid risk keeps things comfortable in the short term — but nothing changes.`,
              },
              {
                id:            'l17-g4',
                image:         'l17-game-4.png',
                label:         `Choosing to get back at someone who hurt you, rather than working together toward something better.`,
                correctBucket: 'easy-path',
                matchPhrase:   `Revenge feels satisfying but rarely creates lasting change. Mandela showed that the harder choice — reconciliation — builds something that lasts.`,
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
              question:     `What made Mandela's leadership after prison so remarkable?`,
              options:      [
                `He immediately passed laws to punish those who had imprisoned him`,
                `He chose forgiveness and reconciliation over revenge, which created conditions for lasting change`,
                `He left South Africa to lead from a position of safety abroad`,
                `He organised the largest political protest in South African history`,
              ],
              correctIndex: 1,
              explanation:  `After 27 years in prison, Mandela could have pursued revenge — and most people would have understood. Instead he chose reconciliation, understanding that lasting change required bringing former opponents along, not defeating them.`,
            },

            // Q2 — MC (source)
            {
              id:           'l17-q2',
              format:       'mc',
              question:     `What was Frederick Douglass's key insight about freedom?`,
              options:      [
                `That physical strength was what was needed to resist oppression`,
                `That organising large numbers of people was the only path to change`,
                `That education — specifically literacy — was the path to freedom and liberation`,
                `That nonviolent protest was always the most effective strategy`,
              ],
              correctIndex: 2,
              explanation:  `Douglass understood instinctively — before he had words to articulate it — that the ability to read and write was power. Knowledge was what those in power had denied enslaved people, which told him exactly what he needed to fight for.`,
            },

            // Q3 — MC (source)
            {
              id:           'l17-q3',
              format:       'mc',
              question:     `What quality did Mandela, Malala, and Douglass all share?`,
              options:      [
                `They were all born into privileged circumstances that gave them a platform`,
                `They all achieved change through exactly the same methods`,
                `A clear vision, personal courage, and leadership in service of others rather than themselves`,
                `They all became heads of state or government`,
              ],
              correctIndex: 2,
              explanation:  `All three came from very different backgrounds, eras, and contexts — but they shared the same core: a vision of something better, the courage to act despite serious personal risk, and a commitment to change conditions for others, not to gain personal power.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l17-q4',
              format:       'tf',
              question:     `Each of the three leaders in this lesson faced serious personal risk as part of their fight for change.`,
              correctAnswer: true,
              explanation:  `True. Mandela spent 27 years in prison, Malala survived an assassination attempt, and Douglass escaped slavery — teaching himself to read at great personal danger along the way. Their courage was not abstract; it was tested under real consequences.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l17-q5',
              format:       'fill-blank',
              question:     `Mandela, Malala, and Douglass each used their unique gifts in service of something larger than ___.`,
              options:      ['themselves', 'history', 'education', 'justice'],
              correctIndex: 0,
              explanation:  `All three directed their energy outward — toward changing conditions for others — rather than pursuing personal power or recognition. That orientation is one of the defining marks of great leadership.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l17-q6',
              format:       'mc',
              question:     `What does Frederick Douglass's story teach us about leadership?`,
              options:      [
                `That the most effective leaders always have the support of powerful people around them`,
                `That lasting change only ever happens through large-scale organised protest`,
                `That education and the willingness to keep learning can be the most powerful tools available to anyone`,
                `That writing and speaking matter more than taking real action`,
              ],
              correctIndex: 2,
              explanation:  `Douglass's path began with a single act: teaching himself to read. That commitment to knowledge — even at great risk — opened everything that followed. His story is a reminder that learning is never a passive act.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l17-realworld',
          type: 'real-world',
          content: {
            scenario:    `Leadership Portrait`,
            description: `Pick one historical leader not in this lesson who you find inspiring — from any country, any era. Find out one thing they gave up and one thing they stood for.`,
            familyAdventure: `Each family member picks a historical leader they admire — from any field or era — and shares: what challenge did that person face, and what did they do that took real courage? Write the names on paper and put them somewhere visible as your family's leadership board.`,
            realWorldConnection: `Every era produces people who see something that needs changing and decide to act. The qualities that made Mandela, Malala, and Douglass effective — vision, courage, and service to others — are available to anyone who chooses to develop them.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l17-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that history is made by real people — people who saw something that needed changing and found the courage to act, even when the cost was high. The qualities that drove Mandela, Malala, and Douglass are available to anyone who chooses to develop them. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L17.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L17] Loaded: "Historical Leaders Who Changed the World" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l17-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L17] One or more magazine assets missing'));
}
