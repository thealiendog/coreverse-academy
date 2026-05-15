// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 5
// "What Is the Internet and How Does It Work?"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l05_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-05',
      title:     `What Is the Internet and How Does It Work?`,
      duration:  12,
      xpReward:  50,
      badge:     'net-navigator',
      badgeName: `Net Navigator`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Right now, billions of people around the world are sending messages, watching videos, reading news, and playing games — all at the same time. It all runs on a single global system: the internet. Most people use it every day but have no idea what it actually is or how it works. Let's fix that.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'The Internet Is a Network',
          paragraphs: [
            'The internet is a global network of billions of computers and devices, all connected to each other.',
            'It was designed for resilience. If one route goes down, data finds another. No single point can take it down.',
          ],
          image:        '/explorer-assets/future-skills/l05-s1-global-network.png',
          imageCaption: 'Not a cloud. Not a place. The internet is a literal network of billions of connected devices.',
          vocab: [
            { word: 'network',    definition: 'A group of computers connected so they can share data. The internet is the biggest network in the world.', audioPrompt: 'Network — a group of computers connected so they can share data. The internet is the biggest network in the world.' },
            { word: 'resilience', definition: 'The ability to keep working even when parts fail. The internet is designed to route around any damaged section.', audioPrompt: 'Resilience — the ability to keep working even when parts fail. The internet is designed to route around any damaged section.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Data Travels in Packets',
          paragraphs: [
            'Big files don\'t travel as one giant blob. They\'re broken into thousands of small chunks called packets.',
            'Each packet finds its own path through the network, then they reassemble in the right order at the destination. All in milliseconds.',
          ],
          image:        '/explorer-assets/future-skills/l05-s2-packets-routing.png',
          imageCaption: 'A single video is thousands of packets, each taking a different route, all arriving in order',
          vocab: [
            { word: 'packet', definition: 'A small chunk of data that travels independently across the internet. Big files become thousands of packets.', audioPrompt: 'Packet — a small chunk of data that travels independently across the internet. Big files become thousands of packets.' },
            { word: 'router', definition: 'A device that reads each packet\'s address and directs it toward its destination. Every internet packet passes through many routers.', audioPrompt: 'Router — a device that reads each packet\'s address and directs it toward its destination. Every internet packet passes through many routers.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Fiber Optic Cables',
          paragraphs: [
            'Most internet data travels through fiber optic cables — glass tubes so thin that pulses of light carry information through them.',
            'These cables run under oceans, across continents, into buildings. Light moves at the speed of light. That\'s why the internet feels instant.',
          ],
          image:        '/explorer-assets/future-skills/l05-s3-fiber-optic-cables.png',
          imageCaption: 'The internet runs on light. Real cables carry real photons across oceans every second.',
          vocab: [
            { word: 'fiber optic', definition: 'A cable that carries data as pulses of light through thin glass fibers. The physical backbone of the internet.', audioPrompt: 'Fiber optic — a cable that carries data as pulses of light through thin glass fibers. The physical backbone of the internet.' },
            { word: 'bandwidth',   definition: 'How much data a connection can carry at once. Higher bandwidth means faster internet — more lanes on the same highway.', audioPrompt: 'Bandwidth — how much data a connection can carry at once. Higher bandwidth means faster internet, like more lanes on the same highway.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'IP Addresses',
          paragraphs: [
            'Every device on the internet has an IP address — a unique number that works like a home address for digital data.',
            'An IP address looks like 192.168.1.1 — a series of numbers. When you send a packet, it carries the IP address of where it\'s going.',
          ],
          image:        '/explorer-assets/future-skills/l05-s4-ip-addresses.png',
          imageCaption: 'Every phone, laptop, smart speaker — every device on the internet — has its own unique number',
          vocab: [
            { word: 'IP address', definition: 'A unique number that identifies a device on the internet. Like a home address — but for digital data.', audioPrompt: 'IP address — a unique number that identifies a device on the internet. Like a home address, but for digital data.' },
            { word: 'unique',     definition: 'One of a kind. Every IP address on the internet is unique to one device at a time so packets can be delivered correctly.', audioPrompt: 'Unique — one of a kind. Every IP address on the internet is unique to one device at a time so packets can be delivered correctly.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'DNS — The Internet\'s Phone Book',
          paragraphs: [
            'Humans can\'t remember numbers like 192.168.1.1. So we use names like "google.com" instead.',
            'But computers only understand numbers. DNS is the system that translates names into IP addresses — billions of times every day, instantly.',
          ],
          image:        '/explorer-assets/future-skills/l05-s5-dns-phonebook.png',
          imageCaption: 'You type a name. DNS looks up the number. Every web address you\'ve ever typed went through this lookup.',
          vocab: [
            { word: 'DNS',         definition: 'Domain Name System — the internet\'s phone book that translates readable names into numerical IP addresses.', audioPrompt: 'DNS — Domain Name System. The internet\'s phone book that translates readable names into numerical IP addresses.' },
            { word: 'domain name', definition: 'A readable web address like "google.com." Easier for humans than the long numerical IP address underneath.', audioPrompt: 'Domain name — a readable web address like "google.com." Easier for humans than the long numerical IP address underneath.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'The Web Is Not the Internet',
          paragraphs: [
            'The internet and the World Wide Web are NOT the same thing. The internet is the physical network.',
            'The web is one service running on top of it. So is email. So is gaming. The internet is the road. The web is just one vehicle.',
          ],
          image:        '/explorer-assets/future-skills/l05-s6-road-and-vehicles.png',
          imageCaption: 'Internet = the network. Web, email, gaming, streaming = different services running on it. Don\'t confuse them.',
          vocab: [
            { word: 'World Wide Web', definition: 'A system of linked pages and documents accessed by browsers. ONE service that runs on the internet — not the internet itself.', audioPrompt: 'World Wide Web — a system of linked pages and documents accessed by browsers. One service that runs on the internet, not the internet itself.' },
            { word: 'protocol',       definition: 'A set of rules for how devices communicate. Protocols let every device on the internet understand each other.', audioPrompt: 'Protocol — a set of rules for how devices communicate. Protocols let every device on the internet understand each other.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it describes the Internet or the World Wide Web!`,
          guideText:     `The internet is the global physical network — cables, routers, and connected devices. The web is just one service that runs on top of it. Email, gaming, and streaming are also internet services but are NOT the web. Can you tell which is which?`,
          columnHeaders: [`The Description`, `Internet or World Wide Web?`],
          items: [
            { image: 'l05-game-webpage.png',        label: `A collection of linked pages, images, and documents you navigate by clicking links in a browser.`,                                              correctMatch: 'web',      objectPosition: 'center 50%', matchPhrase: `World Wide Web! The defining features of the web are hyperlinks connecting pages, web browsers displaying them, and URLs identifying each page. When you click through articles and images in a browser, you're using the system invented in 1989. The internet delivers the data. The web is the system of pages and links that organizes and presents that data in a way humans can navigate.` },
            { image: 'l05-game-infrastructure.png', label: `The global system of physical cables, routers, and satellites that connects billions of devices to each other.`,                              correctMatch: 'internet', objectPosition: 'center 50%', matchPhrase: `Internet! The internet is the physical infrastructure — undersea fiber optic cables, routers directing traffic, wireless towers, satellites. It existed before the web and contains far more than websites. Email, online games, video calls, and streaming services all use the internet as their transport layer. The internet is the road. The web, email, and games are different vehicles driving on the same road.` },
            { image: 'l05-game-email.png',          label: `A digital message sent directly from one inbox to another, traveling across the global network.`,                                              correctMatch: 'internet', objectPosition: 'center 50%', matchPhrase: `Internet! Email uses the internet as its transport layer — but it is not the web. When you send an email, data packets travel across the global network using internet protocols. But you're not using a browser or clicking through linked web pages. Email and the web are two completely separate services, both running on the same underlying internet infrastructure. The internet is shared; the services that run on it are distinct.` },
            { image: 'l05-game-browsing.png',       label: `Clicking from one linked article to another, loading pages filled with text, images, and video in a browser.`,                               correctMatch: 'web',      objectPosition: 'center 50%', matchPhrase: `World Wide Web! Navigating from page to page in a browser using clickable links is the World Wide Web in action — the exact system Tim Berners-Lee designed. Each link is a URL pointing to a specific page on a specific server. The internet carries the data; the web is the structure of interconnected pages that makes it navigable. Without the internet, the web couldn't function. Without the web, the internet would still exist — it just wouldn't have websites.` },
          ],
          buckets: [
            { id: 'internet', label: `🌐 Internet`,        color: '#60A5FA' },
            { id: 'web',      label: `🕸️ World Wide Web`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about how the internet works. Answer all 6 questions to earn your Net Navigator badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the internet?`,
              options:      [`A single giant computer`, `A global network of billions of computers connected to each other`, `The same thing as the World Wide Web`, `A system owned by one company`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is an IP address?`,
              options:      [`A website's name`, `A unique number that identifies each device on the internet`, `A type of internet cable`, `The speed of your internet connection`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the difference between the internet and the World Wide Web?`,
              options:      [`They are exactly the same thing`, `The web is faster than the internet`, `The internet is the physical network; the web is one service that runs on it`, `The internet is newer than the web`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `When data travels across the internet, it is broken into small pieces called packets that travel separately and reassemble at their destination.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The system that translates human-readable website names into numerical addresses so computers can find each other is called the ___.`,
              options:      [`DNS`, `HTTP`, `Wi-Fi`, `firewall`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is a router's job on the internet?`,
              options:      [`To store all the internet's data in one location`, `To direct data packets toward their destination across the network`, `To translate domain names into IP addresses`, `To create new IP addresses for every new device`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for an interactive map of the world's undersea internet cables — thousands of cables run along the ocean floor connecting every continent. The internet isn't floating in clouds; it's physical cables carrying pulses of light.`,
          familyAdventure: `Look up where the nearest internet cable or fiber optic line runs near your home. Then search online for a submarine cable map — there are great interactive maps showing thousands of cables crisscrossing the ocean floor connecting every continent. The physical internet is incredible.`,
          creativePrompt:  `Simulate how the internet works. Write a short message on 4 index cards — one word per card — and number them 1 to 4. These are your packets. Shuffle them and pass them one at a time through different family members (your routers) to the final person. The receiver must put them in the right order. Now try passing them out of order — can they still reassemble correctly? This is how your data travels every day.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'net-navigator',
          badgeName: `Net Navigator`,
          message:   `Brilliant work, {name}! You now know that the internet is the physical global network — cables, routers, and signals — and that the web is just one service running on top of it. Understanding the infrastructure behind your tools is how real builders see the world. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l05_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L05] Loaded: "What Is the Internet and How Does It Work?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l05-s1-global-network.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-s2-packets-routing.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-s3-fiber-optic-cables.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-s4-ip-addresses.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-s5-dns-phonebook.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-s6-road-and-vehicles.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L05] global-network: ${r1.ok}, packets-routing: ${r2.ok}, fiber-optic-cables: ${r3.ok}, ip-addresses: ${r4.ok}, dns-phonebook: ${r5.ok}, road-and-vehicles: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L05] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l05_screens;
