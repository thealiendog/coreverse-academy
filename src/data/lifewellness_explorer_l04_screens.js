// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L04 — Exercise: Why Moving Matters
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L04 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-04`,
      title:     `Exercise: Why Moving Matters`,
      duration:  12,
      xpReward:  50,
      badge:     `movement-champion`,
      badgeName: `Movement Champion`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `I want to ask you something, {name}: how do you feel after you've been running around, or dancing, or playing a sport you love? There's usually a moment somewhere in there — even when you're tired — where you feel genuinely alive. That's not an accident. Your body was built to move, and when you do, something remarkable happens: not just in your muscles, but in your brain, your mood, and your energy levels for the rest of the day. Today we're going to look at the science of why movement matters so much — and it's more interesting than you might expect.`,
          headline: `Exercise: Why Moving Matters`,
          subtitle: `Your body was built to move — and every time you do, your brain and mood come along for the ride`,
          visual: `/explorer-assets/wellness/l04-welcome.png`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What movement does for your body`,
          paragraphs: [
            `Regular movement does remarkable things for your body. It **strengthens your heart and improves circulation** — your heart is a muscle, and like all muscles, it gets stronger with use. It **builds and maintains muscle** throughout your body. It **strengthens your bones** — especially important in childhood when bones are still developing and being laid down for life. It improves **flexibility and balance**. It gives you **more sustained energy throughout the day** — counterintuitively, using energy to move actually creates more of it. It **improves sleep quality dramatically**. And it **boosts your immune system** — people who move regularly get sick less often and recover faster.`,
          ],
          image: `/explorer-assets/wellness/l04-magazine-1.png`,
          imageCaption: `Movement strengthens your heart, your bones, your immunity — and gives you more energy, not less`,
          vocab: [
            { word: `circulation`, definition: `The movement of blood through your body — strengthened by regular physical activity, which makes your heart pump more efficiently and delivers oxygen and nutrients more effectively.`, audioPrompt: `Picture blood flowing through your entire body with every heartbeat, {name} — delivering oxygen and nutrients, carrying away waste. Regular movement makes that whole system more efficient. Your heart beats more effectively, your vessels stay flexible, and your cells get what they need faster. That's circulation working well.` },
            { word: `immune system`, definition: `Your body's defence network against illness — boosted by regular movement, which helps your immune cells patrol your body more effectively.`, audioPrompt: `Terra loves this connection, {name}: when you move your body regularly, you're not just strengthening muscles — you're strengthening your immune system too. Movement helps immune cells circulate and do their surveillance work more effectively. People who move regularly tend to get sick less often and bounce back faster. Movement is immune support.` },
            { word: `flexibility`, definition: `The ability of your muscles and joints to move through their full range — supported by regular movement and stretching, and important for injury prevention and physical comfort.`, audioPrompt: `Flexibility is what lets your body move freely without strain, {name}. It's built gradually through regular movement and stretching — and it makes everything else feel easier. Active, flexible kids tend to move more confidently and feel more at home in their bodies. It's one of the quieter gifts of regular movement.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What movement does for your brain`,
          paragraphs: [
            `Exercise is one of the most powerful brain-enhancing activities humans can do. When you exercise, your brain releases **BDNF** — Brain-Derived Neurotrophic Factor — sometimes called "Miracle-Gro for the brain." BDNF promotes the growth of new brain cells and strengthens the connections between existing ones. Research shows that aerobic exercise before studying significantly improves memory, attention, and learning. Schools that added daily physical activity saw test scores improve — without adding a single extra minute of instruction. Your brain genuinely works better after you've moved your body. This is one of the most consistent findings in all of neuroscience.`,
          ],
          image: `/explorer-assets/wellness/l04-magazine-2.png`,
          imageCaption: `BDNF from exercise grows new brain cells and strengthens connections — your brain learns better when you move`,
          vocab: [
            { word: `BDNF`, definition: `Brain-Derived Neurotrophic Factor — a protein released during exercise that promotes new brain cell growth and strengthens connections between existing ones, improving memory and learning.`, audioPrompt: `BDNF is sometimes called "Miracle-Gro for the brain," {name} — and that name earns itself. When you exercise, your brain releases this protein, which literally helps grow new brain cells and strengthen the connections between them. Schools that added daily movement saw academic results improve. This is why.` },
            { word: `aerobic`, definition: `A type of physical activity that raises your heart rate and breathing over a sustained period — like running, swimming, or dancing — and is especially powerful for brain health and mood.`, audioPrompt: `Aerobic means "with oxygen," {name} — and aerobic exercise is the kind that gets your breathing deeper and your heart beating faster for a sustained stretch of time. Running, swimming, cycling, dancing: all of it counts. It's this type of movement that releases BDNF and the mood-lifting chemicals your brain runs on.` },
            { word: `neuroscience`, definition: `The scientific study of the brain and nervous system — whose most consistent finding is that physical movement dramatically improves how the brain learns, remembers, and manages emotion.`, audioPrompt: `Neuroscience is the study of how the brain works, {name} — and one of its most repeated findings is that exercise changes the brain itself. Not just how you feel, but how well you think, how much you remember, and how easily you learn. Moving your body is brain care. The science is about as clear as it gets.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Exercise and mental health`,
          paragraphs: [
            `Exercise is one of the most effective mood-lifters available — and it works fast. When you move your body, your brain releases **endorphins** (natural mood elevators), **serotonin** (which supports feelings of wellbeing and stability), and **dopamine** (which drives motivation and a sense of pleasure). It also reduces **cortisol** — the stress hormone. Research shows that regular exercise has effects comparable to medication for mild to moderate depression — with no negative side effects. Many doctors now recommend exercise as a first step when people are feeling low, anxious, or overwhelmed. Moving your body is one of the most direct things you can do to shift how you feel.`,
          ],
          image: `/explorer-assets/wellness/l04-magazine-3.png`,
          imageCaption: `Endorphins, serotonin, dopamine, less cortisol — movement changes your brain chemistry within minutes`,
          vocab: [
            { word: `endorphin`, definition: `Natural mood-lifting chemicals your brain releases during exercise — responsible for the feeling of wellbeing and reduced pain that often follows physical activity.`, audioPrompt: `Have you ever noticed that feeling after a good run or a dance session, {name} — that warm, calm sense that everything's a little better? That's endorphins. Your brain releases them during exercise as natural mood-lifters. They're real, they're fast, and they're available to you any time you move your body.` },
            { word: `serotonin`, definition: `A brain chemical associated with feelings of stability, calm, and wellbeing — released during exercise and also produced largely in the gut.`, audioPrompt: `Serotonin is sometimes called the "steady" chemical, {name} — it contributes to that sense of calm, contentment, and emotional balance. Exercise is one of the most reliable ways to boost it. Low serotonin is often associated with low mood; movement is one of the most direct ways to support it without any side effects.` },
            { word: `cortisol`, definition: `Your body's primary stress hormone — which exercise actively reduces, making movement one of the most effective tools for managing stress and improving mood.`, audioPrompt: `Cortisol is what rises when you're stressed, {name} — heart rate up, muscles tense, mind alert. Exercise is one of the most effective ways to bring it back down. After physical movement, cortisol drops. That's why you often feel calmer, less wound up, more like yourself after moving your body. It's chemistry, not coincidence.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Finding movement you love`,
          paragraphs: [
            `The best movement is the kind you'll actually do consistently. Team sports, dance, martial arts, swimming, hiking, cycling, yoga, gymnastics, skateboarding, rock climbing — all of it counts. Moving your body most days, in whatever way fits your life, is what matters. It doesn't need to happen all at once. Multiple shorter bursts through the day work just as well as one longer session. The key is to **find movement you genuinely enjoy** — not something you dread or do only because you feel you should. Enjoyment drives consistency. Consistency is what builds the real benefits over time. What do you love to do that also gets you moving?`,
          ],
          image: `/explorer-assets/wellness/l04-magazine-4.png`,
          imageCaption: `The best exercise is the one you'll actually do — enjoyment is what turns movement into a lifelong habit`,
          vocab: [
            { word: `consistency`, definition: `Doing something regularly over time — the quality that turns movement from an occasional effort into a real habit with lasting benefits.`, audioPrompt: `Consistency is the quiet power behind every health benefit that actually lasts, {name}. One run doesn't change your brain. One hundred runs, done regularly, absolutely do. The size of each session matters much less than the habit of showing up. That's what consistency means — not perfection, just regularity.` },
            { word: `enjoyment`, definition: `Genuinely liking the activity you choose — the most reliable predictor of whether you'll keep doing it long enough to experience the real benefits.`, audioPrompt: `Terra believes this deeply, {name}: movement you enjoy is the only movement that actually becomes a habit. You can do an exercise you hate perfectly — but if you dread it, you'll stop. Movement you look forward to builds the consistency that produces all the brain and body benefits. Finding what you love is the whole point.` },
            { word: `burst`, definition: `A shorter period of activity — and a useful reminder that movement doesn't have to happen all at once to count. Multiple shorter bursts through a day work just as well as one longer session.`, audioPrompt: `You don't have to block out an hour to get the benefits of movement, {name}. A burst of activity — ten minutes here, fifteen there — adds up across a day. A walk at lunch, a dance while you wait for dinner, a run before school. Multiple shorter bursts work. The body doesn't need it in one perfect block to respond.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `energised`,
              label: `🌟 Leaves you feeling energised and alive`,
              color: `#34D399`,
            },
            {
              id: `flat`,
              label: `😴 Leaves you feeling flat and restless`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l04-g1`,
              image: `l04-game-1.png`,
              label: `Jumping on a trampoline or dancing to your favourite songs after school.`,
              matchPhrase: `Movement like this releases mood-lifting chemicals in your brain — you almost always feel better after than before.`,
              correctMatch: `energised`,
            },
            {
              id: `l04-g2`,
              image: `l04-game-2.png`,
              label: `Going for a bike ride or a walk outside with someone you enjoy.`,
              matchPhrase: `Movement outdoors with someone you like combines physical and social benefits — a powerful combination for mood and energy.`,
              correctMatch: `energised`,
            },
            {
              id: `l04-g3`,
              image: `l04-game-3.png`,
              label: `Spending three hours lying on the sofa scrolling through videos without getting up.`,
              matchPhrase: `Long periods of stillness often leave your body and mind feeling more sluggish, not more rested — movement is what actually recharges you.`,
              correctMatch: `flat`,
            },
            {
              id: `l04-g4`,
              image: `l04-game-4.png`,
              label: `Skipping recess to stay inside on a screen instead of getting some movement.`,
              matchPhrase: `Recess is when your brain gets to reset — missing it often means less focus and lower mood for the rest of the afternoon.`,
              correctMatch: `flat`,
            },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l04-q1`,
              format: `multiple-choice`,
              question: `What is BDNF and why does it matter?`,
              options: [
                `A hormone that controls energy storage during exercise`,
                `Brain-Derived Neurotrophic Factor — a protein released during exercise that promotes new brain cell growth and stronger connections`,
                `A supplement athletes take to improve performance`,
                `A type of energy that muscles use during intense activity`,
              ],
              correctIndex: 1,
              explanation: `BDNF is released when you exercise and acts like fertiliser for your brain — promoting new brain cell growth and strengthening the connections between existing ones. It's one of the main reasons exercise makes learning easier and memory stronger.`,
            },
            {
              id: `l04-q2`,
              format: `multiple-choice`,
              question: `What does regular physical movement do for your mood?`,
              options: [
                `It only improves mood in people who are already physically fit`,
                `It can leave you feeling worse if you're not used to it`,
                `Moving your body releases chemicals in your brain that lift your mood and reduce stress — often within minutes`,
                `It only improves mood when done in competitive sports with other people`,
              ],
              correctIndex: 2,
              explanation: `Exercise releases endorphins, serotonin, and dopamine — chemicals that lift mood, create feelings of wellbeing, and reduce the stress hormone cortisol. The effect is often noticeable within minutes, not weeks.`,
            },
            {
              id: `l04-q3`,
              format: `multiple-choice`,
              question: `Why is finding movement you enjoy so important?`,
              options: [
                `Because enjoyment makes exercise count as a different type of activity`,
                `Because fun exercise burns more energy`,
                `Because enjoyment drives consistency, and consistency is what builds the real benefits over time`,
                `Because disliking exercise releases stress hormones that undo the benefits`,
              ],
              correctIndex: 2,
              explanation: `You can do any form of movement perfectly — but if you dread it, you won't keep doing it. Enjoyment is what turns movement from a chore into a habit. And habits are what actually produce lasting benefits.`,
            },
            {
              id: `l04-q4`,
              format: `true-false`,
              question: `Physical movement helps your brain grow and learn — not just your body.`,
              correctAnswer: true,
              explanation: `True. BDNF released during exercise literally promotes the growth of new brain cells and strengthens neural connections. Schools that added daily movement saw academic results improve — without any extra study time.`,
            },
            {
              id: `l04-q5`,
              format: `fill-blank`,
              question: `BDNF — released during exercise — is sometimes called "Miracle-Gro for the ___" because it helps the brain grow new connections.`,
              options: [
                `brain`,
                `muscles`,
                `bones`,
                `heart`,
              ],
              correctIndex: 0,
              explanation: `Brain-Derived Neurotrophic Factor earned its "Miracle-Gro for the brain" nickname because of its powerful effect on brain cell growth and the strengthening of neural connections — particularly in the areas linked to memory and learning.`,
            },
            {
              id: `l04-q6`,
              format: `multiple-choice`,
              question: `What makes a particular type of movement the best personal choice for you?`,
              options: [
                `That it uses the most energy in the shortest amount of time`,
                `That a doctor or teacher recommended it as the most beneficial option`,
                `That it is the same activity your friends are doing`,
                `That you genuinely enjoy it — because enjoyment is what turns movement into a lasting habit`,
              ],
              correctIndex: 3,
              explanation: `The most effective movement is the kind you'll actually keep doing. Enjoyment is the foundation of consistency — and consistency is what produces lasting benefits for your brain, mood, and body over time.`,
            },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Movement is one of the most studied health tools in the world — researchers consistently find it helps brains, moods, immune systems, and sleep in ways that no single medicine can match.`,
          familyAdventure: `Create a family movement week — every day, everyone does something active together, however small. Track it and notice at the end: which activities did everyone enjoy most? Make one a regular family habit.`,
          creativePrompt: `This week, notice how you feel on days when you move your body versus days when you mostly stay still. Your body will tell you what it needs.`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that moving your body isn't just about getting fit — it's how you grow your brain, lift your mood, and charge up your energy. Find the movement that makes you feel alive, and give yourself that gift as often as you can. Terra is so proud to walk this path with you.`,
          badge: `movement-champion`,
          badgeName: `Movement Champion`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L04.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L04] Loaded: "Exercise: Why Moving Matters" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l04-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l04-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l04-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l04-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L04] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L04] One or more magazine assets missing'));
}
