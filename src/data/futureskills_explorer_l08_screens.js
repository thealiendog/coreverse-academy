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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Binary: The Language of Computers',
          paragraphs: [
            'Humans count using 10 digits (0–9). Computers count using only 2: 0 and 1.',
            'Why? Because computers are built from billions of tiny switches that are either OFF (0) or ON (1). No middle ground.',
          ],
          image:        '/explorer-assets/future-skills/l08-s1-binary-switches.png',
          imageCaption: 'Every computer in history runs on the same simple idea: switches that are either off or on. That\'s binary.',
          vocab: [
            { word: 'binary',     definition: 'A number system using only 0 and 1. The fundamental language every computer uses.', audioPrompt: 'Binary — a number system using only 0 and 1. The fundamental language every computer uses.' },
            { word: 'transistor', definition: 'A tiny switch inside a computer that is either off (0) or on (1). Billions of them are packed into every chip.', audioPrompt: 'Transistor — a tiny switch inside a computer that is either off (0) or on (1). Billions of them are packed into every chip.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Bits and Bytes',
          paragraphs: [
            'Each 0 or 1 is called a bit. Eight bits make a byte. A single letter takes 1 byte.',
            'A photo takes millions of bytes. A movie takes billions. Everything you see on a computer is stored as bits — at incredible speed.',
          ],
          image:        '/explorer-assets/future-skills/l08-s2-bits-to-bytes.png',
          imageCaption: 'Letters → photos → movies. Everything digital scales up from the same building block: one bit at a time.',
          vocab: [
            { word: 'bit',  definition: 'A single 0 or 1. The smallest possible unit of digital information.', audioPrompt: 'Bit — a single 0 or 1. The smallest possible unit of digital information.' },
            { word: 'byte', definition: 'Eight bits grouped together. Enough to store one character — a letter, a digit, a punctuation mark.', audioPrompt: 'Byte — eight bits grouped together. Enough to store one character: a letter, a digit, a punctuation mark.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'The CPU — The Brain',
          paragraphs: [
            'The CPU (Central Processing Unit) is the main chip that runs programs. It fetches instructions, decodes them, and executes them.',
            'A modern CPU can do over 3 BILLION operations per second. That speed creates the illusion of intelligence.',
          ],
          image:        '/explorer-assets/future-skills/l08-s3-cpu-flow.png',
          imageCaption: 'The CPU isn\'t smart. It\'s just unbelievably fast at simple instructions. That speed is what feels like thinking.',
          vocab: [
            { word: 'CPU',       definition: 'Central Processing Unit — the main chip that runs every program. The brain of every computer.', audioPrompt: 'CPU — Central Processing Unit. The main chip that runs every program. The brain of every computer.' },
            { word: 'operation', definition: 'A single instruction the CPU executes — like adding two numbers. Modern CPUs do billions of operations per second.', audioPrompt: 'Operation — a single instruction the CPU executes, like adding two numbers. Modern CPUs do billions of operations per second.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'RAM — Fast But Temporary',
          paragraphs: [
            'RAM is your computer\'s short-term memory — fast, but wiped the moment power goes off.',
            'When you open an app, it loads from storage into RAM so the CPU can work with it quickly. More RAM = more apps at once.',
          ],
          image:        '/explorer-assets/future-skills/l08-s4-ram-temporary.png',
          imageCaption: 'RAM is fast and forgetful. It holds whatever the computer\'s actively using, then forgets it all when power cuts.',
          vocab: [
            { word: 'RAM',       definition: 'Random Access Memory — fast, temporary memory that holds whatever the computer is actively working on right now.', audioPrompt: 'RAM — Random Access Memory. Fast, temporary memory that holds whatever the computer is actively working on right now.' },
            { word: 'temporary', definition: 'Not lasting. RAM only holds data while the computer is on — turn it off, and everything in RAM is gone.', audioPrompt: 'Temporary — not lasting. RAM only holds data while the computer is on; turn it off, and everything in RAM is gone.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Storage — Slow But Permanent',
          paragraphs: [
            'Storage holds your files, photos, and apps permanently. Hard drives and SSDs are the most common types.',
            'It\'s much slower than RAM, but it keeps data even when the computer is off. SSDs are faster because they have no moving parts.',
          ],
          image:        '/explorer-assets/future-skills/l08-s5-storage-vault.png',
          imageCaption: 'Storage is slow but loyal. It keeps your files safe whether the computer is on or off.',
          vocab: [
            { word: 'storage', definition: 'Permanent memory that keeps data even when the computer is powered off. Hard drives and SSDs are types of storage.', audioPrompt: 'Storage — permanent memory that keeps data even when the computer is powered off. Hard drives and SSDs are types of storage.' },
            { word: 'SSD',     definition: 'Solid State Drive — a type of storage that uses flash memory with no moving parts. Much faster than older hard drives.', audioPrompt: 'SSD — Solid State Drive. A type of storage that uses flash memory with no moving parts. Much faster than older hard drives.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Input → Processing → Output',
          paragraphs: [
            'Every computer interaction follows the same pattern: Input → Processing → Output.',
            'Input: a keystroke, a mouse click, a camera shot. Processing: the CPU runs code. Output: something appears on screen, plays sound, or prints.',
          ],
          image:        '/explorer-assets/future-skills/l08-s6-input-output-flow.png',
          imageCaption: 'Three steps. Always. The most complex AI in the world follows the same pattern as pressing one key.',
          vocab: [
            { word: 'input',  definition: 'Anything that goes INTO a computer — keystrokes, clicks, camera images, microphone audio, touchscreen taps.', audioPrompt: 'Input — anything that goes into a computer: keystrokes, clicks, camera images, microphone audio, touchscreen taps.' },
            { word: 'output', definition: 'Anything a computer produces OUT — text on screen, sound through speakers, a printed page, data sent across the network.', audioPrompt: 'Output — anything a computer produces out: text on screen, sound through speakers, a printed page, data sent across the network.' },
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
    fetch('/explorer-assets/future-skills/l08-s1-binary-switches.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-s2-bits-to-bytes.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-s3-cpu-flow.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-s4-ram-temporary.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-s5-storage-vault.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l08-s6-input-output-flow.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L08] binary-switches: ${r1.ok}, bits-to-bytes: ${r2.ok}, cpu-flow: ${r3.ok}, ram-temporary: ${r4.ok}, storage-vault: ${r5.ok}, input-output-flow: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L08] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l08_screens;
