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
          headline: `Types of germs`,
          paragraphs: [
            `Germs — microorganisms that can cause disease — come in several types. **Bacteria** are living single-celled organisms (strep throat, some food poisoning). **Viruses** are not technically alive — they're genetic material in a protein shell that hijacks your cells to reproduce (colds, flu, chickenpox). **Fungi** cause infections like athlete's foot and ringworm. **Parasites** are organisms that live off a host. Importantly: **not all microorganisms are harmful**. Your gut contains trillions of beneficial bacteria that are essential for health — your relationship with the microscopic world is far more cooperative than it is adversarial.`,
          ],
          image: `/explorer-assets/wellness/l12-magazine-1.png`,
          imageCaption: `Bacteria, viruses, fungi, and parasites — and trillions of beneficial microorganisms working with you`,
          vocab: [
            { word: `bacteria`, definition: `Living single-celled organisms — some cause illness, but many are beneficial and essential to your health, particularly the trillions living in your gut microbiome.`, audioPrompt: `Most kids think of bacteria as the enemy, {name}, but the reality is far more interesting. Trillions of bacteria live inside you right now, and the vast majority are working with you — aiding digestion, supporting immunity, producing chemicals your body needs. The harmful ones are a small fraction. Your relationship with the bacterial world is mostly cooperative, not adversarial.` },
            { word: `virus`, definition: `A tiny package of genetic material that is not technically alive — it can only reproduce by hijacking your own cells, which is why antibiotics (which kill bacteria) don't work on viral infections.`, audioPrompt: `Viruses are strange things, {name} — they're not quite alive by most definitions. They can't reproduce on their own. Instead, they get into your cells and use your cell's machinery to make copies of themselves. That's why antibiotics don't touch them: antibiotics kill bacteria, not the genetic material of a virus using your cells as a factory. Colds and flu are viruses. Strep throat is bacteria. Different tools for different threats.` },
            { word: `microbiome`, definition: `The vast community of microorganisms — bacteria, fungi, and others — living in your gut, affecting digestion, immunity, mood, and much more.`, audioPrompt: `Your gut microbiome is one of the most fascinating things Terra has ever learned about, {name}. You're carrying approximately 38 trillion microorganisms — more than the number of your own cells. They affect your digestion, your immunity, your mood through the gut-brain axis, and your body's response to inflammation. The ecosystem inside you is part of who you are.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your immune system: three lines of defence`,
          paragraphs: [
            `Your immune system has three layers. **First line:** physical barriers — skin (keeps germs out), mucus (traps germs in nose and throat), stomach acid (kills germs that enter through food), and tears (contain antimicrobial enzymes). **Second line:** non-specific immune response — inflammation, fever (higher temperature kills many pathogens), and white blood cells that engulf and destroy any foreign invader. **Third line:** adaptive immune response — specialised antibodies that target specific pathogens and create **immunological memory**, meaning your immune system gets smarter with every encounter.`,
          ],
          image: `/explorer-assets/wellness/l12-magazine-2.png`,
          imageCaption: `Three layers — physical barriers, general response, and a targeted memory system that learns`,
          vocab: [
            { word: `antibody`, definition: `A protein made by your immune system that is precisely designed to recognize and neutralize a specific pathogen — part of the adaptive immune response.`, audioPrompt: `Antibodies are your immune system's custom-built weapons, {name} — each one shaped to recognize and lock onto a specific pathogen. When your adaptive immune system encounters a new threat, it starts making antibodies tailored to that exact threat. That's what makes the adaptive response so powerful: it doesn't use a general weapon, it builds the right tool for the specific job.` },
            { word: `inflammation`, definition: `Part of your immune system's non-specific response — increased blood flow and immune activity in an area under attack, which creates redness, swelling, and warmth.`, audioPrompt: `Inflammation is your immune system showing up in force, {name}. When you cut yourself or catch an infection, the area becomes red, warm, and swollen — that's your non-specific immune response flooding the area with immune cells to fight whatever got through. Acute inflammation is protective and important. It's chronic inflammation — running in the background all the time — that's the kind associated with long-term health issues.` },
            { word: `immunity`, definition: `The state of being protected against a specific disease — either through having had it before or through vaccination — because your immune system has memory of it.`, audioPrompt: `Immunity means your immune system has already seen this threat and knows exactly how to fight it, {name}. The first time you encounter a pathogen, your body takes time to build a response. The second time — because of memory cells — it can respond within hours, often before you feel anything. That memory is what immunity means. It's your immune system working smarter, not harder.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How vaccines work`,
          paragraphs: [
            `Vaccines train your immune system to recognise and fight a specific pathogen **before** you encounter the real thing. A vaccine introduces a harmless piece of the pathogen (a protein, a weakened version, or instructions for your cells to make the protein) — enough to trigger an immune response and create **memory cells**, without causing the actual disease. When you encounter the real pathogen later, your immune system recognises it immediately and responds before you get sick. Vaccines have eliminated or dramatically reduced smallpox, polio, measles, and dozens of other once-devastating diseases.`,
          ],
          image: `/explorer-assets/wellness/l12-magazine-3.png`,
          imageCaption: `Vaccines create memory cells — so your immune system can respond immediately when it matters`,
          vocab: [
            { word: `vaccine`, definition: `A preparation that trains your immune system to recognize and fight a specific pathogen — without causing the disease — by triggering a response and creating lasting memory cells.`, audioPrompt: `A vaccine is advance training for your immune system, {name}. It shows your body enough of a pathogen — or instructions for making a key part of it — to trigger a response and create memory cells, without causing actual illness. When the real pathogen arrives later, your immune system already knows it. The preparation happens before the threat does.` },
            { word: `memory cell`, definition: `A specialized immune cell that remembers a specific pathogen after a first encounter — enabling your immune system to respond much faster if it ever encounters the same threat again.`, audioPrompt: `Memory cells are what make long-lasting immunity possible, {name}. After your immune system fights off a pathogen or responds to a vaccine, it keeps a small number of specialized cells that remember exactly what that pathogen looked like. Years later, if the same threat appears, those memory cells activate a rapid response — often before you even feel sick.` },
            { word: `pathogen`, definition: `Any microorganism that can cause disease — including certain bacteria, viruses, fungi, and parasites.`, audioPrompt: `Pathogen is the general word for anything that can make you sick, {name} — whether it's a bacterium, a virus, a fungus, or a parasite. Your immune system is in constant contact with the outside world, evaluating every microorganism it encounters and deciding: friend, neutral, or threat? The ones it labels as threats are pathogens, and it responds accordingly.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Supporting your immune system`,
          paragraphs: [
            `Your immune system is profoundly shaped by how you live. **Sleep is immune-critical** — most immune cells are produced and repaired during sleep; consistently poor sleep is one of the fastest ways to reduce immune function. **Chronic stress** suppresses immunity — cortisol directly inhibits immune cells. **Regular movement** boosts immune surveillance, helping your body patrol for threats more effectively. **Nutrition matters** — vitamin C, vitamin D, zinc, and a diverse diet of whole foods all support immune function. And **handwashing** remains one of the most effective disease prevention strategies ever identified — stopping germs at the first line before your immune system even needs to get involved.`,
          ],
          image: `/explorer-assets/wellness/l12-magazine-4.png`,
          imageCaption: `Sleep, stress management, movement, nutrition, and handwashing — all shape how well your immune system works`,
          vocab: [
            { word: `immune function`, definition: `How well your immune system is performing — shaped by sleep, stress levels, movement, nutrition, and hygiene habits.`, audioPrompt: `Immune function isn't fixed, {name}. It goes up and down depending on how you're living. Good sleep boosts it. Chronic stress suppresses it. Regular movement supports it. Varied whole foods nourish it. Handwashing stops threats before your immune system even needs to engage. What you do every day is a direct input into how well your body can defend itself.` },
            { word: `handwashing`, definition: `One of the most effective disease prevention strategies — removing pathogens from your hands before they can enter your body through your eyes, nose, or mouth.`, audioPrompt: `Handwashing is ancient, simple, and still one of the most powerful public health tools ever identified, {name}. It stops germs at the first line of defence — before your immune system has to deal with them at all. Washing hands properly before eating and after using the bathroom takes twenty seconds and prevents the kind of infections that sideline you for days.` },
            { word: `surveillance`, definition: `The constant patrolling of your body by immune cells — actively checking for and responding to threats before an infection can take hold.`, audioPrompt: `Your immune system is always on patrol, {name} — immune cells moving through your bloodstream and tissues, looking for anything that shouldn't be there. Regular movement actually supports this surveillance, helping immune cells circulate and do their monitoring work more effectively. This is one of the reasons people who move regularly tend to get sick less often.` },
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
    fetch('/explorer-assets/wellness/l12-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l12-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L12] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L12] One or more magazine assets missing'));
}
