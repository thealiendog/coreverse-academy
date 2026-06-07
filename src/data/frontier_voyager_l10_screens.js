// ─────────────────────────────────────────────────────────────────────────────
// FRONTIER & PHILOSOPHY VOYAGER  |  L10 — The Philosophy of Science
// Age band : voyagers (11-12)   Guide: orion (Phoenix)
// Standards: Coreverse Original — Philosophy, Philosophy of Science, Epistemology, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// SUBJECT NOTE — Frontier & Philosophy:
//   - This is epistemology aimed at one target: what makes SCIENCE work, what makes it
//     different from other ways of claiming to know, and where its real limits lie. Builds on
//     L02 (knowledge/justification) and L03 (logic/fallacies).
//   - PROTECTIVE BACKBONE (calibration-critical): this is one of the most directly protective
//     lessons in the band. The line between science and pseudoscience (falsifiability, peer
//     review, self-correction, the difference between "a study said" and "the evidence shows")
//     is exactly what guards a young person against confident nonsense dressed in lab coats.
//     Teach what makes science TRUSTWORTHY without either worshipping it as infallible or
//     sneering at it as "just another opinion." Honesty tiers 2-3 dominate, with tier-4 honesty
//     about genuine limits.
//   - EVENHANDED on the limits: be honest that science has real limits (it answers "what is,"
//     not "what ought to be"; it can be done badly; it revises itself) WITHOUT feeding the
//     "science is just opinion / you can't trust anything" move that manipulators exploit. The
//     mature position: science is the best tool humans have built for understanding the natural
//     world, precisely BECAUSE it is built to catch and correct its own errors — and that same
//     self-correction is why "science changed its mind" is a strength, not a scandal.
//   - Term: "philosophical question." Honor curiosity and wonder; science as a human achievement.
//   - Em-dashes natural; do NOT run em-dash replacement on Frontier files.
//
// Interaction format: SEQUENCE (screen 7). Deliberately breaks the perspectives streak
// (L01,L04,L06,L07,L08 used perspectives). Matches <SequenceGame />: items[{id,text,position}]
// where position = correct 1-based rank; + headline, intro, completionMessage.
// CONTENT: the life-cycle of a scientific idea — how knowledge gets built, tested, challenged,
// and (sometimes) overturned. This shows science as a PROCESS, which is the lesson's core point.
//
// QUIZ STANDARD (locked, research-backed): 8 MC + 1 TF + 1 inference. All four MC options are
// SHORT (~one line, comparable length), plausible, misconception-based; correct answer rotated
// across positions and never the obvious longest; the rich teaching lives in `explanation`.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-frontier-l10-v1";

