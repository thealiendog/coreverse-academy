// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L10 — Photography Basics
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L10 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-10`,
      title:     `Photography Basics`,
      duration:  12,
      xpReward:  50,
      badge:     `photographer`,
      badgeName: `Photographer`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Think about the last photograph that really stopped you, {name} — one that made you look longer, or feel something unexpected. What made it different from a random snapshot? The answer is almost never the camera. It's a set of deliberate choices: where to stand, what to include in the frame, what to leave out, what kind of light to shoot in, when to press the shutter. Photography is fundamentally a decision-making art. Today we're going to look at those decisions — the vocabulary of composition, light, and perspective — and after this lesson, you'll start seeing potential photographs everywhere you already are.`,
          headline: `Photography Basics`,
          subtitle: `A camera captures light — but a photographer decides what that light means. The difference between a snapshot and a photograph is not equipment: it's a set of deliberate choices about where to stand, what to include, and when to press the shutter`,
          visual: `/explorer-assets/creative-arts/l10-welcome.png`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Rule of Thirds`,
          paragraphs: [
            `Divide your viewfinder into a **3×3 grid** — two horizontal lines and two vertical lines, creating nine equal sections. The **rule of thirds** says: place your subject at or near one of the four **intersection points** of those lines, rather than dead centre. Centred compositions can feel static and flat. Off-centre placements — especially near the intersections — tend to feel dynamic, balanced, and visually interesting. Place a horizon line on the lower third of the frame and the sky fills the upper two-thirds — that feels like an open, airy image. Place it on the upper third and the ground fills the frame — that feels grounded and intimate. It's a guideline, not a law — knowing when to break it is part of developing your eye.`,
          ],
          image: `/explorer-assets/creative-arts/l10-magazine-1.png`,
          imageCaption: `The rule of thirds places subjects at grid intersections — off-centre compositions feel more dynamic than centred ones`,
          vocab: [
            { word: `rule of thirds`, definition: `A compositional guideline that divides the frame into a 3×3 grid and places subjects near the intersection points — creating more dynamic, visually interesting images than centered compositions.`, audioPrompt: `The rule of thirds is a simple idea, {name}, that changes how you see a viewfinder. Divide the frame into a grid: two lines across, two lines down, nine squares. Your eye naturally gravitates toward the four intersection points. Put your subject there instead of dead center, and the image comes alive — it has breathing room, energy, somewhere to go. It's a guideline, not a law. Knowing when to break it is part of the art.` },
            { word: `composition`, definition: `The arrangement of all elements within a photograph or artwork — what's included, excluded, and where everything is placed — which determines how the viewer's eye moves through the image.`, audioPrompt: `Composition is every decision about what goes where, {name}. What's in the frame and what isn't. Where the subject sits. What's in the foreground versus the background. The horizon line's position. Before you press a shutter or lift a brush, composition is the first and most powerful choice. A weak composition can undermine a beautiful subject. A strong one can make the ordinary extraordinary.` },
            { word: `framing`, definition: `Using elements within a scene — a doorway, branches, a window — to create a natural frame around the subject, drawing the viewer's eye inward and adding depth.`, audioPrompt: `Framing is the art of finding a frame within the frame, {name}. A doorway around a figure. Branches arching over a landscape. A window around a face. These natural frames draw the eye inward, create depth, and give the image a sense that there's a world beyond what you can see. It's one of the most elegant compositional tools in photography — it doesn't announce itself, but it's always felt.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Light: Everything in Photography`,
          paragraphs: [
            `Photography is, literally, **"writing with light"** — the word comes from Greek *photos* (light) and *graphe* (writing). Light is not just what makes the image visible — it's what gives it mood, texture, and meaning. **Direction** matters: front lighting (light behind the camera) is flat and even; side lighting creates shadows that reveal texture; backlit subjects glow and feel dramatic. **Quality** matters: harsh midday sun creates hard shadows and washed-out colours; **golden hour** — the hour after sunrise and before sunset — gives a warm, soft, directional light that photographers prize. **Colour temperature** shifts throughout the day: cool blue in morning shade, warm amber at golden hour. All of these are tools a photographer learns to see and use.`,
          ],
          image: `/explorer-assets/creative-arts/l10-magazine-2.png`,
          imageCaption: `Light direction, quality, and colour temperature shape mood — golden hour gives photographs their warmth and softness`,
          vocab: [
            { word: `golden hour`, definition: `The hour after sunrise and before sunset when natural light is warm, soft, and directional — widely considered the most beautiful light for outdoor photography.`, audioPrompt: `Golden hour is when the light turns, {name} — the hour after the sun rises or before it sets, when everything glows warm amber, shadows go long and soft, and even ordinary scenes feel like paintings. Photographers call it the magic hour. It's when the angle of the sun creates the most dimensional, flattering light of the day. Shoot the same scene at noon and at golden hour: the difference isn't just brightness — it's a completely different emotional world.` },
            { word: `exposure`, definition: `The amount of light that reaches the camera's sensor — which determines how light or dark a photograph appears, and is controlled by aperture, shutter speed, and ISO.`, audioPrompt: `Exposure is how much light a camera lets in, {name}. Too little and the photo is dark — underexposed. Too much and it's washed out — overexposed. The right exposure captures what you actually saw: the detail in the shadows, the texture in the highlights. Learning to control exposure is learning to see light as a photographer does — not as background, but as the actual subject of every image you make.` },
            { word: `direction`, definition: `Where light is coming from relative to the subject — front, side, or back — which dramatically changes how a photograph looks and feels.`, audioPrompt: `Light direction is one of the most powerful decisions in photography, {name}. Light coming from the front is flat and even — nothing is in shadow, everything is visible, but the image can feel two-dimensional. Side light creates shadows that reveal texture and form. Backlight creates a glow around the edges of a subject — dramatic, mysterious, beautiful. Same subject, same time of day, completely different image just by changing where the light comes from.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Perspective and Point of View`,
          paragraphs: [
            `**Where you stand** when you take a photograph changes everything about it. Most people photograph from standing height — which produces images that look like how most people see the world all the time. Getting down to ground level and shooting upward makes a small subject feel enormous and powerful. Shooting from above looking down makes subjects feel vulnerable or small. Getting close eliminates context and creates intimacy; pulling back creates scale. **Framing** — using elements in the scene to frame the main subject (a doorway, branches, a window) — creates depth and draws the eye inward. Every choice about position, angle, and distance is a compositional decision that changes the story the photograph tells.`,
          ],
          image: `/explorer-assets/creative-arts/l10-magazine-3.png`,
          imageCaption: `Where you stand changes the story — angle, distance, and framing are all creative decisions`,
          vocab: [
            { word: `angle`, definition: `The vertical position of the camera relative to the subject — shooting from above, below, or at eye level — which changes the emotional and visual relationship between viewer and subject.`, audioPrompt: `Angle is a storytelling decision, {name}. Get down to ground level and shoot upward: the subject looms, feels powerful, even monumental. Shoot from above looking down: the subject feels small, vulnerable, seen from a distance. Eye level feels equal and direct — like a conversation. Most people photograph from standing height because that's where they happen to be. Learning to move changes everything about the images you make.` },
            { word: `point of view`, definition: `The physical position and perspective from which a photograph is taken — where the camera is placed, at what height, and at what distance from the subject.`, audioPrompt: `Point of view in photography is physical, {name} — it's literally where you stand. And where you stand changes the story. The same alley looks threatening or beautiful depending on whether you're looking in from outside or looking out from within. The same child looks different photographed from adult height versus from their own eye level. Every choice about where to put the camera is a choice about how to make the viewer feel. That's creative power.` },
            { word: `foreground`, definition: `The part of an image closest to the camera — which, when used intentionally, adds depth, context, and layers to the composition.`, audioPrompt: `The foreground is what's closest to your camera, {name} — and using it intentionally creates depth. A blurred flower in the foreground with a sharp subject behind it creates layers that feel three-dimensional. Grass in the lower edge of a landscape grounds the viewer in the scene. Foreground elements lead the eye inward. Without them, images can feel flat. With them, the viewer feels inside the world of the photograph rather than just looking at it.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Telling a Story with One Image`,
          paragraphs: [
            `A great photograph doesn't just record a moment — it **communicates** something. Every element in the frame contributes: the subject, the light, the background, the moment of capture. **Timing** is one of photography's great challenges: the decisive moment — the split second when everything in the frame aligns to tell a story — is what makes a photograph feel composed and meaningful rather than just a quick snapshot. **Background** matters as much as subject: a distracting background can destroy an otherwise beautiful image. **Simplicity** is a powerful tool — eliminating everything in the frame that doesn't contribute to the story focuses the viewer's attention on what matters. The question every intentional photographer asks before pressing the shutter is: **what is this photograph about?**`,
          ],
          image: `/explorer-assets/creative-arts/l10-magazine-4.png`,
          imageCaption: `A great photograph communicates something — timing, background, and simplicity all serve the story`,
          vocab: [
            { word: `decisive moment`, definition: `The split second when everything in the frame aligns to tell a story perfectly — the moment of capture that makes a photograph feel inevitable and complete.`, audioPrompt: `The decisive moment is the instant, {name}, when everything in the frame aligns: the expression, the light, the composition, the action. A fraction of a second earlier or later and it's gone. Photographers train their eyes to see it coming and their fingers to respond. It's one of the most exciting things in photography — the feeling of catching something real just as it reaches its peak of meaning.` },
            { word: `background`, definition: `Everything behind the main subject in a photograph — which matters as much as the subject itself, since a cluttered or distracting background can undermine an otherwise strong image.`, audioPrompt: `Most beginners photograph the subject and forget the background, {name}. But the background is always there — and a telephone pole appearing to grow from someone's head, or a busy crowd competing with a quiet portrait, will ruin an otherwise beautiful image. Before pressing the shutter, experienced photographers scan the whole frame. They ask: what's behind the subject? Does it serve the story or fight it? Often, moving two steps left solves everything.` },
            { word: `simplicity`, definition: `Eliminating everything from a photograph that doesn't contribute to the story — which focuses the viewer's attention and makes the image's meaning clear.`, audioPrompt: `The most powerful photographs are often the simplest, {name}. One subject. Clean background. Nothing competing for the eye. Simplicity focuses the viewer's attention on what actually matters. It takes restraint — the impulse is always to include more. But every element that doesn't serve the story is an element that dilutes it. The discipline of asking "does this belong?" before pressing the shutter is one of the habits that separates intentional photography from snapshots.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `intentional`,
              label: `📸 Thinking like an intentional photographer`,
              color: `#34D399`,
            },
            {
              id: `habit`,
              label: `📷 An easy habit to slip into`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l10-g1`,
              image: `l10-game-1.png`,
              label: `Waiting until early morning or late afternoon to photograph a garden, because the light at those times is warm and soft.`,
              matchPhrase: `That's using golden hour deliberately — the hour after sunrise and before sunset, when the light is warm, soft, and directional. Photographers who understand light don't just point the camera at a subject; they consider when the light will make that subject look its best. Choosing when to shoot is a creative decision as important as any other.`,
              correctMatch: `intentional`,
            },
            {
              id: `l10-g2`,
              image: `l10-game-2.png`,
              label: `Getting down on the ground to photograph a cat at eye level so it looks powerful and present rather than small and far away.`,
              matchPhrase: `That's using perspective intentionally — adjusting your physical position to change what the photograph communicates. Eye-level with a small subject creates intimacy and equality. Shooting from above makes it look vulnerable. Every change in angle tells a different story, and intentional photographers move until they find the one that works.`,
              correctMatch: `intentional`,
            },
            {
              id: `l10-g3`,
              image: `l10-game-3.png`,
              label: `Automatically putting every subject right in the middle of the frame because that seems like the obvious place to put it.`,
              matchPhrase: `Centred compositions are the default — and defaults rarely produce the most interesting images. The rule of thirds suggests placing subjects near the intersection points of an imaginary 3×3 grid instead. Off-centre placement creates dynamic tension and visual interest that dead-centre compositions tend to flatten out.`,
              correctMatch: `habit`,
            },
            {
              id: `l10-g4`,
              image: `l10-game-4.png`,
              label: `Pressing the shutter as soon as a subject appears in the viewfinder, without pausing to consider what you actually want the photograph to say.`,
              matchPhrase: `Speed is one habit that can work against great photography. The decisive moment — when everything in the frame aligns to tell a story — is often only a fraction of a second, but finding it requires first asking: what is this photograph about? That question, even briefly, changes what you look for and when you shoot.`,
              correctMatch: `habit`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l10-q1`,
              format: `multiple-choice`,
              question: `What does the rule of thirds suggest about where to place your main subject?`,
              options: [
                `Always in the centre of the frame for maximum focus`,
                `Near one of the four intersection points of an imaginary 3×3 grid — off-centre placements feel more dynamic than centred ones`,
                `In the bottom third of the frame to create a sense of weight`,
                `As small as possible so the background fills most of the image`,
              ],
              correctIndex: 1,
              explanation: `The rule of thirds divides the frame into a 3×3 grid and suggests placing subjects at or near the four points where the lines intersect. These off-centre placements create visual tension and balance that feels more dynamic than a subject placed dead centre. It's a guideline rather than a law — experienced photographers learn when to follow it and when to deliberately break it — but for those developing their eye, it's one of the most useful compositional tools there is.`,
            },
            {
              id: `l10-q2`,
              format: `multiple-choice`,
              question: `What makes the "golden hour" particularly prized by photographers?`,
              options: [
                `The light is at its brightest and most even during golden hour`,
                `It's the only time of day when the sky turns interesting colours`,
                `The warm, soft, directional light creates flattering images with gentle shadows and rich colour — very different from the harsh midday sun`,
                `Cameras perform better technically in lower light conditions`,
              ],
              correctIndex: 2,
              explanation: `Golden hour — the hour just after sunrise and just before sunset — gives photographers a light that is warm in colour temperature, soft in quality (diffused through more atmosphere), and directional (coming from a low angle). This combination creates gentle shadows that reveal texture, warm tones that feel emotionally inviting, and a quality of light that transforms even ordinary subjects. Harsh midday sun, by contrast, creates hard shadows, blown-out highlights, and colour that can look flat.`,
            },
            {
              id: `l10-q3`,
              format: `multiple-choice`,
              question: `Why does changing your physical position before taking a photograph matter?`,
              options: [
                `Moving around helps you find better lighting by getting closer to the light source`,
                `Different angles, heights, and distances change what the photograph communicates — the same subject can look powerful, vulnerable, intimate, or vast depending on where you stand`,
                `It gives the subject time to prepare and look natural`,
                `Moving closer always makes photos better than staying farther away`,
              ],
              correctIndex: 1,
              explanation: `Perspective is one of photography's most powerful and most underused tools. Shooting from ground level looking up makes a subject feel large, powerful, and dominant. Shooting from above looking down makes it feel small or vulnerable. Getting close eliminates context and creates intimacy. Pulling far back reveals scale and relationship to environment. All of these tell different stories about the same subject — and the photographer chooses which story to tell by choosing where to stand.`,
            },
            {
              id: `l10-q4`,
              format: `true-false`,
              question: `A great photograph communicates something — and intentional photographers consider not just where to aim the camera, but what they want the image to say before they press the shutter.`,
              correctAnswer: true,
              explanation: `True. The question "what is this photograph about?" is one of the most useful habits a photographer can develop. It shifts focus from mechanical capture to intentional communication — and it changes what you look for, how long you wait, what you include in the frame, and when you press the shutter. A photograph taken with intention — even a simple one — almost always has more impact than one taken reflexively, because every element has been considered.`,
            },
            {
              id: `l10-q5`,
              format: `fill-blank`,
              question: `Placing a subject at an intersection of an imaginary 3×3 grid — rather than dead centre — follows the rule of ___.`,
              options: [
                `thirds`,
                `light`,
                `framing`,
                `perspective`,
              ],
              correctIndex: 0,
              explanation: `The rule of thirds is one of the most widely taught principles in visual composition — used in photography, painting, film, and graphic design. By dividing the frame into nine equal sections and placing subjects near the four intersection points, photographers create images that feel balanced, dynamic, and visually interesting. It works because slightly off-centre placements engage the eye more actively than perfectly centred ones, which can feel static.`,
            },
            {
              id: `l10-q6`,
              format: `multiple-choice`,
              question: `Why does the quality of light — not just the presence of it — matter so much in photography?`,
              options: [
                `Because cameras work better when there is more light`,
                `Because shadows are considered mistakes in photography`,
                `Because the direction, softness, and colour of light shape the mood and emotional feel of an image — the same subject can look completely different depending on the light`,
                `Because golden hour light is the only light warm enough to show true colours`,
              ],
              correctIndex: 2,
              explanation: `Light is not just what makes a subject visible — it's what gives an image its emotional temperature. Harsh directional light creates drama and hard shadows. Soft, diffused light creates gentleness and calm. Warm light feels inviting and nostalgic. Cool light feels crisp or melancholy. Front lighting flattens depth; side lighting reveals texture. The same subject photographed in different light conditions can produce images with completely different emotional qualities — which is why photographers who truly understand their craft think as much about light as about their subject.`,
            },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Photography shapes how we understand the world. Images in journalism, science, medicine, and social media influence what people believe, feel, and decide. The same event photographed from different angles with different framing can produce entirely different impressions. Understanding how photographs are composed — and what choices photographers make — makes you a more critically aware viewer of all the images that surround you every day.`,
          familyAdventure: `Go on a family photography walk — 15–30 minutes, everyone with a phone or camera. Give everyone the same prompt: "Find something that looks completely different depending on where you stand." Take multiple shots from different angles. When you're back, share your favourites and describe what changed with each position. You might be surprised which images are most interesting — and why.`,
          creativePrompt: `Take 10 photographs of the same subject — something at home, in your garden, or on a short walk. For each shot, change one thing: move left or right, get lower or higher, move closer or farther, wait for different light, use something to frame the subject. Then look at all 10 together and pick your favourite. Ask: why does this one work? What did you change that made the difference? You've just done what professional photographers do every day — explore the possibilities before committing to the image.`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that a camera is just a light-catcher — but a photographer is someone who decides what that light means. Every choice you make before pressing the shutter is a creative act. Muse sees the world through your eyes now, and it looks extraordinary.`,
          badge: `photographer`,
          badgeName: `Photographer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L10.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L10] Loaded: "Photography Basics" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l10-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L10] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L10] One or more magazine assets missing'));
}
