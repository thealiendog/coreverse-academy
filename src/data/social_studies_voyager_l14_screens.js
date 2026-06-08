// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L14 — The Cold War in Global Perspective
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (History/Global) — D2.His
// Interaction: CASE-STUDY (5 cases). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l14-v1";

const SOCIAL_STUDIES_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-14`,
      title: `The Cold War in Global Perspective`,
      duration: 35,
      xpReward: 75,
      badge: `cold-war-analyst`,
      badgeName: `Cold War Analyst`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, from 1945 to 1991, everything in global politics was organized around one fact: the rivalry between the United States and the Soviet Union. The Cold War shaped alliances, proxy wars, nuclear strategy, and the domestic politics of dozens of countries. Understanding it is understanding the world that produced our current one. This lesson gives you the Cold War's logic, its turning points, and its long shadow.`,
          headline: `The Cold War in Global Perspective`,
          subtitle: `The ideological conflict that organized the post-1945 world, the crises it generated, and the legacies it left. A Case Study.`,
          visual: `/voyager-assets/social-studies/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Origins And Structure`,
          paragraphs: [
            `The Cold War emerged from the rubble of World War II. The U.S. and Soviet Union had been allied against Nazi Germany but were divided: the U.S. represented liberal democracy and capitalism; the Soviet Union represented communist one-party rule and a state-planned economy. Both superpowers sought to expand their influence, leading to confrontation.`,
            `The Cold War was bipolar: two nuclear-armed superpowers organized most of the world into competing blocs. The United States led the Western alliance (NATO); the Soviet Union led the Eastern bloc (Warsaw Pact). Much of the decolonizing world became the contested "Third World," where both superpowers competed for influence through aid, coups, and proxy wars.`,
            `Nuclear weapons gave the Cold War its defining characteristic: the possibility of mutual annihilation. The doctrine of mutually assured destruction (MAD) held that neither superpower would launch a nuclear first strike because retaliation would destroy both. This kept superpower peace by making direct war unthinkably costly, while pushing rivalry into proxy conflicts where millions died.`,
          ],
          image: `/voyager-assets/social-studies/l14-s1-origins.webp`,
          imageCaption: `The Cold War emerged from WWII. The U.S. represented liberal democracy and capitalism; the Soviet Union represented communist one-party rule and a planned economy. The structure was BIPOLAR: two nuclear-armed superpowers, each organizing competing blocs. The U.S. led NATO (democratic-capitalist nations); the Soviet Union led the WARSAW PACT (communist states). The decolonizing "THIRD WORLD" became contested terrain. NUCLEAR WEAPONS gave the Cold War its defining characteristic: MUTUALLY ASSURED DESTRUCTION (MAD) held that neither superpower would launch a first strike because retaliation would destroy both. This paradox kept direct superpower war from happening, but pushed rivalry into PROXY CONFLICTS where millions died without triggering nuclear exchange.`,
          vocab: [
            { word: `bipolar world`,
              definition: `The structure of the Cold War international system, organized around two superpowers and their competing blocs, with most nations aligned or pressured to align with one side.`,
              audioPrompt: `A bipolar world, {name}, is the international structure of the Cold War: two superpowers, the U.S. and Soviet Union, each with nuclear weapons and competing ideologies, organized most of the world into competing blocs. This is very different from a multipolar world with many great powers, or a unipolar world with one dominant power. In a bipolar structure, almost every international event, every coup, every war, every diplomatic move, gets interpreted through the lens of which superpower benefits. The Cold War's bipolar structure shaped everything from which governments were tolerated to which development models were promoted. How does a bipolar world differ from what you see in today's international system?` },
            { word: `mutually assured destruction`,
              definition: `The nuclear doctrine that deterred direct superpower war by ensuring that any nuclear first strike would result in devastating retaliation, making nuclear war irrational for both sides.`,
              audioPrompt: `Mutually assured destruction, or MAD, {name}, is the grim logic that kept direct war between the superpowers from happening during the Cold War. Both the U.S. and Soviet Union had enough nuclear weapons to survive a first strike and still retaliate with devastating force. This meant that starting a nuclear war guaranteed your own destruction. So neither side would do it. The peace between the superpowers was not based on trust or friendship; it was based on the certain knowledge that war meant mutual annihilation. There's something profoundly disturbing about a peace built on the threat of civilizational destruction. Does MAD seem like a stable basis for international security to you?` },
            { word: `proxy conflict`,
              definition: `A war or conflict in a third country where one or both superpowers support opposing sides without directly fighting each other, advancing their rivalry at the cost of the local population.`,
              audioPrompt: `A proxy conflict, {name}, is what happens when superpowers who can't fight each other directly, because of nuclear deterrence, fight through other countries. The U.S. and Soviet Union armed, funded, and directed opposing sides in wars across Korea, Vietnam, Latin America, Africa, and Asia, advancing their rivalry at the cost of millions of local lives. The people of these countries bore the actual physical violence while the superpowers calculated strategic advantage from a distance. This dynamic devastated many post-colonial nations we studied in the last lesson. What do you think about the ethics of pursuing strategic competition through other people's suffering?` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Ideological Contest`,
          paragraphs: [
            `The Cold War was not only a strategic competition; it was a battle of ideas. Capitalism and liberal democracy competed with communism for global allegiance. Capitalism promised individual freedom, economic prosperity, and democratic rights; communism promised economic equality and liberation of the working class. Both generated genuine enthusiasm worldwide.`,
            `For many in the developing world, the Soviet model initially had real appeal. The USSR had industrialized rapidly, and Soviet anti-colonial rhetoric resonated with populations exploited by the same Western powers now promoting capitalism. Cuba's revolution offered a Third World model of socialist development. The ideological contest was genuinely competitive in many regions.`,
            `But both systems had profound failures. Soviet communism suppressed political freedom, produced economic stagnation, and maintained rule through political terror under Stalin and surveillance under his successors. Capitalism as promoted by the West often meant supporting authoritarian governments that protected foreign investment while suppressing democratic movements.`,
          ],
          image: `/voyager-assets/social-studies/l14-s2-ideology.webp`,
          imageCaption: `The Cold War was also an IDEOLOGICAL CONTEST. Capitalism and liberal democracy competed with communism and Soviet socialism. CAPITALISM promised individual freedom, economic prosperity, and democratic rights. COMMUNISM promised the end of exploitation, economic equality, and liberation of the working class. Both generated genuine enthusiasm. For many in the DEVELOPING WORLD, the Soviet model initially had real appeal: the USSR had rapidly industrialized, and Soviet ANTI-COLONIAL RHETORIC resonated with peoples exploited by Western powers. But both systems had profound FAILURES: Soviet communism suppressed political freedom and used political terror; Western capitalism often meant backing authoritarian governments that protected foreign investment while suppressing democratic movements.`,
          vocab: [
            { word: `the ideological contest`,
              definition: `The battle of ideas between capitalism/liberal democracy and communism/Soviet socialism for global allegiance, involving genuine appeal for both systems in different parts of the world.`,
              audioPrompt: `The ideological contest, {name}, is what made the Cold War more than just a strategic competition between two powerful states: it was a battle for the future of humanity itself, or at least that's how both sides framed it. Capitalism promised individual freedom, economic growth, and democratic governance. Communism promised economic equality, liberation from exploitation, and collective ownership of the means of production. Both attracted genuine believers around the world. Understanding that the Cold War was a real battle of ideas, not just a power competition, helps explain why it generated such intense loyalty and such brutal methods, people believed they were fighting for civilization itself. Which ideological appeal do you find more understandable, and why?` },
            { word: `developing world`,
              definition: `The genuine resonance of Soviet socialist ideology for many newly independent nations, based on the USSR's rapid industrialization, anti-colonial rhetoric, and critique of Western capitalism.`,
              audioPrompt: `Communist appeal in the developing world, {name}, is something Western narratives of the Cold War often minimize, but it was genuinely real. The Soviet Union had transformed from a poor agricultural society to an industrial power in decades, making it a development model for nations that wanted to modernize quickly. Soviet rhetoric explicitly opposed colonialism and imperialism, resonating with peoples who had just escaped Western colonial rule. And the communist critique of capitalism as exploitation had obvious relevance for populations that had spent centuries being economically extracted by Western powers. Understanding this appeal is essential to understanding why so many independence movements had socialist or communist dimensions. Does it make sense to you that people who had been exploited by capitalism might find socialist ideas compelling?` },
            { word: `Cold War hypocrisy`,
              definition: `The gap between both superpowers' stated ideological values and their actual behavior: the U.S. backing authoritarian governments; the Soviet Union using political terror and suppression.`,
              audioPrompt: `Cold War hypocrisy, {name}, is the gap between what each superpower claimed to stand for and what it actually did. The United States promoted democracy and freedom while backing authoritarian regimes in Iran, Guatemala, Chile, South Korea, and many other countries when those regimes protected U.S. interests. The Soviet Union promoted liberation from exploitation while maintaining political terror under Stalin, suppressing Eastern European uprisings in Hungary and Czechoslovakia by force, and running a surveillance state. Neither side lived consistently up to its stated values. Recognizing this hypocrisy doesn't mean the two systems were equivalent, but it does mean both should be evaluated honestly rather than accepted at their own ideological self-description.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Key Crises`,
          paragraphs: [
            `The Cold War generated multiple crises near nuclear war. The Berlin Blockade (1948-49) pitted Soviet pressure against an American airlift. The Korean War (1950-53) was the first major hot conflict, ending in stalemate. The Cuban Missile Crisis (1962) brought the world to the brink: Soviet missiles in Cuba, U.S. blockade, intense negotiations before the Soviets withdrew.`,
            `The Cuban Missile Crisis showed how close Cold War competition could come to catastrophic miscalculation. Hard-liners pushed for aggressive action; both leaders had to override that pressure and negotiate. Later revelations showed how close the world came to nuclear exchange through miscommunication. The crisis permanently changed how both superpowers managed nuclear risk.`,
            `Other significant moments: the Hungarian Revolution of 1956 was crushed by Soviet tanks. The Prague Spring of 1968 similarly ended in Soviet military intervention. The U.S. backed coups in Iran (1953), Guatemala (1954), and Chile (1973). These crises revealed the Cold War as a system that produced real violence, real suppression, and real human suffering.`,
          ],
          image: `/voyager-assets/social-studies/l14-s3-crises.webp`,
          imageCaption: `The Cold War generated MULTIPLE CRISES. The BERLIN BLOCKADE (1948-49): Soviet pressure versus American airlift. The KOREAN WAR (1950-53): the first major hot conflict, ending in stalemate that technically continues. The CUBAN MISSILE CRISIS (1962): Soviet missiles in Cuba, U.S. blockade, thirteen days from potential nuclear war, resolved when Soviets withdrew. Later revelations showed how CLOSE THE WORLD CAME to nuclear exchange through miscommunication. The HUNGARIAN REVOLUTION (1956) and PRAGUE SPRING (1968) were both crushed by Soviet tanks, revealing the limits of Eastern European freedom. In the West, U.S. backed COUPS in Iran (1953), Guatemala (1954), Chile (1973), and across Latin America. The Cold War produced real violence, real suppression, and real human suffering.`,
          vocab: [
            { word: `Cuban Missile Crisis`,
              definition: `The 1962 confrontation between the U.S. and Soviet Union over Soviet missiles in Cuba, the closest the Cold War came to nuclear war, resolved through negotiation after thirteen days.`,
              audioPrompt: `The Cuban Missile Crisis, {name}, was the most dangerous moment of the Cold War: thirteen days in October 1962 when the world was genuinely close to nuclear war. The U.S. discovered Soviet nuclear missiles being installed in Cuba, just ninety miles from Florida. President Kennedy imposed a naval blockade; Soviet ships carrying missiles were en route. Later declassified documents revealed how close war came: a Soviet submarine that lost communication with Moscow nearly launched a nuclear torpedo on its own authority; only the refusal of one officer, Vasili Arkhipov, prevented it. The crisis was resolved through secret negotiations. Thirteen days, one officer, and the world didn't end. How does knowing how close we came change how you think about nuclear risk?` },
            { word: `coups`,
              definition: `The pattern of both superpowers backing coups, assassinations, and interventions in third countries to install or maintain friendly governments, regardless of democratic legitimacy.`,
              audioPrompt: `Cold War coups and interventions, {name}, were one of the most destructive features of the Cold War for the developing world. The U.S. backed coups that removed democratically elected governments in Iran in 1953, Guatemala in 1954, and Chile in 1973, among many others, because those governments were seen as too friendly to communism or unfriendly to U.S. business interests. The Soviet Union similarly backed coups and suppressed reform movements in Eastern Europe by force. Both superpowers treated Third World populations as pawns in their strategic competition, with devastating consequences for democracy and development in affected countries. If your family has roots in Latin America, these interventions may be part of your family's history.` },
            { word: `nuclear risk`,
              definition: `The competitive buildup of nuclear and conventional weapons by both superpowers, creating the permanent risk of accidental or intentional nuclear exchange, and consuming enormous resources that could have been used for development.`,
              audioPrompt: `The arms race and nuclear risk, {name}, were the constant background condition of the Cold War: both superpowers continuously developing more and more destructive nuclear weapons, generating both deterrence and danger. At its peak, the U.S. and Soviet Union together held tens of thousands of nuclear warheads, each capable of destroying a city. The arms race consumed enormous resources that both societies could have used for education, infrastructure, and development. And the risk of accidental nuclear war, through miscommunication, technical failure, or a submarine officer making an independent decision, was persistently real. The Cuban Missile Crisis showed how thin the margin was between deterrence and catastrophe.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Cold War Ends`,
          paragraphs: [
            `The Cold War ended more suddenly than anyone predicted. By the early 1980s, the Soviet economy was stagnating, the military burden was crushing, and Afghanistan was a quagmire. Mikhail Gorbachev, Soviet leader from 1985, introduced reforms: glasnost (allowing limited public discussion of failures) and perestroika (economic restructuring), intended to save the Soviet system.`,
            `The reforms accelerated the system's collapse. Freedom of expression revealed public discontent. Nationalist movements gathered force. When Gorbachev signaled he would not use force, the Berlin Wall fell in November 1989, communist governments collapsed across Eastern Europe, and the Soviet Union dissolved in 1991, splitting into fifteen independent states.`,
            `The Cold War's end was celebrated as a triumph of liberal democracy and the "end of history," Francis Fukuyama's ultimately premature claim. But the post-Cold War world produced new challenges: wars in former Yugoslavia, ethnic conflicts freed from Cold War suppression, economic chaos in former Soviet states, terrorism, and an increasingly assertive China.`,
          ],
          image: `/voyager-assets/social-studies/l14-s4-end.webp`,
          imageCaption: `The Cold War ended more SUDDENLY THAN PREDICTED. Soviet stagnation, the military burden, the disastrous AFGHANISTAN WAR (1979-89), and lost legitimacy created the conditions. MIKHAIL GORBACHEV's reforms, GLASNOST (openness) and PERESTROIKA (restructuring), intended to save the system, instead ACCELERATED ITS COLLAPSE. Freedom of expression revealed discontent; nationalist movements gathered force; when Gorbachev signaled he would NOT USE FORCE to keep Eastern European regimes in power, the dominoes fell. THE BERLIN WALL fell November 1989; communist governments collapsed across Eastern Europe; the SOVIET UNION DISSOLVED December 25, 1991. The post-Cold War world brought new challenges: wars in former Yugoslavia, ethnic conflicts, economic chaos in former Soviet states, and an increasingly assertive China.`,
          vocab: [
            { word: `glasnost and perestroika`,
              definition: `Gorbachev's reform policies: glasnost (openness, allowing limited public criticism) and perestroika (economic restructuring), intended to save the Soviet system but instead accelerating its collapse.`,
              audioPrompt: `Glasnost and perestroika, {name}, were Mikhail Gorbachev's attempts to reform the Soviet system from within: glasnost meant allowing more open discussion and criticism, perestroika meant restructuring the Soviet economy to be more efficient. The intention was to save the Soviet system by making it work better. The result was the opposite: once people could speak more freely, they revealed the depth of their dissatisfaction with the system. Once the Soviet republics and satellite states saw that Moscow would not use tanks to keep them in line, they pushed for independence. Gorbachev's reforms are a fascinating historical case of a leader who tried to save a system and ended up dissolving it. What does this tell you about the limits of partial reform of a fundamentally repressive system?` },
            { word: `berlin wall`,
              definition: `The November 1989 opening of the Berlin Wall, which symbolized the collapse of the Iron Curtain and the beginning of the end of the Cold War's division of Europe.`,
              audioPrompt: `The fall of the Berlin Wall, {name}, on November 9, 1989, was one of the most dramatic and symbolically powerful moments of the twentieth century. The Wall had divided East and West Berlin since 1961, symbolizing the Iron Curtain that divided communist and capitalist Europe. When East German authorities announced that citizens could cross freely, crowds gathered and began tearing down the Wall with their hands. The images were broadcast worldwide. Within months, the communist governments of Eastern Europe had all collapsed, and within two years the Soviet Union itself dissolved. One wall's fall led to an empire's end. How does it feel to know that history can change that quickly and that dramatically?` },
            { word: `post-Cold War challenges`,
              definition: `The new conflicts and instabilities that emerged after the Cold War's end: wars in former Yugoslavia, ethnic conflicts, economic chaos in former Soviet states, terrorism, and the rise of China.`,
              audioPrompt: `Post-Cold War challenges, {name}, are a sobering reminder that ending one conflict doesn't automatically create peace. The prediction that the Cold War's end would bring a peaceful liberal world order proved wrong fairly quickly. The former Yugoslavia disintegrated into brutal ethnic wars. Former Soviet states experienced economic chaos. Ethnic and religious conflicts that had been suppressed by Cold War alignments re-emerged. Terrorism became the new security preoccupation. And China, far from liberalizing as it integrated into the global economy, developed into a competing great power. The post-Cold War world traded one set of challenges for another. What does this suggest about the possibility of a world without major power competition?` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Cases`,
          paragraphs: [
            `Pull it together. The Cold War was the organizing structure of the post-1945 world: a bipolar rivalry organized around competing ideologies, armed with nuclear weapons that deterred direct war but pushed competition into proxy conflicts. Both superpowers made universal ideological claims with profound gaps between those claims and their actual behavior.`,
            `Key crises, from Berlin to Korea to Cuba, revealed how close the Cold War came to nuclear catastrophe. Both superpowers backed coups and treated the developing world as strategic terrain. Soviet stagnation, the Afghanistan quagmire, and Gorbachev's reforms led to the Soviet system's collapse in 1991. The post-Cold War world brought new challenges rather than permanent peace.`,
            `Now you become the Cold War analyst. Five cases: Korea's division, Cuba's revolution, Chile's CIA-backed coup, the Soviet Union's domestic life, and the Cold War's global legacy. For each case, trace how the global competition played out at the human level, who made decisions, who paid the costs, and what legacies remain. The Cold War is not just history. Onward.`,
          ],
          image: `/voyager-assets/social-studies/l14-s5-before.webp`,
          imageCaption: `Threads together. The Cold War was the POST-1945 ORGANIZING STRUCTURE: a bipolar rivalry between the U.S. and Soviet Union, competing ideologies, nuclear weapons deterring direct war but pushing competition into PROXY CONFLICTS. Both superpowers made UNIVERSAL IDEOLOGICAL CLAIMS with profound GAPS between claims and behavior. Key crises (Berlin, Korea, Cuba) revealed how close the world came to nuclear catastrophe. Both backed COUPS and treated the developing world as strategic terrain. SOVIET COLLAPSE came from stagnation, Afghanistan, and Gorbachev's reforms, ending in 1991. POST-COLD WAR brought new challenges, not permanent peace. Five cases trace the Cold War's human impact. Trace who decided, who paid, and what legacies remain. The Cold War is not just history. Onward.`,
          vocab: [
            { word: `Cold War legacy`,
              definition: `The ongoing effects of Cold War competition: divided nations, post-communist transitions, proxy war destruction, arms proliferation, and the political alignments that still shape today's world.`,
              audioPrompt: `Cold War legacy, {name}, is the recognition that the Cold War didn't simply end in 1991 and disappear. Its effects are still with us. Korea is still divided. Cuba's political system reflects its Cold War origins. Latin American political cultures were shaped by U.S.-backed coups and the suppression of left-wing movements. Former Soviet states are still navigating the transition from communism to different forms of governance and economy. Nuclear weapons still exist and nuclear risk persists. China's rise as a great power competitor is partly shaped by Cold War dynamics. Understanding the Cold War's legacy helps you read today's international headlines with much more context and clarity.` },
            { word: `human level`,
              definition: `The experience of the Cold War by ordinary people: those divided by the Korean ceasefire, living under Soviet surveillance, surviving CIA-backed coups, or dying in proxy wars.`,
              audioPrompt: `The Cold War at the human level, {name}, is the reminder that this global ideological competition was not abstract: it was lived by real people in profoundly different ways depending on where they were. A family divided by the Korean ceasefire might never see each other again. An East German citizen lived under one of history's most comprehensive surveillance states. A Chilean after the 1973 coup faced political imprisonment or exile. A Vietnamese peasant lived through decades of bombing and proxy war. The superpower strategists in Washington and Moscow calculated moves; ordinary people in Korea, Cuba, Chile, and Vietnam paid the costs. As you work through the cases, stay connected to the human reality beneath the strategic analysis.` },
            { word: `nuclear risk today`,
              definition: `The ongoing reality that nuclear weapons still exist in large numbers, that new nations have acquired them, and that Cold War-era risk of accidental or intentional use has not disappeared.`,
              audioPrompt: `Nuclear risk today, {name}, is the uncomfortable reality that the Cold War's most dangerous legacy, nuclear weapons, didn't go away with the Soviet Union. The U.S. and Russia still hold thousands of warheads. North Korea has nuclear weapons. India and Pakistan, two countries that nearly fought nuclear war in 1999, have them. The Cuban Missile Crisis showed how close we can get to accidental nuclear war through miscommunication and confusion. The arms control architecture that was built during the Cold War has been partially dismantled. Understanding nuclear risk is not just Cold War history: it's a live challenge of your lifetime. How do you think your generation should approach this inherited danger?` },
          ],
        },

        {
          id: `l14-case-study`,
          type: `case-study`,
          headline: `Five Cold War Investigations`,
          intro: `{name}, you're the Cold War analyst now. Each case traces how the global competition played out at the human level in a specific place. Who made the decisions? Who paid the costs? What legacies remain? The Cold War is not just history.`,
          cases: [
            {
              id: `c1`,
              title: `Korea: The war that never ended`,
              type: `Proxy war and permanent division`,
              description: `When Japanese colonial rule of Korea ended in 1945, the peninsula was divided at the 38th parallel: the Soviet Union occupied the north, the United States the south. Both installed governments aligned with their ideology. In June 1950, North Korea invaded South Korea; the UN (led by the U.S.) intervened; China entered the war after UN forces approached the Chinese border. The armistice of 1953 essentially restored the pre-war line. Korea remained divided. North Korea became one of the world's most isolated and repressive regimes; South Korea became a democracy and economic miracle. The armistice has never been replaced by a peace treaty.`,
              questions: [
                `How did the Cold War's bipolar structure transform Korea's post-colonial situation into a permanent division?`,
                `What do the dramatically different trajectories of North and South Korea reveal about how institutions and ideology shape development?`,
                `Why does the Korean War still matter today, and what are its ongoing legacies?`,
              ],
              evaluation: `As a Cold War analyst, you'd identify Korea as one of the most instructive cases of how Cold War bipolarity transformed what might have been a unified post-colonial nation into a permanent division with profoundly different consequences for those on either side of the line. Korea's division was not inevitable. Before 1945, Korea was a single nation with a shared language, culture, and history under Japanese colonial rule. The post-World War II division at the 38th parallel was a military convenience, not a reflection of any natural division within Korean society. Both occupation powers installed governments aligned with their own systems: the U.S. backed Syngman Rhee in the south; the Soviet Union backed Kim Il-sung in the north. The Korean War (1950-1953) was the result of both Korean governments wanting to reunify the peninsula on their own terms, with superpower backing for each side. When North Korea invaded in 1950, the U.S.-led UN intervention prevented a communist takeover of the south. When UN forces approached the Chinese border, China entered, preventing a U.S. takeover of the north. The resulting stalemate restored roughly the pre-war line at enormous human cost: estimated casualties including both military and civilian deaths range from 2.5 to 5 million, and the war created massive refugee flows. The comparison between North and South Korea after the armistice is one of the most dramatic natural experiments in the relationship between political and economic institutions and development outcomes. Both started from similar positions in 1953: similar populations, similar levels of development, devastated by the same war. By the 2020s, South Korea had become the world's 10th largest economy, a democracy with global cultural influence (K-pop, Korean cinema), and one of the highest standards of living in Asia. North Korea had become one of the world's most repressive totalitarian states, where the population lives under comprehensive surveillance and political control, where famines killed hundreds of thousands in the 1990s, and where the regime has prioritized nuclear weapons over economic development. The difference is almost entirely explained by political and economic institutions: South Korea's move toward market economics and (eventually, after periods of authoritarian rule) democracy created conditions for growth; North Korea's totalitarian communist system systematically prevented the economic activity and investment that would have enabled development. The Korean War's ongoing legacy: the armistice has never been replaced by a peace treaty, meaning the Korean War technically never ended. North Korea has developed nuclear weapons, making the Korean Peninsula one of the world's most dangerous flashpoints. Families separated by the 1953 division are still divided, some never reunited. And the United States still maintains 28,500 troops in South Korea as a deterrent against North Korean aggression. Korea is the Cold War conflict that never fully ended.`,
            },
            {
              id: `c2`,
              title: `Cuba: Revolution, embargo, and the missile crisis`,
              type: `Third World revolution and superpower confrontation`,
              description: `Fidel Castro's 1959 revolution overthrew the U.S.-backed Batista dictatorship and established a socialist government in Cuba. The U.S. responded with a trade embargo that has lasted over sixty years. In 1961, the CIA organized the disastrous Bay of Pigs invasion using Cuban exiles. In 1962, the U.S. discovered Soviet missiles in Cuba, leading to the thirteen-day Missile Crisis. Khrushchev agreed to remove the missiles; Kennedy pledged not to invade Cuba. Cuba remained a Cold War flashpoint and symbol: for the left, a revolutionary model resisting American imperialism; for the right, a communist dictatorship ninety miles from Florida.`,
              questions: [
                `How did the Cold War transform what might have been a domestic political change in Cuba into a superpower confrontation?`,
                `What does Cuba's experience reveal about the costs of being caught between superpowers?`,
                `How do you evaluate Cuba's revolution sixty years later, and what does it reveal about the promises and limits of socialist development?`,
              ],
              evaluation: `As a Cold War analyst, you'd identify Cuba as one of the most revealing Cold War cases precisely because it illustrates almost every dimension of the Cold War's dynamics simultaneously: the transformation of domestic politics into superpower confrontation, the cost of proxy status, the Cuban Missile Crisis as the most dangerous Cold War moment, and Cuba as an ongoing test case of socialist development under embargo. Cuba's revolution was genuinely rooted in domestic conditions: the Batista dictatorship was corrupt and brutal, serving U.S. business interests while the majority of Cubans lived in poverty and inequality, particularly in rural areas. Castro's movement initially had broad nationalist support, and the revolution's achievements in healthcare and literacy were real. What transformed a domestic political change into a superpower confrontation was the Cold War framework: as Castro moved toward Soviet alignment and nationalized U.S. business interests in Cuba, the Eisenhower and Kennedy administrations classified Cuba as a security threat and began planning its overthrow. The CIA-organized Bay of Pigs invasion in April 1961 was a catastrophic failure: Cuban exiles trained by the CIA were quickly defeated by Cuban forces, and the U.S. role was exposed, humiliating Kennedy and pushing Cuba closer to the Soviet Union. The Missile Crisis followed directly: Cuba offered the Soviets a location for nuclear missiles, and Soviet leaders saw it as an opportunity to shift the strategic balance. The thirteen-day crisis brought the world closest to nuclear war in history. Its resolution, Soviet missiles removed in exchange for a U.S. pledge not to invade Cuba and a secret agreement to remove U.S. missiles from Turkey, ended the immediate crisis but left Cuba permanently frozen in its Cold War status. Cuba's experience reveals the cost of becoming a proxy: once entangled in superpower competition, a small nation loses control of its own fate. The U.S. embargo, maintained for over sixty years, has caused genuine economic hardship for ordinary Cubans while giving the Cuban government a convenient excuse for economic failures. Cuba's socialist system achieved real advances in healthcare and education compared to the pre-revolutionary period, but also maintained authoritarian political control, suppressed dissent, and failed to build a dynamic economy. Whether Cuba's post-revolutionary development should be evaluated as a success or failure depends heavily on what you're measuring and how you weigh the achievements against the political repression. As a Cold War analyst, you'd conclude that Cuba illustrates how small nations caught between superpowers lose sovereignty over their own futures, and how Cold War logic converts domestic political choices into strategic confrontations with global consequences.`,
            },
            {
              id: `c3`,
              title: `Chile 1973: Democracy overthrown`,
              type: `CIA-backed coup and Cold War in Latin America`,
              description: `In 1970, Salvador Allende became the world's first democratically elected Marxist president, winning Chile's presidential election with 36% of the vote in a three-way race. His government nationalized copper mines and large land holdings and pursued socialist economic policies. The Nixon administration, alarmed by Chile's example to other Latin American countries, worked to destabilize Allende's government: funding opposition parties, supporting strikes, and working with Chilean military officers. On September 11, 1973, the Chilean military, led by General Augusto Pinochet and with CIA support, staged a coup. Allende died in the presidential palace. Thousands were killed and tortured; hundreds of thousands were exiled.`,
              questions: [
                `Why did the Nixon administration treat a democratically elected Chilean government as a security threat?`,
                `What does the Chile case reveal about how the Cold War operated in Latin America specifically?`,
                `How do you evaluate the long-term legacies of the 1973 coup for Chile and for Latin America more broadly?`,
              ],
              evaluation: `As a Cold War analyst, you'd identify Chile as the case that most directly and clearly illustrates the U.S. Cold War policy of overriding democratic outcomes in Latin America when those outcomes conflicted with strategic or economic interests. It also illustrates the specific way the Cold War operated in Latin America: through CIA operations, support for military coups, and the backing of authoritarian governments that served as anti-communist bulwarks regardless of their human rights records. The Nixon administration's alarm about Allende was not primarily about Allende's specific policies, though the nationalization of copper mines (owned largely by U.S. corporations) was a concrete economic grievance. The deeper concern was "contagion": Nixon and Kissinger feared that a successful democratic socialism in Chile would inspire similar movements across Latin America, threatening U.S. corporate and strategic interests throughout the region. This is the Cold War logic that produced so much Latin American suffering: not that Allende himself threatened the United States directly, but that his example might inspire others. The U.S. strategy was multi-pronged: economic destabilization (the CIA funded opposition media, supported strikes, worked to create economic chaos), backing of Chilean military officers who were willing to act, and political support for opposition parties. The September 11, 1973 coup was one of the most symbolically and practically significant events in Latin American Cold War history: a democratic government, however controversial, overthrown with U.S. backing, replaced by a military dictatorship that killed at least 3,000 people (many more are suspected), tortured tens of thousands, and drove hundreds of thousands into exile. The Pinochet regime then became a laboratory for neoliberal economic policies (designed by University of Chicago-trained economists known as the "Chicago Boys"), eliminating the social programs Allende had built and implementing free-market structural reforms that produced economic growth but also significant inequality. For Latin America more broadly, Chile 1973 was a defining trauma: it demonstrated that democratic election of a left-wing government was not safe from U.S. intervention, deeply affecting political cultures and the left's calculations about electoral versus armed paths to power for decades. Chile's long-term trajectory: after returning to democracy in 1990, Chile became one of Latin America's most stable and prosperous democracies, though debates about the legacies of the coup and the Pinochet era, including economic inequality, remain intensely alive. As a Cold War analyst, you'd conclude that Chile illustrates how the Cold War enabled the U.S. to treat the entire Western Hemisphere as a strategic space where democratic outcomes were acceptable only when they produced results compatible with U.S. interests.`,
            },
            {
              id: `c4`,
              title: `Inside the Soviet Union: Life under communism`,
              type: `The human experience of communist governance`,
              description: `The Soviet Union presented itself as a workers' paradise of economic equality and anti-imperialism. The reality for its citizens was more complex: comprehensive political repression under Stalin (the Gulag system imprisoned millions; political terror killed hundreds of thousands to millions); guaranteed employment and basic social services (housing, healthcare, education) for ordinary workers; genuine patriotic pride (especially after victory in World War II and achievements in space exploration); and a pervasive surveillance system (the KGB) that monitored political life. By the 1980s, economic stagnation, corruption, and the hollowness of official ideology had deeply eroded the system's legitimacy.`,
              questions: [
                `What were the genuine achievements of Soviet communism for ordinary citizens, and what were its genuine failures?`,
                `How did life under Soviet communism differ across the period from Stalin to Brezhnev to Gorbachev?`,
                `What does the Soviet Union's internal collapse reveal about the sustainability of systems that suppress political freedom?`,
              ],
              evaluation: `As a Cold War analyst, you'd approach the Soviet Union's internal life with the goal of honest evaluation: neither the purely triumphalist Western narrative that Soviet communism was nothing but oppression, nor the apologist narrative that minimizes the real suffering caused by the system. The reality, as revealed by decades of subsequent historical scholarship and by the testimony of people who lived it, is genuinely complex. Soviet communism had genuine achievements. The USSR industrialized rapidly from a largely peasant economy in the 1930s, creating massive industrial capacity. It provided guaranteed employment, free healthcare, free education, and subsidized housing for ordinary workers, ending the kind of desperate poverty and insecurity of the pre-revolutionary period for many. Soviet women had higher workforce participation than in most Western countries. The USSR's victory in World War II against Nazi Germany, achieved at extraordinary cost (27 million Soviet deaths), generated genuine patriotic pride. The space program's achievements (Sputnik, Yuri Gagarin as the first human in space) generated real national pride and genuine scientific achievement. But Soviet communism also had profound and indefensible failures. Stalin's political terror, including the collectivization of agriculture that killed millions in the Ukrainian famine (Holodomor), the Great Purge of the 1930s, and the Gulag labor camp system that imprisoned and killed millions, constitutes one of the twentieth century's greatest criminal enterprises. Even after Stalin's death, Soviet citizens lived under a comprehensive surveillance system: the KGB monitored political life, dissenters were imprisoned or sent to psychiatric hospitals, and political speech outside official channels was dangerous. By the 1970s and 1980s, economic stagnation had made the gap between official ideology and lived reality impossible to ignore. Goods were scarce, corruption was pervasive, and the system's inefficiencies were generating widespread cynicism. The system's collapse, when it came, happened remarkably fast precisely because Gorbachev's openness revealed how extensively the population had stopped believing in it. As a Cold War analyst, you'd conclude that the Soviet Union's collapse reveals something important about the sustainability of systems that suppress political freedom: even economically, the absence of free information, political feedback, and accountable governance creates inefficiencies and misallocations that accumulate over time into system-wide failure. The inability to correct mistakes without threatening the system itself is ultimately fatal.`,
            },
            {
              id: `c5`,
              title: `The Cold War's global legacy`,
              type: `What the Cold War left behind`,
              description: `The Cold War ended in 1991, but its legacies are everywhere. Nuclear weapons still exist in large numbers. Korea is still divided. NATO expanded eastward, contributing to tensions with a revanchist Russia. China, which the West expected to liberalize as it integrated into the global economy, has instead become an authoritarian great-power competitor. Former Soviet states navigated chaotic post-communist transitions with vastly different outcomes. Many nations in Africa, Asia, and Latin America still live with the consequences of Cold War-era coups, proxy wars, and authoritarian governments backed by the superpowers. The ideological contest, capitalism versus socialism, never fully resolved: new forms of it animate today's politics.`,
              questions: [
                `What are the most significant Cold War legacies that are still actively shaping today's world?`,
                `Why did the post-Cold War world fail to become the peaceful liberal order that many predicted?`,
                `What lessons from the Cold War are most important for understanding current international tensions?`,
              ],
              evaluation: `As a Cold War analyst, you'd identify the Cold War's most significant ongoing legacies by looking at where its structural effects are most clearly still operating, rather than treating 1991 as a clean ending. Korea is the most literal survival of the Cold War: a divided peninsula, a nuclear-armed North Korea, a U.S. military presence that remains as a deterrent, and families separated by the 1953 ceasefire who in some cases have never been reunified. The basic structure of the Korean conflict, a superpower-backed division of a formerly unified nation that has never been formally resolved, is a Cold War creation still operating in the present. Russia's revanchism, including its annexation of Crimea in 2014 and full-scale invasion of Ukraine in 2022, reflects Russian politics shaped by what Russian leaders experienced as the humiliation of the Soviet collapse and NATO's eastward expansion. Understanding Putin's worldview requires understanding the Cold War's end from the Russian perspective, not just the Western triumphalist version. China's trajectory is perhaps the most consequential Cold War legacy. The U.S. and China's re-engagement through Nixon's opening in 1972 was a Cold War strategic calculation (using China to pressure the Soviet Union), and it set in motion the economic integration that would create the current U.S.-China competition. The Western expectation that economic integration would lead to political liberalization, the "democratic peace theory" applied to development, has not been borne out: China has become more economically powerful and more politically authoritarian simultaneously. In Latin America, Africa, and Asia, the political cultures shaped by Cold War-era coups, proxy wars, and authoritarian rule still affect governance, civil society, and the left's relationship with electoral politics. The lesson from the Cold War that seems most applicable to current international tensions: great-power competition organized around competing ideologies is deeply prone to overriding democratic outcomes in third countries, treating populations as strategic terrain rather than as humans with their own legitimate interests. Understanding this pattern, rather than assuming current great-power competitors have uniquely benign or uniquely malign intentions, provides the most useful analytical lens for navigating the international politics you're inheriting.`,
            },
          ],
          synthesisPrompt: `After all five: what are the three most important lessons you take from the Cold War as a whole? How does the Cold War help explain the current world? What do you think was the Cold War's greatest human cost, and what does that tell you about how great-power competition should be conducted in your lifetime? In 5-6 sentences.`,
          reflectionPrompt: `The Cold War shaped the world you were born into: the country borders, the political systems, the nuclear weapons that still exist, the U.S.-China competition now building. How does understanding where these things came from change how you think about the world you're inheriting and your responsibility within it?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the key feature that distinguished the Cold War from a typical interstate conflict?`,
              options: [
                `The two superpowers actually never possessed or developed any nuclear weapons at all during the entire Cold War.`,
                `The Cold War involved only economic competition, with no military dimension at all.`,
                `Nuclear deterrence prevented direct superpower war, pushing competition into proxy conflicts in third countries.`,
                `The Cold War was resolved quickly through a single decisive military engagement.`,
              ],
              correctIndex: 2,
              explanation: `Nuclear deterrence (mutually assured destruction) prevented direct war between the superpowers, pushing their competition into proxy conflicts in Korea, Vietnam, Latin America, and elsewhere, where millions died without triggering nuclear exchange. The distractors falsely deny nuclear weapons, eliminate the military dimension, or describe a quick resolution.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why did communist ideology have genuine appeal in many newly independent nations?`,
              options: [
                `Because the Soviet Union consistently provided significantly more total military aid to all developing nations than the United States.`,
                `Because Soviet anti-colonial rhetoric, rapid industrialization, and critique of Western capitalism resonated with nations that had been exploited by Western colonial powers.`,
                `Because all post-colonial independence movement leaders everywhere were exclusively and entirely trained only at Soviet universities and Soviet-aligned institutions.`,
                `Because capitalism as an economic system had absolutely no appeal anywhere outside of Western Europe and North America at all.`,
              ],
              correctIndex: 1,
              explanation: `Communist ideology appealed in the developing world because Soviet anti-colonial rhetoric resonated with recently colonized peoples, Soviet rapid industrialization offered a development model, and the critique of Western capitalism was relevant for nations that had experienced colonial exploitation by Western powers. The distractors focus on aid, training, or falsely deny capitalist appeal elsewhere.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What made the Cuban Missile Crisis of 1962 so dangerous?`,
              options: [
                `Cuba independently and unilaterally launched its own nuclear missiles directly at the United States, thereby immediately triggering direct military exchange.`,
                `Soviet missiles in Cuba, combined with U.S. blockade and thirteen days of confrontation, brought the world closer to nuclear war than at any other point during the Cold War.`,
                `The crisis immediately and directly resulted in the complete and fully permanent removal of every single nuclear weapon from every country worldwide.`,
                `The crisis ultimately had absolutely no significant or lasting impact of any kind on any single aspect of U.S.-Soviet bilateral relations going forward.`,
              ],
              correctIndex: 1,
              explanation: `The Cuban Missile Crisis involved Soviet nuclear missiles in Cuba, a U.S. naval blockade, and thirteen days of confrontation that came closer to nuclear war than any other Cold War moment, resolved by secret negotiations. The distractors falsely describe Cuban missile launches, global disarmament, or no lasting impact.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What led to the Soviet Union's collapse in 1991?`,
              options: [
                `The United States clearly and definitively won a completely decisive and overwhelming direct military victory over the Soviet Union in open armed combat.`,
                `The Soviet Union fully and completely voluntarily chose to dissolve itself as part of a carefully planned and fully orderly transition to democracy.`,
                `Economic stagnation, the Afghanistan war failure, and Gorbachev's reforms (glasnost and perestroika) revealed the depth of public discontent and unleashed nationalist movements.`,
                `A massive unavoidable natural disaster entirely destroyed all Soviet infrastructure and facilities and therefore directly and necessarily forced the complete dissolution.`,
              ],
              correctIndex: 2,
              explanation: `The Soviet Union's collapse resulted from economic stagnation, the disastrous Afghanistan war, and Gorbachev's reforms which revealed public discontent and unleashed nationalist movements in the republics and Eastern Europe. The distractors invent military defeat, voluntary planning, or natural disaster.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `How did the Cold War affect the outcome of Allende's election in Chile (1970-1973)?`,
              options: [
                `The Cold War had absolutely no effect whatsoever on any aspect of Chilean domestic politics since it was exclusively and entirely a bilateral superpower issue.`,
                `The Soviet Union directly launched a full-scale ground military invasion of Chile specifically to support and actively protect Allende's democratically elected government.`,
                `The Nixon administration worked to destabilize Allende's government and supported the 1973 coup because it viewed democratically elected socialism in Chile as a Cold War strategic threat.`,
                `The United States actively and enthusiastically supported Allende because democratic elections in every country always aligned with U.S. strategic interests.`,
              ],
              correctIndex: 2,
              explanation: `The Nixon administration treated Allende's democratically elected government as a Cold War threat, worked to destabilize it, and supported the 1973 coup that replaced it with Pinochet's dictatorship. The distractors deny Cold War involvement, invent Soviet invasion, or falsely claim the U.S. always supported democratic elections.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the contrasting development of North and South Korea illustrate?`,
              options: [
                `That political and economic institutions, not just starting conditions, powerfully shape development outcomes.`,
                `That geographic and cultural factors alone determine a nation's economic development.`,
                `That all divided nations around the world will always eventually and inevitably reunify completely peacefully without exception.`,
                `That international aid is the only factor that determines whether nations develop.`,
              ],
              correctIndex: 0,
              explanation: `The North-South Korea contrast, starting from similar post-war conditions but diverging dramatically based on different political and economic institutions, illustrates that institutions powerfully shape development outcomes. The distractors reduce development to geography, claim inevitable reunification, or attribute everything to foreign aid.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why did the post-Cold War world fail to become the peaceful liberal order many predicted?`,
              options: [
                `The Cold War actually ended as early as 1985, which left far too insufficient time for anyone to build any new international order.`,
                `Wars in former Yugoslavia, Russia's revanchism, China's authoritarian rise, and new conflicts freed from Cold War suppression replaced old tensions with new ones.`,
                `The United Nations successfully and completely eliminated every single major international conflict immediately after the Cold War ended in 1991.`,
                `Liberal democracy successfully and permanently expanded to every single country in the entire world immediately after the Cold War ended.`,
              ],
              correctIndex: 1,
              explanation: `Wars in former Yugoslavia, Russia's revanchism, China's authoritarian ascent, ethnic conflicts freed from Cold War suppression, and terrorism replaced Cold War tensions with new challenges, rather than producing the peaceful liberal order that triumphalists predicted. The distractors misdate the end, claim UN success, or falsely describe universal democratization.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the significance of the Cold War for understanding today's international tensions?`,
              options: [
                `The Cold War has absolutely no relevance whatsoever to understanding today's contemporary world at all, given that it definitively and completely ended so long ago in 1991.`,
                `The Cold War definitively proves that every single instance of great-power competition always inevitably and necessarily ends in mutual destruction and complete devastation.`,
                `Cold War legacies, including nuclear weapons, divided Korea, Russia's revanchism, China's rise, and politically shaped Latin American democracies, directly underlie many current international tensions.`,
                `The Cold War definitively proved that all competing great powers can always and reliably reach completely peaceful and mutually acceptable negotiated settlements for every single dispute.`,
              ],
              correctIndex: 2,
              explanation: `Cold War legacies directly shape current international tensions: nuclear weapons proliferation, divided Korea, Russia's worldview shaped by its collapse, China's rise partly from U.S.-China Cold War strategy, and politically shaped Latin American societies. The distractors deny relevance, predict mutual destruction, or promise peaceful settlements always follow.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: During the Cold War, the United States consistently supported democratic governments worldwide because promoting democracy was the core principle driving U.S. foreign policy in every region.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important factual corrections for understanding the Cold War honestly. While the United States promoted democracy as an ideological principle and as a contrast to Soviet communism, its actual foreign policy behavior was frequently inconsistent with this stated commitment, particularly when democratic outcomes conflicted with Cold War strategic or economic interests. The clearest evidence is the pattern of U.S.-backed or U.S.-supported coups against democratically elected or democratically legitimate governments. In Iran in 1953, the CIA orchestrated the overthrow of Prime Minister Mohammad Mosaddegh, a democratically elected leader who had nationalized Iran's oil industry, and replaced him with the Shah's authoritarian rule, because Mosaddegh's nationalism threatened Western oil interests. In Guatemala in 1954, the CIA organized the overthrow of President Jacobo Árbenz, a democratically elected leader who had undertaken land reform affecting United Fruit Company's landholdings, and replaced him with a military government. In Chile in 1973, the Nixon administration worked to destabilize and ultimately supported the coup against Salvador Allende, democratically elected by Chilean voters, because his socialist policies were seen as a Cold War threat. More broadly, the U.S. maintained close alliances with authoritarian governments across Latin America (Pinochet's Chile, Somoza's Nicaragua, various Brazilian military governments), the Middle East (the Shah of Iran, Saudi Arabia), Asia (South Korea under Syngman Rhee and later military governments, the Philippines under Marcos), and Africa, as long as those governments aligned with U.S. strategic interests and maintained anti-communist positions. This wasn't secret: U.S. officials explained the policy rationale as "he may be a son of a bitch, but he's our son of a bitch," making clear that anti-communism trumped democratic legitimacy in the Cold War calculus. The pattern is clear: U.S. Cold War foreign policy supported democracy when it produced strategically favorable results, and undermined or overthrew democratic governments when they did not. So the statement is false: U.S. Cold War foreign policy was not consistently pro-democracy; it was pro-strategic interest, and democracy was invoked selectively as both a stated principle and a rhetorical weapon against the Soviet Union.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A small nation's democratic government is pursuing economic policies that a major power views as threatening to its strategic interests. Using the Cold War lesson, what pattern might history suggest could happen, and what conditions might protect the small nation from outside interference?`,
              options: [
                `History suggests no pattern; major powers never interfere in smaller nations' domestic politics.`,
                `History suggests the major power will automatically invade militarily, and nothing can prevent this.`,
                `History suggests the major power might support opposition movements, economic destabilization, or a coup if it calculates the cost is acceptable; the small nation is better protected if the interference cost is raised through international visibility, strong democratic institutions, and broad public legitimacy for its government.`,
                `History suggests the major power will immediately offer foreign aid to support the democratic government.`,
              ],
              correctIndex: 2,
              explanation: `The Cold War pattern shows that major powers supported destabilization and coups when they calculated the strategic cost was acceptable. Conditions that might protect a small nation include high international visibility (making intervention more costly in reputation), strong democratic institutions (making coups harder), and broad public legitimacy (making it harder to install a replacement government). The distractors deny historical patterns of interference, claim inevitable military invasion, or promise automatic aid.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-legacy`, category: `The world you inherited`, prompt: `The Cold War shaped the world you were born into: the borders, the political systems, the nuclear weapons that still exist, the U.S.-China competition now building. How does understanding where these things came from change how you think about the world you've inherited and your responsibility within it?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, the Cold War may have seemed like distant history between two distant superpowers. What surprised you most, the Cuban Missile Crisis's closeness to nuclear war, the Chile coup, life inside the Soviet Union, or the ongoing legacies? What changed in your thinking?` },
            { id: `reflect-democracy`, category: `When superpowers override democracy`, prompt: `The Cold War showed that powerful nations override democratic outcomes when those outcomes threaten their interests. What do you think should have happened instead, and what conditions might make powerful nations less likely to undermine other countries' democratic choices?` },
            { id: `reflect-heritage`, category: `Teaching the Cold War`, prompt: `Caro, you're building social studies for conscious families with roots in Latin America. How would you help a child understand that the political history of their heritage country, including coups, dictatorships, and political exile, may be directly connected to Cold War superpower competition, so history feels personal rather than abstract?` },
            { id: `reflect-nuclear`, category: `Nuclear weapons today`, prompt: `The Cuban Missile Crisis showed how close the world came to nuclear annihilation through miscommunication and pressure. Nuclear weapons still exist. How do you think your generation should approach this inherited danger, and what would it take to reduce the risk?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `The Cold War involved two systems, each claiming to offer humanity the best future. Both had profound failures. What lessons does this teach about systems that claim to have the definitive answer to how human societies should be organized, and how should that humility shape how we think about our own systems today?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Trace the Cold War's Living Legacies`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a Cold War legacy investigation, tracing how the competition that ended in 1991 is still shaping today's world. Start with the map: look at a current world map and identify five places where Cold War legacies are most visible today (Korea, Cuba, Russia/Ukraine, U.S.-China competition, countries in Latin America shaped by Cold War coups). For each, discuss one way the Cold War's past is still operating in the present. Explore the nuclear reality: look up how many nuclear weapons exist today, which countries have them, and what arms control agreements are still in force. Discuss the Cuban Missile Crisis and ask: do these conditions still create risk? Trace Latin America: research one country with family connections to find out what Cold War interventions, coups, or proxy conflicts it experienced, and how those experiences shaped its current political culture. Watch or read firsthand accounts: find a documentary clip, interview, or firsthand account of someone who lived through a Cold War moment, a Berlin Wall resident, a Cuban family, a Chilean exile, or a Soviet citizen, and discuss what the Cold War meant at the human level versus the strategic level. Debate the hardest question: was the Cold War won on one side? Did one system prove itself better? What does the answer mean for how you think about ideological competition today? The goal is to move from seeing the Cold War as finished history to understanding it as a shaping force still operating in the world you're navigating.`,
          },
          projectOption: {
            title: `The Cold War Legacy Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate a Cold War-era event or legacy in depth and analyze its connection to the present, developing the analytical skills to connect Cold War history to today's international politics. Week 1, choose and research a Cold War event or legacy: pick one Cold War event or ongoing legacy to investigate in depth. Options include the Korean War and the current North Korea nuclear situation; the Cuban Revolution and the U.S.-Cuba relationship today; Cold War intervention in a specific Latin American country and its current political legacy; the Soviet Union's internal life and how post-Soviet states navigated the transition; or a specific Cold War arms control agreement and its current status. Research the historical background: what were the events? Who made the decisions? Who paid the costs? What was the Cold War logic being applied? Week 2, trace the present connection and form your own analysis: research how the historical event or pattern you studied connects to current conditions. What Cold War legacies are still operating? What has changed, and what remains? Apply the lesson's analytical framework: proxy conflict, ideological competition, Cold War hypocrisy, the gap between stated values and actual behavior. Then form your own assessment: what should have been done differently, and what lessons from this case should shape how today's great-power competition is conducted? Produce your final piece, a historical-to-present analysis report, a "Cold War legacy" briefing, a documentary-style presentation, or a debate, that demonstrates the ability to trace Cold War history forward into present-day implications and reason about what the past should teach us. If focusing on Latin America, explicitly trace how U.S. Cold War policy in that country or region shaped its current political landscape.`,
            offerToParent: `Parent: opt your child into the Cold War Legacy Project. Investigating a Cold War-era event in depth and tracing its connection to present-day conditions directly develops C3 Framework history and global concepts: the Cold War's origins and structure, nuclear deterrence, proxy conflicts, ideological competition, and the connections between historical causes and present-day effects in international politics. Applying the analytical frameworks of Cold War competition to understand current events like U.S.-China tensions, the Korean nuclear situation, or Latin American political cultures builds historical thinking skills, global awareness, and the ability to use history as an analytical tool for understanding the present.`,
          },
          identityQuestion: `If you become someone who understands how the Cold War structured the post-1945 world, who can trace its proxy conflicts and coups to their human consequences, who sees current international tensions through the lens of Cold War legacies, and who can evaluate both the ideological claims and the actual behavior of powerful nations with honest critical thinking, what kind of citizen of the world does that make you, one who sees the present as shaped by understandable historical forces rather than as random or inevitable, that someone who only follows today's headlines without that historical context never can?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can trace Cold War legacies forward into the tensions shaping today's world.`,
            `A person who understands that great-power competition has real human costs for real people.`,
            `Someone who can evaluate powerful nations' stated values against their actual behavior.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just mapped the ideological conflict that organized the world for nearly half a century. You learned the Cold War's basic structure: a bipolar world of two nuclear superpowers whose mutual assured destruction prevented direct war but pushed competition into proxy conflicts that killed millions elsewhere. You traced the ideological contest, where both capitalism and communism made genuine claims for humanity's future and both had profound failures and hypocrisies. You examined key crises, the Berlin Blockade, Korea, Cuba, and how the Cuban Missile Crisis showed how close miscalculation and pressure can bring the world to catastrophe. You followed the Soviet Union's internal life and eventual collapse through stagnation and Gorbachev's reforms. And through the Korea, Cuba, Chile, and Soviet cases, you saw the Cold War at the human level: real people divided, coups overthrowing democracies, surveillance societies, and proxy war devastation. Most importantly, you connected it to today: the world you're inheriting has Cold War fingerprints everywhere, from nuclear weapons to divided Korea to U.S.-China competition. Next, we turn to the present and future: the contemporary global issues of climate change, migration, and conflict that are the defining challenges of your lifetime. Onward, {name}. — Atlas`,
          badge: `cold-war-analyst`,
          badgeName: `Cold War Analyst`,
          xpEarned: 75,
          competencies: [
            `Understands the Cold War's bipolar structure and nuclear deterrence logic`,
            `Knows the ideological contest between capitalism and communism and both sides' genuine appeals and failures`,
            `Can trace key Cold War crises including the Cuban Missile Crisis and its near-nuclear outcome`,
            `Understands how Cold War competition operated in the developing world through proxy conflicts and coups`,
            `Knows how the Soviet Union's internal conditions led to its collapse`,
            `Can connect Cold War history to present-day international tensions and legacies`,
            `Can evaluate powerful nations' stated values against their actual Cold War behavior`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Contemporary Global Issues — Climate, Migration, and Conflict`,
            hook: `The defining challenges of the twenty-first century and the debates about how to address them. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L14 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
