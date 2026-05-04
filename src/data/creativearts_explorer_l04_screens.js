// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L04 — Watercolor Painting
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L04 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-04',
      title:     'Watercolor Painting',
      duration:  12,
      xpReward:  50,
      badge:     'watercolor-artist',
      badgeName: 'Watercolor Artist',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l04-welcome',
          type:     'welcome',
          guideText: `Watercolor is one of the most beautiful and most humbling art forms, {name}, and I want to tell you something upfront: it will do things you didn't plan. The pigment will bloom. The water will spread. Colors will bleed into each other in unexpected ways. A lot of beginners find this frustrating. But here's what experienced watercolor artists know: that unpredictability is not the problem — it's the medium's greatest quality. Today we're going to learn the basics of watercolor. The central lesson isn't technique. It's learning to work with the paint's nature rather than against it. That turns out to be useful in art, and in life.`,
          headline: 'Watercolor Painting',
          subtitle: `Watercolor is transparent, luminous, and alive — and it will do things you didn't plan. Learning to work with the medium's nature rather than against it is the secret to watercolor, and to a lot of other things too`,
          visual:   '/explorer-assets/creative-arts/l04-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l04-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `How Watercolor Works`,
            body: `Watercolor is **pigment suspended in water**. When you apply it to paper, the water evaporates and the pigment stays. The key to watercolor's luminosity: you're painting on white paper, and light passes **through** the transparent paint layers and **bounces back** off the white paper to your eye — creating a glow that opaque paints simply can't replicate. The **more water**, the more transparent and light the color. The **less water**, the more saturated and dark. Managing the ratio of water to pigment is the core technical skill in watercolor — and it comes with practice and attention.`,
            image:   '/explorer-assets/creative-arts/l04-magazine-1.png',
            caption: `Light passes through watercolor and reflects off the white paper — that's what creates the luminous glow`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l04-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Wet-on-Wet and Wet-on-Dry`,
            body: `Two fundamental watercolor techniques. **Wet-on-wet**: apply wet paint to already-wet paper — the pigment spreads and blooms in soft, unpredictable ways. This creates beautiful effects for skies, water, misty backgrounds, and atmospheric distance. **Wet-on-dry**: apply wet paint to dry paper — you get sharp, defined edges and more control over where the paint goes. Most watercolor paintings use both: **soft backgrounds** (wet-on-wet) with more detailed elements added later (wet-on-dry). Learning when to use each is central to understanding the medium and what it can do.`,
            image:   '/explorer-assets/creative-arts/l04-magazine-2.png',
            caption: `Wet-on-wet creates soft blooming effects; wet-on-dry gives sharp edges — most paintings use both`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l04-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `The White of the Paper`,
            body: `Unlike oil or acrylic painting, you **cannot add white paint** to watercolor to lighten it — white paint makes it opaque and kills the luminosity. Instead, **white in watercolor IS the paper** — you preserve white areas by simply not painting them. This means you must think ahead: where do you want your lightest areas? Leave those unpainted. You can use **masking fluid** (a liquid you paint on and peel off later) to protect white areas while you work around them. This "thinking in reverse" — protecting light areas rather than adding them later — is one of the things that makes watercolor uniquely challenging and uniquely beautiful.`,
            image:   '/explorer-assets/creative-arts/l04-magazine-3.png',
            caption: `White in watercolor is the paper — you preserve it by not painting, not by adding white later`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l04-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Embracing Happy Accidents`,
            body: `The most important lesson in watercolor: **the medium will do things you didn't plan**. Pigment will bloom into unexpected shapes. Water will create backruns when wet paint is added to drying paint. Colors will mix in surprising ways. Beginning watercolorists fight these effects. Experienced watercolorists **embrace** them — they see unexpected results as gifts and find ways to integrate them into the composition. The medium rewards spontaneity, flexibility, and the willingness to let go of control. Some of the most beautiful watercolor effects are ones nobody planned. That's not a limitation — it's what makes the medium feel alive.`,
            image:   '/explorer-assets/creative-arts/l04-magazine-4.png',
            caption: `Happy accidents are the medium adding its own voice — experienced artists embrace them, not fight them`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l04-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'with',    label: `✅ Working WITH Watercolor's Nature`, color: '#34D399' },
              { id: 'against', label: `🚧 Working AGAINST It`,               color: '#F87171' },
            ],
            items: [
              {
                id:            'l04-g1',
                image:         'l04-game-1.png',
                label:         `Leaving areas of white paper unpainted to show where the light hits in your painting.`,
                correctBucket: 'with',
                matchPhrase:   `In watercolor, white IS the paper. Preserving it by not painting over it is a deliberate, skilled choice — and the glowing white that results can't be replicated by adding paint on top later.`,
              },
              {
                id:            'l04-g2',
                image:         'l04-game-2.png',
                label:         `Noticing an unexpected paint bloom forming in your wash and letting it become a cloud.`,
                correctBucket: 'with',
                matchPhrase:   `Experienced watercolorists treat the medium's surprises as gifts, not mistakes. Integrating what happens spontaneously — rather than fighting it — is one of the things that makes watercolor feel so alive.`,
              },
              {
                id:            'l04-g3',
                image:         'l04-game-3.png',
                label:         `Trying to add thick white paint on top of dried watercolor to fix a section that got too dark.`,
                correctBucket: 'against',
                matchPhrase:   `White paint makes watercolor opaque and kills the luminosity. The transparency is what makes watercolor glow — and heavy paint on top destroys the effect. Planning ahead to preserve white areas is the watercolor way.`,
              },
              {
                id:            'l04-g4',
                image:         'l04-game-4.png',
                label:         `Going over and over a wet area with your brush trying to make it perfectly even while it's still wet.`,
                correctBucket: 'against',
                matchPhrase:   `Overworking wet watercolor lifts and muddies the paint. The medium rewards laying a stroke and letting it be — not pushing it around. Working wet-on-dry with fresh layers is the way to refine, not scrubbing at a wet surface.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l04-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l04-q1',
              format:       'mc',
              question:     `Why does watercolor look luminous compared to other paints?`,
              options:      [
                `Watercolor pigments are made from luminescent minerals`,
                `Light passes through the transparent paint, reflects off the white paper, and bounces back to your eye — creating a glow`,
                `Watercolor dries with a glossy finish that reflects light`,
                `The water in the paint creates a natural sheen`,
              ],
              correctIndex: 1,
              explanation:  `Watercolor's luminosity comes from its transparency. Light passes through the thin layers of pigment, hits the white paper beneath, and bounces back through the pigment to your eye — creating a glow from within. Opaque paints block this effect because they sit on top of the surface rather than letting light pass through. This is why watercolor has a quality no other medium quite matches.`,
            },

            // Q2 — MC (source)
            {
              id:           'l04-q2',
              format:       'mc',
              question:     `What is the wet-on-wet technique?`,
              options:      [
                `Rinsing your brush with water between each color`,
                `Applying wet paint to already-wet paper, creating soft, blooming, unpredictable edges`,
                `Mixing paint with a lot of water before applying to dry paper`,
                `Using two wet brushes at the same time on the same area`,
              ],
              correctIndex: 1,
              explanation:  `Wet-on-wet means applying wet paint to paper that's already wet — either pre-wetted with water or still wet from a previous wash. The pigment spreads and blooms in soft, unpredictable ways because it has no dry edges to stop it. This creates the atmospheric, soft effects seen in skies, water, and misty backgrounds. It's contrasted with wet-on-dry, where wet paint on dry paper gives sharp, defined edges.`,
            },

            // Q3 — MC (source)
            {
              id:           'l04-q3',
              format:       'mc',
              question:     `How do you create white areas in a watercolor painting?`,
              options:      [
                `By adding white paint on top of other colors after they dry`,
                `By leaving the paper unpainted in those areas — white paint makes it opaque and loses the luminosity`,
                `By washing the paint off with water while it's still wet`,
                `By painting over the area with a very diluted mix of all colors`,
              ],
              correctIndex: 1,
              explanation:  `In watercolor, white is the paper itself — you preserve it by not painting over it. Adding white paint on top creates an opaque, chalky effect that destroys the luminosity that makes watercolor special. This means planning ahead: deciding where your lightest, brightest areas will be before you even pick up the brush, and protecting those areas throughout the painting process.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l04-q4',
              format:        'tf',
              question:      `In watercolor, unexpected things like paint blooming in surprising shapes are often something experienced artists embrace rather than try to fight.`,
              correctAnswer: true,
              explanation:   `True. What beginners call "mistakes" in watercolor — paint blooms, backruns, colors mixing unexpectedly — are often the things experienced watercolorists value most. The medium has its own energy and unpredictability, and working with that energy rather than against it produces effects that controlled, planned painting simply can't. Many of the most beautiful watercolor effects are accidental discoveries that became techniques.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l04-q5',
              format:       'fill-blank',
              question:     `Applying wet paint to already-wet paper creates soft, spreading effects — this is called the ___-on-wet technique.`,
              options:      ['wet', 'dry', 'light', 'warm'],
              correctIndex: 0,
              explanation:  `Wet-on-wet is the technique of applying wet paint to paper that's already wet. The moisture prevents the paint from forming a sharp edge — instead it spreads and blooms, creating the soft atmospheric effects that make watercolor so distinctive. The alternative, wet-on-dry, uses wet paint on completely dry paper and gives crisp, defined edges. Most watercolor paintings use both techniques together.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l04-q6',
              format:       'mc',
              question:     `Why do watercolorists say "work from light to dark"?`,
              options:      [
                `Because light colors must be completely dry before dark colors can be applied over them`,
                `Because you can always add more pigment to make an area darker, but you can't easily remove paint once it's on the paper — so building up gradually keeps you in control`,
                `Because watercolor naturally flows from dark to light areas on its own`,
                `Because using dark paint first makes the rest of the painting look muddy`,
              ],
              correctIndex: 1,
              explanation:  `In watercolor, adding pigment is easy — removing it is much harder. This means you can always make an area darker by adding another wash of paint. But if you start too dark, you have very few options for lightening it again (the paper white is gone). Starting light and gradually building toward darker values keeps you in control at every stage and prevents the most common watercolor regrets.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l04-realworld',
          type: 'real-world',
          content: {
            scenario:    `Watercolor Exploration`,
            description: `If you have watercolours, set up four experiment areas on a sheet of paper (thick paper works best). Try: (1) wet the paper first with a damp brush, then drop colour in and watch it bloom — that's wet-on-wet; (2) paint a shape on completely dry paper for a sharp edge — that's wet-on-dry; (3) brush a stripe from full-strength colour on one end to almost-clear water on the other; (4) mix two colours directly on the paper rather than the palette. Then use all the techniques to paint a simple sunset or ocean scene. No watercolours? Food colouring on thick paper works beautifully for exploring the same effects.`,
            familyAdventure: `Do a family watercolor painting session at the kitchen table. Everyone paints the same simple subject — a bowl of fruit, a vase of flowers, or the view from a window. No judgment, no comparison — just explore. Afterward, lay all the paintings side by side. Notice how different they are even from the same subject. Display them.`,
            realWorldConnection: `Watercolor has been used by artists for centuries — from detailed botanical and scientific illustrations to expressive landscapes and portraits. Its unique luminosity, created by light bouncing off the paper through transparent pigment, is impossible to replicate with opaque media and has made it one of the most beloved and technically demanding mediums in the history of art.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l04-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that watercolor has a spirit of its own — and that working with it, rather than against it, is what creates something truly magical. Every happy accident is the medium adding its own voice to your painting. Muse believes the best art always has some surprise in it. Keep your brushes wet and your mind wide open.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L04.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L04] Loaded: "Watercolor Painting" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l04-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L04] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L04] One or more magazine assets missing'));
}
