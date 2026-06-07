// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L06 — US Foreign Policy: History, Principles, and Practice
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics / Global) — D2.Civ, D2.His, D2.Geo
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l06-v1";

const SOCIAL_STUDIES_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-06`,
      title: `US Foreign Policy: History, Principles, and Practice`,
      duration: 35,
      xpReward: 75,
      badge: `world-strategist`,
      badgeName: `World Strategist`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, the United States doesn't exist in isolation. It is the most powerful country in the world, which means its foreign policy decisions shape the lives of billions of people who never voted for any American president. How did the US come to play that role? What principles guide its decisions? Where have those decisions succeeded and where have they failed? This lesson takes those questions seriously.`,
          headline: `US Foreign Policy: History, Principles, and Practice`,
          subtitle: `How the United States acts in the world, and the hard choices behind every decision. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Foreign Policy Is`,
          paragraphs: [
            `Foreign policy is how a country acts toward the rest of the world: the goals it pursues abroad and the strategies it uses. While domestic policy is about what happens inside a country (schools, taxes, laws), foreign policy is about everything beyond its borders, relations with other nations, trade, war and peace, alliances, and problems no country can solve alone.`,
            `Nearly every country, despite their differences, pursues a similar core set of goals. First, security: protecting the nation and its people from threats. Second, prosperity: economic strength through trade, resources, and stable markets. Third, influence: shaping world events to fit the nation's interests and values. Almost every decision traces back to some mix of these three.`,
            `For the United States, foreign policy carries enormous weight, because it's one of the most powerful nations on Earth. Its choices, to trade or sanction, ally or oppose, intervene or stay out, affect not just Americans but billions worldwide. That power raises the question running through this lesson: how should a nation that strong use its strength?`,
          ],
          image: `/voyager-assets/social-studies/l06-s1-what.webp`,
          imageCaption: `FOREIGN POLICY is how a country acts toward the rest of the world: the goals it pursues abroad and the strategies it uses. DOMESTIC policy is about inside a country (schools, taxes, laws); foreign policy is about everything BEYOND its borders, relations with other nations, trade, war and peace, alliances, and global problems no country can solve alone. Nearly every country pursues a similar core set of goals: SECURITY (protecting the nation from threats), PROSPERITY (economic strength through trade and resources), and INFLUENCE (shaping world events to fit its interests and values). For the United States, one of the most powerful nations on Earth, these choices affect not just Americans but billions worldwide, raising the question: how should a nation that strong use its strength?`,
          vocab: [
            { word: `foreign policy`,
              definition: `A country's goals and strategies for dealing with the rest of the world, including relations with other nations, trade, alliances, war and peace, and global problems.`,
              audioPrompt: `Foreign policy, {name}, is how a country acts toward the rest of the world, the goals it sets abroad and the strategies it uses to reach them. It covers everything beyond a nation's borders: who it trades with, allies with, fights, helps, or ignores. While domestic policy handles what's inside a country, foreign policy handles its relationships with everyone else on the planet. Think about a recent world event you've heard of. Whose foreign policy choices do you think helped shape it?` },
            { word: `domestic vs. foreign policy`,
              definition: `Domestic policy concerns matters inside a country (schools, taxes, laws); foreign policy concerns a country's actions and relationships beyond its borders.`,
              audioPrompt: `Domestic versus foreign policy, {name}, marks a basic divide. Domestic policy is about what happens inside a country, schools, healthcare, taxes, laws. Foreign policy is about everything beyond the borders, how the nation deals with other countries through trade, alliances, war, peace, and aid. The two connect, a trade deal abroad affects jobs at home, but they're different arenas with different rules. Can you think of one issue that's really both domestic and foreign at the same time?` },
            { word: `security, prosperity, influence`,
              definition: `The three core goals nearly every country pursues in foreign policy: protecting itself from threats, building economic strength, and shaping world events to fit its interests and values.`,
              audioPrompt: `Security, prosperity, and influence, {name}, are the three core goals nearly every country chases in its foreign policy. Security means protecting the nation and its people from attack. Prosperity means building economic strength through trade and resources. Influence means shaping world events to match the nation's interests and values. Almost every foreign-policy decision traces back to some mix of these three. When you hear about a country's action abroad, try asking: which of these three is it really after?` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Great Pendulum`,
          paragraphs: [
            `American foreign policy has swung, like a pendulum, between two instincts. One is isolationism: the nation should stay out of other countries' conflicts, focus on itself, and avoid entangling alliances. Early leaders, including George Washington, warned against permanent foreign entanglements, and this instinct shaped much of the nation's first century and a half.`,
            `The opposite instinct is internationalism: a powerful nation should engage deeply with the world, through alliances, trade, global institutions, and sometimes military intervention. After World War II, the United States embraced this decisively, helping build the United Nations and NATO, becoming a global superpower involved everywhere.`,
            `The pendulum keeps swinging because both instincts capture something real. Isolationism appeals to the sense that a nation should mind its own business and avoid costly wars. Internationalism appeals to the reality that in a connected world, problems abroad reach home anyway, and a powerful nation can do real good by engaging. The tension shapes nearly every foreign-policy debate.`,
          ],
          image: `/voyager-assets/social-studies/l06-s2-pendulum.webp`,
          imageCaption: `American foreign policy has swung like a PENDULUM between two instincts. ISOLATIONISM: the nation should stay OUT of others' conflicts, focus on itself, and avoid entangling alliances. Early leaders, including Washington, warned against permanent foreign entanglements, shaping much of the first century and a half. The opposite: INTERNATIONALISM (or interventionism), a powerful nation should engage deeply through alliances, trade, global institutions, and sometimes military force. After World War II, the U.S. embraced this decisively, building the UN, NATO, and alliances, becoming a global superpower. The pendulum swings because both capture something real: mind your own business and avoid costly wars, versus, in a connected world, problems abroad reach home anyway.`,
          vocab: [
            { word: `isolationism`,
              definition: `The foreign-policy approach of staying out of other countries' conflicts and affairs, avoiding entangling alliances and focusing on the nation's own concerns.`,
              audioPrompt: `Isolationism, {name}, is the foreign-policy instinct to stay out of the rest of the world's conflicts, avoid binding alliances, and focus on the nation's own affairs. Early American leaders like Washington warned against permanent foreign entanglements, and this view shaped much of the country's early history. Its appeal is real: why spend lives and money on distant wars that aren't ours? But in a connected world, can a powerful nation truly stay out? What do you think, and where would you draw the line?` },
            { word: `internationalism`,
              definition: `The foreign-policy approach of engaging deeply with the world through alliances, trade, global institutions, and sometimes intervention. The U.S. embraced it strongly after World War II.`,
              audioPrompt: `Internationalism, {name}, is the opposite instinct from isolationism: the belief that a powerful nation should engage deeply with the world, through alliances, trade, leadership in global institutions, and sometimes military intervention. After World War II, the United States embraced this fully, helping build the UN and NATO and becoming a global superpower. Its appeal: in a connected world, you can't really hide from problems abroad, and engagement can do good. But it can also drag a nation into costly conflicts. Where's the balance?` },
            { word: `the foreign-policy pendulum`,
              definition: `The recurring swing in American foreign policy between isolationism (staying out) and internationalism (engaging deeply), as each instinct captures something genuinely true.`,
              audioPrompt: `The foreign-policy pendulum, {name}, is the way American foreign policy keeps swinging between two pulls: isolationism, stay out and mind our own business, and internationalism, engage deeply with the world. It swings back and forth because both instincts capture something real. After a costly war, the country often pulls back; after a global threat, it engages again. Understanding this pendulum helps you make sense of debates you'll hear your whole life. Which way do you feel the pendulum should swing right now, and why?` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Tools Of Statecraft`,
          paragraphs: [
            `Nations have a range of tools for pursuing goals abroad, and choosing among them is much of what foreign policy is. The first and often best is diplomacy: negotiation between nations to resolve differences and avoid conflict. Most international cooperation happens through talk, not force.`,
            `Then there's economic power: trade agreements that build prosperity, foreign aid that helps others (and builds influence), and sanctions, economic penalties to pressure a country without firing a shot. Economic tools are powerful because nearly every nation depends on trade. Alliances like NATO multiply a nation's strength by binding it to others for mutual defense.`,
            `The final and gravest tool is military force. It's the most powerful and most dangerous, able to stop aggression or atrocity, but also to cause immense death, destruction, and unintended consequences. The deepest questions are about when, if ever, to use force, and the wise principle is that force should be a last resort, after diplomatic and economic tools, because its costs are so terrible.`,
          ],
          image: `/voyager-assets/social-studies/l06-s3-tools.webp`,
          imageCaption: `Nations have a range of TOOLS for pursuing goals abroad. The first and often best: DIPLOMACY, negotiation and dialogue to resolve differences and avoid conflict. Most cooperation happens through talk, not force. Then ECONOMIC POWER: trade agreements that build prosperity and ties, FOREIGN AID that helps others (and builds influence), and SANCTIONS, economic penalties to pressure a country without firing a shot. ALLIANCES like NATO multiply strength by binding nations for mutual defense. The gravest tool: MILITARY FORCE, the most powerful and most dangerous, able to stop aggression but also to cause immense death and unintended consequences. The wise principle: force should generally be a LAST RESORT, after diplomacy and economic tools.`,
          vocab: [
            { word: `diplomacy`,
              definition: `Negotiation and dialogue between nations to resolve differences, reach agreements, and avoid conflict. Usually the first and preferred tool of foreign policy.`,
              audioPrompt: `Diplomacy, {name}, is the art of nations talking, negotiating, and reaching agreements to resolve differences without fighting. It's usually the first and best tool of foreign policy, because most international cooperation, trade deals, treaties, peace agreements, happens through patient dialogue, not force. Skilled diplomats can prevent wars and build lasting partnerships. It's quieter than military action and rarely makes headlines, but it does enormous good. Why do you think diplomacy, despite its power, gets so much less attention than war?` },
            { word: `sanctions`,
              definition: `Economic penalties one or more countries impose on another, such as cutting off trade, to pressure it into changing its behavior without using military force.`,
              audioPrompt: `Sanctions, {name}, are economic penalties, like cutting off trade or freezing assets, that countries use to pressure another nation into changing its behavior, without firing a single shot. They're a middle path between just talking and going to war. They can be powerful, since most nations depend on trade, but they're also debated: sometimes they hurt ordinary people more than the leaders they target, and they don't always work. Do you think economic pressure is a fair way to influence another country? When might it backfire?` },
            { word: `military force as last resort`,
              definition: `The principle that war and military intervention, the gravest and most dangerous foreign-policy tool, should generally be used only after diplomatic and economic options have been exhausted.`,
              audioPrompt: `Military force as a last resort, {name}, is a principle at the heart of responsible foreign policy. War is the most powerful tool a nation has, and also the most dangerous, capable of immense death, destruction, and consequences no one intended. Because its costs are so terrible and unpredictable, the wise approach is to try diplomacy and economic pressure first, turning to force only when other options have truly failed. When, if ever, do you think a nation is justified in going to war? It's one of the hardest questions there is.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Hardest Choices`,
          paragraphs: [
            `Foreign policy is where a nation's values and interests collide most sharply, forcing hard choices with no clean answers. The central tension: should a country act mainly in its own self-interest, security and prosperity for its people, or also for the good of the world, even at a cost? Most foreign policy lives in the space between.`,
            `Real dilemmas abound. Should a powerful nation intervene to stop an atrocity, or respect that country's sovereignty (its right to govern itself) and stay out? Should it support a rights-abusing government because it serves its interests, or refuse on principle? Should it prioritize stability, or promote democracy and risk chaos? Thoughtful people answer differently.`,
            `These choices have shaped the world, including across Latin America, where U.S. policy has at times supported democracy and at other times propped up harsh regimes, with consequences still felt today. The lesson isn't that foreign policy is simply good or bad, but that it involves immense power and responsibility, real tradeoffs, and consequences for millions who never get a vote.`,
          ],
          image: `/voyager-assets/social-studies/l06-s4-hardest.webp`,
          imageCaption: `Foreign policy is where a nation's VALUES and INTERESTS collide most sharply, forcing hard choices with no clean answers. The central tension: should a country act mainly in its own SELF-INTEREST, security and prosperity for its people, or also for the GOOD OF THE WORLD, human rights, helping the suffering, even at a cost? Real dilemmas: intervene to stop a genocide, or respect a country's SOVEREIGNTY and stay out? Trade with a rights-abusing government for strategic interest, or refuse on principle? Prioritize stability with unsavory allies, or promote democracy and risk chaos? These choices shaped the world, including across LATIN AMERICA, where U.S. policy at times supported democracy and at times propped up harsh regimes. Immense power, immense responsibility, real tradeoffs.`,
          vocab: [
            { word: `self-interest vs. global good`,
              definition: `The central foreign-policy tension: whether a nation should act mainly for its own security and prosperity, or also for the wider good of the world, even at a cost to itself.`,
              audioPrompt: `Self-interest versus the global good, {name}, is the deepest tension in foreign policy. Should a nation act mainly to protect its own people's security and prosperity? Or does a powerful country also have a responsibility to the wider world, to defend human rights, help the suffering, promote peace, even when it costs something? Most real foreign policy lives in the hard space between these two. Where do you lean: should a nation put its own interests first, or carry responsibility for the world too?` },
            { word: `sovereignty`,
              definition: `A nation's right to govern itself without outside interference. It creates a real dilemma when another country considers intervening, even to stop wrongdoing.`,
              audioPrompt: `Sovereignty, {name}, is a nation's right to govern itself, to run its own affairs without other countries interfering. It's a bedrock principle of international relations, but it creates agonizing dilemmas. If a government is committing atrocities against its own people, should other nations respect its sovereignty and stay out, or override it to stop the harm? Both answers have serious costs. When, if ever, do you think one country has the right to interfere in another's internal affairs?` },
            { word: `power and responsibility abroad`,
              definition: `The principle that a powerful nation's foreign-policy choices carry enormous consequences for millions worldwide, who have no vote in them, making those choices a matter of grave responsibility.`,
              audioPrompt: `Power and responsibility abroad, {name}, is the sobering truth that a powerful nation's foreign-policy choices, to trade or sanction, ally or oppose, intervene or stay out, shape the lives of millions of people who never get a vote in them. U.S. decisions have profoundly affected countries across Latin America and the world, for good and for ill. Great power abroad means great responsibility, and real consequences for the powerless. How should a nation weigh the lives of foreigners who can't vote against the interests of its own citizens?` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. Foreign policy is how a nation acts toward the world, pursuing the goals nearly every country shares: security, prosperity, and influence. American policy has swung like a pendulum between isolationism (staying out) and internationalism (engaging deeply through alliances, trade, and sometimes force), because both instincts capture something real.`,
            `Nations pursue their goals through tools, diplomacy (first and best), economic power (trade, aid, sanctions), alliances, and military force (the gravest, wisely a last resort). And foreign policy forces the hardest choices, self-interest versus the global good, intervention versus sovereignty, with consequences for people who never voted on them.`,
            `Because these choices pit real values against each other, security, human rights, peace, power, thoughtful people disagree about how a powerful nation should act. There's no formula that resolves it. So the debate screen presents five competing philosophies of how a powerful nation should act in the world. Don't crown a winner, form your own view about the world you're inheriting.`,
          ],
          image: `/voyager-assets/social-studies/l06-s5-before.webp`,
          imageCaption: `Threads together. Foreign policy is how a nation acts toward the world, pursuing SECURITY, PROSPERITY, and INFLUENCE. American policy has swung like a PENDULUM between ISOLATIONISM (staying out) and INTERNATIONALISM (engaging deeply), because both capture something real. Nations use TOOLS, diplomacy (first and best), economic power (trade, aid, sanctions), alliances, and military force (gravest, a last resort). Foreign policy forces the hardest choices, self-interest versus global good, intervention versus sovereignty, stability versus democracy, with immense consequences, including across Latin America, for people who never voted on them. The debate screen presents five philosophies of how a powerful nation should act. Don't crown a winner.`,
          vocab: [
            { word: `realism vs. idealism`,
              definition: `Two broad philosophies of foreign policy: realism focuses on national interest and power; idealism emphasizes values, human rights, and moral responsibility in world affairs.`,
              audioPrompt: `Realism versus idealism, {name}, names two broad philosophies of foreign policy. Realism says a nation should act based on its own interests and the hard realities of power, the world is competitive, so look out for yourself. Idealism says foreign policy should also be guided by values, human rights, democracy, helping the suffering, not just self-interest. Most real policy mixes both. As you weigh the upcoming debate, notice which voices lean realist and which lean idealist. Which instinct feels truer to you?` },
            { word: `the costs of intervention`,
              definition: `The recognition that military intervention, even with good intentions, can cause immense death, destruction, and unintended consequences, which is why force is weighed so heavily.`,
              audioPrompt: `The costs of intervention, {name}, is a hard truth that must weigh on any foreign-policy choice: even military action taken with the best intentions, to stop an atrocity, to help an ally, can cause enormous death, destruction, and consequences no one foresaw. History is full of interventions that went badly despite good aims. This is exactly why force should be a last resort, and why "we should do something" is never simple. How should a nation weigh the certain costs of acting against the possible costs of standing by?` },
            { word: `the world you're inheriting`,
              definition: `The recognition that today's foreign-policy choices shape the global future, the wars, alliances, climate response, and cooperation, that your generation will live in and help direct.`,
              audioPrompt: `The world you're inheriting, {name}, is shaped right now by foreign-policy choices being made today, about war and peace, alliances, trade, climate, and global cooperation. Your generation will live in the world these decisions create, and soon enough, help make such decisions yourselves, as voters, citizens, and maybe leaders. Foreign policy isn't distant; it's the shape of your future. As you weigh the debate ahead, ask: what kind of role do you want your country to play in the world?` },
          ],
        },

        {
          id: `l06-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: How Should A Powerful Nation Act?`,
          intro: `{name}, how should a powerful nation act in the world? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view about the world you're inheriting, and the role you'd want your country to play in it.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The realist`,
              era: `A view on foreign policy`,
              stance: `A nation's first duty is to its own people, foreign policy should be guided mainly by national interest and the realities of power.`,
              quote: `"The world is competitive and dangerous. A nation that ignores its own interests for noble dreams won't survive to help anyone."`,
              argument: `The realist view holds that the international world is competitive and often dangerous, with no global government to keep order, so each nation must look out for its own security and prosperity first. Foreign policy should be guided by clear-eyed national interest and the realities of power, not by idealistic dreams that ignore how the world actually works. A nation that sacrifices its own interests for lofty causes may weaken itself and ultimately help no one.`,
              evidence: `The absence of any world government enforcing order; historical cases where idealistic policies backfired; the core goals of security and prosperity; the duty of leaders to their own citizens first.`,
              strengths_and_limits: `Strength: clear-eyed about power, danger, and a government's first duty to protect its own people, and skeptical of good intentions that ignore hard realities. Limit: pure self-interest can ignore real moral responsibilities, justify supporting brutal regimes, and miss that values and reputation are themselves sources of long-term strength.`,
            },
            {
              id: `p2`,
              voice: `The idealist`,
              era: `A view on foreign policy`,
              stance: `A powerful nation has a moral responsibility to the world, to defend human rights, help the suffering, and promote democracy and peace.`,
              quote: `"With great power comes real responsibility. A nation strong enough to help, that looks away, shares the blame."`,
              argument: `The idealist view holds that foreign policy must be guided by values, not just interests. A powerful nation has a moral responsibility to use its strength for good: to defend human rights, oppose tyranny, aid those suffering from poverty or disaster, and promote democracy and peace. Ignoring atrocities or injustice when you have the power to help is itself a moral failure. In the long run, a values-driven foreign policy also builds trust, allies, and a more stable, just world.`,
              evidence: `Humanitarian interventions and aid that saved lives; the moral weight of standing against genocide and tyranny; the long-term value of a nation's reputation and trust; universal human rights principles.`,
              strengths_and_limits: `Strength: insists that power carries moral responsibility and that values, human rights and helping the suffering, genuinely matter and can build long-term strength. Limit: good intentions can lead to costly, failed interventions, ignore real limits and consequences, and slide into imposing one's values on others who didn't ask.`,
            },
            {
              id: `p3`,
              voice: `The non-interventionist`,
              era: `A view on foreign policy`,
              stance: `Military intervention usually does more harm than good, a nation should engage through trade and diplomacy but avoid foreign wars.`,
              quote: `"How many wars meant to help ended in disaster? Engage the world, trade and talk, but stop sending armies into other people's countries."`,
              argument: `This view argues that military intervention, even when well-intentioned, repeatedly causes more harm than good: immense death, destruction, unintended consequences, and resentment, often leaving countries worse off. A nation should absolutely engage with the world through diplomacy, trade, and cooperation, but should be deeply skeptical of using military force in other countries' affairs. Respecting sovereignty and exhausting peaceful tools isn't isolationism, it's hard-learned wisdom about the limits and costs of force.`,
              evidence: `Interventions that produced chaos or backfired despite good intentions; the immense, often unpredictable costs of war; the value of sovereignty; the effectiveness of diplomacy and trade over force.`,
              strengths_and_limits: `Strength: takes seriously the repeated, terrible costs of military intervention and rightly insists force be a true last resort, while still favoring engagement through peaceful means. Limit: refusing to use force can also allow atrocities or aggression to go unchecked, and "stay out militarily" sometimes has its own grave human costs.`,
            },
            {
              id: `p4`,
              voice: `The internationalist institution-builder`,
              era: `A view on foreign policy`,
              stance: `The best path is working through alliances and global institutions, shared rules and cooperation make everyone safer than going it alone.`,
              quote: `"No nation can solve climate, pandemics, or war alone. We're safer building shared rules than tearing them down."`,
              argument: `This view holds that in a deeply connected world, the wisest foreign policy works through alliances (like NATO) and international institutions (like the UN) that create shared rules, cooperation, and collective security. Global problems, climate change, pandemics, terrorism, economic crises, cross every border and can't be solved by any nation alone. Binding nations together in cooperative institutions makes everyone safer and more prosperous than each country going it alone in a chaotic free-for-all.`,
              evidence: `Post-WWII institutions (UN, NATO) and the relative stability they helped create; global problems that require cooperation; the benefits of collective security and shared rules; alliances multiplying strength.`,
              strengths_and_limits: `Strength: rightly recognizes that the biggest modern threats are global and unsolvable alone, and that cooperation and shared rules can make all nations safer and stronger. Limit: international institutions can be slow, weak, or unfair, may constrain a nation's freedom to act, and depend on others keeping their commitments, which they don't always do.`,
            },
            {
              id: `p5`,
              voice: `The honest reckoner`,
              era: `A view on foreign policy`,
              stance: `We must be honest that a nation's foreign policy, including ours, has done both great good and real harm, and learn from both.`,
              quote: `"Loving your country means telling the truth about it, the help it's given the world, and the harm, so we do better."`,
              argument: `This view insists on honesty about the full record. A powerful nation's foreign policy, including the United States', has done genuine good (defeating tyranny, providing aid, building cooperation) and also real harm (backing harsh regimes, destabilizing governments, interventions with terrible consequences, including across Latin America). Maturity means facing both honestly, not myth-making or cynicism, so that we learn from mistakes and wield power more wisely. Clear-eyed self-examination is the foundation of responsible foreign policy.`,
              evidence: `The mixed historical record of U.S. actions abroad, in Latin America and elsewhere; cases of both humanitarian good and harmful intervention; the value of learning honestly from history.`,
              strengths_and_limits: `Strength: models intellectual honesty, refusing both blind patriotism and pure cynicism, and rightly insists that learning from real history makes future policy wiser. Limit: focusing on judging the record can sometimes substitute for the harder task of deciding what to actually do next, where the other views' principles still must be chosen among.`,
            },
          ],
          synthesisPrompt: `After all five: how do YOU think a powerful nation should act in the world? Where do you land between self-interest and global responsibility, between using force and avoiding it, between going it alone and working through institutions? Which voice challenged you most? In 5-6 sentences, there's no single right answer, only a thoughtful one.`,
          reflectionPrompt: `A powerful nation's choices abroad shape the lives of millions, in your own family's heritage, across Latin America, around the world, who never get to vote on them. How does it feel to weigh the responsibility that comes with that kind of power, and what role would you want your country to play?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is foreign policy?`,
              options: [
                `The rules a country sets for its own schools and taxes.`,
                `A country's goals and strategies for dealing with the rest of the world.`,
                `The process of writing a nation's constitution.`,
                `The way a country chooses its Supreme Court justices.`,
              ],
              correctIndex: 1,
              explanation: `Foreign policy is how a country acts toward the rest of the world, its goals and strategies for relations with other nations, trade, alliances, war, and peace. The distractors describe domestic policy, constitution-writing, or judicial selection.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Which three core goals do nearly all countries pursue in foreign policy?`,
              options: [
                `Entertainment, tourism, and fashion.`,
                `Higher taxes, more laws, and bigger schools.`,
                `Security, prosperity, and influence.`,
                `Isolation, secrecy, and silence.`,
              ],
              correctIndex: 2,
              explanation: `Nearly every country pursues security (protection from threats), prosperity (economic strength), and influence (shaping world events), almost every decision traces back to these. The distractors list unrelated or domestic-only goals.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the difference between isolationism and internationalism?`,
              options: [
                `Isolationism means staying out of world affairs; internationalism means engaging deeply with them.`,
                `Isolationism is about taxes; internationalism is about schools.`,
                `They are honestly just two different names for the exact same single foreign-policy approach.`,
                `Isolationism means starting wars; internationalism means avoiding all contact.`,
              ],
              correctIndex: 0,
              explanation: `Isolationism favors staying out of other countries' affairs and avoiding entanglements; internationalism favors engaging deeply through alliances, trade, and sometimes intervention. The distractors confuse or reverse the terms.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why is American foreign policy described as a "pendulum"?`,
              options: [
                `Because foreign policy decisions are made using an actual pendulum.`,
                `Because it has swung over history between isolationism and internationalism.`,
                `Because the president changes the policy every single day.`,
                `Because foreign policy never changes at all over time.`,
              ],
              correctIndex: 1,
              explanation: `American foreign policy is a "pendulum" because it has swung across history between staying out (isolationism) and engaging deeply (internationalism), as each instinct captures something real. The distractors are literal misreadings or false claims.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are sanctions?`,
              options: [
                `Formal military alliances between two or more countries.`,
                `Gifts of money given freely to other nations with no conditions.`,
                `Formal signed treaties that officially end an ongoing war between two nations.`,
                `Economic penalties used to pressure a country to change its behavior without military force.`,
              ],
              correctIndex: 3,
              explanation: `Sanctions are economic penalties (like cutting off trade) used to pressure a nation into changing its behavior without firing a shot, a tool between diplomacy and war. The distractors describe alliances, aid, or peace treaties.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is military force generally considered a "last resort"?`,
              options: [
                `Because it is the weakest and least effective tool available.`,
                `Because its costs are so terrible and its consequences so often unpredictable.`,
                `Because it is illegal for any nation to ever use force.`,
                `Because diplomacy never works and force always does.`,
              ],
              correctIndex: 1,
              explanation: `Military force is the gravest tool because it can cause immense death, destruction, and unintended consequences, so wisdom calls for trying diplomacy and economic tools first. The distractors call force weak, illegal, or always effective.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "sovereignty," and why does it create hard dilemmas?`,
              options: [
                `A nation's right to govern itself, which can clash with the urge to intervene to stop wrongdoing.`,
                `A single nation's strict duty to always obey all of the other countries' commands.`,
                `The requirement that every country use the same currency.`,
                `The power of the United Nations to rule all countries directly.`,
              ],
              correctIndex: 0,
              explanation: `Sovereignty is a nation's right to govern itself without outside interference; it creates dilemmas because respecting it can mean standing by during atrocities, while overriding it raises its own grave concerns. The distractors invent false meanings.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the central value tension at the heart of foreign policy?`,
              options: [
                `Whether to hold elections in spring or in fall.`,
                `Whether a country should choose to have just one ambassador or instead have two.`,
                `Whether a nation should act mainly in its own self-interest or also for the good of the world.`,
                `Whether to use email or letters for diplomacy.`,
              ],
              correctIndex: 2,
              explanation: `The central tension is between acting for the nation's own security and prosperity (self-interest) and acting for the wider good of the world (human rights, helping others), even at a cost. The distractors are trivial.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A powerful nation's foreign policy is always either purely good or purely bad, so the honest thing is to decide whether a country is simply a force for good or a force for evil in the world.`,
              correctAnswer: false,
              explanation: `False, and understanding why is essential to thinking maturely about foreign policy and about one's own country. The reality is that a powerful nation's foreign policy is almost never purely good or purely bad; it is typically a complex mixture of both, shaped by competing values, hard tradeoffs, and consequences that fall on millions of people. Foreign policy is precisely the arena where a nation's values and interests collide most sharply, forcing genuinely hard choices with no clean answers: whether to act in self-interest or for the global good, whether to intervene to stop an atrocity or respect another nation's sovereignty, whether to support a stable but repressive ally or promote democracy and risk chaos. Thoughtful, well-meaning people answer these questions differently, and even well-intentioned choices can have terrible unintended consequences, while self-interested choices sometimes do real good. The United States' foreign policy illustrates this complexity vividly. It has done genuine good in the world, helping defeat tyranny, providing humanitarian aid that saved lives, and building cooperative institutions that increased stability. But it has also done real harm, at times backing harsh regimes, destabilizing governments, or undertaking interventions with devastating consequences, including across Latin America, where the effects are still felt today. The mature, honest approach is not to declare the country simply "good" or "evil," but to face the full, mixed record clearly, refusing both blind patriotism (which ignores real harms) and pure cynicism (which ignores real goods), so that we can learn from both successes and mistakes and wield power more wisely. This is exactly why foreign policy involves immense responsibility: it carries real tradeoffs between competing values and produces enormous consequences for people who never got a vote in the decisions. Reducing all of that to a single verdict of "good country" or "bad country" erases the genuine moral complexity and the hard, value-laden choices that foreign policy actually involves. So the statement is false: a powerful nation's foreign policy is a complex mix of good and harm involving difficult tradeoffs, and honesty means facing that complexity, not collapsing it into a simple verdict.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A government is brutally attacking its own people. Another powerful nation considers intervening militarily to stop it. Using the lesson, what's the best analysis of this situation?`,
              options: [
                `The choice is obvious and easy: the nation should always intervene militarily in every such case.`,
                `The choice is obvious and easy: the nation should never get involved in anything beyond its borders.`,
                `This is a genuine dilemma with no clean answer: intervening risks immense costs and unintended consequences and overrides sovereignty, while staying out may allow atrocities, so it pits real values (human rights, sovereignty, the costs of force) against each other, exactly why thoughtful people disagree.`,
                `The nation should decide based only on which option is cheapest in the short term.`,
              ],
              correctIndex: 2,
              explanation: `This is a real dilemma with no clean answer: intervention risks immense, unpredictable costs and overrides sovereignty, while inaction may permit atrocities. It pits human rights, sovereignty, and the costs of force against each other, which is exactly why thoughtful people disagree. The distractors pretend the choice is easy or purely about cost.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-power`, category: `The weight of power`, prompt: `A powerful nation's choices abroad shape the lives of millions, in your family's heritage, across Latin America, around the world, who never vote on them. How does it feel to weigh the responsibility that comes with that power, and what role would you want your country to play?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you may have seen foreign policy as simple, or as just "us versus them." What surprised you most, the pendulum of history, the weight of the hard choices, or the honest mixed record? What changed in your thinking?` },
            { id: `reflect-force`, category: `When force is justified`, prompt: `Military force can stop atrocities but also cause immense harm and unintended consequences. After this lesson, when, if ever, do you believe a nation is truly justified in going to war, and how would you know it had crossed that line?` },
            { id: `reflect-heritage`, category: `Teaching the wider world`, prompt: `Caro, you're building social studies for conscious families, with a heritage rooted in Latin America. How would you help a child understand that foreign policy has shaped their own heritage and homeland, for good and ill, so the wider world feels personal and connected rather than distant?` },
            { id: `reflect-self-world`, category: `Self-interest and the world`, prompt: `Should a nation put its own people first, or also carry responsibility for the wider world? Think of a real situation that tests this. Where do you land, and what does your answer reveal about the kind of world you want to live in?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `It's easy to see your own country as simply good, or simply bad. What's the strongest case that a powerful nation's foreign policy must be judged honestly for both its good and its harm, and why is that harder, and more valuable, than picking one side?` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Map the World's Hard Choices`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a thoughtful exploration of how nations act in the world and the hard choices behind every decision, connecting the wider world to your own family's story. Start with the three goals: discuss how nearly every country pursues security, prosperity, and influence, and pick a few real world events from the news to identify which of these goals each country is pursuing. Trace the pendulum: talk about the swing between isolationism (stay out) and internationalism (engage deeply) across history, and debate which way your family thinks the country should lean today, and why. Explore the toolbox: go through the tools nations use, diplomacy, trade, foreign aid, sanctions, alliances, and military force, and for a real international problem, brainstorm which tools might help and in what order, noticing why force is wisely a last resort. Wrestle with a real dilemma: take a genuine hard choice (whether to intervene to stop an atrocity, whether to trade with a government that abuses rights, whether to prioritize stability or democracy) and have family members argue different sides, feeling how real values collide with no clean answer. Connect it to your heritage: explore how U.S. foreign policy has shaped Latin America and your family's homeland, the good (aid, cooperation, support for democracy) and the harm (backing harsh regimes, interventions with painful consequences), using honest, age-appropriate sources, so the wider world feels personal. Stage the five-voice debate: assign family members to argue as the realist (national interest first), the idealist (moral responsibility to the world), the non-interventionist (force does more harm than good), the institution-builder (work through alliances and the UN), and the honest reckoner (face the full record), applied to a current global issue. Find it in the news: pick a real foreign-policy story and analyze it using the lesson, what goals, what tools, what values are in tension? Finally, look forward: discuss the global challenges your family thinks will matter most in the coming decades (climate, conflict, cooperation) and what role you'd want your country to play. The goal is to move from seeing the world as a distant "us versus them" to understanding foreign policy as a realm of immense power, real responsibility, and genuinely hard choices, one that shapes the world your family lives in and the future you're inheriting.`,
          },
          projectOption: {
            title: `The Foreign Policy Analyst Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate a real foreign-policy issue or decision in depth and reason through it as an analyst, becoming someone who can think clearly about how nations act in the world. Week 1, choose and research an issue: pick a real foreign-policy topic, a specific historical decision (a war, an intervention, a major treaty, an alliance), an ongoing global challenge (climate cooperation, a current conflict, trade and globalization), or a chapter of U.S. relations with a particular region, such as Latin America. Research it carefully: What were the goals (security, prosperity, influence)? What tools were used or proposed (diplomacy, trade, aid, sanctions, alliances, force)? What values were in tension (self-interest versus global good, intervention versus sovereignty, stability versus democracy)? Who was affected, including people who had no vote in the decision? And what were the consequences, intended and unintended, good and harmful? Strive for honesty about the full record. Week 2, analyze and judge: step back and evaluate. Was the decision wise? Which foreign-policy philosophy (realist, idealist, non-interventionist, institutionalist) does it reflect, and which do you find most convincing for this case? What would you have done differently, and what would that choice have cost as well as gained? If your topic touches your own heritage or a region you care about, reflect on how it connects to real people's lives. Then look forward: what does this case teach about how a powerful nation should act in the future? Produce your final piece, an analytical report, a documentary-style video, a "decision briefing" as if advising a leader, a multi-perspective debate presentation, or an essay, that lays out the issue, the goals and tools and values at stake, the honest record of consequences, and your own reasoned judgment. The aim is to experience foreign policy the way a serious analyst does, not as simple good guys and bad guys, but as a realm of immense power, competing values, and hard tradeoffs with real human consequences, and to develop the judgment to think wisely about the global choices that will shape the world you're inheriting and may one day help decide.`,
            offerToParent: `Parent: opt your child into the Foreign Policy Analyst Project. Researching a real foreign-policy issue, a war, intervention, treaty, alliance, or chapter of U.S. relations with a region like Latin America, and analyzing its goals, tools (diplomacy, sanctions, force), competing values, and honest record of consequences, then forming a reasoned judgment, directly develops C3 Framework concepts spanning civics, history, and global studies: the purposes and tools of foreign policy, the tension between national interest and global responsibility, sovereignty and intervention, and the role of nations in an interconnected world. Weighing real tradeoffs and facing a complex historical record honestly builds critical thinking, global awareness, and moral reasoning at a high level. It's rigorous, standards-aligned work that helps your child understand the wider world they're inheriting, including its connection to their own heritage.`,
          },
          identityQuestion: `If you become someone who understands how nations act in the world, who can weigh self-interest against global responsibility, see when force is wise or reckless, and face your country's record honestly, both its good and its harm, what kind of citizen of the world does that make you, one who can think clearly and responsibly about the hard global choices that shape billions of lives, that someone who sees only "us versus them" or "my country can do no wrong" never can?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can weigh a nation's self-interest against its responsibility to the world.`,
            `A person who sees foreign policy as hard choices, not simple good versus evil.`,
            `Someone who can face my country's record in the world honestly, the good and the harm.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just lifted your eyes beyond one country's borders and learned to think about how nations act in the world, one of the most consequential and contested arenas there is. You learned what foreign policy is, a nation's goals and strategies toward the rest of the world, and the three core goals nearly every country pursues: security, prosperity, and influence. You traced the great pendulum of American foreign policy across history, swinging between isolationism, staying out, and internationalism, engaging deeply, and saw why both instincts capture something real in a connected world. You examined the tools of statecraft, diplomacy first and best, then economic power through trade, aid, and sanctions, then alliances, and finally military force, the gravest tool, wisely a last resort. You confronted the hardest choices, between self-interest and the global good, intervention and sovereignty, stability and democracy, and faced honestly how U.S. foreign policy has shaped the world, including Latin America and perhaps your own heritage, for both good and ill. And you weighed five real philosophies of how a powerful nation should act, the realist, the idealist, the non-interventionist, the institution-builder, and the honest reckoner, without being handed a single answer, because these are among the hardest questions humans face. With this lesson, we close our deep study of government and politics, how nations are founded, structured, and how they act at home and abroad. Next, we turn to a different but deeply connected force that shapes every life: the economy. We begin with macroeconomics, how entire national economies work. Onward, {name}. — Atlas`,
          badge: `world-strategist`,
          badgeName: `World Strategist`,
          xpEarned: 75,
          competencies: [
            `Understands what foreign policy is and how it differs from domestic policy`,
            `Knows the three core goals of foreign policy: security, prosperity, and influence`,
            `Can distinguish isolationism from internationalism and explain the historical pendulum`,
            `Knows the tools of statecraft: diplomacy, trade, aid, sanctions, alliances, and force`,
            `Understands why military force is wisely treated as a last resort`,
            `Grasps the hard tensions: self-interest vs. global good, intervention vs. sovereignty`,
            `Can judge a nation's foreign-policy record honestly, weighing both good and harm`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Macroeconomics — How National Economies Work`,
            hook: `From the world stage to the forces that shape every nation's wealth, jobs, and prices. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L06 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
