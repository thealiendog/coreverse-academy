// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L15 — Charisma vs Substance
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Leadership Research, Applied Psychology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (Collins's Level 5 research / Cabane on learnable charisma / viral charisma coaching)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l15-v1";

const SOCIALLEADERSHIP_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-15`,
      title: `Charisma vs Substance`,
      duration: 35,
      xpReward: 75,
      badge: `charisma-literate`,
      badgeName: `Charisma Literate`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, charisma is not a personality type — it's a cluster of learnable behaviors that create the experience of presence, power, and warmth. The research on charisma and leadership performance is more complicated than the coaching industry suggests. This lesson covers what the evidence actually shows.`,
          headline: `Charisma vs Substance`,
          subtitle: `Three sources on what charisma actually is and whether it's the key leadership trait.`,
          visual: `/voyager-assets/social-leadership/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Charisma" Actually Refers To`,
          paragraphs: [
            `The word "charisma" gets used loosely. In pop usage, it means roughly "the quality that makes people drawn to certain leaders." But that's vague enough to cover several distinct things. Researchers studying charisma have been working to specify what's actually being referred to and whether it's a coherent single thing or several different things bundled together.`,
            `Max Weber, the German sociologist, introduced "charismatic authority" in early 20th-century work as a distinct form of authority alongside traditional authority and legal-rational authority. For Weber, charismatic authority came from followers' perception that the leader had extraordinary qualities or destiny — qualities that justified following beyond ordinary obligations. Weber's framing emphasizes that charisma is something followers attribute to a leader, not something the leader simply has.`,
            `Robert House, an organizational psychologist, developed charismatic leadership theory in the 1970s-1980s. His research identified specific behaviors associated with leaders perceived as charismatic: articulating a clear vision, demonstrating high self-confidence, communicating high expectations, modeling behaviors consistent with the vision, expressing strong personal conviction. The behaviors are learnable; House's framing helped move charisma from "mystical quality" to "specific set of practices."`,
            `Contemporary research often distinguishes "personalized charisma" (centered on the leader's personal qualities, follower attachment to the leader as a person) from "socialized charisma" (centered on shared goals, follower attachment to what the leader represents). Both can produce strong follower engagement, but they have different long-term effects. Personalized charisma tends to produce cult-of-personality dynamics; socialized charisma tends to produce more durable movements.`,
            `One important finding across charisma research. Charisma matters more for short-term influence than long-term outcomes. People with high charisma are more likely to be hired, promoted, and followed initially. People with high competence and integrity are more likely to produce sustained good outcomes. The two can combine, but when they don't, the long-term tends to favor substance over pure charisma.`,
          ],
          image: `/voyager-assets/social-leadership/l15-s1-actually.webp`,
          imageCaption: `Charisma: Weber's "attributed by followers," House's "specific behaviors," personalized vs socialized distinction. Matters more for short-term than long-term outcomes.`,
          vocab: [
            {
              word: `charismatic authority`,
              definition: `Concept from Max Weber, German sociologist, in early 20th century. One of three forms of authority alongside traditional authority (from custom and tradition) and legal-rational authority (from formal rules and institutions). Charismatic authority comes from followers' perception that the leader has extraordinary qualities or destiny justifying following beyond ordinary obligations. Weber's key insight: charisma is something followers attribute to a leader, not something the leader simply has.`,
              audioPrompt: `Charismatic authority is a concept introduced by Max Weber, the German sociologist, in his early 20th century work, {name}. Weber distinguished three forms of authority. Traditional authority comes from custom and tradition; people follow because that's how it's always been done. Legal-rational authority comes from formal rules and institutions; people follow because the procedures and laws specify the authority. Charismatic authority is the third form: it comes from followers' perception that the leader has extraordinary qualities or destiny justifying following beyond ordinary obligations. Weber's key insight: charisma is something followers attribute to a leader, not something the leader simply has in isolation. The same person could be perceived as charismatic in one context and not another, depending on what followers see and need. Weber also noted that charismatic authority is often unstable. It depends on continued belief in extraordinary qualities, and routine often erodes that belief over time. Many charismatic movements eventually transition to traditional or legal-rational authority as they institutionalize.`,
            },
            {
              word: `personalized vs socialized charisma`,
              definition: `Contemporary research distinction. Personalized charisma: centered on the leader's personal qualities; follower attachment to the leader as a person. Tends to produce cult-of-personality dynamics. Socialized charisma: centered on shared goals; follower attachment to what the leader represents. Tends to produce more durable movements. Both produce strong follower engagement but with different long-term effects. Movements built on personalized charisma often collapse when the leader leaves.`,
              audioPrompt: `Personalized versus socialized charisma is a distinction from contemporary research into charisma types, {name}. Personalized charisma is centered on the leader's personal qualities — followers attach to the leader as an individual person. The charisma is essentially about that person: their personality, their presence, the feeling you get from being around them specifically. This tends to produce cult-of-personality dynamics. Followers are loyal to the person, not to the ideas or goals. Socialized charisma is centered on shared goals — followers attach to what the leader represents, the vision or mission they're associated with. The leader is the focal point, but the actual attachment is to something larger. This tends to produce more durable movements because the attachment can persist even if the leader changes or leaves. Both can produce strong follower engagement in the short term, but the long-term effects differ significantly. Movements built on personalized charisma often collapse when the leader leaves, retires, or is discredited; the followers were attached to the person, and without them there's nothing to attach to. Understanding which type of charisma is operating helps you read both what will sustain and what is fragile in any charismatic leader's influence.`,
            },
            {
              word: `House's charismatic behaviors`,
              definition: `Framework from Robert House, organizational psychologist, 1970s-1980s. Identified specific behaviors associated with leaders perceived as charismatic: articulating a clear vision, demonstrating high self-confidence, communicating high expectations, modeling behaviors consistent with the vision, expressing strong personal conviction. The behaviors are learnable. House's work helped move charisma from "mystical quality" to "specific set of practices" and laid groundwork for later research including Cabane's framework.`,
              audioPrompt: `House's charismatic behaviors refers to the work of Robert House, an organizational psychologist who developed charismatic leadership theory in the 1970s and 1980s, {name}. House's research identified specific behaviors associated with leaders who were perceived as charismatic by followers. Articulating a clear vision of where the group was going. Demonstrating high self-confidence in that vision. Communicating high expectations of followers and confidence that they could meet them. Modeling behaviors consistent with the vision — leading by example rather than just by instruction. Expressing strong personal conviction about the goals and values involved. These behaviors are learnable. You can develop the skill of articulating a vision clearly, of projecting confidence, of communicating expectations in ways that elevate rather than pressure. House's work was important because it helped move charisma from a mystical quality — something people just have — to a specific set of practices that can be identified, studied, and developed. It laid the groundwork for later frameworks including Cabane's presence-plus-power-plus-warmth model. The behaviors House identified are largely consistent with what Cabane later described; the research traditions build on each other.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What The Research Shows About Charisma And Performance`,
          paragraphs: [
            `Beyond defining charisma, research has examined how charisma relates to actual leadership performance. The findings are more mixed than pop content suggests.`,
            `On the positive side. Studies have found that charisma correlates with several leadership outcomes: faster team mobilization, stronger initial follower engagement, higher willingness of teams to take on difficult challenges, more effective communication of vision, and resilience through hard times. People with high charisma can produce specific results that people without it struggle to achieve, especially in early team formation and crisis situations.`,
            `On the limiting side. The same studies find that pure charisma without underlying substance often produces worse long-term outcomes than substance without charisma. Charismatic leaders who lack judgment lead teams enthusiastically in wrong directions. Charismatic leaders who lack integrity build follower loyalty that gets exploited. Charismatic leaders who lack technical competence make confident decisions that turn out to be wrong. The charisma amplifies whatever underlying judgment exists; if the judgment is weak, the amplification is harmful.`,
            `Jim Collins's "Good to Great" research (2001) found one of the strongest empirical findings against pure charisma. His team studied companies that made sustained leaps from good to great performance over 15 years and compared them to companies that didn't. They expected to find that great companies were led by charismatic CEOs. They found the opposite: companies that sustained great performance disproportionately had what Collins called "Level 5" leaders, characterized by personal humility and intense professional will. The leaders were modest about themselves while being fierce about the organization's goals. They often deflected credit and took responsibility for failures. Many were described as quiet and unassuming.`,
            `Collins explicitly contrasted Level 5 leadership with the "celebrity CEO" model popular in the 1990s. Companies led by celebrity CEOs (who had strong personal charisma and brand) often performed worse over time than companies led by quieter, more substantive leaders. The finding was counterintuitive enough that subsequent research has examined it carefully; it has held up in multiple replications and refinements.`,
            `Adam Grant's work on "givers and takers" (in "Give and Take," 2013) supports a related finding. Takers (people oriented around extracting value, often charismatic and confident) often perform well in the short term but worse over careers. Givers (people oriented around helping others, often less self-promoting) often perform best over careers. Charisma is more common among takers than givers; the sustainable performance is more common among givers.`,
            `The synthesis. Charisma is useful but not sufficient. The best leaders typically have substantive judgment and integrity AND enough charisma to communicate effectively. Pure charisma without substance often misleads followers; substance without communication often fails to mobilize anyone. The combination matters more than either alone, and when they're in tension, substance usually predicts better long-term outcomes than charisma does.`,
          ],
          image: `/voyager-assets/social-leadership/l15-s2-research.webp`,
          imageCaption: `Research findings: charisma helps short-term mobilization but pure charisma without substance often produces worse long-term outcomes. Collins's Level 5 finding is foundational.`,
          vocab: [
            {
              word: `leadership`,
              definition: `Concept from Jim Collins's "Good to Great" research (2001). Level 5 leaders combine personal humility with intense professional will. Modest about themselves while fierce about the organization's goals. Often deflect credit and take responsibility for failures. Disproportionately led companies that made sustained leaps from good to great performance. Explicitly contrasted with celebrity CEO model. Foundational finding against pure charisma as the key leadership trait.`,
              audioPrompt: `Level 5 leadership is a concept from Jim Collins's 2001 book "Good to Great," {name}. Collins's research team studied companies that made sustained leaps from good to great performance over 15 years and compared them to companies that didn't. They expected to find great companies were led by charismatic CEOs. They found the opposite. Companies that sustained great performance disproportionately had what Collins called "Level 5" leaders. Level 5 leaders combine personal humility with intense professional will. They're modest about themselves while being fierce about the organization's goals. They often deflect credit and take responsibility for failures. Many are described as quiet and unassuming. Collins explicitly contrasted Level 5 leadership with the celebrity CEO model popular in the 1990s. Companies led by celebrity CEOs often performed worse over time than companies led by quieter, more substantive leaders. The finding was counterintuitive enough that subsequent research has examined it carefully; it has held up in multiple replications. One of the foundational empirical findings against pure charisma as the key leadership trait.`,
            },
            {
              word: `celebrity CEO model`,
              definition: `Leadership model popular in the 1990s that Collins's "Good to Great" research explicitly contrasted with Level 5 leadership. Characterized by high personal charisma, strong personal brand, and prominent public presence. Collins found that companies led by celebrity CEOs often performed worse over time than companies led by quieter, more substantive Level 5 leaders. The celebrity CEO model is what charisma coaching implicitly sells; Collins's data runs directly against it.`,
              audioPrompt: `The celebrity CEO model is the leadership pattern that Jim Collins's research explicitly contrasted with Level 5 leadership, {name}. Popular in the 1990s, the celebrity CEO model featured leaders with high personal charisma, strong personal branding, and prominent public presence. These were leaders who got extensive press coverage, spoke confidently about grand visions, and built strong personal followings. The business culture of the era held them up as exemplary. Collins's research team expected to find these kinds of leaders at the companies that made sustained leaps to great performance. They found the opposite. Companies with celebrity CEOs often performed worse over time than companies with quieter, more humble, more substantive leaders. The finding was counterintuitive and uncomfortable enough that it required careful examination before publication. It has held up in multiple subsequent replications. The celebrity CEO model is essentially what viral charisma coaching content is implicitly selling as an aspiration. Collins's data runs directly against that aspiration at the organizational level: impressive personal charisma in the leader does not reliably produce great sustained organizational outcomes, and often correlates with worse ones.`,
            },
            {
              word: `charisma amplifies`,
              definition: `Finding from charisma research: charisma amplifies whatever underlying judgment exists. If the underlying judgment is strong, charisma helps communicate it effectively and mobilize people around it. If the underlying judgment is weak, charisma leads teams enthusiastically in wrong directions. Charisma with weak integrity builds follower loyalty that gets exploited. Charisma with weak competence produces confident decisions that turn out wrong. The amplification effect makes the underlying substance more important, not less.`,
              audioPrompt: `Charisma amplifies is a key finding from charisma research described in the lesson, {name}. Charisma doesn't create good judgment; it amplifies whatever underlying judgment already exists. If the judgment is strong — if the leader has real competence, integrity, and sound strategic thinking — then charisma helps that substance reach people effectively. It mobilizes teams, communicates vision clearly, and builds the emotional engagement that sustains effort through difficulty. If the judgment is weak, charisma leads teams enthusiastically in wrong directions. A highly charismatic leader who lacks judgment doesn't produce modest-scale mistakes; the charisma amplifies the errors. Followers go further, faster, in the wrong direction because the charisma makes the wrong direction feel compelling. Charismatic leaders who lack integrity build follower loyalty that gets exploited — the loyalty is real, but it's being directed by someone whose integrity doesn't justify it. Charismatic leaders who lack technical competence make confident decisions that turn out to be wrong. The amplification effect is why the underlying substance matters more, not less, when charisma is present. The combination everyone wants is real substance plus the charismatic communication that lets the substance reach people effectively.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Charisma As Learnable Skill (The Cabane Framework)`,
          paragraphs: [
            `Olivia Fox Cabane's "The Charisma Myth" (2012) approaches charisma from a different angle: as a learnable skill rather than a mystical quality. Her framework, based on research into what people perceive as charismatic, identifies three components that can be developed: presence, power, and warmth.`,
            `Presence: being fully attentive to whoever you're with, rather than distracted, performing, or mentally elsewhere. Most people who report meeting charismatic figures describe feeling unusually seen and heard during the interaction. Cabane argues this presence isn't innate; it can be developed through specific practices (managing internal distraction, attending to physical signals of attention, releasing concern about how you're being perceived).`,
            `Power: signals that suggest you have agency, competence, or capability. Body language (taking appropriate space, steady eye contact, calm movement), voice (steady tone, appropriate pace), demonstrated competence in relevant areas. Power signals are interpreted by others as evidence that the person can act effectively. Pure power signals without warmth often read as intimidating or arrogant; combined with warmth, they read as confident.`,
            `Warmth: signals that suggest you have positive intent toward others. Genuine smiles, openness in body language, expressing interest in others, kindness. Warmth signals are interpreted as evidence that the person is on your side. Pure warmth without power often reads as nice but not influential; combined with power, it reads as someone who could help you and chooses to.`,
            `Cabane's framework. Charisma = presence + power + warmth, with all three present. Pure power without warmth reads as cold or threatening. Pure warmth without power reads as nice but ineffective. Both without presence reads as performed rather than genuine. The combination of all three is what people experience as charisma.`,
            `What's useful about the framework. It moves charisma from "mystical quality you either have or don't" to "specific component skills you can develop." It distinguishes ethical from manipulative charisma (presence + power + warmth aimed at genuine engagement vs. signals deployed to manipulate). It identifies what's missing for people who feel they "lack charisma" — usually one specific component rather than the whole thing.`,
            `What's limited. The framework focuses on signals that produce the perception of charisma. It doesn't fully address whether the underlying qualities are real. Someone could deploy presence/power/warmth signals manipulatively (lots of con artists are very charismatic). The framework is useful for development; it doesn't substitute for the substance underneath that determines whether the charisma is being used well or badly.`,
          ],
          image: `/voyager-assets/social-leadership/l15-s3-cabane.webp`,
          imageCaption: `Cabane's framework: charisma = presence + power + warmth. Three component skills that can be developed. Distinguishes ethical from manipulative charisma.`,
          vocab: [
            {
              word: `warmth cabane`,
              definition: `Charisma framework from Olivia Fox Cabane's "The Charisma Myth" (2012). Charisma understood as combination of three component skills: presence (full attention to whoever you're with), power (signals of agency and capability), warmth (signals of positive intent toward others). All three needed; missing any one produces partial or distorted charisma. Frames charisma as learnable rather than mystical innate quality.`,
              audioPrompt: `Presence plus power plus warmth is the charisma framework from Olivia Fox Cabane's 2012 book "The Charisma Myth," {name}. Charisma understood as the combination of three component skills. Presence: being fully attentive to whoever you're with rather than distracted, performing, or mentally elsewhere. People who report meeting charismatic figures often describe feeling unusually seen and heard during the interaction. Power: signals that suggest you have agency, competence, or capability. Body language, voice, demonstrated competence in relevant areas. Warmth: signals that suggest you have positive intent toward others. Genuine smiles, openness, expressing interest in others, kindness. All three needed for charisma to fully operate. Pure power without warmth reads as cold or threatening. Pure warmth without power reads as nice but ineffective. Both without presence reads as performed rather than genuine. The framework's usefulness: it moves charisma from mystical quality to learnable component skills. Its limit: it addresses signals that produce perception of charisma, not necessarily whether underlying qualities are real.`,
            },
            {
              word: `presence`,
              definition: `First component of Cabane's charisma framework. Being fully attentive to whoever you're with rather than distracted, performing, or mentally elsewhere. Most people who report meeting charismatic figures describe feeling unusually seen and heard during the interaction. Cabane argues presence isn't innate; it can be developed through specific practices — managing internal distraction, attending to physical signals of attention, releasing concern about how you're being perceived. The foundation that makes power and warmth feel genuine rather than performed.`,
              audioPrompt: `Presence is the first component in Cabane's three-part charisma framework, {name}. It means being fully attentive to whoever you're with rather than distracted, performing, or mentally elsewhere. Most people who report meeting charismatic figures describe one specific experience: feeling unusually seen and heard during the interaction. That feeling is produced primarily by presence. The other person is genuinely attending to you, not waiting for their turn to speak, not mentally reviewing what they want to say next, not checking their phone in their mind. Cabane argues that presence isn't innate; it can be developed through specific practices. Managing internal distraction — learning to notice when your mind has gone elsewhere and return it. Attending to physical signals of attention — posture, eye contact, the quality of listening. Releasing concern about how you're being perceived in the moment, which is one of the main things that pulls attention away from the other person. Presence is the foundation of the charisma framework because without it, power and warmth both feel performed rather than genuine. You can project all the right signals of confidence and warmth, but if you're not actually attending to the person in front of you, they feel it — and the charisma falls flat.`,
            },
            {
              word: `charisma as learnable`,
              definition: `Central claim of Cabane's "The Charisma Myth" (2012): charisma is not a mystical innate quality you either have or don't. It's a set of learnable component skills (presence, power, warmth) that can be developed deliberately. The claim challenges the pop assumption that charismatic leaders were born that way. Grounded in research into what people actually perceive as charismatic. Moves charisma development from "hope you have it" to "specific practices that produce it."`,
              audioPrompt: `Charisma as learnable is the central claim of Olivia Fox Cabane's 2012 book "The Charisma Myth," {name}. The myth the title refers to is the common assumption that charisma is a mystical innate quality — something people are simply born with or not. Cabane's argument, grounded in research into what people actually perceive as charismatic, is that charisma is a set of learnable component skills. Presence can be developed through specific attention practices. Power signals can be developed through deliberate work on body language, voice, and demonstrated competence. Warmth can be developed through genuine investment in positive regard for others. The claim is significant because it shifts charisma development from "hope you have it" to "here are specific practices that produce it." It also identifies what's usually missing for people who feel they lack charisma: not the entire package, usually one specific component. Someone who is warm and present but projects no power reads as nice but ineffective. Someone who projects power and presence but no warmth reads as intimidating. Identifying the missing component points toward specific development rather than vague aspiration to "be more charismatic." The framework has limits — it addresses signals more than underlying substance — but as a development framework for the communication side of leadership, it is more useful than most charisma content.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Viral Charisma Coaching Ecosystem`,
          paragraphs: [
            `Beyond serious research, there's a large viral ecosystem selling charisma as the master leadership skill. "Charisma University." "Become magnetic." "Develop irresistible presence." YouTube channels and TikTok accounts with millions of followers. Courses and coaching at premium prices. The content varies but shares patterns worth recognizing.`,
            `First: overselling charisma's importance. The content typically treats charisma as the single most important factor in leadership, career, and personal success. This is empirically wrong — substantive judgment, integrity, and domain competence matter at least as much for sustained outcomes. The overselling exists because charisma sounds learnable in a way that "develop deep substance over decades" doesn't.`,
            `Second: stripped of ethics. Like the dark-psychology content covered in Lesson 7, charisma coaching often references real research (Cabane, House) but strips out the ethical context. The framing becomes "use these techniques to get what you want" rather than "develop these capacities for genuine engagement." Charisma can be deployed manipulatively; ethical content addresses this; manipulative coaching doesn't.`,
            `Third: focus on signals over substance. The content often emphasizes signals (how to stand, how to speak, how to make eye contact) without the underlying qualities that the signals are supposed to reflect. Presence signals without actual attention. Power signals without actual capability. Warmth signals without actual care. The combination produces a sophisticated performance of charisma that lacks the substance that makes real charisma work.`,
            `Fourth: monetization through courses. "Become unforgettable." "Master your charisma." Courses and coaching at premium prices. The business model is selling the courses, not actually producing the outcomes claimed. Many viewers report watching hours of content without measurable change in their actual lives because the content focuses on inspiration and entertainment rather than the deliberate practice that would produce skill development.`,
            `Fifth: structural problem with the actual skill being taught. Pure charisma skills without underlying substance often produce social effectiveness in the short term and significant problems over time. Skilled performers of charisma without real care, real competence, or real integrity build relationships and careers that collapse when reality catches up. The skill being sold doesn't actually produce the durable outcomes the marketing implies.`,
            `Sixth: ignoring Collins's Level 5 finding. The research finding that companies sustaining great performance had quieter, more humble leaders rather than charismatic ones runs directly opposite to charisma coaching's central premise. Serious leadership development should account for this finding. Charisma coaching almost universally ignores it because acknowledging it would undermine the product being sold.`,
          ],
          image: `/voyager-assets/social-leadership/l15-s4-viral.webp`,
          imageCaption: `Viral charisma coaching: overselling, stripped of ethics, signals over substance, monetization, ignores Collins's Level 5 finding.`,
          vocab: [
            {
              word: `substance pattern`,
              definition: `Recurring pattern in low-quality leadership content. Focuses on signals that produce perception of charisma/competence/authority without the underlying qualities the signals are supposed to reflect. Presence signals without actual attention. Power signals without actual capability. Warmth signals without actual care. Produces sophisticated performance that lacks substance. Common in viral coaching content selling appearance-based skills as substitute for real development.`,
              audioPrompt: `The signals over substance pattern is a recurring pattern in low-quality leadership content, {name}. The content focuses on signals that produce the perception of charisma, competence, or authority without the underlying qualities the signals are supposed to reflect. Presence signals without actual attention. Power signals without actual capability. Warmth signals without actual care. The combination produces a sophisticated performance of charisma or leadership that lacks the substance that makes real versions work. Common in viral coaching content selling appearance-based skills as substitute for real development. Why it sells: signals are easier to learn than substance. "Stand this way, look this way, sound this way" can be taught in a few hours. "Develop genuine attention, real capability, authentic care" takes years. The marketing of fast results favors the easier skills even though the harder ones determine durable outcomes. Recognizing this pattern helps you both evaluate content you encounter and avoid the trap of developing signals without underlying substance.`,
            },
            {
              word: `ethics stripped from charisma`,
              definition: `Pattern in viral charisma coaching content: references real research (Cabane, House) but removes the ethical framing those sources include. The result shifts from "develop these capacities for genuine engagement" to "use these techniques to get what you want." Charisma can be deployed manipulatively; ethical content addresses this; manipulative coaching doesn't. The stripping of ethics is a warning sign that distinguishes low-quality from high-quality charisma content.`,
              audioPrompt: `Ethics stripped from charisma is a pattern the text identifies as characteristic of viral charisma coaching content, {name}. The content references real research — Cabane's presence-plus-power-plus-warmth framework, House's behaviors, similar work — but removes the ethical framing those sources include. Cabane explicitly discusses that the techniques can be deployed manipulatively and addresses the ethical dimension. Viral coaching content strips that context out entirely. The result is a reframing from "develop these capacities for genuine engagement with people" to "use these techniques to get what you want." That shift is significant. Charisma can be used ethically — to genuinely communicate, connect, inspire, lead — or manipulatively, to exploit attention and trust for personal gain. Many con artists, high-control group leaders, and manipulative individuals have high charisma. The difference between ethical and manipulative deployment isn't the techniques; it's the intent and the honesty behind them. When coaching content strips the ethical discussion, it implicitly endorses the manipulative framing. Recognizing this pattern helps you distinguish content that actually develops ethical charisma from content that's essentially selling manipulation skills with charisma branding.`,
            },
            {
              word: `course-and-coaching revenue model`,
              definition: `Business model of viral charisma coaching content: selling courses and one-on-one coaching at premium prices. The model shapes content toward dramatic confident claims and urgency tactics rather than accuracy. Content is designed to produce sales, not outcomes. Viewers report watching hours of content without measurable change because the content focuses on inspiration and entertainment rather than deliberate practice. The marketing meta-applies charisma techniques to sell charisma courses.`,
              audioPrompt: `The course-and-coaching revenue model is the business model that shapes viral charisma coaching content, {name}. The content sells courses and one-on-one coaching at premium prices — the example in the lesson is a $897 Magnetic Charisma Mastery Program. The revenue model matters because it shapes what content gets produced. Content designed to produce sales emphasizes dramatic confident claims, urgency tactics, and inspiration rather than accurate nuanced instruction. "Stop being invisible. The window to become magnetic is closing." These are sales techniques, not teaching techniques. Many viewers report watching hours of charisma coaching content without measurable change in their actual behavior or effectiveness. This is not surprising: the content is optimized for views, engagement, and purchases, not for producing the skill development it promises. The text notes a particular irony: the marketing of charisma courses meta-applies charisma techniques to sell the courses. The creator demonstrates presence, projects power, deploys warmth — all the signals that make the viewer feel engaged and trusting — specifically to sell a course teaching those same signals. The meta-application is effective marketing. It rarely produces effective customer outcomes.`,
            },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources approaching the question of charisma in leadership. Collins's research is empirical and counter-intuitive (humility plus will, not charisma, distinguished sustained great companies). Cabane's framework is research-grounded and useful (charisma as learnable presence + power + warmth). The viral coaching content represents what's actually being marketed to your generation.`,
            `One framing to consider. Collins and Cabane aren't strictly opposed. Collins's finding was about pure charisma without substance versus humility-and-will combinations. Cabane's framework can describe charisma in either context: a Level 5 leader with presence/power/warmth is fully consistent with both frameworks. The disagreement is more with the viral framing that charisma is the master skill than with each other.`,
            `Another framing. The viral content has some useful tactical observations buried in it, mostly because it draws from Cabane and similar research. But the structural problems (overselling, stripped ethics, signals over substance, ignoring contrary research, monetization-driven framing) make the content riskier than its useful elements justify. Better to read Collins and Cabane directly than to absorb the viral version.`,
            `One last framing. The skill you're building isn't deciding whether charisma matters (it does, somewhat). It's reading the relative weight of charisma versus substance in any specific leadership situation you encounter. Most pop content claims charisma is everything; most research finds it's one factor among several. Building accurate judgment about this protects you from both overweighting and underweighting charisma in your own assessments.`,
          ],
          image: `/voyager-assets/social-leadership/l15-s5-before.webp`,
          imageCaption: `Two serious sources approaching from different angles plus viral charisma coaching. The skill is reading relative weight in specific situations.`,
          vocab: [
            {
              word: `relative weighting`,
              definition: `Skill of assessing the relative importance of different traits (charisma, substance, integrity, competence, judgment) in specific leadership situations. Most pop content treats one trait as the master skill; real research finds different traits matter more in different situations. Building accurate weighting requires engaging with multiple research traditions and resisting the temptation of single-factor explanations.`,
              audioPrompt: `Relative weighting in leadership traits is the skill of assessing the relative importance of different traits in specific leadership situations, {name}. Charisma, substance, integrity, competence, judgment, communication ability, emotional intelligence — many different traits matter for leadership outcomes. Most pop content treats one trait as the master skill: charisma, or grit, or empathy, or whatever the latest book emphasizes. Real research finds different traits matter more in different situations and that effective leadership usually requires combinations rather than maximizing any single trait. The skill of accurate weighting requires engaging with multiple research traditions and resisting the temptation of single-factor explanations. For 12-year-olds, the skill protects you from over-investing in any single trait that gets viral attention. Builds toward mature leadership development that addresses real combinations rather than fixating on whatever's currently fashionable in leadership content.`,
            },
            {
              word: `Collins and Cabane combined`,
              definition: `Collins and Cabane's frameworks are complementary rather than opposed. Collins found that pure charisma (the celebrity CEO model) correlated with worse long-term outcomes than humility-plus-will. Cabane described how charisma can be developed as presence, power, and warmth. A Level 5 leader with presence, power, and warmth deployed ethically is consistent with both frameworks. The two disagree primarily with the viral framing that charisma is the master skill, not with each other.`,
              audioPrompt: `Collins and Cabane combined refers to how the two serious sources in this lesson relate to each other — and the answer is that they complement rather than oppose, {name}. Collins's research found that pure charisma, as represented by the celebrity CEO model, correlated with worse long-term organizational outcomes than the humility-plus-will combination he called Level 5 leadership. Cabane described what charisma is and how it can be developed as a learnable set of component skills: presence, power, warmth. These two findings aren't in conflict. A Level 5 leader — personally humble, professionally fierce, focused on the organization's goals rather than their own glory — can absolutely deploy presence, power, and warmth in ethical, effective ways. Cabane's framework describes how to develop the communication skills that let real substance reach people. Collins's framework describes what the substance should look like. Together they give you a more complete picture than either alone. The deeper disagreement isn't between Collins and Cabane; it's between both of them and the viral charisma coaching framing that says charisma is the master skill that determines leadership success. That framing contradicts Collins's empirical finding directly and strips out the ethical substance that Cabane includes.`,
            },
            {
              word: `charisma short-term vs long-term`,
              definition: `Key finding across charisma research: charisma matters more for short-term influence than long-term outcomes. People with high charisma are more likely to be hired, promoted, and followed initially. People with high competence and integrity are more likely to produce sustained good outcomes. When charisma and substance are in tension, long-term performance tends to favor substance. The best outcomes come from the combination, but if forced to choose, substance predicts long-term better.`,
              audioPrompt: `Charisma short-term versus long-term is one of the key findings across charisma research described in this lesson, {name}. Charisma matters more for short-term influence than for long-term outcomes. People with high charisma are more likely to be hired, promoted, and followed initially — the first impression is strong, the early mobilization is fast, the initial engagement is high. People with high competence and integrity are more likely to produce sustained good outcomes over time. The research finding is consistent across multiple research traditions: Collins's data on what distinguishes sustained great companies, Adam Grant's work showing that givers outperform takers over careers, broader charisma research finding that the short-term boost from charisma doesn't necessarily predict long-term effectiveness. When charisma and substance are in tension, long-term performance tends to favor substance. The charismatic leader who lacks judgment leads teams enthusiastically in wrong directions. The quieter, more substantive leader who lacks charismatic communication doesn't mobilize as quickly but makes better decisions over time. The ideal combination is both: real substance AND the charismatic communication skills that let the substance reach people. When forced to choose for long-term impact, substance wins.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l15-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Charisma And Leadership`,
          intro: `Three sources approach the question of charisma in leadership. Two are serious research from different angles; one is viral content. Rank them. Then see how a careful analyst would evaluate them.`,
          topic: `What role does charisma play in effective leadership?`,
          sources: [
            {
              id: `source-a`,
              name: `Jim Collins, "Good to Great" (2001) — empirical research on what distinguishes sustained great companies`,
              type: `Book by Jim Collins reporting research with team studying 15-year sustained leaps from good to great performance; identified "Level 5 leadership" (humility + will) as distinguishing feature, contrary to expectations of charismatic CEO model`,
              claim: `Companies that made sustained leaps from good to great over 15 years disproportionately had "Level 5" leaders, characterized by personal humility combined with intense professional will. Modest about themselves while fierce about organization's goals. Often deflected credit and took responsibility for failures. Many described as quiet and unassuming. Explicitly contrasts with the "celebrity CEO" model popular in the 1990s, which Collins found often correlated with worse long-term performance. Charisma matters less than substance for sustained outcomes.`,
              evidence: `Collins's team conducted substantial empirical research over years: comparing sustained great companies to companies in same industries that didn't make the leap, analyzing CEO characteristics, conducting interviews, looking for patterns. The Level 5 finding emerged from data, not theory. Has been replicated and refined in subsequent research. Some critiques argue Collins's methodology had survivor bias issues; the core finding has held up across multiple later studies. The book has become foundational in leadership literature; the Level 5 concept has been widely incorporated into subsequent leadership development. Collins has commercial activity (books, consulting) but the underlying research is solid.`,
            },
            {
              id: `source-b`,
              name: `Olivia Fox Cabane, "The Charisma Myth" (2012) — research-grounded book on charisma as learnable skill`,
              type: `Book by Olivia Fox Cabane, executive coach with academic background, drawing on charisma research and decades of coaching practice; offers framework of charisma as presence + power + warmth`,
              claim: `Charisma can be understood as combination of three learnable component skills: presence (full attention to whoever you're with), power (signals of agency and capability), warmth (signals of positive intent toward others). All three needed for charisma to fully operate. Pure power without warmth reads as cold; pure warmth without power reads as nice but ineffective; both without presence reads as performed. The framework moves charisma from "mystical innate quality" to "learnable component skills." Distinguishes ethical from manipulative deployment of the techniques. Charisma is useful for leadership but doesn't substitute for substance underneath.`,
              evidence: `Cabane has executive coaching credentials and engages with academic research throughout the book. The framework draws on existing charisma research (House, others) plus her own coaching practice. The presence/power/warmth components have empirical support across multiple research traditions. The book is more practitioner-focused than academic, with the strengths and limits that implies: very readable, somewhat self-help-styled, but grounded in real research. Acknowledges that the techniques can be deployed manipulatively and discusses the ethical dimension. Cabane has commercial activity (coaching, books, training) and the framework is partially shaped by what coaching clients want, but the underlying research connections are real.`,
            },
            {
              id: `source-c`,
              name: `@CharismaUniversity — TikTok/Instagram account, 2.7M followers, sells $897 "Magnetic Charisma Mastery Program"`,
              type: `Viral social media account producing content about "magnetic presence," "irresistible charisma," "alpha energy"; sells courses and one-on-one coaching at premium prices; references some real research but strips ethical context`,
              claim: `"Charisma is THE master skill that determines whether you win in life. The most charismatic people get the partners, jobs, opportunities, and respect they want. My $897 Magnetic Charisma Mastery Program teaches you the exact techniques used by the most magnetic people in history. Walk into any room and own it. Make anyone you want fall for you. Have everyone listen when you speak. Friday is your last chance for early-bird pricing. Stop being invisible. The window to become magnetic is closing."`,
              evidence: `No academic credentials in psychology, leadership, or relevant research. References some real research (Cabane's presence/power/warmth often mentioned) but strips ethical framing and overclaims importance. The "charisma is THE master skill" framing isn't supported by leadership research; Collins's Level 5 finding directly contradicts it. The "make anyone fall for you" framing is closer to manipulation than to the ethical charisma Cabane describes. Course-and-coaching revenue model shapes content toward dramatic confident claims. Confidence-as-substitute-for-substance pattern throughout. Urgency pricing manipulates rather than serving the customer. Notably, the marketing of the courses uses charisma techniques to sell charisma courses — meta-application that often produces sales but rarely produces customer outcomes.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How do Collins and Cabane compare? They approach charisma from different angles. What does each contribute to understanding the role of charisma in leadership?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Sources A and B are both credible serious work that complement rather than oppose each other. Collins's empirical research found that pure charisma (the celebrity CEO model) correlated with worse long-term outcomes than the humility-plus-will combination he called Level 5 leadership. Cabane's framework describes what charisma is and how it can be developed as a learnable component skill. The two aren't contradictory: a Level 5 leader can absolutely deploy presence/power/warmth in ethical ways. The disagreement isn't between Collins and Cabane; it's between both of them and the viral framing that charisma is the master leadership skill.`,
              `Source C is recognizable viral charisma-coaching content with all the typical patterns. No credentials. Overclaims charisma's importance in ways that contradict research like Collins's. Strips ethical context from Cabane and similar work. Signals-over-substance pattern throughout. Course-and-coaching revenue shapes content toward dramatic claims. The marketing meta-applies charisma techniques to sell charisma courses; effective marketing, rarely effective development for the customer. Better to read Cabane directly (real framework with ethics) than the viral version that strips out what makes the framework actually work.`,
              `The deeper lesson. Real leadership development requires multiple traits in combination: substantive judgment, integrity, competence, communication ability, and yes, some charisma. The "charisma is everything" framing oversells one trait at the expense of the others; the "charisma is fake and bad" framing underplays a real skill. Collins and Cabane together give you a more accurate picture: charisma matters, can be developed, and is one factor among several rather than the master skill viral content sells. Knowing how to weight charisma versus other traits in specific situations is the literacy worth building.`,
              `One important note. The viral content has some useful tactical observations buried in it, mostly because it references Cabane and similar research. Some viewers extract useful tactics despite the framing. But the structural problems (no credentials, overclaiming, stripped ethics, manipulative marketing) make the content riskier than its useful elements justify. Better to read Collins and Cabane directly: same techniques, real research framing, no harmful framing.`,
            ],
          },
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "charismatic authority" (Weber)?`,
              options: [
                `Random concept`,
                `Concept from Max Weber: one of three forms of authority (alongside traditional and legal-rational); comes from followers' perception that the leader has extraordinary qualities or destiny justifying following beyond ordinary obligations; charisma is something followers attribute to a leader, not something the leader simply has; often unstable, depends on continued belief`,
                `Old term`,
                `Power type`,
              ],
              correctIndex: 1,
              explanation: `Weber's key insight: charisma is attributed by followers, not just possessed by leaders. The same person could be perceived as charismatic in one context and not another. Charismatic authority is often unstable because routine erodes belief; many charismatic movements eventually transition to other authority forms.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did Jim Collins find about charisma vs other traits in great companies?`,
              options: [
                `Charisma wins`,
                `Companies that made sustained leaps from good to great over 15 years disproportionately had "Level 5" leaders (humility + will), NOT charismatic CEOs; modest about themselves while fierce about organization's goals; deflected credit and took responsibility for failures; explicitly contrasts with celebrity CEO model that correlated with worse performance`,
                `Random study`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Collins's team expected to find charismatic CEOs distinguished great companies. They found the opposite. The Level 5 finding emerged from data and has been replicated. One of the foundational empirical findings against pure charisma as the key leadership trait.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is Cabane's framework for charisma?`,
              options: [
                `Random theory`,
                `From "The Charisma Myth" (2012): charisma = presence (full attention to whoever you're with) + power (signals of agency and capability) + warmth (signals of positive intent); all three needed; missing any produces partial/distorted charisma; moves charisma from "mystical quality" to "learnable component skills"`,
                `Charm tricks`,
                `Body language`,
              ],
              correctIndex: 1,
              explanation: `Pure power without warmth reads as cold or threatening. Pure warmth without power reads as nice but ineffective. Both without presence reads as performed. The combination is what people experience as charisma. The framework is useful for development but doesn't substitute for substance underneath.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does research show about charisma and long-term outcomes?`,
              options: [
                `Random finding`,
                `Charisma helps short-term mobilization (faster team formation, stronger initial engagement, willingness to take on challenges); pure charisma without substance often produces worse long-term outcomes than substance without charisma; charisma amplifies whatever underlying judgment exists, so weak judgment + charisma = worse outcomes than weak judgment alone`,
                `Charisma always wins`,
                `Charisma is bad`,
              ],
              correctIndex: 1,
              explanation: `Charisma is useful but not sufficient. The best leaders typically have substantive judgment AND enough charisma to communicate effectively. When they're in tension, substance usually predicts better long-term outcomes. Charisma amplifies; if the underlying substance is weak, the amplification is harmful.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the distinction between personalized and socialized charisma?`,
              options: [
                `Same thing`,
                `Personalized charisma: centered on the leader's personal qualities, follower attachment to the leader as a person; produces cult-of-personality dynamics. Socialized charisma: centered on shared goals, follower attachment to what the leader represents; produces more durable movements. Both can produce strong engagement but with different long-term effects`,
                `Random concepts`,
                `Levels of charisma`,
              ],
              correctIndex: 1,
              explanation: `The distinction matters because the long-term effects differ. Movements built on personalized charisma often collapse when the leader leaves; movements built on socialized charisma often persist. Knowing which is operating helps you read both leaders and follower attachment patterns.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the "signals over substance pattern"?`,
              options: [
                `Random observation`,
                `Recurring pattern in low-quality leadership content: focuses on signals that produce perception of charisma/competence/authority without the underlying qualities the signals are supposed to reflect; presence signals without actual attention, power signals without actual capability, warmth signals without actual care; produces sophisticated performance lacking substance`,
                `Signal processing`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `Common in viral coaching content selling appearance-based skills as substitute for real development. Signals are easier to learn than substance; "stand this way" can be taught in hours, "develop genuine attention" takes years. Recognizing the pattern helps you avoid the trap.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What patterns characterize viral charisma coaching content?`,
              options: [
                `Real research`,
                `Overselling charisma's importance (treating it as master skill, which contradicts research); stripped of ethics (deploys Cabane and similar work without ethical framing); focus on signals over substance; monetization through courses; ignoring contrary research like Collins's Level 5 finding; uses charisma techniques to sell charisma courses (meta-application)`,
                `Useful content`,
                `Mostly good`,
              ],
              correctIndex: 1,
              explanation: `The patterns are recognizable across many specific creators. The content exists because it sells, not because it's accurate. The marketing meta-applies charisma techniques to sell charisma courses; effective marketing, rarely effective customer development.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "relative weighting" in leadership traits?`,
              options: [
                `Random skill`,
                `Skill of assessing the relative importance of different traits (charisma, substance, integrity, competence, judgment) in specific leadership situations; most pop content treats one trait as master skill; real research finds different traits matter more in different situations; requires engaging with multiple research traditions and resisting single-factor explanations`,
                `Heavy lifting`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Building accurate weighting protects you from over-investing in any single trait that gets viral attention. Effective leadership usually requires combinations rather than maximizing any single trait. Building toward mature leadership development addresses real combinations rather than fixating on whatever's currently fashionable.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Charisma is the master skill that determines leadership success.`,
              correctAnswer: false,
              explanation: `False. Real research (Collins, Grant, others) finds that substantive judgment, integrity, and competence matter at least as much as charisma for sustained outcomes. Charisma helps short-term but pure charisma without substance often produces worse long-term results. The "master skill" framing is viral content marketing, not research finding.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I want to develop charisma so people will listen to me and follow me as a leader. I'm going to take this $897 Magnetic Charisma course." Based on this lesson, what should you point out?`,
              options: [
                `"Good plan"`,
                `"Several problems with that approach. First: charisma isn't the master leadership skill the marketing claims. Collins's 'Good to Great' research found that humility-plus-will, not charisma, distinguished sustained great companies. Second: the $897 course is almost certainly repackaged Cabane and similar research with ethics stripped out. Better to read Cabane's 'The Charisma Myth' directly — same techniques, real ethical framing, no harmful framing, much less expensive. Third: even with real charisma development, the substance underneath matters more for whether people will actually follow you over time. Develop both: real competence, integrity, and judgment in your domain (the substance) AND Cabane's presence + power + warmth (the communication that lets the substance reach people). The combination matters more than maxing either alone. The viral course is selling you signals; what determines whether people actually follow you over years is the substance the signals are supposed to communicate."`,
                `"Buy it"`,
                `"Don't lead"`,
              ],
              correctIndex: 1,
              explanation: `Real applied charisma literacy. Don't dismiss the friend's interest; redirect from the viral course to the actual research and to the substance-plus-communication combination that determines real outcomes. This protects them from wasting money AND helps them develop the actual capability they want.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working understanding of charisma's role in leadership? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which of Cabane's components (presence, power, warmth) feels weakest in your own current behavior?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who has both real substance AND deliberately developed charisma over decades, what does that change about the leadership you can offer?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one leader you respect (not famous, just someone you know). Which combination of substance and charisma do they actually have? What can you learn from observing them?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there contexts where charisma matters MORE than substance? Crisis situations where mobilization speed matters? Cultural traditions that emphasize charismatic leadership? How does the weighting shift?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch one charismatic public figure this week. Apply the presence/power/warmth framework. Which components are present? Which are missing?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Charisma literacy shapes both your own development and your reading of leaders for decades. Two paths.`,
          familyActivity: {
            title: `The Family Charisma Conversation`,
            duration: `45 minutes`,
            description: `Share the Cabane framework (presence + power + warmth) and Collins's Level 5 finding. Then ask family members about leaders they've encountered: which had charisma, which had substance, which had both? Most adults have rich observations of leaders they've worked with or for. The conversation often surfaces patterns adults have observed but never articulated, including which leaders had real impact versus which had fading impact after their charisma waned.`,
          },
          projectOption: {
            title: `Read Collins's "Good to Great" or Cabane's "The Charisma Myth," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Jim Collins's "Good to Great" (2001, foundational empirical work on what makes companies sustainably great) or Olivia Fox Cabane's "The Charisma Myth" (2012, accessible framework for developing charisma as learnable skill). Apply concepts during the reading period. Write 1,500 words on what you learned. Reading real leadership research at 12 produces durable capability.`,
            offerToParent: `Parent: opt your kid into this project. Real leadership research at 12 is rare and valuable.`,
          },
          identityQuestion: `If you become someone who can both develop real substance AND deliberately develop the communication skills that let substance reach people — over decades of leadership across many contexts — what does that change about the impact you can have?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who develops both substance and charisma rather than relying on either alone.`,
            `A person who recognizes "signals over substance" patterns when I encounter them.`,
            `Someone who can deploy Cabane's presence + power + warmth ethically rather than manipulatively.`,
          ],
          saveKey: `identity_responses_sl_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifteenth Social Leadership lesson done. You now have Weber's charismatic authority concept, Collins's Level 5 leadership finding (the empirical case against pure charisma as the key trait), Cabane's framework (charisma as learnable presence + power + warmth), and the framework for recognizing viral charisma coaching for what it is. You can develop charisma deliberately while keeping perspective on its place among other leadership traits. You're at 75% of the band. Next time we go into one of the most powerful leadership situations: leading without formal authority. Case Study format. Let's go. — Valor`,
          badge: `charisma-literate`,
          badgeName: `Charisma Literate`,
          xpEarned: 75,
          competencies: [
            `Knows Weber's charismatic authority concept`,
            `Articulates Collins's Level 5 leadership finding (humility + will, not charisma)`,
            `Applies Cabane's framework (presence + power + warmth) for understanding and developing charisma`,
            `Distinguishes personalized from socialized charisma`,
            `Recognizes viral charisma coaching's "signals over substance" pattern`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Leading Without Authority`,
            hook: `Three case studies. Case Study format.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L15 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
