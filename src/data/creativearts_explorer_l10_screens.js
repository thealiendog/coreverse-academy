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
          headline: `A Camera Catches Light`,
          paragraphs: [
            `A camera catches light. A photographer decides what that light means.`,
            `The difference between a snapshot and a photograph isn't equipment. It's a set of deliberate choices: where to stand, what to include, when to press the shutter.`,
          ],
          image: `/explorer-assets/creative-arts/l10-s1-camera-catches-light.png`,
          imageCaption: `The camera is just the tool. The photograph is the thinking.`,
          vocab: [
            { word: `photograph`,  definition: `A captured image of light. The result of a moment plus a series of deliberate choices.`,
              audioPrompt: `The word photograph comes from Greek — photos meaning light, graphe meaning writing, {name}. A photograph is, literally, writing with light. The camera doesn't make a photograph. The photographer does. The camera is just the tool that captures what they chose.` },
            { word: `snapshot`,    definition: `A quick image taken without deliberate decisions. What most phone photos are. Not the same as a photograph.`,
              audioPrompt: `A snapshot is a record, {name} — quick, casual, no decisions made. Useful for remembering, but rarely powerful. A photograph is what happens when you pause, consider, and make choices on purpose before pressing the shutter. Same camera. Completely different result.` },
            { word: `intentional`, definition: `Doing something on purpose, with consideration. What separates great photography from random capture.`,
              audioPrompt: `Intentional is a small word with enormous consequences in photography, {name}. The intentional photographer asks: where should I stand? What's in the frame? What's the light doing? Then presses the shutter. The accidental photographer just presses. Same camera. Different photograph. Always.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Rule of Thirds`,
          paragraphs: [
            `Divide your viewfinder into a 3×3 grid — two horizontal lines, two vertical lines, nine sections.`,
            `Place your subject NEAR one of the four intersection points, not dead center. Off-center compositions feel dynamic. Centered ones often feel flat.`,
          ],
          image: `/explorer-assets/creative-arts/l10-s2-rule-of-thirds.png`,
          imageCaption: `Off-center subjects breathe. Dead-center subjects often feel stuck. Try it both ways — you'll feel the difference instantly.`,
          vocab: [
            { word: `rule of thirds`, definition: `A compositional guideline using a 3×3 grid. Subjects placed near intersection points feel more dynamic than centered ones.`,
              audioPrompt: `The rule of thirds is a guideline, not a law, {name}. Divide the frame into a grid: two lines across, two lines down. Place your subject at one of the four intersection points. Your image comes alive. Knowing when to break the rule is part of the art — but until then, the rule is one of the most useful tools you have.` },
            { word: `composition`,    definition: `The arrangement of all elements within a frame. The first decision a photographer makes, before everything else.`,
              audioPrompt: `Composition is every decision about what goes where, {name}. What's in the frame and what isn't. Where the subject sits. What's behind it. Before you press a shutter, composition is the first and most powerful choice. Weak composition can undermine a beautiful subject. Strong composition can make the ordinary feel extraordinary.` },
            { word: `framing`,        definition: `Using elements in the scene — a doorway, branches, a window — to frame the subject. Draws the eye inward.`,
              audioPrompt: `Framing is finding a frame within the frame, {name}. A doorway around a figure. Branches arching over a landscape. A window around a face. Natural frames draw the eye inward and create depth. One of the most elegant compositional tools — it doesn't announce itself, but it's always felt.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Light Is Everything`,
          paragraphs: [
            `Photography literally means "writing with light." Light isn't just what makes the image visible — it gives every photo its mood.`,
            `Direction matters: front lighting feels flat, side lighting reveals texture, backlight glows and feels dramatic.`,
          ],
          image: `/explorer-assets/creative-arts/l10-s3-light-direction.png`,
          imageCaption: `Same subject. Three different lights. Three different moods. Photographers see light first and everything else second.`,
          vocab: [
            { word: `light`,     definition: `The raw material of photography. What every image is made of — and what every choice ultimately serves.`,
              audioPrompt: `Photographers see light first, {name} — before subject, before composition. Because no matter how beautiful the subject, bad light makes a bad photo. Great photographers train themselves to notice light the way poets notice words: as the actual material the art is made of.` },
            { word: `direction`, definition: `Where light comes from relative to the subject — front, side, or back. Dramatically changes how a photo looks and feels.`,
              audioPrompt: `Light direction is one of the most powerful decisions in photography, {name}. Front light is flat and even — visible, but two-dimensional. Side light creates shadows that reveal texture and form. Backlight creates a glow around the edges — dramatic and mysterious. Same subject, completely different image, just by changing where the light comes from.` },
            { word: `exposure`,  definition: `How much light the camera lets in. Too little = dark photo. Too much = washed-out photo.`,
              audioPrompt: `Exposure is how much light a camera lets in, {name}. Too little and the photo is dark — underexposed. Too much and it's washed out — overexposed. Learning to control exposure is learning to see light as a photographer does — not as background, but as the actual subject of every image.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Golden Hour`,
          paragraphs: [
            `The hour after sunrise and the hour before sunset is called GOLDEN HOUR.`,
            `The light is warm, soft, and directional. Shadows go long. Colors glow amber. Even ordinary scenes look like paintings. Photographers wait for it on purpose.`,
          ],
          image: `/explorer-assets/creative-arts/l10-s4-golden-hour.png`,
          imageCaption: `Same scene at noon and at golden hour — completely different worlds. The light is the photograph.`,
          vocab: [
            { word: `golden hour`,       definition: `The hour after sunrise and before sunset. Warm, soft, directional light that photographers prize.`,
              audioPrompt: `Golden hour is when the light turns, {name} — the hour after the sun rises or before it sets. Everything glows warm amber. Shadows go long and soft. Photographers call it magic hour. Shoot the same scene at noon and at golden hour: the difference isn't just brightness — it's a completely different emotional world.` },
            { word: `color temperature`, definition: `How warm or cool light appears. Shifts throughout the day — blue in morning shade, amber at golden hour.`,
              audioPrompt: `Light has a temperature, {name} — not heat, but color. Morning shade is cool blue. Midday sun is neutral white. Golden hour is warm amber. The same scene at different times of day can look completely different just because of color temperature. Photographers learn to notice it the way painters notice color in pigments.` },
            { word: `soft light`,        definition: `Gentle, diffused light with no harsh shadows. The opposite of harsh midday sun.`,
              audioPrompt: `Soft light is gentle, {name} — diffused through clouds, atmosphere, or shade, creating no hard shadows. It's flattering, kind to faces, and easy on the eye. Hard midday sun creates harsh shadows and washed-out colors. Cloudy days, shaded spots, and golden hour all offer soft light — and most photographers seek them out.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Where You Stand`,
          paragraphs: [
            `Where you stand changes the story.`,
            `Ground level looking up = subject feels powerful. Above looking down = subject feels small. Most people shoot from standing height by default. Move, and everything changes.`,
          ],
          image: `/explorer-assets/creative-arts/l10-s5-perspective-angles.png`,
          imageCaption: `Standing height is the default. Crouch, climb, lie down — every new angle is a new photograph.`,
          vocab: [
            { word: `angle`,         definition: `Where the camera sits vertically relative to the subject. Changes the emotional relationship between viewer and subject.`,
              audioPrompt: `Angle is a storytelling decision, {name}. Get to ground level and shoot upward: the subject looms, feels powerful. Shoot from above looking down: the subject feels small, vulnerable. Eye level feels equal and direct. Most people photograph from standing height because that's where they happen to be. Learning to move changes everything.` },
            { word: `point of view`, definition: `The physical position from which a photo is taken. Photography's most underused creative tool.`,
              audioPrompt: `Point of view in photography is literal, {name} — it's where you stand. The same alley looks threatening or beautiful depending on whether you're outside looking in or inside looking out. The same child looks different photographed from adult height versus their own eye level. Every choice about where to put the camera is a choice about how to make the viewer feel.` },
            { word: `foreground`,    definition: `What's closest to the camera. Used intentionally, it adds depth and layers to a photo.`,
              audioPrompt: `The foreground is what's closest to your camera, {name} — and using it intentionally creates depth. A blurred flower in front of a sharp subject creates layers that feel three-dimensional. Grass at the bottom of a landscape grounds the viewer. Without foreground, images can feel flat. With it, the viewer feels inside the world of the photograph.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Is This Photo About?`,
          paragraphs: [
            `Before pressing the shutter, intentional photographers ask one question: what is this photograph about?`,
            `That question changes what you look for, what you include, when you shoot. Every great photo has an answer to it.`,
          ],
          image: `/explorer-assets/creative-arts/l10-s6-what-is-this-about.png`,
          imageCaption: `The most powerful habit in photography costs nothing: pause for one breath before the shutter, and ask what the picture is really about.`,
          vocab: [
            { word: `decisive moment`, definition: `The split second when everything in the frame aligns to tell a story. Lasts a fraction of a second.`,
              audioPrompt: `The decisive moment is the instant, {name}, when everything in the frame aligns: the expression, the light, the action. A fraction of a second earlier or later and it's gone. Photographers train their eyes to see it coming and their fingers to respond. One of the most exciting things in photography.` },
            { word: `simplicity`,      definition: `Eliminating everything that doesn't contribute to the story. The discipline that separates strong photos from cluttered ones.`,
              audioPrompt: `The most powerful photographs are often the simplest, {name}. One subject. Clean background. Nothing competing for the eye. Simplicity focuses attention on what matters. The impulse is always to include more. But every element that doesn't serve the story dilutes it.` },
            { word: `subject`,         definition: `What the photograph is actually about. The thing every other choice should serve.`,
              audioPrompt: `The subject is what the photograph is about, {name} — and "about" is more than "of." A photo OF a child laughing might be ABOUT joy, or about a particular relationship, or about a moment that's already passing. The clearer you are about what your photo is about, the more every other choice falls into place.` },
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
    fetch('/explorer-assets/creative-arts/l10-s1-camera-catches-light.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-s2-rule-of-thirds.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-s3-light-direction.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-s4-golden-hour.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-s5-perspective-angles.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l10-s6-what-is-this-about.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L10] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L10] One or more magazine assets missing'));
}
