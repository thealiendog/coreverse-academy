// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L08 — Genocide: Prevention and Memory
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Genocide Definition, Prevention, Cases, Memory
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: CASE STUDY (Armenian / Rwandan / Bosnian)
// HIGH-SENSITIVITY CONTENT: includes crisis-adjacent resources throughout
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l08-v1";

const HISTORY_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-08`,
      title: `Genocide: Prevention and Memory`,
      duration: 35,
      xpReward: 75,
      badge: `genocide-aware`,
      badgeName: `Genocide Aware`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, today we engage genocide as a category, with three case studies of how it has happened and how it might be prevented. This is heavy content. The framework for engaging it seriously matters: the term "genocide" is precise (defined by Raphael Lemkin in 1944 and the UN Convention in 1948), the cases have specific patterns that researchers have identified (Gregory Stanton's "Ten Stages of Genocide"), and the question of prevention is among the most urgent in global politics. Three cases: the Armenian Genocide (1915-1923), the Rwandan Genocide (1994), the Bosnian War and Srebrenica (1992-1995). Each shows a different pattern of organization, international response, and aftermath. If you have personal connection to any of these histories or if engaging this material feels heavy for you, that's appropriate; this content has weight for good reasons. Resources at the end of the lesson if you need to talk to someone. Let's begin with care.`,
          headline: `Genocide: Prevention and Memory`,
          subtitle: `Three cases. Definitions, prevention frameworks, memory.`,
          visual: `/voyager-assets/history/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Defining Genocide`,
          paragraphs: [
            `Raphael Lemkin (1900-1959), a Polish-Jewish lawyer who lost most of his family in the Holocaust, coined the word "genocide" in his 1944 book "Axis Rule in Occupied Europe." Combining the Greek "genos" (race, tribe) with the Latin "-cide" (killing), Lemkin proposed the word to name a specific phenomenon: the deliberate attempt to destroy a group of people as a group. Before Lemkin, no word in any major language captured this specifically; mass killings of identified groups were treated as either war crimes or as features of broader violence rather than as a category of their own. Lemkin spent the rest of his life campaigning for international recognition of genocide as a distinct crime. He succeeded: the UN Convention on the Prevention and Punishment of the Crime of Genocide was adopted on December 9, 1948.`,
            `The Convention's definition. Genocide means "any of the following acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group, as such: (a) Killing members of the group; (b) Causing serious bodily or mental harm to members of the group; (c) Deliberately inflicting on the group conditions of life calculated to bring about its physical destruction in whole or in part; (d) Imposing measures intended to prevent births within the group; (e) Forcibly transferring children of the group to another group."`,
            `Three things worth noting about this definition. First, "intent to destroy" is required; mass civilian deaths in war, however horrific, aren't genocide unless they're aimed at the destruction of an identified group as such. Second, "in whole or in part" matters; total destruction isn't required, only the intent to destroy the group as such. Third, the protected categories are limited to national, ethnical, racial, and religious groups; political and social groups aren't included (excluded under Soviet pressure during negotiations). This last point has been debated extensively; mass killings of political groups (e.g., communist purges, anti-communist purges) often fit other features of genocide but fall outside the legal definition.`,
            `Gregory Stanton, founder of Genocide Watch, has developed a "Ten Stages of Genocide" framework based on patterns across multiple cases: (1) classification (us-vs-them categories), (2) symbolization (distinguishing markers, names, dress), (3) discrimination (laws, denial of rights), (4) dehumanization (treating the group as less than human, often through media), (5) organization (specific armed groups, plans, lists), (6) polarization (extremists silencing moderates), (7) preparation (mobilization for killing), (8) persecution (concentration, deportation, killing begins), (9) extermination (organized mass killing), (10) denial (afterward, perpetrators and successors deny the genocide occurred or its scope). Recognizing the stages allows earlier intervention.`,
            `Why prevention is hard. Three structural barriers operate. First, recognition requires acknowledging that what's happening fits the genocide framework; states with interests in the perpetrators (allies, trade partners, geopolitical considerations) often refuse to recognize until too late. Second, intervention requires capacity to act militarily or otherwise; the UN Convention's "prevention and punishment" language has rarely been operationalized; the Responsibility to Protect (R2P) doctrine adopted by the UN in 2005 was supposed to address this but has been applied inconsistently. Third, denial often begins during the genocide itself and continues afterward, making memory and accountability difficult.`,
            `One framing before the cases. Each case ahead shows different patterns and different points where prevention failed. The Armenian Genocide shows how WWI-era international order failed to recognize what was happening; the Rwandan Genocide shows how a UN peacekeeping force on the ground failed to prevent killing despite warnings; the Bosnian War shows how slow international response allowed the worst mass killing in Europe since WWII. Studying each helps build framework for recognizing patterns and pressing for intervention earlier.`,
          ],
          image: `/voyager-assets/history/l08-s1-defining.webp`,
          imageCaption: `Raphael Lemkin coined "genocide" 1944 (Axis Rule in Occupied Europe); UN Convention adopted 1948. Definition: acts with intent to destroy national/ethnical/racial/religious group in whole or in part. Gregory Stanton's Ten Stages of Genocide framework. Prevention is structurally hard: recognition + capacity to act + counter-denial.`,
          vocab: [
            {
              word: `as pattern`,
              definition: `Term coined by Raphael Lemkin (1900-1959) in "Axis Rule in Occupied Europe" 1944 (Polish-Jewish lawyer who lost family in Holocaust). UN Convention adopted Dec 9, 1948: genocide means acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group, as such (killing members; causing serious bodily/mental harm; deliberately inflicting conditions calculated to bring about physical destruction; imposing measures to prevent births; forcibly transferring children). Three things to note: "intent to destroy" required; "in whole or in part" matters; political and social groups excluded under Soviet pressure during negotiations. Gregory Stanton (Genocide Watch) "Ten Stages of Genocide" framework: classification, symbolization, discrimination, dehumanization, organization, polarization, preparation, persecution, extermination, denial. Prevention is structurally hard: recognition (states with interests in perpetrators refuse to recognize), capacity to intervene (R2P doctrine 2005 applied inconsistently), counter-denial (denial begins during and continues after).`,
              audioPrompt: `Raphael Lemkin, a Polish-Jewish lawyer who lost most of his family in the Holocaust, coined the word "genocide" in his 1944 book Axis Rule in Occupied Europe, {name}. Combining the Greek "genos," meaning race or tribe, with the Latin "-cide," meaning killing, Lemkin proposed the word to name a specific phenomenon: the deliberate attempt to destroy a group of people as a group. The UN Convention on the Prevention and Punishment of the Crime of Genocide was adopted on December 9, 1948. The Convention's definition: genocide means acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group, as such. The acts include killing members; causing serious bodily or mental harm; deliberately inflicting conditions calculated to bring about physical destruction; imposing measures to prevent births; and forcibly transferring children. Gregory Stanton, founder of Genocide Watch, developed a "Ten Stages of Genocide" framework based on patterns across multiple cases. The stages include classification, symbolization, discrimination, dehumanization, organization, polarization, preparation, persecution, extermination, and denial. Recognizing the stages allows earlier intervention.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Pattern Of Genocide`,
          paragraphs: [
            `Across multiple cases, genocide rarely emerges from nowhere. Specific patterns precede the actual killing, often by years or decades. Understanding the patterns is the foundation for prevention.`,
            `The dehumanization stage. Genocidal violence has consistently been preceded by media campaigns that present the target group as less than human, dangerous, or as a problem requiring elimination. Examples include: Ottoman press portrayals of Armenians as disloyal traitors before 1915; Nazi propaganda portraying Jews as vermin, disease, parasites before and during the Holocaust; Rwandan radio (RTLM, "Radio Mille Collines") portraying Tutsi as cockroaches before and during the 1994 genocide; Serbian media portrayals of Bosnian Muslims as religious threats before the 1990s wars. The dehumanization isn't incidental to the violence; it makes the violence psychologically possible for perpetrators who otherwise wouldn't kill neighbors.`,
            `The organizational stage. Genocides require organization: lists of victims, designated perpetrators, specific weapons or methods, planned logistics. The 1915 Armenian deportations were organized by the Committee of Union and Progress, with specific transportation routes, deportation camps, and units (Special Organization) designated for killing. The 1994 Rwandan genocide was organized by the Akazu inner circle of the Hutu Power movement, with machetes pre-distributed, lists prepared, and Interahamwe militia organized in advance. The Holocaust required immense administrative apparatus documented in the Wannsee Conference minutes (1942) and extensive bureaucratic records. Recognizing organization in progress is one of the best opportunities for prevention.`,
            `The international response stage. International responses to genocides in progress have followed depressingly similar patterns. Initial reports get dismissed as exaggerated or as products of one side's propaganda. Diplomatic discussions emphasize the complexity of the situation and the difficulty of intervention. Concerns about sovereignty, regional stability, or military risk delay action. By the time international response materializes, the killing is largely complete. This pattern has been documented for the Armenian Genocide (Wilson's failure to push for intervention despite reports), the Holocaust (Allied refusal to bomb the rail lines to Auschwitz despite intelligence), the Rwandan Genocide (UN withdrawal as killing began, despite warnings from General Roméo Dallaire), the Bosnian War (years of delay before NATO intervention, with Srebrenica massacre occurring under UN "safe area" designation).`,
            `Samantha Power's "A Problem from Hell: America and the Age of Genocide" (2002) documented this pattern across 20th-century cases, showing how American policy specifically tended to recognize genocides only after they were complete and to provide rhetorical commitment to prevention without policy follow-through. Power later served in the Obama administration and the Biden administration, where her record on genocide prevention has been mixed and substantially criticized; the gap between identifying the problem and actually addressing it is itself part of the pattern.`,
            `The post-genocide stage. After mass killing, denial typically begins immediately. Perpetrating states deny that genocide occurred (Turkey on Armenia, ongoing more than a century later), deny the scale (USSR on Holodomor, China on various policies), or deny their own role while acknowledging events (some neighbors of Rwandan and Bosnian victims). Survivors face the work of rebuilding amid trauma, dispossession, and ongoing denial. Memory institutions (Yad Vashem in Israel for the Holocaust, Aegis Trust in Rwanda, the International Criminal Tribunal for the former Yugoslavia, the proposed Armenian genocide museum-institute) become sites of contested memory and slow accountability. Justice processes can take decades.`,
            `One framing before the cases. The cases ahead show different patterns at each stage. The Armenian Genocide had clear dehumanization and organization but limited international response and ongoing denial. The Rwandan Genocide had compressed timeline and clear international failure despite warnings. The Bosnian War showed slow international engagement and partially-successful accountability through the ICTY tribunal. Each case teaches something different about where prevention could have intervened.`,
          ],
          image: `/voyager-assets/history/l08-s2-pattern.webp`,
          imageCaption: `Genocide pattern: dehumanization (RTLM Rwanda, Nazi propaganda, Ottoman press on Armenians, Serbian media on Bosnians) → organization (lists, weapons, units, logistics) → international response delay (Power "A Problem from Hell" 2002) → post-genocide denial. Each stage offers prevention opportunity; recognition is the first hurdle.`,
          vocab: [
            {
              word: `across stages`,
              definition: `Genocides rarely emerge from nowhere. Stages identified by Gregory Stanton and other researchers. Dehumanization stage: media campaigns present target group as less than human (Ottoman press on Armenians pre-1915; Nazi propaganda on Jews; Rwandan RTLM "Radio Mille Collines" on Tutsi as cockroaches; Serbian media on Bosnian Muslims). Organizational stage: lists of victims, designated perpetrators, specific weapons/methods, planned logistics (1915 Committee of Union and Progress + Special Organization; 1994 Akazu inner circle of Hutu Power + Interahamwe; Holocaust Wannsee Conference 1942 + bureaucratic records). International response stage typically follows pattern: initial reports dismissed → diplomatic discussions emphasize complexity → sovereignty/stability/military risk concerns delay → action arrives after killing largely complete (Samantha Power "A Problem from Hell" 2002). Post-genocide stage: denial typically begins immediately (Turkey on Armenia ongoing 100+ years; USSR on Holodomor; etc.); survivors face rebuilding amid trauma; memory institutions become sites of contested memory; justice processes can take decades.`,
              audioPrompt: `Across multiple cases, genocide rarely emerges from nowhere, {name}. Specific patterns precede the actual killing, often by years or decades. The dehumanization stage: genocidal violence has consistently been preceded by media campaigns that present the target group as less than human. Examples include Ottoman press portrayals of Armenians as disloyal traitors before 1915; Nazi propaganda portraying Jews as vermin before and during the Holocaust; Rwandan radio, called RTLM or Radio Mille Collines, portraying Tutsi as cockroaches before and during the 1994 genocide; Serbian media portrayals of Bosnian Muslims as religious threats before the 1990s wars. The dehumanization isn't incidental to the violence; it makes the violence psychologically possible for perpetrators who otherwise wouldn't kill neighbors. The organizational stage requires lists of victims, designated perpetrators, specific weapons or methods, and planned logistics. The international response stage has followed depressingly similar patterns across cases: initial reports dismissed, diplomatic discussions emphasize complexity, action arrives after killing is largely complete. Samantha Power's "A Problem from Hell" from 2002 documented this pattern.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Memory Matters`,
          paragraphs: [
            `After genocide ends, the work of memory begins. Survivors carry stories that must be told before they're lost; institutions develop to preserve evidence and educate future generations; legal accountability proceeds slowly through national and international courts; denial continues, often institutionalized by perpetrating states. Memory work is itself politically contested because what's remembered shapes what's possible going forward.`,
            `Survivor testimony as foundation. The most important sources for understanding genocides are the testimonies of survivors: people who lived through what happened and who can describe it firsthand. Major testimony projects include: Yad Vashem's Hall of Names (over 4.8 million names of Holocaust victims documented); USC Shoah Foundation Visual History Archive (over 55,000 video testimonies from Holocaust survivors and survivors of other genocides); the Genocide Archive of Rwanda (Aegis Trust, includes over 4,000 video testimonies); the International Criminal Tribunal for the former Yugoslavia (ICTY) victim testimony in trials. Survivor testimony is irreplaceable: it captures what perpetrator records can't and what later historians can only describe from outside.`,
            `Legal accountability has been partial. The Nuremberg trials (1945-1946) established that crimes against humanity could be prosecuted; the International Criminal Tribunals for the former Yugoslavia (ICTY, established 1993) and Rwanda (ICTR, established 1994) prosecuted specific perpetrators; the International Criminal Court (ICC, established 2002) has jurisdiction for ongoing situations. Specific convictions matter: ICTY convicted dozens of Bosnian Serb commanders including Radovan Karadžić (2016, sentenced to 40 years) and Ratko Mladić (2017, life imprisonment). ICTR convicted multiple Rwandan génocidaires including former Prime Minister Jean Kambanda (life imprisonment). Many perpetrators have died without prosecution; many states refuse to extradite their nationals; the accountability gap remains substantial.`,
            `Memory institutions and their politics. The United States Holocaust Memorial Museum (USHMM) opened in 1993 with substantial federal support; Yad Vashem in Jerusalem (established 1953) is Israel's central Holocaust memorial; the Kigali Genocide Memorial in Rwanda houses survivors' testimonies and remains of approximately 250,000 victims; the Tuol Sleng Genocide Museum in Phnom Penh documents the Khmer Rouge era; the Memorial Center Srebrenica-Potočari documents the 1995 massacre. Each institution is shaped by the politics of the country housing it: which victims are centered, what counts as commemorated, what relationship is drawn between past and present.`,
            `Denial as ongoing problem. Turkey has officially denied the Armenian Genocide for over a century; the denial is enforced through Article 301 of Turkish penal code (insulting "Turkishness" is a crime). Various denial campaigns continue around the Holocaust (David Irving, various far-right groups; widely refuted but persistent), Rwanda (especially among some Hutu Power diaspora), Bosnian War (especially the Srebrenica massacre, despite ICTY conviction). Holocaust denial laws exist in approximately 16 countries (Germany, Austria, France, Belgium, Czech Republic, Israel, Liechtenstein, Lithuania, Luxembourg, Poland, Portugal, Romania, Slovakia, Slovenia, Hungary, Switzerland) reflecting how seriously denial is taken. These laws are debated (free speech tradeoffs) but reflect a societal judgment that denial of established historical mass atrocity is itself a serious harm.`,
            `One framing before the cases. Each case ahead shows different patterns of memory work and ongoing denial. The Armenian case shows what happens when the perpetrating state continues to deny across generations. The Rwandan case shows what happens when memory work begins quickly after the genocide ends and is centered in the country itself. The Bosnian case shows what happens when international tribunals contribute substantially to accountability but specific facts remain contested locally. Studying each helps build framework for engaging the political work that memory does.`,
          ],
          image: `/voyager-assets/history/l08-s3-memory.webp`,
          imageCaption: `Memory work: survivor testimony (Yad Vashem Hall of Names ~4.8M; USC Shoah Foundation 55,000+ video testimonies; Aegis Trust Genocide Archive of Rwanda 4,000+; ICTY victim testimony); legal accountability partial (Nuremberg 1945-46, ICTY 1993, ICTR 1994, ICC 2002); memory institutions (USHMM, Yad Vashem, Kigali, Tuol Sleng, Srebrenica-Potočari); denial ongoing (Turkey on Armenia 100+ years; Holocaust denial laws in ~16 countries).`,
          vocab: [
            {
              word: `its politics`,
              definition: `After genocide ends, memory work begins. Survivor testimony as foundation: Yad Vashem Hall of Names (~4.8M Holocaust victim names documented); USC Shoah Foundation Visual History Archive (55,000+ video testimonies); Aegis Trust Genocide Archive of Rwanda (4,000+ video testimonies); ICTY victim testimony. Legal accountability partial: Nuremberg trials 1945-46; ICTY (former Yugoslavia, 1993) convicted Karadžić (40 years, 2016) and Mladić (life, 2017); ICTR (Rwanda, 1994) convicted multiple including PM Kambanda (life); ICC (2002) jurisdiction for ongoing situations; many perpetrators died without prosecution. Memory institutions: USHMM (US, 1993), Yad Vashem (Israel, 1953), Kigali Genocide Memorial (Rwanda, ~250,000 victim remains), Tuol Sleng (Cambodia, Khmer Rouge), Memorial Center Srebrenica-Potočari (Bosnia). Denial ongoing: Turkey on Armenian Genocide 100+ years (enforced via Article 301 Turkish penal code); Holocaust denial laws in ~16 countries reflect societal judgment about denial as serious harm.`,
              audioPrompt: `After genocide ends, the work of memory begins, {name}. Survivors carry stories that must be told before they're lost; institutions develop to preserve evidence and educate future generations; legal accountability proceeds slowly through national and international courts; denial continues, often institutionalized by perpetrating states. Survivor testimony is foundational. Major testimony projects include Yad Vashem's Hall of Names with over 4.8 million names of Holocaust victims documented; the USC Shoah Foundation Visual History Archive with over 55,000 video testimonies from Holocaust survivors and survivors of other genocides; the Genocide Archive of Rwanda by the Aegis Trust, including over 4,000 video testimonies. Legal accountability has been partial. The Nuremberg trials established that crimes against humanity could be prosecuted. The International Criminal Tribunals for the former Yugoslavia and Rwanda prosecuted specific perpetrators. The International Criminal Court has jurisdiction for ongoing situations. ICTY convicted Bosnian Serb commanders Radovan Karadžić, sentenced to 40 years in 2016, and Ratko Mladić, life imprisonment in 2017. Denial is an ongoing problem; Turkey has officially denied the Armenian Genocide for over a century.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Specific Genocides Beyond Our Three Cases`,
          paragraphs: [
            `Before working through the three cases in depth, a brief overview of other genocides that fit the framework, so the cases ahead aren't taken as exhaustive.`,
            `The Holodomor in Ukraine (1932-1933): forced collectivization of agriculture combined with grain requisitioning and movement restrictions produced famine that killed approximately 4 million Ukrainians (some estimates higher, depending on methodology). Recognized as genocide by Ukraine, the European Parliament, and many states; debated within historical scholarship because the question of "intent to destroy the Ukrainian nation" is harder to establish than the intent to break peasant resistance through famine. Recent scholarship (Anne Applebaum "Red Famine" 2017, Timothy Snyder) supports the genocide framing for Holodomor specifically.`,
            `The Holocaust (1941-1945): approximately 6 million European Jews killed, plus approximately 5 million others (Roma/Sinti in the Porajmos, disabled people in the T4 program, Soviet POWs, Polish civilians, gay men, Jehovah's Witnesses, political prisoners). Handled in depth as L09 (next lesson).`,
            `The Cambodian Genocide under the Khmer Rouge (1975-1979): approximately 1.5-2 million deaths, roughly a quarter of Cambodia's population, through executions, forced labor, starvation, and disease. Targeted "intellectuals" (defined broadly, including anyone with eyeglasses or speaking foreign languages), urban populations, ethnic Vietnamese and Cham Muslims, and others. Documented through the Extraordinary Chambers in the Courts of Cambodia (ECCC, 2003-2022) trials.`,
            `The Darfur genocide (2003+): conflict in western Sudan between the government-backed Janjaweed militia and non-Arab ethnic groups (Fur, Masalit, Zaghawa) killed an estimated 300,000+ people and displaced over 2.5 million. Formally classified as genocide by the United States in 2004; ICC issued arrest warrants against Sudanese President Omar al-Bashir in 2009 and 2010 (still outstanding as of recent reporting). Ongoing violence continues to displace populations.`,
            `The Rohingya genocide (2017+): the Myanmar military's "clearance operations" against Rohingya Muslims in Rakhine State killed an estimated 9,000-10,000 Rohingya and displaced approximately 745,000 to neighboring Bangladesh in 2017 alone; subsequent military actions and conditions have continued. The Independent International Fact-Finding Mission on Myanmar (UN, 2018) concluded the violence had "genocidal intent"; the case is currently before the International Court of Justice (ICJ).`,
            `The Uyghur situation in Xinjiang (2014+): Chinese government policies in Xinjiang including mass detention (estimated 1-2 million Uyghurs detained in "re-education camps" at peak), forced labor, restrictions on religion, suppression of language and culture, and reported forced sterilizations have been designated as genocide by the United States (2021), the United Kingdom, Canada, the Netherlands, and other states. China denies the characterization and has refused independent investigation. The legal classification is contested; what's documented is substantial.`,
            `Each of these would warrant its own deep study. Our three cases ahead (Armenian, Rwandan, Bosnian) were chosen because they show different temporal patterns (early 20th century, late 20th century, end of 20th century), different international response patterns, different denial patterns, and different memory work. They're representative rather than exhaustive.`,
          ],
          image: `/voyager-assets/history/l08-s4-beyond.webp`,
          imageCaption: `Genocides beyond our three cases: Holodomor (Ukraine 1932-1933, ~4M deaths, Applebaum 2017); Holocaust (1941-1945, ~6M Jews + ~5M others, handled L09); Cambodian Khmer Rouge (1975-1979, ~1.5-2M, ~1/4 population); Darfur (2003+, ~300,000+ deaths); Rohingya (2017+, ~9-10K killed + ~745K displaced); Uyghur situation in Xinjiang (2014+, designated genocide by US/UK/Canada/Netherlands). Each warrants own deep study.`,
          vocab: [
            {
              word: `three cases`,
              definition: `Other genocides fitting the framework, not exhaustive. Holodomor Ukraine 1932-1933 (~4M deaths from forced collectivization + grain requisitioning + movement restrictions; recognized by Ukraine, European Parliament, many states; Anne Applebaum "Red Famine" 2017). Holocaust 1941-1945 (~6M European Jews + ~5M others: Roma/Sinti Porajmos, T4 disabled people, Soviet POWs, Polish civilians, gay men, Jehovah's Witnesses, political prisoners; L09 in depth). Cambodian Khmer Rouge 1975-1979 (~1.5-2M, ~1/4 of population; Extraordinary Chambers in the Courts of Cambodia 2003-2022). Darfur 2003+ (~300,000+ deaths, 2.5M+ displaced; US classified as genocide 2004; ICC warrants against al-Bashir 2009/2010 still outstanding). Rohingya 2017+ (~9-10K killed + ~745K displaced in 2017 alone; UN Fact-Finding Mission 2018 concluded "genocidal intent"; ICJ case ongoing). Uyghur in Xinjiang 2014+ (mass detention 1-2M peak in "re-education camps"; designated genocide by US 2021 + UK + Canada + Netherlands; China denies, refuses independent investigation).`,
              audioPrompt: `Before working through our three cases, a brief overview of other genocides that fit the framework, {name}. The Holodomor in Ukraine from 1932 to 1933: forced collectivization combined with grain requisitioning produced famine that killed approximately 4 million Ukrainians. Recognized as genocide by Ukraine, the European Parliament, and many states. The Holocaust from 1941 to 1945: approximately 6 million European Jews killed, plus approximately 5 million others including Roma and Sinti in the Porajmos, disabled people in the T4 program, Soviet POWs, Polish civilians, gay men, Jehovah's Witnesses, and political prisoners; handled in depth in the next lesson. The Cambodian Genocide under the Khmer Rouge from 1975 to 1979: approximately 1.5 to 2 million deaths, roughly a quarter of Cambodia's population. The Darfur genocide from 2003 onward: estimated 300,000+ deaths and over 2.5 million displaced; formally classified as genocide by the United States in 2004. The Rohingya genocide from 2017 onward: an estimated 9,000 to 10,000 Rohingya killed and approximately 745,000 displaced to Bangladesh in 2017 alone. The Uyghur situation in Xinjiang from 2014 onward has been designated as genocide by the United States, United Kingdom, Canada, the Netherlands, and others.`,
            },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Resources Before The Cases`,
          paragraphs: [
            `Three cases ahead engage specific genocides in depth: the Armenian Genocide (1915-1923), the Rwandan Genocide (1994), the Bosnian War and Srebrenica (1992-1995). This content has weight; if you have family connection to any of these histories, or if engaging genocide content feels heavy in ways you weren't expecting, that's appropriate to the material.`,
            `Resources if you need to talk to someone. For Holocaust-specific support: USC Shoah Foundation IWitness program; United States Holocaust Memorial Museum; local Jewish Federation; local Holocaust education center. For Armenian Genocide-specific support: Armenian Genocide Museum-Institute; Armenian National Institute; local Armenian American community organizations. For Rwandan-specific support: Aegis Trust; survivors' organization Ibuka. For Bosnian and former-Yugoslav-specific support: Memorial Center Srebrenica-Potočari; Mothers of Srebrenica; local Bosnian community organizations. For general crisis support if engaging this content surfaces difficult feelings: 988 Suicide and Crisis Lifeline (call or text 988 in the US); Crisis Text Line (text HOME to 741741); your school counselor; trusted adult.`,
            `One framing as we move to the cases. Each case is presented as a Case Study with options to engage. The options aren't multiple-choice quiz questions where one is "right" and others are "wrong"; they're different interpretive framings of what mattered in each case. The outcomes section explains what the historical scholarship supports while engaging the genuine ambiguity in interpretations.`,
            `Another framing. Studying genocides is not a passive academic exercise. The reason these case studies exist in your curriculum is that genocide recognition and prevention requires citizens who can identify the patterns. Each generation faces the question: what could prevention have looked like, and what does prevention look like now? Building framework at 12 gives you years to develop deeper understanding before you'll be in positions where your political engagement and your vote could matter for prevention.`,
            `One last framing. The cases ahead are presented at the level appropriate to your age and to the genuine seriousness of the material. They don't shy from the scale or the horror; they also don't pile on gratuitous detail. The goal is framework and respect, not shock. If engaging the material at this level still feels too heavy for any reason, pause and return when you can engage seriously. The content will still be here.`,
          ],
          image: `/voyager-assets/history/l08-s5-resources.webp`,
          imageCaption: `Resources before cases: USHMM, USC Shoah Foundation, Yad Vashem, Armenian Genocide Museum-Institute, Aegis Trust + Ibuka (Rwanda), Memorial Center Srebrenica-Potočari + Mothers of Srebrenica. Crisis support: 988 Suicide and Crisis Lifeline; Crisis Text Line (text HOME to 741741); school counselor; trusted adult.`,
          vocab: [
            {
              word: `before cases`,
              definition: `Three cases ahead engage Armenian Genocide (1915-1923), Rwandan Genocide (1994), Bosnian War + Srebrenica (1992-1995). Content has weight; family connection or heavy feelings appropriate to material. Specific resources: Holocaust support (USC Shoah Foundation IWitness, USHMM, local Jewish Federation, Holocaust education centers); Armenian support (Armenian Genocide Museum-Institute, Armenian National Institute, local Armenian American organizations); Rwandan support (Aegis Trust, Ibuka survivors organization); Bosnian/Yugoslav support (Memorial Center Srebrenica-Potočari, Mothers of Srebrenica, local Bosnian community organizations). General crisis support: 988 Suicide and Crisis Lifeline (call/text 988 in US); Crisis Text Line (text HOME to 741741); school counselor; trusted adult. Cases not multiple-choice with right answers; different interpretive framings of what mattered; outcomes explain what scholarship supports while engaging genuine ambiguity.`,
              audioPrompt: `Three cases ahead engage specific genocides in depth, {name}: the Armenian Genocide from 1915 to 1923, the Rwandan Genocide of 1994, and the Bosnian War and Srebrenica from 1992 to 1995. This content has weight. If you have family connection to any of these histories, or if engaging genocide content feels heavy in ways you weren't expecting, that's appropriate to the material. Resources if you need to talk to someone. For Holocaust-specific support: USC Shoah Foundation IWitness program; United States Holocaust Memorial Museum; local Jewish Federation; local Holocaust education center. For Armenian Genocide-specific support: Armenian Genocide Museum-Institute; Armenian National Institute. For Rwandan-specific support: Aegis Trust; survivors organization Ibuka. For Bosnian-specific support: Memorial Center Srebrenica-Potočari; Mothers of Srebrenica. For general crisis support if engaging this content surfaces difficult feelings: 988 Suicide and Crisis Lifeline. You can call or text 988 in the US. Crisis Text Line: text HOME to 741741. Your school counselor. A trusted adult.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l08-case-study`,
          type: `case-study`,
          headline: `Three Genocides: Patterns, Prevention, Memory`,
          intro: `{name}, three cases. For each, engage the different framings of what mattered and what could have changed. The outcomes explain what scholarship supports while acknowledging genuine ambiguity.`,
          cases: [
            {
              id: `armenian`,
              title: `The Armenian Genocide (1915-1923)`,
              context: `The Ottoman Empire entered WWI on the side of Germany in November 1914. The Committee of Union and Progress (CUP), the ruling Young Turk faction including Talaat Pasha, Enver Pasha, and Djemal Pasha, identified the Armenian Christian minority (approximately 2 million people across the empire) as a security threat and as the obstacle to a more ethnically Turkish state. Starting in April 1915 (the night of April 24, 1915, Armenian Genocide commemoration day, saw the arrest and execution of approximately 250 Armenian intellectuals, religious leaders, and notables in Constantinople), the Ottoman government carried out a coordinated campaign of deportation and killing. Methods included death marches through Syrian and Mesopotamian desert without food or water; massacres by Special Organization units and local militias; concentration of survivors in camps where starvation and disease killed thousands; deliberate withholding of supplies. By 1923, approximately 1.5 million Armenians had been killed (estimates range from 1 to 1.5 million; the lower estimate is rare and contested). The Armenian population of Anatolia, which had existed continuously for over 2,500 years, was reduced to a small remnant. Despite extensive reporting (Henry Morgenthau, US Ambassador to the Ottoman Empire, sent detailed cables to Washington starting in 1915; British, French, and German diplomats reported similarly) and post-war Allied attempts at accountability (the 1919-1920 Constantinople military tribunals condemned several CUP leaders, though they had already fled and were sentenced in absentia), no genocide convention existed at the time and post-war geopolitical priorities (Treaty of Lausanne 1923 restored Turkish sovereignty without accountability) meant accountability never materialized. Turkey has denied the genocide officially for over a century; Article 301 of Turkish penal code makes "insulting Turkishness" (including acknowledging the genocide) a crime. The genocide has been recognized by approximately 34 countries including France, Germany, Canada, the Netherlands, and as of 2021 the United States (President Biden's official recognition; previously US recognition had been politically constrained by NATO alliance considerations).`,
              question: `What's the most important framing for understanding the Armenian Genocide?`,
              options: [
                {
                  id: `armenian-wartime`,
                  label: `Wartime exigency: WWI conditions and Ottoman security concerns about Armenian collaboration with Russia explain (though don't justify) the policy.`,
                  outcome: `This is closest to the position long held by Turkish official historiography, though serious historians outside Turkey generally reject it. The argument: Ottoman authorities faced real Armenian Russophile movements and uprisings; wartime conditions justified harsh security measures. Problems with this framing: the scale of killing (1.5 million from a population of 2 million) far exceeds anything plausibly justified by security concerns; the targeting included Armenians in regions remote from the Russian front; women, children, and elderly were killed alongside potentially-combatant men; the geographic pattern shows systematic intent to remove Armenians from Anatolia rather than to neutralize specific military threats; documentary evidence (Talaat Pasha's instructions, cable traffic recovered by Ottoman tribunals in 1919) shows organized intent to destroy the Armenian population. Mainstream genocide historians (Taner Akçam, Donald Bloxham, Hilmar Kaiser, Peter Balakian, Ronald Suny) substantially reject the wartime exigency framing as adequate.`,
                  insight: `The "wartime exigency" framing has been the official Turkish position but is rejected by mainstream genocide scholarship. The scale, targeting, and documentation show systematic intent that wartime explanation can't accommodate.`,
                },
                {
                  id: `armenian-genocide`,
                  label: `Genocide per UN Convention: intent to destroy the Armenian people as such; systematic organization; foundational case for genocide as legal category.`,
                  outcome: `This is the mainstream scholarly view and the basis for international recognition (34+ countries including US since 2021). Evidence includes: documentary record of orders from CUP leadership; geographic pattern of deportations across the empire; killing of Armenians remote from any military threat; the establishment of the term "genocide" by Lemkin partly in response to Armenian case (Lemkin explicitly cited the Armenian Genocide in developing his framework); 1919-1920 Constantinople military tribunals condemned CUP leaders; post-war ARA (American Relief Administration) documented systematic policy; recent scholarship (Akçam "The Young Turks' Crime against Humanity" 2012, Suny "They Can Live in the Desert but Nowhere Else" 2015) has built comprehensive case from Ottoman archives. The legal framework didn't exist at the time but the conduct fits the framework as later developed.`,
                  insight: `The genocide framing fits the scholarly evidence. The case is foundational for the development of genocide as a legal and conceptual category.`,
                },
                {
                  id: `armenian-international`,
                  label: `Failure of international response: the conditions under which the international system can fail to prevent genocide were established here; same pattern continues.`,
                  outcome: `Substantially correct, though the framing emphasizes the international dimension over the domestic. Evidence includes: extensive contemporary reporting (Henry Morgenthau's cables, British and German diplomatic reports); the post-war Constantinople military tribunals that were undermined by geopolitical priorities; the 1923 Treaty of Lausanne that restored Turkish sovereignty without accountability; the explicit citation of the Armenian case in Lemkin's development of genocide concept ("Who, after all, speaks today of the annihilation of the Armenians?" attributed to Hitler in pre-WWII speeches, suggesting how impunity in 1915-1923 contributed to feasibility-perception of later genocide). The same pattern of international failure has continued: Rwanda 1994, Bosnia 1992-1995, Darfur 2003+, Rohingya 2017+, Xinjiang 2014+. Each shows international response that's late, inadequate, or absent.`,
                  insight: `The international-failure framing captures the structural pattern. Armenian recognition came 100+ years late; the same pattern repeats. Recognizing the pattern is foundation for prevention.`,
                },
              ],
              correctOptions: [`armenian-genocide`, `armenian-international`],
              synthesis: `The Armenian Genocide is the foundational 20th-century case: documented systematic intent to destroy the Armenian population, scale of approximately 1.5 million deaths, foundational role in Lemkin's development of the genocide concept and the UN Convention, and 100+ years of Turkish denial that continues. The international-failure dimension is essential: the post-war international order didn't operationalize accountability; Lausanne 1923 restored Turkish sovereignty without consequences; the pattern of late or absent international response has continued through subsequent genocides. Recognition has come slowly: 34+ countries including US (Biden 2021) now formally recognize it. Mainstream scholarship (Akçam, Bloxham, Suny, Balakian) substantially rejects the wartime-exigency framing as adequate.`,
            },
            {
              id: `rwandan`,
              title: `The Rwandan Genocide (1994)`,
              context: `Rwanda's ethnic categories (Hutu majority ~85%, Tutsi minority ~14%, Twa ~1%) were given rigid administrative form by Belgian colonization (Belgium ran Rwanda 1916-1962); identity cards specifying ethnicity were issued starting in the 1930s; resentment between groups was structured by colonial administration favoring Tutsi until late colonial period, then Hutu after independence. Post-independence Rwanda saw multiple cycles of violence: massacres of Tutsi in 1959, 1963, 1973 produced refugee populations in Uganda. The Rwandan Patriotic Front (RPF, a Tutsi-led organization) invaded from Uganda in 1990; civil war followed; the Arusha Accords (1993) ended the war and proposed power-sharing. The Habyarimana regime, with Akazu inner circle representing Hutu Power extremists, prepared for genocide: lists of "enemies" compiled; machetes imported in large quantities; Interahamwe militia trained; Radio Television Libre des Mille Collines (RTLM) broadcast genocidal propaganda calling Tutsi "inyenzi" (cockroaches). On April 6, 1994, President Habyarimana's plane was shot down (the perpetrator remains disputed); within hours, the genocide began. Over approximately 100 days (April 6 to mid-July 1994), approximately 800,000 to 1 million Tutsi and moderate Hutu were killed. Methods included machete killings, gun executions, mass killings at churches and schools where victims sought refuge, organized rape as weapon of war (estimated 250,000-500,000 rapes). UN peacekeeping force (UNAMIR) under General Roméo Dallaire had warned of preparation for genocide in January 1994 (Dallaire's "genocide fax"); the UN Security Council voted to reduce UNAMIR's strength rather than reinforce it. The genocide ended when the RPF military victory drove Hutu Power forces from the country (along with approximately 2 million Hutu civilians who fled into eastern Zaire/DRC, contributing to subsequent regional conflicts). Post-genocide accountability: the International Criminal Tribunal for Rwanda (ICTR, Arusha, 1994-2015) convicted approximately 60 individuals including former Prime Minister Jean Kambanda; gacaca community courts (2001-2012) processed approximately 1.2 million local cases.`,
              question: `What's the most important framing for understanding the Rwandan Genocide?`,
              options: [
                {
                  id: `rwandan-ancient`,
                  label: `Ancient ethnic hatred: deep tribal divisions between Hutu and Tutsi finally erupted in mass violence.`,
                  outcome: `This framing was widely used in 1990s journalism (Robert Kaplan-style "ancient hatreds") and remains in popular discourse but is substantially rejected by serious scholars of Rwanda. The Hutu/Tutsi distinction has complex history: pre-colonial Rwanda had economic and social rather than ethnic categories; Belgian colonization (1916-1962) administratively rigidified the distinction, issued ethnic identity cards, and structured colonial favor (Tutsi favored early, Hutu favored late colonial period). The post-independence cycles of violence (1959, 1963, 1973) had specific political and economic causes, not ancient origins. The 1994 genocide was planned, organized, and executed by specific political actors (Akazu, Hutu Power) over months and years; "ancient hatred" obscures the political agency.`,
                  insight: `"Ancient hatreds" framing was widely deployed in 1990s but rejected by serious scholarship. The genocide was specifically planned and politically organized; framing it as ancient tribal eruption obscures responsibility.`,
                },
                {
                  id: `rwandan-organization`,
                  label: `Specific political organization: the Akazu and Hutu Power systematically prepared for genocide over months; Stanton's stages 5-7 (organization, polarization, preparation) were visible in advance.`,
                  outcome: `This is the mainstream scholarly framing and the documented record. Evidence includes: importation of approximately 500,000 machetes in 1993; preparation of victim lists with addresses; training of Interahamwe militia; RTLM hate-radio broadcasts dehumanizing Tutsi; Hutu Ten Commandments published in Kangura newspaper in 1990 calling for Tutsi exclusion; Akazu strategic planning documents recovered post-genocide. General Dallaire's January 1994 "genocide fax" to UN headquarters specifically reported these preparations and requested authorization to prevent (denied). The killing began within hours of Habyarimana's plane being shot down because the organization had already been prepared.`,
                  insight: `The genocide was organized, planned, and prepared in observable ways. Stanton's framework would have predicted it. The "early warning" was unambiguous; the failure was at the international response level.`,
                },
                {
                  id: `rwandan-international`,
                  label: `International failure: UN peacekeeping force (UNAMIR) on the ground; Dallaire warned in January 1994; UN reduced force as genocide began; could have been prevented.`,
                  outcome: `Substantially correct and documented. General Roméo Dallaire's January 11, 1994 "genocide fax" to UN headquarters reported specific preparations (machete caches, militia training, victim lists) and requested authorization to seize weapons; authorization was denied. When the killing began on April 6-7, 1994, the UN Security Council voted on April 21 to reduce UNAMIR's force from approximately 2,500 to 270 personnel rather than reinforce. Belgium withdrew its troops after 10 Belgian peacekeepers were killed. The US, traumatized by Somalia (1993), specifically used diplomatic language to avoid the word "genocide" because using it would have triggered Convention obligations. Subsequent admissions: President Clinton's 1998 apology in Kigali; UN Secretary-General Kofi Annan's later acknowledgment of UN failure; Dallaire's own account in "Shake Hands with the Devil" (2003). Scholarly consensus: international intervention even with modest force was possible and could have substantially reduced deaths.`,
                  insight: `The international-failure framing is documented and acknowledged including by international institutions and political leaders. Prevention was possible; specific decisions made it not happen.`,
                },
              ],
              correctOptions: [`rwandan-organization`, `rwandan-international`],
              synthesis: `The Rwandan Genocide combines clear preparatory organization (Akazu and Hutu Power, with documented planning over months) and explicit international failure (Dallaire's January 1994 warning, UN force reduction as genocide began, US diplomatic avoidance of the word "genocide" to escape Convention obligations). The "ancient hatreds" framing widely deployed in 1990s journalism is rejected by serious scholarship as obscuring specific political agency. Post-genocide accountability has been substantial (ICTR, gacaca courts processed 1.2M cases) though imperfect. Memory work (Kigali Genocide Memorial with ~250,000 victim remains; Aegis Trust testimony archives) is centered in Rwanda. The case is essential for understanding what genocide prevention requires: recognition (the warning signs were unambiguous), capacity (UN forces were present), and will (which was specifically absent).`,
            },
            {
              id: `bosnian`,
              title: `The Bosnian War and Srebrenica (1992-1995)`,
              context: `The breakup of Yugoslavia after Tito's death (1980) and the end of the Cold War produced wars across the former federal state. Bosnia-Herzegovina, with its mixed Bosniak Muslim (~44%), Serb Orthodox (~31%), and Croat Catholic (~17%) population, declared independence in 1992; the Bosnian Serb Republic (Republika Srpska) under Radovan Karadžić, backed by Serbia under Slobodan Milošević, opposed the move violently. The war (1992-1995) produced approximately 100,000 deaths, approximately 2.2 million displaced people, and systematic "ethnic cleansing": a euphemism that masked what scholars now broadly classify as genocide directed primarily against Bosniaks. Specific patterns included: siege of Sarajevo (1992-1996, longest siege of a capital city in modern history, approximately 11,000 deaths from shelling and snipers); systematic rape as weapon of war (estimated 20,000-50,000 Bosniak women raped, with documented organized rape camps); concentration camps including Omarska, Trnopolje, Keraterm exposed by ITN journalists in 1992; mass killings throughout the war. The Srebrenica massacre (July 11-13, 1995): Bosnian Serb forces under Ratko Mladić captured the UN-designated "safe area" of Srebrenica; over 8,372 Bosniak men and boys were systematically separated from women and killed in three days; bodies were buried in mass graves and then re-buried to hide evidence. International response across the war: arms embargo imposed on all parties (1991, with disproportionate impact on under-armed Bosnia); humanitarian airlift began but military intervention delayed for years; NATO airstrikes finally substantial in 1995 (Operation Deliberate Force); Dayton Accords (November 1995) ended the war and produced the current Bosnia-Herzegovina structure with two entities (Republika Srpska and the Federation of Bosnia and Herzegovina) and weak central state. Post-war accountability: International Criminal Tribunal for the former Yugoslavia (ICTY, The Hague, 1993-2017) indicted 161 individuals, convicted 90 including Radovan Karadžić (40 years, 2016) and Ratko Mladić (life, 2017); the Srebrenica massacre was officially declared genocide by the ICTY (2001 in Krstić case) and the International Court of Justice (2007). Denial persists in Republika Srpska and Serbia: Milorad Dodik (Republika Srpska leader) has repeatedly denied the Srebrenica genocide despite ICTY conviction; a 2020 UN-backed report attempting to address denial faced political resistance.`,
              question: `What's the most important framing for understanding the Bosnian War and Srebrenica?`,
              options: [
                {
                  id: `bosnian-civil-war`,
                  label: `Yugoslav civil war: ethnic groups with deep historical grievances fought as Yugoslavia broke up; tragic but no clear genocide.`,
                  outcome: `This framing is rejected by international tribunals and mainstream scholarship. The ICTY (2001 Krstić judgment) and International Court of Justice (2007) have both formally classified the Srebrenica massacre specifically as genocide; broader patterns of organized "ethnic cleansing" through systematic rape, concentration camps, deportation, and killing of Bosniaks fit the genocide framework even where not formally adjudicated. The "civil war" framing was used by Serbia, Republika Srpska, and some Western governments early in the war as justification for non-intervention but is no longer mainstream. Recent scholarship (Florence Hartmann, Peter Maass, Roy Gutman) substantially documents the organized rather than civil-war character of the killing.`,
                  insight: `The "civil war" framing was used to justify non-intervention but is rejected by international tribunals and mainstream scholarship. The Srebrenica massacre specifically and broader patterns fit the genocide framework.`,
                },
                {
                  id: `bosnian-international`,
                  label: `International failure with eventual response: arms embargo disadvantaged Bosnia; UN "safe areas" inadequate to defend; eventually NATO intervention ended the war.`,
                  outcome: `Substantially correct and documented. The arms embargo (1991) was imposed on all parties but disproportionately impacted Bosnia, which was outgunned by Serbia's inherited Yugoslav army equipment. UN-designated "safe areas" including Srebrenica were defended by inadequate UN peacekeeping presence (Dutch UN troops at Srebrenica were outnumbered by Serb forces, lacked authorization for serious resistance, and pulled back as Serb forces entered, with subsequent investigations finding their conduct insufficient). NATO airstrikes in 1995 (Operation Deliberate Force, August-September) combined with Croatian and Bosnian ground offensives produced the conditions for the Dayton Accords. The international response was eventually sufficient to end the war but came too late to prevent Srebrenica and much else; Samantha Power's "A Problem from Hell" specifically documents the US policy debates that delayed intervention.`,
                  insight: `International response was eventually sufficient to end the war but came years too late to prevent worst killings. The pattern matches Rwanda one year earlier: warning signs, inadequate response, intervention after the worst killing is done.`,
                },
                {
                  id: `bosnian-accountability`,
                  label: `Eventually-significant accountability: ICTY 161 indictments, 90 convictions including Karadžić and Mladić; first explicit genocide conviction since Nuremberg; partial model for international justice.`,
                  outcome: `Substantially correct and important. The International Criminal Tribunal for the former Yugoslavia (ICTY, 1993-2017) indicted 161 individuals and convicted 90, including Bosnian Serb political and military leadership at the highest levels. Radovan Karadžić convicted 2016 (40 years); Ratko Mladić convicted 2017 (life imprisonment); the Srebrenica massacre formally classified as genocide by ICTY (2001 Krstić judgment) and confirmed by the International Court of Justice (2007). This was the first explicit genocide conviction since Nuremberg (decades earlier). The ICTY model influenced the International Criminal Court (ICC) established 2002. Significant failures remain: many perpetrators died before trial; denial persists in Republika Srpska and Serbia (Milorad Dodik repeatedly denying Srebrenica genocide); reconciliation has been partial.`,
                  insight: `Bosnian case produced the most substantial international accountability of any recent genocide; ICTY model influenced ICC. But denial persists and reconciliation has been partial.`,
                },
              ],
              correctOptions: [`bosnian-international`, `bosnian-accountability`],
              synthesis: `The Bosnian War and Srebrenica show several patterns clearly: the "civil war" framing used to justify non-intervention is rejected by international tribunals and current scholarship; international response was eventually sufficient to end the war but came years too late (Srebrenica massacre July 1995 occurred under UN "safe area" designation); accountability was eventually substantial (ICTY 161 indictments, 90 convictions, first explicit genocide conviction since Nuremberg, formal Srebrenica genocide classification by ICTY 2001 and ICJ 2007). The pattern of accountability is the strongest of any recent genocide case but denial persists (especially in Republika Srpska, where Milorad Dodik has repeatedly denied Srebrenica). The case is essential for understanding both what international accountability can achieve and what remains beyond its reach.`,
            },
          ],
          reflectionPrompt: `Across the three cases: which prevention failure pattern repeats most clearly? Which case offers the most useful model for what better response could look like? What does the recurring pattern of late international response tell you about the structural barriers to prevention?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Who coined the term "genocide" and when?`,
              options: [
                `Random`,
                `Raphael Lemkin (1900-1959), Polish-Jewish lawyer who lost most of his family in the Holocaust, in his 1944 book "Axis Rule in Occupied Europe." Combined Greek "genos" (race, tribe) with Latin "-cide" (killing). Lemkin campaigned for international recognition of genocide as a distinct crime. UN Convention on the Prevention and Punishment of the Crime of Genocide adopted December 9, 1948.`,
                `Just UN`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Lemkin's personal connection to Holocaust losses and his persistent campaigning produced both the term and the eventual Convention. Naming the phenomenon was a prerequisite for international legal response.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the UN Convention definition of genocide?`,
              options: [
                `Just killing`,
                `Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group, as such: (a) killing members; (b) causing serious bodily or mental harm; (c) deliberately inflicting conditions of life calculated to bring about physical destruction; (d) imposing measures intended to prevent births; (e) forcibly transferring children of the group to another group. Note: "intent to destroy" required; "in whole or in part" matters; political/social groups excluded under Soviet pressure during negotiations.`,
                `Random`,
                `Just war crimes`,
              ],
              correctIndex: 1,
              explanation: `The legal definition is precise. "Intent to destroy" is required (distinguishing from collateral civilian deaths in war), "in whole or in part" matters (total destruction not required), and the limited protected categories (national, ethnical, racial, religious; excluding political and social) reflect specific negotiating history.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are Stanton's ten stages of genocide?`,
              options: [
                `Random`,
                `(1) classification (us-vs-them categories); (2) symbolization (distinguishing markers, names, dress); (3) discrimination (laws, denial of rights); (4) dehumanization (target group as less than human, often through media); (5) organization (specific armed groups, plans, lists); (6) polarization (extremists silencing moderates); (7) preparation (mobilization for killing); (8) persecution (concentration, deportation, killing begins); (9) extermination (organized mass killing); (10) denial (afterward, perpetrators and successors deny genocide). Developed by Gregory Stanton, founder of Genocide Watch. Recognizing the stages allows earlier intervention.`,
                `Just war`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Stanton's framework is widely used in genocide prevention work. Each stage offers an intervention opportunity; recognizing the pattern in progress is foundation for prevention.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What was the Armenian Genocide and how is it characterized today?`,
              options: [
                `Random`,
                `Ottoman Empire (Committee of Union and Progress: Talaat Pasha, Enver Pasha, Djemal Pasha) carried out systematic destruction of Armenian Christian minority 1915-1923; approximately 1.5 million killed through deportation, death marches, massacres by Special Organization, starvation in camps. April 24, 1915 (commemoration day) saw arrest/execution of ~250 Armenian intellectuals in Constantinople. Documented by US Ambassador Henry Morgenthau in detailed cables; foundational case for Lemkin's development of genocide concept ("Who, after all, speaks today of the annihilation of the Armenians?" attributed to Hitler). Turkey denies for 100+ years (Article 301 Turkish penal code criminalizes acknowledgment). Recognized as genocide by 34+ countries including US (Biden 2021).`,
                `Just war`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Armenian Genocide is the foundational 20th-century case and central to the development of genocide as a legal and conceptual category. Turkish denial across 100+ years exemplifies the post-genocide denial stage.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What happened in the Rwandan Genocide and what was the international failure?`,
              options: [
                `Random`,
                `Approximately 800,000-1 million Tutsi and moderate Hutu killed in approximately 100 days (April 6 to mid-July 1994). Organized by Akazu inner circle of Hutu Power; preparation included ~500,000 imported machetes, Interahamwe militia training, RTLM "Radio Mille Collines" propaganda calling Tutsi "inyenzi" (cockroaches), Hutu Ten Commandments published in Kangura. General Roméo Dallaire's UN peacekeeping force on the ground; January 1994 "genocide fax" reported preparations; UN denied authorization to seize weapons. As killing began UN Security Council reduced UNAMIR from ~2,500 to 270; US specifically avoided word "genocide" to escape Convention obligations. Clinton apologized in Kigali 1998; Annan acknowledged UN failure. ICTR convicted ~60 individuals; gacaca courts processed 1.2M local cases.`,
                `Just tribal`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Rwandan case is the clearest example of preventable genocide in recent history: the warning signs were unambiguous, UN forces were present, intervention was possible. Specific decisions made it not happen. Subsequent apologies (Clinton, Annan) acknowledge the failure.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What happened at Srebrenica and what's its legal status?`,
              options: [
                `Random`,
                `Srebrenica massacre July 11-13, 1995: Bosnian Serb forces under Ratko Mladić captured the UN-designated "safe area" of Srebrenica; over 8,372 Bosniak men and boys systematically separated from women and killed in three days; bodies buried in mass graves then re-buried to hide evidence. The International Criminal Tribunal for the former Yugoslavia (ICTY) formally classified the massacre as genocide in 2001 (Krstić case); International Court of Justice confirmed 2007. First explicit genocide conviction since Nuremberg. Karadžić convicted by ICTY 2016 (40 years); Mladić convicted 2017 (life imprisonment). Denial persists in Republika Srpska and Serbia (Milorad Dodik repeatedly).`,
                `Just battle`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Srebrenica is the most legally adjudicated genocide of the recent period: formal ICTY classification (2001), ICJ confirmation (2007), convictions of political and military leadership. The legal accountability has been substantial; the denial that persists shows what accountability alone cannot accomplish.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the recurring pattern of international response to genocides?`,
              options: [
                `Quick action`,
                `Initial reports dismissed as exaggerated or as one side's propaganda; diplomatic discussions emphasize complexity and difficulty of intervention; concerns about sovereignty, regional stability, or military risk delay action; action arrives after killing largely complete. Documented across Armenian Genocide (Wilson's failure despite Morgenthau reports), Holocaust (Allied refusal to bomb Auschwitz rail lines despite intelligence), Rwandan Genocide (UN force reduction as killing began despite Dallaire's January 1994 warning), Bosnian War (years of delay before NATO intervention, Srebrenica under UN "safe area" designation), Darfur, Rohingya, Xinjiang. Samantha Power "A Problem from Hell" 2002 documents this pattern.`,
                `Random`,
                `Just peace`,
              ],
              correctIndex: 1,
              explanation: `The recurring pattern is one of the most important things to recognize. Power's documentation of how American policy specifically tended to recognize genocides only after they were complete is one of the foundational works in genocide studies; the pattern continues despite the documentation.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What are the main memory institutions and their politics?`,
              options: [
                `Random`,
                `USHMM (US, 1993) federal support, Yad Vashem (Israel, 1953) Hall of Names 4.8M+ documented; USC Shoah Foundation Visual History Archive (55,000+ video testimonies); Kigali Genocide Memorial (Rwanda, ~250,000 victim remains); Tuol Sleng (Cambodia, Khmer Rouge); Memorial Center Srebrenica-Potočari (Bosnia); Aegis Trust Genocide Archive of Rwanda. Each institution shaped by politics of country housing it: which victims centered, what counts as commemorated, what relationship drawn between past and present. Memory work is politically contested; what's remembered shapes what's possible going forward.`,
                `Just museums`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Memory institutions aren't neutral; they're political projects with specific aims and selections. Recognizing this isn't dismissive; it's accurate. Memory work is part of what makes prevention possible; politically contested memory is part of what makes it hard.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The "ancient hatreds" framing of the Rwandan Genocide is the mainstream scholarly explanation.`,
              correctAnswer: false,
              explanation: `False. The "ancient hatreds" framing was widely used in 1990s journalism (Robert Kaplan-style) and remains in popular discourse but is substantially rejected by serious scholars of Rwanda. The Hutu/Tutsi distinction was administratively rigidified by Belgian colonization (1916-1962), which issued ethnic identity cards and structured colonial favor. Pre-colonial Rwanda had economic and social rather than rigidly ethnic categories. Post-independence cycles of violence (1959, 1963, 1973) had specific political and economic causes. The 1994 genocide was planned, organized, and executed by specific political actors (Akazu, Hutu Power) over months and years; "ancient hatred" framing obscures the political agency and accountability. Mainstream scholarship (Mahmood Mamdani, Gérard Prunier, Linda Melvern, Philip Gourevitch) substantially rejects the "ancient hatreds" framing.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Look, genocide is terrible but it's just human nature, since these conflicts have happened throughout history and we can't really stop them." Based on this lesson, what should you point out?`,
              options: [
                `"Just human nature"`,
                `"Several specific things. First, the framing of genocide as 'just human nature' is doing a lot of work that the evidence doesn't support. Genocides are not random eruptions; they follow recognizable patterns (Stanton's ten stages: classification, symbolization, discrimination, dehumanization, organization, polarization, preparation, persecution, extermination, denial). The patterns develop over time; they're observable in advance; specific political actors plan and execute them. The Rwandan Genocide was prepared over years (machete imports of approximately 500,000 in 1993, Interahamwe militia training, RTLM hate-radio broadcasting). The Armenian Genocide was organized by specific Ottoman officials. The Holocaust required immense bureaucratic apparatus. These weren't spontaneous outpourings; they were political projects. Second, intervention has worked in cases where it was attempted seriously. NATO intervention ended the Bosnian War in 1995. International tribunals (Nuremberg, ICTY, ICTR, ICC) have prosecuted perpetrators with substantial convictions: Karadžić 40 years, Mladić life, Kambanda life, others. The Responsibility to Protect (R2P) doctrine adopted by the UN in 2005 provides framework for intervention when states fail to protect their populations from genocide. Intervention is hard but not impossible. Third, prevention specifically works when warning signs are recognized and acted on. General Dallaire's January 1994 'genocide fax' to UN headquarters explicitly identified preparations; if the UN had authorized seizure of the machete caches and arrest of Hutu Power leaders, the genocide could have been substantially reduced or prevented. Specific decisions made it not happen. Fourth, the 'human nature' framing obscures responsibility. If genocide is human nature, no one is responsible; if it's the result of specific political organization, specific actors are responsible. The evidence overwhelmingly supports the latter. Perpetrators face specific consequences (legal, social, historical); 'human nature' framing protects perpetrators from accountability. Fifth, what to do practically: read Samantha Power 'A Problem from Hell' (2002) for systematic documentation of why prevention failed in 20th-century cases. Watch documentaries from USC Shoah Foundation, Aegis Trust, USHMM. Recognize the patterns: which contemporary situations (Xinjiang, Tigray, Rohingya, Sudan) show preparation stages? What's your political and civic response? Genocides are political projects; preventing them is political work, and 'just human nature' framing is itself part of why prevention so often fails."`,
                `"Random"`,
                `"Just sad"`,
              ],
              correctIndex: 1,
              explanation: `Real applied genocide literacy. The "human nature" framing is rejected by serious scholarship; genocides follow recognizable patterns with specific political actors; intervention has worked when seriously attempted; prevention requires recognition + capacity + will. Identifying the framing as protective-of-perpetrators is the work.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-family`, category: `Family connection`, prompt: `Does your family have direct or indirect connection to any genocide (Armenian, Holocaust, Cambodian, Rwandan, Bosnian, Darfur, Rohingya, Holodomor, others)? How does that connection (or its absence) shape your engagement with this lesson?` },
            { id: `reflect-stages`, category: `Recognizing stages`, prompt: `Looking at current global situations (Xinjiang, Tigray, Sudan, Rohingya, others), which show recognizable stages from Stanton's framework? What would prevention look like?` },
            { id: `reflect-international`, category: `International failure`, prompt: `Each of our three cases showed international response failure (delayed, inadequate, or absent). What structural features of the international system produce this recurring pattern? What would change it?` },
            { id: `reflect-denial`, category: `Denial`, prompt: `Turkey denies the Armenian Genocide a century later. Republika Srpska denies Srebrenica despite ICTY conviction. What makes ongoing denial possible? What does it require to break through?` },
            { id: `reflect-memory`, category: `Memory work`, prompt: `Visit (in person or online) one of the genocide memorial institutions (USHMM, Yad Vashem, Aegis Trust archives, Srebrenica-Potočari, Tuol Sleng, Kigali Genocide Memorial). What does the institution communicate beyond information? What's the purpose of memory work?` },
            { id: `reflect-action`, category: `Your action`, prompt: `Recognizing genocide patterns at 12 is foundation for political engagement across decades. What does engagement actually look like at your age and in your context? Reading, learning, sharing, advocating, voting when of age, what else?` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Genocide recognition and prevention are not academic. Two paths for deepening this beyond the lesson.`,
          familyActivity: {
            title: `Family Genocide Memory Conversation`,
            duration: `60 minutes`,
            description: `Share the three cases and the prevention framework with your family. Family discussions of genocide are heavy and important. Many families have direct or indirect connection to one of these histories (Armenian, Holocaust, Cambodian, Rwandan, Bosnian, Holodomor, Rohingya, others); others have political relationships to the question of recognition or prevention. The conversation often surfaces personal connections, family memory of specific events, and political views about prevention. Approach with care; the content has weight for good reasons. If anyone in your family was directly affected by any of these histories, their accounts are foundational; listen seriously.`,
          },
          projectOption: {
            title: `In-Depth Study of One Genocide, 6 weeks (optional)`,
            duration: `6 weeks, ~45 minutes per session`,
            description: `Pick one genocide from the wider list (Armenian, Holocaust, Cambodian, Holodomor, Rwandan, Bosnian, Darfur, Rohingya, Xinjiang Uyghur, or others). Week 1-2: read substantial scholarly account (Akçam on Armenian; multiple options on Holocaust including Friedländer or Hilberg; Kiernan on Cambodia; Mamdani or Prunier on Rwanda; Hartmann or Gutman on Bosnia). Week 3: read survivor testimony (Levi, Wiesel, Borowski for Holocaust; testimony archives for others). Week 4: research international response and accountability. Week 5: research memory work and denial. Week 6: write 2,500 words on the case, applying Stanton's framework, analyzing what prevention could have looked like, and engaging the question of memory and accountability.`,
            offerToParent: `Parent: opt your kid into this project. In-depth engagement with one genocide at 12-13 builds foundation for serious political engagement across decades. The work is heavy and important.`,
          },
          identityQuestion: `If you become someone who recognizes genocide patterns and engages prevention seriously across decades, what does that change about your civic life? What does it mean for the political world you'll inherit and shape?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can recognize the stages of genocide before mass killing begins.`,
            `A person who holds the memory of victims while pressing for accountability.`,
            `Someone who engages prevention as political work, not as inevitable tragedy.`,
          ],
          saveKey: `identity_responses_hw_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighth History and World lesson done. Heavy content engaged seriously. You have framework for genocide as legal and analytical category: Lemkin 1944 + UN Convention 1948 definition; Stanton's ten stages; the structural pattern of international response failure documented by Samantha Power. You've engaged three cases directly: Armenian Genocide 1915-1923 (~1.5M deaths, Turkish denial 100+ years); Rwandan Genocide 1994 (~800K-1M deaths in 100 days, UN warning January 1994 ignored, international force reduced as killing began); Bosnian War and Srebrenica 1992-1995 (~100K war deaths + Srebrenica 8,372 killed in 3 days July 1995, first explicit ICTY genocide conviction since Nuremberg). You've engaged the wider list (Holodomor, Cambodia, Darfur, Rohingya, Xinjiang Uyghur) and the memory institutions doing ongoing work. Twelve lessons to go. Next: the Holocaust in depth, the case that drove the genocide concept's development, with its own framework, sources, denial industry. Source Evaluation format. Resources, again, throughout. Onward, with care. — Lyra`,
          badge: `genocide-aware`,
          badgeName: `Genocide Aware`,
          xpEarned: 75,
          competencies: [
            `Articulates Lemkin's coining of "genocide" 1944 + UN Convention 1948 + legal definition`,
            `Applies Stanton's ten stages of genocide framework`,
            `Engages three case studies (Armenian, Rwandan, Bosnian) with specific actors, scale, mechanisms`,
            `Recognizes the recurring pattern of international response failure (Power "A Problem from Hell" 2002)`,
            `Identifies wider genocides beyond cases (Holocaust, Holodomor, Cambodia, Darfur, Rohingya, Xinjiang) as fitting framework`,
            `Engages memory institutions (USHMM, Yad Vashem, Aegis Trust, Kigali, Srebrenica-Potočari, ICTY) and ongoing denial as continued political work`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: The Holocaust in Depth`,
            hook: `Source Evaluation. Three tiers of sources on the Holocaust. The case that drove the genocide concept.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L08 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
