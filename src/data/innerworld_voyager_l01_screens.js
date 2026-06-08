// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L01 — Consciousness: What Is It and Why Does It Matter?
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Philosophy of Mind + Cognitive Science intro
// CALIBRATED: Voyager spec v1 (May 2026)
// 12-screen format: welcome + 5 mag + perspectives + quiz + reflection + real-world + identity-hook + celebration
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l01-v1";

const INNERWORLD_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-01`,
      title: `Consciousness: What Is It and Why Does It Matter?`,
      duration: 35,
      xpReward: 75,
      badge: `consciousness-explorer`,
      badgeName: `Consciousness Explorer`,

      screens: [
        // ───── 1. WELCOME ─────────────────────────────────────────────────────
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, quick question. Right now, something is reading these words, understanding them, having a tiny reaction to them. That something is what philosophers and neuroscientists call consciousness. Nobody on Earth, including the smartest scientists alive, can fully explain how it works. We can describe brain activity in extreme detail, we can map every neuron firing, and we still cannot say WHY any of it feels like something from the inside. That is the territory we are walking into today. Welcome to Voyagers.`,
          headline: `Consciousness: What Is It and Why Does It Matter?`,
          subtitle: `The deepest unsolved question in science`,
          visual: `/voyager-assets/inner-world/l01-welcome.webp`,
        },

        // ───── 2. MAGAZINE 1 — THE HARD PROBLEM ──────────────────────────────
        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Hardest Question`,
          paragraphs: [
            `In 1998, two researchers made a bet that's still running today. Philosopher David Chalmers wagered neuroscientist Christof Koch a case of wine that within 25 years, someone would discover what generates conscious experience in the brain. The deadline came and went in 2023. Koch won. We still don't know.`,
            `Here's what makes consciousness so hard. We can map every neuron in your brain. We can watch which regions light up when you see red, feel afraid, or recall your fifth birthday. But none of that explains why any of it feels like something. Why isn't the brain just processing information in the dark, like a computer running code? Why is there a 'you' in there, having experiences?`,
            `Chalmers called this 'the hard problem of consciousness.' Easy problems are things like how the brain processes vision, stores memories, or controls movement (hard, but solvable). The hard problem is: why does any of it feel like something from the inside? Two thousand years of philosophy and a century of neuroscience later, we still cannot answer it.`,
          ],
          image: `/voyager-assets/inner-world/l01-s1-hard-problem.webp`,
          imageCaption: `The hard problem of consciousness, named by philosopher David Chalmers in 1995.`,
          vocab: [
            {
              word: `consciousness`,
              definition: `The subjective experience of being aware. The 'what it is like' to be you from the inside.`,
              audioPrompt: `Consciousness is the subjective experience of being aware, {name}. It is the 'what it is like' to be you from the inside, right now, reading these words. The strange thing about consciousness is that it cannot be measured from the outside. A scientist can watch your brain activity, but they cannot directly see your experience of seeing red, or your feeling of hearing your favorite song. That gap between what brains do and what experience feels like is the puzzle people have been trying to crack for thousands of years. What do you think is happening inside you right now that makes this reading feel like something?`,
            },
          ,
            {
              word: `hard problem`,
              definition: `David Chalmers' term for the question of why brain processes feel like something from the inside, as distinct from easier questions about how the brain processes information.`,
              audioPrompt: `The hard problem is David Chalmers' name for the deepest question in consciousness science, {name}. Easy problems are things like how the brain stores memories or controls movement. Hard, but solvable. The hard problem is different. It asks: why does any of it feel like something from the inside? Two thousand years of philosophy and a century of neuroscience have not answered it. In 1998, Chalmers even wagered neuroscientist Christof Koch a case of wine that the problem would be solved within 25 years. The deadline came and went in 2023. Koch won. The feeling of being you, from the inside, remains unexplained.`,
            },
            {
              word: `neuroscientist`,
              definition: `A scientist who studies the brain and nervous system. Neuroscientists can map neural activity in precise detail but still cannot fully explain why it generates conscious experience.`,
              audioPrompt: `A neuroscientist is a scientist who studies the brain and nervous system, {name}. Neuroscientists can watch which regions light up when you see red, feel afraid, or recall a memory. They can map every neuron firing in extreme detail. And yet even with all of that, they cannot say why any of it feels like something from the inside. That is the gap at the center of this lesson. The best brain science in the world can describe what the brain does. It cannot yet describe why what the brain does produces experience. That gap is what makes consciousness the deepest unsolved question in science.`,
            }
          ],
        },

        // ───── 3. MAGAZINE 2 — QUALIA ─────────────────────────────────────────
        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Qualia: The Redness of Red`,
          paragraphs: [
            `Try to describe the color red to someone who has been blind from birth. You can give them the wavelength (around 700 nanometers). You can tell them red is the color of blood, of fire trucks, of a tomato. You can play them songs about red. But none of that gives them the actual experience of seeing red.`,
            `Philosophers call that experience a 'quale' (singular) or 'qualia' (plural). Qualia are the raw felt qualities of experience: the redness of red, the painfulness of pain, the taste of coffee, the feeling of homesickness. They are what experience is made of. And here is the strange part: science can describe the physical processes that produce qualia, but cannot describe the qualia themselves.`,
            `Australian philosopher Frank Jackson made this point with a thought experiment in 1982. Imagine a brilliant neuroscientist named Mary who has lived her entire life in a black-and-white room. She knows everything science can possibly teach about color vision, covering every wavelength, every neuron, every brain pathway. The day she walks out of the room and sees red for the first time, does she learn something new? Most people instinctively say yes. If yes, then there is something about red that science cannot capture in equations. That something is qualia.`,
          ],
          image: `/voyager-assets/inner-world/l01-s2-qualia.webp`,
          imageCaption: `Mary's Room (Frank Jackson's 1982 thought experiment on qualia).`,
          vocab: [
            {
              word: `qualia`,
              definition: `The raw felt qualities of conscious experience: the 'what it is like' aspect of redness, pain, taste.`,
              audioPrompt: `Qualia are the raw felt qualities of experience, {name}. The redness of red. The painfulness of pain. The bitter taste of coffee. The feeling of being homesick. Each one is what experience is made of from the inside. You can describe a quale, you can compare it to others, but you cannot reduce it to a number or an equation. That is what makes the science of consciousness so hard. The whole point of being conscious is the qualia, and the qualia are exactly what we cannot measure. Imagine trying to explain the taste of chocolate to someone who has never eaten it. What words could possibly cross that gap?`,
            },
          ,
            {
              word: `thought experiment`,
              definition: `A carefully constructed imaginary scenario used by philosophers and scientists to test an idea. Mary's Room is one of the most famous thought experiments in philosophy of mind.`,
              audioPrompt: `A thought experiment is a carefully constructed imaginary scenario used to test an idea, {name}. In 1982, Australian philosopher Frank Jackson designed one of the most famous. He asked us to imagine a brilliant neuroscientist named Mary who has lived her entire life in a black-and-white room. She knows everything science can teach about color vision. Every wavelength, every neuron, every brain pathway. Then she walks out and sees red for the first time. Does she learn something new? If the answer is yes, then something about experience escapes physical description. That something is what philosophers call qualia. The thought experiment makes the point sharper than any argument could.`,
            },
            {
              word: `Mary's Room`,
              definition: `Frank Jackson's 1982 thought experiment. A neuroscientist who has only ever seen black and white learns everything about color vision, then sees red for the first time. If she learns something new, qualia cannot be captured by physical science.`,
              audioPrompt: `Mary's Room is Frank Jackson's 1982 thought experiment about qualia, {name}. Mary is a neuroscientist who has lived in a black-and-white room her whole life. She knows every physical fact about color vision: every wavelength, every neuron, every brain pathway. The day she walks out and sees red for the first time, does she learn something new? Most people instinctively say yes. If yes, then the redness of red is something science cannot capture in equations. Jackson designed this scenario to show that physical knowledge, no matter how complete, cannot fully describe conscious experience. It is one of the most discussed arguments in all of philosophy.`,
            }
          ],
        },

        // ───── 4. MAGAZINE 3 — THEORIES ───────────────────────────────────────
        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Generates Consciousness?`,
          paragraphs: [
            `Three serious theories are currently competing to explain consciousness, and they disagree fundamentally. Integrated Information Theory, proposed by neuroscientist Giulio Tononi, says consciousness arises whenever information is integrated in a specific mathematical way. If this theory is right, any system that integrates information (including some computers, possibly even thermostats) has some tiny amount of consciousness.`,
            `Global Workspace Theory, championed by Stanislas Dehaene and Bernard Baars, says consciousness happens when information becomes broadcast across many brain regions simultaneously. Most brain processing is unconscious, like driving a familiar route without thinking. Consciousness, in this view, is what happens when the brain spotlights one thing and makes it available to many systems at once.`,
            `Higher-Order Thought Theory, defended by David Rosenthal, says you are only conscious of something when you have a thought ABOUT it. Pain is conscious because there is a thought 'I am in pain.' Without that meta-thought, pain would happen but you wouldn't be aware of it. Each theory has serious supporters and serious critics. We don't yet know which is right, or whether the truth is something none of us have thought of yet.`,
          ],
          image: `/voyager-assets/inner-world/l01-s3-theories.webp`,
          imageCaption: `Three competing theories: IIT, Global Workspace, and Higher-Order Thought.`,
          vocab: [
            {
              word: `theory of consciousness`,
              definition: `A scientific proposal explaining how brain activity generates conscious experience. None is fully proven; each has critics.`,
              audioPrompt: `A theory of consciousness is a scientific proposal explaining how brain activity generates conscious experience, {name}. The three biggest theories right now are Integrated Information Theory, Global Workspace Theory, and Higher-Order Thought Theory. Each gives a different answer about what makes something conscious. Each has experiments backing it up and experiments that challenge it. Notice that we are not waiting for one obviously-correct answer. We are at a stage in science where smart, careful people genuinely disagree about something this fundamental. That disagreement is normal at the edge of knowledge. What would it take to convince you one theory was right? What experiment would you want to see?`,
            },
          ,
            {
              word: `Integrated Information Theory`,
              definition: `A theory of consciousness proposed by Giulio Tononi, holding that consciousness arises whenever information is integrated in a specific mathematical way. On this view, any system that integrates information may have some degree of consciousness.`,
              audioPrompt: `Integrated Information Theory is a theory of consciousness proposed by neuroscientist Giulio Tononi, {name}. It says consciousness arises whenever information is integrated in a specific mathematical way. If this theory is right, any system that integrates information, including some computers and possibly even thermostats, has some tiny amount of consciousness. This is a striking claim. It means consciousness might be far more widespread than we assume. It also means consciousness has a precise mathematical signature you could in principle measure. Whether that signature is real is exactly what scientists are now debating.`,
            },
            {
              word: `Global Workspace Theory`,
              definition: `A theory championed by Stanislas Dehaene and Bernard Baars, holding that consciousness happens when information is broadcast across many brain regions simultaneously, like a spotlight making something available to many systems at once.`,
              audioPrompt: `Global Workspace Theory is a theory of consciousness championed by Stanislas Dehaene and Bernard Baars, {name}. It says most brain processing is unconscious, like driving a familiar route without thinking. Consciousness, in this view, is what happens when the brain spotlights one thing and broadcasts it across many brain regions simultaneously, making it available to many systems at once. You become conscious of something when it enters this shared workspace. This theory has strong support from brain imaging studies. It gives a concrete answer to why some information makes it into awareness while most does not.`,
            }
          ],
        },

        // ───── 5. MAGAZINE 4 — WHY THIS MATTERS ───────────────────────────────
        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why It Matters For You`,
          paragraphs: [
            `You might be thinking: this is interesting, but why does it matter for my actual life? Three reasons. First, consciousness is the only thing you experience directly. Everything else (the room you're in, the people you love, this lesson) comes to you through consciousness. If you don't understand what consciousness is, you don't fully understand the medium through which you experience everything.`,
            `Second, questions about consciousness are about to become urgent. AI systems are getting more capable every year. At some point, someone will claim a machine is conscious. The science we develop now will determine whether that claim is taken seriously or dismissed. Animal welfare debates depend on similar questionsdoes a chicken experience pain in a way we should care about? Does a fish? An octopus? A bee? These are real arguments happening right now, and they depend on consciousness science.`,
            `Third, and this matters most: there is a personal version of this question that nobody else can answer for you. When you sit quietly and pay attention to your own awareness, what do you find? Most people have never seriously asked. Voyagers, the band you are now entering, is the age where this question becomes available to you in a real way. The lessons ahead will keep returning to it.`,
          ],
          image: `/voyager-assets/inner-world/l01-s4-why-matters.webp`,
          imageCaption: `Consciousness questions touch AI rights, animal welfare, and your own inner life.`,
          vocab: [
            {
              word: `subjective experience`,
              definition: `Awareness from the inside: the first-person 'what it is like' aspect of being conscious. Cannot be directly observed from outside.`,
              audioPrompt: `Subjective experience is awareness from the inside, {name}. It is the first-person view, the 'what it is like' aspect of being you. Right now, you have subjective experience of these words. A neuroscientist could scan your brain and describe every neural event, but they could not directly access your experience of reading. That is why subjective experience is sometimes called the 'first-person' point of view, as opposed to the 'third-person' view science usually works in. Notice that everything you have ever experienced has come through subjective experience. It is the most familiar thing in the world and also the most mysterious.`,
            },
          ,
            {
              word: `animal welfare`,
              definition: `The question of how much morally relevant experience animals have. Consciousness science directly shapes animal welfare debates by asking whether creatures like fish, octopuses, and bees experience pain in ways that matter.`,
              audioPrompt: `Animal welfare is one of the real-world stakes of consciousness science, {name}. Whether a chicken, a fish, an octopus, or a bee experiences pain in a way we should care about is not a settled question. It depends entirely on what consciousness is and which creatures have it. These are active debates happening right now, not abstract philosophy. The science of consciousness we develop will determine how we answer them. If you believe consciousness requires a certain kind of brain structure, that gives one answer. If you believe any information-integrating system has some awareness, that gives a very different one. The stakes are real.`,
            },
            {
              word: `medium`,
              definition: `The channel or substance through which something is experienced or transmitted. Consciousness is the medium through which every experience in your life comes to you.`,
              audioPrompt: `A medium is the channel through which something is experienced or transmitted, {name}. Consciousness is the medium through which you experience everything in your life. The room you are in, the people you love, this lesson, all of it comes to you through consciousness. If you do not understand what consciousness is, you do not fully understand the medium through which you experience everything. This is one of the reasons the question matters. It is not abstract. Consciousness is not one topic among many. It is the lens through which every other topic reaches you. Investigating it is investigating the conditions of all experience.`,
            }
          ],
        },

        // ───── 6. MAGAZINE 5 — THE SHIFT ──────────────────────────────────────
        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What Changes When You Take Consciousness Seriously`,
          paragraphs: [
            `People who study their own consciousness over time tend to report similar shifts. They notice that thoughts arise without being chosen. That emotions come and go without permission. That underneath the constant chatter of mental activity, there seems to be something quieter, more stable, something that is aware of all of it but is not the same as the thoughts and feelings.`,
            `This is what meditation traditions across cultures have pointed at for thousands of years. Buddhist traditions call it 'awareness itself.' Hindu Vedanta calls it 'witness consciousness.' Some Christian mystics call it 'the soul.' Modern neuroscientists studying meditators with brain scanners have found measurable differences in how the brains of experienced practitioners work. The Default Mode Network. This is the brain network active when you are lost in thought, quiets down. Other networks become more integrated.`,
            `You don't have to commit to any spiritual tradition to investigate this. You can simply pay attention to your own awareness for two minutes a day and notice what you find. The science isn't settled. The mystery isn't solved. But the investigation is open to you, starting now. Sage has been quietly noticing every shift in awareness in the forest for years. So can you.`,
          ],
          image: `/voyager-assets/inner-world/l01-s5-shift.webp`,
          imageCaption: `Awareness investigated across traditions, and now, by science.`,
          vocab: [
            {
              word: `witness consciousness`,
              definition: `The aspect of awareness that observes thoughts and feelings without being identical to them. A concept found across many contemplative traditions.`,
              audioPrompt: `Witness consciousness is the aspect of awareness that observes thoughts and feelings without being the same as them, {name}. When you notice that you are thinking, the noticing happens from somewhere. That somewhere is what many traditions call witness consciousness. You can test this yourself. Right now, try to notice your next thought as it arises. The thought is one thing. The noticing of the thought is something slightly different. This is one of the strangest features of being conscious. There seems to be a layer of awareness that watches your own mind. Different traditions describe it differently, but they keep pointing at the same thing.`,
            },
          ,
            {
              word: `Default Mode Network`,
              definition: `The brain network active when you are lost in thought. Studies of meditators show it quiets down with practice, suggesting the constant inner mental chatter has a measurable physical basis.`,
              audioPrompt: `The Default Mode Network is the brain network active when you are lost in thought, {name}. It is the network that generates the constant chatter of mental activity, the stream of thoughts, plans, memories, and worries that runs almost all the time. Modern neuroscientists studying meditators with brain scanners have found that in people with years of meditation practice, the Default Mode Network quiets down. Other networks become more integrated. What traditions across cultures have described as settling beneath the noise of the mind now has a measurable neural signature. The investigation people have done for thousands of years is showing up in brain scans.`,
            },
            {
              word: `contemplative traditions`,
              definition: `Practices across cultures, including Buddhist, Hindu Vedanta, and Christian mysticism, that investigate awareness through sustained inner attention. They have independently described similar findings about consciousness for thousands of years.`,
              audioPrompt: `Contemplative traditions are practices across cultures that investigate awareness through sustained inner attention, {name}. Buddhist traditions call what they find 'awareness itself.' Hindu Vedanta calls it 'witness consciousness.' Some Christian mystics call it 'the soul.' These traditions arrived independently at remarkably similar descriptions. Modern neuroscientists studying meditators with brain scanners have now begun finding measurable differences in how experienced practitioners' brains work. The convergence between ancient inner investigation and modern brain science is one of the most striking developments in consciousness research. You do not have to adopt any tradition to notice what they are all pointing at.`,
            }
          ],
        },

        // ───── 7. PERSPECTIVES ────────────────────────────────────────────────
        {
          id: `l01-perspectives`,
          type: `perspectives`,
          headline: `What is consciousness, really?`,
          intro: `Three serious positions, held by serious thinkers. None is obviously wrong. Read each one carefully, then sit with which sits most true for you right now.`,
          positions: [
            {
              id: `physicalism`,
              thinker: `Patricia Churchland (neurophilosopher)`,
              positionLabel: `Physicalism — consciousness IS brain activity`,
              summary: `Consciousness is what brain activity feels like from the inside. There is no separate mental substance. Once we fully understand the brain, we will fully understand consciousness. The 'hard problem' is a problem of our current ignorance, not a deep metaphysical puzzle.`,
              strongestArgument: `Every change in consciousness we have ever observed corresponds to a change in brain activity. Damage a brain region, alter the experience. Add a drug, alter the experience. There is no case where consciousness exists without a physical substrate. Why posit anything beyond physics?`,
            },
            {
              id: `dualism`,
              thinker: `David Chalmers (philosopher)`,
              positionLabel: `Property dualism — consciousness is a fundamental property of reality`,
              summary: `Physical and conscious properties are both real and neither reduces to the other. Just like space, time, and mass are fundamental in physics, consciousness may be fundamental too. The hard problem is real precisely because consciousness is not the kind of thing physical science was built to explain.`,
              strongestArgument: `You could explain every physical fact about a brain processing red light and still leave out the redness of red. Physical explanation describes how, not what it is like. That gap is not ignorance; it is a real distinction in reality that science has been trying and failing to bridge for centuries.`,
            },
            {
              id: `idealism`,
              thinker: `Bernardo Kastrup (philosopher) and ancient Vedanta`,
              positionLabel: `Idealism — consciousness is fundamental, matter is derived`,
              summary: `Reality is consciousness all the way down. Physical objects are appearances within consciousness, not the other way around. Your mind is a localization of a universal field of awareness. This sounds strange but is actually the simplest explanation. We never directly encounter anything outside our own consciousness.`,
              strongestArgument: `You have never experienced anything that wasn't already inside your consciousness. The chair, the screen, this lesson, all of it shows up as conscious experience. Materialism asks you to believe matter generates consciousness, but nobody has ever measured matter without already being conscious. Idealism just takes consciousness as the starting point.`,
            },
          ],
          reflectionPrompt: `Which view sits with you most right now? Why? Could you imagine sitting with a different view a year from now?`,
        },

        // ───── 8. QUIZ ────────────────────────────────────────────────────────
        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `According to philosopher David Chalmers, what makes the 'hard problem' of consciousness genuinely hard?`,
              options: [
                `We don't have powerful enough brain scanners yet`,
                `Explaining brain activity doesn't explain why any of it feels like something`,
                `Different people have different experiences`,
                `Consciousness can only be studied through meditation`,
              ],
              correctIndex: 1,
              explanation: `The hard problem is not about technology or measurement. Even a complete map of brain activity wouldn't explain why brain processes generate inner experience at all.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Mary's Room (Frank Jackson, 1982) is a thought experiment designed to show:`,
              options: [
                `That color blind people see the world differently`,
                `That neuroscience knows more about color than philosophers do`,
                `That there's something about experience that complete physical knowledge cannot capture`,
                `That you should never be raised in a black and white room`,
              ],
              correctIndex: 2,
              explanation: `Jackson's point: if Mary learns something new when she sees red for the first time, then knowing every physical fact about color isn't enough to know what red looks like. That's what qualia are.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Which of these is the BEST example of a quale?`,
              options: [
                `The wavelength of red light (around 700 nanometers)`,
                `The number of neurons in the visual cortex`,
                `The redness of red as you experience it`,
                `A scientific paper about color vision`,
              ],
              correctIndex: 2,
              explanation: `Qualia are the felt qualities of experience, not the measurable physical properties. The wavelength is a physical fact; the redness is a quale.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `According to Global Workspace Theory, you become conscious of something when:`,
              options: [
                `The information is integrated mathematically in a specific way`,
                `You have a thought about the experience`,
                `The information is broadcast across many brain regions at once`,
                `A higher-order awareness watches the experience`,
              ],
              correctIndex: 2,
              explanation: `Global Workspace Theory (Dehaene, Baars) says consciousness is what happens when brain regions share information through a central 'workspace.' Option 1 is IIT, option 2 and 4 are Higher-Order Thought.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why might consciousness questions become urgent for AI in the coming years?`,
              options: [
                `Because AI systems will replace philosophers`,
                `Because someone will eventually claim a machine is conscious, and we'll need to decide how to respond`,
                `Because AI will solve the hard problem`,
                `Because consciousness has nothing to do with AI`,
              ],
              correctIndex: 1,
              explanation: `As AI becomes more sophisticated, claims of machine consciousness will arise. Whether to take them seriously depends on having a real science of consciousness, which we don't yet have.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `When meditators say they observe their thoughts arising, they're pointing at:`,
              options: [
                `A spiritual experience that science cannot study`,
                `Witness consciousness: the part of awareness that observes mental activity`,
                `A delusion caused by altered brain chemistry`,
                `The same thing as the brain's Default Mode Network`,
              ],
              correctIndex: 1,
              explanation: `Witness consciousness is a feature traditions across cultures have pointed at: the layer of awareness that watches thought, distinct from thought itself. Modern neuroscience has begun studying it.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `If physicalism is correct, then:`,
              options: [
                `Consciousness can never be explained by science`,
                `The mind exists separately from the brain`,
                `Once we fully understand brain activity, we'll fully understand consciousness`,
                `Reality is consciousness all the way down`,
              ],
              correctIndex: 2,
              explanation: `Physicalism (Churchland and others) holds that consciousness IS brain activity, and the hard problem reflects our current ignorance, not a fundamental gap.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Property dualism (Chalmers) and idealism (Kastrup) agree on one important thing. What is it?`,
              options: [
                `Both believe consciousness is generated by physical brains`,
                `Both believe consciousness cannot be fully explained by physics alone`,
                `Both reject the existence of qualia`,
                `Both believe AI will become conscious soon`,
              ],
              correctIndex: 1,
              explanation: `Dualism and idealism both insist consciousness is more than physical processes. They disagree about the relationship between mind and matter, but both reject pure physicalism.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Scientists have now successfully measured a quale and explained exactly what generates it.`,
              correctAnswer: false,
              explanation: `False. As of today, no scientist has measured a quale directly or explained what generates conscious experience. The hard problem remains unsolved.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine a researcher claims they've built a robot that 'feels pain' when its sensors are damaged. To evaluate this claim seriously, what would matter most?`,
              options: [
                `Whether the robot says 'ouch' convincingly`,
                `Whether the robot's behavior matches a human in pain`,
                `Which theory of consciousness you accept, and whether the robot meets its conditions`,
                `Whether the robot was built by a famous engineer`,
              ],
              correctIndex: 2,
              explanation: `Whether the claim deserves to be taken seriously depends entirely on what consciousness IS. Different theories give different answers about what conditions a system must meet. This is why consciousness science isn't just academic.`,
            },
          ],
        },

        // ───── 9. REFLECTION ──────────────────────────────────────────────────
        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Take your time. Your answer is saved for you (and your parent if they're checking in).`,
          prompts: [
            {
              id: `reflect-cognitive`,
              category: `Cognitive`,
              prompt: `What surprised you most in this lesson? What changed in your thinking?`,
            },
            {
              id: `reflect-meta`,
              category: `Metacognitive`,
              prompt: `What's still confusing or unsettled for you? What would you need to investigate to figure out where you actually land?`,
            },
            {
              id: `reflect-identity`,
              category: `Identity`,
              prompt: `Does taking consciousness seriously change anything about who you want to be or how you want to live?`,
            },
            {
              id: `reflect-application`,
              category: `Application`,
              prompt: `Where in your real life could investigating your own awareness actually matter (at school, with friends, when you're upset, when you're bored)?`,
            },
            {
              id: `reflect-critical`,
              category: `Critical`,
              prompt: `What's the strongest objection to taking the hard problem seriously? Is there a part of this lesson you don't buy?`,
            },
            {
              id: `reflect-personal`,
              category: `Personal investigation`,
              prompt: `Pause for one minute right now. Try to notice your own awareness as it is in this moment. What did you find? What was hard about it?`,
            },
          ],
        },

        // ───── 10. REAL-WORLD ────────────────────────────────────────────────
        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Consciousness isn't just an idea for philosophers and neuroscientists. It's the medium through which you experience everything you have ever experienced. Investigating it is one of the few projects available to you that has no ceiling. You can spend a lifetime on it and still find new ground. Below are two paths: a family activity for this week, and an optional deeper project if you want to go further.`,
          familyActivity: {
            title: `The Two-Minute Awareness Practice (family edition)`,
            duration: `30 minutes`,
            description: `Tonight, sit somewhere quiet with at least one family member. Set a timer for two minutes. Each of you, in silence, tries to do one thing: notice your own awareness. Pay attention to what it's like to be aware right now. When the timer goes off, take turns sharing what you noticed. Was it easy or hard? Did your mind wander? When it wandered, what brought you back? Was there a quality of awareness that stayed steady underneath the thoughts? Compare what each of you found. This is one of the practices Buddhist, Hindu, Stoic, and Christian contemplative traditions have used for thousands of years, and it's also what neuroscientists now study with brain scanners. You're investigating something real.`,
          },
          projectOption: {
            title: `Consciousness Journal — 4 weeks (optional)`,
            duration: `4 weeks, ~10 minutes per day`,
            description: `Keep a daily journal for 28 days. Each day, write 3-5 sentences answering: 'What was a moment today when I noticed I was aware?' At the end of the 28 days, write a 500-word essay on what you discovered. Did the moments become more frequent? Did you notice patterns? Were they more common at certain times of day, during certain activities, after certain triggers? Did the noticing change anything about your day? This is a real research-grade practice. Adult contemplatives and psychologists have used similar protocols for decades. You'll have data on your own consciousness that nobody else in the world will have.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard if they want to try it. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `When you take consciousness seriously, who do you become that you weren't before?`,
        },

        // ───── 11. IDENTITY HOOK ──────────────────────────────────────────────
        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. Free form. No wrong answer. This is for you to capture who you're becoming.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who notices their own thoughts instead of just being thrown around by them.`,
            `A person who isn't scared of big questions even when there's no answer.`,
            `Someone who takes their own inner life seriously and investigates instead of just reacting.`,
          ],
          saveKey: `identity_responses_iw_11_12_01`,
        },

        // ───── 12. CELEBRATION ────────────────────────────────────────────────
        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain what consciousness is, name the hard problem, distinguish qualia from physical properties, and articulate three serious theories about what generates conscious experience. You also have a real practice for investigating your own awareness. That is real knowledge. Knowledge most adults don't have. Next time we go deeper into a related question: what is the self, and is it even real? See you there. — Sage`,
          badge: `consciousness-explorer`,
          badgeName: `Consciousness Explorer`,
          xpEarned: 75,
          competencies: [
            `Can explain consciousness and the hard problem`,
            `Can identify qualia and distinguish them from physical properties`,
            `Can describe three theories: IIT, Global Workspace, Higher-Order Thought`,
            `Can articulate why consciousness questions matter for AI, animal welfare, and personal life`,
            `Has a practice for investigating their own awareness`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: The Philosophy of Self`,
            hook: `Is the 'you' having these experiences real, or is it constructed, like a story your brain tells itself?`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L01;

// ─────────────────────────────────────────────────────────────────────────────
// Dev asset check
// ─────────────────────────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.positions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L01 ${VERSION}] "${l.title}" — ${mags} magazine, ${persp} perspectives, ${quiz} quiz, ${reflect} reflection prompts`
  );
}
