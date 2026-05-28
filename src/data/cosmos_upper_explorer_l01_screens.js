// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L01 — The Scale of the Universe: How Big Is It Really?
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS 5-ESS1-1, MS-ESS1 — Earth's place in the universe;
//            scale, proportion, and quantity (cross-cutting concept)
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — Earth in context, the solar system and light-years,
//        the galaxy and beyond, what cosmic scale means for us
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-01`,
      title: `The Scale of the Universe: How Big Is It Really?`,
      duration: 18,
      xpReward: 75,
      badge: `scale-explorer`,
      badgeName: `Scale Explorer`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hello {name}. I'm Nova. I'm an owl, and owls are built for seeing in the dark and noticing patterns others miss. Together, we're going to explore the most profound ideas about the universe and your place in it. Today we begin with something that has stunned every human who truly understood it: the SCALE of the universe. How big is it, really? The honest answer is bigger than your brain is built to imagine. But by the end of today, you'll have a sense of it, and it may change how you see everything. Let's begin.`,
          headline: `The Scale of the Universe`,
          subtitle: `How big is it really? Bigger than your mind is built to imagine.`,
          visual: `/ue-assets/cosmos/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Earth Is Not the Center`,
          paragraphs: [
            `For most of human history, people believed Earth was the CENTER of everything, with the Sun, Moon, and stars circling around us. It's an easy mistake. From where we stand, that's exactly what it looks like. But it's wrong. Earth is one planet orbiting one ordinary star, in one ordinary galaxy, in a universe so vast that Earth is less than a speck within it. This realization, built up over centuries of careful observation, is one of the most important in all of science.`,
            `Here's a way to begin feeling the scale. If the Sun were the size of a basketball, Earth would be a tiny peppercorn about 26 meters away (about the length of a basketball court). And on that peppercorn live all 8 billion humans, every animal, every ocean, every mountain, every story ever told. Everything you've ever known happens on that speck. This isn't meant to make you feel small in a bad way. It's meant to wake you up to how astonishing it is that you're here at all, aware enough to even ask how big the universe is.`,
          ],
          image: `/ue-assets/cosmos/l01-s1-not-center.webp`,
          imageCaption: `Earth: one peppercorn orbiting a basketball-sized Sun. And it holds everything we know.`,
          vocab: [
            { word: `astronomy`,
              definition: `The scientific study of everything beyond Earth: stars, planets, galaxies, and the universe itself. One of the oldest sciences, practiced by cultures all over the world for thousands of years.`,
              audioPrompt: `Astronomy is the scientific study of everything beyond Earth, {name}. Stars, planets, moons, galaxies, and the universe itself. It's one of the oldest sciences. People have studied the night sky for thousands of years. For most of history, people believed Earth was the center of everything. Careful observation over centuries proved this wrong. Earth is one planet orbiting one ordinary star, in one ordinary galaxy, in a universe so vast we're still measuring it. Astronomy is how we discovered our true place in the cosmos.` },
            { word: `solar system`,
              definition: `The Sun and everything that orbits it: eight planets, dozens of moons, and countless asteroids and comets. Earth is the third planet from the Sun.`,
              audioPrompt: `The solar system is the Sun and everything that orbits it, {name}. That includes eight planets, dozens of moons, and countless asteroids and comets. Earth is the third planet from the Sun. If the Sun were the size of a basketball, Earth would be a peppercorn about 26 meters away. Everything you've ever known, every person, every ocean, every story, lives on that peppercorn. Our solar system sits in one arm of the Milky Way galaxy, far from its center.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Solar System and the Speed of Light`,
          paragraphs: [
            `Our SOLAR SYSTEM is the Sun and everything that orbits it: eight planets, dozens of moons, and countless asteroids and comets. It feels huge, and it is. Light, the fastest thing in the universe, travels about 300,000 kilometers PER SECOND. Light from the Sun takes about 8 minutes to reach Earth. So when you look at the Sun, you're seeing it as it was 8 minutes ago. Light from the Sun takes over 5 HOURS to reach Pluto at the edge of our solar system.`,
            `Because space is so vast, scientists measure distances using the LIGHT-YEAR: the distance light travels in one year. That's about 9.5 TRILLION kilometers. The light-year is a distance, not a time, even though it has "year" in the name. Here's the mind-bending part: the nearest star to our Sun, Proxima Centauri, is about 4.2 light-years away. That means the light you see from it left over 4 years ago. You're not seeing the star as it is now. You're seeing the PAST. The farther you look into space, the further back in time you see. Telescopes are time machines.`,
          ],
          image: `/ue-assets/cosmos/l01-s2-light-year.webp`,
          imageCaption: `Light travels 9.5 trillion km in a year. Looking into space means looking into the past.`,
          vocab: [
            { word: `light-year`,
              definition: `The distance light travels in one year: about 9.5 trillion kilometers. It's a measure of distance, not time, used because space is too vast for ordinary units like kilometers.`,
              audioPrompt: `A light-year is the distance light travels in one year, {name}. That's about 9.5 trillion kilometers. It's a measure of distance, not time, even though it has the word year in it. Scientists use light-years because space is too vast for ordinary units like kilometers. The nearest star to our Sun is about 4.2 light-years away. Here's the amazing part. The light you see from that star left over 4 years ago. The farther you look into space, the further back in time you see.` },
            { word: `speed of light`,
              definition: `The fastest speed anything can travel: about 300,000 kilometers per second. Light from the Sun takes 8 minutes to reach Earth. Even at this speed, the universe is vast.`,
              audioPrompt: `The speed of light is the fastest speed anything can travel in the universe, {name}. Light travels about 300,000 kilometers per second. That's so fast that light from the Sun reaches Earth in just 8 minutes. Yet even at that speed, light from the nearest star takes over 4 years to arrive. Light from distant galaxies takes billions of years. The speed of light is both incredibly fast and a reminder of just how vast the universe truly is.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Galaxy and Beyond`,
          paragraphs: [
            `Our Sun is just ONE star in a galaxy called the MILKY WAY. A galaxy is an enormous collection of stars, gas, dust, and dark matter, all held together by gravity. The Milky Way contains somewhere between 100 BILLION and 400 BILLION stars. If you tried to count them one per second, it would take you thousands of years. Our entire solar system is just a tiny dot in one arm of this vast spiral, located far from the center.`,
            `Now the truly staggering part. The Milky Way is just ONE galaxy. Telescopes have revealed that the OBSERVABLE UNIVERSE contains an estimated 2 TRILLION galaxies, each with billions or trillions of stars of their own. Let that sink in. Billions of stars in our galaxy. Trillions of galaxies in the universe. The number of stars in the observable universe is greater than the number of grains of sand on every beach on Earth. And the observable universe is only the part we can SEE. The whole universe may be far larger, possibly infinite. Nobody knows.`,
          ],
          image: `/ue-assets/cosmos/l01-s3-galaxy.webp`,
          imageCaption: `100+ billion stars in our galaxy. ~2 trillion galaxies in the universe. More stars than sand.`,
          vocab: [
            { word: `galaxy`,
              definition: `An enormous collection of stars, gas, dust, and dark matter held together by gravity. Our galaxy, the Milky Way, has 100-400 billion stars. The universe holds an estimated 2 trillion galaxies.`,
              audioPrompt: `A galaxy is an enormous collection of stars, gas, dust, and dark matter, all held together by gravity, {name}. Our galaxy is called the Milky Way. It contains somewhere between 100 billion and 400 billion stars. Our Sun is just one of them. The Milky Way is just one galaxy. The observable universe contains an estimated 2 trillion galaxies, each with billions or trillions of stars. The number of stars in the universe is greater than all the grains of sand on every beach on Earth.` },
            { word: `Milky Way`,
              definition: `Our home galaxy — a spiral galaxy containing 100-400 billion stars. On a dark night, you can see it as a faint band of light stretching across the sky.`,
              audioPrompt: `The Milky Way is our home galaxy, {name}. It's a spiral galaxy containing between 100 billion and 400 billion stars. On a very dark night, far from city lights, you can see a faint band stretching across the sky. That band is the disk of our own galaxy, seen from inside. Our Sun is one ordinary star in one of the spiral arms. You can actually see your own galaxy with the naked eye. That's remarkable.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Cosmic Scale Means for Us`,
          paragraphs: [
            `When people first truly grasp the scale of the universe, they often feel two things at once. First, a kind of dizziness, even a feeling of being tiny and insignificant. Earth is a speck. We are specks on a speck. But there's a second feeling that's just as true and far more interesting. Out of this unimaginably vast universe, on this one small planet, atoms came together in a way that could THINK, FEEL, WONDER, and LOOK BACK at the cosmos that made them. You are the universe becoming aware of itself.`,
            `The astronomer Carl Sagan put it beautifully: we are made of "star stuff." Almost every atom in your body, the calcium in your bones, the iron in your blood, the oxygen you breathe, was forged inside ancient stars that exploded long before the Sun was born. You are quite literally made of stardust, arranged in a pattern complex enough to read these words. Nova's first teaching: the scale of the universe doesn't make you meaningless. It makes you rare, precious, and connected to all of it. Feeling small and feeling amazed can live in the same heart at the same time. That feeling has a name: awe. Hold onto it.`,
          ],
          image: `/ue-assets/cosmos/l01-s4-star-stuff.webp`,
          imageCaption: `You are made of star stuff: atoms forged in ancient stars, now arranged to wonder.`,
          vocab: [
            { word: `observable universe`,
              definition: `The part of the universe we can actually see or detect, limited by how far light has had time to travel to us since the universe began. The whole universe may be far larger, possibly infinite.`,
              audioPrompt: `The observable universe is the part of the universe we can actually see or detect, {name}. It's limited by how far light has had time to travel to us since the universe began, about 13.8 billion years ago. Light from beyond that distance hasn't reached us yet. The observable universe contains an estimated 2 trillion galaxies. But it's only the part we can see. The whole universe may be far larger than what we can observe, possibly even infinite. Nobody knows for certain.` },
            { word: `cosmic scale`,
              definition: `The enormous sizes and distances found in the universe. On a cosmic scale, Earth is smaller than a speck. Understanding it produces awe — feeling small and amazed at the same time.`,
              audioPrompt: `Cosmic scale refers to the enormous sizes and distances found in the universe, {name}. On a cosmic scale, Earth is smaller than a speck. Our entire solar system is a tiny dot in one galaxy among trillions. Understanding cosmic scale changes how you think about yourself and about life. It can feel overwhelming at first. But it also produces awe, the feeling of being small and amazed at the same time. Awe is one of the most valuable feelings a curious mind can have.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four things in the cosmos. For each one, identify its SCALE: WITHIN OUR SOLAR SYSTEM (orbiting our Sun), WITHIN OUR GALAXY (a star or object in the Milky Way), or BEYOND OUR GALAXY (another galaxy or farther)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `solar`,    label: `Within Our Solar System`, color: `#FBBF24`, description: `Orbits our Sun. Planets, moons, asteroids, comets.` },
            { id: `galaxy`,   label: `Within Our Galaxy`,        color: `#60A5FA`, description: `A star or object inside the Milky Way, beyond our solar system.` },
            { id: `beyond`,   label: `Beyond Our Galaxy`,        color: `#A78BFA`, description: `Another galaxy or something even farther away.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Object #1: The planet Jupiter`,
              clues: [
                { text: `The largest planet, with a famous Great Red Spot storm.` },
                { text: `Light from the Sun reflects off it and reaches our eyes.` },
                { text: `It orbits the same Sun that Earth orbits.` },
              ],
              correctAnswer: `solar`,
              realWorldExample: `Jupiter is the largest planet in our solar system.`,
              explanation: `Jupiter orbits our Sun, so it's within our solar system. Pure solar system scale. Even though Jupiter is huge and far, it's still a near neighbor in cosmic terms, part of our own little Sun-centered system.`,
            },
            {
              id: `case-2`,
              caseTitle: `Object #2: Proxima Centauri, the nearest star`,
              clues: [
                { text: `The closest star to our Sun, about 4.2 light-years away.` },
                { text: `It's a small red dwarf star with its own planets.` },
                { text: `Its light takes over 4 years to reach us.` },
              ],
              correctAnswer: `galaxy`,
              realWorldExample: `Proxima Centauri is our Sun's nearest stellar neighbor.`,
              explanation: `It's another star, beyond our solar system, but still inside the Milky Way galaxy. Pure within-our-galaxy scale. Even the NEAREST star is so far that its light takes over 4 years to reach us. Space is vast even between neighbors.`,
            },
            {
              id: `case-3`,
              caseTitle: `Object #3: The Andromeda Galaxy`,
              clues: [
                { text: `A massive spiral galaxy with about a trillion stars.` },
                { text: `It's about 2.5 million light-years away from us.` },
                { text: `On a very dark night, you can just barely see it as a faint smudge.` },
              ],
              correctAnswer: `beyond`,
              realWorldExample: `Andromeda is the nearest large galaxy to the Milky Way.`,
              explanation: `Andromeda is an entirely separate galaxy, far beyond our own Milky Way. Pure beyond-our-galaxy scale. And it's the NEAREST large galaxy. The universe is full of trillions more, most far, far farther away.`,
            },
            {
              id: `case-4`,
              caseTitle: `Object #4 — The Tricky One: The light you see from Andromeda tonight`,
              clues: [
                { text: `When you look at Andromeda, you see light that left it 2.5 million years ago.` },
                { text: `That light began its journey before modern humans even existed.` },
                { text: `You are seeing the galaxy not as it is now, but as it was in the deep past.` },
              ],
              correctAnswer: `beyond`,
              realWorldExample: `Light from Andromeda is a 2.5-million-year-old time capsule.`,
              explanation: `Tricky because this is really about TIME, not just distance. The scale answer is still "beyond our galaxy" (Andromeda is another galaxy). But the deeper lesson is staggering: the light reaching your eye tonight left Andromeda 2.5 million years ago, before modern humans existed. You're not seeing it as it is now. You're seeing 2.5-million-year-old light. The farther into space you look, the further back in time you see. Telescopes are time machines. When astronomers look at the most distant galaxies, they're seeing the universe as it was billions of years ago. This is one of the most beautiful truths in all of science.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What did careful observation over centuries prove about Earth's place?`,
              options: [
                `Earth is the center of everything`,
                `Earth is one planet orbiting one ordinary star, in one ordinary galaxy, in a vast universe`,
                `Earth is the only planet`,
                `Earth is the largest object`,
              ],
              correctIndex: 1,
              explanation: `For most of history, people believed Earth was the center of everything. Careful observation proved otherwise. Earth is one planet around one ordinary star, in one ordinary galaxy, in a universe so vast that Earth is less than a speck.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What is a LIGHT-YEAR?`,
              options: [
                `A measure of time — one year of light`,
                `A measure of DISTANCE — how far light travels in one year, about 9.5 trillion km`,
                `How bright a star is`,
                `The age of a star`,
              ],
              correctIndex: 1,
              explanation: `A light-year is a measure of distance, not time, even though it has "year" in the name. It's how far light travels in a year: about 9.5 trillion kilometers. Scientists use it because space is too vast for ordinary units.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `When you look at a star 4 light-years away, what are you actually seeing?`,
              options: [
                `The star exactly as it is right now`,
                `The star as it was over 4 years ago, because its light took that long to reach you`,
                `A reflection`,
                `A picture`,
              ],
              correctIndex: 1,
              explanation: `You're seeing the past. The light took over 4 years to travel to your eyes, so you see the star as it was 4 years ago, not as it is now. The farther you look into space, the further back in time you see. Telescopes are time machines.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `About how many stars are in our galaxy, the MILKY WAY?`,
              options: [
                `About 100`,
                `Between 100 billion and 400 billion stars`,
                `About 1 million`,
                `Just our Sun`,
              ],
              correctIndex: 1,
              explanation: `The Milky Way contains 100-400 billion stars. Our Sun is just one of them. If you counted one per second, it would take thousands of years. And the Milky Way is just one of an estimated 2 trillion galaxies.` },

            { id: `l01-q5`, format: `true-false`,
              question: `True or false: The number of stars in the observable universe is greater than the number of grains of sand on every beach on Earth.`,
              correctAnswer: true,
              explanation: `True. With an estimated 2 trillion galaxies, each holding billions or trillions of stars, the total number of stars is genuinely greater than all the grains of sand on all of Earth's beaches. The scale is almost impossible to truly imagine.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `What is the OBSERVABLE UNIVERSE?`,
              options: [
                `The entire universe`,
                `The part of the universe we can see or detect, limited by how far light has had time to reach us`,
                `Just our galaxy`,
                `Only what telescopes point at`,
              ],
              correctIndex: 1,
              explanation: `The observable universe is the part we can detect, limited by how far light has traveled to us since the universe began 13.8 billion years ago. The whole universe may be far larger, possibly infinite. Nobody knows for sure.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `What did Carl Sagan mean by saying we are made of "star stuff"?`,
              options: [
                `We glow like stars`,
                `Almost every atom in your body was forged inside ancient stars that exploded before the Sun was born`,
                `We come from the Sun`,
                `It was just poetry, not science`,
              ],
              correctIndex: 1,
              explanation: `It's literally true. The calcium in your bones, the iron in your blood, the oxygen you breathe — these atoms were created inside ancient stars that exploded long ago. You're made of stardust, arranged in a pattern complex enough to read and wonder.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `According to Nova, what should the scale of the universe make you feel?`,
              options: [
                `Only small and meaningless`,
                `Both small AND amazed — you are rare, precious, and the universe becoming aware of itself`,
                `Bored`,
                `Afraid`,
              ],
              correctIndex: 1,
              explanation: `The scale doesn't make you meaningless. Out of this vast universe, atoms came together on one small planet in a way that can think, feel, and wonder. You are the universe becoming aware of itself. Feeling small and feeling amazed can live together. That feeling is awe.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `When you imagine the true scale of the universe (trillions of galaxies, more stars than grains of sand), how does it make you FEEL? There's no wrong answer.` },
            { id: `r2`, text: `Nova says telescopes are time machines — the farther we look, the further into the past we see. If you could see ANY moment in the universe's history, what would you want to see?` },
            { id: `r3`, text: `You are made of "star stuff" — atoms forged in ancient stars. Does knowing you're literally made of stardust change how you think about yourself at all?` },
            { id: `r4`, text: `Carl Sagan said we might be "the universe becoming aware of itself." What do you think that means? Do you agree?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `The scale of the universe isn't just an abstract fact. It shapes how scientists, philosophers, and ordinary people understand our place in existence. Astronauts who've seen Earth from space often describe a powerful shift in perspective called the "overview effect" — seeing how small, fragile, and precious our planet is, with no visible borders, just one shared home. Understanding cosmic scale tends to make people care MORE about Earth and each other, not less. When you grasp how rare a living, thinking planet might be, you treasure it more. Nova's note: the biggest perspective often leads to the deepest gratitude.`,
          familyAdventure: `Family Stargazing Night. On the next clear night, go outside as a family, away from bright lights if you can. Look up. Pick out a few stars. Remember: the light you're seeing left those stars years, decades, or centuries ago. You're looking into the past. If you can find Andromeda (a faint smudge), you're seeing light that's 2.5 million years old. Talk about how it feels to look up knowing what you now know about the scale of it all.`,
          creativePrompt: {
            intro: `Imagine you could send a message to someone living on a planet in another galaxy. Write what you'd say to introduce yourself and Earth.`,
            floor: `Write at least 5 sentences. Describe Earth, what life is like here, and one thing you'd want another civilization to know about us.`,
            stretch: `Write 8 to 10 sentences. Introduce Earth, humanity, what makes our planet special, and ask them at least one question about their world.`,
            open: `Write as much as you want. Compose a full interstellar message. Describe Earth and its life, what humans are like, what we've learned and created, what we still wonder about, and what you most want to know about them. Remember: by the time your message arrives, millions of years might pass. Write something worthy of crossing the cosmos.`,
            frames: [
              `Greetings. I am writing to you from a planet called Earth.`,
              `Our world is ___.`,
              `The life here is ___.`,
              `One thing that makes humans special is ___.`,
              `What I most want to ask you is ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You can now describe Earth's true place in the cosmos, explain what a light-year is, grasp the scale of our galaxy and the universe, and understand why cosmic scale fills people with awe rather than despair. Next lesson: we explore the most extreme and mysterious objects in the universe. BLACK HOLES. Places where the rules themselves break down. See you there. — Nova.`,
          badge: `scale-explorer`,
          badgeName: `Scale Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
