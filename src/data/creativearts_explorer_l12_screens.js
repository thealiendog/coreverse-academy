// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L12 — Animation: Making Things Move
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L12 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-12`,
      title:     `Animation: Making Things Move`,
      duration:  12,
      xpReward:  50,
      badge:     `animator`,
      badgeName: `Animator`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Here's a secret about every cartoon you've ever watched, {name}: what looks like fluid, continuous motion is actually thousands of individual still images shown so quickly that your brain fills in the gaps and perceives movement. That gap-filling is done entirely by your own mind. Isn't that fascinating? Animation is built on an optical trick — but everything else is craft: drawing, storytelling, timing, music, character design, color. It's one of the most collaborative art forms in the world, bringing together dozens of different skills. Today we're going to look at how animation actually works — and I promise you'll never watch a cartoon quite the same way again.`,
          headline: `Animation: Making Things Move`,
          subtitle: `When you watch a cartoon, you're seeing thousands of individual images flashed so fast your brain perceives smooth motion. Animation combines drawing, storytelling, music, and acting into one seamless art form — and once you understand how it works, watching it will never be quite the same`,
          visual: `/explorer-assets/creative-arts/l12-welcome.png`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How Animation Works`,
          paragraphs: [
            `Animation works because of a phenomenon called **persistence of vision** — your eye retains an image for a fraction of a second after it disappears. When images are shown at **12 or more frames per second**, the eye fills in the gaps and perceives smooth motion. Film runs at **24 frames per second**. Traditional animation required artists to draw 24 individual drawings for every second of movement — a 90-minute animated film required around **129,600 individual drawings**. Modern 3D animation uses computers to generate frames, but the underlying principles of movement — how weight feels, how energy flows, how characters communicate emotion through their bodies — are identical to what hand-drawn animators solved decades ago.`,
          ],
          image: `/explorer-assets/creative-arts/l12-magazine-1.png`,
          imageCaption: `Persistence of vision fools the brain into seeing motion — 24 still images per second become a moving world`,
          vocab: [
            { word: `persistence of vision`, definition: `The optical phenomenon where your eye retains an image for a fraction of a second after it disappears — which allows a rapid sequence of still images to appear as smooth, continuous motion.`, audioPrompt: `Your eye holds an image for a tiny fraction of a second after it disappears, {name}. That's persistence of vision — and it's the entire reason animation works. Show still images fast enough and the eye fills in the gaps, creating the illusion of motion. Everything you've ever seen move on a screen — every film, every cartoon, every game — exists because of this one quirk of human perception. All of cinema is a beautiful trick we play on ourselves.` },
            { word: `frame`, definition: `A single still image in animation or film — the individual drawing or photograph that, when many are shown in sequence, creates the illusion of movement.`, audioPrompt: `A frame is one still image, {name} — and animation is just frames shown fast enough that the eye creates movement between them. Traditional hand-drawn animation required a separate drawing for every frame. A 90-minute film is over a hundred thousand individual drawings. Each one differing slightly from the last. Each one contributing a fraction of a second to a moving world. It's staggering when you think about it: every second of motion is built from still moments.` },
            { word: `frame rate`, definition: `The number of still images shown per second in film or animation — typically 24 frames per second for film — which determines how smooth and realistic movement appears.`, audioPrompt: `Frame rate is how many still images appear per second, {name}. Film runs at 24. Less than about 12 and the eye starts to see the flicker — the motion stops feeling smooth. More than 24 creates a hyper-real look that some find jarring. Animators choose frame rate carefully: more frames means smoother movement but far more work. Each frame is a drawing, a photograph, a rendered image. Frame rate is the speed of the illusion.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The 12 Principles of Animation`,
          paragraphs: [
            `A landmark book on animation published the **12 Principles of Animation** — still the foundation of animator training worldwide today. Key principles: **Squash and Stretch** — living things deform when moving and return to shape, giving animation a sense of weight and flexibility (a bouncing ball flattens when it hits the ground and stretches as it rises). **Anticipation** — characters prepare for an action before doing it, raising expectation (a character winds up before throwing). **Exaggeration** — emotions and actions are pushed beyond realism for clarity and impact. **Timing** — how many frames an action takes determines whether it feels fast and urgent or slow and heavy. These principles make animation feel **alive** rather than mechanical — they're the difference between movement that exists and movement that breathes.`,
          ],
          image: `/explorer-assets/creative-arts/l12-magazine-2.png`,
          imageCaption: `Squash and stretch, anticipation, exaggeration, timing — the principles that make animation feel alive`,
          vocab: [
            { word: `squash and stretch`, definition: `An animation principle where objects deform when moving — flattening under impact and elongating through motion — giving the illusion of weight, flexibility, and life.`, audioPrompt: `When a cartoon ball hits the ground, {name}, it squashes flat for a frame — then as it bounces up, it stretches tall. That's squash and stretch, and it's what gives animated objects the feeling of having weight and flexibility. Without it, movement feels mechanical. With it, even a simple shape feels alive. Real objects do this too, slightly — animation just exaggerates it until the eye registers it as truth.` },
            { word: `anticipation`, definition: `An animation principle where a character prepares before a big action — winding up before throwing, crouching before jumping — which makes the action feel more powerful and expected by the audience.`, audioPrompt: `Anticipation is the windup before the action, {name}. A character leans back before they leap. A hand draws back before it swings. Without this preparation, actions look sudden and unconvincing. With it, the eye is primed — it knows something is coming, and when it arrives, it lands harder. It's how animation communicates physical intention: not just the action, but the body's preparation to do it.` },
            { word: `exaggeration`, definition: `An animation principle of pushing movements, expressions, and reactions beyond realistic limits — to make emotion and action clearer and more impactful.`, audioPrompt: `Animation can go where live action cannot, {name} — eyes can pop out, bodies can stretch impossibly, surprise can register across an entire face in ways real faces never quite manage. That's exaggeration: pushing beyond realism until the feeling becomes unmistakable. The goal isn't to be unrealistic for its own sake. It's to make the emotion so clear that the audience feels it immediately. Exaggeration is how animated characters speak without ambiguity.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Types of Animation`,
          paragraphs: [
            `Animation takes many forms, each with its own aesthetic and expressive possibilities. **Traditional 2D animation** is hand-drawn frame by frame — used in the classic Studio Ghibli films *My Neighbor Totoro* and *Spirited Away*, where individual frames have the warmth and texture of a painting. **Stop motion** photographs physical objects — clay, puppets, everyday items — in slightly different positions: *Wallace and Gromit*, *Coraline*, and *Kubo and the Two Strings* are all stop motion. **3D computer animation** builds three-dimensional models in software and renders them frame by frame — the technique behind most modern animated films. **Motion graphics** animate graphic design elements: logos, text, shapes — used in commercials, explainer videos, and title sequences. Each style makes different things possible and communicates differently to the eye.`,
          ],
          image: `/explorer-assets/creative-arts/l12-magazine-3.png`,
          imageCaption: `2D, stop motion, 3D, motion graphics — each animation style has its own visual language and possibilities`,
          vocab: [
            { word: `stop motion`, definition: `An animation technique that photographs real physical objects in slightly different positions for each frame — creating movement through the accumulation of still photographs.`, audioPrompt: `Stop motion is the art of making still things move, {name}. A clay figure is posed, photographed, adjusted by a fraction, photographed again — thousands of times, frame by frame, until 24 of those photographs each second create the illusion of life. Wallace and Gromit were made this way. So was Coraline. It's extraordinarily time-consuming and extraordinarily satisfying — the physical world, made to move as if alive.` },
            { word: `2D animation`, definition: `Animation where characters and environments are drawn flat, as images on a plane — the traditional style of hand-drawn animation, from classic cartoons to modern Studio Ghibli films.`, audioPrompt: `2D animation is drawing brought to life, {name} — each frame a flat image, hand-drawn or digitally created, placed in sequence to create movement. Studio Ghibli's films — My Neighbor Totoro, Spirited Away — are 2D animation, and there is a warmth and texture to them that comes from each frame being, essentially, a painting. The characters move through painted worlds. It's one of the most labor-intensive art forms ever created.` },
            { word: `rendering`, definition: `The process by which a computer calculates and generates the final appearance of a 3D animated image — applying lighting, texture, and shadow to produce each finished frame.`, audioPrompt: `In 3D animation, {name}, the computer has to figure out what each frame actually looks like — calculating how light bounces off surfaces, how shadows fall, how materials reflect or absorb. That process is called rendering. A single frame from a complex animated film can take hours to render. A feature film requires millions of frames. The rendering of a modern animated film is a feat of computing that would have been impossible even twenty years ago.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Animation as Storytelling`,
          paragraphs: [
            `The greatest animated films are not great because of their animation — they're great because of their **stories and characters**. Story is everything. A technically perfect animation with a weak story is forgettable. A simple animation with a profound story is immortal. The most important questions in animation are not *"how do we make this character move?"* but *"what does this character want? What do they fear? How do they change?"* Animation is storytelling with a uniquely powerful visual language — characters can stretch, transform, fly, and express emotion through their entire body in ways live action cannot. But the visual language only matters when it's in service of a story worth telling. **Animation is storytelling first** — the technique exists to serve the truth.`,
          ],
          image: `/explorer-assets/creative-arts/l12-magazine-4.png`,
          imageCaption: `Animation's visual magic only matters when it serves a story worth telling — character and story come first`,
          vocab: [
            { word: `visual storytelling`, definition: `Communicating a narrative through images, movement, and action rather than words — the specific power of animation, which can show what live action cannot.`, audioPrompt: `Animation can do things live action cannot, {name} — characters stretch, transform, reveal inner emotion through their whole body, inhabit worlds that have never existed. That visual freedom is extraordinary. But it only matters when it's telling something true. The greatest animated films use their visual language to go somewhere emotionally that ordinary drama can't reach. The technique serves the story. The story comes first. Always.` },
            { word: `character design`, definition: `The visual creation of an animated character — their shape, color, proportions, and movement style — which communicates personality before the character says a word.`, audioPrompt: `An animated character's design tells you who they are before they open their mouth, {name}. Rounded shapes feel friendly and safe. Sharp angles feel dangerous or clever. Color communicates mood — think of Pixar's use of golden warm tones for joy versus cool blues for sadness. Every visual decision in character design is a storytelling decision. When design and story align perfectly, the character feels inevitable — like they couldn't look any other way.` },
            { word: `timing`, definition: `In animation, the number of frames an action takes — which determines whether it feels fast and urgent or slow and heavy, and communicates the emotional weight of every moment.`, audioPrompt: `Timing in animation is the difference between life and mechanism, {name}. The same action — a door closing — takes two frames and it's a slam. Takes twelve frames and it's a slow, ominous drift. An emotion registered in one frame is a shock. In eight frames it's a dawning realization. Animators control timing the way musicians control tempo: it determines the emotional experience of every moment. Timing is feel — and it's one of the hardest things to learn.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `works`,
              label: `🎬 This is how animation actually works`,
              color: `#34D399`,
            },
            {
              id: `misunderstands`,
              label: `🤔 A common misunderstanding about animation`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l12-g1`,
              image: `l12-game-1.png`,
              label: `Drawing a bouncing ball in a slightly different position on each page of a flipbook so that flipping through it quickly makes the ball look like it's really moving.`,
              matchPhrase: `That's persistence of vision in action — the fundamental mechanism behind all animation. Each page is a still image, but shown rapidly in sequence, the eye retains each frame briefly and fills in the motion between them. The flipbook is the simplest possible demonstration of a principle that underlies every animated film ever made.`,
              correctMatch: `works`,
            },
            {
              id: `l12-g2`,
              image: `l12-game-2.png`,
              label: `Making a cartoon character's whole body squash flat when it hits the ground and then spring back to its normal shape — so the bounce feels like it has real weight.`,
              matchPhrase: `That's squash and stretch — one of the foundational principles of animation. Living things deform slightly under force and return to their shape, and animating this effect gives characters a physical presence that feels believable. Without it, characters look like rigid shapes moving through space. With it, they feel like they have mass, energy, and life.`,
              correctMatch: `works`,
            },
            {
              id: `l12-g3`,
              image: `l12-game-3.png`,
              label: `Thinking that the most impressive-looking animation style automatically makes for the most powerful film.`,
              matchPhrase: `Story and character are everything in animation — the technique only matters in service of a story worth telling. A simple animation with a profound story will move audiences long after a technically dazzling film with a thin story is forgotten. The most important questions an animator asks are about character and want, not about rendering quality.`,
              correctMatch: `misunderstands`,
            },
            {
              id: `l12-g4`,
              image: `l12-game-4.png`,
              label: `Assuming stop-motion animation made with clay figures and physical objects is somehow less valid than computer-generated 3D animation.`,
              matchPhrase: `Stop motion, 2D hand-drawn, and 3D computer animation are different tools with different aesthetic qualities — none is more legitimate than another. Each makes different things possible. Some of the most beloved animated films ever made are stop motion. The value of an animation style isn't its technology — it's whether it serves the story and moves the audience.`,
              correctMatch: `misunderstands`,
            },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l12-q1`,
              format: `multiple-choice`,
              question: `What makes the brain perceive animation as smooth motion?`,
              options: [
                `The brain is tricked by the speed of the images flashing past`,
                `Persistence of vision — the eye retains each image briefly, filling in the gaps when frames are shown at 12 or more per second`,
                `Special lighting makes the images appear to blur together into movement`,
                `Animation is actually a live performance recorded at very high speed`,
              ],
              correctIndex: 1,
              explanation: `Persistence of vision is the optical phenomenon at the heart of all animation and film. Your eye holds an image for a fraction of a second after it disappears — and when the next slightly different image arrives before that retention fades, your brain perceives continuous motion rather than a series of stills. At 12 frames per second, the effect begins. At 24 frames per second — the standard for film — the motion appears completely fluid. Every animated film you've ever watched, however sophisticated, is built on this same basic quirk of human vision.`,
            },
            {
              id: `l12-q2`,
              format: `multiple-choice`,
              question: `What is the principle of "squash and stretch" in animation?`,
              options: [
                `Making characters very small or very large for comic effect`,
                `Living things deform when moving and return to their shape — giving animation a sense of weight and physical presence`,
                `Stretching out scenes that need more time to develop emotionally`,
                `Squashing background elements to make the main character appear larger`,
              ],
              correctIndex: 1,
              explanation: `Squash and stretch observes that living things are not rigid — they compress under impact and extend during acceleration. A ball flattens when it hits the ground and elongates as it rises. A character's cheeks squash when hit. This deformation and recovery is what separates animation that feels alive from animation that feels mechanical. Without squash and stretch, characters look like moving geometric shapes. With it, they feel like they have real mass, elasticity, and physical presence.`,
            },
            {
              id: `l12-q3`,
              format: `multiple-choice`,
              question: `What do the greatest animated films have in common with great storytelling in any other form?`,
              options: [
                `They use the most advanced animation technology available at the time they were made`,
                `Story and character are everything — a technically perfect animation with a weak story is forgettable; a simple animation with a profound story is immortal`,
                `They are always aimed at children, because animation's visual style communicates best to young audiences`,
                `They avoid serious themes and focus on entertainment, because animation is an inherently light medium`,
              ],
              correctIndex: 1,
              explanation: `The greatest animated films succeed for exactly the same reasons all great stories succeed: characters we care about, wants and fears that feel real, and emotional truth that reaches the audience regardless of whether the world on screen is realistic. Animation's visual language — the stretching, the transformation, the expressiveness impossible in live action — is powerful precisely because it can make invisible feelings visible. But that power is empty without a story worth telling. Story and character are always the foundation.`,
            },
            {
              id: `l12-q4`,
              format: `true-false`,
              question: `The 12 principles of animation apply to all styles — 2D hand-drawn, stop motion, and 3D computer animation — not just traditional cel animation.`,
              correctAnswer: true,
              explanation: `True. The principles describe how movement feels in the physical world — how weight behaves, how energy flows, how anticipation and follow-through work — and these truths apply regardless of the medium. A stop-motion animator uses squash and stretch just as a hand-drawn animator does, only with physical clay instead of pencil lines. A 3D animator applies timing and exaggeration in software. The principles aren't rules about a technique; they're observations about how living things move, and those observations are universal.`,
            },
            {
              id: `l12-q5`,
              format: `fill-blank`,
              question: `The optical effect that makes your brain perceive a rapid sequence of still images as smooth movement is called persistence of ___.`,
              options: [
                `vision`,
                `motion`,
                `memory`,
                `light`,
              ],
              correctIndex: 0,
              explanation: `Persistence of vision is the foundation of all moving-image media — film, animation, and video all exploit it. The eye retains each image briefly after it has been replaced by the next one, and when the replacement happens fast enough (12+ frames per second), the brain interprets the sequence as continuous movement rather than a series of stills. This optical quirk is the reason that 129,600 individual drawings can become a 90-minute film that feels like a living, breathing world.`,
            },
            {
              id: `l12-q6`,
              format: `multiple-choice`,
              question: `Why is "anticipation" described as an important principle in animation?`,
              options: [
                `Because it allows animators to skip frames and save time by preparing the viewer in advance`,
                `Because showing a character preparing for an action before doing it creates expectation in the viewer — making the action feel more physically believable and emotionally satisfying when it arrives`,
                `Because characters who look ahead appear more intelligent and help audiences follow the plot`,
                `Because anticipation is the only principle that applies to both human characters and non-human objects`,
              ],
              correctIndex: 1,
              explanation: `Anticipation works because of the way expectation shapes experience. When a character winds up before throwing, or crouches before jumping, the preparation telegraphs what's about to happen — and that moment of expectation makes the action itself feel more physically real and more impactful. Without anticipation, actions appear from nowhere and feel sudden and weightless. With it, they feel grounded in a physical world where every action has a preparation, just as it does in real life.`,
            },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Animation principles are used far beyond cartoons — in video game character movement, special effects in live-action films, user interface design (the way your phone screen springs and bounces), and motion graphics in advertising. The underlying logic of how living things feel when they move is the same across all of these applications. Understanding animation teaches you to read visual movement with intention — and to create it with purpose.`,
          familyAdventure: `Watch an animated film together and watch it twice: once just to enjoy the story, then once specifically to notice the animation. Look for: squash and stretch in character movement; moments of anticipation before an action; how emotion is communicated through the whole body rather than just the face; and any moments where there are no words and the animation alone tells you everything. Discuss: what was your favourite moment of pure visual storytelling?`,
          creativePrompt: `Make a flipbook animation using sticky notes or small pieces of paper (at least 20). Start with the last page — draw a simple subject: a bouncing ball, a face changing expression, a stick figure waving. On each page going backward toward the first, make one small change. The simpler and more gradual the change, the smoother your animation will be. When done, hold the stack and flip quickly with your thumb. Then try applying squash and stretch to a bouncing ball: on impact, make it flatten wide; as it rises, make it tall and narrow. Feel how much more alive it looks.`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that every bouncing ball, every squashing cheek, every single frame of the films you love was a deliberate choice made by a person who understood how movement feels. Animation is the art of giving life to the lifeless — and now you can see exactly how it's done. Muse is delighted you'll never look at a cartoon quite the same way again.`,
          badge: `animator`,
          badgeName: `Animator`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L12.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L12] Loaded: "Animation: Making Things Move" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l12-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L12] One or more magazine assets missing'));
}
