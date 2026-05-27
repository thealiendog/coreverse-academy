// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L07 — Earth: Our Home Planet
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-ESS2-1, 4-ESS2-1 — Earth's systems interact;
//            patterns of Earth's features
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — Earth's structure, plate tectonics, what makes
//        Earth habitable, our place in the solar system
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-07`,
      title: `Earth: Our Home Planet`,
      duration: 18,
      xpReward: 75,
      badge: `earth-explorer`,
      badgeName: `Earth Explorer`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we explored the most amazing animal you know (you). Today we zoom WAY out and look at the place your body lives. EARTH. The third planet from the Sun. About 4.5 billion years old. The only place in the known universe where we've found life. By the end of today, you'll know what's inside Earth, why mountains and earthquakes happen, and what makes our home planet special. Let's go.`,
          headline: `Earth`,
          subtitle: `The amazing planet we all share, and what makes it special`,
          visual: `/ue-assets/science/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's Inside Earth`,
          paragraphs: [
            `Earth might LOOK like a solid ball, but underneath the surface, it's organized into LAYERS. The CRUST is the outermost layer where you and I live. It's mostly cool, hard rock, and it's surprisingly thin (only about 5-70 km thick, like the skin of an apple compared to the apple). Below the crust is the MANTLE, a hot layer of rock that flows slowly like extremely thick honey over millions of years. The mantle is about 2,900 km thick. Below that is the OUTER CORE, made of liquid molten iron and nickel. At the very center is the INNER CORE, a solid ball of iron and nickel, hotter than the surface of the Sun.`,
            `Earth has been around for about 4.5 BILLION years. That number is hard to grasp. If you imagined Earth's history as a 24-hour day, single-celled life appeared around 4am, multi-celled life around 8pm, dinosaurs lived in the late evening, and humans showed up in the last few seconds before midnight. We're brand new on this planet. The Earth has done most of its existing without us, and will keep going long after.`,
          ],
          image: `/ue-assets/science/l07-s1-layers.webp`,
          imageCaption: `Crust, mantle, outer core, inner core. Layers from surface to center.`,
          vocab: [
            { word: `crust`,
              definition: `The outermost layer of Earth, where life exists. Made of cool, solid rock. About 5-70 km thick — very thin compared to the planet's whole size.`,
              audioPrompt: `The crust is the outermost layer of Earth, {name}. It's where you and I live. It's made of cool, solid rock. Continents are part of the crust. So are the ocean floors. The crust is between about 5 kilometers thick (under the oceans) and 70 kilometers thick (under big mountains). Compared to the whole planet, that's thin. The crust is like the skin of an apple compared to the rest of the apple. Below the crust is the mantle, a much thicker layer of hot rock.` },
            { word: `mantle`,
              definition: `The thick layer of rock below Earth's crust. Makes up most of Earth's volume. Hot enough to flow slowly over millions of years, driving the movement of tectonic plates.`,
              audioPrompt: `The mantle is the thick layer of rock below Earth's crust, {name}. It makes up most of Earth's volume, stretching about 2,900 kilometers from the base of the crust to the outer core. The mantle is made of rock that's hot enough to flow slowly over millions of years, like extremely thick honey. This slow movement of hot rock is what drives tectonic plates on the surface. The mantle also transfers heat from Earth's interior to the surface.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Plates That Move and Shape Earth`,
          paragraphs: [
            `Earth's CRUST isn't one solid shell. It's broken into HUGE PIECES called TECTONIC PLATES. There are about 15 major plates plus dozens of smaller ones. The plates SLOWLY MOVE on top of the mantle, which is hot enough to flow like very slow honey. The plates move just a few centimeters each year (about the speed your fingernails grow), but over millions of years, that small movement adds up to huge changes.`,
            `When plates RUN INTO EACH OTHER, mountains form, like the Himalayas, which are still growing as India pushes into Asia. When plates SLIDE PAST EACH OTHER, you get earthquakes, like along the famous San Andreas Fault in California. When plates PULL APART, magma comes up through the gap, creating new ocean floor or causing volcanoes. The continents you see on a map today weren't always in those positions. About 250 million years ago, all the major continents were joined together in one giant landmass called PANGAEA. Plate movement slowly broke it apart and moved the pieces to where they are today. The plates are still moving. Map of the world looks different now than it did when dinosaurs were alive.`,
          ],
          image: `/ue-assets/science/l07-s2-plates.webp`,
          imageCaption: `Plates collide, slide, and pull apart. Building mountains, causing earthquakes.`,
          vocab: [
            { word: `tectonic plate`,
              definition: `One of the huge pieces of Earth's crust that slowly moves on the hot mantle below. Plate movement causes earthquakes, volcanoes, and mountain formation.`,
              audioPrompt: `A tectonic plate is one of the huge pieces of Earth's crust, {name}. The crust is broken into about 15 major plates plus many smaller ones. They slowly move on top of the hot mantle below, just a few centimeters per year. When plates run into each other, mountains form. When they slide past each other, you get earthquakes. When they pull apart, magma comes up and creates new ground. Over millions of years, plate movement has reshaped Earth's surface completely.` },
            { word: `earthquake`,
              definition: `The shaking of Earth's surface caused by sudden movement along a fault or plate boundary. Energy released by slipping plates travels as seismic waves through the ground.`,
              audioPrompt: `An earthquake is the shaking of Earth's surface caused by sudden movement along a fault or at a plate boundary, {name}. When two tectonic plates lock together and then suddenly slip, they release huge amounts of energy as seismic waves. These waves travel through Earth and shake the ground. Earthquakes happen often, mostly small and unnoticed. Large earthquakes near populated areas can be devastating. California sits on the San Andreas Fault, one of the most active earthquake zones in the United States.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Makes Earth Habitable`,
          paragraphs: [
            `Earth is the only place we've found life. Several specific features make this possible. Earth orbits the Sun in what scientists call the HABITABLE ZONE, meaning the right distance for liquid water to exist on the surface. Too close and water boils away. Too far and it freezes solid. Earth has a strong MAGNETIC FIELD generated by molten metal swirling in our outer core. This field deflects dangerous radiation from space that would otherwise damage life. Earth also has a thick ATMOSPHERE that traps just enough heat to keep temperatures stable and shields us from harmful radiation.`,
            `Earth has LIQUID WATER covering about 71% of its surface, mostly in oceans. Earth has a STABLE STAR (the Sun) that has burned steadily for billions of years, giving life time to evolve. Earth has a LARGE MOON that stabilizes the planet's tilt, preventing wild climate swings. None of these conditions are guaranteed for a planet. Most planets we've found in other star systems lack one or more of them. Earth is sometimes called a "Goldilocks planet," not too hot, not too cold, just right. As far as we know, this combination of features is RARE in the universe.`,
          ],
          image: `/ue-assets/science/l07-s3-habitable.webp`,
          imageCaption: `Distance, magnetic field, atmosphere, water, stable star, moon. Earth has them all.`,
          vocab: [
            { word: `atmosphere`,
              definition: `The layer of gases surrounding a planet. Earth's atmosphere is about 78% nitrogen, 21% oxygen, and 1% other gases. It keeps temperatures stable and shields life from radiation.`,
              audioPrompt: `Earth's atmosphere is the layer of gases surrounding our planet, {name}. It's about 78 percent nitrogen, 21 percent oxygen, and 1 percent other gases including carbon dioxide and water vapor. The atmosphere does many critical jobs. It traps just enough heat to keep temperatures stable. It shields us from harmful radiation from space. It contains the oxygen animals breathe and the carbon dioxide plants use. Without an atmosphere, Earth would be a freezing, radiation-blasted rock. Mars has an atmosphere too, but it's much thinner and doesn't trap heat as well.` },
            { word: `habitable zone`,
              definition: `The region around a star where liquid water can exist on a planet's surface — not too hot, not too cold. Earth orbits within the Sun's habitable zone.`,
              audioPrompt: `The habitable zone is the region around a star where liquid water can exist on a planet's surface, {name}. Too close to the star, and water boils away into vapor. Too far, and it freezes permanently. Earth orbits within the Sun's habitable zone, which is why we have liquid oceans. Scientists searching for life on other planets look for planets in their star's habitable zone. Finding one in the habitable zone, with an atmosphere and water, is one of astronomy's most exciting ongoing searches.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Our Place in the Solar System`,
          paragraphs: [
            `Earth is one of EIGHT PLANETS orbiting our Sun. The four INNER PLANETS (Mercury, Venus, Earth, Mars) are smaller and rocky. The four OUTER PLANETS (Jupiter, Saturn, Uranus, Neptune) are huge and made mostly of gas. There are also DWARF PLANETS like Pluto, plus moons, comets, and asteroids. The whole solar system orbits the Sun, which is just one of about 100 billion stars in our galaxy, the MILKY WAY.`,
            `Our galaxy is just one of an estimated TRILLIONS of galaxies in the universe. Earth is unbelievably tiny on this scale. And yet, as far as we know right now, it's the only place where the conditions came together for life. Future explorers may find life elsewhere (Mars and the icy moons of Jupiter and Saturn are top candidates), but for now, every living thing in the known universe lives on this one small planet. That makes Earth, at least for now, one of the most special places in the entire cosmos. Worth taking care of.`,
          ],
          image: `/ue-assets/science/l07-s4-solar-system.webp`,
          imageCaption: `Eight planets, billions of stars, trillions of galaxies. And Earth, our home.`,
          vocab: [
            { word: `solar system`,
              definition: `Our Sun and everything that orbits it, including the eight planets, dwarf planets, moons, asteroids, and comets. Earth is the third planet from the Sun.`,
              audioPrompt: `Our solar system is the Sun and everything that orbits it, {name}. There are eight planets. The four inner planets (Mercury, Venus, Earth, Mars) are smaller and rocky. The four outer planets (Jupiter, Saturn, Uranus, Neptune) are huge and made mostly of gas. There are also dwarf planets like Pluto, plus moons, comets, and asteroids. The whole solar system formed about 4.6 billion years ago from a giant cloud of gas and dust. Earth is the third planet from the Sun, and the only one we know has life.` },
            { word: `galaxy`,
              definition: `A massive system of stars, gas, dust, and dark matter held together by gravity. Our galaxy is called the Milky Way and contains about 100-400 billion stars.`,
              audioPrompt: `A galaxy is a massive system of stars, gas, dust, and dark matter held together by gravity, {name}. Our galaxy is called the Milky Way. It contains about 100 to 400 billion stars, one of which is our Sun. When you look at the Milky Way as a band of light across the night sky, you're seeing our galaxy's edge from the inside. Astronomers estimate there are trillions of galaxies in the observable universe. Even the nearest large galaxy, Andromeda, is about 2.5 million light-years away.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenarios about Earth. For each one, identify what's happening: PLATE TECTONICS (plates moving and reshaping Earth), HABITABLE-ZONE FEATURE (something that makes Earth livable), or COSMIC CONTEXT (Earth's place in the larger universe)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `tectonics`,         label: `Plate Tectonics`,           color: `#F87171`, description: `Tectonic plates moving, colliding, sliding, or pulling apart. Creates mountains, earthquakes, volcanoes.` },
            { id: `habitable-feature`, label: `Habitable-Zone Feature`,    color: `#34D399`, description: `Something specific about Earth that makes life possible: atmosphere, water, magnetic field, etc.` },
            { id: `cosmic-context`,    label: `Cosmic Context`,            color: `#60A5FA`, description: `Earth's place in the larger solar system, galaxy, or universe.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Event #1`,
              clues: [
                { text: `The Himalayan mountains are still growing about 5 millimeters taller every year.` },
                { text: `This is because the Indian tectonic plate is still pushing into the Eurasian plate.` },
                { text: `The collision started about 50 million years ago and is still going.` },
              ],
              correctAnswer: `tectonics`,
              realWorldExample: `The Himalayas, including Mount Everest, are a classic example of tectonic mountain-building.`,
              explanation: `Two plates colliding. Mountains rising. Slow continuous movement. Pure plate tectonics. The Himalayas are one of Earth's most dramatic examples of what plate collisions can do over geologic time.`,
            },
            {
              id: `case-2`,
              caseTitle: `Event #2`,
              clues: [
                { text: `Earth has a strong magnetic field generated by liquid metal in the outer core.` },
                { text: `This field deflects most of the harmful radiation that comes from the Sun and space.` },
                { text: `Without it, the atmosphere would slowly be stripped away, like what happened to Mars billions of years ago.` },
              ],
              correctAnswer: `habitable-feature`,
              realWorldExample: `Earth's magnetic field is one of the key reasons our atmosphere has lasted.`,
              explanation: `A specific feature that makes Earth livable. Pure habitable-zone feature. The magnetic field is one of the least-celebrated but most important reasons life is possible here.`,
            },
            {
              id: `case-3`,
              caseTitle: `Event #3`,
              clues: [
                { text: `Earth is one of 8 planets orbiting the Sun.` },
                { text: `The Sun is one of about 100 billion stars in the Milky Way galaxy.` },
                { text: `The Milky Way is one of an estimated trillions of galaxies in the universe.` },
              ],
              correctAnswer: `cosmic-context`,
              realWorldExample: `Modern astronomy keeps revealing just how vast the universe is.`,
              explanation: `Our place in the bigger picture. Pure cosmic context. The numbers keep getting more mind-bending as telescopes get better. Earth is unbelievably tiny on the cosmic scale.`,
            },
            {
              id: `case-4`,
              caseTitle: `Event #4 — The Tricky One`,
              clues: [
                { text: `About 250 million years ago, all the major continents were joined together in one giant landmass called Pangaea.` },
                { text: `Over millions of years, plate movement broke Pangaea apart.` },
                { text: `The pieces drifted to where they are today, creating the continents we know.` },
              ],
              correctAnswer: `tectonics`,
              realWorldExample: `Pangaea is one of the most striking pieces of evidence for plate tectonics.`,
              explanation: `Tricky because Pangaea sounds like ancient history (cosmic context). But it's actually a story about plates moving over time. Plate tectonics over millions of years broke Pangaea apart and moved the pieces. The CONTINENTS we see today are direct results of plate movement, even though it happened in deep geologic time. Lesson: long ago doesn't always mean cosmic-context. Earth's long history of plate movement is still plate tectonics, just slowly running over millions of years.`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What are EARTH'S LAYERS, from outside to inside?`,
              options: [
                `Atmosphere, ocean, ground`,
                `Crust, mantle, outer core, inner core`,
                `Surface, middle, bottom`,
                `Earth has no layers`,
              ],
              correctIndex: 1,
              explanation: `Earth has four main layers. The crust where we live, the mantle (hot rock that flows slowly), the outer core (liquid molten metal), and the inner core (solid metal at the center, hotter than the surface of the Sun).` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `What are TECTONIC PLATES?`,
              options: [
                `Dishes used by scientists`,
                `Huge pieces of Earth's crust that slowly move on the hot mantle below`,
                `A type of mountain`,
                `A kind of weather`,
              ],
              correctIndex: 1,
              explanation: `Earth's crust is broken into about 15 major tectonic plates plus many smaller ones. They slowly move (a few centimeters per year) on the hot mantle. Their movement causes earthquakes, volcanoes, and mountain formation.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `Why is Earth's MAGNETIC FIELD important?`,
              options: [
                `It powers compasses`,
                `It deflects harmful radiation from space, which protects our atmosphere and life on the surface`,
                `It makes magnets stick to refrigerators`,
                `It's not important`,
              ],
              correctIndex: 1,
              explanation: `The magnetic field, generated by liquid metal in Earth's outer core, deflects dangerous radiation from the Sun and outer space. Without it, the atmosphere would slowly be stripped away, like what happened to Mars billions of years ago.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `What is the ATMOSPHERE?`,
              options: [
                `The ocean`,
                `The layer of gases surrounding Earth — about 78% nitrogen, 21% oxygen, 1% other gases`,
                `Just clouds`,
                `Rocks`,
              ],
              correctIndex: 1,
              explanation: `Earth's atmosphere is the layer of gases around our planet. It keeps temperatures stable, contains the oxygen animals breathe, and shields life from harmful radiation. Without it, Earth would be a freezing, radiation-blasted rock.` },

            { id: `l07-q5`, format: `true-false`,
              question: `True or false: About 250 million years ago, all the major continents were joined together in one landmass called Pangaea.`,
              correctAnswer: true,
              explanation: `True. Pangaea was a single giant landmass that existed about 250 million years ago. Plate movement slowly broke it apart over millions of years. The continents you see on a map today are the drifted pieces of Pangaea, and they're still moving.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `What does it mean that Earth is in the SUN'S "habitable zone"?`,
              options: [
                `It's in the middle of the solar system`,
                `Earth orbits at the right distance for liquid water to exist on the surface — not too hot, not too cold`,
                `It's hidden from space`,
                `Earth is the biggest planet`,
              ],
              correctIndex: 1,
              explanation: `The habitable zone is the range of distances from a star where liquid water can exist. Closer and water boils away. Farther and it freezes solid. Earth's orbit is in the sweet spot, called the Goldilocks zone.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `How many PLANETS orbit our Sun?`,
              options: [
                `Five`,
                `Eight`,
                `Twelve`,
                `One`,
              ],
              correctIndex: 1,
              explanation: `Our solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. The first four are small rocky planets. The last four are huge gas giants. Pluto used to be called a planet but is now classified as a dwarf planet.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What makes Earth UNUSUAL compared to most other planets we've found?`,
              options: [
                `It's red`,
                `It has a stable orbit in the habitable zone, a magnetic field, liquid water on the surface, an atmosphere, AND life`,
                `It has rings`,
                `Nothing — Earth is normal`,
              ],
              correctIndex: 1,
              explanation: `Earth is the only place we've found life. The combination of features (right orbit, magnetic field, atmosphere, liquid water, large stabilizing moon, and stable star) is rare in the planets we've studied. Earth is, as far as we know, one of the most unusual places in the universe.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Earth has been around for 4.5 billion years. Humans have been around for less than a million. How does that change how you think about your own life?` },
            { id: `r2`, text: `Earth is the only place we've found life so far. If you could send a message to the universe, what would you say about your planet?` },
            { id: `r3`, text: `Plate tectonics is constantly reshaping Earth — slowly. If continents keep moving, what might the world look like 50 million years from now?` },
            { id: `r4`, text: `What's ONE thing about Earth that surprised you in this lesson?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Earth science isn't just abstract. Earthquake-prone regions like California (where many Coreverse families live) deal with tectonic activity directly. Coastal communities watch sea levels rise as climate changes. Farmers depend on weather patterns. Modern technology like GPS, weather satellites, and global navigation all came from understanding Earth as a system. Every choice humans make about climate, mining, oceans, or agriculture affects this one small, special planet we all share.`,
          familyAdventure: `Family Globe Hunt. If you have a globe or world map, find your home together. Notice how far you are from major plate boundaries. Look at the shapes of South America and Africa, and notice they fit together like puzzle pieces (because they used to be joined in Pangaea). Then find the Pacific Ring of Fire (the chain of plate boundaries around the Pacific) and notice how many earthquakes and volcanoes happen along it.`,
          creativePrompt: {
            intro: `Imagine writing a postcard from Earth to send into space, for any alien civilization that finds it.`,
            floor: `Write at least 5 sentences. Tell them what Earth is, what's special about it, and one thing your family loves about living here.`,
            stretch: `Write 8 to 10 sentences. Cover Earth's place in the solar system, what makes it habitable, what kinds of life it has, and an invitation that sounds welcoming.`,
            open: `Write as much as you want. Build a real postcard that describes Earth scientifically AND personally. Include your favorite part of the planet, what you'd want aliens to know, and what questions you'd have for them.`,
            frames: [
              `Hello, this is Earth.`,
              `We orbit a star called ___.`,
              `What makes our planet special is ___.`,
              `My favorite part of Earth is ___.`,
              `If you find this, please ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now describe Earth's layers, explain plate tectonics, name what makes our planet habitable, and place Earth in its cosmic context. Next lesson: the most important substance on Earth, and how it cycles through your planet constantly. WATER, in all its forms. See you there. — Cosmo.`,
          badge: `earth-explorer`,
          badgeName: `Earth Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L07 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
