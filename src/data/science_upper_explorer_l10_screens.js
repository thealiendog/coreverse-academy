// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L10 — Day, Night, and Seasons
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-ESS1-2 — Patterns of daily changes in length and
//            direction of shadows, day and night, seasons
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — Earth's rotation creates day/night, Earth's tilt
//        creates seasons, opposite hemispheres have opposite seasons,
//        special phenomena (solstices, equinoxes, polar day/night)
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-10`,
      title: `Day, Night, and Seasons`,
      duration: 18,
      xpReward: 75,
      badge: `cycle-explorer`,
      badgeName: `Cycle Explorer`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we looked at weather. Today we cover the two patterns underneath ALL weather. Why does the Sun rise and set? Why is summer hot and winter cold? Both answers involve EARTH MOVING. Earth spins on its axis. Earth orbits the Sun. Earth's axis is tilted. Combine those three things and you get day, night, seasons, and even the strange weeks of total darkness or sunlight near the poles. By the end of today, you'll understand the dance our planet does every single day. Let's go.`,
          headline: `Day, Night, and Seasons`,
          subtitle: `Why the sun rises and sets, and why we have summer and winter`,
          visual: `/ue-assets/science/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why We Have Day and Night`,
          paragraphs: [
            `Earth ROTATES on its axis, which is an imaginary line running from the North Pole through the center of the planet to the South Pole. One full rotation takes about 24 HOURS. The side of Earth facing the Sun gets DAYLIGHT. The side facing away from the Sun is in DARKNESS, which we call night. As Earth keeps rotating, the side that was in darkness gradually turns toward the Sun. Sunrise happens. Daylight returns. After about 12 hours of light, that side rotates away from the Sun again. Sunset happens. The cycle repeats every single day.`,
            `It's worth pausing on a really important point. The Sun doesn't actually "rise" or "set." The SUN IS NEARLY STILL (it does move very slowly, but for our purposes here, treat it as still). EARTH IS WHAT MOVES. People used to think the Sun moved around Earth because that's what it looks like from our point of view. But it's actually US doing the moving. Standing on a fast-spinning Earth, the Sun appears to move across the sky. That's a kind of illusion created by our own motion. Recognizing this was one of the biggest discoveries in the history of science.`,
          ],
          image: `/ue-assets/science/l10-s1-rotation.webp`,
          imageCaption: `Earth rotates. One side faces the Sun, the other is in shadow. That's day and night.`,
          vocab: [
            { word: `rotation`,
              definition: `When something spins on its own axis. Earth rotates once every 24 hours, which is what causes day and night.`,
              audioPrompt: `Rotation is when something spins on its own axis, {name}. Earth rotates once every 24 hours. As Earth spins, the side facing the Sun gets daylight. The side facing away from the Sun is in darkness. Then Earth keeps spinning, and the daylight side rotates away while the dark side rotates toward the Sun. This is why the Sun appears to rise in the east and set in the west, even though it's actually Earth that's moving. Rotation is the source of day and night.` },
            { word: `hemisphere`,
              definition: `Half of a sphere. Earth has a Northern Hemisphere and a Southern Hemisphere, divided by the equator. The two hemispheres always have opposite seasons.`,
              audioPrompt: `A hemisphere is half of a sphere, {name}. Earth has a Northern Hemisphere and a Southern Hemisphere, divided by an imaginary line called the equator. The Northern Hemisphere includes places like the United States, Europe, and Asia. The Southern Hemisphere includes Australia, South America, and Antarctica. When Earth's axis tilts the Northern Hemisphere toward the Sun, the northern half has summer. The Southern Hemisphere tilts away at the same time and has winter. The two hemispheres always experience opposite seasons.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why We Have Seasons (It's About the Tilt)`,
          paragraphs: [
            `Earth ALSO orbits the Sun. One full ORBIT takes about 365 days, which is one YEAR. But here's the key thing many people get wrong. Earth's seasons are NOT caused by distance from the Sun. Earth's orbit is nearly circular. The distance changes very little. What ACTUALLY causes seasons is that Earth's AXIS is TILTED by about 23.5 degrees. The tilt stays in the same direction as Earth orbits the Sun.`,
            `Here's how the tilt creates seasons. When Earth is on one side of its orbit, the NORTHERN HEMISPHERE is tilted TOWARD the Sun. Sunlight hits the northern half more directly, and days are longer. That's SUMMER in places like the U.S., Canada, and Europe. Six months later, Earth is on the opposite side of its orbit. The same tilt now points the NORTHERN HEMISPHERE AWAY from the Sun. Sunlight hits less directly, and days are shorter. That's WINTER in those same places. The Southern Hemisphere experiences the opposite. When it's summer in the U.S., it's winter in Australia. When you're throwing snowballs in December, kids in Argentina are at the beach.`,
          ],
          image: `/ue-assets/science/l10-s2-tilt.webp`,
          imageCaption: `Earth tilts at about 23.5°. This single tilt creates all the seasons.`,
          vocab: [
            { word: `axis`,
              definition: `An imaginary line that runs through the North Pole, the center of Earth, and the South Pole. Earth rotates around this line and the axis is tilted about 23.5 degrees.`,
              audioPrompt: `An axis is an imaginary line through the middle of something that it rotates around, {name}. Earth's axis runs from the North Pole through the center of the planet to the South Pole. Earth rotates around this line, which causes day and night. The axis is tilted by about 23.5 degrees, instead of pointing straight up and down compared to Earth's orbit. This tilt is what causes seasons. Without it, every place on Earth would have roughly the same weather all year.` },
            { word: `tilt`,
              definition: `Earth's 23.5-degree lean from straight up-and-down. The tilt stays in the same direction during the orbit, which is what causes seasons.`,
              audioPrompt: `Earth's tilt is the 23.5-degree angle at which Earth's axis leans, {name}. Instead of pointing straight up and down, Earth leans to one side. This tilt stays in the same direction as Earth orbits the Sun. When the Northern Hemisphere tilts toward the Sun, it gets more direct sunlight and has summer. When it tilts away, it gets less sunlight and has winter. Without Earth's tilt, every place would have the same amount of sunlight all year and there would be no seasons.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Solstices, Equinoxes, and Special Days`,
          paragraphs: [
            `Four days each year mark the changing seasons. The SUMMER SOLSTICE (around June 21 in the Northern Hemisphere) is the longest day of the year, with the most hours of daylight. The WINTER SOLSTICE (around December 21 in the North) is the shortest. The SPRING EQUINOX (around March 21) and the FALL EQUINOX (around September 21) are the two days when day and night are almost exactly equal in length. After the spring equinox, days keep getting longer until the summer solstice. After the fall equinox, days keep getting shorter until winter solstice. Then the cycle reverses.`,
            `Near the POLES, the tilt creates strange phenomena. During summer in the Arctic, the Sun can stay above the horizon for WEEKS WITHOUT SETTING. During winter, it can stay below the horizon for weeks without rising. This is called the MIDNIGHT SUN and POLAR NIGHT. People living in places like Alaska, northern Norway, and northern Russia experience this every year. It's one of Earth's most surprising features, and it all comes from the same 23.5-degree tilt.`,
          ],
          image: `/ue-assets/science/l10-s3-solstices.webp`,
          imageCaption: `Solstices: longest and shortest days. Equinoxes: day and night equal. Midnight sun: weeks of light.`,
          vocab: [
            { word: `orbit`,
              definition: `The path one object takes around another, like Earth's path around the Sun. Earth's orbit around the Sun takes about 365 days, which is one year.`,
              audioPrompt: `An orbit is the path one object takes around another, {name}. Earth orbits the Sun. The Moon orbits Earth. Earth's orbit around the Sun takes about 365 days, which is one year. Earth's orbit is nearly circular, so the distance from Earth to the Sun doesn't change much. People sometimes think seasons are caused by Earth being closer or farther from the Sun. That's not what causes seasons. Earth's tilted axis is. The tilt makes sunlight hit each hemisphere more directly at some points in the orbit than others.` },
            { word: `equinox`,
              definition: `One of two days each year when day and night are almost exactly equal in length. The spring equinox is around March 21; the fall equinox around September 21.`,
              audioPrompt: `An equinox is one of two days each year when day and night are almost exactly equal in length, {name}. The spring equinox happens around March 21 in the Northern Hemisphere. The fall equinox happens around September 21. At the equinox, Earth's tilt is not pointed toward or away from the Sun, so both hemispheres receive roughly equal sunlight. After the spring equinox, days keep getting longer until the summer solstice. After the fall equinox, days keep getting shorter until the winter solstice.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Matters`,
          paragraphs: [
            `The patterns of day, night, and seasons shape almost everything on Earth. PLANTS use sunlight for photosynthesis, so they grow more in summer and slow down in winter. ANIMALS adapt with migration (birds flying south), hibernation (bears sleeping), or thicker fur (otters' winter coats). HUMAN CIVILIZATIONS built calendars around these patterns. Almost every culture in history tracked the solstices and equinoxes. Many ancient monuments, including Stonehenge in England, were designed to mark them. Farmers depend on seasonal patterns to plant and harvest.`,
            `Modern life has DISCONNECTED some people from these natural cycles. Electric lights mean we can stay up long past sunset. Heated and cooled houses mean we don't have to face the seasons. Greenhouses and global shipping mean fresh fruit is available all year. Even with all that, our bodies still respond to daylight. Most people sleep better when their schedule matches the Sun. Many feel different in winter than in summer. Understanding why these cycles happen helps you make sense of your own body and the world around you.`,
          ],
          image: `/ue-assets/science/l10-s4-impact.webp`,
          imageCaption: `Plants, animals, human cultures. All shaped by the daily and yearly cycles.`,
          vocab: [
            { word: `solstice`,
              definition: `The two days each year when one hemisphere has its longest or shortest day. Summer solstice is the longest day; winter solstice is the shortest.`,
              audioPrompt: `A solstice is one of two days each year when a hemisphere has its longest or shortest day, {name}. The summer solstice (around June 21 in the Northern Hemisphere) is the day with the most hours of daylight. The winter solstice (around December 21 in the North) is the day with the fewest hours of daylight. These happen because Earth's tilt is at its maximum effect on each hemisphere. After the summer solstice, days start getting shorter again. After the winter solstice, days start getting longer again.` },
            { word: `migration`,
              definition: `When animals move from one place to another in response to seasonal changes. Birds fly south in autumn; many other animals travel long distances to follow food or warmth.`,
              audioPrompt: `Migration is when animals move from one place to another in response to seasonal changes, {name}. Many birds migrate south in autumn to escape cold winters and return north in spring to breed. Monarch butterflies travel thousands of miles to warmer climates each fall. Whales, salmon, wildebeest, and many other animals also migrate with the seasons. Migration is driven by changes in temperature, food availability, and daylight length. It is one of the most dramatic ways that Earth's seasonal cycles shape animal behavior.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenarios about Earth's motion. For each one, identify what's happening: ROTATION (Earth spinning, causes day/night), TILT (Earth's axis tilt, causes seasons), or ORBIT (Earth circling the Sun, takes one year)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `rotation`,  label: `Rotation`,  color: `#FBBF24`, description: `Earth spinning on its axis. Takes 24 hours. Causes day and night.` },
            { id: `tilt`,      label: `Tilt`,      color: `#A78BFA`, description: `Earth's 23.5° axis tilt. Stays in the same direction during the orbit. Causes seasons.` },
            { id: `orbit`,     label: `Orbit`,     color: `#34D399`, description: `Earth's path around the Sun. Takes about 365 days, which is one year.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `It's 7 AM and the Sun is rising above the eastern horizon.` },
                { text: `By noon, the Sun will be high in the sky.` },
                { text: `By 7 PM, the Sun will be setting in the west.` },
              ],
              correctAnswer: `rotation`,
              realWorldExample: `Every day on Earth follows this pattern.`,
              explanation: `Sun appearing to rise, cross the sky, and set in 12 hours. This is caused by Earth's daily rotation. We're spinning, and the Sun appears to move because of our motion.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `It's December in New York City — cold, with short days.` },
                { text: `It's December in Sydney, Australia — warm, with long days.` },
                { text: `Both cities are experiencing opposite seasons at the same time.` },
              ],
              correctAnswer: `tilt`,
              realWorldExample: `December in the Northern vs Southern Hemisphere.`,
              explanation: `Opposite seasons in opposite hemispheres at the same time. This is caused by Earth's tilt. Whichever hemisphere is tilted toward the Sun has summer. The other has winter. Earth's distance from the Sun is the same for both.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `Earth is currently moving through space at about 67,000 miles per hour.` },
                { text: `It's traveling on a nearly circular path around the Sun.` },
                { text: `It will complete one full trip in 365 days.` },
              ],
              correctAnswer: `orbit`,
              realWorldExample: `Earth's journey around the Sun is constant.`,
              explanation: `Earth moving around the Sun in 365 days. Pure orbit. This is what gives us our year. Earth is constantly traveling. We don't feel it because we're moving with the planet.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `In Northern Norway, the Sun is currently above the horizon all 24 hours of the day.` },
                { text: `It's June, near the summer solstice.` },
                { text: `Six months from now, the Sun won't rise at all for several weeks.` },
              ],
              correctAnswer: `tilt`,
              realWorldExample: `Midnight sun in the Arctic in summer; polar night in winter.`,
              explanation: `Tricky because it FEELS rotation-related (Sun above the horizon all day). But the actual cause is TILT. When the Northern Hemisphere is tilted toward the Sun (June), the Arctic Circle gets so much sunlight angle that the Sun doesn't dip below the horizon. The same tilt causes the opposite in December. Lesson: extreme polar phenomena come from tilt, even though they affect day/night. Tilt is the underlying cause; rotation is happening on top of it.`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What causes DAY AND NIGHT?`,
              options: [
                `The Sun moves`,
                `Earth rotates on its axis once every 24 hours, so different sides face the Sun at different times`,
                `Clouds`,
                `Distance from the Sun`,
              ],
              correctIndex: 1,
              explanation: `Earth rotates on its axis every 24 hours. The side facing the Sun has day. The side facing away has night. As Earth spins, the cycle repeats. The Sun appears to move because we're the ones moving.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `What ACTUALLY causes SEASONS?`,
              options: [
                `Earth getting closer to and farther from the Sun`,
                `Earth's axis is tilted by about 23.5°, so each hemisphere gets more direct sunlight at different points in the year`,
                `Random weather`,
                `The Moon`,
              ],
              correctIndex: 1,
              explanation: `Seasons are caused by Earth's tilt, NOT by distance from the Sun. The tilt is about 23.5°. When a hemisphere is tilted toward the Sun, that part gets more direct sunlight and has summer. When tilted away, it gets less and has winter.` },

            { id: `l10-q3`, format: `multiple-choice`,
              question: `How long does Earth take to complete one ORBIT around the Sun?`,
              options: [
                `24 hours`,
                `About 365 days (one year)`,
                `One month`,
                `Ten years`,
              ],
              correctIndex: 1,
              explanation: `One full orbit around the Sun takes about 365 days, which we call a year. This is different from rotation, which takes only 24 hours.` },

            { id: `l10-q4`, format: `multiple-choice`,
              question: `When it's SUMMER in the United States, what season is it in AUSTRALIA?`,
              options: [
                `Also summer`,
                `Winter — the Southern Hemisphere has the opposite seasons from the Northern Hemisphere`,
                `Spring`,
                `Fall`,
              ],
              correctIndex: 1,
              explanation: `When the Northern Hemisphere is tilted toward the Sun (summer in U.S.), the Southern Hemisphere is tilted away (winter in Australia). The hemispheres always have opposite seasons at the same time.` },

            { id: `l10-q5`, format: `true-false`,
              question: `True or false: The Sun moves around Earth.`,
              correctAnswer: false,
              explanation: `False. Earth rotates on its axis. The Sun appears to move across the sky because we're moving, not because the Sun is. People used to believe the Sun moved around Earth. The truth is the opposite. Earth orbits the Sun (and spins as it goes).` },

            { id: `l10-q6`, format: `multiple-choice`,
              question: `What is a SOLSTICE?`,
              options: [
                `Any holiday`,
                `One of two days each year when a hemisphere has its longest or shortest day`,
                `When Earth crosses the equator`,
                `When the Moon is full`,
              ],
              correctIndex: 1,
              explanation: `The summer solstice is the longest day of the year. The winter solstice is the shortest. They mark the extremes of how strongly Earth's tilt affects sunlight on each hemisphere. Many cultures have celebrated solstices for thousands of years.` },

            { id: `l10-q7`, format: `multiple-choice`,
              question: `Why does the MIDNIGHT SUN happen in places like northern Norway?`,
              options: [
                `Strange weather`,
                `Because Earth's tilt is so extreme that during summer, the Sun doesn't dip below the horizon for weeks at a time`,
                `Aliens`,
                `It's not real`,
              ],
              correctIndex: 1,
              explanation: `Near the poles, Earth's tilt creates such a strong sunlight angle that during summer, the Sun stays above the horizon for weeks. In winter, the opposite — it stays below for weeks. This happens in northern Norway, Alaska, and other Arctic places.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `Why does it matter to understand DAY/NIGHT and SEASONS?`,
              options: [
                `It doesn't`,
                `Because these patterns shape plant growth, animal behavior, human culture, agriculture, and even our own bodies' rhythms`,
                `Only for astronomers`,
                `Just for school tests`,
              ],
              correctIndex: 1,
              explanation: `Almost every aspect of life on Earth is shaped by these patterns. Plants grow with sunlight. Animals migrate or hibernate with seasons. Humans built calendars and festivals around them. Even our bodies have rhythms that respond to daylight. Understanding the patterns helps you understand life on Earth.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Most cultures have a festival around the winter solstice. What does YOUR family do around then? How might that tradition connect to the longest night of the year?` },
            { id: `r2`, text: `Which season do you like most, and why? What changes in YOUR body or mood with the seasons?` },
            { id: `r3`, text: `Imagine living somewhere with the midnight sun for weeks in summer and total darkness for weeks in winter. What would be wonderful? What would be hard?` },
            { id: `r4`, text: `For most of human history, people went to bed when it got dark and woke up when it got light. Today many people stay up much later. Is that better or worse, do you think?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Understanding Earth's motion underlies all kinds of real-world activities. Farmers plant according to the seasons. Pilots navigate using Earth's rotation. Astronomers calculate when planets will be visible. Even your sleep cycle is tuned to daylight patterns. Many people who travel between hemispheres experience the strangeness of arriving in opposite weather (December skiing in the U.S., then arriving in Australian summer). Earth's tilted, spinning, orbiting motion creates the rhythms your life runs on.`,
          familyAdventure: `Family Shadow Experiment. On a sunny day, find a vertical object (a stick, a tall plant) outside. At 9 AM, mark its shadow with a stone. Do the same at noon and 3 PM. Notice how the shadow changes direction and length throughout the day. This is direct evidence of Earth rotating. The stick didn't move. You didn't move. The Earth moved you, and the shadow shows it.`,
          creativePrompt: {
            intro: `Imagine you've been hired by a future generation to explain WHY we have seasons. They're confused. Write your explanation.`,
            floor: `Write at least 5 sentences. Cover Earth's tilt, orbit, and what happens to each hemisphere through the year.`,
            stretch: `Write 8 to 10 sentences. Include rotation, orbit, tilt, why hemispheres have opposite seasons, and at least one example like the midnight sun.`,
            open: `Write as much as you want. Build a full lesson with diagrams (described in words). Include the common mistake (distance from Sun causes seasons) and why it's wrong. Then explain what really causes seasons in detail.`,
            frames: [
              `To understand seasons, you need to know three things about Earth.`,
              `First, Earth rotates ___.`,
              `Second, Earth orbits ___.`,
              `Third, Earth's axis is ___, and this is the key.`,
              `When one hemisphere tilts toward the Sun, ___, which is summer there. The other hemisphere ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain why we have day and night, what really causes the seasons, why opposite hemispheres have opposite seasons, and what solstices and equinoxes are. Next lesson: we shift from huge Earth-scale science to the tiniest scale. MATTER, and what everything in the universe is actually made of. See you there. — Cosmo.`,
          badge: `cycle-explorer`,
          badgeName: `Cycle Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L10.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L10 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
