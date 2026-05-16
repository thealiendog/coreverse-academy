// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L02 — The Food Plate: Building Balanced Meals
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L02 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-02`,
      title:     `The Food Plate: Building Balanced Meals`,
      duration:  12,
      xpReward:  50,
      badge:     `plate-builder`,
      badgeName: `Plate Builder`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Last time we talked about what food actually does inside your body — the chemistry of fuel, repair, and building blocks. Today we're making that practical. Because knowing the science is great, but eventually you have to sit down for a meal. What does a genuinely balanced one look like? How do you make sure your body gets the full range of what it needs — not just once in a while, but most of the time? That's what today is about: a simple, flexible framework for building meals that actually work for you. Ready? Let's build this together.`,
          headline: `The Food Plate: Building Balanced Meals`,
          subtitle: `A simple framework for building meals that give your body everything it needs to feel good`,
          visual: `/explorer-assets/wellness/l02-welcome.png`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Balanced Plate`,
          paragraphs: [
            `A simple framework that works for any meal:`,
            `HALF your plate: vegetables and fruit. ONE QUARTER: whole grains. ONE QUARTER: protein. A bit of healthy fat. Water alongside. Not a strict rule — a shape to aim for.`,
          ],
          image: `/explorer-assets/wellness/l02-s1-balanced-plate.png`,
          imageCaption: `Half vegetables and fruit, a quarter whole grains, a quarter protein. The same shape works for any meal.`,
          vocab: [
            { word: `portion`,   definition: `The amount of a particular food on your plate. A loose guide for building balance, not a strict measurement.`,
              audioPrompt: `A portion isn't a strict rule, {name} — it's a helpful guide for building balance. Half for vegetables and fruit, a quarter for whole grains, a quarter for protein. That pattern, across most meals, gives your body the full range of what it needs to feel good and stay energized.` },
            { word: `framework`, definition: `A flexible structure for making decisions. The balanced plate is a framework — a shape to aim for, not a formula to follow exactly.`,
              audioPrompt: `Terra believes a good framework changes how you eat without making eating complicated, {name}. The balanced plate isn't a set of rules to follow perfectly — it's a shape to aim for. Roughly half vegetables, some grains, some protein. That rough shape, done consistently, is what makes the difference.` },
            { word: `balance`,   definition: `The rough proportions across food groups that give your body what it needs. Doesn't have to be exact — just close, most of the time.`,
              audioPrompt: `Balance is what your body is asking for, {name}. Not perfection. Not exactness. Just a rough mix where you're getting some vegetables, some grains, some protein, some healthy fat — across most of your meals. That kind of rough, consistent balance is far more powerful than any strict rule could be.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `More Color, More Nutrients`,
          paragraphs: [
            `The more colors on your plate, the more nutrients you get.`,
            `Different-colored vegetables and fruits carry different vitamins. A plate of green, red, and orange is doing more for you than a plate of one color. Variety is the easy win.`,
          ],
          image: `/explorer-assets/wellness/l02-s2-color-variety.png`,
          imageCaption: `The colors on your plate become the variety in your body. Different colors carry different vitamins, minerals, and plant compounds.`,
          vocab: [
            { word: `variety`,       definition: `Eating different foods across meals rather than the same things every day. The natural way to get a wide range of nutrients.`,
              audioPrompt: `Imagine your week of meals as a painting, {name} — the more colors on the canvas, the more complete the picture. Your body needs a wide range of vitamins, minerals, and other nutrients, and variety in what you eat is the most natural way to get them all without having to think hard about it.` },
            { word: `color`,         definition: `A natural signal of which nutrients a food contains. Different colors tend to mean different vitamins and minerals.`,
              audioPrompt: `Color is one of nature's clearest signals, {name}. The orange of a carrot tells you it has different nutrients than the deep green of spinach or the red of a tomato. You don't need to memorize which color means what. Just aiming for a mix of colors on your plate gives your body a wide range automatically.` },
            { word: `phytonutrient`, definition: `A natural compound in plants that gives them their color — and offers real benefits when you eat them.`,
              audioPrompt: `Phytonutrients are why colorful plant foods do so much for you, {name} — the natural compounds that give a blueberry its deep purple or a beet its red. They're not vitamins exactly, but they help your body in real ways: protecting cells, supporting health, doing quiet good work. The colors aren't just for looks. They're doing something.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Breakfast Fuels Your Brain`,
          paragraphs: [
            `Your brain runs on glucose. After 8+ hours of sleep without food, it's running low.`,
            `Breakfast refuels it. Eggs with whole grain toast, porridge with fruit, yogurt with granola — protein and grains together — give steady focus all morning.`,
          ],
          image: `/explorer-assets/wellness/l02-s3-breakfast-fuels-brain.png`,
          imageCaption: `After a night of sleep, your brain is running on low fuel. Breakfast is the first investment in your day.`,
          vocab: [
            { word: `glucose`,       definition: `The sugar your brain runs on. Replenished through the carbohydrates in breakfast after a long night of sleep.`,
              audioPrompt: `Your brain is a glucose machine, {name} — it runs through enormous amounts of this fuel every hour. After a full night of sleep with no food, those levels are low. Breakfast is how you refuel it. That's not a metaphor — it's the literal chemistry of how your brain gets ready to think.` },
            { word: `concentration`, definition: `The ability to focus your thinking on a task. One of the first things to drop when your brain hasn't been fueled.`,
              audioPrompt: `Have you ever tried to read something important when you're hungry, {name}? Your brain keeps sliding off the page. That's concentration running low — and breakfast is one of the most direct ways to restore it. Kids who eat breakfast consistently show better focus through the whole morning.` },
            { word: `fast`,          definition: `A period of not eating. Like the overnight hours of sleep — broken (literally) by breakfast.`,
              audioPrompt: `Terra finds this detail fascinating, {name}: the word "breakfast" literally means breaking a fast. Every morning, your body has gone hours without fuel. The meal that follows isn't just a tradition — it's your body's first real opportunity to restock what it used while you were sleeping and growing.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Snacks That Sustain`,
          paragraphs: [
            `Snacks aren't cheating. Your body needs steady fuel through the day.`,
            `The trick is pairing PROTEIN with FIBER: apple with peanut butter, carrots with hummus, cheese with whole grain crackers. Pure sugar gives a spike and then a crash.`,
          ],
          image: `/explorer-assets/wellness/l02-s4-sustaining-snacks.png`,
          imageCaption: `Snacks with protein and fiber keep energy steady. Snacks that are mostly sugar give a spike and then a drop.`,
          vocab: [
            { word: `sustaining`,  definition: `A snack that keeps your energy and focus steady. Usually because it pairs protein with fiber.`,
              audioPrompt: `A sustaining snack doesn't just taste good in the moment, {name} — it keeps you going afterward. That's the difference between apple slices with peanut butter and a handful of candy. One gives you a steady hour of focus. The other gives you a spike and then a drop. Your body knows the difference.` },
            { word: `blood sugar`, definition: `The level of glucose in your blood. Rises and falls with what you eat — affecting energy, mood, and focus.`,
              audioPrompt: `Think of blood sugar like the volume on a stereo, {name} — you want it in a steady, comfortable range, not suddenly blasting loud then dropping to silence. Protein and fiber are what keep the dial steady. Snacks that are mostly sugar turn it all the way up and then let it crash.` },
            { word: `stable`,      definition: `Steady and consistent. What your blood sugar does when you pair protein and fiber with carbohydrates.`,
              audioPrompt: `Stable energy feels different from energy that peaks and drops, {name}. When your blood sugar is stable — held steady by protein and fiber — you think more clearly, feel less irritable, and don't hit that wall mid-afternoon. That's not magic. That's just how the chemistry works when you give your body the right combination.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Sometimes Foods Belong`,
          paragraphs: [
            `Birthday cake. Holiday treats. Cinema popcorn.`,
            `These belong in a healthy life. They're SOMETIMES foods — enjoyed for celebrations and special occasions. No food is "bad." The everyday pattern is what shapes how you feel.`,
          ],
          image: `/explorer-assets/wellness/l02-s5-sometimes-foods-belong.png`,
          imageCaption: `Celebration foods are part of a healthy life. The pattern over time matters far more than any single occasion.`,
          vocab: [
            { word: `sometimes`,   definition: `Foods enjoyed for celebrations and treats. A normal, healthy part of life — just not the everyday pattern.`,
              audioPrompt: `Sometimes foods are the cake at a birthday, the popcorn at the cinema, the special treat after a long week, {name}. Terra wants you to understand: these belong in a healthy life. They're not bad. They're not something to feel guilty about. They're just sometimes — not everyday — and that's exactly the right way to think about them.` },
            { word: `celebration`, definition: `A special occasion — birthdays, holidays, gatherings. The natural context for foods you enjoy sometimes.`,
              audioPrompt: `Celebration food is one of the joys of being human, {name}. A birthday cake shared with people you love. A holiday meal with family. Food has always been part of how people mark special moments — and that's beautiful, not a problem. A healthy relationship with food has full room for celebration. Always.` },
            { word: `enjoyment`,   definition: `A real and important part of eating. Food is meant to nourish AND to be enjoyed.`,
              audioPrompt: `Enjoyment matters, {name}. Food isn't just fuel — it's flavor, comfort, memory, love. The pleasure of eating something delicious is a real part of why we eat. Terra wants you to never lose track of that. Healthy eating includes loving what you eat. Both things are true at once, and they belong together.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A Pattern, Not a Rule`,
          paragraphs: [
            `No single meal makes or breaks your health.`,
            `What matters is the pattern — what you eat most of the time. Most days nourishing. Sometimes celebratory. Both belong. No perfection required.`,
          ],
          image: `/explorer-assets/wellness/l02-s6-pattern-not-rule.png`,
          imageCaption: `One meal doesn't define how you eat. The overall pattern across weeks and months is what shapes how you feel.`,
          vocab: [
            { word: `pattern`,      definition: `The overall picture of what you eat across many days and weeks. Far more important than any single meal.`,
              audioPrompt: `Here's something Terra wants you to hold onto, {name}: no single meal makes or breaks your health. What matters is the pattern — what you eat most of the time, across days and weeks. One celebration meal doesn't change that pattern. One nourishing meal doesn't either. It's what you do consistently that builds how you feel.` },
            { word: `consistent`,   definition: `Showing up most of the time. The everyday choices that, repeated over weeks, shape how your body feels.`,
              audioPrompt: `Consistency in eating doesn't mean perfection, {name} — it means showing up most of the time with a roughly nourishing plate. Most breakfasts have some protein and some grains. Most lunches include vegetables. Most days, you drink water. None of it is dramatic. That steady, unspectacular consistency is what actually changes how you feel.` },
            { word: `relationship`, definition: `How you think about and engage with food. Best when it's steady, kind, and free of rigid rules.`,
              audioPrompt: `A healthy relationship with food is one of the most important things Terra wants you to build, {name}. Not strict. Not anxious. Not about being "good" or "bad." Just steady, kind, and curious — interested in what nourishes you, generous when celebrations come, and at peace with eating as one of life's real pleasures.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `veg-fruit`,
              label: `🥦 Vegetables & Fruit`,
              color: `#34D399`,
            },
            {
              id: `grains`,
              label: `🌾 Whole Grains`,
              color: `#60A5FA`,
            },
            {
              id: `protein`,
              label: `🥚 Protein`,
              color: `#F59E0B`,
            },
            {
              id: `sometimes`,
              label: `🎉 Sometimes Foods`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l02-g1`,
              image: `l02-game-1.png`,
              label: `A handful of spinach leaves and some sliced tomato.`,
              matchPhrase: `Vegetables fill the largest section of a balanced plate — full of micronutrients your body needs.`,
              correctMatch: `veg-fruit`,
            },
            {
              id: `l02-g2`,
              image: `l02-game-2.png`,
              label: `A portion of brown rice or a slice of whole grain bread.`,
              matchPhrase: `Whole grains give your body steady fuel — and the fibre helps keep your blood sugar stable.`,
              correctMatch: `grains`,
            },
            {
              id: `l02-g3`,
              image: `l02-game-3.png`,
              label: `Two boiled eggs or a cupful of beans.`,
              matchPhrase: `Protein builds and repairs — it goes in the quarter of your plate dedicated to your body's building material.`,
              correctMatch: `protein`,
            },
            {
              id: `l02-g4`,
              image: `l02-game-4.png`,
              label: `A small piece of cake at a birthday celebration.`,
              matchPhrase: `Celebration foods are a joyful part of life — they're enjoyed as special-occasion foods, not everyday ones.`,
              correctMatch: `sometimes`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l02-q1`,
              format: `multiple-choice`,
              question: `What should fill half of a balanced plate?`,
              options: [
                `Protein and grains in equal amounts`,
                `Vegetables and fruits`,
                `Carbohydrates for energy`,
                `Whatever you enjoy most`,
              ],
              correctIndex: 1,
              explanation: `Half the plate for vegetables and fruit — because they're packed with micronutrients, fibre, and water that your body needs in generous amounts. The more colours, the better.`,
            },
            {
              id: `l02-q2`,
              format: `multiple-choice`,
              question: `Why does a good breakfast matter for learning?`,
              options: [
                `It gives you energy to run around at recess`,
                `It replenishes brain glucose after hours of sleep, improving concentration and recall through the morning`,
                `It prevents you from getting hungry until dinner`,
                `It helps your body grow taller faster`,
              ],
              correctIndex: 1,
              explanation: `After a full night of sleep with no food, your brain's glucose levels are low. Breakfast refuels it — which is why kids who eat breakfast consistently show better attention and recall during the morning.`,
            },
            {
              id: `l02-q3`,
              format: `multiple-choice`,
              question: `What makes a snack sustaining rather than causing an energy crash?`,
              options: [
                `Eating as much as possible to stay full longer`,
                `Combining protein and fibre to keep blood sugar stable`,
                `Choosing snacks with bright colours on the packaging`,
                `Eating sugar for quick energy that lasts all day`,
              ],
              correctIndex: 1,
              explanation: `Protein and fibre slow digestion and keep blood sugar steady — which means steady energy and focus. Snacks that are mostly sugar spike blood sugar quickly and then let it drop just as fast.`,
            },
            {
              id: `l02-q4`,
              format: `true-false`,
              question: `Snacks are a normal and useful part of eating well — they help keep your energy and focus steady throughout the day.`,
              correctAnswer: true,
              explanation: `True. Kids' bodies and brains need regular fuel — snacking isn't a failure of willpower, it's how your body works. A well-chosen snack mid-morning or mid-afternoon keeps your blood sugar stable and your focus sharp.`,
            },
            {
              id: `l02-q5`,
              format: `fill-blank`,
              question: `A balanced breakfast gives your brain the ___ it needs to concentrate, learn, and make decisions after a night of sleep.`,
              options: [
                `fuel`,
                `rest`,
                `calcium`,
                `sugar`,
              ],
              correctIndex: 0,
              explanation: `Your brain runs on glucose — and breakfast is how you replenish it after the overnight fast. A balanced breakfast with protein and whole grains gives your brain steady fuel rather than a quick spike.`,
            },
            {
              id: `l02-q6`,
              format: `multiple-choice`,
              question: `What does a healthy relationship with food actually look like?`,
              options: [
                `Eating only nourishing foods and never having treats`,
                `Eating the same balanced meal at every meal without variation`,
                `Mostly nourishing foods most of the time, with room to enjoy special-occasion foods without guilt`,
                `Tracking every food you eat to make sure nothing unhealthy gets in`,
              ],
              correctIndex: 2,
              explanation: `A healthy relationship with food is about a pattern — not perfection. Most meals nourishing, with genuine enjoyment of treats when they come around. Both parts belong. Neither cancels the other out.`,
            },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Athletes, doctors, and nutritionists all use the balanced plate as a simple daily framework — not because food has to be complicated, but because the pattern over time is what builds how you feel.`,
          familyAdventure: `Try building at least one balanced plate meal a day as a family for a week. Take photos and compare at the end — which meals looked most balanced? Did anyone notice a difference in how they felt on those days?`,
          creativePrompt: `Try adding one new colour to your plate at lunch today — just one. Small changes done consistently make a bigger difference than big changes that don't last.`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that a balanced plate gives your body the full range of what it needs to feel good, think clearly, and stay strong through the day. Every good meal is a small act of taking care of yourself. Terra is so proud to walk this path with you.`,
          badge: `plate-builder`,
          badgeName: `Plate Builder`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L02.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L02] Loaded: "The Food Plate: Building Balanced Meals" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l02-s1-balanced-plate.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-s2-color-variety.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-s3-breakfast-fuels-brain.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-s4-sustaining-snacks.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-s5-sometimes-foods-belong.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-s6-pattern-not-rule.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L02] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L02] One or more magazine assets missing'));
}
