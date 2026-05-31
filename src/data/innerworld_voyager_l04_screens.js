// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L04 — Epigenetics: How Your Environment Talks to Your Genes
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Mind-Body Science, Scientific Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (peer-reviewed vs pop-science vs TikTok)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l04-v1";

const INNERWORLD_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-04`,
      title: `Epigenetics: How Your Environment Talks to Your Genes`,
      duration: 35,
      xpReward: 75,
      badge: `gene-decoder`,
      badgeName: `Gene Decoder`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, you've probably been told something like 'you have your dad's eyes' or 'your grandma had the same temper.' We tend to think of genes as a destiny we inherit and can't change. Recent science says it's more complicated than that. Your genes are real, but they're not the whole story. There's another layer, called epigenetics, that decides which of your genes are turned on and which are turned off at any moment. And your environment, your behavior, even what your grandparents went through, can change that layer. Today we look at one of the most misunderstood and most exciting fields in modern biology. We also learn how to tell real science from the people selling you nonsense in its name.`,
          headline: `Epigenetics`,
          subtitle: `Your genes aren't your destiny. They're your possibility.`,
          visual: `/voyager-assets/inner-world/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Genes Are A Script. Epigenetics Is The Director.`,
          paragraphs: [
            `Every cell in your body has the same DNA. The cells in your eyeballs, in your liver, in your brain, all have the exact same genetic code. But they look completely different and do completely different jobs. Eyeball cells don't grow bone. Liver cells don't fire electricity. How does the body know which cell should do what when they all carry the same instructions?`,
            `The answer is epigenetics. The word means 'above' or 'on top of' genetics. Think of your DNA as a script for a movie. Every actor in the movie gets the whole script. But each actor only reads the lines they're supposed to say. They ignore the rest. Epigenetics is the system that tells each cell which lines to read and which to ignore. The script doesn't change. But which parts get used does.`,
            `This happens through chemical tags that attach to your DNA without changing the underlying letters. The most studied tag is called methylation: tiny molecules that stick to genes and silence them. Another tag, called acetylation, does the opposite. It opens genes up to be used. Your body adds and removes these tags constantly, all day, based on what's happening inside you and around you. Your genes are real. But which ones are active right now is being decided in real time.`,
          ],
          image: `/voyager-assets/inner-world/l04-s1-script.webp`,
          imageCaption: `Same DNA in every cell. Different genes get used.`,
          vocab: [
            {
              word: `epigenetics`,
              definition: `The system of chemical tags on your DNA that control which genes are turned on or off in each cell, without changing the underlying genetic code.`,
              audioPrompt: `Epigenetics is the system of chemical tags on your DNA that control which genes are turned on or off, {name}. The word means 'above' or 'on top of' genetics. Your DNA is the script. Epigenetics is who's deciding which lines get read. This happens all the time in your body. Every cell uses only the genes it needs. Your environment, your behavior, and your experiences all influence the tags that decide which genes get used. The script doesn't change. The performance does.`,
            },
            {
              word: `methylation`,
              definition: `The most common epigenetic tag. Tiny chemical molecules attach to genes and silence them.`,
              audioPrompt: `Methylation is the most studied epigenetic tag, {name}. Tiny chemical molecules called methyl groups attach to specific spots on your DNA and quiet those genes down. When a gene gets methylated, it's like someone put a 'do not read' sticker on that part of the script. Your body adds methyl tags and removes them constantly based on what's happening to you. Stress, diet, sleep, and exercise all influence methylation patterns. This is a real biological process you can measure in a lab.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Dutch Hunger Winter`,
          paragraphs: [
            `In the winter of 1944, the Nazi army cut off food supplies to the western Netherlands. For about six months, food rations dropped below 1,000 calories a day, then below 500. Tens of thousands of people died. Pregnant women starved. Babies were born underweight. The country was freed in May 1945 and the famine ended. For decades, no one looked closely at what happened to those babies.`,
            `Then in the 1990s, researchers started tracking the people who were in the womb during the Hunger Winter. They found something strange. Compared to their siblings born just before or just after, these now-adults had significantly higher rates of obesity, diabetes, heart disease, and certain mental health conditions. The differences showed up decades later, when these people were in their fifties and sixties. The siblings had nearly identical DNA. They had different prenatal environments.`,
            `In 2008, geneticists published a study in the Proceedings of the National Academy of Sciences. They found specific epigenetic differences. The famine-exposed individuals had less methylation at a gene called IGF2, which affects growth and metabolism, 60 years after the famine ended. This was the first solid evidence that an environmental event in the womb could leave a measurable molecular signature for an entire lifetime. The famine literally edited which genes got used.`,
          ],
          image: `/voyager-assets/inner-world/l04-s2-hunger.webp`,
          imageCaption: `1944-45: Six months of starvation, six decades of biological echo.`,
          vocab: [
            {
              word: `prenatal`,
              definition: `Before birth, while still developing in the womb.`,
              audioPrompt: `Prenatal means before birth, {name}. The Dutch Hunger Winter babies were affected prenatally, meaning the famine happened while they were still in the womb. This matters because the womb is when many epigenetic patterns are first set up. What a mother experiences during pregnancy, including stress, nutrition, and trauma, can influence which genes get methylated in her developing baby. That influence can last a lifetime. Scientists now study prenatal effects as one of the most important windows for setting up long-term health.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Your Environment Talks To Your Genes`,
          paragraphs: [
            `The Hunger Winter is dramatic, but epigenetic changes happen constantly in normal life. Researchers have mapped several ways your environment writes onto your epigenome. Chronic stress is one of the most studied. When you're under constant stress, your body produces high levels of a hormone called cortisol. Cortisol changes methylation patterns at genes involved in inflammation, mood regulation, and immune function. Long-term stress can leave epigenetic fingerprints that affect your biology for years.`,
            `Diet matters too. Foods rich in folate (leafy greens, beans) and B vitamins are sources of methyl groups, the same molecules used in DNA methylation. What you eat literally provides raw material for your epigenetic machinery. Exercise affects gene expression in muscle tissue, mitochondria, and the brain. Sleep deprivation alters epigenetic markers within just a few nights of poor sleep. Researchers at the University of Wisconsin (Richard Davidson's lab) have shown that intensive meditation can shift inflammation-related gene expression in as little as eight hours of intensive practice.`,
            `One of the most controversial findings is about transgenerational effects. Rachel Yehuda's research at Mount Sinai found that children of Holocaust survivors show altered methylation at stress-response genes, even though they didn't experience the Holocaust themselves. The mechanism is still being studied. Some scientists are cautious about how strong these effects really are in humans. But the basic finding, that experiences leave biological marks beyond just memories, is reshaping how we think about heredity.`,
          ],
          image: `/voyager-assets/inner-world/l04-s3-environment.webp`,
          imageCaption: `Stress, food, sleep, exercise: all writing on your genes.`,
          vocab: [
            {
              word: `transgenerational`,
              definition: `Across generations. Effects that pass from parents or grandparents to children.`,
              audioPrompt: `Transgenerational means across generations, {name}. Some epigenetic researchers have found evidence that intense experiences in one generation can leave biological marks in their children or grandchildren. Rachel Yehuda's research on Holocaust survivors and their children is the most famous example. This is still being actively debated by scientists. The effects in animals are well-established. The effects in humans are real but more subtle than pop science often claims. Be careful: transgenerational effects don't mean you're cursed by what your grandparents went through. They mean your biology has memory.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Where Pop Science Goes Off The Rails`,
          paragraphs: [
            `Epigenetics has become a favorite topic for wellness influencers, self-help books, and social media gurus. Some of what they say is true. Some of it is wildly oversold. Learning to tell the difference is one of the most useful scientific literacy skills you can develop, because this same pattern (real science → pop-science overreach → viral hype) shows up in dozens of fields.`,
            `The most common overreach: 'You can rewrite your DNA with your thoughts.' This is misleading. Your DNA sequence cannot be rewritten by thoughts. Your epigenetic patterns can be influenced by stress, behavior, diet, and exercise. Those things are related but not the same. The viral version makes it sound like positive thinking can cure cancer or rewire trauma in 21 days. The actual science says: lifestyle and behavior can shift gene expression in measurable but typically modest ways, over time.`,
            `Bruce Lipton, a former cell biologist, has built a popular career arguing that beliefs control biology. He cites real epigenetics research, but he extrapolates dramatically beyond what the data supports. Other epigeneticists, the people doing the actual research, have publicly criticized his claims as oversimplified and misleading. This pattern is common: someone who was a real scientist starts selling courses and books with big promises that the science doesn't actually back up. Their followers don't know the difference. Today's lesson will teach you to spot it.`,
          ],
          image: `/voyager-assets/inner-world/l04-s4-overreach.webp`,
          imageCaption: `Real science gets oversold. Learning to spot it is a literacy skill.`,
          vocab: [
            {
              word: `overreach`,
              definition: `When someone takes a real scientific finding and extends it far beyond what the evidence actually supports.`,
              audioPrompt: `Overreach is when someone takes a real scientific finding and stretches it way beyond what the evidence shows, {name}. Epigenetics has real findings: yes, environment affects gene expression. The overreach version: 'you can rewrite your DNA with affirmations and cure your trauma in 30 days.' The real finding is exciting and important. The overreach version is misleading because it gives people false hope and overpromises. Learning to notice overreach is one of the most useful scientific literacy skills. It will protect you for the rest of your life.`,
            },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What This Actually Means For You`,
          paragraphs: [
            `Here's the honest version of what epigenetics means for an 11- or 12-year-old. You cannot change your DNA sequence. You inherited what you inherited. But your gene expression, which of your genes are active right now, is being shaped constantly by your environment and your behavior. Sleep matters. What you eat matters. Whether your stress is chronic or temporary matters. Whether you exercise matters. These aren't tiny effects; over years they shape your biology.`,
            `This is genuinely empowering, but in a measured way. You're not 'rewriting your DNA.' You're influencing which of your genes get used. The good news is that this means a hard start (genetic risks, prenatal stress, early trauma) doesn't lock you in. Epigenetic patterns can shift. People who were in the Dutch Hunger Winter showed methylation differences 60 years later, but they also weren't doomed. Many lived long healthy lives. Their biology had echoes, not chains.`,
            `The deeper point is that the old debate, nature versus nurture, is too simple. Your genes and your environment are in constant conversation. Your behavior is part of that conversation. So is what your parents and grandparents went through, in subtle ways. You are not predetermined. You are not blank. You are a dance between what you started with and what you keep doing. Both matter. Both are still in play.`,
          ],
          image: `/voyager-assets/inner-world/l04-s5-dance.webp`,
          imageCaption: `Nature and nurture aren't opposites. They're constantly talking.`,
          vocab: [
            {
              word: `gene expression`,
              definition: `Which of your genes are actively being read and used by your cells at any given moment.`,
              audioPrompt: `Gene expression is which of your genes are actively being read and used by your cells right now, {name}. You have around 20,000 genes, but only some are 'expressed' in each cell at any moment. Epigenetics is what controls expression. A gene can be present in your DNA but completely silenced epigenetically. Another gene can be turned way up. When scientists talk about lifestyle affecting your genes, they almost always mean gene expression, not the underlying code. Knowing this distinction is what separates real science from pop overreach.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l04-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources, One Question`,
          intro: `You will see three sources making claims about whether and how your lifestyle and thoughts can affect your genes. Rank them from most credible to least credible. Explain your reasoning. Then see how a scientist would actually evaluate them.`,
          topic: `Can your thoughts and lifestyle actually change how your genes work?`,
          sources: [
            {
              id: `source-a`,
              name: `Heijmans et al., 2008`,
              type: `Peer-reviewed study, Proceedings of the National Academy of Sciences`,
              claim: `Individuals exposed to famine in early pregnancy during the Dutch Hunger Winter showed significantly less methylation at the IGF2 gene 60 years later, compared to unexposed same-sex siblings.`,
              evidence: `Studied 60 individuals matched with their unexposed siblings. Blood samples analyzed for DNA methylation at specific genes. Methodology peer-reviewed before publication. Published in a top-tier scientific journal. Findings have been replicated by other research groups.`,
            },
            {
              id: `source-b`,
              name: `Bruce Lipton`,
              type: `Popular science book (The Biology of Belief) and viral YouTube speaker. Former cell biologist who now sells courses.`,
              claim: `Your beliefs control your biology. You can rewrite your DNA with your thoughts. You are the master of your genes, not their victim.`,
              evidence: `Cites real epigenetics research in talks. Has not published primary research himself in over 25 years. Other epigeneticists, including researchers doing the actual studies, have publicly criticized his claims as dramatic overreach beyond what the data supports. Sells books, courses, and online programs.`,
            },
            {
              id: `source-c`,
              name: `@manifesthealing`,
              type: `TikTok video, 60 seconds, 4.2 million views`,
              claim: `Manifesting positive thoughts for 21 days can rewrite your DNA, heal trauma at the cellular level, and reverse generational curses. I did it and you can too.`,
              evidence: `One personal testimonial from the creator. No scientific study cited. No specific gene named. No measurement of any kind. Comments full of 'this changed my life' but no scientific evidence presented.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use to rank these? What is missing from the weakest source that the strongest one has?`,
          reveal: {
            title: `How a scientist would evaluate these`,
            content: [
              `Source A is the gold standard. Notice everything it has: a specific study with named authors, a specific gene (IGF2), a specific population (Dutch Hunger Winter survivors), a specific measurement (methylation levels), a specific comparison (matched siblings as controls), peer review before publication, and replication by other labs. The claim is precise and bounded. It does not say 'famine rewrites your DNA.' It says exactly what was measured and where.`,
              `Source B is the most dangerous because it sounds scientific. Lipton was a real scientist. He cites real research. But he extrapolates dramatically beyond what the evidence supports. Real epigeneticists, the ones doing the work, have publicly disagreed with his claims. The red flag is the gap between what the actual data shows (specific, modest, measurable effects) and what he claims ('you are the master of your genes'). When someone with credentials makes much bigger claims than their field supports, follow the money: who's selling courses and books?`,
              `Source C is the easiest to spot. No specific gene. No study cited. No measurement. Just a personal story and a viral hook. The 4.2 million views are not evidence. They show the claim is appealing, not that it's true. Personal testimonials are not science. The 21-day timeline and 'rewrite your DNA' language are the same overreach you saw in Source B, but stripped of even the appearance of expertise.`,
              `The skill you just practiced is one of the most useful in your life. Anywhere you read or hear a health claim (TikTok, books, podcasts, your friend's mom), run it through this filter. Who is making the claim? What specifically is being measured? Who reviewed it? Could it be replicated? Is the language precise or sweeping? You don't need to be a scientist to do this. You need to ask the questions.`,
            ],
          },
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does epigenetics actually mean?`,
              options: [
                `Changing the letters in your DNA`,
                `The system of chemical tags that control which genes are turned on or off without changing the DNA code`,
                `A new theory that has not been confirmed`,
                `The study of how genes evolve over generations`,
              ],
              correctIndex: 1,
              explanation: `Epigenetics literally means 'above genetics.' Chemical tags (like methylation) decide which genes get used in each cell. The underlying DNA sequence stays the same.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why is the Dutch Hunger Winter important to epigenetics research?`,
              options: [
                `It proved that famine causes DNA mutations`,
                `It was the first study to show specific epigenetic differences from a prenatal environmental event lasting 60+ years`,
                `It found a cure for diabetes`,
                `It showed that good nutrition has no effect on genes`,
              ],
              correctIndex: 1,
              explanation: `The 2008 Heijmans study found specific methylation differences at the IGF2 gene in famine-exposed individuals 60 years later. First solid evidence in humans that prenatal environment leaves measurable molecular marks.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Which is true about chronic stress and your genes?`,
              options: [
                `Stress changes your DNA sequence directly`,
                `Stress has no effect on biology, only on mood`,
                `Chronic stress affects methylation patterns at genes involved in inflammation, mood, and immune function`,
                `Stress only matters in childhood`,
              ],
              correctIndex: 2,
              explanation: `Chronic cortisol exposure shifts methylation patterns at multiple gene families. Stress affects your epigenome, not your DNA sequence. This is real, measurable, and one of the most studied epigenetic pathways.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the difference between 'rewriting your DNA' and 'shifting gene expression'?`,
              options: [
                `There is no difference, they mean the same thing`,
                `Rewriting DNA would mean changing the actual code; shifting expression means changing which genes are active without changing the code`,
                `Rewriting DNA is harder but possible with positive thinking`,
                `Gene expression is fake science`,
              ],
              correctIndex: 1,
              explanation: `This is the core distinction pop science gets wrong. You cannot change your DNA sequence with thoughts or behavior. You CAN influence which genes get used at any given moment. They are different things.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the strongest red flag that a health claim might be overreach?`,
              options: [
                `It involves science you haven't heard of`,
                `It uses words you don't recognize`,
                `It makes much bigger or more dramatic claims than the underlying research actually supports`,
                `It's based on research from another country`,
              ],
              correctIndex: 2,
              explanation: `Overreach is the gap between what the data shows (often modest, specific, conditional) and what the claim says ('you can heal anything in 21 days'). This gap is the red flag.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is a viral TikTok health claim usually a weak source even with millions of views?`,
              options: [
                `Because TikTok is unreliable as a technology`,
                `Because views measure appeal, not evidence; the claim still needs to be verified through actual research`,
                `Because young people make all the videos`,
                `Because TikTok videos are too short to contain truth`,
              ],
              correctIndex: 1,
              explanation: `Popularity is not evidence. A claim being widely seen, even by 4 million people, tells you nothing about whether it's true. Specific measurements, peer review, and replication are what make a claim credible.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Which is the most accurate summary of what epigenetics means for your life?`,
              options: [
                `You're stuck with whatever genes you got and can't influence them at all`,
                `You can rewrite your DNA with positive thinking and become anyone`,
                `Your behavior and environment influence which of your genes get used, in real but typically modest ways, over time`,
                `Epigenetics only matters for newborns and pregnant women`,
              ],
              correctIndex: 2,
              explanation: `The honest version. You can influence gene expression through lifestyle, behavior, and stress management. Effects are real but measured, not magical. Both 'you're predetermined' and 'you can become anyone' are too simple.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `In source evaluation, which of these would make a claim MOST credible?`,
              options: [
                `It went viral on social media`,
                `A famous person believes it`,
                `It comes from a peer-reviewed study with specific measurements that other labs have replicated`,
                `The author has a great speaking style`,
              ],
              correctIndex: 2,
              explanation: `Peer review (other experts checked the work before publication) + specific measurements + replication (other labs got similar results) are the strongest credibility signals in science.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Bruce Lipton is widely accepted by working epigeneticists as accurately representing their field.`,
              correctAnswer: false,
              explanation: `False. Actual epigenetics researchers have publicly criticized Lipton's claims as dramatic overreach beyond what the data supports. Having scientific credentials in the past does not mean someone's current claims are scientifically valid.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A wellness coach on Instagram tells you: 'My program rewires your genes in 8 weeks for $499.' Based on what you learned, what should you notice first?`,
              options: [
                `The price is too high`,
                `The phrase 'rewires your genes' is dramatic overreach, AND the 8-week timeline plus the high price are classic patterns of selling a product that the science does not actually support`,
                `8 weeks is too short for any change`,
                `They should be a licensed doctor`,
              ],
              correctIndex: 1,
              explanation: `Multiple red flags stack: overreach language ('rewires your genes'), a packaged timeline, and a high price for a 'program.' Real epigenetics influences happen through lifestyle over years, not from $499 courses. This pattern is the same overreach you spotted in the source evaluation.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What surprised you most about epigenetics? Did anything shift in how you think about heredity?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the three sources fooled you for a second before you noticed something off? What signal would have caught it faster?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If your gene expression is being shaped by what you do every day, who are you becoming biologically right now? What habits are you epigenetically casting?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of one health or wellness claim you've seen on TikTok or YouTube recently. Run it through the source evaluation filter. Does it hold up?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Bruce Lipton was a real scientist. Could there be something in his claims that real epigeneticists are missing? Or is he clearly overreaching? Defend your answer.` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Of stress, sleep, diet, and exercise, which one in YOUR life is most likely shaping your gene expression right now (positively or negatively)? Be specific.` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Epigenetics isn't an idea to read once and forget. It's a real biological lever you have some control over. Two paths below: a family conversation to anchor this week, and an optional 2-week practice if you want to investigate your own gene expression.`,
          familyActivity: {
            title: `The Family Epigenetic Story`,
            duration: `30 minutes`,
            description: `At dinner tonight, each family member shares one major environmental event a parent or grandparent went through that they think might have left epigenetic marks. (Examples: a famine, a war, immigration, prolonged stress, deep poverty, but also positive things like a stable supportive childhood.) Don't make it heavy. Be curious. Then everyone discusses: how might that event still echo in our family's biology and behavior today? You won't have proof. But you'll start seeing your family as a multi-generational biological story, not just a present-tense one. Real epigenetic researchers are now seriously studying exactly these questions in human families.`,
          },
          projectOption: {
            title: `The Epigenetic Self Experiment, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Pick one epigenetic lever you can actually influence (sleep, exercise, screen time, or one specific food group) and commit to changing it for 14 days. Each day, log: what you did, how you felt physically, how you slept, your energy and mood. At the end of 14 days, write 500 words: what shifted, what didn't, and what you learned about your own gene expression. You won't have lab measurements. But you'll have firsthand data about how lifestyle changes affect your biology. This is the kind of self-experimentation real scientists do.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If your daily choices are casting biological echoes that may outlast you, what kind of echo do you want to be?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads health claims with the question 'what's the actual measurement?'`,
            `A person who knows their daily habits are writing on their biology.`,
            `Someone who can tell real science from people selling courses with science words.`,
          ],
          saveKey: `identity_responses_iw_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain what epigenetics is and how it differs from DNA changes, describe the Dutch Hunger Winter study and what it actually proved, identify the gap between real epigenetic science and pop-science overreach, and evaluate three different sources making the same kind of claim. That last skill, source evaluation, is one of the most valuable in modern life. You'll use it for the rest of your years. Next time we go into a related and equally misunderstood topic: the placebo effect. Real, measurable, and constantly oversold. See you there. — Sage`,
          badge: `gene-decoder`,
          badgeName: `Gene Decoder`,
          xpEarned: 75,
          competencies: [
            `Can define epigenetics and explain how it differs from DNA sequence changes`,
            `Can describe the Dutch Hunger Winter findings and what they proved`,
            `Can identify pop-science overreach in health and wellness claims`,
            `Has practiced source evaluation comparing peer-reviewed research, popular books, and viral social media`,
            `Knows the basic mechanisms by which stress, diet, exercise, and sleep affect gene expression`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: The Placebo Effect, Real and Strange`,
            hook: `A sugar pill can reduce real pain. A fake surgery can heal a real knee. What does this tell us about the mind, the body, and the boundary between them?`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L04 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
