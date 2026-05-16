// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L12 — Germs and Immunity
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L12 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-12`,
      title:     `Germs and Immunity`,
      duration:  12,
      xpReward:  50,
      badge:     `immune-expert`,
      badgeName: `Immune Expert`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `You've been carrying around a remarkable defence system your entire life, {name}, and most of the time you don't even notice it. Your immune system is working continuously — identifying threats, launching responses, building memory of past encounters so it can respond faster next time. Today we're going to look at how that system actually works. What are germs, really? How does your body recognise them as threats? What is the process that makes you sick — and what makes you better? And what can you do to keep your immune system strong? Let's get into the science of the body's most impressive guardian.`,
          headline: `Germs and Immunity`,
          subtitle: `Your immune system is one of the most sophisticated defence networks in nature — working every moment to protect you, shaped by how you live`,
          visual: `/explorer-assets/wellness/l12-welcome.png`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Body's Defense System`,
          paragraphs: [
            `You've been carrying a remarkable defense system your whole life.`,
            `Right now it's identifying threats, launching responses, and building memory of past encounters. Most of the time you don't even notice — because it's doing its job.`,
          ],
          image: `/explorer-assets/wellness/l12-s1-defense-system.png`,
          imageCaption: `One of the most sophisticated defense networks in nature — running in the background of your life since the day you were born.`,
          vocab: [
            { word: `defense system`, definition: `The network protecting you from harmful microbes. Works continuously, day and night, without you having to think about it.`,
              audioPrompt: `Your immune system is one of the most sophisticated defense networks in nature, {name} — and you've had it running quietly inside you your entire life. It identifies threats, launches responses, and builds memory of past encounters so it can respond faster next time. Most of the time you don't even feel it working. That's actually the goal.` },
            { word: `threat`,         definition: `Anything your body identifies as potentially harmful — a virus, a bacterium, a damaged cell. Your immune system makes those calls continuously.`,
              audioPrompt: `Your immune system is constantly evaluating, {name} — friend, neutral, or threat? Most of what passes through your body gets recognized as harmless and ignored. The things flagged as threats trigger a response. That decision-making, happening millions of times a day without your awareness, is one of the most impressive things your body does.` },
            { word: `continuous`,     definition: `Always running. Your immune system never takes a day off — even while you sleep, especially while you sleep.`,
              audioPrompt: `Your immune system is continuous, {name} — never paused, never off-duty. Even right now, as you read this, immune cells are patrolling your bloodstream and tissues, checking everything they encounter. While you sleep, it actually works harder — that's when many of its most important repair and production processes happen. Twenty-four hours a day, defending you.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Types of Germs`,
          paragraphs: [
            `Germs (microorganisms that can cause disease) come in several types.`,
            `BACTERIA — living single-celled organisms (strep throat). VIRUSES — not technically alive, hijack your cells to reproduce (colds, flu). Important: not all microbes are harmful. Your gut holds trillions of helpful ones.`,
          ],
          image: `/explorer-assets/wellness/l12-s2-types-of-germs.png`,
          imageCaption: `Not all microbes are enemies. Your gut is full of trillions of helpful ones. The harmful kind is a small minority of a much larger picture.`,
          vocab: [
            { word: `bacteria`,   definition: `Living single-celled organisms. Some cause illness (strep, food poisoning) but the vast majority are helpful — especially the trillions in your gut.`,
              audioPrompt: `Most kids think of bacteria as the enemy, {name}, but the reality is far more interesting. Trillions of bacteria live inside you right now, and the vast majority are working with you — aiding digestion, supporting immunity, producing chemicals your body needs. The harmful ones are a small fraction. Your relationship with the bacterial world is mostly cooperative, not adversarial.` },
            { word: `virus`,      definition: `Genetic material in a protein shell. Not technically alive — can only reproduce by hijacking your cells. Why antibiotics don't work on colds.`,
              audioPrompt: `Viruses are strange things, {name} — they're not quite alive by most definitions. They can't reproduce on their own. Instead, they get into your cells and use your cell's machinery to make copies of themselves. That's why antibiotics don't touch them: antibiotics kill bacteria, not the genetic material of a virus using your cells as a factory.` },
            { word: `microbiome`, definition: `The vast community of microorganisms living in your gut — about 38 trillion of them. Affects digestion, immunity, mood, and more.`,
              audioPrompt: `Your gut microbiome is one of the most fascinating things Terra has ever learned about, {name}. You're carrying approximately 38 trillion microorganisms — more than the number of your own cells. They affect your digestion, your immunity, your mood through the gut-brain axis, and your body's response to inflammation. The ecosystem inside you is part of who you are.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Lines of Defense`,
          paragraphs: [
            `Your immune system has three layers.`,
            `FIRST: physical barriers (skin, mucus, stomach acid). SECOND: general response (inflammation, fever, white blood cells). THIRD: adaptive response (custom antibodies for specific threats).`,
          ],
          image: `/explorer-assets/wellness/l12-s3-three-lines-defense.png`,
          imageCaption: `Three layers, each more specialized than the last. Most threats are stopped before they ever get past the first line.`,
          vocab: [
            { word: `barrier`,      definition: `Skin, mucus, stomach acid, tears. The first line of defense — stops most threats before they ever enter your body.`,
              audioPrompt: `Physical barriers are your immune system's first line, {name} — and they handle most threats before anything else has to engage. Skin keeps germs out. Mucus traps them. Stomach acid kills anything that gets swallowed. Tears contain enzymes that destroy bacteria. By the time you feel anything, your barriers have already won most of the battles you didn't know were happening.` },
            { word: `inflammation`, definition: `Increased blood flow and immune activity in an area under attack. Creates redness, swelling, warmth — your second line responding.`,
              audioPrompt: `Inflammation is your immune system showing up in force, {name}. When you cut yourself or catch an infection, the area becomes red, warm, and swollen — that's your non-specific immune response flooding the area with immune cells to fight whatever got through. Acute inflammation is protective and important. It's chronic inflammation — running in the background all the time — that's the kind associated with long-term health issues.` },
            { word: `adaptive`,     definition: `The third line. Creates custom antibodies for specific threats — and the only line that learns from each encounter.`,
              audioPrompt: `The adaptive immune system is the genuinely remarkable layer, {name}. While the first two lines fight threats using general tools, the adaptive system designs precise weapons — custom antibodies — for each specific pathogen. It's also the layer that learns. Every encounter teaches it. That's what makes immunity possible.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Immune System Remembers`,
          paragraphs: [
            `Here's what makes your immune system genuinely remarkable: it LEARNS.`,
            `After fighting a pathogen, it keeps MEMORY CELLS that remember exactly what it looked like. Encounter it again — even years later — and the response is fast, often before you feel sick.`,
          ],
          image: `/explorer-assets/wellness/l12-s4-immune-memory.png`,
          imageCaption: `Your immune system gets smarter with every encounter. Memory is what makes lasting immunity possible.`,
          vocab: [
            { word: `memory cell`, definition: `A specialized immune cell that remembers a specific pathogen long after a first encounter. Activates fast if the same threat returns.`,
              audioPrompt: `Memory cells are what make long-lasting immunity possible, {name}. After your immune system fights off a pathogen or responds to a vaccine, it keeps a small number of specialized cells that remember exactly what that pathogen looked like. Years later, if the same threat appears, those memory cells activate a rapid response — often before you even feel sick.` },
            { word: `immunity`,    definition: `Protection from a specific disease — because your immune system remembers it. Built from either having it before or vaccination.`,
              audioPrompt: `Immunity means your immune system has already seen this threat and knows exactly how to fight it, {name}. The first time you encounter a pathogen, your body takes time to build a response. The second time — because of memory cells — it can respond within hours, often before you feel anything. That memory is what immunity means. It's your immune system working smarter, not harder.` },
            { word: `antibody`,    definition: `A protein custom-designed to recognize and neutralize a specific pathogen. Built by the adaptive system, stored in memory.`,
              audioPrompt: `Antibodies are your immune system's custom-built weapons, {name} — each one shaped to recognize and lock onto a specific pathogen. When your adaptive immune system encounters a new threat, it starts making antibodies tailored to that exact threat. That's what makes the adaptive response so powerful: it doesn't use a general weapon, it builds the right tool for the specific job.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `How Vaccines Work`,
          paragraphs: [
            `Vaccines train your immune system BEFORE you ever meet the real threat.`,
            `They show your body a harmless piece of a pathogen — enough to trigger a response and create memory cells, without causing illness. When the real one arrives, your immune system already knows it.`,
          ],
          image: `/explorer-assets/wellness/l12-s5-vaccines.png`,
          imageCaption: `Advance training. Memory cells in place before the threat arrives. That's what has eliminated diseases that used to devastate humanity.`,
          vocab: [
            { word: `vaccine`,  definition: `A preparation that trains your immune system to recognize a specific pathogen — without causing the disease — by triggering a response and creating memory cells.`,
              audioPrompt: `A vaccine is advance training for your immune system, {name}. It shows your body enough of a pathogen — or instructions for making a key part of it — to trigger a response and create memory cells, without causing actual illness. When the real pathogen arrives later, your immune system already knows it. The preparation happens before the threat does.` },
            { word: `pathogen`, definition: `Any microorganism that can cause disease — bacteria, virus, fungus, or parasite. The general term for "threat your immune system fights."`,
              audioPrompt: `Pathogen is the general word for anything that can make you sick, {name} — whether it's a bacterium, a virus, a fungus, or a parasite. Your immune system is in constant contact with the outside world, evaluating every microorganism it encounters and deciding: friend, neutral, or threat? The ones it labels as threats are pathogens, and it responds accordingly.` },
            { word: `prevent`,  definition: `Stop something before it happens. What vaccines do for entire diseases — and what good daily habits do for everyday illness.`,
              audioPrompt: `Prevention is one of the most powerful concepts in medicine, {name}. Vaccines have prevented diseases that used to devastate whole generations — smallpox, polio, measles. And on a smaller daily scale, prevention is what handwashing, sleep, and stress management do for everyday illness. The most effective medicine is the kind that stops you from needing medicine in the first place.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `How You Support It`,
          paragraphs: [
            `How well your immune system works is profoundly shaped by how you live.`,
            `SLEEP (most immune cells are produced and repaired then). LOW STRESS (chronic stress suppresses it). MOVEMENT (boosts surveillance). HANDWASHING (stops threats before they enter).`,
          ],
          image: `/explorer-assets/wellness/l12-s6-support-immunity.png`,
          imageCaption: `Sleep. Calm. Movement. Clean hands. Each one a direct input into how well your body can defend itself.`,
          vocab: [
            { word: `sleep`,        definition: `When most immune cells are produced and repaired. Non-negotiable for immune function — sleep-deprived people get sick more often.`,
              audioPrompt: `Sleep is immune-critical, {name} — not just helpful, critical. Most of your immune cells are produced and repaired during sleep. Research is clear: people who consistently don't get enough sleep get sick more often, recover more slowly, and respond less effectively to vaccines. If you want one lever to support immunity, sleep is the biggest one.` },
            { word: `surveillance`, definition: `Immune cells patrolling your body for threats. Supported by regular movement — which helps cells circulate.`,
              audioPrompt: `Your immune system is always on patrol, {name} — immune cells moving through your bloodstream and tissues, looking for anything that shouldn't be there. Regular movement actually supports this surveillance, helping immune cells circulate and do their monitoring work more effectively. This is one of the reasons people who move regularly tend to get sick less often.` },
            { word: `handwashing`,  definition: `The simple act that stops most germs before they enter your body. One of the most effective disease-prevention tools ever identified.`,
              audioPrompt: `Handwashing is ancient, simple, and still one of the most powerful public health tools ever identified, {name}. It stops germs at the first line of defense — before your immune system has to deal with them at all. Washing hands properly before eating and after using the bathroom takes twenty seconds and prevents the kind of infections that sideline you for days.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `supports`,
              label: `💪 Helps Your Immune System Stay Strong`,
              color: `#34D399`,
            },
            {
              id: `harder`,
              label: `😞 Makes Your Immune System Work Harder`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l12-g1`,
              image: `l12-game-1.png`,
              label: `Getting a full night of sleep most nights.`,
              matchPhrase: `Most immune cells are produced and repaired during sleep — consistently getting enough rest is one of the most direct things you can do to support your immune system.`,
              correctMatch: `supports`,
            },
            {
              id: `l12-g2`,
              image: `l12-game-2.png`,
              label: `Washing your hands properly before eating and after using the bathroom.`,
              matchPhrase: `Handwashing is one of the most effective disease prevention strategies ever studied — it stops germs at the first line of defence before your immune system even needs to get involved.`,
              correctMatch: `supports`,
            },
            {
              id: `l12-g3`,
              image: `l12-game-3.png`,
              label: `Feeling under constant pressure and stress for weeks on end without any recovery.`,
              matchPhrase: `Chronic stress causes your body to produce cortisol, which directly suppresses immune function — your immune system is one of the first things to feel the effects of ongoing stress.`,
              correctMatch: `harder`,
            },
            {
              id: `l12-g4`,
              image: `l12-game-4.png`,
              label: `Staying up very late most nights and regularly not getting enough sleep.`,
              matchPhrase: `Without adequate sleep, your immune cells don't get the repair time they need — research consistently shows that sleep-deprived people get sick more often and take longer to recover.`,
              correctMatch: `harder`,
            },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l12-q1`,
              format: `multiple-choice`,
              question: `What is the key difference between bacteria and viruses?`,
              options: [
                `Bacteria are bigger; viruses are smaller versions of bacteria`,
                `Bacteria are living single-celled organisms; viruses are not alive — they are genetic material that hijacks cells to reproduce`,
                `Bacteria cause colds; viruses cause more serious diseases`,
                `There is no meaningful biological difference between them`,
              ],
              correctIndex: 1,
              explanation: `Bacteria are living organisms that can reproduce on their own and can be killed by antibiotics. Viruses are fundamentally different — they're not technically alive at all. They're packages of genetic material that can only reproduce by hijacking your own cells, which is why antibiotics don't work on viral infections.`,
            },
            {
              id: `l12-q2`,
              format: `multiple-choice`,
              question: `How do vaccines protect you from disease?`,
              options: [
                `They kill pathogens already in your body`,
                `They introduce a harmless piece of a pathogen to train your immune system to recognise and fight it before real exposure`,
                `They strengthen white blood cells generally so they fight all diseases better`,
                `They prevent all pathogens from entering the body`,
              ],
              correctIndex: 1,
              explanation: `Vaccines work by showing your immune system a harmless version of a threat — enough to trigger a response and create memory cells, without causing illness. When the real pathogen arrives later, your immune system already knows it and responds immediately. It's advance training for your body's defence network.`,
            },
            {
              id: `l12-q3`,
              format: `multiple-choice`,
              question: `What lifestyle factor most directly impairs immune function?`,
              options: [
                `Not eating enough vegetables`,
                `Chronic sleep deprivation — most immune cells are produced and repaired during sleep`,
                `Spending too much time indoors`,
                `Exercising too vigorously`,
              ],
              correctIndex: 1,
              explanation: `Sleep deprivation is one of the fastest ways to reduce immune function — the research on this is consistent and clear. Most immune cells are produced and repaired during sleep. People who regularly get too little sleep get sick more often, recover more slowly, and show reduced responses to vaccines.`,
            },
            {
              id: `l12-q4`,
              format: `true-false`,
              question: `Your immune system has multiple layers of defence — physical barriers, a general response, and a targeted response that creates memory for specific pathogens.`,
              correctAnswer: true,
              explanation: `True. The three-layer design is what makes your immune system so effective. Physical barriers stop most threats before they even enter. The non-specific response handles anything that gets through quickly. And the adaptive response creates precise, lasting protection — getting smarter with every infection or vaccine.`,
            },
            {
              id: `l12-q5`,
              format: `fill-blank`,
              question: `Vaccines work by creating ___ cells that remember a specific pathogen — so your immune system can respond immediately if you ever encounter the real thing.`,
              options: [
                `memory`,
                `white blood`,
                `red blood`,
                `defence`,
              ],
              correctIndex: 0,
              explanation: `Memory cells are the key to how vaccines provide lasting protection. After encountering a vaccine (or a real infection), your immune system creates memory cells that recognise the specific pathogen. When it appears again — even years later — those memory cells trigger a fast, powerful response before the infection can take hold.`,
            },
            {
              id: `l12-q6`,
              format: `multiple-choice`,
              question: `What makes the adaptive immune response the most sophisticated layer of your immune system?`,
              options: [
                `It is the fastest layer — it responds within seconds of infection`,
                `It creates specific antibodies and memory cells for individual pathogens — meaning your immune system gets smarter and faster with every encounter`,
                `It is the only layer that uses white blood cells`,
                `It can kill any pathogen without needing to identify it first`,
              ],
              correctIndex: 1,
              explanation: `The adaptive immune response is remarkable because it learns. It creates specific antibodies designed for a particular pathogen, and it stores memory cells that make future responses faster and more effective. This is why you're immune to certain diseases after having them once, and why vaccines can provide long-lasting protection.`,
            },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Immunologists — scientists who study the immune system — describe it as one of the most complex and elegant systems in all of biology. What you do every day genuinely shapes how well it works. Sleep, movement, nourishment, and stress management are not just lifestyle choices — they're inputs into a sophisticated biological defence network.`,
          familyAdventure: `Research one disease that vaccines have dramatically reduced or eliminated — polio, smallpox, measles, or rubella. Find out: what was it like before the vaccine existed? What happened to those numbers after? Who developed it? Present your findings to the family. Understanding this history is one of the most inspiring things in all of medicine.`,
          creativePrompt: `Think about the last week — how was your sleep? Your stress levels? Your movement? Your food variety? These are all inputs your immune system is working with right now. Which one could you give a little more support this week?`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that your immune system is one of the most sophisticated defence networks in nature — working every moment to protect you, and shaped by how you live every day. Your body is remarkable, and it's on your side. Terra is so proud to walk this path with you.`,
          badge: `immune-expert`,
          badgeName: `Immune Expert`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L12.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L12] Loaded: "Germs and Immunity" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l12-s1-defense-system.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-s2-types-of-germs.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-s3-three-lines-defense.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-s4-immune-memory.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-s5-vaccines.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-s6-support-immunity.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L12] One or more magazine assets missing'));
}
