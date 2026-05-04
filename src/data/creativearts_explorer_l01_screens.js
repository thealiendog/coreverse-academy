// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L01 — The Elements of Art: Line, Shape, Color, Texture
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L01 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-01',
      title:     'The Elements of Art: Line, Shape, Color, Texture',
      duration:  12,
      xpReward:  50,
      badge:     'art-elements-explorer',
      badgeName: 'Art Elements Explorer',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l01-welcome',
          type:     'welcome',
          guideText: `Oh, {name} — I'm so glad you're here. I'm Muse, and I want to show you something that's going to change how you see the entire world. Everywhere you look — every painting, every building, every poster, every doodle — is built from the same small set of ingredients. Line. Shape. Color. Texture. Artists have been using these same elements since the very first cave paintings forty thousand years ago. Today you're going to learn to see them — really see them — and once you do, you'll start spotting them everywhere: in nature, in design, in the art you already make. Are you ready? Let's open your eyes.`,
          headline: 'The Elements of Art: Line, Shape, Color, Texture',
          subtitle: `Every painting, drawing, sculpture, and design ever made — from cave paintings 40,000 years ago to digital art today — is built from the same basic ingredients. Once you can see the elements of art, you'll never look at the world the same way again`,
          visual:   '/explorer-assets/creative-arts/l01-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l01-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Line: The Foundation of Everything`,
            body: `A line is a mark that travels between two points — but in art, **lines do far more than connect dots**. Lines have personality: **thick lines** feel bold and heavy, **thin lines** feel delicate. **Straight lines** feel structured and calm, **curved lines** feel organic and flowing. **Diagonal lines** create energy and movement. **Zigzag lines** create tension and excitement. Artists use line to create shapes, suggest texture, show movement, guide the viewer's eye, and express emotion — all with a single mark. Every drawing you've ever made started with a line. Learning to choose your lines intentionally is one of the first and most powerful skills in all of visual art.`,
            image:   '/explorer-assets/creative-arts/l01-magazine-1.png',
            caption: `Every drawing starts with a line — but which kind of line you choose changes everything`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l01-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Shape: Two-Dimensional Forms`,
            body: `A **shape** is a closed area created by one or more lines. **Geometric shapes** — circles, squares, triangles, rectangles — feel structured, mathematical, and man-made. **Organic shapes** — irregular, flowing, natural-looking — feel alive and natural. Every object you see can be broken down into basic shapes, which is why art teachers tell beginners to **"find the shapes"** in whatever they're drawing. A face is an oval with smaller shapes inside. A tree is a circle on a rectangle. A building is a collection of rectangles. Seeing shapes is the first skill of observational drawing — and once you start looking for them, you find them absolutely everywhere.`,
            image:   '/explorer-assets/creative-arts/l01-magazine-2.png',
            caption: `Geometric shapes feel structured and man-made; organic shapes feel alive and natural`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l01-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Color: Emotion and Energy`,
            body: `Color is one of the most powerful elements because it **directly affects emotion**. **Warm colors** — red, orange, yellow — feel energetic, passionate, and appear to advance toward the viewer. **Cool colors** — blue, green, purple — feel calm, peaceful, and appear to recede into the distance. Artists use color temperature, contrast, and harmony to create specific emotional effects. The colors in a painting determine its mood **before the viewer even processes what the image shows**. This is why a sunset feels warm and hopeful, and an underwater scene feels deep and still. Understanding color is understanding emotional communication.`,
            image:   '/explorer-assets/creative-arts/l01-magazine-3.png',
            caption: `Warm colors advance and energize; cool colors recede and calm — all before the brain processes the image`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l01-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Texture: Real and Implied`,
            body: `**Texture** is the surface quality of an artwork — how it feels, or appears to feel. **Actual texture** (in sculpture and mixed media) is something you can physically touch. **Implied texture** in 2D art creates the illusion of texture through technique — short choppy marks suggest rough bark, smooth blending suggests skin, fine hatched lines suggest fabric. Texture adds richness and life to a drawing or painting. A forest without implied texture looks flat. With it, you almost feel the roughness of the bark and the softness of the moss under your fingers. The marks you make with a pencil or brush can make any surface come alive.`,
            image:   '/explorer-assets/creative-arts/l01-magazine-4.png',
            caption: `Implied texture makes a drawing feel touchable — the marks you choose make surfaces come alive`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l01-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'energy', label: `⚡ Creates Energy and Excitement`, color: '#F59E0B' },
              { id: 'calm',   label: `🍃 Creates Calm and Harmony`,      color: '#34D399' },
            ],
            items: [
              {
                id:            'l01-g1',
                image:         'l01-game-1.png',
                label:         `Drawing a storm scene using lots of diagonal and zigzag lines across the whole picture.`,
                correctBucket: 'energy',
                matchPhrase:   `Diagonal and zigzag lines are the most energetic lines there are — the eye follows them at speed and feels the tension and movement in them. That's line doing exactly what this element does best.`,
              },
              {
                id:            'l01-g2',
                image:         'l01-game-2.png',
                label:         `Choosing cool blues and greens to paint a quiet, still lake at dawn.`,
                correctBucket: 'calm',
                matchPhrase:   `Cool colors — blue, green, purple — recede and settle. They create the peaceful, spacious feeling of still water. That's color shaping the whole mood before a single shape is even noticed.`,
              },
              {
                id:            'l01-g3',
                image:         'l01-game-3.png',
                label:         `Drawing rough, scratchy marks on a tree trunk so the bark looks like you could feel it.`,
                correctBucket: 'energy',
                matchPhrase:   `Implied texture — created through the energy and direction of your marks — makes surfaces feel tactile and alive. Rough, scratchy marks communicate roughness and rawness, which gives the drawing real physical presence.`,
              },
              {
                id:            'l01-g4',
                image:         'l01-game-4.png',
                label:         `Using warm reds and oranges to paint a crackling campfire at night.`,
                correctBucket: 'energy',
                matchPhrase:   `Warm colors — red, orange, yellow — advance toward the viewer and feel energetic and passionate. That's exactly the feeling of fire: alive, moving, hot. Color is doing the emotional work here.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l01-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l01-q1',
              format:       'mc',
              question:     `What do diagonal lines suggest in artwork?`,
              options:      [
                `Calmness and stability`,
                `Energy and movement`,
                `Sadness and emptiness`,
                `Structure and order`,
              ],
              correctIndex: 1,
              explanation:  `Diagonal lines are the most energetic type of line — the eye follows them at speed and senses movement and tension. This is why artists use diagonal lines in drawings of storms, action scenes, and fast movement. Straight horizontal and vertical lines feel stable and calm by comparison.`,
            },

            // Q2 — MC (source)
            {
              id:           'l01-q2',
              format:       'mc',
              question:     `What is the difference between geometric and organic shapes?`,
              options:      [
                `Geometric shapes are found in nature; organic shapes are man-made`,
                `Geometric shapes are structured and mathematical; organic shapes are irregular and natural-looking`,
                `Geometric shapes are always colorful; organic shapes are always plain`,
                `There is no practical difference in art`,
              ],
              correctIndex: 1,
              explanation:  `Geometric shapes — circles, squares, triangles, rectangles — feel mathematical and man-made, because they are. Organic shapes — irregular, flowing, natural — feel alive and natural. Both appear in art: architectural drawings use geometric shapes, while drawings of landscapes and living things tend toward organic. Recognising the difference helps you make intentional choices about what feeling you want your artwork to have.`,
            },

            // Q3 — MC (source)
            {
              id:           'l01-q3',
              format:       'mc',
              question:     `What do warm colors (red, orange, yellow) typically convey?`,
              options:      [
                `Calm and peace — they are relaxing colors`,
                `Sadness and distance — they make viewers feel far away`,
                `Energy, passion, and they appear to advance toward the viewer`,
                `Neutrality — warm colors have no emotional effect`,
              ],
              correctIndex: 2,
              explanation:  `Warm colors — red, orange, yellow — feel energetic, passionate, and physically advance toward the viewer. Cool colors do the opposite: they recede and feel calm. This is why a painting of a sunset feels very different from a painting of the ocean, even before you know what it shows. Color temperature is the artist's shortcut to emotional communication.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l01-q4',
              format:        'tf',
              question:      `Texture in a 2D artwork can be implied through marks and brushstrokes — you can almost feel rough bark or soft fabric even though the surface is completely flat.`,
              correctAnswer: true,
              explanation:   `True. Implied texture is one of the most expressive techniques in 2D art. By varying the direction, size, and pressure of marks — short choppy strokes for rough surfaces, long smooth blending for skin or water — an artist creates the sensation of texture. The viewer's brain fills in the tactile experience even though nothing can actually be touched.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l01-q5',
              format:       'fill-blank',
              question:     `Cool colors — blue, green, and purple — often create a feeling of ___ in a painting.`,
              options:      ['calm', 'anger', 'tension', 'excitement'],
              correctIndex: 0,
              explanation:  `Cool colors create a sense of calm, peace, and spaciousness. They appear to recede from the viewer — which is why distant mountains look blue, and why underwater scenes feel deep and still. Warm colors do the opposite: they advance and energize. Understanding this difference is one of the most practical tools in an artist's toolkit.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l01-q6',
              format:       'mc',
              question:     `Why do artists choose different types of lines deliberately in their work?`,
              options:      [
                `To show they have practised many different drawing techniques`,
                `Because each type of line creates a different feeling — diagonal for energy, curved for flow, straight for calm — so choosing intentionally shapes the mood of the whole artwork`,
                `Because art rules require using multiple line types in every drawing`,
                `To make drawings more complicated and impressive to look at`,
              ],
              correctIndex: 1,
              explanation:  `Every line carries emotional meaning — and a skilled artist chooses lines the same way a writer chooses words: deliberately. Diagonal and zigzag lines create energy and tension. Curved lines feel organic and flowing. Straight horizontal lines feel stable and calm. Using different lines randomly produces an inconsistent feeling; choosing them with intention gives the whole artwork a unified emotional voice.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l01-realworld',
          type: 'real-world',
          content: {
            scenario:    `Elements Sketchbook`,
            description: `Find any piece of paper and a pencil — it doesn't need to be fancy. Divide the page into four sections. In the first, draw ten different types of lines and notice what feeling each one gives you. In the second, fill the space with shapes — both geometric (circles, squares, triangles) and organic (flowing, irregular). In the third, colour a simple scene using only warm OR only cool colours and notice the mood it creates. In the fourth, try to make four different implied textures using only pencil marks — rough, smooth, furry, spiky. Notice how marks alone can make you almost feel different surfaces.`,
            familyAdventure: `Go to a museum, art gallery, or browse an online art collection together. Pick three very different artworks and for each one, identify: what lines do you see and what do they feel like? What shapes are used? What colors and what mood do they create? What textures do you see or imagine? Talk about how the artist used the elements intentionally. Which artwork moves you most, and why?`,
            realWorldConnection: `Visual artists, graphic designers, and illustrators across every creative field use the elements of art as the foundation of every decision they make. These aren't rules that limit creativity — they're the vocabulary that makes intentional creative choices possible. Every piece of art ever made is built from the same four ingredients.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l01-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that every piece of art ever made — from cave paintings to digital art — is built from the same four elements: line, shape, color, and texture. Now that you can see them, you'll find them absolutely everywhere. Muse sees the whole world as an artwork waiting to be noticed — and now, so do you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L01.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L01] Loaded: "The Elements of Art: Line, Shape, Color, Texture" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l01-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L01] One or more magazine assets missing'));
}
