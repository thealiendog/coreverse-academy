// ─────────────────────────────────────────────────────────────────────────────
// Future Skills  |  L19 — Robotics: Machines That Move
// Age band : explorers (6–8)   Guide: byte
// ─────────────────────────────────────────────────────────────────────────────

const FS_L19 = {
  ageBand:   `explorers`,
  subjectId: `future-skills`,
  guide:     `byte`,

  lessons: [
    {
      id:        `fs-6-8-19`,
      title:     `Robotics: Machines That Move`,
      duration:  12,
      xpReward:  50,
      badge:     `robotics-engineer`,
      badgeName: `Robotics Engineer`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}. Do you know what a robot actually is? Not the sci-fi kind — the real kind. Robots are already everywhere: in factories, in hospitals, in space, in the ocean. And the people who design them are solving some of the most fascinating problems on the planet. Today I'm going to show you how robots sense, think, and act. And by the end of this lesson, you'll understand why robotics is one of the most exciting fields anyone can build a future in. Let's get into it.`,
          headline: `Robotics: Machines That Move`,
          subtitle: `How robots sense, think, and act — and why building them is one of the most exciting things you can do`,
          visual: `/explorer-assets/future-skills/l19-welcome.png`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What is a robot, really?`,
          paragraphs: [
            `A robot is a machine that can sense its environment, process information, and take physical action in the world. That's a much wider definition than most people expect. Robots aren't just the humanoid machines from science fiction — they're the mechanical arms welding cars in factories, the home cleaning robots that navigate around furniture, the rovers exploring the surface of Mars, and the surgical assistance systems helping doctors perform delicate operations. What they all share is the same three-part architecture: sensors, a processor, and actuators.`,
          ],
          image: `/explorer-assets/future-skills/l19-magazine-1.png`,
          imageCaption: `Robots come in every shape — what makes them robots is how they work`,
          vocab: [
            { word: `robot`, definition: `A machine that can sense its environment, process information, and take physical action in the world — not just the humanoid machines from movies.`, audioPrompt: `Forget the movie robots, {name}. A real robot is any machine that senses, thinks, and acts. That includes the arm welding cars in a factory, the rover on Mars, and the small disk cleaning your floor at home. They all work on the same three-part idea.` },
            { word: `architecture`, definition: `The way something is organized and built — a robot's architecture describes how its sensors, processor, and actuators work together.`, audioPrompt: `Architecture usually means building design, {name}, but in robotics it means the structure of how a robot is built. Every robot — from the tiniest drone to a full surgical system — follows the same basic architecture: sense, think, act.` },
            { word: `actuator`, definition: `The part of a robot that takes physical action — motors, wheels, arms, and grippers are all actuators.`, audioPrompt: `An actuator is what makes a robot move, {name}. If sensors are the robot's eyes and ears, and the processor is its brain, then actuators are its muscles. Wheels, arms, grippers, jets — any part that physically does something is an actuator.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Sensors, processors, and actuators`,
          paragraphs: [
            `Every robot needs three things. **Sensors** gather information from the environment — cameras, microphones, pressure sensors, temperature gauges. **Processors** (usually a small computer inside the robot) analyse that information and decide what to do. **Actuators** then carry out the action — motors that spin wheels, arms that grip objects, speakers that make sounds. A home cleaning robot uses sensors to detect obstacles, a processor to map a path, and wheel motors as its actuators. A surgical assistance system uses cameras and force sensors as its senses, and precision robotic arms as its actuators.`,
          ],
          image: `/explorer-assets/future-skills/l19-magazine-2.png`,
          imageCaption: `Sensors hear the world. Processors think. Actuators act.`,
          vocab: [
            { word: `sensor`, definition: `The part of a robot that gathers information from the environment — cameras, microphones, and pressure detectors are all sensors.`, audioPrompt: `Sensors are a robot's eyes and ears, {name}. Without them, it can't know anything about the world around it. A camera sees. A microphone hears. A pressure sensor feels. The richer the sensors, the more aware the robot.` },
            { word: `processor`, definition: `The computer inside a robot that receives information from sensors and decides what to do — the robot's brain.`, audioPrompt: `The processor is where the thinking happens, {name}. It takes everything the sensors gather and figures out: what should I do next? A simple processor handles basic rules. A powerful one can map a room, recognize faces, or navigate a planet.` },
            { word: `precision`, definition: `The ability to act with exact accuracy — robots used in surgery or manufacturing need precision far beyond what human hands can reliably achieve.`, audioPrompt: `Precision means doing something exactly right, every single time, {name}. A surgeon's hands are remarkably steady — but a robotic arm can make cuts just a fraction of a millimeter wide, repeated thousands of times without ever getting tired.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why the real world is hard`,
          paragraphs: [
            `Programming a robot in a controlled lab is one thing. Getting it to work reliably in the messy, unpredictable real world is much harder. Floors are uneven. Lighting changes. People move in unexpected ways. A robot exploring another planet has to handle extreme temperatures, shifting terrain, and communication delays of up to twenty minutes with Earth. This is one reason robotics engineers spend so much time testing and improving their designs — the real world always has surprises that the lab didn't.`,
          ],
          image: `/explorer-assets/future-skills/l19-magazine-3.png`,
          imageCaption: `The real world is far less predictable than any lab test`,
          vocab: [
            { word: `unpredictable`, definition: `Impossible to know in advance — the real world is unpredictable in ways a lab environment can never fully replicate.`, audioPrompt: `Unpredictable means you can't see it coming, {name}. In a lab, everything is controlled — the lighting, the floor, the temperature. But the real world changes constantly. Floors have bumps. People move unexpectedly. Weather shifts. That's why testing robots outside the lab is a completely different challenge.` },
            { word: `terrain`, definition: `The surface a robot moves across — terrain can be flat, rocky, sloped, or wet, each requiring different sensors and movement strategies.`, audioPrompt: `Terrain is everything a robot has to travel over, {name}. A factory floor is flat, smooth, and predictable. A Martian surface is rocky, dusty, and full of surprises — no roads, no curbs, no maps. Designing a robot that handles unknown terrain is one of the hardest problems in robotics.` },
            { word: `iteration`, definition: `The process of testing, finding problems, and improving — robotics engineers use many rounds of iteration before a robot works reliably.`, audioPrompt: `Iteration means you build, test, find a flaw, fix it, and go again, {name}. Robotics engineers don't expect the first version to work perfectly. Each test — whether it succeeds or fails — teaches them something. The robot gets better with every cycle. That's iteration.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to get started in robotics`,
          paragraphs: [
            `You don't need a university lab to start building robots. **Arduino** and **Raspberry Pi** are small, affordable computer boards used by students worldwide to build real robots. Programmable construction sets let you design physical structures and bring them to life with code. **FIRST Robotics** is a global student competition where teams design and build full-size robots — many of the engineers working at major space and robotics companies today competed in FIRST as students. The most important thing is to start: build something simple, see what breaks, and fix it.`,
          ],
          image: `/explorer-assets/future-skills/l19-magazine-4.png`,
          imageCaption: `Arduino, Raspberry Pi, and FIRST Robotics are brilliant starting points`,
          vocab: [
            { word: `microcontroller`, definition: `A tiny, affordable computer chip used to control robots and electronic devices — Arduino is one of the most popular microcontrollers for beginners.`, audioPrompt: `A microcontroller is a whole computer on a single chip, {name}. It can read sensors, run simple programs, and control motors — all from something smaller than your thumb. Arduino is the most popular one for students, and it costs less than a book. That's all you need to start building real robots.` },
            { word: `competition`, definition: `An event where teams build robots to complete challenges against each other — student robotics competitions like FIRST are where many professional engineers got their start.`, audioPrompt: `Robotics competitions are where theory meets reality, {name}. You don't just design on paper — you build something that has to actually work under pressure, against other teams, in front of an audience. Many engineers at major space companies say their FIRST Robotics experience is what got them there.` },
            { word: `prototype`, definition: `An early version built to test whether an idea works — robotics teams build and rebuild prototypes many times before a competition or real-world deployment.`, audioPrompt: `In robotics, your first prototype will almost certainly fail, {name}. That's expected — that's the point. A prototype isn't the final robot. It's the version you build to find out what you got wrong, so the next version can be better. Build it. Break it. Learn from it. Build again.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `industrial`,
              label: `🏭 Industrial`,
              color: `#60A5FA`,
            },
            {
              id: `service`,
              label: `🏠 Service`,
              color: `#34D399`,
            },
            {
              id: `exploration`,
              label: `🌍 Exploration`,
              color: `#818CF8`,
            },
            {
              id: `medical`,
              label: `🏥 Medical`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l19-g1`,
              image: `l19-game-1.png`,
              label: `A mechanical arm in a factory that welds car parts together with exact precision.`,
              matchPhrase: `That's an industrial robot — built for precise, repeatable factory tasks.`,
              correctMatch: `industrial`,
            },
            {
              id: `l19-g2`,
              image: `l19-game-2.png`,
              label: `A small disc-shaped robot that maps your floors and vacuums them automatically.`,
              matchPhrase: `That's a service robot — designed to help people in everyday environments.`,
              correctMatch: `service`,
            },
            {
              id: `l19-g3`,
              image: `l19-game-3.png`,
              label: `A six-wheeled rover rolling across the surface of a distant planet, collecting rock samples.`,
              matchPhrase: `That's an exploration robot — built to go places humans can't safely reach.`,
              correctMatch: `exploration`,
            },
            {
              id: `l19-g4`,
              image: `l19-game-4.png`,
              label: `A surgical assistance system that helps a doctor perform tiny, precise incisions.`,
              matchPhrase: `That's a medical robot — used to assist surgeons with precision beyond human hands.`,
              correctMatch: `medical`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l19-q1`,
              format: `multiple-choice`,
              question: `What are the three components that every robot must have?`,
              options: [
                `A battery, a screen, and wheels`,
                `Sensors, a processor, and actuators`,
                `A camera, a microphone, and a speaker`,
                `A computer, an internet connection, and a motor`,
              ],
              correctIndex: 1,
              explanation: `Every robot — no matter how simple or complex — needs sensors to gather information, a processor to make decisions, and actuators to take physical action.`,
            },
            {
              id: `l19-q2`,
              format: `multiple-choice`,
              question: `Why do robotics engineers spend so much time testing robots in real-world conditions?`,
              options: [
                `Because robots need lots of practice before they can work`,
                `Because robots are expensive and must not break`,
                `Because the real world is unpredictable in ways a controlled lab can't fully replicate`,
                `Because engineers enjoy travelling to different locations`,
              ],
              correctIndex: 2,
              explanation: `Real environments are messy — uneven surfaces, changing light, unexpected obstacles. A robot that works perfectly in a lab often needs significant adjustment for the real world.`,
            },
            {
              id: `l19-q3`,
              format: `multiple-choice`,
              question: `What is an "actuator" in a robot?`,
              options: [
                `The part that receives signals from the environment`,
                `The component that lets a robot take physical action — like a motor, wheel, or arm`,
                `The central computer that processes information`,
                `The battery that powers all the robot's systems`,
              ],
              correctIndex: 1,
              explanation: `Actuators are the "muscles" of a robot — they carry out the physical actions decided by the processor, such as spinning wheels, gripping objects, or moving an arm.`,
            },
            {
              id: `l19-q4`,
              format: `true-false`,
              question: `All robots — from factory arms to space rovers to surgical systems — share the same three-part structure: sensors, a processor, and actuators.`,
              correctAnswer: true,
              explanation: `True. This three-part architecture is what defines a robot. The sensors, processor, and actuators may look very different across robot types, but every robot has all three.`,
            },
            {
              id: `l19-q5`,
              format: `fill-blank`,
              question: `The part of a robot that carries out physical actions — like spinning wheels, gripping objects, or moving an arm — is called the ___.`,
              options: [
                `actuators`,
                `sensors`,
                `processor`,
                `battery`,
              ],
              correctIndex: 0,
              explanation: `Actuators are the action-taking parts of a robot. Without them, a robot could sense and think but couldn't do anything in the physical world.`,
            },
            {
              id: `l19-q6`,
              format: `multiple-choice`,
              question: `Why do robots that explore other planets face challenges that factory robots typically don't?`,
              options: [
                `They need to be much more colourful to be spotted by cameras`,
                `They have to fit inside a rocket, which limits their size`,
                `They face extreme, unpredictable conditions and communication delays that can't be tested in advance`,
                `They don't have access to electricity`,
              ],
              correctIndex: 2,
              explanation: `Planetary rovers face extreme temperatures, terrain that has never been mapped, and communication delays of many minutes — all situations that can't be fully replicated in a lab on Earth.`,
            },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Robotics engineers work in manufacturing, space exploration, medicine, agriculture, and disaster response. Many of today's engineers first got interested in robotics through student competitions and hobby kits — just like Arduino and FIRST Robotics.`,
          familyAdventure: `Search online for a video of student robotics competition teams. Watch one together and talk about: What problem is the robot solving? What sensors do you think it uses? What challenges do you think the team faced when building it?`,
          creativePrompt: `Over the next week, see how many different robots you can spot in real life or in the news. For each one, try to identify: What are its sensors? What decisions does its processor make? What are its actuators?`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Brilliant work, {name}! You now understand how every robot works — sensors to sense, processors to think, actuators to act — and why the real world makes robotics so challenging and so exciting. The future of robotics needs curious builders just like you. Byte is so proud to share this knowledge with you.`,
          badge: `robotics-engineer`,
          badgeName: `Robotics Engineer`,
          xpEarned: 50,
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
