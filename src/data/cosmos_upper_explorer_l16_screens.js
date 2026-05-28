// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L16 — Exoplanets: Worlds Beyond Our Solar System
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS1 (extension) — the universe and its stars
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify exoplanets by type)
// SCOPE: 4 concepts — what an exoplanet is, how we find them, the types
//        of worlds, the habitable zone
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-16`,
      title: `Exoplanets: Worlds Beyond Our Solar System`,
      duration: 18,
      xpReward: 75,
      badge: `exoplanet-explorer`,
      badgeName: `Exoplanet Explorer`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. For most of human history, we knew of only the handful of planets in our own solar system. We had no idea whether planets existed around OTHER stars. Then, in the 1990s, that changed forever. Astronomers discovered the first EXOPLANETS, planets orbiting distant stars. Today we've found thousands of them, and we now believe there are likely MORE planets in our galaxy than there are stars. The universe is absolutely filled with worlds. By the end of today, you'll understand these distant planets and how we find them. Let's begin.`,
          headline: `Exoplanets`,
          subtitle: `The thousands of worlds we've discovered orbiting other stars`,
          visual: `/ue-assets/cosmos/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What an Exoplanet Is`,
          paragraphs: [
            `An EXOPLANET is simply a planet that orbits a star OTHER than our Sun. The prefix "exo" means "outside," so an exoplanet is a planet outside our solar system. Our solar system has eight planets orbiting our Sun. Exoplanets orbit the countless other stars across the galaxy. For most of history, we could only wonder if they existed. It seemed likely (why would our Sun be the only star with planets?), but nobody could prove it, because exoplanets are incredibly hard to see directly.`,
            `Then came a breakthrough. In 1995, astronomers confirmed the first exoplanet orbiting a normal star like our Sun. It was a giant world, and finding it proved that other solar systems are real. Since then, the discoveries have exploded. As of recent years, astronomers have confirmed over 5,000 exoplanets, and they keep finding more. Based on these discoveries, scientists now estimate that planets are extremely common, and that our galaxy alone likely contains hundreds of billions of planets, possibly more planets than stars. The galaxy isn't a few lonely worlds among the stars. It's overflowing with them.`,
          ],
          image: `/ue-assets/cosmos/l16-s1-what-is.webp`,
          imageCaption: `An exoplanet: a planet orbiting another star. We've confirmed over 5,000 so far.`,
          vocab: [
            {
              word: `exoplanet`,
              definition: `A planet that orbits a star other than our Sun, outside our solar system. The first was confirmed in 1995. Astronomers have now found thousands, suggesting planets are extremely common in the galaxy.`,
              audioPrompt: `An exoplanet is simply a planet that orbits a star other than our Sun, {name}. The prefix exo means outside, so an exoplanet is a planet outside our solar system. Our solar system has eight planets orbiting our Sun. Exoplanets orbit the countless other stars across the galaxy. For most of history, we could only wonder if they existed. Then in 1995, astronomers confirmed the first exoplanet orbiting a star like our Sun. Since then, the discoveries have exploded. The galaxy is overflowing with worlds.`,
            },
            {
              word: `solar system`,
              definition: `A star and all the objects that orbit it, held in place by the star's gravity. Our solar system has one star (the Sun) and eight planets, plus moons, asteroids, and comets. Scientists now know solar systems are very common across the galaxy.`,
              audioPrompt: `A solar system is a star and all the objects that orbit it, held in place by the star's gravity, {name}. Our solar system has one star, the Sun, and eight planets orbiting it, along with moons, asteroids, and comets. Exoplanets are planets found in other solar systems, orbiting distant stars. Scientists now know that solar systems like ours are very common across the galaxy. Many stars have multiple planets, and some are radically different from ours, with giant planets, tiny planets, or planets in exotic orbits.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How We Find Distant Worlds`,
          paragraphs: [
            `Here's a puzzle: exoplanets are so far away and so dim compared to their bright stars that we usually can't see them directly. They're like trying to spot a tiny firefly next to a blazing searchlight from thousands of kilometers away. So how do astronomers find them? They use clever indirect methods, detecting the planet's EFFECTS rather than seeing the planet itself.`,
            `The most successful method is called the TRANSIT method. When a planet passes directly in front of its star (from our viewpoint), it blocks a tiny bit of the star's light, making the star look very slightly dimmer for a while. By watching thousands of stars and looking for these tiny, regular dips in brightness, astronomers can detect planets they can't even see. The dimming also tells them the planet's size and how long its "year" is. Another method detects the tiny WOBBLE a planet's gravity causes in its star. These brilliant techniques let us discover and even study the atmospheres of worlds trillions of kilometers away. It's a stunning example of human cleverness: we found thousands of invisible worlds by carefully measuring starlight.`,
          ],
          image: `/ue-assets/cosmos/l16-s2-find.webp`,
          imageCaption: `The transit method: a planet dims its star's light as it passes in front.`,
          vocab: [
            {
              word: `transit method`,
              definition: `A way to detect exoplanets by watching for the tiny dip in a star's brightness when a planet passes in front of it. The most successful exoplanet-finding method, revealing the planet's size and orbit.`,
              audioPrompt: `The transit method is a way to detect exoplanets by watching a star's brightness, {name}. Exoplanets are too far and dim to see directly, like a firefly next to a searchlight. So astronomers detect their effects instead. When a planet passes directly in front of its star, from our viewpoint, it blocks a tiny bit of the star's light, making the star look slightly dimmer for a while. By watching thousands of stars for these tiny, regular dips in brightness, astronomers can detect planets they can't even see.`,
            },
            {
              word: `stellar wobble`,
              definition: `A tiny back-and-forth movement a planet's gravity causes in its star as it orbits. By precisely measuring this wobble in a star's light, astronomers can detect a planet without ever seeing it. One of the first methods used to confirm exoplanets.`,
              audioPrompt: `The stellar wobble method finds exoplanets by detecting the tiny movement a planet causes in its star, {name}. Every planet's gravity pulls slightly on its star as it orbits, causing the star to wobble slightly back and forth. By carefully measuring this wobble in a star's light using a technique called Doppler spectroscopy, astronomers can detect a planet even without ever seeing it. This method revealed some of the first exoplanet discoveries. Together with the transit method, the stellar wobble method has helped astronomers confirm thousands of planets orbiting stars.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Amazing Variety of Worlds`,
          paragraphs: [
            `The exoplanets we've found are astonishingly diverse, often stranger than anything in our own solar system. Some are ROCKY WORLDS, with solid surfaces like Earth, Mars, or Venus. Some are GAS GIANTS, enormous balls of gas like Jupiter or Saturn. There are also "super-Earths" (rocky worlds bigger than Earth but smaller than the gas giants) and "mini-Neptunes." The variety is incredible, and many types don't even exist in our own solar system.`,
            `Some exoplanets are truly bizarre. There are "hot Jupiters," giant gas planets orbiting so close to their stars that a "year" lasts only a few Earth-DAYS, with surface temperatures hot enough to melt metal. There are worlds where it might rain molten glass sideways in shrieking winds, or planets orbiting two suns at once (like the fictional Tatooine, but real). There are rogue planets drifting alone through space with no star at all. Each discovery reveals that the universe is even more creative and varied than we imagined. Studying this variety helps scientists understand how planets (including our own) form and what makes a world more or less likely to support life.`,
          ],
          image: `/ue-assets/cosmos/l16-s3-variety.webp`,
          imageCaption: `Rocky worlds, gas giants, hot Jupiters, double-sun planets: a wild variety of worlds.`,
          vocab: [
            {
              word: `gas giant`,
              definition: `A huge planet made mostly of gas, like Jupiter and Saturn in our solar system. Many exoplanets are gas giants, including strange "hot Jupiters" that orbit extremely close to their stars.`,
              audioPrompt: `A gas giant is a huge planet made mostly of gas, {name}. Like Jupiter and Saturn in our own solar system. Many exoplanets are gas giants too. Some are truly bizarre, like hot Jupiters, giant gas planets orbiting so close to their stars that a year lasts only a few Earth days, with temperatures hot enough to melt metal. Gas giants are different from rocky worlds, which have solid surfaces like Earth, Mars, or Venus.`,
            },
            {
              word: `rocky world`,
              definition: `A planet with a solid surface, like Earth, Mars, and Venus. Many exoplanets are rocky worlds, including "super-Earths" more massive than Earth. Rocky worlds in the habitable zone are the most promising targets in the search for life.`,
              audioPrompt: `A rocky world is a planet with a solid surface, like Earth, Mars, and Venus in our solar system, {name}. Many exoplanets are rocky worlds too, and some are even more massive than Earth, called super-Earths. Rocky worlds are the most promising places to search for life, because a solid surface can hold liquid water and an atmosphere. But being a rocky world doesn't guarantee a planet is habitable. Temperature, atmosphere, and radiation all matter too. Scientists are especially excited about rocky worlds in the habitable zone.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Habitable Zone: Searching for Another Earth`,
          paragraphs: [
            `Of all the exoplanets, the ones that excite scientists most are those that might support LIFE. A key idea here is the HABITABLE ZONE, sometimes called the "Goldilocks zone." It's the distance from a star where conditions might be "just right" for liquid water to exist on a planet's surface, not too hot (water boils away) and not too cold (water freezes). Since life as we know it needs liquid water, planets in the habitable zone are prime targets in the search for life beyond Earth.`,
            `Scientists have found a number of rocky exoplanets in the habitable zones of their stars, some roughly Earth-sized. These are tantalizing. But being in the habitable zone doesn't GUARANTEE a world has life, or even liquid water. A planet also needs the right atmosphere, the right ingredients, and other conditions we're still learning about. Finding a truly Earth-like world (and especially finding signs of life on one) would be one of the most profound discoveries in human history. Nova's teaching: just a few decades ago, we didn't know if any other planets existed at all. Now we know the galaxy is overflowing with worlds, and we're actively searching them for signs of life. You're living in the first era of human history when this search is actually possible. The question "are we alone?" is one we'll explore next, and it has never been more answerable.`,
          ],
          image: `/ue-assets/cosmos/l16-s4-habitable.webp`,
          imageCaption: `The habitable zone: the "just right" distance where liquid water could exist.`,
          vocab: [
            {
              word: `habitable zone`,
              definition: `The distance from a star where conditions might be "just right" for liquid water on a planet's surface: not too hot, not too cold. Also called the "Goldilocks zone." A prime target in the search for life.`,
              audioPrompt: `The habitable zone is the distance from a star where conditions might be just right for liquid water on a planet's surface, {name}. It's sometimes called the Goldilocks zone, because it's not too hot, where water boils away, and not too cold, where water freezes. Since life as we know it needs liquid water, planets in the habitable zone are prime targets in the search for life beyond Earth. But being in the habitable zone doesn't guarantee life or even liquid water.`,
            },
            {
              word: `atmosphere`,
              definition: `A layer of gases surrounding a planet, held in place by gravity. Earth's atmosphere protects us from radiation, keeps the planet warm, and gives us air to breathe. For exoplanets, the atmosphere is one of the most important clues about whether a world could support life.`,
              audioPrompt: `An atmosphere is a layer of gases surrounding a planet, held in place by gravity, {name}. Earth's atmosphere is made mostly of nitrogen and oxygen, and it's essential for life. It protects us from harmful radiation from space, keeps the planet warm enough through the greenhouse effect, and gives us air to breathe. For exoplanets, the atmosphere is one of the most important clues about whether a world could support life. Scientists can detect an exoplanet's atmosphere by analyzing how starlight filters through it.`,
            },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Astronomers have detected four exoplanets. Using the clues, classify each: ROCKY WORLD (solid surface, like Earth), GAS GIANT (huge ball of gas, like Jupiter), or POTENTIALLY HABITABLE (the right conditions that it MIGHT support life)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `rocky`,     label: `Rocky World`,           color: `#FBBF24`, description: `A planet with a solid surface, like Earth, Mars, or Venus.` },
            { id: `gas`,       label: `Gas Giant`,             color: `#60A5FA`, description: `A huge planet made mostly of gas, like Jupiter or Saturn.` },
            { id: `habitable`, label: `Potentially Habitable`, color: `#34D399`, description: `Conditions that might be just right for liquid water and possibly life.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `World #1`,
              clues: [
                { text: `It's enormous, hundreds of times the mass of Earth.` },
                { text: `It's made almost entirely of gas, with no solid surface to stand on.` },
                { text: `It's similar to Jupiter in our own solar system.` },
              ],
              correctAnswer: `gas`,
              realWorldExample: `Most early exoplanet discoveries were gas giants.`,
              explanation: `Enormous, made of gas, no solid surface, Jupiter-like. Pure gas giant. The earliest exoplanets discovered were mostly gas giants, because their large size makes them easier to detect.`,
            },
            {
              id: `case-2`,
              caseTitle: `World #2`,
              clues: [
                { text: `It's a small, rocky planet with a solid surface.` },
                { text: `But it orbits extremely close to its star, far closer than Mercury orbits our Sun.` },
                { text: `Its surface is hot enough to melt metal, far too hot for liquid water.` },
              ],
              correctAnswer: `rocky`,
              realWorldExample: `Many rocky exoplanets orbit scorchingly close to their stars.`,
              explanation: `Solid surface makes it a rocky world. But it's far too hot for life (close to its star, hot enough to melt metal). So it's a rocky world, NOT potentially habitable. Pure rocky world. Being rocky isn't enough for life; temperature matters too.`,
            },
            {
              id: `case-3`,
              caseTitle: `World #3`,
              clues: [
                { text: `It's a rocky planet, roughly the size of Earth.` },
                { text: `It orbits in its star's habitable zone, where the temperature could allow liquid water.` },
                { text: `It appears to have an atmosphere with the right ingredients.` },
              ],
              correctAnswer: `habitable`,
              realWorldExample: `Earth-sized worlds in habitable zones are top targets for study.`,
              explanation: `Rocky, Earth-sized, in the habitable zone, with a promising atmosphere. Pure potentially habitable. Worlds like this are the most exciting targets in the search for life, the kind scientists study most closely.`,
            },
            {
              id: `case-4`,
              caseTitle: `World #4 — The Tricky One`,
              clues: [
                { text: `It's a rocky, Earth-sized planet sitting right in its star's habitable zone.` },
                { text: `At first glance, it looks like a perfect candidate for life.` },
                { text: `BUT its star constantly blasts it with intense radiation flares, and the planet appears to have no protective atmosphere left.` },
              ],
              correctAnswer: `rocky`,
              realWorldExample: `Many "habitable zone" worlds turn out to be hostile on closer study.`,
              explanation: `Tricky! It's rocky, Earth-sized, AND in the habitable zone, so you'd want to say "potentially habitable." But look at the last clue: its star blasts it with radiation and it has lost its atmosphere. Being in the habitable zone is necessary but NOT enough. Without a protective atmosphere, and with deadly radiation, this world likely can't support life as we know it. So it's best classified as just a rocky world, not potentially habitable. Lesson: the "habitable zone" is only one ingredient. A truly habitable world also needs the right atmosphere, protection from radiation, and other conditions. Scientists have learned not to get too excited by location alone. Real habitability is about the whole picture, not just distance from the star.`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is an EXOPLANET?`,
              options: [
                `A planet in our solar system`,
                `A planet that orbits a star other than our Sun, outside our solar system`,
                `A type of star`,
                `A moon`,
              ],
              correctIndex: 1,
              explanation: `An exoplanet is a planet orbiting a star other than our Sun. "Exo" means "outside," so it's a planet outside our solar system. The first was confirmed in 1995, and we've now found thousands, suggesting planets are extremely common.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `How common are planets in our galaxy, based on exoplanet discoveries?`,
              options: [
                `Very rare`,
                `Extremely common — likely hundreds of billions, possibly more planets than stars`,
                `Only eight exist`,
                `Just a few dozen`,
              ],
              correctIndex: 1,
              explanation: `Based on thousands of discoveries, scientists estimate our galaxy alone likely contains hundreds of billions of planets, possibly more planets than stars. The galaxy isn't a few lonely worlds among stars. It's overflowing with planets.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `How does the TRANSIT METHOD find exoplanets?`,
              options: [
                `By photographing them directly`,
                `By detecting the tiny dip in a star's brightness when a planet passes in front of it`,
                `By listening for radio signals`,
                `By sending spacecraft`,
              ],
              correctIndex: 1,
              explanation: `Exoplanets are too dim to see directly, like a firefly next to a searchlight. The transit method watches for the tiny dip in a star's brightness when a planet passes in front. This reveals the planet's size and orbit, even though we can't see it.` },

            { id: `l16-q4`, format: `true-false`,
              question: `True or false: We usually can't see exoplanets directly, so we detect their effects (like dimming starlight) instead.`,
              correctAnswer: true,
              explanation: `True. Exoplanets are so far and dim compared to their bright stars that we usually can't see them directly. Astronomers use clever indirect methods, like the transit method (dimming) and detecting a star's wobble, to find and study planets they can't even see.` },

            { id: `l16-q5`, format: `multiple-choice`,
              question: `What's the difference between a ROCKY WORLD and a GAS GIANT?`,
              options: [
                `No difference`,
                `Rocky worlds have solid surfaces (like Earth); gas giants are huge balls of gas (like Jupiter) with no solid surface`,
                `Gas giants are smaller`,
                `Rocky worlds are made of gas`,
              ],
              correctIndex: 1,
              explanation: `Rocky worlds have solid surfaces, like Earth, Mars, and Venus. Gas giants are enormous balls of gas with no solid surface, like Jupiter and Saturn. Exoplanets come in both types, plus others like super-Earths, many stranger than anything in our solar system.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `What is the HABITABLE ZONE (or "Goldilocks zone")?`,
              options: [
                `Where aliens definitely live`,
                `The distance from a star where conditions might be "just right" for liquid water — not too hot, not too cold`,
                `The center of a star`,
                `The edge of the galaxy`,
              ],
              correctIndex: 1,
              explanation: `The habitable zone is the distance from a star where it might be "just right" for liquid water: not too hot (boils away) or too cold (freezes). Since life as we know it needs liquid water, planets here are prime targets in the search for life.` },

            { id: `l16-q7`, format: `multiple-choice`,
              question: `Does being in the HABITABLE ZONE GUARANTEE a planet has life?`,
              options: [
                `Yes, always`,
                `No — a planet also needs the right atmosphere, protection from radiation, and other conditions; location alone isn't enough`,
                `Yes, if it's rocky`,
                `Life is impossible anywhere`,
              ],
              correctIndex: 1,
              explanation: `No. Being in the habitable zone is necessary but not enough. A truly habitable world also needs the right atmosphere, protection from radiation, and other conditions. Scientists have learned not to get too excited by location alone. Real habitability is the whole picture.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `Why is this an exciting era for the search for other worlds?`,
              options: [
                `It isn't exciting`,
                `Just decades ago we didn't know if any other planets existed; now we know the galaxy is full of them and we can search for life`,
                `We've visited them all`,
                `We've given up looking`,
              ],
              correctIndex: 1,
              explanation: `Just a few decades ago, we didn't know if other planets existed at all. Now we know the galaxy is overflowing with worlds, and we can actively search them for signs of life. You're living in the first era of human history when this search is actually possible.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `There are likely more planets than stars in our galaxy. How does it feel to know the universe is overflowing with worlds we're only just discovering?` },
            { id: `r2`, text: `Astronomers find invisible planets by carefully measuring tiny dips in starlight. What does that cleverness tell you about how science overcomes "impossible" problems?` },
            { id: `r3`, text: `The trick case showed that being in the habitable zone isn't enough for life. Why is it important not to jump to conclusions from just one clue?` },
            { id: `r4`, text: `If you could send a telescope to study ONE kind of exoplanet, which would you choose, and what would you hope to learn?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `The search for exoplanets is one of the most active and exciting areas of science today. Powerful new space telescopes are not only finding new worlds but actually analyzing their atmospheres, looking for gases that might hint at life. Astronomers, engineers, and data scientists work together on these missions, sifting through enormous amounts of starlight data. The discoveries are reshaping our understanding of our place in the universe. Nova's note: you're growing up during a golden age of planet discovery. The kids alive today may be the first generation to find clear evidence of another living world. Imagine being part of answering one of humanity's oldest questions.`,
          familyAdventure: `Family Exoplanet Exploration. As a family, look up some real exoplanets and their wild features (TRAPPIST-1's seven planets, "hot Jupiters," worlds with two suns). Pick your favorite and imagine what it would be like to visit. Then look up at the night sky together: nearly every star you can see likely has its own planets. Talk about how, just a few decades ago, nobody knew that for sure. You're living in the era when we finally found out.`,
          creativePrompt: {
            intro: `Imagine you've discovered a brand-new exoplanet and get to describe it to the world. Write your discovery announcement.`,
            floor: `Write at least 5 sentences. Name your planet, describe what type it is (rocky, gas giant), and one amazing feature.`,
            stretch: `Write 8 to 10 sentences. Describe your planet's type, its star, its conditions, whether it's in the habitable zone, and what makes it scientifically exciting.`,
            open: `Write as much as you want. Write a full discovery announcement for your exoplanet. Give it a name, describe how you detected it (transit method, wobble), what type of world it is, its star and orbit, its conditions (temperature, atmosphere), whether it's in the habitable zone, what makes it unique or strange, and why its discovery matters for the search for life. Make it scientifically grounded but full of wonder.`,
            frames: [
              `Today, I announce the discovery of a new world, which I name ___.`,
              `We detected it by ___.`,
              `It is a ___ (rocky world / gas giant / something stranger).`,
              `What makes it remarkable is ___.`,
              `This discovery matters because ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Brilliant work, {name}. You can now explain what an exoplanet is, how astronomers find invisible worlds, the amazing variety of planets out there, and what the habitable zone means for the search for life. Next lesson is one of the biggest questions humans have ever asked, and it builds directly on everything you just learned. ARE WE ALONE? THE SEARCH FOR EXTRATERRESTRIAL LIFE. See you there. — Nova.`,
          badge: `exoplanet-explorer`,
          badgeName: `Exoplanet Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L16.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L16 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
