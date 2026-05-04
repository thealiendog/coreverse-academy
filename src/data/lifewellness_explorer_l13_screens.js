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
          headline: `The journey begins: mouth to stomach`,
          paragraphs: [
            `Digestion starts in your **mouth** — not your stomach. Chewing breaks food into smaller pieces, and saliva begins chemically breaking down carbohydrates with enzymes. Chewing more thoroughly is one of the simplest ways to improve digestion. Food travels down the **oesophagus** (a muscular tube) to the **stomach**, which churns food with hydrochloric acid and digestive enzymes into a liquid called **chyme**. The stomach also kills most bacteria in food. This initial process takes around 2–4 hours — and it's already well underway by the time you finish eating.`,
          ],
          image: `/explorer-assets/wellness/l13-magazine-1.png`,
          imageCaption: `Digestion starts in your mouth — chewing and saliva are doing real work before food reaches the stomach`,
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The small intestine: where nutrition happens`,
          paragraphs: [
            `The **small intestine** (about 20 feet long) is where most digestion and absorption actually happens. The **pancreas** adds digestive enzymes and the **liver** adds bile to break down fats. Nutrients pass through the intestinal wall into the bloodstream and are delivered to cells throughout your entire body. The inner wall of the small intestine is covered in tiny finger-like projections called **villi**, and even tinier **microvilli** — together increasing the surface area available for absorption to roughly the size of a tennis court. Your body is extraordinary in its design.`,
          ],
          image: `/explorer-assets/wellness/l13-magazine-2.png`,
          imageCaption: `The small intestine's villi create a tennis-court-sized surface area for absorbing nutrients`,
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The large intestine and your gut microbiome`,
          paragraphs: [
            `The **large intestine** (colon) absorbs water and houses your **gut microbiome** — a community of approximately 38 trillion bacteria, fungi, and other microorganisms. This microbiome is increasingly understood to be crucial not just for digestion but for **immune function**, **mental health** (the gut-brain axis produces most of your body's serotonin), and **inflammation control**. A diverse, fibre-rich diet supports a healthy, thriving microbiome. Chronic stress and diets low in whole plant foods can reduce the diversity of beneficial bacteria your gut depends on.`,
          ],
          image: `/explorer-assets/wellness/l13-magazine-3.png`,
          imageCaption: `Your gut microbiome affects immunity, mood, and inflammation — far beyond digestion alone`,
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Supporting digestive health`,
          paragraphs: [
            `Your gut health is profoundly influenced by what you eat and how you feel. **Fibre** (from vegetables, fruits, legumes, whole grains) feeds beneficial gut bacteria — diversity of plant foods is one of the best things you can give your microbiome. **Fermented foods** (yogurt, kefir, sauerkraut, kombucha) introduce beneficial bacteria directly. **Hydration** supports smooth digestive transit. And stress directly impairs digestion — your gut has its own nervous system (the **enteric nervous system**) and is exquisitely sensitive to your psychological state. This is why anxiety causes stomach pain and excitement causes butterflies. **Eating slowly, in a relaxed environment, improves digestion significantly** — a simple habit with real effects.`,
          ],
          image: `/explorer-assets/wellness/l13-magazine-4.png`,
          imageCaption: `Fibre, fermented foods, hydration, and eating slowly in a relaxed setting all support your gut`,
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
    fetch('/explorer-assets/wellness/l13-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l13-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L13] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L13] One or more magazine assets missing'));
}
