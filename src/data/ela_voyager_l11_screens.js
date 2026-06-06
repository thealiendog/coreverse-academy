// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L11 — Argumentative Writing: Advanced
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Writing Arguments, Claim/Evidence/Reasoning
// Interaction: CASE STUDY (cases[] accordion). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l11-v1";

const ELA_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-11`,
      title: `Argumentative Writing: Advanced`,
      duration: 35,
      xpReward: 75,
      badge: `argument-architect`,
      badgeName: `Argument Architect`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, back in an earlier lesson you learned to analyze other people's arguments, to spot logos, ethos, and pathos at work. Today you flip to the other side of the table: you become the one building the argument, and you learn to build one that can withstand the scrutiny of a smart, skeptical reader. A weak argument just shouts an opinion. A strong one is engineered, with a clear and arguable claim at its center, real evidence holding it up, and explicit reasoning connecting the two so the reader sees exactly why the evidence proves the point. But the move that separates a good arguer from a great one is something most people avoid entirely: the counterargument. A great writer seeks out the strongest objection to their own position, states it fairly, and then answers it. Far from weakening your case, this makes it almost unbreakable, because you've shown you considered the other side and still hold your ground. Today you'll learn to architect arguments that don't just express what you believe, but actually have the power to change a thoughtful reader's mind. Onward.`,
          headline: `Argumentative Writing: Advanced`,
          subtitle: `Building an argument strong enough to change a skeptical mind. A Case Study.`,
          visual: `/voyager-assets/ela/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `From Opinion To Argument`,
          paragraphs: [
            `Everyone has opinions. An argument is something more: an opinion backed by reasons and evidence, built so a thoughtful reader can be persuaded. The difference is everything. "Pineapple belongs on pizza" is an opinion you can only shout. An argument gives reasons that someone who disagrees is forced to take seriously.`,
            `At the center of every real argument sits a claim, a clear, debatable statement of what you're trying to prove. A good claim is arguable: a reasonable person could disagree with it. "The school day should start later" is a claim. "The school day exists" is just a fact. If no one could possibly disagree, you don't have an argument, you have a description.`,
            `Advanced argument is engineering, not shouting. You're building a structure meant to bear weight, the weight of a smart, skeptical reader pushing back. The rest of this lesson is the engineer's toolkit: how to support a claim with evidence and reasoning, and how to make your argument almost unbreakable by facing the other side head-on.`,
          ],
          image: `/voyager-assets/ela/l11-s1-opinion.webp`,
          imageCaption: `Everyone has opinions. An ARGUMENT is more: an opinion backed by reasons and evidence, built so a thoughtful reader can be persuaded. "Pineapple belongs on pizza" is an opinion you can only shout; an argument gives reasons a disagreer must take seriously. At the center sits a CLAIM, a clear, debatable statement of what you're trying to prove. A good claim is ARGUABLE: a reasonable person could disagree. "The school day should start later" is a claim; "the school day exists" is just a fact. If no one could disagree, you have a description, not an argument. Advanced argument is engineering, not shouting: you build a structure to bear the weight of a smart, skeptical reader pushing back. The toolkit ahead: evidence, reasoning, and facing the other side head-on.`,
          vocab: [
            { word: `argument`,
              definition: `An opinion backed by reasons and evidence, built so a thoughtful reader can be genuinely persuaded.`,
              audioPrompt: `An argument, {name}, is much more than an opinion. It is a position backed by reasons and evidence, engineered so that even a thoughtful, skeptical reader could be persuaded. That structure is what separates arguing from just shouting.` },
            { word: `claim`,
              definition: `The clear, debatable statement at the center of an argument, the main point you are trying to prove.`,
              audioPrompt: `A claim, {name}, is the clear, debatable statement at the heart of your argument, the main point you are trying to prove. Everything else in the argument exists to support that single claim.` },
            { word: `arguable`,
              definition: `Open to genuine disagreement. A good claim is arguable, a reasonable person could take the other side.`,
              audioPrompt: `Arguable, {name}, means open to real disagreement. A good claim is arguable: a reasonable person could take the opposite side. If no one could possibly disagree with you, you have a fact or a description, not an argument.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Evidence And The Reasoning That Binds It`,
          paragraphs: [
            `A claim alone is just an assertion. To make it an argument, you need evidence, the facts, data, examples, expert testimony, or textual proof that supports it. The strongest evidence is relevant, credible, and specific. Vague gestures at "studies" persuade no one; a precise, trustworthy fact tied directly to your point does real work.`,
            `But here is the move most writers miss: evidence does not speak for itself. Between your evidence and your claim there must be reasoning, the explicit explanation of why this evidence proves this point. A fact dropped on the page without reasoning is like an ingredient with no recipe. You must connect the dots for your reader, out loud, in words.`,
            `This is the claim-evidence-reasoning chain, the backbone of every strong argument. Claim: what you're proving. Evidence: the proof. Reasoning: why the proof supports the claim. Weak arguers stop at evidence and assume the reader will connect it. Strong arguers never assume; they make the reasoning visible, so the reader is walked, step by step, to the conclusion.`,
          ],
          image: `/voyager-assets/ela/l11-s2-evidence.webp`,
          imageCaption: `A claim alone is just an assertion. To make it an argument you need EVIDENCE, the facts, data, examples, expert testimony, or textual proof that supports it. The strongest evidence is relevant, credible, and specific; vague gestures at "studies" persuade no one. But here is the move most writers miss: evidence does not speak for itself. Between evidence and claim there must be REASONING, the explicit explanation of why this evidence proves this point, connecting the dots out loud. This is the CLAIM-EVIDENCE-REASONING chain, the backbone of every strong argument. Weak arguers stop at evidence and assume the reader connects it; strong arguers make the reasoning visible, walking the reader step by step to the conclusion.`,
          vocab: [
            { word: `evidence`,
              definition: `The facts, data, examples, expert testimony, or textual proof that supports a claim. Strongest when relevant, credible, and specific.`,
              audioPrompt: `Evidence, {name}, is the proof that supports your claim: facts, data, examples, expert testimony, or quotations from a text. The strongest evidence is relevant, credible, and specific, not a vague wave at unnamed studies.` },
            { word: `reasoning`,
              definition: `The explicit explanation of why a piece of evidence actually supports the claim. The link most writers forget to make.`,
              audioPrompt: `Reasoning, {name}, is the explanation of why your evidence actually proves your claim. Evidence does not speak for itself, you have to connect the dots out loud, in words, so the reader sees exactly why it works.` },
            { word: `claim-evidence-reasoning`,
              definition: `The backbone of a strong argument: state the claim, give the evidence, then explain the reasoning that links them.`,
              audioPrompt: `Claim, evidence, reasoning, {name}, is the backbone of every strong argument. State what you're proving, give the proof, then explain why the proof supports the point. Strong arguers never skip that last step.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Counterargument: Your Secret Weapon`,
          paragraphs: [
            `Now the move that separates good arguers from great ones, and the one most people avoid: the counterargument. A counterargument is the strongest objection to your own position, the best case the other side could make. Most writers ignore it, hoping the reader won't think of it. Great writers do the opposite: they go find it.`,
            `Why deliberately raise the case against yourself? Because it makes your argument almost unbreakable. When you state the opposing view fairly, then answer it, you show the reader you've considered the other side and still hold your ground. You also disarm their doubts before they can harden. An argument that ignores objections feels fragile; one that faces them feels earned.`,
            `The skill has two parts. First, the steelman: state the opposing view in its strongest, fairest form, not a weak cartoon you can easily knock down. Then the rebuttal: explain why, even granting that, your position still holds, or why the objection matters less than it seems. A fairly stated objection, well answered, is the most persuasive thing in all of argument.`,
          ],
          image: `/voyager-assets/ela/l11-s3-counter.webp`,
          imageCaption: `Now the move that separates good arguers from great ones, and the one most avoid: the COUNTERARGUMENT, the strongest objection to your own position, the best case the other side could make. Most writers ignore it, hoping the reader won't think of it; great writers go find it. Why raise the case against yourself? Because it makes your argument almost unbreakable: state the opposing view fairly, then answer it, and you show you've considered the other side and still hold your ground, disarming doubts before they harden. The skill has two parts: the STEELMAN, stating the opposing view in its strongest, fairest form, not a weak cartoon; then the REBUTTAL, explaining why your position still holds. A fair objection, well answered, is the most persuasive thing in argument.`,
          vocab: [
            { word: `counterargument`,
              definition: `The strongest objection to your own position, raised on purpose so you can answer it and strengthen your case.`,
              audioPrompt: `A counterargument, {name}, is the strongest objection to your own position, the best case the other side could make. Great writers seek it out on purpose, because answering it makes their own argument almost unbreakable.` },
            { word: `steelman`,
              definition: `Stating the opposing view in its strongest, fairest form, the opposite of a weak strawman you can easily knock down.`,
              audioPrompt: `To steelman, {name}, means to state the opposing view in its strongest, fairest form, the opposite of a strawman. You face the best version of the other side, because beating a weak cartoon proves nothing.` },
            { word: `rebuttal`,
              definition: `Your response to a counterargument, explaining why your position still holds even after the objection is fairly stated.`,
              audioPrompt: `A rebuttal, {name}, is your answer to the counterargument: explaining why, even granting the other side's best point, your position still holds, or why their objection matters less than it first seems.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Avoiding The Traps`,
          paragraphs: [
            `Even a well-built argument can collapse if it leans on a logical fallacy, a flaw in reasoning that looks convincing but doesn't hold up. Knowing the common ones protects your own writing and sharpens your eye for others'. They are traps that feel persuasive in the moment but fall apart under a careful look.`,
            `A few to know. The strawman attacks a weak, distorted version of the opponent's view instead of the real one. The ad hominem attacks the person instead of their argument. The slippery slope claims one small step must lead to disaster, with no real chain shown. The false dilemma pretends there are only two options when more exist. Each substitutes a trick for genuine reasoning.`,
            `Tone matters too. The strongest arguments are confident but fair, taking the other side seriously rather than mocking it. Sarcasm and contempt may feel satisfying, but they signal weakness to a thoughtful reader and push away the very people you hope to persuade. A great arguer wins not by overpowering the reader but by earning their honest agreement.`,
          ],
          image: `/voyager-assets/ela/l11-s4-traps.webp`,
          imageCaption: `Even a well-built argument collapses if it leans on a LOGICAL FALLACY, a flaw in reasoning that looks convincing but doesn't hold up. A few to know: the STRAWMAN attacks a distorted version of the opponent's view instead of the real one; the AD HOMINEM attacks the person instead of their argument; the SLIPPERY SLOPE claims one small step must lead to disaster with no real chain shown; the FALSE DILEMMA pretends there are only two options when more exist. Each substitutes a trick for genuine reasoning. Tone matters too: the strongest arguments are confident but fair, taking the other side seriously rather than mocking it. Sarcasm signals weakness to a thoughtful reader. A great arguer wins by earning honest agreement, not by overpowering.`,
          vocab: [
            { word: `logical fallacy`,
              definition: `A flaw in reasoning that can sound convincing but doesn't actually hold up under careful examination.`,
              audioPrompt: `A logical fallacy, {name}, is a flaw in reasoning that can sound convincing in the moment but falls apart under a careful look. Knowing the common ones protects your own arguments and sharpens your eye for others'.` },
            { word: `strawman`,
              definition: `A fallacy that attacks a weak, distorted version of an opponent's view instead of their actual, strongest position.`,
              audioPrompt: `A strawman, {name}, is a fallacy where you attack a weak, distorted cartoon of your opponent's view instead of their real position. It's the opposite of steelmanning, and it fools no careful reader.` },
            { word: `false dilemma`,
              definition: `A fallacy that pretends only two options exist when in reality there are more.`,
              audioPrompt: `A false dilemma, {name}, is a fallacy that pretends there are only two choices when really there are more. "Either we do exactly this or disaster strikes" is a false dilemma if other real options exist.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Study`,
          paragraphs: [
            `Pull it together. An argument is an opinion engineered to persuade, built on an arguable claim. That claim is held up by relevant, credible evidence, and crucially by reasoning, the explicit link explaining why the evidence proves the point. Claim, evidence, reasoning: the backbone strong arguers always make visible.`,
            `The move that makes an argument great is the counterargument: seek out the strongest objection, steelman it fairly, then rebut it. Far from weakening your case, this makes it almost unbreakable. And guard against the traps, the strawman, ad hominem, slippery slope, false dilemma, while keeping a confident but fair tone that earns agreement rather than forcing it.`,
            `Now the case-study screen hands you five real argument situations: a claim that isn't arguable, evidence with missing reasoning, a strong counterargument move, a logical fallacy in action, and a full argument doing everything right. For each, be the argument architect: diagnose what's working or broken, and explain how to build it so it could change a skeptical reader's mind. Onward.`,
          ],
          image: `/voyager-assets/ela/l11-s5-before.webp`,
          imageCaption: `Threads together. An argument is an opinion engineered to persuade, built on an arguable CLAIM, held up by relevant, credible EVIDENCE, and crucially by REASONING, the explicit link explaining why the evidence proves the point. Claim, evidence, reasoning: the backbone strong arguers make visible. The move that makes an argument great is the COUNTERARGUMENT: seek the strongest objection, steelman it fairly, then rebut it, making your case almost unbreakable. Guard against traps, strawman, ad hominem, slippery slope, false dilemma, with a confident but fair tone. The case-study screen hands you five argument situations. Be the architect: diagnose what works or breaks, and explain how to build an argument that could change a skeptical reader's mind.`,
          vocab: [
            { word: `thesis`,
              definition: `The central claim of an argument, usually stated near the start, that the whole piece works to prove.`,
              audioPrompt: `A thesis, {name}, is the central claim of your whole argument, usually stated near the beginning. Everything that follows, evidence, reasoning, counterargument, exists to support and prove that one thesis.` },
            { word: `concession`,
              definition: `Admitting that part of the opposing view has merit, which builds your credibility before you give your rebuttal.`,
              audioPrompt: `A concession, {name}, is admitting that part of the other side's view has real merit. Granting a fair point before answering it builds your credibility and shows you're arguing honestly, not just defending blindly.` },
            { word: `persuasive`,
              definition: `Having the genuine power to change a thoughtful reader's mind, the true goal of advanced argument.`,
              audioPrompt: `Persuasive, {name}, means actually able to change a thoughtful reader's mind, which is the real goal of argument. Not just expressing what you believe, but building a case strong enough to move someone who started out disagreeing.` },
          ],
        },

        {
          id: `l11-case-study`,
          type: `case-study`,
          headline: `Five Arguments On The Table`,
          intro: `{name}, five real argument situations. For each, be the argument architect: diagnose what's working or broken, and explain how to build it so it could change a skeptical reader's mind, not just express what someone believes.`,
          cases: [
            {
              id: `c1`,
              title: `The claim that isn't arguable`,
              type: `Claim / arguability`,
              description: `A student opens an essay: "In this paper I will argue that water is essential for human life." They've stated it confidently and plan to back it with facts about hydration. Consider whether this is a real argument, and what's gone wrong at the foundation.`,
              questions: [
                `Is this claim actually arguable? Why or why not?`,
                `What's the difference between this and a real argument?`,
                `How could the student turn the topic into something arguable?`,
              ],
              evaluation: `This isn't a real argument because the claim isn't arguable: no reasonable person disagrees that water is essential to life, so it's a fact, a description, not a debatable claim. The difference is that a real argument requires a position a thoughtful person could genuinely oppose; if no one could take the other side, there's nothing to prove and no work for evidence and reasoning to do. To make it arguable, the student needs to move to contested ground, for example, "Public schools should install free water-refill stations in every hallway," or "The city should treat clean water access as a basic right and fund it accordingly." Now a reasonable person could disagree (about cost, priorities, the role of government), which means there's a real claim to defend with evidence, reasoning, and a counterargument. The fix is foundational: before building any argument, test whether your central claim could actually be opposed. If not, you have a topic, not a thesis.`,
            },
            {
              id: `c2`,
              title: `Evidence with the reasoning missing`,
              type: `Evidence + reasoning`,
              description: `A writer argues that their town should add bike lanes. They write: "Studies show that cities with bike lanes have 40% fewer cycling injuries. Therefore, our town should add bike lanes." The evidence is specific and real. Consider what's still missing.`,
              questions: [
                `The evidence seems strong, so what's the gap?`,
                `Why doesn't the evidence fully "speak for itself" here?`,
                `What reasoning would make this airtight?`,
              ],
              evaluation: `The gap is reasoning: the writer jumps from evidence straight to conclusion without explaining the link, assuming the reader will connect the dots. The evidence doesn't fully speak for itself because a skeptical reader can ask real questions the writer hasn't answered: are those other cities actually comparable to our town? Does correlation prove the bike lanes caused the drop, or could something else explain it? Is reducing cycling injuries a goal our town shares and prioritizes? Strong reasoning would walk the reader across that bridge explicitly, for example: "Because these cities are similar in size and traffic to ours, and because the injury drop followed directly after the lanes were installed in study after study, it's reasonable to expect a similar safety benefit here, which matters because protecting residents is a core duty of the town." That added reasoning turns a fact dropped on the page into an argument that holds. The lesson: never assume evidence is self-explanatory; make the why visible.`,
            },
            {
              id: `c3`,
              title: `Using the counterargument well`,
              type: `Counterargument`,
              description: `A writer arguing that their school should start later writes: "Some will say a later start just pushes everything back and disrupts sports and jobs. That's a real concern. But research shows teens' sleep needs are biological, and schools that shifted later saw better grades and fewer car crashes, benefits that outweigh the scheduling cost, which can be managed." Consider why this is powerful.`,
              questions: [
                `What is the writer doing by raising the objection themselves?`,
                `Why does stating it fairly ("that's a real concern") help?`,
                `How does the rebuttal strengthen rather than weaken the case?`,
              ],
              evaluation: `By raising the objection themselves, the writer is using the counterargument as a secret weapon: instead of hoping the reader won't think of the scheduling problem, they go find the strongest objection and confront it head-on, which signals confidence and honesty. Stating it fairly, "that's a real concern", is a steelman and a concession; it shows the writer isn't dodging or distorting the other side, which builds enormous credibility and makes a skeptical reader trust them. The rebuttal then strengthens rather than weakens the case because it doesn't deny the objection, it outweighs it: granting the real scheduling cost, the writer shows the biological sleep need and the documented gains in grades and safety are bigger, and adds that the cost "can be managed." An argument that ignored this objection would feel fragile, the reader's unspoken doubt left to harden; this one feels earned, because the writer considered the best case against themselves and still held their ground. That's what makes it almost unbreakable.`,
            },
            {
              id: `c4`,
              title: `A logical fallacy in action`,
              type: `Fallacy`,
              description: `In a debate about a new school dress code, one student argues: "My opponent clearly just wants to control students and doesn't care about their freedom at all. And if we let them ban hats today, soon they'll be telling us what to think." Consider what's gone wrong in the reasoning here.`,
              questions: [
                `What two fallacies appear in this short passage?`,
                `Why do these tricks feel persuasive but fail under scrutiny?`,
                `How would a strong arguer make the point honestly instead?`,
              ],
              evaluation: `Two fallacies appear. First, an ad hominem: "my opponent just wants to control students and doesn't care about freedom" attacks the person's supposed motives instead of their actual argument about the dress code. Second, a slippery slope: "if we let them ban hats today, soon they'll be telling us what to think" claims one small step must lead to disaster, with no real chain of cause shown. These feel persuasive in the heat of debate because they're emotionally satisfying, they cast the opponent as a villain and raise alarm, but they fail under scrutiny because neither actually engages the real question: is this specific dress code a good idea? A strong arguer would drop the tricks and argue honestly: steelman the opponent's actual reasoning (perhaps they believe a dress code reduces distraction or pressure), then rebut it with evidence and reasoning about whether it really does, and at what cost to student expression. Honest argument engages the real position; fallacies dodge it. And the contemptuous tone would push away the very people the student hopes to persuade.`,
            },
            {
              id: `c5`,
              title: `The whole machine working`,
              type: `Full argument`,
              description: `Consider a complete short argument: an arguable claim, evidence with explicit reasoning, a fairly stated counterargument with a rebuttal, no fallacies, and a confident but fair tone. Think about how all the pieces lock together into something that could actually move a skeptical reader.`,
              questions: [
                `How do claim, evidence, and reasoning work together as a backbone?`,
                `Where does the counterargument fit, and what does it add?`,
                `Why does this combination actually persuade, not just express?`,
              ],
              evaluation: `Claim, evidence, and reasoning form the backbone: the arguable claim states what's being proved, the evidence supplies relevant and credible proof, and the reasoning makes the link visible, walking the reader step by step from proof to point rather than assuming they'll connect it. The counterargument fits after the case is built: the writer seeks the strongest objection, states it fairly (steelman), and answers it (rebuttal), which adds the crucial signal that they considered the other side and still hold their ground, disarming the reader's doubts before they harden. This combination persuades rather than merely expresses because it does the reader's skeptical work for them: every link is shown, the best objection is faced honestly, no fallacy props it up, and the fair tone invites agreement instead of forcing it. A reader who started out disagreeing is walked across every gap, sees their own best objection taken seriously, and finds it answered, which is exactly how a mind actually changes. That's the architect's achievement: not a louder opinion, but a structure strong enough to bear a skeptical reader's full weight and still stand.`,
            },
          ],
          synthesisPrompt: `After all five: pick something you genuinely believe and sketch an argument for it. What's your arguable claim, one piece of evidence with its reasoning, and the strongest counterargument you'd have to face and answer? In 5-6 sentences.`,
          reflectionPrompt: `The lesson says facing the strongest objection to your own view makes your argument stronger, not weaker. Is that hard to do? When have you actually changed your mind because someone took your best objection seriously and answered it?`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the difference between an opinion and an argument?`,
              options: [
                `An opinion is always wrong, while an argument is always correct.`,
                `An argument is an opinion backed by reasons and evidence, built to persuade.`,
                `An opinion is longer and more detailed than an argument ever is.`,
                `An argument must be about politics, while an opinion can be about anything.`,
              ],
              correctIndex: 1,
              explanation: `An argument is more than an opinion: it's a position backed by reasons and evidence, engineered so a thoughtful reader can be persuaded. The distractors wrongly tie the difference to right/wrong, length, or subject matter.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What makes a claim "arguable"?`,
              options: [
                `It is stated very loudly and with great confidence.`,
                `It is something everyone already agrees is completely true.`,
                `A reasonable person could genuinely disagree with it.`,
                `It contains at least three pieces of supporting evidence.`,
              ],
              correctIndex: 2,
              explanation: `A claim is arguable when a reasonable person could genuinely disagree with it, that's what gives you something to prove. The distractors confuse arguability with volume, universal agreement (which makes it a fact, not a claim), or evidence count.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `In the claim-evidence-reasoning chain, what is "reasoning"?`,
              options: [
                `The explicit explanation of why the evidence actually supports the claim.`,
                `The list of sources where you found all of your evidence.`,
                `The opposing view that you have to argue against in your essay.`,
                `The loudest and most emotional part of your argument.`,
              ],
              correctIndex: 0,
              explanation: `Reasoning is the explicit explanation of why a piece of evidence supports the claim, the link writers most often forget because evidence doesn't speak for itself. The distractors describe a source list, the counterargument, and emotional appeal.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `According to the lesson, why does evidence "not speak for itself"?`,
              options: [
                `Because evidence is always unreliable and should be left out.`,
                `Because readers prefer emotion and never care about facts.`,
                `Because a skeptical reader needs the reasoning that links the evidence to the claim.`,
                `Because evidence is only convincing if there's a very large amount of it.`,
              ],
              correctIndex: 2,
              explanation: `Evidence doesn't speak for itself because a skeptical reader needs the reasoning, the explicit link showing why this evidence proves this point; a fact dropped without reasoning is like an ingredient with no recipe. The distractors dismiss evidence, dismiss facts, or reduce it to quantity.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is a counterargument, and why do great writers raise it on purpose?`,
              options: [
                `A second claim unrelated to the first, added to make the essay longer.`,
                `The strongest objection to your own view, raised so you can answer it and strengthen your case.`,
                `A direct personal attack aimed at absolutely anyone who happens to openly disagree with you.`,
                `A summary of your main points placed at the end of the essay.`,
              ],
              correctIndex: 1,
              explanation: `A counterargument is the strongest objection to your own position, and great writers seek it out on purpose because stating it fairly and answering it makes the argument almost unbreakable. The distractors confuse it with padding, a personal attack, or a summary.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does it mean to "steelman" an opposing view?`,
              options: [
                `To ignore the opposing view completely and hope no one notices.`,
                `To attack the weakest, most ridiculous version of it.`,
                `To insult the people who hold the opposing view.`,
                `To state the opposing view in its strongest, fairest form before answering it.`,
              ],
              correctIndex: 3,
              explanation: `To steelman is to state the opposing view in its strongest, fairest form, the opposite of a strawman, because beating a weak cartoon proves nothing. The distractors describe ignoring it, strawmanning it, or attacking the people.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Which of these correctly describes a logical fallacy from the lesson?`,
              options: [
                `An ad hominem attacks the person instead of their actual argument.`,
                `A steelman pretends there are only two possible options.`,
                `A rebuttal claims one small step must lead to disaster.`,
                `A concession attacks a distorted version of the opponent's view.`,
              ],
              correctIndex: 0,
              explanation: `An ad hominem is the fallacy of attacking the person instead of their argument. The distractors scramble the terms: a false dilemma (not steelman) offers only two options, a slippery slope (not rebuttal) claims disaster, and a strawman (not concession) attacks a distorted view.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the lesson say a confident-but-fair tone beats sarcasm and contempt?`,
              options: [
                `Because rules forbid any strong feelings in argumentative writing.`,
                `Because sarcasm signals weakness and pushes away the people you hope to persuade.`,
                `Because a fair tone means you secretly agree with the other side.`,
                `Because contempt is the fastest way to win any serious debate.`,
              ],
              correctIndex: 1,
              explanation: `A confident-but-fair tone beats sarcasm because contempt signals weakness to a thoughtful reader and pushes away the very people you hope to persuade; a great arguer earns honest agreement. The distractors invent a feelings ban, misread fairness as agreement, or praise contempt.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Raising the strongest objection to your own argument is a mistake, because it just gives the reader doubts and makes your position look weaker.`,
              correctAnswer: false,
              explanation: `False, and this is the single most important counterintuitive idea in the whole lesson. It feels natural to think that mentioning the case against yourself hands ammunition to the other side, so many writers deliberately hide from objections, hoping the reader simply won't think of them. But the opposite is true: facing the strongest objection head-on is exactly what makes an argument almost unbreakable. Here's why. When you steelman the opposing view, state it in its strongest, fairest form, and then rebut it, you accomplish several things at once. You show the reader you've actually considered the other side, which builds enormous credibility and trust. You disarm their doubts before those doubts can harden into resistance, because you raise and answer the very objection they were forming in their own head. And you demonstrate that even granting the best case against you, your position still holds, which is far more convincing than pretending no good objection exists. An argument that ignores objections feels fragile, like it's avoiding something; an argument that confronts the toughest counterpoint and answers it feels earned and honest. The reader who began skeptical is walked through their own best objection and shown why it doesn't sink your claim, and that is precisely how a thoughtful mind actually changes. So the counterargument isn't a weakness to avoid, it's the secret weapon of every great arguer.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A classmate's essay states an arguable claim and piles on real statistics, but never raises the opposing view and ends by calling people who disagree "clueless." It feels forceful but somehow unconvincing. Using the lesson, what's the best diagnosis?`,
              options: [
                `It's perfect as is; lots of statistics and a strong tone are all an argument needs.`,
                `The only problem is that it doesn't have enough statistics yet.`,
                `It needs more insults to really drive the point home against the other side.`,
                `Two things are missing: it never makes the reasoning visible or faces the strongest counterargument, and the contemptuous "clueless" tone signals weakness and pushes away the readers it needs to persuade, so it expresses a view forcefully but isn't built to change a skeptical mind.`,
              ],
              correctIndex: 3,
              explanation: `This applies the lesson's core diagnosis. Piling on statistics isn't enough if the reasoning linking evidence to claim stays invisible and the strongest counterargument is never faced, an argument that ignores objections feels fragile. And calling opponents "clueless" is a contemptuous tone that signals weakness and repels the very readers it must persuade. So it's forceful expression, not a structure built to change a skeptical mind. The distractors call it perfect, reduce the fix to more statistics, or endorse insults.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-steelman`, category: `Facing the other side`, prompt: `The hardest, most powerful move is to state the opposing view in its strongest form. Pick something you believe strongly. Can you write the very best case against your own position, fairly, with no cartoon version? What did doing that reveal?` },
            { id: `reflect-changed`, category: `Changing your mind`, prompt: `When have you actually changed your mind about something? What did it take, what evidence, reasoning, or fairly-stated point finally moved you? What does that tell you about how to persuade someone else?` },
            { id: `reflect-reasoning`, category: `The invisible link`, prompt: `The lesson says evidence doesn't speak for itself, you have to show the reasoning. Think of a time someone threw facts at you but never explained why they mattered. Why did it fail to convince? What would have made the connection land?` },
            { id: `reflect-heritage`, category: `Arguing for what matters`, prompt: `Caro, you're building things you believe in, a learning platform, a vision for conscious families. If you had to argue for one of them to a smart skeptic, what's your arguable claim, your best evidence, and the toughest counterargument you'd have to answer honestly?` },
            { id: `reflect-tone`, category: `Confident but fair`, prompt: `The strongest arguers stay fair, even toward people they disagree with. Why is it so tempting to mock the other side instead? When have you seen contempt actually backfire, pushing people further away rather than persuading them?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this 'fairness to the other side' is just weakness, you should hit your opponent as hard as possible and never concede anything." State that view as strongly as you can. Where might it have a point, and where does the lesson show it's mistaken?` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `A real argument is built to change a mind, including, sometimes, your own. These put the architect's tools to work. Two paths.`,
          familyActivity: {
            title: `The Steelman Challenge`,
            duration: `One conversation`,
            description: `Turn a family disagreement into a thinking game. Pick a low-stakes topic people in the family actually see differently, anything from "is a hot dog a sandwich" to a real household debate about screens, chores, or weekend plans. Here's the twist that makes it powerful: before anyone argues their own side, each person has to steelman the opposing view, state the other side's position in its strongest, fairest form, so well that the person who actually holds that view says "yes, that's exactly what I think." Only after you've fairly captured the other side do you get to make your own case, and your case must include claim, evidence or reasons, and an honest answer to the best objection you just stated. Notice what happens: the conversation gets calmer and smarter, because no one is fighting a cartoon, and people sometimes discover they understand the other side better than they expected, occasionally even changing their own mind. The goal isn't to win, it's to feel, together, how facing the strongest version of the other side makes everyone think more clearly, the exact opposite of how most arguments go.`,
          },
          projectOption: {
            title: `Build A Bulletproof Argument, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Engineer an argument strong enough to survive a skeptic. Week 1: choose something you genuinely believe and that's truly arguable (a reasonable person could disagree). Write an arguable claim, then gather two or three pieces of relevant, credible, specific evidence, and for each one, write the reasoning out loud, the explicit sentences explaining why that evidence supports your claim. Don't let any fact sit there unexplained. Week 2: now attack your own argument. Find the single strongest objection a smart opponent could raise, and write it in its strongest, fairest form (steelman it), so fairly that someone on the other side would nod. Then write your rebuttal: explain why, even granting that objection, your claim still holds, or why the objection matters less than it seems. Finally, read the whole thing and hunt for fallacies, any strawman, ad hominem, slippery slope, or false dilemma, and remove them, and check your tone is confident but fair. The finished piece should be able to face a skeptical reader and still stand. You'll have built not just an opinion, but a machine for changing minds, including the discipline to question your own.`,
            offerToParent: `Parent: opt your child into the bulletproof-argument project. Building an argument with an arguable claim, evidence paired with explicit reasoning, and a steelmanned counterargument with a real rebuttal develops the highest level of argumentative writing in the standards, and the intellectual honesty to attack one's own position. Hunting their own fallacies and managing tone builds critical thinking that transfers to every subject and to civic life. It's rigorous, CCSS-aligned writing that produces a genuinely persuasive piece and a sharper, fairer thinker.`,
          },
          identityQuestion: `If you become someone who can build an argument that faces the strongest objection honestly and still stands, and who can change their own mind when the other side is right, what kind of thinker does that make you, in a world full of people who only shout louder, that someone who just defends their side at all costs can never quite become?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can argue for what I believe and still face the other side fairly.`,
            `A thinker who shows the reasoning, not just the facts.`,
            `Someone willing to change my mind when the strongest objection is right.`,
          ],
          saveKey: `identity_responses_ela_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. Eleven done, and you've become an argument architect. You learned that an argument is far more than an opinion, it's a structure engineered to persuade, built on a claim that's actually arguable, one a reasonable person could oppose. You learned the backbone, claim, evidence, reasoning, and the move most writers miss: that evidence never speaks for itself, so you must make the reasoning visible, walking the reader step by step. Most of all, you learned the secret weapon of every great arguer, the counterargument: seeking out the strongest objection, steelmanning it fairly, and rebutting it, which doesn't weaken your case but makes it almost unbreakable. You learned to spot the traps, the strawman, ad hominem, slippery slope, and false dilemma, and to keep a tone confident but fair, because a great arguer earns honest agreement rather than shouting people down. You can now build arguments that don't just express what you believe, but have the real power to change a thoughtful mind, including, when the evidence demands it, your own. Next: we go one level higher, to synthesis writing, where you'll weave many sources into a single argument of your own. Onward, {name}. — Quill`,
          badge: `argument-architect`,
          badgeName: `Argument Architect`,
          xpEarned: 75,
          competencies: [
            `Distinguishes an argument from an opinion and writes a genuinely arguable claim`,
            `Builds the claim-evidence-reasoning chain and makes the reasoning explicit`,
            `Selects evidence that is relevant, credible, and specific`,
            `Uses the counterargument as a strength: steelmans the opposing view, then rebuts it`,
            `Identifies and avoids common logical fallacies (strawman, ad hominem, slippery slope, false dilemma)`,
            `Maintains a confident but fair tone that earns agreement rather than forcing it`,
            `Constructs arguments built to change a skeptical reader's mind, and questions their own position`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Synthesis Writing`,
            hook: `Weaving many sources into a single argument that is entirely your own. A Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L11 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz}`);
}
