// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L02 — Historiography: Who Writes History?
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Historiography, Source Evaluation Applied to History
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (multi-perspective scholarly / national textbook / viral revisionist)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l02-v1";

const HISTORY_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-02`,
      title: `Historiography: Who Writes History?`,
      duration: 35,
      xpReward: 75,
      badge: `historiography-literate`,
      badgeName: `Historiography Literate`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson we worked through how we know the past in principle. Today we examine who actually writes history in practice. The slogan "history is written by the victors" gets at something real but misses what's also true: history is also written by women, by colonized peoples, by ordinary workers, by indigenous communities, by everyone with reasons to record and means to preserve. The question isn't just "who has been heard?" but "who's heard now, who's still excluded, and what does paying attention to whose voice it is do to what we know?" Three serious tiers of historical sources will be evaluated. The skill builds directly from L14 in Life Wellness on source evaluation, applied to history specifically.`,
          headline: `Who Writes History?`,
          subtitle: `Three tiers of historical sources and voices. Source evaluation applied to history.`,
          visual: `/voyager-assets/history/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `"Great Man" History And Its Limits`,
          paragraphs: [
            `For most of the time that history has been a formal discipline, it focused on a narrow class of subjects: kings, generals, presidents, popes, philosophers, statesmen. Thomas Carlyle's 1840 lecture "On Heroes, Hero-Worship, and the Heroic in History" gave the position its classic name: "the history of the world is but the biography of great men." History was the story of exceptional individuals whose decisions and actions shaped events for everyone else.`,
            `What this framework included. Battles and their commanders. Court politics and royal succession. Treaties and the diplomats who negotiated them. Religious leaders and the doctrines they promulgated. Inventors and the inventions credited to them. Intellectual figures and the ideas attributed to them. The texture of history was prominent individuals making consequential choices.`,
            `What it largely excluded. Daily life of ordinary people. Women, who were rarely allowed positions of formal power and were systematically excluded from being subjects of history. Enslaved and conquered peoples, whose perspectives appeared only as silent backgrounds to the actions of their rulers. Peasants and workers, whose labor sustained everything but whose lives were considered too ordinary to record. Indigenous peoples encountered by European expansion, who appeared in European chronicles but rarely as historical actors in their own right. The "history of the world" was substantially the history of a particular slice of humanity.`,
            `Why this framework dominated for so long. It matched the surviving evidence (records about elites survived better than records about ordinary people). It matched the values of the academic class doing the writing (mostly elite European men trained in classical traditions). It matched the political function of history (legitimating current power structures often required telling stories about great founders, great rulers, great traditions). The framework wasn't just an intellectual choice; it was embedded in institutions and interests.`,
            `What started changing. The Annales school in early-20th-century France (Marc Bloch, Lucien Febvre, later Fernand Braudel) shifted attention to social and economic structures, climate, demography (what Braudel called "the longue durée") of slow-moving forces. Marxist historians (E.P. Thompson's "The Making of the English Working Class" 1963, Eric Hobsbawm's "Age of Revolution" trilogy 1962-1987) put workers and class struggle at the center. The "history from below" movement deliberately recovered the lives and perspectives of ordinary people. Women's history (Joan Wallach Scott, Gerda Lerner, Natalie Zemon Davis) examined women's actual roles and the gendered structures of power. Each shift expanded what counted as historical subject matter and who counted as a historical actor.`,
          ],
          image: `/voyager-assets/history/l02-s1-great-man.webp`,
          imageCaption: `Carlyle's "great man" framework (1840). Excluded daily life, women, enslaved/conquered, peasants, indigenous. Annales school (Bloch, Febvre, Braudel) shifted to social/economic. Marxist historians (Thompson, Hobsbawm). Women's history (Scott, Lerner, Davis).`,
          vocab: [
            {
              word: `that followed`,
              definition: `Framework dominant for most of formal history: focus on kings, generals, presidents, popes, philosophers; Carlyle's 1840 lecture gave classic statement. Excluded daily life, women, enslaved/conquered peoples, peasants, indigenous peoples. Dominated because it matched surviving evidence, values of elite academic class, political function of legitimating power. Shifts: Annales school (Bloch, Febvre, Braudel) to social/economic structures and "longue durée." Marxist historians (E.P. Thompson "Making of the English Working Class" 1963, Hobsbawm "Age of Revolution" trilogy 1962-1987) on workers and class. "History from below" movement. Women's history (Joan Wallach Scott, Gerda Lerner, Natalie Zemon Davis).`,
              audioPrompt: `"Great man" history is what dominated the formal discipline for most of its existence, {name}. Thomas Carlyle's 1840 lecture "On Heroes, Hero-Worship, and the Heroic in History" gave the position its classic name. "The history of the world is but the biography of great men." History was the story of exceptional individuals whose decisions shaped events for everyone else. What this framework included: battles and their commanders, court politics, treaties, religious leaders, inventors, intellectual figures. What it largely excluded: daily life of ordinary people, women, enslaved and conquered peoples, peasants and workers, indigenous peoples encountered by European expansion. The "history of the world" was substantially the history of a particular slice of humanity. Why this framework dominated: it matched the surviving evidence, the values of the academic class doing the writing, and the political function of legitimating current power structures. Specific shifts came later. The Annales school in early-20th-century France (Marc Bloch, Lucien Febvre, Fernand Braudel) shifted attention to social and economic structures. Marxist historians like E.P. Thompson and Eric Hobsbawm put workers and class struggle at the center. Women's history examined gendered structures of power.`,
            },
            {
              word: `longue durée`,
              definition: `Fernand Braudel's term for the slow-moving forces (climate, demography, economic structures, geography) that shape history across centuries, as opposed to the short-term events and political actions that dominate traditional historical narratives.`,
              audioPrompt: `Longue durée is Fernand Braudel's term for one of the most important shifts in historical thinking, {name}. Braudel was the most prominent figure in the Annales school of early-20th-century France, and his concept of the longue durée, meaning long duration, directed historians' attention toward slow-moving forces: climate, demography, economic structures, geographic constraints. These forces shape what is possible for any particular generation of actors, and they change across centuries rather than decades. Traditional "great man" history focused on events: battles, treaties, the decisions of specific rulers. Braudel argued that these events are like foam on the surface of the sea; the deeper currents are the long-term structures that make certain events possible and others impossible. His monumental work "The Mediterranean" from 1949 used decades of records to reconstruct economic and ecological history across centuries, examining how the physical geography of the Mediterranean world shaped its civilizations in ways no single ruler or decision could override. The Annales school, which also included Marc Bloch and Lucien Febvre, used quantitative records such as parish registers, tax records, and climate data to reconstruct everyday life and long-term structures. Women's history scholars (Joan Wallach Scott, Gerda Lerner, Natalie Zemon Davis) applied similar structural analysis to the gendered organization of power that shaped women's lives across centuries.`,
            },
            {
              word: `women's history`,
              definition: `A historiographical movement that examined women's actual roles in history and the gendered structures of power that shaped their lives. Scholars including Joan Wallach Scott, Gerda Lerner, and Natalie Zemon Davis expanded what counted as historical subject matter.`,
              audioPrompt: `Women's history as a distinct historiographical movement represents one of the important expansions of what counts as historical subject matter, {name}. For most of the time that history has been a formal discipline, it focused on a narrow class of subjects: kings, generals, presidents, popes, philosophers, statesmen. Women, who were rarely allowed positions of formal power, were systematically excluded from being subjects of history; they appeared mostly as wives, mothers, or victims in relation to male actors. Women's history scholars including Joan Wallach Scott, Gerda Lerner, and Natalie Zemon Davis examined women's actual roles in the full range of historical activity and the gendered structures of power that shaped their lives. This required not just adding women to existing narratives but rethinking what counted as historically significant. Domestic labor, reproduction, informal economic activity, religious practice, and community organization all required new frameworks to be seen as historical at all. The Annales school's method of using parish records and demographic data made some of this visible; the specific attention of women's history scholars extended it. Natalie Zemon Davis's "The Return of Martin Guerre" from 1983 reconstructed 16th-century peasant village life in ways that made women's experience visible alongside men's. Each shift in what counted as historical subject matter (from "great men" to Annales social history, to Marxist class history, to women's history, to history from below) expanded who could be a historical actor.`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `History From Below And Subaltern Studies`,
          paragraphs: [
            `One of the most influential shifts in late-20th-century historiography was the deliberate attempt to recover history from the perspective of people previously excluded as subjects: workers, women, colonized peoples, enslaved peoples, peasants, the urban poor. The movement went by various names ("history from below," "social history," "subaltern studies") but shared the conviction that history written only from elite perspectives wasn't just incomplete but distorted.`,
            `The method problem. If your evidence is mostly elite, how do you reconstruct the perspectives of people who left few records? Several approaches emerged. Reading elite sources against the grain: looking for what the elite said about the non-elite, which inadvertently preserves information about them. Court records, especially of ordinary crimes, which often preserve voices of accused, witnesses, victims who weren't otherwise recorded. Parish records, tax rolls, conscription records: bureaucratic documents that recorded ordinary people for administrative reasons. Oral history methodically collected. Archaeology of everyday spaces (homes, workshops, gravesites) rather than just monumental architecture. Letters, diaries, and personal documents when they survived.`,
            `Specific work. Carlo Ginzburg's "The Cheese and the Worms" (1976) reconstructed the worldview of a 16th-century Italian miller (Menocchio) executed for heresy, using inquisition records. The book demonstrated that ordinary people had complex cosmologies (not just absorbing elite ideas but constructing their own), recoverable through careful work with available sources. Natalie Zemon Davis's "The Return of Martin Guerre" (1983) reconstructed a 16th-century village mystery to illuminate ordinary peasant life. E.P. Thompson's "The Making of the English Working Class" (1963) is widely considered the foundational work of "history from below" in English.`,
            `Subaltern Studies specifically. The Subaltern Studies group emerged in India in the 1980s (Ranajit Guha, Dipesh Chakrabarty, Gayatri Spivak as critical interlocutor) to recover the history of Indian peasants, workers, women, and tribal peoples whose perspectives were absent from both colonial British historiography and post-independence elite-Indian nationalist historiography. The group's work demonstrated that both colonial and nationalist histories systematically excluded the same people; "subaltern" came to mean those whose history is excluded by dominant historiographies of any kind.`,
            `Indigenous historiography. Indigenous historians and historiographers (Linda Tuhiwai Smith "Decolonizing Methodologies" 1999; Vine Deloria Jr.; Roxanne Dunbar-Ortiz "An Indigenous Peoples' History of the United States" 2014) have argued that indigenous history requires not just including indigenous voices in standard frameworks but examining how the frameworks themselves were built on assumptions hostile to indigenous knowledge. Oral traditions, relationships with land, ceremonial knowledge, and other indigenous epistemologies aren't "sources" for academic historians to mine; they're alternative ways of knowing the past.`,
            `What this movement contributed. Method for recovering excluded perspectives. Recognition that "history" itself was constructed with specific exclusions, not just incidentally lacking voices. Specific work that changed what we know (Thompson's working class, Davis's peasants, Ginzburg's miller, the Indian subaltern, indigenous histories) has substantially shifted historiography even where it hasn't fully replaced traditional framings.`,
          ],
          image: `/voyager-assets/history/l02-s2-from-below.webp`,
          imageCaption: `History from below. Carlo Ginzburg "The Cheese and the Worms" (1976). Natalie Zemon Davis "Return of Martin Guerre" (1983). E.P. Thompson "Making of English Working Class" (1963). Subaltern Studies (Guha, Chakrabarty, Spivak). Indigenous historiography (Smith, Deloria, Dunbar-Ortiz).`,
          vocab: [
            {
              word: `subaltern studies`,
              definition: `Late-20th-century historiographical movements recovering history from previously excluded perspectives: workers, women, colonized, enslaved, peasants, urban poor. Methods: reading elite sources against the grain, court records, parish/tax records, oral history, archaeology of everyday spaces. Specific work: Carlo Ginzburg "The Cheese and the Worms" 1976 (16th-century Italian miller's cosmology); Natalie Zemon Davis "Return of Martin Guerre" 1983 (16th-century peasant village); E.P. Thompson "Making of English Working Class" 1963 (foundational). Subaltern Studies group in India 1980s (Ranajit Guha, Dipesh Chakrabarty, Gayatri Spivak): subaltern means those excluded by dominant historiographies of any kind, colonial or nationalist. Indigenous historiography (Linda Tuhiwai Smith "Decolonizing Methodologies" 1999, Vine Deloria Jr., Roxanne Dunbar-Ortiz "An Indigenous Peoples' History of the United States" 2014): indigenous epistemologies aren't sources to mine but alternative ways of knowing.`,
              audioPrompt: `History from below and subaltern studies are among the most influential shifts in late-20th-century historiography, {name}. The deliberate attempt to recover history from the perspective of people previously excluded as subjects: workers, women, colonized peoples, enslaved peoples, peasants, the urban poor. The movement went by various names ("history from below," "social history," "subaltern studies") but shared the conviction that history written only from elite perspectives wasn't just incomplete but distorted. Carlo Ginzburg's "The Cheese and the Worms" from 1976 reconstructed the worldview of a 16th-century Italian miller named Menocchio executed for heresy, using inquisition records. Natalie Zemon Davis's "The Return of Martin Guerre" from 1983 reconstructed a 16th-century village mystery to illuminate ordinary peasant life. E.P. Thompson's "The Making of the English Working Class" from 1963 is widely considered the foundational work of history from below. The Subaltern Studies group emerged in India in the 1980s (Ranajit Guha, Dipesh Chakrabarty, Gayatri Spivak) to recover the history of Indian peasants, workers, women, and tribal peoples whose perspectives were absent from both colonial British historiography and post-independence elite-Indian nationalist historiography. Indigenous historians like Linda Tuhiwai Smith have argued that indigenous epistemologies aren't sources for academic historians to mine; they're alternative ways of knowing the past.`,
            },
            {
              word: `reading against the grain`,
              definition: `A method for recovering the perspectives of people who left few records by examining what elite sources reveal inadvertently about the non-elite: what rulers said about their subjects, what courts recorded about ordinary accused and witnesses.`,
              audioPrompt: `Reading against the grain is one of the core methods historians of the non-elite developed to recover perspectives that left few direct records, {name}. If your evidence is mostly elite, how do you reconstruct the perspectives of people who rarely wrote? One approach is reading elite sources against the grain: looking for what the elite said about the non-elite, which inadvertently preserves information about them even when that was not the document's purpose. A royal decree suppressing a peasant revolt tells you something about peasant revolt even though it was written to end it. An inquisition record documents the beliefs of the accused even though it was created to prosecute them. Court records, especially of ordinary crimes, often preserve voices of accused, witnesses, and victims who were not otherwise recorded anywhere. Carlo Ginzburg's "The Cheese and the Worms" from 1976 used this method brilliantly: the inquisition records of a 16th-century Italian miller named Menocchio, created to document his heresy and secure his execution, inadvertently preserved a detailed account of his cosmology. Ginzburg demonstrated that ordinary people had complex worldviews, not just absorbing elite ideas but constructing their own, recoverable through careful work with available sources. Other methods for recovering excluded perspectives include parish records, tax rolls, and conscription records as bureaucratic documents that recorded ordinary people for administrative reasons; oral history methodically collected; and archaeology of everyday spaces such as homes, workshops, and gravesites.`,
            },
            {
              word: `indigenous historiography`,
              definition: `A historiographical tradition arguing that indigenous history requires not just including indigenous voices but examining how standard academic frameworks were built on assumptions hostile to indigenous knowledge, treating oral traditions and other epistemologies as alternatives rather than mere sources.`,
              audioPrompt: `Indigenous historiography represents one of the most fundamental challenges to standard academic frameworks, {name}. Indigenous historians and historiographers including Linda Tuhiwai Smith in "Decolonizing Methodologies" from 1999, Vine Deloria Jr., and Roxanne Dunbar-Ortiz in "An Indigenous Peoples' History of the United States" from 2014 have argued that indigenous history requires not just including indigenous voices in standard frameworks but examining how the frameworks themselves were built on assumptions hostile to indigenous knowledge. Oral traditions, relationships with land, ceremonial knowledge, and other indigenous epistemologies aren't simply "sources" for academic historians to mine; they're alternative ways of knowing the past. This is a significant challenge to the academic historiographical tradition, including the history-from-below movements. The Subaltern Studies group emerged in India in the 1980s with Ranajit Guha, Dipesh Chakrabarty, and Gayatri Spivak as critical interlocutor, to recover the history of Indian peasants, workers, women, and tribal peoples whose perspectives were absent from both colonial British historiography and post-independence elite-Indian nationalist historiography. The group's work demonstrated that both colonial and nationalist histories systematically excluded the same people; "subaltern" came to mean those whose history is excluded by dominant historiographies of any kind, colonial or nationalist. Indigenous historiography extends this insight to question whether academic historiography itself, even in its most inclusive forms, can do justice to peoples whose ways of knowing the past operate on fundamentally different principles.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `National Histories And Their Politics`,
          paragraphs: [
            `Most history that most students encounter most of the time isn't academic historiography. It's national history: the stories countries tell about themselves through textbooks, public monuments, museums, holidays, civic ritual. These narratives are intensely political: they shape national identity, justify current arrangements, frame relationships with other countries, and pass values across generations. Examining how national histories work is essential to understanding "who writes history" in practice.`,
            `Specific patterns. National histories generally tell origin stories that legitimate current borders and institutions. They emphasize national heroes and downplay national villains, even when the historical record includes both. They frame conflicts in ways favorable to the country telling the story. They include accomplishments and exclude embarrassments. They use specific categories (us/them, ours/theirs, civilized/uncivilized in older versions) that frame relations in particular ways. They emphasize certain regions, ethnicities, religions, and political traditions within the country at the expense of others.`,
            `Examples across countries. US history textbooks have historically emphasized founding fathers, westward expansion as positive, and "from struggle to greatness" narratives; minimized slavery, treatment of Indigenous peoples, and ongoing inequality. The "textbook wars" in the US (1925 Scopes trial, 1980s culture wars, recent debates about 1619 vs 1776 framings, ongoing state-by-state textbook fights) reflect that what gets taught is politically contested. Soviet history textbooks across the 20th century rewrote events as leadership and political situation changed; figures who were heroes one decade were erased the next. Japanese textbooks have been internationally criticized for downplaying Imperial Japanese atrocities during WWII (Nanjing Massacre, comfort women, Unit 731). Chinese textbooks emphasize "century of humiliation" framing of 19th-21st century history and "national rejuvenation" framing of current government. Turkish textbooks have historically denied the Armenian genocide. Each country's textbooks involve specific political work; the patterns are universal even where specific content varies.`,
            `Why this matters. Most adults' working understanding of history comes from textbooks they read in school combined with national narrative absorbed from media, monuments, and civic ritual. This understanding is rarely examined as the political construction it is. Most people don't know that their national history is one of many possible framings; they experience it as "what happened." When they encounter other countries' national histories that conflict with theirs, the conflict feels like one country lying rather than as different political constructions of contested events.`,
            `What changes when textbooks are revised. The "textbook wars" (fights over what gets included, how events are framed, which figures are named) are about national identity, not just historical accuracy. When Texas textbooks emphasize Confederate leaders' positive qualities, when California textbooks emphasize indigenous perspectives, when state-by-state standards diverge across the US, these are political decisions about what story the country tells itself. Similar fights happen in most countries about most contested histories.`,
            `Examining your own national history. The framework you've built (past vs history, evidence and perspective, well-supported vs speculative) applies to the national history you've absorbed. What's the framing? Whose perspective dominates? What's emphasized and what's minimized? What categories structure the narrative? What evidence supports specific claims? This isn't unpatriotic; it's the kind of examination that mature engagement with national history requires.`,
          ],
          image: `/voyager-assets/history/l02-s3-national-histories.webp`,
          imageCaption: `National histories: origin stories, heroes/villains framing, accomplishments/embarrassments selection, us/them categories. US "textbook wars" (1619 vs 1776, state-by-state). Japanese textbooks (Nanjing, comfort women). Chinese "century of humiliation." Turkish denial of Armenian genocide.`,
          vocab: [
            {
              word: `their politics`,
              definition: `Most history most students encounter isn't academic historiography; it's national history through textbooks, monuments, museums, holidays, civic ritual. Intensely political: shapes national identity, justifies current arrangements, frames relationships with other countries, passes values across generations. Patterns: origin stories legitimating current borders; heroes and villains framing; selection of accomplishments and embarrassments; specific categories (us/them, ours/theirs); regional/ethnic/religious/political emphasis at expense of others. Examples: US "textbook wars" (1619 vs 1776 framings; state-by-state debates); Soviet rewriting; Japanese WWII downplay (Nanjing, comfort women, Unit 731); Chinese "century of humiliation" framing; Turkish denial of Armenian genocide. Most adults' working history is national narrative experienced as "what happened" without examination.`,
              audioPrompt: `National histories and their politics shape most adults' working understanding of history, {name}. Most history that most students encounter most of the time isn't academic historiography. It's national history: the stories countries tell about themselves through textbooks, public monuments, museums, holidays, civic ritual. These narratives are intensely political. They shape national identity, justify current arrangements, frame relationships with other countries, and pass values across generations. Specific patterns: national histories generally tell origin stories that legitimate current borders and institutions. They emphasize national heroes and downplay national villains, even when the historical record includes both. They frame conflicts in ways favorable to the country telling the story. They include accomplishments and exclude embarrassments. Examples across countries: US history textbooks have historically emphasized founding fathers, westward expansion as positive, and "from struggle to greatness" narratives; minimized slavery, treatment of Indigenous peoples, and ongoing inequality. Japanese textbooks have been internationally criticized for downplaying Imperial Japanese atrocities during WWII including the Nanjing Massacre and comfort women. Chinese textbooks emphasize "century of humiliation" framing of 19th-21st century history. Turkish textbooks have historically denied the Armenian genocide.`,
            },
            {
              word: `textbook wars`,
              definition: `Ongoing political fights about what gets included in national history textbooks, how events are framed, and which figures are named. These fights are about national identity and political values, not just historical accuracy.`,
              audioPrompt: `Textbook wars are the specific political fights that reveal how intensely contested national history is, {name}. In the United States alone these have been recurring since the 1925 Scopes trial over what could be taught in science classrooms, through the 1980s culture wars over what history to include, through recent debates about 1619 versus 1776 framings of American history, through ongoing state-by-state textbook fights that produce substantially different curricula in different states. These fights reflect that what gets taught is politically contested. When Texas textbooks emphasize Confederate leaders' positive qualities, when California textbooks emphasize indigenous perspectives, when state-by-state standards diverge across the US, these are political decisions about what story the country tells itself. The pattern is universal across countries. Soviet history textbooks across the 20th century rewrote events as leadership and political situation changed; figures who were heroes one decade were erased the next. Japanese textbooks have been internationally criticized for downplaying Imperial Japanese atrocities during WWII, specifically the Nanjing Massacre, the comfort women system, and Unit 731 biological warfare experiments. Chinese textbooks emphasize the "century of humiliation" framing of 19th- and 21st-century history and "national rejuvenation" framing of the current government. Turkish textbooks have historically denied the Armenian genocide. The pattern in each case is the same: what is included, what is excluded, and how events are framed involves political work even when the textbooks are written by credentialed historians.`,
            },
            {
              word: `national narrative`,
              definition: `The story a country tells about itself through textbooks, monuments, museums, holidays, and civic ritual. Most adults experience their national narrative as simply "what happened" rather than as a political construction with specific framings and exclusions.`,
              audioPrompt: `National narrative is what most adults absorbed in school and never examined as the political construction it is, {name}. The stories countries tell about themselves through textbooks, public monuments, museums, holidays, and civic ritual are not neutral accounts of what happened. They are carefully assembled constructions with specific purposes: shaping national identity, justifying current arrangements, framing relationships with other countries, and passing values across generations. Most students learn their national history as if it equaled the past itself, as if textbooks contained what happened rather than one specific framing of selected events. This produces specific errors: thinking the framing you absorbed is the only or right one, thinking embarrassments absent from the textbook did not occur, thinking the national heroes emphasized are the full story of the period they represent. When adults from different countries encounter each other's national narratives about events that involved both countries, the conflict feels like one country lying rather than as two different political constructions of contested events. Both are actually political constructions; the difference is which political interests shaped the selection and framing. The framework you've built across this lesson, asking whose perspective dominates, what's emphasized and what's excluded, what evidence supports specific claims, applies directly to examining national narrative critically. This is not unpatriotic; it is the kind of examination that mature engagement with national history requires.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Good Historiography Looks Like Now`,
          paragraphs: [
            `Current academic historiography has substantially absorbed lessons from the shifts of the past century. Good historiography now generally combines several features that earlier work often lacked: multiple perspectives integrated rather than additive; primary sources from multiple cultural traditions where possible; explicit acknowledgment of the historian's situation; quantitative methods combined with narrative; attention to who's missing from the record and what the absence means.`,
            `Specific features of strong current work. Multiple-perspective synthesis. A serious history of European colonization of the Americas now generally integrates archaeology, European chronicles, indigenous oral traditions (where preserved), demographic data, and explicit attention to whose perspective is being centered at any given point. Compare Charles Mann's "1491" (2005) and "1493" (2011) to mid-20th-century histories of "the Age of Exploration"; Mann's work substantially shifts what we know about pre-Columbian Americas and the actual effects of contact, partly by taking indigenous sources and archaeology seriously rather than treating European sources as default.`,
            `Quantitative methods. Cliometrics (econometric history) and digital humanities have made it possible to ask questions that earlier historians couldn't: How big was the Atlantic slave trade? (Slave Voyages database: substantially larger than earlier estimates suggested.) What was the population of the pre-Columbian Americas? (Quantitative methods support estimates of 50-100 million, dramatically higher than older estimates of 8-10 million.) How did the Black Death actually affect Eurasia? (Tree-ring data, isotope analysis, genetic studies have refined estimates.) Methods that weren't available a generation ago have transformed specific debates.`,
            `Comparative and connected history. Sebastian Conrad's "What Is Global History?" (2016) and the Pomeranz "Great Divergence" debate are examples of methods that examine multiple regions together rather than treating each as separate. "Connected history" specifically examines how regions affected each other rather than treating them as parallel cases. This work has substantially shifted understanding of (for example) the Industrial Revolution as a global rather than purely European event, the early modern world as deeply connected rather than separate civilizations meeting only at edges.`,
            `Acknowledged perspective and politics. Current strong work generally acknowledges the perspective and political commitments of the historian rather than claiming pure neutrality. This isn't bias creeping in; it's honesty about what was always present. Howard Zinn's "A People's History of the United States" (1980) explicitly wrote from labor and working-class perspective rather than claiming neutrality; the explicit acknowledgment was clearer about what the book was than claims of "just the facts" by historians who in fact had their own perspectives.`,
            `What to look for in evaluating history. Multiple-perspective integration (not just one perspective with others as "context"). Engagement with the strongest counter-readings rather than just supportive evidence. Acknowledgment of what's still contested and what's well-supported. Use of multiple types of evidence (documents, archaeology, oral history, quantitative data). Explicit framing of the historian's situation and the work's perspective. Citation that lets readers trace claims to primary sources. These features distinguish strong work from work that mainly transmits inherited national or political narrative.`,
          ],
          image: `/voyager-assets/history/l02-s4-good-historiography.webp`,
          imageCaption: `Strong current historiography: multi-perspective synthesis, quantitative methods, comparative/connected history, acknowledged perspective. Charles Mann "1491"/"1493." Cliometrics (slave trade, pre-Columbian population). Sebastian Conrad "What Is Global History?" (2016). Howard Zinn "A People's History" (1980).`,
          vocab: [
            {
              word: `current historiography`,
              definition: `Current academic historiography has substantially absorbed lessons from past century's shifts. Strong work combines: multiple perspectives integrated (not additive); primary sources from multiple cultural traditions; explicit acknowledgment of historian's situation; quantitative methods combined with narrative; attention to who's missing from record. Specific examples: Charles Mann "1491" (2005) and "1493" (2011) integrating European, indigenous, archaeological sources. Cliometrics (Slave Voyages database, pre-Columbian population estimates, Black Death studies). Sebastian Conrad "What Is Global History?" (2016) and Pomeranz "Great Divergence" debate (comparative/connected history). Howard Zinn "A People's History of the United States" (1980): explicit perspective rather than false neutrality claim. Evaluation criteria: multi-perspective integration, engagement with strongest counter-readings, acknowledgment of contested vs settled, multiple evidence types, explicit framing, citation tracing.`,
              audioPrompt: `Strong current historiography combines several features that earlier work often lacked, {name}. Multiple perspectives integrated rather than additive. Primary sources from multiple cultural traditions where possible. Explicit acknowledgment of the historian's situation. Quantitative methods combined with narrative. Attention to who's missing from the record and what the absence means. Specific examples of strong current work: Charles Mann's "1491" from 2005 and "1493" from 2011 integrate archaeology, European chronicles, indigenous oral traditions, and demographic data. Compared to mid-20th-century histories of "the Age of Exploration," Mann's work substantially shifts what we know about pre-Columbian Americas and the actual effects of contact. Quantitative methods (cliometrics and digital humanities) have made it possible to ask questions that earlier historians couldn't. The Slave Voyages database has shown the Atlantic slave trade was substantially larger than earlier estimates suggested. Comparative and connected history (Sebastian Conrad's "What Is Global History?" from 2016) examines multiple regions together rather than treating each as separate. Current strong work generally acknowledges the perspective and political commitments of the historian rather than claiming pure neutrality.`,
            },
            {
              word: `cliometrics`,
              definition: `The use of quantitative and econometric methods in historical research. Has enabled historians to ask questions previously unanswerable, including the actual scale of the Atlantic slave trade and the pre-Columbian population of the Americas.`,
              audioPrompt: `Cliometrics is the application of quantitative and econometric methods to historical research, {name}, and it has transformed specific historical debates. Methods that weren't available a generation ago have made it possible to ask questions that earlier historians couldn't answer with any precision. How big was the Atlantic slave trade? The Slave Voyages database, built from shipping records across multiple archives, has shown it was substantially larger than earlier estimates suggested. What was the population of the pre-Columbian Americas? Quantitative methods combining multiple data sources support estimates of 50 to 100 million people, dramatically higher than older estimates of 8 to 10 million that shaped earlier textbooks including the 1990s US textbook discussed in this lesson. How did the Black Death actually affect Eurasia? Tree-ring data, isotope analysis, and genetic studies have refined estimates in ways earlier historians could not achieve. Digital humanities have extended these methods further, allowing analysis of patterns across large document collections that no individual historian could read in full. Cliometrics sits within the broader picture of what strong current historiography looks like: it is one of the quantitative methods that combine with narrative to produce multi-perspective accounts more reliable than any single approach. The Slave Voyages database in particular is a landmark example of how quantitative methods changed understanding of a major historical phenomenon in ways that also carried moral and political weight.`,
            },
            {
              word: `acknowledged perspective`,
              definition: `The practice in strong current historiography of explicitly stating the historian's political commitments and standpoint rather than claiming neutral objectivity. This is not bias creeping in; it is honesty about what was always present.`,
              audioPrompt: `Acknowledged perspective is one of the features that distinguishes strong current historiography from earlier work that claimed pure neutrality, {name}. Current strong work generally acknowledges the perspective and political commitments of the historian rather than claiming a view from nowhere. This isn't bias creeping in; it's honesty about what was always present. Howard Zinn's "A People's History of the United States" from 1980 explicitly wrote from a labor and working-class perspective rather than claiming neutrality. The explicit acknowledgment was actually clearer about what the book was doing than claims of "just the facts" made by historians who in fact had their own perspectives they didn't acknowledge. Acknowledging perspective doesn't mean any perspective is equally reliable. A historian who is explicit about writing from a labor perspective can still be held accountable to evidence; their specific empirical claims can be evaluated; their engagement with counter-readings can be assessed. What acknowledged perspective prevents is the false reassurance that comes from unacknowledged perspective: readers who don't know a historian is writing from a specific national, political, or cultural standpoint cannot account for how that standpoint shapes the selection of evidence and the framing of conclusions. When evaluating any historical source, looking for whether and how the historian acknowledges their own situation is one of the features that distinguishes strong work from work that mainly transmits inherited national or political narrative.`,
            },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Source Evaluation`,
          paragraphs: [
            `The source evaluation that follows tests whether you can identify which tier different historical sources belong to. The skill builds directly from L14 in Life Wellness on source evaluation; today you apply it specifically to history.`,
            `One framing as you evaluate. The three tiers represent different reliability levels and different appropriate uses. Tier A: multi-perspective scholarly work that explicitly engages with whose voice is included and excluded, uses primary sources from multiple cultural traditions, acknowledges its own perspective. Tier B: serious history (academic or popular) that's well-researched within a particular perspective, including most national textbooks even when they have specific political framings. Tier C: viral content, politically motivated revisionism, nationalist propaganda, content that selectively uses evidence to support predetermined narratives.`,
            `Another framing. Even Tier A sources have perspectives; the distinction isn't between perspective and no-perspective but between explicitly acknowledged perspective with multi-source method versus unacknowledged perspective dressed as objectivity. Tier B national textbooks aren't necessarily worse than Tier A scholarship for understanding the country whose textbooks they are; they tell you what story that country tells itself, but they shouldn't be confused with multi-perspective history. Tier C content often contains some real information; the problem is that the framing and selection of evidence serves predetermined ends rather than evidence-driven inquiry.`,
            `One specific framing for the band ahead. The next 18 lessons will engage genuinely contested histories: imperialism, slavery, genocide, the Holocaust in depth, the Cold War, the Middle East, China, Africa, Latin America, indigenous peoples, women's history, human rights. For each, you'll need active framework for evaluating sources. The skill being built today is one of the most consequential for the band specifically and for engaging history across decades generally.`,
            `One last framing. You're 12. Most adults around you have absorbed national histories from school combined with whatever current sources they consume; few have explicit framework for evaluating historiography. Building this framework now changes how you'll read history textbooks, news coverage of historical events, political claims about the past, family stories, monuments, museums, and contested narratives about your own country across decades. This is foundational.`,
          ],
          image: `/voyager-assets/history/l02-s5-before.webp`,
          imageCaption: `Three tiers for different uses. Even Tier A has perspective; distinction is explicitly acknowledged + multi-source vs unacknowledged + single-perspective. National textbooks (Tier B) tell you what story a country tells itself. Tier C selects evidence to support predetermined narratives.`,
          vocab: [
            {
              word: `source tiers`,
              definition: `Three tiers represent different reliability levels and appropriate uses. Tier A: multi-perspective scholarly work, primary sources from multiple cultural traditions, explicitly acknowledged perspective, engagement with strongest counter-readings. Tier B: serious history (academic or popular) well-researched within a particular perspective, including most national textbooks; tells you what story that perspective tells but shouldn't be confused with multi-perspective work. Tier C: viral content, politically motivated revisionism, nationalist propaganda, selective evidence supporting predetermined narratives; often contains some real information but framing serves predetermined ends. Even Tier A has perspective; distinction is explicitly acknowledged + multi-source vs unacknowledged + single-perspective.`,
              audioPrompt: `Navigating historical source tiers is the practical skill you're building, {name}. The three tiers represent different reliability levels and different appropriate uses. Tier A: multi-perspective scholarly work that explicitly engages with whose voice is included and excluded, uses primary sources from multiple cultural traditions, acknowledges its own perspective. Tier B: serious history (academic or popular) that's well-researched within a particular perspective, including most national textbooks even when they have specific political framings. Tier C: viral content, politically motivated revisionism, nationalist propaganda, content that selectively uses evidence to support predetermined narratives. Even Tier A sources have perspectives; the distinction isn't between perspective and no-perspective but between explicitly acknowledged perspective with multi-source method versus unacknowledged perspective dressed as objectivity. Tier B national textbooks aren't necessarily worse than Tier A scholarship for understanding the country whose textbooks they are; they tell you what story that country tells itself, but they shouldn't be confused with multi-perspective history.`,
            },
            {
              word: `multi-perspective synthesis`,
              definition: `The integration of sources, voices, and evidence from multiple cultural traditions and standpoints into a single historical account. A defining feature of Tier A historiography, distinct from simply adding non-dominant voices to an otherwise unchanged framework.`,
              audioPrompt: `Multi-perspective synthesis is what separates Tier A historical work from Tier B work that does a good job within a single perspective, {name}. The distinction isn't just that Tier A includes more voices; it's that integration, not addition, is the mode. A serious history of European colonization of the Americas now generally integrates archaeology, European chronicles, indigenous oral traditions where preserved, demographic data, and explicit attention to whose perspective is being centered at any given point. Compare Charles Mann's "1491" from 2005 and "1493" from 2011 to mid-20th-century histories of what used to be called "the Age of Exploration." Mann's work substantially shifts what we know about pre-Columbian Americas and the actual effects of contact, partly by taking indigenous sources and archaeology seriously rather than treating European sources as the default. The result is not a European history with an indigenous chapter added; it's a history that is structured differently because multiple perspectives are genuinely integrated. Tier B sources, including most national textbooks even well-researched ones, present one perspective well without the integration. The 1990s US textbook discussed in this lesson is a clear example: it was written by credentialed historians and covers basic chronology accurately, but it centers European perspectives and treats indigenous peoples mostly as background. That's not dishonesty; it's single-perspective serious work, which is Tier B rather than Tier A. Understanding this distinction changes how you use sources.`,
            },
            {
              word: `predetermined narrative`,
              definition: `A historical account in which the conclusion is fixed in advance and evidence is selected to support it, rather than being driven by what the evidence shows. The defining problem with Tier C historical content.`,
              audioPrompt: `Predetermined narrative is the defining problem with Tier C historical content, and recognizing it is a core part of the source evaluation skill, {name}. Tier C content, including viral revisionist history videos, nationalist propaganda, and politically motivated revisionism, often contains some genuinely correct information. The problem is not that all specific claims are false; it is that the framing and selection of evidence serves conclusions fixed in advance rather than following where evidence leads. A Tier C source about colonization might correctly state that Columbus did not "discover" already-inhabited continents, and that pre-Columbian civilizations were complex. These claims are also in Tier A scholarship. What the Tier C source adds is selectively framing evidence to support a predetermined conclusion, presenting uncertain claims with false confidence, dismissing contrary evidence, and packaging the whole thing as revelation of hidden truth. The "they don't want you to know" framing combined with direct monetization through merchandise and Patreon is a documented pattern. Real revisionist history exists in Tier A scholarship; books like Charles Mann's "1491," the work of the Subaltern Studies group, and ongoing academic debates involve genuine revision of established accounts based on evidence. What distinguishes them from Tier C is the method: evidence drives the revision, counter-readings are engaged, uncertainty is acknowledged, and the perspective is stated rather than hidden behind claims of revelation. When you encounter a source that claims to reveal what is hidden, the first questions are: what does this source sell, and are specific claims cited to primary sources?`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l02-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Historical Sources On Colonization Of The Americas`,
          intro: `{name}, three sources covering European colonization of the Americas (15th-19th centuries). Evaluate each: what tier? whose perspectives are included? what method? what's being sold or argued for? does it engage with the strongest counter-readings?`,
          sources: [
            {
              id: `source-a`,
              tier: `A`,
              title: `Charles Mann, "1491: New Revelations of the Americas Before Columbus" (2005)`,
              content: `Charles Mann is a journalist with substantial training in historical research; his work is widely cited by academic historians though he isn't himself one. "1491" synthesizes recent academic research from archaeology, demography, ecology, ethnohistory, anthropology, and history to reconstruct pre-Columbian Americas. The book substantially revises older estimates of indigenous population (8-10 million across the hemisphere in older textbooks vs 50-100 million per current scholarship), pre-Columbian agriculture (much more sophisticated than older accounts suggested, including extensive Amazonian agroforestry, complex Andean potato cultivation, large urban centers in Mississippi River valley), and the effects of contact (catastrophic disease that killed an estimated 90% of indigenous populations within a century of contact, which substantially changed the "empty wilderness" that European settlers encountered). Mann integrates European chronicles, indigenous oral traditions (where preserved), archaeological evidence, demographic models, and current academic scholarship. He explicitly acknowledges that his work is shaped by his journalistic perspective and recent academic shifts; the book has extensive footnotes citing specific primary sources and academic work. The book has been widely praised by academic historians of the Americas and also critiqued for specific claims (some pre-Columbian population estimates remain contested; some specific claims about Amazonian agriculture are debated). Mann engages with critics in updates and his subsequent book "1493" continues the work into the Columbian Exchange period.`,
              evaluation: {
                tier: `Tier A`,
                strengths: `Multi-source synthesis: archaeology, European chronicles, indigenous oral traditions where preserved, demographic models, recent academic scholarship. Substantial revision of older accounts based on current evidence. Explicit acknowledgment of perspective. Extensive citation tracing claims to primary sources. Engagement with critics and ongoing debates. Has changed academic and public understanding of pre-Columbian Americas. Subsequent book "1493" extends the work.`,
                concerns: `Some specific claims remain contested (population estimates, Amazonian agriculture); journalistic style sometimes simplifies academic debates. Doesn't substitute for direct engagement with primary sources for research purposes. Like all serious work, has its own perspective even when explicitly acknowledged.`,
                weight: `High weight for understanding pre-Columbian Americas and the actual circumstances of European contact. Should be read alongside specific scholarly works on particular regions and periods for deeper engagement. Excellent example of multi-perspective historiography.`,
              },
            },
            {
              id: `source-b`,
              tier: `B`,
              title: `US 8th-grade history textbook from the 1990s, "America: Pathways to the Present"`,
              content: `Standard US history textbook published by Prentice Hall, widely adopted in US schools in the 1990s, written by credentialed historians (Andrew Cayton, et al.). The textbook covers European exploration and colonization of the Americas across roughly 60 pages. Chapters titled "The European Age of Exploration," "Establishing English Colonies," and "Three Worlds Meet." Coverage emphasizes European exploration as motivated by trade, curiosity, and religious conversion; Columbus's voyages and other major European expeditions; founding of English colonies and their development; early indigenous-European interactions framed as "encounters" with mutual influence. Mentions indigenous societies but as background to European settlement; mentions slavery's role in colonial economies briefly; mentions specific conflicts (Pequot War, King Philip's War) without extended analysis of indigenous perspectives or population collapse. Names some major indigenous figures (Squanto, Pocahontas, Tecumseh) but mostly as they relate to European actors. Total pre-Columbian Americas coverage: approximately 3 pages, mostly emphasizing the variety of indigenous societies without extended analysis. Estimated indigenous population at contact: approximately 2-5 million (now known to be substantially underestimated). Slavery framed as economic system rather than as central feature of colonial development. Does not include extensive engagement with subsequent academic revisions of any of these framings. Footnotes minimal; primary sources rarely directly cited. Designed to convey settled "what happened" narrative for 8th-grade readers.`,
              evaluation: {
                tier: `Tier B`,
                strengths: `Written by credentialed historians. Reasonably accurate within its chosen framing. Covers basic chronology and major events. Accessible to 8th-grade readers. Includes maps and basic visual aids. Sufficient for basic chronological framework.`,
                concerns: `Centers European perspectives; indigenous peoples appear mostly as background. Substantially underestimates pre-Columbian populations using older estimates that current scholarship has revised. Doesn't engage with specific indigenous accounts where they exist. Frames colonization as "encounter" rather than as conquest with substantial demographic catastrophe. Doesn't acknowledge the textbook's own perspective; presents framing as "what happened." Limited primary source engagement. National educational function shapes what's included and excluded. Doesn't engage with subsequent academic shifts (Mann's work, postcolonial historiography, indigenous historiography). Even within US national history, controversial framings (Columbus as discoverer rather than as colonizer; slavery as auxiliary rather than central) reflect 1990s political climate as much as historical evidence.`,
                weight: `Moderate weight as a representative of national educational historiography. Useful for understanding what the US has told students about its origins in this period. Should NOT be confused with current multi-perspective scholarship; substantially out of date on specific empirical claims (especially population) and uses framings since revised. Better to supplement with Tier A work for actual understanding.`,
              },
            },
            {
              id: `source-c`,
              tier: `C`,
              title: `"The Truth About Columbus They Don't Want You To Know": viral YouTube video, 18 minutes, 4.2M views, monetized through merchandise and Patreon`,
              content: `Channel "RealHistoryNow" with 800K subscribers makes content arguing that mainstream history teaches "lies" about American history. The Columbus video alternates between (a) some genuinely true claims widely accepted in academic history but framed as if hidden (the "Columbus discovered America" framing is misleading; pre-Columbian Americas had complex civilizations; Columbus's expeditions killed many indigenous people; the celebration of Columbus Day was historically contested) and (b) specific claims that are contested or selectively framed (specific population estimates given confidently when academic estimates have substantial uncertainty; specific cruelty attributed to Columbus personally when the historical record is more complicated; broad claims about Columbus's intent that are speculation framed as fact). The video positions itself as revealing truth against a conspiracy of "establishment historians" who allegedly know but suppress this material; in fact most of the "hidden" content is in academic books like Mann's that have been bestsellers. The video sells branded merchandise ("History You Won't Find in Textbooks" t-shirts), drives Patreon subscriptions, and uses dramatic music and editing optimized for engagement. The creator has no academic credentials and the video has no specific citations to primary sources, instead referencing "research" and "documents" without specifics. Comments are largely from viewers shocked at "what they were never taught", much of which they would have been taught in any current college Latin American history course. Other videos on the channel cover the "true history" of various other topics with similar patterns.`,
              evaluation: {
                tier: `Tier C`,
                strengths: `Some individual claims are correct (Columbus didn't discover already-inhabited continents; pre-Columbian Americas had complex civilizations; substantial harm came from European contact); accessible format addresses real gaps in many people's education; raises questions worth examining.`,
                concerns: `No academic credentials of creator. No specific citations or primary sources. Conspiratorial framing ("they don't want you to know") despite content being widely available in mainstream scholarship. Specific claims presented with false confidence where academic literature has substantial uncertainty. Direct monetization tied to "revealing hidden truth" framing. Selective evidence supporting predetermined conclusions rather than evidence-driven inquiry. Combines real information with speculation and oversimplification, making it difficult for viewers to distinguish. Engagement-optimized rather than accuracy-optimized.`,
                weight: `Low weight as historical source. The genuinely true material in the video can be found in Tier A and Tier B sources with proper citation and context; the additional speculation and conspiratorial framing add noise not signal. Should be recognized as Tier C and not used as basis for historical claims. The "they don't want you to know" framing combined with monetization is a documented Tier C pattern across many topics. Real revisionist history exists in Tier A scholarship; YouTube monetized "true history" content is usually not it.`,
              },
            },
          ],
          synthesisPrompt: `Looking at the three sources together: if you wanted to understand the actual history of European colonization of the Americas, what would you read first, second, third? What does each provide that the others don't, and what are the limits of each? How does whose perspective dominates each source affect what you can learn from it?`,
          reflectionPrompt: `Tier B national textbooks present national framings as "what happened" without acknowledging their own perspective. Tier C viral content claims to reveal "the truth" without academic backing. Both are problematic but in different ways. What's the relationship between sincere national educational work and engagement-optimized "revisionist" content? When does criticism of national textbooks become its own kind of unreliable narrative?`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What did "great man" history focus on and exclude?`,
              options: [
                `Random`,
                `Focused on kings, generals, presidents, popes, philosophers, statesmen (Carlyle's 1840 framing); included battles, court politics, treaties, religious leaders, inventors. Excluded daily life of ordinary people, women, enslaved/conquered peoples, peasants/workers, indigenous peoples encountered by European expansion. Dominated because matched surviving evidence + values of academic class + political function of legitimating power`,
                `Just kings`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The framework dominated for centuries because of structural reasons (evidence, class, politics), not just intellectual choice. Recognizing this shifts how to read the history written within the framework.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did the Annales school contribute?`,
              options: [
                `Random`,
                `Early-20th-century French historiographical movement (Marc Bloch, Lucien Febvre, Fernand Braudel); shifted attention from kings/battles to social and economic structures, climate, demography (Braudel's "longue durée" of slow-moving forces); used quantitative records (parish registers, tax records, climate data); Braudel's "The Mediterranean" (1949) reconstructed economic and ecological history across centuries`,
                `Just France`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Annales-school work substantially expanded what counted as historical evidence and historical subject. Even historians who reject other parts of the framework generally use Annales-style social/economic methods.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "history from below" and what specific work exemplifies it?`,
              options: [
                `Random`,
                `Late-20th-century movement deliberately recovering history from previously excluded perspectives. Specific work: Carlo Ginzburg's "The Cheese and the Worms" (1976) reconstructing 16th-century Italian miller Menocchio's worldview through inquisition records; Natalie Zemon Davis's "The Return of Martin Guerre" (1983) on 16th-century peasant village; E.P. Thompson's "The Making of the English Working Class" (1963), foundational English-language work`,
                `Just lower class`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `These specific works demonstrate that ordinary people had complex inner lives, cosmologies, and agency, recoverable through methodical work with available sources. The methods (reading elite sources against the grain, court records, archaeology of everyday spaces) extended what could be historically known.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the Subaltern Studies group?`,
              options: [
                `Random`,
                `Historiographical group that emerged in India in the 1980s (Ranajit Guha, Dipesh Chakrabarty, with Gayatri Spivak as critical interlocutor); recovered history of Indian peasants, workers, women, tribal peoples excluded from both colonial British and post-independence elite-Indian nationalist historiography; "subaltern" came to mean those excluded by dominant historiographies of any kind`,
                `Just Indian`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Subaltern Studies is one of the most influential historiographical movements of the late 20th century. The insight that both colonial and nationalist histories exclude the same people generalizes beyond India to many contexts.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What patterns characterize national histories?`,
              options: [
                `Random`,
                `Origin stories legitimating current borders/institutions; emphasize heroes, downplay villains; frame conflicts favorably to country telling story; include accomplishments, exclude embarrassments; use specific categories (us/them) that frame relations particular ways; emphasize certain regions/ethnicities/religions/political traditions over others. Patterns universal across countries; specific content varies`,
                `Just facts`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Recognizing patterns across national histories matters because most adults experience their own national history as "what happened" rather than as one specific framing. The patterns help identify what's national construction vs evidence.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What examples show the politics of national histories internationally?`,
              options: [
                `Random`,
                `US "textbook wars" (1925 Scopes trial, 1980s culture wars, 1619 vs 1776 framings, ongoing state-by-state textbook fights); Soviet rewriting of events as leadership changed; Japanese textbooks downplaying Imperial Japanese WWII atrocities (Nanjing Massacre, comfort women, Unit 731); Chinese "century of humiliation" framing; Turkish historical denial of Armenian genocide. Each country involves specific political work in its history textbooks`,
                `Just one country`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The pattern is universal even where specific content varies. Recognizing it in one's own national history is harder than recognizing it in others'; which is why examining international examples helps train the recognition.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What features characterize strong current historiography?`,
              options: [
                `Random`,
                `Multiple perspectives integrated (not additive); primary sources from multiple cultural traditions where possible; explicit acknowledgment of historian's situation and perspective; quantitative methods combined with narrative; attention to who's missing from record. Examples: Charles Mann "1491"/"1493" integrating multiple sources; Slave Voyages database cliometrics; Sebastian Conrad "What Is Global History?"; Howard Zinn "A People's History" with explicit perspective`,
                `Just academic`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Current strong historiography has substantially absorbed lessons from the past century's historiographical shifts. The features distinguish it from earlier work even within the academic tradition.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the distinction between Tier A and Tier B historical sources?`,
              options: [
                `Just quality`,
                `Tier A: multi-perspective scholarly work with primary sources from multiple cultural traditions, explicitly acknowledged perspective, engagement with strongest counter-readings. Tier B: serious history well-researched within a particular perspective, including most national textbooks even when they have specific political framings; tells you what story that perspective tells but shouldn't be confused with multi-perspective work. Even Tier A has perspective; distinction is explicitly acknowledged + multi-source vs unacknowledged + single-perspective`,
                `Random`,
                `Just any`,
              ],
              correctIndex: 1,
              explanation: `The distinction matters because Tier B work (including most national textbooks) is widely accepted as "history" without recognition of its specific perspective. Reading it as Tier B rather than as Tier A produces better understanding.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: National textbooks present history with no perspective; they just convey "what happened."`,
              correctAnswer: false,
              explanation: `False. All history has perspective; national textbooks have specific political function (shaping national identity, legitimating current arrangements, framing relationships with other countries). The patterns are universal across countries (origin stories, hero/villain selection, accomplishments/embarrassments). What varies is specific content. Recognizing national textbooks as one specific framing rather than as neutral "what happened" matters for mature engagement with history.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend tells you he watched a YouTube video that "totally changed his understanding of [some historical event]; it showed all the lies they teach us in school." Based on this lesson, what should you point out?`,
              options: [
                `"Random"`,
                `"Several specific things. First, school textbooks often have specific perspectives and framings that ARE worth examining; that part is real. National textbooks are Tier B sources that tell a specific national story; they're worth being read critically. Second, but the framing 'the lies they teach us' is itself a Tier C pattern that's often misleading in different ways than textbooks are. Three questions to ask about the video: Who made it? Do they have any academic credentials in the relevant history? What does the video sell? Merch, Patreon, course, paid app, brand sponsorship? Does it cite specific primary sources and academic work, or does it reference 'research' and 'documents' without specifics? Third, the 'they don't want you to know' framing is a documented Tier C pattern that's structurally manipulative even when individual claims are correct. Real revisionist history happens in Tier A academic scholarship (books like Charles Mann's '1491', work by the Subaltern Studies group, ongoing academic debates) that have specific citations, engage with critics, acknowledge their own perspective, and don't position themselves as revealing hidden conspiracies. Most of what viral 'they don't want you to know' history contains is either taken from this Tier A work (without crediting it) or is genuinely speculative content packaged as revelation. Fourth, what to do instead: if the video raised real questions, look at the Tier A scholarship on the topic. For most major historical events, there's serious academic work that's substantially more nuanced than either national textbooks OR viral revisionist content. The actual story is usually more complicated than either side suggests. Fifth, this isn't to dismiss the impulse; recognizing that what you learned in school was partial is right; the right response is engaging with serious historiography, not switching to a different unreliable narrative."`,
                `"Just trust it"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied historiography literacy. Acknowledge the legitimate observation (national textbooks have specific framing). Identify the Tier C pattern in viral revisionist content (no credentials, no citations, monetized "hidden truth" framing). Direct toward Tier A scholarship as the path to actual better understanding. Distinguish recognition of textbook limits from switching to a different unreliable narrative.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for evaluating who writes history? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: what's the national history you've absorbed? Whose perspective dominates it? What does the framing exclude or minimize?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who reads historiography with explicit framework across decades, what does that change about how you'll engage your own country's history vs others'?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific historical topic. Try to find a Tier A scholarly source, a Tier B textbook treatment, and a Tier C viral source. Compare what each tells you.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Tier B national textbooks shape most adults' working history. Is the problem that they're written from a national perspective, or that the perspective is unacknowledged? Where does legitimate national historical education end and propaganda begin?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read one of: Charles Mann "1491," Howard Zinn "A People's History," or Roxanne Dunbar-Ortiz "An Indigenous Peoples' History of the United States." Compare to what you learned in school.` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Historiography literacy at 12 shapes decades of how you'll read history, news, political claims about the past. Two paths.`,
          familyActivity: {
            title: `The Family National-History Conversation`,
            duration: `60 minutes`,
            description: `Share the three tiers and the patterns of national histories. Compare what each family member learned in school about specific contested topics (a war, a founding figure, an event involving another country). Notice how each family member's school covered or omitted specific things. If your family has members who grew up in different countries, compare what each was taught about events that involved both. This makes the historiography concrete using lived material. Consider doing the same exercise with a country your family has heritage from or strong connection to.`,
          },
          projectOption: {
            title: `Read multi-perspective history on one topic, 4 weeks (optional)`,
            duration: `4 weeks, ~45 minutes per session`,
            description: `Pick one historical topic (European colonization of the Americas; World War II; the Civil Rights Movement; or another that interests you). Read three sources: a Tier A multi-perspective scholarly work, a Tier B national textbook from any country (US, UK, China, India, etc.), and an explicitly different national or perspective-based source on the same topic (e.g., for European colonization, an indigenous historian's account; for WWII, a Japanese or Chinese account). Compare what each emphasizes, excludes, frames, and concludes. Write 1,500 words on what changes when you read across perspectives.`,
            offerToParent: `Parent: opt your kid into this project. Multi-perspective historiographical work at 12 produces the kind of thinking that's hard to retrofit later. Most adults never explicitly compare national histories; doing it deliberately at this age changes how they'll engage history across decades.`,
          },
          identityQuestion: `If you become someone who reads historiography with explicit framework (recognizing whose perspective dominates, what voices are excluded, what's national construction vs evidence), what does that change about your engagement with claims about the past across decades?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes national histories as specific framings, not as "what happened."`,
            `A person who reads history asking whose voice is included and whose is excluded.`,
            `Someone who distinguishes multi-perspective scholarship from viral "they don't want you to know" content.`,
          ],
          saveKey: `identity_responses_hw_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. Second History & World lesson done. You now have framework for evaluating historiography across three tiers, recognition of how "great man" history dominated and what shifted with the Annales school, history from below, Subaltern Studies, women's history, and indigenous historiography. You know specific work by Ginzburg, Davis, Thompson, Guha, Chakrabarty, Smith, Mann, Conrad, Zinn. You can recognize national history patterns across countries. Eighteen lessons to go. Next time: power and its uses throughout history. Case Study format. We work through specific historical cases. — Lyra`,
          badge: `historiography-literate`,
          badgeName: `Historiography Literate`,
          xpEarned: 75,
          competencies: [
            `Recognizes "great man" history's structural dominance and what shifted with Annales/Marxist/women's/indigenous historiography`,
            `Names key historiographers (Bloch, Febvre, Braudel, E.P. Thompson, Ginzburg, Davis, Guha, Chakrabarty, Spivak, Smith, Mann, Conrad, Zinn)`,
            `Identifies patterns in national histories across countries (origin stories, hero/villain framing, emphasis/exclusion)`,
            `Distinguishes Tier A multi-perspective scholarship from Tier B single-perspective serious history from Tier C viral revisionism`,
            `Applies framework to evaluate specific historical sources by perspective, method, evidence, and acknowledged framing`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Power and Its Uses Throughout History`,
            hook: `Three historical cases of power. Case Study format.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L02 ${VERSION}] "${l.title}" mags=${mags} sources=${sourceEval?.sources?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
