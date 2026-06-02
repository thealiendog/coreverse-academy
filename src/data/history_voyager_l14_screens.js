// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L14 — China's Rise: History and Future
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — China's Rise, US-China Competition, Historical Trajectory
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: ARGUMENT BUILDER (containment / engagement / multipolar)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l14-v1";

const HISTORY_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-14`,
      title: `China's Rise: History and Future`,
      duration: 35,
      xpReward: 75,
      badge: `china-literate`,
      badgeName: `China Literate`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, China is the most consequential single development for your generation's geopolitical future. L12 introduced China's post-Cold War rise as "alternative model emergence." Today we deepen: longer history (5,000 years of Chinese civilization, 19th-century "century of humiliation," Mao's revolution 1949, reform era 1978+, current Xi era 2012+), specific scale of contemporary China (~1.4 billion people, ~$18 trillion GDP, second-largest economy, world's largest manufacturing capacity, rapidly modernizing military), and three serious positions on what to do about US-China strategic competition. Position 1: containment (China is a peer rival that challenges US-led order; firm response is necessary. ); Position 2: engagement with competition (integration with managed competition can produce mutual benefit. ); Position 3: multipolar accommodation (China's rise reflects the historical norm; Western dominance was the anomaly; the world is returning to multipolar order and the US needs to adapt rather than resist. Each position has serious defenders engaging real evidence. The position you commit to shapes how you'll engage US-China policy across decades.`,
          headline: `China's Rise: History and Future`,
          subtitle: `Three positions on what to do about US-China strategic competition.`,
          visual: `/voyager-assets/history/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Chinese History In Specific Detail`,
          paragraphs: [
            `China has the longest continuous civilization on Earth. The earliest Chinese dynasties (Shang ~1600-1046 BCE; Zhou 1046-256 BCE; Qin 221-206 BCE under Qin Shi Huang who unified the warring states) established institutional and cultural patterns that persisted across subsequent dynasties. The Han Dynasty (206 BCE-220 CE) established the Confucian-influenced administrative model that shaped Chinese governance for two millennia. The Tang (618-907) and Song (960-1279) dynasties produced extraordinary scientific, technological, and cultural achievements (paper, printing, gunpowder, compass, advanced metallurgy, complex civil service examinations, sophisticated philosophy). The Ming (1368-1644) and Qing (1644-1912) maintained the imperial system while engaging with growing European maritime trade. Throughout, Chinese self-understanding was as "Middle Kingdom" (Zhongguo, literally "central country"): the central civilization to which other regions were peripheral.`,
            `The "century of humiliation" (~1839-1949). The First Opium War (1839-1842) initiated a century of forced concessions to European powers. Britain forced opium imports despite Chinese opposition; defeated China militarily; imposed the Treaty of Nanjing (1842) which ceded Hong Kong to Britain, opened five "treaty ports," and forced China to pay reparations. Similar treaties followed with France, Russia, Germany, the US, and other powers, known in Chinese historiography as "unequal treaties." The Second Opium War (1856-1860) further expanded foreign privileges. The Taiping Rebellion (1850-1864), an internal Chinese civil war that overlapped with the foreign pressures, killed an estimated 20-30 million people, one of the deadliest conflicts in human history. The First Sino-Japanese War (1894-1895) saw Japan defeat China and seize Taiwan. The Boxer Rebellion (1899-1901) was suppressed by an Eight-Nation Alliance (Britain, France, Germany, Russia, Japan, Italy, Austria-Hungary, US) that further imposed reparations. The Qing dynasty fell in 1911-1912; the Republic of China was established under Sun Yat-sen, then under various warlords and Chiang Kai-shek's Kuomintang.`,
            `The Japanese invasion and WWII period (1937-1945). Japanese forces invaded China in 1937 in what's known in China as the "War of Resistance Against Japan." Estimates of Chinese deaths range from 15-20 million during the war (combatants and civilians); specific atrocities including the Nanjing Massacre (December 1937-January 1938, approximately 200,000-300,000 Chinese killed in 6 weeks) are foundational to Chinese national memory. The war devastated China economically and substantially shaped subsequent political dynamics, with the Communist Party gaining strength through its resistance role while the Kuomintang lost legitimacy.`,
            `The Chinese Communist Revolution and Mao era (1949-1976). The Communist Party of China (CCP) under Mao Zedong defeated the Kuomintang in the Chinese Civil War (1945-1949); Mao proclaimed the People's Republic of China on October 1, 1949. The Kuomintang government retreated to Taiwan, where it established a separate government that continues today. The Mao era was substantially traumatic. The Great Leap Forward (1958-1962): forced collectivization and unrealistic industrial targets produced the Great Chinese Famine, estimated to have killed 15-45 million people (Frank Dikötter "Mao's Great Famine" 2010 estimates ~45M; lower estimates ~15-30M). The Cultural Revolution (1966-1976): Mao's political mobilization of youth ("Red Guards") against perceived counter-revolutionary elements killed 1-2 million people, persecuted millions more, destroyed cultural artifacts, and substantially traumatized Chinese society. The Mao era ended with Mao's death in 1976.`,
            `The reform era (1978-2012). Deng Xiaoping became paramount leader after a brief power struggle following Mao's death; introduced "reform and opening up" (gaige kaifang) from December 1978. Economic reforms included: agricultural decollectivization (household responsibility system from late 1970s); Special Economic Zones (SEZ) starting with Shenzhen in 1980; gradual privatization of small/medium enterprises; foreign investment liberalization; WTO accession December 11, 2001. Political reforms remained firmly bounded under one-party rule; the 1989 Tiananmen Square protests by students demanding political reform were violently suppressed June 3-4, 1989, ending any prospect of political liberalization alongside economic liberalization. Economic growth was sustained and dramatic: GDP grew approximately 10% annually for three decades; ~800 million Chinese lifted from extreme poverty (World Bank framing); urbanization transformed rural-majority country into majority-urban society; manufacturing capacity grew to become world's largest. Jiang Zemin (1989-2002) and Hu Jintao (2002-2012) led during this period of accelerating economic growth and gradual integration with global capitalism.`,
            `The Xi era (2012-present). Xi Jinping became General Secretary of CCP in November 2012 and President of PRC in March 2013. Xi has consolidated power substantially beyond his predecessors: extensive anti-corruption campaign (2012+) eliminated rivals while serving genuine purposes; constitutional amendment (2018) eliminated presidential term limits, allowing indefinite tenure; "Xi Jinping Thought" added to CCP and state constitutions. Domestic policies have intensified authoritarian control: mass detention of Uyghurs in Xinjiang in "re-education camps" (estimated 1-2 million at peak ~2017-2019; designated genocide by US 2021, UK, Canada, Netherlands, others; China denies and refuses independent investigation); Hong Kong National Security Law (June 30, 2020) substantially ended Hong Kong's distinct political space after 2019 pro-democracy protests; intensified surveillance through facial recognition + social credit systems + great firewall; suppression of Mongolian and Tibetan culture. Foreign policy has projected influence: Belt and Road Initiative (2013+) committed over $1 trillion across 150+ countries in infrastructure investments; military modernization closed gaps with US; increasing assertiveness over Taiwan (Xi has stated reunification is necessary and not ruled out force); construction of military bases in South China Sea contesting territorial claims; rising tensions with US, Japan, Australia, India.`,
          ],
          image: `/voyager-assets/history/l14-s1-history.webp`,
          imageCaption: `Chinese history: longest continuous civilization. Dynasties (Shang, Zhou, Qin, Han, Tang, Song, Ming, Qing). "Century of humiliation" 1839-1949 (Opium Wars; unequal treaties; Taiping Rebellion ~20-30M dead; First Sino-Japanese War 1894-95; Boxer Rebellion 1899-1901; Republic 1911-1912). WWII Japanese invasion (~15-20M deaths; Nanjing Massacre Dec 1937-Jan 1938 ~200-300K killed in 6 weeks). Mao era (1949-1976): Great Leap Forward Famine ~15-45M; Cultural Revolution 1-2M killed. Reform era (1978-2012): Deng + "reform and opening"; Tiananmen June 4 1989; WTO Dec 2001. Xi era (2012-present): consolidation, Xinjiang, Hong Kong, Belt and Road.`,
          vocab: [
            {
              word: `Chinese history in specific detail`,
              definition: `Longest continuous civilization. Major dynasties: Shang ~1600-1046 BCE; Zhou 1046-256 BCE; Qin 221-206 BCE (Qin Shi Huang unified warring states); Han 206 BCE-220 CE (Confucian-influenced administrative model); Tang 618-907 + Song 960-1279 (extraordinary science/tech/culture: paper, printing, gunpowder, compass, civil service examinations); Ming 1368-1644; Qing 1644-1912. Chinese self-understanding as "Middle Kingdom" (Zhongguo). "Century of humiliation" 1839-1949: First Opium War 1839-1842 (Britain forced opium imports; Treaty of Nanjing 1842 ceded Hong Kong + opened 5 treaty ports + reparations); similar "unequal treaties" with France/Russia/Germany/US; Second Opium War 1856-1860; Taiping Rebellion 1850-1864 (~20-30M dead, one of deadliest conflicts); First Sino-Japanese War 1894-1895 (Japan seized Taiwan); Boxer Rebellion 1899-1901 (Eight-Nation Alliance: UK/France/Germany/Russia/Japan/Italy/Austria-Hungary/US); Qing dynasty fall 1911-1912 + Republic of China under Sun Yat-sen then warlords + Chiang Kai-shek Kuomintang. Japanese invasion + WWII period 1937-1945: ~15-20M Chinese deaths; Nanjing Massacre Dec 1937-Jan 1938 ~200-300K killed in 6 weeks. Mao era 1949-1976: PRC proclaimed Oct 1 1949 (Kuomintang retreated to Taiwan); Great Leap Forward 1958-1962 + Great Chinese Famine ~15-45M deaths (Frank Dikötter "Mao's Great Famine" 2010); Cultural Revolution 1966-1976 (1-2M killed, millions persecuted). Reform era 1978-2012: Deng Xiaoping "reform and opening" from Dec 1978; agricultural decollectivization + Special Economic Zones (Shenzhen 1980+); WTO accession Dec 11 2001; ~10% annual GDP growth for three decades; ~800M lifted from extreme poverty; Tiananmen June 3-4 1989. Xi era 2012-present: Party Nov 2012 + President March 2013 + term limits eliminated 2018; "Xi Jinping Thought" in constitutions; Xinjiang Uyghur mass detention (designated genocide by US 2021 + UK + Canada + Netherlands); Hong Kong NSL June 30 2020; Belt and Road Initiative 2013+ ($1T+ across 150+ countries); Taiwan tensions; South China Sea militarization.`,
              audioPrompt: `China has the longest continuous civilization on Earth, {name}. The earliest Chinese dynasties established institutional and cultural patterns that persisted across subsequent dynasties. The Han Dynasty from 206 BCE to 220 CE established the Confucian-influenced administrative model that shaped Chinese governance for two millennia. The "century of humiliation" from approximately 1839 to 1949 began with the First Opium War from 1839 to 1842; Britain forced opium imports despite Chinese opposition; defeated China militarily; imposed the Treaty of Nanjing in 1842 which ceded Hong Kong to Britain. The Taiping Rebellion from 1850 to 1864, an internal Chinese civil war, killed an estimated 20 to 30 million people, one of the deadliest conflicts in human history. The Japanese invasion from 1937 to 1945 produced approximately 15 to 20 million Chinese deaths; the Nanjing Massacre from December 1937 to January 1938 killed approximately 200,000 to 300,000 Chinese in 6 weeks. The Communist Party of China under Mao Zedong proclaimed the People's Republic on October 1, 1949. The Great Leap Forward from 1958 to 1962 produced the Great Chinese Famine, estimated to have killed 15 to 45 million people. Deng Xiaoping introduced "reform and opening" from December 1978. Xi Jinping became General Secretary in November 2012 and has consolidated power substantially beyond his predecessors.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Contemporary China: Scale And Structure`,
          paragraphs: [
            `Understanding China requires engaging the specific scale of contemporary China. ~1.4 billion people (about 18% of world population). GDP ~$18 trillion in current dollars (2024); second-largest economy globally; largest by purchasing power parity since approximately 2014. World's largest manufacturer (China produces about 30% of global manufacturing output, more than the next several countries combined). World's largest trader (China is the largest trading partner of approximately 120 countries; the US is largest trading partner of approximately 60). World's largest emitter of greenhouse gases (China emits about 30% of global CO2 annually, more than the US, EU, and India combined, though per-capita emissions remain lower than US). Among the largest militaries (~2 million active duty PLA; rapidly modernizing navy and air force; approximately 410 nuclear warheads with substantial expansion underway).`,
            `The political structure. The Communist Party of China (CCP) has ~98 million members (about 7% of population); rule is via Party rather than via electoral process; the National People's Congress (~3,000 members) functions as legislature but in practice ratifies CCP decisions. The Politburo Standing Committee (~7 members) is the highest decision-making body; the General Secretary of the CCP (Xi Jinping since 2012) is paramount leader. Local government operates under Party direction; private business exists but operates under Party constraints and increasingly under direct Party guidance (Xi's emphasis on "common prosperity" and "Xi Jinping Thought on the Rule of Law" since approximately 2020). Civil society space is constrained; independent media, NGOs, religious institutions, ethnic minority organizations all face significant restrictions.`,
            `The economic structure. China's economy combines features of market capitalism (private enterprise, foreign investment, stock markets) with features of state-led development (state-owned enterprises in strategic sectors, Party direction of major economic decisions, industrial policy targeting specific sectors). Major Chinese companies include both private firms (Alibaba founded by Jack Ma, Tencent, Huawei founded by Ren Zhengfei, BYD electric vehicles) and state-owned enterprises (PetroChina, Sinopec, ICBC banking). Recent regulatory crackdowns on private tech firms (Alibaba 2020-2021; Didi 2021; education and gaming sectors) have substantially curtailed private business autonomy. Real estate has been a major component of growth and is currently in significant distress (Evergrande default 2021; multiple subsequent developer failures; falling property prices in many cities).`,
            `Belt and Road Initiative (BRI, 2013+). Xi Jinping announced the initiative in two speeches in 2013 (in Kazakhstan and Indonesia). The framework: Chinese investment in infrastructure (roads, railways, ports, telecommunications, energy) across Asia, Africa, Latin America, Europe in exchange for access, influence, and economic returns. Approximately $1 trillion committed/spent across 150+ countries by various estimates (specific numbers contested as China doesn't publish comprehensive data). Specific projects include: Gwadar port in Pakistan; Mombasa-Nairobi railway in Kenya; Piraeus port in Greece (Chinese-owned); various Asian high-speed rail projects; African mining and infrastructure projects. The BRI has been substantially successful at expanding Chinese influence; it has also produced debt distress in some recipient countries (Sri Lanka's Hambantota port lease 2017 + 2022 economic collapse partly attributable; Zambia debt restructuring; multiple other cases).`,
            `Taiwan as core issue. Taiwan separated from mainland China when the Kuomintang fled there in 1949 after losing civil war to CCP. Taiwan developed under authoritarian rule then democratized starting in late 1980s; Taiwan now holds free elections and has a vibrant civil society. The PRC has maintained position that Taiwan is part of "One China" and that reunification (peacefully if possible, by force if necessary) is non-negotiable national priority. Taiwan's political status remains formally unresolved internationally: most countries (including the US) maintain "one China" position while supporting Taiwan's de facto autonomy and supplying it with defensive weapons. The Taiwan question is the most likely flashpoint for direct US-China military conflict. Xi has stated reunification is required and has substantially increased PLA exercises around Taiwan; US under Biden and Trump administrations has maintained "strategic ambiguity" about whether US would militarily defend Taiwan against invasion.`,
            `Xinjiang and Hong Kong as ongoing issues. Xinjiang Uyghur situation: estimated 1-2 million Uyghur Muslims and other Turkic peoples detained in "re-education" camps at peak; substantial documentation of forced labor, forced sterilizations, family separations, cultural suppression, surveillance. Designated genocide by the US (2021), UK, Canada, Netherlands, France parliamentary, others. China denies and refuses independent investigation. The situation has substantially affected Chinese international standing and produced sanctions and Olympic-related tensions. Hong Kong: massive pro-democracy protests 2019 (estimated 2+ million participants at peak in Hong Kong's 7.5 million population) responding to extradition bill and broader concerns; China imposed National Security Law June 30, 2020 substantially ending Hong Kong's distinct political space; pro-democracy movement substantially defeated; Jimmy Lai (Apple Daily founder) imprisoned; many others imprisoned or fled.`,
          ],
          image: `/voyager-assets/history/l14-s2-contemporary.webp`,
          imageCaption: `Contemporary China: ~1.4B people (~18% world); GDP ~$18T (2nd largest); largest manufacturer (~30% global output); largest trader (120+ countries' top partner); largest CO2 emitter (~30% global); ~2M PLA + modernizing military; ~410 nuclear warheads. Political: CCP ~98M members; Politburo Standing Committee; Xi paramount leader since 2012. Economic: state-led + market capitalism; private firms under Party constraints. BRI 2013+ (~$1T across 150+ countries). Taiwan as core issue. Xinjiang Uyghur situation; Hong Kong NSL 2020.`,
          vocab: [
            {
              word: `contemporary China in scale and structure`,
              definition: `~1.4B people (~18% world population). GDP ~$18T (2024 current dollars, 2nd largest globally; largest by purchasing power parity since ~2014). World's largest manufacturer (~30% global manufacturing output, more than next several combined). World's largest trader (top partner of ~120 countries; US top partner of ~60). World's largest CO2 emitter (~30% global emissions; per-capita lower than US). Among largest militaries (~2M active PLA + modernizing navy/air force + ~410 nuclear warheads expanding). Political structure: CCP ~98M members (~7% population); rule via Party not elections; National People's Congress ~3,000 ratifies; Politburo Standing Committee ~7 highest decision-making; General Secretary (Xi since 2012) paramount; civil society space constrained. Economic structure: state-led + market capitalism combined; private firms (Alibaba/Jack Ma, Tencent, Huawei/Ren Zhengfei, BYD) + state-owned enterprises (PetroChina, Sinopec, ICBC); regulatory crackdowns on tech 2020-21 (Alibaba, Didi, education, gaming); real estate distress (Evergrande 2021+). Belt and Road Initiative 2013+ (~$1T across 150+ countries): Gwadar Pakistan, Mombasa-Nairobi Kenya, Piraeus Greece Chinese-owned, Asian high-speed rail, African mining; debt distress in Sri Lanka (Hambantota 2017/2022 collapse), Zambia, others. Taiwan core issue: Kuomintang fled 1949 + Taiwan democratized 1980s+; PRC "One China" position non-negotiable; most likely US-China military flashpoint. Xinjiang Uyghur situation: ~1-2M detained at peak; forced labor + sterilizations + family separations + cultural suppression + surveillance; designated genocide by US 2021 + UK + Canada + Netherlands + France parliamentary. Hong Kong: 2019 protests (2M+ peak in 7.5M population); China NSL June 30 2020 ended distinct space; Jimmy Lai imprisoned.`,
              audioPrompt: `Understanding China requires engaging the specific scale of contemporary China, {name}. Approximately 1.4 billion people, about 18 percent of world population. GDP approximately 18 trillion dollars in current dollars in 2024; second-largest economy globally; largest by purchasing power parity since approximately 2014. World's largest manufacturer, producing about 30 percent of global manufacturing output, more than the next several countries combined. World's largest trader, the largest trading partner of approximately 120 countries. World's largest emitter of greenhouse gases. The Communist Party of China has approximately 98 million members, about 7 percent of population; rule is via Party rather than via electoral process; the Politburo Standing Committee with approximately 7 members is the highest decision-making body. The Belt and Road Initiative announced by Xi Jinping in 2013 has committed approximately 1 trillion dollars across 150+ countries in infrastructure investments. Taiwan separated from mainland China when the Kuomintang fled there in 1949 after losing civil war; the Taiwan question is the most likely flashpoint for direct US-China military conflict. The Xinjiang Uyghur situation has been designated genocide by the US in 2021, the UK, Canada, the Netherlands, and others; China denies and refuses independent investigation.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 1: Containment: China As Peer Rival`,
          paragraphs: [
            `The containment position holds that China under Xi Jinping has demonstrated itself to be a peer rival fundamentally challenging US-led international order; that engagement has substantially failed to produce political liberalization or moderated foreign policy; that firm response combining military deterrence, economic decoupling in strategic sectors, technology export controls, and ideological pushback is necessary to preserve democratic governance and prevent Chinese dominance.`,
            `Major defenders. Aaron Friedberg "A Contest for Supremacy" 2011 + "Getting China Wrong" 2022 (argues engagement failed and US needs sustained competitive strategy. ); Robert Kaplan "The Loom of Time" 2023 (broader geopolitical framework. Hal Brands ongoing work. ); Elbridge Colby "The Strategy of Denial" 2021 (focuses on military-strategic dimensions of preventing Chinese regional hegemony. Jonathan Ward "China's Vision of Victory" 2019. The Council on Foreign Relations, American Enterprise Institute, Hudson Institute, Heritage Foundation, and other think tanks have substantially supported variants of this position. Within the academic world, the position has substantial support from international relations realists (John Mearsheimer's "The Tragedy of Great Power Politics" 2001 framework predicting US-China conflict).`,
            `The empirical claims. Xi-era China has demonstrated authoritarian consolidation, intensified repression (Xinjiang, Hong Kong), expanded military capabilities, and assertive foreign policy that combined undermines the engagement-era assumption that economic integration would produce political moderation. Specific Chinese behaviors: Belt and Road as strategic influence project not just economic activity; militarization of South China Sea features despite 2016 Permanent Court of Arbitration ruling against Chinese claims; intensified Taiwan pressure including PLA exercises around the island; cyber espionage and intellectual property theft; "wolf warrior" diplomacy; rhetorical hostility to Western liberalism and democracy in CCP documents.`,
            `The policy implications. Military: maintain US military advantage in Indo-Pacific; arm and support allies (Japan, South Korea, Australia, Philippines, Taiwan); develop new capabilities including AUKUS submarine partnership (2021). Economic: decouple in strategic sectors (semiconductors, AI, quantum computing); CHIPS Act (2022) substantial subsidies for US semiconductor manufacturing; export controls on advanced chips and chip-making equipment to China (2022+); diversify supply chains away from China. Diplomatic: rally allies through frameworks like QUAD (US-Japan-Australia-India), AUKUS, expanded NATO engagement on Indo-Pacific; pressure on third parties to choose sides. Values: emphasize democratic governance vs Chinese authoritarianism; support of Taiwanese democracy and Hong Kong protesters; opposition to Xinjiang policies including via sanctions.`,
            `What the containment position acknowledges and what it doesn't. Acknowledges: complete decoupling isn't possible or desirable given economic interdependence; cooperation needed on climate, pandemics, nuclear proliferation; managing competition requires diplomatic engagement. Doesn't fully accept: that engagement era was substantially beneficial in lifting hundreds of millions out of poverty and producing global growth (the position holds that the cost of strengthened authoritarian China outweighs these benefits); that current Chinese assertiveness may partly respond to US containment moves rather than being purely independent (the position holds that Xi's consolidation and assertiveness preceded current containment moves); that "new Cold War" framing may produce self-fulfilling dynamics (the position holds that risks of weakness exceed risks of confrontation).`,
            `Where serious containment defenders land today. The position is substantially mainstream in current US foreign policy under both Biden (2021-2025) and Trump 2nd term (2025+) administrations. Bipartisan congressional consensus has emerged around China hawkishness even where parties disagree on much else. Differences exist on specifics: how aggressive to be on Taiwan; how complete to make economic decoupling; how to engage allies; how to balance competition with cooperation on shared challenges. But the underlying framing (China as primary strategic competitor requiring sustained response) has become the consensus view in Washington across most of the political spectrum.`,
          ],
          image: `/voyager-assets/history/l14-s3-containment.webp`,
          imageCaption: `Position 1: containment: China as peer rival. Defenders: Aaron Friedberg "A Contest for Supremacy" 2011 + "Getting China Wrong" 2022; Elbridge Colby "The Strategy of Denial" 2021; Hal Brands; Robert Kaplan "The Loom of Time" 2023; Jonathan Ward "China's Vision of Victory" 2019; CFR, AEI, Hudson, Heritage think tanks. Policy: military advantage Indo-Pacific + arm allies + AUKUS 2021 + decouple strategic sectors (CHIPS Act 2022 + export controls) + diplomatic QUAD + values emphasis. Mainstream in current US policy under both Biden and Trump 2nd term.`,
          vocab: [
            {
              word: `containment position on China`,
              definition: `China under Xi Jinping has demonstrated itself to be peer rival fundamentally challenging US-led international order; engagement substantially failed to produce political liberalization or moderated foreign policy; firm response (military deterrence + economic decoupling in strategic sectors + technology export controls + ideological pushback) necessary to preserve democratic governance and prevent Chinese dominance. Defenders: Aaron Friedberg "A Contest for Supremacy" 2011 + "Getting China Wrong" 2022; Robert Kaplan "The Loom of Time" 2023; Hal Brands ongoing; Elbridge Colby "The Strategy of Denial" 2021 (military-strategic dimensions); Jonathan Ward "China's Vision of Victory" 2019; CFR + AEI + Hudson + Heritage think tanks. International relations realists: John Mearsheimer "The Tragedy of Great Power Politics" 2001 predicting US-China conflict. Empirical claims: Xi authoritarian consolidation + Xinjiang/Hong Kong repression + military expansion + assertive foreign policy combined undermines engagement-era assumption; BRI as strategic influence; South China Sea militarization despite 2016 Permanent Court of Arbitration ruling against; Taiwan pressure; cyber espionage; "wolf warrior" diplomacy; CCP rhetorical hostility to Western liberalism. Policy: military (US Indo-Pacific advantage + arm allies Japan/South Korea/Australia/Philippines/Taiwan + AUKUS 2021); economic (decouple strategic sectors: CHIPS Act 2022 + export controls on advanced chips and equipment 2022+); diplomatic (QUAD: US-Japan-Australia-India; expanded NATO Indo-Pacific engagement); values (democratic governance vs Chinese authoritarianism + Taiwan/Hong Kong support + Xinjiang sanctions). Substantially mainstream in current US policy under Biden and Trump 2nd term; bipartisan congressional consensus around China hawkishness.`,
              audioPrompt: `The containment position holds that China under Xi Jinping has demonstrated itself to be a peer rival fundamentally challenging US-led international order, {name}. The position argues that engagement has substantially failed to produce political liberalization or moderated foreign policy; that firm response combining military deterrence, economic decoupling in strategic sectors, technology export controls, and ideological pushback is necessary. Major defenders include Aaron Friedberg "A Contest for Supremacy" from 2011 and "Getting China Wrong" from 2022 arguing engagement failed; Elbridge Colby "The Strategy of Denial" from 2021 on military-strategic dimensions; the Council on Foreign Relations, American Enterprise Institute, Hudson Institute, and Heritage Foundation think tanks. Specific Chinese behaviors cited: Belt and Road as strategic influence project; militarization of South China Sea features despite 2016 Permanent Court of Arbitration ruling against Chinese claims; intensified Taiwan pressure; cyber espionage and intellectual property theft; "wolf warrior" diplomacy. The policy implications include military deterrence in Indo-Pacific, AUKUS submarine partnership in 2021, CHIPS Act in 2022 subsidizing US semiconductor manufacturing, and export controls on advanced chips. The containment position is substantially mainstream in current US foreign policy under both Biden and Trump 2nd term administrations.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 2: Engagement With Competition`,
          paragraphs: [
            `The engagement-with-competition position holds that while China-US competition is real and significant, complete containment is impractical given deep economic interdependence; that engagement substantially worked during the 1990s-2000s in producing economic growth, poverty reduction, and integration that benefited both countries and the world; that competition can be managed through diplomatic engagement, selective decoupling only in genuinely strategic sectors, and recognition that some cooperation on shared challenges (climate, pandemics, nuclear proliferation) remains essential. The position is less dovish than full engagement (which is no longer mainstream) but rejects full containment.`,
            `Major defenders. Susan Shirk "Overreach: How China Derailed Its Peaceful Rise" 2022 (argues Chinese assertiveness reflects Xi's specific choices that may not persist and that US response should be measured to avoid pushing China into corner. Henry Kissinger "On China" 2011 + ongoing writings before his death (Nov 2023); emphasized historical and cultural understanding of China and value of strategic engagement. Joseph Nye Jr. "Is the American Century Over?" 2015 + ongoing (emphasizes soft power and managed competition. ); Kevin Rudd "The Avoidable War" 2022 (argues for "managed strategic competition" framework. Jeffrey Sachs ongoing work emphasizing cooperation over confrontation. Within Asia, scholars including Yan Xuetong (Tsinghua) and others propose Sino-Western relations frameworks that fall between full containment and full accommodation.`,
            `The empirical claims. Engagement substantially worked during the 1990s-2000s: Chinese GDP grew ~10% annually; ~800 million Chinese lifted from extreme poverty; integration into global supply chains produced productivity gains and price reductions benefiting consumers globally; some space for civil society, freer media, and gradual political openness existed in China during the 2000s (though never democratic transition). The framework of integration with conditionality (human rights dialogue, WTO commitments, etc.) had real effects even where insufficient to produce political transformation. Decoupling can produce its own costs: reduced economic growth (multiple studies estimate trade restrictions cost 0.5-2% of GDP across affected countries); reduced consumer welfare from supply chain restructuring; reduced cooperation on shared challenges; increased risk of conflict from reduced economic ties.`,
            `The policy implications. Selective decoupling in genuinely strategic sectors (national security, advanced technology with military applications) rather than across the board. Continued engagement on shared challenges: climate change (China and US together emit ~45% of global CO2; cooperation essential for any solution); pandemic response (COVID-19 origins and response demonstrated both need for cooperation and difficulties); nuclear proliferation (North Korea, Iran). Diplomatic engagement to maintain communication channels and reduce miscalculation risk. Investment in US capabilities (R&D, education, infrastructure) rather than primarily in restricting China. Recognition that China is not the Soviet Union: economic interdependence is much greater; China is not pursuing global ideological expansion; the framework of "new Cold War" may not fit.`,
            `What the engagement-with-competition position acknowledges. Acknowledges: Xi-era China has been substantially more assertive and authoritarian than Hu-era China; engagement has not produced political liberalization; some serious decoupling in strategic sectors is necessary; Taiwan deterrence is essential; Xinjiang policies are serious human rights violations requiring response; military modernization gaps must be addressed.`,
            `What the engagement-with-competition position challenges. Disputes containment claims that engagement substantially failed; argues engagement produced substantial gains even if it didn't produce political transformation; warns that aggressive containment may push China toward more aggressive behavior (security dilemma dynamics); warns that "decoupling" rhetoric exceeds practical possibility given interdependence; emphasizes that cooperation on existential challenges (climate, pandemic, nuclear) is essential regardless of competition. The position holds that "managed strategic competition" rather than "new Cold War" is the more accurate framework.`,
            `Where engagement-with-competition defenders land today. The position is substantial but not dominant in current US foreign policy. Biden administration (2021-2025) substantially operated from this framework even while embracing competition (Jake Sullivan + Kurt Campbell wrote extensively in this vein before serving in Biden administration). Trump 2nd term (2025+) has shifted toward harder containment but engagement-with-competition voices remain influential. Within the broader policy community, the framework has substantial advocates among China scholars and business community. The framework is more dominant outside the US than within: most Asian countries (including allies like South Korea, Japan, Australia, India) substantially prefer it over full containment.`,
          ],
          image: `/voyager-assets/history/l14-s4-engagement.webp`,
          imageCaption: `Position 2: engagement with competition. Defenders: Susan Shirk "Overreach" 2022; Henry Kissinger "On China" 2011 (died Nov 2023); Joseph Nye Jr. "Is the American Century Over?" 2015; Kevin Rudd "The Avoidable War" 2022 ("managed strategic competition"); Jeffrey Sachs ongoing; within Asia Yan Xuetong (Tsinghua) and others. Policy: selective decoupling strategic sectors only; engagement on shared challenges (climate, pandemics, nuclear proliferation); investment in US capabilities; reject "new Cold War" framing. Substantial but not dominant in current US policy; more dominant outside US.`,
          vocab: [
            {
              word: `engagement-with-competition position on China`,
              definition: `China-US competition is real and significant but complete containment is impractical given deep economic interdependence; engagement substantially worked during 1990s-2000s in producing growth, poverty reduction, integration benefiting both countries; competition can be managed through diplomatic engagement, selective decoupling only in genuinely strategic sectors, recognition that cooperation on shared challenges (climate, pandemics, nuclear proliferation) remains essential. Less dovish than full engagement (no longer mainstream) but rejects full containment. Defenders: Susan Shirk "Overreach: How China Derailed Its Peaceful Rise" 2022 (Xi-specific assertiveness may not persist); Henry Kissinger "On China" 2011 + ongoing writings before death Nov 2023 (historical/cultural understanding + strategic engagement); Joseph Nye Jr. "Is the American Century Over?" 2015 + ongoing (soft power + managed competition); Kevin Rudd "The Avoidable War" 2022 ("managed strategic competition" framework); Jeffrey Sachs ongoing; within Asia Yan Xuetong (Tsinghua). Empirical claims: engagement substantially worked 1990s-2000s (~10% annual Chinese GDP growth + ~800M lifted from extreme poverty + integration produced productivity gains and price reductions globally + some civil society space existed in 2000s though never democratic transition). Decoupling produces costs (multiple studies estimate trade restrictions cost 0.5-2% of GDP). Policy: selective decoupling in genuinely strategic sectors (national security + advanced military-applications technology); continued engagement on shared challenges (climate where China+US emit ~45% global CO2; pandemics; nuclear proliferation); diplomatic engagement to maintain channels and reduce miscalculation; investment in US capabilities (R&D, education, infrastructure); recognition that China is not Soviet Union (economic interdependence much greater; not pursuing global ideological expansion). Substantial but not dominant in current US policy; Biden administration 2021-2025 substantially operated from this framework (Jake Sullivan + Kurt Campbell wrote in this vein); more dominant outside US (most Asian countries including South Korea, Japan, Australia, India prefer over full containment).`,
              audioPrompt: `The engagement-with-competition position holds that while China-US competition is real and significant, complete containment is impractical given deep economic interdependence, {name}. The position argues that engagement substantially worked during the 1990s and 2000s in producing economic growth, poverty reduction, and integration that benefited both countries and the world. Major defenders include Susan Shirk in "Overreach: How China Derailed Its Peaceful Rise" from 2022; Henry Kissinger in "On China" from 2011 and ongoing writings before his death in November 2023; Joseph Nye Jr. in "Is the American Century Over?" from 2015; Kevin Rudd in "The Avoidable War" from 2022 arguing for "managed strategic competition" framework. The empirical claims: engagement substantially worked during the 1990s and 2000s, with Chinese GDP growing approximately 10 percent annually and approximately 800 million Chinese lifted from extreme poverty. The policy implications include selective decoupling in genuinely strategic sectors rather than across the board; continued engagement on shared challenges including climate change where China and US together emit approximately 45 percent of global CO2. The position is substantial but not dominant in current US foreign policy.`,
            },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Position 3: Multipolar Accommodation`,
          paragraphs: [
            `The multipolar accommodation position holds that China's rise reflects the historical norm of multipolar global order rather than a temporary aberration to be resisted; that the post-Cold War US unipolar moment was the anomaly, not the rule; that the global order should be restructured to accommodate multiple power centers including China, India, regional powers, and the formerly colonized world; that resisting this transition produces unnecessary conflict and obscures the real political-economic challenges (climate, inequality, governance) that require cooperation rather than great-power rivalry.`,
            `Major defenders. Kishore Mahbubani "The Asian 21st Century" 2022 + "Has the West Lost It?" 2018 (Singaporean diplomat and scholar argues for accepting Asian century. ); Wang Huiyao + Center for China and Globalization (Chinese think tank perspective. ); Pankaj Mishra "From the Ruins of Empire" 2012 + ongoing essays (Indian writer offering broader anti-colonial perspective. Fareed Zakaria "The Post-American World" 2008 (originally), a popular synthesis. From the academic side, scholars including Amitav Acharya "The End of American World Order" 2014, T.V. Paul "The Status of Status" 2014, and various Asian + African scholars. Multiple Latin American and African voices similarly argue for multipolar accommodation as opening for non-Western voices.`,
            `The empirical claims. The post-Cold War US unipolar moment was the anomaly: for most of recorded history, multiple major powers have coexisted in various configurations (Roman + Persian + Chinese empires; Ottoman + Safavid + Mughal + various European powers; etc.). The current global order has been substantially structured to benefit the US and Western Europe: dollar reserve currency, English as global lingua franca, US-led international institutions (IMF, World Bank, UN Security Council permanent membership reflecting WWII outcomes), Western dominance of global media and cultural production. Accommodating multiple power centers means restructuring these arrangements to better reflect actual distribution of global population, economic activity, and political agency. The framework holds that Western anxiety about Chinese rise partly reflects loss of dominance rather than legitimate concern about specifically Chinese behavior.`,
            `The view of Chinese behavior. The position acknowledges Chinese authoritarianism, Xinjiang policies, Taiwan tensions, and other concerns as real problems requiring response. But it positions these as comparable to problems in other countries (US racial inequality and incarceration; European colonialism's continuing economic effects; various Asian and African human rights problems) rather than as uniquely disqualifying for China. The position emphasizes that Western criticism of China often functions as ideological cover for continued Western dominance rather than as principled human rights advocacy: where convenient, the same Western actors support authoritarian governments (Saudi Arabia, UAE, Egypt, etc.) that have records comparable to or worse than China.`,
            `The policy implications. Restructure international institutions to better reflect actual distribution of global agency: expand UN Security Council permanent membership to include India, Brazil, African Union representation, others; reform IMF and World Bank governance to give larger weight to Global South votes; accept Chinese-led alternatives (Asian Infrastructure Investment Bank from 2016, BRICS expansion, etc.) as legitimate features of global order. Diplomatic frameworks: emphasize multilateralism over US-led coalitions; engage China as legitimate major power rather than primarily as threat; recognize that most countries in the world don't want to choose between US and China and shouldn't be pressured to. Economic frameworks: continue economic engagement and integration; recognize that "decoupling" rhetoric primarily benefits US at expense of global growth; build cooperation on shared challenges. Recognition of historical context: Chinese assertiveness can be partly understood as response to 19th-century "century of humiliation" and post-WWII US-led order that systematically subordinated China; acknowledging this context doesn't justify all current Chinese behavior but produces more honest framework for engagement.`,
            `Where multipolar accommodation defenders land. The position is substantial outside the US (within Asia, Africa, Latin America, and parts of Europe) but relatively marginal within US foreign policy debate. Multiple US scholars defend variants of the position; some former diplomats; significant business community advocacy for continued engagement. The position has gained traction in the Global South where Chinese alternatives to Western-led institutions have substantial appeal. Recognizing the position's distribution geographically is itself useful: which voices dominate American foreign policy discussion is itself an artifact of how American discussion is structured rather than a reflection of global views.`,
            `Three positions, three frameworks. Before you commit, consider: containment emphasizes the threat Chinese power poses to liberal international order; engagement-with-competition emphasizes that managed competition can produce mutual benefit while protecting against worst risks; multipolar accommodation emphasizes that the transition to multipolar order is happening regardless and the question is whether it happens through conflict or accommodation. The position you commit to substantially shapes how you'll engage US-China policy debates across your adult life.`,
          ],
          image: `/voyager-assets/history/l14-s5-multipolar.webp`,
          imageCaption: `Position 3: multipolar accommodation. Defenders: Kishore Mahbubani "The Asian 21st Century" 2022 + "Has the West Lost It?" 2018; Wang Huiyao + Center for China and Globalization; Pankaj Mishra "From the Ruins of Empire" 2012; Fareed Zakaria "The Post-American World" 2008; Amitav Acharya "The End of American World Order" 2014. Policy: restructure UN Security Council + IMF/World Bank governance; accept Chinese-led alternatives (AIIB 2016, BRICS expansion); multilateralism over US-led coalitions; recognize historical context (century of humiliation). Substantial outside US; marginal within US debate.`,
          vocab: [
            {
              word: `multipolar accommodation position on China`,
              definition: `China's rise reflects historical norm of multipolar order rather than aberration; post-Cold War US unipolar moment was anomaly not rule; global order should restructure to accommodate multiple power centers including China + India + regional powers + formerly colonized world; resisting transition produces unnecessary conflict and obscures real political-economic challenges (climate, inequality, governance) requiring cooperation. Defenders: Kishore Mahbubani "The Asian 21st Century" 2022 + "Has the West Lost It?" 2018 (Singaporean diplomat/scholar arguing for Asian century); Wang Huiyao + Center for China and Globalization; Pankaj Mishra "From the Ruins of Empire" 2012 + ongoing (Indian writer broader anti-colonial perspective); Fareed Zakaria "The Post-American World" 2008; Amitav Acharya "The End of American World Order" 2014; T.V. Paul "The Status of Status" 2014; Latin American + African voices for multipolar accommodation. Empirical claims: unipolar moment was anomaly (multiple major powers coexisted for most of recorded history: Roman + Persian + Chinese empires; Ottoman + Safavid + Mughal + various European; etc.); current global order substantially structured to benefit US + Western Europe (dollar reserve currency, English lingua franca, US-led institutions, Western media/cultural dominance); Western anxiety partly reflects loss of dominance not legitimate concern. View of Chinese behavior: authoritarianism + Xinjiang + Taiwan tensions as real problems requiring response but positioned as comparable to problems in other countries (US racial inequality + incarceration; European colonialism continuing effects; various Asian/African human rights problems) rather than uniquely disqualifying; Western criticism often functions as ideological cover for continued dominance rather than principled advocacy (where convenient, same actors support Saudi Arabia, UAE, Egypt authoritarian regimes). Policy: restructure international institutions (expand UN Security Council permanent membership: India + Brazil + African Union; reform IMF/World Bank governance for Global South weight; accept Chinese-led alternatives like Asian Infrastructure Investment Bank from 2016 + BRICS expansion as legitimate); multilateralism over US-led coalitions; engage China as legitimate major power; recognize historical context (Chinese assertiveness partly response to "century of humiliation" + post-WWII US-led order). Substantial outside US; relatively marginal within US foreign policy debate.`,
              audioPrompt: `The multipolar accommodation position holds that China's rise reflects the historical norm of multipolar global order rather than a temporary aberration to be resisted, {name}. The post-Cold War US unipolar moment was the anomaly, not the rule. The global order should be restructured to accommodate multiple power centers including China, India, regional powers, and the formerly colonized world. Major defenders include Kishore Mahbubani in "The Asian 21st Century" from 2022 and "Has the West Lost It?" from 2018, a Singaporean diplomat and scholar arguing for accepting Asian century; Pankaj Mishra in "From the Ruins of Empire" from 2012 offering broader anti-colonial perspective; Fareed Zakaria in "The Post-American World" from 2008 popular synthesis; Amitav Acharya in "The End of American World Order" from 2014. The position emphasizes that Western criticism of China often functions as ideological cover for continued Western dominance rather than as principled human rights advocacy: where convenient, the same Western actors support authoritarian governments like Saudi Arabia, UAE, and Egypt that have records comparable to or worse than China. The policy implications include restructuring international institutions and accepting Chinese-led alternatives.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ──────────────────────────────────────────────
        {
          id: `l14-argument-builder`,
          type: `argument-builder`,
          headline: `What Should The US Do About China's Rise?`,
          intro: `Pick the position that best captures your view on US-China strategic competition. Build your case with 4-5 pieces of evidence. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `containment`,
              label: `Containment: China is a peer rival challenging US-led order; firm response combining military deterrence + economic decoupling + technology controls + ideological pushback is necessary`,
              summary: `Defenders: Aaron Friedberg "A Contest for Supremacy" 2011 + "Getting China Wrong" 2022; Elbridge Colby "The Strategy of Denial" 2021; Hal Brands ongoing; Robert Kaplan "The Loom of Time" 2023; Jonathan Ward "China's Vision of Victory" 2019; CFR + AEI + Hudson + Heritage think tanks; international relations realists John Mearsheimer. Substantially mainstream in current US policy under Biden and Trump 2nd term; bipartisan congressional consensus. Empirical claims: Xi-era authoritarian consolidation + Xinjiang/Hong Kong + South China Sea militarization despite 2016 PCA ruling + Taiwan pressure + cyber espionage + "wolf warrior" diplomacy. Policy: AUKUS 2021, QUAD, CHIPS Act 2022, export controls on chips/equipment 2022+, decoupling in strategic sectors, allied military support.`,
            },
            {
              id: `engagement-competition`,
              label: `Engagement with competition: complete containment is impractical given interdependence; selective decoupling in strategic sectors + continued cooperation on shared challenges + diplomatic engagement to manage competition`,
              summary: `Defenders: Susan Shirk "Overreach" 2022; Henry Kissinger "On China" 2011 + ongoing pre-Nov 2023; Joseph Nye Jr. "Is the American Century Over?" 2015 + ongoing; Kevin Rudd "The Avoidable War" 2022 ("managed strategic competition"); Jeffrey Sachs ongoing. Empirical claims: engagement substantially worked 1990s-2000s (~10% annual Chinese GDP growth + ~800M lifted from extreme poverty + global productivity gains); decoupling costs 0.5-2% GDP (multiple studies); China not Soviet Union (interdependence much greater; not pursuing global ideological expansion). Policy: selective decoupling strategic sectors; engagement on climate (China+US ~45% global CO2) + pandemics + nuclear proliferation; investment in US capabilities; reject "new Cold War" framing. Substantial but not dominant in US policy; more dominant outside US (most Asian countries prefer).`,
            },
            {
              id: `multipolar`,
              label: `Multipolar accommodation: China's rise reflects historical norm; unipolar moment was anomaly; restructure global order to accommodate multiple power centers rather than resist`,
              summary: `Defenders: Kishore Mahbubani "The Asian 21st Century" 2022 + "Has the West Lost It?" 2018; Pankaj Mishra "From the Ruins of Empire" 2012; Fareed Zakaria "The Post-American World" 2008; Amitav Acharya "The End of American World Order" 2014; T.V. Paul "The Status of Status" 2014. Empirical claims: multiple major powers coexisted for most of recorded history (Roman + Persian + Chinese empires; Ottoman + Safavid + Mughal + European); current order benefits US + Western Europe disproportionately; Western anxiety partly reflects loss of dominance; Western criticism often functions as ideological cover (same actors support Saudi Arabia, UAE, Egypt). Policy: restructure UN Security Council permanent membership (India + Brazil + African Union); reform IMF/World Bank governance; accept AIIB 2016 + BRICS expansion as legitimate; multilateralism over US-led coalitions. Substantial outside US; marginal within US foreign policy debate.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Chinese GDP grew from ~$400 billion (1990) to ~$18 trillion (2024) in current dollars; ~800 million Chinese lifted from extreme poverty over the period (World Bank framing). China is now world's largest manufacturer (~30% global manufacturing output, more than next several countries combined), largest trader (top trading partner of ~120 countries), and second-largest economy.`,
              source: `IMF + World Bank + Chinese national statistics`,
            },
            {
              id: `e2`,
              text: `Xi-era China has demonstrated authoritarian consolidation (term limits eliminated 2018), intensified repression in Xinjiang (~1-2 million Uyghurs detained at peak; designated genocide by US 2021 + UK + Canada + Netherlands; China denies and refuses independent investigation), and Hong Kong (National Security Law June 30 2020 substantially ended distinct political space after 2019 protests).`,
              source: `Multiple documentation; UN expert panel reports; Australian Strategic Policy Institute; congressional and parliamentary findings`,
            },
            {
              id: `e3`,
              text: `Belt and Road Initiative (2013+) has committed approximately $1 trillion across 150+ countries in infrastructure investments. The initiative has expanded Chinese influence substantially and produced debt distress in some recipient countries (Sri Lanka's Hambantota port lease 2017 + economic collapse 2022; Zambia debt restructuring; multiple other cases).`,
              source: `Boston University Global Development Policy Center; Asia Society; Council on Foreign Relations`,
            },
            {
              id: `e4`,
              text: `Engagement era (1990s-2000s) produced ~10% annual Chinese GDP growth and the largest poverty reduction in human history. The integration produced productivity gains and price reductions benefiting consumers globally. Multiple studies estimate trade restrictions (CHIPS Act, export controls, tariffs) cost 0.5-2% of GDP across affected countries.`,
              source: `Multiple economic studies; Peterson Institute for International Economics`,
            },
            {
              id: `e5`,
              text: `China is no longer the Soviet Union: US-China bilateral trade is approximately $700+ billion annually (compared to negligible US-Soviet trade); China is not pursuing global ideological expansion in the manner of Soviet model; economic interdependence is substantially greater. The "new Cold War" framing may produce self-fulfilling dynamics that produce actual military conflict over Taiwan or other flashpoints.`,
              source: `US Trade Representative; multiple scholarly analyses of comparison`,
            },
            {
              id: `e6`,
              text: `Climate change requires US-China cooperation: the two countries together emit ~45% of global CO2 (China ~30%, US ~15%). No solution to climate change is possible without substantial cooperation between the two. Similar dynamics apply to pandemic response, nuclear proliferation, and other genuinely global challenges.`,
              source: `Global Carbon Project; IPCC reports; multiple international relations analyses`,
            },
            {
              id: `e7`,
              text: `The post-WWII international order was substantially structured to benefit US + Western Europe: dollar reserve currency, English as global lingua franca, US-led international institutions (IMF, World Bank, UN Security Council permanent membership reflecting WWII outcomes), Western dominance of global media and cultural production. The order has been maintained partly through preference rather than universal acceptance.`,
              source: `Multiple international relations and economics analyses; specific institutional studies`,
            },
            {
              id: `e8`,
              text: `Most countries in the world don't want to choose between US and China. Major regional powers including India, Brazil, Turkey, Saudi Arabia, Indonesia, South Africa, and many others have positioned to maintain relations with both. Polls in Africa and Latin America substantially show preference for cooperation with both rather than alignment with one.`,
              source: `Pew Research Center; various Asia-Africa-Latin America polling; diplomatic positioning`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You've committed to a position. Here's the strongest objection. Whichever position you've taken, you're making predictions about Chinese behavior and US policy across the next 30-50 years on the basis of limited current information. Xi Jinping is one specific Chinese leader; he may be replaced by leadership pursuing different policies; current Chinese policies could shift substantially. US policy under different administrations could shift substantially as well. The specific path of US-China relations across 30-50 years will depend on choices not yet made by leaders not yet in office responding to events not yet happened. Predicting confidently from current data may produce more certain conclusions than the situation warrants. Maybe the honest answer is 'I don't know what the right policy will be in 2050; I commit to engagement based on current information but with awareness that the framework may need substantial revision as events develop.'"`,
            promptInstruction: `In 4-5 sentences, respond. Does your committed position survive recognition of uncertainty about Chinese trajectory and US policy across decades? Or does it require modification?`,
          },
          reflectionPrompt: `Looking at the position you didn't commit to: which has the strongest argument? Where do your priors (citizenship, family background, what you've been taught about China) shape which felt natural?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What was the "century of humiliation" in Chinese history?`,
              options: [
                `Random`,
                `Approximately 1839-1949: forced concessions to European and Japanese powers. First Opium War 1839-1842 (Britain forced opium imports; Treaty of Nanjing 1842 ceded Hong Kong + opened 5 treaty ports + reparations); similar "unequal treaties" with France/Russia/Germany/US; Second Opium War 1856-1860; Taiping Rebellion 1850-1864 (~20-30M dead); First Sino-Japanese War 1894-1895 (Japan seized Taiwan); Boxer Rebellion 1899-1901 + Eight-Nation Alliance (UK/France/Germany/Russia/Japan/Italy/Austria-Hungary/US); Qing dynasty fall 1911-1912; Japanese invasion 1937-1945 (~15-20M Chinese deaths + Nanjing Massacre Dec 1937-Jan 1938 ~200-300K killed in 6 weeks).`,
                `Just bad`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The "century of humiliation" is foundational to Chinese national identity and to CCP legitimacy claims. The Chinese self-understanding of overcoming this period shapes Chinese views of restoring sovereignty (Taiwan, Hong Kong) and responding to perceived Western encroachment. Engaging this history seriously is essential for understanding Chinese policy.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What happened during the Mao era?`,
              options: [
                `Random`,
                `1949-1976. Mao Zedong proclaimed People's Republic of China Oct 1 1949; Kuomintang retreated to Taiwan. Great Leap Forward 1958-1962: forced collectivization + unrealistic industrial targets produced Great Chinese Famine, estimated ~15-45 million deaths (Frank Dikötter "Mao's Great Famine" 2010 estimates ~45M). Cultural Revolution 1966-1976: Mao's political mobilization of "Red Guards" against perceived counter-revolutionary elements killed 1-2 million, persecuted millions more, destroyed cultural artifacts, traumatized society. The era ended with Mao's death 1976. Mao remains complex figure in Chinese memory: official assessment 70% correct / 30% wrong; foundational figure to CCP legitimacy while specific policies acknowledged as catastrophic.`,
                `Just communism`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Mao era's catastrophes are essential context. The Great Leap Forward famine and Cultural Revolution are among the largest mass-death events in 20th-century history. The official Chinese assessment (70/30) is a specific political position that allows CCP legitimacy while acknowledging specific failures.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What characterizes the reform era (1978-2012)?`,
              options: [
                `Random`,
                `Deng Xiaoping introduced "reform and opening" (gaige kaifang) from December 1978. Agricultural decollectivization; Special Economic Zones starting with Shenzhen 1980; gradual privatization of small/medium enterprises; foreign investment liberalization; WTO accession December 11, 2001. Political reforms remained firmly bounded under one-party rule; 1989 Tiananmen Square protests violently suppressed June 3-4, 1989. Sustained dramatic economic growth (~10% annual GDP growth for three decades); ~800M Chinese lifted from extreme poverty; urbanization transformed rural-majority country to majority-urban; manufacturing capacity grew to world's largest. Jiang Zemin (1989-2002) + Hu Jintao (2002-2012) led during this period.`,
                `Just growth`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The reform era produced the largest poverty reduction in human history while preserving one-party rule. The combination challenges the Western assumption that economic development requires political liberalization. Tiananmen 1989 marked the firm boundary: economic reform yes, political reform no.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What characterizes the Xi era (2012-present)?`,
              options: [
                `Random`,
                `Xi Jinping became General Secretary of CCP November 2012, President of PRC March 2013; term limits eliminated 2018 allowing indefinite tenure; "Xi Jinping Thought" added to constitutions. Authoritarian consolidation: anti-corruption campaign 2012+ (served both genuine purpose + political consolidation); Xinjiang mass detention of Uyghurs (~1-2M at peak ~2017-2019; designated genocide by US 2021 + UK + Canada + Netherlands; China denies); Hong Kong National Security Law June 30 2020 substantially ended distinct political space after 2019 protests; intensified surveillance (facial recognition + social credit + great firewall); Tibet + Mongolia cultural suppression. Foreign policy: Belt and Road Initiative 2013+ ($1T+ across 150+ countries); military modernization closing gaps; Taiwan tensions increased; South China Sea militarization despite 2016 Permanent Court of Arbitration ruling against.`,
                `Just bad`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Xi-era China is substantially more assertive, authoritarian, and ambitious than predecessor eras. The specific policies (Xinjiang, Hong Kong, Taiwan, BRI) substantially shape current US-China dynamics. Recognizing Xi-era specifics matters for analyzing current and future trajectory.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the containment position on China?`,
              options: [
                `Random`,
                `China is peer rival fundamentally challenging US-led international order; engagement substantially failed; firm response (military deterrence + economic decoupling in strategic sectors + technology export controls + ideological pushback) necessary. Defenders: Aaron Friedberg "A Contest for Supremacy" 2011 + "Getting China Wrong" 2022; Elbridge Colby "The Strategy of Denial" 2021; Hal Brands; Robert Kaplan; CFR + AEI + Hudson + Heritage think tanks; international relations realists Mearsheimer. Policy: AUKUS 2021, QUAD (US-Japan-Australia-India), CHIPS Act 2022, export controls on advanced chips/equipment 2022+, allied military support, decoupling strategic sectors. Substantially mainstream in current US policy under both Biden 2021-2025 and Trump 2nd term 2025+; bipartisan congressional consensus.`,
                `Just hawks`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The containment position is mainstream in current US foreign policy. Recognizing the specific defenders, the specific policy measures (AUKUS, QUAD, CHIPS Act, export controls), and the bipartisan consensus matters for engaging this position seriously rather than dismissing it.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the engagement-with-competition position?`,
              options: [
                `Random`,
                `Complete containment impractical given economic interdependence; engagement substantially worked 1990s-2000s producing growth/poverty reduction/integration; competition can be managed through diplomatic engagement + selective decoupling only in genuinely strategic sectors + cooperation on shared challenges. Defenders: Susan Shirk "Overreach" 2022; Henry Kissinger "On China" 2011 + ongoing pre-Nov 2023; Joseph Nye Jr. "Is the American Century Over?" 2015; Kevin Rudd "The Avoidable War" 2022 ("managed strategic competition"); Jeffrey Sachs. Empirical: engagement era produced ~10% annual Chinese GDP growth + ~800M poverty reduction + global gains; decoupling costs 0.5-2% GDP. China not Soviet Union (interdependence much greater; not pursuing global ideological expansion). Substantial but not dominant in US policy; more dominant outside US.`,
                `Just doves`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The engagement-with-competition position is the mainstream academic position even where it's not the mainstream US policy position. Recognizing the gap between scholarly assessment and policy direction is itself useful.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the multipolar accommodation position?`,
              options: [
                `Random`,
                `China's rise reflects historical norm of multipolar order; post-Cold War US unipolar moment was anomaly; global order should restructure to accommodate multiple power centers. Defenders: Kishore Mahbubani "The Asian 21st Century" 2022 + "Has the West Lost It?" 2018; Pankaj Mishra "From the Ruins of Empire" 2012; Fareed Zakaria "The Post-American World" 2008; Amitav Acharya "The End of American World Order" 2014; T.V. Paul "The Status of Status" 2014. Empirical: multiple major powers coexisted for most of recorded history; current order benefits US + Western Europe disproportionately; Western anxiety partly reflects loss of dominance; Western criticism often functions as ideological cover. Policy: restructure UN Security Council (India + Brazil + African Union); reform IMF/World Bank governance; accept AIIB 2016 + BRICS expansion as legitimate. Substantial outside US; marginal within US foreign policy debate.`,
                `Just appeasement`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The multipolar accommodation position is substantial outside the US even where it's marginal within US foreign policy debate. Recognizing this geographic distribution of views is itself useful: which voices dominate American foreign policy discussion is an artifact of how American discussion is structured.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does Taiwan matter for US-China dynamics?`,
              options: [
                `Random`,
                `Taiwan separated from mainland China when Kuomintang fled there in 1949 after losing civil war to CCP; democratized starting late 1980s and now holds free elections with vibrant civil society. PRC maintains position that Taiwan is part of "One China" and reunification (peacefully if possible, by force if necessary) is non-negotiable national priority. Most countries including US maintain "one China" position while supporting Taiwan's de facto autonomy and supplying defensive weapons. Taiwan question is most likely flashpoint for direct US-China military conflict: Xi has stated reunification required and increased PLA exercises; US under Biden + Trump 2nd term maintains "strategic ambiguity" about whether US would militarily defend Taiwan against invasion. Taiwan's role in global semiconductor supply chain (TSMC) substantially heightens strategic significance.`,
                `Just island`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Taiwan is the most likely flashpoint for US-China military conflict and matters for several reasons: PRC position that reunification is non-negotiable; Taiwan's democratic governance; Taiwan's central role in semiconductor production (TSMC produces majority of world's advanced chips); US "strategic ambiguity" framework. Understanding Taiwan dynamics is essential for engaging US-China policy.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The engagement era (1990s-2000s) failed to produce any benefits and decoupling from China is now urgently necessary.`,
              correctAnswer: false,
              explanation: `False. The engagement era substantially worked in producing extraordinary results: Chinese GDP grew approximately 10% annually for three decades; approximately 800 million Chinese were lifted from extreme poverty (the largest poverty reduction in human history per World Bank framing); integration produced productivity gains and price reductions benefiting consumers globally; some space for civil society and gradual political openness existed in 2000s China. The position that engagement failed is the containment position, which is one of three serious positions on US-China policy. The mainstream academic position (engagement-with-competition) holds that engagement produced substantial benefits even though it didn't produce political transformation, and that selective decoupling in strategic sectors makes sense without complete decoupling. Multiple studies estimate that trade restrictions cost 0.5-2% of GDP across affected countries. The "engagement failed" framing is itself a position with serious counterarguments, not the consensus view.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend's parent says "We need to be tougher on China. They're our biggest threat and we can't let them dominate." Based on this lesson, what should you point out?`,
              options: [
                `"They're right"`,
                `"Several specific things, with respect. First, the framing is the containment position, which is one of three serious positions on US-China policy and is currently mainstream in US foreign policy under both Biden 2021-2025 and Trump 2nd term 2025+. The position has serious defenders (Aaron Friedberg 'A Contest for Supremacy' 2011 + 'Getting China Wrong' 2022; Elbridge Colby 'The Strategy of Denial' 2021; major think tanks; bipartisan congressional consensus). But it's not the consensus academic position, and it's not the dominant view in most of the world. Second, the engagement-with-competition position (Susan Shirk 'Overreach' 2022; Henry Kissinger 'On China' 2011; Joseph Nye Jr.; Kevin Rudd 'The Avoidable War' 2022; Jeffrey Sachs) holds that complete containment is impractical given deep economic interdependence (US-China bilateral trade approximately $700+ billion annually) and that engagement substantially worked in producing extraordinary results: Chinese GDP grew from ~$400 billion in 1990 to ~$18 trillion in 2024; approximately 800 million Chinese lifted from extreme poverty (largest poverty reduction in human history). Multiple studies estimate trade restrictions and decoupling cost 0.5-2% of GDP across affected countries. Climate change cooperation requires US-China engagement: the two countries together emit ~45% of global CO2 (China ~30%, US ~15%). Third, the multipolar accommodation position (Kishore Mahbubani 'The Asian 21st Century' 2022; Pankaj Mishra 'From the Ruins of Empire' 2012; Fareed Zakaria; Amitav Acharya) holds that China's rise reflects historical norm of multipolar order, that the post-Cold War US unipolar moment was the anomaly, and that resisting the transition produces unnecessary conflict. This position is substantial outside the US (in Asia, Africa, Latin America) but relatively marginal within US foreign policy debate. The framing that 'most countries are with us' against China is substantially false: most countries position to maintain relations with both US and China rather than aligning. Fourth, the specific claim 'they're our biggest threat' is itself a position. The empirical reality: Xi-era China has been authoritarian and assertive (Xinjiang; Hong Kong; South China Sea; Taiwan pressure) are real concerns. But characterizing China as 'biggest threat' depends on weighting various threats (climate change kills hundreds of thousands annually and is accelerating; pandemic risks; nuclear proliferation; democratic backsliding within Western countries themselves; etc.). The 'biggest threat' framing reflects specific framing choices about what to prioritize. Fifth, what to do practically: don't argue confrontationally; share that there are multiple serious positions and that you've been learning about them. The conversation can usefully ask: what would success look like for US-China policy? What costs are acceptable? How do we balance competition with cooperation on shared challenges? These questions are productive even when initial views differ. The framework you build at 12 by engaging three serious positions on US-China rather than committing to one is more substantial than the single-position framing most adults hold."`,
                `"Random"`,
                `"Just yes"`,
              ],
              correctIndex: 1,
              explanation: `Real applied US-China policy literacy. The containment position is one of three serious positions; engagement-with-competition is mainstream academic position; multipolar accommodation is substantial outside US. Engaging the specific defenders, empirical claims, and policy implications of each position is foundation for serious citizenship across decades.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-position`, category: `Your commitment`, prompt: `Why did you commit to the position you picked? What specific evidence made it most convincing? What would it take to revise?` },
            { id: `reflect-priors`, category: `Your priors`, prompt: `Which position felt most natural? Which felt most foreign or challenging? What does that say about your background and what you've been taught about China?` },
            { id: `reflect-history`, category: `Historical context`, prompt: `Does engaging Chinese history (longest continuous civilization, "century of humiliation" 1839-1949, WWII Japanese invasion, Mao era catastrophes, reform era extraordinary growth, Xi era authoritarian consolidation) change how you read current Chinese policy? How?` },
            { id: `reflect-taiwan`, category: `Taiwan`, prompt: `The Taiwan question is the most likely flashpoint for direct US-China military conflict. PRC position is reunification is non-negotiable; Taiwan is democratic and wants to remain autonomous; US maintains "strategic ambiguity." What's your view on what US policy should be?` },
            { id: `reflect-climate`, category: `Climate cooperation`, prompt: `Climate change requires US-China cooperation (the two countries together emit ~45% of global CO2). How does this requirement interact with the strategic competition? Can countries cooperate on existential challenges while competing strategically?` },
            { id: `reflect-multipolar`, category: `Multipolar world`, prompt: `If the multipolar accommodation position is correct that the US unipolar moment was the anomaly, what does the next 30 years of global politics look like? How should the US adapt?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `US-China policy across decades is your generation's central foreign policy challenge. Two paths.`,
          familyActivity: {
            title: `Family China Conversation`,
            duration: `60 minutes`,
            description: `Share the three positions with your family. Family members may have direct or indirect connections: family with Chinese, Taiwanese, Hong Kong, or East Asian background; family who worked in industries affected by US-China trade; family with military or foreign policy experience; family whose retirement accounts include Chinese exposure. The conversation often surfaces specific perspectives and concerns. If your family includes Chinese-American or Chinese-immigrant members, their accounts of family experience in China across the reform era are valuable. Recognizing that "China policy" affects specific people including in your own family substantially grounds abstract policy discussions.`,
          },
          projectOption: {
            title: `Deep Dive Into One Aspect Of China, 6 weeks (optional)`,
            duration: `6 weeks, ~45 minutes per session`,
            description: `Pick one aspect of China for deep study. Options: Taiwan and the question of reunification (read Susan Shirk on Taiwan; recent reporting on cross-strait dynamics); Xinjiang and Uyghur situation (read Darren Byler "In the Camps" 2021; Sean Roberts "The War on the Uyghurs" 2020); Hong Kong and 2019-2020 protests (read Karen Cheung "The Impossible City" 2022; recent journalism); China's economy and Xi-era trajectory (read Elizabeth Economy "The Third Revolution" 2018; recent journalism on real estate crisis and demographic transitions); Chinese history (read Frank Dikötter trilogy on Mao; or John Iliffe "Africans" plus Chinese contrast). Across 6 weeks, develop substantial knowledge of one aspect. Week 6: write 2,000 words integrating the readings and applying the framework from this lesson.`,
            offerToParent: `Parent: opt your kid into this project. Sustained engagement with one aspect of China at 12-13 builds substantial foundation for engaging US-China policy across decades.`,
          },
          identityQuestion: `If you become someone who engages China policy across three serious positions, knows specific Chinese history (longest continuous civilization, century of humiliation, Mao catastrophes, reform era, Xi era), and recognizes concrete scale (~1.4B people, ~$18T GDP, ~$1T BRI, Taiwan as flashpoint), what does that change about how you'll engage as a citizen across decades?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who engages US-China policy across three serious positions rather than committing reflexively to one.`,
            `A person who knows the "century of humiliation" and what it means for Chinese national identity.`,
            `Someone who recognizes the Taiwan question as the most likely flashpoint for direct US-China military conflict.`,
          ],
          saveKey: `identity_responses_hw_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteenth History and World lesson done. You have framework for three serious positions on US-China policy: containment (Friedberg, Colby, mainstream current US policy); engagement-with-competition (Shirk, Kissinger, Nye, Rudd; mainstream academic); multipolar accommodation (Mahbubani, Mishra, Zakaria, Acharya; substantial outside US). You know Chinese history specifically: longest continuous civilization; "century of humiliation" 1839-1949 (Opium Wars + Taiping Rebellion ~20-30M + Boxer Rebellion + Japanese invasion 1937-1945 ~15-20M deaths + Nanjing Massacre Dec 1937-Jan 1938 ~200-300K killed in 6 weeks); Mao era 1949-1976 (Great Leap Forward Famine ~15-45M; Cultural Revolution 1-2M); reform era 1978-2012 (Deng + ~10% annual GDP growth + ~800M lifted from extreme poverty + Tiananmen 1989); Xi era 2012-present (consolidation + Xinjiang genocide designation by US 2021 + Hong Kong NSL June 30 2020 + Belt and Road Initiative $1T+ across 150+ countries). You know contemporary scale: ~1.4B people, ~$18T GDP, world's largest manufacturer + trader, ~410 nuclear warheads. You know Taiwan as core flashpoint. Six lessons to go. Next: Africa, the continent misunderstood. Source Evaluation. Three tiers of sources on Africa, addressing the "single story" problem directly. Onward. — Lyra`,
          badge: `china-literate`,
          badgeName: `China Literate`,
          xpEarned: 75,
          competencies: [
            `Names Chinese history specifically (longest civilization; "century of humiliation" 1839-1949; WWII Japanese invasion ~15-20M Chinese deaths; Mao era catastrophes; reform era; Xi era)`,
            `Names contemporary China in scale (~1.4B people, ~$18T GDP, world's largest manufacturer + trader, Belt and Road $1T+ across 150+ countries)`,
            `Articulates three serious positions on US-China policy (containment, engagement-with-competition, multipolar accommodation)`,
            `Names major defenders for each position (Friedberg/Colby/Brands; Shirk/Kissinger/Nye/Rudd; Mahbubani/Mishra/Zakaria/Acharya)`,
            `Engages Taiwan question as most likely US-China military flashpoint`,
            `Recognizes Xinjiang Uyghur situation as serious and contested (US/UK/Canada/Netherlands designated genocide; China denies)`,
            `Recognizes that climate cooperation requires US-China engagement (combined ~45% global CO2)`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Africa, The Continent Misunderstood`,
            hook: `Source Evaluation. Three tiers. The "single story" problem and how to read Africa seriously.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L14 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
