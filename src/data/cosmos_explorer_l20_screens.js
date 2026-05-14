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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The First Step`,
          paragraphs: [
            `In 1957, the Soviet Union launched Sputnik 1 — a small metal sphere that became the first human-made object to orbit Earth.`,
            `It did little more than beep — but it shocked the world. For the first time, something made by human hands was circling the planet.`,
          ],
          image:        '/explorer-assets/cosmos/l20-s1-sputnik.png',
          imageCaption: `Sputnik 1957 — the first human-made object to orbit Earth`,
          vocab: [
            { word: 'Sputnik', definition: `The first human-made object to orbit Earth — launched by the Soviet Union in 1957. It was a small metal sphere that beeped.`, audioPrompt: `Sputnik — the first human-made object to orbit Earth, launched by the Soviet Union in 1957. It was a small metal sphere that beeped.` },
            { word: 'orbit',   definition: `The curved path one object takes around another due to gravity — satellites, the Moon, and the ISS all orbit Earth.`, audioPrompt: `Orbit — the curved path one object takes around another due to gravity. Satellites, the Moon, and the ISS all orbit Earth.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `First Humans in Space`,
          paragraphs: [
            `In 1961, Soviet cosmonaut Yuri Gagarin became the first human to travel to space — orbiting Earth in just 108 minutes.`,
            `Later that year, American astronaut Alan Shepard reached space too. The Space Race had begun — and President Kennedy promised America would land a person on the Moon.`,
          ],
          image:        '/explorer-assets/cosmos/l20-s2-first-human.png',
          imageCaption: `Yuri Gagarin, 1961 — the first human to leave Earth`,
          vocab: [
            { word: 'cosmonaut',  definition: `The Russian word for a space traveller — equivalent to the American term astronaut. Yuri Gagarin was the first cosmonaut.`, audioPrompt: `Cosmonaut — the Russian word for a space traveller, equivalent to the American term astronaut. Yuri Gagarin was the first cosmonaut.` },
            { word: 'Space Race', definition: `The Cold War competition between the United States and Soviet Union to lead in space exploration during the 1950s and 1960s.`, audioPrompt: `Space Race — the Cold War competition between the United States and Soviet Union to lead in space exploration during the 1950s and 1960s.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Walking on the Moon`,
          paragraphs: [
            `On July 20, 1969, Apollo 11 landed on the Moon. Astronaut Neil Armstrong stepped onto the lunar surface.`,
            `Between 1969 and 1972, twelve Americans walked on the Moon. They remain the only humans ever to set foot on another world.`,
          ],
          image:        '/explorer-assets/cosmos/l20-s3-moon-footprint.png',
          imageCaption: `July 20, 1969 — the first human bootprint on another world`,
          vocab: [
            { word: 'Apollo 11', definition: `The NASA mission that landed the first humans on the Moon on July 20, 1969 — Neil Armstrong and Buzz Aldrin walked on the surface.`, audioPrompt: `Apollo 11 — the NASA mission that landed the first humans on the Moon on July 20, 1969. Neil Armstrong and Buzz Aldrin walked on the surface.` },
            { word: 'lunar',     definition: `Relating to the Moon. The lunar surface is the ground of the Moon — covered in grey dust and craters billions of years old.`, audioPrompt: `Lunar — relating to the Moon. The lunar surface is the ground of the Moon, covered in grey dust and craters billions of years old.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Robots Lead the Way`,
          paragraphs: [
            `Before sending humans, we send robots. Robotic spacecraft can go places too dangerous or distant for people, and operate for decades.`,
            `The Voyager probes launched in 1977 have left the solar system entirely. Mars rovers like Perseverance still explore the Martian surface today.`,
          ],
          image:        '/explorer-assets/cosmos/l20-s4-robots-scouts.png',
          imageCaption: `Robots are humanity's scouts — Voyager beyond the solar system, rovers crawling Mars`,
          vocab: [
            { word: 'space probe', definition: `An unmanned spacecraft sent to explore space, planets, or moons — no crew on board, just instruments transmitting data home.`, audioPrompt: `Space probe — an unmanned spacecraft sent to explore space, planets, or moons. No crew on board, just instruments transmitting data home.` },
            { word: 'rover',       definition: `A robotic vehicle designed to drive across the surface of a planet or moon. Mars rovers like Perseverance explore the red planet.`, audioPrompt: `Rover — a robotic vehicle designed to drive across the surface of a planet or moon. Mars rovers like Perseverance explore the red planet.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The Space Station`,
          paragraphs: [
            `The International Space Station orbits 400 km above Earth, circling the planet every 90 minutes. It's been continuously inhabited since November 2000.`,
            `Astronauts from 16 nations live there in microgravity — where everything floats, tears form spheres in midair, and you sleep strapped down so you don't drift.`,
          ],
          image:        '/explorer-assets/cosmos/l20-s5-iss.png',
          imageCaption: `The ISS — continuously inhabited since 2000, a 16-nation home in orbit`,
          vocab: [
            { word: 'International Space Station', definition: `A permanently inhabited research lab orbiting Earth at 400 km — a 16-nation partnership, continuously occupied since November 2000.`, audioPrompt: `International Space Station — a permanently inhabited research lab orbiting Earth at 400 km. A 16-nation partnership, continuously occupied since November 2000.` },
            { word: 'microgravity',                definition: `The floating sensation on the ISS. Everything appears weightless because the station and everything inside it are falling around Earth together.`, audioPrompt: `Microgravity — the floating sensation on the ISS. Everything appears weightless because the station and everything inside it are falling around Earth together.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `What's Next`,
          paragraphs: [
            `NASA's Artemis program will return humans to the Moon — landing the first woman and first person of colour on the lunar surface.`,
            `Mars is the next great destination. With SpaceX's reusable rockets driving costs down, the generation growing up today may be the one that walks on Mars.`,
          ],
          image:        '/explorer-assets/cosmos/l20-s6-mars-future.png',
          imageCaption: `The Moon next. Then Mars. The next chapter is being written right now.`,
          vocab: [
            { word: 'Artemis program', definition: `NASA's program to return humans to the Moon — named after Apollo's twin sister in Greek myth. Will land the first woman on the Moon.`, audioPrompt: `Artemis program — NASA's program to return humans to the Moon, named after Apollo's twin sister in Greek myth. Will land the first woman on the Moon.` },
            { word: 'reusable rocket', definition: `A rocket designed to land back on Earth and launch again — pioneered by SpaceX, dramatically reducing the cost of reaching space.`, audioPrompt: `Reusable rocket — a rocket designed to land back on Earth and launch again. Pioneered by SpaceX, dramatically reducing the cost of reaching space.` },
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
    fetch('/explorer-assets/cosmos/l20-s1-sputnik.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-s2-first-human.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-s3-moon-footprint.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-s4-robots-scouts.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-s5-iss.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l20-s6-mars-future.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L20] sputnik: ${r1.ok}, first-human: ${r2.ok}, moon-footprint: ${r3.ok}, robots-scouts: ${r4.ok}, iss: ${r5.ok}, mars-future: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L20] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l20_screens;
