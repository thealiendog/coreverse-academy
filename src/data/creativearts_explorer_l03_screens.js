// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L03 — Drawing Techniques: Perspective and Proportion
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L03 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-03',
      title:     'Drawing Techniques: Perspective and Proportion',
      duration:  12,
      xpReward:  50,
      badge:     'perspective-artist',
      badgeName: 'Perspective Artist',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l03-welcome',
          type:     'welcome',
          guideText: `Here's a question that fascinated me for a long time, {name}: why do some drawings look completely flat — stuck to the surface of the paper — while others look like you could step right into them? Like there's real space behind the page? The answer is two principles that transformed the history of art when artists figured them out: perspective and proportion. Once you understand these, you'll spot them in every painting, every photograph, every film frame. And your own drawings will take a real leap forward. Today we unlock both of them. Ready to make your work come alive?`,
          headline: 'Drawing Techniques: Perspective and Proportion',
          subtitle: `Why do some drawings look flat and awkward while others look like you could step right into them? The secret is two principles that changed art forever — and once you understand them, your drawings will take a real leap forward`,
          visual:   '/explorer-assets/creative-arts/l03-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l03-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `One-Point Perspective`,
            body: `Perspective is based on one optical truth: objects appear **smaller as they get farther away**, and parallel lines appear to meet at a point on the horizon called the **vanishing point**. In **one-point perspective**, all lines that go into the distance converge at one vanishing point on the horizon line. This is how a road looks — it appears to get narrower and narrower until it disappears at a single point. Boxes, buildings, hallways, and rooms drawn in one-point perspective look instantly three-dimensional. It's one of the most powerful drawing tools in existence, and once you understand it, you'll see it everywhere.`,
            image:   '/explorer-assets/creative-arts/l03-magazine-1.png',
            caption: `One vanishing point on the horizon — all receding lines meet there, creating instant depth`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l03-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Two-Point Perspective`,
            body: `**Two-point perspective** uses two vanishing points on the horizon line — one on the left and one on the right. This is how we see buildings from the corner: the left side goes to the left vanishing point, the right side goes to the right vanishing point. Most cityscape drawings use two-point perspective. Once you master one-point, two-point follows naturally — the principles are the same, but now you have two sets of receding lines each finding their own point. The result is a much more realistic, dynamic view of three-dimensional space.`,
            image:   '/explorer-assets/creative-arts/l03-magazine-2.png',
            caption: `Two vanishing points — one left, one right — give buildings and cityscapes their realistic depth`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l03-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Proportion: Getting Sizes Right`,
            body: `**Proportion** means the size relationship between different parts of a drawing. The most common proportion mistake beginners make: drawing eyes too high on a face. The eyes are actually **halfway down the head** — not near the top where it feels like they should be. Human bodies are about **7–8 heads tall**. These are called proportional relationships, and every subject has them. The secret to accurate proportion is this: **don't draw what you think you see — draw what you actually observe**. Measure with your eye rather than relying on what your brain tells you an object looks like.`,
            image:   '/explorer-assets/creative-arts/l03-magazine-3.png',
            caption: `Eyes sit halfway down the face — proportion is about observing carefully, not drawing what you expect`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l03-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Seeing Before Drawing`,
            body: `The most important skill in drawing is not hand control — it's **observational accuracy**. Most drawing problems come from drawing what the brain **thinks** an object looks like — a symbol — rather than what the eye **actually sees**: specific shapes, angles, and proportions. One classic drawing exercise reveals this beautifully: when people draw a familiar object upside-down, they draw it far more accurately — because the brain can no longer recognise it and apply its shortcut symbols. The upside-down object has to be drawn as pure shapes and lines, and the result is almost always better. **True drawing is true seeing.**`,
            image:   '/explorer-assets/creative-arts/l03-magazine-4.png',
            caption: `Drawing accurately means seeing clearly — the eye, not the brain's symbol shortcuts, is what guides the pencil`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l03-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'realistic', label: `🎯 Makes a Drawing Look More Realistic`, color: '#34D399' },
              { id: 'mistake',   label: `🤔 A Common Drawing Mistake to Watch Out For`, color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l03-g1',
                image:         'l03-game-1.png',
                label:         `Drawing a road that gets narrower and narrower until it disappears to a single point in the distance.`,
                correctBucket: 'realistic',
                matchPhrase:   `That's one-point perspective in action — parallel lines appear to meet at the vanishing point on the horizon, and that convergence is what creates the instant illusion of depth on a flat page.`,
              },
              {
                id:            'l03-g2',
                image:         'l03-game-2.png',
                label:         `Placing the eyes of a drawn face about halfway down the head, not near the very top.`,
                correctBucket: 'realistic',
                matchPhrase:   `The eyes actually sit about halfway down the head — knowing this proportion is one of the things that makes a face drawing look realistic rather than cartoonish. It's a small shift that makes a huge difference.`,
              },
              {
                id:            'l03-g3',
                image:         'l03-game-3.png',
                label:         `Drawing all the buildings on a street the same size, even the ones far away in the distance.`,
                correctBucket: 'mistake',
                matchPhrase:   `Objects in the distance appear smaller — if everything's the same size, the sense of depth disappears and the scene looks completely flat. Perspective means farther away always means drawn smaller.`,
              },
              {
                id:            'l03-g4',
                image:         'l03-game-4.png',
                label:         `Drawing eyes very close to the top of a head, leaving only a tiny strip of forehead above them.`,
                correctBucket: 'mistake',
                matchPhrase:   `Almost everyone makes this mistake because the brain's shortcut puts eyes near the top — but careful observation shows they're much lower down. Drawing what you actually see, not what you expect to see, is the key skill.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l03-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l03-q1',
              format:       'mc',
              question:     `What is a vanishing point in perspective drawing?`,
              options:      [
                `The point where objects disappear off the edge of the paper`,
                `The point on the horizon line where parallel lines appear to converge as they recede into the distance`,
                `The darkest point in a drawing where shadows concentrate`,
                `The centre of the composition where the viewer's eye is drawn`,
              ],
              correctIndex: 1,
              explanation:  `The vanishing point is the spot on the horizon line where parallel lines appear to meet as they recede into the distance. In real life, a straight road appears to narrow to a point on the horizon — that's the vanishing point. Placing it accurately and drawing all receding lines toward it is what creates convincing three-dimensional depth on a flat surface.`,
            },

            // Q2 — MC (source)
            {
              id:           'l03-q2',
              format:       'mc',
              question:     `Where are human eyes actually located on the face?`,
              options:      [
                `Near the top of the head — about one-quarter from the top`,
                `Approximately halfway down the head — much lower than most beginners draw them`,
                `At the same level as the ears`,
                `Three-quarters of the way down the head`,
              ],
              correctIndex: 1,
              explanation:  `The eyes sit approximately halfway down the head — a fact that surprises almost everyone the first time they measure it. Most beginners draw eyes too high because the brain's symbol for "face" places them near the top of a large round head. Observing carefully — rather than drawing the symbol — is the key shift that makes portraits start to look realistic.`,
            },

            // Q3 — MC (source)
            {
              id:           'l03-q3',
              format:       'mc',
              question:     `What is proportion in drawing?`,
              options:      [
                `How large the drawing is relative to the paper`,
                `The accurate size relationship between different parts of a drawing`,
                `The balance between light and dark areas`,
                `The technique of dividing a drawing into equal sections`,
              ],
              correctIndex: 1,
              explanation:  `Proportion is about getting the size relationships right — how large one part of a drawing is compared to another. A head that's too large for a body, eyes placed too high on a face, or a building the same size as a person standing next to it all break proportion. Accurate proportion makes drawings feel believable, even when they're not photorealistic.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l03-q4',
              format:        'tf',
              question:      `In perspective drawing, objects in the distance are drawn smaller — this is how artists create the illusion of depth and three-dimensional space on a flat page.`,
              correctAnswer: true,
              explanation:   `True. The optical effect of objects appearing smaller as they recede into the distance is the foundation of perspective drawing. By replicating this effect deliberately — drawing near objects larger and distant objects smaller, and having parallel lines converge toward vanishing points — artists create the convincing illusion of three-dimensional space on a completely flat surface.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l03-q5',
              format:       'fill-blank',
              question:     `In one-point perspective, all the lines that go into the distance meet at a single point called the ___ point.`,
              options:      ['vanishing', 'horizon', 'center', 'meeting'],
              correctIndex: 0,
              explanation:  `The vanishing point is where all the receding lines converge in a one-point perspective drawing. It sits on the horizon line — the viewer's eye level. Everything in the drawing that goes into the distance — the edges of a road, the tops of buildings, the lines of a ceiling — all aim toward this single point, which is what creates the three-dimensional illusion.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l03-q6',
              format:       'mc',
              question:     `Why do many beginners draw eyes too high on a face?`,
              options:      [
                `Because eyes are genuinely easier to draw near the top of the head`,
                `Because the brain draws a familiar symbol — with eyes near the top — rather than observing where the eyes actually fall, which is approximately halfway down the head`,
                `Because beginning art classes teach this method first as a starting point`,
                `Because faces look more expressive with eyes positioned higher`,
              ],
              correctIndex: 1,
              explanation:  `The brain stores a shortcut symbol for "face" — a big oval with two eyes near the top. When you draw from memory or without careful observation, you draw this symbol rather than what you actually see. The solution is to look carefully at the real subject and measure the actual proportions instead of trusting what the brain insists it looks like. This shift from symbol-drawing to observational drawing is one of the biggest breakthroughs in learning to draw.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l03-realworld',
          type: 'real-world',
          content: {
            scenario:    `Perspective City`,
            description: `Draw a city street in one-point perspective. Draw a horizontal line across the middle of your paper — that's the horizon line. Mark a dot in the centre — that's your vanishing point. Draw a road that gets narrower as it approaches the dot. Add buildings on each side with their top and bottom edges pointing toward the vanishing point. Add windows, doors, and people that get smaller as they approach the dot. Step back and look: you've created three-dimensional space on flat paper.`,
            familyAdventure: `Go outside and find a long straight road, path, or corridor. Stand at one end and look toward the other end — point out the vanishing point where the edges seem to meet. Then look at a building from the corner and find where the two sets of parallel lines would meet on either side. Take some photos. Then draw what you saw using what you learned about perspective, and compare your drawing to the photo.`,
            realWorldConnection: `Perspective drawing was developed during the Renaissance in the 15th century and transformed Western art entirely. Before linear perspective, paintings looked flat. After it, artists could create convincing illusions of three-dimensional space — opening up whole new possibilities for telling stories and capturing the world on a flat surface.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l03-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that depth and space in a drawing are not magic — they're a system, and that system is yours. Lines converging to a vanishing point, eyes placed halfway down a face — these are tools that artists have used for centuries to build whole worlds on flat paper. Pick up a pencil and you hold that same power. Muse is in awe of what your eye and hand can learn to do together.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L03.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L03] Loaded: "Drawing Techniques: Perspective and Proportion" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l03-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L03] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L03] One or more magazine assets missing'));
}
