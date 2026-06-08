// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L10 — The Role of Art in Social Movements
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Protest Art, Propaganda, Art & Power, Civic Voice
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: PERSPECTIVES (multi-viewpoint debate on whether and how art
// changes the world). Contract matches L05: perspectives[] with voice/era/stance/
// quote/argument/evidence/strengths_and_limits; synthesisPrompt + reflectionPrompt.
// EVENHANDEDNESS: presents protest art AND propaganda as the same tool aimed at
// different ends; teaches the critical-thinking skill of telling them apart rather
// than declaring one political side correct. Real historical examples across causes.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l10-v1";

const CREATIVE_ARTS_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-10`,
      title: `The Role of Art in Social Movements`,
      duration: 35,
      xpReward: 75,
      badge: `art-power-literate`,
      badgeName: `Art & Power Literate`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, this whole band has treated art as expression, as meaning, as a career. Now meet art as a force, something that can move crowds, topple ideas, and change history, or be used to control and deceive. A single image can become the symbol of a movement; a song can carry a struggle across borders; a poster can make millions feel something all at once. That power is real, and it cuts both ways. The same tools that fueled movements for freedom and justice have also fueled propaganda for tyranny and war. So this lesson holds two questions at once: can art actually change the world, or does it just make us feel like it does? And how do you tell the difference between art that opens minds and art that manipulates them? You will not be handed a political side today; you will be handed a way of seeing clearly. Onward.`,
          headline: `The Role of Art in Social Movements`,
          subtitle: `Can art change the world, or just make us feel it does? Perspectives.`,
          visual: `/voyager-assets/creative-arts/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When Art Carried A Movement`,
          paragraphs: [
            `Start with the evidence that art really has shaped movements, because it is concrete and undeniable. Think of how often a struggle is remembered through a single image. Picasso's enormous 1937 painting "Guernica," made after warplanes bombed a Spanish town, became one of history's most powerful anti-war images, a tangle of screaming figures that says more about the horror of war than a thousand news reports. It did not stop the war, but it shaped how generations understood it, and it still travels the world as a symbol. An artwork can become the memory a society keeps.`,
            `Music has carried movements just as powerfully. Songs gave the United States civil rights movement of the 1950s and 60s a shared voice; protesters sang together in the face of danger, and the songs both steadied them and told the wider world what they stood for. Across Latin America, "Nueva Canción," the "new song" movement, used folk music to carry messages of justice and resistance under harsh governments, and the Chilean musician Víctor Jara became a global symbol when he was killed during the 1973 coup. Music does something posters and paintings cannot: it is sung by many mouths at once, turning a crowd into a single voice, which is part of why movements reach for it.`,
            `Here is what these examples show, stated carefully. Art rarely "changes the world" by itself, in the way a law or an election does. What it does is arguably deeper and slower: it changes how people feel and what they can imagine, it gives a scattered group a shared symbol and a shared voice, it makes an abstract cause feel personal and urgent, and it preserves the memory of a struggle long after the news cycle moves on. A movement still needs organizing, strategy, and often years of unglamorous work, but art is frequently the thing that makes people care enough to do that work, and that keeps them going. Art is not usually the engine of change, but it is often the fuel.`,
          ],
          image: `/voyager-assets/creative-arts/l10-s1-carried.webp`,
          imageCaption: `Concrete evidence art shapes movements. Picasso's huge 1937 "Guernica" (made after warplanes bombed a Spanish town) became one of history's most powerful anti-war images, a tangle of screaming figures; it did not stop the war but shaped how generations understood it and still travels as a symbol. Music carried movements too: songs gave the 1950s-60s U.S. civil rights movement a shared voice, steadying protesters and telling the world what they stood for; across Latin America "Nueva Canción" used folk music for justice and resistance, and Chilean musician Víctor Jara became a global symbol when killed during the 1973 coup. Music turns a crowd into one voice. The careful conclusion: art rarely changes the world by itself like a law does; it changes how people feel and what they can imagine, gives a shared symbol and voice, makes a cause feel personal, and preserves memory. Not usually the engine of change, but often the fuel.`,
          vocab: [
            {
              word: `fuel movements`,
              definition: `Concrete, undeniable evidence that art has shaped movements. A struggle is often remembered through a single image: Picasso's enormous 1937 painting "Guernica," made after warplanes bombed a Spanish town, became one of history's most powerful anti-war images, a tangle of screaming figures that conveys the horror of war more than a thousand news reports; it did not stop the war, but it shaped how generations understood it and still travels the world as a symbol. Music has carried movements just as powerfully: songs gave the United States civil rights movement of the 1950s and 60s a shared voice, steadying protesters in the face of danger and telling the wider world what they stood for; across Latin America, "Nueva Canción" (the "new song" movement) used folk music to carry messages of justice and resistance under harsh governments, and the Chilean musician Víctor Jara became a global symbol when he was killed during the 1973 coup. Music does what posters and paintings cannot, being sung by many mouths at once, turning a crowd into a single voice. The careful conclusion: art rarely "changes the world" by itself the way a law or election does; what it does is arguably deeper and slower, changing how people feel and what they can imagine, giving a scattered group a shared symbol and voice, making an abstract cause feel personal and urgent, and preserving the memory of a struggle after the news moves on. A movement still needs organizing, strategy, and years of unglamorous work, but art is often what makes people care enough to do that work and keeps them going. Art is not usually the engine of change, but it is often the fuel.`,
              audioPrompt: `Start with the evidence that art really has shaped movements, {name}, because it is concrete and undeniable. Think of how often a struggle is remembered through a single image. Picasso's enormous 1937 painting "Guernica," made after warplanes bombed a Spanish town, became one of history's most powerful anti-war images, a tangle of screaming figures that says more about the horror of war than a thousand news reports. It did not stop the war, but it shaped how generations understood it, and it still travels the world as a symbol. Music has carried movements just as powerfully. Songs gave the United States civil rights movement of the 1950s and 60s a shared voice; protesters sang together in the face of danger. Across Latin America, Nueva Canción, the new song movement, used folk music to carry messages of justice and resistance under harsh governments, and the Chilean musician Víctor Jara became a global symbol when he was killed during the 1973 coup. Music does something posters and paintings cannot: it is sung by many mouths at once, turning a crowd into a single voice. Here is what these examples show. Art rarely changes the world by itself, the way a law or an election does. What it does is deeper and slower: it changes how people feel and what they can imagine, it gives a scattered group a shared symbol and a shared voice, and it preserves the memory of a struggle long after the news cycle moves on. Art is not usually the engine of change, but it is often the fuel.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Same Power, Turned Dark: Propaganda`,
          paragraphs: [
            `Now the uncomfortable truth that makes this lesson serious: the exact power that lets art fuel movements for justice also lets it fuel lies, hatred, and tyranny. When art is used to push a one-sided message designed to control how people think, especially by a government or a powerful group, it is called propaganda. Propaganda uses the same tools as the protest art you just admired, striking images, stirring music, powerful symbols, but it aims them at making people obey, hate, or stop questioning, rather than at opening their eyes. The skill is not to love all moving art and fear none; it is to notice what the moving art is trying to do to you.`,
            `History is full of it. Tyrannical governments across the 20th century poured resources into films, posters, parades, and music designed to glorify a leader, dehumanize a chosen enemy, and make citizens feel that questioning was betrayal. These works were often technically brilliant, beautifully shot, stirringly scored, gorgeously designed, which is exactly what made them dangerous. We sometimes imagine propaganda as crude and obvious, but the most effective propaganda is gorgeous and emotionally overwhelming, because beauty lowers your guard. A clumsy lie is easy to reject; a beautiful one slips past your thinking and goes straight to your feelings.`,
            `So how do you tell protest art from propaganda, when they use the same tools? It is genuinely hard, and partly it depends on where you stand, one person's "propaganda" can be another's "movement art." But there are honest questions that help. Does the work invite you to think, or pressure you to stop thinking? Does it show its opponents as full human beings who are wrong, or as monsters who are barely human? Does it admit any complexity, or is everything pure good versus pure evil? Is it asking you to feel something so you will understand, or so you will obey? None of these is a perfect test, and the line is genuinely blurry, but the questions move you from being swept along to seeing clearly, which is the whole point.`,
          ],
          image: `/voyager-assets/creative-arts/l10-s2-propaganda.webp`,
          imageCaption: `The uncomfortable truth: the same power that lets art fuel justice also lets it fuel lies, hatred, and tyranny. Propaganda is art used to push a one-sided message designed to control how people think, especially by a government or powerful group; it uses the same tools as protest art (striking images, stirring music, powerful symbols) but aims them at making people obey, hate, or stop questioning. 20th-century tyrannies poured resources into films, posters, parades, and music to glorify a leader, dehumanize a chosen enemy, and make questioning feel like betrayal, often technically brilliant, which is exactly what made them dangerous: the most effective propaganda is gorgeous and emotionally overwhelming, because beauty lowers your guard. Telling protest art from propaganda is hard and partly depends on where you stand, but honest questions help: does it invite you to think or pressure you to stop? Show opponents as full humans or as monsters? Admit complexity or pure good vs. evil? Make you feel so you understand, or so you obey?`,
          vocab: [
            {
              word: `turned dark`,
              definition: `The uncomfortable truth that makes this lesson serious: the exact power that lets art fuel movements for justice also lets it fuel lies, hatred, and tyranny. When art is used to push a one-sided message designed to control how people think, especially by a government or a powerful group, it is called propaganda. Propaganda uses the same tools as protest art, striking images, stirring music, powerful symbols, but aims them at making people obey, hate, or stop questioning rather than at opening their eyes. The skill is not to love all moving art and fear none; it is to notice what the moving art is trying to do to you. History is full of propaganda: tyrannical governments across the 20th century poured resources into films, posters, parades, and music designed to glorify a leader, dehumanize a chosen enemy, and make citizens feel that questioning was betrayal, and these works were often technically brilliant, which is exactly what made them dangerous. We imagine propaganda as crude and obvious, but the most effective propaganda is gorgeous and emotionally overwhelming, because beauty lowers your guard; a clumsy lie is easy to reject, a beautiful one slips past your thinking and goes straight to your feelings. Telling protest art from propaganda is genuinely hard, since they use the same tools and one person's "propaganda" can be another's "movement art," but honest questions help: Does the work invite you to think, or pressure you to stop thinking? Does it show opponents as full human beings who are wrong, or as monsters who are barely human? Does it admit any complexity, or is everything pure good versus pure evil? Is it asking you to feel something so you will understand, or so you will obey? None is a perfect test and the line is blurry, but the questions move you from being swept along to seeing clearly.`,
              audioPrompt: `Now the uncomfortable truth that makes this lesson serious, {name}: the exact power that lets art fuel movements for justice also lets it fuel lies, hatred, and tyranny. When art is used to push a one-sided message designed to control how people think, especially by a government or a powerful group, it is called propaganda. Propaganda uses the same tools as the protest art you just admired, striking images, stirring music, powerful symbols, but it aims them at making people obey, hate, or stop questioning, rather than at opening their eyes. History is full of it. Tyrannical governments across the 20th century poured resources into films, posters, parades, and music designed to glorify a leader, dehumanize a chosen enemy, and make citizens feel that questioning was betrayal. These works were often technically brilliant, which is exactly what made them dangerous. We sometimes imagine propaganda as crude and obvious, but the most effective propaganda is gorgeous and emotionally overwhelming, because beauty lowers your guard. A clumsy lie is easy to reject; a beautiful one slips past your thinking and goes straight to your feelings. So how do you tell protest art from propaganda, when they use the same tools? It is genuinely hard, and partly it depends on where you stand. But there are honest questions that help. Does the work invite you to think, or pressure you to stop thinking? Does it show its opponents as full human beings who are wrong, or as monsters who are barely human? Is it asking you to feel something so you will understand, or so you will obey?`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Art Actually Moves People`,
          paragraphs: [
            `To use this skill, it helps to understand the actual mechanisms, the specific ways art reaches into people, because the same mechanisms serve both protest art and propaganda. The first is emotion before argument. Art bypasses the slow, careful part of your mind and hits the fast, feeling part first; you feel the image or the song before you have reasoned about it. That is why a photograph of a single suffering child can move a nation more than accurate statistics about millions, a fact that is both the beautiful power of art and its most dangerous lever.`,
            `The second mechanism is the symbol, a simple image or object that comes to stand for a whole complicated idea, so that seeing it instantly summons the feeling. A raised fist, a particular color, a specific flag or face, these let a movement be recognized and felt in an instant, and they let people show belonging by displaying them. The third is shared experience, especially through music and ritual: when people sing, march, or chant together, something real happens, individual people start to feel like one body, which builds courage, belonging, and commitment. This is genuinely powerful and genuinely double-edged: it can bond people for justice or weld them into a mob.`,
            `Understanding these mechanisms is what turns you from a target into a thoughtful participant. You do not have to become cold or refuse to be moved, being moved by art is part of being human and is often exactly right. The goal is to be moved with your eyes open: to feel the emotion and also notice that you are feeling it, to recognize a symbol's pull and still ask what it actually stands for, to enjoy the power of singing together and still keep your own ability to think. The most manipulated people are the ones who do not know how the manipulation works; learning the mechanisms is how you get to be moved by the good and protected from the worst, instead of being swept along by whatever is loudest and most beautiful.`,
          ],
          image: `/voyager-assets/creative-arts/l10-s3-mechanisms.webp`,
          imageCaption: `The mechanisms by which art moves people, the same ones serving protest art AND propaganda. (1) Emotion before argument: art hits the fast feeling part of the mind before the slow reasoning part, which is why a photo of one suffering child moves a nation more than statistics about millions, art's beautiful power and its most dangerous lever. (2) The symbol: a simple image (a raised fist, a color, a flag or face) standing for a whole idea, summoning the feeling instantly and letting people show belonging. (3) Shared experience: singing, marching, or chanting together makes individuals feel like one body, building courage and commitment, which can bond people for justice or weld them into a mob. Understanding these turns you from target into thoughtful participant: be moved with your eyes open, feel the emotion and notice you are feeling it. The most manipulated people are those who do not know how manipulation works.`,
          vocab: [
            {
              word: `shared experience`,
              definition: `The actual mechanisms by which art reaches into people, the same ones serving both protest art and propaganda, which is why understanding them is the core skill. FIRST, emotion before argument: art bypasses the slow, careful part of your mind and hits the fast, feeling part first, so you feel the image or song before you have reasoned about it; this is why a photograph of a single suffering child can move a nation more than accurate statistics about millions, which is both the beautiful power of art and its most dangerous lever. SECOND, the symbol: a simple image or object that comes to stand for a whole complicated idea, so seeing it instantly summons the feeling (a raised fist, a particular color, a specific flag or face); symbols let a movement be recognized and felt in an instant and let people show belonging by displaying them. THIRD, shared experience, especially through music and ritual: when people sing, march, or chant together, individuals start to feel like one body, which builds courage, belonging, and commitment, and is genuinely double-edged, bonding people for justice or welding them into a mob. Understanding these mechanisms turns you from a target into a thoughtful participant. You do not have to become cold or refuse to be moved, being moved by art is part of being human and often exactly right; the goal is to be moved with your eyes open, feeling the emotion while noticing that you are feeling it, recognizing a symbol's pull while still asking what it actually stands for, enjoying the power of singing together while keeping your own ability to think. The most manipulated people are the ones who do not know how the manipulation works, so learning the mechanisms is how you get to be moved by the good and protected from the worst, instead of swept along by whatever is loudest and most beautiful.`,
              audioPrompt: `To use this skill, {name}, it helps to understand the actual mechanisms, the specific ways art reaches into people, because the same mechanisms serve both protest art and propaganda. The first is emotion before argument. Art bypasses the slow, careful part of your mind and hits the fast, feeling part first; you feel the image or the song before you have reasoned about it. That is why a photograph of a single suffering child can move a nation more than accurate statistics about millions, a fact that is both the beautiful power of art and its most dangerous lever. The second mechanism is the symbol, a simple image or object that comes to stand for a whole complicated idea, so that seeing it instantly summons the feeling. A raised fist, a particular color, a specific flag or face. The third is shared experience, especially through music and ritual: when people sing, march, or chant together, something real happens, individual people start to feel like one body, which builds courage, belonging, and commitment. This is genuinely powerful and genuinely double-edged: it can bond people for justice or weld them into a mob. Understanding these mechanisms is what turns you from a target into a thoughtful participant. You do not have to become cold or refuse to be moved. The goal is to be moved with your eyes open: to feel the emotion and also notice that you are feeling it. The most manipulated people are the ones who do not know how the manipulation works.`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Does Art Actually Change Anything?`,
          paragraphs: [
            `Now the genuinely contested question, the one the Perspectives screen will hand you: does art actually change the world, or does it just make us feel like we are changing it while nothing really moves? This is a real debate among serious people, not a fake one with an obvious answer. The skeptical view has teeth: a protest song does not pass a law, a powerful mural does not feed anyone, and sometimes making and sharing political art can become a substitute for harder action, you post the image, feel righteous, and do nothing else. Critics call this "slacktivism," and the worry is real: feeling like you helped is not the same as helping.`,
            `But the hopeful view has teeth too. Movements are made of people, and people act on what they feel and imagine, not just on facts, so anything that changes hearts and minds changes what people are willing to do. Art has demonstrably shifted what whole societies find acceptable, made invisible suffering visible, given courage to the frightened, and preserved the memory and identity of people whom the powerful tried to erase. Laws often change only after feelings change first, and art is frequently what changes the feelings. By this view, asking art to single-handedly pass legislation is the wrong test; its job is upstream of that, in the slow shifting of what people care about and can imagine.`,
            `The honest, grown-up position holds both. Art alone rarely changes the world, and treating a repost as real action is a genuine trap worth avoiding. And art is often an essential part of how change happens, the part that makes people care, gives them courage, and helps them imagine something different, without which the organizing and the laws would never get the wind behind them. So the wise stance is neither "art changes everything" nor "art changes nothing," but something more useful: art is powerful and partial. It is one real force among several, capable of enormous good and enormous harm, and the task is to use it well, pair it with real action, and stay clear-eyed about both what it can and cannot do.`,
          ],
          image: `/voyager-assets/creative-arts/l10-s4-change.webp`,
          imageCaption: `The genuinely contested question: does art change the world, or just make us feel like it does? A real debate. Skeptical view (has teeth): a protest song passes no law, a mural feeds no one, and political art can become a substitute for harder action, you post the image, feel righteous, do nothing ("slacktivism"); feeling like you helped is not helping. Hopeful view (also has teeth): movements are made of people who act on what they feel and imagine, so changing hearts changes what people will do; art has shifted what societies find acceptable, made suffering visible, given courage, preserved identity the powerful tried to erase, and laws often change only after feelings change first. The grown-up position holds both: art is powerful AND partial, one real force among several, capable of great good and harm. Neither "art changes everything" nor "nothing", but: use it well, pair it with real action, stay clear-eyed.`,
          vocab: [
            {
              word: `powerful partial`,
              definition: `The genuinely contested question the Perspectives screen hands you: does art actually change the world, or does it just make us feel like we are changing it while nothing really moves? This is a real debate among serious people. The skeptical view has teeth: a protest song does not pass a law, a powerful mural does not feed anyone, and sometimes making and sharing political art becomes a substitute for harder action, you post the image, feel righteous, and do nothing else; critics call this "slacktivism," and the worry that feeling like you helped is not the same as helping is real. But the hopeful view has teeth too: movements are made of people, and people act on what they feel and imagine, not just on facts, so anything that changes hearts and minds changes what people are willing to do; art has demonstrably shifted what whole societies find acceptable, made invisible suffering visible, given courage to the frightened, and preserved the memory and identity of people whom the powerful tried to erase, and laws often change only after feelings change first, with art frequently being what changes the feelings, so asking art to single-handedly pass legislation is the wrong test since its job is upstream of that. The honest, grown-up position holds both: art alone rarely changes the world and treating a repost as real action is a genuine trap, AND art is often an essential part of how change happens, the part that makes people care, gives courage, and helps them imagine something different. So the wise stance is neither "art changes everything" nor "art changes nothing" but "art is powerful and partial": one real force among several, capable of enormous good and enormous harm, and the task is to use it well, pair it with real action, and stay clear-eyed about what it can and cannot do.`,
              audioPrompt: `Now the genuinely contested question, {name}, the one the Perspectives screen will hand you: does art actually change the world, or does it just make us feel like we are changing it while nothing really moves? This is a real debate among serious people, not a fake one with an obvious answer. The skeptical view has teeth: a protest song does not pass a law, a powerful mural does not feed anyone, and sometimes making and sharing political art can become a substitute for harder action, you post the image, feel righteous, and do nothing else. Critics call this slacktivism, and the worry is real: feeling like you helped is not the same as helping. But the hopeful view has teeth too. Movements are made of people, and people act on what they feel and imagine, not just on facts, so anything that changes hearts and minds changes what people are willing to do. Art has shifted what whole societies find acceptable, made invisible suffering visible, given courage to the frightened, and preserved the memory of people whom the powerful tried to erase. Laws often change only after feelings change first, and art is frequently what changes the feelings. The honest, grown-up position holds both. Art alone rarely changes the world, and treating a repost as real action is a genuine trap. And art is often an essential part of how change happens. So the wise stance is neither "art changes everything" nor "art changes nothing," but something more useful: art is powerful and partial.`,
            },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together before you weigh the voices. You saw that art has genuinely fueled movements, "Guernica," civil rights songs, Nueva Canción, not usually as the engine of change but as the fuel that makes people care and keeps them going. You saw the same power turned dark in propaganda, and learned that the most dangerous propaganda is the most beautiful, because beauty lowers your guard. You learned the mechanisms, emotion before argument, the symbol, shared experience, and that knowing them lets you be moved with your eyes open. And you met the real debate about whether art changes anything, landing on "powerful and partial."`,
            `Now the Perspectives screen will put several voices in front of you, each holding a different view: that art is a real engine of justice, that it is mostly comforting noise that changes nothing, that it is most dangerous as propaganda, that its true power is preserving identity and memory, and that the real question is always who is wielding it and toward what end. Your task, as always, is not to crown a winner but to enter each voice honestly, find the true thing it points at, and feel where it strains.`,
            `One last thing to carry, because this lesson touches real power and real harm. The point of learning how art moves people is not to make you cynical, suspicious of every beautiful thing, nor naive, swept up by whatever moves you most. It is to make you free: free to be genuinely moved by art that deserves it, free to make art that moves others toward good, and free to recognize, and resist, art that is trying to switch off your thinking. In a world absolutely flooded with images and music designed to make you feel and act in particular ways, that freedom, to be moved with your eyes open, may be one of the most important things this whole band gives you. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l10-s5-before.webp`,
          imageCaption: `Threads together. Art has genuinely fueled movements ("Guernica," civil rights songs, Nueva Canción), as fuel that makes people care, not usually the engine. The same power turns dark in propaganda, and the most dangerous propaganda is the most beautiful, because beauty lowers your guard. The mechanisms (emotion before argument, the symbol, shared experience) let you be moved with your eyes open once you know them. The real debate about whether art changes anything lands on "powerful and partial." The Perspectives screen ahead offers several views (art as engine of justice; as comforting noise; as dangerous propaganda; as preserver of identity; as a tool whose meaning depends on who wields it). Last thought: the point is not cynicism or naivety but freedom, to be moved by art that deserves it, make art that moves others toward good, and resist art trying to switch off your thinking.`,
          vocab: [
            {
              word: `eyes open`,
              definition: `The synthesis before the Perspectives screen. You saw that art has genuinely fueled movements, Picasso's "Guernica," the songs of the civil rights movement, Latin America's Nueva Canción and Víctor Jara, not usually as the engine of change the way a law is, but as the fuel that makes people care and keeps them going. You saw the same power turned dark in propaganda, art used to push a one-sided message to control thought, and learned that the most dangerous propaganda is the most beautiful, because beauty lowers your guard. You learned the mechanisms by which art moves people, emotion before argument, the symbol, and shared experience, and that knowing them lets you be moved with your eyes open rather than swept along. And you met the real debate over whether art changes anything, landing on "powerful and partial": neither "art changes everything" nor "art changes nothing," but one real force among several, to be used well and paired with real action. The Perspectives screen will put several voices before you (art as an engine of justice; as comforting noise that changes nothing; as most dangerous in the form of propaganda; as a preserver of identity and memory; and as a tool whose meaning depends entirely on who wields it and toward what end), and your task is to enter each honestly, find the true thing it points at, and feel where it strains. The last thing to carry: the point of learning how art moves people is not to make you cynical (suspicious of every beautiful thing) nor naive (swept up by whatever moves you most), but to make you free, free to be genuinely moved by art that deserves it, to make art that moves others toward good, and to recognize and resist art trying to switch off your thinking. In a world flooded with images and music designed to make you feel and act in particular ways, that freedom, to be moved with your eyes open, may be one of the most important things this band gives you.`,
              audioPrompt: `Pull it together before you weigh the voices, {name}. You saw that art has genuinely fueled movements, "Guernica," civil rights songs, Nueva Canción, not usually as the engine of change but as the fuel that makes people care and keeps them going. You saw the same power turned dark in propaganda, and learned that the most dangerous propaganda is the most beautiful, because beauty lowers your guard. You learned the mechanisms, emotion before argument, the symbol, shared experience, and that knowing them lets you be moved with your eyes open. And you met the real debate about whether art changes anything, landing on "powerful and partial." Now the Perspectives screen will put several voices in front of you, each holding a different view about art and power. Your task, as always, is not to crown a winner but to enter each voice honestly, find the true thing it points at, and feel where it strains. One last thing to carry. The point of learning how art moves people is not to make you cynical, suspicious of every beautiful thing, nor naive, swept up by whatever moves you most. It is to make you free: free to be genuinely moved by art that deserves it, free to make art that moves others toward good, and free to recognize, and resist, art that is trying to switch off your thinking. In a world flooded with images and music designed to make you feel and act in particular ways, that freedom, to be moved with your eyes open, may be one of the most important things this whole band gives you.`,
            },
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l10-perspectives`,
          type: `perspectives`,
          headline: `Can Art Change The World?`,
          intro: `{name}, five voices on art and power. Open each one. Find the true thing it points at, and feel where it strains. You are not crowning a winner; you are learning to think with each, so you can be moved with your eyes open.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The Believer in Art's Power`,
              era: `the optimist`,
              stance: `Art is a real engine of justice; it changes hearts, and changed hearts change the world.`,
              quote: `"Show people one true image and you can move a nation that a thousand statistics could not. That is power, and it is real."`,
              argument: `Movements are made of people, and people act on what they feel and imagine. Art makes invisible suffering visible, gives the frightened courage, and shifts what a whole society is willing to accept. Laws follow feelings, and art changes feelings.`,
              evidence: `Picasso's "Guernica" (1937) shaped how generations understood the horror of war; songs gave the civil rights movement a shared voice and steadied people facing real danger; Nueva Canción carried resistance across Latin America. These are not nothing.`,
              strengths_and_limits: `Strength: it honors the documented, real power of art to move people and shift what societies imagine and accept. Limit: it can overclaim, art rarely changes things by itself, and crediting art with victories that actually took years of organizing and unglamorous work flatters the art and ignores the workers.`,
            },
            {
              id: `p2`,
              voice: `The Skeptic`,
              era: `the realist`,
              stance: `Art mostly makes us feel like we are changing things while nothing actually moves; feeling is not doing.`,
              quote: `"You shared the image, felt righteous, and went to bed. The law did not change. The hungry were not fed. What exactly did your art do?"`,
              argument: `A song passes no law; a mural feeds no one. Worse, making and sharing political art can replace harder action, you get the good feeling of helping without doing the work, which critics call slacktivism. Real change comes from organizing, money, votes, and law, not vibes.`,
              evidence: `Plenty of movements had stirring art and still lost; plenty of dull, artless organizing won real victories. Endless powerful protest images circulate online daily while the problems they depict continue, suggesting the images alone do little.`,
              strengths_and_limits: `Strength: it names a genuine trap, mistaking the feeling of helping for actually helping, and rightly insists on real action. Limit: it underrates the upstream work art does, since the caring, courage, and imagination that fuel organizing often come from exactly the art it dismisses; "feeling" is not the opposite of change, it is often its beginning.`,
            },
            {
              id: `p3`,
              voice: `The Propaganda Watcher`,
              era: `the wary one`,
              stance: `The most important fact about art's power is that it works just as well for tyranny as for justice.`,
              quote: `"The same beautiful tools that move you toward freedom can move you toward hatred. The more gorgeous it is, the harder you should look."`,
              argument: `Propaganda uses identical tools to protest art, striking images, stirring music, symbols, but aims them at making people obey, hate, and stop questioning. And the most effective propaganda is beautiful, because beauty lowers your guard. So being moved is not proof a work is good.`,
              evidence: `Twentieth-century tyrannies produced technically brilliant films, posters, and parades that glorified leaders and dehumanized enemies; their craft is exactly what made them dangerous. People who could not tell beauty from truth were the easiest to lead.`,
              strengths_and_limits: `Strength: it protects you from the most dangerous error, trusting a work because it moved you, and insists on asking what the art is trying to do to you. Limit: pushed too far it becomes pure suspicion, where you distrust every moving thing and can no longer be reached by genuinely good art, which is its own kind of loss.`,
            },
            {
              id: `p4`,
              voice: `The Keeper of Identity`,
              era: `the preserver`,
              stance: `Art's deepest power is not passing laws but keeping a people's memory, dignity, and identity alive, especially when others try to erase them.`,
              quote: `"They tried to erase us. Our songs, our images, our stories are how we remained ourselves. That is not nothing; that is survival."`,
              argument: `When the powerful try to silence or erase a people, art carries who they are across the danger, songs, murals, stories, and symbols hold identity and memory that no law protects. This is a real form of power even when no policy changes, because a people that keeps its identity cannot be fully defeated.`,
              evidence: `Nueva Canción and figures like Víctor Jara kept resistance and identity alive under dictatorship; across the world, colonized and oppressed peoples preserved language, history, and dignity through art when every official channel was closed to them.`,
              strengths_and_limits: `Strength: it names a power the law-focused views miss entirely, art as survival and memory, which matters enormously to people the powerful tried to erase. Limit: preserving identity, while profound, is not the same as changing present conditions, and a movement that only remembers without also organizing may keep its soul while losing its fights.`,
            },
            {
              id: `p5`,
              voice: `The "Who Wields It?" Thinker`,
              era: `the synthesizer`,
              stance: `Art is just a powerful tool; the real question is never "is art good or bad?" but "who is using it, and toward what end?"`,
              quote: `"A hammer builds a house or breaks a skull. Do not ask if hammers are good. Ask who is swinging, and at what."`,
              argument: `Protest art and propaganda use the same mechanisms; what separates them is purpose and honesty, not technique. So the mature question is not whether art has power (it clearly does) but who wields it, whether it invites thinking or forbids it, and whether it treats opponents as humans or monsters.`,
              evidence: `The same tools, emotion, symbol, shared experience, served both the songs that freed people and the films that enslaved minds. The difference was never the craft; it was who made it, why, and whether it opened or closed the audience's ability to think.`,
              strengths_and_limits: `Strength: it cuts through the other debates by focusing on the actually-decisive questions, purpose, honesty, and whether the work opens or closes thinking. Limit: "it depends who wields it" can become a way to dodge judgment entirely, since at some point you do have to decide whether a specific work is opening minds or manipulating them, and the tool framing alone will not make that call for you.`,
            },
          ],
          synthesisPrompt: `After hearing all five voices: where do you actually land on whether art can change the world, and on how you will tell art that opens minds from art that manipulates them? Which voice did you most want to agree with, and which one corrected it? In 5-6 sentences, build your own position.`,
          reflectionPrompt: `Think of a song, image, or video that genuinely moved you about something in the real world. Looking back with this lesson's questions, was it inviting you to think or pressuring you to stop? Did it treat people as humans or monsters? Does knowing it moved you make you trust it more, or look harder?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `The lesson says art has genuinely fueled social movements — but in a specific role. Which best captures it?`,
              options: [
                `Art is the engine: it directly passes the laws and wins the votes.`,
                `Art is the fuel, not the engine — organizing and laws still take separate work.`,
                `Art is decoration: pleasant but with no real effect on movements.`,
                `Art replaces organizing entirely once a song becomes popular enough.`,
              ],
              correctIndex: 1,
              explanation: `Art is usually the fuel, not the engine: it changes feeling, imagination, shared identity, and memory ("Guernica," civil rights songs, Nueva Canción), but the organizing and the laws still take separate, unglamorous work. The distractors over-credit art as the engine, dismiss it as mere decoration, or claim it replaces organizing.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why is the most effective propaganda often beautiful — and what does that imply about being moved?`,
              options: [
                `Because beautiful art is always honest, so beauty proves the message is true.`,
                `Because ugly art can't carry any message at all.`,
                `Because beauty lowers your guard — so being moved is never proof a work is good or true.`,
                `Because propaganda is only ever crude and obvious, never beautiful.`,
              ],
              correctIndex: 2,
              explanation: `Propaganda is art aimed at making people obey, hate, or stop questioning. The most effective kind is beautiful because beauty lowers your guard, so being moved is never proof a work is good or true. The distractors equate beauty with honesty, deny ugly art's reach, or wrongly claim propaganda is always crude.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Protest art and propaganda use the same craft. Since the tools are identical, what questions actually help you tell them apart?`,
              options: [
                `Which one has higher production quality and a bigger budget.`,
                `Whichever one of them is more popular and ends up getting shared the most widely online.`,
                `Whether it invites thinking or forbids it, shows opponents as humans or monsters, and admits complexity.`,
                `Simply whichever one of them you happen to personally agree with already, going in.`,
              ],
              correctIndex: 2,
              explanation: `Since the craft is identical, you ask about purpose and effect: does it invite thinking or forbid it, show opponents as humans or as monsters, admit complexity, and make you feel so you understand or so you obey? Imperfect tests, but they shift you toward seeing clearly. The distractors judge by budget, popularity, or your prior agreement — none of which track truth.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `The lesson names three mechanisms by which art moves people. Why does knowing them matter?`,
              options: [
                `Because knowing them lets you build better propaganda than anyone else.`,
                `Because these mechanisms only ever work on the people who have never once studied any art.`,
                `Because once you fully know them, real art can simply no longer move you at all, ever.`,
                `Emotion before argument, the symbol, and shared experience — knowing them lets you be moved with eyes open.`,
              ],
              correctIndex: 3,
              explanation: `The three mechanisms are emotion before argument, the symbol, and shared experience — and the same three serve protest art and propaganda. Knowing them lets you be moved with your eyes open, because the most manipulated people are those who don't know how manipulation works. The distractors turn the knowledge toward manipulation, or wrongly claim it immunizes or numbs you.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the strongest version of the SKEPTICAL view that art doesn't really change anything — and its limit?`,
              options: [
                `Songs pass no laws and art can become slacktivism — but it underrates the caring it creates.`,
                `Art has literally never influenced any person in history, full stop.`,
                `Art changes everything by itself, so organizing is unnecessary.`,
                `Only explicitly political art matters at all, and every other kind of art is basically worthless.`,
              ],
              correctIndex: 0,
              explanation: `The strong skeptical case: songs pass no laws, real change comes from organizing and votes, and political art can become slacktivism that replaces action. Its limit: it underrates how art creates the caring and courage that fuel the organizing in the first place. The distractors are absurd extremes (art never matters / art does everything) or a narrowing that misses the point.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the "powerful and partial" position hold about whether art changes the world?`,
              options: [
                `That art is all-powerful and reposting a graphic counts as real activism.`,
                `That art is fully powerless and so it is never genuinely worth making for any cause at all.`,
                `Both at once: art rarely changes things alone, AND it creates the caring and courage change needs.`,
                `That art only matters if it directly changes a law within a year.`,
              ],
              correctIndex: 2,
              explanation: `"Powerful and partial" holds both: art rarely changes things alone and reposting is not action, AND art creates the caring and courage change needs. It's one real force among several; use it well and pair it with real action. The distractors collapse to one pole (all-powerful or powerless) or impose an unrealistic test.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does the "who wields it?" view add to the debate — and what's its limit?`,
              options: [
                `It proves art is always good as long as the right people make it.`,
                `It reframes it to "who wields it, and does it open or close thinking?" — but can dodge judging the work itself.`,
                `It conveniently settles every single case automatically, with no real judgment needed from you.`,
                `It shows the maker's identity is the only thing that ever matters.`,
              ],
              correctIndex: 1,
              explanation: `Because the craft is identical, the "who wields it?" view reframes from "is art good or bad?" to "who wields it, why, and does it open or close thinking?" Its limit: that framing can dodge judgment, because you still must decide about the specific work in front of you. The distractors turn it into a free pass, an automatic verdict, or pure identity-judgment.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson says its goal is to make you "free" — not cynical, not naive. What does each failure mode look like, and what's freedom?`,
              options: [
                `Naivety means distrusting all art; cynicism means believing everything; freedom is somewhere random in between.`,
                `Naivety and cynicism are the same thing, and freedom means ignoring art entirely.`,
                `Freedom means never letting any art affect you, to stay safe.`,
                `Naivety gets swept up; cynicism distrusts all moving art; freedom is being moved with your eyes open.`,
              ],
              correctIndex: 3,
              explanation: `Naivety gets swept up by anything moving — which is how propaganda wins; cynicism distrusts all moving art — so good art can't reach you. Freedom is the middle: moved with your eyes open, able to be reached by good art and to resist manipulation. The distractors scramble the definitions or make "freedom" into numbness.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If a piece of political art is beautiful and moves you deeply, that is good evidence that its message is true and trustworthy.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False, and this is one of the most protective ideas in the whole lesson. Being moved by a work is not evidence that the work is true or its message trustworthy, because beauty and emotional power are exactly the tools the most dangerous propaganda uses. The most effective propaganda is gorgeous and emotionally overwhelming precisely because beauty lowers your guard: a clumsy, ugly lie is easy to reject, but a beautiful one slips past your thinking and goes straight to your feelings. Twentieth-century tyrannies produced technically brilliant, deeply moving films, posters, and music whose craft is exactly what made them dangerous. Protest art that opens minds and propaganda that closes them use identical mechanisms — emotion before argument, powerful symbols, the bonding force of shared experience — so the feeling a work produces in you cannot tell them apart. What can help tell them apart are questions about purpose and effect: does the work invite you to think or pressure you to stop, show opponents as full humans or as monsters, admit complexity or insist on pure good versus pure evil, ask you to feel so you understand or so you obey? The whole point of learning the mechanisms is to feel a work's power and still keep your own ability to judge it — to be moved with your eyes open rather than trusting a message just because it stirred you.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 14. A beautifully made video spreads through your school — stirring music, powerful images — pushing everyone to be furious at a particular group, showing them as barely human while showing "our side" as pure heroes. Your friends are sharing it and getting angry, and you feel the pull too. Using the whole lesson, what should you actually think and do?`,
              options: [
                `Share it — if it's this well-made and moving, the message must be right.`,
                `Treat the strong fast feeling as a cue to slow down, run the propaganda questions (it dehumanizes a group and paints one side as pure heroes), recognize its beauty is a reason for MORE caution not trust, resist the crowd pull, and refuse to share it — ideally raising the questions with friends without being preachy.`,
                `Make an equally angry video attacking the other side back.`,
                `Ignore it completely and say nothing, since it's not your problem.`,
              ],
              correctIndex: 1,
              explanation: `Applied art-and-power literacy on a real, high-stakes case. The move is to treat the strong fast feeling as a cue to slow down (be moved with your eyes open), run the propaganda questions (it dehumanizes a group and paints one side as pure heroes — failing them badly), recognize that its beauty is a reason for more caution not trust (the most dangerous propaganda is the most beautiful), see the crowd-bonding pull as mob-like here, and refuse to share it, ideally raising the questions with friends without being preachy. Dehumanizing a whole group is a classic propaganda signature, and resisting exactly this is what "being moved with your eyes open" is for. The distractors are the failure modes: sharing because it's well-made, escalating, or disengaging entirely.`,
            },
          ]
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you think of art mainly as expression or beauty, or as power? What changed when you saw that the same tools fuel both justice movements and propaganda? What surprised you most?` },
            { id: `reflect-unclear`, category: `What's still unclear`, prompt: `Telling protest art from propaganda is genuinely hard, and partly depends on where you stand. Where does that line feel most slippery to you? Is there a piece of "movement art" you love that someone on another side might honestly call propaganda?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson tried to make you someone who can be moved with their eyes open, neither cynical nor naive. Which failure mode are you more prone to, being swept up by what moves you, or being so suspicious that good art cannot reach you? Why?` },
            { id: `reflect-heritage`, category: `Your heritage`, prompt: `Caro, Nueva Canción and figures like Víctor Jara carried resistance and identity across Latin America under dictatorship. What songs, images, or art carry identity and memory in your own family or culture? What do they preserve that no law protects?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You see emotionally powerful, beautifully made political content constantly online. Pick one recent example that moved you, and honestly run the lesson's questions on it: invite thinking or stop it? humans or monsters? feel to understand or to obey? What do you conclude?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `The skeptic said art mostly makes us feel like we are helping while changing nothing ("slacktivism"). State the strongest version of that. Where is it painfully right about something you have seen, and where does it miss what art genuinely does?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This lesson is a lens for the flood of emotionally powerful content you meet every day. Two paths.`,
          familyActivity: {
            title: `Movement Art In Your Family's Story`,
            duration: `45 minutes`,
            description: `As a family, explore art that carried a cause or an identity, ideally connected to your own heritage and history. Look together at protest art, movement songs, or identity-carrying art from your family's background, for a Colombian and Latin American family this might include Nueva Canción, mural traditions, protest music, or songs that carried meaning through hard times. Listen to or look at a few pieces, then talk about them using the lesson's questions: what feeling does it create, what does it want you to do, does it invite thinking or just stir emotion, does it treat anyone as less than human? Then go further: ask older family members whether any song, image, or artwork mattered to them during a hard time, politically or personally, and what it did for them. The goal is to feel, through your own family's story, both the genuine power of art to carry identity and courage, and the skill of looking clearly at even the art you love.`,
          },
          projectOption: {
            title: `Make Honest Movement Art, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Create a piece of art for a cause you genuinely care about, while holding yourself to the honest standard this lesson teaches. Week 1: choose a real cause you believe in (kindness, the environment, fairness at school, protecting animals, anything genuine to you), and decide on a form, a poster, a song, a short video, a poem, an illustration. Then study the mechanisms on purpose: how will you use emotion, a symbol, or shared experience to move people toward your cause? Week 2: make the piece, then run it through the lesson's own test before you would ever share it: does my art invite people to think, or pressure them to stop? Does it treat anyone, even people who disagree, as a full human being rather than a monster? Am I trying to help people understand, or just to make them obey and feel? Revise it to pass your own test, then write a short reflection on the difference between making honest movement art and making propaganda, now that you have felt how thin the line can be from the maker's side. The point is to learn the power from the inside while practicing using it responsibly.`,
            offerToParent: `Parent: opt your child into the honest movement-art project, and it is worth doing this one alongside them. Making art for a real cause while deliberately holding it to the "invites thinking, treats opponents as human, helps rather than manipulates" standard teaches both the genuine power of persuasive art and the ethics of using it responsibly, an unusually mature and protective combination, especially valuable for a generation growing up inside a flood of emotionally engineered content.`,
          },
          identityQuestion: `If you become someone who can feel the full power of moving art and still see clearly what it is trying to do, who can be genuinely stirred by what deserves it and calmly resist what is trying to switch off your thinking, what does that let you do in a world flooded with beautiful images and music designed to make you feel and act in particular ways?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can be deeply moved by art and still see what it's trying to do to me.`,
            `A person who can tell art that opens minds from art that switches off thinking.`,
            `Someone who notices when something beautiful is trying to make me hate.`,
          ],
          saveKey: `identity_responses_ca_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Ten down, halfway through the band, and this one matters far beyond art class. You learned that art has genuinely fueled movements, "Guernica," the songs of the civil rights movement, Nueva Canción and Víctor Jara, usually as the fuel that makes people care, not the engine that passes the law. You learned the same power turned dark in propaganda, and the crucial warning that the most dangerous propaganda is the most beautiful, because beauty lowers your guard. You learned the mechanisms by which art moves people, emotion before argument, the symbol, and shared experience, and that knowing them lets you be moved with your eyes open. You weighed the real debate over whether art changes anything and landed on "powerful and partial," one real force among several, to be used well and paired with real action. And you practiced the honest questions that help tell art that opens minds from art that closes them: does it invite thinking or stop it, treat opponents as humans or monsters, ask you to feel so you understand or so you obey? Most of all, you learned that the goal is freedom, neither cynical nor naive, but moved with your eyes open. Next: sacred art across cultures, where art meets the deepest human questions of meaning and the holy. Onward, {name}. — Muse`,
          badge: `art-power-literate`,
          badgeName: `Art & Power Literate`,
          xpEarned: 75,
          competencies: [
            `Explains how art has fueled real movements ("Guernica," civil rights songs, Nueva Canción) as fuel rather than engine, changing feeling, imagination, shared identity, and memory`,
            `Defines propaganda as art aimed at obedience, hatred, or unquestioning belief, and knows the most dangerous propaganda is the most beautiful because beauty lowers your guard`,
            `Identifies the mechanisms by which art moves people (emotion before argument, the symbol, shared experience) and that they serve protest art and propaganda alike`,
            `Applies honest questions to distinguish mind-opening art from manipulation (invites vs. forbids thinking; humans vs. monsters; understand vs. obey)`,
            `Weighs the real debate on whether art changes the world and holds the "powerful and partial" position, avoiding both overclaiming and slacktivism`,
            `Understands the goal as being "moved with your eyes open," neither cynical nor naive`,
            `Recognizes dehumanization of a group as a key signature of dangerous propaganda and refuses to spread it`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Sacred Art Across Cultures`,
            hook: `Where art meets the holy: how cultures across the world make the sacred visible. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L10 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz} r=${reflect}`
  );
}
