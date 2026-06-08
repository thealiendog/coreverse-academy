// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L16 — Earth Science: Earth Systems and Interactions
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-ESS2 (Earth's Systems)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l16-v1";

const SCIENCE_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-16`,
      title: `Earth Science: Earth Systems and Interactions`,
      duration: 35,
      xpReward: 75,
      badge: `earth-reader`,
      badgeName: `Earth Reader`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, we've journeyed through physics, chemistry, and biology. Now we pull back to look at the planet those sciences helped build: Earth as a single, interconnected system. The geosphere, hydrosphere, atmosphere, and biosphere are not separate domains — they're one coupled system. The rock cycle, climate, ocean circulation, and the carbon cycle are all expressions of that coupling. Understanding Earth systems is understanding why climate change is so serious.`,
          headline: `Earth Science: Earth Systems and Interactions`,
          subtitle: `How the great systems of our planet, rock, water, air, and life, interact to shape the world we live on. A Case Study.`,
          visual: `/voyager-assets/science/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Four Great Spheres`,
          paragraphs: [
            `Earth scientists divide our planet into four great interacting systems, often called spheres. The geosphere is the solid Earth: rock, soil, mountains, and the deep interior. The hydrosphere is all of Earth's water: oceans, rivers, lakes, groundwater, and ice. The atmosphere is the layer of gases around the planet. And the biosphere is all living things.`,
            `What makes Earth science profound isn't studying these four in isolation, it's seeing how they interact. The spheres are not separate compartments; they constantly exchange matter and energy. A river (hydrosphere) carves a canyon in rock (geosphere). Plants (biosphere) pull gases from the air (atmosphere). Each sphere is always touching, shaping, and being shaped by the others.`,
            `This makes Earth a single, coupled system. Change one part and the others respond, often in surprising ways. Our planet is uniquely active in all four spheres, especially liquid water and abundant life. Understanding Earth means understanding not just the parts, but the web of connections between them that makes our world work.`,
          ],
          image: `/voyager-assets/science/l16-s1-spheres.webp`,
          imageCaption: `Earth scientists divide our planet into four great interacting systems, or SPHERES. The GEOSPHERE is the solid Earth: rock, soil, mountains, and deep interior. The HYDROSPHERE is all of Earth's water: oceans, rivers, lakes, groundwater, and ice. The ATMOSPHERE is the layer of gases surrounding the planet. The BIOSPHERE is all living things. What makes Earth science profound isn't studying these in isolation, it's seeing how they INTERACT. The spheres constantly exchange matter and energy: a river carves rock, plants pull gases from air. Each is always shaping and being shaped by the others. This makes Earth a single COUPLED system, change one part and the others respond. Our planet is uniquely active in all four, especially liquid water and abundant life.`,
          vocab: [
            { word: `Earth system`,
              definition: `The idea that Earth is a single, interconnected system whose parts (the four spheres) constantly exchange matter and energy and shape one another.`,
              audioPrompt: `An Earth system, {name}, is the powerful idea that our planet works as one interconnected whole, not separate pieces. The rock, water, air, and life constantly exchange matter and energy and shape each other, so Earth behaves as a single, coupled system.` },
            { word: `geosphere`,
              definition: `The solid Earth, its rock, soil, mountains, and deep interior, including the slow churning that drives plate tectonics.`,
              audioPrompt: `The geosphere, {name}, is the solid Earth: all its rock, soil, and mountains, down through the deep interior. It even slowly churns far below the surface, and that hidden motion is what drives the drifting of continents and the building of mountains.` },
            { word: `hydrosphere`,
              definition: `All of Earth's water in every form, oceans, rivers, lakes, groundwater, and ice, much of it moving through the water cycle.`,
              audioPrompt: `The hydrosphere, {name}, is all of Earth's water in every form: the oceans, rivers, lakes, groundwater, and ice. Much of it is always on the move, evaporating, falling as rain, and flowing back to the sea in the endless water cycle.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Restless Geosphere`,
          paragraphs: [
            `The solid Earth seems permanent, but it's slowly, powerfully alive. Beneath the thin crust we live on lies the mantle, hot rock that flows like extremely thick syrup over long timescales. Heat from Earth's interior drives slow currents in this mantle, and those currents move the crust above. This is the engine of one of the great discoveries of science: plate tectonics.`,
            `Earth's outer shell is broken into huge slabs called tectonic plates that drift just centimeters a year, riding the churning mantle. Where plates collide, they crumple up mountains or one dives beneath another. Where they pull apart, new crust forms. Where they grind past, they lock and slip, releasing earthquakes. The map of our world is shaped by this motion.`,
            `Plate tectonics ties the whole geosphere together. It explains why earthquakes and volcanoes cluster along plate boundaries, why mountains rise, why continents drift, and how matching fossils ended up on coastlines now separated by oceans. The seemingly solid ground is a slow-motion system, driven by internal heat, remaking the planet's face.`,
          ],
          image: `/voyager-assets/science/l16-s2-tectonics.webp`,
          imageCaption: `The solid Earth seems permanent, but it's slowly, powerfully alive. Beneath the thin CRUST lies the MANTLE, hot rock that flows like thick syrup over long timescales. Heat from Earth's interior drives slow currents in the mantle, moving the crust above. This is PLATE TECTONICS. Earth's outer shell is broken into huge TECTONIC PLATES that drift just centimeters a year, riding the churning mantle. Where plates COLLIDE, they crumple mountains or one dives under another; where they PULL APART, new crust forms; where they GRIND past, they lock and slip as EARTHQUAKES. This ties the geosphere together: it explains why earthquakes and volcanoes cluster at plate boundaries, why mountains rise, and why continents drift, all driven by Earth's internal heat.`,
          vocab: [
            { word: `plate tectonics`,
              definition: `The theory that Earth's outer shell is broken into drifting plates whose slow motion, driven by internal heat, builds mountains and causes earthquakes and volcanoes.`,
              audioPrompt: `Plate tectonics, {name}, is the great theory that Earth's outer shell is broken into giant plates that slowly drift, just centimeters a year. Their motion, driven by the planet's internal heat, builds mountains and causes most earthquakes and volcanoes.` },
            { word: `mantle`,
              definition: `The thick layer of hot rock beneath Earth's crust that flows slowly over long timescales. Its churning currents drive the movement of tectonic plates.`,
              audioPrompt: `The mantle, {name}, is the thick layer of hot rock just beneath Earth's crust. Over long timescales it flows like extremely thick syrup, and its slow churning currents are what drag the tectonic plates, and the continents, across the planet's surface.` },
            { word: `tectonic plate`,
              definition: `One of the huge slabs that make up Earth's broken outer shell, slowly drifting on the mantle. Their boundaries are where most earthquakes and volcanoes occur.`,
              audioPrompt: `A tectonic plate, {name}, is one of the huge slabs making up Earth's cracked outer shell. These plates drift slowly on the flowing mantle beneath, and where their edges meet, push together, pull apart, or grind past, is where most earthquakes and volcanoes happen.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Water, Air, And The Great Cycles`,
          paragraphs: [
            `The hydrosphere and atmosphere are restless too, and tightly linked. The water cycle moves water endlessly between them: the Sun evaporates ocean water into vapor, which rises, cools, and condenses into clouds, then falls as rain or snow, flowing through rivers and groundwater to the sea again. This cycle shapes weather, carves landscapes, and sustains all life.`,
            `The atmosphere is the engine of weather and climate. Uneven heating by the Sun, more at the equator, less at the poles, drives winds and ocean currents that move heat around the globe. The atmosphere also holds the greenhouse gases (like carbon dioxide) that trap heat and keep Earth warm enough for life, a delicate balance we'll return to next lesson.`,
            `Matter cycles endlessly between the spheres. The carbon cycle moves carbon between air, oceans, rock, and living things, plants pull it from the air, animals release it, it's locked in rock and fossil fuels for ages, then returns. The rock cycle slowly transforms rock from one type to another over millions of years. These great cycles are how Earth's systems recycle their matter.`,
          ],
          image: `/voyager-assets/science/l16-s3-cycles.webp`,
          imageCaption: `The hydrosphere and atmosphere are restless and tightly linked. The WATER CYCLE moves water endlessly: the Sun evaporates ocean water into vapor, which rises, cools, and condenses into clouds, then falls as rain or snow, flowing through rivers and groundwater back to the sea. This shapes weather, carves landscapes, and sustains all life. The ATMOSPHERE is the engine of weather and climate: uneven solar heating, more at the equator, drives winds and ocean currents that move heat around the globe. It also holds GREENHOUSE GASES that keep Earth warm enough for life. Matter cycles endlessly: the CARBON CYCLE moves carbon between air, oceans, rock, and life; the ROCK CYCLE slowly transforms rock over millions of years. The great cycles share and recycle Earth's matter.`,
          vocab: [
            { word: `water cycle`,
              definition: `The endless movement of water between the spheres: evaporation into the air, condensation into clouds, precipitation as rain or snow, and flow back to the sea.`,
              audioPrompt: `The water cycle, {name}, is water's endless journey between the spheres. The Sun evaporates it from the oceans into vapor, it rises and forms clouds, falls as rain or snow, then flows through rivers and the ground back to the sea, only to rise again.` },
            { word: `carbon cycle`,
              definition: `The continuous movement of carbon between the atmosphere, oceans, rock, and living things, as plants absorb it, animals release it, and it cycles through Earth.`,
              audioPrompt: `The carbon cycle, {name}, is how carbon moves endlessly between air, oceans, rock, and living things. Plants pull it from the air, animals breathe it back out, and it can be locked away in rock or fossil fuels for ages before returning, a vast recycling system.` },
            { word: `weather and climate`,
              definition: `Weather is the day-to-day state of the atmosphere; climate is the long-term average pattern. Both are driven by uneven solar heating and the movement of heat.`,
              audioPrompt: `Weather and climate, {name}, are related but different. Weather is what the atmosphere is doing day to day, today's rain or sunshine. Climate is the long-term average pattern over years. Both are driven by the Sun heating the Earth unevenly and the heat moving around.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Living Planet: Biosphere And Interactions`,
          paragraphs: [
            `The biosphere, all living things, isn't just a passenger; it's a powerful force that has transformed the entire planet. The clearest example: the oxygen you're breathing was put there by life. Early Earth had almost no oxygen, until microbes began producing it through photosynthesis, slowly filling the atmosphere over billions of years. Life remade the sky.`,
            `This is the heart of Earth science: the spheres are coupled, each constantly shaping the others. A volcano (geosphere) can blast ash and gas into the air (atmosphere), cooling the climate for years. The ocean (hydrosphere) stores and moves vast heat, shaping weather worldwide. Forests (biosphere) release water vapor and pull carbon from the air. Nothing on Earth happens in isolation.`,
            `Earth is also unique in running on two energy sources at once. Energy from the Sun, from above, powers the water cycle, weather, winds, and nearly all life through photosynthesis. Heat from Earth's own interior, rising from below, drives plate tectonics and volcanoes. Together, these two engines, sunlight and internal heat, keep every Earth system in motion.`,
          ],
          image: `/voyager-assets/science/l16-s4-biosphere.webp`,
          imageCaption: `The BIOSPHERE, all living things, isn't a passenger on Earth; it's a powerful force that transformed the planet. The clearest example: the OXYGEN you're breathing was put there by LIFE. Early Earth had almost no oxygen, until microbes began making it through photosynthesis, slowly filling the air over billions of years. Life remade the sky. This is the heart of Earth science: the spheres are COUPLED. A volcano (geosphere) blasts ash into the air (atmosphere), cooling climate for years. The ocean (hydrosphere) stores and moves vast heat, shaping weather. Forests (biosphere) release vapor and pull carbon from air. Nothing happens in isolation. Earth runs on TWO energy sources: the SUN from above (powering weather, water, life) and INTERNAL HEAT from below (driving tectonics and volcanoes).`,
          vocab: [
            { word: `biosphere`,
              definition: `All living things on Earth. Far from being a mere passenger, life actively reshapes the planet, including putting the oxygen into the atmosphere.`,
              audioPrompt: `The biosphere, {name}, is all the living things on Earth, everywhere life is found. And life isn't just along for the ride: it actively reshapes the planet. The very oxygen in our air was produced by living things over billions of years. Life remade the world.` },
            { word: `coupled systems`,
              definition: `The principle that Earth's spheres are linked, so a change in one (like a volcano) produces effects in the others (like a cooler climate). Nothing happens in isolation.`,
              audioPrompt: `Coupled systems, {name}, is the core idea of Earth science: the spheres are all linked, so a change in one ripples into the others. A volcano in the geosphere can cool the climate in the atmosphere for years. On Earth, nothing ever happens in isolation.` },
            { word: `energy sources`,
              definition: `Earth uniquely runs on two energies: sunlight from above (driving weather, water, and life) and internal heat from below (driving tectonics and volcanoes).`,
              audioPrompt: `Earth runs on two energy sources at once, {name}. Sunlight from above powers the water cycle, the weather, and nearly all life through photosynthesis. And heat from Earth's own interior, rising from below, drives the drifting plates and the volcanoes. Two engines, working together.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Earth is one coupled system of four interacting spheres: the geosphere (solid rock), hydrosphere (water), atmosphere (air), and biosphere (life). The deepest truth of Earth science is interaction, the spheres constantly exchange matter and energy, so change in one ripples into the others, and nothing happens in isolation.`,
            `The geosphere is slowly alive: plate tectonics, driven by internal heat, drifts continents, builds mountains, and causes earthquakes and volcanoes. The water cycle and atmosphere drive weather and climate, and great cycles, water, carbon, rock, move matter endlessly between spheres. Life itself remade the planet, filling the air with oxygen. And Earth runs on two engines: sun and internal heat.`,
            `Now the case-study screen makes you the Earth scientist with five puzzles: how one volcano can cool the whole planet, why earthquakes and volcanoes line up along the same boundaries, how the oxygen in our air got there, how the ocean controls a continent's weather, and how to trace one raindrop through every sphere. Reason with the four spheres and their interactions.`,
          ],
          image: `/voyager-assets/science/l16-s5-before.webp`,
          imageCaption: `Threads together. Earth is one COUPLED system of four interacting SPHERES: geosphere (rock), hydrosphere (water), atmosphere (air), biosphere (life). The deepest truth is INTERACTION, the spheres exchange matter and energy, so change in one ripples into the others. The geosphere is slowly alive: PLATE TECTONICS, driven by internal heat, drifts continents and causes earthquakes and volcanoes. The WATER CYCLE and atmosphere drive weather, and great cycles, water, carbon, rock, move matter between spheres. LIFE remade the planet, filling the air with oxygen. Earth runs on two engines: sunlight and internal heat. The case-study screen gives five puzzles: the world-cooling volcano, the lined-up quakes, the oxygen's origin, the ocean's control of weather, and one raindrop's journey.`,
          vocab: [
            { word: `feedback loop`,
              definition: `A process where a change feeds back to amplify or dampen itself, common in Earth systems, such as melting ice exposing dark ground that absorbs more heat.`,
              audioPrompt: `A feedback loop, {name}, is when a change feeds back to strengthen or weaken itself. On Earth, melting ice uncovers dark ground that absorbs more sunlight, warming things further and melting more ice, a loop that amplifies the original change.` },
            { word: `rock cycle`,
              definition: `The slow transformation of rock among three types, igneous, sedimentary, and metamorphic, over millions of years, driven by heat, pressure, and weathering.`,
              audioPrompt: `The rock cycle, {name}, is the slow transformation of rock from one kind to another over millions of years. Heat and pressure deep in the Earth, plus weathering at the surface, turn igneous into sedimentary into metamorphic rock and back, an endless, ancient cycle.` },
            { word: `erosion`,
              definition: `The wearing away and carrying off of rock and soil by water, wind, and ice. A key interaction where the hydrosphere and atmosphere reshape the geosphere.`,
              audioPrompt: `Erosion, {name}, is the wearing away of rock and soil by water, wind, and ice, which then carry the pieces elsewhere. It's a perfect example of the spheres interacting: the hydrosphere and atmosphere slowly sculpting the geosphere, carving canyons and valleys.` },
          ],
        },

        {
          id: `l16-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Earth Systems`,
          intro: `{name}, you're the Earth scientist now. Here are five real puzzles about our planet's interacting systems. For each, reason with the four spheres, the great cycles, and the central principle: on Earth, nothing happens in isolation.`,
          cases: [
            {
              id: `c1`,
              title: `The volcano that cooled the world`,
              type: `Geosphere meets atmosphere`,
              description: `In 1991, Mount Pinatubo in the Philippines erupted massively. In the year that followed, average temperatures across the entire planet dropped by about half a degree Celsius, a global cooling traced directly to that one volcano. How can a single eruption cool the whole Earth?`,
              questions: [
                `How does a volcano in the geosphere affect the global atmosphere?`,
                `Why would this cause cooling rather than warming?`,
                `What does this reveal about how Earth's spheres interact?`,
              ],
              evaluation: `This dramatic event is a perfect, large-scale demonstration of how Earth's spheres are coupled, here, how the geosphere (solid Earth) can reach up and change the atmosphere and climate of the entire planet. When Mount Pinatubo erupted, it didn't just spew lava and ash locally; it blasted enormous quantities of gas and fine particles high into the stratosphere, the upper atmosphere. The key ingredient was sulfur dioxide gas, which the eruption injected in huge amounts, around 20 million tons. High in the stratosphere, that sulfur dioxide reacted with water vapor to form a haze of tiny sulfuric acid droplets and sulfate particles, called aerosols, that spread around the entire globe within months, forming a thin, planet-wide veil. Now, why cooling rather than warming? Because these high-altitude aerosol particles reflect incoming sunlight back into space before it can reach and warm Earth's surface. They act like a faint, global sunshade. With slightly less solar energy reaching the surface, the whole planet cooled, by about half a degree Celsius on average, for roughly a year or two, until the particles gradually settled out of the atmosphere and the cooling faded. (This is why a volcano causes cooling, not warming: although volcanoes do release carbon dioxide, a greenhouse gas that warms, the dominant short-term effect of a big explosive eruption is the reflective aerosol veil, which cools, and which fades after a couple of years, whereas the much smaller CO2 contribution is negligible compared to the cooling.) What does this reveal about how Earth's spheres interact? It's a vivid illustration of the central principle of Earth science: the spheres are coupled, and nothing happens in isolation. An event in the geosphere (a volcanic eruption, ultimately driven by Earth's internal heat and plate tectonics) injected material into the atmosphere, which changed the amount of sunlight (energy from the Sun) reaching the surface, which altered the climate of the entire planet, affecting weather, growing seasons, and the biosphere worldwide. A single point on the map reached out and touched every other point, because the systems are linked. Scientists even use such eruptions as natural experiments: Pinatubo's measurable global cooling helped confirm climate models and demonstrated, sobering, that deliberately injecting reflective particles into the stratosphere could artificially cool the planet (a controversial idea called solar geoengineering), precisely because we watched a volcano do exactly that. The deep lesson is that Earth is one interconnected system: a volcano is not just a local event but a planetary one, the geosphere altering the atmosphere altering the climate, all the spheres responding together. The solid Earth, the air, the Sun's energy, and life are bound in a single web, and Pinatubo showed that web in action on a global scale, one eruption, a cooler world.`,
            },
            {
              id: `c2`,
              title: `The ring of fire`,
              type: `Plate tectonics`,
              description: `If you plot every major earthquake and active volcano on a world map, they don't scatter randomly, they cluster into the same narrow lines and belts, especially a great ring around the edges of the Pacific Ocean. Why do earthquakes and volcanoes appear along the same specific lines instead of being spread out everywhere?`,
              questions: [
                `Why do earthquakes and volcanoes cluster along the same lines?`,
                `What are these lines, in terms of plate tectonics?`,
                `Why isn't the middle of a large plate full of earthquakes and volcanoes?`,
              ],
              evaluation: `This striking pattern, earthquakes and volcanoes tracing the same lines across the globe, was one of the most powerful clues that led to the theory of plate tectonics, and it reveals the restless, interconnected nature of the geosphere. The reason earthquakes and volcanoes cluster along the same specific lines is that those lines are the boundaries between Earth's tectonic plates. Recall that Earth's solid outer shell is broken into huge plates that slowly drift, driven by the churning of the hot mantle beneath (powered by Earth's internal heat). The plates are relatively rigid and stable in their interiors, but their edges, where they meet other plates, are zones of intense activity, because that's where the plates interact: pushing together, pulling apart, or grinding past one another. Earthquakes happen at these boundaries because the plates don't slide smoothly; they catch and lock against each other due to friction, building up enormous stress over years, until they suddenly slip, releasing that stored energy as the shaking of an earthquake. So earthquakes concentrate where plates grind and collide, along the boundaries. Volcanoes also cluster along boundaries, for related reasons: where one plate dives beneath another (a process called subduction, common around the Pacific), the descending plate heats up and releases fluids that cause rock to melt, and that molten rock (magma) rises to form volcanoes. Where plates pull apart, magma wells up to form new crust, often with volcanic activity. So both earthquakes and volcanoes are concentrated at plate boundaries, which is exactly why they trace the same lines, the famous "Ring of Fire" around the Pacific is precisely the boundary zone where the Pacific plate meets and interacts with the surrounding plates, ringed by both earthquakes and volcanoes. Why isn't the middle of a large plate full of earthquakes and volcanoes? Because the interior of a plate is far from the action, it's a stable, rigid slab moving more or less as one piece, without the intense colliding, separating, or grinding that occurs at the edges. With little stress building up and no plate boundary to melt rock or release energy, plate interiors are relatively quiet (which is why, for example, the central regions of large continents are generally far more geologically stable than their tectonically active edges). There are some exceptions (isolated "hotspots" like Hawaii, where a plume of hot mantle melts through the middle of a plate), but as a rule, the drama happens at the boundaries. What does this reveal? It confirms that the geosphere is a dynamic, interconnected system governed by plate tectonics, not a static, uniform ball of rock. The non-random clustering of earthquakes and volcanoes is the visible signature of the invisible plates and their boundaries, evidence so compelling it helped revolutionize geology in the twentieth century. By mapping where the Earth shakes and erupts, scientists were essentially mapping the edges of the plates themselves, revealing the great jigsaw of Earth's broken shell and the slow, powerful, heat-driven motion that constantly reshapes our planet's surface. The pattern on the map is the geosphere telling us its deepest secret: the ground is moving, and its boundaries are where that motion makes itself felt.`,
            },
            {
              id: `c3`,
              title: `Where our oxygen came from`,
              type: `Biosphere transforms the planet`,
              description: `The air you breathe is about one-fifth oxygen, and your life depends on it. But for the first roughly two billion years of Earth's history, the atmosphere had almost no oxygen at all. Then it appeared, and kept rising. Where did all the oxygen in our atmosphere come from?`,
              questions: [
                `If early Earth had almost no oxygen, where did it all come from?`,
                `What does this reveal about the biosphere's power over the planet?`,
                `How does this connect the spheres to each other?`,
              ],
              evaluation: `This is one of the most profound stories in all of Earth science, because it reveals that life itself, the biosphere, fundamentally remade the planet, transforming the very air we breathe. The oxygen in our atmosphere came from living things, specifically, from photosynthesis. Early in Earth's history, the atmosphere was rich in gases like carbon dioxide, nitrogen, and water vapor, but contained almost no free oxygen. Then, more than two billion years ago, a momentous thing happened: certain microbes, ancient cyanobacteria (sometimes called blue-green algae), evolved the ability to perform photosynthesis. Photosynthesis uses the energy of sunlight to combine carbon dioxide and water into food (sugars), and it releases oxygen as a byproduct. As these photosynthetic microbes multiplied across the oceans over hundreds of millions of years, they pumped out oxygen relentlessly. At first, the oxygen was absorbed by dissolved iron in the oceans and by rocks (rusting them, which left visible bands of iron in ancient rock layers, a geological record of this event). But eventually, the oceans and rocks became saturated, and oxygen began accumulating in the atmosphere, an event so significant that scientists call it the Great Oxygenation Event. Over vast stretches of time, photosynthetic life, microbes, and later plants and algae, slowly built up the oxygen-rich atmosphere we depend on today. So the oxygen you breathe with every breath was produced by living organisms, the cumulative exhalation of billions of years of photosynthesis. What does this reveal about the biosphere's power over the planet? It reveals that life is not a passive passenger on Earth, occupying a planet that was simply ready for it. Instead, life is a powerful geological force that has dramatically reshaped the planet itself. The biosphere literally transformed the atmosphere, changing Earth's air from oxygen-free to oxygen-rich, which in turn made possible the evolution of all the oxygen-breathing creatures (including us) that followed. Life created the conditions for more complex life. This overturns the naive idea that organisms just adapt to a fixed environment; in reality, organisms and their environment shape each other in a two-way relationship. How does this connect the spheres? Beautifully and completely. It's a stunning example of the spheres being coupled: the biosphere (photosynthetic microbes) altered the atmosphere (adding oxygen), drawing down carbon dioxide and reshaping the air. That change interacted with the geosphere (the oxygen rusted iron in rocks, leaving a permanent record, and changed the chemistry of Earth's surface) and the hydrosphere (the process began in the oceans). The rise of oxygen even affected the climate. In other words, a change in living things rippled through every other Earth system, exactly the central principle of Earth science: the spheres are interconnected, and nothing happens in isolation. The deep lesson is humbling and awe-inspiring: the planet you live on, including the very air that sustains you, is partly the creation of life itself. Earth is not just a stage on which life performs; life is one of the actors that built the stage. The biosphere and the other spheres have co-evolved over billions of years, and the oxygen in your lungs is living proof that on Earth, life and planet shape each other in an endless, intimate dance.`,
            },
            {
              id: `c4`,
              title: `The ocean that runs the weather`,
              type: `Hydrosphere meets atmosphere`,
              description: `A coastal city and an inland city at the same latitude can have wildly different climates, the coastal one milder, with cooler summers and warmer winters, even though both get the same sunlight. People credit "the ocean," but how exactly does a body of water control the weather and climate of the land around it?`,
              questions: [
                `How does the ocean make a coastal climate milder than an inland one?`,
                `What property of water lets the ocean store and move so much heat?`,
                `How does this show the hydrosphere and atmosphere interacting?`,
              ],
              evaluation: `This everyday observation, that coastal climates are milder than inland ones, reveals the powerful coupling between the hydrosphere (the ocean) and the atmosphere (weather and climate), and it comes down to a remarkable property of water. The ocean makes coastal climates milder primarily because water heats up and cools down much more slowly than land does. This is due to water's high heat capacity: it takes a great deal of energy to change water's temperature, far more than to change the temperature of rock or soil. (You may recall from the energy lessons that different materials store thermal energy differently; water is exceptional at storing heat.) Because of this, the ocean acts like an enormous thermal reservoir, a giant heat bank. In summer, the ocean absorbs huge amounts of solar energy but warms only slightly, staying relatively cool compared to the land, which heats up quickly; the cool ocean and the breezes blowing off it keep nearby coastal areas cooler than baking inland regions. In winter, the situation reverses: the ocean, having stored all that summer heat, cools only slowly and releases its stored warmth gradually, keeping coastal areas warmer than frigid inland regions, where the land loses heat quickly. The result is that coastal climates are moderated, milder, with cooler summers and warmer winters and a smaller temperature swing, while inland (continental) climates have hot summers and cold winters and large swings, even at the same latitude with the same sunlight. The key property is water's high heat capacity (its ability to absorb and store large amounts of thermal energy with little temperature change), which makes the ocean a stabilizing thermal flywheel for the climate. But the ocean does even more: ocean currents physically transport vast amounts of heat around the globe. Warm currents carry tropical heat toward the poles (famously, currents that warm parts of Western Europe, making them far milder than their high latitude would suggest), while cold currents carry cool water toward the equator. These currents, driven by winds, temperature, and the Earth's rotation, redistribute heat across the entire planet, profoundly shaping regional climates far beyond the immediate coast. The ocean also feeds the atmosphere with moisture (evaporation) that becomes rain and storms. How does this show the hydrosphere and atmosphere interacting? It's a textbook example of coupled spheres. The hydrosphere (ocean) stores, moves, and releases heat and moisture, directly controlling the atmosphere (temperature, winds, rainfall, weather, and climate) of the regions around and downwind of it. Change the ocean, its temperature, its currents, and you change the weather and climate of continents. This coupling is so strong that ocean phenomena like El Niño (a periodic warming of part of the Pacific) can shift weather patterns, droughts, and floods across the entire globe. The atmosphere, in turn, drives the ocean currents with its winds, so the influence flows both ways, a true two-way interaction. The deep lesson is that you cannot understand weather and climate by looking at the air alone; the ocean is an inseparable partner, a massive heat reservoir and heat-transport system that regulates the temperature of the planet and the character of its climates. The mild sea breeze on a coast and the brutal temperature swings of a continental interior are both the hydrosphere and atmosphere interacting, water's extraordinary ability to store and move heat, shaping the very weather that living things experience. On Earth, the air and the sea are one coupled climate machine.`,
            },
            {
              id: `c5`,
              title: `One raindrop's journey`,
              type: `Tracing the cycles`,
              description: `A single drop of water falls as rain on a mountain. A geologist claims that over time, this one drop could touch all four of Earth's spheres, rock, water, air, and life, before returning to where it began. Trace the journey of a water drop through all four spheres and the cycles connecting them.`,
              questions: [
                `How can a single water drop pass through all four spheres?`,
                `Which cycles carry the drop between the spheres?`,
                `What does this journey reveal about how Earth's systems connect?`,
              ],
              evaluation: `This puzzle beautifully synthesizes everything in the lesson, showing how a single water drop weaves through all four of Earth's spheres, carried by the great cycles, demonstrating that the systems are not separate but profoundly interconnected. Let's trace the journey. Our drop begins in the atmosphere, as water vapor that condenses in a cloud and falls as rain onto a mountain, this is precipitation, part of the water cycle. (Atmosphere, sphere one.) Landing on the mountain, the drop joins the hydrosphere as liquid water, perhaps flowing into a stream. (Hydrosphere, sphere two.) As it flows over and through rock and soil, the water interacts with the geosphere: it seeps into the ground as groundwater, dissolves minerals from the rock, and contributes to weathering and erosion, slowly wearing away and reshaping the rock, even carrying tiny dissolved pieces of the geosphere along with it. (Geosphere, sphere three.) Along the way, the drop is very likely taken up by a plant's roots, becoming part of the biosphere: inside the plant, the water participates in photosynthesis and the plant's life processes, and is eventually released back into the air through the leaves in a process called transpiration (plants "breathing out" water vapor). Or the drop might be drunk by an animal, passing through a living body. (Biosphere, sphere four.) Then, whether transpired by the plant, evaporated from the stream or soil, or exhaled by an animal, the water returns to the atmosphere as vapor, rising, cooling, condensing into a cloud once more, ready to fall again as rain, completing the cycle and returning to where it began. So a single drop can indeed pass through all four spheres: falling from the air (atmosphere), flowing as water (hydrosphere), seeping through and weathering rock (geosphere), and being used by living things (biosphere), before evaporating back into the air to start again. Which cycles carry the drop? Principally the water cycle (the endless movement of water through evaporation, condensation, precipitation, and flow), which is itself the great connector, but the drop also participates in the rock cycle (through weathering and erosion of rock), the carbon cycle (when it's involved in photosynthesis in a plant), and the broader flows of matter through the biosphere. The water cycle is the master thread that stitches the spheres together, because water touches everything. What does this journey reveal? It reveals the central, unifying truth of Earth science: the four spheres are deeply interconnected, constantly exchanging matter and energy, so that a single drop of water can serve as a thread linking rock, water, air, and life. There are no walls between the spheres, they bleed into one another continuously. The same water molecule can be rain, river, groundwater, sap inside a leaf, vapor breathed out by a tree, and rain again, cycling endlessly through every system on the planet. This is why Earth scientists insist on studying Earth as a system rather than as isolated parts: because matter and energy flow between the spheres without stopping, a change in one inevitably affects the others. The humble raindrop, following the water cycle, embodies the whole philosophy of Earth science, that our planet is one magnificent, interconnected, ever-cycling system, where everything is connected to everything else, and nothing, not even a single drop of water, ever truly stays in one place or belongs to one sphere alone. To understand Earth is to understand these connections, and the journey of a raindrop through rock, sea, sky, and life is the connection made visible.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, name the four spheres and explain the central principle that they are coupled. How did one volcano cool the planet, and how did life create our oxygen? Why must Earth be studied as a system, not as separate parts? Which case most changed how you see the planet? In 5-6 sentences.`,
          reflectionPrompt: `Earth is the only world we know where rock, water, air, and life all meet and shape one another into a single living system. How does it feel to understand the planet beneath your feet not as scenery, but as a magnificent, interconnected whole that you are part of?`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are Earth's four great interacting systems, or spheres?`,
              options: [
                `The north, south, east, and west directions across the planet.`,
                `Geosphere (rock), hydrosphere (water), atmosphere (air), and biosphere (life).`,
                `The solid, liquid, gas, and plasma states of matter.`,
                `The crust, the mantle, the outer core, and the inner core.`,
              ],
              correctIndex: 1,
              explanation: `The four spheres are the geosphere (solid rock), hydrosphere (water), atmosphere (air), and biosphere (life), and the heart of Earth science is how they interact. The distractors list directions, states of matter, or only the geosphere's layers.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the central, defining idea of Earth science?`,
              options: [
                `Each of Earth's systems works in complete isolation from the others.`,
                `Only the solid rock of the geosphere truly matters.`,
                `The four spheres are coupled, so a change in one affects the others.`,
                `Earth never changes and has always looked exactly as it does now.`,
              ],
              correctIndex: 2,
              explanation: `The defining idea is interaction: the spheres are coupled and constantly exchange matter and energy, so nothing happens in isolation. The distractors claim isolation, dismiss most spheres, or deny that Earth changes.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What drives the movement of Earth's tectonic plates?`,
              options: [
                `Heat from Earth's interior driving slow currents in the mantle.`,
                `The gravitational pull of the Moon dragging the continents.`,
                `Strong winds in the atmosphere pushing the land around.`,
                `The plates do not actually move at all over time.`,
              ],
              correctIndex: 0,
              explanation: `Earth's internal heat drives slow churning currents in the mantle, which move the tectonic plates riding above. The distractors blame the Moon, the wind, or deny plate motion entirely.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why do earthquakes and volcanoes cluster along the same lines on a world map?`,
              options: [
                `They are scattered completely at random across the whole globe.`,
                `Those lines are the boundaries between Earth's tectonic plates.`,
                `They only ever happen in the exact centers of the continents.`,
                `The lines mark where the most people happen to live.`,
              ],
              correctIndex: 1,
              explanation: `Earthquakes and volcanoes concentrate at plate boundaries, where plates collide, separate, or grind past each other, which is why they trace the same lines (like the Pacific Ring of Fire). The distractors claim randomness, plate centers, or population.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Where did the oxygen in Earth's atmosphere originally come from?`,
              options: [
                `It was present in huge amounts when Earth first formed.`,
                `It leaked in slowly from outer space over billions of years.`,
                `It was released by volcanoes erupting from deep underground.`,
                `It was produced by living things through photosynthesis.`,
              ],
              correctIndex: 3,
              explanation: `Photosynthetic microbes (and later plants) produced Earth's oxygen over billions of years, slowly filling an atmosphere that began with almost none, life remade the air. The distractors claim it was original, came from space, or from volcanoes.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `How does a large volcanic eruption tend to cool the planet for a year or two?`,
              options: [
                `It blasts reflective particles into the high atmosphere that block sunlight.`,
                `It releases so much cold lava that it chills the entire surface.`,
                `It permanently removes all of the heat from Earth's interior.`,
                `It pushes the Earth slightly farther away from the Sun.`,
              ],
              correctIndex: 0,
              explanation: `A big eruption injects sulfur particles (aerosols) into the high atmosphere that reflect incoming sunlight, cooling the surface until they settle out. The distractors invoke cold lava, lost interior heat, or moving Earth's orbit.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does a coastal city often have a milder climate than an inland city at the same latitude?`,
              options: [
                `The coast receives far more sunlight than the inland city does.`,
                `Water heats and cools slowly, so the ocean moderates the temperature.`,
                `The ocean blocks the wind from ever reaching the coast.`,
                `Inland cities are always much closer to the equator.`,
              ],
              correctIndex: 1,
              explanation: `Water's high heat capacity lets the ocean store and slowly release heat, moderating coastal temperatures, cooler summers, warmer winters, while currents move heat too. The distractors misstate sunlight, wind, or latitude.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does the water cycle do?`,
              options: [
                `It keeps all of Earth's water permanently locked in the oceans.`,
                `It moves water only between rivers and lakes, never the air.`,
                `It creates brand-new water out of nothing each year.`,
                `It moves water between the spheres through evaporation, clouds, and rain.`,
              ],
              correctIndex: 3,
              explanation: `The water cycle endlessly moves water between the spheres: evaporation into the air, condensation into clouds, precipitation as rain or snow, and flow back to the sea. The distractors lock water away, limit it, or claim new water is created.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A volcanic eruption is purely a local event in the geosphere and cannot possibly affect the climate of the entire planet.`,
              correctAnswer: false,
              explanation: `False, and understanding why is a perfect illustration of the central principle of Earth science: that the planet's systems (the spheres) are deeply coupled, so an event in one can ripple out to affect all the others, even across the entire globe. It is a misconception that a volcanic eruption is merely a local event confined to the geosphere. In reality, a large explosive eruption can change the climate of the whole planet. Here's how: a major eruption blasts not just lava and ash but enormous quantities of gas, especially sulfur dioxide, high into the stratosphere (the upper atmosphere). There, the sulfur dioxide reacts with water vapor to form a haze of tiny reflective particles called aerosols, which spread around the entire globe within months, forming a thin, planet-wide veil. These high-altitude particles reflect a portion of incoming sunlight back into space before it can reach and warm Earth's surface, acting like a faint global sunshade. With slightly less solar energy reaching the surface, the entire planet cools measurably, often by several tenths of a degree Celsius, for a year or two, until the particles gradually settle out. This is not hypothetical: the 1991 eruption of Mount Pinatubo in the Philippines cooled global average temperatures by about half a degree Celsius for roughly a year, a worldwide effect from a single volcano, and historically, very large eruptions have caused crop failures and unusually cold years far from the volcano itself. This shows exactly why the statement is false: the eruption (an event in the geosphere, ultimately driven by Earth's internal heat and plate tectonics) injects material into the atmosphere, which changes how much of the Sun's energy reaches the surface, which alters the climate of the entire planet, affecting weather, growing seasons, and the biosphere worldwide. A single point on the map reaches out and touches every other point, because Earth's systems are interconnected. This is the heart of Earth science: the geosphere, atmosphere, hydrosphere, and biosphere are not separate, isolated compartments but a single coupled system, where a change in one produces effects in the others. Far from being purely local, a volcanic eruption can be a planetary event, the solid Earth reaching up to change the sky and cool the whole world. So the statement is false: through its effect on the atmosphere and the sunlight reaching Earth, a single volcanic eruption absolutely can, and demonstrably has, affected the climate of the entire planet.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "Living things just adapt to whatever environment Earth gives them. Life is a passenger on the planet; it could never actually change something as huge as the atmosphere or the climate." Using the lesson, what's the best response?`,
              options: [
                `The student is right; life only ever adapts and never changes the planet.`,
                `Life changes only tiny things, never anything on a planetary scale.`,
                `Life is a powerful planetary force, not a passive passenger: photosynthetic organisms produced essentially all the oxygen in our atmosphere over billions of years, transforming oxygen-free air into the oxygen-rich air we breathe, which then reshaped the oceans, rocks, and climate and made complex life possible, so the biosphere and the other spheres shape each other.`,
                `Life and the planet have nothing to do with one another at all.`,
              ],
              correctIndex: 2,
              explanation: `Far from a passive passenger, life is a planetary force: photosynthesis produced essentially all atmospheric oxygen over billions of years, transforming the air, the oceans, the rocks, and the climate, and making complex life possible. The biosphere and the other spheres shape each other. The distractors endorse the "passenger" misconception the lesson overturns.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-whole`, category: `One living system`, prompt: `Earth is the only world we know where rock, water, air, and life all meet and shape one another. How does it feel to understand the planet beneath your feet not as scenery, but as a magnificent, interconnected whole you are part of?` },
            { id: `reflect-connection`, category: `Nothing in isolation`, prompt: `On Earth, a volcano can cool the world and a raindrop can touch every sphere, nothing happens in isolation. Where in your own life do you notice that nothing you do happens in isolation either?` },
            { id: `reflect-life`, category: `Life remade the world`, prompt: `The oxygen in your lungs was made by ancient life that transformed the whole planet. What does it stir in you to know that living things didn't just inherit Earth, they helped build it?` },
            { id: `reflect-heritage`, category: `Teaching Earth systems`, prompt: `Caro, you're building science for conscious families. How would you help a child feel that Earth is one connected system, using a raindrop, a garden, or a single breath, so they sense the web linking rock, water, air, and life?` },
            { id: `reflect-time`, category: `Deep time`, prompt: `Continents drift, mountains rise, and oxygen accumulates over millions and billions of years, far beyond a human life. Does it change anything for you to hold both the human scale and the planet's vast, slow time at once?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `If Earth's systems are so deeply coupled that one change ripples through them all, what does that imply about the changes humans are now making to the air, water, and life? What responsibility might that connection carry?` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Earth System Explorers`,
            duration: `One afternoon`,
            description: `Turn an afternoon into an exploration of Earth as one interconnected system, finding the four spheres and their interactions right where you live. Start by naming the spheres around you: point out the geosphere (rocks, soil, hills, mountains), the hydrosphere (any water, a puddle, stream, lake, even tap water and ice), the atmosphere (the air, the sky, clouds, wind), and the biosphere (every plant, animal, insect, and person, including yourselves). Then hunt for interactions, where two or more spheres meet: a plant's roots (biosphere) breaking into soil and rock (geosphere) while its leaves take gas from the air (atmosphere); a stream (hydrosphere) carving its banks and carrying sediment (geosphere); moss or lichen (biosphere) growing on a rock and slowly breaking it down. Watch the water cycle in action: notice evaporation (a puddle shrinking, steam from a hot drink), condensation (water beading on a cold glass, dew, fog), and precipitation (rain, snow). Talk through how a single raindrop could travel through all four spheres. Explore the geosphere by examining different rocks and soil, looking for layers, and discussing how mountains rise and erode over immense time; if you're near any hills or cliffs, look for signs of erosion by water or wind. Feel the atmosphere and weather: notice wind, clouds, and temperature, and discuss how the Sun heats things unevenly and how, if you're near a large body of water, it makes the local climate milder. Explore the biosphere's power by discussing that the oxygen everyone is breathing was made by living things, and finding examples of life changing its environment (plants making soil, animals digging, a forest cooling and humidifying the air). For a hands-on model, build a tiny "terrarium" or simply observe a garden as a mini Earth system where rock, water, air, and life all interact. The goal is to stop seeing rocks, water, sky, and living things as separate scenery and start seeing them as Earth scientists do, four great systems endlessly exchanging matter and energy, shaping one another into the single, living, interconnected planet you call home.`,
          },
          projectOption: {
            title: `The Earth System Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate and document how Earth's four spheres interact in a real place or system, becoming an Earth scientist who reveals the hidden connections of the planet. Week 1, choose and observe a system: pick a real place or process to study as an Earth system, a local stream or watershed, a garden or patch of forest, a beach or coastline, a mountain or hillside, a weather pattern, or even a single tree. Observe and document how all four spheres are present and interacting there: identify the geosphere (rock, soil, landforms), hydrosphere (water in any form), atmosphere (air, wind, weather), and biosphere (living things), and most importantly, map the interactions between them, where and how they exchange matter and energy (roots breaking rock, water eroding land, plants exchanging gases with the air, the Sun and possibly internal heat driving it all). Sketch or photograph your system and label the spheres and their connections. Week 2, trace a cycle and tell the story: choose one of the great cycles, the water cycle, the carbon cycle, or the rock cycle, and trace how matter moves through your chosen system and between the spheres (for example, follow water from rain to stream to plant to air, or carbon from air to plant to soil). Research and explain at least one larger-scale interaction connected to your topic (such as how oceans affect climate, how volcanoes affect the atmosphere, how life affects the air, or how plate tectonics shapes the land). Produce your final piece, an illustrated report, a slide deck, a model or diagram, or a narrated video, that presents your chosen Earth system, clearly identifies the four spheres, maps their interactions, traces a cycle of matter through them, and explains the central principle that Earth is one coupled system where nothing happens in isolation. The aim is to experience Earth science as scientists practice it: not memorizing isolated facts about rocks or weather, but seeing the planet as a single, magnificent, interconnected system, and learning to read the web of interactions that shapes the world, starting right in your own backyard.`,
            offerToParent: `Parent: opt your child into the Earth System Investigation project. Observing a real place, a stream, garden, coastline, or hillside, and documenting how the four spheres (geosphere, hydrosphere, atmosphere, biosphere) interact there, then tracing a cycle of matter (water, carbon, or rock) through the system, directly develops the core NGSS Earth-science concepts of Earth as a system of interacting spheres, the great cycles, and the principle that a change in one system affects the others. Mapping real interactions and connecting them to larger phenomena (oceans and climate, volcanoes and atmosphere, life and oxygen) builds systems thinking, observation, and scientific reasoning, while revealing the deep interconnectedness of the planet. It's rigorous, hands-on, standards-aligned work.`,
          },
          identityQuestion: `If you become someone who sees Earth not as scenery but as one coupled system, who can trace a raindrop through every sphere and understand how a volcano cools the world or how life made the air, what kind of thinker does that make you, a person who reads the web of interactions shaping the whole living planet, that someone who sees only separate rocks, water, sky, and creatures never can?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who sees Earth as one connected system, not separate parts.`,
            `A thinker who can trace a raindrop through all four spheres.`,
            `Someone who understands how life itself reshaped the planet.`,
          ],
          saveKey: `identity_responses_sci_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixteen lessons in, and you've turned from the fundamental laws of physics to the magnificent planet they govern: Earth, studied as a single, interconnected system. You learned the four great spheres, the geosphere (solid rock), the hydrosphere (water), the atmosphere (air), and the biosphere (life), and the deepest truth of Earth science: that they are coupled, constantly exchanging matter and energy, so nothing on our planet happens in isolation. You discovered that the solid Earth is slowly alive, with plate tectonics, driven by internal heat, drifting continents, building mountains, and clustering earthquakes and volcanoes along plate boundaries. You traced the great cycles, water, carbon, rock, that move matter endlessly between the spheres, and learned that the atmosphere and ocean together run the weather and climate. Most strikingly, you learned that life itself remade the planet, filling the air with the oxygen you breathe. And you saw that Earth runs on two energy sources at once: sunlight from above and internal heat from below. As an Earth scientist, you reasoned through real puzzles: how one volcano cooled the whole world, why earthquakes and volcanoes trace the same lines, where our oxygen came from, how the ocean controls a continent's weather, and how a single raindrop journeys through every sphere. You now see your planet as a living, interconnected whole. Next, we take this systems view to its most urgent application: environmental science, sustainability, and how humanity manages, and must protect, the Earth we depend on. Onward, {name}. — Cosmo`,
          badge: `earth-reader`,
          badgeName: `Earth Reader`,
          xpEarned: 75,
          competencies: [
            `Knows Earth's four spheres: geosphere, hydrosphere, atmosphere, and biosphere`,
            `Understands the central principle that the spheres are coupled and interact`,
            `Explains plate tectonics, driven by internal heat, and why quakes and volcanoes cluster at boundaries`,
            `Traces the great cycles, water, carbon, and rock, that move matter between spheres`,
            `Understands how the ocean and atmosphere drive weather and climate`,
            `Knows that life (the biosphere) produced Earth's oxygen and reshaped the planet`,
            `Recognizes Earth's two energy sources: sunlight from above and internal heat from below`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Environmental Science — Sustainability and Resource Management`,
            hook: `How humanity uses, strains, and might protect the Earth systems we all depend on. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L16 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
