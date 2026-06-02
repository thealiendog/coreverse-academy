// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L12 — Post-Cold War World Order
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Post-Cold War Transitions and Patterns
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: CASE STUDY (Eastern Europe+Russia / Iraq War / China's rise)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l12-v1";

const HISTORY_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-12`,
      title: `Post-Cold War World Order`,
      duration: 35,
      xpReward: 75,
      badge: `post-cold-war-literate`,
      badgeName: `Post-Cold War Literate`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, the Cold War ended (L11) with the Berlin Wall's fall November 9, 1989 and the Soviet Union's formal dissolution December 25, 1991. What came next? Three decades and counting of "post-Cold War world order" that turned out very different from what most observers expected in 1991. The early-1990s consensus was triumphalist (Francis Fukuyama's "End of History" 1992 argued liberal democracy and market capitalism had won as the endpoint of political-economic evolution). The actual trajectory has been messier: Eastern Europe and Russia took different paths after 1991; the US-led "unipolar moment" was tested by 9/11 (September 11, 2001) and squandered in the Iraq War (March 2003); China rose under one-party rule, becoming the world's second-largest economy by ~2010 while explicitly rejecting Western political models. Today three cases that show three different patterns of post-Cold War order: institutional spread (Eastern Europe / Russia), unilateral overreach (Iraq), alternative model emergence (China). Engaging each builds framework for the world you're growing up into.`,
          headline: `Post-Cold War World Order`,
          subtitle: `Three cases. Three different patterns of what came after 1991.`,
          visual: `/voyager-assets/history/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What 1991 Was Supposed To Mean`,
          paragraphs: [
            `The early-1990s consensus among Western observers was triumphalist: the Soviet collapse demonstrated that liberal democracy and market capitalism had decisively won as a model of political-economic organization. The Cold War's end seemed to vindicate the postwar Western model and to open a period of expansion of that model across the formerly communist world and beyond. Multiple frameworks expressed this expectation, with varying degrees of sophistication.`,
            `Francis Fukuyama's "The End of History and the Last Man" (1992, expanding a 1989 essay) was the most prominent statement. Fukuyama argued that liberal democracy combined with market capitalism represented the endpoint of human political-economic evolution; the major ideological alternatives (fascism, communism) had failed; remaining conflicts would be local and tactical rather than systemic. Fukuyama's argument has been substantially misrepresented (he didn't claim no more events would happen; he claimed no more major ideological alternatives would emerge to challenge liberal-democratic capitalism). Even on that narrower claim, the argument has been substantially complicated by subsequent developments.`,
            `The "Washington Consensus" framework (term coined by John Williamson 1989) articulated the economic policy package that was supposed to spread globally: trade liberalization, financial deregulation, privatization of state enterprises, deregulation, secure property rights, fiscal discipline, competitive exchange rates, foreign direct investment liberalization. The IMF and World Bank were supposed to manage transitions across the formerly communist world and developing countries through "structural adjustment" programs implementing these policies.`,
            `The democratic peace thesis (Bruce Russett "Grasping the Democratic Peace" 1993, Michael Doyle, others) argued that democracies tend not to fight each other, suggesting that democracy expansion would produce more peaceful international order. NATO and EU expansion eastward was conceptualized partly through this framework: bringing former Warsaw Pact countries into Western institutional structures was supposed to stabilize them as democracies and reduce risk of conflict.`,
            `The "unipolar moment" framework (Charles Krauthammer 1990 essay "The Unipolar Moment," developed by neoconservative intellectuals through the 1990s and into the early 2000s) emphasized US singular dominance after Soviet collapse: the US was the only remaining superpower with global military reach; US leadership could shape the international order; the moment of unipolar US dominance was an opportunity to be used. Neoconservative writers including Robert Kagan, William Kristol, Charles Krauthammer, and others developed the framework into specific policy positions including preventive war, regime change, and democracy promotion through force where necessary.`,
            `What these frameworks shared. They all assumed Western institutional and ideological dominance would continue and expand; that resistance to that expansion would be marginal and manageable; that the major conflicts of the 21st century would not be system-level conflicts but local or technical conflicts. The frameworks were not equivalent; they made different specific claims; but they shared expectations about the trajectory. Subsequent decades have substantially challenged each of these expectations. The cases ahead show three different patterns of how the actual post-Cold War period diverged from the expected one.`,
          ],
          image: `/voyager-assets/history/l12-s1-1991.webp`,
          imageCaption: `Early-1990s triumphalist consensus: Fukuyama "End of History" 1992 (liberal democracy + market capitalism as endpoint of evolution); Washington Consensus (Williamson 1989): trade liberalization + privatization + deregulation; democratic peace thesis (Russett 1993, Doyle); "unipolar moment" (Krauthammer 1990) developed by neoconservatives (Kagan, Kristol, Krauthammer). Shared expectation: Western institutional and ideological dominance continues and expands. Subsequent decades substantially challenged.`,
          vocab: [
            {
              word: `the post-Cold War expectations`,
              definition: `Early-1990s triumphalist Western consensus after Soviet collapse Dec 1991. Liberal democracy + market capitalism decisively won; opening period of Western model expansion. Major frameworks. Francis Fukuyama "The End of History and the Last Man" 1992 (expanding 1989 essay): liberal democracy + market capitalism as endpoint of human political-economic evolution; major ideological alternatives (fascism, communism) failed; remaining conflicts would be local and tactical rather than systemic. Washington Consensus (John Williamson 1989): economic policy package: trade liberalization, financial deregulation, privatization of state enterprises, deregulation, secure property rights, fiscal discipline, competitive exchange rates, FDI liberalization; IMF + World Bank managing transitions through "structural adjustment." Democratic peace thesis (Bruce Russett "Grasping the Democratic Peace" 1993, Michael Doyle): democracies tend not to fight each other; democracy expansion → more peaceful international order; NATO + EU expansion eastward conceptualized partly through framework. "Unipolar moment" (Charles Krauthammer 1990 essay, developed by neoconservatives Robert Kagan + William Kristol + others): US singular dominance after Soviet collapse; opportunity to be used; preventive war + regime change + democracy promotion through force. Shared expectation: Western dominance continues; resistance marginal; no system-level conflicts. Subsequent decades substantially challenged.`,
              audioPrompt: `The early-1990s consensus among Western observers was triumphalist, {name}. The Soviet collapse demonstrated that liberal democracy and market capitalism had decisively won as a model of political-economic organization. Francis Fukuyama's "The End of History and the Last Man" from 1992, expanding a 1989 essay, was the most prominent statement. Fukuyama argued that liberal democracy combined with market capitalism represented the endpoint of human political-economic evolution; the major ideological alternatives, fascism and communism, had failed. The Washington Consensus framework, with the term coined by John Williamson in 1989, articulated the economic policy package that was supposed to spread globally: trade liberalization, financial deregulation, privatization of state enterprises. The "unipolar moment" framework from Charles Krauthammer's 1990 essay emphasized US singular dominance after Soviet collapse; the US was the only remaining superpower with global military reach; the moment of unipolar US dominance was an opportunity to be used. Neoconservative writers including Robert Kagan, William Kristol, and Charles Krauthammer developed the framework into specific policy positions including preventive war, regime change, and democracy promotion through force.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What 1991 Actually Started`,
          paragraphs: [
            `The actual post-Cold War trajectory has been substantially different from what was expected. Three patterns have emerged across the past three decades and continue to develop. The cases ahead illustrate each pattern in specific detail.`,
            `Pattern 1: Institutional incorporation, with limits. Eastern European countries that had been Soviet satellites or part of the USSR pursued integration into Western institutions (NATO, EU). The first wave of NATO expansion (1999) added the Czech Republic, Hungary, and Poland; the second wave (2004) added Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, and Slovenia; subsequent expansion added Albania and Croatia (2009), Montenegro (2017), North Macedonia (2020), Finland (2023), Sweden (2024). EU expansion paralleled with major waves in 2004 (10 countries) and 2007 (Bulgaria, Romania), then Croatia 2013. The pattern was: democratic institutions adopted, market economies established (with substantial difficulty and inequality during transitions), Western integration achieved. Russia followed a substantially different trajectory: after the chaotic 1990s under Yeltsin (with the 1998 financial collapse), Vladimir Putin's rise (Prime Minister 1999, President 2000) consolidated power under what's now called "managed democracy" or hybrid authoritarian regime. Russia's relationship with Western institutions has progressively deteriorated, culminating in the February 2022 invasion of Ukraine.`,
            `Pattern 2: Unipolar overreach and its consequences. The "unipolar moment" framework predicted US dominance would continue and that US leadership could shape international order. The actual exercise of unipolar power, particularly in the Iraq War (March 2003), demonstrated both the extent of US military capability and its limits. The Iraq War was conducted on stated justifications (WMDs, regime change, democracy promotion) that turned out to be substantially false (no WMDs were found) or much more difficult than anticipated (Iraqi state collapse, sectarian civil war, ISIS rise, regional destabilization). Cost estimates: ~$3-6 trillion in direct and indirect US costs over decades; ~200,000-650,000+ Iraqi deaths (varying methodology; Lancet 2006 study estimated ~650,000 violent deaths; Iraq Body Count estimates ~200,000+ documented civilian deaths; total deaths attributable to war substantially higher); ~4,500 US military deaths. The "unipolar moment" was substantially squandered; subsequent US foreign policy has operated with diminished capacity to impose outcomes.`,
            `Pattern 3: Alternative model emergence. China's trajectory has been the most consequential single development of the post-Cold War period. After Tiananmen Square crackdown (June 4, 1989), Deng Xiaoping continued market reforms under unchanged one-party rule. WTO entry (December 2001) integrated China with global capitalism while preserving political authoritarianism. Xi Jinping's accession (Party leadership 2012, President 2013) consolidated power, intensified anti-corruption campaigns, increased repression in Xinjiang and Hong Kong, and projected influence globally through Belt and Road Initiative (2013+). Chinese GDP grew from approximately $400 billion in 1990 to approximately $18 trillion in 2024 (in current dollars; second-largest economy in the world after US). China has become a peer competitor to the US economically and increasingly militarily, while maintaining political and economic models substantially different from Western liberal democracy + market capitalism. The "End of History" thesis assumed no major ideological alternatives would emerge; China presents one.`,
            `What these patterns mean together. The 1991 expectation was that the future would be Western. The 2024 reality is that the future is contested: Western institutions exist and have expanded, but they're confronted by Russian rejection (with explicit military challenge), Chinese alternative-model competition, multiple regional powers asserting independence (Brazil, India, Turkey, Saudi Arabia, others positioning between US and China), and substantial internal challenges within Western democracies themselves (rise of authoritarian-leaning populism in multiple Western countries; democratic backsliding in Hungary, Poland; US institutional stress including January 6, 2021). The "end of history" was premature.`,
          ],
          image: `/voyager-assets/history/l12-s2-trajectory.webp`,
          imageCaption: `Three patterns of post-Cold War trajectory: (1) institutional incorporation with limits (NATO expansion 1999 + 2004 + onward; EU expansion 2004 + 2007 + 2013; Russia divergent, Putin from 1999/2000); (2) unipolar overreach (Iraq War March 2003 (~200K-650K+ Iraqi deaths, ~4,500 US, ~$3-6T cost; "unipolar moment" squandered); (3) alternative model emergence (China rise 1989-present (Tiananmen → Deng continued reform → WTO 2001 → Xi 2012/2013 → ~$18T GDP).`,
          vocab: [
            {
              word: `actual post-Cold War trajectory`,
              definition: `Substantially different from 1991 expectations. Three patterns. Pattern 1: institutional incorporation with limits. Eastern European NATO expansion 1999 (Czech Republic, Hungary, Poland) + 2004 (Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, Slovenia) + Albania/Croatia 2009 + Montenegro 2017 + North Macedonia 2020 + Finland 2023 + Sweden 2024; EU expansion 2004 (10 countries) + 2007 (Bulgaria, Romania) + Croatia 2013. Russia diverged: Yeltsin chaos 1990s + 1998 financial collapse → Putin (PM 1999, President 2000) consolidation + "managed democracy" + Feb 2022 Ukraine invasion. Pattern 2: unipolar overreach. Iraq War March 2003: stated justifications (WMDs, regime change, democracy promotion) substantially false (no WMDs found) or much more difficult than anticipated; Iraqi state collapse + sectarian civil war + ISIS rise + regional destabilization. Cost ~$3-6 trillion US; ~200K-650K+ Iraqi deaths (Lancet 2006 ~650K violent; Iraq Body Count ~200K+ documented civilian); ~4,500 US military deaths. Pattern 3: alternative model emergence. China trajectory most consequential single development. Tiananmen crackdown June 4 1989 → Deng Xiaoping continued reforms under unchanged one-party rule → WTO entry Dec 2001 → Xi Jinping accession (Party 2012, President 2013) consolidation + Xinjiang/Hong Kong repression + Belt and Road 2013+ → Chinese GDP $400B (1990) to ~$18T (2024), second-largest economy. Together: 1991 expectation of Western future; 2024 reality of contested future. Western institutions exist and expanded but confronted by Russian rejection + Chinese alternative-model competition + multiple regional powers + Western internal challenges (authoritarian-leaning populism, democratic backsliding Hungary/Poland, US institutional stress January 6 2021).`,
              audioPrompt: `The actual post-Cold War trajectory has been substantially different from what was expected, {name}. Three patterns have emerged across the past three decades. Pattern 1: institutional incorporation, with limits. Eastern European countries pursued integration into Western institutions. The first wave of NATO expansion in 1999 added the Czech Republic, Hungary, and Poland; the second wave in 2004 added Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, and Slovenia. Russia followed a substantially different trajectory: after the chaotic 1990s under Yeltsin, Vladimir Putin's rise as Prime Minister in 1999 and President in 2000 consolidated power. Pattern 2: unipolar overreach and its consequences. The Iraq War in March 2003 was conducted on stated justifications that turned out to be substantially false; no WMDs were found. Cost estimates: approximately 3 to 6 trillion dollars in direct and indirect US costs over decades; approximately 200,000 to 650,000+ Iraqi deaths; approximately 4,500 US military deaths. Pattern 3: alternative model emergence. China's trajectory has been the most consequential single development of the post-Cold War period. Chinese GDP grew from approximately 400 billion dollars in 1990 to approximately 18 trillion dollars in 2024.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Cases In Brief Before The Deep Dive`,
          paragraphs: [
            `The three cases ahead examine each pattern in detail. Brief overview here orients you for the deep engagement that follows.`,
            `Case 1: Eastern Europe / Russia transition 1989-present. The Velvet Revolutions across Eastern Europe (1989) overthrew communist governments through largely peaceful mass mobilization (Poland's Solidarity from 1980, East Germany's mass protests, Czechoslovakia's Civic Forum led by Václav Havel, Romania's violent overthrow of Ceaușescu the December 1989 exception). Eastern European countries (Czech Republic, Hungary, Poland, Slovakia, Slovenia, Baltics) pursued institutional integration with the West through NATO (1999 first wave, 2004 second wave) and EU (2004 major wave). Russia took a different path: rapid market reforms ("shock therapy") under Yegor Gaidar and Anatoly Chubais in early 1990s produced massive inequality and dramatic life-expectancy decline; oligarchs (a small number of well-connected individuals) acquired enormous wealth through privatization of state assets; 1998 financial collapse traumatized the population; Yeltsin's chaotic later presidency ended with Putin's appointment as Prime Minister in August 1999 and presidency from May 2000. Putin's two-decade-plus rule has progressively dismantled democratic institutions (free press constrained from early 2000s, opposition figures imprisoned or killed, electoral processes manipulated) and culminated in the February 2022 invasion of Ukraine.`,
            `Case 2: Iraq War and the unipolar moment 2003-2011. The September 11, 2001 attacks killed ~2,977 people and triggered US military intervention in Afghanistan (October 2001). The Bush administration, with substantial neoconservative influence (Donald Rumsfeld, Paul Wolfowitz, Richard Perle), expanded the response to Iraq, claiming Iraq possessed weapons of mass destruction and had connections to terrorism. The March 2003 invasion succeeded militarily in days but produced sustained insurgency, sectarian civil war, regional destabilization, and ultimately the emergence of ISIS (declared caliphate 2014, defeated 2017-2019 but ongoing regional consequences). Estimates of deaths vary by methodology: Iraq Body Count documents ~200,000+ civilian deaths; the Lancet 2006 mortality study estimated approximately 650,000 violent excess deaths from 2003 to mid-2006; total deaths attributable to war effects (including indirect: disease, displacement, infrastructure collapse) substantially higher. US military deaths in Iraq ~4,500; wounded ~32,000. Direct and indirect US fiscal cost estimated at ~$3-6 trillion across decades. The "unipolar moment" was substantially squandered: US power was demonstrated as conventional military strength but limited as state-building or regional-shaping capacity.`,
            `Case 3: China's rise 1989-present. Tiananmen Square crackdown (June 4, 1989) killed ~200-300 to over 10,000 (estimates range widely; declassified UK diplomatic documents 2017 suggest higher estimates) and substantially ended any prospect of political reform alongside economic reform. Deng Xiaoping's "Southern Tour" (1992) restarted economic reform under firmly preserved one-party political rule. China's accession to the WTO (December 2001) substantially integrated China with global capitalism. Economic growth has been sustained and dramatic: ~$400 billion GDP (1990) to ~$18 trillion (2024); approximately 800 million Chinese people lifted from extreme poverty over the period (World Bank framing). Xi Jinping's accession (Party 2012, President 2013, indefinite tenure since constitutional amendment 2018) consolidated authoritarian rule, intensified anti-corruption campaigns (which served both genuine purpose and political consolidation), expanded repression in Xinjiang (mass detention of Uyghurs in "re-education camps," designated genocide by US 2021 + UK + Canada + Netherlands; China denies) and Hong Kong (National Security Law 2020 substantially ended Hong Kong's distinct political space), projected influence globally through Belt and Road Initiative (2013+) and other mechanisms. China now competes economically and increasingly militarily with the US while explicitly rejecting Western political models. The Communist Party's official position is that "socialism with Chinese characteristics" represents alternative to Western liberal democracy + market capitalism, with the alternative gaining adherents in some developing countries.`,
            `One framing as we go to the cases. Each case is presented as Case Study with options to engage. The options aren't quiz questions with one right answer; they're different interpretive framings of what mattered most in each case. The outcomes explain what scholarship and current analysis support while engaging genuine ambiguity. The framing developed across these cases will substantially shape readings of L13 (Middle East), L14 (China's Rise, deeper engagement), L15 (Africa), L16 (Latin America) ahead.`,
          ],
          image: `/voyager-assets/history/l12-s3-three-cases.webp`,
          imageCaption: `Three cases. (1) Eastern Europe + Russia: Velvet Revolutions 1989 (Solidarity Poland, Civic Forum Czechoslovakia, Romania violent exception); NATO + EU expansion; Russia "shock therapy" 1990s + Yeltsin + Putin from 1999/2000 + Feb 2022 Ukraine invasion. (2) Iraq War 2003: 9/11 + Afghanistan + Iraq invasion + WMD claims false + ISIS + ~200K-650K+ Iraqi dead + ~4,500 US + ~$3-6T cost. (3) China: Tiananmen 1989 + Deng continued reform + WTO 2001 + Xi 2012/2013 + Xinjiang + Hong Kong + Belt and Road + $18T GDP.`,
          vocab: [
            {
              word: `three cases of post-Cold War order`,
              definition: `Three patterns illustrated by three specific cases. Case 1: Eastern Europe / Russia transition 1989-present. Velvet Revolutions 1989 (Poland's Solidarity from 1980, East Germany mass protests, Czechoslovakia's Civic Forum led by Václav Havel, Romania violent overthrow of Ceaușescu Dec 1989 as exception). Eastern European NATO expansion 1999 + 2004 + EU 2004 + 2007. Russia: "shock therapy" under Yegor Gaidar + Anatoly Chubais produced massive inequality + life-expectancy decline; oligarchs acquired wealth through privatization; 1998 financial collapse; Yeltsin → Putin (PM Aug 1999, President May 2000) → "managed democracy" + free press constrained + opposition imprisoned/killed + electoral manipulation → Feb 2022 Ukraine invasion. Case 2: Iraq War + unipolar moment 2003-2011. 9/11 attacks Sept 11, 2001 (~2,977 dead) → US Afghanistan invasion Oct 2001 → Bush administration + neoconservatives (Donald Rumsfeld, Paul Wolfowitz, Richard Perle) expanded to Iraq → March 2003 invasion succeeded militarily in days but produced sustained insurgency + sectarian civil war + ISIS rise (caliphate 2014, defeated 2017-2019). Deaths: Iraq Body Count ~200K+ civilian; Lancet 2006 ~650K violent excess deaths through mid-2006; substantially higher total. US military ~4,500 dead + ~32,000 wounded. Cost ~$3-6 trillion. Case 3: China's rise 1989-present. Tiananmen crackdown June 4, 1989 (~200-300 to 10K+ killed) + Deng Xiaoping "Southern Tour" 1992 restarted reform under one-party rule + WTO entry Dec 2001 + Xi Jinping (Party 2012, President 2013, indefinite tenure 2018) + Xinjiang Uyghur detention (US/UK/Canada/Netherlands designated genocide; China denies) + Hong Kong National Security Law 2020 + Belt and Road 2013+. GDP $400B (1990) → ~$18T (2024); ~800M Chinese lifted from extreme poverty (World Bank framing).`,
              audioPrompt: `Three cases ahead examine each pattern in detail, {name}. Case 1: Eastern Europe / Russia transition from 1989 to present. The Velvet Revolutions across Eastern Europe in 1989 overthrew communist governments through largely peaceful mass mobilization: Poland's Solidarity from 1980, East Germany's mass protests, Czechoslovakia's Civic Forum led by Václav Havel, and Romania's violent overthrow of Ceaușescu in December 1989 as the exception. Russia took a different path: rapid market reforms known as "shock therapy" produced massive inequality and dramatic life-expectancy decline; oligarchs acquired enormous wealth through privatization; the 1998 financial collapse traumatized the population. Putin became Prime Minister in August 1999 and President from May 2000. Case 2: Iraq War and the unipolar moment from 2003 to 2011. The September 11, 2001 attacks killed approximately 2,977 people and triggered US military intervention. The March 2003 invasion of Iraq succeeded militarily in days but produced sustained insurgency, sectarian civil war, and ultimately the emergence of ISIS. Case 3: China's rise. Chinese GDP grew from approximately 400 billion dollars in 1990 to approximately 18 trillion in 2024.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What These Cases Mean For Your Generation`,
          paragraphs: [
            `The three cases ahead aren't historical curiosities; they're the immediate context for the world you'll inherit and shape. Specific dimensions worth tracking before the cases.`,
            `The Russian challenge. Russia's invasion of Ukraine (February 24, 2022) represents the most significant European war since 1945 and the first time a major nuclear power has directly invaded a neighboring country in pursuit of territorial conquest in the post-Cold War period. Russian rhetoric explicitly rejects post-1991 European order, claims Ukraine has no legitimate independent existence, and threatens nuclear use if Russian conventional military fails. As of mid-2024, the war has killed hundreds of thousands (Ukrainian and Russian military deaths likely in the high hundreds of thousands; civilian deaths in the tens of thousands; displaced approximately 10 million Ukrainians). The war's outcome will substantially shape European security architecture for decades and substantially shape what kind of post-Cold War order continues to exist.`,
            `The Iraq War's continuing consequences. The Iraq War didn't end in 2011 with US troop withdrawal; the consequences continue to ripple. ISIS emerged from the Iraqi insurgency, declared a caliphate (2014), controlled territory in Iraq and Syria, and was substantially defeated by 2017-2019 but remains operationally active. The Syrian civil war (2011-present), with approximately 500,000 deaths and over 13 million displaced, was substantially influenced by Iraqi destabilization. Iran's regional influence expanded substantially because the Iraq War removed Iran's primary regional rival (Saddam Hussein's Iraq) and produced a Shia-majority Iraq government largely aligned with Iran. The Iraq War's costs extended far beyond Iraq's borders.`,
            `China's continuing trajectory. China is the most consequential single development for your generation's future. By 2030 or so, China is likely to be the world's largest economy by some measures (already largest by purchasing power parity as of approximately 2014). Chinese military modernization has substantially closed gaps with US in some areas; Chinese diplomatic influence in Asia, Africa, Latin America, and elsewhere expanded substantially through Belt and Road and other initiatives; Chinese economic integration with global supply chains is deep and hard to disentangle. US-China strategic competition substantially shapes current foreign policy debates and will substantially shape your adult lifetime. The question of whether US-China competition becomes outright cold war (or hot war, particularly over Taiwan) is among the most important for global politics in the next several decades.`,
            `Internal challenges within Western democracies. The post-Cold War assumption that Western liberal democracy was settled has been substantially challenged from within. Authoritarian-leaning populism has risen in multiple Western countries (Hungary's Orbán since 2010 + 2018 + 2022; Poland's PiS 2015-2023; multiple European parties; Bolsonaro Brazil 2018-2022; Trump in US 2016 + 2024; Modi India 2014+); democratic institutions are under stress in multiple settings; January 6, 2021 in the US demonstrated capacity for democratic backsliding even in established democracies. Whether Western democracies stabilize or continue to erode substantially shapes what the post-Cold War order looks like going forward.`,
            `One framing before the cases. Engaging post-Cold War history at 12 isn't an academic exercise. It's the immediate context for the political world you'll engage as a voter, citizen, possibly as a participant in foreign policy debates and decisions, and definitely as someone whose life will be shaped by how these dynamics develop. The framework you build today develops capacity to engage across decades. Onward to the cases.`,
          ],
          image: `/voyager-assets/history/l12-s4-your-generation.webp`,
          imageCaption: `Cases as immediate context for your inherited world. Russian challenge: Feb 24 2022 Ukraine invasion, most significant European war since 1945, hundreds of thousands dead, ~10M Ukrainians displaced, Russian nuclear threats. Iraq War continuing: ISIS, Syrian civil war 2011-present (~500K dead + 13M displaced), Iranian regional expansion. China trajectory: likely largest economy by 2030; Taiwan question. Western internal challenges: Hungary/Poland democratic backsliding, January 6 2021, populism rising in multiple countries.`,
          vocab: [
            {
              word: `post-Cold War cases as your inherited world`,
              definition: `Three cases as immediate context for your generation. Russian challenge: Feb 24 2022 Ukraine invasion most significant European war since 1945; first time major nuclear power directly invaded neighbor for territorial conquest in post-Cold War period; Russian rhetoric explicitly rejects post-1991 European order; nuclear threats if conventional military fails. As of mid-2024: hundreds of thousands killed (Ukrainian + Russian military high hundreds of thousands; civilian tens of thousands; ~10M Ukrainians displaced). Iraq War continuing consequences: ISIS emerged from Iraqi insurgency, caliphate declared 2014, substantially defeated 2017-2019 but operationally active; Syrian civil war 2011-present (~500K deaths + 13M+ displaced) substantially influenced by Iraqi destabilization; Iranian regional influence expanded because Iraq War removed Saddam's Iraq and produced Shia-majority Iraq government largely aligned with Iran. China trajectory: most consequential single development. By 2030 likely world's largest economy by some measures (already largest by PPP from ~2014); Chinese military modernization closing gaps; diplomatic influence in Asia/Africa/Latin America through Belt and Road; economic integration deep; US-China strategic competition; Taiwan question. Internal Western challenges: authoritarian-leaning populism (Hungary Orbán 2010+, Poland PiS 2015-2023, Bolsonaro Brazil, Trump US 2016 + 2024, Modi India 2014+); democratic institutions under stress; January 6 2021 US.`,
              audioPrompt: `The three cases ahead aren't historical curiosities; they're the immediate context for the world you'll inherit and shape, {name}. The Russian challenge: Russia's invasion of Ukraine on February 24, 2022 represents the most significant European war since 1945 and the first time a major nuclear power has directly invaded a neighboring country in pursuit of territorial conquest in the post-Cold War period. As of mid-2024, the war has killed hundreds of thousands and displaced approximately 10 million Ukrainians. The Iraq War's continuing consequences: ISIS emerged from the Iraqi insurgency; the Syrian civil war from 2011 onward, with approximately 500,000 deaths and over 13 million displaced, was substantially influenced by Iraqi destabilization; Iran's regional influence expanded substantially. China's continuing trajectory: China is the most consequential single development for your generation's future. By 2030 or so, China is likely to be the world's largest economy by some measures, already largest by purchasing power parity as of approximately 2014. Internal challenges within Western democracies: authoritarian-leaning populism has risen in multiple Western countries, and democratic institutions are under stress in multiple settings.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Resources And Framing Before The Cases`,
          paragraphs: [
            `One framing as we move to the cases. Each case is presented as Case Study with options to engage. The options aren't multiple-choice quiz questions where one is "right" and others are "wrong"; they're different interpretive framings of what mattered most in each case. The outcomes section explains what scholarship and current analysis support while engaging genuine ambiguity.`,
            `Useful sources for further reading. For the Russian-Eastern European transition: Stephen Kotkin's extensive scholarship on Soviet and post-Soviet Russia (multiple volumes on Stalin and post-Stalin USSR); Anna Politkovskaya's journalism (Politkovskaya was murdered in 2006; the assassination was linked by some investigations to Russian state); Masha Gessen's "The Future is History" (2017); Vladislav Zubok's "Collapse" (2021); Anne Applebaum's work on Eastern Europe; Timothy Snyder's "Bloodlands" + ongoing essays on contemporary Eastern Europe. For the Iraq War: Thomas Ricks "Fiasco" (2006) on the war's early years; Rajiv Chandrasekaran "Imperial Life in the Emerald City" (2006) on Coalition Provisional Authority Iraq; Ahmed Hashim "Insurgency and Counter-Insurgency in Iraq" (2006); Patrick Cockburn ongoing journalism. For China: Stephen Kotkin's various writings; Susan Shirk "China: Fragile Superpower" (2007) and ongoing work; Elizabeth Economy "The Third Revolution" (2018) on Xi Jinping; Sebastian Heilmann "Red Swan" (2018); ongoing scholarship from China specialists. Multiple think tank reports and journalism continue across all three cases.`,
            `One last framing. The post-Cold War period is recent and ongoing. Cases discussed here are subject to continued developments that may substantially change how scholars and analysts interpret them across coming years. Engaging the cases at this stage builds framework rather than producing settled conclusions; you'll continue developing the framework as the events themselves continue developing. The capacity for sustained engagement across decades is the work.`,
          ],
          image: `/voyager-assets/history/l12-s5-resources.webp`,
          imageCaption: `Resources: Russia/Eastern Europe (Stephen Kotkin, Politkovskaya, Masha Gessen "Future is History" 2017, Vladislav Zubok "Collapse" 2021, Anne Applebaum, Snyder); Iraq (Thomas Ricks "Fiasco" 2006, Chandrasekaran "Imperial Life in the Emerald City" 2006, Patrick Cockburn); China (Susan Shirk, Elizabeth Economy "The Third Revolution" 2018, Heilmann "Red Swan" 2018). Post-Cold War period recent and ongoing; cases subject to continued developments.`,
          vocab: [
            {
              word: `resources and framing before cases`,
              definition: `Each case Case Study with options as different interpretive framings; outcomes explain what scholarship + current analysis support while engaging genuine ambiguity. Useful further reading. Russia + Eastern Europe: Stephen Kotkin extensive scholarship on Soviet/post-Soviet Russia (multiple volumes on Stalin and post-Stalin USSR); Anna Politkovskaya journalism (murdered 2006 - assassination linked by some investigations to Russian state); Masha Gessen "The Future is History" 2017; Vladislav Zubok "Collapse" 2021; Anne Applebaum work on Eastern Europe; Timothy Snyder "Bloodlands" + ongoing contemporary essays. Iraq War: Thomas Ricks "Fiasco" 2006; Rajiv Chandrasekaran "Imperial Life in the Emerald City" 2006 on Coalition Provisional Authority; Ahmed Hashim "Insurgency and Counter-Insurgency in Iraq" 2006; Patrick Cockburn ongoing journalism. China: Stephen Kotkin various writings; Susan Shirk "China: Fragile Superpower" 2007 + ongoing; Elizabeth Economy "The Third Revolution" 2018 on Xi Jinping; Sebastian Heilmann "Red Swan" 2018; ongoing scholarship from China specialists. Post-Cold War period recent and ongoing; subject to continued developments. Engaging cases at this stage builds framework rather than producing settled conclusions; capacity for sustained engagement across decades is the work.`,
              audioPrompt: `One framing as we move to the cases, {name}. Each case is presented as Case Study with options to engage. The options aren't multiple-choice quiz questions where one is right and others are wrong; they're different interpretive framings of what mattered most in each case. Useful sources for further reading. For the Russian-Eastern European transition: Stephen Kotkin's extensive scholarship on Soviet and post-Soviet Russia; Anna Politkovskaya's journalism. Politkovskaya was murdered in 2006 in an assassination linked by some investigations to Russian state; Masha Gessen's "The Future is History" from 2017; Vladislav Zubok's "Collapse" from 2021. For the Iraq War: Thomas Ricks "Fiasco" from 2006; Rajiv Chandrasekaran "Imperial Life in the Emerald City" from 2006 on Coalition Provisional Authority Iraq. For China: Susan Shirk "China: Fragile Superpower" from 2007; Elizabeth Economy "The Third Revolution" from 2018 on Xi Jinping. The post-Cold War period is recent and ongoing.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l12-case-study`,
          type: `case-study`,
          headline: `Three Patterns Of Post-Cold War Order`,
          intro: `{name}, three cases. Each illustrates a different pattern. Engage the framings, then synthesize what the three cases together suggest about post-Cold War world order.`,
          cases: [
            {
              id: `eastern-europe-russia`,
              title: `Eastern Europe and Russia 1989-Present`,
              context: `The Velvet Revolutions across Eastern Europe (1989) overthrew communist governments through largely peaceful mass mobilization. The transitions to capitalism + democracy followed dramatically different paths. Eastern European countries (Czech Republic, Hungary, Poland, Slovakia, Slovenia, Baltics) pursued integration with the West: NATO (1999 first wave with Czech Republic, Hungary, Poland; 2004 second wave with Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, Slovenia) and EU (2004 major expansion of 10 countries; 2007 Bulgaria, Romania; Croatia 2013). Russia took a different path: rapid "shock therapy" market reforms under Yegor Gaidar + Anatoly Chubais produced massive inequality, dramatic life-expectancy decline (Russian male life expectancy fell from ~63 to ~57 in early 1990s before recovering), and oligarch acquisition of state assets through privatization auctions; 1998 financial collapse traumatized the population. Vladimir Putin emerged from KGB/FSB background; became Prime Minister August 1999 and President May 2000; consolidated power progressively across the 2000s and 2010s through media constraints (Politkovskaya murdered 2006; multiple other journalists killed), opposition imprisonment (Khodorkovsky 2003-2013; Navalny imprisoned multiple times and died in prison 2024), electoral manipulation, constitutional amendments allowing extended tenure (2020 amendment allows Putin to remain president until 2036). The February 24, 2022 invasion of Ukraine has killed hundreds of thousands, displaced approximately 10 million Ukrainians, and produced explicit Russian rejection of post-1991 European order. Hungarian and Polish democratic backsliding within EU (Hungary's Orbán since 2010 + 2018 + 2022; Poland's PiS 2015-2023) complicates the picture; institutional incorporation didn't guarantee continued liberal democracy.`,
              question: `What's the most important framing for understanding Eastern Europe and Russia after 1989?`,
              options: [
                {
                  id: `triumphant`,
                  label: `Triumphant Western expansion: Eastern European integration with NATO and EU substantially worked; Russia's divergent path is anomaly, not pattern.`,
                  outcome: `Substantially overstates Eastern European success and substantially understates broader pattern. Eastern European countries did achieve substantial integration with Western institutions; they're now part of NATO, EU, and other structures; they've made substantial economic gains. But: democratic backsliding in Hungary and Poland shows institutional incorporation didn't fully guarantee continued democracy; the eastern Balkans (Albania, Bosnia, Kosovo, North Macedonia, Serbia) remain incompletely integrated; Russia's divergent trajectory has produced direct military challenge to European order. The "triumphant" framing misses that the actual story is significantly more contested.`,
                  insight: `Eastern European integration succeeded in part but had limits visible in democratic backsliding (Hungary, Poland). The triumphant framing doesn't account for what's happened since 2010s.`,
                },
                {
                  id: `incorporation-with-limits`,
                  label: `Institutional incorporation worked with significant limits: Eastern European countries integrated but face democratic challenges; Russia diverged because of specific 1990s trauma and political choices.`,
                  outcome: `Substantially closest to current scholarly consensus. Evidence: Eastern European countries achieved NATO + EU membership and substantial economic development but face democratic backsliding (Hungary Orbán 2010+, Poland PiS 2015-2023, others); Russia's 1990s "shock therapy" experience (massive inequality, life-expectancy decline, oligarchic wealth concentration, 1998 financial collapse) produced substantial popular resentment of Western model and made Putin's authoritarian alternative politically viable; Putin's specific choices then consolidated this trajectory. The framework recognizes incorporation worked while accounting for limits and divergences.`,
                  insight: `Institutional incorporation produced real gains and significant limits. Russia's divergence wasn't preordained; it reflects specific 1990s choices and Putin's political project.`,
                },
                {
                  id: `failed-expansion`,
                  label: `NATO/EU expansion was provocative imperial overreach that caused Russian reaction; Western institutions should not have expanded eastward.`,
                  outcome: `This framing exists in serious scholarship (John Mearsheimer most prominent, several other realist scholars) and substantially overlaps Russian official narrative justifying the Ukraine invasion. The claim: NATO expansion threatened Russian security and produced predictable Russian response. Problems with the framing: Eastern European countries actively sought NATO membership for protection from possible Russian aggression (a desire that has been substantially vindicated by Russia's behavior); NATO expansion in the 1990s and 2000s came at Russian moments of relative weakness when Russia couldn't credibly act on objections; the "Russia was provoked" framing makes Western actors responsible for choices that Eastern European countries themselves made; Russia's invasion of Ukraine in 2022 happened despite NATO not having admitted Ukraine and despite NATO's substantial commitments to not threaten Russia. The realist position has serious defenders but is not mainstream in Eastern European studies or among current US foreign policy scholars.`,
                  insight: `The "provocation by expansion" framing exists in serious scholarship but is contested. Eastern European countries' agency in seeking membership and Russia's choices in response are both real.`,
                },
              ],
              correctOptions: [`incorporation-with-limits`],
              synthesis: `Eastern Europe and Russia after 1989 show institutional incorporation with significant limits. Eastern European countries achieved NATO + EU membership but face democratic backsliding in Hungary and Poland. Russia's divergent trajectory resulted from specific 1990s trauma (shock therapy, oligarch capture, 1998 collapse) and specific political choices (Putin's consolidation from 1999/2000 onward), culminating in February 2022 Ukraine invasion. The "triumphant" and "failed expansion" framings each capture part of the truth while substantially overstating their case. The current picture is contested: Eastern European integration succeeded substantially; Russia diverged sharply; democratic backsliding within EU complicates the picture; Russian invasion of Ukraine has reopened questions about European security architecture for decades to come.`,
            },
            {
              id: `iraq-war`,
              title: `The Iraq War and the Unipolar Moment 2003-2011`,
              context: `September 11, 2001: al-Qaeda attacks on World Trade Center and Pentagon killed ~2,977 people; produced unprecedented US military response. October 2001: US-led invasion of Afghanistan removed Taliban government and substantially disrupted al-Qaeda; Afghanistan war continued for 20 years (US withdrawal August 2021). The George W. Bush administration, with substantial neoconservative influence (Vice President Dick Cheney, Secretary of Defense Donald Rumsfeld, Deputy Defense Secretary Paul Wolfowitz, Defense Policy Board chair Richard Perle), expanded the response beyond direct counter-terrorism. The Bush Doctrine (articulated in National Security Strategy September 2002) committed the US to "preventive war" against potential threats. March 19, 2003: US-led coalition (US, UK, Australia, Poland, with smaller contingents from others, sometimes called the "coalition of the willing") invaded Iraq, claiming Iraq possessed weapons of mass destruction and had connections to terrorism. The invasion succeeded militarily in 3 weeks; Saddam Hussein's government fell; Saddam was captured December 2003 and executed December 2006. No WMDs were found (the official Iraq Survey Group reported in 2004 and 2005 that Iraq had no WMD stockpiles and no active programs at time of invasion; sanctions had substantially worked). The Coalition Provisional Authority (May 2003-June 2004 under Paul Bremer) dissolved the Iraqi army and de-Ba'athified the government, producing rapid emergence of insurgency. Sectarian civil war 2006-2008 killed tens of thousands per year. ISIS emerged from al-Qaeda in Iraq and Sunni insurgent networks; declared caliphate June 2014; controlled substantial territory in Iraq and Syria; was substantially defeated by 2017-2019 (Mosul retaken July 2017; Raqqa October 2017). The Lancet 2006 mortality study estimated ~650,000 violent excess deaths in Iraq from 2003 to mid-2006; Iraq Body Count documents over 200,000 civilian deaths through documented incidents; total deaths attributable to war effects substantially higher with indirect effects (disease, infrastructure collapse, displacement). US military deaths in Iraq ~4,500; wounded ~32,000+. Direct and indirect US fiscal cost estimated at ~$3-6 trillion across decades (multiple studies including Linda Bilmes and Joseph Stiglitz). Iranian regional influence expanded substantially because Iraq War removed Iran's primary regional rival; Shia-majority Iraqi government largely aligned with Iran emerged. Syrian civil war (2011-present) ~500,000 deaths + 13 million+ displaced was substantially influenced by Iraqi destabilization.`,
              question: `What's the most important framing for understanding the Iraq War?`,
              options: [
                {
                  id: `intelligence-failure`,
                  label: `Intelligence failure: Bush administration was misinformed about WMDs; invasion was reasonable given the (false) information available; subsequent problems were execution failures.`,
                  outcome: `This framing exists in some accounts but is substantially rejected by serious scholarship. Evidence: extensive documentation has shown that intelligence on Iraqi WMDs was substantially manipulated rather than simply wrong (Joseph Wilson's exposure of forged Niger documents 2003; Valerie Plame affair; Robb-Silberman Commission 2005; British Iraq Inquiry 2009-2016); UN weapons inspectors in early 2003 (Hans Blix's IAEA reports) were finding no WMDs and were forced out by US invasion; the Bush administration's claims about Iraq-al-Qaeda connections were known to be false within the administration. The "intelligence failure" framing protects decision-makers from accountability for what was actually decision-making.`,
                  insight: `The "intelligence failure" framing minimizes deliberate manipulation that substantial scholarship has documented. The information wasn't simply wrong; it was substantially shaped by the political project.`,
                },
                {
                  id: `unipolar-overreach`,
                  label: `Unipolar overreach: the Bush administration and neoconservative project used the "unipolar moment" for ambitious goals that exceeded US capacity to achieve.`,
                  outcome: `Substantially closest to current scholarly consensus. Evidence: the project was explicitly articulated (Project for the New American Century from 1997; National Security Strategy 2002 "Bush Doctrine"; multiple neoconservative writings) for democratic transformation of Middle East through regime change as opportunity to use unipolar power; the actual outcome demonstrated US military strength but limited US capacity to shape state-building and regional dynamics; Iraqi state collapse + sectarian war + ISIS rise + Iranian regional expansion are direct results of the project's failure; the Iraq War substantially weakened the "unipolar moment" by demonstrating limits to US power. The framework recognizes ambitious goals + insufficient capacity to achieve.`,
                  insight: `The unipolar overreach framework captures both the ambitious project and its limits. The Iraq War's failure shaped subsequent US foreign policy substantially.`,
                },
                {
                  id: `imperial-war`,
                  label: `Imperial war: the Iraq War was about oil, regional control, and US imperial interests; democratic framing was cover.`,
                  outcome: `This framing exists in serious scholarship (Chalmers Johnson "Sorrows of Empire" 2004; multiple critical accounts) and captures some aspects of US motivations (oil considerations were not absent; regional strategic position was a factor). But it substantially underweights the genuine neoconservative ideological project: many neoconservatives genuinely believed democracy promotion through regime change would produce regional transformation; ideology mattered substantially as well as material interests. The "imperial war" framing has explanatory power but doesn't capture the full picture of why the war happened the way it did.`,
                  insight: `The imperial framing captures real US interests and is closer to truth than the "intelligence failure" framing. But it underweights the genuine ideological project that the neoconservative movement represented.`,
                },
              ],
              correctOptions: [`unipolar-overreach`],
              synthesis: `The Iraq War was unipolar overreach: an ambitious neoconservative project to use the post-Cold War US unipolar moment for regional transformation through regime change. The project failed substantially: WMDs not found (substantially because they didn't exist); democratic transformation didn't occur; Iraq experienced state collapse and sectarian civil war; ISIS emerged from the wreckage; Iranian regional influence expanded; Syrian civil war was destabilized. Costs were massive: ~200,000-650,000+ Iraqi deaths through documented incidents and excess mortality; ~4,500 US military deaths; ~$3-6 trillion US fiscal cost. The "unipolar moment" was substantially squandered; subsequent US foreign policy has operated with diminished capacity to impose outcomes. The "intelligence failure" framing minimizes deliberate manipulation; the "imperial war" framing captures real US interests but underweights genuine ideological project. The Iraq War's continuing consequences (ISIS, Syria, Iran's expansion, regional destabilization) substantially shape current geopolitics.`,
            },
            {
              id: `china-rise`,
              title: `China's Rise 1989-Present`,
              context: `Tiananmen Square crackdown June 3-4, 1989: People's Liberation Army cleared protesters from Tiananmen Square in Beijing; estimates of deaths range from ~200-300 (official Chinese acknowledgment) to over 10,000 (declassified UK diplomatic documents 2017); the violence substantially ended any prospect of political reform alongside economic reform. Deng Xiaoping's "Southern Tour" (January-February 1992) restarted economic reform under firmly preserved one-party political rule, signaling that China would continue capitalist economic development under communist political control. China's accession to the WTO (December 11, 2001) substantially integrated China with global capitalism; Western expectation was that economic integration would eventually produce political liberalization (the "China will become more like us" thesis); this expectation has been substantially refuted by subsequent developments. Economic growth has been sustained and dramatic: GDP ~$400 billion (1990) to ~$18 trillion (2024) in current dollars; ~800 million Chinese lifted from extreme poverty (World Bank framing); China became "factory of the world" through manufacturing capacity. Xi Jinping accession (Party leadership November 2012, President March 2013, presidential term limits eliminated 2018 allowing indefinite tenure) consolidated authoritarian rule: anti-corruption campaign 2012+ (which served both genuine purpose and political consolidation); mass detention of Uyghurs in Xinjiang in "re-education camps" (estimated 1-2 million detained at peak ~2017-2019; designated genocide by US 2021 + UK + Canada + Netherlands; China denies and has refused independent investigation); Hong Kong National Security Law (June 2020) substantially ended Hong Kong's distinct political space and ended pro-democracy movement after 2019 protests; Belt and Road Initiative (2013+) projected Chinese influence through infrastructure investments across Asia, Africa, Latin America, Europe (over $1 trillion committed/spent across 150+ countries by recent estimates). The Communist Party's official position is that "socialism with Chinese characteristics" represents alternative to Western liberal democracy + market capitalism; this alternative is gaining adherents in some developing countries. US-China strategic competition substantially shapes current foreign policy (Obama "pivot to Asia" 2011; Trump trade war 2018+; Biden continuation of trade restrictions + technology export controls; rising tensions over Taiwan). Chinese military modernization has substantially closed gaps with US in some areas; Chinese space program (lunar landing 2013, far-side landing 2019) is among the most active globally; Chinese AI development is competitive with US development.`,
              question: `What's the most important framing for understanding China's rise?`,
              options: [
                {
                  id: `convergence`,
                  label: `Convergence: China is integrating with global capitalism; economic development will eventually produce political liberalization; the "China will become more like us" thesis is just delayed.`,
                  outcome: `This framing was widely held in the 1990s-2000s (Bill Clinton's argument for WTO accession explicitly drew on it; G. W. Bush administration continued similar framings) and has been substantially refuted by subsequent developments. Xi Jinping's accession from 2012 dramatically accelerated the opposite trajectory: tightened political control, expanded surveillance, intensified ideological campaigns, eliminated term limits, mass detention in Xinjiang, ended Hong Kong's distinct space. The thesis assumed that economic development would necessarily produce political liberalization; the assumption was wrong. China demonstrates that capitalist economic development can persist under firm one-party authoritarian rule for substantial periods.`,
                  insight: `The convergence thesis was substantial framework for Western policy from the 1990s through ~2015; it has been substantially refuted by Xi-era China. Capitalist economic development doesn't necessarily produce political liberalization.`,
                },
                {
                  id: `alternative-model`,
                  label: `Alternative model: China represents a different model of political-economic organization (capitalist economy + one-party authoritarian rule) that challenges the "End of History" thesis and competes with Western models.`,
                  outcome: `Substantially closest to current scholarly consensus. Evidence: Xi-era China has explicitly framed "socialism with Chinese characteristics" as alternative to Western liberal democracy + market capitalism; the model has gained traction in some developing countries (multiple African countries' political and economic relationships with China; some Latin American leaders' rhetorical alignment); Chinese economic success under authoritarian rule has substantially undermined the Western assumption that political liberalization is necessary for economic development; the alternative model creates pressure on Western framings of what political-economic organization should look like. The framework recognizes both the empirical success of the Chinese trajectory and its theoretical implications.`,
                  insight: `China's trajectory has substantially refuted the "End of History" thesis. The alternative model isn't just a different version of capitalism; it's a different combination of capitalism + political organization that has substantial success.`,
                },
                {
                  id: `containment-needed`,
                  label: `New Cold War: US-China relations are returning to Cold War dynamics; containment of Chinese rise is necessary; ideological + military + economic competition is unavoidable.`,
                  outcome: `This framing has gained substantial influence in US foreign policy circles (multiple think tank reports + congressional consensus + administration policy under both Trump and Biden) but is substantially contested by scholars who emphasize differences from Cold War dynamics (Chinese-US economic interdependence is much greater than Soviet-US interdependence ever was; China is not pursuing global ideological expansion like Soviet model; the framework of "containment" may not fit Chinese reality). The "new Cold War" framing also risks producing self-fulfilling dynamics that could produce actual military conflict over Taiwan or other flashpoints. Some scholars argue the framing is necessary; others argue it's dangerous; the debate is ongoing.`,
                  insight: `The "new Cold War" framing has substantial influence but is contested. The differences from actual Cold War dynamics (economic interdependence, lack of comparable ideological expansion) matter.`,
                },
              ],
              correctOptions: [`alternative-model`],
              synthesis: `China's rise represents an alternative model: capitalist economy + one-party authoritarian rule that challenges the "End of History" thesis. The Western expectation from the 1990s that economic integration would produce political liberalization has been substantially refuted by Xi-era China (tightened political control, expanded surveillance, eliminated term limits, mass detention in Xinjiang, ended Hong Kong's distinct space). China now competes with the US economically and increasingly militarily while explicitly rejecting Western political models. The "convergence" framing was widely held but has been refuted. The "new Cold War" framing has gained influence but is contested by scholars who emphasize differences from actual Cold War dynamics. The most important framework for understanding China is the alternative-model framing: capitalist development under firm authoritarian rule has substantial success, gains adherents in developing countries, and substantially undermines Western assumptions about political-economic organization.`,
            },
          ],
          reflectionPrompt: `Across the three cases: what overall picture of post-Cold War world order emerges? Where do the patterns interact (e.g., Iraq War + China rise; Eastern European integration + Russian reaction)? What does the picture suggest for the world your generation will inherit?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What was the early-1990s triumphalist consensus and how has it been challenged?`,
              options: [
                `Random`,
                `Triumphalist consensus: liberal democracy + market capitalism decisively won; Western expansion would continue. Frameworks: Fukuyama "End of History" 1992; Washington Consensus (Williamson 1989) - trade liberalization + privatization + deregulation; democratic peace thesis (Russett 1993, Doyle); "unipolar moment" (Krauthammer 1990) developed by neoconservatives (Kagan, Kristol). Substantially challenged: Russian divergence after 1991 culminating in Feb 2022 Ukraine invasion; Iraq War 2003 demonstrated US power limits; China's rise under one-party rule refutes "convergence" thesis; democratic backsliding within Western democracies (Hungary, Poland, Trump-era US institutional stress including January 6, 2021). The "End of History" was premature.`,
                `Just consensus`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the gap between 1990s expectations and 2020s reality is foundation for serious engagement with current global politics. The "End of History" framework was specific; it has been substantially refuted by specific subsequent developments.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the pattern in Eastern Europe and Russia after 1989?`,
              options: [
                `Random`,
                `Institutional incorporation with significant limits. Eastern European NATO expansion 1999 (Czech Republic, Hungary, Poland) + 2004 (Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, Slovenia) + Albania/Croatia 2009 + Montenegro 2017 + North Macedonia 2020 + Finland 2023 + Sweden 2024; EU expansion 2004 + 2007 + Croatia 2013. Democratic backsliding within EU: Hungary's Orbán 2010+, Poland's PiS 2015-2023. Russia diverged: "shock therapy" 1990s + life-expectancy decline + oligarchic capture + 1998 financial collapse → Putin (PM Aug 1999, President May 2000) → media constraints + opposition imprisonment (Khodorkovsky 2003-2013, Navalny multiple/died 2024) + constitutional amendments (2020 allows tenure until 2036) → Feb 24, 2022 Ukraine invasion. As of mid-2024: hundreds of thousands dead, ~10M Ukrainians displaced.`,
                `Just success`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Eastern European integration succeeded substantially but has significant limits visible in democratic backsliding. Russia's divergence wasn't preordained; it reflects specific 1990s trauma and Putin's political project. The current Ukraine war has reopened questions about European security architecture.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What was the Iraq War in scale and what were its consequences?`,
              options: [
                `Random`,
                `March 19, 2003: US-led coalition invasion (US, UK, Australia, Poland + others) claiming Iraq possessed WMDs + connections to terrorism. Bush Doctrine (NSS Sept 2002) committed US to "preventive war." Military success in 3 weeks; Saddam Hussein captured Dec 2003, executed Dec 2006. No WMDs found (Iraq Survey Group reports 2004-2005 confirmed). Coalition Provisional Authority (May 2003-June 2004 under Paul Bremer) dissolved Iraqi army + de-Ba'athified, producing rapid insurgency. Sectarian civil war 2006-2008. ISIS emerged from al-Qaeda in Iraq + Sunni insurgent networks; caliphate declared June 2014; substantially defeated 2017-2019 (Mosul July 2017, Raqqa Oct 2017). Deaths: Iraq Body Count ~200K+ civilian; Lancet 2006 ~650K violent excess deaths through mid-2006; total substantially higher. US military ~4,500 dead + ~32K wounded. Cost ~$3-6 trillion (Linda Bilmes + Joseph Stiglitz). Iranian regional influence expanded substantially. Syrian civil war 2011-present (~500K deaths + 13M+ displaced) substantially influenced by Iraqi destabilization.`,
                `Just war`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Iraq War's scale and consequences are documented but often underweighted in US discourse. Naming ~200K-650K+ Iraqi deaths, ~$3-6T cost, and continuing consequences (ISIS, Syrian destabilization, Iranian expansion) is essential for honest engagement.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the "unipolar overreach" framing for the Iraq War?`,
              options: [
                `Random`,
                `Bush administration + neoconservative project (Project for the New American Century 1997; National Security Strategy 2002 "Bush Doctrine"; multiple neoconservative writings - Cheney, Rumsfeld, Wolfowitz, Perle, Kagan, Kristol, Krauthammer) used "unipolar moment" for ambitious goal of regional transformation through regime change. The actual outcome demonstrated US military strength but limited US capacity to shape state-building and regional dynamics. Iraqi state collapse + sectarian war + ISIS rise + Iranian regional expansion are direct results of project's failure. Iraq War substantially weakened "unipolar moment" by demonstrating limits to US power; subsequent US foreign policy operates with diminished capacity to impose outcomes.`,
                `Just failure`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The unipolar overreach framework is current scholarly consensus on the Iraq War. It captures both the ambitious neoconservative project and its substantial failure. Naming the specific actors and their explicit project (rather than treating it as accident or "intelligence failure") is the work.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the trajectory of China's rise 1989-present?`,
              options: [
                `Random`,
                `Tiananmen Square crackdown June 3-4, 1989 (~200-300 to 10K+ killed; 2017 UK diplomatic documents declassified suggest higher); ended prospect of political reform alongside economic reform. Deng Xiaoping "Southern Tour" Jan-Feb 1992 restarted economic reform under preserved one-party rule. WTO accession Dec 11, 2001 integrated China with global capitalism. Western "convergence" expectation refuted. Economic growth dramatic: GDP $400B (1990) → ~$18T (2024); ~800M lifted from extreme poverty (World Bank). Xi Jinping (Party Nov 2012, President March 2013, term limits eliminated 2018 allowing indefinite tenure) consolidated authoritarian rule: anti-corruption campaign 2012+, Xinjiang mass detention of Uyghurs (~1-2M peak ~2017-2019; designated genocide by US 2021 + UK + Canada + Netherlands; China denies), Hong Kong National Security Law June 2020 ended distinct space, Belt and Road Initiative 2013+ ($1T+ across 150+ countries). Strategic competition with US (Obama "pivot to Asia" 2011; Trump trade war 2018+; Biden continued); rising Taiwan tensions; Chinese military modernization closing gaps.`,
                `Just growth`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Naming the specific trajectory matters. The economic scale (~$400B to ~$18T GDP), the political consolidation under Xi, the specific repressions (Xinjiang, Hong Kong), the global projection (Belt and Road), and the strategic competition with US are all foundation for understanding China's role in your generation's world.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the "alternative model" framing for China's rise?`,
              options: [
                `Random`,
                `China represents different model of political-economic organization (capitalist economy + one-party authoritarian rule) that challenges "End of History" thesis and competes with Western models. Xi-era China explicitly framed "socialism with Chinese characteristics" as alternative to Western liberal democracy + market capitalism. The model gains traction in some developing countries (African political/economic relationships with China; Latin American rhetorical alignment). Chinese economic success under authoritarian rule has substantially undermined Western assumption that political liberalization necessary for economic development. The alternative model creates pressure on Western framings of what political-economic organization should look like. The framework recognizes both empirical success of Chinese trajectory and its theoretical implications.`,
                `Just different`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The alternative-model framing is current scholarly consensus on China's significance. It captures that Xi-era China isn't transitioning to Western model and isn't pursuing global ideological expansion like Soviet model but instead represents a distinct combination of capitalist economy + authoritarian rule that has substantial empirical success.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's Russia's invasion of Ukraine and its broader significance?`,
              options: [
                `Random`,
                `Feb 24, 2022 Russian invasion of Ukraine: most significant European war since 1945; first time major nuclear power directly invaded neighbor for territorial conquest in post-Cold War period. Russian rhetoric explicitly rejects post-1991 European order, claims Ukraine has no legitimate independent existence, threatens nuclear use if conventional military fails. As of mid-2024: hundreds of thousands killed (Ukrainian + Russian military high hundreds of thousands; civilian tens of thousands; ~10M Ukrainians displaced). War outcome will substantially shape European security architecture for decades and what kind of post-Cold War order continues to exist. Putin's rule consolidated through media constraints (Politkovskaya murdered 2006; multiple journalists killed), opposition imprisonment (Khodorkovsky 2003-2013; Navalny multiple/died 2024), electoral manipulation, 2020 constitutional amendments allowing tenure until 2036.`,
                `Just war`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Russia's Ukraine invasion is the immediate context for your generation's geopolitical engagement. Recognizing it as direct challenge to post-1991 European order (rather than as limited regional conflict) is essential. The outcome will shape what comes next substantially.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the integrated picture of post-Cold War world order in 2024?`,
              options: [
                `Random`,
                `Contested rather than triumphant. Western institutions exist and have expanded (NATO + EU eastward through multiple waves) but are confronted by: Russian rejection with explicit military challenge (Feb 2022 Ukraine invasion); Chinese alternative-model competition (capitalism + authoritarian rule, gaining adherents in developing countries); multiple regional powers asserting independence (Brazil, India, Turkey, Saudi Arabia, others positioning between US and China); substantial internal challenges within Western democracies (authoritarian-leaning populism in multiple Western countries (Hungary Orbán 2010+, Poland PiS 2015-2023, Bolsonaro Brazil 2018-2022, Trump US 2016+2024, Modi India 2014+; democratic backsliding; US institutional stress including January 6 2021). The "end of history" was premature; the future is contested.`,
                `Just complicated`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the integrated picture (rather than just naming each piece separately) is the foundation for serious engagement with current global politics. The "end of history" framework was specific; the 2024 reality is specifically different in identifiable ways.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The "End of History" thesis (Fukuyama 1992) has been substantially vindicated by subsequent developments.`,
              correctAnswer: false,
              explanation: `False. The "End of History" thesis has been substantially refuted by subsequent developments. Fukuyama's argument was that liberal democracy combined with market capitalism represented the endpoint of human political-economic evolution and that no major ideological alternatives would emerge to challenge it. The Russian rejection (culminating in February 2022 Ukraine invasion explicitly challenging post-1991 European order), China's rise under one-party authoritarian rule (~$18T GDP by 2024, second-largest economy, explicitly rejecting Western political models, "alternative model" gaining adherents), multiple regional powers asserting independence between US and China (Brazil, India, Turkey, Saudi Arabia), and substantial internal challenges within Western democracies themselves (authoritarian-leaning populism, democratic backsliding in Hungary and Poland, US institutional stress) all substantially complicate or refute the thesis. Fukuyama himself has revised his position somewhat in subsequent work. The thesis has been substantially refuted by specific developments, not just contradicted in detail.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your civics class is discussing "the post-Cold War period." The teacher's framing is that "the US won the Cold War and democracy spread successfully across the world." Based on this lesson, what should you point out (privately, respectfully)?`,
              options: [
                `"That sounds right"`,
                `"Several specific things, with respect. First, the framing reflects the early-1990s triumphalist consensus (Fukuyama 'End of History' 1992; Washington Consensus; democratic peace thesis; 'unipolar moment' framework) that has been substantially refuted by subsequent developments. The consensus has been challenged in specific ways across three dimensions. Second, on Eastern Europe and Russia: Eastern European countries achieved NATO + EU integration (1999 wave with Czech Republic, Hungary, Poland; 2004 wave with Baltics and others). That's a real success. But democratic backsliding in Hungary (Orbán since 2010) and Poland (PiS 2015-2023) shows institutional incorporation didn't fully secure liberal democracy. Russia diverged dramatically: 1990s 'shock therapy' produced massive inequality and life-expectancy decline; Putin from 1999/2000 consolidated authoritarianism progressively; Russia's February 2022 invasion of Ukraine represents most significant European war since 1945 and direct challenge to post-1991 European order. Third, on the 'US won the Cold War' framing and what came next: the Iraq War (March 2003) demonstrated limits of unipolar US power. The Bush administration's neoconservative project (Bush Doctrine + Project for the New American Century + Wolfowitz, Cheney, Rumsfeld) aimed at regional transformation through regime change. Outcome: no WMDs found; Iraqi state collapse; sectarian civil war; ISIS emergence; Iranian regional expansion; Syrian civil war destabilized. Costs: ~200,000 to 650,000+ Iraqi deaths, ~4,500 US military deaths, ~$3-6 trillion US fiscal cost. The 'unipolar moment' was substantially squandered. Fourth, on 'democracy spreading successfully': China's rise under one-party authoritarian rule has substantially refuted the assumption. Chinese GDP grew from ~$400 billion (1990) to ~$18 trillion (2024). Xi Jinping's accession from 2012 dramatically accelerated authoritarian consolidation: anti-corruption campaign + Xinjiang mass detention of Uyghurs (designated genocide by US 2021 + UK + Canada + Netherlands; China denies) + Hong Kong National Security Law 2020 ending distinct political space + Belt and Road Initiative 2013+ projecting influence across Asia, Africa, Latin America. China explicitly represents alternative model to Western liberal democracy + market capitalism. The 'convergence' expectation from 1990s that economic integration would produce political liberalization has been substantially refuted. Fifth, on Western democracies themselves: authoritarian-leaning populism has risen in multiple Western countries (Hungary, Poland, Brazil under Bolsonaro 2018-2022, US under Trump 2016 + 2024, India under Modi 2014+). January 6, 2021 in the US demonstrated capacity for democratic backsliding in established democracies. The framing 'democracy spread successfully' doesn't account for the substantial backsliding within Western democracies themselves. Sixth, what to do practically: the teacher's framing isn't 'wrong' so much as 'partial': it was the consensus view in the 1990s and continues to have defenders. But the 2024 reality is substantially different from what the 1990s consensus expected. Engaging the teacher respectfully means acknowledging the framing's history while noting how subsequent developments have complicated it. Books like Vladislav Zubok 'Collapse' 2021 on Soviet end; Elizabeth Economy 'The Third Revolution' 2018 on Xi-era China; Thomas Ricks 'Fiasco' 2006 on Iraq War; multiple ongoing journalism on Russia, Ukraine, China can help develop the more accurate picture. Engaging with multi-tradition framework rather than committing to one is the work."`,
                `"Random"`,
                `"Just yes"`,
              ],
              correctIndex: 1,
              explanation: `Real applied post-Cold War literacy. The "US won the Cold War + democracy spread" framing was the 1990s consensus and has been substantially refuted by specific subsequent developments across Russia/Eastern Europe, Iraq War, and China's rise. Naming the specific scale (~200K-650K+ Iraqi deaths, ~$18T Chinese GDP, ~10M Ukrainians displaced) and the specific actors (Bush administration neoconservatives, Xi Jinping consolidation, Putin) is the work.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-1991`, category: `1991 vs 2024`, prompt: `The 1991 consensus expected Western dominance to continue and expand. The 2024 reality is contested. What does that gap teach you about predicting the future?` },
            { id: `reflect-ukraine`, category: `Ukraine`, prompt: `Russia's Ukraine invasion (February 2022) has killed hundreds of thousands and displaced ~10 million. How does engaging this seriously change what you think about post-Cold War order and what comes next?` },
            { id: `reflect-iraq`, category: `Iraq War costs`, prompt: `The Iraq War killed ~200,000-650,000+ Iraqis and ~4,500 US military, cost ~$3-6 trillion, and produced ISIS + Syrian destabilization + Iranian regional expansion. How does engaging these costs change your reading of US power and US foreign policy?` },
            { id: `reflect-china`, category: `China alternative`, prompt: `China's "alternative model" (capitalism + authoritarian rule) has substantial empirical success. Does this make the model attractive in your view, dangerous, or both? What does it mean for the future of democracy globally?` },
            { id: `reflect-western-backsliding`, category: `Internal challenges`, prompt: `Authoritarian-leaning populism has risen in multiple Western countries (Hungary, Poland, Brazil, US, India). How does this complicate the framing of Western democracy as stable, advanced system that other countries should adopt?` },
            { id: `reflect-your-generation`, category: `Your inherited world`, prompt: `Your generation will engage post-Cold War politics as adults across the next 50+ years. Russia-Ukraine outcome; US-China strategic competition; democratic backsliding within Western democracies; climate change (separate topic, L20 territory); other challenges. Where do you want to engage as a citizen?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Post-Cold War period is your generation's immediate context. Two paths.`,
          familyActivity: {
            title: `Family Post-Cold War Conversation`,
            duration: `60 minutes`,
            description: `Share the three cases with your family. Family members who lived through 1989-1991 may have direct memories of expectations at the time; comparing 1991 expectations with 2024 reality often produces useful conversations. Family members from Eastern Europe, former USSR, Iraq, Iran, China, or other affected regions have direct relationships with specific cases. The conversation often surfaces family experiences with specific events: family who emigrated from Eastern Europe in 1990s, family affected by Iraq War, family connections to China's economic transformation. Engaging family experience seriously substantially shapes what these cases mean.`,
          },
          projectOption: {
            title: `Deep Dive Into One Case, 6 weeks (optional)`,
            duration: `6 weeks, ~45 minutes per session`,
            description: `Pick one case for deep study. Eastern Europe + Russia: read Vladislav Zubok "Collapse" (2021) on Soviet end; Masha Gessen "The Future is History" (2017) on Russia; Anne Applebaum "Twilight of Democracy" (2020) on democratic backsliding. Iraq War: read Thomas Ricks "Fiasco" (2006) + Rajiv Chandrasekaran "Imperial Life in the Emerald City" (2006); recent retrospective journalism on Iraq War 20-year anniversary (March 2023). China: read Elizabeth Economy "The Third Revolution" (2018); recent journalism on Xi-era China and US-China competition. Across 6 weeks, develop substantial knowledge of one case. Week 6: write 2,500 words integrating the readings, applying the framework from this lesson, and engaging the case's continuing significance.`,
            offerToParent: `Parent: opt your kid into this project. Sustained engagement with one post-Cold War case at 12-13 builds foundation for serious engagement with international affairs across decades.`,
          },
          identityQuestion: `If you become someone who engages post-Cold War history across three patterns (institutional incorporation with limits; unipolar overreach; alternative model emergence), what does that change about how you read current global politics and your civic engagement?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read 2024 global politics through three post-Cold War patterns.`,
            `A person who names Iraq War costs honestly (~200K-650K+ Iraqi dead, ~$3-6T fiscal cost) and engages what they mean.`,
            `Someone who recognizes China's "alternative model" without either dismissing or romanticizing it.`,
          ],
          saveKey: `identity_responses_hw_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelfth History and World lesson done. You have framework for three patterns of post-Cold War world order: institutional incorporation with limits (Eastern European NATO + EU expansion succeeded with Hungary/Poland democratic backsliding limits; Russia diverged through 1990s "shock therapy" + Putin from 1999/2000 + February 24, 2022 Ukraine invasion); unipolar overreach (Iraq War March 2003 + Bush Doctrine + neoconservatives + ~200K-650K+ Iraqi dead + ~4,500 US military dead + ~$3-6T cost + ISIS rise + Iranian regional expansion + Syrian destabilization); alternative model emergence (China Tiananmen June 4, 1989 + Deng continued reform + WTO Dec 2001 + Xi Jinping 2012/2013 + Xinjiang Uyghur detention + Hong Kong NSL 2020 + Belt and Road 2013+ + ~$18T GDP by 2024). You know the integrated picture: 1991 triumphalist consensus (Fukuyama, Washington Consensus, democratic peace, unipolar moment) substantially refuted by 2024 reality of contested order. You know the immediate context for your generation: Russia's Ukraine war ongoing; US-China strategic competition; Western internal democratic backsliding; Iraq War continuing consequences. Eight lessons to go. Next: the Middle East. History of a complex region, with full engagement of the multiple framings that organize understanding. Onward. — Lyra`,
          badge: `post-cold-war-literate`,
          badgeName: `Post-Cold War Literate`,
          xpEarned: 75,
          competencies: [
            `Articulates 1991 triumphalist consensus and its key frameworks (Fukuyama "End of History" 1992; Washington Consensus; democratic peace; "unipolar moment")`,
            `Names three patterns of post-Cold War order (institutional incorporation with limits; unipolar overreach; alternative model emergence)`,
            `Engages Eastern Europe and Russia case with specific actors, dates, scale (NATO + EU expansion waves; Putin from 1999/2000; Feb 2022 Ukraine invasion)`,
            `Engages Iraq War case with specific scale (~200K-650K+ Iraqi dead, ~4,500 US, ~$3-6T cost), causes (neoconservative project, Bush Doctrine), and consequences (ISIS, Syrian destabilization, Iranian expansion)`,
            `Engages China's rise with specific trajectory (Tiananmen 1989 + Deng 1992 + WTO 2001 + Xi 2012/2013 + ~$18T GDP) and theoretical significance (refutes "End of History"; alternative model)`,
            `Integrates the three patterns into picture of contested 2024 reality (Russian rejection + Chinese alternative + multiple regional powers + Western internal challenges)`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: The Middle East: History of a Complex Region`,
            hook: `Ottoman legacy, mandate borders, Israeli-Palestinian conflict, multiple frameworks.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L12 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
