// ─────────────────────────────────────────────────────────────────────────────
// FRONTIER & PHILOSOPHY VOYAGER  |  L12 — Feminist Philosophy
// Age band : voyagers (11-12)   Guide: orion (Phoenix)
// Standards: Coreverse Original — Philosophy, Feminist Philosophy, Political & Social Philosophy, Ethics
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// SUBJECT NOTE — Frontier & Philosophy:
//   - Feminist philosophy as a serious branch of thought: it asks questions about power,
//     fairness, knowledge, and whose experiences get counted. Builds on L06 (political phil/
//     justice) and L07 (ethics, esp. care ethics).
//   - EVENHANDEDNESS (calibration-critical): this is a topic some treat as partisan. Handle it
//     as PHILOSOPHY, not activism or a political team. Present the genuine, durable intellectual
//     contributions (the questions it put on the table, care ethics, standpoint/whose-experience-
//     counts, the public/private distinction) at their strongest AND present the real internal
//     debates and disagreements *within* feminist thought (liberal vs. radical vs. difference vs.
//     intersectional; genuine tensions), so a learner sees a living field of argument, not a
//     slogan. Be clear that thoughtful people disagree about many specific conclusions, and that
//     understanding the strongest version of an idea is not the same as being told what to think.
//   - PROTECTIVE BACKBONE: the meta-skill is taking a charged topic and thinking about it with
//     the same rigor as any other — steelmanning, separating strong arguments from weak ones,
//     resisting both "it's all obviously right" and "it's all nonsense." Models how to reason
//     about an emotionally loaded subject without joining a tribe (ties to L06's tribalism point).
//   - Honesty tiers 2-3. Term: "philosophical question." Em-dashes natural; do NOT run em-dash
//     replacement on Frontier files.
//
// Interaction format: SOURCE-EVALUATION (screen 7). Matches <SourceEvaluation />: sources[]
// {id,tier,title,type,context,quote,questions,evaluation} + headline,intro,synthesisPrompt,
// reflectionPrompt. Tiers grade the QUALITY of reasoning about gender/power claims — strong
// argument vs. weak/overreaching vs. bad-faith — training evaluation, not partisanship.
//
// QUIZ STANDARD (locked): 8 MC + 1 TF + 1 inference. Short ~1-line options, comparable length,
// plausible misconception distractors, correct rotated and not the obvious longest; teaching in
// the `explanation` field.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-frontier-l12-v1";

