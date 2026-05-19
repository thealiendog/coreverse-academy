// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L18 — Global Challenges: Problems the World Is Solving Together
// Age band : explorers (6–8)   Guide: lyra
// Slots between L17 (Maps) and L19 (Current Events)
// LAST History gap-fill — after this, History is 20/20 complete
// ─────────────────────────────────────────────────────────────────────────────

const HW_L18 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-18`,
      title:     `Global Challenges: Problems the World Is Solving Together`,
      duration:  12,
      xpReward:  50,
      badge:     `global-citizen`,
      badgeName: `Global Citizen`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. We've covered ancient history, modern heroes, and how to read maps. Now let's look at the WORLD TODAY — the big PROBLEMS humanity is working to solve, and the AMAZING ways countries cooperate. Climate change, hunger, disease, conflict — real challenges. But also: real solutions, real progress, and real hope. You're part of this. Let's see why.`,
          headline: `Global Challenges`,
          subtitle: `Real problems, real cooperation, real hope`,
          visual: `/explorer-assets/history/l18-s1-shared-world.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `One PLANET, One Future`,
          paragraphs: [
            `Here's something AMAZING about our time, {name}. For most of human history, problems happened LOCALLY. A drought hit one valley. A war between two kingdoms. A sickness in one village. People mostly couldn't help other countries — too far away, too disconnected.`,
            `Today is DIFFERENT. We live on ONE planet with 8 BILLION people. We're connected by oceans, airplanes, internet, and trade. A problem in one country can affect everyone. A disease in one place can spread worldwide. Pollution in one country reaches the air everywhere. But here's the other side: we can also HELP each other like never before. Doctors fly to disaster zones. Aid arrives in days, not months. Scientists from many countries work on the same vaccine. Climate agreements are signed by hundreds of nations. We're learning — slowly, sometimes painfully — how to live as ONE WORLD. We're not there yet. But the work is happening. And it's the biggest, most hopeful project in human history.`,
          ],
          image: `/explorer-assets/history/l18-s1-shared-world.webp`,
          imageCaption: `One planet. 8 billion people. Connected like never before. Sharing one home, one future. Big project — together.`,
          vocab: [
            { word: `global`,    definition: `Concerning the ENTIRE WORLD. GLOBAL problems and solutions affect everyone.`,
              audioPrompt: `Global, {name}, means concerning the entire world. Global problems and solutions affect everyone. We live in a global world today — connected by trade, internet, travel, and shared challenges. Climate change is global. Pandemics are global. The solutions are also global. Thinking globally is a new human skill we're all learning.` },
            { word: `connected`, definition: `LINKED TOGETHER. The world is more CONNECTED than ever before in history.`,
              audioPrompt: `Connected, {name}, means linked together. The world is more connected than ever before in history. Phones, internet, airplanes, ships. People in Tokyo can talk to people in New York instantly. Problems travel fast. Help can travel fast too. Connection is a tool. It depends on how we use it.` },
            { word: `one world`,  definition: `The IDEA that we all SHARE ONE planet. We're learning to live as ONE WORLD — together.`,
              audioPrompt: `One world, {name}, is the idea that we all share one planet. We're learning to live as one world — together. There's no Planet B. We have to figure out how to live together on this Earth. Different countries, cultures, religions, languages — all on one shared rock spinning through space. Big project. Worth doing.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `CLIMATE CHANGE: The Big Challenge`,
          paragraphs: [
            `One of the biggest GLOBAL problems is CLIMATE CHANGE. Let me explain simply.`,
            `Earth has always had weather. But over the last 150 years, humans have been burning A LOT of FOSSIL FUELS — coal, oil, gas — for energy. This releases gases like CARBON DIOXIDE into the air. These gases trap HEAT around Earth, like a blanket. Slowly, Earth has been getting WARMER. That's CLIMATE CHANGE. What's happening because of it? Ice at the poles is MELTING. Sea levels are RISING. Storms are getting more intense. Some areas are getting hotter and drier (more wildfires). Animals and plants are struggling. People in coastal cities, dry farming regions, and poor countries are most affected. What's being done? Many countries signed the PARIS AGREEMENT (2015) — promising to reduce pollution and switch to clean energy (solar, wind, hydro). Scientists are inventing better technologies. Many people are eating less meat, driving less, using less plastic. Kids like Greta Thunberg are leading climate marches. It's a HUGE problem. But humans have solved huge problems before. Working together, we can solve this one too.`,
          ],
          image: `/explorer-assets/history/l18-s2-climate-change.webp`,
          imageCaption: `Climate change: planet warming from fossil fuels. Real challenge. Real solutions: clean energy, agreements, activism, kids' voices.`,
          vocab: [
            { word: `climate change`, definition: `Earth getting WARMER from human-made GASES. CLIMATE CHANGE is the biggest environmental challenge.`,
              audioPrompt: `Climate change, {name}, is Earth getting warmer from human-made gases. Climate change is the biggest environmental challenge. Over the last 150 years, burning fossil fuels has released gases that trap heat. The planet has warmed noticeably. It's enough to melt ice, raise seas, intensify storms. We need to act now.` },
            { word: `fossil fuels`,   definition: `Energy from BURNING coal, oil, or gas. FOSSIL FUELS power most of the world but release climate-warming gases.`,
              audioPrompt: `Fossil fuels, {name}, are energy from burning coal, oil, or gas. Fossil fuels power most of the world but release climate-warming gases. They're called "fossil" because they formed underground from ancient plants and animals over millions of years. They've been the main energy source since the Industrial Revolution. Now we need to switch to cleaner energy.` },
            { word: `clean energy`,   definition: `POWER from RENEWABLE sources — sun, wind, water. CLEAN ENERGY doesn't release climate-warming gases.`,
              audioPrompt: `Clean energy, {name}, is power from renewable sources — sun, wind, water. Clean energy doesn't release climate-warming gases. Solar panels turn sunlight into electricity. Wind turbines turn moving air into power. Hydroelectric dams use flowing water. These sources don't run out. They don't pollute. They're the future of energy.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `HUNGER and POVERTY: Big Hearts, Real Solutions`,
          paragraphs: [
            `Right now, about 800 MILLION people in the world don't have ENOUGH food. That's roughly 1 in every 10 people. This is HUNGER — when families can't afford or find enough food.`,
            `Why does hunger happen? Sometimes WEATHER hurts farming (drought, floods). Sometimes WAR forces people to flee their homes and lose their land. Sometimes ECONOMIES collapse and food prices skyrocket. Sometimes people are too POOR to buy food even when food exists nearby. POVERTY is when families don't have enough money for basic needs — food, clothes, housing, school. About 1 in 10 people live in extreme poverty. The good news? Hunger and poverty have actually DROPPED A LOT in the last 30 years. In 1990, about 1 in 3 people lived in extreme poverty. Today, 1 in 10. That's progress! How? Better farming. Vaccines (healthier workers). Education for girls. Microloans (small business loans). International aid. Local activists. Programs like the UN's WORLD FOOD PROGRAMME help feed millions during crises. There's still huge work to do — but real progress is happening.`,
          ],
          image: `/explorer-assets/history/l18-s3-hunger-help.webp`,
          imageCaption: `Hunger affects 800M people. But poverty has DROPPED a lot. Solutions: aid, education, microloans, peace, farming progress.`,
          vocab: [
            { word: `hunger`,   definition: `Not having ENOUGH FOOD to live well. HUNGER affects about 800 million people worldwide.`,
              audioPrompt: `Hunger, {name}, is not having enough food to live well. Hunger affects about eight hundred million people worldwide. It's not just being a little hungry — it's serious lack of food that hurts health and growth. Children with chronic hunger don't grow as tall or learn as well. Hunger is one of the world's biggest problems. Many organizations work daily to end it.` },
            { word: `poverty`,  definition: `Not having ENOUGH MONEY for basic needs. POVERTY affects about 1 in 10 people in extreme cases.`,
              audioPrompt: `Poverty, {name}, is not having enough money for basic needs. Poverty affects about one in ten people in extreme cases — extreme poverty means living on less than two dollars a day. Many more live in less extreme poverty. Poverty often runs in families across generations. Education, jobs, and fair systems are how it ends.` },
            { word: `progress`, definition: `Making things BETTER over time. PROGRESS against poverty has been real — 1 in 3 (1990) to 1 in 10 (today).`,
              audioPrompt: `Progress, {name}, means making things better over time. Progress against poverty has been real — one in three in 1990 to one in ten today. In just 30 years, hundreds of millions of people moved out of extreme poverty. That's real progress! It happened because of vaccines, education, microloans, international cooperation, and local activism. Progress is possible.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `DISEASE and HEALTH: Scientists to the Rescue`,
          paragraphs: [
            `DISEASES — illnesses that hurt or kill people — have always challenged humans. Some diseases spread quickly (called PANDEMICS).`,
            `In 2020, the world experienced a pandemic from a virus called COVID-19. It spread to nearly every country. Many people were affected. Schools closed. People wore masks. Countries shut their borders. It was hard. But here's something amazing — SCIENTISTS from MANY countries worked together. In less than a year (incredibly fast in science!), they developed effective VACCINES. Billions of doses were made and given. Hospitals adapted. Care improved. The pandemic eventually slowed. We learned hard lessons — about being prepared, about helping each other across borders, about trusting science. Other diseases — malaria, tuberculosis, HIV/AIDS, polio — still affect millions, especially in poor countries. But MASSIVE progress has been made. Smallpox, which killed hundreds of millions over history, was ERADICATED (wiped out!) in 1980 thanks to a worldwide vaccine campaign. Polio is almost gone. Scientists, doctors, nurses, and the WORLD HEALTH ORGANIZATION (WHO) work every day to protect human health worldwide. We're getting better at this.`,
          ],
          image: `/explorer-assets/history/l18-s4-disease-vaccines.webp`,
          imageCaption: `Diseases challenged humanity for millennia. But science fights back: vaccines, eradication (smallpox 1980), global health teams.`,
          vocab: [
            { word: `pandemic`,   definition: `A DISEASE outbreak across MANY countries. The COVID-19 PANDEMIC affected the whole world in 2020.`,
              audioPrompt: `A pandemic, {name}, is a disease outbreak across many countries. The COVID-19 pandemic affected the whole world in twenty twenty. Pandemics are scary — diseases spread fast in our connected world. But pandemics also test our ability to cooperate. COVID-19 brought scientists from many countries together. Vaccines were developed faster than ever. We learned how to respond better next time.` },
            { word: `vaccine`,    definition: `A MEDICINE that PREVENTS a disease. VACCINES have eradicated smallpox and nearly polio.`,
              audioPrompt: `A vaccine, {name}, is a medicine that prevents a disease. Vaccines have eradicated smallpox and nearly polio. Vaccines train your immune system to fight off specific diseases before you get sick. Some of the greatest medical inventions ever. They've saved hundreds of millions of lives. Many of the worst diseases of past centuries are now controlled by vaccines.` },
            { word: `eradicate`, definition: `WIPE OUT completely. SMALLPOX was ERADICATED in 1980 — a huge global health victory.`,
              audioPrompt: `To eradicate, {name}, is to wipe out completely. Smallpox was eradicated in nineteen eighty — a huge global health victory. Smallpox killed hundreds of millions of people throughout history. Then a worldwide vaccine campaign wiped it out. The disease is gone. That's what cooperation can do. Polio could be next.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `COOPERATION: The UN and Big Friends`,
          paragraphs: [
            `How does the world WORK TOGETHER on these problems? Through COOPERATION — coordinating across borders.`,
            `The biggest example is the UNITED NATIONS (UN) — you remember from the WWII lesson. Today, 193 countries belong. The UN coordinates: international peace efforts (UN peacekeepers), refugee aid (UNHCR), children (UNICEF), global health (WHO), food (World Food Programme), education (UNESCO), and much more. When there's a crisis, the UN often helps. They're not perfect — they're a group of countries that disagree on lots. But they keep meeting. They keep talking. They keep coordinating. Beyond the UN, countries cooperate through TREATIES (formal agreements) and PARTNERSHIPS. The PARIS CLIMATE AGREEMENT involves nearly every country pledging to fight climate change. Global health partnerships coordinate vaccine campaigns. The INTERNATIONAL SPACE STATION has astronauts from many countries living together for months — peaceful science. Charities and NON-PROFITS (Doctors Without Borders, Red Cross, and many more) cross borders to help. ORDINARY PEOPLE donate, volunteer, share information online, and apply pressure on governments. The COOPERATION INFRASTRUCTURE — the systems for working together — is bigger than at any time in history. The web of cooperation is real.`,
          ],
          image: `/explorer-assets/history/l18-s5-cooperation.webp`,
          imageCaption: `UN + treaties + partnerships + charities + ordinary people = the biggest cooperation network in human history.`,
          vocab: [
            { word: `cooperation`,    definition: `WORKING TOGETHER toward a SHARED GOAL. COOPERATION is how the world tackles global problems.`,
              audioPrompt: `Cooperation, {name}, is working together toward a shared goal. Cooperation is how the world tackles global problems. No country alone can solve climate change. No country alone can stop pandemics. No country alone can end hunger. Cooperation lets us combine resources, knowledge, and effort. It's harder than working alone — but the possible solutions are much bigger.` },
            { word: `treaty`,         definition: `A FORMAL AGREEMENT between COUNTRIES. The PARIS CLIMATE AGREEMENT is a treaty.`,
              audioPrompt: `A treaty, {name}, is a formal agreement between countries. The Paris Climate Agreement is a treaty. Treaties are how countries make official commitments to each other. They write down what they'll do. They sign their names. They follow through (hopefully). Treaties create the rules for international cooperation. Without them, every country would just do whatever they wanted.` },
            { word: `infrastructure`, definition: `The SYSTEMS and STRUCTURES that make things WORK. COOPERATION INFRASTRUCTURE includes the UN, treaties, charities, partnerships.`,
              audioPrompt: `Infrastructure, {name}, is the systems and structures that make things work. Cooperation infrastructure includes the UN, treaties, charities, partnerships. Built over decades — especially since WWII. Now it's a vast web of organizations and agreements that span the planet. Imperfect, but real. The infrastructure makes coordinated global action possible.` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `YOUR Future, YOUR Role`,
          paragraphs: [
            `{name} — your generation is INHERITING these problems. Climate change. Inequality. Conflict. Disease. The challenges are big. But your generation also INHERITS the most amazing TOOLS humanity has ever had — science, technology, cooperation, billions of people willing to help.`,
            `What can YOU do, RIGHT NOW, at your age? LEARN — stay curious about the world. Know what's happening. Read books. Ask questions. INCLUDE — be kind to people who are different. Stand up for kids being treated unfairly. CARE for your environment — recycle, don't waste food, use less plastic, plant something. SPEAK UP when you see something wrong. VOTE — when you grow up, vote in every election. Local, state, national. CHOOSE work or studies that matter to YOU. Maybe you'll be a scientist, teacher, doctor, farmer, builder, leader, artist, or parent. All those jobs can help the world. The world doesn't need everyone to be a famous activist. It needs ORDINARY PEOPLE doing ORDINARY THINGS WITH LOVE AND CARE. That's how big problems get solved — millions of people doing small good things, plus some doing big things, all moving in the same direction. You're part of it. Welcome to the work.`,
          ],
          image: `/explorer-assets/history/l18-s6-hopeful-future.webp`,
          imageCaption: `Your future. Your role. Learn, include, care, speak up, vote, choose work that matters. Welcome to the work.`,
          vocab: [
            { word: `inherit`,              definition: `RECEIVE from those who CAME BEFORE. Your generation INHERITS the world — its problems and its tools.`,
              audioPrompt: `To inherit, {name}, is to receive from those who came before. Your generation inherits the world — its problems and its tools. The previous generations did some great things (vaccines, the UN, internet, civil rights) and some bad things (pollution, conflicts, inequality). You inherit all of it. Then it becomes yours to add to. Or fix. Or both.` },
            { word: `everyone matters`,     definition: `EVERY person can CONTRIBUTE. EVERYONE MATTERS — ordinary people doing ordinary things shape the world.`,
              audioPrompt: `Everyone matters, {name}, is every person can contribute. Everyone matters — ordinary people doing ordinary things shape the world. You don't have to be famous to matter. You don't have to be rich to help. Small kindnesses, daily choices, careful work — all of it builds the world. Your contribution is needed. Your voice counts. Your effort matters.` },
            { word: `welcome to the work`, definition: `JOINING the ongoing PROJECT. WELCOME TO THE WORK — humanity's ongoing project of making things better.`,
              audioPrompt: `Welcome to the work, {name}, is joining the ongoing project. Welcome to the work — humanity's ongoing project of making things better. The work didn't start with you. It won't end with you. But for this part of history, you're one of the workers. The world is being built by people right now. You're one of them. That's exciting. That's important. That's your inheritance and your gift.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `GLOBAL COOPERATION (UN, treaties, science) has solved real problems — like eradicating SMALLPOX in 1980.`,
              matchPhrase: `Yes! Cooperation works. Smallpox eradicated worldwide. COVID-19 vaccines developed in record time across many countries. Extreme poverty cut by two-thirds since 1990. Cooperation gets results.`,
              correctMatch: `fact` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `KIDS can really help — by being kind, learning, recycling, including others, and growing into adults who vote.`,
              matchPhrase: `True! You don't have to wait. Kindness, learning, environmental care, speaking up, future voting — all real ways kids contribute. Small things from many people = huge impact.`,
              correctMatch: `fact` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `Global problems are HOPELESS — nothing anyone does helps, so giving up is the best plan.`,
              matchPhrase: `Not at all! Humanity has made HUGE progress on many problems. Diseases beaten. Poverty cut by two-thirds. Climate solutions advancing. Cooperation real. Hope is rational, not naive.`,
              correctMatch: `myth` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `Problems in OTHER countries are NOT MY PROBLEM — they have nothing to do with me.`,
              matchPhrase: `Definitely not! We share ONE planet. Climate, diseases, refugees, trade — all connect us. Plus, kindness extends past borders. Other people's problems are partly our problems too.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What is CLIMATE CHANGE?`,
              options: [`Normal seasons`, `Earth getting WARMER from human-made GASES (mostly from burning fossil fuels) trapping heat`, `Just weather`, `Something random`],
              correctIndex: 1,
              explanation: `Climate change: Earth warming from gases (like carbon dioxide) released by burning fossil fuels. Ice melting, seas rising, storms intensifying. The biggest environmental challenge today.` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `Has POVERTY been getting BETTER or WORSE worldwide in the last 30 years?`,
              options: [`Worse`, `MUCH BETTER — from 1 in 3 in 1990 to 1 in 10 today. Real progress!`, `The same`, `No change`],
              correctIndex: 1,
              explanation: `MUCH better! Extreme poverty went from 1 in 3 people (1990) to 1 in 10 (today). Hundreds of millions of people moved out of poverty. Real progress through cooperation and effort.` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `What disease was completely ERADICATED (wiped out!) in 1980 thanks to a worldwide vaccine campaign?`,
              options: [`Common cold`, `SMALLPOX — killed hundreds of millions of people over history, then wiped out by global cooperation`, `The flu`, `Polio`],
              correctIndex: 1,
              explanation: `Smallpox! One of history's deadliest diseases — wiped out completely by a worldwide vaccine campaign. Proof that global cooperation can solve enormous problems.` },
            { id: `l18-q4`, format: `true-false`,
              question: `The UNITED NATIONS (193 countries) is one of the main ways the world COOPERATES on global problems.`,
              correctAnswer: true,
              explanation: `True! UN coordinates peace efforts, refugees, children, global health, food, education, climate, and more. Not perfect, but the biggest cooperation network in history. Born from WWII's lessons.` },
            { id: `l18-q5`, format: `fill-blank`,
              question: `Energy from sun, wind, and water is called ___ energy — it doesn't pollute or run out.`,
              options: [`clean`, `dirty`, `old`, `weak`],
              correctIndex: 0,
              explanation: `Clean energy! Solar, wind, hydroelectric. Renewable. Doesn't release climate gases. The future of energy. Many countries are switching to clean energy to fight climate change.` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `What can a KID do RIGHT NOW to help the world?`,
              options: [`Nothing`, `LEARN, include others, care for environment, speak up against wrong, plan to vote later — small things from many people = huge impact`, `Just wait to grow up`, `Only famous people help`],
              correctIndex: 1,
              explanation: `So much! Learn about the world. Be kind and inclusive. Care for the environment (recycle, less plastic, walk). Speak up against unfairness. Plan to vote when you grow up. Small daily choices add up.` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Here's something to feel HOPEFUL about, {name}. Humans have already solved problems that once seemed impossible. SLAVERY was legal in most countries 200 years ago — now it's illegal almost everywhere. SMALLPOX killed millions for thousands of years — now it's GONE. KIDS used to work in factories 14 hours a day — now child labor laws protect them in most countries. EXTREME POVERTY has been cut by two-thirds in your grandparents' lifetime. These problems felt impossible to people 100 years ago. They got solved. The lesson is: WHEN HUMANS COOPERATE WITH PURPOSE, MASSIVE CHANGE IS POSSIBLE. Climate change, hunger, inequality — they'll be solved by your generation working with older generations. Not next year. But within your lifetime, yes. That's not naive — that's a pattern from history. The work continues. You're part of it. Be hopeful. Be useful. Stay in the game.`,
          familyAdventure: {
            title: `One Thing We Can Do`,
            scenario: `Together, pick ONE global challenge your family cares about — climate change, hunger, kindness to others, disease prevention, or anything. Then choose ONE concrete thing your family will DO this month to help. Examples: climate — try meatless Monday, use cloth bags, reduce car trips. Hunger — donate to a local food bank. Kindness — write thank-you notes to community helpers (teachers, nurses, firefighters). Health — support a vaccine campaign donation. Pick ONE. Do it.`,
            talkingPoint: `Talk about how it felt to DO something, not just think about it. Small actions from millions of people create big change. What could you make a regular habit?`,
          },
          creativePrompt: {
            title: `Draw Your Hopeful Future`,
            description: `Imagine the world in 20 years — when YOU are an adult. What does a BETTER world look like? Maybe clean energy everywhere, every kid in school, oceans full of life, scientists from all countries working together. Add YOURSELF in the picture — what are you doing? Are you a doctor, scientist, teacher, builder, parent, activist, or some combination? Imagine the future bright. Then start building it.`,
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Powerful lesson, {name}! You've explored GLOBAL CHALLENGES — and the GLOBAL COOPERATION solving them. CLIMATE CHANGE is real, but clean energy and treaties are real solutions. HUNGER and POVERTY have actually DROPPED a lot — real progress. DISEASES like smallpox have been ERADICATED through cooperation. The UN (193 countries) coordinates global work. And YOU can help — by learning, including, caring, speaking up, and someday voting. Small things from many people = huge impact. History is 20/20 complete! Next up — CURRENT EVENTS and the world right now. — Lyra 🐘`,
          badge: `global-citizen`,
          badgeName: `Global Citizen`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L18;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L18] Loaded: "Global Challenges" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
