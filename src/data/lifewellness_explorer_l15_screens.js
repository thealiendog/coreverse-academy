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
          headline: `206 Bones, 600 Muscles`,
          paragraphs: [
            `There are **206 bones** in your body and more than **600 muscles** — and together they form your **musculoskeletal system**: a machine of extraordinary sophistication. Your skeleton isn't just a frame that holds you up. Your muscles aren't just tools that make you move. They work together as a single, integrated system — one of the most complex and well-engineered structures in the natural world.`,
            `What makes this system remarkable is how it **responds** to what you do. Bones grow denser when you load them. Muscles strengthen when you challenge them. The system adapts to the demands placed on it — which means what you do now, during childhood, genuinely shapes the musculoskeletal system you'll carry for the rest of your life.`,
          ],
          image: `/explorer-assets/wellness/l15-s1-206-bones-600-muscles.png`,
          imageCaption: `206 bones and over 600 muscles working together as a single, integrated system`,
          vocab: [
            { word: `musculoskeletal`, definition: `Relating to both the muscles and the skeleton together — the combined system that gives your body structure, protects organs, and enables every movement you make.`, audioPrompt: `The word musculoskeletal combines muscular and skeletal, {name} — because these two systems are so deeply connected that they function as one. Your skeleton gives your muscles something to pull against. Your muscles move your bones. Together they produce every action your body takes — from standing upright to running, climbing, or playing. Understanding them together is understanding your body's most fundamental capability.` },
            { word: `machine`, definition: `A complex system of coordinated parts working together — the musculoskeletal system functions with the precision and coordination of a machine, though it also repairs and adapts itself in ways no human-made machine can.`, audioPrompt: `When we call the body a machine, {name}, we don't mean it's mechanical — we mean it works with the precision of one. 206 bones, over 600 muscles, thousands of tendons and ligaments, all coordinated to produce controlled movement. The engineering is extraordinary. And unlike any machine you can buy, this one repairs itself, adapts to demands, and gets stronger with use.` },
            { word: `respond`, definition: `To change in response to demand — bones and muscles both respond to the loads and challenges placed on them, growing stronger with use and weaker without it.`, audioPrompt: `One of the most powerful things about your musculoskeletal system, {name}, is that it responds to what you do. Bones that bear weight grow denser. Muscles that are challenged get stronger. The system is built to adapt. This is why exercise during childhood is so valuable — it's not just good for today, it's building a stronger foundation for everything that comes after.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Bones Are Alive`,
          paragraphs: [
            `Your bones do far more than hold you up. They **protect vital organs** — the skull protects your brain, the ribcage protects your heart and lungs. Inside them, **bone marrow** produces new blood cells continuously: red blood cells that carry oxygen, immune cells that protect you, and platelets that stop bleeding — about two million new red blood cells every second.`,
            `Bones also **store minerals** — especially calcium and phosphorus — that the rest of your body draws on as needed. And they are constantly being broken down and rebuilt through a process called **bone remodelling**. About **10% of your skeleton is replaced each year**. Far from being a fixed, inert frame, your skeleton is a living, dynamic system that never stops working.`,
          ],
          image: `/explorer-assets/wellness/l15-s2-bones-are-alive.png`,
          imageCaption: `Bones protect organs, produce blood cells, store minerals, and are constantly being rebuilt`,
          vocab: [
            { word: `bone remodeling`, definition: `The continuous process of old bone being broken down and new bone being built — meaning your skeleton is always renewing itself, about 10% replaced each year.`, audioPrompt: `Your skeleton isn't a fixed structure, {name} — it's in constant renewal. Specialized cells called osteoclasts break down old bone while osteoblasts build new bone in its place. This remodeling is how bones respond to the demands placed on them, repair microscopic damage, and grow denser with regular weight-bearing exercise. About ten percent of your skeleton is replaced every year.` },
            { word: `marrow`, definition: `The soft tissue inside your bones — which produces red blood cells, white blood cells, and platelets, making your bones essential to your immune system and oxygen delivery.`, audioPrompt: `Deep inside your bones is where new blood is made, {name}. Bone marrow produces red blood cells that carry oxygen, white blood cells that fight infection, and platelets that stop bleeding — about two million new red blood cells every second. Your bones are not just a frame. They're an active, living factory running continuously inside you.` },
            { word: `mineral`, definition: `An element stored in your bones — particularly calcium and phosphorus — that gives bones their hardness and is released into the bloodstream when the rest of your body needs it.`, audioPrompt: `Your bones are your body's mineral bank, {name}. Calcium and phosphorus stored in bone tissue give your skeleton its hardness and strength. When blood calcium levels drop, your body draws on those reserves — pulling what it needs from bone. Building strong bones now is building a larger reserve to draw on for the rest of your life. The more you deposit now, the more you have.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Childhood Window`,
          paragraphs: [
            `Childhood and adolescence are the **critical window** for building **bone density** — the amount of mineral packed into your bones. **Peak bone mass** is typically reached by your late 20s. After that, you can maintain bone density or slowly lose it, but you cannot significantly increase it. The bone you build during childhood is, in many ways, the bone you'll carry for life.`,
            `This is why **weight-bearing exercise** — running, jumping, sports — matters so much right now. The impact sends a signal through your skeleton: grow stronger. Combined with adequate calcium and vitamin D, this is how bone density is built. What you do now is an investment that nothing later can fully replace.`,
          ],
          image: `/explorer-assets/wellness/l15-s3-childhood-window.png`,
          imageCaption: `Peak bone density is built by your late 20s — what you build now is what you carry for life`,
          vocab: [
            { word: `bone density`, definition: `The amount of mineral packed into your bones — greater density means stronger, more resilient bones that are less likely to fracture and less likely to weaken with age.`, audioPrompt: `Bone density is like the thickness of the walls of a building, {name}. Denser bones are stronger, more resistant to fracture, and better equipped to last a lifetime. The density you build now — through weight-bearing exercise, calcium, and vitamin D — is the bank balance you'll carry into adulthood. After your late twenties, you can maintain it but can't significantly increase it. What you build now is what you keep.` },
            { word: `peak bone mass`, definition: `The maximum bone density your skeleton reaches — typically in your late 20s — after which maintenance is possible but major increases are not.`, audioPrompt: `Peak bone mass is the highest point of bone density your body will reach, {name}. It's determined largely by what you do during childhood and adolescence. After your late twenties, that peak is essentially set. This is one of the most compelling reasons why physical activity, calcium, and vitamin D matter so much right now — not just for today, but for the decades ahead.` },
            { word: `weight-bearing`, definition: `Exercise that puts your body's weight through your bones — like running, jumping, and sports — which signals bones to grow denser and stronger.`, audioPrompt: `Weight-bearing activity is what tells your bones to grow, {name}. When you run, jump, or play a sport, the impact travels through your skeleton and signals bone-building cells to lay down more mineral. Swimming is wonderful for cardiovascular health but doesn't provide this signal — the bones need to feel the load. That's why running and jumping are especially valuable during childhood, when bone density is still being built.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Three Types of Muscle`,
          paragraphs: [
            `You have three types of muscle. **Skeletal muscle** is voluntary — attached to bones via tendons, these are the muscles you consciously control for all movement. **Smooth muscle** lines your digestive tract, blood vessels, and organs, working automatically without any conscious effort. And **cardiac muscle** is found only in your heart.`,
            `Cardiac muscle is remarkable: it never fatigues, never rests, and works continuously for your entire life. Unlike every other muscle in your body, it doesn't need you to think about it — it has been contracting since before you were born, and it will keep going without pause for your whole life. Your heart is quite literally extraordinary.`,
          ],
          image: `/explorer-assets/wellness/l15-s4-three-muscle-types.png`,
          imageCaption: `Skeletal, smooth, and cardiac muscle — each type with its own role, working in precise coordination`,
          vocab: [
            { word: `skeletal muscle`, definition: `Voluntary muscle attached to bones via tendons — the muscles you consciously control for all movement, from walking to lifting to sport.`, audioPrompt: `Every movement you make, {name}, is powered by skeletal muscle. These are the muscles you can feel and control — bending your arm, kicking a ball, turning your head. They attach to your bones via tendons and work in pairs: one contracts while the other relaxes, allowing smooth, coordinated movement. Over 600 of them working together make up most of the physical capability your body has.` },
            { word: `smooth muscle`, definition: `Involuntary muscle lining the walls of your digestive tract, blood vessels, and organs — working automatically, without any conscious instruction, controlled by your autonomic nervous system.`, audioPrompt: `Smooth muscle is the muscle you never have to think about, {name}. It lines the walls of your digestive tract, blood vessels, airways, and organs — and it works automatically, controlled by your autonomic nervous system. When food moves through your intestines, when your blood vessels dilate or constrict, when your lungs adjust their airways — that's smooth muscle working without any conscious instruction from you.` },
            { word: `cardiac muscle`, definition: `The unique muscle of the heart — which never fatigues, never rests, and works continuously from before birth until the last moment of life.`, audioPrompt: `Cardiac muscle is extraordinary, {name}. It's found only in your heart, and unlike every other muscle in your body, it never fatigues and never needs to rest. It has been contracting continuously since before you were born — and it will keep going for your entire life. No other muscle in your body has this combination of endurance and reliability. Your heart is quite literally remarkable.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `How Muscles Work`,
          paragraphs: [
            `Skeletal muscles work in **pairs** — when one contracts, its partner relaxes. Your bicep contracts to bend your elbow; your tricep relaxes. To straighten your arm, they swap roles. This coordinated partnership happens throughout your entire body with every movement you make — hundreds of muscle pairs working together in precise sequence.`,
            `The force of muscle contraction travels to your bones through tough cords of tissue called **tendons**. Strong, flexible tendons are important for injury prevention — which is why warming up before activity matters. And muscles don't grow during exercise: **recovery** time between sessions is when repair and strengthening actually happen. Exercise is the signal; rest is where adaptation occurs.`,
          ],
          image: `/explorer-assets/wellness/l15-s5-muscle-pair.png`,
          imageCaption: `Muscles work in pairs — one contracts while the other relaxes, swapping roles for opposite movements`,
          vocab: [
            { word: `pair`, definition: `Two muscles working in opposition — one contracting while the other relaxes — that together produce smooth, controlled movement in both directions.`, audioPrompt: `Muscle pairs are what allow smooth, controlled movement in both directions, {name}. Without an opposing muscle to control the return, movements would be jerky and imprecise. Think about bending and straightening your arm — the bicep and tricep are doing that together. This paired system runs throughout your body, coordinating every action from a blink to a jump.` },
            { word: `tendon`, definition: `A tough cord of tissue that connects a muscle to a bone — transmitting the force of muscle contractions to produce movement.`, audioPrompt: `Tendons are the connectors in your movement system, {name}. When a muscle contracts, the force needs to travel to the bone to create movement — and tendons are what make that transmission possible. Strong, flexible tendons are important for injury prevention, which is why warming up before vigorous activity and cooling down afterward supports the health of your whole musculoskeletal system.` },
            { word: `recovery`, definition: `The period of rest between exercise sessions — when muscle repair actually happens and muscles grow stronger than before.`, audioPrompt: `Muscles don't grow during exercise, {name} — they grow during recovery. Exercise creates small amounts of muscle fiber damage. Rest is when your body repairs those fibers, slightly stronger than before. That's why rest between sessions isn't optional — it's the actual mechanism of getting stronger. Exercise is the signal. Recovery is where the adaptation happens.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `How to Build and Care`,
          paragraphs: [
            `For **strong bones**: weight-bearing exercise (running, jumping, sports) sends the signal to grow denser; **calcium** from dairy, leafy greens, and fortified foods provides the building material; and **vitamin D** — from sunlight and fatty fish — is needed to absorb calcium properly. These three work together. Without all three, the bone-building signal is weakened.`,
            `For **strong muscles**: progressive resistance activities, adequate protein for repair, and rest between sessions — because muscles grow during recovery, not during exercise itself. For **joint health**: maintain flexibility through stretching and vary your activities to avoid overuse injuries. Together, these habits build a musculoskeletal system that will serve you well for decades.`,
          ],
          image: `/explorer-assets/wellness/l15-s6-build-and-care.png`,
          imageCaption: `Weight-bearing exercise, calcium, vitamin D, protein, and rest — the foundations of musculoskeletal health`,
          vocab: [
            { word: `calcium`, definition: `The main mineral your bones are built from — found in dairy products, leafy greens, and fortified foods, and requires Vitamin D to be properly absorbed.`, audioPrompt: `Calcium is the primary building material of bone, {name}. Without enough of it — through dairy, leafy greens, or fortified foods — your body can't build or maintain the bone density it needs. But calcium alone isn't enough: Vitamin D is what allows calcium to be absorbed from your digestive system into your bloodstream. Both together, alongside weight-bearing activity, are what bone-building requires.` },
            { word: `vitamin D`, definition: `A nutrient made by the skin in sunlight and found in fatty fish — that allows the body to absorb calcium from food, making it essential for bone building.`, audioPrompt: `Vitamin D is what unlocks calcium for your body, {name}. Without it, calcium from food can't be properly absorbed from your digestive system — so no matter how much calcium you eat, your bones can't use it efficiently. Your skin makes vitamin D when exposed to sunlight, and it's also found in fatty fish and fortified foods. Calcium and vitamin D work as a team — you need both.` },
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
    fetch('/explorer-assets/wellness/l15-s1-206-bones-600-muscles.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-s2-bones-are-alive.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-s3-childhood-window.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-s4-three-muscle-types.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-s5-muscle-pair.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l15-s6-build-and-care.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L15] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L15] One or more magazine assets missing'));
}
