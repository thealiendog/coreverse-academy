// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L16 — When You're Sick
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : immune system, rest, hydration, returning slowly from illness
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 smart sickness recovery steps)
// SCOPE: understanding immune symptoms as body intelligence; deep rest;
//        hydration and simple food; when to seek help; returning gradually
// VOICE: Terra = honest, calm, treats kid as smart enough to understand
//        what their body is doing and why
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-16`,
      title: `When You're Sick`,
      duration: 18,
      xpReward: 75,
      badge: `body-honored`,
      badgeName: `Body Honored`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we talk about something every living creature goes through: getting SICK. Most kids (and adults) handle sickness about as poorly as possible. Push through it. Feel guilty about resting. Go back to school too early. Drink too little. Eat nothing OR eat junk food. Miss what their body is actually trying to tell them. Today, you learn the REAL science of what happens when you're sick and the five smartest things you can do to recover faster and smarter. No myths. No fear. Just what your body actually needs. Settle in.`,
          headline: `When You're Sick`,
          subtitle: `What your body is doing. What it needs. How to recover smarter`,
          visual: `/ue-assets/lw/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Body Knows What It's Doing`,
          paragraphs: [
            `When you get sick, your body IMMEDIATELY goes to work defending you. Your IMMUNE SYSTEM is your body's defense team: a complex network of white blood cells, proteins, and organs (including your lymph nodes, spleen, and bone marrow) that detect invaders like viruses and bacteria and fight them off. The moment a germ gets in, your immune system starts deploying defenders, sending signals, raising temperature, and mobilizing resources.`,
            `Here's the part most people miss: the SYMPTOMS you feel (fever, fatigue, runny nose, cough, achiness) are NOT the sickness. They're the FIGHT. Fever raises your body's temperature to make it harder for germs to thrive. Fatigue forces you to rest so your body has energy for the immune battle. Mucus traps germs and carries them out. Coughing clears your airways. Every symptom is your body being smart. When you understand this, sickness shifts from random misery to body intelligence you can respect and work WITH.`,
          ],
          image: `/ue-assets/lw/l16-s1-immune.webp`,
          imageCaption: `Your symptoms are not the sickness. They're the fight. Your body is being smart, not failing.`,
          vocab: [
            { word: `immune system`,
              definition: `The network of cells, tissues, and organs that protect your body from infection and illness. Deploys white blood cells, proteins, and signals the moment germs arrive. Symptoms (fever, fatigue, mucus) are your immune system working hard, not failing.`,
              audioPrompt: `Your immune system is your body's defense team that fights off germs, {name}. Viruses, bacteria, infections. The symptoms you feel when sick, fever, fatigue, runny nose, cough, achiness, are part of the fight, not random misery. Fever raises your body's temperature to make it harder for germs to thrive. Fatigue forces you to rest so your body has energy for the fight. Mucus traps germs to expel them. Coughing clears your airways. Your body is being smart, not failing. Knowing this changes your relationship with sickness completely.` },
            { word: `symptoms as signals`,
              definition: `The reframe that each symptom is your body doing something intelligent — not random suffering. Fever: raising temperature. Fatigue: forcing rest for the immune fight. Runny nose and cough: expelling germs. Working with symptoms instead of against them speeds recovery.`,
              audioPrompt: `Symptoms as signals is the reframe that changes how you experience sickness, {name}. Instead of fighting against your symptoms, you understand that each one is your body doing something smart. Fever: your body raising temperature to make germs harder to survive. Fatigue: forcing rest so energy goes to the immune fight. Runny nose and cough: expelling germs. When you understand this, sickness shifts from random misery to body wisdom in action. You work with your symptoms instead of against them. Recovery becomes partnership, not battle.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Deep Rest Is the Medicine`,
          paragraphs: [
            `The MOST powerful thing you can do when sick is rest deeply and sleep more than usual. When you sleep, your immune system does its most active work: producing proteins called cytokines that fight infection and inflammation, mobilizing white blood cells, and processing the day's immune battle. Researchers studying sick people found that those who slept MORE than usual recovered significantly faster, often DAYS sooner, than those who kept to normal schedules. Every extra hour of sleep during illness is an hour your immune system is working at its best.`,
            `Deep rest means more than just sleeping. It means: more sleep than usual (aim for 10-12 hours instead of your normal 9). Daytime naps if you can. Staying home from school or activities when contagious or really unwell. Avoiding screens as much as possible (screens don't actually rest your brain even when you're lying down). Trying REAL rest: lying quietly, soft music, a familiar book, just being still. Limiting social activity even with people you love. Modern culture pushes "push through it." Your body needs the opposite when it's fighting an infection.`,
          ],
          image: `/ue-assets/lw/l16-s2-rest.webp`,
          imageCaption: `Extra sleep during illness is when your immune system does its best work. Every hour counts.`,
          vocab: [
            { word: `deep rest`,
              definition: `The active practice of giving your body extended quiet time to heal during illness — extra sleep (aim for 10-12 hours), daytime naps, no screens, real stillness. Not passive. Deliberately creating the conditions your immune system needs to do its best work.`,
              audioPrompt: `Deep rest is the active practice of giving your body deep quiet time to heal during illness, {name}. More sleep than usual, aim for 10 to 12 hours instead of your normal 9. Daytime naps if you can. Stay home from school or activities when contagious or really unwell. Avoid screens as much as possible, they don't actually rest your brain even when lying down. Try real rest, lying quietly, soft music, a familiar book, just being still. Limit social activity even with people you love.` },
            { word: `sleep during illness`,
              definition: `The most powerful healing tool available to your body when sick — immune system produces cytokines, mobilizes white blood cells, and does its most active work while you sleep. Researchers found sick people who slept MORE recovered days sooner than those who kept to normal schedules.`,
              audioPrompt: `Sleep during illness is the most powerful healing tool available to your body, {name}. When you sleep, your immune system does its most active work: producing proteins called cytokines that fight infection and inflammation, mobilizing white blood cells, and processing the day's immune activity. Researchers studying sick people found that those who slept more than usual recovered significantly faster, often days sooner, than those who kept to normal schedules. Every hour of extra sleep during illness is an hour your immune system is working at its best.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Hydrate, Eat Simply, Tell Adults`,
          paragraphs: [
            `Three basics matter most when you're sick. FIRST: HYDRATE A LOT. Fever, vomiting, and diarrhea all cause rapid water loss. Even a mild cold increases how much water your body needs to fight germs and regulate temperature. Water is the foundation. Broth adds sodium and minerals. Herbal tea soothes and hydrates. Electrolyte drinks replace minerals lost through fever or vomiting. Ice pops work if you can't drink much at once. Hydrate early and consistently. It speeds recovery more than most people realize.`,
            `SECOND: EAT SIMPLE FOODS when hungry. Crackers, toast, broth, soup, rice, bananas, applesauce. Skip heavy, fatty, sugary, or spicy foods. It's normal to not feel hungry when sick. Don't force food. THIRD: TELL TRUSTED ADULTS ALWAYS. Seek medical help for: high fever (over 103°F or 39.4°C), trouble breathing, severe pain, rash with fever, confusion, or symptoms that get worse instead of better. Most sicknesses heal with rest and time. But some need professional support. Trusted adults need to know when you're really sick so they can help you make good decisions.`,
          ],
          image: `/ue-assets/lw/l16-s3-hydrate.webp`,
          imageCaption: `Hydrate a lot. Eat simple foods when hungry. Always tell trusted adults. Three basics that speed recovery.`,
          vocab: [
            { word: `sickness-care basics`,
              definition: `The three core practices during illness: (1) hydrate a lot — water, broth, herbal tea, electrolytes; (2) eat simple foods when hungry — crackers, soup, rice, toast, bananas; (3) always tell trusted adults and seek medical help for serious symptoms.`,
              audioPrompt: `Sickness-care basics, {name}. First, hydrate a lot. Water, broth, herbal tea, diluted juice, ice pops, electrolyte drinks if recommended. Sickness dehydrates you fast, especially with fever, vomiting, or diarrhea. Second, eat simple foods when hungry. Crackers, toast, broth, soup, rice, bananas, applesauce. Skip heavy, fatty, sugary, or spicy foods. It's normal to not feel hungry when sick. Don't force food. Third, tell trusted adults always. Seek medical help for high fever, breathing trouble, severe pain, rash with fever, confusion, or symptoms that get worse.` },
            { word: `sickness hydration`,
              definition: `The practice of drinking significantly more fluids than normal during illness. Fever, vomiting, and diarrhea all cause rapid water loss. Water is the foundation; broth adds minerals; herbal tea soothes; electrolyte drinks replace lost minerals. Hydrate early and consistently — it speeds recovery.`,
              audioPrompt: `Sickness hydration is the practice of drinking significantly more fluids than normal during illness, {name}. Fever, vomiting, and diarrhea all cause rapid water loss. Even a mild cold increases how much water your body needs to fight germs and regulate temperature. Water is the foundation. Broth adds sodium and minerals. Herbal tea soothes and hydrates. Electrolyte drinks replace minerals lost through fever or vomiting. Ice pops work for kids who can't drink much at once. Hydrate early and consistently. It speeds recovery.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Return Slowly — Gradual Is Faster`,
          paragraphs: [
            `Here's the most counterintuitive part of being sick: the fastest way to recover is to NOT rush back. When symptoms ease, most people jump back into full activity immediately. School, sports, social plans, homework. And then they wonder why they get sick again a few days later, or why it lingers longer than it should. Researchers studying this found that people who returned to full activity too fast had LONGER total sick periods than those who returned gradually.`,
            `RETURNING SLOWLY means: even after symptoms feel mostly gone, give yourself 1-2 more days of taking it gentle. Sleep a little extra. Skip the hardest activities for a few days. Eat well. Hydrate. Let your body fully restore. Feeling "a little better" is not the same as being fully healed. Your immune system is still finishing the job. Pushing too fast diverts energy away from healing and back to daily demands. The RETURN-TOO-SOON TRAP is real: rushing back extends total sick time. Gradual return is actually the faster path to being fully well.`,
          ],
          image: `/ue-assets/lw/l16-s4-return.webp`,
          imageCaption: `"A little better" isn't fully healed. Give yourself 1-2 extra gentle days. Gradual return is faster total recovery.`,
          vocab: [
            { word: `returning slowly`,
              definition: `The wise practice of easing back into full activity gradually after illness — giving yourself 1-2 more gentle days after symptoms ease, sleeping a little extra, skipping the hardest activities. Researchers found this leads to shorter total sick periods than rushing back.`,
              audioPrompt: `Returning slowly is the wise practice of coming back from sickness gradually, not jumping straight into full activity when symptoms ease, {name}. Even after symptoms feel mostly gone, give yourself 1 to 2 more days of taking it gentle. Sleep a little extra. Skip the hardest activities for a few days. Eat well. Hydrate. Let your body fully restore. Researchers found that those who returned to full activity too fast had longer total sick periods than those who returned gradually.` },
            { word: `the return-too-soon trap`,
              definition: `When you jump back to full activity as soon as symptoms ease, only to relapse or have illness linger longer. Feeling a little better isn't the same as being fully healed — your immune system is still working. Pushing fast diverts energy away from healing. Gradual return is shorter total sick time.`,
              audioPrompt: `The return-too-soon trap is when you jump back to full activity as soon as symptoms ease, only to get sick again or have it linger, {name}. Feeling a little better isn't the same as being fully healed. Your immune system is still working. Pushing too fast diverts energy away from healing. Give yourself 1 to 2 extra gentle days after symptoms ease. Rest a bit more, skip the hardest activities, hydrate well. People who return gradually have shorter total sick periods than people who rush back.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the smart sickness recovery steps in order, {name}. Here are five things to do when you're sick, from the FIRST response to your FINAL step back to full life. Use the arrows to arrange them.`,
          items: [
            { id: `step-notice`,   label: `NOTICE. Pay attention to what your body is telling you. Symptoms are signals, not enemies. Your body is being smart`,                                                             position: 1 },
            { id: `step-rest`,     label: `REST DEEPLY. More sleep than usual. Aim for 10-12 hours. Daytime naps. No screens. Real stillness. This is when your immune system does its best work`,                   position: 2 },
            { id: `step-hydrate`,  label: `HYDRATE PLUS SIMPLE FOOD. Drink more than usual. Eat simple foods when hungry. Always tell trusted adults so they can help you make good decisions`,                       position: 3 },
            { id: `step-help`,     label: `SEEK HELP IF NEEDED. High fever, breathing trouble, severe pain, rash with fever, confusion, or symptoms getting worse. These need a doctor or trusted adult immediately`, position: 4 },
            { id: `step-return`,   label: `RETURN SLOWLY. Give yourself 1-2 extra gentle days after symptoms ease. Gradual return is faster total recovery than rushing back`,                                         position: 5 },
          ],
          completionMessage: `That's the smart sickness sequence, {name}. Notice, rest deeply, hydrate and eat simply, seek help when needed, and return slowly. Your body knows how to heal. Your job is to give it what it needs and get out of its way.`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is your IMMUNE SYSTEM?`,
              options: [
                `Just your stomach`,
                `Your body's defense team — cells, tissues, and organs that detect and fight off viruses, bacteria, and infections`,
                `The part that makes you sneeze`,
                `Not real`,
              ],
              correctIndex: 1,
              explanation: `Your immune system is your body's defense team: a complex network of white blood cells, proteins, and organs that detect invaders and fight them off. The moment a germ gets in, your immune system starts deploying defenders, sending signals, raising temperature, and mobilizing resources.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `What is FEVER actually doing?`,
              options: [
                `Hurting you randomly`,
                `Raising your body's temperature to make it HARDER for germs to thrive. It's your immune system being smart, not failing`,
                `Nothing helpful`,
                `A sign you need antibiotics immediately`,
              ],
              correctIndex: 1,
              explanation: `Fever raises your body's temperature to make it harder for germs to thrive. It's not random misery — it's your body being smart. Fatigue forces you to rest (so energy goes to the immune fight). Mucus traps germs and expels them. Coughing clears your airways. Every symptom is body intelligence.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `Why is EXTRA SLEEP so important when sick?`,
              options: [
                `It's not, push through it`,
                `When you sleep, your immune system does its most active work — producing cytokines, mobilizing white blood cells. Sick people who slept MORE recovered DAYS sooner`,
                `Sleep makes sickness worse`,
                `Random reason`,
              ],
              correctIndex: 1,
              explanation: `When you sleep, your immune system produces cytokines (proteins that fight infection), mobilizes white blood cells, and does its most intensive work. Researchers studying sick people found those who slept MORE than usual recovered significantly faster — often days sooner — than those who kept to normal schedules.` },

            { id: `l16-q4`, format: `multiple-choice`,
              question: `What should you DRINK when sick?`,
              options: [
                `Nothing, starve a fever`,
                `Much more than usual — water, broth, herbal tea, electrolyte drinks, ice pops. Fever, vomiting, and diarrhea dehydrate you fast`,
                `Only soda`,
                `Nothing special`,
              ],
              correctIndex: 1,
              explanation: `Hydration is critical when sick. Fever, vomiting, and diarrhea all cause rapid water loss. Even a mild cold increases how much water your body needs. Water is the foundation. Broth adds sodium and minerals. Herbal tea soothes and hydrates. Electrolyte drinks replace minerals lost through fever or vomiting. Hydrate early and consistently.` },

            { id: `l16-q5`, format: `multiple-choice`,
              question: `What FOOD should you eat when sick?`,
              options: [
                `Heavy, rich, spicy food for energy`,
                `Simple foods when hungry — crackers, toast, broth, soup, rice, bananas. Skip heavy, fatty, sugary, spicy foods. Not feeling hungry is normal`,
                `As much food as possible`,
                `Only sugary treats`,
              ],
              correctIndex: 1,
              explanation: `Simple foods support sick bodies: crackers, toast, broth, soup, rice, bananas, applesauce. Skip heavy, fatty, sugary, or spicy foods. It's completely normal to not feel hungry when sick — don't force food. Your body is prioritizing the immune fight over digestion.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `What is the RETURN-TOO-SOON TRAP?`,
              options: [
                `Going home sick from school`,
                `Jumping back to full activity as soon as symptoms ease, only to relapse or have illness linger longer. Rushing back extends total sick time`,
                `A board game`,
                `Sleeping too much`,
              ],
              correctIndex: 1,
              explanation: `The return-too-soon trap is when you jump back to full activity as soon as symptoms ease, then get sick again or have illness linger. Feeling "a little better" isn't the same as being fully healed. Your immune system is still working. Pushing too fast diverts energy away from healing. Gradual return leads to shorter total sick time.` },

            { id: `l16-q7`, format: `true-false`,
              question: `True or false: Symptoms like fever and fatigue mean your body is failing.`,
              correctAnswer: false,
              explanation: `False. Symptoms are your body working hard, not failing. Fever raises temperature to make conditions harder for germs. Fatigue forces rest so immune energy is available. Mucus traps and expels germs. Coughing clears airways. Every symptom is body intelligence. When you understand this, sickness shifts from random misery to body wisdom you can work WITH.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `What should you do AFTER symptoms ease?`,
              options: [
                `Jump straight back to full activity`,
                `Give yourself 1-2 more GENTLE days — sleep a little extra, skip the hardest activities, eat well, hydrate. Gradual return is faster total recovery`,
                `Nothing different`,
                `Immediately sprint a mile`,
              ],
              correctIndex: 1,
              explanation: `After symptoms ease, give yourself 1-2 more gentle days. Sleep a little extra. Skip the hardest activities for a few days. Eat well. Hydrate. Researchers found that people who returned gradually had shorter total sick periods than those who rushed back. Gradual return is the smarter, faster path to being fully well.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Take a comfortable breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `When you've been sick before, how did you handle it? Did you rest deeply, or did you push through? What happened?` },
            { id: `r2`, text: `Is there something from this lesson that changes how you'll think about being sick in the future?` },
            { id: `r3`, text: `What's one way your family handles sickness that you think works well? What's one thing you might suggest doing differently?` },
            { id: `r4`, text: `What does your body feel like when you haven't given it enough rest during illness? Have you felt the "return-too-soon trap" before?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `The science of sickness recovery is one of the most misunderstood areas in everyday health. Modern culture's "push through it" attitude is directly contradicted by research. Sick people who rest more, sleep more, hydrate more, and return gradually consistently recover faster and with fewer relapses than those who keep going at full speed. Your immune system is a sophisticated, well-designed system that has been evolving for millions of years. It knows what to do. Your job is to give it the conditions it needs: rest, hydration, simple fuel, and time. Terra's note: in the wild, sick wolves rest. They don't run after deer when they're fighting an infection. They find a quiet place, lie still, drink from a stream, and let their bodies work. Somewhere along the way, humans forgot this ancient wisdom and turned sickness into something to be pushed through, hidden, and rushed past. The research says: the wolves had it right all along.`,
          familyAdventure: `Family Sickness Plan. As a family, create a simple shared agreement about how you handle sickness. Who stays home when? What does rest look like in your house? What's always stocked for hydration (broth, herbal tea, electrolytes)? When do you call a doctor? Putting words to these agreements before anyone gets sick means better decisions when someone actually does. You might also share this lesson's most interesting fact — that symptoms are the body fighting, not failing — and see whether it shifts how anyone in your family thinks about being sick.`,
          creativePrompt: {
            intro: `Write about your relationship with being sick — how you've handled it before, and how you'd handle it smarter now.`,
            floor: `Write at least 5 sentences. Describe a past experience with being sick and one thing you'd do differently now.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece about what smart sickness recovery looks like for you.`,
            open: `Write as much as you want. Write a full piece about sickness and recovery through the lens of body intelligence. Describe a past experience of being sick — how you felt, what you did, how long it lasted. Reflect on what you know now about what your body was doing (the immune fight) and whether you worked with it or against it. Describe what smart sickness recovery would look like for you now: deep rest, hydration, simple food, returning slowly. Write about one time you (or someone you know) fell into the return-too-soon trap. End with one specific thing you'll do differently next time. Make it honest and real.`,
            frames: [
              `A time I was sick, I remember ___.`,
              `What I know now that I didn't know then is ___.`,
              `Smart recovery for me would look like ___.`,
              `The hardest part of resting deeply would be ___.`,
              `Next time I'm sick, I will ___.`,
            ],
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L16;
