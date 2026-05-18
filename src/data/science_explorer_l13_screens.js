// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L13 — Light: How We See the World
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 1-PS4-2 / 1-PS4-3 (light and what we see)
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
          guideText: `Hey {name}, Cosmo here! Look around. You can see EVERYTHING. But have you ever asked WHY? Why can we see things? The answer is LIGHT. Without light, the world would be completely DARK. We see things because light bounces off them and into our eyes. Today we'll learn how light works — where it comes from, how it travels, why we have shadows, and why rainbows exist. Let's explore!`,
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
            `Right now, you can SEE these words. But WHY?`,
            `Because LIGHT is hitting them — and BOUNCING off them — and going into your EYES. Your eyes catch the light, and your brain turns it into what you see. NO LIGHT = NO SEEING. That's why in a totally dark room, you can't see anything. There's nothing wrong with your eyes — there's just no light for them to catch. The sun, lamps, computer screens, fire, candles — all making light. And that light is what lets you see the world.`,
          ],
          image: `/explorer-assets/science/l13-s1-light-everywhere.webp`,
          imageCaption: `We see because LIGHT bounces off things into our eyes. No light = no seeing. Light is everywhere we look.`,
          vocab: [
            { word: `light`,          definition: `Energy that lets us see. Without LIGHT, we couldn't see anything.`,
              audioPrompt: `Light, {name}, is energy that lets us see. It's a type of energy — like heat or sound — but it lets us SEE. Without light, everything would be completely dark. Light comes from many sources — the sun, fire, lightbulbs, lightning. Light travels through space and bounces off things into our eyes. That's how we see.` },
            { word: `see`,            definition: `To detect light with your eyes. We SEE because light enters our eyes.`,
              audioPrompt: `To see, {name}, is to detect light with your eyes. Light bounces off things in the world and enters your eyes. Special parts of your eyes catch the light. Then your brain figures out what you're looking at. Seeing is light + eyes + brain working together. Pretty amazing.` },
            { word: `dark`,           definition: `When there's NO light. You can't see in the DARK.`,
              audioPrompt: `Dark, {name}, is when there's no light. You can't see in the dark. Many people think darkness is something — like a thing. But really, darkness is just the ABSENCE of light. Where light isn't, there's darkness. The moment you turn on a light, darkness is gone. Darkness isn't a thing — it's the lack of a thing.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where Light Comes From`,
          paragraphs: [
            `Light always comes from a SOURCE. It doesn't just appear from nothing.`,
            `The biggest light source on Earth is the SUN. The sun makes our DAYTIME light. At night, the sun is on the other side of Earth — and we use other sources. LAMPS and LIGHTBULBS make light using electricity. FIRE makes light when things burn (candles, fireplaces). STARS make light far away in space. LIGHTNING makes very bright, brief light. Some animals — like fireflies and certain deep-sea fish — make their OWN light. But always — light needs a source.`,
          ],
          image: `/explorer-assets/science/l13-s2-light-sources.webp`,
          imageCaption: `Light SOURCES: sun (biggest), lamps, fire, stars, lightning, fireflies. Light always has a source.`,
          vocab: [
            { word: `source`,         definition: `Where something COMES FROM. Light always has a SOURCE.`,
              audioPrompt: `A source, {name}, is where something comes from. Light always has a source. The sun is the source of daylight. A lightbulb is the source of light in a room. Fire is the source of candle light. Light doesn't appear from nowhere — it always traces back to a source. Find the source, you find where the light started.` },
            { word: `sun`,            definition: `Our nearest STAR. The SUN is Earth's biggest light source.`,
              audioPrompt: `The sun, {name}, is our nearest star. It's the biggest light source on Earth. The sun is HUGE — way bigger than Earth — and incredibly hot. It makes enough light to brighten the whole planet during the day. Sunlight travels 93 million miles through space to reach us. We rely on the sun for almost everything.` },
            { word: `electricity`,    definition: `Energy that flows through wires. LAMPS use ELECTRICITY to make light.`,
              audioPrompt: `Electricity, {name}, is energy that flows through wires. Lamps, lightbulbs, computer screens — all use electricity to make light. When you flip a switch, electricity flows into the bulb, the bulb heats up or glows, and out comes light. Electricity is amazing — it lets us make light whenever we want.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Light Travels in STRAIGHT LINES`,
          paragraphs: [
            `Here's something important — light travels in STRAIGHT LINES. It doesn't curve. It doesn't wiggle. Just straight.`,
            `When sunlight comes from the sun, it travels in straight beams across space — for 93 million miles — and hits Earth. When you turn on a flashlight, the light shoots out in a straight line. Light goes FAST too — about 186,000 miles per second. That's MILLION miles per minute. Light from the sun reaches Earth in about 8 minutes. From stars far away, it takes years — even though it's traveling fast the whole time. Straight lines, super fast.`,
          ],
          image: `/explorer-assets/science/l13-s3-travels-straight.webp`,
          imageCaption: `Light travels in straight lines. Fast — 186,000 miles per second. Sun's light takes 8 minutes to reach Earth.`,
          vocab: [
            { word: `straight lines`, definition: `Lines without curves. Light travels in STRAIGHT LINES.`,
              audioPrompt: `Straight lines, {name}, are lines without curves. Light travels in straight lines. It doesn't bend or curve naturally. From the source, it shoots out in straight beams. That's why a flashlight beam looks like a straight cone of light. That's why shadows are sharp — the light goes around the object in straight lines.` },
            { word: `fast`,           definition: `Quick. Light travels SUPER FAST — 186,000 miles per second.`,
              audioPrompt: `Fast, {name}, means quick. Light travels super fast — 186,000 miles per second. That's so fast that in regular life, light seems INSTANT. When you flip a switch, light fills the room immediately. That's not actually instant — but it's faster than your eyes can detect. Light is the fastest thing in the universe.` },
            { word: `beam`,           definition: `A line or stream of light. A flashlight makes a BEAM.`,
              audioPrompt: `A beam, {name}, is a line or stream of light. A flashlight makes a beam. A spotlight makes a beam. Sometimes you can SEE beams of light — like when sun shines through clouds and you see rays of light. Each ray is a beam. Beams show that light travels in straight lines.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `SHADOWS: Blocked Light`,
          paragraphs: [
            `SHADOWS happen when something BLOCKS the light.`,
            `Stand outside on a sunny day. Where you stand, the sun's light hits the ground. Behind you — your body BLOCKS the sun. The ground behind you doesn't get sunlight. That's your SHADOW. Shadows are the SHAPE of whatever's blocking the light. A tree makes a tree-shaped shadow. Your hand makes a hand-shaped shadow. Shadows are evidence that light travels in straight lines — if light could curve, there wouldn't be shadows. Different times of day = different shadow lengths because the sun is at different angles.`,
          ],
          image: `/explorer-assets/science/l13-s4-shadows.webp`,
          imageCaption: `Shadows happen when something BLOCKS light. Shadow shape = blocking object shape. Proof of straight-line light.`,
          vocab: [
            { word: `shadow`,         definition: `A dark area where light is BLOCKED by something.`,
              audioPrompt: `A shadow, {name}, is a dark area where light is blocked by something. When you stand in sunlight, your body blocks the sun. The ground behind you doesn't get sunlight — that's your shadow. Shadows are the SHAPE of the thing blocking the light. They're cool to play with. They prove that light travels in straight lines.` },
            { word: `block`,          definition: `To stop something from passing through. Objects BLOCK light and make shadows.`,
              audioPrompt: `To block, {name}, means to stop something from passing through. Objects block light. When light hits a solid object, the light can't go through. So the light stops, and behind the object, there's no light — that's the shadow. Different objects block different amounts. Solid objects block all light. Some things block only part of the light.` },
            { word: `angle`,          definition: `The slant or direction. The sun's ANGLE changes throughout the day, changing shadows.`,
              audioPrompt: `An angle, {name}, is the slant or direction of something. The sun's angle changes throughout the day. In the morning, sun is low on one side. At noon, sun is high overhead. In evening, sun is low on the other side. Different angles make different shadows — long shadows in morning/evening, short shadows at noon.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `REFLECTION: Light Bounces`,
          paragraphs: [
            `When light hits something SMOOTH and SHINY, it BOUNCES off. This is REFLECTION.`,
            `Look in a MIRROR — that's reflection at work. Light from your face hits the mirror, bounces back, and goes into your eyes — you see yourself. Calm water also reflects — that's why lakes look like a second sky. Smooth shiny metal reflects. Even regular surfaces reflect a little light — that's actually how we see them. ROUGH surfaces scatter light in many directions (so we see the surface). SMOOTH surfaces reflect light all in one direction (so we see a clear reflection). Reflection is what makes mirrors work.`,
          ],
          image: `/explorer-assets/science/l13-s5-reflection.webp`,
          imageCaption: `Reflection: light BOUNCES off smooth surfaces. Mirrors, water, shiny metal. That's how mirrors work.`,
          vocab: [
            { word: `reflection`,     definition: `When light BOUNCES off a surface. Mirrors work because of REFLECTION.`,
              audioPrompt: `Reflection, {name}, is when light bounces off a surface. Mirrors are the perfect example. Light from your face hits the mirror and bounces straight back into your eyes. You see your reflection — your face bouncing back. Smooth surfaces reflect well. Rough surfaces scatter the light. Both involve reflection — just in different ways.` },
            { word: `bounce`,         definition: `To go back after hitting something. Light BOUNCES off smooth surfaces.`,
              audioPrompt: `To bounce, {name}, is to go back after hitting something. Light bounces. Like a ball bouncing off a wall. When light hits a smooth surface, it bounces off at an angle. If the surface is smooth like glass or metal, the bounce is clean and clear — you can see a reflection. If the surface is rough, the bounce is scattered — you just see the surface.` },
            { word: `mirror`,         definition: `A smooth, shiny surface that reflects light clearly. MIRRORS show your reflection.`,
              audioPrompt: `A mirror, {name}, is a smooth, shiny surface that reflects light clearly. Mirrors are usually made of glass with a special metal coating on the back. Light from your face hits the mirror, bounces off the metal, and comes back to your eyes. You see yourself in perfect reflection. Mirrors are reflection technology.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `COLOR: Light's Hidden Magic`,
          paragraphs: [
            `Here's the WILDEST thing about light — what looks WHITE actually has ALL COLORS inside it!`,
            `Sunlight LOOKS white. But it's secretly made of all the colors of the rainbow — RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET. You see this when you see a RAINBOW. Raindrops in the sky act like tiny prisms, splitting white sunlight into all its colors. Different objects look different colors because they REFLECT different colors. A red apple absorbs all colors except red — it bounces red light into your eyes. Grass reflects green. Light makes color possible.`,
          ],
          image: `/explorer-assets/science/l13-s6-color-rainbow.webp`,
          imageCaption: `White light = all colors mixed together. Rainbows split it. Objects reflect their color back at you.`,
          vocab: [
            { word: `colors`,         definition: `Different visible parts of light. The rainbow has 7 main COLORS.`,
              audioPrompt: `Colors, {name}, are different visible parts of light. The rainbow has 7 main colors — red, orange, yellow, green, blue, indigo, violet. Each color is a different kind of light. When all colors combine, we see WHITE light. When colors split apart (in a rainbow or prism), we see them separately. Colors are light's hidden variety.` },
            { word: `rainbow`,        definition: `When sunlight splits into all its colors. Raindrops or prisms make RAINBOWS.`,
              audioPrompt: `A rainbow, {name}, is when sunlight splits into all its colors. Raindrops or prisms split white light into red, orange, yellow, green, blue, indigo, violet. Rainbows usually appear after rain when the sun's still shining — the raindrops in the air split the sunlight. Rainbows are nature's reminder that white light is secretly seven colors.` },
            { word: `reflect colors`, definition: `Objects look colored because they REFLECT certain colors of light.`,
              audioPrompt: `Reflect colors, {name} — objects look colored because they reflect certain colors of light. A red apple absorbs all colors except red. It bounces red light back into your eyes — that's why you see red. Grass reflects green. The sky reflects blue. Every color you see is light bouncing off something. Pretty wild, huh?` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `Light always comes from a SOURCE — sun, lamps, fire, stars.`,
              matchPhrase: `Yes! Light never just appears. It always has a source. Sun makes daylight. Lightbulbs make room light. Fire makes candle light. Stars make starlight. Trace any light back, you'll find its source.`,
              correctMatch: `fact` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `SHADOWS happen when something BLOCKS light.`,
              matchPhrase: `True! Shadows form behind objects that block light. Your body blocks sunlight, making your shadow. The shadow takes the shape of whatever's blocking the light. Proof that light travels in straight lines.`,
              correctMatch: `fact` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `You can see PERFECTLY in pitch darkness with NO light at all.`,
              matchPhrase: `Not at all! Without ANY light, you can't see. Seeing requires light entering your eyes. In a totally dark room, even with perfect eyes, you'd see nothing. Eyes need light to work.`,
              correctMatch: `myth` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `Light CURVES around objects to reach the other side.`,
              matchPhrase: `Definitely not! Light travels in STRAIGHT LINES — that's why shadows exist. If light could curve, there'd be no shadows because light would just go around objects. Straight lines = shadows.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `Why can we SEE things?`,
              options: [`We just can`, `Light bounces off things and into our eyes — that's how we see`, `Eyes make their own light`, `Only on sunny days`],
              correctIndex: 1,
              explanation: `Light bounces off things and into our eyes. Our brain turns that light into what we see. No light = no seeing. That's why we can't see in the dark.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What is the BIGGEST source of light on Earth?`,
              options: [`Lightbulbs`, `The SUN`, `Fire`, `The moon`],
              correctIndex: 1,
              explanation: `The sun! It's our nearest star and Earth's biggest light source. Sunlight makes daytime. Without the sun, Earth would be cold and dark.` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `How does LIGHT travel?`,
              options: [`In zigzags`, `In STRAIGHT LINES — fast — about 186,000 miles per second`, `Slowly, in curves`, `Backwards`],
              correctIndex: 1,
              explanation: `Light travels in straight lines and super fast. From the sun, light takes about 8 minutes to reach Earth — across 93 million miles!` },
            { id: `l13-q4`, format: `true-false`,
              question: `SHADOWS form when something BLOCKS light from reaching the area behind it.`,
              correctAnswer: true,
              explanation: `True! When light hits a solid object, the light can't go through. Behind the object, there's no light — that's the shadow. Shadows are proof light travels straight.` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `When light bounces off a smooth surface like a mirror, it's called ___.`,
              options: [`reflection`, `reading`, `singing`, `cooking`],
              correctIndex: 0,
              explanation: `Reflection! Mirrors, calm water, and shiny metal all reflect light. The light bounces off the smooth surface and back at us — that's how we see ourselves in mirrors.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is WHITE LIGHT secretly made of?`,
              options: [`Nothing`, `ALL the colors of the rainbow — mixed together`, `Just white`, `Salt`],
              correctIndex: 1,
              explanation: `All colors! White light is actually red + orange + yellow + green + blue + indigo + violet all mixed together. Rainbows are what we see when sunlight splits into its individual colors.` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Scientists use LIGHT in amazing ways. TELESCOPES catch light from stars billions of miles away — letting us see things from VERY long ago. (When you see a star, you're seeing light that left it years ago.) MICROSCOPES use light to magnify tiny things — letting us see germs and cells. LASERS are super-focused beams of light used in surgery, factories, and even your TV remote control. FIBER OPTICS send internet data using light. Solar panels turn sunlight into electricity. Light is one of humanity's most important tools.`,
          familyAdventure: `Be SHADOW SCIENTISTS together. On a sunny day (or with a lamp at night), try: 1) Make HAND SHADOWS on a wall — see what shapes you can create. 2) Measure your shadow at DIFFERENT times of day. Is it the same length? 3) Have someone stand between a lamp and a wall — observe their shadow. Move them closer to the lamp — does the shadow get BIGGER or smaller? (Bigger!) Shadows tell us about light.`,
          creativePrompt: `Draw a PICTURE showing how SIGHT works. Draw a SUN at the top. Draw a person's EYE on the right. Draw an APPLE in the middle. Then add arrows: a) Sunlight going TO the apple. b) Light BOUNCING OFF the apple. c) Light going INTO the eye. Label each part. That's how seeing works!`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You now know LIGHT. It comes from SOURCES (sun, lamps, fire). It travels in STRAIGHT LINES. It makes SHADOWS when blocked. It BOUNCES off smooth things (reflection). It contains ALL COLORS — which makes rainbows. And it's what lets us SEE everything. The world looks different now that you know how light works. See you next lesson!`,
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
  const mags  = SCIENCE_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L13] Loaded: "Light" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
