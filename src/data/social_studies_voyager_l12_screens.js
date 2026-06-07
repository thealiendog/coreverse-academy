// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L12 — International Relations: Diplomacy, Treaties, and Conflict
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics/Global) — D2.Civ, D2.His, D2.Geo
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l12-v1";

const SOCIAL_STUDIES_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-12`,
      title: `International Relations: Diplomacy, Treaties, and Conflict`,
      duration: 35,
      xpReward: 75,
      badge: `peace-architect`,
      badgeName: `Peace Architect`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, nations have no government above them. When they disagree, they negotiate, form alliances, apply pressure, or go to war. International relations is the study of how that anarchic system works — why international law has force even without enforcement, why some conflicts turn violent and others don't, and what diplomacy can and can't accomplish. These questions aren't academic. They determine war and peace. This lesson builds the framework.`,
          headline: `International Relations: Diplomacy, Treaties, and Conflict`,
          subtitle: `How nations manage their relationships, why peace is harder than it looks, and the deep debates about cooperation and conflict. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Anarchic System`,
          paragraphs: [
            `The most fundamental feature of international relations is anarchy: no world government, no global police, no court that can compel sovereign nations. Each state is sovereign, with supreme authority within its own territory and no higher power above it. This is what makes international relations so different from domestic politics: there is no Leviathan above the states.`,
            `This doesn't mean chaos. States interact constantly through trade, treaties, and diplomacy, and most states follow most international rules most of the time. Compliance is ultimately voluntary: a state follows international law because it chooses to, because cooperation serves its interests and its reputation matters to future interactions.`,
            `Anarchy creates the "security dilemma": with no higher authority to protect you, you must protect yourself by building up your military. But your buildup makes neighbors feel threatened, so they build up too. Even if no one wants war, mutual fear and uncertainty lead to arms races and unintended conflict. This is the tragic logic realists emphasize, shaping even well-intentioned states.`,
          ],
          image: `/voyager-assets/social-studies/l12-s1-anarchy.webp`,
          imageCaption: `The most fundamental feature of international relations is ANARCHY: there is no world government, no global police, no court that can compel sovereign nations. Each state is SOVEREIGN, with supreme authority within its own territory and no higher power above it. This doesn't mean chaos, states cooperate constantly through trade, treaties, and institutions, but compliance is ultimately VOLUNTARY. Anarchy creates the SECURITY DILEMMA: with no higher authority to protect you, you must protect yourself, so you build up your military, which makes your neighbors feel threatened, so they build up too. Even if no one wants war, mutual fear and uncertainty can lead to arms races and unintended conflict. This is the tragic logic of the international system that REALISTS emphasize.`,
          vocab: [
            { word: `sovereignty`,
              definition: `The principle that a state has supreme authority within its own territory and answers to no external power. The foundation of the international system of nations.`,
              audioPrompt: `Sovereignty, {name}, is the foundation of the international system: each state has supreme authority within its own territory and doesn't answer to any external power. This is what makes international relations so different from domestic politics: there's no world government above the states to enforce rules. Sovereignty also creates the protection we examined in foreign policy, the idea that outside powers shouldn't interfere in a country's internal affairs. But sovereignty can also be a shield for governments that abuse their own people. How should the international community respond when a sovereign government commits atrocities against its own citizens?` },
            { word: `anarchy (in international relations)`,
              definition: `The absence of a supreme authority above sovereign states in the international system. Not chaos, but the structural condition that each state must ultimately rely on itself for security.`,
              audioPrompt: `Anarchy in international relations, {name}, doesn't mean chaos: it's the technical term for the absence of any world government above sovereign states. No global police, no court that can compel nations, no authority to force compliance. States choose to follow international rules because doing so usually serves their interests, not because anyone can make them. This single structural fact shapes almost everything in international relations: why arms races happen, why alliances form, why cooperation is hard but possible, and why conflict persists despite everyone's stated preference for peace.` },
            { word: `security dilemma`,
              definition: `The spiral in which one state's defensive military buildup makes others feel threatened, causing them to build up too, increasing tension and risk of conflict even when no one intended war.`,
              audioPrompt: `The security dilemma, {name}, is one of the most important and tragic concepts in international relations. In an anarchic world where you must protect yourself, you build up your military for defense. But your neighbors can't be sure it's defensive, so they build up too. Now you feel more threatened and build more. No one wanted conflict, but the mutual uncertainty of an anarchic system generates an arms race that increases the risk of war. It explains why even well-intentioned states can end up in dangerous spirals. Where do you think this dynamic is playing out in the world right now?` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Diplomacy And Treaties`,
          paragraphs: [
            `Despite anarchy, nations cooperate enormously through diplomacy: the peaceful management of relations through negotiation and agreement. Diplomats represent their governments abroad, manage crises, and build channels that keep misunderstanding from escalating into conflict. Most of what holds the international system together is quiet diplomatic work.`,
            `Treaties are formal agreements creating voluntarily accepted rules: arms control limits weapons; trade treaties reduce barriers; human rights conventions set standards; security treaties commit allies. They are the architecture of international order, but only as strong as states' willingness to honor them. Most states honor most treaties because reputation matters, but enforcement is weak when powerful states defect.`,
            `Alliances are commitments by states to support each other militarily. NATO is the most notable example: an attack on one is an attack on all. Alliances can deter conflict but can also drag states into wars that started elsewhere, as in World War I, when alliance chains pulled major powers into a conflict none had intended.`,
          ],
          image: `/voyager-assets/social-studies/l12-s2-diplomacy.webp`,
          imageCaption: `Despite anarchy, nations cooperate enormously through DIPLOMACY: the peaceful management of relations through negotiation, communication, and agreement. Diplomats represent their governments abroad, negotiate agreements, and manage crises. TREATIES are formal agreements creating rules, arms control, trade barriers, human rights standards, security commitments. They're only as strong as states' willingness to honor them; most honor most treaties most of the time because REPUTATION AND RECIPROCITY matter. ALLIANCES are commitments to support each other (especially militarily): NATO commits members to treat an attack on one as an attack on all, deterring conflict. But alliances can also drag states into unintended wars, as in WWI when alliance chains pulled major powers into a conflict none had planned.`,
          vocab: [
            { word: `diplomacy`,
              definition: `The peaceful management of relationships between states through negotiation, communication, and agreement. The primary mechanism through which states cooperate and manage conflict without war.`,
              audioPrompt: `Diplomacy, {name}, is the quiet infrastructure that holds the international system together: the professional management of relationships between states through negotiation, communication, and agreement. Ambassadors and diplomats represent their governments abroad, maintain channels of communication, negotiate treaties, manage crises before they escalate, and build the trust that makes further cooperation possible. Most of what prevents war is never in the headlines because diplomacy tends to be slow, patient, and invisible when it works. What kinds of skills do you think make someone an effective diplomat, and are they different from the skills you'd need in other fields?` },
            { word: `treaties`,
              definition: `Formal agreements between states that create mutually binding rules or commitments. They form the architecture of international order but are enforced by states' willingness to honor them, not by a world government.`,
              audioPrompt: `Treaties, {name}, are the formal agreements that create the architecture of international order, arms control agreements limiting weapons, trade treaties opening markets, human rights conventions setting standards, security treaties committing allies. They're binding in the sense that states choose to be bound by them, but enforcement is weak: ultimately, a state honors a treaty because it serves its interests and because its reputation for reliability matters to future agreements. Most states honor most treaties most of the time. But when a powerful state decides to defect, the international system has limited tools to force compliance. Does this make treaties weak, or does it make reliability and reputation crucial?` },
            { word: `alliances and their risks`,
              definition: `Formal commitments between states to support each other, especially militarily. Alliances can deter conflict by raising the cost of aggression but can also draw states into wars they didn't start.`,
              audioPrompt: `Alliances and their risks, {name}, show one of the great ironies of the international system: the very commitments designed to prevent war can sometimes cause it. NATO works by making clear that attacking one member means fighting all of them, raising the cost of aggression and deterring attack. But alliance chains also bind states' fates together: World War I is the classic cautionary tale, where alliance commitments pulled major powers into a conflict that started in a corner of Europe and none of them had intended. As you evaluate alliances, ask: does the deterrence value outweigh the risk of being dragged into someone else's war? There's no guaranteed answer.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Conflict And Its Causes`,
          paragraphs: [
            `Despite all mechanisms for cooperation, violent conflict persists. Contributing causes: competition over territory or resources; ethnic, religious, or ideological conflict; miscalculations from the security dilemma; leaders who benefit from nationalist conflict; and deterrence breakdowns when war seems preferable to the status quo.`,
            `Not all conflicts are the same. Interstate wars have become rarer since 1945; civil wars more common, driven by ethnic tension, resource competition, weak governance, or colonial aftermath. Proxy conflicts, where major powers back opposing sides in smaller countries' wars, defined the Cold War and devastated Latin America, including Guatemala, Cuba, Nicaragua, El Salvador, Chile.`,
            `The most successful conflict-prevention mechanism is credible deterrence combined with diplomacy. Nuclear deterrence (mutually assured destruction) has arguably prevented great-power war since 1945, at the cost of weapons that could end civilization. Managing nuclear risk is one of the most difficult challenges in international relations.`,
          ],
          image: `/voyager-assets/social-studies/l12-s3-conflict.webp`,
          imageCaption: `Despite cooperation mechanisms, war persists. Contributing causes: competition over territory, resources, or strategic position; ethnic, religious, or ideological conflict; SECURITY DILEMMA miscalculations; domestic politics of leaders who benefit from nationalist conflict; breakdown of deterrence. Not all conflicts are the same: INTERSTATE WARS (between states) have become rarer since 1945; CIVIL/INTRASTATE WARS (within states) more common, driven by ethnic tension, resource competition, weak governance, or colonial aftermath. PROXY CONFLICTS, where major powers support opposing sides in smaller countries, defined the Cold War and devastated Latin America (Guatemala, Cuba, Nicaragua, El Salvador, Chile). The most successful prevention: CREDIBLE DETERRENCE plus diplomacy. Nuclear deterrence (MUTUALLY ASSURED DESTRUCTION) arguably prevented great-power war since 1945, at the cost of world-ending weapons.`,
          vocab: [
            { word: `proxy conflict`,
              definition: `A conflict in which major powers support opposing sides in a smaller country's war, advancing their interests indirectly without direct military confrontation with each other.`,
              audioPrompt: `A proxy conflict, {name}, is when major powers fight their rivalry indirectly by supporting opposing sides in a smaller country's war. During the Cold War, the U.S. and Soviet Union avoided direct military confrontation with each other, but both backed opposing sides in conflicts across Latin America, Africa, and Asia. The populations of these countries suffered the violence while the major powers competed from a distance. Countries like Guatemala, Nicaragua, El Salvador, and Chile experienced this devastating dynamic. For families with roots in Latin America, proxy conflicts may be deeply personal history. How does knowing this reframe how you think about those conflicts?` },
            { word: `deterrence`,
              definition: `The strategy of preventing aggression by convincing a potential attacker that the cost of action will outweigh any possible gain, through credible threats of retaliation.`,
              audioPrompt: `Deterrence, {name}, is the logic of preventing conflict by making sure a potential aggressor knows that attacking will cost more than it could possibly gain. You don't necessarily need to win a war to deter one; you need to make the enemy confident enough that fighting would be too costly. Alliances deter by raising the number of enemies an aggressor would face. Nuclear weapons deter by raising the cost of war to civilization-threatening levels. It's a logic built on threat rather than trust, which is both its strength (it works even between distrustful enemies) and its moral discomfort. How do you feel about a peace that rests entirely on the threat of mutual destruction?` },
            { word: `civil war and intrastate conflict`,
              definition: `Armed conflict within a single state, between the government and internal groups or between internal factions. More common than interstate war since 1945, often driven by ethnic tension, resources, or governance failure.`,
              audioPrompt: `Civil wars and intrastate conflicts, {name}, have become the dominant form of violent conflict since 1945, far more common than wars between countries. They're driven by ethnic or religious tension, competition for resources and power, weak or failed governance, or the unresolved legacies of colonialism that drew borders without regard for local communities. Civil wars cause enormous human suffering, displacement, and economic damage, and they can draw in outside powers as proxy conflicts. Latin America experienced devastating civil wars in El Salvador, Guatemala, Colombia, and Nicaragua during the twentieth century. Does knowing the causes of civil wars change how you think about what can prevent them?` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Institutions, Norms, And Global Governance`,
          paragraphs: [
            `To manage anarchy, states created international institutions: organizations that structure cooperation, facilitate agreements, and manage conflicts. The United Nations (1945) provides a forum for diplomacy and peacekeeping. The Security Council can authorize collective action, but is limited by the veto of its five permanent members (U.S., Russia, China, UK, France).`,
            `International norms are shared standards that states internalize even without formal enforcement. The norm against chemical weapons, the prohibition on targeting civilians, and R2P shape state behavior beyond what formal law predicts. Norm violations are costly in reputation and legitimacy; norms can be built or eroded by state actions.`,
            `Regional institutions also matter. In Latin America, the OAS, CELAC, Mercosur, and the Pacific Alliance structure cooperation on trade and diplomacy. The European Union is the world's most integrated regional institution, having built a common market, common currency, and shared governance across formerly warring nations. Regional integration is one of the most hopeful answers to anarchy.`,
          ],
          image: `/voyager-assets/social-studies/l12-s4-institutions.webp`,
          imageCaption: `To manage anarchy, states created INTERNATIONAL INSTITUTIONS: organizations structuring cooperation and managing conflict. The UNITED NATIONS (1945) provides a forum for diplomacy, peacekeeping, humanitarian work, and standard-setting. The SECURITY COUNCIL can authorize collective action, but the VETO of its five permanent members (U.S., Russia, China, UK, France) limits effectiveness. INTERNATIONAL NORMS are shared standards (no chemical weapons, no targeting civilians, RESPONSIBILITY TO PROTECT populations from atrocity) that shape behavior beyond formal law through reputation and legitimacy costs. REGIONAL INSTITUTIONS also matter: in Latin America, the OAS, Mercosur, CELAC structure regional cooperation. The EUROPEAN UNION is the world's most integrated regional institution, creating a common market, common currency, and shared governance across formerly warring nations.`,
          vocab: [
            { word: `international institutions`,
              definition: `Organizations created by states to structure international cooperation, facilitate agreements, and manage conflicts. The United Nations is the most prominent example.`,
              audioPrompt: `International institutions, {name}, are the organizations that states created to manage the problems of an anarchic world: the United Nations, the World Trade Organization, the International Monetary Fund, NATO, the African Union, and many others. These institutions provide forums for negotiation, rules for interaction, and sometimes mechanisms for collective action. They can't compel states the way domestic governments compel citizens, but they change the cost-benefit calculations of state behavior and create channels of communication that might otherwise not exist. Do you think international institutions like the UN are powerful enough to manage today's global problems, or too weak?` },
            { word: `international norms`,
              definition: `Shared standards of appropriate behavior in international relations that states internalize over time. Violation is costly in reputation and legitimacy even without mechanical enforcement.`,
              audioPrompt: `International norms, {name}, are shared standards of what's considered acceptable behavior between states. The prohibition on using chemical weapons in warfare, the norm against targeting civilians, the "responsibility to protect" populations from mass atrocities: these aren't enforced by a world police force, but violating them carries real costs in reputation, legitimacy, and the willingness of other states to cooperate. Norms can be built up over time through consistent practice and reinforcement, and they can be eroded by powerful states that break them without consequence. Why do you think norms can be so powerful even without formal enforcement?` },
            { word: `regional integration`,
              definition: `The process by which neighboring states pool sovereignty, create shared institutions, and deepen cooperation, as in the European Union or Mercosur, reducing conflict and building interdependence.`,
              audioPrompt: `Regional integration, {name}, is one of the most hopeful responses to the problem of international anarchy: neighboring states choosing to pool sovereignty, create shared institutions, open their borders to each other's goods and people, and build such deep interdependence that war between them becomes almost unthinkable. The European Union is the most dramatic example: countries that fought devastating wars in the twentieth century now share a common market, a common currency, and shared governance. In Latin America, Mercosur, the Pacific Alliance, and CELAC represent steps toward regional integration. Why do you think some regions integrate deeply while others struggle to cooperate?` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. The international system is anarchic, with no world government, creating the security dilemma. States cooperate through diplomacy (quiet negotiation), treaties (honored by reputation), and alliances (which deter conflict but can also entangle). Conflict persists, driven by territorial disputes, ethnic tensions, miscalculation, and proxy war.`,
            `International institutions like the United Nations provide forums for cooperation, limited by great-power veto. International norms shape behavior beyond formal enforcement, and regional integration (like the EU) is a deep answer to anarchy. Latin America has been shaped by international relations, from colonial empires to Cold War proxy conflicts to U.S. interventions.`,
            `The deepest questions in international relations remain genuinely contested. Is conflict ultimately unavoidable given anarchy? Can institutions and norms overcome power dynamics? Should powerful nations intervene to uphold global norms, or does intervention risk serving power? Five very different visions follow. Don't crown a winner. Begin forming your own view. Onward.`,
          ],
          image: `/voyager-assets/social-studies/l12-s5-before.webp`,
          imageCaption: `Threads together. The international system is ANARCHIC with no world government above sovereign states, creating the SECURITY DILEMMA. Despite this, states cooperate through DIPLOMACY (negotiation and communication), TREATIES (the architecture of order, honored by reputation and interest), and ALLIANCES (deterring conflict but risking entanglement). CONFLICT persists from territorial disputes, ethnic tensions, miscalculation, and PROXY WAR. INTERNATIONAL INSTITUTIONS (UN) provide cooperation forums, limited by great-power VETO. NORMS shape behavior beyond formal enforcement. REGIONAL INTEGRATION (EU, Mercosur) offers a deep answer to anarchy. LATIN AMERICA has been shaped by colonial empires, Cold War proxy conflicts, U.S. interventions, and regional cooperation efforts. Five competing visions of how the world does and should work follow. Don't crown a winner.`,
          vocab: [
            { word: `the three IR theories`,
              definition: `Realism (nations pursue power and security in a dangerous anarchic world), liberalism (institutions and interdependence can produce stable cooperation), and constructivism (ideas, norms, and identities shape what states want and do).`,
              audioPrompt: `The three main theories of international relations, {name}, each capture something real. REALISM says nations always pursue power and security in a dangerous anarchic world; cooperation is fragile and temporary. LIBERALISM says shared interests, institutions, and economic interdependence can produce stable cooperation and peace. CONSTRUCTIVISM says ideas, norms, and identities matter as much as material power; what states want and value can change over time through persuasion and shared experience. None of these theories explains everything, but each illuminates part of the truth. As you engage the debate ahead, notice which theory each perspective most closely reflects.` },
            { word: `great-power competition`,
              definition: `The rivalry among the world's most powerful states for influence, security, and advantage, a persistent feature of international relations that shapes the international order and smaller states' options.`,
              audioPrompt: `Great-power competition, {name}, is the ongoing rivalry among the world's most powerful states, the U.S., China, Russia, the EU, and others, for influence, security, and advantage. This competition shapes the whole international order: which institutions get built, which norms get enforced, which conflicts get support or opposition, and which smaller states have room to maneuver. Latin America has repeatedly been caught in great-power competition, most dramatically during the Cold War. Today, U.S.-China competition is reshaping everything from trade to technology to alliances. How do smaller countries protect their interests and sovereignty when great powers compete around them?` },
            { word: `global governance`,
              definition: `The collective management of global problems through international institutions, norms, and agreements in the absence of a world government. It works imperfectly but substantially.`,
              audioPrompt: `Global governance, {name}, is what the world has instead of a world government: the collective management of shared problems through international institutions, norms, treaties, and agreements. It's imperfect and incomplete, limited by great-power vetoes, state sovereignty, and the voluntary nature of compliance. But it works substantially: most of the time, most states follow most international rules, coordinate on most global problems, and manage most conflicts without war. The question for your generation is whether global governance is adequate for twenty-first-century challenges like climate change, pandemics, and nuclear proliferation. Is the current system enough?` },
          ],
        },

        {
          id: `l12-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: How Does The World Work, And How Should It?`,
          intro: `{name}, international relations generates some of the deepest disagreements in political thought. Is conflict ultimately unavoidable? Can institutions and norms overcome power? Should powerful nations intervene for global norms? Here are five thoughtful voices. Don't crown a winner. Understand the genuine tensions, and begin forming your own view of the world order you're inheriting.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The realist`,
              era: `A theory of international relations`,
              stance: `Nations always pursue their own power and security; in an anarchic world, conflict is the baseline reality, not an exception.`,
              quote: `"Great powers don't have friends. They have interests. Idealism is for professors. The world runs on power."`,
              argument: `Realism holds that the fundamental driver of international relations is power: states are rational actors in an anarchic world where there is no world government to protect them, so they must prioritize their own security and power. Alliances are temporary, institutions are tools states use when convenient and ignore when not, and moral considerations are secondary to strategic interest. Conflict is the natural state; periods of peace are simply successful deterrence. Understanding this clearly is not cynicism but realism: the path to survival in a dangerous world.`,
              evidence: `Historical pattern of great powers pursuing interests over alliances; the failure of collective security in WWI, WWII; great powers ignoring international institutions when it suits them; security dilemma dynamics in arms races across history; the persistence of great-power competition despite liberal international order.`,
              strengths_and_limits: `Strength: takes the anarchic structure of the system seriously and explains much of what actually happens in international politics, especially great-power behavior. Limit: underestimates the degree to which institutions, norms, and economic interdependence have genuinely changed state behavior, and can become a self-fulfilling prophecy that makes cooperation harder.`,
            },
            {
              id: `p2`,
              voice: `The liberal internationalist`,
              era: `A theory of international relations`,
              stance: `Shared interests, economic interdependence, and international institutions can create stable cooperation and a more peaceful world.`,
              quote: `"When countries trade, they don't fight. When institutions connect them, they resolve disputes peacefully. The liberal order has worked."`,
              argument: `Liberal internationalism holds that states are not doomed to perpetual conflict: shared economic interests (democracies and trading partners are far less likely to go to war), international institutions that raise the cost and lower the benefit of conflict, and international law all genuinely change the calculus. The post-WWII liberal international order, with the UN, WTO, IMF, NATO, and dense economic interdependence, has produced the longest period of great-power peace in modern history. Institutions and interdependence matter, not just power.`,
              evidence: `Democratic peace theory (democracies don't fight each other); trade interdependence reducing conflict; post-WWII period of relative great-power peace; success of regional integration in the EU; international institutions managing many disputes peacefully.`,
              strengths_and_limits: `Strength: correctly identifies real factors, democracy, trade, institutions, that have reduced conflict and enabled unprecedented cooperation. Limit: may have been overconfident: the liberal order has faced serious challenge, institutions are limited by great-power vetoes, and interdependence doesn't prevent all conflict between undemocratic states.`,
            },
            {
              id: `p3`,
              voice: `The constructivist`,
              era: `A theory of international relations`,
              stance: `Ideas, identities, and norms shape what states want; the international system is not just about power, it's about what states believe and value.`,
              quote: `"Why do Canada and France not fear each other's nuclear weapons? Because they share an identity. Ideas and norms make the world, not just power."`,
              argument: `Constructivism argues that the international system isn't fixed by material power alone: what matters equally is what states believe about each other, what they value, and what norms they share. Countries don't go to war with trusted allies even when those allies are more powerful, because identity and shared norms constrain behavior beyond what a pure power calculation would predict. Norms against slavery, colonialism, and chemical weapons changed state behavior over time. This means the international system can genuinely change through shifts in ideas, norms, and identities, not just through changes in power distribution.`,
              evidence: `The decline of colonialism driven by changed norms rather than power shifts; the norm against chemical weapons; the "democratic peace" as an identity-based phenomenon; international society evolving its standards of legitimacy; the role of ideas in ending the Cold War.`,
              strengths_and_limits: `Strength: captures the real role of ideas, identities, and norms in shaping international behavior beyond what pure power analysis explains. Limit: can underestimate how quickly norms erode under pressure and how selectively powerful states apply them when convenient.`,
            },
            {
              id: `p4`,
              voice: `The humanitarian interventionist`,
              era: `A view on intervention`,
              stance: `When governments commit mass atrocities against their people, the international community has a responsibility to intervene, even if it means overriding sovereignty.`,
              quote: `"Sovereignty is not a license to murder your own people. When a government commits atrocity, the world has a duty to act."`,
              argument: `The responsibility to protect (R2P) holds that sovereignty isn't absolute: a government that commits mass atrocities against its own people, genocide, ethnic cleansing, crimes against humanity, forfeits its sovereign immunity from intervention. The international community has a responsibility to protect populations from such crimes even if it means overriding the sovereignty of the offending state. Standing by while mass murder happens, citing sovereignty, is a moral failure that the twentieth century's genocides (Rwanda, Cambodia, Bosnia) demonstrated at great cost.`,
              evidence: `The UN's adoption of the Responsibility to Protect (R2P) doctrine; genocides where inaction or late action produced devastating outcomes; successful humanitarian interventions; the inadequacy of sovereignty as a shield for atrocity; the evolution of international humanitarian law.`,
              strengths_and_limits: `Strength: takes seriously that sovereignty can be weaponized to shield atrocity and that the international community has genuine moral stakes in mass crimes against civilians. Limit: "humanitarian intervention" has been used as cover for regime change and great-power interests; the criteria for when and how to intervene are disputed; intervention often has unintended consequences.`,
            },
            {
              id: `p5`,
              voice: `The sovereignty defender`,
              era: `A view on intervention`,
              stance: `Sovereignty is the foundation of international order; undermining it through intervention, however well-intentioned, creates more instability than it prevents.`,
              quote: `"Once you decide powerful nations may intervene whenever they deem it justified, you've handed a license to whoever is strongest."`,
              argument: `Sovereignty is not just a legal nicety: it's the foundation of international order. Once you establish that powerful nations may override sovereignty whenever they decide the cause is good enough, you've created a principle that will be applied selectively and in self-serving ways by the powerful. History shows that "humanitarian interventions" often serve the strategic interests of the intervening power and frequently produce worse outcomes than they prevent, generating instability, civil war, and resentment. The cure for bad governance is internal political change, not external military intervention.`,
              evidence: `Post-intervention instability in Libya, Iraq, and other cases; selective application of humanitarian norms by powerful states; the difficulty of rebuilding governance after intervention; the risk of intervention becoming cover for regime change; the foundational importance of sovereignty to the international order.`,
              strengths_and_limits: `Strength: correctly warns that unlimited intervention is a doctrine that will be applied selectively by the powerful, and that history shows many interventions produce worse outcomes. Limit: pure sovereignty-first leaves populations defenseless against their own governments' atrocities, and "it might be misused" doesn't automatically mean the doctrine is wrong in all cases.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land on how the world works? Does realism capture the fundamental truth about international politics, or do institutions and norms genuinely change the game? And on intervention: when, if ever, does the international community have the right to override sovereignty to protect civilians? Pick the tension that grips you most and reason it through in 5-6 sentences.`,
          reflectionPrompt: `You live in a world shaped by international relations, by proxy wars your family's homeland may have experienced, by alliances you benefit from, by norms you depend on. How does understanding the structure of the international system change how you see the world's conflicts and cooperation?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does "anarchy" mean in international relations?`,
              options: [
                `A state of total chaos involving constant and ongoing warfare between absolutely all nations at all times.`,
                `The absence of any world government above sovereign states, so states must ultimately rely on themselves for security.`,
                `A political system in which no elected government exists.`,
                `A treaty requiring all nations to disarm their militaries.`,
              ],
              correctIndex: 1,
              explanation: `In international relations, "anarchy" is the technical term for the absence of a world government above sovereign states, not chaos: states cooperate extensively, but compliance is voluntary and security is ultimately self-provided. The distractors describe chaos, domestic political systems, or a disarmament treaty.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the "security dilemma"?`,
              options: [
                `A government's difficulty in funding both military and social programs simultaneously.`,
                `The spiral in which one state's military buildup makes others feel threatened, causing them to build up too, increasing risk of conflict.`,
                `The enormous practical challenge that governments face in protecting their own citizens from crime within their own country.`,
                `A legal term for cases where two countries claim the same territory.`,
              ],
              correctIndex: 1,
              explanation: `The security dilemma is the tragic dynamic in which a state's defensive military buildup makes neighbors feel threatened, causing them to build up, which increases mutual fear and risk of conflict, even when no one intended war. The distractors describe budget tradeoffs, domestic security, or territorial disputes.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the primary purpose of diplomacy in international relations?`,
              options: [
                `To help a country win wars more effectively through better and more advanced military strategy.`,
                `To manage relationships between states peacefully through negotiation, communication, and agreement.`,
                `To enforce international law through economic sanctions.`,
                `To decide which countries are allowed to join international organizations.`,
              ],
              correctIndex: 1,
              explanation: `Diplomacy is the peaceful management of relationships between states through negotiation, communication, and agreement, the primary mechanism through which states cooperate and manage conflict without war. The distractors describe war, sanctions enforcement, or membership decisions.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is a proxy conflict?`,
              options: [
                `A conflict where major powers support opposing sides in a smaller country's war.`,
                `A conflict between two small countries with no outside involvement.`,
                `A diplomatic debate conducted through written letters instead of meetings.`,
                `A conflict fought entirely with economic sanctions rather than military force.`,
              ],
              correctIndex: 0,
              explanation: `A proxy conflict is when major powers advance their rivalry indirectly by supporting opposing sides in a smaller country's war, as the U.S. and Soviet Union did across Latin America during the Cold War. The distractors describe uninvolved conflicts, letter diplomacy, or economic warfare.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the key limitation on the United Nations Security Council's effectiveness?`,
              options: [
                `The UN Security Council has no permanent members at all.`,
                `The UN Security Council is officially permitted to meet only a single time once per year.`,
                `The Security Council's five permanent members each hold a veto that can block collective action.`,
                `The UN Security Council is controlled entirely by developing countries.`,
              ],
              correctIndex: 2,
              explanation: `The Security Council's five permanent members (U.S., Russia, China, UK, France) each hold a veto, meaning any one of them can block collective action, significantly limiting effectiveness. The distractors invent absence of permanent members, annual meetings, or developing-country control.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are international norms, and how do they shape behavior?`,
              options: [
                `Formal legal codes that are directly enforced every day by a world government with its own international police power.`,
                `Shared standards of appropriate state behavior that shape conduct through reputation and legitimacy costs, even without formal enforcement.`,
                `Customs and local traditions that exist only within a single country's own domestic legal system and laws.`,
                `Rules that are designed to exclusively apply only to small or weak states and that never apply in any meaningful way whatsoever to the great powers.`,
              ],
              correctIndex: 1,
              explanation: `International norms are shared standards of appropriate behavior that shape state conduct through reputation and legitimacy costs, even without a world government to enforce them mechanically. Violations are costly in reputation and influence. The distractors describe domestic law, enforced international law, or rules limited to small states.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the "responsibility to protect" (R2P) doctrine?`,
              options: [
                `The duty of every country to protect its military secrets from foreign spies.`,
                `The idea that sovereign states have the responsibility to protect their citizens, and the international community may intervene if they fail to do so.`,
                `A formal international treaty specifically requiring every single country to regularly provide foreign aid to all of their neighbors.`,
                `The obligation of stronger countries to provide military protection to weaker allies only.`,
              ],
              correctIndex: 1,
              explanation: `R2P holds that sovereignty isn't absolute: states have a responsibility to protect their populations, and if they fail (through mass atrocities), the international community may intervene. The distractors describe military secrecy, foreign aid obligations, or alliance protection.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How does realism differ from liberal internationalism as a theory of international relations?`,
              options: [
                `Realism claims all states cooperate naturally and easily with each other; liberalism claims that all states will always and inevitably compete against each other.`,
                `Realism focuses on power and security in an anarchic world; liberalism emphasizes how institutions, trade, and interdependence can produce stable cooperation.`,
                `They are honestly just two completely different names that both describe the very exact same identical international relations theory.`,
                `Realism as a theory applies exclusively only to democratic countries, while liberalism applies only to authoritarian ones.`,
              ],
              correctIndex: 1,
              explanation: `Realism focuses on power and security as the drivers of state behavior in an anarchic world, seeing cooperation as fragile; liberal internationalism holds that institutions, economic interdependence, and democracy can produce stable cooperation and peace. The distractors reverse the descriptions, conflate them, or limit them to specific state types.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because the international system is anarchic with no world government, states cannot cooperate effectively, and international institutions like the United Nations are essentially irrelevant to how states actually behave.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important nuances in understanding international relations: the absence of a world government (anarchy in the technical sense) does not mean states cannot cooperate effectively, and international institutions, while limited, are far from irrelevant to state behavior. Anarchy describes the structural condition of the international system, no supreme authority above sovereign states, but it does not determine that cooperation is impossible. States cooperate extensively and successfully: they honor most treaties most of the time, coordinate trade and monetary policy through international institutions, manage most disputes without war, and have built shared norms that genuinely constrain behavior. Why? Because cooperation often serves states' interests, because reputation for reliability matters in repeated interactions, and because institutions reduce the transaction costs of negotiating individual agreements and provide forums for managing disputes. The United Nations, even with its obvious limitations (especially the Security Council veto), provides real value: it gives diplomats a permanent forum, authorizes peacekeeping operations that have prevented or limited many conflicts, coordinates humanitarian responses, and sets norms through resolutions and conventions that shape state behavior even without mechanical enforcement. The post-World War II liberal international order, with its dense web of institutions, norms, and economic interdependence, has contributed to the longest period without great-power war in modern history, a significant achievement for an "irrelevant" set of institutions. Liberal internationalists make exactly this point: institutions, trade, and interdependence genuinely change the calculus of state behavior even without a world government to compel compliance. This doesn't mean institutions are all-powerful or always effective. The Security Council veto can paralyze collective action. Powerful states violate international norms when they calculate the cost is low. Institutions reflect great-power interests in their design and limitations. But the realistic picture is of institutions that are limited but consequential, not irrelevant. So the statement is false: anarchy does not prevent effective cooperation, and international institutions genuinely shape how states behave, even if they cannot compel compliance the way domestic governments can.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A government is committing mass atrocities against its own citizens. Other countries are debating whether to intervene militarily. Using the lesson, what is the most accurate analysis of the competing considerations?`,
              options: [
                `Sovereignty is absolute, so outside intervention is never permissible regardless of what a government does to its own people.`,
                `Intervention is always the right choice whenever atrocities occur, since sovereignty should never matter.`,
                `There is a genuine tension between the responsibility to protect civilians from atrocity (which may justify overriding sovereignty) and the dangers that intervention will be applied selectively, produce worse outcomes, or serve intervening powers' interests rather than civilians' welfare.`,
                `Only the United Nations Security Council may ever comment on another country's treatment of its own citizens.`,
              ],
              correctIndex: 2,
              explanation: `The R2P doctrine suggests sovereignty isn't absolute when atrocities occur, but the sovereignty defender's concern is also valid: intervention can serve interveners' interests, produce instability, and set a precedent for selective application. The genuine tension between these positions is what makes this one of the hardest questions in international relations. The distractors treat sovereignty as absolute, intervention as always right, or reduce the question to UN authority alone.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-order`, category: `The world you're inheriting`, prompt: `You live in a world shaped by international relations, by proxy wars your family's homeland may have experienced, by alliances you benefit from, by norms you depend on. How does understanding the international system's structure change how you see the world's conflicts and cooperation?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you may have assumed cooperation between nations was natural or that conflict was simply caused by "bad actors." What surprised you most, the security dilemma, the role of norms, or how institutions actually work? What changed?` },
            { id: `reflect-theory`, category: `Your instinctive theory`, prompt: `Realism, liberalism, and constructivism each capture something real. Based on what you've seen of the world, which theory resonates most with you, and what evidence or experiences make it feel true? Which challenges you most?` },
            { id: `reflect-heritage`, category: `Teaching international relations`, prompt: `Caro, you're building social studies for conscious families with roots in Latin America. How would you help a child understand that the Cold War proxy conflicts in their heritage country weren't just "history" but real decisions made by distant powers that shaped their family's world, so international relations feels personal rather than abstract?` },
            { id: `reflect-intervention`, category: `Sovereignty and protection`, prompt: `When a government commits mass atrocities, who should act and how? After weighing the R2P argument and the sovereignty defender's concerns, where do you personally land: when is intervention justified, and what conditions would make it legitimate rather than self-serving?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `If international institutions are ultimately limited by the self-interest of powerful states, and norms are often selectively enforced, can global governance ever solve truly global problems like climate change or nuclear proliferation? What would it take to build an international order adequate to these challenges?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Map the International Order`,
            duration: `One afternoon`,
            description: `Turn an afternoon into an exploration of how the international system actually works and how it connects to your family's world. Start with anarchy and cooperation: discuss the paradox that without a world government, states somehow cooperate on trade, security, and global problems, and think through why cooperation happens despite anarchy (interests, reputation, institutions). Map the international system: on a world map, mark the major alliances (NATO, ASEAN, AU), the UN Security Council's five permanent members, regional institutions in Latin America (OAS, Mercosur, CELAC), and draw the proxy conflict zones of the Cold War in Latin America. Notice how geography and power intersect. Connect to your heritage: research how the Cold War's proxy conflicts affected a Latin American country your family has roots in: who was involved, what did the U.S. or Soviet Union do, and how did the conflict shape the country's politics and your family's world? Look up a current international crisis and apply the three theories: how would a realist, a liberal internationalist, and a constructivist analyze it? Which framing feels most accurate? Debate the intervention question as a family using a real historical or current case: should outside nations have intervened to stop a particular atrocity, and what conditions would make intervention legitimate versus self-serving? Explore international norms: identify three international norms (no chemical weapons, protection of civilians, nuclear non-proliferation) and look up a recent case where one was violated. What happened? Did the violation matter? Finally, discuss global governance: is the current international system adequate for global challenges like climate change, pandemics, or nuclear weapons? What would need to change? The goal is to move from seeing international events as disconnected headlines to understanding them as expressions of a structured, if imperfect, international system whose rules and dynamics you can now analyze.`,
          },
          projectOption: {
            title: `The International Relations Analyst Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate a real international conflict or cooperation challenge and analyze it through the lesson's frameworks, becoming someone who can think seriously about how nations relate. Week 1, choose and research a case: pick a real international issue, a current conflict or security crisis, a case of successful international cooperation (the Iran nuclear deal, the Paris Climate Agreement, a successful UN peacekeeping mission), a case of failed cooperation (a genocide where the international community failed to act), a proxy conflict from the Cold War in Latin America (Guatemala, Cuba, Nicaragua, Chile, El Salvador), or a current regional integration effort. Research it carefully: What is the context? Who are the key actors (states, institutions, non-state groups)? What interests are driving their behavior? What role have diplomacy, treaties, alliances, and institutions played? Has anarchy's security dilemma been visible? What norms have been invoked or violated? Week 2, analyze through the three theories and five perspectives and form your own view: apply realism, liberal internationalism, and constructivism to explain what happened. Apply the five debate perspectives (realist, liberal internationalist, constructivist, humanitarian interventionist, sovereignty defender) and find evidence for each. Then form your own assessment: which perspective most honestly captures the situation, and what should have been done, or what should happen next? If your case involves Latin America, connect it specifically to how U.S. or great-power actions shaped your family's heritage country. Produce your final piece, an analytical report, a "briefing for a diplomat," a documentary-style video, a debate presentation, or a multi-perspective policy analysis, that explains the case clearly and presents your reasoned assessment through the lens of international relations theory.`,
            offerToParent: `Parent: opt your child into the International Relations Analyst Project. Investigating a real international conflict or cooperation challenge, analyzing it through realism, liberal internationalism, and constructivism, applying the five perspectives on intervention and sovereignty, and forming a reasoned conclusion, directly develops C3 Framework global concepts: the structure of the international system, sovereignty, diplomacy, international institutions, norms, conflict and cooperation. Applying multiple analytical frameworks to a real case, including potentially a Cold War proxy conflict in Latin America, builds analytical reasoning, global awareness, and the ability to think critically about power and justice in the international order. It's rigorous, standards-aligned work that makes international relations personally relevant, especially for families whose heritage was shaped by the forces this lesson describes.`,
          },
          identityQuestion: `If you become someone who understands why the international system is anarchic yet produces substantial cooperation, who knows what the security dilemma is and how it generates conflict even without bad intentions, who can apply realist, liberal, and constructivist lenses to international events, and who can reason carefully about when sovereignty matters and when it can be overridden, what kind of citizen of the world does that make you, one who sees international news as a structured, analyzable system rather than random chaos, that someone who only sees conflict as inevitable or peace as natural never can?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who understands why cooperation is possible even in an anarchic world.`,
            `A person who can apply realist, liberal, and constructivist lenses to world events.`,
            `Someone who sees international conflict as a structured system I can analyze, not just random chaos.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just taken on one of the deepest and most consequential fields in all of political thought: how nations relate to each other in a world with no authority above them. You learned that the international system is anarchic, no world government above sovereign states, which creates the security dilemma: even well-intentioned states can end up in dangerous spirals of mutual fear and arms races. Despite this, states cooperate through diplomacy, treaties, alliances, and international institutions, though compliance is ultimately voluntary and great-power vetoes limit collective action. Conflict persists because of territorial competition, ethnic and ideological tensions, and proxy wars in which major powers fought through smaller countries, devastating Latin America and much of the developing world during the Cold War. International norms, from prohibitions on chemical weapons to the responsibility to protect, shape state behavior beyond formal enforcement, and regional integration, most dramatically in the EU, represents one of the deepest answers to anarchy. And you weighed three theories, realism, liberal internationalism, and constructivism, and five perspectives on the hardest questions: Is conflict ultimately unavoidable? Can institutions change the game? When does intervention override sovereignty? These are the live debates of your lifetime, and you're now equipped to engage them. This completes the first half of the Social Studies Voyager band, the foundations: government, rights, economics, and international relations. In the second half, we turn to history, sociology, media, and citizenship itself. Onward, {name}. — Atlas`,
          badge: `peace-architect`,
          badgeName: `Peace Architect`,
          xpEarned: 75,
          competencies: [
            `Understands international anarchy and why it creates the security dilemma`,
            `Knows the tools of international cooperation: diplomacy, treaties, and alliances`,
            `Understands how proxy conflicts worked and affected Latin America during the Cold War`,
            `Knows international institutions (UN), their functions, and their limits (Security Council veto)`,
            `Understands international norms and how they shape behavior without formal enforcement`,
            `Can apply realism, liberal internationalism, and constructivism to analyze world events`,
            `Can reason carefully about the tension between sovereignty and humanitarian intervention`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Decolonization — The Emergence of New Nations`,
            hook: `How colonial empires collapsed and new nations emerged, and the legacies that still shape the world. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L12 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