const FRONTIER_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `frontier`,
  guide: `orion`,

  lessons: [
    {
      id: `fp-11-12-10`,
      title: `The Philosophy of Science`,
      duration: 35,
      xpReward: 75,
      badge: `science-philosopher`,
      badgeName: `Philosopher of Science`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}. We've done ethics, political philosophy, epistemology. Now we turn the philosophical lens on science itself. What makes a claim scientific? What does a theory actually explain? How does science change, and does it make progress? Karl Popper, Thomas Kuhn, Imre Lakatos — these thinkers disagreed sharply about how science works. Understanding their disagreements will change how you think about scientific authority.`,
          headline: `The Philosophy of Science`,
          subtitle: `What makes science actually work — and what separates it from a convincing impostor? Sequence.`,
          visual: `/voyager-assets/frontier/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Question Underneath The Facts`,
          paragraphs: [
            `When people say "science," they usually picture a pile of facts: the speed of light, how genes work, why the sky is blue. But the philosophy of science asks a different and deeper question. It is not "what has science discovered?" but "what makes science a trustworthy way of finding things out in the first place?" In other words, it steps back from the facts and asks about the method that produces them. This matters because the facts are only as trustworthy as the method behind them, and not everything that calls itself science actually uses that method. So if you want to tell real science from a convincing impostor, you cannot just look at the conclusions, you have to understand the machine that made them.`,
            `Here is the heart of it. Science is not mainly a collection of answers; it is a process for testing ideas against reality and weeding out the ones that fail. That reframing changes everything. A scientific claim is not trustworthy because a smart person said it, or because it appears in a confident headline, or because it sounds impressive. It is trustworthy to the degree that it has survived a particular kind of brutal, honest testing — the kind specifically designed to catch the claim if it is wrong. The whole power of science comes from this: it is the one human practice deliberately built to find and correct its own mistakes, rather than to defend its existing beliefs. Most of how humans naturally think, as you learned with confirmation bias, is built to protect what we already believe. Science is the painstaking attempt to do the opposite.`,
            `Think about why that is so different from the other things that claim to explain the world. Astrology, a confident influencer, a conspiracy theory, an ancient authority — each offers explanations, and some of them sound very satisfying. But the question a philosopher of science learns to ask is not "does this explanation sound good?" It is "what is this explanation doing to check whether it is actually true, and what would it count as evidence that it is wrong?" That single question is a kind of superpower. It cuts straight through confident delivery and impressive vocabulary to the thing that actually matters: is there a real mechanism here for catching error, or is this just a story that protects itself from ever being tested? Hold onto that question. The rest of this lesson is really about unpacking everything hidden inside it.`,
          ],
          image: `/voyager-assets/frontier/l10-s1-question.webp`,
          imageCaption: `The philosophy of science doesn't ask "what has science discovered?" but the deeper question: "what makes science a trustworthy way of finding things out in the first place?" It steps back from the facts to the METHOD that produces them — because facts are only as trustworthy as the method behind them, and not everything calling itself science actually uses that method. The heart of it: science is not mainly a collection of answers; it is a PROCESS for testing ideas against reality and weeding out the ones that fail. A scientific claim isn't trustworthy because a smart person said it, or because it sounds impressive — it's trustworthy to the degree it has survived brutal, honest testing designed to catch it if it's wrong. Science is the one human practice deliberately built to find and correct its own mistakes, rather than defend existing beliefs. Most human thinking (remember confirmation bias) protects what we already believe; science painstakingly tries to do the opposite. The philosopher's superpower question, aimed at any explanation: not "does this sound good?" but "what is this doing to check whether it's actually true, and what would count as evidence it's wrong?" That cuts through confident delivery and impressive vocabulary to what matters: is there a real mechanism for catching error, or just a story that protects itself from ever being tested?`,
          vocab: [
            {
              word: `the question underneath the facts: science as a process`,
              definition: `When people say "science" they usually picture a pile of facts, but the philosophy of science asks a different and deeper question: not "what has science discovered?" but "what makes science a trustworthy way of finding things out in the first place?" It steps back from the facts and asks about the method that produces them, which matters because the facts are only as trustworthy as the method behind them and not everything that calls itself science actually uses that method, so telling real science from a convincing impostor requires understanding the machine that made the conclusions rather than just looking at the conclusions. The heart of it is that science is not mainly a collection of answers but a process for testing ideas against reality and weeding out the ones that fail, a reframing that changes everything: a scientific claim is not trustworthy because a smart person said it, because it appears in a confident headline, or because it sounds impressive, but to the degree that it has survived a particular kind of brutal, honest testing specifically designed to catch the claim if it is wrong. The whole power of science comes from this, since it is the one human practice deliberately built to find and correct its own mistakes rather than to defend its existing beliefs, which is the opposite of how humans naturally think, because most of our thinking (as confirmation bias showed) is built to protect what we already believe while science is the painstaking attempt to do the reverse. This is why science differs from the other things that claim to explain the world, such as astrology, a confident influencer, a conspiracy theory, or an ancient authority, all of which offer explanations and some of which sound very satisfying: the question a philosopher of science learns to ask is not "does this explanation sound good?" but "what is this explanation doing to check whether it is actually true, and what would it count as evidence that it is wrong?" That single question is a kind of superpower because it cuts straight through confident delivery and impressive vocabulary to the thing that actually matters, namely whether there is a real mechanism for catching error or just a story that protects itself from ever being tested.`,
              audioPrompt: `When people say "science," {name}, they usually picture a pile of facts: the speed of light, how genes work, why the sky is blue. But the philosophy of science asks a deeper question. Not "what has science discovered?" but "what makes science a trustworthy way of finding things out in the first place?" It steps back from the facts and asks about the method that produces them. This matters because the facts are only as trustworthy as the method behind them, and not everything that calls itself science actually uses that method. Here is the heart of it. Science is not mainly a collection of answers; it is a process for testing ideas against reality and weeding out the ones that fail. A scientific claim is not trustworthy because a smart person said it, or because it appears in a confident headline, or because it sounds impressive. It is trustworthy to the degree that it has survived a particular kind of brutal, honest testing, the kind specifically designed to catch the claim if it is wrong. The whole power of science comes from this: it is the one human practice deliberately built to find and correct its own mistakes, rather than to defend its existing beliefs. Most of how humans naturally think, as you learned with confirmation bias, is built to protect what we already believe. Science is the painstaking attempt to do the opposite. So think about the question a philosopher of science learns to ask about any explanation. Not "does this sound good?" but "what is this doing to check whether it is actually true, and what would count as evidence that it is wrong?" That single question is a kind of superpower. It cuts through confident delivery and impressive vocabulary to the thing that matters: is there a real mechanism here for catching error, or is this just a story that protects itself from ever being tested? Hold onto that question.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Falsifiability: The Line That Matters Most`,
          paragraphs: [
            `Here is the single most useful idea in the whole philosophy of science, and one that can protect you for the rest of your life. The philosopher Karl Popper asked a deceptively simple question: what separates a genuinely scientific claim from one that only pretends to be? His answer was falsifiability. A claim is scientific if it sticks its neck out — if there is some possible observation or experiment that could prove it wrong. A real scientific claim makes a risky prediction: "if I am right, you will see THIS; and if you see THAT instead, I am wrong." It takes the chance of failing. A claim that can never be proven wrong, no matter what happens, is not a strong claim — it is an empty one, because it is not actually saying anything testable about the world.`,
            `This sounds backwards at first, so sit with it: being able to be wrong is a strength, not a weakness. Imagine two fortune-tellers. The first says "next Tuesday you will receive a phone call from someone whose name begins with M." That is a risky, falsifiable prediction — if no such call comes, she was wrong, and you can check. The second says "sometime, something significant will happen in your life, and a person will matter to you." That can never fail, because it is vague enough to fit absolutely any life. The first is behaving like a scientist (testable, takes a risk); the second is behaving like a horoscope (unfalsifiable, always "right" because it never really said anything). The lesson is sharp: a claim that is compatible with every possible outcome tells you nothing, even though it can feel deeply true precisely because it always seems to fit.`,
            `Now you have a blade that cuts through an enormous amount of nonsense. When you meet a big confident claim — about health, the universe, why things "really" happen — ask: what would prove this wrong? If the person making it can describe exactly what evidence would change their mind, that is the sound of real thinking, and you should take them more seriously. But if every possible outcome somehow "confirms" the claim — if good evidence proves it, and contrary evidence is explained away as a cover-up or a test of faith or "they would say that, wouldn't they" — then you are not looking at knowledge, you are looking at a belief that has been rigged to be unfalsifiable. You met this exact machinery in the lesson on strange beliefs: the unfalsifiable claim is the engine of conspiracy thinking and pseudoscience. Falsifiability is the test that exposes it. It is not a perfect, total definition of science (philosophers debate the edges), but as a practical protective tool, few things you will ever learn are more valuable.`,
          ],
          image: `/voyager-assets/frontier/l10-s2-falsifiability.webp`,
          imageCaption: `The single most useful idea here, protective for life. Karl Popper asked: what separates a genuinely scientific claim from one only pretending? His answer — FALSIFIABILITY. A claim is scientific if it sticks its neck out: if there's some possible observation or experiment that could prove it WRONG. A real scientific claim makes a risky prediction ("if I'm right you'll see THIS; if you see THAT, I'm wrong") and takes the chance of failing. A claim that can never be proven wrong, no matter what, isn't strong — it's empty, because it's not saying anything testable. Counterintuitive but crucial: being able to be wrong is a STRENGTH. Two fortune-tellers: one predicts "a call Tuesday from someone whose name starts with M" (risky, falsifiable, checkable); the other says "something significant will happen and a person will matter to you" (fits any life, never fails, says nothing). First acts like a scientist; second like a horoscope. A claim compatible with EVERY outcome tells you nothing — even though it can feel deeply true precisely because it always fits. Your blade against nonsense: ask "what would prove this wrong?" If they can say exactly what would change their mind, take them seriously. If every outcome "confirms" it (good evidence proves it, bad evidence is a cover-up or test of faith), it's a belief rigged to be unfalsifiable — the engine of conspiracy thinking and pseudoscience. Not a perfect total definition (philosophers debate edges), but few protective tools are more valuable.`,
          vocab: [
            {
              word: `falsifiability`,
              definition: `Falsifiability is the single most useful idea in the philosophy of science and a lifelong protective tool, introduced by the philosopher Karl Popper to answer what separates a genuinely scientific claim from one that only pretends to be: a claim is scientific if it sticks its neck out, meaning there is some possible observation or experiment that could prove it wrong, because a real scientific claim makes a risky prediction of the form "if I am right you will see this, and if you see that instead I am wrong" and so takes the chance of failing, whereas a claim that can never be proven wrong no matter what happens is not strong but empty, since it is not actually saying anything testable about the world. This sounds backwards but being able to be wrong is a strength rather than a weakness, as shown by two fortune-tellers: the first predicts "next Tuesday you will receive a phone call from someone whose name begins with M," which is risky, falsifiable, and checkable, while the second says "sometime something significant will happen and a person will matter to you," which can never fail because it is vague enough to fit any life, so the first behaves like a scientist (testable, takes a risk) and the second like a horoscope (unfalsifiable, always "right" because it never really said anything), and the sharp lesson is that a claim compatible with every possible outcome tells you nothing even though it can feel deeply true precisely because it always seems to fit. This gives you a blade that cuts through enormous amounts of nonsense: when you meet a big confident claim about health, the universe, or why things "really" happen, ask what would prove it wrong, and if the person can describe exactly what evidence would change their mind that is the sound of real thinking, but if every possible outcome somehow "confirms" the claim, with good evidence proving it and contrary evidence explained away as a cover-up or a test of faith or "they would say that," then you are not looking at knowledge but at a belief rigged to be unfalsifiable, which is the same engine of conspiracy thinking and pseudoscience met in the lesson on strange beliefs. Falsifiability is the test that exposes it, and while it is not a perfect total definition of science, since philosophers debate the edges, as a practical protective tool few things you will ever learn are more valuable.`,
              audioPrompt: `Here is the single most useful idea in the whole philosophy of science, {name}, and one that can protect you for the rest of your life. The philosopher Karl Popper asked a simple question: what separates a genuinely scientific claim from one that only pretends to be? His answer was falsifiability. A claim is scientific if it sticks its neck out, if there is some possible observation or experiment that could prove it wrong. A real scientific claim makes a risky prediction: if I am right, you will see this; and if you see that instead, I am wrong. It takes the chance of failing. A claim that can never be proven wrong, no matter what happens, is not a strong claim, it is an empty one, because it is not saying anything testable about the world. This sounds backwards, so sit with it: being able to be wrong is a strength, not a weakness. Imagine two fortune-tellers. The first says, next Tuesday you will get a phone call from someone whose name begins with M. That is a risky, falsifiable prediction; if no such call comes, she was wrong, and you can check. The second says, sometime, something significant will happen in your life, and a person will matter to you. That can never fail, because it is vague enough to fit any life. The first is behaving like a scientist; the second like a horoscope. A claim that is compatible with every possible outcome tells you nothing, even though it can feel deeply true precisely because it always fits. So now you have a blade that cuts through an enormous amount of nonsense. When you meet a big confident claim, ask: what would prove this wrong? If the person can describe exactly what evidence would change their mind, that is the sound of real thinking. But if every outcome somehow confirms the claim, if good evidence proves it and contrary evidence is explained away as a cover-up or a test of faith, then you are not looking at knowledge. You are looking at a belief rigged to be unfalsifiable. Falsifiability is the test that exposes it.`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why "Science Changed Its Mind" Is A Strength`,
          paragraphs: [
            `One of the most common attacks on science goes like this: "Scientists used to say X, now they say Y, so why should I trust them about anything? They keep changing their minds." It sounds like a knockout blow. It is actually exactly backwards, and understanding why is one of the most important things in this lesson. Science changing its mind in response to better evidence is not a bug, not an embarrassment, not a reason to distrust it. It is the entire point. It is the self-correction working exactly as designed. A way of knowing that NEVER changed its mind, no matter what new evidence arrived, would not be more trustworthy — it would be the opposite, because it would have stopped paying attention to reality. That is what dogma does. Science does the harder, more honest thing: it updates.`,
            `So the trustworthiness of science does not come from individual scientists being especially smart or pure (they are ordinary humans, with all the biases you have studied). It comes from the system built around them, designed so that errors get caught even when individuals miss them. Three pieces of that system are worth knowing. Peer review: before a finding is taken seriously, other experts who would love to find a flaw scrutinize it. Replication: a result only becomes solid when other people, in other places, can repeat it and get the same thing — one study is a clue, not a conclusion. And the relentless incentive to overturn: a scientist who could topple a famous theory with better evidence becomes famous for doing it, so the system actively rewards error-catching rather than punishing it. The genius is structural: it does not require the people to be saints, it requires the process to keep checking them.`,
            `This gives you a much smarter way to handle the "science keeps changing" complaint, and a sharper eye in both directions. Yes, science revises itself, and that is precisely why a settled scientific consensus — something thousands of independent researchers have tested, attacked, and failed to break for decades — is among the most trustworthy knowledge humans possess. But it also means you should be appropriately careful with the phrase "a new study shows," because a single fresh study is exactly the thing that has NOT yet been replicated, scrutinized, and stress-tested. Real scientific confidence is built slowly, out of many converging lines of evidence, not announced in one dramatic headline. So the protective skill cuts both ways: it stops you from dismissing solid consensus because "they changed their minds once," AND it stops you from over-trusting a flashy single study just because it wears the word "science." Knowing the difference between a clue and a conclusion is most of the battle.`,
          ],
          image: `/voyager-assets/frontier/l10-s3-selfcorrection.webp`,
          imageCaption: `A common attack: "Scientists used to say X, now they say Y — why trust them? They keep changing their minds." Sounds like a knockout. It's exactly backwards. Science changing its mind in response to better evidence isn't a bug or embarrassment — it's the entire point, self-correction working as designed. A way of knowing that NEVER changed, no matter what new evidence arrived, wouldn't be more trustworthy — it'd be the opposite, because it stopped paying attention to reality. That's dogma. Science does the harder, honest thing: it updates. Trustworthiness doesn't come from scientists being especially smart or pure (they're ordinary humans with all the biases you've studied) — it comes from the SYSTEM built around them to catch errors individuals miss. Three pieces: PEER REVIEW (experts who'd love to find a flaw scrutinize it first); REPLICATION (a result is solid only when others elsewhere repeat it — one study is a clue, not a conclusion); and the INCENTIVE TO OVERTURN (a scientist who topples a famous theory with better evidence becomes famous, so the system rewards error-catching). The genius is structural: it doesn't need saints, it needs a process that keeps checking. So a settled consensus — tested and attacked for decades and unbroken — is among the most trustworthy knowledge humans have. But "a new study shows" deserves caution: a single fresh study is exactly what HASN'T been replicated yet. The skill cuts both ways: don't dismiss solid consensus because "they changed their minds once," and don't over-trust a flashy single study for wearing the word "science." Clue vs. conclusion is most of the battle.`,
          vocab: [
            {
              word: `self-correction, peer review, and replication`,
              definition: `One of the most common attacks on science is "scientists used to say X, now they say Y, so why trust them, they keep changing their minds," which sounds like a knockout blow but is exactly backwards, because science changing its mind in response to better evidence is not a bug, an embarrassment, or a reason to distrust it but the entire point, the self-correction working as designed, since a way of knowing that never changed its mind no matter what new evidence arrived would not be more trustworthy but the opposite, having stopped paying attention to reality, which is what dogma does, while science does the harder, more honest thing and updates. The trustworthiness of science therefore does not come from individual scientists being especially smart or pure, since they are ordinary humans with all the usual biases, but from the system built around them and designed so errors get caught even when individuals miss them, and three pieces of that system are worth knowing: peer review, in which other experts who would love to find a flaw scrutinize a finding before it is taken seriously; replication, in which a result becomes solid only when other people in other places can repeat it and get the same thing, so that one study is a clue rather than a conclusion; and the relentless incentive to overturn, in which a scientist who could topple a famous theory with better evidence becomes famous for doing it, so the system actively rewards error-catching rather than punishing it, the genius being structural in that it does not require the people to be saints but requires the process to keep checking them. This gives a smarter way to handle the "science keeps changing" complaint and a sharper eye in both directions: science revises itself, which is precisely why a settled scientific consensus that thousands of independent researchers have tested, attacked, and failed to break for decades is among the most trustworthy knowledge humans possess, but it also means being appropriately careful with "a new study shows," because a single fresh study is exactly what has not yet been replicated, scrutinized, and stress-tested, since real scientific confidence is built slowly out of many converging lines of evidence rather than announced in one dramatic headline. So the protective skill cuts both ways, stopping you from dismissing solid consensus because "they changed their minds once" and from over-trusting a flashy single study just because it wears the word "science," and knowing the difference between a clue and a conclusion is most of the battle.`,
              audioPrompt: `One of the most common attacks on science goes like this, {name}: "Scientists used to say X, now they say Y, so why should I trust them? They keep changing their minds." It sounds like a knockout blow. It is actually exactly backwards. Science changing its mind in response to better evidence is not a bug, not an embarrassment, not a reason to distrust it. It is the entire point. It is the self-correction working as designed. A way of knowing that never changed its mind, no matter what new evidence arrived, would not be more trustworthy; it would be the opposite, because it would have stopped paying attention to reality. That is what dogma does. Science does the harder, more honest thing: it updates. So the trustworthiness of science does not come from individual scientists being especially smart or pure; they are ordinary humans, with all the biases you have studied. It comes from the system built around them, designed so errors get caught even when individuals miss them. Three pieces are worth knowing. Peer review: other experts who would love to find a flaw scrutinize a finding before it is taken seriously. Replication: a result becomes solid only when other people, in other places, can repeat it and get the same thing. One study is a clue, not a conclusion. And the incentive to overturn: a scientist who topples a famous theory with better evidence becomes famous for it, so the system rewards error-catching. The genius is structural: it does not need the people to be saints, it needs the process to keep checking them. This gives you a smarter way to handle the "science keeps changing" complaint. Yes, science revises itself, and that is exactly why a settled consensus, tested and attacked for decades and still unbroken, is among the most trustworthy knowledge humans have. But it also means being careful with "a new study shows," because a single fresh study is exactly what has not yet been replicated. Real confidence is built slowly, from many converging lines of evidence, not announced in one headline. The skill cuts both ways: don't dismiss solid consensus because they changed their minds once, and don't over-trust a flashy single study just because it wears the word "science."`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Honest Limits — Without Falling Off The Edge`,
          paragraphs: [
            `Now the part that takes real maturity to hold, because it has two edges and most people fall off one of them. Science is the most powerful tool humans have ever built for understanding the natural world — AND it has genuine limits. Both halves are true at once, and a clear thinker refuses to drop either one. The first limit is about what kind of question science can answer. Science is extraordinary at questions of "what is": what exists, how it works, what will happen if. But it cannot, by itself, answer questions of "what ought to be" — what is right, what is beautiful, what is worth doing, how we should live. Science can tell you exactly what a weapon will do; it cannot tell you whether to build it. It can describe human nature in detail; it cannot tell you what makes a good life. Those are the questions of ethics and meaning you have spent this whole band on, and they are real questions — science informs them powerfully but does not replace them.`,
            `The second limit is more practical and just as important: science is done by humans, so it can be done badly. A single study can be too small, poorly designed, or never replicated. Results get exaggerated by headlines hungry for drama. Funding can bias which questions even get asked. None of this means "science is unreliable" — it means the self-correcting system is essential precisely because the humans inside it are fallible, and it is why you weigh the consensus of many studies over the splash of any one. Knowing this protects you from a naive trust in anything wearing a lab coat, without tipping you into the opposite error.`,
            `And that opposite error is the edge you must not fall off, because it is the one manipulators are counting on. Some people take "science has limits and can be done badly" and twist it into "so science is just another opinion, and you can't really trust any of it, so believe whatever you like." That is a catastrophic misreading, and it is precisely the move used to sell you pseudoscience, conspiracy theories, and miracle cures: first they convince you that real science can't be trusted, and then, with your defenses down, they hand you something far worse dressed in the same vocabulary. The honest, mature position holds the tension perfectly: science has real limits and is not infallible, AND it remains by an enormous margin the best method humans have ever devised for understanding the natural world, precisely because it is the one built to catch its own errors. "It's not perfect" and "it's the best we have, by far" are both true, and the person who can hold both at once — neither worshipping science nor dismissing it — is exactly the person who cannot be fooled by either a false prophet or a false skeptic. That balance, the same one you have practiced all band, is the whole prize.`,
          ],
          image: `/voyager-assets/frontier/l10-s4-limits.webp`,
          imageCaption: `The mature part — two edges, and most people fall off one. Science is the most powerful tool humans ever built for understanding the natural world AND it has genuine limits. Both true at once; a clear thinker drops neither. LIMIT ONE — what kind of question: science is extraordinary at "what is" (what exists, how it works, what happens if) but can't by itself answer "what ought to be" (what's right, beautiful, worth doing). It can tell you what a weapon will do, not whether to build it; describe human nature, not what makes a good life. Those ethics-and-meaning questions are real — science informs them but doesn't replace them. LIMIT TWO — humans do science, so it can be done badly: a study can be too small, poorly designed, never replicated; headlines exaggerate; funding biases which questions get asked. This doesn't mean "science is unreliable" — it's why self-correction is essential and why you weigh consensus over any one study. But here's the edge you must NOT fall off, the one manipulators count on: twisting "science has limits" into "so it's just opinion, trust nothing, believe whatever you like." That's the exact move used to sell pseudoscience and miracle cures — first convince you real science can't be trusted, then hand you something worse in the same vocabulary. The honest position holds the tension: science isn't infallible AND it's by far the best method we have, because it's built to catch its own errors. Neither worship nor dismiss — that balance is the whole prize.`,
          vocab: [
            {
              word: `the honest limits of science (without falling off the edge)`,
              definition: `The mature part takes real maturity to hold because it has two edges and most people fall off one: science is the most powerful tool humans have ever built for understanding the natural world and it has genuine limits, both true at once, and a clear thinker refuses to drop either. The first limit concerns what kind of question science can answer, since science is extraordinary at questions of "what is" (what exists, how it works, what will happen if) but cannot by itself answer questions of "what ought to be" (what is right, beautiful, worth doing, how we should live), so it can tell you exactly what a weapon will do but not whether to build it, and describe human nature in detail but not what makes a good life, those being the questions of ethics and meaning the whole band has explored, which are real questions that science informs powerfully but does not replace. The second limit is more practical and just as important: science is done by humans, so it can be done badly, since a single study can be too small, poorly designed, or never replicated, results get exaggerated by headlines hungry for drama, and funding can bias which questions even get asked, none of which means science is unreliable but rather that the self-correcting system is essential precisely because the humans inside it are fallible, which is why one weighs the consensus of many studies over the splash of any one, and knowing this protects against naive trust in anything wearing a lab coat without tipping into the opposite error. That opposite error is the edge not to fall off because it is the one manipulators count on: some people take "science has limits and can be done badly" and twist it into "so science is just another opinion and you cannot really trust any of it, so believe whatever you like," which is a catastrophic misreading and precisely the move used to sell pseudoscience, conspiracy theories, and miracle cures, since they first convince you real science cannot be trusted and then, with your defenses down, hand you something far worse dressed in the same vocabulary. The honest, mature position holds the tension perfectly: science has real limits and is not infallible, and it remains by an enormous margin the best method humans have ever devised for understanding the natural world precisely because it is the one built to catch its own errors, so "it's not perfect" and "it's the best we have, by far" are both true, and the person who can hold both at once, neither worshipping science nor dismissing it, is exactly the person who cannot be fooled by either a false prophet or a false skeptic, which is the same balance practiced all band and the whole prize.`,
              audioPrompt: `Now the part that takes real maturity to hold, {name}, because it has two edges and most people fall off one of them. Science is the most powerful tool humans have ever built for understanding the natural world, AND it has genuine limits. Both halves are true at once, and a clear thinker refuses to drop either one. The first limit is about what kind of question science can answer. Science is extraordinary at questions of "what is": what exists, how it works, what will happen if. But it cannot, by itself, answer questions of "what ought to be": what is right, what is beautiful, what is worth doing, how we should live. Science can tell you exactly what a weapon will do; it cannot tell you whether to build it. It can describe human nature; it cannot tell you what makes a good life. Those are the questions of ethics and meaning you have spent this whole band on, and science informs them powerfully but does not replace them. The second limit is more practical: science is done by humans, so it can be done badly. A single study can be too small, poorly designed, or never replicated. Headlines exaggerate. Funding can bias which questions get asked. None of this means science is unreliable; it means the self-correcting system is essential precisely because the humans inside it are fallible, and it is why you weigh the consensus of many studies over the splash of any one. And here is the edge you must not fall off, because it is the one manipulators are counting on. Some people take "science has limits and can be done badly" and twist it into "so science is just another opinion, and you can't trust any of it, so believe whatever you like." That is a catastrophic misreading, and it is exactly the move used to sell you pseudoscience and miracle cures: first they convince you real science can't be trusted, and then, with your defenses down, they hand you something far worse in the same vocabulary. The honest position holds the tension: science has real limits and is not infallible, AND it remains by an enormous margin the best method humans have ever built for understanding the natural world, precisely because it is the one built to catch its own errors. "It's not perfect" and "it's the best we have, by far" are both true. The person who can hold both at once, neither worshipping science nor dismissing it, is exactly the person who cannot be fooled by either a false prophet or a false skeptic.`,
            },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Sequence`,
          paragraphs: [
            `Pull it together before the activity. You learned that the philosophy of science asks the question underneath the facts: not "what has science found?" but "what makes science a trustworthy way of finding out?" — and the answer is that science is a process built to test ideas against reality and catch its own errors, the opposite of how we naturally protect our beliefs. You learned the single most protective idea in the field: falsifiability, the test of whether a claim sticks its neck out and could be proven wrong, which is the blade that separates real science from a horoscope dressed in confident language. You learned why "science changed its mind" is a strength, not a scandal — self-correction working as designed, powered by peer review, replication, and the reward for overturning error — and why that means trusting hard-won consensus while staying careful with any single "new study." And you learned to hold the honest tension: science has real limits and can be done badly, AND it is by far the best tool we have, so the clear thinker neither worships it nor dismisses it.`,
            `Now the activity puts the lesson's core insight into your hands directly: that science is a PROCESS, not a pile of facts. You will be given the stages in the life of a scientific idea — the journey a claim travels from a first spark of curiosity all the way to either becoming established knowledge or being overturned by something better — all shuffled out of order. Your job is to put them back into the sequence that shows how scientific knowledge actually gets built and tested over time. As you order them, you are really tracing the machine we have been describing: notice where the testing happens, where other people get involved, where an idea earns trust slowly, and where it stays open to being revised.`,
            `One last thing to carry, because it is the real point of all of this. The goal was never to make you trust scientists blindly, and it was certainly never to make you a cynic who trusts nothing. It was to make you something more powerful than either: a person who understands WHY good science is trustworthy, and can therefore tell the real thing from the impostor wearing its clothes. In a world that will spend your whole life firing claims at you — "studies show," "scientifically proven," "experts say," "they don't want you to know" — that understanding is a form of freedom. You will not have to take anyone's word for it, on either side, because you will know the right questions to ask: Could this be proven wrong? Has it been tested by people who'd love to find it false? Is this a clue or a conclusion? What kind of question is this even — a "what is" or a "what ought"? Those questions are your inheritance from one of the greatest achievements of the human mind. Let's trace how it works.`,
          ],
          image: `/voyager-assets/frontier/l10-s5-before.webp`,
          imageCaption: `Threads together. The philosophy of science asks the question underneath the facts: not "what has science found?" but "what makes it a trustworthy way of finding out?" — answer: science is a PROCESS built to test ideas against reality and catch its own errors, the opposite of how we naturally protect our beliefs. FALSIFIABILITY: the most protective idea — does a claim stick its neck out and could it be proven wrong? The blade separating real science from a horoscope in confident language. "Science changed its mind" is a STRENGTH (self-correction by peer review, replication, the reward for overturning error) — so trust hard-won consensus, stay careful with any single "new study" (clue vs. conclusion). And hold the tension: science has real limits and can be done badly AND it's by far the best tool we have — neither worship nor dismiss. The sequence activity ahead puts the core insight in your hands: science is a process, not a pile of facts. You'll order the stages of a scientific idea's life — from first spark to established knowledge or overturning — tracing where testing happens, where others get involved, where trust is earned slowly. The real point: not blind trust, not cynicism, but understanding WHY good science is trustworthy, so you can tell the real thing from the impostor. In a world firing "studies show," "proven," "experts say," "they don't want you to know" at you for life, that understanding is freedom — you know the questions to ask: Could this be proven wrong? Tested by people who'd love to find it false? Clue or conclusion? "What is" or "what ought"?`,
          vocab: [
            {
              word: `science as process: the questions that set you free`,
              definition: `The synthesis before the activity: the philosophy of science asks the question underneath the facts, not "what has science found?" but "what makes science a trustworthy way of finding out?", and the answer is that science is a process built to test ideas against reality and catch its own errors, the opposite of how we naturally protect our beliefs. The single most protective idea is falsifiability, the test of whether a claim sticks its neck out and could be proven wrong, which is the blade separating real science from a horoscope dressed in confident language. "Science changed its mind" is a strength rather than a scandal, being self-correction working as designed and powered by peer review (experts scrutinizing before a finding is trusted), replication (a result becoming solid only when others repeat it, so one study is a clue not a conclusion), and the reward for overturning error, which together mean one should trust hard-won consensus while staying careful with any single new study. The honest tension must be held: science has real limits (it answers "what is" but not "what ought to be," and being done by humans it can be done badly) and is not infallible, and yet it is by far the best tool humans have for understanding the natural world precisely because it is built to catch its own errors, so the clear thinker neither worships nor dismisses it, refusing both the false prophet and the false skeptic. The sequence activity puts the core insight into the learner's hands, that science is a process and not a pile of facts, by giving the shuffled stages in the life of a scientific idea (the journey from a first spark of curiosity to either established knowledge or being overturned by something better) to be restored to the order that shows how scientific knowledge actually gets built and tested over time, tracing where the testing happens, where other people get involved, where an idea earns trust slowly, and where it stays open to revision. The real point was never to make one trust scientists blindly or become a cynic who trusts nothing, but to make one a person who understands why good science is trustworthy and can therefore tell the real thing from the impostor, which in a world that will spend a lifetime firing claims like "studies show," "scientifically proven," "experts say," and "they don't want you to know" is a form of freedom, because one need not take anyone's word on either side but can ask the right questions: could this be proven wrong, has it been tested by people who would love to find it false, is this a clue or a conclusion, and is this even a "what is" or a "what ought" question, those questions being the inheritance from one of the greatest achievements of the human mind.`,
              audioPrompt: `Pull it together before the activity, {name}. You learned that the philosophy of science asks the question underneath the facts: not "what has science found?" but "what makes science a trustworthy way of finding out?" And the answer is that science is a process built to test ideas against reality and catch its own errors, the opposite of how we naturally protect our beliefs. You learned the single most protective idea in the field: falsifiability, the test of whether a claim sticks its neck out and could be proven wrong, the blade that separates real science from a horoscope dressed in confident language. You learned why "science changed its mind" is a strength, not a scandal: self-correction working as designed, powered by peer review, replication, and the reward for overturning error, which means trusting hard-won consensus while staying careful with any single new study. And you learned to hold the honest tension: science has real limits and can be done badly, AND it is by far the best tool we have, so the clear thinker neither worships it nor dismisses it. Now the activity puts the core insight into your hands: that science is a process, not a pile of facts. You will be given the stages in the life of a scientific idea, the journey from a first spark of curiosity all the way to becoming established knowledge or being overturned by something better, all shuffled out of order. Your job is to put them back into the sequence that shows how scientific knowledge actually gets built and tested over time. As you order them, notice where the testing happens, where other people get involved, where an idea earns trust slowly, and where it stays open to revision. One last thing. The goal was never to make you trust scientists blindly, and never to make you a cynic who trusts nothing. It was to make you something more powerful: a person who understands why good science is trustworthy, and can tell the real thing from the impostor wearing its clothes. In a world that will spend your whole life firing claims at you, that understanding is a form of freedom. You will know the questions to ask. Could this be proven wrong? Has it been tested by people who'd love to find it false? Is this a clue or a conclusion? Is this a "what is" or a "what ought"? Let's trace how it works.`,
            },
          ],
        },

        // ───── SEQUENCE GAME ─────────────────────────────────────────────────
        {
          id: `l10-sequence`,
          type: `sequence`,
          headline: `The Life Of A Scientific Idea`,
          intro: `{name}, here is the core of today's lesson made real: science is a PROCESS, not a pile of facts. Below are the stages in the life of a scientific idea — the journey a claim takes from a first spark of curiosity to becoming trusted knowledge (or being overturned by something better). They're shuffled. Put them in the order that shows how scientific knowledge actually gets built and tested over time. As you order them, notice where the real testing happens.`,
          completionMessage: `That's the machine. Notice what it's built to do: not to defend the first idea, but to attack it from every angle and keep only what survives. The curiosity at the start and the openness to revision at the end are both essential — and the brutal testing in the middle is exactly why a claim that makes it all the way through is worth trusting. That's the difference between science and a story that protects itself.`,
          items: [
            { id: `s1`, position: 1, text: `A curious observation or question: someone notices something puzzling about the world that existing ideas don't fully explain.` },
            { id: `s2`, position: 2, text: `A hypothesis: a proposed explanation that makes a specific, testable, falsifiable prediction — "if this is true, we should see THIS."` },
            { id: `s3`, position: 3, text: `An experiment or careful observation designed specifically to test the prediction — including ways the hypothesis could fail.` },
            { id: `s4`, position: 4, text: `Results are analyzed honestly: did the evidence match the risky prediction, or not? A failed prediction means the idea needs revising or rejecting.` },
            { id: `s5`, position: 5, text: `Peer review: other experts who would love to find a flaw scrutinize the methods and reasoning before the finding is taken seriously.` },
            { id: `s6`, position: 6, text: `Replication: other researchers, in other places, repeat the work to see if they get the same result — turning a single clue into something solid.` },
            { id: `s7`, position: 7, text: `If it survives repeated testing by many independent people over time, it becomes part of accepted scientific knowledge — a trusted consensus.` },
            { id: `s8`, position: 8, text: `It stays open forever: if better evidence ever arrives, even a long-accepted idea can be revised or overturned — and that openness is the whole point.` },
          ],
          synthesisPrompt: `Look at the order you built. Which stage do you think does the most work to make science trustworthy, and why? Then answer in your own words: how is this process different from how a conspiracy theory or a horoscope "works"? Where, exactly, is the testing that they skip? In 5-6 sentences.`,
          reflectionPrompt: `The idea "stays open forever" to revision (the last stage). Why does that openness make science MORE trustworthy rather than less? And why is it so easy for people to mistake it for weakness?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your thinking`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What deeper question does the philosophy of science ask, beyond "what has science discovered?"`,
              options: [
                `Which scientist is the smartest and should be trusted the most on every subject.`,
                `What makes science a trustworthy way of finding things out — the method behind the facts.`,
                `How to memorize scientific facts faster so you can win arguments about them.`,
                `Whether science or religion is correct, treating them as rival teams to pick between.`,
              ],
              correctIndex: 1,
              explanation: `The philosophy of science steps back from the facts and asks about the METHOD that produces them: not "what has science discovered?" but "what makes science a trustworthy way of finding things out?" This matters because facts are only as trustworthy as the method behind them, and not everything calling itself science actually uses that method. The key reframing: science isn't mainly a pile of answers — it's a process for testing ideas against reality and weeding out the ones that fail.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is falsifiability, and why does it matter so much?`,
              options: [
                `The ability to prove a claim is definitely true once and for all, which is exactly what makes a claim count as scientific.`,
                `A claim being false — so calling something "falsifiable" means it's been shown to be wrong.`,
                `Whether a claim sticks its neck out and could be proven wrong — the test that separates science from an impostor.`,
                `How many famous experts agree with a claim, since agreement is what makes it count as science.`,
              ],
              correctIndex: 2,
              explanation: `Karl Popper's falsifiability: a claim is scientific if there's some possible observation that could prove it WRONG — if it makes a risky prediction and takes the chance of failing. A claim that can never be proven wrong (compatible with every outcome) isn't strong, it's empty — it isn't saying anything testable. Being able to be wrong is a strength. It's the blade that separates a real scientific claim from a horoscope that's vague enough to always "fit." Ask of any big claim: what would prove this wrong?`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is "science keeps changing its mind" actually a strength, not a reason to distrust it?`,
              options: [
                `It isn't a strength at all — constantly changing their answers just proves the scientists don't really know anything for sure.`,
                `Because scientists change their minds randomly, which keeps the subject exciting and fresh.`,
                `Because changing only happens rarely, so it's not really a thing that science actually does.`,
                `Because updating to fit better evidence is self-correction working — one that never changed would just be ignoring reality.`,
              ],
              correctIndex: 3,
              explanation: `Science changing its mind in response to better evidence is the entire point — self-correction working as designed. A way of knowing that NEVER changed, no matter what new evidence arrived, wouldn't be more trustworthy; it would be dogma, having stopped paying attention to reality. Science does the harder, honest thing: it updates. That's why a consensus that survived decades of attack is trustworthy, while a single "new study" hasn't been stress-tested yet.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Where does the trustworthiness of science mainly come from?`,
              options: [
                `From the system around scientists — peer review, replication, and rewards for catching errors — not from individuals being pure.`,
                `From individual scientists simply being smarter, more careful, and more honest than the rest of ordinary people.`,
                `From scientists taking an oath never to be biased or make mistakes in their work.`,
                `From the government officially approving which scientific claims everyone must accept.`,
              ],
              correctIndex: 0,
              explanation: `Trustworthiness comes from the SYSTEM, not from scientists being saints — they're ordinary humans with all the usual biases. The system is built to catch errors individuals miss: peer review (experts who'd love to find a flaw scrutinize it), replication (a result is solid only when others repeat it), and the incentive to overturn (toppling a famous theory with better evidence makes you famous). The genius is structural: it doesn't need saints, it needs a process that keeps checking.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why should you be careful with a headline that says "a new study shows..."?`,
              options: [
                `Because new studies are always wrong, so anything recent should be ignored completely.`,
                `Because a single fresh study hasn't yet been replicated or scrutinized — it's a clue, not a conclusion.`,
                `Because studies done by new scientists don't count until the scientists become famous.`,
                `Because real science never appears in headlines, so any study in the news must be fake.`,
              ],
              correctIndex: 1,
              explanation: `A single fresh study is exactly the thing that has NOT yet been replicated, scrutinized, and stress-tested — it's a clue, not a conclusion. Real scientific confidence is built slowly, from many converging lines of evidence, not announced in one dramatic headline. The skill cuts both ways: don't dismiss solid decades-old consensus because "they changed their minds once," and don't over-trust a flashy single study just because it wears the word "science."`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What kind of question can science NOT answer by itself?`,
              options: [
                `Questions about what exists and how the physical world works.`,
                `Questions about what will happen if you do a particular experiment.`,
                `Questions of "what ought to be" — what's right, beautiful, or worth doing.`,
                `Questions that require gathering evidence and testing predictions.`,
              ],
              correctIndex: 2,
              explanation: `Science is extraordinary at "what is" (what exists, how it works, what happens if), but it cannot by itself answer "what ought to be" — what's right, beautiful, worth doing, how we should live. It can tell you exactly what a weapon will do; it can't tell you whether to build it. Those are questions of ethics and meaning — science informs them powerfully but doesn't replace them. Mixing up the two kinds of question is a common and important error.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How do manipulators use the true fact that "science has limits and can be done badly"?`,
              options: [
                `They use it to fund better, more careful studies that fix the limitations.`,
                `They use it to explain honestly why one single study isn't ever enough, on its own, to be fully trusted yet.`,
                `They use it to remind people to wait for replication before trusting a result.`,
                `They twist it into "so science is just opinion, trust nothing" — then sell you something worse in the same words.`,
              ],
              correctIndex: 3,
              explanation: `The dangerous move: take "science has limits and can be done badly" and twist it into "so science is just another opinion, you can't trust any of it, believe whatever you like." It's a catastrophic misreading used to sell pseudoscience, conspiracy theories, and miracle cures — first they convince you real science can't be trusted, then, with your defenses down, hand you something far worse dressed in the same vocabulary. The honest position: science isn't infallible AND it's by far the best method we have.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the mature, honest position on science that the lesson defends?`,
              options: [
                `It has real limits and isn't infallible, yet it's by far the best tool we have — neither worship nor dismiss it.`,
                `Science is perfect and infallible, so questioning any scientific claim is foolish.`,
                `Science is just one opinion among many, no better than astrology or a gut feeling.`,
                `Science was genuinely useful once, but it has now been replaced by faster, more modern ways of knowing things online.`,
              ],
              correctIndex: 0,
              explanation: `The mature position holds the tension: science has real limits and is not infallible, AND it remains by an enormous margin the best method humans have built for understanding the natural world — precisely because it's the one designed to catch its own errors. "It's not perfect" and "it's the best we have, by far" are both true. The person who holds both at once — neither worshipping science nor dismissing it — is exactly the one who can't be fooled by either a false prophet or a false skeptic.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A claim that can explain any possible outcome — where no result could ever prove it wrong — is especially strong and scientific.`,
              correctAnswer: false,
              explanation: `False — this is backwards, and catching it is the heart of the lesson. A claim that's compatible with every possible outcome isn't strong, it's empty: it isn't actually saying anything testable about the world. Real scientific claims are falsifiable — they stick their necks out and make risky predictions that could fail. The fortune-teller who predicts "a call Tuesday from someone whose name starts with M" is behaving scientifically (checkable); the one who says "something significant will happen and a person will matter to you" can never be wrong because it fits any life — and that's exactly why it tells you nothing. A belief rigged so no evidence could ever count against it is the engine of pseudoscience and conspiracy thinking, not a sign of strength.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A confident video says: "Doctors used to recommend one thing, now they recommend another — they flip-flop constantly, so you can't trust 'the science.' Do your own research and trust your gut instead." Using this lesson, what's the clear-thinking response?`,
              options: [
                `"They make a fair point — if science changes, it must be unreliable, so trusting my gut is safer."`,
                `"The video gets the most important thing exactly backwards, and the 'solution' it offers is the real danger. First, science updating in response to better evidence isn't flip-flopping — it's self-correction working as designed, and a way of knowing that never changed no matter what new evidence arrived would be dogma, not reliability. Second, the strength of science isn't that individual doctors are perfect; it's the system around them — peer review, replication, decades of testing — that catches errors people miss, which is exactly why a hard-won consensus is far more trustworthy than any one recommendation. Third, notice the move being pulled: it takes a true fact ('science revises itself') and twists it into a false conclusion ('so trust nothing'), and then, with my defenses down, hands me something far weaker — 'trust your gut' and 'do your own research,' which usually means trusting confident strangers over the careful testing of thousands of experts. My gut is exactly where confirmation bias lives. The clear-thinking response isn't blind trust in every headline OR blanket cynicism; it's asking the right questions: Is this a settled consensus or a single new study? What evidence would change this claim? Has it been tested by people who'd love to prove it wrong? That keeps me from being fooled by either a false expert or a false skeptic — which is the whole point."`,
                `"Random."`,
                `"It depends entirely on which doctor you happen to ask about it."`,
              ],
              correctIndex: 1,
              explanation: `The clear-thinking response spots the whole maneuver. Science updating with better evidence is self-correction, not flip-flopping — a way of knowing that never changed would be dogma. Trustworthiness comes from the system (peer review, replication, decades of testing), so a hard-won consensus beats any single recommendation. The video pulls the classic move: take a true fact ("science revises itself") and twist it into "so trust nothing," then — defenses down — offer something far weaker ("trust your gut," "do your own research," which usually means trusting confident strangers over thousands of tested experts). And your gut is where confirmation bias lives. The answer is neither blind trust nor blanket cynicism but the right questions: consensus or single study? what would change this claim? tested by people who'd love to disprove it? That defeats both the false expert and the false skeptic.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-falsify`, category: `The blade`, prompt: `Think of a big claim you've heard recently — about health, the world, why something "really" happened. Ask the falsifiability question: what would prove it wrong? Could the person making it even answer that? What did asking reveal?` },
            { id: `reflect-changing`, category: `Changing your mind`, prompt: `Why is it so emotionally hard for people (including you) to treat "I changed my mind because of better evidence" as a strength rather than an embarrassment? What would it take to feel proud of updating?` },
            { id: `reflect-clue`, category: `Clue vs. conclusion`, prompt: `Where have you seen a single study or one dramatic claim treated as if it were settled fact? How would knowing the difference between a clue and a conclusion change the way you read the news or scroll online?` },
            { id: `reflect-isought`, category: `What is vs. what ought`, prompt: `Science can tell us what IS but not what we OUGHT to do. Think of a real decision where people confuse the two — treating a scientific fact as if it automatically settled a moral question. Why is keeping them separate so important?` },
            { id: `reflect-edge`, category: `The edge`, prompt: `The lesson warns against both worshipping science and dismissing it as "just opinion." Which edge do you think you're more tempted to fall off, and why? How could you guard against your own tendency?` },
            { id: `reflect-freedom`, category: `A kind of freedom`, prompt: `The lesson calls understanding how science works "a form of freedom." What does it free you FROM? And what responsibility does that freedom carry?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `You'll be hit with claims your whole life — "studies show," "scientifically proven," "experts say," "they don't want you to know." Knowing how science actually works is a lifelong filter. Two ways to sharpen it.`,
          familyActivity: {
            title: `The "What Would Prove It Wrong?" Hunt`,
            duration: `40 minutes`,
            description: `Spend an evening as a family becoming claim-detectives. Gather a handful of real claims from the world around you — an ad that says a product is "clinically proven," a headline that says "new study shows," a confident social-media post explaining why something "really" happens, even a horoscope or a supplement label. For each one, run it through the lesson's questions together, out loud. First and most powerful: what would prove this wrong? Can you even imagine evidence that would make the claim-maker admit they were mistaken — or is it rigged to fit any outcome? Then: is this a single study (a clue) or a long-tested consensus (a conclusion)? Is it answering a "what is" question or sneaking in a "what ought" one? Who's making the claim, and would they make money if you believed it? The goal isn't to become a family of cynics who trust nothing — make that explicit. It's to practice the difference between a claim built to be tested and a claim built to protect itself, so that everyone, including the youngest, starts to FEEL that difference automatically. End by finding one claim that actually passes the tests well — something backed by real, replicated, consensus science — so the night lands on "here's how you recognize the trustworthy real thing," not just "everything is suspicious."`,
          },
          projectOption: {
            title: `The Science vs. Pseudoscience Field Guide, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Build a personal field guide for telling real science from convincing impostors. Week 1: each day, collect one real-world claim that wears scientific clothing — from ads, headlines, social media, product packaging, or popular "wellness" and conspiracy content — and analyze it using the lesson's toolkit. For each, write down: is it falsifiable (what would prove it wrong)? Is it a single study or a replicated consensus? Has it survived peer review and independent testing, or is it just asserted confidently? Is it answering "what is" or smuggling in "what ought"? Does it explain away all contrary evidence (a red flag for unfalsifiability)? Score each claim and note which test it passed or failed. Week 2: turn your collected analyses into an actual "field guide" — a short illustrated reference you could hand to a friend. Include the key questions to ask, the warning signs of pseudoscience (unfalsifiable claims, "they don't want you to know," one dramatic study, all-explaining theories), AND the marks of trustworthy science (risky testable predictions, replication, consensus built over time, openness to revision). Crucially, include a section on the balance: why the answer is never "trust everything" or "trust nothing," but knowing how to tell which is which. Finish with a short reflection in your own words on how learning the way science actually works has changed the way you read claims — and what it frees you from. The aim is a genuinely useful tool you'll keep, and a habit of mind that protects you for life.`,
            offerToParent: `Parent: opt your child into the Science vs. Pseudoscience Field Guide. Over two weeks they'll collect real-world claims (ads, headlines, social media, wellness and conspiracy content) and analyze each with a rigorous toolkit — falsifiability ("what would prove this wrong?"), the difference between a single study and a replicated consensus, peer review, and the distinction between "what is" and "what ought" questions — then build their own illustrated reference guide. This is one of the most directly protective projects in the philosophy band: it builds genuine media and scientific literacy and inoculates against pseudoscience, miracle cures, and conspiracy thinking. The framing is deliberately balanced — not "distrust everything" but learning to tell trustworthy science from convincing impostors, so they end up neither gullible nor cynical. A strong foundation for a lifetime of encountering confident claims.`,
          },
          identityQuestion: `If you become someone who understands WHY good science is trustworthy — who asks "what would prove this wrong?", who knows the difference between a clue and a conclusion, who can hold "science isn't perfect" and "it's the best tool we have" at the same time, and who can't be fooled by either a false expert or a false skeptic — how does that change the way you'll move through a lifetime of people trying to tell you what to believe?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who always asks "what would prove this wrong?" before believing a big claim.`,
            `A person who knows the difference between a clue and a conclusion.`,
            `Someone who can't be fooled by a false expert OR a false skeptic.`,
          ],
          saveKey: `identity_responses_fp_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Ten lessons in — halfway through the band — and you just took apart the most powerful knowledge-machine humans have ever built, to see what makes it run. You understand now that the philosophy of science asks the question underneath the facts: not what science has found, but what makes it a trustworthy way of finding out — and the answer is that science is a process built to test ideas against reality and catch its own mistakes. You carry the single most protective idea in the field: falsifiability, the blade that asks "what would prove this wrong?" and separates real science from a confident impostor. You know why "science changed its mind" is a strength, powered by peer review and replication, and why a hard-won consensus is worth far more than a flashy single study. And you can hold the honest tension that defeats both the false prophet and the false skeptic: science has real limits and isn't infallible, AND it is by far the best tool we have. That balance — neither worship nor dismissal — is a form of freedom you'll use for the rest of your life. Next, we turn the lens inward to one of the strangest frontiers of all: the philosophy of mind. What IS consciousness? How can three pounds of matter produce the felt experience of being you? It's one of the deepest unsolved questions there is — and we'll think about it honestly. See you there. — Orion`,
          badge: `science-philosopher`,
          badgeName: `Philosopher of Science`,
          xpEarned: 75,
          competencies: [
            `Understands the philosophy of science asks what makes science a trustworthy METHOD, not just what it has discovered, and that science is a process for testing ideas and catching error`,
            `Can apply falsifiability — asking "what would prove this wrong?" — to distinguish a real scientific claim from an unfalsifiable impostor`,
            `Explains why "science changed its mind" is self-correction working, not a reason to distrust it`,
            `Knows trustworthiness comes from the system (peer review, replication, incentive to overturn), not from scientists being individually pure`,
            `Distinguishes a single study (a clue) from a replicated, hard-won consensus (a conclusion)`,
            `Separates "what is" questions (which science answers) from "what ought" questions (ethics and meaning, which it informs but cannot settle)`,
            `Holds the mature balance — science has real limits AND is the best tool we have — resisting both blind worship and the "it's just opinion" manipulation`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: The Philosophy of Mind`,
            hook: `What IS consciousness — and how can mere matter produce the felt experience of being you? One of the deepest unsolved questions there is, faced honestly.`,
          },
        },
      ],
    },
  ],
};

export default FRONTIER_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = FRONTIER_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const seq = l.screens.find((s) => s.type === `sequence`)?.items?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FRONTIER-VOYAGER-L10 ${VERSION}] "${l.title}" guide=${FRONTIER_VOYAGER_L10.guide} mags=${mags} seqItems=${seq} q=${quiz} r=${reflect}`
  );
}
