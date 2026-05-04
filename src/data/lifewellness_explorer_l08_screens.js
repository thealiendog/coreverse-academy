// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L08 — Hydration: Your Body is Mostly Water
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L08 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-08`,
      title:     `Hydration: Your Body is Mostly Water`,
      duration:  12,
      xpReward:  50,
      badge:     `hydration-hero`,
      badgeName: `Hydration Hero`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Here's something that surprises most people, {name}: your body is roughly sixty percent water. Your brain is closer to seventy-five. And water isn't just sitting there passively — it's involved in every single process your body runs. Digestion. Temperature regulation. Getting nutrients to your cells. Flushing out waste. Even your mood and your ability to concentrate. When you're even slightly dehydrated, you feel it — even if you don't recognise that's what it is. Today we're going to look at what hydration actually does and why something this simple can make such a measurable difference to how you feel every day.`,
          headline: `Hydration: Your Body is Mostly Water`,
          subtitle: `Water is involved in every single process your body runs — and staying well hydrated is one of the simplest things you can do to feel your best`,
          visual: `/explorer-assets/wellness/l08-welcome.png`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What water does in your body`,
          paragraphs: [
            `About **60% of your body is water**. Your brain is approximately 75% water. Your blood is around 83% water. Water is involved in everything: it **transports nutrients and oxygen** to your cells, **removes waste products** through urine and sweat, **regulates body temperature** through sweating and respiration, **lubricates your joints** so they move smoothly, **supports kidney function**, aids digestion, and acts as a shock absorber for your brain and spinal cord. Every enzyme reaction in your body requires water. Without adequate water, your body starts prioritising essential functions — and cognitive focus and mood are among the first to be affected.`,
          ],
          image: `/explorer-assets/wellness/l08-magazine-1.png`,
          imageCaption: `Every system in your body depends on water — transport, temperature, joints, brain, kidneys, and more`,
          vocab: [
            { word: `transport`, definition: `One of water's core jobs in the body — carrying nutrients, oxygen, and hormones to cells, and removing waste products through urine and sweat.`, audioPrompt: `Think of water as your body's entire delivery and waste-collection system, {name}. Nutrients get to your cells because water carries them there. Waste leaves your body because water carries it out. Without enough water, both systems slow down — and you feel it in your energy, your concentration, and how your body moves.` },
            { word: `lubricate`, definition: `To reduce friction so things move smoothly — water lubricates your joints, allowing them to move without pain, and cushions your brain and spinal cord.`, audioPrompt: `Water lubricates your joints the same way oil keeps a machine running smoothly, {name}. Without enough of it, joints can feel stiffer and movement becomes less comfortable. Your brain and spinal cord also float in a fluid that's mostly water, protected from impact. Hydration is physical maintenance for your whole mechanical system.` },
            { word: `enzyme`, definition: `A protein that speeds up chemical reactions in your body — every enzyme reaction requires water, making hydration essential for almost all of your body's processes.`, audioPrompt: `Your body is running thousands of chemical reactions every second, {name}, and almost all of them require water to work. Enzymes are the proteins that make those reactions possible, and they need water to do their job. That's why even mild dehydration can slow you down — not just one thing, but a whole network of processes that all depend on the same ingredient.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Signs of dehydration`,
          paragraphs: [
            `You don't need to feel obviously thirsty to be dehydrated — **thirst is actually a late-stage dehydration signal**. Early signs include: fatigue and low energy, headache, difficulty concentrating, irritability and mood changes, dry mouth, and darker yellow urine. A simple daily check: look at the colour of your urine. **Pale lemonade colour = well hydrated.** **Dark yellow or amber = drink more water.** **Colourless = you may actually be over-hydrated.** Mild dehydration — just slightly below optimal — can impair concentration, mood, and physical performance. Most kids are mildly dehydrated most of the time without realising it.`,
          ],
          image: `/explorer-assets/wellness/l08-magazine-2.png`,
          imageCaption: `Thirst is a late signal — pale lemonade urine is a more reliable daily hydration check`,
          vocab: [
            { word: `dehydration`, definition: `Having less water in your body than it needs — even mildly — which can cause fatigue, headache, difficulty concentrating, and irritability before you feel obviously thirsty.`, audioPrompt: `Mild dehydration can feel like a lot of other things, {name} — a headache that came from nowhere, brain fog, low energy, trouble concentrating. Many kids are slightly dehydrated most of the time without ever connecting it to their water intake. The good news: it's one of the simplest things in the world to fix.` },
            { word: `indicator`, definition: `A reliable signal that tells you something about your current state — like urine color, which is a more accurate daily hydration indicator than thirst.`, audioPrompt: `Terra loves this practical knowledge, {name}: the color of your urine is one of the most accurate and instant hydration indicators you have. Pale lemonade yellow means you're well hydrated. Darker means your body needs more water soon. You don't need any equipment — just awareness. It's useful self-knowledge you can use every day.` },
            { word: `optimal`, definition: `At the best possible level — optimal hydration means your body has all the water it needs for every process to run at its best, not just enough to get by.`, audioPrompt: `There's a difference between "not dehydrated" and fully hydrated, {name}. Optimal hydration means your brain, joints, kidneys, and every other system have exactly what they need — not just enough to survive the day, but enough to function at their best. That's the level worth aiming for, and your urine color is how you track it.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How much water you need`,
          paragraphs: [
            `Kids aged 6–8 need approximately **5–7 cups of water per day**, and more during exercise, hot weather, or illness. Actual needs vary by body size, activity level, and what you eat — many fruits and vegetables are 80–90% water and contribute significantly to hydration. A practical daily strategy: **drink a glass of water when you wake up**, before each meal, and before exercise. Don't wait until you feel thirsty. The "8 glasses a day" rule is a rough guide — using your urine colour as a daily check is more reliable than counting cups.`,
          ],
          image: `/explorer-assets/wellness/l08-magazine-3.png`,
          imageCaption: `5–7 cups a day is a good guide — your urine colour is your most reliable daily indicator`,
          vocab: [
            { word: `strategy`, definition: `A practical plan that makes a healthy behavior easier and more reliable — like drinking a glass of water when you wake up, before meals, and before activity.`, audioPrompt: `A hydration strategy takes the guesswork out of it, {name}. Instead of trying to remember to drink throughout the day, you attach water to moments that already happen: waking up, before each meal, before moving your body. The habit runs on existing anchors — no willpower required. Small strategies, done consistently, are what actually work.` },
            { word: `consistent`, definition: `Happening regularly and reliably — consistent hydration across the day is more effective than drinking a lot at once after going hours without.`, audioPrompt: `Regular sips throughout the day serve your body better than a big glass after hours of nothing, {name}. Your body uses water continuously — and it works best when the supply is consistent, not delivered in sudden large amounts. Think of it like keeping a garden watered: steady is better than flooding once and then forgetting.` },
            { word: `activity`, definition: `Physical movement — which increases how much water your body loses and therefore how much you need to replace to stay well hydrated during and after exercise.`, audioPrompt: `When you're active, {name}, your body uses water faster — through sweat, through the increased demands on your muscles and joints and heart. What's enough on a quiet day may not be enough on a day of sport or play. Drinking water before, during, and after activity keeps your body performing and recovering the way it needs to.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Water vs other drinks`,
          paragraphs: [
            `Water is almost always the best hydration choice — **no added sugar, nothing your body doesn't need**. It's what your body was designed to run on. **Sports drinks** are designed for athletes exercising intensely for 60 or more minutes — for regular activity and daily life, they add sugar your body doesn't need. **Juice** contains vitamins but also significant sugar and lacks the fibre of whole fruit. **Soda** is mildly dehydrating through caffeine and adds sugar with no nutritional benefit. **Milk** is nutritious and hydrating. **Herbal teas** are a fine choice. The simplest rule: when you're thirsty, reach for water first.`,
          ],
          image: `/explorer-assets/wellness/l08-magazine-4.png`,
          imageCaption: `Water first — no added sugar, nothing extra. Other drinks have their place, but water is what your body runs on`,
          vocab: [
            { word: `electrolyte`, definition: `Minerals like sodium and potassium that help regulate fluid balance in your body — relevant mainly for athletes doing intense exercise for extended periods, not for everyday hydration.`, audioPrompt: `You'll often see electrolytes mentioned in sports drink marketing, {name}. They're minerals that help your body manage fluids — and they do matter when you're sweating heavily for a long time. But for everyday activity and daily hydration, water handles everything your body needs without the added sugar. Electrolytes are a tool for a specific situation, not a daily requirement.` },
            { word: `additive`, definition: `Something added to a drink or food beyond its natural form — like sugar, coloring, or artificial flavors — often present in drinks that seem healthy but are less ideal for everyday hydration.`, audioPrompt: `Water has no additives, {name} — nothing your body has to filter out or process beyond the water itself. Many other drinks come with added sugar, artificial flavors, or caffeine. None of those are what your body is actually asking for when it signals thirst. Water is the cleanest answer to what your body genuinely needs.` },
            { word: `default`, definition: `Your automatic first choice — and the goal is to make water your default drink when you're thirsty, rather than reaching for something sweetened out of habit.`, audioPrompt: `Terra believes the most powerful change here is a simple one, {name}: making water your default. Not your only drink, not a rule — just the thing you reach for first when you're thirsty. That one shift, done consistently, changes your hydration, reduces your added sugar intake, and costs you nothing. Defaults are powerful because they run on habit, not on decision.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `hydrated`,
              label: `💧 Helps You Stay Well Hydrated`,
              color: `#34D399`,
            },
            {
              id: `not-best`,
              label: `🥤 Not the Best for Everyday Hydration`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l08-g1`,
              image: `l08-game-1.png`,
              label: `Starting your morning with a glass of water before anything else.`,
              matchPhrase: `Your body has been without water all night — this simple habit gives it exactly what it needs first thing and sets a good foundation for the day.`,
              correctMatch: `hydrated`,
            },
            {
              id: `l08-g2`,
              image: `l08-game-2.png`,
              label: `Drinking water with every meal throughout the day.`,
              matchPhrase: `Pairing water with meals is one of the simplest strategies to stay consistently hydrated without needing to think too hard about it.`,
              correctMatch: `hydrated`,
            },
            {
              id: `l08-g3`,
              image: `l08-game-3.png`,
              label: `Reaching for a sugary fizzy drink every time you feel thirsty.`,
              matchPhrase: `Sugary drinks can slow hydration and add sugar your body doesn't need — water is almost always a better answer to thirst.`,
              correctMatch: `not-best`,
            },
            {
              id: `l08-g4`,
              image: `l08-game-4.png`,
              label: `Going most of the morning without anything to drink and having juice at lunch.`,
              matchPhrase: `Waiting hours before drinking anything means your body and brain are running slightly dry — small regular drinks of water through the morning keeps everything running smoothly.`,
              correctMatch: `not-best`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l08-q1`,
              format: `multiple-choice`,
              question: `What makes water so essential that every system in your body depends on it?`,
              options: [
                `It is the heaviest substance in the body and keeps organs in place`,
                `It is only needed for digestion and kidney function`,
                `It transports nutrients, removes waste, regulates temperature, lubricates joints, and supports every chemical reaction your body runs`,
                `It contains minerals that provide energy for physical activity`,
              ],
              correctIndex: 2,
              explanation: `Water isn't just one of many nutrients — it's the medium in which almost everything in your body happens. Nutrients travel in it, waste leaves through it, temperature is regulated by it, joints move because of it, and every enzyme reaction requires it. There is no system in your body that doesn't depend on water.`,
            },
            {
              id: `l08-q2`,
              format: `multiple-choice`,
              question: `What is a reliable daily indicator of your hydration level?`,
              options: [
                `Whether you feel thirsty — thirst always means dehydration`,
                `The colour of your urine — pale lemonade yellow means well hydrated; dark yellow means drink more water`,
                `How often you sweat during the day`,
                `The amount of water you've drunk regardless of urine colour`,
              ],
              correctIndex: 1,
              explanation: `The colour of your urine is one of the most reliable daily hydration checks. Pale lemonade yellow = well hydrated. Dark yellow or amber = drink more water soon. Colourless = possibly slightly over-hydrated. Thirst, by contrast, is a late-stage signal — it often means you're already mildly dehydrated.`,
            },
            {
              id: `l08-q3`,
              format: `multiple-choice`,
              question: `When are sports drinks actually appropriate?`,
              options: [
                `Any time you're physically active`,
                `For athletes exercising intensely for 60 or more minutes — not for regular daily hydration`,
                `Only during competitions, not practices`,
                `Whenever you're sweating, regardless of duration`,
              ],
              correctIndex: 1,
              explanation: `Sports drinks were designed to replace electrolytes and provide fast fuel during prolonged intense exercise — 60+ minutes of hard physical activity. For regular movement, daily activity, and everyday hydration, they add sugar your body doesn't need. Water is almost always the better choice for daily life.`,
            },
            {
              id: `l08-q4`,
              format: `true-false`,
              question: `Thirst is useful — but by the time you feel it, you may already be mildly dehydrated. Drinking water regularly through the day is smarter than waiting.`,
              correctAnswer: true,
              explanation: `True. Thirst is your body's late-stage dehydration signal — by the time you notice it, you're often already slightly below optimal hydration. Building in regular small drinks throughout the day (on waking, before meals, before activity) keeps you consistently hydrated rather than recovering from dips.`,
            },
            {
              id: `l08-q5`,
              format: `fill-blank`,
              question: `A reliable daily hydration check is to look at the ___ of your urine — pale yellow means you're well hydrated.`,
              options: [
                `colour`,
                `smell`,
                `temperature`,
                `amount`,
              ],
              correctIndex: 0,
              explanation: `The colour of your urine is a simple, no-equipment hydration check you can do every day. Pale lemonade yellow is the target. Darker means you need more water; colourless means you may have had too much. It's one of those useful pieces of self-knowledge that takes seconds and tells you something real.`,
            },
            {
              id: `l08-q6`,
              format: `multiple-choice`,
              question: `What makes water the best everyday drink choice for your body?`,
              options: [
                `It contains vitamins and minerals that other drinks don't have`,
                `It tastes better than other drinks when you're properly hydrated`,
                `It has no added sugar or additives, and your body uses it for every process it runs`,
                `It is the only drink that absorbs quickly enough to count as hydration`,
              ],
              correctIndex: 2,
              explanation: `Water is what your body was designed to run on — no added sugar, no additives, nothing extra for your body to process or filter out. Every system in your body uses it, and it delivers exactly what hydration needs to deliver without anything else added. Other drinks can have their place, but water is the foundation.`,
            },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Elite athletes, surgeons, and astronauts all monitor hydration carefully — because even mild dehydration measurably impairs performance. The urine colour check is used in professional sports environments. You're using the same tool.`,
          familyAdventure: `As a family, replace sweetened drinks with water and herbal tea for one week. Put a large jug of water on the table at every meal. Add lemon, cucumber, or mint if plain water feels boring. At the end of the week: did anyone's energy or focus change? Would you keep any of it?`,
          creativePrompt: `Try the urine colour check tomorrow morning as your first daily hydration indicator. Notice whether it's pale lemonade, darker, or somewhere in between — and adjust from there.`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that every system in your body runs on water — and that staying well hydrated is one of the simplest, most powerful things you can do to feel clear-headed, energised, and at your best every day. Terra is so proud to walk this path with you.`,
          badge: `hydration-hero`,
          badgeName: `Hydration Hero`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L08.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L08] Loaded: "Hydration: Your Body is Mostly Water" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l08-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l08-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l08-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l08-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L08] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L08] One or more magazine assets missing'));
}
