// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L01 — Political Philosophy: Foundations of Government
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics) — D2.Civ
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l01-v1";

const SOCIAL_STUDIES_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-01`,
      title: `Political Philosophy: Foundations of Government`,
      duration: 35,
      xpReward: 75,
      badge: `foundations-thinker`,
      badgeName: `Foundations Thinker`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a question worth sitting with: why does anyone have the right to tell you what to do? Political philosophy — the study of government's legitimacy, rights, and power — is where serious answers live. Hobbes, Locke, Rousseau, and Rawls all took a shot at it. Their answers still shape every constitution, every rights debate, every argument about what governments owe citizens and what citizens owe governments. That argument is live right now. This lesson gives you the tools to enter it.`,
          headline: `Political Philosophy: Foundations of Government`,
          subtitle: `Where government comes from, why anyone has the right to rule, and the ideas that built the modern world. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Government At All?`,
          paragraphs: [
            `Start with a thought experiment philosophers call the "state of nature": imagine no government at all. No laws, no police, no courts, no taxes, no leaders. Just people, free to do whatever they want. Sounds like freedom. But think harder. With no shared rules and no one to enforce them, what stops the strong from taking whatever they want from the weak?`,
            `This is the central problem every government tries to solve. Humans living together need ways to settle disputes, protect people, and cooperate on what no one can do alone, roads, defense, clean water. Without agreed authority, life can collapse into what Thomas Hobbes called a "war of all against all," where no one is safe and nothing lasts.`,
            `So government exists, at its core, to solve the problems of people living together: to keep order, protect rights, and provide what individuals can't alone. But here's the catch that drives all of political philosophy: to do this, government must have power over people, and power can be abused. The challenge is creating enough authority to protect us, without creating a monster that crushes us.`,
          ],
          image: `/voyager-assets/social-studies/l01-s1-state-of-nature.webp`,
          imageCaption: `Start with a thought experiment philosophers call the STATE OF NATURE: imagine no government at all. No laws, police, courts, or leaders, just people free to do anything. Sounds like freedom. But with no shared rules and no one to enforce them, what stops the strong from taking whatever they want from the weak? This is the problem every government tries to solve. Humans living together need ways to settle disputes, protect people, and cooperate on what no one can do alone. Without authority, life can collapse into what Thomas Hobbes called a "war of all against all." So government exists to keep order, protect rights, and settle conflicts. But the catch: government must have POWER over people, and power can be abused.`,
          vocab: [
            { word: `state of nature`,
              definition: `A thought experiment imagining human life with no government, laws, or authority at all. Philosophers use it to ask why government exists and what it's for.`,
              audioPrompt: `The state of nature, {name}, is a thought experiment: picture human life with no government at all, no laws, no police, no courts. Philosophers use it to strip everything away and ask the basic question, why do we have government in the first place, and what is it actually for? It's like imagining a game with no rules, then asking what rules you'd want, and why. As you go through this lesson, keep asking yourself: what would life really be like with no shared authority at all?` },
            { word: `government`,
              definition: `The system of authority and institutions a society uses to make and enforce rules, settle disputes, protect people, and provide shared goods.`,
              audioPrompt: `Government, {name}, is the system a society uses to make and enforce its rules, settle disputes, protect people, and provide things no one can do alone, like roads or defense. Every government, from a tiny town council to a huge nation, exists to solve the problems of people living together. Think about all the government around you right now, schools, traffic laws, courts. What problems is each one actually trying to solve?` },
            { word: `authority`,
              definition: `The recognized right to make decisions, give commands, and enforce obedience. The deep question of political philosophy is who has it, and why.`,
              audioPrompt: `Authority, {name}, is the recognized right to make decisions and give commands that others are expected to obey, not just the raw power to force them. There's a real difference: a robber has power over you, but not authority. A judge has authority. The deepest question in this whole lesson is what gives anyone real authority, the right, not just the might, to rule. Who do you obey, and why do you think they have the right to be obeyed?` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Social Contract`,
          paragraphs: [
            `For most of history, rulers claimed authority from above: kings said God chose them (the "divine right of kings"), so disobeying the king meant disobeying God. But in the 1600s and 1700s, thinkers proposed a radical alternative: the social contract. The idea is that legitimate government comes not from God or bloodline, but from an agreement among the people themselves.`,
            `The reasoning goes like this. Free people, to escape the dangers of the state of nature, agree to give up some total freedom (the freedom to do anything, including harm others) in exchange for the security, order, and rights organized society provides. Government is that bargain's result. Its authority comes from the consent of the governed.`,
            `This flips the old order upside down. If authority comes from the people, then the people are the true source of power, and government exists to serve them, not the reverse. A ruler who breaks the bargain, who tyrannizes instead of protecting, forfeits legitimate authority. This single idea, consent of the governed, became dynamite under every throne in the modern world.`,
          ],
          image: `/voyager-assets/social-studies/l01-s2-social-contract.webp`,
          imageCaption: `For most of history, rulers claimed authority from ABOVE: kings said God chose them, the DIVINE RIGHT OF KINGS, so disobeying the king meant disobeying God. But in the 1600s and 1700s, thinkers proposed a radical alternative: the SOCIAL CONTRACT. Legitimate government comes not from God or bloodline, but from an agreement among the people themselves. Free people, to escape the dangers of the state of nature, agree to give up some total freedom in exchange for security, order, and rights. Government's authority comes from the CONSENT OF THE GOVERNED. This flips the old order: the people are the true source of power, and government exists to serve them. A ruler who tyrannizes forfeits legitimate authority.`,
          vocab: [
            { word: `social contract`,
              definition: `The idea that legitimate government arises from an agreement among people to give up some freedom in exchange for security and rights, making the people the source of authority.`,
              audioPrompt: `The social contract, {name}, is one of the most powerful ideas ever invented: legitimate government comes from an agreement among the people, not from a king or a god. People trade a little of their total freedom for the safety and rights that organized society gives them. It's a bit like the unspoken agreement on a sports team, you accept the rules so the game can work for everyone. Where in your own life do you accept rules in exchange for something better?` },
            { word: `consent`,
              definition: `The principle that a government's authority is legitimate only because the people agree to be governed. It makes the people, not the ruler, the true source of power.`,
              audioPrompt: `Consent of the governed, {name}, is the heart of the social contract: a government is only legitimate because the people agree to be governed by it. This idea is dynamite. It means power flows up from the people, not down from a king, and that a ruler who betrays the people loses the right to rule. You'll find this exact phrase echoing through revolutions and constitutions. Why do you think rulers for thousands of years preferred people to believe authority came from God instead?` },
            { word: `right kings`,
              definition: `The old doctrine that monarchs received their authority directly from God, so their rule could not be questioned. The social contract was a direct rejection of it.`,
              audioPrompt: `The divine right of kings, {name}, was the old belief that a monarch's authority came straight from God, so to disobey the king was to disobey God himself. It made rulers nearly impossible to challenge, which is exactly why kings loved it. The social contract was the revolutionary reply: no, authority comes from the people, not the heavens. Imagine how dangerous it was, in an age of all-powerful kings, to even suggest that idea out loud.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Thinkers Who Built It`,
          paragraphs: [
            `Three Enlightenment thinkers shaped the social contract, and they disagreed sharply. Thomas Hobbes (writing in 1651, after a brutal civil war) believed the state of nature was so violent that people should hand near-total power to a strong ruler in exchange for safety. For Hobbes, even a harsh government beats the chaos of no government. Order first, above all.`,
            `John Locke (1689) was more hopeful, and more revolutionary. He argued people have natural rights, to life, liberty, and property, that exist before any government. Government's only job is to protect them, and it rules only by consent. If it violates those rights, Locke said, the people may alter or abolish it. Jefferson borrowed Locke almost word for word in the Declaration of Independence.`,
            `Jean-Jacques Rousseau (1762) pushed further, arguing that true legitimacy comes from the "general will", the collective good of the whole people, and that real freedom means governing ourselves through laws we choose. Together, these thinkers supplied the ideas that would topple monarchies and frame the constitutions you live under today.`,
          ],
          image: `/voyager-assets/social-studies/l01-s3-thinkers.webp`,
          imageCaption: `Three Enlightenment thinkers shaped the social contract, and they disagreed sharply. THOMAS HOBBES (1651, after a brutal civil war) believed the state of nature was so violent that people should hand near-total power to a strong ruler for safety, even a harsh government beats chaos. Order first. JOHN LOCKE (1689) argued people have NATURAL RIGHTS, to life, liberty, and property, that exist before any government, whose only job is to protect them by consent; if it violates them, people may alter or abolish it. Jefferson borrowed Locke almost word-for-word in the Declaration of Independence. JEAN-JACQUES ROUSSEAU (1762) argued legitimacy comes from the GENERAL WILL, the collective good, and that real freedom is governing ourselves through laws we choose.`,
          vocab: [
            { word: `natural rights`,
              definition: `Rights, such as life, liberty, and property, that John Locke argued people have simply by being human, before and independent of any government. Government exists to protect them.`,
              audioPrompt: `Natural rights, {name}, are John Locke's powerful claim that you have certain rights, to life, liberty, and property, just because you're human, before any government exists and whether or not a king agrees. Government doesn't grant these rights; its whole job is to protect them. You can hear this idea directly in the Declaration of Independence's "life, liberty, and the pursuit of happiness." Where do you think your own rights come from, and does it matter whether they come from government or exist before it?` },
            { word: `Hobbes`,
              definition: `Two social-contract thinkers who disagreed: Hobbes wanted a strong ruler to prevent chaos and prioritized order; Locke prioritized natural rights and a government that rules only by consent.`,
              audioPrompt: `Hobbes versus Locke, {name}, is one of the great debates in political thought. Both believed in a social contract, but Hobbes, scarred by civil war, thought people should give a strong ruler almost total power just to avoid chaos. Locke, more hopeful, said government must protect your natural rights and rule only by your consent, or you can replace it. Same starting idea, very different conclusions. After reading both, whose instinct do you trust more, the one who fears chaos or the one who fears tyranny?` },
            { word: `general will`,
              definition: `Rousseau's idea that the truest authority is the collective good of the people as a whole, and that real freedom means living under laws a people gives itself.`,
              audioPrompt: `The general will, {name}, is Rousseau's idea that real political authority comes from the collective good of the whole people, not just adding up what each person wants for themselves. For Rousseau, true freedom isn't doing whatever you please; it's helping make the laws you then live under, governing yourself together with others. It's a beautiful idea, but also a tricky one, who gets to say what the "general will" really is? Keep that question in mind; it matters a great deal.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Legitimacy And Its Limits`,
          paragraphs: [
            `These ideas point to a crucial concept: legitimacy. A government has power if it can make you obey, but legitimacy only if people believe it has the right to rule. Power without legitimacy is just force, and force alone is unstable. Legitimate governments are obeyed willingly, because people accept their authority as rightful.`,
            `Where does legitimacy come from? The social contract tradition says: from consent, rights protection, and the rule of law (everyone, including rulers, is bound by law). When a government protects rights, follows fair procedures, and answers to the people, it earns legitimacy. When it rules by raw force, it may keep power, but loses the right to it.`,
            `This is why the social contract is so explosive. Government authority is conditional, earned by serving the people and forfeitable by betraying them. It's the logic behind the American Revolution and the independence movements that swept Latin America in the early 1800s, when figures like Simón Bolívar argued that colonial rule had no legitimate claim over the people it governed.`,
          ],
          image: `/voyager-assets/social-studies/l01-s4-legitimacy.webp`,
          imageCaption: `These ideas point to a crucial concept: LEGITIMACY. A government has POWER if it can make you obey, but LEGITIMACY only if people believe it has the RIGHT to rule. Power without legitimacy is just force, and force alone is unstable, you can't put a police officer behind every person forever. Legitimate governments are obeyed willingly. Where does legitimacy come from? The social contract says: from consent, rights protection, and the RULE OF LAW (everyone, including rulers, is bound by law). This makes authority CONDITIONAL, earned by serving the people, forfeitable by betraying them. It's the logic behind the American Revolution, and the Latin American independence movements where Simón Bolívar invoked these ideas against colonial rule.`,
          vocab: [
            { word: `legitimacy`,
              definition: `The widely accepted belief that a government has the rightful authority to rule, not just the power to compel. Power without legitimacy is mere force.`,
              audioPrompt: `Legitimacy, {name}, is the difference between a government people obey because they accept its right to rule, and one they obey only out of fear. A government can have power without legitimacy, but it's shaky, ruling by force alone never lasts. Real legitimacy is earned: by protecting rights, following fair laws, and answering to the people. Think about authority in your own life, a coach, a parent, a teacher. When do you obey because you truly accept their right to lead, versus just because you have to?` },
            { word: `rule of law`,
              definition: `The principle that everyone, including rulers and government itself, is bound by and accountable to the law, rather than anyone being above it.`,
              audioPrompt: `The rule of law, {name}, means that no one is above the law, not the president, not the wealthy, not the government itself. Everyone is bound by the same rules, applied fairly. It's the opposite of "rule by whoever's in charge," where the powerful do as they please. The rule of law is a quiet but enormous achievement, and one worth protecting, because when it breaks down, power goes back to the strongest. Why do you think it matters so much that even leaders must obey the law?` },
            { word: `right of revolution`,
              definition: `Locke's idea that if a government betrays its purpose and violates the people's rights, the people may legitimately alter or abolish it. It fueled the American and Latin American revolutions.`,
              audioPrompt: `The right of revolution, {name}, is Locke's bold conclusion: if a government betrays the people and tramples their rights, the people have the right to change or overthrow it. This was revolutionary, literally. You can hear it in the Declaration of Independence, and in Simón Bolívar's arguments for Latin American independence, that colonial rule had lost any legitimate claim. It's a powerful idea, and a dangerous one. When, if ever, do you think people are truly justified in overthrowing their government?` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. Government exists to solve the problems of people living together, but it requires power, and power can be abused. The deep question isn't who has power, but who has the right to it, the question of legitimacy. For most of history the answer was force or "divine right"; the social contract proposed a revolutionary alternative.`,
            `That alternative: legitimate government rests on the consent of the governed, free people trading some freedom for security and rights. Hobbes prized order; Locke prized natural rights and a right of revolution; Rousseau prized the general will. Legitimacy is earned by protecting rights and the rule of law, and forfeited by betraying them.`,
            `But notice: these thinkers fundamentally disagreed, and people still do. How much power should government have? How much freedom should we trade for security? These questions have no single correct answer, only thoughtful ones. So the debate screen presents five competing visions of government. Don't crown a winner. Understand the tensions, and begin forming your own view. Onward.`,
          ],
          image: `/voyager-assets/social-studies/l01-s5-before.webp`,
          imageCaption: `Threads together. Government exists to solve the problems of people living together, order, rights, conflict, but it requires POWER, which can be abused. The deep question isn't who has power, but who has the RIGHT to it: authority and LEGITIMACY. For most of history the answer was force or "divine right"; the SOCIAL CONTRACT proposed a revolutionary alternative, legitimate government rests on the CONSENT OF THE GOVERNED. Hobbes prized order; Locke prized natural rights and a right of revolution; Rousseau prized the general will. Legitimacy is earned by protecting rights and the rule of law. But these thinkers disagreed, and people still do. The debate screen presents five competing visions. Don't crown a winner, understand the tensions.`,
          vocab: [
            { word: `the central tension`,
              definition: `The core problem of political philosophy: creating a government powerful enough to protect us, but limited enough that it cannot crush us. Every system answers it differently.`,
              audioPrompt: `The central tension, {name}, runs through all of political philosophy: we need a government strong enough to protect us and keep order, but not so strong that it tramples the very people it's meant to serve. Too little power and we're back in the chaos of the state of nature; too much and we get tyranny. Every government in history is really an attempt to balance these two dangers. As you weigh the upcoming debate, ask yourself: which danger worries you more, too little government, or too much?` },
            { word: `its puzzles`,
              definition: `The questions raised by "consent of the governed": Did you ever actually agree? Can you opt out? What counts as real consent in a country you were simply born into?`,
              audioPrompt: `Consent of the governed sounds clean, {name}, but it raises real puzzles. You never signed an actual contract; you were just born into a country with rules already running. So in what sense did you consent? Philosophers argue about this: maybe consent is shown by staying, by voting, by accepting government's benefits. Or maybe "consent" is partly a useful fiction. There's no settled answer. What would it take, in your view, for a government to truly have your consent?` },
            { word: `political philosophy`,
              definition: `The branch of thought that asks the deepest questions about government: where authority comes from, what makes it legitimate, how power should be arranged, and what we owe each other.`,
              audioPrompt: `Political philosophy, {name}, is the discipline that asks the foundational questions beneath all politics: Why have government at all? Who has the right to rule? What makes authority legitimate? How much freedom should we trade for security? These aren't questions with single right answers, they're questions thoughtful people have debated for centuries and still do. Learning to reason about them is part of becoming a citizen who can think for yourself, rather than just absorbing whatever you're told.` },
          ],
        },

        {
          id: `l01-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: What Should Government Be?`,
          intro: `{name}, what should government be, and where does its authority really come from? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view, because you'll spend your life living under, and helping shape, a government.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The order-keeper (Hobbes's heir)`,
              era: `A view on government`,
              stance: `Without strong authority, life collapses into chaos, the first job of government is order and security, even at the cost of some freedom.`,
              quote: `"Take away the state, and you don't get freedom, you get the war of all against all. Order comes first."`,
              argument: `Thomas Hobbes watched a civil war tear his country apart and concluded that the deepest human need is security. Without a strong authority to enforce rules, people fall into a brutal state of nature where life is "nasty, brutish, and short." So people should grant government substantial power in exchange for safety and order, because even a heavy-handed government is far better than the chaos and violence of no government at all.`,
              evidence: `Hobbes's Leviathan (1651), written amid the English Civil War; the state-of-nature problem (the strong prey on the weak without enforced rules); the historical reality that collapsed states often descend into violence and warlordism.`,
              strengths_and_limits: `Strength: takes seriously that security is the foundation everything else rests on, no rights matter if you're not safe, and that order is a real achievement, not a given. Limit: prioritizing order can justify too much government power and too little freedom, sliding toward the very tyranny the other voices fear.`,
            },
            {
              id: `p2`,
              voice: `The rights-defender (Locke's heir)`,
              era: `A view on government`,
              stance: `Government's only legitimate job is to protect the natural rights people already have, and it rules only by consent.`,
              quote: `"You have rights before any government exists. Government's whole job is to protect them, and nothing more."`,
              argument: `John Locke argued that people possess natural rights, to life, liberty, and property, simply by being human, before any government. Government is a tool created by consent to protect those rights, and its authority is strictly limited to that purpose. A government that violates the rights it was created to protect has broken the contract, and the people have the right to alter or abolish it. Liberty, not order, is the point.`,
              evidence: `Locke's Two Treatises of Government (1689); the Declaration of Independence, which borrows Locke almost verbatim; the Latin American independence movements (Bolívar) invoking rights against illegitimate colonial rule.`,
              strengths_and_limits: `Strength: centers individual liberty and dignity, and gives a clear principle for resisting tyranny, government serves the people, not the reverse. Limit: a government limited only to protecting rights may do too little about shared problems like poverty, inequality, or public goods that markets won't provide.`,
            },
            {
              id: `p3`,
              voice: `The collective self-ruler (Rousseau's heir)`,
              era: `A view on government`,
              stance: `True freedom is governing ourselves together, legitimacy comes from the general will, the common good of the people as a whole.`,
              quote: `"Real freedom isn't doing whatever you want alone, it's helping write the laws we all then live under together."`,
              argument: `Jean-Jacques Rousseau argued that legitimate authority comes from the "general will", the collective good of the whole community, not just the sum of individual wants. True freedom isn't being left alone; it's participating as an equal in making the laws that govern everyone, so that in obeying the law you're really obeying yourself. Government should express the people's shared will and serve the common good, not just protect private interests.`,
              evidence: `Rousseau's The Social Contract (1762); the ideal of direct democratic participation; the emphasis in many constitutions on "the people" as a collective sovereign ("We the People").`,
              strengths_and_limits: `Strength: captures something real, that freedom and community aren't opposites, and that self-government is more than just being left alone. Limit: "the general will" is dangerously vague, who decides what it is? In the wrong hands it can be used to crush dissenters in the name of the "true" will of the people.`,
            },
            {
              id: `p4`,
              voice: `The power-divider (Montesquieu's heir)`,
              era: `A view on government`,
              stance: `The real danger is concentrated power, the key isn't who rules, but splitting power so no one can abuse it.`,
              quote: `"Don't ask who should hold power. Ask how to divide it, so that no one can ever hold too much."`,
              argument: `The Baron de Montesquieu argued that the gravest threat to liberty is power concentrated in any single set of hands, however well-intentioned. The solution isn't finding the perfect ruler, but designing institutions that divide power, separating government into branches (like legislative, executive, and judicial) that check and balance one another. Liberty is protected not by trusting rulers, but by structuring government so no one can accumulate enough power to become a tyrant.`,
              evidence: `Montesquieu's The Spirit of the Laws (1748); the separation of powers built directly into the U.S. Constitution and many others; the historical pattern of concentrated power leading to abuse.`,
              strengths_and_limits: `Strength: realistic about human nature, it assumes anyone can abuse power and builds protection into the structure itself rather than hoping for good rulers. Limit: dividing power can also produce gridlock and paralysis, making government slow or unable to act decisively when speed really matters.`,
            },
            {
              id: `p5`,
              voice: `The skeptic of consent`,
              era: `A view on government`,
              stance: `"Consent of the governed" is shakier than it sounds, we should ask honestly who really agreed, and who was left out.`,
              quote: `"You never signed anything. So whose consent, exactly, makes a government legitimate, and who got no say at all?"`,
              argument: `This view presses a hard question at the whole social-contract tradition: you never actually consented to your government, you were born into it. So in what real sense did "the people" agree? And historically, the "people" whose consent supposedly grounded these governments often excluded most people, the enslaved, women, the poor, the colonized. Real legitimacy, this view argues, requires taking seriously who actually has a voice, and who has been silenced.`,
              evidence: `The puzzle of "tacit consent" debated by philosophers; the historical fact that early "consent-based" governments excluded most of the population from voting or rights; ongoing struggles to extend genuine political voice to all.`,
              strengths_and_limits: `Strength: exposes the gap between the ideal of consent and the reality, and insists that legitimacy must include everyone, not just the powerful few who originally "agreed." Limit: pure skepticism can corrode any government's authority; at some point we need workable institutions, even imperfect ones, rather than endless objection.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land on what government should be? Which matters most to you, order, rights, collective self-rule, divided power, or honest consent, and why? Which voice challenged your thinking most? In 5-6 sentences, there's no single right answer, only a thoughtful one.`,
          reflectionPrompt: `You were born into a government you never signed up for, yet it shapes nearly everything about your life. How does it feel to realize that the rules you live under rest on ideas, arguments people made centuries ago, that you can now understand, question, and one day help reshape?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the "state of nature" thought experiment used to explore?`,
              options: [
                `What the natural environment looked like before humans existed.`,
                `What human life would be like with no government, laws, or authority at all.`,
                `How animals organize themselves into groups in the wild.`,
                `Which natural resources a government should control.`,
              ],
              correctIndex: 1,
              explanation: `The state of nature imagines human life with no government or laws, to ask why government exists and what it's for. The distractors confuse it with prehistory, animal behavior, or resource policy.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the core idea of the social contract?`,
              options: [
                `That kings simply receive all of their authority directly from God above.`,
                `That governments should sign formal treaties with each other.`,
                `That legitimate government rests on an agreement among the people, by their consent.`,
                `That citizens must sign a paper contract when they are born.`,
              ],
              correctIndex: 2,
              explanation: `The social contract holds that legitimate government arises from an agreement among the people, resting on the consent of the governed, not divine right or literal paperwork. The distractors describe divine right, treaties, or a literal contract.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `How did Hobbes and Locke differ, even though both believed in a social contract?`,
              options: [
                `Hobbes favored a strong ruler for order; Locke favored protecting natural rights by consent.`,
                `Hobbes rejected government entirely; Locke wanted an all-powerful king.`,
                `They agreed completely with each other on every single point about government.`,
                `Hobbes believed in natural rights; Locke believed only in divine right.`,
              ],
              correctIndex: 0,
              explanation: `Hobbes, fearing chaos, wanted a strong ruler and prioritized order; Locke prioritized protecting natural rights and ruling only by consent, with a right of revolution. The distractors reverse or erase their real positions.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the difference between a government having power and having legitimacy?`,
              options: [
                `Power and legitimacy actually mean exactly the same thing as each other.`,
                `Power is the ability to compel obedience; legitimacy is the accepted right to rule.`,
                `Legitimacy is military strength; power is popularity.`,
                `Only kings can have legitimacy; only elected leaders have power.`,
              ],
              correctIndex: 1,
              explanation: `Power is the ability to make people obey; legitimacy is the widely accepted belief that a government has the rightful authority to rule. Power without legitimacy is mere force. The distractors conflate or scramble the two.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `According to Locke, where do natural rights come from?`,
              options: [
                `They are granted to people by the government in power.`,
                `They are earned only by paying taxes and obeying laws.`,
                `They are given exclusively to kings and nobles.`,
                `People have them simply by being human, before any government exists.`,
              ],
              correctIndex: 3,
              explanation: `Locke argued people possess natural rights, life, liberty, property, simply by being human, before and independent of any government, whose job is to protect them. The distractors make rights government-granted, earned, or reserved for elites.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is the idea of "consent of the governed" so revolutionary?`,
              options: [
                `It means power flows up from the people, so a ruler who betrays them loses authority.`,
                `It means the government can never be changed once established.`,
                `It proves that kings should have unlimited power forever.`,
                `It means that only the very wealthy may ever participate in their government.`,
              ],
              correctIndex: 0,
              explanation: `Consent of the governed makes the people the source of authority, so power flows up, not down, and a ruler who betrays the people forfeits legitimacy, the logic behind revolutions. The distractors describe the opposite of consent-based government.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What was Montesquieu's key insight about protecting liberty?`,
              options: [
                `That the best protection is finding one perfectly wise ruler.`,
                `That liberty is safest when government has unlimited power.`,
                `That power should be divided among branches that check one another.`,
                `That citizens should never question their government.`,
              ],
              correctIndex: 2,
              explanation: `Montesquieu argued the gravest threat is concentrated power, so liberty is protected by separating government into branches that check and balance each other, a design built into the U.S. Constitution. The distractors rely on a perfect ruler or unlimited power.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the central tension that every government must balance?`,
              options: [
                `Whether to have one ruler or two rulers in charge.`,
                `Being powerful enough to protect us, yet limited enough not to crush us.`,
                `Whether to collect the yearly taxes in the spring or in the fall.`,
                `Choosing between having laws and having a military.`,
              ],
              correctIndex: 1,
              explanation: `The central tension is creating a government strong enough to protect people and keep order, but limited enough that it can't become a tyranny, too little power risks chaos, too much risks oppression. The distractors are trivial or false framings.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: According to the social contract tradition, a government's authority is unconditional, once established, it has the rightful authority to rule no matter how it treats the people.`,
              correctAnswer: false,
              explanation: `False, and understanding why is the most explosive consequence of the entire social contract tradition. The social contract holds that legitimate government rests on the consent of the governed: free people agree to give up some of their freedom in exchange for the security, order, and protection of rights that organized society provides. This makes government's authority fundamentally conditional, it is earned by fulfilling its purpose (protecting the people and their rights, following the rule of law) and can be forfeited by betraying that purpose. This is the direct opposite of the older doctrine of the divine right of kings, which held that a monarch's God-given authority could never be questioned no matter what. Thinkers like John Locke drew the conclusion explicitly: if a government violates the rights it was created to protect, if it becomes tyrannical and breaks the contract, then it loses its legitimate authority, and the people have the right to alter or abolish it (the right of revolution). This is exactly the reasoning Thomas Jefferson used in the Declaration of Independence, and that figures like Simón Bolívar invoked in the Latin American independence movements, arguing that a government which tramples the people's rights has forfeited any legitimate claim to rule them. The whole point of grounding authority in consent, rather than in force or divine right, is that it makes legitimacy something a government must continually earn by serving the people, rather than something it possesses automatically and permanently. A government may still hold raw power even after it loses legitimacy, it can compel obedience through force, but force alone is not the same as rightful authority, and ruling by force without legitimacy tends to be unstable. So the statement is false: in the social contract tradition, government authority is precisely conditional, dependent on the government keeping its side of the bargain, and forfeitable when it does not. That conditionality is the entire revolutionary force of the idea.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine a country where the ruler took power by force, jails anyone who criticizes him, ignores the courts, and holds no elections, yet the army keeps everyone obeying. Using the lesson, how would a social-contract thinker best describe this government?`,
              options: [
                `It is fully legitimate, because it successfully maintains order.`,
                `It has power but lacks legitimacy: it compels obedience by force without the consent of the governed or the rule of law, so its authority is not rightful, only imposed.`,
                `It is legitimate because every government is automatically legitimate.`,
                `It is the ideal government, since strong rulers are always best.`,
              ],
              correctIndex: 1,
              explanation: `A social-contract thinker would say this government has power (it can compel obedience) but lacks legitimacy: it rules by force without consent, tramples rights, and ignores the rule of law, so its authority is imposed, not rightful. The distractors confuse raw power or order with legitimate authority.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-born-into`, category: `The system you inherited`, prompt: `You were born into a government you never signed up for, yet it shapes nearly everything about your life. How does it feel to realize the rules you live under rest on ideas, arguments made centuries ago, that you can now understand, question, and one day help reshape?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you probably never asked why anyone has the right to rule, you just obeyed or resisted. What surprised you most about where government's authority actually comes from, and did anything change in how you see the rules around you?` },
            { id: `reflect-tension`, category: `Which danger worries you`, prompt: `Every government balances two dangers: too little power (chaos) and too much (tyranny). Which danger worries you more, and what does your answer reveal about what you value most, safety or freedom?` },
            { id: `reflect-heritage`, category: `Teaching the foundations`, prompt: `Caro, you're building social studies for conscious families. How would you help a child feel that these "old" ideas, consent, rights, legitimacy, are alive and personal, perhaps drawing on the Latin American independence story, so government feels like something they belong to rather than something done to them?` },
            { id: `reflect-consent`, category: `Did you ever agree?`, prompt: `"Consent of the governed" is the foundation of legitimate government, yet you never actually signed anything. In what sense, if any, do you think you've consented to your government, and what would it take for that consent to feel real to you?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `The "people" whose consent supposedly grounded early governments often excluded the enslaved, women, the poor, and the colonized. What's the strongest objection to treating those governments as truly legitimate, and how should that history shape how we judge governments today?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Build Your Own Social Contract`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a hands-on experiment in political philosophy, where the ideas become real around your own table. Start with the state-of-nature thought experiment: ask everyone to imagine your household with no rules at all, no agreed bedtimes, no sharing, no "whose turn," no one settling disputes. What would actually happen? Who would end up with the most, and who with the least? Let the conversation reveal why people invent rules in the first place. Then build a real social contract together: have the family draft a short set of "household rules" everyone genuinely agrees to, and talk through what you're each giving up (some total freedom) and what you're getting in return (fairness, peace, predictability). Notice that rules everyone consented to feel different from rules imposed from above, that's consent of the governed in miniature. Explore legitimacy versus power: discuss the difference between obeying a rule because you accept it's fair (legitimacy) versus obeying only because someone bigger makes you (power), and where each shows up in real life, at home, at school, in society. Stage a mini-debate using the five voices from the lesson: assign family members to argue as the order-keeper (Hobbes), the rights-defender (Locke), the collective self-ruler (Rousseau), the power-divider (Montesquieu), and the skeptic of consent, applied to a real household question (screen time, chores, spending). Notice how each "thinker" has a real point. Connect it to the wider world: look up how these ideas appear in real founding documents, the U.S. Declaration of Independence (Locke's natural rights) or the writings of Simón Bolívar during Latin American independence, and find the actual phrases that echo this lesson. Finally, talk about the puzzle of consent: none of you signed up for the country's government, so in what sense did you agree to it? The goal isn't to settle these questions, it's to see that the rules governing every life, including yours, rest on ideas you can now understand, question, and help shape, rather than on some unquestionable authority handed down from above.`,
          },
          projectOption: {
            title: `The Founding Document Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate how the ideas of political philosophy were actually used to build real governments, and design your own, becoming a political thinker who can read founding documents with real understanding. Week 1, investigate the real thing: choose a real founding document or moment, the U.S. Declaration of Independence and Constitution, the French Declaration of the Rights of Man, Simón Bolívar's writings and the Latin American independence movements, or a constitution from another country. Read it (or key excerpts) and analyze it through the lesson's ideas: Where do you see the social contract and consent of the governed? Natural rights (Locke)? Separation of powers (Montesquieu)? The general will (Rousseau)? Concern with order (Hobbes)? Identify the actual sentences that echo these thinkers, and note who was included as "the people", and who was left out. Research the historical context: what problem were the authors trying to solve, and which danger (chaos or tyranny) most shaped their choices? Week 2, design your own: create a founding document for an imagined community, a new country, a colony on Mars, a self-governing school or town, that deliberately applies what you've learned. Decide and justify, using the thinkers, how authority will be grounded (consent? how?), what rights will be protected, how power will be divided to prevent abuse, how leaders are chosen and held accountable, and how the document handles the central tension between order and freedom. Make the hard tradeoffs explicit, and explain whose voices are included and how. Produce your final piece, an illustrated founding document with a written commentary, a slide deck, or a presentation, that both analyzes a real document and presents your own design, showing how each choice reflects a real idea from political philosophy. The aim is to experience these ideas as living tools: to see that constitutions are arguments, that every government is an attempt to answer the questions this lesson raised, and that you're now equipped to read those answers critically and even craft your own.`,
            offerToParent: `Parent: opt your child into the Founding Document Project. Analyzing a real founding document (the Declaration of Independence, a constitution, or Bolívar's independence-era writings) for the social contract, natural rights, separation of powers, and consent of the governed, then designing their own founding document with justified choices, directly develops the core C3 Framework civics concepts: the origins and purposes of government, sources of political authority and legitimacy, and the foundations of constitutional democracy. Reading founding documents critically, identifying whose voices were included or excluded, and making deliberate tradeoffs between order and liberty builds historical analysis, civic reasoning, and document literacy. It's rigorous, standards-aligned work that turns abstract political philosophy into something your child can actually use as a citizen.`,
          },
          identityQuestion: `If you become someone who understands where government's authority truly comes from, who can tell power from legitimacy, who knows that the rules shaping your life rest on arguments you can question and reshape, what kind of person does that make you, a citizen who engages government as a thinking participant rather than just obeying or resenting it, that someone who never asked why anyone has the right to rule never can?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who asks where authority comes from instead of just obeying it.`,
            `A person who can tell the difference between power and legitimacy.`,
            `Someone who knows the rules of their world rest on ideas they can reshape.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just done something most adults never do: you've looked underneath government itself and seen the ideas holding it up. You started with the most basic question, why does anyone have the right to tell you what to do, and you followed it all the way down. You explored the state of nature and saw why government exists at all: to solve the problems of people living together, while always risking the abuse of the power that requires. You met the revolutionary idea of the social contract, that legitimate government rests on the consent of the governed, not the divine right of kings, and you traced the thinkers who built it: Hobbes prizing order, Locke prizing natural rights and the right of revolution, Rousseau prizing the general will, Montesquieu prizing divided power. You learned to tell power from legitimacy, and saw how these ideas toppled monarchies and fueled revolutions, from the American Declaration of Independence to Bolívar's fight for Latin American independence. And you weighed five competing visions of what government should be without being handed a single "right" answer, because there isn't one, only thoughtful positions you can now reason between. You can now read a constitution and see the arguments inside it. You can tell the difference between a government that rules by right and one that rules by force. These aren't dusty ideas, they're the operating system of your world, and you can see the code now. Next, we go from the foundations to the blueprint: how a real constitution actually divides and limits power, using the U.S. system of federalism and separation of powers as our case study. Onward, {name}. — Atlas`,
          badge: `foundations-thinker`,
          badgeName: `Foundations Thinker`,
          xpEarned: 75,
          competencies: [
            `Understands why government exists: to solve the problems of people living together`,
            `Knows the social contract and the principle of consent of the governed`,
            `Distinguishes the key thinkers: Hobbes, Locke, Rousseau, and Montesquieu`,
            `Understands natural rights and where, according to Locke, they come from`,
            `Can distinguish a government's power from its legitimacy`,
            `Grasps the central tension: enough power to protect, limited enough not to oppress`,
            `Can weigh competing visions of government and reason toward an informed view`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: The Constitution in Depth — Federalism and Separation of Powers`,
            hook: `How a real constitution turns these ideas into a working machine that divides and limits power. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L01 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
