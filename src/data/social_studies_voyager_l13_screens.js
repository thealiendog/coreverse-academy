// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L13 — Decolonization: The Emergence of New Nations
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (History/Global) — D2.His, D2.Geo
// Interaction: CASE-STUDY (5 cases). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l13-v1";

const SOCIAL_STUDIES_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-13`,
      title: `Decolonization: The Emergence of New Nations`,
      duration: 35,
      xpReward: 75,
      badge: `freedom-analyst`,
      badgeName: `Freedom Analyst`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, in 1945 the world had fewer than sixty independent nations. By 1980 it had more than one hundred fifty. That transformation — the end of European colonial empires and the birth of dozens of new states — is one of the defining events of the modern world. Understanding it means understanding why so many former colonies remain poor, why borders cause so many conflicts, and why international institutions look the way they do.`,
          headline: `Decolonization: The Emergence of New Nations`,
          subtitle: `How colonial empires collapsed, new nations emerged, and why the legacies of that transformation still shape the world today. A Case Study.`,
          visual: `/voyager-assets/social-studies/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Colonialism Was`,
          paragraphs: [
            `Colonialism is one nation establishing political and economic control over another territory and its people, typically by force. European colonial empires, built between the 1400s and the early 1900s, eventually covered most of Africa, Asia, the Americas, and the Pacific. The British Empire at its peak controlled about a quarter of the world's land surface.`,
            `Colonial systems extracted wealth: minerals, agricultural goods, timber, and labor. Colonial governments were authoritarian, since colonial populations were subjects, not citizens. Local cultures and political systems were often suppressed. Borders were drawn by colonial administrators with no regard for existing ethnic, cultural, or political communities.`,
            `The effects were largely damaging. Economies were restructured around what the colonial power needed. Governance structures were disrupted. Racial hierarchies were enforced. New nations inherited distorted structures: export-dependent economies, artificial borders, and weak institutions. Understanding colonialism is essential to understanding decolonization's difficult legacies.`,
          ],
          image: `/voyager-assets/social-studies/l13-s1-colonialism.webp`,
          imageCaption: `COLONIALISM is the practice of one nation establishing political and economic control over another territory and its people, typically by force. European colonial empires eventually covered most of Africa, Asia, the Americas, and the Pacific. The BRITISH EMPIRE at its peak controlled about a quarter of the world's land surface. Colonial systems EXTRACTED WEALTH for the colonial power: minerals, agricultural goods, timber, and labor. Local cultures, languages, and political systems were suppressed; BORDERS WERE DRAWN with no regard for existing communities. The effects were largely damaging: economies restructured around commodities, traditional governance disrupted, racial hierarchies enforced, and artificial borders and weak institutions left behind when colonialism ended.`,
          vocab: [
            { word: `colonialism`,
              definition: `The practice of one nation establishing political and economic control over another territory and its people, typically by force, extracting wealth and suppressing local governance and culture.`,
              audioPrompt: `Colonialism, {name}, is the system by which one nation seizes political and economic control over another territory and its people, typically by force. European powers built colonial empires across Africa, Asia, the Americas, and the Pacific over several centuries, restructuring local economies to extract wealth for the colonizer while suppressing local cultures, governance, and rights. The British Empire at its peak controlled about a quarter of the world's land surface. Understanding how colonialism worked is essential to understanding the world's current inequalities. If your family has roots in Latin America, your heritage country was colonized by Spain or Portugal for centuries. How does knowing that shape how you see your own history?` },
            { word: `colonial extraction`,
              definition: `The systematic removal of wealth from colonized territories for the benefit of the colonial power, through resource extraction, forced labor, and structuring local economies around colonial needs.`,
              audioPrompt: `Colonial extraction, {name}, is the economic engine of colonialism: systematically removing wealth from colonized territories for the colonizer's benefit, through mining, agriculture, timber, and forced labor. Local economies were restructured around what the colonizer needed to export, not what local populations needed for development. This created the commodity dependence we discussed in the economics lessons: economies built around raw material exports rather than diversified industries. The extractive economy didn't end with colonialism; it left a structural legacy that many former colonies are still navigating. Can you trace how extractive colonial economics might have shaped a country your family has roots in?` },
            { word: `artificial borders`,
              definition: `Boundaries drawn by colonial powers across territories without regard for the ethnic, cultural, or political communities living there, creating new nations whose borders do not match their internal realities.`,
              audioPrompt: `Artificial borders, {name}, are one of colonialism's most enduring and damaging legacies. When European powers divided Africa, Asia, and other regions, they drew borders based on their own negotiations, geographic features, or administrative convenience, with no regard for the ethnic groups, linguistic communities, or historical polities living there. The result: new nations that arbitrarily split communities across borders while forcing historical rivals into the same state. These artificial borders have been a major driver of civil conflict and political instability in formerly colonized regions. When you look at a map of Africa or the Middle East, you're seeing borders that were largely drawn in European conference rooms.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Tide Turns`,
          paragraphs: [
            `Several forces combined to bring colonial empires down. The two World Wars severely weakened European colonial powers, revealing the moral contradiction of empires that claimed to defend freedom while denying it in their colonies. Colonial subjects who fought for the Allied cause returned with new expectations and a willingness to demand their rights.`,
            `Nationalism was the ideological engine of decolonization: the idea that peoples sharing a common culture or history had the right to self-determination and their own sovereign state. Anti-colonial movements, led by figures using the West's own democratic ideas against it, built mass movements that colonial governments found increasingly difficult to suppress.`,
            `The United Nations (1945) affirmed the right of peoples to self-determination, giving anti-colonial movements a moral framework. The United States was generally supportive of decolonization while the Soviet Union used it as propaganda. Weakened colonial powers, rising nationalist movements, and an international environment that delegitimized empire made colonial rule untenable.`,
          ],
          image: `/voyager-assets/social-studies/l13-s2-tide-turns.webp`,
          imageCaption: `Several forces brought colonial empires down. The TWO WORLD WARS weakened European powers economically and revealed the MORAL CONTRADICTION of empires claiming to defend freedom while denying it to colonial subjects. NATIONALISM was the great ideological engine: the idea that peoples sharing a common culture, history, or territory had the right to SELF-DETERMINATION and their own sovereign state. Anti-colonial NATIONALIST MOVEMENTS, led by figures using the West's own democratic ideas against it, built mass support colonial powers found hard to suppress. The UNITED NATIONS (1945) affirmed the right of peoples to self-determination. The combination of weakened colonizers, rising nationalist movements, and an international environment that DELEGITIMIZED EMPIRE made colonial rule increasingly untenable.`,
          vocab: [
            { word: `self-determination`,
              definition: `The principle that peoples sharing a common identity have the right to govern themselves and choose their own political status, the core ideological foundation of anti-colonial nationalism.`,
              audioPrompt: `Self-determination, {name}, is the principle that peoples sharing a common identity, cultural, historical, or territorial, have the right to govern themselves and choose their own political status, rather than being ruled by outside powers. It was the core ideological foundation of anti-colonial nationalism: colonial subjects using the West's own democratic principles to demand what Europeans claimed to believe in but denied to colonized peoples. The United Nations Charter affirmed self-determination as a universal right, giving anti-colonial movements an internationally recognized moral and legal basis for independence claims. Why do you think colonizers found it so difficult to argue against self-determination once they had championed it for themselves?` },
            { word: `anti-colonial nationalism`,
              definition: `Political movements in colonized territories that organized around the demand for independence, using the idea of national self-determination to challenge colonial rule.`,
              audioPrompt: `Anti-colonial nationalism, {name}, was the political force that drove decolonization: organized movements in colonized territories demanding independence, using the idea of national self-determination to challenge colonial rule. These movements were often led by educated elites who had been exposed to Western democratic ideas and turned them against the colonizers themselves, a powerful form of ideological judo. Figures like Mohandas Gandhi in India, Kwame Nkrumah in Ghana, Ho Chi Minh in Vietnam, and many others built mass movements that colonial powers found increasingly impossible to govern away. What does it mean to use your colonizer's ideas to demand your freedom?` },
            { word: `un decolonization`,
              definition: `The role of the United Nations as a forum and moral framework for decolonization, affirming self-determination in its charter and providing international legitimacy to independence movements.`,
              audioPrompt: `The UN and decolonization, {name}, were deeply intertwined. The United Nations Charter, adopted in 1945, affirmed the right of peoples to self-determination, giving anti-colonial movements an internationally recognized principle to invoke. As new nations gained independence and joined the UN, they used the General Assembly as a platform to press for decolonization of remaining territories and to challenge colonial powers diplomatically. The UN didn't cause decolonization, but it provided moral legitimacy and an international forum that made colonialism harder to defend and independence movements harder to dismiss. Why do you think international legitimacy matters even when a colonizing power has the military force to maintain control?` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Paths To Independence`,
          paragraphs: [
            `Decolonization took many forms. Some movements succeeded through negotiation: the colonial power recognized that maintaining the colony was no longer worth the cost and agreed to transfer power. India's independence in 1947 involved negotiation, though accompanied by enormous violence through partition. Ghana's independence in 1957 was relatively peaceful.`,
            `Others required armed struggle. France refused to leave Vietnam and Algeria without prolonged armed conflicts. The Algerian War (1954-1962) killed hundreds of thousands and involved widespread torture by French forces. Vietnam fought first France then the United States in a decades-long conflict. The Kenyan Mau Mau uprising contributed to British willingness to eventually negotiate independence.`,
            `A third pattern was rapid transfer driven by a colonial power's exhaustion. Belgium transferred power in the Congo suddenly in 1960, with almost no preparation for governance, contributing to immediate crisis. Portugal held on longest until a military coup in 1974 ended its colonial project. The path to independence shaped what new nations inherited.`,
          ],
          image: `/voyager-assets/social-studies/l13-s3-paths.webp`,
          imageCaption: `Decolonization took many forms. Some independence movements succeeded through NEGOTIATION: the colonial power recognized maintenance was no longer worth the cost. INDIA's independence (1947) involved negotiation but enormous violence through PARTITION. GHANA (1957) was relatively peaceful. Others required ARMED STRUGGLE: France refused to leave VIETNAM and ALGERIA without prolonged conflict. The ALGERIAN WAR (1954-1962) killed hundreds of thousands with widespread torture. A third pattern was RAPID TRANSFER driven by the colonial power's exhaustion: BELGIUM transferred power in the CONGO suddenly in 1960, almost without preparation, contributing to immediate crisis. PORTUGAL held on longest until a military coup at home in 1974 ended its colonial project. The path to independence shaped what new nations inherited.`,
          vocab: [
            { word: `negotiated independence`,
              definition: `When colonial powers transferred power through negotiation rather than violence, typically when the cost of maintaining colonial rule outweighed the benefits. Ghana (1957) and many British colonies took this path.`,
              audioPrompt: `Negotiated independence, {name}, is the path where the colonial power calculated that maintaining control was no longer worth the cost, politically, economically, or in terms of international reputation, and agreed to transfer power. Many British colonies in Africa and the Caribbean achieved independence this way, though the negotiations were rarely equal and the terms often reflected colonial power's interests. It's worth asking: even when independence came "peacefully," what was already extracted? What institutions were already shaped for colonial purposes? Negotiated independence often ended formal colonial rule while leaving many colonial structures in place. What does that mean for the "freedom" that was gained?` },
            { word: `armed anti-colonial struggle`,
              definition: `Independence movements that resorted to armed conflict because colonial powers refused to negotiate, including Algeria, Vietnam, Kenya, and Portugal's African colonies.`,
              audioPrompt: `Armed anti-colonial struggle, {name}, was the path taken when colonial powers refused to negotiate independence and independence movements decided that force was the only option. The Algerian War of Independence is one of the most brutal examples: eight years of fighting, hundreds of thousands dead, and widespread use of torture by French forces. Vietnam fought both France and then the United States for decades. Kenya's Mau Mau uprising, though ultimately suppressed, contributed to British willingness to eventually negotiate. These armed struggles imposed enormous human costs on colonized populations, even when they ultimately succeeded. Does the justice of the cause change how you think about the means?` },
            { word: `independence came`,
              definition: `The principle that the path to independence shaped what new nations inherited: negotiated transfers often left colonial structures intact; rapid transfers left governance gaps; armed struggles left physical and social destruction.`,
              audioPrompt: `The legacy of how independence came, {name}, is a crucial insight in understanding why some new nations developed successfully and others struggled. Negotiated independence often meant colonial institutions remained largely intact, which was sometimes good (functioning courts, civil services) and sometimes bad (an economy still structured around colonial extraction). Sudden transfers, like Belgium in the Congo, left almost no trained local administrators. Armed struggles often left destroyed infrastructure and deep social wounds. The path to independence isn't just a historical curiosity: it shaped the starting conditions that determined what new nations could build on. How does this change how you evaluate the outcomes of decolonization?` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `After Independence`,
          paragraphs: [
            `Independence did not automatically deliver prosperity, democracy, or stability. New nations faced inherited challenges: economies designed for extraction; borders creating multi-ethnic states with no shared political tradition; institutions built for colonial control. The post-independence decades brought both remarkable successes and devastating failures.`,
            `Many newly independent states quickly fell into authoritarian rule. Both superpowers backed authoritarian governments serving their strategic interests, regardless of governance or human rights. Economic crises driven by declining commodity prices destabilized governments further. Military coups became frequent. The democratic promise of independence was often short-lived.`,
            `Development proved uneven. Some post-colonial nations, especially in East and Southeast Asia, achieved rapid growth through manufacturing and exports. Others, especially commodity-dependent nations in sub-Saharan Africa and parts of Latin America, struggled with the poverty trap: without capital to invest in education, productivity stayed low.`,
          ],
          image: `/voyager-assets/social-studies/l13-s4-after.webp`,
          imageCaption: `Independence did NOT automatically deliver prosperity, democracy, or stability. New nations faced inherited challenges: economies designed for EXTRACTION not development; borders creating multi-ethnic states with no shared political tradition; institutions built for colonial governance not self-rule; and populations divided along colonial-era lines. COLD WAR DYNAMICS made things worse: both the U.S. and Soviet Union backed authoritarian governments serving their interests, regardless of governance quality. MILITARY COUPS became frequent. Development proved UNEVEN: East and Southeast Asia achieved rapid growth through manufacturing and exports; many commodity-dependent nations in sub-Saharan Africa and parts of Latin America struggled with the POVERTY TRAP. Colonial economic distortions proved stubborn.`,
          vocab: [
            { word: `post-colonial challenges`,
              definition: `The inherited difficulties new nations faced after independence: extractive economies, artificial borders, weak institutions, divided societies, and Cold War interference, that shaped their post-independence trajectories.`,
              audioPrompt: `Post-colonial challenges, {name}, are the inherited difficulties that made nation-building so hard after independence. New nations didn't start with a blank slate: they started with economies built for extraction, institutions designed for colonial governance, borders that ignored ethnic realities, and populations often divided by colonial-era policies that deliberately pitted communities against each other. On top of all this, Cold War powers intervened to support friendly governments regardless of their governance quality. Understanding these starting conditions is essential to evaluating why some new nations succeeded and others struggled: it wasn't about effort or capability, it was about the foundations they inherited.` },
            { word: `Cold War interference`,
              definition: `The pattern of the U.S. and Soviet Union backing authoritarian governments and supporting coups in newly independent nations to secure strategic allies, regardless of the effects on governance or the people.`,
              audioPrompt: `Cold War interference, {name}, was a devastating pattern for many newly independent nations. Both the United States and Soviet Union competed for influence in post-colonial countries, backing governments, rebel movements, and coups based on strategic alignment rather than governance quality or the welfare of local populations. This interference prolonged authoritarian rule in many countries, destabilized democratic governments, and fueled civil conflicts that killed hundreds of thousands. For Latin America, this pattern, which we covered in the international relations lesson, was particularly intense. Understanding that many post-colonial failures of democracy were actively caused or enabled by outside powers reframes the question of responsibility for those outcomes.` },
            { word: `uneven post-colonial development`,
              definition: `The divergent economic trajectories of former colonies after independence: some (especially East Asia) achieved rapid growth; others (especially commodity-dependent nations) remained trapped in poverty and dependence.`,
              audioPrompt: `Uneven post-colonial development, {name}, is the striking divergence in outcomes among former colonies after independence. South Korea, Taiwan, Singapore, and later China achieved extraordinary economic growth through manufacturing-led exports. But many former colonies in sub-Saharan Africa and parts of Latin America remained stuck in commodity dependence and the poverty trap. Why the difference? Institutions, investment in education, industrial policy, geographic factors, and crucially, whether Cold War interference allowed governments to focus on development rather than survival. The comparison between successful and struggling post-colonial states is one of the most important questions in development economics.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Cases`,
          paragraphs: [
            `Pull it together. Colonialism was political and economic control built on extraction and artificial borders. It left new nations with economies built for colonial needs, institutions designed for colonial control, and borders ignoring real communities. Colonial empires fell because of weakened powers, rising nationalist movements, and delegitimization.`,
            `Decolonization took many paths, each leaving different legacies. New nations faced Cold War interference, authoritarian temptation, commodity dependence, and weak institutions. Development outcomes were uneven: some post-colonial states succeeded dramatically; others remained trapped by inherited distortions. Latin America, decolonizing earlier, gives a longer view of these dynamics.`,
            `Now you become the analyst. Five case studies: Indian independence and partition, Algeria, the Congo, Vietnam's long war, and Latin America's earlier decolonization. For each, trace the forces at work, the path taken, the choices made, and the legacies that followed. There are no simple heroes and villains. Decolonization is complex history. Onward.`,
          ],
          image: `/voyager-assets/social-studies/l13-s5-before.webp`,
          imageCaption: `Threads together. COLONIALISM was political and economic control built on extraction, suppression, and artificial borders. It left new nations with economies built for colonial needs, institutions designed for colonial control, and borders ignoring real communities. FORCES THAT ENDED EMPIRE: weakened colonial powers after two world wars, rising NATIONALIST MOVEMENTS demanding SELF-DETERMINATION, and an international environment that delegitimized empire. Decolonization took many PATHS: negotiated transfers, armed struggles, sudden handovers, each leaving different legacies. After independence, new nations faced COLD WAR INTERFERENCE, authoritarian temptation, commodity dependence, and weak institutions. DEVELOPMENT OUTCOMES WERE UNEVEN. Latin America, decolonizing earlier, gives a longer view. Five cases follow. Trace the forces, paths, and legacies. Onward.`,
          vocab: [
            { word: `decolonization analyst`,
              definition: `Someone who examines historical decolonization cases by identifying the forces at work, the paths taken, the choices made, and the legacies that followed, connecting history to present-day conditions.`,
              audioPrompt: `A decolonization analyst, {name}, looks at historical independence movements and new nations by asking: what forces were at work? What path did independence take? What choices were made by colonizers and independence movements? What legacies did those choices leave? As you work through the five cases, practice this analytical lens: connect the specific historical events to the general patterns from the lesson, and connect the legacies to present-day conditions in those countries. Understanding decolonization as a historian does, not as a morality play with clear heroes and villains, is one of the most important skills in understanding today's world.` },
            { word: `Latin American decolonization`,
              definition: `The earlier wave of independence in Latin America, mostly in the early nineteenth century, providing a longer historical lens on the challenges and legacies of post-colonial nation-building.`,
              audioPrompt: `Latin American decolonization, {name}, is the earlier wave of independence that makes Latin America a uniquely valuable lens for studying post-colonial patterns. Most Latin American nations became independent in the early nineteenth century, more than a century before the main wave of African and Asian decolonization. This longer time frame lets us see more clearly how post-colonial challenges, economic dependence, institutional weakness, inequality, and outside interference, play out over time. If your family has roots in Latin America, you're connected to this history directly. How does seeing it as "post-colonial" nation-building rather than simply "Latin American history" change what you notice about it?` },
            { word: `history present`,
              definition: `The analytical practice of tracing how historical events and choices, like colonial borders, extractive economies, and Cold War interference, directly shape present-day political and economic conditions.`,
              audioPrompt: `Connecting history to present, {name}, is the core analytical skill this lesson is building. The patterns you trace in decolonization, artificial borders driving conflict, commodity dependence limiting development, Cold War interference undermining democracy, weak institutions slowing growth, are not just history. They are still operating forces in today's world. The borders drawn in colonial conference rooms still exist. The commodity dependence still shapes economies. The institutional deficits are still being rebuilt. When you read news about conflicts in Africa, economic crises in developing nations, or political instability in formerly colonized countries, the decolonization framework helps you understand why.` },
          ],
        },

        {
          id: `l13-case-study`,
          type: `case-study`,
          headline: `Five Decolonization Investigations`,
          intro: `{name}, you're the decolonization analyst now. Each case presents a real historical moment where colonial rule ended and a new nation emerged. Trace the forces at work, the path taken, the choices made, and the legacies that followed. History here is not simple.`,
          cases: [
            {
              id: `c1`,
              title: `India and Pakistan: Independence and partition`,
              type: `Negotiated independence with catastrophic division`,
              description: `After decades of mass nationalist movement led by Mohandas Gandhi and Jawaharlal Nehru, Britain agreed to grant India independence in 1947. But the partition of British India into two states, Hindu-majority India and Muslim-majority Pakistan, accompanied independence. The partition triggered one of the largest forced migrations in history: roughly 14 million people displaced, and an estimated 200,000 to 2 million killed in intercommunal violence. Both nations emerged as democracies, though with very different trajectories.`,
              questions: [
                `How did the Indian independence movement challenge the logic of colonial rule using colonial powers' own ideas?`,
                `What does the violence of partition reveal about how colonial rule shaped the societies it governed?`,
                `How did the path to independence shape the trajectory of India and Pakistan after independence?`,
              ],
              evaluation: `As a decolonization analyst, you'd identify India's independence as one of the most historically significant and analytically rich decolonization cases precisely because it illustrates so many of the general patterns simultaneously. The Indian independence movement, led by Gandhi and Nehru, is one of the most brilliant examples of using the colonizer's own ideas against colonial rule. Gandhi and Nehru both drew on British concepts of democracy, rule of law, and individual rights to argue that colonial rule violated the very principles Britain claimed to stand for. Mass civil disobedience, non-cooperation, and the Salt March forced Britain to confront the moral contradiction of an empire claiming to stand for freedom while denying it to hundreds of millions of Indian subjects. This strategy was effective precisely because it operated on the terrain of ideas and international legitimacy, not just military power. After two World Wars had weakened Britain economically and politically, the cost of maintaining India by force was too high. The violence of partition, however, reveals something crucial about how colonial rule had shaped Indian society. British administrators had long used a "divide and rule" strategy: deliberately cultivating religious and communal differences between Hindus, Muslims, and Sikhs to prevent unified resistance. The artificial sharpening of religious identities as a colonial political strategy left a society more deeply divided along communal lines than it had been. When the partition line was drawn hastily by a British official (Cyril Radcliffe, who had never been to India before arriving to draw the borders), communities were suddenly on the "wrong" side of new international borders, triggering mass displacement and horrific violence. This is the artificial borders problem playing out in real time, and at catastrophic human cost. The path to independence shaped trajectories in important ways. India established a federal democracy that, despite enormous challenges, has remained largely democratic for over seventy years, one of the largest democratic experiments in history. Pakistan's path was more turbulent: multiple military coups, recurring authoritarian rule, and ongoing tensions with India over Kashmir. The difference isn't simply about capacity or culture: it reflects different starting conditions, including the concentration of Pakistan's military establishment, the effects of partition on its institutional inheritance, and the different challenges of building legitimacy in a nation defined primarily by religious identity rather than a shared political tradition. The case also illustrates how a relatively peaceful path to formal independence (negotiations) can still involve catastrophic violence (partition), and how the decisions made at the moment of independence, here the hasty and poorly designed partition process, have consequences that echo for generations. As a decolonization analyst, you'd conclude that India-Pakistan is a case study in both the power and the limits of negotiated independence: power in the sense that it achieved independence without full-scale colonial war; limits in the sense that the negotiated settlement created borders and divisions whose consequences are still being lived in the region today.`,
            },
            {
              id: `c2`,
              title: `Algeria: The brutal war for independence`,
              type: `Armed struggle and its costs`,
              description: `France considered Algeria not merely a colony but an integral part of France itself, home to over a million European settlers. When the Front de Libération Nationale (FLN) launched an armed independence movement in 1954, France responded with massive military force. The eight-year war involved systematic torture by French forces, massive civilian displacement, and over 300,000 Algerian deaths. France lost, and Algeria achieved independence in 1962, but the war's legacies shaped both nations for decades.`,
              questions: [
                `Why did France resist Algerian independence so fiercely, and what does this reveal about how colonialism rationalizes itself?`,
                `What are the moral dimensions of both the colonial methods (torture, collective punishment) and the FLN's tactics (targeting civilians)?`,
                `How did the war's legacies shape Algeria and France after independence?`,
              ],
              evaluation: `As a decolonization analyst, you'd identify Algeria as one of the most morally complex and historically instructive decolonization cases precisely because it forces a direct confrontation with the methods of both colonialism and anti-colonial resistance, and because it illustrates so vividly how colonial powers rationalize their position even as it becomes indefensible. France's fierce resistance to Algerian independence reflects the deepest logic of colonial self-justification. Unlike its other African colonies, France officially classified Algeria as an integral department of France itself, not a colony, meaning Algerian independence was framed as national dismemberment rather than decolonization. This framing allowed French politicians and military commanders to justify extraordinary measures to maintain control. The presence of over one million European settlers (the pieds-noirs) who had lived there for generations gave the resistance additional political weight in France. The methods France used, including systematic torture of suspected FLN members, collective punishment of villages, and mass displacement of rural Algerians into "regroupment camps," involved clear violations of the very democratic principles France claimed to represent. This is the essential moral contradiction of colonialism exposed: a nation claiming to embody the rights of man using mass torture to deny those rights. The FLN's tactics were also morally complicated: its campaign included targeting European civilian settlers, which involved deliberate violence against people who were themselves in some sense also products of a colonial system rather than its architects. These moral complexities matter for understanding the case clearly: both sides employed tactics that violated basic humanitarian norms, even as the fundamental justice of Algeria's independence claim is not seriously in doubt. How did the war's legacies shape both nations? Algeria gained independence but with a revolutionary political culture organized around the FLN as the single legitimate national force, with a military establishment that had won the war and expected to rule. This set up the authoritarian one-party state that governed Algeria for decades and the military's continuing role in Algerian politics today. The "promise of independence" was largely unfulfilled for ordinary Algerians in terms of democracy and economic development. France was traumatized politically: the war nearly caused a civil war in France itself, bringing down the Fourth Republic and bringing Charles de Gaulle back to power. French society's reckoning with the torture and war crimes committed in Algeria has been partial and contested, raising the question of how nations process the moral costs of colonial violence. As a decolonization analyst, you'd conclude that Algeria is a case study in how colonial rationalizations enable atrocity, how the methods used in anti-colonial struggle can shape the nature of post-colonial governance, and how the legacies of colonial violence persist long after formal independence.`,
            },
            {
              id: `c3`,
              title: `The Congo: Sudden independence and immediate crisis`,
              type: `Rapid transfer, governance collapse, and Cold War intervention`,
              description: `Belgium transferred sovereignty to the Congo in June 1960, almost without preparation: there were only seventeen Congolese university graduates in the entire country when independence arrived. Within weeks of independence, the army mutinied, the mining-rich Katanga province declared secession backed by Belgian and Western corporate interests, and Belgium sent troops back in. The elected prime minister, Patrice Lumumba, appealed to the UN and the Soviet Union for help. The CIA and Belgium conspired in his assassination in 1961. Cold War proxy conflict and dictatorship followed for decades.`,
              questions: [
                `What does Belgium's sudden transfer of power reveal about the nature of colonial governance?`,
                `How did Cold War dynamics transform a post-independence crisis into something far more destructive?`,
                `What does Lumumba's fate reveal about the limits of national self-determination in a Cold War world?`,
              ],
              evaluation: `As a decolonization analyst, you'd identify the Congo case as perhaps the starkest illustration of how post-colonial challenges interact: inadequate institutional preparation, Cold War interference, and resource curse dynamics combined to produce catastrophic outcomes for the Congolese people. Belgium's sudden transfer of power reveals something important about the nature of colonial governance: it was never designed to develop local governance capacity. Belgian colonial policy in the Congo had been extraordinarily exploitative, based on the rubber extraction system that had been one of history's most brutal colonial regimes under King Leopold II, and later on mining extraction. The colonial government had deliberately limited Congolese education and political participation. When Belgium decided to transfer sovereignty (partly in response to rising Congolese nationalism and international pressure), there was almost no trained Congolese civil service, no experienced political class, and no established national institutions. This was not an accident: it was the result of colonial governance designed to extract wealth, not to prepare a population for self-governance. The sudden transition from this almost complete institutional deprivation to full sovereignty created an immediate governance vacuum. The Cold War dynamics that followed reveal how little "national self-determination" meant in practice when great powers had strategic interests at stake. Patrice Lumumba was a charismatic and genuine nationalist leader, the elected prime minister of a newly independent nation. When he turned to the Soviet Union for help against the Belgian and Western corporate interests backing the Katanga secession, the Eisenhower administration classified him as a communist threat and authorized efforts to remove him. The CIA and Belgian intelligence conspired in his capture and execution. His assassination and the subsequent CIA-backed rise of Mobutu Sese Seko demonstrated that Cold War powers would override the democratic outcomes of decolonization when they conflicted with strategic interests. The Congo under Mobutu became one of history's most notorious kleptocracies, with resources extracted for Mobutu's personal enrichment and Western corporate interests while ordinary Congolese remained desperately poor, a continuation of colonial extraction through nominally independent governance. As a decolonization analyst, you'd conclude that the Congo case illustrates the tragic interaction of inadequate institutional preparation, Cold War interference, and resource curse dynamics: a country whose people had legitimate claims to self-determination found those claims overridden by outside powers with incompatible interests, and the consequences, instability, conflict, and poverty, have persisted for decades.`,
            },
            {
              id: `c4`,
              title: `Vietnam: The thirty-year war for independence`,
              type: `Decolonization as proxy war`,
              description: `Vietnam's independence movement, led by Ho Chi Minh and the communist Viet Minh, defeated French colonial forces at the Battle of Dien Bien Phu in 1954. The Geneva Accords divided Vietnam temporarily at the 17th parallel, with planned reunification elections. The United States, fearing communist expansion, backed South Vietnam and prevented the elections. The resulting war, in which the U.S. directly intervened from 1965 to 1973, killed an estimated 3 million Vietnamese and over 58,000 Americans. Vietnam was reunified under communist rule in 1975.`,
              questions: [
                `How did the Cold War transform Vietnam's independence struggle from a decolonization movement into a proxy war?`,
                `What does the U.S. decision to prevent the reunification elections reveal about the limits of self-determination as a principle?`,
                `What were the long-term legacies of the Vietnam War for Vietnam and for U.S. foreign policy?`,
              ],
              evaluation: `As a decolonization analyst, you'd identify Vietnam as the case that most clearly illustrates how the Cold War could transform a decolonization movement into something else entirely, with catastrophic consequences for the people involved. Ho Chi Minh and the Viet Minh movement had genuine nationalist credentials: they had fought Japanese occupation during World War II, they had led the movement that defeated France at Dien Bien Phu, and the 1954 Geneva Accords represented international recognition of Vietnam's right to reunification and self-determination through democratic elections. But Ho Chi Minh was also a communist, and in the Cold War framework of the Eisenhower and Kennedy administrations, the "domino theory" (the fear that if one country fell to communism, neighboring countries would follow) overrode the principle of self-determination. The U.S. decision to back South Vietnam and prevent the planned reunification elections, which U.S. officials privately acknowledged Ho Chi Minh would have won, reveals the critical gap between self-determination as a stated principle and its actual application: when the democratic process would produce a communist government, the United States chose to override the process. This revealed the instrumentalization of the self-determination principle: it was invoked when it served U.S. interests and set aside when it didn't. The transformation from decolonization movement to proxy war had catastrophic consequences for Vietnam. What might have been a relatively rapid national reunification under Ho Chi Minh's government became a thirty-year conflict that killed an estimated 3 million Vietnamese, devastated the country's infrastructure and environment (through massive bombing and the use of Agent Orange, a defoliant with devastating long-term health effects), and displaced millions. The war also profoundly shaped U.S. foreign policy: the "Vietnam Syndrome," the reluctance to commit U.S. ground forces to protracted conflicts, shaped American military thinking for decades. The long-term legacy for Vietnam itself is a complex story. Communist rule after 1975 brought authoritarian governance and immediate economic failures, followed by the "Doi Moi" economic reforms of 1986 that opened Vietnam to market mechanisms and produced rapid economic growth. Today Vietnam is one of the fastest-growing economies in Southeast Asia, a striking illustration of how post-independence outcomes are not permanently fixed by starting conditions. As a decolonization analyst, you'd conclude that Vietnam is a case study in how Cold War dynamics could transform a decolonization struggle into a proxy war that killed millions, and how the instrumentalization of self-determination as a principle by powerful nations reveals the gap between stated values and actual practice in international politics.`,
            },
            {
              id: `c5`,
              title: `Latin America: Earlier decolonization and its long shadow`,
              type: `First-wave independence and persistent post-colonial patterns`,
              description: `Most Latin American nations became independent in the early nineteenth century, breaking from Spanish and Portuguese rule through independence movements led largely by creole elites (American-born descendants of European colonists). Indigenous and African-descended populations were largely excluded from political power in the new republics. The new nations inherited colonial economies built around commodity exports and deep racial and social hierarchies. Two centuries later, many of these post-colonial patterns, inequality, commodity dependence, weak institutions, and outside interference, are still visible.`,
              questions: [
                `How did the social composition of Latin America's independence movements shape what kind of independence it was?`,
                `What does two centuries of post-colonial experience in Latin America reveal about how durable colonial legacies are?`,
                `How does Latin America's experience connect to the broader patterns of decolonization we've studied?`,
              ],
              evaluation: `As a decolonization analyst, you'd identify Latin America's case as uniquely valuable precisely because of its temporal distance: two centuries of post-colonial experience gives a much longer lens for examining how durable colonial legacies are and what it actually takes to overcome them. Latin America's independence movements were led primarily by creole elites, American-born descendants of European colonists who wanted political independence from Spain and Portugal but did not want to overturn the social order. This is a crucial distinction from many twentieth-century anti-colonial movements: Latin American independence was largely a political revolution (breaking from the colonial metropolis) without being a social revolution (transforming the internal hierarchies of colonial society). Indigenous and African-descended populations, who constituted the majority in many regions, were largely excluded from political power in the new republics. The racial hierarchies of colonial society, which placed European-origin whites at the top, mestizos in the middle, and indigenous and African-descended people at the bottom, were largely preserved after independence. This meant that the post-colonial condition for the majority of Latin Americans, especially indigenous peoples, African-descended communities, and rural peasants, looked different from what formal independence might suggest. The colonial economy based on commodity exports (silver, gold, sugar, coffee, rubber, oil, copper, soybeans over time) continued in the new republics. The land and institutions built around extraction remained in the hands of elite families. Periodic attempts to reform these structures triggered reactions from landed elites and (in the twentieth century) intervention from the United States. Two centuries later, many of the patterns rooted in colonial economics and social structure are still visible. Latin America has some of the world's highest inequality levels. Commodity dependence remains a structural feature of many economies. Institutions in many countries remain weaker than their wealth levels would predict. And outside interference, from the United States rather than Spain or Portugal, has continued to shape political outcomes. As a decolonization analyst, you'd conclude that Latin America's experience illustrates perhaps the most important lesson of decolonization: formal independence from a colonial power is a necessary but far from sufficient condition for the social, economic, and political transformation that independence was supposed to deliver. Two centuries of evidence suggests that overcoming colonial legacies requires not just political independence but fundamental reform of the economic and social structures that colonialism built.`,
            },
          ],
          synthesisPrompt: `After all five: what patterns do you see across the cases? What determines whether decolonization leads to successful nation-building or prolonged instability? Was formal independence enough, or did something more fundamental need to change? In 5-6 sentences, connect the cases to the general patterns from the lesson.`,
          reflectionPrompt: `Decolonization created the political map you live on. Many of the world's current conflicts, inequalities, and political instabilities are legacies of colonial borders, economies, and interference. How does understanding this history change how you see the world you've inherited?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is decolonization?`,
              options: [
                `The process of European nations building new colonial empires in the twentieth century.`,
                `The process by which colonial empires came apart and new sovereign nations emerged from them.`,
                `A diplomatic agreement between all colonial powers to end empire simultaneously.`,
                `The economic process of colonies becoming wealthier than their colonial rulers.`,
              ],
              correctIndex: 1,
              explanation: `Decolonization is the process by which colonial empires collapsed and new sovereign nations emerged, transforming the political map in the twentieth century. The distractors describe empire expansion, a coordinated agreement that didn't exist, or an economic reversal.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the principle of self-determination, and why was it central to anti-colonial movements?`,
              options: [
                `The exclusive sovereign right of all colonial powers alone to formally determine which territories they would continue to govern and control indefinitely and without any limit.`,
                `A principle that applies exclusively and only to nations that have already fully and formally achieved complete and internationally recognized full sovereign independence already.`,
                `The principle that peoples sharing a common identity have the right to govern themselves, which anti-colonial movements used to challenge colonial rule using colonizers' own democratic values.`,
                `A much broader general personal philosophy specifically about individual decision-making, personal free will, and individual autonomy in everyday personal life choices.`,
              ],
              correctIndex: 2,
              explanation: `Self-determination is the principle that peoples sharing a common identity have the right to govern themselves. Anti-colonial movements used it to challenge colonial rule by invoking the colonizers' own democratic values against them. The distractors describe colonial rights, limit the principle to already-independent nations, or confuse it with individual philosophy.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why are colonial-era borders a persistent source of conflict and instability?`,
              options: [
                `Because they were drawn by colonial powers without regard for existing ethnic, cultural, or political communities.`,
                `Because colonial borders were always drawn to be intentionally fair and inclusive of all existing communities.`,
                `Because newly independent nations always redraw their borders immediately after independence.`,
                `Because borders drawn in the colonial era are automatically recognized by the United Nations.`,
              ],
              correctIndex: 0,
              explanation: `Colonial-era borders were drawn by colonial powers based on their own administrative or negotiating needs, with no regard for existing ethnic, cultural, or political communities, creating new nations whose borders don't match their internal realities. The distractors falsely claim colonial borders were fair, that they were redrawn, or give them automatic UN recognition.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How did Cold War dynamics affect post-independence outcomes in many newly decolonized nations?`,
              options: [
                `The Cold War had absolutely no effect whatsoever on post-independence outcomes since it only ever directly involved the U.S. and Soviet Union.`,
                `Both the U.S. and Soviet Union only ever supported genuinely democratic governments in formerly colonized nations, and never once supported authoritarian ones.`,
                `Both the U.S. and Soviet Union backed authoritarian governments and intervened to remove leaders based on strategic interests, often undermining democracy and development.`,
                `The Cold War period automatically and reliably provided generous economic development aid to every newly independent newly sovereign nation worldwide.`,
              ],
              correctIndex: 2,
              explanation: `Both Cold War powers backed authoritarian governments and intervened in newly independent nations based on strategic alignment rather than governance quality, often undermining democracy and development. The distractors falsely deny Cold War involvement, claim they only backed democracies, or promise automatic aid.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What distinguished Latin America's independence from twentieth-century anti-colonial movements in Africa and Asia?`,
              options: [
                `Latin American independence included full social revolution that redistributed land and power to indigenous and African-descended populations.`,
                `Latin American independence was led primarily by creole elites and largely preserved colonial social hierarchies and economic structures.`,
                `Latin American independence was granted voluntarily by Spain and Portugal without any conflict.`,
                `Latin American nations were the first to fully overcome their colonial legacies after independence.`,
              ],
              correctIndex: 1,
              explanation: `Latin American independence was led primarily by creole elites who wanted political independence from Spain and Portugal but largely preserved colonial social hierarchies, racial structures, and extractive economies. The distractors falsely claim social revolution, voluntary grants, or that Latin America fully overcame its colonial legacies.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the case of the Congo reveal about how colonial governance prepared new nations for independence?`,
              options: [
                `Belgium's Congo case actually clearly shows without question that all colonial governance always thoroughly and carefully prepared every colony for completely successful self-rule and democratic governance.`,
                `The Congo case shows that the United Nations always successfully prevented post-independence crises through decisive peacekeeping operations.`,
                `Belgium's sudden transfer of power with only seventeen Congolese university graduates shows that colonial governance was designed for extraction, not for developing local governance capacity.`,
                `The Congo case shows conclusively that armed struggle always produces significantly better and more stable post-independence outcomes than negotiated transfers.`,
              ],
              correctIndex: 2,
              explanation: `Belgium's Congo case reveals that colonial governance was designed for extraction, not to develop local governance capacity: only seventeen Congolese university graduates existed at independence, producing an immediate governance vacuum. The distractors falsely claim thorough preparation, UN prevention of all crises, or universal advantages of armed struggle.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How did the United States' decision to prevent the Vietnamese reunification elections illustrate the limits of self-determination as a principle?`,
              options: [
                `It showed that self-determination was universally and consistently applied as an absolute and inviolable principle by every Cold War power.`,
                `It showed that when democratic process would produce a communist government, the U.S. chose to override the process, revealing self-determination as selectively applied.`,
                `It actually proved completely conclusively and definitively without any doubt that the Vietnamese people did not actually want any national reunification.`,
                `It clearly demonstrated that the specific terms of the Geneva Accords legally required the United States to prevent elections indefinitely.`,
              ],
              correctIndex: 1,
              explanation: `The U.S. decision to prevent Vietnamese reunification elections, which officials privately acknowledged Ho Chi Minh would win, revealed self-determination as selectively applied: invoked when it served U.S. interests and set aside when it didn't. The distractors falsely claim universal application, deny Vietnamese desires, or misrepresent the Geneva Accords.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is it insufficient to evaluate post-colonial outcomes solely by comparing them to what they achieved after independence?`,
              options: [
                `Because post-colonial nations all started from completely identical starting conditions with absolutely no meaningful or consequential differences in what they each inherited from colonial rule.`,
                `Because formal political independence always immediately and automatically delivers full economic prosperity and perfectly stable long-lasting democratic governance to every single new nation.`,
                `Because post-colonial nations inherited vastly different starting conditions, including colonial economic distortions, artificial borders, institutional gaps, and Cold War interference, that shaped their trajectories.`,
                `Because the specific calendar date of formal independence is clearly and definitively and completely beyond question the only single factor that truly matters for all post-colonial development outcomes.`,
              ],
              correctIndex: 2,
              explanation: `Evaluating post-colonial outcomes requires understanding inherited starting conditions: colonial economic distortions, artificial borders, institutional gaps, and Cold War interference. These shaped trajectories profoundly, making simple comparisons of "success" and "failure" inadequate without examining what nations started with. The distractors falsely claim identical starting conditions, immediate success, or reduce the explanation to one factor.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Formal political independence from a colonial power automatically delivers economic prosperity, democratic governance, and social equality to the people of newly independent nations.`,
              correctAnswer: false,
              explanation: `False, and this is one of the central lessons of the entire decolonization lesson: formal political independence is a necessary but far from sufficient condition for the social, economic, and political transformation that independence was supposed to deliver. Understanding why requires looking carefully at what new nations actually inherited when they became independent and what the forces were that shaped their post-independence trajectories. When colonial rule ended, new nations did not start from a blank slate. They inherited economies that had been deliberately structured around extraction for the colonial power rather than for local development: commodity exports, land concentrated in elite hands, industries geared to colonial needs rather than diversified domestic markets. Changing these economic structures required overcoming powerful vested interests (local elites and foreign corporations who benefited from the existing arrangements) and building new institutional capacities that colonial governance had deliberately not developed. They inherited institutions designed for colonial governance (authoritarian, extractive, not representative) rather than for democratic self-rule. Building functioning democratic institutions, independent judiciaries, effective civil services, and legitimate political processes takes decades even under favorable conditions. Colonial rule had often actively destroyed or suppressed the local institutions that might have formed the foundation for post-independence governance. They inherited artificial borders that grouped incompatible communities together or divided cohesive communities across multiple states, creating pressures for conflict that had nothing to do with the new governments' choices. And they faced Cold War interference that often overrode democratic processes when those processes produced outcomes unfavorable to either the U.S. or Soviet Union. The Latin American case illustrates this most starkly: even after two centuries of formal independence, many countries still show strong traces of colonial economic patterns (commodity dependence, inequality, institutional weakness). India shows that formal independence can produce a functioning large democracy, but also that poverty, inequality, and the legacies of colonial borders (including the ongoing Kashmir conflict) persist. The Congo, Algeria, and Vietnam show how paths to independence and post-independence dynamics can produce very different outcomes, all shaped by what colonial rule had created and what post-independence forces responded. So the statement is false: formal independence is necessary but not sufficient. What matters is what structures were inherited, what social forces shaped post-independence politics, and whether the deeper economic and social transformations needed to actually deliver the promises of independence could be achieved.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A country gained independence after a prolonged armed struggle, with colonial infrastructure destroyed, no trained civil service, and immediately experiencing Cold War interference that led to a coup removing its democratically elected government. Using the lesson, what would you predict about this country's post-independence trajectory, and why?`,
              options: [
                `The country would immediately achieve stable democracy and rapid economic development because independence is sufficient for success.`,
                `The armed struggle guarantees strong governance because military discipline transfers directly to effective civil administration.`,
                `This country faces severe headwinds: destroyed infrastructure, institutional vacuum, and Cold War interference removing its elected government combine to make democratic consolidation and development extremely difficult, though not impossible, as the starting conditions stack multiple post-colonial challenges simultaneously.`,
                `Cold War interference always produces better governance because outside powers bring expertise and resources.`,
              ],
              correctIndex: 2,
              explanation: `The combination of destroyed infrastructure, institutional vacuum (no trained civil service), and Cold War interference removing the elected government stacks multiple post-colonial challenges simultaneously, predicting severe difficulties for democratic consolidation and development. But "difficult" is not "impossible," as post-independence trajectories can change over time. The distractors falsely claim independence is sufficient, that military discipline transfers to governance, or that Cold War interference improves outcomes.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-map`, category: `The map you live on`, prompt: `Decolonization created the political map you live on. Many current conflicts, inequalities, and political instabilities are legacies of colonial borders, economies, and interference. How does understanding this history change how you see the world you've inherited?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, colonialism and decolonization may have felt like distant history. What surprised you most in the cases, the violence of partition in India, Belgium's deliberate non-preparation of Congo, Cold War interference in Vietnam, or the persistence of colonial legacies in Latin America? What changed?` },
            { id: `reflect-independence`, category: `The limits of independence`, prompt: `Formal political independence turned out to be necessary but not sufficient for real liberation. What else was needed beyond independence, and why was it so hard to achieve? Use a specific case to ground your answer.` },
            { id: `reflect-heritage`, category: `Teaching decolonization`, prompt: `Caro, you're building social studies for conscious families with roots in Latin America. How would you help a child understand that their heritage country's current inequalities are partly the legacy of colonialism and post-independence dynamics, so history feels like their story rather than a distant abstraction?` },
            { id: `reflect-responsibility`, category: `Who is responsible?`, prompt: `Former colonial powers benefited enormously from extraction, while former colonies bear the legacies. What obligations, if any, do former colonial powers have to the countries they colonized? What would meaningful accountability look like?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Two centuries after Latin American independence, many colonial economic and social patterns persist. Is this primarily a legacy of colonialism, the result of post-independence choices, or Cold War interference? How do you weigh these explanations, and does your answer matter for what should be done?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Map Your Heritage's Decolonization Story`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a decolonization investigation, tracing how the patterns from this lesson played out in countries your family knows. Start with the global map: look at a map of the world in 1945 and compare it to today. Notice how many countries gained independence in the decades between. Count the change in the number of sovereign nations in Africa, Asia, and the Caribbean. Then trace your family's heritage: if your family has roots in Latin America, Africa, Asia, or anywhere that experienced colonialism, research when that country gained independence, from which colonial power, and through what path (negotiated, armed struggle, or rapid transfer). Apply the analytical framework: for your heritage country, identify what colonial legacies it inherited (economic structure, borders, institutions) and trace how those legacies have played out in the two centuries or decades since independence. Look specifically for commodity dependence, inequality patterns, and periods of outside interference. Discuss current news: find a current news story about a conflict, political crisis, or economic challenge in a formerly colonized country and apply the decolonization framework: what colonial legacies might be contributing? Explore Latin America's long arc: as a family, discuss how the patterns from the Latin American case (creole elite independence, preserved social hierarchies, commodity dependence, U.S. interference) connect to current conditions in countries your family knows. The goal is to move from seeing current events as disconnected from history to understanding the long shadows that colonial systems cast, and to see your family's own heritage as connected to the decolonization story that reshaped the modern world.`,
          },
          projectOption: {
            title: `The Decolonization Case Study Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate the decolonization story of a real country in depth, developing the analytical skills to connect colonial history to present-day conditions. Week 1, choose a country and research its colonial history and independence: choose a country, ideally one your family has roots in or one connected to the five cases from the lesson (India, Algeria, Congo, Vietnam, or a Latin American country). Research its colonial history: which power colonized it, when, and how? What kind of colonial system was it (extraction focused, settler colonial, administrative colonial)? What was extracted? How were local governance, culture, and social structures affected? How did independence come: negotiated, armed struggle, or rapid transfer? What did the country inherit at independence: what was its economy built around, what institutions existed, what borders and social divisions did it face? Week 2, trace the post-independence trajectory and connect to the present: research the country's post-independence history: did it achieve democratic governance, and was it stable? Did Cold War powers intervene, and how? What economic path did it follow: did it remain commodity-dependent or develop manufacturing and services? What were the major crises and turning points? Then connect to the present: how do current conditions, including inequality levels, political stability, economic structure, and ongoing conflicts, reflect colonial legacies versus post-independence choices? Produce your final piece, a country case study report, a historical timeline connecting colonial history to present conditions, a "decolonization and development" analysis, or a multimedia presentation, that demonstrates the ability to trace colonial legacies forward into the present and evaluate their role alongside post-independence factors. If focusing on a Latin American country, explicitly trace the two-century arc from early-nineteenth-century independence to today.`,
            offerToParent: `Parent: opt your child into the Decolonization Case Study Project. Researching a real country's colonial history and tracing how colonial legacies, economic structures, institutional inheritance, artificial borders, Cold War interference, shaped its post-independence trajectory and current conditions, directly develops C3 Framework history and global concepts: colonialism, nationalism, self-determination, independence movements, post-colonial development, global inequality, and the connection between historical causes and present-day effects. Choosing a country with family connections makes this personally relevant, and the analytical framework of connecting colonial history to present conditions is one of the most important tools for understanding global current events.`,
          },
          identityQuestion: `If you become someone who understands what colonialism was and how it worked, who can trace the paths to independence and the legacies they left, who sees current global inequalities as partly rooted in historical structures rather than as natural or inevitable, and who can connect a country's current conditions to its colonial and post-colonial history, what kind of global citizen does that make you, one who sees the present as shaped by a past that can be understood and reckoned with, that someone who only sees current events without historical context never can?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can trace the colonial roots of current global inequalities.`,
            `A person who understands that the political map I live on was created by decolonization.`,
            `Someone who sees my family's heritage country's history through a decolonization lens.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just mapped one of the most sweeping political transformations in modern history: the collapse of colonial empires and the emergence of more than a hundred new nations in a few decades. You learned what colonialism was, how it extracted wealth, suppressed local governance, and drew artificial borders that ignored real communities. You traced the forces that brought it down: weakened colonial powers, rising nationalist movements demanding self-determination, and an international environment that delegitimized empire. You examined the variety of paths to independence: negotiated transfers, armed struggles like Algeria, sudden handovers like Belgium in the Congo, and long proxy wars like Vietnam. You saw how post-independence outcomes were shaped by inherited starting conditions and Cold War interference, and how uneven development outcomes reflected those starting points. And through the Latin American case, you gained a two-century lens on how durable colonial legacies can be. You can now look at a current conflict, an economic pattern, or a political crisis in a formerly colonized country and ask: what colonial history is contributing to this? That's a genuinely powerful analytical tool. Next, we zoom out to the Cold War itself: the global ideological conflict that shaped so many of the post-colonial stories you just studied. Onward, {name}. — Atlas`,
          badge: `freedom-analyst`,
          badgeName: `Freedom Analyst`,
          xpEarned: 75,
          competencies: [
            `Understands colonialism's mechanics: extraction, suppression, artificial borders`,
            `Knows the forces that ended colonial empires: weakened powers, nationalism, self-determination`,
            `Can identify different paths to independence and the legacies each left`,
            `Understands post-colonial challenges: inherited economies, Cold War interference, governance gaps`,
            `Knows why post-colonial development outcomes were uneven`,
            `Can trace colonial legacies forward into present-day conditions`,
            `Understands Latin America's earlier decolonization as a long-lens case study`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: The Cold War in Global Perspective`,
            hook: `The ideological conflict that reshaped the world after 1945 and whose legacies are still with us. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L13 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
