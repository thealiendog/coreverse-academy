// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L10 — Day, Night, and Seasons
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 1-ESS1-1 / 1-ESS1-2
// REWRITE v2 (May 2026): Grade 1 accessible, DAY-NIGHT / SEASONS / SOLAR SYSTEM
// 3-bucket identification game tests sorting phenomena by their cause
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! The sun rises! The sun sets! Summer comes, then winter, then summer again! Why does this happen? Why isn't it just light all the time? Why isn't it the same temperature year-round? Today you'll learn the answers — about our amazing spinning, tilted, orbiting Earth! Let's go!`,
          headline: `Day, Night, and Seasons`,
          subtitle: `Why the sun rises and sets — and why summer and winter happen`,
          visual: `/explorer-assets/science/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Patterns You Can Count On`,
          paragraphs: [
            `Some things in nature are PREDICTABLE — they happen the same way every time!`,
            `The SUN rises every morning! It sets every evening! The MOON appears in the night sky! SEASONS change every year — spring, summer, fall, winter, then spring again! These patterns have been happening for BILLIONS of years! Without fail! They're so reliable that we built whole CALENDARS around them! Today we learn WHY these patterns happen! It all comes down to how Earth MOVES in space!`,
          ],
          image: `/explorer-assets/science/l10-s1-patterns.webp`,
          imageCaption: `Sun rises and sets. Seasons change. Predictable patterns!`,
          vocab: [
            { word: `pattern`,     definition: `Something that happens the same way every time.`,
              audioPrompt: `A pattern is something that happens the same way every time. The sun rising every morning is a pattern. The seasons changing every year is a pattern. Nature is FULL of patterns. Scientists love patterns!` },
            { word: `predictable`, definition: `Easy to guess what will happen.`,
              audioPrompt: `Predictable means easy to guess what will happen. Earth's movements are predictable. We know the sun will rise tomorrow. We know summer will come again. The most reliable patterns in life!` },
            { word: `calendar`,    definition: `A tool for tracking days, weeks, months, and years.`,
              audioPrompt: `A calendar is a tool for keeping track of days, weeks, months, and years. Calendars are built around Earth's patterns. One year = one trip around the sun. One day = one spin of Earth!` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Earth SPINS Like a Top`,
          paragraphs: [
            `Here's the BIG SECRET — Earth is SPINNING! Right now! All the time!`,
            `Earth spins like a giant top! It spins on an imaginary line called its AXIS that goes through the North Pole and South Pole! One full spin takes 24 HOURS — that's why a day is 24 hours long! The Earth's spin is FAST — about 1,000 miles per hour at the equator! But because Earth is so big and the spin is smooth, we don't feel it! (If you spin in a circle on the ground, you'd notice — but Earth's spin is too steady to feel!)`,
          ],
          image: `/explorer-assets/science/l10-s2-earth-spins.webp`,
          imageCaption: `Earth spins like a top! Once every 24 hours!`,
          vocab: [
            { word: `spin`,     definition: `To turn around and around.`,
              audioPrompt: `To spin is to turn around and around. Earth spins. It's been spinning for billions of years. One full spin takes 24 hours. That spin creates DAY and NIGHT. Right now, somewhere on Earth is in day. Somewhere is in night!` },
            { word: `axis`,     definition: `The imaginary line Earth spins around.`,
              audioPrompt: `The axis is the imaginary line Earth spins around. It goes through the North Pole at the top and the South Pole at the bottom. The axis points the same direction always, even as Earth orbits the sun!` },
            { word: `24 hours`, definition: `How long Earth takes to spin once.`,
              audioPrompt: `24 hours is how long Earth takes to spin once. That's why one day is 24 hours long. Not because someone decided — because Earth's spin takes that long. Other planets have different day-lengths!` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why We Have DAY and NIGHT`,
          paragraphs: [
            `Here's the cool part — Earth's SPIN is why we have DAY and NIGHT!`,
            `The sun only lights up HALF of Earth at any moment — the half facing it! The other half is in shadow! As Earth spins, your side rotates AWAY from the sun and INTO shadow — that's SUNSET! You're now in night! Eventually you spin back TOWARD the sun — that's SUNRISE! You're back in day! The sun doesn't really "rise" or "set" — Earth's spin makes it LOOK that way! It's actually YOU moving past the sun!`,
          ],
          image: `/explorer-assets/science/l10-s3-day-night.webp`,
          imageCaption: `Earth spins → day → spin away → night → back again! Sun doesn't move. You do!`,
          vocab: [
            { word: `day and night`, definition: `Created by Earth's spin.`,
              audioPrompt: `Day and night are created by Earth's spin. The side facing the sun is in DAY. The side facing away is in NIGHT. As Earth spins, every place on Earth gets both day and night every 24 hours!` },
            { word: `sunrise`,       definition: `When your side spins toward the sun.`,
              audioPrompt: `Sunrise is when your side of Earth spins toward the sun. The sun appears at the horizon. But the sun isn't actually MOVING up. EARTH is rotating you toward the sun. It just LOOKS like the sun is rising!` },
            { word: `sunset`,        definition: `When your side spins away from the sun.`,
              audioPrompt: `Sunset is when your side of Earth spins away from the sun. The sun appears to sink below the horizon. But again — the sun isn't moving. You are. Earth is rotating you away from the sun!` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Earth ORBITS the Sun`,
          paragraphs: [
            `While Earth is spinning, it's ALSO doing something else — TRAVELING around the SUN!`,
            `Earth travels in a big OVAL path around the sun! This path is called an ORBIT! One full orbit takes ONE YEAR (365 days)! That's why a year is a year — it's the time it takes Earth to go all the way around the sun! Earth is going FAST in its orbit — about 67,000 miles per hour! But space is huge, so it still takes 365 days! Earth is both SPINNING and TRAVELING — all at the same time!`,
          ],
          image: `/explorer-assets/science/l10-s4-earth-orbits.webp`,
          imageCaption: `Earth orbits the sun. One trip = 365 days = one year!`,
          vocab: [
            { word: `orbit`,        definition: `A path one object takes around another.`,
              audioPrompt: `An orbit is a path one object takes around another. Earth's orbit is its yearly path around the sun. The orbit is OVAL-shaped. The moon orbits Earth. Earth orbits the sun. Lots of orbiting in space!` },
            { word: `year`,         definition: `One full trip Earth takes around the sun.`,
              audioPrompt: `A year is one full trip Earth takes around the sun. It's 365 days long. Every birthday, you're celebrating having gone around the sun one more time! By age 8, you've traveled around the sun 8 times!` },
            { word: `solar system`, definition: `The sun and all the planets orbiting it.`,
              audioPrompt: `The solar system is the sun and all the planets orbiting it. Eight planets — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Plus moons and asteroids. We live in this solar system!` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Earth is TILTED`,
          paragraphs: [
            `Now here's the key to SEASONS — Earth doesn't stand up straight! Earth is TILTED!`,
            `Earth's axis is tilted at about 23 degrees! Imagine you tilted slightly to one side — that's Earth! This TILT stays the same direction as Earth orbits the sun! So at different parts of the orbit, different halves of Earth lean TOWARD the sun or AWAY from it! The half tilted TOWARD the sun gets MORE direct sunlight = SUMMER! The half tilted AWAY gets LESS direct sunlight = WINTER!`,
          ],
          image: `/explorer-assets/science/l10-s5-tilted-earth.webp`,
          imageCaption: `Earth is TILTED. Tilt stays the same → SEASONS!`,
          vocab: [
            { word: `tilted`,        definition: `Leaning to one side.`,
              audioPrompt: `Tilted means leaning to one side. Earth is tilted at about 23 degrees. It's not straight up. This tilt is the secret behind seasons. The tilt doesn't change as Earth orbits — it stays pointed the same direction!` },
            { word: `seasons`,       definition: `The four times of year.`,
              audioPrompt: `Seasons are the four times of year — spring, summer, fall, winter. They're caused by Earth's TILT as it orbits the sun. Not by Earth being closer or farther from the sun (that's a myth!). It's the TILT!` },
            { word: `summer-winter`, definition: `Summer = tilted toward sun. Winter = tilted away.`,
              audioPrompt: `Summer happens when your part of Earth is tilted TOWARD the sun. More direct sunlight = warmer days. Winter happens when tilted AWAY from the sun. Less direct sunlight = colder days. Same distance — different tilt!` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The FOUR Seasons`,
          paragraphs: [
            `Earth's tilt creates FOUR SEASONS that cycle through every year!`,
            `SPRING — the weather warms up! Plants wake up! Flowers bloom! Baby animals are born! SUMMER — hottest! Days are longest! Plants grow tall! Beach days! FALL (or AUTUMN) — cools down! Leaves turn red, orange, yellow! Plants prepare for winter! WINTER — coldest! Days are shortest! Some animals hibernate! Plants rest! Then SPRING comes again! The four seasons are nature's CALENDAR!`,
          ],
          image: `/explorer-assets/science/l10-s6-four-seasons.webp`,
          imageCaption: `Spring → Summer → Fall → Winter → Spring. Forever!`,
          vocab: [
            { word: `spring`,      definition: `The season when weather warms up.`,
              audioPrompt: `Spring is the season when weather warms up and plants wake up. After cold winter, days start getting warmer and longer. Flowers bloom. Trees grow leaves again. Baby animals are born. Spring feels like life returning!` },
            { word: `summer`,      definition: `The hottest season.`,
              audioPrompt: `Summer is the hottest season. Days are longest — the sun is up for many hours. Plants grow tall and green. People go to beaches and pools. Summer feels free and warm. In many places, June, July, August!` },
            { word: `fall winter`, definition: `Fall = leaves change. Winter = coldest, shortest days.`,
              audioPrompt: `Fall (also called autumn) is when leaves change color and fall off trees. Days get shorter. Then winter — the coldest season. Shortest days. Some animals hibernate. After winter, spring comes again!` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sky phenomena. Drag each one — is it caused by Earth's SPIN (day/night!), Earth's TILT (seasons!), or Earth's ORBIT (year/solar system!)?`,
          buckets: [
            { id: `day_night`,    label: `🌞 DAY/NIGHT (spin)`,  color: `#FBBF24` },
            { id: `seasons`,      label: `🍂 SEASONS (tilt)`,    color: `#F59E0B` },
            { id: `solar_system`, label: `🌌 SOLAR SYSTEM (orbit)`, color: `#6366F1` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `The sun rises in the morning and sets at night`,
              matchPhrase: `Yes! DAY/NIGHT from Earth's SPIN! Earth spins once every 24 hours = one full day!`,
              correctMatch: `day_night` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `Summer is warm and winter is cold every year`,
              matchPhrase: `Right! SEASONS from Earth's TILT! Tilted toward sun = summer. Tilted away = winter!`,
              correctMatch: `seasons` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `Earth travels around the sun once every 365 days`,
              matchPhrase: `Yes! SOLAR SYSTEM from Earth's ORBIT! 365 days = one year = one full trip around sun!`,
              correctMatch: `solar_system` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `Trees grow leaves in spring and lose them in fall`,
              matchPhrase: `Right! SEASONS from Earth's TILT! Spring warms = leaves grow. Fall cools = leaves drop!`,
              correctMatch: `seasons` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `Why do we have DAY and NIGHT?`,
              options: [`The sun goes on and off`, `Earth SPINS on its axis — one side faces the sun, the other faces away`, `The clouds cover the sun`, `Aliens turn off the sun`],
              correctIndex: 1,
              explanation: `Earth spins! One full spin takes 24 hours. The side facing the sun = DAY. Facing away = NIGHT!` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `How LONG does it take Earth to spin ONCE?`,
              options: [`A few seconds`, `24 hours = ONE DAY`, `A whole week`, `A year`],
              correctIndex: 1,
              explanation: `24 hours! Earth spins at about 1,000 miles per hour, but it's so big one spin takes a whole day!` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `Earth ORBITS the SUN. How long does ONE TRIP take?`,
              options: [`One day`, `One YEAR = 365 days`, `One hour`, `Forever`],
              correctIndex: 1,
              explanation: `One year! That's the definition of a year — how long Earth takes to travel around the sun!` },
            { id: `l10-q4`, format: `true-false`,
              question: `Earth is TILTED — and that's what causes the SEASONS as Earth orbits the sun.`,
              correctAnswer: true,
              explanation: `True! Earth's 23-degree tilt is the secret behind seasons. Tilted toward sun = summer!` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `The four seasons are spring, summer, fall, and ___.`,
              options: [`winter`, `friend`, `chocolate`, `pancake`],
              correctIndex: 0,
              explanation: `Winter! Spring, summer, fall, winter — the four seasons that cycle every year!` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `When it's SUMMER where you live, what's happening on the OTHER side of Earth?`,
              options: [`It's also summer`, `It's WINTER — they're tilted away from the sun`, `Everything stops`, `It's spring`],
              correctIndex: 1,
              explanation: `Winter! When one half of Earth tilts TOWARD the sun (summer), the other half tilts AWAY (winter)!` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Different cultures all over the world have celebrated Earth's PATTERNS for thousands of years! STONEHENGE in England was built to mark sunrises on special days! The MAYAN civilizations built pyramids that lined up with sunsets on equinoxes! Many cultures celebrate SOLSTICES! Lunar New Year, Easter, Diwali — all based on Earth and moon patterns! Humans have been astronomers for thousands of years — long before telescopes existed!`,
          familyAdventure: `Track SUNSETS for ONE WEEK together! Each evening, write down what TIME the sun sets! (Look online or check a weather app!) Notice — does sunset get EARLIER or LATER each day? In summer, sunsets get later. In winter, earlier! After a week, you'll see the pattern! That's Earth's tilt at work!`,
          creativePrompt: `Draw the FOUR SEASONS in four boxes! SPRING (flowers blooming)! SUMMER (hot sun)! FALL (orange leaves)! WINTER (snow)! For each season, draw yourself doing something you'd do in that weather! For a 3-sentence floor: write 3 sentences about your favorite season. For a 5-sentence stretch: write a sentence about something you'd do in each of the 4 seasons + 1 sentence about which is your favorite and why!`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now know WHY day and night happen — Earth SPINS! You know WHY seasons happen — Earth is TILTED as it orbits the sun! The sun doesn't really move. Earth does! The seasons aren't from Earth being closer or farther — they're from the tilt! You're starting to think like a real astronomer! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L10] Loaded: "Day, Night, and Seasons" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
