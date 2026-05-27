// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L11 — The Industrial Revolution and Its Consequences
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.4.3-5 — Multiple perspectives
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what the Industrial Revolution was, the steam engine
//        and factories, life in industrial cities, costs and benefits
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-11`,
      title: `The Industrial Revolution and Its Consequences`,
      duration: 18,
      xpReward: 75,
      badge: `industrial-historian`,
      badgeName: `Industrial Historian`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson, the Scientific Revolution changed how humans think. Today, we look at a revolution that changed how humans LIVE and WORK. Starting in Britain around 1760, machines began doing work that humans and animals used to do. Factories replaced workshops. Cities exploded in size. Trains and steamships shrank the world. Within a century, life looked nothing like it had a thousand years before. We'll cover the inventions, the wealth, and also the real costs people paid. Let's go.`,
          headline: `The Industrial Revolution`,
          subtitle: `When machines started doing humans' work, for better and for worse`,
          visual: `/ue-assets/history/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Industrial Revolution Was`,
          paragraphs: [
            `The INDUSTRIAL REVOLUTION was a massive shift in how things got made. It started in Britain around 1760 and slowly spread across Europe, North America, and beyond. Before it, almost everything was made by hand or with simple tools, mostly in homes or small workshops. Cloth was woven by individual people at looms. Iron was made in small forges. Food was grown by hand on small farms. Most people worked for themselves or in small family businesses.`,
            `Then came MACHINES powered by steam, water, and eventually electricity. Factories with hundreds of workers replaced individual workshops. Goods that used to take weeks to make could be produced in hours. Trains could carry tons of cargo at speeds humans had never experienced. The world humans had lived in for thousands of years (rural, slow, hand-made) transformed into something completely new (urban, fast, machine-made) in less than a century.`,
          ],
          image: `/ue-assets/history/l11-s1-overview.webp`,
          imageCaption: `From hand-made and rural to machine-made and urban. In a single century.`,
          vocab: [
            { word: `Industrial Revolution`,
              definition: `A period starting around 1760 in Britain when machines, factories, and steam power began replacing hand-made work and changing every part of human life.`,
              audioPrompt: `The Industrial Revolution was a massive shift in how things got made, {name}. It started around 1760 in Britain. Machines powered by steam and water began doing work that used to be done by hand. Factories replaced workshops. Trains and steamships made travel faster than anyone thought possible. Within about a century, daily life looked nothing like it had for thousands of years. It's one of the biggest changes in human history.` },
            { word: `urbanization`,
              definition: `The process of more people moving from rural areas into cities. The Industrial Revolution caused rapid urbanization as workers left farms to find factory jobs.`,
              audioPrompt: `Urbanization is the process of people moving from rural areas into cities, {name}. The Industrial Revolution caused some of the fastest urbanization in history. Factories needed workers. Workers needed places to live near the factories. Cities that had been medium-sized for centuries suddenly exploded. Manchester went from 75,000 people to over 300,000 in just 50 years. This rapid urbanization created both opportunities and serious problems with housing, sanitation, and disease.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Steam Engine and Other Inventions`,
          paragraphs: [
            `The biggest single invention of the Industrial Revolution was probably the STEAM ENGINE. Earlier versions existed, but James Watt's improved steam engine (1769) made it practical for almost any kind of work. Steam could pump water out of mines, power factory machinery, run trains, and drive ships. Energy that had once required human muscle, animal effort, or natural wind and water could now come from coal and water.`,
            `Other big inventions followed. The POWER LOOM made weaving cloth much faster. The COTTON GIN separated cotton from seeds at high speed. The TELEGRAPH let messages travel hundreds of miles in seconds. The RAILWAY changed how people and goods moved. Each invention triggered new ones. Once you had factories, you needed roads, then railways. Once you had railways, you needed faster communication, so the telegraph. The Industrial Revolution didn't happen in one big jump. It snowballed over decades.`,
          ],
          image: `/ue-assets/history/l11-s2-inventions.webp`,
          imageCaption: `Steam engine, power loom, telegraph, railway. Each invention sparked the next.`,
          vocab: [
            { word: `steam engine`,
              definition: `A machine that uses heated water (steam) to push pistons and create motion. The most important power source of the early Industrial Revolution.`,
              audioPrompt: `A steam engine is a machine that uses heated water to create motion, {name}. Heat water until it turns to steam. Steam pushes a piston up and down. The piston drives wheels, pumps, or factory machinery. James Watt's improved version of the steam engine in 1769 made it practical for almost any kind of work. Steam engines powered the early Industrial Revolution. They ran factories, trains, and ships. They were the first time humans had energy on demand that didn't require muscle, wind, or running water.` },
            { word: `telegraph`,
              definition: `A device that sends electrical signals along wires to communicate messages over long distances. The telegraph transformed communication during the Industrial Revolution, making it nearly instant.`,
              audioPrompt: `The telegraph was a communication technology that sent electrical signals along wires, {name}. Before the telegraph, the fastest way to send a message was to ride a horse. With the telegraph, messages could travel hundreds of miles in seconds. It transformed business, journalism, and government. Wars could be reported in hours instead of weeks. Stock prices could be shared across continents. The telegraph was to the 1800s what the internet was to the 1990s. It shrank the world.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Industrial Cities: Wealth and Misery`,
          paragraphs: [
            `Factories needed workers. Workers needed places to live. So cities EXPLODED in size during the Industrial Revolution. Manchester, England grew from about 75,000 people in 1801 to over 300,000 in 1851. London grew from about 1 million to over 2.6 million in the same period. People left farms to find factory jobs. For some, this meant more money than they could have earned at home. For many others, it meant a brutally hard life in crowded, polluted slums.`,
            `Early factories were dangerous. Workers (including children as young as 5 or 6) often did 12 to 14-hour shifts with no safety rules. Pay was low. Accidents were common. Many factory neighborhoods had no clean water or sewage, and disease spread fast. Reformers and workers eventually organized to push back, demanding shorter hours, safer conditions, and child labor laws. Many of the rights workers have today (weekends, an 8-hour workday, workplace safety rules) were fought for during this period.`,
          ],
          image: `/ue-assets/history/l11-s3-cities.webp`,
          imageCaption: `Industrial cities grew fast. Wealth grew too. So did inequality and suffering.`,
          vocab: [
            { word: `factory`,
              definition: `A large building where many workers and machines produce goods together. Factories replaced individual workshops and changed how almost everything was made.`,
              audioPrompt: `A factory is a large building where many workers and machines produce goods together, {name}. Before the Industrial Revolution, most goods were made one at a time in small workshops or homes. Factories used machines and the division of labor (each worker doing one specific task) to make goods much faster and much cheaper. Factories changed how things got made, but they also changed how people LIVED. Workers had to move to cities, work long shifts, and adapt to a completely new kind of life.` },
            { word: `labor`,
              definition: `Work, especially physical work done for wages. The Industrial Revolution transformed labor from skilled craft work in homes and workshops to repetitive factory shifts.`,
              audioPrompt: `Labor means work done for wages, {name}. The Industrial Revolution transformed what labor looked like. Before it, most workers were skilled craftspeople or farmers who controlled their own pace and process. After it, most industrial workers did one repetitive task on a machine for long shifts. Wages were often low. Hours were long. Safety rules didn't exist yet. The fight for workers' rights — weekends, safe conditions, fair pay — grew directly out of the brutal conditions of early industrial labor.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Real Costs and Lasting Benefits`,
          paragraphs: [
            `The Industrial Revolution had enormous costs. Pollution from coal-burning factories darkened skies and damaged health. Child labor was widespread and brutal. Income inequality grew sharply. The era saw the expansion of slavery in the U.S. South (to grow cotton for British factories) and the development of colonial empires that exploited people across Africa, Asia, and the Americas. Some of the wealth Britain built came directly from forced labor and stolen resources.`,
            `It also brought lasting benefits. Mass production made goods cheaper and available to more people. Wages eventually rose. Education spread. Life expectancy slowly increased (after first declining in early industrial cities). The medical, scientific, and technological progress of the past 250 years is unimaginable without industrialization. The Industrial Revolution is one of those periods where you have to hold both sides at once. Real human cost. Real human progress. Honest history doesn't pretend either side away.`,
          ],
          image: `/ue-assets/history/l11-s4-costs-benefits.webp`,
          imageCaption: `Pollution and child labor on one side. Progress and longer lives on the other.`,
          vocab: [
            { word: `mass production`,
              definition: `Making large quantities of identical goods quickly, usually in factories with machines and divided labor. Made goods cheaper but also changed work itself.`,
              audioPrompt: `Mass production is making large quantities of identical goods quickly, {name}. Usually in factories. With machines doing repetitive tasks. With each worker doing one specific small task instead of building a whole product. Mass production made goods like cloth, tools, and later cars much cheaper and available to many more people. But it also changed work. Skilled craft work declined. Repetitive factory work increased. Both are real consequences. Mass production is still how most things in your life are made today.` },
            { word: `inequality`,
              definition: `An unequal distribution of wealth, opportunities, or rights between different groups of people. The Industrial Revolution dramatically increased inequality between factory owners and workers.`,
              audioPrompt: `Inequality means an unequal distribution of wealth or opportunity, {name}. The Industrial Revolution made some people enormously rich while others worked long shifts in dangerous conditions for low wages. Factory owners and investors became wealthy. Many workers stayed poor. The gap between the rich and the poor grew sharply during this period. The same pattern of industrial inequality appears in many parts of the world today, where goods are made cheaply in factories under conditions that haven't changed much.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenes from the Industrial Revolution. For each one, identify what aspect it shows: TECHNOLOGY (machines, inventions, infrastructure), URBAN LIFE (cities, work, housing), or PROGRESS WITH COSTS (a real benefit that also had a real cost)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `technology`,           label: `Technology`,           color: `#60A5FA`, description: `Machines, inventions, infrastructure. The tools that powered the revolution.` },
            { id: `urban-life`,           label: `Urban Life`,           color: `#A78BFA`, description: `Workers, factories, housing, daily life in industrial cities.` },
            { id: `progress-with-costs`,  label: `Progress with Costs`,  color: `#FBBF24`, description: `A real benefit (cheaper goods, faster travel) that also came with a real cost.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `In 1830, a new railway opens between Liverpool and Manchester, England.` },
                { text: `A trip that used to take 4 days by horse now takes 4 hours.` },
                { text: `Goods and people can travel further and faster than ever before.` },
              ],
              correctAnswer: `technology`,
              realWorldExample: `The Liverpool-Manchester Railway, one of the first commercial passenger railways.`,
              explanation: `A new transportation technology dramatically changes the speed of travel. Pure technology. The railway is one of the iconic inventions of the Industrial Revolution.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `In a Manchester slum in 1844, twelve people share a single room.` },
                { text: `The street has no clean water and open sewage runs down the middle.` },
                { text: `Most adults work 14-hour shifts in nearby factories.` },
              ],
              correctAnswer: `urban-life`,
              realWorldExample: `Real description from Friedrich Engels' "The Condition of the Working Class in England."`,
              explanation: `Crowded housing. Bad sanitation. Long factory shifts. This is pure urban life during the industrial era. Many factory workers lived in conditions like these. Their experience is part of why labor reform eventually became a major political movement.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `By 1850, cotton cloth made in British factories is shipped all over the world.` },
                { text: `It's much cheaper than handwoven cloth. Working people can afford new clothes for the first time.` },
                { text: `Most of the cotton was picked by enslaved workers in the American South.` },
              ],
              correctAnswer: `progress-with-costs`,
              realWorldExample: `The cotton trade is one of the clearest examples of industrial progress with terrible human costs.`,
              explanation: `Cheaper cloth was a real benefit for millions of working people in Britain. The cotton being made cheap by enslaved labor on plantations is a real cost. Both are true at the same time. The Industrial Revolution often looks like this. Real progress, real cost, side by side.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `In 1833, the British Parliament passes the Factory Act.` },
                { text: `It bans children under 9 from working in textile factories and limits children 9-13 to 9-hour days.` },
                { text: `Working children were not banned entirely, and conditions remained harsh for many.` },
              ],
              correctAnswer: `urban-life`,
              realWorldExample: `The 1833 Factory Act, one of the earliest labor laws.`,
              explanation: `Tricky because this is technically PROGRESS (laws improved). But the focus of the scene is the URBAN/WORK life it regulates. The Factory Act was a small but real step toward modern labor laws. The lesson: even small reforms during this period took huge effort, and many problems persisted long after the first laws passed. Real progress is usually messy.`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `Where and when did the Industrial Revolution start?`,
              options: [
                `France in 1800`,
                `Britain around 1760`,
                `The United States in 1900`,
                `China in 1500`,
              ],
              correctIndex: 1,
              explanation: `The Industrial Revolution started in Britain around 1760 and slowly spread to other parts of Europe, North America, and eventually the world.` },

            { id: `l11-q2`, format: `multiple-choice`,
              question: `What was the most important power source of the early Industrial Revolution?`,
              options: [
                `Electricity`,
                `The steam engine (using coal-heated water)`,
                `Nuclear power`,
                `Solar panels`,
              ],
              correctIndex: 1,
              explanation: `The steam engine, dramatically improved by James Watt in 1769, was the workhorse of the early Industrial Revolution. It powered factories, trains, and ships.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What is a FACTORY?`,
              options: [
                `A small workshop`,
                `A large building where many workers and machines produce goods together`,
                `A type of farm`,
                `A government building`,
              ],
              correctIndex: 1,
              explanation: `Factories were a huge change from individual workshops. They concentrated many workers and machines in one place. This made production faster and cheaper, but also changed how people worked and lived.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `Why did CITIES grow so quickly during the Industrial Revolution?`,
              options: [
                `Cities were prettier`,
                `Factories needed workers, so millions of people left farms and moved to cities to find factory jobs`,
                `Farming was banned`,
                `Cities had more food`,
              ],
              correctIndex: 1,
              explanation: `Factory jobs drew people from rural areas. Cities like Manchester and London grew enormously in just a few decades. The growth happened faster than housing or sanitation could keep up.` },

            { id: `l11-q5`, format: `true-false`,
              question: `True or false: Children as young as 5 or 6 often worked long shifts in early factories.`,
              correctAnswer: true,
              explanation: `True. Child labor in early factories was widespread and brutal. Children worked 12-14 hour shifts in dangerous conditions. Reform took decades. The first British child labor law was passed in 1833 and was still very limited.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `What does MASS PRODUCTION mean?`,
              options: [
                `Making one thing at a time carefully`,
                `Making large quantities of identical goods quickly, usually in factories`,
                `Selling things in bulk`,
                `Mass producing food`,
              ],
              correctIndex: 1,
              explanation: `Mass production uses machines and divided labor to make many identical goods fast. It made products cheaper but also changed the nature of work. Most of what's in your house today was mass-produced.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `Which of these is TRUE about the Industrial Revolution?`,
              options: [
                `It was purely good`,
                `It was purely bad`,
                `It brought real progress AND real costs, including pollution, child labor, inequality, and links to slavery and colonialism`,
                `It only happened in factories`,
              ],
              correctIndex: 2,
              explanation: `Honest history requires holding both sides. The Industrial Revolution made goods cheaper and eventually raised living standards. It also depended on child labor, enslaved labor in cotton fields, colonial exploitation, and caused pollution. Both sides are true.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `Where do modern WORKER RIGHTS like weekends and 8-hour workdays come from?`,
              options: [
                `Factory owners gave them freely`,
                `Workers and reformers fought for them over many decades during and after the Industrial Revolution`,
                `Governments invented them suddenly in 2000`,
                `They've always existed`,
              ],
              correctIndex: 1,
              explanation: `Modern labor rights weren't gifts. They were won by workers organizing, sometimes violently, over decades. Child labor laws, the 8-hour day, weekends, safety standards. All came from struggles during and after the Industrial Revolution.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `The Industrial Revolution made goods cheaper for everyone but used child labor and exploited workers. How do we judge an era that includes both?` },
            { id: `r2`, text: `Imagine being a 9-year-old factory worker in 1830 Manchester. What would your day look like? How would you feel?` },
            { id: `r3`, text: `Many of the rights you have (school instead of work, an 8-hour day, weekends) came from struggles during this era. Why don't we usually think about that connection?` },
            { id: `r4`, text: `If you could redesign the Industrial Revolution to keep the inventions but avoid the worst suffering, what would you change?` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Most things in your house were mass-produced in factories. Your clothes, your phone, your school supplies. The system invented during the Industrial Revolution is still how most goods get made. The trade-offs are also still with us. Modern manufacturing creates real benefits (affordable goods, jobs) and real costs (pollution, sometimes harsh conditions in factories overseas). Understanding the Industrial Revolution helps you understand the system you live in today, and the choices we face about how it works.`,
          familyAdventure: `Family Factory Investigation. As a family, pick five everyday items in your home and find out where they were made. Look at labels for "Made in" tags. Then research one item more deeply. Where did the materials come from? How is it actually produced? This is the modern descendant of the industrial system that started in 1760, and tracing one item back is a real lesson in how connected the world still is.`,
          creativePrompt: {
            intro: `Imagine you're a child working in a textile factory in 1840s Britain. Write a letter to your future grandchildren.`,
            floor: `Write at least 5 sentences. Describe your work, your home, what you wish was different, and what you hope for the future.`,
            stretch: `Write 8 to 10 sentences. Cover daily life, the work, the dangers, what your family is hoping for, and what you'd want the future to know.`,
            open: `Write as much as you want. Build a full first-person account that mixes the harsh reality of factory life with the dignity of a real child who is hopeful even in hard conditions. Avoid making it just sad. Make it real.`,
            frames: [
              `My name is ___ and I am ___ years old.`,
              `Every day I work in ___.`,
              `What I hate most is ___.`,
              `What I still hope for is ___.`,
              `If you read this someday, please know that ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what the Industrial Revolution was, describe the steam engine and other key inventions, understand the rapid growth of industrial cities, and hold the complicated truth of progress with real costs. Next lesson: we look at something deeply connected to the Industrial Revolution. The age of COLONIALISM, when European powers built empires across the world. We'll cover what really happened and the perspectives of everyone involved. See you there. — Lyra.`,
          badge: `industrial-historian`,
          badgeName: `Industrial Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L11.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L11 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
