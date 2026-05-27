// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L18 — Globalization: The World as One System
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.Eco.14.3-5 — Effects of trade between countries
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what globalization is, the modern global economy,
//        cultural and technological connection, costs and benefits
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-18`,
      title: `Globalization: The World as One System`,
      duration: 18,
      xpReward: 75,
      badge: `globalization-historian`,
      badgeName: `Globalization Historian`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson we covered the Digital Revolution. Today we look at the bigger story it's part of. GLOBALIZATION is how the entire world has become tied together into one interconnected system. Trade. Communication. Travel. Culture. Crises like pandemics. All of it now flows across borders at unprecedented speed. We'll trace how it happened and think honestly about the benefits and costs. Let's go.`,
          headline: `Globalization`,
          subtitle: `When the entire world became one interconnected system`,
          visual: `/ue-assets/history/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Globalization Is`,
          paragraphs: [
            `GLOBALIZATION is the increasing connection of countries, economies, and cultures around the world. It includes the global movement of GOODS (products made in one country and sold in another), MONEY (banks and companies operating across borders), PEOPLE (travel, migration, work), IDEAS (news, science, art, music), and even DISEASES (as the COVID-19 pandemic showed us). All of these things now move across the planet at speeds that would have been impossible 100 years ago.`,
            `Globalization isn't new. The Silk Road started a version of it 2,000 years ago. European colonial empires expanded it. But what's happened since about 1990 is qualitatively different. Cargo ships now carry billions of products across oceans every year. Money moves around the world in milliseconds. Most of what's in your home was made somewhere else, often passing through many countries before reaching you. We live in a world more connected than any previous generation could have imagined.`,
          ],
          image: `/ue-assets/history/l18-s1-overview.webp`,
          imageCaption: `Goods, money, people, ideas, diseases. All flowing across borders constantly.`,
          vocab: [
            { word: `globalization`,
              definition: `The increasing connection of countries, economies, and cultures around the world. Includes the flow of goods, money, people, ideas, and even diseases across borders.`,
              audioPrompt: `Globalization is the increasing connection of countries around the world, {name}. Goods flow from where they're made to wherever they're sold. Money moves between countries in seconds. People travel, work, and migrate at higher rates than ever before. Ideas and culture spread through television, music, and the internet. Even diseases spread faster because of global travel, as you saw with COVID. Globalization isn't completely new. But the speed and scale of modern globalization is unlike anything humans have experienced before.` },
            { word: `migration`,
              definition: `The movement of people from one place to another to live. Globalization has enabled more migration than ever before, with people moving between countries for work, family, safety, and opportunity.`,
              audioPrompt: `Migration is the movement of people from one place to another to live, {name}. Humans have always migrated. But globalization has made migration faster and more common than ever before. People move for jobs, family, safety, and opportunity. Today, hundreds of millions of people live in countries where they weren't born. Migrants bring their cultures, languages, and skills with them. Migration connects the world in deeply human ways. It's also one of the most debated political topics in most countries.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Modern Global Economy`,
          paragraphs: [
            `Most products in your home are part of a GLOBAL SUPPLY CHAIN. That means the parts came from many different countries, and the final product was assembled somewhere else, before being shipped to your store. A smartphone might have rare metals mined in Congo, designed in California, with parts made in Taiwan and Japan, assembled in China, and sold in your home town. This level of complexity didn't exist a generation ago.`,
            `Global trade has lifted hundreds of millions of people out of extreme poverty since 1990, particularly in countries like China, India, and Indonesia. Many goods are far cheaper than they used to be because they're made wherever production is most efficient. International companies are bigger than ever. Some make more money each year than entire countries. But this same system has caused job losses in some industries (factory workers in older industrial regions), environmental costs (shipping uses enormous amounts of fuel), and made local economies vulnerable to faraway problems. Everyone's connected to everyone else now, for better and for worse.`,
          ],
          image: `/ue-assets/history/l18-s2-economy.webp`,
          imageCaption: `Most products travel through many countries before reaching you.`,
          vocab: [
            { word: `supply chain`,
              definition: `The full path of how a product is made, including where materials come from, where parts are made, where assembly happens, and how it reaches the customer. Modern supply chains cross many countries.`,
              audioPrompt: `A supply chain is the full path of how a product is made, {name}. From raw materials, to parts, to assembly, to shipping, to the store where you buy it. Modern supply chains often cross many countries. A car you buy might have parts from a dozen different nations before it's finished. The smartphone in your pocket might involve rare metals from Africa, design from America, manufacturing in Asia, and final shipping to your local store. Supply chains make modern goods possible but also make them vulnerable.` },
            { word: `outsourcing`,
              definition: `Moving work or production to another company or country, often where costs are lower. A major feature of the modern global economy.`,
              audioPrompt: `Outsourcing is when a company moves work or production to another country or company, often where costs are lower, {name}. A company in the United States might outsource its customer service to India, or its manufacturing to Vietnam. This cuts costs for companies and consumers. It also creates jobs in countries where work is outsourced. But it can cost jobs in the country doing the outsourcing. Outsourcing is one of the most discussed and debated features of the modern global economy.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Culture and Communication Without Borders`,
          paragraphs: [
            `Globalization isn't just economic. It's CULTURAL. K-pop music from South Korea has fans all over the world. Anime from Japan is huge in the Americas. Bollywood films from India reach audiences across Asia and Africa. American movies and music still travel globally. People from one country marry people from another and raise children speaking multiple languages. Food, fashion, holidays, language, and ideas mix across borders in ways every previous generation would have found astonishing.`,
            `The internet has been a huge accelerator. A video posted in Vietnam can be watched in Brazil within minutes. News from a war on one side of the planet reaches phones everywhere else in seconds. Friendships form across continents through online games and social platforms. Some people celebrate this as creating one human family. Others worry it erases distinctive local cultures and creates a sameness wherever you go. Both can be true at once. The mixing is real, and so are the questions it raises.`,
          ],
          image: `/ue-assets/history/l18-s3-culture.webp`,
          imageCaption: `Music, films, food, fashion. All mixing across borders.`,
          vocab: [
            { word: `cultural exchange`,
              definition: `The sharing of ideas, music, food, art, language, and customs between different cultures. Globalization has dramatically increased cultural exchange around the world.`,
              audioPrompt: `Cultural exchange is the sharing of ideas, music, food, art, and customs between different cultures, {name}. Globalization has dramatically increased cultural exchange. K-pop fans live everywhere. American movies play in theaters across the world. Indian food is enjoyed across continents. Cultural exchange isn't new. The Silk Road was famous for it 2,000 years ago. But the speed and scale of modern cultural exchange is unmatched in history. Some people celebrate this. Others worry that local cultures get lost as global trends spread. Both reactions are real.` },
            { word: `internet`,
              definition: `A global network connecting billions of computers and devices, allowing instant communication and access to information. One of the biggest drivers of modern globalization.`,
              audioPrompt: `The internet is a global network connecting billions of computers and devices, {name}. It allows instant communication, information sharing, and connection across the entire planet. The internet is one of the biggest drivers of modern cultural globalization. Before the internet, culture spread slowly through physical media like books, tapes, and movies. Now a song from South Korea can reach every country on Earth in hours. The internet has made the world smaller, faster, and more connected in ways no previous generation experienced.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Real Benefits and Real Costs`,
          paragraphs: [
            `Globalization has brought real benefits. Hundreds of millions of people have escaped extreme poverty. Cheaper goods make many things affordable to working families. International cooperation on science (like the COVID vaccines) saves lives. Communication and travel let families separated by oceans stay close. Global crises like pandemics and climate change are easier to coordinate responses to when nations talk regularly.`,
            `Globalization has also brought real costs. Some industries and workers in older industrial regions have lost jobs to lower-cost foreign competition. Pollution from international shipping is significant. Cultures can feel pressure to conform to global trends. Diseases spread faster (COVID showed this clearly). Power has shifted in ways that worry some people. Global problems like climate change require coordination that's hard to achieve. Many countries are now debating whether to pull back from globalization, embrace it more, or shape it differently. There's no consensus, and the debate is part of modern politics in most countries. As with every revolution in this curriculum, honest analysis means holding both the benefits and the costs at once.`,
          ],
          image: `/ue-assets/history/l18-s4-mixed.webp`,
          imageCaption: `Hundreds of millions lifted from poverty. Lost jobs. Real climate costs. All true.`,
          vocab: [
            { word: `interconnected`,
              definition: `When different things are connected to each other in ways that affect each one. The modern world is deeply interconnected, with events in one country quickly affecting others.`,
              audioPrompt: `Interconnected means when different things are connected to each other in ways that affect each one, {name}. The modern world is deeply interconnected. A natural disaster in one country can disrupt supply chains around the world. A new technology made in one country quickly spreads everywhere. A disease starting in one region can become a global pandemic in weeks. Interconnection brings benefits like rapid sharing of knowledge and economic opportunities. It also brings risks like faster spread of problems.` },
            { word: `pandemic`,
              definition: `A disease outbreak that spreads across a large region or the entire world. Globalization has made pandemics spread faster, as COVID-19 showed in 2020.`,
              audioPrompt: `A pandemic is a disease outbreak that spreads across a large region or the entire world, {name}. Pandemics have happened throughout history. The Black Death, which we covered earlier, killed millions in the 1300s. The 1918 influenza pandemic killed tens of millions. COVID-19 in 2020 became a global pandemic rapidly because of modern air travel and trade. Globalization made the spread faster. But globalization also helped countries develop vaccines faster than ever before. Pandemics are one of the clearest examples of how connected the modern world is.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about globalization. For each one, identify the category: GLOBAL BENEFIT (something globalization has improved), GLOBAL COST (something globalization has worsened), or CONNECTED REALITY (a fact about how the world is now linked together, whether good or bad)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `global-benefit`,    label: `Global Benefit`,    color: `#34D399`, description: `Something globalization has improved for many people.` },
            { id: `global-cost`,       label: `Global Cost`,       color: `#F87171`, description: `Something globalization has worsened or created new problems with.` },
            { id: `connected-reality`, label: `Connected Reality`, color: `#60A5FA`, description: `A fact about how the modern world is interconnected, regardless of good or bad.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `Between 1990 and 2020, extreme poverty (defined as living on less than about $2 a day) fell from over 35% of the world's population to under 10%.` },
                { text: `Most of this progress came in countries like China, India, and Indonesia that opened to global trade.` },
                { text: `Hundreds of millions of people now live in dramatically better conditions than their parents did.` },
              ],
              correctAnswer: `global-benefit`,
              realWorldExample: `The drop in global extreme poverty since 1990 is one of the biggest improvements in human history.`,
              explanation: `Hundreds of millions of people lifted from extreme poverty. Better lives across multiple countries. Pure global benefit. This is one of globalization's clearest positive effects, and it's a huge one.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `Many older industrial regions in the U.S., U.K., and Europe lost large numbers of factory jobs starting in the 1980s.` },
                { text: `Companies moved production to countries with lower wages.` },
                { text: `Workers and communities affected often struggled for decades to find new economic identity.` },
              ],
              correctAnswer: `global-cost`,
              realWorldExample: `The decline of factory work in places like the American Rust Belt and northern England.`,
              explanation: `Lost jobs. Communities affected for decades. Pure global cost. Globalization brought clear benefits to many regions of the world, but it brought real losses to others. The political debate about globalization in wealthy countries is largely about this trade-off.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `When COVID-19 emerged in late 2019, it spread to every continent within months.` },
                { text: `Global air travel and trade made the spread inevitable.` },
                { text: `International cooperation on vaccines also developed quickly because of the same global connections.` },
              ],
              correctAnswer: `connected-reality`,
              realWorldExample: `COVID-19 is the clearest recent example of how interconnected the modern world is.`,
              explanation: `Connected world means diseases AND vaccine cooperation spread fast. Not purely benefit, not purely cost. Just the reality of how interconnected we are now. Diseases travel fast, but so do solutions. This is what living in a connected world looks like.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `International shipping (cargo ships moving products around the world) is responsible for about 3% of global carbon emissions.` },
                { text: `Without global shipping, modern supply chains wouldn't exist.` },
                { text: `Cleaner ship fuels and electric ports are being developed but transitioning the industry is slow.` },
              ],
              correctAnswer: `global-cost`,
              realWorldExample: `Shipping's climate impact is one of the most debated topics in modern globalization.`,
              explanation: `Tricky because shipping is essential to the modern global economy (which sounds like a benefit). But the environmental cost is real. The fact that shipping is necessary for goods we use doesn't change that it harms the planet. The lesson: things can be both necessary AND have real costs. Shipping is a global cost even though it enables many global benefits. Honest accounting includes both.`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What is GLOBALIZATION?`,
              options: [
                `When countries start wars`,
                `The increasing connection of countries, economies, and cultures around the world`,
                `When everyone speaks one language`,
                `Only economic trade`,
              ],
              correctIndex: 1,
              explanation: `Globalization is the increasing connection across borders of goods, money, people, ideas, and even diseases. It's been growing for centuries but accelerated dramatically since about 1990.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `What is a SUPPLY CHAIN?`,
              options: [
                `A type of jewelry`,
                `The full path of how a product is made, often crossing many countries from materials to assembly to final sale`,
                `A factory`,
                `A delivery truck`,
              ],
              correctIndex: 1,
              explanation: `Modern supply chains often cross many countries. A car or smartphone might involve materials, parts, and assembly from a dozen nations before it reaches you.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `Roughly how much did EXTREME GLOBAL POVERTY change between 1990 and 2020?`,
              options: [
                `It stayed the same`,
                `It dropped from over 35% of the world to under 10% of the world`,
                `It doubled`,
                `It became extremely rare`,
              ],
              correctIndex: 1,
              explanation: `Hundreds of millions of people escaped extreme poverty during this period. Most of the progress came in countries that opened to global trade like China, India, and Indonesia. This is one of globalization's most positive effects.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `Which is TRUE about cultural exchange under globalization?`,
              options: [
                `It only flows from rich countries to poor ones`,
                `Music, films, food, and ideas flow in many directions: K-pop from Korea, anime from Japan, Bollywood from India, and many more`,
                `It doesn't happen anymore`,
                `Only American culture spreads`,
              ],
              correctIndex: 1,
              explanation: `Modern cultural exchange flows in many directions. South Korean pop music, Japanese anime, Indian films, African music, and many other cultural products reach global audiences. The era of one-direction cultural flow is over.` },

            { id: `l18-q5`, format: `true-false`,
              question: `True or false: Globalization has both real benefits AND real costs.`,
              correctAnswer: true,
              explanation: `True. Globalization has lifted hundreds of millions from poverty and improved cooperation on big problems. It has also caused job losses in some industries and significant environmental costs. Honest analysis holds both at once.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `Why is COVID-19 a good example of how the world is INTERCONNECTED?`,
              options: [
                `It's not connected`,
                `Because it spread to every continent within months due to global travel, but global cooperation on vaccines also developed rapidly`,
                `It only affected one country`,
                `It happened by chance`,
              ],
              correctIndex: 1,
              explanation: `COVID showed both sides of interconnection. The disease spread fast because of global travel. But vaccines and treatments also developed faster than ever because scientists could cooperate globally. Both spread and solution moved at modern speeds.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `What's a CONCERN some people have about globalization?`,
              options: [
                `There are no concerns`,
                `Lost jobs in some industries, environmental costs from shipping, faster spread of diseases, and loss of distinctive local cultures`,
                `It's too slow`,
                `It only affects rich countries`,
              ],
              correctIndex: 1,
              explanation: `Real concerns include job losses in older industrial regions, pollution from international shipping, faster disease spread, and worry about cultural sameness replacing local traditions. These are debated in most countries today.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `When studying globalization, what's the HONEST approach?`,
              options: [
                `Celebrate everything about it`,
                `Condemn everything about it`,
                `Recognize both real benefits (poverty reduction, cooperation) and real costs (job losses, environmental damage) and think carefully about which parts to encourage and which to manage`,
                `Ignore it`,
              ],
              correctIndex: 2,
              explanation: `Honest analysis of globalization, like every revolution we've studied, requires holding both benefits and costs at once. Different countries are now debating how to shape globalization differently. There's no single "right" answer that everyone agrees on.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Look around your home. Estimate how many of the items you can see were made in another country. What does that tell you about how connected your life is to the world?` },
            { id: `r2`, text: `Globalization has lifted hundreds of millions out of poverty AND cost factory jobs in places like the U.S. Rust Belt. How do you think about this trade-off?` },
            { id: `r3`, text: `What's one piece of culture from another country that you genuinely enjoy? How did it reach you?` },
            { id: `r4`, text: `Do you think the world should be MORE connected or LESS connected? What would you keep, what would you change?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `You're growing up in the most globalized world in human history. Most of what you eat, wear, and use comes from elsewhere. The friends you might make online could live anywhere on Earth. The diseases you might catch could start anywhere on Earth. The jobs you might do as an adult might not exist in your local community at all. Understanding globalization isn't just history. It's understanding the system you'll spend your life navigating. The debate about how to manage that system is one of the biggest political questions of your generation.`,
          familyAdventure: `Family Origin Atlas. As a family, pick five items in your house (clothes, electronics, food, etc.). Look at the "Made in" labels. Then on a world map, mark where each was made. After mapping, discuss: what does it mean that your daily life relies on so many distant countries? What are the benefits to your family? What might be the costs to others?`,
          creativePrompt: {
            intro: `Imagine writing a letter to a great-grandparent who grew up around 1920, before modern globalization. Describe how YOUR life depends on the rest of the world.`,
            floor: `Write at least 5 sentences. Cover where your clothes, food, electronics, and music come from. Try to imagine what surprises them most.`,
            stretch: `Write 8 to 10 sentences. Cover the global supply chains in your daily life, cultural products from many countries, online friends or family in other places, and what you think they'd say about it.`,
            open: `Write as much as you want. Build a full letter that captures both the wonder of modern globalization (your phone reaching anywhere, music from everywhere) and the worries (jobs lost, environmental costs, fragile supply chains).`,
            frames: [
              `Dear great-grandparent, my life is so connected to the world.`,
              `Today I wore clothes made in ___ and ate food from ___.`,
              `I can talk to friends who live in ___.`,
              `What might surprise you most is ___.`,
              `What I worry about is ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what globalization is, describe modern global supply chains, recognize cultural exchange across borders, and hold both the benefits and costs honestly. Next lesson: one of the most discussed and contested topics of our time. The CLIMATE CRISIS. We'll cover what science has clearly established and the parts that are still being debated. See you there. — Lyra.`,
          badge: `globalization-historian`,
          badgeName: `Globalization Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L18.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L18 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
