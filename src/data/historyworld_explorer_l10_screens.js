// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L10 — The Industrial Revolution
// Age band : explorers (6–8)   Guide: lyra
// Slots between L09 (Revolutions) and L11 (WWI)
// ─────────────────────────────────────────────────────────────────────────────

const HW_L10 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-10`,
      title:     `The Industrial Revolution: How Machines Changed Everything`,
      duration:  12,
      xpReward:  50,
      badge:     `industrial-explorer`,
      badgeName: `Industrial Age Explorer`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. We just learned about REVOLUTIONS that changed governments. Today we explore a DIFFERENT kind of revolution — one that changed HOW HUMANS LIVE AND WORK. Starting in the 1700s in Britain, MACHINES took over jobs that had always been done by hand. Steam engines. Factories. Trains. This was the INDUSTRIAL REVOLUTION. It brought INCREDIBLE GIFTS — and also REAL COSTS. Let's see what really happened.`,
          headline: `The Industrial Revolution`,
          subtitle: `When machines changed everything — the gifts, the costs, the world we now live in`,
          visual: `/explorer-assets/history/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `LIFE BEFORE Machines`,
          paragraphs: [
            `Imagine living in 1700. No electricity. No cars. No phones. No factories. Most people are FARMERS — about 9 out of every 10 people.`,
            `Your DAY starts before sunrise. You go to bed at sundown (no electric lights). You eat what you GREW yourself — bread, vegetables, sometimes meat. Your CLOTHES were sewn by hand — usually by your mother or grandmother. Maybe your family had ONE good outfit. Your TOOLS were simple — wooden plows, hand saws, hoes. Travel was SLOW — horses or your own feet. A trip to a city 50 miles away might take 2 days. Most people NEVER left their village in their whole lives. Books were rare. School was rare. Doctors knew little. Many children died young. Life was hard but stable — and it had been this way for THOUSANDS OF YEARS. Then in the 1700s, EVERYTHING started to change.`,
          ],
          image: `/explorer-assets/history/l10-s1-life-before.webp`,
          imageCaption: `Life before industry: farming by hand, slow travel, handmade everything. The same for thousands of years.`,
          vocab: [
            { word: `pre-industrial`, definition: `Before MACHINES took over work. PRE-INDUSTRIAL life was slow, local, and hand-made.`,
              audioPrompt: `Pre-industrial, {name}, means before machines took over work. Pre-industrial life was slow, local, and hand-made. Almost everyone farmed. Towns were small. Travel was rare. Things were made one at a time, by hand, by skilled craftspeople. Life moved at the pace of horses and human muscles.` },
            { word: `farmers`,        definition: `People who GROW food on land. About 90% of people were FARMERS before industry.`,
              audioPrompt: `Farmers, {name}, are people who grow food on land. About ninety percent of people were farmers before industry. Imagine that. For most of history, almost everyone you knew worked the land. Cities were small. Food came from your fields or your neighbors. The whole world ran on farming and animal power.` },
            { word: `handmade`,       definition: `Made BY HUMAN HANDS, not machines. Before industry, almost everything was HANDMADE.`,
              audioPrompt: `Handmade, {name}, means made by human hands, not machines. Before industry, almost everything was handmade. One shirt took many hours to sew. One pair of shoes took a cobbler a whole day. Each item was unique. Each was precious. Today, "handmade" is special and expensive. Then, it was just how everything got made.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The STEAM ENGINE Starts It All`,
          paragraphs: [
            `In the 1760s in BRITAIN, an inventor named JAMES WATT improved a kind of machine called a STEAM ENGINE. Steam engines burn coal or wood, boil water into steam, and the pressure of the steam pushes pistons that move other machinery.`,
            `Why was the steam engine SO IMPORTANT? Because for the FIRST TIME in history, humans had a POWERFUL source of energy that didn't depend on muscles (human or animal), wind, or water flow. A steam engine could run all day and night. It could be put ANYWHERE. It was strong, reliable, and tireless. Factories started using steam engines to power MACHINES that spun thread, wove cloth, and made goods FASTER than humans ever could. One factory could make in a day what 100 craftspeople would make in a week. The IRON industry boomed (to build the engines and machines). The COAL industry boomed (to feed the engines). Britain became the workshop of the world. The Industrial Revolution had begun. Soon it would spread to America, France, Germany, and the rest of Europe.`,
          ],
          image: `/explorer-assets/history/l10-s2-steam-engine.webp`,
          imageCaption: `Steam engine: burns coal, makes steam, moves machines. Tireless power. The match that lit the Industrial Revolution.`,
          vocab: [
            { word: `steam engine`,   definition: `A MACHINE powered by burning fuel to make steam. STEAM ENGINES drove the Industrial Revolution.`,
              audioPrompt: `A steam engine, {name}, is a machine powered by burning fuel to make steam. Steam engines drove the Industrial Revolution. Burn coal or wood. Boil water. Steam pressure pushes pistons. Pistons turn wheels or move machines. Tireless, powerful, available 24/7. It was a revolutionary energy source for humanity.` },
            { word: `factory`,        definition: `A BUILDING where MACHINES make goods in LARGE NUMBERS. FACTORIES replaced craft workshops.`,
              audioPrompt: `A factory, {name}, is a building where machines make goods in large numbers. Factories replaced craft workshops. Inside, dozens or hundreds of workers tended machines. The machines did most of the work — workers loaded, watched, fixed, and moved. Factories made products fast, cheap, and in huge quantities. The factory changed how humans worked forever.` },
            { word: `Britain`,        definition: `The COUNTRY where the Industrial Revolution BEGAN. BRITAIN had coal, iron, inventors, and money.`,
              audioPrompt: `Britain, {name}, is the country where the Industrial Revolution began. Britain had coal — needed to fuel steam engines. Iron — needed to build machines. Inventors — needed to figure things out. And money — wealthy merchants ready to invest. All four came together in Britain in the 1760s. From there, industry spread across the world.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `FACTORIES and CITIES Grow`,
          paragraphs: [
            `Once factories appeared, EVERYTHING shifted. People left FARMS and moved to CITIES to work in factories. This was the biggest movement of humans in history up to that point.`,
            `Cities GREW FAST. London grew from 600,000 people in 1750 to 2.4 MILLION by 1850. Manchester, Liverpool, Birmingham — all exploded. New cities formed where there used to be just fields. Factory neighborhoods filled with rows of cheap brick houses for workers. Smokestacks dominated the sky. The air filled with COAL SMOKE. The rivers turned BLACK with pollution. New JOBS emerged: factory worker, machine operator, foreman, engineer. Old crafts (handweaving, hand-shoemaking) DISAPPEARED — replaced by faster factory production. Goods got CHEAPER. Cloth, dishes, tools, books — things that used to be expensive became affordable. People could buy more of more things. The MIDDLE CLASS grew — shopkeepers, managers, professionals. The world was rapidly transforming.`,
          ],
          image: `/explorer-assets/history/l10-s3-factories-cities.webp`,
          imageCaption: `Industrial cities: smokestacks everywhere, workers crowded together, growing fast. The new normal.`,
          vocab: [
            { word: `cities grow`,    definition: `MORE people moving to cities. Industrial CITIES GREW FAST as workers left farms.`,
              audioPrompt: `Cities grow, {name}, means more people moving to cities. Industrial cities grew fast as workers left farms. People needed jobs, and jobs were in factories. Factories were in cities. So cities filled with workers. London tripled in size in 100 years. Other cities did similar. The whole shape of the country changed.` },
            { word: `pollution`,      definition: `DIRTY air, water, or land from human activity. Industrial cities had heavy POLLUTION.`,
              audioPrompt: `Pollution, {name}, is dirty air, water, or land from human activity. Industrial cities had heavy pollution. Coal smoke filled the air. Factory waste poured into rivers. Diseases spread in crowded conditions. Industrial progress had a real cost in dirty environments. We're still figuring out how to make industry cleaner today.` },
            { word: `cheaper goods`,  definition: `LESS EXPENSIVE products. Factories made CHEAPER GOODS available to more people.`,
              audioPrompt: `Cheaper goods, {name}, are less expensive products. Factories made cheaper goods available to more people. Things that used to be luxury — like good cloth, books, dishes, tools — became affordable for regular families. That was real progress. More people could afford more things. Quality of life went up for many. That's a real gift of industry.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The HARD Side: Child Labor and Bad Conditions`,
          paragraphs: [
            `Now {name} — I need to tell you something IMPORTANT. The Industrial Revolution had a DARK SIDE. Early factories were OFTEN very hard, dangerous, and unfair places to work.`,
            `Workers (including CHILDREN as young as 5 or 6) worked 12-14 HOURS a day, 6 days a week. The machinery was DANGEROUS — workers lost fingers, hands, or lives. Air was thick with dust. Pay was very low. Workers lived in crowded, dirty housing. Many got sick or died young. CHILD LABOR was common. Kids worked in mines, factories, mills — small bodies could fit into spaces adults couldn't. Many children never went to school. Many died from accidents or illness. This was wrong. People knew it. Slowly, reformers fought for change. Laws were passed to LIMIT child labor. Then to BAN it for young children. Then to LIMIT work hours. Then to make factories SAFER. Then to require schools for kids. It took DECADES of struggle — but conditions slowly improved. Workers also organized UNIONS to fight for fair pay and treatment. We owe today's safety laws, child labor laws, and school laws to those reformers and union workers who FOUGHT for them.`,
          ],
          image: `/explorer-assets/history/l10-s4-hard-life.webp`,
          imageCaption: `The hard truth: child labor, 14-hour days, dangerous machines. Reformers fought to change it. Slow progress.`,
          vocab: [
            { word: `child labor`,    definition: `CHILDREN doing hard, dangerous WORK. CHILD LABOR was widespread in early factories — and wrong.`,
              audioPrompt: `Child labor, {name}, is children doing hard, dangerous work. Child labor was widespread in early factories — and wrong. Children as young as 5 or 6 worked 12 to 14 hour days. They were in danger, missed school, often got hurt. Reformers fought to ban it. Today, child labor laws protect kids in most countries. But sadly, it still exists in some places.` },
            { word: `reformers`,      definition: `People who FIGHT to make things BETTER. REFORMERS pushed for safer factories, no child labor, fair pay.`,
              audioPrompt: `Reformers, {name}, are people who fight to make things better. Reformers pushed for safer factories, no child labor, fair pay. They wrote books exposing terrible conditions. They petitioned parliaments. They organized protests. They worked with workers. Slowly — over decades — they changed laws. Reformers are heroes of the industrial age.` },
            { word: `unions`,         definition: `WORKERS organizing TOGETHER to fight for fair treatment. Unions are how workers had power.`,
              audioPrompt: `Unions, {name}, are workers organizing together to fight for fair treatment. One worker alone has little power. But thousands of workers united can stop a factory if mistreated. Unions won shorter hours, better pay, child labor bans, and safety laws over many decades. They're still important today. Workers' rights came from union struggles.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `TRAINS, TELEGRAPHS, and a SHRINKING World`,
          paragraphs: [
            `The Industrial Revolution wasn't just about factories. It was about TRAVEL and COMMUNICATION speeding up like never before.`,
            `In 1830, the first STEAM-POWERED PASSENGER TRAIN opened in England. Suddenly, traveling between cities went from days to hours. By the 1850s-1870s, railroad networks connected entire countries. Then came STEAM SHIPS — crossing oceans in WEEKS instead of months. People could now travel and ship goods across the world fast and cheap. In 1844, the first TELEGRAPH message was sent. Telegraph wires let people send messages across long distances in MINUTES — not weeks. By the 1860s, undersea telegraph cables connected continents. London could talk to New York in real time. The TELEPHONE was invented in 1876 by Alexander Graham Bell. The world was suddenly SMALLER, FASTER, and more CONNECTED than ever before. News, ideas, goods, and people moved at SPEEDS humans had never imagined. The way humans experienced the world TRANSFORMED.`,
          ],
          image: `/explorer-assets/history/l10-s5-trains-telegraphs.webp`,
          imageCaption: `Trains + telegraphs = faster, smaller world. Distance shrank from months to days. Connection sped up forever.`,
          vocab: [
            { word: `train`,          definition: `A STEAM (then later electric) VEHICLE running on rails. TRAINS revolutionized travel.`,
              audioPrompt: `A train, {name}, is a steam (then later electric) vehicle running on rails. Trains revolutionized travel. Before trains, you traveled by horse or foot — slow, tiring. Trains carried hundreds of people and tons of cargo at amazing speeds (then). Railroad networks connected countries. Trains made the modern world possible. Some places still depend on them entirely.` },
            { word: `telegraph`,      definition: `A MACHINE that sends MESSAGES through ELECTRIC WIRES. TELEGRAPHS connected distant places fast.`,
              audioPrompt: `A telegraph, {name}, is a machine that sends messages through electric wires. Telegraphs connected distant places fast. Operators used a code (Morse code — dots and dashes) to spell out messages. A message that used to take weeks by ship could now reach across an ocean in minutes. The first global instant-messaging system. The internet's great-great-grandfather.` },
            { word: `connected`,      definition: `LINKED together. The industrial world was more CONNECTED than ever before.`,
              audioPrompt: `Connected, {name}, means linked together. The industrial world was more connected than ever before. Trains connected cities. Telegraphs connected continents. Steamships connected oceans. People in 1900 could travel and communicate at speeds 1800 people couldn't even imagine. Connection multiplies what humans can do. The connected world began in the industrial age.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The World We LIVE IN TODAY`,
          paragraphs: [
            `{name} — the Industrial Revolution didn't END. It KEEPS GOING. Everything around you today is descended from it.`,
            `CARS — descended from steam engines, gasoline engines came in the late 1800s. PLANES — Wright Brothers, 1903 — building on industrial advances. ELECTRICITY in homes — Edison and others, late 1800s. PHONES — descended from telegraph. COMPUTERS — descended from telegraphs, calculators, electrical machines. INTERNET — modern descendant of telegraph cables. Modern MEDICINE — built on industrial-age chemistry and biology. MASS-PRODUCED everything — clothes, food, toys, books — all comes from the factory system that started 250 years ago. Modern life is INDUSTRIAL. Almost nothing you use was made one at a time by hand. Everything is mass-produced in factories powered by descendants of steam engines. The Industrial Revolution KEEPS GOING. Today, automation, robots, AI — all are NEW industrial revolutions in progress. Humanity is still figuring out how to use these powerful tools well. We're still solving the problems they bring (pollution, inequality, displacement). But there's no going back. The industrial world is the only world we know now. The challenge is making it SERVE EVERYONE — humans, animals, the planet.`,
          ],
          image: `/explorer-assets/history/l10-s6-changed-world.webp`,
          imageCaption: `Industrial revolution shaped today: cars, planes, electricity, internet, mass production. Still ongoing.`,
          vocab: [
            { word: `mass-produced`,  definition: `Made in HUGE QUANTITIES by machines. MASS-PRODUCED items are cheap and everywhere.`,
              audioPrompt: `Mass-produced, {name}, means made in huge quantities by machines. Mass-produced items are cheap and everywhere. Your clothes, food, dishes, books, toys — all mass-produced. Almost nothing you own was made one at a time by hand. Mass production made modern abundance possible. It also has problems — waste, pollution, low quality. But it's how the world works now.` },
            { word: `ongoing`,        definition: `STILL HAPPENING. The Industrial Revolution is ONGOING — new technologies still transforming life.`,
              audioPrompt: `Ongoing, {name}, means still happening. The Industrial Revolution is ongoing — new technologies still transforming life. Computers, internet, AI, robots — each is a new wave of industrial change. The fundamental idea — machines doing work humans used to do — keeps going. We're still living through industrial revolution, just in newer forms.` },
            { word: `serve everyone`, definition: `BENEFITS for ALL — not just some. The challenge is making industry SERVE EVERYONE — people, animals, planet.`,
              audioPrompt: `Serve everyone, {name}, means benefits for all — not just some. The challenge is making industry serve everyone — people, animals, planet. Industry has brought amazing things. It has also brought problems — pollution, inequality, displacement of workers. The next chapter is figuring out how to keep the good and fix the bad. That work is yours and your generation's.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `MACHINES (powered by steam engines) replaced HAND WORK in factories — changing how humans worked forever.`,
              matchPhrase: `Yes! Steam engines powered factories that produced goods faster and cheaper than human hands ever could. Work changed from craft to factory production. Massive transformation.`,
              correctMatch: `fact` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `The Industrial Revolution brought GIFTS (cheap goods, fast travel) AND COSTS (child labor, pollution, hard factory life).`,
              matchPhrase: `True! Both at once. Real progress AND real problems. Reformers fought decades to fix the worst parts (child labor laws, safety rules, unions). Honest history holds both.`,
              correctMatch: `fact` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `The Industrial Revolution was PERFECT — instantly made everyone wealthy, happy, and healthy with no problems.`,
              matchPhrase: `Not at all! Early industry was brutal for workers. Child labor was common. Pollution was severe. Many died young. Progress was real, but came with serious costs that took decades to fix.`,
              correctMatch: `myth` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `The Industrial Revolution from 200 years ago has NO connection to modern life — totally unrelated.`,
              matchPhrase: `Definitely not! Cars, planes, electricity, factories, mass production, internet — all descended from the Industrial Revolution. We still live in the industrial world. Everything connects.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What started the INDUSTRIAL REVOLUTION?`,
              options: [`A war`, `STEAM ENGINES powering FACTORIES in Britain in the late 1700s`, `A flood`, `A song`],
              correctIndex: 1,
              explanation: `Steam engines! James Watt's improved steam engine (1760s) powered factories that made goods faster than hands could. Started in Britain, spread to the world. The match that lit modern industry.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `How did people's LIVES CHANGE during the Industrial Revolution?`,
              options: [`They didn't`, `Many left farms for FACTORIES in growing CITIES — work, life, and homes all changed`, `Just clothes changed`, `Only fancy people changed`],
              correctIndex: 1,
              explanation: `Massive changes! Farmers left fields for factories. Cities grew huge. Pollution increased. Goods got cheaper. New jobs appeared. Old crafts disappeared. The whole shape of life shifted.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `What was a DARK SIDE of early factories?`,
              options: [`Nothing`, `CHILD LABOR, 14-hour workdays, dangerous conditions, low pay, terrible pollution`, `Just bad music`, `Fancy clothes`],
              correctIndex: 1,
              explanation: `The dark side: children working 12-14 hour days, dangerous machinery, dirty air, low pay. Real and serious. Reformers and unions fought for decades to improve conditions. Slow progress.` },
            { id: `l10-q4`, format: `true-false`,
              question: `Industrial inventions — like TRAINS and TELEGRAPHS — made the world feel SMALLER and FASTER than ever before.`,
              correctAnswer: true,
              explanation: `True! Trains turned days of travel into hours. Telegraphs sent messages across oceans in minutes. The world shrank dramatically. People could connect, travel, and trade like never before.` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `Workers organized into ___ to fight for fair pay, shorter hours, and safer conditions.`,
              options: [`unions`, `armies`, `kingdoms`, `factories`],
              correctIndex: 0,
              explanation: `Unions! Workers organizing together had power that one worker alone didn't. Unions won shorter hours, better pay, child labor bans, and safety laws over many decades.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `How does the Industrial Revolution affect us TODAY?`,
              options: [`It doesn't`, `EVERYTHING modern — cars, planes, electricity, mass production, internet, even AI — descended from it`, `Just old photos`, `Random ways`],
              correctIndex: 1,
              explanation: `Everything modern descends from the Industrial Revolution. Cars, planes, electricity, factories, internet, AI — all are continuations of the same revolution. We're still living through it.` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's something to think about, {name}. Almost EVERY object around you right now was MASS-PRODUCED in a factory. Your clothes. Your shoes. Your phone. Your computer. The dishes you eat from. The toys you play with. Even the food you eat probably came from industrial farms and factories. This is RECENT — only the last 200 years. For thousands of years before, almost everything was hand-made. Be GRATEFUL — mass production means more people can afford more things than ever in history. But also stay AWARE: the way things are made still matters. Some factories today still mistreat workers — especially in some countries. Some factories pollute heavily. Some products are made by people who are paid very little. When you have CHOICES, you can support factories and brands that treat workers and the planet WELL. That's modern reform — continuing the work of those who fought to make industry better 200 years ago.`,
          familyAdventure: {
            title: `Industrial Hunt`,
            scenario: `Together, do an "INDUSTRIAL HUNT" around your home. Pick 10 items and look at their labels — find "MADE IN [country]." Talk about where it was made, who probably made it, and how it got to your home. Was it made in a factory? By machines? By people?`,
            talkingPoint: `Talk about how amazing it is that things come from all over the world to your home — and how those workers should be treated fairly. Discover the global industrial system right in your house.`,
          },
          creativePrompt: {
            title: `Before and After Comic`,
            description: `Draw a "BEFORE AND AFTER" comic. Two panels. PANEL 1: Life BEFORE the Industrial Revolution — a farmer family in 1750. Show their simple home, handmade clothes, slow farm tools, no electricity. PANEL 2: Life AFTER (today) — a modern family. Show electricity, cars, phones, factories in the distance, mass-produced everything. Compare the two. What's better now? What might have been better before?`,
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Important lesson, {name}! You've explored the INDUSTRIAL REVOLUTION. STEAM ENGINES (James Watt) powered FACTORIES that produced goods faster than hands. Cities GREW HUGE. Goods got CHEAPER and more available. BUT early factories had a DARK SIDE — child labor, dangerous conditions, pollution. REFORMERS and UNIONS fought to improve things. TRAINS and TELEGRAPHS made the world smaller and faster. The Industrial Revolution is STILL ONGOING — cars, planes, electricity, internet, AI all descend from it. The challenge today: make industry SERVE EVERYONE. Next time — WORLD WAR I, the first global industrial war. — Lyra 🐘`,
          badge: `industrial-explorer`,
          badgeName: `Industrial Age Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L10;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L10] Loaded: "The Industrial Revolution" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
