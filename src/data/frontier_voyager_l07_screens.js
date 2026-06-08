// ─────────────────────────────────────────────────────────────────────────────
// FRONTIER & PHILOSOPHY VOYAGER  |  L07 — Ethics: Utilitarianism vs Deontology
// Age band : voyagers (11-12)   Guide: orion (Phoenix)
// Standards: Coreverse Original — Philosophy, Ethics/Moral Philosophy, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// SUBJECT NOTE — Frontier & Philosophy:
//   - Real moral philosophy. These are genuinely competing serious frameworks; honesty tier 3
//     (positions thinkers defend) with real, persisting disagreement. Present each as the
//     strongest case its defenders make; do not crown a winner.
//   - The title pits utilitarianism vs deontology, but include virtue ethics + care ethics as
//     serious additional frameworks, and moral relativism as a contrast voice to examine (not
//     endorse). Treat "is morality just opinion?" honestly: the lesson can show why most
//     philosophers reject pure relativism without claiming certainty.
//   - Connects to the backbone: ethical reasoning is where "the ends justify the means" and
//     other dangerous shortcuts live; the lesson flags how each framework can be abused.
//   - Term: "philosophical question." "Frontier" is the subject/guide brand.
//   - Em-dashes natural; do NOT run em-dash replacement on Frontier files.
//
// Interaction format: PERSPECTIVES (competing moral frameworks, real thinkers). Contract
// matches <Perspectives />: perspectives[] with id/voice/era/stance/quote/argument/evidence/
// strengths_and_limits; synthesisPrompt + reflectionPrompt. MUST render via <Perspectives />.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-frontier-l07-v1";

