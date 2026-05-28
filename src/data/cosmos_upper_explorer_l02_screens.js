// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L02 — Black Holes: The Most Extreme Objects
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS1 (extension) — gravity, stellar life cycles;
//            scale, proportion (cross-cutting concept)
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify a mystery cosmic object)
// SCOPE: 4 concepts — what a black hole is, the event horizon, how they
//        form, what they teach us about extreme physics
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-02`,
      title: `Black Holes: The Most Extreme Objects`,
      duration: 18,
      xpReward: 75,
      badge: `black-hole-explorer`,
      badgeName: `Black Hole Explorer`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Last time we explored the scale of the universe. Today we visit the most extreme objects in all of it: BLACK HOLES. These are places where gravity becomes so powerful that not even LIGHT can escape. They sound like science fiction, but they're absolutely real, and there's a giant one at the center of our own galaxy. Black holes are where the normal rules of the universe get pushed to their breaking point. By the end of today, you'll understand what they really are. Let's begin.`,
          headline: `Black Holes`,
          subtitle: `Where gravity becomes so strong that not even light can escape`,
          visual: `/ue-assets/cosmos/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What a Black Hole Actually Is`,
          paragraphs: [
            `A BLACK HOLE is a region of space where so much matter is packed into such a tiny space that gravity becomes unimaginably strong. How strong? Strong enough that nothing can escape it, not even LIGHT, the fastest thing in the universe. That's why it's called "black." No light comes out, so we can't see it directly. We only know it's there by watching how it affects everything around it.`,
            `Gravity is the force that pulls objects toward each other. The more mass something has, and the more tightly packed it is, the stronger its gravity. Earth's gravity holds you to the ground. The Sun's gravity holds all the planets in orbit. A black hole's gravity is so extreme because a huge amount of mass is crushed into a point smaller than you can imagine. Get too close, and there's no escape, no matter how fast you're moving. Not even light is fast enough.`,
          ],
          image: `/ue-assets/cosmos/l02-s1-what-is.webp`,
          imageCaption: `A black hole: so much mass in so small a space that gravity traps even light.`,
          vocab: [
            { word: `black hole`,
              definition: `A region of space where gravity is so strong that nothing, not even light, can escape. Formed when a huge amount of matter is crushed into a tiny space. Invisible directly; detected by its effects.`,
              audioPrompt: `A black hole is a region of space where gravity is so strong that nothing can escape it, {name}. Not even light, the fastest thing in the universe. That's why it's called black. No light comes out, so we can't see it directly. A black hole forms when a huge amount of matter gets crushed into a tiny space, making gravity unimaginably strong. We detect them by their effects on nearby matter. There's even one at the center of our galaxy.` },
            { word: `accretion disk`,
              definition: `A swirling disk of superheated gas that forms around a black hole as material spirals inward. Can glow brilliantly — ironically, the region around a black hole can be one of the brightest things in the universe.`,
              audioPrompt: `An accretion disk is a swirling disk of superheated gas that forms around a black hole as material spirals inward, {name}. As gas falls closer, it heats up and glows intensely. Ironically, the region around a black hole can be among the brightest things in the universe, even though the black hole itself gives off no light. The first image ever captured of a black hole, published in 2019, showed this glowing ring of gas around a dark center. Astronomers call it the accretion disk.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Event Horizon: The Point of No Return`,
          paragraphs: [
            `Every black hole has a boundary called the EVENT HORIZON. Think of it as a "point of no return." Outside the event horizon, it's still possible to escape the black hole's pull, if you're moving fast enough. But once anything crosses the event horizon, escape becomes impossible, because you'd need to travel faster than light to get out, and nothing can do that. The event horizon isn't a solid surface. It's an invisible line in space marking where escape becomes impossible.`,
            `Here's something mind-bending. Near a black hole, TIME itself behaves strangely. Einstein discovered that gravity actually bends both space AND time. The stronger the gravity, the slower time passes. If you watched a friend fall toward a black hole (please don't try this), you'd see their clock tick slower and slower as they approached the event horizon. From their view, time would feel normal. From yours, they'd seem to freeze. Black holes don't just trap light. They warp the very fabric of reality. This isn't science fiction. It's been confirmed by real experiments.`,
          ],
          image: `/ue-assets/cosmos/l02-s2-event-horizon.webp`,
          imageCaption: `The event horizon: cross it, and not even light can return. Time itself slows near it.`,
          vocab: [
            { word: `event horizon`,
              definition: `The boundary around a black hole, the "point of no return." Once anything crosses it, escape is impossible because it would need to travel faster than light. Not a solid surface, just an invisible line in space.`,
              audioPrompt: `The event horizon is the boundary around a black hole, {name}. Think of it as a point of no return. Outside it, you can still escape the black hole's pull if you move fast enough. But once anything crosses the event horizon, escape becomes impossible, because you would need to travel faster than light to get out, and nothing can do that. It's an invisible line in space marking where escape becomes impossible. Near it, gravity is so strong that even time slows down.` },
            { word: `time dilation`,
              definition: `The slowing of time caused by strong gravity or high speed. Near a black hole's event horizon, gravity is so intense that time slows dramatically. Predicted by Einstein; confirmed by real experiments.`,
              audioPrompt: `Time dilation is the slowing of time caused by strong gravity, {name}. Einstein discovered that gravity bends both space and time. The stronger the gravity, the slower time passes. Near a black hole's event horizon, gravity is so intense that time slows dramatically compared to somewhere far away. This isn't science fiction. Real experiments have confirmed it. GPS satellites in orbit experience time very slightly faster than we do on Earth's surface, and engineers must account for this to keep maps accurate.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Black Holes Form`,
          paragraphs: [
            `Most black holes form from DYING STARS. A star spends its life in a balance: gravity pulls its material inward, while the energy from nuclear reactions in its core pushes outward. These two forces stay balanced for millions or billions of years. But when a very massive star runs out of fuel, the outward push stops. Gravity wins. The star's core collapses suddenly and violently, crushing its matter into an incredibly small, dense point. If the star was massive enough, a black hole is born.`,
            `Black holes come in different sizes. STELLAR black holes form from single collapsing stars and are a few to a few dozen times the mass of our Sun. SUPERMASSIVE black holes are found at the centers of galaxies, including our own Milky Way, and can be MILLIONS or BILLIONS of times the Sun's mass. The supermassive black hole at the center of our galaxy is called Sagittarius A*, and it's about 4 million times the mass of the Sun. In 2019, scientists captured the first-ever image of a black hole's shadow, a huge achievement that confirmed decades of theory.`,
          ],
          image: `/ue-assets/cosmos/l02-s3-formation.webp`,
          imageCaption: `Massive stars die, gravity wins, and the core collapses into a black hole.`,
          vocab: [
            { word: `gravity`,
              definition: `The force that pulls objects with mass toward each other. The more mass and the more tightly packed, the stronger the gravity. Black holes have the most extreme gravity in the universe.`,
              audioPrompt: `Gravity is the force that pulls objects with mass toward each other, {name}. The more mass something has, and the more tightly packed it is, the stronger its gravity. Earth's gravity holds you to the ground. The Sun's gravity holds all the planets in orbit. A black hole has the most extreme gravity in the universe because a huge amount of mass is crushed into a tiny space. It's also what collapses dying stars into black holes when they run out of fuel.` },
            { word: `supermassive black hole`,
              definition: `An enormous black hole found at the center of most large galaxies, millions or billions of times the mass of the Sun. The one at the center of our Milky Way is called Sagittarius A-star.`,
              audioPrompt: `A supermassive black hole is an enormous black hole at the center of most large galaxies, {name}. These giants can be millions or billions of times the mass of the Sun. The one at the center of our Milky Way is called Sagittarius A-star, and it has about 4 million solar masses. In 2019, scientists captured the first image of a black hole's shadow. It was the supermassive black hole at the center of a galaxy called M87, over 6 billion solar masses.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Black Holes Teach Us`,
          paragraphs: [
            `Black holes are more than cosmic curiosities. They're natural laboratories where the laws of physics get pushed to their absolute limits. By studying them, scientists test our deepest theories about gravity, space, and time. Einstein's theory of general relativity predicted black holes over 100 years ago, before anyone had seen one. Decades later, observations proved him right. This is science at its best: a bold prediction from pure thinking, later confirmed by careful observation.`,
            `Black holes also remind us how much we still don't know. What happens INSIDE a black hole, beyond the event horizon? Nobody knows for sure, because no information can escape to tell us. The center, called the "singularity," is where our current physics breaks down completely. Some of the biggest unsolved questions in science live inside black holes. Nova's teaching: the universe is full of places where our knowledge ends and mystery begins. That's not a problem to fear. It's an invitation to keep exploring. The best scientists are comfortable saying "we don't know yet," because that's where the most exciting discoveries are waiting.`,
          ],
          image: `/ue-assets/cosmos/l02-s4-teach.webp`,
          imageCaption: `Black holes are where known physics ends and the deepest mysteries begin.`,
          vocab: [
            { word: `singularity`,
              definition: `The center of a black hole, where matter is crushed to an infinitely small point and our current understanding of physics breaks down completely. One of the deepest mysteries in science.`,
              audioPrompt: `The singularity is the center of a black hole, {name}. It's where matter is crushed to an infinitely small point and our current understanding of physics breaks down completely. We don't know what really happens there, because no information can escape from inside a black hole to tell us. It is one of the deepest mysteries in all of science. Figuring out what happens there is one of physics' greatest challenges.` },
            { word: `stellar black hole`,
              definition: `A black hole formed from the collapse of a single massive star, typically a few to a few dozen times the mass of the Sun. Much smaller than supermassive black holes, but gravity still traps light.`,
              audioPrompt: `A stellar black hole is a black hole formed from the collapse of a massive star, {name}. Stellar black holes are typically a few to a few dozen times the mass of our Sun. They're much smaller than supermassive black holes, but their gravity is still strong enough to trap light. Scientists find them by watching how they affect nearby stars, or by detecting bursts of energy when they pull in gas. Many stellar black holes are scattered throughout our galaxy.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Astronomers have detected four mysterious cosmic objects. Using the clues, identify each one: BLACK HOLE (gravity traps even light), NEUTRON STAR (incredibly dense but light escapes), or REGULAR STAR (shines normally with balanced forces)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `blackhole`,   label: `Black Hole`,    color: `#A78BFA`, description: `Gravity so strong even light can't escape. Invisible directly, detected by its effects.` },
            { id: `neutron`,     label: `Neutron Star`,  color: `#60A5FA`, description: `Incredibly dense leftover core of a star. Extreme, but light still escapes.` },
            { id: `regular`,     label: `Regular Star`,  color: `#FBBF24`, description: `Shines steadily. Gravity and nuclear energy are balanced.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Object #1`,
              clues: [
                { text: `It shines steadily and we can see its light directly.` },
                { text: `It's been glowing the same way for billions of years.` },
                { text: `Its outward energy and inward gravity are balanced.` },
              ],
              correctAnswer: `regular`,
              realWorldExample: `Our own Sun is a regular star in this balanced phase.`,
              explanation: `Steady light, balanced forces, visible directly. Pure regular star. Like our Sun, it's in the long, stable phase where nuclear energy pushing out balances gravity pulling in.`,
            },
            {
              id: `case-2`,
              caseTitle: `Object #2`,
              clues: [
                { text: `Nothing nearby can escape its pull, not even light.` },
                { text: `We can't see it directly, only the way it bends light and pulls on nearby stars.` },
                { text: `It has a boundary called an event horizon.` },
              ],
              correctAnswer: `blackhole`,
              realWorldExample: `Sagittarius A* at our galaxy's center fits this pattern.`,
              explanation: `Traps light, invisible directly, has an event horizon. Pure black hole. We detect it only by its effects on the matter and light around it, exactly how real black holes are found.`,
            },
            {
              id: `case-3`,
              caseTitle: `Object #3`,
              clues: [
                { text: `It's the crushed leftover core of a star that exploded.` },
                { text: `It's incredibly dense: a teaspoon of it would weigh billions of tons.` },
                { text: `But it still glows, and its light reaches us.` },
              ],
              correctAnswer: `neutron`,
              realWorldExample: `Neutron stars are some of the densest visible objects known.`,
              explanation: `Extremely dense, but light still escapes. Pure neutron star. Neutron stars are the crushed cores of exploded stars, almost as extreme as black holes, but not quite enough gravity to trap light.`,
            },
            {
              id: `case-4`,
              caseTitle: `Object #4 — The Tricky One`,
              clues: [
                { text: `Astronomers see a bright disk of glowing, superheated gas swirling in a circle.` },
                { text: `The gas spins faster and faster as it spirals inward, then suddenly vanishes from view at a certain edge.` },
                { text: `The gas glows brightly, but the thing at the center gives off no light at all.` },
              ],
              correctAnswer: `blackhole`,
              realWorldExample: `This swirling glow is called an accretion disk around a black hole.`,
              explanation: `Tricky because there's so much BRIGHT light, you might guess a star. But look closely: the gas glows, while the CENTER gives off nothing and the gas vanishes at a certain edge. That edge is the event horizon. The bright disk is superheated gas swirling INTO a black hole (called an accretion disk), and it disappears once it crosses the point of no return. Pure black hole. Lesson: black holes are often surrounded by brilliant light from the matter falling in. The black hole itself is dark, but its surroundings can be some of the brightest things in the universe. Don't be fooled by the glow. Look for what's happening at the edge.`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is a BLACK HOLE?`,
              options: [
                `A hole in space you can fall through`,
                `A region where gravity is so strong that nothing, not even light, can escape`,
                `A dark planet`,
                `An empty part of space`,
              ],
              correctIndex: 1,
              explanation: `A black hole is a region where so much mass is packed into so small a space that gravity becomes strong enough to trap even light. That's why it's "black" — no light escapes. We detect them by their effects on nearby matter and light.` },

            { id: `l02-q2`, format: `multiple-choice`,
              question: `What is the EVENT HORIZON?`,
              options: [
                `The surface of a black hole`,
                `The "point of no return" — once anything crosses it, escape is impossible`,
                `The center of a black hole`,
                `A type of telescope`,
              ],
              correctIndex: 1,
              explanation: `The event horizon is the boundary around a black hole. Outside it, escape is still possible. Once anything crosses it, escape would require traveling faster than light, which is impossible. It's an invisible line, not a solid surface.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What happens to TIME near a black hole?`,
              options: [
                `Nothing — time is always the same`,
                `Time slows down, because strong gravity bends both space and time`,
                `Time speeds up`,
                `Time stops everywhere`,
              ],
              correctIndex: 1,
              explanation: `Einstein discovered that gravity bends both space AND time. The stronger the gravity, the slower time passes. Near a black hole's event horizon, time slows dramatically. This sounds like fiction, but real experiments have confirmed it.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `How do most black holes FORM?`,
              options: [
                `They've always existed`,
                `From very massive dying stars whose cores collapse when they run out of fuel`,
                `From planets crashing together`,
                `From comets`,
              ],
              correctIndex: 1,
              explanation: `When a very massive star runs out of fuel, the outward push of nuclear energy stops, and gravity wins. The core collapses violently into an incredibly dense point. If the star was massive enough, a black hole forms.` },

            { id: `l02-q5`, format: `true-false`,
              question: `True or false: There is a supermassive black hole at the center of our own galaxy, the Milky Way.`,
              correctAnswer: true,
              explanation: `True. It's called Sagittarius A*, and it's about 4 million times the mass of our Sun. Most large galaxies have a supermassive black hole at their center. In 2019, scientists even captured the first image of a black hole's shadow.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `What's the difference between a BLACK HOLE and a NEUTRON STAR?`,
              options: [
                `No difference`,
                `Both are extremely dense, but a black hole's gravity traps even light, while a neutron star still gives off light`,
                `Neutron stars are bigger`,
                `Black holes are made of gas`,
              ],
              correctIndex: 1,
              explanation: `Both are crushed remains of dead stars and incredibly dense. The difference is gravity. A neutron star is extreme but light can still escape it. A black hole has so much gravity that not even light can get out.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `What is the SINGULARITY?`,
              options: [
                `A type of star`,
                `The center of a black hole, where matter is crushed to a point and known physics breaks down`,
                `The edge of a black hole`,
                `A spaceship`,
              ],
              correctIndex: 1,
              explanation: `The singularity is the center of a black hole, where matter is crushed infinitely small and our current physics no longer works. We can't observe it directly because no information escapes a black hole. It's one of science's deepest mysteries.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `What did black holes show about how SCIENCE works?`,
              options: [
                `Scientists guess randomly`,
                `Einstein predicted them from pure theory over 100 years ago, and later observations proved him right`,
                `They were found by accident`,
                `Nobody believes in them`,
              ],
              correctIndex: 1,
              explanation: `Einstein's theory of general relativity predicted black holes before anyone saw one. Decades later, observations confirmed they exist. This is science at its best: a bold prediction from careful thinking, later proven by real observation.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Black holes warp time itself — time runs slower where gravity is stronger. What's the strangest part of that idea to you? Why?` },
            { id: `r2`, text: `Nobody knows what happens inside a black hole, because no information can escape. Does that mystery excite you or frustrate you?` },
            { id: `r3`, text: `Einstein predicted black holes from pure thinking, 100 years before one was seen. What does that tell you about the power of imagination in science?` },
            { id: `r4`, text: `If you could send a probe to safely study a black hole from a distance, what's the first question you'd want it to answer?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Black holes might seem impossibly far from daily life, but studying them has pushed forward our understanding of gravity, space, and time in ways that affect real technology. The same physics (Einstein's relativity) that describes black holes is also needed for GPS satellites to work accurately. Without accounting for how gravity affects time, your phone's maps would be off by kilometers. The extreme teaches us about the everyday. Nova's note: exploring the most extreme corners of the universe often reveals truths that turn out to matter right here at home.`,
          familyAdventure: `Family Gravity Investigation. As a family, explore gravity hands-on. Drop different objects (a feather and a coin, a crumpled paper and a flat one) and observe what falls faster and why (air resistance, not gravity, makes the difference). Then look up a video of astronauts dropping a hammer and feather on the Moon, where there's no air. Talk about how gravity is the same force that holds you down AND crushes stars into black holes. The same force, across an unimaginable range.`,
          creativePrompt: {
            intro: `Imagine you're a science journalist writing a short article explaining black holes to people who've never heard of them. Write your article.`,
            floor: `Write at least 5 sentences. Explain what a black hole is, why it's "black," and one amazing fact about them.`,
            stretch: `Write 8 to 10 sentences. Cover what a black hole is, the event horizon, how they form, and one mind-bending fact (like time slowing down).`,
            open: `Write as much as you want. Build a full article. Explain what black holes are, how they form, the event horizon and singularity, how time behaves near them, how scientists detect something invisible, and why studying them matters. Make it clear and exciting for a curious reader.`,
            frames: [
              `Imagine a place where gravity is so strong that ___.`,
              `Black holes form when ___.`,
              `The "point of no return" is called ___.`,
              `The strangest thing about them is ___.`,
              `Scientists study them because ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Excellent work, {name}. You can now explain what a black hole is, what the event horizon and singularity are, how black holes form, and why they push physics to its limits. Next lesson: we go back to the very beginning, to the moment everything started. THE BIG BANG. How did the entire universe begin? See you there. — Nova.`,
          badge: `black-hole-explorer`,
          badgeName: `Black Hole Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L02 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
