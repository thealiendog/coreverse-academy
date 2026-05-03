// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L12 — Animation: Making Things Move
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L12 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-12',
      title:     'Animation: Making Things Move',
      duration:  12,
      xpReward:  50,
      badge:     'animator',
      badgeName: 'Animator',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l12-welcome',
          type:     'welcome',
          headline: 'Animation: Making Things Move',
          subtitle: `When you watch a cartoon, you're seeing thousands of individual images flashed so fast your brain perceives smooth motion. Animation combines drawing, storytelling, music, and acting into one seamless art form — and once you understand how it works, watching it will never be quite the same`,
          visual:   '/explorer-assets/creative-arts/l12-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l12-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `How Animation Works`,
            body: `Animation works because of a phenomenon called **persistence of vision** — your eye retains an image for a fraction of a second after it disappears. When images are shown at **12 or more frames per second**, the eye fills in the gaps and perceives smooth motion. Film runs at **24 frames per second**. Traditional animation required artists to draw 24 individual drawings for every second of movement — a 90-minute animated film required around **129,600 individual drawings**. Modern 3D animation uses computers to generate frames, but the underlying principles of movement — how weight feels, how energy flows, how characters communicate emotion through their bodies — are identical to what hand-drawn animators solved decades ago.`,
            image:   '/explorer-assets/creative-arts/l12-magazine-1.png',
            caption: `Persistence of vision fools the brain into seeing motion — 24 still images per second become a moving world`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l12-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `The 12 Principles of Animation`,
            body: `A landmark book on animation published the **12 Principles of Animation** — still the foundation of animator training worldwide today. Key principles: **Squash and Stretch** — living things deform when moving and return to shape, giving animation a sense of weight and flexibility (a bouncing ball flattens when it hits the ground and stretches as it rises). **Anticipation** — characters prepare for an action before doing it, raising expectation (a character winds up before throwing). **Exaggeration** — emotions and actions are pushed beyond realism for clarity and impact. **Timing** — how many frames an action takes determines whether it feels fast and urgent or slow and heavy. These principles make animation feel **alive** rather than mechanical — they're the difference between movement that exists and movement that breathes.`,
            image:   '/explorer-assets/creative-arts/l12-magazine-2.png',
            caption: `Squash and stretch, anticipation, exaggeration, timing — the principles that make animation feel alive`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l12-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Types of Animation`,
            body: `Animation takes many forms, each with its own aesthetic and expressive possibilities. **Traditional 2D animation** is hand-drawn frame by frame — used in the classic Studio Ghibli films *My Neighbor Totoro* and *Spirited Away*, where individual frames have the warmth and texture of a painting. **Stop motion** photographs physical objects — clay, puppets, everyday items — in slightly different positions: *Wallace and Gromit*, *Coraline*, and *Kubo and the Two Strings* are all stop motion. **3D computer animation** builds three-dimensional models in software and renders them frame by frame — the technique behind most modern animated films. **Motion graphics** animate graphic design elements: logos, text, shapes — used in commercials, explainer videos, and title sequences. Each style makes different things possible and communicates differently to the eye.`,
            image:   '/explorer-assets/creative-arts/l12-magazine-3.png',
            caption: `2D, stop motion, 3D, motion graphics — each animation style has its own visual language and possibilities`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l12-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Animation as Storytelling`,
            body: `The greatest animated films are not great because of their animation — they're great because of their **stories and characters**. Story is everything. A technically perfect animation with a weak story is forgettable. A simple animation with a profound story is immortal. The most important questions in animation are not *"how do we make this character move?"* but *"what does this character want? What do they fear? How do they change?"* Animation is storytelling with a uniquely powerful visual language — characters can stretch, transform, fly, and express emotion through their entire body in ways live action cannot. But the visual language only matters when it's in service of a story worth telling. **Animation is storytelling first** — the technique exists to serve the truth.`,
            image:   '/explorer-assets/creative-arts/l12-magazine-4.png',
            caption: `Animation's visual magic only matters when it serves a story worth telling — character and story come first`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l12-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'works',         label: `🎬 This is how animation actually works`,     color: '#34D399' },
              { id: 'misunderstands', label: `🤔 A common misunderstanding about animation`, color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l12-g1',
                image:         'l12-game-1.png',
                label:         `Drawing a bouncing ball in a slightly different position on each page of a flipbook so that flipping through it quickly makes the ball look like it's really moving.`,
                correctBucket: 'works',
                matchPhrase:   `That's persistence of vision in action — the fundamental mechanism behind all animation. Each page is a still image, but shown rapidly in sequence, the eye retains each frame briefly and fills in the motion between them. The flipbook is the simplest possible demonstration of a principle that underlies every animated film ever made.`,
              },
              {
                id:            'l12-g2',
                image:         'l12-game-2.png',
                label:         `Making a cartoon character's whole body squash flat when it hits the ground and then spring back to its normal shape — so the bounce feels like it has real weight.`,
                correctBucket: 'works',
                matchPhrase:   `That's squash and stretch — one of the foundational principles of animation. Living things deform slightly under force and return to their shape, and animating this effect gives characters a physical presence that feels believable. Without it, characters look like rigid shapes moving through space. With it, they feel like they have mass, energy, and life.`,
              },
              {
                id:            'l12-g3',
                image:         'l12-game-3.png',
                label:         `Thinking that the most impressive-looking animation style automatically makes for the most powerful film.`,
                correctBucket: 'misunderstands',
                matchPhrase:   `Story and character are everything in animation — the technique only matters in service of a story worth telling. A simple animation with a profound story will move audiences long after a technically dazzling film with a thin story is forgotten. The most important questions an animator asks are about character and want, not about rendering quality.`,
              },
              {
                id:            'l12-g4',
                image:         'l12-game-4.png',
                label:         `Assuming stop-motion animation made with clay figures and physical objects is somehow less valid than computer-generated 3D animation.`,
                correctBucket: 'misunderstands',
                matchPhrase:   `Stop motion, 2D hand-drawn, and 3D computer animation are different tools with different aesthetic qualities — none is more legitimate than another. Each makes different things possible. Some of the most beloved animated films ever made are stop motion. The value of an animation style isn't its technology — it's whether it serves the story and moves the audience.`,
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
              question:     `What makes the brain perceive animation as smooth motion?`,
              options:      [
                `The brain is tricked by the speed of the images flashing past`,
                `Persistence of vision — the eye retains each image briefly, filling in the gaps when frames are shown at 12 or more per second`,
                `Special lighting makes the images appear to blur together into movement`,
                `Animation is actually a live performance recorded at very high speed`,
              ],
              correctIndex: 1,
              explanation:  `Persistence of vision is the optical phenomenon at the heart of all animation and film. Your eye holds an image for a fraction of a second after it disappears — and when the next slightly different image arrives before that retention fades, your brain perceives continuous motion rather than a series of stills. At 12 frames per second, the effect begins. At 24 frames per second — the standard for film — the motion appears completely fluid. Every animated film you've ever watched, however sophisticated, is built on this same basic quirk of human vision.`,
            },

            // Q2 — MC (source)
            {
              id:           'l12-q2',
              format:       'mc',
              question:     `What is the principle of "squash and stretch" in animation?`,
              options:      [
                `Making characters very small or very large for comic effect`,
                `Living things deform when moving and return to their shape — giving animation a sense of weight and physical presence`,
                `Stretching out scenes that need more time to develop emotionally`,
                `Squashing background elements to make the main character appear larger`,
              ],
              correctIndex: 1,
              explanation:  `Squash and stretch observes that living things are not rigid — they compress under impact and extend during acceleration. A ball flattens when it hits the ground and elongates as it rises. A character's cheeks squash when hit. This deformation and recovery is what separates animation that feels alive from animation that feels mechanical. Without squash and stretch, characters look like moving geometric shapes. With it, they feel like they have real mass, elasticity, and physical presence.`,
            },

            // Q3 — MC (replaced: was Pixar-branded question)
            {
              id:           'l12-q3',
              format:       'mc',
              question:     `What do the greatest animated films have in common with great storytelling in any other form?`,
              options:      [
                `They use the most advanced animation technology available at the time they were made`,
                `Story and character are everything — a technically perfect animation with a weak story is forgettable; a simple animation with a profound story is immortal`,
                `They are always aimed at children, because animation's visual style communicates best to young audiences`,
                `They avoid serious themes and focus on entertainment, because animation is an inherently light medium`,
              ],
              correctIndex: 1,
              explanation:  `The greatest animated films succeed for exactly the same reasons all great stories succeed: characters we care about, wants and fears that feel real, and emotional truth that reaches the audience regardless of whether the world on screen is realistic. Animation's visual language — the stretching, the transformation, the expressiveness impossible in live action — is powerful precisely because it can make invisible feelings visible. But that power is empty without a story worth telling. Story and character are always the foundation.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l12-q4',
              format:        'tf',
              question:      `The 12 principles of animation apply to all styles — 2D hand-drawn, stop motion, and 3D computer animation — not just traditional cel animation.`,
              correctAnswer: true,
              explanation:   `True. The principles describe how movement feels in the physical world — how weight behaves, how energy flows, how anticipation and follow-through work — and these truths apply regardless of the medium. A stop-motion animator uses squash and stretch just as a hand-drawn animator does, only with physical clay instead of pencil lines. A 3D animator applies timing and exaggeration in software. The principles aren't rules about a technique; they're observations about how living things move, and those observations are universal.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l12-q5',
              format:       'fill-blank',
              question:     `The optical effect that makes your brain perceive a rapid sequence of still images as smooth movement is called persistence of ___.`,
              options:      ['vision', 'motion', 'memory', 'light'],
              correctIndex: 0,
              explanation:  `Persistence of vision is the foundation of all moving-image media — film, animation, and video all exploit it. The eye retains each image briefly after it has been replaced by the next one, and when the replacement happens fast enough (12+ frames per second), the brain interprets the sequence as continuous movement rather than a series of stills. This optical quirk is the reason that 129,600 individual drawings can become a 90-minute film that feels like a living, breathing world.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l12-q6',
              format:       'mc',
              question:     `Why is "anticipation" described as an important principle in animation?`,
              options:      [
                `Because it allows animators to skip frames and save time by preparing the viewer in advance`,
                `Because showing a character preparing for an action before doing it creates expectation in the viewer — making the action feel more physically believable and emotionally satisfying when it arrives`,
                `Because characters who look ahead appear more intelligent and help audiences follow the plot`,
                `Because anticipation is the only principle that applies to both human characters and non-human objects`,
              ],
              correctIndex: 1,
              explanation:  `Anticipation works because of the way expectation shapes experience. When a character winds up before throwing, or crouches before jumping, the preparation telegraphs what's about to happen — and that moment of expectation makes the action itself feel more physically real and more impactful. Without anticipation, actions appear from nowhere and feel sudden and weightless. With it, they feel grounded in a physical world where every action has a preparation, just as it does in real life.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l12-realworld',
          type: 'real-world',
          content: {
            scenario:    `Flipbook Animator`,
            description: `Make a flipbook animation using sticky notes or small pieces of paper (at least 20). Start with the last page — draw a simple subject: a bouncing ball, a face changing expression, a stick figure waving. On each page going backward toward the first, make one small change. The simpler and more gradual the change, the smoother your animation will be. When done, hold the stack and flip quickly with your thumb. Then try applying squash and stretch to a bouncing ball: on impact, make it flatten wide; as it rises, make it tall and narrow. Feel how much more alive it looks.`,
            familyAdventure: `Watch an animated film together and watch it twice: once just to enjoy the story, then once specifically to notice the animation. Look for: squash and stretch in character movement; moments of anticipation before an action; how emotion is communicated through the whole body rather than just the face; and any moments where there are no words and the animation alone tells you everything. Discuss: what was your favourite moment of pure visual storytelling?`,
            realWorldConnection: `Animation principles are used far beyond cartoons — in video game character movement, special effects in live-action films, user interface design (the way your phone screen springs and bounces), and motion graphics in advertising. The underlying logic of how living things feel when they move is the same across all of these applications. Understanding animation teaches you to read visual movement with intention — and to create it with purpose.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l12-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that every bouncing ball, every squashing cheek, every single frame of the films you love was a deliberate choice made by a person who understood how movement feels. Animation is the art of giving life to the lifeless — and now you can see exactly how it's done. Muse is delighted you'll never look at a cartoon quite the same way again.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L12.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L12] Loaded: "Animation: Making Things Move" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l12-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L12] One or more magazine assets missing'));
}
