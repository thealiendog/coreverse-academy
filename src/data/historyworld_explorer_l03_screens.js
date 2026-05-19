// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L03 — Ancient Rome: Empire and Republic
// Age band : explorers (6–8)   Guide: lyra
// Slots between L02 (Ancient Greece) and L05 (Maya/Aztec/Inca)
// ─────────────────────────────────────────────────────────────────────────────

const HW_L03 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-03`,
      title:     `Ancient Rome: Empire and Republic`,
      duration:  12,
      xpReward:  50,
      badge:     `rome-explorer`,
      badgeName: `Ancient Rome Explorer`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Lyra here. Last lesson we explored Ancient Greece — democracy, philosophy, Olympics. Today we travel to ANCIENT ROME. Rome started as a tiny village and grew into the LARGEST empire of the ancient world. It lasted 1,000 years. It changed everything. And believe it or not — pieces of Rome are STILL with us today. Let's go.`,
          headline: `Ancient Rome: Empire and Republic`,
          subtitle: `From village to empire — and the Roman gifts you still use today`,
          visual: `/explorer-assets/history/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `From Village to MIGHTY City`,
          paragraphs: [
            `Rome began as a SMALL village about 2,750 years ago. Built on SEVEN HILLS by a river called the Tiber, in what's now ITALY.`,
            `Legend says it was founded by twin brothers named Romulus and Remus, raised by a wolf. (Just a legend — but a good story.) The early Romans were farmers and shepherds. Nothing fancy. But over hundreds of years, the city GREW. They built strong walls, paved roads, marble buildings, and a giant FORUM (a public meeting place). Rome became the busy heart of an entire region. People came from far away to trade and visit. Eventually, Rome became the most powerful city in the ANCIENT WORLD. From tiny village to mighty city — Rome shows that big things can start small.`,
          ],
          image: `/explorer-assets/history/l03-s1-seven-hills.webp`,
          imageCaption: `Rome on its 7 hills, the Tiber river running through. Started small. Grew mighty over centuries.`,
          vocab: [
            {
              word: `Rome`,
              definition: `Ancient city in ITALY. ROME grew from a tiny village into the largest ancient empire.`,
              audioPrompt: `Rome, {name}, is an ancient city in Italy. Rome grew from a tiny village into the largest ancient empire. Built on seven hills next to a river called the Tiber. Today, Rome is still a major city — you can still walk through the same forum where ancient Romans walked 2,000 years ago. History you can touch.`,
            },
            {
              word: `seven hills`,
              definition: `The SEVEN HILLS Rome was built on. They gave the city its shape and made it easy to defend.`,
              audioPrompt: `The seven hills, {name}, are the hills Rome was built on. They gave the city its shape and made it easy to defend. From up high, Romans could see anyone coming. The hills had names — Palatine, Capitoline, Aventine, and more. Each had its own neighborhoods and temples.`,
            },
            {
              word: `Tiber river`,
              definition: `The RIVER that runs through Rome. The TIBER provided water, fish, and a way to transport goods.`,
              audioPrompt: `The Tiber river, {name}, is the river that runs through Rome. The Tiber provided water, fish, and a way to transport goods to and from the city. Like the Nile for Egypt, every great ancient civilization grew near water. Rivers were the highways of the ancient world.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Roman REPUBLIC: Power to the People`,
          paragraphs: [
            `For its first 500 years, Rome was a REPUBLIC. That means people VOTED for leaders. No kings allowed. (Romans HATED the idea of kings.)`,
            `Romans elected a group of leaders called the SENATE. The Senate met to debate laws, decide on wars, and run the city. Senators wore long white robes called TOGAS. Two leaders called CONSULS were elected every year — they shared power so no single person could become too strong. The Republic borrowed ideas from Greek democracy but made them their own. Not everyone could vote (women and enslaved people couldn't), but it was the largest example of voting government in the ancient world. The American founding fathers studied the Roman Republic when they built the United States government — that's how big its influence still is.`,
          ],
          image: `/explorer-assets/history/l03-s2-republic.webp`,
          imageCaption: `The Roman Republic: Senate, togas, consuls, voting. People — not kings — chose leaders.`,
          vocab: [
            {
              word: `republic`,
              definition: `A GOVERNMENT where people VOTE for leaders. Rome was a REPUBLIC for 500 years.`,
              audioPrompt: `A republic, {name}, is a government where people vote for leaders. Rome was a republic for 500 years. The word "republic" actually comes from Latin words meaning "of the people." America is also a republic today. Many countries are. The Roman idea of voting for leaders spread across thousands of years.`,
            },
            {
              word: `Senate`,
              definition: `Rome's GROUP of ELECTED LEADERS. The SENATE debated and made laws.`,
              audioPrompt: `The Senate, {name}, was Rome's group of elected leaders. The Senate debated and made laws. They met in a building called the Curia. Today, the US government also has a Senate — named after the Roman one. Many countries call their lawmaking groups "Senate" because of Rome's example.`,
            },
            {
              word: `consul`,
              definition: `One of TWO leaders elected EACH YEAR in Rome. CONSULS shared top power.`,
              audioPrompt: `A consul, {name}, was one of two leaders elected each year in Rome. Consuls shared top power. Why two? Because Romans didn't want any one person to become too powerful — like a king. Sharing power was a smart way to keep things balanced. Two leaders, both elected, both with limits.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `JULIUS CAESAR Changes Everything`,
          paragraphs: [
            `About 2,070 years ago, a famous Roman named JULIUS CAESAR rose to power. He was a brilliant general, popular with regular Romans, and very ambitious.`,
            `Caesar conquered huge new lands for Rome — including what's now France. He was loved by his soldiers. But the Senate worried he was becoming too powerful. They were right. Caesar took control as a DICTATOR — someone with absolute power. He was famously stabbed by senators (his old friend Brutus among them!) on March 15, 44 BCE — a day called "the Ides of March." His death didn't return Rome to a Republic, though. Instead, his adopted son Augustus became the FIRST EMPEROR. The Republic was over. The Roman EMPIRE began. Caesar's name still echoes today — words like "Czar" (Russia), "Kaiser" (Germany), even "Caesar salad" all come from him.`,
          ],
          image: `/explorer-assets/history/l03-s3-julius-caesar.webp`,
          imageCaption: `Julius Caesar: brilliant general, ambitious leader. His death ended the Republic and began the Empire.`,
          vocab: [
            {
              word: `Julius Caesar`,
              definition: `Famous Roman LEADER who CHANGED Rome from Republic to Empire. JULIUS CAESAR was both loved and feared.`,
              audioPrompt: `Julius Caesar, {name}, was a famous Roman leader who changed Rome from Republic to Empire. He was loved by his soldiers, feared by his rivals, and a brilliant general. He conquered new lands. He became dictator. He was assassinated. His life changed Rome's story forever. His name still echoes through history.`,
            },
            {
              word: `dictator`,
              definition: `Someone with TOTAL POWER. Caesar made himself DICTATOR — but ended Rome's Republic.`,
              audioPrompt: `A dictator, {name}, is someone with total power — no voting, no limits. Caesar made himself dictator. Some dictators are good for a country in a crisis, but most are dangerous because no one can stop them if they go wrong. Caesar's friends killed him because they feared he'd become like a king. Power can be scary when one person holds it all.`,
            },
            {
              word: `empire`,
              definition: `A huge KINGDOM ruled by an EMPEROR. The Roman EMPIRE replaced the Republic.`,
              audioPrompt: `An empire, {name}, is a huge kingdom ruled by an emperor. The Roman Empire replaced the Republic after Caesar. One person — the emperor — held supreme power. Some emperors were wise. Some were terrible. The Empire lasted nearly 500 more years. Rome's two governments — Republic, then Empire — together stretched over 1,000 years of history.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Roman EMPIRE: Largest of the Ancient World`,
          paragraphs: [
            `At its biggest, the Roman Empire stretched from BRITAIN in the north all the way to EGYPT in the south. It included parts of THREE CONTINENTS — Europe, Africa, and Asia. About 70 MILLION people lived under Roman rule.`,
            `Rome ruled with its powerful ARMY — the most disciplined fighting force in the ancient world. Roman soldiers (called LEGIONARIES) wore armor, carried short swords, and trained constantly. The army built the EMPIRE — and then kept it together. Romans built ROADS to connect everything. They built AQUEDUCTS to carry water hundreds of miles. They built BATHS, theaters, and the famous COLOSSEUM in Rome itself. Wherever Romans went, they built. Some of those buildings still stand 2,000 years later. The Empire wasn't perfect — Romans often conquered other peoples and treated them harshly. But for hundreds of years, the Roman Empire shaped the world.`,
          ],
          image: `/explorer-assets/history/l03-s4-empire.webp`,
          imageCaption: `Roman Empire at its peak: 3 continents, 70 million people. The largest ancient empire.`,
          vocab: [
            {
              word: `Roman army`,
              definition: `Rome's POWERFUL military. The ROMAN ARMY conquered and held the empire together.`,
              audioPrompt: `The Roman army, {name}, was Rome's powerful military. The Roman army conquered and held the empire together. Soldiers called legionaries trained constantly. They wore armor, carried short swords called gladius, and could march all day. Wherever they went, they built roads and forts. The Roman army was the most disciplined fighting force of the ancient world.`,
            },
            {
              word: `aqueduct`,
              definition: `A long STONE STRUCTURE that carries WATER. ROMAN AQUEDUCTS brought water to cities from miles away.`,
              audioPrompt: `An aqueduct, {name}, is a long stone structure that carries water. Roman aqueducts brought water to cities from miles away. Imagine a stone bridge — but instead of carrying people, it carries clean water flowing downhill. Some Roman aqueducts are still partly standing today, 2,000 years later. Roman engineering was incredible.`,
            },
            {
              word: `Colosseum`,
              definition: `Rome's FAMOUS arena. The COLOSSEUM held 50,000 people for games and shows.`,
              audioPrompt: `The Colosseum, {name}, was Rome's famous arena. The Colosseum held 50,000 people for games, fights, and shows. People came from all over the empire to watch. It still stands today — partly broken, but mostly there. You can visit it in Rome. It's one of the most famous buildings in the world. A reminder of Roman engineering and entertainment.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Daily Life in ROME`,
          paragraphs: [
            `What was it like to LIVE in ancient Rome? Different for everyone — depending on whether you were rich or poor, free or enslaved.`,
            `Rich Romans lived in villas with gardens and slaves to cook and clean. They ate fancy dinners reclining on couches, eating with their fingers. Poor Romans lived in crowded apartments and ate simpler food — bread, olives, cheese, fish. Almost all Romans wore TOGAS or simple tunics. Kids went to school — but mostly only boys from wealthier families. Public BATHS were a daily ritual for everyone — warm pools, hot pools, cold pools, and chatting with friends. Romans loved games — board games, dice, and watching CHARIOT RACES at the Circus Maximus. Rome was busy, loud, dirty, exciting — a real city, just like cities today, with all kinds of people doing all kinds of things.`,
          ],
          image: `/explorer-assets/history/l03-s5-roman-life.webp`,
          imageCaption: `Daily Roman life: togas, baths, markets, chariot races. A real bustling ancient city.`,
          vocab: [
            {
              word: `toga`,
              definition: `Roman ROBE made of cloth. The TOGA was the symbol of being a Roman citizen.`,
              audioPrompt: `A toga, {name}, is a Roman robe made of cloth — usually white. The toga was the symbol of being a Roman citizen. Only Roman men citizens wore them in formal settings. Wrapping a toga properly took skill and helpers. Today, people sometimes call dress-up parties "toga parties" — but real Romans wore them every day.`,
            },
            {
              word: `Roman baths`,
              definition: `Large PUBLIC POOLS for cleaning and socializing. ROMAN BATHS were a daily ritual.`,
              audioPrompt: `Roman baths, {name}, were large public pools for cleaning and socializing. Roman baths were a daily ritual — almost everyone went, rich and poor. Warm pools, hot pools, cold pools, steam rooms, massage rooms. People chatted, did business, exercised, and got clean. Baths were the social media of ancient Rome — everyone hung out there.`,
            },
            {
              word: `chariot races`,
              definition: `Fast HORSE-PULLED CARTS racing in arenas. CHARIOT RACES were Rome's favorite sport.`,
              audioPrompt: `Chariot races, {name}, were fast horse-pulled carts racing in arenas. Chariot races were Rome's favorite sport. The Circus Maximus could hold 250,000 people watching races. Drivers were celebrities — like modern athletes. Some became incredibly rich and famous. Watching wheels spin and horses thunder around a track was Rome's idea of a great day out.`,
            },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Rome's GIFTS to Today`,
          paragraphs: [
            `The Roman Empire eventually fell — about 1,500 years ago. But Rome NEVER REALLY DIED. Its gifts are everywhere today.`,
            `LAW — much of modern law comes from Roman law. Ideas like "innocent until proven guilty" started in Rome. ROADS — Romans built straight, durable roads. Modern roads still copy their methods. LANGUAGE — Latin (Romans' language) became Italian, Spanish, French, Portuguese, Romanian. English has thousands of Latin words too — "exit," "video," "data," "library," "calendar." ARCHITECTURE — arches, domes, and concrete were perfected by Romans. The US Capitol building is built in Roman style. NAMES — Many month names come from Romans (July = Julius Caesar, August = Augustus). NUMBERS — Roman numerals (I, V, X, L, C, D, M) appear on clocks, in chapter titles, in movie credits. The EMPIRE is gone. The IDEAS are with us forever.`,
          ],
          image: `/explorer-assets/history/l03-s6-roman-legacy.webp`,
          imageCaption: `Rome's gifts today: laws, roads, Romance languages, arches, July/August, Roman numerals. Everywhere.`,
          vocab: [
            {
              word: `Latin`,
              definition: `The LANGUAGE of ancient Romans. LATIN became Italian, Spanish, French, Portuguese, and shaped English.`,
              audioPrompt: `Latin, {name}, is the language of ancient Romans. Latin became Italian, Spanish, French, Portuguese, Romanian, and shaped English too. Doctors still use Latin words for medical terms. Scientists use Latin to name plants and animals. Catholic priests still pray in Latin. The language survived even after Rome fell.`,
            },
            {
              word: `Roman law`,
              definition: `LAWS first WRITTEN by Romans. ROMAN LAW shaped how modern countries make laws today.`,
              audioPrompt: `Roman law, {name}, is laws first written by Romans. Roman law shaped how modern countries make laws today. Ideas like "innocent until proven guilty," contracts, property rights, equal treatment under the law — all came from Roman law. Lawyers today still study Roman law in school. Rome's legal ideas are some of its biggest gifts.`,
            },
            {
              word: `legacy`,
              definition: `What someone LEAVES BEHIND. Rome's LEGACY is in our laws, language, buildings, and more.`,
              audioPrompt: `A legacy, {name}, is what someone leaves behind. Rome's legacy is in our laws, language, buildings, and more. Even when empires fall, their ideas can live forever. Rome's legacy is enormous — it shapes the modern world in ways most people don't even realize. Empires end. Legacies last.`,
            },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember!`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            {
              id: `l03-g1`,
              image: `l03-game-1.webp`,
              label: `Rome started as a TINY VILLAGE on seven hills — and grew into the largest empire of the ancient world.`,
              matchPhrase: `Yes! Rome started small. A village on seven hills next to the Tiber river. Over centuries, it grew into a huge empire. Big things often start small.`,
              correctMatch: `fact`,
            },
            {
              id: `l03-g2`,
              image: `l03-game-2.webp`,
              label: `Romans were INCREDIBLE BUILDERS — roads, aqueducts, the Colosseum, and buildings that still stand today.`,
              matchPhrase: `True! Roman engineering was amazing. Aqueducts carried water for miles. Roads stretched across the empire. The Colosseum still stands. Some Roman bridges still carry traffic today.`,
              correctMatch: `fact`,
            },
            {
              id: `l03-g3`,
              image: `l03-game-3.webp`,
              label: `The Roman Empire NEVER FELL — it's still the world's biggest empire today.`,
              matchPhrase: `Not at all! Rome fell about 1,500 years ago. But its LEGACY (laws, language, buildings) is still everywhere today. The empire ended; the gifts continue.`,
              correctMatch: `myth`,
            },
            {
              id: `l03-g4`,
              image: `l03-game-4.webp`,
              label: `Ancient Rome has NO connection to modern life — nothing they built or thought matters today.`,
              matchPhrase: `Definitely not! Rome is EVERYWHERE today. Latin shaped many languages. Roman law shapes modern law. Romans gave us July, August, Roman numerals, arches, concrete. Connection everywhere.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember!`,
          questions: [
            {
              id: `l03-q1`,
              format: `multiple-choice`,
              question: `What city did Rome become — and where is it located?`,
              options: [
                `In Egypt`,
                `In ITALY, built on SEVEN HILLS next to the Tiber river`,
                `In Greece`,
                `In Africa`,
              ],
              correctIndex: 1,
              explanation: `Rome was built in Italy on seven hills next to the Tiber river. Today, Rome is still a major Italian city you can visit.`,
            },
            {
              id: `l03-q2`,
              format: `multiple-choice`,
              question: `What was the Roman REPUBLIC?`,
              options: [
                `A king's palace`,
                `A government where PEOPLE VOTED for leaders (Senate, consuls) — no kings`,
                `A school for soldiers`,
                `An army headquarters`,
              ],
              correctIndex: 1,
              explanation: `The Republic was a government where people voted for leaders. Rome had a Senate and elected consuls. Romans hated kings — they wanted voting government.`,
            },
            {
              id: `l03-q3`,
              format: `multiple-choice`,
              question: `Who was JULIUS CAESAR?`,
              options: [
                `A regular farmer`,
                `A famous Roman general and DICTATOR — his death ended the Republic and began the Empire`,
                `An emperor of Egypt`,
                `A Greek philosopher`,
              ],
              correctIndex: 1,
              explanation: `Julius Caesar was a brilliant general and ambitious leader. He became dictator, was assassinated, and his death ended the Republic. His adopted son Augustus became the first emperor.`,
            },
            {
              id: `l03-q4`,
              format: `true-false`,
              question: `The Roman EMPIRE was the LARGEST ancient empire — stretching across 3 continents (Europe, Africa, Asia).`,
              correctAnswer: true,
              explanation: `True! At its peak, the Roman Empire covered parts of 3 continents and ruled about 70 million people. From Britain to Egypt to the Middle East.`,
            },
            {
              id: `l03-q5`,
              format: `multiple-choice`,
              question: `The language of ancient Romans was ___ — which became Italian, Spanish, French, and shaped English.`,
              options: [`Latin`, `Greek`, `English`, `Egyptian`],
              correctIndex: 0,
              explanation: `Latin! The language of ancient Romans. Latin became Italian, Spanish, French, Portuguese, Romanian. Thousands of English words come from Latin too.`,
            },
            {
              id: `l03-q6`,
              format: `multiple-choice`,
              question: `What's Rome's LEGACY in our world today?`,
              options: [
                `Nothing — it's completely forgotten`,
                `Laws, language (Latin → Italian/Spanish/French), arches, Roman numerals, month names (July/August)`,
                `Just a few old statues`,
                `Only pizza`,
              ],
              correctIndex: 1,
              explanation: `Rome's legacy: modern laws, Romance languages, architecture (arches, concrete), Roman numerals, July (Julius), August (Augustus), and countless ideas. The empire fell, but its gifts continue.`,
            },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `If you've ever read a clock with Roman numerals (I, II, III, IV, V), you're using ancient Roman writing. If you've ever spoken Spanish, French, Italian, or Portuguese — you're speaking a language that evolved from Latin. The month JULY is named after Julius Caesar. AUGUST is named after his adopted son. When the Founding Fathers built the United States, they studied Rome — that's why we have a Senate, why our laws have words like "veto" (Latin for "I forbid"), why the US Capitol building looks Roman. Empires fall. But IDEAS live forever.`,
          familyAdventure: {
            title: `Find the Roman Hunt`,
            scenario: `Together, look around your house for Rome's fingerprints. Roman numerals on clocks, watches, book chapters, or movie credits. Words from Latin: exit, video, calendar, audio, library. July and August on a calendar. Arches or columns in buildings you know. Once you start looking, you'll find Rome everywhere. The empire is closer than you think.`,
            talkingPoint: `Ask a grown-up: do they know any words that come from Latin? Can they think of any building nearby that looks "Roman-style"?`,
          },
          creativePrompt: {
            title: `Time Traveler Comic`,
            description: `Draw a three-frame comic imagining you traveled back to ancient Rome for a day. Frame 1 — Arrival: what do you SEE? (Togas, marble buildings, chariots.) Frame 2 — Adventure: what do you DO? (Watch chariot races? Visit the baths? Explore the forum?) Frame 3 — Souvenir: what do you bring home? (A scroll? Roman coin? A new word?) Make it fun. Be the time traveler.`,
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Amazing journey! You've explored ANCIENT ROME. A small village that grew into the largest empire of the ancient world. The REPUBLIC (people voting) became the EMPIRE (one ruler). Julius Caesar changed everything. Romans built INCREDIBLE things — aqueducts, roads, the Colosseum. And their LEGACY (laws, Latin, arches, July/August, Roman numerals) is STILL EVERYWHERE today. The empire fell — but Rome's gifts live forever. Next time, we travel to ANCIENT CHINA and the SILK ROAD!`,
          badge: `rome-explorer`,
          badgeName: `Ancient Rome Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L03;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags = HW_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = HW_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = HW_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L03] Loaded: "Ancient Rome" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
