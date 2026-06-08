// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L15 — Negotiation: Real Skill, Useful Forever
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Negotiation, Conflict Resolution
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (hard bargaining / principled / relationship-based)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l15-v1";

const MONEYBUSINESS_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-15`,
      title: `Negotiation: Real Skill, Useful Forever`,
      duration: 35,
      xpReward: 75,
      badge: `negotiator`,
      badgeName: `Negotiator`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, negotiation is one of the most underrated skills in adult life. Most people are bad at it because schools don't teach it and most adults haven't deliberately practiced it. Every salary you'll ever negotiate, every house you'll ever buy or rent, every business deal you'll ever make, every significant disagreement with another person involves negotiation. Strong negotiation skills can be worth hundreds of thousands of dollars over a career and dramatically better relationships throughout your life. Today we look at three different negotiation philosophies, examine real research, and have you build an argument for which approach works best. By the end you'll know more about negotiation than most adults functioning entirely on instinct.`,
          headline: `Negotiation`,
          subtitle: `Real skill. Lifelong value. Almost never taught.`,
          visual: `/voyager-assets/money-business/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Negotiation Actually Is`,
          paragraphs: [
            `Negotiation is any conversation where two or more parties have different preferences and try to reach an agreement. That definition is broad on purpose. Negotiating salary with an employer is negotiation. Working out where to go for dinner with friends is negotiation. Arguing with a sibling over the front seat is negotiation. Trade deals between countries are negotiation. The same fundamental dynamics apply across all of these, even though the specific tactics differ.`,
            `Negotiation matters because the outcomes of small negotiations add up to enormous lifetime differences. Research consistently finds that people who negotiate their starting salary earn 5-15% more, which compounds across decades of percentage-based raises. People who negotiate the price of major purchases (cars, homes, services) save thousands of dollars per transaction. People who can negotiate in personal relationships build healthier connections than people who either avoid conflict or attack every disagreement.`,
            `Most people are bad at negotiation for a few reasons. Schools don't teach it. Most parents weren't taught it either, so they don't model it well. Cultural norms (especially for women and in some cultures) discourage assertive negotiation. The most visible negotiation styles in media (TV shows, movies) often portray aggressive, dishonest tactics that are actually counterproductive. So most adults wing it, often using styles that have been shown by research to be relatively ineffective.`,
          ],
          image: `/voyager-assets/money-business/l15-s1-negotiation.webp`,
          imageCaption: `Almost everyone negotiates. Almost no one is trained for it.`,
          vocab: [
            {
              word: `negotiation`,
              definition: `Any conversation where two or more parties have different preferences and try to reach an agreement. Salary, prices, relationships, conflicts. Same fundamental dynamics across many contexts.`,
              audioPrompt: `Negotiation is any conversation where two or more parties have different preferences and try to reach an agreement, {name}. Salary, prices, relationships, conflicts. The same fundamental dynamics apply across many contexts. Most people think of negotiation as something formal, like buying a car or salary discussions with an employer. The broader definition is more useful: any time you and someone else want different things and need to find a path forward, you're negotiating. Strong negotiators handle these moments well. Weak negotiators either avoid them, attack the other side, or capitulate. The skill applies in dozens of moments per week, not just in big formal moments.`,
            },
            {
              word: `starting salary`,
              definition: `The first salary paid in a new role. Research consistently finds people who negotiate starting salary earn 5-15% more, and the difference compounds across decades of percentage-based raises.`,
              audioPrompt: `Starting salary is the first salary paid in a new role, {name}. Research on salary negotiations consistently finds that people who counter rather than accept the first offer earn 5 to 15% more. Because raises are usually percentage-based on current salary, a higher starting salary compounds significantly over decades. Someone who negotiates $55,000 instead of $50,000 at age 22 earns meaningfully more over a 40-year career, even if subsequent raises are identical percentages. Most people avoid negotiating starting salary because they fear seeming ungrateful or losing the offer. Studies show employers expect negotiation and it rarely costs anyone a job offer. The failure to negotiate is an expensive habit.`,
            },
            {
              word: `cultural norms`,
              definition: `Unwritten social rules about acceptable behavior. Cultural norms around negotiation vary widely: some cultures see negotiation as expected and appropriate; others treat it as rude or aggressive. Affects who negotiates and how.`,
              audioPrompt: `Cultural norms are unwritten social rules about acceptable behavior, {name}. Norms around negotiation vary widely across cultures. In some contexts, negotiating is expected and failing to negotiate signals that you don't know what you're doing. In others, aggressive negotiation is considered rude and relationship-damaging. Research also finds that women face more social penalties than men for negotiating assertively in some contexts, which affects who negotiates and how. Being aware of cultural norms doesn't mean accepting them without question; it means understanding the context you're in. Most adults in the US operate in contexts where polite, data-supported negotiation is appropriate and expected, even if it still feels uncomfortable.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Approach 1: Hard Bargaining`,
          paragraphs: [
            `Hard bargaining (sometimes called "competitive" or "win-lose" negotiation) treats every negotiation as a battle where the other side is the opponent. The goal is to extract maximum value while giving up minimum. Tactics include making extreme initial demands, using pressure and deadlines, walking away (or threatening to) to gain leverage, not revealing information, and treating concessions as defeats.`,
            `Hard bargaining can work in certain contexts. Pure one-time transactions where you'll never see the other person again. Negotiations where you have significant leverage and the other side has limited alternatives. Adversarial legal contexts. Some real estate transactions. The Donald Trump-style "art of the deal" is essentially this approach, and it has produced both significant wins and significant burned bridges.`,
            `Hard bargaining has serious downsides. Most negotiations in real life are repeated relationships: with employers, customers, family, neighbors, business partners. Hard bargaining tends to poison these relationships even when it produces short-term wins. The other side remembers being treated as an opponent. They become harder to work with in future negotiations. They warn others about you. The pure hard-bargaining approach also fails when the other side has good alternatives: they walk away rather than capitulate.`,
            `Research finding: hard bargainers often "win" in the immediate moment but lose over longer time horizons. Studies of business relationships consistently find that pure hard bargainers eventually face dwindling partnership options as people refuse to deal with them. The approach optimizes for any single transaction while damaging the network of relationships that produces future opportunities.`,
          ],
          image: `/voyager-assets/money-business/l15-s2-hard.webp`,
          imageCaption: `Hard bargaining: wins specific transactions, often loses long games.`,
          vocab: [
            {
              word: `BATNA`,
              definition: `Best Alternative To a Negotiated Agreement. What you'll do if this negotiation fails. Knowing your BATNA is critical to negotiation: it sets the floor below which you should walk away. Stronger BATNAs mean stronger negotiation positions.`,
              audioPrompt: `BATNA stands for Best Alternative To a Negotiated Agreement, {name}. What you'll do if this specific negotiation fails. Knowing your BATNA is critical to any negotiation. It sets the floor below which you should walk away. If you're negotiating salary and your BATNA is another job offer at $80,000, you shouldn't accept less than $80,000 at the current negotiation. Stronger BATNAs produce stronger negotiation positions. Weaker BATNAs make negotiation harder because you have less ability to walk away. Improving your BATNA before negotiating, by lining up alternatives, is often more powerful than improving your negotiation tactics.`,
            },
            {
              word: `leverage`,
              definition: `Any advantage that strengthens your negotiating position. A strong BATNA is leverage. Exclusive expertise is leverage. The other side's urgent need is leverage. Knowing your leverage before negotiating is essential.`,
              audioPrompt: `Leverage is any advantage that strengthens your negotiating position, {name}. A strong BATNA is leverage because you can credibly walk away. Exclusive expertise gives you leverage because the other side can't easily replace you. Time pressure on the other side gives you leverage because they need to close the deal more urgently than you do. Hard bargaining works best when you have significant leverage and the other side has limited alternatives. It tends to fail when your leverage is weak. Before entering any important negotiation, map your leverage honestly. Where do you have real alternatives or advantages? Where are you dependent on the other side? Being clear-eyed about leverage produces better outcomes than wishful thinking.`,
            },
            {
              word: `win-lose negotiation`,
              definition: `A negotiation framed as a battle where one side gains at the other's expense. Hard bargaining assumes this structure. Most ongoing relationships involve repeated negotiation where win-lose framing consistently backfires over time.`,
              audioPrompt: `Win-lose negotiation is a framing where one side gains at the other's expense, {name}. Hard bargaining assumes this structure: the other side is the opponent, and maximum extraction from them is the goal. This framing fits some contexts: pure one-time transactions where you'll never interact again. It fits poorly in repeated relationships where the other side remembers how they were treated. Research on business relationships consistently finds that pure win-lose negotiators eventually face fewer partnership opportunities as people choose not to deal with them. Most real-world negotiations involve repeated relationships, which makes win-lose framing systematically costly over time despite occasional short-term wins.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Approach 2: Principled Negotiation`,
          paragraphs: [
            `Principled negotiation was developed by the Harvard Negotiation Project, codified in the 1981 book "Getting to Yes" by Roger Fisher and William Ury. It's now the dominant framework taught in business schools and used in many professional contexts. The approach has four pillars.`,
            `Separate the people from the problem. Don't attack the person you're negotiating with; attack the problem you're trying to solve together. This avoids the relational damage of hard bargaining while still pursuing your interests.`,
            `Focus on interests, not positions. A "position" is what someone says they want ("I want $90,000"). An "interest" is the underlying need ("I need to support my family's expected lifestyle, including saving for a house"). Multiple positions can satisfy the same interest. Finding creative solutions requires understanding interests on both sides.`,
            `Invent options for mutual gain. Most negotiations are framed as fixed-pie: more for me means less for you. Principled negotiation tries to expand the pie. The job offer negotiation isn't just about salary; it's also about flexibility, benefits, learning opportunities, stock options, signing bonus, vacation time. Creative combinations often satisfy both sides better than haggling over a single number.`,
            `Use objective criteria. Anchor positions in something other than power: market data, fairness standards, precedent, expert opinions. When you can both point to objective criteria for what's reasonable, negotiation becomes a search for what's fair rather than a contest of will.`,
            `Research finding: principled negotiation tends to produce better outcomes for both sides than hard bargaining over the long term. It preserves relationships, opens up creative solutions, and produces agreements both sides are willing to honor. The book "Getting to Yes" has sold over 15 million copies and the approach has influenced negotiation training in diplomacy, business, law, and conflict resolution.`,
          ],
          image: `/voyager-assets/money-business/l15-s3-principled.webp`,
          imageCaption: `Principled negotiation: separate people from problems, focus on interests.`,
          vocab: [
            {
              word: `principled negotiation`,
              definition: `Framework developed by the Harvard Negotiation Project: separate people from problem, focus on interests not positions, invent options for mutual gain, use objective criteria. Dominant framework taught in business and law schools.`,
              audioPrompt: `Principled negotiation is the framework developed by the Harvard Negotiation Project and codified in the 1981 book Getting to Yes, {name}. Four pillars: separate people from problem, focus on interests not positions, invent options for mutual gain, use objective criteria. It's now the dominant framework taught in business and law schools. The approach preserves relationships while still pursuing your interests effectively. Research consistently finds it produces better long-term outcomes than hard bargaining. The book has sold over 15 million copies and influenced negotiation training across diplomacy, business, law, and conflict resolution.`,
            },
            {
              word: `interests vs positions`,
              definition: `A position is what someone says they want ("I want $90,000"). An interest is the underlying need that position serves. Focusing on interests opens up creative solutions that satisfy both sides better than fighting over positions.`,
              audioPrompt: `Interests versus positions is a core distinction in principled negotiation, {name}. A position is what someone says they want: "I want $90,000." An interest is the underlying need that position serves: "I need to afford my family's expected lifestyle and save for a house." Multiple positions can satisfy the same interest. If you know someone's interest is housing affordability, you can propose solutions beyond a higher salary: a housing allowance, remote work that reduces commute costs, a signing bonus to cover a down payment. Focusing on interests instead of fighting over positions opens up creative solutions that both sides can live with. It's one of the most powerful skills in the principled negotiation framework.`,
            },
            {
              word: `objective criteria`,
              definition: `Market data, precedent, expert opinion, or fairness standards that both parties can reference to anchor a negotiation in something other than raw power. Makes negotiations less adversarial and easier to defend.`,
              audioPrompt: `Objective criteria are market data, precedent, expert opinion, or fairness standards that both parties can reference in a negotiation, {name}. Using objective criteria shifts negotiation from a contest of will to a search for what's fair. "Market rate for this role based on Glassdoor and LinkedIn data is $85,000 to $95,000" is objective criteria that the other side can verify. "I think I deserve more" is not. Bringing objective criteria makes it easier for the other side to agree to something they can defend to their own bosses or peers. It also tends to reduce the emotional intensity of negotiations because both sides are arguing about data rather than about each other's worth or intent.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Approach 3: Relationship-Based Negotiation`,
          paragraphs: [
            `A third approach, common in many non-Western cultures and in close-relationship contexts, emphasizes relationship over transaction. The goal isn't to maximize the current deal but to build a relationship that produces many future deals. Generosity in this transaction creates obligation and trust for future ones. The "deal" is the relationship itself, not any single agreement.`,
            `This approach is common in family businesses, in many Asian and Middle Eastern business cultures, in long-term professional partnerships, and in personal relationships generally. It often produces outcomes that look suboptimal in any single negotiation but better over decades of repeated interaction. The Japanese concept of "nemawashi" (laying groundwork through informal consultation before formal decisions) reflects this thinking.`,
            `Relationship-based negotiation has strengths. It preserves and builds the relationship capital that produces long-term opportunity. It works well in collaborative contexts (teams, partnerships, family businesses). It often outperforms harder approaches when the same parties repeatedly negotiate over years.`,
            `It also has weaknesses. It can leave value on the table in pure one-time transactions. It assumes good faith from the other side, which isn't always present. It can be exploited by hard bargainers who don't reciprocate the generosity. And the "long game" payoff sometimes doesn't materialize if relationships shift, jobs change, or circumstances disrupt the expected continuity.`,
          ],
          image: `/voyager-assets/money-business/l15-s4-relationship.webp`,
          imageCaption: `Relationship-based: optimize the long game, not the single transaction.`,
          vocab: [
            {
              word: `reciprocity`,
              definition: `The social principle that good deeds tend to be returned. Strong factor in relationship-based negotiation: generosity creates obligation that produces future opportunities. Documented across cultures.`,
              audioPrompt: `Reciprocity is the social principle that good deeds tend to be returned, {name}. It is a strong factor in relationship-based negotiation. Generosity creates obligation that produces future opportunities. The norm of reciprocity is documented across cultures and is one of the most powerful social dynamics. When someone helps you in a way you didn't earn, you feel motivated to return the favor when you can. Relationship-based negotiators leverage this consciously: by giving generously in some interactions, they build a reservoir of goodwill that produces returns over many years. Hard bargainers explicitly avoid this dynamic; they don't want to feel obligated. Both approaches have their place; the contexts differ.`,
            },
            {
              word: `long-term partnership`,
              definition: `An ongoing relationship with repeated transactions over years. Relationship-based negotiation tends to outperform hard bargaining in long-term partnerships because trust and goodwill compound across many interactions.`,
              audioPrompt: `A long-term partnership is an ongoing relationship with repeated transactions over years, {name}. Relationship-based negotiation tends to outperform hard bargaining in these contexts because trust and goodwill compound across many interactions. Every time you deal fairly with a long-term partner, you build a reservoir of goodwill that makes future dealings easier. Every time you extract maximum value at the other side's expense, you erode the relationship a bit. Over decades of a business partnership or professional relationship, these dynamics accumulate significantly. Hard bargaining can produce short-term wins in one-time transactions, but long-term partnerships reward the approach that builds trust over time. Knowing which kind of relationship you're in helps you choose the right approach.`,
            },
            {
              word: `generosity`,
              definition: `In relationship-based negotiation, giving more than strictly required in a current transaction. Creates reciprocal obligation and builds long-term trust. Strategically valuable, not just morally good, in repeated partnerships.`,
              audioPrompt: `Generosity in relationship-based negotiation means giving more than strictly required in a current transaction, {name}. This is not just morally good; it is strategically valuable in repeated partnerships. When you act generously with a business partner or colleague, you create a sense of obligation that tends to return. The Japanese concept of nemawashi involves laying groundwork through informal consultation before formal decisions, which is a form of generosity in information-sharing that builds trust over time. Generosity works best where the same parties will interact repeatedly over years. In pure one-time transactions with strangers, generosity may simply be exploitation by the other side. Context determines whether generosity is strategic or naive.`,
            },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Practical Tactics That Work`,
          paragraphs: [
            `Beyond the philosophical approaches, some specific tactics are well-supported by research. Don't make the first offer unless you have to. Studies consistently show the first offer often anchors the negotiation. If you're better-informed than the other side, anchoring early can help you. If they're better-informed, letting them anchor first can hurt you.`,
            `Always counter rather than accept the first offer. Even modest counters often improve outcomes. Research on first-job negotiations finds that accepting the first offer leaves an average of 7-13% on the table that even basic countering would have captured.`,
            `Use silence after their offers. Most people are uncomfortable with silence in negotiation and rush to fill it. Letting silence sit for 10-15 seconds after a counter often produces additional concessions from the other side without you having to say anything.`,
            `Specific information beats vague claims. "Market rate for this role at companies of your size is $85-95K based on Glassdoor data I researched" is much more powerful than "I think I'm worth more." Bring data. Bring research. Make it easy for the other side to agree to something they can defend later.`,
            `Multiple equivalent offers (MEOs) work well when single counters don't. Rather than negotiating one variable at a time, offer the other side multiple packages that are equally attractive to you but emphasize different things. ("I'd accept $85K with 4 weeks vacation, or $90K with 3 weeks vacation, or $80K with $5K signing bonus and 4 weeks vacation.") This reveals their preferences and often unlocks deals that wouldn't have happened with single-variable negotiation.`,
          ],
          image: `/voyager-assets/money-business/l15-s5-tactics.webp`,
          imageCaption: `Specific tactics: counter, use silence, bring data, offer multiple packages.`,
          vocab: [
            {
              word: `anchoring effect`,
              definition: `The cognitive tendency to weight the first number presented heavily in subsequent thinking. Strong negotiation effect. Whoever anchors first often sets the range of the negotiation.`,
              audioPrompt: `The anchoring effect is the cognitive tendency to weight the first number presented heavily in subsequent thinking, {name}. It is a strong negotiation effect. Whoever anchors first often sets the range of the negotiation. If you anchor at 90,000 dollars and the other side counters at 80,000, the negotiation likely lands somewhere between those. If they anchor at 70,000 and you counter at 80,000, the negotiation likely lands lower. The same person at the same job, with the same skills, can earn dramatically different amounts based purely on who anchored first and where. Anchoring is one of the most important and least understood negotiation dynamics.`,
            },
            {
              word: `silence`,
              definition: `In negotiation, deliberately pausing after an offer rather than filling the gap with words. Research shows most people are uncomfortable with silence and rush to fill it, often making concessions the other side never had to ask for.`,
              audioPrompt: `Silence in negotiation means deliberately pausing after a counter-offer rather than rushing to fill the gap, {name}. Research on negotiation tactics consistently shows that most people are deeply uncomfortable with silence and will rush to fill it. When the other side makes a counter-offer and you say nothing for 10 to 15 seconds, they often make additional concessions before you say a word. You don't have to push; the silence does the work. Most people learn this tactic once and start using it immediately because it requires no confrontation and produces real results. It works because silence feels like disapproval or dissatisfaction to most people, and they move to relieve that feeling.`,
            },
            {
              word: `multiple equivalent offers`,
              definition: `MEOs. Offering the other party several packages that are equally acceptable to you but emphasize different things. Reveals their priorities and often unlocks deals that single-variable haggling would miss.`,
              audioPrompt: `Multiple equivalent offers, called MEOs, means offering the other party several packages that are equally acceptable to you but emphasize different things, {name}. Instead of negotiating one variable at a time, you might say: "I'd accept $85,000 with 4 weeks vacation, or $90,000 with 3 weeks vacation, or $80,000 with a $5,000 signing bonus and 4 weeks." All three are equally acceptable to you. By watching which option the other side gravitates toward, you learn what they value. This often unlocks deals that single-variable negotiation would have missed because both sides can optimize for different things simultaneously. MEOs are one of the most effective advanced negotiation tactics and work particularly well when salary alone has reached an impasse.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l15-argument-builder`,
          type: `argument-builder`,
          headline: `Which Negotiation Approach Is Strongest?`,
          intro: `Pick one of three approaches. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `hard-bargaining`,
              label: `Hard bargaining: extract maximum value`,
              summary: `In a competitive world, treating negotiations as battles produces better outcomes for you. Extreme initial demands, pressure tactics, walking away when needed, not revealing your hand. The other side is your opponent in this transaction, not your partner. Hard bargainers win in zero-sum contexts. Real estate, salary negotiations with employers who have already chosen you, and any pure one-time transaction reward this approach. Being too "nice" leaves money on the table.`,
            },
            {
              id: `principled-negotiation`,
              label: `Principled negotiation: separate people from problem`,
              summary: `The Harvard Negotiation Project framework. Focus on interests not positions. Invent options for mutual gain. Use objective criteria. This approach preserves relationships while still pursuing your interests effectively. Research consistently finds it produces better long-term outcomes than hard bargaining. Most professional negotiations involve repeated relationships; principled negotiation optimizes for both this deal and the next.`,
            },
            {
              id: `relationship-based`,
              label: `Relationship-based: optimize for the long game`,
              summary: `The goal isn't to maximize any single deal but to build relationships that produce many future deals. Generosity in this transaction creates obligation and trust for future ones. Strongest approach for family relationships, long-term partnerships, repeated business interactions, and contexts where reputation compounds. Hard bargaining and principled negotiation both miss what reciprocity and trust can produce over decades.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Research on first-job salary negotiations consistently finds that people who counter rather than accept the first offer earn 5-15% more. These differences compound across decades of percentage-based raises.`,
              source: `Multiple studies on salary negotiation outcomes`,
            },
            {
              id: `e2`,
              text: `"Getting to Yes" by Fisher & Ury (1981) has sold over 15 million copies and is the dominant framework taught in business and law schools. Its principled negotiation approach has influenced diplomacy, conflict resolution, and corporate negotiation training.`,
              source: `Harvard Negotiation Project; published research`,
            },
            {
              id: `e3`,
              text: `Studies of business relationships consistently find that pure hard bargainers eventually face dwindling partnership options as people refuse to deal with them. The approach optimizes for any single transaction while damaging the network of relationships.`,
              source: `Business relationship research`,
            },
            {
              id: `e4`,
              text: `Cross-cultural research on negotiation styles finds that relationship-based approaches dominate in many Asian and Middle Eastern business cultures and produce successful long-term partnerships there. Western hard-bargaining tactics often fail in these contexts.`,
              source: `Cross-cultural management research`,
            },
            {
              id: `e5`,
              text: `Real estate negotiations and other one-time transactions often reward harder bargaining since there's no future relationship to preserve. Hard bargainers can save significant money in these contexts.`,
              source: `Real estate transaction analysis`,
            },
            {
              id: `e6`,
              text: `Anchoring effect research shows the first offer often sets the range of the negotiation. Better-informed parties anchoring first often achieve substantially better outcomes than those who let the other side anchor first.`,
              source: `Negotiation psychology research`,
            },
            {
              id: `e7`,
              text: `The Japanese business concept of "nemawashi" (laying groundwork through informal consultation before formal decisions) is a relationship-based approach that has been successful in long-term partnerships and is being increasingly studied in Western business schools.`,
              source: `Cross-cultural business studies`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your approach. Here's the strongest objection. All three approaches assume you can choose your style in any given negotiation. But the other side's style determines what works. Hard bargaining against principled negotiation can produce one-sided wins for the hard bargainer. Principled negotiation against a hard bargainer who exploits good faith can produce one-sided losses. Relationship-based against pure transactional partners can leave value on the table. So the right answer isn't 'pick one approach'; it's 'read the other side and adapt.' Why is your single approach better than adaptive flexibility?"`,
            promptInstruction: `In 3-4 sentences, respond. How does your approach handle the reality that the other side has their own style? When does it adapt, and when does it stay firm?`,
          },
          reflectionPrompt: `Looking at the other two approaches, which would you find hardest to use? Why? Could you imagine using it in specific contexts?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is negotiation, broadly defined?`,
              options: [
                `Only formal business deals`,
                `Any conversation where two or more parties have different preferences and try to reach an agreement; salary, prices, relationships, conflicts; the same fundamental dynamics across many contexts`,
                `Only legal contracts`,
                `Only price negotiation`,
              ],
              correctIndex: 1,
              explanation: `The broad definition is more useful. You negotiate dozens of times per week in different ways. Recognizing these moments as negotiation gives you frameworks to handle them.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is BATNA?`,
              options: [
                `A type of contract`,
                `Best Alternative To a Negotiated Agreement; what you'll do if this negotiation fails; sets the floor below which you should walk away`,
                `Brutal Aggressive Tactic`,
                `Bank Account Total Negotiation`,
              ],
              correctIndex: 1,
              explanation: `BATNA is one of the most important concepts in negotiation. Improving your BATNA (by lining up alternatives) is often more powerful than improving your tactics. Stronger BATNAs produce stronger negotiation positions.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the four pillars of principled negotiation?`,
              options: [
                `Push hard, lie often, deny everything, win`,
                `Separate people from problem; focus on interests not positions; invent options for mutual gain; use objective criteria`,
                `Compromise, accept, leave, return`,
                `Anger, demand, threaten, walk away`,
              ],
              correctIndex: 1,
              explanation: `These four pillars from "Getting to Yes" (1981) form the dominant framework taught in business schools. Each pillar addresses a common failure mode in unstructured negotiation.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the difference between a position and an interest in negotiation?`,
              options: [
                `They're the same`,
                `A position is what someone says they want ("I want $90,000"); an interest is the underlying need that position serves ("I need to support my family lifestyle, save for a house"); multiple positions can satisfy the same interest`,
                `Positions are legal, interests are illegal`,
                `Positions are formal, interests are casual`,
              ],
              correctIndex: 1,
              explanation: `Understanding interests opens up creative solutions. If someone wants $90,000 but their underlying interest is housing affordability, a job at $80,000 with housing allowance might satisfy them better than $90,000 without. Always probe to interests.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does hard bargaining tend to lose long games even when it wins specific transactions?`,
              options: [
                `It's morally wrong`,
                `Most real-life negotiations are repeated relationships; hard bargaining tends to poison these relationships even when it produces short-term wins; the other side warns others and becomes hard to work with in future negotiations`,
                `Hard bargaining is illegal`,
                `Hard bargainers can't read contracts`,
              ],
              correctIndex: 1,
              explanation: `Most negotiations involve repeated relationships: employers, customers, family, business partners. Optimizing the current transaction at the cost of the relationship is usually wrong over time. Research on business relationships consistently shows this pattern.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the anchoring effect?`,
              options: [
                `A way to stop ships`,
                `The cognitive tendency to weight the first number presented heavily in subsequent thinking; whoever anchors first often sets the range of the negotiation`,
                `A type of investment`,
                `A legal term`,
              ],
              correctIndex: 1,
              explanation: `Anchoring is one of the strongest effects in negotiation psychology. Better-informed parties usually want to anchor first; less-informed parties usually benefit from letting the other side anchor. Knowing which situation you're in matters.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does the research say about countering vs accepting the first offer?`,
              options: [
                `Always accept the first offer`,
                `People who counter rather than accept the first offer earn 5-15% more on average; these differences compound across decades of percentage-based raises`,
                `Countering wastes time`,
                `Countering hurts relationships`,
              ],
              correctIndex: 1,
              explanation: `One of the most replicated findings in negotiation research. Even modest counters often improve outcomes. Accepting the first offer leaves significant money on the table in most professional contexts.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is reciprocity in relationship-based negotiation?`,
              options: [
                `A type of contract`,
                `The social principle that good deeds tend to be returned; generosity creates obligation and trust that produces future opportunities; documented across cultures`,
                `Aggressive tactics`,
                `Pure bargaining`,
              ],
              correctIndex: 1,
              explanation: `Reciprocity is one of the most powerful social dynamics. Relationship-based negotiators leverage it consciously by giving generously in some interactions to build goodwill that returns over many years.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The right negotiation approach is the same regardless of context (one-time transaction vs ongoing relationship, friendly vs adversarial parties).`,
              correctAnswer: false,
              explanation: `False. Different contexts reward different approaches. Hard bargaining can work in one-time real estate transactions but damages employer relationships. Relationship-based works for long partnerships but can leave value on the table in pure transactions. Adaptive flexibility is what mature negotiators develop.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend is about to interview for their first job at a coffee shop. They say "I'll just take whatever they offer; I don't want to seem ungrateful." Based on this lesson, what's the most useful response?`,
              options: [
                `"Smart, don't risk losing the job"`,
                `"Not negotiating is incredibly common but probably the wrong move. Research shows people who counter even modestly earn 5-15% more, and the difference compounds across raises. A simple 'I was hoping for X, is there any flexibility?' isn't ungrateful—employers expect negotiation. Worst case they say no and you accept the original offer. Best case you start at higher pay that compounds for years. Try."`,
                `"Demand 50% more or walk away"`,
                `"Wait until later to negotiate"`,
              ],
              correctIndex: 1,
              explanation: `Real applied negotiation advice. The friend's instinct (don't negotiate) is the most common pattern and the least optimal. Modest, polite counter-offers are expected by employers and produce real long-term gains for the employee.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What's the last "negotiation" you were in, even an informal one? Looking back, which approach did you use? Did it work?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Why is negotiation so uncomfortable for most people? What would make you more willing to do it deliberately?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone comfortable with negotiation in adulthood, what does that change about your career, finances, and relationships?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of one negotiation you might face in the next year (with parents over privileges, with friends over plans, with adults over commitments). Which approach fits? What's your BATNA?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is there a fourth negotiation approach the lesson missed? What about avoidance? Capitulation? Are those always wrong?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one parent: have they ever negotiated salary or a major purchase? What worked or didn't work for them? What did they wish they had known?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Negotiation skill compounds across a lifetime. Two paths to develop it now.`,
          familyActivity: {
            title: `The Family Negotiation Practice`,
            duration: `40 minutes`,
            description: `Practice negotiation as a family using a low-stakes scenario. Examples: where to go on vacation, what to have for dinner this week, how to divide household chores fairly. Use principled negotiation explicitly: identify each person's interests (not just positions), brainstorm options for mutual gain, use objective criteria. After 20 minutes, discuss as a family: did the structured approach produce a better outcome than just arguing? What was hardest? Most adults rarely practice formal negotiation. Doing it as a family on low-stakes issues builds the skill for higher-stakes future ones.`,
          },
          projectOption: {
            title: `Read "Getting to Yes," 4 weeks (optional)`,
            duration: `4 weeks, reading and reflection`,
            description: `Read "Getting to Yes" by Fisher and Ury (1981). It's about 200 pages and accessible to a teen reader. Take notes on the four pillars. Apply the framework to one negotiation you actually face in the four weeks (with parents, friends, teachers, or business). Write 500 words on what you learned. This is one of the most read books on negotiation in the world. It's been required reading at Harvard Law School for decades. Reading it at 12 puts you ahead of where most adults ever get. You can find it at most libraries.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. The book is accessible to teen readers and provides a lifetime framework.`,
          },
          identityQuestion: `If you become a skilled negotiator at 12 instead of avoiding it forever like most people, what does that compound to across 60 years of life?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows my BATNA before entering any important negotiation.`,
            `A person who counters the first offer politely rather than accepting it.`,
            `Someone willing to negotiate consciously instead of avoiding it like most adults.`,
          ],
          saveKey: `identity_responses_mb_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three serious negotiation approaches, identify the four pillars of principled negotiation, apply concepts like BATNA and anchoring, recognize when each approach fits different contexts, and use specific tactics like countering first offers and using silence. Most adults have never seriously thought about negotiation. You have. Next time we shift to consuming the financial information that shapes how people make money decisions: financial news. WSJ, CNBC, financial influencers. How to evaluate them. Source Evaluation format. See you there. — Ace`,
          badge: `negotiator`,
          badgeName: `Negotiator`,
          xpEarned: 75,
          competencies: [
            `Can articulate three negotiation approaches (hard bargaining, principled, relationship-based)`,
            `Knows the four pillars of principled negotiation`,
            `Understands BATNA, anchoring, reciprocity, and other key concepts`,
            `Can apply specific tactics: countering, using silence, bringing data, MEOs`,
            `Recognizes when each approach fits different contexts`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Reading Financial News`,
            hook: `Wall Street Journal vs CNBC vs financial influencers. Three very different sources. How to evaluate financial information without being manipulated.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L15 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
