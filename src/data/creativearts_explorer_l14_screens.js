// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L14 — Fashion Design
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L14 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-14`,
      title:     `Fashion Design`,
      duration:  12,
      xpReward:  50,
      badge:     `fashion-designer`,
      badgeName: `Fashion Designer`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Every morning, {name}, you make a creative decision — maybe without thinking much about it, maybe with a lot of thought. What you wear is a form of communication: it says something about who you are, what you belong to, what mood you're in, what you want the world to see. People have been making that kind of communication through clothing for at least a hundred thousand years. Fashion is one of the oldest human art forms. Today we're going to look at it seriously — not as something shallow or frivolous, but as a genuine creative discipline with its own history, principles, and language. Let's take fashion at its full worth.`,
          headline: `Fashion Design`,
          subtitle: `Every day, you make a creative decision when you get dressed. Clothing is one of the oldest forms of human self-expression — we've been adorning ourselves for at least 100,000 years. Fashion is a language, and once you understand it, you can use it with real intention`,
          visual: `/explorer-assets/creative-arts/l14-welcome.png`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Creative Decision Every Morning`,
          paragraphs: [
            `Every morning, you make a creative decision: what to wear.`,
            `It's a form of communication. Humans have been doing it for at least 100,000 years. Fashion is one of the oldest art forms.`,
          ],
          image: `/explorer-assets/creative-arts/l14-s1-creative-morning.png`,
          imageCaption: `Most people get dressed without thinking. But every choice is creative — and once you know it, you can use that.`,
          vocab: [
            { word: `fashion`,    definition: `The creative discipline of designing and choosing what to wear. A genuine art form, not a shallow one.`,
              audioPrompt: `Fashion is often dismissed as shallow, {name}, but it's one of humanity's oldest creative disciplines. Every culture in every time invented its own version. The choices people make about clothing have always been a real form of art — and taking fashion seriously gives you more creative power over how you present yourself in the world.` },
            { word: `adornment`,  definition: `Decorating the body or clothing. One of humanity's oldest practices — older than agriculture, older than cities.`,
              audioPrompt: `Adornment is older than almost everything human, {name}. Beads, paint, jewelry, dyed fabric — we've been decorating our bodies for at least 100,000 years. Before language was fully formed. Before farming. Before anything we'd recognize as civilization. Adornment was already there. It's deeply, ancestrally human.` },
            { word: `expression`, definition: `The outward showing of inner identity, mood, or values. What clothing does whether you intend it or not.`,
              audioPrompt: `Expression is what your clothes do without asking permission, {name}. They show something about you — your mood, your values, your sense of belonging — to anyone who sees you. Even if you don't think about it. Even if you'd rather not. The question isn't whether your clothes express something. It's whether you've chosen what they express.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Clothing Speaks`,
          paragraphs: [
            `Clothing communicates before you speak. Uniforms signal belonging. Subcultures have specific visual codes — punk leather, hip-hop sneakers, goth black.`,
            `Even wearing "no fashion" — deliberately plain clothes — is a statement. There is no neutral choice.`,
          ],
          image: `/explorer-assets/creative-arts/l14-s2-clothing-speaks.png`,
          imageCaption: `Uniform. Subculture. Statement. Anonymous. They're all messages. The only choice is what message yours sends.`,
          vocab: [
            { word: `visual language`, definition: `A system of meaning communicated through visual signals. Clothing is one of the most powerful visual languages humans have.`,
              audioPrompt: `Clothing is a visual language, {name} — one that speaks before you open your mouth. A uniform says "I belong to this group." A specific combination of colors and cuts sends signals that insiders read instantly. Even the choice to wear plain, unremarkable clothes is a statement: I don't want my clothes to do the talking.` },
            { word: `subculture`,      definition: `A group within a larger culture with its own values, practices, and often a distinct visual style.`,
              audioPrompt: `Think about the visual identity of any subculture, {name}: the leather jackets of punk, the specific sneakers of hip-hop, the all-black of goth. These aren't just fashion preferences — they're statements of belonging, values, and resistance. Wearing the right thing the right way says: I know what this means. I am part of this.` },
            { word: `code`,            definition: `A shared system of signals that members of a group recognize and understand. Fashion is full of them.`,
              audioPrompt: `Fashion has codes, {name} — shared signals that people within a community recognize instantly. The style of a sneaker. The cut of a jacket. The color combination on a team kit. A code is only meaningful to those who know the system. Learning to read fashion codes is learning to see clothing as a form of communication.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Building Blocks`,
          paragraphs: [
            `Designers work with SILHOUETTE (the outline shape — A-line, fitted, boxy, flowing). PROPORTION (how parts relate to each other and the body).`,
            `FABRIC (how it feels and drapes). COLOR (what it communicates). TEXTURE (smooth, rough, shiny). Great design makes them all work together.`,
          ],
          image: `/explorer-assets/creative-arts/l14-s3-building-blocks.png`,
          imageCaption: `Silhouette. Proportion. Drape. Color. Texture. A great design makes you notice the whole, not the parts.`,
          vocab: [
            { word: `silhouette`, definition: `The outline shape of a garment. The first thing you see, before color or detail.`,
              audioPrompt: `Before color, before texture, before any detail — a garment's silhouette is what you see first, {name}. The A-line flare of a 1950s dress. The boxy oversized shoulder of the 1980s. Silhouette communicates the era, the attitude, the mood at a glance. Designers often begin with the silhouette and fill it in from there.` },
            { word: `drape`,      definition: `How a fabric falls and moves with the body. Determined by the material's fiber and weave.`,
              audioPrompt: `Different fabrics move completely differently, {name}. Silk drapes in long fluid falls. Denim holds its shape. Chiffon floats. Wool hangs with weight. Drape is how a material behaves once it leaves the hanger and begins responding to a body. Designers choose fabrics partly for color, but as much for drape.` },
            { word: `proportion`, definition: `The size relationships between garment parts and the wearer's body. What separates balanced design from awkward.`,
              audioPrompt: `Proportion in fashion is about relationships, {name} — how the top relates to the bottom, how the sleeve relates to the torso, how the garment's volume relates to the wearer's frame. A garment with balanced proportion seems to work without the wearer knowing why. One with awkward proportion makes every part visible in the wrong way.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Fashion System`,
          paragraphs: [
            `HAUTE COUTURE: extremely expensive, hand-sewn art that almost nobody wears — its purpose is influence, not sales.`,
            `FAST FASHION: cheap, trendy, disposable — accessible but with serious environmental and human costs. SUSTAINABLE FASHION asks: what's this garment's whole story?`,
          ],
          image: `/explorer-assets/creative-arts/l14-s4-fashion-system.png`,
          imageCaption: `Couture is the experimental lab. Fast fashion is the volume engine. Sustainable fashion asks the harder questions.`,
          vocab: [
            { word: `haute couture`,       definition: `Hand-made, one-of-a-kind fashion. Often art more than clothing — its purpose is influence.`,
              audioPrompt: `Haute couture is fashion as sculpture, {name} — one-of-a-kind garments made entirely by hand, fitted precisely to a single person. Almost no one can wear them — and that's partly the point. They're art objects, proposals about what clothing can be. Their influence travels down through the system, shaping what eventually becomes available everywhere else.` },
            { word: `fast fashion`,        definition: `Cheap, mass-produced, trend-driven clothing. Accessible but with significant environmental and human costs.`,
              audioPrompt: `Fast fashion moves at the speed of trend, {name} — new styles every week, low prices, designed to be replaced quickly. That accessibility is real. But the costs are also real: vast amounts of clothing ending up in landfill, production that often creates difficult conditions for the people making it.` },
            { word: `sustainable fashion`, definition: `Clothing designed with environmental and ethical awareness. Considers the whole life of a garment.`,
              audioPrompt: `Sustainable fashion asks what happens to a garment across its whole life, {name} — where the materials came from, who made it, how long it will last, and what happens when it's no longer worn. It's a way of thinking about clothing as something with a story before and after you own it. Buy less, choose better, keep longer.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Style vs Fashion`,
          paragraphs: [
            `Fashion is what's TRENDING. Style is what's authentically YOURS.`,
            `The most stylish people aren't the most fashionable. They're the most intentional. They know what feels like them and wear it with conviction — regardless of trend.`,
          ],
          image: `/explorer-assets/creative-arts/l14-s5-style-vs-fashion.png`,
          imageCaption: `Fashion changes every season. Style is what stays — the version of you that's actually you.`,
          vocab: [
            { word: `personal style`,  definition: `The consistent visual language that's authentically yours. Distinct from fashion, which is what's currently trending.`,
              audioPrompt: `Fashion tells you what's trending, {name}. Style is what you actually choose — the consistent thread that runs through how you dress regardless of what season it is. The most stylish people aren't always the most fashionable. They're the most intentional. They know what feels like them, and wear it with conviction.` },
            { word: `statement piece`, definition: `A single garment or accessory chosen to express something specific. Anchors the look around it.`,
              audioPrompt: `A statement piece is the part of an outfit that says something, {name} — a bright coat, an unexpected shoe, a piece of jewelry that carries meaning. It doesn't need to be expensive or elaborate. It just needs to be intentional: chosen because it expresses something true about you. The rest can be quieter. The statement piece does the talking.` },
            { word: `trend`,           definition: `A temporarily popular style. Comes and goes. Not the same as style.`,
              audioPrompt: `A trend is what's currently popular, {name} — and it's almost always temporary. Last year's must-have is this year's old. Trends can be fun to engage with, but treating every trend as something you have to wear is exhausting and expensive. The deeper question is always: does this feel like me, or am I just chasing what's now?` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Visual Language`,
          paragraphs: [
            `Every time you get dressed, you have an opportunity to say something true about who you are.`,
            `That's not shallow. That's a creative act, every single morning. Use it on purpose.`,
          ],
          image: `/explorer-assets/creative-arts/l14-s6-visual-language.png`,
          imageCaption: `Most people get dressed by habit. You can get dressed on purpose. That's the difference between wearing clothes and using them.`,
          vocab: [
            { word: `intentional`,  definition: `Chosen deliberately, with awareness. The opposite of automatic.`,
              audioPrompt: `Intentional dressing means making choices, {name} — not just wearing whatever's easiest, but asking: what do I actually want to say today? What feels right? It doesn't have to be complicated. Intentionality just means the choice is yours, made consciously, expressing something real. That awareness is what makes personal style possible.` },
            { word: `identity`,     definition: `Who you are — including the parts you're discovering, the parts you're choosing, and the parts you want to express.`,
              audioPrompt: `Identity isn't fixed, {name} — it's something you're discovering and shaping your whole life. And fashion is one of the most direct tools you have for exploring it. What feels like you today might not in a year. That's not a problem — it's part of how identity develops. Your clothes can grow as you do.` },
            { word: `creative act`, definition: `A moment of making something deliberate. Getting dressed counts — if you treat it that way.`,
              audioPrompt: `A creative act is any moment when you make something on purpose, {name} — a drawing, a song, a sentence, an outfit. Most people don't think of getting dressed as creative. But it is. Every morning, you have a chance to make a small piece of visual art that expresses something true about you. That's not nothing. That's actually a gift.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `intentional`,
              label: `🎨 Fashion used as intentional creative expression`,
              color: `#34D399`,
            },
            {
              id: `notme`,
              label: `🛒 Fashion that doesn't reflect who you are`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l14-g1`,
              image: `l14-game-1.png`,
              label: `Deliberately choosing to wear your favourite colour on a difficult day because you know it makes you feel more yourself.`,
              matchPhrase: `That's using clothing as communication — on purpose. Choosing a colour or item because of how it makes you feel is a conscious creative act. Fashion isn't just about what others see; it's about the relationship between what you wear and who you feel yourself to be. Using that relationship deliberately is what personal style actually is.`,
              correctMatch: `intentional`,
            },
            {
              id: `l14-g2`,
              image: `l14-game-2.png`,
              label: `Building a small collection of pieces you genuinely love and finding lots of different ways to combine them, rather than buying new things constantly.`,
              matchPhrase: `That's personal style in practice — and it's also sustainable fashion thinking. When you know what you love and choose pieces that combine with what you already have, you build a wardrobe that actually expresses who you are. Buying less and choosing with more intention is both a creative and an ethical act.`,
              correctMatch: `intentional`,
            },
            {
              id: `l14-g3`,
              image: `l14-game-3.png`,
              label: `Buying five items because they're on sale, even though none of them feel like you or go with anything else you already own.`,
              matchPhrase: `That's fashion without intention — driven by price rather than expression. The result is a wardrobe full of things that don't feel like you, that you rarely wear, and that eventually become waste. Intentional fashion means asking "does this feel like me?" before asking "is this a good deal?" — and trusting the first answer more than the second.`,
              correctMatch: `notme`,
            },
            {
              id: `l14-g4`,
              image: `l14-game-4.png`,
              label: `Wearing something only because it's trending right now, even though it doesn't feel comfortable or like you at all.`,
              matchPhrase: `That's the gap between fashion and style. Fashion is what's current; style is what's authentically yours. Wearing something purely because it's trending — when it doesn't feel like you — means letting someone else's creative choices speak for you. Style, at its best, is the version of fashion that you've made your own.`,
              correctMatch: `notme`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l14-q1`,
              format: `multiple-choice`,
              question: `What is the difference between fashion and personal style?`,
              options: [
                `Fashion is expensive; personal style is affordable`,
                `Fashion is what's currently trending; personal style is what's authentically your own expression, regardless of trend`,
                `Fashion is for adults; personal style develops in childhood`,
                `Fashion changes each season; personal style never changes throughout a person's life`,
              ],
              correctIndex: 1,
              explanation: `Fashion is external — it's defined by what's current, seasonal, and collective. Personal style is internal — it's the consistent visual language that expresses who you are regardless of what's trending. The most stylish people are rarely the most fashionable; they're the ones whose clothes feel genuinely like them, chosen with intention rather than followed from a trend. The two can overlap — but they're distinct, and style tends to outlast fashion.`,
            },
            {
              id: `l14-q2`,
              format: `multiple-choice`,
              question: `What do fashion designers mean by "silhouette"?`,
              options: [
                `The shadow cast by the garment under stage lighting`,
                `The colour blocking pattern used across different sections of the design`,
                `The overall shape of the garment as seen in outline — A-line, fitted, boxy, flowing`,
                `The model used to display the garment in runway shows`,
              ],
              correctIndex: 2,
              explanation: `Silhouette is the foundational shape of a garment — the outline you see when you look at it without focusing on surface detail. An A-line dress flares gently from the waist. A fitted silhouette follows the body closely. A boxy silhouette creates a square shape. A flowing silhouette moves freely. Silhouette is often the first decision a fashion designer makes, because it determines the overall impression before colour, fabric, or detail come into play.`,
            },
            {
              id: `l14-q3`,
              format: `multiple-choice`,
              question: `What is a key concern with fast fashion?`,
              options: [
                `Fast fashion takes too long to produce compared to traditional methods`,
                `It generates massive amounts of waste and often creates difficult labour conditions in order to produce cheap, quickly disposable clothing`,
                `It is always lower quality than high fashion because of the lower price point`,
                `Fast fashion brands copy high fashion designs illegally, harming the original designers`,
              ],
              correctIndex: 1,
              explanation: `Fast fashion's core problem is its model: produce cheaply, produce quickly, make it trend-driven and disposable. The result is enormous amounts of clothing waste — garments worn a handful of times and then discarded — and production processes that often require very low wages and poor conditions to maintain the low prices. Understanding this doesn't mean rejecting all affordable clothing; it means thinking more carefully about how much you buy, choosing quality over quantity where possible, and asking questions about where clothes come from.`,
            },
            {
              id: `l14-q4`,
              format: `true-false`,
              question: `Clothing communicates something about a person even when they're not trying to make a statement — there is no truly neutral choice in what you wear.`,
              correctAnswer: true,
              explanation: `True. Even the choice to wear deliberately plain, anonymous, or unremarkable clothing is a statement — it says "I don't want my clothes to speak for me," which is itself a form of communication. Every garment choice communicates something about belonging, values, mood, or identity — whether consciously or not. Understanding this doesn't mean you have to dress strategically; it means you have the option to use clothing as intentional expression rather than letting it communicate by default.`,
            },
            {
              id: `l14-q5`,
              format: `fill-blank`,
              question: `The overall shape of a garment — whether fitted, flowing, A-line, or boxy — is called its ___.`,
              options: [
                `silhouette`,
                `drape`,
                `texture`,
                `proportion`,
              ],
              correctIndex: 0,
              explanation: `Silhouette is the foundational visual concept in garment design — the shape the clothing makes in outline. Before you choose a fabric, colour, or detail, the silhouette determines the overall impression. A structured, boxy silhouette communicates something different from a flowing, draped one, even before you get close enough to see the fabric or colour. It's the first thing a viewer perceives and the last thing they remember.`,
            },
            {
              id: `l14-q6`,
              format: `multiple-choice`,
              question: `Why do designers say that developing personal style is a more personal creative act than following fashion?`,
              options: [
                `Because fashion is designed by professionals and personal style is designed by amateurs`,
                `Because following fashion requires spending more money on new items each season`,
                `Because personal style involves making intentional choices about what feels authentically like you — rather than wearing what someone else decided was current`,
                `Because personal style never changes and therefore requires less creative effort over time`,
              ],
              correctIndex: 2,
              explanation: `Following fashion means adopting someone else's creative decisions about what's current and wearing them. Developing personal style means making your own creative decisions about what expresses who you are — drawing from trends when they resonate, ignoring them when they don't. It requires self-knowledge (what feels like me?), creative confidence (I can choose this even if it's not trending), and a relationship between your inner world and your outward expression. That relationship is what makes getting dressed a creative act rather than just a daily task.`,
            },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Fashion design is one of the world's largest creative industries, employing designers, fabric engineers, pattern makers, garment workers, stylists, photographers, and marketers. The principles of fashion design — silhouette, proportion, colour, texture — are the same principles used in interior design, product design, and graphic design. And the deeper question that fashion design asks — how do we express identity through visual choices? — is a question that applies to every designed object in the world.`,
          familyAdventure: `Go through your wardrobes together and do a clothing audit. Each person selects: three items they love and wear often, three items they never wear (why not?), and one item that best expresses who they are right now. Share and discuss each selection. Then ask together: where were your most commonly worn items made? Research one brand you wear regularly — what can you find about how and where it makes its clothes? Decide on one small change you want to make to how your family thinks about buying clothes.`,
          creativePrompt: `Design a complete outfit for a specific purpose — a school presentation, an outdoor adventure, a creative performance, or a special occasion. Draw the outfit flat (as if laid out on a surface — this is called a flat sketch in the industry). Label: the garment types, the fabrics you'd use and why (lightweight, structured, soft, etc.), the colours and what you want them to communicate, any textures or details, and what the whole outfit says about the person wearing it. Write one short paragraph about the story this outfit tells. You don't need to be a trained artist — the thinking is the creative work here.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that getting dressed is a creative act — and that the language of clothing has been one of humanity's oldest forms of expression. Style isn't what you own; it's the intention behind what you choose. Muse thinks there's something wonderful about the idea that you can say something true about yourself every single morning.`,
          badge: `fashion-designer`,
          badgeName: `Fashion Designer`,
          xpEarned: 50,
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
    fetch('/explorer-assets/creative-arts/l14-s1-creative-morning.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-s2-clothing-speaks.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-s3-building-blocks.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-s4-fashion-system.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-s5-style-vs-fashion.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l14-s6-visual-language.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L14] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L14] One or more magazine assets missing'));
}
