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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is the Internet?`,
          paragraphs: [
            `The internet is a global network of billions of computers and devices connected to each other. When you send a message or load a website, your data travels through this network as packets — small chunks of digital information. Each packet can take a different route through the network, and they reassemble at the destination in the correct order. The result arrives as a complete, coherent message or page.`,
            `The internet was designed with a specific goal: resilience. The original engineers wanted a network that could survive damage to any part of it and keep functioning. If one route is blocked, packets find another. This distributed design means there's no single point of failure — no one cable, server, or location that, if destroyed, could take down the entire network. That resilience is baked into the architecture at the deepest level.`,
            `What makes the internet remarkable is its scale. Billions of devices — phones, computers, servers, cameras, cars, smart appliances — are all part of the same network. Every second, trillions of packets are in transit, carrying messages, videos, web pages, phone calls, and data of every kind. All of it flowing through the same interconnected system, following the same set of rules, reaching its destination in milliseconds.`,
          ],
          image:        '/explorer-assets/future-skills/l05-magazine-what-is-internet.png',
          imageCaption: `The internet — a global network of billions of connected devices, designed for resilience so no single point can bring it down`,
          vocab: [
            { word: `packet`, definition: `A small chunk of digital data that travels across the internet independently — large messages and files are broken into packets, which take different routes and reassemble in order at their destination.`, audioPrompt: `Packet — a small chunk of digital data that travels across the internet independently. Large messages and files are broken into packets, which take different routes and reassemble in order at their destination.` },
            { word: `router`, definition: `A specialized device that directs data packets toward their destination across the network — routers read each packet's address and decide the best next step in its journey through the internet.`,           audioPrompt: `Router — a specialized device that directs data packets toward their destination across the network. Routers read each packet's address and decide the best next step in its journey through the internet.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Data Travels`,
          paragraphs: [
            `When you watch a video on a streaming platform, that video doesn't travel as one giant file. It's broken into thousands of small packets, each labeled with where it's going and its position in the sequence. Those packets travel through routers — specialized computers that direct traffic — making their way across the network toward your device. They may take completely different paths and arrive out of order.`,
            `The cables that carry most of this data are fiber optic cables — glass tubes so thin and clear that data can travel through them as pulses of light. Light moves at the speed of light, which is why the internet feels instant even when data is traveling thousands of miles. Fiber optic cables run under oceans, across continents, and into buildings, forming the physical backbone of the global internet.`,
            `All of these packets — potentially thousands of them — arrive at your device, get reassembled in the correct order, and you see a smooth, complete video. This entire process happens in milliseconds. The fact that it works reliably for billions of simultaneous users is one of the greatest engineering achievements in human history, and most people using it have never thought about how it works.`,
          ],
          image:        '/explorer-assets/future-skills/l05-magazine-how-data-travels.png',
          imageCaption: `How data travels — packets break apart, route across the network through fiber optic cables, and reassemble at the destination`,
          vocab: [
            { word: `fiber optic`, definition: `A type of cable that carries data as pulses of light through glass or plastic fibers — fiber optic cables form the backbone of the internet, enabling data to travel at close to the speed of light.`, audioPrompt: `Fiber optic — a type of cable that carries data as pulses of light through glass or plastic fibers. Fiber optic cables form the backbone of the internet, enabling data to travel at close to the speed of light.` },
            { word: `bandwidth`,   definition: `The capacity of a network connection to carry data — higher bandwidth means more data can travel at once, resulting in faster internet speeds for users.`,                                             audioPrompt: `Bandwidth — the capacity of a network connection to carry data. Higher bandwidth means more data can travel at once, resulting in faster internet speeds for users.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `IP Addresses and Domain Names`,
          paragraphs: [
            `Every device on the internet has an IP address — a unique number that works like a home address for digital data. When you send a packet, it carries the IP address of where it's going so routers know how to direct it. An IP address looks something like 192.168.1.1 — a series of numbers that uniquely identifies one device among billions. Without IP addresses, the internet would have no way to route data to the right place.`,
            `Humans are bad at remembering strings of numbers, so we use domain names instead — readable addresses like a search engine's web address. But computers don't understand domain names; they need IP addresses. The Domain Name System, or DNS, solves this: when you type a website address like google.com into your browser, DNS acts as the internet's phone book, translating that name into the numerical IP address of the destination server so your request knows where to go.`,
            `The DNS system handles billions of lookups every day, almost instantaneously. It's distributed across thousands of servers worldwide so that no single server handles all the load. When you type an address and a page loads in milliseconds, a DNS lookup just happened invisibly in the background — translating a human-readable name into a machine-readable address and routing your request to the right place on Earth.`,
          ],
          image:        '/explorer-assets/future-skills/l05-magazine-ip-dns.png',
          imageCaption: `IP addresses and DNS — every device has a unique number address, and DNS translates human-readable names into those numbers`,
          vocab: [
            { word: `IP address`, definition: `A unique number assigned to every device on the internet — like a home address for digital data. IP addresses allow routers to direct packets to exactly the right destination device.`,                                 audioPrompt: `IP address — a unique number assigned to every device on the internet, like a home address for digital data. IP addresses allow routers to direct packets to exactly the right destination device.` },
            { word: `DNS`,        definition: `The Domain Name System — the internet's phone book that translates human-readable website names into the numerical IP addresses that computers use to locate each other on the network.`, audioPrompt: `DNS — the Domain Name System. The internet's phone book that translates human-readable website names into the numerical IP addresses that computers use to locate each other on the network.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `The Web vs The Internet`,
          paragraphs: [
            `The internet and the World Wide Web are not the same thing — and the difference matters. The internet is the physical infrastructure: the global network of connected computers, cables, routers, and wireless signals. The web is a service that runs on top of that infrastructure: a system of linked pages and documents you access through a browser using web addresses. The internet is the road. The web is one type of vehicle that uses it.`,
            `Email, online gaming, streaming video, video calls, and file transfers also run on the internet — but none of them are the web. They're separate services using the same underlying network. The web specifically refers to pages connected by hyperlinks, displayed in browsers, accessed via URLs. Tim Berners-Lee invented the web in 1989, but the internet itself is older — it existed as a research network for decades before the web was built on top of it.`,
            `Understanding this distinction matters because it changes how you think about digital systems. When a service goes offline, it might be the internet itself (the network) or just a specific web service. When you're troubleshooting a connection, knowing whether the problem is at the network level or the application level points you in completely different directions. The layers of the internet — physical, network, application — each have their own rules, systems, and failure modes.`,
          ],
          image:        '/explorer-assets/future-skills/l05-magazine-web-vs-internet.png',
          imageCaption: `The web vs the internet — the internet is the physical network; the web is one service that runs on top of it`,
          vocab: [
            { word: `World Wide Web`, definition: `A system of linked web pages and documents accessed through browsers using web addresses — the web is one service that runs on the internet, not the internet itself.`,          audioPrompt: `World Wide Web — a system of linked web pages and documents accessed through browsers using web addresses. The web is one service that runs on the internet, not the internet itself.` },
            { word: `protocol`,      definition: `A set of rules that defines how devices communicate on a network — protocols ensure that every device on the internet, no matter who built it, follows the same rules for sending and receiving data.`, audioPrompt: `Protocol — a set of rules that defines how devices communicate on a network. Protocols ensure that every device on the internet, no matter who built it, follows the same rules for sending and receiving data.` },
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
    fetch('/explorer-assets/future-skills/l05-magazine-what-is-internet.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-magazine-how-data-travels.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-magazine-ip-dns.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l05-magazine-web-vs-internet.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L05] what-is-internet: ${r1.ok}, how-data-travels: ${r2.ok}, ip-dns: ${r3.ok}, web-vs-internet: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L05] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l05_screens;
