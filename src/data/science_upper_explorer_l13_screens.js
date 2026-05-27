// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L13 — Light: How We See the World
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 4-PS4-2, 5-PS3-1 — Light from sources to eye allows
//            us to see; energy travels in waves and rays
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what light is, how we see, the visible spectrum
//        and beyond, reflection and refraction
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-13`,
      title: `Light: How We See the World`,
      duration: 18,
      xpReward: 75,
      badge: `light-explorer`,
      badgeName: `Light Explorer`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Light is one of those things that seems totally obvious until you actually think about it. What IS light? Why are some things colorful and others black? How do mirrors work? What's a rainbow? All of these are about LIGHT, which is one of the most amazing forms of energy in the universe. We see, watch, photograph, read, and live by it. By the end of today, you'll know what's actually happening when you "see." Let's go.`,
          headline: `Light`,
          subtitle: `The energy that lets us see, and how it works`,
          visual: `/ue-assets/science/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Light Actually Is`,
          paragraphs: [
            `LIGHT is a form of ENERGY that travels in WAVES. It comes from many sources. The SUN is by far the biggest light source in our world. Other natural sources include fire, lightning, certain animals (like fireflies), and even some plants and ocean creatures (called BIOLUMINESCENCE). Artificial light comes from light bulbs, screens, lasers, and other technology. Wherever it comes from, light always behaves the same way: it travels in straight lines, very fast, until something happens to change its path.`,
            `Light is INCREDIBLY FAST. It travels at about 300,000 KILOMETERS PER SECOND in empty space. That's about 670 million miles per hour. Light from the Sun takes about 8 minutes to reach Earth, even though the Sun is 93 million miles away. Light from the nearest star besides our Sun takes over 4 years to get to us. Light from distant galaxies takes billions of years. When you look up at the night sky, you're actually looking back in time, seeing light that left those stars long ago.`,
          ],
          image: `/ue-assets/science/l13-s1-what-is-light.webp`,
          imageCaption: `Light: energy that travels in waves at 300,000 km/s.`,
          vocab: [
            { word: `light`,
              definition: `A form of energy that travels in waves at about 300,000 km/s. The Sun is the main natural source. Light is what lets us see.`,
              audioPrompt: `Light is a form of energy that travels in waves, {name}. It moves at about 300,000 kilometers per second in empty space. That's about 670 million miles per hour. Light from the Sun takes 8 minutes to reach Earth. Light from the nearest star besides our Sun takes over 4 years. When you look up at the night sky, you're seeing light from years ago. Light comes from natural sources like the Sun, fire, and lightning. It also comes from artificial sources like bulbs and screens.` },
            { word: `bioluminescence`,
              definition: `The ability of living things to produce their own light through chemical reactions. Fireflies, deep-sea fish, and certain jellyfish are examples.`,
              audioPrompt: `Bioluminescence is the ability of living things to produce their own light, {name}. Fireflies make light to attract mates. Deep-sea fish use glowing lures to attract prey in the dark ocean. Some jellyfish and squid glow to confuse predators. Certain types of plankton make the ocean water glow blue when disturbed at night. Bioluminescence is light made by chemical reactions inside living organisms, not from heat. It produces almost no heat compared to a bulb, which is why it's sometimes called cold light.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How We Actually See`,
          paragraphs: [
            `Light bounces off everything around you. When you look at an apple, what's actually happening is this: light from a source (the Sun, a lamp) hits the apple. Some of the light is ABSORBED by the apple (turning into heat). Some BOUNCES OFF and travels into your eye. Inside your eye, the lens focuses the light onto cells in the back of your eye (called rods and cones). These cells convert the light into electrical signals. Those signals travel through nerves to your brain, which interprets them as "I see an apple."`,
            `Different objects look different colors because they ABSORB and REFLECT different wavelengths of light. A red apple absorbs most colors but reflects red light, so red is what reaches your eye. A green leaf absorbs most colors but reflects green. Black objects absorb almost all colors and reflect almost none (which is why they look "dark"). White objects reflect almost all colors. The COLOR of an object isn't really "in" the object. It's about which wavelengths of light bounce off it and reach your eyes. Same object can look different colors under different light conditions, which is one reason photographs sometimes look different from what your eyes saw.`,
          ],
          image: `/ue-assets/science/l13-s2-seeing.webp`,
          imageCaption: `Light bounces. Eyes detect. Brain interprets. Vision happens.`,
          vocab: [
            { word: `reflection`,
              definition: `When light bounces off a surface. Most objects reflect some light back, which is how we see them. Mirrors reflect almost perfectly, which is why they show clear images.`,
              audioPrompt: `Reflection is when light bounces off a surface, {name}. Most objects reflect some of the light that hits them. That bounced light is what we see. When you look at an apple, light from the Sun or a lamp hits the apple, bounces off, and reaches your eyes. Mirrors reflect light very precisely, which is why they show clear images. Rough surfaces reflect light in many directions, which is why they don't show reflections clearly.` },
            { word: `absorption`,
              definition: `When light is soaked up by a material instead of bouncing off. Absorbed light usually turns into heat. Dark colors absorb more light than light colors.`,
              audioPrompt: `Absorption is when light is soaked up by a material instead of bouncing off, {name}. When light is absorbed, it usually turns into heat. Dark colors absorb more light, which is why black surfaces get hotter in sunlight than white ones. A black car parked in the Sun gets very hot because it absorbs most light. A white car stays cooler because it reflects most light. The color of an object depends on which wavelengths it absorbs and which it reflects.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Visible Spectrum and Beyond`,
          paragraphs: [
            `What humans call "light" is actually just the part of a much larger thing called the ELECTROMAGNETIC SPECTRUM that our eyes can detect. The colors of the VISIBLE SPECTRUM, in order of wavelength, are RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, and VIOLET. White light (like sunlight) is actually a mix of all these colors. When white light passes through a prism (or raindrops in the sky), it separates into the rainbow because each color has a slightly different wavelength.`,
            `Beyond what your eyes can see is even more light. INFRARED light is just past red on the spectrum. You can't see it, but you can feel it as heat (a hot stove gives off lots of infrared). Beyond infrared are radio waves, which carry TV and cell phone signals. On the other end, just past violet, is ULTRAVIOLET (UV) light. UV light can cause sunburns even though you can't see it. Beyond UV are X-rays (which doctors use to see your bones) and gamma rays (the highest-energy light, dangerous in high doses). All of these are the same basic type of energy. Your eyes just only detect a small slice in the middle.`,
          ],
          image: `/ue-assets/science/l13-s3-spectrum.webp`,
          imageCaption: `Red to violet: visible light. Beyond: infrared, UV, X-rays, and more.`,
          vocab: [
            { word: `spectrum`,
              definition: `The full range of light, from radio waves to gamma rays. Humans can only see a small middle slice (red through violet) called the visible spectrum.`,
              audioPrompt: `The spectrum is the full range of light, {name}. It goes from radio waves on one end to gamma rays on the other. Humans can only see a small middle slice. The visible spectrum is what we call the rainbow colors: red, orange, yellow, green, blue, indigo, violet. Beyond red is infrared, which you feel as heat. Beyond violet is ultraviolet, which can cause sunburns. Even further out are X-rays, used by doctors, and gamma rays from space.` },
            { word: `ultraviolet`,
              definition: `Light just past violet on the spectrum that human eyes cannot see. UV causes sunburns and is blocked by sunscreen. Bees can see ultraviolet, which helps them find flowers.`,
              audioPrompt: `Ultraviolet light, often called UV, is a type of light just past violet on the spectrum that human eyes cannot see, {name}. Even though you can't see UV, it can affect your body. Sunburns are caused by UV light from the Sun. Sunscreen blocks UV rays. Bees can see ultraviolet light, which helps them find nectar in flowers that have UV patterns invisible to humans. Some lights in museums and crime labs emit UV to reveal hidden details.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Reflection, Refraction, and Optics`,
          paragraphs: [
            `Light usually travels in straight lines, but it bends and bounces in interesting ways when it interacts with materials. REFLECTION is when light bounces off a surface (which is how mirrors work). REFRACTION is when light BENDS as it passes from one material to another (like from air into water). This is why a straw in a glass of water looks broken at the surface — light is bending where it enters the water, fooling your eyes.`,
            `Lenses use refraction to focus light. Your EYES contain lenses that focus light onto the back of your eye. EYEGLASSES use lenses to correct vision when your eye's natural lens doesn't focus right. CAMERAS use lenses to capture images. TELESCOPES use lenses (and mirrors) to gather faint light from distant objects. MICROSCOPES use lenses to magnify tiny things. Every optical instrument in human history is built on understanding how light bounces and bends. The ability to control light is one of humanity's most useful skills.`,
          ],
          image: `/ue-assets/science/l13-s4-optics.webp`,
          imageCaption: `Eyes, glasses, cameras, telescopes, microscopes. All shaped by light's behavior.`,
          vocab: [
            { word: `refraction`,
              definition: `When light bends as it passes from one material into another, like from air into water. This is why a straw in water can look broken at the surface, and how lenses work.`,
              audioPrompt: `Refraction is when light bends as it passes from one material into another, {name}. Like from air into water. Or from air into glass. The bending happens because light moves at different speeds in different materials. You can see refraction in everyday life. A straw in a glass of water looks broken at the water's surface because light bends where it enters the water. Eyeglasses, cameras, telescopes, and microscopes all use refraction in lenses to focus light. Without refraction, none of these would work.` },
            { word: `lens`,
              definition: `A curved piece of transparent material that bends light to focus it. Eyes, glasses, cameras, telescopes, and microscopes all use lenses to control light.`,
              audioPrompt: `A lens is a curved piece of transparent material that bends light to focus it, {name}. Your eyes contain natural lenses that focus light onto your retina, which allows you to see clearly. When your eye's lens doesn't focus correctly, you need glasses or contact lenses to correct it. Cameras use lenses to focus light onto a sensor or film. Telescopes use lenses and mirrors to gather faint light from distant objects. Microscopes use lenses to magnify tiny things. Lenses work because of refraction, bending light as it passes through.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenes about light. For each one, identify what's happening: REFLECTION (light bouncing off a surface), REFRACTION (light bending between materials), or ABSORPTION (light being soaked up and turned into heat or other energy)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `reflection`,  label: `Reflection`,  color: `#60A5FA`, description: `Light bouncing off a surface. How we see most things. Mirrors reflect perfectly.` },
            { id: `refraction`,  label: `Refraction`,  color: `#A78BFA`, description: `Light bending as it passes from one material into another, like air into water.` },
            { id: `absorption`,  label: `Absorption`,  color: `#F87171`, description: `Light being soaked up by an object, often turning into heat. Dark surfaces absorb more light.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `Someone looks into a mirror and sees their own face.` },
                { text: `The light traveling from a lamp hits the person, then bounces off them and hits the mirror.` },
                { text: `The mirror bounces the light back toward their eyes.` },
              ],
              correctAnswer: `reflection`,
              realWorldExample: `Mirrors are designed for almost perfect reflection.`,
              explanation: `Light bouncing off the mirror straight back. Pure reflection. Mirrors reflect light at very precise angles, which is why they create clear images.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `A drinking straw sits in a clear glass of water.` },
                { text: `Looking at it from the side, the straw appears to bend or break at the water's surface.` },
                { text: `If you take the straw out, it's perfectly straight.` },
              ],
              correctAnswer: `refraction`,
              realWorldExample: `The "broken straw" is one of the most everyday examples of refraction.`,
              explanation: `Light bending as it passes between air and water. Pure refraction. The straw isn't actually bent; the light traveling to your eyes is, which makes it LOOK bent.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `A black car sits in the Sun on a hot summer day.` },
                { text: `When you touch the car, it's painfully hot.` },
                { text: `A nearby white car in the same Sun feels much cooler.` },
              ],
              correctAnswer: `absorption`,
              realWorldExample: `Dark cars absorb more sunlight and get hotter.`,
              explanation: `Light energy being soaked up and turning into heat. Pure absorption. Dark colors absorb more light, which is why black cars and roofs get so hot in summer. White surfaces reflect most light, staying cooler.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `Sunlight passes through a glass prism.` },
                { text: `The light comes out the other side separated into a rainbow.` },
                { text: `Red, orange, yellow, green, blue, and violet are all visible.` },
              ],
              correctAnswer: `refraction`,
              realWorldExample: `Prisms separating light into rainbows is a classic refraction demonstration.`,
              explanation: `Tricky because it LOOKS like the prism is somehow creating colors. But white sunlight already contains all the colors mixed together. The prism BENDS each color slightly differently as light enters and leaves the glass. That's refraction. The amount of bending depends on the color's wavelength. Red bends least, violet bends most. The separation we see is refraction in action, with different colors bending different amounts.`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What IS light?`,
              options: [
                `An invisible solid`,
                `A form of energy that travels in waves at about 300,000 km per second`,
                `Just brightness`,
                `Only sunshine`,
              ],
              correctIndex: 1,
              explanation: `Light is energy that travels in waves. It moves incredibly fast (about 300,000 km/s in empty space). Light from the Sun takes 8 minutes to reach Earth.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `What ACTUALLY happens when you SEE an apple?`,
              options: [
                `Your eyes shoot beams at the apple`,
                `Light from a source bounces off the apple into your eyes, which convert it to signals your brain interprets`,
                `Magic`,
                `Apples emit their own light`,
              ],
              correctIndex: 1,
              explanation: `Light from the Sun or a lamp bounces off the apple. The bounced light enters your eyes. Cells convert the light into electrical signals. Your brain interprets those signals as "apple." This is the same basic process for everything you see.` },

            { id: `l13-q3`, format: `multiple-choice`,
              question: `Why does an apple look RED?`,
              options: [
                `Apples are red on the inside`,
                `It absorbs most colors of light and reflects red back toward your eyes`,
                `Red is the default color`,
                `It makes its own red light`,
              ],
              correctIndex: 1,
              explanation: `Color comes from which wavelengths of light an object reflects. A red apple absorbs most colors but reflects red. A leaf reflects green. Color isn't really "in" the object — it's about what light bounces off.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `What's the VISIBLE SPECTRUM?`,
              options: [
                `All possible light`,
                `The small slice of light that human eyes can see — red, orange, yellow, green, blue, indigo, violet`,
                `Only the Sun`,
                `Just white light`,
              ],
              correctIndex: 1,
              explanation: `The visible spectrum is the rainbow of colors human eyes can detect. It's a small middle slice of the much larger electromagnetic spectrum. Light beyond visible includes infrared, ultraviolet, X-rays, and more.` },

            { id: `l13-q5`, format: `true-false`,
              question: `True or false: When you look at distant stars, you're actually seeing light that left them years (or even billions of years) ago.`,
              correctAnswer: true,
              explanation: `True. Light takes time to travel. The nearest star besides our Sun is 4 years away by light. Distant galaxies are billions of years away. The night sky is essentially a view of the past.` },

            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is REFLECTION?`,
              options: [
                `Light disappearing`,
                `When light bounces off a surface`,
                `Light bending`,
                `Light absorbing`,
              ],
              correctIndex: 1,
              explanation: `Reflection is light bouncing off a surface. Mirrors reflect almost perfectly. Most objects reflect some light, which is how we see them. Rough surfaces reflect light in many directions, smooth surfaces reflect in regular patterns.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `What is REFRACTION?`,
              options: [
                `Bouncing`,
                `When light BENDS as it passes from one material into another (like air into water)`,
                `Heating up`,
                `Disappearing`,
              ],
              correctIndex: 1,
              explanation: `Refraction is light bending between materials. It's why a straw in water looks broken. Lenses use refraction to focus light, which is how eyes, cameras, glasses, telescopes, and microscopes all work.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `What kind of light makes a HOT STOVE feel warm even before you touch it?`,
              options: [
                `Visible light only`,
                `Infrared light, which we can't see but feel as heat`,
                `Magic`,
                `Cold light`,
              ],
              correctIndex: 1,
              explanation: `Hot objects give off lots of infrared light, which is invisible but felt as heat. Infrared is just past red on the spectrum. The hotter something is, the more it glows in different spectrum ranges. Very hot objects start glowing red, then orange, then yellow, then white as they get hotter.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Look around. Pick three colorful objects. For each, what color is it actually REFLECTING? What colors is it absorbing?` },
            { id: `r2`, text: `When you look at a distant star, you might be seeing it as it was hundreds of years ago. Does that change how you think about looking at the sky?` },
            { id: `r3`, text: `What's something you've seen with the help of a tool that uses light (a microscope, telescope, camera, microscope app on your phone)?` },
            { id: `r4`, text: `Different animals see different parts of the light spectrum. Bees see ultraviolet (invisible to us). Snakes see infrared (heat). What would it be like to see colors humans can't?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Light science underlies an enormous amount of modern technology. Cameras and phones use lenses. Doctors use X-rays and other parts of the light spectrum to see inside bodies. Solar panels convert light into electricity. Fiber optics carry internet signals around the world using pulses of light. Even simple things like sunglasses (which block UV) and clothing colors (light vs dark for hot vs cold weather) come from understanding how light works. Cosmo's favorite part: bioluminescence (light made by living things) is one of the most beautiful natural phenomena, and many ocean creatures use it.`,
          familyAdventure: `Family Prism Experiment (or Rainbow Hunt). If you have a prism, hold it in sunlight and watch the rainbow appear. If you don't, find any place where sunlight is being refracted: a glass of water on a sunny windowsill, a CD held in light, even a fine mist of water in the sun. Note the order of colors (always the same: red on the outside, violet on the inside). This is exactly what's happening in a rainbow after rain.`,
          creativePrompt: {
            intro: `Imagine being able to see ONE type of light beyond visible (infrared, ultraviolet, radio waves, or X-rays). Write about your first day with this new vision.`,
            floor: `Write at least 5 sentences. Pick which kind of light you can now see. Describe one thing that looks different now and one new thing you can detect.`,
            stretch: `Write 8 to 10 sentences. Describe at least three things that look totally different. Explain how having this vision would change your daily life.`,
            open: `Write as much as you want. Build a full first-person account. Include surprising things you'd see, problems that might arise (seeing too much can be overwhelming), and the most interesting discovery your new vision lets you make.`,
            frames: [
              `Today I gained the ability to see ___ light.`,
              `The first thing I noticed was ___.`,
              `Looking at a tree, I now see ___.`,
              `Looking at people, I can see ___.`,
              `What surprised me most was ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what light is, describe how we actually see, name parts of the spectrum beyond visible light, and understand reflection and refraction. Next lesson: light's close cousin. SOUND. Why it travels through air but not space, and how we hear. See you there. — Cosmo.`,
          badge: `light-explorer`,
          badgeName: `Light Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L13 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
