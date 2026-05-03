// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L08 — Standing Up for What's Right
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L08 = {
  ageBand:   'explorers',
  subjectId: 'leadership',
  guide:     'valor',

  lessons: [
    {
      id:        'sl-6-8-08',
      title:     `Standing Up for What's Right`,
      duration:  12,
      xpReward:  50,
      badge:     'courageous',
      badgeName: 'Courageous',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l08-welcome',
          type:     'welcome',
          headline: `Standing Up for What's Right`,
          subtitle: `Moral courage is the kind of bravery that matters most in everyday life`,
          visual:   '/explorer-assets/leadership/l08-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l08-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What is moral courage?`,
            body: `In 1955, Rosa Parks refused to give up her seat on a bus to comply with an unjust rule. She later said: "The only tired I was, was tired of giving in." That act of standing up for what was right helped spark a movement that changed history. **Moral courage** is the willingness to do what you believe is right even when there's a real cost — social disapproval, lost friendships, or difficult consequences. It's different from physical courage (facing physical danger). Moral courage is the courage of everyday life: speaking up when others are silent, defending someone being treated unfairly, refusing to go along with something you know is wrong.`,
            image:   '/explorer-assets/leadership/l08-magazine-1.png',
            caption: `Moral courage means doing what's right even when it costs you something`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l08-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Why standing up is hard`,
            body: `The hardest part of moral courage isn't knowing what's right — most people already know. The hard part is the social cost. Humans have a deep, natural need to belong to a group. Going against what the group is doing can feel genuinely uncomfortable — not because you're weak, but because belonging matters to every person. This is why bystander behaviour happens — why people sometimes watch something wrong without stepping in. Understanding that this instinct is normal and human means you can **prepare** for those moments ahead of time, so when they come you can choose your response rather than just react.`,
            image:   '/explorer-assets/leadership/l08-magazine-2.png',
            caption: `The pull to go along is normal — which means you can prepare for it`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l08-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `The bystander effect and how to beat it`,
            body: `The **bystander effect** is a pattern researchers have observed: the more people who witness something wrong, the less likely anyone is to help — because each person assumes someone else will step in. The result is that everyone waits, and nobody acts. But here's the other half of the research: **when one person acts, others follow**. That first voice breaks the pattern. You can overcome the bystander effect by acting quickly before waiting becomes the norm, and by speaking directly to one specific person rather than the group — "Can you go and get a teacher right now?" is far more effective than a general call for help.`,
            image:   '/explorer-assets/leadership/l08-magazine-3.png',
            caption: `One person acting breaks the pattern — others are much more likely to follow`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l08-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Small courageous acts`,
            body: `Moral courage doesn't always mean historic moments. It shows up every day in small ways: not laughing at a joke that's meant to be mean, sitting next to someone who's eating alone, saying "that's not okay" when someone is treated badly, telling a teacher something difficult, or admitting a mistake when you didn't have to. These small acts aren't small at all — they're the **practice ground** for the bigger moments. Every time you choose to do the right thing when it's uncomfortable, you're building the kind of character that makes the bigger choices easier when they come.`,
            image:   '/explorer-assets/leadership/l08-magazine-4.png',
            caption: `Small acts of courage every day build the character for bigger ones`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l08-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'courage',    label: `🦁 Moral Courage`, color: '#34D399' },
              { id: 'going-along', label: `😶 Going Along`,  color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l08-g1',
                image:         'l08-game-1.png',
                label:         `Sitting next to a kid who's eating lunch alone.`,
                correctBucket: 'courage',
                matchPhrase:   `That's a small act of moral courage — choosing kindness even when it's easier to stay with your group.`,
              },
              {
                id:            'l08-g2',
                image:         'l08-game-2.png',
                label:         `Telling a friend you don't think it's funny when they make a mean comment about someone.`,
                correctBucket: 'courage',
                matchPhrase:   `Speaking up to a friend when something isn't right — that takes real courage.`,
              },
              {
                id:            'l08-g3',
                image:         'l08-game-3.png',
                label:         `Laughing along with a group joke that you know is unkind.`,
                correctBucket: 'going-along',
                matchPhrase:   `Going along to fit in — even without saying anything yourself — can still make others feel it's okay to continue.`,
              },
              {
                id:            'l08-g4',
                image:         'l08-game-4.png',
                label:         `Staying quiet when your group says something unfair about someone who isn't there.`,
                correctBucket: 'going-along',
                matchPhrase:   `Staying silent in those moments is a choice too — and your voice could be the one that changes things.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l08-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l08-q1',
              format:       'mc',
              question:     `What is moral courage?`,
              options:      [
                `The physical bravery to face dangerous situations`,
                `The willingness to do what you believe is right even when there's a social or personal cost`,
                `The ability to argue your point until others agree`,
                `Standing up only when you are certain you're right`,
              ],
              correctIndex: 1,
              explanation:  `Moral courage is about doing what's right even when it's uncomfortable, unpopular, or costly — not just when it's safe and easy. That's what makes it courage.`,
            },

            // Q2 — MC (source)
            {
              id:           'l08-q2',
              format:       'mc',
              question:     `What is the bystander effect?`,
              options:      [
                `The natural human tendency to avoid conflict`,
                `The more people who witness something wrong, the less likely anyone is to help — each assumes someone else will act`,
                `A rule that protects people who help in emergencies`,
                `When bystanders make a situation worse by overreacting`,
              ],
              correctIndex: 1,
              explanation:  `The bystander effect happens because everyone assumes someone else will step in — so nobody does. Understanding this pattern is the first step to breaking it.`,
            },

            // Q3 — MC (source)
            {
              id:           'l08-q3',
              format:       'mc',
              question:     `How can you overcome the bystander effect?`,
              options:      [
                `By waiting to see if someone else acts first`,
                `By gathering a group before intervening`,
                `By acting quickly and specifically — directly addressing one person to take action`,
                `By reporting it to authorities after the fact`,
              ],
              correctIndex: 2,
              explanation:  `Speaking directly to one specific person ("Can you get a teacher right now?") is far more effective than a general call for help. And acting quickly, before waiting becomes the norm, makes it much more likely others will follow.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l08-q4',
              format:       'tf',
              question:     `Moral courage always means doing something big and dramatic — like giving a speech or starting a movement.`,
              correctAnswer: false,
              explanation:  `False. Most moral courage shows up in small everyday moments — not laughing at a mean joke, sitting with someone who's alone, or saying "that's not okay." Small acts build the character for bigger ones.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l08-q5',
              format:       'fill-blank',
              question:     `The ___ effect explains why the more people who witness something wrong, the less likely anyone is to step in and help.`,
              options:      ['bystander', 'ripple', 'courage', 'leader'],
              correctIndex: 0,
              explanation:  `The bystander effect is a well-documented pattern: the more witnesses, the more each person assumes someone else will act. Knowing this helps you decide in advance that you'll be the one who breaks the pattern.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l08-q6',
              format:       'mc',
              question:     `Why does one person acting quickly make such a difference when everyone else is standing by?`,
              options:      [
                `Because that one person is always the bravest person present`,
                `Because it breaks the pattern — once someone acts, others are much more likely to follow`,
                `Because bystanders are usually relieved to be told what to do`,
                `Because the person who needs help will only accept help from one person`,
              ],
              correctIndex: 1,
              explanation:  `The first person to act dissolves the assumption that everyone else will wait. Once the pattern of inaction is broken, others quickly follow — which is why that first voice matters so much.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l08-realworld',
          type: 'real-world',
          content: {
            scenario:    `Courage Scenarios`,
            description: `Think of one small moment this week where the braver choice would have been to speak up or step in. What made it hard? What would you do if that moment came again?`,
            familyAdventure: `Share stories of moral courage across generations. Each person shares a time they stood up for something even when it was hard — or a time they wished they had. What did you learn? What would you do differently now?`,
            realWorldConnection: `Moral courage shows up in every field — in doctors who speak up about unsafe practices, in workers who flag problems others ignore, in students who stand up for classmates. It's one of the most valued qualities a person can have in any community.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l08-celebration',
          type: 'celebration',
          content: {
            message: `Well done, {name}! You now know that moral courage isn't about grand gestures — it's built in the small moments, every single day. Every time you choose to do the right thing when it's hard, you're building the kind of character that Valor is so proud to see growing in you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L08.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L08] Loaded: "Standing Up for What's Right" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l08-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l08-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l08-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l08-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L08] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L08] One or more magazine assets missing'));
}
