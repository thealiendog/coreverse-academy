// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L17 — Ethics of Leadership
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Applied Ethics, Moral Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (consequences-focused / principle-focused / virtue-focused)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l17-v1";

const SOCIALLEADERSHIP_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-17`,
      title: `Ethics of Leadership`,
      duration: 35,
      xpReward: 75,
      badge: `ethical-leader`,
      badgeName: `Ethical Leader`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, every leadership role involves ethical questions. How you make decisions affects people. The choices that look right in the moment may have consequences you didn't intend. Different ethical frameworks give different answers to the same hard situations. Today we work through three serious positions on what makes leadership ethical: consequences-focused (judge by outcomes), principle-focused (judge by adherence to ethical principles regardless of outcomes), and virtue-focused (judge by whether the leader is genuinely virtuous in character). Each has been defended by major moral philosophers across centuries. The position you take shapes how you'll approach hard ethical situations across a lifetime of leadership.`,
          headline: `Ethics of Leadership`,
          subtitle: `Three positions defended by major moral philosophers. The choice shapes how you handle hard ethical situations.`,
          visual: `/voyager-assets/social-leadership/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Ethics Framework Matters`,
          paragraphs: [
            `Leadership puts you in situations where you'll have to make decisions that affect other people. Some decisions are easy ethically: the right answer is clear and easy to do. Many decisions aren't. Resources are limited and you have to allocate them. People you care about will be hurt regardless of what you choose. Following one principle means violating another. Different stakeholders want incompatible things. What you'd do for one person isn't sustainable as a policy for everyone.`,
            `In these situations, your underlying ethical framework shapes what you decide. People who default to "what produces the best outcome" reach different conclusions than people who default to "what principles can I not violate" or people who default to "what would a person of good character do here." The frameworks aren't always consistent; they sometimes recommend opposite actions in the same situation.`,
            `Three major ethical traditions offer different answers. Consequentialism (most famously utilitarianism) judges actions by their outcomes: the right action is the one that produces the best results for those affected. Deontology (most famously associated with Immanuel Kant) judges actions by their adherence to moral principles: some actions are wrong regardless of outcomes (like lying or treating people as mere means). Virtue ethics (most famously associated with Aristotle and revived in 20th-century work) judges actions by whether they're what a virtuous person would do, where virtue is excellence of character (courage, wisdom, justice, temperance, integrity).`,
            `Each framework has been developed and defended by serious moral philosophers across centuries. Each has insights the others miss. Each has limits where it produces conclusions most people find wrong. Real ethical thinking usually involves engaging with multiple frameworks rather than committing fully to one — but the framework you default to in hard situations shapes your reasoning significantly.`,
            `For 12-year-olds, the framework question matters because the ethical patterns you build in adolescence shape how you handle decisions throughout your life. Most adults absorb whatever framework their environment offers without explicit examination. Explicitly choosing your framework, while remaining open to insights from others, produces more deliberate ethical practice than absorbing the default.`,
          ],
          image: `/voyager-assets/social-leadership/l17-s1-matters.webp`,
          imageCaption: `Three major ethical traditions: consequentialism, deontology, virtue ethics. Each developed by serious philosophers. Each has insights and limits.`,
          vocab: [
            {
              word: `consequentialism`,
              definition: `Three major traditions in moral philosophy. Consequentialism (including utilitarianism): the right action is determined by its outcomes; best results justify the action. Deontology (associated with Kant): some principles must be followed regardless of outcomes; certain actions are wrong even if they produce good results. Virtue ethics (associated with Aristotle): right action is what a virtuous person of good character would do; focus on character development rather than rules or outcomes.`,
              audioPrompt: `Consequentialism, deontology, and virtue ethics are three major traditions in moral philosophy, {name}. Consequentialism, including utilitarianism, holds that the right action is determined by its outcomes. The best results justify the action. Major defenders include Jeremy Bentham and John Stuart Mill in the 19th century, contemporary philosophers like Peter Singer. Deontology, often associated with Immanuel Kant, holds that some principles must be followed regardless of outcomes. Certain actions are wrong even if they would produce good results. Don't lie. Don't treat people as mere means to your ends. Respect human dignity. Major defenders include Kant, contemporary philosophers like John Rawls in some respects. Virtue ethics, associated with Aristotle and revived in 20th century work by philosophers like Alasdair MacIntyre and Martha Nussbaum, holds that right action is what a virtuous person of good character would do. Focus on character development rather than just rules or outcomes. Virtues include courage, wisdom, justice, temperance, integrity. Each tradition has insights the others miss; real ethical thinking usually engages with multiple frameworks.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Consequences-Focused (Judge By Outcomes)`,
          paragraphs: [
            `The first position: ethical leadership is judged by what it actually produces for those affected. A leader who makes morally satisfying decisions that hurt the people they lead isn't an ethical leader. A leader whose decisions produce good outcomes for those affected is an ethical leader, even if those decisions sometimes involved hard tradeoffs that look uncomfortable in isolation. The point of leadership is to make things better for people; ethics should be judged by whether it does.`,
            `The case has real strength. Consequences matter. Decisions affect real people; ignoring outcomes in favor of principle-purity sometimes produces decisions that look good on paper but devastate real human lives. Many ethical frameworks have been used to justify terrible actions because the actions followed the rules; consequences-focused ethics insists on asking whether the rules actually serve the people the rules are supposed to protect.`,
            `Defenders include Jeremy Bentham and John Stuart Mill (utilitarianism), much of contemporary moral philosophy, public policy traditions that emphasize empirical evaluation, business ethics focused on stakeholder outcomes, and many working leaders who emphasize results over process. Peter Singer's contemporary work in applied ethics extends utilitarian thinking to many practical situations. The framework's strength comes from its empirical grounding: you can usually measure outcomes more clearly than you can adjudicate competing principles.`,
            `The framework has nuanced versions. Act consequentialism: each individual action should be judged by its outcomes. Rule consequentialism: policies and rules should be judged by what outcomes they produce when consistently applied; individual exceptions may produce better immediate outcomes but undermine the rule system that produces better overall outcomes. Most thoughtful consequentialists are rule consequentialists for most situations because act consequentialism is hard to apply reliably in real time.`,
            `The limits. Pure consequences-focused ethics can justify terrible actions in service of supposedly good outcomes ("the ends justify the means"). Measuring outcomes accurately is harder than the framework assumes; second-order and long-term effects often go unmeasured. The framework can also produce decisions that violate widely-shared intuitions about justice: torturing one person to save many, lying to many people for their own good, treating people as means to aggregate ends. Most serious consequentialists have developed refinements to address these problems, but the underlying tension is real.`,
          ],
          image: `/voyager-assets/social-leadership/l17-s2-consequences.webp`,
          imageCaption: `Position 1: judge leadership by outcomes. Bentham, Mill, contemporary utilitarianism. Empirical grounding strong; "ends justify means" reasoning is the limit.`,
          vocab: [
            {
              word: `act consequentialism`,
              definition: `Distinction within consequentialist ethics. Act consequentialism: each individual action judged by its specific outcomes. Rule consequentialism: rules and policies judged by what outcomes they produce when consistently applied; individual exceptions may produce better immediate outcomes but undermine the rule system that produces better overall outcomes. Most thoughtful consequentialists default to rule consequentialism for most situations.`,
              audioPrompt: `Rule consequentialism versus act consequentialism is a distinction within consequentialist ethics, {name}. Act consequentialism holds that each individual action should be judged by its specific outcomes. The right action in any moment is the one that produces the best results in that specific situation. Rule consequentialism holds that rules and policies should be judged by what outcomes they produce when consistently applied. Individual exceptions may produce better immediate outcomes but undermine the rule system that produces better overall outcomes across many situations. Most thoughtful consequentialists default to rule consequentialism for most situations because act consequentialism is hard to apply reliably in real time and because people can rationalize almost any action as "the right exception in this specific case." Rule consequentialism preserves the predictability and stability that rules provide while still grounding the rules in their outcomes rather than in their formal status. The distinction matters because pure act consequentialism often produces decisions that violate widely-shared intuitions; rule consequentialism aligns better with how most ethical reasoning actually works.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Principle-Focused (Judge By Adherence To Moral Principles)`,
          paragraphs: [
            `The second position: ethical leadership is judged by whether it adheres to moral principles, regardless of outcomes. Some actions are wrong even if they would produce good results: lying, treating people as mere means to your ends, violating dignity, breaking commitments to those who depended on you. A leader who lies skillfully to produce good outcomes isn't an ethical leader, even if the outcomes are good. The principles matter independently of consequences.`,
            `The case has real strength. Pure consequentialism justifies terrible actions in service of supposedly good outcomes. Some principles need to be protected even when violating them would produce better immediate results, because the social systems that depend on those principles unravel when violations are permitted. Trust requires honesty, even when honesty is costly; if leaders can lie when it serves outcomes, trust dies and all the benefits trust produces die with it.`,
            `Defenders include Immanuel Kant in the 18th century (whose "categorical imperative" was foundational to deontological ethics), contemporary moral philosophers including John Rawls in some respects, much of religious moral tradition, professional ethics (medicine, law, accounting) that constrains practitioners through principles even when violations would produce better immediate outcomes, and many working leaders who emphasize integrity over results.`,
            `Kant's two formulations of the categorical imperative are foundational. First: act only according to maxims you could will to be universal laws. If you'd lie to get out of a difficult situation, would you accept everyone lying when convenient? If not, your lie isn't ethical. Second: treat humanity, in yourself and others, always as an end and never merely as a means. Using people purely for your purposes, even purposes that benefit other people, treats them as means. The two formulations together produce a framework where some actions are wrong regardless of outcomes.`,
            `Contemporary deontological ethics has developed refinements. W. D. Ross identified "prima facie duties" — principles that should be followed unless overridden by stronger moral considerations. Some duties bind more strongly than others in specific situations; the framework allows balancing without abandoning principle-focus. John Rawls's "veil of ignorance" thought experiment derives principles by asking what rules people would choose if they didn't know which position in society they'd occupy.`,
            `The limits. Pure principle-focused ethics can produce decisions that fail real people in service of formal adherence. Refusing to lie when a lie would save innocent lives, refusing to break a promise when keeping it would cause much greater harm, applying universal rules without sensitivity to specific situations. Most thoughtful deontologists have developed refinements (Ross's prima facie duties, distinctions between absolute and defeasible principles), but the underlying tension between principles and consequences is real.`,
          ],
          image: `/voyager-assets/social-leadership/l17-s3-principle.webp`,
          imageCaption: `Position 2: judge by adherence to moral principles. Kant's categorical imperative, Ross's prima facie duties, Rawls. Some actions wrong regardless of outcomes.`,
          vocab: [
            {
              word: `categorical imperative`,
              definition: `Foundational concept in Kantian deontological ethics. Two main formulations. First: act only according to maxims you could will to be universal laws (universalizability test). Second: treat humanity, in yourself and others, always as an end and never merely as a means (humanity formulation). Together they ground ethics in adherence to principles that respect rational agency rather than in calculation of outcomes.`,
              audioPrompt: `The categorical imperative is a foundational concept in Kantian deontological ethics, developed by Immanuel Kant in the 18th century, {name}. The term means a universal moral command — categorical meaning unconditional, imperative meaning command. Two main formulations have been most influential. First: act only according to maxims you could will to be universal laws. The universalizability test. If you'd lie to get out of a difficult situation, would you accept everyone lying when convenient? If not, your lie isn't ethical. The test screens out actions whose ethical justification depends on others not doing the same thing. Second: treat humanity, in yourself and others, always as an end and never merely as a means. The humanity formulation. Using people purely for your purposes, even purposes that benefit other people, treats them as means rather than ends. Together they ground ethics in adherence to principles that respect rational agency. Influential across contemporary moral philosophy. Provides the foundation for "some actions are wrong regardless of outcomes" framing.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Virtue-Focused (Judge By Character)`,
          paragraphs: [
            `The third position: ethical leadership is judged by whether the leader is genuinely virtuous in character. The focus isn't on whether specific actions produced good outcomes or adhered to principles; it's on whether the leader has developed the underlying excellences of character that produce good action across many situations. Courage. Wisdom. Justice. Temperance. Integrity. A person with genuine virtues will usually act well; a person without them will act well only when conditions happen to align with what's right.`,
            `The case has real strength. Real ethical situations are too varied for any specific rule or outcome-calculation to cover. The leader facing a novel hard situation has to decide what to do without a clear formula. What they actually do depends on who they are at that moment — their accumulated virtues or vices, their developed character. Spending decades building virtuous character is what produces good action when frameworks don't tell you what to do.`,
            `Defenders include Aristotle in ancient Greece (whose "Nicomachean Ethics" is foundational), revival of virtue ethics in 20th-century moral philosophy through Alasdair MacIntyre, Philippa Foot, and Martha Nussbaum, Confucian ethics (which emphasizes self-cultivation toward virtue), much of religious moral tradition across cultures, and many working professionals who treat character development as central to ethics.`,
            `Aristotle's framework identified specific virtues that constitute excellence of character. He distinguished "moral virtues" (developed through practice and habit — courage, temperance, justice, generosity) from "intellectual virtues" (developed through teaching and reflection — wisdom, understanding, practical reason). Virtues are means between excesses: courage is the mean between cowardice and recklessness, generosity is the mean between stinginess and wastefulness. The framework focuses on becoming the kind of person who acts well, not on what specific action to take in specific situations.`,
            `Edmund Pellegrino's work on virtue in professional ethics extends Aristotle to contemporary professional situations. Doctors, lawyers, leaders need specific professional virtues that go beyond general moral virtues: fidelity to trust, compassion, fortitude, integrity, prudence. The character framework explains why some professionals consistently act well in hard situations while others don't, even when both know the relevant rules.`,
            `The limits. Pure virtue-focused ethics can fail to provide guidance in specific situations. "What would a virtuous person do?" requires already knowing what virtue looks like in this situation. The framework can also produce circular reasoning: virtues are what virtuous people exemplify; virtuous people are those who have virtues. Critics have argued that virtue ethics doesn't fully address conflicts between virtues (when courage and prudence give different recommendations) or how to evaluate character empirically. Most contemporary virtue ethicists have developed refinements addressing these problems, but the limits are real.`,
          ],
          image: `/voyager-assets/social-leadership/l17-s4-virtue.webp`,
          imageCaption: `Position 3: judge by character. Aristotle, MacIntyre, Nussbaum, Confucian tradition, Pellegrino on professional virtue. Character produces good action across situations.`,
          vocab: [
            {
              word: `virtue ethics`,
              definition: `Ethical tradition focused on excellence of character (virtues) rather than rules or outcomes. Foundational in Aristotle's "Nicomachean Ethics." Identifies specific virtues that constitute excellence: courage, wisdom, justice, temperance, integrity, generosity. Distinguishes moral virtues (developed through practice) from intellectual virtues (developed through teaching). Revived in 20th-century moral philosophy through MacIntyre, Foot, Nussbaum. Has parallels in Confucian and many religious traditions.`,
              audioPrompt: `Virtue ethics is an ethical tradition focused on excellence of character rather than rules or outcomes, {name}. Foundational in Aristotle's "Nicomachean Ethics" in ancient Greece. Aristotle identified specific virtues that constitute excellence of character. Courage. Wisdom. Justice. Temperance. Integrity. Generosity. Virtues are means between excesses: courage is the mean between cowardice and recklessness. Generosity is the mean between stinginess and wastefulness. Aristotle distinguished moral virtues, developed through practice and habit, from intellectual virtues, developed through teaching and reflection. The framework focuses on becoming the kind of person who acts well rather than on what specific action to take in specific situations. Revived in 20th-century moral philosophy through Alasdair MacIntyre, Philippa Foot, and Martha Nussbaum. Has parallels in Confucian ethics, which emphasizes self-cultivation, and many religious traditions across cultures. Edmund Pellegrino's work extends virtue ethics to professional contexts: doctors, lawyers, leaders need specific professional virtues alongside general moral virtues.`,
            },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature ethical thinking engages with all three. Consequences matter; principles matter; character matters. The disagreement is about which is primary, especially in situations where they recommend different actions.`,
            `One framing to consider. Each position implies a different default question when facing hard ethical decisions. Position 1 (consequences): "What will actually produce the best outcome for those affected?" Position 2 (principles): "What principles must I not violate here, regardless of outcomes?" Position 3 (virtue): "What would a person of genuine virtue do in this situation?" Most people have an implicit default. Making it explicit is the first step toward choosing it deliberately.`,
            `Another framing. Each position has historical examples of failure. Consequentialism justified terrible actions during 20th-century wars when leaders calculated that ends would justify means. Deontological adherence to rules has produced absurd or harmful applications in specific situations. Pure virtue-focused tradition has sometimes produced complacency about systemic injustices that pure virtue cultivation didn't address. The failure modes matter when weighing the positions.`,
            `One last framing. You're 12. You'll face thousands of ethical decisions over a lifetime of leadership. The framework you develop now shapes how you approach those decisions. Most adults absorb whatever framework their environment offers. Explicitly engaging with the major traditions, choosing your primary framing while remaining open to insights from others, produces more deliberate ethical practice than absorbing the default.`,
          ],
          image: `/voyager-assets/social-leadership/l17-s5-before.webp`,
          imageCaption: `Three positions, three default questions. Most adults absorb a default framework; explicit choice produces more deliberate ethics.`,
          vocab: [
            {
              word: `ethical pluralism`,
              definition: `View that mature ethical thinking engages with multiple frameworks (consequences, principles, virtue) rather than committing fully to one. Different frameworks illuminate different aspects of ethical situations. Real ethical reasoning often combines elements: respecting principles AND attending to outcomes AND drawing on character. The framework you default to in hard situations shapes reasoning, but engaging with multiple traditions produces fuller ethical practice.`,
              audioPrompt: `Ethical pluralism is the view that mature ethical thinking engages with multiple frameworks rather than committing fully to one, {name}. Consequences matter. Principles matter. Character matters. Different frameworks illuminate different aspects of ethical situations. Real ethical reasoning often combines elements: respecting principles like honesty and dignity, AND attending to actual outcomes for people affected, AND drawing on character formed through years of practice. The frameworks aren't always consistent; they sometimes recommend opposite actions in the same situation. The framework you default to in hard situations shapes your reasoning significantly, but engaging with multiple traditions usually produces fuller ethical practice than dogmatic commitment to any single one. Most contemporary applied ethicists are pluralists in practice even when they have theoretical preferences. For 12-year-olds, the lesson: pick a primary framing because you have to default to something in hard moments, but maintain genuine engagement with other traditions because each catches things others miss.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l17-argument-builder`,
          type: `argument-builder`,
          headline: `What Makes Leadership Ethical?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious moral philosophers defend each.`,
          positions: [
            {
              id: `consequences`,
              label: `Consequences-focused: judge leadership by outcomes produced for those affected`,
              summary: `Ethical leadership is judged by what it actually produces. The point of leadership is to make things better for people; ethics should be judged by whether it does. Defenders include Jeremy Bentham and John Stuart Mill (utilitarianism), contemporary moral philosophy (Peter Singer), public policy traditions, stakeholder-focused business ethics. Strength: empirical grounding, refuses to let principle-purity obscure real human costs. Limit: "ends justify means" reasoning can justify terrible actions; measuring outcomes harder than framework assumes; can violate widely-shared intuitions about justice.`,
            },
            {
              id: `principles`,
              label: `Principle-focused: judge by adherence to moral principles regardless of outcomes`,
              summary: `Some actions are wrong even if they would produce good outcomes: lying, treating people as mere means, violating dignity, breaking commitments. Defenders include Immanuel Kant (categorical imperative), W. D. Ross (prima facie duties), John Rawls (in some respects), religious moral traditions, professional ethics (medicine, law). Strength: protects principles that social systems depend on (trust requires honesty even when costly); prevents "ends justify means" abuses. Limit: can produce decisions that fail real people in service of formal adherence; pure rule-following without sensitivity to specific situations.`,
            },
            {
              id: `virtue`,
              label: `Virtue-focused: judge by whether the leader is genuinely virtuous in character`,
              summary: `Real ethical situations are too varied for rules or outcome-calculations to cover. What leaders actually do in novel hard situations depends on their accumulated character — virtues like courage, wisdom, justice, integrity. Defenders include Aristotle (foundational), MacIntyre, Foot, Nussbaum (20th-century revival), Confucian tradition, Pellegrino on professional virtue. Strength: addresses how leaders actually decide in novel situations; produces good action across many situations rather than requiring framework-application in each; addresses character development as ethical practice. Limit: requires already knowing what virtue looks like; circular reasoning risk; doesn't fully address conflicts between virtues.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Consequentialism's empirical grounding is real: you can usually measure outcomes more clearly than you can adjudicate competing principles. Public policy traditions and contemporary moral philosophy have developed sophisticated frameworks for measuring and comparing outcomes that other frameworks struggle to provide.`,
              source: `Mill, Bentham, contemporary utilitarianism including Singer`,
            },
            {
              id: `e2`,
              text: `Many ethical frameworks have been used to justify terrible actions because the actions followed the rules. Consequentialism's insistence on asking whether rules actually serve the people they're supposed to protect catches abuses other frameworks miss.`,
              source: `Historical and contemporary ethics analysis`,
            },
            {
              id: `e3`,
              text: `Kant's categorical imperative provides foundational ground for principle-focused ethics. The universalizability test ("could you accept everyone doing what you're considering?") and humanity formulation ("treat people as ends not means") together produce a framework where some actions are wrong regardless of outcomes.`,
              source: `Kant 18th century and contemporary Kantian ethics`,
            },
            {
              id: `e4`,
              text: `Trust requires principles like honesty being maintained even when violations would produce better immediate outcomes. If leaders lie when it serves outcomes, trust dies and all the benefits trust produces die with it. The social systems depending on principles unravel when violations are permitted.`,
              source: `Trust research and social philosophy`,
            },
            {
              id: `e5`,
              text: `Aristotle's virtue ethics has been foundational since ancient Greece and has been revived in 20th-century moral philosophy through MacIntyre, Foot, and Nussbaum. The framework focuses on character development as the foundation of ethical action across many situations.`,
              source: `Aristotle and 20th-century virtue ethics revival`,
            },
            {
              id: `e6`,
              text: `Real ethical situations are too varied for any rule or outcome-calculation to cover. The leader facing a novel hard situation decides based on who they are at that moment. What they actually do depends on their accumulated virtues or vices.`,
              source: `Practical ethics and virtue ethics literature`,
            },
            {
              id: `e7`,
              text: `Most thoughtful ethicists develop refinements within their frameworks: rule consequentialism (rather than act consequentialism), Ross's prima facie duties (allowing balancing between principles), virtue ethics with explicit attention to conflicts between virtues. The refinements address the most common objections to pure forms.`,
              source: `Contemporary moral philosophy`,
            },
            {
              id: `e8`,
              text: `Ethical pluralism (engaging with multiple frameworks) is the actual practice of most contemporary applied ethicists even when they have theoretical preferences. Different frameworks illuminate different aspects of ethical situations; real reasoning often combines elements rather than committing fully to one.`,
              source: `Applied ethics literature`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume ethics is something a leader can reason their way to through frameworks. But maybe that's wrong. Maybe ethical action emerges from intuition, relationships, and embedded community rather than from explicit framework-application. Carol Gilligan's research on care ethics, communitarian critiques of liberal ethics, indigenous ethical traditions all challenge the framework-application model. They argue that real ethical knowledge comes from being embedded in specific relationships and communities, not from applying abstract principles. If that's right, the entire framing of 'pick your ethical framework' might miss the point — the right move might be to develop deep relationships and community embeddedness rather than to commit to any of the three philosophical traditions. Why think framework-application is even the right approach, when the real ethical knowledge may come from elsewhere entirely?"`,
            promptInstruction: `In 3-4 sentences, respond. Is framework-application the right approach to ethics, or is it missing something care ethics and communitarian traditions get right? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the three major ethical traditions?`,
              options: [
                `Random list`,
                `Consequentialism (right action determined by outcomes — best results justify action, includes utilitarianism); deontology (some principles must be followed regardless of outcomes — associated with Kant); virtue ethics (right action is what virtuous person of good character would do — associated with Aristotle and revived in 20th century)`,
                `Three rules`,
                `Different beliefs`,
              ],
              correctIndex: 1,
              explanation: `Each tradition has been developed and defended by serious moral philosophers across centuries. Each has insights the others miss. Each has limits where it produces conclusions most people find wrong. Real ethical thinking usually involves engaging with multiple frameworks.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the distinction between rule consequentialism and act consequentialism?`,
              options: [
                `Same thing`,
                `Act consequentialism: each individual action judged by its specific outcomes. Rule consequentialism: rules and policies judged by what outcomes they produce when consistently applied; individual exceptions may produce better immediate outcomes but undermine the rule system that produces better overall outcomes; most thoughtful consequentialists default to rule consequentialism`,
                `Random distinction`,
                `Different words`,
              ],
              correctIndex: 1,
              explanation: `Pure act consequentialism is hard to apply reliably in real time and people can rationalize almost any action as "the right exception in this case." Rule consequentialism preserves predictability while still grounding rules in outcomes.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is Kant's "categorical imperative"?`,
              options: [
                `Random concept`,
                `Foundational concept in Kantian deontological ethics; two main formulations — universalizability test ("act only according to maxims you could will to be universal laws") and humanity formulation ("treat humanity always as an end, never merely as a means"); grounds ethics in adherence to principles that respect rational agency`,
                `Direct command`,
                `Strong opinion`,
              ],
              correctIndex: 1,
              explanation: `The universalizability test screens out actions whose ethical justification depends on others not doing the same thing. The humanity formulation prevents using people purely for your purposes. Together they ground "some actions are wrong regardless of outcomes" framing.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the consequences-focused position argue?`,
              options: [
                `Be results-oriented`,
                `Ethical leadership is judged by outcomes produced for those affected; point of leadership is to make things better for people; ethics judged by whether it does. Defenders include Bentham, Mill, contemporary utilitarianism. Strength: empirical grounding, refuses to let principle-purity obscure real human costs. Limit: "ends justify means" can justify terrible actions`,
                `Money matters`,
                `Random position`,
              ],
              correctIndex: 1,
              explanation: `The position has real strength because consequences matter; ignoring outcomes in favor of principle-purity sometimes produces decisions that look good on paper but devastate real human lives. Pure consequences-focus, though, can justify terrible actions in service of supposedly good outcomes.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the principle-focused position argue?`,
              options: [
                `Follow rules`,
                `Ethical leadership is judged by adherence to moral principles regardless of outcomes; some actions are wrong even if they would produce good results (lying, treating people as mere means, violating dignity); defenders include Kant, Ross's prima facie duties, Rawls in some respects, religious moral traditions, professional ethics`,
                `Be rigid`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `Trust requires principles being maintained even when violations would produce better immediate outcomes. The social systems depending on principles unravel when violations are permitted. Limit: can produce decisions that fail real people in service of formal adherence.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "virtue ethics" (Aristotle and revival)?`,
              options: [
                `Just being good`,
                `Ethical tradition focused on excellence of character (virtues) rather than rules or outcomes; Aristotle's foundation; identifies specific virtues (courage, wisdom, justice, temperance, integrity, generosity); virtues are means between excesses (courage is mean between cowardice and recklessness); revived in 20th century through MacIntyre, Foot, Nussbaum`,
                `Old philosophy`,
                `Random theory`,
              ],
              correctIndex: 1,
              explanation: `Aristotle distinguished moral virtues (developed through practice and habit) from intellectual virtues (developed through teaching and reflection). Framework focuses on becoming the kind of person who acts well rather than on what specific action to take in specific situations.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "ethical pluralism"?`,
              options: [
                `Random concept`,
                `View that mature ethical thinking engages with multiple frameworks (consequences, principles, virtue) rather than committing fully to one; different frameworks illuminate different aspects of ethical situations; real reasoning often combines elements; most contemporary applied ethicists are pluralists in practice even when they have theoretical preferences`,
                `Believing many things`,
                `Confused thinking`,
              ],
              correctIndex: 1,
              explanation: `The lesson: pick a primary framing because you have to default to something in hard moments, but maintain genuine engagement with other traditions because each catches things others miss. Engaging with multiple frameworks produces fuller ethical practice than dogmatic commitment to any single one.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why might the right ethical framework depend on context?`,
              options: [
                `Random factor`,
                `Each framework has historical examples of failure when applied alone; consequentialism justified terrible actions when leaders calculated ends justify means; deontological rules have been absurd or harmful in specific situations; pure virtue-focus has sometimes produced complacency about systemic injustices; failure modes matter when weighing positions`,
                `Different cultures`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Most mature ethical thinking engages with all three. Consequences matter, principles matter, character matters. The disagreement is about which is primary, especially in situations where they recommend different actions.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three ethical positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders, real strengths, and real limits. Real ethical thinking usually involves engaging with multiple frameworks rather than committing fully to one. The framework you default to in hard situations shapes your reasoning, but engaging with multiple traditions usually produces fuller ethical practice.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Lying is always wrong because the Bible/my parents/principle says so. Even if a lie would save a life, it's still wrong." Based on this lesson, what should you point out?`,
              options: [
                `"You're right"`,
                `"That's close to a pure principle-focused position, and there's a serious version of it (Kant's framework defends it). But even most deontologists don't take that extreme position. W. D. Ross developed 'prima facie duties' specifically to address this: principles bind unless overridden by stronger moral considerations. The duty not to lie is real but can be outweighed by the duty to prevent serious harm. Most ethical traditions agree that lying to save innocent lives is acceptable, even when they disagree about almost everything else. Pure principle-focus without ability to balance produces conclusions most thoughtful people across many traditions find wrong. You can be principle-focused as a primary framing while still engaging with how principles interact in specific cases. The mature version isn't 'lying is always wrong'; it's 'lying is wrong by default and the burden of justification is high to override that — but it CAN be overridden by sufficiently weighty considerations.'"`,
                `"Lie freely"`,
                `"Different answer"`,
              ],
              correctIndex: 1,
              explanation: `Real applied ethical reasoning. Don't dismiss the friend's framework; engage with what its strongest version actually allows. Reference Ross's prima facie duties to show how to maintain principle-focus while allowing balancing. This is how you help a friend develop more sophisticated ethical reasoning rather than abandoning their values.`,
            },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for ethical decisions? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which framework do you currently default to? Was it explicitly chosen or absorbed?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with deliberate ethical reasoning across thousands of decisions over a lifetime, what does that change about your impact and integrity?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current ethical question in your life. Apply all three positions. Which gives the clearest guidance?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Where do the three frameworks recommend incompatible actions? How do you decide between them when they conflict?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pick one ethically complex situation in current news. Apply the three frameworks. What does each suggest?` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Ethical framework shapes how you'll approach thousands of decisions over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Ethics Conversation`,
            duration: `45 minutes`,
            description: `Share the three frameworks. Ask family members about an ethically complex situation they've faced (work decision, relationship choice, community question). Apply all three frameworks together: what does consequences-focus suggest, what does principle-focus suggest, what does virtue-focus suggest? Most family members will discover they've been operating with an implicit framework without explicit examination. The conversation often surfaces real differences in how family members approach ethics.`,
          },
          projectOption: {
            title: `Read accessible ethics introduction, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Michael Sandel's "Justice: What's the Right Thing to Do?" (2009, accessible introduction to ethical traditions through specific cases), or a virtue ethics work like Susan Wolf's writing, or a contemporary deontological work like Christine Korsgaard. All accessible at 12 with attention. Apply the frameworks to ethical questions you encounter during the reading period. Write 1,500 words on what you learned and which framing fits your thinking.`,
            offerToParent: `Parent: opt your kid into this project. Reading real moral philosophy at 12 produces durable ethical literacy.`,
          },
          identityQuestion: `If you become someone with deliberate engagement with multiple ethical frameworks across thousands of decisions over a lifetime, what does that change about both your impact and your integrity?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can apply consequences, principles, AND virtue framings to hard situations.`,
            `A person who chose my primary ethical framework deliberately rather than absorbing one.`,
            `Someone who maintains ethical pluralism while still being able to decide in hard moments.`,
          ],
          saveKey: `identity_responses_sl_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventeenth Social Leadership lesson done. You now have three major ethical traditions: consequentialism (Bentham, Mill, Singer), deontology (Kant, Ross, Rawls), virtue ethics (Aristotle, MacIntyre, Nussbaum, Confucian tradition). You can articulate the strengths and limits of each, recognize the value of ethical pluralism, and apply multiple frameworks to specific ethical situations. Most adults absorb whatever framework their environment offers; you have deliberate engagement with the major traditions. Next time we go into one of the most important questions: leading yourself first. Three positions. Argument Builder format. Let's go. — Valor`,
          badge: `ethical-leader`,
          badgeName: `Ethical Leader`,
          xpEarned: 75,
          competencies: [
            `Articulates three major ethical traditions (consequentialism, deontology, virtue ethics)`,
            `Knows major thinkers: Bentham, Mill, Singer, Kant, Ross, Rawls, Aristotle, MacIntyre, Nussbaum`,
            `Distinguishes rule consequentialism from act consequentialism`,
            `Understands Kant's categorical imperative in both formulations`,
            `Recognizes ethical pluralism as mature practice while still having primary framework`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: Leading Yourself First`,
            hook: `Three positions. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L17 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
