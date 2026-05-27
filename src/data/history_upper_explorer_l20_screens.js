// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L20 — The World in 2050: Trends and Predictions  (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.4.3-5 — Multiple perspectives
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
//            C3 D4.6.3-5 — Take informed action on issues
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — why predictions are hard, major trends to watch,
//        multiple possible futures, the student's own role
// VERSION: v1
// CAPSTONE: 100 XP. Wraps up the entire history subject.
// CONTESTED TOPIC: Predictions are inherently uncertain. Present multiple
//                  possible futures. No agenda about which one is "right."
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-20`,
      title: `The World in 2050: Trends and Predictions`,
      duration: 18,
      xpReward: 100,
      badge: `future-historian`,
      badgeName: `Future Historian`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. This is the last lesson of History and World. We've traveled from prehistory to the digital age. Today we look FORWARD. The world in 2050 isn't here yet. You'll be about 35-37 years old when 2050 arrives. Predictions are hard, and the future will surprise us. But there are real trends we can examine and multiple possible paths history could take. By the end, you'll have tools to think about your own future and the world's. Let's finish strong.`,
          headline: `The World in 2050`,
          subtitle: `Trends, possibilities, and your role in shaping what comes next`,
          visual: `/ue-assets/history/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Predicting the Future Is So Hard`,
          paragraphs: [
            `Humans are TERRIBLE at predicting the future. In 1900, almost no one predicted World War I, just 14 years away. In 1980, very few predicted the rapid rise of the internet. In 2000, almost no one predicted that smartphones would become extensions of every person's body. The future repeatedly surprises even the smartest experts. This isn't a flaw in human thinking. It's that the future depends on too many factors interacting, including human choices that haven't been made yet.`,
            `What humans CAN do is identify TRENDS. A trend is a pattern that's been moving in a clear direction for a while. Aging populations in many countries. Rising adoption of artificial intelligence. Renewable energy growing cheaper. Urban populations growing. Climate change affecting weather patterns. None of these guarantee any specific outcome by 2050, but they all shape the range of possibilities. Looking honestly at trends gives you better thinking than either trying to predict exactly or refusing to think about the future at all.`,
          ],
          image: `/ue-assets/history/l20-s1-prediction.webp`,
          imageCaption: `Humans are bad at exact predictions. We're better at spotting trends.`,
          vocab: [
            { word: `prediction`,
              definition: `A statement about what will happen in the future. Predictions are made based on current information and trends, but the future often surprises even careful predictors.`,
              audioPrompt: `A prediction is a statement about what will happen in the future, {name}. Predictions are made based on current information, trends, and the best understanding of how things change. Humans are notoriously bad at exact predictions. The future has surprised every generation. But humans CAN look at trends, which are patterns that have been moving in a clear direction over time. Trends don't tell us exactly what will happen, but they give us a sense of the range of possibilities.` },
            { word: `uncertainty`,
              definition: `The state of not knowing what will happen. The future involves uncertainty because it depends on too many factors and choices that haven't been made yet.`,
              audioPrompt: `Uncertainty is the state of not knowing what will happen, {name}. The future always involves uncertainty. Even the best experts with the most information cannot predict exactly what will happen next year, let alone in 2050. Uncertainty isn't a problem to solve. It's a condition to accept. What changes is how you respond to it. Do you refuse to act because you don't know the outcome? Or do you look at trends, think through scenarios, and make the best choices you can with what you know?` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Major Trends to Watch`,
          paragraphs: [
            `Several trends are likely to shape the next 25 years. TECHNOLOGY: AI is advancing rapidly. By 2050, AI may help diagnose diseases, drive most cars, write entire books, and do tasks no one currently imagines. Biotechnology might routinely correct genetic diseases. Renewable energy may dominate electricity. Space exploration may include the first sustained human presence on Mars. DEMOGRAPHICS: The world population may stabilize around 9-10 billion. Many developed countries are aging rapidly. India is projected to remain the world's most populous country. African populations are growing fast.`,
            `ECONOMICS: Asian economies (China, India, Indonesia, Vietnam) may continue gaining share of global wealth. Some predict the U.S. will still be a major power but in a more multipolar world. NEW INDUSTRIES may emerge that we can't easily imagine yet. ENVIRONMENT: Climate change will continue to affect weather, sea levels, and ecosystems. Whether humanity manages it well depends on choices made in the next two decades. POLITICS: Democracy faces challenges in many countries. Authoritarian governments are also tested. Conflicts over resources, borders, and ideas continue. NONE of these are certain. All are real trends shaping the range of possible futures.`,
          ],
          image: `/ue-assets/history/l20-s2-trends.webp`,
          imageCaption: `AI, demographics, climate, economic shifts. Trends shaping what's possible by 2050.`,
          vocab: [
            { word: `trend`,
              definition: `A pattern that's been moving in a clear direction over time. Trends help us think about possible futures without guaranteeing specific outcomes.`,
              audioPrompt: `A trend is a pattern that's been moving in a clear direction over time, {name}. Renewable energy getting cheaper. Populations aging in many countries. AI getting more powerful. These are trends. Trends don't tell us exactly what will happen, but they tell us the direction things have been moving. Smart thinking about the future starts with identifying real trends, then asking what would have to happen for them to continue and what could change them. Trends are tools for thinking, not predictions of the future.` },
            { word: `artificial intelligence`,
              definition: `Computer systems that can do tasks normally requiring human intelligence, like recognizing images, translating languages, and generating text. AI is advancing rapidly and expected to transform many fields by 2050.`,
              audioPrompt: `Artificial intelligence is computer systems that can do tasks normally requiring human intelligence, {name}. Recognizing faces. Translating languages. Writing text. Playing chess better than any human. AI has already transformed many fields and is advancing rapidly. By 2050, AI may help diagnose diseases, drive most vehicles, and do tasks we haven't yet imagined. It could also change which jobs exist and what skills humans need. AI is one of the biggest trends shaping the world your generation will grow up in.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Multiple Possible Futures`,
          paragraphs: [
            `Historians and thinkers who study the future often imagine multiple SCENARIOS rather than one prediction. A scenario is a story about how the future might unfold based on different choices and conditions. One scenario for 2050 might be a world where renewable energy has largely replaced fossil fuels, AI handles many tasks but humans still do meaningful work, and international cooperation has handled major challenges reasonably well. Another might be a world where climate damage and inequality have created major conflicts and migrations. A third might be a world where new technologies humans haven't imagined have transformed life in ways we can't predict from today.`,
            `Which scenario unfolds depends on CHOICES. Your generation will make many of those choices. So will leaders, voters, inventors, entrepreneurs, parents, teachers, and ordinary people all over the world. History isn't a movie we watch. It's a story we write together. Honest thinking about the future doesn't pretend any one scenario is destiny. It recognizes that real choices made by real people, including you when you're older, will shape what actually happens.`,
          ],
          image: `/ue-assets/history/l20-s3-scenarios.webp`,
          imageCaption: `Many possible futures. Each shaped by real choices, including ours.`,
          vocab: [
            { word: `scenario`,
              definition: `A story about how the future might unfold based on different choices and conditions. Thinkers about the future often imagine multiple scenarios instead of trying to predict one specific outcome.`,
              audioPrompt: `A scenario is a story about how the future might unfold, {name}. Based on different choices and conditions. Instead of trying to predict the future precisely, careful thinkers often imagine several scenarios. One where things go well in certain ways. One where they go badly. One where new things happen we couldn't have imagined. Scenarios help us prepare for different possibilities and think about what choices today might make different futures more or less likely. They're tools for clearer thinking about an uncertain future.` },
            { word: `generation`,
              definition: `A group of people born and living at roughly the same time. Each generation faces its own set of challenges and opportunities. Your generation will shape the world of 2050.`,
              audioPrompt: `A generation is a group of people born and living at roughly the same time, {name}. Each generation inherits the world as it is, faces its own challenges, and leaves a changed world for the next. Your generation will live through transformations in AI, climate, energy, and geopolitics. You'll make choices about those challenges when you're adults. Every generation in history has done this, feeling unprepared at first and then figuring it out. There's no reason to think your generation will be any different.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Role in History`,
          paragraphs: [
            `Every lesson in this subject covered people making CHOICES that shaped what came next. Hunter-gatherers chose to start farming. Sumerians chose to invent writing. Mansa Musa chose to share his wealth on his pilgrimage. Galileo chose to defend evidence even when it was dangerous. Workers chose to organize for better conditions. Gandhi chose nonviolent resistance. None of them knew exactly what their choices would lead to. They made them anyway, because choices matter even when the future is uncertain.`,
            `By the time you're an adult, you'll have your own decisions to make. About how you live. How you treat people. What you build. What you stand for. What you study. Where you go. Who you help. You're not just a witness to history. You're going to be in it. Studying the past isn't just about distant times. It's about giving you tools, examples, and patterns to draw on when you face your own choices. The past doesn't tell you what to do. It shows you what's possible when humans engage thoughtfully with their times. {name}, that's the gift this subject hopes to leave with you.`,
          ],
          image: `/ue-assets/history/l20-s4-your-role.webp`,
          imageCaption: `Every previous generation made choices. So will yours.`,
          vocab: [
            { word: `agency`,
              definition: `The ability of a person to make their own choices and take actions that affect their life and the world. Every historical figure had agency, and so do you.`,
              audioPrompt: `Agency is the ability of a person to make their own choices and take actions that affect their life and the world, {name}. Every historical figure had agency. Hunter-gatherers chose to start farming. Galileo chose to defend evidence. Mandela chose forgiveness and democratic transition. They didn't always know how their choices would turn out. They acted anyway, because agency is real. You have agency too. As you grow up, your choices will matter.` },
            { word: `legacy`,
              definition: `What a person, generation, or event leaves behind for the future. Every generation in history has left a legacy, and your generation will too.`,
              audioPrompt: `A legacy is what a person, generation, or event leaves behind for the future, {name}. Every historical figure we've studied left a legacy. Some were famous. Most were ordinary people whose collective choices shaped history. Mansa Musa's legacy was cultural and economic. The Industrial Revolution's legacy is the modern world, with all its benefits and costs. Gandhi's legacy is a model of nonviolent change. What legacy will your generation leave? That depends on the choices you make when it's your turn.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four statements about the future. For each one, identify what kind of statement it is: TREND (a pattern moving in a clear direction now), SCENARIO (a story about how the future might unfold), or CHOICE POINT (a decision that humans need to make in the next few decades)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `trend`,        label: `Trend`,        color: `#60A5FA`, description: `A pattern that's already moving in a clear direction.` },
            { id: `scenario`,     label: `Scenario`,     color: `#A78BFA`, description: `A story or vision about how the future might unfold.` },
            { id: `choice-point`, label: `Choice Point`, color: `#FBBF24`, description: `A specific decision humans need to make that will affect which future arrives.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Statement #1`,
              clues: [
                { text: `In 2000, less than 5% of electricity in most countries came from solar and wind.` },
                { text: `By 2024, solar and wind together generated about 30% of electricity in many countries.` },
                { text: `This shift has been growing steadily for over 20 years.` },
              ],
              correctAnswer: `trend`,
              realWorldExample: `Renewable energy growth is one of the clearest recent trends.`,
              explanation: `Measurable, steady direction over many years. Pure trend. The shift from fossil fuels toward renewables is a real, ongoing pattern that will likely continue, though how fast depends on many factors.`,
            },
            {
              id: `case-2`,
              caseTitle: `Statement #2`,
              clues: [
                { text: `Imagine a 2050 where AI has solved many medical problems, renewable energy powers most of the world, and humans have established a small base on Mars.` },
                { text: `In this version of the future, international cooperation has worked reasonably well.` },
                { text: `Many young people of your generation grow up in this world.` },
              ],
              correctAnswer: `scenario`,
              realWorldExample: `An optimistic 2050 scenario.`,
              explanation: `A coherent story about how the future might look. Not a prediction, not a fact. Just one possible scenario. Other scenarios involving climate damage, AI risks, or geopolitical conflicts are also possible. Scenarios are tools for thinking, not predictions.`,
            },
            {
              id: `case-3`,
              caseTitle: `Statement #3`,
              clues: [
                { text: `Countries need to decide how to manage AI development.` },
                { text: `Some are passing strict rules for what AI can be used for. Some are encouraging rapid development without rules.` },
                { text: `The choices made in the next decade will shape what AI looks like in 2050.` },
              ],
              correctAnswer: `choice-point`,
              realWorldExample: `AI policy is one of the most active current choice points.`,
              explanation: `Specific decisions humans are making right now that will shape the future. Pure choice point. This isn't a trend (no clear direction is established yet) or a scenario (it's not a story). It's a decision being made now that will affect later outcomes.`,
            },
            {
              id: `case-4`,
              caseTitle: `Statement #4 — The Tricky One`,
              clues: [
                { text: `India's population has been growing while many developed countries are aging.` },
                { text: `By 2050, India will likely have the world's largest workforce, and many wealthy countries will face labor shortages.` },
                { text: `Whether this leads to migration, automation, or new economic relationships depends on choices being made now.` },
              ],
              correctAnswer: `trend`,
              realWorldExample: `Global demographic shifts are some of the most predictable trends.`,
              explanation: `Tricky because the OUTCOMES depend on choices (choice point) and the future could unfold in different ways (scenarios). But the DEMOGRAPHIC SHIFT itself is a trend. India's growth and developed-country aging are measurable patterns that have been moving in clear directions for decades. The lesson: trends are the foundation. Scenarios are stories built on trends. Choice points are decisions that pick which scenarios are more likely. Knowing the difference helps you think clearly about the future.`,
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Final quiz, {name}. You've earned this.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `Why is exactly predicting the future so HARD for humans?`,
              options: [
                `Humans are stupid`,
                `Because the future depends on too many factors interacting, including human choices that haven't been made yet`,
                `Because no one tries`,
                `Because no one cares`,
              ],
              correctIndex: 1,
              explanation: `The future has too many moving parts. Choices not yet made by billions of people. Inventions not yet imagined. Events that surprise everyone. Humans are bad at exact predictions because the world is more complex than any model can fully capture.` },

            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is a TREND?`,
              options: [
                `A guess`,
                `A pattern that's been moving in a clear direction over time`,
                `A trend on social media`,
                `A type of weather`,
              ],
              correctIndex: 1,
              explanation: `Trends are patterns moving in clear directions. Renewable energy getting cheaper. AI getting more powerful. Populations aging in many countries. Trends help us think about the range of possible futures without claiming to predict exactly what will happen.` },

            { id: `l20-q3`, format: `multiple-choice`,
              question: `What is a SCENARIO?`,
              options: [
                `A specific prediction`,
                `A story about how the future might unfold based on different choices and conditions`,
                `A type of movie`,
                `A school assignment`,
              ],
              correctIndex: 1,
              explanation: `Scenarios are stories about possible futures. Careful thinkers usually imagine several scenarios rather than predicting one outcome. Different scenarios help us prepare for different possibilities and think about which choices would make better futures more likely.` },

            { id: `l20-q4`, format: `multiple-choice`,
              question: `Which of these is a MAJOR TREND likely to shape the next 25 years?`,
              options: [
                `Nothing changes`,
                `Aging populations in many countries, rising AI use, climate change effects, growing renewable energy, shifts in global economic power`,
                `Only weather`,
                `Only sports`,
              ],
              correctIndex: 1,
              explanation: `These are all real trends shaping the range of possible 2050 futures. None of them guarantee a specific outcome, but all of them will play important roles in shaping what actually happens.` },

            { id: `l20-q5`, format: `true-false`,
              question: `True or false: Every previous generation made choices that shaped what came next, and your generation will too.`,
              correctAnswer: true,
              explanation: `True. Every historical figure we've studied made choices when the future was uncertain. Hunter-gatherers starting farming. Galileo defending evidence. Workers organizing for rights. Mandela choosing forgiveness. They didn't know how things would turn out. Their choices mattered. Yours will too.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `What is AGENCY?`,
              options: [
                `A government office`,
                `The ability of a person to make their own choices and take actions that affect their life and the world`,
                `A type of business`,
                `A name`,
              ],
              correctIndex: 1,
              explanation: `Agency is the ability to make real choices that affect what happens. Every person has agency. Studying history is partly about seeing how other people used their agency, so you can think about how to use yours when you face your own choices.` },

            { id: `l20-q7`, format: `multiple-choice`,
              question: `What kind of thinking helps you face an uncertain future WISELY?`,
              options: [
                `Predicting exactly what will happen and being confident`,
                `Refusing to think about the future at all`,
                `Recognizing trends honestly, imagining multiple scenarios, identifying choice points, and being thoughtful about your own decisions`,
                `Only listening to one opinion`,
              ],
              correctIndex: 2,
              explanation: `Wise thinking about the future combines: honest about trends, humble about predictions, open to multiple scenarios, clear about choice points, and thoughtful about your own role. This is the historical thinking the whole subject has been building toward.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `What's the biggest gift studying HISTORY can give you?`,
              options: [
                `Memorizing dates`,
                `Tools, examples, and patterns to draw on when you face your own choices in your own time`,
                `Trivia for school`,
                `Old stories with no value today`,
              ],
              correctIndex: 1,
              explanation: `History isn't just about distant times. It's about giving you tools, examples, and patterns to draw on when YOU face your own choices. Studying how other people thought, acted, and dealt with uncertainty helps you do the same when it's your turn.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `Final reflection, {name}. Pick ONE question. This one matters because it's about YOU.`,
          prompts: [
            { id: `r1`, text: `When you imagine yourself in 2050 (around age 35-37), what's ONE thing you most hope you've done with your life?` },
            { id: `r2`, text: `Of all the historical figures we've covered this year, who do you most admire? What's something about them you want to carry into your own life?` },
            { id: `r3`, text: `What's a big challenge in the world that you think YOUR generation will need to face? What strengths might you bring to it?` },
            { id: `r4`, text: `If you could give one piece of advice to yourself for the rest of your life based on what you've learned in this subject, what would it be?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `You've now studied 20 lessons of world history. From prehistoric hunter-gatherers to predictions about 2050. You can identify trends, hold multiple perspectives, distinguish settled facts from contested debates, understand mixed effects of major historical changes, and connect the past to your own life and future. These are the historical thinking skills C3 standards aim to build, and you've built them. As you grow up, you'll encounter many strong opinions, contested topics, and choices about your own life. The tools from this subject will serve you. Use them well.`,
          familyAdventure: `Family Conversation: Your Future. Sit down with your family and have a real conversation about 2050. Each person picks one trend they think will matter, one scenario they hope unfolds, and one choice they think humans need to make wisely. Listen carefully to each other. You don't have to agree. The point is thinking clearly about an uncertain future together. This is exactly what every previous generation has had to do.`,
          creativePrompt: {
            intro: `Write a letter to YOURSELF, to be opened in 2050 when you're around 35-37 years old. Tell your future self what you hope you've done with your life.`,
            floor: `Write at least 5 sentences. Cover one thing you hope you've accomplished, one way you hope you've grown, and one thing about the world you hope is better.`,
            stretch: `Write 8 to 10 sentences. Cover what you've learned about history, what you hope to have done with your own agency, what kind of person you hope to be, and what you hope the world looks like.`,
            open: `Write as much as you want. Build a full letter that captures your hopes, your worries, your values, and your sense of what kind of life you'd want to have lived by 2050. Don't worry about being perfect. Be honest with your future self.`,
            frames: [
              `Dear future me, today is 2026 and you are reading this in 2050.`,
              `What I hope you've done with your life is ___.`,
              `What I hope the world looks like is ___.`,
              `One thing I hope you remember from studying history is ___.`,
              `If you've made mistakes along the way, please know ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `Congratulations, {name}. You've completed every History and World lesson in the Upper Explorer band. From prehistory to predictions about 2050, you've covered the full sweep of human history. You can think historically, hold multiple perspectives, distinguish settled facts from contested ones, and connect the past to your own life and future. You've earned the Future Historian badge AND 100 XP for the capstone. More importantly, you carry these tools forward. History isn't behind you. You're going to live it. — Lyra. Always.`,
          badge: `future-historian`,
          badgeName: `Future Historian`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L20.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L20 v1 CAPSTONE] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
