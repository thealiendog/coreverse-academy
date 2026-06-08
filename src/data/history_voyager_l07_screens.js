// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L07 — Imperialism and Its Long Shadow
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Imperialism, Extraction, Structural Legacies
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: ARGUMENT BUILDER (developmental / extractive / ongoing-structural)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l07-v1";

const HISTORY_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-07`,
      title: `Imperialism and Its Long Shadow`,
      duration: 35,
      xpReward: 75,
      badge: `imperialism-literate`,
      badgeName: `Imperialism Literate`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, imperialism shaped the modern world. The borders of most current countries, the languages spoken across continents, the wealth distribution between nations, the patterns of migration, the ongoing conflicts in dozens of places: all of these are substantially products of imperial expansion and contraction across the past five centuries. Three serious positions exist on what imperialism actually was and what its legacy means. Position one (a minority view today but with serious defenders): imperialism brought development that wouldn't otherwise have happened. Position two (the mainstream historical view): imperialism was systematic extraction and violence producing massive death and lasting damage. Position three (decolonial and world-systems theorists): imperialism didn't end with formal independence; it continues through economic structures, debt regimes, and ongoing intervention. The position you commit to today shapes how you'll read much of the rest of this band: the Middle East, China, Africa, Latin America, Indigenous peoples, the Cold War. Engaging seriously matters.`,
          headline: `Imperialism and Its Long Shadow`,
          subtitle: `Three positions on what imperialism was and what its legacy means. Argument Builder.`,
          visual: `/voyager-assets/history/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Imperialism?`,
          paragraphs: [
            `Imperialism is the practice of extending political, economic, and military control by one society over others, typically across substantial distances, for the benefit of the controlling society. The Roman Empire, the various Chinese dynasties, the Mongol Empire, the Ottoman, Safavid, and Mughal empires, the Spanish and Portuguese empires in the Americas, the Atlantic slave trade, the British Empire, the French colonial empire, Belgian Congo, the Soviet sphere, American post-WWII global presence: all are examples of imperialism in different forms. The historical pattern is ancient; the specific modern European form running from roughly 1500 to 1960 was distinctive in its scale, its global reach, its economic integration with industrial capitalism, and its racial framings.`,
            `Distinctions worth drawing. Colonialism specifically refers to settler movements (people from the imperial power moving to live in the colonized territory permanently); not all imperialism is colonialism. Settler colonialism (the version of colonialism that aims to replace the indigenous population through land seizure and demographic transformation, as in the United States, Canada, Australia, Israel/Palestine) differs from extractive colonialism (which extracts resources without aiming to replace the population, as in much of British India or the Belgian Congo). Neo-colonialism describes ongoing imperial relations after formal independence, typically through economic and cultural rather than direct political control.`,
            `The scale honestly. Trans-Atlantic slave trade (roughly 1500-1866): approximately 12.5 million Africans were forcibly transported across the Atlantic; roughly 1.8 million died during the Middle Passage itself. Belgian Congo under King Leopold II (1885-1908): estimates suggest about 10 million deaths from forced labor, violence, starvation, and disease, in service of rubber extraction (documented by Adam Hochschild in "King Leopold's Ghost" 1998 and others). British India late Victorian famines (1876-1902): Mike Davis ("Late Victorian Holocausts" 2001) documents 12-30 million deaths in famines that occurred while India was a net food exporter to Britain. Algerian War of Independence (1954-1962): estimates range from 250,000 to over a million Algerian deaths. These are not minor footnotes; they're among the major mass-death events in modern history.`,
            `Why the topic is uncomfortable in many countries. Imperial powers tend to tell the history of their empires as stories of adventure, civilization, and benevolent governance. Until recently, British schoolchildren learned about empire as "what made Britain great"; French schoolchildren learned about the "civilizing mission" in Africa; Americans learned about "Manifest Destiny" and the "frontier" without much attention to whose lands were being seized. The mainstream historical view has shifted substantially in the past 50 years as scholarship from formerly colonized regions, women's and ethnic-minority historians, and structural analysts has brought the costs into clearer view. But the older framings persist in popular discourse and in many curricula.`,
            `Three serious positions today on what imperialism was and what its legacy means. The developmental position (Niall Ferguson and others) argues that empires, despite their costs, produced net positive development through infrastructure, institutions, and integration with the global economy. The extractive position (the current mainstream historical view) argues that imperialism was systematic extraction and violence with massive costs that vastly outweigh whatever development occurred. The ongoing-structural position (decolonial theorists, world-systems theorists) argues that imperialism continues through current economic structures even after formal independence. We work through each.`,
          ],
          image: `/voyager-assets/history/l07-s1-what-is.webp`,
          imageCaption: `Imperialism: extending political/economic/military control across distances for benefit of controlling society. Distinctions: colonialism (settler movement) vs extractive colonialism vs neo-colonialism. Scale: trans-Atlantic slave trade (~12.5M transported, ~1.8M died), Belgian Congo under Leopold II (~10M deaths), British India late Victorian famines (~12-30M deaths). Three serious positions on legacy.`,
          vocab: [
            {
              word: `what imperialism is`,
              definition: `Practice of extending political, economic, and military control by one society over others, typically across substantial distances, for the benefit of the controlling society. Ancient pattern (Roman, Chinese dynasties, Mongol, Ottoman, Mughal); modern European form (1500-1960) distinctive in scale, global reach, integration with industrial capitalism, racial framings. Distinctions: colonialism (settler movement) vs settler colonialism (aiming to replace indigenous population: US, Canada, Australia, Israel/Palestine) vs extractive colonialism (resources without replacement: British India, Belgian Congo). Neo-colonialism: ongoing imperial relations after formal independence through economic/cultural rather than direct political control. Scale honestly: trans-Atlantic slave trade ~12.5M Africans transported (~1.8M died in Middle Passage) 1500-1866; Belgian Congo under Leopold II ~10M deaths 1885-1908 (Adam Hochschild "King Leopold's Ghost" 1998); late Victorian British India famines ~12-30M deaths 1876-1902 (Mike Davis "Late Victorian Holocausts" 2001) during net food export to Britain; Algerian War 1954-1962 ~250,000 to 1M+ Algerian deaths.`,
              audioPrompt: `Imperialism is the practice of extending political, economic, and military control by one society over others across substantial distances for the benefit of the controlling society, {name}. The Roman Empire, the various Chinese dynasties, the Mongol Empire, the Ottoman, Safavid, and Mughal empires, the Spanish and Portuguese empires in the Americas, the trans-Atlantic slave trade, the British Empire, the French colonial empire, Belgian Congo, the Soviet sphere, American post-WWII global presence: all are examples in different forms. The specific modern European form running from roughly 1500 to 1960 was distinctive in scale, global reach, economic integration with industrial capitalism, and racial framings. The scale honestly: trans-Atlantic slave trade transported approximately 12.5 million Africans across the Atlantic between 1500 and 1866; roughly 1.8 million died during the Middle Passage itself. Belgian Congo under King Leopold II from 1885 to 1908: estimates suggest about 10 million deaths from forced labor, violence, starvation, and disease, in service of rubber extraction. British India late Victorian famines from 1876 to 1902: Mike Davis documented 12 to 30 million deaths during famines that occurred while India was a net food exporter to Britain.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Imperialism As Development`,
          paragraphs: [
            `The developmental position, today a minority among serious historians but with prominent defenders, holds that despite the real costs, imperial rule produced infrastructure, institutions, and integration with the global economy that wouldn't otherwise have emerged. Without imperial expansion, the argument runs, colonized regions would have remained economically isolated and underdeveloped longer than they actually did under empire.`,
            `Niall Ferguson, Scottish-American historian (now at Harvard's Hoover Institution), is the most prominent contemporary defender of this position. His book "Empire: How Britain Made the Modern World" (2003) argued that the British Empire, despite its undeniable injustices, brought economic and political modernization to vast regions, including the spread of English language, common law, parliamentary institutions, free trade, banking, infrastructure (railways, telegraph, postal systems), and Anglophone culture that connect much of the world today. Without empire, Ferguson argued, these institutions wouldn't have spread the way they did. His later "Civilization: The West and the Rest" (2011) extended the argument.`,
            `The specific empirical claims defenders make. Railways in India (one of the largest networks in the world by 1900) wouldn't exist without British construction; the legal infrastructure of common law in India, Hong Kong, Singapore, and elsewhere shaped subsequent development; postal systems, telegraphic networks, and standardized administrative practices propagated through empire became foundations for modern global communication; the spread of English created the lingua franca that today connects business, science, and global communication.`,
            `What the developmental position struggles with. The infrastructure was built for imperial extraction (Indian railways prioritized routes for moving cotton and resources to British ports, not for connecting Indian regions to each other); the institutions enforced racial hierarchies (common law in India enforced rules favoring British subjects and corporations); the economic integration was profoundly asymmetric (India was systematically deindustrialized, with its share of world manufacturing output falling from ~25% in 1750 to ~2% by 1900, per Paul Bairoch's data). The "what would have happened otherwise" claim is counterfactual and can be challenged: regions that escaped European colonization (Thailand, Japan) modernized substantially without it; many specific institutions imposed by empire were less developmental than the indigenous institutions they replaced.`,
            `The position has also been criticized for what it leaves out: the massive death tolls under imperial rule, the famines produced by imperial policies, the structural inequality imposed and maintained, the racial frameworks that justified rule, the wars of conquest and resistance, the slave trade that funded British industrial growth (Eric Williams's argument in "Capitalism and Slavery" 1944). A position that focuses on railways while bracketing the famines and the slave trade isn't an honest accounting.`,
            `Where defenders today land. The strongest version of the developmental position acknowledges the costs and argues that on balance the net effect was positive, particularly compared to plausible counterfactuals. Even Ferguson, in later work, has been more measured about specific harms while maintaining the broader frame. The position remains a minority among historians of empire today, but engaging it seriously matters: there's no honest history that doesn't acknowledge that imperial institutions did spread and that some of those institutions (legal systems, written languages, communications infrastructure) became part of how the world is organized today.`,
          ],
          image: `/voyager-assets/history/l07-s2-developmental.webp`,
          imageCaption: `Position 1: imperialism as development. Niall Ferguson "Empire" 2003 + "Civilization" 2011. Defenders: railways, postal systems, common law, banking infrastructure, English as lingua franca. Struggles: extraction-shaped infrastructure (Indian deindustrialization 25% world manufacturing in 1750 → 2% in 1900), enforced racial hierarchies, asymmetric integration, massive death tolls, slave trade funding, ignored counterfactual cases (Thailand, Japan modernized without colonization).`,
          vocab: [
            {
              word: `position imperialism`,
              definition: `Minority position today but with serious defenders. Holds that despite real costs, imperial rule produced infrastructure, institutions, integration with global economy that wouldn't otherwise have emerged. Niall Ferguson "Empire: How Britain Made the Modern World" 2003 + "Civilization: The West and the Rest" 2011 most prominent contemporary defender. Specific claims: Indian railways (largest networks by 1900), common law in India/Hong Kong/Singapore, postal/telegraph networks, English as lingua franca, banking infrastructure. Struggles with: infrastructure built for extraction (Indian railways prioritized routes for moving resources to British ports); institutions enforced racial hierarchies; profoundly asymmetric integration (India's share of world manufacturing fell ~25% in 1750 to ~2% by 1900 per Paul Bairoch); counterfactual challenges (Thailand, Japan modernized without colonization). Position remains minority but engaging seriously matters: imperial institutions did spread and some became foundational.`,
              audioPrompt: `The developmental position on imperialism is today a minority among serious historians but has prominent defenders, {name}. The position holds that despite the real costs, imperial rule produced infrastructure, institutions, and integration with the global economy that wouldn't otherwise have emerged. Niall Ferguson, Scottish-American historian, is the most prominent contemporary defender. His book Empire: How Britain Made the Modern World from 2003 argued that the British Empire, despite its undeniable injustices, brought economic and political modernization to vast regions, including the spread of English language, common law, parliamentary institutions, free trade, banking, infrastructure like railways and telegraph and postal systems. Specific empirical claims: railways in India became one of the largest networks in the world by 1900; legal infrastructure of common law in India, Hong Kong, Singapore shaped subsequent development; postal systems and telegraphic networks became foundations for modern global communication. The position struggles with what it leaves out: the massive death tolls under imperial rule, the famines produced by imperial policies, the structural inequality imposed, the slave trade that funded British industrial growth.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Imperialism As Extraction`,
          paragraphs: [
            `The extractive position, the current mainstream view among historians of empire, holds that imperialism was a system of systematic extraction and violence imposing massive costs on colonized peoples while transferring wealth and resources to imperial centers. The scale of death, displacement, dispossession, and structural damage vastly outweighs any developmental benefits the imperial powers also produced. The "long shadow" of this position's name refers to the lasting structural inequality and damage that persists generations after formal independence.`,
            `Walter Rodney's "How Europe Underdeveloped Africa" (1972) is a foundational text. Rodney, a Guyanese historian working in Tanzania, argued that European involvement in Africa systematically extracted resources (including, devastatingly, people through the slave trade), prevented industrial development, and produced the very "underdevelopment" that later imperial powers cited as justification for continued intervention. Africa wasn't "underdeveloped" in 1500; specific imperial relations across centuries produced underdevelopment.`,
            `Eric Williams's "Capitalism and Slavery" (1944) made the foundational case that the wealth generated by the trans-Atlantic slave trade and slave-based plantations in the Americas substantially funded the British industrial revolution. Modern scholarship has debated specific magnitudes but the underlying argument has been substantially confirmed by detailed historical research: empires extracted enormous wealth from colonized regions and that wealth fueled European development.`,
            `Mike Davis's "Late Victorian Holocausts" (2001) documented the systematic relationship between imperial economic policy and mass death in colonized regions. Davis showed that the famines that killed 12-30 million Indians in 1876-1902 occurred during periods when India was a net food exporter to Britain; that imperial policies (free trade in food, abandonment of pre-imperial famine prevention systems, taxation requirements paid in grain) systematically prevented response to drought; and that similar patterns operated in China, Brazil, and elsewhere. The deaths weren't natural; they were policy-produced.`,
            `Adam Hochschild's "King Leopold's Ghost" (1998) documented the Belgian Congo under Leopold II (1885-1908): roughly 10 million deaths from forced labor, mutilation, starvation, and disease in service of rubber extraction. Caroline Elkins's "Britain's Gulag" (2005, expanded as "Legacy of Violence" 2022) documented British concentration camps in Kenya during the Mau Mau emergency (1952-1960) with tens of thousands of detentions, torture, executions, and what Elkins shows was a systematic effort to destroy evidence of the system. Shashi Tharoor's "Inglorious Empire" (2017) makes a comprehensive case from an Indian perspective. The list goes on.`,
            `What the extractive position acknowledges and what it doesn't. It acknowledges that imperial infrastructure existed and some of it became useful after independence. It acknowledges that specific institutions imposed by empire (legal systems, languages) have lasting reach. What it doesn't accept is that this counts as "development" in any meaningful sense given the costs. A railway built to extract resources, paid for through taxation of starving populations, justified through racial frameworks, isn't development; it's the infrastructure of extraction.`,
            `Where the mainstream historical position lands. The extractive view is the position most serious historians of empire today operate from, including historians within former imperial powers (David Olusoga, Priyamvada Gopal, William Dalrymple, others). The view doesn't require denying that empires built things; it requires accounting honestly for what they took, who they killed, and what they damaged in the process. The position holds that the honest accounting comes out massively negative.`,
          ],
          image: `/voyager-assets/history/l07-s3-extractive.webp`,
          imageCaption: `Position 2: imperialism as extraction (current mainstream historical view). Walter Rodney "How Europe Underdeveloped Africa" 1972; Eric Williams "Capitalism and Slavery" 1944 (slave wealth funded British industrial revolution); Mike Davis "Late Victorian Holocausts" 2001 (India 12-30M famine deaths 1876-1902 during net food export); Adam Hochschild "King Leopold's Ghost" 1998 (Belgian Congo ~10M deaths 1885-1908); Caroline Elkins "Britain's Gulag" 2005 / "Legacy of Violence" 2022 (Kenya); Shashi Tharoor "Inglorious Empire" 2017.`,
          vocab: [
            {
              word: `position imperialism`,
              definition: `Current mainstream view among historians of empire. Imperialism as system of systematic extraction and violence imposing massive costs while transferring wealth to imperial centers. Scale of death, displacement, dispossession, structural damage vastly outweighs developmental benefits. Foundational works: Walter Rodney "How Europe Underdeveloped Africa" 1972 (European involvement extracted resources, prevented industrial development, produced underdevelopment); Eric Williams "Capitalism and Slavery" 1944 (slave trade wealth funded British industrial revolution); Mike Davis "Late Victorian Holocausts" 2001 (India famines 12-30M deaths 1876-1902 during net food export; policy-produced not natural); Adam Hochschild "King Leopold's Ghost" 1998 (Belgian Congo ~10M deaths under Leopold II 1885-1908, rubber extraction); Caroline Elkins "Britain's Gulag" 2005 / "Legacy of Violence" 2022 (Kenya Mau Mau emergency 1952-1960, concentration camps, systematic evidence destruction); Shashi Tharoor "Inglorious Empire" 2017. Acknowledges infrastructure existed but denies it counts as development given costs.`,
              audioPrompt: `The extractive position is the current mainstream view among historians of empire, {name}. The position holds that imperialism was a system of systematic extraction and violence imposing massive costs on colonized peoples while transferring wealth and resources to imperial centers. Walter Rodney's How Europe Underdeveloped Africa from 1972 is a foundational text. Rodney argued that European involvement in Africa systematically extracted resources, including devastatingly through the slave trade, prevented industrial development, and produced the very underdevelopment that later imperial powers cited as justification for continued intervention. Mike Davis's Late Victorian Holocausts from 2001 documented that the famines that killed 12 to 30 million Indians from 1876 to 1902 occurred during periods when India was a net food exporter to Britain. Imperial policies, including free trade in food, abandonment of pre-imperial famine prevention systems, and taxation requirements paid in grain, systematically prevented response to drought. Adam Hochschild's King Leopold's Ghost from 1998 documented the Belgian Congo under Leopold II from 1885 to 1908: roughly 10 million deaths from forced labor, mutilation, starvation, and disease in service of rubber extraction.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Imperialism As Ongoing Structure`,
          paragraphs: [
            `The third position holds that imperialism didn't end when formal colonies achieved political independence (mostly between 1945 and the 1970s). Imperial relations continue through economic structures, financial institutions, debt regimes, asymmetric trade, military intervention, cultural hegemony, and migration patterns. What changed wasn't whether one society controls others; what changed is how. Direct political administration has been replaced by economic and structural relations that produce many of the same patterns: wealth flowing from former colonies to former imperial centers, dependence on foreign capital and decisions, structural constraints on development, and cultural framings that center the West.`,
            `Immanuel Wallerstein's world-systems theory (developed across multiple volumes from "The Modern World-System I" 1974 onward) provided the foundational framework. Wallerstein argued that the modern world economy is a single integrated system with "core" countries (advanced industrial economies extracting surplus from peripheries), "periphery" countries (providing labor and resources at unequal terms), and "semi-periphery" countries (in between, partially industrial). The system isn't a collection of independent national economies; it's an integrated structure producing predictable patterns of unequal development. Independence from colonial rule doesn't change a country's position in this structure.`,
            `Edward Said's "Orientalism" (1978) and "Culture and Imperialism" (1993) developed the cultural dimension. Said showed how Western academic, literary, and popular culture systematically framed the "East" (the Arab world, then the broader non-Western world) as exotic, irrational, backwards, and in need of Western intervention. These framings provided ideological justification for imperial expansion and continue to operate today in journalism, policy, and popular media. The cultural dimension of imperialism didn't end with formal independence; it continues through every framing that treats Western experience as universal and non-Western experience as particular.`,
            `Frantz Fanon's "Wretched of the Earth" (1961) made the case for what we now call decolonial thought: that political independence is not enough if economic structures, mental frameworks, and cultural categories remain colonized. Fanon argued that newly-independent African nations could become "neo-colonial" (formally sovereign but substantively dependent on former imperial powers) unless they did the harder work of building genuine economic and cultural independence. Many later observers have argued his prediction was substantially correct.`,
            `Concrete contemporary examples of structural imperialism. IMF and World Bank "structural adjustment" programs in Africa and Latin America during the 1980s-90s required formerly colonized countries to privatize state industries, cut social spending, and prioritize debt repayment in ways that maintained their position as resource exporters and consumer markets for Western goods (Joseph Stiglitz, formerly chief economist at the World Bank, became a prominent critic). The CFA franc, used by 14 African countries, was tied to the French franc and now to the euro, with monetary policy substantially set by the French treasury until reforms in 2019-2020. Western military interventions across former colonies (Iraq 2003, Libya 2011, Mali 2013, others) have produced patterns hard to distinguish from earlier imperial practice. Cultural production globally remains dominated by US and European companies; English remains the language of business, science, and aviation worldwide.`,
            `Where the structural position lands. The argument isn't that imperial relations are identical to colonial rule; specific changes (legal sovereignty, end of direct administration, end of explicit racial frameworks) are real and meaningful. The argument is that significant continuities remain: who controls capital, who shapes global rules, who can intervene where, whose framings dominate global culture. Recognizing these continuities matters for understanding contemporary global politics, debt and development debates, immigration patterns, and the politics of former colonies. The position is mainstream within decolonial and world-systems scholarship and increasingly influential more broadly.`,
          ],
          image: `/voyager-assets/history/l07-s4-structural.webp`,
          imageCaption: `Position 3: imperialism as ongoing structure. Immanuel Wallerstein world-systems theory ("The Modern World-System I" 1974+); Edward Said "Orientalism" 1978 + "Culture and Imperialism" 1993; Frantz Fanon "Wretched of the Earth" 1961 on neo-colonialism. Concrete contemporary: IMF/World Bank structural adjustment 1980s-90s, CFA franc, Western military interventions (Iraq 2003, Libya 2011, Mali 2013), cultural dominance.`,
          vocab: [
            {
              word: `structural`,
              definition: `Imperialism didn't end with formal political independence (1945-1970s). Imperial relations continue through economic structures, financial institutions, debt regimes, asymmetric trade, military intervention, cultural hegemony, migration patterns. Foundational frameworks: Immanuel Wallerstein world-systems theory ("The Modern World-System I" 1974+): modern world economy as single integrated system with core (extracting surplus), periphery (providing labor and resources), semi-periphery; independence doesn't change position. Edward Said "Orientalism" 1978 + "Culture and Imperialism" 1993: Western academic/literary/popular culture systematically framed East/non-Western as exotic, irrational, backwards, needing Western intervention; cultural dimension continues. Frantz Fanon "Wretched of the Earth" 1961: political independence not enough without economic and cultural independence; "neo-colonial" warning. Concrete contemporary: IMF/World Bank structural adjustment in 1980s-90s (Joseph Stiglitz critic from inside); CFA franc tied to French treasury until 2019-2020 reforms (14 African countries); Western military interventions (Iraq 2003, Libya 2011, Mali 2013); global cultural production dominated by US and European companies; English as lingua franca.`,
              audioPrompt: `The third position holds that imperialism didn't end when formal colonies achieved political independence, {name}. Imperial relations continue through economic structures, financial institutions, debt regimes, asymmetric trade, military intervention, cultural hegemony, and migration patterns. What changed wasn't whether one society controls others; what changed is how. Immanuel Wallerstein's world-systems theory, developed across multiple volumes starting from The Modern World-System I in 1974, provided the foundational framework. Wallerstein argued that the modern world economy is a single integrated system with core countries extracting surplus from peripheries; the system isn't a collection of independent national economies; it's an integrated structure producing predictable patterns of unequal development. Edward Said's Orientalism from 1978 and Culture and Imperialism from 1993 developed the cultural dimension. Concrete contemporary examples of structural imperialism include IMF and World Bank structural adjustment programs in Africa and Latin America during the 1980s and 1990s, the CFA franc used by 14 African countries with monetary policy substantially set by the French treasury until reforms in 2019 and 2020, Western military interventions across former colonies, and continued global cultural dominance by US and European companies.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Commit`,
          paragraphs: [
            `Three positions you'll commit to in a moment. The choice isn't between empire being "good" or "bad"; it's about which framework best captures what imperialism actually was and what its legacy means.`,
            `One framing as you decide. Position 1 (developmental) emphasizes what imperial systems built that became useful. Position 2 (extractive) emphasizes the cost of what was taken and destroyed, holding that the building cannot redeem the taking. Position 3 (ongoing structural) holds that the relations that produced imperial extraction continue in modified forms today, requiring continued analysis of structural inequality. The positions don't fully exclude each other but they emphasize substantially different things.`,
            `Another framing. Position 1 is a minority view among current historians of empire but has serious defenders and engages real evidence. Most professional historians today work primarily from Position 2. Position 3 extends Position 2 in time, arguing that the same dynamics that produced imperial harm continue in current global economic structures. Recognizing where the scholarly consensus lies isn't dispositive (consensus can be wrong) but it's relevant when committing.`,
            `One specific framing for your reading ahead. Positions on imperialism shape readings of the next 13 lessons. Specifically: L08 (Genocide), L09 (Holocaust), L10 (Nuclear Age), L11 (Cold War), L12 (Post-Cold War Order), L13 (Middle East), L14 (China's Rise), L15 (Africa), L16 (Latin America), L17 (Indigenous Peoples) all involve imperial dynamics directly. The position you commit to today substantially shapes how you'll read each.`,
            `One last framing. The country you live in, the languages you speak, the economic position your family occupies, the histories your school curriculum emphasized: all of these shape which position feels natural. The work of building deliberate framework isn't pretending you have no priors; it's recognizing them and engaging the evidence seriously across positions you'd otherwise dismiss.`,
          ],
          image: `/voyager-assets/history/l07-s5-before.webp`,
          imageCaption: `Three positions on imperialism's legacy: developmental (Ferguson), extractive (current mainstream), ongoing-structural (Wallerstein, Said, Fanon). Position shapes readings of L08 Genocide, L09 Holocaust, L10 Nuclear Age, L11 Cold War, L13 Middle East, L14 China, L15 Africa, L16 Latin America, L17 Indigenous Peoples.`,
          vocab: [
            {
              word: `position imperialism`,
              definition: `Three positions to commit between for primary frame. Position 1 (developmental, Ferguson + earlier defenders): emphasizes what imperial systems built that became useful; minority view today but with serious defenders. Position 2 (extractive, current mainstream view): emphasizes cost of what was taken and destroyed; building cannot redeem the taking; Walter Rodney, Eric Williams, Mike Davis, Hochschild, Elkins, Tharoor. Position 3 (ongoing structural, decolonial / world-systems): same dynamics continue today through economic structures, financial institutions, military intervention, cultural hegemony; Wallerstein, Said, Fanon, contemporary decolonial thought. Position shapes readings of next 13 lessons in History band: L08 Genocide, L09 Holocaust, L10 Nuclear, L11 Cold War, L12 Post-Cold War, L13 Middle East, L14 China, L15 Africa, L16 Latin America, L17 Indigenous Peoples all involve imperial dynamics.`,
              audioPrompt: `Three positions on imperialism's legacy you'll commit to in a moment, {name}. The choice isn't between empire being good or bad; it's about which framework best captures what imperialism actually was. Position 1, developmental, emphasizes what imperial systems built that became useful. Position 2, extractive, emphasizes the cost of what was taken and destroyed, holding that the building cannot redeem the taking. Position 3, ongoing structural, holds that the relations that produced imperial extraction continue in modified forms today, requiring continued analysis of structural inequality. The positions don't fully exclude each other but they emphasize substantially different things. Most professional historians today work primarily from Position 2. Position 3 extends Position 2 in time, arguing that the same dynamics continue in current global economic structures. The position you commit to substantially shapes how you'll read the next 13 lessons in this band, all of which involve imperial dynamics directly.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ──────────────────────────────────────────────
        {
          id: `l07-argument-builder`,
          type: `argument-builder`,
          headline: `What Was Imperialism, And What Is Its Legacy?`,
          intro: `Pick the position that best captures your view on what imperialism was and what its legacy means. Build your case with 4-5 pieces of evidence. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `developmental`,
              label: `Developmental: imperialism, despite costs, produced infrastructure, institutions, and integration that wouldn't otherwise have emerged`,
              summary: `Defenders: Niall Ferguson "Empire: How Britain Made the Modern World" 2003 + "Civilization: The West and the Rest" 2011. Claims: railways (Indian network largest by 1900), common law in India/Hong Kong/Singapore, postal/telegraph networks, banking infrastructure, English as lingua franca. Acknowledges costs but argues net positive. Struggles with: infrastructure built for extraction (Indian deindustrialization ~25% to ~2% world manufacturing 1750-1900), enforced racial hierarchies, asymmetric integration, massive death tolls, slave trade funding, counterfactual challenges (Thailand and Japan modernized without colonization). Minority view among current historians of empire but with serious defenders.`,
            },
            {
              id: `extractive`,
              label: `Extractive: imperialism was systematic extraction and violence; costs vastly outweigh whatever development occurred`,
              summary: `Current mainstream view among historians of empire. Defenders: Walter Rodney "How Europe Underdeveloped Africa" 1972; Eric Williams "Capitalism and Slavery" 1944; Mike Davis "Late Victorian Holocausts" 2001; Adam Hochschild "King Leopold's Ghost" 1998; Caroline Elkins "Britain's Gulag" 2005 / "Legacy of Violence" 2022; Shashi Tharoor "Inglorious Empire" 2017; David Olusoga; Priyamvada Gopal; William Dalrymple. Evidence: scale of death (~12.5M transported Africans + ~1.8M Middle Passage; Belgian Congo ~10M under Leopold II; India famines 12-30M 1876-1902 during net food export to Britain). Acknowledges infrastructure existed but denies it counts as development given costs.`,
            },
            {
              id: `structural`,
              label: `Ongoing structural: imperial relations continue through economic structures, debt regimes, military intervention, and cultural hegemony`,
              summary: `Defenders: Immanuel Wallerstein world-systems theory (1974+); Edward Said "Orientalism" 1978 + "Culture and Imperialism" 1993; Frantz Fanon "Wretched of the Earth" 1961 on neo-colonialism; contemporary decolonial thought. Concrete contemporary: IMF/World Bank structural adjustment 1980s-90s (Joseph Stiglitz critic from inside); CFA franc tied to French treasury until 2019-2020 reforms (14 African countries); Western military interventions (Iraq 2003, Libya 2011, Mali 2013); global cultural production dominated by US/European companies. Argument: significant continuities remain (capital, global rules, intervention, cultural framings) even where specific changes (legal sovereignty, end of direct administration, end of explicit racial framework) are real.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Trans-Atlantic slave trade (approximately 1500-1866) forcibly transported approximately 12.5 million Africans across the Atlantic; roughly 1.8 million died during the Middle Passage itself. Eric Williams's "Capitalism and Slavery" (1944) argued that the wealth generated by this trade and the resulting plantation economies substantially funded the British industrial revolution.`,
              source: `Trans-Atlantic Slave Trade Database; Williams 1944`,
            },
            {
              id: `e2`,
              text: `Belgian Congo under King Leopold II (1885-1908): estimates suggest approximately 10 million deaths from forced labor, mutilation, starvation, and disease in service of rubber extraction. Documented by Adam Hochschild in "King Leopold's Ghost" (1998) and earlier accounts by E.D. Morel and Roger Casement.`,
              source: `Hochschild "King Leopold's Ghost" 1998`,
            },
            {
              id: `e3`,
              text: `Mike Davis's "Late Victorian Holocausts" (2001) documented that the famines that killed 12-30 million Indians during 1876-1902 occurred during periods when India was a net food exporter to Britain. Imperial policies (free trade in food, abandonment of pre-imperial famine prevention systems, taxation requirements paid in grain) systematically prevented response to drought. Similar policy-produced famines occurred in China and Brazil.`,
              source: `Davis "Late Victorian Holocausts" 2001`,
            },
            {
              id: `e4`,
              text: `Niall Ferguson, in "Empire: How Britain Made the Modern World" (2003), argued that the British Empire spread infrastructure (railways, postal systems, telegraph), institutions (common law, parliamentary procedures), and language (English) that became foundations for global modernization. The position is a minority among current historians of empire but has serious defenders.`,
              source: `Ferguson "Empire" 2003`,
            },
            {
              id: `e5`,
              text: `India's share of world manufacturing output fell from approximately 25% in 1750 to approximately 2% by 1900 (per Paul Bairoch's economic history data). The collapse coincided with British colonial rule and resulted from policies that systematically deindustrialized Indian production while making India a captive market for British manufactured goods.`,
              source: `Bairoch economic history data; multiple historians of India`,
            },
            {
              id: `e6`,
              text: `Immanuel Wallerstein's world-systems theory (developed from "The Modern World-System I" 1974 onward) argued that the modern world economy is a single integrated system with core countries extracting surplus from peripheries through unequal terms of trade. Independence from formal colonial rule doesn't change a country's structural position in this system; it changes the mechanisms of unequal exchange.`,
              source: `Wallerstein world-systems theory; multiple volumes 1974+`,
            },
            {
              id: `e7`,
              text: `IMF and World Bank "structural adjustment" programs in Africa and Latin America during the 1980s-90s required formerly colonized countries to privatize state industries, cut social spending, and prioritize debt repayment in ways that maintained their position as resource exporters. Joseph Stiglitz, formerly chief economist at the World Bank, became a prominent critic of these programs as producing patterns hard to distinguish from earlier imperial practice.`,
              source: `Stiglitz "Globalization and Its Discontents" 2002; multiple critical works`,
            },
            {
              id: `e8`,
              text: `Thailand and Japan, two regions that substantially escaped European colonization during the 19th-century imperial expansion, modernized substantially without imperial rule. Thailand maintained sovereignty through skilled diplomacy and partial modernization; Japan's Meiji Restoration (1868) explicitly aimed at modernization to avoid colonization and produced a fully modernized state by 1900. These counterfactuals challenge the claim that imperial rule was necessary for modernization.`,
              source: `Comparative historical scholarship; multiple historians`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You've picked your position. Here's the strongest objection. Whatever framework you've committed to, you're now in danger of imposing a single story on extremely heterogeneous historical events. The Spanish empire in 16th-century Mexico operated differently from the British in 19th-century India which operated differently from the French in 20th-century Algeria which operated differently from the Soviet sphere in Eastern Europe. Lumping these all together as 'imperialism' and forcing one frame on all of them may obscure as much as it reveals. Some specific imperial systems were closer to development; others were closer to genocide. Some structural relations after independence look closer to ongoing imperialism; others look more like normal trade between independent countries. The position you've committed to may force a single story on what should be analyzed case by case. Maybe the honest answer is to refuse the choice between three universal frameworks and instead analyze each specific imperial relation on its own terms."`,
            promptInstruction: `In 4-5 sentences, respond. Does forcing a primary frame obscure crucial historical variation? Or does the framework you've committed to provide useful organizing principle even where it needs adjustment for specific cases?`,
          },
          reflectionPrompt: `Looking at the position you didn't pick: which has the strongest argument? Where do your priors (country, family history, what you've been taught) shape which felt natural?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is imperialism?`,
              options: [
                `Just war`,
                `Practice of extending political, economic, and military control by one society over others, typically across substantial distances, for the benefit of the controlling society. Distinctions: colonialism (settler movement), settler colonialism (aiming to replace indigenous population: US, Canada, Australia, Israel/Palestine), extractive colonialism (resources without replacement: British India, Belgian Congo), neo-colonialism (ongoing relations after formal independence through economic/cultural rather than direct political control). Ancient pattern but modern European form (1500-1960) distinctive in scale, integration with industrial capitalism, racial framings.`,
                `Just colonies`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The distinctions matter for serious analysis. Conflating settler colonialism (replacement-aiming) with extractive colonialism (resource-extracting) misses substantial differences in the dynamics and the legacies. Understanding the distinctions is foundational for the rest of this band.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the scale of the trans-Atlantic slave trade and Belgian Congo under Leopold II?`,
              options: [
                `Random`,
                `Trans-Atlantic slave trade (1500-1866): approximately 12.5 million Africans forcibly transported across the Atlantic; roughly 1.8 million died during the Middle Passage itself. Belgian Congo under King Leopold II (1885-1908): approximately 10 million deaths from forced labor, mutilation, starvation, disease in service of rubber extraction. Documented by Adam Hochschild "King Leopold's Ghost" 1998 and earlier accounts.`,
                `Just thousands`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `These are among the major mass-death events in modern history. Naming the scale honestly is part of serious engagement with imperialism. The numbers are well-established by current scholarship.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What did Mike Davis's "Late Victorian Holocausts" (2001) document?`,
              options: [
                `Just famines`,
                `Famines that killed 12-30 million Indians during 1876-1902 occurred during periods when India was a net food exporter to Britain. Imperial policies (free trade in food, abandonment of pre-imperial famine prevention systems, taxation requirements paid in grain) systematically prevented response to drought. Similar policy-produced famines occurred in China and Brazil. The deaths weren't natural; they were policy-produced through imperial economic systems.`,
                `Random`,
                `Just weather`,
              ],
              correctIndex: 1,
              explanation: `Davis's work shifted understanding of late-19th-century famines from "natural disasters" to "policy-produced mass deaths." The distinction matters: it's the difference between unavoidable tragedy and human accountability.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the developmental position on imperialism (Position 1)?`,
              options: [
                `Random`,
                `Despite real costs, imperial rule produced infrastructure, institutions, integration with global economy that wouldn't otherwise have emerged. Defender: Niall Ferguson "Empire: How Britain Made the Modern World" 2003 + "Civilization: The West and the Rest" 2011. Claims: railways (Indian network largest by 1900), common law in India/Hong Kong/Singapore, postal/telegraph networks, banking, English as lingua franca. Minority view among current historians but with serious defenders. Struggles with: infrastructure built for extraction, racial hierarchies, asymmetric integration, mass death, counterfactual challenges (Thailand, Japan modernized without colonization).`,
                `Just bad`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The developmental position is a minority among current historians but has serious defenders. Engaging it seriously matters: there's no honest history that doesn't acknowledge imperial institutions did spread and some became part of how the world is organized today.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the extractive position (Position 2) and who are its major defenders?`,
              options: [
                `Random`,
                `Current mainstream view: imperialism as systematic extraction and violence imposing massive costs while transferring wealth to imperial centers; scale of damage vastly outweighs developmental benefits. Defenders: Walter Rodney "How Europe Underdeveloped Africa" 1972; Eric Williams "Capitalism and Slavery" 1944; Mike Davis "Late Victorian Holocausts" 2001; Adam Hochschild "King Leopold's Ghost" 1998; Caroline Elkins "Britain's Gulag" 2005 / "Legacy of Violence" 2022; Shashi Tharoor "Inglorious Empire" 2017; David Olusoga; Priyamvada Gopal; William Dalrymple.`,
                `Just complaints`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the position is the current mainstream view among historians is relevant when committing. Many readers absorb older "civilizing mission" framings without recognizing them as having been superseded by 50+ years of scholarship from formerly colonized regions and structural analysts.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the structural / ongoing position (Position 3)?`,
              options: [
                `Random`,
                `Imperialism didn't end with formal political independence (1945-1970s). Imperial relations continue through economic structures, financial institutions, debt regimes, asymmetric trade, military intervention, cultural hegemony, migration patterns. Defenders: Immanuel Wallerstein world-systems theory (1974+) on core/periphery extraction; Edward Said "Orientalism" 1978 + "Culture and Imperialism" 1993 on cultural framings; Frantz Fanon "Wretched of the Earth" 1961 on neo-colonialism. Concrete: IMF/World Bank structural adjustment 1980s-90s (Stiglitz critic from inside); CFA franc tied to French treasury until 2019-2020 reforms (14 African countries); Western military interventions (Iraq 2003, Libya 2011, Mali 2013).`,
                `Just complaints`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The structural position extends extractive analysis in time, arguing that the same dynamics continue under new mechanisms. Recognizing the concrete contemporary examples (IMF/World Bank, CFA franc, military interventions) keeps the abstract framework grounded in current evidence.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What did India's share of world manufacturing output do during British colonial rule?`,
              options: [
                `Random`,
                `Fell from approximately 25% in 1750 to approximately 2% by 1900 (per Paul Bairoch's economic history data). The collapse coincided with British colonial rule and resulted from policies that systematically deindustrialized Indian production while making India a captive market for British manufactured goods. India had been a major manufacturing center; under British rule it became a resource exporter and consumer market.`,
                `Stayed same`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The deindustrialization of India under British rule is one of the most striking findings of comparative economic history. It directly counters the "imperialism brought development" framing for India specifically; the colonial period was a period of substantial economic decline relative to Britain.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What do Thailand and Japan tell us about whether imperial rule was necessary for modernization?`,
              options: [
                `Random`,
                `Both substantially escaped European colonization during the 19th-century imperial expansion and modernized substantially without imperial rule. Thailand maintained sovereignty through skilled diplomacy and partial modernization. Japan's Meiji Restoration (1868) explicitly aimed at modernization to avoid colonization and produced a fully modernized state by 1900. These counterfactuals challenge the claim that imperial rule was necessary for modernization; modernization happened in non-colonized contexts.`,
                `They were colonized`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The counterfactual cases matter for the developmental position. If non-colonized regions could modernize, the claim "imperialism was necessary for modernization" becomes harder to defend. Counterfactual reasoning has limits but the Japanese and Thai cases are important reference points.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Most current historians of empire defend the developmental position (imperialism as net positive).`,
              correctAnswer: false,
              explanation: `False. The developmental position is today a minority view among historians of empire, though it has prominent defenders like Niall Ferguson. The current mainstream view among historians of empire is the extractive position: imperialism as systematic extraction and violence imposing massive costs that vastly outweigh whatever development occurred. The mainstream view is held by historians including Walter Rodney, Eric Williams, Mike Davis, Adam Hochschild, Caroline Elkins, Shashi Tharoor, David Olusoga, Priyamvada Gopal, William Dalrymple, and many others. The mainstream historical view has shifted substantially in the past 50 years as scholarship from formerly colonized regions, women's and ethnic-minority historians, and structural analysts has brought the costs into clearer view. The older "civilizing mission" framings persist in popular discourse and some curricula but not in current academic history of empire.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your cousin says "Britain brought railways and democracy to India. Whatever bad things happened, India is better off because Britain ruled it." Based on this lesson, what should you point out?`,
              options: [
                `"You're right"`,
                `"Several specific things. First, the railways argument is partly right and substantially misleading. India did get extensive railways under British rule (one of the largest networks in the world by 1900). But the railways were built primarily to move cotton, jute, and other raw materials from interior India to ports for shipping to Britain, not to connect Indian regions to each other. The route maps look like extraction networks, not development networks. Indians paid for them through taxation that contributed to famines. The same is true of many British infrastructural claims: built for extraction, paid for through impoverishment of the people who built them. Second, the 'democracy' claim is mostly false. The British in India ran an authoritarian colonial administration; Indians had essentially no democratic political rights for most of the British period. The Government of India Act 1935 began limited representative government, but full democracy in India came with independence in 1947, not because of British rule but because Indians fought for it through the independence movement. Third, the 'whatever bad things happened' is doing massive work. The bad things include the late Victorian famines that killed 12-30 million people while India was a net food exporter to Britain, the partition violence that killed approximately 1-2 million people and displaced 14-18 million as British departure was bungled, the systematic deindustrialization that took India from approximately 25 percent of world manufacturing in 1750 to approximately 2 percent by 1900, the Bengal Famine of 1943 (approximately 3 million deaths during World War II, with British policy substantially responsible per Madhusree Mukerjee's research), and many others. Fourth, the 'better off' counterfactual is genuinely contested but historians who work on this comparatively (including Indian historians like Shashi Tharoor and Western historians like William Dalrymple) generally argue India would have been better off without British rule, given how much was destroyed and extracted. India's economy after independence has grown substantially; the slow growth in the late colonial period was a colonial phenomenon, not an Indian one. Fifth, what to do practically: read Shashi Tharoor's 'Inglorious Empire' (2017) for the case against. Read William Dalrymple's 'The Anarchy' (2019) on the East India Company. Recognize that the 'British brought development' framing is a specific position with serious counterarguments, not the consensus view. The honest engagement doesn't require concluding the British contribution was zero; it requires honest accounting of what was actually built and what was taken or destroyed."`,
                `"Random"`,
                `"Just disagree"`,
              ],
              correctIndex: 1,
              explanation: `Real applied imperialism literacy. The railways argument is partly right and substantially misleading; the democracy claim is mostly false (British administration in India was authoritarian); the costs (famines, partition, deindustrialization, Bengal Famine 1943) have to be named directly. Engaging the "better off" counterfactual seriously with current scholarship is the work.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-country`, category: `Your country`, prompt: `How does your country relate to imperial history? As former imperial power, as formerly colonized, as both, as neither? How has that history been taught to you?` },
            { id: `reflect-position`, category: `Your commitment`, prompt: `Why did you commit to the position you picked? What specific evidence or insight made it most convincing? When might you need to integrate elements of the others?` },
            { id: `reflect-developmental`, category: `Engage the minority`, prompt: `The developmental position is a minority among current historians. What's the strongest version of it you can articulate? What does it get right that the mainstream view misses?` },
            { id: `reflect-structural`, category: `Ongoing`, prompt: `Position 3 argues imperial relations continue today through economic structures. Pick a concrete current example (IMF policy in a specific country, military intervention, cultural production). Does the structural framework illuminate or obscure?` },
            { id: `reflect-family`, category: `Family history`, prompt: `Has imperial history affected your family directly (immigration, displacement, language loss, economic position)? If so, how does that shape what you've committed to today?` },
            { id: `reflect-counterargument`, category: `Heterogeneity`, prompt: `The counterargument suggested that lumping diverse imperial relations under one frame obscures variation. What's your response? Does any single frame work across the Spanish in 16th-century Mexico, the British in 19th-century India, and the Soviet sphere in Eastern Europe?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Imperial history shapes the world you're living in. The position you commit to determines what you'll notice across decades. Two paths.`,
          familyActivity: {
            title: `Family Imperial History Conversation`,
            duration: `60 minutes`,
            description: `Share the three positions with your family. Family relationships to imperial history vary widely: families from former imperial powers often have different framings than families from former colonies; families with immigration histories often have direct connections to imperial dynamics. The conversation often surfaces specific framings that family members hold without recognizing them as positions. If your family has migration history (which most families globally do, in some form), the imperial dimensions of why people moved are often substantial: economic patterns produced by colonization shape who emigrates where.`,
          },
          projectOption: {
            title: `Comparative Imperial Investigation, 4 weeks (optional)`,
            duration: `4 weeks, ~45 minutes per session`,
            description: `Pick three different imperial systems for comparison (e.g., British India, Belgian Congo, Soviet Eastern Europe; or Spanish Mexico, French Algeria, American Philippines). Week 1: research the basic history of each system. Week 2: research the death tolls, economic patterns, and structural legacies. Week 3: apply each of the three theoretical positions to each case. Week 4: write 2,000 words on what the comparison shows about variation in imperial systems and whether any single framework adequately captures all three. The project develops historical comparative judgment beyond ideological reflexes.`,
            offerToParent: `Parent: opt your kid into this project. Building comparative imperial literacy at 12 is among the highest-leverage humanities investments for navigating a global moment shaped by ongoing imperial dynamics and the politics of reckoning with imperial history.`,
          },
          identityQuestion: `If you become someone who reads imperial history seriously across three positions, what does that change about how you engage with current global politics, news coverage of foreign affairs, and the economic structures you live within?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can engage three serious positions on imperialism without absorbing partisan caricature.`,
            `A person who reads contemporary economic structures with imperial history in view.`,
            `Someone who names mass-death numbers honestly when discussing imperial history.`,
          ],
          saveKey: `identity_responses_hw_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventh History and World lesson done. You have framework for three serious positions on imperialism: developmental (Ferguson, minority but with defenders), extractive (current mainstream: Rodney, Williams, Davis, Hochschild, Elkins, Tharoor), ongoing structural (Wallerstein world-systems, Said cultural, Fanon decolonial). You can name specific death tolls (trans-Atlantic slave trade 12.5M transported / 1.8M Middle Passage; Belgian Congo ~10M under Leopold II; India famines 12-30M during 1876-1902; Bengal Famine 1943 ~3M). You can engage the counterfactuals (Thailand, Japan modernized without colonization). Thirteen lessons to go. Next: genocide. Definition, prevention, memory. Three cases. Case Study format. Higher sensitivity than this lesson; we'll handle it seriously. Onward. — Lyra`,
          badge: `imperialism-literate`,
          badgeName: `Imperialism Literate`,
          xpEarned: 75,
          competencies: [
            `Distinguishes colonialism, settler colonialism, extractive colonialism, neo-colonialism`,
            `Articulates three serious positions on imperialism (developmental, extractive, ongoing structural)`,
            `Names specific mass-death events and scales honestly (trans-Atlantic slave trade, Belgian Congo, India famines)`,
            `Engages the minority developmental position seriously (Ferguson; railways, institutions, language)`,
            `Recognizes ongoing structural imperialism in contemporary economic institutions (IMF/World Bank, CFA franc, military interventions)`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Genocide: Prevention and Memory`,
            hook: `Case Study. Three cases (Armenian, Rwandan, Bosnian). High sensitivity; engaged seriously.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L07 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
