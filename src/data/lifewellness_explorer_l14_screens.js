// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L14 — The Cardiovascular System: Your Heart
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L14 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-14',
      title:     'The Cardiovascular System: Your Heart',
      duration:  12,
      xpReward:  50,
      badge:     'heart-health-hero',
      badgeName: 'Heart Health Hero',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l14-welcome',
          type:     'welcome',
          guideText: `Here's something remarkable to sit with, {name}: your heart started beating about three weeks after you were conceived — before you were even born. It hasn't stopped once since. Right now, as you're reading this, it's pumping blood to every cell in your body — delivering oxygen, removing waste, regulating temperature. And how you live now, at your age, is genuinely building the foundation for how strong that system will be for the rest of your life. Today we're going to look at how your cardiovascular system works, what keeps it healthy, and what puts it under strain. This one really matters.`,
          headline: 'The Cardiovascular System: Your Heart',
          subtitle: `Your heart has been beating since before you were born — and how you live now is genuinely building the foundation for a lifetime of heart strength`,
          visual:   '/explorer-assets/wellness/l14-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l14-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `How your heart works`,
            body: `Your heart is a **four-chambered muscle** that pumps blood continuously — approximately 100,000 times every day, without ever taking a break. The **right side** receives oxygen-depleted blood from the body and sends it to the lungs. The **left side** receives oxygen-rich blood from the lungs and pumps it to the entire body. Each heartbeat has two phases: **systole** (the heart muscle contracts and pumps blood out) and **diastole** (the heart muscle relaxes and fills with blood). Your blood pressure reading shows **two numbers** — the pressure during heart contraction over the pressure during heart relaxation.`,
            image:   '/explorer-assets/wellness/l14-magazine-1.png',
            caption: `Right side to lungs, left side to body — 100,000 pumps a day, every day, without stopping`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l14-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Blood: what it carries`,
            body: `Blood is a complex fluid doing remarkable work. **Red blood cells** carry oxygen throughout your body using haemoglobin — what gives blood its red colour. **White blood cells** carry out immune function. **Platelets** enable clotting when you bleed. **Plasma** (the liquid base) carries nutrients, hormones, waste products, and proteins. Your body produces approximately **2 million new red blood cells every second** in your bone marrow — replacing the ones that reach the end of their roughly 120-day lifespan. Your blood is a constantly renewed system.`,
            image:   '/explorer-assets/wellness/l14-magazine-2.png',
            caption: `Red cells carry oxygen, white cells fight infection, platelets clot wounds — all carried in plasma`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l14-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `What affects heart health`,
            body: `**The habits you build now genuinely shape your heart's health for decades** — because lifestyle choices compound over a lifetime. Major influences on heart health: **smoking** (directly damages blood vessel walls), **high blood pressure** (strains the heart and vessels over time), **physical inactivity** (the heart muscle, like all muscles, weakens without regular use), **an eating pattern low in whole foods** (affects blood vessel health), and **chronic stress** (raises blood pressure and promotes inflammation). Many of these are within your influence — and starting to build good habits now is far more powerful than trying to reverse damage later.`,
            image:   '/explorer-assets/wellness/l14-magazine-3.png',
            caption: `Lifestyle choices compound over decades — what you do now shapes the heart you'll have`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l14-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Building a strong heart now`,
            body: `Heart health is built through habits that compound over time. **Aerobic exercise** (running, swimming, cycling, dancing) strengthens the heart muscle and improves its efficiency — making each beat do more work with less effort. **An eating pattern rich in vegetables, fruits, whole grains, fish, nuts, and olive oil** protects blood vessels. **Avoiding smoking and secondhand smoke** is non-negotiable. **Managing stress** through breathing, movement, and connection protects against chronic inflammation. **Consistent sleep** gives your heart the recovery time it needs. The habits you build right now are genuinely building the heart you'll have for life.`,
            image:   '/explorer-assets/wellness/l14-magazine-4.png',
            caption: `Movement, whole foods, no smoking, stress management, sleep — the habits that compound into heart strength`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l14-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'strong',  label: `❤️ Supports a Strong, Healthy Heart`, color: '#34D399' },
              { id: 'strain',  label: `⚠️ Puts Extra Strain on the Heart`,    color: '#F87171' },
            ],
            items: [
              {
                id:            'l14-g1',
                image:         'l14-game-1.png',
                label:         `Getting active most days in ways you enjoy — dancing, cycling, running around.`,
                correctBucket: 'strong',
                matchPhrase:   `Your heart is a muscle — and like all muscles, it grows stronger and more efficient when you challenge it regularly through movement.`,
              },
              {
                id:            'l14-g2',
                image:         'l14-game-2.png',
                label:         `Managing stress through breathing, movement, or talking to someone you trust.`,
                correctBucket: 'strong',
                matchPhrase:   `Chronic stress raises blood pressure and promotes inflammation over time — having real ways to process and recover from stress genuinely protects your heart.`,
              },
              {
                id:            'l14-g3',
                image:         'l14-game-3.png',
                label:         `Living with high levels of ongoing stress without any ways to manage it.`,
                correctBucket: 'strain',
                matchPhrase:   `When stress has nowhere to go, it keeps blood pressure elevated and inflammation higher than your body needs — over years, that puts real wear on your cardiovascular system.`,
              },
              {
                id:            'l14-g4',
                image:         'l14-game-4.png',
                label:         `Going day after day without any physical activity or movement.`,
                correctBucket: 'strain',
                matchPhrase:   `Like any muscle, a heart that isn't regularly challenged becomes gradually less efficient — consistent movement is the most direct investment you can make in long-term heart strength.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l14-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l14-q1',
              format:       'mc',
              question:     `What does the left side of your heart do?`,
              options:      [
                `Receives blood from the body and sends it to the lungs to pick up oxygen`,
                `Receives oxygen-rich blood from the lungs and pumps it to the entire body`,
                `Filters waste products out of the blood`,
                `Controls heart rate and rhythm`,
              ],
              correctIndex: 1,
              explanation:  `The left side of the heart is the powerful pumping side — it receives oxygen-rich blood from the lungs and pumps it throughout the entire body. It's the stronger side because it has to push blood all the way to your toes and back, while the right side only has to reach the nearby lungs.`,
            },

            // Q2 — MC (source)
            {
              id:           'l14-q2',
              format:       'mc',
              question:     `What does your blood pressure reading measure?`,
              options:      [
                `How fast and how forcefully your heart beats per minute`,
                `The pressure during heart contraction (systole) over the pressure during heart relaxation (diastole)`,
                `The thickness of your blood relative to water`,
                `The amount of oxygen currently in your blood`,
              ],
              correctIndex: 1,
              explanation:  `Blood pressure is recorded as two numbers. The first (higher) number is systolic pressure — the force exerted on your blood vessels when your heart contracts and pushes blood out. The second (lower) number is diastolic pressure — the force when your heart relaxes and fills. Both numbers together give a picture of the stress your cardiovascular system is under.`,
            },

            // Q3 — MC (replaced — Flag 12)
            {
              id:           'l14-q3',
              format:       'mc',
              question:     `What makes aerobic exercise especially valuable for your heart?`,
              options:      [
                `It thins the blood so it flows more easily through vessels`,
                `It reduces the number of times the heart needs to beat per day`,
                `The heart is a muscle — regular aerobic exercise makes it stronger and more efficient, so each beat does more work with less effort`,
                `It increases the size of red blood cells so they carry more oxygen`,
              ],
              correctIndex: 2,
              explanation:  `Your heart is a muscle, and like all muscles it responds to challenge by getting stronger. Regular aerobic exercise makes the heart more efficient — it pumps more blood per beat and can meet the body's demands with less effort. Over time, a well-trained heart beats fewer times per minute at rest while still delivering everything the body needs.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l14-q4',
              format:       'tf',
              question:     `Your heart is a muscle — and like all muscles, it grows stronger and more efficient when you challenge it regularly through physical activity.`,
              correctAnswer: true,
              explanation:  `True. The heart responds to aerobic exercise the same way skeletal muscles respond to resistance training — it adapts and gets stronger. A heart that is regularly challenged through physical activity pumps more blood per beat, works with less effort at rest, and is generally more resilient. This adaptation starts from the very first time you exercise and builds with consistency.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l14-q5',
              format:       'fill-blank',
              question:     `Blood pressure is recorded as two numbers — the pressure when your heart ___ over the pressure when it relaxes.`,
              options:      ['contracts', 'rests', 'fills', 'expands'],
              correctIndex: 0,
              explanation:  `The higher number in a blood pressure reading is systolic pressure — measured when the heart contracts and pushes blood out into the arteries. The lower number is diastolic pressure — measured when the heart relaxes and fills with blood between beats. Both together describe the force your blood vessels are experiencing throughout the cardiac cycle.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l14-q6',
              format:       'mc',
              question:     `What does your blood carry throughout your body?`,
              options:      [
                `Only oxygen and carbon dioxide`,
                `Oxygen via red blood cells, nutrients, immune cells, hormones, and waste products — essentially everything your cells need delivered and removed`,
                `Mainly water and minerals to keep cells hydrated`,
                `Primarily white blood cells for constant immune surveillance`,
              ],
              correctIndex: 1,
              explanation:  `Blood is your body's complete internal transport system. Red blood cells deliver oxygen and remove carbon dioxide. White blood cells provide immune defence. Platelets handle clotting. And plasma — the liquid base — carries nutrients, hormones, waste products, and proteins to and from every cell in your body. It's doing all of this simultaneously, continuously, without stopping.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l14-realworld',
          type: 'real-world',
          content: {
            scenario:    `Heart Rate Experiment`,
            description: `Measure your resting heart rate: sit quietly for a few minutes, then count your pulse for 60 seconds (press two fingers on your wrist or neck). Now do 2 minutes of vigorous jumping jacks. Measure your heart rate immediately, then again after 1 minute of rest. Notice how quickly your heart returns to resting — this recovery speed is a real indicator of cardiovascular fitness.`,
            familyAdventure: `Do a heart health family day. Go for an active walk together, cook a heart-nourishing dinner (salmon, vegetables, olive oil, whole grains), and talk about your family's health history together. Do any relatives have heart conditions or high blood pressure? Knowing your family history is one of the most useful pieces of health knowledge you can have.`,
            realWorldConnection: `Cardiologists — heart specialists — consistently emphasise that cardiovascular health is built over decades, not fixed in a single moment. The lifestyle habits you establish now compound over years into the heart health you'll have in adulthood. What you do for your heart today genuinely matters.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l14-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that your heart has been working tirelessly for you since before you were born — and that how you live now is genuinely building the foundation for a lifetime of heart strength. Every time you move, sleep well, and manage stress, you're caring for it. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L14.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L14] Loaded: "The Cardiovascular System: Your Heart" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l14-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L14] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L14] One or more magazine assets missing'));
}
