// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L13 — Light: How We See the World
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 1-PS4-2 / 1-PS4-3
// REWRITE v2 (May 2026): Grade 1 accessible, SOURCE / SHADOW / REFLECTION
// 3-bucket identification game tests sorting light behaviors
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L13 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-13`,
      title:     `Light: How We See the World`,
      duration:  12,
      xpReward:  50,
      badge:     `light-explorer`,
      badgeName: `Light Explorer`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Look around! You can see EVERYTHING! But WHY? The answer is LIGHT! Without light, the world would be DARK! We see things because light bounces off them into our eyes! Today we'll learn how light works — where it comes from, how it travels, why we have shadows, and why rainbows exist! Let's explore!`,
          headline: `Light: How We See the World`,
          subtitle: `The energy that lets us see — and how it works`,
          visual: `/explorer-assets/science/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Light Lets Us See`,
          paragraphs: [
            `Right now, {name}, you can SEE these words! But WHY?`,
            `Because LIGHT is hitting them — and BOUNCING off them — and going into your EYES! Your eyes catch the light! Your brain turns it into what you see! NO LIGHT = NO SEEING! That's why in a totally dark room, you can't see anything! There's nothing wrong with your eyes — there's just no light for them to catch! The sun, lamps, computer screens, fire, candles — all making light!`,
          ],
          image: `/explorer-assets/science/l13-s1-light-everywhere.webp`,
          imageCaption: `We see because LIGHT bounces off things into our eyes!`,
          vocab: [
            { word: `light`, definition: `Energy that lets us see.`,
              audioPrompt: `Light is energy that lets us see. It's a type of energy — like heat or sound — but it lets us SEE. Without light, everything would be completely dark. Light comes from the sun, fire, lightbulbs, and more!` },
            { word: `see`,   definition: `To detect light with your eyes.`,
              audioPrompt: `To see is to detect light with your eyes. Light bounces off things and enters your eyes. Special parts of your eyes catch the light. Then your brain figures out what you're looking at. Seeing is light plus eyes plus brain!` },
            { word: `dark`,  definition: `When there's no light.`,
              audioPrompt: `Dark is when there's no light. You can't see in the dark. Many people think darkness is something — like a thing. But really, darkness is just the ABSENCE of light. Turn on a light, darkness is gone!` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where Light Comes From`,
          paragraphs: [
            `Light always comes from a SOURCE! It doesn't just appear from nothing!`,
            `The biggest light source on Earth is the SUN! The sun makes our DAYTIME light! At night, we use other sources! LAMPS and LIGHTBULBS make light using electricity! FIRE makes light when things burn (candles, fireplaces)! STARS make light far away in space! LIGHTNING makes very bright, brief light! Some animals — like fireflies — make their OWN light! But always — light needs a source!`,
          ],
          image: `/explorer-assets/science/l13-s2-light-sources.webp`,
          imageCaption: `Light SOURCES: sun, lamps, fire, stars, lightning, fireflies!`,
          vocab: [
            { word: `source`,      definition: `Where something comes from.`,
              audioPrompt: `A source is where something comes from. Light always has a source. The sun is the source of daylight. A lightbulb is the source of light in a room. Light doesn't appear from nowhere — it always traces back to a source!` },
            { word: `sun`,         definition: `Our nearest star — Earth's biggest light source.`,
              audioPrompt: `The sun is our nearest star. It's the biggest light source on Earth. The sun is HUGE — way bigger than Earth — and incredibly hot. It makes enough light to brighten the whole planet during the day!` },
            { word: `electricity`, definition: `Energy that flows through wires.`,
              audioPrompt: `Electricity is energy that flows through wires. Lamps, lightbulbs, computer screens — all use electricity to make light. When you flip a switch, electricity flows into the bulb, the bulb glows, and out comes light!` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Light Travels in STRAIGHT LINES`,
          paragraphs: [
            `Here's something important — light travels in STRAIGHT LINES! It doesn't curve! It doesn't wiggle! Just straight!`,
            `When sunlight comes from the sun, it travels in straight beams across space — for 93 million miles — and hits Earth! When you turn on a flashlight, the light shoots out in a straight line! Light goes FAST too — about 186,000 miles per second! That's super fast! Light from the sun reaches Earth in about 8 minutes! Straight lines, super fast!`,
          ],
          image: `/explorer-assets/science/l13-s3-travels-straight.webp`,
          imageCaption: `Light travels in straight lines. Fast — 186,000 miles per second!`,
          vocab: [
            { word: `straight lines`, definition: `Lines without curves.`,
              audioPrompt: `Straight lines are lines without curves. Light travels in straight lines. It doesn't bend or curve naturally. From the source, it shoots out in straight beams. That's why a flashlight beam looks like a straight cone!` },
            { word: `fast`,           definition: `Quick — light travels super fast.`,
              audioPrompt: `Fast means quick. Light travels super fast — 186,000 miles per second. So fast that in regular life, light seems INSTANT. When you flip a switch, light fills the room immediately. Light is the fastest thing in the universe!` },
            { word: `beam`,           definition: `A line or stream of light.`,
              audioPrompt: `A beam is a line or stream of light. A flashlight makes a beam. A spotlight makes a beam. Sometimes you can SEE beams — like when sun shines through clouds. Beams show that light travels in straight lines!` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `SHADOWS: Blocked Light`,
          paragraphs: [
            `SHADOWS happen when something BLOCKS the light!`,
            `Stand outside on a sunny day! Where you stand, the sun's light hits the ground! Behind you — your body BLOCKS the sun! The ground behind you doesn't get sunlight! That's your SHADOW! Shadows are the SHAPE of whatever's blocking the light! A tree makes a tree-shaped shadow! Your hand makes a hand-shaped shadow! Shadows are evidence that light travels in straight lines!`,
          ],
          image: `/explorer-assets/science/l13-s4-shadows.webp`,
          imageCaption: `Shadows happen when something BLOCKS light!`,
          vocab: [
            { word: `shadow`, definition: `A dark area where light is blocked.`,
              audioPrompt: `A shadow is a dark area where light is blocked by something. When you stand in sunlight, your body blocks the sun. The ground behind you doesn't get sunlight — that's your shadow. Shadows are the SHAPE of the thing blocking light!` },
            { word: `block`,  definition: `To stop something from passing through.`,
              audioPrompt: `To block means to stop something from passing through. Objects block light. When light hits a solid object, the light can't go through. So behind the object, there's no light — that's the shadow!` },
            { word: `angle`,  definition: `The slant or direction.`,
              audioPrompt: `An angle is the slant or direction of something. The sun's angle changes throughout the day. Morning sun low on one side. Noon sun high overhead. Different angles make different shadows — long in morning, short at noon!` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `REFLECTION: Light Bounces`,
          paragraphs: [
            `When light hits something SMOOTH and SHINY, it BOUNCES off! This is REFLECTION!`,
            `Look in a MIRROR — that's reflection at work! Light from your face hits the mirror, bounces back, and goes into your eyes — you see yourself! Calm water also reflects — that's why lakes look like a second sky! Smooth shiny metal reflects! ROUGH surfaces scatter light in many directions! SMOOTH surfaces reflect light all in one direction — that's why mirrors give clear reflections!`,
          ],
          image: `/explorer-assets/science/l13-s5-reflection.webp`,
          imageCaption: `Reflection: light BOUNCES off smooth surfaces!`,
          vocab: [
            { word: `reflection`, definition: `When light bounces off a surface.`,
              audioPrompt: `Reflection is when light bounces off a surface. Mirrors are the perfect example. Light from your face hits the mirror and bounces straight back into your eyes. You see your reflection — your face bouncing back!` },
            { word: `bounce`,     definition: `To go back after hitting something.`,
              audioPrompt: `To bounce is to go back after hitting something. Light bounces. Like a ball bouncing off a wall. When light hits a smooth surface, it bounces off at an angle. Smooth = clean bounce. Rough = scattered bounce!` },
            { word: `mirror`,     definition: `A smooth surface that reflects light clearly.`,
              audioPrompt: `A mirror is a smooth, shiny surface that reflects light clearly. Mirrors are usually made of glass with a special metal coating on the back. Light from your face hits the mirror, bounces, and comes back to your eyes!` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `COLOR: Light's Hidden Magic`,
          paragraphs: [
            `Here's the WILDEST thing about light — what looks WHITE actually has ALL COLORS inside it!`,
            `Sunlight LOOKS white! But it's secretly made of all the colors of the rainbow — RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET! You see this when you see a RAINBOW! Raindrops in the sky act like tiny prisms, splitting white sunlight into all its colors! Different objects look different colors because they REFLECT different colors! A red apple bounces red light into your eyes! Grass reflects green! Light makes color possible!`,
          ],
          image: `/explorer-assets/science/l13-s6-color-rainbow.webp`,
          imageCaption: `White light = all colors mixed! Rainbows split it!`,
          vocab: [
            { word: `colors`,         definition: `Different visible parts of light.`,
              audioPrompt: `Colors are different visible parts of light. The rainbow has 7 main colors — red, orange, yellow, green, blue, indigo, violet. When all colors combine, we see WHITE light. When colors split apart, we see them separately!` },
            { word: `rainbow`,        definition: `When sunlight splits into all its colors.`,
              audioPrompt: `A rainbow is when sunlight splits into all its colors. Raindrops or prisms split white light. Rainbows usually appear after rain when the sun's still shining — the raindrops in the air split the sunlight. Nature's magic!` },
            { word: `reflect colors`, definition: `Objects look colored because they reflect certain colors.`,
              audioPrompt: `Reflect colors — objects look colored because they reflect certain colors of light. A red apple absorbs all colors except red. It bounces red light back into your eyes — that's why you see red. Grass reflects green!` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 light scenes. Drag each one — is it a SOURCE (where light comes from!), a SHADOW (where light is blocked!), or a REFLECTION (where light bounces!)?`,
          buckets: [
            { id: `source`,     label: `☀️ SOURCE`,     color: `#FBBF24` },
            { id: `shadow`,     label: `🌑 SHADOW`,     color: `#475569` },
            { id: `reflection`, label: `🪞 REFLECTION`, color: `#67E8F9` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `The sun shining brightly in a clear blue sky`,
              matchPhrase: `Yes! SOURCE! The sun is Earth's biggest light source. It makes the light, then it shines out in all directions!`,
              correctMatch: `source` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `A dark patch on the ground in the exact shape of a tree`,
              matchPhrase: `Right! SHADOW! The tree blocks sunlight. Behind the tree, no light reaches the ground — that's the tree-shaped shadow!`,
              correctMatch: `shadow` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `Your face looking back at you from a smooth mirror`,
              matchPhrase: `Yes! REFLECTION! Light from your face hits the mirror, bounces back, and goes into your eyes. You see yourself!`,
              correctMatch: `reflection` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `A lit lightbulb glowing inside a desk lamp`,
              matchPhrase: `Right! SOURCE! The lightbulb makes its own light using electricity. It's where the light comes from!`,
              correctMatch: `source` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `Why can we SEE things?`,
              options: [`We just can`, `Light bounces off things and into our eyes`, `Eyes make their own light`, `Only on sunny days`],
              correctIndex: 1,
              explanation: `Light bounces off things and into our eyes. Our brain turns that light into what we see. No light = no seeing!` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What is the BIGGEST source of light on Earth?`,
              options: [`Lightbulbs`, `The SUN`, `Fire`, `The moon`],
              correctIndex: 1,
              explanation: `The sun! It's our nearest star and Earth's biggest light source. Sunlight makes daytime!` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `How does LIGHT travel?`,
              options: [`In zigzags`, `In STRAIGHT LINES — about 186,000 miles per second`, `Slowly, in curves`, `Backwards`],
              correctIndex: 1,
              explanation: `Light travels in straight lines and super fast. From the sun, light takes about 8 minutes to reach Earth!` },
            { id: `l13-q4`, format: `true-false`,
              question: `SHADOWS form when something BLOCKS light from reaching the area behind it.`,
              correctAnswer: true,
              explanation: `True! When light hits a solid object, the light can't go through. Behind the object, there's no light — that's the shadow!` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `When light bounces off a smooth surface like a mirror, it's called ___.`,
              options: [`reflection`, `reading`, `singing`, `cooking`],
              correctIndex: 0,
              explanation: `Reflection! Mirrors, calm water, and shiny metal all reflect light. The light bounces back at us!` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is WHITE LIGHT secretly made of?`,
              options: [`Nothing`, `ALL the colors of the rainbow — mixed together`, `Just white`, `Salt`],
              correctIndex: 1,
              explanation: `All colors! White light is red + orange + yellow + green + blue + indigo + violet all mixed together!` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientists use LIGHT in amazing ways! TELESCOPES catch light from stars billions of miles away — letting us see things from VERY long ago! MICROSCOPES use light to magnify tiny things! LASERS are super-focused beams used in surgery, factories, and even your TV remote! FIBER OPTICS send internet data using light! Solar panels turn sunlight into electricity! Light is one of humanity's most important tools!`,
          familyAdventure: `Be SHADOW SCIENTISTS together! On a sunny day (or with a lamp at night), try: 1) Make HAND SHADOWS on a wall — see what shapes you can create! 2) Measure your shadow at DIFFERENT times of day! Is it the same length? 3) Have someone stand between a lamp and a wall — move them closer to the lamp! Does the shadow get BIGGER or smaller? (Bigger!)`,
          creativePrompt: `Draw a PICTURE showing how SIGHT works! Draw a SUN at the top, a person's EYE on the right, and an APPLE in the middle! Then add arrows: sunlight going TO the apple, light BOUNCING OFF the apple, light going INTO the eye! For a 3-sentence floor: write a sentence about each step (sun, bounce, eye). For a 5-sentence stretch: write what happens at each step, plus a sentence about your favorite color, plus a sentence about what color you'd be!`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You now know LIGHT! It comes from SOURCES (sun, lamps, fire)! It travels in STRAIGHT LINES! It makes SHADOWS when blocked! It BOUNCES off smooth things (reflection)! It contains ALL COLORS — which makes rainbows! And it's what lets us SEE everything! Cosmo is so splashy-proud! 🦦`,
          badge: `light-explorer`,
          badgeName: `Light Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L13;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L13] Loaded: "Light" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
