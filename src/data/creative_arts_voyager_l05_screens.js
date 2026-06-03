// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L05 — Postmodern Art and the Deconstruction of Meaning
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Postmodernism, Appropriation, Meaning & Interpretation
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: PERSPECTIVES (multi-viewpoint debate on whether anything
// means anything stable). Contract: perspectives[] with voice/era/stance/quote/
// argument/evidence/strengths_and_limits per item; synthesisPrompt + reflectionPrompt.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l05-v1";

const CREATIVE_ARTS_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-05`,
      title: `Postmodern Art and the Deconstruction of Meaning`,
      duration: 35,
      xpReward: 75,
      badge: `postmodern-literate`,
      badgeName: `Postmodern Art Literate`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, here is the question this lesson hands you, and it is a strange one. Does a painting have one real meaning, the one the artist intended, or does it mean whatever each viewer makes of it? For most of history, people assumed art carried a message the artist put there, and a good viewer's job was to find it. Then, in the second half of the 20th century, a wave of artists and thinkers said: not so fast. Maybe meaning is not hidden inside the artwork like a prize in a box. Maybe meaning is made fresh every time someone looks, by that person, in that moment. This idea is part of what people call "postmodernism," and it changed art, design, music, and how a whole generation thought. It can feel slippery, and that is the point: today you learn to hold a slippery idea without dropping it, and to decide for yourself how far it goes. Onward.`,
          headline: `Postmodern Art and the Deconstruction of Meaning`,
          subtitle: `Does art have one real meaning, or many? Perspectives.`,
          visual: `/voyager-assets/creative-arts/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Came Before, And What Broke`,
          paragraphs: [
            `To see what postmodernism broke, first picture what it broke away from. The movement before it was called modernism, and you can think of modernism like a confident architect. From roughly 1900 to the 1950s, modern artists and designers believed in big ideas: that art could find pure forms, that progress moved forward, that a clean white building or a simple abstract painting could express a deep universal truth. Think of a sleek glass skyscraper or a Piet Mondrian painting of plain red, blue, and yellow squares. The message was confidence: strip away decoration, find the essence, and the truth shows through.`,
            `Postmodernism, which grew up roughly from the 1960s onward, was the reply that said "wait, whose truth?" Where modernism trusted one big story, postmodernism got suspicious of big stories altogether. It noticed that the "universal truths" of the past were often just the views of whoever held power, dressed up as truth for everyone. So postmodern artists mixed high and low (a soup can treated like a masterpiece), quoted old styles with a wink, and refused to pretend there was one correct way to see. If modernism was the confident architect, postmodernism was the clever critic standing next to the building asking who it was really built for.`,
            `One concrete marker people point to: the 1972 demolition of the Pruitt-Igoe housing project in St. Louis. It was built in the 1950s as a shining modern solution to poverty, all clean lines and big ideas, and within twenty years it had failed so badly the city dynamited it. The architecture critic Charles Jencks half-jokingly called that demolition "the day modern architecture died." Whether or not you take the date literally, it captures the shift: the confident big idea collapsed, and a more skeptical, more playful, more questioning attitude moved in.`,
          ],
          image: `/voyager-assets/creative-arts/l05-s1-before.webp`,
          imageCaption: `Modernism (roughly 1900-1950s): confidence in big ideas, pure forms, progress, universal truth. Picture a sleek glass skyscraper or a Piet Mondrian painting of plain red/blue/yellow squares; strip away decoration, find the essence. Postmodernism (roughly 1960s onward): the reply asking "whose truth?" Suspicious of big stories; noticed "universal truths" were often the views of whoever held power, dressed up as truth for everyone. Mixed high and low (a soup can treated as a masterpiece), quoted old styles with a wink, refused one correct way to see. Marker: the 1972 demolition of the Pruitt-Igoe housing project in St. Louis (built 1950s as a modern anti-poverty solution, dynamited within 20 years). Critic Charles Jencks half-jokingly called it "the day modern architecture died."`,
          vocab: [
            {
              word: `modernism vs. postmodernism`,
              definition: `Modernism (roughly 1900-1950s) was an attitude of confidence in big ideas: that art could find pure forms, that progress moved forward, that a clean abstract painting or a simple white building could express a deep universal truth. Picture a sleek glass skyscraper or a Piet Mondrian painting of plain red, blue, and yellow squares; the idea was to strip away decoration, find the essence, and let truth show through. Postmodernism (roughly 1960s onward) was the reply that asked "whose truth?" It grew suspicious of big stories altogether, noticing that the "universal truths" of the past were often just the views of whoever held power, presented as truth for everyone. Postmodern artists mixed high and low (treating a soup can like a masterpiece), quoted old styles with a wink, and refused to pretend there was one correct way to see. A concrete marker: the 1972 demolition of the Pruitt-Igoe housing project in St. Louis, built in the 1950s as a shining modern solution to poverty and dynamited within twenty years after it failed; the critic Charles Jencks half-jokingly called the demolition "the day modern architecture died." It captures the shift from the confident big idea to a more skeptical, playful, questioning attitude.`,
              audioPrompt: `Here is the question this lesson hands you, {name}, and it is a strange one. Does a painting have one real meaning, the one the artist intended, or does it mean whatever each viewer makes of it? To see what postmodernism is, first picture what it broke away from. The movement before it was called modernism. Think of modernism like a confident architect. From roughly 1900 to the 1950s, modern artists believed in big ideas: that art could find pure forms, that progress moved forward, that a clean white building or a simple abstract painting could express a deep universal truth. Picture a sleek glass skyscraper, or a Mondrian painting of plain red, blue, and yellow squares. Strip away decoration, find the essence, and the truth shows through. Postmodernism, which grew up from the 1960s onward, was the reply that said "wait, whose truth?" Where modernism trusted one big story, postmodernism got suspicious of big stories altogether. It noticed that the universal truths of the past were often just the views of whoever held power, dressed up as truth for everyone. If modernism was the confident architect, postmodernism was the clever critic standing next to the building asking who it was really built for. One marker people point to: in 1972 the city of St. Louis dynamited the Pruitt-Igoe housing project, built in the 1950s as a shining modern solution to poverty and failed within twenty years. A critic called that demolition "the day modern architecture died."`,
            },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Moves Postmodern Artists Made`,
          paragraphs: [
            `Postmodernism is easier to grasp through the specific moves artists made than through definitions, so here are the main ones with real examples. The first move is appropriation: taking an existing image and re-presenting it as your own work, so the meaning shifts. Andy Warhol (1928-1987) did this when he silkscreened Campbell's Soup cans and Marilyn Monroe's face in the early 1960s. He took the most ordinary supermarket object and the most famous celebrity photo and made you look at them as art, asking why a soup can in a gallery feels different from a soup can in a cupboard. Nothing about the can changed; the frame around it did.`,
            `The second move is the copy with no original. Sherrie Levine (born 1947) photographed famous photographs by other artists and showed her photos of their photos as her own art, with titles like "After Walker Evans" (1981). It sounds like cheating, and that is exactly the question she wanted you to ask: if a photograph is already a copy of the world, what does it even mean to own an "original"? The third move is mixing styles and times on purpose, called pastiche. A postmodern building might stick a fake Greek column next to a neon sign; a postmodern song might quote a classical melody inside a pop beat. The mixing is not a mistake. It is the artist refusing to pick one "pure" style and instead showing that all styles are costumes you can put on.`,
            `The fourth and deepest move is the one that names this lesson: deconstruction. The word comes from the French thinker Jacques Derrida (1930-2004), and you do not need the full philosophy, just the useful core. To deconstruct something is to look closely at a thing that seems solid and obvious, a story, an image, a rule, and show that its meaning is shakier and more built-up than it pretends to be. A deconstructive reading of a fairy tale, for instance, might ask why the princess always waits to be rescued, revealing an assumption hiding inside a story everyone treats as innocent. Deconstruction is not about destroying meaning. It is about noticing how meaning gets made, and who it quietly serves.`,
          ],
          image: `/voyager-assets/creative-arts/l05-s2-moves.webp`,
          imageCaption: `Postmodern moves with real examples. (1) Appropriation: taking an existing image and re-presenting it so meaning shifts. Andy Warhol (1928-1987) silkscreened Campbell's Soup cans and Marilyn Monroe in the early 1960s; nothing about the can changed, the frame around it did. (2) The copy with no original: Sherrie Levine (b. 1947) photographed famous photographs and showed them as her work ("After Walker Evans" 1981), asking what it means to own an "original." (3) Pastiche: mixing styles and times on purpose (a fake Greek column next to a neon sign; a classical melody inside a pop beat), showing all styles are costumes. (4) Deconstruction: from French thinker Jacques Derrida (1930-2004); looking closely at something that seems solid (a story, image, rule) and showing its meaning is shakier and more built-up than it pretends, e.g. asking why the princess always waits to be rescued. Not destroying meaning; noticing how it gets made and who it serves.`,
          vocab: [
            {
              word: `appropriation, pastiche, deconstruction`,
              definition: `Four postmodern moves, each with a real example. APPROPRIATION: taking an existing image and re-presenting it as your own work so the meaning shifts. Andy Warhol (1928-1987) silkscreened Campbell's Soup cans and Marilyn Monroe's face in the early 1960s, taking the most ordinary object and the most famous photo and making you look at them as art; nothing about the can changed, only the frame around it (a gallery instead of a cupboard). THE COPY WITH NO ORIGINAL: Sherrie Levine (b. 1947) photographed famous photographs by other artists and showed her photos as her own art ("After Walker Evans" 1981), asking what it means to own an "original" if a photograph is already a copy of the world. PASTICHE: mixing styles and times on purpose (a fake Greek column next to a neon sign; a classical melody inside a pop beat); the mixing is deliberate, showing all styles are costumes you can put on rather than one "pure" style. DECONSTRUCTION: from the French thinker Jacques Derrida (1930-2004); to deconstruct is to look closely at something that seems solid and obvious (a story, image, or rule) and show its meaning is shakier and more built-up than it pretends, for example asking why the princess always waits to be rescued, revealing an assumption hiding inside a story treated as innocent. Deconstruction does not destroy meaning; it notices how meaning gets made and who it quietly serves.`,
              audioPrompt: `Postmodernism is easier to grasp through the moves artists made than through definitions, {name}. The first move is appropriation: taking an existing image and re-presenting it as your own work, so the meaning shifts. Andy Warhol did this when he silkscreened Campbell's Soup cans and Marilyn Monroe's face in the early 1960s. He took the most ordinary supermarket object and the most famous celebrity photo and made you look at them as art. Nothing about the can changed; the frame around it did. The second move is the copy with no original. Sherrie Levine photographed famous photographs by other artists and showed her photos as her own art, with titles like "After Walker Evans" from 1981. If a photograph is already a copy of the world, what does it even mean to own an original? The third move is pastiche, mixing styles and times on purpose: a building with a fake Greek column next to a neon sign, a song quoting a classical melody inside a pop beat. The mixing is not a mistake; it shows that all styles are costumes you can put on. The fourth and deepest move is deconstruction, from the French thinker Jacques Derrida. To deconstruct something is to look closely at a thing that seems solid and obvious, a story, an image, a rule, and show that its meaning is shakier and more built-up than it pretends to be. Asking why the princess always waits to be rescued reveals an assumption hiding inside a story everyone treats as innocent. Deconstruction is not about destroying meaning; it is about noticing how meaning gets made, and who it quietly serves.`,
            },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where The Meaning Lives`,
          paragraphs: [
            `Now the central argument, the one the Perspectives screen will hand you. Picture three people standing in front of the same painting, arguing about where its meaning actually lives. The first says the meaning lives in the artist: whatever the painter intended is the real meaning, and your job is to find it. The second says the meaning lives in the artwork itself: the marks on the canvas, regardless of what the artist meant or what you feel, and a careful look reveals it. The third says the meaning lives in you, the viewer: a painting is just colored shapes until a person looks and makes meaning from their own life, so there are as many meanings as there are viewers.`,
            `Postmodern thinking pushed hard toward that third view, and a famous short essay captures it. In 1967 the French critic Roland Barthes wrote a piece called "The Death of the Author," arguing that once a work is made, the author's intentions stop being the boss of its meaning. The reader, Barthes said, becomes the place where meaning happens. It is a bold claim, and you can feel both its power and its danger. The power: it frees you to bring your own life to a book or song and find something the author never planned. The danger: if a work means anything anyone says it means, does it still mean anything at all? Can a painting be "about" something it clearly is not, just because a viewer insists?`,
            `Here is the honest part, and it matters for how you hold this. Most thoughtful people do not land fully on any one of the three positions; they hold a mix. They accept that the artist's intention matters and is not the whole story; that the work itself sets real limits on what it can plausibly mean; and that the viewer genuinely brings something that completes it. The skill is not picking a team and defending it to the death. The skill is being able to think with each position, see what it gets right, and notice where each one, pushed too far, leads somewhere strange. That is exactly what the Perspectives screen asks of you next.`,
          ],
          image: `/voyager-assets/creative-arts/l05-s3-meaning.webp`,
          imageCaption: `Three people, one painting, arguing where the meaning lives. (1) In the artist: whatever the painter intended is the real meaning; your job is to find it. (2) In the artwork itself: the marks on the canvas regardless of intention or feeling; careful looking reveals it. (3) In the viewer: a painting is colored shapes until a person makes meaning from their own life; as many meanings as viewers. Postmodern thinking pushed toward (3). Roland Barthes, "The Death of the Author" (1967): once a work is made, the author's intentions stop being the boss of its meaning; the reader becomes where meaning happens. Power: you bring your own life and find what the author never planned. Danger: if a work means anything anyone says, does it still mean anything? Most thoughtful people hold a mix; the skill is thinking with each position, not picking one team forever.`,
          vocab: [
            {
              word: `where meaning lives, and "The Death of the Author"`,
              definition: `The central argument. Picture three people in front of the same painting, arguing where its meaning lives. POSITION 1, the artist: whatever the painter intended is the real meaning, and the viewer's job is to find it. POSITION 2, the artwork itself: the meaning is in the marks on the canvas, regardless of what the artist meant or what the viewer feels, and a careful look reveals it. POSITION 3, the viewer: a painting is just colored shapes until a person looks and makes meaning from their own life, so there are as many meanings as there are viewers. Postmodern thinking pushed hard toward Position 3. In 1967 the French critic Roland Barthes wrote a short essay, "The Death of the Author," arguing that once a work is made, the author's intentions stop being the boss of its meaning, and the reader becomes the place where meaning happens. The power of the idea: it frees you to bring your own life to a book or song and find something the author never planned. The danger: if a work means anything anyone says it means, does it still mean anything at all? Most thoughtful people hold a mix of all three, accepting that intention matters but is not the whole story, that the work sets real limits on plausible meaning, and that the viewer genuinely completes it. The skill is thinking with each position and noticing where each, pushed too far, leads somewhere strange, rather than picking one team and defending it forever.`,
              audioPrompt: `Now the central argument, {name}, the one the Perspectives screen will hand you. Picture three people standing in front of the same painting, arguing about where its meaning actually lives. The first says the meaning lives in the artist: whatever the painter intended is the real meaning, and your job is to find it. The second says the meaning lives in the artwork itself: the marks on the canvas, regardless of what the artist meant or what you feel. The third says the meaning lives in you, the viewer: a painting is just colored shapes until a person looks and makes meaning from their own life, so there are as many meanings as there are viewers. Postmodern thinking pushed hard toward that third view. In 1967 the French critic Roland Barthes wrote a piece called "The Death of the Author," arguing that once a work is made, the author's intentions stop being the boss of its meaning. The reader, Barthes said, becomes the place where meaning happens. You can feel both its power and its danger. The power: it frees you to bring your own life to a book or song and find something the author never planned. The danger: if a work means anything anyone says it means, does it still mean anything at all? Here is the honest part. Most thoughtful people do not land fully on any one of the three positions; they hold a mix. The skill is not picking a team and defending it to the death. The skill is being able to think with each position, see what it gets right, and notice where each one, pushed too far, leads somewhere strange.`,
            },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Got Powerful, And Who It Helped`,
          paragraphs: [
            `It would be easy to dismiss all this as clever people overthinking art. But the postmodern move had real power, and it helped real people, especially people the old "universal truths" had left out. When you stop trusting the one big official story, you start asking whose voices got left out of it. That question opened doors. Artists who had been pushed to the edges of the art world, women, Black artists, Indigenous artists, artists from formerly colonized countries, used postmodern tools to challenge a canon that had mostly celebrated wealthy European men.`,
            `Concrete examples make this real. The Guerrilla Girls, an anonymous group formed in New York in 1985, wore gorilla masks and made posters with hard data, like counting how few women artists hung in major museums while most of the nude paintings were of women. That is appropriation and deconstruction used as a weapon: they took the museum's own numbers and turned them into a question the museum could not easily answer. The artist Barbara Kruger (born 1945) layered bold slogans over found photographs, work like "Your body is a battleground" (1989), using the visual language of advertising to talk back to advertising. Across Latin America, artists used appropriation and pastiche to comment on dictatorship and inequality, building on the conceptual traditions you met in Lesson 1.`,
            `So postmodernism was not only a parlor game about whether meaning is stable. It was also a set of tools for noticing that the "neutral" official version of art history was never neutral, and for making space for stories that had been left out. That is the strongest case for taking it seriously. And it sits right next to the strongest worry about it, which the Perspectives screen will let you weigh: if you push "there is no single truth" far enough, you can end up unable to say anything is better, truer, or more just than anything else, which is its own kind of trap. Holding the power and the worry together, without collapsing into either, is the grown-up version of this idea.`,
          ],
          image: `/voyager-assets/creative-arts/l05-s4-power.webp`,
          imageCaption: `Postmodernism's real power: when you stop trusting the one big official story, you ask whose voices it left out. Artists pushed to the edges (women, Black, Indigenous, formerly colonized) used postmodern tools to challenge a canon that mostly celebrated wealthy European men. The Guerrilla Girls (anonymous group, New York, formed 1985): gorilla masks, posters with hard data counting how few women artists hung in major museums while most nudes were of women, turning the museum's own numbers into a question. Barbara Kruger (b. 1945): bold slogans over found photographs ("Your body is a battleground," 1989), using advertising's language to talk back to advertising. Latin American artists used appropriation and pastiche against dictatorship and inequality (building on Lesson 1's conceptualism). The worry: pushed too far, "no single truth" can leave you unable to call anything truer or more just than anything else.`,
          vocab: [
            {
              word: `postmodernism as a tool for the left-out`,
              definition: `Postmodernism was not only a clever game about whether meaning is stable; it had real power and helped real people the old "universal truths" had left out. When you stop trusting the one big official story, you start asking whose voices got left out of it, and that question opened doors. Artists pushed to the edges of the art world (women, Black artists, Indigenous artists, artists from formerly colonized countries) used postmodern tools to challenge a canon that had mostly celebrated wealthy European men. Concrete examples: the Guerrilla Girls, an anonymous group formed in New York in 1985, wore gorilla masks and made posters with hard data, such as counting how few women artists hung in major museums while most of the nude paintings were of women, turning the museum's own numbers into a question it could not easily answer. Barbara Kruger (b. 1945) layered bold slogans over found photographs, work like "Your body is a battleground" (1989), using the visual language of advertising to talk back to advertising. Across Latin America, artists used appropriation and pastiche to comment on dictatorship and inequality, building on the conceptual traditions from Lesson 1. The strongest case for taking postmodernism seriously: it noticed that the "neutral" official version of art history was never neutral and made space for left-out stories. The strongest worry, sitting right next to it: pushed far enough, "there is no single truth" can leave you unable to say anything is better, truer, or more just than anything else.`,
              audioPrompt: `It would be easy to dismiss all this as clever people overthinking art, {name}. But the postmodern move had real power, and it helped real people, especially people the old "universal truths" had left out. When you stop trusting the one big official story, you start asking whose voices got left out of it. That question opened doors. Artists who had been pushed to the edges of the art world, women, Black artists, Indigenous artists, artists from formerly colonized countries, used postmodern tools to challenge a canon that had mostly celebrated wealthy European men. The Guerrilla Girls, an anonymous group formed in New York in 1985, wore gorilla masks and made posters with hard data, like counting how few women artists hung in major museums while most of the nude paintings were of women. They took the museum's own numbers and turned them into a question the museum could not easily answer. Barbara Kruger layered bold slogans over found photographs, work like "Your body is a battleground" from 1989, using the visual language of advertising to talk back to advertising. So postmodernism was not only a parlor game about whether meaning is stable. It was a set of tools for noticing that the "neutral" official version of art history was never neutral. And it sits right next to the strongest worry about it: if you push "there is no single truth" far enough, you can end up unable to say anything is better, truer, or more just than anything else.`,
            },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together before you weigh the voices. This lesson handed you a genuinely hard idea and asked you not to flinch from it. Postmodernism doubted the big official stories, mixed high and low, treated styles as costumes, and pushed the question of where meaning lives toward the viewer. Its deepest tool, deconstruction, taught you to look at something solid-seeming and notice how its meaning was built and whom it served. And its real-world power was making space for voices the official story left out.`,
            `Now the Perspectives screen will put several voices in front of you, each holding a different position on whether meaning is stable, whether the artist's intention rules, whether "anything goes," and whether the whole move was liberating or corrosive. Your task is not to crown a winner. It is to enter each voice honestly, find the true thing it is pointing at, and feel where it strains. The most postmodern skill of all, ironically, is refusing to let any single voice become the new official story.`,
            `One last steadying thought, because slippery ideas can leave a person feeling like nothing is solid. Deciding that meaning is partly made by viewers does not mean every reading is equally good. You can believe a poem speaks to you personally and still recognize that a reading ignoring every actual word on the page is a worse reading than one that honors them. Freedom to interpret is not the same as permission to say anything. Hold that, and the slipperiness becomes something you can stand on. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l05-s5-before.webp`,
          imageCaption: `Threads together. Postmodernism doubted big official stories, mixed high and low, treated styles as costumes, pushed meaning toward the viewer. Its deepest tool, deconstruction, showed how solid-seeming meaning is built and whom it serves. Its power: space for left-out voices. The Perspectives screen ahead puts several positions in front of you (is meaning stable; does the artist's intention rule; is "anything goes" true; was the move liberating or corrosive). Task: not to crown a winner but to enter each voice honestly, find what it points at, feel where it strains. Steadying thought: deciding meaning is partly made by viewers does not make every reading equally good; a reading that ignores every actual word on the page is worse than one that honors them. Freedom to interpret is not permission to say anything.`,
          vocab: [
            {
              word: `freedom to interpret is not permission to say anything`,
              definition: `The synthesis before the Perspectives screen. This lesson handed you a hard idea: postmodernism doubted the big official stories, mixed high and low, treated styles as costumes you can put on, and pushed the question of where meaning lives toward the viewer. Its deepest tool, deconstruction, taught you to look at something solid-seeming and notice how its meaning was built and whom it served. Its real-world power was making space for voices the official story left out (the Guerrilla Girls, Barbara Kruger, Latin American artists under dictatorship). The Perspectives screen will put several voices in front of you, each holding a different position on whether meaning is stable, whether the artist's intention rules, whether "anything goes," and whether the whole move was liberating or corrosive. The task is not to crown a winner but to enter each voice honestly, find the true thing it points at, and feel where it strains; the most postmodern skill is refusing to let any single voice become the new official story. The steadying thought: deciding that meaning is partly made by viewers does not mean every reading is equally good. You can believe a poem speaks to you personally and still recognize that a reading that ignores every actual word on the page is worse than one that honors them. Freedom to interpret is not the same as permission to say anything.`,
              audioPrompt: `Pull it together before you weigh the voices, {name}. This lesson handed you a genuinely hard idea and asked you not to flinch from it. Postmodernism doubted the big official stories, mixed high and low, treated styles as costumes, and pushed the question of where meaning lives toward the viewer. Its deepest tool, deconstruction, taught you to look at something solid-seeming and notice how its meaning was built and whom it served. And its real-world power was making space for voices the official story left out. Now the Perspectives screen will put several voices in front of you, each holding a different position on whether meaning is stable, whether the artist's intention rules, whether anything goes, and whether the whole move was liberating or corrosive. Your task is not to crown a winner. It is to enter each voice honestly, find the true thing it is pointing at, and feel where it strains. One last steadying thought, because slippery ideas can leave a person feeling like nothing is solid. Deciding that meaning is partly made by viewers does not mean every reading is equally good. You can believe a poem speaks to you personally and still recognize that a reading ignoring every actual word on the page is a worse reading than one that honors them. Freedom to interpret is not the same as permission to say anything.`,
            },
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l05-perspectives`,
          type: `perspectives`,
          headline: `Where Does Meaning Live?`,
          intro: `{name}, five voices on whether art has one real meaning or many. Open each one. Find the true thing it points at, and feel where it strains. You are not crowning a winner; you are learning to think with each.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The Artist's Intention`,
              era: `the traditional view`,
              stance: `The real meaning is whatever the artist intended; the viewer's job is to find it, not invent it.`,
              quote: `"I made this for a reason. If you decide it means the opposite of what I meant, you are not reading my work, you are writing your own."`,
              argument: `Art is communication from one mind to others. A painter, like a writer, chooses every element on purpose to say something. To ignore that and substitute your own meaning is to stop listening to the artist at all. Respecting intention is respecting the person who made the work.`,
              evidence: `When a political mural is made to protest a war, calling it "just pretty colors" misses the entire point and erases the artist's purpose. Diego Rivera's murals carry intended messages about labor and history; reading them as decoration ignores what they were built to say.`,
              strengths_and_limits: `Strength: it keeps the artist as a real person with real purposes, not a doormat for any interpretation. Limit: artists often do not fully control or even know everything their work says, and great works keep meaning things the artist never imagined across centuries.`,
            },
            {
              id: `p2`,
              voice: `The Work Itself`,
              era: `the formalist view`,
              stance: `The meaning is in the object, the actual marks, shapes, and structure, not in the artist's head or the viewer's feelings.`,
              quote: `"Do not tell me what you felt or what the artist tweeted. Show me where it is on the canvas."`,
              argument: `What the artist meant is gone the moment they finish; what you feel is private. The one thing everyone can examine is the work itself. So the meaning that matters is the one supported by what is actually there, the composition, the colors, the words on the page.`,
              evidence: `Two people can argue about a poem, and the way to settle it is to point to the actual lines. A reading that the words support is stronger than one they do not, regardless of anyone's feelings or the poet's later explanations.`,
              strengths_and_limits: `Strength: it gives interpretation something solid to stand on and stops "it means whatever I feel." Limit: the same marks really do support more than one reading, and pretending the work has a single meaning sealed inside it ignores how much the viewer's knowledge and context shape what those marks say.`,
            },
            {
              id: `p3`,
              voice: `The Viewer (Barthes)`,
              era: `1967, postmodern`,
              stance: `Once a work is made, the author's intentions stop ruling it; the reader becomes the place where meaning happens.`,
              quote: `"The birth of the reader must be at the cost of the death of the Author."`,
              argument: `Roland Barthes (1915-1980) argued that pinning a work to one "correct" intended meaning shrinks it. A work is richer than its maker; each reader, bringing a different life, completes it differently, and that multiplicity is a feature, not a flaw.`,
              evidence: `A song written about one person's breakup becomes, for millions of listeners, about their own losses the writer never knew. That is not a misreading; it is the song doing its fullest work in many lives at once.`,
              strengths_and_limits: `Strength: it explains why art keeps living long after the artist, and it frees readers to find real, personal meaning. Limit: pushed all the way, "the reader makes the meaning" can slide into "any reading is as good as any other," which makes it hard to say one interpretation is simply wrong.`,
            },
            {
              id: `p4`,
              voice: `The Power Critic`,
              era: `postmodern, political`,
              stance: `The big question is not just where meaning lives but whose meaning got called "the truth" and whose got erased.`,
              quote: `"Before you ask what it means, ask who got to decide what it means, and who was left out of the room."`,
              argument: `The Guerrilla Girls and Barbara Kruger used postmodern tools not to play games but to expose that the "neutral" story of art was built by people with power. Deconstruction here is a tool of justice: it reveals the hidden assumptions inside what looked like simple truth.`,
              evidence: `The Guerrilla Girls' 1989 poster counted that far fewer than 5% of artists in a major museum's modern section were women, while most of the nudes were female, turning the institution's own numbers into an argument it could not dodge.`,
              strengths_and_limits: `Strength: it shows postmodernism's real moral payoff, making space for left-out voices and questioning false neutrality. Limit: if every claim is reduced to "whose power is behind it," you can lose the ability to say something is true or just on its own merits, not only because of who said it.`,
            },
            {
              id: `p5`,
              voice: `The Worried Realist`,
              era: `the critic of postmodernism`,
              stance: `If "there is no single truth" is pushed too far, you lose the ground to call anything better, truer, or more just, and that is dangerous.`,
              quote: `"A world where every reading is equal is a world where a lie about a painting, or about history, is as good as the truth. I cannot live there."`,
              argument: `Some interpretations really are wrong, and some claims really are more just than others. A view that treats all meanings as equally valid hands a free pass to anyone who wants to call cruelty "just another perspective." Freedom to interpret has to come with responsibility to the actual work and the actual facts.`,
              evidence: `Holocaust denial dresses itself as "just another reading of history." The whole point of insisting that evidence and the actual record matter is to be able to say plainly: no, that reading is false, not merely unpopular.`,
              strengths_and_limits: `Strength: it rescues the ability to judge, to say some readings honor the work and the facts and some betray them. Limit: pushed back the other way, it can become rigid, insisting on one official meaning and dismissing the genuine, multiple ways real people find real meaning in art.`,
            },
          ],
          synthesisPrompt: `After hearing all five voices: where do you actually land on whether a work of art has one real meaning or many? Which voice did you most want to agree with, and which one corrected it? In 5-6 sentences, build your own position, and name the spot where you think "the viewer makes the meaning" has to stop.`,
          reflectionPrompt: `Think of a song, book, movie, or image that means something to you that its maker probably never intended. Does that personal meaning feel "real" to you? Where, for you, is the line between a reading the work supports and a reading you are simply imposing on it?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the difference between modernism and postmodernism, in plain terms?`,
              options: [
                `Random`,
                `Modernism (roughly 1900-1950s) was an attitude of confidence in big ideas: that art could find pure forms, that progress moved forward, and that a clean abstract painting or a simple white building could express a deep universal truth, like a sleek glass skyscraper or a Mondrian painting of plain colored squares (strip away decoration, find the essence). Postmodernism (roughly 1960s onward) was the reply that asked "whose truth?" It grew suspicious of big stories altogether, noticing that the "universal truths" of the past were often just the views of whoever held power, dressed up as truth for everyone. Postmodern artists mixed high and low (a soup can treated as a masterpiece), quoted old styles with a wink, and refused one correct way to see. A marker people cite is the 1972 demolition of the Pruitt-Igoe housing project in St. Louis, built in the 1950s as a modern anti-poverty solution and dynamited within twenty years; the critic Charles Jencks called it "the day modern architecture died."`,
                `Just old vs new`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Modernism trusted one big universal truth; postmodernism got suspicious of big stories and asked whose truth they really were. The Pruitt-Igoe demolition is the concrete marker of the shift from confidence to skepticism.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "appropriation" in art, and how did Andy Warhol use it?`,
              options: [
                `Random`,
                `Appropriation is taking an existing image and re-presenting it as your own work so that the meaning shifts. Andy Warhol (1928-1987) did this in the early 1960s when he silkscreened Campbell's Soup cans and Marilyn Monroe's face: he took the most ordinary supermarket object and the most famous celebrity photo and made you look at them as art. Nothing about the soup can itself changed; what changed was the frame around it, a gallery instead of a cupboard. The move asks why a soup can in a gallery feels different from a soup can at home, and in doing so it questions where the "art" actually is, in the object or in how and where we choose to look at it.`,
                `Just copying`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Appropriation re-frames an existing image so its meaning shifts. Warhol changed nothing about the soup can except the context, which is the whole point: the art is in the framing, not the object.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does "deconstruction" actually mean, and what does it NOT mean?`,
              options: [
                `Random`,
                `Deconstruction, a word associated with the French thinker Jacques Derrida (1930-2004), means looking closely at something that seems solid and obvious, a story, an image, a rule, and showing that its meaning is shakier and more built-up than it pretends to be. For example, a deconstructive reading of a fairy tale might ask why the princess always waits to be rescued, revealing an assumption hiding inside a story everyone treats as innocent. What deconstruction does NOT mean: it is not about destroying meaning or saying nothing means anything. It is about noticing how meaning gets made and who it quietly serves. It is a tool for seeing the hidden assumptions inside things that present themselves as simple, neutral truth.`,
                `Just breaking`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Deconstruction notices how meaning is built and whom it serves; it does not destroy meaning. The princess example shows it surfacing a hidden assumption inside something that looks innocent.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did Roland Barthes argue in "The Death of the Author" (1967)?`,
              options: [
                `Random`,
                `Roland Barthes (1915-1980), a French critic, argued in his 1967 essay "The Death of the Author" that once a work is made, the author's intentions stop being the boss of its meaning, and the reader becomes the place where meaning actually happens. His point was that pinning a work to one "correct" intended meaning shrinks it; a work is richer than its maker, and each reader, bringing a different life, completes it differently. The power of the idea is that it frees you to bring your own experience to a book or song and find something the author never planned. The danger, which the lesson is honest about, is that if a work means anything anyone says it means, it becomes hard to say any reading is simply wrong.`,
                `Just reading`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Barthes moved meaning from the author to the reader. The lesson holds both its power (personal meaning) and its danger (if anything goes, can anything be wrong?) at once.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are the three positions on "where meaning lives," and why do most thoughtful people hold a mix?`,
              options: [
                `Random`,
                `The three positions: (1) the meaning lives in the artist, so whatever the painter intended is the real meaning and your job is to find it; (2) the meaning lives in the artwork itself, in the actual marks, shapes, and structure, regardless of intention or feeling, revealed by careful looking; (3) the meaning lives in the viewer, so a painting is just colored shapes until a person makes meaning from their own life, giving as many meanings as there are viewers. Most thoughtful people hold a mix because each position alone breaks down: pure intention ignores how works mean things the artist never imagined; pure "the work itself" ignores how much the viewer's knowledge shapes what the marks say; pure "the viewer decides" slides toward "any reading is as good as any other." Holding a mix lets you respect intention, honor what is actually on the canvas, and still let the viewer genuinely complete the work.`,
                `Just three views`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Each single position fails when pushed to the extreme, so the mature view holds all three in tension: intention matters, the work sets limits, and the viewer completes it.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `How did the Guerrilla Girls and Barbara Kruger use postmodern tools for justice?`,
              options: [
                `Random`,
                `Both used postmodern tools to expose that the "neutral" story of art was built by people with power. The Guerrilla Girls, an anonymous group formed in New York in 1985, wore gorilla masks and made posters with hard data, such as counting how few women artists hung in major museums while most of the nude paintings were of women, turning the museum's own numbers into a question it could not easily dodge. Barbara Kruger (born 1945) layered bold slogans over found photographs, work like "Your body is a battleground" (1989), using the visual language of advertising to talk back to advertising. Here deconstruction is a tool of justice: it reveals the hidden assumptions inside what looked like simple, neutral truth, and makes space for voices, women, Black, Indigenous, and colonized artists, that the official canon left out.`,
                `Just posters`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `They turned the art world's own evidence against its claim of neutrality. This is postmodernism's moral payoff: surfacing hidden assumptions and making room for left-out voices.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the strongest worry about postmodernism, the one the "worried realist" voice raises?`,
              options: [
                `Random`,
                `The strongest worry is that if "there is no single truth" gets pushed too far, you lose the ground to call anything better, truer, or more just than anything else, and that is dangerous. If every interpretation is treated as equally valid, you hand a free pass to anyone who wants to call cruelty "just another perspective," or who wants to dress up a lie about history as "just another reading." The clearest example is something like Holocaust denial presenting itself as an alternative interpretation; the whole reason to insist that evidence and the actual record matter is to be able to say plainly that such a reading is false, not merely unpopular. The honest position keeps the freedom to interpret while also keeping the responsibility to the actual work and the actual facts: freedom to interpret is not the same as permission to say anything.`,
                `Just confusing`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Pushed too far, "no single truth" makes it impossible to call any reading false. The corrective is responsibility to the work and the facts: interpretive freedom is not permission to say anything.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "pastiche," and why is the mixing deliberate rather than a mistake?`,
              options: [
                `Random`,
                `Pastiche is mixing styles and times on purpose: a postmodern building might stick a fake Greek column next to a neon sign, and a postmodern song might quote a classical melody inside a pop beat. The mixing is not a mistake or a sign that the artist could not pick a style; it is the whole point. By combining "high" and "low," old and new, the artist refuses to pretend there is one "pure" correct style and instead shows that all styles are like costumes you can put on and take off. This connects to the larger postmodern attitude: just as it doubted one official truth, it doubted one official style. Pastiche makes that doubt visible, treating the entire history of art and design as a wardrobe to quote from rather than a ladder of progress to climb.`,
                `Just mixing`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Pastiche deliberately mixes styles to show they are costumes, not a ladder of progress. The mixing embodies postmodernism's doubt about any one "pure" or official style.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If meaning is partly made by the viewer, then every interpretation of an artwork is equally good and no reading can be called wrong.`,
              correctAnswer: false,
              explanation: `False, and this is the key reasoning move of the lesson. Accepting that the viewer helps make meaning does not mean every reading is equally good. You can believe a poem speaks to you personally, in a way the poet never planned, and still recognize that a reading which ignores every actual word on the page is worse than one that honors them. The work itself sets real limits: an interpretation the words and images genuinely support is stronger than one they flatly contradict. Roland Barthes freed the reader to bring their own life to a work, but that freedom is the freedom to find real meaning the work can bear, not a license to claim a painting of a sunrise is "really about" something nowhere present in it. Freedom to interpret comes with responsibility to the actual work and, when facts are involved, to the actual record. That is exactly why "the viewer makes meaning" and "some readings are simply wrong" can both be true at once: meaning is co-made, but it is co-made with a real work that pushes back.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you post online that a famous old painting "is secretly about climate change." Someone replies that this is impossible because the painting was made 200 years before anyone talked about climate change, and that you are "just making things up." Using what this lesson taught about where meaning lives, what is the most honest and thoughtful way to respond?`,
              options: [
                `"Just argue"`,
                `Several moves, held together, because this is exactly the tension the lesson built. First, separate two different claims you might be making, because they are not the same. One claim is "the artist intended this painting to be about climate change," and the replier is right that this is almost certainly false: you cannot intend a message about an idea that did not exist yet, so on the artist's-intention level, the objection lands. The other claim is "this painting speaks to me, today, about climate change," which is a viewer-meaning claim, and that one can be honest and real. Roland Barthes' "The Death of the Author" from 1967 is the backup here: once a work exists, viewers bring their own time and life to it and find meanings the maker never planned, and a 200-year-old landscape of a flooded valley genuinely can resonate with a modern viewer's fear about rising seas. So your first move is to be precise about which claim you are making, because collapsing the two is what made the reply sound like a fair hit. Second, concede what the replier got right, because that is what a thoughtful person does and it actually strengthens your position: yes, the artist did not and could not have intended this; you are not claiming a secret hidden message the painter coded in. Third, defend the part that is genuinely defensible, that a work can carry meaning for a viewer that the artist never intended, and that this is not "making things up" but one of the real ways art keeps living across centuries. Fourth, and this is where the lesson's honesty matters most, hold yourself to the standard the lesson set: freedom to interpret is not permission to say anything. So you should be able to point at what is actually in the painting that supports your reading, the flooded fields, the small powerless human figures, the overwhelming sky, rather than just asserting it. If the painting genuinely shows nature overwhelming people, your climate reading is one the work can bear; if you are reading climate change into a calm sunny portrait with nothing relevant in it, then the replier is right that you are imposing, not interpreting, and the honest move is to admit it. Fifth, notice that the disagreement is really about where meaning lives, the exact question of this lesson, and you can say so: "We're actually disagreeing about whether a painting can only mean what its maker intended, or whether viewers can find new meaning in it. I think both matter, the work has to support the reading, but viewers in a new time can find things the artist never planned." Sixth, the deepest payoff: this is how you become someone who can make bold, personal, creative interpretations without becoming someone who just makes things up. You keep the freedom Barthes gave you and you keep the responsibility the worried realist insisted on, and holding both at once is exactly the grown-up version of this whole lesson.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Applied meaning-theory in a real argument. The move is to separate the intention claim (which the replier rightly defeats) from the viewer-meaning claim (which Barthes legitimately supports), concede what is true, and then hold yourself to the lesson's standard: point to what is actually in the work that supports your reading. Freedom to interpret, plus responsibility to the work, is the whole lesson in action.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you assume a painting or song had one "real" meaning that the artist put there? After meeting Barthes and the three positions, has that shifted? What is the most slippery part of the idea that meaning is partly made by the viewer?` },
            { id: `reflect-unclear`, category: `What's still unclear`, prompt: `Deconstruction means noticing how a meaning is built and whom it serves, without destroying it. Where does that distinction still feel blurry for you? What is something you would want to "deconstruct" to see the assumption hiding inside it?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson tried to make you someone who can hold a slippery idea without dropping it, taking the freedom to interpret and the responsibility to the work at the same time. Does that feel like a strength you want? When are you tempted to grab one extreme and let go of the other?` },
            { id: `reflect-heritage`, category: `Your heritage`, prompt: `Caro, postmodernism asked "whose truth got called the truth, and whose got left out?" Across Latin American art and history, whose stories were left out of the "official" version you were taught? How does asking that question change what you see?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You constantly meet images, songs, ads, and posts that seem to have one obvious meaning. Where in your real life would it help to ask "who decided this means what it means, and who got left out?" Pick one and think it through.` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `The "worried realist" said that if every reading is equal, a lie about history becomes as good as the truth. What is the strongest version of that worry, and where exactly do you think it stops being right? Can you honor it without giving up the freedom to interpret?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Postmodern tools are most useful when you turn them on the everyday images around you. Two paths beyond the lesson.`,
          familyActivity: {
            title: `Deconstruct An Ad Together`,
            duration: `45 minutes`,
            description: `Pick one advertisement together as a family, a TV commercial, a magazine page, a billboard, a social media ad. First, watch or look at it once just enjoying it. Then deconstruct it together, the way this lesson means: ask what story it is quietly telling, who it shows as powerful or beautiful or normal and who it leaves out, what it wants you to feel and buy, and what assumptions it treats as just "obvious." For example, who is shown cleaning the house, who is shown driving the fast car, who is shown as the expert? Have each family member find one hidden assumption. Then flip it: ask what an ad for the same product would look like if it made the opposite assumptions. The point is not to become cynical about every ad, it is to see that even something as ordinary as a commercial is built by someone, for someone, with assumptions inside it, which is exactly the postmodern insight.`,
          },
          projectOption: {
            title: `Make An Appropriation Piece, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Make your own postmodern artwork using appropriation, the Warhol and Sherrie Levine move, with no copyright trouble (use your own photos, public-domain images, or things you make). Week 1: choose an existing image or style and re-frame it so the meaning shifts. Options: take an ordinary object from your home and present it as "art" with a title and a frame (Warhol's move); take a famous painting style and redo it with subjects from your own life or culture (a self-portrait in the style of a famous portrait; a still life of foods from your family's table); or make a Barbara Kruger style piece, a bold slogan layered over a found or self-made photo, that talks back to an ad or a message you see a lot. Week 2: finish it, show it to a family member, and write 300-500 words explaining what existing thing you appropriated, how re-framing it changed the meaning, and which artist from this lesson you were working in the spirit of. This is real postmodern practice: the meaning is made by the move you make, not by inventing something from nothing.`,
            offerToParent: `Parent: opt your child into the appropriation project. Making a piece whose whole meaning comes from re-framing something that already exists teaches a genuinely sophisticated idea, that context creates meaning, in a hands-on way that sticks far better than a definition. The 2-week arc keeps it finishable.`,
          },
          identityQuestion: `If you become someone who can look at any image, ad, story, or song and ask both "what does this mean to me?" and "who decided what it's supposed to mean, and who got left out?", without losing the ability to say some readings are simply better than others, what does that let you see that most people walk right past?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can ask "whose truth?" without deciding nothing is true.`,
            `A person who brings my own meaning to art and still respects what's actually on the canvas.`,
            `Someone who can spot the hidden assumption inside something that looks obvious.`,
          ],
          saveKey: `identity_responses_ca_11_12_05`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. Five down. You took on one of the slipperiest ideas in this whole band and held it without dropping it. You can tell modernism (confidence in one big universal truth) from postmodernism (suspicion of big stories, asking "whose truth?"), and you know the marker, the 1972 Pruitt-Igoe demolition that a critic called "the day modern architecture died." You know the postmodern moves by name: appropriation (Warhol's soup cans, where only the frame changed), the copy with no original (Sherrie Levine's "After Walker Evans"), pastiche (styles as costumes), and deconstruction (Derrida's tool for noticing how meaning is built and whom it serves). You can hold the three positions on where meaning lives, artist, work, viewer, and you met Roland Barthes' "The Death of the Author" from 1967. You saw postmodernism's real moral power in the Guerrilla Girls and Barbara Kruger, and you weighed its real danger in the worried realist's warning. Above all, you learned the grown-up move: freedom to interpret is not permission to say anything; meaning is co-made, but with a real work that pushes back. Next: AI and the creative arts, where the question of who makes meaning, and who counts as an artist, gets a brand-new and very current twist. Onward, {name}. — Muse`,
          badge: `postmodern-literate`,
          badgeName: `Postmodern Art Literate`,
          xpEarned: 75,
          competencies: [
            `Distinguishes modernism (confidence in one universal truth) from postmodernism (suspicion of big stories, "whose truth?"), with the Pruitt-Igoe 1972 marker`,
            `Names the postmodern moves with real examples: appropriation (Warhol), the copy with no original (Sherrie Levine), pastiche, and deconstruction (Derrida)`,
            `Explains deconstruction as noticing how meaning is built and whom it serves, NOT as destroying meaning`,
            `Articulates the three positions on where meaning lives (artist, work, viewer) and why a mix is the mature view`,
            `Knows Roland Barthes' "The Death of the Author" (1967) and both its power and its danger`,
            `Identifies postmodernism's moral payoff (Guerrilla Girls, Barbara Kruger surfacing hidden assumptions and left-out voices)`,
            `Holds the key reasoning move: freedom to interpret is not permission to say anything; meaning is co-made with a work that sets real limits`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: AI and Creative Arts`,
            hook: `If a machine makes an image, who is the artist, and where does the meaning live now? Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L05 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz} r=${reflect}`
  );
}
