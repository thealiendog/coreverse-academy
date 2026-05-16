// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L13 — The Digestive System: Food's Amazing Journey
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L13 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-13`,
      title:     `The Digestive System: Food's Amazing Journey`,
      duration:  12,
      xpReward:  50,
      badge:     `gut-expert`,
      badgeName: `Gut Expert`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Every time you eat something, {name}, an extraordinary journey begins — one that involves more than thirty feet of your digestive system working together in a carefully sequenced process that takes anywhere from six hours to two days to complete. Most of us have no idea this is happening. We eat, and food just… disappears. Today we're going to look at the digestive system in real detail: how it breaks food down from something you bite into something your cells can actually use, what each organ does, and what happens when the system isn't running well. It's one of the most remarkable processes in the human body.`,
          headline: `The Digestive System: Food's Amazing Journey`,
          subtitle: `Your digestive system is a 30-foot marvel of biological engineering — running continuously, mostly without your awareness, and far more sophisticated than it looks`,
          visual: `/explorer-assets/wellness/l13-welcome.png`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The 30-Foot Journey`,
          paragraphs: [
            `Every time you eat, an extraordinary journey begins.`,
            `More than 30 feet of digestive system, working together in a carefully sequenced process — taking anywhere from six hours to two days to complete. Most of us never notice.`,
          ],
          image: `/explorer-assets/wellness/l13-s1-thirty-foot-journey.png`,
          imageCaption: `Thirty feet of digestive system, running in sequence, every single time you eat. Most of us never give it a thought.`,
          vocab: [
            { word: `digestive system`, definition: `The thirty-foot system that breaks food down into nutrients your cells can use. Runs continuously, mostly without your awareness.`,
              audioPrompt: `Your digestive system is over thirty feet long, {name}, and most of it sits coiled inside you, running in sequence every time you eat. From mouth to small intestine to large intestine, each section has a specific job, and they work together in a beautifully coordinated process that takes hours — sometimes days — to complete. All of it happening quietly while you go about your day.` },
            { word: `journey`,          definition: `What food goes through after you eat it. Hours-long process — chewing, churning, breaking down, absorbing, eventually leaving.`,
              audioPrompt: `Food goes on a remarkable journey through your body, {name}. It starts the moment you take a bite. It can take six hours just to leave your stomach. The whole journey — mouth to ending — can take anywhere from one day to three days, depending on what you ate. By the time it's done, your body has extracted everything useful from it.` },
            { word: `sequence`,         definition: `The order in which things happen. Each digestive organ takes its turn — mouth, then stomach, then small intestine, then large intestine.`,
              audioPrompt: `Digestion is sequenced, {name} — each organ takes its turn, doing its specific job, before passing food along to the next stage. Mouth and saliva first. Stomach acid second. Small intestine and pancreas and liver third. Large intestine fourth. If any stage runs poorly, the whole sequence suffers. That's why how you eat and what you eat affects so much of how you feel.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `It Starts in Your Mouth`,
          paragraphs: [
            `Digestion doesn't start in your stomach. It starts in your mouth.`,
            `Chewing breaks food into pieces. Saliva contains ENZYMES that start breaking down carbohydrates immediately. Then it travels down to the stomach, where acid and more enzymes turn it into a liquid.`,
          ],
          image: `/explorer-assets/wellness/l13-s2-starts-in-mouth.png`,
          imageCaption: `Chewing isn't just preparation. It's real digestive work. The more you chew, the easier everything that comes after.`,
          vocab: [
            { word: `enzyme`,  definition: `A protein that speeds up a specific chemical reaction. Digestive enzymes break food down into pieces your body can absorb.`,
              audioPrompt: `Enzymes are your digestive system's tools, {name}. The moment food enters your mouth, salivary enzymes begin breaking down carbohydrates. In your stomach, other enzymes work with acid to break down proteins. In your small intestine, more enzymes arrive to finish the job. Each one is precisely shaped for a specific task — a remarkable level of coordination happening automatically with every meal.` },
            { word: `chew`,    definition: `Physical breakdown of food using your teeth. Chewing more thoroughly is one of the simplest ways to improve digestion.`,
              audioPrompt: `Chewing properly is one of the simplest digestive upgrades there is, {name}. The smaller the pieces of food reaching your stomach, the easier the rest of digestion works. Most people swallow much sooner than they should. Slowing down and chewing thoroughly — twenty, thirty chews per bite — sounds small, but it genuinely changes how well the rest of the system runs.` },
            { word: `stomach`, definition: `Where food meets acid and enzymes for two to four hours and gets churned into a liquid called chyme. Also kills most bacteria in food.`,
              audioPrompt: `Your stomach is one of the most acidic environments in nature, {name} — strong enough to kill most bacteria in food and powerful enough to break down protein. It churns food with hydrochloric acid and digestive enzymes for two to four hours, eventually turning it into a thick liquid called chyme. Then that chyme moves into your small intestine for the next stage of the journey.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Small Intestine`,
          paragraphs: [
            `The small intestine is where most nutrition actually happens.`,
            `20 feet long. Inner wall covered in tiny finger-like VILLI that expand the absorption surface to about the size of a tennis court. Nutrients pass through into your blood.`,
          ],
          image: `/explorer-assets/wellness/l13-s3-small-intestine.png`,
          imageCaption: `Twenty feet of intestine, covered in villi. A tennis-court-sized absorption surface, folded neatly inside you.`,
          vocab: [
            { word: `absorption`, definition: `Nutrients passing from the intestine through its wall into your bloodstream — where they're carried to every cell in your body.`,
              audioPrompt: `Absorption is where the real payoff of digestion happens, {name}. After hours of breaking food down, your small intestine absorbs the resulting nutrients through its wall into your bloodstream, and blood carries them to every cell in your body. The nutrients in the meal you had this morning are reaching your muscles and brain and organs right now. That's absorption at work.` },
            { word: `villi`,      definition: `Tiny finger-like projections covering the inner wall of the small intestine. Massively expand its surface area for absorption.`,
              audioPrompt: `Terra loves this detail, {name}: the inner wall of your small intestine is covered in millions of tiny finger-like projections called villi. Together with even tinier microvilli on their surface, they expand the absorption area to roughly the size of a tennis court. That extraordinary surface area is what lets your small intestine absorb nutrients from your food so thoroughly and efficiently.` },
            { word: `nutrient`,   definition: `A substance from food your body uses for energy, growth, repair, and biological processes. The whole digestive journey exists to deliver these to your cells.`,
              audioPrompt: `Every bite you take is carrying nutrients your body needs, {name}. Some provide energy. Some build tissue. Some regulate processes. Some support immunity. Digestion is the process of releasing those nutrients from the food matrix and getting them into your blood where they can be put to work. The whole elaborate thirty-foot journey exists to deliver nutrients to your cells.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Microbiome`,
          paragraphs: [
            `Your large intestine houses about 38 trillion microorganisms.`,
            `This MICROBIOME isn't just along for the ride. It helps digest fiber, trains your immune system, and produces chemicals that affect your mood. The community inside you is part of who you are.`,
          ],
          image: `/explorer-assets/wellness/l13-s4-microbiome.png`,
          imageCaption: `38 trillion microorganisms. More than the number of your own cells. Each one a small contributor to a thriving inner ecosystem.`,
          vocab: [
            { word: `microbiome`,   definition: `The community of about 38 trillion microorganisms living in your gut. Affects digestion, immunity, mood, and inflammation throughout your body.`,
              audioPrompt: `Your gut microbiome is a world inside you, {name} — approximately 38 trillion microorganisms, each playing a role in how your body functions. They're not passengers. They're collaborators: helping digest fiber, training your immune system, producing chemicals that influence your mood. The diversity of that community is genuinely important for your health in ways scientists are still discovering.` },
            { word: `diversity`,    definition: `Variety in the species of microorganisms in your gut. Supported by eating many different plant foods. Associated with better health across many systems.`,
              audioPrompt: `A diverse gut microbiome — with many different species of beneficial bacteria — is associated with better health across many systems, {name}. The simplest way to support that diversity is eating a wide variety of plant foods. Different plant foods feed different species of gut bacteria. The more variety in your diet, the more variety in your microbiome — and the more resilient your whole system tends to be.` },
            { word: `collaborator`, definition: `What your microbiome is. Not a passenger, but a partner working alongside your body in digestion, immunity, and mood.`,
              audioPrompt: `Your gut microbes are collaborators, {name} — not parasites, not passengers. They work with you. You feed them. They produce vitamins and short-chain fatty acids you need. You provide them a home. They help train your immune system. The whole relationship is one of the oldest partnerships in biology — humans and our microbes have evolved together for millions of years.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Gut-Brain Axis`,
          paragraphs: [
            `Here's something most people don't know: your gut has its own nervous system.`,
            `About 100 million neurons line your digestive tract. Most of your body's SEROTONIN is made in your gut. That's why anxiety causes stomach pain and excitement causes butterflies.`,
          ],
          image: `/explorer-assets/wellness/l13-s5-gut-brain-axis.png`,
          imageCaption: `Your gut and brain are in constant conversation. What you feel emotionally, your gut feels physically. They're more connected than most people realize.`,
          vocab: [
            { word: `gut-brain axis`,         definition: `The two-way communication between your gut and your brain. What happens in one directly affects the other.`,
              audioPrompt: `Most of your body's serotonin is produced in your gut, {name} — not your brain. That's the gut-brain axis at work: a constant two-way conversation between your digestive system and your brain. It's why anxiety shows up as butterflies or stomach pain, and why what you eat can shift your mood. Your gut and brain are far more connected than most people realize.` },
            { word: `enteric nervous system`, definition: `Your gut's own network of about 100 million neurons. Sometimes called the "second brain" — senses, communicates, and responds independently.`,
              audioPrompt: `Your gut has its own nervous system, {name} — about 100 million neurons lining your digestive tract, forming what's sometimes called the "second brain." It can sense what's in your gut, communicate with your brain, and respond to emotional states. That's why stress causes stomach pain and excitement causes butterflies. Your gut isn't just processing food — it's processing your experience of the world.` },
            { word: `serotonin`,              definition: `A chemical that affects mood, sleep, and emotional balance. Surprisingly, most of yours is produced in your gut — not your brain.`,
              audioPrompt: `Serotonin is one of the chemicals that affects how you feel, {name} — your mood, your calm, your sense of wellbeing. And here's what surprises most people: about 90% of it is produced in your gut, not your brain. That's one of many reasons why gut health and emotional health are so deeply intertwined. Caring for your gut is genuinely caring for your mood too.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Supporting Your Gut`,
          paragraphs: [
            `What supports your digestive system?`,
            `A VARIETY of plant foods (fiber feeds your microbiome). Fermented foods (live beneficial bacteria). Hydration. Eating slowly in a calm setting. Stress directly impairs digestion — so calm matters too.`,
          ],
          image: `/explorer-assets/wellness/l13-s6-support-your-gut.png`,
          imageCaption: `Variety. Fiber. Fermented foods. Water. Calm. Slow eating. Six simple supports for a thirty-foot system doing huge work for you every day.`,
          vocab: [
            { word: `fiber`,     definition: `The indigestible part of plant foods. Doesn't break down for YOU — it feeds your gut bacteria, which thrive on it.`,
              audioPrompt: `Fiber is gut bacteria's food, {name}. Your digestive enzymes can't break it down — but your gut microbiome can, and it thrives on it. A diet rich in fiber from varied plant sources is one of the most direct ways to support a healthy, diverse microbiome. When your gut bacteria are well-fed and thriving, they take better care of you in return.` },
            { word: `fermented`, definition: `Food transformed by beneficial bacteria — yogurt, kefir, sauerkraut, kombucha. Introduces live beneficial microorganisms directly to your gut.`,
              audioPrompt: `Fermented foods have been part of human diets for thousands of years, {name}. Yogurt, kefir, sauerkraut, kombucha — they all contain live beneficial bacteria that, when you eat them, join your gut microbiome. It's one of the most direct ways to introduce beneficial microorganisms to your digestive system. Not magic, but real, practical, and surprisingly delicious.` },
            { word: `calm`,      definition: `An underestimated digestive support. Eating slowly in a relaxed setting genuinely improves how well your gut works.`,
              audioPrompt: `Calm is one of the most underestimated supports for digestion, {name}. Your gut has its own nervous system, and it responds to your emotional state in real time. Eating slowly, in a relaxed setting, without rushing or stress, lets your digestive system operate at its best. The same meal eaten in calm and eaten in stress will be processed very differently. Calm matters more than people realize.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `supports`,
              label: `🌱 Supports Healthy Digestion`,
              color: `#34D399`,
            },
            {
              id: `disrupts`,
              label: `😬 Can Disrupt Digestion`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l13-g1`,
              image: `l13-game-1.png`,
              label: `Eating a variety of colourful vegetables and fruit that provide fibre for your gut bacteria.`,
              matchPhrase: `Fibre from plant foods is what your gut bacteria feed on — a diverse, fibre-rich diet is one of the most powerful ways to support a healthy microbiome.`,
              correctMatch: `supports`,
            },
            {
              id: `l13-g2`,
              image: `l13-game-2.png`,
              label: `Eating slowly and chewing thoroughly, in a relaxed and unhurried setting.`,
              matchPhrase: `Digestion starts in the mouth — chewing properly and eating without rushing gives your digestive system the best possible conditions to do its job well.`,
              correctMatch: `supports`,
            },
            {
              id: `l13-g3`,
              image: `l13-game-3.png`,
              label: `Feeling highly stressed or anxious most of the time.`,
              matchPhrase: `Your gut has its own nervous system and is exquisitely sensitive to psychological state — chronic stress directly impairs digestive function, which is why anxiety so often shows up as stomach pain.`,
              correctMatch: `disrupts`,
            },
            {
              id: `l13-g4`,
              image: `l13-game-4.png`,
              label: `Eating mostly highly processed foods with little fibre over a long period of time.`,
              matchPhrase: `Your gut microbiome relies on dietary fibre to stay diverse and healthy — a diet low in whole plant foods over time can reduce the variety of beneficial bacteria your gut depends on.`,
              correctMatch: `disrupts`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l13-q1`,
              format: `multiple-choice`,
              question: `Where does digestion actually begin?`,
              options: [
                `In the stomach — that's where acid breaks down food`,
                `In the mouth — chewing and saliva begin breaking food down before it reaches the stomach`,
                `In the small intestine where digestive enzymes are added`,
                `In the oesophagus during swallowing`,
              ],
              correctIndex: 1,
              explanation: `Digestion begins the moment food enters your mouth. Chewing physically breaks food into smaller pieces, and saliva contains enzymes that start breaking down carbohydrates chemically. By the time food reaches the stomach, the digestive process is already well underway.`,
            },
            {
              id: `l13-q2`,
              format: `multiple-choice`,
              question: `What is the gut microbiome?`,
              options: [
                `The enzymes your stomach produces to break down food`,
                `A type of probiotic supplement that improves digestion`,
                `Trillions of bacteria and other microorganisms living in your large intestine that affect digestion, immunity, and mental health`,
                `The beneficial bacteria added to yogurt during manufacturing`,
              ],
              correctIndex: 2,
              explanation: `The gut microbiome is the entire community of microorganisms — bacteria, fungi, and others — living in your large intestine. It's increasingly understood as a system that affects far more than digestion: it influences your immune system, produces most of your body's serotonin, and plays a role in inflammation and mood.`,
            },
            {
              id: `l13-q3`,
              format: `multiple-choice`,
              question: `Why does stress so often cause digestive problems?`,
              options: [
                `Stress causes you to eat differently, which disrupts digestion`,
                `Stress hormones are toxic to digestive enzymes`,
                `The gut has its own nervous system that is exquisitely sensitive to psychological state — stress directly impairs digestive function`,
                `Stress increases stomach acid production above safe levels`,
              ],
              correctIndex: 2,
              explanation: `Your gut has its own network of neurons — the enteric nervous system — and it's in constant communication with your brain. Stress signals travel both directions on this gut-brain highway. This is why emotional states show up physically in your stomach: anxiety, excitement, and stress are all felt in your gut as well as your head.`,
            },
            {
              id: `l13-q4`,
              format: `true-false`,
              question: `Digestion begins in your mouth, not your stomach — chewing thoroughly and saliva both play important roles before food even reaches the rest of your digestive system.`,
              correctAnswer: true,
              explanation: `True. Many people assume the stomach is where digestion starts, but the process begins the moment food enters your mouth. Mechanical breakdown through chewing and chemical breakdown through salivary enzymes are both already underway before food reaches the stomach — which is why eating slowly and chewing properly genuinely improves digestion.`,
            },
            {
              id: `l13-q5`,
              format: `fill-blank`,
              question: `The inner wall of the small intestine is covered in tiny finger-like projections called ___ that massively increase its surface area for absorbing nutrients.`,
              options: [
                `villi`,
                `cilia`,
                `enzymes`,
                `glands`,
              ],
              correctIndex: 0,
              explanation: `Villi — and even tinier microvilli on their surface — create an extraordinarily large surface area within the relatively small space of the small intestine. Together they expand the absorption surface to roughly the size of a tennis court, which is what allows your body to absorb nutrients so efficiently from the food you eat.`,
            },
            {
              id: `l13-q6`,
              format: `multiple-choice`,
              question: `What is the main role of the large intestine?`,
              options: [
                `To break down proteins using digestive enzymes`,
                `To filter toxins from digested food before it enters the bloodstream`,
                `To absorb water and house the gut microbiome — the community of microorganisms that affect immunity, mood, and overall health`,
                `To store bile and release it when fatty foods are eaten`,
              ],
              correctIndex: 2,
              explanation: `The large intestine (colon) absorbs water from digested material and houses the gut microbiome — the vast community of bacteria and other microorganisms that play a crucial role far beyond digestion alone. A healthy microbiome supports immune function, influences mental health through the gut-brain axis, and helps regulate inflammation throughout the body.`,
            },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Gut microbiome research is one of the fastest-growing areas in all of medicine. Scientists have discovered that the community of microorganisms in your large intestine influences your immune system, your mental health, and your body's response to disease in ways researchers are still uncovering. Your gut is far more than a digestive organ.`,
          familyAdventure: `Do a gut health week as a family. Add one probiotic food (yogurt, kefir, kombucha, or sauerkraut) per day. Add a fibre-rich food you don't usually eat. Try swapping one usual choice for a whole food option. Eat at least one meal slowly and without screens. At the end of the week, notice: did anyone's digestion, energy, or mood change?`,
          creativePrompt: `Today, try eating one meal slowly — put down anything you're doing, take your time, chew properly. Notice if it feels different. Then try adding one fermented food (yogurt, kefir, or sauerkraut) sometime this week.`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that your digestive system is a 30-foot marvel of biological engineering — and that the trillions of microorganisms living inside you are genuinely part of who you are and how you feel. Taking care of your gut is taking care of your whole self. Terra is so proud to walk this path with you.`,
          badge: `gut-expert`,
          badgeName: `Gut Expert`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L13;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L13.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L13] Loaded: "The Digestive System: Food's Amazing Journey" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l13-s1-thirty-foot-journey.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-s2-starts-in-mouth.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-s3-small-intestine.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-s4-microbiome.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-s5-gut-brain-axis.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-s6-support-your-gut.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L13] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L13] One or more magazine assets missing'));
}
