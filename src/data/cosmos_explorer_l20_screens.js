// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 20
// "Space Exploration: Humans in Space"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l20_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-20',
      title:     `Space Exploration: Humans in Space`,
      duration:  12,
      xpReward:  50,
      badge:     'space-explorer',
      badgeName: `Space Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `In 1957, humanity launched its first object into orbit. Twelve years later, humans walked on the Moon. Today, people live in space continuously, robots explore the surface of Mars, and a spacecraft launched in 1977 has left the solar system entirely. We are a species that reaches for the stars — and we're just getting started.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `The Space Race`,
          paragraphs: [
            `The modern era of space exploration began in the context of Cold War competition between the United States and the Soviet Union. In 1957, the Soviet Union launched Sputnik 1 — the first human-made object to orbit Earth. It was a small metal sphere that did little more than beep — but it shocked the world. For the first time in history, something made by human hands was circling the planet.`,
            `Four years later, Soviet cosmonaut Yuri Gagarin became the first human being to travel to space, completing one orbit of Earth in 1961. His journey lasted 108 minutes. Later that same year, American astronaut Alan Shepard became the first American in space. The race was on. US President John F. Kennedy declared that America would land a person on the Moon before the decade was out.`,
            `On 20 July 1969, Apollo 11 landed on the Moon. Astronaut Neil Armstrong stepped onto the lunar surface and spoke words that have echoed ever since. Twelve Americans walked on the Moon between 1969 and 1972 — the only humans who have ever set foot on another world. The last boot print left on the Moon is still there, perfectly preserved in the dust, waiting.`,
          ],
          image:        '/explorer-assets/cosmos/l20-magazine-space-race.png',
          imageCaption: `The Space Race — from Sputnik to Apollo 11, humanity's first steps beyond Earth`,
          vocab: [
            { word: 'orbit',    definition: `The curved path an object takes around another object due to gravity — satellites, the Moon, and the International Space Station all orbit Earth in continuous freefall around the planet.`, audioPrompt: `Orbit — the curved path an object takes around another object due to gravity. Satellites, the Moon, and the International Space Station all orbit Earth in continuous freefall around the planet.` },
            { word: 'cosmonaut', definition: `The Russian word for a space traveller — equivalent to the American term "astronaut." Soviet cosmonauts were the first humans in space, beginning with Yuri Gagarin in 1961.`,               audioPrompt: `Cosmonaut — the Russian word for a space traveller, equivalent to the American term astronaut. Soviet cosmonauts were the first humans in space, beginning with Yuri Gagarin in 1961.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Robots in Space: Our Eyes and Ears`,
          paragraphs: [
            `Before sending humans to a new destination, space agencies typically send robots first. Robotic spacecraft can go places too dangerous or distant for humans, operate for decades without life support, and send back data at a fraction of the cost of a crewed mission. They are humanity's scouts — exploring the solar system on our behalf.`,
            `The Voyager probes, launched in 1977, flew past Jupiter, Saturn, Uranus, and Neptune — the only spacecraft ever to visit the outer planets — and are now beyond the solar system entirely, still transmitting data after nearly 50 years. The Hubble Space Telescope, launched in 1990, has captured images of galaxies billions of light-years away and transformed our understanding of the universe. Mars rovers — from Sojourner to Curiosity to Perseverance — have explored the Martian surface, analysed rocks, and searched for signs of ancient life.`,
            `Perseverance, which landed on Mars in 2021, carries a small helicopter called Ingenuity — the first powered aircraft to fly on another planet. Ingenuity's first flight lasted 39 seconds. It has since completed dozens of flights, scouting ahead for the rover. Every robotic mission extends human knowledge by billions of miles — and prepares the way for the humans who may one day follow.`,
          ],
          image:        '/explorer-assets/cosmos/l20-magazine-robots.png',
          imageCaption: `Robots in space — Voyager, Hubble, and Mars rovers exploring the solar system as humanity's scouts`,
          vocab: [
            { word: 'space probe', definition: `An unmanned spacecraft sent to explore space, planets, or other celestial bodies — probes carry instruments to gather data and transmit it back to Earth without a crew on board.`,   audioPrompt: `Space probe — an unmanned spacecraft sent to explore space, planets, or other celestial bodies. Probes carry instruments to gather data and transmit it back to Earth without a crew on board.` },
            { word: 'rover',       definition: `A robotic vehicle designed to move across the surface of a planet or moon — Mars rovers like Curiosity and Perseverance drive across the Martian surface, analysing rocks and soil.`, audioPrompt: `Rover — a robotic vehicle designed to move across the surface of a planet or moon. Mars rovers like Curiosity and Perseverance drive across the Martian surface, analysing rocks and soil.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The International Space Station`,
          paragraphs: [
            `The International Space Station — the ISS — is a permanently inhabited laboratory orbiting Earth at about 400 kilometres altitude, completing one orbit every 90 minutes. It has been continuously inhabited since November 2000, making it humanity's longest-running presence in space. The ISS is the size of a football field, and was assembled in orbit over more than a decade using components launched on over 40 missions.`,
            `The ISS is a partnership among 16 nations — including former Cold War rivals the United States and Russia — alongside Europe, Japan, and Canada. Astronauts typically spend six months aboard, conducting experiments in a unique environment impossible to create on Earth: microgravity. In microgravity, everything floats. Sleeping requires being strapped down. Eating requires special sealed containers. Even tears don't fall — they form floating spheres around your eyes.`,
            `Research aboard the ISS has produced advances in medicine, materials science, and our understanding of how the human body responds to long-duration spaceflight. Bones weaken. Muscles atrophy. Vision can change. Understanding and solving these problems is essential for any future mission to Mars — which would take months in deep space, far beyond the safety of Earth.`,
          ],
          image:        '/explorer-assets/cosmos/l20-magazine-iss.png',
          imageCaption: `The ISS — humanity's permanent outpost in orbit since 2000, a laboratory 400 km above Earth`,
          vocab: [
            { word: 'microgravity',                  definition: `The condition aboard the ISS where everything appears weightless because the station and everything in it are all falling together around Earth — not zero gravity, but constant freefall.`, audioPrompt: `Microgravity — the condition aboard the ISS where everything appears weightless because the station and everything in it are all falling together around Earth. Not zero gravity, but constant freefall.` },
            { word: 'International Space Station',   definition: `A permanently inhabited research laboratory orbiting Earth at 400 km — a 16-nation partnership continuously occupied since November 2000, used for scientific research in microgravity.`,    audioPrompt: `International Space Station — a permanently inhabited research laboratory orbiting Earth at 400 km. A 16-nation partnership continuously occupied since November 2000, used for scientific research in microgravity.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `What's Next? The Future of Space Exploration`,
          paragraphs: [
            `NASA's Artemis program aims to return humans to the Moon — and this time, to stay. Artemis will land the first woman and the first person of colour on the lunar surface, and establish a sustainable presence there as a stepping stone to Mars. The Moon has water ice at its poles — a resource that could be converted to rocket fuel, making it a potential refuelling depot for deeper space missions.`,
            `Mars is the next great destination for human exploration. It's the most Earth-like planet in the solar system — it has a day nearly the same length as Earth's, polar ice caps, seasons, and evidence of ancient liquid water. A crewed mission to Mars would take approximately 7 months of travel each way and require extraordinary life support, radiation shielding, and self-sufficiency. Multiple space agencies and private companies are actively working toward it.`,
            `Private companies have transformed space exploration. SpaceX has developed reusable rockets — a revolution that has dramatically reduced launch costs. Companies like Blue Origin and Rocket Lab are expanding what's possible. The coming decades will likely see lunar bases, Mars missions, and space tourism become reality. The generation growing up today may be the generation that walks on Mars.`,
          ],
          image:        '/explorer-assets/cosmos/l20-magazine-future.png',
          imageCaption: `The future of space exploration — Artemis Moon return, Mars missions, and a new era of human spaceflight`,
          vocab: [
            { word: 'Artemis program', definition: `NASA's program to return humans to the Moon — named after the Greek goddess and twin of Apollo. Artemis aims to land the first woman and first person of colour on the lunar surface.`, audioPrompt: `Artemis program — NASA's program to return humans to the Moon, named after the Greek goddess and twin of Apollo. Artemis aims to land the first woman and first person of colour on the lunar surface.` },
            { word: 'reusable rocket', definition: `A rocket designed to be recovered and launched again — pioneered by SpaceX, reusable rockets dramatically reduce the cost of reaching space by landing propulsively after delivering their payload to orbit.`, audioPrompt: `Reusable rocket — a rocket designed to be recovered and launched again. Pioneered by SpaceX, reusable rockets dramatically reduce the cost of reaching space by landing propulsively after delivering their payload to orbit.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a crewed mission or a robotic mission!`,
          guideText:     `Some space missions carry human astronauts — crewed missions. Others send spacecraft or rovers with no humans aboard — robotic missions. Both are essential: robots go first, gather data, and take risks; humans follow to explore, adapt, and decide. Can you sort these four famous missions correctly?`,
          columnHeaders: [`The Mission`, `Crewed or Robotic?`],
          items: [
            { image: 'l20-game-apollo.png',       label: `The Apollo 11 mission — carrying three astronauts to the Moon and back in July 1969, with two walking on the lunar surface.`,           correctMatch: 'crewed',  objectPosition: 'center 50%', matchPhrase: `Crewed! Apollo 11 carried three astronauts: Neil Armstrong and Buzz Aldrin walked on the Moon while Michael Collins orbited above. It remains one of the greatest achievements in human history — the first time a person stood on another world. The entire mission lasted 8 days, 3 hours, and 18 minutes.` },
            { image: 'l20-game-voyager.png',      label: `The Voyager 1 spacecraft — launched in 1977 with no crew, now the most distant human-made object ever, beyond the solar system.`,   correctMatch: 'robotic', objectPosition: 'center 50%', matchPhrase: `Robotic! Voyager 1 carries instruments but no crew — it's a fully automated spacecraft. Launched in 1977, it flew past Jupiter and Saturn before heading out of the solar system. In 2012, it became the first human-made object to enter interstellar space. It's now over 23 billion kilometres from Earth, still sending data home.` },
            { image: 'l20-game-iss.png',          label: `The International Space Station — a permanently inhabited laboratory in orbit continuously occupied by astronauts from multiple nations since 2000.`, correctMatch: 'crewed',  objectPosition: 'center 50%', matchPhrase: `Crewed! The ISS has been continuously inhabited since November 2000 — over two decades of humans living and working in space. Typically 6–7 astronauts live aboard at any time, from partner nations including the US, Russia, Japan, and Europe. It's humanity's only permanent home beyond Earth's surface.` },
            { image: 'l20-game-perseverance.png', label: `The Perseverance rover — an automated robotic vehicle exploring the surface of Mars and collecting rock samples since landing in 2021.`, correctMatch: 'robotic', objectPosition: 'center 50%', matchPhrase: `Robotic! Perseverance is a fully robotic rover — controlled remotely from Earth, with no crew. It landed on Mars in February 2021 in Jezero Crater, an ancient lake bed. It carries cameras, scientific instruments, and the Ingenuity helicopter. It's collecting rock samples that may one day be returned to Earth for detailed analysis.` },
          ],
          buckets: [
            { id: 'crewed',  label: `👨‍🚀 Crewed Mission`,  color: '#60A5FA' },
            { id: 'robotic', label: `🤖 Robotic Mission`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about space exploration. Answer all 6 questions to earn your Space Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Who was the first human being to travel to space?`,
              options:      [`Neil Armstrong — the first human to walk on the Moon`, `Alan Shepard — the first American in space`, `Yuri Gagarin — a Soviet cosmonaut who orbited Earth in April 1961`, `John Glenn — the first American to orbit Earth`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Why do scientists send robotic spacecraft before crewed missions?`,
              options:      [`Robots travel significantly faster than crewed spacecraft`, `Robots are far cheaper and easier to train than astronauts`, `Robots can explore dangerous environments and gather data without risking human lives`, `Robots can communicate more quickly with mission control on Earth`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is the International Space Station primarily used for?`,
              options:      [`Launching rockets and probes to other planets in the solar system`, `Military surveillance and observation of Earth's surface`, `Scientific research in microgravity — studying how space affects the human body, materials, and biological systems`, `Storing fuel and supplies for future deep-space crewed missions`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `The International Space Station has been continuously inhabited by humans since November 2000 — over two decades of permanent human presence in space.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Voyager 1, launched in 1977, is now the most distant ___ object ever made — now travelling through interstellar space.`,
              options:      [`human-made`, `metallic`, `robotic`, `American`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is the Artemis program?`,
              options:      [`A robotic plan to build a telescope on the surface of Mars`, `NASA's program to return humans to the Moon, with future missions planned to Mars`, `A robotic mission to explore Jupiter's ice moons for signs of life`, `A private mission to build the first permanent human colony on Mars`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Tonight, look up — the ISS may be passing overhead right now, visible to the naked eye as a fast-moving bright dot. You can track its exact position online.`,
          familyAdventure: `Use a free ISS tracking tool (NASA's Spot the Station is the most reliable) to find out when the ISS will pass over your location. Go outside at the predicted time and look for a steadily moving bright dot crossing the sky — no blinking, moving faster than any plane. That's six people living in space, passing 400 km overhead. Wave. Then look up the names of the current ISS crew and find out what experiments they're running.`,
          creativePrompt:  `Design your own Mars mission. Write a one-page mission plan that covers: How many crew members, and what skills do they need? How long will the journey take each way? What will they eat and drink? How will they protect themselves from radiation? What will they do on Mars when they arrive? What will they bring back? Draw the spacecraft or the Mars base. Give your mission a name.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'space-explorer',
          badgeName: `Space Explorer`,
          message:   `Brilliant work, {name}! You now know that humanity has already left its home planet — walked on another world, sent machines to the edge of the solar system, and built a home in orbit. We are a space-faring species. The next chapter is being written right now. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l20_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L20] Loaded: "Space Exploration: Humans in Space" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l20-magazine-space-race.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-magazine-robots.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-magazine-iss.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-magazine-future.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L20] space-race: ${r1.ok}, robots: ${r2.ok}, iss: ${r3.ok}, future: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L20] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l20_screens;
