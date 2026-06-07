// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L15 — Physics: Waves — Light, Sound, and the EM Spectrum
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS4 (Waves and their Applications)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l15-v1";

const SCIENCE_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-15`,
      title: `Physics: Waves — Light, Sound, and the Electromagnetic Spectrum`,
      duration: 35,
      xpReward: 75,
      badge: `wave-rider`,
      badgeName: `Wave Rider`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson energy flowed through wires as electricity. Now we meet a completely different kind of energy transport: waves. Waves don't move matter — they move energy through patterns of oscillation. Sound is a wave. Light is a wave. Radio, X-rays, microwaves, and visible light are all the same thing — electromagnetic radiation — at different frequencies. Understanding waves means understanding how information and energy travel across the universe.`,
          headline: `Physics: Waves — Light, Sound, and the Electromagnetic Spectrum`,
          subtitle: `How energy travels as waves, from the sound in your ears to the light in your eyes and far beyond. A Case Study.`,
          visual: `/voyager-assets/science/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is A Wave?`,
          paragraphs: [
            `A wave is a disturbance that carries energy from one place to another, without carrying matter along with it. That last part is the surprising key. Drop a pebble in a pond: ripples spread outward, carrying energy across the water, yet a floating leaf just bobs up and down in place. The water doesn't travel outward; only the disturbance, the energy, does.`,
            `This is true of every wave. When sound crosses a room, the air doesn't rush from the speaker to your ear, each bit of air just vibrates back and forth, passing the disturbance along. A wave is energy on the move, rippling through a medium (or, for light, through space itself) while the stuff it travels through mostly stays put. The wave moves; the matter doesn't go with it.`,
            `Every wave has a few key properties. Wavelength is the distance between one peak and the next. Frequency is how many waves pass a point each second (in hertz). Amplitude is the height of the wave, how big the disturbance is. These properties, especially wavelength and frequency, determine almost everything about a wave, from the pitch of a sound to the color of light.`,
          ],
          image: `/voyager-assets/science/l15-s1-what-is-wave.webp`,
          imageCaption: `A WAVE is a disturbance that carries ENERGY from one place to another, WITHOUT carrying matter along with it, the surprising key. Drop a pebble in a pond: ripples spread outward carrying energy, yet a floating leaf just bobs up and down in place. The water doesn't travel out; only the disturbance does. Same for all waves: when sound crosses a room, the air doesn't rush to your ear, each bit just vibrates and passes the disturbance along. A wave is energy on the move, rippling through a medium (or, for light, through space itself) while the matter mostly stays put. Every wave has key properties: WAVELENGTH (distance between peaks), FREQUENCY (waves per second, in hertz), and AMPLITUDE (the wave's height). These, especially wavelength and frequency, determine almost everything, from a sound's pitch to light's color.`,
          vocab: [
            { word: `wave`,
              definition: `A disturbance that carries energy from one place to another without carrying matter along with it. Sound, light, and ripples are all waves.`,
              audioPrompt: `A wave, {name}, is a disturbance that carries energy from one place to another, but here's the surprising part: it doesn't carry the matter along with it. The ripple crosses the pond, but the water stays put, just bobbing up and down in place.` },
            { word: `wavelength`,
              definition: `The distance between one peak (or crest) of a wave and the next. Shorter wavelengths and longer wavelengths produce very different effects.`,
              audioPrompt: `Wavelength, {name}, is the distance from one peak of a wave to the next, the length of a single ripple. It's one of a wave's most important properties: a short wavelength and a long wavelength can mean completely different colors of light or pitches of sound.` },
            { word: `frequency and amplitude`,
              definition: `Frequency is how many waves pass a point each second (in hertz); amplitude is the height of the wave, how large the disturbance is.`,
              audioPrompt: `Frequency, {name}, is how many waves pass a point each second, measured in hertz, while amplitude is the height of the wave, how big the disturbance is. Frequency sets a sound's pitch or light's color; amplitude sets how loud or bright it is.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Sound: Waves In The Air`,
          paragraphs: [
            `Sound is a wave of vibrating air (or water, or any material). When something vibrates, a guitar string, your vocal cords, a speaker, it pushes on the surrounding air, creating a pattern of compressions and rarefactions, regions where air is squeezed together and spread apart, that ripple outward. Your ear catches these vibrations and your brain interprets them as sound.`,
            `Two wave properties shape what you hear. Frequency determines pitch: high-frequency waves (many vibrations per second) sound high-pitched, like a whistle; low-frequency waves sound low, like a bass drum. Amplitude determines loudness: bigger waves (larger amplitude) carry more energy and sound louder; smaller waves sound quieter. Pitch is frequency; loudness is amplitude.`,
            `Here's a crucial fact: sound needs a medium, air, water, or a solid, because it's a vibration of matter. In the vacuum of space, with no air to vibrate, there is no sound at all. Space is utterly silent. (Movies showing roaring explosions in space get the physics wrong.) Sound also travels faster through denser media, faster in water than air.`,
          ],
          image: `/voyager-assets/science/l15-s2-sound.webp`,
          imageCaption: `SOUND is a wave of vibrating air (or water, or any material). When something vibrates, a guitar string, your vocal cords, a speaker, it pushes on the air, creating COMPRESSIONS and RAREFACTIONS, regions squeezed together and spread apart, that ripple outward. Your ear catches these and your brain hears sound. Two properties shape what you hear: FREQUENCY sets PITCH, high-frequency waves sound high like a whistle, low-frequency sound low like a bass drum. AMPLITUDE sets LOUDNESS, bigger waves carry more energy and sound louder. Crucial fact: sound needs a MEDIUM, air, water, or solid, because it's a vibration of matter. In the vacuum of space, with no air, there is NO sound, space is utterly silent (movies get this wrong). Sound travels faster through denser media, faster in water than air.`,
          vocab: [
            { word: `sound wave`,
              definition: `A wave of vibrating matter (usually air), made of compressions and rarefactions, that your ear detects and your brain interprets as sound.`,
              audioPrompt: `A sound wave, {name}, is a wave of vibrating matter, usually air. Something vibrates, pushing the air into a rippling pattern of squeezed-together and spread-apart regions, which travels to your ear, where your brain turns it into the sound you hear.` },
            { word: `pitch and loudness`,
              definition: `Pitch is set by frequency (high frequency means high pitch); loudness is set by amplitude (bigger waves are louder). They are two separate properties.`,
              audioPrompt: `Pitch and loudness, {name}, are two separate things. Pitch comes from frequency, fast vibrations make a high note, slow ones make a low note. Loudness comes from amplitude, bigger waves carry more energy and sound louder. A note can be high and soft, or low and loud.` },
            { word: `medium`,
              definition: `The material a wave travels through, like air or water for sound. Sound needs a medium, so it cannot travel through the vacuum of space.`,
              audioPrompt: `A medium, {name}, is the material a wave travels through, like the air or water that carries sound. Because sound is a vibration of matter, it needs a medium, which is why space, having almost no matter, is completely silent. No air, no sound.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Light And The Electromagnetic Spectrum`,
          paragraphs: [
            `Light is also a wave, but a very different kind: an electromagnetic wave, a rippling disturbance in electric and magnetic fields. And here's one of the great revelations of physics: the visible light we see is just a tiny sliver of a vast family of electromagnetic waves, all identical in nature, differing only in their wavelength and frequency. This whole family is the electromagnetic spectrum.`,
            `From longest wavelength to shortest: radio waves (broadcasts, Wi-Fi), microwaves (cooking, phone signals), infrared (felt as heat), the thin band of visible light (red through violet, all our eyes detect), ultraviolet (causing sunburn), X-rays (seeing through skin), and gamma rays (the most energetic). Same wave, vastly different wavelengths.`,
            `Within visible light, wavelength is color. Red light has the longest wavelength our eyes see; violet the shortest, with the rainbow between. White light is all these colors mixed, which is why a prism splits sunlight into a rainbow. So the color you see and the radio in your car are the same phenomenon, electromagnetic waves at different points on one spectrum.`,
          ],
          image: `/voyager-assets/science/l15-s3-em-spectrum.webp`,
          imageCaption: `LIGHT is also a wave, but a different kind: an ELECTROMAGNETIC wave, a ripple in electric and magnetic fields. A great revelation of physics: the visible light we see is just a tiny sliver of a vast family of electromagnetic waves, all identical in nature, differing only in WAVELENGTH and frequency. This family is the ELECTROMAGNETIC SPECTRUM. From longest wavelength to shortest: RADIO waves (broadcasts, Wi-Fi), MICROWAVES (cooking, phones), INFRARED (felt as heat), the thin band of VISIBLE LIGHT (red to violet, all our eyes see), ULTRAVIOLET (sunburn), X-RAYS (seeing through skin), and GAMMA RAYS (most energetic). Same wave, vastly different wavelengths. Within visible light, wavelength IS color: red is longest, violet shortest, with the rainbow between. A prism splits white light into a rainbow by separating wavelengths.`,
          vocab: [
            { word: `electromagnetic wave`,
              definition: `A wave of rippling electric and magnetic fields, such as light. Unlike sound, it needs no medium and can travel through the vacuum of space.`,
              audioPrompt: `An electromagnetic wave, {name}, is a ripple in electric and magnetic fields, and light is one kind. Unlike sound, it needs no medium at all, which is why it can cross the empty vacuum of space, carrying the Sun's light and the glow of distant stars to us.` },
            { word: `electromagnetic spectrum`,
              definition: `The full family of electromagnetic waves, from radio to gamma rays, all the same in nature but differing in wavelength. Visible light is a tiny part.`,
              audioPrompt: `The electromagnetic spectrum, {name}, is the entire family of electromagnetic waves, radio, microwave, infrared, visible light, ultraviolet, X-rays, and gamma rays. They're all the same kind of wave, differing only in wavelength, and the light we see is just a tiny slice.` },
            { word: `wavelength is color`,
              definition: `Within visible light, the wavelength determines the color: red has the longest wavelength we see, violet the shortest, with the rainbow in between.`,
              audioPrompt: `Within visible light, {name}, wavelength is color. Red light has the longest wavelength our eyes can see, violet the shortest, and the rainbow runs between them. White light is all these colors mixed, which a prism can split back apart.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Waves Behave`,
          paragraphs: [
            `Waves do remarkable things. They reflect: bounce off surfaces, light off a mirror, sound off a canyon wall as an echo. They refract: bend when passing from one medium into another, which is why a straw looks broken in a glass of water and why lenses can focus light to form images in your eye, a camera, or a telescope.`,
            `Waves also interfere: when two waves overlap, they combine. Where peaks align with peaks, they add up and grow stronger; where a peak meets a trough, they cancel out. This is why noise-canceling headphones work, they produce a wave that cancels incoming sound, and why you see shimmering colors in a soap bubble. Diffraction lets waves bend around obstacles and spread through openings.`,
            `One more crucial difference from sound: light needs no medium. Because an electromagnetic wave is a self-sustaining ripple of electric and magnetic fields, it travels through the empty vacuum of space at the fastest speed anything can go, the speed of light. This is why sunlight and starlight cross the void to reach us, while the explosions that made those stars made no sound we could ever hear.`,
          ],
          image: `/voyager-assets/science/l15-s4-wave-behavior.webp`,
          imageCaption: `Waves do remarkable things. They REFLECT: bounce off surfaces, light off a mirror, sound off a canyon wall as an echo. They REFRACT: bend when passing from one medium to another, why a straw looks broken in water and why lenses focus light to form images in your eye, a camera, or a telescope. They INTERFERE: when two waves overlap, peaks aligning with peaks grow stronger, a peak meeting a trough cancels out, which is how noise-canceling headphones work and why soap bubbles shimmer. DIFFRACTION lets waves bend around obstacles and spread through openings. One crucial difference: LIGHT needs no medium. As a self-sustaining ripple of electric and magnetic fields, it crosses the empty vacuum of space at the fastest speed possible, the SPEED OF LIGHT. That's why sunlight and starlight reach us, while space stays silent.`,
          vocab: [
            { word: `reflection and refraction`,
              definition: `Reflection is a wave bouncing off a surface (an echo, a mirror); refraction is a wave bending as it passes from one medium into another, as light does in a lens.`,
              audioPrompt: `Reflection and refraction, {name}, are two things waves do. Reflection is bouncing off a surface, like an echo or your image in a mirror. Refraction is bending as a wave passes from one medium to another, which is how lenses focus light and why a straw looks broken in water.` },
            { word: `interference`,
              definition: `When two waves overlap and combine: aligned peaks add up and grow stronger, while a peak meeting a trough cancels out. It powers noise-canceling headphones.`,
              audioPrompt: `Interference, {name}, happens when two waves overlap and combine. Where their peaks line up, they reinforce and grow stronger; where a peak meets a trough, they cancel out. It's exactly how noise-canceling headphones erase sound, and why soap bubbles shimmer with color.` },
            { word: `speed of light`,
              definition: `The fastest speed anything can travel, at which light crosses the vacuum of space. Light needs no medium, so it can travel through empty space.`,
              audioPrompt: `The speed of light, {name}, is the fastest speed anything in the universe can travel, the speed at which light races across empty space. Because light needs no medium, it can cross the vacuum, which is how the Sun's light and the glow of distant stars reach your eyes.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. A wave carries energy without carrying matter, the leaf bobs while the ripple travels on. Its key properties are wavelength, frequency, and amplitude. Sound is a wave of vibrating matter: frequency sets pitch, amplitude sets loudness, and because it's a vibration of matter, sound needs a medium and cannot cross the silent vacuum of space.`,
            `Light is an electromagnetic wave, and visible light is a tiny sliver of the vast electromagnetic spectrum, radio, microwave, infrared, visible, ultraviolet, X-ray, gamma, all the same wave at different wavelengths. Within visible light, wavelength is color. Waves reflect, refract, interfere, and diffract. And unlike sound, light needs no medium, crossing empty space at the speed of light.`,
            `Now the case-study screen makes you the physicist with five puzzles: why space is silent while sunlight still reaches us, why a straw looks bent in water, how a prism splits white light into a rainbow, how noise-canceling headphones erase sound, and why lightning's flash beats its thunder. Reason with wave properties and how waves behave. Onward.`,
          ],
          image: `/voyager-assets/science/l15-s5-before.webp`,
          imageCaption: `Threads together. A WAVE carries energy without carrying matter, the leaf bobs while the ripple travels on. Key properties: WAVELENGTH, FREQUENCY, AMPLITUDE. SOUND is a wave of vibrating matter: frequency sets pitch, amplitude sets loudness, and it needs a MEDIUM, so it can't cross the silent vacuum of space. LIGHT is an ELECTROMAGNETIC wave, and visible light is a tiny sliver of the vast SPECTRUM, radio to gamma, all the same wave at different wavelengths, where wavelength IS color. Waves REFLECT, REFRACT, INTERFERE, and diffract. Unlike sound, light needs no medium, crossing empty space at the speed of light. The case-study screen gives five puzzles: silent space, the bent straw, the prism's rainbow, noise-canceling headphones, and lightning before thunder.`,
          vocab: [
            { word: `Doppler effect`,
              definition: `The change in a wave's observed frequency when its source moves, why a siren sounds higher approaching and lower receding, and how we detect moving galaxies.`,
              audioPrompt: `The Doppler effect, {name}, is why a siren sounds higher as it races toward you and lower as it speeds away: the motion squeezes or stretches the waves. Astronomers use the same effect on light to tell that distant galaxies are rushing away from us.` },
            { word: `echo`,
              definition: `A reflected sound wave that returns to you after bouncing off a distant surface, like a canyon wall, arriving slightly later than the original sound.`,
              audioPrompt: `An echo, {name}, is a sound wave that bounces off a distant surface, like a canyon wall, and travels back to your ears. Because it takes time to make the round trip, you hear it slightly after your original shout, a reflection of sound.` },
            { word: `light versus sound speed`,
              definition: `Light travels vastly faster than sound, which is why you see lightning's flash almost instantly but hear its thunder seconds later.`,
              audioPrompt: `Light travels vastly faster than sound, {name}, almost instantly compared to sound's slower journey through air. That's why you see a lightning flash right away but hear the thunder seconds later, and why counting those seconds tells you how far the storm is.` },
          ],
        },

        {
          id: `l15-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Waves`,
          intro: `{name}, you're the physicist now. Here are five real puzzles about waves, sound, and light. For each, reason with wave properties (wavelength, frequency, amplitude), the difference between sound and light, and how waves behave.`,
          cases: [
            {
              id: `c1`,
              title: `The silence of space`,
              type: `Sound needs a medium`,
              description: `In the vacuum of space, an enormous exploding star produces no sound whatsoever, an astronaut nearby would hear nothing. Yet the light from that same explosion crosses millions of miles of empty space to reach our eyes. Why can light cross space but sound cannot?`,
              questions: [
                `Why is there no sound in the vacuum of space?`,
                `Why can light travel through space when sound can't?`,
                `What does this reveal about the difference between the two kinds of waves?`,
              ],
              evaluation: `This puzzle gets to the deepest difference between sound and light, two kinds of waves that behave very differently because of what they're made of, and it dispels a misconception every space movie reinforces. The reason there's no sound in space comes down to what a sound wave actually is: a sound wave is a vibration of matter, a disturbance traveling through a medium like air, water, or a solid. Sound is made when something vibrates and pushes on the surrounding particles (air molecules, for instance), creating a ripple of compressions and rarefactions that passes from particle to particle. This means sound absolutely requires a medium, a material made of particles, to travel through. The vacuum of space is, by definition, almost completely empty, there are essentially no air molecules or other particles to vibrate and pass the disturbance along. With no medium, there's nothing to carry the sound wave, so sound simply cannot travel, and space is utterly silent. An exploding star, however violent, makes no sound that could reach a nearby astronaut, because there's no air (or other medium) between them to carry the vibration. (This is why those movie scenes of roaring explosions and screaming engines in space are physically impossible, space makes no such sounds.) Now, why can light cross that same empty space when sound can't? Because light is a fundamentally different kind of wave: an electromagnetic wave, a self-sustaining ripple of electric and magnetic fields. Crucially, an electromagnetic wave does not require a medium, it isn't a vibration of matter at all, but a disturbance in the electric and magnetic fields that can exist even in completely empty space. The oscillating electric and magnetic fields continuously regenerate each other as the wave travels, so the wave sustains itself and propagates through the vacuum with no particles needed, at the speed of light, the fastest speed in the universe. This is exactly why the light from the exploding star (and from the Sun, and from distant stars and galaxies) can cross the vast emptiness of space to reach our eyes, while no sound from any of those events ever could. What does this reveal about the two kinds of waves? It reveals their fundamental natures. Sound is a mechanical wave, a vibration that needs matter to travel through, so it's confined to places with a medium (air, water, solids) and is silenced by a vacuum. Light is an electromagnetic wave, a ripple of fields that needs no matter, so it travels freely through empty space (and also through transparent materials). This single difference, medium-dependent versus medium-independent, has enormous consequences: it's why we can see the Sun and distant stars (their light crosses the vacuum) but can never hear them, why space is silent, and why the entire universe communicates with our eyes across emptiness but never with our ears. The puzzle teaches the profound lesson that not all waves are the same: some are vibrations of matter (sound) and some are vibrations of fields (light), and that difference determines where they can and cannot go. The exploding star floods space with light we can see but silence we cannot hear, a perfect, dramatic demonstration that sound needs a medium and light does not.`,
            },
            {
              id: `c2`,
              title: `The broken straw`,
              type: `Refraction`,
              description: `Put a straight straw into a glass of water and look from the side: the straw appears bent or broken right at the water's surface, with the underwater part seeming to shift sideways. The straw is perfectly straight, you can feel that it is. So why does it look bent?`,
              questions: [
                `Why does the straw appear bent at the water's surface?`,
                `What happens to light as it passes from water into air?`,
                `What is this bending of light called, and where else do we use it?`,
              ],
              evaluation: `This familiar optical illusion is a perfect, everyday demonstration of refraction, the bending of light as it passes from one medium into another, and understanding it reveals how lenses, eyes, and cameras work. The straw looks bent because of what happens to light traveling from the water to your eyes. Here's the key fact: light travels at different speeds in different media, it moves slightly slower in water than in air (it's densest media that slow it most). When a light wave passes from one medium into another at an angle, this change in speed causes the wave to change direction, to bend. This bending is called refraction. Now trace what happens with the straw: light reflects off the underwater part of the straw and travels up through the water, then crosses the boundary from water into air on its way to your eyes. As that light passes from the water (where it was traveling slower) into the air (where it travels faster), it bends at the surface. Your brain, however, assumes light always travels in straight lines (which it does, until it crosses between media), so it traces the bent light rays back in a straight line and "places" the underwater part of the straw in a shifted position, making it appear displaced and bent at exactly the point where the light changed media, the water's surface. The straw is perfectly straight, as your fingers confirm, but the light coming from its underwater portion is bent on its way to your eyes, so the straw appears broken or bent at the waterline. What happens to the light as it passes from water into air? It speeds up and bends (refracts) away from its original path, because of the change in speed between the two media. This is the heart of refraction: a change in a wave's speed as it crosses a boundary causes a change in its direction. What is this bending called, and where else do we use it? It's called refraction, and it is one of the most useful wave behaviors in all of technology and nature. We harness refraction whenever we use lenses: a lens is a piece of glass or plastic shaped specifically to bend (refract) light in a controlled way to focus it. The lens in your own eye refracts incoming light to focus a sharp image on your retina, this is how you see (and eyeglasses and contact lenses add extra refraction to correct vision when your eye's focusing isn't quite right). Camera lenses refract light to focus images onto a sensor; magnifying glasses, microscopes, and telescopes all use refraction to bend light and form magnified images, letting us see the very small and the very distant. Refraction also creates beautiful natural phenomena: it's part of why a pool looks shallower than it really is (light from the bottom bends at the surface), why mirages appear on hot roads (light bends through layers of air at different temperatures), and, combined with dispersion, how rainbows form. So the bent straw isn't a trick of the eye in the sense of an error, it's your eye and brain faithfully responding to light that genuinely bent as it crossed from water to air. The deep lesson is that light, like all waves, changes direction when its speed changes at the boundary between media, and that this refraction, far from being a mere curiosity, is the very principle that lets lenses focus light, that lets your eyes see, and that built every camera, microscope, and telescope ever made.`,
            },
            {
              id: `c3`,
              title: `The rainbow in the prism`,
              type: `Wavelength and color`,
              description: `Shine plain white sunlight through a glass prism and it emerges split into a full rainbow of colors, red, orange, yellow, green, blue, violet, spread out in a band. The prism is colorless glass, and the light going in is plain white. Where do all the colors come from?`,
              questions: [
                `If the light going in is white, where do the colors come from?`,
                `Why does the prism separate white light into different colors?`,
                `How does this connect to wavelength and the rainbow?`,
              ],
              evaluation: `This beautiful experiment, famously studied by Isaac Newton, reveals a profound truth about light and color, and connects directly to wavelength as the basis of color. The colors don't come from the prism, the prism adds nothing; the colors were hidden inside the white light all along. Here's the key insight: white light is not a single, pure color, it's actually a mixture of all the colors of the visible spectrum (red, orange, yellow, green, blue, violet) combined together. When all these colors of light enter your eye at once, your brain perceives the mixture as "white." The prism's job is simply to separate that mixture back into its component colors, revealing what was always there. Why does the prism separate the colors? Because of refraction (the bending of light from the previous case), combined with a crucial fact: different colors of light have different wavelengths, and they refract (bend) by different amounts. Within visible light, color is determined by wavelength, red light has the longest wavelength, violet the shortest, with orange, yellow, green, and blue in between. When white light passes through the prism's angled glass, all the colors refract (bend), but each color bends by a slightly different amount because of its different wavelength: shorter-wavelength light (violet, blue) bends more, and longer-wavelength light (red) bends less. Since each color bends by a different amount, they fan out and separate, emerging from the prism spread into a band with red on one end and violet on the other, the full rainbow. This spreading-by-wavelength is called dispersion. So the prism doesn't create the colors; it sorts the colors that were mixed together in the white light, by bending each wavelength a different amount. How does this connect to wavelength and the rainbow? Directly and beautifully. It confirms the lesson's core idea that within visible light, wavelength is color, each color simply is light of a particular wavelength. And it explains rainbows in the sky: a rainbow forms when sunlight (white light) passes through raindrops, each tiny droplet acts like a miniature prism, refracting and separating the sunlight into its component colors by wavelength, with red on the outer edge and violet on the inner edge of the arc. The rainbow is dispersion happening across countless raindrops at once. This experiment was revolutionary because it overturned the old belief that color was added to light by the prism (or by objects). Newton showed instead that white light already contains all colors, and that color is an intrinsic property of light tied to its wavelength. It also explains why objects appear colored: a red apple looks red because it reflects the red wavelengths of light and absorbs the others; a blue shirt reflects blue wavelengths. Color isn't in the object alone, it's in the wavelengths of light. The deep lesson is that white light is a hidden rainbow, a blend of all visible wavelengths, and that the prism, through wavelength-dependent refraction (dispersion), simply unmixes it, separating each color by how much it bends. The colors come not from the colorless glass but from the light itself, which was secretly composed of every color all along, each one a different wavelength of the same electromagnetic wave.`,
            },
            {
              id: `c4`,
              title: `Erasing sound with sound`,
              type: `Interference`,
              description: `Noise-canceling headphones make the roar of an airplane cabin nearly vanish, not by blocking your ears, but by actively producing their own sound. It seems impossible: how can adding more sound make things quieter? Using waves, explain how sound can cancel sound.`,
              questions: [
                `How can producing more sound make things quieter?`,
                `What must the headphones' sound wave look like compared to the noise?`,
                `What is this wave behavior called?`,
              ],
              evaluation: `This seemingly paradoxical technology, making things quieter by adding sound, is a brilliant real-world application of wave interference, one of the most important behaviors of all waves. The resolution lies in understanding what happens when two waves overlap and combine, a phenomenon called interference. When two waves occupy the same space at the same time, they add together, but how they add depends on how their peaks and troughs line up. If the peaks of one wave align with the peaks of the other (and troughs with troughs), they reinforce each other and combine into a bigger wave, this is constructive interference, and it makes the result stronger (louder, for sound). But if the peaks of one wave align with the troughs of the other, they cancel each other out, the upward push of one wave's peak is exactly counteracted by the downward pull of the other wave's trough, leaving little or nothing. This is destructive interference, and it's the secret behind noise-canceling headphones. Here's how the headphones work: a tiny microphone on the headphone listens to the incoming noise (say, the steady roar of an airplane cabin). The headphone's electronics then very rapidly generate a new sound wave that is the exact "opposite" (inverted) of that incoming noise, a wave with the same frequency and amplitude, but with its peaks where the noise has troughs, and its troughs where the noise has peaks (this is called being "out of phase" by half a wavelength). When this carefully crafted anti-noise wave combines with the original noise wave in your ear, the peaks of one meet the troughs of the other, and through destructive interference, they cancel out, dramatically reducing the sound you actually hear. So producing more sound makes things quieter because the added sound is precisely designed to cancel the unwanted sound through destructive interference, not to add to it but to annihilate it. What must the headphones' sound wave look like compared to the noise? It must be the mirror image, the inverse, of the noise: same frequency and amplitude (so it matches the noise wave point for point), but flipped, so that wherever the noise wave goes up, the anti-noise wave goes down, and vice versa. Peak-meets-trough everywhere, producing cancellation. (This is why noise-canceling works best on steady, predictable sounds like engine drone, which are easy to match and invert, and less well on sudden, unpredictable sounds.) What is this wave behavior called? Interference, specifically destructive interference (the canceling kind), as opposed to constructive interference (the reinforcing kind). Interference is a universal property of all waves, not just sound. The same phenomenon, where overlapping waves reinforce or cancel depending on how their peaks and troughs align, explains the shimmering colors in a soap bubble or oil slick (light waves interfering), the patterns in ripple tanks, and crucial experiments revealing the wave nature of light. The deep lesson is that waves don't just pass through each other unchanged when they overlap, they combine, and depending on their alignment, they can add up to something bigger or cancel to nothing. Noise-canceling headphones are destructive interference engineered on purpose: by generating a wave that is the perfect opposite of unwanted noise, they use sound to erase sound, a beautiful, counterintuitive triumph of understanding how waves combine. Adding the right sound, the inverted mirror of the noise, doesn't make more noise; it makes silence.`,
            },
            {
              id: `c5`,
              title: `Flash before thunder`,
              type: `Speed of light vs. sound`,
              description: `During a thunderstorm, you see the flash of lightning, and then, several seconds later, you hear the crash of thunder, even though the lightning and thunder happen at the very same instant. The farther away the storm, the longer the gap. Why does the flash arrive so far ahead of the sound?`,
              questions: [
                `If lightning and thunder happen together, why don't you see and hear them together?`,
                `What does the time gap tell you about light versus sound?`,
                `Why does the gap grow longer when the storm is farther away?`,
              ],
              evaluation: `This common, dramatic experience is a perfect demonstration of the enormous difference between the speed of light and the speed of sound, and it even gives you a practical way to measure how far away a storm is. The crucial fact is that the lightning flash and the thunderclap are produced at the same instant, by the same event (the lightning bolt heats the air explosively, producing both the bright flash of light and the loud sound of thunder simultaneously). So if they happen together, why don't you see and hear them together? Because light and sound travel at vastly different speeds. Light is an electromagnetic wave and travels at the speed of light, the fastest speed in the universe, almost incomprehensibly fast. The light from the lightning reaches your eyes essentially instantly, in a tiny fraction of a second, even from miles away. Sound, however, is a much slower wave, a vibration traveling through the air, moving roughly a million times slower than light. The thunder, traveling at the speed of sound, takes a noticeable amount of time to cover the distance from the lightning to your ears, several seconds for each mile or so. So you see the flash almost the moment it happens, but the sound of the thunder lags far behind, arriving seconds later, because it travels so much more slowly through the air. What does the time gap tell you about light versus sound? It directly reveals that light is enormously faster than sound. The gap exists entirely because of this speed difference: if light and sound traveled at the same speed, you'd see and hear the lightning together. The fact that there's a multi-second delay, despite both starting at the same instant, is vivid proof of how much faster light is. Why does the gap grow longer when the storm is farther away? Because the farther away the lightning is, the longer it takes the slow-moving sound (thunder) to travel that greater distance to reach you, while the fast-moving light still arrives almost instantly regardless of distance. The light's travel time barely changes (it's so fast that even from many miles, it arrives in a tiny fraction of a second), but the sound's travel time grows in direct proportion to the distance. So a nearby strike has a short gap (you hear the thunder almost right after the flash), while a distant strike has a long gap (the thunder rumbles in many seconds later). This gives you a wonderful practical tool: because sound travels roughly one mile every five seconds (about a kilometer every three seconds), you can estimate the storm's distance by counting the seconds between the flash and the thunder and dividing, count five seconds, and the lightning is about a mile away; count ten, about two miles. As a storm approaches, the gap shrinks; as it moves away, the gap grows, letting you track the storm by ear and eye. The deep lesson connects to the fundamental nature of the two waves: light (an electromagnetic wave needing no medium) travels at the universe's top speed, while sound (a mechanical wave vibrating through air) crawls along comparatively slowly. The flash-before-thunder gap is the speed-of-light-versus-speed-of-sound difference made personal and measurable, a difference so vast that across just a few miles, light wins the race by many full seconds. Every thunderstorm is a giant physics demonstration, showing you, flash by flash and rumble by rumble, just how astonishingly much faster light is than sound.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what is a wave, and how do sound and light fundamentally differ? Explain why space is silent but not dark, why a straw looks bent, and how noise-canceling headphones work. Which case most changed how you understand your senses? In 5-6 sentences.`,
          reflectionPrompt: `Everything you see and hear reaches you as waves, colors as ripples of light, sounds as ripples of air, an invisible language your senses translate into the world you experience. How does it feel to know that your entire sensory reality is built from waves?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a wave?`,
              options: [
                `A chunk of matter that physically travels from one place to another.`,
                `A disturbance that carries energy without carrying matter along with it.`,
                `A material that completely blocks all energy from passing through it.`,
                `A force that only ever pushes objects in a single direction.`,
              ],
              correctIndex: 1,
              explanation: `A wave is a disturbance that carries energy from place to place without carrying matter along (the leaf bobs while the ripple travels on). The distractors describe traveling matter, a blocker, or a one-way force.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `In a sound wave, what determines the pitch you hear?`,
              options: [
                `The amplitude, or height, of the sound wave.`,
                `The color of the object making the sound.`,
                `The temperature of the air in the room.`,
                `The frequency, how many waves pass each second.`,
              ],
              correctIndex: 3,
              explanation: `Pitch is set by frequency: high frequency means high pitch, low frequency means low pitch. Amplitude sets loudness, not pitch; the distractors name amplitude, color, and temperature instead.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is there no sound in the vacuum of space?`,
              options: [
                `Sound needs a medium to travel through, and space has almost no matter.`,
                `Space is simply too cold for any sound to exist there.`,
                `Sound travels so fast in space that humans cannot hear it.`,
                `Sound turns into light the moment it enters outer space.`,
              ],
              correctIndex: 0,
              explanation: `Sound is a vibration of matter, so it needs a medium; the near-empty vacuum of space has no matter to carry it, leaving space silent. The distractors blame temperature, speed, or a false sound-to-light conversion.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the electromagnetic spectrum?`,
              options: [
                `A device used to measure the loudness of different sounds.`,
                `The full family of electromagnetic waves, from radio to gamma rays.`,
                `Only the band of light that human eyes can actually see.`,
                `A list of all the chemical elements arranged by their mass.`,
              ],
              correctIndex: 1,
              explanation: `The electromagnetic spectrum is the whole family of electromagnetic waves, radio, microwave, infrared, visible, ultraviolet, X-ray, gamma, all the same wave at different wavelengths. The distractors confuse it with a sound meter, just visible light, or the periodic table.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Within visible light, what determines the color we see?`,
              options: [
                `The loudness, or amplitude, of the light wave.`,
                `The temperature of the object emitting the light.`,
                `The wavelength of the light, red is longest, violet is shortest.`,
                `Whether the light is traveling through air or through space.`,
              ],
              correctIndex: 2,
              explanation: `Within visible light, wavelength is color: red has the longest wavelength we see, violet the shortest, with the rainbow between. The distractors name amplitude, temperature, or medium instead.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does a straight straw look bent at the surface of a glass of water?`,
              options: [
                `The water chemically bends the solid straw while it is submerged.`,
                `Light refracts, bending as it passes from the water into the air.`,
                `The straw really does break the moment it enters the water.`,
                `Sound waves from the water push the straw out of shape.`,
              ],
              correctIndex: 1,
              explanation: `Light bends (refracts) as it passes from water into air because its speed changes, so the submerged part appears shifted, making the straight straw look bent. The distractors invoke chemistry, real breakage, or sound.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How do noise-canceling headphones make sound quieter?`,
              options: [
                `They produce a wave that cancels the noise through destructive interference.`,
                `They simply use thick foam to physically block your ear canals.`,
                `They speed up the noise waves until they are too fast to hear.`,
                `They turn the incoming sound waves into harmless light waves.`,
              ],
              correctIndex: 0,
              explanation: `They generate an inverted "anti-noise" wave whose peaks meet the noise's troughs, canceling it through destructive interference. The distractors describe passive blocking, speeding up waves, or a sound-to-light conversion.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `During a storm, why do you see lightning before you hear the thunder?`,
              options: [
                `The lightning actually happens several seconds before the thunder.`,
                `Thunder is quiet and takes time for your ears to notice it.`,
                `Light travels vastly faster than sound, so the flash arrives first.`,
                `The thunder has to bounce off the clouds before reaching you.`,
              ],
              correctIndex: 2,
              explanation: `Lightning and thunder happen together, but light travels vastly faster than sound, so the flash reaches you almost instantly while the slower thunder lags behind. The distractors claim they happen at different times, blame loudness, or invent a bounce.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Sound and light are exactly the same kind of wave, and both can travel through the empty vacuum of space.`,
              correctAnswer: false,
              explanation: `False, and understanding why reveals the single most important difference between the two kinds of waves we encounter every day. Sound and light are both waves, but they are fundamentally different kinds of waves, and this difference determines where each can and cannot travel. Sound is a mechanical wave: it is a vibration of matter, a disturbance that travels by making particles (air molecules, water, or the atoms of a solid) vibrate and pass the disturbance along from one particle to the next. Because sound is literally a vibration of matter, it absolutely requires a medium, a material made of particles, to travel through. It moves through air, water, wood, metal, anything with particles to carry the vibration, but it cannot travel through a true vacuum, because there are no particles there to vibrate. This is exactly why space, which is very nearly an empty vacuum, is silent: there's no medium to carry sound. Light, by contrast, is an electromagnetic wave: it is not a vibration of matter at all, but a self-sustaining ripple of electric and magnetic fields. These oscillating fields regenerate each other as the wave travels, so an electromagnetic wave needs no medium, no particles, nothing material, to propagate. It can travel through the completely empty vacuum of space (and also through transparent materials like air, water, or glass). This is precisely why we can see the Sun, the Moon, and distant stars and galaxies: their light crosses the vast emptiness of space to reach us, even though no sound from those objects ever could. So the two claims in the statement are both wrong. First, sound and light are NOT the same kind of wave: sound is a mechanical wave (a vibration of matter), while light is an electromagnetic wave (a ripple of fields), they are different in their fundamental nature, not just their details. Second, they do NOT both travel through a vacuum: light travels beautifully through the vacuum of space, but sound cannot travel through a vacuum at all, because it has no matter to vibrate. This difference has enormous, observable consequences: it's why space is silent yet not dark (light crosses it, sound cannot), why an explosion on the Sun floods us with light and warmth but reaches us in total silence, and why the entire universe communicates with our eyes across emptiness but never with our ears. The statement conflates two profoundly different phenomena. So it is false: sound and light are different kinds of waves, and only light, the electromagnetic wave needing no medium, can cross the vacuum of space; sound, a vibration of matter, cannot.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "A radio wave, the microwave that heats my food, the infrared heat I feel from a fire, the visible light I see, and the X-ray at the doctor are all completely different, unrelated things with nothing in common." Using the lesson, what's the best response?`,
              options: [
                `The student is right; these are entirely unrelated, separate phenomena.`,
                `They're related only because they all happen to be invisible to the eye.`,
                `They are all the very same kind of wave, electromagnetic waves, differing only in their wavelength and frequency; together they form one continuous electromagnetic spectrum, and visible light is simply the narrow band of it our eyes happen to detect, so radio, microwave, infrared, light, and X-rays are one phenomenon in many guises.`,
                `They are all really sound waves, just at pitches too high for us to hear.`,
              ],
              correctIndex: 2,
              explanation: `Far from unrelated, all of these are electromagnetic waves, the same phenomenon differing only in wavelength and frequency, forming one continuous spectrum in which visible light is just the band our eyes detect. The distractors deny the connection, mislabel them as merely "invisible," or wrongly call them sound waves.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-senses`, category: `Your reality is waves`, prompt: `Everything you see and hear reaches you as waves, colors as ripples of light, sounds as ripples of air. How does it feel to know your entire sensory reality is built from waves your body translates into experience?` },
            { id: `reflect-hidden`, category: `The hidden spectrum`, prompt: `Our eyes detect only a sliver of the electromagnetic spectrum; vast realms of radio, infrared, and X-rays surround us unseen. What does it stir in you to know reality is far wider than your senses can show?` },
            { id: `reflect-silence`, category: `Silent and bright`, prompt: `Space carries the light of every star to your eyes, yet remains utterly silent. Does it move you that the universe speaks to us endlessly in light while saying nothing at all in sound?` },
            { id: `reflect-heritage`, category: `Teaching waves`, prompt: `Caro, you're building science for conscious families. How would you help a child feel that sound and light are both waves, using a pond ripple, a vibrating string, or a prism's rainbow, so the idea becomes something they can see?` },
            { id: `reflect-unity`, category: `One phenomenon, many guises`, prompt: `Radio, heat, color, and X-rays seem utterly different, yet are all one wave at different wavelengths. What does it stir in you that such variety hides a single underlying unity?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `White light looks like a single thing, but holds every color hidden inside it. Where else might something that appears simple and singular actually contain a hidden richness, if you knew how to separate it out?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Wave Watchers`,
            duration: `One afternoon`,
            description: `Turn an afternoon into an exploration of the waves that secretly carry everything you see and hear. Start with the nature of a wave: drop a pebble in a bowl, puddle, or pond and watch ripples spread out, then float a small leaf or cork and notice it bobs up and down in place while the wave travels past, proving a wave carries energy, not matter. Make waves on a stretched rope or a Slinky and see wavelength (distance between bumps) and amplitude (height of bumps), then shake faster to raise the frequency. Explore sound as vibration: touch your throat while humming and feel the vibration; sprinkle salt or rice on a drum or stretched plastic and watch it dance when you make sound nearby; pluck rubber bands of different tightness and lengths to hear how faster vibration (higher frequency) makes higher pitch, while plucking harder (more amplitude) makes it louder, separating pitch from loudness. Show that sound needs a medium: put a ticking timer or buzzing phone in a sealed container and notice how muffled it gets, and discuss why space is silent. Explore light and color: use a prism, a glass of water in sunlight, or a CD/DVD to split white light into a rainbow, revealing that white light contains all colors (each a different wavelength). Look at how a straw or pencil appears bent in a glass of water (refraction), and how a magnifying glass or water droplet bends light to magnify (lenses). Find reflection in mirrors and echoes (shout in a large empty room or near a wall). Hunt the invisible spectrum around you: the remote control (infrared), the microwave oven, the Wi-Fi and phone signals (radio/microwave), the warmth of sunlight or a heater (infrared), and sunscreen (blocking ultraviolet), all electromagnetic waves we can't see. Time the gap between a distant flash and its sound, or between seeing someone clap far away and hearing it, to sense how much faster light is than sound. The goal is to reveal that the entire world of sight and sound, everything your senses deliver, is built from waves rippling through air and space, an invisible language your body constantly translates into the reality you experience.`,
          },
          projectOption: {
            title: `The Wave Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Design experiments and demonstrations that explore the behavior of waves, sound, and light, becoming a physicist who reveals the hidden wave-nature of the sensory world. Week 1, explore sound and wave properties: investigate how pitch depends on frequency by building simple instruments, rubber-band "guitars" with different tensions and lengths, bottles filled with different water levels, or a xylophone of varied objects, and document how changing the vibration changes the pitch, and how changing how hard you play changes the loudness (separating frequency/pitch from amplitude/loudness). Demonstrate that sound is vibration (salt dancing on a drum) and explore whether sound passes through different materials. If possible, explore reflection (echoes) and even resonance. Week 2, explore light and the spectrum: investigate refraction (how light bends in water, lenses, the bent-straw effect), dispersion (splitting white light into a rainbow with a prism, water, or a CD, showing white light contains all colors/wavelengths), and reflection (mirrors). Explore how lenses or water droplets bend light to magnify or focus, connecting to how eyes and cameras work. Investigate the invisible spectrum: demonstrate that a TV remote uses invisible infrared (many phone cameras can "see" it), and research/explain other parts of the electromagnetic spectrum and their uses (radio, microwave, infrared, ultraviolet, X-ray, gamma). Throughout, connect everything to the core ideas: waves carry energy not matter; wavelength, frequency, and amplitude define a wave; sound is a mechanical wave needing a medium while light is an electromagnetic wave that crosses empty space; and waves reflect, refract, and interfere. Produce your final piece, a demonstration video with narration, a slide deck, or a lab-report-style writeup, that presents your experiments, explains the wave physics behind each, and reflects on the astonishing truth that nearly everything we sense reaches us as waves, with visible light just a tiny slice of a vast, mostly invisible spectrum. The aim is to experience waves as physicists do: as the rippling, unifying language in which light, sound, color, heat, and signal all speak, and which you can probe, split, bend, and understand through experiments of your own design.`,
            offerToParent: `Parent: opt your child into the Wave Investigation project. Exploring how pitch depends on frequency and loudness on amplitude with homemade instruments, demonstrating that sound is vibration needing a medium, and investigating how light refracts, reflects, and splits into a rainbow (showing white light holds all colors/wavelengths), directly develops the core NGSS wave concepts: wave properties, the difference between mechanical waves (sound) and electromagnetic waves (light), and wave behaviors like reflection, refraction, and interference. Revealing the invisible electromagnetic spectrum (infrared remotes, Wi-Fi, ultraviolet) and connecting waves to how we see and hear makes abstract physics vivid and unforgettable, while building experimental design, observation, and scientific reasoning. It's rigorous, hands-on, standards-aligned work.`,
          },
          identityQuestion: `If you become someone who understands that everything you see and hear arrives as waves, who knows why space is silent yet bright, why a prism holds a rainbow, and that visible light is a sliver of a vast unseen spectrum, what kind of thinker does that make you, a person who comprehends the rippling, invisible language in which the universe reaches your senses, that someone who takes sight and sound for granted as simple, obvious facts never can?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who understands that all I see and hear arrives as waves.`,
            `A thinker who knows visible light is a sliver of a vast spectrum.`,
            `Someone who grasps why space is silent yet still full of light.`,
          ],
          saveKey: `identity_responses_sci_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifteen lessons in, three-quarters of the way through, and you've come to understand the rippling, invisible language in which the universe reaches your senses: waves. You learned that a wave carries energy from place to place without carrying matter along, the leaf bobs while the ripple travels on, and that wavelength, frequency, and amplitude are the simple properties defining every wave. You explored sound as a wave of vibrating matter, where frequency sets pitch and amplitude sets loudness, and discovered the profound fact that sound needs a medium, so the vacuum of space is utterly silent. Then you met light, an electromagnetic wave, and one of the great revelations of physics: that the visible light we see is just a tiny sliver of the vast electromagnetic spectrum, radio, microwave, infrared, visible, ultraviolet, X-ray, gamma, all the same wave at different wavelengths, with wavelength itself being color. You learned how waves reflect, refract, and interfere, and that unlike sound, light needs no medium, crossing the empty vacuum at the speed of light. As a physicist, you reasoned through real puzzles: why space is silent yet bright, why a straw looks bent, how a prism unmixes white light into a rainbow, how noise-canceling headphones erase sound with sound, and why lightning's flash beats its thunder. You now see that your entire sensory reality is built from waves. We've journeyed through physics, motion, forces, momentum, energy, electricity, and waves, the fundamental laws of the physical world. Next, we turn from physics to the planet itself: Earth science, and the great interacting systems that shape our world. Onward, {name}. — Cosmo`,
          badge: `wave-rider`,
          badgeName: `Wave Rider`,
          xpEarned: 75,
          competencies: [
            `Understands a wave as energy traveling without carrying matter, defined by wavelength, frequency, and amplitude`,
            `Knows sound is a mechanical wave where frequency sets pitch and amplitude sets loudness`,
            `Understands that sound needs a medium and cannot travel through the vacuum of space`,
            `Knows light is an electromagnetic wave and that visible light is a small part of the electromagnetic spectrum`,
            `Understands that within visible light, wavelength determines color`,
            `Explains wave behaviors: reflection, refraction, and interference`,
            `Knows that light needs no medium and travels through space at the speed of light`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Earth Science — Earth Systems and Interactions`,
            hook: `How the great systems of our planet, rock, water, air, and life, interact to shape the world we live on. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L15 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
