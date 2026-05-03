// ─────────────────────────────────────────────────────────────────────────────
// Future Skills  |  L19 — Robotics: Machines That Move
// Age band : explorers (6–8)   Guide: byte
// ─────────────────────────────────────────────────────────────────────────────

const FS_L19 = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',

  lessons: [
    {
      id:        'fs-6-8-19',
      title:     'Robotics: Machines That Move',
      duration:  12,
      xpReward:  50,
      badge:     'robotics-engineer',
      badgeName: 'Robotics Engineer',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l19-welcome',
          type:     'welcome',
          headline: 'Robotics: Machines That Move',
          subtitle: `How robots sense, think, and act — and why building them is one of the most exciting things you can do`,
          visual:   '/explorer-assets/future-skills/l19-welcome.png',
        },

        // ── 2. MAGAZINE — §1 Hook ───────────────────────────────────────────
        {
          id:      'l19-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What is a robot, really?`,
            body: `A robot is a machine that can sense its environment, process information, and take physical action in the world. That's a much wider definition than most people expect. Robots aren't just the humanoid machines from science fiction — they're the mechanical arms welding cars in factories, the home cleaning robots that navigate around furniture, the rovers exploring the surface of Mars, and the surgical assistance systems helping doctors perform delicate operations. What they all share is the same three-part architecture: sensors, a processor, and actuators.`,
            image:   '/explorer-assets/future-skills/l19-magazine-1.png',
            caption: `Robots come in every shape — what makes them robots is how they work`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l19-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Sensors, processors, and actuators`,
            body: `Every robot needs three things. **Sensors** gather information from the environment — cameras, microphones, pressure sensors, temperature gauges. **Processors** (usually a small computer inside the robot) analyse that information and decide what to do. **Actuators** then carry out the action — motors that spin wheels, arms that grip objects, speakers that make sounds. A home cleaning robot uses sensors to detect obstacles, a processor to map a path, and wheel motors as its actuators. A surgical assistance system uses cameras and force sensors as its senses, and precision robotic arms as its actuators.`,
            image:   '/explorer-assets/future-skills/l19-magazine-2.png',
            caption: `Sensors hear the world. Processors think. Actuators act.`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l19-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Why the real world is hard`,
            body: `Programming a robot in a controlled lab is one thing. Getting it to work reliably in the messy, unpredictable real world is much harder. Floors are uneven. Lighting changes. People move in unexpected ways. A robot exploring another planet has to handle extreme temperatures, shifting terrain, and communication delays of up to twenty minutes with Earth. This is one reason robotics engineers spend so much time testing and improving their designs — the real world always has surprises that the lab didn't.`,
            image:   '/explorer-assets/future-skills/l19-magazine-3.png',
            caption: `The real world is far less predictable than any lab test`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l19-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `How to get started in robotics`,
            body: `You don't need a university lab to start building robots. **Arduino** and **Raspberry Pi** are small, affordable computer boards used by students worldwide to build real robots. Programmable construction sets let you design physical structures and bring them to life with code. **FIRST Robotics** is a global student competition where teams design and build full-size robots — many of the engineers working at major space and robotics companies today competed in FIRST as students. The most important thing is to start: build something simple, see what breaks, and fix it.`,
            image:   '/explorer-assets/future-skills/l19-magazine-4.png',
            caption: `Arduino, Raspberry Pi, and FIRST Robotics are brilliant starting points`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match game ────────────────────────────────
        {
          id:     'l19-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'industrial',  label: `🏭 Industrial`,   color: '#60A5FA' },
              { id: 'service',     label: `🏠 Service`,      color: '#34D399' },
              { id: 'exploration', label: `🌍 Exploration`,  color: '#818CF8' },
              { id: 'medical',     label: `🏥 Medical`,      color: '#F87171' },
            ],
            items: [
              {
                id:          'l19-g1',
                image:       'l19-game-1.png',
                label:       `A mechanical arm in a factory that welds car parts together with exact precision.`,
                correctBucket: 'industrial',
                matchPhrase:   `That's an industrial robot — built for precise, repeatable factory tasks.`,
              },
              {
                id:          'l19-g2',
                image:       'l19-game-2.png',
                label:       `A small disc-shaped robot that maps your floors and vacuums them automatically.`,
                correctBucket: 'service',
                matchPhrase:   `That's a service robot — designed to help people in everyday environments.`,
              },
              {
                id:          'l19-g3',
                image:       'l19-game-3.png',
                label:       `A six-wheeled rover rolling across the surface of a distant planet, collecting rock samples.`,
                correctBucket: 'exploration',
                matchPhrase:   `That's an exploration robot — built to go places humans can't safely reach.`,
              },
              {
                id:          'l19-g4',
                image:       'l19-game-4.png',
                label:       `A surgical assistance system that helps a doctor perform tiny, precise incisions.`,
                correctBucket: 'medical',
                matchPhrase:   `That's a medical robot — used to assist surgeons with precision beyond human hands.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l19-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l19-q1',
              format:       'mc',
              question:     `What are the three components that every robot must have?`,
              options:      [
                `A battery, a screen, and wheels`,
                `Sensors, a processor, and actuators`,
                `A camera, a microphone, and a speaker`,
                `A computer, an internet connection, and a motor`,
              ],
              correctIndex: 1,
              explanation:  `Every robot — no matter how simple or complex — needs sensors to gather information, a processor to make decisions, and actuators to take physical action.`,
            },

            // Q2 — MC (source)
            {
              id:           'l19-q2',
              format:       'mc',
              question:     `Why do robotics engineers spend so much time testing robots in real-world conditions?`,
              options:      [
                `Because robots need lots of practice before they can work`,
                `Because robots are expensive and must not break`,
                `Because the real world is unpredictable in ways a controlled lab can't fully replicate`,
                `Because engineers enjoy travelling to different locations`,
              ],
              correctIndex: 2,
              explanation:  `Real environments are messy — uneven surfaces, changing light, unexpected obstacles. A robot that works perfectly in a lab often needs significant adjustment for the real world.`,
            },

            // Q3 — MC (fresh replacement — conceptual)
            {
              id:           'l19-q3',
              format:       'mc',
              question:     `What is an "actuator" in a robot?`,
              options:      [
                `The part that receives signals from the environment`,
                `The component that lets a robot take physical action — like a motor, wheel, or arm`,
                `The central computer that processes information`,
                `The battery that powers all the robot's systems`,
              ],
              correctIndex: 1,
              explanation:  `Actuators are the "muscles" of a robot — they carry out the physical actions decided by the processor, such as spinning wheels, gripping objects, or moving an arm.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l19-q4',
              format:       'tf',
              question:     `All robots — from factory arms to space rovers to surgical systems — share the same three-part structure: sensors, a processor, and actuators.`,
              correctAnswer: true,
              explanation:  `True. This three-part architecture is what defines a robot. The sensors, processor, and actuators may look very different across robot types, but every robot has all three.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l19-q5',
              format:       'fill-blank',
              question:     `The part of a robot that carries out physical actions — like spinning wheels, gripping objects, or moving an arm — is called the ___.`,
              options:      ['actuators', 'sensors', 'processor', 'battery'],
              correctIndex: 0,
              explanation:  `Actuators are the action-taking parts of a robot. Without them, a robot could sense and think but couldn't do anything in the physical world.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l19-q6',
              format:       'mc',
              question:     `Why do robots that explore other planets face challenges that factory robots typically don't?`,
              options:      [
                `They need to be much more colourful to be spotted by cameras`,
                `They have to fit inside a rocket, which limits their size`,
                `They face extreme, unpredictable conditions and communication delays that can't be tested in advance`,
                `They don't have access to electricity`,
              ],
              correctIndex: 2,
              explanation:  `Planetary rovers face extreme temperatures, terrain that has never been mapped, and communication delays of many minutes — all situations that can't be fully replicated in a lab on Earth.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l19-realworld',
          type: 'real-world',
          content: {
            scenario:    `Robot Spotter`,
            description: `Over the next week, see how many different robots you can spot in real life or in the news. For each one, try to identify: What are its sensors? What decisions does its processor make? What are its actuators?`,
            familyAdventure: `Search online for a video of student robotics competition teams. Watch one together and talk about: What problem is the robot solving? What sensors do you think it uses? What challenges do you think the team faced when building it?`,
            realWorldConnection: `Robotics engineers work in manufacturing, space exploration, medicine, agriculture, and disaster response. Many of today's engineers first got interested in robotics through student competitions and hobby kits — just like Arduino and FIRST Robotics.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l19-celebration',
          type: 'celebration',
          content: {
            message: `Brilliant work, {name}! You now understand how every robot works — sensors to sense, processors to think, actuators to act — and why the real world makes robotics so challenging and so exciting. The future of robotics needs curious builders just like you. Byte is so proud to share this knowledge with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default FS_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = FS_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = FS_L19.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = FS_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-FUTURESKILLS-L19] Loaded: "Robotics: Machines That Move" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l19-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-FUTURESKILLS-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-FUTURESKILLS-L19] One or more magazine assets missing'));
}