const FRONTIER_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `frontier`,
  guide: `orion`,

  lessons: [
    {
      id: `fp-11-12-12`,
      title: `Feminist Philosophy`,
      duration: 35,
      xpReward: 75,
      badge: `fairness-thinker`,
      badgeName: `Thinker on Fairness and Power`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}. Today we take on a body of thought that has genuinely reshaped the modern world, and one that some people treat as a political team rather than what it actually is: a serious branch of philosophy. It's called feminist philosophy. And before anything else, I want to be straight with you about how we're going to handle it, because how we think about it matters as much as what we conclude. We are going to treat it as philosophy — which means we take its strongest ideas seriously and understand them deeply, we look honestly at the real disagreements within it (because feminist thinkers argue fiercely with each other), and we practice the same clear thinking we'd bring to any hard question: steelmanning, weighing arguments on their merits, refusing to either swallow everything or dismiss everything. At its core, feminist philosophy asks a small set of genuinely deep questions: How does power shape society, and who has it? What counts as fair between people? Whose experiences get treated as the "default" human experience, and whose get left out? And how do our assumptions shape what we even notice? Those are real philosophical questions, and thinking about them carefully has changed law, work, family, and how billions of people understand their own lives. Here's what today is NOT: it's not me telling you what to believe about any specific political debate. Thoughtful people — including thoughtful women — disagree about plenty of the specifics, and you'll see those disagreements honestly. What I want is for you to be able to think about power and fairness with real rigor, instead of just picking a side and cheering. So let's do the genuinely hard thing: take a charged topic and reason about it as clearly as we'd reason about anything else.`,
          headline: `Feminist Philosophy`,
          subtitle: `Power, fairness, and whose experiences get counted — questions sharp enough to reshape the world. Source evaluation.`,
          visual: `/voyager-assets/frontier/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Philosophy, Not A Slogan`,
          paragraphs: [
            `The word "feminism" carries a lot of noise — people use it to mean very different things, and online it often arrives as a slogan to cheer or boo rather than an idea to examine. So set the noise aside, because underneath it is a genuine branch of philosophy with a long history of serious argument. At its most basic, feminist philosophy starts from a simple observation and asks where it leads: for most of recorded history, in most societies, men and women have been treated differently, often with men holding more public power, and women's experiences frequently left out of how societies described "human nature," wrote their laws, and decided what counted as important. Feminist philosophy asks the philosophical questions that observation raises: Is that difference in treatment fair? Where did it come from? What assumptions kept it in place? And what would genuine fairness between people actually look like?`,
            `Notice that these are exactly the kinds of questions you have already been taking seriously all band. "What is fairness?" is the question from political philosophy, now asked about a specific and enormous case. "Whose suffering and experience counts?" is the moral-circle question from ethics, asked about half of humanity. "What assumptions are we treating as obvious truth without examining them?" is the core move of philosophy itself, from your very first lesson on metaphysics. Feminist philosophy is not a separate, strange thing off to one side; it is these familiar deep questions pointed at one of the largest patterns in human history. Seen this way, it would be strange for a serious thinker NOT to find the questions interesting, whatever conclusions they end up drawing.`,
            `And the conclusions really do vary, which is the first thing that separates philosophy from a slogan. There is no single thing "feminism says," because feminist philosophers have disagreed intensely with each other for over a century. That internal argument is not a weakness or an embarrassment — it is exactly what you would expect from a living field of serious thought, the same way scientists or any other philosophers argue. So when someone tells you "feminism believes X" as though it were one unified voice handing down commandments, your philosopher's ear should prick up: that is usually the sound of a slogan, from a supporter or a critic, not an accurate description of a rich and contested field. The honest picture is a long conversation full of real disagreement about real questions — which is precisely what makes it worth thinking through rather than just reacting to.`,
          ],
          image: `/voyager-assets/frontier/l12-s1-philosophy.webp`,
          imageCaption: `The word "feminism" carries noise — online it arrives as a slogan to cheer or boo, not an idea to examine. Set that aside: underneath is a genuine branch of philosophy with a long history of serious argument. At its most basic, feminist philosophy starts from an observation — for most of recorded history, in most societies, men and women were treated differently, often with men holding more public power, and women's experiences frequently left out of how societies described "human nature," wrote laws, and decided what mattered — and asks the philosophical questions it raises: Is that fair? Where did it come from? What assumptions kept it in place? What would genuine fairness look like? These are the SAME deep questions from all band: "what is fairness?" (political philosophy, now on an enormous case); "whose experience counts?" (the moral-circle question, asked about half of humanity); "what assumptions are we treating as obvious?" (the core move since lesson one). Not a strange separate thing — familiar questions pointed at one of history's largest patterns. And the conclusions vary, which separates philosophy from slogan: there's no single thing "feminism says," because feminist philosophers have argued intensely for over a century. That internal debate isn't a weakness — it's what a living field looks like. So when someone says "feminism believes X" as one unified voice handing down commandments, your philosopher's ear should prick up: that's the sound of a slogan, not an accurate description of a rich, contested field.`,
          vocab: [
            {
              word: `feminist philosophy as serious, contested thought`,
              definition: `The word "feminism" carries a lot of noise, used to mean very different things and often arriving online as a slogan to cheer or boo rather than an idea to examine, but underneath is a genuine branch of philosophy with a long history of serious argument. At its most basic, feminist philosophy starts from a simple observation, that for most of recorded history in most societies men and women have been treated differently, often with men holding more public power and women's experiences frequently left out of how societies described "human nature," wrote their laws, and decided what counted as important, and it asks the philosophical questions that observation raises: is that difference in treatment fair, where did it come from, what assumptions kept it in place, and what would genuine fairness between people actually look like. These are exactly the kinds of questions taken seriously all band, since "what is fairness?" is the political-philosophy question now asked about a specific and enormous case, "whose suffering and experience counts?" is the moral-circle question from ethics asked about half of humanity, and "what assumptions are we treating as obvious truth without examining them?" is the core move of philosophy itself from the first lesson on metaphysics, so feminist philosophy is not a separate strange thing but these familiar deep questions pointed at one of the largest patterns in human history, and it would be strange for a serious thinker not to find the questions interesting whatever conclusions they draw. The conclusions really do vary, which is the first thing separating philosophy from a slogan, because there is no single thing "feminism says" since feminist philosophers have disagreed intensely for over a century, and that internal argument is not a weakness or embarrassment but exactly what a living field of serious thought looks like, the same way scientists or other philosophers argue, so when someone says "feminism believes X" as though it were one unified voice handing down commandments, a philosopher's ear should prick up because that is usually the sound of a slogan, from a supporter or a critic, not an accurate description of a rich and contested field, the honest picture being a long conversation full of real disagreement about real questions, which is precisely what makes it worth thinking through rather than just reacting to.`,
              audioPrompt: `The word "feminism" carries a lot of noise, {name}. People use it to mean very different things, and online it often arrives as a slogan to cheer or boo rather than an idea to examine. So set the noise aside, because underneath it is a genuine branch of philosophy with a long history of serious argument. At its most basic, feminist philosophy starts from a simple observation: for most of recorded history, in most societies, men and women have been treated differently, often with men holding more public power, and women's experiences frequently left out of how societies described human nature, wrote their laws, and decided what counted as important. Feminist philosophy asks the questions that observation raises: Is that difference fair? Where did it come from? What assumptions kept it in place? And what would genuine fairness between people look like? Notice these are exactly the questions you have already been taking seriously all band. "What is fairness?" is the political-philosophy question, now asked about an enormous case. "Whose experience counts?" is the moral-circle question, asked about half of humanity. "What assumptions are we treating as obvious without examining them?" is the core move of philosophy itself, from your first lesson. Feminist philosophy is not a strange separate thing; it is these familiar deep questions pointed at one of the largest patterns in human history. And the conclusions really do vary, which is the first thing that separates philosophy from a slogan. There is no single thing "feminism says," because feminist philosophers have disagreed intensely with each other for over a century. That internal argument is not a weakness; it is exactly what a living field of serious thought looks like. So when someone tells you "feminism believes X" as though it were one unified voice handing down commandments, your philosopher's ear should prick up: that is usually the sound of a slogan, not an accurate description of a rich and contested field.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Four Ideas That Changed How We Think`,
          paragraphs: [
            `Whatever conclusions you reach, feminist philosophy put several genuinely powerful ideas onto the table — ideas now used far beyond any debate about gender, by thinkers across the spectrum. Here are four worth understanding at their strongest. First, "whose experience counts as the default?" Philosophers noticed that for centuries, descriptions of "human nature," "the rational man," even medical research and city design, were often built around male experience treated as the universal standard, with women's experience treated as a special case or simply not studied. The deep point generalizes far past gender: whenever one group's experience gets treated as "just how things are," other groups' experiences become invisible — and noticing that is a powerful tool of clear thinking about any group.`,
            `Second, the public/private distinction. Earlier thinkers tended to treat the home and family as a "private" zone outside questions of justice, while "real" political philosophy concerned the public square. Feminist philosophers argued that power and fairness operate inside the home too — in who does unpaid work, who makes decisions, who is safe — and that calling something "private" can be a way of placing it beyond scrutiny. Whether or not you agree with every application, the underlying move is sharp: "that's private, don't examine it" is exactly the kind of claim a careful thinker should examine. Third, care ethics, which you met in the ethics lesson: the argument that traditional moral philosophy overvalued abstract rules and undervalued the moral importance of care, relationships, and responsibility to specific people — work historically done by women and historically dismissed as less serious. Care ethics is now a respected framework used well beyond feminism.`,
            `Fourth, and this is crucial for understanding the field honestly: feminist philosophers disagree enormously about what follows from all this. "Liberal" feminist thinkers focused on equal rights and equal access within existing institutions. "Radical" thinkers argued the institutions themselves needed deeper change. "Difference" thinkers argued women's distinct experiences should be valued rather than erased into sameness — sometimes directly contradicting thinkers who argued differences were mostly imposed, not essential. Later, "intersectional" thinkers argued that gender can't be separated from race, class, and other factors, and criticized earlier feminists for centering the experience of privileged women. These are real, sharp disagreements — thinkers genuinely arguing that other thinkers got it wrong. That is the opposite of a unified slogan. So the honest summary is: a set of powerful shared questions and tools, and vigorous, ongoing disagreement about the answers — exactly like any serious field.`,
          ],
          image: `/voyager-assets/frontier/l12-s2-fourideas.webp`,
          imageCaption: `Whatever you conclude, feminist philosophy put powerful ideas on the table — now used far beyond gender debates. FOUR at their strongest: (1) "WHOSE EXPERIENCE IS THE DEFAULT?" — for centuries "human nature," "rational man," even medical research and city design were built around male experience as the universal standard, women's treated as a special case or not studied. Generalizes past gender: whenever one group's experience becomes "just how things are," other groups go invisible — a powerful clear-thinking tool about ANY group. (2) THE PUBLIC/PRIVATE DISTINCTION — earlier thinkers treated home/family as a "private" zone outside justice; feminists argued power and fairness operate inside the home too (unpaid work, decisions, safety), and calling something "private" can place it beyond scrutiny — "that's private, don't examine it" is exactly what a careful thinker should examine. (3) CARE ETHICS (from the ethics lesson) — traditional philosophy overvalued abstract rules, undervalued care, relationships, responsibility to specific people; now respected well beyond feminism. (4) Crucially, feminist philosophers DISAGREE enormously about what follows: "liberal" (equal rights within institutions) vs. "radical" (institutions need deeper change) vs. "difference" (value women's distinct experience) vs. "intersectional" (gender can't be separated from race/class; criticized earlier feminists for centering privileged women). Real, sharp disagreements — the opposite of a unified slogan. Honest summary: shared powerful questions and tools, vigorous ongoing disagreement about answers — like any serious field.`,
          vocab: [
            {
              word: `four contributions and the disagreements within`,
              definition: `Whatever conclusions one reaches, feminist philosophy put several genuinely powerful ideas onto the table that are now used far beyond any debate about gender. First, "whose experience counts as the default?", since for centuries descriptions of "human nature," "the rational man," and even medical research and city design were often built around male experience treated as the universal standard, with women's experience treated as a special case or not studied, and the deep point generalizes past gender because whenever one group's experience gets treated as "just how things are," other groups' experiences become invisible, which is a powerful tool of clear thinking about any group. Second, the public/private distinction, since earlier thinkers tended to treat the home and family as a "private" zone outside questions of justice while "real" political philosophy concerned the public square, and feminist philosophers argued that power and fairness operate inside the home too, in who does unpaid work, who makes decisions, and who is safe, and that calling something "private" can be a way of placing it beyond scrutiny, so that whether or not one agrees with every application, the underlying move is sharp because "that's private, don't examine it" is exactly the kind of claim a careful thinker should examine. Third, care ethics, met in the ethics lesson, the argument that traditional moral philosophy overvalued abstract rules and undervalued the moral importance of care, relationships, and responsibility to specific people, work historically done by women and dismissed as less serious, now a respected framework used well beyond feminism. Fourth and crucially for understanding the field honestly, feminist philosophers disagree enormously about what follows from all this: "liberal" thinkers focused on equal rights and access within existing institutions, "radical" thinkers argued the institutions themselves needed deeper change, "difference" thinkers argued women's distinct experiences should be valued rather than erased into sameness and sometimes directly contradicted thinkers who argued differences were mostly imposed rather than essential, and later "intersectional" thinkers argued gender cannot be separated from race, class, and other factors and criticized earlier feminists for centering the experience of privileged women, these being real sharp disagreements in which thinkers genuinely argue that other thinkers got it wrong, the opposite of a unified slogan, so the honest summary is a set of powerful shared questions and tools alongside vigorous ongoing disagreement about the answers, exactly like any serious field.`,
              audioPrompt: `Whatever conclusions you reach, {name}, feminist philosophy put several genuinely powerful ideas onto the table, ideas now used far beyond any debate about gender. Here are four at their strongest. First, "whose experience counts as the default?" For centuries, descriptions of human nature, the rational man, even medical research and city design, were often built around male experience treated as the universal standard, with women's experience treated as a special case or simply not studied. The deep point generalizes far past gender: whenever one group's experience gets treated as just how things are, other groups' experiences become invisible. Second, the public/private distinction. Earlier thinkers treated the home and family as a private zone outside questions of justice. Feminist philosophers argued that power and fairness operate inside the home too: who does unpaid work, who makes decisions, who is safe. And that calling something private can be a way of placing it beyond scrutiny. The move is sharp: "that's private, don't examine it" is exactly what a careful thinker should examine. Third, care ethics, which you met in the ethics lesson: the argument that traditional moral philosophy overvalued abstract rules and undervalued care, relationships, and responsibility to specific people, work historically done by women and dismissed as less serious. It is now respected well beyond feminism. Fourth, and this is crucial: feminist philosophers disagree enormously about what follows. Liberal thinkers focused on equal rights within existing institutions. Radical thinkers argued the institutions themselves needed deeper change. Difference thinkers argued women's distinct experiences should be valued rather than erased, sometimes directly contradicting thinkers who argued differences were mostly imposed, not essential. Later, intersectional thinkers argued gender can't be separated from race and class, and criticized earlier feminists for centering privileged women. These are real, sharp disagreements. That is the opposite of a unified slogan. The honest summary: powerful shared questions and tools, and vigorous, ongoing disagreement about the answers, exactly like any serious field.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Strong Arguments, Weak Arguments, And Bad Faith`,
          paragraphs: [
            `Here is where your clear-thinking toolkit earns its keep, because a charged topic like this attracts a full range of reasoning quality — from genuinely strong arguments to lazy ones to outright bad faith — and learning to sort them is the real skill. The same is true on every side of every heated issue, which is exactly why practicing it here is so valuable. Let's grade the kinds of moves you'll actually encounter, the way you graded sources in the lesson on knowledge. A strong argument on any side looks the same: it makes a specific, checkable claim, offers real evidence, acknowledges complexity, and can state what would change its mind. "Here is a specific law or practice, here is evidence of its effects, here is the fairness principle I think it violates, and here is what would make me reconsider" — that is serious thinking, and it deserves serious engagement whether or not you end up agreeing.`,
            `Then there are weaker moves, and they show up on all sides. Overgeneralizing from one example to "this is how all of them are." Treating a contested conclusion as if it were an obvious fact that only a bad person could doubt. Using an emotionally powerful story as if it settled a statistical question. Sliding from a true premise ("this group was historically treated unfairly") to a much stronger conclusion that doesn't strictly follow, without doing the work to connect them. None of these mean the underlying concern is wrong — a weak argument for a claim doesn't make the claim false — but a careful thinker notices the gap between the strength of the claim and the strength of the support, and asks for better.`,
            `And then there is bad faith, which is the most important to spot because it is designed to shut down thinking rather than do it. On a charged topic, watch for: people arguing against a cartoon version of the other side instead of its strongest form (the straw man you learned in logic); people using the topic mainly to signal which team they're on rather than to figure anything out; people treating any disagreement as proof the other person is evil, so the actual arguments never get examined; and people exploiting a real and serious issue to sell something, gain followers, or stoke outrage. Here is the liberating part: once you can grade reasoning this way, you are free. You don't have to accept or reject "feminism" as a package, and you don't have to pick a team and defend everything it says. You can do the genuinely intelligent thing — agree with the strong arguments wherever they come from, push back on the weak ones wherever they come from, and refuse the bad-faith moves entirely. That is what it looks like to think for yourself on a hard topic instead of being thought for.`,
          ],
          image: `/voyager-assets/frontier/l12-s3-grading.webp`,
          imageCaption: `Your clear-thinking toolkit earns its keep here — a charged topic attracts every quality of reasoning, from strong to lazy to bad faith, and sorting them is the real skill (true on EVERY side of every heated issue, which is why practicing here is valuable). A STRONG argument, any side, looks the same: specific checkable claim, real evidence, acknowledges complexity, can say what would change its mind ("here's a specific practice, evidence of its effects, the fairness principle I think it violates, and what would make me reconsider") — serious thinking, deserves serious engagement whether or not you agree. WEAKER moves (all sides): overgeneralizing from one example to "all of them"; treating a contested conclusion as obvious fact only a bad person could doubt; using an emotional story to settle a statistical question; sliding from a true premise ("this group was treated unfairly historically") to a much stronger conclusion without connecting them. A weak argument for a claim doesn't make the claim false — but notice the gap between claim strength and support strength, and ask for better. BAD FAITH (most important to spot — designed to stop thinking): straw-manning the other side; using the topic to signal which team you're on; treating any disagreement as proof the other person is evil; exploiting a real issue to sell, farm followers, or stoke outrage. The liberating part: grade reasoning this way and you're FREE — agree with strong arguments wherever they come from, push back on weak ones wherever they come from, refuse bad faith entirely. That's thinking for yourself instead of being thought for.`,
          vocab: [
            {
              word: `grading arguments on a charged topic`,
              definition: `A charged topic attracts a full range of reasoning quality, from genuinely strong arguments to lazy ones to outright bad faith, and learning to sort them is the real skill, true on every side of every heated issue, which is why practicing it here is valuable, much like grading sources in the lesson on knowledge. A strong argument on any side looks the same: it makes a specific, checkable claim, offers real evidence, acknowledges complexity, and can state what would change its mind, as in "here is a specific law or practice, here is evidence of its effects, here is the fairness principle I think it violates, and here is what would make me reconsider," which is serious thinking that deserves serious engagement whether or not one agrees. Weaker moves show up on all sides: overgeneralizing from one example to "this is how all of them are," treating a contested conclusion as if it were an obvious fact only a bad person could doubt, using an emotionally powerful story as if it settled a statistical question, and sliding from a true premise such as "this group was historically treated unfairly" to a much stronger conclusion that does not strictly follow without doing the work to connect them, none of which mean the underlying concern is wrong, since a weak argument for a claim does not make the claim false, but a careful thinker notices the gap between the strength of the claim and the strength of the support and asks for better. Then there is bad faith, the most important to spot because it is designed to shut down thinking rather than do it: arguing against a cartoon version of the other side instead of its strongest form (the straw man from logic), using the topic mainly to signal which team one is on rather than to figure anything out, treating any disagreement as proof the other person is evil so the actual arguments never get examined, and exploiting a real and serious issue to sell something, gain followers, or stoke outrage. The liberating part is that once one can grade reasoning this way one is free, not having to accept or reject "feminism" as a package or pick a team and defend everything it says, but able to do the genuinely intelligent thing of agreeing with the strong arguments wherever they come from, pushing back on the weak ones wherever they come from, and refusing the bad-faith moves entirely, which is what it looks like to think for oneself on a hard topic instead of being thought for.`,
              audioPrompt: `Here is where your clear-thinking toolkit earns its keep, {name}, because a charged topic like this attracts a full range of reasoning quality, from genuinely strong arguments to lazy ones to outright bad faith, and learning to sort them is the real skill. The same is true on every side of every heated issue, which is exactly why practicing it here is so valuable. A strong argument on any side looks the same: it makes a specific, checkable claim, offers real evidence, acknowledges complexity, and can state what would change its mind. "Here is a specific law or practice, here is evidence of its effects, here is the fairness principle I think it violates, and here is what would make me reconsider." That is serious thinking, and it deserves serious engagement whether or not you agree. Then there are weaker moves, and they show up on all sides: overgeneralizing from one example to "this is how all of them are," treating a contested conclusion as if it were obvious fact that only a bad person could doubt, using an emotional story as if it settled a statistical question, or sliding from a true premise to a much stronger conclusion that doesn't strictly follow. None of these mean the underlying concern is wrong, but a careful thinker notices the gap between the strength of the claim and the strength of the support. And then there is bad faith, the most important to spot because it is designed to shut down thinking rather than do it: arguing against a cartoon version of the other side instead of its strongest form, using the topic to signal which team you're on, treating any disagreement as proof the other person is evil, and exploiting a real issue to sell something or stoke outrage. Here is the liberating part: once you can grade reasoning this way, you are free. You don't have to accept or reject feminism as a package, and you don't have to pick a team and defend everything it says. You can agree with the strong arguments wherever they come from, push back on the weak ones wherever they come from, and refuse the bad-faith moves entirely. That is what it looks like to think for yourself instead of being thought for.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Thinking Freely On A Topic Everyone Has Feelings About`,
          paragraphs: [
            `Let's name directly the thing that makes this lesson different from, say, metaphysics: almost everyone already has feelings about this topic before they think about it, including you, including the people around you, including me if I had a personal life. That is not a problem to be ashamed of — it is just the condition you reason under here, and naming it is the first step to reasoning well. The danger of a topic everyone has feelings about is that the feelings can do your thinking for you: you can find yourself defending a "side" you were sorted into by your family, your friend group, or an algorithm that learned outrage keeps you scrolling, and mistake that reflex for a conclusion you actually reasoned your way to. The philosopher's move is to notice the feeling, respect it as real, and then still insist on examining the arguments on their own merits — which is harder here precisely because it matters more to people.`,
            `This connects directly to the tribalism trap you learned in political philosophy. On charged topics, our minds quietly switch from "what's true and fair?" to "what does my team believe, and how do I defend it against the enemy?" The moment that switch flips, real thinking stops and team-defense begins — and the tragedy is it feels exactly like thinking, just with more certainty and more emotion. Feminist philosophy, handled as philosophy, is actually a superb training ground for resisting this, because it forces you to hold several things at once that the tribal mind wants to collapse: that an idea can be powerful AND have weak versions; that a concern can be legitimate AND be argued for badly; that thoughtful people of good will genuinely disagree about the specifics; and that understanding the strongest version of a view you're unsure about is a sign of strength, not surrender.`,
            `So here is the genuinely mature position, the one this whole band has been building toward. You can take the deep questions seriously — about power, fairness, and whose experience gets counted — and recognize that they are real and have genuinely improved the world, WITHOUT signing up for a fixed set of answers, WITHOUT treating everyone who disagrees with a specific conclusion as an enemy, and WITHOUT pretending the field speaks with one voice. You get to be the kind of person who can discuss a hot topic at a dinner table and actually make it better — calmer, clearer, more honest — instead of hotter. That is rare and valuable. It comes from exactly the skill we've practiced: separate the question from the slogan, grade the arguments honestly wherever they come from, notice when your feelings or your tribe are doing your thinking for you, and stay genuinely curious about what's true rather than anxious about which side you're on. Do that, and a charged topic becomes not a trap but an opportunity — to show what clear, fair, independent thinking actually looks like.`,
          ],
          image: `/voyager-assets/frontier/l12-s4-thinkingfreely.webp`,
          imageCaption: `What makes this different from metaphysics: almost everyone already has FEELINGS about this topic before thinking about it — you, the people around you, everyone. Not shameful — just the condition you reason under, and naming it is step one. The danger of a topic everyone has feelings about: the feelings can do your thinking for you. You can defend a "side" you were sorted into by family, friends, or an algorithm that learned outrage keeps you scrolling — and mistake that reflex for a conclusion you reasoned to. The philosopher's move: notice the feeling, respect it as real, then still examine the arguments on their merits (harder here precisely because it matters more). This is the TRIBALISM trap from political philosophy: on charged topics the mind quietly switches from "what's true and fair?" to "what does my team believe, and how do I defend it against the enemy?" — and the tragedy is it feels exactly like thinking, just with more certainty and emotion. Feminist philosophy handled AS philosophy is superb training against this, forcing you to hold what the tribal mind wants to collapse: an idea can be powerful AND have weak versions; a concern can be legitimate AND argued for badly; thoughtful people of good will genuinely disagree; understanding the strongest version of a view you're unsure about is strength, not surrender. The mature position: take the deep questions seriously (they're real and improved the world) WITHOUT signing up for fixed answers, WITHOUT treating everyone who disagrees as an enemy, WITHOUT pretending the field speaks with one voice. Be the person who makes a hot topic at the dinner table better — calmer, clearer — not hotter. A charged topic becomes not a trap but a chance to show what clear, fair, independent thinking looks like.`,
          vocab: [
            {
              word: `reasoning freely on an emotionally charged topic`,
              definition: `What makes this lesson different from a topic like metaphysics is that almost everyone already has feelings about it before they think about it, including the learner and the people around them, which is not a problem to be ashamed of but the condition one reasons under, and naming it is the first step to reasoning well. The danger of a topic everyone has feelings about is that the feelings can do the thinking, so one can find oneself defending a "side" one was sorted into by family, friend group, or an algorithm that learned outrage keeps people scrolling, and mistake that reflex for a conclusion actually reasoned to, whereas the philosopher's move is to notice the feeling, respect it as real, and still insist on examining the arguments on their merits, which is harder here precisely because it matters more to people. This connects to the tribalism trap from political philosophy, since on charged topics minds quietly switch from "what's true and fair?" to "what does my team believe, and how do I defend it against the enemy?", and the moment that switch flips real thinking stops and team-defense begins, the tragedy being that it feels exactly like thinking but with more certainty and emotion. Feminist philosophy handled as philosophy is a superb training ground for resisting this because it forces one to hold several things at once that the tribal mind wants to collapse: that an idea can be powerful and have weak versions, that a concern can be legitimate and be argued for badly, that thoughtful people of good will genuinely disagree about specifics, and that understanding the strongest version of a view one is unsure about is a sign of strength rather than surrender. The genuinely mature position the band has been building toward is that one can take the deep questions seriously, about power, fairness, and whose experience gets counted, and recognize that they are real and have genuinely improved the world, without signing up for a fixed set of answers, without treating everyone who disagrees with a specific conclusion as an enemy, and without pretending the field speaks with one voice, so that one becomes the kind of person who can discuss a hot topic and actually make it better, calmer, clearer, and more honest, rather than hotter, which comes from separating the question from the slogan, grading arguments honestly wherever they come from, noticing when feelings or tribe are doing the thinking, and staying genuinely curious about what is true rather than anxious about which side one is on, turning a charged topic from a trap into an opportunity to show what clear, fair, independent thinking actually looks like.`,
              audioPrompt: `Let's name directly the thing that makes this lesson different from, say, metaphysics, {name}: almost everyone already has feelings about this topic before they think about it. Including you, including the people around you. That is not a problem to be ashamed of; it is just the condition you reason under here, and naming it is the first step to reasoning well. The danger of a topic everyone has feelings about is that the feelings can do your thinking for you. You can find yourself defending a side you were sorted into by your family, your friend group, or an algorithm that learned outrage keeps you scrolling, and mistake that reflex for a conclusion you actually reasoned your way to. The philosopher's move is to notice the feeling, respect it as real, and then still insist on examining the arguments on their own merits. This connects to the tribalism trap you learned in political philosophy. On charged topics, our minds quietly switch from "what's true and fair?" to "what does my team believe, and how do I defend it?" The moment that switch flips, real thinking stops and team-defense begins, and the tragedy is it feels exactly like thinking, just with more certainty and emotion. Feminist philosophy, handled as philosophy, is a superb training ground for resisting this, because it forces you to hold several things the tribal mind wants to collapse: that an idea can be powerful AND have weak versions, that a concern can be legitimate AND be argued for badly, that thoughtful people of good will genuinely disagree, and that understanding the strongest version of a view you're unsure about is strength, not surrender. So here is the mature position. You can take the deep questions seriously, about power, fairness, and whose experience gets counted, and recognize they are real and have genuinely improved the world, without signing up for a fixed set of answers, without treating everyone who disagrees as an enemy, and without pretending the field speaks with one voice. You get to be the kind of person who can discuss a hot topic and actually make it better, calmer and clearer, instead of hotter. That is rare and valuable.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before the activity. You learned to set the noise aside and see feminist philosophy as what it actually is: a serious branch of thought asking deep, familiar questions — about fairness, about whose experience counts, about which assumptions we never examine — pointed at one of the largest patterns in human history. You learned four powerful ideas it contributed (the "default experience" insight, the public/private distinction, care ethics, and the recognition that all of these generalize well beyond gender), AND you learned that feminist philosophers disagree sharply with each other, so "feminism says X" is usually a slogan, not an accurate description of a contested, living field. You practiced grading the reasoning — strong arguments, weak arguments, and bad faith — and saw that this skill applies to every side of every heated issue. And you faced the hardest part honestly: how to think freely on a topic everyone already has feelings about, by noticing the tribalism trap and refusing to let your feelings or your team do your thinking for you.`,
            `Now the source-evaluation screen puts that grading skill directly to work. You will see several claims and arguments about gender, power, and fairness — deliberately spanning the full range from genuinely strong reasoning to weak reasoning to outright bad faith. Your job is exactly what it was in the knowledge lesson: not to decide whether you agree with the conclusion, but to evaluate the QUALITY of the reasoning. Is this claim specific and checkable, or vague? Is there real evidence, or just a powerful feeling? Does it acknowledge complexity and what might change its mind, or treat a contested point as obvious? Is it engaging the strongest version of the other side, or a straw man? Is it trying to figure something out, or just signal a team and shut down thought? Grade the reasoning, not the team.`,
            `One last thing to carry, because it is bigger than this one topic. The skill you are practicing today — taking something charged, emotional, and tribal, and thinking about it with the same clear standards you'd bring to anything else — is one of the rarest and most valuable abilities a person can have. Most people, most of the time, do the opposite: they let the heat of a topic switch off their judgment, and then they are easily herded, by their own side as much as the other. The person who can stay genuinely thoughtful when the temperature rises is free in a way most people never manage — free from being manipulated by outrage, free from defending things they don't actually believe just because their team does, free to change their mind when the evidence is good and hold firm when it isn't. Feminist philosophy is today's training ground for that freedom, but the freedom itself is the prize, and you'll use it on a hundred topics this one barely touches. Let's grade some reasoning.`,
          ],
          image: `/voyager-assets/frontier/l12-s5-before.webp`,
          imageCaption: `Threads together. See feminist philosophy as what it is: a serious branch of thought asking deep, familiar questions — fairness, whose experience counts, which assumptions we never examine — pointed at one of history's largest patterns. FOUR contributions (the "default experience" insight, public/private distinction, care ethics, and that all generalize beyond gender), AND feminist philosophers disagree sharply, so "feminism says X" is usually a slogan, not a contested living field. You practiced GRADING reasoning — strong / weak / bad faith — a skill for every side of every heated issue. And the hardest part: thinking freely on a topic everyone has feelings about, noticing the tribalism trap, refusing to let feelings or team do your thinking. The source-evaluation screen ahead: claims about gender, power, fairness spanning strong → weak → bad-faith reasoning. Your job (as in the knowledge lesson): not whether you agree with the conclusion, but the QUALITY of the reasoning — specific and checkable or vague? real evidence or just feeling? acknowledges complexity and what would change its mind, or treats contested points as obvious? engaging the strongest other side or a straw man? figuring out or signaling a team? Grade the reasoning, not the team. Last thing, bigger than this topic: taking something charged and tribal and thinking about it with the same clear standards is one of the rarest, most valuable abilities there is. Most people let the heat switch off judgment and get herded — by their own side as much as the other. Stay thoughtful when the temperature rises and you're free: from outrage-manipulation, from defending what you don't believe, free to change your mind on good evidence and hold firm without. The freedom is the prize.`,
          vocab: [
            {
              word: `grade the reasoning, not the team`,
              definition: `The synthesis before the activity: feminist philosophy is a serious branch of thought asking deep, familiar questions about fairness, about whose experience counts, and about which assumptions we never examine, pointed at one of the largest patterns in human history, and it contributed four powerful ideas (the "default experience" insight, the public/private distinction, care ethics, and the recognition that all of these generalize well beyond gender) while feminist philosophers disagree sharply with each other, so "feminism says X" is usually a slogan rather than an accurate description of a contested, living field. One practices grading the reasoning into strong arguments, weak arguments, and bad faith, a skill that applies to every side of every heated issue, and faces honestly how to think freely on a topic everyone already has feelings about by noticing the tribalism trap and refusing to let feelings or team do the thinking. The source-evaluation screen puts the grading skill to work on several claims and arguments about gender, power, and fairness deliberately spanning the full range from genuinely strong reasoning to weak reasoning to outright bad faith, where the job, as in the knowledge lesson, is not to decide whether one agrees with the conclusion but to evaluate the quality of the reasoning: whether the claim is specific and checkable or vague, whether there is real evidence or just a powerful feeling, whether it acknowledges complexity and what might change its mind or treats a contested point as obvious, whether it engages the strongest version of the other side or a straw man, and whether it is trying to figure something out or just signal a team and shut down thought, so one grades the reasoning, not the team. The larger point is that the skill of taking something charged, emotional, and tribal and thinking about it with the same clear standards one would bring to anything else is among the rarest and most valuable abilities a person can have, since most people let the heat of a topic switch off their judgment and are then easily herded by their own side as much as the other, whereas the person who stays genuinely thoughtful when the temperature rises is free from being manipulated by outrage, free from defending things they do not actually believe because their team does, and free to change their mind when the evidence is good and hold firm when it is not, so feminist philosophy is the training ground but the freedom itself is the prize, usable on a hundred topics this one barely touches.`,
              audioPrompt: `Pull it together before the activity, {name}. You learned to set the noise aside and see feminist philosophy as what it actually is: a serious branch of thought asking deep, familiar questions, about fairness, about whose experience counts, about which assumptions we never examine, pointed at one of the largest patterns in human history. You learned four powerful ideas it contributed: the default-experience insight, the public/private distinction, care ethics, and the recognition that all of these generalize well beyond gender. And you learned that feminist philosophers disagree sharply with each other, so "feminism says X" is usually a slogan, not an accurate description of a contested, living field. You practiced grading the reasoning, strong arguments, weak arguments, and bad faith, and saw that this applies to every side of every heated issue. And you faced the hardest part honestly: how to think freely on a topic everyone already has feelings about, by noticing the tribalism trap and refusing to let your feelings or your team do your thinking for you. Now the source-evaluation screen puts that grading skill to work. You will see several claims and arguments about gender, power, and fairness, deliberately spanning the full range from genuinely strong reasoning to weak reasoning to outright bad faith. Your job is exactly what it was in the knowledge lesson: not to decide whether you agree with the conclusion, but to evaluate the quality of the reasoning. Is the claim specific and checkable, or vague? Real evidence, or just a powerful feeling? Does it acknowledge complexity and what would change its mind, or treat a contested point as obvious? Is it engaging the strongest version of the other side, or a straw man? Is it trying to figure something out, or just signal a team? Grade the reasoning, not the team. One last thing, because it is bigger than this topic. The skill you are practicing, taking something charged and tribal and thinking about it with the same clear standards you'd bring to anything else, is one of the rarest and most valuable abilities a person can have. Most people let the heat switch off their judgment, and then they are easily herded, by their own side as much as the other. The person who stays thoughtful when the temperature rises is free: free from outrage, free from defending what they don't believe, free to change their mind on good evidence and hold firm without it. Feminist philosophy is today's training ground, but the freedom is the prize.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l12-source-evaluation`,
          type: `source-evaluation`,
          headline: `Grade The Reasoning, Not The Team`,
          intro: `{name}, several claims and arguments about gender, power, and fairness — spanning strong reasoning, weak reasoning, and bad faith. Your job is NOT to decide if you agree with the conclusion. It's to evaluate the QUALITY of the reasoning, exactly as you graded sources in the knowledge lesson. Is it specific and checkable? Real evidence or just feeling? Does it engage the strongest other side, or a straw man? Is it figuring something out, or signaling a team? Grade the reasoning.`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `A strong, specific, evidence-based argument`,
              type: `Strong reasoning`,
              context: `Someone argues a specific point and supports it carefully: "Until recently, much medical research was done mostly on male bodies, and some drugs were later found to affect women differently. That's a real, documented problem worth fixing — and here's the kind of evidence that shows it, and here's what would change my mind about how widespread it still is."`,
              quote: `"Here's a specific, documented pattern, here's the evidence for it, here's the fairness principle I think it violates, and here's what would make me reconsider how big the problem is now."`,
              questions: [
                `Which marks of strong reasoning are present here?`,
                `Does agreeing or disagreeing with the conclusion matter for grading the reasoning?`,
                `Why does "here's what would change my mind" make an argument stronger, not weaker?`,
              ],
              evaluation: `Strong reasoning, regardless of where you land on the conclusion. It makes a specific, checkable claim (not "everything is unfair" but a particular documented pattern), offers real evidence, names the exact fairness principle at stake, and — crucially — states what would change its mind, which is the mark of someone actually thinking rather than team-defending. This is exactly the kind of argument that deserves serious engagement: you might agree, or you might examine the evidence and push back on the scale of the problem, but either way you're having a real conversation about real things. Note the key skill: you graded this as strong reasoning without having to first decide whether you "agree with feminism." The quality of the reasoning is a separate question from the conclusion, and a clear thinker evaluates it on its own.`,
            },
            {
              id: `s2`,
              tier: `C`,
              title: `Overgeneralizing from one example`,
              type: `Weak reasoning`,
              context: `Someone makes a sweeping claim from a single instance: "My friend got treated unfairly by one manager who was a man, so this proves that all men in power discriminate against women, everywhere, always." The starting experience may be completely real, but watch what's being built on top of it.`,
              quote: `"This one thing happened to someone I know, therefore it's true of all of them, everywhere, all the time."`,
              questions: [
                `What's the gap between the evidence offered and the conclusion drawn?`,
                `Does the weak argument mean the underlying concern isn't real?`,
                `What would turn this into a stronger argument?`,
              ],
              evaluation: `Weak reasoning — specifically, overgeneralizing from one example to a universal claim, a flaw you met in the logic lesson. The individual experience might be entirely real and genuinely unfair, and that matters; but "this happened once to someone I know" does not support "this is true of all men in power, everywhere, always." That's an enormous leap the evidence doesn't carry. Crucially, grading the argument as weak is NOT the same as saying the underlying concern is false — a weak argument for a claim doesn't make the claim wrong, it just means THIS argument doesn't establish it. A careful thinker would say: the experience is real and worth taking seriously, and to actually know how widespread the pattern is, we'd need broad evidence, not one story stretched to cover everyone. Respecting the experience and noticing the logical overreach at the same time is exactly the balance.`,
            },
            {
              id: `s3`,
              tier: `D`,
              title: `The straw man and the team-signal`,
              type: `Bad faith`,
              context: `Someone "argues" by attacking a cartoon: "Feminists just hate men and want women to rule over everyone — so anything they say can be ignored." It doesn't engage any actual feminist philosopher's argument; it invents a silly version, knocks it down, and signals which team the speaker is on.`,
              quote: `"They obviously all just hate men and want to take over, so there's no need to actually listen to any of their arguments."`,
              questions: [
                `What logical fallacy from the logic lesson is this?`,
                `Is this trying to figure something out, or do something else?`,
                `Why is this move equally available — and equally bad — on any side of a debate?`,
              ],
              evaluation: `Bad faith, and a textbook straw man from the logic lesson: instead of engaging the strongest version of any actual argument, it invents a cartoon ("they all just hate men and want to take over") that few if any serious feminist philosophers would recognize, then knocks the cartoon down. Notice what it's really doing: not trying to figure anything out, but signaling team membership and giving permission to dismiss an entire field without examining a single real argument. This is the move that shuts down thinking rather than doing it. And here's the essential point for staying clear-headed: this exact move is available on every side of every charged topic — you can straw-man feminists, OR straw-man their critics, equally lazily. A clear thinker refuses it in all directions, insisting on engaging the strongest real version of any view, not the most ridiculous one. When you see a cartoon being knocked down, you're watching team-signaling, not reasoning — whoever is doing it.`,
            },
            {
              id: `s4`,
              tier: `B`,
              title: `A real disagreement between thoughtful people`,
              type: `Legitimate contested reasoning`,
              context: `Two thoughtful people disagree in good faith: one argues "treating men and women exactly the same in every situation is the fairest approach"; the other argues "real fairness sometimes means recognizing genuine differences in people's situations, not ignoring them." Both give reasons; both acknowledge the other has a point; neither claims the question is obvious.`,
              quote: `"I think fairness means identical treatment." / "I think fairness sometimes means accounting for real differences." / "I see why you'd say that — here's where I still disagree."`,
              questions: [
                `Is this a case where one side is reasoning badly, or a genuine hard disagreement?`,
                `How is this different in KIND from the straw man in the previous case?`,
                `Does a good thinker have to pick a winner here immediately?`,
              ],
              evaluation: `This is legitimate, good-faith disagreement about a genuinely hard question — and recognizing it as different in kind from bad faith is itself a key skill. Notice the marks of honest reasoning on BOTH sides: each gives actual reasons, each acknowledges the other has a point, and neither pretends the answer is obvious or that the other person is evil for disagreeing. This mirrors a real, deep split within feminist philosophy itself (the "sameness vs. difference" debate) — thinkers of good will genuinely disagreeing, which is what a living field looks like, not a unified slogan. Unlike the straw man, nobody here is attacking a cartoon; they're engaging each other's strongest case. And a good thinker does NOT have to crown a winner on the spot: it's completely legitimate to say "both capture something real, this is genuinely hard, and I want to think more." Knowing the difference between a hard disagreement worth sitting with and a bad-faith move worth refusing is much of what clear thinking on charged topics actually is.`,
            },
            {
              id: `s5`,
              tier: `D`,
              title: `Exploiting a real issue to sell or enrage`,
              type: `Bad faith`,
              context: `An online account constantly posts the most outrageous, infuriating examples it can find — about gender, framed to make one group look monstrous — racking up shares, followers, and ad revenue. It never engages a real argument; it just maximizes outrage, and the outrage is the product.`,
              quote: `"Look at this INFURIATING thing one person did — share if you agree this proves the other side is evil! [link to merch]"`,
              questions: [
                `What is this account actually optimizing for — truth, or something else?`,
                `How does the algorithm reward this, regardless of which "side" it's on?`,
                `What's the clear-thinking defense against being used this way?`,
              ],
              evaluation: `Bad faith of a particularly modern kind: this isn't reasoning at all, it's outrage-farming, and the outrage is literally the product being sold (for shares, followers, ad money, or merch). Notice it never engages a real argument — it curates the most infuriating possible example and frames it to make a whole group look monstrous, because anger drives engagement and engagement drives profit. The crucial insight: this exact machine runs on every side of every charged topic, because the algorithm rewards outrage regardless of its political direction — there are accounts doing this aimed at every "enemy" you could name. The defense is the clear thinking you've practiced all band: notice when something is engineered to make you furious rather than to inform you; ask "is this the strongest version of the other side, or the most outrageous cherry-picked one?"; and refuse to let your genuine, legitimate concern about a real issue be hijacked into rage-fuel for someone's revenue. Caring about fairness is good; being a profit-generating outrage-puppet is not the same thing, and telling them apart is the skill.`,
            },
          ],
          synthesisPrompt: `Look back at the five. Two were bad faith (s3, s5), one was weak reasoning (s2), one was strong (s1), and one was a legitimate hard disagreement (s4). In your own words: what's the difference between a WEAK argument and a BAD-FAITH one — and why does it matter to keep them separate? Then answer: did grading the reasoning require you to first decide whether you "agree with feminism"? Why is being able to separate those two things so powerful? 6-7 sentences.`,
          reflectionPrompt: `Think about a charged topic where you've noticed yourself (or someone close to you) defending a "side" with more certainty than the actual evidence justified. What flipped the switch from thinking to team-defending? How might you catch that switch flipping in yourself next time?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your thinking`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `How does the lesson say we should approach feminist philosophy?`,
              options: [
                `As a political team to either join and defend or oppose and attack.`,
                `As a serious branch of philosophy asking deep questions about power and fairness.`,
                `As a settled set of correct answers that every good person already accepts.`,
                `As an outdated topic that careful thinkers no longer need to consider at all.`,
              ],
              correctIndex: 1,
              explanation: `The lesson treats feminist philosophy as philosophy, not activism or a political team: a serious branch of thought asking deep, familiar questions — about power, fairness, whose experience gets counted, and which assumptions go unexamined. That means taking its strongest ideas seriously, looking honestly at the real disagreements within it, and using the same clear thinking you'd bring to any hard question — not picking a side and cheering.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why is "feminism says X" usually a sign of a slogan rather than accurate description?`,
              options: [
                `Because feminism actually has no ideas or claims of any kind to describe.`,
                `Because only critics of feminism ever describe it, never its supporters.`,
                `Because feminist philosophers disagree sharply with each other — it's a contested, living field.`,
                `Because the real beliefs of feminism are secret and never written down anywhere.`,
              ],
              correctIndex: 2,
              explanation: `There's no single thing "feminism says" because feminist philosophers have disagreed intensely with each other for over a century — liberal, radical, difference, and intersectional thinkers genuinely argue that the others got it wrong. That internal disagreement isn't a weakness; it's what a living field of serious thought looks like. So "feminism believes X," as if it were one unified voice handing down commandments, is usually the sound of a slogan (from a supporter OR a critic), not an accurate description.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `The "whose experience counts as the default?" idea generalizes beyond gender. What's the deep point?`,
              options: [
                `Whenever one group's experience is treated as "just how things are," other groups become invisible.`,
                `Only the experiences of the largest group in a society should ever count as the default.`,
                `Every group's experience is exactly the same, so there's never really a default at all.`,
                `Experiences don't matter in philosophy — only abstract logic and pure reason do.`,
              ],
              correctIndex: 0,
              explanation: `The deep point: whenever one group's experience gets treated as "just how things are" — the universal standard — other groups' experiences become invisible, treated as special cases or simply not studied. Feminist philosophers noticed this about "human nature," medical research, even city design built around male experience. But the tool generalizes far past gender: it's a powerful way to think clearly about ANY group whose experience gets erased by being treated as non-default.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the difference between a WEAK argument and a BAD-FAITH one?`,
              options: [
                `There's no difference — both just mean an argument you happen to disagree with.`,
                `A weak argument is honest but reasons poorly; bad faith is designed to shut down thinking.`,
                `A weak argument comes from the other team; a bad-faith one comes from your own.`,
                `A weak argument is always false, while a bad-faith argument is always true.`,
              ],
              correctIndex: 1,
              explanation: `A weak argument is a genuine attempt at reasoning that just does it poorly — overgeneralizing, using a story to settle a statistical question, leaping from a true premise to an unsupported conclusion. Bad faith is different in kind: it's not trying to figure anything out at all — it straw-mans the other side, signals team membership, treats disagreement as proof of evil, or farms outrage to sell something. Keeping them separate matters: a weak argument can still point at a real concern (and deserves a better argument), while bad faith is designed to stop thought and should be refused outright.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Does grading an argument's reasoning require first deciding whether you agree with its conclusion?`,
              options: [
                `Yes — you can't tell if reasoning is good until you know the conclusion is correct.`,
                `Yes — good reasoning is just any reasoning that reaches the conclusion you prefer.`,
                `No — the quality of the reasoning is a separate question from the conclusion.`,
                `No — but only because conclusions don't matter, just feelings about them.`,
              ],
              correctIndex: 2,
              explanation: `The quality of the reasoning is a separate question from whether the conclusion is correct — and being able to separate them is the whole power of the skill. You can recognize a specific, evidence-based, complexity-acknowledging argument as STRONG without first deciding you agree with it, and recognize a straw man as bad faith even if it's defending a view you like. This frees you from having to accept or reject "feminism" as a package: agree with strong arguments wherever they come from, push back on weak ones wherever they come from.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the "tribalism trap" as it applies to charged topics?`,
              options: [
                `The mind switches from "what's true and fair?" to "what does my team believe?" — and it feels like thinking.`,
                `The tendency for people to go live in actual physical tribes instead of in modern societies with laws.`,
                `Believing that small groups are always wiser than large ones about fairness.`,
                `The rule that you must always agree with whatever your family believes about politics.`,
              ],
              correctIndex: 0,
              explanation: `On charged topics, the mind quietly switches from "what's true and fair?" to "what does my team believe, and how do I defend it against the enemy?" — and the tragedy is that team-defense feels exactly like thinking, just with more certainty and emotion. The moment that switch flips, real reasoning stops. Feminist philosophy handled AS philosophy is good training against it, because it forces you to hold things the tribal mind wants to collapse — like "an idea can be powerful AND have weak versions."`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the lesson say outrage-farming accounts run on "every side" of a charged topic?`,
              options: [
                `Because only one political side has ever used social media to spread messages.`,
                `Because outrage is rare, so accounts have to share it across all sides to find any.`,
                `Because the algorithm rewards outrage regardless of its political direction.`,
                `Because all sides secretly agree and are only pretending to disagree for money.`,
              ],
              correctIndex: 2,
              explanation: `The algorithm rewards engagement, and outrage drives engagement, regardless of political direction — so the same outrage-farming machine runs on every side, with accounts aimed at every "enemy" you could name. They curate the most infuriating cherry-picked example, frame a whole group as monstrous, and sell the resulting anger (for shares, followers, ad money). The defense: notice when something is engineered to enrage rather than inform, and refuse to let a genuine concern be hijacked into rage-fuel for someone's revenue.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the mature position the lesson builds toward?`,
              options: [
                `Take the deep questions seriously without signing up for fixed answers or treating dissenters as enemies.`,
                `Pick whichever side your friends are on and defend everything it says loyally.`,
                `Simply decide that the whole topic is far too heated to think about clearly, and avoid it entirely.`,
                `Accept every claim made in the name of fairness so no one can call you unfair.`,
              ],
              correctIndex: 0,
              explanation: `The mature position: take the deep questions (power, fairness, whose experience counts) seriously and recognize they've genuinely improved the world — WITHOUT signing up for a fixed set of answers, WITHOUT treating everyone who disagrees with a specific conclusion as an enemy, and WITHOUT pretending the field speaks with one voice. That lets you be the rare person who can discuss a hot topic and make it calmer, clearer, and more honest instead of hotter — thinking for yourself rather than being thought for.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If someone makes a weak, overgeneralized argument for a claim, that proves the claim itself must be false.`,
              correctAnswer: false,
              explanation: `False — and keeping this straight is essential for clear thinking. A weak argument for a claim does not make the claim false; it just means THIS particular argument doesn't establish it. Someone might overgeneralize wildly from one example to support a conclusion that, as it happens, broader evidence would actually support — their reasoning is bad even though the conclusion might be true. (The reverse is also true: a slick, well-delivered argument can support a false conclusion.) This is why a careful thinker evaluates the reasoning and the conclusion as separate questions: you note "this argument is weak and doesn't prove the point" without jumping to "therefore the opposite is true." To actually know whether the claim is true, you'd look for strong evidence — not just judge it by the quality of one person's argument for it.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Online, you see two posts about a gender-and-fairness issue. One calmly lays out a specific claim with evidence and says "here's what would change my mind." The other shows a rage-bait clip of one person behaving badly, captioned "THIS is what they're ALL like — share to own them!" Using this lesson, how should you think about them?`,
              options: [
                `"Whichever one has more likes and shares is probably the more trustworthy of the two."`,
                `"These two posts are doing completely different things, and telling them apart is the whole skill. The first has the marks of strong reasoning, regardless of whether I end up agreeing: a specific, checkable claim, actual evidence, and — crucially — 'here's what would change my mind,' which is the sound of someone trying to figure out what's true rather than defend a team. It deserves real engagement; I can weigh the evidence and agree or push back on the merits. The second is bad faith of the most modern kind: outrage-farming. It doesn't engage any real argument — it cherry-picks the single most infuriating example, frames a whole group as monstrous ('this is what they're ALL like,' which is also a straw man and a wild overgeneralization), and explicitly tries to trigger sharing through anger ('share to own them'). The outrage is the product. And I should remember this exact machine runs on every side — there are rage-bait accounts aimed at every 'enemy,' because the algorithm rewards fury regardless of direction. So I refuse to let it hijack me: I notice it's engineered to enrage rather than inform, I don't mistake my spike of anger for having learned anything, and I don't let a genuine concern about a real issue get turned into rage-fuel for someone's follower count. The number of likes tells me nothing about which is true — outrage usually gets MORE engagement, not less. Grade the reasoning, not the heat: take the careful argument seriously, refuse the rage-bait, on every side."`,
                `"Random."`,
                `"Both are equally fine since they're both just people sharing their opinions online."`,
              ],
              correctIndex: 1,
              explanation: `The skill is telling the two apart. The first post shows strong reasoning regardless of your view: specific checkable claim, real evidence, and "what would change my mind" — the sound of truth-seeking, deserving real engagement. The second is outrage-farming (bad faith): it engages no real argument, cherry-picks the most infuriating example, frames a whole group as monstrous ("this is what they're ALL like" = straw man + wild overgeneralization), and is engineered to trigger angry sharing — the outrage is the product. That machine runs on every side, because the algorithm rewards fury regardless of direction. The defense: notice it's built to enrage not inform, don't mistake anger for learning, refuse to let a real concern become rage-fuel. And likes tell you nothing about truth — outrage gets MORE engagement. Grade the reasoning, not the heat.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-default`, category: `Whose default?`, prompt: `Think of a time you were treated as a "special case" because something was designed around a different group's experience as the default (anything — left-handedness, age, body size, background). What did that reveal about how easy it is for one group's experience to become invisible?` },
            { id: `reflect-grade`, category: `Strong vs. bad faith`, prompt: `Recall an argument you saw recently on any heated topic. Was it strong reasoning, weak reasoning, or bad faith? How could you tell? Did your judgment depend on whether you agreed with its conclusion?` },
            { id: `reflect-switch`, category: `The switch`, prompt: `Be honest: when has your own mind switched from "what's true?" to "how do I defend my team?" What did it feel like from the inside? Could you catch it next time?` },
            { id: `reflect-disagree`, category: `Good-faith disagreement`, prompt: `Think of a hard question where thoughtful people genuinely disagree (not because one side is evil). Why is it valuable to be able to recognize a real disagreement as different from bad faith — and to NOT have to pick a winner immediately?` },
            { id: `reflect-ragebait`, category: `Outrage as product`, prompt: `When did something online make you furious and want to share it? Looking back, was it trying to inform you or to enrage you? How does it change things to realize the outrage might have been the product being sold?` },
            { id: `reflect-freedom`, category: `The real prize`, prompt: `The lesson says staying thoughtful when the temperature rises is "a form of freedom." Free from what, exactly? What would it take for you to have that freedom on the topics you care about most?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `You'll meet charged topics your whole life — gender and a hundred others. The skill of thinking clearly when the temperature rises is one of the most valuable you can build. Two ways to practice.`,
          familyActivity: {
            title: `The Reasoning-Grader Challenge`,
            duration: `40 minutes`,
            description: `Become a family of reasoning-graders on charged topics — using gender-and-fairness questions and any other heated issue your family encounters. The rule that makes it work, and makes it safe: you are NOT debating who's right about the conclusions. You're grading the QUALITY of arguments, together, as a team. Gather a few real examples — a social media post, an opinion piece, an ad, a clip — touching on power, fairness, or "whose experience counts." For each, grade it together using the lesson's tiers: Is this strong reasoning (specific, evidenced, acknowledges complexity, says what would change its mind)? Weak reasoning (overgeneralizing, a story used to settle a statistic, a true premise stretched to an unsupported conclusion)? Or bad faith (straw-manning the other side, pure team-signaling, treating disagreement as evil, or outrage-farming to sell something)? Practice the hardest move out loud: grade an argument as STRONG even when you're not sure you agree with it, and grade one as WEAK or bad-faith even when it's "on your side." That's the whole skill. Try especially to spot outrage-farming and name what it's really selling. End with a conversation about the tribalism trap — when have each of you felt your mind switch from "what's true?" to "defend my team?" — and how a family might help each other catch it. The goal isn't agreement on every issue; it's becoming people who can think clearly together even when a topic is hot.`,
          },
          projectOption: {
            title: `The Clear-Thinking-On-Hard-Topics Toolkit, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Build a personal toolkit for reasoning well about charged topics — using feminist-philosophy questions as the training ground, but aimed at a skill that transfers everywhere. Week 1: each day, take one real claim or argument about gender, power, or fairness (from anywhere — news, social media, a book, a conversation) and analyze it carefully in writing. For each: What exactly is being claimed? Is it specific and checkable or vague? What evidence is offered — real data, or a single story, or just confident feeling? Does it acknowledge complexity and say what would change its mind? Is it engaging the strongest version of the other side, or a straw man? Grade it: strong, weak, or bad faith — and be sure to include examples from more than one "side," and at least one argument you AGREE with that is nonetheless weakly argued. Week 2: turn it into a reusable toolkit. Write up the key questions for grading any argument on any heated topic; a guide to the warning signs of bad faith (straw-manning, team-signaling, treating disagreement as evil, outrage-farming); and a short section, in your own words, on the tribalism trap — how to notice when your feelings or your team are doing your thinking, and how to switch back to actually reasoning. Include a personal reflection on a topic where you changed or refined your view by grading arguments honestly rather than defending a side. Finish with your own definition of what it means to "think for yourself" on a topic everyone has feelings about. The result is a genuinely portable skill — one you'll use on dozens of topics this one barely touches, for the rest of your life.`,
            offerToParent: `Parent: opt your child into the Clear-Thinking-On-Hard-Topics Toolkit. Using feminist philosophy as the training ground, your child practices a skill that transfers to every charged subject they'll ever encounter: grading the QUALITY of an argument (strong / weak / bad faith) separately from whether they agree with its conclusion. The project is deliberately and carefully even-handed — it requires analyzing arguments from more than one side, including weak arguments for positions they agree with, and it explicitly teaches the difference between a legitimate good-faith disagreement and bad-faith moves like straw-manning and outrage-farming. The deeper aim is resistance to the "tribalism trap" — the tendency, which affects everyone, to let team loyalty replace actual reasoning on heated topics. This builds genuine intellectual independence and media literacy, and the framing throughout respects that thoughtful people of good will disagree about specific conclusions. It does not push any particular political position; it teaches your child to think clearly and fairly when the temperature rises.`,
          },
          identityQuestion: `If you become someone who can take any charged, emotional, tribal topic — gender or any other — and think about it with the same clear standards you'd bring to anything else, grading arguments honestly wherever they come from, noticing when your feelings or your team are doing your thinking, and staying curious about what's true rather than anxious about which side you're on — how much freer does that make you, across a whole life of people trying to tell you what to believe and which team to join?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who grades the reasoning, not the team.`,
            `A person who can stay thoughtful even when a topic gets hot.`,
            `Someone who won't let outrage do their thinking for them.`,
          ],
          saveKey: `identity_responses_fp_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelve lessons in, and you just did something genuinely hard and genuinely rare: you took a topic that most of the world treats as a fight to win, and you thought about it as philosophy. You can now see feminist philosophy for what it is — a serious, contested field asking deep questions about power, fairness, and whose experience counts, with real internal disagreement rather than one unified voice. You learned four ideas it gave the world that reach far beyond gender, and you sharpened the skill that matters most on any heated topic: grading reasoning honestly — strong, weak, or bad faith — separately from whether you agree with the conclusion. Most of all, you practiced the rarest freedom there is: thinking clearly when the temperature rises, refusing to let your feelings or your tribe think for you, and being the person who can make a hot conversation better instead of hotter. That skill is worth more than any single opinion, and you'll use it for the rest of your life. Next, we travel far from the Western tradition we've mostly walked so far, to some of the oldest and deepest wisdom humanity has produced: Eastern philosophy — the insights of Zen, Vedanta, and Taoism. Different questions, different methods, and ideas that can genuinely change how you experience being alive. See you there. — Orion`,
          badge: `fairness-thinker`,
          badgeName: `Thinker on Fairness and Power`,
          xpEarned: 75,
          competencies: [
            `Understands feminist philosophy as a serious, contested branch of thought — not a slogan or political team — asking deep questions about power, fairness, and whose experience counts`,
            `Knows several of its durable contributions (the "default experience" insight, the public/private distinction, care ethics) and that they generalize beyond gender`,
            `Recognizes that feminist philosophers disagree sharply, so "feminism says X" usually signals a slogan rather than an accurate description`,
            `Can grade reasoning on a charged topic — strong, weak, or bad faith — separately from agreeing with the conclusion`,
            `Distinguishes weak arguments from bad-faith moves (straw-manning, team-signaling, outrage-farming) and from legitimate good-faith disagreement`,
            `Understands the tribalism trap and how to notice when feelings or team loyalty replace genuine reasoning`,
            `Can think independently and fairly on emotionally charged topics, resisting manipulation by outrage from any side`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Eastern Philosophy`,
            hook: `The deep insights of Zen, Vedanta, and Taoism — different questions, different methods, and ideas that can change how you experience being alive.`,
          },
        },
      ],
    },
  ],
};

export default FRONTIER_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = FRONTIER_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FRONTIER-VOYAGER-L12 ${VERSION}] "${l.title}" guide=${FRONTIER_VOYAGER_L12.guide} mags=${mags} sources=${src} q=${quiz} r=${reflect}`
  );
}
