// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L04 — Marketing and Branding Basics
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: C3 D2.Eco — Consumer behavior and markets;
//            Entrepreneurship education frameworks
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what marketing actually is, the difference between
//        branding and marketing, customer perspective (what people buy),
//        honest vs manipulative marketing
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-04`,
      title: `Marketing and Branding Basics`,
      duration: 18,
      xpReward: 75,
      badge: `brand-thinker`,
      badgeName: `Brand Thinker`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. You have a great product. Now what? Most great products fail because nobody hears about them. MARKETING is how businesses tell people about what they make. BRANDING is what makes people remember and trust your business. Both matter. Both are misunderstood. Today we cover what marketing and branding actually are, what people actually buy, and the difference between honest marketing and manipulative marketing. Let's go.`,
          headline: `Marketing and Branding Basics`,
          subtitle: `How businesses find customers and earn trust`,
          visual: `/ue-assets/money/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Marketing Actually Is`,
          paragraphs: [
            `MARKETING is everything a business does to TELL people about its product or service. It includes ADVERTISING (ads on TV, social media, websites), CONTENT (blog posts, videos, podcasts), SOCIAL MEDIA presence, EMAIL newsletters, and even SIGNS on a store window. Marketing's job is to help potential customers FIND the business and UNDERSTAND what it offers.`,
            `Marketing isn't tricking people. The BEST marketing connects real products with real people who actually want them. If a dog walker's marketing reaches busy dog owners in her neighborhood, she's helping THEM solve a real problem. If a tutor's marketing reaches parents whose kids need help with math, the tutor is helping THEM. Good marketing is helpful. Bad marketing is annoying or dishonest. The difference matters more than most people realize.`,
          ],
          image: `/ue-assets/money/l04-s1-what-is.webp`,
          imageCaption: `Marketing: how businesses tell people about what they offer.`,
          vocab: [
            {
              word: `marketing`,
              definition: `Everything a business does to tell people about its product or service. Includes advertising, social media, content, email, and more. Good marketing connects real products to real customers.`,
              audioPrompt: `Marketing is everything a business does to tell people about its product or service, {name}. It includes advertising on TV or social media. Content like blog posts and videos. Social media posts. Email newsletters. Even signs on a store window. Marketing's job is to help potential customers find the business and understand what it offers. Good marketing connects real products to real people who actually want them. Bad marketing is annoying or dishonest. The best marketing feels helpful, not pushy.`,
            },
            {
              word: `target audience`,
              definition: `The specific group of people a business intends to reach with its marketing. Knowing exactly who you're talking to makes marketing much more effective than trying to reach everyone.`,
              audioPrompt: `A target audience is the specific group of people a business intends to reach with its marketing, {name}. Instead of trying to reach everyone (which usually means reaching no one effectively), smart businesses define exactly who they're talking to. A dog-walking business might target busy professionals with dogs in a specific neighborhood. A tutoring business might target parents of kids struggling with math in grades 6 to 8. The more specific the target, the easier it is to write messages that actually connect with the right people.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Branding Is Different From Marketing`,
          paragraphs: [
            `BRANDING is what people THINK and FEEL when they hear your business's name. Apple's brand is about clean design and creativity. Patagonia's brand is about outdoor adventure and protecting the planet. Nike's brand is about athletic performance and pushing yourself. A brand isn't a logo, although the logo is part of it. A brand isn't a color scheme, although color is part of it. A brand is the OVERALL FEELING people have about your business.`,
            `Branding takes a long time to build. It includes every choice the business makes: the products it offers, how they look and feel, how customer service treats people, the messages used in marketing, and even the company's values. Strong brands EARN trust over years. Weak brands fade quickly. A great product without a clear brand can struggle. A clear brand with a decent product often wins. Coreverse's brand is about consciousness AND academics together, age-appropriate depth on real topics, and treating kids like the thinkers they are. That brand identity shapes every lesson, every guide, every Family Adventure.`,
          ],
          image: `/ue-assets/money/l04-s2-branding.webp`,
          imageCaption: `Branding is what people feel about your business. Built through consistent choices over time.`,
          vocab: [
            {
              word: `branding`,
              definition: `What people think and feel about a business when they hear its name. Built through consistent choices over time. More than just a logo or color scheme.`,
              audioPrompt: `Branding is what people think and feel about a business when they hear its name, {name}. Apple's brand is about clean design and creativity. Patagonia's brand is about outdoor adventure and protecting the planet. Nike's brand is about athletic performance. A brand isn't just a logo, although the logo is part of it. A brand is the overall feeling people have. Branding includes every choice: products, design, customer service, marketing messages, company values. Strong brands earn trust over years and shape everything the business does.`,
            },
            {
              word: `logo`,
              definition: `The visual symbol that represents a business's brand. Part of branding, but not the whole brand. Good logos are simple, recognizable, and consistent with the overall feeling the brand wants to create.`,
              audioPrompt: `A logo is the visual symbol that represents a business's brand, {name}. Apple's apple. Nike's swoosh. McDonald's golden arches. Logos are instantly recognizable and create immediate associations. A good logo is simple, memorable, and consistent with the overall feeling the brand wants to create. But a logo is just one piece of branding, not the whole thing. A company with a great logo and bad products will fail. A company with a humble logo and amazing products can succeed. The brand is the total experience, not just the symbol.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What People Actually Buy`,
          paragraphs: [
            `Here's something important. People don't really buy PRODUCTS. They buy SOLUTIONS and FEELINGS. Someone buying a new bike isn't just buying a bike. They're buying freedom, exercise, or transportation to school. Someone buying organic vegetables isn't just buying food. They're buying health, ethics, or peace of mind. The product is HOW you deliver the real thing they want. Smart marketers understand this. They market the SOLUTION or FEELING, not just the product specs.`,
            `Apple doesn't sell phones. They sell creativity and connection. Nike doesn't sell shoes. They sell athletic identity and "just do it." Disney doesn't sell movies. They sell magic and family memories. This is why the SAME product can be marketed in completely different ways. A bottle of water can be sold as "hydration for athletes" OR "elegant water for fancy dinners" OR "emergency supply for disasters." Same water, three different sales angles based on what people are really buying. Understanding what your customer is really after is more important than understanding your product.`,
          ],
          image: `/ue-assets/money/l04-s3-real-buy.webp`,
          imageCaption: `People buy solutions and feelings, not products. Smart marketing knows the difference.`,
          vocab: [
            {
              word: `customer`,
              definition: `The person who buys your product or service. Real customers buy solutions to problems or feelings they want — not just products. Understanding what they actually want matters most.`,
              audioPrompt: `A customer is the person who buys your product or service, {name}. Real customers don't really buy products. They buy solutions to problems and feelings they want. Someone buying a bike is buying freedom or exercise or transportation. Someone buying a phone is buying connection or creativity. Someone buying healthy food is buying health and peace of mind. Smart businesses understand what customers are really after, not just what the product is on the surface. The same product can be sold differently to different customers depending on what they want.`,
            },
            {
              word: `value proposition`,
              definition: `A clear statement of what a business offers, who it's for, and why someone should choose it over alternatives. The core message of honest marketing.`,
              audioPrompt: `A value proposition is a clear statement of what a business offers, who it's for, and why someone should choose it, {name}. "We make gentle soap for people with sensitive skin, using only ingredients you'd recognize" is a value proposition. It's specific. It names the customer. It explains the benefit. The best value propositions are honest and simple. They connect a real solution to a real customer need. When businesses don't have a clear value proposition, their marketing tends to be vague and their customers tend to be confused.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Honest Marketing vs Manipulation`,
          paragraphs: [
            `Marketing can be HONEST or MANIPULATIVE. The difference matters a lot. Honest marketing accurately describes a product, highlights real benefits, and helps the customer make an informed choice. Manipulative marketing exaggerates, hides problems, creates false fears, or pressures people to buy things they don't need. Manipulative marketing might work in the SHORT TERM, but it almost always destroys the brand long term. People remember being tricked. They don't come back, and they tell their friends.`,
            `Sometimes marketing is also DECEPTIVE in subtler ways. Influencers who don't disclose they're paid. Ads designed to look like news articles. Health claims that aren't backed by evidence. Photoshopped images that change how products actually look. None of this is illegal in many cases, but it crosses ethical lines. Ace's view: in the long run, honest marketing wins. Brands that tell the truth, treat customers with respect, and deliver what they promise build trust that compounds (just like interest from L02). Trust is the most valuable thing a business can build. Don't waste it.`,
          ],
          image: `/ue-assets/money/l04-s4-honest.webp`,
          imageCaption: `Honest marketing builds trust. Trust compounds. Brands that earn it win long-term.`,
          vocab: [
            {
              word: `advertising`,
              definition: `One specific kind of marketing: paid messages designed to promote a product or service. Includes TV ads, social media ads, billboards, online ads, sponsored content, and more.`,
              audioPrompt: `Advertising is one specific kind of marketing, {name}. It's paid messages designed to promote a product or service. TV ads. Social media ads. Billboards. Online ads. Sponsored content from influencers. Advertising is just one part of marketing. Other marketing includes content, social media posts, email newsletters, and word of mouth. Advertising can be honest or manipulative. Honest ads accurately describe benefits. Manipulative ads exaggerate, hide problems, or pressure people to buy things they don't need. The best brands build trust by being honest in their advertising.`,
            },
            {
              word: `influencer`,
              definition: `A person with a large online following who promotes products or services to their audience, usually for payment. Must disclose paid promotions; undisclosed ads are considered deceptive.`,
              audioPrompt: `An influencer is a person with a large online following who promotes products or services to their audience, {name}. When an influencer says "I love this product" or uses it on screen, they're often paid by the brand to do so. This is called sponsored content and is a form of advertising. Influencer marketing can be honest (when they genuinely like the product and disclose being paid) or manipulative (when they promote things they don't actually use and hide that they're paid). Undisclosed paid promotions are considered deceptive advertising.`,
            },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four marketing messages. For each one, decide what it's really doing: SELLING A SOLUTION (honest marketing about what the customer gets), BUILDING A BRAND (creating a feeling or identity), or MANIPULATING (exaggerating, scaring, or pressuring)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `solution`,    label: `Selling a Solution`,    color: `#34D399`, description: `Honest marketing that helps customers see how the product solves their real problem.` },
            { id: `brand`,       label: `Building a Brand`,       color: `#60A5FA`, description: `Creating a feeling, identity, or association with the business.` },
            { id: `manipulate`,  label: `Manipulating`,           color: `#F87171`, description: `Exaggerating, scaring, pressuring, or hiding the truth to push a sale.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Message #1`,
              clues: [
                { text: `A homemade soap business posts: "Our soap is gentle for sensitive skin because we don't use harsh chemicals."` },
                { text: `The website lists every single ingredient honestly.` },
                { text: `Customers with sensitive skin can decide if it might work for them.` },
              ],
              correctAnswer: `solution`,
              realWorldExample: `Many small skincare brands market this way.`,
              explanation: `Honest about what's in the product. Connects to a real customer problem (sensitive skin). Lets the customer decide. Pure honest solution-marketing.`,
            },
            {
              id: `case-2`,
              caseTitle: `Message #2`,
              clues: [
                { text: `A surfing brand posts: "For people who feel most alive when the ocean is alive."` },
                { text: `The ad shows surfers, sunsets, beaches, and waves.` },
                { text: `It doesn't actually describe any specific product features.` },
              ],
              correctAnswer: `brand`,
              realWorldExample: `Many lifestyle brands market this way (Patagonia, Quiksilver, etc.).`,
              explanation: `Builds a feeling and identity, not a sales pitch. The customer thinks "that's me" and remembers the brand. Pure brand-building. Most successful lifestyle brands use this style.`,
            },
            {
              id: `case-3`,
              caseTitle: `Message #3`,
              clues: [
                { text: `An ad says: "Only 5 left in stock! Order now or miss out forever!"` },
                { text: `The actual product has been in stock for months.` },
                { text: `The seller created the "only 5 left" urgency to pressure buyers.` },
              ],
              correctAnswer: `manipulate`,
              realWorldExample: `Fake urgency is one of the most common manipulation tactics.`,
              explanation: `False urgency. Creating fake pressure. Hiding the truth. Pure manipulation. This works in the short term but damages trust. People who learn they were tricked don't come back. Long-term, this kind of marketing destroys brands.`,
            },
            {
              id: `case-4`,
              caseTitle: `Message #4 — The Tricky One`,
              clues: [
                { text: `A toothpaste ad says: "Used by 9 out of 10 dentists."` },
                { text: `The fine print says the study only asked dentists in one small region, included only 50 dentists, and was paid for by the toothpaste company.` },
                { text: `Most viewers don't read the fine print and assume the claim is solid.` },
              ],
              correctAnswer: `manipulate`,
              realWorldExample: `Cherry-picked or biased studies in ads are a classic manipulation tactic.`,
              explanation: `Tricky because the SURFACE looks like a solution claim. "Dentist-approved" sounds great. But the truth is the study was tiny, biased, and paid for by the seller. This is statistical manipulation. The "9 out of 10" stat is technically true but designed to mislead. Lesson: always question impressive-sounding stats. Where's the data from? Who paid for it? How big was the study? Manipulation hides in detail people don't read.`,
            },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What is MARKETING?`,
              options: [
                `Just ads`,
                `Everything a business does to tell people about its product or service — including ads, content, social media, email, signs`,
                `Tricking people into buying`,
                `Only social media`,
              ],
              correctIndex: 1,
              explanation: `Marketing is everything that connects your business to potential customers. Ads are part of it. So are social media, content, email, signs, word of mouth. The goal is helping people find and understand what you offer.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What's the difference between MARKETING and BRANDING?`,
              options: [
                `They're the same`,
                `Marketing is what you DO to tell people. Branding is what people THINK AND FEEL about your business overall.`,
                `Marketing is for products, branding is for services`,
                `Branding is just the logo`,
              ],
              correctIndex: 1,
              explanation: `Marketing is action. Branding is perception. A logo is part of a brand but isn't the whole brand. A brand is the overall feeling — built over years through consistent choices in everything the business does.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What do people REALLY buy when they buy a product?`,
              options: [
                `Just the physical item`,
                `Solutions to problems or feelings they want — the product is HOW you deliver what they really want`,
                `Whatever's cheapest`,
                `Whatever's nearest`,
              ],
              correctIndex: 1,
              explanation: `People buy solutions and feelings, not products. Someone buying a bike is buying freedom or exercise. Someone buying a phone is buying connection or creativity. Smart marketers understand what customers really want, not just what the product technically is.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `Nike doesn't sell shoes. What do they REALLY sell?`,
              options: [
                `Just shoes`,
                `Athletic identity and the feeling of "just do it" — shoes are how they deliver that`,
                `Marketing`,
                `Sports`,
              ],
              correctIndex: 1,
              explanation: `Nike's products are shoes, clothes, and equipment. Their actual offering is an athletic identity. The "Just Do It" slogan isn't about shoes. It's about who you become when you push yourself. The shoes are the delivery mechanism.` },

            { id: `l04-q5`, format: `true-false`,
              question: `True or false: A logo IS a brand.`,
              correctAnswer: false,
              explanation: `False. A logo is PART of a brand, but a brand is the overall feeling people have about your business. Apple's brand isn't just the apple logo. It's clean design, creativity, ease of use, and many other qualities. Logos are visual symbols. Brands are total experiences.` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `What is ADVERTISING?`,
              options: [
                `Same as marketing`,
                `One specific kind of marketing — paid messages designed to promote a product or service`,
                `Just billboards`,
                `Always manipulative`,
              ],
              correctIndex: 1,
              explanation: `Advertising is paid messages: TV ads, online ads, social media ads, billboards, sponsored content. It's one piece of marketing, not the whole thing. Other marketing includes free things like organic social media, content, and word of mouth.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `What's the difference between HONEST and MANIPULATIVE marketing?`,
              options: [
                `No difference`,
                `Honest marketing accurately describes the product and helps customers make informed choices. Manipulative marketing exaggerates, scares, or pressures.`,
                `Honest marketing is boring`,
                `Both are the same`,
              ],
              correctIndex: 1,
              explanation: `Honest marketing tells the truth. Manipulative marketing tricks people. Manipulation might work short-term, but destroys trust long-term. People remember being tricked. Strong brands are built on honesty.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `Why is TRUST so valuable to a brand?`,
              options: [
                `It isn't really`,
                `Because trust compounds — like compound interest. Once earned, it brings repeat customers, recommendations, and tolerance for occasional mistakes.`,
                `Customers don't care about trust`,
                `Only big brands need trust`,
              ],
              correctIndex: 1,
              explanation: `Trust is one of the most valuable things a business can build. It brings repeat customers, word-of-mouth recommendations, and forgiveness when something goes wrong. Like compound interest, trust grows over time. Manipulative marketing destroys it. Honest marketing builds it.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick a brand you really like or trust. What does that brand make you FEEL? Is it about the product, or about something bigger?` },
            { id: `r2`, text: `Think of an ad you've seen recently. Was it honest, brand-building, or manipulative? What clues told you?` },
            { id: `r3`, text: `If you started a business, what's ONE feeling you'd want customers to associate with your brand? Why?` },
            { id: `r4`, text: `Ace says trust compounds like interest. Where in your life have you seen trust grow slowly and then pay off in big ways?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Marketing and branding are happening to you ALL the time. Every ad. Every product placement. Every influencer post. Every label. Some of it is honest and useful. Some of it is designed to manipulate. The skill of telling the difference is one of the most valuable you can develop as a young person growing up in an ad-saturated world. The marketing-literate consumer makes better decisions, wastes less money, and isn't easily tricked. Ace's note: the same skills also help you market well if you ever start your own business. You see both sides clearly.`,
          familyAdventure: `Family Marketing Detective. Spend 15 minutes together watching some commercials, scrolling some social media ads, or examining product packaging in your kitchen. For each ad, ask: What feeling is this trying to create? What's the actual product behind it? Is the marketing honest, brand-building, or manipulative? Why? This exercise builds skills that last a lifetime.`,
          creativePrompt: {
            intro: `Imagine YOU are about to launch a small business. Write the marketing pitch you'd use to find your first customers.`,
            floor: `Write at least 5 sentences. Cover what problem your business solves, who it's for, and one feeling you want customers to associate with your brand.`,
            stretch: `Write 8 to 10 sentences. Include your specific customer, the real problem you solve, how your brand feels different from competitors, and an honest description of what they get.`,
            open: `Write as much as you want. Build a full marketing pitch. Cover honest solution-marketing for your product. Build the brand feeling you want customers to associate with you. Avoid any manipulation. Show what makes your business uniquely worth trusting.`,
            frames: [
              `My business is ___, and we solve ___.`,
              `If you ever need ___, we're for you.`,
              `What makes us different is ___.`,
              `When you work with us, you'll feel ___.`,
              `We promise to ___, and we won't ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what marketing is, how branding differs, what people actually buy (solutions and feelings, not just products), and the difference between honest and manipulative marketing. Next lesson: the two sides of every financial life. INCOME and EXPENSES, and why the gap between them is where freedom lives. — Ace.`,
          badge: `brand-thinker`,
          badgeName: `Brand Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
