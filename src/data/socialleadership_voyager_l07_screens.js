// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L07 — Persuasion vs Manipulation
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Applied Ethics, Social Psychology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (Cialdini's ethical framework / Konnikova on cons / viral "dark psychology")
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l07-v1";

const SOCIALLEADERSHIP_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-07`,
      title: `Persuasion vs Manipulation`,
      duration: 35,
      xpReward: 75,
      badge: `persuasion-literate`,
      badgeName: `Persuasion Literate`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, where's the line between persuasion and manipulation? Both involve trying to influence what someone else does or believes. Both use techniques that work on human psychology. Both can be done well or badly. But there's a real difference, and missing it produces both bad ethics (you become manipulative without realizing) and bad protection (you get manipulated without realizing). Today we work through three sources: Robert Cialdini's research on ethical influence, Maria Konnikova's journalism on how con artists operate, and viral "dark psychology" content selling manipulation as a life skill. The first two are serious work approaching the question from different angles; the third represents what's actually being marketed to your generation. By the end you'll be able to distinguish ethical persuasion from manipulation in any situation.`,
          headline: `Persuasion vs Manipulation`,
          subtitle: `Real line, real distinction. Both ethics and protection depend on seeing it.`,
          visual: `/voyager-assets/social-leadership/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Distinction (And Why It's Genuinely Hard)`,
          paragraphs: [
            `Persuasion and manipulation both involve trying to influence what someone else does or believes. Both use techniques that work on human psychology. Both can be effective. So what's actually different about them?`,
            `The cleanest distinction comes from applied ethics. Persuasion respects the other person's rationality: you present reasons, evidence, or considerations they can evaluate. They retain the capacity to disagree based on what you've shown them. Even if you're a skilled persuader using emotional appeals or framing techniques, you're operating within what they could endorse if they thought about it carefully. Manipulation bypasses or exploits their rationality: you use techniques designed to produce decisions they wouldn't make if they fully understood what you were doing. The person can't easily defend against it because they don't see what's being done to them.`,
            `Several specific markers help distinguish them in practice. First: transparency. If the techniques you're using would be okay to explain to the person ("I'm sharing this evidence because I want to convince you of X"), it's probably persuasion. If you'd hide your techniques ("I'm using social proof and scarcity pressure because I know you'll react to them"), it's probably manipulation. Second: capacity for rational response. Persuasion gives the person room to disagree based on evaluating what you've shown them. Manipulation produces specific responses regardless of their rational evaluation. Third: serving whose interests. Persuasion can serve both your interests and theirs; manipulation typically prioritizes your interests at their cost.`,
            `Why the distinction is genuinely hard. The same techniques can be used both ways. Cialdini's six principles (reciprocity, commitment/consistency, social proof, liking, authority, scarcity — covered in L02) all describe how human psychology actually works. Using them ethically means deploying them while respecting the other person's rationality and interests. Using them manipulatively means deploying them to bypass or exploit rationality. The techniques themselves are morally neutral; the ethics depend on how you're using them and what you're seeking.`,
            `The line also moves based on context. A salesperson disclosing limited supply is one thing; manufacturing fake scarcity is another. A teacher sharing data about how students who study consistently succeed is one thing; using fear of failure to push a student into a course they don't want is another. Real ethics requires judgment about specific situations, not blanket rules.`,
          ],
          image: `/voyager-assets/social-leadership/l07-s1-distinction.webp`,
          imageCaption: `Persuasion vs manipulation: respecting vs bypassing rationality. Same techniques can be used either way. Transparency, capacity for response, whose interests.`,
          vocab: [
            {
              word: `rationality-respecting vs rationality-bypassing`,
              definition: `Core distinction between persuasion and manipulation. Persuasion respects the other person's rationality: you present reasons, evidence, or considerations they can evaluate and respond to. Manipulation bypasses or exploits their rationality: you use techniques designed to produce decisions they wouldn't make if they fully understood what was happening. Same techniques can be either, depending on whether the person retains genuine capacity to disagree.`,
              audioPrompt: `Rationality-respecting versus rationality-bypassing is the core distinction between persuasion and manipulation, {name}. Persuasion respects the other person's rationality. You present reasons, evidence, or considerations they can evaluate and respond to. Even if you're a skilled persuader using emotional appeals or framing techniques, you're operating within what they could endorse if they thought about it carefully. They retain the capacity to disagree based on what you've shown them. Manipulation bypasses or exploits their rationality. You use techniques designed to produce specific decisions they wouldn't make if they fully understood what you were doing. The person can't easily defend against it because they don't see what's being done to them. The same techniques can be used either way. Social proof can be ethical (showing actual evidence others have found something valuable) or manipulative (manufactured fake popularity). The ethics depend on whether you're respecting or bypassing their rationality, not on the techniques themselves.`,
            },
            {
              word: `transparency test`,
              definition: `One of three practical markers for distinguishing persuasion from manipulation. If the techniques you are using would be acceptable to explain to the person — "I'm sharing this evidence because I want to convince you of X" — it is probably persuasion. If you would hide your techniques because explaining them would break their effect, it is probably manipulation. Willingness to be transparent is a reliable signal of ethical intent.`,
              audioPrompt: `The transparency test is one of three practical markers identified in the text for distinguishing persuasion from manipulation, {name}. The test asks: would your techniques be acceptable to explain to the person you are trying to influence? If you could say "I'm sharing this evidence because I want to convince you of X" and that would be fine — the persuasion can survive the disclosure — it is probably persuasion. If you would hide your techniques because explaining them would break their effect or expose what you were doing, it is probably manipulation. The logic is direct. Ethical persuasion works by giving the other person information or reasons they can evaluate. Explaining that you are doing this doesn't undermine the persuasion; if the reasons are good, they still stand. Manipulation works by exploiting psychological responses the person wouldn't endorse if they understood them. Explaining that you are doing this would typically break the effect entirely, which is why manipulators don't explain. The transparency test is useful as a quick check on your own influence behavior: would you be comfortable explaining what you are doing and why to the person you are doing it to?`,
            },
            {
              word: `framing techniques`,
              definition: `Influence methods that shape how information is presented without changing its factual content. Includes word choice, emphasis, sequencing, emotional context, and anchoring. Can be used ethically (making accurate information clearer and more accessible) or manipulatively (shaping perception in ways the person wouldn't endorse if they understood what was happening). Morally neutral as techniques; ethics depend on application.`,
              audioPrompt: `Framing techniques are influence methods that shape how information is presented without necessarily changing its factual content, {name}. They include word choice, emphasis, sequencing, emotional context, and anchoring. The same facts can be framed in ways that produce very different responses — "90% survival rate" versus "10% death rate" describes the same statistic but produces different reactions. Framing is one of the clearest examples of how the same technique can be used either ethically or manipulatively. Used ethically, framing means presenting accurate information in ways that make it clearer and more accessible — helping the other person understand and evaluate what you are sharing. Used manipulatively, framing means shaping perception in ways the person wouldn't endorse if they fully understood what was happening — using emotional loading, selective emphasis, or misleading sequencing to bypass rational evaluation. The text makes clear that techniques themselves are morally neutral; the ethics depend on whether you are respecting or bypassing the other person's capacity for rational response. Framing techniques are one of the most common categories where this line gets crossed in everyday influence situations.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Robert Cialdini's Ethical Framework`,
          paragraphs: [
            `Robert Cialdini, whose research on the six principles of influence was covered in L02, is unusually explicit about the ethics of influence. His later work, especially "Pre-Suasion" (2016) and chapters in updated editions of "Influence," directly addresses when his principles count as ethical persuasion versus manipulation. The framework is worth knowing because it's been thought through carefully by someone who knows the techniques as well as anyone.`,
            `Cialdini's three-question test. When considering using any influence technique, ask: First, is the principle I'm using based on something real? Real reciprocity for actual favors given, real social proof from authentic positive examples, real authority from genuine expertise, real scarcity from actual limited availability. If yes, you're working with what's true; if not, you're inventing pretenses. Second, am I being honest about what I'm doing? You don't have to announce every technique, but you should be willing to explain truthfully if asked. Hidden agendas are different from explicit ones. Third, am I serving the other person's actual interests as well as my own? Mutual benefit is different from extraction.`,
            `Cialdini also emphasizes a long-term consequences argument. Manipulation tends to produce short-term wins and long-term costs. The manipulated person eventually realizes (or partially senses) what happened, which damages trust and often retaliates in ways that exceed the original gain. Persuasion based on real value tends to compound positively: the persuaded person gets value, returns to you, recommends you to others, develops genuine trust. Over a career, ethical persuasion outperforms manipulation even on purely self-interested grounds.`,
            `One important nuance from Cialdini. He distinguishes "rapport-building" tactics (which can be used ethically) from "guilt-tripping" or "fear-mongering" (which are usually manipulative). Building genuine connection with someone you're persuading is fine and often necessary. Exploiting emotions to bypass their judgment is different. The line involves whether you're connecting authentically or staging connection to extract compliance.`,
            `Cialdini has commercial activity (books, consulting, training programs) and his framework should be read alongside other ethics-of-influence work. But within the constraints of being a popular research author, his ethical framework is unusually careful and grounded. Reading him explicitly on ethics (not just on the techniques) is part of becoming someone who uses influence well.`,
          ],
          image: `/voyager-assets/social-leadership/l07-s2-cialdini.webp`,
          imageCaption: `Cialdini's three-question test: is the principle based on something real, am I being honest, am I serving the other's interests?`,
          vocab: [
            {
              word: `Cialdini's ethical test`,
              definition: `Three-question test from Robert Cialdini's work for distinguishing ethical influence from manipulation: (1) Is the principle I'm using based on something real (real reciprocity, real social proof, real authority, real scarcity)? (2) Am I being honest about what I'm doing (willing to explain truthfully if asked)? (3) Am I serving the other person's actual interests as well as my own? Manipulation typically fails at least one of these tests.`,
              audioPrompt: `Cialdini's ethical test is a three-question test from Robert Cialdini's work for distinguishing ethical influence from manipulation, {name}. Question one: is the principle I'm using based on something real? Real reciprocity for actual favors given. Real social proof from authentic positive examples. Real authority from genuine expertise. Real scarcity from actual limited availability. If yes, you're working with what's true; if not, you're inventing pretenses. Question two: am I being honest about what I'm doing? You don't have to announce every technique, but you should be willing to explain truthfully if asked. Hidden agendas are different from explicit ones. Question three: am I serving the other person's actual interests as well as my own? Mutual benefit is different from extraction. Manipulation typically fails at least one of these tests; ethical persuasion typically passes all three. The test gives you specific language for evaluating both your own influence behaviors and others' attempts to influence you.`,
            },
            {
              word: `long-term consequences argument`,
              definition: `Cialdini's practical case for ethical persuasion over manipulation. Manipulation produces short-term wins and long-term costs: the manipulated person eventually realizes what happened, damaging trust and often retaliating in ways that exceed the original gain. Ethical persuasion based on real value tends to compound positively. Over a career, ethical persuasion outperforms manipulation even on purely self-interested grounds.`,
              audioPrompt: `The long-term consequences argument is Cialdini's practical case for ethical persuasion over manipulation, {name}. The argument doesn't rely on moral claims alone. It is grounded in what actually tends to happen over time. Manipulation tends to produce short-term wins and long-term costs. The manipulated person eventually realizes or partially senses what happened. This damages trust — and once trust is damaged, the relationship often retaliates in ways that exceed the original gain. Persuasion based on real value tends to compound positively. The person who was persuaded gets genuine value from whatever they were persuaded to do. They return. They recommend you to others. They develop genuine trust. Over a career, this compounding outperforms the degrading effects of manipulation even from purely self-interested calculation. The text notes that Cialdini also identifies an ethical cost to the practitioner that the argument doesn't require: people who develop manipulation habits become worse at the genuine connection that actually produces lasting influence. But the long-term consequences argument is important because it means you don't have to rely on moral intuition alone. The data favors ethics.`,
            },
            {
              word: `rapport-building`,
              definition: `Technique for establishing genuine connection with someone you are persuading. Distinguished by Cialdini from "guilt-tripping" or "fear-mongering," which are manipulative. Building real connection is acceptable and often necessary in ethical persuasion. The line: connecting authentically is rapport-building; staging connection specifically to extract compliance is manipulation.`,
              audioPrompt: `Rapport-building is Cialdini's term for the acceptable practice of establishing genuine connection with someone you are trying to persuade, {name}. Cialdini distinguishes it explicitly from guilt-tripping and fear-mongering, which he identifies as typically manipulative. Building genuine connection with someone is fine and often necessary in ethical persuasion. Finding real common ground, expressing genuine interest in the other person, being warm and engaged — these are rapport-building. The text draws the line clearly: connecting authentically is rapport-building; staging connection specifically as a means to extract compliance is manipulation. The distinction is not always visible from the outside because both can look the same in the moment. What distinguishes them is the internal process. Are you actually connecting with this person, and separately trying to persuade them? Or are you performing connection as a manipulation technique designed to lower their defenses? Cialdini's point is that this distinction matters both for ethics and for long-term effectiveness. Real rapport produces real trust that compounds over time. Staged rapport produces the appearance of trust that collapses when stress reveals its instrumental basis.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Maria Konnikova On Con Artists`,
          paragraphs: [
            `Maria Konnikova, a journalist and psychologist, spent years researching how con artists operate for her 2016 book "The Confidence Game." Her work is the most thorough accessible study of pure manipulation in action. Understanding how cons work is useful both for protection (recognizing when you're being conned) and for ethics (seeing clearly what manipulation looks like at its purest).`,
            `Konnikova identifies a consistent structure across cons. First: the put-up. The con artist identifies a target, usually someone with specific vulnerabilities (loneliness, financial need, desire for validation, ego, or specific situations). The target isn't random; con artists invest in selection. Second: the play. The con artist builds rapport, often through extended interaction designed to establish trust. The trust-building can take days, weeks, or months. Throughout, the con artist appears to be giving (insider information, friendship, opportunity) while actually setting up the take. Third: the rope. The con introduces the opportunity that will require the target's commitment. The opportunity is designed to feel like a once-in-a-lifetime chance. Fourth: the tale. The con builds the story that makes acting feel right and not acting feel like a missed opportunity. Fifth: the convincer. The con provides apparent proof — small wins, social proof from other "investors," fabricated authority. Sixth: the breakdown. Something goes "wrong" that requires the target to commit more. The breakdown is engineered to extract more resources. Seventh: the send and the touch. The actual extraction happens. Eighth: the blow-off. The con artist disappears, often leaving the target unsure what happened or even who they were.`,
            `Konnikova's research identifies several patterns relevant to recognizing manipulation in general. Cons rely on rapport, not deception of facts. The target usually believes the con artist personally. The "facts" can be checked but the relationship feels authentic. Reciprocity is heavily exploited: small gifts, favors, or interactions create the obligation that later cashes in. Time pressure prevents the target from getting outside perspectives. Cons are remarkably good at making targets feel they're the special ones being trusted with insider information.`,
            `What protects against cons (and manipulation generally). Konnikova found several patterns. Outside perspective: people who talked to others about decisions were less vulnerable. Slowing down: refusing to act on time pressure usually surfaces problems. Recognizing your own susceptibility: people who think they can't be conned are MORE vulnerable than people who recognize they could be. Asking honest questions: con artists often respond badly to direct factual questions that don't fit their narrative.`,
            `Konnikova's work is interesting because the techniques con artists use are extreme versions of techniques used in legitimate persuasion. The same rapport-building skills, the same emotional engagement, the same use of social proof. The difference is the rationality-respect distinction from section 1: cons specifically design to bypass rationality. Understanding cons illuminates the legitimate persuasion / manipulation line clearly because cons are pure manipulation, undisguised by any value to the target.`,
          ],
          image: `/voyager-assets/social-leadership/l07-s3-konnikova.webp`,
          imageCaption: `Konnikova's research on cons: structured stages, rapport-not-deception, time pressure, recognizing own susceptibility.`,
          vocab: [
            {
              word: `con artist structure`,
              definition: `Consistent pattern across cons identified in Maria Konnikova's "The Confidence Game" (2016). Stages include: put-up (target selection), play (rapport building), rope (opportunity introduction), tale (story that makes acting feel right), convincer (apparent proof), breakdown (engineered crisis requiring more commitment), send and touch (extraction), blow-off (disappearance). Understanding the structure helps recognize manipulation generally because cons are pure manipulation.`,
              audioPrompt: `Con artist structure is the consistent pattern across cons identified in Maria Konnikova's 2016 book "The Confidence Game," {name}. Several stages appear across nearly all cons. The put-up: target selection, usually someone with specific vulnerabilities the con artist has identified. The play: extended rapport-building designed to establish trust, often over days, weeks, or months. The rope: introducing the opportunity that will require the target's commitment, designed to feel like a once-in-a-lifetime chance. The tale: building the story that makes acting feel right and not acting feel like missing out. The convincer: providing apparent proof through small wins, fabricated social proof, manufactured authority. The breakdown: engineered crisis that requires the target to commit more resources. The send and touch: the actual extraction. The blow-off: the con artist disappears, often leaving the target unsure what happened. Understanding this structure helps recognize manipulation generally because cons are pure manipulation, undisguised by any genuine value to the target.`,
            },
            {
              word: `target selection`,
              definition: `First stage of con artist structure (Konnikova). Con artists identify targets based on specific vulnerabilities: loneliness, financial need, desire for validation, ego, or particular situational pressures. Targets are not random; con artists invest time in selection. Understanding this helps recognize when you may be being targeted: a stranger offering unusual attention or opportunity may have selected you based on a perceived vulnerability.`,
              audioPrompt: `Target selection is the first stage of con artist structure identified by Maria Konnikova in "The Confidence Game," {name}. Con artists identify targets based on specific vulnerabilities. The text names several: loneliness, financial need, desire for validation, ego, or particular situational pressures. The target is not random. Con artists invest significant time in selection — finding someone whose specific combination of needs and circumstances makes them susceptible to the particular scheme the con artist is running. Understanding this stage has practical value. When a stranger offers you unusual attention, unexpected opportunity, or specific validation that seems to come out of nowhere, it is worth asking whether the attention has a basis in something real or whether you may be being selected as a target. The con artist during the play stage — the trust-building phase — will seem to be giving generously. But the investment in the put-up means the con artist already believes they have identified something in you that the later stages of the con will exploit. Knowing that selection precedes the visible interaction is one of the foundations of Konnikova's protective framework.`,
            },
            {
              word: `outside perspective`,
              definition: `Primary protection against cons and manipulation identified by Konnikova. People who talked to others about decisions before acting were less vulnerable. Manipulation and cons typically work to isolate targets from outside perspectives through time pressure, special-knowledge framing, and the suggestion that outsiders wouldn't understand. Deliberately seeking outside perspectives before committing to significant decisions directly interrupts this structure.`,
              audioPrompt: `Outside perspective is the primary protection against cons and manipulation identified by Konnikova's research, {name}. People who talked to others about decisions before acting were significantly less vulnerable to being conned. The reason is structural. Manipulation and cons specifically work to isolate the target from outside perspectives. Time pressure ("you have to decide now") prevents getting other opinions. Special-knowledge framing ("this opportunity isn't for everyone — only you") makes the target feel that outsiders wouldn't understand. The manufactured sense of special relationship makes the target reluctant to share with others who might react skeptically. All of these isolation techniques are designed to prevent exactly what protects: someone outside the dynamic who can respond with unmanipulated perspective. Deliberately seeking outside perspectives before committing to significant decisions directly interrupts this structure. The protection is simple in principle and often hard to apply in practice when the con is working well, because the techniques are specifically designed to make getting outside perspective feel wrong, unnecessary, or disloyal.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Viral "Dark Psychology" Content`,
          paragraphs: [
            `Beyond serious research on persuasion ethics (Cialdini) and on manipulation in action (Konnikova), there's a large viral ecosystem selling manipulation as a desirable skill. "Dark psychology" accounts on Instagram, TikTok, and YouTube. "Master manipulation" courses. "How to read anyone." "Get anyone to do what you want." The content varies but shares patterns worth recognizing.`,
            `First: framing manipulation as smart and ethical persuasion as weak. The content typically positions manipulation as advanced, sophisticated, real-world skill that successful people use, while framing ethical persuasion as naive. The framing is wrong (most accomplished people across legitimate fields succeed through real persuasion built on real value, not through manipulation), but it sells because it makes followers feel they're learning insider knowledge.`,
            `Second: misuse of psychology research. The content often references real research (Cialdini's six principles, body language research, neuropsychology) but strips the ethical context and frames techniques as ways to control others. Cialdini explicitly distinguishes ethical from manipulative uses of his principles; the dark-psychology content reads only the technique parts and ignores the ethical framing. This is intellectual dishonesty: presenting half of a researcher's work as if it were the whole.`,
            `Third: exploiting insecurity. The content typically suggests that the viewer is currently being manipulated by everyone around them and needs these "defensive" techniques to compete. The framing creates anxiety that the courses promise to resolve. The "everyone is manipulating you" framing is mostly false (most people you know aren't trying to manipulate you) but it sells because it makes followers feel they need the product.`,
            `Fourth: monetization through courses and coaching. "Dark psychology mastery." "Manipulation tactics bootcamp." "Become the puppet master." The business model is selling courses, not actually producing the outcomes claimed. Most of the content is repackaged Cialdini and similar research with the ethics stripped out.`,
            `Fifth: structural problem with the actual skill being taught. Even if you could become a skilled manipulator, the long-term consequences (described by Cialdini) usually exceed any short-term gains. Manipulated people eventually realize what happened and retaliate. Relationships built on manipulation collapse when stress reveals the underlying lack of trust. Careers built on manipulation often peak early and then encounter increasing resistance as the manipulator's reputation spreads. The skill being sold doesn't actually produce the outcomes the marketing claims.`,
            `Sixth: ethical damage to the practitioner. People who deliberately develop manipulation skills tend to become worse at genuine connection. The mindset that views people as targets to influence undermines the mindset needed for real relationships. Long-term manipulators often report isolation and difficulty with authentic intimacy. The skill costs something the marketing doesn't disclose.`,
          ],
          image: `/voyager-assets/social-leadership/l07-s4-dark.webp`,
          imageCaption: `Viral "dark psychology" content: manipulation-as-smart framing, misused research, exploiting insecurity, monetization, hidden costs to the practitioner.`,
          vocab: [
            {
              word: `dark psychology`,
              definition: `Pattern of viral content marketing manipulation tactics as a desirable life skill. Typically misuses real psychology research by stripping its ethical context, frames manipulation as "advanced" and ethical persuasion as naive, exploits insecurity about being manipulated by others, sells courses and coaching. The category is recognizable across many specific creators. Most of the actual content is repackaged Cialdini and similar research with ethics removed.`,
              audioPrompt: `Dark psychology is a pattern of viral content marketing manipulation tactics as a desirable life skill, {name}. Common across Instagram, TikTok, and YouTube. The content typically misuses real psychology research by stripping its ethical context. Real researchers like Robert Cialdini explicitly distinguish ethical from manipulative uses of influence principles; dark-psychology content reads only the technique parts and ignores the ethical framing. The content also frames manipulation as "advanced" and ethical persuasion as naive, which is wrong but sells because it makes followers feel they're learning insider knowledge. It exploits insecurity about being manipulated by others, creating anxiety the courses promise to resolve. It typically sells through courses and coaching at premium prices. The category is recognizable across many specific creators. Most of the actual content is repackaged Cialdini and similar research with ethics removed and dramatic framing added. The skills being sold often don't actually produce the outcomes the marketing claims, and they carry hidden costs the marketing doesn't disclose.`,
            },
            {
              word: `exploiting insecurity`,
              definition: `Manipulation pattern used extensively by viral dark-psychology content. The content suggests viewers are currently being manipulated by everyone around them and need "defensive" techniques to compete. The framing creates anxiety the courses promise to resolve. The "everyone is manipulating you" claim is mostly false — most people you know are not trying to manipulate you — but it sells because it makes followers feel they need the product.`,
              audioPrompt: `Exploiting insecurity is one of the key manipulation patterns used by viral dark-psychology content, {name}. The typical move is suggesting that the viewer is currently being manipulated by everyone around them and needs these defensive techniques to compete. The framing creates anxiety — you are vulnerable, you are being controlled, everyone else knows things you don't — that the courses then promise to resolve. This is a specific instance of the technique Cialdini would categorize as manufactured scarcity plus fear: you are missing something important and running out of time to get it. The text is explicit that the "everyone is manipulating you" claim is mostly false. Most people you know are not trying to manipulate you. Most human social interaction is not manipulation. But the claim sells because it makes followers feel they need the product, which is exactly how exploitation of insecurity is supposed to work. The meta-point is important: the marketing of manipulation courses uses manipulation to sell itself. Recognizing that you are being manipulated into purchasing a course about manipulation is itself a demonstration of why the real frameworks matter.`,
            },
            {
              word: `ethical damage to the practitioner`,
              definition: `The hidden cost of deliberately developing manipulation skills, identified in the text. People who develop a mindset that views others as targets to influence tend to become worse at genuine connection over time. Long-term manipulators often report isolation and difficulty with authentic intimacy. The skill damages the capacity for the kind of real relationships that actually compound positively over a lifetime. The marketing of manipulation courses does not disclose this cost.`,
              audioPrompt: `Ethical damage to the practitioner is a hidden cost of deliberately developing manipulation skills that the viral dark-psychology content does not disclose, {name}. The text identifies it as the sixth structural problem with the skill being sold. People who deliberately develop manipulation skills — who consciously cultivate the mindset that views other people as targets to be influenced — tend to become worse at genuine connection over time. The mindset that manipulation requires is fundamentally incompatible with the mindset that real relationships require. Real connection involves vulnerability, genuine interest in the other person as a person rather than a target, and mutual trust that is built through authentic engagement. Deliberate manipulation training corrodes all of these. Long-term manipulators often report isolation and difficulty with authentic intimacy — they have become skilled at a mode of engagement that prevents the kind of relationship they actually need. This cost is not visible in the short term, which is why the marketing doesn't disclose it. But across a lifetime, the people who maintain genuine influence are those with genuine trust relationships built through ethical engagement — not people who have optimized for extracting compliance through techniques.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources approaching the question of persuasion versus manipulation. Cialdini's ethical framework and Konnikova's research on cons are both serious work, though they approach the question from different angles. The viral content represents what's actually being marketed to your generation as the dark-psychology alternative.`,
            `One framing to consider. Cialdini and Konnikova largely agree on what manipulation is and why it's distinct from ethical persuasion. They differ in emphasis: Cialdini emphasizes ethical use of influence principles in legitimate contexts; Konnikova emphasizes how manipulation operates at its purest in cons. Together they give you both sides: how to use influence ethically (Cialdini) and how to recognize manipulation when you see it (Konnikova).`,
            `Another framing. The viral content uses some real research and may even have some useful tactical observations buried in it. But the framing is structurally manipulative: the marketing of "manipulation skills" relies on the same techniques manipulation itself uses (creating insecurity, promising special knowledge, exploiting status-seeking). Buying these courses is often itself an example of being manipulated by the seller.`,
            `One last framing. You're 12. You're entering an era of your life where you'll be encountering more sophisticated persuasion attempts (advertising, social media algorithms, peer pressure, eventually political and commercial messaging at higher levels). The distinction you build here protects you from manipulation AND protects you from becoming someone who manipulates others. Both protections matter.`,
          ],
          image: `/voyager-assets/social-leadership/l07-s5-before.webp`,
          imageCaption: `Two serious sources approaching from different angles plus viral dark-psychology content. The distinction protects both ways.`,
          vocab: [
            {
              word: `influence ethics`,
              definition: `Subfield of applied ethics focused on when influencing others is appropriate, what techniques are acceptable, and what protections people need from influence attempts. Includes work on advertising ethics, persuasion ethics, propaganda analysis, manipulation theory, informed consent. Has practical implications for leadership, marketing, education, journalism, parenting. Most adults haven't explicitly studied this; learning it at 12 produces unusual literacy.`,
              audioPrompt: `Influence ethics is a subfield of applied ethics focused on when influencing others is appropriate, what techniques are acceptable, and what protections people need from influence attempts, {name}. Includes work on advertising ethics, persuasion ethics, propaganda analysis, manipulation theory, informed consent. Has practical implications for leadership, marketing, education, journalism, parenting, and any other context where one person tries to shape another's beliefs or behavior. Most adults haven't explicitly studied this field; learning it at 12 produces unusual literacy. The core questions: what makes persuasion ethical, what makes manipulation distinct, what role do techniques play versus intent and context, what protections does each person owe to those they're trying to influence? Different traditions answer differently. Engaging with the questions explicitly, rather than absorbing whatever framing your environment offers, is what builds real literacy.`,
            },
            {
              word: `serious work`,
              definition: `The text's term for distinguishing credible research-based sources from viral content. Cialdini's framework and Konnikova's research on cons are both serious work approaching the persuasion-manipulation question from different angles. Both have academic credentials, empirical grounding, and explicit engagement with ethics. The viral dark-psychology content does not qualify as serious work by the same criteria.`,
              audioPrompt: `Serious work is the text's term for distinguishing credible research-based sources from viral content, {name}. The text describes Cialdini's ethical framework and Konnikova's research on cons as both serious work approaching the persuasion-manipulation question from different angles. What makes them serious work includes academic credentials — Cialdini is an established social psychologist with decades of peer-reviewed research; Konnikova has a PhD in psychology from Columbia and serious journalism background. Both draw on empirical research. Both explicitly engage with the ethics of the subject rather than stripping ethical context to make the content more marketable. Both have been reviewed and used in professional contexts over many years. The viral dark-psychology content does not qualify as serious work by these criteria. It has no credentials, misuses real research, and explicitly avoids ethical engagement because ethical framing would undermine the product's appeal. The skill of distinguishing serious work from viral content is itself one of the most valuable outcomes of the lesson — because it applies to sources across every domain you will encounter over a lifetime, not just persuasion ethics.`,
            },
            {
              word: `protection both ways`,
              definition: `The dual benefit of building explicit persuasion-ethics literacy: protection from being manipulated AND protection from becoming someone who manipulates others without realizing it. The distinction built in this lesson enables both. Recognizing manipulation when it is used on you requires the same understanding as recognizing when you are crossing the line yourself.`,
              audioPrompt: `Protection both ways is the dual benefit of building explicit persuasion-ethics literacy, {name}. The text frames it explicitly: the distinction you build here protects you from manipulation AND protects you from becoming someone who manipulates others without realizing it. Both protections matter. Protection from manipulation means recognizing when someone is using rationality-bypassing techniques on you — manufactured scarcity, staged rapport, exploited insecurity, time pressure. Recognition is the first line of defense. Protection from becoming manipulative means having explicit criteria — like Cialdini's three-question test — for evaluating your own influence behaviors before you use them. Most people who cross into manipulation do so without fully noticing it, because they have not developed explicit frameworks that would surface the distinction. Building the frameworks at 12, before the full range of influence situations begins — advertising at scale, political messaging, peer pressure in more complex contexts, eventually commercial and professional situations — means you approach those situations with literacy most people your age and many adults lack. The lesson is about both protections simultaneously, not just one.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l07-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Persuasion And Manipulation`,
          intro: `Three sources approach the question of where the line is between persuasion and manipulation. Two are serious research from different angles; one is viral content. Rank them. Then see how a careful analyst would evaluate them.`,
          topic: `Where's the line between ethical persuasion and manipulation, and how do we recognize each?`,
          sources: [
            {
              id: `source-a`,
              name: `Robert Cialdini, "Influence" (1984+) and "Pre-Suasion" (2016) — research-grounded persuasion with explicit ethics`,
              type: `Books by Robert Cialdini, social psychologist who studied compliance and persuasion for decades; identifies six principles of influence AND explicitly addresses the ethics of using them; one of the most-cited works in social psychology`,
              claim: `Six principles of influence (reciprocity, commitment/consistency, social proof, liking, authority, scarcity) consistently produce compliance across many contexts. These principles aren't manipulation; they describe how human social cognition actually works. They can be used ethically or manipulatively depending on three tests: (1) is the principle based on something real, (2) are you being honest about what you're doing, (3) are you serving the other person's actual interests as well as your own. Manipulation typically fails at least one test; ethical persuasion passes all three. Long-term consequences favor ethical persuasion even on self-interested grounds.`,
              evidence: `Cialdini is an established academic with substantial peer-reviewed research backing the books. Both books draw on decades of his own and others' research. Each principle has empirical support across many replications. Cialdini explicitly addresses ethics in dedicated chapters across his work, distinguishing manipulative from ethical uses. The framework has been widely applied in marketing, fundraising, education, healthcare with measurable effects. Some critiques have argued specific applications overgeneralize; the core framework has held up well across 40+ years. Cialdini has commercial activity (consulting, training) but the underlying research is solid. Best available framework for thinking about influence and ethics together.`,
            },
            {
              id: `source-b`,
              name: `Maria Konnikova, "The Confidence Game" (2016) — research on how con artists operate`,
              type: `Book by Maria Konnikova, journalist with PhD in psychology; based on years of research interviewing con artists, psychologists, and victims; thorough accessible study of pure manipulation in action`,
              claim: `Cons follow a consistent structure across many specific schemes: put-up (target selection), play (rapport building), rope (opportunity introduction), tale (story that makes acting feel right), convincer (apparent proof), breakdown (engineered crisis), send and touch (extraction), blow-off (disappearance). Cons rely on rapport not deception of facts; the target usually believes the con artist personally. Reciprocity, social proof, and authority are heavily exploited but with manufactured rather than real bases. What protects against cons: outside perspective, slowing down (refusing time pressure), recognizing your own susceptibility, asking honest factual questions. Studying cons illuminates the persuasion/manipulation line because cons are pure manipulation.`,
              evidence: `Konnikova has academic credentials (PhD in psychology from Columbia) plus serious journalism background. The book is based on extensive primary research including interviews with con artists, psychologists, and victims. Engages with psychological research throughout. Specific predictions about con structure have been confirmed across many subsequent reported cases. The book is more journalistic than academic, with the strengths and limits that implies: very readable, somewhat narrative-driven, but grounded in real research and verifiable patterns. Useful complement to Cialdini because it shows manipulation in pure form rather than mixed with legitimate use of techniques. Konnikova has commercial activity (books, journalism) but no business selling manipulation techniques.`,
            },
            {
              id: `source-c`,
              name: `@DarkPsychologyMaster — TikTok/Instagram account, 1.8M followers, sells $497 "Dark Psychology Mastery Course"`,
              type: `Viral social media account producing content about "dark psychology," "manipulation tactics," "reading people"; sells courses and coaching at premium prices; references real psychology research stripped of ethical context`,
              claim: `"Most people are weak because they don't understand DARK psychology. Successful people use these tactics every day. Ethical persuasion is for losers. My $497 Dark Psychology Mastery Course teaches you the manipulation techniques that get you what you want from anyone — your crush, your boss, your friends, your enemies. Stop being manipulated by everyone around you. Master the dark arts of human influence. Friday is your last chance for early-bird pricing. The window to dominate is closing."`,
              evidence: `No credentials in psychology or relevant research. References real research (Cialdini's principles, body language work, neuropsychology) but strips ethical context. The "everyone manipulates you" framing isn't supported by social psychology research; most people you know aren't trying to manipulate you. The "ethical persuasion is for losers" framing runs opposite to actual research on what produces durable long-term success across legitimate fields. Course-and-coaching revenue model shapes content toward dramatic confident claims. Confidence-as-substitute-for-substance pattern throughout. Notably, the marketing of the courses uses the same manipulation techniques the courses claim to teach: creating insecurity, promising special knowledge, exploiting status-seeking, urgency pricing. Buying these courses is often itself an example of being manipulated.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How do Cialdini and Konnikova compare? They approach the question from different angles. What does each contribute to understanding the persuasion/manipulation distinction?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Sources A and B are both credible serious research that complement each other. Cialdini's framework is one of the foundational works in social psychology on influence and explicitly addresses ethics. Konnikova's research on con artists is the most thorough accessible study of manipulation in action. Together they give you both sides: how to use influence ethically (Cialdini's three-question test) and how to recognize manipulation when you see it (Konnikova's structural analysis of cons). For someone building real literacy in persuasion ethics, reading both produces fuller understanding than either alone.`,
              `Source C is recognizable viral dark-psychology content with all the typical patterns. No credentials. Misuses real research (Cialdini's principles) by stripping the ethical context. "Ethical persuasion is for losers" framing is empirically wrong — most accomplished people across legitimate fields succeed through real persuasion built on real value. Course-and-coaching revenue shapes content toward dramatic confident claims. The marketing of the courses uses the same manipulation techniques the courses claim to teach (creating insecurity, promising special knowledge, urgency pricing). The content sells because it appeals to insecurity and status-seeking, not because it accurately represents how influence works.`,
              `The deeper lesson. Real persuasion ethics involves both the constructive side (using influence techniques while respecting rationality and serving mutual interests) and the protective side (recognizing manipulation when it's being used on you). Cialdini and Konnikova together cover both. The viral dark-psychology content offers neither real ethics nor real protection; it offers performance of cynical sophistication as substitute for actual understanding. Knowing the gap protects you from absorbing low-quality framing AND gives you the tools to actually navigate influence situations well across your life.`,
              `One important note. The viral content has some real teachable patterns mixed in (mostly because it's repackaging Cialdini). Some readers extract useful information despite the framing. But the structural problems (no credentials, misuse of research, harmful framing, manipulative marketing) make the content riskier than its useful elements justify. Better to read Cialdini and Konnikova directly: same techniques, real ethical framing, no harmful framing.`,
            ],
          },
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the core distinction between persuasion and manipulation?`,
              options: [
                `Just intent`,
                `Persuasion respects the other person's rationality (presents reasons, evidence, considerations they can evaluate; they retain capacity to disagree); manipulation bypasses or exploits rationality (techniques designed to produce decisions they wouldn't make if they fully understood); same techniques can be either depending on whether person retains genuine capacity to disagree`,
                `Different techniques`,
                `Random difference`,
              ],
              correctIndex: 1,
              explanation: `Same techniques can be used either way. The ethics depend on whether you're respecting or bypassing rationality, not on the techniques themselves. Social proof can be ethical (showing actual evidence) or manipulative (manufactured fake popularity).`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is Cialdini's three-question ethical test?`,
              options: [
                `Random questions`,
                `(1) Is the principle I'm using based on something real (real reciprocity, real social proof, real authority, real scarcity)? (2) Am I being honest about what I'm doing (willing to explain truthfully if asked)? (3) Am I serving the other person's actual interests as well as my own? Manipulation typically fails at least one test`,
                `Three-part rule`,
                `Marketing framework`,
              ],
              correctIndex: 1,
              explanation: `The test gives you specific language for evaluating both your own influence behaviors and others' attempts to influence you. Ethical persuasion typically passes all three; manipulation typically fails at least one.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why do long-term consequences favor ethical persuasion over manipulation (per Cialdini)?`,
              options: [
                `It's nicer`,
                `Manipulation tends to produce short-term wins and long-term costs; manipulated people eventually realize what happened, damaging trust and often retaliating in ways exceeding original gain; ethical persuasion based on real value tends to compound positively; over a career, ethical persuasion outperforms manipulation even on purely self-interested grounds`,
                `Random claim`,
                `Cosmic justice`,
              ],
              correctIndex: 1,
              explanation: `This is the practical case for ethical persuasion that doesn't depend on moral arguments alone. Even from purely self-interested calculation, manipulation usually costs more in the long run than it gains in the short run.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "con artist structure" (Konnikova)?`,
              options: [
                `Random schema`,
                `Consistent pattern across cons from "The Confidence Game" (2016): put-up (target selection), play (rapport building), rope (opportunity introduction), tale (story), convincer (apparent proof), breakdown (engineered crisis), send and touch (extraction), blow-off (disappearance); helps recognize manipulation generally because cons are pure manipulation`,
                `Movie plot`,
                `Crime story`,
              ],
              correctIndex: 1,
              explanation: `Cons rely on rapport, not deception of facts. The target usually believes the con artist personally. Understanding this structure helps recognize manipulation generally because cons demonstrate manipulation in its purest form, undisguised by any genuine value to the target.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What protects against cons (and manipulation generally)?`,
              options: [
                `Random protections`,
                `Outside perspective (talking to others about decisions); slowing down (refusing time pressure usually surfaces problems); recognizing your own susceptibility (people who think they can't be conned are MORE vulnerable than people who recognize they could be); asking honest factual questions (con artists often respond badly to direct questions that don't fit their narrative)`,
                `Being smart`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `Each protection works by interrupting the techniques manipulation relies on. Outside perspective breaks the social proof and isolation; slowing down breaks the time pressure; recognizing susceptibility breaks the overconfidence cons exploit; honest questions break the carefully constructed narrative.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What patterns characterize viral "dark psychology" content?`,
              options: [
                `Random content`,
                `Framing manipulation as smart and ethical persuasion as weak; misuse of psychology research (strips ethical context from Cialdini etc.); exploiting insecurity ("everyone manipulates you"); monetization through courses; the marketing uses the same manipulation techniques the courses claim to teach`,
                `Real psychology`,
                `Useful content`,
              ],
              correctIndex: 1,
              explanation: `Buying these courses is often itself an example of being manipulated by the seller. The marketing of "manipulation skills" relies on the same techniques manipulation itself uses (creating insecurity, promising special knowledge, exploiting status-seeking). Recognizing this loop is part of the protection.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "influence ethics" as a field?`,
              options: [
                `Random subject`,
                `Subfield of applied ethics focused on when influencing others is appropriate, what techniques are acceptable, what protections people need; includes advertising ethics, persuasion ethics, propaganda analysis, manipulation theory, informed consent; has practical implications for leadership, marketing, education, journalism, parenting`,
                `Sales training`,
                `Marketing class`,
              ],
              correctIndex: 1,
              explanation: `Most adults haven't explicitly studied this field; learning it at 12 produces unusual literacy. The core questions: what makes persuasion ethical, what makes manipulation distinct, what role do techniques play versus intent and context, what protections does each person owe to those they're trying to influence?`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the dark-psychology content's framing ("ethical persuasion is for losers") fail empirically?`,
              options: [
                `Just an opinion`,
                `Most accomplished people across legitimate fields succeed through real persuasion built on real value, not manipulation; manipulation tends to peak early and encounter increasing resistance as reputation spreads; long-term outcomes favor ethical persuasion even on purely self-interested grounds; the framing exists to sell courses, not because it's accurate`,
                `Losers say that`,
                `Random claim`,
              ],
              correctIndex: 1,
              explanation: `The empirical case for ethical persuasion vs manipulation is strong: the underlying mechanism (manipulated people eventually realize and retaliate) means manipulation degrades over time while real persuasion compounds. The dark-psychology framing is marketing, not analysis.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Cialdini's principles of influence ARE manipulation.`,
              correctAnswer: false,
              explanation: `False. The principles describe how human social cognition actually works. They can be used ethically or manipulatively depending on Cialdini's three-question test: based on something real, honest about what you're doing, serving the other's interests as well as your own. The techniques themselves are morally neutral; the ethics depend on how you're using them.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I just watched a TikTok about how to manipulate my crush into liking me. It's just 'using psychology' — what's wrong with that?" Based on this lesson, what should you point out?`,
              options: [
                `"Go for it"`,
                `"Several things wrong with it. First: 'manipulation' bypasses the other person's rational decision-making. If your crush 'liking you' came from techniques that bypassed their judgment, you'd have produced something that isn't actually their genuine response. That's not a real relationship; it's a performance you've engineered. Second: it usually doesn't work the way the content claims. Real research (Cialdini, Konnikova) shows manipulation produces short-term results and long-term collapse. Eventually they realize or sense what happened, and the relationship damages. Third: practicing manipulation skills changes who you are over time — people who deliberately develop these skills become worse at genuine connection. The actual path to someone liking you involves being someone genuinely worth liking, which means developing actual qualities (kindness, interest in them, real interests of your own, integrity) rather than techniques. The TikTok is selling you something at your expense."`,
                `"It's fine"`,
                `"You'll get caught"`,
              ],
              correctIndex: 1,
              explanation: `Real applied persuasion-ethics literacy. Don't moralize abstractly; explain specifically why manipulation fails and what the real alternative is. This is the kind of response that can actually shift your friend's thinking rather than triggering defensiveness.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have a clear line between persuasion and manipulation? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: when have you used techniques that crossed toward manipulation? What did the test reveal?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can both use influence ethically AND recognize manipulation when it's used on you, what does that change about your protection and your impact over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Apply Cialdini's three-question test to one specific influence situation in your life. Does it pass all three?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where the line is genuinely unclear? What about persuading someone to do something for their own good they don't see? Where does paternalism fit?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch one piece of advertising or sales content this week. Apply the manipulation/persuasion test. What do you notice?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Persuasion ethics shapes how you'll engage with influence for a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Persuasion Ethics Conversation`,
            duration: `45 minutes`,
            description: `Share Cialdini's three-question test. Then ask family members to identify a recent situation where someone tried to influence them (advertising, sales, social media, friend's request, work asks). Apply the test together. The conversation often surfaces patterns of influence the family has been absorbing without analysis. Many adults discover they've been responding to manipulation they hadn't explicitly identified.`,
          },
          projectOption: {
            title: `Read Konnikova's "The Confidence Game" or Cialdini's "Pre-Suasion," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Maria Konnikova's "The Confidence Game" (2016, journalistic study of how cons work) or Robert Cialdini's "Pre-Suasion" (2016, follow-up to "Influence" with explicit ethics chapter). Both are accessible at 12 with attention. Apply concepts to your daily life during the reading period. Write 1,500 words on what you learned about both ethical persuasion and manipulation. Real applied influence ethics at 12 produces durable literacy.`,
            offerToParent: `Parent: opt your kid into this project. Reading a real persuasion ethics book at 12 is genuinely formative.`,
          },
          identityQuestion: `If you become someone who can both use influence ethically and recognize manipulation across thousands of interactions over a lifetime, what does that change about both your impact and your protection?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who applies Cialdini's three-question test before using influence techniques.`,
            `A person who can recognize manipulation when it's being used on me.`,
            `Someone who refuses to learn "dark psychology" because I understand what's actually being sold.`,
          ],
          saveKey: `identity_responses_sl_11_12_7`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventh Social Leadership lesson done. You now have the core distinction (rationality-respecting vs rationality-bypassing), Cialdini's three-question ethical test, Konnikova's research on how cons operate, and the framework for recognizing viral "dark psychology" content for what it is. You can use influence ethically AND protect yourself from manipulation. Most adults learn this through trial and harm over decades; you have it at 12. Next time we go into how to lead through change. Three positions defended by serious thinkers. Argument Builder format. Let's go. — Valor`,
          badge: `persuasion-literate`,
          badgeName: `Persuasion Literate`,
          xpEarned: 75,
          competencies: [
            `Articulates rationality-respecting vs rationality-bypassing as core distinction`,
            `Applies Cialdini's three-question ethical test`,
            `Knows Konnikova's structural analysis of cons`,
            `Recognizes "dark psychology" viral content patterns`,
            `Can identify both ethical persuasion and manipulation in real situations`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Leading Through Change`,
            hook: `Three positions defended by serious thinkers. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L07 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
