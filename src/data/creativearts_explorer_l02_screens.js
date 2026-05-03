// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L02 — Color Theory: Primary, Secondary, Complementary
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L02 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-02',
      title:     'Color Theory: Primary, Secondary, Complementary',
      duration:  12,
      xpReward:  50,
      badge:     'color-theorist',
      badgeName: 'Color Theorist',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l02-welcome',
          type:     'welcome',
          headline: 'Color Theory: Primary, Secondary, Complementary',
          subtitle: `Color is not just decoration — it's a language. Every color choice an artist makes sends a message straight to the viewer's emotions, often before the brain even processes what the image shows`,
          visual:   '/explorer-assets/creative-arts/l02-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l02-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `The Color Wheel`,
            body: `The **color wheel** organizes colors by their relationships. **Primary colors** — red, yellow, and blue — cannot be made by mixing other colors. They are the source of all other colors. **Secondary colors** — orange (red + yellow), green (yellow + blue), and purple (blue + red) — are made by mixing two primaries. **Tertiary colors** fill the gaps between primaries and secondaries: red-orange, yellow-orange, yellow-green, blue-green, blue-purple, red-purple. Every color in existence lives somewhere on or inside this wheel. Understanding where a color sits tells you its relationships — and relationships are everything in color.`,
            image:   '/explorer-assets/creative-arts/l02-magazine-1.png',
            caption: `The color wheel organizes all colors by relationship — primaries are the source, everything else follows`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l02-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Complementary Colors`,
            body: `**Complementary colors** sit directly opposite each other on the color wheel: red and green, blue and orange, yellow and purple. When placed next to each other, complementary colors create **maximum contrast** — each makes the other look more vivid and intense. This is why stop signs are red and go signs are green. Why so many sports kits use blue and orange. Why Halloween decorations use orange and purple. Artists use complementary colors to create energy, vibrance, and visual pop. Used in large amounts together they can almost vibrate — in small amounts as accents, they make each other sing.`,
            image:   '/explorer-assets/creative-arts/l02-magazine-2.png',
            caption: `Complementary colors sit opposite on the wheel — together they create maximum contrast and energy`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l02-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Analogous Colors`,
            body: `**Analogous colors** are neighbors on the color wheel — three or four colors in a row (red, red-orange, orange, yellow-orange, for example). They create a sense of **harmony, unity, and calm** because they naturally belong together. Sunsets use analogous warm colors. Ocean scenes use analogous cool colors. Analogous color schemes are easy on the eye and feel cohesive — which is why they're so common in nature and why they feel so natural to look at. Compare the energy of analogous versus complementary and you'll immediately feel the difference: one flows, the other sparks.`,
            image:   '/explorer-assets/creative-arts/l02-magazine-3.png',
            caption: `Analogous colors — neighbors on the wheel — flow together and create harmony and calm`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l02-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Value: Light, Dark, Tint, and Shade`,
            body: `**Value** is how light or dark a color is. Adding white to a color creates a **tint** — light pink from red, sky blue from blue. Adding black creates a **shade** — dark maroon from red, navy from blue. Adding gray creates a **tone**. Value is arguably more important than hue in creating a convincing drawing or painting — a black-and-white photo still reads as realistic because it preserves value relationships even without color. Artists use value to create the **illusion of form, depth, and light**. Many art teachers recommend working in grayscale first to master value before adding color.`,
            image:   '/explorer-assets/creative-arts/l02-magazine-4.png',
            caption: `Tints add white; shades add black — value is often more important than color itself`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l02-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'contrast', label: `✨ Creates Bold Contrast and Energy`, color: '#F87171' },
              { id: 'harmony',  label: `🌅 Creates Harmony and Calm`,         color: '#34D399' },
            ],
            items: [
              {
                id:            'l02-g1',
                image:         'l02-game-1.png',
                label:         `Painting a superhero costume in red with bright green details so it really stands out.`,
                correctBucket: 'contrast',
                matchPhrase:   `Red and green are complementary colors — directly opposite on the color wheel. Side by side, each one makes the other look more vivid and intense. That's why superhero costumes and sports kits love this combination.`,
              },
              {
                id:            'l02-g2',
                image:         'l02-game-2.png',
                label:         `Drawing a sunset using yellow, orange, and red-orange blending softly into each other.`,
                correctBucket: 'harmony',
                matchPhrase:   `Yellow, orange, and red-orange are analogous — neighbors on the color wheel. They flow together naturally, creating the warm, peaceful glow that makes a sunset feel unified and beautiful.`,
              },
              {
                id:            'l02-g3',
                image:         'l02-game-3.png',
                label:         `Decorating a birthday card using bright orange letters on a blue background.`,
                correctBucket: 'contrast',
                matchPhrase:   `Blue and orange are complementary. Their maximum contrast makes the orange letters leap off the blue background — which is exactly why this combination is used everywhere from book covers to movie posters.`,
              },
              {
                id:            'l02-g4',
                image:         'l02-game-4.png',
                label:         `Painting an ocean scene using only blues, blue-greens, and greens flowing into each other.`,
                correctBucket: 'harmony',
                matchPhrase:   `Blue, blue-green, and green are analogous cool colors. They create a sense of unity and calm — the way a real ocean feels when you stare out at it and everything belongs to the same family of color.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l02-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (replaced — Flag 1: was list-recall)
            {
              id:           'l02-q1',
              format:       'mc',
              question:     `What makes primary colors different from all other colors on the color wheel?`,
              options:      [
                `They are always the brightest and most vivid colors`,
                `They cannot be made by mixing other colors — they are the source from which all other colors are created`,
                `They always sit directly opposite each other on the color wheel`,
                `They are the only colors that can be lightened into tints`,
              ],
              correctIndex: 1,
              explanation:  `Primary colors — red, yellow, and blue — are unique because they cannot be mixed from any other colors. They are the starting point, the source. Every other color on the wheel is made by combining primaries in different proportions. Understanding this makes color mixing logical rather than mysterious: start with the primaries and you can build anything.`,
            },

            // Q2 — MC (source)
            {
              id:           'l02-q2',
              format:       'mc',
              question:     `What are complementary colors?`,
              options:      [
                `Colors that look good together because they are similar`,
                `Colors that are variations of the same hue`,
                `Colors that sit directly opposite each other on the color wheel`,
                `Colors used together in famous paintings`,
              ],
              correctIndex: 2,
              explanation:  `Complementary colors sit directly opposite each other on the color wheel — red and green, blue and orange, yellow and purple. Placing them next to each other creates maximum contrast: each color makes the other look more vivid and intense than it would appear on its own. This is one of the most powerful contrast tools an artist has.`,
            },

            // Q3 — MC (source)
            {
              id:           'l02-q3',
              format:       'mc',
              question:     `What is the difference between a tint and a shade?`,
              options:      [
                `A tint is a bright color; a shade is a dull color`,
                `A tint adds white to a color to make it lighter; a shade adds black to make it darker`,
                `Tints are warm colors; shades are cool colors`,
                `A tint and a shade are the same thing described differently`,
              ],
              correctIndex: 1,
              explanation:  `A tint is made by adding white to a color — pink is a tint of red, sky blue is a tint of blue. A shade is made by adding black — maroon is a shade of red, navy is a shade of blue. Together, tints and shades give a single color an entire range of values from very light to very dark. Mastering value — the lightness or darkness of a color — is one of the most important skills in painting.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l02-q4',
              format:        'tf',
              question:      `Complementary colors — like red and green, or blue and orange — make each other look more vivid and intense when placed next to each other.`,
              correctAnswer: true,
              explanation:   `True. Complementary colors create maximum contrast because they sit at opposite ends of the color relationship spectrum. When placed side by side, each one intensifies the other — the red looks redder next to green, the orange looks more orange next to blue. This visual effect is used deliberately by artists, designers, and anyone who wants something to really pop.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l02-q5',
              format:       'fill-blank',
              question:     `Adding white to a color makes it lighter — this lighter version of the color is called a ___.`,
              options:      ['tint', 'shade', 'tone', 'complement'],
              correctIndex: 0,
              explanation:  `A tint is what you get when you add white to a color, making it lighter and softer. Pink is a tint of red. Pastel blue is a tint of blue. The opposite — adding black — creates a shade, making the color darker and deeper. Understanding tints and shades gives you control over the full range of a color's values, not just its basic hue.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l02-q6',
              format:       'mc',
              question:     `Why do artists often use analogous color schemes in paintings of natural scenes?`,
              options:      [
                `Because nature only ever contains one or two colors at a time`,
                `Because analogous colors — neighbors on the color wheel — create a sense of harmony and calm that feels natural and easy on the eye`,
                `Because analogous colors are easier to mix than complementary ones`,
                `Because analogous schemes are required for realistic paintings`,
              ],
              correctIndex: 1,
              explanation:  `Analogous colors are neighbors on the color wheel, and because they share underlying color relationships, they naturally flow together and feel harmonious. Nature is full of analogous color — the greens, blue-greens, and yellows of a forest; the blues, purples, and red-purples of a twilight sky. When an artist uses an analogous palette, they're borrowing the built-in harmony of the natural world.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l02-realworld',
          type: 'real-world',
          content: {
            scenario:    `Color Wheel Creation`,
            description: `Using any colours you have — crayons, coloured pencils, markers, or paint — place three primary colours (red, yellow, blue) equally spaced apart on a page. Mix or blend each pair to create the three secondary colours between them: orange (red + yellow), green (yellow + blue), purple (blue + red). Label everything. Then choose one pair of complementary colours and create a small drawing or pattern using only those two. Notice the contrast and energy they create next to each other.`,
            familyAdventure: `Go through your home and identify the colour scheme of each room — is it complementary (opposite colors), analogous (neighboring colors), or monochromatic (one color in different values)? How does each room's color scheme make you feel? Then look at your own clothing — what colors do you gravitate toward? Look up color psychology and see if the colors you're drawn to match how you like to feel.`,
            realWorldConnection: `Color theory is used every day by artists, graphic designers, architects, film directors, and interior designers. When a movie poster uses complementary colors to create visual tension, or a bedroom is painted in analogous cool tones to feel calm, someone understood color relationships and made deliberate choices. Now you understand them too.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l02-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that color is one of the most powerful tools any artist has — and that every color choice on a canvas is sending an emotional message before the viewer even knows it. The color wheel is yours to explore now. Muse sees color symphonies in every sunset, every painting, every room — and now you will too.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L02.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L02] Loaded: "Color Theory: Primary, Secondary, Complementary" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l02-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L02] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L02] One or more magazine assets missing'));
}
