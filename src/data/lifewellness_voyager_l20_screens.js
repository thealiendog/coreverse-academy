// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L20 — CAPSTONE: Your Wellness Philosophy
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Capstone Synthesis Across Life Wellness Band
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// CAPSTONE LESSON:
//   - 100 XP (vs 75 for standard lessons)
//   - 45 minutes (vs 35 for standard lessons)
//   - Synthesizes all 19 prior lessons in the band
//   - Forces commitment to organizing wellness philosophy
//
// Interaction format: ARGUMENT BUILDER (integration / meaning / resilience as organizing frame)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l20-v1";

const LIFEWELLNESS_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-20`,
      title: `Your Wellness Philosophy (Capstone)`,
      duration: 45,
      xpReward: 100,
      badge: `wellness-philosopher`,
      badgeName: `Wellness Philosopher`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, this is it. The capstone. Twenty lessons ago, we started with what wellness actually is, and over the band we built framework across sleep, stress, food, movement, mental health, habits, attention, emotion, friendships, family, energy management, money, tech, body image, grief, meaning, sustainable practice, and help-seeking. Today is the synthesis: building your wellness philosophy. Not memorizing one. Building one. The philosophy that organizes how you'll practice wellness across decades. Three serious positions on how to organize a wellness philosophy will be presented, each integrating the band's frameworks differently. You'll commit to one as your primary organizing frame (while integrating elements of others). The forcing function matters: most adults around you don't have explicit wellness philosophy and absorb whatever cultural defaults are around them; building deliberate framework at 12 protects against decades of struggling with patterns you didn't consciously choose. This is 45 minutes and 100 XP because it deserves more time than other lessons. Let's build the framework you'll carry forward.`,
          headline: `Your Wellness Philosophy (Capstone)`,
          subtitle: `Synthesis across 19 lessons. Three positions on organizing a wellness philosophy. Commit.`,
          visual: `/voyager-assets/life-wellness/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What This Band Has Built`,
          paragraphs: [
            `Before working through the capstone argument, take a moment to recognize what you've built across 19 lessons. Most adolescents your age don't have any of this framework explicitly. Most adults around you don't either; they absorbed whatever cultural defaults were available and often struggle with patterns they never explicitly chose.`,
            `What you have framework for. The biology of sleep (L02) and stress (L03), and why both matter beyond intuition. Food and movement (L04, L05) framed beyond diet culture and exercise-as-punishment. Mental health basics (L06) with explicit framework for recognizing concerns and seeking help. Habits and behavior change (L07) using research-supported approaches. Attention and focus (L08) in the attention economy. Emotional regulation (L09) using evidence-based skills. Friendship as wellness (L10) with research on social connection's biological importance. Family relationships (L11) including parentification and family communication. Energy management (L12) for sustainable practice across years. Money and wellbeing (L13) with diminishing returns and materialism research. Tech and screen use (L14) navigating contested research. Body image (L15) with media literacy framework. Grief and difficult experiences (L16) with continuing bonds and ambiguous loss. Meaning and purpose (L17) with three serious positions. Building wellness practices that last (L18) with failure-mode recognition and research-supported alternatives. When to seek help (L19) with three-tier source evaluation applied to mental health resources.`,
            `What's specific about this framework. It's research-grounded across multiple disciplines. It distinguishes evidence-based practice from pop framings (most of which it explicitly critiques). It integrates across dimensions rather than treating each separately. It acknowledges genuine complexity and contested topics rather than oversimplifying. It includes appropriate escalation paths and crisis resources. It's calibrated to the conditions your generation actually faces (algorithmic comparison, attention economy, structural uncertainty, mental health pressures) rather than generic frameworks.`,
            `What you don't have yet. Practice. Knowing the frameworks isn't the same as living them. Many adults know the frameworks (they read the same research) and still struggle to practice them. The capstone today is partly about turning literacy into philosophy that can drive practice (which is what L18 specifically addressed) but which requires ongoing commitment to actually do.`,
            `One framing. The 19 lessons could be organized in different ways. They could be a list of separate wellness topics that each have their own framework. They could be a collection of practices that compound over time. They could be a single integrated framework with internal connections. The capstone today is partly about deciding which organization makes sense for you, because the organization shapes how you'll actually practice across decades.`,
            `One last framing before working through the positions. The wellness philosophy you build today isn't permanent. You'll refine it across decades as life teaches you what works and what doesn't. The point isn't to get it permanently right at 12; it's to build deliberate framework now that you can refine over time, rather than absorbing cultural defaults that you'd later have to identify and undo. Most adults who develop sophisticated wellness practice did so after decades of struggle that explicit framework at 12 might have prevented.`,
          ],
          image: `/voyager-assets/life-wellness/l20-s1-band-recap.webp`,
          imageCaption: `Framework across 19 lessons covering all dimensions of wellness. Research-grounded across disciplines. Calibrated to current generational conditions. Today: turning the framework into philosophy that drives practice.`,
          vocab: [
            {
              word: `what the band has built`,
              definition: `Across 19 lessons: framework for sleep (L02), stress (L03), food (L04), movement (L05), mental health (L06), habits (L07), attention (L08), emotion (L09), friendships (L10), family (L11), energy (L12), money (L13), tech (L14), body image (L15), grief (L16), meaning (L17), sustainable practice (L18), help-seeking (L19). Research-grounded across disciplines. Distinguishes evidence-based from pop framings. Integrates across dimensions. Includes appropriate escalation and crisis resources. Calibrated to current generational conditions. Most adolescents don't have this framework explicitly; most adults around you don't either.`,
              audioPrompt: `What the band has built spans 19 lessons, {name}. Most adolescents your age don't have any of this framework explicitly. Most adults around you don't either; they absorbed whatever cultural defaults were available and often struggle with patterns they never explicitly chose. You have framework for the biology of sleep and stress, and why both matter beyond intuition. Food and movement framed beyond diet culture and exercise-as-punishment. Mental health basics with explicit framework for recognizing concerns and seeking help. Habits and behavior change using research-supported approaches. Attention and focus in the attention economy. Emotional regulation using evidence-based skills. Friendship as wellness with research on social connection's biological importance. Family relationships including parentification and family communication. Energy management for sustainable practice across years. Money and wellbeing with diminishing returns and materialism research. Tech and screen use navigating contested research. Body image with media literacy framework. Grief and difficult experiences with continuing bonds and ambiguous loss. Meaning and purpose with three serious positions. Building wellness practices that last with failure-mode recognition and research-supported alternatives. When to seek help with three-tier source evaluation applied to mental health resources.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Wellness As Integration`,
          paragraphs: [
            `The first serious position for organizing a wellness philosophy frames wellness as balanced multidimensional practice across all the dimensions the band covered. No single dimension is primary; wellness emerges from balance across sleep, movement, food, mental health, attention, emotion, relationships, family, energy, money, tech, body image, meaning, and the others.`,
            `Specific claims. Each dimension contributes to overall wellbeing in ways research has documented. Weakness in any one dimension reduces overall wellbeing even when other dimensions are strong (poor sleep undermines exercise benefits; isolation undermines meaning practice; etc.). Balance over time matters more than perfection in any specific dimension; sustainable practice across decades produces compounding benefits no single dimension alone could. The philosophical pedigree spans many traditions: holistic health frameworks; many indigenous traditions emphasizing balance among dimensions; current integrative medicine; multidimensional wellness models in psychology and public health.`,
            `Research support. Multiple research traditions converge on multidimensional models of wellbeing. Martin Seligman's PERMA model (Positive emotion, Engagement, Relationships, Meaning, Accomplishment): wellbeing is best understood as multidimensional with several roughly equal components. Carol Ryff's psychological wellbeing scales: six dimensions (autonomy, environmental mastery, personal growth, positive relations, purpose, self-acceptance) that together constitute flourishing. Public health frameworks (WHO definition of health, social determinants of health): wellbeing is multidimensional with no single component primary.`,
            `What this position implies practically. Build practice across all dimensions rather than optimizing one. Recognize when one dimension is being neglected and rebalance. Don't sacrifice some dimensions (sleep, relationships, meaning) for others (achievement, work, productivity); sacrifices in dimension-balance produce predictable wellbeing costs. Maintain integration framework as primary even when specific dimensions are challenging; the framework itself is the organizing principle.`,
            `Strengths of the position. Acknowledges what research actually shows about multidimensional nature of wellbeing. Provides framework for recognizing imbalance. Doesn't reduce wellbeing to any single dimension that may not capture everything. Resilient across life conditions (different dimensions may matter more at different times; the framework adapts).`,
            `Limits of the position. Can become bland generalist framework without specific direction in any dimension. May not provide enough specific guidance for genuinely difficult decisions about how to allocate time and energy. Can feel like trying to do everything which is itself a wellness pattern that produces burnout (covered in L18). Doesn't fully account for what gives meaning to all the practice in the first place (the meaning question from L17).`,
          ],
          image: `/voyager-assets/life-wellness/l20-s2-integration.webp`,
          imageCaption: `Position 1: wellness as integration across all dimensions. Seligman PERMA, Ryff psychological wellbeing, public health frameworks. Strengths: acknowledges multidimensional nature, framework for rebalancing. Limits: can become bland generalism.`,
          vocab: [
            {
              word: `wellness as integration position`,
              definition: `Framework: wellness is balanced multidimensional practice across all dimensions covered in the band. No single dimension primary; weakness in any reduces overall wellbeing. Defenders: holistic health frameworks; indigenous traditions emphasizing balance; integrative medicine; Seligman PERMA (Positive emotion, Engagement, Relationships, Meaning, Accomplishment); Ryff psychological wellbeing scales (6 dimensions); WHO health definition. Strengths: acknowledges multidimensional nature; framework for rebalancing; resilient across conditions. Limits: can become bland generalism without specific direction; may not guide difficult allocation decisions; doesn't fully account for what gives meaning to the practice.`,
              audioPrompt: `The wellness as integration position frames wellness as balanced multidimensional practice across all the dimensions the band covered, {name}. No single dimension is primary; wellness emerges from balance across sleep, movement, food, mental health, attention, emotion, relationships, family, energy, money, tech, body image, meaning, and the others. Each dimension contributes to overall wellbeing in ways research has documented. Weakness in any one dimension reduces overall wellbeing even when other dimensions are strong. The philosophical pedigree spans many traditions: holistic health frameworks; many indigenous traditions emphasizing balance; current integrative medicine; multidimensional wellness models. Research support: Martin Seligman's PERMA model: wellbeing is best understood as multidimensional with several roughly equal components: Positive emotion, Engagement, Relationships, Meaning, Accomplishment. Carol Ryff's psychological wellbeing scales: six dimensions that together constitute flourishing. Public health frameworks like the WHO definition of health: wellbeing is multidimensional with no single component primary.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Wellness As Meaning`,
          paragraphs: [
            `The second serious position frames wellness as the practices that serve a chosen meaning. The dimensions of the band aren't ends in themselves; they're means to a life that's worth living for reasons you've consciously chosen. Why bother sleeping well, exercising, managing emotions, investing in relationships, if not in service of something you actually care about?`,
            `Specific claims. Meaning provides the foundation that makes wellness practice sustainable across decades (L17 and L18). Wellness practice without meaning is brittle; it doesn't survive the inevitable times when motivation flags and discipline fails. Different meanings imply different specific wellness practices: someone whose meaning is contribution (Frankl framing) practices differently than someone whose meaning is deep relationship (Harvard Study framing) or self-development (eudaimonic framing). The dimensions are instrumental; what you're building toward is primary.`,
            `Research support. Frankl's logotherapy and the research it spawned (L17): meaning sustains through difficulty in ways nothing else does. Steger's meaning in life research: meaning predicts wellbeing more strongly than many factors getting more attention. Self-determination theory's basic needs framework: autonomy, competence, relatedness all serve a deeper psychological purpose. Acceptance and Commitment Therapy's values-based action research: action consistent with chosen values produces wellbeing benefits beyond just dimensional balance. Harvard Study of Adult Development: the meaning that emerged across 80 years of following people was relationships, not generic balance.`,
            `Philosophical pedigree. Aristotle's eudaimonic tradition: flourishing through exercise of capacities toward what humans are for. Religious traditions: wellness practices in service of relationship with the divine or contribution to community. Existentialist tradition: meaning constructed deliberately in face of life's lack of inherent meaning. Contemplative traditions: practice in service of awakening or liberation. Many cultures across history have organized wellness around meaning rather than around balanced dimensions.`,
            `What this position implies practically. First identify the meaning: what are you living for? (Three positions from L17: contribution, relationships, self-development; or your own.) Then build wellness practice that serves that meaning. Recognize that different meanings imply different specific allocation. Sleep matters because it serves the meaning; exercise matters because it serves the meaning; relationships matter because they serve the meaning (or because they ARE the meaning, in position 2 from L17). Allow the meaning to organize the practice rather than treating practice as primary.`,
            `Strengths of the position. Provides the "why" that other positions can underweight. Connects practice to the deepest human questions. Sustainable across decades because rooted in something stable. Adapts to specific individual life and values. Aligns with substantial research on meaning's importance.`,
            `Limits of the position. Requires you to have or develop sense of meaning, which is itself the question for many adolescents and adults. Can be co-opted into single-minded pursuit that neglects basic dimensional balance (people who pursue meaning while destroying sleep, relationships, and health often produce neither meaning nor wellness). Different chosen meanings can imply quite different practices, which means there's no universal wellness practice; what's wellness for one meaning may not be for another.`,
          ],
          image: `/voyager-assets/life-wellness/l20-s3-meaning.webp`,
          imageCaption: `Position 2: wellness as meaning. Frankl, Steger, self-determination theory, ACT, Harvard Study. Practice serves what you're living for. Strengths: provides the "why," sustainable. Limits: requires sense of meaning, can neglect basic balance.`,
          vocab: [
            {
              word: `wellness as meaning position`,
              definition: `Framework: wellness practices serve a chosen meaning; dimensions are means to a life worth living for reasons you've chosen, not ends in themselves. Different meanings imply different specific practices. Defenders: Frankl logotherapy; Steger meaning research; self-determination theory; ACT values-based action; Harvard Study findings; Aristotle eudaimonic tradition; religious traditions; existentialist tradition; contemplative traditions. Strengths: provides the "why"; sustainable across decades because rooted in something stable; adapts to specific life. Limits: requires sense of meaning (itself the question); can be co-opted into single-minded pursuit that neglects basic balance; different chosen meanings imply different practices.`,
              audioPrompt: `The wellness as meaning position frames wellness as the practices that serve a chosen meaning, {name}. The dimensions of the band aren't ends in themselves; they're means to a life that's worth living for reasons you've consciously chosen. Why bother sleeping well, exercising, managing emotions, investing in relationships, if not in service of something you actually care about? Meaning provides the foundation that makes wellness practice sustainable across decades. Wellness practice without meaning is brittle; it doesn't survive the inevitable times when motivation flags and discipline fails. Different meanings imply different specific wellness practices: someone whose meaning is contribution practices differently than someone whose meaning is deep relationship or self-development. Frankl's logotherapy and the research it spawned: meaning sustains through difficulty in ways nothing else does. Steger's meaning in life research: meaning predicts wellbeing more strongly than many factors getting more attention. Harvard Study of Adult Development: the meaning that emerged across 80 years of following people was relationships, not generic balance.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Wellness As Resilience And Capacity`,
          paragraphs: [
            `The third serious position frames wellness as building capacity to navigate whatever life brings. Life will involve difficulty: stress, loss, change, illness, transitions, relationships that end, plans that don't work out. The wellness question isn't how to engineer a balanced or meaningful life but how to build the capacity to remain functional, present, and growing through inevitable difficulty.`,
            `Specific claims. Difficulty is universal; the question isn't whether life will be hard but how prepared you'll be when it is. All wellness dimensions ultimately build capacity: sleep builds capacity to function under stress; exercise builds capacity to handle physical demand; emotional skills build capacity to regulate through difficult emotions; relationships build capacity to be supported and to support; meaning builds capacity to endure difficulty for reasons that matter; grief framework builds capacity to navigate inevitable losses. The integration is around capacity rather than around dimensional balance or specific meanings.`,
            `Research support. George Bonanno's resilience research (covered in L16): most people are resilient through loss and difficulty; the question is what supports resilience. Calhoun and Tedeschi's post-traumatic growth research: people can grow through difficulty in specific ways that wellness practice supports. Stress research: people with better wellness practice (sleep, exercise, mental health framework, relationships) handle stress dramatically better than people without; the capacity is built before it's needed. Crisis intervention research: people with developed coping framework navigate crises better than people without.`,
            `Philosophical pedigree. Stoic philosophy (Marcus Aurelius, Seneca, Epictetus): wellness as developing the capacity to navigate fortune with equanimity. Buddhist philosophy: practice as building capacity to be with whatever arises without reactive suffering. Many indigenous traditions: practices that prepare individuals for the inevitable difficulties of life and community. Existentialist tradition: developing capacity to navigate life's lack of inherent meaning. These traditions all emphasize wellness as capacity rather than as state.`,
            `What this position implies practically. Build practice in each dimension with capacity-building as the primary purpose. Sleep practice not for daily feeling-good but for the capacity to handle inevitable difficult periods. Emotional regulation skills not for managing current emotion but for capacity to navigate emotions you can't anticipate. Relationship investment not just for current happiness but for the support networks you'll need when things get hard. Meaning construction not just for current direction but for what will sustain you when meaning is hard to find. Help-seeking literacy not for current need but for capacity to know how to access help when needed. Each dimension builds capacity.`,
            `Strengths of the position. Acknowledges what life actually involves (inevitable difficulty rather than engineered balance). Builds resilience that can be drawn on when needed. Generalizes across many life situations. Doesn't depend on current circumstances being favorable. Aligns with substantial research on resilience and post-traumatic growth.`,
            `Limits of the position. Can become preparation for difficulty without enjoyment of current life. Can produce constant "building capacity for crisis" without ever being in the life the capacity was for. Doesn't fully account for what makes the life worth navigating (the meaning question). May underweight current wellbeing in favor of future resilience.`,
            `One important framing across all three positions. They're not strictly exclusive. Most mature wellness philosophies integrate elements: integration (multidimensional practice), meaning (what it's for), and resilience (capacity for difficulty). The forcing function of choosing a primary frame is committing to what organizes everything else. Different primary frames produce different specific practices.`,
          ],
          image: `/voyager-assets/life-wellness/l20-s4-resilience.webp`,
          imageCaption: `Position 3: wellness as resilience and capacity. Bonanno resilience research, Calhoun & Tedeschi post-traumatic growth, Stoic philosophy, Buddhist traditions. Practice builds capacity for inevitable difficulty. Limits: preparation without enjoyment, underweights current wellbeing.`,
          vocab: [
            {
              word: `wellness as resilience and capacity position`,
              definition: `Framework: wellness builds capacity to navigate whatever life brings. Difficulty is universal; question is preparation. All dimensions ultimately build capacity (sleep, emotion, relationships, meaning, grief framework, help-seeking). Defenders: George Bonanno resilience research; Calhoun and Tedeschi post-traumatic growth; stress research; Stoic philosophy (Marcus Aurelius, Seneca, Epictetus); Buddhist philosophy; many indigenous traditions; existentialist tradition. Strengths: acknowledges inevitable difficulty; builds resilience that can be drawn on; generalizes across situations; doesn't depend on favorable circumstances. Limits: can become preparation without enjoyment; can produce constant building-for-crisis without being in the life; doesn't fully account for what makes life worth navigating.`,
              audioPrompt: `The wellness as resilience and capacity position frames wellness as building capacity to navigate whatever life brings, {name}. Life will involve difficulty: stress, loss, change, illness, transitions, relationships that end, plans that don't work out. The wellness question isn't how to engineer a balanced or meaningful life but how to build the capacity to remain functional, present, and growing through inevitable difficulty. All wellness dimensions ultimately build capacity. Sleep builds capacity to function under stress. Exercise builds capacity to handle physical demand. Emotional skills build capacity to regulate through difficult emotions. Relationships build capacity to be supported and to support. Meaning builds capacity to endure difficulty for reasons that matter. Grief framework builds capacity to navigate inevitable losses. George Bonanno's resilience research, covered in lesson 16: most people are resilient through loss and difficulty; the question is what supports resilience. Calhoun and Tedeschi's post-traumatic growth research: people can grow through difficulty in specific ways that wellness practice supports. Stoic philosophy from Marcus Aurelius, Seneca, and Epictetus: wellness as developing the capacity to navigate fortune with equanimity. Buddhist philosophy: practice as building capacity to be with whatever arises without reactive suffering.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Commit`,
          paragraphs: [
            `The three positions aren't strictly exclusive. Most mature wellness philosophies integrate elements of integration (multidimensional practice), meaning (what it's for), and resilience (capacity for difficulty). The forcing function of choosing a primary frame is committing to what organizes everything else.`,
            `One framing as you decide. Each position implies different specific practice. Integration: maintain balance across dimensions, rebalance when imbalances emerge, treat all dimensions as roughly equal. Meaning: identify what your wellness is for, allow that meaning to organize practice, accept different practices for different meanings. Resilience: build capacity in each dimension with future-difficulty in mind, prioritize practices that build capacity, accept that capacity-building involves difficulty.`,
            `Another framing. Different times in life may call for different primary emphases. Adolescence often calls for self-development and capacity-building; early adulthood often calls for relationship investment and meaning construction; middle adulthood often calls for integration and balance; later life often calls for meaning and resilience. The frame you commit to now may shift across decades; the question is what serves your current life.`,
            `One specific framing for your generation. The conditions you're navigating aren't favorable for any of the three positions automatically. Integration is harder when attention-economy products fragment focus; meaning is harder when structural uncertainty makes long-term commitment risky; resilience is harder when mental health pressures and isolation undermine the basis. Whichever frame you commit to, the work of building wellness practice in current conditions requires more deliberate framework than previous generations needed.`,
            `One last framing. You're 12. The wellness philosophy you commit to today isn't permanent. You'll refine it across decades. But the deliberate commitment now produces dramatically different trajectory than absorbing cultural defaults without examining them. Most adults around you didn't make this commitment explicitly; many absorbed consumerism, achievement, or self-focus as their organizing frame and spent years recognizing the cost. Building deliberate framework at this age is among the highest-leverage wellness investments available.`,
            `One reminder before you commit. The argument you build today is a starting point for ongoing reflection across decades, not a final answer. The point of the capstone isn't to identify the "right" position (none of the three is universally right) but to commit to a primary frame so that you can act from it across years. Commitment doesn't mean fixed forever; commitment means having a frame to start from and refine.`,
          ],
          image: `/voyager-assets/life-wellness/l20-s5-before.webp`,
          imageCaption: `Three positions for different life times. Generational conditions challenge all three; deliberate framework matters more now. Commitment is starting point for ongoing refinement, not final answer.`,
          vocab: [
            {
              word: `building your wellness philosophy`,
              definition: `Three positions for organizing a wellness philosophy: integration (multidimensional practice, no dimension primary), meaning (practices serve chosen meaning, dimensions instrumental), resilience (practices build capacity for inevitable difficulty). Not strictly exclusive; most mature philosophies integrate elements. Forcing function: committing to primary frame organizes everything else. Different times in life may call for different emphases (adolescence: self-development/capacity; early adulthood: relationships/meaning; middle adulthood: integration; later life: meaning/resilience). Current generational conditions challenge all three; deliberate framework matters more than for previous generations. Commitment is starting point for ongoing refinement.`,
              audioPrompt: `Building your wellness philosophy is what the capstone today is for, {name}. The three positions aren't strictly exclusive. Most mature wellness philosophies integrate elements of integration, meaning, and resilience. The forcing function of choosing a primary frame is committing to what organizes everything else. Each position implies different specific practice. Integration: maintain balance across dimensions, rebalance when imbalances emerge, treat all dimensions as roughly equal. Meaning: identify what your wellness is for, allow that meaning to organize practice, accept different practices for different meanings. Resilience: build capacity in each dimension with future-difficulty in mind, prioritize practices that build capacity, accept that capacity-building involves difficulty. Different times in life may call for different primary emphases. The conditions you're navigating aren't favorable for any of the three positions automatically. The wellness philosophy you commit to today isn't permanent. You'll refine it across decades. But the deliberate commitment now produces dramatically different trajectory than absorbing cultural defaults without examining them.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l20-argument-builder`,
          type: `argument-builder`,
          headline: `Your Wellness Philosophy`,
          intro: `Pick the position that best captures how you want to organize your wellness philosophy. Build your case with 4-5 pieces of evidence drawn from across the band. Then respond to the strongest counterargument. This is the synthesis. Build deliberately.`,
          positions: [
            {
              id: `integration`,
              label: `Integration: wellness is balanced multidimensional practice across all dimensions; no single dimension primary`,
              summary: `Each dimension contributes to overall wellbeing; weakness in any reduces total; balance over time matters more than perfection. Defenders: Seligman PERMA, Ryff psychological wellbeing scales, public health frameworks (WHO), holistic/indigenous traditions. Strengths: acknowledges multidimensional nature; rebalancing framework; resilient across conditions. Limits: can become bland generalism without specific direction; doesn't fully account for what gives meaning to the practice.`,
            },
            {
              id: `meaning`,
              label: `Meaning: wellness is the practices that serve a chosen meaning; dimensions are instrumental`,
              summary: `Meaning provides foundation that makes practice sustainable; practice without meaning is brittle; different meanings imply different practices. Defenders: Frankl logotherapy, Steger meaning research, self-determination theory, ACT values-based action, Harvard Study of Adult Development, Aristotle eudaimonia, religious/contemplative/existentialist traditions. Strengths: provides the "why"; sustainable across decades; adapts to specific life. Limits: requires sense of meaning; can produce single-minded pursuit that neglects balance.`,
            },
            {
              id: `resilience`,
              label: `Resilience and capacity: wellness builds capacity to navigate whatever life brings`,
              summary: `Difficulty is universal; question is preparation; all dimensions build capacity for inevitable difficulty. Defenders: Bonanno resilience research, Calhoun & Tedeschi post-traumatic growth, stress research, Stoic philosophy, Buddhist philosophy, indigenous traditions, existentialist tradition. Strengths: acknowledges inevitable difficulty; builds resilience that can be drawn on; generalizes across situations. Limits: can become preparation without enjoyment of current life; doesn't fully account for what makes life worth navigating.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Bonanno's resilience research (L16): most people are resilient through loss and difficulty; the question is what supports resilience. The capacity to handle difficulty is built before it's needed through specific practices.`,
              source: `Bonanno "The Other Side of Sadness"; ongoing resilience research`,
            },
            {
              id: `e2`,
              text: `Harvard Study of Adult Development (L10, L17): the longest study of human flourishing followed participants 80+ years; central finding is that quality of close relationships is the strongest predictor of long-term wellbeing across measures.`,
              source: `Harvard Study; Waldinger "The Good Life"`,
            },
            {
              id: `e3`,
              text: `Frankl's logotherapy (L17): meaning provides foundation that sustains through extreme difficulty; people who maintained sense of purpose in concentration camps were more likely to survive psychologically. Meaning predicts wellbeing across many measures.`,
              source: `Frankl "Man's Search for Meaning" 1946; ongoing meaning research`,
            },
            {
              id: `e4`,
              text: `Holt-Lunstad's loneliness research (L10): lack of social connection has health effects comparable to smoking 15 cigarettes per day; deep relationships are biologically protective. Strongest single research finding on what produces wellbeing.`,
              source: `Holt-Lunstad meta-analyses`,
            },
            {
              id: `e5`,
              text: `BJ Fogg's tiny habits and James Clear's identity-based change research (L18): sustainable practice comes from small consistent actions tied to identity rather than dramatic intensity tied to outcomes; sustainable beats intense across timeframes that matter.`,
              source: `Fogg "Tiny Habits" 2019; Clear "Atomic Habits" 2018`,
            },
            {
              id: `e6`,
              text: `Seligman's PERMA model: wellbeing is multidimensional (Positive emotion, Engagement, Relationships, Meaning, Accomplishment); no single dimension produces flourishing alone; balance matters.`,
              source: `Seligman positive psychology research`,
            },
            {
              id: `e7`,
              text: `Self-determination theory (Deci & Ryan, L17): three basic psychological needs (autonomy, competence, relatedness) drive wellbeing; each maps onto specific kinds of wellness practice.`,
              source: `Deci & Ryan; ongoing SDT research`,
            },
            {
              id: `e8`,
              text: `Engeln's beauty sickness research (L15), Wilkinson & Pickett inequality research (L13), Facebook internal research on Instagram and teen body image (L15): structural conditions produce documented wellbeing harms that individual practice alone can't fully address. Systemic awareness matters.`,
              source: `Engeln "Beauty Sick"; Wilkinson & Pickett "The Spirit Level"; Facebook Files 2021`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that wellness is something you can deliberately construct through framework and practice. But maybe the deepest wellness traditions across cultures have known something different: that the harder you work at engineering wellness, the more you put yourself outside the life you're trying to make well. The contemplative traditions, indigenous communities with intact wellness practices, religious traditions with sophisticated framework: they often don't have explicit 'wellness philosophy' as a separate project from living. The project itself can be the problem. People in dominant US culture have created an entire 'wellness industry' that profits from anxiety about wellness; the more we try to engineer it through frameworks like the ones you've been learning, the more we become alienated from the actual living that other traditions accept as the path. Maybe at 12 the right move isn't committing to a wellness philosophy but learning to live without one, to be present in your actual life rather than evaluating it from outside through framework. Why are we making wellness a project rather than just letting you grow up?"`,
            promptInstruction: `In 4-5 sentences, respond. Is the project of building a wellness philosophy itself part of the problem? How does your position handle this challenge from traditions that don't separate wellness from living?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument? Across decades, will you need to integrate elements you didn't commit to today? How will you know when to shift primary frame?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the wellness as integration position argue?`,
              options: [
                `Random`,
                `Wellness is balanced multidimensional practice across all dimensions covered in the band (sleep, movement, food, mental health, attention, emotion, relationships, family, energy, money, tech, body image, grief, meaning, etc.); no single dimension primary; weakness in any reduces overall wellbeing; defenders include Seligman PERMA, Ryff psychological wellbeing scales, public health frameworks, holistic traditions`,
                `Just balance`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The integration position is supported by substantial research on multidimensional wellbeing. Its strength is recognizing that no single dimension produces flourishing; its limit is potentially becoming bland generalism without specific direction.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the wellness as meaning position argue?`,
              options: [
                `Random`,
                `Wellness is the practices that serve a chosen meaning; dimensions are instrumental, not ends in themselves; different meanings imply different specific practices; defenders include Frankl logotherapy, Steger meaning research, self-determination theory, ACT, Harvard Study of Adult Development, Aristotle eudaimonic tradition, religious and contemplative traditions, existentialist tradition`,
                `Just purpose`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The meaning position provides the "why" that other positions can underweight. Its strength is sustainability across decades because rooted in something stable; its limit is requiring a sense of meaning, which is itself the question for many people.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the wellness as resilience/capacity position argue?`,
              options: [
                `Random`,
                `Wellness builds capacity to navigate whatever life brings; difficulty is universal so the question is preparation, not engineering favorable conditions; all dimensions ultimately build capacity for inevitable difficulty; defenders include Bonanno resilience research, Calhoun & Tedeschi post-traumatic growth, Stoic philosophy, Buddhist philosophy, indigenous traditions, existentialist tradition`,
                `Just toughness`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The resilience position acknowledges what life actually involves (inevitable difficulty rather than engineered balance). Its strength is building capacity that can be drawn on when needed; its limit is potentially becoming preparation without enjoyment of current life.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How do the three positions relate?`,
              options: [
                `Mutually exclusive`,
                `Not strictly exclusive; most mature wellness philosophies integrate elements of all three (integration: multidimensional practice; meaning: what it's for; resilience: capacity for inevitable difficulty). The forcing function of choosing a primary frame is committing to what organizes everything else. Different times in life may call for different primary emphases; commitment now is starting point for ongoing refinement, not final answer`,
                `Just one is right`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Most mature wellness philosophies integrate elements of all three; what matters is committing to a primary organizing frame so practice can be coherent. Different life times may call for different emphases.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's specific about wellness philosophy for your generation?`,
              options: [
                `Same as always`,
                `Conditions aren't favorable for any of the three positions automatically: attention-economy products fragment focus (challenging integration); structural uncertainty makes long-term commitment risky (challenging meaning); mental health pressures and isolation undermine basis (challenging resilience). Building deliberate framework requires more work than for previous generations who absorbed cultural defaults more directly`,
                `Random`,
                `Just normal`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the specific conditions your generation navigates matters because they actively work against unconscious wellness development. Previous generations had social structures that produced wellness more automatically; current conditions require more deliberate framework.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What research evidence supports each position?`,
              options: [
                `Random`,
                `Integration: Seligman PERMA, Ryff psychological wellbeing scales, WHO health frameworks, multidimensional research traditions. Meaning: Frankl logotherapy, Steger MLQ research, Harvard Study of Adult Development finding relationships as strongest long-term predictor, self-determination theory. Resilience: Bonanno resilience research, Calhoun & Tedeschi post-traumatic growth, stress research, crisis intervention research`,
                `Just one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Each position has substantial research support. The disagreement isn't about which has evidence but about how to organize the evidence into a primary frame. Mature philosophy involves recognizing what each position contributes.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does the counterargument from contemplative/indigenous traditions challenge?`,
              options: [
                `Random`,
                `The assumption that wellness is something to deliberately construct through framework and practice; traditions with intact wellness often don't have explicit "wellness philosophy" separate from living; the project itself can produce alienation from actual life; the "wellness industry" in dominant culture profits from anxiety about wellness; question of whether you should engineer wellness or learn to live without engineering it`,
                `Just be lazy`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The counterargument is real and deserves serious engagement. The framework-building approach this band takes assumes deliberate construction is appropriate; many traditions challenge this assumption. A mature philosophy probably integrates some humility about the limits of framework-building.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the wellness philosophy you commit to today not need to be permanent?`,
              options: [
                `Random`,
                `You'll refine it across decades as life teaches you what works; different times in life may call for different primary emphases (adolescence often calls for self-development/capacity-building; early adulthood often calls for relationships/meaning; middle adulthood often calls for integration; later life often calls for meaning/resilience); the deliberate commitment now produces different trajectory than absorbing cultural defaults, but commitment doesn't mean fixed forever`,
                `Just whatever`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The capstone is starting point for ongoing reflection across decades, not final answer. The point isn't to identify the "right" position but to commit to a primary frame so you can act from it across years and refine it over time.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Building a deliberate wellness philosophy at 12 is just academic exercise; what really matters is what you do later in life.`,
              correctAnswer: false,
              explanation: `False. The patterns and frameworks you build during adolescence substantially shape adult wellness across decades. Most adults around you absorbed cultural defaults (consumerism, achievement, self-focus) that they later had to identify and undo. Building deliberate framework now produces dramatically different trajectory. The "what really matters is later" framing misunderstands how adult patterns actually develop; they're substantially shaped by adolescent patterns, not built fresh later.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend has just finished the Life Wellness Voyager band with you. She asks "Now what? What do I actually do with all of this?" Based on the capstone, what should you point out?`,
              options: [
                `"Random"`,
                `"Several specific things. First, the framework you built isn't useful as memorized content; it's useful as organizing structure for ongoing practice across decades. The 19 lessons taught what; the capstone is about how to organize it; what comes next is doing. Second, commit to one of the three philosophical frames: integration (balance across dimensions), meaning (practices serving chosen meaning), or resilience (building capacity for difficulty). Don't try to do all three equally; pick a primary organizing frame and let it guide allocation across dimensions. Third, pick ONE specific practice to start building right now using L18's framework: tiny habit, attached to existing strong habit, identity-framed, community-supported. Sleep practice from L02 if your sleep is unstable; movement practice from L05 if movement is missing; deep friendship investment from L10 if relationships need depth; meaning practice from L17 if direction feels missing. Just one to start. Sustainable beats intense across the timeframes that matter. Fourth, recognize that you'll refine your philosophy across decades. The commitment you made today is starting point, not final answer; different life times may call for different primary emphases. Be willing to refine the philosophy when life teaches you what works. Fifth, share what you've learned with people you care about, not as preaching but as conversation. Most adults around you don't have this framework; family conversation about it often shifts things for everyone. Sixth, build a personal mental health resources document if you haven't already (L19 project): school counselor, pediatrician, helplines printed and accessible, local resources. Having resources before needed dramatically reduces barriers when needed. Seventh, recognize the counterargument is real; the framework can become its own anxiety project. The point isn't to engineer wellness perfectly; it's to build foundation that supports actual life. The framework serves the life you're building; it isn't the life itself. Eighth, you have something most adolescents and most adults don't have explicitly: research-grounded framework across all dimensions of wellness, calibrated to current generational conditions, with appropriate escalation paths and crisis resources. That's protection across decades. Use it. Refine it. Pass it on."`,
                `"Just do everything"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied capstone synthesis. The framework is useful as organizing structure, not memorized content. Commit to primary frame. Start with one specific practice using L18. Refine across decades. Share with people you care about. Build practical resources. Recognize the framework serves life rather than being life. This is what synthesizing the band into practice looks like.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `This is the capstone reflection. Pick the prompt that pulls at you most. Your answer is saved as part of building your wellness philosophy.`,
          prompts: [
            { id: `reflect-philosophy`, category: `Philosophy commitment`, prompt: `Which position did you commit to in the argument builder? Why this one and not the others? What does this commitment imply for how you'll allocate time across dimensions?` },
            { id: `reflect-dimensions`, category: `Dimensional audit`, prompt: `Of the 19 dimensions covered (sleep, stress, food, movement, mental health, habits, attention, emotion, friendships, family, energy, money, tech, body image, grief, meaning, practice, help-seeking, plus integration), which are strongest for you right now? Which are weakest? What's the first practice to build?` },
            { id: `reflect-identity`, category: `Identity at 30, 50, 80`, prompt: `If you become someone with deliberately built wellness philosophy across decades, who are you at 30? At 50? At 80? What does each version of yourself thank you for building now?` },
            { id: `reflect-meta`, category: `Meta-reflection on the band`, prompt: `What lesson in this band shifted your thinking most? Which framework will you most carry forward? Which framework do you want to revisit because it didn't fully land?` },
            { id: `reflect-counterargument`, category: `Living with the counterargument`, prompt: `The counterargument challenges whether wellness should be a deliberate project at all. How will you keep the framework from becoming its own anxiety project? When does the project of wellness need to give way to just living?` },
            { id: `reflect-passing-on`, category: `Passing it on`, prompt: `Who in your life would benefit most from the framework you've built? How might you share it without preaching? What's the conversation that would shift things for someone you care about?` },
            { id: `reflect-next-decade`, category: `Next ten years`, prompt: `What wellness practices, philosophy, and capacities do you want to have built by 22? Which dimensions matter most for the next decade? What specifically commits you to building them?` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the capstone. The path forward involves practice, reflection, and refinement across decades. Two paths to start.`,
          familyActivity: {
            title: `The Family Wellness Philosophy Conversation`,
            duration: `90 minutes`,
            description: `Share the band's frameworks and the capstone philosophy commitment with your family. Most adults haven't explicitly built a wellness philosophy; many absorbed cultural defaults they'd benefit from examining. Walk through the three positions (integration, meaning, resilience), the 19 dimensions, and your specific commitment. The conversation usually surfaces specific shifts for everyone in the family: practices to start, framings to revise, resources to access. Consider establishing family practices: regular conversation about how each member is practicing wellness in the dimensions they value most; family environmental design that supports the philosophies committed to; explicit family permission and encouragement for help-seeking when needed; shared activities that build dimensions you've committed to.`,
          },
          projectOption: {
            title: `Personal Wellness Philosophy Document, 6 weeks (recommended)`,
            duration: `6 weeks, ~45 minutes per session`,
            description: `Build a personal wellness philosophy document. Week 1: identify your primary organizing frame (integration, meaning, resilience) and write 500 words on why. Week 2: audit current state across the 19 dimensions; identify 3 strongest and 3 weakest; write 500 words. Week 3: pick ONE specific practice to start using L18's framework (tiny, stacked, identity-framed, community-supported); commit to 30 days. Weeks 4-5: practice and reflect; track what works and what doesn't. Week 6: refine the philosophy based on what you learned; write 1,000 words on final philosophy, the practice you built, and what you'll continue. This document becomes your starting framework that you'll refine across decades.`,
            offerToParent: `Parent: opt your kid into this project. This is the most consequential investment of the entire band: turning the literacy built across 19 lessons into an actual personal philosophy and practice. The 6 weeks of structured work produces foundation that compounds across decades. Most adults reach 40 without ever explicitly building this; building it at 12 is among the highest-leverage life-skill investments available.`,
          },
          identityQuestion: `You have research-grounded framework across all dimensions of wellness, calibrated to current generational conditions, with appropriate escalation paths and crisis resources. That's protection across decades. The question is: what kind of life will you build with it? What wellness philosophy will you carry forward, and who will you become as you live by it?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who has this band made you?`,
          prompt: `Twenty lessons in. One sentence on who you've become. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone with deliberate wellness philosophy organized around what produces flourishing across decades.`,
            `A person who recognizes pop framings and builds practice on research instead.`,
            `Someone who integrates sleep, movement, mental health, relationships, meaning, and the rest into one coherent life.`,
          ],
          saveKey: `identity_responses_lw_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. The Life Wellness Voyager band is complete. Twenty lessons done. 1,525 XP earned. You now have research-grounded framework across every dimension of wellness: sleep, stress, food, movement, mental health, habits, attention, emotion, friendships, family, energy management, money, tech, body image, grief, meaning, sustainable practice, help-seeking, and the philosophy that integrates them. Most adolescents your age don't have any of this. Most adults around you don't either. You've built something rare and consequential. What you do with it across decades is the work that's yours. The capstone wellness philosophy you've committed to today is starting point for ongoing refinement, not final answer. Practice. Reflect. Refine. Pass it on. The Life Wellness Voyager band has been the seventh completed Voyager subject. The work continues. — Terra`,
          badge: `wellness-philosopher`,
          badgeName: `Wellness Philosopher`,
          xpEarned: 100,
          competencies: [
            `Synthesizes research across 19 dimensions of wellness covered in the band`,
            `Articulates three serious positions on organizing a wellness philosophy (integration, meaning, resilience)`,
            `Commits to a primary organizing frame while integrating elements from other positions`,
            `Recognizes the counterargument from contemplative/indigenous traditions about wellness as deliberate project`,
            `Identifies wellness philosophy as starting point for ongoing refinement across decades`,
          ],
          bandCompletion: {
            title: `Life Wellness Voyager: Complete`,
            totalXP: 1525,
            totalLessons: 20,
            totalDuration: 670,
            celebration: `Seventh completed Voyager subject. Research-grounded framework across every dimension of wellness, with the philosophy that integrates them. Rare and consequential. The work continues across decades.`,
          },
          nextLessonPreview: null,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L20-CAPSTONE ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
