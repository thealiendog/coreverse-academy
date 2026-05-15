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
          headline: `An Optical Trick`,
          paragraphs: [
            `Every cartoon is thousands of still images shown so fast your brain perceives movement.`,
            `That gap-filling is called PERSISTENCE OF VISION. Your eye holds each image for a fraction of a second after it disappears. All of animation depends on this.`,
          ],
          image: `/explorer-assets/creative-arts/l12-s1-persistence-of-vision.png`,
          imageCaption: `All of cinema is a beautiful trick your eye plays on itself. Animation just makes the trick visible.`,
          vocab: [
            { word: `persistence of vision`, definition: `The eye retaining an image for a fraction of a second after it disappears. The foundation of all animation and film.`,
              audioPrompt: `Your eye holds an image for a tiny fraction of a second after it disappears, {name}. That's persistence of vision — the entire reason animation works. Show still images fast enough and the eye fills in the gaps, creating the illusion of motion. Every film, every cartoon, every game — all exist because of this one quirk of human perception.` },
            { word: `illusion`,              definition: `Something appearing different from what it really is. Animation is one of the most organized illusions humans ever invented.`,
              audioPrompt: `Animation is an illusion, {name} — and a beautiful one. There is no movement on the screen. There is only a rapid sequence of still images, and a mind that decides to see motion between them. Knowing this doesn't ruin the magic. Muse finds it makes it more wonderful.` },
            { word: `perception`,            definition: `How the brain interprets sensory information. Animation exploits a specific quirk in how visual perception works.`,
              audioPrompt: `Perception isn't just seeing, {name} — it's how the brain interprets what the eye delivers. And the brain is doing constant work, filling in gaps, smoothing edges, predicting what comes next. Animation works because animators learned which gaps the brain will fill. They use the brain's helpfulness against it, in service of art.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Many Drawings?`,
          paragraphs: [
            `Film runs at 24 frames per second. A 90-minute animated film = around 129,600 individual drawings.`,
            `Modern 3D animation uses computers, but the math is the same: every second of motion is built from still moments.`,
          ],
          image: `/explorer-assets/creative-arts/l12-s2-thousands-of-drawings.png`,
          imageCaption: `Every second of motion in a film you love was built from 24 individual moments. The scale is staggering.`,
          vocab: [
            { word: `frame`,      definition: `A single still image in animation or film. Many frames in sequence become motion.`,
              audioPrompt: `A frame is one still image, {name} — and animation is just frames shown fast enough that the eye creates movement between them. Traditional hand-drawn animation required a separate drawing for every frame. Each one differing slightly from the last. Each one contributing a fraction of a second to a moving world.` },
            { word: `frame rate`, definition: `The number of frames shown per second. Standard film is 24 fps. Determines how smooth movement appears.`,
              audioPrompt: `Frame rate is how many still images appear per second, {name}. Film runs at 24. Less than about 12 and the eye starts to see the flicker. Animators choose frame rate carefully: more frames means smoother movement but far more work. Each frame is a drawing. Frame rate is the speed of the illusion.` },
            { word: `scale`,      definition: `The size or scope of something. Animation operates at staggering scale — feature films require millions of frames.`,
              audioPrompt: `The scale of animation is hard to grasp, {name}. A 90-minute animated film requires roughly 130,000 individual frames. A studio working on it might involve hundreds of artists for years. Modern 3D animated films require millions of computed frames. The patience required to make animation is itself a kind of art form.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Squash and Stretch`,
          paragraphs: [
            `A bouncing ball flattens when it hits the ground. Stretches tall as it rises. That's SQUASH AND STRETCH — and it's what gives animation weight.`,
            `Real objects do this slightly. Animation exaggerates it until the eye sees life. Without it, things feel mechanical.`,
          ],
          image: `/explorer-assets/creative-arts/l12-s3-squash-and-stretch.png`,
          imageCaption: `A ball that just moves around looks like a ball. A ball that squashes and stretches feels alive.`,
          vocab: [
            { word: `squash and stretch`, definition: `The principle that living things deform when moving — flattening under impact, elongating through motion.`,
              audioPrompt: `When a cartoon ball hits the ground, {name}, it squashes flat for a frame — then as it bounces up, it stretches tall. That's squash and stretch. What gives animated objects the feeling of weight and flexibility. Real objects do this slightly. Animation just exaggerates it until the eye registers it as truth.` },
            { word: `weight`,             definition: `The feeling that an animated object has real mass. Created through deformation and timing.`,
              audioPrompt: `Weight in animation is invisible but unmistakable, {name}. A character can be drawn perfectly but if it moves like it weighs nothing, the illusion breaks. Animators study how heavy things actually fall, accelerate, settle. The way the body lands after a jump. The way a heavy door swings. Weight is what makes drawn things feel real.` },
            { word: `principle`,          definition: `A foundational rule of an art form. The 12 principles of animation guide every animator's work.`,
              audioPrompt: `Principles are deeper than techniques, {name}. A technique might be how to draw a specific character. A principle is something true about how movement works in any medium. The 12 principles of animation — squash and stretch, anticipation, timing, and more — apply to 2D, stop motion, and 3D equally. They describe how life moves.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Anticipation and Timing`,
          paragraphs: [
            `ANTICIPATION = preparing for an action before doing it. A character winds up before throwing. The audience knows something is coming.`,
            `TIMING = how many frames an action takes. Two frames = slam. Twelve frames = slow drift. Same action, completely different feeling.`,
          ],
          image: `/explorer-assets/creative-arts/l12-s4-anticipation-timing.png`,
          imageCaption: `Wind up before the punch. Stretch time during the gasp. Animators control attention frame by frame.`,
          vocab: [
            { word: `anticipation`, definition: `Preparation a character makes before a big action. Creates expectation and makes the action land harder.`,
              audioPrompt: `Anticipation is the windup before the action, {name}. A character leans back before they leap. A hand draws back before it swings. Without preparation, actions look sudden and unconvincing. With it, the eye is primed. When the action arrives, it lands harder.` },
            { word: `timing`,       definition: `How many frames an action takes. Controls the emotional weight of every moment in animation.`,
              audioPrompt: `Timing in animation is the difference between life and mechanism, {name}. The same action — a door closing — takes two frames and it's a slam. Takes twelve frames and it's a slow, ominous drift. An emotion in one frame is a shock. In eight frames it's a dawning realization. Timing is feel — one of the hardest things to learn.` },
            { word: `exaggeration`, definition: `Pushing movements and expressions beyond realism. Makes emotion and action unmistakable.`,
              audioPrompt: `Animation can go where live action cannot, {name} — eyes can pop out, bodies can stretch impossibly, surprise can register in ways real faces never manage. That's exaggeration: pushing beyond realism until the feeling becomes unmistakable. The goal isn't unreality for its own sake. It's clarity.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Different Styles, Same Magic`,
          paragraphs: [
            `Animation comes in many forms. 2D HAND-DRAWN (Studio Ghibli). STOP MOTION (Coraline, Wallace and Gromit). 3D COMPUTER ANIMATION (most modern films).`,
            `None is more valid than another. Each makes different things possible. The technology is just the tool.`,
          ],
          image: `/explorer-assets/creative-arts/l12-s5-three-styles.png`,
          imageCaption: `Hand-drawn warmth. Clay-figure texture. 3D scale. Different paths to the same magic.`,
          vocab: [
            { word: `2D animation`,   definition: `Animation drawn flat as images on a plane. Hand-drawn or digital. Studio Ghibli's traditional style.`,
              audioPrompt: `2D animation is drawing brought to life, {name} — each frame a flat image placed in sequence to create movement. Studio Ghibli's films — My Neighbor Totoro, Spirited Away — are 2D, and there's a warmth and texture to them because each frame is essentially a painting. The characters move through painted worlds.` },
            { word: `stop motion`,    definition: `Animation made by photographing real physical objects (clay, puppets) in slightly different positions for each frame.`,
              audioPrompt: `Stop motion is the art of making still things move, {name}. A clay figure is posed, photographed, adjusted by a fraction, photographed again — thousands of times. Wallace and Gromit were made this way. So was Coraline. Extraordinarily time-consuming and extraordinarily satisfying. The physical world, made to move as if alive.` },
            { word: `3D animation`,   definition: `Animation built from three-dimensional computer models. Each frame is rendered by software calculating light and surfaces.`,
              audioPrompt: `In 3D animation, {name}, the computer figures out what each frame looks like — calculating light, shadows, materials. That process is called rendering. A single frame from a complex film can take hours to render. A feature film requires millions of frames. The rendering of a modern animated film is a feat of computing impossible just twenty years ago.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Story Comes First`,
          paragraphs: [
            `The greatest animated films aren't great because of their animation. They're great because of their stories.`,
            `A technically perfect animation with a weak story is forgettable. A simple animation with a profound story is immortal. The technique serves the story. Always.`,
          ],
          image: `/explorer-assets/creative-arts/l12-s6-story-first.png`,
          imageCaption: `Visual magic only matters when it's carrying something true. The animation is the vehicle. The story is the destination.`,
          vocab: [
            { word: `visual storytelling`, definition: `Communicating narrative through images and movement instead of words. Animation's unique power.`,
              audioPrompt: `Animation can do things live action cannot, {name} — characters stretch, transform, reveal inner emotion through their whole body. That visual freedom is extraordinary. But it only matters when it's telling something true. The greatest animated films use their visual language to go somewhere emotionally that ordinary drama can't reach.` },
            { word: `character design`,   definition: `The visual creation of an animated character — shape, color, proportions. Communicates personality before the character speaks.`,
              audioPrompt: `An animated character's design tells you who they are before they open their mouth, {name}. Rounded shapes feel friendly. Sharp angles feel dangerous or clever. Color communicates mood. Every visual decision in character design is a storytelling decision. When design and story align, the character feels inevitable.` },
            { word: `intent`,             definition: `The deliberate purpose behind every choice. What separates animation from random motion.`,
              audioPrompt: `Intent is what every frame of animation needs, {name} — a reason for being there. Why this expression, this timing, this angle? Animation is so labor-intensive that every choice has to earn its place. Random motion is just movement. Intentional motion is animation. That distinction is everything.` },
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
    fetch('/explorer-assets/creative-arts/l12-s1-persistence-of-vision.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-s2-thousands-of-drawings.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-s3-squash-and-stretch.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-s4-anticipation-timing.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-s5-three-styles.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l12-s6-story-first.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L12] One or more magazine assets missing'));
}
