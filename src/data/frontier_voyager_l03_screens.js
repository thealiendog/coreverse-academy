// ─────────────────────────────────────────────────────────────────────────────
// FRONTIER & PHILOSOPHY VOYAGER  |  L03 — Logic and Critical Thinking
// Age band : voyagers (11-12)   Guide: orion (Phoenix)
// Standards: Coreverse Original — Philosophy, Logic, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// SUBJECT NOTE — Frontier & Philosophy:
//   - Real philosophy/logic. This lesson is sharpened (per spec) to carry the
//     mystery-vs-magical-thinking / how-frontier-thinking-goes-wrong frame: it teaches the
//     machinery of arguments AND the exact fallacies and manipulation tricks that dress up
//     bad reasoning. Directly extends L02's protective backbone.
//   - Honesty: logic itself is closer to tier 1-2 (valid/invalid is well-defined), but the
//     lesson stays honest that real-world reasoning is messy and certainty is rare.
//   - Term: "philosophical question." "Frontier" is the subject/guide brand.
//   - Em-dashes natural; do NOT run em-dash replacement on Frontier files.
//
// Interaction format: CASE STUDY (work real arguments/scenarios: is the reasoning good,
// and if not, which specific error or trick is at work?). Contract matches the working
// Voyager <CaseStudy />: cases[] with title/type/description/questions[]/evaluation;
// synthesisPrompt + reflectionPrompt.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-frontier-l03-v1";

