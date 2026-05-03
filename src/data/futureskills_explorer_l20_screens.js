// ─────────────────────────────────────────────────────────────────────────────
// Future Skills  |  L20 — Innovation: How New Ideas Change the World
// Age band : explorers (6–8)   Guide: byte
// FINAL Future Skills lesson — subject completion celebration
// ─────────────────────────────────────────────────────────────────────────────

const FS_L20 = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',

  lessons: [
    {
      id:        'fs-6-8-20',
      title:     'Innovation: How New Ideas Change the World',
      duration:  12,
      xpReward:  50,
      badge:     'innovator',
      badgeName: 'Innovator',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l20-welcome',
          type:     'welcome',
          headline: 'Innovation: How New Ideas Change the World',
          subtitle: `What makes something truly innovative — and how do new ideas actually happen?`,
          visual:   '/explorer-assets/future-skills/l20-welcome.png',
        },

        // ── 2. MAGAZINE — §1 Hook ───────────────────────────────────────────
        {
          id:      'l20-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `The device that changed everything`,
            body: `In the early 2000s, most people had a phone for calls, a camera for photos, and a music player for music — three separate devices. Then a small team had a different idea: what if one pocket-sized computer could do all of it, and connect to the internet too? That single insight reshaped how billions of people communicate, navigate, shop, and learn. Around the same time, a shop perfected one-click ordering, and a service turned spare bedrooms into guesthouses for travellers. None of these ideas required brand-new technology — they just combined existing things in ways nobody had tried before.`,
            image:   '/explorer-assets/future-skills/l20-magazine-1.png',
            caption: `Innovation often means combining existing ideas in a new way`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l20-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Invention vs innovation`,
            body: `**Invention** is creating something that didn't exist before — a new device, a new material, a new formula. **Innovation** is taking what exists and applying it in a way that creates new value. The wheel was an invention. Attaching it to a cart to carry goods was innovation. A vacuum designer built over five thousand prototypes before finding a design that worked — that relentless iteration is innovation in action. Isaac Newton built on centuries of earlier mathematics. Thomas Edison's laboratory worked as a team of inventors, not a lone genius. Great ideas almost always come from **collaboration** and many **failed attempts**.`,
            image:   '/explorer-assets/future-skills/l20-magazine-2.png',
            caption: `Invention creates something new. Innovation creates new value from what exists.`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l20-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `The innovator's mindset`,
            body: `What separates innovators from everyone else isn't intelligence — it's a particular way of thinking. Innovators are intensely **curious** about why things work the way they do. They treat **failure as data**, not as evidence that they should stop. They look for connections **across different fields** — a solution from biology might fix a problem in engineering. And they're driven by genuine **passion** for the problem they're solving, which is what sustains them through the many setbacks before a breakthrough. This mindset isn't something you're born with — it's something you build, one question at a time.`,
            image:   '/explorer-assets/future-skills/l20-magazine-3.png',
            caption: `Curiosity + persistence + cross-field thinking = the innovator's mindset`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l20-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `The problems waiting for you`,
            body: `The world in 2025 has no shortage of problems that need innovative solutions: climate change, diseases, food security, access to clean water, mental health support at scale. Many of the tools that will be used to address these problems haven't been invented yet — and some of the people who will build them are in school right now. The skills you've built across these twenty lessons — critical thinking, digital literacy, creativity, data reasoning, and understanding technology — are exactly the foundation that innovators need. The question isn't whether the world needs new ideas. It's whether you're ready to start building them.`,
            image:   '/explorer-assets/future-skills/l20-magazine-4.png',
            caption: `The world's biggest problems need the most creative thinkers`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match game ────────────────────────────────
        {
          id:     'l20-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'innovator',   label: `💡 Innovator's Mindset`, color: '#34D399' },
              { id: 'not-mindset', label: `🚧 Not the Right Mindset`, color: '#F59E0B' },
            ],
            items: [
              {
                id:          'l20-g1',
                image:       'l20-game-1.png',
                label:       `Treating a failed experiment as useful data that gets you closer to the answer.`,
                correctBucket: 'innovator',
                matchPhrase:   `That's the innovator's mindset — failure is information, not the end.`,
              },
              {
                id:          'l20-g2',
                image:       'l20-game-2.png',
                label:       `Giving up after the first attempt doesn't work and assuming the idea was wrong.`,
                correctBucket: 'not-mindset',
                matchPhrase:   `Innovators expect setbacks — giving up after one failure misses the lesson inside it.`,
              },
              {
                id:          'l20-g3',
                image:       'l20-game-3.png',
                label:       `Noticing that a solution used in biology might solve a completely different problem in engineering.`,
                correctBucket: 'innovator',
                matchPhrase:   `Cross-field thinking is a core innovator skill — great ideas often come from unexpected connections.`,
              },
              {
                id:          'l20-g4',
                image:       'l20-game-4.png',
                label:       `Refusing to start until the plan is completely perfect and risk-free.`,
                correctBucket: 'not-mindset',
                matchPhrase:   `Waiting for a perfect plan stops innovation before it starts — iteration beats perfection.`,
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
              question:     `What is the key difference between an invention and an innovation?`,
              options:      [
                `An invention is useful; an innovation is just creative`,
                `An invention creates something new; an innovation applies existing things in a new way to create value`,
                `Inventions happen in labs; innovations happen in businesses`,
                `There is no real difference — the words mean the same thing`,
              ],
              correctIndex: 1,
              explanation:  `Invention brings something completely new into existence. Innovation takes what already exists and applies it in a way that creates new value — like combining a phone, camera, and internet connection into one pocket device.`,
            },

            // Q2 — MC (source)
            {
              id:           'l20-q2',
              format:       'mc',
              question:     `What do most major innovations have in common?`,
              options:      [
                `They were created by one brilliant person working alone`,
                `They came from collaboration and many failed attempts`,
                `They required entirely new materials or technology to be invented first`,
                `They happened suddenly, without any prior research`,
              ],
              correctIndex: 1,
              explanation:  `The "lone genius" story is almost always a myth. Major innovations typically involve teams, build on earlier work, and require many failures before a breakthrough.`,
            },

            // Q3 — MC (source)
            {
              id:           'l20-q3',
              format:       'mc',
              question:     `Which trait of the innovator's mindset helps them keep going through repeated setbacks?`,
              options:      [
                `Always having a perfect plan before they start`,
                `Being the smartest person in their field`,
                `Genuine curiosity and passion for the problem they're solving`,
                `Working completely alone to avoid distraction`,
              ],
              correctIndex: 2,
              explanation:  `Passion and curiosity are what sustain innovators through the inevitable failures. You can't stay motivated through dozens of setbacks unless you genuinely care about the problem.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l20-q4',
              format:       'tf',
              question:     `Most major innovations come from collaboration and building on earlier work — not from a single genius having one perfect idea alone.`,
              correctAnswer: true,
              explanation:  `True. Even figures celebrated as lone geniuses — like Newton and Edison — built on centuries of earlier work and collaborated with others. Innovation is almost always a team sport.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l20-q5',
              format:       'fill-blank',
              question:     `Applying existing ideas in a new way to create something valuable for people is called ___.`,
              options:      ['innovation', 'invention', 'research', 'design'],
              correctIndex: 0,
              explanation:  `Innovation doesn't always require creating something entirely new — it means applying what exists in a way that creates real new value for people.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l20-q6',
              format:       'mc',
              question:     `Why is passion for the problem an important part of the innovator's mindset?`,
              options:      [
                `It makes the innovator more popular with their team`,
                `It sustains them through the failures and setbacks that happen before a breakthrough`,
                `It helps them find funding from investors`,
                `It means they never feel frustrated or discouraged`,
              ],
              correctIndex: 1,
              explanation:  `Innovation involves many failures before success. Passion for the problem is what keeps innovators going when the easy path would be to give up.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l20-realworld',
          type: 'real-world',
          content: {
            scenario:    `Your Innovation Idea`,
            description: `Think of one problem you've noticed in your school, home, or community — something that could work better. Write down: What is the problem? Who does it affect? What already exists that might be part of a solution? What new combination or approach could you try?`,
            familyAdventure: `Ask a family member about a time they solved a problem in a creative way — at work, at home, or anywhere else. Was their solution something completely new, or a new combination of existing ideas? How many attempts did it take?`,
            realWorldConnection: `Innovators work in every field — medicine, education, energy, food, transport, and more. The skills that make someone a great innovator — curiosity, persistence, cross-field thinking, and comfort with failure — are the same skills you've been building across all twenty Future Skills lessons.`,
          },
        },

        // ── 9. CELEBRATION — Subject completion ─────────────────────────────
        {
          id:   'l20-celebration',
          type: 'celebration',
          content: {
            message: `Brilliant work, {name}! You've completed all twenty Future Skills lessons — and you now see the world of technology the way builders do. You understand how the internet works, what AI can and can't do, and how to turn problems into real solutions. This is just the beginning. The future needs people who think exactly the way you just learned to. Byte is so proud to have explored every one of these lessons with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default FS_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = FS_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = FS_L20.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = FS_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-FUTURESKILLS-L20] Loaded: "Innovation: How New Ideas Change the World" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l20-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l20-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l20-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l20-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-FUTURESKILLS-L20] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-FUTURESKILLS-L20] One or more magazine assets missing'));
}
