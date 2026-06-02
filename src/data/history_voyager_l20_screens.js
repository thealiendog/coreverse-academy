// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L20 — Where Is History Going? (CAPSTONE)
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Capstone integrating full band
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: ARGUMENT BUILDER (capstone-scaled)
// CAPSTONE DIFFERENTIATION: 100 XP (vs 75), 45 min (vs 35), six positions (vs 3)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l20-v1";

const HISTORY_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-20`,
      title: `Where Is History Going?`,
      duration: 45,
      xpReward: 100,
      badge: `history-voyager-capstone`,
      badgeName: `History Voyager Capstone`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}. The capstone. Nineteen lessons of History and World, now this. Today the question is straightforward and impossible: where is history going? Not predicting specific events. Predicting events is what fortune tellers do. The historian's work is reading patterns and dynamics with enough framework to engage what comes when it comes. Six positions from serious thinkers on the broad direction. The progressive position (Pinker, Singer, the New Optimists): things have been getting better across centuries and the trajectory continues. The democratic-erosion position (Levitsky and Ziblatt, Applebaum, others): the democratic gains of the 20th century are eroding and we're entering more authoritarian territory. The civilizational position (Huntington, his contemporary successors): the future is conflict between civilizations rather than convergence. The climate position (the IPCC framework, multiple thinkers): climate change is the structural fact that will substantially shape everything else regardless of political framings. The technology position (Yudkowsky, Hinton, others on AI risk; Acemoglu, Tegmark on the broader trajectory): technological change, particularly AI, will substantially restructure what's possible. The cyclical position (Turchin, Ibn Khaldun across centuries): history follows recognizable patterns of consolidation and breakdown. You commit to one as primary framework and engage why the others matter too. The work of the capstone isn't producing the right answer; it's developing the framework you'll use across your adult lifetime to read what's happening. Onward.`,
          headline: `Where Is History Going?`,
          subtitle: `Capstone. Six positions on the broad direction. Argument Builder.`,
          visual: `/voyager-assets/history/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Question Is Worth Asking`,
          paragraphs: [
            `Most history education stops at "what happened" without asking "where does this go." That stopping point is partly appropriate (historians as scholars are appropriately cautious about predictions) and partly a failure. Failing to engage trajectory leaves students without framework for reading the present, which is what history is for in the end. The capstone moves from analysis of the past to framework for the future. Doing this well requires recognizing what the question is and isn't.`,
            `What "where is history going?" is not. It is not asking for specific predictions: will Russia win or lose in Ukraine; will China surpass the US economically by 2030; will democracy stabilize in Brazil. Specific predictions like that are what makes most "futurism" embarrassing five years later. The historian's question is broader: what dynamics shape the longer trajectory; what patterns from the past recur in the present; what structural factors substantially constrain what's possible; what's actually new and what's familiar wearing new clothing. Engaging trajectory at this broader level is more defensible and more useful than specific predictions.`,
            `What the question requires. It requires holding multiple time frames simultaneously. Some dynamics operate across centuries (climate, demographic transition, technological accumulation). Some operate across decades (great-power competition, generational political shifts, economic cycles). Some operate across years (specific elections, specific policy choices, specific conflicts). All three matter and they interact. Reading where history is going means reading across time frames rather than collapsing into one.`,
            `It also requires holding multiple positions simultaneously. The six positions ahead don't fully exclude each other. Someone who commits to the climate position as primary framework can still recognize that democratic erosion is real and shaping how climate policy actually works. Someone who commits to the technology position can still recognize that climate constraints will shape what technological development becomes economically and politically feasible. Capstone-level historical thinking integrates multiple frameworks rather than picking one and dismissing others.`,
            `It requires honest humility about what historians can and can't say. The historians who've predicted longest-term well (Marx, Tocqueville, Ibn Khaldun, more recent figures) got some things substantially right and some things substantially wrong. The historians who confidently predicted the "end of history" (Fukuyama 1992) or the imminent collapse of capitalism (multiple Marxist analysts) or the unipolar American century (multiple analysts 1990s-2000s) have been substantially wrong. Engaging where history is going requires holding probabilities and frameworks rather than certainties.`,
            `What you'll do today. Engage six positions on the broad direction. Commit to one as primary framework while engaging others seriously. Build your case with evidence drawn from across the band. Respond to the strongest counterargument. Reflect on what you've learned across 20 lessons. The capstone is yours; the framework you build today is the foundation for engaging history across decades.`,
          ],
          image: `/voyager-assets/history/l20-s1-why-asking.webp`,
          imageCaption: `The question isn't predicting specific events. It's reading dynamics, patterns, structural factors that shape longer trajectory. Requires holding multiple time frames (centuries, decades, years) and multiple positions simultaneously. Honest humility: even the historians who predicted longest-term well got substantial things wrong (Marx, Tocqueville, Ibn Khaldun); confident long-term predictions (Fukuyama "End of History" 1992; unipolar American century) have been substantially wrong. Hold probabilities and frameworks, not certainties.`,
          vocab: [
            {
              word: `the trajectory question`,
              definition: `"Where is history going?" as capstone question. NOT asking for specific predictions (will Russia win or lose Ukraine; will China surpass US economically by 2030; will democracy stabilize Brazil). Specific predictions make most "futurism" embarrassing five years later. The historian's question is broader: what dynamics shape longer trajectory; what patterns recur; what structural factors constrain what's possible; what's actually new vs familiar wearing new clothes. Requires holding multiple time frames simultaneously: centuries (climate, demographic transition, technological accumulation); decades (great-power competition, generational shifts, economic cycles); years (specific elections, policy choices, conflicts). All three matter and interact; reading trajectory means reading across rather than collapsing into one. Requires holding multiple positions simultaneously: the six positions don't fully exclude each other; capstone-level thinking integrates rather than picks one and dismisses others. Requires honest humility: historians who predicted longest-term well (Marx, Tocqueville, Ibn Khaldun, recent figures) got some things substantially right and some wrong; historians who confidently predicted "end of history" (Fukuyama 1992), imminent capitalist collapse (multiple Marxist analysts), unipolar American century (1990s-2000s analysts) have been substantially wrong. Hold probabilities and frameworks, not certainties.`,
              audioPrompt: `Most history education stops at "what happened" without asking "where does this go," {name}. That stopping point is partly appropriate and partly a failure. The capstone moves from analysis of the past to framework for the future. What "where is history going" is not. It is not asking for specific predictions: will Russia win or lose in Ukraine; will China surpass the US economically by 2030; will democracy stabilize in Brazil. Specific predictions like that are what makes most futurism embarrassing five years later. The historian's question is broader: what dynamics shape the longer trajectory; what patterns from the past recur in the present; what structural factors substantially constrain what's possible. What the question requires. It requires holding multiple time frames simultaneously. Some dynamics operate across centuries: climate, demographic transition, technological accumulation. Some operate across decades: great-power competition, generational political shifts, economic cycles. Some operate across years: specific elections, specific policy choices. It also requires honest humility about what historians can and can't say. The historians who confidently predicted the "end of history" by Fukuyama in 1992, or the imminent collapse of capitalism, or the unipolar American century have been substantially wrong.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Six Positions On The Trajectory`,
          paragraphs: [
            `Six positions on the broad direction of history. Each comes from serious thinkers with substantial evidence and engages real dynamics. Each has limits that other positions address. Brief overview here; deeper engagement in section 3.`,
            `Position 1: Progressive (the New Optimists). Steven Pinker "The Better Angels of Our Nature" (2011), "Enlightenment Now" (2018); Peter Singer "The Expanding Circle" (1981), "The Most Good You Can Do" (2015); Hans Rosling "Factfulness" (2018, posthumous with co-authors); the broader "rationalist" and "effective altruist" intellectual orbit. The argument: across centuries, violence has declined substantially (Pinker's data on per-capita war deaths, homicide rates, judicial torture, slavery); life expectancy, literacy, extreme poverty rates have all improved dramatically (Rosling's data from the World Bank, WHO, UN); rights have expanded to progressively wider groups (Singer's "expanding circle" framework: from family to tribe to nation to species to all sentient beings). The trajectory is improvement; backlash and reversal happen but the long-term direction is positive. Critique: the data selection is contested (other measures show different patterns); the framework substantially centers Western liberal values as the standard for "progress"; the trajectory's persistence into the future is itself contested by other positions.`,
            `Position 2: Democratic erosion. Steven Levitsky and Daniel Ziblatt "How Democracies Die" (2018) + "Tyranny of the Minority" (2023); Anne Applebaum "Twilight of Democracy" (2020) + ongoing essays; Larry Diamond "Ill Winds" (2019); Yascha Mounk "The People vs. Democracy" (2018). The argument: democratic gains of the 20th century are eroding through specific mechanisms identified by comparative scholarship: democratic backsliding under elected leaders (Hungary's Orbán since 2010, Poland's PiS 2015-2023, Erdoğan Turkey since 2003, Modi India 2014+, Bolsonaro Brazil 2018-2022, Trump US 2016+2024); authoritarian states' increased confidence (China under Xi, Russia under Putin, others); democratic publics' apparent openness to authoritarian rhetoric. The trajectory: we're entering more authoritarian territory; the 20th century democratic expansion was a phase that's ending. Critique: backlash to democracy has happened repeatedly without producing permanent reversal; current authoritarianism faces substantial resistance and may not consolidate; the framing centers Western democracies' self-understanding.`,
            `Position 3: Civilizational. Samuel Huntington "The Clash of Civilizations and the Remaking of World Order" (1996), with substantial subsequent intellectual descendants (Ross Douthat, John Mearsheimer in some moods, various nationalist intellectuals globally). The argument: the future is conflict between civilizations rather than convergence. Cultural and religious differences (Western, Sinic/Chinese, Islamic, Hindu, Orthodox, African, Latin American, Japanese as Huntington named them) substantially organize world politics. Trade and integration don't dissolve these differences; they may intensify them by making contact more frequent. The trajectory: civilizational fault lines (US-China, Russia-Europe, Islamic world-West, Hindu-Muslim, others) will substantially shape the 21st century. Critique: Huntington's specific civilizational divisions don't map cleanly onto actual cultural variation; the framework essentializes cultures that are themselves internally diverse; the "clash" framing can become self-fulfilling prophecy; alternative framings (multipolar accommodation; transnational identity formations) may be more accurate.`,
            `Position 4: Climate as structural fact. The IPCC framework across multiple assessment reports (most recent AR6 2021-2023); David Wallace-Wells "The Uninhabitable Earth" (2019); Bill McKibben ongoing writing from 1989 onward; Naomi Klein "This Changes Everything" (2014); multiple scientific and journalistic frameworks. The argument: climate change is the structural fact that will substantially shape everything else regardless of political framings. Current trajectory has Earth warming to ~2.7°C above pre-industrial baseline by 2100 (UN Environment Programme 2024 estimate based on current policies); 1.5°C warming threshold (Paris Agreement target) substantially passed or about to be passed; multiple tipping points may be triggered (Amazon dieback, Greenland ice sheet collapse, West Antarctic ice sheet, ocean current disruption). The trajectory: climate impacts substantially shape migration patterns, food security, conflict zones, economic development, political stability across every region. Other positions' frameworks are real but operate within climate constraints. Critique: while climate is real and serious, framing it as primary substantially obscures political agency (climate outcomes depend on policy choices that other dynamics shape); doomism is itself politically demobilizing; technical solutions exist that other positions' frameworks help analyze.`,
            `Position 5: Technological / AI risk. Eliezer Yudkowsky and Machine Intelligence Research Institute (MIRI) since 2000; Geoffrey Hinton (resigned from Google 2023, started speaking publicly on AI risk); Stuart Russell "Human Compatible" (2019); Brian Christian "The Alignment Problem" (2020); Max Tegmark "Life 3.0" (2017); Daron Acemoglu and Simon Johnson "Power and Progress" (2023) on technology's distributional effects. The argument: technological change, particularly AI development, will substantially restructure what's possible across every domain. Current AI trajectory (large language models from GPT-3.5 / GPT-4 onward; multiple subsequent capability advances) may produce transformative AI systems within decades; depending on how this goes, the outcomes range from substantial human flourishing to existential catastrophe. Other technological transitions (electricity, computing, internet) have substantially restructured economic and political life within decades. The trajectory: 21st century is substantially shaped by how technological development goes. Critique: technological determinism understates how political choices shape what technology becomes; specific AI risk predictions are contested (Yudkowsky's framework is high-uncertainty; current models' actual capability is contested); positioning technology as primary obscures the political and economic choices that produce technology.`,
            `Position 6: Cyclical / structural. Peter Turchin and the cliodynamics field ("Ages of Discord" 2016, "End Times" 2023); Jared Diamond various works; Ibn Khaldun (~1332-1406) "Muqaddimah" articulating cyclical pattern across Islamic and broader history; ancient Chinese dynastic-cycle framework. The argument: history follows recognizable patterns of consolidation and breakdown across centuries. Elite overproduction (more elite aspirants than elite positions) produces instability; popular immiseration (declining living standards for non-elite populations) produces unrest; cycles of stability and crisis recur across very different cultures and periods (Turchin's data across Rome, China, Russia, US in 1860s and currently, multiple others). The trajectory: we're currently in a cyclical breakdown phase in multiple major societies including US; the specific events that follow depend on contingent decisions but the structural pattern is recognizable. Critique: the cyclical framework can become deterministic; specific cycles are contested in detail; different cyclical theories disagree about specifics even where they share the general framework.`,
          ],
          image: `/voyager-assets/history/l20-s2-six-positions.webp`,
          imageCaption: `Six positions on trajectory: (1) Progressive (Pinker, Singer, Rosling): improvement across centuries continues. (2) Democratic erosion (Levitsky + Ziblatt, Applebaum, Diamond, Mounk): 20th-century gains eroding. (3) Civilizational (Huntington 1996 and successors): future is conflict between civilizations. (4) Climate (IPCC, Wallace-Wells, McKibben, Klein): climate as structural fact. (5) Technology/AI (Yudkowsky/MIRI, Hinton, Russell, Christian, Tegmark; Acemoglu + Johnson): AI restructures everything. (6) Cyclical (Turchin cliodynamics, Ibn Khaldun, dynastic cycle frameworks): recognizable patterns of consolidation and breakdown.`,
          vocab: [
            {
              word: `six positions on history's trajectory`,
              definition: `Six serious positions from real thinkers with substantial evidence. Position 1: Progressive / New Optimists. Steven Pinker "The Better Angels of Our Nature" 2011 + "Enlightenment Now" 2018; Peter Singer "The Expanding Circle" 1981 + "The Most Good You Can Do" 2015; Hans Rosling "Factfulness" 2018 (posthumous). Long-term improvement across centuries: violence declined, life expectancy/literacy/extreme poverty improved, rights expanded to wider groups. Position 2: Democratic erosion. Steven Levitsky + Daniel Ziblatt "How Democracies Die" 2018 + "Tyranny of the Minority" 2023; Anne Applebaum "Twilight of Democracy" 2020; Larry Diamond "Ill Winds" 2019; Yascha Mounk "The People vs. Democracy" 2018. 20th-century democratic gains eroding through specific mechanisms: democratic backsliding under elected leaders (Orbán Hungary 2010+, PiS Poland 2015-2023, Erdoğan Turkey 2003+, Modi India 2014+, Bolsonaro Brazil 2018-2022, Trump US 2016+2024); authoritarian states' increased confidence; democratic publics' apparent authoritarian openness. Position 3: Civilizational. Samuel Huntington "The Clash of Civilizations" 1996 with subsequent descendants. Future as conflict between civilizations (Western, Sinic, Islamic, Hindu, Orthodox, African, Latin American, Japanese). Cultural/religious differences substantially organize world politics; trade and integration don't dissolve and may intensify. Position 4: Climate as structural fact. IPCC framework across multiple assessment reports (AR6 2021-2023); David Wallace-Wells "The Uninhabitable Earth" 2019; Bill McKibben from 1989; Naomi Klein "This Changes Everything" 2014. Current trajectory: ~2.7°C warming by 2100 (UN Environment Programme 2024); 1.5°C Paris threshold substantially passed; multiple tipping points possible. Climate substantially shapes migration, food security, conflict, political stability. Position 5: Technology / AI risk. Eliezer Yudkowsky + MIRI from 2000; Geoffrey Hinton (resigned Google 2023, started speaking publicly on AI risk); Stuart Russell "Human Compatible" 2019; Brian Christian "The Alignment Problem" 2020; Max Tegmark "Life 3.0" 2017; Daron Acemoglu + Simon Johnson "Power and Progress" 2023. Technological change, particularly AI, will substantially restructure what's possible. Outcomes range from substantial flourishing to existential catastrophe. Position 6: Cyclical / structural. Peter Turchin and cliodynamics field ("Ages of Discord" 2016, "End Times" 2023); Ibn Khaldun ~1332-1406 "Muqaddimah"; ancient Chinese dynastic-cycle framework. History follows recognizable patterns of consolidation and breakdown. Elite overproduction + popular immiseration → cycles of stability/crisis. Currently in cyclical breakdown phase per Turchin including US.`,
              audioPrompt: `Six positions on the broad direction of history, {name}. Each comes from serious thinkers with substantial evidence. Position 1: Progressive, the New Optimists. Steven Pinker's "The Better Angels of Our Nature" from 2011 and "Enlightenment Now" from 2018; Peter Singer's "The Expanding Circle" from 1981; Hans Rosling's "Factfulness" from 2018. The argument: across centuries, violence has declined substantially, life expectancy and literacy have improved dramatically, rights have expanded to progressively wider groups. The trajectory is improvement. Position 2: Democratic erosion. Steven Levitsky and Daniel Ziblatt's "How Democracies Die" from 2018; Anne Applebaum's "Twilight of Democracy" from 2020. Democratic gains of the 20th century are eroding through specific mechanisms: democratic backsliding under elected leaders in Hungary, Poland, Turkey, India, Brazil, US. Position 3: Civilizational. Samuel Huntington's "The Clash of Civilizations" from 1996. The future is conflict between civilizations rather than convergence. Position 4: Climate as structural fact. The IPCC framework across multiple assessment reports including AR6 from 2021 to 2023. Current trajectory has Earth warming to approximately 2.7 degrees Celsius above pre-industrial baseline by 2100. Position 5: Technological / AI risk. Eliezer Yudkowsky from 2000; Geoffrey Hinton from 2023; Stuart Russell's "Human Compatible" from 2019. Position 6: Cyclical, from Peter Turchin's cliodynamics work and Ibn Khaldun across centuries.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How The Positions Read The Band's Themes`,
          paragraphs: [
            `One way to engage the six positions is to see how each reads the major themes from this band. Run through L01-L19 quickly and notice what each position sees.`,
            `L01 Philosophy of History. The progressive position substantially aligns with Hegelian-style narratives of history's directionality. The democratic-erosion position warns that progress isn't guaranteed. The civilizational position resists universal-history framings. The climate position notes that environmental constraints have been historically under-theorized. The technology position sees technological accumulation as substantially shaping what counts as historical progress. The cyclical position holds that linear-progress framings miss recurring patterns.`,
            `L02 Historiography. Each position has its preferred sources. Progressive uses Steven Pinker's empirical aggregations; democratic-erosion uses comparative political science (Levitsky/Ziblatt); civilizational uses Huntington's cultural framework; climate uses IPCC's synthesis methodology; technology uses scientific and economic studies; cyclical uses Turchin's cliodynamics datasets. Each position's reading of historiography is shaped by what sources it considers authoritative.`,
            `L07 Imperialism. Progressive sees imperial extraction as historical violence that humanity has substantially moved beyond. Democratic-erosion sees imperial frameworks persisting in current great-power behavior. Civilizational sees imperial expansion as one civilization's project against others, with ongoing relevance. Climate sees colonial extraction as substantially producing current environmental devastation. Technology sees technological gaps as having enabled imperial expansion and current technological asymmetries as continuing the pattern. Cyclical sees imperial expansion and contraction as recurring patterns.`,
            `L08-L09 Genocide and Holocaust. Progressive sees genocidal violence as substantially declined despite specific recent cases. Democratic-erosion warns that democratic backsliding makes genocidal politics newly possible. Civilizational sees ethnic and religious cleavages as substantially organizing genocidal violence. Climate sees resource scarcity producing future-genocide risks. Technology sees surveillance and AI as potentially enabling new forms of mass violence (or constraining them). Cyclical sees mass violence as recurring with civilizational stress.`,
            `L10 Nuclear Age. All six positions take nuclear seriously as ongoing existential risk. Progressive notes substantial reduction from peak arsenals (~70,000 weapons globally to ~12,500); democratic-erosion notes Russia's nuclear threats in Ukraine as part of authoritarian assertion; civilizational notes that nuclear proliferation follows civilizational rather than universal patterns; climate notes that nuclear war would substantially affect climate; technology notes AI's interaction with nuclear command-and-control as new risk; cyclical notes that civilizational stress historically produces willingness to use ultimate weapons.`,
            `L11-L12 Cold War and Post-Cold War. Progressive sees Cold War's end as substantial human flourishing victory; democratic-erosion sees post-Cold War democracy expansion now eroding; civilizational sees Cold War as one phase in longer civilizational competition; climate sees Cold War-era industrialization as substantially producing current climate trajectory; technology sees Cold War-era science as substantially producing current technologies; cyclical sees superpower competition as recurring pattern with new specifics.`,
            `L13-L16 Middle East, China, Africa, Latin America. Each region's trajectory is read substantially differently by each position. Progressive emphasizes development gains and rights expansion. Democratic-erosion emphasizes authoritarian dynamics. Civilizational emphasizes cultural-religious organization. Climate emphasizes vulnerability and adaptation. Technology emphasizes leapfrogging and dependence. Cyclical emphasizes that current dynamics follow recognizable patterns.`,
            `L17 Indigenous Peoples. Progressive emphasizes rights gains and survival. Democratic-erosion emphasizes ongoing political constraints. Civilizational has limited framework for Indigenous experiences. Climate notes Indigenous communities as both substantial environmental stewards and substantial vulnerability category. Technology notes Indigenous knowledge as alternative framework for technological development. Cyclical notes settler colonialism as recurring pattern across regions and centuries.`,
            `L18 Women in History. Progressive emphasizes substantial gains in women's rights across centuries. Democratic-erosion emphasizes substantial rollbacks (Dobbs, Afghanistan, Iran). Civilizational notes gender norms as substantially organizing civilizational difference. Climate notes that women bear disproportionate climate-impact burden. Technology notes that AI and technology have substantial gendered dimensions. Cyclical notes that women's gains and rollbacks follow recognizable patterns of consolidation and backlash.`,
            `L19 Human Rights. Progressive sees human rights as substantially expanding moral circle. Democratic-erosion sees human rights as substantially under assault. Civilizational sees universal human rights framework as Western particularism. Climate sees climate justice as next major human rights frontier. Technology sees AI rights / surveillance / labor displacement as next major human rights issues. Cyclical sees human rights expansion-and-rollback as recurring pattern.`,
            `What this shows. Each position has framework for engaging the band's themes; each illuminates different dimensions; no single position captures everything. The capstone task isn't picking the "right" position; it's developing the framework you'll use to integrate multiple positions across your adult lifetime as new evidence accumulates.`,
          ],
          image: `/voyager-assets/history/l20-s3-themes.webp`,
          imageCaption: `Six positions read band's themes (L01-L19) substantially differently. Each illuminates different dimensions. Capstone task: developing framework for integrating multiple positions across adult lifetime as new evidence accumulates, not picking single right position.`,
          vocab: [
            {
              word: `how the six positions read the band's themes`,
              definition: `Each position has framework for engaging band themes. L01 Philosophy of History: progressive aligns with directional narratives; democratic-erosion warns progress not guaranteed; civilizational resists universal-history; climate notes environmental constraints; technology sees accumulation as shaping progress; cyclical sees recurring patterns. L02 Historiography: each position has preferred sources (Pinker aggregations; Levitsky/Ziblatt comparative; Huntington cultural; IPCC synthesis; technology scientific/economic studies; Turchin cliodynamics datasets). L07 Imperialism: progressive sees historical violence substantially moved beyond; democratic-erosion sees frameworks persisting; civilizational sees as one civilization's project; climate sees colonial extraction producing environmental devastation; technology sees technological asymmetries continuing pattern; cyclical sees expansion/contraction recurring. L08-L09 Genocide/Holocaust: progressive sees substantially declined; democratic-erosion warns backsliding enables genocidal politics; civilizational sees ethnic/religious cleavages organizing; climate sees resource scarcity producing risks; technology sees surveillance/AI enabling or constraining; cyclical sees mass violence recurring with civilizational stress. L10 Nuclear Age: all six take seriously as ongoing existential risk. L11-L12 Cold War/Post-Cold War: each reads substantially differently. L13-L16 Middle East/China/Africa/Latin America: each reads regions differently. L17 Indigenous Peoples: each engages variably. L18 Women in History: progressive emphasizes gains; democratic-erosion emphasizes rollbacks; civilizational notes gender norms organizing difference; climate notes disproportionate impact burden; technology notes gendered dimensions; cyclical notes consolidation/backlash patterns. L19 Human Rights: progressive sees expanding moral circle; democratic-erosion sees under assault; civilizational sees Western particularism; climate sees justice as frontier; technology sees AI/surveillance/labor issues; cyclical sees expansion/rollback recurring. Capstone task: developing framework for integrating multiple positions across adult lifetime, not picking single right position.`,
              audioPrompt: `One way to engage the six positions is to see how each reads the major themes from this band, {name}. Run through the band quickly. L07 Imperialism. Progressive sees imperial extraction as historical violence that humanity has substantially moved beyond. Democratic-erosion sees imperial frameworks persisting in current great-power behavior. Civilizational sees imperial expansion as one civilization's project against others, with ongoing relevance. Climate sees colonial extraction as substantially producing current environmental devastation. Technology sees technological gaps as having enabled imperial expansion. Cyclical sees imperial expansion and contraction as recurring patterns. L10 Nuclear Age: all six positions take nuclear seriously as ongoing existential risk. L18 Women in History. Progressive emphasizes substantial gains in women's rights across centuries. Democratic-erosion emphasizes substantial rollbacks. Civilizational notes gender norms as substantially organizing civilizational difference. Climate notes that women bear disproportionate climate-impact burden. Technology notes that AI and technology have substantial gendered dimensions. Cyclical notes that women's gains and rollbacks follow recognizable patterns of consolidation and backlash. Each position has framework for engaging the band's themes; each illuminates different dimensions; no single position captures everything.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What This Capstone Is Asking Of You`,
          paragraphs: [
            `One framing of the capstone task. You commit to one position as primary framework for reading where history is going. The commitment isn't to a final answer; it's to the framework you'll use to engage what comes when it comes. Across your adult lifetime, you'll continue revising the framework as evidence accumulates. But starting with a primary framework is more useful than holding all six positions in undifferentiated parallel.`,
            `Another framing. The position you commit to is not the prediction of what will happen. It's the framework for noticing what's worth paying attention to. Someone whose primary framework is democratic erosion will notice and engage news of democratic backsliding, authoritarian assertion, institutional stress in ways that someone whose primary framework is technological transformation won't notice in the same way. Both frameworks pick up real signals; each misses what the other catches. The capstone commitment is about which signals you'll most consistently catch.`,
            `Another framing. Your primary framework will shape how you engage politically as you reach voting age. Climate-primary thinkers tend toward climate policy as priority. Democratic-erosion-primary thinkers tend toward defending democratic institutions as priority. Civilizational-primary thinkers tend toward national or regional identity politics. Progressive-primary thinkers tend toward incremental rights expansion. Technology-primary thinkers tend toward AI governance and technology policy. Cyclical-primary thinkers tend toward acceptance of structural patterns combined with engagement at the margins. The primary framework substantially shapes political engagement.`,
            `One specific framing about humility. The position you commit to today will probably look partially wrong to you in 10 years. The historians who've predicted longest-term well have all been substantially wrong about specific things while right about general dynamics. Building framework at 12 isn't building permanent commitment; it's building the foundation for continued revision as you accumulate experience. Capstone-level historical thinking is permanent learning, not permanent positioning.`,
            `One last framing before the argument. Six positions ahead. You build your case with evidence drawn from across the band. The evidence list includes both factual claims (specific dates, scales, events from earlier lessons) and interpretive claims (which framings have proven useful, which framings haven't). You respond to the strongest counterargument. You reflect on what you've learned. The capstone is yours. Onward.`,
          ],
          image: `/voyager-assets/history/l20-s4-asking.webp`,
          imageCaption: `Capstone task: commit to one position as primary framework, not as final answer. Primary framework determines which signals you'll most consistently catch as adult engaging news/politics/decisions. Will shape political engagement as you reach voting age (climate-primary → climate policy; democratic-erosion-primary → defending institutions; civilizational-primary → identity politics; progressive → rights expansion; technology → AI governance; cyclical → margin engagement). Building framework at 12 = foundation for continued revision, not permanent positioning. Capstone-level thinking is permanent learning.`,
          vocab: [
            {
              word: `the capstone commitment`,
              definition: `Commit to one position as primary framework for reading where history is going. Commitment is not final answer; it's framework for engaging what comes when it comes. Across adult lifetime, continue revising as evidence accumulates; but starting with primary framework more useful than holding all six positions in undifferentiated parallel. Position is not prediction of what will happen; it's framework for noticing what's worth paying attention to. Different frameworks pick up different real signals; capstone commitment is about which signals you'll most consistently catch. Primary framework shapes political engagement as you reach voting age: climate-primary → climate policy priority; democratic-erosion-primary → defending democratic institutions; civilizational-primary → national/regional identity politics; progressive-primary → incremental rights expansion; technology-primary → AI governance and technology policy; cyclical-primary → acceptance of structural patterns + margin engagement. Position you commit to today will probably look partially wrong in 10 years; historians who've predicted longest-term well have all been substantially wrong about specifics while right about general dynamics. Building framework at 12 is foundation for continued revision, not permanent positioning. Capstone-level historical thinking is permanent learning, not permanent positioning.`,
              audioPrompt: `One framing of the capstone task, {name}. You commit to one position as primary framework for reading where history is going. The commitment isn't to a final answer; it's to the framework you'll use to engage what comes when it comes. The position you commit to is not the prediction of what will happen. It's the framework for noticing what's worth paying attention to. Someone whose primary framework is democratic erosion will notice and engage news of democratic backsliding, authoritarian assertion, institutional stress in ways that someone whose primary framework is technological transformation won't notice in the same way. Both frameworks pick up real signals; each misses what the other catches. Your primary framework will shape how you engage politically as you reach voting age. Climate-primary thinkers tend toward climate policy as priority. Democratic-erosion-primary thinkers tend toward defending democratic institutions as priority. Technology-primary thinkers tend toward AI governance and technology policy. One specific framing about humility. The position you commit to today will probably look partially wrong to you in 10 years. The historians who've predicted longest-term well have all been substantially wrong about specific things while right about general dynamics.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Commit`,
          paragraphs: [
            `One last set of framings before you commit. Each position has serious thinkers, real evidence, and real limits. None is silly; engaging each on its terms is the work.`,
            `The progressive position has the strongest aggregate data on long-term improvement (violence rates, life expectancy, literacy, extreme poverty all show dramatic improvement across centuries). It has the weakest framework for catastrophic risks (climate, nuclear, AI; one really bad outcome could substantially reverse centuries of improvement). It tends to Western-center "progress."`,
            `The democratic-erosion position has the most precise current evidence on backsliding mechanisms (Levitsky/Ziblatt's comparative work is methodologically strong). It tends to be Anglo-American-centered; the framework's transferability to non-Western contexts is contested. It can be undermobilizing (despair-producing) if not paired with clear paths for action.`,
            `The civilizational position is the most contested in current scholarship. Huntington's framework has substantial intellectual descendants but also substantial scholarly rejection. The "clash" framing can become self-fulfilling. Civilizational analysis can essentialize cultures that are themselves internally diverse. But the framework captures something real about how cultural/religious identity organizes contemporary politics in ways universalist frameworks miss.`,
            `The climate position has overwhelming scientific consensus on the underlying physical facts. The political and economic frameworks for addressing climate are substantially more contested. Climate-primary framing has been criticized for doomism that demobilizes; for technological optimism that may not pan out; for class-blind framings that ignore who bears costs.`,
            `The technology position has the highest current uncertainty about where AI specifically is going. Optimistic and pessimistic scenarios are both held by serious thinkers. Technological determinism can understate political agency. The current AI boom (large language models from ~2020 onward) may or may not produce transformative AI in coming decades; positioning your framework on it is making a substantial bet.`,
            `The cyclical position has the longest historical track record (Ibn Khaldun's framework from the 14th century continues to find new applications). It can become deterministic if held too rigidly. Cyclical frameworks have predicted current US instability with substantial accuracy (Turchin's work) but specific predictions about how breakdown resolves are highly uncertain. The framework can be productive for noticing structural patterns without requiring fatalism about specific outcomes.`,
            `Onward to the argument. Six positions; one primary commitment; case-building from evidence across the band; response to the strongest counterargument. The capstone is yours.`,
          ],
          image: `/voyager-assets/history/l20-s5-before.webp`,
          imageCaption: `Each position: strongest evidence + weakest evidence + main limit. Progressive: strong on long-term improvement data, weak on catastrophic risks. Democratic erosion: strong on backsliding mechanisms, Anglo-American-centered. Civilizational: most contested scholarship, can essentialize cultures, but captures something real. Climate: overwhelming consensus on physics, contested on solutions, can demobilize. Technology: highest current uncertainty about AI specifically, deterministic risk. Cyclical: longest historical track record, can be deterministic if rigid.`,
          vocab: [
            {
              word: `each position's strongest and weakest evidence`,
              definition: `Each of six positions has serious thinkers, real evidence, real limits. Progressive: strongest aggregate data on long-term improvement (violence rates, life expectancy, literacy, extreme poverty across centuries); weakest framework for catastrophic risks; Western-centers "progress." Democratic erosion: most precise current evidence on backsliding mechanisms (Levitsky/Ziblatt methodologically strong); Anglo-American-centered; transferability to non-Western contexts contested; can be undermobilizing if not paired with clear paths for action. Civilizational: most contested in current scholarship; Huntington's framework has substantial intellectual descendants AND substantial scholarly rejection; "clash" framing can become self-fulfilling; can essentialize internally-diverse cultures; but captures something real about how cultural/religious identity organizes contemporary politics that universalist frameworks miss. Climate: overwhelming scientific consensus on physics; political/economic frameworks for addressing more contested; doomism critique; technological optimism critique; class-blind framings critique. Technology: highest current uncertainty about where AI specifically going; optimistic and pessimistic scenarios both held by serious thinkers; technological determinism critique; current AI boom (LLMs from ~2020) may or may not produce transformative AI. Cyclical: longest historical track record (Ibn Khaldun 14th C continues new applications); deterministic risk if held rigidly; current US instability predicted with substantial accuracy by Turchin; specific breakdown-resolution highly uncertain; productive for noticing structural patterns without requiring fatalism.`,
              audioPrompt: `One last set of framings before you commit, {name}. The progressive position has the strongest aggregate data on long-term improvement across centuries; it has the weakest framework for catastrophic risks; it tends to Western-center "progress." The democratic-erosion position has the most precise current evidence on backsliding mechanisms; it tends to be Anglo-American-centered; it can be undermobilizing if not paired with clear paths for action. The civilizational position is the most contested in current scholarship; the "clash" framing can become self-fulfilling; but the framework captures something real about how cultural and religious identity organizes contemporary politics. The climate position has overwhelming scientific consensus on the underlying physical facts; the political and economic frameworks for addressing climate are substantially more contested. The technology position has the highest current uncertainty about where AI specifically is going. The cyclical position has the longest historical track record from Ibn Khaldun in the 14th century continuing to find new applications. Onward to the argument. Six positions; one primary commitment.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER (CAPSTONE-SCALED) ────────────────────────────
        {
          id: `l20-argument-builder`,
          type: `argument-builder`,
          headline: `Where Is History Going? Your Primary Framework`,
          intro: `Capstone. Commit to one of six positions as your primary framework for reading where history is going. This isn't picking the "right" answer; it's committing to the lens you'll use across your adult lifetime, knowing you'll revise it as evidence accumulates. Build your case with evidence from across the 20 lessons. Respond to the strongest counterargument.`,
          positions: [
            {
              id: `progressive`,
              label: `Progressive (New Optimists): things have been getting better across centuries and the trajectory continues`,
              summary: `Defenders: Steven Pinker "The Better Angels of Our Nature" 2011 + "Enlightenment Now" 2018; Peter Singer "The Expanding Circle" 1981 + ongoing work; Hans Rosling "Factfulness" 2018. The argument: violence per capita has declined across centuries (Pinker's data on war deaths, homicide, judicial torture); life expectancy/literacy/extreme poverty have improved dramatically (Rosling's data from World Bank/WHO/UN); moral circle has expanded to progressively wider groups (Singer's framework). Trajectory: improvement continues; backlash and reversal happen but long-term direction is positive. Critique: data selection contested; Western-centers progress; weak framework for catastrophic risks.`,
            },
            {
              id: `democratic-erosion`,
              label: `Democratic erosion: 20th-century democratic gains are eroding; we're entering more authoritarian territory`,
              summary: `Defenders: Steven Levitsky + Daniel Ziblatt "How Democracies Die" 2018 + "Tyranny of the Minority" 2023; Anne Applebaum "Twilight of Democracy" 2020; Larry Diamond "Ill Winds" 2019; Yascha Mounk "The People vs. Democracy" 2018. Mechanisms: democratic backsliding under elected leaders (Orbán Hungary 2010+, PiS Poland 2015-2023, Erdoğan Turkey 2003+, Modi India 2014+, Bolsonaro Brazil 2018-2022, Trump US 2016+2024); authoritarian states' confidence (Xi China, Putin Russia); democratic publics' authoritarian openness. Trajectory: more authoritarian territory; 20th-century democratic expansion was phase ending. Critique: backlash to democracy has happened before without permanent reversal; framing centers Western self-understanding.`,
            },
            {
              id: `civilizational`,
              label: `Civilizational: future is conflict between civilizations rather than convergence; cultural/religious differences substantially organize politics`,
              summary: `Defenders: Samuel Huntington "The Clash of Civilizations and the Remaking of World Order" 1996; subsequent intellectual descendants (Ross Douthat in some moods, John Mearsheimer, various nationalist intellectuals globally). Civilizations (Western, Sinic/Chinese, Islamic, Hindu, Orthodox, African, Latin American, Japanese) substantially organize world politics. Trade and integration don't dissolve and may intensify differences. Trajectory: civilizational fault lines (US-China, Russia-Europe, Islamic world-West, Hindu-Muslim) substantially shape 21st century. Critique: divisions don't map cleanly onto cultural variation; essentializes internally-diverse cultures; "clash" can become self-fulfilling; alternative framings (multipolar accommodation, transnational identity) may be more accurate.`,
            },
            {
              id: `climate`,
              label: `Climate as structural fact: climate change will substantially shape everything else regardless of political framings`,
              summary: `Defenders: IPCC framework across multiple assessment reports (AR6 2021-2023); David Wallace-Wells "The Uninhabitable Earth" 2019; Bill McKibben from 1989+; Naomi Klein "This Changes Everything" 2014. Current trajectory: ~2.7°C warming by 2100 per UN Environment Programme 2024 (current policies); 1.5°C Paris threshold substantially passed; multiple tipping points possible (Amazon dieback, Greenland ice sheet, West Antarctic, ocean current disruption). Climate substantially shapes migration patterns, food security, conflict zones, economic development, political stability. Critique: framing as primary obscures political agency; doomism politically demobilizing; technical solutions exist that other frameworks help analyze.`,
            },
            {
              id: `technology`,
              label: `Technological / AI: technological change, particularly AI, will substantially restructure what's possible across every domain`,
              summary: `Defenders: Eliezer Yudkowsky and MIRI from 2000; Geoffrey Hinton (resigned Google 2023, started speaking publicly on AI risk); Stuart Russell "Human Compatible" 2019; Brian Christian "The Alignment Problem" 2020; Max Tegmark "Life 3.0" 2017; Daron Acemoglu + Simon Johnson "Power and Progress" 2023 on distributional effects. Current AI trajectory (large language models GPT-3.5/GPT-4 onward + subsequent advances) may produce transformative AI within decades; outcomes range from substantial flourishing to existential catastrophe. Other transitions (electricity, computing, internet) substantially restructured economic/political life within decades. Critique: technological determinism understates political agency; specific AI risk predictions contested; positioning technology as primary obscures political/economic choices.`,
            },
            {
              id: `cyclical`,
              label: `Cyclical: history follows recognizable patterns of consolidation and breakdown across centuries; we're currently in breakdown phase`,
              summary: `Defenders: Peter Turchin and cliodynamics field ("Ages of Discord" 2016 + "End Times" 2023); Ibn Khaldun (~1332-1406) "Muqaddimah" articulating cyclical pattern across Islamic and broader history; ancient Chinese dynastic-cycle framework. History follows patterns of consolidation/breakdown. Elite overproduction + popular immiseration → cycles of stability/crisis (Turchin's data across Rome, China, Russia, US in 1860s and currently). Trajectory: cyclical breakdown phase in multiple major societies including US; specific events follow contingent decisions but structural pattern recognizable. Critique: framework can become deterministic; specific cycles contested in detail; different cyclical theories disagree on specifics.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Pinker's "Better Angels" 2011 documents that per-capita war deaths have declined substantially across centuries; world homicide rates declined ~95% since medieval European peaks; judicial torture, slavery, and many other forms of organized cruelty have been substantially reduced or abolished. The data is real even where the framing is contested.`,
              source: `Pinker "The Better Angels of Our Nature" 2011`,
            },
            {
              id: `e2`,
              text: `Democratic backsliding under elected leaders documented in multiple comparative studies (Levitsky + Ziblatt). Specific cases: Hungary's Orbán 2010+; Poland's PiS 2015-2023; Turkey's Erdoğan 2003+; India's Modi 2014+; Brazil's Bolsonaro 2018-2022; US under Trump 2016+2024 including January 6, 2021. Pattern of democratically-elected leaders dismantling democratic institutions from within.`,
              source: `Levitsky + Ziblatt "How Democracies Die" 2018; multiple case studies`,
            },
            {
              id: `e3`,
              text: `Current geopolitical tensions follow substantially civilizational lines per Huntington's 1996 framework: US-China strategic competition; Russia-Europe rupture culminating in February 2022 Ukraine invasion; ongoing Islamic world-West tensions; Hindu-Muslim tensions in South Asia; multiple civilizational fault lines. The framework predicts much of the post-Cold War conflict pattern that other framings missed.`,
              source: `Huntington "The Clash of Civilizations" 1996; current geopolitics`,
            },
            {
              id: `e4`,
              text: `IPCC AR6 (2021-2023) consolidates overwhelming scientific consensus on anthropogenic climate change. Current trajectory: ~2.7°C warming by 2100 (UN Environment Programme 2024 based on current policies); 1.5°C Paris threshold substantially passed; multiple tipping points may be triggered (Amazon dieback, Greenland ice sheet, West Antarctic ice sheet, ocean current disruption). Physical climate facts are not in serious scientific dispute.`,
              source: `IPCC AR6 2021-2023; UN Environment Programme 2024 Emissions Gap Report`,
            },
            {
              id: `e5`,
              text: `AI development across past several years has produced substantial capability advances (GPT-3 2020; GPT-4 2023; subsequent advances). Industry leaders including Geoffrey Hinton (resigned Google 2023 to speak publicly on AI risk), Yoshua Bengio, Stuart Russell have substantially shifted toward AI-risk-significant positions. The trajectory's specific outcome is contested but the technology's transformative potential is widely acknowledged.`,
              source: `Hinton 2023+ public statements; Russell "Human Compatible" 2019; multiple AI industry sources`,
            },
            {
              id: `e6`,
              text: `Peter Turchin's cliodynamics work documents that current US shows elite overproduction (PhD oversupply, law degree oversupply, expanded "elite aspirant" pool without proportionally expanded "elite position" pool) and popular immiseration (stagnant real wages, declining life expectancy in some demographics, deaths of despair). The same combination preceded US Civil War 1860s and other historical instabilities. Pattern recurs.`,
              source: `Turchin "End Times" 2023; cliodynamics methodology`,
            },
            {
              id: `e7`,
              text: `The 20th century combined dramatic improvement on many measures (Pinker progress data) with two World Wars, the Holocaust, Stalinist and Maoist mass killings, nuclear weapons development, Cold War proxy wars killing millions, climate change acceleration, multiple genocides. Both "progress" and "catastrophe" frameworks capture real aspects of the century.`,
              source: `Multiple historical sources across this band`,
            },
            {
              id: `e8`,
              text: `Russia's February 24, 2022 invasion of Ukraine combined: explicit civilizational framing (Putin's claim that Ukraine has no legitimate independent existence); democratic-erosion dimension (Russia as consolidated authoritarian state attacking democratic neighbor); climate dimension (massive military emissions; energy security disruptions); technology dimension (drones, cyber operations, AI-assisted targeting); cyclical dimension (great-power conflict following recognizable patterns); progressive critique (most significant European war since 1945; substantial human suffering). All six frameworks engage the conflict; each illuminates different dimensions.`,
              source: `Current geopolitical analysis; this band's L11, L12 framing`,
            },
            {
              id: `e9`,
              text: `The post-2008 period has shown substantial backsliding from triumphalist 1990s expectations: 2008 financial crisis; 2010s populist rise; democratic backsliding multiple countries; renewed great-power competition; climate impacts accelerating; AI development accelerating; rising authoritarianism. The "End of History" (Fukuyama 1992) framework was substantially refuted. Each of the six positions provides different framework for understanding what's actually happening.`,
              source: `L12 framing; multiple post-2008 sources`,
            },
            {
              id: `e10`,
              text: `Across the band: civilizations (Egyptian, Mesopotamian, Indus, Chinese dynasties, Greek/Roman, Islamic caliphates, medieval European, multiple Indigenous American, African, Asian) have risen and fallen across thousands of years following recognizable cyclical patterns even where specific contents varied substantially. The cyclical framework has the longest empirical track record across the broadest sample.`,
              source: `Ibn Khaldun "Muqaddimah" 14th century; Turchin and others; this band's historical breadth`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You've committed to a primary framework. Here's the strongest objection. Whatever framework you've committed to, you're substantially predicting that the next 30-50 years will look like recent history's continuation of trends rather than involving substantial novelty. But the historical record suggests that major turning points are exactly when previously-strong frameworks become substantially wrong. The Roman Republic's collapse, the rise of Islam in the 7th century, the Industrial Revolution, the World Wars, the Cold War's end, 9/11; each was substantially missed by previously-dominant frameworks. Your committed framework might be exactly the framework that misses the next major turning point. Maybe the honest position at this distance from the future is 'I'll watch carefully without committing to one framework as primary, because committing in advance to one framework is exactly what makes major turning points invisible.'"`,
            promptInstruction: `In 5-6 sentences, respond. Does your committed framework survive the counterargument about turning-point blindness? What's the case for committing despite the risk?`,
          },
          reflectionPrompt: `Looking at the position you didn't commit to: which position has the strongest argument for what your committed framework misses? Where do your priors (family, country, what this band emphasized) shape which framework felt natural to commit to?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the progressive position on history's trajectory?`,
              options: [
                `Random`,
                `Defenders: Steven Pinker "The Better Angels of Our Nature" 2011 + "Enlightenment Now" 2018; Peter Singer "The Expanding Circle" 1981; Hans Rosling "Factfulness" 2018. Argument: violence per capita has declined substantially across centuries; life expectancy/literacy/extreme poverty have improved dramatically; moral circle has expanded to progressively wider groups (Singer's "expanding circle" framework: family → tribe → nation → species → all sentient beings). Trajectory: improvement continues; backlash and reversal happen but long-term direction is positive. Critique: data selection contested; substantially Western-centers progress; weak framework for catastrophic risks.`,
                `Just optimism`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Naming specific defenders and the framework is the work. The progressive position has substantial aggregate data even where the framing is contested. Engaging it seriously means engaging both the data and the critiques.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the democratic-erosion position and what mechanisms does it identify?`,
              options: [
                `Random`,
                `Defenders: Steven Levitsky + Daniel Ziblatt "How Democracies Die" 2018 + "Tyranny of the Minority" 2023; Anne Applebaum "Twilight of Democracy" 2020; Larry Diamond "Ill Winds" 2019; Yascha Mounk "The People vs. Democracy" 2018. Argument: 20th-century democratic gains are eroding through specific mechanisms: democratic backsliding under elected leaders (Orbán Hungary 2010+, PiS Poland 2015-2023, Erdoğan Turkey 2003+, Modi India 2014+, Bolsonaro Brazil 2018-2022, Trump US 2016+2024); authoritarian states' increased confidence (China under Xi, Russia under Putin); democratic publics' apparent openness to authoritarian rhetoric. Critique: backlash to democracy has happened repeatedly without producing permanent reversal; current authoritarianism faces substantial resistance and may not consolidate; framing centers Western democracies' self-understanding.`,
                `Just decline`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The democratic-erosion position is precise about mechanisms: naming the specific leaders and the specific countries makes the position empirically engageable. Levitsky/Ziblatt's framework on how democracies die through specific identifiable patterns is foundational comparative political science.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the civilizational position (Huntington 1996)?`,
              options: [
                `Random`,
                `Defenders: Samuel Huntington "The Clash of Civilizations and the Remaking of World Order" 1996 + subsequent intellectual descendants. Argument: future is conflict between civilizations rather than convergence. Cultural and religious differences substantially organize world politics. Huntington named civilizations: Western, Sinic/Chinese, Islamic, Hindu, Orthodox, African, Latin American, Japanese. Trade and integration don't dissolve these differences; they may intensify them by making contact more frequent. Trajectory: civilizational fault lines (US-China, Russia-Europe, Islamic world-West, Hindu-Muslim, others) substantially shape 21st century. Critique: divisions don't map cleanly onto actual cultural variation; framework essentializes internally-diverse cultures; "clash" framing can become self-fulfilling prophecy; alternative framings (multipolar accommodation; transnational identity formations) may be more accurate.`,
                `Just culture`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The civilizational position is the most contested in current scholarship but captures something real about how cultural/religious identity organizes contemporary politics in ways universalist frameworks miss. Engaging it seriously means engaging both what it gets right and what it essentializes.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the climate-as-structural-fact position?`,
              options: [
                `Random`,
                `Defenders: IPCC framework across multiple assessment reports (most recent AR6 2021-2023); David Wallace-Wells "The Uninhabitable Earth" 2019; Bill McKibben from 1989+; Naomi Klein "This Changes Everything" 2014. Argument: climate change is the structural fact that will substantially shape everything else regardless of political framings. Current trajectory: Earth warming to ~2.7°C above pre-industrial baseline by 2100 (UN Environment Programme 2024 estimate based on current policies); 1.5°C warming threshold (Paris Agreement target) substantially passed; multiple tipping points may be triggered (Amazon dieback, Greenland ice sheet collapse, West Antarctic ice sheet, ocean current disruption). Trajectory: climate impacts substantially shape migration patterns, food security, conflict zones, economic development, political stability across every region. Other positions' frameworks are real but operate within climate constraints. Critique: framing as primary obscures political agency; doomism politically demobilizing; technical solutions exist that other positions help analyze.`,
                `Just weather`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The climate position has overwhelming scientific consensus on the underlying physics while the political and economic frameworks for addressing it remain substantially contested. Naming the specific numbers (~2.7°C trajectory; tipping points) is essential.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the technological / AI position?`,
              options: [
                `Random`,
                `Defenders: Eliezer Yudkowsky and Machine Intelligence Research Institute (MIRI) since 2000; Geoffrey Hinton (resigned Google 2023, started speaking publicly on AI risk); Stuart Russell "Human Compatible" 2019; Brian Christian "The Alignment Problem" 2020; Max Tegmark "Life 3.0" 2017; Daron Acemoglu + Simon Johnson "Power and Progress" 2023 on technology's distributional effects. Argument: technological change, particularly AI development, will substantially restructure what's possible across every domain. Current AI trajectory (large language models from GPT-3.5/GPT-4 onward; multiple subsequent capability advances) may produce transformative AI systems within decades; depending on how this goes, the outcomes range from substantial human flourishing to existential catastrophe. Other technological transitions (electricity, computing, internet) have substantially restructured economic and political life within decades. Critique: technological determinism understates how political choices shape what technology becomes; specific AI risk predictions are contested; positioning technology as primary obscures the political and economic choices that produce technology.`,
                `Just AI`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The technology position has high current uncertainty about where AI specifically goes but the transformative potential is widely acknowledged across industry and academia. The shift of figures like Hinton from inside major tech companies to public AI-risk advocacy is substantial signal.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the cyclical / structural position?`,
              options: [
                `Random`,
                `Defenders: Peter Turchin and the cliodynamics field ("Ages of Discord" 2016 + "End Times" 2023); Jared Diamond various works; Ibn Khaldun (~1332-1406) "Muqaddimah" articulating cyclical pattern across Islamic and broader history; ancient Chinese dynastic-cycle framework. Argument: history follows recognizable patterns of consolidation and breakdown across centuries. Elite overproduction (more elite aspirants than elite positions) produces instability; popular immiseration (declining living standards for non-elite populations) produces unrest; cycles of stability and crisis recur across very different cultures and periods (Turchin's data across Rome, China, Russia, US in 1860s and currently). Trajectory: we're currently in a cyclical breakdown phase in multiple major societies including US; specific events that follow depend on contingent decisions but structural pattern is recognizable. Critique: framework can become deterministic; specific cycles contested in detail; different cyclical theories disagree.`,
                `Just patterns`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The cyclical position has the longest historical track record: Ibn Khaldun's framework from the 14th century continues to find new applications. Recognizing that elite overproduction and popular immiseration produce predictable instability across very different cultures is substantial framework even without committing to deterministic prediction.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Which position is most contested in current scholarship?`,
              options: [
                `Progressive`,
                `Civilizational. Huntington's 1996 framework has substantial intellectual descendants but also substantial scholarly rejection. The "clash of civilizations" framing has been criticized for: not mapping cleanly onto actual cultural variation; essentializing cultures that are themselves internally diverse; can become self-fulfilling prophecy; alternative framings (multipolar accommodation; transnational identity formations) may be more accurate. But the framework captures something real about how cultural/religious identity organizes contemporary politics in ways universalist frameworks miss. The other five positions have less unified academic opposition; civilizational is uniquely contested.`,
                `Climate`,
                `Cyclical`,
              ],
              correctIndex: 1,
              explanation: `Naming which position is most contested matters because the contestation itself is information about how seriously to take it. Civilizational has substantial defenders and substantial critics; engaging it requires holding both.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does the capstone commitment actually do for you across your adult lifetime?`,
              options: [
                `Random`,
                `Commit to one position as primary framework, not as final answer; framework for engaging what comes when it comes. Primary framework determines which signals you'll most consistently catch as adult engaging news, politics, decisions: climate-primary → climate policy priority; democratic-erosion-primary → defending democratic institutions; civilizational-primary → identity politics engagement; progressive-primary → incremental rights expansion; technology-primary → AI governance + technology policy; cyclical-primary → margin engagement + structural pattern recognition. Across adult lifetime, you'll continue revising the framework as evidence accumulates. Position you commit to today will probably look partially wrong in 10 years; historians who've predicted longest-term well have all been substantially wrong about specifics while right about general dynamics. Building framework at 12 is foundation for continued revision, not permanent positioning. Capstone-level historical thinking is permanent learning, not permanent positioning.`,
                `Just answer`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The capstone commitment is functional, not metaphysical. The framework shapes what you notice as adult engaging news and politics; building one at 12 develops capacity that compounds across decades. Recognizing that today's commitment will need revision is part of capstone-level thinking.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The capstone task is to identify the one correct position among the six.`,
              correctAnswer: false,
              explanation: `False. The capstone task is not to identify the one correct position. The capstone task is to commit to one position as primary framework for engaging history's trajectory across your adult lifetime, while engaging the other positions seriously and recognizing that your framework will need substantial revision as evidence accumulates. The six positions don't fully exclude each other; capstone-level thinking integrates multiple frameworks rather than picking one and dismissing others. Each position has serious thinkers, real evidence, and real limits. The historians who confidently predicted the "end of history" (Fukuyama 1992), the imminent collapse of capitalism, the unipolar American century have been substantially wrong; engaging where history is going requires holding probabilities and frameworks rather than certainties. Capstone-level historical thinking is permanent learning, not permanent positioning.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine yourself at 25, engaging political and economic life as a young adult. You committed to a primary framework at 12 (today). What does engaging that framework actually look like across decades, and how does it change when you encounter substantial new evidence that challenges it?`,
              options: [
                `Just thinking`,
                `Several specific things. First, your primary framework shapes what you read, watch, and engage with. Climate-primary 25-year-old will follow climate science, energy policy, climate-related migration, climate-related conflict zones. Democratic-erosion-primary 25-year-old will follow comparative politics, specific democratic backsliding cases, institutional resilience. Civilizational-primary 25-year-old will follow cultural and religious dynamics in geopolitics. Progressive-primary will follow aggregate development indicators. Technology-primary will follow AI development, biotech, technological transitions. Cyclical-primary will follow elite dynamics, popular immiseration indicators, structural patterns. Different frameworks lead to substantially different information diets, different conversations, different political engagement. Second, the framework shapes how you engage politically. As you reach voting age and across decades, your primary framework substantially determines which candidates, policies, and movements you'll prioritize. Climate-primary will prioritize climate policy in voting and advocacy. Democratic-erosion-primary will prioritize defending democratic institutions and engaging anti-authoritarian organizing. Civilizational-primary will engage cultural/religious identity politics or anti-cultural-identity politics depending on personal valence. Progressive-primary will pursue incremental rights expansion. Technology-primary will engage AI governance, biotech regulation, technology policy. Cyclical-primary will engage at margins while accepting structural patterns. Third, the framework shapes how you engage personal decisions. Career choices, family decisions, where to live, what to invest in are all shaped by which framework you think captures where things are heading. Climate-primary 25-year-old may avoid coastal property; democratic-erosion-primary may prioritize migration options or institutional jobs; technology-primary may pursue AI-adjacent career; cyclical-primary may build resilience for instability. Fourth, what happens when substantial new evidence challenges your framework. If climate becomes substantially better than IPCC trajectories suggested (rapid decarbonization succeeding faster than expected), climate-primary framework needs revision. If democracy stabilizes in major Western countries and authoritarian states' confidence reverses, democratic-erosion framework needs revision. If AI fails to produce transformative systems within 30 years, technology framework needs revision. The honest response is to update the framework based on evidence rather than defending the original commitment. Some people defend their original framework against accumulating contrary evidence ("motivated reasoning"); the better response is genuine update. Fifth, the framework provides continuity across decades even as specific evidence shifts. Your 12-year-old commitment to climate-primary framework provides organizing structure for engaging climate developments across your 20s, 30s, 40s; the specific predictions change but the framework keeps your engagement coherent. Sixth, the framework is also a community. People who hold similar frameworks tend to be part of overlapping intellectual and political communities; your commitment substantially shapes who you'll be in conversation with as adult. Climate-primary communities, democratic-erosion-primary communities (think tanks, journalists, organizations), civilizational-primary communities, technology-primary AI safety/governance communities, cyclical-primary communities (Turchin's cliodynamics network, broader structuralist work) all exist and shape the engagement. Seventh, what to do practically now: notice which signals you naturally catch in news; that pattern is information about which framework is actually operating for you. Pay attention to the dimensions other frameworks emphasize that you don't naturally notice; that gap is information about what your framework misses. Read substantial work in your primary framework but also occasional substantial work in the other frameworks. Engage with people who hold different frameworks seriously. The capstone commitment isn't permanent positioning; it's foundation for sustained engagement with history's unfolding across the rest of your life.`,
                `Random`,
                `Just maybe`,
              ],
              correctIndex: 1,
              explanation: `Capstone-level applied historical thinking. The framework you commit to today substantially shapes your information diet, political engagement, personal decisions, communities, and capacity to revise as evidence accumulates. Engaging the framework across decades is the actual work; capstone commitment at 12 develops the framework for that engagement. This is the kind of thinking the band was building toward.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved. This is the capstone reflection.`,
          prompts: [
            { id: `reflect-primary`, category: `Your primary framework`, prompt: `Why did you commit to the framework you picked? What about this band specifically (which lessons, which framings) shaped that commitment? What would change it in coming years?` },
            { id: `reflect-counterargument`, category: `Turning-point blindness`, prompt: `The counterargument warned that committing to a primary framework risks missing the next major turning point exactly because previously-dominant frameworks have missed every previous one. How do you sit with this risk while still committing?` },
            { id: `reflect-band`, category: `Across the band`, prompt: `What did this band's 20 lessons substantially change about how you read history? Which lessons most shaped you? Which lessons did you find most challenging or surprising?` },
            { id: `reflect-self`, category: `Who you've become`, prompt: `Across 20 identity-hook prompts in this band, what kind of person are you becoming as a historian and citizen? What does engaging history at this level mean for your sense of yourself and your political agency?` },
            { id: `reflect-twenty-years`, category: `Yourself at 32`, prompt: `Imagine yourself at 32, 20 years after committing to this framework. The world will have substantially changed in ways you can't predict from here. What stays useful from this framework? What needs to substantially update?` },
            { id: `reflect-band-completion`, category: `Capstone completion`, prompt: `You've finished the band. What stays with you? What questions do you carry forward? What do you want to engage more deeply across your adult lifetime?` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Capstone completion. The framework you've built across 20 lessons is foundation for engagement across decades. Two paths beyond the lesson.`,
          familyActivity: {
            title: `Family Capstone Conversation`,
            duration: `90 minutes`,
            description: `Share the capstone framework with your family. Most adults haven't built deliberate framework for engaging history's trajectory; many hold one of the six positions implicitly without recognizing it as one position among several. The conversation often surfaces what frameworks family members are operating from. For Colombian and Latin American families specifically, family experience with dictatorship, democracy restoration, migration, current political dynamics offers concrete material for engaging each position. Discussion can productively complicate any single framework. If older family members lived through Cold War, post-Cold War, or current dynamics, their generational perspectives offer substantial reference for engaging the trajectory question.`,
          },
          projectOption: {
            title: `Sustained Engagement Project, 12 weeks (optional capstone project)`,
            duration: `12 weeks, ~60 minutes per session`,
            description: `Pick one major figure from this band's references (any across all 20 lessons) for sustained study. Suggestions from this lesson specifically: Pinker, Singer, Rosling for progressive; Levitsky+Ziblatt, Applebaum, Mounk for democratic erosion; Huntington for civilizational; IPCC framework via Wallace-Wells or McKibben for climate; Russell, Hinton, Tegmark for technology; Turchin or Ibn Khaldun for cyclical. Alternative: pick a major work from any band lesson (Hilberg or Levi from L09; Adichie's TED talk from L15; Lerner from L18; UDHR from L19; multiple others). Across 12 weeks: read the work substantially; engage critiques; develop your own position on what the work gets right and wrong; write 4,000 words integrating your reading with the framework from this band. This is the kind of sustained engagement that builds substantive historical thinking across decades.`,
            offerToParent: `Parent: opt your kid into the capstone project. Sustained engagement with one major work at 12-13 builds methodological substance that compounds across academic and civic life. The 12-week project is more demanding than weekly homework; design accordingly.`,
          },
          identityQuestion: `Across 20 lessons and 20 identity-hook responses, who have you been becoming? What does it mean to be someone who engages history at the level this band has developed? How will that capacity shape your adult lifetime?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who is the band making you?`,
          prompt: `One sentence. This is the capstone identity hook. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who engages history's trajectory across six serious positions without committing to false certainty.`,
            `A person who can name what's worth paying attention to across decades because of the framework I've built.`,
            `Someone who recognizes that capstone-level thinking is permanent learning, not permanent positioning.`,
          ],
          saveKey: `identity_responses_hw_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You finished the History and World Voyager band. Twenty lessons. The work is real, and it's done. You have framework for six positions on history's trajectory: progressive (Pinker, Singer, Rosling); democratic-erosion (Levitsky-Ziblatt, Applebaum, Diamond, Mounk); civilizational (Huntington 1996 and successors); climate-as-structural (IPCC AR6, Wallace-Wells, McKibben, Klein); technological/AI (Yudkowsky/MIRI, Hinton, Russell, Christian, Tegmark, Acemoglu-Johnson); cyclical (Turchin cliodynamics, Ibn Khaldun, dynastic frameworks). You've committed to one as primary framework while engaging the others seriously. Across the band: philosophy of history; historiography; power; economic systems; political ideologies; revolutions; imperialism; genocide; the Holocaust; the nuclear age; the Cold War; post-Cold War; the Middle East; China's rise; Africa; Latin America; Indigenous peoples; women in history; human rights. You can name specific scale (12.5M trans-Atlantic slave trade; 6M Holocaust Jewish victims; 5M Second Congo War; ~12,500 nuclear weapons globally; ~$3-6T Iraq War cost; ~10M displaced Ukrainians). You can name specific scholars across multiple traditions (Trouillot, Zinn, Carr, Hilberg, Friedländer, Browning, Hasegawa, Westad, Adichie, Lerner, Crenshaw, Mahbubani, multiple others). You can apply Adichie's single-story framework across multiple domains. You can read source quality across three tiers. You can engage perspectives seriously without committing to one. You can build case studies and weigh competing options. You can articulate your own position with evidence and respond to counterarguments. The framework you've built will shape your adult lifetime; you'll revise it across decades as evidence accumulates; you'll keep the capacity to engage history seriously regardless of what specific frameworks become dominant. The band's done. The work continues. Onward, {name}. — Lyra`,
          badge: `history-voyager-capstone`,
          badgeName: `History Voyager Capstone`,
          xpEarned: 100,
          competencies: [
            `Articulates six positions on history's trajectory (progressive, democratic-erosion, civilizational, climate, technology/AI, cyclical) with defenders and key works`,
            `Commits to primary framework while engaging other positions seriously`,
            `Integrates evidence from across 20 lessons in building case for primary framework`,
            `Responds to counterargument about turning-point blindness`,
            `Recognizes capstone commitment as foundation for continued revision across adult lifetime, not permanent positioning`,
            `Names substantial scholars and works across all six traditions (Pinker, Levitsky-Ziblatt, Huntington, IPCC, Hinton, Turchin, and others)`,
            `Integrates band's themes (philosophy, historiography, imperialism, genocide, nuclear age, Cold War, post-Cold War, regional studies, Indigenous, women, human rights) into capstone framework`,
            `BAND COMPLETION: 20 of 20 History and World Voyager lessons engaged`,
          ],
          nextLessonPreview: {
            title: `Band complete`,
            hook: `History and World Voyager band finished. 20 lessons. The work continues across your lifetime.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const positions = l.screens.find((s) => s.type === `argument-builder`)?.positions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L20 CAPSTONE ${VERSION}] "${l.title}" mags=${mags} pos=${positions} ev=${argEvi} q=${quiz} r=${reflect} XP=${l.xpReward} dur=${l.duration}`
  );
}
