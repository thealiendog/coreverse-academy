// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L06 — Revolutions: Patterns and Causes
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Comparative Revolutions, Real Theorists and Cases
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: CASE STUDY (French / Russian / Haitian revolutions)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l06-v1";

const HISTORY_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-06`,
      title: `Revolutions: Patterns and Causes`,
      duration: 35,
      xpReward: 75,
      badge: `revolutions-analyst`,
      badgeName: `Revolutions Analyst`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, revolutions are the moments when long-running tensions break the surface and societies transform fundamentally. They've shaped almost everything about the modern world: the United States exists because of one; France's modern politics traces back to 1789; the 20th century was structured by the Russian Revolution of 1917 and the Chinese Revolution of 1949; the entire post-colonial world emerged from independence movements that were often revolutionary. Understanding revolutions matters because revolutions are still happening (Tunisia 2011, Egypt 2011, Sudan 2019, Myanmar resistance ongoing, others) and because the theoretical frameworks for understanding why they happen, what makes them succeed or fail, and what they produce shape how we read every revolutionary moment. Today three case studies: the French Revolution (1789-1799), the Russian Revolution (1917), and the Haitian Revolution (1791-1804). For each, we'll apply the three major theoretical accounts (Marxist class conflict, Tocquevillian rising expectations, and Skocpolian state breakdown) and see which best explains what happened. By the end you'll have framework for analyzing any revolutionary moment, including ones still unfolding.`,
          headline: `Revolutions: Patterns and Causes`,
          subtitle: `Three cases (French, Russian, Haitian). Three theoretical accounts. What actually explains revolutions?`,
          visual: `/voyager-assets/history/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is a Revolution?`,
          paragraphs: [
            `Not every political upheaval is a revolution. The category needs definition. A coup d'état is a sudden change in who holds state power, usually executed by an elite faction (often military), without fundamental change in how society is organized. Most "revolutions" reported in the news in the 20th century were actually coups (Latin America saw dozens of coups across the Cold War, often US-supported, rarely producing fundamental transformation). Reform is gradual change within existing institutional frameworks: the New Deal in 1930s US, the postwar British welfare state, many social-democratic transformations. Rebellion is local or partial resistance against authority that doesn't successfully transform the broader society: peasant uprisings throughout medieval and early modern Europe, slave revolts that were suppressed.`,
            `Revolution, by contrast, involves three features that distinguish it from these other forms. First, sudden and substantial transformation of the state, including changes in who rules and how. Second, broader social transformation: economic structure, class relationships, cultural patterns, often religious or ideological framework. Third, popular mobilization beyond elite factions: substantial sections of the population act collectively to make the transformation happen, distinguishing revolution from coup. The transformation can be progressive or reactionary, secular or religious, peaceful or violent; what makes it revolutionary is the combination of state change, social change, and mass mobilization.`,
            `Three classical theoretical traditions for understanding revolutions developed across the 19th and 20th centuries, each emphasizing different causal factors. Marxist theory (drawing on Marx, Engels, Lenin, and many later thinkers) emphasizes class conflict and economic transformation. Tocquevillian theory (drawing on Alexis de Tocqueville, particularly The Old Regime and the Revolution, 1856) emphasizes rising expectations meeting institutional rigidity. State-centered theory (developed most fully by Theda Skocpol in States and Social Revolutions, 1979) emphasizes state breakdown under specific stresses. Each tradition has strengths; each captures something the others miss.`,
            `A fourth tradition matters particularly for the third case study. Theories of colonial and anti-colonial revolution, developed by Frantz Fanon (The Wretched of the Earth, 1961), C.L.R. James (The Black Jacobins, 1938), and many others, argue that the European-centered theoretical traditions (Marxist, Tocquevillian, Skocpolian) all developed for specific contexts and underexplain colonial situations. Revolutions in the colonized world involve race, slavery, settler dispossession, and imperial structure in ways that the European traditions don't address well. This tradition is essential for understanding Haiti, but also Algeria, Vietnam, India, Kenya, and many others.`,
            `One framing before we work through the cases. Real historiography of any specific revolution typically integrates multiple frameworks. The question isn't which single account is "right" universally but which framework best illuminates a specific case. The same revolution can be substantially Marxist-explained on one dimension and substantially Skocpolian-explained on another. The cases ahead will show this complexity.`,
          ],
          image: `/voyager-assets/history/l06-s1-what-is-revolution.webp`,
          imageCaption: `Revolution distinguished from coup, reform, rebellion: three features (sudden state change, broader social transformation, popular mobilization). Three classical traditions: Marxist class conflict, Tocquevillian rising expectations, Skocpolian state breakdown. Plus theories of colonial revolution (Fanon, C.L.R. James).`,
          vocab: [
            {
              word: `as revolution`,
              definition: `Not every upheaval is revolution. Coup d'état: sudden change in who holds state power, executed by elite faction (often military), without fundamental social change. Reform: gradual change within existing frameworks (New Deal, postwar welfare states). Rebellion: local or partial resistance not transforming broader society (peasant uprisings, suppressed slave revolts). Revolution requires three features: (1) sudden substantial state transformation; (2) broader social transformation (economic, class, cultural, religious/ideological); (3) popular mobilization beyond elite factions. Three classical theoretical traditions: Marxist (class conflict + economic transformation), Tocquevillian (rising expectations meeting rigidity), Skocpolian (state breakdown). Plus colonial revolution theory: Frantz Fanon "The Wretched of the Earth" 1961; C.L.R. James "The Black Jacobins" 1938.`,
              audioPrompt: `What counts as a revolution requires definition, {name}. Not every political upheaval is a revolution. A coup d'état is a sudden change in who holds state power, executed by an elite faction without fundamental change in how society is organized. Reform is gradual change within existing institutional frameworks. Rebellion is local resistance that doesn't successfully transform broader society. Revolution involves three features: sudden and substantial transformation of the state; broader social transformation (economic structure, class relationships, cultural patterns); and popular mobilization beyond elite factions. Three classical theoretical traditions developed across the 19th and 20th centuries. Marxist theory emphasizes class conflict and economic transformation. Tocquevillian theory, drawing on Alexis de Tocqueville's The Old Regime and the Revolution from 1856, emphasizes rising expectations meeting institutional rigidity. State-centered theory, developed by Theda Skocpol in States and Social Revolutions in 1979, emphasizes state breakdown under specific stresses. A fourth tradition matters for colonial contexts: Frantz Fanon's Wretched of the Earth from 1961 and C.L.R. James's Black Jacobins from 1938.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Marxist Theory of Revolution`,
          paragraphs: [
            `Marxist theory holds that revolutions are produced by class conflict, specifically when productive forces (technology, organization of production) develop beyond what existing relations of production (property arrangements, class structure) can contain. New productive forces require new social relations to use them; the old ruling class resists; eventually the contradiction is resolved through revolutionary transformation. This is the famous "base determines superstructure" thesis, though Marx and later Marxists meant something more sophisticated than mechanical determinism.`,
            `The classical Marxist sequence runs roughly: existing mode of production (feudalism, capitalism, etc.) creates a class structure with ruling and exploited classes; productive forces develop in ways that strain the existing relations; class consciousness develops among the exploited (workers under capitalism, peasants in some contexts); revolutionary moments emerge when contradictions become acute; transformation produces new mode of production with new class structure. Marx applied this framework to past transitions (slave to feudal, feudal to capitalist) and predicted the next transition (capitalist to socialist/communist).`,
            `What Marxist theory illuminates well. Long-term economic transformations underlying political conflicts. The role of class interest in shaping which actors push for revolution and which resist. The fact that revolutions tend to cluster historically (1848, 1917-1919, late 1960s, 1989, Arab Spring 2011) when broader structural forces produce coincident crises across countries. Many post-colonial revolutions had substantial class-conflict dimensions even where they were also national-liberation movements.`,
            `What Marxist theory underexplains. Why some revolutions happen where Marxist preconditions are weak (Russia in 1917, with limited industrial proletariat compared to advanced capitalist countries that didn't have communist revolutions). Why some revolutions are religious or ethno-nationalist rather than class-based (Iran 1979, many post-Soviet revolutions). The independent role of state structure, military capacity, and elite breakdown. The role of contingent events (assassinations, wars, specific personalities) that classical Marxism treats as superficial but that often matter substantially.`,
            `Modern Marxist theory of revolution has substantially evolved beyond the classical formulation. Antonio Gramsci's work on cultural hegemony, Louis Althusser's structural Marxism, E.P. Thompson's "history from below," and recent work by historians like Geoff Eley and Erik Olin Wright have produced richer analyses that integrate state structure, culture, contingency, and other factors. The label "Marxist" covers substantial internal variety; the classical formulation is one strand within a larger tradition.`,
          ],
          image: `/voyager-assets/history/l06-s2-marxist.webp`,
          imageCaption: `Marxist theory of revolution: productive forces vs relations of production, class conflict, class consciousness, revolutionary transformation. Strong on long-term economic transformation, class interests, historical clustering. Weaker on revolutions in non-Marxist-predicted contexts (Russia 1917, Iran 1979) and religious/ethno-national revolutions.`,
          vocab: [
            {
              word: `theory revolution`,
              definition: `Revolutions produced by class conflict when productive forces (technology, organization) develop beyond what existing relations of production (property, class structure) can contain. Classical sequence: existing mode of production creates class structure; productive forces strain existing relations; class consciousness develops; revolutionary moments emerge; transformation produces new mode with new class structure. Marx applied to past transitions (slave to feudal, feudal to capitalist) and predicted capitalist to socialist. Illuminates: long-term economic transformations underlying politics, role of class interest, historical clustering (1848, 1917-1919, 1989, Arab Spring 2011). Underexplains: revolutions where Marxist preconditions weak (Russia 1917 had limited industrial proletariat); religious/ethno-national revolutions (Iran 1979); independent role of state structure and contingency. Modern evolutions: Gramsci on hegemony, Althusser structural Marxism, E.P. Thompson "history from below," Geoff Eley, Erik Olin Wright.`,
              audioPrompt: `Marxist theory of revolution holds that revolutions are produced by class conflict, {name}. Specifically when productive forces develop beyond what existing relations of production can contain. Productive forces are technology and organization of production; relations of production are property arrangements and class structure. New productive forces require new social relations; the old ruling class resists; the contradiction is resolved through revolutionary transformation. The classical Marxist sequence: existing mode of production creates class structure with ruling and exploited classes; productive forces develop in ways that strain existing relations; class consciousness develops; revolutionary moments emerge when contradictions become acute; transformation produces new mode with new class structure. Marx applied this to past transitions and predicted the next: capitalist to socialist. Marxist theory illuminates long-term economic transformations underlying political conflicts, the role of class interest, and historical clustering of revolutions in 1848, 1917-1919, 1989, and the Arab Spring of 2011. It underexplains revolutions where Marxist preconditions are weak, religious revolutions, and the independent role of state structure.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tocqueville And Rising Expectations`,
          paragraphs: [
            `Alexis de Tocqueville's The Old Regime and the Revolution (1856) developed a counter-intuitive account of revolutionary causation. Tocqueville, writing decades after the French Revolution and analyzing its causes through archival research, argued that revolutions tend to happen not when conditions are worst but when they're improving. This finding has been confirmed and extended by later researchers.`,
            `The argument runs: when conditions are uniformly bad, people accept them as natural and don't expect change. When conditions begin to improve, people develop new expectations and start comparing current reality against an imagined better future rather than against a worse past. The gap between rising expectations and slowly-improving (or briefly-worsening) reality produces revolutionary discontent. Tocqueville showed that the French Revolution happened in a France that was substantially better off than 50 years earlier, not worse. The Bourbons were trying to reform; the reforms raised expectations; the gap between expectations and continuing inequalities produced explosive discontent.`,
            `Modern social science has formalized this insight as the "J-curve" theory (developed by James C. Davies in 1962 and others): revolutions tend to occur when a sustained period of improving conditions is followed by a sharp reversal. The improving period raises expectations; the reversal creates an unbearable gap. This has been applied to many cases: the Arab Spring countries had been generally improving for decades before the 2008 financial crisis and subsequent food price shocks created sharp reversals; many revolutionary moments in 1848 Europe followed periods of liberalization followed by political reversal.`,
            `What Tocquevillian theory illuminates well. The puzzle of why revolutions happen in particular times and not others when underlying class structure has been stable for decades. The role of psychological factors (expectation, frustration, perception) alongside material ones. The fact that reforming regimes often face more pressure than purely repressive ones. The role of economic improvement followed by reversal in many revolutionary moments.`,
            `What Tocquevillian theory underexplains. Why some societies with rising expectations and reversals don't have revolutions (the J-curve theory has high false-positive rates; many countries fit the pattern without revolutions occurring). The independent role of state capacity (a state strong enough to manage discontent will, even with rising expectations). The structural class dimensions that Marxist theory emphasizes. The role of revolutionary organization and leadership.`,
            `One important note. Tocqueville and Marx aren't strictly opposed; modern historians often integrate them. Class structure (Marx) shapes who is mobilized and why; rising expectations (Tocqueville) shape when latent grievances become acute; state breakdown (Skocpol, next section) shapes whether mobilization can succeed. The frameworks complement more than they compete.`,
          ],
          image: `/voyager-assets/history/l06-s3-tocqueville.webp`,
          imageCaption: `Tocqueville 1856 "Old Regime and the Revolution": revolutions happen when conditions improve, not when worst. Rising expectations meet slowly-improving or briefly-worsening reality. J-curve formalized by Davies 1962. Applied to Arab Spring (improving conditions + 2008 reversal). Complements Marxist and Skocpolian accounts.`,
          vocab: [
            {
              word: `rising expectations`,
              definition: `Alexis de Tocqueville "The Old Regime and the Revolution" 1856: counter-intuitive account. Revolutions happen not when conditions are worst but when they're improving. When conditions are uniformly bad, people accept them; when improving, people develop new expectations and compare against imagined better future. Gap between rising expectations and slowly-improving (or briefly-worsening) reality produces revolutionary discontent. France in 1789 was substantially better off than 50 years earlier; Bourbon reforms raised expectations beyond what reforms could deliver. Formalized as "J-curve" theory (James C. Davies 1962): revolutions occur when sustained improvement followed by sharp reversal. Applied to Arab Spring (improving decades + 2008 financial crisis + food price shocks). Strengths: explains timing puzzle, role of psychology, pressure on reforming regimes. Limits: high false-positive rates; underweights state capacity, class structure, revolutionary organization.`,
              audioPrompt: `Alexis de Tocqueville developed a counter-intuitive account of revolutions in The Old Regime and the Revolution in 1856, {name}. Tocqueville argued that revolutions tend to happen not when conditions are worst but when they're improving. When conditions are uniformly bad, people accept them as natural and don't expect change. When conditions begin to improve, people develop new expectations and start comparing current reality against an imagined better future. The gap between rising expectations and slowly-improving reality produces revolutionary discontent. Tocqueville showed that the French Revolution happened in a France that was substantially better off than 50 years earlier. The Bourbons were trying to reform; the reforms raised expectations; the gap produced explosive discontent. Modern social science has formalized this as the J-curve theory: revolutions tend to occur when a sustained period of improving conditions is followed by a sharp reversal. The improving period raises expectations; the reversal creates an unbearable gap. This has been applied to Arab Spring countries that had been generally improving for decades before the 2008 financial crisis created sharp reversals.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Skocpol On State Breakdown`,
          paragraphs: [
            `Theda Skocpol's States and Social Revolutions (1979) shifted revolutionary theory by emphasizing the state itself as the central actor. Skocpol compared three cases (the French, Russian, and Chinese revolutions) and argued that the common feature wasn't class conflict (which exists almost everywhere) or rising expectations (which exist in many non-revolutionary contexts) but specific patterns of state breakdown under international and domestic pressures.`,
            `The Skocpolian argument runs: states that face simultaneous international pressure (war, economic crisis from global system) and domestic pressure (resistance from established elites and rising classes) can break down when they lack the capacity to manage both at once. The state's military capacity, fiscal capacity, and administrative capacity all matter independently. State breakdown opens the political space for revolutionary mobilization; without breakdown, even strong revolutionary movements typically fail to take power because the existing state can suppress them.`,
            `France 1789: Bourbon monarchy faced massive war debts from supporting American Revolution, structural fiscal crisis, elite resistance to taxation reform, and rising bourgeois and peasant grievances; the state's inability to extract resources or coerce compliance created the opening. Russia 1917: tsarist state already strained by industrialization and rural pressures was destroyed by World War I (Russian Empire suffered ~3.3 million military deaths plus mass food shortages, transportation collapse, and political delegitimization). Without the war, the Russian Revolution is hard to imagine in 1917; with it, the Bolsheviks could seize power in November because no other organized force could hold the state. China 1911 and 1949: Qing dynasty's collapse under foreign imperial pressure and internal rebellion created decades of state weakness that ended with Communist victory.`,
            `What Skocpolian theory illuminates well. Why some revolutions succeed while others fail despite similar underlying class structures. The independent role of warfare (most major revolutions occur in wartime or immediate post-war contexts). The specific mechanisms by which old regimes lose capacity to govern. The international dimension: state breakdown is often produced by pressures from the international system, not just domestic dynamics.`,
            `What Skocpolian theory underexplains. The content and direction of revolutionary transformation (state breakdown opens space, but what gets built in that space requires other explanations). The role of ideology and leadership in shaping outcomes once revolution is possible. Cases where revolution occurs without obvious state breakdown (some color revolutions, some recent Latin American transformations). Recent work by Jack Goldstone, Charles Tilly, and others has extended state-centered analysis to address these limits.`,
            `One framing across the three theories. They're not strictly competing. Marxist theory tells you about underlying class structure and economic transformation. Tocquevillian theory tells you about the timing of revolutionary moments and the psychology of revolutionary discontent. Skocpolian theory tells you about when revolutionary moments can succeed in taking power. Modern historiography of any specific revolution typically draws on all three to explain different dimensions.`,
          ],
          image: `/voyager-assets/history/l06-s4-skocpol.webp`,
          imageCaption: `Skocpol 1979 "States and Social Revolutions": state breakdown under international + domestic pressure as central. France 1789 (war debts + fiscal crisis), Russia 1917 (WWI destroyed tsarist state), China 1911-1949 (Qing collapse). Explains success/failure. Complements Marxist (structure) and Tocquevillian (timing) accounts.`,
          vocab: [
            {
              word: `state breakdown`,
              definition: `Theda Skocpol "States and Social Revolutions" 1979: states as central actor in revolutions. Compared French, Russian, Chinese revolutions and argued common feature is specific patterns of state breakdown under international and domestic pressures simultaneously. State capacity (military, fiscal, administrative) all matter independently. State breakdown opens political space for revolutionary mobilization; without breakdown, revolutionary movements typically fail. France 1789: Bourbon fiscal crisis + war debts + elite resistance to reform. Russia 1917: WWI destroyed tsarist state (3.3M Russian military deaths + food shortages + collapse). China 1911 and 1949: Qing collapse under foreign + internal pressures. Explains why revolutions succeed vs fail. Modern extensions: Jack Goldstone, Charles Tilly. Three theories complement: Marxist explains structure, Tocquevillian explains timing, Skocpolian explains success.`,
              audioPrompt: `Theda Skocpol's States and Social Revolutions from 1979 shifted revolutionary theory by emphasizing the state itself as the central actor, {name}. Skocpol compared the French, Russian, and Chinese revolutions and argued that the common feature wasn't class conflict, which exists almost everywhere, or rising expectations, which exist in many non-revolutionary contexts, but specific patterns of state breakdown. The Skocpolian argument: states that face simultaneous international pressure and domestic pressure can break down when they lack capacity to manage both at once. State military, fiscal, and administrative capacity all matter independently. State breakdown opens the political space for revolutionary mobilization. France 1789: Bourbon monarchy faced massive war debts from supporting the American Revolution, structural fiscal crisis, and elite resistance to taxation reform. Russia 1917: tsarist state already strained was destroyed by World War I, with about 3.3 million Russian military deaths plus mass food shortages and political delegitimization. Without the war, the Russian Revolution is hard to imagine in 1917.`,
            },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Colonial Revolutions And Why The European Theories Are Not Enough`,
          paragraphs: [
            `The three theoretical traditions covered so far (Marxist, Tocquevillian, Skocpolian) all developed primarily through analysis of European or European-derived cases. They underexplain colonial revolutions, where the central dynamics involve race, slavery, settler dispossession, and imperial structure in ways the European traditions don't address well. A fourth theoretical tradition exists for these cases and is essential.`,
            `Frantz Fanon (1925-1961), a psychiatrist born in Martinique who joined the Algerian liberation struggle against French colonial rule, wrote The Wretched of the Earth (1961) shortly before his death. Fanon argued that colonial situations differ structurally from European class societies: colonized peoples don't just face economic exploitation but racialized dehumanization; the colonial state isn't just a class state but a racial state organized around exclusion of the colonized; revolutionary change requires not just economic transformation but the recovery of personhood denied by colonization. Fanon controversially argued that violence in anti-colonial struggle wasn't just instrumental but also psychologically necessary for the colonized to break the internalized inferiority colonial society had imposed. The argument has been debated extensively since.`,
            `C.L.R. James (1901-1989), a Trinidadian historian and political theorist, wrote The Black Jacobins (1938), the foundational history of the Haitian Revolution. James argued that the European theoretical traditions had systematically underweighted Haiti because the revolution didn't fit their categories: enslaved Africans, treated as property and as outside the "human" community by European categories, organized themselves into a revolutionary army that defeated French, Spanish, and British forces and established the first Black republic. The revolution's leaders (Toussaint Louverture, Jean-Jacques Dessalines) read European Enlightenment texts and turned them against European powers in ways European theorists hadn't anticipated. James's framework integrated class analysis with race and colonial structure in ways pure Marxism didn't.`,
            `The colonial revolution tradition extends through many other thinkers: Aimé Césaire (Discourse on Colonialism, 1950), Amílcar Cabral (Guinea-Bissau independence struggle, theoretical work in the 1960s), Walter Rodney (How Europe Underdeveloped Africa, 1972), Edward Said (Orientalism, 1978), and contemporary postcolonial scholars. The tradition argues that European theoretical frameworks, however sophisticated, miss what's specific to colonial situations: the racial structure, the imperial international system, the violence of dispossession, the question of personhood and humanity.`,
            `Why this matters for analyzing revolutions. The Haitian Revolution (1791-1804) is one of our three case studies, and applying purely European frameworks to it produces partial and distorting accounts. The same applies to the Indian independence movement, Algerian liberation, the Vietnamese revolution, the Cuban revolution (mixed Marxist and anti-colonial dimensions), the Mexican Revolution (with strong Indigenous components), and many others. Recognizing this fourth tradition isn't optional for serious analysis of modern revolutions globally.`,
            `One framing before the cases. Each case ahead will be analyzed through all four frameworks (Marxist, Tocquevillian, Skocpolian, plus colonial-revolution theory where relevant). For the French and Russian revolutions, the European frameworks do most of the work. For the Haitian Revolution, the colonial-revolution framework does work the others can't. The cases will show why.`,
          ],
          image: `/voyager-assets/history/l06-s5-colonial.webp`,
          imageCaption: `Colonial revolution tradition: Frantz Fanon "Wretched of the Earth" 1961 (race, dehumanization, violence and personhood); C.L.R. James "Black Jacobins" 1938 (foundational on Haiti); Aimé Césaire, Amílcar Cabral, Walter Rodney "How Europe Underdeveloped Africa" 1972, Edward Said "Orientalism" 1978. Essential for non-European revolutions.`,
          vocab: [
            {
              word: `colonial revolution`,
              definition: `Fourth tradition addressing what European theoretical traditions (Marxist, Tocquevillian, Skocpolian) underexplain: race, slavery, settler dispossession, imperial structure. Frantz Fanon (1925-1961) "The Wretched of the Earth" 1961: colonial situations differ structurally from European class societies; colonized face racialized dehumanization; colonial state is racial state; revolutionary change requires recovery of personhood plus economic transformation; violence in anti-colonial struggle psychologically necessary (debated). C.L.R. James (1901-1989) "The Black Jacobins" 1938: foundational history of Haitian Revolution; argued European theory underweighted Haiti because didn't fit categories; integrated class analysis with race and colonial structure. Extended tradition: Aimé Césaire "Discourse on Colonialism" 1950, Amílcar Cabral (Guinea-Bissau), Walter Rodney "How Europe Underdeveloped Africa" 1972, Edward Said "Orientalism" 1978. Essential for Haitian, Indian, Algerian, Vietnamese, Cuban, Mexican revolutions.`,
              audioPrompt: `Theories of colonial revolution form a fourth tradition that the European-centered traditions don't fully cover, {name}. The three frameworks covered so far all developed primarily through analysis of European cases. They underexplain colonial revolutions where the central dynamics involve race, slavery, settler dispossession, and imperial structure in ways the European traditions don't address well. Frantz Fanon, a psychiatrist born in Martinique who joined the Algerian liberation struggle against French colonial rule, wrote The Wretched of the Earth in 1961 shortly before his death. Fanon argued that colonial situations differ structurally from European class societies. Colonized peoples don't just face economic exploitation but racialized dehumanization. The colonial state isn't just a class state but a racial state. Revolutionary change requires the recovery of personhood denied by colonization. C.L.R. James, a Trinidadian historian, wrote The Black Jacobins in 1938, the foundational history of the Haitian Revolution. James argued that European theoretical traditions had systematically underweighted Haiti because the revolution didn't fit their categories.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l06-case-study`,
          type: `case-study`,
          headline: `Three Revolutions, Three Frameworks`,
          intro: `{name}, three revolutions analyzed through the four theoretical frameworks. For each, which framework best explains what happened? The cases will show that different frameworks illuminate different aspects, and that for some cases (especially Haiti) the European frameworks need supplementing.`,
          cases: [
            {
              id: `french`,
              title: `The French Revolution (1789-1799)`,
              context: `France in the 1780s: monarchy under Louis XVI faces massive debt from supporting the American Revolution against Britain (1778-1783) and from earlier wars. The fiscal crisis is acute; the existing tax system exempts nobility and clergy, putting the burden on commoners. Attempts at reform by Turgot, Necker, and Calonne are blocked by aristocratic resistance. Bread prices spike in 1788-1789 due to poor harvests. The Estates-General is called for May 1789 (first since 1614); the Third Estate (commoners) declares itself the National Assembly in June. The storming of the Bastille on July 14, 1789, becomes the symbolic opening. The Revolution unfolds across a decade with multiple phases: constitutional monarchy (1789-1792), republican phase (1792-1794), Reign of Terror under Robespierre (1793-1794), Thermidorian reaction (1794), Directory (1795-1799), ending with Napoleon's coup.`,
              question: `Which theoretical framework best explains the French Revolution?`,
              options: [
                {
                  id: `french-marxist`,
                  label: `Primarily Marxist class conflict: the bourgeoisie's economic rise demanded political power that the feudal aristocracy still held; revolution resolved the contradiction by transferring power to the new economic class.`,
                  outcome: `Partial fit. The bourgeois interpretation was the dominant Marxist account from the 19th century through the mid-20th century (Jaurès, Mathiez, Soboul). But revisionist historians from the 1960s onward (Cobban, Doyle, Furet) have challenged this; many French Revolution leaders weren't bourgeois capitalists; the relationship between economic class and political action was looser than the framework suggests; popular movements (sans-culottes) often had agendas in tension with bourgeois interests. The Marxist framework captures something real (class did matter) but the simple bourgeois-revolution story doesn't fit the evidence well.`,
                  insight: `Class structure matters but the Marxist framework as classically applied to France has been substantially revised by historians since the 1960s. Modern accounts integrate class with state crisis, political ideology, and contingency.`,
                },
                {
                  id: `french-tocqueville`,
                  label: `Primarily Tocquevillian: France was improving across the 18th century but reforms raised expectations beyond what the regime could deliver; the gap between improvement-driven expectations and continuing inequality produced revolutionary discontent.`,
                  outcome: `Tocqueville's own account, made directly from archival research in The Old Regime and the Revolution (1856). The 18th-century French economy grew substantially; literacy rose; Enlightenment ideas circulated; reforms began under Louis XVI. These reforms raised expectations that the regime couldn't satisfy. Tocqueville's analysis remains substantially confirmed by later research. But Tocqueville alone doesn't explain the timing of 1789 specifically (why not 1770? not 1800?) or why revolutionary moments succeeded in seizing state power.`,
                  insight: `Tocqueville's account explains the deeper preconditions and the psychology of revolutionary discontent well. It needs supplementing with state-centered analysis to explain why the regime collapsed when it did.`,
                },
                {
                  id: `french-skocpol`,
                  label: `Primarily Skocpolian: the Bourbon state faced fiscal crisis from war debts, elite resistance to reform, and inability to extract resources; state capacity collapse opened political space for revolutionary mobilization.`,
                  outcome: `Strong fit for 1789 specifically. The Bourbon fiscal crisis was acute by 1788; the state couldn't raise revenue without aristocratic consent; the Estates-General was called from desperation. State capacity had collapsed by July 1789 (the Bastille fell because the Paris military command refused to fire on crowds). The Skocpolian framework explains the timing and the success that Tocqueville's expectations theory and Marxist class analysis don't capture as well. Modern historiography of the French Revolution (William Doyle, Lynn Hunt) integrates all three but treats state crisis as proximate cause.`,
                  insight: `Skocpolian state-breakdown analysis fits 1789 timing best. Modern integrated accounts treat class structure (Marxist) and rising expectations (Tocqueville) as deeper context and state crisis as proximate cause.`,
                },
              ],
              correctOptions: [`french-tocqueville`, `french-skocpol`],
              synthesis: `The French Revolution illustrates how the three European frameworks complement rather than compete. Marxist analysis captures the underlying class transformation (rising bourgeoisie, declining aristocracy); Tocquevillian analysis captures the psychology of rising expectations meeting institutional rigidity; Skocpolian analysis captures the proximate cause (fiscal crisis + state capacity collapse). Modern historians (William Doyle, Lynn Hunt, Timothy Tackett) integrate all three. The pure Marxist account, while historically influential, has been substantially revised.`,
            },
            {
              id: `russian`,
              title: `The Russian Revolution (1917)`,
              context: `Russia entered World War I in August 1914 as the Romanov dynasty had ruled for over 300 years. The war devastated the country: roughly 3.3 million Russian military deaths, mass food shortages, transportation breakdowns, and unprecedented popular suffering. By February 1917 (March on Western calendars), bread riots in Petrograd led to soldiers refusing to fire on protesters and within days the tsar abdicated. The Provisional Government and the Petrograd Soviet held dual power through 1917. The Bolsheviks under Lenin (returned from Swiss exile via German train), Trotsky, and others promised "peace, land, bread" and increasingly outflanked the Provisional Government from the left. In October 1917 (November on Western calendars) the Bolsheviks seized state power in a coordinated action that historians describe variously as revolution, coup, or some combination. Civil War followed (1918-1922), ending with Bolshevik consolidation and the establishment of the Soviet Union.`,
              question: `Which framework best explains the Russian Revolution of 1917?`,
              options: [
                {
                  id: `russian-marxist`,
                  label: `Primarily Marxist: industrial workers and peasants developed class consciousness; the Bolsheviks led the proletariat in seizing power; revolution transferred power from bourgeois Provisional Government to working class.`,
                  outcome: `Partial fit, with significant problems. Russia in 1917 was largely agrarian, with industrial workers a small minority. Marx had predicted socialism in advanced capitalist countries, not in a country at Russia's stage of development. Lenin himself developed the theory of imperialism partly to explain why revolution might happen in a "weak link" of the capitalist chain rather than at its center. The Bolsheviks' actual rural and military bases mattered as much as their industrial worker base. Marxist analysis captures something real (class interests did matter; the Bolsheviks did appeal to workers) but doesn't fully explain why 1917, why Russia, or why Bolshevik victory over other socialist parties.`,
                  insight: `Marxist analysis was the Bolsheviks' own framework but doesn't fully fit Russia's situation. The revolution required additional explanation that classical Marxism didn't provide.`,
                },
                {
                  id: `russian-tocqueville`,
                  label: `Primarily Tocquevillian: Russia had been modernizing rapidly since 1861 (emancipation of serfs); economic and educational improvements raised expectations; the gap between rising expectations and tsarist political rigidity produced revolutionary discontent.`,
                  outcome: `Partial fit. Russia had indeed been modernizing rapidly between 1861 (emancipation of the serfs) and 1914. Literacy rates rose; industrialization began; a substantial middle class emerged. The 1905 Revolution had forced the tsar to grant a parliament (Duma) that was then progressively weakened. The pattern of improvement followed by political reversal fits the J-curve. But Tocquevillian analysis doesn't capture the specific role of WWI in destroying the state, which was the proximate cause. The 1905 conditions had been similar without producing successful revolution.`,
                  insight: `Modernization-induced expectations explain background discontent. They don't explain why 1917 specifically and not 1905. The decisive factor was different.`,
                },
                {
                  id: `russian-skocpol`,
                  label: `Primarily Skocpolian: WWI destroyed the tsarist state's capacity to govern; without the war, the tsarist regime continues; with it, state breakdown opens space for revolutionary forces to seize power.`,
                  outcome: `Strong fit. The Russian Revolution of 1917 is one of Skocpol's three central cases in States and Social Revolutions. The argument is well-supported: the 1905 Revolution, with similar class structure and similar expectations, was contained by the still-functional tsarist state. By 1917, three years of catastrophic war had destroyed military capacity (mass desertions, defeats), fiscal capacity (massive deficits, inflation), and political legitimacy (mass casualties widely blamed on the tsar). The February Revolution was bottom-up popular action that the state couldn't suppress because the state had largely collapsed. The October Revolution was Bolshevik seizure of power in a situation where no other organized force could hold the state. Without WWI, neither February nor October is easily imaginable in 1917.`,
                  insight: `Skocpolian analysis explains 1917 better than the alternatives. State breakdown under wartime stress was the proximate cause; Marxist class dynamics and Tocquevillian expectations were context, not the trigger.`,
                },
              ],
              correctOptions: [`russian-skocpol`],
              synthesis: `The Russian Revolution shows state-breakdown analysis at its strongest. WWI destroyed tsarist state capacity in ways neither class structure nor rising expectations alone would have produced. The Bolsheviks succeeded not because Russia had the most developed proletariat (it didn't) but because the wartime collapse of the state created an opening that organized revolutionary leadership could seize. This case is one of Skocpol's foundational examples in States and Social Revolutions (1979). Modern historians (Sheila Fitzpatrick, Stephen Smith, Mark Steinberg) generally accept the state-centered explanation as proximate cause while recognizing the deeper Marxist and modernization-driven context.`,
            },
            {
              id: `haitian`,
              title: `The Haitian Revolution (1791-1804)`,
              context: `Saint-Domingue (French colony, western third of Hispaniola) was the most profitable colony in the Americas in 1789: roughly 500,000 enslaved Africans produced sugar and coffee that supplied much of European demand, generating immense wealth for French planters and merchants. Conditions for the enslaved were among the most brutal anywhere: average life expectancy after arrival in Saint-Domingue was reportedly seven years. When the French Revolution promised liberty and equality, planters wanted those rights for themselves while maintaining slavery; free people of color demanded full citizenship; the enslaved organized. In August 1791, a coordinated uprising began across the northern plains; within months tens of thousands of enslaved people had taken up arms. The revolution unfolded across 13 years against French, Spanish, and British forces. Toussaint Louverture rose as the dominant leader through political and military skill; after his capture by the French in 1802 (he died in prison in 1803), Jean-Jacques Dessalines led the final phase. Haiti declared independence on January 1, 1804, as the second independent nation in the Americas and the first led by formerly enslaved people. France, the United States, and other powers refused to recognize Haiti for decades and imposed an indemnity (France demanded payment of 150 million francs in 1825, equivalent to billions in today's money) that Haiti paid for over a century, structuring Haitian poverty for generations.`,
              question: `Which framework best explains the Haitian Revolution?`,
              options: [
                {
                  id: `haitian-marxist`,
                  label: `Primarily Marxist class conflict: enslaved people as the most exploited class of an emerging capitalist global economy; the revolution as proletarian uprising against the most brutal form of capitalist exploitation.`,
                  outcome: `Partial fit but missing essential features. Marxist analysis captures the economic structure (slavery as labor system producing surplus for European capital). But the framework as classically developed doesn't address the racial dimension that was central to colonial slavery; doesn't address the imperial dimension (Saint-Domingue's role in French Atlantic system); and doesn't address the question of personhood that European Enlightenment categories had denied to enslaved Africans. C.L.R. James in The Black Jacobins (1938) tried to extend Marxism to Haiti and made it work better, but the extension required substantial modifications.`,
                  insight: `Pure Marxist analysis misses what was specific to colonial slavery and racial dehumanization. Extensions and modifications are required to make it work for Haiti.`,
                },
                {
                  id: `haitian-skocpol`,
                  label: `Primarily Skocpolian: French Revolution destabilized French imperial state; war between France, Britain, Spain destroyed French military capacity in the Caribbean; state breakdown opened space for revolutionary action.`,
                  outcome: `Partial fit but missing essential features. State breakdown matters: French Revolutionary turmoil and the Anglo-French wars did create military openings the enslaved exploited. But the framework as classically applied to European states doesn't address the racial structure of colonial states (Saint-Domingue's state was a racial state designed to maintain enslavement of Africans), doesn't address the specific dynamics of imperial system collapse, and doesn't address the question of how the enslaved organized into a coordinated revolutionary force in the first place. State breakdown was necessary but not sufficient.`,
                  insight: `Skocpolian state-breakdown analysis captures one necessary condition (military opening) but misses the racial and colonial structure that made Haiti's revolution different from European cases.`,
                },
                {
                  id: `haitian-colonial`,
                  label: `Primarily colonial-revolution theory plus integration with the others: race, slavery, colonial structure, and the question of personhood denied by European categories are central; the European frameworks need supplementing.`,
                  outcome: `Best fit. C.L.R. James in The Black Jacobins (1938) established this as the foundational analysis. The Haitian Revolution required enslaved Africans to organize across linguistic and ethnic differences imposed by the slave trade; required them to claim the universal rights European Enlightenment had reserved for Europeans; required them to fight not just for political change but for recognition as fully human. The leaders (Toussaint Louverture, Jean-Jacques Dessalines, Henri Christophe) read European Enlightenment texts and turned them against European powers. Fanon's later work on colonial situations applies. Modern historians (Carolyn Fick, Laurent Dubois, Marlene Daut, Julius Scott) integrate class analysis (Marxist), state breakdown (Skocpolian), and the specific dynamics of slavery + race + imperial collapse + Enlightenment-against-Europe that European frameworks alone don't capture.`,
                  insight: `The Haitian Revolution requires the colonial-revolution framework to be analyzed adequately. The European frameworks add useful elements but miss what makes Haiti distinctive: race, slavery, the question of personhood denied by European categories, and the international system designed to maintain that denial.`,
                },
              ],
              correctOptions: [`haitian-colonial`],
              synthesis: `The Haitian Revolution shows why the European theoretical traditions need supplementing for colonial revolutions. Marxist analysis captures economic structure (slavery as labor system); Skocpolian analysis captures military openings (French imperial weakness during Revolutionary wars); but neither addresses what was specific to Haiti: the racial structure of colonial slavery, the question of personhood denied by European Enlightenment categories, and the international refusal to accept a Black republic that produced the 1825 indemnity (150 million francs, paid over 100+ years, structurally producing Haitian poverty). C.L.R. James's The Black Jacobins (1938), Fanon's broader theory (1961), and contemporary scholarship (Carolyn Fick, Laurent Dubois, Marlene Daut) integrate the frameworks while centering what was specific. The Trouillot point from L01 applies: the Haitian Revolution was systematically silenced from Western historical narratives because it didn't fit European categories of what enslaved people could accomplish.`,
            },
          ],
          reflectionPrompt: `Across the three cases: which framework did you find most surprising in what it illuminated? Which framework's limits became clearest? How will you approach analyzing the next revolution you encounter?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What distinguishes a revolution from a coup, reform, or rebellion?`,
              options: [
                `Just violence`,
                `Three features: (1) sudden substantial transformation of the state including changes in who rules and how; (2) broader social transformation including economic structure, class relationships, cultural patterns; (3) popular mobilization beyond elite factions. Coup = state change without social change. Reform = gradual change within existing frameworks. Rebellion = local resistance not transforming broader society. Revolution = all three features combined.`,
                `Just political`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The definitional distinction matters because most "revolutions" reported in news media are actually coups (substantial in 20th-century Latin America especially). Real revolutions are rare and produce fundamental transformation.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the core argument of Marxist theory of revolution?`,
              options: [
                `Just class war`,
                `Revolutions are produced by class conflict, specifically when productive forces (technology, organization) develop beyond what existing relations of production (property arrangements, class structure) can contain. New productive forces require new social relations; the old ruling class resists; the contradiction is resolved through revolutionary transformation. Marx applied to past transitions (slave to feudal, feudal to capitalist) and predicted capitalist to socialist.`,
                `Random`,
                `Just protests`,
              ],
              correctIndex: 1,
              explanation: `The Marxist framework explains long-term economic transformations and class interests. It illuminates underlying structure well but can underexplain timing, religious/ethno-national revolutions, and state-capacity factors.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's Tocqueville's counter-intuitive claim about revolutionary timing?`,
              options: [
                `Random`,
                `Revolutions tend to happen not when conditions are worst but when they're improving. When conditions are uniformly bad, people accept them as natural; when improving, people develop new expectations and compare current reality against an imagined better future. The gap between rising expectations and slowly-improving reality produces revolutionary discontent. From The Old Regime and the Revolution 1856; formalized as J-curve theory (James C. Davies 1962); applied to Arab Spring (improving decades + 2008 reversal).`,
                `When worst`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Tocqueville's claim runs against the intuition that revolutions happen when people are most desperate. The empirical evidence largely confirms his counter-intuitive position: rising expectations followed by reversals produce more revolutionary moments than steady misery.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does Skocpolian theory emphasize as central to revolutions?`,
              options: [
                `Just class`,
                `State breakdown under simultaneous international and domestic pressures. Skocpol compared French (1789), Russian (1917), Chinese (1911 and 1949) revolutions and argued the common feature wasn't class conflict (exists almost everywhere) or rising expectations (exist in many non-revolutionary contexts) but specific patterns of state capacity collapse. State military, fiscal, administrative capacity all matter independently. From States and Social Revolutions 1979.`,
                `Random`,
                `Just elites`,
              ],
              correctIndex: 1,
              explanation: `Skocpolian analysis explains why some revolutionary moments succeed while others (with similar class structure and grievances) fail. The state-capacity dimension is largely independent of underlying class dynamics.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why are European theoretical traditions insufficient for analyzing colonial revolutions?`,
              options: [
                `Random`,
                `They developed primarily through analysis of European or European-derived cases and underexplain race, slavery, settler dispossession, imperial structure. Colonial situations involve racialized dehumanization, racial state structure, and the question of personhood denied by European Enlightenment categories. Frantz Fanon "The Wretched of the Earth" 1961 and C.L.R. James "The Black Jacobins" 1938 established the fourth theoretical tradition; extends through Aimé Césaire, Amílcar Cabral, Walter Rodney, Edward Said.`,
                `Just race`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The fourth tradition isn't optional supplement; it's essential for understanding revolutions across the colonized world. Pure Marxist analysis of Haiti misses what's specific; Skocpolian state-breakdown analysis captures one necessary condition but not the racial structure.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did the French Revolution case study show about the three European theoretical frameworks?`,
              options: [
                `Random`,
                `They complement rather than compete. Marxist analysis captures the underlying class transformation (rising bourgeoisie, declining aristocracy) but the pure bourgeois-revolution story has been substantially revised by historians since the 1960s. Tocquevillian analysis captures rising-expectations psychology (France was improving, reforms raised expectations, gap produced discontent). Skocpolian analysis captures the proximate cause (fiscal crisis + state capacity collapse). Modern historiography (Doyle, Hunt, Tackett) integrates all three.`,
                `Just Marx`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The French Revolution case shows the frameworks working as complementary lenses on different dimensions. Pure Marxist analysis was historically dominant but has been revised; Tocquevillian and Skocpolian analyses add what Marxist alone missed.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why was the Russian Revolution of 1917 such a strong case for Skocpolian state-breakdown analysis?`,
              options: [
                `Random`,
                `WWI destroyed tsarist state capacity in ways neither class structure nor rising expectations alone would have produced. The 1905 Revolution, with similar class structure and similar expectations, had been contained by the still-functional tsarist state. By 1917, three years of catastrophic war (3.3 million Russian military deaths, mass food shortages, transportation collapse, political delegitimization) destroyed military, fiscal, and political capacity. The Bolsheviks succeeded not because Russia had the most developed proletariat but because wartime collapse created an opening organized revolutionary leadership could seize.`,
                `Just Lenin`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Russian case is one of Skocpol's three foundational examples. The comparison with 1905 (similar class structure, similar expectations, no successful revolution) shows that state-breakdown was the decisive variable.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does the Haitian Revolution case show about applying European frameworks to colonial revolutions?`,
              options: [
                `Random`,
                `European frameworks add useful elements but miss what's specific to colonial revolutions. Marxist analysis captures economic structure (slavery as labor system) but misses race and the question of personhood denied by European Enlightenment categories. Skocpolian analysis captures military openings (French imperial weakness during Revolutionary wars) but misses the racial structure of colonial states. C.L.R. James "Black Jacobins" 1938 + Fanon plus modern scholarship (Carolyn Fick, Laurent Dubois, Marlene Daut) integrate frameworks while centering what European theory missed. The Trouillot silencing point applies: Haiti was systematically excluded from Western historical narratives.`,
                `Just race`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Haitian Revolution required enslaved Africans to organize across linguistic and ethnic differences, claim universal rights European Enlightenment had reserved for Europeans, and fight for recognition as fully human. European frameworks alone can't analyze this adequately.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The Marxist theory of revolution, in its classical formulation, accurately predicts where socialist revolutions will occur (advanced capitalist countries with developed proletariat).`,
              correctAnswer: false,
              explanation: `False. Classical Marxism predicted socialist revolutions in advanced capitalist countries with developed industrial proletariat. The actual 20th-century communist revolutions occurred mostly in agrarian or semi-agrarian societies (Russia in 1917, China in 1949, Vietnam, Cuba, etc.). Advanced capitalist countries (US, UK, France, Germany after 1945) did not have communist revolutions. Lenin developed the theory of imperialism partly to explain why revolution might happen in "weak links" of the global capitalist chain rather than at its center. The actual pattern of communist revolutions doesn't fit classical Marxist predictions; it requires additional theoretical explanation involving state structure, war, peasant grievances, and contingency.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend tells you "the Arab Spring failed because Arab cultures aren't ready for democracy. Tunisia is the only one that became a real democracy and even that's struggling." Based on this lesson, what should you point out?`,
              options: [
                `"Yes culture matters"`,
                `"Several specific things. First, the 'culture isn't ready' framing is what political scientists call cultural essentialism, and it has bad explanatory and predictive track record. The same argument was made about Catholic countries before Spain, Portugal, and Italy democratized; about Confucian countries before South Korea, Taiwan, and Japan democratized; about Latin American countries before most became democracies in the 1980s-90s. Cultural categories that supposedly explain why democracy can't work tend to dissolve when democracy does work. Second, the actual variation across Arab Spring outcomes (Tunisia transitioned, Egypt reverted to military rule, Libya collapsed into civil war, Syria became catastrophic civil war, Yemen became proxy war, Bahrain was suppressed, Saudi Arabia + Gulf monarchies survived through repression + petroleum revenue) is better explained by state-capacity differences and international intervention than by 'culture.' Egypt had a strong military that retained capacity; Libya had a weak state that collapsed entirely; Syria had a state that fought back with massive force and international support from Russia and Iran. These are Skocpolian factors (state capacity, military structure, international pressures), not cultural ones. Third, the Tocquevillian framework actually predicted the Arab Spring well in advance: Arab countries had been generally improving for decades (rising literacy, urbanization, education, internet penetration) followed by sharp reversals (2008 financial crisis, food price shocks). The J-curve fit. But state-capacity differences then determined which countries' revolutionary moments succeeded in producing transitions. Fourth, the Tunisia comparison points to specific factors: Tunisia had a smaller and more professional military that withdrew from politics relatively quickly; lacked massive oil revenues that could fund repression; had stronger civil society institutions including unions (UGTT, which won the 2015 Nobel Peace Prize). These are structural-institutional differences, not 'cultural' ones. Fifth, what to do practically: ask your friend which specific factors he thinks distinguish Arab cultures from cultures that have democratized successfully. Push the conversation past abstractions to specifics. Often the 'culture' explanation dissolves when the specifics get examined; what looks like cultural difference often turns out to be specific institutional, structural, or international factors that are changeable rather than essential."`,
                `"Random"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied revolutionary analysis. The "culture isn't ready" framing is cultural essentialism with bad track record; the variation across Arab Spring countries is better explained by state-capacity and international factors (Skocpolian); the Tocquevillian framework actually predicted the moment well; structural-institutional analysis produces real insight where cultural analysis produces stereotype.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-school`, category: `Schooling`, prompt: `What revolutions have you learned about in school? Which framework was implicit in how they were taught? What did that framework miss?` },
            { id: `reflect-haiti`, category: `Haiti specifically`, prompt: `The Haitian Revolution was systematically silenced from Western historical narratives. Had you learned about it before this lesson? What does its absence (or partial presence) say about how history gets taught?` },
            { id: `reflect-current`, category: `Current events`, prompt: `Apply the four frameworks to a current revolutionary or proto-revolutionary moment (Myanmar resistance, Sudan 2019+, others). Which framework illuminates most? Which falls short?` },
            { id: `reflect-violence`, category: `Violence`, prompt: `Fanon's argument that revolutionary violence is psychologically necessary for the colonized to break internalized inferiority remains controversial. Where do you stand? What's the strongest case for and against?` },
            { id: `reflect-success`, category: `What "success" means`, prompt: `The French, Russian, and Haitian revolutions all "succeeded" in their immediate aims but produced complicated long-term legacies. What does it mean for a revolution to succeed? How long is the time horizon for evaluation?` },
            { id: `reflect-personal`, category: `Personal connection`, prompt: `Pick one revolution that has shaped your family's history (immigration, refugee status, displacement, political identity). Apply the frameworks. What do they explain about what your family experienced?` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Understanding revolutions matters because revolutions are still happening, and the frameworks shape how we read them. Two paths.`,
          familyActivity: {
            title: `Family Revolutions Conversation`,
            duration: `60 minutes`,
            description: `Share the four frameworks (Marxist, Tocquevillian, Skocpolian, colonial-revolution) with your family. Pick a revolution your family has a relationship to (American Revolution, your family's country of origin's revolutionary history, Civil Rights Movement, Arab Spring, anything) and apply the frameworks. Family discussions often reveal that different family members hold different implicit frameworks; making the frameworks explicit can shift conversations productively. If your family has heritage in a country that experienced a revolution, the conversation can be particularly meaningful: what frameworks does your family use to understand that history? What did you grow up hearing?`,
          },
          projectOption: {
            title: `Apply Frameworks to a Current Revolutionary Moment, 3 weeks (optional)`,
            duration: `3 weeks, ~45 minutes per session`,
            description: `Pick a current or recent revolutionary moment (Tunisia 2011 success, Egypt 2011-2013 failure, Sudan 2019, Myanmar resistance, Bolivia 2019-2020, others). Week 1: research the context and chronology in depth. Week 2: apply each of the four frameworks (Marxist class analysis, Tocquevillian expectations, Skocpolian state breakdown, colonial-revolution theory if relevant). Week 3: write 1,500 words on which framework or combination of frameworks best explains what happened and what didn't, and what your analysis suggests about how the situation will evolve.`,
            offerToParent: `Parent: opt your kid into this project. Building the capacity to analyze ongoing revolutionary moments through serious theoretical frameworks is among the highest-leverage skills for engaged citizenship in a turbulent global moment.`,
          },
          identityQuestion: `If you become someone who reads revolutions through four theoretical frameworks across decades, what does that change about how you engage with political news and historical claims about transformation?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who analyzes revolutions through four frameworks: class, expectations, state breakdown, colonial structure.`,
            `A person who recognizes the Haitian Revolution as central to modern world history.`,
            `Someone who can distinguish revolution from coup, reform, and rebellion.`,
          ],
          saveKey: `identity_responses_hw_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixth History and World lesson done. You have framework for four major theoretical traditions on revolution: Marxist class conflict (Marx, Engels, Lenin), Tocquevillian rising expectations (Tocqueville 1856, Davies 1962 J-curve), Skocpolian state breakdown (Skocpol 1979), and colonial revolution theory (C.L.R. James 1938, Fanon 1961, plus extended tradition). You've applied them to three foundational cases (French, Russian, Haitian) and seen which framework best illuminates each. The cases also showed that the Haitian Revolution requires the fourth framework in ways the European frameworks alone can't provide. Fourteen lessons to go. Next: Imperialism and Its Long Shadow. The structural framework underlying many of the revolutions we just analyzed. Argument Builder format. Onward. — Lyra`,
          badge: `revolutions-analyst`,
          badgeName: `Revolutions Analyst`,
          xpEarned: 75,
          competencies: [
            `Distinguishes revolution from coup, reform, rebellion`,
            `Articulates Marxist, Tocquevillian, Skocpolian, and colonial-revolution theoretical traditions`,
            `Applies the four frameworks to French (1789), Russian (1917), and Haitian (1791-1804) revolutions`,
            `Recognizes when European frameworks are insufficient for colonial revolutions`,
            `Names foundational theorists by name (Marx, Tocqueville, Skocpol, James, Fanon, Davies)`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Imperialism and Its Long Shadow`,
            hook: `Argument Builder. The structural framework underlying many revolutions of L06.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L06 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
