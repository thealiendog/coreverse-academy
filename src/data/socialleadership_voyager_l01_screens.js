// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L01 — What Leadership Actually Is
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Leadership Theory, Applied Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026) — opens band with the foundational question
// Interaction format: ARGUMENT BUILDER (results / influence / service-stewardship)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l01-v1";

const SOCIALLEADERSHIP_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-01`,
      title: `What Leadership Actually Is`,
      duration: 35,
      xpReward: 75,
      badge: `leadership-foundations`,
      badgeName: `Leadership Foundations`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, leadership is one of those words that means something different to almost everyone who uses it. Results? Influence? Service? The definition you choose determines who counts as a leader, what gets rewarded, and what you're trying to become. This lesson maps three serious positions and asks you to commit to one.`,
          headline: `What Leadership Actually Is`,
          subtitle: `Three serious answers. Your working definition shapes everything that follows.`,
          visual: `/voyager-assets/social-leadership/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Definition Matters`,
          paragraphs: [
            `Most people use "leadership" as if everyone knows what it means. They don't. The word covers many different things and the differences matter. The person who runs a Fortune 500 company is doing something different from a civil rights organizer, who's doing something different from a Navy SEAL team commander, who's doing something different from a great teacher, who's doing something different from a parent. All of them get called "leaders." The differences are real and worth distinguishing.`,
            `Why this matters practically. Your working definition of leadership shapes how you act in every leadership situation you encounter. If you think leadership is mostly about getting results, you'll prioritize outcomes and may underweight how you treat people along the way. If you think leadership is mostly about influence, you'll focus on getting people to act and may underweight whether you're influencing them toward something worth doing. If you think leadership is mostly about service to those you lead, you'll prioritize their well-being and may underweight delivering results.`,
            `Real leadership researchers and practitioners disagree about what leadership essentially is. James MacGregor Burns, a political scientist, distinguished "transactional" leadership (exchanges between leaders and followers) from "transformational" leadership (where both leaders and followers are elevated) in his 1978 book "Leadership." Robert Greenleaf coined "servant leadership" in a 1970 essay arguing that the best leaders serve those they lead. Ronald Heifetz at Harvard developed "adaptive leadership" focused on helping groups address difficult challenges. None of these is the obviously right answer; all three have been influential and have empirical support.`,
            `What hasn't changed across these debates: leadership involves multiple people, a shared situation, and someone taking responsibility for navigating that situation toward something. The disagreements are about which parts of this matter most. The honest framing is that leadership is genuinely contested as a concept, and serious thinkers offer different definitions because the underlying activity varies enormously.`,
          ],
          image: `/voyager-assets/social-leadership/l01-s1-definition.webp`,
          imageCaption: `Definition matters practically. Different working definitions produce different behavior in real leadership situations.`,
          vocab: [
            {
              word: `transformational leadership`,
              definition: `Distinction from James MacGregor Burns's 1978 book "Leadership." Transactional leadership involves exchanges between leaders and followers (do X, get Y). Transformational leadership involves both leaders and followers being elevated to higher levels of motivation and morality. The distinction has been influential in leadership research. Most real leadership involves elements of both.`,
              audioPrompt: `Transactional versus transformational leadership is a distinction from James MacGregor Burns's 1978 book "Leadership," {name}. Transactional leadership involves exchanges between leaders and followers: do this work and get this reward, hit this target and get this promotion, follow these rules and receive these benefits. Most everyday management is transactional. Transformational leadership involves both leaders and followers being elevated to higher levels of motivation and morality. The transformational leader doesn't just exchange with followers but actually shapes what they care about, helps them become more capable, and works toward goals neither side could have articulated alone. Burns argued transformational leadership was rarer and more powerful. The distinction has been influential in leadership research and has held up across decades. Most real leadership involves elements of both transactional and transformational; pure versions of either are uncommon.`,
            },
            {
              word: `adaptive leadership`,
              definition: `Framework developed by Ronald Heifetz at Harvard focused on helping groups address difficult challenges that don't have technical solutions. Distinguished from "technical" problems (known solutions exist) versus "adaptive" problems (require new learning, changed values, or changed behavior). Adaptive leadership involves mobilizing people to grapple with hard problems rather than giving them answers. Influential in public leadership and organizational development.`,
              audioPrompt: `Adaptive leadership is a framework developed by Ronald Heifetz at Harvard, {name}. It focuses on helping groups address difficult challenges that don't have ready-made solutions. Heifetz distinguishes between "technical" problems, where known solutions exist and experts can solve them, and "adaptive" problems, which require new learning, changed values, or changed behavior across the group. Adaptive challenges can't be solved by the leader alone because the solution requires change in the people themselves. Adaptive leadership involves mobilizing people to grapple with hard problems rather than giving them answers. This is harder than it sounds because followers often want the leader to just solve things. Heifetz developed the framework through research on political and organizational leadership. Influential in public leadership, organizational development, and community change work. Directly relevant to most serious leadership situations you'll face.`,
            },
            {
              word: `contested concept`,
              definition: `A concept where serious thinkers have genuinely different definitions because the underlying phenomenon varies enough that different framings capture different real aspects. Leadership is a contested concept: Burns, Greenleaf, Heifetz, Drucker, Collins, Maxwell all offer different definitions not because some are wrong but because they're capturing different real things leadership can be. Knowing a concept is contested protects you from treating any single definition as obviously correct.`,
              audioPrompt: `A contested concept is one where serious thinkers have genuinely different definitions because the underlying phenomenon varies enough that different framings each capture something real, {name}. Leadership is a contested concept. Burns's transformational leadership, Greenleaf's servant leadership, Heifetz's adaptive leadership, Drucker's effectiveness focus, Collins's Level 5 framework, Maxwell's influence definition — these aren't random disagreements. Each captures something real about what leadership can be. The disagreements are about which aspect is most fundamental. Knowing a concept is contested protects you from treating any single definition as obviously correct. It also helps you see why leadership content varies so much: people are describing real things, just different real things under the same word. The practical implication: when you use the word "leadership," it helps to say which kind you mean.`,
            },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Leadership Is About Results`,
          paragraphs: [
            `The first position: leadership is fundamentally about producing results through and with other people. A team without results isn't being led well, no matter how good the process or how warm the relationships. A leader who keeps everyone happy but doesn't deliver hasn't actually led. The point of leadership is to get something done that wouldn't have happened otherwise.`,
            `The case has real strength. Many of the most celebrated leaders in history are remembered for what they accomplished, not for their process. Civil rights legislation passed. Companies built. Wars won or peace secured. Lives saved. The accomplishments matter because they affected the people the leader was responsible for. Process matters too, but as means toward outcomes that mattered to real people. A leader who optimized process while failing on outcomes would be missing what leadership is for.`,
            `Defenders include much of the business management tradition, military doctrine, sports coaching, and many practical professionals across fields. Jim Collins's "Good to Great" research (2001) found that "Level 5" leaders combined personal humility with intense professional will toward results. The "professional will" half is the results-focus. Peter Drucker, often called the founder of modern management theory, treated effectiveness (achieving results) as the central question of leadership.`,
            `The limits. Pure results-focus can produce leaders who get outcomes through manipulation, exploitation, burnout, ethical shortcuts, or harm to the people involved. "The ends justify the means" reasoning, taken seriously, allows terrible behavior. The history of business and political leadership has many examples of leaders who produced results in ways that damaged employees, communities, or institutions. Results matter, but they're not the only thing that matters. Pure results-focus also tends to underweight long-term sustainability: leaders who burn out their teams produce short-term wins and long-term collapse.`,
          ],
          image: `/voyager-assets/social-leadership/l01-s2-results.webp`,
          imageCaption: `Position 1: results define leadership. Drucker, Collins's Level 5 leaders, military doctrine, business management tradition.`,
          vocab: [
            {
              word: `leadership`,
              definition: `Concept from Jim Collins's 2001 book "Good to Great." Level 5 leaders combine personal humility with intense professional will. They're paradoxically modest about themselves while being fierce about achieving the organization's goals. Collins found Level 5 leaders disproportionately led companies that made sustained leaps from good to great performance. Influential framework in business literature.`,
              audioPrompt: `Level 5 leadership is a concept from Jim Collins's 2001 book "Good to Great," {name}. Collins and his research team studied companies that made sustained leaps from good to great performance over 15 years. They found these companies disproportionately had what Collins called "Level 5" leaders. Level 5 leaders combine personal humility with intense professional will. They're paradoxically modest about themselves while being fierce about achieving the organization's goals. They take responsibility for failures and credit others for successes. They focus on building the institution rather than building their personal brand. Collins contrasted Level 5 with the celebrity-CEO model that was popular in the 1990s. The framework has been influential in business literature and has held up reasonably well in subsequent research. Has been critiqued for survivor bias and methodology limits, but the underlying pattern (humility plus will) shows up in other leadership research too.`,
            },
            {
              word: `professional will`,
              definition: `One of two defining traits of Jim Collins's Level 5 leaders. Fierce resolve to do whatever is needed to produce the best long-term results for the organization. Paired with personal humility — Level 5 leaders are ambitious for the institution, not for themselves. Professional will shows up in demanding standards, long time horizons, and willingness to make hard calls when results require it.`,
              audioPrompt: `Professional will is one of the two defining traits of Jim Collins's Level 5 leaders, {name}. It is a fierce resolve to do whatever is needed to produce the best long-term results for the institution. Collins found that Level 5 leaders paired this intense professional drive with the second trait, personal humility. They were ambitious for the organization, not for themselves. Professional will shows up in demanding standards: these leaders didn't accept mediocrity and would make hard personnel decisions when necessary. It shows up in long time horizons: they were building for sustained greatness, not short-term wins. And it shows up in taking full responsibility for failures rather than blaming external factors. The pairing of professional will with humility is what distinguished Level 5 from celebrity leaders who had drive but directed it toward their own visibility rather than the institution's long-term health.`,
            },
            {
              word: `long-term sustainability`,
              definition: `In leadership, the quality of producing results through approaches that can be maintained over time without burning out people or damaging the organization. Pure results-focus without sustainability consideration produces short-term wins and long-term collapse. Leaders who burn out their teams, cut ethical corners, or damage institutional trust may show strong short-term outcomes but create the conditions for eventual failure.`,
              audioPrompt: `Long-term sustainability in leadership is the quality of producing results through approaches that can be maintained over time without burning out people or degrading the organization, {name}. Pure results-focus without this consideration produces a predictable pattern: short-term wins followed by long-term collapse. Leaders who drive their teams to exhaustion, cut ethical corners to hit targets, or damage institutional trust may show strong quarterly results but create the conditions for eventual failure. The history of business and political leadership has many examples. Collins's Level 5 research is relevant here: the leaders who produced sustained fifteen-year leaps were not the ones optimizing short-term metrics. They were building something that could last. For 12-year-olds, the framing matters because the patterns of how you drive results as a leader develop early. Building sustainability awareness now produces better long-term outcomes for everyone you'll lead.`,
            },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Leadership Is About Influence`,
          paragraphs: [
            `The second position: leadership is fundamentally about influencing other people to take action, with or without formal authority. The person who can get others to act voluntarily on a shared goal is leading. The person who can only get action through formal power (orders, threats, payment) is managing or commanding, not leading. The core skill is influence; the formal title is secondary.`,
            `The case has real strength. The most enduring leadership often comes from people without formal authority. Civil rights leaders rarely held the formal power they were challenging. Cultural movements often emerge from people who built influence before they had position. Even within formal organizations, the people who actually shape what happens often have influence beyond their titles, while title-holders with no influence accomplish little. Influence is what makes the wheels turn; formal authority is one source of influence but far from the only one.`,
            `Defenders include John Maxwell (whose books on influence-based leadership have sold tens of millions of copies), much of the political science literature on leadership, civil rights and social movement scholars, and many working leaders who've operated without formal authority. The framing connects to research on persuasion (Robert Cialdini's work), psychological safety as a leadership concept (Amy Edmondson), and the broader recognition that leadership exists at every level of any organization, not just at the top.`,
            `The limits. Influence without substance is hollow. Some of the most influential people in history have led others toward terrible ends. The Stanford research on influence techniques shows how much of social influence is manipulation that bypasses careful thought. Influence-focused leadership can slide into manipulation, demagoguery, or cult-of-personality dynamics. Influence is necessary for leadership but not sufficient; what you influence people TOWARD matters as much as the influence itself. The influence framing also tends to underweight situations where formal authority is necessary (crisis leadership, certain technical decisions, certain ethical lines).`,
          ],
          image: `/voyager-assets/social-leadership/l01-s3-influence.webp`,
          imageCaption: `Position 2: influence is the core skill. Maxwell, civil rights leaders, organizational research showing influence beyond formal authority.`,
          vocab: [
            {
              word: `influence vs authority`,
              definition: `Distinction in leadership theory. Authority: formal power given by position (a manager can give orders, a parent has parental authority). Influence: the ability to shape what others do without relying on formal power. Both exist; they're not the same. Some leaders have authority without influence (people don't really follow them despite their position); some have influence without authority (no formal title but others follow voluntarily).`,
              audioPrompt: `Influence versus authority is a useful distinction in leadership theory, {name}. Authority is formal power given by position. A manager can give orders because they have managerial authority. A parent has parental authority. A judge has judicial authority. Influence is the ability to shape what others do without relying on formal power. Both exist and they're not the same thing. Some leaders have authority without influence: they have the position but people don't really follow them, just comply minimally. Other leaders have influence without authority: they have no formal title but others voluntarily follow because of who they are or what they've shown. The most effective leadership typically combines both, but you can have one without the other. Many of the most enduring leadership achievements in history came from people who built influence before they had formal authority, then used the combination to accomplish what neither alone could have achieved.`,
            },
            {
              word: `voluntary action`,
              definition: `Action taken because a person genuinely chooses to, as opposed to compliance driven by orders, threats, or payment. The influence-based view of leadership holds that real leadership produces voluntary action — people following because they want to, not because they have to. Voluntary action tends to be more sustained and higher quality than coerced compliance, because the person is internally motivated rather than externally pressured.`,
              audioPrompt: `Voluntary action is action taken because a person genuinely chooses to, as opposed to compliance driven by orders, threats, or payment, {name}. The influence-based view of leadership holds that real leadership produces voluntary action. People follow because they want to, not because they have to. This distinction matters practically. Voluntary action tends to be more sustained over time because it doesn't depend on constant external pressure. It tends to be higher quality because the person is internally motivated and brings real engagement rather than minimal compliance. And it produces real alignment rather than surface behavior that disappears when the authority figure isn't watching. John Maxwell's claim that "leadership is influence, nothing more, nothing less" rests on this foundation: if people are only acting because you can make them, you're not really leading. Real leadership changes what people want to do, not just what they have to do.`,
            },
            {
              word: `demagoguery`,
              definition: `A failure mode of influence-focused leadership where leaders appeal to emotions, fears, and prejudices to build followership rather than to genuine reasoning or shared values. Demagoguery produces influence but directs it toward harmful or divisive ends. Historical examples across political leadership show how influence skills without substance or ethics can mobilize people toward terrible outcomes. The risk is why influence alone is insufficient — what you influence people toward matters.`,
              audioPrompt: `Demagoguery is a failure mode of influence-focused leadership where leaders appeal to emotions, fears, and prejudices to build followership rather than to genuine reasoning or shared values, {name}. Demagoguery demonstrates that influence skills divorced from substance and ethics can be dangerous. Historical examples across political history show influential leaders who mobilized people toward harmful or divisive ends. The pattern is recognizable: emotional manipulation, scapegoating of out-groups, promises that bypass careful thinking, followers responding to how they feel rather than what they've considered. This is why the influence-based view of leadership has a real limit. Influence is necessary for leadership but not sufficient. What you influence people toward matters as much as the influence itself. A person with powerful influence skills who lacks integrity and sound judgment can produce enormous harm at scale. The limit doesn't invalidate influence as central to leadership, but it argues that influence must be paired with something — substance, ethics, genuine service — to constitute good leadership.`,
            },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Leadership Is About Service And Stewardship`,
          paragraphs: [
            `The third position: leadership is fundamentally about taking responsibility for the well-being of those you lead. The leader's job is to serve the people in their care: meeting their needs, removing obstacles to their flourishing, taking the harder responsibilities so others don't have to. The framing inverts the conventional hierarchy where leaders are on top and followers serve them; in service leadership, the leader is the one who serves.`,
            `The case has real strength. Robert Greenleaf, who'd spent decades at AT&T watching effective and ineffective leaders, articulated this framing in a 1970 essay called "The Servant as Leader." His argument: the best leaders he'd observed weren't oriented around their own power or even around results in isolation; they were oriented around the growth and well-being of those they led. Results followed from that orientation, not the other way around.`,
            `The framing has deep roots beyond Greenleaf. Many religious and ethical traditions describe leadership as service or stewardship. Aristotle wrote about leadership as cultivating virtue in those one leads. Confucian ethics treats the leader's primary obligation as the well-being of subordinates and the broader community. Many indigenous leadership traditions explicitly frame the leader as the one who takes the heaviest burdens to protect others. The pattern is widespread enough across cultures to suggest something real underneath it.`,
            `Defenders include the servant leadership tradition that emerged from Greenleaf's work (still active today), many religious and philosophical leadership traditions, contemporary leadership researchers who study the effects of leader behavior on followers, and many working leaders who've found this framing produces sustainable results without the costs of pure power-focused leadership. Adam Grant's research on "givers" (in his book "Give and Take," 2013) shows that givers — leaders oriented around helping others — often produce the strongest long-term outcomes despite appearing less self-interested in the short term.`,
            `The limits. Pure service-focus can become paternalism: the leader decides what others "need" rather than what they actually want. It can also be used as cover for avoiding accountability ("I'm just trying to help" can excuse bad outcomes). And it can be impractical in some situations where firm decisions or directive leadership is required (crisis response, hostile competition, certain operational situations). Service framing is most powerful when combined with genuine respect for the agency of those served, not when it becomes a more sophisticated way of doing things to people.`,
          ],
          image: `/voyager-assets/social-leadership/l01-s4-service.webp`,
          imageCaption: `Position 3: leadership is service to those led. Greenleaf 1970, religious and ethical traditions, Adam Grant's "Give and Take."`,
          vocab: [
            {
              word: `servant leadership`,
              definition: `Term coined by Robert Greenleaf in his 1970 essay "The Servant as Leader." Framing where leadership is essentially about serving those led: meeting their needs, removing obstacles, supporting their growth. Inverts the conventional hierarchy. Has spawned a substantial literature and many organizational implementations. Has roots in many religious and ethical traditions predating Greenleaf.`,
              audioPrompt: `Servant leadership is a term coined by Robert Greenleaf in his 1970 essay "The Servant as Leader," {name}. Greenleaf had spent decades at AT&T watching effective and ineffective leaders. His observation: the best leaders he'd seen weren't oriented around their own power or even around results in isolation. They were oriented around the growth and well-being of those they led. Results followed from that orientation. Greenleaf argued for a framing where leadership is essentially about serving those led. Meeting their needs, removing obstacles to their flourishing, supporting their growth, taking heavier responsibilities so others don't have to. The framing inverts the conventional hierarchy where leaders are on top and followers serve them. In servant leadership, the leader is the one who serves. Has spawned a substantial literature and many organizational implementations since 1970. Has deeper roots in many religious and ethical traditions predating Greenleaf, though he articulated it in the modern leadership context.`,
            },
            {
              word: `stewardship`,
              definition: `The responsibility of managing something entrusted to your care on behalf of others. In leadership, stewardship means treating your role not as ownership but as temporary responsibility for the well-being of people, resources, and institutions that existed before you and will continue after you. Stewardship framing connects to service leadership traditions across Confucian ethics, many religious traditions, and contemporary institutional leadership.`,
              audioPrompt: `Stewardship is the responsibility of managing something entrusted to your care on behalf of others, {name}. In leadership, stewardship means treating your role not as ownership but as temporary responsibility. The people you lead, the resources your organization has, the institution itself — these existed before you and will continue after you. You hold them in trust for a time. Stewardship framing shifts how you make decisions. An owner asks: what do I want to do with this? A steward asks: what is the right thing to do with what's been entrusted to me? Stewardship connects to service leadership traditions across Confucian ethics, where leaders hold primary obligation to the well-being of subordinates and the broader community, many religious traditions that treat leadership as sacred responsibility, and contemporary institutional leadership that emphasizes long-term institutional health over short-term outcomes. The framing is one of the oldest in leadership thinking across cultures.`,
            },
            {
              word: `paternalism`,
              definition: `A failure mode of service-focused leadership where the leader decides what others "need" rather than respecting what they actually want or can choose for themselves. Paternalism produces a subtler form of top-down control — the leader is "helping" rather than commanding, but still overriding the agency of those led. The service framing is most powerful when combined with genuine respect for the agency of those served, not when it becomes a sophisticated way of doing things to people for their own good.`,
              audioPrompt: `Paternalism is a failure mode of service-focused leadership where the leader decides what others need rather than respecting what they actually want or can choose for themselves, {name}. It is the limit that pure service-focus can fall into. The leader is "helping" rather than commanding, but still overriding the agency of those led. The pattern is recognizable: "I know what's best for you," decisions made without input from those affected, welfare provided without respecting the recipient's own judgment and preferences. Paternalism produces resentment even when it comes from genuinely good intentions, because it treats adults — or kids who could be given real agency — as incapable of knowing what they need. Greenleaf's servant leadership is most powerful when paired with genuine respect for the agency of those served, when serving means removing obstacles to people pursuing what they actually care about rather than deciding for them what they should care about. The distinction matters for 12-year-olds leading peers or younger kids: help them do what they want to do better rather than deciding for them.`,
            },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature leadership theory acknowledges results matter, influence matters, and service matters. The disagreement is about which is primary, which is the foundation everything else builds on. Different primary commitments produce different practical behavior in specific situations.`,
            `One framing to consider. Each position implies different responses to a hard situation. Imagine a team that's underperforming. Position 1 (results) focuses on diagnosing why and changing what's needed to get the results back on track, including potentially removing team members. Position 2 (influence) focuses on rebuilding shared commitment, addressing what's eroded engagement, and influencing the team back toward willing effort. Position 3 (service) focuses on understanding what the team needs, what's blocking them, and what the leader could remove or provide to support their flourishing. All three could be reasonable; they prioritize different things.`,
            `Another framing. The three positions tend to produce different leadership styles over time. Position 1 leaders tend to be decisive, outcome-focused, willing to make hard calls. Position 2 leaders tend to be persuasive, relationship-oriented, skilled at building coalitions. Position 3 leaders tend to be empathetic, supportive, attentive to individual needs. Each style has strengths in some contexts and weaknesses in others. Knowing your default helps you supplement with what you don't naturally do.`,
            `One last framing. You're 12. You're already in leadership situations whether or not you call them that. Your working definition of leadership shapes your behavior in every group you're part of. The exercise of choosing deliberately, rather than absorbing whatever framing your environment gives you, is the foundation of intentional leadership. Most adults never explicitly choose their leadership framing. The compound effect over a lifetime of leading is significant.`,
          ],
          image: `/voyager-assets/social-leadership/l01-s5-before.webp`,
          imageCaption: `Three positions produce different practical responses. Most adults never explicitly choose their leadership framing.`,
          vocab: [
            {
              word: `leadership style`,
              definition: `Consistent pattern in how a leader approaches situations: decisive vs deliberative, directive vs collaborative, results-focused vs relationship-focused, etc. Style is partly natural personality and partly learned. Most effective leaders have a default style and can adapt to other styles when situations require. Knowing your default helps you supplement with what you don't naturally do.`,
              audioPrompt: `Leadership style is the consistent pattern in how a leader approaches situations, {name}. Some leaders are decisive: they make calls quickly and move on. Others are deliberative: they consult, consider, and decide carefully. Some are directive: they give clear instructions about what to do. Others are collaborative: they invite input and build shared decisions. Some are results-focused: they keep the team oriented around outcomes. Others are relationship-focused: they invest in the human dynamics that make work possible. Style is partly natural personality and partly learned through experience. Most effective leaders have a default style and can adapt to other styles when situations require. Knowing your default helps you supplement with what you don't naturally do. A naturally decisive leader benefits from learning when to slow down and consult; a naturally deliberative leader benefits from learning when to commit and act quickly. Range of styles available is part of leadership maturity.`,
            },
            {
              word: `primary commitment`,
              definition: `The foundational framing a leader defaults to when the three positions — results, influence, and service — come into tension. Most people have an implicit primary commitment they've never articulated. Making it explicit produces more deliberate leadership: you can see where your default serves situations well and where it underweights something important. The primary commitment shapes behavior especially in hard situations where all three considerations can't be fully satisfied.`,
              audioPrompt: `Primary commitment in leadership is the foundational framing a leader defaults to when results, influence, and service come into tension, {name}. Most people have an implicit primary commitment they've never articulated — they absorbed it from their environment or experience without conscious choice. Making it explicit produces more deliberate leadership. You can see where your default serves situations well and where it causes you to underweight something important. Results-primary leaders may underweight relationship; influence-primary leaders may underweight what they're influencing toward; service-primary leaders may underweight delivering outcomes. The primary commitment shapes behavior especially in hard situations where all three considerations can't be fully satisfied. If you have limited time and have to choose between producing the result quickly and doing it in a way that serves the team's growth, your primary commitment determines what you choose. Choosing it deliberately at 12 means you're working with it rather than being worked by it.`,
            },
            {
              word: `intentional leadership`,
              definition: `Leadership practiced through deliberate choice of framing, approach, and response rather than through reflex or absorbed default. The opposite is unreflective leadership where the leader acts on whatever feels natural without examining whether that approach serves the situation. Intentional leadership involves explicit working definitions, awareness of your default style, and deliberate adaptation. Most adults lead unreflectively; explicit choice at 12 produces compounding advantage.`,
              audioPrompt: `Intentional leadership is leadership practiced through deliberate choice of framing, approach, and response rather than through reflex or absorbed default, {name}. The opposite is unreflective leadership, where the leader acts on whatever feels natural without examining whether that approach serves the situation. Most adults lead unreflectively — they absorbed a style from their parents, their early bosses, or their cultural context and they lead that way without questioning it. Intentional leadership involves explicit working definitions: you know what leadership is and why you think that. Awareness of your default style: you know whether you lean decisive or deliberative, directive or collaborative, results or relationship. And deliberate adaptation: you can recognize when situations call for something different from your default and shift accordingly. The compound effect of intentional versus unreflective leadership over a lifetime is enormous. The leadership decisions you make in thousands of situations over decades will be shaped by what you're working from — choosing your working framing at 12 gives you 70 years to build on it deliberately.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l01-argument-builder`,
          type: `argument-builder`,
          headline: `What Is Leadership Actually?`,
          intro: `Pick the position that best captures your current understanding. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious thinkers defend each.`,
          positions: [
            {
              id: `results`,
              label: `Leadership is fundamentally about results: producing outcomes through and with other people`,
              summary: `A team without results isn't being led well, no matter how good the process. The point of leadership is to accomplish something that wouldn't have happened otherwise. Defenders include business management tradition (Drucker), Jim Collins's Level 5 framework, military doctrine, sports coaching. Strength: keeps leadership grounded in tangible accomplishment; the accomplishments matter because they affect real people. Limit: pure results-focus can produce manipulation, burnout, ethical shortcuts; "ends justify means" reasoning allows terrible behavior; tends to underweight long-term sustainability.`,
            },
            {
              id: `influence`,
              label: `Leadership is fundamentally about influence: getting people to take action, with or without formal authority`,
              summary: `The person who can get others to act voluntarily on a shared goal is leading. Influence is what makes wheels turn; formal authority is one source of influence but not the only one. Defenders include John Maxwell, civil rights and social movement scholars, Robert Cialdini's persuasion research, Amy Edmondson's work on leadership at every level. Strength: explains how leadership works without formal authority; many enduring leaders had influence before position. Limit: influence without substance is hollow; can slide into manipulation, demagoguery, or cult of personality; underweights situations requiring formal authority.`,
            },
            {
              id: `service-stewardship`,
              label: `Leadership is fundamentally about service and stewardship: taking responsibility for the well-being of those you lead`,
              summary: `The leader's job is to serve those in their care: meeting their needs, removing obstacles to their flourishing, taking the harder responsibilities. Inverts the conventional hierarchy. Defenders include Robert Greenleaf (1970, "The Servant as Leader"), many religious and ethical traditions, Adam Grant's "Give and Take" research showing givers often produce strongest long-term outcomes. Strength: produces sustainable results without costs of pure power-focused leadership; deep cross-cultural roots. Limit: pure service-focus can become paternalism; can excuse poor accountability; impractical in some crisis or directive situations.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Peter Drucker, often called the founder of modern management theory, treated effectiveness (achieving results) as the central question of leadership. His framework has shaped how organizations have been led for over 50 years and remains influential.`,
              source: `Drucker's body of work; widely cited in management literature`,
            },
            {
              id: `e2`,
              text: `Jim Collins's "Good to Great" research (2001) found that "Level 5" leaders combined personal humility with intense professional will toward results. Companies that made sustained leaps from good to great performance disproportionately had this kind of leader. The "professional will" half is results-focus.`,
              source: `Collins 2001; subsequent research`,
            },
            {
              id: `e3`,
              text: `Civil rights and social movement history is full of leaders who held no formal authority but built sufficient influence to change laws, institutions, and culture. The pattern shows that influence can produce leadership outcomes without conventional authority.`,
              source: `Multiple historical studies of social movements`,
            },
            {
              id: `e4`,
              text: `John Maxwell's books on influence-based leadership have sold tens of millions of copies and shaped how many working leaders think about their craft. His central claim "leadership is influence, nothing more, nothing less" represents the position in popular form.`,
              source: `Maxwell's published work`,
            },
            {
              id: `e5`,
              text: `Robert Greenleaf, after decades at AT&T watching effective and ineffective leaders, articulated servant leadership in his 1970 essay. His argument: the best leaders weren't oriented around power or results alone; they were oriented around the growth and well-being of those they led. Results followed.`,
              source: `Greenleaf 1970; subsequent servant leadership literature`,
            },
            {
              id: `e6`,
              text: `Adam Grant's research in "Give and Take" (2013) showed that "givers" — people oriented around helping others — often produce the strongest long-term outcomes despite appearing less self-interested in the short term. The research supports service-oriented leadership as practically effective, not just morally appealing.`,
              source: `Grant 2013; subsequent organizational psychology research`,
            },
            {
              id: `e7`,
              text: `James MacGregor Burns's 1978 book "Leadership" distinguished transactional from transformational leadership. Transformational leadership elevates both leaders and followers; it's not purely about results, purely about influence, or purely about service but about transformation. The framework has been influential in leadership research.`,
              source: `Burns 1978`,
            },
            {
              id: `e8`,
              text: `Most mature leadership research acknowledges all three considerations matter. The disagreement is about which is primary and how to handle situations where they conflict. The choice of primary commitment shapes specific behavior in cases where you can't fully satisfy all three.`,
              source: `Leadership research literature; multiple sources`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions treat leadership as fundamentally something the LEADER does. But maybe that's the wrong frame. Recent research on followership, group dynamics, and emergent leadership suggests leadership is actually a property of the group, not of the individual leader. Different people lead at different moments depending on what the situation requires. The 'leader' is just whichever person is currently exercising leadership in a flexible group. If that's right, all three positions are too leader-centric: they ask 'what should the leader do' when the better question is 'what should the group do, and who's best positioned to do it right now?' Why think any leader-centric position is the right level to analyze at, when the actual phenomenon may be inherently distributed?"`,
            promptInstruction: `In 3-4 sentences, respond. Is leadership a property of individual leaders or of groups? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why does the working definition of leadership matter practically?`,
              options: [
                `It doesn't`,
                `Your working definition shapes how you act in every leadership situation; results-focus prioritizes outcomes but may underweight how people are treated; influence-focus prioritizes getting action but may underweight what action is for; service-focus prioritizes well-being but may underweight delivering results`,
                `Just academic`,
                `For tests`,
              ],
              correctIndex: 1,
              explanation: `Most adults never explicitly choose their leadership framing. The compound effect over a lifetime of leading is significant. Different working definitions produce different behavior in specific situations, especially when considerations conflict.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "transactional vs transformational leadership"?`,
              options: [
                `Same thing`,
                `Distinction from James MacGregor Burns (1978): transactional involves exchanges between leaders and followers (do X get Y); transformational involves both leaders and followers being elevated to higher motivation and morality; most real leadership involves elements of both`,
                `Money vs change`,
                `Random terms`,
              ],
              correctIndex: 1,
              explanation: `Burns argued transformational leadership was rarer and more powerful. The distinction has been influential in leadership research and has held up across decades. Pure versions of either are uncommon; mature leaders blend both.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the case for "leadership is about results"?`,
              options: [
                `Money is good`,
                `A team without results isn't being led well no matter how good the process; the point of leadership is to accomplish something that wouldn't have happened otherwise; the accomplishments matter because they affect real people; defenders include Drucker, Collins's Level 5 framework, military doctrine`,
                `Goals are nice`,
                `Random opinion`,
              ],
              correctIndex: 1,
              explanation: `Limit: pure results-focus can produce manipulation, exploitation, burnout, ethical shortcuts. "Ends justify means" reasoning allows terrible behavior. The position works when constrained by ethics and sustainability; it overstates when applied universally.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "Level 5 leadership" (Collins)?`,
              options: [
                `Top rank`,
                `Concept from Jim Collins's "Good to Great" (2001): Level 5 leaders combine personal humility with intense professional will; modest about themselves while fierce about achieving organization's goals; took responsibility for failures, credited others for successes; focused on building institution rather than personal brand`,
                `Video game level`,
                `Tier system`,
              ],
              correctIndex: 1,
              explanation: `Collins's research found Level 5 leaders disproportionately led companies that made sustained leaps from good to great performance. Influential framework; has been critiqued for methodology but the underlying pattern (humility plus will) shows up in other research too.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the difference between "influence" and "authority"?`,
              options: [
                `Same thing`,
                `Authority: formal power given by position (manager can give orders); influence: ability to shape what others do without relying on formal power; some leaders have authority without influence (position but people don't really follow); some have influence without authority (no title but others follow voluntarily); most effective leadership combines both`,
                `Synonyms`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Many enduring leadership achievements came from people who built influence before they had authority, then combined them. The distinction is useful because the two come apart in practice and each requires different work to build.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "servant leadership" (Greenleaf)?`,
              options: [
                `Working class`,
                `Term coined by Robert Greenleaf in 1970 essay "The Servant as Leader"; framing where leadership is essentially about serving those led: meeting needs, removing obstacles, supporting growth; inverts conventional hierarchy; has roots in many religious and ethical traditions; produces sustainable results without costs of pure power-focused leadership`,
                `Service jobs`,
                `Random theory`,
              ],
              correctIndex: 1,
              explanation: `Greenleaf had observed at AT&T that the best leaders were oriented around growth and well-being of those they led. Results followed from that orientation rather than the other way around. Has spawned substantial literature since 1970.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What did Adam Grant's "Give and Take" research show?`,
              options: [
                `Generosity wins`,
                `"Givers" (people oriented around helping others) often produce strongest long-term outcomes despite appearing less self-interested short-term; the research supports service-oriented leadership as practically effective, not just morally appealing; from his 2013 book "Give and Take"`,
                `Random study`,
                `Self-help advice`,
              ],
              correctIndex: 1,
              explanation: `Grant's research is one of the empirical anchors for service-oriented leadership. The finding wasn't that giving always wins (it doesn't); it was that the highest performers across many domains tend to be givers when they're also strategic about how they give.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "leadership style"?`,
              options: [
                `Fashion sense`,
                `Consistent pattern in how a leader approaches situations: decisive vs deliberative, directive vs collaborative, results-focused vs relationship-focused; partly natural personality and partly learned; most effective leaders have a default style and can adapt; knowing your default helps you supplement what you don't naturally do`,
                `Type of person`,
                `Personality test`,
              ],
              correctIndex: 1,
              explanation: `Range of styles available is part of leadership maturity. A naturally decisive leader benefits from learning when to slow down; a naturally deliberative leader benefits from learning when to commit quickly. Style isn't fixed; it can be expanded over time.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders and real strengths/limits. Most mature leadership theory acknowledges all three considerations matter. The question is which is primary and how to handle situations where they conflict. The choice shapes specific behavior in cases where you can't satisfy all three.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Our soccer team's captain just shouts at us and tells us to work harder. She delivers results because we win games. That's good leadership." Based on this lesson, what's the most useful response?`,
              options: [
                `"You're right"`,
                `"Winning games is one measure but not the only measure of leadership. By the pure results framing she might count as effective short-term. But what's the cost? Are teammates burning out? Is the team building something sustainable? Are people growing through the experience or just enduring it? The Level 5 leadership concept (Collins) combines results with humility and care for the people involved; pure shouting-results leadership isn't Level 5. The service framing would ask whether she's actually serving the team's growth or just extracting performance. Influence framing would ask whether players are following because they believe in her or because they have to. Real leadership questions go beyond the scoreboard, even when the scoreboard matters."`,
                `"Shouting is wrong"`,
                `"Be nicer"`,
              ],
              correctIndex: 1,
              explanation: `Real applied leadership thinking. Don't dismiss the friend's point about results; introduce the broader framework. Use Level 5, service, and influence framings to ask deeper questions about what's happening. This is the kind of analysis that makes you a better observer of leadership.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working definition of leadership? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: when you've led groups (even informally), which position have you defaulted to? What does that produce?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you commit deliberately to one primary framing of leadership, what does that change about how you'll lead over the next 50 years?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one leadership situation you're currently in (team, group project, family role, club). Apply the three positions. Which produces the most useful guidance?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there contexts where none of the three positions fits well? What about leadership in highly distributed groups (open-source projects, online communities)? How would the framings adapt?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pick one leader you respect (not famous, just someone you know). Observe them. Which of the three framings best describes their actual practice?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Your working definition of leadership shapes every group you'll be part of. Two paths.`,
          familyActivity: {
            title: `The Family Leadership Conversation`,
            duration: `45 minutes`,
            description: `At dinner, share the three positions. Then ask adults who lead in any capacity (work teams, community groups, family roles, volunteer organizations) which primary framing they default to and why. Most adults haven't articulated this explicitly. The conversation often surfaces real working philosophies that have been operating implicitly for years. Different family members may default differently, which itself produces useful conversation.`,
          },
          projectOption: {
            title: `Read One Real Leadership Book, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Jim Collins's "Good to Great" (2001, accessible for a careful 12-year-old reader), Robert Greenleaf's "Servant Leadership" essays, or Adam Grant's "Give and Take" (2013). Read carefully over 4 weeks. Write 2,000 words on what you learned, which of the three positions the book most supports, and how it changes your leadership thinking. Reading a real leadership book at 12 puts you ahead of most working adults.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Reading a serious leadership book at 12 is genuinely formative.`,
          },
          identityQuestion: `If you become someone with a deliberate working definition of leadership (rather than absorbing whatever your environment offers), what does that change about the kind of leader you become over 50 years?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone with a deliberate working definition of leadership rather than a default one.`,
            `A person who can hold results, influence, and service as competing serious considerations.`,
            `Someone willing to think carefully about leadership at 12 rather than waiting to be in formal positions.`,
          ],
          saveKey: `identity_responses_sl_11_12_1`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. First Social Leadership lesson done. You can now articulate three serious positions on what leadership essentially is, know the major thinkers behind each (Burns, Drucker, Collins, Greenleaf, Maxwell, Grant), and distinguish authority from influence as concepts. You have the foundation for 19 more lessons that build on this base. The choice you've made about which framing fits your understanding will shape how you read the rest of this band. Next time we go deeper into the related question: what's the difference between power, authority, and influence? Three sources, source evaluation format. Let's go. — Valor`,
          badge: `leadership-foundations`,
          badgeName: `Leadership Foundations`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on what leadership essentially is (results / influence / service-stewardship)`,
            `Knows major thinkers: Burns, Drucker, Collins, Greenleaf, Maxwell, Grant`,
            `Distinguishes authority from influence as concepts`,
            `Understands Level 5 leadership and transactional vs transformational`,
            `Engages with leadership as contested concept rather than absorbing default framing`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: Power vs Authority vs Influence`,
            hook: `Three sources on how these three forces actually work. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L01 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
