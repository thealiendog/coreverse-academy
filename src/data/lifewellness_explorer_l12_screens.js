// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L12 — Germs and Immunity
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L12 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-12',
      title:     'Germs and Immunity',
      duration:  12,
      xpReward:  50,
      badge:     'immune-expert',
      badgeName: 'Immune Expert',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l12-welcome',
          type:     'welcome',
          headline: 'Germs and Immunity',
          subtitle: `Your immune system is one of the most sophisticated defence networks in nature — working every moment to protect you, shaped by how you live`,
          visual:   '/explorer-assets/wellness/l12-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l12-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Types of germs`,
            body: `Germs — microorganisms that can cause disease — come in several types. **Bacteria** are living single-celled organisms (strep throat, some food poisoning). **Viruses** are not technically alive — they're genetic material in a protein shell that hijacks your cells to reproduce (colds, flu, chickenpox). **Fungi** cause infections like athlete's foot and ringworm. **Parasites** are organisms that live off a host. Importantly: **not all microorganisms are harmful**. Your gut contains trillions of beneficial bacteria that are essential for health — your relationship with the microscopic world is far more cooperative than it is adversarial.`,
            image:   '/explorer-assets/wellness/l12-magazine-1.png',
            caption: `Bacteria, viruses, fungi, and parasites — and trillions of beneficial microorganisms working with you`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l12-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Your immune system: three lines of defence`,
            body: `Your immune system has three layers. **First line:** physical barriers — skin (keeps germs out), mucus (traps germs in nose and throat), stomach acid (kills germs that enter through food), and tears (contain antimicrobial enzymes). **Second line:** non-specific immune response — inflammation, fever (higher temperature kills many pathogens), and white blood cells that engulf and destroy any foreign invader. **Third line:** adaptive immune response — specialised antibodies that target specific pathogens and create **immunological memory**, meaning your immune system gets smarter with every encounter.`,
            image:   '/explorer-assets/wellness/l12-magazine-2.png',
            caption: `Three layers — physical barriers, general response, and a targeted memory system that learns`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l12-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `How vaccines work`,
            body: `Vaccines train your immune system to recognise and fight a specific pathogen **before** you encounter the real thing. A vaccine introduces a harmless piece of the pathogen (a protein, a weakened version, or instructions for your cells to make the protein) — enough to trigger an immune response and create **memory cells**, without causing the actual disease. When you encounter the real pathogen later, your immune system recognises it immediately and responds before you get sick. Vaccines have eliminated or dramatically reduced smallpox, polio, measles, and dozens of other once-devastating diseases.`,
            image:   '/explorer-assets/wellness/l12-magazine-3.png',
            caption: `Vaccines create memory cells — so your immune system can respond immediately when it matters`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l12-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Supporting your immune system`,
            body: `Your immune system is profoundly shaped by how you live. **Sleep is immune-critical** — most immune cells are produced and repaired during sleep; consistently poor sleep is one of the fastest ways to reduce immune function. **Chronic stress** suppresses immunity — cortisol directly inhibits immune cells. **Regular movement** boosts immune surveillance, helping your body patrol for threats more effectively. **Nutrition matters** — vitamin C, vitamin D, zinc, and a diverse diet of whole foods all support immune function. And **handwashing** remains one of the most effective disease prevention strategies ever identified — stopping germs at the first line before your immune system even needs to get involved.`,
            image:   '/explorer-assets/wellness/l12-magazine-4.png',
            caption: `Sleep, stress management, movement, nutrition, and handwashing — all shape how well your immune system works`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l12-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'supports', label: `💪 Helps Your Immune System Stay Strong`, color: '#34D399' },
              { id: 'harder',   label: `😞 Makes Your Immune System Work Harder`, color: '#F87171' },
            ],
            items: [
              {
                id:            'l12-g1',
                image:         'l12-game-1.png',
                label:         `Getting a full night of sleep most nights.`,
                correctBucket: 'supports',
                matchPhrase:   `Most immune cells are produced and repaired during sleep — consistently getting enough rest is one of the most direct things you can do to support your immune system.`,
              },
              {
                id:            'l12-g2',
                image:         'l12-game-2.png',
                label:         `Washing your hands properly before eating and after using the bathroom.`,
                correctBucket: 'supports',
                matchPhrase:   `Handwashing is one of the most effective disease prevention strategies ever studied — it stops germs at the first line of defence before your immune system even needs to get involved.`,
              },
              {
                id:            'l12-g3',
                image:         'l12-game-3.png',
                label:         `Feeling under constant pressure and stress for weeks on end without any recovery.`,
                correctBucket: 'harder',
                matchPhrase:   `Chronic stress causes your body to produce cortisol, which directly suppresses immune function — your immune system is one of the first things to feel the effects of ongoing stress.`,
              },
              {
                id:            'l12-g4',
                image:         'l12-game-4.png',
                label:         `Staying up very late most nights and regularly not getting enough sleep.`,
                correctBucket: 'harder',
                matchPhrase:   `Without adequate sleep, your immune cells don't get the repair time they need — research consistently shows that sleep-deprived people get sick more often and take longer to recover.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l12-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l12-q1',
              format:       'mc',
              question:     `What is the key difference between bacteria and viruses?`,
              options:      [
                `Bacteria are bigger; viruses are smaller versions of bacteria`,
                `Bacteria are living single-celled organisms; viruses are not alive — they are genetic material that hijacks cells to reproduce`,
                `Bacteria cause colds; viruses cause more serious diseases`,
                `There is no meaningful biological difference between them`,
              ],
              correctIndex: 1,
              explanation:  `Bacteria are living organisms that can reproduce on their own and can be killed by antibiotics. Viruses are fundamentally different — they're not technically alive at all. They're packages of genetic material that can only reproduce by hijacking your own cells, which is why antibiotics don't work on viral infections.`,
            },

            // Q2 — MC (source)
            {
              id:           'l12-q2',
              format:       'mc',
              question:     `How do vaccines protect you from disease?`,
              options:      [
                `They kill pathogens already in your body`,
                `They introduce a harmless piece of a pathogen to train your immune system to recognise and fight it before real exposure`,
                `They strengthen white blood cells generally so they fight all diseases better`,
                `They prevent all pathogens from entering the body`,
              ],
              correctIndex: 1,
              explanation:  `Vaccines work by showing your immune system a harmless version of a threat — enough to trigger a response and create memory cells, without causing illness. When the real pathogen arrives later, your immune system already knows it and responds immediately. It's advance training for your body's defence network.`,
            },

            // Q3 — MC (source)
            {
              id:           'l12-q3',
              format:       'mc',
              question:     `What lifestyle factor most directly impairs immune function?`,
              options:      [
                `Not eating enough vegetables`,
                `Chronic sleep deprivation — most immune cells are produced and repaired during sleep`,
                `Spending too much time indoors`,
                `Exercising too vigorously`,
              ],
              correctIndex: 1,
              explanation:  `Sleep deprivation is one of the fastest ways to reduce immune function — the research on this is consistent and clear. Most immune cells are produced and repaired during sleep. People who regularly get too little sleep get sick more often, recover more slowly, and show reduced responses to vaccines.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l12-q4',
              format:       'tf',
              question:     `Your immune system has multiple layers of defence — physical barriers, a general response, and a targeted response that creates memory for specific pathogens.`,
              correctAnswer: true,
              explanation:  `True. The three-layer design is what makes your immune system so effective. Physical barriers stop most threats before they even enter. The non-specific response handles anything that gets through quickly. And the adaptive response creates precise, lasting protection — getting smarter with every infection or vaccine.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l12-q5',
              format:       'fill-blank',
              question:     `Vaccines work by creating ___ cells that remember a specific pathogen — so your immune system can respond immediately if you ever encounter the real thing.`,
              options:      ['memory', 'white blood', 'red blood', 'defence'],
              correctIndex: 0,
              explanation:  `Memory cells are the key to how vaccines provide lasting protection. After encountering a vaccine (or a real infection), your immune system creates memory cells that recognise the specific pathogen. When it appears again — even years later — those memory cells trigger a fast, powerful response before the infection can take hold.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l12-q6',
              format:       'mc',
              question:     `What makes the adaptive immune response the most sophisticated layer of your immune system?`,
              options:      [
                `It is the fastest layer — it responds within seconds of infection`,
                `It creates specific antibodies and memory cells for individual pathogens — meaning your immune system gets smarter and faster with every encounter`,
                `It is the only layer that uses white blood cells`,
                `It can kill any pathogen without needing to identify it first`,
              ],
              correctIndex: 1,
              explanation:  `The adaptive immune response is remarkable because it learns. It creates specific antibodies designed for a particular pathogen, and it stores memory cells that make future responses faster and more effective. This is why you're immune to certain diseases after having them once, and why vaccines can provide long-lasting protection.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l12-realworld',
          type: 'real-world',
          content: {
            scenario:    `Immune System Audit`,
            description: `Think about the last week — how was your sleep? Your stress levels? Your movement? Your food variety? These are all inputs your immune system is working with right now. Which one could you give a little more support this week?`,
            familyAdventure: `Research one disease that vaccines have dramatically reduced or eliminated — polio, smallpox, measles, or rubella. Find out: what was it like before the vaccine existed? What happened to those numbers after? Who developed it? Present your findings to the family. Understanding this history is one of the most inspiring things in all of medicine.`,
            realWorldConnection: `Immunologists — scientists who study the immune system — describe it as one of the most complex and elegant systems in all of biology. What you do every day genuinely shapes how well it works. Sleep, movement, nourishment, and stress management are not just lifestyle choices — they're inputs into a sophisticated biological defence network.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l12-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that your immune system is one of the most sophisticated defence networks in nature — working every moment to protect you, and shaped by how you live every day. Your body is remarkable, and it's on your side. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L12.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L12] Loaded: "Germs and Immunity" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l12-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L12] One or more magazine assets missing'));
}
