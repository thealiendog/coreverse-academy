// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L03 — Drawing Techniques: Perspective and Proportion
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L03 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-03`,
      title:     `Drawing Techniques: Perspective and Proportion`,
      duration:  12,
      xpReward:  50,
      badge:     `perspective-artist`,
      badgeName: `Perspective Artist`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Here's a question that fascinated me for a long time, {name}: why do some drawings look completely flat — stuck to the surface of the paper — while others look like you could step right into them? Like there's real space behind the page? The answer is two principles that transformed the history of art when artists figured them out: perspective and proportion. Once you understand these, you'll spot them in every painting, every photograph, every film frame. And your own drawings will take a real leap forward. Today we unlock both of them. Ready to make your work come alive?`,
          headline: `Drawing Techniques: Perspective and Proportion`,
          subtitle: `Why do some drawings look flat and awkward while others look like you could step right into them? The secret is two principles that changed art forever — and once you understand them, your drawings will take a real leap forward`,
          visual: `/explorer-assets/creative-arts/l03-welcome.png`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Some Drawings Feel Flat`,
          paragraphs: [
            `Some drawings look stuck to the paper. Others look like you could step right into them.`,
            `Two principles separate flat from deep: perspective and proportion. They transformed art when Renaissance artists figured them out.`,
          ],
          image: `/explorer-assets/creative-arts/l03-s1-flat-vs-deep.png`,
          imageCaption: `Same paper. Same pencil. Two different worlds. Perspective and proportion are what separate them.`,
          vocab: [
            { word: `perspective`, definition: `A system for representing three-dimensional space on a flat surface — making things look like they have real depth.`,
              audioPrompt: `Perspective is how your eye understands distance, {name} — and artists spent centuries figuring out how to put that on a flat page. The rules your eyes already use, made visible and workable. Once you know them, depth appears wherever you put your pencil.` },
            { word: `proportion`,  definition: `The size relationships between parts of a drawing — how big each part is compared to every other part.`,
              audioPrompt: `Proportion is about relationships, {name}. How big is the head compared to the body? How big are the eyes compared to the face? Most drawing problems come from proportion, not from skill. Get the proportions right and the drawing almost fixes itself.` },
            { word: `Renaissance`, definition: `A period in art history (around the 1400s) when European artists first systematized perspective — transforming Western art forever.`,
              audioPrompt: `The Renaissance changed art completely, {name}. Before it, paintings looked flat. Then artists like Brunelleschi and Alberti figured out perspective — and suddenly paintings could feel like windows into real three-dimensional worlds. One discovery. Centuries of new possibilities.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `One-Point Perspective`,
          paragraphs: [
            `Stand on a long straight road. The edges appear to narrow until they meet at a single point on the horizon.`,
            `That's the vanishing point. In one-point perspective, every line going into the distance heads toward it. Flat paper instantly has depth.`,
          ],
          image: `/explorer-assets/creative-arts/l03-s2-one-point-road.png`,
          imageCaption: `One point on the horizon. Every receding line aimed at it. That's the entire trick — and it works every time.`,
          vocab: [
            { word: `vanishing point`, definition: `The point on the horizon where parallel lines appear to meet. The anchor of perspective drawing.`,
              audioPrompt: `Imagine standing in the middle of a long road, {name}, looking toward the horizon. The road narrows until it disappears at a single point. That's the vanishing point. Fix it on the horizon, connect your lines to it, and flat paper suddenly has depth. It feels like magic the first time it works.` },
            { word: `horizon line`,    definition: `The imaginary horizontal line at the viewer's eye level — where vanishing points sit and where perspective begins.`,
              audioPrompt: `The horizon line is your eye level, {name} — not necessarily where sky meets land, but where your eyes actually are. Put it high in the picture and viewers look down on the scene. Put it low and they look up. One of the most powerful decisions in any perspective drawing.` },
            { word: `converge`,        definition: `To come together at a point. What parallel lines appear to do as they recede in perspective.`,
              audioPrompt: `Parallel lines never meet in reality, {name} — but to your eyes, they appear to converge as they go into the distance. That trick of vision is the entire foundation of perspective. Capture the converging, and you've captured depth.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Two-Point Perspective`,
          paragraphs: [
            `Two-point perspective uses TWO vanishing points — one left, one right.`,
            `That's how we see buildings from the corner: the left side angles toward one vanishing point, the right side toward the other. Cities come alive.`,
          ],
          image: `/explorer-assets/creative-arts/l03-s3-two-point-corner.png`,
          imageCaption: `When you see a building from the corner, two sets of lines rush away in two directions. That's two-point perspective.`,
          vocab: [
            { word: `two-point perspective`, definition: `A drawing system using two vanishing points on the horizon — for showing objects from a corner angle.`,
              audioPrompt: `Most buildings in a cityscape don't face you straight on, {name} — you see their corner, with sides angling away in two directions. Two-point perspective captures that. One set of lines rushes left, another rushes right. Together they build a corner that feels solid.` },
            { word: `depth`,                 definition: `The illusion of three-dimensional space on a flat surface. Created by perspective, overlap, size, and color.`,
              audioPrompt: `Depth is what makes a flat drawing feel like you could walk into it, {name}. Things in front overlap things behind. Objects get smaller as they recede. The goal: make the viewer feel like there's a world beyond the paper's edge.` },
            { word: `recession`,             definition: `The way objects appear to move away — getting smaller, less detailed, cooler in color as they go.`,
              audioPrompt: `Recession is the feeling of things moving away, {name}. Smaller, softer, cooler in color. Da Vinci used atmospheric recession in the Mona Lisa's background — it's why that landscape feels so far away and mysterious.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Proportion`,
          paragraphs: [
            `Proportion = how big each part is compared to the others.`,
            `Most common mistake: drawing eyes too high. The eyes actually sit HALFWAY down the head. Human bodies are about 7-8 heads tall.`,
          ],
          image: `/explorer-assets/creative-arts/l03-s4-face-proportion.png`,
          imageCaption: `It surprises almost everyone: the eyes are HALFWAY down the head, not near the top. Measure next time you look in a mirror.`,
          vocab: [
            { word: `proportion`, definition: `The size relationships between parts of a drawing. Wrong proportion is the most common reason drawings look "off."`,
              audioPrompt: `Proportion is the silent killer of beginner drawings, {name}. The lines might be skilled. The shading might be careful. But if the proportions are off — head too big, eyes too high — the whole thing reads as wrong. Get proportions right and everything else has a chance.` },
            { word: `measure`,    definition: `To compare sizes carefully. Artists measure with their eyes, holding up a pencil to compare proportions.`,
              audioPrompt: `Real artists measure constantly, {name}. They hold up a pencil at arm's length and compare: how many head-heights fit in the body? How wide is the nose compared to the eye? It looks fussy, but it's the secret to accurate proportion.` },
            { word: `relative`,   definition: `Compared to something else. Every proportion is relative — only meaningful in relation to other parts.`,
              audioPrompt: `Proportion is always relative, {name} — it only makes sense in comparison. "The hand is big" means nothing alone. "The hand is the same size as the face" is useful. Real measurement is always in relation to other parts.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Symbols vs Real Seeing`,
          paragraphs: [
            `Most people draw a symbol — a circle face with eyes near the top. The brain takes a shortcut.`,
            `Try this: flip a picture upside down and draw it. Your brain can't recognize the shapes, so it has to actually look. The result is almost always more accurate.`,
          ],
          image: `/explorer-assets/creative-arts/l03-s5-upside-down-trick.png`,
          imageCaption: `Upside down, your brain can't recognize the subject — so it stops drawing symbols and starts drawing what's actually there.`,
          vocab: [
            { word: `symbol`,             definition: `A mental shortcut the brain uses for familiar things. A stick figure is the symbol of "person." It's not what a person looks like.`,
              audioPrompt: `When most kids draw a person, {name}, they draw a symbol: circle head, stick body, mitten hands. The symbol isn't wrong. But learning to see past it — to draw what's actually there — is one of the most transformative shifts in learning to draw.` },
            { word: `upside-down drawing`, definition: `A technique where you draw a flipped image. Forces the brain to stop recognizing the subject and draw shapes instead.`,
              audioPrompt: `One of Muse's favorite drawing tricks, {name}: flip a picture upside down and draw it. Your brain can't recognize the subject anymore, so it stops applying symbol shortcuts. Suddenly you're drawing real shapes — and the result is almost always more accurate.` },
            { word: `shortcut`,           definition: `A mental rule your brain uses to save effort. Usually useful in life. Almost always bad for drawing.`,
              audioPrompt: `Shortcuts are how your brain saves energy, {name} — and most of the time they're helpful. But in drawing, they're the enemy. The brain says "oh, that's a face, I know what those look like" and skips the looking. Real drawing means catching the shortcut and overriding it.` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Drawing Is Looking`,
          paragraphs: [
            `The biggest skill in drawing isn't hand control. It's looking carefully.`,
            `True drawing is true seeing. The pencil follows the eye. Once you really observe — really look — everything else gets easier.`,
          ],
          image: `/explorer-assets/creative-arts/l03-s6-eye-pencil.png`,
          imageCaption: `The pencil never gets ahead of the eye. Drawing is just sustained, careful looking — with a record of what you saw.`,
          vocab: [
            { word: `observation`,    definition: `Paying close attention to what you actually see — not what you assume or remember.`,
              audioPrompt: `Observation is a way of paying attention, {name} — careful enough that it changes how you see everything. When you sit down to draw from life, you're trying to see the actual angles, the specific shapes, the real proportions. Artists who draw from observation often describe it as meditative.` },
            { word: `negative space`, definition: `The empty space around and between objects. It has its own shapes — and drawing it accurately helps the object take care of itself.`,
              audioPrompt: `Negative space is the air around things, {name} — and here's something surprising: it has shapes. The gap between an arm and a body, the space between branches. Draw the space, and the object takes care of itself. One of the most useful tricks in observational drawing.` },
            { word: `accuracy`,       definition: `How truly your drawing matches what's actually there. Built from observation, not talent.`,
              audioPrompt: `Accuracy in drawing isn't about being a "natural," {name}. It comes entirely from observation. The more carefully you look, the more accurately you draw. Talent helps, but careful looking is what every great artist actually relied on. And looking is trainable.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `realistic`,
              label: `🎯 Makes a Drawing Look More Realistic`,
              color: `#34D399`,
            },
            {
              id: `mistake`,
              label: `🤔 A Common Drawing Mistake to Watch Out For`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l03-g1`,
              image: `l03-game-1.png`,
              label: `Drawing a road that gets narrower and narrower until it disappears to a single point in the distance.`,
              matchPhrase: `That's one-point perspective in action — parallel lines appear to meet at the vanishing point on the horizon, and that convergence is what creates the instant illusion of depth on a flat page.`,
              correctMatch: `realistic`,
            },
            {
              id: `l03-g2`,
              image: `l03-game-2.png`,
              label: `Placing the eyes of a drawn face about halfway down the head, not near the very top.`,
              matchPhrase: `The eyes actually sit about halfway down the head — knowing this proportion is one of the things that makes a face drawing look realistic rather than cartoonish. It's a small shift that makes a huge difference.`,
              correctMatch: `realistic`,
            },
            {
              id: `l03-g3`,
              image: `l03-game-3.png`,
              label: `Drawing all the buildings on a street the same size, even the ones far away in the distance.`,
              matchPhrase: `Objects in the distance appear smaller — if everything's the same size, the sense of depth disappears and the scene looks completely flat. Perspective means farther away always means drawn smaller.`,
              correctMatch: `mistake`,
            },
            {
              id: `l03-g4`,
              image: `l03-game-4.png`,
              label: `Drawing eyes very close to the top of a head, leaving only a tiny strip of forehead above them.`,
              matchPhrase: `Almost everyone makes this mistake because the brain's shortcut puts eyes near the top — but careful observation shows they're much lower down. Drawing what you actually see, not what you expect to see, is the key skill.`,
              correctMatch: `mistake`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l03-q1`,
              format: `multiple-choice`,
              question: `What is a vanishing point in perspective drawing?`,
              options: [
                `The point where objects disappear off the edge of the paper`,
                `The point on the horizon line where parallel lines appear to converge as they recede into the distance`,
                `The darkest point in a drawing where shadows concentrate`,
                `The centre of the composition where the viewer's eye is drawn`,
              ],
              correctIndex: 1,
              explanation: `The vanishing point is the spot on the horizon line where parallel lines appear to meet as they recede into the distance. In real life, a straight road appears to narrow to a point on the horizon — that's the vanishing point. Placing it accurately and drawing all receding lines toward it is what creates convincing three-dimensional depth on a flat surface.`,
            },
            {
              id: `l03-q2`,
              format: `multiple-choice`,
              question: `Where are human eyes actually located on the face?`,
              options: [
                `Near the top of the head — about one-quarter from the top`,
                `Approximately halfway down the head — much lower than most beginners draw them`,
                `At the same level as the ears`,
                `Three-quarters of the way down the head`,
              ],
              correctIndex: 1,
              explanation: `The eyes sit approximately halfway down the head — a fact that surprises almost everyone the first time they measure it. Most beginners draw eyes too high because the brain's symbol for "face" places them near the top of a large round head. Observing carefully — rather than drawing the symbol — is the key shift that makes portraits start to look realistic.`,
            },
            {
              id: `l03-q3`,
              format: `multiple-choice`,
              question: `What is proportion in drawing?`,
              options: [
                `How large the drawing is relative to the paper`,
                `The accurate size relationship between different parts of a drawing`,
                `The balance between light and dark areas`,
                `The technique of dividing a drawing into equal sections`,
              ],
              correctIndex: 1,
              explanation: `Proportion is about getting the size relationships right — how large one part of a drawing is compared to another. A head that's too large for a body, eyes placed too high on a face, or a building the same size as a person standing next to it all break proportion. Accurate proportion makes drawings feel believable, even when they're not photorealistic.`,
            },
            {
              id: `l03-q4`,
              format: `true-false`,
              question: `In perspective drawing, objects in the distance are drawn smaller — this is how artists create the illusion of depth and three-dimensional space on a flat page.`,
              correctAnswer: true,
              explanation: `True. The optical effect of objects appearing smaller as they recede into the distance is the foundation of perspective drawing. By replicating this effect deliberately — drawing near objects larger and distant objects smaller, and having parallel lines converge toward vanishing points — artists create the convincing illusion of three-dimensional space on a completely flat surface.`,
            },
            {
              id: `l03-q5`,
              format: `fill-blank`,
              question: `In one-point perspective, all the lines that go into the distance meet at a single point called the ___ point.`,
              options: [
                `vanishing`,
                `horizon`,
                `center`,
                `meeting`,
              ],
              correctIndex: 0,
              explanation: `The vanishing point is where all the receding lines converge in a one-point perspective drawing. It sits on the horizon line — the viewer's eye level. Everything in the drawing that goes into the distance — the edges of a road, the tops of buildings, the lines of a ceiling — all aim toward this single point, which is what creates the three-dimensional illusion.`,
            },
            {
              id: `l03-q6`,
              format: `multiple-choice`,
              question: `Why do many beginners draw eyes too high on a face?`,
              options: [
                `Because eyes are genuinely easier to draw near the top of the head`,
                `Because the brain draws a familiar symbol — with eyes near the top — rather than observing where the eyes actually fall, which is approximately halfway down the head`,
                `Because beginning art classes teach this method first as a starting point`,
                `Because faces look more expressive with eyes positioned higher`,
              ],
              correctIndex: 1,
              explanation: `The brain stores a shortcut symbol for "face" — a big oval with two eyes near the top. When you draw from memory or without careful observation, you draw this symbol rather than what you actually see. The solution is to look carefully at the real subject and measure the actual proportions instead of trusting what the brain insists it looks like. This shift from symbol-drawing to observational drawing is one of the biggest breakthroughs in learning to draw.`,
            },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Perspective drawing was developed during the Renaissance in the 15th century and transformed Western art entirely. Before linear perspective, paintings looked flat. After it, artists could create convincing illusions of three-dimensional space — opening up whole new possibilities for telling stories and capturing the world on a flat surface.`,
          familyAdventure: `Go outside and find a long straight road, path, or corridor. Stand at one end and look toward the other end — point out the vanishing point where the edges seem to meet. Then look at a building from the corner and find where the two sets of parallel lines would meet on either side. Take some photos. Then draw what you saw using what you learned about perspective, and compare your drawing to the photo.`,
          creativePrompt: `Draw a city street in one-point perspective. Draw a horizontal line across the middle of your paper — that's the horizon line. Mark a dot in the centre — that's your vanishing point. Draw a road that gets narrower as it approaches the dot. Add buildings on each side with their top and bottom edges pointing toward the vanishing point. Add windows, doors, and people that get smaller as they approach the dot. Step back and look: you've created three-dimensional space on flat paper.`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that depth and space in a drawing are not magic — they're a system, and that system is yours. Lines converging to a vanishing point, eyes placed halfway down a face — these are tools that artists have used for centuries to build whole worlds on flat paper. Pick up a pencil and you hold that same power. Muse is in awe of what your eye and hand can learn to do together.`,
          badge: `perspective-artist`,
          badgeName: `Perspective Artist`,
          xpEarned: 50,
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
    fetch('/explorer-assets/creative-arts/l03-s1-flat-vs-deep.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-s2-one-point-road.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-s3-two-point-corner.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-s4-face-proportion.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-s5-upside-down-trick.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l03-s6-eye-pencil.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L03] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L03] One or more magazine assets missing'));
}
