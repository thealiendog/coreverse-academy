// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L18 — Leading Yourself First
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Self-Leadership, Applied Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (self-mastery foundation / lead through being / service-oriented development)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l18-v1";

const SOCIALLEADERSHIP_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-18`,
      title: `Leading Yourself First`,
      duration: 35,
      xpReward: 75,
      badge: `self-leader`,
      badgeName: `Self-Leader`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, you can't lead others well without leading yourself. The question is what that means. Three serious positions exist on the relationship between self-leadership and leading others. Self-mastery as foundation: you have to develop discipline, values clarity, and self-knowledge BEFORE you can lead others well. Lead through being: leading yourself isn't separate from leading others; who you ARE is what you lead, regardless of position. Service-oriented self-development: you develop yourself BECAUSE you need to serve others well — the self-development is means, not end. Each has serious defenders across traditions. Today you build your argument for which fits your understanding. The position shapes how you'll approach your own development for the next 70 years.`,
          headline: `Leading Yourself First`,
          subtitle: `Three positions on the relationship between self-leadership and leading others.`,
          visual: `/voyager-assets/social-leadership/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Self-Leadership" Actually Refers To`,
          paragraphs: [
            `Self-leadership is the practice of deliberately shaping your own behavior, character, and direction rather than being shaped by circumstances and impulse. It involves managing how you spend your time and attention, developing the habits and skills you want, navigating your emotional responses, making deliberate choices about values and direction, and continuously developing as a person. The opposite isn't laziness exactly; it's drift — being moved by whatever's loudest, most pressing, or most immediately rewarding rather than by what you actually care about.`,
            `Self-leadership shows up across many traditions. Stoic philosophy in ancient Rome (Marcus Aurelius, Epictetus, Seneca) developed sophisticated practices for managing yourself. Confucian self-cultivation emphasized continuous personal development as the foundation of all good action. Many religious traditions include extensive practices for shaping the self (prayer, meditation, spiritual disciplines). Contemporary work in psychology and behavioral science adds frameworks from research on habits, decision-making, and personal development.`,
            `Stephen Covey's "The 7 Habits of Highly Effective People" (1989) consolidated much of this into an accessible framework. His first three habits are explicitly about self-leadership: be proactive (taking responsibility for your responses), begin with the end in mind (clarity about what you're building toward), and put first things first (managing what gets your time and attention). Covey called these the "private victory" that precedes "public victory" — leading yourself before you can lead others.`,
            `Contemporary research adds specific findings. James Clear's "Atomic Habits" (2018) synthesizes research showing that small habit changes compound dramatically over time; identity and habits reinforce each other. Marshall Goldsmith's work on behavior change identifies specific patterns that distinguish people who actually change from those who don't. Susan David's emotional agility (covered in Lesson 8) addresses how to navigate your emotional responses without being controlled by them. Viktor Frankl's "Man's Search for Meaning" (1946) explores how meaning shapes self-direction even under extreme constraints.`,
            `What unites these traditions: self-leadership is real, learnable, and consequential. The patterns of how you manage yourself shape what you can accomplish, who you become, and how you affect others over time. It's not a single skill but a cluster of related capacities that develop together.`,
          ],
          image: `/voyager-assets/social-leadership/l18-s1-what.webp`,
          imageCaption: `Self-leadership: deliberately shaping yourself rather than being shaped by drift. Stoic, Confucian, religious, contemporary traditions all engage it.`,
          vocab: [
            {
              word: `self-leadership`,
              definition: `Practice of deliberately shaping your own behavior, character, and direction rather than being shaped by circumstances and impulse. Includes managing time and attention, developing habits and skills, navigating emotional responses, making deliberate choices about values, continuously developing as a person. The opposite is "drift" (being moved by whatever's loudest or most immediately rewarding). Foundational to traditions across Stoic, Confucian, religious, and contemporary frameworks.`,
              audioPrompt: `Self-leadership is the practice of deliberately shaping your own behavior, character, and direction rather than being shaped by circumstances and impulse, {name}. Includes managing how you spend your time and attention, developing the habits and skills you want, navigating your emotional responses, making deliberate choices about values and direction, continuously developing as a person. The opposite isn't laziness exactly; it's drift. Being moved by whatever's loudest, most pressing, or most immediately rewarding rather than by what you actually care about. Self-leadership shows up across many traditions. Stoic philosophy developed sophisticated practices for managing yourself. Confucian self-cultivation emphasized continuous personal development. Religious traditions include extensive practices for shaping the self. Contemporary work in psychology adds frameworks from habit research, decision-making, emotional regulation. What unites these traditions: self-leadership is real, learnable, and consequential. Not a single skill but a cluster of related capacities that develop together over years.`,
            },
            {
              word: `Stoic self-mastery`,
              definition: `Practice from Stoic philosophy (Marcus Aurelius, Epictetus, Seneca) in ancient Rome. Developed sophisticated practices for managing yourself: distinguishing what is in your control from what isn't, focusing effort on the former, navigating emotional responses without being controlled by them. Marcus Aurelius's "Meditations" is a primary text. Stoic tradition is one of the historical antecedents of what is now called self-leadership and has been influential from ancient Rome through contemporary leadership frameworks.`,
              audioPrompt: `Stoic self-mastery is a practice from Stoic philosophy in ancient Rome, {name}. The Stoic philosophers — Marcus Aurelius, Epictetus, Seneca — developed sophisticated frameworks for managing yourself. The core Stoic distinction: some things are in your control (your own thoughts, judgments, and actions) and some are not (external circumstances, other people's behavior, outcomes). The Stoic practice directs effort and attention toward what is within your control and cultivates equanimity about what is not. Stoic self-mastery includes managing emotional responses — not suppressing them, but navigating them without being controlled by them. Marcus Aurelius's "Meditations," written as personal notes to himself while serving as Roman Emperor, is one of the primary surviving texts of the tradition and is remarkably readable today. Epictetus's "Enchiridion" is even more condensed. The text identifies Stoic philosophy as one of the historical antecedents of what is now called self-leadership. The tradition has been influential from ancient Rome through contemporary leadership frameworks, reappearing across centuries whenever serious thinkers have addressed how to manage yourself well in difficult circumstances.`,
            },
            {
              word: `identity and habits`,
              definition: `Finding from James Clear's "Atomic Habits" (2018) synthesizing research on habit formation: identity and habits reinforce each other. The most effective habit changes come from identity-based habit building — thinking of yourself as a certain kind of person and then taking actions consistent with that identity. Small habit changes compound dramatically over time. The relationship between identity and habits means that self-leadership operates partly through how you think of yourself, not only through specific practices.`,
              audioPrompt: `Identity and habits is a finding from James Clear's 2018 book "Atomic Habits," identified in the lesson as part of the contemporary research on self-leadership, {name}. Clear synthesizes research showing that small habit changes compound dramatically over time — a one percent daily improvement compounds to roughly 37 times better over a year, while a one percent daily decline compounds to nearly nothing. More importantly for self-leadership: identity and habits reinforce each other. The most effective approach to habit change is identity-based rather than outcome-based. Instead of "I want to exercise more," the identity-based version is "I am someone who exercises." Each time you act consistently with that identity, you reinforce it; the reinforced identity makes the next consistent action more likely. The relationship runs both ways: your habits shape your identity as much as your identity shapes your habits. This has direct implications for self-leadership: leading yourself well isn't only about specific practices you execute. It's also about how you think of yourself — the identity you're building — because identity and practice reinforce each other over time. The lesson's point about self-leadership being a cluster of capacities that develop together reflects this: identity, habits, and practice are not separate.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Self-Mastery As Foundation`,
          paragraphs: [
            `The first position: self-leadership comes first, leading others comes second. You can't lead others well without developing the underlying capacities first: discipline, values clarity, self-knowledge, emotional regulation, integrity. Trying to lead others before doing the inner work usually produces leaders who project their own unaddressed issues onto those they lead, who lack the substance to actually contribute, or who burn out under pressures they hadn't built capacity to handle.`,
            `The case has real strength. Many of the worst leaders in business, politics, religion, and family contexts had visible inner instabilities that they brought into their leadership: untreated narcissism, unaddressed grief or trauma, lack of values clarity that allowed corruption, emotional dysregulation that damaged people around them. The pattern is recurring: external leadership amplifies whatever's inside. If what's inside isn't healthy, the amplification harms others.`,
            `Defenders include Stephen Covey's "private victory before public victory" framing, much of Stoic philosophy (which emphasized self-mastery as the foundation of effective external action), classical philosophical traditions that treated personal development as ethical foundation, religious traditions that emphasized inner work before service, contemporary leadership frameworks that include explicit self-development components (Bill George's "True North," Daniel Goleman's emotional intelligence work).`,
            `The position recognizes specific failure modes that come from trying to lead others without sufficient inner work. The leader who lacks emotional regulation lashes out at followers under stress. The leader who lacks values clarity makes decisions that betray things they later realize they should have protected. The leader who lacks self-knowledge projects their own issues onto others ("everyone is too sensitive" often comes from leaders who haven't examined their own insensitivity). The leader who lacks discipline can't sustain the work that real leadership requires.`,
            `The framework matches research on what distinguishes effective leaders over time. Bill George's "True North" (2007) studied 125 leaders and found that authentic leadership built on self-knowledge and values clarity produced more durable effectiveness than alternatives. Daniel Goleman's emotional intelligence research consistently finds self-awareness and self-regulation as foundational to leadership capability.`,
            `The limits. The framework can become a way of avoiding leadership while pursuing endless self-improvement. "I'm not ready to lead because I haven't fully worked on myself" can be a real recognition or can be a sophisticated procrastination. Some self-development happens through leadership rather than before it; you learn things by leading that you couldn't have learned through internal work alone. The position works best as "develop yourself substantially before AND as you lead others" rather than as "fully complete inner work before any external leadership."`,
          ],
          image: `/voyager-assets/social-leadership/l18-s2-foundation.webp`,
          imageCaption: `Position 1: self-mastery as foundation. Covey, Stoic tradition, Bill George's "True North," Goleman's emotional intelligence research.`,
          vocab: [
            {
              word: `victory covey`,
              definition: `Concept from Stephen Covey's "7 Habits of Highly Effective People" (1989). First three habits (be proactive, begin with end in mind, put first things first) constitute "private victory", leading yourself successfully. Habits 4-6 constitute "public victory", leading effectively with others. Covey's claim: you have to win the private victory before you can win the public victory. Captures the "self-mastery as foundation" framing in accessible form.`,
              audioPrompt: `Private victory before public victory is a concept from Stephen Covey's 1989 book "The 7 Habits of Highly Effective People," {name}. Covey divided his seven habits into categories. The first three habits constitute "private victory", leading yourself successfully. Be proactive means taking responsibility for your responses to circumstances rather than just reacting. Begin with the end in mind means having clarity about what you're building toward in your life. Put first things first means managing what gets your time and attention so important things happen rather than just urgent things. Habits four through six constitute "public victory", leading effectively with others. Think win-win, seek first to understand then to be understood, synergize. Covey's claim: you have to win the private victory before you can win the public victory. You can't lead others well without leading yourself well first. The framing captures the self-mastery-as-foundation position in accessible form and has been influential across leadership development since the book's publication.`,
            },
            {
              word: `emotional regulation`,
              definition: `Capacity to navigate your emotional responses without being controlled by them — part of self-mastery as foundation. Different from suppressing emotions. Leaders who lack emotional regulation lash out at followers under stress, make decisions driven by unprocessed emotional states, or become emotionally dysregulated in ways that damage people around them. Daniel Goleman's emotional intelligence research consistently identifies self-awareness and self-regulation as foundational to leadership capability.`,
              audioPrompt: `Emotional regulation is a core component of self-mastery as foundation, identified in the lesson, {name}. It means the capacity to navigate your emotional responses without being controlled by them. Importantly, the text distinguishes emotional regulation from emotional suppression. The goal is not to stop feeling things, but to process emotions rather than be carried away by them — to feel the anger or fear or disappointment, and then act from your values rather than from the raw emotional state. Leaders who lack emotional regulation produce specific, predictable failure patterns. They lash out at followers under stress. They make decisions driven by unprocessed emotional states — fear producing excessive caution, anger producing disproportionate responses, anxiety driving premature action. Their emotional dysregulation damages the people around them even when they're unaware of it. Daniel Goleman's emotional intelligence research, which the text cites as one of the defenders of the self-mastery-as-foundation position, consistently finds self-awareness and self-regulation as foundational to leadership capability. The self-regulation component specifically — the ability to manage impulses and emotions so they serve rather than control your decisions — is one of the most consistent predictors of effective leadership across research on the topic.`,
            },
            {
              word: `leadership amplifies`,
              definition: `Pattern identified in the lesson: external leadership amplifies whatever's inside the leader. If the underlying character is healthy — developed values, emotional regulation, integrity, self-knowledge — leadership amplifies those qualities and produces good outcomes. If the underlying character has significant unaddressed issues — narcissism, trauma, values confusion, emotional dysregulation — leadership amplifies those as well, often harming the people being led. One of the strongest arguments for the self-mastery-as-foundation position.`,
              audioPrompt: `Leadership amplifies is the pattern the text identifies as one of the strongest arguments for the self-mastery-as-foundation position, {name}. External leadership amplifies whatever's inside the leader. The text states this directly: many of the worst leaders in business, politics, religion, and family contexts had visible inner instabilities that they brought into their leadership — untreated narcissism, unaddressed grief or trauma, lack of values clarity that allowed corruption, emotional dysregulation that damaged people around them. The pattern is recurring. Leadership does not fix underlying issues. It amplifies them, gives them more scope to operate, and affects more people. A person with untreated narcissism who leads a team of three affects three people with their narcissism; the same person leading an organization of three thousand affects thousands. The amplification dynamic is why the text connects it to the self-mastery-as-foundation position: if leadership amplifies what's inside, then the quality of what's inside matters enormously before you expose others to its amplified form. The implication is not that leaders must be perfect before they lead — the text acknowledges that some development happens through leadership. It's that significant unaddressed inner instabilities are worth addressing before taking on leadership that will amplify them.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Lead Through Being (Self And Other Aren't Separate)`,
          paragraphs: [
            `The second position: the distinction between leading yourself and leading others is artificial. Who you ARE (your character, your behavior, your values made visible through action) is what you lead, regardless of position. You don't first complete inner work and then begin leading others; you're always doing both simultaneously because what people respond to is who you actually are, not what you say about leadership.`,
            `The case has real strength. People follow people, not positions. The leader who's developing visibly (working on themselves while leading others, acknowledging limits, growing through situations) often leads more effectively than the leader who claims to have done all the inner work in advance. The honesty about being a work-in-progress models the development others need. The pretending-to-be-finished often produces brittle leadership that breaks when reality reveals the gaps.`,
            `Defenders include parts of authentic leadership literature, much of religious leadership tradition (Buddhist, Christian, Jewish traditions all include framings where the leader's becoming is itself the leadership), contemporary work on "leading through example" (which emphasizes that example IS leadership), Mahatma Gandhi's principle of being the change you wish to see, much of community organizing tradition that emphasized leaders as part of the community they served rather than separate from it.`,
            `The position recognizes that leadership and self-development are recursive. You can't fully separate the question "how do I become a better person" from "how do I lead others well" because much of what makes you a better person is shaped by the situations you find yourself in including leadership situations. You can't fully prepare for leadership through internal work alone because leadership reveals things about you that internal work doesn't surface. The two grow together.`,
            `One important pattern from this framing. The most influential leaders across many traditions weren't people who'd completed their self-development before they led; they were people who led WHILE developing visibly. Mahatma Gandhi, Martin Luther King Jr., many religious figures, many community organizers led from where they were while continuing to develop. Their visible development was part of what made the leadership powerful: it modeled the kind of becoming they were calling others into.`,
            `The framework also addresses the "what about people with unaddressed issues" objection. Yes, some people shouldn't be leading until they've done significant inner work. But for most people in most situations, the question isn't "have I completed myself" but "am I genuinely engaged in becoming." Leaders genuinely engaged in their own becoming often lead more effectively than leaders who've stopped growing because they think they've arrived.`,
            `The limits. The position can be used to justify leading from real dysfunction by reframing the dysfunction as "growth opportunity." Some people genuinely shouldn't be leading until they've addressed specific issues. The position also can underweight specific preparation: you don't need to be perfect, but you do need to have built some specific capabilities before specific leadership roles. Pure "lead from where you are" without acknowledgment of preparation can produce harm.`,
          ],
          image: `/voyager-assets/social-leadership/l18-s3-being.webp`,
          imageCaption: `Position 2: lead through being. Who you ARE is what you lead. Authentic leadership, religious traditions, Gandhi's "be the change."`,
          vocab: [
            {
              word: `selfdevelopment leadership`,
              definition: `Framing where self-development and leading others can't be fully separated because they shape each other. You can't complete self-development in isolation and then begin leadership; you don't fully prepare for leadership through internal work alone because leadership reveals what internal work doesn't. The two grow together recursively. Captures the "lead through being" position's core insight.`,
              audioPrompt: `Recursive self-development and leadership is a framing where self-development and leading others can't be fully separated because they shape each other, {name}. You can't fully complete self-development in isolation and then begin leadership. Much of what makes you a better person is shaped by the situations you find yourself in, including leadership situations. You can't fully prepare for leadership through internal work alone because leadership reveals things about you that internal work doesn't surface. The two grow together recursively. Each leadership situation produces self-development if you engage with it honestly; the self-development you do shows up in how you lead. The most influential leaders across many traditions weren't people who'd completed self-development before leading; they were people who led WHILE developing visibly. Their visible development was often part of what made the leadership powerful — it modeled the kind of becoming they were calling others into. The framing captures the "lead through being" position's core insight: who you ARE is what you lead, and what you ARE is continuously becoming.`,
            },
            {
              word: `be the change`,
              definition: `Principle associated with Mahatma Gandhi: to change the world around you, you must first embody the change yourself. Connected to the "lead through being" position. Who you ARE is the primary form of leadership you exercise. People who call others to a different way of being without embodying it themselves are inconsistent in ways that undermine the message. Leaders whose being matches their calling model what they're asking others to become.`,
              audioPrompt: `Be the change is the principle associated with Mahatma Gandhi that captures a core insight of the "lead through being" position, {name}. The full quotation often attributed to Gandhi is: "Be the change you wish to see in the world." The text uses it as one of the defenders of the position that the distinction between leading yourself and leading others is artificial. Who you ARE is the primary leadership you exercise. People who call others to a different way of being without embodying it themselves are inconsistent in ways that followers feel and that undermine the message. Leaders whose being matches their calling — whose character, behavior, and values visibly reflect what they're asking others to become — don't have to convince followers through argument; they demonstrate through example. Gandhi's own life illustrated this: his personal practices of nonviolence, simplicity, and willingness to bear suffering were not separate from his leadership of India's independence movement. They were the leadership. The text notes that the most influential leaders across many traditions led while developing visibly, and that their visible development was often part of what made the leadership powerful: it modeled the kind of becoming they were calling others into.`,
            },
            {
              word: `authentic leadership`,
              definition: `Contemporary leadership tradition — part of the defenders of the "lead through being" position — that emphasizes leadership grounded in who the leader genuinely is, including values, purpose, and self-knowledge. Bill George's "True North" (2007) studied 125 leaders and found authentic leadership built on self-knowledge and values clarity produced more durable effectiveness than alternatives. Contrasted with "scripted" or "performed" leadership that presents a curated image rather than genuine self.`,
              audioPrompt: `Authentic leadership is a contemporary leadership tradition identified in the lesson as part of the defenders of the "lead through being" position, {name}. The tradition emphasizes leadership grounded in who the leader genuinely is — their actual values, their genuine purpose, their real self-knowledge — rather than in a curated image of what a leader should look like. Bill George's "True North" (2007), which studied 125 leaders, found that authentic leadership built on self-knowledge and values clarity produced more durable effectiveness than alternatives. The "True North" metaphor: just as a compass always points to true north, effective leaders have an inner compass — their genuine values and purpose — that they return to in difficult decisions. The text cites George's research as one of the defenders of the self-mastery-as-foundation position because the authentic leadership it describes requires prior self-knowledge and values clarity before leadership can be genuine rather than performed. But it also connects to the "lead through being" framing: authentic leadership isn't about having completed inner work, it's about the ongoing commitment to genuine self rather than performed competence. The combination of the two frameworks — substantial self-development AND leading genuinely from where you are — is what George's research describes as effective.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Service-Oriented Self-Development`,
          paragraphs: [
            `The third position: self-development is real and important, but it's means, not end. You develop yourself BECAUSE you need to serve others well, not for self-actualization or personal flourishing alone. The motivation matters because it shapes what self-development you pursue and how. Service-orientation directs development toward what you'll need for actual contribution; self-orientation often produces development that feels meaningful but doesn't translate into service to others.`,
            `The case has real strength. Pure self-development without external purpose can become an end in itself, divorced from any contribution to others. The "self-help" industry produces enormous amounts of content focused on individual flourishing that often doesn't produce measurable improvements in either the individuals consuming it or the broader world they're part of. Service-oriented self-development asks the prior question: what am I developing FOR? The answer shapes everything that follows.`,
            `Defenders include religious traditions across many faiths (which typically frame personal development as preparation for service), Confucian self-cultivation tradition (which always understood self-cultivation as preparation for service to family, community, and society), Stoic philosophy (which framed self-mastery as enabling participation in the broader community), much of professional ethics tradition (which treats personal development as preparation for the practice of medicine, law, teaching, leadership), and contemporary servant leadership tradition (Greenleaf, covered in Lesson 1).`,
            `The framework matches what produces sustained development. People who develop themselves toward something external (service to family, contribution to community, professional mastery, building something) often develop more deeply and sustainably than people who develop for self-actualization. The external purpose provides direction, motivation through hard parts, and feedback (you can see whether your development is actually translating into contribution).`,
            `Confucian self-cultivation provides a particularly clear version. The tradition treated self-development as continuous and as having a specific purpose: becoming the kind of person who could fulfill specific roles well (family member, citizen, professional, leader). Self-cultivation without role-purpose was incoherent in the tradition. The purpose gave the development direction and made it answerable to specific questions: am I becoming the kind of person who can actually do what's needed in this role?`,
            `The position also addresses a specific failure mode. People who develop themselves for self-actualization sometimes discover that the development hasn't produced the flourishing they expected because they were missing the external purpose that makes development meaningful. The "I've done all this work on myself and I'm still not fulfilled" pattern often reflects missing service-orientation rather than insufficient self-work.`,
            `The limits. The position can be used to justify ignoring your own needs in service of others, producing burnout and resentment rather than sustainable contribution. Some self-development happens for reasons that aren't directly about service (developing as an artist may serve an external purpose, but the development is also genuinely for the person doing it). Pure service-orientation without acknowledgment of your own legitimate flourishing can produce its own dysfunctions. The position works best as "self-development primarily oriented toward service but acknowledging your own legitimate flourishing as part of what makes sustainable service possible."`,
          ],
          image: `/voyager-assets/social-leadership/l18-s4-service.webp`,
          imageCaption: `Position 3: self-development as means to service. Confucian self-cultivation, religious traditions, Greenleaf's servant leadership, professional ethics.`,
          vocab: [
            {
              word: `self-cultivation`,
              definition: `Tradition of continuous personal development as foundation for fulfilling roles in family, community, and society. Foundational in Confucian ethics: never separated from social roles and contributions. Treats self-development as having a specific purpose (becoming the kind of person who can fulfill specific roles well), giving the development direction and accountability. Influential across East Asian thought and contemporary leadership frameworks that include service orientation.`,
              audioPrompt: `Self-cultivation is a tradition of continuous personal development as foundation for fulfilling roles in family, community, and society, {name}. Foundational in Confucian ethics. The tradition treated self-development as continuous, occurring across an entire life, and as having a specific purpose: becoming the kind of person who could fulfill specific roles well. Family member. Citizen. Professional. Leader. Self-cultivation without role-purpose was incoherent in the tradition. The purpose gave the development direction and made it answerable to specific questions: am I becoming the kind of person who can actually do what's needed in this role? Different from pure self-actualization or self-improvement frameworks that focus on individual flourishing without external purpose. Service-oriented framing means you develop yourself BECAUSE you need to serve others well. Has been influential across East Asian thought for over two thousand years. Has parallels in many religious traditions and contemporary leadership frameworks that include explicit service orientation. The framing captures the third position's core insight: self-development is real and important, but as means rather than end.`,
            },
            {
              word: `servant leadership`,
              definition: `Leadership tradition developed by Robert Greenleaf, covered in Lesson 1. The servant leader leads primarily to serve followers rather than to exercise power or accomplish personal goals. Service-orientation is the defining motive. Connected to the service-oriented self-development position: development is means to service, not end. Greenleaf argued that the best leaders are those who first ask "how can I serve?" rather than "how can I lead?" Self-development in the servant leadership tradition is explicitly oriented toward serving those you lead.`,
              audioPrompt: `Servant leadership is a tradition developed by Robert Greenleaf, previously covered in this lesson band and identified in this lesson as one of the defenders of the service-oriented self-development position, {name}. Greenleaf's core argument: the best leaders are those for whom leadership is primarily a vehicle for service rather than for power, achievement, or personal advancement. The servant leader asks first "how can I serve?" and then exercises leadership in service of that purpose. The connection to service-oriented self-development is direct: in the servant leadership tradition, self-development is explicitly means to service. You develop skills, capabilities, emotional regulation, and character BECAUSE you need to serve those you lead effectively. Development that doesn't translate into better service is incomplete development in this framework. The tradition differs from purely altruistic self-denial: effective service requires real capability, and developing that capability is a genuine obligation. The servant leader who doesn't develop relevant skills isn't being appropriately humble; they're failing those who depend on them. Self-development serves others; the service orients and directs the development.`,
            },
            {
              word: `development without external purpose`,
              definition: `Failure mode identified in the service-oriented self-development position: self-development pursued for individual flourishing without service orientation often produces development that feels meaningful but doesn't translate into actual contribution. The "I've done all this work on myself and I'm still not fulfilled" pattern often reflects missing service-orientation rather than insufficient self-work. External purpose provides direction, motivation through hard parts, and feedback on whether development is actually translating into contribution.`,
              audioPrompt: `Development without external purpose is a failure mode identified in the service-oriented self-development position, {name}. The text states it directly: pure self-development without external purpose can become an end in itself, divorced from any contribution to others. The "self-help" industry produces enormous amounts of content focused on individual flourishing that often doesn't produce measurable improvements in either the individuals consuming it or the broader world. Why does this happen? Development without external purpose lacks direction, motivation through the hard parts, and feedback. You can consume endless content about personal development without ever having the concrete question of whether your development is translating into anything useful. The service-oriented position asks the prior question: what am I developing FOR? The answer shapes everything that follows. It determines which capabilities to develop, provides motivation through difficulty (you're developing not for yourself but for something larger), and provides feedback (you can observe whether your development is actually making you more effective in service of the external purpose you care about). The text identifies a specific failure mode: the "I've done all this self-work and I'm still not fulfilled" pattern that often reflects missing service-orientation rather than insufficient self-work. The missing ingredient is usually purpose.`,
            },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature self-leadership blends elements. Substantial self-development before significant leadership (position 1), continued development through leadership (position 2), service-orientation that gives development purpose (position 3). The forcing function of the argument is committing to a primary framing.`,
            `One framing to consider. Each position implies a different practical default. Position 1: invest substantially in self-development before taking on significant leadership; the inner work is foundational. Position 2: engage in leadership where you are while continuing to develop visibly; who you're becoming is what you're leading. Position 3: develop yourself in service of specific external purposes you're already engaged with; let the service-orientation direct the development.`,
            `Another framing. The right position may depend on what kind of leadership you're considering. Some forms of leadership (formal positions with significant power, situations involving vulnerable people) probably do require substantial prior self-development. Other forms (peer leadership, friend group influence, family roles you're already in) probably work better with concurrent development. Service-orientation provides direction in either case.`,
            `One last framing. You're 12. Whatever position you take, the self-development you do over the next 6-10 years will significantly shape what you become and what you can offer. Most adolescents drift through their teenage years without explicit self-leadership; the ones who develop deliberately produce significantly different lives. The position you choose shapes how you'll approach that decade.`,
          ],
          image: `/voyager-assets/social-leadership/l18-s5-before.webp`,
          imageCaption: `Three positions, three defaults for development. The decade ahead will be shaped by which you choose.`,
          vocab: [
            {
              word: `deliberate self-leadership`,
              definition: `Distinction between people who consciously direct their own development and people who drift through life shaped by whatever circumstances offer. Deliberate self-leadership involves explicit choices about values, habits, capabilities to develop, time and attention allocation. Drift is being moved by whatever's loudest or most immediately rewarding. Most adolescents drift; the ones who develop deliberately produce significantly different lives. The choice compounds dramatically over time.`,
              audioPrompt: `Deliberate self-leadership versus drift is a distinction between people who consciously direct their own development and people who drift through life shaped by whatever circumstances offer, {name}. Deliberate self-leadership involves explicit choices about values, habits, capabilities to develop, time and attention allocation. You're choosing where to put effort based on what you actually care about and want to become. Drift is being moved by whatever's loudest, most pressing, or most immediately rewarding rather than by what you actually care about. Drift isn't necessarily lazy. Many drifting people work hard at whatever's in front of them. They just don't choose what's in front of them; circumstances do. Most adolescents drift through their teenage years without explicit self-leadership; the ones who develop deliberately produce significantly different lives. The choice compounds dramatically over time because each year of deliberate development builds capability and direction that each year of drift doesn't. By 25, the difference between deliberate self-leadership and drift starting at 12 is enormous.`,
            },
            {
              word: `self-leadership position default`,
              definition: `The practical default implied by each of the three positions. Position 1 (self-mastery as foundation): invest substantially in self-development before taking on significant leadership. Position 2 (lead through being): engage in leadership where you are while continuing to develop visibly. Position 3 (service-oriented): develop yourself in service of specific external purposes already engaged with; let service-orientation direct the development. Making the default explicit is the first step toward choosing it deliberately.`,
              audioPrompt: `Self-leadership position default refers to the practical default each of the three positions implies for how you approach your own development, {name}. The text makes these explicit. Position one, self-mastery as foundation: the practical default is to invest substantially in self-development before taking on significant leadership. Build the underlying capacities first; the inner work is foundational to what follows. Position two, lead through being: the practical default is to engage in leadership where you are right now while continuing to develop visibly. You don't wait to be ready; you engage while becoming. Position three, service-oriented self-development: the practical default is to develop yourself in service of specific external purposes you're already engaged with and to let that service-orientation direct what you develop toward. Most people have an implicit default — they default to one of these patterns without having explicitly chosen it. Making the default explicit is the first step toward choosing it deliberately. For twelve-year-olds, the choice matters because the next six to ten years of development will significantly shape what you become, and which position you default to shapes how you approach those years. The positions aren't mutually exclusive in practice; most mature self-leadership blends elements of all three.`,
            },
            {
              word: `right type of leadership for self-development stage`,
              definition: `Insight from the lesson: the right relationship between self-development and leadership may depend on the type of leadership. Some forms (formal positions with significant power, situations involving vulnerable people) probably require substantial prior self-development. Other forms (peer leadership, friend group influence, family roles already occupied) probably work better with concurrent development. Service-orientation provides direction in either case. The type and stakes of the leadership influence which self-development position applies.`,
              audioPrompt: `Right type of leadership for self-development stage is an insight from the magazine section that the appropriate position may depend on what kind of leadership you're considering, {name}. The text identifies this explicitly: the right position may depend on what kind of leadership you're considering. Some forms of leadership — formal positions with significant power, situations involving vulnerable people — probably do require substantial prior self-development. The amplification dynamic is most dangerous in those situations: high-stakes, high-power leadership with vulnerable people amplifies inner instabilities most harmfully. Other forms of leadership — peer leadership, influence in friend groups, family roles you're already occupying — probably work better with concurrent development. The stakes are lower, the influence more bounded, and the feedback more immediate and recoverable. Service-orientation provides direction in either case. Whether you're in the build-first mode or the lead-concurrently mode, asking what development is FOR keeps the development oriented toward contribution rather than self-actualization. The practical implication: calibrate your self-development-to-leadership approach to the type and stakes of the leadership, not to a single default across all situations.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l18-argument-builder`,
          type: `argument-builder`,
          headline: `How Should Self-Leadership Relate To Leading Others?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious thinkers across traditions defend each.`,
          positions: [
            {
              id: `self-mastery-foundation`,
              label: `Self-mastery as foundation: develop yourself substantially before taking on significant leadership`,
              summary: `You can't lead others well without first developing the underlying capacities: discipline, values clarity, self-knowledge, emotional regulation, integrity. Trying to lead before doing inner work usually produces leaders who project unaddressed issues, lack substance, or burn out under pressure. Defenders include Stephen Covey ("private victory before public victory"), Stoic philosophy, Bill George's "True North," Goleman's emotional intelligence research, classical philosophical and religious traditions. Strength: addresses real failure mode of unprepared leaders; matches research on what distinguishes effective leaders over time; produces sustainable rather than fragile leadership. Limit: can become endless self-improvement without leadership; some development happens through leadership; risk of "I'm not ready" procrastination.`,
            },
            {
              id: `lead-through-being`,
              label: `Lead through being: leading yourself and leading others aren't separate; who you ARE is what you lead`,
              summary: `The distinction between leading yourself and leading others is artificial. People follow people, not positions. Who you ARE (character, behavior, values made visible through action) is what you lead regardless of position. Leaders developing visibly often lead more effectively than leaders pretending to be finished. Defenders include authentic leadership literature, religious traditions framing leader's becoming as the leadership, Gandhi's "be the change," community organizing tradition emphasizing leaders as part of community served. Strength: recognizes recursive relationship between self-development and leadership; models becoming for others; produces honest engagement rather than performed completion. Limit: can justify leading from real dysfunction by reframing as "growth opportunity"; underweights specific preparation needed for specific roles.`,
            },
            {
              id: `service-oriented`,
              label: `Service-oriented self-development: develop yourself BECAUSE you need to serve others well: development is means, not end`,
              summary: `Self-development is real and important, but as means not end. The motivation matters: service-orientation directs development toward what you'll need for actual contribution; self-orientation often produces development that feels meaningful but doesn't translate into service. Defenders include religious traditions across faiths (development as preparation for service), Confucian self-cultivation tradition, Stoic philosophy, professional ethics tradition (development as preparation for medicine, law, teaching, leadership), Greenleaf's servant leadership. Strength: provides direction, motivation, and feedback for development; matches what produces sustained development; addresses the "I've done all this self-work and still not fulfilled" failure mode. Limit: can justify ignoring your own legitimate needs, producing burnout; some self-development isn't directly about service.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Stephen Covey's "7 Habits of Highly Effective People" (1989) explicitly frames "private victory" (first three habits (be proactive, begin with end in mind, put first things first) as preceding "public victory" (habits 4-6 about leading with others). The framing has been influential across leadership development since.`,
              source: `Covey 1989 and decades of subsequent application`,
            },
            {
              id: `e2`,
              text: `Many worst leaders in business, politics, religion, and family contexts had visible inner instabilities they brought into their leadership: untreated narcissism, unaddressed trauma, lack of values clarity allowing corruption, emotional dysregulation. The pattern is recurring: external leadership amplifies whatever's inside.`,
              source: `Leadership failure analysis; multiple sources`,
            },
            {
              id: `e3`,
              text: `Bill George's "True North" (2007) studied 125 leaders and found that authentic leadership built on self-knowledge and values clarity produced more durable effectiveness than alternatives. The framework matches what distinguishes effective leaders over time.`,
              source: `George 2007 and subsequent authentic leadership research`,
            },
            {
              id: `e4`,
              text: `The most influential leaders across many traditions weren't people who'd completed self-development before they led; they were people who led WHILE developing visibly. Mahatma Gandhi, Martin Luther King Jr., many religious figures led from where they were while continuing to develop.`,
              source: `Historical analysis of influential leaders across many traditions`,
            },
            {
              id: `e5`,
              text: `Pure self-development without external purpose can become an end in itself, divorced from any contribution to others. The "self-help" industry produces enormous content focused on individual flourishing that often doesn't produce measurable improvement in individuals or the broader world.`,
              source: `Behavioral science and self-help industry analysis`,
            },
            {
              id: `e6`,
              text: `Confucian self-cultivation tradition has treated self-development as continuous and as having a specific purpose: becoming the kind of person who could fulfill specific roles well. Self-cultivation without role-purpose was incoherent in the tradition. The purpose gave the development direction.`,
              source: `Confucian ethics tradition spanning 2500+ years`,
            },
            {
              id: `e7`,
              text: `Adam Grant's research on givers (in "Give and Take," 2013) shows that people oriented around contribution to others often outperform people oriented around self-advancement across many career-long metrics. Service orientation correlates with sustained effectiveness.`,
              source: `Grant 2013 and subsequent research`,
            },
            {
              id: `e8`,
              text: `Most mature self-leadership blends elements: substantial self-development before significant leadership (position 1), continued development through leadership (position 2), service-orientation that gives development purpose (position 3). Pure versions of any single position rarely match practice.`,
              source: `Contemporary leadership development synthesis`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume self-leadership is something you can deliberately direct through framework-application. But maybe what actually shapes development is not your explicit choices but the situations you happen to be in, the people you happen to know, the experiences that find you. People who think they're deliberately developing themselves are often retrofitting narratives onto development that was actually driven by external circumstances. If that's right, the entire 'pick your self-development framework' approach might be missing the actual mechanism. The right move might be to focus on getting into situations where you'll be shaped well rather than to commit to any explicit framework. Why think deliberate self-leadership is even possible at the level the positions assume, when much of what shapes you happens outside your conscious choice?"`,
            promptInstruction: `In 3-4 sentences, respond. Is deliberate self-leadership real or is most development driven by circumstance? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "self-leadership"?`,
              options: [
                `Self-help`,
                `Practice of deliberately shaping your own behavior, character, and direction rather than being shaped by circumstances and impulse; includes managing time/attention, developing habits/skills, navigating emotional responses, making deliberate values choices; opposite is "drift" (being moved by whatever's loudest or most rewarding); foundational across traditions`,
                `Selfishness`,
                `Being independent`,
              ],
              correctIndex: 1,
              explanation: `Self-leadership shows up across many traditions (Stoic, Confucian, religious, contemporary research). What unites them: self-leadership is real, learnable, and consequential. Not a single skill but a cluster of related capacities that develop together over years.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is Covey's "private victory before public victory"?`,
              options: [
                `Game strategy`,
                `From "7 Habits of Highly Effective People" (1989): first three habits (be proactive, begin with end in mind, put first things first) constitute "private victory", leading yourself successfully; habits 4-6 constitute "public victory", leading effectively with others; claim is you have to win private victory before public victory`,
                `Sports concept`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `Captures the self-mastery-as-foundation position in accessible form. Has been influential across leadership development since the book's publication.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the "self-mastery as foundation" position argue?`,
              options: [
                `Be selfish first`,
                `Develop yourself substantially before significant leadership; can't lead others well without underlying capacities (discipline, values clarity, self-knowledge, emotional regulation, integrity); trying to lead before doing inner work usually produces leaders who project unaddressed issues, lack substance, or burn out; defenders include Covey, Stoic philosophy, George's "True North"`,
                `Be tough`,
                `Random position`,
              ],
              correctIndex: 1,
              explanation: `The position addresses a real failure mode of unprepared leaders. External leadership amplifies whatever's inside; if what's inside isn't healthy, amplification harms others. Limit: can become endless self-improvement without ever leading.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the "lead through being" position argue?`,
              options: [
                `Random claim`,
                `Distinction between leading yourself and leading others is artificial; who you ARE (character, behavior, values made visible through action) is what you lead regardless of position; leaders developing visibly often lead more effectively than leaders pretending to be finished; defenders include authentic leadership lit, Gandhi's "be the change," community organizing tradition`,
                `Lead by feelings`,
                `Be passive`,
              ],
              correctIndex: 1,
              explanation: `Recognizes recursive relationship between self-development and leadership: each shapes the other. Most influential leaders across traditions weren't people who'd completed self-development before they led; they led WHILE developing visibly. Their visible development was part of what made the leadership powerful.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "recursive self-development and leadership"?`,
              options: [
                `Repeated cycles`,
                `Framing where self-development and leading others can't be fully separated because they shape each other; you can't complete self-development in isolation then begin leadership; you don't fully prepare for leadership through internal work alone because leadership reveals what internal work doesn't; the two grow together recursively`,
                `Cyclical pattern`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Captures the "lead through being" position's core insight: who you ARE is what you lead, and what you ARE is continuously becoming. The most influential leaders led while developing visibly, modeling the kind of becoming they were calling others into.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the "service-oriented self-development" position argue?`,
              options: [
                `Serve others`,
                `Self-development is real and important but as means not end; develop yourself BECAUSE you need to serve others well; service-orientation directs development toward what you'll need for actual contribution; self-orientation often produces development that feels meaningful but doesn't translate into service; defenders include religious traditions, Confucian self-cultivation, Greenleaf's servant leadership`,
                `Random framing`,
                `Be selfless`,
              ],
              correctIndex: 1,
              explanation: `The position provides direction, motivation through hard parts, and feedback (you can see whether your development translates into contribution). Addresses "I've done all this self-work and still not fulfilled" failure mode that often reflects missing service-orientation rather than insufficient self-work.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "self-cultivation" in the Confucian tradition?`,
              options: [
                `Random term`,
                `Tradition of continuous personal development as foundation for fulfilling roles in family, community, society; never separated from social roles and contributions; treats self-development as having specific purpose (becoming the kind of person who can fulfill specific roles well); influential across East Asian thought for 2500+ years`,
                `Old practice`,
                `Eastern meditation`,
              ],
              correctIndex: 1,
              explanation: `The tradition treated self-development as continuous and as having a specific purpose. Self-cultivation without role-purpose was incoherent. The purpose gave the development direction and made it answerable to specific questions: am I becoming the kind of person who can actually do what's needed in this role?`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "deliberate self-leadership" vs "drift"?`,
              options: [
                `Same thing`,
                `Distinction between consciously directing your own development vs being shaped by whatever circumstances offer; deliberate involves explicit choices about values, habits, capabilities, time/attention allocation; drift is being moved by whatever's loudest or most immediately rewarding; most adolescents drift; ones who develop deliberately produce significantly different lives; compounds dramatically over time`,
                `Different speeds`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Drift isn't necessarily lazy; many drifting people work hard at whatever's in front of them. They just don't choose what's in front of them; circumstances do. By 25, the difference between deliberate self-leadership and drift starting at 12 is enormous.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three self-leadership positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders and real strengths/limits. Most mature self-leadership blends elements: substantial self-development before significant leadership (position 1), continued development through leadership (position 2), service-orientation that gives development purpose (position 3). The forcing function is committing to a primary framing.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I want to wait until I have my whole life figured out before I try to lead anything." Based on this lesson, what should you point out?`,
              options: [
                `"Good plan"`,
                `"That's close to a pure position 1 (self-mastery as foundation) and the position has real validity. But 'have my whole life figured out' is a procrastination disguised as preparation. Most leaders who 'wait to be ready' never lead because there's always more to develop. Position 2 (lead through being) and position 3 (service-oriented self-development) both suggest engaging with leadership where you are while continuing to develop. The most influential leaders across many traditions led while developing visibly — Gandhi, MLK, many community organizers were nowhere near 'figured out' when they led. The pattern: substantial self-development AND engagement with leadership opportunities at your current level. You don't need to be complete; you need to be genuinely engaged in your own development. Service-orientation also helps: develop yourself in service of specific things you're already involved in. The combination — develop seriously AND engage with leadership at your current level AND let service direct what you develop — works better than either pure preparation or pure jumping-in."`,
                `"You're not ready"`,
                `"Just lead"`,
              ],
              correctIndex: 1,
              explanation: `Real applied self-leadership literacy. Don't dismiss the friend's preparation instinct or push them into leadership they're not ready for. Help them see how the three positions actually combine: substantial preparation, concurrent engagement, and service-orientation. This is the kind of advice that produces both real preparation AND real leadership over time.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for self-leadership? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: are you currently engaged in deliberate self-leadership or drifting? What does the honest answer suggest you should do?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with sustained deliberate self-leadership over the next 70 years, what does that change about who you become and what you can offer?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific area of self-leadership you want to develop. Apply the three positions: how does each suggest approaching it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there limits to self-leadership? What about situations where circumstances genuinely constrain what's possible (poverty, illness, trauma)? How does the framework adapt?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Identify one person you know who clearly leads themselves well. What specifically do they do that produces that?` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The self-leadership framework you build now shapes the next 70 years. Two paths.`,
          familyActivity: {
            title: `The Family Self-Leadership Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions. Ask family members which position they default to. Most adults haven't articulated their self-leadership framework explicitly. The conversation often surfaces real differences within families: some default to position 1 (prepare before leading), some to position 2 (lead and develop simultaneously), some to position 3 (service-oriented). The conversation also often reveals which family members have been drifting vs developing deliberately.`,
          },
          projectOption: {
            title: `Read Covey, Stoic text, or a Confucian classic, 4-6 weeks (optional)`,
            duration: `4-6 weeks, ~30 minutes per session`,
            description: `Pick one: Stephen Covey's "7 Habits of Highly Effective People" (1989, accessible), Marcus Aurelius's "Meditations" (Stoic text, surprisingly accessible), or "The Analects" of Confucius (foundational text, also accessible). All produce durable self-leadership frameworks. Apply concepts during reading period. Write 1,500 words on what you learned and how you'll apply it.`,
            offerToParent: `Parent: opt your kid into this project. Reading real self-leadership classics at 12 is genuinely transformative.`,
          },
          identityQuestion: `If you become someone engaged in deliberate self-leadership across decades: developing capacities, navigating emotions, choosing values, building habits — what does that change about who you become by 30, 50, 70?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone engaged in deliberate self-leadership rather than drift.`,
            `A person whose self-development is oriented toward genuine service to others.`,
            `Someone who develops continuously while leading rather than waiting to be "ready."`,
          ],
          saveKey: `identity_responses_sl_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighteenth Social Leadership lesson done. You have three positions on self-leadership and its relationship to leading others (foundation, lead-through-being, service-oriented), know the major thinkers (Covey, Stoic and Confucian traditions, George, Greenleaf, contemporary research on habits and emotional agility), and can distinguish deliberate self-leadership from drift. You're at 90% of the band. Next time we sort scenarios about when to lead and when to follow. Investigation Game format. Two lessons remaining. Let's go. — Valor`,
          badge: `self-leader`,
          badgeName: `Self-Leader`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on self-leadership (foundation, being, service)`,
            `Knows Covey's "private victory before public victory" framing`,
            `Recognizes recursive relationship between self-development and leadership`,
            `Understands Confucian self-cultivation and its service orientation`,
            `Distinguishes deliberate self-leadership from drift across decades`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: When To Lead and When To Follow`,
            hook: `Sort 9 scenarios. Investigation Game.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L18 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
