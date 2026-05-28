// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L15 — Negotiation: Getting What You Want
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: C3 D2.Eco.1.3-5 — Decision-making and trade-offs;
//            Jump$tart — Financial decision-making and communication
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what negotiation really is, win-win vs win-lose,
//        preparation and BATNA, ethical negotiation
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-15`,
      title: `Negotiation: Getting What You Want`,
      duration: 18,
      xpReward: 75,
      badge: `negotiator`,
      badgeName: `Skilled Negotiator`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we cover a skill you'll use your ENTIRE life, in business AND everyday situations. NEGOTIATION. Most people think negotiation is about being aggressive or "winning" while someone else "loses." That's actually BAD negotiation. The best negotiators create deals where BOTH sides feel good. Negotiation isn't a personality trait you're born with. It's a LEARNABLE SKILL. By the end of today, you'll understand how it really works and be able to practice it. Let's go.`,
          headline: `Negotiation`,
          subtitle: `A learnable skill for getting what you want while keeping good relationships`,
          visual: `/ue-assets/money/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Negotiation Really Is`,
          paragraphs: [
            `NEGOTIATION is a conversation where two or more people try to reach an AGREEMENT. It happens constantly, not just in business. Deciding where to eat dinner with friends is a negotiation. Asking your parents for a later bedtime is a negotiation. Agreeing on the price of a used bike is a negotiation. Settling who does which chores is a negotiation. Most people negotiate dozens of times a day without even noticing.`,
            `The KEY insight that changes everything: good negotiation isn't about WINNING. It's about finding a solution that works WELL ENOUGH for everyone that they'll actually agree and follow through. If you "win" a negotiation by crushing the other person, they'll resent it, won't want to deal with you again, and might not honor the agreement. Good negotiators care about the OUTCOME and the RELATIONSHIP. They want a deal that's good for them AND tolerable (ideally good) for the other side. That's how you build a reputation people want to work with for life.`,
          ],
          image: `/ue-assets/money/l15-s1-what-is.webp`,
          imageCaption: `Negotiation: reaching agreement. Not crushing the other side. Outcome AND relationship.`,
          vocab: [
            { word: `negotiation`,
              definition: `A conversation where two or more people try to reach an agreement. Happens constantly, not just in business. Good negotiation finds solutions that work for everyone, not just "winning."`,
              audioPrompt: `Negotiation is a conversation where two or more people try to reach an agreement, {name}. It happens constantly, not just in business. Deciding where to eat with friends is a negotiation. Asking your parents for a later bedtime is a negotiation. Most people negotiate dozens of times a day without noticing. Good negotiation isn't about winning. It's about finding a solution that works well enough for everyone that they'll actually agree and follow through. Good negotiators care about both the outcome and the relationship.` },
            { word: `compromise`,
              definition: `A negotiation outcome where both sides give up something to reach agreement. Different from win-win, where both sides get more of what they truly need. When win-win isn't possible, compromise is often the best available outcome.`,
              audioPrompt: `A compromise is a solution where both sides give up something to reach agreement, {name}. Different from win-win, where both sides might get more of what they truly need. In a compromise, both sides settle for less. If you want 100 dollars and someone offers 60, meeting at 80 is a compromise. Compromise is often necessary when interests truly conflict and no win-win exists. It's better than no deal, but it's not the ideal outcome. The best negotiators try for win-win first, and compromise only when necessary.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Win-Win vs Win-Lose`,
          paragraphs: [
            `There are two basic approaches to negotiation. WIN-LOSE (also called "zero-sum"): one person's gain is the other's loss. If we're splitting a pizza and I take more, you get less. Some situations really are like this. But many situations that LOOK win-lose are actually solvable in a way where BOTH people get more of what they truly want. That's WIN-WIN.`,
            `Here's a classic example. Two sisters are fighting over one orange. They could split it 50/50 (win-lose compromise, each gets half). But if they actually TALKED about WHY they each want it, they'd discover: one wants the PEEL to bake a cake, the other wants the JUICE to drink. They could each get 100% of what they actually need! That's win-win. The lesson: behind people's POSITIONS (what they say they want) are INTERESTS (why they want it). Great negotiators dig into interests, not just positions. When you understand what someone REALLY needs, you can often find solutions that work better for everyone.`,
          ],
          image: `/ue-assets/money/l15-s2-win-win.webp`,
          imageCaption: `Positions vs interests. The orange story: dig into WHY, find win-win.`,
          vocab: [
            { word: `win-win`,
              definition: `A negotiation outcome where both sides get most of what they truly need. Found by understanding each side's real interests (the WHY) rather than just their stated positions (the WHAT).`,
              audioPrompt: `A win-win outcome is when both sides get most of what they truly need, {name}. Found by understanding each side's real interests, not just their stated positions. Here's a classic example. Two sisters fight over one orange. They could each take half. But if they talk about why, one wants the peel for baking and the other wants the juice for drinking. Each gets what they need. Great negotiators dig into interests, not just positions. Understanding what someone really needs reveals better solutions for everyone.` },
            { word: `position`,
              definition: `What someone says they want in a negotiation — often stated firmly. The surface of a negotiation. Beneath positions are interests — the real WHY. Negotiating only on positions leads to deadlock.`,
              audioPrompt: `A position is what someone says they want in a negotiation, {name}. Often stated firmly. I want 500 dollars for this bike. I want to leave at 10 pm. I want the corner office. Positions are the surface of a negotiation. Beneath them are interests, the real reasons why people want what they want. Negotiating only on positions often leads to deadlock. When both sides are locked on positions, neither moves. Understanding the interests behind positions is what unlocks creative solutions and makes deals possible.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Preparation and Your BATNA`,
          paragraphs: [
            `The biggest secret of good negotiators is that they PREPARE before they negotiate. They think about what they want, what the other side probably wants, and what a fair deal would look like. Most people just wing it and end up with worse outcomes. One of the most important things to know before any negotiation is your BATNA: "Best Alternative To a Negotiated Agreement." In plain words: what will you do if this negotiation FAILS?`,
            `Here's why BATNA matters. Imagine you're selling your old bike. If you have ANOTHER buyer willing to pay $100 (your BATNA), you won't accept $60 from someone else, because you have a better option. But if you have NO other buyer (weak BATNA) and you need the money today, you might accept $60. The stronger your BATNA, the more confident you can be in a negotiation. This applies to everything: jobs (other offers strengthen your position), purchases (other options give you power), even everyday life. Knowing your alternatives changes how you negotiate. Smart negotiators always know their BATNA before they start.`,
          ],
          image: `/ue-assets/money/l15-s3-batna.webp`,
          imageCaption: `Prepare. Know your BATNA: your best alternative if the deal falls through.`,
          vocab: [
            { word: `BATNA`,
              definition: `"Best Alternative To a Negotiated Agreement" — what you'll do if the negotiation fails. The stronger your alternatives, the more confident and powerful you are in any negotiation.`,
              audioPrompt: `BATNA stands for Best Alternative To a Negotiated Agreement, {name}. In plain words, it's what you'll do if the negotiation fails. Imagine you're selling your bike. If you have another buyer willing to pay 100 dollars, that's your BATNA. You won't accept 60 dollars from someone else, because you have a better option. But if you have no other buyer and need money, you might accept 60. The stronger your BATNA, the more confident you can be in a negotiation. Smart negotiators always know their best alternative before they start.` },
            { word: `leverage`,
              definition: `Anything that gives you more power or options in a negotiation. A strong BATNA is leverage. A deadline the other side faces is leverage. More leverage means more confidence and better outcomes.`,
              audioPrompt: `Leverage is anything that gives you more power or options in a negotiation, {name}. A strong BATNA is leverage. If you have another offer, you don't need this deal as badly. A deadline the other side faces is leverage. If they need to close a deal by Friday, time works in your favor. Multiple interested parties create leverage. If many buyers want something you're selling, you can negotiate better terms. The more leverage you have, the more confident you can be. Building leverage before a negotiation is part of preparation.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Ethical Negotiation: Honesty Wins Long-Term`,
          paragraphs: [
            `Some people think negotiation means LYING, manipulating, or pressuring. That's a SHORT-TERM strategy that backfires. People remember being manipulated. They don't want to deal with you again. They warn others. A reputation for dishonest dealing follows you and costs you opportunities for years. The best negotiators are HONEST, even when it's not required. They build a reputation as someone fair to deal with, which brings them better deals over time.`,
            `Ethical negotiation still means advocating firmly for what you want. You don't have to reveal everything, accept bad deals, or be a pushover. But you don't lie, you don't manipulate emotions, and you genuinely try to find solutions that work for everyone. Some useful honest techniques: ask lots of questions (understand their interests), listen more than you talk, stay calm, take your time, and be willing to walk away if the deal isn't right (your BATNA gives you this power). Ace's truth: in a world full of people trying to "win" by any means, being a fair, honest, prepared negotiator makes you someone everyone wants to work with. That reputation compounds, just like interest.`,
          ],
          image: `/ue-assets/money/l15-s4-ethical.webp`,
          imageCaption: `Honest, firm, prepared. The reputation that brings better deals for life.`,
          vocab: [
            { word: `interests`,
              definition: `The real reasons WHY someone wants something in a negotiation, as opposed to their stated position (the WHAT). Understanding interests is the key to finding win-win solutions.`,
              audioPrompt: `Interests are the real reasons why someone wants something in a negotiation, {name}. As opposed to their stated position, what they say they want. In the orange example, both sisters said I want the orange. But their interests were different. One wanted the peel for baking, the other wanted the juice for drinking. Understanding interests instead of just positions unlocks better solutions. Great negotiators ask questions to uncover real interests. When you know what someone truly needs, you can often find solutions that work for everyone.` },
            { word: `anchor`,
              definition: `The first number or offer made in a negotiation. Anchors have surprising power — they set a reference point that influences the whole negotiation. Smart negotiators often anchor first.`,
              audioPrompt: `An anchor is the first number or offer in a negotiation, {name}. It has a surprising amount of power. Whoever makes the first offer sets a reference point that influences the entire negotiation. If a seller says 1,000 dollars first, the final price usually ends up closer to 1,000 than if the buyer had offered 600 first. Smart negotiators often anchor first, setting the range in their favor. But anchoring too aggressively can seem unreasonable and end negotiations before they begin. Anchoring is subtle but powerful.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four negotiation moments. For each one, identify the approach: WIN-WIN (finding a solution good for both sides), WIN-LOSE (one side gains at the other's expense), or MANIPULATION (using dishonesty or pressure)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `winwin`,        label: `Win-Win`,       color: `#34D399`, description: `Finding a creative solution where both sides get most of what they truly need.` },
            { id: `winlose`,       label: `Win-Lose`,      color: `#FBBF24`, description: `One side gains at the other's direct expense. Sometimes necessary, often avoidable.` },
            { id: `manipulation`,  label: `Manipulation`,  color: `#F87171`, description: `Using lies, false pressure, or emotional tricks to get an advantage.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Moment #1`,
              clues: [
                { text: `Two coworkers both want the same week off for vacation, but only one can be gone at a time.` },
                { text: `They talk and discover one really wants the first half of the week, the other the second half.` },
                { text: `They split it so both get the part they care about most, and cover for each other.` },
              ],
              correctAnswer: `winwin`,
              realWorldExample: `Workplace scheduling often has hidden win-win solutions.`,
              explanation: `By understanding each other's real interests, they found a solution where both got what they cared about most. Pure win-win. This is what happens when you dig into interests instead of just fighting over positions.`,
            },
            {
              id: `case-2`,
              caseTitle: `Moment #2`,
              clues: [
                { text: `Someone is selling a used phone for $200.` },
                { text: `The buyer offers $150. They settle on $175.` },
                { text: `It's a simple price split — the buyer saves $25, the seller gets $25 less than asking.` },
              ],
              correctAnswer: `winlose`,
              realWorldExample: `Simple price haggling is often win-lose (zero-sum).`,
              explanation: `In a simple price negotiation, every dollar the buyer saves is a dollar the seller loses. They compromised in the middle. Pure win-lose (also called zero-sum). Not every negotiation has a win-win solution. Some really are about splitting a fixed amount. That's okay, as long as it's done fairly.`,
            },
            {
              id: `case-3`,
              caseTitle: `Moment #3`,
              clues: [
                { text: `A car salesperson says "This is the last one at this price and three other people are coming this afternoon to buy it!"` },
                { text: `In reality, there are ten more in the lot and no other buyers are coming.` },
                { text: `The lie is designed to pressure the customer into deciding fast.` },
              ],
              correctAnswer: `manipulation`,
              realWorldExample: `False scarcity is a classic manipulation tactic.`,
              explanation: `Lying to create false urgency. Pressuring with fake information. Pure manipulation. This works sometimes in the short term, but customers who discover the lie feel cheated, leave bad reviews, and never return. Manipulation damages reputation over time.`,
            },
            {
              id: `case-4`,
              caseTitle: `Moment #4 — The Tricky One`,
              clues: [
                { text: `A job applicant is offered $50,000. She politely says, "I appreciate the offer. I have another offer at $58,000, but I'd prefer to work here. Could you match it?"` },
                { text: `She genuinely DOES have the other offer (it's true).` },
                { text: `The company raises their offer to $56,000, and she accepts happily.` },
              ],
              correctAnswer: `winwin`,
              realWorldExample: `Salary negotiation using a real competing offer is standard practice.`,
              explanation: `Tricky because it looks like she's "pressuring" them. But she's being HONEST (the other offer is real), using her actual BATNA, and being polite about it. The company gets an employee who wants to be there. She gets fair pay. Both feel good. Pure win-win. Lesson: using your real BATNA honestly is NOT manipulation. Manipulation requires dishonesty or false pressure. Stating a true alternative respectfully is ethical, smart negotiation. The difference between this and the car salesperson is simple: she told the truth.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is NEGOTIATION?`,
              options: [
                `Arguing until you win`,
                `A conversation where two or more people try to reach an agreement — happens constantly, not just in business`,
                `Only for buying cars`,
                `A way to trick people`,
              ],
              correctIndex: 1,
              explanation: `Negotiation is reaching agreement. It happens dozens of times a day: choosing where to eat, asking for a later bedtime, agreeing on a price. Good negotiation isn't about winning — it's about finding solutions everyone will actually accept and follow.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `What's a WIN-WIN outcome?`,
              options: [
                `One person wins, one loses`,
                `Both sides get most of what they truly need, found by understanding each side's real interests`,
                `Everyone loses equally`,
                `Splitting everything 50/50`,
              ],
              correctIndex: 1,
              explanation: `Win-win means both sides get most of what they truly need. The orange story: one sister wanted peel, the other wanted juice, so each got 100%. Found by understanding interests (the WHY) rather than just positions (the WHAT).` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `What's the difference between a POSITION and an INTEREST?`,
              options: [
                `They're the same`,
                `A position is WHAT someone says they want. An interest is WHY they want it. Understanding interests unlocks win-win solutions.`,
                `Positions are better`,
                `Interests don't matter`,
              ],
              correctIndex: 1,
              explanation: `Position = what they say they want ("I want the orange"). Interest = why they want it ("I need the peel for baking"). Great negotiators dig into interests. When you understand what someone really needs, you can find solutions that work for everyone.` },

            { id: `l15-q4`, format: `multiple-choice`,
              question: `What is your BATNA?`,
              options: [
                `A type of weapon`,
                `Your "Best Alternative To a Negotiated Agreement" — what you'll do if the negotiation fails`,
                `Your final offer`,
                `A negotiation trick`,
              ],
              correctIndex: 1,
              explanation: `BATNA is what you'll do if the deal falls through. If you're selling a bike and have another buyer at $100, that's your BATNA — so you won't accept $60. The stronger your alternatives, the more confident and powerful you are in any negotiation.` },

            { id: `l15-q5`, format: `true-false`,
              question: `True or false: The BEST negotiators are usually honest, even when lying might give a short-term advantage.`,
              correctAnswer: true,
              explanation: `True. Manipulation works short-term but backfires. People remember being tricked, warn others, and won't deal with you again. Honest, fair negotiators build reputations that bring better deals over time. Honesty compounds, just like interest.` },

            { id: `l15-q6`, format: `multiple-choice`,
              question: `Why does PREPARATION matter in negotiation?`,
              options: [
                `It doesn't`,
                `Because thinking through what you want, what the other side wants, and your BATNA leads to much better outcomes than winging it`,
                `Only experts prepare`,
                `Preparation is cheating`,
              ],
              correctIndex: 1,
              explanation: `Most people just wing negotiations and get worse outcomes. Good negotiators prepare: they think about what they want, what the other side probably wants, what's fair, and what their BATNA is. Preparation is one of the biggest secrets of skilled negotiators.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `What's the difference between using your real BATNA and MANIPULATION?`,
              options: [
                `No difference`,
                `Using a REAL alternative honestly is ethical negotiation. Manipulation requires lying or false pressure.`,
                `Both are bad`,
                `BATNA is always manipulation`,
              ],
              correctIndex: 1,
              explanation: `Stating a true alternative respectfully ("I have another offer at $58K") is honest, smart negotiation. Lying to create false pressure ("three other buyers are coming!" when there are none) is manipulation. The dividing line is honesty.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `What are some HONEST negotiation techniques?`,
              options: [
                `Lying and pressuring`,
                `Ask questions, listen more than you talk, stay calm, take your time, and be willing to walk away`,
                `Always demand more`,
                `Never compromise`,
              ],
              correctIndex: 1,
              explanation: `Good honest techniques: ask questions to understand interests, listen carefully, stay calm, take your time, and be willing to walk away (your BATNA gives you this power). These work better than aggression and don't damage your reputation.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think of a recent disagreement you had (with a sibling, friend, or parent). Was there a hidden WIN-WIN solution you both missed? What might it have been?` },
            { id: `r2`, text: `Next time you want something from your parents, how could you find out their real INTERESTS (the why behind their answer) instead of just arguing your position?` },
            { id: `r3`, text: `Imagine selling something you own. What would make your BATNA (your backup option) stronger or weaker?` },
            { id: `r4`, text: `Ace says honest negotiators build reputations that bring better deals for life. Do you know anyone with a reputation for being fair? How do people treat them?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Negotiation is one of the most useful life skills almost nobody gets formally taught. You'll negotiate salaries, prices, work projects, relationships, and countless everyday decisions. People who negotiate well (honestly and skillfully) earn more, get better deals, and have smoother relationships over their lives. People who never learn often leave money and opportunities on the table, or damage relationships by negotiating badly. The good news: it's a learnable skill, and you can start practicing right now. Ace's note: the best negotiators aren't the loudest or most aggressive. They're the most prepared, the best listeners, and the most trustworthy.`,
          familyAdventure: `Family Negotiation Practice. Pick a small, low-stakes family decision (where to go this weekend, what to have for dinner, how to divide a chore). Practice the win-win approach: each person states not just WHAT they want, but WHY (their interest). Then try to find a solution that meets everyone's real interests. Notice how different this feels from just arguing positions.`,
          creativePrompt: {
            intro: `Imagine you want to negotiate something important with your parents (a later bedtime, a pet, a phone, more allowance). Write out your negotiation plan.`,
            floor: `Write at least 5 sentences. Cover what you want, why you want it (your interest), what your parents' interests probably are, and a possible win-win solution.`,
            stretch: `Write 8 to 10 sentences. Include your position and interest, your parents' likely interests, a win-win proposal, your BATNA (backup plan), and how you'd keep the conversation honest and respectful.`,
            open: `Write as much as you want. Build a complete negotiation plan. Cover your interests, your parents' likely interests, multiple possible win-win solutions, your BATNA, the honest techniques you'd use, and how you'd handle it if they say no. Show you understand it's about finding a good outcome for everyone, not just winning.`,
            frames: [
              `What I want is ___.`,
              `The real reason I want it (my interest) is ___.`,
              `My parents probably care about ___.`,
              `A win-win solution might be ___.`,
              `If they say no, my backup plan is ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what negotiation really is, the difference between win-win and win-lose, the power of understanding interests and knowing your BATNA, and why honest negotiation wins long-term. Next lesson: another relationship skill that shapes careers and lives. NETWORKING. Building real relationships (the right way). — Ace.`,
          badge: `negotiator`,
          badgeName: `Skilled Negotiator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
