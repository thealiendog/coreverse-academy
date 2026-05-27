// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L14 — The Great Depression
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.Eco.9.3-5 — Causes of economic change
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — the 1929 crash, daily life during the Depression,
//        government responses (New Deal), end of the Depression and legacy
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-14`,
      title: `The Great Depression`,
      duration: 18,
      xpReward: 75,
      badge: `depression-historian`,
      badgeName: `Depression Historian`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson we covered the Russian Revolution and its long shadow. Today we look at a different kind of crisis. In October 1929, the U.S. stock market crashed. Within months, banks were failing, factories were closing, and millions of people had lost their jobs. The world entered the GREAT DEPRESSION, the worst economic disaster in modern history. It lasted about a decade, reshaped how governments work, and helped lead to World War II. We'll cover what happened and why it still matters. Let's go.`,
          headline: `The Great Depression`,
          subtitle: `The economic disaster that reshaped the modern world`,
          visual: `/ue-assets/history/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The 1929 Crash`,
          paragraphs: [
            `The 1920s in America were called the "Roaring Twenties." The economy was booming. New technology like radios and cars was spreading. The STOCK MARKET, where people buy and sell pieces of companies (called STOCKS), was rising fast. Many people bought stocks expecting prices to keep going up forever. Some borrowed money to buy more stocks, betting on continued growth.`,
            `Then came OCTOBER 1929. Over a few days, stock prices CRASHED. People panicked and sold their stocks. Prices fell further. Investors who'd borrowed money to buy stocks couldn't pay back their loans. Banks started failing. Within a few years, about HALF of all U.S. banks had collapsed. People's life savings disappeared overnight. Factories cut production. Workers lost jobs. The crisis spread from the U.S. across the world. Most major countries fell into deep economic trouble.`,
          ],
          image: `/ue-assets/history/l14-s1-crash.webp`,
          imageCaption: `October 1929: stock prices crashed. Banks failed. The world economy collapsed.`,
          vocab: [
            { word: `Great Depression`,
              definition: `The worst economic crisis in modern history, lasting roughly 1929 to 1939. Started with the U.S. stock market crash and spread across the world.`,
              audioPrompt: `The Great Depression was the worst economic crisis in modern history, {name}. It lasted roughly from 1929 to 1939. It started in the United States with a stock market crash in October 1929. Within months, banks failed, factories closed, and millions of people lost their jobs. The crisis spread across the world. By the early 1930s, unemployment in the U.S. was around 25 percent. The same disaster hit Germany, Britain, and most other major countries.` },
            { word: `stock market`,
              definition: `A system where people buy and sell shares (small pieces) of companies. When the stock market crashed in 1929, it triggered bank failures and started the Great Depression.`,
              audioPrompt: `The stock market is a system where people buy and sell shares of companies, {name}. Buying a share means owning a tiny piece of a company. If the company does well, the share's value goes up. If it does poorly, the value drops. In the 1920s, many Americans borrowed money to buy stocks, expecting prices to keep rising. When prices crashed in October 1929, investors couldn't repay their loans, banks started failing, and the whole economy unraveled. Stock market crashes can have enormous real-world consequences.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Daily Life in the Depression`,
          paragraphs: [
            `For many families, the Depression was the hardest decade of their lives. UNEMPLOYMENT in the U.S. reached about 25%, meaning 1 in every 4 workers had no job. Many lost their homes and lived in shanty towns called "HOOVERVILLES" (named after President Hoover, who many blamed for the crisis). Long lines formed at SOUP KITCHENS where churches and charities gave out free meals. Some families could only afford bread and water.`,
            `Farmers had it especially hard. To make things worse, a massive drought hit the American Great Plains in the 1930s, creating the DUST BOWL. Huge clouds of dust buried fields and forced thousands of farming families to leave their homes. Many migrated west to California looking for work, only to find more poverty when they arrived. The novel "The Grapes of Wrath" by John Steinbeck captured this experience and is still read in schools today.`,
          ],
          image: `/ue-assets/history/l14-s2-daily-life.webp`,
          imageCaption: `Soup kitchens. Hoovervilles. Dust storms. A whole decade of hardship.`,
          vocab: [
            { word: `unemployment`,
              definition: `The state of being out of work and looking for a job. Unemployment in the U.S. reached about 25% at the worst of the Great Depression.`,
              audioPrompt: `Unemployment is the state of being out of work and looking for a job, {name}. During the Great Depression, U.S. unemployment reached about 25 percent. That means 1 in every 4 adults who wanted to work could not find a job. Families who depended on those workers had no income. Many lost homes, missed meals, and waited in long lines for free food. Unemployment is measured today by governments to track how the economy is doing. High unemployment is one of the clearest signs of an economic crisis.` },
            { word: `Dust Bowl`,
              definition: `A severe drought and dust storm crisis that hit the American Great Plains in the 1930s, destroying farms and forcing thousands of families to migrate west.`,
              audioPrompt: `The Dust Bowl was a severe environmental crisis during the Great Depression, {name}. A long drought hit the American Great Plains in the 1930s. Poor farming practices had removed natural grasses that held the soil in place. Without them, dried-out soil blew away in massive storms called black blizzards. Fields were buried. Farms failed. Thousands of families lost everything and moved west to California looking for work. The Dust Bowl showed how economic crisis and environmental disaster can hit people at the same time.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The New Deal and Government Response`,
          paragraphs: [
            `In 1933, FRANKLIN D. ROOSEVELT became the new U.S. president. He launched a series of programs called the NEW DEAL to fight the Depression. The government created millions of jobs by building roads, bridges, parks, and dams. The government also began regulating banks so they couldn't risk people's savings as freely. It created SOCIAL SECURITY, a program that still provides income for retired and disabled Americans today.`,
            `The New Deal didn't end the Depression by itself, but it brought real relief. It also represented a HUGE change in what governments did. Before the Depression, most governments didn't get heavily involved in their citizens' daily economic lives. After the Depression, many governments accepted that they had a real role in regulating the economy and supporting people during hard times. Most modern policies you'll hear about (Social Security, unemployment insurance, bank regulations) trace back to the New Deal or similar programs in other countries.`,
          ],
          image: `/ue-assets/history/l14-s3-new-deal.webp`,
          imageCaption: `New roads, bridges, parks, dams. The government put millions back to work.`,
          vocab: [
            { word: `New Deal`,
              definition: `A series of programs launched by U.S. President Franklin D. Roosevelt starting in 1933 to fight the Great Depression. Created jobs, regulated banks, and established Social Security.`,
              audioPrompt: `The New Deal was a series of programs launched by President Franklin D. Roosevelt starting in 1933, {name}. He launched it to fight the Great Depression. The programs put millions of unemployed people back to work building roads, bridges, parks, and dams. The government also began regulating banks and created Social Security, which still provides income for retired Americans today. The New Deal didn't end the Depression by itself, but it brought real relief and changed how Americans thought about what governments should do during a crisis.` },
            { word: `Franklin D. Roosevelt`,
              definition: `The 32nd U.S. president (1933–1945), who launched the New Deal to fight the Great Depression and led the United States through most of World War II.`,
              audioPrompt: `Franklin D. Roosevelt, often called FDR, was the 32nd president of the United States, {name}. He took office in 1933 at the worst point of the Great Depression. He immediately began launching the New Deal, creating jobs and safety nets for millions of struggling Americans. He also led the country through most of World War II before dying in office in 1945. Roosevelt is generally considered one of the most consequential presidents in U.S. history, changing what Americans expected from their government.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How It Ended and What It Left Behind`,
          paragraphs: [
            `The Great Depression slowly eased through the late 1930s. What really ended it was WORLD WAR II, which started in 1939. The war put millions back to work in factories making weapons, ships, and supplies. By 1942, U.S. unemployment had dropped to almost nothing. But the war itself was a catastrophe that killed tens of millions of people. The Depression's end came at a terrible price.`,
            `The Depression's legacy is still around us. Most modern democracies built safety nets and regulations to prevent another disaster like it. Modern unemployment insurance, bank deposit insurance, Social Security, the role of central banks to manage the economy. All trace back to lessons from the Depression. When the 2008 financial crisis hit (you may have heard about it from your parents), governments responded much more quickly partly because they'd studied the mistakes of 1929. The Great Depression is still teaching us 90+ years later.`,
          ],
          image: `/ue-assets/history/l14-s4-legacy.webp`,
          imageCaption: `Modern safety nets exist because of lessons learned from this disaster.`,
          vocab: [
            { word: `Social Security`,
              definition: `A government program that provides income to retired, disabled, and some other vulnerable people. Created in the U.S. in 1935 during the New Deal.`,
              audioPrompt: `Social Security is a government program that provides income to retired, disabled, and some other vulnerable people, {name}. The U.S. created it in 1935 during the New Deal, when the Great Depression had left millions of older Americans with no savings or way to survive. Workers and employers pay into the system during their working years. Then it pays out monthly checks once people retire. Many other countries have similar programs. Social Security and similar systems are one of the biggest lasting changes from the Depression era.` },
            { word: `safety net`,
              definition: `A system of government programs designed to protect people from serious hardship, like unemployment insurance, Social Security, and food assistance. Most modern safety nets were created in response to the Great Depression.`,
              audioPrompt: `A safety net is a system of government programs designed to protect people from serious hardship, {name}. Unemployment insurance when you lose a job. Social Security when you retire. Food assistance when you can't afford to eat. Bank deposit insurance so your savings don't disappear when a bank fails. Most modern safety nets were created directly because of lessons from the Great Depression. Before the 1930s, few of these programs existed. The suffering of the Depression convinced governments that some basic protections were necessary.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about the Great Depression. For each one, identify the category: ECONOMIC CAUSE (what triggered or worsened the crisis), DAILY LIFE (how regular people experienced it), or GOVERNMENT RESPONSE (how leaders tried to fight it)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `economic-cause`,    label: `Economic Cause`,    color: `#F87171`, description: `What triggered or worsened the Depression: crashes, bank failures, factory closures.` },
            { id: `daily-life`,        label: `Daily Life`,        color: `#A78BFA`, description: `How regular people experienced the Depression in their homes and communities.` },
            { id: `government-response`, label: `Government Response`, color: `#34D399`, description: `How leaders tried to fight the Depression with programs and policies.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `In October 1929, the U.S. stock market crashed.` },
                { text: `Stock values dropped about 25% in just two days, and kept falling for months.` },
                { text: `Investors who'd borrowed money to buy stocks couldn't pay back their loans, which started a chain of bank failures.` },
              ],
              correctAnswer: `economic-cause`,
              realWorldExample: `The 1929 stock market crash is one of the most famous events in economic history.`,
              explanation: `Stock market crash. Bank failures. Triggering chain reaction. This is a classic economic cause. The 1929 crash didn't single-handedly cause the Depression, but it was the spark that lit the fire.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `By 1933, an estimated 2 million Americans were homeless.` },
                { text: `Shanty towns of makeshift shacks called "Hoovervilles" appeared in cities across the country.` },
                { text: `Long lines formed daily at soup kitchens run by churches and charities.` },
              ],
              correctAnswer: `daily-life`,
              realWorldExample: `Hoovervilles existed in nearly every major American city by 1933.`,
              explanation: `Homelessness. Hoovervilles. Soup kitchens. This is what daily life looked like for millions of Americans. Pure daily life. Photos from this period are some of the most haunting in American history.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `In 1935, the U.S. government passed the Social Security Act.` },
                { text: `It created a system to provide monthly income to retired and disabled Americans.` },
                { text: `Workers and employers pay into the system. It still exists today.` },
              ],
              correctAnswer: `government-response`,
              realWorldExample: `Social Security is one of the most lasting New Deal programs.`,
              explanation: `New government program. Direct response to Depression-era poverty among older Americans. Pure government response. Social Security still helps millions of Americans every month nearly 90 years later.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `In the 1930s, a massive drought hit the American Great Plains.` },
                { text: `The dry soil, made worse by farming practices that exposed it to wind, blew away in huge dust storms called the "Dust Bowl."` },
                { text: `Thousands of farming families lost their homes and migrated west to California looking for work.` },
              ],
              correctAnswer: `daily-life`,
              realWorldExample: `The Dust Bowl is famous from photographs and from John Steinbeck's novel "The Grapes of Wrath."`,
              explanation: `Tricky because the Dust Bowl had economic effects (farm failures) AND environmental causes (drought, poor farming). But the scene is mostly about how regular families EXPERIENCED the crisis. Lost homes. Forced migration. Hunger. The lesson: many real Depression events had multiple dimensions. The dominant story here is daily life and what families went through.`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `When did the GREAT DEPRESSION start?`,
              options: [
                `1929`,
                `1900`,
                `1945`,
                `1860`,
              ],
              correctIndex: 0,
              explanation: `The Great Depression started in October 1929 when the U.S. stock market crashed. It lasted roughly a decade and spread across the world.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `Roughly what percentage of American workers were UNEMPLOYED at the worst of the Depression?`,
              options: [
                `About 5%`,
                `About 25% (1 in every 4 workers)`,
                `About 50%`,
                `About 1%`,
              ],
              correctIndex: 1,
              explanation: `U.S. unemployment reached about 25% in the early 1930s. 1 in every 4 workers couldn't find a job. Modern unemployment in normal times is usually around 3-5%, so this was unimaginable scale.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `What were HOOVERVILLES?`,
              options: [
                `Government buildings`,
                `Shanty towns where homeless people lived during the Depression, named after President Hoover`,
                `Soup kitchens`,
                `Banks`,
              ],
              correctIndex: 1,
              explanation: `Hoovervilles were shanty towns of makeshift shacks where homeless Americans lived during the Depression. They appeared in nearly every major U.S. city. The name was a bitter joke aimed at President Hoover, whom many blamed for the crisis.` },

            { id: `l14-q4`, format: `multiple-choice`,
              question: `What was the NEW DEAL?`,
              options: [
                `A new business`,
                `A series of programs launched by President Franklin D. Roosevelt to fight the Depression, including job programs, bank regulations, and Social Security`,
                `A peace treaty`,
                `A type of contract`,
              ],
              correctIndex: 1,
              explanation: `The New Deal was Roosevelt's response to the Depression. It created jobs, regulated banks, and established Social Security. It didn't end the Depression by itself, but it brought real relief and changed what Americans expected from government.` },

            { id: `l14-q5`, format: `true-false`,
              question: `True or false: The Great Depression was a U.S.-only crisis.`,
              correctAnswer: false,
              explanation: `False. The Depression spread from the U.S. across the world. Germany, Britain, France, and most other major economies fell into deep crisis. Worldwide trade collapsed. The crisis was truly global.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `What is SOCIAL SECURITY?`,
              options: [
                `A type of insurance`,
                `A government program created in 1935 that provides monthly income to retired and disabled Americans`,
                `A bank`,
                `A police force`,
              ],
              correctIndex: 1,
              explanation: `Social Security was created in 1935 as part of the New Deal. Workers and employers pay into it during working years. Then it pays out monthly checks once people retire. Still exists today and helps millions of Americans.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `What was the DUST BOWL?`,
              options: [
                `A famous race track`,
                `A massive drought in the American Great Plains in the 1930s that destroyed farms and forced families to migrate west`,
                `A type of pottery`,
                `An organized labor strike`,
              ],
              correctIndex: 1,
              explanation: `The Dust Bowl was an environmental disaster during the Depression. Drought combined with poor farming practices caused huge dust storms. Thousands of farming families lost their homes and migrated west to California, only to find more poverty there.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What FINALLY ended the Great Depression?`,
              options: [
                `The New Deal by itself`,
                `World War II, which put millions back to work in factories making weapons and supplies, though the war itself caused terrible suffering`,
                `Better banking laws`,
                `Higher stock prices`,
              ],
              correctIndex: 1,
              explanation: `World War II, starting in 1939, ramped up production and put millions back to work. By 1942 U.S. unemployment was nearly zero. But the cost was tens of millions of deaths in the war. The Depression's end came at an enormous price.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Imagine being a 10-year-old in 1933 whose parents both lost their jobs. What would daily life look like? What would you worry about?` },
            { id: `r2`, text: `Many programs from the New Deal (Social Security, bank insurance, unemployment insurance) still exist today. Do you think they're a good idea? Why or why not?` },
            { id: `r3`, text: `Why do you think the Depression spread from one country to the entire world?` },
            { id: `r4`, text: `The Depression ended because of a world war. That seems like a terrible way to fix an economic crisis. What does that tell you about how crises end?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `The Great Depression still shapes how modern economies work. Bank deposit insurance, Social Security, unemployment insurance, central banks managing the money supply. All of these came from lessons learned about preventing another disaster like 1929. When the 2008 financial crisis hit (your parents probably remember it well), governments responded much more aggressively than in 1929, partly because they'd studied that earlier failure. The Great Depression is one of those events whose effects continue 90+ years later, still teaching new generations how to manage modern economies.`,
          familyAdventure: `Family Story Hunt. Ask older family members or family friends (grandparents, great-grandparents if you can) if anyone has stories about the Great Depression. If your family didn't experience it, ask about the 2008 financial crisis instead. What did they remember? What was hardest? What surprised them about how it ended? Personal stories make economic history come alive.`,
          creativePrompt: {
            intro: `Imagine you're a kid your age in 1933. Your family has just lost their home and you're living in a Hooverville. Write a journal entry.`,
            floor: `Write at least 5 sentences. Describe where you sleep, what you eat, how your parents are doing, and one thing you still hope for.`,
            stretch: `Write 8 to 10 sentences. Cover the daily routine, the people in your community, what you've heard about why this happened, and what would feel like real help to your family.`,
            open: `Write as much as you want. Build a full first-person account that mixes the harsh reality of Depression-era homelessness with the dignity and resilience real families showed. Avoid making it just sad. Make it real.`,
            frames: [
              `My name is ___, and right now my family lives in ___.`,
              `Today I ate ___.`,
              `What I miss most about our old home is ___.`,
              `My parents say ___.`,
              `What I most hope for is ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what triggered the Great Depression, describe daily life during the crisis, name New Deal programs that still exist today, and understand how the Depression's lessons still shape modern economic policy. Next lesson: while the U.S. was working through the Depression, colonized peoples across the world began demanding their freedom. We'll cover decolonization, the wave of independence movements that reshaped the modern world. See you there. — Lyra.`,
          badge: `depression-historian`,
          badgeName: `Depression Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L14 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
