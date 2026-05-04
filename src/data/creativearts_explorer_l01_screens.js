// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L01 — The Elements of Art: Line, Shape, Color, Texture
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L01 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-01`,
      title:     `The Elements of Art: Line, Shape, Color, Texture`,
      duration:  12,
      xpReward:  50,
      badge:     `art-elements-explorer`,
      badgeName: `Art Elements Explorer`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Oh, {name} — I'm so glad you're here. I'm Muse, and I want to show you something that's going to change how you see the entire world. Everywhere you look — every painting, every building, every poster, every doodle — is built from the same small set of ingredients. Line. Shape. Color. Texture. Artists have been using these same elements since the very first cave paintings forty thousand years ago. Today you're going to learn to see them — really see them — and once you do, you'll start spotting them everywhere: in nature, in design, in the art you already make. Are you ready? Let's open your eyes.`,
          headline: `The Elements of Art: Line, Shape, Color, Texture`,
          subtitle: `Every painting, drawing, sculpture, and design ever made — from cave paintings 40,000 years ago to digital art today — is built from the same basic ingredients. Once you can see the elements of art, you'll never look at the world the same way again`,
          visual: `/explorer-assets/creative-arts/l01-welcome.png`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Line: The Foundation of Everything`,
          paragraphs: [
            `A line is a mark that travels between two points — but in art, **lines do far more than connect dots**. Lines have personality: **thick lines** feel bold and heavy, **thin lines** feel delicate. **Straight lines** feel structured and calm, **curved lines** feel organic and flowing. **Diagonal lines** create energy and movement. **Zigzag lines** create tension and excitement. Artists use line to create shapes, suggest texture, show movement, guide the viewer's eye, and express emotion — all with a single mark. Every drawing you've ever made started with a line. Learning to choose your lines intentionally is one of the first and most powerful skills in all of visual art.`,
          ],
          image: `/explorer-assets/creative-arts/l01-magazine-1.png`,
          imageCaption: `Every drawing starts with a line — but which kind of line you choose changes everything`,
          vocab: [
            { word: `line`, definition: `The most basic mark an artist can make — a moving point that creates shape, direction, energy, and emotion depending on how it's drawn.`, audioPrompt: `Every drawing begins with a line, {name}. And Muse finds it wonderful that something so simple can carry so much — a thick line feels bold, a diagonal feels urgent, a wavering curve feels alive. The same mark in different hands becomes completely different things. That's not coincidence. That's art.` },
            { word: `contour`, definition: `A line that follows the outer edge or shape of something — tracing where the object ends and the air begins.`, audioPrompt: `A contour line is how your eye travels around the edge of something, {name} — and your hand follows. When artists draw contour, they're not thinking about the inside of things. They're following the surface, tracing where the object ends and the air begins. Slowing down so the line has to think.` },
            { word: `gesture`, definition: `A loose, fast line that captures the energy and movement of something rather than its precise shape — how artists quickly record life before it changes.`, audioPrompt: `Gesture drawing is about aliveness, not accuracy, {name}. You're not drawing what something looks like — you're drawing what it feels like to be in motion. Fast lines. The feeling of a dancer mid-spin or a bird lifting off. You capture the energy before it changes. That's a completely different thing from copying.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Shape: Two-Dimensional Forms`,
          paragraphs: [
            `A **shape** is a closed area created by one or more lines. **Geometric shapes** — circles, squares, triangles, rectangles — feel structured, mathematical, and man-made. **Organic shapes** — irregular, flowing, natural-looking — feel alive and natural. Every object you see can be broken down into basic shapes, which is why art teachers tell beginners to **"find the shapes"** in whatever they're drawing. A face is an oval with smaller shapes inside. A tree is a circle on a rectangle. A building is a collection of rectangles. Seeing shapes is the first skill of observational drawing — and once you start looking for them, you find them absolutely everywhere.`,
          ],
          image: `/explorer-assets/creative-arts/l01-magazine-2.png`,
          imageCaption: `Geometric shapes feel structured and man-made; organic shapes feel alive and natural`,
          vocab: [
            { word: `geometric`, definition: `Shapes that are mathematically precise — circles, squares, triangles, rectangles — that feel structured, ordered, and man-made.`, audioPrompt: `Have you ever noticed, {name}, how a city skyline looks completely different from a forest? Buildings are full of geometric shapes — squares, rectangles, precise angles. They feel ordered and deliberate. Artists use geometric shapes to create structure, pattern, and a sense of logic in their work. The circle, the triangle, the square — all of design starts there.` },
            { word: `organic`, definition: `Shapes that are irregular, flowing, and natural-looking — the kind of shapes found in leaves, clouds, bodies, and rivers.`, audioPrompt: `Imagine reaching into a tide pool, {name} — everything you touch is a different, unrepeatable shape. Organic shapes have that quality: irregular, flowing, alive-feeling. No two are exactly the same. Artists use organic shapes when they want something to feel natural, warm, and full of movement. They're everywhere in the living world, if you look.` },
            { word: `decompose`, definition: `To break a complex subject down into its basic shapes — the way artists "find the shapes" inside anything they want to draw.`, audioPrompt: `Most kids don't realize, {name}, that they can draw almost anything if they first find the shapes hiding inside it. A face is an oval with smaller shapes nested in it. A tree is a circle on a rectangle. A cat is a cluster of ovals. When you decompose a subject into shapes, the drawing stops being intimidating and becomes something you can actually build.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Color: Emotion and Energy`,
          paragraphs: [
            `Color is one of the most powerful elements because it **directly affects emotion**. **Warm colors** — red, orange, yellow — feel energetic, passionate, and appear to advance toward the viewer. **Cool colors** — blue, green, purple — feel calm, peaceful, and appear to recede into the distance. Artists use color temperature, contrast, and harmony to create specific emotional effects. The colors in a painting determine its mood **before the viewer even processes what the image shows**. This is why a sunset feels warm and hopeful, and an underwater scene feels deep and still. Understanding color is understanding emotional communication.`,
          ],
          image: `/explorer-assets/creative-arts/l01-magazine-3.png`,
          imageCaption: `Warm colors advance and energize; cool colors recede and calm — all before the brain processes the image`,
          vocab: [
            { word: `warm color`, definition: `Reds, oranges, and yellows — colors that feel energetic and passionate, and that visually seem to push forward toward the viewer.`, audioPrompt: `Warm colors don't just look warm, {name} — they actually feel that way. Think of fire, sunsets, ripe fruit. Reds and oranges seem to step toward you on the page, demanding attention. Artists use warm colors when they want energy, urgency, or heat. A single warm accent in a cool painting will pull the eye straight to it.` },
            { word: `cool color`, definition: `Blues, greens, and purples — colors that feel calm and peaceful, and that visually seem to recede into the distance.`, audioPrompt: `Think of the feeling of sliding into cold water on a hot day, {name} — that's what cool colors do to the eye. Blues, greens, and purples seem to move away from you, creating depth and calm. They're perfect for shadows, skies, water, and quiet moods. Cool and warm colors talk to each other in a painting — understanding both is understanding emotional language.` },
            { word: `temperature`, definition: `In art, a way of describing how warm or cool a color feels — reds and yellows are "warm," blues and greens are "cool" — used by artists to control mood and depth.`, audioPrompt: `Color temperature is one of Muse's favorite concepts, {name}, because it reveals that color isn't just about hue — it's about feeling. Every color has a temperature: warm or cool. Even within blues, some lean warm (purple-blue) and some lean cool (green-blue). Painters adjust temperature to create light, shadow, distance, and emotion. It's like a secret dimension hiding inside every color.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Texture: Real and Implied`,
          paragraphs: [
            `**Texture** is the surface quality of an artwork — how it feels, or appears to feel. **Actual texture** (in sculpture and mixed media) is something you can physically touch. **Implied texture** in 2D art creates the illusion of texture through technique — short choppy marks suggest rough bark, smooth blending suggests skin, fine hatched lines suggest fabric. Texture adds richness and life to a drawing or painting. A forest without implied texture looks flat. With it, you almost feel the roughness of the bark and the softness of the moss under your fingers. The marks you make with a pencil or brush can make any surface come alive.`,
          ],
          image: `/explorer-assets/creative-arts/l01-magazine-4.png`,
          imageCaption: `Implied texture makes a drawing feel touchable — the marks you choose make surfaces come alive`,
          vocab: [
            { word: `actual texture`, definition: `Texture you can physically feel by touching it — found in sculpture, collage, and mixed media where real materials create real surfaces.`, audioPrompt: `Actual texture is the kind you feel with your fingers, {name} — the roughness of papier-mâché, the smooth coolness of polished stone, the crinkle of collaged newspaper. Sculptors and mixed-media artists work with actual texture all the time. Run your hand across a piece of bark or a woven cloth and you're feeling exactly what artists have always been fascinated by: the physical truth of a surface.` },
            { word: `implied texture`, definition: `The illusion of texture created through marks and technique in a flat drawing or painting — making surfaces look touchable without actually being textured.`, audioPrompt: `Here's something beautiful, {name}: a flat drawing can make you feel like you're touching rough bark or soft fur — without any actual texture at all. Implied texture is created entirely with marks. Short choppy strokes suggest roughness. Long smooth blending suggests skin. Hatched lines suggest woven fabric. The marks you choose make a viewer's fingers tingle, even through a screen.` },
            { word: `mark-making`, definition: `The way an artist applies lines, strokes, and marks to a surface — including the tool, pressure, speed, and direction used — which creates the visual texture and energy of a piece.`, audioPrompt: `Every artist has their own mark-making — a handwriting of sorts, {name}. Van Gogh's thick, spiraling brushstrokes are unmistakable. Seurat built images from thousands of tiny dots. Your marks — the way you press a pencil, the speed of your brush — are already yours, even if you don't know it yet. Paying attention to how you make marks is one of the first steps toward finding your own visual voice.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `energy`,
              label: `⚡ Creates Energy and Excitement`,
              color: `#F59E0B`,
            },
            {
              id: `calm`,
              label: `🍃 Creates Calm and Harmony`,
              color: `#34D399`,
            },
          ],
          items: [
            {
              id: `l01-g1`,
              image: `l01-game-1.png`,
              label: `Drawing a storm scene using lots of diagonal and zigzag lines across the whole picture.`,
              matchPhrase: `Diagonal and zigzag lines are the most energetic lines there are — the eye follows them at speed and feels the tension and movement in them. That's line doing exactly what this element does best.`,
              correctMatch: `energy`,
            },
            {
              id: `l01-g2`,
              image: `l01-game-2.png`,
              label: `Choosing cool blues and greens to paint a quiet, still lake at dawn.`,
              matchPhrase: `Cool colors — blue, green, purple — recede and settle. They create the peaceful, spacious feeling of still water. That's color shaping the whole mood before a single shape is even noticed.`,
              correctMatch: `calm`,
            },
            {
              id: `l01-g3`,
              image: `l01-game-3.png`,
              label: `Drawing rough, scratchy marks on a tree trunk so the bark looks like you could feel it.`,
              matchPhrase: `Implied texture — created through the energy and direction of your marks — makes surfaces feel tactile and alive. Rough, scratchy marks communicate roughness and rawness, which gives the drawing real physical presence.`,
              correctMatch: `energy`,
            },
            {
              id: `l01-g4`,
              image: `l01-game-4.png`,
              label: `Using warm reds and oranges to paint a crackling campfire at night.`,
              matchPhrase: `Warm colors — red, orange, yellow — advance toward the viewer and feel energetic and passionate. That's exactly the feeling of fire: alive, moving, hot. Color is doing the emotional work here.`,
              correctMatch: `energy`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l01-q1`,
              format: `multiple-choice`,
              question: `What do diagonal lines suggest in artwork?`,
              options: [
                `Calmness and stability`,
                `Energy and movement`,
                `Sadness and emptiness`,
                `Structure and order`,
              ],
              correctIndex: 1,
              explanation: `Diagonal lines are the most energetic type of line — the eye follows them at speed and senses movement and tension. This is why artists use diagonal lines in drawings of storms, action scenes, and fast movement. Straight horizontal and vertical lines feel stable and calm by comparison.`,
            },
            {
              id: `l01-q2`,
              format: `multiple-choice`,
              question: `What is the difference between geometric and organic shapes?`,
              options: [
                `Geometric shapes are found in nature; organic shapes are man-made`,
                `Geometric shapes are structured and mathematical; organic shapes are irregular and natural-looking`,
                `Geometric shapes are always colorful; organic shapes are always plain`,
                `There is no practical difference in art`,
              ],
              correctIndex: 1,
              explanation: `Geometric shapes — circles, squares, triangles, rectangles — feel mathematical and man-made, because they are. Organic shapes — irregular, flowing, natural — feel alive and natural. Both appear in art: architectural drawings use geometric shapes, while drawings of landscapes and living things tend toward organic. Recognising the difference helps you make intentional choices about what feeling you want your artwork to have.`,
            },
            {
              id: `l01-q3`,
              format: `multiple-choice`,
              question: `What do warm colors (red, orange, yellow) typically convey?`,
              options: [
                `Calm and peace — they are relaxing colors`,
                `Sadness and distance — they make viewers feel far away`,
                `Energy, passion, and they appear to advance toward the viewer`,
                `Neutrality — warm colors have no emotional effect`,
              ],
              correctIndex: 2,
              explanation: `Warm colors — red, orange, yellow — feel energetic, passionate, and physically advance toward the viewer. Cool colors do the opposite: they recede and feel calm. This is why a painting of a sunset feels very different from a painting of the ocean, even before you know what it shows. Color temperature is the artist's shortcut to emotional communication.`,
            },
            {
              id: `l01-q4`,
              format: `true-false`,
              question: `Texture in a 2D artwork can be implied through marks and brushstrokes — you can almost feel rough bark or soft fabric even though the surface is completely flat.`,
              correctAnswer: true,
              explanation: `True. Implied texture is one of the most expressive techniques in 2D art. By varying the direction, size, and pressure of marks — short choppy strokes for rough surfaces, long smooth blending for skin or water — an artist creates the sensation of texture. The viewer's brain fills in the tactile experience even though nothing can actually be touched.`,
            },
            {
              id: `l01-q5`,
              format: `fill-blank`,
              question: `Cool colors — blue, green, and purple — often create a feeling of ___ in a painting.`,
              options: [
                `calm`,
                `anger`,
                `tension`,
                `excitement`,
              ],
              correctIndex: 0,
              explanation: `Cool colors create a sense of calm, peace, and spaciousness. They appear to recede from the viewer — which is why distant mountains look blue, and why underwater scenes feel deep and still. Warm colors do the opposite: they advance and energize. Understanding this difference is one of the most practical tools in an artist's toolkit.`,
            },
            {
              id: `l01-q6`,
              format: `multiple-choice`,
              question: `Why do artists choose different types of lines deliberately in their work?`,
              options: [
                `To show they have practised many different drawing techniques`,
                `Because each type of line creates a different feeling — diagonal for energy, curved for flow, straight for calm — so choosing intentionally shapes the mood of the whole artwork`,
                `Because art rules require using multiple line types in every drawing`,
                `To make drawings more complicated and impressive to look at`,
              ],
              correctIndex: 1,
              explanation: `Every line carries emotional meaning — and a skilled artist chooses lines the same way a writer chooses words: deliberately. Diagonal and zigzag lines create energy and tension. Curved lines feel organic and flowing. Straight horizontal lines feel stable and calm. Using different lines randomly produces an inconsistent feeling; choosing them with intention gives the whole artwork a unified emotional voice.`,
            },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Visual artists, graphic designers, and illustrators across every creative field use the elements of art as the foundation of every decision they make. These aren't rules that limit creativity — they're the vocabulary that makes intentional creative choices possible. Every piece of art ever made is built from the same four ingredients.`,
          familyAdventure: `Go to a museum, art gallery, or browse an online art collection together. Pick three very different artworks and for each one, identify: what lines do you see and what do they feel like? What shapes are used? What colors and what mood do they create? What textures do you see or imagine? Talk about how the artist used the elements intentionally. Which artwork moves you most, and why?`,
          creativePrompt: `Find any piece of paper and a pencil — it doesn't need to be fancy. Divide the page into four sections. In the first, draw ten different types of lines and notice what feeling each one gives you. In the second, fill the space with shapes — both geometric (circles, squares, triangles) and organic (flowing, irregular). In the third, colour a simple scene using only warm OR only cool colours and notice the mood it creates. In the fourth, try to make four different implied textures using only pencil marks — rough, smooth, furry, spiky. Notice how marks alone can make you almost feel different surfaces.`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that every piece of art ever made — from cave paintings to digital art — is built from the same four elements: line, shape, color, and texture. Now that you can see them, you'll find them absolutely everywhere. Muse sees the whole world as an artwork waiting to be noticed — and now, so do you.`,
          badge: `art-elements-explorer`,
          badgeName: `Art Elements Explorer`,
          xpEarned: 50,
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
