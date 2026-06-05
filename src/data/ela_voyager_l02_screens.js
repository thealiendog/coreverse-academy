// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L02 — Analyzing Argument: Logos, Ethos, and Pathos
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Informational Text, Argument Analysis
// Interaction: SOURCE EVALUATION. Calibrated to Voyagers Spec v1.0.
// Paragraphs trimmed (~750-870 chars/section) for karaoke alignment. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l02-v1";

const ELA_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-02`,
      title: `Analyzing Argument: Logos, Ethos, and Pathos`,
      duration: 35,
      xpReward: 75,
      badge: `argument-analyst`,
      badgeName: `Argument Analyst`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, last time you learned to spot the three appeals as you read. Today we go deeper and learn to take an argument apart with precision. Every real argument has working parts: a claim it wants you to accept, evidence it offers as support, and reasoning that connects the two. When you can name those parts, you can test them. Is the claim clear? Is the evidence real and relevant? Does the reasoning actually hold, or is there a gap where the "because" should be? You will also sharpen your eye for how ethos, pathos, and logos do their jobs inside a working argument, and where each can quietly break down. By the end, you will be able to read a powerful argument and say exactly why it works, and read a weak one and put your finger on precisely where it fails. That is the difference between feeling convinced and knowing why. Onward.`,
          headline: `Analyzing Argument: Logos, Ethos, and Pathos`,
          subtitle: `Taking an argument apart with precision. Source Evaluation.`,
          visual: `/voyager-assets/ela/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Parts Of An Argument`,
          paragraphs: [
              `An argument is not just an opinion stated loudly. A real argument has parts that work together. The claim is the point it wants you to accept. The evidence is what it offers as support: facts, data, examples, expert testimony. And the reasoning is the link that explains why the evidence actually supports the claim.`,
              `Naming the parts lets you test each one. Is the claim clear and specific, or vague? Is the evidence real and relevant, or cherry-picked? And the part most people skip: does the reasoning actually connect the evidence to the claim? A pile of true facts proves nothing if the reasoning linking them is broken.`,
              `Think of it like a bridge. The claim is the far bank you are asked to reach. The evidence is the ground you start on. The reasoning is the bridge between them. Strong arguments build a bridge you can walk across. Weak ones pile up ground and hope you jump the gap without noticing there is no bridge.`,
            ],
          image: `/voyager-assets/ela/l02-s1-parts.webp`,
          imageCaption: `An argument is not just a loud opinion. It has parts: the CLAIM (the point it wants you to accept), the EVIDENCE (facts, data, examples, expert testimony offered as support), and the REASONING (the link explaining why the evidence supports the claim). Naming the parts lets you test each: is the claim clear or vague? Is the evidence real, recent, relevant, or cherry-picked? And the part most people skip: does the reasoning actually connect evidence to claim, or is there a hidden leap? A pile of true facts proves nothing if the reasoning is broken. Like a bridge: the claim is the far bank, the evidence is the ground you start on, the reasoning is the bridge between. Strong arguments build a bridge you can walk across; weak ones pile up ground and hope you jump the gap.`,
          vocab: [
            { word: `claim`,
              definition: `The main point an argument wants you to accept. A good claim is clear and specific, not vague.`,
              audioPrompt: `A claim is the main point an argument is trying to get you to accept, {name}. Before you judge any argument, find its claim. If you cannot state it in one clear sentence, the argument may be vaguer than it sounds.` },
            { word: `evidence`,
              definition: `The facts, data, examples, or expert testimony an argument offers to support its claim.`,
              audioPrompt: `Evidence is what an argument offers as support, {name}: facts, data, examples, expert testimony. Good evidence is real, recent, and relevant to the claim. Always ask whether the evidence actually fits the point it is supposed to prove.` },
            { word: `reasoning`,
              definition: `The logical link that explains why the evidence actually supports the claim. The part people most often skip.`,
              audioPrompt: `Reasoning is the link between evidence and claim, {name}, the part that explains why the evidence proves the point. Most people skip checking it. But a pile of true facts proves nothing if the reasoning connecting them to the claim is broken.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Logos: When Logic Carries The Weight`,
          paragraphs: [
              `Logos is the appeal to logic and evidence, and in a strong argument it does the heaviest lifting. Good logos means real evidence and reasoning that actually holds. Checking logos means checking the bridge: does this evidence, reasoned this way, truly get me to this claim?`,
              `Logos breaks in spottable ways. A sourceless statistic sounds like evidence but cannot be checked. A hasty generalization leaps from one or two cases to everyone. A false cause claims that because one thing followed another, the first caused the second. A non sequitur offers a because that simply does not follow.`,
              `Logos matters most because it is the part you can verify yourself. You can check whether a statistic has a source, whether two cases prove a rule, whether the conclusion follows. Ethos and pathos work on trust and feeling; logos is the one appeal you can take apart and inspect.`,
            ],
          image: `/voyager-assets/ela/l02-s2-logos.webp`,
          imageCaption: `Logos is the appeal to logic and evidence, doing the heaviest lifting in a strong argument: the claim is supported by real evidence and the reasoning holds. Checking logos means checking the bridge, does this evidence, reasoned this way, truly reach this claim? Logos breaks in spottable ways: a SOURCELESS STATISTIC sounds like evidence but cannot be checked; a HASTY GENERALIZATION leaps from one or two cases to "everyone"; a FALSE CAUSE claims that because one thing followed another, the first caused the second; a NON SEQUITUR offers a "because" that does not follow. Logos matters most because it is the part you can verify yourself: check if a statistic has a source, ask if two cases prove a rule, trace whether the conclusion follows. Ethos and pathos work on trust and feeling; logos you can actually take apart and inspect.`,
          vocab: [
            { word: `logos`,
              definition: `The appeal to logic and evidence: a claim supported by real evidence and sound reasoning that you can check yourself.`,
              audioPrompt: `Logos is the appeal to logic and evidence, {name}. In a strong argument it does the heaviest lifting. Best of all, it is the one appeal you can verify yourself, by checking the evidence and tracing whether the reasoning actually holds.` },
            { word: `hasty generalization`,
              definition: `A broken-logos move that leaps from one or two examples to a sweeping claim about "everyone" or "always."`,
              audioPrompt: `A hasty generalization leaps from a tiny sample to a huge claim, {name}, from one or two cases to everyone or always. Two rude people from a city do not prove the whole city is rude. When you see always or everyone, check how many cases it really rests on.` },
            { word: `false cause`,
              definition: `A broken-logos move that assumes because one thing happened after another, the first must have caused the second.`,
              audioPrompt: `False cause assumes that because B followed A, A must have caused B, {name}. But order is not proof. The rooster crows before sunrise, but it does not cause the sun to rise. Always ask whether there is a real link, or just a sequence.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Ethos: When You Trust The Source`,
          paragraphs: [
              `Ethos is the appeal to credibility, and inside an argument it answers one question: should I trust this source? Real ethos is earned, by showing knowledge, being fair to other views, being honest about limits, and having genuine expertise in the matter at hand.`,
              `But ethos is the easiest appeal to fake. Watch for borrowed authority, a celebrity speaking outside their field, or an actor playing an expert. Watch for vague appeals like experts agree with no experts named. Faked ethos is a costume; real ethos is a track record.`,
              `Here is the subtle skill: ethos should support an argument, never replace it. Even a credible source still owes you evidence and reasoning. Trust me, I am an expert is not an argument; it is a request to skip the argument. Ask: has this source earned my trust, and are they still showing me their work?`,
            ],
          image: `/voyager-assets/ela/l02-s3-ethos.webp`,
          imageCaption: `Ethos is the appeal to credibility, answering one question inside an argument: should I trust this source? Real ethos is earned, by demonstrating knowledge, being fair to other views, being honest about limits, and having genuine expertise in the matter. But ethos is the easiest appeal to fake, and a strong argument should not need faked credibility. Watch for BORROWED AUTHORITY (a celebrity outside their field, an actor playing an expert), VAGUE APPEALS ("experts agree," none named), and CREDENTIALS that sound impressive but do not match the topic. The subtle skill: ethos should support an argument, never replace it. Even a credible source owes you evidence and reasoning. "Trust me, I am an expert" is not an argument, it is a request to skip the argument. Ask: has this source earned my trust, and are they still showing me their work?`,
          vocab: [
            { word: `ethos`,
              definition: `The appeal to credibility: the question of whether a source has earned your trust through real knowledge, fairness, and honesty.`,
              audioPrompt: `Ethos is the appeal to credibility, {name}, the question of whether you should trust the source. Real ethos is earned through knowledge, fairness, and honesty. But it is the easiest appeal to fake, so always ask whether the credibility is real or borrowed.` },
            { word: `borrowed authority`,
              definition: `A faked-ethos move where someone trades on status or fame that does not actually apply to the topic at hand.`,
              audioPrompt: `Borrowed authority is faked credibility, {name}, a celebrity speaking outside their field, or an actor playing an expert. The status is real but it does not apply to the topic. Being famous at one thing is not expertise in another.` },
            { word: `credibility`,
              definition: `How trustworthy and believable a source is. It should support an argument, not replace the evidence and reasoning.`,
              audioPrompt: `Credibility is how trustworthy a source is, {name}. Here is the subtle part: even a truly credible source still owes you evidence and reasoning. Trust me, I am an expert is not an argument. It is a request to skip the argument.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Pathos: When Feeling Enters The Argument`,
          paragraphs: [
              `Pathos is the appeal to emotion, and it has a real role inside an argument. Emotion can show why a claim matters; a statistic about preventable harm lands differently when you feel the human reality. Honest pathos uses emotion that fits the truth and points you toward the evidence, not away from it.`,
              `Pathos turns into a fallacy when emotion replaces reasoning. An appeal to fear rushes you toward a conclusion before you can think. An appeal to pity asks you to accept a claim just because a situation is sad. Outrage bait stokes anger so you share without checking. The tell: is the emotion lighting up the evidence, or drowning it out?`,
              `So pathos is not the enemy, and an argument with zero emotion can be weak too, failing to show why anything matters. The skill is balance and honesty. Ask: does this feeling fit what is true here? Honest pathos respects your mind enough to move it and let it keep working. Manipulative pathos wants the feeling to do your thinking for you.`,
            ],
          image: `/voyager-assets/ela/l02-s4-pathos.webp`,
          imageCaption: `Pathos is the appeal to emotion, with a real role inside an argument: emotion can show why a claim matters, and a statistic about preventable harm lands differently when you feel the human reality. Honest pathos uses emotion that fits the truth and points toward the evidence, not away. It turns into a fallacy when emotion replaces reasoning: an APPEAL TO FEAR rushes you to a conclusion before you can think; an APPEAL TO PITY asks you to accept a claim just because a situation is sad; OUTRAGE BAIT stokes anger so you share without checking. The tell: is the emotion lighting up the evidence, or drowning it out? Pathos is not the enemy, and an argument with zero emotion can be weak too. The skill is balance: does this feeling fit what is true, and does it leave my reasoning intact?`,
          vocab: [
            { word: `pathos`,
              definition: `The appeal to emotion. Honest pathos uses feeling that fits the truth and supports reasoning rather than replacing it.`,
              audioPrompt: `Pathos is the appeal to emotion, {name}, and it has a real role: emotion can show why a claim matters. Honest pathos fits the truth and points you toward the evidence. It becomes a problem only when feeling is used to switch your thinking off.` },
            { word: `appeal to fear`,
              definition: `A manipulative-pathos move that uses alarm to rush you toward a conclusion before you can reason about it.`,
              audioPrompt: `An appeal to fear uses alarm to rush you, {name}, pushing you to a conclusion before you can stop and think. The manufactured urgency is itself the warning sign. When something says act now or be afraid, slow down and ask for the evidence.` },
            { word: `appeal to pity`,
              definition: `A manipulative-pathos move that asks you to accept a claim just because a situation is sad, even when the claim doesn't follow.`,
              audioPrompt: `An appeal to pity asks you to accept a claim just because something is sad, {name}, even when the sadness does not actually prove the point. Real suffering deserves compassion, but compassion is not the same as a sound reason to believe a claim.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
              `Pull it together. Every argument has three parts: a claim, evidence, and the reasoning that links them, and naming the parts lets you test each one. Logos is the appeal you can verify yourself, and it breaks through sourceless statistics, hasty generalizations, false cause, and non sequiturs.`,
              `Ethos asks whether to trust the source: real credibility is earned, faked is borrowed, and even a trustworthy source still owes you evidence. Pathos brings feeling: honest pathos fits the truth and supports reasoning, while manipulative pathos uses fear, pity, or outrage to switch your thinking off.`,
              `Now the source-evaluation screen hands you five arguments. For each, find the claim, weigh the evidence, test the reasoning, and judge how the appeals work. Some are strong. Some have a hidden broken link. Say exactly why each one works or fails, not just whether it feels convincing.`,
            ],
          image: `/voyager-assets/ela/l02-s5-before.webp`,
          imageCaption: `Threads together. Every argument has three parts: claim, evidence, and the reasoning linking them, and naming the parts lets you test each. Logos is the appeal you can verify yourself, breaking through sourceless statistics, hasty generalizations, false cause, and non sequiturs. Ethos asks whether to trust the source: real credibility is earned, faked is borrowed, and even a trustworthy source owes you evidence. Pathos brings feeling: honest pathos fits the truth and supports reasoning, manipulative pathos uses fear, pity, or outrage to switch thinking off. The source-evaluation screen hands you five arguments. Take each apart: find the claim, weigh the evidence, test the reasoning, judge how the appeals work. Say exactly why each works or fails, not just whether it feels convincing.`,
          vocab: [
            { word: `analyzing argument`,
              definition: `Reading an argument by separating its claim, evidence, and reasoning, then testing each part and the appeals at work.`,
              audioPrompt: `Analyzing argument means taking it apart, {name}: find the claim, weigh the evidence, test the reasoning, and see how the appeals are working. The goal is to say exactly why an argument works or fails, not just whether it feels convincing.` },
            { word: `non sequitur`,
              definition: `A broken-logos move where the conclusion does not actually follow from the evidence given. Latin for "it does not follow."`,
              audioPrompt: `A non sequitur is a conclusion that does not follow, {name}. The words mean it does not follow in Latin. The evidence may even be true, but it simply does not lead to the claim. Always check that the because actually connects to the point.` },
            { word: `verify`,
              definition: `To check whether a claim or piece of evidence is actually true by tracing its source and reasoning.`,
              audioPrompt: `To verify is to check whether something is actually true, {name}, by tracing its source and testing its reasoning. Logos is the appeal you can verify. When a claim resists checking, that resistance is itself worth noticing.` },
          ],
        },

        {
          id: `l02-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Arguments To Take Apart`,
          intro: `{name}, five arguments. For each: find the claim, weigh the evidence, and test the reasoning that links them. Then judge how ethos, pathos, and logos are working, and whether any of them is broken or faked. Say exactly why each one works or fails.`,
          sources: [
            {
              id: `s1`,
              tier: `strong-logos`,
              title: `A well-built evidence-based argument`,
              type: `Strong logos`,
              context: `An argument for later school start times states a clear claim, cites named sleep studies on adolescent biology, explains the reasoning linking teen sleep cycles to the proposal, and notes one trade-off (bus scheduling) honestly.`,
              quote: `"Teen circadian rhythms shift later; here are the named studies, here is how that connects to start times, and here is the one real cost."`,
              questions: [
                `What is the claim, the evidence, and the reasoning here?`,
                `Why does naming the studies and admitting a trade-off strengthen it?`,
                `Is the bridge from evidence to claim solid?`,
              ],
              evaluation: `The claim is that schools should start later; the evidence is named studies on adolescent sleep biology; the reasoning links teens' later circadian rhythms to the benefit of later start times. This is strong logos: the evidence is real and checkable, the reasoning actually connects evidence to claim, and naming the studies lets you verify it yourself. Admitting the bus-scheduling trade-off strengthens it, because honest arguments state their costs rather than hiding them. The bridge from evidence to claim is solid. The right response is to take it seriously and, if you want, check the cited studies, which is exactly what good logos invites.`,
            },
            {
              id: `s2`,
              tier: `false-cause`,
              title: `A false-cause argument`,
              type: `Broken logos (false cause)`,
              context: `An argument claims a new study app caused a school's test scores to rise, simply because scores went up the same year the app was introduced. No other factors are considered and no direct link is shown.`,
              quote: `"Scores rose the year we added the app, so the app raised the scores. Every school should buy it."`,
              questions: [
                `Which part of the argument is broken, and what is the fallacy called?`,
                `What other explanations does it ignore?`,
                `How would you test whether the app actually helped?`,
              ],
              evaluation: `The reasoning is broken: this is false cause. The argument assumes that because scores rose after the app appeared, the app must have caused the rise, but order is not proof. It ignores other explanations, a new teacher, an easier test, more study time, a smaller class, any of which could explain the change. To actually test it, you would compare similar schools with and without the app, or look at scores before and after while holding other things steady. The claim might even be true, but this argument has not shown it; the bridge from evidence to claim has a missing plank. The right response is to withhold belief and ask for a real comparison.`,
            },
            {
              id: `s3`,
              tier: `faked-ethos`,
              title: `An argument leaning on borrowed authority`,
              type: `Faked ethos`,
              context: `A famous actor argues for a specific medical treatment, citing only their own fame and confidence, with no medical training and no studies. The argument rests almost entirely on "trust me, I'm well known."`,
              quote: `"I'm one of the most trusted people in the country, so believe me: this treatment works."`,
              questions: [
                `Which appeal is doing the work, and why is it faked?`,
                `What is the argument missing entirely?`,
                `Does being famous and trusted make the medical claim true?`,
              ],
              evaluation: `This runs on ethos, and it is borrowed authority: fame in acting is being used as if it were expertise in medicine, which it is not. The argument is missing the two things that would actually matter, evidence (studies, data) and reasoning (why this treatment works). Being famous and widely trusted does not make a medical claim true; credibility in one field does not transfer to another, and even a real doctor would still owe you the evidence. "Trust me" is a request to skip the argument, not an argument. The right response is to set the fame aside entirely and ask for the medical evidence, which is the only thing that could support the claim.`,
            },
            {
              id: `s4`,
              tier: `honest-pathos`,
              title: `An argument using honest emotion`,
              type: `Honest pathos + logos`,
              context: `An argument for clean water funding describes, truthfully and movingly, the daily reality of children walking hours for unsafe water, then connects that to named data on waterborne illness and a specific, costed proposal.`,
              quote: `"Here is what the walk costs a child each day, here is the illness data, and here is exactly what the funding would build."`,
              questions: [
                `Is the emotion here a problem? Why or why not?`,
                `How does the pathos relate to the evidence?`,
                `What keeps this honest rather than manipulative?`,
              ],
              evaluation: `The emotion here is not a problem, it is honest pathos doing its proper job. The feeling fits the truth of the situation, and crucially it points toward the evidence rather than away from it: after moving you, the argument gives named illness data and a specific, costed proposal. That is the difference, the emotion lights up the evidence instead of drowning it out, and it leaves your reasoning intact rather than switching it off. It is not rushing you with fear or asking you to accept a claim just because something is sad; it shows why the claim matters and then backs it up. The right response is to let yourself feel the reality and then weigh the actual proposal, which honest pathos leaves room for.`,
            },
            {
              id: `s5`,
              tier: `hasty-generalization`,
              title: `A hasty generalization`,
              type: `Broken logos (hasty generalization)`,
              context: `An argument concludes that "video games make kids violent" based on two news stories about troubled individuals who happened to play games, with no broader data and no consideration of the millions of players who are not violent.`,
              quote: `"Two violent kids played video games, so video games make kids violent. They should be banned."`,
              questions: [
                `What is the fallacy, and where exactly does the reasoning break?`,
                `What would real evidence for this claim need to look like?`,
                `Why are two cases not enough?`,
              ],
              evaluation: `This is a hasty generalization: the argument leaps from two cases to a sweeping claim about all kids and all games. The reasoning breaks at the jump from "two players were violent" to "games make kids violent," which ignores the millions of players who are not. Real evidence would need large-scale studies comparing players and non-players over time, controlling for other factors, not a pair of anecdotes. Two cases are not enough because you can find a few examples of almost anything; a handful of cases cannot establish a pattern across a whole population. The claim is possible, but this argument has not earned it. The right response is to ask for representative data before accepting the generalization.`,
            },
          ],
          synthesisPrompt: `After all five: describe your method for taking any argument apart. Name the three parts you look for, the question you ask of the reasoning specifically, and how you tell honest pathos and earned ethos from their broken versions. In 5-6 sentences.`,
          reflectionPrompt: `Which was harder for you to catch: the broken reasoning (false cause, hasty generalization) or the faked ethos? Where in your daily life do you most often meet arguments that pile up evidence but skip the reasoning that would connect it to the claim?`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `According to the lesson, what are the three working parts of any real argument?`,
              options: [
                `Ethos, pathos, and logos, the three classic appeals to an audience.`,
                `The claim, the evidence, and the reasoning that links them together.`,
                `The introduction, the body paragraphs, and the conclusion at the end.`,
                `The speaker, the audience, and the occasion the argument is made for.`,
              ],
              correctIndex: 1,
              explanation: `A real argument has a claim (the point it wants you to accept), evidence (the support offered), and reasoning (the link explaining why the evidence supports the claim). The appeals are how arguments persuade, but the parts are claim/evidence/reasoning. The other options name structure or the rhetorical situation, not the argument's logical parts.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does the lesson call logos the appeal you can "verify yourself"?`,
              options: [
                `Because logos is always more honest than ethos or pathos can ever be.`,
                `Because logos never appears in advertisements or political speeches.`,
                `You can check whether the evidence is real and trace whether the reasoning holds.`,
                `Because logos requires no evidence, only confident logical-sounding language.`,
              ],
              correctIndex: 2,
              explanation: `Logos is checkable: you can verify whether a statistic has a source, whether two cases really prove a rule, and whether the conclusion follows from the premises. Ethos and pathos act on trust and feeling; logos you can take apart and inspect. The distractors over-claim logos is always honest, deny it appears in persuasion, or wrongly say it needs no evidence.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `A school's test scores rose the same year it added a new app, so the argument says the app raised the scores. What's the flaw?`,
              options: [
                `False cause: one thing following another doesn't prove it caused it.`,
                `Appeal to pity: it uses a sad situation to win the argument.`,
                `Borrowed authority: it relies on a famous person's endorsement.`,
                `There is no flaw; if scores rose after the app, the app clearly worked.`,
              ],
              correctIndex: 0,
              explanation: `This is false cause: assuming that because scores rose after the app appeared, the app caused the rise, ignoring other explanations (a new teacher, easier test, more study time). Order is not proof. The distractors misname it as pity or borrowed authority, or wrongly claim sequence proves causation.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `A famous actor with no medical training argues a treatment works, citing only their fame. Which appeal is faked, and what's missing?`,
              options: [
                `Pathos is faked; the argument is missing any emotional appeal at all.`,
                `Logos is faked; the argument is missing a confident, authoritative tone.`,
                `Nothing is faked; famous people are reliable sources on every topic.`,
                `Ethos is faked (borrowed authority); it's missing evidence and reasoning.`,
              ],
              correctIndex: 3,
              explanation: `This is faked ethos, specifically borrowed authority: fame in acting is used as if it were medical expertise. The argument is missing the two things that matter, evidence and reasoning. Credibility in one field doesn't transfer to another, and even a real expert still owes you the evidence. The distractors misname the appeal or wrongly claim fame equals reliability.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `The lesson says even a genuinely credible expert still owes you something. What?`,
              options: [
                `Evidence and reasoning; "trust me, I'm an expert" is a request to skip the argument.`,
                `Nothing further; a real expert's word is itself complete proof of any claim.`,
                `A list of their degrees and credentials before they say anything at all.`,
                `An emotional story, because facts alone can never persuade an audience.`,
              ],
              correctIndex: 0,
              explanation: `Ethos should support an argument, not replace it. Even a truly credible source still owes you evidence and reasoning, because "trust me, I'm an expert" asks you to skip the argument rather than make one. The distractors treat an expert's word as complete proof, reduce it to credentials, or claim facts can't persuade.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `The lesson argues that emotion (pathos) in an argument is NOT automatically a problem. When is pathos honest?`,
              options: [
                `When it's strong enough to make the audience cry or feel afraid.`,
                `When the feeling fits the truth and points toward the evidence, leaving reasoning intact.`,
                `When it completely replaces dry evidence, which only confuses people anyway.`,
                `Never; any emotion at all in an argument is a sign of manipulation.`,
              ],
              correctIndex: 1,
              explanation: `Honest pathos uses emotion that fits the truth of the situation and points you toward the evidence rather than away from it, leaving your reasoning working. It lights up the evidence instead of drowning it out. The distractors equate intensity with honesty, praise replacing evidence, or wrongly call all emotion manipulation.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `"Two kids who were violent played video games, so video games make kids violent." What fallacy is this?`,
              options: [
                `Non sequitur, because the conclusion uses the wrong Latin term.`,
                `Appeal to fear, because violence is a frightening topic for parents.`,
                `False cause, because it confuses the order that two events happened in.`,
                `Hasty generalization: leaping from two cases to a claim about all kids.`,
              ],
              correctIndex: 3,
              explanation: `This is a hasty generalization: leaping from two cases to a sweeping claim about all kids and all games, ignoring the millions of players who aren't violent. Real evidence would need large studies, not two anecdotes. The distractors misname it; while it has a causal flavor, the core error is generalizing from far too few cases.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson compares an argument to a bridge. What does the "bridge" itself represent?`,
              options: [
                `The reasoning that connects the evidence to the claim you're asked to reach.`,
                `The evidence, which is the solid ground the argument starts standing on.`,
                `The claim, which is the far bank the argument is trying to reach.`,
                `The audience, who must decide whether to cross over to the new idea.`,
              ],
              correctIndex: 0,
              explanation: `In the metaphor, the claim is the far bank, the evidence is the ground you start on, and the reasoning is the bridge between them. Weak arguments pile up ground and hope you jump the gap without noticing there's no bridge. The distractors assign the bridge to the evidence, claim, or audience instead of the reasoning.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If an argument presents many true, accurate facts as evidence, then its conclusion must be well-supported, regardless of the reasoning.`,
              correctAnswer: false,
              explanation: `False, and this is the central skill of the lesson. An argument can be built entirely from true facts and still fail completely, because the facts only support the conclusion if the reasoning actually connects them to it. True evidence plus broken reasoning equals a broken argument. Think of the bridge metaphor: the evidence is the ground you start on and the claim is the far bank, but without a sound reasoning-bridge between them, all the solid ground in the world won't get you across. A false-cause argument can cite a perfectly real fact (scores did rise the year the app arrived) and still prove nothing, because the reasoning leaps from sequence to causation. A hasty generalization can cite two genuinely true cases and still fail, because the reasoning jumps from a tiny sample to everyone. So you can never judge an argument by its evidence alone, you have to check the reasoning that links the evidence to the claim, which is exactly the part most people skip.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You read an online argument: "Crime went up after the new mayor took office. A respected former judge says she's failing. And think of the families living in fear. She must be removed." Using the whole lesson, what do you actually think?`,
              options: [
                `It's a strong argument: it has a credible source, real concern, and a clear timeline of events.`,
                `Take it apart: "crime rose after she took office" is possible false cause (correlation, not proof); the judge is ethos that still owes evidence; "families in fear" is pathos that hasn't been tied to her policies. The claim isn't earned yet, so I'd ask for real causal data before deciding.`,
                `Reject it completely and conclude that all political arguments are lies not worth reading.`,
                `Accept it, because a respected judge weighing in settles whether she's actually failing.`,
              ],
              correctIndex: 1,
              explanation: `Full argument analysis in real life. Take it apart: "crime went up after she took office" is a possible false cause, correlation isn't causation and many factors affect crime; the former judge is an ethos appeal that still owes you evidence rather than just an opinion; and "families living in fear" is pathos that hasn't been logically tied to her specific policies. None of the three has actually built the bridge to the claim that she should be removed, so the claim isn't earned yet. The move is to ask for real causal evidence before deciding. The distractors mistake the appeals for proof, collapse into "all politics is lies," or treat one person's status as settling the question.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-part`, category: `The part you skip`, prompt: `The lesson says most people check the claim and evidence but skip the reasoning. Be honest: when you hear an argument you already agree with, do you check whether the reasoning actually holds, or do you wave it through? What would change if you checked?` },
            { id: `reflect-fallacy`, category: `Your blind spot`, prompt: `Of the broken-logos moves, false cause, hasty generalization, non sequitur, which do you think slips past you most easily? When have you maybe accepted one because the conclusion was something you wanted to believe?` },
            { id: `reflect-ethos`, category: `Who you trust`, prompt: `The lesson says even a credible expert still owes you evidence. Is there a person or source you trust so much you stopped checking their reasoning? What would it look like to respect them AND still check their work?` },
            { id: `reflect-heritage`, category: `Argument around you`, prompt: `Caro, think of a strong argument you've heard in Spanish, in your family, your culture, or a Colombian public figure. Take it apart: what was the claim, the evidence, the reasoning? Did the appeals support the case or carry it alone?` },
            { id: `reflect-pathos`, category: `Feeling and thinking`, prompt: `Honest pathos lights up the evidence; manipulative pathos drowns it out. When has a feeling helped you understand why something mattered? When has a feeling rushed you into accepting a claim you later doubted?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "all this analyzing kills real conviction, sometimes you should just trust a good person and feel the truth of a thing." State that view as strongly as you can. Where is it right, and where does it leave you vulnerable?` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Arguments come at you all day, from ads to headlines to debates. These build the habit of taking them apart. Two paths.`,
          familyActivity: {
            title: `Argument Autopsy`,
            duration: `35 minutes`,
            description: `As a family, pick one real argument to dissect together, an opinion column, a commercial making a case, a YouTube video arguing a point, or even a friendly disagreement at the table. Work through it out loud as a team. First, find the claim: what exactly is it asking you to accept? State it in one sentence. Second, list the evidence: what facts, examples, or sources does it offer? Third, and most important, test the reasoning: does the evidence actually connect to the claim, or is there a gap, a false cause, a leap from too few cases? Then name the appeals: where is it using logos, ethos, pathos, and is each one doing honest work? End by deciding together: is this a solid bridge you can walk across, or does it pile up ground and hope you jump the gap? Doing this together a few times makes argument analysis automatic, and it turns dinner-table disagreements into something everyone gets sharper at.`,
          },
          projectOption: {
            title: `Build One, Break One, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Master argument from both sides. Week 1: pick a claim you genuinely believe and build the strongest honest argument for it you can. Write it out with a clear claim, real evidence you can actually source, and reasoning that visibly connects the two, plus honest use of ethos and pathos that support rather than replace the logic. Make the bridge solid. Week 2: take a claim you think is WRONG, and instead of arguing against it, write the most convincing-sounding BROKEN argument for it, deliberately using a false cause here, a hasty generalization there, a bit of borrowed authority and fear. Then annotate your own broken argument: mark every fallacy and explain why it fails. Building one teaches you what a real bridge looks like; deliberately building a broken one teaches you to spot the missing planks instantly in everyone else's arguments, because you'll have installed them on purpose.`,
            offerToParent: `Parent: opt your child into the build-one-break-one project. Constructing a sound argument and then deliberately engineering a fallacious one (and annotating exactly why it fails) builds argument-analysis skill far faster than passive practice, it's the same logic as learning a scam by studying how it's run. Your child comes away able to spot false cause, hasty generalization, and borrowed authority on sight, which is core critical-thinking and media-literacy work for this age.`,
          },
          identityQuestion: `If you become someone who can take any argument apart, find the claim, weigh the evidence, test whether the reasoning actually holds, and name exactly where it works or breaks, what does that let you be in a world full of confident, convincing-sounding claims, that someone who only asks "do I feel convinced?" can never be?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who checks the reasoning, not just the claim and the evidence.`,
            `A person who can say exactly why an argument works or breaks.`,
            `Someone who respects experts and still checks their work.`,
          ],
          saveKey: `identity_responses_ela_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. Two done, and you can now do something most adults cannot: take an argument apart with precision. You learned that every real argument has three working parts, a claim, evidence, and the reasoning that links them, and that naming the parts lets you test each one. You learned that logos is the appeal you can verify yourself, and how it breaks: sourceless statistics, hasty generalizations, false cause, non sequiturs. You learned that ethos asks whether to trust the source, that real credibility is earned while faked credibility is borrowed, and that even a trustworthy expert still owes you evidence. And you learned that pathos is not the enemy, honest emotion lights up the evidence, while manipulative emotion drowns it out. Most of all, you learned the bridge: a claim is only earned when sound reasoning carries you from real evidence across to it. Anyone can pile up facts; you can now check whether the bridge actually holds. Next: we turn to two of the most important arguments ever written in America, the Declaration of Independence and the Constitution, and the real debates behind them. Onward, {name}. — Quill`,
          badge: `argument-analyst`,
          badgeName: `Argument Analyst`,
          xpEarned: 75,
          competencies: [
            `Identifies the three parts of an argument: claim, evidence, and reasoning, and tests each separately`,
            `Recognizes logos as the verifiable appeal and names its broken forms: sourceless statistic, hasty generalization, false cause, non sequitur`,
            `Distinguishes earned ethos from borrowed authority, and knows even a credible source owes evidence and reasoning`,
            `Distinguishes honest pathos (fits the truth, supports reasoning) from manipulative pathos (fear, pity, outrage that replace reasoning)`,
            `Uses the bridge model: a claim is earned only when sound reasoning connects real evidence to it`,
            `Catches the most-skipped failure, true evidence joined to the claim by broken reasoning`,
            `Reads any argument to say precisely why it works or fails, rather than only whether it feels convincing`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Seminal American Texts — Declaration and Constitution`,
            hook: `Two of history's most consequential arguments, and the fierce debates behind them. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L02 ${VERSION}] "${l.title}" mags=${mags} q=${quiz}`);
}
