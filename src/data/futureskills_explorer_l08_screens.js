// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 8
// "How Computers Think"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l08_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-08',
      title:     `How Computers Think`,
      duration:  12,
      xpReward:  50,
      badge:     'computer-whiz',
      badgeName: `Computer Whiz`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `A computer can do billions of calculations per second. It can store your entire life's memories in a device smaller than your thumbnail. But it can't understand a joke, feel happy, or decide what to have for lunch. How does something so powerful work — and why does it have such strange limitations? The answer starts with two numbers: 0 and 1.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Binary: The Language of Computers`,
          paragraphs: [
            `Humans count in base-10 — we use digits 0 through 9. Computers count in base-2, called binary — they only use 0 and 1. Why? Because computers are built from billions of tiny switches called transistors that are either OFF (0) or ON (1). Each 0 or 1 is called a bit. 8 bits make a byte. A single letter takes 1 byte. A photo takes millions of bytes. Everything a computer does is ultimately flipping billions of switches on and off at incredible speed.`,
            `Binary might seem like a limitation, but it's actually a strength. A switch that's either fully on or fully off is physically reliable — there's no ambiguity, no degradation, no confusion between states. That clarity is what allows computers to operate with near-perfect accuracy across trillions of operations. Any number, any letter, any color, any sound — all of it can be encoded as a pattern of 0s and 1s. The entire digital world is built on that simple foundation.`,
            `You can count in binary yourself. Each position in a binary number represents a power of two: the rightmost position is 1, then 2, then 4, then 8, then 16, and so on. The binary number 101 means 1 four + 0 twos + 1 one = 5. The number 1000 means 1 eight + 0 fours + 0 twos + 0 ones = 8. With just 8 bits (one byte), you can represent any number from 0 to 255. It's a different way of counting — and once you see it, you understand computers at their most fundamental level.`,
          ],
          image:        '/explorer-assets/future-skills/l08-magazine-binary.png',
          imageCaption: `Binary — the language of computers, where everything is encoded as patterns of 0s and 1s, off and on, billions of times per second`,
          vocab: [
            { word: `binary`, definition: `A number system using only 0 and 1 — the language computers use because their transistors are either off (0) or on (1). Every piece of digital information is ultimately stored as binary.`,                  audioPrompt: `Binary — a number system using only 0 and 1. The language computers use because their transistors are either off or on. Every piece of digital information is ultimately stored as binary.` },
            { word: `bit`,    definition: `A single binary digit — either 0 or 1. The smallest unit of digital information. Eight bits make one byte, which can store a single character like a letter or number.`,                                   audioPrompt: `Bit — a single binary digit, either 0 or 1. The smallest unit of digital information. Eight bits make one byte, which can store a single character like a letter or number.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `CPU: The Brain`,
          paragraphs: [
            `The Central Processing Unit — CPU — is the main chip that runs programs. It fetches instructions from memory, decodes what they mean, and executes them — billions of times per second. A modern CPU can perform over three billion operations per second. It follows the stored program model: it reads instructions from memory and executes them in sequence. This simple idea, developed in the 1940s, is the foundation of all modern computing.`,
            `Inside a CPU are billions of transistors — the same tiny switches that store binary data — arranged into circuits that perform arithmetic, compare values, and move data around. The CPU doesn't understand what it's doing in any meaningful sense; it just executes instructions at incredible speed. That speed is what creates the illusion of intelligence: billions of simple, mechanical steps happening so fast they look like fluid thinking.`,
            `CPUs have improved at an extraordinary rate over decades. In the 1970s, a CPU had a few thousand transistors and performed a million operations per second. Today, a CPU the size of a fingernail contains tens of billions of transistors and performs trillions of operations per second. This exponential improvement in computing power is what made modern software, AI, video games, the internet, and smartphones possible. More transistors, faster switching, same basic principle.`,
          ],
          image:        '/explorer-assets/future-skills/l08-magazine-cpu.png',
          imageCaption: `The CPU — the brain of every computer, executing billions of instructions per second by fetching, decoding, and running code`,
          vocab: [
            { word: `CPU`,        definition: `Central Processing Unit — the main chip in a computer that fetches, decodes, and executes instructions. Modern CPUs perform billions of operations per second.`,                                             audioPrompt: `CPU — Central Processing Unit. The main chip in a computer that fetches, decodes, and executes instructions. Modern CPUs perform billions of operations per second.` },
            { word: `transistor`, definition: `A tiny electronic switch that is either off (0) or on (1) — billions of transistors are packed into every CPU and memory chip, forming the physical foundation of all digital computing.`,             audioPrompt: `Transistor — a tiny electronic switch that is either off or on. Billions of transistors are packed into every CPU and memory chip, forming the physical foundation of all digital computing.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Memory and Storage`,
          paragraphs: [
            `Computers have two types of memory that serve very different purposes. RAM — Random Access Memory — is fast, temporary memory that holds what the computer is currently working on. When you open an app, it loads from storage into RAM so the CPU can access it quickly. But RAM is erased the moment the computer powers off. Every unsaved document you've lost during a crash ended up in RAM that was wiped when the power went out.`,
            `Storage — a hard drive or SSD — holds information permanently. Your files, photos, operating system, and apps all live in storage. It's much slower than RAM, but it keeps data when the computer is off. When you save a document, it moves from temporary RAM into permanent storage. Solid state drives (SSDs) are faster than traditional hard drives because they use flash memory chips with no moving parts — the same technology as a USB drive, scaled up.`,
            `The relationship between RAM and storage explains many common computer behaviors. When your computer runs slowly with many programs open, RAM is probably full and the CPU is being forced to use slower storage instead. When restarting a computer fixes a problem, it's because RAM was cleared — any corrupt temporary state was wiped. When a program loads faster the second time you open it, your operating system is smart enough to keep recently used data in RAM a little longer.`,
          ],
          image:        '/explorer-assets/future-skills/l08-magazine-memory.png',
          imageCaption: `Memory and storage — RAM is fast and temporary; storage is permanent but slower. Together they let computers work quickly and save data reliably`,
          vocab: [
            { word: `RAM`,     definition: `Random Access Memory — fast, temporary memory that holds what a computer is currently working on. RAM is erased when the computer powers off.`,                                                          audioPrompt: `RAM — Random Access Memory. Fast, temporary memory that holds what a computer is currently working on. RAM is erased when the computer powers off.` },
            { word: `storage`, definition: `Permanent memory — hard drives and SSDs — that keeps files, apps, and data even when a computer is powered off. Storage is slower than RAM but holds far more data.`,                                   audioPrompt: `Storage — permanent memory, including hard drives and SSDs, that keeps files, apps, and data even when a computer is powered off. Storage is slower than RAM but holds far more data.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Input, Processing, Output`,
          paragraphs: [
            `Every computer interaction — from tapping a key to loading a website — follows the same pattern: Input → Processing → Output. Input is anything that goes into the computer: keyboard, mouse, microphone, touchscreen, camera. Processing is the CPU executing the relevant code. Output is the result: something appears on screen, plays through speakers, or prints on paper. Even the most complex AI follows this pattern — input goes in, processing happens, output comes out.`,
            `Understanding this pattern gives you a mental model for troubleshooting any computer system. If the output is wrong, the problem is either in the input (bad data going in), the processing (code with bugs), or the output system (display or speaker problems). Professional engineers debug computer problems by asking: where in the input-processing-output chain did something go wrong? The same framework applies to everything from a broken phone app to a malfunctioning spacecraft.`,
            `The input-processing-output model also reveals something important: computers don't originate anything. They transform inputs into outputs according to their programming. A computer that generates a beautiful painting is really transforming a text description (input) through learned statistical patterns (processing) into pixel data (output). A computer that answers a question transforms text (input) through pattern matching (processing) into a text response (output). The intelligence is in the design, the data, and the humans who built it.`,
          ],
          image:        '/explorer-assets/future-skills/l08-magazine-input-output.png',
          imageCaption: `Input, processing, output — every computer interaction follows this pattern, from a single keystroke to a complex AI generating an answer`,
          vocab: [
            { word: `input`,  definition: `Anything that goes into a computer — keyboard presses, mouse clicks, microphone audio, touchscreen taps, or camera images. Input starts every computer interaction.`,                                        audioPrompt: `Input — anything that goes into a computer. Keyboard presses, mouse clicks, microphone audio, touchscreen taps, or camera images. Input starts every computer interaction.` },
            { word: `output`, definition: `The result a computer produces after processing — text on screen, sound through speakers, a printed document, or data sent over a network.`,                                                              audioPrompt: `Output — the result a computer produces after processing. Text on screen, sound through speakers, a printed document, or data sent over a network.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each description, then match it to the computer part it describes!`,
          guideText:     `Computers have four key building blocks: binary (the 0s and 1s that encode everything), the CPU (the chip that runs programs), RAM (fast temporary memory), and storage (permanent memory). Each does a very different job. Can you match each description to the right one?`,
          columnHeaders: [`The Description`, `Which Part?`],
          items: [
            { image: 'l08-game-binary.png',    label: `A system of only 0s and 1s where each digit represents a tiny switch inside the computer that is either off or on.`,                                           correctMatch: 'binary',  objectPosition: 'center 50%', matchPhrase: `Binary! Everything inside a computer is binary — 0s and 1s, off and on, nothing else. The complexity you see on screen — colors, sounds, words, games — emerges from billions of transistors switching between just two states at incredible speed. Binary isn't a limitation; it's a physical reality that makes computers extremely reliable. When you understand binary, you see computers at their most fundamental level.` },
            { image: 'l08-game-cpu.png',       label: `The main chip that fetches, decodes, and executes billions of instructions every second — the engine of every computer.`,                                     correctMatch: 'cpu',     objectPosition: 'center 50%', matchPhrase: `CPU! The Central Processing Unit is the heart of every computer. It runs billions of tiny instructions every second — fetch, decode, execute, repeat. Every time you click something, type something, or load a page, the CPU is executing the instructions that make it happen. Modern CPUs can perform over three billion operations per second. That speed is why a computer can run video, play music, and respond to your inputs — all at the same time.` },
            { image: 'l08-game-ram.png',       label: `Fast but temporary memory that holds only what the computer is actively working on right now — erased the moment power goes off.`,                             correctMatch: 'ram',     objectPosition: 'center 50%', matchPhrase: `RAM! Random Access Memory is your computer's short-term memory — fast, temporary, and wiped the moment you power down. When you open an app, it loads from storage into RAM so the CPU can work with it quickly. RAM is much faster than storage but holds far less data. That's why more RAM means your computer can handle more open programs at once without slowing down. When your computer starts running slow, it's often because RAM is full.` },
            { image: 'l08-game-storage.png',   label: `Permanent memory that keeps your files, apps, and photos safely stored even when the computer is fully powered off.`,                                         correctMatch: 'storage', objectPosition: 'center 50%', matchPhrase: `Storage! Hard drives and SSDs are your computer's long-term memory — permanent and reliable, but slower than RAM. Your files, photos, operating system, and apps live in storage. When you save a document, it moves from temporary RAM into permanent storage. SSDs are much faster than traditional hard drives because they have no moving parts — they use flash memory chips instead. The storage vs. RAM distinction explains why restarting a computer often fixes problems.` },
            { image: 'l08-game-bit-byte.png',  label: `Every letter, image, and song stored on a computer is made up of combinations of these two digits — the smallest unit of digital information.`,              correctMatch: 'binary',  objectPosition: 'center 50%', matchPhrase: `Binary again! Every single piece of information a computer stores — text, images, audio, video, code — is ultimately stored as 0s and 1s. A single 0 or 1 is called a bit. Eight bits make one byte. A single letter takes about one byte. A photo takes millions of bytes. A movie takes billions of bytes. The entire history of human knowledge can be stored in a drive the size of your hand — because binary is extraordinarily efficient at representing information.` },
          ],
          buckets: [
            { id: 'binary',  label: `🔢 Binary`,  color: '#818CF8' },
            { id: 'cpu',     label: `🧠 CPU`,      color: '#60A5FA' },
            { id: 'ram',     label: `⚡ RAM`,       color: '#F59E0B' },
            { id: 'storage', label: `💾 Storage`,  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about how computers think. Answer all 6 questions to earn your Computer Whiz badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Why do computers use binary — 0s and 1s?`,
              options:      [`Because binary math is easier than decimal`, `Because they are built from transistors that are either OFF (0) or ON (1)`, `Because it was chosen randomly by early programmers`, `Because binary uses less electricity`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the difference between RAM and storage?`,
              options:      [`RAM stores files permanently; storage is temporary`, `They are the same thing with different names`, `RAM is fast and temporary; storage is permanent but slower`, `Storage is faster than RAM`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is the basic pattern every computer follows?`,
              options:      [`Start → Run → Stop`, `Input → Processing → Output`, `Read → Write → Delete`, `Binary → CPU → Screen`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `A single 0 or 1 in a computer is called a bit, and eight bits together make one byte.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The main chip that runs programs and executes billions of instructions per second is called the ___.`,
              options:      [`CPU`, `RAM`, `SSD`, `GPU`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What happens to RAM when you turn off a computer?`,
              options:      [`It saves everything to the hard drive automatically`, `It is erased — RAM only holds data while the computer is on`, `It transfers data to the CPU for storage`, `It backs up to cloud storage`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for an interactive binary converter online — there are great tools where you type a number or letter and see it translated to binary in real time. Try your name, your age, and a few numbers. Seeing it translate live makes the concept click in a way reading about it doesn't.`,
          familyAdventure: `Write a secret message to a family member using binary! Each letter of the alphabet has a binary code — look up "ASCII binary table" online. Write 3–4 letters in binary and have your family member decode it. This is literally how computers store text — every word you've ever typed was stored this way.`,
          creativePrompt:  `Try counting in binary using your fingers. Each finger represents a bit: right pinky = 1, ring finger = 2, middle = 4, index = 8, thumb = 16. Start at 0 (all fingers down) and count up to 10 in binary. Can you reach 31 using one hand? With two hands you can count up to 1,023 — way more than the usual ten. This is how computers count everything.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'computer-whiz',
          badgeName: `Computer Whiz`,
          message:   `Brilliant work, {name}! You now know that everything a computer does — every image, song, and message — comes down to billions of 0s and 1s flipping on and off at incredible speed. Binary is the foundation, the CPU is the engine, and RAM and storage work together to keep everything running. When you understand how computers think, you see them completely differently. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l08_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L08] Loaded: "How Computers Think" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l08-magazine-binary.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-magazine-cpu.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-magazine-memory.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-magazine-input-output.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L08] binary: ${r1.ok}, cpu: ${r2.ok}, memory: ${r3.ok}, input-output: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L08] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l08_screens;