const FRONTIER_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `frontier`,
  guide: `orion`,

  lessons: [
    {
      id: `fp-11-12-07`,
      title: `Ethics: Utilitarianism vs Deontology`,
      duration: 35,
      xpReward: 75,
      badge: `ethics-initiate`,
      badgeName: `Ethics Initiate`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}. Last lesson asked how to organize society. Now the question moves closer: how should you act? Utilitarianism says maximize overall wellbeing. Kant's deontology says follow universal principles regardless of consequences. Virtue ethics says become a person of good character. These frameworks don't always agree — and working out why they diverge on hard cases is exactly what ethical reasoning requires. This lesson builds that capacity.`,
          headline: `Ethics: Utilitarianism vs Deontology`,
          subtitle: `How should you decide what's right — by the results, or by the rule? Perspectives.`,
          visual: `/voyager-assets/frontier/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Ethics Is (And Isn't)`,
          paragraphs: [
            `Ethics, also called moral philosophy, is the study of how we should live and act — what makes an action right or wrong, what we owe to each other, and what it means to be a good person. It is one of the oldest branches of philosophy because it answers a question no one can avoid: you have to act, every day, and your actions affect others, so the question "what should I do, and why?" is unavoidable whether or not you ever study it formally. Studying ethics does not give you new obligations; it helps you think clearly about the ones you already have.`,
            `First, clear away three common confusions about what ethics is NOT, because each one quietly substitutes an easier question for the real one. Ethics is not the same as the law: many legal things are wrong (cruelty that breaks no law) and some illegal things may be right (think of people who broke unjust laws to protect others), so "is it legal?" and "is it right?" are different questions. Ethics is not the same as "whatever my society or group approves of": societies have approved of terrible things, and the whole point of moral thinking is to be able to ask whether what your group accepts is actually right, rather than assuming it must be. And ethics is not the same as religion, although for many people the two are deeply connected: ethical reasoning is something believers and non-believers can do together, asking what we owe each other and why in terms anyone can examine, which is exactly what makes shared moral conversation possible across different backgrounds.`,
            `So what is ethics really after? It is the attempt to think carefully and honestly about right and wrong — to find reasons, not just feelings or rules handed down unexamined, for why some actions are better than others. That matters because "it felt right," "it's the law," "everyone does it," and "my group says so" are all ways of avoiding the real question rather than answering it. None of them is automatically the same as "it is right." Ethics asks you to go further: to look for genuine reasons that could be examined, questioned, and defended — which is the same move you have been practicing all band, now aimed at the most practical question of all. And here is the encouraging part: you already do ethics constantly, every time you wonder whether something is fair, feel that something is wrong, or try to do right by someone. This lesson just hands you better tools for a thing you cannot help doing anyway.`,
          ],
          image: `/voyager-assets/frontier/l07-s1-whatis.webp`,
          imageCaption: `ETHICS (moral philosophy): the study of how we should live and act — what makes an action right or wrong, what we owe each other, what it means to be good. Unavoidable: you have to act every day, and your actions affect others. Studying ethics doesn't give new obligations; it helps you think clearly about ones you already have. What ethics is NOT (three confusions that swap an easier question for the real one): NOT the law (cruelty can be legal; breaking unjust laws can be right — "is it legal?" ≠ "is it right?"); NOT "whatever my society/group approves" (societies have approved terrible things; moral thinking lets you ASK whether what your group accepts is actually right); NOT the same as religion (though often connected — ethical reasoning is something believers and non-believers can do together, in terms anyone can examine). What ethics IS after: thinking carefully and honestly about right and wrong, finding REASONS — not just "it felt right," "it's the law," "everyone does it," "my group says so," all of which avoid the real question. And you already do ethics constantly — this just hands you better tools.`,
          vocab: [
            {
              word: `is isnt`,
              definition: `Ethics, also called moral philosophy, is the study of how we should live and act: what makes an action right or wrong, what we owe to each other, and what it means to be a good person. It is one of the oldest branches of philosophy because it answers an unavoidable question, since you have to act every day and your actions affect others, so "what should I do, and why?" confronts everyone whether or not they study it formally, and studying ethics does not give you new obligations but helps you think clearly about the ones you already have. It helps to clear away three confusions about what ethics is not, because each substitutes an easier question for the real one. Ethics is not the same as the law, since many legal things are wrong (cruelty that breaks no law) and some illegal things may be right (people who broke unjust laws to protect others), so "is it legal?" and "is it right?" are different questions. Ethics is not the same as "whatever my society or group approves of," since societies have approved terrible things and the whole point of moral thinking is being able to ask whether what your group accepts is actually right rather than assuming it must be. And ethics is not the same as religion, though for many they are deeply connected, because ethical reasoning is something believers and non-believers can do together, asking what we owe each other and why in terms anyone can examine, which makes shared moral conversation possible across different backgrounds. What ethics is really after is the attempt to think carefully and honestly about right and wrong, finding reasons rather than just feelings or unexamined rules for why some actions are better than others, because "it felt right," "it's the law," "everyone does it," and "my group says so" are all ways of avoiding the real question rather than answering it, none being automatically the same as "it is right." Ethics asks you to look for genuine reasons that can be examined, questioned, and defended, which is the band's core move aimed at the most practical question of all, and the encouraging part is that you already do ethics constantly whenever you wonder whether something is fair or try to do right by someone, so this lesson just hands you better tools for something you cannot help doing anyway.`,
              audioPrompt: `Ethics, also called moral philosophy, is the study of how we should live and act, {name}: what makes an action right or wrong, what we owe to each other, and what it means to be a good person. It answers a question no one can avoid: you have to act, every day, and your actions affect others, so "what should I do, and why?" is unavoidable whether or not you study it. Studying ethics does not give you new obligations; it helps you think clearly about the ones you already have. First, clear away three confusions about what ethics is not. Ethics is not the same as the law: many legal things are wrong, and some illegal things may be right, like breaking an unjust law to protect others. So "is it legal?" and "is it right?" are different questions. Ethics is not the same as whatever your society or group approves of: societies have approved of terrible things, and the whole point of moral thinking is being able to ask whether what your group accepts is actually right. And ethics is not the same as religion, although for many people the two are deeply connected, because ethical reasoning is something believers and non-believers can do together, in terms anyone can examine. So what is ethics really after? It is the attempt to think carefully and honestly about right and wrong, to find reasons, not just feelings or rules handed down unexamined, for why some actions are better than others. Because "it felt right," "it's the law," "everyone does it," and "my group says so" are all ways of avoiding the real question rather than answering it. And here is the encouraging part: you already do ethics constantly, every time you wonder whether something is fair or try to do right by someone. This lesson just hands you better tools for a thing you cannot help doing anyway.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Judge By Results: Utilitarianism`,
          paragraphs: [
            `The first great answer to "what makes an action right?" says: look at the results. This family of views is called consequentialism, and its most famous version is utilitarianism, developed by the English thinkers Jeremy Bentham and John Stuart Mill in the 1800s. Its core idea is elegant and intuitive: the right action is the one that produces the most good — the greatest well-being or happiness, and the least suffering — for the greatest number of people, counting everyone's well-being equally. To decide what to do, you weigh the likely consequences and choose whatever does the most good overall.`,
            `There is something genuinely powerful here, and it is worth feeling the pull of before you hear the criticisms. Utilitarianism takes seriously that suffering and happiness really matter — that the actual effects of our actions on real, feeling beings are what ethics should care about, not abstract rules for their own sake. It is admirably impartial: it counts everyone's well-being equally, refusing to say that your happiness matters more than a stranger's just because it is yours, which is a radical and humane idea. It gives a clear method for hard decisions — weigh the consequences — and it has genuinely driven moral progress, pushing people to reduce suffering they might otherwise have ignored, to widen the circle of who "counts," and to ask of any practice, "but does this actually make things better or worse for the beings it affects?" When you argue that a policy is good because it helps more people than it hurts, you are thinking like a utilitarian, and often rightly.`,
            `But utilitarianism runs into serious problems, and they are exactly the kind a clear thinker must see. First, it can seem to justify terrible things to individuals if the math "works out" — if harming one innocent person would somehow produce more total happiness for many others, pure utilitarianism appears to permit or even require it, which collides hard with our strong sense that some things you simply may not do to a person, even for a greater good. Second, consequences are genuinely hard to predict, so "do whatever produces the most good" can be hard to apply honestly, and it is dangerously easy to convince yourself that what you wanted to do anyway happens to produce the best results (motivated reasoning, wearing an ethical disguise). Third, and most importantly for your protection: "the ends justify the means" is the utilitarian idea in its most dangerous form, and it is the reasoning behind some of history's worst acts, where people excused real cruelty by pointing to a glorious future benefit that often never came. Real, careful utilitarians have answers to these worries, and the framework remains genuinely valuable — but you must hold it with eyes open to how its logic can be twisted into a justification for harming people.`,
          ],
          image: `/voyager-assets/frontier/l07-s2-utilitarian.webp`,
          imageCaption: `First great answer to "what makes an action right?": look at the RESULTS. This family is CONSEQUENTIALISM; its famous version is UTILITARIANISM (Bentham & Mill, 1800s). Core idea: the right action produces the most good — greatest well-being/happiness, least suffering — for the greatest number, counting everyone equally. Decide by weighing likely consequences. The genuine power: it takes suffering and happiness seriously (real effects on feeling beings, not abstract rules); it's impartial (your happiness doesn't count more than a stranger's); it gives a clear method; and it's driven real moral progress (reducing ignored suffering, widening who "counts"). The serious problems: (1) it can seem to justify terrible things to individuals if the "math works out" (harming one innocent for many's happiness) — colliding with "some things you simply may not do to a person"; (2) consequences are hard to predict, and easy to rig toward what you wanted anyway (motivated reasoning in disguise); (3) most important for protection: "THE ENDS JUSTIFY THE MEANS" is its most dangerous form — behind some of history's worst acts. Valuable, but hold it eyes-open.`,
          vocab: [
            {
              word: `justify means`,
              definition: `The first great answer to "what makes an action right?" says look at the results: this family of views is called consequentialism, and its most famous version is utilitarianism, developed by Jeremy Bentham and John Stuart Mill in the 1800s, with the core idea that the right action is the one producing the most good (the greatest well-being or happiness and the least suffering) for the greatest number, counting everyone's well-being equally, so you decide by weighing likely consequences and choosing whatever does the most good overall. Its genuine power is worth feeling before the criticisms: it takes seriously that suffering and happiness really matter, focusing on the actual effects of actions on real feeling beings rather than abstract rules for their own sake; it is admirably impartial, counting everyone's well-being equally and refusing to say your happiness matters more than a stranger's just because it is yours; it gives a clear method for hard decisions; and it has genuinely driven moral progress by pushing people to reduce ignored suffering, widen the circle of who counts, and ask whether a practice actually makes things better or worse for those it affects. But it runs into serious problems a clear thinker must see. First, it can seem to justify terrible things to individuals if the math "works out," since harming one innocent person to produce more total happiness for many appears permitted or even required, colliding with our strong sense that some things you simply may not do to a person even for a greater good. Second, consequences are hard to predict, so "do whatever produces the most good" is hard to apply honestly and dangerously easy to rig toward what you wanted to do anyway (motivated reasoning in ethical disguise). Third and most important for protection, "the ends justify the means" is the utilitarian idea in its most dangerous form and the reasoning behind some of history's worst acts, where people excused real cruelty by pointing to a glorious future benefit that often never came. Careful utilitarians have answers and the framework remains valuable, but it must be held with eyes open to how its logic can be twisted into a justification for harming people.`,
              audioPrompt: `The first great answer to "what makes an action right?" says: look at the results, {name}. This family of views is called consequentialism, and its most famous version is utilitarianism, developed by the English thinkers Jeremy Bentham and John Stuart Mill in the 1800s. Its core idea is elegant: the right action is the one that produces the most good, the greatest well-being or happiness, and the least suffering, for the greatest number of people, counting everyone's well-being equally. To decide what to do, you weigh the likely consequences and choose whatever does the most good overall. There is something genuinely powerful here. Utilitarianism takes seriously that suffering and happiness really matter, not abstract rules for their own sake. It is admirably impartial: it counts everyone's well-being equally, refusing to say your happiness matters more than a stranger's just because it is yours. And it has genuinely driven moral progress, pushing people to reduce suffering they might otherwise ignore. When you argue a policy is good because it helps more people than it hurts, you are thinking like a utilitarian, often rightly. But it runs into serious problems. First, it can seem to justify terrible things to individuals if the math works out: if harming one innocent person would produce more total happiness for many, pure utilitarianism appears to permit it, which collides with our sense that some things you simply may not do to a person. Second, consequences are hard to predict, and it is dangerously easy to convince yourself that what you wanted to do anyway happens to produce the best results. Third, and most important for your protection: "the ends justify the means" is the utilitarian idea in its most dangerous form, and it is the reasoning behind some of history's worst acts, where people excused real cruelty by pointing to a glorious future benefit that often never came. Hold this framework with your eyes open.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Judge By The Rule: Deontology`,
          paragraphs: [
            `The second great answer says the opposite: some actions are right or wrong in themselves, regardless of their consequences, because of the kind of action they are. This family is called deontology (from the Greek for "duty"), and its most famous champion is the German philosopher Immanuel Kant, writing in the 1700s. On this view, morality is about duties and principles that hold no matter how the results turn out — some things are simply wrong to do, even if doing them would produce good consequences, and some things are required even when they are costly.`,
            `Kant offered a famous test for whether an action is moral, and it is worth understanding because it captures something deep. The first version: act only in a way you could honestly want to become a universal rule for everyone. Ask, "what if everyone did this?" — if you cannot consistently want the rule applied to all (for example, "everyone should lie when convenient" collapses, because if everyone lied, trust and language itself would break down), then the action is wrong. The second, even more powerful version: always treat people as ends in themselves, never merely as means to an end. That means you must respect each person as a being with their own worth and purposes — you cannot just use people as tools or stepping-stones for your goals, however good those goals seem. This is the deep core of deontology: human dignity is not for sale, and certain ways of treating people are simply off-limits, full stop.`,
            `Feel the genuine strength here, because it captures what utilitarianism seems to miss: deontology explains our powerful conviction that some things are just wrong, no matter the payoff — that you cannot, for instance, frame and execute one innocent person even to make a crowd happy, because that violates their dignity, period. It protects the individual from being sacrificed to the math, it provides firm moral limits that do not bend to whoever is best at arguing that the ends justify the means, and it honors human dignity as something with absolute worth. But deontology has its own serious problems, in fairness to the other side. Strict rules can clash — what do you do when two duties genuinely conflict, like "never lie" versus "protect an innocent life," in the classic case of lying to a murderer about where their victim is hiding? Rigidly following a rule regardless of consequences can sometimes lead to outcomes that seem clearly worse and even cruel, which is exactly where the consequences-matter intuition pushes back hard. And deciding which rules are truly absolute, and how to handle the exceptions, turns out to be genuinely difficult. Like utilitarianism, deontology captures something true and runs into something hard — which is precisely why the debate between them never fully ends.`,
          ],
          image: `/voyager-assets/frontier/l07-s3-deontology.webp`,
          imageCaption: `Second great answer: some actions are right or wrong IN THEMSELVES, regardless of consequences, because of the kind of action they are. This family is DEONTOLOGY (Greek for "duty"); its champion is IMMANUEL KANT (1700s). Morality is about duties and principles that hold no matter the results — some things are simply wrong even if they'd produce good outcomes. Kant's test, two versions: (1) act only in a way you could honestly want to become a UNIVERSAL RULE for everyone — "what if everyone did this?" ("everyone lies when convenient" collapses, since trust and language would break down); (2) the more powerful one: always treat people as ENDS IN THEMSELVES, never merely as MEANS — respect each person's own worth, never just use them as tools. The deep core: human dignity isn't for sale. The genuine strength: it explains our conviction that some things are just wrong no matter the payoff (you can't frame an innocent to please a crowd), protecting the individual from being sacrificed to the math. The serious problems: rules can clash (never lie vs. protect a life — lying to a murderer?); rigid rule-following can give cruel outcomes; and deciding which rules are truly absolute is genuinely hard. Like utilitarianism: captures something true, hits something hard.`,
          vocab: [
            {
              word: `people ends`,
              definition: `The second great answer says the opposite of utilitarianism: some actions are right or wrong in themselves, regardless of their consequences, because of the kind of action they are. This family is called deontology (from the Greek for "duty"), and its most famous champion is Immanuel Kant, writing in the 1700s; on this view morality is about duties and principles that hold no matter how results turn out, so some things are simply wrong to do even if doing them would produce good consequences, and some things are required even when costly. Kant offered a famous test in two versions. The first: act only in a way you could honestly want to become a universal rule for everyone, asking "what if everyone did this?" — if you cannot consistently want the rule applied to all, the action is wrong (for example "everyone should lie when convenient" collapses, since if everyone lied, trust and language itself would break down). The second and more powerful version: always treat people as ends in themselves, never merely as means to an end, respecting each person as a being with their own worth and purposes rather than using them as tools or stepping-stones for your goals however good those goals seem; this is the deep core, that human dignity is not for sale and certain ways of treating people are simply off-limits. Its genuine strength is that it captures what utilitarianism seems to miss: our powerful conviction that some things are just wrong no matter the payoff (you cannot frame and execute one innocent person even to make a crowd happy, because that violates their dignity), so it protects the individual from being sacrificed to the math, provides firm limits that do not bend to whoever argues best that the ends justify the means, and honors human dignity as having absolute worth. But it has serious problems too: strict rules can clash, raising the question of what to do when two duties genuinely conflict (like "never lie" versus "protect an innocent life" when lying to a murderer about a victim's location); rigidly following a rule regardless of consequences can sometimes lead to outcomes that seem clearly worse and even cruel, which is where the consequences-matter intuition pushes back; and deciding which rules are truly absolute and how to handle exceptions is genuinely difficult. Like utilitarianism, deontology captures something true and runs into something hard, which is why the debate between them never fully ends.`,
              audioPrompt: `The second great answer says the opposite, {name}: some actions are right or wrong in themselves, regardless of their consequences, because of the kind of action they are. This family is called deontology, from the Greek for "duty," and its most famous champion is the German philosopher Immanuel Kant, writing in the 1700s. On this view, morality is about duties and principles that hold no matter how the results turn out: some things are simply wrong to do, even if doing them would produce good consequences. Kant offered a famous test. The first version: act only in a way you could honestly want to become a universal rule for everyone. Ask, "what if everyone did this?" If you cannot consistently want the rule applied to all, like "everyone should lie when convenient," which collapses because if everyone lied, trust itself would break down, then the action is wrong. The second, even more powerful version: always treat people as ends in themselves, never merely as means to an end. You must respect each person as a being with their own worth, not just use them as tools for your goals, however good those goals seem. This is the deep core: human dignity is not for sale. Feel the strength here: deontology explains our conviction that some things are just wrong no matter the payoff, that you cannot frame and execute one innocent person even to make a crowd happy. It protects the individual from being sacrificed to the math. But it has its own problems. Strict rules can clash: what do you do when "never lie" conflicts with "protect an innocent life"? Rigidly following a rule regardless of consequences can sometimes lead to outcomes that seem clearly worse, even cruel. And deciding which rules are truly absolute is genuinely difficult. Like utilitarianism, deontology captures something true and runs into something hard, which is why the debate never fully ends.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `More Than Two Answers — And Is It All Just Opinion?`,
          paragraphs: [
            `Utilitarianism and deontology are the famous rivals, but they are not the only serious answers, and two more are worth knowing because they capture things both can miss. Virtue ethics, going back to the ancient Greek philosopher Aristotle, shifts the question from "what should I do?" to "what kind of person should I become?" Instead of focusing only on individual actions and their rules or results, it asks about character — courage, honesty, kindness, wisdom, justice — and holds that the good life comes from cultivating good character traits (virtues) and that a good person, well-trained in practical wisdom, will tend to do the right thing in situations no rulebook could fully anticipate. Care ethics adds another vital piece, emphasizing that morality is deeply rooted in relationships, empathy, and our responsibilities to particular people we are connected to — that real ethics is not only abstract rules and calculations but also the concrete care we owe to those who depend on us, which the colder, more abstract frameworks can underrate.`,
            `Notice something important about all four: they are less like rival teams and more like different lenses, each bringing one real feature of morality into focus. Consequences genuinely matter (utilitarianism is right about that). Some things really are off-limits regardless of consequences (deontology is right about that). Character and practical wisdom genuinely matter (virtue ethics is right about that). And our concrete relationships and care genuinely matter (care ethics is right about that). Many thoughtful people end up drawing on more than one — using consequences to weigh options, firm principles to mark the lines they will not cross, and good character to guide the countless situations no rule fully covers. You do not necessarily have to pick exactly one and defend it to the death; part of moral maturity is knowing which lens a situation calls for.`,
            `But this raises the question lurking under the whole lesson, and it deserves an honest answer: is morality just opinion? If smart people disagree about ethics, isn't right and wrong simply whatever each person or culture decides — "true for me," "true for them," nothing more? This view, moral relativism, is worth taking seriously but most philosophers ultimately reject it, for reasons you can feel. First, it cannot account for moral progress: if morality is just whatever a society currently approves, then a society that once accepted slavery or cruelty was not wrong, and the reformers who opposed it were not right — but that seems clearly false, since we recognize those reformers as having seen something true their society missed. Second, almost no one actually lives as a consistent relativist: if someone cruelly harms you, you do not think "well, that's just their opinion of right and wrong, equally valid as mine" — you think they are genuinely wrong, and that reaction reveals a real belief that some things are not just disapproved-of but actually wrong. The honest, humble middle (and it connects right back to your epistemology lesson) is this: moral questions are genuinely hard and reasonable people disagree about a great deal, so confidence and humility are both warranted — but "hard and contested" is not the same as "mere opinion with no better or worse answers," any more than a hard scientific question is mere opinion. We can reason about ethics, make real moral progress, and get things genuinely wrong, even though certainty is rare. Difficulty is a reason to think carefully, not to give up on right and wrong altogether.`,
          ],
          image: `/voyager-assets/frontier/l07-s4-more.webp`,
          imageCaption: `Beyond the two famous rivals, two more serious answers. VIRTUE ETHICS (Aristotle): shifts from "what should I do?" to "what kind of person should I become?" — focuses on CHARACTER (courage, honesty, kindness, wisdom), holding that a good person with practical wisdom does right in situations no rulebook covers. CARE ETHICS: morality is rooted in RELATIONSHIPS, empathy, and our responsibilities to particular people who depend on us — the concrete care abstract frameworks underrate. All four are less rival teams than different LENSES, each catching one real feature: consequences matter (utilitarianism), some things are off-limits regardless (deontology), character matters (virtue), relationships and care matter (care ethics). Many thoughtful people draw on more than one. But: is morality JUST OPINION? Moral relativism ("right is whatever each culture decides") is worth taking seriously but most philosophers reject it: it can't explain moral PROGRESS (then slavery's opponents weren't "right"?), and almost no one lives as a consistent relativist (harm me and you won't think it's "just my opinion"). The humble middle: morality is hard and contested — but "hard" isn't "mere opinion," just as a hard science question isn't. Reason, progress, and being genuinely wrong are all real.`,
          vocab: [
            {
              word: `just opinion`,
              definition: `Utilitarianism and deontology are the famous rivals but not the only serious answers, and two more capture things both can miss. Virtue ethics, going back to Aristotle, shifts the question from "what should I do?" to "what kind of person should I become?", focusing on character traits (courage, honesty, kindness, wisdom, justice) and holding that the good life comes from cultivating virtues, so that a good person trained in practical wisdom will tend to do right in situations no rulebook could fully anticipate. Care ethics emphasizes that morality is deeply rooted in relationships, empathy, and responsibilities to the particular people we are connected to, insisting that ethics is not only abstract rules and calculations but the concrete care we owe those who depend on us, which colder frameworks can underrate. All four work less like rival teams than like different lenses, each bringing one real feature of morality into focus: consequences genuinely matter (utilitarianism), some things are off-limits regardless of consequences (deontology), character and practical wisdom matter (virtue ethics), and concrete relationships and care matter (care ethics), so many thoughtful people draw on more than one — using consequences to weigh options, firm principles to mark lines they will not cross, and good character for the situations no rule fully covers. This raises the lurking question of whether morality is just opinion: if smart people disagree, isn't right and wrong simply whatever each person or culture decides? This view, moral relativism, is worth taking seriously but most philosophers reject it. First, it cannot account for moral progress, since if morality is just whatever a society currently approves then a society that accepted slavery was not wrong and the reformers who opposed it were not right, which seems clearly false because we recognize those reformers as having seen something true their society missed. Second, almost no one lives as a consistent relativist, since if someone cruelly harms you, you do not think "that's just their equally valid opinion" but that they are genuinely wrong, revealing a real belief that some things are actually wrong rather than merely disapproved-of. The honest, humble middle, connecting to the epistemology lesson, is that moral questions are genuinely hard and reasonable people disagree about much, so confidence and humility are both warranted, but "hard and contested" is not the same as "mere opinion with no better or worse answers," any more than a hard scientific question is mere opinion, so we can reason about ethics, make real moral progress, and get things genuinely wrong even though certainty is rare, and difficulty is a reason to think carefully rather than to give up on right and wrong altogether.`,
              audioPrompt: `Utilitarianism and deontology are the famous rivals, {name}, but not the only serious answers, and two more are worth knowing. Virtue ethics, going back to Aristotle, shifts the question from "what should I do?" to "what kind of person should I become?" It focuses on character: courage, honesty, kindness, wisdom, justice, holding that a good person, well-trained in practical wisdom, will tend to do the right thing in situations no rulebook could anticipate. Care ethics adds another piece, emphasizing that morality is rooted in relationships, empathy, and our responsibilities to the particular people we are connected to, not only abstract rules and calculations. Notice that all four are less like rival teams and more like different lenses, each bringing one real feature of morality into focus: consequences matter, some things are off-limits regardless, character matters, and relationships and care matter. Many thoughtful people draw on more than one. But this raises a question lurking under the whole lesson: is morality just opinion? If smart people disagree, isn't right and wrong simply whatever each person or culture decides? This view, moral relativism, is worth taking seriously but most philosophers reject it. First, it cannot account for moral progress: if morality is just whatever a society approves, then a society that accepted slavery was not wrong, and the reformers who opposed it were not right, which seems clearly false. Second, almost no one actually lives as a consistent relativist: if someone cruelly harms you, you do not think "well, that's just their opinion, equally valid as mine"; you think they are genuinely wrong. The honest, humble middle, and it connects to your epistemology lesson, is this: moral questions are genuinely hard and reasonable people disagree, so confidence and humility are both warranted, but "hard and contested" is not the same as "mere opinion with no better or worse answers." We can reason about ethics, make real moral progress, and get things genuinely wrong, even though certainty is rare. Difficulty is a reason to think carefully, not to give up on right and wrong.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together before you hear the thinkers. You learned what ethics is — the careful, honest search for reasons about right and wrong — and what it is not: not the same as the law, not "whatever my group approves," not reducible to any single authority handed down unexamined. You met the two great rivals: utilitarianism (judge by results, the greatest good for the greatest number, powerful but vulnerable to "the ends justify the means" and to sacrificing the individual to the math) and deontology (judge by the rule, some things are simply right or wrong, treat people as ends never merely as means, powerful but vulnerable to rigid rules that clash or produce cruel outcomes). You met two more lenses — virtue ethics (what kind of person should I become?) and care ethics (the morality of relationships and care) — and saw that these may be lenses more than teams. And you faced the big question honestly: morality is genuinely hard and contested, but that is not the same as "just opinion," because we can reason, make moral progress, and get things genuinely wrong.`,
            `Now the Perspectives screen will put these moral frameworks before you as distinct voices: the utilitarian on the greatest good, the deontologist (Kant) on duty and dignity, the virtue ethicist (Aristotle) on character, the care ethicist on relationships, and — as a contrast to examine, not endorse — the moral relativist who says it is all just opinion. Your task is the band's familiar one: enter each honestly, find its real force, feel where it strains, and notice which speaks to you, while resisting the urge to either crown one winner or collapse into "they're all just opinions anyway."`,
            `One last thing to carry, and it ties ethics back to everything you have learned about protecting your mind. The most dangerous moral mistakes are usually not made by people who think too carefully about ethics, but by people who stop thinking and grab a shortcut — "the ends justify the means," "rules are rules so I'm not responsible," "everyone does it," "my group says it's fine," "I just felt it was right." Each of these is a way of switching off moral reasoning, the ethical version of the traps you have studied all band. The protective skill is the same one ethics has been teaching since Aristotle: keep actually thinking — weigh consequences honestly without using them to excuse cruelty, hold real lines you will not cross whatever the supposed payoff, build the kind of character that does right when no one is watching, and stay humble enough to know moral questions are hard while serious enough to know they have real answers. Being good is not about having a slogan. It is about never stopping the honest work of asking what is right, and then having the courage to do it. Let's hear the thinkers.`,
          ],
          image: `/voyager-assets/frontier/l07-s5-before.webp`,
          imageCaption: `Threads together. Ethics = the careful, honest search for REASONS about right and wrong; NOT the law, NOT "whatever my group approves," NOT one unexamined authority. The two great rivals: UTILITARIANISM (judge by results — greatest good for the greatest number; powerful but vulnerable to "the ends justify the means" and sacrificing the individual to the math) and DEONTOLOGY (judge by the rule — some things are simply right/wrong; treat people as ends never merely means; powerful but vulnerable to rigid clashing rules). Two more lenses: VIRTUE ETHICS (what kind of person should I become?) and CARE ETHICS (relationships and care). Is it just opinion? No — hard and contested isn't "mere opinion"; we can reason, progress, and be genuinely wrong. The Perspectives screen ahead: utilitarian, Kant, Aristotle, care ethicist, and the relativist as contrast to examine (not endorse). Last thing: the worst moral mistakes come from STOPPING thinking and grabbing a shortcut ("ends justify the means," "rules are rules," "everyone does it," "I just felt it"). The protective skill: keep actually thinking — and have the courage to do what's right.`,
          vocab: [
            {
              word: `work ethics`,
              definition: `The synthesis before the Perspectives screen. You learned what ethics is, the careful and honest search for reasons about right and wrong, and what it is not: not the same as the law (legal things can be wrong, illegal things can be right), not "whatever my society or group approves" (groups have approved terrible things, and moral thinking lets you question them), and not reducible to any single authority handed down unexamined. You met the two great rivals: utilitarianism, which judges actions by results and seeks the greatest good for the greatest number counting everyone equally, genuinely powerful in taking suffering seriously and driving moral progress but vulnerable to seeming to justify harming individuals when the math "works out" and to the dangerous shortcut "the ends justify the means"; and deontology, championed by Kant, which judges by duties and principles, holds some actions simply right or wrong regardless of consequences, and insists we treat people as ends in themselves never merely as means, genuinely powerful in protecting individual dignity but vulnerable to rigid rules that clash or produce cruel outcomes. You met two further lenses, virtue ethics (Aristotle's question of what kind of person to become, focused on character and practical wisdom) and care ethics (morality rooted in relationships, empathy, and responsibility to particular people), and saw that the four function more as lenses than rival teams, each capturing a real feature of morality. And you faced the big question honestly: morality is genuinely hard and contested, but that is not the same as "just opinion," since relativism cannot explain moral progress and almost no one lives as a consistent relativist, so we can reason, make real moral progress, and get things genuinely wrong even though certainty is rare. The Perspectives screen presents the utilitarian, the deontologist, the virtue ethicist, the care ethicist, and the relativist as a contrast to examine rather than endorse. The deepest point is that the worst moral mistakes usually come not from thinking too carefully but from stopping thinking and grabbing a shortcut ("the ends justify the means," "rules are rules so I'm not responsible," "everyone does it," "my group says it's fine," "I just felt it was right"), each a way of switching off moral reasoning, so the protective skill is to keep actually thinking: weigh consequences without excusing cruelty, hold real lines you will not cross whatever the payoff, build character that does right unwatched, and stay humble that moral questions are hard while serious that they have real answers, because being good is not about a slogan but about never stopping the honest work of asking what is right and then having the courage to do it.`,
              audioPrompt: `Pull it together before you hear the thinkers, {name}. You learned what ethics is, the careful, honest search for reasons about right and wrong, and what it is not: not the same as the law, not "whatever my group approves," not reducible to any single authority handed down unexamined. You met the two great rivals: utilitarianism, judge by results, the greatest good for the greatest number, powerful but vulnerable to "the ends justify the means" and to sacrificing the individual to the math; and deontology, judge by the rule, some things are simply right or wrong, treat people as ends never merely as means, powerful but vulnerable to rigid rules that clash or produce cruel outcomes. You met two more lenses, virtue ethics, what kind of person should I become, and care ethics, the morality of relationships and care. And you faced the big question honestly: morality is genuinely hard and contested, but that is not the same as "just opinion," because we can reason, make moral progress, and get things genuinely wrong. Now the Perspectives screen will put these frameworks before you: the utilitarian, the deontologist Kant, the virtue ethicist Aristotle, the care ethicist, and, as a contrast to examine, not endorse, the moral relativist. Enter each honestly, find its real force, and notice which speaks to you. One last thing. The most dangerous moral mistakes are usually not made by people who think too carefully, but by people who stop thinking and grab a shortcut: "the ends justify the means," "rules are rules so I'm not responsible," "everyone does it," "I just felt it was right." Each is a way of switching off moral reasoning, the ethical version of the traps you have studied. The protective skill is to keep actually thinking: weigh consequences without excusing cruelty, hold real lines you will not cross, build character that does right when no one is watching, and stay humble that moral questions are hard while serious that they have real answers. Being good is not about having a slogan. It is about never stopping the honest work of asking what is right, and then having the courage to do it.`,
            },
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l07-perspectives`,
          type: `perspectives`,
          headline: `What Makes An Action Right?`,
          intro: `{name}, five voices on the deepest practical question there is: what makes an action right? Four are serious moral frameworks; the fifth (relativism) is a contrast to examine, not adopt, so you can see clearly what the others are arguing against. Enter each honestly, find its real force, feel where it strains, and notice which speaks to you — and which lens a real situation in your own life might call for.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The Utilitarian (Mill / Bentham)`,
              era: `consequences, 1800s`,
              stance: `The right action is the one that produces the most good — the greatest well-being and least suffering — for the greatest number, counting everyone equally.`,
              quote: `"Ask what actually helps and harms real, feeling beings. The right choice is the one that does the most good and the least suffering, for everyone alike."`,
              argument: `What ultimately matters morally is well-being and suffering — the real effects of our actions on conscious beings — so the right thing to do is whatever produces the best overall outcome, counting each person's happiness equally and no one's as more important just because it is theirs.`,
              evidence: `Utilitarian thinking has driven real moral progress: widening who "counts," reducing cruelty and needless suffering, and asking of any practice whether it actually makes life better or worse for those it affects rather than defending it by tradition.`,
              strengths_and_limits: `Strength: it takes suffering and happiness seriously, is admirably impartial (everyone counts equally), gives a clear method, and has genuinely reduced cruelty in the world. Limit: it can appear to justify harming an innocent individual when the "math works out," colliding with our deep sense that some things may not be done to a person; consequences are hard to predict and easy to rig toward what you already wanted; and in its crude form, "the ends justify the means," it has excused real atrocities.`,
            },
            {
              id: `p2`,
              voice: `The Deontologist (Kant)`,
              era: `duty and dignity, 1700s`,
              stance: `Some actions are right or wrong in themselves, regardless of consequences; treat every person as an end in themselves, never merely as a means.`,
              quote: `"Act only on a rule you could will for everyone. And never use a person merely as a tool for your goals — their dignity is not for sale."`,
              argument: `Morality is about duties and principles that hold regardless of outcome: an action is wrong if you could not consistently want everyone to do it, and it is always wrong to treat a person merely as a means to your ends, because each person has worth that cannot be traded away for someone else's benefit.`,
              evidence: `It explains and protects our strong, widely shared conviction that certain things — like framing an innocent person to please a crowd — are simply wrong no matter the benefits, a conviction utilitarian math struggles to honor.`,
              strengths_and_limits: `Strength: it protects the individual from being sacrificed to the greater good, provides firm limits that resist "the ends justify the means," and honors human dignity as having absolute, non-negotiable worth. Limit: strict rules can genuinely clash (never lie vs. protect an innocent life from a murderer at the door), rigidly following a rule regardless of consequences can sometimes produce outcomes that seem clearly worse or even cruel, and deciding which rules are truly absolute, and how to handle exceptions, is genuinely hard.`,
            },
            {
              id: `p3`,
              voice: `The Virtue Ethicist (Aristotle)`,
              era: `character, ~350 BCE`,
              stance: `The key question is not "what act follows the rule?" but "what kind of person should I become?" — morality is about cultivating good character and practical wisdom.`,
              quote: `"We become just by doing just acts, brave by doing brave acts. Build the character of a good person, and right action will follow where no rule could reach."`,
              argument: `Focusing only on individual acts misses the deeper truth that good actions flow from good character: by cultivating virtues like honesty, courage, kindness, and justice, and the practical wisdom to apply them, a person becomes someone who reliably does the right thing even in complex situations no rulebook could fully anticipate.`,
              evidence: `In real life, we trust good people more than good rules: a person of genuine character handles novel, messy situations well precisely because they have wisdom and virtue, not because they consulted a formula, and we admire and rely on exactly that.`,
              strengths_and_limits: `Strength: it captures that character and practical wisdom matter enormously, handles situations no rule anticipates, and asks the deep, lifelong question of who to become rather than just what to do right now. Limit: it can be less clear-cut when you need specific guidance for a hard decision right now ("be virtuous" does not always tell you exactly what to do), and people can disagree about which traits count as virtues and how to weigh them when they pull in different directions.`,
            },
            {
              id: `p4`,
              voice: `The Care Ethicist`,
              era: `relationships and care`,
              stance: `Morality is rooted in relationships, empathy, and our concrete responsibilities to the particular people connected to and dependent on us — not only in abstract rules or calculations.`,
              quote: `"Ethics doesn't live only in formulas. It lives in how we actually care for the real people in front of us, the ones who depend on us."`,
              argument: `The more abstract frameworks can miss that much of real moral life is about responding to particular people we are bound to — caring for a friend, a child, a parent — and that empathy and the responsibilities of relationship are central to ethics, not a footnote to impartial rules or calculations.`,
              evidence: `Much of everyday moral life genuinely is relational and particular: our clearest moral duties often involve specific people who depend on us, and a purely impartial calculation can feel like it leaves out something morally essential about love, loyalty, and care.`,
              strengths_and_limits: `Strength: it captures the relational, empathetic heart of morality that abstract frameworks can underrate, and reflects how much real ethical life is about caring for particular people. Limit: focusing on those close to us can sit in tension with impartiality and fairness to strangers (caring more for "my people" can shade into unfairness to others), so care ethics works best alongside frameworks that also account for justice to those outside our immediate circle.`,
            },
            {
              id: `p5`,
              voice: `The Moral Relativist (contrast voice)`,
              era: `the "it's all opinion" view`,
              stance: `There is no objective right or wrong; morality is just whatever each person or culture happens to approve of — "true for me," "true for them," nothing more.`,
              quote: `"Who's to say what's really right? Morality is just opinion. What's right for one culture is wrong for another, and no one can claim their view is truly correct."`,
              argument: `Because people and cultures disagree so much about morality, and no one can step outside all viewpoints to a "view from nowhere," the relativist concludes there is no objective moral truth, only differing opinions and customs, none truly better than another.`,
              evidence: `Points to the genuine fact of wide moral disagreement across people, cultures, and history, and to the real difficulty of proving moral claims the way we prove facts about the physical world.`,
              strengths_and_limits: `Strength: it honestly notices real moral disagreement and rightly warns against arrogant certainty and against assuming your own culture is automatically right — a genuine caution. Limit: most philosophers reject it because it cannot account for moral progress (it would mean reformers against slavery were not actually "right," which seems clearly false), and almost no one lives as a consistent relativist, since when seriously wronged we feel the other person is genuinely wrong, not merely "expressing a different equally valid opinion." It also confuses "morality is hard and contested" with "morality is mere opinion," which does not follow any more than it does for hard scientific questions. Included here to examine, not to adopt.`,
            },
          ],
          synthesisPrompt: `After all five: which framework speaks to you most, and where does even your favorite hit its hardest problem (state the strongest objection to it)? Then describe a real situation and explain which lens it most calls for — and why you might use different lenses for different problems. Finally, in your own words: why isn't "people disagree about morality" the same as "morality is just opinion"? In 5-6 sentences.`,
          reflectionPrompt: `Think about how you actually make moral decisions in real life. Do you tend to think about consequences (utilitarian), about rules and lines you won't cross (deontology), about what a good person would do (virtue), or about the people you care about (care)? Probably some mix. Which lens do you lean on most — and which might you be underusing?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your thinking`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why does the lesson say ethics is NOT the same as the law, or as "whatever my group approves"?`,
              options: [
                `Because the law and your group are always wrong, so being ethical means doing the opposite.`,
                `Because ethics is just a stricter version of the law plus some unwritten rules about manners.`,
                `Because laws and group approval can themselves be unjust — ethics is the standard you judge them by.`,
                `Because ethics shifts between places while law stays fixed, so law is the reliable guide.`,
              ],
              correctIndex: 2,
              explanation: `"Is it legal?" and "is it right?" are different (cruelty can be legal; breaking unjust laws can be right). And "whatever my group approves" can't be the measure — groups have approved terrible things, and moral thinking exists precisely to question whether what your group accepts is actually right. "It's legal," "everyone does it," "my group says so," "it felt right" all dodge the real question, which needs genuine, examinable reasons.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the core idea of utilitarianism, and what's genuinely powerful about it?`,
              options: [
                `The right action produces the most well-being for everyone — powerful because it takes everyone's suffering seriously.`,
                `That you should always do whatever makes you personally happiest, since your own pleasure is all that's sure.`,
                `That the right action is whatever follows the rules, regardless of the outcome.`,
                `That happiness can be measured exactly, making ethics a branch of mathematics.`,
              ],
              correctIndex: 0,
              explanation: `Utilitarianism (Bentham, Mill): the right action produces the most good — greatest well-being, least suffering — for the greatest number, counting everyone equally; decide by weighing consequences. Its power: it takes suffering/happiness seriously, is impartial (your happiness counts no more than a stranger's), gives a clear method, and has driven real moral progress. Note it counts EVERYONE equally — not just your own happiness.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the most dangerous form of utilitarian reasoning, and why must you watch for it?`,
              options: [
                `There's nothing dangerous about it — done carefully it always gives the right answer.`,
                `Caring too much about individual feelings, which distracts from the greater good.`,
                `Refusing to ever break a rule, so you stay stuck following bad rules.`,
                `Using "the greater good" to justify harming individuals — the end excusing terrible means.`,
              ],
              correctIndex: 3,
              explanation: `The dangerous form is "the ends justify the means" — any cruelty is OK if it supposedly leads to a good enough result. Watch for it because it's behind some of history's worst acts (cruelty excused by a promised benefit that often never came), it collides with the conviction that some things may not be done to a person regardless of payoff, and consequences being hard to predict makes it easy to rig toward what you wanted anyway. A moral red flag of the highest order.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is deontology's core idea, and what does "treat people as ends, never merely as means" mean?`,
              options: [
                `That you should never have personal goals, since pursuing your own ends is selfish.`,
                `Some acts are right or wrong in themselves; "treat people as ends" means never just using them as tools.`,
                `That people are merely means to an end, so it's fine to use whoever helps you reach goals that are good enough.`,
                `That you treat everyone identically, never making exceptions for friends or family.`,
              ],
              correctIndex: 1,
              explanation: `Deontology (Kant): some actions are right or wrong in themselves regardless of consequences — duties and principles that hold no matter the results. "Treat people as ends, never merely as means": respect each person's own worth and dignity, never use them purely as a tool/stepping-stone for your goals. ("Merely" matters — mutual, respectful interaction is fine; using someone purely as an instrument isn't.) Human dignity isn't for sale.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `The lesson presents the four frameworks as "lenses more than rival teams." What does that mean?`,
              options: [
                `That all four frameworks are wrong and ethics is ultimately pointless.`,
                `That you must pick one framework and reject the others, since mixing them is incoherent.`,
                `Each framework highlights something real, so you use them together to see a problem fully.`,
                `That the four are really identical and always reach the same conclusion anyway.`,
              ],
              correctIndex: 2,
              explanation: `Each framework captures one real feature of morality, like lenses on the same complex thing: consequences matter (utilitarianism), some things are off-limits regardless (deontology), character matters (virtue), relationships and care matter (care ethics). Many thoughtful people draw on more than one, matching the lens to the situation. It doesn't mean "anything goes" — they can genuinely conflict — but ethics is a richer toolkit, not a contest for one winning slogan.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why do most philosophers reject moral relativism (the view that morality is just opinion)?`,
              options: [
                `Because relativism is obviously true and essentially no serious thinker disputes it.`,
                `Because relativism makes moral arguments too hard to win, so it's rejected for being inconvenient.`,
                `Because relativism is a religious idea, and most philosophers aren't religious.`,
                `Because it can't explain why some things (like cruelty for fun) seem wrong everywhere, not just "in our opinion."`,
              ],
              correctIndex: 3,
              explanation: `Two reasons: (1) it can't account for moral progress — if morality is just what a society approves, then slavery's opponents weren't "right," just differently opinionated, which seems clearly false; (2) almost no one lives as a consistent relativist — when seriously wronged, you think the person is genuinely wrong, not "expressing an equally valid opinion." It also confuses "hard and contested" with "mere opinion" (a hard science question isn't mere opinion either).`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the strongest objection to deontology, stated fairly?`,
              options: [
                `That rigidly following a rule can produce a clearly terrible outcome it refuses to prevent.`,
                `That deontology is stupid and has no redeeming points whatsoever.`,
                `That it only cares about consequences and ignores rules, contradicting itself.`,
                `That it was invented too recently to be taken seriously next to older theories.`,
              ],
              correctIndex: 0,
              explanation: `Stated fairly: rigidly following a rule regardless of consequences can produce clearly worse or cruel outcomes, and strict rules can genuinely clash (the classic "never lie" vs. "protect an innocent life" when a murderer asks where the victim is). "Follow the rule" alone can't settle which duty wins, and deciding which rules are truly absolute is hard. This is the real force behind the utilitarian intuition — which is why thoughtful people keep both in view.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `According to the lesson, where do the most dangerous moral mistakes usually come from?`,
              options: [
                `From people who think too hard about right and wrong — overthinking leads to paralysis.`,
                `From certainty and "us vs. them" — people who are sure they're righteous justify harming the other side.`,
                `From people who haven't memorized the four frameworks yet, who'd otherwise choose rightly every time.`,
                `From caring too much about others' suffering, since empathy clouds correct moral calculation.`,
              ],
              correctIndex: 1,
              explanation: `From people who STOP thinking and grab a shortcut that switches off moral reasoning: "the ends justify the means," "rules are rules so I'm not responsible," "everyone does it," "my group says it's fine," "I just felt it was right." Each feels like a reason but shuts reasoning down — the ethical version of the band's traps. The protection is to keep actually thinking, hold real lines, build character, and have the courage to do right.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Since philosophers can't agree on one final theory of ethics, there's no real right and wrong, and morality is just personal opinion.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important conclusions of the lesson. The fact that philosophers have not crowned a single final theory of ethics does not mean there is no real right and wrong, any more than unresolved debates in science mean there is no real truth about the physical world. Several points establish this. First, the major frameworks largely agree on a vast range of cases — that gratuitous cruelty is wrong, that helping others is good, that fairness matters — and disagree mainly at the hard edges, so ongoing debate about difficult cases coexists with broad agreement on much, which is not what "mere opinion" would look like. Second, treating morality as just opinion cannot explain moral progress: it would mean that societies which accepted slavery were not actually wrong and that the reformers who opposed them were not actually right, which seems clearly false, since we recognize real moral improvement over history. Third, almost no one lives as a consistent relativist; when seriously and cruelly wronged, people feel the wrong is genuine, not merely a difference of equally valid opinion. The honest position, which connects to the epistemology lesson, is that moral questions are genuinely hard and contested and certainty is rare, so both humility and careful reasoning are warranted — but "hard and contested" is simply not the same as "mere opinion with no better or worse answers." We can reason about ethics, make real moral progress, and get things genuinely wrong, and the difficulty of the questions is a reason to think more carefully, not a reason to abandon right and wrong altogether.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you're 14, and an older person you respect is pressuring you and some friends to do something to another kid that feels clearly wrong to you. They say: "Look, it'll be better for everyone in the group if we do this — the ends justify the means. Besides, rules are made to be broken, everyone would do the same in our position, and honestly who's to say what's even 'right' anyway? Don't be naive." Using this lesson, what's going on, and what do you actually think?`,
              options: [
                `"They're older and confident and made a lot of points, so I should go along"`,
                `Several things, clearly, because this short speech is almost a museum of every moral shortcut this lesson warned you about, stacked together precisely because each one is meant to switch off your moral reasoning and override the strong signal that this feels wrong. First, "the ends justify the means" is the single most dangerous moral shortcut there is, the crude form of utilitarian reasoning that has excused some of history's worst acts: notice it is being used to justify harming a specific real person (the other kid) for a supposed group benefit, which is exactly the move that collides with the deep principle that some things simply may not be done to a person, that each individual has a dignity that cannot be sacrificed to the group's "math" — and notice too that the predicted benefit is vague and self-serving, the kind of payoff that conveniently justifies what they wanted to do anyway. Second, "rules are made to be broken" is being used not as thoughtful questioning of an unjust rule but as a way to dodge responsibility for a choice that hurts someone; questioning rules is healthy, but "rules don't matter" deployed to excuse harming a person is just switching off the question. Third, "everyone would do the same" is the bandwagon move from your logic lesson and an appeal to what's common rather than what's right — even if it were true that others would do it, that has no bearing on whether it is actually right, since "everyone does it" is one of the classic ways of avoiding the moral question rather than answering it. Fourth, "who's to say what's even right anyway?" is moral relativism weaponized: it is being used not as honest humility but as a tool to make you doubt your own clear moral perception so you'll go along, and you now know the strong replies — that "morality is hard and contested" is not the same as "morality is just opinion," and that almost no one truly believes there's no right and wrong, including this person, who would certainly feel genuinely wronged if it were done to them. Fifth, "don't be naive" is a flat appeal to emotion and social pressure, designed to make doing the wrong thing feel sophisticated and refusing feel childish, which is manipulation, not an argument. Sixth, run it through the frameworks you actually have: utilitarian honest accounting (does cruelty to this kid really maximize well-being, counting that kid's suffering equally? almost certainly not), deontological (you'd be using this kid merely as a means to the group's ends, violating their dignity — a clear line you don't cross), virtue (what kind of person do I become if I do this? is this who I want to be?), and care (what do I owe this real person in front of me?) — every serious lens points the same way, against it. Seventh, and most important, this is one of those moments the whole band was built for: the protective skill is to recognize that a pile of confident shortcuts aimed at overriding your clear sense that something is wrong is itself the biggest red flag, and to keep your footing — which here means declining to do it, even at real social cost, and ideally getting yourself and your friends out of the situation and, if the other kid is genuinely at risk of being hurt, telling a trusted adult. The deepest takeaway is that being good is not about having a clever slogan, and the people pushing slogans hardest are often the ones trying to get you to stop thinking; your job is to keep thinking and then have the courage to do what's right, especially when an older, confident person is working hard to convince you that the wrong thing is fine.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Spotted a stack of moral shortcuts designed to override a clear "this is wrong" signal. The move: name each one — "the ends justify the means" (the most dangerous shortcut, used to harm a real individual for a vague group benefit that's likely motivated reasoning), "rules are made to be broken" (dodging responsibility, not questioning an unjust rule), "everyone would do the same" (bandwagon — common isn't right), "who's to say what's right?" (relativism weaponized to make you doubt your clear perception — but hard ≠ mere opinion, and this person would feel genuinely wronged if it were done to them), and "don't be naive" (emotional pressure, not an argument). Then run it through the real frameworks — utilitarian (counting the kid's suffering equally), deontological (using them merely as a means violates their dignity), virtue, and care — all point against it. Recognize the pile of confident shortcuts as itself the red flag, keep your footing, decline despite social cost, and get a trusted adult if the kid's at risk. Being good isn't a slogan; keep thinking and have the courage to act.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-lens`, category: `Your moral lens`, prompt: `How do you actually decide what's right — by consequences, by rules/lines you won't cross, by what a good person would do, or by the people you care about? Probably a mix. Which lens do you lean on most, and which might you be underusing?` },
            { id: `reflect-shortcut`, category: `Catching the shortcuts`, prompt: `Which moral shortcut are you most tempted by — "the ends justify the means," "everyone does it," "rules are rules," "my group says so," "I just felt it"? Naming your most tempting one, calmly, is what lets you catch it when it matters.` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `Virtue ethics asks not "what should I do?" but "what kind of person should I become?" So: what kind of person do you want to be? Name one virtue (honesty, courage, kindness, fairness) you most want to grow, and one small way to practice it.` },
            { id: `reflect-endsmeans`, category: `The ends and the means`, prompt: `Where have you seen "the ends justify the means" used to excuse something that hurt a real person? Why is this reasoning so tempting and so dangerous? What would it take to hold a real line even when someone argues the payoff is worth it?` },
            { id: `reflect-relativism`, category: `Is it just opinion?`, prompt: `Do you think morality is "just opinion," or are some things really right and wrong? Sit with the lesson's two challenges to relativism (moral progress, and how you'd react if cruelly wronged). Where do you land, and how do you hold humility AND the belief that right and wrong are real?` },
            { id: `reflect-courage`, category: `Knowing vs. doing`, prompt: `Ethics isn't only about knowing what's right — it's about having the courage to do it, especially under pressure. When has it been hard to do what you knew was right? What helps you find the courage when doing right is costly?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Ethics is the most practical philosophy there is — you make moral choices every single day. Two paths.`,
          familyActivity: {
            title: `The Four Lenses Dinner`,
            duration: `45 minutes`,
            description: `Turn dinner into a real ethics workshop using the four lenses from the lesson. Pick a few genuine moral dilemmas — age-appropriate but real, like "is it ever okay to break a promise?", "should you tell a hard truth that will hurt someone's feelings?", "what do you owe a friend who's done something wrong?", or a real situation someone's actually faced. For each one, deliberately look at it through all four lenses together: the utilitarian (what produces the most good and least suffering for everyone affected?), the deontological (are there lines or duties here that shouldn't be crossed regardless of outcome — is anyone being used merely as a means?), the virtue lens (what would a genuinely good, wise person do — what does this choice make you into?), and the care lens (what do we owe the specific people in this relationship?). Notice how different lenses sometimes point different directions, and talk about how you'd weigh them. Then the most important part: as a family, name the moral shortcuts to watch out for — "the ends justify the means," "everyone does it," "rules are rules," "who's to say what's right" — and share where you've seen them used in real life. Keep it warm and genuinely curious, not preachy. The goal is a family that can actually reason about right and wrong together, using real tools instead of slogans, which is exactly what makes it easier to do the right thing when it's hard and someone's pressuring you to grab a shortcut.`,
          },
          projectOption: {
            title: `The Ethics Journal, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Keep an ethics journal that turns moral philosophy into a real, lived practice. Week 1: each day, notice one genuine moral choice or dilemma you encountered or observed — something where "what's the right thing?" actually came up, even in a small way (a choice about honesty, fairness, kindness, loyalty, standing up for someone, keeping or breaking a promise). For each, write what happened, then analyze it through the four lenses: what would the utilitarian, the deontologist, the virtue ethicist, and the care ethicist each say, and where do they agree or pull apart? Don't worry about getting a "right answer" — practice the reasoning. Week 2: go deeper and more personal. Pick the hardest dilemma you logged and write a full analysis weighing the lenses and landing on what you actually think is right and why. Then turn inward: write honestly about which moral shortcuts you're most tempted by, and which virtues you most want to build in yourself. End with a short personal "ethical compass" — a few principles, in your own words, that you actually want to live by, including the lines you won't cross no matter the payoff and the kind of person you're trying to become. The point is to make ethics a working practice rather than an abstract topic: a habit of actually thinking through right and wrong with real tools, and a clearer sense of your own moral compass, which is exactly what holds steady when life puts you under pressure to do something you know is wrong.`,
            offerToParent: `Parent: opt your child into the Ethics Journal. Practicing real moral reasoning daily — analyzing genuine dilemmas through consequences, duties, character, and care, naming the shortcuts that switch off conscience ("the ends justify the means," "everyone does it"), and articulating their own ethical compass — turns ethics from an abstract topic into a working habit. This builds genuine moral reasoning and, importantly, the protective ability to recognize and resist when someone pressures them to do wrong with a confident slogan, which is a real risk in adolescence. The emphasis is on thinking well and building character, not on being handed conclusions; the closing "ethical compass" is theirs to write. A natural opening for warm conversations about real situations they're navigating.`,
          },
          identityQuestion: `If you become someone who can actually reason about right and wrong — weighing consequences without excusing cruelty, holding real lines you won't cross whatever the payoff, building the character to do right when no one's watching, and recognizing the shortcuts people use to switch off conscience — what does that let you do, and protect, across a lifetime of moments where doing the right thing is hard and someone confident is telling you the wrong thing is fine?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who holds a line they won't cross, no matter how good the payoff sounds.`,
            `A person who keeps thinking about what's right instead of grabbing an easy slogan.`,
            `Someone with the courage to do right even when it's hard and someone's pushing me not to.`,
          ],
          saveKey: `identity_responses_fp_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seven down — and you just took on the most practical question there is: how to be good. After this lesson you can explain what ethics actually is — the honest search for reasons about right and wrong — and what it is not: not the law, not "whatever my group approves," not any single authority swallowed unexamined. You can lay out the two great rivals: utilitarianism, judge by results, powerful and humane but vulnerable to "the ends justify the means" and to sacrificing the individual to the math; and deontology, judge by the rule, protecting human dignity and treating people as ends never merely as means, powerful but vulnerable to rigid rules that clash. You met virtue ethics and care ethics as further lenses — what kind of person to become, and the morality of real relationships — and you faced the big question honestly, seeing why "morality is hard" is not the same as "morality is just opinion." Most of all, you learned the protective heart of it: the worst moral mistakes come from grabbing a shortcut that switches off your thinking, and the answer is to keep thinking, hold your lines, build your character, and have the courage to do right when it's costly. Carry that, because you will need it. Next: environmental philosophy and deep ecology — widening the moral circle to ask what we owe the living world itself. See you there. — Orion`,
          badge: `ethics-initiate`,
          badgeName: `Ethics Initiate`,
          xpEarned: 75,
          competencies: [
            `Explains what ethics is (the reasoned search for right and wrong) and distinguishes it from law, group approval, and unexamined authority`,
            `Articulates utilitarianism (greatest good for the greatest number) with both its genuine strengths and its serious problems`,
            `Articulates deontology (duties, and treating people as ends never merely as means) with both its strengths and its problems`,
            `Knows virtue ethics and care ethics as additional frameworks, and understands the four as complementary lenses, not just rival teams`,
            `Recognizes "the ends justify the means" and other moral shortcuts as dangerous ways of switching off moral reasoning`,
            `Understands why most philosophers reject pure moral relativism, and why "hard and contested" is not the same as "just opinion"`,
            `Grasps that ethics requires not just knowing what is right but the courage to do it, especially under pressure to take a shortcut`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Environmental Philosophy and Deep Ecology`,
            hook: `We've asked what we owe each other. Now we widen the circle: do we have duties to animals, ecosystems, the living world itself — and why?`,
          },
        },
      ],
    },
  ],
};

export default FRONTIER_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = FRONTIER_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FRONTIER-VOYAGER-L07 ${VERSION}] "${l.title}" guide=${FRONTIER_VOYAGER_L07.guide} mags=${mags} perspectives=${persp} q=${quiz} r=${reflect}`
  );
}
