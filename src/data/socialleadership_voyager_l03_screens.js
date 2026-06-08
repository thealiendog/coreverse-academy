// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L03 — Building Trust
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Trust Research, Applied Leadership
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three trust-building scenarios with intuitive vs research-informed responses)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l03-v1";

const SOCIALLEADERSHIP_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-03`,
      title: `Building Trust`,
      duration: 35,
      xpReward: 75,
      badge: `trust-builder`,
      badgeName: `Trust Builder`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, trust is the foundation that durable leadership rests on. Without it, the other tools (influence, authority, even formal power) work badly or not at all. People will follow a leader they trust into difficult work; they'll resist a leader they don't trust even on easy work. The good news: trust is buildable. Real researchers have studied what produces trust and what destroys it. The patterns are clearer than most people realize. Today we work through three trust-building situations: a new team you're leading, a recovery from a broken promise, and a difficult conversation where trust is at stake. By the end you'll have a working framework for trust building you can apply in any leadership role across your lifetime.`,
          headline: `Building Trust`,
          subtitle: `The foundation durable leadership rests on. Buildable through specific patterns.`,
          visual: `/voyager-assets/social-leadership/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Trust Actually Is`,
          paragraphs: [
            `Trust is the willingness to be vulnerable to another person based on positive expectations of their behavior. The "vulnerability" part matters. Trust isn't certainty; it's accepting risk because you believe the other person won't exploit it. If you knew for sure someone would do what you want, you wouldn't need trust; you'd have guarantees. Trust exists in the space of uncertainty about what others will do.`,
            `Trust researchers have identified two main components. Competence trust: belief that the person can do what they say they can do. Character trust: belief that the person will do what they say they'll do. Both matter. A trustworthy doctor needs both medical competence (can diagnose accurately) and character (will tell you the truth even when it's hard). A competent but dishonest professional fails on character. An honest but incompetent professional fails on competence. Both kinds of trust have to be present for trust to function well.`,
            `Research by Roy Lewicki and others has shown that trust functions through specific cognitive processes. We don't trust people uniformly; we trust them for specific things based on specific evidence. A teacher might trust a student to be honest about academic work (high character trust in academic domain) while not trusting them to remember every deadline (low competence trust in organization). Real trust is granular, not blanket.`,
            `One important asymmetry. Trust takes a long time to build and can be destroyed quickly. The asymmetry isn't random; it reflects how human cognition handles negative evidence. A single significant breach often outweighs many small positive interactions. This is why most leadership research emphasizes consistency and care about the trust-relevant behaviors rather than periodic gestures of trustworthiness.`,
          ],
          image: `/voyager-assets/social-leadership/l03-s1-trust.webp`,
          imageCaption: `Trust: willingness to be vulnerable based on positive expectations. Competence and character components. Granular, not blanket.`,
          vocab: [
            {
              word: `character trust`,
              definition: `Distinction in trust research. Competence trust: belief that the person can do what they say they can do (the ability dimension). Character trust: belief that the person will do what they say they'll do (the integrity dimension). Both have to be present for trust to function. A competent but dishonest professional fails on character; an honest but incompetent professional fails on competence.`,
              audioPrompt: `Competence versus character trust is a distinction in trust research, {name}. Competence trust is belief that the person can do what they say they can do — the ability dimension. Character trust is belief that the person will do what they say they'll do — the integrity dimension. Both matter, and both have to be present for trust to function well. A trustworthy doctor needs both medical competence to diagnose accurately and character to tell you the truth even when it's hard. A competent but dishonest professional fails on character. An honest but incompetent professional fails on competence. Real trust evaluation involves both dimensions, often unconsciously. People sense when someone is competent but they don't trust them, or when someone is sincere but they don't trust them. The framework helps you name what's missing in either case. It also helps you understand what you need to demonstrate to build trust: not just one or the other but both, consistently.`,
            },
            {
              word: `vulnerability`,
              definition: `In trust research, the exposure to risk that trust requires. Trust isn't certainty — it's accepting the possibility that the other person could exploit your openness and choosing to open up anyway based on positive expectations. Trust exists specifically in the space where you can't guarantee the outcome. The willingness to be vulnerable is what makes trust different from mere calculation about predictable behavior.`,
              audioPrompt: `Vulnerability in trust research is the exposure to risk that trust requires, {name}. Trust isn't certainty — it's accepting the possibility that the other person could exploit your openness and choosing to open up anyway based on positive expectations. If you knew for sure someone would do what you want, you wouldn't need trust; you'd have guarantees. Trust exists specifically in the space where you can't guarantee the outcome. Accepting that risk — being vulnerable — is what makes trust different from mere calculation about predictable behavior. This framing matters for leadership because it explains why trust is so valuable and so fragile. Each time someone is vulnerable with you and you respond well, you strengthen trust. Each time someone is vulnerable and you exploit or dismiss it, you destroy trust. The willingness to be vulnerable is the foundation of real relationship, and real relationship is the foundation of real leadership.`,
            },
            {
              word: `granular trust`,
              definition: `The principle that trust functions specifically, not uniformly. People don't trust others in a blanket way — they trust them for specific things based on specific evidence. A person might have high character trust on honesty but low competence trust on organization. Real trust evaluation is domain-specific and evidence-based, not a single global judgment. Granular trust explains why trust can coexist with specific areas of skepticism.`,
              audioPrompt: `Granular trust is the principle that trust functions specifically rather than uniformly, {name}. Based on research by Roy Lewicki and others on how trust actually operates. People don't trust others in a blanket way. They trust them for specific things based on specific evidence. A teacher might trust a student to be honest about academic work — high character trust in that domain — while not trusting them to remember every deadline — low competence trust in organization. A friend might be completely trustworthy about keeping secrets but unreliable about being on time. Real trust is granular and domain-specific, not a single global judgment. This matters for leadership because it helps you understand exactly where trust is strong and where it needs building. It also explains why trust can coexist with areas of skepticism: you can fully trust someone in one domain while appropriately calibrating trust in another.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Builds Trust (And What Destroys It)`,
          paragraphs: [
            `Trust building has been studied across many fields: organizational psychology, family research, diplomacy, healthcare, sports teams. The patterns are remarkably consistent. Several behaviors reliably build trust over time; several reliably destroy it.`,
            `Trust builders. First: keeping commitments. The simplest and most powerful. If you say you'll do something, do it. People notice. Conversely, breaking commitments (especially small ones, repeatedly) destroys trust faster than almost anything else. Many leaders underestimate small commitments ("I'll get back to you," "I'll think about it," "We should grab coffee sometime") and overestimate the big visible ones. The small ones often matter more for trust because they're more frequent.`,
            `Second: telling the truth, especially when it's hard. Honest communication, including about mistakes and uncertainty, builds character trust over time. Avoidance, spin, or strategic deception destroys it. Many leaders think they're protecting people by softening hard truths; in practice, the softening usually shows and the trust cost is larger than the temporary discomfort would have been.`,
            `Third: consistency between words and actions. The strongest character trust comes from leaders whose behavior matches what they say. People watch what you do far more than what you say. A leader who talks about treating people well but treats them badly destroys trust regardless of their words. A leader who actually does what they say they value builds trust without needing to talk about it as much.`,
            `Fourth: showing competence in your domain. Demonstrating that you can do what you're responsible for builds competence trust. This doesn't mean being perfect; it means showing genuine capability through actual work. Some leaders try to project competence beyond what they have; this usually backfires when reality catches up. Honest competence (including honest acknowledgment of what you don't know) builds more trust than projected competence does.`,
            `Fifth: treating people fairly across the board. People notice whether you treat them differently when they're useful vs not, whether you favor your friends, whether your behavior changes based on the audience. Consistent fair treatment across contexts builds character trust; inconsistent treatment destroys it even when the favored people are happy.`,
            `Trust destroyers. Breaking commitments. Lying or strategic withholding. Throwing people under the bus to protect yourself. Taking credit for others' work. Punishing people for telling you bad news. Inconsistent treatment based on who's watching. Public criticism of people in your team. Changing your story when the situation changes. These behaviors aren't random; they all undermine either competence or character trust through reliable mechanisms.`,
          ],
          image: `/voyager-assets/social-leadership/l03-s2-builds.webp`,
          imageCaption: `Trust builders: keeping commitments, honest communication, consistency between words and actions, demonstrated competence, fair treatment.`,
          vocab: [
            {
              word: `words actions`,
              definition: `One of the strongest trust-building behaviors. When what you say you value and what you actually do match, character trust builds; when they don't match, trust erodes regardless of words. People watch what leaders do far more than what they say. The most important trust signal across nearly all research on leadership trust.`,
              audioPrompt: `Consistency between words and actions is one of the strongest trust-building behaviors across all trust research, {name}. When what you say you value and what you actually do match, character trust builds over time. When they don't match, trust erodes regardless of how good your words are. People watch what leaders do far more than what they say. A leader who talks about treating people well but treats them badly destroys trust regardless of how often they emphasize their values. A leader who actually treats people well consistently builds trust without needing to talk about it as much. The most important trust signal across nearly all research on leadership trust. The pattern is easy to articulate and hard to actually live: many leaders sincerely believe they're consistent while their behavior shows real gaps. The skill is honest self-observation, ideally with feedback from people who can see your behavior across many contexts.`,
            },
            {
              word: `fair treatment`,
              definition: `Consistent treatment of people regardless of their immediate usefulness, personal relationship to the leader, or who's watching. One of the core trust-building behaviors in leadership research. Inconsistent treatment — favoring friends, treating people differently based on audience, changing behavior when useful vs not — destroys character trust across the whole group because everyone observes how the leader treats others and updates their expectations accordingly.`,
              audioPrompt: `Fair treatment is consistent treatment of people regardless of their immediate usefulness, personal relationship to the leader, or who's watching, {name}. One of the core trust-building behaviors in leadership research. People notice whether a leader treats them differently when they're useful versus not. They notice visible favoritism toward specific people. They notice when the leader's behavior shifts based on the audience — kind in public, dismissive in private. These observations update everyone's trust calculation, not just the directly affected person. If you treat someone badly when you think nobody's watching, the people who see it conclude they'll be treated the same way when it's their turn to be unobserved. Consistent fair treatment across contexts builds character trust because it signals people can predict how they'll be treated regardless of circumstance. Most leaders believe they're fair while having visible favoritism patterns they've never examined. Honest observation and feedback help close the gap.`,
            },
            {
              word: `trust asymmetry`,
              definition: `The pattern that trust takes a long time to build but can be destroyed quickly. Reflects how human cognition handles negative evidence: a single significant breach often outweighs many small positive interactions. This asymmetry is why leadership research emphasizes consistency in trust-relevant behaviors rather than periodic dramatic demonstrations of trustworthiness.`,
              audioPrompt: `Trust asymmetry is the pattern that trust takes a long time to build but can be destroyed much more quickly, {name}. This asymmetry isn't random — it reflects how human cognition handles negative evidence. A single significant breach of trust often outweighs many small positive interactions. Someone who has been consistently trustworthy for months can see that trust seriously damaged by one visible betrayal. The asymmetry works in the other direction too: negative evidence has stronger weight than equivalent positive evidence in updating trust judgments. This is why leadership research consistently emphasizes consistency in trust-relevant behaviors rather than periodic dramatic demonstrations of trustworthiness. Occasional grand gestures don't compensate for daily small inconsistencies. The small consistent behaviors — keeping minor commitments, telling small hard truths, treating people fairly when it costs you something — are what build durable trust over time.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rebuilding Trust After It Breaks`,
          paragraphs: [
            `Trust can be rebuilt after a breach, but the process is specific and harder than initial building. The asymmetry from section 1 (slow to build, fast to lose) shows up here too: rebuilding from a major breach takes longer than the original building did. Some breaches can be rebuilt; some can't. Knowing what works matters because most leaders will be on both sides of trust breach over their careers.`,
            `What rebuilding requires. First: clear acknowledgment of what happened. Not "mistakes were made" or "if I caused any discomfort"; specific acknowledgment of the specific breach. Vague non-apologies usually deepen the break because they signal the person doesn't see what they did. Real acknowledgment names the behavior and its impact.`,
            `Second: genuine accountability, including consequences. The person who breached trust needs to take responsibility, not blame others or circumstances. Where appropriate, accept consequences. Diane Vaughan's research on trust violations shows that attempted minimization or shifting of blame usually makes recovery impossible even if the underlying breach was forgivable.`,
            `Third: specific commitments about what will be different and follow-through over time. Words about "doing better" mean nothing without specific behavior change. The trust gets rebuilt slowly through observed consistent change, not through promises about change. Trust researchers typically estimate the rebuilding period at multiples of the breach itself: a one-time small breach may take weeks or months of consistent corrective behavior; a major repeated breach may take years.`,
            `Fourth: patience with the other person's process. The breached party gets to decide how much trust to rebuild and at what pace. Pressuring them ("you should trust me again by now") destroys the rebuilding effort. The breaching party has to demonstrate trustworthiness without controlling the timeline of when trust returns.`,
            `What doesn't work. Apologies without behavior change. Demanding forgiveness. Treating the breached party as the problem for not trusting yet. Trying to compensate with bigger gestures instead of consistent small ones. Many people on the breaching side underestimate how long real rebuilding takes and overestimate the impact of single dramatic acts of contrition.`,
            `One important pattern. Some breaches can't be rebuilt regardless of effort. Major breaches of character trust (significant deception, betrayal, exploitation) sometimes mean the relationship can't return to its prior state. The honest position acknowledges this. Some relationships transform into different relationships (formal cooperation without trust, distant friendliness without closeness) rather than returning to where they were. Pretending major breaches can always be rebuilt creates false expectations.`,
          ],
          image: `/voyager-assets/social-leadership/l03-s3-rebuild.webp`,
          imageCaption: `Rebuilding trust: clear acknowledgment, genuine accountability, specific commitments, follow-through over time, patience with the other's process.`,
          vocab: [
            {
              word: `acknowledgment vs apology`,
              definition: `Distinction in trust repair. Apology is saying you're sorry. Acknowledgment is specifically naming what happened and its impact. Real trust repair requires acknowledgment first; apology without acknowledgment often deepens the breach because it signals the person doesn't see what they did. "I'm sorry if you were upset" is apology without acknowledgment. "I broke a commitment I made to you; I understand that damages trust" is acknowledgment.`,
              audioPrompt: `Acknowledgment versus apology is a distinction in trust repair, {name}. Apology is saying you're sorry. Acknowledgment is specifically naming what happened and its impact. Real trust repair requires acknowledgment first. Apology without acknowledgment often deepens the breach because it signals the person doesn't really see what they did. "I'm sorry if you were upset" is apology without acknowledgment. It says nothing about what happened or what's being apologized for. "I broke a commitment I made to you; I understand that damages trust between us" is acknowledgment. It names the behavior, names the impact, and signals the person doing the repair understands what they need to repair. The distinction is small in wording but large in effect. Most poor apologies fail at the acknowledgment step. Knowing this lets you both give better apologies when you've breached trust and notice when others' apologies are missing the acknowledgment underneath.`,
            },
            {
              word: `genuine accountability`,
              definition: `In trust repair, taking clear personal responsibility for a breach without minimizing it, shifting blame, or making excuses. Distinguished from "performed accountability" — gestures of remorse without accepting consequences or changing behavior. Research on trust violations shows attempted minimization or blame-shifting usually makes recovery impossible even when the underlying breach might have been forgivable. Genuine accountability is the prerequisite for real trust rebuilding.`,
              audioPrompt: `Genuine accountability in trust repair is taking clear personal responsibility for a breach without minimizing it, shifting blame, or making excuses, {name}. Distinguished from performed accountability — gestures of remorse without actually accepting consequences or changing behavior. Diane Vaughan's research on trust violations shows that attempted minimization or shifting of blame usually makes recovery impossible even if the underlying breach was forgivable. The person who broke trust and then says "I didn't mean to" or "you misunderstood" or "circumstances forced me" signals they haven't actually understood what they did. The breached party reads this correctly: there's no real accountability here, so there's no reason to expect different future behavior. Genuine accountability says: I did this, I take responsibility for it, I understand the impact on you. Without this genuine accountability, the apology and behavior change that follow won't rebuild trust because the breached party doesn't believe the acknowledgment is real.`,
            },
            {
              word: `sustained behavior change`,
              definition: `The actual mechanism of trust rebuilding after a breach, as opposed to apology or single dramatic gestures. Trust gets rebuilt slowly through observed consistent behavior over time. Trust researchers typically estimate the rebuilding period at multiples of the breach itself. Sustained change over weeks or months is what tells the breached party the breach was genuinely addressed, not just apologized for.`,
              audioPrompt: `Sustained behavior change is the actual mechanism of trust rebuilding after a breach, {name}. Distinguished from apology, compensation gestures, or single dramatic acts of contrition. Trust gets rebuilt slowly through observed consistent behavior over time — not through promises about change. The breached party watches your actual behavior across many interactions over weeks or months, and updates their trust based on what they observe. Trust researchers typically estimate the rebuilding period at multiples of the breach itself: a one-time small breach may take weeks of consistent corrective behavior; a major repeated breach may take years. Many people on the breaching side underestimate how long real rebuilding takes. They make one strong apology and expect trust to be restored quickly. The actual dynamic: the apology opens the possibility of rebuilding; the sustained behavior change over time is what actually does it. The breached party decides when trust is restored, not the person who broke it.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Trust In Groups (Beyond One-On-One)`,
          paragraphs: [
            `Trust in groups operates differently from one-on-one trust. Groups develop "trust climate" — the general expectation about whether vulnerability is safe. Amy Edmondson's research on psychological safety (covered in L10 of the Future Skills Voyager band) is closely related: psychologically safe groups are ones where people trust that taking interpersonal risks (asking questions, admitting mistakes, raising concerns) won't be punished.`,
            `Building trust climate. Leaders shape group trust climate disproportionately because group members watch how the leader treats specific individuals, especially in front of others. A leader who publicly mocks a team member's question signals to the whole group that asking questions is unsafe. A leader who responds to mistakes with curiosity rather than punishment signals that admitting mistakes is safe. Single moments shape group climate more than equivalent private moments.`,
            `Several behaviors particularly build group trust climate. Treating disagreement with curiosity rather than threat. Responding to mistakes with focus on learning rather than blame. Sharing credit publicly and bearing responsibility privately when things go wrong. Asking for input genuinely and acting on it. Saying "I don't know" when you don't know. Each of these is a public signal to the whole group about what's safe to do.`,
            `Several behaviors destroy group trust climate. Public humiliation of any group member, even occasionally. Punishing the messenger when someone raises a problem. Visible favoritism toward some members. Inconsistent treatment of similar situations. Taking credit for the group's work or assigning blame to specific individuals. These behaviors don't just affect their immediate targets; they signal to everyone what to expect.`,
            `One important pattern. Group trust is harder to repair than individual trust because the breaches happen in public and become part of group memory. Even if the originally-breached individual is restored, others in the group remember and adjust their behavior accordingly. Leaders who damage group trust climate often discover months later that the group has been quietly less honest, less collaborative, and less willing to take risks even after the leader thought the issue had been resolved.`,
            `Connecting to leadership generally. Building durable trust climate in groups is one of the most valuable things a leader can do. Groups with high trust accomplish more, adapt better, and weather hard situations more effectively. Groups with low trust may produce short-term results but accumulate hidden costs that eventually become visible. The trust investment compounds.`,
          ],
          image: `/voyager-assets/social-leadership/l03-s4-group.webp`,
          imageCaption: `Group trust climate: shaped disproportionately by leaders, harder to repair than individual trust, compounds over time.`,
          vocab: [
            {
              word: `trust climate`,
              definition: `General expectation across a group about whether interpersonal vulnerability is safe. Shaped disproportionately by leaders through their public behavior toward individual group members. Related to psychological safety (Amy Edmondson). High trust climate enables real collaboration, honest disagreement, learning from mistakes; low trust climate produces hidden costs even when short-term results look fine.`,
              audioPrompt: `Trust climate in groups is the general expectation across a group about whether interpersonal vulnerability is safe, {name}. Shaped disproportionately by leaders through their public behavior toward individual group members. Related to psychological safety, which Amy Edmondson has researched extensively. High trust climate enables real collaboration, honest disagreement, learning from mistakes, taking risks, asking questions, admitting confusion. These behaviors accumulate into better team functioning over time. Low trust climate produces hidden costs even when short-term results look fine. People stop asking questions even when they're confused. They hide mistakes until they become bigger problems. They don't raise concerns until things have gone badly. They protect themselves rather than collaborating. The hidden costs compound. Single moments where a leader treats one team member badly in public shape group climate more than equivalent private moments. Knowing this lets leaders be more deliberate about the signals their public behavior sends.`,
            },
            {
              word: `punishing the messenger`,
              definition: `A trust-destroying behavior in group leadership where raising problems brings negative consequences — criticism, blame, dismissal, or being made to feel foolish. Creates a group climate where people stop surfacing problems until they become crises. One of the most damaging patterns a leader can exhibit because it severs the flow of accurate information upward exactly when that information is most valuable.`,
              audioPrompt: `Punishing the messenger is a trust-destroying behavior in group leadership where raising problems brings negative consequences, {name}. The person who says "I think there's a problem with this plan" or "this isn't going well" gets criticized, blamed, dismissed, or made to feel foolish for surfacing the concern. The immediate effect on that person is obvious. The broader effect on the group is more damaging: everyone else observes what happened and concludes that raising concerns is unsafe. The group stops surfacing problems until they become crises. The leader becomes progressively less informed about actual reality as people learn to bring only good news or no news. Leaders who punish messengers often believe they're getting accurate information when they're actually getting filtered information that matches what people think the leader wants to hear. Building trust climate requires the opposite: actively welcoming bad news, thanking people for raising concerns, and visibly not shooting the messenger so the whole group sees it's safe to be honest.`,
            },
            {
              word: `credit and blame asymmetry`,
              definition: `Trust-building pattern of sharing credit publicly when things go well and bearing responsibility privately when things go wrong. In group trust climate, leaders who take credit for the group's successes and assign blame to individuals when things fail rapidly destroy trust across the whole group. The reverse — giving public credit, absorbing blame — builds trust capital with everyone who observes it.`,
              audioPrompt: `Credit and blame asymmetry is a trust-building pattern in group leadership, {name}. It means sharing credit publicly when things go well and bearing responsibility privately when things go wrong. Leaders who take credit for the group's successes and assign blame to specific individuals when things fail rapidly destroy trust across the whole group. Everyone observes the pattern and concludes the leader values their own image over the team's reality. The reverse pattern builds trust capital. When things go well, the leader says "the team made this happen" and names specific contributions. When things go wrong, the leader says "I'm responsible for this" rather than finding someone to blame. Jim Collins identified this pattern in Level 5 leaders. Leaders who credit others for success and take personal responsibility for failure are not being self-sacrificing; they're building the trust climate that enables their teams to take risks, make decisions, and function at high levels. The pattern signals to everyone that it's safe to try things — because if it goes wrong, the leader will protect you rather than use you as cover.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `In the case study that follows, three people face different trust-building situations. Each has an intuitive approach and a research-informed approach. The intuitive approaches aren't wrong exactly; they're just less effective than what trust research suggests.`,
            `One framing as you work through the cases. Notice how often the "right" move involves doing less, slower, with more attention to the other person's process. Trust building is rarely accelerated through dramatic gestures; it's built through consistency over time. The temptation to fix things quickly often produces the opposite of what's needed.`,
            `Another framing. The cases involve specific leadership situations relevant to your life: leading a new group, recovering from a broken promise, navigating a hard conversation. They're not abstract corporate scenarios; they're patterns you'll face throughout school, friendships, family, and any future work. The lessons apply directly.`,
            `One last framing. Trust literacy compounds across thousands of social interactions over a lifetime. Even modest improvements in your trust-building behaviors at 12 produce significantly different relationship outcomes by 30 because the differences compound through every interaction. The investment is asymmetric: small consistent improvements early, large compounded gains later.`,
          ],
          image: `/voyager-assets/social-leadership/l03-s5-before.webp`,
          imageCaption: `Three trust situations. Intuitive approaches vs research-informed responses. Small consistent improvements compound.`,
          vocab: [
            {
              word: `trust capital`,
              definition: `The accumulated trustworthiness you've built across a relationship or group over time. Functions like a reserve: small breaches drain from it without ending the relationship if there's substantial accumulated trust; large breaches can deplete it. Building trust capital deliberately across many relationships is part of long-term leadership effectiveness. Similar concept to "social capital" but specifically focused on trust.`,
              audioPrompt: `Trust capital is the accumulated trustworthiness you've built across a relationship or group over time, {name}. Functions like a reserve. Small breaches drain from it without ending the relationship if there's substantial accumulated trust. Large breaches can deplete it. Sustained trustworthy behavior builds it up over time. The concept matters because it explains why long relationships can survive individual breaches that would end shorter ones: there's accumulated capital that gets drawn down rather than zeroed out. It also explains why new relationships require more deliberate trust building: you have no reserve yet, so even small breaches have outsized effect. Building trust capital deliberately across many relationships is part of long-term leadership effectiveness. The investment compounds. Similar concept to "social capital" but specifically focused on the trust dimension.`,
            },
            {
              word: `trust literacy`,
              definition: `The skill of accurately reading trust dynamics in relationships and groups: knowing where trust is strong or weak, what specific behaviors are building or draining it, and what to do differently. Trust literacy lets leaders diagnose situations accurately rather than just feeling something is off. Most people have intuitive but unexamined trust-related patterns; explicit literacy helps you see and improve them.`,
              audioPrompt: `Trust literacy is the skill of accurately reading trust dynamics in relationships and groups, {name}. Knowing where trust is strong or weak, what specific behaviors are building or draining it, and what to do differently. Trust literacy lets leaders diagnose situations accurately rather than just feeling something is off. You can name whether the issue is competence trust or character trust, whether it's being driven by individual behavior or group climate, whether it's at the beginning of a relationship where capital is low or in an established relationship where a breach has occurred. Most people have intuitive but unexamined trust-related patterns — they sense when trust is high or low but can't articulate why or what to do about it. Explicit literacy gives you the vocabulary and frameworks to see clearly. The skill compounds: each trust situation you navigate well builds your ability to navigate the next one more skillfully. Small consistent improvements at 12 compound into significantly different trust dynamics by 30.`,
            },
            {
              word: `compounding trust investment`,
              definition: `The pattern by which small consistent trust-building behaviors early in relationships and careers compound into substantially stronger trust capital over time. Trust researchers and leadership researchers converge on this: modest consistent investment in trust-relevant behaviors produces returns that grow nonlinearly over years. Most adults underinvest in trust building during formative years and pay the cost in weaker relationships and limited influence.`,
              audioPrompt: `Compounding trust investment is the pattern by which small consistent trust-building behaviors early in relationships compound into substantially stronger trust capital over time, {name}. Trust researchers and leadership researchers converge on this finding. Modest consistent investment in trust-relevant behaviors — keeping small commitments, telling hard truths early, treating people fairly when it costs you something — produces returns that grow nonlinearly over years. The person who has been consistently trustworthy for 10 years has accumulated something that can't be easily replicated by 10 months of intense trust-building later. The investment is asymmetric in your favor if started early: small behaviors consistently, large compounded gains later. Most adults underinvest in trust building during formative years, often because trust-building is slow and invisible until the accumulated capital becomes visible in the quality of relationships and leadership capacity available at 30 or 40. Building trust deliberately at 12 means 20 years of compounding before most people start thinking explicitly about it.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l03-case-study`,
          type: `case-study`,
          headline: `Three Trust-Building Situations`,
          intro: `{name}, three people face trust-related leadership situations. Each has an intuitive approach available and a research-informed approach. For each, identify what would actually serve them better.`,
          cases: [
            {
              id: `case-1`,
              title: `Leading A New Group — First Week`,
              context: `You've just been chosen as captain of a sports team. The team has played together before but hasn't had you as captain. You have one week before practice starts. You want to start strong with trust-building. Your dad suggests you give a big speech about "your vision" at the first practice. What should you actually do?`,
              question: `What's the most useful first-week strategy?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Give a big inspiring speech at the first practice about your vision for the team, what you stand for, and what you expect from everyone.`,
                  outcome: `This is the intuitive "set the tone" move. It usually backfires. Team members haven't seen what you do yet; your vision speech is mostly words without backing. Many new leaders try to compensate for lack of demonstrated trust with verbal signaling, which can come across as posturing. The speech might be remembered, but probably as "the new captain who talked a lot before doing anything." Trust capital starts at zero with this group; words don't build it.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Start by listening. Have brief one-on-one conversations with each team member before the first practice. Ask what's worked well, what's frustrating, what they want for the season. At the first practice, work hard yourself, demonstrate competence in your role, and treat each person fairly. Don't make any speeches about leadership for at least several weeks.`,
                  outcome: `This is what trust research actually supports. Listening before talking signals respect and gives you real information about the team. Showing up and doing the work demonstrates competence trust. Treating each person fairly builds character trust. The absence of grand pronouncements lets your behavior speak for itself. By the time you make any leadership statements, you'll have actual demonstrated behavior backing them. Trust capital builds quickly when actions precede words.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Make immediate visible changes to show you're in charge. New training rules. New expectations. Establish authority right away.`,
                  outcome: `This is the intuitive "show I'm in charge" move. Usually destroys trust climate. Making changes before understanding what's working signals you value position over substance. Team members who were doing things that worked feel disrespected. Authority assertion without legitimacy from observed competence usually produces resistance, not respect. Better to understand before changing, then make changes that come from understanding rather than from positional assertion.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates trust-building in new leadership situations. The intuitive move (assert authority, give a vision speech) is what new leaders often default to. The research-informed move (listen, demonstrate competence, treat fairly, let behavior speak) builds trust capital much faster despite seeming less leader-like in the moment. Trust building rewards patience.`,
            },
            {
              id: `case-2`,
              title: `Recovering From A Broken Promise`,
              context: `You promised your best friend you'd help her with a project last weekend. You forgot completely; you went to a movie instead. She's hurt and hasn't responded much to your texts for two days. You feel bad and want to fix things. Your sister tells you to "just buy her something nice" to make it up. What should you actually do?`,
              question: `What's the most useful approach to repairing the trust?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Buy her a nice gift and bring it over with a quick "sorry" — show you care about the friendship.`,
                  outcome: `Compensation gestures usually fail at trust repair because they skip the acknowledgment step. The gift signals "I want this to be over" rather than "I see what I did and its impact on you." Your friend may accept the gift politely but the trust damage isn't repaired; it's just papered over. Trust researchers consistently find that gestures without acknowledgment deepen rather than repair breaches, because they signal the person doesn't really understand what happened.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `In person, clearly acknowledge what happened: "I promised to help you and I didn't show up. I went to a movie instead and forgot completely. That broke a commitment I made to you and I understand why you're hurt." Don't make excuses. Then ask what would actually help — whether she still needs the help, whether she wants you to do something specific. Then follow through reliably for the next several weeks on everything you commit to.`,
                  outcome: `This is what trust research supports. Clear acknowledgment names the breach specifically. No excuses or self-defense. Asking what she actually needs respects her process. Follow-through over weeks is what actually rebuilds trust; the conversation only opens the possibility. Your friend may take time to fully restore trust; that's her call, not yours. Done well, this approach repairs the friendship; done poorly (with excuses, demand for forgiveness, or impatience about her timeline), even this approach can fail. The key is acknowledgment plus sustained behavior change.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Send a long emotional text explaining all the reasons it happened, how stressed you are, why you forgot. Show you've been really upset about it.`,
                  outcome: `This is the intuitive "explain myself" move. It backfires because it centers your distress rather than her injury. Long explanations of why you breached a commitment often function as excuses even when not framed that way; they shift focus from the impact on her to your circumstances. Real acknowledgment doesn't include explanations of why the breach happened (those can come later if relevant). It just names what happened and the impact. Centering your distress also pressures her to comfort you, which inverts the repair dynamic.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates trust repair after a small but real breach. The intuitive moves (compensation, explanation) both fail at acknowledgment. The research-informed move starts with acknowledgment and follows with sustained behavior change. The acknowledgment matters because trust repair requires the breaching party to demonstrate they actually see what happened. Without that, repair attempts feel like cover-ups.`,
            },
            {
              id: `case-3`,
              title: `Difficult Conversation — Trust At Stake`,
              context: `You're a group project leader. One team member has been consistently late with their parts of the work. The rest of the team is frustrated. You need to address it with that person. They might react defensively. If you handle it badly, you'll damage trust with either that person or the rest of the team. Your friend says "just be direct and tell them they're letting everyone down." What should you actually do?`,
              question: `What's the most useful approach to this conversation?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Tell them clearly: "You've been late multiple times and you're letting the team down. We need you to step up or you're off the project."`,
                  outcome: `Direct confrontation framing usually damages trust on multiple sides. The team member feels attacked and becomes defensive, which makes the underlying problem harder to address. The framing assumes you understand what's causing the lateness when you might not. Public ultimatum-style framings ("step up or you're off") rarely produce real behavior change; they produce either resistance or compliance without engagement. The other team members may appreciate firm action initially but watch how it played out and update their own trust calculations based on whether they'd want similar treatment if their situation became hard.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Have a private one-on-one conversation. Start by sharing specifically what you've noticed (late on these specific deliverables) and asking what's been happening on their end. Listen carefully to understand whether the lateness is from skill issues, motivation issues, life circumstances, or something else. Based on what you learn, work together on what would actually help — clearer scope, different deadlines, support, or a clear path forward if things don't change. Treat them as a partner in solving the problem rather than the problem to be solved.`,
                  outcome: `This is what trust research and effective conflict navigation literature support. Private conversation respects their dignity and gives you better information. Specific observations (late on these specific things) are more useful than generalizations (always late). Asking before assuming gets you to the actual cause. Treating them as a partner in solving the problem rather than the problem itself preserves both trust with them AND demonstrates to the rest of the team how you handle hard situations. If their behavior doesn't change after good-faith engagement, you can address that too, but starting with collaborative problem-solving builds trust capital you'll need for harder steps if necessary.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Send a group message to the whole team saying "Everyone needs to be on time. No exceptions." Don't single anyone out but make the standard clear.`,
                  outcome: `This is the avoidance move dressed as fairness. It usually fails on multiple fronts. The specific team member knows it's about them, so it functions as public criticism without the courtesy of direct address. The rest of the team sees you avoiding the actual conversation, which signals you might avoid hard conversations with them too. The "no exceptions" framing actually destroys trust because it pretends specific individual situations don't matter, when team members know their own circumstances do matter. Better to address directly with the specific person; group communications can address general expectations but aren't substitute for individual conversations about specific behaviors.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates difficult conversations where trust is at stake on multiple sides. The intuitive moves (confront directly, broadcast to group) both damage trust. The research-informed move (private one-on-one, specific observations, collaborative problem-solving) preserves trust while still addressing the actual issue. The team watches how you handle this conversation and updates their own expectations of how you'd treat them. Trust capital builds or drains through how you handle hard moments.`,
            },
          ],
          reflectionPrompt: `All three cases share a pattern: the intuitive moves involve doing more, faster, with less attention to the other person's perspective. The research-informed moves involve slowing down, asking more, and treating the other person as a partner. Which case felt most personally relevant?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is trust, technically?`,
              options: [
                `Liking someone`,
                `Willingness to be vulnerable to another person based on positive expectations of their behavior; trust isn't certainty, it's accepting risk because you believe the other won't exploit it; exists in space of uncertainty about what others will do`,
                `Knowing someone`,
                `Random feeling`,
              ],
              correctIndex: 1,
              explanation: `If you knew for sure someone would do what you want, you wouldn't need trust; you'd have guarantees. Trust exists specifically in situations where there's real uncertainty and you're choosing to accept the risk based on positive expectations.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the distinction between competence trust and character trust?`,
              options: [
                `Same thing`,
                `Competence trust: belief that person can do what they say they can do (ability dimension); character trust: belief that person will do what they say they'll do (integrity dimension); both have to be present for trust to function; a competent but dishonest professional fails on character, an honest but incompetent professional fails on competence`,
                `Just words`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Real trust evaluation involves both dimensions, often unconsciously. People sense when someone is competent but they don't trust them, or sincere but they don't trust them. The framework names what's missing in either case and what you need to demonstrate to build trust.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why are small commitments often more important than big ones for trust?`,
              options: [
                `Random fact`,
                `Small commitments are more frequent; people notice consistent follow-through over many small commitments more than occasional follow-through on big visible ones; many leaders underestimate small commitments and overestimate big ones`,
                `Big ones are bigger`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `If you say you'll do something small ("I'll get back to you," "I'll think about it," "We should grab coffee sometime") and don't, you're sending the signal that your commitments don't bind. The signal compounds across many small interactions. Keeping small commitments builds trust capital faster than dramatic gestures.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why is "consistency between words and actions" the strongest trust builder?`,
              options: [
                `Easier to remember`,
                `When what you say you value and what you actually do match, character trust builds over time; when they don't match, trust erodes regardless of words; people watch what leaders do far more than what they say; most important trust signal across nearly all leadership research`,
                `Random principle`,
                `Pop wisdom`,
              ],
              correctIndex: 1,
              explanation: `The pattern is easy to articulate and hard to actually live. Many leaders sincerely believe they're consistent while their behavior shows real gaps. The skill is honest self-observation, ideally with feedback from people who see your behavior across many contexts.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the difference between "acknowledgment" and "apology" in trust repair?`,
              options: [
                `Same thing`,
                `Apology: saying you're sorry; acknowledgment: specifically naming what happened and its impact; real trust repair requires acknowledgment first; apology without acknowledgment often deepens breach by signaling the person doesn't see what they did; "sorry if you were upset" is apology without acknowledgment`,
                `Different words`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `The distinction is small in wording but large in effect. Most poor apologies fail at the acknowledgment step. Knowing this lets you give better apologies when you've breached trust and notice when others' apologies are missing the acknowledgment underneath.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does rebuilding trust take longer than initial building?`,
              options: [
                `Random pattern`,
                `Asymmetry in how human cognition handles negative evidence: single significant breach often outweighs many small positive interactions; rebuilding period typically multiples of the breach itself; some major breaches may be unrebuildable to original level; the breached party gets to decide pace`,
                `People are slow`,
                `Just happens`,
              ],
              correctIndex: 1,
              explanation: `Many leaders underestimate how long real rebuilding takes and overestimate impact of single dramatic acts of contrition. The pattern isn't random; it reflects how human cognition handles negative evidence after a breach. Patience and sustained behavior change are what actually work.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "trust climate" in groups?`,
              options: [
                `Weather term`,
                `General expectation across a group about whether interpersonal vulnerability is safe; shaped disproportionately by leaders through public behavior toward individuals; related to psychological safety (Amy Edmondson); high climate enables collaboration/honesty/learning, low climate produces hidden costs`,
                `Group mood`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Single moments where a leader treats one team member badly in public shape group climate more than equivalent private moments. Group trust climate is harder to repair than individual trust because the breaches happen publicly and become part of group memory.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "trust capital"?`,
              options: [
                `Money concept`,
                `Accumulated trustworthiness you've built across a relationship or group over time; functions like a reserve (small breaches drain from it, sustained trustworthy behavior builds it up); explains why long relationships can survive breaches that would end shorter ones; investment compounds over time`,
                `Banking term`,
                `Random metaphor`,
              ],
              correctIndex: 1,
              explanation: `The concept matters because it explains why long relationships can survive individual breaches that would end shorter ones: there's accumulated capital that gets drawn down rather than zeroed out. Also explains why new relationships require more deliberate trust building.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All trust breaches can be fully rebuilt with sufficient effort.`,
              correctAnswer: false,
              explanation: `False. Some major breaches (significant deception, betrayal, exploitation) sometimes mean the relationship can't return to its prior state. Honest position acknowledges this. Some relationships transform into different relationships (formal cooperation without trust, distant friendliness without closeness) rather than returning to where they were. Pretending major breaches can always be rebuilt creates false expectations.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I want to be trusted as a leader. I'm going to give a big speech about my values at the next group meeting." Based on this lesson, what should you point out?`,
              options: [
                `"Good plan"`,
                `"Trust research consistently shows speeches about values don't build trust; consistency between words and actions does. People watch what you do far more than what you say. A speech about your values before you've demonstrated behavior that matches creates a gap that's hard to close. Better: just behave consistently with what you'd say your values are. Keep commitments (including small ones). Treat people fairly regardless of audience. Tell the truth even when hard. Share credit publicly. The behavior speaks louder than any speech could. By the time you mention your values explicitly, your behavior should have already shown them. If your behavior doesn't show them, the speech makes things worse by raising expectations you're not meeting."`,
                `"Bad idea"`,
                `"Don't lead"`,
              ],
              correctIndex: 1,
              explanation: `Real applied trust literacy. Don't dismiss the friend's desire to lead; redirect from speech-as-trust-builder toward behavior-as-trust-builder. This is how you help a friend develop actual leadership skill rather than performance of leadership.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working understanding of how trust gets built? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: do you have specific gaps between what you say you value and what you actually do? What would close them?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone known for consistent trust-building across many relationships, what does that change about your capacity for leadership over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one relationship where you'd like to build more trust. What specific behaviors would help? What might you currently be doing that drains trust capital?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there relationships where trust isn't the right primary frame? What about adversarial relationships, formal-cooperation-only relationships? How does the framework adapt?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pick one person you trust deeply. Notice what they actually do that builds your trust. The behaviors are often invisible until you look for them.` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Trust building is the foundation of durable leadership. Two paths.`,
          familyActivity: {
            title: `The Family Trust Conversation`,
            duration: `45 minutes`,
            description: `Share the competence/character trust distinction and the trust-building behaviors. Then ask family members about people they trust most. What specifically do those people do that builds trust? Most family members will surface concrete behaviors when prompted (keeps commitments, tells truth, treats people fairly across contexts). The conversation often reveals trust-relevant behaviors people have been observing for years without explicitly noting. Then ask each person to identify one trust-building behavior they want to be more consistent about.`,
          },
          projectOption: {
            title: `Run A 90-Day Trust-Building Experiment, 90 days (optional)`,
            duration: `90 days, ~10-15 minutes daily`,
            description: `Pick 3-5 trust-relevant behaviors to be deliberate about for 90 days: keeping all commitments (including small ones), telling the truth even when hard, treating people consistently regardless of audience, sharing credit publicly, asking for input genuinely. Track them daily. Notice which are easier vs harder for you. Write 1,500 words at the end on what changed in your relationships and what you learned. Real applied trust building at a level most adults don't attempt.`,
            offerToParent: `Parent: opt your kid into this project. A 90-day trust-building experiment at 12 is genuinely transformative.`,
          },
          identityQuestion: `If you become someone who builds trust consistently across hundreds of relationships over a lifetime, what does that change about the kind of leader you can become and the kind of relationships you can have?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who keeps small commitments, not just big ones.`,
            `A person who acknowledges specifically when I've broken trust, instead of apologizing vaguely.`,
            `Someone who treats people the same way whether or not they're watching.`,
          ],
          saveKey: `identity_responses_sl_11_12_3`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Third Social Leadership lesson done. You can now articulate what trust actually is, distinguish competence from character trust, name the behaviors that reliably build and destroy trust, understand the acknowledgment vs apology distinction, navigate trust climate in groups, and apply real frameworks across specific situations. Trust is the foundation; you're building it deliberately at 12. Next time we go into a related foundational skill: listening as leadership. Sounds simple. It isn't. Real research on what listening actually does in leadership situations. Case Study format. Let's go. — Valor`,
          badge: `trust-builder`,
          badgeName: `Trust Builder`,
          xpEarned: 75,
          competencies: [
            `Articulates trust as willingness to be vulnerable based on positive expectations`,
            `Distinguishes competence trust from character trust`,
            `Names trust-building and trust-destroying behaviors with research backing`,
            `Distinguishes acknowledgment from apology in trust repair`,
            `Understands trust climate in groups and how leaders shape it`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Listening as Leadership`,
            hook: `Sounds simple. Isn't. Three cases of leadership situations where listening matters most. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L03 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
