// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L17 — Film Theory and Visual Language
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Film Language, Media Literacy, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort claims about how film "language" works:
// real, well-grounded craft principles vs. overstated "this shot ALWAYS means X" rules
// vs. useful-but-simplified popular explainers). Contract matches L03/L06/L08/L11/L13/L14:
// sources[] with tier/title/type/context/quote/questions[]/evaluation; synthesisPrompt +
// reflectionPrompt.
// FOCUS: media literacy. Film is the medium Voyagers consume most, so the payoff is
// seeing the techniques that shape their feelings, and resisting overclaimed "secret
// rules." Builds on L10 (how art moves people) and the whole band's tier-thinking.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l17-v1";

const CREATIVE_ARTS_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-17`,
      title: `Film Theory and Visual Language`,
      duration: 35,
      xpReward: 75,
      badge: `film-language-literate`,
      badgeName: `Film Language Literate`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, you have watched thousands of hours of film and video, and almost all of it worked on you without you seeing how. Every time a movie made you tense, teary, thrilled, or uneasy, someone made dozens of deliberate choices, where to put the camera, how to cut, what light to use, what you hear, to produce exactly that feeling. Film has a kind of language, a set of techniques for shaping what an audience feels, and most people never learn to read it, so it works on them invisibly their whole lives. Today you learn to read it. You will see the real grammar of film, and you will also learn to spot the overstated version, the "this shot ALWAYS means X, it's a secret rule" claims that flatten a rich craft into fake formulas. Learning film's real language does not ruin movies; it lets you both enjoy them more and stop being moved without knowing why. This is media literacy for the form you consume most. Onward.`,
          headline: `Film Theory and Visual Language`,
          subtitle: `The hidden grammar behind everything you watch. Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Film Has A Language`,
          paragraphs: [
            `Start with the big idea: film is not just "a recording of things happening," it is a constructed language, and someone chose every piece of it. When you watch a scene, you are not seeing reality; you are seeing a sequence of deliberate choices designed to make you feel and understand specific things. The camera could have been anywhere; it was put exactly there. The scene could have been cut a hundred ways; it was cut this way. Light could have come from anywhere; it was placed to do a job. Recognizing that everything on screen was chosen, not found, is the first and most important step in reading film.`,
            `The most basic unit is the "shot," a single continuous piece of filmed image, and even the choice of how much to show carries meaning. A wide shot, showing a person small in a big space, can make them feel lonely, lost, or powerless. A close-up, filling the screen with a face, pulls you into their emotion and makes you feel intimate with them. An extreme close-up on a detail, an eye, a trembling hand, forces you to notice exactly what the filmmaker wants. None of these is "neutral", the same moment shot wide versus close tells you to feel very different things, and the filmmaker chooses which feeling to push you toward.`,
            `Then there is editing, the cutting and arranging of shots, which is arguably where film becomes truly its own art. A famous early discovery in film was that the meaning of a shot changes depending on what you put next to it: the same neutral face, cut after a bowl of soup, reads as "hungry," but cut after a coffin reads as "grieving," even though the face itself never changed. The audience builds the meaning from the sequence. This is the deep magic of editing: filmmakers shape what you think and feel not just by what they show, but by the order and rhythm in which they show it. Once you see that film is a built language of shots and cuts, you cannot un-see it, and every movie becomes more interesting.`,
          ],
          image: `/voyager-assets/creative-arts/l17-s1-language.webp`,
          imageCaption: `The big idea: film is not "a recording of things happening" but a constructed language, someone chose every piece. Watching a scene, you see a sequence of deliberate choices designed to make you feel and understand specific things; the camera could have been anywhere but was put exactly there. Everything on screen was chosen, not found, the first step in reading film. The basic unit is the "shot," and how much it shows carries meaning: a wide shot (person small in a big space) can feel lonely or powerless; a close-up (a face filling the screen) pulls you into emotion and intimacy; an extreme close-up forces you to notice a detail. None is "neutral." Then editing, cutting and arranging shots, is where film becomes its own art: the meaning of a shot changes by what is next to it (the same neutral face reads "hungry" after soup, "grieving" after a coffin, though the face never changed). Filmmakers shape feeling by order and rhythm, not just content. Once you see it, you cannot un-see it.`,
          vocab: [
            {
              word: `shots editing`,
              definition: `Film is not just "a recording of things happening," it is a constructed language, and someone chose every piece of it: when you watch a scene you are not seeing reality but a sequence of deliberate choices designed to make you feel and understand specific things, since the camera could have been anywhere but was put exactly there, the scene could have been cut a hundred ways but was cut this way, and light could have come from anywhere but was placed to do a job, so recognizing that everything on screen was chosen, not found, is the first and most important step in reading film. The most basic unit is the "shot," a single continuous piece of filmed image, and even how much it shows carries meaning: a wide shot showing a person small in a big space can make them feel lonely, lost, or powerless; a close-up filling the screen with a face pulls you into their emotion and intimacy; an extreme close-up on a detail (an eye, a trembling hand) forces you to notice exactly what the filmmaker wants, and none of these is "neutral," since the same moment shot wide versus close tells you to feel very different things. Then there is editing, the cutting and arranging of shots, arguably where film becomes truly its own art: a famous early discovery was that the meaning of a shot changes depending on what you put next to it, so the same neutral face cut after a bowl of soup reads as "hungry" but cut after a coffin reads as "grieving," even though the face never changed, because the audience builds the meaning from the sequence. This is the deep magic of editing, that filmmakers shape what you think and feel not just by what they show but by the order and rhythm in which they show it, and once you see film as a built language of shots and cuts, you cannot un-see it.`,
              audioPrompt: `Start with the big idea, {name}: film is not just "a recording of things happening," it is a constructed language, and someone chose every piece of it. When you watch a scene, you are not seeing reality; you are seeing a sequence of deliberate choices designed to make you feel and understand specific things. The camera could have been anywhere; it was put exactly there. The scene could have been cut a hundred ways; it was cut this way. Recognizing that everything on screen was chosen, not found, is the first and most important step in reading film. The most basic unit is the shot, a single continuous piece of filmed image, and even the choice of how much to show carries meaning. A wide shot, showing a person small in a big space, can make them feel lonely or powerless. A close-up, filling the screen with a face, pulls you into their emotion. An extreme close-up on a detail forces you to notice exactly what the filmmaker wants. None of these is neutral. Then there is editing, the cutting and arranging of shots, which is arguably where film becomes truly its own art. A famous early discovery was that the meaning of a shot changes depending on what you put next to it: the same neutral face, cut after a bowl of soup, reads as hungry, but cut after a coffin reads as grieving, even though the face itself never changed. The audience builds the meaning from the sequence. Filmmakers shape what you feel not just by what they show, but by the order and rhythm in which they show it. Once you see that film is a built language, you cannot un-see it.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Tools That Shape Your Feelings`,
          paragraphs: [
            `Beyond shots and cuts, filmmakers have a whole toolkit for steering your emotions, and naming the tools lets you finally see them at work. Light is one of the most powerful. Bright, even light feels safe and open; harsh shadows and darkness feel dangerous or mysterious; warm golden light feels cozy or nostalgic; cold blue light feels lonely or clinical. Filmmakers light a scene to tell your eyes how to feel before a single line is spoken, which is why a horror movie and a romance can film the very same room and make it feel completely different.`,
            `Camera movement and angle do similar work. A camera placed low, looking up at a character, tends to make them feel powerful or threatening; placed high, looking down, tends to make them feel small or vulnerable. A steady, still camera feels calm and controlled; a shaky handheld camera feels chaotic, urgent, or real. A slow push in toward a face quietly builds tension or significance. These are not random; they are deliberate choices that nudge your read of a character and moment, usually without you noticing the nudge, which is exactly why noticing it is powerful.`,
            `And then there is sound, which is film's secret weapon, often doing more than the picture while getting none of the credit. Music tells you how to feel, sometimes completely overriding the image: the same shot of a person walking down a hallway becomes terrifying with low ominous strings, or triumphant with soaring brass, or comic with a silly tune. Sound effects, made louder or softer, focus your attention and build a world. Even silence is a tool, a sudden cut to no sound can be more shocking than any noise. Here is a striking truth to test yourself with: try watching a tense scene with the sound off, and feel how much of the fear was actually coming from your ears, not your eyes. Sound is doing enormous emotional work that most viewers never consciously register.`,
          ],
          image: `/voyager-assets/creative-arts/l17-s2-tools.webp`,
          imageCaption: `The toolkit filmmakers use to steer your emotions, named so you can see it work. LIGHT: bright even light feels safe; harsh shadows feel dangerous; warm golden light feels cozy/nostalgic; cold blue feels lonely/clinical, telling your eyes how to feel before a word is spoken (a horror film and a romance can film the same room and make it feel opposite). CAMERA MOVEMENT/ANGLE: low angle looking up makes a character feel powerful or threatening; high angle looking down makes them small or vulnerable; a steady camera feels calm, a shaky handheld feels chaotic or real; a slow push-in builds tension. Deliberate nudges, usually unnoticed, which is why noticing is powerful. SOUND, film's secret weapon, often doing more than the picture: music tells you how to feel and can override the image (the same hallway shot turns terrifying, triumphant, or comic by the score); sound effects and even silence focus attention. Test: watch a tense scene with sound off, feel how much fear came from your ears.`,
          vocab: [
            {
              word: `camera sound`,
              definition: `Beyond shots and cuts, filmmakers have a whole toolkit for steering your emotions, and naming the tools lets you see them at work. LIGHT is one of the most powerful: bright, even light feels safe and open; harsh shadows and darkness feel dangerous or mysterious; warm golden light feels cozy or nostalgic; cold blue light feels lonely or clinical, so filmmakers light a scene to tell your eyes how to feel before a single line is spoken, which is why a horror movie and a romance can film the very same room and make it feel completely different. CAMERA MOVEMENT AND ANGLE do similar work: a camera placed low, looking up at a character, tends to make them feel powerful or threatening, while placed high, looking down, tends to make them feel small or vulnerable; a steady, still camera feels calm and controlled, a shaky handheld camera feels chaotic, urgent, or real, and a slow push in toward a face quietly builds tension or significance, deliberate choices that nudge your read of a character and moment, usually without you noticing. SOUND is film's secret weapon, often doing more than the picture while getting none of the credit: music tells you how to feel and can completely override the image (the same shot of a person walking down a hallway becomes terrifying with low ominous strings, triumphant with soaring brass, or comic with a silly tune), sound effects made louder or softer focus your attention and build a world, and even silence is a tool, since a sudden cut to no sound can be more shocking than any noise. A striking test: watch a tense scene with the sound off and feel how much of the fear was actually coming from your ears, not your eyes, because sound does enormous emotional work that most viewers never consciously register.`,
              audioPrompt: `Beyond shots and cuts, {name}, filmmakers have a whole toolkit for steering your emotions, and naming the tools lets you finally see them at work. Light is one of the most powerful. Bright, even light feels safe and open; harsh shadows and darkness feel dangerous or mysterious; warm golden light feels cozy or nostalgic; cold blue light feels lonely or clinical. Filmmakers light a scene to tell your eyes how to feel before a single line is spoken, which is why a horror movie and a romance can film the very same room and make it feel completely different. Camera movement and angle do similar work. A camera placed low, looking up at a character, tends to make them feel powerful or threatening; placed high, looking down, tends to make them feel small or vulnerable. A steady camera feels calm; a shaky handheld camera feels chaotic or urgent. And then there is sound, which is film's secret weapon, often doing more than the picture while getting none of the credit. Music tells you how to feel, sometimes completely overriding the image: the same shot of a person walking down a hallway becomes terrifying with low ominous strings, or triumphant with soaring brass, or comic with a silly tune. Even silence is a tool. Here is a striking truth to test yourself with: try watching a tense scene with the sound off, and feel how much of the fear was actually coming from your ears, not your eyes.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where The "Secret Rules" Get Overstated`,
          paragraphs: [
            `Now apply your tier-thinking, because film "language" is exactly the kind of thing that gets flattened into fake rules, and the internet is full of "film theory" claims that overstate a real craft into mechanical formulas. The real principle is that techniques tend to push feelings in certain directions, in context: a low angle often makes a character feel more powerful, harsh shadows often feel more threatening. That is true and useful. The overstated version turns "often, in context" into "ALWAYS means", as if film were a secret codebook where each shot has one fixed meaning you can look up.`,
            `Here is why the "always means X" version is wrong: film technique is contextual, not mechanical. A low-angle shot usually suggests power, but a skilled filmmaker can use a low angle on a weak character for irony, or to set up a fall, and the meaning flips. Warm light usually feels cozy, but in the right story it can feel sickly or false. Meaning comes from how a technique works together with everything else, the story, the character, the other choices, not from a fixed dictionary. So "this camera angle ALWAYS means the character is powerful" is the same real-seed-inflated-to-rule mistake you have seen all band: a genuine tendency ("low angles often suggest power") stretched into a false law ("low angle = powerful, always").`,
            `The honest picture is richer and more respectful of both filmmakers and you. Film technique is a flexible language with strong tendencies, not a rigid code with fixed meanings, the way real human language has patterns ("words usually mean roughly this") without every word meaning exactly one thing in every sentence. Great filmmakers know the tendencies precisely so they can use them, fulfill them, or deliberately break them for effect, and reading film well means understanding the tendencies while staying alert to how this particular film is using or subverting them. That is a far more interesting skill than memorizing a fake codebook, and it is the difference between someone who has watched a few "hidden meaning" videos and someone who can actually read what a film is doing.`,
          ],
          image: `/voyager-assets/creative-arts/l17-s3-overstated.webp`,
          imageCaption: `Apply tier-thinking: film "language" gets flattened into fake rules, and the internet is full of "film theory" claims overstating real craft into mechanical formulas. The real principle: techniques tend to push feelings in certain directions, IN CONTEXT (a low angle often makes a character feel powerful; harsh shadows often feel threatening), true and useful. The overstated version turns "often, in context" into "ALWAYS means," as if film were a secret codebook with one fixed meaning per shot. Why that is wrong: film technique is contextual, not mechanical, a skilled filmmaker can use a low angle on a weak character for irony or to set up a fall, flipping the meaning; warm light can feel sickly in the right story. Meaning comes from how a technique works with everything else, not a fixed dictionary, the same real-seed-inflated-to-rule mistake from across the band. The honest picture: film is a flexible language with strong tendencies, like human language has patterns without one fixed meaning per word; great filmmakers know the tendencies so they can fulfill or break them.
`,
          vocab: [
            {
              word: `fixed codebook`,
              definition: `Apply your tier-thinking, because film "language" is exactly the kind of thing that gets flattened into fake rules, and the internet is full of "film theory" claims overstating a real craft into mechanical formulas. The real principle is that techniques tend to push feelings in certain directions, in context: a low angle often makes a character feel more powerful, harsh shadows often feel more threatening, which is true and useful. The overstated version turns "often, in context" into "ALWAYS means," as if film were a secret codebook where each shot has one fixed meaning you can look up. That "always means X" version is wrong because film technique is contextual, not mechanical: a low-angle shot usually suggests power, but a skilled filmmaker can use a low angle on a weak character for irony or to set up a fall, flipping the meaning, and warm light usually feels cozy but in the right story can feel sickly or false, because meaning comes from how a technique works together with everything else (the story, the character, the other choices), not from a fixed dictionary. So "this camera angle ALWAYS means the character is powerful" is the same real-seed-inflated-to-rule mistake from across the band: a genuine tendency ("low angles often suggest power") stretched into a false law. The honest picture is richer: film technique is a flexible language with strong tendencies, not a rigid code with fixed meanings, the way real human language has patterns (words usually mean roughly this) without every word meaning exactly one thing in every sentence. Great filmmakers know the tendencies precisely so they can use them, fulfill them, or deliberately break them for effect, and reading film well means understanding the tendencies while staying alert to how this particular film is using or subverting them, a far more interesting skill than memorizing a fake codebook.`,
              audioPrompt: `Now apply your tier-thinking, {name}, because film "language" is exactly the kind of thing that gets flattened into fake rules, and the internet is full of film-theory claims that overstate a real craft into mechanical formulas. The real principle is that techniques tend to push feelings in certain directions, in context: a low angle often makes a character feel more powerful, harsh shadows often feel more threatening. That is true and useful. The overstated version turns "often, in context" into "always means," as if film were a secret codebook where each shot has one fixed meaning you can look up. Here is why the "always means X" version is wrong: film technique is contextual, not mechanical. A low-angle shot usually suggests power, but a skilled filmmaker can use a low angle on a weak character for irony, or to set up a fall, and the meaning flips. Warm light usually feels cozy, but in the right story it can feel sickly or false. Meaning comes from how a technique works together with everything else, the story, the character, the other choices, not from a fixed dictionary. So "this camera angle always means the character is powerful" is the same real-seed-inflated-to-rule mistake you have seen all band. The honest picture is richer: film technique is a flexible language with strong tendencies, not a rigid code with fixed meanings, the way real human language has patterns without every word meaning exactly one thing in every sentence. Great filmmakers know the tendencies precisely so they can use them, fulfill them, or deliberately break them for effect.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Reading Film Is Real Power`,
          paragraphs: [
            `Step back and see why this matters so much, because it is bigger than enjoying movies more, though it does that too. You live inside screens. Film and video are the dominant language of your era, the way you get news, stories, ads, entertainment, and other people's versions of reality, for hours every day. All of it is constructed using exactly the techniques you just learned, chosen shots, cuts, light, and sound designed to make you feel and believe specific things. Most people are fluent in receiving these messages emotionally but illiterate in reading how they are built, which means the messages work on them invisibly. Learning film's language is learning to read the most powerful persuasive medium of your time.`,
            `This connects directly to Lesson 10, where you saw how art moves people, and to the propaganda warning there. The same techniques that make a beautiful film moving can make an ad manipulative or a piece of propaganda dangerous, all of them use light, music, editing, and angle to bypass your reasoning and hit your feelings directly. A news segment, a political ad, a brand's video, and an influencer's post are all built with this toolkit, often to make you feel something so you will buy, believe, or share. When you can see the techniques working, you get to feel the intended emotion and notice that it is being produced, which is the difference between being moved and being manipulated without knowing it.`,
            `And here is the reassurance, because people worry that analyzing film ruins it: it does the opposite. Knowing how a magic trick works can make it more amazing, not less, because now you appreciate the skill; the same is true of film. When you understand what a filmmaker did to make you cry or hold your breath, you can still cry and hold your breath, and also admire the craft that achieved it, which is a richer experience, not a colder one. You become both a more moved viewer and a less manipulated one at the same time. Reading film does not turn off your feelings; it adds a second layer of appreciation underneath them, so you enjoy the magic and see the magician, which is the best of both.`,
          ],
          image: `/voyager-assets/creative-arts/l17-s4-power.webp`,
          imageCaption: `Why this matters beyond enjoying movies more. You live inside screens, film and video are the dominant language of your era (news, stories, ads, entertainment, other people's versions of reality, hours daily), all constructed with the techniques you just learned. Most people receive these messages emotionally but cannot read how they are built, so the messages work invisibly; learning film's language is reading the most powerful persuasive medium of your time. It connects to Lesson 10 (how art moves people, and propaganda): the same tools that make a film moving make an ad manipulative or propaganda dangerous, all using light, music, editing, angle to bypass reasoning and hit feeling. Seeing the techniques work lets you feel the emotion AND notice it is being produced, the difference between being moved and being manipulated unknowingly. The reassurance: analysis does not ruin film, like knowing a magic trick, you still feel it AND admire the craft, a more moved viewer and a less manipulated one at once. Enjoy the magic and see the magician.`,
          vocab: [
            {
              word: `medialiteracy power`,
              definition: `Why reading film matters beyond enjoying movies more, though it does that too: you live inside screens, and film and video are the dominant language of your era, the way you get news, stories, ads, entertainment, and other people's versions of reality for hours every day, all constructed using exactly the techniques you learned, chosen shots, cuts, light, and sound designed to make you feel and believe specific things. Most people are fluent in receiving these messages emotionally but illiterate in reading how they are built, so the messages work on them invisibly, which means learning film's language is learning to read the most powerful persuasive medium of your time. This connects directly to Lesson 10's account of how art moves people and its propaganda warning: the same techniques that make a beautiful film moving can make an ad manipulative or propaganda dangerous, since all of them use light, music, editing, and angle to bypass your reasoning and hit your feelings directly, and a news segment, political ad, brand video, and influencer post are all built with this toolkit, often to make you feel something so you will buy, believe, or share. When you can see the techniques working, you get to feel the intended emotion and notice that it is being produced, which is the difference between being moved and being manipulated without knowing it. The reassurance, since people fear analysis ruins film: it does the opposite, because knowing how a magic trick works can make it more amazing, not less, and the same is true of film, when you understand what a filmmaker did to make you cry or hold your breath you can still cry and hold your breath and also admire the craft, becoming both a more moved viewer and a less manipulated one at once, enjoying the magic and seeing the magician.`,
              audioPrompt: `Step back and see why this matters so much, {name}, because it is bigger than enjoying movies more, though it does that too. You live inside screens. Film and video are the dominant language of your era, the way you get news, stories, ads, entertainment, and other people's versions of reality, for hours every day. All of it is constructed using exactly the techniques you just learned, chosen shots, cuts, light, and sound designed to make you feel and believe specific things. Most people are fluent in receiving these messages emotionally but illiterate in reading how they are built, which means the messages work on them invisibly. Learning film's language is learning to read the most powerful persuasive medium of your time. This connects directly to Lesson 10, where you saw how art moves people, and to the propaganda warning there. The same techniques that make a beautiful film moving can make an ad manipulative or a piece of propaganda dangerous, all of them use light, music, editing, and angle to bypass your reasoning and hit your feelings directly. When you can see the techniques working, you get to feel the intended emotion and notice that it is being produced, which is the difference between being moved and being manipulated without knowing it. And here is the reassurance, because people worry that analyzing film ruins it: it does the opposite. Knowing how a magic trick works can make it more amazing, not less. When you understand what a filmmaker did to make you cry, you can still cry, and also admire the craft that achieved it. You become both a more moved viewer and a less manipulated one at the same time.`,
            },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You learned that film is a constructed language where everything was chosen, not found, and that shots and especially editing build meaning, the same face means "hungry" or "grieving" depending on what it is cut next to. You learned the toolkit that shapes your feelings, light, camera angle and movement, and sound, with sound doing more emotional work than almost anyone notices. You learned to spot the overstated "this shot ALWAYS means X" claims and to hold the truer picture: film is a flexible language with strong tendencies, not a fixed codebook. And you saw why this is real power, media literacy for the most persuasive medium of your time, that makes you both more moved and less manipulated.`,
            `Now the source-evaluation screen will hand you several real or realistic claims about film language, a careful explanation of a real technique, a "secret codebook, this shot ALWAYS means X" overclaim, a useful-but-simplified popular explainer, a fan "hidden meaning" theory that reads far too much in, and ask you to sort them by how much you should trust them and why. This is the same skill from across the band, now aimed at the medium you spend the most hours inside.`,
            `One last thought to carry. Of everything in this band, this may be the most immediately practical, because you will watch film and video every single day for the rest of your life, and almost all of it is built to move you. You now have a choice most people never get: to watch awake. You can still be swept up in a great movie, that is one of the joys of being human, but you can also, whenever you want, switch on the second layer and see the choices being made, the light telling you to feel safe, the cut building the dread, the music doing the real work. That double vision, fully feeling and clearly seeing, is the gift of media literacy, and it protects you for a lifetime in a world that will never stop trying to move you through a screen. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l17-s5-before.webp`,
          imageCaption: `Threads together. Film is a constructed language where everything was chosen, not found; shots and especially editing build meaning (the same face reads "hungry" or "grieving" by what it is cut next to). The toolkit that shapes feeling: light, camera angle and movement, and sound (which does more emotional work than almost anyone notices). Spot the overstated "this shot ALWAYS means X"; hold the truer picture, film is a flexible language with strong tendencies, not a fixed codebook. Why it is real power: media literacy for the most persuasive medium of your time, making you both more moved and less manipulated. The source-evaluation screen ahead hands you claims to sort by trust. Last thought, the most immediately practical of the band: you will watch film daily for life, built to move you, and you now get to watch AWAKE, fully feeling AND clearly seeing the choices. That double vision protects you for a lifetime.
`,
          vocab: [
            {
              word: `media literacy`,
              definition: `The synthesis before the source-evaluation screen. You learned that film is a constructed language where everything was chosen, not found, and that shots and especially editing build meaning (the same face reads "hungry" or "grieving" depending on what it is cut next to, because the audience builds meaning from the sequence). You learned the toolkit that shapes your feelings, light (safe, dangerous, cozy, cold), camera angle and movement (powerful, vulnerable, calm, chaotic), and sound, which does more emotional work than almost anyone consciously notices (music can override the image entirely). You learned to spot the overstated "this shot ALWAYS means X" claims, the real-seed-inflated-to-rule mistake, and to hold the truer picture: film is a flexible language with strong tendencies, not a fixed codebook, so great filmmakers know the tendencies in order to fulfill or deliberately break them. And you saw why this is real power: it is media literacy for the most persuasive medium of your time, connected to Lesson 10's account of how art moves people and how the same tools serve both moving films and manipulative ads or propaganda, and it makes you both more moved and less manipulated, because analysis adds a layer of appreciation rather than killing the feeling (you enjoy the magic and see the magician). The source-evaluation screen will hand you several claims about film language to sort by trust. The last thing to carry is that this may be the most immediately practical lesson in the band, because you will watch film and video every day for life, almost all of it built to move you, and you now have a choice most people never get: to watch awake, still swept up in a great movie when you want, but able to switch on the second layer and see the choices being made, the double vision of fully feeling and clearly seeing that protects you for a lifetime.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You learned that film is a constructed language where everything was chosen, not found, and that shots and especially editing build meaning, the same face means hungry or grieving depending on what it is cut next to. You learned the toolkit that shapes your feelings, light, camera angle and movement, and sound, with sound doing more emotional work than almost anyone notices. You learned to spot the overstated "this shot always means X" claims and to hold the truer picture: film is a flexible language with strong tendencies, not a fixed codebook. And you saw why this is real power, media literacy for the most persuasive medium of your time, that makes you both more moved and less manipulated. Now the source-evaluation screen will hand you several claims about film language and ask you to sort them by how much you should trust them and why. One last thought to carry. Of everything in this band, this may be the most immediately practical, because you will watch film and video every single day for the rest of your life, and almost all of it is built to move you. You now have a choice most people never get: to watch awake. You can still be swept up in a great movie, but you can also, whenever you want, switch on the second layer and see the choices being made, the light telling you to feel safe, the cut building the dread, the music doing the real work. That double vision, fully feeling and clearly seeing, is the gift of media literacy, and it protects you for a lifetime in a world that will never stop trying to move you through a screen.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l17-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Claims About Film Language`,
          intro: `{name}, five claims about how film works. For each, decide how much you should trust it and why. Watch for the familiar pattern: real, contextual craft principles (trustworthy) versus overstated "secret codebook" rules and over-read "hidden meaning" theories (not). The honest sources say "tends to, in context"; the unreliable ones say "ALWAYS means."`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `A filmmaker explaining how editing builds meaning`,
              type: `Practitioner / craft source`,
              context: `An experienced filmmaker explains that the meaning of a shot depends heavily on the shots around it, citing the classic discovery that the same neutral face reads as "hungry," "grieving," or "loving" depending on what is cut before it, and notes that this is a foundational, well-established principle of editing.`,
              quote: `"The audience builds the meaning. The same face means different things depending on what I cut it next to. That's not a trick, it's the foundation of how editing works."`,
              questions: [
                `Why is this trustworthy, and is it a "rule" or a principle?`,
                `What makes it different from a "this shot always means X" claim?`,
                `How could you test this principle yourself?`,
              ],
              evaluation: `High trust, this is Tier A: an experienced practitioner explaining a foundational, well-established principle of editing, that audiences build meaning from sequence, so the same face reads differently depending on the shot before it. Crucially, this is a principle about how editing works, not a fixed "this shot always means X" rule, it describes a real mechanism (juxtaposition creates meaning) rather than assigning one locked meaning to one image. That is exactly what makes it trustworthy and different from a codebook claim: it explains a flexible tool, not a rigid dictionary. You could test it yourself easily, take the same neutral clip of a face and cut it after different images, and feel your own reading of the face change, which is precisely the kind of checkable demonstration that marks a real craft principle rather than a made-up rule.`,
            },
            {
              id: `s2`,
              tier: `overclaim`,
              title: `"The secret film codebook: every shot has ONE fixed meaning"`,
              type: `Overstated "film theory"`,
              context: `A confident video claims film is a secret code you can decode, with a fixed dictionary of meanings: low angle ALWAYS means powerful, blue light ALWAYS means sad, a character on the right of the frame ALWAYS means X, presenting these as rigid rules that unlock the "hidden truth" of any movie.`,
              quote: `"Once you know the code, you can decode any film. Low angle ALWAYS means power. Blue ALWAYS means sadness. These are the secret rules directors don't want you to know."`,
              questions: [
                `What is the real seed, and how is it inflated into a false rule?`,
                `Give an example of how "always means X" breaks down.`,
                `Why is "secret rules directors don't want you to know" a tell?`,
              ],
              evaluation: `Low trust, this is the overclaim, the real-seed-inflated-to-rule pattern from across the band. The real seed: techniques do have strong tendencies (low angles often suggest power, cold light often feels sad). The inflation: turning "often, in context" into "ALWAYS means," as if film were a fixed codebook. It breaks down constantly: a skilled filmmaker can put a low angle on a weak or foolish character for irony, or use warm light to feel sickly and false, because meaning comes from context, not a dictionary. The "secret rules directors don't want you to know" framing is a classic tell, real craft is not a hidden conspiracy, and dressing ordinary tendencies up as forbidden secret knowledge is a way to make a simple, overstated claim feel exciting and authoritative. Keep the real tendencies; reject the rigid "always" codebook.`,
            },
            {
              id: `s3`,
              tier: `B`,
              title: `A popular "how movies make you feel" explainer video`,
              type: `Popular media-literacy explainer`,
              context: `A well-made popular video explains, accurately but simply, how light, camera angle, and music shape emotion in film, using clear examples, and it generally says techniques "often" or "tend to" create certain feelings, while simplifying and not covering every exception.`,
              quote: `"Filmmakers use low light and tense music to make you feel scared. It's not magic, it's craft, and once you see it, you'll notice it everywhere."`,
              questions: [
                `Why is this useful and basically trustworthy despite simplifying?`,
                `What makes it more trustworthy than the "secret codebook" video?`,
                `What are the limits of a short popular explainer?`,
              ],
              evaluation: `Solid trust, this is good Tier B: an accurate, accessible explainer that teaches real techniques with clear examples and, importantly, uses careful language like "often" and "tend to" rather than "always." It is useful precisely because it opens your eyes to real craft and invites you to notice it yourself, and it beats the "secret codebook" video because it describes tendencies honestly instead of inflating them into rigid rules or pretending to reveal forbidden secrets. Its limits are the normal limits of a short popular piece: it simplifies, skips exceptions, and cannot capture how context can flip a technique's meaning, so it is a great on-ramp but not the whole truth. The honest way to use it: take the real techniques it teaches, keep its "tends to" framing, and stay aware that a skilled filmmaker can use or break any of these tendencies, which the short video does not have room to explore.`,
            },
            {
              id: `s4`,
              tier: `over-read`,
              title: `A fan theory finding "hidden meaning" in every tiny detail`,
              type: `Over-reading / apophenia`,
              context: `A fan video claims that every tiny detail in a film is a deliberate hidden message: the color of a coffee cup "secretly" predicts the ending, a number glimpsed in the background "proves" a complex theory, every background object is a planted clue, building an elaborate interpretation from coincidences and stray details.`,
              quote: `"Notice the cup is blue in this shot? That secretly tells us the character will die. And the clock says 3:15, which proves the whole movie is about... [elaborate theory]."`,
              questions: [
                `What thinking error from earlier lessons is this (hint: pattern-finding)?`,
                `How is reading too much into details different from real film analysis?`,
                `How do you tell a real intended detail from a coincidence?`,
              ],
              evaluation: `Low trust, this is over-reading, the pattern-finding error from the sacred-geometry lesson, now aimed at film: seeing deliberate hidden messages in what are mostly coincidences and ordinary production details. Humans are pattern-finding creatures who will find "clues" in noise if motivated, and a film has thousands of incidental details (a cup happens to be blue, a clock happens to show a time) that were never meant as secret codes. This differs from real film analysis, which reads the deliberate, structural choices (the shot, the cut, the light, the score doing emotional work) rather than treating every background object as a planted clue. To tell an intended detail from a coincidence, ask whether the reading fits the film's actual structure and is supported by repeated, clearly deliberate choices, or whether it is a one-off detail being stretched into a grand theory, the same "real seed vs. inflated, unfalsifiable claim" test from before. Real analysis is disciplined; over-reading finds whatever it wants to find.`,
            },
            {
              id: `s5`,
              tier: `A`,
              title: `A statement that technique is contextual, not a fixed code`,
              type: `Well-grounded principle`,
              context: `A film educator explains that techniques have strong tendencies but their meaning depends on context, that a great filmmaker can fulfill or deliberately break a tendency for effect, and that reading film well means understanding the tendencies while watching how each particular film uses them.`,
              quote: `"A low angle usually suggests power, but a good director can flip that for irony. Technique is a flexible language with tendencies, not a code with fixed meanings."`,
              questions: [
                `Why is "tendencies, not fixed meanings" the most accurate view?`,
                `How does this correct BOTH the codebook video and the over-reader?`,
                `What does this view ask of you as a viewer?`,
              ],
              evaluation: `High trust, this is the most accurate view, and notice it corrects both unreliable sources at once. "Tendencies, not fixed meanings" is right because film technique really does push feelings in reliable directions while remaining contextual, so meaning emerges from how a technique works with everything else, and a skilled filmmaker can fulfill or deliberately break a tendency. It corrects the codebook video (source 2) by denying that any shot "always" means one thing, and it corrects the over-reader (source 4) by insisting that real meaning comes from deliberate, structural choices read in context, not from treating every stray detail as a secret clue. What it asks of you as a viewer is the genuinely skilled move: learn the tendencies, then watch how this particular film uses or subverts them, which is more demanding and far more interesting than either memorizing a fake codebook or hunting imaginary clues. This is what actually reading film looks like.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your rule for telling a trustworthy claim about film from an overstated one? Notice that the codebook video and the over-reader fail in opposite directions, one makes the rules too rigid, the other finds meaning everywhere, what do real film analysis and the "tendencies, not fixed code" view get right that both of them miss? In 5-6 sentences.`,
          reflectionPrompt: `Pick a movie or show that genuinely moved you. Looking back, can you name even one technique, a kind of shot, a cut, the lighting, the music, that was doing the emotional work? Did naming it make the memory feel colder, or did you find yourself admiring the craft?`,
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
              {
                id: `q1`,
                type: `multiple-choice`,
                question: `What does it mean to say "film is a constructed language," and why is that the first thing to understand?`,
                options: [
                  `That films use real spoken languages, so you must learn them to understand foreign movies.`,
                  `Every shot, cut, light, and sound was chosen to shape you — you see constructed choices, not neutral reality.`,
                  `That films are built from code and software rather than filmed with real cameras and actors.`,
                  `That only film-school graduates are able to truly understand what a movie is really saying.`,
                ],
                correctIndex: 1,
                explanation: `A film is not simply "a recording of things happening" but a sequence of deliberate choices: the camera could have been anywhere but was placed exactly there, the scene could have been cut a hundred ways but was cut this way, the light was placed to do a job. So you are not seeing neutral reality but constructed choices designed to make you feel and understand specific things. Recognizing that everything on screen was chosen, not found, is the first step, because until you see the image is built, the techniques work on you invisibly. The distractors confuse this with spoken language, software, or gatekept expertise.`,
              },
              {
                id: `q2`,
                type: `multiple-choice`,
                question: `How does editing build meaning, according to the classic discovery in film?`,
                options: [
                  `By recording scenes in the exact order the audience will eventually watch them on screen.`,
                  `By cutting out boring parts so the remaining footage is faster and more exciting to watch.`,
                  `The meaning of a shot changes by what's next to it — the viewer's mind builds emotion from the sequence.`,
                  `By adding more shots, since more footage always gives the audience more information and meaning.`,
                ],
                correctIndex: 2,
                explanation: `The classic discovery is that a shot's meaning changes depending on what you put next to it, so the audience builds the meaning from the sequence rather than reading it off one image. The famous demonstration: the same neutral face reads as "hungry" after a bowl of soup, "grieving" after a coffin, "loving" after a smiling child, though the face never changed. The viewer's mind connects the shots and generates the emotion. This is where film becomes its own art form, and it is a principle (juxtaposition creates meaning), not a fixed rule. The distractors reduce editing to recording order, trimming, or adding footage.`,
              },
              {
                id: `q3`,
                type: `multiple-choice`,
                question: `What are the main tools filmmakers use to shape your emotions, and which is most underrated?`,
                options: [
                  `Light, angle, and sound — and sound (especially music) is the most underrated, doing huge hidden work.`,
                  `The script and the actors — and the script is most underrated, since dialogue carries all the meaning.`,
                  `Color and costume — and costume is most underrated, because clothing signals everything about a character.`,
                  `Budget and special effects — and effects are most underrated, since spectacle is what audiences remember.`,
                ],
                correctIndex: 0,
                explanation: `Beyond shots and cuts, the main tools are light, camera angle and movement, and sound. Light tells your eyes how to feel (harsh shadows feel dangerous, warm light feels cozy). Angle nudges your read (low angle feels powerful, high angle feels small). The most underrated is sound, which often does more emotional work than the picture while getting no credit: music can completely override an image (the same hallway becomes terrifying, triumphant, or comic by score alone). Watch a tense scene with the sound off and notice how much fear came from your ears. The distractors misidentify which tools dominate, and overrate script, costume, or effects.`,
              },
              {
                id: `q4`,
                type: `multiple-choice`,
                question: `What is wrong with the claim that "this shot ALWAYS means X" (the secret-codebook view of film)?`,
                options: [
                  `Nothing — film really is a fixed code where each shot has exactly one dictionary meaning.`,
                  `It inflates a real tendency into a false rigid rule; technique is contextual, and skilled filmmakers flip it.`,
                  `It is wrong because film techniques actually have no effect on the audience's emotions at all.`,
                  `It is wrong only because the meanings change every few years as film fashions change.`,
                ],
                correctIndex: 1,
                explanation: `It takes a real tendency and inflates it into a false rigid rule, the same real-seed-inflated-to-rule mistake seen across the band. The seed is true (a low angle often suggests power, cold light often feels sad), but "often, in context" is not "ALWAYS means," as if each shot had one fixed dictionary meaning. Film technique is contextual: a skilled filmmaker can put a low angle on a foolish character for irony, or use warm light to feel sickly and false, because meaning comes from how a technique works with story, character, and every other choice. Film is a flexible language with strong tendencies. The distractors accept the codebook, deny technique works, or reduce it to fashion.`,
              },
              {
                id: `q5`,
                type: `multiple-choice`,
                question: `How is "reading too much into every tiny detail" (the over-reading fan theory) a different error from the codebook view?`,
                options: [
                  `It isn't different — over-reading and the codebook view are really the same single mistake.`,
                  `It errs by being too skeptical, refusing to believe any film detail could ever mean anything.`,
                  `They fail in opposite directions: the codebook makes rules too rigid; over-reading makes meaning too abundant.`,
                  `It errs only because fans aren't trained critics, so their theories are always automatically wrong.`,
                ],
                correctIndex: 2,
                explanation: `They fail in opposite directions. The codebook view makes the rules too rigid (each technique has one fixed meaning). Over-reading makes meaning too abundant, treating every incidental detail (a cup's color, a number on a clock) as a deliberate hidden message, building theories from coincidence. Over-reading is the pattern-finding error from the sacred-geometry lesson aimed at film: humans find "clues" in noise if motivated, and films have thousands of incidental details never meant as codes. Real analysis reads deliberate structural choices and asks whether a reading fits the film's actual structure. The distractors collapse the two errors, invert it into over-skepticism, or blame fans' credentials.`,
              },
              {
                id: `q6`,
                type: `multiple-choice`,
                question: `Why is "film technique is a flexible language with strong tendencies" the most accurate view?`,
                options: [
                  `Because it captures both truths — real tendencies that are learnable, and meaning that depends on context.`,
                  `Because it proves film technique has no reliable effect, so anything can mean anything at all.`,
                  `Because it means there are firm rules after all, just more of them than the codebook listed.`,
                  `Because it shows that only the director's stated intention can ever decide what a film means.`,
                ],
                correctIndex: 0,
                explanation: `Because it captures both truths and corrects two opposite errors. Techniques reliably push feelings in certain directions (low angles often suggest power, tense music often creates fear), so the tendencies are real and worth learning, but their meaning depends on context, so a skilled filmmaker can fulfill or deliberately break a tendency for effect. This corrects the codebook view (no fixed dictionary) and the over-reader (real meaning comes from deliberate structural choices read in context, not every detail as a clue). Film is like human language: strong patterns without every word meaning one fixed thing. The distractors deny tendencies work, smuggle back firm rules, or hand all meaning to stated intention.`,
              },
              {
                id: `q7`,
                type: `multiple-choice`,
                question: `Why does the lesson call reading film "real power," and how does it connect to Lesson 10?`,
                options: [
                  `Because it lets you win arguments about movies and prove your taste is better than your friends'.`,
                  `Because film is now the dominant persuasive medium, and the same techniques can move OR manipulate you.`,
                  `Because knowing film theory guarantees you could direct a successful movie of your own someday.`,
                  `Because reading film lets you predict which movies will make the most money at the box office.`,
                ],
                correctIndex: 1,
                explanation: `Because film and video are the dominant language of your era, the way you receive news, stories, ads, and other people's versions of reality for hours daily, all constructed with the techniques you learned to make you feel and believe specific things. Most people receive these emotionally but can't read how they're built, so they work invisibly. This connects to Lesson 10's account of how art moves people and its propaganda warning: the same techniques that make a film moving can make an ad manipulative, all bypassing reasoning to hit feeling. Seeing the techniques work lets you feel the emotion AND notice it's being produced, the difference between being moved and being manipulated unknowingly. The distractors shrink "power" to winning arguments, directing, or predicting hits.`,
              },
              {
                id: `q8`,
                type: `multiple-choice`,
                question: `Does analyzing film "ruin" the experience of watching it?`,
                options: [
                  `Yes — once you see the techniques, films feel mechanical and you can't be moved by them anymore.`,
                  `Yes — analysis is only for critics, and ordinary viewers should just enjoy movies without thinking.`,
                  `No — like knowing how a magic trick works, it adds appreciation, making you both moved and less manipulated.`,
                  `No, because film techniques are too subtle for analysis to notice them in the first place.`,
                ],
                correctIndex: 2,
                explanation: `No, it does the opposite, the way knowing how a magic trick works can make it more amazing. When you understand what a filmmaker did to make you cry or hold your breath, you can still have all those feelings AND admire the craft, a richer experience, not a colder one. You become both a more moved viewer and a less manipulated one, because analysis adds a second layer underneath the emotions rather than switching them off. People resist learning technique fearing it spoils the fun, but it deepens both enjoyment and protection, a double vision of fully feeling and clearly seeing. The distractors claim analysis kills feeling, is critics-only, or that techniques are unnoticeable.`,
              },
              {
                id: `q9`,
                type: `true-false`,
                question: `True or false: A skilled filmmaker can use a low-angle shot (which usually suggests power) on a weak or foolish character to create irony, flipping its usual meaning.`,
                correctAnswer: true,
                explanation: `True, and this is exactly why film is a flexible language with strong tendencies rather than a fixed codebook. A low angle looking up at a character does often suggest power, that tendency is real and worth knowing. But the meaning of any technique comes from how it works together with the story, the character, and every other choice, not from a fixed dictionary. So a skilled filmmaker who knows the tendency can deliberately break it: putting a heroic low angle on a weak, cowardly, or foolish character creates irony, the grand framing clashing with who the person actually is, which can be funny, sad, or pointed. The same move works elsewhere, like using warm, cozy golden light to make something feel sickly and false rather than safe. This is the heart of the lesson: great filmmakers learn the tendencies precisely so they can fulfill them or subvert them for effect, which is why "this shot ALWAYS means X" is wrong, and why reading film well means watching how each particular film uses or flips the usual meanings in context.`,
              },
              {
                id: `q10`,
                type: `inference`,
                question: `You're 14, watching an emotional ad with family, and it makes everyone feel like they need to buy the product to be happy. Your younger sibling is swept up and says "we HAVE to get this." Using this whole lesson, what do you think, and what could you helpfully point out?`,
                options: [
                  `Tell your sibling they're being dumb for falling for an obvious ad and should know better.`,
                  `Read the ad as constructed (name the light, music, editing doing the work), see it's manipulation, and gently hand your sibling the same double vision without crushing their excitement.`,
                  `Agree you all need the product, since the ad is well made and everyone in the room felt it.`,
                  `Say nothing, because pointing out how ads work would just spoil the fun for everyone.`,
                ],
                correctIndex: 1,
                explanation: `This is where film literacy becomes real-life protection. Switch on the second layer and read the ad as constructed: name the techniques producing the "I need this" feeling, warm golden light making everything aspirational, swelling music doing much of the work (imagine it with the sound off and the longing drains away), quick editing associating the product with happy faces and belonging. Recognize what it's doing (the propaganda connection): using film techniques to make you feel longing, then attaching it to a product so you act before you think. Be fair, not preachy, feeling the emotion isn't a failure, the ad is expertly made to work on everyone. Help your sibling gently ("that's a really good ad, isn't it? look how the music makes us want it") so they keep enjoying it while switching on their own double vision, and separate feeling from decision. The distractors are cruelty, capitulation, and silence.`,
              },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you think of film as "just recordings of things happening," or as built and chosen? What surprised you most, the editing trick with the face, how much work sound does, or that "always means X" rules are overstated?` },
            { id: `reflect-sound`, category: `The power of sound`, prompt: `Try the experiment in your head (or for real): a tense or sad scene you remember, with the sound off. How much of what you felt was actually coming from the music and sound, not the picture? Why do you think sound's power is so easy to miss?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson offers "watching awake", feeling fully and seeing clearly at once. Do you worry analyzing film will ruin it for you, or does seeing the craft sound like it would deepen it? When have you understood how something worked and enjoyed it more, not less?` },
            { id: `reflect-manipulation`, category: `Moved vs. manipulated`, prompt: `The same techniques move you in a great film and manipulate you in an ad. Where have you felt a screen trying to make you feel something so you'd buy, believe, or share? Could you name the technique it used? How does naming it change its power over you?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You'll watch film and video every day for life. Pick one thing you'll watch soon and try switching on the "second layer" once during it, just notice one choice: a cut, the light, the music. What did you catch, and did it change the experience?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "all this analysis is overthinking, just enjoy the movie and stop dissecting everything." State the strongest version. Where is it partly right (you can over-analyze), and where does this lesson show that seeing the craft adds to the enjoyment rather than killing it?` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the most immediately usable lesson in the band, you watch screens daily. Two paths.`,
          familyActivity: {
            title: `The Sound-Off / Score-Swap Experiment`,
            duration: `40 minutes`,
            description: `As a family, prove to yourselves how much film technique shapes feeling, using movies you already have. First, the sound-off test: pick a scene everyone remembers as scary, sad, or thrilling, and watch it with the sound completely off. Talk about how much weaker the feeling is, and how much of the emotion was actually coming from your ears. Then, if you can, the score-swap: play the same silent scene while humming or playing very different music (something cheerful over a tense scene, something ominous over a calm one) and feel how completely the meaning changes with nothing but the soundtrack. Finally, the light-and-angle hunt: watch a few minutes of any film and pause to notice the choices, where is the camera, is it looking up or down at the character, is the light warm or cold, bright or shadowed, and what is each choice making you feel? The goal is to move the whole family from watching passively to watching awake, seeing the deliberate choices that were shaping you all along, which is genuinely fun once you start noticing.`,
          },
          projectOption: {
            title: `Shoot The Same Scene Two Ways, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Prove film language to yourself by making it, using just a phone camera. Week 1: pick a tiny, simple moment, someone walking into a room, picking up an object, sitting down, and plan to film it two completely different ways to create two opposite feelings (for example, "safe and warm" versus "tense and threatening"). For each version, deliberately choose your tools from the lesson: camera angle (low or high), how close the shot is (wide or close-up), the lighting (bright or shadowed, warm or cool), and especially the sound or music you would add. Week 2: film both versions of the same simple action, edit them simply (even just choosing the order of a few shots), and add contrasting music to each. Then watch them back to back and write a short reflection: same action, how different did they feel, and which specific techniques created the difference? If you cannot film, you can storyboard it on paper instead, sketching each shot and noting the angle, light, and sound. The point is to feel, as a maker, that meaning and emotion in film come from deliberate choices, not from the events themselves, which is the whole lesson, learned from the inside.`,
            offerToParent: `Parent: opt your child into the shoot-it-two-ways project (a phone camera or even paper storyboards is plenty). Making the same simple action feel "safe" and then "threatening" using only camera angle, framing, light, and sound teaches film language far more deeply than watching ever could, and it builds real media literacy: once they have manufactured an emotion with these tools themselves, they will see the tools at work in every ad and video for the rest of their lives.`,
          },
          identityQuestion: `If you become someone who can be fully swept up in a film AND, whenever you choose, see exactly the choices, light, cut, angle, sound, that are shaping your feelings, what does that let you do in a world where you spend hours every day inside screens built to move you, that someone who only ever feels the effect can never do?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can feel a film fully and still see the choices shaping me.`,
            `A person who notices when a screen is trying to move me, and how.`,
            `Someone who knows film is a built language, not just a recording of reality.`,
          ],
          saveKey: `identity_responses_ca_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventeen down. You just learned to read the language you have been swimming in your whole life. You learned that film is a constructed language where everything was chosen, not found, and that editing builds meaning, the same face reads "hungry" or "grieving" depending on what it is cut beside. You learned the toolkit that shapes your feelings, light, camera angle and movement, and sound, the secret weapon doing more emotional work than almost anyone notices. You learned to spot the overstated "this shot ALWAYS means X" codebook claims and the opposite error of reading hidden meaning into every coincidence, and to hold the truer view: film is a flexible language with strong tendencies, not a fixed code. And you saw why this is real power, media literacy for the most persuasive medium of your time, connected to how art moves people and how the same tools serve films and propaganda alike, making you both more moved and less manipulated. Most of all, you can now watch awake: fully feeling and clearly seeing at once, enjoying the magic and seeing the magician. Next: world music and global fusion, where sounds and traditions cross borders, and the real questions about borrowing, blending, and respect. Onward, {name}. — Muse`,
          badge: `film-language-literate`,
          badgeName: `Film Language Literate`,
          xpEarned: 75,
          competencies: [
            `Explains that film is a constructed language of deliberate choices (camera, cut, light, sound), not a neutral recording`,
            `Understands how editing builds meaning through juxtaposition (the same shot means different things by what it is cut next to)`,
            `Names the emotional toolkit, light, camera angle and movement, and sound, and recognizes sound as the most underrated`,
            `Spots the overstated "this shot ALWAYS means X" codebook claim as a real-seed-inflated-to-rule error`,
            `Spots the opposite error of over-reading hidden meaning into incidental details (the pattern-finding mistake)`,
            `Holds the accurate view: film is a flexible language with strong tendencies that filmmakers fulfill or deliberately break`,
            `Applies film literacy as protection: seeing the techniques that move them in films, ads, and propaganda, becoming both more moved and less manipulated`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: World Music and Global Fusion`,
            hook: `When sounds and traditions cross borders and blend, who gets credit, what is celebration, and what is taking? Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L17 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
