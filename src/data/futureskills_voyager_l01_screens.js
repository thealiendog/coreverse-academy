// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L01 — What Future Skills Even Mean
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Career Education, Future Studies, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (narrow employability / broad flourishing / anti-prediction)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l01-v1";

const FUTURESKILLS_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-01`,
      title: `What Future Skills Even Mean`,
      duration: 35,
      xpReward: 75,
      badge: `framework-builder`,
      badgeName: `Framework Builder`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, I'm Byte. Welcome to Future Skills. We're going to spend twenty lessons figuring out what skills you actually need for the world you're growing into, and how to start building them. The first puzzle is the one almost nobody solves cleanly: what does "future skills" even mean? Some people answer "skills that will get you a job in 2035." Others answer "skills that help you live a meaningful life regardless of how work evolves." Still others answer "we don't know what 2040 will need, so the only real future skill is being able to learn fast." All three are defended by serious thinkers. They lead to very different choices about what to do with your time. Today we work through them, then you build your own argument.`,
          headline: `What Future Skills Even Mean`,
          subtitle: `Three serious answers. Each leads to different choices about what to do with your time.`,
          visual: `/voyager-assets/future-skills/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Question Is Trickier Than It Looks`,
          paragraphs: [
            `If you ask most adults "what future skills should kids be building?", you'll get answers like "coding," "AI literacy," "communication," "critical thinking," "creativity." These are reasonable answers, but they hide the actual question. Future skills for what? For getting hired by a 2035 employer? For navigating a possibly very different economy? For being a good friend, partner, citizen, neighbor? For making meaningful choices in a world full of automated systems trying to capture your attention?`,
            `These are different goals, and they imply different skill priorities. Skills for employability emphasize what employers in specific industries say they want, which is partly predictable and partly volatile. Skills for human flourishing emphasize capacities like attention, emotional regulation, and meaning-making that have mattered for thousands of years regardless of economy. Skills for an uncertain future emphasize meta-skills like learning quickly and adapting to new situations, on the theory that the specific landscape is unpredictable.`,
            `The split matters for how you spend the next decade of your life. If employability is the primary goal, you optimize for whatever the labor market currently rewards (specific technical skills, credentials, networks). If flourishing is the primary goal, you build attention, relational depth, and the ability to think well. If meta-skills are the priority, you focus on learning how to learn, problem-solving frameworks, and adaptability itself. Real people choose differently based on which framing they hold.`,
            `One thing to notice immediately. The honest answer might be "all three, in some combination," but proportions matter. A kid who spends 80% of their time on employability skills builds a very different life than a kid who spends 80% on flourishing skills or 80% on meta-learning. There isn't a neutral default. Choosing what to emphasize is a real choice, even when nobody frames it as one.`,
          ],
          image: `/voyager-assets/future-skills/l01-s1-question.webp`,
          imageCaption: `"Future skills" sounds simple. The question hides several different goals with different answers.`,
          vocab: [
            {
              word: `meta-skill`,
              definition: `A skill that helps you build or use other skills. Learning how to learn is a meta-skill. Problem-solving frameworks are meta-skills. They tend to compound over time because every other skill you acquire benefits from them.`,
              audioPrompt: `A meta-skill is a skill that helps you build or use other skills, {name}. Learning how to learn is a meta-skill. Problem-solving frameworks are meta-skills. The ability to communicate clearly is a meta-skill because it makes every collaborative task more effective. Meta-skills tend to compound over time because every other skill you acquire benefits from them. Someone who is excellent at learning how to learn can pick up new specific skills much faster than someone who never developed that meta-skill. In a world where the specific skills that matter may keep changing, meta-skills become more valuable, not less. They're one of the strongest arguments for the third position you'll see in this lesson.`,
            },
            {
              word: `employability`,
              definition: `The condition of having the skills, credentials, and qualities that make someone attractive to employers in the labor market. Future skills for employability means optimizing for what specific industries and roles are willing to pay for. One of the three major framings of future skills covered in this lesson.`,
              audioPrompt: `Employability is the condition of having the skills, credentials, and qualities that make someone attractive to employers in the labor market, {name}. Future skills for employability means focusing specifically on what employers in growing industries are willing to pay for. The employability framing is the implicit default in most school career counseling and parent conversations about the future. It has concrete guidance: look at Bureau of Labor Statistics projections, identify growing fields, acquire relevant credentials and technical skills, build networks in those fields. The framing is actionable and measurable. It also has real weaknesses: labor markets change faster than career planning typically assumes, and many high-leverage activities like building deep friendships or meaningful creative work don't pay directly. Skills that look hot today may decline. Knowing employability as one distinct framing among three helps you choose how much weight to give it.`,
            },
            {
              word: `human flourishing`,
              definition: `Philosophical term for a fully developed, satisfying human life that prioritizes slow-changing capacities like attention, relationships, and meaning over fast-changing economic rewards. One of the three major framings of future skills in this lesson, rooted in Aristotle's concept of eudaimonia.`,
              audioPrompt: `Human flourishing as a framing for future skills means prioritizing the capacities that help you live a good life regardless of how work and the economy evolve, {name}. The argument: economies change rapidly; human nature changes slowly; build the slow-changing capacities. Attention, emotional regulation, meaningful relationships, the ability to think clearly, the capacity to find purpose — these have mattered for thousands of years and will likely continue mattering. The strongest defenders include certain philosophical traditions going back to Aristotle's concept of eudaimonia, positive psychology research, and writers like Cal Newport. The empirical research on what actually predicts adult life satisfaction tends to support this framing more than naive employability framing. The Harvard Study of Adult Development, spanning over eighty years, shows that relationships predict adult satisfaction more than income above a middle-class baseline. The flourishing framing has weaknesses too: pure focus without income-generating skills creates practical problems.`,
            },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Employability Skills`,
          paragraphs: [
            `The first major position. Future skills are the skills that employers will pay for in the economy of the next 10-20 years. The goal is to be employable, ideally in well-compensated roles, with options to switch fields as the labor market evolves. This is the implicit framing in most school career counseling, in many parent conversations, and in most career advice content.`,
            `Employability framing has concrete guidance. Look at labor market projections from the Bureau of Labor Statistics. Identify growing fields (currently: healthcare, software engineering, renewable energy, certain skilled trades). Acquire credentials those fields require. Build relevant technical skills. Network within the industry. Optimize for the next career step. This is sensible advice within its framing, and many people who follow it build solid lives.`,
            `Employability framing has real strengths. It's concrete and actionable. It connects to a clear measure of success (income, job stability, career advancement). It accumulates expertise that's valuable across many contexts. People who develop strong employable skills typically have more life options than people without them.`,
            `Employability framing has real weaknesses too. Labor markets change faster than career planning typically assumes. Skills that look hot today (specific programming languages, specific industries) may decline. Credentials matter less than they used to and may matter less still in the future. Many of the highest-leverage activities (deep friendship, creative work, parenting, community building) don't pay directly and would be deprioritized under pure employability framing. And the framing implicitly accepts the current economy as the relevant target, even when the economy may be reshuffled significantly within a decade.`,
            `Notable defenders of employability framing include traditional career counseling, much of business education, and economists like Tyler Cowen (who has written extensively on which skills will retain value as AI advances). They're not wrong that employability matters. They may be incomplete on what else matters.`,
          ],
          image: `/voyager-assets/future-skills/l01-s2-employability.webp`,
          imageCaption: `Position 1: optimize for what employers will pay for. Concrete, actionable, with real limits.`,
          vocab: [
            {
              word: `labor market`,
              definition: `The system by which workers and employers find each other and negotiate compensation. Includes formal jobs, freelance work, contractor relationships, and other arrangements. Changes over time as technology, demographics, and economy shift. Subject of intensive study by economists.`,
              audioPrompt: `The labor market is the system by which workers and employers find each other and negotiate compensation, {name}. It includes formal jobs at companies, freelance work, contractor relationships, and other arrangements. The labor market changes over time as technology, demographics, and economy shift. Some industries grow while others decline. Some skills become more valuable while others become less valuable. The U.S. Bureau of Labor Statistics tracks projected changes and publishes them regularly. Career counseling typically looks at these projections to recommend fields. Critics note that long-range labor market predictions have historically been only partially accurate. Some of the highest-growth fields of the 2010s and 2020s didn't exist when career counselors were making predictions a decade earlier.`,
            },
            {
              word: `labor market projections`,
              definition: `Forecasts from institutions like the U.S. Bureau of Labor Statistics about which occupations and sectors are likely to grow or shrink over the next 10-20 years. Useful as one input in career planning but imperfect; historical projections have repeatedly missed major shifts like software's rise in the 1990s.`,
              audioPrompt: `Labor market projections are forecasts from institutions like the U.S. Bureau of Labor Statistics about which occupations and sectors are likely to grow or shrink over a given period, {name}. They are one of the core tools in the employability framing of future skills. If you want to optimize for what employers will pay for in 2035, you start by looking at what the projections say about growing fields. Currently, healthcare, software engineering, renewable energy, and certain skilled trades show strong projected growth. The projections are real and useful as one input. They are also imperfect. Historical projections have repeatedly missed major shifts. People making projections in 1990 mostly didn't predict software's dominance. People making projections in 2010 mostly didn't predict generative AI's impact on knowledge work by 2022. Long-range labor market predictions have a poor track record on the specifics, even when the general direction is right. Knowing this lets you use projections as one input while not treating them as destiny.`,
            },
            {
              word: `skills for uncertainty`,
              definition: `Capacities built to work regardless of which specific future arrives, rather than skills optimized for a predicted future. Examples include learning how to learn, problem-solving frameworks, and adaptability. The core of the meta-skills framing in this lesson.`,
              audioPrompt: `Skills for uncertainty are capacities built to work regardless of which specific future arrives, rather than skills optimized for a particular predicted future, {name}. They are the core of the third framing in this lesson. The reasoning: the specific landscape of jobs, industries, and required technical skills in 2040 is genuinely unknowable. Anyone making confident specific predictions is either fooling themselves or selling something. The skills that age well across many possible futures are ones like learning how to learn, problem-solving frameworks, adaptability itself, strong reading and writing, and mathematical intuition. These meta-skills compound regardless of which specific landscape emerges. The historical track record of specific skill predictions is poor; the track record of meta-skills aging well across transitions is much better. Building toward skills for uncertainty doesn't mean ignoring the present job market. It means investing in capabilities that will keep serving you even when the specifics change.`,
            },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Human Flourishing Skills`,
          paragraphs: [
            `The second major position. Future skills are the skills that help you live a good life regardless of how work and economy evolve. These are capacities that have mattered for thousands of years and will likely continue to matter: attention, emotional regulation, meaningful relationships, the ability to think clearly, the capacity to find purpose in your circumstances. The argument: economies change rapidly; human nature changes slowly; building the slow-changing capacities is a better bet than chasing the fast-changing ones.`,
            `Human flourishing framing has concrete guidance, though it looks different from employability advice. Build deep attention through practices like reading, meditation, and time without screens. Cultivate emotional regulation through self-awareness, relationships, and skilled emotional discomfort. Develop meaningful friendships that go beyond convenience. Engage seriously with questions of meaning, ethics, and purpose. Take care of your body through movement and sleep. Build creative practice in domains that interest you. These skills don't directly produce income but they produce a life worth living.`,
            `The strongest defenders of human flourishing framing include certain philosophical traditions (Aristotelian virtue ethics, Buddhist contemplative practices, Stoic philosophy), some psychologists (Mihaly Csikszentmihalyi's "flow" research, Martin Seligman's positive psychology), and writers like Cal Newport (who has written extensively on deep work, attention, and meaningful life construction). The empirical research on what actually predicts adult life satisfaction tends to support this framing more than naive employability framing.`,
            `Human flourishing framing has weaknesses. Pure flourishing focus without any income-generating skills produces real practical problems. Many "flourishing" skills are hard to develop without a stable life base, which often requires income. The framing can become a kind of privilege if it ignores that most people need to work for survival before they can prioritize flourishing. Critics note that "flourishing" advice often comes from people who already have economic security and may underweight what got them there.`,
          ],
          image: `/voyager-assets/future-skills/l01-s3-flourishing.webp`,
          imageCaption: `Position 2: optimize for a life worth living. Attention, relationships, meaning. Slower-changing than employability.`,
          vocab: [
            {
              word: `flourishing`,
              definition: `Philosophical term for a fully developed, meaningful, satisfying human life. Distinct from "happiness" which can be fleeting. Aristotle's concept of eudaimonia. Subject of serious research in positive psychology and philosophy. Doesn't require wealth but typically requires some baseline of stability.`,
              audioPrompt: `Flourishing is a philosophical term for a fully developed, meaningful, satisfying human life, {name}. Distinct from "happiness," which can be fleeting and depends on momentary feelings. Aristotle introduced the concept of eudaimonia, which translates roughly as flourishing, in his Nicomachean Ethics around 350 BCE. The idea: the good life isn't pleasure or wealth alone. It's the development and expression of human capacities through meaningful activity in relationship with others. Modern positive psychology has produced empirical research on what actually predicts adult life satisfaction. Findings: relationships matter enormously, meaningful work matters more than income above a baseline, autonomy matters, contribution to something larger matters. Flourishing is a serious framework for thinking about future skills.`,
            },
            {
              word: `eudaimonia`,
              definition: `Ancient Greek concept from Aristotle's Nicomachean Ethics, often translated as "flourishing" or "the good life." Not simply pleasure or happiness, but the full development and expression of human capacities through meaningful activity in relationship with others. Foundation of the human flourishing framing in this lesson.`,
              audioPrompt: `Eudaimonia is an ancient Greek concept from Aristotle's Nicomachean Ethics, written around 350 BCE, {name}. It is often translated as flourishing or the good life, though neither translation fully captures it. Aristotle's idea: the good life is not simply pleasure or wealth. It is the full development and expression of human capacities through meaningful activity in relationship with others. Eudaimonia requires living virtuously, engaging with things that matter, and developing excellence in what you do. Modern positive psychology has reinvestigated this idea empirically. Researchers like Martin Seligman have produced evidence that what actually predicts adult life satisfaction aligns more closely with eudaimonia than with wealth or momentary pleasure. Strong relationships, meaningful work, contribution to something larger, and genuine engagement with challenging activities all predict life satisfaction better than income above a baseline. Aristotle was not a scientist, but he was onto something real.`,
            },
            {
              word: `skill priorities`,
              definition: `The relative emphasis you place on different kinds of skills given your chosen framing of future skills. Employability framing pushes toward credentials and technical skills. Flourishing framing pushes toward attention, relationships, and meaning. Meta-skills framing pushes toward learning practices and adaptability. Different framings produce very different day-to-day choices.`,
              audioPrompt: `Skill priorities are the relative emphasis you place on different kinds of skills, and they follow directly from whichever framing of future skills you hold, {name}. If employability is your primary framing, your skill priorities lean toward credentials, technical skills in growing industries, and professional networks. If human flourishing is your primary framing, your priorities lean toward deep attention, emotional regulation, meaningful relationships, and creative or intellectual engagement. If meta-skills is your primary framing, your priorities lean toward learning practices, broad foundations, and adaptive thinking. The point of this lesson is that most people inherit a set of skill priorities by accident from their environment, their parents, and their school, without ever choosing explicitly. The kids who choose explicitly tend to invest their time more deliberately. The proportions matter more than most people realize. A kid who spends eighty percent of their time on employability skills builds a very different life than one who spends eighty percent on flourishing skills.`,
            },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Meta-Skills For An Unknowable Future`,
          paragraphs: [
            `The third major position. The specific skills that will matter in 2040 or 2050 are genuinely unknowable. Anyone making confident predictions is either fooling themselves or selling something. The only sensible response is to invest in meta-skills: learning how to learn, problem-solving frameworks, adaptability itself. These compound regardless of which specific landscape emerges.`,
            `The case for this position has real weight. Look at history. People who tried to predict the most valuable career skills in 1990 mostly didn't predict the dominance of software engineering. People predicting in 2010 mostly didn't predict generative AI's impact on knowledge work starting in 2022. The specific landscape keeps surprising even careful forecasters. The skills that age well across these transitions are the ones that help you respond to whatever shows up.`,
            `Meta-skill framing has concrete guidance. Spend time on "learning how to learn" itself. Build comfort with discomfort and confusion. Develop strong reading and writing because they're how complex ideas transfer. Build mathematical intuition because most quantitative reasoning requires it. Develop systems thinking because the world keeps producing complex problems. Build emotional and social intelligence because every other skill is mediated through relationships. These meta-skills serve you regardless of what specific industry, technology, or economy emerges.`,
            `Defenders of meta-skill framing include educators like Salman Khan (Khan Academy founder), researchers like Carol Dweck (mindset research), and writers like Cal Newport, David Epstein ("Range," 2019, on the value of broad foundations), and economist David Autor (whose work on labor market polarization suggests meta-skills increasingly matter). The argument has accumulated significant support among thinkers who pay attention to long-term change.`,
            `Meta-skill framing has its own weaknesses. Pure meta-skills without specific knowledge can be hollow; you need real subject matter to apply the meta-skills to. Some critics argue meta-skills are more of an abstraction than a concrete skill set. Building meta-skills is also hard to measure compared to employability skills, which makes them easy to talk about and harder to actually develop systematically.`,
          ],
          image: `/voyager-assets/future-skills/l01-s4-metaskills.webp`,
          imageCaption: `Position 3: invest in skills that compound regardless of which future emerges. Learning, thinking, adapting.`,
          vocab: [
            {
              word: `adaptability`,
              definition: `Capacity to adjust effectively to new conditions, situations, or environments. Combines emotional regulation under uncertainty, willingness to learn new approaches, and skill at recognizing when old approaches no longer fit. Considered one of the most important meta-skills for an unpredictable future.`,
              audioPrompt: `Adaptability is the capacity to adjust effectively to new conditions, situations, or environments, {name}. It combines several things: emotional regulation under uncertainty (because change is often uncomfortable), willingness to learn new approaches (because old ones may not transfer), and skill at recognizing when old approaches no longer fit (because adaptability isn't useful if you can't see when it's needed). Adaptability is considered one of the most important meta-skills for an unpredictable future. People who can move between industries, learn new tools quickly, and update their assumptions in response to new information tend to do well across many possible futures. People who are highly specialized and slow to update can be valuable when conditions are stable but vulnerable when conditions shift.`,
            },
            {
              word: `broad foundations`,
              definition: `Wide exposure to many areas and ways of thinking before deep specialization in any one domain. Argued by David Epstein in "Range" (2019) to produce better long-term outcomes than early specialization in an unpredictable future. Part of the meta-skills framing in this lesson.`,
              audioPrompt: `Broad foundations refer to wide exposure to many areas and ways of thinking before deep specialization in any one domain, {name}. David Epstein's 2019 book "Range" argues that people with broad foundations often outperform early specialists in fields with high uncertainty. His research drew on cognitive science, sports performance, and historical analysis. Examples included Roger Federer, who played many sports before specializing in tennis, and scientists who made major contributions after switching fields. The argument: specialization too early can limit the cross-domain insights that produce real breakthroughs. Broad foundations are one of the core building blocks of the meta-skills framing in this lesson. If you can't predict which specific domain will be most valuable in 2040, investing in broad foundations across many domains gives you more flexibility to adapt. The foundations don't prevent eventual specialization. They make the specialization that does happen richer because it builds on wider understanding.`,
            },
            {
              word: `compounding skills`,
              definition: `Skills that grow more valuable over time because they apply to everything else you learn and do. Meta-skills are the clearest example: learning how to learn speeds up acquisition of every other skill. Distinct from skills that are static or that become obsolete as conditions change.`,
              audioPrompt: `Compounding skills are skills that grow more valuable over time because they apply to everything else you learn and do, {name}. Meta-skills are the clearest example. Learning how to learn speeds up the acquisition of every other skill you develop afterward. Thinking clearly improves the quality of every decision. Communicating well multiplies the impact of every interaction. These skills compound: the earlier you build them, the more of your other learning they accelerate. A 12-year-old who builds strong active recall habits will learn more in every school year afterward than a peer who doesn't, not because they work harder, but because each study hour produces more retention. Compounding skills are one of the strongest arguments for investing in meta-skills early. Specific technical skills can become obsolete when technology changes. Compounding skills like learning agility, clear thinking, and communication tend to remain valuable across many possible futures precisely because they amplify everything built on top of them.`,
            },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't necessarily mutually exclusive. Many thoughtful people endorse some combination of all three. But the proportions matter, and forcing a clear ranking helps clarify which framing is most central to your thinking. You can hold all three as legitimate while still having a primary commitment.`,
            `One framing to consider. Each position implies a different theory of how to handle uncertainty about the future. Position 1 (employability) assumes you can predict enough of the future to make specific bets that will pay off. Position 2 (flourishing) assumes that the things that have always mattered will continue to matter, regardless of the future's specifics. Position 3 (meta-skills) assumes that prediction itself is unreliable, so the right move is to build capacities that work in any future. Which theory of uncertainty do you find most compelling?`,
            `Another framing. Each position has different implications for how you'd spend your next 5 years. Employability framing pushes toward credentials, networks, and specific technical skills aligned with current high-growth industries. Flourishing framing pushes toward deep relationships, attention practices, and meaningful creative or intellectual engagement. Meta-skill framing pushes toward learning practices, broad foundations, and adaptive thinking. The day-to-day looks different under each.`,
            `One last thing to note. You're 12. You're not making your final career decision today. The argument you build today is a starting framework, not a permanent commitment. Your thinking will evolve as you encounter more evidence and more life. But thinking carefully about this now, when you have the time and intellectual freedom to consider the question seriously, is more useful than waiting until your hand is forced by adult pressures. The kids who win at this aren't necessarily the smartest. They're the ones who think clearly early and adjust well as they go.`,
          ],
          image: `/voyager-assets/future-skills/l01-s5-before.webp`,
          imageCaption: `Three real positions. Real consequences for how you spend your time. Build your starting framework.`,
          vocab: [
            {
              word: `theory of uncertainty`,
              definition: `Implicit or explicit beliefs about what's predictable and what isn't, and how to act when you can't be sure. Different theories of uncertainty produce different strategies. Some people act as if the future is predictable enough to plan for; others act as if it's fundamentally uncertain and prepare for many possibilities.`,
              audioPrompt: `A theory of uncertainty is your implicit or explicit beliefs about what's predictable and what isn't, and how to act when you can't be sure, {name}. Different theories of uncertainty produce very different strategies. Some people act as if the future is predictable enough to plan for in detail. They optimize for the predicted future. Others act as if the future is fundamentally uncertain and prepare for many possibilities. They build flexible capacities. Still others act as if certain things (human nature, basic patterns) are reliable while specific landscapes (jobs, technologies) are not. They focus on the reliable parts. Which theory of uncertainty you hold shapes everything else about future-skills decisions. Making your theory explicit helps you notice when it might be wrong.`,
            },
            {
              word: `specific bets`,
              definition: `Career or skill investments optimized for a particular predicted future, such as acquiring credentials for a specific industry or learning a specific technology. Part of the employability framing. Works well if predictions are correct; risky if the specific predicted future doesn't materialize as expected.`,
              audioPrompt: `Specific bets are career or skill investments optimized for a particular predicted future, {name}. If you believe healthcare will dominate the labor market of 2035, you make specific bets on healthcare credentials and networks. If you believe renewable energy will be the key sector, you bet on those credentials. Specific bets are the core logic of the employability framing. They have real strengths: they're concrete, actionable, and can pay off significantly if the prediction is right. They have real weaknesses too. Specific bets depend on predictions being accurate, and long-range labor market predictions have a poor historical track record. Skills that look hot today may decline. The specific bet on learning one programming language looked different after AI changed the economics of routine coding. Knowing when you're making a specific bet, versus building flexible capacities, is part of making the employability framing work. The kids who make specific bets while also building underlying meta-skills are in a better position than those who make only specific bets.`,
            },
            {
              word: `primary commitment`,
              definition: `The framing or goal that takes central importance when choices have to be made. You can hold employability, flourishing, and meta-skills as all legitimate while still having one as your primary commitment that guides how you spend most of your time. Making your primary commitment explicit helps you make decisions consistently.`,
              audioPrompt: `A primary commitment is the framing or goal that takes central importance when choices actually have to be made, {name}. The three future-skills positions aren't necessarily mutually exclusive. Many thoughtful people endorse some combination of all three: they want to be employable, to flourish as a person, and to build skills that work in any future. But the proportions matter. A kid who spends 80% of their time on employability skills builds a very different life than one who spends 80% on flourishing skills. You can hold all three as legitimate while still having a primary commitment that guides how you allocate your time. Forcing yourself to identify a primary commitment isn't about dismissing the other positions. It's about being honest with yourself about what you're actually optimizing for. Choosing what to emphasize is a real choice, even when nobody frames it as one. The argument you build today is your starting framework for what that primary commitment is.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l01-argument-builder`,
          type: `argument-builder`,
          headline: `What's The Right Framing For Future Skills?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real serious thinkers defend each of these.`,
          positions: [
            {
              id: `employability`,
              label: `Employability skills: optimize for what employers will pay for`,
              summary: `Future skills are the skills that will be valuable in the labor market over the next 10-20 years. Look at Bureau of Labor Statistics projections, identify growing fields, acquire relevant credentials and technical skills, build networks. The goal is solid employment with options to switch fields as the economy evolves. Concrete, actionable, with measurable success criteria (income, job stability, career advancement). Defenders include traditional career counseling and economists like Tyler Cowen.`,
            },
            {
              id: `flourishing`,
              label: `Human flourishing skills: optimize for a life worth living`,
              summary: `Future skills are the capacities that help you live a good life regardless of how work and economy evolve. Build attention, emotional regulation, deep relationships, meaning-making, creative practice. These have mattered for thousands of years and will continue mattering. Economies change rapidly; human nature changes slowly; build the slow-changing capacities. Defenders include philosophical traditions (Aristotle through Stoicism), positive psychology research, writers like Cal Newport. The empirical research on adult life satisfaction supports this framing more than naive employability framing.`,
            },
            {
              id: `meta-skills`,
              label: `Meta-skills: optimize for an unknowable future`,
              summary: `The specific skills that matter in 2040 are genuinely unknowable. Anyone making confident predictions is fooling themselves or selling something. Build meta-skills: learning how to learn, problem-solving frameworks, adaptability. These compound regardless of which specific future emerges. Defenders include Khan, Dweck, Cal Newport, David Epstein ("Range" 2019), economist David Autor. The historical track record of specific skill predictions is poor; meta-skills age well across transitions.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Bureau of Labor Statistics projections for 2030+ show specific fields growing significantly: software development, healthcare, certain skilled trades, renewable energy. Concrete employability framing has measurable guidance.`,
              source: `BLS Occupational Outlook; multiple labor market analyses`,
            },
            {
              id: `e2`,
              text: `People who try to predict the most valuable career skills typically miss major shifts. People predicting in 1990 mostly didn't foresee software's dominance. People predicting in 2010 mostly didn't foresee generative AI's impact on knowledge work. Specific skill predictions have a poor historical track record.`,
              source: `Multiple historical analyses of career predictions`,
            },
            {
              id: `e3`,
              text: `Harvard Study of Adult Development (80+ years) shows relationships predict adult life satisfaction more than income above middle-class baseline. Empirical evidence supports flourishing framing's claim that certain capacities matter regardless of economic specifics.`,
              source: `Harvard Study of Adult Development; multiple decades`,
            },
            {
              id: `e4`,
              text: `David Epstein's "Range" (2019) presents evidence that people with broad foundations and meta-skill emphasis outperform pure specialists in fields with high uncertainty. Supports meta-skills framing for unpredictable futures.`,
              source: `Epstein 2019; multiple research papers cited`,
            },
            {
              id: `e5`,
              text: `Kahneman-Deaton (2010) and Kahneman-Killingsworth (2023) research shows income matters for life satisfaction throughout the range but with diminishing returns. Suggests both employability and flourishing framings capture real things; income matters but isn't everything.`,
              source: `Kahneman-Deaton 2010; Kahneman-Killingsworth 2023`,
            },
            {
              id: `e6`,
              text: `Modern labor markets show high job-switching frequency: most workers change jobs every 4 years on average; cross-industry switches are increasingly common. Adaptability and learning agility are increasingly required even within employability framing.`,
              source: `BLS labor turnover data; multiple workforce studies`,
            },
            {
              id: `e7`,
              text: `Cal Newport's research and writing emphasizes deep work (sustained attention) as foundational for high-value work in any field. Bridges flourishing and employability framings; deep attention is a flourishing skill AND an employability skill.`,
              source: `Newport "Deep Work" 2016; "Digital Minimalism" 2019`,
            },
            {
              id: `e8`,
              text: `Generative AI advancement since 2022 has significantly changed which specific technical skills retain economic value. Specific predictions about "AI-proof careers" from 2020 have aged poorly. Meta-skills and adaptability are more robust to such shifts.`,
              source: `Multiple analyses of post-2022 AI impact on labor markets`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that thoughtful individual planning can meaningfully shape your future trajectory. But macro forces (economic policy, technology trajectories, climate change, geopolitical shifts) shape what happens to whole generations in ways individual choices can't override. Whether you optimized for employability, flourishing, or meta-skills may matter much less than whether you happened to be 25 during a recession vs an expansion, or whether AI shifts your industry overnight, or whether climate disruption restructures the economy. Why think individual skill choices matter more than structural luck? Aren't you overestimating individual agency in a world increasingly shaped by forces beyond personal control?"`,
            promptInstruction: `In 3-4 sentences, respond. Does your position depend on individual choices having major impact, or does it work even acknowledging that structural forces dominate? How do you handle the role of luck and macro forces in shaping outcomes?`,
          },
          reflectionPrompt: `Looking at the two positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is "what are future skills?" trickier than it sounds?`,
              options: [
                `Because the future is mysterious`,
                `Because "future skills" can mean skills for employability, skills for human flourishing, or skills for an unknowable future; these are different goals that imply different priorities; choosing among them is a real choice, even when nobody frames it that way`,
                `Because skills don't exist`,
                `Because predictions are impossible`,
              ],
              correctIndex: 1,
              explanation: `The three framings are real and lead to different choices about how to spend your time. Most adults haven't explicitly chosen one, which means they're making the choice implicitly.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a meta-skill?`,
              options: [
                `A virtual reality skill`,
                `A skill that helps you build or use other skills; learning how to learn, problem-solving frameworks, communication; tend to compound over time because every other skill benefits from them`,
                `A type of social media`,
                `Skills above other skills`,
              ],
              correctIndex: 1,
              explanation: `In a world where specific skills may keep changing, meta-skills become more valuable, not less. They're one of the strongest arguments for the third position.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the employability framing argue?`,
              options: [
                `Money is everything`,
                `Future skills are the skills that will be valuable in the labor market over the next 10-20 years; look at BLS projections, identify growing fields, acquire credentials and technical skills, build networks; concrete and actionable with measurable success criteria`,
                `Skills aren't important`,
                `Avoid work`,
              ],
              correctIndex: 1,
              explanation: `Employability framing has real strengths (concrete, actionable, measurable) and real weaknesses (labor markets change faster than expected; many high-leverage activities like relationships and meaning don't pay directly).`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the human flourishing framing argue?`,
              options: [
                `Don't work`,
                `Future skills are the capacities that help you live a good life regardless of how economy evolves; attention, emotional regulation, deep relationships, meaning-making; "economies change rapidly; human nature changes slowly; build the slow-changing capacities"; defenders include Aristotle through positive psychology research`,
                `Just be happy`,
                `Ignore the future`,
              ],
              correctIndex: 1,
              explanation: `The Harvard Study of Adult Development (80+ years) shows relationships predict adult life satisfaction more than income above middle-class baseline. Empirical research supports flourishing framing's core claim.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "flourishing" in philosophical terms?`,
              options: [
                `Plants growing`,
                `Term for a fully developed, meaningful, satisfying human life; distinct from "happiness" (which can be fleeting); Aristotle's eudaimonia (around 350 BCE); subject of serious research in positive psychology and philosophy`,
                `Showing off`,
                `Being rich`,
              ],
              correctIndex: 1,
              explanation: `Flourishing is a serious philosophical concept with a 2400-year tradition. Modern positive psychology has produced empirical research on what predicts adult life satisfaction, and the findings tend to support the framework.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the meta-skills framing argue?`,
              options: [
                `Skills are bad`,
                `Specific skills that will matter in 2040 are genuinely unknowable; build meta-skills (learning to learn, problem-solving, adaptability) that compound regardless of which specific future emerges; historical track record of specific skill predictions is poor`,
                `Predict carefully`,
                `Avoid all skills`,
              ],
              correctIndex: 1,
              explanation: `People predicting future skills in 1990 mostly missed software's dominance. People predicting in 2010 mostly missed generative AI's impact. Specific predictions have a poor historical track record, which supports the meta-skills framing.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "adaptability"?`,
              options: [
                `Following orders`,
                `Capacity to adjust effectively to new conditions; combines emotional regulation under uncertainty, willingness to learn new approaches, and skill at recognizing when old approaches no longer fit; one of the most important meta-skills`,
                `Never changing`,
                `Quick reactions`,
              ],
              correctIndex: 1,
              explanation: `People who can move between industries, learn new tools quickly, and update their assumptions tend to do well across many possible futures. People highly specialized and slow to update can be valuable when stable but vulnerable when shifts happen.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is a "theory of uncertainty"?`,
              options: [
                `Mathematical theorem`,
                `Implicit or explicit beliefs about what's predictable and what isn't, and how to act when you can't be sure; different theories produce different strategies; making your theory explicit helps you notice when it might be wrong`,
                `Religious doctrine`,
                `Scientific principle`,
              ],
              correctIndex: 1,
              explanation: `Position 1 assumes you can predict enough of the future to make specific bets. Position 2 assumes timeless human capacities matter regardless. Position 3 assumes prediction itself is unreliable. Each is a different theory of uncertainty.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the other two are wrong.`,
              correctAnswer: false,
              explanation: `False. All three positions are defended by serious thinkers and have real strengths and weaknesses. Many thoughtful people endorse some combination of all three. The disagreement is genuine. What matters is being explicit about which framing is most central to your thinking.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Future skills are obviously just whatever gets you hired in 2035; everything else is fluff." Based on this lesson, what's the most useful response?`,
              options: [
                `"You're right, employability is everything"`,
                `"That's one defensible position, but it's not obvious. It's the employability framing, and it has real strengths (concrete, measurable). But it also has real weaknesses: long-range labor predictions have a poor track record, many high-leverage activities like relationships and meaning don't pay directly, and the framing implicitly accepts the current economy as the relevant target even when it may be reshuffled significantly. Two other serious framings exist: human flourishing (build capacities that matter regardless of economy) and meta-skills (build adaptability for an unknowable future). Real thinkers defend each. The honest framing is to be explicit about which combination of the three you're optimizing for, not to treat one as obvious."`,
                `"All employability is fake"`,
                `"Future is unknowable, so why try"`,
              ],
              correctIndex: 1,
              explanation: `Real applied future-skills literacy. Don't dismiss the friend's framing; recognize it as one defensible position among three. The honest response makes the choice explicit instead of treating one framing as the obvious default.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, which framing did you implicitly hold? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `If your parents implicitly hold one framing and you implicitly hold another, what kind of conversations might come from naming the difference?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who explicitly chooses which framing to emphasize at different life stages, what does that change about how you spend your time?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific thing you'll do in the next two weeks. Which framing does it serve? Are you happy with the answer?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there future-skills framings the lesson didn't cover? What about contributions to community, family work, civic engagement, or activism? Do those fit any of the three or do they need a fourth framing?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one parent or trusted adult: which framing did they implicitly hold when they were your age, and which one do they hold now? What changed them?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The framing you choose for future skills shapes the next decade of your time. Two paths.`,
          familyActivity: {
            title: `The Family Future Skills Framing Conversation`,
            duration: `45 minutes`,
            description: `At dinner, share what you learned about the three framings of future skills. Then ask each adult: which framing did they hold when they were 12? Which do they hold now? Have they ever explicitly chosen one over the others, or did the framing just emerge from their environment? Most adults have never made the choice explicitly. This conversation often reveals that family members hold different framings without naming them, which produces friction in advice conversations. Naming the framework makes the conversations more productive going forward.`,
          },
          projectOption: {
            title: `Build Your First Framework Document, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Write a 1,500-word document on which framing currently makes most sense for you at 12, and why. Include: what's the strongest argument for your chosen framing, what's the strongest argument against it, what specifically you'd do over the next 5 years if you committed to this framing, what would change your mind. Save the document. Re-read it in 3 years. The point isn't to predict your final career; the point is to make explicit a framework that's usually held implicitly.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Writing this document at 12 is unusual and useful.`,
          },
          identityQuestion: `If you become someone who consciously chooses your framing for future skills instead of drifting into one, what does that mean for how you make decisions across the rest of your life?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can articulate three serious framings for "future skills" when most adults can't articulate any.`,
            `A person who notices when a framing is implicit instead of explicit.`,
            `Someone willing to choose my framing deliberately instead of inheriting it.`,
          ],
          saveKey: `identity_responses_fs_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. First Future Skills lesson done. You can now articulate three serious framings for "future skills" (employability, flourishing, meta-skills), recognize them as different theories of uncertainty, understand the real strengths and weaknesses of each, and engage with the disagreement among thoughtful people. Most adults make implicit choices among these framings without ever naming them. You've made a choice explicit. Next time we go directly at one of the biggest forces shaping the world you're growing into: AI and the changing workplace. Real economists, AI labs, and critics all have very different things to say. You'll evaluate their sources and figure out what to believe. Source Evaluation format. Let's go. — Byte`,
          badge: `framework-builder`,
          badgeName: `Framework Builder`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious framings for "future skills" (employability, flourishing, meta-skills)`,
            `Recognizes each as a different theory of uncertainty about the future`,
            `Knows the strengths and weaknesses of each framing`,
            `Understands meta-skills, flourishing, adaptability as distinct concepts`,
            `Can engage with the disagreement among thoughtful people on which framing is best`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: AI and the Changing Workplace`,
            hook: `Real economists, AI labs, and viral content all have very different things to say. Three sources, your evaluation.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L01 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
