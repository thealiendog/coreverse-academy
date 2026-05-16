// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L14 — The Cardiovascular System: Your Heart
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L14 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-14`,
      title:     `The Cardiovascular System: Your Heart`,
      duration:  12,
      xpReward:  50,
      badge:     `heart-health-hero`,
      badgeName: `Heart Health Hero`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Here's something remarkable to sit with, {name}: your heart started beating about three weeks after you were conceived — before you were even born. It hasn't stopped once since. Right now, as you're reading this, it's pumping blood to every cell in your body — delivering oxygen, removing waste, regulating temperature. And how you live now, at your age, is genuinely building the foundation for how strong that system will be for the rest of your life. Today we're going to look at how your cardiovascular system works, what keeps it healthy, and what puts it under strain. This one really matters.`,
          headline: `The Cardiovascular System: Your Heart`,
          subtitle: `Your heart has been beating since before you were born — and how you live now is genuinely building the foundation for a lifetime of heart strength`,
          visual: `/explorer-assets/wellness/l14-welcome.png`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Pump That Never Stops`,
          paragraphs: [
            `Your heart started beating about three weeks after you were conceived.`,
            `It hasn't stopped once since. Right now, as you read this, it's pumping blood to every cell — 100,000 times every day, without a single rest.`,
          ],
          image: `/explorer-assets/wellness/l14-s1-pump-never-stops.png`,
          imageCaption: `Before you were born. Right now, this second. While you sleep tonight. Not one missed beat from the moment it first started.`,
          vocab: [
            { word: `continuous`, definition: `Never stopping. Your heart has been beating without a single pause since before you were born — and won't stop unless something is very wrong.`,
              audioPrompt: `Continuous is a remarkable word when applied to your heart, {name}. It hasn't stopped since it first started beating — about three weeks after you were conceived. Not when you slept. Not when you were sick. Not even when you were briefly knocked unconscious. Every second of your life, it has been pumping. That kind of continuous reliability is one of the most extraordinary things about being alive.` },
            { word: `pump`,       definition: `What your heart does. Moves blood through your entire body 100,000+ times a day. Strong, rhythmic, automatic.`,
              audioPrompt: `Your heart is fundamentally a pump, {name} — a sophisticated, four-chambered, muscular pump that moves blood through the entire network of vessels in your body. Each beat sends a fresh wave of blood on its journey: oxygen delivered to cells, waste collected and carried out. One hundred thousand pumps a day, every day, completely automatic.` },
            { word: `foundation`, definition: `What you're building right now. The heart you carry into adulthood is being shaped today by how you live, move, sleep, and feel.`,
              audioPrompt: `The heart you'll have as an adult is being built right now, {name}. Not metaphorically — literally. The lifestyle habits you build now compound over decades, creating cardiovascular strength or weakness one day at a time. That's why what you do at your age genuinely matters: you're laying the foundation for a system that has to last a lifetime.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Two Sides, Two Phases`,
          paragraphs: [
            `Your heart has four chambers and two main phases.`,
            `RIGHT side: receives oxygen-poor blood, sends it to lungs. LEFT side: receives oxygen-rich blood from lungs, pumps to entire body. SYSTOLE (contraction). DIASTOLE (rest). The two numbers in blood pressure.`,
          ],
          image: `/explorer-assets/wellness/l14-s2-two-sides-two-phases.png`,
          imageCaption: `Right side handles the lungs. Left side handles the body. Contract, relax. Contract, relax. The architecture of every heartbeat.`,
          vocab: [
            { word: `systole`,        definition: `The phase of a heartbeat when the heart contracts and pumps blood out. The "lub" in lub-dub. The higher number in blood pressure.`,
              audioPrompt: `Systole is the moment of action, {name} — when your heart muscle squeezes and pushes blood out into your arteries. Every time your heart beats, systole is the contraction that sends blood on its way. The "lub" in "lub-dub" of a heartbeat is systole. One hundred thousand of these contractions happen every single day, without a single rest.` },
            { word: `diastole`,       definition: `The phase when the heart relaxes and fills with blood. The rest between beats — and the lower number in blood pressure.`,
              audioPrompt: `Between every beat, {name}, your heart relaxes and fills with blood — that's diastole. It's the moment of rest in the cardiac cycle, and it matters as much as the contraction. Blood pressure is measured across both phases: the pressure during contraction over the pressure during relaxation. Both together describe the work your cardiovascular system is doing constantly.` },
            { word: `blood pressure`, definition: `The force your blood exerts on the walls of your vessels. Two numbers — pressure during contraction over pressure during relaxation.`,
              audioPrompt: `Blood pressure is a measure of the work your heart and blood vessels are doing, {name}. The higher number is the force when your heart contracts. The lower number is the force when your heart rests between beats. Too high over a long time means your cardiovascular system is under strain. Keeping it in a healthy range — through movement, sleep, and stress management — is one of the most important things you can do for your heart.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Blood Carries`,
          paragraphs: [
            `Blood is doing remarkable work every second.`,
            `RED blood cells carry OXYGEN with hemoglobin. WHITE blood cells fight infection. PLATELETS clot when you bleed. PLASMA carries nutrients, hormones, waste — everywhere, all the time.`,
          ],
          image: `/explorer-assets/wellness/l14-s3-what-blood-carries.png`,
          imageCaption: `Oxygen. Nutrients. Immune cells. Hormones. Waste. All flowing through every part of you right now, simultaneously, never stopping.`,
          vocab: [
            { word: `hemoglobin`, definition: `The protein in red blood cells that carries oxygen. Picks it up in the lungs, delivers it to every cell. Gives blood its red color.`,
              audioPrompt: `Hemoglobin is the protein that makes blood red, {name}, and it's doing something remarkable: picking up oxygen in your lungs and delivering it to every cell in your body before returning to pick up more. Each red blood cell carries millions of hemoglobin molecules. Your body produces about two million new red blood cells every second just to keep this continuous delivery running.` },
            { word: `plasma`,     definition: `The liquid base of blood. Pale yellow — carries nutrients, hormones, proteins, and waste products throughout the body.`,
              audioPrompt: `Take away the blood cells and what remains is plasma, {name} — a pale yellow liquid that makes up more than half of your blood. Plasma is the transport medium: it carries nutrients from digestion, hormones from glands, proteins, antibodies, and waste products — all flowing throughout your entire body simultaneously. It's your body's complete internal delivery and waste-collection system.` },
            { word: `platelet`,   definition: `A tiny blood component that clots blood when you bleed. Rushes to wounds, clumps together, forms a plug that stops blood loss.`,
              audioPrompt: `Platelets are your body's repair crew, {name} — they respond within seconds when a blood vessel is damaged. They rush to the site of a cut, clump together, and form a clot that seals the break and stops the bleeding. Without them, a minor cut could become a serious problem. Most of the time their work is so fast and efficient you barely notice it's happened.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `A Lifetime System`,
          paragraphs: [
            `Here's what matters most: the habits you build now COMPOUND over decades.`,
            `A heart strengthened a little each day for years becomes truly different from one that wasn't. Same in reverse. The earlier you start, the more time good habits have to compound.`,
          ],
          image: `/explorer-assets/wellness/l14-s4-lifetime-system.png`,
          imageCaption: `Small habits, repeated over years, add up to outcomes that couldn't happen any other way. Good ones compound. So do harmful ones. Time is the multiplier.`,
          vocab: [
            { word: `cardiovascular`, definition: `Relating to the heart AND blood vessels — the whole system together. Both need care for either to be healthy.`,
              audioPrompt: `Cardiovascular means heart and vessels together, {name} — the whole system that moves blood around your body. Your heart is the pump, your arteries and veins are the network. Both need care. Regular movement strengthens the pump and keeps the vessels flexible. Chronic stress and inactivity strain them both. What you do now is genuinely building the cardiovascular system you'll carry into adulthood.` },
            { word: `compound`,       definition: `Grow gradually through accumulated effects. Small daily habits, repeated over years, add up to outcomes that no single moment could create.`,
              audioPrompt: `Compound is the most important word for understanding why what you do now matters so much, {name}. Small habits, repeated over years, add up to outcomes that couldn't happen any other way. A heart strengthened a little by regular movement every day for ten years is genuinely different from one that wasn't. Good habits compound. So do harmful ones. The earlier you start, the more time the compounding has to work in your favor.` },
            { word: `influence`,      definition: `What you have over your heart health. Many of the most important factors — movement, food, sleep, stress, smoking — are within your control.`,
              audioPrompt: `Some things about your heart are inherited, {name} — your family history matters. But many of the most powerful factors are within your influence: how much you move, what you eat, how you handle stress, whether you sleep enough, whether you smoke. That's empowering information. The biggest contributors to long-term heart health are mostly things you can affect, starting today.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Your Heart Is a Muscle`,
          paragraphs: [
            `Your heart is a muscle. Like all muscles, it responds to challenge.`,
            `AEROBIC EXERCISE (running, swimming, cycling, dancing) is what makes it stronger. A trained heart pumps more blood per beat — and has to work less at rest. RESTING HEART RATE drops over time.`,
          ],
          image: `/explorer-assets/wellness/l14-s5-heart-is-muscle.png`,
          imageCaption: `Train it like the muscle it is. Each session strengthens it a little. The change is small daily, big over months and years.`,
          vocab: [
            { word: `aerobic exercise`,   definition: `Activity that raises your heart rate over a sustained period. Running, swimming, cycling, dancing. The most direct way to strengthen your heart.`,
              audioPrompt: `Your heart is a muscle, {name}, and like every muscle, it gets stronger when it's regularly challenged. Aerobic exercise — running, swimming, cycling, dancing — is the challenge your heart responds to. Over time, it pumps more blood with each beat and works more efficiently at rest. That adaptation starts from the very first session and builds with every one that follows.` },
            { word: `resting heart rate`, definition: `How many times your heart beats per minute when calm and at rest. Drops as you get fitter — a strong heart does the same job with less effort.`,
              audioPrompt: `A trained heart beats more slowly at rest because it pumps more blood with every beat, {name}. Resting heart rate is one of the simplest measures of cardiovascular fitness. As regular aerobic exercise strengthens your heart over weeks and months, your resting rate gradually falls — your heart is doing the same job with less effort. That efficiency is what fitness means in cardiovascular terms.` },
            { word: `efficiency`,         definition: `Doing more work with less effort. What a trained heart develops — each beat moves more blood, so it needs fewer beats overall.`,
              audioPrompt: `Efficiency is what your heart develops through training, {name}. An untrained heart has to beat more times to do the same amount of work. A trained heart pumps more blood per beat, so it can rest more between contractions. Over a lifetime of millions of beats, that efficiency adds up to a heart that's done less total work — and is in better shape because of it.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Whole Package`,
          paragraphs: [
            `Movement is the foundation. But it's not the only piece.`,
            `Whole foods (especially vegetables, fish, nuts, olive oil). Managing stress (chronic stress strains the heart). No smoking. Consistent sleep. Each one matters. Together they compound into real heart strength.`,
          ],
          image: `/explorer-assets/wellness/l14-s6-whole-package.png`,
          imageCaption: `Movement, food, sleep, calm, no smoking. Each on its own helps. Together they compound. That's how lifelong heart strength is built.`,
          vocab: [
            { word: `inflammation`, definition: `A biological response that, when chronic and persistent, strains your cardiovascular system. Reduced by sleep, whole foods, stress management.`,
              audioPrompt: `Inflammation at low levels, running in the background all the time, is one of the ways lifestyle choices affect heart health over decades, {name}. Chronic stress, disrupted sleep, and a diet low in whole plant foods can all contribute to it. Managing stress, sleeping well, and eating a variety of whole foods aren't separate health behaviors — they're all part of protecting your cardiovascular system.` },
            { word: `vessel`,       definition: `A tube carrying blood — arteries and veins. Kept healthy and flexible by regular movement, whole foods, and managed stress.`,
              audioPrompt: `Your blood vessels are the entire delivery network, {name} — thousands of miles of arteries, veins, and capillaries reaching every cell in your body. Keeping them flexible and healthy requires regular movement, nourishing food, and managing stress and inflammation. A vessel that loses flexibility becomes harder for the heart to push blood through — which is one of the ways lifestyle habits affect cardiovascular health over decades.` },
            { word: `protect`,      definition: `Actively support. What movement, whole foods, sleep, calm, and avoiding smoking all do for your heart — each one a small protective act.`,
              audioPrompt: `Every healthy habit is an act of protection, {name} — a small daily contribution to a heart and vessels that have to last a lifetime. None of them alone is dramatic. Together, repeated over years, they create cardiovascular strength that couldn't be built any other way. Caring for your heart isn't one big thing. It's many small things, done consistently, that compound over time.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `strong`,
              label: `❤️ Supports a Strong, Healthy Heart`,
              color: `#34D399`,
            },
            {
              id: `strain`,
              label: `⚠️ Puts Extra Strain on the Heart`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l14-g1`,
              image: `l14-game-1.png`,
              label: `Getting active most days in ways you enjoy — dancing, cycling, running around.`,
              matchPhrase: `Your heart is a muscle — and like all muscles, it grows stronger and more efficient when you challenge it regularly through movement.`,
              correctMatch: `strong`,
            },
            {
              id: `l14-g2`,
              image: `l14-game-2.png`,
              label: `Managing stress through breathing, movement, or talking to someone you trust.`,
              matchPhrase: `Chronic stress raises blood pressure and promotes inflammation over time — having real ways to process and recover from stress genuinely protects your heart.`,
              correctMatch: `strong`,
            },
            {
              id: `l14-g3`,
              image: `l14-game-3.png`,
              label: `Living with high levels of ongoing stress without any ways to manage it.`,
              matchPhrase: `When stress has nowhere to go, it keeps blood pressure elevated and inflammation higher than your body needs — over years, that puts real wear on your cardiovascular system.`,
              correctMatch: `strain`,
            },
            {
              id: `l14-g4`,
              image: `l14-game-4.png`,
              label: `Going day after day without any physical activity or movement.`,
              matchPhrase: `Like any muscle, a heart that isn't regularly challenged becomes gradually less efficient — consistent movement is the most direct investment you can make in long-term heart strength.`,
              correctMatch: `strain`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l14-q1`,
              format: `multiple-choice`,
              question: `What does the left side of your heart do?`,
              options: [
                `Receives blood from the body and sends it to the lungs to pick up oxygen`,
                `Receives oxygen-rich blood from the lungs and pumps it to the entire body`,
                `Filters waste products out of the blood`,
                `Controls heart rate and rhythm`,
              ],
              correctIndex: 1,
              explanation: `The left side of the heart is the powerful pumping side — it receives oxygen-rich blood from the lungs and pumps it throughout the entire body. It's the stronger side because it has to push blood all the way to your toes and back, while the right side only has to reach the nearby lungs.`,
            },
            {
              id: `l14-q2`,
              format: `multiple-choice`,
              question: `What does your blood pressure reading measure?`,
              options: [
                `How fast and how forcefully your heart beats per minute`,
                `The pressure during heart contraction (systole) over the pressure during heart relaxation (diastole)`,
                `The thickness of your blood relative to water`,
                `The amount of oxygen currently in your blood`,
              ],
              correctIndex: 1,
              explanation: `Blood pressure is recorded as two numbers. The first (higher) number is systolic pressure — the force exerted on your blood vessels when your heart contracts and pushes blood out. The second (lower) number is diastolic pressure — the force when your heart relaxes and fills. Both numbers together give a picture of the stress your cardiovascular system is under.`,
            },
            {
              id: `l14-q3`,
              format: `multiple-choice`,
              question: `What makes aerobic exercise especially valuable for your heart?`,
              options: [
                `It thins the blood so it flows more easily through vessels`,
                `It reduces the number of times the heart needs to beat per day`,
                `The heart is a muscle — regular aerobic exercise makes it stronger and more efficient, so each beat does more work with less effort`,
                `It increases the size of red blood cells so they carry more oxygen`,
              ],
              correctIndex: 2,
              explanation: `Your heart is a muscle, and like all muscles it responds to challenge by getting stronger. Regular aerobic exercise makes the heart more efficient — it pumps more blood per beat and can meet the body's demands with less effort. Over time, a well-trained heart beats fewer times per minute at rest while still delivering everything the body needs.`,
            },
            {
              id: `l14-q4`,
              format: `true-false`,
              question: `Your heart is a muscle — and like all muscles, it grows stronger and more efficient when you challenge it regularly through physical activity.`,
              correctAnswer: true,
              explanation: `True. The heart responds to aerobic exercise the same way skeletal muscles respond to resistance training — it adapts and gets stronger. A heart that is regularly challenged through physical activity pumps more blood per beat, works with less effort at rest, and is generally more resilient. This adaptation starts from the very first time you exercise and builds with consistency.`,
            },
            {
              id: `l14-q5`,
              format: `fill-blank`,
              question: `Blood pressure is recorded as two numbers — the pressure when your heart ___ over the pressure when it relaxes.`,
              options: [
                `contracts`,
                `rests`,
                `fills`,
                `expands`,
              ],
              correctIndex: 0,
              explanation: `The higher number in a blood pressure reading is systolic pressure — measured when the heart contracts and pushes blood out into the arteries. The lower number is diastolic pressure — measured when the heart relaxes and fills with blood between beats. Both together describe the force your blood vessels are experiencing throughout the cardiac cycle.`,
            },
            {
              id: `l14-q6`,
              format: `multiple-choice`,
              question: `What does your blood carry throughout your body?`,
              options: [
                `Only oxygen and carbon dioxide`,
                `Oxygen via red blood cells, nutrients, immune cells, hormones, and waste products — essentially everything your cells need delivered and removed`,
                `Mainly water and minerals to keep cells hydrated`,
                `Primarily white blood cells for constant immune surveillance`,
              ],
              correctIndex: 1,
              explanation: `Blood is your body's complete internal transport system. Red blood cells deliver oxygen and remove carbon dioxide. White blood cells provide immune defence. Platelets handle clotting. And plasma — the liquid base — carries nutrients, hormones, waste products, and proteins to and from every cell in your body. It's doing all of this simultaneously, continuously, without stopping.`,
            },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Cardiologists — heart specialists — consistently emphasise that cardiovascular health is built over decades, not fixed in a single moment. The lifestyle habits you establish now compound over years into the heart health you'll have in adulthood. What you do for your heart today genuinely matters.`,
          familyAdventure: `Do a heart health family day. Go for an active walk together, cook a heart-nourishing dinner (salmon, vegetables, olive oil, whole grains), and talk about your family's health history together. Do any relatives have heart conditions or high blood pressure? Knowing your family history is one of the most useful pieces of health knowledge you can have.`,
          creativePrompt: `Measure your resting heart rate: sit quietly for a few minutes, then count your pulse for 60 seconds (press two fingers on your wrist or neck). Now do 2 minutes of vigorous jumping jacks. Measure your heart rate immediately, then again after 1 minute of rest. Notice how quickly your heart returns to resting — this recovery speed is a real indicator of cardiovascular fitness.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that your heart has been working tirelessly for you since before you were born — and that how you live now is genuinely building the foundation for a lifetime of heart strength. Every time you move, sleep well, and manage stress, you're caring for it. Terra is so proud to walk this path with you.`,
          badge: `heart-health-hero`,
          badgeName: `Heart Health Hero`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L14.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L14] Loaded: "The Cardiovascular System: Your Heart" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l14-s1-pump-never-stops.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-s2-two-sides-two-phases.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-s3-what-blood-carries.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-s4-lifetime-system.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-s5-heart-is-muscle.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l14-s6-whole-package.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L14] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L14] One or more magazine assets missing'));
}
