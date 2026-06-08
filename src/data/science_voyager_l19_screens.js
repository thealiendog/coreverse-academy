// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L19 — The Nature of Science: Scientific Reasoning and Ethics
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — Nature of Science; Science & Engineering Practices
// Interaction: SOURCE-EVALUATION. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l19-v1";

const SCIENCE_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-19`,
      title: `The Nature of Science: Scientific Reasoning and Ethics`,
      duration: 35,
      xpReward: 75,
      badge: `truth-weigher`,
      badgeName: `Truth Weigher`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, across eighteen lessons you've learned an astonishing amount of science. Now we examine the process that produced all of it: scientific reasoning itself. What makes a hypothesis testable? What's the difference between a theory and a guess? How does peer review work, and where does it fail? What ethical constraints should govern scientific research? These meta-questions are as important as any scientific fact, because they determine which facts we can trust.`,
          headline: `The Nature of Science: Scientific Reasoning and Ethics`,
          subtitle: `How science actually works, how we know what we know, and the ethics that must guide it. Evaluating the evidence.`,
          visual: `/voyager-assets/science/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Science Is A Way Of Thinking`,
          paragraphs: [
            `Science is not mainly a collection of facts; it's a process, a way of asking questions about the world and finding answers by testing them against evidence. The facts in a textbook are the products of science, but science itself is the method that produced them. Learning to think scientifically matters far more than memorizing any single fact, because it's a tool you can use on anything.`,
            `That method follows a rough rhythm. It starts with observation (noticing something) and a question (why is it so?). You propose a hypothesis, a testable explanation. Then the crucial step: you test it, gathering evidence. If the evidence fits, the idea gains support; if not, you revise or discard it. Evidence, not authority or opinion, is the judge.`,
            `What makes this powerful is its honesty about uncertainty. A good experiment is controlled (one thing changed at a time, so you know what caused the result) and repeatable (others can check it). Science doesn't ask you to believe; it asks you to test. This is why it has built the most reliable understanding of reality humanity has ever achieved.`,
          ],
          image: `/voyager-assets/science/l19-s1-thinking.webp`,
          imageCaption: `Science is not mainly a collection of facts; it's a PROCESS, a way of asking questions about the world and answering them by testing against EVIDENCE. Textbook facts are the products of science, but science itself is the METHOD that produced them. The method follows a rhythm: OBSERVATION (noticing something), a QUESTION (why?), a HYPOTHESIS (a testable explanation), then the crucial step, TESTING it with an experiment or observation to gather EVIDENCE. If evidence fits, the idea gains support; if not, you revise or discard it. Evidence, not authority or opinion, is the judge. A good experiment is CONTROLLED (one thing changed at a time) and REPEATABLE (others can check). Science doesn't ask you to believe; it asks you to test.`,
          vocab: [
            { word: `scientific method`,
              definition: `The process of asking a question, forming a testable hypothesis, gathering evidence through experiment or observation, and revising ideas based on what the evidence shows.`,
              audioPrompt: `The scientific method, {name}, is the process at the heart of science: notice something, ask a question, propose a testable explanation, then gather evidence to test it. If the evidence fits, the idea stands; if not, you change it. Evidence, not opinion, decides.` },
            { word: `hypothesis`,
              definition: `A proposed, testable explanation for something you observe. A good hypothesis can be checked against evidence and could potentially be shown to be wrong.`,
              audioPrompt: `A hypothesis, {name}, is a proposed explanation for something you've observed, a possible answer to your question. What makes it scientific is that it's testable: you can design an experiment or observation to check it, and it could turn out to be wrong.` },
            { word: `controlled experiment`,
              definition: `A test designed to change just one thing at a time while keeping everything else the same, so you can tell what actually caused the result.`,
              audioPrompt: `A controlled experiment, {name}, changes just one thing at a time while keeping everything else the same. That way, if the result changes, you know exactly what caused it. It's how scientists untangle cause from coincidence and trust what their experiments tell them.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Testable, Falsifiable, Self-Correcting`,
          paragraphs: [
            `A defining feature of real science is that its claims must be testable and falsifiable, meaning it must be possible, in principle, to prove them wrong. This is the heart of scientific honesty. A claim that explains any possible result, that no evidence could ever contradict, isn't scientific, there's no way to check it. Science makes risky predictions that reality can refute.`,
            `This is why "you can't prove me wrong" is the opposite of a scientific attitude. A genuine idea sticks its neck out: "if I'm right, you'll see this; if you see that instead, I'm wrong." Every strong theory survived because it made predictions that could have failed but didn't. Falsifiability is what separates science from claims merely dressed up to look like it.`,
            `And because science can be wrong, it is self-correcting. Scientists expect their ideas to be questioned, retested, and sometimes overturned by better evidence. Far from a weakness, this is its greatest strength: a built-in mechanism for catching its own mistakes. Other ways of claiming knowledge demand you never doubt; science grows stronger through doubt.`,
          ],
          image: `/voyager-assets/science/l19-s2-falsifiable.webp`,
          imageCaption: `A defining feature of real science: its claims must be TESTABLE and FALSIFIABLE, it must be possible, in principle, to prove them wrong. This is the heart of scientific honesty. A claim that explains any possible result, that no evidence could ever contradict, isn't scientific, there's no way to check it. Science makes RISKY PREDICTIONS reality can refute. So "you can't prove me wrong" is the OPPOSITE of a scientific attitude. A genuine idea sticks its neck out: "if I'm right you'll see this; if you see that instead, I'm wrong." Strong theories survived because their predictions could have failed but didn't. Because science can be wrong, it is SELF-CORRECTING: it expects to be questioned and revised, growing stronger through doubt rather than weaker.`,
          vocab: [
            { word: `falsifiable`,
              definition: `Capable of being proven wrong by evidence, at least in principle. A claim no possible evidence could ever contradict is not scientific.`,
              audioPrompt: `Falsifiable, {name}, means a claim could, in principle, be proven wrong by evidence. It sounds odd, but it's essential: a real scientific idea predicts what you should and shouldn't see, so reality can test it. A claim nothing could ever disprove isn't science at all.` },
            { word: `self-correcting`,
              definition: `Science's built-in ability to catch and fix its own mistakes, because scientists expect ideas to be questioned, retested, and revised when better evidence appears.`,
              audioPrompt: `Self-correcting, {name}, is science's greatest strength: because it expects to be questioned and tested, it can catch and fix its own mistakes over time. Where other claims demand you never doubt, science grows stronger through doubt, revising itself toward the truth.` },
            { word: `testable prediction`,
              definition: `A specific outcome an idea says you should observe if it is true, allowing the idea to be checked, and potentially refuted, against real evidence.`,
              audioPrompt: `A testable prediction, {name}, is what a scientific idea says you should see if it's true. It sticks its neck out: "if I'm right, you'll observe this." That's what lets reality check the idea, and it's why predictions that could have failed, but didn't, make a theory trustworthy.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Weighing Evidence And Sources`,
          paragraphs: [
            `In a world flooded with claims, the most valuable scientific skill is evaluating evidence: telling strong from weak. A single anecdote ("it worked for me") is weak; a large, controlled, repeated study is strong. Strong evidence can be checked by others and is confirmed by multiple independent lines, the more that agree, the more confident we can be.`,
            `Watch for classic traps. The biggest is confusing correlation with causation: two things happening together doesn't mean one causes the other. Ice cream sales and drownings both rise in summer, but ice cream doesn't cause drowning; a third factor (hot weather) drives both. Science works hard, through controlled experiments, to tell genuine causes from coincidences.`,
            `Also watch for bias (a slant that distorts findings, especially when someone has a stake) and for claims dressed up to look scientific without the substance, sciencey words, but untestable or unsupported. The scientist's habit is to ask: How was this known? How strong is the evidence? Who checked it? Could it be wrong? That habit is your shield against being fooled.`,
          ],
          image: `/voyager-assets/science/l19-s3-evidence.webp`,
          imageCaption: `In a world flooded with claims, the key scientific skill is EVALUATING EVIDENCE: telling strong from weak. Not all evidence is equal, a single anecdote ("it worked for me") is weak; a large, controlled, repeated study confirmed by independent lines is STRONG. Watch for classic traps. The biggest: confusing CORRELATION with CAUSATION, two things happening together doesn't mean one causes the other. Ice cream sales and drownings both rise in summer, but a third factor, hot weather, drives both. Also watch for BIAS (a slant, especially when someone has a stake) and claims merely DRESSED UP to look scientific, sciencey words but untestable or unsupported. The scientist's habit: How was this known? How strong is the evidence? Who checked it? Could it be wrong?`,
          vocab: [
            { word: `causation`,
              definition: `Two things happening together (correlation) does not prove one causes the other (causation). A hidden third factor may drive both. A classic reasoning trap.`,
              audioPrompt: `Correlation versus causation, {name}, is a crucial trap. Two things happening together doesn't mean one causes the other. Ice cream sales and drownings both rise in summer, but ice cream doesn't cause drowning, hot weather drives both. Always ask if a hidden factor is at work.` },
            { word: `bias`,
              definition: `A slant or influence that can distort findings or judgment, especially when someone has a personal, financial, or emotional stake in a particular result.`,
              audioPrompt: `Bias, {name}, is a slant that can distort findings or thinking, especially when someone has a stake in the outcome, like a company funding a study of its own product. Good science guards against bias with independent checks, so the result reflects reality, not wishes.` },
            { word: `pseudoscience`,
              definition: `Claims dressed up to look scientific, using sciencey language, but lacking real evidence, testability, or repeatability. It mimics science without doing it.`,
              audioPrompt: `Pseudoscience, {name}, is a claim dressed up to look scientific, full of sciencey-sounding words, but without the substance: it can't be tested, can't be repeated, or has no real evidence behind it. Learning to spot it protects you from being fooled by fake science.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Ethics Of Science`,
          paragraphs: [
            `Science gives us tremendous power, and power demands responsibility. A central truth of scientific ethics is that "can we?" is not the same as "should we?" Science can tell us how to do something, split the atom, edit genes, build a weapon, but whether we ought to do it is a separate question, one about values, consequences, and right and wrong, that science alone cannot answer.`,
            `This means scientists bear real responsibility for their work and how it's used. The same knowledge can heal or harm: nuclear physics gives us medicine and bombs; biology gives us cures and dangers. Discoveries don't come with instructions for using them wisely. So scientists, and all of us, must weigh consequences and consider who is helped and who might be hurt.`,
            `There's also an ethics within science itself: honesty. Doing science well is a moral act. Scientists must report what they actually find, not what they wish were true; never fake or hide data; give credit fairly. The entire enterprise rests on trust in this honesty, which is why faking results is among the gravest things a scientist can do.`,
          ],
          image: `/voyager-assets/science/l19-s4-ethics.webp`,
          imageCaption: `Science gives tremendous POWER, and power demands RESPONSIBILITY. A central truth of scientific ethics: "can we?" is NOT the same as "should we?" Science can tell us HOW to do something, split the atom, edit genes, build a weapon, but whether we OUGHT to is a separate question, about values and consequences, that science alone can't answer. So scientists bear real responsibility for their work and its use. The same knowledge can HEAL or HARM: nuclear physics gives medicine and bombs; biology gives cures and dangers. There's also ethics WITHIN science: HONESTY. Report what you actually find, never fake or hide data, give fair credit, treat people and animals ethically. The whole enterprise rests on trust, which is why faking results is among the gravest things a scientist can do.`,
          vocab: [
            { word: `should we`,
              definition: `Science can tell us whether something is possible and how to do it, but not whether we ought to. That ethical question depends on values, not facts alone.`,
              audioPrompt: `"Can we" versus "should we", {name}, is the heart of scientific ethics. Science can tell us how to do something, but whether we ought to is a different question, about values, consequences, and right and wrong, that science alone can never answer for us.` },
            { word: `scientific responsibility`,
              definition: `The duty of scientists to consider how their discoveries might be used, weighing benefits and harms, since the same knowledge can both heal and harm.`,
              audioPrompt: `Scientific responsibility, {name}, is the duty to think about how a discovery might be used, for good or ill. The same knowledge that cures can also harm, so scientists, and all of us, must weigh consequences and consider who is helped and who could be hurt.` },
            { word: `scientific integrity`,
              definition: `Honesty in the practice of science: reporting what you truly find, never faking or hiding data, giving fair credit, and treating research subjects ethically.`,
              audioPrompt: `Scientific integrity, {name}, is honesty in doing science: reporting what you actually find, not what you wish were true, never faking or hiding data, and giving fair credit. The whole enterprise rests on this trust, which is why faking results is so serious.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Weigh The Evidence`,
          paragraphs: [
            `Pull it together. Science is a way of thinking, not just facts: observe, question, hypothesize, test against evidence, and let evidence, not authority, decide. Real scientific claims are testable and falsifiable (they could be proven wrong), which is why science is self-correcting, expecting to be questioned and growing stronger through doubt rather than demanding blind belief.`,
            `The key skill is evaluating evidence: strong (controlled, repeated, independently confirmed) versus weak (a single anecdote), while avoiding traps like correlation-versus-causation, bias, and pseudoscience. And science carries ethics: "can we" is not "should we," scientists are responsible for how knowledge is used, and honesty is a moral duty.`,
            `Now, fittingly, the final challenge of your journey isn't about a planet or a particle, it's about thinking. The source-evaluation screen gives five claims and pieces of "evidence." Judge each like a scientist: How strong is it? Is it testable? Correlation or causation? Real science or pretending? This is the skill that protects you for life. Onward.`,
          ],
          image: `/voyager-assets/science/l19-s5-before.webp`,
          imageCaption: `Threads together. Science is a WAY OF THINKING, not just facts: observe, question, hypothesize, test against EVIDENCE, and let evidence, not authority, decide. Real claims are TESTABLE and FALSIFIABLE (they could be proven wrong), which is why science is SELF-CORRECTING, growing stronger through doubt. The key skill is EVALUATING EVIDENCE: strong (controlled, repeated, independently confirmed) versus weak (a single anecdote), while avoiding traps, correlation-versus-causation, bias, and PSEUDOSCIENCE. And science carries ETHICS: "can we" isn't "should we," scientists are responsible for how knowledge is used, and honesty is a moral duty. The final challenge: judge five claims like a scientist. How strong? Testable? Real science or pretending?`,
          vocab: [
            { word: `peer review`,
              definition: `The process where other independent experts check a scientist's work before it is accepted, helping catch errors and bias. A key part of science's self-correction.`,
              audioPrompt: `Peer review, {name}, is how science checks itself: before findings are accepted, other independent experts scrutinize the work for errors, weak reasoning, or bias. It's not perfect, but it's a powerful part of how science catches mistakes and earns trust.` },
            { word: `scientific consensus`,
              definition: `The collective judgment of the scientific community when many independent lines of strong evidence converge. It can change, but only when better evidence demands.`,
              audioPrompt: `Scientific consensus, {name}, is what the scientific community broadly agrees on after many independent lines of strong evidence converge. It's not a popularity vote; it reflects the weight of evidence, and it can change, but only when better evidence demands it.` },
            { word: `skepticism`,
              definition: `The scientific habit of not accepting claims without good evidence, asking how something is known and how strong the support is, rather than believing or denying blindly.`,
              audioPrompt: `Skepticism, {name}, is the scientific habit of not simply believing, or denying, a claim, but asking: how is this known, and how strong is the evidence? Healthy skepticism isn't cynicism; it's the open-minded demand for good reasons before accepting something as true.` },
          ],
        },

        {
          id: `l19-source-evaluation`,
          type: `source-evaluation`,
          headline: `Weigh The Evidence Yourself`,
          intro: `{name}, you're the scientist now, for the last time in this journey. Here are five claims and pieces of "evidence." For each, judge it like a scientist: How strong is it? Is it testable? Is it correlation or causation? Is it real science, or just dressed up to look like it?`,
          sources: [
            {
              id: `s1`,
              tier: `Weak evidence: the anecdote`,
              title: `"It worked for me"`,
              type: `Single anecdote / testimonial`,
              context: `A popular post claims a special bracelet cures headaches. The evidence offered: "I wore it, and my headache went away in an hour. My cousin tried it too and felt better. Thousands of five-star reviews can't be wrong!" No study, no control group, just personal stories.`,
              quote: `"I wore the bracelet and my headache went away, it really works, and thousands of happy customers agree!"`,
              questions: [
                `Why is a personal story weak evidence, even if it's sincere?`,
                `What might have caused the headache to go away besides the bracelet?`,
                `What kind of evidence would actually test whether the bracelet works?`,
              ],
              evaluation: `As a scientist, you'd rate this very weak evidence, not because the people are lying, but because anecdotes simply can't separate a real effect from coincidence, expectation, or natural change. Here's the reasoning. A single personal story (an anecdote) tells you what happened once, to one person, but not why, and one of the first scientific habits is to ask: what else could explain this? Headaches very often go away on their own within an hour or two, regardless of what you do, so the headache vanishing after wearing the bracelet doesn't show the bracelet did anything; it may simply have run its natural course (this is the trap of confusing correlation, the bracelet and the relief happening together, with causation). There's also the powerful placebo effect: if you believe something will help, you often feel better, even from a treatment that does nothing, because expectation itself can reduce perceived pain. So the person might genuinely feel better while the bracelet is doing nothing at all. As for "thousands of five-star reviews," large numbers of anecdotes are still anecdotes: people who felt better are more likely to post, those who didn't often stay silent (a bias in who reports), and none of these reviews controlled for headaches that would have faded anyway or for the placebo effect. What would actually test the bracelet is a controlled experiment: take many headache sufferers, randomly give half the real bracelet and half a fake (placebo) one that looks identical, ideally without anyone knowing which is which (a "blinded" study), and compare how the two groups fare. If the real-bracelet group does no better than the fake-bracelet group, the bracelet has no real effect, no matter how many testimonials exist. This is exactly why science relies on controlled, repeatable studies rather than stories: only by comparing against a control and ruling out coincidence, placebo, and bias can you tell whether something truly works. The deep lesson is that sincerity isn't evidence, "it worked for me" feels convincing but can't distinguish a real cure from a headache that was going to fade anyway. The scientist's question, "how would we test this against a control?", is your protection against a world full of confident anecdotes.`,
            },
            {
              id: `s2`,
              tier: `Reasoning trap: correlation`,
              title: `The ice cream and drowning "link"`,
              type: `Correlation mistaken for causation`,
              context: `A report notes that on days when ice cream sales are high, drownings also increase, and on days with low ice cream sales, drownings drop. The data is real and the pattern is consistent. A headline concludes: "Study shows eating ice cream increases your risk of drowning."`,
              quote: `"The data is clear: more ice cream sold means more drownings. Ice cream is dangerous, stop eating it near water!"`,
              questions: [
                `The correlation is real, so what's wrong with the conclusion?`,
                `What hidden third factor likely explains both?`,
                `How would you test whether ice cream actually causes drowning?`,
              ],
              evaluation: `This is the textbook example of one of the most important and common reasoning traps in all of science: confusing correlation with causation. As a scientist, you'd accept that the correlation is real, ice cream sales and drownings genuinely do rise and fall together, but you'd firmly reject the conclusion that ice cream causes drowning, because two things happening together does not mean one causes the other. The error is leaping from "these two things are correlated" to "this one causes that one," without considering other explanations. The most likely explanation here is a hidden third factor that drives both: hot, sunny weather. On hot days, more people buy ice cream (so ice cream sales rise), and more people go swimming (so, sadly, more drownings occur). The weather is the real cause behind both; ice cream and drowning are linked only because they're both consequences of summer heat, not because one causes the other. Eating ice cream does nothing to make you drown; the correlation is a coincidence created by a shared cause. This is exactly why scientists are so careful, and why controlled experiments matter: to establish that A actually causes B, you can't just observe that they happen together; you have to rule out third factors and, ideally, change A while holding everything else constant to see if B follows. How would you test whether ice cream truly causes drowning? You'd need to control for the weather, for example, compare drowning rates between people who ate ice cream and people who didn't on the same hot days, with the same swimming exposure. You'd find no difference: among people equally exposed to swimming in hot weather, eating ice cream wouldn't change drowning rates at all, revealing that the original "link" was driven entirely by the weather. The deep lesson, and one of the most practically useful in this whole course, is to never assume causation from correlation alone. The world is full of things that rise and fall together by coincidence or because of a shared cause, and headlines constantly exploit this ("people who do X live longer!") when a hidden factor explains the pattern. The scientist's reflex, "could a third factor explain both? has anyone actually tested cause and effect?", protects you from a vast category of misleading claims. Correlation is a clue worth investigating, but it is never, by itself, proof of cause.`,
            },
            {
              id: `s3`,
              tier: `Not science: unfalsifiable`,
              title: `The claim nothing could disprove`,
              type: `Unfalsifiable claim / pseudoscience`,
              context: `A person claims an invisible, undetectable energy field surrounds everyone and controls their luck. When asked how to test it, they say: "It can't be detected by any instrument, and it explains everything, good days, bad days, coincidences. No experiment could ever measure it, but it's definitely real."`,
              quote: `"My energy field explains everything that happens to you, and no test could ever detect it or prove it wrong."`,
              questions: [
                `Why does "no test could ever prove it wrong" make this unscientific?`,
                `What's the problem with a claim that explains every possible outcome?`,
                `How is this different from a real scientific theory?`,
              ],
              evaluation: `As a scientist, you'd identify this as not science at all, regardless of how confident or elaborate it sounds, because it fails the most fundamental requirement of a scientific claim: it is not falsifiable. Recall that a defining feature of real science is that its claims must be testable and falsifiable, meaning it must be possible, at least in principle, to prove them wrong with evidence. This "invisible energy field" claim is explicitly designed so that nothing could ever count against it: it can't be detected by any instrument, and it supposedly explains every possible outcome, good days and bad days alike. That's precisely what makes it unscientific. Why does "no test could ever prove it wrong" disqualify it? Because if no possible observation could ever contradict a claim, then there is no way to check it against reality, and a claim that can't be checked tells us nothing testable about the world. Science advances by making risky predictions that reality could refute; a claim that risks nothing, that's compatible with literally any result, gains no support from "explaining" outcomes, because it would have "explained" the opposite outcomes just as easily. This is the trap of a claim that explains everything: a theory that accounts for every possible result actually predicts nothing. If the field explains your good day and also your bad day, and would have explained either one no matter what happened, then it has no real content, it's unfalsifiable, and therefore outside science. How is this different from a real scientific theory? A genuine scientific theory sticks its neck out: it says "if I'm right, you should observe this specific thing; if you observe that instead, I'm wrong." For example, evolution predicted that DNA family trees should match fossil and anatomy trees, a prediction that could have failed but didn't; the theory of gravity makes precise predictions that could be contradicted by observation. These theories are powerful precisely because they're falsifiable and have survived serious attempts to prove them wrong. The energy-field claim, by contrast, forbids any test, immunizing itself against all possible evidence, which is the hallmark of pseudoscience: it adopts the confidence and sometimes the vocabulary of science without its substance. The deep lesson is that the willingness to be proven wrong is not a weakness but the very thing that makes science trustworthy. Be suspicious of any claim that "explains everything" yet can never be tested or refuted, "you can't prove me wrong" is the opposite of a scientific attitude. A claim that risks nothing against reality teaches us nothing about it, and recognizing that difference is one of the sharpest tools you can carry.`,
            },
            {
              id: `s4`,
              tier: `Watch for bias`,
              title: `The study funded by the seller`,
              type: `Bias / conflict of interest`,
              context: `A candy company funds and publishes its own study concluding that its sugary cereal "supports children's health and focus." The study was designed, run, and reported entirely by the company. It was never reviewed by independent scientists, and the data behind it isn't shared.`,
              quote: `"Our company's own study proves our sugary cereal is great for kids, trust us, we did the research ourselves!"`,
              questions: [
                `Why is who funded and ran this study a serious concern?`,
                `Does funding by an interested party automatically make a study false?`,
                `What would make the findings more trustworthy?`,
              ],
              evaluation: `As a scientist, you'd treat this with strong caution, not necessarily because the result is definitely false, but because the conditions are ripe for bias, and key safeguards of trustworthy science are missing. The central concern is a conflict of interest: the candy company has a clear financial stake in the conclusion that its sugary cereal is healthy, and it designed, ran, and reported the study entirely itself. Bias is a slant that can distort findings, especially when someone has a personal or financial stake in a particular result, and that's exactly the situation here. The company benefits if the study turns out favorable, which creates pressure (conscious or not) to design the study in ways that produce the desired answer, for example, by choosing measures that flatter the product, comparing against an even worse option, downplaying negative findings, or quietly not publishing if results came out badly. This doesn't mean the researchers necessarily cheated, but the incentives all point one way, and that's precisely what makes independent checks so important. Does funding by an interested party automatically make a study false? No, and this is a crucial nuance: a study funded by a company isn't automatically wrong (companies fund legitimate research, and sometimes the product really does work). Bias is a reason for heightened scrutiny, not automatic dismissal. But the appropriate response is to demand the safeguards that guard against bias, and here they're conspicuously absent. The study was never reviewed by independent scientists (no peer review, where outside experts scrutinize the work for flaws and bias), and the underlying data isn't shared (so no one else can check the analysis or try to reproduce it). Without independent review, transparency, and replication, there's no way to know whether the favorable conclusion reflects reality or the company's interests. What would make the findings more trustworthy? Independent replication, the same result found by researchers with no stake in the outcome; peer review by outside experts; full transparency, sharing the data and methods so others can check them; and ideally confirmation from multiple independent studies (since strong evidence is confirmed by multiple independent lines, the more independent sources agree, the more confident we can be). If independent scientists, with no financial interest, ran the study, shared their data, and got the same result, and others reproduced it, the conclusion would become believable regardless of who first funded it. The deep lesson is to always ask "who conducted this, and what's their stake in the answer?", not to reflexively reject interested research, but to weight it appropriately and look for the independent confirmation, transparency, and review that protect against bias. In a world where findings are often promoted by those who profit from them, tracing the funding and demanding independent verification is one of the most practical scientific skills you can have.`,
            },
            {
              id: `s5`,
              tier: `Strongest: converging evidence`,
              title: `When independent lines agree`,
              type: `Consilience / scientific consensus`,
              context: `For a major scientific conclusion, several completely separate fields, using different methods and run by different researchers who never coordinated, all independently arrive at the same answer. The conclusion has survived decades of attempts to disprove it, been checked by countless independent scientists, and made predictions that came true.`,
              quote: `"Many independent lines of evidence, gathered by different methods and researchers, all point to the same conclusion, and it has survived every test."`,
              questions: [
                `Why is agreement among independent lines of evidence so powerful?`,
                `Why does surviving repeated attempts to disprove it strengthen a conclusion?`,
                `How is this different from a single study or a lone anecdote?`,
              ],
              evaluation: `As a scientist, you'd rate this the strongest possible kind of evidence, the gold standard, because it embodies everything that makes scientific knowledge trustworthy: independent confirmation, falsifiability survived, and successful prediction, all converging. The power of multiple independent lines of evidence agreeing is called consilience, and it's profound. When several completely separate fields, using entirely different methods, run by different researchers who never coordinated their work, all independently arrive at the same conclusion, the chance that they're all wrong in the same way becomes vanishingly small. Think of it like independent witnesses: one witness to an event might be mistaken or biased, but if many witnesses who never spoke to each other all describe the same thing, you become highly confident it's true. (This is exactly what makes evolution so robust, fossils, anatomy, DNA, and direct observation, four independent lines, all tell the same story; and the same logic underlies other major scientific conclusions.) A single study can have errors, flukes, or hidden bias; but when independent approaches converge, each one's weaknesses are unlikely to be shared by the others, so the agreement is powerful evidence the conclusion reflects reality, not the quirks of one method or team. Why does surviving repeated attempts to disprove it strengthen a conclusion? Because real science is falsifiable, it makes risky predictions that could fail, and it expects to be challenged. A conclusion that has been tested again and again by skeptical scientists trying to prove it wrong, and has withstood all those attempts, has earned its credibility the hard way. Each failed attempt to refute it is, in effect, another confirmation. And when a conclusion also makes predictions about things not yet observed, which then turn out to be true, that's the strongest validation of all, because a correct prediction about the unknown is extremely hard to fake or fluke. How is this different from a single study or a lone anecdote? Enormously. An anecdote ("it worked for me") is a single uncontrolled story, easily explained by coincidence, placebo, or bias. A single study, even a good one, can have errors or be a statistical fluke, which is why no serious conclusion rests on one study alone. But a conclusion supported by many independent lines of strong evidence, repeatedly tested, never overturned, and confirmed by successful predictions, is in a completely different league. This is what scientists mean by scientific consensus: not a popularity vote or mere opinion, but the convergence of overwhelming, independent, well-tested evidence. (Such a consensus can still change, but only if substantial new evidence demands it, that's science being self-correcting, not arbitrary.) The deep lesson, and a fitting capstone to your entire science journey, is that the strength of a conclusion comes from the quality and convergence of evidence behind it: independent lines agreeing, surviving genuine attempts at refutation, and predicting successfully. Learning to recognize this, to tell the lone anecdote and the biased single study from the mountain of converging, battle-tested evidence, is perhaps the single most valuable skill science can give you, and it will protect and guide your thinking for the rest of your life.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what makes evidence strong versus weak? Explain the correlation-causation trap, why an unfalsifiable claim isn't science, and why independent lines agreeing is so powerful. Of the five, which kind of weak reasoning do you think fools people most often, and why? In 5-6 sentences.`,
          reflectionPrompt: `You'll spend your whole life in a world flooded with claims, some true, some false, some dressed up to fool you. How does it feel to carry a way of thinking, asking how we know, and how strong the evidence is, that can protect and guide you no matter what facts change?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is science, most fundamentally?`,
              options: [
                `A fixed collection of facts that never changes over time.`,
                `A process: a way of asking questions and testing answers against evidence.`,
                `A set of beliefs that must be accepted without any questioning.`,
                `A list of opinions held by the most famous scientists.`,
              ],
              correctIndex: 1,
              explanation: `Science is fundamentally a process, a way of asking questions and testing answers against evidence, not a fixed list of facts, beliefs, or opinions. The distractors describe it as fixed facts, dogma, or authority.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does it mean for a scientific claim to be falsifiable?`,
              options: [
                `It is already known to be false and should be ignored.`,
                `It is true and can never be questioned by anyone.`,
                `It is too complicated for ordinary people to understand.`,
                `It is possible, in principle, to prove it wrong with evidence.`,
              ],
              correctIndex: 3,
              explanation: `Falsifiable means it's possible in principle to prove the claim wrong with evidence; a claim no evidence could ever contradict isn't scientific. The distractors confuse it with being false, unquestionable, or merely complicated.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is science described as self-correcting?`,
              options: [
                `Because it expects to be questioned and revises itself when evidence demands.`,
                `Because scientists never make any mistakes in the first place.`,
                `Because once something is published it can never be changed.`,
                `Because it relies on authority rather than on evidence.`,
              ],
              correctIndex: 0,
              explanation: `Science is self-correcting because it expects to be questioned, retested, and revised when better evidence appears, a built-in mechanism for catching its own mistakes. The distractors claim infallibility, permanence, or reliance on authority.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Ice cream sales and drownings both rise in summer. What does this best illustrate?`,
              options: [
                `That eating ice cream directly causes people to drown.`,
                `That correlation does not prove causation; a third factor may drive both.`,
                `That ice cream should be banned near swimming pools.`,
                `That drowning somehow causes people to buy more ice cream.`,
              ],
              correctIndex: 1,
              explanation: `This is the classic correlation-causation trap: the two rise together because of a hidden third factor (hot weather), not because one causes the other. The distractors leap to false causation in either direction or to an unjustified ban.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Which of these is the strongest kind of evidence?`,
              options: [
                `A single person's story that something worked for them.`,
                `A confident claim made by someone with a famous name.`,
                `A study funded and run entirely by a company selling the product.`,
                `Multiple independent lines of evidence that all agree and survive testing.`,
              ],
              correctIndex: 3,
              explanation: `The strongest evidence is many independent lines converging on the same conclusion and surviving repeated attempts to disprove it (consilience). The distractors describe an anecdote, an appeal to authority, and a biased single study.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is a claim that "no possible evidence could ever prove wrong" considered unscientific?`,
              options: [
                `Because if nothing could test it, there's no way to check it against reality.`,
                `Because it is definitely true and therefore needs no testing.`,
                `Because only sad claims can ever be scientific ones.`,
                `Because scientists dislike claims that sound too confident.`,
              ],
              correctIndex: 0,
              explanation: `If no possible evidence could ever contradict a claim, there's no way to test it against reality, so it tells us nothing testable and falls outside science. The distractors misframe it as obviously true, arbitrary, or a matter of taste.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `In scientific ethics, what is the key difference between "can we?" and "should we?"`,
              options: [
                `There is no real difference; if we can do something, we always should do it.`,
                `Science answers whether something is possible; whether we ought to do it depends on values.`,
                `"Should we" is a scientific question that experiments can fully answer.`,
                `Both questions are decided entirely by whoever has the most power.`,
              ],
              correctIndex: 1,
              explanation: `Science can tell us whether something is possible and how to do it ("can we?"), but whether we ought to ("should we?") is a question of values and consequences that science alone cannot answer. The distractors collapse the distinction or misassign it.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why should you be cautious about a study funded and run entirely by a company selling the product?`,
              options: [
                `Because such a study is always automatically false and worthless.`,
                `Because companies are simply never allowed to do any research at all, anywhere.`,
                `Because a financial stake creates a risk of bias, especially without independent review.`,
                `Because studies with funding are always more accurate than others.`,
              ],
              correctIndex: 2,
              explanation: `A financial stake in the result creates a risk of bias, calling for caution and independent review, transparency, and replication, not automatic dismissal. The distractors either reject it outright, ban company research, or wrongly trust it more.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because science sometimes changes its conclusions when new evidence appears, this shows science is unreliable and that all scientific claims are just guesses no better than any opinion.`,
              correctAnswer: false,
              explanation: `False, and understanding why reveals one of the most commonly misunderstood, and most important, features of how science works. It is true that science sometimes changes its conclusions when new evidence appears, but this is a profound strength, not a weakness, and it certainly does not make scientific claims mere guesses equivalent to any opinion. The willingness to revise conclusions in light of better evidence is exactly what makes science the most reliable method we have for understanding reality. This feature is called being self-correcting: unlike systems of belief that demand you never doubt and never change your mind, science has a built-in mechanism for catching and fixing its own mistakes. Scientists expect their ideas to be questioned, retested, and sometimes overturned by stronger evidence, and this relentless self-checking is precisely why scientific understanding grows more accurate over time. A field that can correct itself when wrong is far more trustworthy than one that can never admit error. Now, the claim that this makes all scientific claims "just guesses no better than any opinion" is deeply mistaken, because it ignores the enormous differences in the strength of evidence behind different claims. Not all scientific claims are equal: some are tentative hypotheses still being tested, while others are conclusions supported by many independent lines of strong evidence that have survived decades of attempts to disprove them and have made successful predictions, what we call well-established theories or scientific consensus. When science "changes," it is usually refining or extending such well-supported ideas, or overturning weakly-supported ones, not casually flipping established conclusions on a whim. And crucially, change in science is driven by evidence, not by opinion, mood, or authority; a conclusion changes only when new evidence genuinely demands it, which is the opposite of arbitrary. This is completely different from an opinion, which need not be tested against reality at all. A claim backed by converging, repeatedly-tested, independently-confirmed evidence is in an entirely different league from a personal opinion or a guess, even though, like all scientific claims, it remains open to revision if extraordinary new evidence ever arises. The deep point is that science's openness to revision is a feature of its honesty and rigor, not a sign of unreliability: it means scientific claims have been, and continue to be, checked against the world, and are believed in proportion to the evidence supporting them. So the statement is false: science changing in response to evidence is what makes it trustworthy, and well-supported scientific conclusions are vastly more reliable than mere guesses or opinions, precisely because they rest on tested, converging evidence rather than on anyone's say-so.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "Now that I've learned all this science, the most valuable thing I've gained is the long list of facts I memorized, the names, dates, and definitions. The way scientists think is just a minor detail." Using the lesson, what's the best response?`,
              options: [
                `The student is right; the memorized facts are the most valuable part.`,
                `The thinking and the facts are equally unimportant in the end.`,
                `It's the reverse: while the facts are valuable, the most powerful thing gained is the way of thinking, asking how we know, weighing evidence, telling strong from weak, spotting correlation-versus-causation and pseudoscience, since specific facts may change but this method works on anything and protects your reasoning for life.`,
                `Facts and thinking have nothing to do with each other at all.`,
              ],
              correctIndex: 2,
              explanation: `The lesson's central point is the reverse of the student's claim: facts matter, but the most valuable thing is the scientific way of thinking, asking how we know, weighing evidence, distinguishing strong from weak, and spotting traps like correlation-causation and pseudoscience. Specific facts may change; the method works on anything. The distractors dismiss the thinking, dismiss both, or deny their connection.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-tool`, category: `A tool for life`, prompt: `You'll spend your life in a world flooded with claims, some true, some false, some dressed up to fool you. How does it feel to carry a way of thinking, asking how we know and how strong the evidence is, that protects you no matter what facts change?` },
            { id: `reflect-wrong`, category: `The courage to be wrong`, prompt: `Science grows stronger by being willing to be proven wrong, the opposite of "you can't prove me wrong." Where in your own life might the willingness to be shown wrong make you wiser rather than weaker?` },
            { id: `reflect-should`, category: `Can versus should`, prompt: `Science can tell us what's possible, but never whether we should do it, that depends on our values. What does it stir in you to see clearly that knowledge and wisdom are not the same thing?` },
            { id: `reflect-heritage`, category: `Teaching how to think`, prompt: `Caro, you're building science for conscious families. How would you help a child learn not just science facts, but how to think like a scientist, to ask "how do we know?" and weigh evidence, so curiosity and honesty become a habit of mind?` },
            { id: `reflect-honesty`, category: `Honesty as a virtue`, prompt: `In science, reporting what you truly find, even when it's not what you hoped, is a moral act. Where in your own life does honesty about what's real, rather than what you wish were real, matter most?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `It's easy to call inconvenient evidence "just opinion" and comfortable beliefs "proven." How will you stay honest with yourself, applying the same careful standards to ideas you love as to ideas you don't?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Evidence Detectives`,
            duration: `One afternoon`,
            description: `Turn an afternoon into training in the single most useful skill science offers: thinking clearly and spotting bad reasoning in the real world. Start with a claim hunt: gather a few real claims from ads, social media, headlines, or product packaging ("clinically proven," "9 out of 10 people agree," "this supplement boosts your brain," "studies show..."), and for each, ask the scientist's questions together: How do they know this? How strong is the evidence? Who said it, and what's their stake? Could it be wrong? How would we test it? Play "anecdote vs. study": share an "it worked for me" story (real or invented) and discuss why one person's experience, however sincere, can't tell you if something truly works, and what a fair test (with a control group, comparing against a fake treatment) would look like. Hunt for correlation-causation traps: brainstorm funny examples ("the more firefighters at a fire, the more damage, so firefighters cause damage!" "people who sleep with their shoes on wake with headaches, so shoes cause headaches!") and find the hidden third factor in each, then look for real headlines that confuse the two. Spot bias: discuss who funded or benefits from various claims, and why a company's study of its own product needs extra scrutiny and independent checking. Practice the falsifiability test: take a few claims and ask "what evidence would prove this wrong?", noticing which claims make real, riskable predictions (science) and which are slippery and unfalsifiable (pseudoscience). Try a tiny real experiment to feel the method: test a simple question ("does the paper airplane fly farther with more folds?" "which spot in the yard dries fastest?") by changing one thing at a time, repeating it, and recording results, experiencing controlled, repeatable testing firsthand. End with the ethics conversation: pick a powerful technology (AI, gene editing, nuclear energy) and discuss the difference between "can we?" and "should we?", and why scientists, and citizens, share responsibility for how knowledge is used. The goal is to leave not with more facts, but with sharper thinking, the lifelong habit of asking "how do we know, and how good is the evidence?", which is the truest gift science can give, and the best protection in a world full of confident claims.`,
          },
          projectOption: {
            title: `The Critical Thinker's Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate how to tell good evidence from bad, and create a guide that helps others think like scientists, becoming a defender of clear reasoning in a noisy world. Week 1, collect and analyze real claims: gather a set of real-world claims from advertising, social media, news headlines, product labels, or popular health and wellness sources. For each claim, analyze it like a scientist: What exactly is being claimed? What evidence is offered (anecdote, study, expert say-so, none)? How strong is that evidence? Is the claim testable and falsifiable? Is there a possible correlation-causation confusion? Is there bias or a conflict of interest (who benefits)? Is it real science or pseudoscience dressed up to look scientific? Sort your claims from weakest to strongest evidence and document your reasoning. Optionally, design (or even run) a simple controlled experiment to test one harmless, testable claim yourself, changing one variable, repeating, recording. Week 2, build a "thinking toolkit": create a practical guide that teaches others how to evaluate claims and evidence. Include the key tools from this lesson, the scientist's questions ("How do we know? How strong is the evidence? Who checked it? Could it be wrong?"), the difference between strong and weak evidence, the correlation-causation trap (with clear examples), how to spot bias and conflicts of interest, the falsifiability test for distinguishing science from pseudoscience, and the value of independent, converging evidence. Make it genuinely useful and engaging, a poster, an illustrated guide, a slide deck, a short video, a set of "red flags to watch for," or a quiz that lets others test their own reasoning. Use your real examples from Week 1 to illustrate each tool. Produce your final piece as a resource you could actually share to help friends or family think more clearly. The aim is to internalize and pass on the most transferable skill in all of science: not any particular fact, but the disciplined, honest, evidence-weighing way of thinking that lets you navigate a world overflowing with claims, advertisements, and misinformation, the intellectual self-defense that protects clear thinking for a lifetime.`,
            offerToParent: `Parent: opt your child into the Critical Thinker's Project. Collecting real-world claims and analyzing each for evidence quality, testability, correlation-versus-causation, bias, and pseudoscience, then building a practical "thinking toolkit" to teach others, directly develops the NGSS nature-of-science goals: understanding science as evidence-based reasoning, evaluating sources and evidence, and distinguishing science from pseudoscience. This is arguably the most transferable skill in the entire curriculum, intellectual self-defense against misinformation, and it builds critical thinking, media literacy, scientific reasoning, and the habit of asking "how do we know?" It's rigorous, standards-aligned work with lifelong payoff far beyond the science classroom.`,
          },
          identityQuestion: `If you become someone who thinks like a scientist, who asks how we know rather than just what to believe, who can weigh evidence, spot the correlation-causation trap, recognize bias and pseudoscience, and tell a lone anecdote from a mountain of converging proof, what kind of person does that make you, someone equipped to navigate a world flooded with claims and to seek what's true honestly, even when it's inconvenient, that someone who simply believes or denies without weighing the evidence never can?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who asks "how do we know?" before believing a claim.`,
            `A thinker who can tell strong evidence from weak and spot the traps.`,
            `Someone who seeks what's true honestly, even when it's inconvenient.`,
          ],
          saveKey: `identity_responses_sci_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. Nineteen lessons in, and you've learned what may be the most important thing of all, more important than any single fact: how science itself works, and how to think like a scientist. You learned that science is not mainly a collection of facts but a process, observe, question, hypothesize, test against evidence, and that evidence, not authority or opinion, is the final judge. You came to understand the deep idea of falsifiability, that real scientific claims must be capable of being proven wrong, and why this makes science self-correcting, growing stronger through doubt rather than demanding blind belief. You sharpened the skill that matters most in a world flooded with information: evaluating evidence, telling strong from weak, avoiding the correlation-causation trap, recognizing bias, and spotting pseudoscience dressed up to look real. And you confronted the ethics of science: that "can we?" is never the same as "should we?", that scientists are responsible for how knowledge is used, and that honesty in the work itself is a moral act. As a scientist, you weighed five real claims, the anecdote, the correlation trap, the unfalsifiable claim, the biased study, and the gold standard of converging evidence, and learned to judge each on its merits. This way of thinking is a gift that will protect and guide you for the rest of your life, no matter how the facts change. One lesson remains to complete your entire journey through science. Next, we bring it all together: science and society, how this powerful way of knowing shapes our world, and how we, together, must decide what to do with it. Onward, {name}. — Cosmo`,
          badge: `truth-weigher`,
          badgeName: `Truth Weigher`,
          xpEarned: 75,
          competencies: [
            `Understands science as a process of testing ideas against evidence, not just a body of facts`,
            `Knows that scientific claims must be testable and falsifiable`,
            `Understands why science is self-correcting and grows stronger through questioning`,
            `Can distinguish strong evidence from weak and recognize independent, converging evidence`,
            `Recognizes the correlation-causation trap, bias, and pseudoscience`,
            `Understands the difference between "can we?" and "should we?" in scientific ethics`,
            `Values scientific integrity: honesty, transparency, and responsibility for how knowledge is used`,
          ],
          nextLessonPreview: {
            title: `Lesson 20: Science and Society — The Power and Responsibility of Knowledge`,
            hook: `How science shapes our world, and how we, together, must decide what to do with its power. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L19 ${VERSION}] "${l.title}" mags=${mags} sources=${src} q=${quiz}`);
}
