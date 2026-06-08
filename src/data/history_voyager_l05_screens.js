// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L05 — Political Ideologies: Left, Right, and Beyond
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Comparative Political Ideologies, Real Voices
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: PERSPECTIVES (5 voices: conservative / liberal / social democratic / socialist / anarchist)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l05-v1";

const HISTORY_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-05`,
      title: `Political Ideologies: Left, Right, and Beyond`,
      duration: 35,
      xpReward: 75,
      badge: `ideology-literate`,
      badgeName: `Ideology Literate`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you committed to a position on economic systems. Today we map the political ideologies that organize how societies think about government, freedom, equality, and order. The everyday vocabulary (left, right, liberal, conservative, socialist, libertarian) gets used loosely, often to mark tribal belonging more than to describe coherent positions. Behind these labels are serious intellectual traditions with real philosophers, real arguments, and real disagreements. Today five voices speak from five traditions: conservative (Burke), classical liberal (Mill), social democratic (Rawls applied politically, FDR), socialist (Debs, contemporary democratic socialists), anarchist (Kropotkin, Goldman, contemporary anarchists). You engage with each rather than committing to one; these traditions don't reduce to a single committed answer at 12 because the questions they argue about will be your questions to navigate across decades.`,
          headline: `Political Ideologies: Left, Right, and Beyond`,
          subtitle: `Five voices from five serious traditions. Perspectives format, no forced commitment.`,
          visual: `/voyager-assets/history/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Ideologies Matter`,
          paragraphs: [
            `A political ideology is a coherent set of beliefs about how society should be organized, what government should do, what counts as freedom and equality, and how change should happen. People often think of ideology as something other people have ("they're so ideological"); in practice, everyone has some implicit framework for thinking about politics, and the question is whether the framework is examined or absorbed unconsciously.`,
            `The terms left and right come from the French Revolution. In the National Assembly of 1789, supporters of the king sat on the right side of the chamber, supporters of revolutionary change on the left. The geographic accident produced a vocabulary that's now used globally to describe ideological positions, though what "left" and "right" mean has shifted substantially across two and a half centuries.`,
            `One common but incomplete framing places ideologies on a single left-right line: communism / socialism / social democracy / liberalism / conservatism / fascism. The framing captures something real (positions further apart on the line tend to disagree more sharply on more issues) but obscures real differences. Anarchism doesn't fit cleanly on the line. Libertarianism is "right" on economic questions but often "left" on social issues. Religious conservatism shares some commitments with religious socialism. Contemporary populist movements scramble traditional left-right alignments. The line is useful as starting framing but quickly inadequate for serious analysis.`,
            `One reason ideologies matter. Every government you live under will be operated by people working from one or more of these traditions, often without explicit awareness. Every policy debate you'll engage will be shaped by these traditions, even when participants don't name them. Recognizing which ideological frameworks are driving specific arguments lets you read political debates with depth that surface-level engagement misses.`,
            `Another reason. Your generation is growing up in a moment when ideological polarization in many countries has intensified. Building serious framework on what these traditions actually argue (rather than what each tribe's caricature of the others claims) protects against the cognitive damage that polarized discourse produces. The five voices ahead represent serious traditions with substantial defenders; engaging each on its own terms is the work.`,
            `One framing before we listen. The Perspectives format presents five voices without forcing you to commit to one (unlike the argument-builder of L01 and L04). That's because political ideology at 12 isn't an appropriate place to lock in commitment; the questions these traditions argue about will be your questions to navigate across decades, refining your view as you encounter actual political institutions, work in actual workplaces, and see actual policies succeed and fail.`,
          ],
          image: `/voyager-assets/history/l05-s1-ideologies.webp`,
          imageCaption: `Ideology: coherent set of beliefs about society, government, freedom, equality, change. Left/right from French Revolution 1789. Linear framing useful as starting point, quickly inadequate. Engaging each tradition seriously beats caricature.`,
          vocab: [
            {
              word: `actually is`,
              definition: `Coherent set of beliefs about how society should be organized, what government should do, what counts as freedom and equality, how change should happen. Terms "left" and "right" from French Revolution 1789 (geographic accident in National Assembly seating). Linear framing (communism / socialism / social democracy / liberalism / conservatism / fascism) useful starting point but quickly inadequate: anarchism doesn't fit cleanly, libertarianism right on economics + left on social, contemporary populism scrambles alignments. Every government operated by people working from these traditions; every policy debate shaped by them. Building framework on what traditions actually argue (vs caricatures) protects against polarized discourse's cognitive damage.`,
              audioPrompt: `A political ideology is a coherent set of beliefs about how society should be organized, what government should do, what counts as freedom and equality, and how change should happen, {name}. People often think of ideology as something other people have ("they're so ideological"); in practice, everyone has some implicit framework for thinking about politics. The question is whether the framework is examined or absorbed unconsciously. The terms left and right come from the French Revolution. In the National Assembly of 1789, supporters of the king sat on the right side of the chamber, supporters of revolutionary change on the left. The geographic accident produced a vocabulary that's now used globally. One common framing places ideologies on a single left-right line: communism, socialism, social democracy, liberalism, conservatism, fascism. The framing captures something real but obscures real differences. Anarchism doesn't fit cleanly. Libertarianism is right on economic questions but often left on social issues. Contemporary populist movements scramble traditional alignments.`,
            },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Conservative Tradition`,
          paragraphs: [
            `The conservative tradition begins systematically with Edmund Burke's Reflections on the Revolution in France (1790). Burke, watching the French Revolution from across the Channel, argued that revolutionary attempts to redesign society from abstract principles produce catastrophe. Societies are organic, complex, and embedded in tradition that accumulated wisdom over generations. Inherited institutions (church, family, local communities, established law) should be reformed cautiously and locally rather than swept away in service of universal principles.`,
            `Burke's claim wasn't that everything inherited is good; he supported the American Revolution and Catholic emancipation in Ireland. His claim was about how to approach change: prudently, attentive to specific local conditions, recognizing that the unintended consequences of large-scale redesign often dwarf the intended benefits. The French Revolution did indeed devolve into the Terror within a few years, vindicating Burke in the eyes of many.`,
            `Russell Kirk's The Conservative Mind (1953) revived and codified the conservative tradition for postwar America. Kirk identified core conservative commitments: belief in transcendent moral order, attachment to custom and convention, recognition that society needs orders and classes, conviction that property and freedom are linked, distrust of "sophisters, calculators, and economists" who would redesign society from theory.`,
            `Contemporary conservatism has multiple strands. Traditionalist conservatives (in the Burkean line) emphasize family, religion, local community, and skepticism toward rapid change. Neoconservatives (often associated with US foreign policy under both parties) emphasize active promotion of democratic institutions abroad. Religious conservatives emphasize traditional moral commitments often grounded in specific religious traditions. Communitarian conservatives (Alasdair MacIntyre, Michael Sandel, though Sandel is sometimes classified as left) emphasize the embeddedness of individuals in communities and traditions.`,
            `What conservatives are right about (per defenders). The disasters of 20th-century revolutionary attempts (Soviet, Chinese, Cambodian, others) at large-scale social redesign support the Burkean caution about utopian projects. Established institutions often encode hard-won knowledge that abstract reformers miss. Local knowledge is real; central planners often fail because they lack it. Family, religion, and community provide meaning that purely individualist or purely state-centric alternatives don't replicate.`,
            `What critics emphasize. Burkean caution can become defense of unjust status quos (slavery, segregation, gender inequality were "inherited institutions" once defended on conservative grounds against reformers). Some "tradition" is recent invention defended as ancient. The veneration of order can become apology for power. Religious conservatism in particular has been used to justify substantial injustice that other religious traditions reject.`,
          ],
          image: `/voyager-assets/history/l05-s2-conservative.webp`,
          imageCaption: `Conservative tradition: Edmund Burke "Reflections on Revolution in France" 1790; Russell Kirk "The Conservative Mind" 1953. Caution toward redesign, attention to tradition, inherited institutions encoding knowledge. Multiple contemporary strands. Critics: can defend unjust status quos.`,
          vocab: [
            {
              word: `the conservative tradition`,
              definition: `Begins systematically with Edmund Burke "Reflections on the Revolution in France" 1790. Revolutionary attempts to redesign society from abstract principles produce catastrophe; societies are organic, embedded in tradition with accumulated wisdom; reform cautiously and locally. Burke's claim about how to approach change, not that everything inherited is good (supported American Revolution + Catholic emancipation). Russell Kirk "The Conservative Mind" 1953 codified for postwar America: transcendent moral order, custom and convention, social orders and classes, property + freedom linked. Strands: traditionalist (Burkean), neoconservative (active democratic promotion), religious, communitarian (MacIntyre). Strengths: 20th-c revolutionary disasters (Soviet, Chinese, Cambodian); institutions encode hard-won knowledge; local knowledge real. Critics: can defend unjust status quos (slavery, segregation defended on conservative grounds); "tradition" sometimes recent invention.`,
              audioPrompt: `The conservative tradition begins systematically with Edmund Burke's Reflections on the Revolution in France from 1790, {name}. Burke, watching the French Revolution from across the Channel, argued that revolutionary attempts to redesign society from abstract principles produce catastrophe. Societies are organic, complex, and embedded in tradition that accumulated wisdom over generations. Inherited institutions like church, family, local communities, established law should be reformed cautiously and locally rather than swept away in service of universal principles. Burke's claim wasn't that everything inherited is good; he supported the American Revolution and Catholic emancipation in Ireland. His claim was about how to approach change: prudently, attentive to specific local conditions, recognizing that the unintended consequences of large-scale redesign often dwarf the intended benefits. Russell Kirk's The Conservative Mind from 1953 revived and codified the conservative tradition for postwar America. Kirk identified core conservative commitments: belief in transcendent moral order, attachment to custom and convention, recognition that society needs orders and classes.`,
            },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Classical Liberalism And Libertarianism`,
          paragraphs: [
            `Classical liberalism emerged in the 17th and 18th centuries as challenge to inherited authority. John Locke's Two Treatises of Government (1689) argued that individuals possess natural rights to life, liberty, and property that no government legitimately violates; governments derive their authority from the consent of the governed; revolution against tyranny is legitimate. John Stuart Mill's On Liberty (1859) gave classical liberalism its most influential modern formulation: individuals should be free to live as they choose unless their actions directly harm others; society's interference with individual liberty is rarely justified.`,
            `Note that "liberal" in this classical sense (limited government, individual rights, market economy) is roughly what's now called "libertarian" or "right" in contemporary US politics. "Liberal" in contemporary US usage usually means something closer to social democracy. The shifting vocabulary is confusing but important.`,
            `Robert Nozick's Anarchy, State, and Utopia (1974) developed contemporary libertarianism. Nozick argued for a minimal state that protects against force, theft, and fraud and enforces contracts, but doesn't redistribute. Property rights, voluntarily acquired, are fundamental; taxing one person to benefit another (beyond minimal state functions) treats the first as means to others' ends.`,
            `Friedrich Hayek (whose economic argument you encountered in L04) developed political-philosophical libertarianism alongside his economics. Hayek argued in The Road to Serfdom (1944) that economic planning leads to political tyranny, that the rule of law (general rules applying equally to all) is foundational to freedom, and that local decision-making by people with local knowledge produces better outcomes than central planning.`,
            `Contemporary libertarianism has multiple strands. Right-libertarians (in the Nozick-Hayek line) emphasize property rights, free markets, and minimal government. Left-libertarians (Michael Otsuka, Hillel Steiner, others) share commitment to individual liberty but argue for substantial redistribution of natural resources or inherited wealth. Civil libertarians focus on protecting individual rights against state and majority encroachment (ACLU tradition; influence across the political spectrum on specific issues).`,
            `What classical liberals and libertarians are right about (per defenders). The 17th-18th century revolutions that established constitutional government, individual rights, and limited state power were genuine moral and political achievements. Hayek's information argument about why central planning fails has been substantially vindicated. Many freedoms taken for granted (speech, religion, assembly, due process) are products of this tradition's victories against absolute monarchy and theocratic states.`,
            `What critics emphasize. Classical liberalism's commitment to property rights has historically been compatible with substantial unfreedom (slavery, exclusion of women from political life, child labor, environmental destruction). The "consenting individuals" model misses how power operates through markets and workplaces. Strict libertarianism would dismantle Social Security, Medicare, public education, environmental regulation: programs supported by overwhelming majorities in most democracies for reasons that go beyond the libertarian framework.`,
          ],
          image: `/voyager-assets/history/l05-s3-liberal-libertarian.webp`,
          imageCaption: `Classical liberalism / libertarianism: Locke "Two Treatises" 1689, Mill "On Liberty" 1859, Hayek "Road to Serfdom" 1944, Nozick "Anarchy, State, and Utopia" 1974. Individual rights, limited government, property, market economy. Strands: right-libertarian, left-libertarian, civil libertarian. Critics: compatible with substantial unfreedoms historically.`,
          vocab: [
            {
              word: `liberalism libertarianism`,
              definition: `Classical liberalism: 17th-18th century challenge to inherited authority. John Locke "Two Treatises of Government" 1689 (natural rights to life, liberty, property; consent of governed; legitimate revolution). John Stuart Mill "On Liberty" 1859 (individuals free unless directly harming others). "Liberal" in classical sense ≈ "libertarian" or "right" in contemporary US politics; "liberal" in US usage usually means social democracy. Contemporary libertarianism: Robert Nozick "Anarchy, State, and Utopia" 1974 (minimal state, property rights fundamental); Hayek "Road to Serfdom" 1944 (planning leads to tyranny, rule of law foundational). Strands: right-libertarian (Nozick-Hayek), left-libertarian (Otsuka, Steiner, who would redistribute natural resources/inherited wealth), civil libertarian (ACLU tradition). Strengths: constitutional government, individual rights, Hayek's information argument. Critics: historically compatible with slavery, women's exclusion, child labor; would dismantle Social Security/Medicare/public education.`,
              audioPrompt: `Classical liberalism emerged in the 17th and 18th centuries as challenge to inherited authority, {name}. John Locke's Two Treatises of Government from 1689 argued that individuals possess natural rights to life, liberty, and property that no government legitimately violates; governments derive their authority from the consent of the governed; revolution against tyranny is legitimate. John Stuart Mill's On Liberty from 1859 gave classical liberalism its most influential modern formulation: individuals should be free to live as they choose unless their actions directly harm others. Important note: "liberal" in this classical sense (limited government, individual rights, market economy) is roughly what's now called "libertarian" or "right" in contemporary US politics. "Liberal" in contemporary US usage usually means something closer to social democracy. The shifting vocabulary is confusing but important. Robert Nozick's Anarchy, State, and Utopia from 1974 developed contemporary libertarianism. Nozick argued for a minimal state that protects against force, theft, and fraud and enforces contracts, but doesn't redistribute.`,
            },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Social Democracy, Socialism, And Beyond`,
          paragraphs: [
            `Social democracy in its contemporary form combines acceptance of market economies with substantial democratic regulation and redistribution. It traces partly through John Rawls (whose A Theory of Justice you encountered in L04), partly through Franklin Roosevelt's New Deal coalition, partly through European labor and social-democratic parties that built welfare states across the 20th century. Contemporary "liberal" in US usage usually means something close to social democracy.`,
            `What social democrats argue politically (extending the economic position from L04). Democratic government is the right vehicle for collective action; its capacities should be used to provide healthcare, education, retirement security, environmental protection, civil rights enforcement, labor standards. Markets and democracy are complementary, not opposed; well-regulated markets work better than unregulated ones and produce more legitimate outcomes than central planning. Civil rights for marginalized groups (Black Americans, women, LGBTQ+, religious minorities) require active state protection because markets and majorities won't reliably provide them.`,
            `Socialism politically. Eugene Debs (US, ran for president as Socialist Party candidate five times early 20th century) argued that workers should organize collectively against capitalist power; that public ownership of essential industries (utilities, transportation, healthcare) produces better outcomes than private ownership; that capitalism's tendency toward concentration of wealth requires structural challenge, not just regulation. Contemporary democratic socialists (Bernie Sanders, Alexandria Ocasio-Cortez, similar figures in many countries) have updated this tradition for the 21st century, often blending substantial overlap with social democracy.`,
            `Anarchism. The anarchist tradition is often treated as marginal in standard ideological surveys, but it includes serious intellectual work that the other traditions can't quite handle. Pierre-Joseph Proudhon argued in What Is Property? (1840) that "property is theft": concentration of property in few hands produces injustice. Peter Kropotkin's Mutual Aid (1902) argued, against social-Darwinist claims, that cooperation (not just competition) is fundamental to human and animal evolution. Emma Goldman, anarchist organizer and writer (deported from US 1919 for political activity), argued for individual freedom, women's rights, free speech, against state power on both right and left.`,
            `Contemporary anarchist thinkers include David Graeber (Debt: The First 5,000 Years, 2011; The Dawn of Everything, 2021 with David Wengrow), Noam Chomsky (whose political work draws on anarchist tradition), and many activists in contemporary movements. Anarchism's contribution to mainstream political discourse is often underestimated; many ideas now taken for granted (direct democracy, worker cooperatives, mutual aid networks, anti-authoritarianism on both right and left) come from anarchist sources.`,
            `What's specific about the anarchist position. Most political ideologies argue about what the state should do; anarchism argues that the state itself is part of the problem. The state's monopoly on legitimate violence enables systematic injustice that can't be reformed away while the state exists; alternatives (federations of communes, worker cooperatives, mutual aid networks) can organize complex societies without coercive central authority. Most political theorists reject this conclusion, but the questions anarchists raise (about state power, about coercion, about alternatives to top-down organization) deserve serious engagement rather than dismissal.`,
            `One framing as you listen to the five voices. Each tradition picks up on something real that the others underweight. Conservatism on the wisdom embedded in tradition and the dangers of utopian redesign. Classical liberalism on individual rights and the limits of state power. Social democracy on collective provision of essentials. Socialism on the structural sources of inequality. Anarchism on the dangers of all concentrated power, including democratic state power. Engaging each on its own terms beats reducing all to caricature.`,
          ],
          image: `/voyager-assets/history/l05-s4-left.webp`,
          imageCaption: `Social democracy (Rawls applied politically, FDR New Deal, European parties); socialism (Eugene Debs, contemporary democratic socialists Sanders/AOC); anarchism (Proudhon 1840, Kropotkin "Mutual Aid" 1902, Goldman, Graeber, Chomsky). Each picks up on something real others underweight.`,
          vocab: [
            {
              word: `socialism anarchism`,
              definition: `Social democracy: accepts market economies with substantial democratic regulation and redistribution. Traces through Rawls (philosophy), FDR New Deal (US politics), European labor parties (welfare states). Contemporary "liberal" in US usage ≈ social democracy. Socialism politically: Eugene Debs (US Socialist Party candidate 5x early 20th c) on worker collective organization, public ownership of essential industries, structural challenge to capitalism. Contemporary democratic socialists: Bernie Sanders, AOC, similar figures globally. Anarchism: Pierre-Joseph Proudhon "What Is Property?" 1840 ("property is theft"); Peter Kropotkin "Mutual Aid" 1902 (cooperation as fundamental); Emma Goldman (organizer, deported from US 1919). Contemporary: David Graeber "Debt" 2011 and "Dawn of Everything" 2021 with Wengrow; Noam Chomsky. Anarchism's specific claim: state itself is part of problem, not just what state does. Many mainstream ideas (direct democracy, worker cooperatives, mutual aid) come from anarchist sources.`,
              audioPrompt: `Social democracy combines acceptance of market economies with substantial democratic regulation and redistribution, {name}. It traces partly through John Rawls's philosophy, partly through Franklin Roosevelt's New Deal coalition, partly through European labor and social-democratic parties that built welfare states across the 20th century. Contemporary "liberal" in US usage usually means something close to social democracy. Socialism politically: Eugene Debs ran for president as Socialist Party candidate five times early 20th century. Debs argued that workers should organize collectively against capitalist power; that public ownership of essential industries produces better outcomes than private ownership. Contemporary democratic socialists like Bernie Sanders and Alexandria Ocasio-Cortez have updated this tradition for the 21st century. Anarchism is often treated as marginal but includes serious intellectual work. Pierre-Joseph Proudhon argued in What Is Property? from 1840 that property is theft. Peter Kropotkin's Mutual Aid from 1902 argued that cooperation, not just competition, is fundamental to evolution. Emma Goldman argued for individual freedom and women's rights against state power on both right and left.`,
            },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Listen`,
          paragraphs: [
            `The Perspectives screen presents five voices speaking from five traditions. Engage with each: what does it see clearly, what does it underweight, what aspect of your own thinking does it sharpen?`,
            `One framing as you listen. The contemporary US political debate runs largely between strands of conservatism (with internal disagreement about religious vs libertarian vs traditionalist strands) and strands of social democracy (often called "liberal" in US usage). Classical liberalism, socialism, and anarchism are present in US discourse but at the margins of the dominant two-party debate. This isn't true globally: most European countries have multi-party systems where social democrats, conservatives, classical liberals, greens, socialists, and sometimes far-left and far-right parties all hold seats in legislatures.`,
            `Another framing. The five traditions don't reduce to "left" and "right." Anarchism is in some ways the most "left" position (rejecting state power entirely) and in other ways shares with libertarianism (suspicion of concentrated authority). Religious conservatism shares with religious socialism a commitment to community-grounded values. Communitarian thinking (MacIntyre, Sandel) draws from multiple traditions. The map is more complex than the line suggests.`,
            `One framing for your moment specifically. Your generation is growing up in a moment of intensifying ideological polarization in many countries. The most effective protection against polarization's cognitive damage is having framework on what the various traditions actually argue (rather than what each tribe's caricature of the others claims). The five voices ahead represent real thinkers from real traditions. Engage each seriously.`,
            `One last framing before we listen. You're not asked to commit to one. Political ideology at 12 isn't an appropriate place to lock in commitment; the questions these traditions argue about will be your questions across decades. The goal of the Perspectives format is to develop the capacity to engage each tradition seriously on its own terms; which is the necessary foundation for whatever political commitments you'll develop as you mature into actual political agency.`,
          ],
          image: `/voyager-assets/history/l05-s5-before.webp`,
          imageCaption: `Five voices speak ahead. Goal: engage each on its own terms, not commit to one. Map more complex than left-right line: anarchism doesn't fit cleanly, religious conservatism/socialism share commitments, communitarianism draws from multiple traditions.`,
          vocab: [
            {
              word: `own terms`,
              definition: `Five Perspectives voices represent five real traditions: conservative (Burke, Kirk), classical liberal/libertarian (Locke, Mill, Hayek, Nozick), social democrat (Rawls, FDR, European parties), socialist (Debs, contemporary democratic socialists), anarchist (Proudhon, Kropotkin, Goldman, Graeber, Chomsky). Engage with each: what it sees clearly, what it underweights, how it sharpens your thinking. Map more complex than left-right line: anarchism doesn't fit cleanly; religious conservatism and socialism share commitments; communitarianism draws from multiple traditions. Political ideology at 12 not appropriate place for committed answer; questions will be yours across decades. Most effective protection against polarization's cognitive damage: framework on what traditions actually argue vs caricatures.`,
              audioPrompt: `Engaging ideologies on their own terms is the work, {name}. The Perspectives screen presents five voices speaking from five traditions. Engage with each: what does it see clearly, what does it underweight, what aspect of your own thinking does it sharpen? The contemporary US political debate runs largely between strands of conservatism and strands of social democracy. Classical liberalism, socialism, and anarchism are present in US discourse but at the margins. This isn't true globally: most European countries have multi-party systems where social democrats, conservatives, classical liberals, greens, socialists, and sometimes far-left and far-right parties all hold seats. The map is more complex than left-right line. Anarchism doesn't fit cleanly. Religious conservatism and religious socialism share commitments. You're not asked to commit to one tradition. Political ideology at 12 isn't an appropriate place to lock in commitment; the questions these traditions argue about will be your questions across decades.`,
            },
          ],
        },

        // ───── PERSPECTIVES SCREEN ─────────────────────────────────────────────
        {
          id: `l05-perspectives`,
          type: `perspectives`,
          headline: `Five Voices On Political Order`,
          intro: `{name}, five voices speak on what political life should be. Engage each. Note what each tradition sees, what it underweights, what aspect of your thinking it sharpens.`,
          perspectives: [
            {
              id: `burke-conservative`,
              voice: `Edmund Burke`,
              era: `England, 1790 (watching French Revolution)`,
              stance: `Inherited institutions encode accumulated wisdom; revolutionary redesign produces catastrophe.`,
              quote: `The science of constructing a commonwealth is not to be taught a priori. People will not look forward to posterity who never look backward to their ancestors.`,
              argument: `Societies are organic, complex, embedded in tradition that accumulated wisdom over generations. Inherited institutions (church, family, local communities, established law) should be reformed cautiously and locally rather than swept away in service of abstract universal principles. The unintended consequences of large-scale redesign often dwarf the intended benefits. The American Revolution was prudent because it restored inherited English liberties against royal overreach; the French Revolution attempted to redesign society from theory and devolved into the Terror within three years, vindicating the caution.`,
              evidence: `The Terror in France (Reign of Terror 1793-1794, tens of thousands executed); 20th-century revolutionary catastrophes (Soviet, Maoist, Khmer Rouge); the relative success of slowly-reformed institutions vs ones swept away; the existence of "tacit knowledge" in institutions that escapes explicit articulation (Michael Polanyi's work).`,
              strengths_and_limits: `Strengths: institutions often encode hard-won knowledge that abstract reformers miss; local knowledge is real; family, religion, community provide meaning. Limits: can become defense of unjust status quos (slavery, segregation, gender inequality were "inherited institutions" defended on conservative grounds); some "tradition" is recent invention defended as ancient; veneration of order can become apology for power.`,
            },
            {
              id: `mill-liberal`,
              voice: `John Stuart Mill`,
              era: `England, 1859`,
              stance: `Individuals should be free to live as they choose unless directly harming others.`,
              quote: `The only freedom which deserves the name is that of pursuing our own good in our own way, so long as we do not attempt to deprive others of theirs.`,
              argument: `Individual liberty is the foundation of a flourishing society. People know their own interests better than rulers do; experiments in living produce knowledge no central authority could generate; truth emerges from open debate, not from imposed orthodoxy. Government's legitimate role is preventing direct harm to others (assault, theft, fraud) and providing genuine public goods that markets can't supply. Restrictions on speech, religion, association, and personal conduct that doesn't directly harm others are illegitimate exercises of power. Inherited authority deserves no automatic deference; institutions should justify themselves to free individuals.`,
              evidence: `The 17th-18th century revolutions establishing constitutional government and individual rights; the disasters of religious and political orthodoxies enforced by state power across centuries; the productive power of free inquiry and free markets; the failure of paternalistic regulation across many domains.`,
              strengths_and_limits: `Strengths: foundational for constitutional government, individual rights, free speech, religious tolerance; protects against state and majority overreach. Limits: "consenting individuals" model misses how power operates through unequal markets and workplaces; historically compatible with substantial unfreedoms (slavery, women's exclusion, child labor); the "harm to others" standard contested in cases (does pollution count? Does economic harm?); strict version would dismantle social insurance programs supported by overwhelming majorities.`,
            },
            {
              id: `rawls-social-democrat`,
              voice: `John Rawls`,
              era: `United States, 1971`,
              stance: `Just institutions protect basic liberties for all and arrange inequalities to benefit the worst off.`,
              quote: `Justice is the first virtue of social institutions, as truth is of systems of thought. Each person possesses an inviolability founded on justice that even the welfare of society as a whole cannot override.`,
              argument: `Imagine designing society's basic institutions from behind a "veil of ignorance": what would you choose if you didn't know which position in society you'd end up in (rich or poor, healthy or sick, talented or struggling)? Rawls's answer: you'd choose institutions that protect basic liberties for all (the liberal commitment to free speech, religion, association) and arrange social and economic inequalities to maximize the position of the worst off. Democratic government is the appropriate vehicle for this collective project; substantial redistribution through taxes funding healthcare, education, and social insurance is required by justice, not merely permitted by majority preference.`,
              evidence: `The success of Nordic countries (Denmark, Sweden, Norway, Finland, Iceland) at top of World Happiness Report, freedom indices, and most other measures; the demonstrable benefits of universal healthcare and education on health, mobility, and democratic legitimacy; substantial empirical work on what institutional arrangements actually maximize the position of those at the bottom.`,
              strengths_and_limits: `Strengths: provides philosophical foundation for the welfare states that have produced the most flourishing societies on record; protects basic liberties while ensuring economic security; respected by serious philosophers across traditions. Limits: hard to build in large diverse societies (US has struggled with universal healthcare for decades); requires political institutions and tax bases that have been hard to create elsewhere; some critics from right argue produces dependency, from left argue preserves capitalism's exploitation.`,
            },
            {
              id: `debs-socialist`,
              voice: `Eugene Debs (with contemporary democratic socialism)`,
              era: `United States, early 20th century to present (Debs ran for president 5x; contemporary descendants include Sanders, Ocasio-Cortez)`,
              stance: `Workers should organize collectively against capitalist power; public ownership of essentials produces better outcomes than private.`,
              quote: `While there is a lower class, I am in it; while there is a criminal element, I am of it; while there is a soul in prison, I am not free. (Debs, sentencing speech 1918)`,
              argument: `Capitalism produces systematic inequality and exploitation that isn't fixed by regulation alone. Workers create the wealth; owners of capital extract most of it through their structural position, not through earning it through labor. Workers organizing collectively (unions, political parties, social movements) can shift this balance. Public ownership of essential industries (utilities, transportation, healthcare, education, housing) produces better outcomes than private ownership for the same reason public roads work better than private toll roads. Markets are tools for some purposes, not values to be preserved at all costs. The distinction from 20th-century state socialism is crucial: democratic socialism advocates collective provision and worker power through democratic institutions, not single-party rule.`,
              evidence: `The systematic concentration of wealth (Piketty); the better outcomes of public provision in healthcare (Nordic countries, UK NHS, Canada vs US on cost and quality); the historic role of unions in producing the middle class of the mid-20th century; the persistence of poverty and inequality despite decades of market growth; the achievements of democratic socialist parties in Europe at building decent societies.`,
              strengths_and_limits: `Strengths: takes seriously the structural sources of inequality that other positions underweight; explains why purely market solutions fail in specific domains (healthcare, education, environment); aligns with the demonstrably successful Nordic experience. Limits: 20th-century state-socialist record (Soviet, Maoist, Khmer Rouge) casts shadow over the tradition; democratic-socialist programs at scale have been hard to build outside specific historical conditions; "public ownership of all essentials" can become difficult to operationalize when essentials are contested.`,
            },
            {
              id: `kropotkin-goldman-anarchist`,
              voice: `Anarchist tradition (Kropotkin, Goldman, contemporary)`,
              era: `Late 19th-early 20th century (Kropotkin Russian/exile, Goldman Russian-American), with contemporary descendants (Graeber, Chomsky, many activists)`,
              stance: `Concentrated power corrupts; alternatives to top-down state and corporate power can organize complex societies.`,
              quote: `Mutual aid is as much a law of animal life as mutual struggle. (Kropotkin 1902) // The most violent element in society is ignorance. (Goldman)`,
              argument: `All concentrated power tends toward injustice, including democratic state power and corporate power. The state's monopoly on legitimate violence enables systematic injustice that can't be reformed away while the state exists; corporations concentrate economic power in ways that distort political life regardless of nominally democratic institutions. Alternatives exist: federations of communes, worker cooperatives, mutual aid networks, direct democracy, consensus decision-making. Kropotkin showed in Mutual Aid (1902) that cooperation, not just competition, is fundamental to human and animal life. Goldman showed that authoritarianism on the political left is as dangerous as on the right. Many ideas now mainstream (direct democracy, worker cooperatives, mutual aid networks, anti-authoritarianism on both right and left) come from anarchist sources.`,
              evidence: `The 20th-century history of state power producing catastrophes (regardless of left or right ideology); the Spanish Revolution 1936-1939 (anarchist-organized regions in Catalonia and Aragon operating collectivized agriculture and industry under conditions of civil war); the contemporary success of worker cooperatives (Mondragón in Spain, others); the substantial influence of anarchist organizational forms on civil rights movements, Occupy, climate activism, mutual aid networks during COVID-19.`,
              strengths_and_limits: `Strengths: takes seriously the dangers of concentrated power that other positions underweight; provides framework for understanding 20th-century authoritarian failures across the political spectrum; many concrete alternatives have been built and work at scale. Limits: most political theorists believe complex modern societies require some institutionalized authority; the Spanish Revolution was crushed by Franco's forces; "alternatives at scale" remain rare and contested; sometimes treated as marginal because the dominant political traditions can't fully accommodate it.`,
            },
          ],
          synthesisPrompt: `After engaging with all five voices: which tradition sees something the others underweight? Which felt most foreign to you, and what would it take to engage that tradition seriously even if you don't commit to it?`,
          reflectionPrompt: `Across the rest of this History band: which of the five traditions will you find hardest to maintain awareness of when content gets politically charged? Why?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Where do "left" and "right" come from as political terms?`,
              options: [
                `Just made up`,
                `From the French Revolution. In the National Assembly of 1789, supporters of the king sat on the right side of the chamber, supporters of revolutionary change on the left. Geographic accident produced vocabulary now used globally to describe ideological positions, though what "left" and "right" mean has shifted substantially across two and a half centuries`,
                `Just random`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The left/right vocabulary has historical roots, not abstract philosophical foundations. The shifting meaning across centuries means contemporary "left" and "right" aren't direct continuations of 1789 categories. Understanding the vocabulary's history helps in analyzing how it's used (often loosely) in current debate.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did Edmund Burke argue in "Reflections on the Revolution in France" (1790)?`,
              options: [
                `Random`,
                `Revolutionary attempts to redesign society from abstract principles produce catastrophe. Societies are organic, complex, embedded in tradition with accumulated wisdom; inherited institutions (church, family, local communities, established law) should be reformed cautiously and locally rather than swept away. Burke supported the American Revolution and Catholic emancipation in Ireland; his claim was about HOW to approach change, not that everything inherited is good. Foundational for conservative tradition`,
                `Just no change`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Burke's actual argument is more sophisticated than "preserve everything inherited." It's a methodological claim about how to approach social change: prudently, attentive to specific local conditions, recognizing that unintended consequences often dwarf intended benefits. The French Revolution's collapse into Terror vindicated this in many eyes.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the relationship between "classical liberalism" and contemporary US "liberal"?`,
              options: [
                `Same`,
                `Different. Classical liberalism (Locke "Two Treatises" 1689, Mill "On Liberty" 1859) means limited government, individual rights, market economy. This is roughly what's now called "libertarian" or "right" in contemporary US politics. "Liberal" in contemporary US usage usually means something closer to social democracy. The shifting vocabulary is confusing but important: same word, different positions across time`,
                `Random`,
                `Both same`,
              ],
              correctIndex: 1,
              explanation: `The shifted vocabulary causes substantial confusion in political discussion. Recognizing that "liberal" means different things in different times and contexts (and that "libertarian" in current US usage is closer to historical "liberal") helps in reading political debate accurately.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did John Stuart Mill argue in "On Liberty" (1859)?`,
              options: [
                `Just freedom`,
                `Individuals should be free to live as they choose unless their actions directly harm others; society's interference with individual liberty is rarely justified. Foundation for civil libertarian tradition; "only freedom that deserves the name is that of pursuing our own good in our own way, so long as we do not attempt to deprive others of theirs." Protects against state and majority overreach in personal conduct, speech, religion, association`,
                `Random`,
                `Just rights`,
              ],
              correctIndex: 1,
              explanation: `Mill's "harm principle" remains foundational for liberal political theory. The specific formulation (direct harm to others as the only legitimate basis for state interference with individual liberty) has been hugely influential but is also contested: does pollution count? Does economic harm? The contests around the harm principle continue.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did John Rawls argue in "A Theory of Justice" (1971) about political institutions?`,
              options: [
                `Just fairness`,
                `Just institutions designed from behind "veil of ignorance": what would you choose if you didn't know which position in society you'd end up in. Answer: institutions protecting basic liberties for all and arranging inequalities to maximize position of worst off. Democratic government is appropriate vehicle for collective action; substantial redistribution through taxes funding healthcare/education/social insurance is required by justice. Philosophical foundation for social democracy. Aligns with Nordic model's success`,
                `Random`,
                `Just liberty`,
              ],
              correctIndex: 1,
              explanation: `Rawls provides philosophical foundation for treating democratic redistribution not as charity but as justice. The veil-of-ignorance thought experiment forces consideration from the perspective of those who might end up at the bottom. This shapes how social democrats argue for universal healthcare, education, etc., not as gifts but as required by justice.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did Eugene Debs argue politically, and how does democratic socialism distinguish itself from 20th-century state socialism?`,
              options: [
                `Same as Soviet`,
                `Debs (ran for US president as Socialist Party candidate 5x early 20th c) argued workers should organize collectively against capitalist power; public ownership of essential industries produces better outcomes than private. Contemporary democratic socialists (Sanders, AOC, similar figures globally) updated for 21st c. Distinction from 20th-c state socialism: democratic socialism advocates collective provision and worker power through democratic institutions, not single-party rule or state ownership of all production. Often resembles social democracy more than Soviet-style socialism`,
                `Random`,
                `Just unions`,
              ],
              correctIndex: 1,
              explanation: `The distinction between democratic socialism and Soviet-style state socialism is real and matters. Lumping them obscures contemporary debate. Democratic socialists generally accept that markets exist and political democracy operates; the question is what should be removed from markets and provided collectively. This is closer to the Nordic model than to Stalin.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does anarchism argue and who are its major figures?`,
              options: [
                `Just chaos`,
                `Concentrated power corrupts, including democratic state power and corporate power; state's monopoly on legitimate violence enables injustice that can't be reformed away while state exists; alternatives exist (federations of communes, worker cooperatives, mutual aid networks, direct democracy, consensus decision-making). Figures: Pierre-Joseph Proudhon "What Is Property?" 1840 ("property is theft"); Peter Kropotkin "Mutual Aid" 1902 (cooperation as fundamental); Emma Goldman (deported from US 1919); contemporary David Graeber, Noam Chomsky. Many mainstream ideas (direct democracy, worker cooperatives, mutual aid) come from anarchist sources`,
                `Random`,
                `Just rebels`,
              ],
              correctIndex: 1,
              explanation: `Anarchism is often dismissed as marginal or treated as synonymous with disorder, but it's a serious intellectual tradition with substantial real-world influence. Many contemporary organizational forms (direct democracy, worker cooperatives, mutual aid) come from anarchist sources. The questions anarchists raise about concentrated power deserve engagement.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why do the five traditions not reduce cleanly to "left" and "right"?`,
              options: [
                `Random`,
                `Anarchism is in some ways most "left" (rejecting state power) and in other ways shares with libertarianism (suspicion of concentrated authority). Religious conservatism shares with religious socialism a commitment to community-grounded values. Libertarianism is "right" on economics but often "left" on social issues. Communitarian thinking draws from multiple traditions. Contemporary populism scrambles alignments. The line is useful starting framing but quickly inadequate for serious analysis`,
                `Just confusing`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The single left-right line captures something real (positions further apart tend to disagree more sharply) but obscures real differences. Serious political analysis usually requires multiple dimensions: economic, social, authoritarian/libertarian, communitarian/individualist, etc. Knowing the line's limits matters for reading current politics.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: "Conservative" and "liberal" mean the same thing today that they meant when the terms were coined.`,
              correctAnswer: false,
              explanation: `False. "Liberal" in its classical sense (Locke, Mill: limited government, individual rights, market economy) is roughly what's now called "libertarian" or "right" in contemporary US politics; "liberal" in contemporary US usage usually means social democracy. "Conservative" has also shifted: 19th-century European "conservative" often meant defenders of monarchy and aristocracy; contemporary US "conservative" often means a fusion of traditionalist, religious, libertarian, and nationalist elements that wouldn't all have made sense as a single position in earlier eras. Recognizing the shifting vocabulary matters for reading political history and current debate accurately.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend's TikTok feed is full of videos about how "the left wants communism and the right wants fascism" (both extremes are bad, both want to control everything. Based on this lesson, what should you point out?`,
              options: [
                `"Yes both extremes"`,
                `"Several specific things. First, the framing treats five very different traditions (conservatism, classical liberalism/libertarianism, social democracy, socialism, anarchism) as if they reduced to 'left vs right' with extremes on each side. They don't. The contemporary social democrats your friend probably calls 'the left' (people advocating universal healthcare, public education, paid parental leave) are not the same as Soviet-style communists; calling Bernie Sanders 'communist' obscures the actual position. The contemporary conservatives your friend probably calls 'the right' (people advocating limited government, traditional values, free markets) are not the same as fascists; calling mainstream conservatives 'fascist' obscures the actual position. Conflating mainstream positions with their extremes is a recognized polarization pattern that hurts both sides. Second, the framing assumes 'controlling everything' is the goal of both extremes, but this misreads each tradition. Communism in its 20th-century state forms did concentrate power in single-party rule (real and catastrophic). Fascism in its 20th-century forms did concentrate power in authoritarian states with violent suppression of opposition (real and catastrophic). But contemporary social democrats and contemporary conservatives aren't proposing those things; they're arguing about specific policy questions (healthcare, taxation, regulation, immigration, social issues) within democratic constitutional government. Treating them as if they want what 20th-century totalitarians wanted is straightforwardly false. Third, what would actually help your friend understand current politics: read serious thinkers from each tradition rather than caricatures. For conservatism, read Burke's Reflections or Russell Kirk. For classical liberalism, read Mill's On Liberty or Hayek. For social democracy, read Rawls or articles by serious social democratic thinkers. For socialism, read contemporary democratic socialists rather than 20th-century state socialists. For anarchism, read Kropotkin or David Graeber. Each tradition makes substantially different arguments than its opponents' caricature of it. Fourth, the TikTok feed itself is part of the problem. Polarization-optimized content makes everyone seem like extremists because that's what drives engagement. Real political life is much more boring: people from different traditions disagreeing about specific policy questions within shared constitutional frameworks. Fifth, your generation specifically is growing up in a moment of intensifying ideological polarization in many countries. The most effective protection against polarization's cognitive damage is having framework on what the various traditions actually argue (rather than what each tribe's caricature of the others claims). Building that framework is what this lesson is for. The TikTok 'both extremes bad' framing isn't analysis; it's tribal positioning dressed up as wisdom."`,
                `"Random"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied ideology literacy. Identify the conflation of mainstream positions with extremes (a recognized polarization pattern). Distinguish 20th-century totalitarianisms (real, catastrophic) from contemporary mainstream positions. Point toward actual reading from each tradition rather than caricatures. Recognize TikTok's polarization-optimization as part of the problem.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-tradition`, category: `Which tradition`, prompt: `Which of the five traditions did you find most surprising? Did any tradition include arguments you hadn't recognized before? Did any tradition seem more reasonable when engaged on its own terms than your prior framing suggested?` },
            { id: `reflect-family`, category: `Family ideology`, prompt: `What political tradition (or traditions) have the adults in your life absorbed, often without explicit examination? What do they get right? What do they miss?` },
            { id: `reflect-polarization`, category: `Polarization`, prompt: `Where do you encounter polarization-optimized content (TikTok, YouTube, X, news media)? How does the five-tradition framework help you read it differently?` },
            { id: `reflect-foreign`, category: `Foreign tradition`, prompt: `Pick the tradition that felt most foreign to you. What would it take to engage that tradition seriously even if you don't commit to it? Read a primary text? Talk to someone who actually holds the position?` },
            { id: `reflect-anarchism`, category: `Anarchism`, prompt: `Anarchism is often treated as marginal in standard ideological surveys. What's your engagement with it? Are the questions anarchists raise (about concentrated power, alternatives to top-down organization) ones you find serious? Why or why not?` },
            { id: `reflect-future`, category: `Across decades`, prompt: `These five traditions will be operating in the politics of every country you live in for the rest of your life. What does building serious framework on them now protect about how you'll engage politics across decades?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Ideology literacy at 12 protects across decades of polarized political discourse, voting decisions, and engagement with policy. Two paths.`,
          familyActivity: {
            title: `The Family Political Conversation`,
            duration: `60 minutes`,
            description: `Share the five traditions with your family. Try a specific exercise: each family member identifies which of the five traditions they identify with most (or which they identify with least). Then walk through what each tradition actually argues vs what they assumed. The conversation usually surfaces that many adults have absorbed labels and tribal positions without engaging the actual arguments. Useful follow-up: identify a specific contemporary policy debate (healthcare, taxation, immigration, climate, anything) and ask how each of the five traditions would approach it. The exercise produces sharper thinking than typical political conversation because it forces engagement with positions rather than tribal positioning.`,
          },
          projectOption: {
            title: `Read one primary text from each tradition, 5 weeks (recommended)`,
            duration: `5 weeks, ~45 minutes per session`,
            description: `Pick one foundational text from each tradition. Conservatism: Edmund Burke "Reflections on the Revolution in France" (excerpts) or Russell Kirk "The Conservative Mind" (excerpts). Classical liberalism: J.S. Mill "On Liberty" (short, accessible). Social democracy: John Rawls "A Theory of Justice" (sections; denser). Socialism: a serious contemporary democratic socialist text (e.g., Bhaskar Sunkara "The Socialist Manifesto" 2019). Anarchism: David Graeber "Possibilities" essays or Peter Kropotkin "Mutual Aid" excerpts. Apply during reading. Write 2,000 words on what shifted in your understanding of political ideology and where each tradition now seems more or less persuasive than you initially thought.`,
            offerToParent: `Parent: opt your kid into this project. Engagement with foundational texts from across the political spectrum at 12 produces capacity to engage politics through ideas rather than tribal positioning: among the highest-leverage civic education investments available.`,
          },
          identityQuestion: `If you become someone who engages five political traditions through their own arguments rather than through opposing tribes' caricatures, what does that change about your political life across decades?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who engages five political traditions through their own arguments rather than through opposing tribes' caricatures.`,
            `A person who can name what conservatism, liberalism, social democracy, socialism, and anarchism each see clearly.`,
            `Someone who reads polarized political content with awareness of the polarization itself.`,
          ],
          saveKey: `identity_responses_hw_11_12_05`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifth History and World lesson done. You have framework on five serious political traditions: conservatism (Burke, Kirk) on inherited wisdom and danger of utopian redesign; classical liberalism/libertarianism (Locke, Mill, Hayek, Nozick) on individual rights and limited government; social democracy (Rawls, FDR, European parties) on collective provision through democratic institutions; socialism (Debs, contemporary democratic socialists) on structural sources of inequality; anarchism (Proudhon, Kropotkin, Goldman, Graeber, Chomsky) on dangers of all concentrated power. You've engaged each tradition on its own terms rather than committing to one because political ideology at 12 isn't an appropriate place to lock in commitment. Next lesson moves to revolutions: when and why do societies undergo dramatic political transformation? Case Study format. Three cases: French, Russian, Haitian. Onward. — Lyra`,
          badge: `ideology-literate`,
          badgeName: `Ideology Literate`,
          xpEarned: 75,
          competencies: [
            `Articulates conservative tradition (Burke, Kirk) including strengths and critiques`,
            `Articulates classical liberalism/libertarianism (Locke, Mill, Hayek, Nozick) including strands`,
            `Articulates social democracy (Rawls, FDR, European parties) including the Nordic success and its limits`,
            `Articulates contemporary socialism (Debs, democratic socialists) distinguishing from 20th-c state forms`,
            `Articulates anarchist tradition (Proudhon, Kropotkin, Goldman, Graeber, Chomsky) including specific contributions`,
            `Recognizes limits of the left-right line for serious political analysis`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: Revolutions: Patterns and Causes`,
            hook: `Case Study format. Three cases: French, Russian, Haitian. When and why do societies transform?`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const perspectives = l.screens.find((s) => s.type === `perspectives`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L05 ${VERSION}] "${l.title}" mags=${mags} perspectives=${perspectives?.perspectives?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
