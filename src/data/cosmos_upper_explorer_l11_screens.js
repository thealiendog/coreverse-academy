// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L11 — The Immune System: Your Body's Army
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-LS1 — body systems; defense against disease
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order the steps of the immune response)
// SCOPE: 4 concepts — what the immune system is, the body's defenses,
//        how it fights invaders, immune memory and vaccines
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-11`,
      title: `The Immune System: Your Body's Army`,
      duration: 18,
      xpReward: 75,
      badge: `immune-explorer`,
      badgeName: `Immune System Explorer`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Right now, as you read this, a silent battle is being fought inside your body. You're surrounded by tiny invaders, germs trying to make you sick, but you have an extraordinary defense force protecting you: your IMMUNE SYSTEM. It's like a brilliant, tireless army that patrols your body, identifies threats, fights them off, and even remembers them for next time. Most of the time, you never notice it working. By the end of today, you'll understand the amazing system that keeps you healthy. Let's begin.`,
          headline: `The Immune System`,
          subtitle: `Your body's tireless defense army, working right now`,
          visual: `/ue-assets/cosmos/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Immune System Is`,
          paragraphs: [
            `Your IMMUNE SYSTEM is your body's defense network against PATHOGENS, the harmful germs (like bacteria, viruses, and fungi) that can make you sick. It's not a single organ. It's a whole system of cells, tissues, and organs working together, spread throughout your body. Its job is to find invaders, destroy them, and keep you healthy. The immune system is incredibly sophisticated, able to tell the difference between your own body's cells and foreign invaders, and to attack the threats while leaving you unharmed.`,
            `You live in a world absolutely full of microscopic organisms. They're on every surface, in the air, in your food, everywhere. Most are harmless, and some are even helpful. But some pathogens can cause illness. Without an immune system, even a tiny scratch or a common germ could be deadly. Your immune system fights off countless threats every single day, usually so effectively that you never even know you were exposed. It's one of the most important systems keeping you alive, working silently around the clock.`,
          ],
          image: `/ue-assets/cosmos/l11-s1-what-is.webp`,
          imageCaption: `The immune system: a body-wide defense network against harmful germs.`,
          vocab: [
            {
              word: `immune system`,
              definition: `The body's defense network against pathogens (harmful germs). Made of cells, tissues, and organs working together to find and destroy invaders while leaving your own cells unharmed.`,
              audioPrompt: `Your immune system is your body's defense network against pathogens, {name}. Pathogens are the harmful germs, like bacteria, viruses, and fungi, that can make you sick. The immune system isn't a single organ. It's a whole system of cells, tissues, and organs working together throughout your body. Its job is to find invaders, destroy them, and keep you healthy. It's incredibly sophisticated, able to tell the difference between your own body's cells and foreign invaders. Your immune system fights off countless threats every day, often before you ever notice.`,
            },
            {
              word: `white blood cell`,
              definition: `The immune system's main soldiers. White blood cells patrol the body looking for invaders — some swallow and destroy germs directly, others help produce antibodies. They are found throughout the blood and tissues, always ready to fight.`,
              audioPrompt: `White blood cells are the immune system's main soldiers, {name}. They patrol your body looking for invaders. Some white blood cells swallow and destroy germs directly. Others help produce antibodies, the special proteins that lock onto specific pathogens and mark them for destruction. White blood cells are found throughout your blood and tissues, always patrolling, always ready to respond. When an invader is detected, your immune system signals white blood cells to rush to the site and fight. They are your body's first cellular responders.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Body's Layers of Defense`,
          paragraphs: [
            `Your immune defenses work in LAYERS. The first layer is physical barriers that keep invaders OUT. Your SKIN is a tough wall that most germs can't get through. Your nose, throat, and lungs are lined with mucus that traps germs, and tiny hairs that sweep them away. Your stomach acid destroys many germs in food. Tears and saliva contain germ-killing substances. These barriers stop most invaders before they ever get inside, like the walls and gates of a fortress.`,
            `If germs DO get past the barriers (say, through a cut), the second layer kicks in: special immune cells in your blood and tissues. WHITE BLOOD CELLS are the soldiers of your immune system. Some patrol your body looking for invaders. Some swallow and destroy germs directly. Others produce special weapons called ANTIBODIES that lock onto specific invaders and mark them for destruction. When you get a cut that becomes red and swollen, that's actually your immune system at work, rushing cells and fluids to fight infection. The redness and swelling are signs of the battle, not the enemy. Your body is defending you.`,
          ],
          image: `/ue-assets/cosmos/l11-s2-defenses.webp`,
          imageCaption: `Barriers keep germs out. White blood cells fight the ones that get in.`,
          vocab: [
            {
              word: `pathogen`,
              definition: `A harmful germ that can cause disease, such as a virus, bacterium, or fungus. The immune system's job is to find and destroy pathogens before they make you seriously ill.`,
              audioPrompt: `A pathogen is a harmful germ that can cause disease, {name}. Such as a virus, a bacterium, or a fungus. You live in a world absolutely full of microscopic organisms. Most are harmless, and some are even helpful. But pathogens are the ones that can make you sick. Your immune system's job is to find and destroy pathogens before they make you seriously ill. Without your immune system, even a tiny scratch or a common germ could be deadly.`,
            },
            {
              word: `virus`,
              definition: `A type of pathogen — a tiny infectious particle that invades living cells and uses them to make copies of itself. Viruses cause illnesses like the cold, flu, and COVID-19. Unlike bacteria, viruses cannot be treated with antibiotics.`,
              audioPrompt: `A virus is a type of pathogen, {name}. It's a tiny infectious particle that invades your body's cells and uses them to make copies of itself. Viruses cause many common illnesses, like the cold, the flu, and COVID-19. Unlike bacteria, viruses cannot be treated with antibiotics. Instead, your immune system must detect and fight them directly, or vaccines can train your body to recognize them in advance. Your immune system is remarkably good at fighting viruses once it has learned to recognize them.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How the Immune System Fights`,
          paragraphs: [
            `When a pathogen invades, your immune system launches a coordinated response, like a well-trained army. First, the invader is DETECTED. Patrolling immune cells recognize that something foreign and dangerous is present. Next, the alarm is raised, and immune cells RUSH to the site. Some immune cells swallow and destroy invaders directly. Others produce ANTIBODIES, special proteins shaped to lock onto that specific pathogen, marking it for destruction and stopping it from spreading. The pathogen is then DESTROYED and cleared from the body.`,
            `This is why you sometimes feel sick for a few days and then recover. The symptoms you feel, like fever, tiredness, or a runny nose, are often signs of your immune system fighting, not just the germ itself. A fever, for example, raises your body temperature to help slow down invaders and speed up your immune cells. Feeling tired makes you rest so your body can focus energy on the battle. Your symptoms are often your body's defense strategy in action. After a few days, if the immune system wins (which it usually does), the pathogen is cleared, and you feel better. But the immune system has one more amazing trick, coming up next.`,
          ],
          image: `/ue-assets/cosmos/l11-s3-fights.webp`,
          imageCaption: `Detect, raise the alarm, attack with cells and antibodies, destroy the invader.`,
          vocab: [
            {
              word: `antibody`,
              definition: `A special protein made by the immune system, shaped to lock onto a specific pathogen and mark it for destruction. Each antibody targets one particular invader, like a key fitting one lock.`,
              audioPrompt: `An antibody is a special protein made by the immune system, {name}. It's shaped to lock onto a specific pathogen and mark it for destruction. Each antibody targets one particular invader, like a key fitting one lock. When your immune system encounters a pathogen, some cells produce antibodies designed to recognize that exact germ. The antibodies lock onto the invaders, stop them from spreading, and signal other immune cells to destroy them. They are one of the immune system's most powerful and precise weapons.`,
            },
            {
              word: `fever`,
              definition: `A body temperature higher than normal, triggered by the immune system fighting an infection. Fever slows down many pathogens and speeds up immune cells — it is a defense strategy, not just a symptom.`,
              audioPrompt: `A fever is a body temperature higher than normal, {name}. It's caused by the immune system releasing chemicals that raise your internal heat. Fever is actually one of the immune system's strategies: a higher temperature slows down many pathogens, because they thrive at normal body temperature but struggle when it rises. At the same time, higher temperature helps your immune cells work faster. A fever is often a sign that your immune system is actively fighting an infection. It's not just a symptom — it's part of the defense.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Immune Memory and Vaccines`,
          paragraphs: [
            `Here's the immune system's most brilliant feature: MEMORY. After your immune system defeats a pathogen, it KEEPS a memory of it by making special "memory cells." If that same pathogen ever invades again, your immune system recognizes it instantly and destroys it so fast that you may never even get sick. This is why you usually get certain illnesses (like chickenpox) only once. Your body remembers and is ready. Your immune system literally learns from experience, getting better at protecting you over your lifetime.`,
            `This memory is also the secret behind VACCINES, one of the greatest achievements in medical history. A vaccine safely "shows" your immune system a harmless piece or weakened version of a pathogen, so your body can practice making antibodies and memory cells WITHOUT you getting sick. Then, if you ever meet the real pathogen, your immune system is already prepared to defeat it. Vaccines have saved hundreds of millions of lives and wiped out or nearly wiped out diseases that once killed huge numbers of people, like smallpox and polio. Nova's teaching: your immune system is a marvel of biology, an intelligent, learning defense force protecting you every moment. And human ingenuity, through vaccines, has learned to work WITH it to protect us all. Science and biology, teaming up to keep you alive.`,
          ],
          image: `/ue-assets/cosmos/l11-s4-memory.webp`,
          imageCaption: `Memory cells remember past invaders. Vaccines safely train your defenses in advance.`,
          vocab: [
            {
              word: `vaccine`,
              definition: `A medicine that safely trains your immune system to recognize a pathogen, by showing it a harmless or weakened version. Your body builds memory cells and antibodies in advance, so it can defeat the real pathogen if it ever appears.`,
              audioPrompt: `A vaccine is a medicine that safely trains your immune system to recognize a pathogen, {name}. It works by showing your body a harmless piece or weakened version of a germ, so your immune system can practice making antibodies and memory cells without you getting sick. Then, if you ever meet the real pathogen, your immune system is already prepared to defeat it quickly. Vaccines are one of the greatest achievements in medical history. They've saved hundreds of millions of lives worldwide.`,
            },
            {
              word: `immune memory`,
              definition: `The immune system's ability to remember past invaders. After defeating a pathogen, special memory cells are made so the body can recognize and destroy that germ instantly if it ever returns — which is why some illnesses strike only once.`,
              audioPrompt: `Immune memory is the ability of the immune system to remember past invaders, {name}. After defeating a pathogen, your immune system makes special memory cells. If that same pathogen ever invades again, your immune system recognizes it instantly and destroys it so fast you may never get sick. This is why you usually get certain illnesses, like chickenpox, only once. Your immune system literally learns from experience. Immune memory is also what vaccines activate: they build memory in advance, so your body is ready before the real pathogen arrives.`,
            },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to order the immune response, {name}. Here are five steps your immune system takes when a harmful germ invades, scrambled up. Use the arrows to arrange them in order, from FIRST (top) to LAST (bottom). Think about what your body's army does, step by step.`,
          items: [
            { id: `step-enter`,   label: `A harmful pathogen gets past the body's barriers and enters`,      position: 1 },
            { id: `step-detect`,  label: `Patrolling immune cells detect the foreign invader`,              position: 2 },
            { id: `step-attack`,  label: `Immune cells rush in and produce antibodies to target the germ`,  position: 3 },
            { id: `step-destroy`, label: `The pathogen is destroyed and cleared from the body`,             position: 4 },
            { id: `step-memory`,  label: `The immune system makes memory cells to remember this invader`,   position: 5 },
          ],
          completionMessage: `Perfect, {name}! That's the immune response in order: the invader enters, your cells detect it, they attack with antibodies, the germ is destroyed, and your body makes memory cells so it's ready next time. That last step, memory, is exactly what vaccines train in advance. Your body's army is brilliant.`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is the IMMUNE SYSTEM?`,
              options: [
                `A single organ`,
                `The body's defense network of cells, tissues, and organs that fights harmful germs`,
                `Part of the digestive system`,
                `A type of bone`,
              ],
              correctIndex: 1,
              explanation: `The immune system is your body's defense network against pathogens (harmful germs). It's not one organ but a whole system of cells, tissues, and organs working together to find and destroy invaders while leaving your own cells unharmed.` },

            { id: `l11-q2`, format: `multiple-choice`,
              question: `What is a PATHOGEN?`,
              options: [
                `A helpful cell`,
                `A harmful germ that can cause disease, like a virus, bacterium, or fungus`,
                `A type of antibody`,
                `A vitamin`,
              ],
              correctIndex: 1,
              explanation: `A pathogen is a harmful germ that can cause disease, such as a virus, bacterium, or fungus. The immune system's job is to find and destroy pathogens before they make you seriously ill. Most microbes are harmless, but pathogens are the dangerous ones.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What is the body's FIRST layer of defense against germs?`,
              options: [
                `White blood cells`,
                `Physical barriers like skin, mucus, and stomach acid that keep germs out`,
                `Antibodies`,
                `Fever`,
              ],
              correctIndex: 1,
              explanation: `The first layer is physical barriers: skin (a tough wall), mucus and tiny hairs in your nose and lungs, stomach acid, and germ-killing tears and saliva. These stop most invaders before they ever get inside, like a fortress's walls and gates.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `What are ANTIBODIES?`,
              options: [
                `Harmful germs`,
                `Special proteins shaped to lock onto a specific pathogen and mark it for destruction`,
                `A type of skin`,
                `Red blood cells`,
              ],
              correctIndex: 1,
              explanation: `Antibodies are special proteins made by the immune system, each shaped to lock onto a specific pathogen, like a key fitting one lock. They mark invaders for destruction and stop them from spreading. They're a precise, custom-made weapon for each threat.` },

            { id: `l11-q5`, format: `true-false`,
              question: `True or false: Symptoms like fever and tiredness are often signs of your immune system fighting, not just the germ itself.`,
              correctAnswer: true,
              explanation: `True. Many symptoms are your body's defense strategy in action. A fever raises your temperature to slow invaders and speed up immune cells. Tiredness makes you rest so your body can focus energy on the battle. Your symptoms often mean your immune system is working.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `Why do you usually get some illnesses (like chickenpox) only ONCE?`,
              options: [
                `The germ disappears forever`,
                `Your immune system makes memory cells, so it recognizes and destroys that pathogen instantly if it returns`,
                `It's just luck`,
                `Your body forgets it`,
              ],
              correctIndex: 1,
              explanation: `After defeating a pathogen, your immune system keeps memory cells. If that same pathogen invades again, your body recognizes it instantly and destroys it so fast you may never get sick. Your immune system learns from experience.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `How does a VACCINE work?`,
              options: [
                `It gives you the disease`,
                `It safely shows your immune system a harmless or weakened version of a pathogen, so it builds memory and antibodies in advance`,
                `It kills all germs forever`,
                `It replaces your immune system`,
              ],
              correctIndex: 1,
              explanation: `A vaccine safely "shows" your immune system a harmless piece or weakened version of a pathogen, letting your body practice making antibodies and memory cells without getting sick. Then if you meet the real pathogen, you're already prepared to defeat it.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `Why are vaccines considered one of medicine's greatest achievements?`,
              options: [
                `They're cheap`,
                `They've saved hundreds of millions of lives and nearly wiped out deadly diseases like smallpox and polio`,
                `They taste good`,
                `They're new`,
              ],
              correctIndex: 1,
              explanation: `Vaccines have saved hundreds of millions of lives and wiped out or nearly eliminated diseases that once killed huge numbers of people, like smallpox and polio. They work WITH your immune system's natural memory, a triumph of human ingenuity and biology together.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Your immune system fights off threats every day without you even noticing. How does it feel to know an invisible army is protecting you right now?` },
            { id: `r2`, text: `Symptoms like fever are often your body fighting, not just the illness. Does that change how you think about feeling sick?` },
            { id: `r3`, text: `Your immune system learns from experience and remembers past invaders. What's amazing to you about a body system that can actually learn?` },
            { id: `r4`, text: `Vaccines train your immune defenses in advance. Why do you think it took human cleverness to figure out how to work WITH the body's natural memory?` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Understanding your immune system helps you take care of your health and make sense of the world. It explains why rest, good food, and sleep help you recover when sick (they give your immune army the resources it needs). It explains why washing your hands works (it removes pathogens before they get inside). And it helps you understand vaccines, one of the most important public health tools ever created. During disease outbreaks, understanding how immunity and vaccines work helps people make informed decisions. Nova's note: your body is doing extraordinary work to keep you healthy every day. Taking care of it (sleep, nutrition, hygiene) is how you support your own amazing defense force.`,
          familyAdventure: `Family Defense Investigation. As a family, talk about all the ways your bodies defend against germs and all the ways you help. Map out your "fortress": skin as walls, washing hands as removing invaders before they enter, sleep and good food as supplying your immune army. Then talk about a time someone in the family got sick and recovered. What was the immune system doing during those days? You're connecting biology to your real lives.`,
          creativePrompt: {
            intro: `Imagine your immune system as an army defending a fortress (your body). Write the story of a battle against an invading pathogen.`,
            floor: `Write at least 5 sentences. Describe the invader getting in, the immune cells detecting and fighting it, and the body winning.`,
            stretch: `Write 8 to 10 sentences. Tell the full battle: the invader breaching the walls, the alarm, the immune soldiers and antibody weapons, the victory, and the memory cells left behind.`,
            open: `Write as much as you want. Write a full epic battle story. Set the scene of the fortress (your body) with its walls (skin, mucus). Show the pathogen invading, the patrolling immune cells sounding the alarm, the white blood cell soldiers rushing in, the antibody weapons locking onto the enemy, the destruction of the invader, and finally the wise commanders creating memory cells so the fortress is never caught off guard again. Make it exciting and accurate.`,
            frames: [
              `Deep inside the fortress of the body, all was calm, until ___.`,
              `The first defenders to notice the invader were ___.`,
              `The alarm was raised, and ___.`,
              `The immune soldiers fought by ___.`,
              `After the victory, the body made sure to ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Excellent work, {name}. You can now explain what the immune system is, the body's layers of defense, how it detects and fights invaders, and the brilliant role of immune memory and vaccines. You even put the immune response in order. Next lesson: we explore why you look like your family, and how traits pass from parents to children. GENETICS. See you there. — Nova.`,
          badge: `immune-explorer`,
          badgeName: `Immune System Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L11.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L11 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
