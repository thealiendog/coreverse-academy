// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L18 — Quantum Physics: The Weird Rules of the Very Small
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-PS1 (extension); nature of science / models
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (quantum / classical / quantum myth)
// SCOPE: 4 concepts — what quantum physics is, superposition, entanglement,
//        why it's real (and what it does NOT say)
// NOTE: Conscious-family audience — teach the real science boundary clearly
//       and respectfully; the real quantum world beats the myths.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-18`,
      title: `Quantum Physics: The Weird Rules of the Very Small`,
      duration: 18,
      xpReward: 75,
      badge: `quantum-explorer`,
      badgeName: `Quantum Explorer`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Get ready, because today we explore the STRANGEST science humans have ever discovered: QUANTUM PHYSICS, the rules that govern the very smallest things in the universe, like atoms and the particles inside them. Down at this tiny scale, reality behaves in ways so bizarre they sound like magic. And here's the most amazing part: it's all REAL, proven by careful experiments thousands of times. The universe is far stranger than any story. By the end of today, you'll understand the weird and wonderful quantum world. Let's begin.`,
          headline: `Quantum Physics`,
          subtitle: `The genuinely bizarre rules of atoms and particles, all proven real`,
          visual: `/ue-assets/cosmos/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Sets of Rules`,
          paragraphs: [
            `Here's a surprising fact about the universe: it seems to follow TWO different sets of rules, depending on size. For big things (balls, cars, planets, you), the rules are the "classical physics" we explored with Newton: predictable, sensible, the way everyday objects behave. But for the very SMALLEST things (atoms, and the even tinier particles inside them, like electrons), the universe follows a totally different and much stranger set of rules. This is QUANTUM PHYSICS, the science of the very small.`,
            `Why didn't anyone notice these weird rules until about 100 years ago? Because quantum effects only show up clearly at incredibly tiny scales, far smaller than we can see. In our everyday big world, they average out and stay hidden. It was only when scientists started carefully studying atoms and particles in the early 1900s that they discovered, to their complete astonishment, that the tiny world plays by rules that seem to make no sense. Even the brilliant scientists who discovered quantum physics found it deeply strange. One famously said that anyone who isn't shocked by it hasn't understood it. So if it feels weird to you, you're in excellent company.`,
          ],
          image: `/ue-assets/cosmos/l18-s1-two-rules.webp`,
          imageCaption: `Big things follow classical rules. The tiniest things follow stranger quantum rules.`,
          vocab: [
            {
              word: `quantum physics`,
              definition: `The science of the very smallest things in the universe, like atoms and the particles inside them. At this tiny scale, reality follows strange rules very different from the everyday "classical" physics of big objects.`,
              audioPrompt: `Quantum physics is the science of the very smallest things in the universe, {name}. Like atoms and the even tinier particles inside them, such as electrons. Here's the key surprise: the universe follows two different sets of rules depending on size. Big things, like balls and planets, follow predictable classical physics. But tiny particles follow a much stranger set of rules. These quantum effects only appear at incredibly tiny scales, which is why nobody noticed them until scientists started carefully studying atoms about 100 years ago.`,
            },
            {
              word: `classical physics`,
              definition: `The rules that describe how large, everyday objects move and behave — things like balls, cars, and planets. First worked out by Isaac Newton. Classical physics is predictable and follows common sense, unlike the strange quantum rules that govern tiny particles.`,
              audioPrompt: `Classical physics is the set of rules that describes how large everyday objects move and behave, {name}. Things like balls, cars, and planets all follow classical physics. These rules were first worked out by Isaac Newton about 400 years ago, and they are predictable and match common sense. If you throw a ball, classical physics tells you exactly where it lands. But these reliable rules only work for big objects. The very smallest particles follow a completely different set of rules, quantum physics, which is far stranger and more surprising.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Superposition: Being in Many States at Once`,
          paragraphs: [
            `One of the strangest quantum ideas is SUPERPOSITION. In our everyday world, a thing is in ONE definite state: a coin is either heads or tails, a light is either on or off. But in the quantum world, a tiny particle can be in a combination of MULTIPLE states AT ONCE until it's measured. For example, before you check it, a particle might not have a single definite location. It exists as a blend of possibilities, almost like a spinning coin that is somehow both heads and tails until it lands.`,
            `Here's the truly bizarre part: the act of MEASURING a quantum particle forces it to "choose" one definite state. Before measurement, it's a haze of possibilities. The instant you measure it, it settles into one answer. This isn't because our instruments are clumsy. It appears to be how reality actually works at this scale. Scientists have tested superposition in countless experiments, and it holds up every time. It's so reliable that it's the basis for new "quantum computers," which use particles in superposition to do certain calculations far faster than normal computers. As strange as it sounds, superposition is real, tested, and useful.`,
          ],
          image: `/ue-assets/cosmos/l18-s2-superposition.webp`,
          imageCaption: `Superposition: a particle can be a blend of possibilities until it's measured.`,
          vocab: [
            {
              word: `superposition`,
              definition: `A quantum state where a tiny particle exists as a blend of multiple possibilities at once (like multiple positions) until it is measured. Measuring it forces it to settle into one definite state.`,
              audioPrompt: `Superposition is one of the strangest quantum ideas, {name}. In everyday life, things are in one state: a coin is either heads or tails. But a tiny quantum particle can be in a blend of multiple states at once, until it's measured. It exists as a haze of possibilities until the moment you check it, when it settles into one answer. Scientists have tested this countless times, and it holds up every time. Quantum computers use particles in superposition to do certain calculations far faster than normal ones.`,
            },
            {
              word: `quantum computer`,
              definition: `A type of computer that uses quantum effects like superposition to process information in fundamentally different ways than normal computers. For certain problems, quantum computers can work far faster. They are still being developed but represent a major future technology.`,
              audioPrompt: `A quantum computer uses the strange rules of quantum physics to process information in ways normal computers cannot, {name}. Regular computers store information as bits, each being a zero or a one. But quantum computers use quantum bits, called qubits, which can be in superposition, a blend of zero and one at the same time. This lets them tackle certain problems far faster than any normal computer. Quantum computers are still being developed, but scientists believe they could transform fields like medicine, chemistry, and security in the years ahead.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Entanglement: A Spooky Connection`,
          paragraphs: [
            `If superposition wasn't strange enough, here's another quantum marvel: ENTANGLEMENT. Two particles can become "entangled," meaning their states are linked together. Once entangled, measuring one particle INSTANTLY tells you about the other, no matter how far apart they are, even on opposite sides of the galaxy. It's as if the two particles share a connection that ignores distance entirely. Even Albert Einstein found this so bizarre that he called it "spooky action at a distance," and he doubted it could be real.`,
            `But experiments have PROVEN entanglement is real, over and over. It genuinely happens. (Important note for careful thinkers: entanglement does NOT let you send messages faster than light or do magic. The connection is real but works in a subtle way that doesn't break the universe's speed limit.) Scientists are now learning to USE entanglement for amazing technologies, like ultra-secure communication and powerful quantum computers. Nova's teaching: entanglement shows us that the universe is connected in ways far deeper and stranger than we ever imagined. The very particles you're made of follow these mysterious rules. Reality, at its foundation, is genuinely more wondrous than any fairy tale.`,
          ],
          image: `/ue-assets/cosmos/l18-s3-entanglement.webp`,
          imageCaption: `Entanglement: two linked particles, connected across any distance. Real, but not magic.`,
          vocab: [
            {
              word: `entanglement`,
              definition: `A quantum link between two particles, so that measuring one instantly tells you about the other, no matter how far apart they are. Proven real by experiments, but it cannot send messages or do magic.`,
              audioPrompt: `Entanglement is another quantum marvel, {name}. Two particles can become entangled, meaning their states are linked. Once entangled, measuring one instantly tells you about the other, no matter how far apart they are. Even Einstein called it spooky action at a distance, and doubted it was real. But experiments have proven it, over and over. One important note: entanglement does not let you send messages faster than light or do magic. The connection is real but works subtly, without breaking the universe's speed limit.`,
            },
            {
              word: `atom`,
              definition: `The smallest unit of an element, made of protons, neutrons, and electrons. Everything around you is made of atoms. Atoms are incredibly tiny, yet they behave according to quantum rules — including superposition and entanglement — at their scale.`,
              audioPrompt: `An atom is the smallest unit of a chemical element, {name}. Everything around you is made of atoms: the air, your body, the stars. Atoms are incredibly tiny. A single human hair is about a million atoms wide. Inside each atom are even tinier particles: protons and neutrons packed in a nucleus, with electrons outside. And here's the amazing part: at this tiny scale, atoms and the particles inside them behave according to quantum rules, including superposition and entanglement. The foundation of everything you touch follows quantum physics.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Real Science, Not Magic`,
          paragraphs: [
            `Quantum physics is so strange that people sometimes MISUSE it. You might hear claims like "quantum physics proves you can change reality just by thinking" or "you can be in two places at once like a particle." Here's the careful-scientist truth: those claims are NOT what quantum physics actually says. The weird quantum rules apply to the tiniest particles, NOT to big everyday objects like people, balls, or your wishes. As things get bigger, the strange quantum effects fade away, which is why your everyday world behaves so normally. Real quantum physics is precise, mathematical, and tested, not a magic wand for big-world wishes.`,
            `And here's the wonderful thing: the REAL quantum world is far more amazing than the myths. Quantum physics isn't just true; it's incredibly USEFUL. It explains how atoms work, which explains all of chemistry and biology. It made possible the lasers in checkout scanners and surgery, the chips in your phone and computer, MRI machines in hospitals, and LED lights. Nearly all modern technology depends on quantum physics. And quantum computers may transform the future. Nova's teaching: you don't need to stretch quantum physics into magic to be amazed by it. The truth, that the foundation of reality follows rules stranger than any story, AND that we figured those rules out and use them every day, is one of the greatest achievements of the human mind. Wonder and rigor, together.`,
          ],
          image: `/ue-assets/cosmos/l18-s4-real.webp`,
          imageCaption: `Quantum powers lasers, phones, MRIs. The real science beats the myths.`,
          vocab: [
            {
              word: `particle`,
              definition: `A tiny piece of matter, far smaller than an atom or making up an atom (like an electron). Quantum physics describes how these subatomic particles behave, following strange rules unlike big everyday objects.`,
              audioPrompt: `A particle, in quantum physics, is a tiny piece of matter, {name}. Far smaller than anything you can see. Atoms are made of particles like protons, neutrons, and electrons. Quantum physics describes how these subatomic particles behave, and they follow strange rules like superposition and entanglement that big everyday objects do not. As things get bigger, quantum effects fade away, which is why your everyday world feels normal. Real quantum physics applies to the tiniest particles, not to big objects like people. That boundary matters.`,
            },
            {
              word: `electron`,
              definition: `A tiny, negatively charged particle found in every atom, orbiting the nucleus. Electrons follow quantum rules like superposition. Understanding how electrons behave made modern technology possible, including computers, lasers, and electricity.`,
              audioPrompt: `An electron is a tiny, negatively charged particle found in every atom, {name}. Electrons orbit the nucleus of an atom and are among the most important particles in quantum physics. They follow quantum rules like superposition, existing as a blend of possibilities until measured. Understanding how electrons behave made modern technology possible. The circuits in computers and phones work because engineers learned to control electrons at the quantum level. Lasers, transistors, and solar cells all depend on electron behavior. Quantum physics and electrons power the modern world.`,
            },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four statements. Thinking carefully, classify each: QUANTUM (real strange behavior of tiny particles), CLASSICAL (normal everyday physics of big objects), or QUANTUM MYTH (a quantum-sounding claim that is NOT what real science says)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `quantum`,  label: `Quantum`,       color: `#A78BFA`, description: `Real strange behavior that genuinely happens to tiny particles.` },
            { id: `classical`, label: `Classical`,    color: `#60A5FA`, description: `Normal, predictable everyday physics of big objects.` },
            { id: `myth`,     label: `Quantum Myth`,  color: `#F87171`, description: `A quantum-sounding claim that real science does NOT actually support.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Statement #1`,
              clues: [
                { text: `A single electron acts as if it's in a blend of multiple positions at once.` },
                { text: `When measured, it settles into one definite position.` },
                { text: `This has been tested in experiments thousands of times.` },
              ],
              correctAnswer: `quantum`,
              realWorldExample: `This is superposition, a core, proven quantum effect.`,
              explanation: `This is superposition, real and proven. Pure quantum. A tiny particle genuinely exists as a blend of possibilities until measured. As bizarre as it sounds, experiments confirm it again and again.`,
            },
            {
              id: `case-2`,
              caseTitle: `Statement #2`,
              clues: [
                { text: `A thrown baseball follows a smooth, predictable curved path.` },
                { text: `You can calculate exactly where it will land using Newton's laws.` },
                { text: `It's in one definite place at all times.` },
              ],
              correctAnswer: `classical`,
              realWorldExample: `Everyday objects obey classical physics.`,
              explanation: `A baseball is a big everyday object, so it follows predictable classical physics. Pure classical. Quantum weirdness fades away at large sizes, which is why your everyday world behaves so sensibly.`,
            },
            {
              id: `case-3`,
              caseTitle: `Statement #3`,
              clues: [
                { text: `Two entangled particles are separated by a huge distance.` },
                { text: `Measuring one instantly tells you about the other.` },
                { text: `Einstein called it "spooky," but experiments proved it's real.` },
              ],
              correctAnswer: `quantum`,
              realWorldExample: `This is entanglement, proven by many experiments.`,
              explanation: `This is entanglement, a real, experimentally proven quantum effect. Pure quantum. The link between the particles is genuine, even across great distances, though it can't send messages or do magic.`,
            },
            {
              id: `case-4`,
              caseTitle: `Statement #4 — The Tricky One`,
              clues: [
                { text: `A claim says: "Because of quantum physics, a person can be in two places at once, just like a particle."` },
                { text: `It uses the real word "quantum" and sounds science-y.` },
                { text: `But it applies tiny-particle rules to a big object: a whole person.` },
              ],
              correctAnswer: `myth`,
              realWorldExample: `Quantum ideas are often misused for big-world claims.`,
              explanation: `Tricky! It uses the real word "quantum" and references a real effect (superposition). But it MISapplies it: quantum weirdness happens to tiny particles, NOT to big objects like a whole person. So this is a quantum myth, not real science. Pure quantum myth. Lesson: just because a claim uses the word "quantum" doesn't make it true science. Real quantum effects apply to the tiniest particles and fade away at large sizes, which is exactly why people, balls, and everyday objects behave normally. Careful thinkers ask: is this what quantum physics ACTUALLY says, or is it a quantum-sounding myth? The real quantum world is amazing enough without stretching it into magic. Respecting what the science actually says is part of true wonder.`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What does QUANTUM PHYSICS describe?`,
              options: [
                `Only big objects like planets`,
                `The very smallest things — atoms and the particles inside them — which follow strange rules`,
                `Just everyday objects`,
                `Only outer space`,
              ],
              correctIndex: 1,
              explanation: `Quantum physics is the science of the very smallest things: atoms and the particles inside them, like electrons. At this tiny scale, reality follows strange rules, very different from the classical physics that governs big everyday objects.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `Why didn't anyone discover quantum physics until about 100 years ago?`,
              options: [
                `Nobody was curious`,
                `Quantum effects only show up clearly at incredibly tiny scales — in our big everyday world they stay hidden`,
                `It was kept secret`,
                `It isn't real`,
              ],
              correctIndex: 1,
              explanation: `Quantum effects only appear clearly at incredibly tiny scales, far smaller than we can see. In our everyday big world, they average out and stay hidden. Scientists only found them when they began carefully studying atoms in the early 1900s.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is SUPERPOSITION?`,
              options: [
                `A particle being in one fixed place`,
                `A particle existing as a blend of multiple states at once, until it's measured`,
                `Two particles colliding`,
                `A type of telescope`,
              ],
              correctIndex: 1,
              explanation: `Superposition is when a tiny particle exists as a blend of multiple possibilities at once (like multiple positions), until it's measured. The act of measuring forces it to settle into one definite state. It's been tested countless times and even powers quantum computers.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `What is ENTANGLEMENT?`,
              options: [
                `Particles getting tangled like string`,
                `A quantum link between two particles, so measuring one instantly tells you about the other, even far apart`,
                `A type of atom`,
                `When particles disappear`,
              ],
              correctIndex: 1,
              explanation: `Entanglement is a quantum link between two particles: measuring one instantly tells you about the other, no matter the distance. Einstein called it "spooky action at a distance," but experiments proved it real. It can't send messages or do magic, though.` },

            { id: `l18-q5`, format: `true-false`,
              question: `True or false: Quantum physics is just a wild theory that hasn't really been tested.`,
              correctAnswer: false,
              explanation: `False. Quantum physics is one of the most thoroughly tested theories in all of science, confirmed by countless experiments. It's also incredibly useful, powering lasers, computer chips, MRI machines, and LED lights. It's strange, but it's very real.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `Is the claim "quantum physics lets a PERSON be in two places at once" true science?`,
              options: [
                `Yes, exactly true`,
                `No — it's a quantum myth; quantum weirdness applies to tiny particles, not big objects like people`,
                `Yes, if you concentrate`,
                `Science can't say`,
              ],
              correctIndex: 1,
              explanation: `No, that's a quantum myth. Quantum effects like superposition apply to tiny particles, not big objects like people. As things get bigger, quantum weirdness fades away, which is why everyday objects behave normally. Using the word "quantum" doesn't make a claim true.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `Why does our everyday big world behave so NORMALLY if quantum rules are so weird?`,
              options: [
                `Quantum physics is fake`,
                `Quantum effects fade away as objects get bigger, so big things follow predictable classical physics`,
                `We just don't notice`,
                `Big things are quantum too`,
              ],
              correctIndex: 1,
              explanation: `Quantum effects only show up clearly at tiny scales. As objects get bigger, those strange effects fade away and average out, so big everyday objects follow predictable classical physics. That's why your world feels sensible even though atoms are weird.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `What everyday technologies depend on quantum physics?`,
              options: [
                `None`,
                `Lasers, computer and phone chips, MRI machines, LED lights — nearly all modern technology`,
                `Only spaceships`,
                `Just calculators`,
              ],
              correctIndex: 1,
              explanation: `Nearly all modern technology depends on quantum physics: lasers (in scanners and surgery), the chips in phones and computers, MRI machines, and LED lights. It explains how atoms work, underpinning all chemistry. The real quantum world is amazing AND useful.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Even the scientists who discovered quantum physics found it deeply strange. How does it feel to learn that reality itself is weirder than fiction?` },
            { id: `r2`, text: `Nova says the real quantum world is more amazing than the myths. Why do you think it matters to stick to what the science actually says?` },
            { id: `r3`, text: `Superposition and entanglement sound impossible, yet they're proven real and power real technology. What does that teach you about staying open to surprising truths?` },
            { id: `r4`, text: `The particles YOU are made of follow these strange rules. Does it change anything to know the foundation of reality is this mysterious?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Quantum physics might sound abstract, but it's one of the most practical sciences there is. It underpins nearly all modern technology, and the next wave (quantum computers, ultra-secure communication, new sensors) could transform medicine, materials, and computing in your lifetime. Beyond the technology, quantum physics teaches a powerful lesson: reality can be far stranger than common sense suggests, AND we can still understand it through careful experiment and math. It also teaches you to spot the difference between real science and science-flavored myths, a skill worth its weight in gold. Nova's note: the deepest truths about reality were found not by abandoning rigor for magic, but by combining fearless curiosity with careful evidence. That's the real superpower.`,
          familyAdventure: `Family Quantum Wonder Chat. As a family, talk about the strangest idea from this lesson (superposition? entanglement?). Then look up a simple animation of the "double-slit experiment," the famous experiment that reveals quantum weirdness. Discuss: how can something be SO strange and yet completely real and useful? Also talk about how to tell real quantum science from "quantum" myths you might hear. You're practicing wonder AND careful thinking at the same time.`,
          creativePrompt: {
            intro: `Imagine you could shrink down to the size of a particle and experience the quantum world. Write about your adventure.`,
            floor: `Write at least 5 sentences. Describe one strange quantum thing you experience (like being in two places at once) and how it feels.`,
            stretch: `Write 8 to 10 sentences. Take the reader on your shrinking journey into the quantum world, describing superposition, entanglement, and how it differs from the normal world.`,
            open: `Write as much as you want. Write a full quantum adventure story. Shrink down past atoms into the world of particles. Describe experiencing superposition (being a blend of possibilities until "measured"), entanglement (feeling spookily linked to a faraway particle), and how utterly different it is from the predictable big world. Then return to normal size and reflect on how amazing it is that this strange world is real, proven, and the foundation of everything, including you. Keep the real science accurate even while having fun.`,
            frames: [
              `As I shrank smaller and smaller, the world began to ___.`,
              `In superposition, I felt myself ___.`,
              `Then I became entangled with another particle, and ___.`,
              `It was so different from the normal world because ___.`,
              `Returning to my normal size, I realized that ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Outstanding work, {name}. You've explored the strangest science there is, and you can now explain quantum physics, superposition, entanglement, and (crucially) how to tell the real science from quantum myths. That careful, wonder-filled thinking is exactly what science is about. Next lesson: we explore one of the deepest mysteries of all, something we all experience but barely understand. TIME. See you there. — Nova.`,
          badge: `quantum-explorer`,
          badgeName: `Quantum Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L18.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L18 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
