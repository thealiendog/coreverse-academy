// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L13 — Sunlight, Nature & Outside
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real research on sunlight and circadian rhythm (Andrew
//            Huberman's work), attention restoration theory (Rachel & Stephen
//            Kaplan), forest bathing research (Japanese "shinrin-yoku"
//            studies), vitamin D.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 ways to weave nature into daily life, MORNING
//            to OUTSIDE-AS-LIFESTYLE)
// SCOPE: humans evolved outdoors; sunlight regulates everything; nature
//        restores attention/mood/nervous system; small daily doses
//        compound; outside is medicine
// VOICE: Terra = the wolf at home outside, slightly amused that humans
//        have forgotten how much they need to be outside
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-13`,
      title: `Sunlight, Nature & Outside`,
      duration: 18,
      xpReward: 75,
      badge: `nature-keeper`,
      badgeName: `Nature Keeper`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we talk about something I, as a wolf, find a little funny: humans have forgotten how much they need to be OUTSIDE. Kids today spend more time indoors than any generation in human history. And researchers have learned this comes with real costs to mood, sleep, focus, immune system, and even eyesight. Today, you learn the science of why SUNLIGHT, NATURE, and BEING OUTSIDE are some of the most powerful (and free) wellness tools you have. Take a breath of fresh air if you can, and let's begin.`,
          headline: `Sunlight, Nature & Outside`,
          subtitle: `The most underused wellness medicine. Completely free`,
          visual: `/ue-assets/lw/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Humans Were Made for Outside`,
          paragraphs: [
            `For hundreds of thousands of years, humans spent most of their waking hours OUTSIDE. Walking, gathering, hunting, sitting around fires, looking at the sky. Our bodies evolved in those conditions. Our circadian rhythm (L02!) is set by sunlight. Our vitamin D comes from sun on skin. Our nervous systems calm in green spaces. Our eyes were designed to look at long distances, not just close-up at screens. Our immune systems are influenced by exposure to soil and outdoor air. In every measurable way, our bodies expected to be OUTSIDE most of the time.`,
            `Now consider modern life. Researchers studying kids found that the AVERAGE American kid spends LESS THAN 10 MINUTES a day outside in real free play, while spending many HOURS indoors at school, on screens, and in cars. That's a massive shift from how human bodies are designed to function. And the costs are measurable: kids today have higher rates of myopia (nearsightedness, partly from too much close-up indoor vision), worse sleep (less sunlight to set the circadian rhythm), more anxiety and depression (less nature exposure), more vitamin D deficiency, and weaker immune systems. This isn't the kids' fault, it's how modern life is structured. But knowing it lets you do something about it.`,
          ],
          image: `/ue-assets/lw/l13-s1-made-for.webp`,
          imageCaption: `Humans evolved outside. Modern kids average under 10 minutes of real free outside time per day.`,
          vocab: [
            { word: `outdoor disconnection`,
              definition: `The modern shift where kids and adults spend most of their time indoors at screens, school, and cars, far less than humans evolved for. Causes measurable costs: worse sleep, more anxiety, weaker immunity, more vision problems, vitamin D deficiency. The fix: more outside time.`,
              audioPrompt: `Outdoor disconnection is the modern shift where kids and adults spend most of their time indoors, {name}. For hundreds of thousands of years, humans spent most of their waking hours outside. Our circadian rhythm is set by sunlight. Our vitamin D comes from sun on skin. Our nervous systems calm in green spaces. Researchers found that the average American kid spends less than 10 minutes a day outside in real free play. Causes measurable costs, worse sleep, more anxiety, weaker immunity, more vision problems, vitamin D deficiency.` },
            { word: `nature deficit`,
              definition: `The real physical state many modern kids live in: too little outside time, causing measurable costs — worse sleep, more anxiety, weaker immunity, increased myopia, vitamin D deficiency. Not just a mood. A measurable state with real consequences. More outside time reverses it.`,
              audioPrompt: `Nature deficit is the real state many modern kids live in, spending so little time outside that their bodies and brains experience measurable costs, {name}. Worse sleep because circadian rhythms aren't properly set by sunlight. More anxiety and depression because nature exposure is missing. Weaker immunity from less outdoor air and soil contact. Increased myopia from too much close-up indoor vision. Vitamin D deficiency from too little sun on skin. Nature deficit isn't a mood. It's a measurable physical state with real consequences that more outside time reverses.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Sunlight Is So Powerful`,
          paragraphs: [
            `Sunlight is one of the most studied wellness tools, and the findings are remarkable. MORNING SUNLIGHT especially, even just 10-15 minutes of natural light in your eyes early in the day, sets your CIRCADIAN RHYTHM (L02!) for better sleep that night, more stable energy across the day, and better mood. Researcher Andrew Huberman has called morning sunlight "the single most powerful free tool for setting your biology" each day. The science: sunlight in your eyes triggers signals that tell your brain "it's daytime now," which starts a cascade of hormones that lift mood, sharpen focus, and time your sleep cycle correctly.`,
            `Sunlight on skin produces VITAMIN D, a hormone-like nutrient your body needs for strong bones, healthy immune function, mood regulation, and growth. Most American kids today are LOW in vitamin D, and supplements help, but real sunlight (15-30 minutes a day, depending on skin tone and season) is the natural source. Be sun-smart on long bright days (sunscreen, hats, shade when needed), but most kids get FAR too little sun, not too much. Sunlight also boosts SEROTONIN (the natural mood-stabilizing brain chemical), which is part of why people often feel lower in winter when there's less sun, and brighter in summer.`,
          ],
          image: `/ue-assets/lw/l13-s2-sunlight.webp`,
          imageCaption: `Morning sunlight sets your day. Vitamin D from sun. Serotonin boost. Most kids get too little, not too much.`,
          vocab: [
            { word: `morning sunlight`,
              definition: `10-15 minutes of natural daylight in your eyes early in the day. Sets your circadian rhythm for better sleep that night, more stable energy, and better mood. Andrew Huberman calls it "the single most powerful free tool for setting your biology" each day. Even cloudy days work.`,
              audioPrompt: `Morning sunlight means 10 to 15 minutes of natural daylight in your eyes early in the day, {name}. Researcher Andrew Huberman has called morning sunlight the single most powerful free tool for setting your biology each day. The science is that sunlight in your eyes triggers signals telling your brain it's daytime now. This starts a cascade of hormones that lift mood, sharpen focus, and time your sleep cycle correctly. Even cloudy days work. Get outside early and your day flows better.` },
            { word: `vitamin D`,
              definition: `A hormone-like nutrient your body produces when sunlight hits your skin. Needed for strong bones, immune function, mood regulation, and growth. Most American kids today are low in it. Real sunlight (15-30 minutes a day) is the natural source. Sunlight also boosts serotonin, your brain's natural mood stabilizer.`,
              audioPrompt: `Vitamin D is a hormone-like nutrient your body produces when sunlight hits your skin, {name}. Your body needs it for strong bones, healthy immune function, mood regulation, and growth. Most American kids today are low in vitamin D, often because they spend so little time outside. Supplements can help, but real sunlight, 15 to 30 minutes a day depending on skin tone and season, is the natural source. Sunlight also boosts serotonin, your brain's natural mood stabilizer.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Nature Specifically Heals`,
          paragraphs: [
            `Beyond just being outside, time in GREEN SPACES (parks, trees, forests, gardens, near water) has its own powerful effects. Researchers Rachel and Stephen KAPLAN studied this and developed ATTENTION RESTORATION THEORY. They found that nature gives your tired brain a kind of rest that screens, classrooms, and even reading don't provide. Modern environments demand a lot of focused attention (which exhausts your brain). Nature offers what they called "soft fascination," a gentle, restful kind of attention (watching leaves move, clouds drift, water flow) that lets your focused-attention systems RECOVER.`,
            `Even short doses of green time make measurable differences. Researchers found that just 20 minutes in a park lowers stress hormones, calms the nervous system, improves attention, and lifts mood. Longer nature time (an hour or more in real forest or wilderness) has even bigger effects. Japanese researchers studying "SHINRIN-YOKU" (forest bathing) measured significant immune system boosts, lower blood pressure, reduced anxiety, and better sleep from regular forest time. You don't need to be in remote wilderness. A neighborhood park, a backyard with trees, a walk where you can see sky and plants, all of these count. Nature works through your senses in ways indoor environments simply can't. The more you have, the better.`,
          ],
          image: `/ue-assets/lw/l13-s3-nature.webp`,
          imageCaption: `Nature gives "soft fascination" that restores tired brains. Even 20 minutes in a park measurably helps.`,
          vocab: [
            { word: `attention restoration`,
              definition: `Kaplan's theory that nature gives your tired brain a kind of rest that screens and indoor work don't provide. Nature offers "soft fascination" (gentle, restful attention to leaves, clouds, water) that lets focused-attention systems recover. Even 20 minutes in a park measurably helps.`,
              audioPrompt: `Attention restoration is Rachel and Stephen Kaplan's theory that nature gives your tired brain a kind of rest that screens and classrooms don't provide, {name}. Modern environments demand a lot of focused attention which exhausts your brain. Nature offers what they called soft fascination, a gentle, restful kind of attention, watching leaves move, clouds drift, water flow, that lets your focused-attention systems recover. Even short doses make measurable differences. Researchers found that just 20 minutes in a park lowers stress hormones, calms the nervous system, and improves attention.` },
            { word: `shinrin-yoku`,
              definition: `Japanese forest bathing practice — deliberately spending time in trees and woodland to receive nature's healing benefits. Researchers measured significant immune boosts, lower blood pressure, reduced anxiety, and better sleep from regular forest time. Any significant plant life counts, not just dense wilderness.`,
              audioPrompt: `Shinrin-yoku is the Japanese practice of forest bathing, spending time in trees and woodland to deliberately receive nature's healing benefits, {name}. Japanese researchers measuring this found significant immune system boosts, lower blood pressure, reduced anxiety, better sleep, and improved mood from regular forest time. You don't need dense wilderness. A neighborhood park with trees, a trail, anywhere with significant plant life counts. The practice is simply being present in nature, not hiking or exercising, just being there with all your senses.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Weaving Outside Into Daily Life`,
          paragraphs: [
            `Here's the good news: you don't need wilderness adventures to benefit. You just need to WEAVE outside into your daily life. Simple ways to do this. Step outside FIRST THING in the morning, even for 5 minutes, the morning sunlight transforms your day. Take BREAKS outside when possible (walk between school subjects, eat lunch outside, do homework on a porch). MOVE outside (walk to a friend's house instead of driving, bike, play, hike). Find ONE place you love (a tree, a park, a creek, a quiet outdoor spot) and visit it regularly. Put hands on the EARTH sometimes, walk barefoot in grass, dig in soil, touch trees, the connection is real.`,
            `Try these UPGRADES on regular activities. Talk on the phone? Walk outside while you do. Eat lunch? Take it outside sometimes. Do homework? Try a porch or backyard. Hang out with friends? Suggest the park instead of indoors. None of these need to be perfect or every day. Just nudging your life toward MORE outside changes everything over time. Terra's first teaching about nature: you were built for this. Your body, brain, nervous system, immune system, and soul function better when they're regularly exposed to sun, sky, trees, dirt, and outside air. Modern life has separated humans from this, but reconnecting is easy and free. Get outside. Even small doses. Watch your sleep, mood, focus, and energy quietly transform. This is medicine that grows on trees, in skies, and under your feet.`,
          ],
          image: `/ue-assets/lw/l13-s4-weaving.webp`,
          imageCaption: `Step outside first thing. Eat outside. Walk to places. Find a favorite spot. Touch earth.`,
          vocab: [
            { word: `outside as default`,
              definition: `The practice of nudging your daily life toward MORE outside time wherever it fits — morning step outside, lunches outside, walks instead of rides, calls outside, homework on porches. Small daily upgrades compound. Outside as a default mindset, not a special occasion.`,
              audioPrompt: `Outside as default is the practice of nudging your daily life toward more outside time wherever it fits, {name}. Step outside first thing in the morning, even for 5 minutes. Take breaks outside when possible. Move outside, walk to a friend's house, bike, play, hike. Find one place you love and visit regularly. Try upgrades on regular activities, walk during phone calls, eat lunch outside sometimes, do homework on a porch. None need to be perfect or daily. Just nudging your life toward more outside changes everything over time.` },
            { word: `green time`,
              definition: `Any regular time spent in natural settings with plants, sky, trees, or open space — as a daily habit rather than an occasional event. One of the most effective and underused wellness interventions. Small daily doses compound into real improvements in mood, sleep, attention, and immunity. Requires no equipment, money, or travel.`,
              audioPrompt: `Green time is any regular time spent in natural settings with plants, sky, trees, or open space, as a daily habit rather than an occasional event, {name}. Researchers studying kids have found that green time is one of the most effective and underused wellness interventions available. Even small daily doses of green time, a park, a yard, a trail, compound over time into significant improvements in mood, sleep, attention, stress, and immunity. It doesn't require equipment, money, or travel. Just going outside regularly.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put weaving outside into daily life in order, {name}. Here are five ways of bringing nature back into your day, from MORNING (foundation) to OUTSIDE-AS-LIFESTYLE (outermost). Use the arrows to arrange them.`,
          items: [
            { id: `step-morning`,     label: `MORNING SUNLIGHT. Step outside for 5-15 minutes early in the day. Sets your circadian rhythm for better sleep, mood, and energy ALL day`,                                       position: 1 },
            { id: `step-breaks`,      label: `OUTSIDE BREAKS. Take short outside breaks during the day. Eat lunch outside, walk between activities, look at sky during school breaks`,                                       position: 2 },
            { id: `step-real-nature`, label: `REAL NATURE TIME. Find a green space (park, trees, garden) and spend 20+ minutes regularly. Attention restoration and stress reduction happen here`,                          position: 3 },
            { id: `step-earth`,       label: `TOUCH THE EARTH. Barefoot in grass sometimes, hands in soil when gardening, touch tree bark, swim in lakes. Direct earth contact has real benefits`,                          position: 4 },
            { id: `step-lifestyle`,   label: `OUTSIDE AS DEFAULT LIFESTYLE. Pick outside when given a choice. Walk vs. drive, park hangs vs. indoor hangs, hiking vs. mall, outdoor activities as a way of life`,        position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of bringing outside back into your life: morning sunlight, outside breaks, real nature time, touching the earth, and outside as a default lifestyle. Each one small and free. Together they transform your sleep, mood, focus, immunity, and joy. Your body remembers what to do with sun, sky, trees, and dirt. Give it more of all of them.`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `How much time does the AVERAGE American kid spend OUTSIDE in real free play each day?`,
              options: [
                `Hours and hours`,
                `Less than 10 minutes. A massive shift from how human bodies evolved`,
                `About 2-3 hours`,
                `30 minutes`,
              ],
              correctIndex: 1,
              explanation: `The average American kid spends LESS THAN 10 MINUTES a day outside in real free play. This is a massive shift from how human bodies evolved (humans spent most waking hours outside for hundreds of thousands of years). The costs are measurable: worse sleep, more anxiety, weaker immunity, more vision problems.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `What does MORNING SUNLIGHT do for your body?`,
              options: [
                `Nothing important`,
                `10-15 minutes of natural daylight in your eyes EARLY in the day. Sets your CIRCADIAN RHYTHM for better sleep, mood, and energy all day`,
                `Just makes you squint`,
                `Only matters in summer`,
              ],
              correctIndex: 1,
              explanation: `Morning sunlight (10-15 minutes of natural light in your eyes early in the day) sets your circadian rhythm. This means better sleep that night, more stable energy across the day, and better mood. Researcher Andrew Huberman calls it "the single most powerful free tool for setting your biology" each day. Even cloudy days work.` },

            { id: `l13-q3`, format: `multiple-choice`,
              question: `What does sunlight on SKIN produce?`,
              options: [
                `Nothing helpful`,
                `VITAMIN D. A hormone-like nutrient your body needs for strong bones, immune function, mood, and growth. Most kids today are LOW in vitamin D`,
                `Just a tan`,
                `Random chemicals`,
              ],
              correctIndex: 1,
              explanation: `Sunlight on skin produces vitamin D, a hormone-like nutrient your body needs for strong bones, healthy immune function, mood regulation, and growth. Most American kids today are LOW in vitamin D. Be sun-smart on long bright days, but most kids get FAR too little sun, not too much.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `What is ATTENTION RESTORATION THEORY?`,
              options: [
                `A type of yoga`,
                `Kaplan's research showing that NATURE gives your tired brain rest that screens, classrooms, and even reading don't provide. "Soft fascination" lets focus systems recover`,
                `Random theory`,
                `Imaginary`,
              ],
              correctIndex: 1,
              explanation: `Rachel and Stephen Kaplan developed attention restoration theory. Modern environments demand focused attention (which exhausts your brain). Nature offers "soft fascination" (gentle, restful attention to leaves, clouds, water) that lets your focused-attention systems recover. Even 20 minutes in a park measurably helps.` },

            { id: `l13-q5`, format: `multiple-choice`,
              question: `What did researchers find about just 20 minutes in a PARK?`,
              options: [
                `Nothing measurable`,
                `Lowers stress hormones, calms the nervous system, improves attention, lifts mood. Real measurable changes from short doses of nature`,
                `Makes you tired`,
                `Random effects`,
              ],
              correctIndex: 1,
              explanation: `Just 20 minutes in a park lowers stress hormones, calms the nervous system, improves attention, and lifts mood. Real, measurable changes from short doses. Longer time (an hour+ in real forest) has even bigger effects. Japanese researchers studying "shinrin-yoku" (forest bathing) measured immune boosts, lower blood pressure, reduced anxiety from regular forest time.` },

            { id: `l13-q6`, format: `true-false`,
              question: `True or false: You need to be in remote wilderness for nature to help you.`,
              correctAnswer: false,
              explanation: `False. You don't need wilderness. A neighborhood park, a backyard with trees, a walk where you can see sky and plants, all count. Nature works through your senses in ways indoor environments simply can't. The more you have, the better, but small doses matter too.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `What are SIMPLE ways to weave outside into daily life?`,
              options: [
                `Plan expensive trips`,
                `Step outside first thing in the morning, take outside breaks, eat lunch outside, walk to places, find a favorite spot, touch the earth sometimes`,
                `Move to the mountains`,
                `Quit school`,
              ],
              correctIndex: 1,
              explanation: `Simple weaving: step outside first thing in the morning, take outside breaks, eat lunch outside when possible, walk to places instead of driving, find ONE outdoor spot you love and visit regularly, touch the earth sometimes (barefoot grass, hands in soil, tree bark). Small daily upgrades compound.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about nature?`,
              options: [
                `Avoid the outside`,
                `You were built for this. Body, brain, nervous system, immune system, and soul function better with regular sun, sky, trees, dirt, outside air. Modern life has separated humans from it. Reconnecting is easy and free`,
                `Nature doesn't matter`,
                `Stay indoors`,
              ],
              correctIndex: 1,
              explanation: `You were built for this. Your body, brain, nervous system, immune system, and soul function better when regularly exposed to sun, sky, trees, dirt, and outside air. Modern life has separated humans from this, but reconnecting is easy and free. Get outside, even small doses. Medicine that grows on trees.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Take a fresh-air breath, {name}, even if you're inside, imagine clean outdoor air filling your lungs. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Honestly, how much real outside time do you get most days? When was the last time you were outside doing nothing in particular?` },
            { id: `r2`, text: `Do you have an outdoor place you love (a tree, a park, a backyard spot, near water)? If yes, describe it. If no, where might you find one?` },
            { id: `r3`, text: `Of the five ways to weave outside in (morning sunlight, breaks, real nature, touch earth, default lifestyle), which one would help YOU most this week?` },
            { id: `r4`, text: `What might shift in your sleep, mood, or focus if you spent significantly more time outside?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Research on nature and human health is one of the most exciting and consistent areas in modern wellness science. Studies have linked outdoor time to better mood, better sleep, stronger immune function, sharper attention, lower anxiety and depression, better eyesight, and even lower mortality rates. Time in nature isn't a luxury, it's medicine. The fact that modern kids spend so little time outside compared to how humans evolved isn't a small problem, it's a major one for kid health and development. Terra's note: the wolves in my heart find this funny. You humans have everything you could need for wellness, sun, sky, trees, dirt, fresh air, right outside your door, for free. And you've forgotten to use it. Don't forget. Step outside every morning. Take real breaks. Find a green spot you love. Touch the earth. Choose outside as your default. Your body and mind will reward you in ways no supplement or product can replicate. This is wellness wisdom older than humanity itself, and it's still the truest thing there is.`,
          familyAdventure: `Family Outside Time. As a family, commit to ONE outdoor practice this week. Maybe a morning walk together (5-15 minutes, sets everyone's circadian rhythm). Maybe eating dinner outside one evening. Maybe a weekend hike or park visit. Maybe just stepping outside together for 5 minutes before bed to look at the stars or moon. Adults model the practice too. Building outside time into family rhythm transforms everyone's wellness over time, and creates some of the most cherished family memories. A family that gets outside together stays well together.`,
          creativePrompt: {
            intro: `Write about your relationship with being outside — what you love, what you miss, and how you want to reconnect.`,
            floor: `Write at least 5 sentences. Describe a memorable outdoor experience and one way to get more outside time.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece about outside as wellness medicine in your life.`,
            open: `Write as much as you want. Write a full piece about your relationship with being outside. Describe a memorable outdoor experience (or several) where you felt really alive, calm, connected, or yourself. Reflect on how much real outside time you currently get, and what might be different if you got more. Describe the kind of outdoor life you want to build, morning sunlight, regular green spaces, touching the earth, outside as a default. Name one outdoor spot you love or want to find, and what you'd do there. End with one specific commitment for more outside time this week. Make it vivid, hopeful, and personal.`,
            frames: [
              `A memorable outdoor experience was ___.`,
              `When I'm outside, I usually feel ___.`,
              `An outdoor spot I love (or want to find) is ___.`,
              `The kind of outdoor life I want is ___.`,
              `My specific commitment this week is ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Strong, alive work, {name}. You now understand one of the most underused wellness tools you have, being OUTSIDE. You know about morning sunlight, vitamin D, attention restoration, the measurable effects of even 20 minutes in nature, and the five ways to weave outside into daily life. Step outside. Touch the earth. Find your spots. This is medicine that grows around you, free for life. Next, we explore something equally powerful for your health, your real CONNECTIONS with the people you love. FRIENDS, FAMILY & YOUR HEALTH. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `nature-keeper`,
          badgeName: `Nature Keeper`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L13 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
