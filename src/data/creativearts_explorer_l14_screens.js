// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L14 — Fashion Design
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L14 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-14',
      title:     'Fashion Design',
      duration:  12,
      xpReward:  50,
      badge:     'fashion-designer',
      badgeName: 'Fashion Designer',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l14-welcome',
          type:     'welcome',
          guideText: `Every morning, {name}, you make a creative decision — maybe without thinking much about it, maybe with a lot of thought. What you wear is a form of communication: it says something about who you are, what you belong to, what mood you're in, what you want the world to see. People have been making that kind of communication through clothing for at least a hundred thousand years. Fashion is one of the oldest human art forms. Today we're going to look at it seriously — not as something shallow or frivolous, but as a genuine creative discipline with its own history, principles, and language. Let's take fashion at its full worth.`,
          headline: 'Fashion Design',
          subtitle: `Every day, you make a creative decision when you get dressed. Clothing is one of the oldest forms of human self-expression — we've been adorning ourselves for at least 100,000 years. Fashion is a language, and once you understand it, you can use it with real intention`,
          visual:   '/explorer-assets/creative-arts/l14-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l14-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Fashion as Communication`,
            body: `Clothing communicates before you speak a word. In the 16th century, colour and fabric communicated social class — only royalty could wear purple, because the dye was worth more than gold. **Uniforms** signal belonging to a group — police, sports teams, schools. Fashion subcultures — punk, hip-hop, goth, preppy — are **visual languages** with specific codes that insiders read instantly. Even the choice to wear "no fashion" — plain, unremarkable, deliberately anonymous clothes — is a statement in itself: *I don't want my clothes to speak for me.* There is no neutral choice in clothing. Everything communicates something, whether you intend it or not — which is precisely why understanding fashion as a language gives you more creative power over how you're read.`,
            image:   '/explorer-assets/creative-arts/l14-magazine-1.png',
            caption: `Clothing communicates before you speak — there is no neutral choice in what you wear`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l14-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `The Elements of Fashion Design`,
            body: `Fashion designers work with several interconnected elements simultaneously. **Silhouette** is the overall shape of the garment as seen in outline — A-line, fitted, boxy, flowing, draped. **Proportion** describes how different parts of the garment relate in size to each other and to the wearer. **Fabric** determines the hand (how it feels), the drape (how it falls), and the weight (how it moves). **Colour** carries emotional associations and communicates mood: seasonal palettes, colour blocking, pattern. **Texture** adds visual and tactile dimension: smooth, rough, shiny, matte, ribbed, woven. **Details** — buttons, seams, embellishments, finishing — are the punctuation of a garment. A great design makes all these elements work together so fluidly that you notice the whole rather than the individual parts.`,
            image:   '/explorer-assets/creative-arts/l14-magazine-2.png',
            caption: `Silhouette, proportion, fabric, colour, texture, details — great design makes them all invisible by making them seamless`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l14-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `The Fashion System`,
            body: `Modern fashion operates in **seasons** — Spring/Summer and Autumn/Winter collections shown months in advance at fashion weeks in New York, London, Milan, and Paris. **High fashion** (haute couture) creates extremely expensive, often unwearable art — its purpose is influence, not accessibility, and its ideas eventually filter down through the system. **Fast fashion** produces cheap, trend-driven clothes quickly, making trends accessible but at significant cost: fast fashion generates massive amounts of waste, and the pressure to produce cheaply often creates difficult labour conditions for garment workers. **Sustainable fashion** designs for durability, uses ethical production, and considers the full lifecycle of a garment — what happens to it after it's no longer worn. Understanding how the system works helps you make more intentional choices within it.`,
            image:   '/explorer-assets/creative-arts/l14-magazine-3.png',
            caption: `From haute couture to fast fashion — understanding the system helps you make more intentional choices within it`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l14-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Your Personal Style as Art`,
            body: `Your **personal style** is your ongoing creative project. Style is different from fashion: fashion is what's trending, style is what's **authentically yours** — the consistent visual language you speak regardless of what's current. Developing personal style involves knowing **what styles feel most comfortable and most like you**, understanding how colour works (which colours make you feel energised, calm, or confident), building **versatile pieces** you can combine many ways, adding **statement pieces** that express something specific about who you are, and having the confidence to make your own choices regardless of trend. The most stylish people are not the most fashionable — they're the most **intentional**. Every time you get dressed, you have an opportunity to express something true about who you are at this point in your life.`,
            image:   '/explorer-assets/creative-arts/l14-magazine-4.png',
            caption: `Style is yours — fashion is what's trending; style is the visual language that's authentically you`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l14-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'intentional', label: `🎨 Fashion used as intentional creative expression`, color: '#34D399' },
              { id: 'notme',       label: `🛒 Fashion that doesn't reflect who you are`,        color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l14-g1',
                image:         'l14-game-1.png',
                label:         `Deliberately choosing to wear your favourite colour on a difficult day because you know it makes you feel more yourself.`,
                correctBucket: 'intentional',
                matchPhrase:   `That's using clothing as communication — on purpose. Choosing a colour or item because of how it makes you feel is a conscious creative act. Fashion isn't just about what others see; it's about the relationship between what you wear and who you feel yourself to be. Using that relationship deliberately is what personal style actually is.`,
              },
              {
                id:            'l14-g2',
                image:         'l14-game-2.png',
                label:         `Building a small collection of pieces you genuinely love and finding lots of different ways to combine them, rather than buying new things constantly.`,
                correctBucket: 'intentional',
                matchPhrase:   `That's personal style in practice — and it's also sustainable fashion thinking. When you know what you love and choose pieces that combine with what you already have, you build a wardrobe that actually expresses who you are. Buying less and choosing with more intention is both a creative and an ethical act.`,
              },
              {
                id:            'l14-g3',
                image:         'l14-game-3.png',
                label:         `Buying five items because they're on sale, even though none of them feel like you or go with anything else you already own.`,
                correctBucket: 'notme',
                matchPhrase:   `That's fashion without intention — driven by price rather than expression. The result is a wardrobe full of things that don't feel like you, that you rarely wear, and that eventually become waste. Intentional fashion means asking "does this feel like me?" before asking "is this a good deal?" — and trusting the first answer more than the second.`,
              },
              {
                id:            'l14-g4',
                image:         'l14-game-4.png',
                label:         `Wearing something only because it's trending right now, even though it doesn't feel comfortable or like you at all.`,
                correctBucket: 'notme',
                matchPhrase:   `That's the gap between fashion and style. Fashion is what's current; style is what's authentically yours. Wearing something purely because it's trending — when it doesn't feel like you — means letting someone else's creative choices speak for you. Style, at its best, is the version of fashion that you've made your own.`,
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
              question:     `What is the difference between fashion and personal style?`,
              options:      [
                `Fashion is expensive; personal style is affordable`,
                `Fashion is what's currently trending; personal style is what's authentically your own expression, regardless of trend`,
                `Fashion is for adults; personal style develops in childhood`,
                `Fashion changes each season; personal style never changes throughout a person's life`,
              ],
              correctIndex: 1,
              explanation:  `Fashion is external — it's defined by what's current, seasonal, and collective. Personal style is internal — it's the consistent visual language that expresses who you are regardless of what's trending. The most stylish people are rarely the most fashionable; they're the ones whose clothes feel genuinely like them, chosen with intention rather than followed from a trend. The two can overlap — but they're distinct, and style tends to outlast fashion.`,
            },

            // Q2 — MC (source)
            {
              id:           'l14-q2',
              format:       'mc',
              question:     `What do fashion designers mean by "silhouette"?`,
              options:      [
                `The shadow cast by the garment under stage lighting`,
                `The colour blocking pattern used across different sections of the design`,
                `The overall shape of the garment as seen in outline — A-line, fitted, boxy, flowing`,
                `The model used to display the garment in runway shows`,
              ],
              correctIndex: 2,
              explanation:  `Silhouette is the foundational shape of a garment — the outline you see when you look at it without focusing on surface detail. An A-line dress flares gently from the waist. A fitted silhouette follows the body closely. A boxy silhouette creates a square shape. A flowing silhouette moves freely. Silhouette is often the first decision a fashion designer makes, because it determines the overall impression before colour, fabric, or detail come into play.`,
            },

            // Q3 — MC (source)
            {
              id:           'l14-q3',
              format:       'mc',
              question:     `What is a key concern with fast fashion?`,
              options:      [
                `Fast fashion takes too long to produce compared to traditional methods`,
                `It generates massive amounts of waste and often creates difficult labour conditions in order to produce cheap, quickly disposable clothing`,
                `It is always lower quality than high fashion because of the lower price point`,
                `Fast fashion brands copy high fashion designs illegally, harming the original designers`,
              ],
              correctIndex: 1,
              explanation:  `Fast fashion's core problem is its model: produce cheaply, produce quickly, make it trend-driven and disposable. The result is enormous amounts of clothing waste — garments worn a handful of times and then discarded — and production processes that often require very low wages and poor conditions to maintain the low prices. Understanding this doesn't mean rejecting all affordable clothing; it means thinking more carefully about how much you buy, choosing quality over quantity where possible, and asking questions about where clothes come from.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l14-q4',
              format:        'tf',
              question:      `Clothing communicates something about a person even when they're not trying to make a statement — there is no truly neutral choice in what you wear.`,
              correctAnswer: true,
              explanation:   `True. Even the choice to wear deliberately plain, anonymous, or unremarkable clothing is a statement — it says "I don't want my clothes to speak for me," which is itself a form of communication. Every garment choice communicates something about belonging, values, mood, or identity — whether consciously or not. Understanding this doesn't mean you have to dress strategically; it means you have the option to use clothing as intentional expression rather than letting it communicate by default.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l14-q5',
              format:       'fill-blank',
              question:     `The overall shape of a garment — whether fitted, flowing, A-line, or boxy — is called its ___.`,
              options:      ['silhouette', 'drape', 'texture', 'proportion'],
              correctIndex: 0,
              explanation:  `Silhouette is the foundational visual concept in garment design — the shape the clothing makes in outline. Before you choose a fabric, colour, or detail, the silhouette determines the overall impression. A structured, boxy silhouette communicates something different from a flowing, draped one, even before you get close enough to see the fabric or colour. It's the first thing a viewer perceives and the last thing they remember.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l14-q6',
              format:       'mc',
              question:     `Why do designers say that developing personal style is a more personal creative act than following fashion?`,
              options:      [
                `Because fashion is designed by professionals and personal style is designed by amateurs`,
                `Because following fashion requires spending more money on new items each season`,
                `Because personal style involves making intentional choices about what feels authentically like you — rather than wearing what someone else decided was current`,
                `Because personal style never changes and therefore requires less creative effort over time`,
              ],
              correctIndex: 2,
              explanation:  `Following fashion means adopting someone else's creative decisions about what's current and wearing them. Developing personal style means making your own creative decisions about what expresses who you are — drawing from trends when they resonate, ignoring them when they don't. It requires self-knowledge (what feels like me?), creative confidence (I can choose this even if it's not trending), and a relationship between your inner world and your outward expression. That relationship is what makes getting dressed a creative act rather than just a daily task.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l14-realworld',
          type: 'real-world',
          content: {
            scenario:    `Fashion Flat Design`,
            description: `Design a complete outfit for a specific purpose — a school presentation, an outdoor adventure, a creative performance, or a special occasion. Draw the outfit flat (as if laid out on a surface — this is called a flat sketch in the industry). Label: the garment types, the fabrics you'd use and why (lightweight, structured, soft, etc.), the colours and what you want them to communicate, any textures or details, and what the whole outfit says about the person wearing it. Write one short paragraph about the story this outfit tells. You don't need to be a trained artist — the thinking is the creative work here.`,
            familyAdventure: `Go through your wardrobes together and do a clothing audit. Each person selects: three items they love and wear often, three items they never wear (why not?), and one item that best expresses who they are right now. Share and discuss each selection. Then ask together: where were your most commonly worn items made? Research one brand you wear regularly — what can you find about how and where it makes its clothes? Decide on one small change you want to make to how your family thinks about buying clothes.`,
            realWorldConnection: `Fashion design is one of the world's largest creative industries, employing designers, fabric engineers, pattern makers, garment workers, stylists, photographers, and marketers. The principles of fashion design — silhouette, proportion, colour, texture — are the same principles used in interior design, product design, and graphic design. And the deeper question that fashion design asks — how do we express identity through visual choices? — is a question that applies to every designed object in the world.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l14-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that getting dressed is a creative act — and that the language of clothing has been one of humanity's oldest forms of expression. Style isn't what you own; it's the intention behind what you choose. Muse thinks there's something wonderful about the idea that you can say something true about yourself every single morning.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L14.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L14] Loaded: "Fashion Design" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l14-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L14] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L14] One or more magazine assets missing'));
}
