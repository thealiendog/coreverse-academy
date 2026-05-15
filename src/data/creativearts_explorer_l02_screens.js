// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L02 — Color Theory: Primary, Secondary, Complementary
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L02 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-02`,
      title:     `Color Theory: Primary, Secondary, Complementary`,
      duration:  12,
      xpReward:  50,
      badge:     `color-theorist`,
      badgeName: `Color Theorist`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Last lesson we looked at the elements of art — line, shape, color, texture. Today we're going deep into one of those elements, because color deserves a whole lesson of its own. Here's what took me a long time to really understand: color is not decoration. It's a language. Every color choice an artist makes sends a signal directly to the viewer's emotions — often before the brain even processes what the image shows. Red does something different than blue. Yellow does something different than grey. Today you're going to learn to speak that language. It will change how you see everything.`,
          headline: `Color Theory: Primary, Secondary, Complementary`,
          subtitle: `Color is not just decoration — it's a language. Every color choice an artist makes sends a message straight to the viewer's emotions, often before the brain even processes what the image shows`,
          visual: `/explorer-assets/creative-arts/l02-welcome.png`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Color Wheel`,
          paragraphs: [
            `The color wheel is a map of how every color relates to every other color.`,
            `Once you know where a color sits on the wheel, you know its relationships — and relationships are everything in color.`,
          ],
          image: `/explorer-assets/creative-arts/l02-s1-color-wheel.png`,
          imageCaption: `Not just a chart — a map of how every color in the universe relates to every other one.`,
          vocab: [
            { word: `color wheel`,  definition: `A circular diagram showing how every color relates to every other — the foundation of all color theory.`,
              audioPrompt: `The color wheel is a map, {name} — and once you can read it, you can navigate color the way a sailor reads the stars. Muse considers it one of the most useful tools anyone learning art can know. Every relationship between colors is hiding inside its circle.` },
            { word: `relationship`, definition: `How two things connect to each other. In color, every pair of colors has a relationship — opposite, neighboring, parent-child.`,
              audioPrompt: `Color theory isn't really about colors, {name} — it's about relationships. A color alone doesn't mean much. But two colors together start to do something. The whole magic is in how colors talk to each other.` },
            { word: `color theory`, definition: `The study of how colors interact, what feelings they create, and how to use them deliberately in art and design.`,
              audioPrompt: `Color theory might sound technical, {name}, but it's really emotional. It's the study of why some color combinations feel exciting and others feel calm. Once you know it, you stop choosing colors by accident — and start choosing them on purpose.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Primary and Secondary`,
          paragraphs: [
            `Three primary colors can't be made by mixing anything: red, yellow, blue. They're the source of every other color.`,
            `Mix two primaries and you get a secondary. Red + yellow = orange. Yellow + blue = green. Blue + red = purple.`,
          ],
          image: `/explorer-assets/creative-arts/l02-s2-primary-secondary.png`,
          imageCaption: `Three colors that can't be made. Three more that come from mixing them. The whole rainbow starts here.`,
          vocab: [
            { word: `primary color`,   definition: `Red, yellow, or blue. The three colors that can't be made by mixing other colors — and the source of all other colors.`,
              audioPrompt: `Every color that has ever existed comes from just three, {name} — red, yellow, blue. The primaries. They're the source. One of the most elegant systems Muse has ever encountered.` },
            { word: `secondary color`, definition: `A color made by mixing two primaries. Orange (red+yellow), green (yellow+blue), purple (blue+red).`,
              audioPrompt: `Mix red and yellow and something new appears, {name} — orange, which is neither one nor the other but something entirely its own. That's what secondary colors are: the children of primaries, with their own moods.` },
            { word: `tertiary color`,  definition: `A color made by mixing a primary with a neighboring secondary — like red-orange or blue-purple. Fills the wheel.`,
              audioPrompt: `Tertiary colors are the in-between ones, {name} — red-orange, yellow-green, blue-purple. Most colors in nature live here: the subtle greens of leaves, the dusty purples of mountains at dusk. The wheel becomes continuous instead of just six stops.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Complementary Colors`,
          paragraphs: [
            `Complementary colors sit directly OPPOSITE each other on the wheel: red and green, blue and orange, yellow and purple.`,
            `Place them next to each other and each one looks more vivid. That's why stop signs are red, why sports kits use orange and blue. Maximum contrast.`,
          ],
          image: `/explorer-assets/creative-arts/l02-s3-complementary-pulse.png`,
          imageCaption: `Opposites attract — and intensify. Complementary pairs make each other louder than they'd ever be alone.`,
          vocab: [
            { word: `complementary color`, definition: `A color directly opposite another on the color wheel. Pairs create maximum contrast — red/green, blue/orange, yellow/purple.`,
              audioPrompt: `Look at a stop sign, {name} — red on green. Complementary colors at work. They sit across from each other on the wheel, and side by side, each one makes the other more vivid. Like they're in conversation, each insisting on itself.` },
            { word: `contrast`,            definition: `The difference between elements — light vs dark, warm vs cool, big vs small. Contrast is what makes things pop.`,
              audioPrompt: `Contrast is what makes things stand out, {name}. Without it, everything sits at the same level. With it, your eye knows exactly where to go. Complementary colors push contrast to its maximum — but contrast can also be size, value, or texture.` },
            { word: `vibrance`,            definition: `The visual energy that happens when colors push against each other. Saturated complementaries vibrate.`,
              audioPrompt: `When Van Gogh placed yellow sunflowers against deep blue, {name}, the vibrance was almost physical — the colors seemed to hum. Vibrance is what happens when colors push against each other and create energy beyond what either could do alone.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Analogous Colors`,
          paragraphs: [
            `Analogous colors are NEIGHBORS on the wheel — three or four in a row.`,
            `Sunsets use analogous warm colors. Ocean scenes use analogous cool colors. They flow together because they belong together. Calm and harmony, not energy and tension.`,
          ],
          image: `/explorer-assets/creative-arts/l02-s4-analogous-sunset.png`,
          imageCaption: `Neighbors flow. Where complementary colors spark, analogous colors blend — like family at the same dinner table.`,
          vocab: [
            { word: `analogous color`, definition: `A color that's a neighbor on the wheel. Three or four neighbors together flow naturally — like the colors of a sunset.`,
              audioPrompt: `Think of a sunset, {name} — peach, coral, amber, gold all bleeding into one another. That's analogous color. Neighbors on the wheel, close enough to feel like family. They don't spark — they flow.` },
            { word: `harmony`,         definition: `A feeling of visual unity. Created when colors or shapes belong together in a way that feels balanced and satisfying.`,
              audioPrompt: `Harmony is the feeling that everything belongs, {name} — that the colors are on the same team rather than fighting. Analogous palettes create harmony naturally. Not sameness — agreement.` },
            { word: `palette`,         definition: `The specific set of colors an artist chooses for a piece. Shapes mood, style, and visual identity.`,
              audioPrompt: `Every artist develops a palette, {name} — a personal set of colors that shows up again and again. Matisse loved bold reds and blues. Monet returned to soft greens and lavenders. Your own palette is already forming, even if you don't know it yet.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Tints and Shades`,
          paragraphs: [
            `Add white to a color = tint. Red becomes pink. Blue becomes sky blue. Soft, light, airy.`,
            `Add black to a color = shade. Red becomes maroon. Blue becomes navy. Deeper, richer, more dramatic.`,
          ],
          image: `/explorer-assets/creative-arts/l02-s5-tint-shade.png`,
          imageCaption: `Same color, two directions. Add white for tints. Add black for shades. A whole range from one hue.`,
          vocab: [
            { word: `tint`,  definition: `A color mixed with white to make it lighter — like pink (a tint of red) or sky blue (a tint of blue).`,
              audioPrompt: `Tints are the lighter, airier versions of a color, {name} — what you get when you add white. Red becomes pink. Purple becomes lavender. Painters use tints to show light falling on a surface. The same red in a tint becomes something tender.` },
            { word: `shade`, definition: `A color mixed with black to make it darker — like maroon (a shade of red) or navy (a shade of blue).`,
              audioPrompt: `Add black to a color and it deepens, {name} — becomes richer, more serious, more weighted. Red becomes maroon. Blue becomes navy. Rembrandt painted with deep shades that made subjects emerge from darkness. Shades carry weight.` },
            { word: `value`, definition: `How light or dark a color is. Often more important than the color itself — value carries the structure of an image.`,
              audioPrompt: `Here's a test, {name}: convert a color photo to black and white. It still reads as real because value — how light or dark something is — carries more information than color does. Artists learn to see value before almost anything else.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Color Is Language`,
          paragraphs: [
            `Every color choice in art sends a signal directly to the viewer's emotions — before the brain even processes what's there.`,
            `Red feels different from blue. Warm feels different from cool. Complementary feels different from analogous. Color is how art speaks before words.`,
          ],
          image: `/explorer-assets/creative-arts/l02-s6-color-as-language.png`,
          imageCaption: `Color hits the heart before the brain catches up. That's why artists choose colors as carefully as a writer chooses words.`,
          vocab: [
            { word: `hue`,                definition: `The basic name of a color — red, green, blue, purple. The starting point before considering value or saturation.`,
              audioPrompt: `Hue is the simplest way to name a color, {name} — red, blue, green, yellow. Just the color, before you ask how light, how dark, how intense. Hue is where every color conversation starts.` },
            { word: `saturation`,         definition: `How pure or intense a color is. High saturation = vivid. Low saturation = grayed out, dusty, muted.`,
              audioPrompt: `Saturation is how pure or intense a color is, {name}. Fire-engine red is highly saturated. Brick red is less saturated — it's been muted. Both are red. But they create completely different feelings. Saturation is another dial artists turn deliberately.` },
            { word: `emotional language`, definition: `How art communicates feeling without using words. Color is one of the most direct emotional languages there is.`,
              audioPrompt: `Color speaks before words, {name}. A red room doesn't need an explanation — you already feel it. Emotional language is what art does that words sometimes can't. Once you can read it, every painting starts saying something.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `contrast`,
              label: `✨ Creates Bold Contrast and Energy`,
              color: `#F87171`,
            },
            {
              id: `harmony`,
              label: `🌅 Creates Harmony and Calm`,
              color: `#34D399`,
            },
          ],
          items: [
            {
              id: `l02-g1`,
              image: `l02-game-1.png`,
              label: `Painting a superhero costume in red with bright green details so it really stands out.`,
              matchPhrase: `Red and green are complementary colors — directly opposite on the color wheel. Side by side, each one makes the other look more vivid and intense. That's why superhero costumes and sports kits love this combination.`,
              correctMatch: `contrast`,
            },
            {
              id: `l02-g2`,
              image: `l02-game-2.png`,
              label: `Drawing a sunset using yellow, orange, and red-orange blending softly into each other.`,
              matchPhrase: `Yellow, orange, and red-orange are analogous — neighbors on the color wheel. They flow together naturally, creating the warm, peaceful glow that makes a sunset feel unified and beautiful.`,
              correctMatch: `harmony`,
            },
            {
              id: `l02-g3`,
              image: `l02-game-3.png`,
              label: `Decorating a birthday card using bright orange letters on a blue background.`,
              matchPhrase: `Blue and orange are complementary. Their maximum contrast makes the orange letters leap off the blue background — which is exactly why this combination is used everywhere from book covers to movie posters.`,
              correctMatch: `contrast`,
            },
            {
              id: `l02-g4`,
              image: `l02-game-4.png`,
              label: `Painting an ocean scene using only blues, blue-greens, and greens flowing into each other.`,
              matchPhrase: `Blue, blue-green, and green are analogous cool colors. They create a sense of unity and calm — the way a real ocean feels when you stare out at it and everything belongs to the same family of color.`,
              correctMatch: `harmony`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l02-q1`,
              format: `multiple-choice`,
              question: `What makes primary colors different from all other colors on the color wheel?`,
              options: [
                `They are always the brightest and most vivid colors`,
                `They cannot be made by mixing other colors — they are the source from which all other colors are created`,
                `They always sit directly opposite each other on the color wheel`,
                `They are the only colors that can be lightened into tints`,
              ],
              correctIndex: 1,
              explanation: `Primary colors — red, yellow, and blue — are unique because they cannot be mixed from any other colors. They are the starting point, the source. Every other color on the wheel is made by combining primaries in different proportions. Understanding this makes color mixing logical rather than mysterious: start with the primaries and you can build anything.`,
            },
            {
              id: `l02-q2`,
              format: `multiple-choice`,
              question: `What are complementary colors?`,
              options: [
                `Colors that look good together because they are similar`,
                `Colors that are variations of the same hue`,
                `Colors that sit directly opposite each other on the color wheel`,
                `Colors used together in famous paintings`,
              ],
              correctIndex: 2,
              explanation: `Complementary colors sit directly opposite each other on the color wheel — red and green, blue and orange, yellow and purple. Placing them next to each other creates maximum contrast: each color makes the other look more vivid and intense than it would appear on its own. This is one of the most powerful contrast tools an artist has.`,
            },
            {
              id: `l02-q3`,
              format: `multiple-choice`,
              question: `What is the difference between a tint and a shade?`,
              options: [
                `A tint is a bright color; a shade is a dull color`,
                `A tint adds white to a color to make it lighter; a shade adds black to make it darker`,
                `Tints are warm colors; shades are cool colors`,
                `A tint and a shade are the same thing described differently`,
              ],
              correctIndex: 1,
              explanation: `A tint is made by adding white to a color — pink is a tint of red, sky blue is a tint of blue. A shade is made by adding black — maroon is a shade of red, navy is a shade of blue. Together, tints and shades give a single color an entire range of values from very light to very dark. Mastering value — the lightness or darkness of a color — is one of the most important skills in painting.`,
            },
            {
              id: `l02-q4`,
              format: `true-false`,
              question: `Complementary colors — like red and green, or blue and orange — make each other look more vivid and intense when placed next to each other.`,
              correctAnswer: true,
              explanation: `True. Complementary colors create maximum contrast because they sit at opposite ends of the color relationship spectrum. When placed side by side, each one intensifies the other — the red looks redder next to green, the orange looks more orange next to blue. This visual effect is used deliberately by artists, designers, and anyone who wants something to really pop.`,
            },
            {
              id: `l02-q5`,
              format: `fill-blank`,
              question: `Adding white to a color makes it lighter — this lighter version of the color is called a ___.`,
              options: [
                `tint`,
                `shade`,
                `tone`,
                `complement`,
              ],
              correctIndex: 0,
              explanation: `A tint is what you get when you add white to a color, making it lighter and softer. Pink is a tint of red. Pastel blue is a tint of blue. The opposite — adding black — creates a shade, making the color darker and deeper. Understanding tints and shades gives you control over the full range of a color's values, not just its basic hue.`,
            },
            {
              id: `l02-q6`,
              format: `multiple-choice`,
              question: `Why do artists often use analogous color schemes in paintings of natural scenes?`,
              options: [
                `Because nature only ever contains one or two colors at a time`,
                `Because analogous colors — neighbors on the color wheel — create a sense of harmony and calm that feels natural and easy on the eye`,
                `Because analogous colors are easier to mix than complementary ones`,
                `Because analogous schemes are required for realistic paintings`,
              ],
              correctIndex: 1,
              explanation: `Analogous colors are neighbors on the color wheel, and because they share underlying color relationships, they naturally flow together and feel harmonious. Nature is full of analogous color — the greens, blue-greens, and yellows of a forest; the blues, purples, and red-purples of a twilight sky. When an artist uses an analogous palette, they're borrowing the built-in harmony of the natural world.`,
            },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Color theory is used every day by artists, graphic designers, architects, film directors, and interior designers. When a movie poster uses complementary colors to create visual tension, or a bedroom is painted in analogous cool tones to feel calm, someone understood color relationships and made deliberate choices. Now you understand them too.`,
          familyAdventure: `Go through your home and identify the colour scheme of each room — is it complementary (opposite colors), analogous (neighboring colors), or monochromatic (one color in different values)? How does each room's color scheme make you feel? Then look at your own clothing — what colors do you gravitate toward? Look up color psychology and see if the colors you're drawn to match how you like to feel.`,
          creativePrompt: `Using any colours you have — crayons, coloured pencils, markers, or paint — place three primary colours (red, yellow, blue) equally spaced apart on a page. Mix or blend each pair to create the three secondary colours between them: orange (red + yellow), green (yellow + blue), purple (blue + red). Label everything. Then choose one pair of complementary colours and create a small drawing or pattern using only those two. Notice the contrast and energy they create next to each other.`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that color is one of the most powerful tools any artist has — and that every color choice on a canvas is sending an emotional message before the viewer even knows it. The color wheel is yours to explore now. Muse sees color symphonies in every sunset, every painting, every room — and now you will too.`,
          badge: `color-theorist`,
          badgeName: `Color Theorist`,
          xpEarned: 50,
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
    fetch('/explorer-assets/creative-arts/l02-s1-color-wheel.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-s2-primary-secondary.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-s3-complementary-pulse.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-s4-analogous-sunset.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-s5-tint-shade.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l02-s6-color-as-language.png',   { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L02] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L02] One or more magazine assets missing'));
}
