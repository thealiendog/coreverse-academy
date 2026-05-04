// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L09 — Community Service: Giving Back
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L09 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-09',
      title:     'Community Service: Giving Back',
      duration:  12,
      xpReward:  50,
      badge:     'community-builder',
      badgeName: 'Community Builder',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l09-welcome',
          type:     'welcome',
          guideText: `Here's a question for you, {name}: what is a community? It's not just the people who live near you. It's the network of relationships, shared spaces, and mutual care that holds a group of people together. And one of the things that makes communities strong — or lets them weaken — is how many people choose to give something back to them. Today we're talking about community service: not because it looks good on a list, but because the act of giving your time and skill to help others does something real to your own character. Something no classroom can replicate. Let's explore it.`,
          headline: 'Community Service: Giving Back',
          subtitle: `Giving your time and talents to help others builds the kind of character no classroom can teach`,
          visual:   '/explorer-assets/leadership/l09-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l09-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What is community service?`,
            body: `Nelson Mandela said: "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others." **Community service** is voluntary work done for the benefit of others — your neighbourhood, school, town, or the wider world. It can be as simple as picking up litter in a park, as organised as helping out at a local food bank, or as ambitious as starting a project to solve a real community problem. What makes it community service is the **intention**: you're doing it because it needs doing and you have something to contribute — not for a grade, a reward, or recognition.`,
            image:   '/explorer-assets/leadership/l09-magazine-1.png',
            caption: `Service means giving because it's needed, not because there's a reward`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l09-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Why service makes you stronger`,
            body: `Research consistently shows that people who regularly volunteer are happier, healthier, and report more meaning in their lives. Service builds **empathy** by connecting you with people whose lives are different from yours. It builds **perspective** by showing you problems bigger than your own. It builds real **leadership skills** — communication, teamwork, problem-solving — in situations that actually matter. And it builds **identity**: when you act as someone who helps, you gradually become someone who helps. That shift in how you see yourself is one of the most powerful effects of service.`,
            image:   '/explorer-assets/leadership/l09-magazine-2.png',
            caption: `When you act as someone who helps, you become someone who helps`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l09-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Finding your service`,
            body: `The most lasting service comes from matching what you're good at — or what you care about — to a real need. Ask yourself: What breaks my heart? What problems do I notice that others seem to walk past? What can I do that could genuinely help? If you love animals, a local shelter needs volunteers. If you're patient and good at explaining things, younger students would love a reading or maths buddy. If you're practical with technology, elderly neighbours might welcome help with their devices. If you're creative, a community space might love a mural. The most powerful service connects **your strengths** to **a real need**.`,
            image:   '/explorer-assets/leadership/l09-magazine-3.png',
            caption: `The best service matches what you can do with what the world needs`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l09-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Service vs charity`,
            body: `There's an important difference between charity and service. **Charity** addresses an immediate need — giving someone food when they're hungry right now. **Service** addresses root causes — teaching someone to grow food, or helping change the systems that make food insecurity happen in the first place. Both are valuable, and immediate help genuinely matters. But service that builds people's capacity and addresses what causes a problem creates more lasting change. The best leaders gradually move from "doing *for*" people to "doing *with*" people — building their ability to solve their own problems, not creating dependence.`,
            image:   '/explorer-assets/leadership/l09-magazine-4.png',
            caption: `Charity helps right now. Service builds something that lasts.`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l09-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'service',     label: `🌱 Community Service`,     color: '#34D399' },
              { id: 'not-service', label: `📋 Not Community Service`, color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l09-g1',
                image:         'l09-game-1.png',
                label:         `Spending a Saturday morning picking up litter in the local park with no reward.`,
                correctBucket: 'service',
                matchPhrase:   `Voluntary, for the benefit of others, with no reward — that's community service.`,
              },
              {
                id:            'l09-g2',
                image:         'l09-game-2.png',
                label:         `Helping a younger neighbour learn to read just because you can.`,
                correctBucket: 'service',
                matchPhrase:   `Giving your time and skill to help someone else grow — that's the spirit of service.`,
              },
              {
                id:            'l09-g3',
                image:         'l09-game-3.png',
                label:         `Doing extra homework practice to improve your own grade.`,
                correctBucket: 'not-service',
                matchPhrase:   `Working on yourself is great — but the benefit here is yours, not the community's.`,
              },
              {
                id:            'l09-g4',
                image:         'l09-game-4.png',
                label:         `Helping clean up at home because your parents asked you to do your chores.`,
                correctBucket: 'not-service',
                matchPhrase:   `Doing your chores is responsible — but community service means giving voluntarily beyond your usual duties.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l09-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l09-q1',
              format:       'mc',
              question:     `What makes an activity "community service"?`,
              options:      [
                `Any work done in a community setting`,
                `Voluntary work done to benefit others without expecting payment or reward`,
                `Work assigned by a school or organisation`,
                `Activities that improve your own neighbourhood only`,
              ],
              correctIndex: 1,
              explanation:  `The key is that it's voluntary and the benefit goes to others. If it's required or primarily for your own gain, it's something else — even if it's helpful.`,
            },

            // Q2 — MC (source)
            {
              id:           'l09-q2',
              format:       'mc',
              question:     `What are three things that regular service builds in a person?`,
              options:      [
                `Money, fame, and connections`,
                `Empathy, perspective, and real-world leadership skills`,
                `Academic grades, awards, and college applications`,
                `Physical strength, speed, and endurance`,
              ],
              correctIndex: 1,
              explanation:  `Service builds empathy (connecting with people whose lives differ from yours), perspective (seeing problems bigger than your own), and real leadership skills — communication, teamwork, and problem-solving — in situations that genuinely matter.`,
            },

            // Q3 — MC (source)
            {
              id:           'l09-q3',
              format:       'mc',
              question:     `What is the difference between charity and service?`,
              options:      [
                `Charity is more expensive than service`,
                `Charity addresses immediate symptoms; service addresses root causes and builds lasting capacity`,
                `Service is required; charity is optional`,
                `Charity is for individuals; service is for communities`,
              ],
              correctIndex: 1,
              explanation:  `Charity helps right now — and that immediate help matters. Service goes further by addressing the underlying causes and building people's capacity to solve their own problems.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l09-q4',
              format:       'tf',
              question:     `Community service only counts if it is organised by a school or an official group.`,
              correctAnswer: false,
              explanation:  `False. You can do community service on your own — helping a neighbour, picking up litter, tutoring a younger child. What makes it service is the voluntary intention to benefit others, not who organises it.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l09-q5',
              format:       'fill-blank',
              question:     `The most lasting community service comes from matching your own ___ to a real need in the world around you.`,
              options:      ['talents', 'schedule', 'grades', 'awards'],
              correctIndex: 0,
              explanation:  `When service connects what you're genuinely good at to a real need, it's more effective and more sustainable. Your unique strengths are what you have to offer.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l09-q6',
              format:       'mc',
              question:     `Which of these is an example of addressing a root cause rather than just an immediate symptom?`,
              options:      [
                `Handing out food at a one-off event`,
                `Donating old clothes once a year`,
                `Teaching someone a skill they can use to help themselves long-term`,
                `Making a donation to feel better about a problem`,
              ],
              correctIndex: 2,
              explanation:  `Teaching a skill builds someone's capacity to help themselves — that's addressing a root cause. The other options address an immediate need but don't change the underlying situation.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l09-realworld',
          type: 'real-world',
          content: {
            scenario:    `Community Needs Assessment`,
            description: `Look around your neighbourhood or school with fresh eyes this week. What's broken, missing, or overlooked? Pick one need your skills could address — even in a small way — and make a plan to do something about it.`,
            familyAdventure: `Do a family service project together — not something performative, but something that genuinely helps. Research a local organisation that needs volunteers, spend a couple of hours giving your time, and talk afterward: what did you notice about the people you helped? How did it feel? Will you go back?`,
            realWorldConnection: `Every community — schools, hospitals, neighbourhoods, sports clubs — runs partly on the voluntary effort of people who give their time because it matters. Service is one of the most direct ways to build the world you want to live in.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l09-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that service isn't about grand gestures — it's about showing up for others with the gifts you already have. Giving your time and energy to people who need it builds the kind of character that no classroom can teach. Valor is so proud to share this with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L09.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L09] Loaded: "Community Service: Giving Back" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l09-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L09] One or more magazine assets missing'));
}
