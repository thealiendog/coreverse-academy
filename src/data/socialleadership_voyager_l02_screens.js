// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L02 — Power vs Authority vs Influence
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Political Philosophy, Social Psychology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (French & Raven bases of power / Robert Cialdini influence / viral "alpha mindset")
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l02-v1";

const SOCIALLEADERSHIP_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-02`,
      title: `Power vs Authority vs Influence`,
      duration: 35,
      xpReward: 75,
      badge: `power-literate`,
      badgeName: `Power Literate`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, power, authority, and influence are three different things that most people use interchangeably. French and Raven identified six bases of social power in 1959. Cialdini identified six principles of influence. The alpha mindset content ecosystem conflates all of it. This lesson untangles them.`,
          headline: `Power vs Authority vs Influence`,
          subtitle: `Three related forces. Confusing them produces real practical errors.`,
          visual: `/voyager-assets/social-leadership/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Three Concepts, Distinguished`,
          paragraphs: [
            `Power is the broadest concept: the ability to affect what happens. A person with power can shape outcomes in ways that someone without power can't. Power comes in many forms. Physical strength is power in some contexts. Wealth is power. Knowledge can be power. Relationships can be power. Position can be power. Charisma can be power. Power isn't a single thing; it's a property that has many sources and many expressions.`,
            `Authority is a specific form of power: legitimate power that comes from a recognized role. A judge has authority in court. A parent has parental authority. A team captain has captain's authority. The authority is bounded by the role: a judge's authority applies in legal contexts, not in general; a parent's authority applies to the parent-child relationship, not to other adults. Authority works because the group accepts that the role-holder gets to make certain decisions. Without that acceptance, the formal position alone produces little.`,
            `Influence is the ability to shape what others do without necessarily having power over them. A trusted friend has influence over your choices even though they can't force you. A teacher you respect has influence over how you think about subjects even after class ends. Influence works through persuasion, example, relationship, and credibility. It's slower than power and authority, but often more durable. People do what authority requires; they internalize what influence shapes.`,
            `The three concepts overlap. Authority is a kind of power. Power often produces influence. Influence can become authority over time. But the differences matter practically. A leader who relies entirely on authority gets compliance but not real engagement. A leader who builds influence creates lasting impact but may not get rapid execution. A leader who wields power without authority or influence produces fear and resistance. The skill is knowing which to use when.`,
          ],
          image: `/voyager-assets/social-leadership/l02-s1-distinct.webp`,
          imageCaption: `Power, authority, influence: related but distinct. Confusing them produces practical errors in leadership.`,
          vocab: [
            {
              word: `legitimacy`,
              definition: `The quality of being accepted by a group as having rightful claim to authority. A judge has legitimate authority because society accepts the role. A team captain has legitimate authority because the team accepts the role. Authority without legitimacy is just power — others may comply because they have to, not because they accept the right. Legitimacy is what distinguishes authority from raw power.`,
              audioPrompt: `Legitimacy is the quality of being accepted by a group as having rightful claim to authority, {name}. A judge has legitimate authority because society accepts the role of judge and accepts that this particular person rightfully holds it. A team captain has legitimate authority because the team accepts the role of captain and accepts the person in that role. A parent has legitimate authority within the parent-child relationship because the relationship is recognized. Authority without legitimacy is just power. Others may comply because they have to, not because they accept the right. Legitimacy is what distinguishes authority from raw power. Lose legitimacy and you may still have the position but you no longer have working authority. People who held formal positions but lost legitimacy often discover their orders stop being followed even though they technically still have the role.`,
            },
            {
              word: `bounded authority`,
              definition: `The principle that authority derived from a role is limited to what that role covers, not unlimited. A judge's authority applies in legal contexts but not in general social situations. A team captain's authority applies to team decisions, not to teammates' personal lives. Authority working outside its boundaries loses legitimacy and typically produces resistance. Understanding where authority is bounded helps leaders avoid overreach.`,
              audioPrompt: `Bounded authority is the principle that authority derived from a role is limited to what that role covers, {name}. A judge's authority applies in legal contexts, not in general situations outside court. A parent's authority applies to the parent-child relationship, not to other adults. A team captain has authority over team strategy and conduct, not over teammates' personal lives. Authority working outside its boundaries loses legitimacy. The role-holder may still hold the position but the authority no longer functions because the group no longer accepts it as applicable. This is why leaders who try to extend their authority beyond its legitimate scope typically produce resistance rather than compliance. Understanding where authority is bounded helps you both lead within appropriate limits and recognize when authority is being overextended by others. For 12-year-olds, this matters in situations where adults or peers claim authority they don't actually have.`,
            },
            {
              word: `internalization`,
              definition: `The process by which something external — a value, a norm, a behavior pattern — becomes genuinely internal to a person, not just outwardly complied with. Influence produces internalization; authority and coercive power typically produce only compliance. When people internalize what a leader advocates, the influence persists even after the leader is gone or present. This is why influence-built change tends to be more durable than authority-imposed change.`,
              audioPrompt: `Internalization is the process by which something external becomes genuinely internal to a person, not just outwardly complied with, {name}. People do what authority requires but they internalize what influence shapes. When a trusted teacher influences how you think about a subject, the changed thinking persists after the class ends. When a manager orders you to follow a procedure, compliance may stop when they're not watching. The distinction matters practically for leadership. Leaders building for durable change invest in influence that produces internalization: persuasion, example, relationship, demonstrating genuine value. Leaders using only authority get compliance while the authority holds. Authority-based compliance is faster to produce but less durable than internalization. For leadership over sustained time horizons — which is most of the leadership you'll do over a lifetime — investing in the slower work of influence that produces internalization usually produces better long-term outcomes than relying on authority.`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `French And Raven's Bases Of Social Power (1959)`,
          paragraphs: [
            `In 1959, social psychologists John French and Bertram Raven published a paper called "The Bases of Social Power" that identified five distinct sources of power. The framework has been one of the most enduring tools in social psychology for analyzing power dynamics, with later additions extending it to six or seven bases. Knowing the bases helps you see exactly what kind of power is operating in any given situation.`,
            `First: legitimate power. The power that comes from a recognized role (a teacher, a judge, a manager). The role-holder is entitled to make certain decisions because the group accepts the role. Limited to what the role covers; doesn't extend beyond.`,
            `Second: reward power. The power that comes from being able to give people things they want (grades, money, opportunities, recognition). Reward power produces compliance while rewards are valued and available; tends to weaken if rewards are perceived as unfair or removed.`,
            `Third: coercive power. The power that comes from being able to punish (give bad grades, fire, exclude, harm). Coercive power produces fear-based compliance; tends to produce resistance and resentment alongside the compliance. Often produces hidden noncompliance: people do what they have to in front of the coercer, then minimize or undermine when not watched.`,
            `Fourth: expert power. The power that comes from being recognized as knowledgeable. A doctor has expert power on medical questions. A coach has expert power on the sport. Expert power produces willing cooperation because people want the benefits of the expertise. Limited by the actual expertise and the recognition that the expertise applies.`,
            `Fifth: referent power. The power that comes from being admired, respected, or wanting to be like the person. Often called "charisma" though it's broader. Referent power produces deep cooperation because people want connection with the referent person. Most durable and slowest to build of the five. Often what we mean by "natural leadership."`,
            `Bertram Raven added "informational power" (control over information others need) later. Some frameworks add other bases. The original five are the foundational set worth knowing. Most real leadership situations involve some combination; pure types are uncommon.`,
          ],
          image: `/voyager-assets/social-leadership/l02-s2-french-raven.webp`,
          imageCaption: `French and Raven 1959: five bases of social power. Foundational social psychology framework. Most leadership involves combinations.`,
          vocab: [
            {
              word: `referent power`,
              definition: `Power that comes from being admired, respected, or wanting to be like the person. One of French and Raven's five bases of social power (1959). Often called "charisma" though it's broader. Referent power produces deep cooperation because people want connection with the referent person. Most durable and slowest to build of the five bases. Often what people mean by "natural leadership."`,
              audioPrompt: `Referent power is the power that comes from being admired, respected, or wanting to be like the person, {name}. One of French and Raven's five bases of social power identified in their 1959 paper. Often called "charisma," though it's broader than that. Referent power produces deep cooperation because people want connection with the referent person. They want to be around them, want to be like them, want their approval. This produces willing alignment that goes beyond what reward or coercive power could produce. Referent power is the most durable and slowest to build of the five bases. You can't fake it for long; people sense when the underlying respect-worthiness isn't there. But when it's real, it persists across changes in formal position. Many influential leaders without high formal authority operate primarily through referent power. Often what people mean when they describe someone as having "natural leadership."`,
            },
            {
              word: `coercive power`,
              definition: `Power that comes from the ability to punish — giving bad grades, firing, excluding, harming. One of French and Raven's five bases. Produces fear-based compliance alongside resistance and resentment. Often produces hidden noncompliance: people do what they have to in front of the coercer, then minimize or undermine when not watched. Most damaging to relationships and group culture of the five bases when overused.`,
              audioPrompt: `Coercive power is the power that comes from the ability to punish, {name}. One of French and Raven's five bases of social power. Sources include the ability to give bad grades, fire or demote employees, exclude from the group, or cause other harm. Coercive power produces compliance in the short term but tends to produce resistance and resentment alongside it. A predictable pattern: people do what they have to in front of the coercer, then minimize effort or undermine when not watched. Hidden noncompliance is the typical response to sustained coercive power. The research on coercive power is consistent: it is the most damaging to relationships and group culture of the five bases when relied upon heavily. Leaders who use coercive power as their primary base typically produce compliance without real engagement, high turnover or exit when members have options, and cultures of fear rather than psychological safety. Coercive power has a place in some specific situations (clear violations of serious norms, emergency authority), but as a primary leadership tool it produces predictable deterioration.`,
            },
            {
              word: `expert power`,
              definition: `Power that comes from being recognized as knowledgeable in a relevant domain. One of French and Raven's five bases. Produces willing cooperation because people want the benefits of the expertise. Limited by the actual expertise and by whether others recognize it as applicable to the current situation. Expert power is earned through genuine competence and is lost when the expertise is revealed as absent or when the domain shifts.`,
              audioPrompt: `Expert power is the power that comes from being recognized as knowledgeable in a relevant domain, {name}. One of French and Raven's five bases of social power. A doctor has expert power on medical questions. A coach has expert power on the sport. A programmer has expert power on the technical problem. Expert power produces willing cooperation because people genuinely want the benefits of the expertise — they follow the expert's judgment because it helps them. It is limited by the actual expertise: expert power evaporates quickly when the expertise is revealed as insufficient or overstated. It is also limited by domain: a doctor's expert power on medical questions doesn't transfer to financial questions. Expert power is one of the most directly buildable of the five bases. You increase it by genuinely developing competence in areas people need, and by demonstrating that competence in situations where it matters. For 12-year-olds developing leadership, building genuine expertise in specific areas is one of the most direct paths to earning real influence with peers.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Robert Cialdini's Six Principles Of Influence`,
          paragraphs: [
            `Robert Cialdini, a social psychologist who studied compliance and persuasion for decades, identified six principles that consistently produce influence across many contexts. His book "Influence: The Psychology of Persuasion" (1984, with updated editions since) is one of the most-cited works in social psychology. The principles aren't manipulation techniques; they're patterns of how human social cognition actually works. Understanding them helps you both recognize when others are using them on you and use them ethically yourself.`,
            `First: reciprocity. Humans have a strong instinct to return favors. Someone who gives you something (a gift, a favor, a piece of useful information) creates a sense of obligation to give something back. Sales and fundraising routinely exploit this; ethical use involves genuinely giving without manipulation.`,
            `Second: commitment and consistency. Once people have made a small commitment, they're more likely to follow through on related larger commitments. People want to be consistent with what they've said and done. Used ethically: helping people make small commitments that build toward goals they actually want. Used manipulatively: getting tiny initial agreements that lock people into larger ones they wouldn't have agreed to upfront.`,
            `Third: social proof. People look at what others are doing to figure out what's appropriate. Lines outside restaurants make us think the food must be good. Reviews influence purchases. Friends' opinions shape ours. The principle works best when we're uncertain. Used ethically: showing actual evidence of what works. Used manipulatively: fake reviews, fake popularity, manufactured social proof.`,
            `Fourth: liking. People are more easily influenced by people they like. Similarity, compliments, cooperation, and physical attractiveness all increase liking. The principle is morally neutral but operates whether we notice or not. Knowing it helps you separate "do I actually agree with this argument" from "do I just like the person making it."`,
            `Fifth: authority. People defer to those they perceive as having authority or expertise. Doctors, professors, uniformed officers, and confident-looking experts get more deference than they may technically deserve. The Milgram experiments in the 1960s famously demonstrated how strongly authority influences behavior, even toward actions people would otherwise refuse.`,
            `Sixth: scarcity. People want what's rare, limited, or about to be unavailable. "Limited time," "last chance," "exclusive" all activate this principle. Manipulative marketing exploits it constantly; ethical use involves accurate scarcity claims (truly limited offerings) rather than manufactured urgency.`,
            `Cialdini's framework is influence, not power. The principles work through how human cognition processes social situations rather than through formal authority or coercion. Knowing them is core literacy for any leadership role.`,
          ],
          image: `/voyager-assets/social-leadership/l02-s3-cialdini.webp`,
          imageCaption: `Cialdini's six principles: reciprocity, commitment, social proof, liking, authority, scarcity. How human social cognition actually works.`,
          vocab: [
            {
              word: `social proof`,
              definition: `One of Cialdini's six principles of influence. People look at what others are doing to figure out what's appropriate, especially when uncertain. Restaurant lines, online reviews, friends' opinions all operate through social proof. The principle is morally neutral; it can be used ethically (showing actual evidence) or manipulatively (fake reviews, manufactured popularity).`,
              audioPrompt: `Social proof is one of Cialdini's six principles of influence, {name}. People look at what others are doing to figure out what's appropriate, especially when uncertain. The longer the line outside a restaurant, the more we assume the food must be good. The more positive reviews a product has, the more we trust it. The opinions of our friends shape our own opinions. The principle works because in many situations, what others have done is genuinely useful information about what works. The principle is morally neutral; it can be used ethically by showing actual evidence of what others have done and found valuable, or manipulatively through fake reviews, manufactured popularity, paid endorsements presented as authentic, and similar techniques. Knowing social proof exists protects you from manipulation. It also lets you use the principle ethically: when you actually have positive evidence, sharing it helps others make informed decisions.`,
            },
            {
              word: `reciprocity`,
              definition: `One of Cialdini's six principles of influence. Humans have a strong instinct to return favors — someone who gives you something creates a felt obligation to give something back. One of the most cross-culturally robust social norms. Used ethically by genuinely giving without manipulative intent. Exploited manipulatively in sales, fundraising, and persuasion when small gifts are used to engineer disproportionate return obligations.`,
              audioPrompt: `Reciprocity is one of Cialdini's six principles of influence, {name}. Humans have a strong instinct to return favors. When someone gives you something — a gift, a favor, useful information — it creates a felt obligation to give something back. This is one of the most cross-culturally robust social norms identified across human societies. It exists because cooperation sustained over time requires people to give and receive in something like balance. The instinct is real and powerful enough to operate even when the initial gift was unsolicited and small. Sales and fundraising routinely use reciprocity by sending free gifts or favors before making a request, creating a felt obligation that makes people more likely to comply. Ethical use involves genuinely giving to others — helping, sharing, contributing — without calculating what you'll get back. Leaders who genuinely give to those they lead build reciprocity-based goodwill that pays back many times over in willing effort and loyalty. The key distinction: genuine giving builds real relationship; manufactured gifts designed to trigger obligation are manipulation.`,
            },
            {
              word: `commitment and consistency`,
              definition: `One of Cialdini's six principles of influence. Once people have made a small commitment, they're more likely to follow through on related larger commitments because people want to be consistent with what they've said and done. Used ethically to help people make small commitments that build toward goals they genuinely want. Used manipulatively to get tiny initial agreements that lock people into larger ones they wouldn't have agreed to upfront.`,
              audioPrompt: `Commitment and consistency is one of Cialdini's six principles of influence, {name}. Once people have made a small commitment, they're more likely to follow through on related larger commitments. People want to be consistent with what they've said and done — it's a basic driver of human social behavior. Making a commitment, even a small one, activates the desire to act in ways that align with that commitment. Used ethically, the principle helps leaders and teachers guide people toward goals they genuinely want by starting with small achievable commitments that build toward larger ones. Used manipulatively, it involves getting tiny initial agreements that lock people into larger ones they wouldn't have agreed to upfront. The classic manipulative technique: get someone to agree to a small thing (yes, I care about children's health), then escalate (so you'll donate $500 to this children's health charity). Recognizing commitment and consistency as an active principle helps you notice when your own desire for consistency is being leveraged against your actual judgment, and helps you use the principle ethically in your own leadership.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The "Alpha Mindset" Content Ecosystem`,
          paragraphs: [
            `Beyond serious power research and influence research, there's a large viral ecosystem selling power and dominance as personality and identity. "Alpha mindset" accounts on Instagram, YouTube, and TikTok. Pickup-artist communities. "Sigma male" content. Pop self-help promising "high-value" status. The content varies but shares several patterns worth recognizing.`,
            `First: pop biology that doesn't match actual science. "Alpha wolves" don't actually exist in the way the content claims; the original researcher who coined "alpha wolf" (David Mech in the 1970s) spent decades publicly correcting his earlier work and explaining that wolf packs are family groups, not dominance hierarchies. The "alpha male/female" framing in human contexts has even less basis. The science is genuinely against the pop framing.`,
            `Second: dominance framing of social interaction. Real social dynamics involve cooperation, reciprocity, status that's earned through contribution, and complex multi-dimensional relationships. The "alpha" framing reduces this to dominance contests where someone must be on top. This bad model of how humans actually work produces bad strategy when applied.`,
            `Third: monetization through courses and coaching. "How to be high-value." "Alpha mindset bootcamp." "Sigma male transformation." The content sells the promise of becoming the dominant figure through specific techniques. Like other viral self-help, the underlying business is selling courses, not actually producing the outcomes claimed.`,
            `Fourth: confidence as substitute for substance. The content emphasizes appearing dominant rather than developing the underlying qualities (competence, ethics, trustworthy relationships) that produce real durable status. Confidence without substance produces a fragile fake status that collapses when tested.`,
            `Fifth: anti-empathy positioning. Real leadership research consistently shows that effective leaders demonstrate empathy, build psychological safety, and treat people well. The alpha-mindset content positions empathy and care as weaknesses, opposite to actual evidence about what works.`,
            `These patterns are recognizable across many specific accounts. The content exists because it sells, not because it's true. Understanding the gap between real power research (French and Raven, Cialdini) and viral alpha-mindset content is part of leadership literacy. The skills the viral content sells are mostly performance of confidence; the actual skills of leadership and influence look different.`,
          ],
          image: `/voyager-assets/social-leadership/l02-s4-alpha.webp`,
          imageCaption: `Viral "alpha mindset" content: pop biology that's wrong, dominance framing, monetization, confidence without substance, anti-empathy.`,
          vocab: [
            {
              word: `dominance hierarchy framing`,
              definition: `Pattern of analyzing social interaction primarily as competition for dominance, with assumed "alpha," "beta," "sigma" positions. Originally drawn from misunderstood wolf research (David Mech's 1970s work, which he later spent decades correcting). The framing oversimplifies real social dynamics, which involve cooperation, reciprocity, multi-dimensional status, and complex relationships rather than pure dominance contests.`,
              audioPrompt: `Dominance hierarchy framing is a pattern of analyzing social interaction primarily as competition for dominance, with assumed positions like "alpha," "beta," "sigma," {name}. The framing was originally drawn from misunderstood wolf research. David Mech, the researcher who coined "alpha wolf" in the 1970s, has spent decades since publicly correcting his earlier work. His updated research showed that wolf packs are actually family groups (parents and offspring) rather than dominance hierarchies of unrelated adults competing for top position. He's specifically asked people to stop using "alpha wolf" because the concept doesn't accurately describe how wolves work. The framing has even less basis when applied to humans. Real human social dynamics involve cooperation, reciprocity, status earned through contribution, and complex multi-dimensional relationships rather than pure dominance contests. The framing oversimplifies; it makes for catchy content but bad strategy when applied to actual leadership.`,
            },
            {
              word: `confidence without substance`,
              definition: `Pattern in viral alpha-mindset content that emphasizes appearing dominant through posture, tone, and frame control rather than developing the underlying qualities — competence, ethics, trustworthy relationships — that produce real durable status. Confidence without substance produces a fragile performed status that collapses when tested by real situations requiring actual capability or integrity.`,
              audioPrompt: `Confidence without substance is a pattern in viral alpha-mindset content that emphasizes appearing dominant through posture, tone, and frame control, {name}. The content teaches how to seem high-status rather than how to become genuinely capable, ethical, or trustworthy. The distinction matters because the performance works until reality tests it. Confidence backed by genuine competence, ethical integrity, and real relationships is durable — it holds up when things get hard because there's something real underneath. Confidence as performance without substance collapses under the same pressure because there's nothing holding it. The real power bases identified by French and Raven — expert power and referent power — are built through actual development of competence and actual earning of respect. They can't be faked for long. The viral content's proposition that you can shortcut to status through performed confidence appeals to people who want the outcome without the underlying work. The appeal is why it sells; the inability to deliver is why the claims don't match reality. Building real substance is slower than learning to perform confidence, but it's the only thing that produces durable status.`,
            },
            {
              word: `monetization pattern`,
              definition: `The business structure underlying viral alpha-mindset content: selling courses, bootcamps, and coaching built around a promise (become high-value, become dominant) rather than around demonstrated evidence of outcomes. The revenue model shapes the content toward dramatic confident claims and manufactured urgency. The underlying business is course-selling, not producing the outcomes claimed. Recognizing monetization patterns helps evaluate viral content more accurately.`,
              audioPrompt: `The monetization pattern is the business structure underlying viral alpha-mindset content, {name}. The model: build a following through free content, then sell courses, bootcamps, and coaching at premium prices. The promise sells the content. "Alpha mindset mastery bootcamp for $797" requires you to believe the bootcamp can actually deliver on the alpha mindset promise. The revenue model shapes the content toward dramatic claims — anything that makes the problem feel urgent and the solution feel powerful. "99% of people are betas" makes the remaining 1% sound urgently worth becoming. "Last chance early-bird pricing" manufactures urgency. The claims are calibrated to sell, not to accurately describe how power and influence work. This is not unique to alpha-mindset content; the same pattern appears across many viral self-help niches. Recognizing the pattern: dramatic promises, manufactured scarcity, course-or-coaching upsells, testimonials without rigorous evidence, anti-empathy positioning to create in-group solidarity. The underlying business is course-selling; the claimed outcome delivery is unverified. Real social psychology research (French and Raven, Cialdini) looks structurally different: academic venues, peer review, replication across contexts, acknowledged limits.`,
            },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources offering different views on power, authority, and influence. Two are serious research; one is viral content. Rank them based on methodology, evidence, and acknowledgment of limits.`,
            `One framing to consider. French and Raven (1959) and Cialdini (1984+) are both serious academic frameworks that have held up across decades. They're not exactly competing — French and Raven address bases of social power broadly while Cialdini addresses specific principles of influence. The complementary frameworks together cover much of how power and influence actually work.`,
            `Another framing. The viral alpha-mindset content isn't representative of ALL pop content about power; some pop sources do better. But the alpha-mindset specifically is a recognizable pattern across many specific creators. The patterns to watch for (pop biology that's wrong, dominance framing, monetization, confidence as substitute for substance) appear across the ecosystem.`,
            `One last framing. The skill you're building isn't memorizing French/Raven's five bases or Cialdini's six principles; it's developing the framework to analyze any leadership situation in terms of what kind of power is operating and what kind of influence is at play. As you encounter leaders over your lifetime, this framework lets you see what's actually happening underneath surface behavior.`,
          ],
          image: `/voyager-assets/social-leadership/l02-s5-before.webp`,
          imageCaption: `Two serious frameworks plus viral content. The framework for analyzing any leadership situation underneath surface behavior.`,
          vocab: [
            {
              word: `power literacy`,
              definition: `The skill of accurately analyzing what kind of power is operating in any given social situation. Combines French and Raven's bases of social power with Cialdini's principles of influence plus general observation of how authority, legitimacy, and consent function. Useful for both leadership (using power well) and followership (recognizing when power is being used on you).`,
              audioPrompt: `Power literacy is the skill of accurately analyzing what kind of power is operating in any given social situation, {name}. Combines French and Raven's bases of social power, Cialdini's principles of influence, and general observation of how authority, legitimacy, and consent function in real groups. Useful for both leadership (knowing which kind of power to use when, building the kinds of power that produce durable results) and followership (recognizing when power is being used on you, distinguishing legitimate authority from manipulation, knowing when to comply and when to resist). Most people operate with intuitive but unanalyzed sense of power dynamics. Developing explicit literacy lets you see and articulate what's happening, which makes you more effective both as a leader and as someone navigating leadership from others. The literacy compounds across thousands of social situations over a lifetime.`,
            },
            {
              word: `complementary frameworks`,
              definition: `Two or more analytical frameworks that address different dimensions of the same phenomenon and are more useful together than either alone. French and Raven's bases of social power and Cialdini's principles of influence are complementary: French and Raven analyze where power comes from structurally; Cialdini analyzes how influence operates through human cognition. Using both gives a fuller picture of any leadership situation than either alone.`,
              audioPrompt: `Complementary frameworks are two or more analytical tools that address different dimensions of the same phenomenon and are more useful together than either alone, {name}. French and Raven's bases of social power and Cialdini's principles of influence are complementary. French and Raven ask: where does power come from? They identify five structural sources — legitimate, reward, coercive, expert, referent. Cialdini asks: how does influence actually work in human minds? He identifies six cognitive patterns — reciprocity, commitment, social proof, liking, authority, scarcity. A complete analysis of a leadership situation often requires both lenses. You need to know what kind of power is structurally present (French and Raven) and how specific influence attempts are landing with the people involved (Cialdini). The two frameworks don't compete; they fill each other's gaps. This is a broader pattern in understanding complex human phenomena: no single framework captures everything, and skilled analysts use multiple complementary frameworks rather than committing to one.`,
            },
            {
              word: `analytical framework`,
              definition: `A structured set of concepts that helps you see and understand what's happening in a category of situation more clearly than unaided observation. French and Raven provides an analytical framework for power. Cialdini provides an analytical framework for influence. A good analytical framework identifies the key variables, explains relationships between them, and generates useful predictions. Frameworks are tools: more powerful than no framework, but limited by their assumptions.`,
              audioPrompt: `An analytical framework is a structured set of concepts that helps you see and understand what's happening in a category of situation more clearly than unaided observation, {name}. French and Raven provides an analytical framework for power: it identifies five distinct bases, explains how each produces different kinds of compliance or cooperation, and predicts what happens when different bases are used. Cialdini provides an analytical framework for influence: it identifies six cognitive patterns, explains the psychology behind each, and predicts when each will be effective or ineffective. Good frameworks share several features: they identify the key variables (what to look for), explain relationships between them (how the variables interact), and generate useful predictions (what to expect when certain conditions hold). Frameworks are tools. They're more powerful than having no framework — pure intuition without structure misses a lot. But they're limited by their assumptions and have domains where they apply well and domains where they're less useful. The skill of leadership literacy involves knowing which frameworks to apply to which situations, not just memorizing the frameworks themselves.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l02-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Power, Authority, And Influence`,
          intro: `Three sources discuss how power and influence work. Two are foundational social psychology research; one is viral content. Rank them. Then see how a careful analyst would evaluate them.`,
          topic: `How do power, authority, and influence actually work in social situations?`,
          sources: [
            {
              id: `source-a`,
              name: `French & Raven, "The Bases of Social Power" (1959) — foundational social psychology paper`,
              type: `Academic paper by John French and Bertram Raven, published in 1959; identified five distinct sources of social power; one of the most influential frameworks in social psychology for analyzing power dynamics`,
              claim: `Social power has five distinct bases: legitimate (from a recognized role), reward (from ability to give what people want), coercive (from ability to punish), expert (from recognized knowledge), and referent (from being admired or wanting to be like). Each operates differently; different combinations produce different leadership dynamics. The framework helps analyze any leadership situation by identifying which bases are operating. Bertram Raven later added informational power; some frameworks add other bases. The original five remain foundational.`,
              evidence: `Both authors were established academic social psychologists; the paper was published in peer-reviewed venue; framework has been cited tens of thousands of times in social psychology research over 65+ years. Has held up across multiple cultures, contexts, and applications. Specific predictions about how different power bases produce different responses (compliance vs internalization, durability of effects, etc.) have been empirically tested and largely confirmed. The framework is descriptive (how power works) rather than prescriptive (which to use); ethics of using each base is left to the practitioner. Most leadership analysis since 1959 has built on this framework in some form.`,
            },
            {
              id: `source-b`,
              name: `Robert Cialdini, "Influence: The Psychology of Persuasion" (1984, updated editions) — research-grounded book on influence`,
              type: `Book by Robert Cialdini, social psychologist who studied compliance and persuasion for decades; identifies six principles of influence (reciprocity, commitment/consistency, social proof, liking, authority, scarcity); one of the most-cited works in social psychology`,
              claim: `Six principles consistently produce influence across many contexts: reciprocity, commitment and consistency, social proof, liking, authority, and scarcity. The principles aren't manipulation techniques; they're patterns of how human social cognition actually works. Understanding them lets you both recognize when others use them on you and use them ethically yourself. Cialdini distinguishes ethical from manipulative applications of each principle throughout the book. The framework focuses on influence (without formal authority) rather than power (with authority).`,
              evidence: `Cialdini is an established academic with substantial peer-reviewed research backing the book. Book draws on decades of his own and others' research. Each principle has empirical support across many contexts and replications. Cialdini is honest about ethical implications and explicitly discusses manipulation vs ethical use. The framework has been widely applied in marketing, fundraising, education, healthcare, and many other domains with measurable effects. Some critiques have argued specific applications overgeneralize; the core framework has held up well across 40+ years. Cialdini has commercial activity (consulting, books) but the underlying research is solid.`,
            },
            {
              id: `source-c`,
              name: `@AlphaMindsetCEO — Instagram account, 2.3M followers, sells $797 "Alpha Mindset Mastery Bootcamp"`,
              type: `Viral Instagram account producing content about "alpha male/female" status, "high-value" identity, dominance dynamics; sells courses and one-on-one coaching at premium prices`,
              claim: `"99% of people are BETAS who don't even know it. Real alphas dominate through superior mindset, body language, and 'frame control.' The biology is CLEAR: every group has an alpha at the top who takes what they want. Stop being a beta. My $797 Alpha Mindset Mastery Bootcamp has transformed over 15,000 students into the high-value alphas they were meant to be. Real men/women take dominance. Don't be the beta everyone walks over. Friday is your last chance for early-bird pricing. The window to ascend is closing."`,
              evidence: `No credentials in social psychology or relevant research. "Alpha wolf" concept the framing rests on is scientifically wrong; David Mech, the researcher who originally coined it, has spent decades publicly correcting it. The "99% are betas" framing isn't social psychology; it's marketing that makes followers feel they need the product. Dominance framing oversimplifies real social dynamics (real groups involve cooperation, reciprocity, multi-dimensional status). Course-and-urgency-pricing structure shapes content toward dramatic confident claims. Confidence-as-substitute-for-substance pattern throughout. Construct conflation (mixing dominance, status, success, attractiveness, identity all together). Anti-empathy positioning runs opposite to actual leadership research findings.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How do French/Raven and Cialdini compare? They're both academic but address different questions. Which is more useful for which leadership situations?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Sources A and B are both highly credible foundational social psychology research that have held up across decades. They're complementary rather than competing. French and Raven (1959) addresses the bases of social power broadly: where power comes from and how different sources produce different dynamics. Cialdini (1984+) addresses specific principles of influence: how human social cognition processes persuasion attempts. Together they cover much of how power and influence actually work in groups. For real leadership analysis, both are foundational reading. The skill is using each for the questions it's designed to answer: French and Raven for "what kind of power is operating here," Cialdini for "what specific influence principles are being applied."`,
              `Source C is recognizable viral alpha-mindset content with all the typical patterns. The "alpha wolf" biology underneath the framing is scientifically wrong; the original researcher (David Mech) has spent decades publicly correcting his earlier work and explicitly asking people to stop using the framing because it doesn't match how wolves actually work. The "99% are betas" framing isn't social psychology; it's marketing. Dominance reduction oversimplifies real social dynamics. Course-and-coaching revenue shapes the content toward confident dramatic claims. Anti-empathy positioning runs opposite to actual leadership research findings. The content sells because it appeals to insecurity, not because it's accurate about how power works.`,
              `The deeper lesson. Real leadership and power literacy involves both broad frameworks (French and Raven for power bases) and specific frameworks (Cialdini for influence principles). The two complement each other and cover most analyses of power and influence dynamics. The viral alpha-mindset content offers neither real broad framework nor real specific principles; it offers performance of dominance as substitute for actual understanding. Knowing the gap protects you from absorbing low-quality framing AND gives you the tools to actually analyze leadership situations well.`,
              `One important note. Some pop leadership content does engage seriously with French and Raven or Cialdini at accessible levels. Distinguishing this from viral alpha-mindset content requires the Lesson 11 source evaluation skill. Good pop sources reference real research, acknowledge limits, and don't sell certainty. Viral alpha-mindset content does none of these. The distinction isn't "academic vs popular" but "engaged with real research vs not."`,
            ],
          },
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `How do power, authority, and influence differ?`,
              options: [
                `Same thing`,
                `Power: broadest concept, ability to affect what happens, many sources; authority: specific form of power, legitimate power from recognized role, bounded by the role; influence: ability to shape what others do without necessarily having power over them, works through persuasion, example, relationship, credibility`,
                `Levels`,
                `Random terms`,
              ],
              correctIndex: 1,
              explanation: `The differences matter practically. A leader relying entirely on authority gets compliance but not engagement. A leader building influence creates lasting impact but may not get rapid execution. A leader wielding power without authority or influence produces fear and resistance.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "legitimacy"?`,
              options: [
                `Being legal`,
                `Quality of being accepted by a group as having rightful claim to authority; what distinguishes authority from raw power; lose legitimacy and you may still have the position but no longer have working authority; people who held positions but lost legitimacy often discover their orders stop being followed`,
                `Birth status`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Authority without legitimacy is just power. Others may comply because they have to, not because they accept the right. Legitimacy is the key concept distinguishing authority from raw power and is what allows authority to actually function.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are French and Raven's five bases of social power (1959)?`,
              options: [
                `Random list`,
                `Legitimate (from recognized role), reward (ability to give what's wanted), coercive (ability to punish), expert (recognized knowledge), referent (being admired or wanting to be like); foundational framework cited tens of thousands of times; later additions include informational power`,
                `Five types of people`,
                `Power levels`,
              ],
              correctIndex: 1,
              explanation: `Each base operates differently. Coercive produces resistance alongside compliance; referent produces deep cooperation but takes long to build; expert produces willing cooperation in the expert's domain. Most leadership situations involve combinations; pure types are uncommon.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "referent power"?`,
              options: [
                `Citation power`,
                `Power that comes from being admired, respected, or wanting to be like the person; one of French and Raven's five bases; often called "charisma" but broader; produces deep cooperation because people want connection; most durable and slowest to build of the five bases`,
                `Recommendation power`,
                `Random label`,
              ],
              correctIndex: 1,
              explanation: `You can't fake referent power for long; people sense when underlying respect-worthiness isn't there. When it's real, it persists across changes in formal position. Often what people mean by "natural leadership" — people follow voluntarily because of who you are.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are Cialdini's six principles of influence?`,
              options: [
                `Random principles`,
                `Reciprocity (return favors), commitment and consistency (follow through on prior commitments), social proof (do what others do), liking (influenced by people we like), authority (defer to perceived authority), scarcity (want what's rare); from his 1984+ book "Influence"; patterns of how human social cognition actually works`,
                `Sales techniques`,
                `Manipulation list`,
              ],
              correctIndex: 1,
              explanation: `The principles aren't manipulation techniques; they're patterns of how social cognition works. Understanding them helps you both recognize when others use them on you and use them ethically yourself. Cialdini explicitly distinguishes ethical from manipulative applications throughout the book.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "social proof"?`,
              options: [
                `Identity verification`,
                `One of Cialdini's six principles: people look at what others are doing to figure out what's appropriate, especially when uncertain; restaurant lines, reviews, friends' opinions all operate through social proof; morally neutral; can be used ethically (showing actual evidence) or manipulatively (fake reviews)`,
                `Public popularity`,
                `Random term`,
              ],
              correctIndex: 1,
              explanation: `The principle works because what others have done is often genuinely useful information about what works. Knowing social proof exists protects you from manipulation (fake reviews, manufactured popularity) and lets you use it ethically (sharing actual positive evidence).`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the "alpha wolf" framing and why is it wrong?`,
              options: [
                `Wolves are nice`,
                `Originally from David Mech's 1970s research; he has spent decades since publicly correcting it; wolf packs are actually family groups (parents and offspring), not dominance hierarchies of unrelated adults; Mech has specifically asked people to stop using "alpha wolf" because it doesn't describe how wolves work; even less basis for human "alpha male/female" framing`,
                `Wolves aren't real`,
                `Random myth`,
              ],
              correctIndex: 1,
              explanation: `Real human social dynamics involve cooperation, reciprocity, status earned through contribution, complex multi-dimensional relationships, not pure dominance contests. The "alpha mindset" framing oversimplifies; it makes for catchy content but bad strategy when applied to actual leadership.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "power literacy"?`,
              options: [
                `Reading skill`,
                `Skill of accurately analyzing what kind of power is operating in any given social situation; combines French/Raven's bases, Cialdini's principles, observation of authority and legitimacy; useful for both leadership (using power well) and followership (recognizing when used on you); compounds over thousands of social situations`,
                `Authority training`,
                `Random skill`,
              ],
              correctIndex: 1,
              explanation: `Most people operate with intuitive but unanalyzed sense of power dynamics. Developing explicit literacy lets you see and articulate what's happening, which makes you more effective both as a leader and as someone navigating leadership from others.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: French/Raven and Cialdini are competing frameworks; you have to pick one.`,
              correctAnswer: false,
              explanation: `False. They're complementary, addressing different questions. French and Raven addresses the bases of social power broadly. Cialdini addresses specific principles of influence (often without formal authority). Both are foundational for real leadership analysis. Using each for the questions it's designed to answer is the skill.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I want to be the alpha of my friend group so people listen to me. I'm going to start dominating conversations and being more aggressive." Based on this lesson, what should you point out?`,
              options: [
                `"Good plan"`,
                `"The 'alpha' framing is scientifically wrong (David Mech's wolf research that 'alpha' came from has been publicly corrected for decades) and produces bad strategy when applied to humans. Real influence in friend groups works through Cialdini's principles (genuine reciprocity, real social proof, actually liking the people, real authority through demonstrated competence) and French/Raven's bases that work for friend groups (mainly referent power — being someone admired/respected, and expert power — actually knowing things worth knowing). Dominance through aggression usually produces resistance and lost relationships rather than influence. Real leadership in groups comes from being someone people want to be around and respect, not from forcing them to defer. The aggressive-dominance approach often makes you the person everyone tolerates rather than follows."`,
                `"Stop trying"`,
                `"Be aggressive"`,
              ],
              correctIndex: 1,
              explanation: `Real applied power literacy. Identify the specific framing problem (alpha wolf is wrong), point to real frameworks (French/Raven, Cialdini), explain why the aggressive approach backfires. This is how you help a friend avoid the alpha-mindset trap.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit distinctions between power, authority, and influence? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of French/Raven's five bases of power do you currently have access to? Which would benefit most from deliberate development?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with high power literacy across a lifetime of social situations, what does that change about your effectiveness in leadership AND in navigating others' leadership?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific group you're in. Apply the French/Raven framework: which bases of power are operating? Who has which kind?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there power dynamics the lesson doesn't capture well? What about institutional power, structural power, power that operates through systems rather than individuals?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch one Cialdini interview or read a chapter of "Influence." Notice how a serious researcher discusses these topics differently from viral content.` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Power literacy compounds over a lifetime of social situations. Two paths.`,
          familyActivity: {
            title: `The Family Power Analysis`,
            duration: `40 minutes`,
            description: `Share the French/Raven framework. Then pick one organization a family member belongs to (workplace, community group, religious institution, school, family itself). Analyze the power dynamics: who has which kind of power? What gets done through which kind? Where does legitimacy come from? Most adults haven't done this analysis explicitly even for organizations they've been part of for years. The conversation often surfaces real insights about why certain dynamics work or don't work.`,
          },
          projectOption: {
            title: `Read Cialdini's "Influence" or French & Raven's original paper, 3-4 weeks (optional)`,
            duration: `3-4 weeks, ~30 minutes per session`,
            description: `Pick one: Robert Cialdini's "Influence: The Psychology of Persuasion" (1984+, widely available, accessible for careful 12-year-old reader) or French & Raven's original "Bases of Social Power" (1959, shorter and more technical). Apply the framework to your own social situations over the reading period. Write 2,000 words on what you learned and how it changes your analysis of leadership situations.`,
            offerToParent: `Parent: opt your kid into this project. Reading foundational social psychology at 12 produces durable literacy adults often lack.`,
          },
          identityQuestion: `If you become someone who can accurately analyze power, authority, and influence in any social situation, what does that change about both your effectiveness and your protection from manipulation across decades?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can distinguish power, authority, and influence in any situation.`,
            `A person who builds referent and expert power rather than relying on coercive or reward.`,
            `Someone immune to viral "alpha mindset" hype because I understand what real power and influence look like.`,
          ],
          saveKey: `identity_responses_sl_11_12_2`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. Second Social Leadership lesson done. You can now distinguish power, authority, and influence as concepts, articulate French and Raven's five bases of social power (legitimate, reward, coercive, expert, referent), apply Cialdini's six principles of influence, recognize "alpha mindset" content for what it is, and analyze any leadership situation with real conceptual tools. You're already past the level where most adults operate explicitly. Next time we go into one of the most practical skills underneath all the above: building trust. Three real cases of trust-building situations. Case Study format. Let's go. — Valor`,
          badge: `power-literate`,
          badgeName: `Power Literate`,
          xpEarned: 75,
          competencies: [
            `Distinguishes power, authority, and influence as concepts`,
            `Articulates French and Raven's five bases of social power (1959)`,
            `Articulates Cialdini's six principles of influence`,
            `Recognizes "alpha mindset" content for what it is (and why)`,
            `Knows legitimacy as concept distinguishing authority from raw power`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Building Trust`,
            hook: `The foundation of durable leadership. Three real trust-building situations. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L02 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
