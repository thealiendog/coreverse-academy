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
          headline: `Everywhere You Look`,
          paragraphs: [
            `Every painting, every building, every poster, every doodle is built from the same small set of ingredients.`,
            `Four elements: line, shape, color, texture. Artists have used them since the first cave paintings 40,000 years ago. Learn to see them, and you'll spot them everywhere.`,
          ],
          image: `/explorer-assets/creative-arts/l01-s1-elements-everywhere.png`,
          imageCaption: `Four ingredients. 40,000 years of art. Every piece ever made is built from the same handful of elements.`,
          vocab: [
            { word: `elements of art`, definition: `The basic ingredients used to make every piece of visual art: line, shape, color, texture, and more.`,
              audioPrompt: `Imagine cooking, {name} — you can make endless dishes, but they all start from a small set of ingredients. Art is the same. Every painting, every drawing, every design is built from the elements of art. Once you know them, you can see how anything was made.` },
            { word: `visual language`, definition: `The system of meanings communicated through images instead of words — every element of art is a word in this language.`,
              audioPrompt: `Words aren't the only language, {name}. Pictures speak too. A red color means something. A curved line feels different from a sharp one. That's visual language, and Muse finds it one of the most beautiful kinds of communication there is.` },
            { word: `composition`,    definition: `How the elements are arranged together in a piece of art — where the lines, shapes, colors, and textures sit on the page.`,
              audioPrompt: `Composition is the art of arrangement, {name}. The same shapes in different positions tell completely different stories. Where you put things, how big they are, what surrounds them — composition is how an artist guides your eye through a piece.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Line`,
          paragraphs: [
            `A line is a mark that travels between two points. But lines have personality.`,
            `Thick = bold. Thin = delicate. Straight = calm. Curved = flowing. Diagonal = energy. Zigzag = tension. Every drawing starts with a line.`,
          ],
          image: `/explorer-assets/creative-arts/l01-s2-line-personalities.png`,
          imageCaption: `A line is never just a line. Every type carries its own feeling — and great artists choose on purpose.`,
          vocab: [
            { word: `line`,    definition: `A mark that travels between points. The most basic mark in art — and the foundation of everything else.`,
              audioPrompt: `Every drawing begins with a line, {name}. And Muse finds it wonderful that something so simple can carry so much — a thick line feels bold, a wavering curve feels alive. The same mark in different hands becomes completely different things. That's art.` },
            { word: `contour`, definition: `A line that follows the outer edge of something — tracing where the object ends and the air begins.`,
              audioPrompt: `Contour is how your eye travels around the edge of something, {name} — and your hand follows. The artist isn't thinking about what's inside. They're following the surface where the object meets the air. Slow, careful, alive.` },
            { word: `gesture`, definition: `A fast, loose line that captures the energy and movement of something — not its precise shape.`,
              audioPrompt: `Gesture drawing is about aliveness, not accuracy, {name}. Fast lines. The feeling of a dancer mid-spin or a bird lifting off. You capture the energy before it changes. Completely different from copying.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Shape`,
          paragraphs: [
            `A shape is a closed area made by lines. Two kinds: geometric (circles, squares — structured and man-made) and organic (irregular, flowing — alive and natural).`,
            `Art teachers say "find the shapes." A face is an oval. A tree is a circle on a rectangle. Every drawing is just shapes nested together.`,
          ],
          image: `/explorer-assets/creative-arts/l01-s3-geometric-vs-organic.png`,
          imageCaption: `Cities are geometric. Forests are organic. Both languages are beautiful — artists use them on purpose.`,
          vocab: [
            { word: `geometric`, definition: `Shapes that are mathematically precise — circles, squares, triangles, rectangles. Feel structured and man-made.`,
              audioPrompt: `A city skyline is full of geometric shapes, {name} — squares, rectangles, precise angles. They feel ordered and deliberate. Artists reach for geometric shapes when they want structure, pattern, and logic in a piece.` },
            { word: `organic`,   definition: `Shapes that are irregular, flowing, natural-looking — the kind found in leaves, clouds, bodies, rivers.`,
              audioPrompt: `Reach into a tide pool, {name} — every shape is different and unrepeatable. Organic shapes have that quality. Artists use them when they want something to feel alive and full of movement. They're everywhere in the living world.` },
            { word: `decompose`, definition: `To break a subject down into its basic shapes. The trick that makes drawing anything possible.`,
              audioPrompt: `Here's a secret, {name} — you can draw almost anything if you first find the shapes inside it. A face is an oval. A cat is a cluster of ovals. Decompose the subject, and suddenly the drawing isn't intimidating — it's just shapes you can build.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Color`,
          paragraphs: [
            `Color directly affects emotion — before the viewer even processes what they're seeing.`,
            `Warm colors (red, orange, yellow) feel energetic and advance toward you. Cool colors (blue, green, purple) feel calm and recede into distance.`,
          ],
          image: `/explorer-assets/creative-arts/l01-s4-warm-vs-cool.png`,
          imageCaption: `Color hits the heart before the brain. Warm or cool decides the whole mood before a shape is even noticed.`,
          vocab: [
            { word: `warm color`,  definition: `Reds, oranges, yellows. Feel energetic and physically appear to advance toward the viewer.`,
              audioPrompt: `Warm colors don't just look warm, {name} — they feel that way. Fire, sunsets, ripe fruit. They step toward you on the page, demanding attention. A single warm accent in a cool painting pulls the eye straight to it.` },
            { word: `cool color`,  definition: `Blues, greens, purples. Feel calm and physically appear to recede into the distance.`,
              audioPrompt: `Think of sliding into cold water on a hot day, {name} — that's what cool colors do to the eye. They move away from you, creating depth and calm. Perfect for shadows, skies, quiet moods.` },
            { word: `temperature`, definition: `How warm or cool a color feels. Even the same color can lean warm or cool — and great artists adjust this on purpose.`,
              audioPrompt: `Temperature is one of Muse's favorite ideas, {name}. Every color has one — warm or cool. Even within blues, some lean warm (purple-blue) and some lean cool (green-blue). Painters adjust temperature to create light, shadow, distance. A secret dimension inside every color.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Texture`,
          paragraphs: [
            `Texture is how a surface feels — or appears to feel.`,
            `Actual texture: you can touch it (sculpture, collage). Implied texture: flat art that LOOKS rough or smooth or furry. Short choppy marks suggest bark. Smooth blending suggests skin.`,
          ],
          image: `/explorer-assets/creative-arts/l01-s5-actual-vs-implied.png`,
          imageCaption: `Sculpture is texture you can feel. A drawing of bark is texture your fingers tingle for — even though the paper is smooth.`,
          vocab: [
            { word: `actual texture`,  definition: `Texture you can physically feel by touching it — sculpture, collage, mixed media all use actual texture.`,
              audioPrompt: `Actual texture is the kind you feel with your fingers, {name} — rough papier-mâché, smooth polished stone, the crinkle of collage paper. Run your hand across bark or woven cloth and you're feeling exactly what artists have always been fascinated by.` },
            { word: `implied texture`, definition: `The illusion of texture in a flat artwork — created entirely through marks. Makes surfaces feel touchable without being touchable.`,
              audioPrompt: `Here's something beautiful, {name}: a flat drawing can make you feel like you're touching rough bark or soft fur — without any actual texture at all. The marks alone do it. Implied texture makes a viewer's fingers tingle, even through a screen.` },
            { word: `mark-making`,     definition: `The way an artist applies strokes — pressure, speed, direction, tool. Every artist's mark-making is unique, like handwriting.`,
              audioPrompt: `Every artist has their own mark-making, {name} — a handwriting of sorts. Van Gogh's thick spiraling brushstrokes are unmistakable. Your marks are already yours, even if you don't know it yet. Paying attention to how you make marks is one of the first steps to finding your visual voice.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `See Art Everywhere`,
          paragraphs: [
            `Once you can see line, shape, color, and texture, you'll find them everywhere.`,
            `In nature, in architecture, in food, in your own drawings. Art isn't just in museums. It's the language of how we see.`,
          ],
          image: `/explorer-assets/creative-arts/l01-s6-see-art-everywhere.png`,
          imageCaption: `Now you have new eyes. The world hasn't changed — but how much of it you can see has.`,
          vocab: [
            { word: `aesthetic`,       definition: `Relating to beauty and the appreciation of visual qualities. Everyone has aesthetic preferences — even before they have words for them.`,
              audioPrompt: `Aesthetic is the word for the experience of beauty, {name}. You already have one — even if you've never named it. The colors you reach for, the shapes you doodle, the textures you love to touch. Your aesthetic is already yours. Now you have words to describe it.` },
            { word: `observation`,     definition: `Paying close attention to what you see. The main skill of every visual artist — and trainable like any other skill.`,
              audioPrompt: `Observation is the heart of art, {name}. Not talent — observation. Looking longer than other people look. Noticing what they miss. The good news is observation is a skill, not a gift. The more you practice looking, the more you see.` },
            { word: `visual literacy`, definition: `The ability to "read" images the way we read words — recognizing the elements at work and what they communicate.`,
              audioPrompt: `Reading words is one literacy, {name}. Reading images is another — and most schools don't teach it. Visual literacy means seeing line, shape, color, and texture working together in any picture, and understanding what they're saying. You're building it right now.` },
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
    fetch('/explorer-assets/creative-arts/l01-s1-elements-everywhere.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-s2-line-personalities.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-s3-geometric-vs-organic.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-s4-warm-vs-cool.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-s5-actual-vs-implied.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l01-s6-see-art-everywhere.png',  { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L01] One or more magazine assets missing'));
}