const FRONTIER_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `frontier`,
  guide: `orion`,

  lessons: [
    {
      id: `fp-11-12-03`,
      title: `Logic and Critical Thinking`,
      duration: 35,
      xpReward: 75,
      badge: `logic-initiate`,
      badgeName: `Logic Initiate`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}. Last time we built a method for judging what to believe. Now we sharpen the blade. Logic is the study of good reasoning — how an argument actually works, what makes its conclusion follow from its reasons, and, just as importantly, the exact tricks that make bad reasoning look good. Here is why this matters more than it sounds: almost no one tries to convince you of something by saying "believe this for no reason." They give you an argument — a chain of reasons leading to a conclusion — and most arguments you will meet are persuasive on the surface whether or not they are any good underneath. The person who can take an argument apart, see whether the conclusion really follows, and name the precise trick when it does not, is almost impossible to manipulate with words. That person is much harder to scam, to recruit, to mislead. Today you learn the machinery of reasoning, the most common errors, and the manipulation tricks dressed up as logic that you will meet for the rest of your life. Let's sharpen the blade.`,
          headline: `Logic and Critical Thinking`,
          subtitle: `How arguments really work, and the tricks that fake good reasoning. Case Study.`,
          visual: `/voyager-assets/frontier/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What An Argument Actually Is`,
          paragraphs: [
            `In logic, an "argument" does not mean a fight — it means a set of reasons (called premises) offered to support a conclusion. That is it: some claims put forward as support, and a claim they are meant to support. "It's raining, so the ground will be wet" is a tiny argument: the premise is "it's raining," the conclusion is "the ground will be wet." Once you see this structure, you can find it everywhere — in ads, in essays, in what your friends say, in what you tell yourself — and seeing the structure is the first step to judging whether the reasoning is any good.`,
            `Here is the single most important distinction in all of logic, and it is one most adults have never been taught clearly: whether an argument's conclusion actually follows from its premises is a separate question from whether the premises are true. Logicians split these into two tests. An argument is valid if the conclusion really does follow from the premises — if the premises were true, the conclusion would have to be true too. An argument is sound if it is valid and the premises are actually true. You can have a valid argument with false premises ("all cats can fly; Whiskers is a cat; so Whiskers can fly" — perfectly valid in structure, but the first premise is false, so it is unsound). And you can have true premises arranged in a way that does not actually support the conclusion. Good critical thinking means checking both: are the reasons true, AND does the conclusion really follow from them?`,
            `Why does splitting these matter so much in real life? Because manipulation usually attacks one while distracting you from the other. Someone might give you true premises and then sneak in a conclusion that does not follow — "studies show this food has antioxidants, so this expensive supplement will cure your illness." The premise might be true; the conclusion does not follow at all. Or someone gives you a tidy, valid-sounding structure built on a premise that is simply false, and the neat logic distracts you from checking the shaky foundation. Once you can ask the two questions separately — are the premises true, and does the conclusion follow — most bad arguments fall apart in front of you, even when they sounded convincing a moment before.`,
          ],
          image: `/voyager-assets/frontier/l03-s1-argument.webp`,
          imageCaption: `In logic an "argument" isn't a fight — it's a set of reasons (PREMISES) offered to support a CONCLUSION. "It's raining, so the ground will be wet": premise "it's raining," conclusion "the ground will be wet." Once you see the structure, you find it everywhere — ads, essays, friends, your own self-talk — and seeing it is the first step to judging it. The single most important distinction in logic (most adults were never taught it clearly): whether the conclusion FOLLOWS from the premises is separate from whether the premises are TRUE. VALID = the conclusion really follows (if premises were true, conclusion would have to be). SOUND = valid AND the premises are actually true. You can have a valid argument with false premises ("all cats can fly; Whiskers is a cat; so Whiskers can fly" — valid structure, false premise, unsound). Manipulation attacks one while distracting from the other — true premises + a conclusion that doesn't follow, or tidy logic on a false foundation. Ask both: are the reasons true, AND does the conclusion follow?`,
          vocab: [
            {
              word: `arguments, premises, validity, and soundness`,
              definition: `In logic, an "argument" does not mean a fight; it means a set of reasons (called premises) offered to support a conclusion — some claims put forward as support, and a claim they are meant to support, as in "it's raining, so the ground will be wet," where the premise is "it's raining" and the conclusion is "the ground will be wet." Once you see this structure you can find it everywhere (ads, essays, what friends say, what you tell yourself), and seeing it is the first step to judging whether the reasoning is any good. The single most important distinction in logic, which most adults were never taught clearly, is that whether an argument's conclusion actually follows from its premises is a separate question from whether the premises are true, and logicians split these into two tests: an argument is valid if the conclusion really does follow from the premises (if the premises were true, the conclusion would have to be true too), and it is sound if it is valid and the premises are actually true. You can have a valid argument with false premises — "all cats can fly; Whiskers is a cat; so Whiskers can fly" is perfectly valid in structure but unsound because the first premise is false — and you can have true premises arranged so they do not actually support the conclusion. Good critical thinking means checking both: are the reasons true, and does the conclusion really follow from them? This matters because manipulation usually attacks one while distracting you from the other: someone may give true premises and sneak in a conclusion that does not follow ("this food has antioxidants, so this supplement will cure your illness"), or build a tidy valid-sounding structure on a premise that is simply false so the neat logic distracts from the shaky foundation. Once you ask the two questions separately, most bad arguments fall apart even when they sounded convincing a moment before.`,
              audioPrompt: `In logic, an "argument" does not mean a fight, {name}; it means a set of reasons, called premises, offered to support a conclusion. That is it: some claims put forward as support, and a claim they are meant to support. "It's raining, so the ground will be wet" is a tiny argument: the premise is "it's raining," the conclusion is "the ground will be wet." Once you see this structure, you can find it everywhere, and seeing it is the first step to judging whether the reasoning is any good. Here is the single most important distinction in all of logic, and most adults were never taught it clearly: whether an argument's conclusion actually follows from its premises is a separate question from whether the premises are true. Logicians split these into two tests. An argument is valid if the conclusion really does follow from the premises, meaning if the premises were true, the conclusion would have to be true too. An argument is sound if it is valid and the premises are actually true. You can have a valid argument with false premises: "all cats can fly; Whiskers is a cat; so Whiskers can fly" is perfectly valid in structure, but the first premise is false, so it is unsound. Why does splitting these matter in real life? Because manipulation usually attacks one while distracting you from the other. Someone might give you true premises and then sneak in a conclusion that does not follow. Or build a tidy, valid-sounding structure on a premise that is simply false. Once you can ask the two questions separately, are the premises true, and does the conclusion follow, most bad arguments fall apart in front of you.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Two Ways To Reason`,
          paragraphs: [
            `There are two great families of reasoning, and knowing the difference keeps you from expecting the wrong kind of certainty. Deductive reasoning goes from general rules to specific conclusions, and when done correctly it is airtight: if the premises are true and the logic is valid, the conclusion is guaranteed. "All humans are mortal; you are human; therefore you are mortal" — there is no escape; if the premises hold, the conclusion must. Mathematics and formal logic run on deduction, which is why a correct proof is certain in a way almost nothing else is.`,
            `Inductive reasoning goes the other way — from specific observations to general conclusions or predictions — and it is how we learn most of what we know about the world, but it never reaches that airtight guarantee. "The sun has risen every morning of recorded history, so it will rise tomorrow" is strong inductive reasoning; it is overwhelmingly likely, but not logically guaranteed the way a deduction is. Almost all of science, and almost all of everyday learning, is inductive: we observe patterns and generalize, getting more confident as evidence accumulates, while staying open to the rare surprise. The key honest point is that good inductive reasoning gives you strong, well-justified belief, not certainty — and that is not a weakness, it is just being accurate about what observation can deliver.`,
            `Knowing this protects you in two directions at once. First, it stops you from dismissing strong inductive knowledge just because it is not 100% certain — the "it's not proven with total certainty, so it's just a guess" move you met in epistemology is often a misunderstanding of how induction works, since overwhelming evidence is genuinely strong even without deductive certainty. Second, it stops you from being fooled by false certainty — when someone claims absolute, deductive-style proof for a messy real-world claim that could only ever be supported inductively, that overclaim is itself a red flag. Real-world knowledge almost always lives in the land of strong-but-not-certain, and a clear thinker is comfortable there: confident where evidence is strong, appropriately humble that new evidence could always refine the picture, and suspicious of anyone promising mathematical certainty about the messy world.`,
          ],
          image: `/voyager-assets/frontier/l03-s2-tworeason.webp`,
          imageCaption: `Two great families of reasoning. DEDUCTIVE: general rules → specific conclusions, and done right it's airtight — if premises are true and logic valid, the conclusion is GUARANTEED ("all humans are mortal; you are human; therefore you are mortal" — no escape). Math and formal logic run on deduction; a correct proof is certain in a way almost nothing else is. INDUCTIVE: specific observations → general conclusions/predictions — how we learn most about the world, but never airtight ("the sun has risen every morning of recorded history, so it will rise tomorrow" — overwhelmingly likely, not logically guaranteed). Almost all science and everyday learning is inductive: observe patterns, generalize, grow confident as evidence accumulates, stay open to surprise. Good induction gives strong justified belief, not certainty — and that's accuracy, not weakness. Protects you both ways: don't dismiss strong evidence for not being "100% proven," AND don't be fooled by false certainty (deductive-style "absolute proof" for a messy real-world claim is a red flag).`,
          vocab: [
            {
              word: `deductive and inductive reasoning`,
              definition: `There are two great families of reasoning, and knowing the difference keeps you from expecting the wrong kind of certainty. Deductive reasoning goes from general rules to specific conclusions, and when done correctly it is airtight: if the premises are true and the logic is valid, the conclusion is guaranteed, as in "all humans are mortal; you are human; therefore you are mortal," where there is no escape if the premises hold. Mathematics and formal logic run on deduction, which is why a correct proof is certain in a way almost nothing else is. Inductive reasoning goes the other way, from specific observations to general conclusions or predictions, and it is how we learn most of what we know about the world, but it never reaches that airtight guarantee: "the sun has risen every morning of recorded history, so it will rise tomorrow" is strong inductive reasoning, overwhelmingly likely but not logically guaranteed the way a deduction is. Almost all of science and everyday learning is inductive — we observe patterns and generalize, growing more confident as evidence accumulates while staying open to the rare surprise — and the honest point is that good inductive reasoning gives strong, well-justified belief rather than certainty, which is not a weakness but accuracy about what observation can deliver. Knowing this protects you in two directions: it stops you from dismissing strong inductive knowledge just because it is not 100% certain (the "not proven, so just a guess" move from epistemology often misunderstands induction, since overwhelming evidence is genuinely strong without deductive certainty), and it stops you from being fooled by false certainty (when someone claims absolute, deductive-style proof for a messy real-world claim that could only be supported inductively, that overclaim is a red flag). Real-world knowledge almost always lives in the land of strong-but-not-certain, and a clear thinker is comfortable there: confident where evidence is strong, humble that new evidence could refine the picture, and suspicious of anyone promising mathematical certainty about the messy world.`,
              audioPrompt: `There are two great families of reasoning, {name}, and knowing the difference keeps you from expecting the wrong kind of certainty. Deductive reasoning goes from general rules to specific conclusions, and when done correctly it is airtight: if the premises are true and the logic is valid, the conclusion is guaranteed. "All humans are mortal; you are human; therefore you are mortal." There is no escape; if the premises hold, the conclusion must. Mathematics runs on deduction, which is why a correct proof is certain in a way almost nothing else is. Inductive reasoning goes the other way, from specific observations to general conclusions or predictions, and it is how we learn most of what we know about the world, but it never reaches that airtight guarantee. "The sun has risen every morning of recorded history, so it will rise tomorrow" is strong inductive reasoning; it is overwhelmingly likely, but not logically guaranteed the way a deduction is. Almost all of science and everyday learning is inductive: we observe patterns and generalize, getting more confident as evidence accumulates. Good inductive reasoning gives you strong, well-justified belief, not certainty, and that is not a weakness, it is just being accurate. This protects you two ways. It stops you from dismissing strong knowledge just because it is not 100% certain. And it stops you from being fooled by false certainty: when someone claims absolute proof for a messy real-world claim, that overclaim is itself a red flag. A clear thinker is comfortable in the land of strong-but-not-certain.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Fallacies: Bad Reasoning In Disguise`,
          paragraphs: [
            `Now the practical heart of critical thinking: logical fallacies — common patterns of bad reasoning that feel persuasive but do not actually support their conclusions. They are worth learning by name, because a fallacy you can name is a fallacy you can spot, and once you can spot them you will see them everywhere, especially anywhere someone is trying to persuade you of something shaky. Here are some of the most common and most weaponized.`,
            `The ad hominem attacks the person instead of their argument: "you can't trust what she says about the climate, she's not even rich." Whether her argument is good has nothing to do with her bank account; the trick dodges the actual reasoning. The straw man rebuilds someone's position into a weaker, distorted version that is easier to knock down: "you think we should be careful with the budget? So you want everyone to starve!" — then attacks the version no one actually held. The false dilemma offers only two options when more exist: "either you're with us completely, or you're against us" — erasing every middle position to trap you. The appeal to authority leans on who said it rather than the evidence: "a celebrity endorses it, so it must work" — but fame is not evidence (note the honest nuance: citing a real expert in their actual field is reasonable; the fallacy is treating authority, or fame, as proof regardless of evidence).`,
            `A few more you will meet constantly. The slippery slope claims one small step must inevitably lead to a disastrous end, with no real argument for the chain: "if we allow this tiny thing, soon everything will collapse." The bandwagon says it must be true or right because lots of people believe or do it — the "everyone's saying it" trap from epistemology, now named as a fallacy. The appeal to emotion swamps your reasoning with fear, anger, pity, or excitement so you do not notice the argument is weak. And circular reasoning hides the conclusion inside the premise: "this source is trustworthy because it says so itself." None of these are rare or exotic; they are the everyday tools of advertisers, manipulators, online arguers, and propagandists, and they work precisely because they feel like reasoning. Learning their names turns that invisible feeling into a visible move you can call out, in others and, just as importantly, in yourself.`,
          ],
          image: `/voyager-assets/frontier/l03-s3-fallacies.webp`,
          imageCaption: `The practical heart: LOGICAL FALLACIES — common patterns of bad reasoning that feel persuasive but don't actually support their conclusions. A fallacy you can name is one you can spot. The most weaponized: AD HOMINEM (attack the person, not the argument — "can't trust her on climate, she's not rich"); STRAW MAN (distort someone's view into a weaker version, then attack that — "careful with the budget? so you want everyone to starve!"); FALSE DILEMMA (only two options when more exist — "with us completely or against us"); APPEAL TO AUTHORITY (who said it over the evidence — "a celebrity endorses it" — nuance: a real expert in their field is reasonable; the fallacy is treating fame/authority as proof). More: SLIPPERY SLOPE (one small step must lead to disaster, no real chain); BANDWAGON (true because many believe it — epistemology's trap, now named); APPEAL TO EMOTION (swamp reasoning with fear/anger/pity so you miss the weak argument); CIRCULAR REASONING (conclusion hidden in the premise — "trustworthy because it says so"). The everyday tools of advertisers, manipulators, and propagandists — they work because they FEEL like reasoning.`,
          vocab: [
            {
              word: `logical fallacies`,
              definition: `Logical fallacies are common patterns of bad reasoning that feel persuasive but do not actually support their conclusions, and they are worth learning by name because a fallacy you can name is a fallacy you can spot. The ad hominem attacks the person instead of their argument ("you can't trust what she says about the climate, she's not even rich"), dodging the actual reasoning, since whether her argument is good has nothing to do with her wealth. The straw man rebuilds someone's position into a weaker, distorted version that is easier to knock down ("you think we should be careful with the budget? so you want everyone to starve!") and then attacks the version no one actually held. The false dilemma offers only two options when more exist ("either you're with us completely, or you're against us"), erasing every middle position to trap you. The appeal to authority leans on who said it rather than the evidence ("a celebrity endorses it, so it must work"), with the honest nuance that citing a real expert in their actual field is reasonable, while the fallacy is treating authority or fame as proof regardless of evidence. The slippery slope claims one small step must inevitably lead to a disastrous end with no real argument for the chain ("if we allow this tiny thing, soon everything will collapse"). The bandwagon says something must be true or right because many people believe or do it (the "everyone's saying it" trap from epistemology, now named as a fallacy). The appeal to emotion swamps your reasoning with fear, anger, pity, or excitement so you do not notice the argument is weak. And circular reasoning hides the conclusion inside the premise ("this source is trustworthy because it says so itself"). None of these are rare or exotic; they are the everyday tools of advertisers, manipulators, online arguers, and propagandists, and they work precisely because they feel like reasoning, so learning their names turns an invisible feeling into a visible move you can call out, in others and in yourself.`,
              audioPrompt: `Now the practical heart of critical thinking, {name}: logical fallacies, common patterns of bad reasoning that feel persuasive but do not actually support their conclusions. They are worth learning by name, because a fallacy you can name is a fallacy you can spot. The ad hominem attacks the person instead of their argument: "you can't trust what she says, she's not even rich." Whether her argument is good has nothing to do with her bank account. The straw man rebuilds someone's position into a weaker, distorted version that is easier to knock down, then attacks the version no one actually held. The false dilemma offers only two options when more exist: "either you're with us completely, or you're against us," erasing every middle position. The appeal to authority leans on who said it rather than the evidence: "a celebrity endorses it, so it must work." But fame is not evidence. Here is the honest nuance: citing a real expert in their actual field is reasonable; the fallacy is treating authority, or fame, as proof regardless of evidence. A few more you will meet constantly. The slippery slope claims one small step must inevitably lead to disaster, with no real argument for the chain. The bandwagon says it must be true because lots of people believe it, the "everyone's saying it" trap, now named. The appeal to emotion swamps your reasoning with fear, anger, or excitement so you do not notice the argument is weak. And circular reasoning hides the conclusion inside the premise: "this source is trustworthy because it says so itself." None of these are rare. They are the everyday tools of advertisers and manipulators, and they work precisely because they feel like reasoning.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Blade Points Both Ways`,
          paragraphs: [
            `Here is the part that separates a real critical thinker from someone who just learned a list of fallacy names to win internet arguments — and it matters enormously, so slow down for it. The tools of logic are most valuable when you turn them on your own thinking first. It is easy and even fun to spot fallacies in people you already disagree with; it feels great and it is mostly useless, because the human mind is brilliant at catching flaws in others' reasoning while excusing the very same flaws in its own. Confirmation bias, which you met last lesson, runs the critical-thinking blade in only one direction unless you deliberately turn it around.`,
            `There is even a trap built out of this lesson itself, and you should be warned about it: "fallacy-hunting" as a way to dodge real thinking. Some people learn the fallacy names and then use them as a club — slapping a fallacy label on any argument they dislike to dismiss it without actually engaging, or accusing others of fallacies they are not committing. Calling something a "straw man" or "ad hominem" is not the same as showing that it is one, and a fallacy label fired carelessly is itself a kind of bad reasoning. The names are tools for understanding whether reasoning holds up, not weapons for winning, and someone who only ever finds fallacies in opponents has learned the vocabulary of critical thinking without the substance.`,
            `The genuine practice is harder and quieter: apply the same standards to your own arguments and the arguments of people you agree with that you apply to your opponents. When you find yourself convinced of something, ask the uncomfortable questions — are my premises actually true, does my conclusion really follow, am I leaning on a fallacy because it supports what I already want to believe, would this reasoning convince me if it pointed the other way? Steelmanning — deliberately building the strongest version of a view you disagree with before responding to it, the opposite of strawmanning — is one of the most powerful habits a thinker can develop, because if you can defeat the strongest version, your conclusion is solid, and if you cannot, you have just learned something. The blade of logic cuts cleanest when you are brave enough to point it at yourself, and that courage, more than any list of fallacies, is what critical thinking actually is.`,
          ],
          image: `/voyager-assets/frontier/l03-s4-bothways.webp`,
          imageCaption: `What separates a real critical thinker from a fallacy-name collector: the tools are most valuable turned on your OWN thinking first. Spotting fallacies in people you already disagree with feels great and is mostly useless — the mind is brilliant at catching others' flaws while excusing the same ones in itself (confirmation bias runs the blade one direction unless you turn it around). A trap built from this lesson: "fallacy-hunting" to dodge real thinking — slapping a fallacy label on any argument you dislike to dismiss it without engaging, or accusing others of fallacies they aren't committing. Calling something a "straw man" isn't the same as SHOWING it is one; a label fired carelessly is itself bad reasoning. The genuine practice is harder: apply the same standards to your own arguments and your allies' that you apply to opponents. Ask: are my premises true? does my conclusion follow? am I leaning on a fallacy because it supports what I want? STEELMANNING — building the strongest version of a view you disagree with before answering — is one of the most powerful habits there is. The blade cuts cleanest pointed at yourself.`,
          vocab: [
            {
              word: `turning the blade on yourself, and steelmanning`,
              definition: `The part that separates a real critical thinker from someone who just learned fallacy names to win arguments is that the tools of logic are most valuable when you turn them on your own thinking first. It is easy and even fun to spot fallacies in people you already disagree with, but it is mostly useless, because the human mind is brilliant at catching flaws in others' reasoning while excusing the very same flaws in its own, and confirmation bias runs the critical-thinking blade in only one direction unless you deliberately turn it around. There is even a trap built out of this lesson itself: "fallacy-hunting" as a way to dodge real thinking, where people learn the fallacy names and use them as a club, slapping a fallacy label on any argument they dislike to dismiss it without engaging, or accusing others of fallacies they are not committing — but calling something a "straw man" or "ad hominem" is not the same as showing that it is one, and a fallacy label fired carelessly is itself a kind of bad reasoning, since the names are tools for understanding whether reasoning holds up, not weapons for winning. The genuine practice is harder and quieter: apply the same standards to your own arguments, and to the arguments of people you agree with, that you apply to your opponents, asking the uncomfortable questions when you find yourself convinced — are my premises actually true, does my conclusion really follow, am I leaning on a fallacy because it supports what I already want to believe, would this reasoning convince me if it pointed the other way? Steelmanning, deliberately building the strongest version of a view you disagree with before responding to it (the opposite of strawmanning), is one of the most powerful habits a thinker can develop, because if you can defeat the strongest version your conclusion is solid, and if you cannot you have just learned something. The blade of logic cuts cleanest when you are brave enough to point it at yourself, and that courage, more than any list of fallacies, is what critical thinking actually is.`,
              audioPrompt: `Here is the part that separates a real critical thinker from someone who just learned a list of fallacy names to win internet arguments, {name}, so slow down for it. The tools of logic are most valuable when you turn them on your own thinking first. It is easy and even fun to spot fallacies in people you already disagree with; it feels great and it is mostly useless, because the human mind is brilliant at catching flaws in others' reasoning while excusing the very same flaws in its own. Confirmation bias runs the critical-thinking blade in only one direction unless you deliberately turn it around. There is even a trap built out of this lesson itself: fallacy-hunting as a way to dodge real thinking. Some people learn the fallacy names and use them as a club, slapping a label on any argument they dislike to dismiss it without engaging. Calling something a straw man is not the same as showing that it is one, and a fallacy label fired carelessly is itself a kind of bad reasoning. The genuine practice is harder and quieter: apply the same standards to your own arguments, and to people you agree with, that you apply to your opponents. When you find yourself convinced of something, ask the uncomfortable questions: are my premises actually true, does my conclusion really follow, am I leaning on a fallacy because it supports what I already want to believe? Steelmanning, deliberately building the strongest version of a view you disagree with before responding to it, is one of the most powerful habits a thinker can develop. The blade of logic cuts cleanest when you are brave enough to point it at yourself.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together before you work the arguments. You learned what an argument really is — premises offered to support a conclusion — and the most important distinction in logic: validity (does the conclusion follow?) is separate from truth (are the premises true?), and soundness needs both. You learned the two families of reasoning: deductive (airtight when valid, the certainty of math) and inductive (how we learn about the world, strong but never 100% certain), and why knowing the difference protects you from both dismissing strong evidence and falling for false certainty. You learned a toolkit of fallacies — ad hominem, straw man, false dilemma, appeal to authority, slippery slope, bandwagon, appeal to emotion, circular reasoning — bad reasoning in disguise. And you learned the hardest, most important move: turn the blade on your own thinking first, steelman views you oppose, and never use fallacy names as a club.`,
            `Now the case-study screen will hand you several real-world arguments and scenarios — the kind you actually meet in ads, online, and in conversation — and ask you to do exactly what a critical thinker does: figure out whether the reasoning is good, and if it is not, name the specific error or trick at work and explain why it fails. Some will have true premises but conclusions that do not follow; some will hide a fallacy under a persuasive surface; some will be genuinely reasonable and the right answer is to say so. The skill is not to find something wrong with everything — that is just cynicism — but to judge each argument accurately, on its actual merits.`,
            `One last thing to carry, because it connects this lesson to the whole band. Logic is not about being cold, or "winning," or proving you are smarter than other people. It is about respecting truth enough to check your reasoning honestly, and respecting other people enough to engage their actual arguments rather than distorted versions or attacks on them. A person armed with these tools and a little humility is extraordinarily hard to manipulate — they cannot be stampeded by a false dilemma, scared past their reasoning by an appeal to emotion, or recruited by a confident chain of nonsense — and at the same time they argue more fairly, listen more honestly, and change their mind when the evidence says they should. That combination, sharp reasoning and genuine humility, is one of the most valuable things a human mind can hold. Let's put the blade to work.`,
          ],
          image: `/voyager-assets/frontier/l03-s5-before.webp`,
          imageCaption: `Threads together. An argument = premises supporting a conclusion. The key distinction: VALIDITY (does the conclusion follow?) is separate from TRUTH (are premises true?); SOUNDNESS needs both. Two families: DEDUCTIVE (airtight when valid, math's certainty) and INDUCTIVE (how we learn about the world, strong but never 100%) — knowing the difference guards against both dismissing strong evidence and false certainty. The fallacy toolkit: ad hominem, straw man, false dilemma, appeal to authority, slippery slope, bandwagon, appeal to emotion, circular reasoning. The hardest move: turn the blade on your OWN thinking first, steelman views you oppose, never use fallacy names as a club. The case-study screen ahead hands you real arguments — judge whether the reasoning holds, name the specific trick if not (and some are genuinely fine — say so; the skill isn't finding fault with everything, that's just cynicism). Last thing: logic isn't about being cold or "winning" — it's respecting truth enough to check honestly. Sharp reasoning + humility = extraordinarily hard to manipulate.`,
          vocab: [
            {
              word: `sharp reasoning with genuine humility`,
              definition: `The synthesis before the case studies. You learned what an argument really is — premises offered to support a conclusion — and the most important distinction in logic: validity (does the conclusion follow from the premises?) is a separate question from truth (are the premises actually true?), and soundness requires both, which is why manipulation often supplies true premises with a conclusion that does not follow, or tidy valid structure on a false premise. You learned the two families of reasoning: deductive (general to specific, airtight and certain when valid, as in mathematics) and inductive (specific to general, how we learn about the world, giving strong well-justified belief but never deductive certainty), and why knowing the difference protects you from both dismissing strong inductive evidence for not being "100% proven" and being fooled by false claims of absolute certainty about messy real-world matters. You learned a toolkit of named fallacies — ad hominem (attack the person), straw man (distort then attack), false dilemma (only two options), appeal to authority (who said it over evidence, with the nuance that real experts in their field are reasonable to cite), slippery slope (one step must lead to disaster), bandwagon (many believe it so it's true), appeal to emotion (swamp reasoning with feeling), and circular reasoning (conclusion hidden in the premise) — all bad reasoning that works because it feels like reasoning. And you learned the hardest, most important move: turn the blade on your own thinking first, since the mind catches others' flaws while excusing its own; steelman views you disagree with (build their strongest version before responding); and never use fallacy names as a club, because labeling a fallacy is not the same as showing one. The case-study screen will hand you real arguments to judge on their actual merits — naming the specific error where reasoning fails, and recognizing genuinely good reasoning where it holds — and the deepest point is that logic is not about being cold or winning but about respecting truth enough to check honestly and other people enough to engage their real arguments, so that sharp reasoning joined with genuine humility makes you both extraordinarily hard to manipulate and genuinely fair.`,
              audioPrompt: `Pull it together before you work the arguments, {name}. You learned what an argument really is, premises offered to support a conclusion, and the most important distinction in logic: validity, does the conclusion follow, is separate from truth, are the premises true, and soundness needs both. You learned the two families of reasoning: deductive, airtight when valid, the certainty of math, and inductive, how we learn about the world, strong but never 100% certain, and why knowing the difference protects you from both dismissing strong evidence and falling for false certainty. You learned a toolkit of fallacies: ad hominem, straw man, false dilemma, appeal to authority, slippery slope, bandwagon, appeal to emotion, circular reasoning, bad reasoning in disguise. And you learned the hardest, most important move: turn the blade on your own thinking first, steelman views you oppose, and never use fallacy names as a club. Now the case-study screen will hand you real-world arguments and ask you to figure out whether the reasoning is good, and if not, name the specific trick at work. Some will have true premises but conclusions that do not follow; some will hide a fallacy under a persuasive surface; some will be genuinely reasonable, and the right answer is to say so. The skill is not to find something wrong with everything, that is just cynicism, but to judge each argument accurately. One last thing. Logic is not about being cold, or winning, or proving you are smarter. It is about respecting truth enough to check your reasoning honestly, and respecting other people enough to engage their actual arguments. Sharp reasoning joined with genuine humility is one of the most valuable things a human mind can hold.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l03-case-study`,
          type: `case-study`,
          headline: `Five Arguments To Judge`,
          intro: `{name}, five real-world arguments and scenarios. For each, do what a critical thinker does: decide whether the reasoning actually holds up, and if it does not, name the specific error or trick and explain why it fails. Warning: not all of them are broken — part of the skill is recognizing genuinely good reasoning, not finding fault with everything.`,
          cases: [
            {
              id: `c1`,
              title: `"Don't listen to her — she failed math once"`,
              type: `Ad hominem`,
              description: `In an online debate about a science claim, someone responds: "Why should anyone listen to her argument about vaccines? She failed a math class in high school. Clearly she has no idea what she's talking about." The crowd piles on, and her actual argument never gets discussed.`,
              questions: [
                `What is the reasoning error here, by name?`,
                `Does her old math grade have any bearing on whether her argument is correct?`,
                `What SHOULD happen to actually evaluate her claim?`,
              ],
              evaluation: `This is a textbook ad hominem: it attacks the person instead of engaging her argument. Whether she failed a math class years ago has no bearing whatsoever on whether her specific argument about vaccines is correct — a correct argument is correct regardless of who makes it or what their grades were, and a wrong one is wrong even if made by a genius. The trick works by changing the subject from "is her reasoning good?" to "is she the kind of person we should listen to?", which feels like a response but never touches the actual claim, and the pile-on shows how effective it is at burying the real question under social momentum. To actually evaluate her claim, you would have to do the harder thing the attack is designed to avoid: look at her actual premises and reasoning, check whether her conclusion follows, and examine the real evidence on the question — none of which depends on her math grade. Note one fair nuance: pointing out that someone genuinely lacks relevant expertise can be a legitimate reason to weight their testimony less, but that is different from mocking an irrelevant personal fact to dodge their argument entirely, which is what is happening here.`,
            },
            {
              id: `c2`,
              title: `"Either you support this completely, or you hate freedom"`,
              type: `False dilemma`,
              description: `A persuasive speaker says: "There are only two kinds of people. Either you fully support this proposal, exactly as written, or you're against freedom itself. So which is it? Are you with freedom, or against it?" The framing makes anyone with concerns feel forced to either fully agree or accept being "anti-freedom."`,
              questions: [
                `What is this trick called, and how does it work?`,
                `How many real positions are being erased by the "two options"?`,
                `What's the honest response that refuses the trap?`,
              ],
              evaluation: `This is a false dilemma (also called a false dichotomy): it presents only two options when many more exist, forcing you to pick one of two extremes when reality has a whole range of positions in between. It works by emotional pressure — nobody wants to be "against freedom," so the framing tries to stampede you into full agreement to avoid the ugly label — and by hiding all the reasonable middle positions: you could support the proposal's goal but want changes, support part of it, support freedom AND have concerns about this specific plan, or oppose this proposal precisely because you value freedom. Dozens of real positions are erased by collapsing everything into two. The honest response is to refuse the frame itself rather than pick one of the two offered boxes: "those aren't the only two options — I can value freedom and still think this specific proposal has serious problems, and pretending I must either fully agree or be 'anti-freedom' is a false choice." Naming the trap out loud defuses it, because the false dilemma only has power as long as you accept that the two options are the only ones available.`,
            },
            {
              id: `c3`,
              title: `"Millions of people can't be wrong"`,
              type: `Bandwagon`,
              description: `An ad for a product says: "Over ten million people have bought this. Are ten million people wrong? Join the millions who've discovered the secret. Don't be the only one left out." There is no information about whether the product actually works — only how many people bought it.`,
              questions: [
                `What fallacy is this, and how does it connect to last lesson?`,
                `Can large numbers of people be wrong about something? Give a reason.`,
                `What information is conspicuously missing from this pitch?`,
              ],
              evaluation: `This is the bandwagon fallacy: arguing that something must be true, good, or worth doing simply because many people believe it or do it — and it directly connects to last lesson's epistemology trap of mistaking "everyone's saying it" for truth, now named as a formal fallacy. Yes, large numbers of people absolutely can be wrong: history is full of beliefs that almost everyone once held and that turned out to be false, popularity spreads through marketing, social pressure, and convenience at least as much as through truth, and ten million people buying something tells you it was effectively sold, not that it works. The conspicuously missing information is the only thing that would actually justify believing the product works: evidence. There is nothing here about what it does, how it was tested, whether independent studies support it, or what actually happens when people use it — just a headcount and a fear of being "left out," which is bandwagon pressure stacked on an appeal to emotion. The honest move is to set aside the number entirely and ask the real question: where is the checkable evidence that this product does what it claims? Popularity is not evidence, and a pitch that leans on the crowd usually does so because it has nothing better to offer.`,
            },
            {
              id: `c4`,
              title: `"If we allow this, civilization will collapse"`,
              type: `Slippery slope`,
              description: `Against a small, specific change, someone argues: "If we let students retake one test, then they'll expect to retake everything, then no one will study at all, then grades will become meaningless, then no one will be prepared for any job, and the whole economy will collapse. So we cannot allow even one retake." Each step is asserted as if it must inevitably follow.`,
              questions: [
                `What's the fallacy, and where exactly does the chain break?`,
                `Is it ALWAYS a fallacy to worry about consequences? What's the real test?`,
                `How would a sound version of this concern actually be argued?`,
              ],
              evaluation: `This is a slippery slope fallacy: it claims that one small step must inevitably lead to a chain of increasingly disastrous consequences, without giving any real argument for why each step must follow from the one before. The chain breaks at essentially every link — allowing one test retake does not mean students will expect to retake everything (rules can have limits), and even if some did, that does not mean no one studies, which does not mean grades are meaningless, and so on; each "then" is asserted, not demonstrated, and the cumulative leap to "the economy collapses" is absurd. Here is the crucial nuance that keeps you from overcorrecting: it is NOT always a fallacy to worry about consequences — consequences are real and worth considering, and "if we do X, Y is likely to follow" can be perfectly good reasoning. The fallacy is specifically claiming an inevitable catastrophic chain without evidence for the links; the real test is whether each step is actually likely and supported, or just asserted to manufacture fear. A sound version of this concern would argue honestly: "here is specific evidence that retakes, in this particular form, tend to reduce studying by this much," and would propose limits rather than predicting civilizational collapse. The difference between a reasonable worry about consequences and a slippery slope fallacy is evidence for the links, not the mere fact of worrying about where something leads.`,
            },
            {
              id: `c5`,
              title: `"Cut the budget, but protect the things people depend on"`,
              type: `Genuinely reasonable (the honest control)`,
              description: `Someone argues: "Our town is spending more than it takes in, which isn't sustainable long-term, so we should reduce spending. But we should do it carefully — cutting from areas with the least impact first, protecting essential services people depend on, and reviewing the results before cutting further." They cite the actual budget numbers and acknowledge trade-offs.`,
              questions: [
                `Is there actually a fallacy here, or is this sound reasoning?`,
                `What features make this argument trustworthy?`,
                `Why is recognizing GOOD reasoning as important as spotting bad?`,
              ],
              evaluation: `There is no fallacy here — this is genuinely reasonable argument, and recognizing that is exactly as important as spotting the broken ones. Notice the features that make it trustworthy: it rests on actual evidence (the real budget numbers), its conclusion follows reasonably from its premises (if you're spending more than you take in long-term, reducing spending is a sensible response), it avoids the traps the other cases fell into (no false dilemma — it doesn't say "cut everything or go bankrupt"; no slippery slope — it doesn't predict catastrophe; no appeal to fear), it acknowledges trade-offs honestly rather than pretending the choice is costless, and it proposes a measured, reviewable approach rather than an extreme one. This matters because the goal of critical thinking is not to find something wrong with every argument — that is just cynicism wearing logic's clothes, and a mind that rejects everything is as useless as one that accepts everything. A real critical thinker judges each argument on its actual merits, which means being able to say "this reasoning is sound" with the same confidence as "this is a straw man." If you only ever use these tools to tear things down, you have missed half their purpose: they are equally for recognizing and trusting good reasoning, which is what lets you actually believe true things rather than drowning in suspicion of everything.`,
            },
          ],
          synthesisPrompt: `After judging all five: which fallacy do you think is used on you most often in real life (ads, online, conversations), and why is it effective? And reflect on the last case — how will you make sure you stay able to recognize GOOD reasoning, instead of turning into someone who just hunts for fallacies to dismiss everything? In 5-6 sentences.`,
          reflectionPrompt: `Think of a recent time you tried to convince someone of something — or convinced yourself. Honestly examine your own argument: were your premises true, did your conclusion really follow, or did you lean on a fallacy (even a small one) because it supported what you already wanted? Turning the blade on yourself is the whole point.`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your thinking`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the difference between an argument being VALID and being SOUND?`,
              options: [
                `Random`,
                `An argument is valid if its conclusion really follows from its premises — meaning that IF the premises were true, the conclusion would have to be true too — which is purely about the structure of the reasoning, not about whether the premises are actually true. An argument is sound if it is valid AND its premises are in fact true. So soundness is the stronger property: every sound argument is valid, but not every valid argument is sound. This is why you can have a perfectly valid argument that is still worthless: "all cats can fly; Whiskers is a cat; therefore Whiskers can fly" is valid in structure (the conclusion does follow from the premises), but it is unsound because the first premise is false. The distinction matters enormously in real life because manipulation often supplies a valid-looking structure built on a false or unexamined premise, letting the neat logic distract you from the shaky foundation, or supplies true premises with a conclusion that does not actually follow. Good critical thinking checks both separately: are the premises actually true, AND does the conclusion really follow from them? Either one failing is enough to reject the argument.`,
                `They mean exactly the same thing`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `VALID = the conclusion follows from the premises (if premises were true, conclusion must be) — about structure only. SOUND = valid AND the premises are actually true. So "all cats fly; Whiskers is a cat; so Whiskers flies" is valid but unsound. Check both separately: are the premises true, AND does the conclusion follow?`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the difference between deductive and inductive reasoning, and why does it protect you?`,
              options: [
                `Random`,
                `Deductive reasoning goes from general rules to specific conclusions and is airtight when done correctly: if the premises are true and the logic is valid, the conclusion is guaranteed, which is why mathematics and formal logic, which run on deduction, can reach genuine certainty. Inductive reasoning goes the other way, from specific observations to general conclusions or predictions, and it is how we learn almost everything about the world, but it never reaches that airtight guarantee — "the sun has risen every recorded morning, so it will rise tomorrow" is overwhelmingly strong but not logically certain the way a deduction is. Good inductive reasoning gives strong, well-justified belief rather than certainty, and that is accuracy about what observation can deliver, not a weakness. Knowing the difference protects you in two directions at once: it stops you from dismissing strong inductive knowledge just because it isn't "100% proven" (overwhelming evidence is genuinely strong even without deductive certainty, so "not certain, therefore just a guess" is a mistake), and it stops you from being fooled by false certainty (anyone claiming absolute, deductive-style proof for a messy real-world claim that could only be supported inductively is overclaiming, which is a red flag). A clear thinker is comfortable living in the land of strong-but-not-certain.`,
                `Deduction is for smart people, induction is for everyone else`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Deductive: general→specific, airtight/certain when valid (math). Inductive: specific→general, how we learn about the world, strong but never 100% guaranteed. Knowing this protects both ways: don't dismiss strong evidence for not being "proven," and don't fall for false certainty (deductive-style "absolute proof" about messy real-world claims is a red flag).`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is an ad hominem, and why is it a fallacy even when the personal attack is true?`,
              options: [
                `Random`,
                `An ad hominem attacks the person making an argument instead of engaging the argument itself, treating facts about the speaker as if they settled whether the argument is correct. It is a fallacy because the quality of an argument is completely independent of who makes it: a correct argument is correct no matter who states it or what their personal flaws are, and a bad argument is bad even if a brilliant, admirable person makes it. This is why an ad hominem fails even when the personal attack happens to be TRUE — even if it is genuinely true that someone failed a math class, was rude, or has bad taste, none of that has any bearing on whether their specific reasoning about a topic holds up, so pointing it out does not refute their argument, it just changes the subject to the person. The trick is effective precisely because it feels like a response and it is socially satisfying to dismiss someone, but it leaves the actual claim completely untouched. One fair nuance: noting that someone lacks genuinely relevant expertise can be a legitimate reason to weigh their testimony a bit less, but that is different from using an irrelevant personal fact to avoid engaging their reasoning, which is the fallacy. To actually evaluate a claim you must engage the reasoning and evidence, not the person.`,
                `It's only a fallacy when the attack is false`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Ad hominem attacks the person instead of the argument. It's a fallacy even when the attack is TRUE, because an argument's quality is independent of who makes it — a true fact about someone's flaws doesn't touch whether their reasoning holds. (Fair nuance: noting genuinely relevant lack of expertise can lower testimony's weight; using an irrelevant insult to dodge the argument is the fallacy.)`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How does a false dilemma manipulate you, and how do you escape it?`,
              options: [
                `Random`,
                `A false dilemma (or false dichotomy) presents only two options when many more actually exist, forcing you to choose between two extremes while erasing every reasonable position in between. It manipulates by emotional pressure and by hidden framing: typically one option is made to sound unacceptable ("against freedom," "with the enemy"), so you feel stampeded into accepting the other to avoid the ugly label, and meanwhile the whole range of middle positions — support the goal but want changes, agree partly, value the same thing but doubt this specific plan — is quietly made invisible. You escape it by refusing the frame itself rather than picking one of the two offered boxes: you point out that those are not the only two options and name the middle position you actually hold, for example "I can value freedom and still think this specific proposal has real problems — pretending I must either fully agree or be anti-freedom is a false choice." Naming the trap out loud defuses it, because a false dilemma only has power as long as you accept that the two presented options are the only ones available; the moment you reject that premise, the forced choice collapses. The deeper skill is noticing when "either/or" framing is doing work it has not earned, since real situations usually contain more than two possibilities.`,
                `You escape it by always picking the first option offered`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `A false dilemma offers only two options when more exist, using emotional pressure (one option labeled unacceptable) to stampede you toward the other while hiding all middle positions. Escape by refusing the frame, not picking a box: name the real middle position you hold. It only has power while you accept the two options are the only ones.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is "ten million people bought it, so it works" a fallacy, and what's missing?`,
              options: [
                `Random`,
                `It is the bandwagon fallacy: arguing that something must be true, good, or effective simply because many people believe it or do it — the same "everyone's saying it" trap from the epistemology lesson, now named as a formal logical error. It fails because large numbers of people genuinely can be wrong: history is full of beliefs almost everyone once held that turned out false, and popularity spreads through marketing, social pressure, convenience, and emotional appeal at least as much as through truth, so ten million purchases tell you the product was effectively sold and widely bought, not that it actually does what it claims. What is conspicuously missing is the only thing that would actually justify believing the product works: evidence about what it does, how it was tested, whether independent studies support it, and what genuinely happens when people use it. The pitch substitutes a headcount and a fear of being "left out" (bandwagon pressure stacked on an appeal to emotion) for any real demonstration of effectiveness. The honest move is to set the number aside entirely and ask the real question — where is the checkable evidence that this does what it claims? — because popularity is not evidence, and a pitch that leans hard on the size of the crowd usually does so precisely because it has nothing stronger to offer.`,
                `It's not a fallacy — that many people can't be wrong`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Bandwagon fallacy: "many believe/buy it, so it's true/works." Large numbers can be wrong — popularity spreads via marketing, pressure, and convenience, not just truth, so purchases show it sold, not that it works. What's missing is evidence (tests, independent studies, what it actually does). Popularity isn't evidence.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `When is worrying about consequences a slippery slope fallacy, and when is it legitimate?`,
              options: [
                `Random`,
                `It becomes a slippery slope fallacy when someone claims that one step must inevitably lead to a chain of increasingly disastrous consequences without giving any real argument for why each step must follow from the one before — the links are simply asserted to manufacture fear, as in "one test retake leads to retaking everything leads to no studying leads to meaningless grades leads to economic collapse," where each "then" is stated, not demonstrated, and the cumulative leap is absurd. But it is crucial not to overcorrect: worrying about consequences is NOT automatically a fallacy, because consequences are real and "if we do X, Y is likely to follow" can be perfectly sound reasoning. The real test is whether each step in the chain is actually likely and supported by evidence, or merely asserted: a legitimate consequence argument shows that the links are probable ("here is specific evidence that this change tends to produce that effect") and usually proposes proportionate responses, while a slippery slope strings together unsupported "and then" jumps to a catastrophic ending precisely to scare you out of a reasonable small step. So the difference between a reasonable worry about where something leads and a slippery slope fallacy is not whether you consider consequences at all, but whether there is genuine evidence for each link in the chain rather than fear-driven assertion.`,
                `Worrying about consequences is always a fallacy`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `It's a slippery slope fallacy when an inevitable catastrophic chain is asserted with no evidence for the links (each "then" just stated to manufacture fear). But worrying about consequences isn't automatically fallacious — "if X, then Y is likely" can be sound. The test: are the links actually likely and supported by evidence, or merely asserted?`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the lesson warn that "fallacy-hunting" can itself become bad thinking?`,
              options: [
                `Random`,
                `Because the names of fallacies can be misused as a club to dodge real thinking rather than as tools to do it. Once someone learns the vocabulary, it becomes tempting to slap a fallacy label on any argument they dislike in order to dismiss it without actually engaging, or to accuse others of committing fallacies they are not actually committing — but calling something a "straw man" or "ad hominem" is not the same as demonstrating that it is one, and a fallacy label fired carelessly is itself a form of bad reasoning. This connects to the deeper warning that confirmation bias runs the critical-thinking blade in only one direction unless you deliberately turn it around: it is easy and satisfying to find fallacies in people you already disagree with while excusing the identical flaws in your own arguments and your allies', which is using the tools to win rather than to understand. The genuine practice is harder and quieter — applying the same standards to your own reasoning and to people you agree with that you apply to opponents, steelmanning views you disagree with by building their strongest version before responding, and treating fallacy names as instruments for checking whether reasoning holds up rather than as weapons. Someone who only ever finds fallacies in their opponents has learned the vocabulary of critical thinking without its substance.`,
                `Because fallacies aren't actually real`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Fallacy names get misused as a club: labeling any disliked argument a "straw man" to dismiss it without engaging, or accusing others of fallacies they aren't committing — and a carelessly fired label is itself bad reasoning. Confirmation bias runs the blade one direction; the real practice is turning it on your own side and steelmanning, not weaponizing the vocabulary.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "steelmanning," and why is it such a powerful thinking habit?`,
              options: [
                `Random`,
                `Steelmanning is deliberately building the strongest, fairest possible version of a view you disagree with before you respond to it — the exact opposite of strawmanning, which distorts an opponent's view into a weak version that is easy to knock down. It is powerful for several reasons. First, it makes your own conclusions far more trustworthy: if you can defeat the strongest version of the opposing view, your position is genuinely solid, whereas if you can only beat a distorted weak version, you have proven nothing and may be fooling yourself. Second, it protects you from confirmation bias, because forcing yourself to construct the best case for the other side counteracts the mind's natural tendency to only see flaws in views it dislikes. Third, it often teaches you something — sometimes the strongest version of the opposing view turns out to have a real point you had missed, and you improve or change your view, which is a win, not a loss. Fourth, it makes you fairer and more persuasive to others, because people are far more willing to listen to someone who clearly understands their actual position than to someone attacking a caricature of it. Steelmanning embodies the lesson's deepest move: pointing the blade of logic at your own thinking first, which takes courage and is what separates real critical thinking from merely collecting fallacy names to win arguments.`,
                `Pretending to agree with everyone to avoid conflict`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Steelmanning is building the strongest, fairest version of a view you disagree with before responding — the opposite of strawmanning. It's powerful: defeating the strong version makes your conclusion solid, it counters confirmation bias, it sometimes teaches you the other side has a real point, and it makes you fairer and more persuasive. It's pointing the blade at your own thinking first.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A good critical thinker should be able to find a logical fallacy in basically any argument, so the real skill is learning to poke holes in everything.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important corrections in the lesson. The goal of critical thinking is not to find something wrong with every argument — that is just cynicism wearing logic's clothes, and a mind that reflexively rejects everything is as useless as one that accepts everything, because it can no longer tell good reasoning from bad and therefore cannot actually believe true things. Some arguments are genuinely sound: they rest on true premises, their conclusions really follow, they avoid fallacies, they acknowledge trade-offs honestly, and they propose proportionate conclusions — and recognizing that an argument is good is exactly as important a critical-thinking skill as spotting that one is broken. A real critical thinker judges each argument on its actual merits and is able to say "this reasoning is sound, I should accept it" with the same confidence as "this is a false dilemma, I should reject it." Treating critical thinking as a license to poke holes in everything actually defeats its purpose in two ways: it slides into the lazy total doubt warned against in the epistemology lesson (if everything can be "debunked," then nothing can be known and any belief is as good as any other), and it usually becomes one-directional, where the holes only ever get poked in arguments you already dislike while your own side gets a pass. The tools of logic are equally for recognizing and trusting good reasoning as for catching bad reasoning, and using them only to tear down is missing half their purpose.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you are 13, scrolling, and you hit a slick video: "WAKE UP. The experts pushing [X] all get paid by big companies — of course they say it's safe (you're not naive enough to trust THEM, are you?). It's simple: either you do your OWN research and see the truth, or you're a sheep who believes whatever you're told. Millions are waking up. And notice how hard they try to silence this video — that's how you KNOW it's true." Using this lesson, take it apart.`,
              options: [
                `"It makes good points, I should do my own research like it says"`,
                `Several things, calmly, because this short video is a dense stack of the exact fallacies this lesson just taught, bundled together precisely because each one greases the next — and taking it apart line by line is the whole skill in action. First, "the experts all get paid by big companies, of course they say it's safe" is an ad hominem aimed at a whole group: it attacks who the experts are (their funding) instead of engaging their actual evidence and reasoning, and even if some funding concerns were real and worth checking, that would be a reason to examine the evidence carefully, not a reason to treat the conclusion as automatically false — the financial fact, true or not, does not by itself tell you whether the claim is correct. Second, "you're not naive enough to trust THEM, are you?" is an appeal to emotion (and a little flattery): it pressures you to disbelieve in order to feel smart and independent, which has nothing to do with whether the experts are right. Third, "either do your own research and see the truth, or you're a sheep" is a textbook false dilemma: it erases every reasonable middle position — like carefully weighing expert evidence AND thinking for yourself, which is actually the smart move — and forces a choice between two loaded options, one of which is designed to be too humiliating to pick. Fourth, "millions are waking up" is the bandwagon fallacy: how many people believe something is not evidence of its truth, as you just saw, and large numbers of people can be and often are wrong. Fifth, and this is the cleverest and most dangerous move, "notice how hard they try to silence this — that's how you KNOW it's true" is an unfalsifiable trap, the same one from the epistemology lesson: it is rigged so that any pushback or correction counts as proof the video is right, which means no possible evidence could ever count against it, and a claim that can never lose is not strong, it is empty — that is how manipulation behaves, not how truth behaves. Sixth, notice "do your own research" is being used dishonestly here: real research means seriously weighing the best evidence on all sides, including the experts' actual reasoning, not just watching videos that confirm what this one wants you to believe while dismissing everything else as paid-off lies. Seventh, name the overall structure, because it matters more than any single fallacy: "the trusted authorities are secretly corrupt, only we independent few see the hidden truth, and their attempts to correct us prove we're right" is the classic shape of conspiratorial recruitment, the same pattern flagged in the last lesson, and bundling this many fallacies into something emotionally exciting is exactly how it pulls people in. Eighth, the honest response is not to flip to the opposite error and blindly trust whatever any expert says — that would just be swapping one lazy stance for another — but to do the genuinely critical thing: set aside all the manipulation and ask the only question that matters, what is the actual, checkable evidence on this specific claim, from sources that show their reasoning and could be proven wrong? The deepest takeaway is that a video like this works by feeling like critical thinking ("wake up," "do your own research," "don't be a sheep") while being the opposite of it, and the way you stay free is to recognize that real independent thinking means weighing evidence honestly on all sides, turning the blade on your own appealing conclusions too, and refusing arguments that are built so that nothing could ever prove them wrong.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Took apart a real manipulation that's a fallacy stack: ad hominem against a group ("experts are paid, so they're wrong" — funding doesn't settle the claim), appeal to emotion/flattery ("you're not naive, are you?"), false dilemma ("do your own research or you're a sheep" — erases the smart middle of weighing evidence AND thinking for yourself), bandwagon ("millions are waking up"), and the unfalsifiable "they try to silence it, so it's true" trap (rigged so nothing can disprove it = empty, not strong). Names the conspiratorial recruitment structure, exposes the dishonest use of "do your own research," and lands on the real move: ignore the manipulation and ask what checkable evidence exists from sources that could be proven wrong — without flipping to blind trust either.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-ownfallacy`, category: `Your own reasoning`, prompt: `Catch yourself in a fallacy — a recent time you used one (even a small one) because it supported what you already believed. A false dilemma in an argument? An ad hominem about someone you dislike? Dismissing a view with a label instead of engaging it? Turning the blade inward is the real skill.` },
            { id: `reflect-target`, category: `What's aimed at you`, prompt: `Which fallacy gets used on you most — in ads, online, by people trying to persuade you? Why does it work on you specifically? Knowing your own weak spot, in calm, is what lets you catch it when it's aimed at you for real.` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson says the goal isn't to "win" or poke holes in everything, but to reason honestly and stay able to recognize good arguments too. Are you more tempted toward winning, or toward fair reasoning? What would it look like to value being right over looking right?` },
            { id: `reflect-steelman`, category: `Steelmanning`, prompt: `Pick a view you genuinely disagree with. Try to build its strongest, fairest version — the one a smart, good person who holds it would actually give. How does it feel? Did you find anything in it more reasonable than you expected?` },
            { id: `reflect-certainty`, category: `Living with strong-but-not-certain`, prompt: `Most real-world knowledge is inductive: strong but not 100% certain. Is that comfortable or uncomfortable for you? Where do you feel pulled toward false certainty, and where toward the lazy "nothing's really proven" escape? How do you stay in the honest middle?` },
            { id: `reflect-protective`, category: `The bigger picture`, prompt: `Why do you think learning to take apart arguments matters so much right now, at your age? What kinds of people or messages do you think these tools are meant to protect you from in the years ahead?` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Logic isn't a school subject — it's the daily self-defense skill for a world full of persuasion. Two paths.`,
          familyActivity: {
            title: `The Fallacy Hunt (And The Honest Twist)`,
            duration: `40 minutes`,
            description: `As a family, go on a fallacy hunt — and then take the honest twist that makes it real critical thinking instead of just point-scoring. Round one: gather a handful of real persuasion from everyone's day (ads, social media posts, headlines, a politician's clip, even a heated online comment thread) and, together, name the fallacies you find — ad hominem, straw man, false dilemma, bandwagon, slippery slope, appeal to emotion, circular reasoning — and explain WHY each fails, not just label it. Round two, the honest twist that matters most: each person has to find a fallacy in an argument from THEIR OWN side — something they agree with that's actually argued badly — because the whole point of the lesson is that the blade cuts cleanest when you turn it on yourself, and a family that only spots fallacies in people they already dislike has missed it. Round three: find one genuinely GOOD argument and say clearly why its reasoning is sound, practicing the equally important skill of recognizing solid reasoning instead of just tearing things down. Keep it warm, not gotcha — the goal is a family that reasons honestly together and can say "good point" and "that's a false dilemma" with equal ease, which is exactly the mix of sharp thinking and humility this lesson is built to grow.`,
          },
          projectOption: {
            title: `The Argument Autopsy, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Become an argument analyst and keep an "autopsy" log of the reasoning you actually meet. Week 1: each day, capture one real argument you encounter (an ad, a video, a post, something a person said, or even something you told yourself) and dissect it on paper: write out its premises and conclusion in plain words, then ask the two key questions — are the premises actually true, and does the conclusion really follow? — and label any specific fallacy at work and explain why it fails. Include at least one argument that turns out to be GOOD, and say what makes it sound, so you're training recognition as well as criticism. Week 2, the hard and most valuable half: turn the blade on yourself. Pick two beliefs you actually hold and write out your real reasoning for each, then honestly interrogate it — are your premises true, does your conclusion follow, are you leaning on any fallacy because it supports what you want to believe? Then steelman the opposing view: write the strongest, fairest version of the case against each of your beliefs, the version a smart person who disagrees with you would give. End with a reflection on whether steelmanning changed, softened, or strengthened any belief, and what you learned about your own thinking. The point is to make argument-analysis a reflex and, crucially, to build the rare courage of applying it to your own mind first, which is what separates real critical thinking from collecting fallacy names to win.`,
            offerToParent: `Parent: opt your child into the Argument Autopsy. Dissecting real arguments daily — naming premises and conclusions, testing validity and truth separately, spotting fallacies, and equally recognizing sound reasoning — turns logic into a working reflex rather than a memorized list. The Week 2 steps (auditing their own beliefs and steelmanning the opposing view) build the hardest and most protective habit of all: pointing critical thinking at their own reasoning first, which is precisely what makes a young person genuinely difficult to manipulate or recruit. Emphasize that finding a flaw in their own argument is a success, not a failure.`,
          },
          identityQuestion: `If you become someone who can take any argument apart — see whether the conclusion really follows, name the exact trick when it doesn't, AND recognize genuinely good reasoning — and who has the courage to point all of that at your own thinking first, what does that let you do, and what does it protect you from, in a world that will spend your whole life trying to persuade you?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who checks whether the conclusion actually follows, not just whether it sounds good.`,
            `A person who can name the trick when someone tries to manipulate me with words.`,
            `Someone brave enough to point the blade at my own thinking first.`,
          ],
          saveKey: `identity_responses_fp_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Three down — and you just picked up the self-defense skill for a lifetime of being persuaded. After this lesson you can explain what an argument actually is, and separate the two questions most people blur together: does the conclusion follow (validity), and are the premises true (soundness). You can tell deductive certainty from inductive strength, and stay comfortable in the land of strong-but-not-certain where real knowledge lives. You can name the fallacies — ad hominem, straw man, false dilemma, appeal to authority, slippery slope, bandwagon, appeal to emotion, circular reasoning — that dress up bad reasoning as good, and you can recognize genuinely sound reasoning instead of poking holes in everything. And you learned the move that separates a real thinker from a fallacy-name collector: turn the blade on your own thinking first, steelman the views you oppose, and never use the names as a club. Sharp reasoning joined with genuine humility — that is the combination almost nothing can manipulate. Next, we turn from how we think to how we live: existentialism, and the daring idea that in a universe with no built-in instructions, you get to create your own meaning. That one's personal. See you there. — Orion`,
          badge: `logic-initiate`,
          badgeName: `Logic Initiate`,
          xpEarned: 75,
          competencies: [
            `Defines an argument (premises supporting a conclusion) and separates validity (does the conclusion follow?) from soundness (valid + true premises)`,
            `Distinguishes deductive reasoning (airtight when valid) from inductive reasoning (strong but not certain) and why this protects against both false certainty and dismissing strong evidence`,
            `Names and explains common fallacies: ad hominem, straw man, false dilemma, appeal to authority, slippery slope, bandwagon, appeal to emotion, circular reasoning`,
            `Understands the honest nuances: citing real experts vs. appeal-to-authority, and reasonable consequence-worry vs. slippery slope`,
            `Recognizes that the goal is accurate judgment, including identifying genuinely sound reasoning, not finding fault with everything`,
            `Applies the tools to one's own reasoning and allies first, and steelmans opposing views rather than strawmanning them`,
            `Avoids weaponizing fallacy names as a club, and can dismantle a stacked manipulation (e.g., conspiratorial recruitment) into its component tricks`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Existentialism — Creating Your Own Meaning`,
            hook: `From how we think to how we live: if the universe came with no built-in instructions, who decides what your life means? The daring answer is — you.`,
          },
        },
      ],
    },
  ],
};

export default FRONTIER_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = FRONTIER_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FRONTIER-VOYAGER-L03 ${VERSION}] "${l.title}" guide=${FRONTIER_VOYAGER_L03.guide} mags=${mags} cases=${cases} q=${quiz} r=${reflect}`
  );
}
