// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L16 — Performance and the Body
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Performance Art, The Body as Medium, Aesthetics, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: CASE STUDY (sort real performance works and the "is it art or a
// stunt?" questions they raise). Contract matches L04/L07/L09/L12: cases[] with
// title/type/description/questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// SENSITIVITY: performance art history includes works involving real physical risk and
// endurance. Treated thoughtfully and age-appropriately, describing that such works
// exist and what questions they raise, WITHOUT glorifying self-harm, without graphic
// detail, and with an explicit "this is not something to imitate" frame. The lesson's
// stance: understanding and evaluating challenging art is valuable; copying dangerous
// acts is not. Keeps examples conceptual (Abramović's presence/endurance, body-as-medium)
// rather than dwelling on injury.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l16-v1";

const CREATIVE_ARTS_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-16`,
      title: `Performance and the Body`,
      duration: 35,
      xpReward: 75,
      badge: `performance-art-literate`,
      badgeName: `Performance Art Literate`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, every art form we have looked at involved something the artist made, a painting, a building, a song, an immersive room. Now meet a form where the artwork is the artist, where the medium is a living person's own body, presence, and actions, unfolding in real time in front of you. It is called performance art, and it is one of the most debated, most misunderstood, and most powerful forms there is. A person sits silently across from strangers for hours. An artist uses their own body to make a point about endurance, identity, or pain. Some of it is genuinely profound, and some of it really is just shock for attention, and a huge, interesting argument lives in between. One honest note before we start: some performance art involves real physical risk, and we will talk about why artists have done that and how to think about it, but understanding challenging art is not the same as copying it, and this lesson is about the first, never the second. Onward.`,
          headline: `Performance and the Body`,
          subtitle: `When the artist's body is the artwork: profound, or a stunt? Case Study.`,
          visual: `/voyager-assets/creative-arts/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When The Body Is The Medium`,
          paragraphs: [
            `Start with the core idea, because it is genuinely strange and worth understanding clearly. Performance art is art in which the artist's own body and actions, happening live in front of an audience, are the artwork itself, rather than something they made and left behind. There is no painting to hang afterward and often no object at all, the art is the event: what the artist does, how long they do it, what happens in the room, and what the audience experiences while it unfolds. When the performance ends, the artwork is, in a sense, over, surviving mainly as memory, photographs, or video, which is itself part of what makes the form unusual.`,
            `This is a real shift from everything else in this band. A painting exists after the artist leaves; a performance often exists only in the doing. That changes what the art can be about. Performance artists frequently use their own bodies and presence to explore things that are hard to capture in an object, the passage of time, physical endurance, the relationship between artist and audience, identity, vulnerability, presence itself. One famous artist, Marina Abramović, once sat silently at a table in a museum for many days, inviting strangers to sit across from her one at a time and simply share her gaze; the "artwork" was that shared human presence, the long silence, the emotion that passed between two people looking at each other. You cannot hang that on a wall, you can only be there, or not.`,
            `Because there is often no object and no obvious skill like realistic painting on display, performance art confuses and frustrates many people, and that reaction is understandable, not stupid. "My kid could do that" or "that's not art, it's just a person sitting there" are common responses, and they point at a real question this lesson takes seriously: if anyone could physically do the action, what, if anything, makes it art? That is not a dumb question, it is the central question of the whole form, and rather than dismiss it, you are going to learn to actually answer it, sometimes concluding "yes, this is profound," and sometimes concluding "no, this is empty," using real reasons either way.`,
          ],
          image: `/voyager-assets/creative-arts/l16-s1-medium.webp`,
          imageCaption: `The core idea, genuinely strange and worth understanding: performance art is art where the artist's own body and actions, happening LIVE before an audience, are the artwork itself, not something made and left behind. Often no object at all, the art is the event, what the artist does, how long, what happens in the room, what the audience experiences, and when it ends the artwork is in a sense over, surviving as memory, photos, or video. A real shift: a painting exists after the artist leaves; a performance often exists only in the doing. So performance artists use body and presence to explore what is hard to capture in an object: time, endurance, the artist-audience relationship, identity, vulnerability, presence itself. Marina Abramović once sat silently at a museum table for days, inviting strangers to share her gaze one at a time, the artwork was that shared human presence. Because there is often no object or obvious skill, many people are confused or frustrated ("my kid could do that"), which points at the form's real central question: if anyone could do the action, what makes it art?`,
          vocab: [
            {
              word: `performance art: the body as the medium`,
              definition: `Performance art is art in which the artist's own body and actions, happening live in front of an audience, are the artwork itself, rather than something they made and left behind. There is no painting to hang afterward and often no object at all: the art is the event, what the artist does, how long they do it, what happens in the room, and what the audience experiences while it unfolds, so when the performance ends the artwork is in a sense over, surviving mainly as memory, photographs, or video, which is part of what makes the form unusual. This is a real shift from everything else in the band: a painting exists after the artist leaves, while a performance often exists only in the doing, and that changes what the art can be about. Performance artists frequently use their own bodies and presence to explore things hard to capture in an object, the passage of time, physical endurance, the relationship between artist and audience, identity, vulnerability, and presence itself. The artist Marina Abramović once sat silently at a table in a museum for many days, inviting strangers to sit across from her one at a time and simply share her gaze, so the "artwork" was that shared human presence, the long silence, and the emotion passing between two people looking at each other, something you cannot hang on a wall but can only be present for. Because there is often no object and no obvious display of skill like realistic painting, performance art confuses and frustrates many people, and that reaction is understandable, not stupid: "my kid could do that" or "that's just a person sitting there" point at a real question the form raises, namely, if anyone could physically do the action, what, if anything, makes it art? That is the central question of the whole form, and the goal is to learn to actually answer it, sometimes "yes, profound" and sometimes "no, empty," with real reasons either way.`,
              audioPrompt: `Start with the core idea, {name}, because it is genuinely strange and worth understanding clearly. Performance art is art in which the artist's own body and actions, happening live in front of an audience, are the artwork itself, rather than something they made and left behind. There is no painting to hang afterward and often no object at all: the art is the event, what the artist does, how long they do it, what happens in the room, and what the audience experiences while it unfolds. When the performance ends, the artwork is, in a sense, over, surviving mainly as memory, photographs, or video. This is a real shift from everything else in this band. A painting exists after the artist leaves; a performance often exists only in the doing. Performance artists frequently use their own bodies and presence to explore things that are hard to capture in an object: the passage of time, physical endurance, the relationship between artist and audience, identity, vulnerability, presence itself. One famous artist, Marina Abramović, once sat silently at a table in a museum for many days, inviting strangers to sit across from her one at a time and simply share her gaze; the artwork was that shared human presence, the long silence, the emotion that passed between two people looking at each other. Because there is often no object and no obvious skill like realistic painting on display, performance art confuses and frustrates many people, and that reaction is understandable, not stupid. "My kid could do that" points at a real question: if anyone could physically do the action, what makes it art? That is the central question of the whole form, and you are going to learn to actually answer it, with real reasons.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Can Make It Profound`,
          paragraphs: [
            `So what can make performance art genuinely powerful, when there is no object and sometimes no obvious skill? The answer is that the meaning, not the object, is the point, and a few real sources of power show up again and again. The first is presence and time. We almost never give another person our full, silent attention for a long stretch; a performance that creates real, sustained human presence, like sitting in silence with a stranger, can produce something genuinely moving precisely because it is so rare in ordinary life. The "skill" is not in the hands but in creating and holding a real human moment, which is harder than it looks.`,
            `The second source of power is using the body to say something that words or objects cannot say as well. An artist might use physical endurance, repetition, or vulnerability to make an audience actually feel an idea about exhaustion, oppression, identity, or human limits, rather than just hear it described. When the body itself carries the message, the audience does not just understand the point, they feel it in their own bodies as they watch, which can be far more powerful than a painting of the same idea. The body becomes a kind of language for things that are about the body, presence, and being alive.`,
            `The third source is breaking the wall between artist and audience. In most art, the audience is safely separate, looking at a finished thing. Performance can pull the audience into the work, making them participants, witnesses, or even decision-makers, which can be uncomfortable in a way that is part of the point. By removing the safe distance, performance can make people confront something directly, their own reactions, their responsibility, their discomfort, that a framed painting lets them keep at arm's length. So at its best, performance art is profound not despite having no object but because of it: with nothing to hide behind, the art is pure meaning, presence, and human encounter, doing things no other form can do. That is the real case for taking it seriously.`,
          ],
          image: `/voyager-assets/creative-arts/l16-s2-profound.webp`,
          imageCaption: `What can make performance art genuinely powerful when there is no object and sometimes no obvious skill: the MEANING, not the object, is the point, with real recurring sources of power. (1) Presence and time: we almost never give another person full, silent attention for long, so a performance creating real sustained human presence (sitting in silence with a stranger) can move us precisely because it is so rare; the skill is in holding a real human moment, harder than it looks. (2) The body saying what words/objects cannot: using endurance, repetition, or vulnerability so an audience FEELS an idea (about exhaustion, oppression, identity, limits) in their own bodies, not just hears it described. (3) Breaking the wall between artist and audience: pulling people in as participants or witnesses, removing the safe distance so they confront their own reactions and discomfort directly. At its best, performance is profound BECAUSE of having no object, pure meaning, presence, and human encounter.`,
          vocab: [
            {
              word: `what can make performance art profound`,
              definition: `What can make performance art genuinely powerful, when there is no object and sometimes no obvious skill, is that the meaning, not the object, is the point, and a few real sources of power recur. The first is presence and time: we almost never give another person our full, silent attention for a long stretch, so a performance that creates real, sustained human presence (like sitting in silence with a stranger) can be genuinely moving precisely because it is so rare in ordinary life, and the "skill" is not in the hands but in creating and holding a real human moment, which is harder than it looks. The second is using the body to say something words or objects cannot say as well: an artist might use physical endurance, repetition, or vulnerability to make an audience actually feel an idea about exhaustion, oppression, identity, or human limits rather than just hear it described, so when the body itself carries the message the audience feels it in their own bodies as they watch, which can be far more powerful than a painting of the same idea, the body becoming a kind of language for things that are about the body, presence, and being alive. The third is breaking the wall between artist and audience: in most art the audience is safely separate, looking at a finished thing, but performance can pull the audience in as participants, witnesses, or decision-makers, which can be uncomfortable in a way that is part of the point, removing the safe distance so people confront their own reactions, responsibility, and discomfort directly, things a framed painting lets them keep at arm's length. So at its best, performance art is profound not despite having no object but because of it: with nothing to hide behind, the art is pure meaning, presence, and human encounter, doing things no other form can do, which is the real case for taking it seriously.`,
              audioPrompt: `So what can make performance art genuinely powerful, {name}, when there is no object and sometimes no obvious skill? The answer is that the meaning, not the object, is the point, and a few real sources of power show up again and again. The first is presence and time. We almost never give another person our full, silent attention for a long stretch; a performance that creates real, sustained human presence, like sitting in silence with a stranger, can produce something genuinely moving precisely because it is so rare in ordinary life. The skill is not in the hands but in creating and holding a real human moment, which is harder than it looks. The second source of power is using the body to say something that words or objects cannot say as well. An artist might use physical endurance, repetition, or vulnerability to make an audience actually feel an idea about exhaustion, identity, or human limits, rather than just hear it described. When the body itself carries the message, the audience does not just understand the point, they feel it in their own bodies as they watch. The third source is breaking the wall between artist and audience. Performance can pull the audience into the work, making them participants or witnesses, which can be uncomfortable in a way that is part of the point. By removing the safe distance, performance can make people confront something directly that a framed painting lets them keep at arm's length. So at its best, performance art is profound not despite having no object but because of it: with nothing to hide behind, the art is pure meaning, presence, and human encounter.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Shock, Risk, And The Honest Cautions`,
          paragraphs: [
            `Now the part that needs care, because performance art has a long history of shock and physical risk, and you deserve an honest, grown-up treatment of it rather than either glamorizing or hiding it. Some performance artists have deliberately put their own bodies through pain, danger, or extreme endurance as part of their work, to confront audiences with the reality of the body, suffering, or human limits. These works are real, they are part of art history, and serious people have argued about whether they are profound or reckless. We are going to think about why an artist might do that and how to evaluate it, but here is the firm frame: understanding why challenging art exists is valuable, while copying dangerous acts is not, and this lesson is only ever about the first.`,
            `So why have some artists used real risk or pain? The serious argument is that for certain ideas, about suffering, mortality, oppression, or the limits of the body, actually putting the real body on the line makes the audience confront something they could comfortably ignore if it were only described or depicted. Whether that justifies the risk is exactly what people debate, and reasonable people land in different places: some find such works genuinely powerful and important, others find them irresponsible or manipulative. You do not have to resolve that here. What matters is being able to think about it clearly, recognizing both the real artistic argument and the real concern, instead of either dismissing it as "just crazy" or romanticizing harm.`,
            `And here is the crucial, non-negotiable distinction, said plainly: there is a difference between an adult artist making an informed choice within a long artistic tradition, and a young person imitating something dangerous because it looked dramatic. Understanding that a challenging performance work exists, and being able to discuss what it might mean, is education. Copying a risky physical act because you saw it is not art, it is just danger, and no idea in this lesson is an invitation to hurt yourself or anyone else. The skill this lesson builds is the ability to look at difficult, even disturbing, art and think about it seriously as a mature person, which is the opposite of being driven to imitate it. If anything you ever see, in art or anywhere, makes harming yourself or others seem appealing, that is a moment to talk to a trusted adult, not a moment to make art.`,
          ],
          image: `/voyager-assets/creative-arts/l16-s3-risk.webp`,
          imageCaption: `The part that needs care: performance art has a long history of shock and physical risk, deserving honest, grown-up treatment, neither glamorizing nor hiding it. Some artists have deliberately put their bodies through pain, danger, or extreme endurance to confront audiences with the reality of the body, suffering, or human limits, real works, part of art history, genuinely debated. The firm frame: understanding why challenging art exists is valuable; copying dangerous acts is not, and this lesson is only ever about the first. Why use real risk? The serious argument: for certain ideas (suffering, mortality, oppression, the body's limits) putting the real body on the line makes audiences confront what they could ignore if only described, whether that justifies the risk is exactly what people debate, landing in different places. The crucial, non-negotiable distinction: an adult artist's informed choice within a tradition is NOT a young person imitating something dangerous because it looked dramatic. Understanding and discussing such work is education; copying a risky act is just danger. If anything ever makes harming yourself or others seem appealing, talk to a trusted adult.`,
          vocab: [
            {
              word: `shock, risk, and the honest cautions`,
              definition: `Performance art has a long history of shock and physical risk, and it deserves an honest, grown-up treatment rather than either glamorizing or hiding it. Some performance artists have deliberately put their own bodies through pain, danger, or extreme endurance as part of their work, to confront audiences with the reality of the body, suffering, or human limits; these works are real, part of art history, and serious people have argued about whether they are profound or reckless. The firm frame for thinking about them: understanding why challenging art exists is valuable, while copying dangerous acts is not, and this lesson is only ever about the first. Why have some artists used real risk or pain? The serious argument is that for certain ideas, about suffering, mortality, oppression, or the limits of the body, actually putting the real body on the line makes the audience confront something they could comfortably ignore if it were only described or depicted; whether that justifies the risk is exactly what people debate, and reasonable people land in different places, some finding such works genuinely powerful and important, others finding them irresponsible or manipulative, and you do not have to resolve that, only to think about it clearly, recognizing both the real artistic argument and the real concern rather than either dismissing it as "just crazy" or romanticizing harm. The crucial, non-negotiable distinction, said plainly: there is a difference between an adult artist making an informed choice within a long artistic tradition and a young person imitating something dangerous because it looked dramatic. Understanding that a challenging work exists and discussing what it might mean is education; copying a risky physical act because you saw it is not art, it is just danger, and no idea in this lesson is an invitation to hurt yourself or anyone else. If anything you ever see, in art or anywhere, makes harming yourself or others seem appealing, that is a moment to talk to a trusted adult, not a moment to make art.`,
              audioPrompt: `Now the part that needs care, {name}, because performance art has a long history of shock and physical risk, and you deserve an honest, grown-up treatment of it rather than either glamorizing or hiding it. Some performance artists have deliberately put their own bodies through pain, danger, or extreme endurance as part of their work, to confront audiences with the reality of the body, suffering, or human limits. These works are real, they are part of art history, and serious people have argued about whether they are profound or reckless. We are going to think about why an artist might do that and how to evaluate it, but here is the firm frame: understanding why challenging art exists is valuable, while copying dangerous acts is not, and this lesson is only ever about the first. So why have some artists used real risk or pain? The serious argument is that for certain ideas, about suffering, mortality, or the limits of the body, actually putting the real body on the line makes the audience confront something they could comfortably ignore if it were only described. Whether that justifies the risk is exactly what people debate, and reasonable people land in different places. Here is the crucial distinction, said plainly: there is a difference between an adult artist making an informed choice within a long artistic tradition, and a young person imitating something dangerous because it looked dramatic. Understanding that a challenging work exists, and discussing what it might mean, is education. Copying a risky physical act because you saw it is not art, it is just danger. If anything you ever see makes harming yourself or others seem appealing, that is a moment to talk to a trusted adult, not a moment to make art.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Art Or Stunt? Telling Them Apart`,
          paragraphs: [
            `Now the question the whole lesson points at: how do you tell genuine performance art from an empty stunt, since both can involve a person doing something dramatic or shocking in front of an audience? This matters because the world is full of attention-grabbing acts, some are real art, some are just shock for clicks dressed up in art language, and you should be able to tell them apart instead of either falling for everything or dismissing everything. The good news is that the same kind of honest questions you used for immersive art work here too.`,
            `Ask whether there is a real idea underneath, or just the shock. Genuine performance art is usually about something, time, presence, the body, identity, oppression, human connection, and the dramatic action serves that meaning. An empty stunt is shock for its own sake: it grabs attention but, when you ask "what is this actually about?", there is no real answer beyond "look at me." A useful test is whether the work would still mean something to a thoughtful person who understood its context, or whether it only "works" as a moment of shock that evaporates instantly, the same depth-versus-spectacle question from the last lesson, now about actions instead of light rooms.`,
            `Ask, too, about intention, context, and craft, while staying honest that this is hard. Is the artist working within a serious tradition, exploring a real question, with thought behind the choices, or just doing something outrageous for attention and calling it art to seem deep? Does the difficulty or discomfort serve a purpose, or is it shock with nothing behind it? Here is the honest part: these questions do not give clean, certain answers, and reasonable, thoughtful people genuinely disagree about specific performances, sometimes one person sees profound art where another sees a pretentious stunt, and both can make a real case. That ambiguity is not a failure of your thinking, it is the actual nature of a form that lives in meaning rather than craft. The goal is not a perfect verdict machine; it is to move past "I don't get it, so it's stupid" and "it's in a museum, so it must be genius" to a real, reasoned judgment you can explain, even knowing someone smart might disagree.`,
          ],
          image: `/voyager-assets/creative-arts/l16-s4-artorstunt.webp`,
          imageCaption: `The question the lesson points at: how to tell genuine performance art from an empty stunt, since both can involve someone doing something dramatic or shocking before an audience. It matters because the world is full of attention-grabbing acts, some real art, some shock-for-clicks in art language, and you should tell them apart without falling for everything or dismissing everything. The same honest questions from immersive art work here. Ask: is there a real idea underneath, or just the shock? Genuine performance is about something (time, presence, body, identity, oppression, connection) and the dramatic action serves that meaning; an empty stunt is shock for its own sake with no answer to "what is this about?" beyond "look at me", the depth-vs-spectacle test, now about actions. Ask about intention, context, craft, staying honest it is hard: serious tradition and real question, or outrageous-for-attention called art to seem deep? The honest part: no clean answers, thoughtful people genuinely disagree about specific works. The goal is a reasoned judgment you can explain, past both "I don't get it so it's stupid" and "it's in a museum so it's genius."`,
          vocab: [
            {
              word: `telling performance art from an empty stunt`,
              definition: `The question the whole lesson points at: how do you tell genuine performance art from an empty stunt, since both can involve a person doing something dramatic or shocking in front of an audience? This matters because the world is full of attention-grabbing acts, some real art, some just shock for clicks dressed up in art language, and you should be able to tell them apart instead of either falling for everything or dismissing everything, and the same honest questions you used for immersive art work here too. First, ask whether there is a real idea underneath, or just the shock: genuine performance art is usually about something (time, presence, the body, identity, oppression, human connection) and the dramatic action serves that meaning, while an empty stunt is shock for its own sake that grabs attention but has no real answer to "what is this actually about?" beyond "look at me," so a useful test is whether the work would still mean something to a thoughtful person who understood its context, or whether it only "works" as a moment of shock that evaporates instantly, the same depth-versus-spectacle question from the immersive-art lesson, now about actions. Second, ask about intention, context, and craft, while staying honest that this is hard: is the artist working within a serious tradition, exploring a real question, with thought behind the choices, or just doing something outrageous for attention and calling it art to seem deep, and does the difficulty or discomfort serve a purpose or is it shock with nothing behind it? The honest part is that these questions do not give clean, certain answers, and thoughtful people genuinely disagree about specific performances, sometimes one person sees profound art where another sees a pretentious stunt and both can make a real case, which is not a failure of your thinking but the actual nature of a form that lives in meaning rather than craft. The goal is not a perfect verdict machine but to move past "I don't get it, so it's stupid" and "it's in a museum, so it must be genius" to a real, reasoned judgment you can explain, even knowing someone smart might disagree.`,
              audioPrompt: `Now the question the whole lesson points at, {name}: how do you tell genuine performance art from an empty stunt, since both can involve a person doing something dramatic or shocking in front of an audience? This matters because the world is full of attention-grabbing acts. Some are real art, some are just shock for clicks dressed up in art language, and you should be able to tell them apart instead of either falling for everything or dismissing everything. The same kind of honest questions you used for immersive art work here too. Ask whether there is a real idea underneath, or just the shock. Genuine performance art is usually about something, time, presence, the body, identity, oppression, human connection, and the dramatic action serves that meaning. An empty stunt is shock for its own sake: it grabs attention but, when you ask what is this actually about, there is no real answer beyond "look at me." Ask, too, about intention, context, and craft. Is the artist working within a serious tradition, exploring a real question, or just doing something outrageous for attention and calling it art to seem deep? Here is the honest part: these questions do not give clean, certain answers, and reasonable, thoughtful people genuinely disagree about specific performances. That ambiguity is not a failure of your thinking, it is the actual nature of a form that lives in meaning rather than craft. The goal is not a perfect verdict machine; it is to move past "I don't get it, so it's stupid" and "it's in a museum, so it must be genius" to a real, reasoned judgment you can explain.`,
            },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together before the case studies. You learned what performance art is, art where the artist's own body and live actions are the artwork itself, often with no object left behind. You learned what can make it genuinely profound, presence and time, using the body to say what words cannot, and breaking the wall between artist and audience, so that at its best it is powerful because it has nothing to hide behind. You faced the honest cautions about shock and real risk, holding the firm line that understanding challenging art is valuable while copying dangerous acts is not. And you learned to tell art from empty stunt by asking whether there is a real idea underneath, while accepting that thoughtful people genuinely disagree about hard cases.`,
            `Now the case-study screen will hand you several realistic performance scenarios, a silent presence piece, a body-as-language endurance work, an empty shock-for-attention stunt, a participatory work that pulls in the audience, a borderline case people argue about, and ask you to evaluate each: is there a real idea underneath, what might it be doing, and is it genuine art, empty stunt, or honestly debatable? You will practice making reasoned judgments you can explain, not just gut reactions.`,
            `One last thing to carry, and it reaches past art. Performance art trains a rare and valuable skill: sitting with something confusing or uncomfortable long enough to actually think about it, instead of instantly reacting "that's stupid" or instantly accepting "that's genius." Most people, faced with something strange, grab a quick verdict to escape the discomfort of not knowing. The mature move, the one this whole band has been building toward, is to tolerate the discomfort, ask real questions, consider that there might be more here than you first saw, and also consider that there might be less, and arrive at a judgment you can actually defend. Performance art, precisely because it is so easy to dismiss and so easy to over-revere, is one of the best places there is to practice thinking past your first reaction. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l16-s5-before.webp`,
          imageCaption: `Threads together. Performance art is art where the artist's own body and live actions ARE the artwork, often with no object left behind. What can make it profound: presence and time, the body saying what words cannot, breaking the artist-audience wall, powerful because it has nothing to hide behind. The honest cautions about shock and real risk: understanding challenging art is valuable; copying dangerous acts is not. Telling art from empty stunt: is there a real idea underneath?, while accepting thoughtful people disagree about hard cases. The case-study screen ahead hands you scenarios (silent presence, body-as-language endurance, empty shock stunt, participatory work, a debatable borderline case) to evaluate with reasoned judgments you can explain. Last thought, beyond art: performance art trains sitting with something confusing long enough to actually think, instead of instantly reacting "stupid" or "genius", thinking past your first reaction is the band's core skill.`,
          vocab: [
            {
              word: `thinking past your first reaction`,
              definition: `The synthesis before the case studies. You learned what performance art is: art where the artist's own body and live actions are the artwork itself, often with no object left behind, surviving mainly as memory or documentation. You learned what can make it genuinely profound: presence and time (sustained real human attention, rare and moving), using the body to say what words or objects cannot (so the audience feels an idea about endurance, identity, or limits in their own bodies), and breaking the wall between artist and audience (pulling people in as participants or witnesses), so that at its best it is powerful precisely because it has nothing to hide behind, the art is pure meaning, presence, and encounter. You faced the honest cautions about shock and real physical risk, holding the firm, non-negotiable line that understanding why challenging art exists is valuable while copying dangerous acts is not, and that anything making self-harm or harm to others seem appealing is a reason to talk to a trusted adult, not to make art. And you learned to tell genuine art from an empty stunt by asking whether there is a real idea underneath that the dramatic action serves (versus shock for its own sake), and about intention, context, and craft, while honestly accepting that thoughtful people genuinely disagree about hard cases, since the form lives in meaning rather than craft. The case-study screen will hand you several realistic performance scenarios to evaluate as genuine art, empty stunt, or honestly debatable, practicing reasoned judgments you can explain. The last thing to carry reaches past art: performance art trains a rare, valuable skill, sitting with something confusing or uncomfortable long enough to actually think about it instead of instantly reacting "that's stupid" or "that's genius," tolerating the discomfort of not knowing, asking real questions, considering there might be more (or less) here than you first saw, and arriving at a judgment you can defend, which is one of the best places to practice thinking past your first reaction.`,
              audioPrompt: `Pull it together before the case studies, {name}. You learned what performance art is, art where the artist's own body and live actions are the artwork itself, often with no object left behind. You learned what can make it genuinely profound: presence and time, using the body to say what words cannot, and breaking the wall between artist and audience, so that at its best it is powerful because it has nothing to hide behind. You faced the honest cautions about shock and real risk, holding the firm line that understanding challenging art is valuable while copying dangerous acts is not. And you learned to tell art from empty stunt by asking whether there is a real idea underneath, while accepting that thoughtful people genuinely disagree about hard cases. Now the case-study screen will hand you several realistic performance scenarios and ask you to evaluate each: is there a real idea underneath, what might it be doing, and is it genuine art, empty stunt, or honestly debatable? One last thing to carry, and it reaches past art. Performance art trains a rare and valuable skill: sitting with something confusing or uncomfortable long enough to actually think about it, instead of instantly reacting "that's stupid" or instantly accepting "that's genius." Most people, faced with something strange, grab a quick verdict to escape the discomfort of not knowing. The mature move, the one this whole band has been building toward, is to tolerate the discomfort, ask real questions, consider that there might be more here than you first saw, and also consider that there might be less, and arrive at a judgment you can actually defend. Performance art is one of the best places there is to practice thinking past your first reaction.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l16-case-study`,
          type: `case-study`,
          headline: `Five Performances To Evaluate`,
          intro: `{name}, five performance scenarios. For each, work out whether there is a real idea underneath, what the work might be doing, and whether it reads as genuine art, empty stunt, or honestly debatable. Remember: thoughtful people disagree about hard cases, so a reasoned judgment you can explain matters more than a "correct" label.`,
          cases: [
            {
              id: `c1`,
              title: `The silent presence piece`,
              type: `Presence and time`,
              description: `An artist sits silently at a table in a museum for many days, inviting strangers to sit across from her one at a time and simply share her gaze in silence. Many visitors are unexpectedly moved, some to tears, by the experience of being truly seen and giving full attention. A passerby scoffs, "She's just sitting there. That's not art."`,
              questions: [
                `Is there a real idea underneath, or is it "just sitting"?`,
                `Why does "anyone could physically sit there" not settle whether it's art?`,
                `What is this piece actually doing for the people who participate?`,
              ],
              evaluation: `There is a real idea underneath, so this reads as genuine performance art, even though "anyone could physically sit there." The medium is presence and time: in ordinary life we almost never give or receive a stranger's full, silent, sustained attention, and the work creates exactly that rare human moment, which is why many participants are genuinely moved. The scoffer's "anyone could do that" misses the point in a revealing way: the art is not in a difficult physical skill but in conceiving and holding a real human encounter, which is harder and rarer than it looks. What it does for participants is real, it gives them an experience of being truly seen, of pure presence, that they cannot get in normal daily life. This is the clean case of meaning, not object, being the point, and the "skill" living in the idea and the human moment rather than in the hands.`,
            },
            {
              id: `c2`,
              title: `The body-as-language endurance work`,
              type: `The body saying what words cannot`,
              description: `An artist performs a long, physically demanding repetitive action (within safe limits, supervised) for hours, to make an audience feel the exhaustion and relentlessness of a kind of labor or oppression that the artist wants them to understand from the inside, not just hear described.`,
              questions: [
                `How does using the body differ from just explaining the idea in words?`,
                `Is there a real idea underneath, and does the physical difficulty serve it?`,
                `What makes this read as art rather than empty endurance?`,
              ],
              evaluation: `This reads as genuine performance art because the body is being used as a language for something that is genuinely about the body and endurance. Using the body differs from explaining in words because the audience does not just understand the idea of relentless labor or exhaustion, they feel it in their own bodies as they watch the action grind on, which can land far harder than a sentence or even a painting. There is a real idea underneath (the lived reality of a kind of labor or oppression), and the physical difficulty serves it directly, the exhaustion is the message, not decoration. What makes it art rather than empty endurance is exactly that the difficulty is meaningful: it is not "watch me suffer for attention" but "feel, in your body, this thing I want you to truly understand." If the same endurance had no idea behind it and existed only to shock or impress, it would tip toward stunt, here, the meaning is what makes it work.`,
            },
            {
              id: `c3`,
              title: `The shock-for-clicks stunt`,
              type: `Empty stunt`,
              description: `Someone does something outrageous and shocking in a public space, films it, and posts it with the caption "performance art," but when asked what it is about, they have no real answer beyond that it gets attention and views. The shock is the entire content; there is no idea it serves.`,
              questions: [
                `Apply the test: is there a real idea underneath, or just the shock?`,
                `Why does calling something "performance art" not automatically make it art?`,
                `How is this different from cases 1 and 2, which also broke from normal behavior?`,
              ],
              evaluation: `This reads as an empty stunt, not genuine performance art, and the test makes it clear: there is no real idea underneath, the shock is the entire content, and when asked "what is this about?" there is no answer beyond getting attention and views. Calling it "performance art" does not make it art, you cannot turn a stunt into art just by attaching the label, any more than crediting a song made it legal to use in an earlier lesson; the words do not do the work, the meaning has to. The difference from cases 1 and 2 is precisely the presence or absence of a real idea: the silent piece and the endurance work also broke from normal behavior, but each did so in service of genuine meaning (presence, or felt understanding of labor), while this exists only as shock for clicks. That is the whole distinction, dramatic action serving a real idea is art; dramatic action serving only attention, dressed in art language, is a stunt.`,
            },
            {
              id: `c4`,
              title: `The participatory work that pulls you in`,
              type: `Breaking the artist-audience wall`,
              description: `An artist creates a performance where the audience cannot stay safely separate: visitors must make a small choice, take an action, or respond, and the work is partly about how they react, their hesitation, their discomfort, their responsibility, rather than about the artist alone.`,
              questions: [
                `What is this work using that a framed painting cannot?`,
                `Why might the audience's discomfort be part of the point, not a flaw?`,
                `Is there a real idea underneath, and what might it be?`,
              ],
              evaluation: `This reads as genuine performance art using something no framed painting can: it removes the safe distance and makes the audience participants rather than observers, so the work is partly about their own reactions, hesitation, discomfort, and responsibility. The discomfort is part of the point, not a flaw, because being made to actually choose or respond, rather than safely watching, can force people to confront something about themselves, their reactions, their complicity, their values, that they could keep at arm's length in front of a painting. There is a real idea underneath: depending on the specific work, it might be about responsibility, trust, how people treat each other, or how we behave when we cannot just spectate. What makes it art rather than a stunt is that pulling the audience in serves a genuine question about them and about human behavior, the breaking of the wall is meaningful, not just provocative.`,
            },
            {
              id: `c5`,
              title: `The borderline case people argue about`,
              type: `Honestly debatable`,
              description: `A performance is strange, difficult, and provocative. Some serious critics call it profound and important; other serious, thoughtful people call it pretentious and empty. You genuinely cannot tell at a glance, and smart people who have studied it disagree with each other in good faith.`,
              questions: [
                `Does the existence of genuine disagreement mean nobody can judge it?`,
                `How do you form a reasoned view while accepting you might be wrong?`,
                `Why is "thoughtful people disagree" the honest answer for some works, not a cop-out?`,
              ],
              evaluation: `This is the honestly debatable case, and handling it well is the real maturity the lesson builds. Genuine disagreement does NOT mean nobody can judge it, it means the judgment is hard and reasonable people land differently, which is true of many real things, not a reason to give up thinking. You form a reasoned view the same way as always, asking whether there is a real idea underneath, whether the difficulty serves meaning, whether there is genuine intention and context, and then you take a position while honestly holding that a thoughtful person could see it differently. "Thoughtful people disagree" is the honest answer for some works, not a cop-out, because performance art lives in meaning rather than measurable craft, so unlike "did the dome stay up?" there is no single objective test; admitting real ambiguity where it genuinely exists is more honest than forcing a fake-confident verdict. The mature move is to have a reasoned, explainable opinion AND the humility to know someone smart might reasonably disagree, the opposite of both "it's obviously genius" and "it's obviously stupid."`,
            },
          ],
          synthesisPrompt: `After working through all five: what is your actual method for telling genuine performance art from an empty stunt? And how do you handle the honestly debatable cases, holding a reasoned opinion while accepting thoughtful people disagree, without sliding into "it's all stupid" or "it's all genius"? In 5-6 sentences.`,
          reflectionPrompt: `Performance art trains you to sit with something confusing instead of instantly judging it. Think of the last time you dismissed something as "stupid" or "weird" within seconds. If you had sat with it and asked "what might this be doing?", might your verdict have changed, or held? How do you know the difference?`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
              {
                id: `q1`,
                type: `multiple-choice`,
                question: `What is performance art, and how is it fundamentally different from a painting?`,
                options: [
                  `It is a painting made very quickly in front of a live audience instead of alone in a studio.`,
                  `The artist's own body and live actions are the artwork itself, often leaving no object behind.`,
                  `It is any art that is filmed and posted online rather than hung on a gallery wall.`,
                  `It is a sculpture the artist stands next to and explains to the audience in person.`,
                ],
                correctIndex: 1,
                explanation: `Performance art is art in which the artist's own body and live actions, happening in front of an audience, are the artwork itself, rather than something they made and left behind. There is often no object: the art is the event, surviving mainly as memory, photos, or video. This differs fundamentally from a painting, which exists as an object after the artist leaves, while a performance often exists only in the doing, letting it explore time, endurance, the artist-audience relationship, identity, vulnerability, and presence. The distractors reduce it to fast painting, online video, or a sculptor's talk, missing that the live action itself is the art.`,
              },
              {
                id: `q2`,
                type: `multiple-choice`,
                question: `What are the real sources of power that can make performance art profound, even with no object and no obvious skill?`,
                options: [
                  `Expensive materials, large crowds, and a famous artist's name attached to the event.`,
                  `Shock value, loud noise, and doing something nobody in the audience expected to see.`,
                  `Rare sustained presence, using the body to convey what words can't, and breaking the artist-audience wall.`,
                  `Perfect physical technique, long rehearsal, and a difficult action few people could perform.`,
                ],
                correctIndex: 2,
                explanation: `Three recurring sources, all flowing from meaning being the point, not the object. Presence and time: we rarely give a stranger full silent sustained attention, so a performance creating that moment can be genuinely moving. Using the body to say what words cannot: endurance, repetition, or vulnerability let the audience feel an idea in their own bodies. And breaking the wall between artist and audience: pulling people in as participants rather than safe observers. The distractors substitute money/fame, shock, or hard physical technique for the real sources, which are presence, embodied meaning, and human encounter.`,
              },
              {
                id: `q3`,
                type: `multiple-choice`,
                question: `What is the firm, non-negotiable line the lesson draws about performance art that involves shock or physical risk?`,
                options: [
                  `That all risky or shocking performance art should simply be banned and never discussed at all.`,
                  `That copying a risky act is fine as long as you understood the artwork that inspired it first.`,
                  `That the more dangerous a performance is, the more profound and serious it must really be.`,
                  `Understanding why challenging art exists is valuable; copying a dangerous act is not art, just danger.`,
                ],
                correctIndex: 3,
                explanation: `The line is that understanding why challenging or risky art exists is valuable, while copying dangerous acts is not, and the lesson is only ever about the first. Some artists have used pain, danger, or extreme endurance to confront audiences with the body's reality, and serious people debate whether such works are profound or reckless. But there is a non-negotiable distinction between an adult artist's informed choice within a tradition and a young person imitating something dangerous because it looked dramatic: discussing a work is education; copying a risky act is just danger. If anything ever makes harming yourself or others seem appealing, that is a moment to talk to a trusted adult. The distractors ban discussion, excuse copying, or romanticize danger.`,
              },
              {
                id: `q4`,
                type: `multiple-choice`,
                question: `What is the key test for telling genuine performance art from an empty stunt?`,
                options: [
                  `Whether there's a real idea underneath, or just shock that evaporates the instant it grabs attention.`,
                  `Whether the artist is already famous and the event was covered by major news outlets.`,
                  `Whether the action was physically difficult and required years of training to perform.`,
                  `Whether enough people in the audience were shocked, offended, or talked about it afterward.`,
                ],
                correctIndex: 0,
                explanation: `Ask whether there is a real idea underneath, or just the shock. Genuine performance art is usually about something (time, presence, the body, identity, oppression, connection), and the dramatic action serves that meaning, so it would still mean something to a thoughtful person who understood its context. An empty stunt is shock for its own sake: when you ask "what is this about?" there is no answer beyond "look at me." It helps to ask about intention, context, and craft. And calling something "performance art" does not automatically make it art, the label does no work. The distractors substitute fame, physical difficulty, or amount of shock for the real test, which is meaning.`,
              },
              {
                id: `q5`,
                type: `multiple-choice`,
                question: `Why is "thoughtful people genuinely disagree" the honest answer for some performance works, rather than a cop-out?`,
                options: [
                  `Because no one is ever truly qualified to judge any work of performance art at all.`,
                  `Because performance lives in meaning, so some works honestly admit more than one reasoned judgment.`,
                  `Because all opinions about art are equally valid, so disagreement can never actually be resolved.`,
                  `Because performance art is too new for anyone to have formed real opinions about it yet.`,
                ],
                correctIndex: 1,
                explanation: `Because performance art lives in meaning rather than measurable craft, some works genuinely admit more than one reasonable judgment, and serious people who have studied them disagree in good faith, one seeing profound art where another sees a pretentious stunt, both able to make a real case. Admitting real ambiguity where it exists is more honest than a fake-confident verdict. But genuine disagreement does not mean nobody can judge or that all opinions are equal, you still form a reasoned view and take a position while holding the humility that a thoughtful person could see it differently. The distractors slide into "nobody can judge," "all opinions equal," or "too new," none of which is the point.`,
              },
              {
                id: `q6`,
                type: `multiple-choice`,
                question: `Why doesn't "anyone could physically do that" settle whether something like the silent-presence piece is art?`,
                options: [
                  `Because the artist secretly trained for years to make the simple action only look easy to do.`,
                  `Because the audience could not actually physically do it, even though it appears that they could.`,
                  `Because the skill is in conceiving and holding a rare human moment, not in a hard physical feat.`,
                  `Because any action at all automatically becomes art the moment it happens inside a museum.`,
                ],
                correctIndex: 2,
                explanation: `In performance art the skill is often not in a difficult physical action but in conceiving and holding a real human moment, which is harder and rarer than it looks. With the silent-presence piece, "anyone could physically sit there" is true but misses the point: the art is the rare experience of sustained, full, silent attention between strangers, which is why many participants are moved to tears. Judging it only by "could I physically do the action?" measures the wrong thing, like judging a poem by whether you could write the same number of words. The distractors invent secret training, deny the audience could do it, or claim the museum makes it art, instead of relocating skill from the hands to the concept.`,
              },
              {
                id: `q7`,
                type: `multiple-choice`,
                question: `How does breaking the wall between artist and audience make some performance work powerful?`,
                options: [
                  `It makes the audience uncomfortable, and audience discomfort is always the real goal of art.`,
                  `It lets the artist avoid making any object, which saves time, money, and studio space.`,
                  `It guarantees the work will go viral, because people love being surprised and filmed.`,
                  `It removes safe distance so people confront their own reactions, when that serves a genuine idea.`,
                ],
                correctIndex: 3,
                explanation: `In most art the audience stays safely separate, looking at a finished thing from outside, but performance can pull people in as participants, witnesses, or decision-makers, so the piece becomes partly about their own reactions. Removing safe distance is powerful because it forces people to confront their hesitation, discomfort, or responsibility that a framed painting lets them keep at arm's length. What keeps this as art rather than mere provocation is that breaking the wall serves a genuine idea, so the discomfort is meaningful, not just shock. The distractors treat discomfort as the goal itself, reduce it to convenience, or to going viral, missing that it must serve a real question.`,
              },
              {
                id: `q8`,
                type: `multiple-choice`,
                question: `What broader life skill does the lesson say performance art is especially good for practicing?`,
                options: [
                  `Quickly deciding whether something is good or bad so you don't waste time thinking about it.`,
                  `Sitting with something confusing long enough to think, instead of snapping to "stupid" or "genius."`,
                  `Trusting experts and museums so you don't have to form your own opinion about difficult art.`,
                  `Learning to perform difficult physical actions so you can impress and surprise other people.`,
                ],
                correctIndex: 1,
                explanation: `The skill is sitting with something confusing or uncomfortable long enough to actually think about it, instead of instantly reacting "that's stupid" or instantly accepting "that's genius." Most people grab a quick verdict to escape the discomfort of not knowing, but the mature move is to tolerate that discomfort, ask real questions, consider there might be more (or less) than you first saw, and arrive at a judgment you can defend. Performance art is ideal practice because it is so easy to dismiss AND so easy to over-revere, pulling you toward both lazy verdicts at once. The skill transfers to any strange idea or unfamiliar viewpoint. The distractors are the snap-judgment habits the lesson is training you out of.`,
              },
              {
                id: `q9`,
                type: `true-false`,
                question: `True or false: If you call something "performance art," that label by itself makes it genuine art, even if there's no real idea behind it and it exists only to shock people for attention.`,
                correctAnswer: false,
                explanation: `False, and this is one of the central points of the lesson. The label "performance art" does no work by itself, the meaning has to. Genuine performance art is usually about something (time, presence, the body, identity, oppression, human connection), and the dramatic or unusual action serves that idea, so the work would still mean something to a thoughtful person who understood its context. An empty stunt is shock for its own sake: it grabs attention, but when you ask "what is this actually about?" there is no real answer beyond "look at me," and it only works as a burst of shock that evaporates instantly. Calling a stunt "performance art" to seem deep is exactly the move the lesson warns against, because slapping an art label on attention-seeking does not turn it into art. The honest test is to look past the label and ask whether there is a real idea underneath and whether the difficulty serves meaning, the same depth-versus-spectacle question applied to actions rather than objects.`,
              },
              {
                id: `q10`,
                type: `inference`,
                question: `You're 14 and see a video of a famous, difficult performance artwork. One friend laughs, "That's so stupid, my little brother could do that, it's not art." Another says, "It's in a museum and critics love it, so it's obviously genius and you just don't get it." A third friend turns to you. Using this whole lesson, what do you actually think and say?`,
                options: [
                  `Side with the first friend: if anyone could physically do the action, it can't really be art.`,
                  `Name that both grabbed lazy verdicts, reject each ("could do it" and "it's in a museum" both miss), offer the real test, and stay honest about genuine disagreement.`,
                  `Side with the second friend: museums and critics praised it, so it must be genuine genius.`,
                  `Refuse to weigh in, since performance art is too confusing for anyone your age to judge.`,
                ],
                correctIndex: 1,
                explanation: `Held together: both friends grabbed a lazy verdict to escape the discomfort of not knowing, and the lesson trains the harder, better thing. Name it gently, one snaps to "stupid," the other to "genius," neither is real evaluation. Reject the first friend's "my brother could do that," because the skill is often in conceiving and holding a human moment, not a hard physical feat, so "anyone could do it" no more settles it than "I could write that many words" settles whether a poem is good. Reject the second friend too, because "it's in a museum and critics love it" is just as lazy, and "you just don't get it" is not an argument. Offer the real method: is there a genuine idea underneath, and does the action serve it, or is it shock with no answer to "what is this about?" Be honest that for some works thoughtful people genuinely disagree, which is the truth, not a cop-out. And if real physical risk is involved, understanding is not the same as copying. The distractors are the two lazy verdicts plus a refusal to think.`,
              },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, what was your gut reaction to "performance art", that it's profound, or that it's silly people doing weird things? What changed when you saw what can make it genuinely powerful, and how to tell art from stunt? Did any of your dismissals soften, or hold up?` },
            { id: `reflect-presence`, category: `Presence and attention`, prompt: `The silent-presence piece works because sustained, full attention between people is so rare now. When did you last give someone, or get from someone, completely undivided attention with no phone, no distraction? What did it feel like? Why is it so rare?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson is about thinking past your first reaction. Are you more likely to snap to "that's stupid" or to "that must be genius" when you encounter something strange? What would it take for you to sit with the confusion a little longer before judging?` },
            { id: `reflect-firstreaction`, category: `Your first reaction`, prompt: `Think of something, art, an idea, a person, you dismissed within seconds, then later understood differently once you actually engaged. What made you reconsider? How could you trigger that "look again" reflex on purpose, before the snap judgment sticks?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `"Is there a real idea underneath, or just the shock?" works far beyond art, on viral stunts, provocative posts, attention-grabbing claims. Where have you seen something shocking dressed up as meaningful? How did you tell, or how could you tell, whether there was substance underneath?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Take the side you lean against. If you find performance art profound, make the strongest case that much of it is pretentious emptiness. If you find it silly, make the strongest case that it does something no other art can. Where does the side you resist have a real point?` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This lesson is really about thinking past your first reaction, a skill for everything. Two paths.`,
          familyActivity: {
            title: `The "Wait, What's It Doing?" Game`,
            duration: `40 minutes`,
            description: `As a family, practice thinking past the first reaction together, using performance art as the training ground. Look at a few examples of performance art (described or shown age-appropriately, focusing on presence, endurance, and participatory works rather than anything graphic) and let everyone share their honest gut reaction first, "that's amazing," "that's ridiculous," whatever it is. Then do the real work: for each piece, slow down and ask together, "what might this actually be doing? Is there a real idea underneath, or is it just shock?" Notice how often the slowed-down answer differs from the snap reaction, in both directions, sometimes a "that's stupid" turns out to have real depth, and sometimes an "ooh, deep" turns out to be empty. Then take it out of art: talk about a time each family member judged something or someone too fast and was wrong, and a time their fast judgment turned out right. The goal is to practice the move at the heart of this lesson, tolerating the discomfort of not instantly knowing, asking real questions, and arriving at a judgment you can actually explain, which matters far beyond art.`,
          },
          projectOption: {
            title: `Design A Performance Piece, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Design (and optionally, safely perform) a short performance piece built around a real idea, never around risk or shock. Week 1: choose an idea you genuinely want an audience to feel, not just understand, something safe and real, like the rarity of full attention, the experience of waiting, the feeling of being truly listened to, the weight of a repeated daily task, or the discomfort of being watched. Then design a simple, completely safe performance that uses presence, time, repetition, or audience participation to make people feel that idea (for example: silently giving a family member your complete undivided attention for several minutes; performing an everyday repetitive task slowly and deliberately so others notice it). The firm rule, straight from the lesson: absolutely nothing involving physical risk, pain, or danger, the power must come from idea, presence, and meaning, not from harm or shock. Week 2: refine it, optionally perform it for family, and write a short reflection on what idea you wanted the audience to feel, how presence or time or participation carried it, and whether it succeeded, plus how it felt to make art with no object at all. The point is to experience, as a maker, that real performance art's power comes from meaning and presence, never from danger.`,
            offerToParent: `Parent: opt your child into the design-a-performance project, and please review their idea to ensure it stays completely safe, the lesson is explicit that the power must come from presence, time, and meaning, never from any physical risk or shock. Designing a performance around a genuine idea (like the rarity of full attention) teaches that meaning, not object or spectacle or danger, is the real source of artistic power, and the "give someone your complete undivided attention" version is often quietly moving for the whole family.`,
          },
          identityQuestion: `If you become someone who can look at something strange, confusing, or provocative and actually think about what it's doing, instead of instantly snapping to "that's stupid" or "that's genius," what does that let you understand, in art and in people and in ideas, that someone ruled by their first reaction never will?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who asks "what is this doing?" before deciding it's stupid or genius.`,
            `A person who can sit with confusing things long enough to actually think.`,
            `Someone who knows real art comes from meaning, not shock or danger.`,
          ],
          saveKey: `identity_responses_ca_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixteen down. You took on one of the most dismissed and most over-revered art forms there is, and learned to think your own way through it. You learned what performance art is, art where the artist's own body and live actions are the artwork itself, often with no object left behind, and what can make it genuinely profound: presence and time, using the body to say what words cannot, and breaking the wall between artist and audience, so that at its best it is powerful precisely because it has nothing to hide behind. You faced the honest cautions about shock and real risk with a clear, firm line, understanding challenging art is valuable, copying dangerous acts is not, and anything that makes harm seem appealing is a reason to talk to a trusted adult. You learned to tell genuine art from an empty stunt by asking whether there is a real idea underneath, while accepting that thoughtful people genuinely disagree about hard cases and that a reasoned, explainable judgment beats a snap verdict. Most of all, you practiced the deepest skill of this whole band: sitting with something confusing long enough to actually think, refusing both "that's stupid" and "that's genius," and thinking past your first reaction. Next: film theory and visual language, the grammar behind every movie and video you watch. Onward, {name}. — Muse`,
          badge: `performance-art-literate`,
          badgeName: `Performance Art Literate`,
          xpEarned: 75,
          competencies: [
            `Explains performance art as the artist's own live body and actions being the artwork, and how that differs from object-based art`,
            `Identifies what can make performance art profound: presence and time, the body as a language, and breaking the artist-audience wall`,
            `Holds the firm line that understanding challenging or risky art is valuable while copying dangerous acts is not, and knows to seek a trusted adult if anything makes harm seem appealing`,
            `Tells genuine performance art from an empty stunt by asking whether a real idea underlies the dramatic action, knowing the "art" label alone does no work`,
            `Understands why "anyone could do that" misjudges a form where the skill lives in the idea and the created human moment`,
            `Handles honestly debatable cases by forming a reasoned, explainable view while accepting that thoughtful people may disagree`,
            `Practices the core skill of thinking past a first reaction, refusing both "that's stupid" and "that's genius"`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Film Theory and Visual Language`,
            hook: `The hidden grammar behind every movie and video you watch: how shots, cuts, and light shape what you feel. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L16 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz} r=${reflect}`
  );
}
