// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L15 — The Musculoskeletal System: Bones and Muscles
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L15 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-15`,
      title:     `The Musculoskeletal System: Bones and Muscles`,
      duration:  12,
      xpReward:  50,
      badge:     `strong-body`,
      badgeName: `Strong Body`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `There are 206 bones in your body, {name}, and more than 600 muscles — and together they form a structure of extraordinary sophistication. Your skeleton isn't just a frame. Your muscles aren't just tools for movement. The whole system responds to how you use it: bones grow denser with load, muscles strengthen with use. What you do now — at your age — genuinely shapes the musculoskeletal system you'll carry for the rest of your life. Today we're going to understand how it works, what it needs, and what it can do. You might look at your own body a little differently after this.`,
          headline: `The Musculoskeletal System: Bones and Muscles`,
          subtitle: `You're walking around in a machine of 206 bones and over 600 muscles — and what you do now to build them is an investment you carry for life`,
          visual: `/explorer-assets/wellness/l15-welcome.png`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your skeleton: more than just structure`,
          paragraphs: [
            `Your 206 bones do far more than hold you up. They **protect vital organs** — the skull protects your brain, the ribcage protects your heart and lungs. They **produce blood cells in their marrow** — both red blood cells that carry oxygen and immune cells that protect you. They **store minerals**, especially calcium and phosphorus, that the rest of your body draws on as needed. And bones are not static — they are constantly being broken down and rebuilt through a process called **bone remodelling**. About **10% of your skeleton is replaced each year**. Your skeleton is a living, dynamic system.`,
          ],
          image: `/explorer-assets/wellness/l15-magazine-1.png`,
          imageCaption: `Bones protect organs, produce blood cells, store minerals, and are constantly being rebuilt`,
          vocab: [
            { word: `bone remodeling`, definition: `The continuous process of old bone being broken down and new bone being built — meaning your skeleton is always renewing itself, about 10% replaced each year.`, audioPrompt: `Your skeleton isn't a fixed structure, {name} — it's in constant renewal. Specialized cells called osteoclasts break down old bone while osteoblasts build new bone in its place. This remodeling is how bones respond to the demands placed on them, repair microscopic damage, and grow denser with regular weight-bearing exercise. About ten percent of your skeleton is replaced every year.` },
            { word: `marrow`, definition: `The soft tissue inside your bones — which produces red blood cells, white blood cells, and platelets, making your bones essential to your immune system and oxygen delivery.`, audioPrompt: `Deep inside your bones is where new blood is made, {name}. Bone marrow produces red blood cells that carry oxygen, white blood cells that fight infection, and platelets that stop bleeding — about two million new red blood cells every second. Your bones are not just a frame. They're an active, living factory running continuously inside you.` },
            { word: `mineral`, definition: `An element stored in your bones — particularly calcium and phosphorus — that gives bones their hardness and is released into the bloodstream when the rest of your body needs it.`, audioPrompt: `Your bones are your body's mineral bank, {name}. Calcium and phosphorus stored in bone tissue give your skeleton its hardness and strength. When blood calcium levels drop, your body draws on those reserves — pulling what it needs from bone. Building strong bones now is building a larger reserve to draw on for the rest of your life. The more you deposit now, the more you have.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Building bone density in childhood`,
          paragraphs: [
            `Childhood and adolescence are the **critical window** for building **bone density** — the amount of mineral packed into your bones. Peak bone mass is typically reached by your late 20s. After that, you can maintain or slowly lose bone density, but you cannot significantly increase it. This means the bone you build right now — through weight-bearing exercise, calcium, and vitamin D — is the bone you'll carry for the rest of your life. What you do now genuinely matters in a way that nothing later can fully replace. It's one of the most compelling reasons to take care of your body during childhood.`,
          ],
          image: `/explorer-assets/wellness/l15-magazine-2.png`,
          imageCaption: `Peak bone density is built by your late 20s — what you build now is what you carry for life`,
          vocab: [
            { word: `bone density`, definition: `The amount of mineral packed into your bones — greater density means stronger, more resilient bones that are less likely to fracture and less likely to weaken with age.`, audioPrompt: `Bone density is like the thickness of the walls of a building, {name}. Denser bones are stronger, more resistant to fracture, and better equipped to last a lifetime. The density you build now — through weight-bearing exercise, calcium, and vitamin D — is the bank balance you'll carry into adulthood. After your late twenties, you can maintain it but can't significantly increase it. What you build now is what you keep.` },
            { word: `peak bone mass`, definition: `The maximum bone density your skeleton reaches — typically in your late 20s — after which maintenance is possible but major increases are not.`, audioPrompt: `Peak bone mass is the highest point of bone density your body will reach, {name}. It's determined largely by what you do during childhood and adolescence. After your late twenties, that peak is essentially set. This is one of the most compelling reasons why physical activity, calcium, and vitamin D matter so much right now — not just for today, but for the decades ahead.` },
            { word: `weight-bearing`, definition: `Exercise that puts your body's weight through your bones — like running, jumping, and sports — which signals bones to grow denser and stronger.`, audioPrompt: `Weight-bearing activity is what tells your bones to grow, {name}. When you run, jump, or play a sport, the impact travels through your skeleton and signals bone-building cells to lay down more mineral. Swimming is wonderful for cardiovascular health but doesn't provide this signal — the bones need to feel the load. That's why running and jumping are especially valuable during childhood, when bone density is still being built.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Your muscles: types and function`,
          paragraphs: [
            `You have three types of muscle. **Skeletal muscle** (voluntary) — attached to bones via tendons, these are the muscles you consciously control for movement. **Smooth muscle** (involuntary) — lines your digestive tract, blood vessels, and organs, working automatically without any conscious effort. **Cardiac muscle** — found only in your heart, it never fatigues and works continuously for your entire life. Skeletal muscles work in **pairs** — when one contracts, its partner relaxes. Your bicep contracts to bend your arm; your tricep relaxes. When you straighten your arm, they swap roles. Every movement you make involves this coordinated partnership.`,
          ],
          image: `/explorer-assets/wellness/l15-magazine-3.png`,
          imageCaption: `Skeletal, smooth, and cardiac muscle — each type with its own role, working in precise coordination`,
          vocab: [
            { word: `skeletal muscle`, definition: `Voluntary muscle attached to bones via tendons — the muscles you consciously control for all movement, from walking to lifting to sport.`, audioPrompt: `Every movement you make, {name}, is powered by skeletal muscle. These are the muscles you can feel and control — bending your arm, kicking a ball, turning your head. They attach to your bones via tendons and work in pairs: one contracts while the other relaxes, allowing smooth, coordinated movement. Over 600 of them working together make up most of the physical capability your body has.` },
            { word: `cardiac muscle`, definition: `The unique muscle of the heart — which never fatigues, never rests, and works continuously from before birth until the last moment of life.`, audioPrompt: `Cardiac muscle is extraordinary, {name}. It's found only in your heart, and unlike every other muscle in your body, it never fatigues and never needs to rest. It has been contracting continuously since before you were born — and it will keep going for your entire life. No other muscle in your body has this combination of endurance and reliability. Your heart is quite literally remarkable.` },
            { word: `tendon`, definition: `A tough cord of tissue that connects a muscle to a bone — transmitting the force of muscle contractions to produce movement.`, audioPrompt: `Tendons are the connectors in your movement system, {name}. When a muscle contracts, the force needs to travel to the bone to create movement — and tendons are what make that transmission possible. Strong, flexible tendons are important for injury prevention, which is why warming up before vigorous activity and cooling down afterward supports the health of your whole musculoskeletal system.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Maintaining musculoskeletal health`,
          paragraphs: [
            `For **strong bones**: weight-bearing exercise (running, jumping, sports) — the impact signals bones to grow denser and stronger; adequate calcium (dairy, leafy greens, fortified foods); and vitamin D (sunlight, fatty fish) which is needed to absorb calcium properly. For **strong muscles**: progressive resistance (bodyweight exercises, sports, lifting), adequate protein for repair, and **rest between sessions** — muscles grow during recovery, not during exercise itself. For **joint health**: stay flexible through stretching, and avoid overuse injuries by varying the activities you do rather than repeating the same movement patterns every day.`,
          ],
          image: `/explorer-assets/wellness/l15-magazine-4.png`,
          imageCaption: `Weight-bearing exercise, calcium, vitamin D, protein, and rest — the foundations of musculoskeletal health`,
          vocab: [
            { word: `calcium`, definition: `The main mineral your bones are built from — found in dairy products, leafy greens, and fortified foods, and requires Vitamin D to be properly absorbed.`, audioPrompt: `Calcium is the primary building material of bone, {name}. Without enough of it — through dairy, leafy greens, or fortified foods — your body can't build or maintain the bone density it needs. But calcium alone isn't enough: Vitamin D is what allows calcium to be absorbed from your digestive system into your bloodstream. Both together, alongside weight-bearing activity, are what bone-building requires.` },
            { word: `recovery`, definition: `The period of rest between exercise sessions — when muscle repair actually happens and muscles grow stronger than before.`, audioPrompt: `Muscles don't grow during exercise, {name} — they grow during recovery. Exercise creates small amounts of muscle fiber damage. Rest is when your body repairs those fibers, slightly stronger than before. That's why rest between sessions isn't optional — it's the actual mechanism of getting stronger. Exercise is the signal. Recovery is where the adaptation happens.` },
            { word: `joint`, definition: `Where two bones meet — cushioned by cartilage and kept mobile by synovial fluid, and supported by maintaining flexibility through regular varied movement.`, audioPrompt: `Joints are where your skeleton's movement happens, {name} — the connections between bones that let you bend, rotate, and flex. They're cushioned by cartilage and kept lubricated by fluid. Varied movement, stretching, and avoiding overuse of any single pattern all support healthy joints. A joint that only ever moves in one way tends to become less flexible and more prone to strain over time.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `builds`,
              label: `💪 Builds Strong Bones and Muscles`,
              color: `#34D399`,
            },
            {
              id: `misses`,
              label: `🛋️ Misses the Opportunity to Build`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l15-g1`,
              image: `l15-game-1.png`,
              label: `Running, jumping, and climbing — activities that put healthy impact through your bones.`,
              matchPhrase: `Weight-bearing activities that put force through your bones signal them to grow denser and stronger — this is the most direct way to build bone during childhood.`,
              correctMatch: `builds`,
            },
            {
              id: `l15-g2`,
              image: `l15-game-2.png`,
              label: `Eating calcium-rich foods and getting some sunlight regularly for vitamin D.`,
              matchPhrase: `Calcium is the main mineral your bones are made of, and vitamin D is needed to absorb it — both are essential for the bone-building that happens during childhood and adolescence.`,
              correctMatch: `builds`,
            },
            {
              id: `l15-g3`,
              image: `l15-game-3.png`,
              label: `Spending most of every day sitting or lying down without physical activity.`,
              matchPhrase: `Bones and muscles respond to the demands placed on them — if you rarely move, they receive very little signal to grow stronger. Consistent movement is what drives the adaptation.`,
              correctMatch: `misses`,
            },
            {
              id: `l15-g4`,
              image: `l15-game-4.png`,
              label: `Only ever doing gentle, low-impact activities and avoiding anything that challenges your strength.`,
              matchPhrase: `Gentle movement has real value — but building bone density and muscle strength requires activities that put real load on them. The challenge is what triggers the growth.`,
              correctMatch: `misses`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l15-q1`,
              format: `multiple-choice`,
              question: `What do your bones do besides supporting your body structure?`,
              options: [
                `Generate electrical signals for the nervous system`,
                `Protect organs, produce blood and immune cells in their marrow, and store minerals like calcium and phosphorus`,
                `Filter toxins from the blood alongside the liver`,
                `Store fat for energy use during fasting`,
              ],
              correctIndex: 1,
              explanation: `Bones are multi-functional organs, not just a frame. They protect vital organs (skull, ribcage), produce red blood cells and immune cells in their marrow, and store the body's calcium and phosphorus reserves. They're also constantly being broken down and rebuilt — about 10% of the skeleton is replaced each year through a process called bone remodelling.`,
            },
            {
              id: `l15-q2`,
              format: `multiple-choice`,
              question: `Why is childhood such a critical window for bone health?`,
              options: [
                `Because childhood bones are weaker and more prone to injury than adult bones`,
                `Because adults can easily increase bone density through diet alone`,
                `Peak bone mass is reached by your late 20s — you cannot significantly increase it after that, so what you build now is what you carry`,
                `Because children exercise more naturally and their bones respond faster`,
              ],
              correctIndex: 2,
              explanation: `Peak bone density is typically reached by the late 20s — and after that point, the most you can do is maintain what you have. This means the bone built during childhood and adolescence through weight-bearing exercise, calcium, and vitamin D is genuinely irreplaceable. What you build now is what you'll carry through your adult life.`,
            },
            {
              id: `l15-q3`,
              format: `multiple-choice`,
              question: `How do muscles work in pairs?`,
              options: [
                `Both muscles in a pair contract simultaneously for maximum force`,
                `When one contracts to create movement, its partner relaxes — and they swap roles for the opposite movement`,
                `Muscles only work in pairs during heavy lifting — light movements use single muscles`,
                `Pairs of muscles alternate contracting with every heartbeat`,
              ],
              correctIndex: 1,
              explanation: `Skeletal muscles work in opposing pairs — one contracts while the other relaxes, and they swap roles for the opposite movement. Your bicep and tricep are the classic example: the bicep contracts to bend the elbow, the tricep relaxes. To straighten the arm, they reverse. This paired coordination is happening throughout your entire body with every movement you make.`,
            },
            {
              id: `l15-q4`,
              format: `true-false`,
              question: `Bones are not static — they're constantly being broken down and rebuilt, with about 10% of your skeleton replaced each year.`,
              correctAnswer: true,
              explanation: `True. Bone remodelling is an ongoing process — specialised cells called osteoclasts break down old bone while osteoblasts build new bone in its place. This process allows bones to respond to the demands placed on them (growing stronger with weight-bearing exercise) and to repair microscopic damage before it becomes a problem.`,
            },
            {
              id: `l15-q5`,
              format: `fill-blank`,
              question: `Weight-bearing exercises like running and jumping put healthy ___ on your bones — signalling them to grow denser and stronger.`,
              options: [
                `pressure`,
                `rest`,
                `damage`,
                `weight`,
              ],
              correctIndex: 0,
              explanation: `The pressure and impact of weight-bearing exercise is actually what stimulates bone growth. When your bones experience these forces, bone-building cells get a signal to lay down more mineral and increase density. This is why running, jumping, and sports are so valuable for bone health during childhood — gentle activities like swimming, while great for cardiovascular health, don't provide this bone-building pressure signal.`,
            },
            {
              id: `l15-q6`,
              format: `multiple-choice`,
              question: `What is the most effective approach to building and maintaining strong muscles?`,
              options: [
                `Do as much exercise as possible every day without rest`,
                `Focus only on one type of movement to build strength in that area`,
                `Regular resistance activities, adequate protein, and recovery time between sessions — because muscles grow during rest, not during exercise itself`,
                `Stretch every day and avoid high-impact activities that could cause injury`,
              ],
              correctIndex: 2,
              explanation: `Muscle growth happens during recovery, not during exercise. Exercise creates small amounts of muscle fibre damage — recovery is when the body repairs and rebuilds those fibres slightly stronger than before. This is why rest between sessions is essential, not optional. Combine this with adequate protein (the building material) and consistent progressive challenge, and muscles will grow and strengthen over time.`,
            },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Sports scientists, physiotherapists, and bone health researchers all point to the same window: the bone density built during childhood and adolescence is the single most important factor in long-term skeletal health. What you do now is not just good for today — it's an investment in the body you'll have for decades.`,
          familyAdventure: `Do a family bodyweight workout together — no equipment needed. Find a bodyweight workout online or make your own with push-ups, squats, lunges, jumping jacks, and planks. Modify for different fitness levels so everyone can participate. Add music, cheer each other on, and commit to doing it a few times a week. Notice what changes over the coming weeks.`,
          creativePrompt: `Test your current baseline: how many push-ups can you do in a row? How long can you hold a plank? How many seconds can you balance on one foot with eyes closed? Can you touch your toes? Record your scores, try a bodyweight workout a few times this week, and retest. Notice what changes.`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that the 206 bones and 600+ muscles in your body are working in extraordinary coordination every moment — and that what you do now to challenge and nourish them is an investment you'll carry for life. Your body is built to move and grow. Terra is so proud to walk this path with you.`,
          badge: `strong-body`,
          badgeName: `Strong Body`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L15;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L15.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L15] Loaded: "The Musculoskeletal System: Bones and Muscles" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l15-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L15] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L15] One or more magazine assets missing'));
}
