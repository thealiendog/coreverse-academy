// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L10 — Marketing vs Manipulation: Where's The Line?
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Marketing, Consumer Protection, Ethics
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (legitimate marketing vs dark patterns vs FTC guidance)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l10-v1";

const MONEYBUSINESS_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-10`,
      title: `Marketing vs Manipulation: Where's The Line?`,
      duration: 35,
      xpReward: 75,
      badge: `pattern-spotter`,
      badgeName: `Pattern Spotter`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, marketing at its best is honest communication between a product and a customer. At its worst it's manipulation — exploiting cognitive biases, creating false urgency, targeting children. This lesson covers both: what marketing actually does, where it crosses into manipulation, and how to recognize the specific patterns you'll see constantly.`,
          headline: `Marketing vs Manipulation`,
          subtitle: `Where persuasion ends and exploitation begins.`,
          visual: `/voyager-assets/money-business/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Marketing Actually Does`,
          paragraphs: [
            `Marketing is communication designed to influence buying behavior. At its most basic, it tells potential customers that a product exists, what it does, who it's for, and why it might be worth buying. A bakery posting "fresh bread every morning at 7am" is marketing. A software company explaining how their tool saves time is marketing. The packaging on a cereal box is marketing. So is the layout of a grocery store, the placement of products on shelves, the lighting in the produce section.`,
            `Most marketing is legitimate. It serves a real function: connecting people who have needs with products that address those needs. A new parent searching for safe car seats benefits from marketing that helps them find good options. A small business owner searching for accounting software benefits from marketing that helps them compare alternatives. Without marketing, valuable products would have a much harder time reaching the people who would benefit from them.`,
            `Marketing uses psychology to be more effective. The colors that catch attention. The words that trigger emotion. The placement that maximizes visibility. The pricing that feels like a deal. This psychological optimization is mostly fine when it's used to communicate genuine value clearly. It crosses into manipulation when it's used to override what customers would choose on reflection or to exploit psychological weaknesses that have nothing to do with the actual product.`,
          ],
          image: `/voyager-assets/money-business/l10-s1-marketing.webp`,
          imageCaption: `Most marketing is honest communication. Some isn't.`,
          vocab: [
            {
              word: `legitimate marketing`,
              definition: `Communication that helps customers find products that genuinely meet their needs, even when it uses psychological techniques to be effective. The standard most ethical companies aim for.`,
              audioPrompt: `Legitimate marketing is communication that helps customers find products that genuinely meet their needs, {name}. Even when it uses psychological techniques like attention-grabbing colors, emotional language, or strategic placement, it's still legitimate if the underlying claim is accurate and the customer benefits from finding the product. A bakery advertising fresh bread, a software company explaining its features, a car company emphasizing safety ratings: all legitimate. The techniques used to communicate matter less than whether the actual product and claims are honest. Legitimate marketing serves both buyer and seller.`,
            },
            {
              word: `psychological optimization`,
              definition: `Using knowledge of how human minds work to make marketing more effective. Colors, words, placement, and pricing designed to maximize attention, desire, or action. Legitimate when communicating real value; manipulation when exploiting weaknesses.`,
              audioPrompt: `Psychological optimization is using knowledge of how human minds work to make marketing more effective, {name}. The colors that catch attention. The words that trigger emotion. The shelf placement that maximizes visibility. The pricing that feels like a deal. Businesses study consumer psychology extensively to make their communications more persuasive. This psychological optimization is mostly legitimate when it communicates genuine value clearly and helps customers make good decisions. It crosses into manipulation when it overrides what customers would choose on reflection, exploits psychological weaknesses that have nothing to do with the actual product, or tricks people into agreeing to things they don't want.`,
            },
            {
              word: `social proof`,
              definition: `Evidence that other people have chosen or approved of something. Reviews, testimonials, and star ratings are common forms. Real social proof is legitimate marketing. Fake reviews or paid testimonials without disclosure are manipulation.`,
              audioPrompt: `Social proof is evidence that other people have chosen or approved of something, {name}. Reviews, testimonials, star ratings, and user counts are common forms. Real social proof, genuine reviews from actual verified customers, is legitimate marketing. It helps potential customers make better decisions with information from people who have already tried the product. Manufactured social proof crosses the line: fake reviews bought from farms, paid testimonials presented as organic, manipulated star ratings. A company that buys 500 fake five-star reviews is deceiving potential customers. The FTC has brought enforcement actions against major companies, including Amazon sellers and cosmetics brands, for fake review practices.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where Marketing Crosses Into Manipulation`,
          paragraphs: [
            `Marketing crosses into manipulation when it exploits psychological weaknesses rather than communicating value. Several specific patterns are well-documented. Scarcity manipulation: "Only 2 left in stock!" "Sale ends in 4 hours!" "Limited time offer!" Some scarcity claims are real. Many are manufactured to trigger fear of missing out. The same "limited time" sale runs continuously on many sites.`,
            `Social proof manipulation: fake reviews, paid testimonials presented as organic, manipulated star ratings. Real social proof (genuine reviews from actual users) is legitimate marketing. Manufactured social proof crosses the line. A company that buys 500 fake 5-star reviews is manipulating consumers.`,
            `Bait-and-switch: advertising one thing prominently while delivering something else. The "starting at $29!" headline that leads to a product that actually costs $89 once you add what's required. The "free trial" that automatically becomes a $40/month subscription if you don't cancel before a hard-to-find deadline.`,
            `Hidden fees and dark patterns: extra charges revealed only at checkout. Subscription cancellation buried behind multiple confusing screens. Pre-checked boxes adding extras the customer didn't ask for. These patterns are specifically designed to extract money customers would not pay if they fully understood what was happening.`,
          ],
          image: `/voyager-assets/money-business/l10-s2-manipulation.webp`,
          imageCaption: `Manipulation: exploits psychology to override informed choice.`,
          vocab: [
            {
              word: `dark pattern`,
              definition: `A user interface or design choice intentionally crafted to trick people into doing things they wouldn't on reflection: extra purchases, harder cancellation, mistaken sign-ups, hidden fees.`,
              audioPrompt: `A dark pattern is a user interface or design choice intentionally crafted to trick people into doing things they wouldn't on reflection, {name}. Examples: pre-checked boxes that add extras to your cart. Cancellation processes that require multiple confusing screens or phone calls. Confusing button placements that make "yes" easier to click than "no." Hidden fees that only appear at the final checkout step. Dark patterns are well-documented in design research and have been the subject of regulatory action in multiple countries. Recognizing them helps you protect yourself from companies that profit from confused consumers.`,
            },
            {
              word: `scarcity manipulation`,
              definition: `Using false or exaggerated claims of limited supply to trigger fear of missing out and push faster purchasing decisions. "Only 2 left!" or "Sale ends in 4 hours!" are common forms. Real scarcity exists; manufactured scarcity manipulates.`,
              audioPrompt: `Scarcity manipulation is using false or exaggerated claims of limited supply to trigger fear of missing out and push faster purchasing decisions, {name}. Real scarcity exists. Products do sometimes sell out. Genuine limited-time sales do end. The manipulation happens when claims like "Only 2 left in stock" or "Sale ends in 4 hours" are fabricated or permanently recycled. The same limited-time sale running continuously on many sites is scarcity manipulation. The psychological response it triggers is real: fear of missing out is a powerful motivator. Recognizing the pattern helps you pause, verify, and make decisions based on actual value rather than manufactured urgency.`,
            },
            {
              word: `bait-and-switch`,
              definition: `Advertising one product prominently at an attractive price, then delivering something different or more expensive. A form of deceptive marketing that is illegal in many contexts but still widely practiced.`,
              audioPrompt: `Bait-and-switch is advertising one product prominently at an attractive price, then delivering something different or more expensive, {name}. The "starting at $29" headline that leads to a product actually costing $89 once you add what is required is a common online version. The "free trial" that automatically becomes a $40 per month subscription if you don't cancel before a hard-to-find deadline is another. The bait gets your attention. The switch captures your money in ways you might not have agreed to if presented honestly upfront. Bait-and-switch is illegal in many contexts but still widely practiced because enforcement is difficult and many versions fall in legal gray areas.`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Specific Patterns You'll See Constantly`,
          paragraphs: [
            `Some patterns are common enough that you'll encounter them weekly. The "anchor price." A product is shown as "$129, now $79!" The original $129 may never have been the actual sustained price. Anchoring is a real psychological effect: any "discounted" price feels like a deal compared to the anchor. Some anchoring is legitimate (real sales from real prices). Some is fabricated.`,
            `The "decoy option." Three pricing tiers where the middle one is the obvious best deal. The cheap option is intentionally too limited. The expensive option is intentionally overpriced. The middle option is what the company actually wants you to buy, and it looks like a bargain compared to the others. Sometimes legitimate, often constructed to push you toward a specific choice.`,
            `Manufactured urgency. Countdown timers that reset when you reload the page. "Other people are looking at this right now!" alerts that aren't tied to real users. "Sale ends today!" emails that send weekly. Real urgency exists. Manufactured urgency exploits the same psychological response without the underlying reality.`,
            `Drip pricing. The headline price doesn't include taxes, fees, shipping, mandatory add-ons, or service charges. By the time you're at checkout, the total is 40% higher than the headline. Airlines, hotels, ticket sellers, and online retailers all use drip pricing. The FTC has been increasing regulation of this practice. Recognizing it helps you compare actual costs across competitors.`,
          ],
          image: `/voyager-assets/money-business/l10-s3-patterns.webp`,
          imageCaption: `Same patterns recur across industries. Recognize once, spot forever.`,
          vocab: [
            {
              word: `anchoring`,
              definition: `A psychological bias where the first price or number we see influences our judgment of subsequent prices. Often used in legitimate pricing strategy but can be manipulated.`,
              audioPrompt: `Anchoring is a psychological bias where the first price or number we see influences our judgment of subsequent prices, {name}. A product shown as "originally $129, now $79" uses anchoring. The $129 anchor makes the $79 feel like a bargain. Some anchoring is legitimate: the original price was actually $129. Some anchoring is fabricated: the $129 price was never sustained, just briefly listed to create the anchor. Anchoring is one of the most reliable cognitive biases in psychological research. Knowing how it works helps you evaluate prices more accurately by comparing to market rates rather than to anchors set by the seller.`,
            },
            {
              word: `manufactured urgency`,
              definition: `Artificially created time pressure designed to push faster purchasing decisions. Countdown timers that reset, false viewer counts, and repeated "sale ends today" messages are common forms. Distinct from real urgency.`,
              audioPrompt: `Manufactured urgency is artificially created time pressure designed to push faster purchasing decisions, {name}. Countdown timers that reset when you reload the page. "Other people are looking at this right now!" alerts not tied to real users. "Sale ends today!" emails that send weekly. Manufactured urgency exploits the same psychological response as real scarcity, fear of missing out, but without any underlying reality. The practical test: wait 24 hours. If the countdown timer reset, the urgency was manufactured. If the sale is still going, it was not really ending. Real urgency rarely requires this level of pressure. The more urgency signals a site uses, the more skeptical you should be.`,
            },
            {
              word: `drip pricing`,
              definition: `A pricing practice where the headline price excludes mandatory fees, taxes, or add-ons that are only revealed at checkout. The final price is significantly higher than what was advertised.`,
              audioPrompt: `Drip pricing is a pricing practice where the headline price excludes mandatory fees, taxes, or add-ons that are only revealed at checkout, {name}. Airlines, hotels, ticket sellers, and online retailers all use it. A $49 flight becomes $89 after baggage fees, seat selection, and service charges. A $79 hotel room becomes $109 after resort fees and parking. By the time you see the real total you have already invested time and energy in the booking, making you more likely to complete the purchase anyway. The FTC has been increasing regulation of drip pricing practices in recent years. Recognizing it helps you compare actual final costs across competitors rather than being tricked by misleading headline prices.`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Who Regulates This`,
          paragraphs: [
            `In the US, the Federal Trade Commission (FTC) is the main federal agency that regulates advertising and marketing. The FTC enforces laws against deceptive advertising, unfair business practices, and false claims. They publish guidance on what's allowed and what isn't. They also bring cases against companies that cross legal lines.`,
            `The basic legal standard: claims in advertising must be truthful and not misleading. Endorsements and testimonials must be honest. Material connections (paid relationships, sponsorships) must be disclosed. Claims about scientific evidence must be supported by actual evidence. Children's advertising has additional restrictions because kids are more susceptible to manipulation.`,
            `Specific things the FTC has cracked down on: fake reviews (Amazon, Sunday Riley), influencer non-disclosure of paid posts, subscription traps that make cancellation difficult, drip pricing in event tickets and hotels, AI-generated fake testimonials. The penalties can be substantial: tens or hundreds of millions of dollars for major cases. Smaller companies face proportionally large fines.`,
            `What the FTC doesn't regulate well: most cross-border deceptive marketing (companies based in other countries are hard to prosecute), much of social media-based marketing (moving faster than enforcement can keep up), and many gray areas where techniques are technically legal but ethically questionable. Consumer awareness is often a better protection than regulation alone.`,
          ],
          image: `/voyager-assets/money-business/l10-s4-ftc.webp`,
          imageCaption: `FTC: the agency. Consumer awareness: the real protection.`,
          vocab: [
            {
              word: `Federal Trade Commission`,
              definition: `The main US federal agency that regulates advertising, consumer protection, and competition. Founded 1914. Enforces laws against deceptive advertising and unfair business practices.`,
              audioPrompt: `The Federal Trade Commission, called the FTC, is the main US federal agency that regulates advertising and consumer protection, {name}. Founded in 1914. The FTC enforces laws against deceptive advertising, unfair business practices, and false claims. They publish guidance, investigate complaints, and bring legal cases against companies that cross legal lines. The penalties for major violations can be enormous: hundreds of millions of dollars. Despite this, much manipulative marketing continues because it's hard to police, falls in gray areas, or originates from overseas. Consumer awareness is often a better protection than regulation alone.`,
            },
            {
              word: `influencer disclosure`,
              definition: `The FTC requirement that people paid or given products to promote them must clearly disclose that relationship. Not disclosing makes endorsements deceptive. The FTC has brought enforcement actions against both influencers and brands.`,
              audioPrompt: `Influencer disclosure is the FTC requirement that people paid or given products to promote them must clearly disclose that relationship, {name}. An influencer who receives free products or payment to review something must disclose this clearly, not buried in hashtags or hidden in a long caption. Without disclosure, the endorsement is presented as organic when it is actually a paid advertisement. The FTC has brought enforcement actions against influencers and brands that failed to disclose. This matters because paid content and genuine recommendations affect consumer decisions very differently. Knowing to look for disclosure hashtags like hashtag ad or hashtag sponsored is part of evaluating any influencer recommendation you see.`,
            },
            {
              word: `deceptive advertising`,
              definition: `Advertising that makes false or misleading claims about a product, its price, or endorsements. Illegal under FTC standards. Includes fake reviews, unsupported scientific claims, hidden fees, and undisclosed paid endorsements.`,
              audioPrompt: `Deceptive advertising is advertising that makes false or misleading claims about a product, its price, or endorsements, {name}. It is illegal under FTC standards. Claims must be truthful and not misleading. Endorsements and testimonials must be honest. Scientific evidence claims must be supported by actual evidence. Children's advertising has additional restrictions because kids are more susceptible to manipulation. The FTC has cracked down on fake reviews from companies like Amazon sellers and Sunday Riley Cosmetics, influencer non-disclosure of paid posts, subscription traps, drip pricing in event tickets, and AI-generated fake testimonials. Consumer awareness remains the most reliable protection because regulatory enforcement cannot keep up with the volume and speed of modern marketing.`,
            },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three very different sources discussing marketing and manipulation. The first is academic research on dark patterns. The second is a marketing industry insider defending common practices. The third is an FTC enforcement guide. Each makes claims, but they're doing very different intellectual work.`,
            `Watch for the patterns you've practiced across the band. What's the source's methodology? What evidence does it cite? Does it engage with counterarguments? Who benefits if you believe what they're saying? Does the source acknowledge complexity, or does it speak in absolutes? These are the same source evaluation skills you've built across the whole Inner World band and now in Money & Business.`,
            `One framing to keep in mind: marketing isn't bad. Manipulation is bad. The line between them is real but isn't always obvious. Different reasonable people can disagree about where exactly it falls in specific cases. The goal isn't to become cynical about all marketing. It's to develop the ability to recognize when persuasion has crossed into exploitation.`,
          ],
          image: `/voyager-assets/money-business/l10-s5-before.webp`,
          imageCaption: `Marketing isn't bad. Manipulation is bad. The skill is telling them apart.`,
          vocab: [
            {
              word: `informed consent`,
              definition: `The standard that a person should understand what they're agreeing to before agreeing. Manipulation undermines informed consent. Legitimate marketing supports it.`,
              audioPrompt: `Informed consent is the standard that a person should understand what they're agreeing to before agreeing, {name}. It comes from medical ethics but applies to marketing too. Legitimate marketing supports informed consent by giving customers clear information about what they're buying. Manipulation undermines informed consent by hiding information, exploiting psychological weaknesses, or designing systems that make it hard to make a clear-eyed decision. Asking "would the customer have agreed if they fully understood what they were agreeing to?" is one of the best tests for whether a marketing practice has crossed into manipulation. If the answer is no, it probably has.`,
            },
            {
              word: `subscription trap`,
              definition: `A sign-up process that makes it easy to start a subscription but deliberately difficult to cancel. Free trials that auto-convert, cancellation buried behind multiple screens. Specifically targeted by FTC enforcement.`,
              audioPrompt: `A subscription trap is a sign-up process that makes it easy to start a subscription but deliberately difficult to cancel, {name}. Free trials that automatically convert to paid subscriptions if you forget to cancel. Cancellation processes buried behind multiple confusing screens or phone calls when sign-up was done online in seconds. Pre-checked boxes that add recurring charges without explicit consent. The FTC's 2024 enforcement policy statement specifically targets subscription traps as deceptive practices. Companies are required to clearly disclose terms, obtain express informed consent, and provide simple cancellation processes. One of the most common dark patterns adults encounter. Checking the terms before any free trial sign-up is a basic protection.`,
            },
            {
              word: `consumer awareness`,
              definition: `The ability to recognize marketing techniques, dark patterns, and manipulation before being affected by them. Often a better protection than regulation alone because enforcement cannot keep pace with modern marketing.`,
              audioPrompt: `Consumer awareness is the ability to recognize marketing techniques, dark patterns, and manipulation before being affected by them, {name}. The FTC and other regulators do important work, but enforcement cannot keep pace with the volume and speed of modern marketing. Much manipulative marketing is technically legal, cross-border, or falls in gray areas. Consumer awareness fills the gap. Someone who can recognize manufactured urgency, spot fabricated anchors, notice undisclosed influencer relationships, and detect dark patterns at checkout is much harder to manipulate than someone who cannot. Consumer awareness is the skill that protects you when regulation falls short, which is most of the time.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l10-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Marketing And Manipulation`,
          intro: `Three sources discuss marketing practices. Rank them from most credible to least credible based on methodology and honesty. Then see how a careful analyst would evaluate them.`,
          topic: `When does marketing cross the line into manipulation, and what should be done about it?`,
          sources: [
            {
              id: `source-a`,
              name: `Mathur et al. (2019) — "Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites"`,
              type: `Peer-reviewed academic research from Princeton University, published in Proceedings of the ACM on Human-Computer Interaction`,
              claim: `A systematic crawl of 11,000 shopping websites found dark patterns present on 11.1% of sites. Identified 15 specific dark pattern types including sneaking (hidden fees, sneak-into-basket), urgency (manufactured countdown timers, false scarcity), misdirection (visual prominence manipulation, confirmshaming), and forced action (forced enrollment, bait-and-switch). Higher-traffic sites used dark patterns more frequently than lower-traffic sites, suggesting they may be commercially effective.`,
              evidence: `Automated systematic analysis of 11,000 sites with documented methodology. Peer-reviewed publication. Code and dataset made publicly available for reproduction. Findings published with clear definitions of each pattern type. Authors disclosed funding sources and methodology limitations. Findings have been cited and built upon by subsequent academic research and have influenced FTC enforcement.`,
            },
            {
              id: `source-b`,
              name: `"Why Modern Marketing Works" — Industry Magazine Editorial (Marketing Today, anonymous executive)`,
              type: `Opinion editorial in industry publication, written by anonymous "senior marketing executive"`,
              claim: `"Critics of marketing don't understand consumer psychology. Everything called a 'dark pattern' is just effective communication. Urgency is real—products do sell out. Anchoring is good design—customers want to know context for pricing. The reviews question is overblown; everyone knows online reviews are mixed. The real problem is regulators who don't understand business trying to impose academic theories on real-world commerce. Marketing has always been about persuasion. Calling persuasion 'manipulation' is moralistic posturing by people who've never actually had to grow a business."`,
              evidence: `Personal experience claims from anonymous author. No data cited. Assertions presented as obvious. Repeated suggestion that critics are naive or moralistic. No engagement with specific dark pattern research, FTC enforcement actions, or consumer harm documentation. Conflates legitimate marketing techniques with manipulative practices to defend both. Anonymous authorship makes accountability impossible. Published in an industry magazine that depends on advertising revenue from marketing companies.`,
            },
            {
              id: `source-c`,
              name: `FTC Enforcement Policy Statement on Negative Option Marketing (2024)`,
              type: `Official policy statement from the US Federal Trade Commission outlining enforcement priorities for subscription traps and similar practices`,
              claim: `Negative option marketing (subscriptions that continue automatically) must clearly disclose terms before billing, must obtain express informed consent, and must provide simple cancellation processes. Hiding cancellation behind multiple screens, requiring phone calls when sign-up was online, or making it harder to cancel than to sign up will be treated as deceptive practices. Cites specific recent enforcement cases with multi-million-dollar penalties. Provides clear standards companies are expected to meet.`,
              evidence: `Official government policy statement with the force of regulatory guidance. References specific federal laws (FTC Act, Restore Online Shoppers' Confidence Act). Cites named enforcement cases including specific penalty amounts. Provides operational definitions of what counts as deceptive. Publicly available. The FTC has actually pursued cases on these standards, demonstrating practical application. Subject to legal challenge and judicial review.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? What separates academic research from industry opinion from regulatory policy?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the gold standard for evidence on this topic. Peer-reviewed academic research. Systematic methodology applied at scale (11,000 sites). Clear definitions of what was measured. Publicly available data and code for reproduction. Authors disclose limitations. The findings have practical impact: FTC enforcement actions have built on this kind of research. When you want to understand what's actually happening in the marketplace, peer-reviewed academic research from credible institutions is among the strongest evidence available.`,
              `Source B is the recognizable pattern of industry self-defense. Anonymous authorship. No data. Personal anecdote dressed as obvious truth. Conflates different categories (legitimate persuasion vs documented manipulation) to defend both. Attacks critics personally rather than engaging with their evidence. Published in a venue with significant financial conflicts of interest (industry magazine). The pattern is consistent across many industries: when research and regulation threaten profitable practices, industry defenders produce content that argues the practices aren't really problems and the critics don't understand. The pattern is recognizable across topics from marketing to environmental regulation to healthcare.`,
              `Source C is interesting because it's a different kind of source. It's regulatory policy, not research. Its credibility comes from a different basis: it represents the official position of a federal agency with enforcement authority, it cites specific cases and laws, and it has practical consequence (companies that violate it face real penalties). Government sources can be wrong, biased, or politically influenced, but in this specific case the FTC's policy statement is well-grounded in law and evidence. It's a legitimate primary source for understanding what's regulated and how.`,
              `The deeper lesson: different types of sources have different strengths. Academic research provides systematic evidence. Government sources provide enforcement frameworks and rules. Industry sources can provide insider perspective but require careful evaluation for conflicts of interest. The skill isn't picking one type of source as always correct. The skill is matching the source type to the question, recognizing limitations, and weighting credibility appropriately. On this topic, academic research and regulatory guidance largely agree with each other and disagree with industry defenses of manipulative practices. That convergence is meaningful evidence.`,
            ],
          },
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the basic distinction between legitimate marketing and manipulation?`,
              options: [
                `All marketing is manipulation`,
                `Legitimate marketing helps customers find products that genuinely meet their needs; manipulation exploits psychological weaknesses to override informed choice`,
                `Marketing is legal, manipulation is illegal`,
                `There's no difference`,
              ],
              correctIndex: 1,
              explanation: `The line is real but not always obvious. Both can use psychological techniques. The difference is whether the technique helps the customer make a clear-eyed decision or undermines it.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's a "dark pattern"?`,
              options: [
                `A black background design`,
                `A user interface or design choice intentionally crafted to trick people into doing things they wouldn't on reflection: extra purchases, harder cancellation, hidden fees, pre-checked boxes`,
                `Any marketing technique`,
                `A type of advertising`,
              ],
              correctIndex: 1,
              explanation: `Dark patterns are documented in academic research and have been subject to regulatory action. They're not just "annoying" design — they're specifically engineered to extract money or data that customers wouldn't give knowingly.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's "anchoring"?`,
              options: [
                `Hooking customers with promises`,
                `A psychological bias where the first price or number we see influences our judgment of subsequent prices; legitimate when based on real prices, manipulative when fabricated`,
                `A type of investment`,
                `Tying products together`,
              ],
              correctIndex: 1,
              explanation: `Anchoring is one of the most reliable cognitive biases. "Was $129, now $79" uses anchoring. If the $129 was real, it's legitimate. If it was never sustained, it's fabricated anchoring.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's "drip pricing"?`,
              options: [
                `Slow price increases`,
                `When the headline price doesn't include taxes, fees, shipping, or mandatory add-ons; by checkout the total is significantly higher than advertised`,
                `Hidden discounts`,
                `Slow leaks of money`,
              ],
              correctIndex: 1,
              explanation: `Drip pricing is used by airlines, hotels, ticket sellers, and online retailers. The FTC has increased regulation. Recognizing it helps you compare actual costs across competitors.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the FTC?`,
              options: [
                `Federal Tax Commission`,
                `Federal Trade Commission; the main US federal agency that regulates advertising and consumer protection; enforces laws against deceptive advertising and unfair business practices`,
                `Foreign Trade Commission`,
                `Free Trade Commission`,
              ],
              correctIndex: 1,
              explanation: `FTC penalties for major violations can be hundreds of millions of dollars. Despite enforcement, much manipulative marketing continues. Consumer awareness is often the real protection.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did Mathur et al.'s Princeton study find?`,
              options: [
                `No dark patterns exist`,
                `A systematic crawl of 11,000 shopping websites found dark patterns on 11.1% of sites; higher-traffic sites used them more frequently, suggesting commercial effectiveness`,
                `All websites use dark patterns`,
                `Dark patterns help customers`,
              ],
              correctIndex: 1,
              explanation: `Peer-reviewed academic research with systematic methodology. The finding that higher-traffic sites use dark patterns more is one of the most concerning findings: the more successful the site, the more likely it uses these patterns.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's "informed consent" as it applies to marketing?`,
              options: [
                `Reading the fine print`,
                `The standard that a person should understand what they're agreeing to before agreeing; manipulation undermines informed consent, legitimate marketing supports it`,
                `Signing contracts`,
                `Getting permission`,
              ],
              correctIndex: 1,
              explanation: `Informed consent comes from medical ethics but applies to marketing too. The test "would the customer have agreed if they fully understood what they were agreeing to?" is one of the best ways to identify manipulation.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What was Source B's central manipulation tactic?`,
              options: [
                `Citing data`,
                `Conflating legitimate persuasion with documented manipulation to defend both; attacking critics personally rather than engaging with their evidence; anonymous authorship preventing accountability`,
                `Following FTC rules`,
                `Quoting academic research`,
              ],
              correctIndex: 1,
              explanation: `The pattern of industry self-defense recurs across topics. Recognize it once, you'll see it everywhere: marketing, environmental regulation, healthcare, finance. Always: anonymous or conflicted authors, no data, personal attacks, conflation of categories.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All marketing is manipulation, and the only ethical position is to avoid all advertising.`,
              correctAnswer: false,
              explanation: `False. Most marketing is legitimate communication that helps customers find products. The distinction between legitimate marketing and manipulation is real and important. Becoming cynical about all marketing is as wrong as being naïve about manipulation.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're shopping online. The site says "Only 3 left in stock! 247 people are viewing this right now! Sale ends in 4 hours!" Based on this lesson, what should you notice?`,
              options: [
                `"I better buy quickly!"`,
                `"That's three manufactured urgency signals at once: low stock claim, fake live viewer count, and countdown timer. Real urgency exists, but the combination here is suspicious. The site is designed to push you past reflection. Take 24 hours. If the deal is real, it'll usually still be available. If not, you avoided a manipulated purchase."`,
                `"This is great marketing"`,
                `"All websites do this"`,
              ],
              correctIndex: 1,
              explanation: `Real applied dark pattern detection. The combination of three urgency signals is a tell. The 24-hour wait test catches most manipulated purchases without significant cost when real deals are present.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, where did you draw the line between legitimate marketing and manipulation? Has it shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which dark pattern have you fallen for most often? Be honest about your own susceptibility.` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who recognizes manipulation patterns automatically, what does that protect you from over decades?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one shopping site or app you use. Look for specific dark patterns. How many can you spot?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where marketing techniques that seem manipulative are actually fine? Where exactly does informed consent draw the line?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one advertisement you find particularly persuasive. What specific techniques is it using? Are they legitimate or manipulative?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Marketing literacy protects you and your family from money loss every day. Two paths.`,
          familyActivity: {
            title: `The Family Dark Pattern Hunt`,
            duration: `30 minutes`,
            description: `As a family, spend 30 minutes browsing some commonly used shopping sites and subscription services. Try to identify dark patterns on each: pre-checked boxes, hidden cancellation, manufactured urgency, drip pricing, dark pattern checkout flows. Many adults haven't consciously named these patterns. Once you see them, they're everywhere. This activity often reveals subscriptions that family members didn't realize they had signed up for, due to dark pattern enrollment flows.`,
          },
          projectOption: {
            title: `The Manipulation Pattern Log, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, identify and document one specific dark pattern or manipulation technique you encountered. Could be online, in apps, in stores, in commercials. Write down: where you saw it, what technique it used, what the company was trying to get you to do. After 14 days, write 500 words on what you observed. You'll find that you encounter manipulation attempts 5-10 times per day, far more than you previously noticed. The awareness itself becomes a protective skill you'll have for life.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real applied media literacy.`,
          },
          identityQuestion: `If you can spot manipulation patterns automatically at 12, what does that save you and your future family over decades?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who spots dark patterns automatically before they cost me anything.`,
            `A person who can tell legitimate marketing from manipulation without becoming cynical about all of it.`,
            `Someone willing to wait 24 hours on any "urgent" purchase decision.`,
          ],
          saveKey: `identity_responses_mb_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can distinguish legitimate marketing from manipulation, identify specific dark patterns, articulate the FTC's role and limits, recognize industry self-defense rhetoric, and apply informed consent as a standard for evaluating marketing practices. You can now spot patterns that quietly cost most adults real money. Next time we go practical: how do people actually earn money? Salary, wages, tips, self-employment, equity. Different paths produce wildly different lifetime outcomes. Case Study format. See you there. — Ace`,
          badge: `pattern-spotter`,
          badgeName: `Pattern Spotter`,
          xpEarned: 75,
          competencies: [
            `Can distinguish legitimate marketing from manipulation`,
            `Identifies specific dark patterns (sneaking, urgency, misdirection, forced action)`,
            `Knows FTC's regulatory role and its limits`,
            `Recognizes industry self-defense rhetoric patterns`,
            `Can apply informed consent as a test for evaluating marketing practices`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Salary, Wage, Tips — How People Actually Earn`,
            hook: `Hourly wages, salaries, tips, commission, equity, self-employment. Each has different math and different lifetime trajectories. Three career paths examined.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L10 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
