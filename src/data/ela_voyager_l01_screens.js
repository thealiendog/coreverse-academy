// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L01 — Rhetorical Analysis: How Authors Persuade
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: Common Core State Standards (CCSS) — Reading Informational Text,
//   Rhetoric, Argument Analysis (CCSS.ELA-LITERACY.RI / W standards)
// CALIBRATED: Voyagers Calibration Spec v1.0 (May 2026)
//
// Interaction format: SOURCE EVALUATION (sort real persuasive passages by which
// rhetorical move is doing the work, and judge how trustworthy each is). Contract
// matches the shipped Voyager source-evaluation screen: sources[] with
// tier/title/type/context/quote/questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// COPYRIGHT NOTE: quotes are public-domain or under 15 words, paraphrase-first.
// Em-dashes at normal Voyager density (10-15/file), NOT the Creative Arts floor.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l01-v1";

const ELA_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-01`,
      title: `Rhetorical Analysis: How Authors Persuade`,
      duration: 35,
      xpReward: 75,
      badge: `rhetoric-reader`,
      badgeName: `Rhetoric Reader`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, every single day, dozens of people are trying to persuade you. Advertisers want your money, politicians want your support, friends want you to agree, apps want your attention, and writers of every kind want you to believe what they believe. Most of the time, you feel the pull without seeing how it works, which means the persuasion is operating on you invisibly. Rhetoric is the ancient art of persuasion, studied seriously since the Greeks more than two thousand years ago, and learning to read it is one of the most powerful and protective skills you can own. When you can name the moves an author is making, two things happen at once: you can be persuaded on purpose, by good arguments you actually choose to accept, and you can spot manipulation that would otherwise slip past you. Today you will learn the core techniques of persuasion, see them at work in real, famous texts, and practice telling honest persuasion from manipulation. This is not about becoming cynical and trusting nothing. It is about reading with your eyes open. Onward.`,
          headline: `Rhetorical Analysis: How Authors Persuade`,
          subtitle: `The ancient art of persuasion, and how to read it. Source Evaluation.`,
          visual: `/voyager-assets/ela/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Rhetoric Is Everywhere, And It Is Old`,
          paragraphs: [
            `Start with the word itself. Rhetoric means the art of persuasion through language, the craft of choosing words and structure to move an audience to think, feel, or do something. It is not a modern invention or a dirty trick. The ancient Greeks, especially Aristotle around 350 BCE, studied rhetoric as a serious discipline, as worthy of careful thought as logic or science, because they understood that a free society runs on persuasion. In a place where people argue and vote rather than simply obey, the ability to make a good case, and to judge someone else's, is a survival skill for citizens.`,
            `Here is the first thing to truly absorb: rhetoric is not optional and it is not rare. Every piece of writing or speech designed to move you uses it, whether the author knows the technical names or not. A campaign speech, a sneaker ad, a charity appeal, a movie review, a friend's text talking you into something, a social media post designed to make you angry enough to share, all of these are rhetoric in action. The question is never "is this persuasive writing?" but "what techniques is it using, and are they being used honestly?"`,
            `And this is exactly why reading rhetoric is power, not trivia. Most people are persuaded the way a fish experiences water, completely surrounded by it and never noticing it is there. They feel moved, convinced, fired up, or reassured, but they cannot say why, which means they cannot tell a brilliant honest argument from a slick manipulation. Once you can name the moves, you step out of the water and onto the bank: you can still feel the pull of a great piece of writing, and you can also see the machinery producing the pull. That double vision, being movable by good arguments and resistant to bad ones, is what this whole lesson is building.`,
          ],
          image: `/voyager-assets/ela/l01-s1-rhetoric.webp`,
          imageCaption: `Rhetoric means the art of persuasion through language, the craft of choosing words and structure to move an audience to think, feel, or do something. Not modern, not a dirty trick: the ancient Greeks, especially Aristotle around 350 BCE, studied it as a serious discipline, because a free society where people argue and vote runs on persuasion, so making a good case and judging someone else's is a citizen's survival skill. First thing to absorb: rhetoric is not optional or rare. Every piece of writing or speech meant to move you uses it, a campaign speech, a sneaker ad, a charity appeal, a friend's text, a post built to make you share in anger. The question is never "is this persuasive?" but "what techniques, and are they honest?" This is why reading rhetoric is power: most people are persuaded like a fish in water, surrounded and never noticing, feeling moved but unable to say why, so they can't tell brilliant honest argument from slick manipulation. Naming the moves steps you onto the bank, still moved by great writing, but able to see the machinery producing the pull.`,
          vocab: [
              { word: `rhetoric`,
                definition: `The art of persuasion through language: choosing words and structure to move an audience to think, feel, or do something.`,
                audioPrompt: `Rhetoric is the art of persuasion through language, {name}. It is not a dirty trick. The ancient Greeks studied it seriously because a free society, where people argue and vote, runs on persuasion. Every speech, ad, and post designed to move you is using rhetoric.` },
              { word: `persuasion`,
                definition: `The act of getting someone to believe, feel, or do something through reasons, emotion, or trust rather than force.`,
                audioPrompt: `Persuasion means moving someone to think, feel, or act, {name}, without forcing them. It happens to you dozens of times a day, from ads to friends to posts. The skill is not to stop being persuadable, but to notice how the persuasion is working.` },
              { word: `audience`,
                definition: `The person or group a piece of writing or speech is trying to persuade. Good persuaders shape every choice around their audience.`,
                audioPrompt: `The audience is whoever the persuasion is aimed at, {name}. A skilled writer or speaker shapes every word around the audience they want to move. When you read rhetoric, you are the audience, so ask what this is trying to do to you.` },
            ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Three Ancient Appeals: Ethos, Pathos, Logos`,
          paragraphs: [
            `Aristotle gave us the most useful map of persuasion ever made, and it still works today. He said a persuader can reach you through three main appeals, and almost every persuasive text uses some mix of them. The first is ethos, the appeal to credibility and character: you believe a message partly because of who is saying it and whether they seem trustworthy, knowledgeable, and decent. A doctor recommending a treatment, a star athlete endorsing shoes, a writer who admits the other side has a point, all are working ethos, building the sense that the speaker is worth listening to.`,
            `The second is pathos, the appeal to emotion: a persuader moves you by making you feel something, fear, hope, anger, pity, pride, belonging. A charity ad showing one hungry child's face, a speech that makes a crowd weep or cheer, an ad that ties a product to the warm feeling of family, all are working pathos. Emotion is not a cheap trick by itself, because many things truly are sad, inspiring, or outrageous, and feeling them is part of understanding them. Pathos becomes a problem only when it is used to bypass thinking entirely.`,
            `The third is logos, the appeal to logic and evidence: a persuader convinces you with facts, reasons, statistics, and sound argument. A claim backed by real data, a step-by-step chain of reasoning, a clear "because" that actually supports the point, all are working logos. The crucial insight Aristotle saw is that the strongest persuasion usually blends all three, a trustworthy speaker (ethos) making a well-reasoned case (logos) that also moves you to care (pathos), and that learning to spot which appeal is doing the work in any given moment is the foundation of reading persuasion clearly. When you can say "that line is pure pathos" or "that is ethos doing the heavy lifting," you are no longer just feeling the pull, you are reading it.`,
          ],
          image: `/voyager-assets/ela/l01-s2-appeals.webp`,
          imageCaption: `Aristotle's map of persuasion, still working today: three appeals, and almost every persuasive text mixes them. ETHOS, the appeal to credibility and character, you believe a message partly because of who says it and whether they seem trustworthy, knowledgeable, and decent (a doctor recommending treatment, an athlete endorsing shoes, a writer who admits the other side has a point). PATHOS, the appeal to emotion, moving you by making you feel fear, hope, anger, pity, pride, or belonging (a charity ad showing one hungry child, a speech that makes a crowd cheer, an ad tying a product to family warmth). Emotion is not a cheap trick by itself, since many things truly are sad or outrageous, it's a problem only when used to bypass thinking. LOGOS, the appeal to logic and evidence, convincing with facts, reasons, statistics, and sound argument. Aristotle's insight: the strongest persuasion blends all three, a trustworthy speaker (ethos) making a well-reasoned case (logos) that also moves you to care (pathos). Spotting which appeal is doing the work is the foundation of reading persuasion clearly.`,
          vocab: [
              { word: `ethos`,
                definition: `The appeal to credibility and character: you believe a message partly because of who is saying it and whether they seem trustworthy.`,
                audioPrompt: `Ethos is the appeal to credibility, {name}. You trust a message partly because of who says it: a doctor, an expert, or a writer who seems fair and honest. Ethos asks, has this speaker earned my trust?` },
              { word: `pathos`,
                definition: `The appeal to emotion: a persuader moves you by making you feel something, such as fear, hope, anger, pity, or pride.`,
                audioPrompt: `Pathos is the appeal to emotion, {name}. It moves you by making you feel fear, hope, anger, or pride. Emotion is not a cheap trick by itself, because many things truly are sad or inspiring. It becomes a problem only when it is used to bypass thinking.` },
              { word: `logos`,
                definition: `The appeal to logic and evidence: a persuader convinces you with facts, reasons, statistics, and sound argument.`,
                audioPrompt: `Logos is the appeal to logic and evidence, {name}. It convinces you with facts, reasons, and sound argument. The strongest persuasion blends all three appeals: a trustworthy speaker, making a well-reasoned case, that also makes you care.` },
            ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Watching The Appeals Work In Real Texts`,
          paragraphs: [
            `Now see the appeals at work in real, famous persuasion, because naming a technique is easy and spotting it live is the real skill. Consider Martin Luther King Jr.'s 1963 "I Have a Dream" speech, one of the most studied pieces of rhetoric in American history. King blends all three appeals masterfully: ethos, because he speaks as a moral leader grounding his case in shared American ideals and scripture; logos, because he points to the concrete gap between the nation's promises and its treatment of Black Americans; and pathos, because the soaring, repeated phrase "I have a dream" lets a vast crowd feel a future rather than merely hear about it. The genius is the blend, not any single appeal.`,
            `Or take a humble television charity ad for an animal shelter. It almost always leads with pathos, slow music and the eyes of one shivering dog, because a single sufferer moves us more than a statistic. But notice the ethos woven in (a calm, trustworthy narrator, the name of a real organization) and the logos slipped underneath (the number of animals saved last year, the small monthly cost). Even a thirty-second ad is usually running all three appeals at once, carefully balanced, and once you know to look, you cannot unsee it.`,
            `The point of this practice is not to rank these texts as good or bad, but to read them with precision. A great speech and a manipulative ad can use the very same techniques, the difference lies in honesty, which the next section takes up. For now, the skill is simply to watch a real text and ask, moment by moment: is this line building the speaker's credibility, stirring my emotions, or giving me a reason? Often it is doing more than one at once. Reading rhetoric well means tracking that braid as it moves, the way a musician hears the separate instruments inside a song that everyone else hears as a single sound.`,
          ],
          image: `/voyager-assets/ela/l01-s3-realtexts.webp`,
          imageCaption: `See the appeals at work in real persuasion, since naming a technique is easy and spotting it live is the real skill. Martin Luther King Jr.'s 1963 "I Have a Dream" speech blends all three masterfully: ethos (he speaks as a moral leader grounded in shared American ideals and scripture), logos (the concrete gap between the nation's promises and its treatment of Black Americans), and pathos (the soaring repeated "I have a dream" lets a vast crowd feel a future, not merely hear about it). The genius is the blend, not any single appeal. A humble animal-shelter TV ad leads with pathos (slow music, one shivering dog's eyes, since a single sufferer moves us more than a statistic), with ethos woven in (a calm narrator, a real organization's name) and logos underneath (animals saved last year, the small monthly cost). Even a 30-second ad runs all three at once. The point isn't to rank texts good or bad but to read with precision, asking moment by moment: is this line building credibility, stirring emotion, or giving a reason? Reading rhetoric well means tracking that braid as it moves.`,
          vocab: [
              { word: `appeal`,
                definition: `A specific way a persuader reaches you. The three classic appeals are ethos, pathos, and logos.`,
                audioPrompt: `An appeal is a way a persuader reaches you, {name}. The three classic appeals are ethos, pathos, and logos. Reading rhetoric well means spotting which appeal is doing the work in any given line.` },
              { word: `blend`,
                definition: `The way strong persuasion uses several appeals at once, weaving credibility, emotion, and logic together.`,
                audioPrompt: `The blend is how strong persuasion mixes the appeals, {name}. King's I Have a Dream speech braids ethos, pathos, and logos together. The genius is usually the blend, not any single appeal on its own.` },
              { word: `rhetorical analysis`,
                definition: `Reading a persuasive text closely to name the techniques it uses and judge how well and how honestly they work.`,
                audioPrompt: `Rhetorical analysis is reading a persuasive text closely, {name}, to name its techniques and judge them. It is like a musician hearing the separate instruments inside a song everyone else hears as one sound.` },
            ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Honest Persuasion Versus Manipulation`,
          paragraphs: [
            `Here is the heart of the lesson, and the part that protects you. The same techniques can be used honestly or manipulatively, and the difference is not which appeal is used but how. Honest persuasion respects you as a thinker: it gives real reasons, uses emotion that fits the truth of the situation, and would survive you knowing exactly how it works. Manipulation disrespects you as a thinker: it uses appeals to bypass your reasoning, relies on you not noticing, and falls apart the moment you see it clearly. The test is simple to state, even if it takes practice to apply: would this still persuade me if I fully understood what it was doing?`,
            `Watch how the appeals turn manipulative. Ethos becomes manipulation when credibility is faked or borrowed, an actor in a white coat pretending to be a doctor, a celebrity endorsing a medicine they know nothing about, a vague "experts agree" with no experts named. Pathos becomes manipulation when emotion is cranked up to drown out thought, fear used to rush you into buying or believing before you can ask a single question, outrage stoked just to make you share. And logos becomes manipulation through fake logic, a statistic with no source, a "because" that does not actually follow, a chain of reasoning with a broken link hidden in the middle.`,
            `This is why the goal is never to stop being persuadable, which would make you both miserable and foolish, since many true and important things deserve to persuade you. The goal is to become persuadable on purpose. You feel the pull of a piece of writing, then you ask: who is speaking and have they earned my trust, is this emotion honest to the situation or manufactured to rush me, do these reasons actually hold up if I check them? A person who can do that is nearly impossible to manipulate and still fully open to a genuinely good argument, which is exactly the kind of free, clear-thinking reader this lesson, and this whole subject, is trying to help you become.`,
          ],
          image: `/voyager-assets/ela/l01-s4-honest.webp`,
          imageCaption: `The heart of the lesson, and the part that protects you: the same techniques can be used honestly or manipulatively, and the difference is not which appeal but how. Honest persuasion respects you as a thinker, giving real reasons, using emotion that fits the truth, and surviving you knowing exactly how it works. Manipulation disrespects you, using appeals to bypass reasoning, relying on you not noticing, falling apart once you see it clearly. The test: would this still persuade me if I fully understood what it was doing? How appeals turn manipulative: ETHOS faked or borrowed (an actor in a white coat, a celebrity endorsing a medicine they know nothing about, vague "experts agree" with none named); PATHOS cranked up to drown out thought (fear rushing you to buy before you can ask a question, outrage stoked just to make you share); LOGOS faked (a statistic with no source, a "because" that doesn't follow, a broken link hidden mid-argument). The goal is never to stop being persuadable, which would be foolish since many true things deserve to persuade you, but to become persuadable on purpose, feeling the pull, then asking who speaks, is the emotion honest, do the reasons hold up.`,
          vocab: [
              { word: `manipulation`,
                definition: `Persuasion that uses appeals to bypass your thinking and falls apart the moment you see clearly how it works.`,
                audioPrompt: `Manipulation is persuasion that disrespects you as a thinker, {name}. It uses appeals to bypass your reasoning and relies on you not noticing. The test: would this still persuade me if I fully understood what it was doing?` },
              { word: `credibility`,
                definition: `How trustworthy and believable a speaker seems. Honest persuasion earns it; manipulation fakes or borrows it.`,
                audioPrompt: `Credibility is how trustworthy a speaker seems, {name}. Honest persuasion earns it. Manipulation fakes it, like an actor in a white coat pretending to be a doctor. Always ask whether the credibility is real or borrowed.` },
              { word: `bias`,
                definition: `A leaning toward one side that can shape what a persuader includes, leaves out, or exaggerates.`,
                audioPrompt: `Bias is a leaning toward one side, {name}, that can shape what a persuader shows you or hides. Noticing a source's bias does not mean rejecting it, but it does mean checking what they might be leaving out.` },
            ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You learned that rhetoric is the ancient, everyday art of persuasion through language, studied seriously since Aristotle because a free society runs on it, and that reading it is power because most people feel persuasion's pull without ever seeing the machinery. You learned Aristotle's three appeals, ethos (credibility and character), pathos (emotion), and logos (logic and evidence), and that the strongest persuasion blends all three.`,
            `You watched the appeals work in real texts, from King's masterful blend in "I Have a Dream" to the careful three-appeal balance of a humble charity ad, and you saw that reading rhetoric well means tracking the braid moment by moment rather than just feeling the overall pull. And you reached the heart of it: the same techniques serve honest persuasion or manipulation, the difference being whether they respect or bypass your thinking, captured in one test, would this still persuade me if I fully understood what it was doing?`,
            `Now the source-evaluation screen will hand you several real or realistic persuasive passages, a credible expert argument, an emotional appeal that fits the truth, a faked-credibility pitch, a fear-stoking manipulation, and a piece of clean logical reasoning, and ask you to read each one: which appeal is doing the work, and is it being used honestly or manipulatively? Your job is not to reject persuasion but to read it, staying open to honest arguments while catching the manipulative moves. Persuadable on purpose, fooled by no one. Onward.`,
          ],
          image: `/voyager-assets/ela/l01-s5-before.webp`,
          imageCaption: `Threads together. Rhetoric is the ancient, everyday art of persuasion through language, studied since Aristotle because a free society runs on it, and reading it is power because most people feel the pull without seeing the machinery. Aristotle's three appeals: ethos (credibility and character), pathos (emotion), logos (logic and evidence), and the strongest persuasion blends all three. You watched them work in real texts, from King's masterful blend in "I Have a Dream" to a charity ad's careful three-appeal balance, and saw that reading rhetoric well means tracking the braid moment by moment, not just feeling the pull. The heart of it: the same techniques serve honest persuasion or manipulation, the difference being whether they respect or bypass your thinking, with one test, would this still persuade me if I fully understood what it was doing? The source-evaluation screen hands you persuasive passages to read: which appeal is doing the work, and is it honest or manipulative? The job is not to reject persuasion but to read it, open to honest arguments, catching the manipulative moves. Persuadable on purpose, fooled by no one.`,
          vocab: [
              { word: `persuadable on purpose`,
                definition: `Staying open to honest arguments while checking who is speaking, whether the emotion fits, and whether the reasons hold up.`,
                audioPrompt: `Persuadable on purpose is the goal, {name}. Not trusting nothing, which is foolish, and not believing everything, which is dangerous. You feel the pull, then you check the credibility, the emotion, and the reasons before you decide.` },
              { word: `evidence`,
                definition: `Facts, data, or examples offered to support a claim. Honest evidence is checkable and named; fake evidence has no source.`,
                audioPrompt: `Evidence is the facts and examples that back a claim, {name}. Honest evidence is checkable and names its source. A statistic with no source, like a vague ninety-two percent, is a warning sign, not proof.` },
              { word: `skepticism`,
                definition: `A habit of not believing a claim until you have checked who says it, why, and whether the reasons truly hold up.`,
                audioPrompt: `Skepticism is the habit of checking before believing, {name}. It is not cynicism, which trusts nothing. Healthy skepticism stays open to good arguments while refusing to be rushed or fooled by manipulation.` },
            ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l01-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Persuasive Passages`,
          intro: `{name}, five persuasive passages. For each, read it twice: first, which appeal is doing the main work, ethos, pathos, or logos? Second, is that appeal being used honestly (respecting your thinking) or manipulatively (bypassing it)? The skill is to stay open to honest persuasion while catching the manipulative moves, persuadable on purpose, fooled by no one.`,
          sources: [
            {
              id: `s1`,
              tier: `honest-logos`,
              title: `A scientist arguing for a policy with evidence`,
              type: `Evidence-based argument (logos)`,
              context: `A climate scientist makes the case for a local policy by laying out named data, explaining the reasoning step by step, citing where the numbers come from, and openly noting one limitation of the evidence rather than hiding it.`,
              quote: `"Here are the measured temperature records, here is the source, and here is the one place the data is still uncertain. Judge the argument for yourself."`,
              questions: [
                `Which appeal is doing the main work here, and how can you tell?`,
                `Why does openly naming a limitation make this MORE trustworthy, not less?`,
                `Is this honest persuasion or manipulation, and why?`,
              ],
              evaluation: `The main appeal is logos: the persuasion rests on named data, a step-by-step chain of reasoning, and cited sources, with very little leaning on emotion or status. Naming a limitation openly makes it more trustworthy, not less, because honest argument states what it does and does not show and invites you to check, while manipulation hides the weak spots, so the admission is a mark of confidence in the evidence rather than a crack in it. This is honest persuasion: it respects you as a thinker, gives real reasons, and would survive your fully understanding how it works, indeed it invites exactly that ("judge for yourself"). The right response is to be genuinely open to being persuaded here, and then to actually check the cited data, which is what honest logos asks of you.`,
            },
            {
              id: `s2`,
              tier: `manipulative-ethos`,
              title: `An actor in a white coat selling a supplement`,
              type: `Faked-credibility pitch (manipulative ethos)`,
              context: `A commercial features a person in a doctor's white coat, with a stethoscope and an authoritative voice, recommending a health supplement, but small print reveals the person is a paid actor, not a doctor, and no actual research is cited.`,
              quote: `"As a health professional, I can tell you this is the supplement I trust most." [small print: dramatization; actor portrayal]`,
              questions: [
                `Which appeal is being used, and what makes it manipulative rather than honest?`,
                `Why is the white coat doing so much of the persuasive work?`,
                `What question instantly deflates this pitch?`,
              ],
              evaluation: `This is ethos, the appeal to credibility, used manipulatively, because the credibility is faked: a paid actor borrows the trusted image of a doctor without the knowledge or accountability a real doctor has, and no actual evidence is cited. The white coat does the heavy lifting precisely because it triggers automatic trust before you think, which is the tell of manipulation, it relies on you not noticing the costume is just a costume. The pitch deflates instantly under one question: would this still persuade me if I knew the "doctor" is a paid actor and there is no research behind the claim? Once you see that, the persuasion collapses, which is exactly what honest persuasion never does. The right response is firm skepticism toward the claim, while noting it is the faked credibility, not the use of ethos itself, that is the problem.`,
            },
            {
              id: `s3`,
              tier: `honest-pathos`,
              title: `A survivor's testimony about a real harm`,
              type: `Truthful emotional appeal (honest pathos)`,
              context: `In an argument for safer roads, a person who lost a family member to a preventable car crash describes the loss honestly and movingly, and connects that grief to a specific, checkable safety proposal, without exaggeration or pressure to act before thinking.`,
              quote: `"I am not telling you this to rush you. I am telling you what happened, and asking you to consider one specific change that could prevent it."`,
              questions: [
                `Which appeal is doing the work, and is emotion automatically manipulation?`,
                `What keeps this emotional appeal honest rather than manipulative?`,
                `How does it differ from fear used to rush you?`,
              ],
              evaluation: `The main appeal is pathos, emotion, and this is the key case that proves emotion is not automatically manipulation. The grief here is real, it fits the truth of the situation, and it is connected to a specific, checkable proposal rather than used to drown out thought, the speaker even explicitly refuses to rush you. That is what keeps honest pathos honest: the feeling matches reality and supports clear thinking instead of replacing it. It differs sharply from fear used to rush you, which manufactures or inflates emotion to force a decision before you can ask questions. The right response is to let yourself genuinely feel and weigh this, because feeling the human reality of a harm is part of understanding it, and then to evaluate the actual proposal on its merits, which honest pathos leaves room for.`,
            },
            {
              id: `s4`,
              tier: `manipulative-pathos`,
              title: `An ad stoking fear to rush a purchase`,
              type: `Fear-based manipulation (manipulative pathos)`,
              context: `An ad warns that your family is in constant danger without its product, uses alarming music and a countdown timer, insists you must "act now before it's too late," and offers no real evidence that the danger is real or that the product helps.`,
              quote: `"Don't wait, every second you delay puts your loved ones at risk. Buy now, before it's too late!"`,
              questions: [
                `Which appeal is being used, and what makes it manipulative?`,
                `Why are the countdown and "act now" the biggest red flags?`,
                `What would happen to this ad if you slowed down and asked for evidence?`,
              ],
              evaluation: `This is pathos used manipulatively, specifically fear cranked up to bypass thinking. The countdown timer and "act now before it's too late" are the biggest red flags because their whole purpose is to prevent the one thing that would defeat the ad: a pause to ask questions, manipulation relies on speed and on you not stopping to think. The danger is asserted, not shown, and no real evidence connects the product to any actual protection. If you slowed down and asked for evidence, the ad would fall apart, which is the signature of manipulation and the opposite of honest persuasion. The right response is to deliberately slow down, treat the urgency itself as the warning sign, and refuse to decide until you have the evidence the ad is working so hard to keep you from seeking.`,
            },
            {
              id: `s5`,
              tier: `manipulative-logos`,
              title: `A post using fake logic and a sourceless statistic`,
              type: `Fake-logic claim (manipulative logos)`,
              context: `A viral post presents an official-sounding argument with a precise-looking statistic ("studies show 92% of people..."), but names no study, and its central "because" does not actually support its conclusion when you trace the reasoning.`,
              quote: `"Studies show 92% of people improve with this method, so clearly it's the only approach that works."`,
              questions: [
                `Which appeal is this imitating, and why is it manipulative?`,
                `What's wrong with the "92%" and the word "clearly"?`,
                `How is this different from the honest evidence in the first source?`,
              ],
              evaluation: `This imitates logos, the appeal to logic and evidence, which makes it especially sneaky, because it wears the costume of reasoning while failing at it. The "92%" is a sourceless statistic, a precise-sounding number with no named study behind it, which gives the feel of evidence without the substance, and "so clearly it's the only approach that works" is a broken logical link: even if some people improve, that would not make it the only thing that works, the "because" does not actually support the conclusion. This is the opposite of the first source, which named its data, showed its reasoning, and invited checking; here the data is uncheckable and the reasoning collapses on inspection. The right response is to ask the logos questions, where is this number from, and does this conclusion actually follow, and to withhold belief until real, checkable evidence and sound reasoning appear.`,
            },
          ],
          synthesisPrompt: `After reading all five: what is your method for staying open to honest persuasion while catching manipulation? Specifically, name the question you will ask of any persuasive text, and describe how you tell honest ethos, pathos, and logos from their manipulative versions. In 5-6 sentences.`,
          reflectionPrompt: `Think of a time something persuaded you, an ad, a post, a speech, a friend, and looking back with this lesson, can you now name which appeal moved you and whether it was honest or manipulative? Where in your daily life do you most often meet manipulative pathos (fear or outrage used to rush you)?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `The lesson says reading rhetoric is "power, not trivia." What's the core reason?`,
              options: [
                `Because knowing rhetorical terms lets you win every argument you ever get into.`,
                `Most people feel persuasion's pull without seeing how it works, so naming the moves protects you.`,
                `Because rhetoric is a school subject that appears on important standardized tests.`,
                `Because once you learn rhetoric, advertising and speeches stop affecting you at all.`,
              ],
              correctIndex: 1,
              explanation: `Most people are persuaded the way a fish experiences water, surrounded by it and never noticing, feeling moved but unable to say why, which leaves them unable to tell honest argument from manipulation. Naming the moves steps you onto the bank: still movable by good arguments, but able to see the machinery. The distractors reduce it to winning, test-passing, or becoming immune to all persuasion, which the lesson explicitly rejects.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `A star athlete you admire endorses a brand of shoes. Which appeal is primarily at work?`,
              options: [
                `Logos, because the athlete is presenting statistics about the shoes.`,
                `Pathos, because the shoes make you feel afraid of missing out.`,
                `Ethos, because you trust the message partly based on who is delivering it.`,
                `None, because endorsements aren't a form of rhetoric at all.`,
              ],
              correctIndex: 2,
              explanation: `This is ethos, the appeal to credibility and character: you lean toward the message partly because of who is saying it. An admired athlete lends their trusted image to the product. The distractors misassign it to logos (no evidence is given), pathos (no emotion is the main lever), or deny it's rhetoric, when endorsements are a classic ethos move.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does the lesson insist that emotion (pathos) is NOT automatically manipulation?`,
              options: [
                `Because emotion never actually persuades anyone, so it can't be manipulative.`,
                `Because in the end only logos can ever truly be manipulative, while pathos by its nature is always honest.`,
                `Because manipulation requires faking credibility, which emotion never does.`,
                `Because many things truly are sad or outrageous, and feeling them is part of understanding them.`,
              ],
              correctIndex: 3,
              explanation: `Many things genuinely are sad, inspiring, or outrageous, and feeling them is part of understanding them, so honest pathos uses emotion that fits the truth of the situation. Pathos becomes manipulation only when emotion is cranked up to bypass thinking. The distractors claim emotion never persuades, that only logos can be manipulative, or that manipulation requires faked credibility — all false.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What single test does the lesson offer for telling honest persuasion from manipulation?`,
              options: [
                `Would this still persuade me if I fully understood what it was doing?`,
                `Does the persuader use more than one of the three appeals at once?`,
                `Is the persuader famous, credentialed, or widely quoted by others?`,
                `Does the message make me feel a strong emotion when I read it?`,
              ],
              correctIndex: 0,
              explanation: `The test is: would this still persuade me if I fully understood what it was doing? Honest persuasion survives your seeing exactly how it works; manipulation falls apart once you see it clearly, because it relies on you not noticing. The distractors mistake using multiple appeals, fame, or strong feeling for the test, none of which distinguishes honest from manipulative.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `An actor in a white coat (not a real doctor) recommends a supplement with no research cited. Which manipulative move is this?`,
              options: [
                `Manipulative logos, because a sourceless statistic is being presented as fact.`,
                `Honest ethos, because doctors really are credible sources on health.`,
                `Manipulative ethos, because credibility is borrowed and faked, not earned.`,
                `Manipulative pathos, because the ad is trying to make you feel afraid.`,
              ],
              correctIndex: 2,
              explanation: `This is manipulative ethos: credibility is faked or borrowed, an actor wears the trusted image of a doctor without the knowledge or accountability, and no evidence backs the claim. The white coat triggers automatic trust before you think. The distractors misname it as logos or pathos, or call it honest ethos, when the whole problem is that the credibility is a costume.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `An ad uses a countdown timer and "act now before it's too late!" with no real evidence of danger. Why is the urgency itself the red flag?`,
              options: [
                `Because real emergencies never involve any time pressure whatsoever.`,
                `Its purpose is to prevent the pause where you'd ask questions, since manipulation relies on speed.`,
                `Because using countdown timers like that is actually illegal in any honest, legitimate advertising.`,
                `Because urgency means the product must be in very high demand.`,
              ],
              correctIndex: 1,
              explanation: `The countdown and "act now" exist to prevent the one thing that would defeat the ad: a pause to ask for evidence. Manipulation relies on speed and on you not stopping to think, so the manufactured urgency is itself the warning sign. The distractors over-claim that real emergencies never have time pressure, invent a legal rule, or treat urgency as proof of demand.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `A post claims "studies show 92% of people improve, so clearly it's the only thing that works." Why is this manipulative logos?`,
              options: [
                `Because ninety-two percent is simply far too low a number to ever prove anything at all to anyone.`,
                `Because logos can never honestly use statistics or percentages.`,
                `Because it appeals to emotion instead of giving a real reason.`,
                `The statistic has no named source, and "the only thing that works" doesn't follow even if some do improve.`,
              ],
              correctIndex: 3,
              explanation: `It wears the costume of logic while failing at it: the "92%" is a sourceless statistic with no named study, giving the feel of evidence without the substance, and "the only thing that works" is a broken link, even if some people improve, that wouldn't make it the only thing that works. The distractors fault the size of the number, deny logos can use stats, or misname it as pathos.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson says the goal is not to stop being persuadable but to be "persuadable on purpose." What does that mean?`,
              options: [
                `Stay open to honest arguments while checking who speaks, whether emotion fits, and whether reasons hold.`,
                `Refuse to be persuaded by anything until you have a college degree in rhetoric.`,
                `Let yourself be persuaded only by people you already personally know and like.`,
                `Simply believe whatever happens to feel the most strongly persuasive in the very moment that you read it.`,
              ],
              correctIndex: 0,
              explanation: `Persuadable on purpose means staying genuinely open to honest arguments while asking who is speaking and whether they've earned trust, whether the emotion is honest or manufactured to rush you, and whether the reasons hold up when checked. That makes you nearly impossible to manipulate yet still open to a good argument. The distractors refuse all persuasion, gate it behind credentials or personal liking, or surrender to whatever feels strongest.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because manipulation and honest persuasion can use the very same techniques (ethos, pathos, logos), the smart response is to distrust all persuasion and refuse to be moved by anything.`,
              correctAnswer: false,
              explanation: `False, and seeing why is the whole point of the lesson. It's true that honest persuasion and manipulation can use the very same techniques — the same appeal to credibility, emotion, or logic can serve either one — so you cannot tell them apart just by spotting which appeal is in play. But the right response is not to distrust all persuasion and refuse to be moved, which would be both miserable and foolish, because many true and important things genuinely deserve to persuade you: real evidence, honest emotion that fits the truth, and trustworthy speakers. Refusing to be moved by anything would cut you off from good arguments as surely as gullibility exposes you to bad ones. The skill the lesson builds is the middle path, becoming persuadable on purpose: you feel the pull, then you ask whether the credibility is earned or faked, whether the emotion fits the truth or is cranked up to rush you, and whether the reasons actually hold up when checked, using the one test of whether it would still persuade you if you fully understood what it was doing. That makes you nearly impossible to manipulate while remaining fully open to honest persuasion, which is the opposite of blanket distrust.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 12 and scrolling. A post is designed to make you furious at a group of people and share it immediately; it uses a shocking unverified "statistic," a scary image, and the line "share before they take this down." Using this whole lesson, what do you actually think and do?`,
              options: [
                `Share it right away, since the statistic and image make the danger feel real.`,
                `Conclude all persuasion is lies and stop believing anything you read online ever.`,
                `Read it as constructed: name the manipulative pathos (outrage + fear to rush sharing) and manipulative logos (sourceless stat), notice "share before they take this down" is the speed trick, slow down, and refuse to share until you check it.`,
                `Decide the post must be true because it made you feel something so strong.`,
              ],
              correctIndex: 2,
              explanation: `Applied rhetorical analysis as real-life protection. Read the post as constructed: it runs manipulative pathos (outrage and fear cranked up to drown out thought and rush you into sharing) and manipulative logos (a shocking but sourceless "statistic" wearing the costume of evidence). The line "share before they take this down" is the classic speed trick, manufactured urgency whose whole job is to prevent the pause where you'd ask for evidence, so the urgency itself is the red flag. The move is to slow down, treat the strong feeling as a signal to check rather than to act, and refuse to share until you've verified the claim. The distractors are the three failure modes: being rushed into sharing, collapsing into "all persuasion is lies," and mistaking strong feeling for truth.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you think of yourself as someone who "doesn't fall for" ads and persuasion? Now that you've seen how invisibly the appeals work, what surprised you most about how often you're being persuaded, and how?` },
            { id: `reflect-appeal`, category: `Your own pull`, prompt: `Of the three appeals — ethos (who's speaking), pathos (how it makes you feel), logos (the reasons) — which one persuades YOU most easily? Knowing your most persuadable spot is how you guard it. When has that appeal moved you, for better or worse?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson aimed to make you "persuadable on purpose" — open to good arguments, resistant to manipulation. Which is harder for you right now: staying open to arguments you instinctively dislike, or resisting emotional appeals that feel good? Why?` },
            { id: `reflect-heritage`, category: `Persuasion around you`, prompt: `Caro, persuasion fills your world — Colombian and Latin American culture is rich with powerful oratory, music, and storytelling that move people deeply. Think of a speech, song, or story from your heritage that genuinely moved you. Which appeals was it using, and was it honest?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You'll meet manipulative pathos (outrage and fear used to rush you) constantly online. What's your personal rule now for the moment you feel that hot, urgent pull to react or share? How will you build in the pause that manipulation tries to erase?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "analyzing rhetoric just makes you a cynic who can't enjoy a good speech or trust anyone." State the strongest version of that worry. Where is it pointing at something real, and how does "persuadable on purpose" answer it without becoming cynicism?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `You are persuaded dozens of times a day. These turn rhetorical analysis from a concept into a daily habit. Two paths.`,
          familyActivity: {
            title: `The Three-Appeals Ad Hunt`,
            duration: `40 minutes`,
            description: `As a family, become rhetoric detectives for one short session. Watch or look at three or four real advertisements together — TV commercials, online ads, billboards, charity appeals, anything persuasive you can find. For each one, pause and work out together: which appeal is doing the main work, ethos (a trusted face or brand), pathos (an emotion it's reaching for), or logos (facts and numbers)? Most ads use all three, so try to spot the braid. Then ask the deeper question for each: is the appeal being used honestly, or is it trying to bypass your thinking — a faked expert, fear cranked up to rush you, a statistic with no source? Finally, try the lesson's test on the most persuasive one: "would this still work on me if I fully understood what it's doing?" The goal is to make the invisible machinery visible together, so that naming the appeals becomes second nature for everyone, and the whole family gets a little harder to manipulate.`,
          },
          projectOption: {
            title: `Write It Both Ways: Honest and Manipulative, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Learn rhetoric from the inside by writing it yourself, twice. Week 1: pick a real position you genuinely hold (a cause you care about, a change you'd like at school, a book everyone should read). Write a short persuasive piece (a paragraph or two) making your case HONESTLY: use ethos by being trustworthy and fair, pathos with emotion that fits the truth, and logos with real reasons, and make it strong enough that it would still persuade someone who saw exactly how it works. Week 2: now write a second version of the SAME position manipulatively, on purpose: fake or inflate the credibility, crank the emotion to rush the reader, slip in a sourceless statistic or a "because" that doesn't follow. Then write a short reflection comparing them: what did you have to do differently, how did the manipulative version feel to write, and how would each land on a reader who could read rhetoric? Writing both teaches you to recognize manipulation faster than any amount of just reading about it, because you'll know the moves from the inside — and it sharpens your commitment to persuading honestly.`,
            offerToParent: `Parent: opt your child into the write-it-both-ways project. Deliberately composing both an honest and a manipulative version of the same argument is one of the most effective ways to build durable rhetorical literacy and media resistance — your child will recognize manipulative moves instantly because they'll have made them on purpose, and they'll come away with a clearer commitment to persuading honestly. The reflection step ensures it builds discernment and ethics, not just technique.`,
          },
          identityQuestion: `If you become someone who can feel the full pull of a great speech, ad, or argument AND see exactly which appeals are working and whether they're honest — moved by good reasons, unmoved by manipulation — what does that let you be in a world flooded with people trying to persuade you, that neither a gullible believer nor a sneering cynic can be?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can feel a great argument's pull and still see exactly how it works.`,
            `A person who slows down when something online tries to rush me into reacting.`,
            `Someone who's open to honest persuasion but hard to manipulate.`,
          ],
          saveKey: `identity_responses_ela_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. One down, and what a place to start. You learned that rhetoric is the ancient, everyday art of persuasion through language — studied seriously since Aristotle because a free society runs on it — and that reading it is real power, because most people feel persuasion's pull without ever seeing the machinery that produces it. You learned Aristotle's three appeals: ethos, the appeal to credibility and character; pathos, the appeal to emotion; and logos, the appeal to logic and evidence — and that the strongest persuasion blends all three. You watched them braid together in real texts, from King's masterful "I Have a Dream" to the careful balance of a humble charity ad. And you reached the heart of it: the same techniques serve honest persuasion or manipulation, the difference being whether they respect or bypass your thinking, captured in one test — would this still persuade me if I fully understood what it was doing? Most of all, you learned the goal is not to trust nothing, which would be foolish, but to become persuadable on purpose: open to good arguments, hard to manipulate, fooled by no one. That is one of the most protective skills a person can carry into a world this full of persuasion. Next: we go deeper into the three appeals themselves — logos, ethos, and pathos — and learn to analyze argument with even sharper tools. Onward, {name}. — Quill`,
          badge: `rhetoric-reader`,
          badgeName: `Rhetoric Reader`,
          xpEarned: 75,
          competencies: [
            `Defines rhetoric as the art of persuasion through language and recognizes it as everywhere, old, and serious rather than a dirty trick`,
            `Identifies Aristotle's three appeals — ethos (credibility), pathos (emotion), and logos (logic/evidence) — and that strong persuasion blends them`,
            `Spots which appeal is doing the work in real texts, from a famous speech to an everyday advertisement`,
            `Distinguishes honest persuasion (respects your thinking, survives full understanding) from manipulation (bypasses thinking, relies on not noticing)`,
            `Recognizes the manipulative forms of each appeal: faked credibility, fear/outrage that rushes you, and fake logic or sourceless statistics`,
            `Applies the core test — would this still persuade me if I fully understood it? — to evaluate any persuasive text`,
            `Aims to be "persuadable on purpose": open to honest argument while resistant to manipulation, neither gullible nor cynical`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: Analyzing Argument — Logos, Ethos, and Pathos`,
            hook: `Go deeper into the three appeals and learn to take an argument apart with precision — claims, evidence, reasoning, and the gaps between them. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-ELA-VOYAGER-L01 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
