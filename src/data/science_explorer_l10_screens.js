// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L10 — Day, Night, and Seasons
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 1-ESS1-1 / 1-ESS1-2 (predictable patterns of sun, moon, stars)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L10 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-10`,
      title:     `Day, Night, and Seasons`,
      duration:  12,
      xpReward:  50,
      badge:     `cycles-explorer`,
      badgeName: `Cycles Explorer`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! The sun rises. The sun sets. Summer comes, then winter, then summer again. Why does this happen? Why isn't it just light all the time? Why isn't it the same temperature year-round? Today you'll learn the answers — and they have to do with our amazing spinning, tilted, orbiting Earth. Let's go!`,
          headline: `Day, Night, and Seasons`,
          subtitle: `Why the sun rises and sets — and why summer and winter happen every year`,
          visual: `/explorer-assets/science/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Patterns You Can Count On`,
          paragraphs: [
            `Some things in nature are PREDICTABLE — they happen the same way every time.`,
            `The SUN rises every morning. It sets every evening. The MOON appears in the night sky. SEASONS change every year — spring, summer, fall, winter, then spring again. These patterns have been happening for BILLIONS of years. Without fail. They're so reliable that we built whole CALENDARS around them. Today we'll learn WHY these patterns happen. It all comes down to how Earth MOVES in space.`,
          ],
          image: `/explorer-assets/science/l10-s1-patterns.webp`,
          imageCaption: `Sun rises and sets. Moon shows up. Seasons change. Predictable patterns from how Earth moves.`,
          vocab: [
            { word: `pattern`,        definition: `Something that happens the same way every time. The sun rising is a PATTERN.`,
              audioPrompt: `A pattern, {name}, is something that happens the same way every time. The sun rising every morning is a pattern. The seasons changing every year is a pattern. Nature is FULL of patterns. Scientists love patterns. Once you spot a pattern, you can predict what will happen next.` },
            { word: `predictable`,    definition: `Easy to guess what will happen. Earth's movements are PREDICTABLE.`,
              audioPrompt: `Predictable, {name}, means easy to guess what will happen. Earth's movements are predictable. We know the sun will rise tomorrow. We know summer will come again next year. We know night follows day. These are the most reliable patterns in life. They've been happening for billions of years.` },
            { word: `calendar`,       definition: `A tool for keeping track of days, weeks, months, and years. Calendars are based on Earth's PATTERNS.`,
              audioPrompt: `A calendar, {name}, is a tool for keeping track of days, weeks, months, and years. Calendars are built around Earth's patterns. One year on the calendar = one full trip around the sun. One month = roughly one cycle of the moon. One day = one spin of Earth. Calendars only work because Earth's patterns are so predictable.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Earth SPINS Like a Top`,
          paragraphs: [
            `Here's the BIG SECRET — Earth is SPINNING. Right now. All the time.`,
            `Earth spins like a giant top. It spins on an imaginary line called its AXIS that goes through the North Pole and South Pole. One full spin takes 24 HOURS — that's why a day is 24 hours long. The Earth's spin is FAST — about 1,000 miles per hour at the equator! But because Earth is so big and the spin is smooth, we don't feel it. (If you spin in a circle on the ground, you'd notice — but Earth's spin is too steady to feel.)`,
          ],
          image: `/explorer-assets/science/l10-s2-earth-spins.webp`,
          imageCaption: `Earth spins like a top. Once every 24 hours. We don't feel it — but it's happening right now.`,
          vocab: [
            { word: `spin`,           definition: `To turn around and around. Earth SPINS on its axis.`,
              audioPrompt: `To spin, {name}, is to turn around and around. Earth spins. It's been spinning for billions of years. One full spin takes 24 hours. That spin creates DAY and NIGHT. As Earth spins, different parts face the sun (day) or face away (night). Right now, somewhere on Earth is in day. Somewhere else is in night. Earth's spin makes it happen.` },
            { word: `axis`,           definition: `The imaginary line Earth spins around. Goes through the North Pole and South Pole.`,
              audioPrompt: `The axis, {name}, is the imaginary line Earth spins around. It goes through the North Pole at the top and the South Pole at the bottom. Earth doesn't really have a stick going through it — but if you imagine that line, you can picture how Earth spins. The axis points the same direction always, even as Earth orbits the sun.` },
            { word: `24 hours`,       definition: `How long Earth takes to spin once. One spin = one DAY = 24 HOURS.`,
              audioPrompt: `24 hours, {name}, is how long Earth takes to spin once. That's why one day is 24 hours long. Not because someone decided — because Earth's spin takes that long. If Earth spun faster, days would be shorter. If Earth spun slower, days would be longer. Other planets have different day-lengths because they spin at different speeds.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why We Have DAY and NIGHT`,
          paragraphs: [
            `Here's the cool part — Earth's SPIN is why we have DAY and NIGHT.`,
            `The sun only lights up HALF of Earth at any moment — the half facing it. The other half is in shadow. As Earth spins, your side rotates AWAY from the sun and INTO shadow — that's SUNSET. You're now in night. Eventually you spin back TOWARD the sun — that's SUNRISE. You're back in day. The sun doesn't really "rise" or "set" — Earth's spin makes it LOOK that way. It's actually YOU moving past the sun, not the sun moving across the sky.`,
          ],
          image: `/explorer-assets/science/l10-s3-day-night.webp`,
          imageCaption: `Earth spins → your side faces sun (day) → spins away (night) → back again. Sun doesn't move. You do.`,
          vocab: [
            { word: `day and night`,  definition: `One spin of Earth creates DAY AND NIGHT for every place on the planet.`,
              audioPrompt: `Day and night, {name}, are created by Earth's spin. The side facing the sun is in DAY. The side facing away is in NIGHT. As Earth spins, every place on Earth gets both day and night every 24 hours. Right now, somewhere is in bright day. Somewhere is in middle of night. The spin makes it happen.` },
            { word: `sunrise`,        definition: `When YOUR side of Earth spins toward the sun. The start of day.`,
              audioPrompt: `Sunrise, {name}, is when your side of Earth spins toward the sun. The sun appears at the horizon. But here's the secret — the sun isn't actually MOVING up. EARTH is rotating you toward the sun. It just LOOKS like the sun is rising because we're the ones moving. Same thing in reverse for sunset.` },
            { word: `sunset`,         definition: `When YOUR side of Earth spins AWAY from the sun. The start of night.`,
              audioPrompt: `Sunset, {name}, is when your side of Earth spins away from the sun. The sun appears to sink below the horizon. But again — the sun isn't moving. You are. Earth is rotating you away from the sun. After sunset, you're on the dark side of Earth for a few hours until sunrise.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Earth ORBITS the Sun`,
          paragraphs: [
            `While Earth is spinning, it's ALSO doing something else — TRAVELING around the SUN.`,
            `Earth travels in a big OVAL path around the sun. This path is called an ORBIT. One full orbit takes ONE YEAR (365 days, to be exact). That's why a year is a year — it's the time it takes Earth to go all the way around the sun and back to where it started. Earth is going FAST in its orbit — about 67,000 miles per hour! But space is huge and the orbit is huge, so it still takes 365 days. Earth is both SPINNING and TRAVELING — all at the same time. All the time.`,
          ],
          image: `/explorer-assets/science/l10-s4-earth-orbits.webp`,
          imageCaption: `Earth orbits the sun. One trip = 365 days = one year. Spinning AND traveling at the same time.`,
          vocab: [
            { word: `orbit`,          definition: `A path one object takes around another. Earth's ORBIT goes around the sun.`,
              audioPrompt: `An orbit, {name}, is a path one object takes around another. Earth's orbit is its yearly path around the sun. The orbit is OVAL-shaped, not perfectly round. The moon orbits Earth. Earth orbits the sun. The whole solar system orbits the center of our galaxy. Lots of orbiting happening in space.` },
            { word: `year`,           definition: `One full trip Earth takes around the sun. A YEAR is 365 days.`,
              audioPrompt: `A year, {name}, is one full trip Earth takes around the sun. It's 365 days long. Every birthday, you're celebrating having gone around the sun one more time! Year by year, you accumulate. By the time you're 8, you've traveled around the sun 8 times. By 80, eighty times. Each year is one lap around our star.` },
            { word: `solar system`,   definition: `The sun and all the planets orbiting it. We live in a SOLAR SYSTEM.`,
              audioPrompt: `The solar system, {name}, is the sun and all the planets orbiting it. We have eight planets — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Plus moons, asteroids, comets, and dwarf planets like Pluto. We live in this solar system. The sun is its star, holding everything in orbit with its gravity.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Earth is TILTED`,
          paragraphs: [
            `Now here's the key to SEASONS — Earth doesn't stand up straight. Earth is TILTED.`,
            `Earth's axis is tilted at about 23 degrees. Imagine you tilted slightly to one side — that's Earth. This TILT stays the same direction as Earth orbits the sun. So at different parts of the orbit, different halves of Earth lean TOWARD the sun or AWAY from it. The half tilted TOWARD the sun gets MORE direct sunlight = SUMMER. The half tilted AWAY gets LESS direct sunlight = WINTER. As Earth keeps orbiting, the seasons gradually change.`,
          ],
          image: `/explorer-assets/science/l10-s5-tilted-earth.webp`,
          imageCaption: `Earth is TILTED. Tilt stays the same as Earth orbits sun → different parts lean toward/away → SEASONS.`,
          vocab: [
            { word: `tilted`,         definition: `Leaning to one side. Earth is TILTED at about 23 degrees.`,
              audioPrompt: `Tilted, {name}, means leaning to one side. Earth is tilted at about 23 degrees. It's not straight up. This tilt is the secret behind seasons. The tilt doesn't change as Earth orbits — it stays pointed the same direction. But Earth moves around the sun, so different parts of Earth get pointed at the sun at different times of year.` },
            { word: `seasons`,        definition: `The four times of year — spring, summer, fall, winter — caused by Earth's TILT.`,
              audioPrompt: `Seasons, {name}, are the four times of year — spring, summer, fall, winter. They're caused by Earth's TILT as it orbits the sun. Not by Earth being closer or farther from the sun (that's a myth!). It's the TILT that does it. Different parts of Earth lean toward or away from the sun at different times of year.` },
            { word: `summer-winter`,  definition: `Summer = tilted TOWARD the sun. Winter = tilted AWAY.`,
              audioPrompt: `Summer, {name}, happens when your part of Earth is tilted TOWARD the sun. More direct sunlight = warmer days. Winter happens when your part of Earth is tilted AWAY from the sun. Less direct sunlight = colder days. Same Earth. Same distance from the sun. But the tilt changes how directly the sunlight hits you.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The FOUR Seasons`,
          paragraphs: [
            `Earth's tilt creates FOUR SEASONS that cycle through every year.`,
            `SPRING — the weather warms up. Plants wake up. Flowers bloom. Baby animals are born. SUMMER — hottest. Days are longest. Plants grow tall. Beach days. FALL (or AUTUMN) — cools down. Leaves turn red, orange, yellow. Plants prepare for winter. WINTER — coldest. Days are shortest. Some animals hibernate. Plants rest. Then SPRING comes again. The four seasons are nature's CALENDAR. They've been turning, year after year, forever.`,
          ],
          image: `/explorer-assets/science/l10-s6-four-seasons.webp`,
          imageCaption: `Four seasons cycle through every year. Spring → Summer → Fall → Winter → Spring. Forever.`,
          vocab: [
            { word: `spring`,         definition: `The season when weather warms up and plants wake up. Comes after WINTER.`,
              audioPrompt: `Spring, {name}, is the season when weather warms up and plants wake up. After cold winter, days start getting warmer and longer. Flowers bloom. Trees grow leaves again. Baby animals are born. Spring feels like the world coming back to life. In many places, spring is March, April, and May.` },
            { word: `summer`,         definition: `The hottest season. Days are LONGEST. Lots of plant growth.`,
              audioPrompt: `Summer, {name}, is the hottest season. Days are longest — the sun is up for many hours. Plants grow tall and green. It's a time of activity — many animals are most active. People go to beaches and pools. Summer feels free and warm. In many places, summer is June, July, and August.` },
            { word: `fall winter`,    definition: `FALL = leaves change, cooling down. WINTER = coldest, shortest days, plants rest.`,
              audioPrompt: `Fall and winter, {name}, are the cooler seasons. Fall (also called autumn) is when leaves change color and fall off trees. Days get shorter. The air cools. Plants prepare for winter. Then winter — the coldest season. Shortest days. Some animals hibernate. Plants seem to rest. After winter, spring comes again, and the cycle repeats.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `Earth SPINS once every 24 hours — and that's why we have day and night.`,
              matchPhrase: `Yes! Earth spins on its axis once every 24 hours. The side facing the sun is in DAY. The side facing away is in NIGHT. Spin = day and night.`,
              correctMatch: `fact` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `Earth is TILTED — and that's what causes seasons as it orbits the sun.`,
              matchPhrase: `True! Earth's 23-degree tilt is the secret behind seasons. As Earth orbits the sun, different halves lean toward or away from it. That changes how directly sunlight hits — making summer or winter.`,
              correctMatch: `fact` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `The SUN actually MOVES across the sky around Earth every day.`,
              matchPhrase: `Not at all! The sun doesn't move — EARTH is spinning. We just SEE the sun appearing to move because we're the ones rotating. It LOOKS like the sun rises and sets, but really we're moving past it.`,
              correctMatch: `myth` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `Summer happens because Earth gets CLOSER to the sun, and winter because it's FARTHER away.`,
              matchPhrase: `Definitely not! Earth's distance from the sun stays roughly the same year-round. Seasons are caused by Earth's TILT — not distance. The tilted side leaning toward the sun gets summer.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `Why do we have DAY and NIGHT?`,
              options: [`The sun goes on and off`, `Earth SPINS on its axis — one side faces the sun, the other faces away`, `The clouds cover the sun`, `Aliens turn off the sun`],
              correctIndex: 1,
              explanation: `Earth spins! One full spin takes 24 hours. The side facing the sun is in DAY. The side facing away is in NIGHT. Spin = day and night.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `How LONG does it take Earth to spin ONCE?`,
              options: [`A few seconds`, `24 hours = ONE DAY`, `A whole week`, `A year`],
              correctIndex: 1,
              explanation: `24 hours! That's why one day is 24 hours long. Earth spins at about 1,000 miles per hour, but it's so big that one spin still takes a whole day.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `Earth ORBITS (travels around) the SUN. How long does ONE TRIP take?`,
              options: [`One day`, `One YEAR = 365 days`, `One hour`, `Forever`],
              correctIndex: 1,
              explanation: `One year! 365 days. That's the definition of a year — it's how long Earth takes to travel all the way around the sun and back to where it started.` },
            { id: `l10-q4`, format: `true-false`,
              question: `Earth is TILTED — and that's what causes the SEASONS as Earth orbits the sun.`,
              correctAnswer: true,
              explanation: `True! Earth's 23-degree tilt is the secret behind seasons. The half tilted TOWARD the sun gets summer. The half tilted AWAY gets winter. As Earth orbits, the seasons change.` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `The four seasons are spring, summer, fall, and ___.`,
              options: [`winter`, `friend`, `chocolate`, `pancake`],
              correctIndex: 0,
              explanation: `Winter! Spring, summer, fall, winter — the four seasons that cycle every year. They've been turning since Earth started orbiting the sun, billions of years ago.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `When it's SUMMER where you live, what's happening on the OTHER side of Earth?`,
              options: [`It's also summer`, `It's WINTER — they're tilted away from the sun while you're tilted toward it`, `Everything stops`, `It's spring`],
              correctIndex: 1,
              explanation: `Winter! When one half of Earth tilts TOWARD the sun (summer), the other half tilts AWAY (winter). That's why Australia has summer in December while the US has winter.` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Different cultures all over the world have celebrated Earth's PATTERNS for thousands of years. STONEHENGE in England was built to mark sunrises on special days. The MAYAN civilizations built pyramids that lined up with sunsets on equinoxes. Many cultures celebrate SOLSTICES (the longest and shortest days of the year). Lunar New Year, Easter, Diwali — all are based on Earth and moon patterns. Humans have been astronomers for thousands of years — long before telescopes existed. Looking up at the sky and noticing patterns is one of the oldest sciences.`,
          familyAdventure: `Track SUNSETS for ONE WEEK together. Each evening, write down what TIME the sun sets. (Look online or check a weather app.) Notice — does sunset get EARLIER or LATER each day? (It depends on what time of year it is!) In summer, sunsets get later. In winter, earlier. After a week, you'll see the pattern. That's Earth's tilt at work.`,
          creativePrompt: `Draw the FOUR SEASONS in four boxes. SPRING (flowers blooming). SUMMER (hot sun). FALL (orange leaves). WINTER (snow). For each season, draw yourself doing something you'd do in that weather. Notice how nature changes around you every three months.`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now know WHY day and night happen — Earth SPINS. You know WHY seasons happen — Earth is TILTED as it orbits the sun. The sun doesn't really move. Earth does. The seasons aren't from Earth being closer or farther — they're from the tilt. You're starting to think like a real astronomer. The patterns of Earth and sky are ancient, predictable, and beautiful. See you next lesson!`,
          badge: `cycles-explorer`,
          badgeName: `Cycles Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L10] Loaded: "Day, Night, and Seasons" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
