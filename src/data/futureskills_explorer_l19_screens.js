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
          headline: `What a Robot Actually Is`,
          paragraphs: [
            `A robot is any machine that can sense, think, and act in the world. Not just sci-fi humanoids — factory arms, surgical assistants, Mars rovers, and home vacuum bots are all robots.`,
          ],
          image: `/explorer-assets/future-skills/l19-s1-robot-types.png`,
          imageCaption: `Most real robots don't look like the ones in movies. They look like tools — because that's what they are.`,
          vocab: [
            { word: `robot`,    definition: `A machine that can sense its environment, decide what to do, and take physical action.`,
              audioPrompt: `Forget the movie robots, {name}. A real robot is any machine that senses, thinks, and acts. That includes a factory arm, a Mars rover, and that disc-shaped vacuum cleaning your floor.` },
            { word: `humanoid`, definition: `Shaped like a human. Most real robots are NOT humanoid — they're built for the job they do.`,
              audioPrompt: `Humanoid means human-shaped, {name}. But here's the thing: a human shape is rarely the best shape for a job. A welding arm doesn't need legs. A surgeon's helper doesn't need a face. Form follows function.` },
            { word: `field`,    definition: `An area of study or work. Robotics is a fast-growing field with jobs everywhere from medicine to space.`,
              audioPrompt: `A field is an area of work or study, {name}. Robotics is one of the fastest-growing fields in the world — manufacturing, healthcare, agriculture, space. Whatever you're into, there's a robotics path into it.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Sense, Think, Act`,
          paragraphs: [
            `Every robot has the same three parts: sensors (gather info from the world), a processor (decides what to do), and actuators (carry out the action). Three parts. Every single robot.`,
          ],
          image: `/explorer-assets/future-skills/l19-s2-sense-think-act.png`,
          imageCaption: `Sense → think → act. The whole loop, running thousands of times per second. That's a robot.`,
          vocab: [
            { word: `architecture`,    definition: `How something is organized and built. Every robot — tiny or massive — follows the same basic architecture.`,
              audioPrompt: `Architecture usually means building design, {name}, but in robotics it means the structure of how a robot is built. Sense, think, act. Every robot follows that pattern.` },
            { word: `sense-think-act`, definition: `The three-step loop every robot runs constantly — gather information, decide, take action, repeat.`,
              audioPrompt: `Sense, think, act, {name}. That's the whole loop. A robot does it thousands of times per second. The faster and smarter that loop runs, the more capable the robot.` },
            { word: `component`,        definition: `One of the parts of a larger system. Sensors, processors, and actuators are robot components.`,
              audioPrompt: `Components are the parts that make up a whole, {name}. A robot's three main components — sensors, processor, actuators — work together. Take one away and it's not a robot anymore.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sensors — How Robots Perceive`,
          paragraphs: [
            `Sensors are a robot's eyes and ears. Cameras, microphones, temperature gauges, pressure detectors. The richer the sensors, the more aware the robot is of its surroundings.`,
          ],
          image: `/explorer-assets/future-skills/l19-s3-sensors-perceive.png`,
          imageCaption: `Without sensors, a robot knows nothing about the world. Sensors are step one of every action it takes.`,
          vocab: [
            { word: `sensor`, definition: `The part of a robot that gathers information from the environment — cameras, microphones, pressure detectors.`,
              audioPrompt: `Sensors are a robot's eyes and ears, {name}. A camera sees. A microphone hears. A pressure sensor feels. The richer the sensors, the more the robot knows about what's around it.` },
            { word: `camera`, definition: `A sensor that captures images. One of the most common and powerful sensors used in modern robots.`,
              audioPrompt: `Cameras are everywhere in modern robotics, {name}. They're cheap, they're powerful, and combined with AI they let robots understand a scene almost as well as a person can.` },
            { word: `input`,  definition: `Information coming INTO a system. Sensors provide input to the robot's processor.`,
              audioPrompt: `Input is what comes IN to a system, {name}. Sensors create input — they turn the physical world into data the processor can understand. No input, no decisions, no action.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Actuators — How Robots Act`,
          paragraphs: [
            `Actuators are a robot's muscles. Motors that spin wheels, arms that grip, jets that thrust. Anything that takes physical action is an actuator.`,
          ],
          image: `/explorer-assets/future-skills/l19-s4-actuators-move.png`,
          imageCaption: `Sensors gather. Processors think. But actuators are what actually MOVE things in the real world.`,
          vocab: [
            { word: `actuator`,  definition: `The part of a robot that takes physical action — motors, wheels, arms, grippers, jets.`,
              audioPrompt: `Actuators are a robot's muscles, {name}. If sensors are eyes and processors are brains, actuators are the muscles that actually DO things. Wheels, arms, grippers — any moving part counts.` },
            { word: `motor`,     definition: `A common type of actuator that creates spinning movement. Wheels, propellers, and arms all use motors.`,
              audioPrompt: `Motors are everywhere in robotics, {name}. Every wheel, every spinning joint, every propeller — they're all motors. Different sizes, different speeds, but the same basic idea: electrical signal in, motion out.` },
            { word: `precision`, definition: `Doing something with exact accuracy. Robots can be far more precise than human hands — often hundreds of times more.`,
              audioPrompt: `Precision means doing something exactly right, every single time, {name}. A surgeon's hands are steady — but a robotic arm can make cuts a fraction of a millimeter wide, thousands of times without tiring.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Real World Is Messy`,
          paragraphs: [
            `A robot that works in the lab often fails in the real world. Floors are uneven. Lighting changes. People move unexpectedly. Mars rovers face dust, rocks, and 20-minute communication delays with Earth.`,
          ],
          image: `/explorer-assets/future-skills/l19-s5-real-world-messy.png`,
          imageCaption: `Labs are controlled. The real world isn't. Every surprise is a problem the robot has to handle on its own.`,
          vocab: [
            { word: `unpredictable`, definition: `Impossible to know in advance. The real world is full of unpredictable conditions that labs can't fully recreate.`,
              audioPrompt: `Unpredictable means you can't see it coming, {name}. The real world is full of it — uneven floors, moving people, sudden weather. That's why robots that work in a lab still need years of real-world testing.` },
            { word: `terrain`,       definition: `The surface a robot moves across — flat, rocky, sloped, slippery. Different terrain needs different sensors and movement.`,
              audioPrompt: `Terrain is everything a robot has to travel over, {name}. A factory floor is smooth and flat. Mars is rocky and dusty. Each kind of terrain is a different engineering challenge.` },
            { word: `iteration`,     definition: `Build, test, fix, repeat. The heart of robotics engineering — first versions almost never work perfectly.`,
              audioPrompt: `Iteration is how every great robot gets built, {name}. Build it. Test it. Find what's broken. Fix it. Test it again. The first version will be rough. The tenth version might actually work.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Start Building Today`,
          paragraphs: [
            `You don't need a university lab. Arduino and Raspberry Pi are tiny computers anyone can program — cheaper than a book. FIRST Robotics is a global student competition where many pros got their start.`,
          ],
          image: `/explorer-assets/future-skills/l19-s6-build-today.png`,
          imageCaption: `The tools are cheap. The tutorials are free. The only thing standing between you and your first robot is the decision to start.`,
          vocab: [
            { word: `microcontroller`, definition: `A tiny computer chip used to control robots and electronics. Arduino is the most popular one for beginners.`,
              audioPrompt: `A microcontroller is a whole computer on a single chip, {name}. It reads sensors, runs code, controls motors — and it costs less than a book. Arduino is the most popular one for students.` },
            { word: `prototype`,        definition: `An early version of a robot, built to test the idea and find what works. Almost always fails the first time.`,
              audioPrompt: `Your first prototype will fail, {name} — that's expected. A prototype isn't the final robot. It's the version you build to find out what's wrong, so the next one can be better.` },
            { word: `competition`,      definition: `An event where teams build robots to face the same challenge. FIRST Robotics is where many professional engineers started.`,
              audioPrompt: `Robotics competitions are where theory meets reality, {name}. You don't just design on paper — you build something that has to work, under pressure, against other teams. Many pros say competitions were the start of everything.` },
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
    fetch('/explorer-assets/future-skills/l19-s1-robot-types.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-s2-sense-think-act.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-s3-sensors-perceive.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-s4-actuators-move.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-s5-real-world-messy.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l19-s6-build-today.png',      { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-FUTURESKILLS-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-FUTURESKILLS-L19] One or more magazine assets missing'));
}
