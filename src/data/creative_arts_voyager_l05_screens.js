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
              word: `postmodernism`,
              definition: `Modernism (roughly 1900-1950s) was an attitude of confidence in big ideas: that art could find pure forms, that progress moved forward, that a clean abstract painting or a simple white building could express a deep universal truth. Picture a sleek glass skyscraper or a Piet Mondrian painting of plain red, blue, and yellow squares; the idea was to strip away decoration, find the essence, and let truth show through. Postmodernism (roughly 1960s onward) was the reply that asked "whose truth?" It grew suspicious of big stories altogether, noticing that the "universal truths" of the past were often just the views of whoever held power, presented as truth for everyone. Postmodern artists mixed high and low (treating a soup can like a masterpiece), quoted old styles with a wink, and refused to pretend there was one correct way to see. A concrete marker: the 1972 demolition of the Pruitt-Igoe housing project in St. Louis, built in the 1950s as a shining modern solution to poverty and dynamited within twenty years after it failed; the critic Charles Jencks half-jokingly called the demolition "the day modern architecture died." It captures the shift from the confident big idea to a more skeptical, playful, questioning attitude.`,
              audioPrompt: `Here is the question this lesson hands you, {name}, and it is a strange one. Does a painting have one real meaning, the one the artist intended, or does it mean whatever each viewer makes of it? To see what postmodernism is, first picture what it broke away from. The movement before it was called modernism. Think of modernism like a confident architect. From roughly 1900 to the 1950s, modern artists believed in big ideas: that art could find pure forms, that progress moved forward, that a clean white building or a simple abstract painting could express a deep universal truth. Picture a sleek glass skyscraper, or a Mondrian painting of plain red, blue, and yellow squares. Strip away decoration, find the essence, and the truth shows through. Postmodernism, which grew up from the 1960s onward, was the reply that said "wait, whose truth?" Where modernism trusted one big story, postmodernism got suspicious of big stories altogether. It noticed that the universal truths of the past were often just the views of whoever held power, dressed up as truth for everyone. If modernism was the confident architect, postmodernism was the clever critic standing next to the building asking who it was really built for. One marker people point to: in 1972 the city of St. Louis dynamited the Pruitt-Igoe housing project, built in the 1950s as a shining modern solution to poverty and failed within twenty years. A critic called that demolition "the day modern architecture died."`,
            },
            {
              word: `Pruitt-Igoe`,
              definition: `Pruitt-Igoe is the housing project in St. Louis built in the 1950s as a shining modern solution to poverty, a product of modernism's confidence in clean lines and big ideas. Within twenty years it had failed so badly that the city dynamited it in 1972. Architecture critic Charles Jencks half-jokingly called that demolition "the day modern architecture died." Whether you take the date literally or not, it captures the shift the lesson describes: the confident big idea collapsed, and a more skeptical, more playful, more questioning attitude moved in to replace it.`,
              audioPrompt: `Pruitt-Igoe is the housing project in St. Louis that became the concrete marker of a major shift in thinking, {name}. It was built in the 1950s as a shining modern solution to poverty, all clean lines and big ideas, everything modernism believed in. Strip away decoration, find the essence, build something pure and rational, and the problems will be solved. Within twenty years it had failed so badly that the city dynamited it, demolished in 1972. Architecture critic Charles Jencks half-jokingly called that demolition "the day modern architecture died." The confident big idea literally collapsed. Whether you take the date literally or not, the image captures what happened next: the confident belief in one right answer gave way to something more skeptical, more playful, and more questioning. That shift is what the lesson means when it talks about postmodernism arriving. The clean modern solution gets blown up, and in its place comes an attitude that asks "whose truth was this really?"`,
            },
            {
              word: `Piet Mondrian`,
              definition: `Piet Mondrian is the modernist painter the lesson uses as a picture of modernism's core belief. His paintings of plain red, blue, and yellow squares on white backgrounds with black grid lines are the example of modernism's confidence: strip away decoration, find the pure essential forms, and let the truth show through. For the lesson, a Mondrian painting stands alongside the sleek glass skyscraper as an image of what modernism was reaching for, the idea that you could get down to something clean and universal if you removed everything unnecessary.`,
              audioPrompt: `Piet Mondrian is the modernist painter the lesson uses to put a picture on modernism's core belief, {name}. Think of his paintings: plain red, blue, and yellow squares on white backgrounds, divided by black grid lines. Nothing decorative, nothing extra, just the pure essential forms. That is the image the lesson holds up for modernism's attitude, which ran roughly from 1900 to the 1950s. Strip away decoration, find the essence, and the truth shows through. A Mondrian painting of plain red, blue, and yellow squares sits beside the sleek glass skyscraper as the picture of what modernism was reaching for: the idea that you could get down to something clean and universal by removing everything unnecessary. It is the confident belief in pure forms and universal truths that postmodernism, arriving from the 1960s onward, would push back against, asking "whose universal truth, exactly?"`,
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
              word: `appropriation`,
              definition: `Four postmodern moves, each with a real example. APPROPRIATION: taking an existing image and re-presenting it as your own work so the meaning shifts. Andy Warhol (1928-1987) silkscreened Campbell's Soup cans and Marilyn Monroe's face in the early 1960s, taking the most ordinary object and the most famous photo and making you look at them as art; nothing about the can changed, only the frame around it (a gallery instead of a cupboard). THE COPY WITH NO ORIGINAL: Sherrie Levine (b. 1947) photographed famous photographs by other artists and showed her photos as her own art ("After Walker Evans" 1981), asking what it means to own an "original" if a photograph is already a copy of the world. PASTICHE: mixing styles and times on purpose (a fake Greek column next to a neon sign; a classical melody inside a pop beat); the mixing is deliberate, showing all styles are costumes you can put on rather than one "pure" style. DECONSTRUCTION: from the French thinker Jacques Derrida (1930-2004); to deconstruct is to look closely at something that seems solid and obvious (a story, image, or rule) and show its meaning is shakier and more built-up than it pretends, for example asking why the princess always waits to be rescued, revealing an assumption hiding inside a story treated as innocent. Deconstruction does not destroy meaning; it notices how meaning gets made and who it quietly serves.`,
              audioPrompt: `Postmodernism is easier to grasp through the moves artists made than through definitions, {name}. The first move is appropriation: taking an existing image and re-presenting it as your own work, so the meaning shifts. Andy Warhol did this when he silkscreened Campbell's Soup cans and Marilyn Monroe's face in the early 1960s. He took the most ordinary supermarket object and the most famous celebrity photo and made you look at them as art. Nothing about the can changed; the frame around it did. The second move is the copy with no original. Sherrie Levine photographed famous photographs by other artists and showed her photos as her own art, with titles like "After Walker Evans" from 1981. If a photograph is already a copy of the world, what does it even mean to own an original? The third move is pastiche, mixing styles and times on purpose: a building with a fake Greek column next to a neon sign, a song quoting a classical melody inside a pop beat. The mixing is not a mistake; it shows that all styles are costumes you can put on. The fourth and deepest move is deconstruction, from the French thinker Jacques Derrida. To deconstruct something is to look closely at a thing that seems solid and obvious, a story, an image, a rule, and show that its meaning is shakier and more built-up than it pretends to be. Asking why the princess always waits to be rescued reveals an assumption hiding inside a story everyone treats as innocent. Deconstruction is not about destroying meaning; it is about noticing how meaning gets made, and who it quietly serves.`,
            },
            {
              word: `Sherrie Levine`,
              definition: `Sherrie Levine, born 1947, is the artist the lesson uses to illustrate the postmodern move called "the copy with no original." She photographed famous photographs by other artists and showed her photos as her own art, with titles like "After Walker Evans" from 1981. The question her work forces is: if a photograph is already a copy of the world, what does it even mean to own an "original"? It sounds like cheating, and that is exactly the question she wanted you to ask. Her work is appropriation pushed to its sharpest edge, taking not just any image but a famous art photograph and re-presenting it to expose how fragile the idea of originality really is.`,
              audioPrompt: `Sherrie Levine, born 1947, is the artist the lesson uses to illustrate the postmodern move called the copy with no original, {name}. She photographed famous photographs by other artists and showed her photos as her own art, with titles like "After Walker Evans" from 1981. Walker Evans was himself a famous photographer; Levine photographed his photographs and presented them as her work. It sounds like cheating, and that is exactly the question she wanted you to ask. If a photograph is already a copy of the world, what does it even mean to own an "original"? Her move is appropriation pushed to its sharpest edge. She took not just any image but a celebrated piece of art photography, re-presented it, and forced the question of whether originality is as solid a concept as everyone assumes. That is deconstruction and appropriation working together: not just changing the frame around an ordinary object the way Warhol did, but going straight at the idea of the original itself.`,
            },
            {
              word: `pastiche`,
              definition: `Pastiche is the postmodern move of mixing styles and times on purpose. A postmodern building might stick a fake Greek column next to a neon sign; a postmodern song might quote a classical melody inside a pop beat. The mixing is not a mistake and not indecision. It is the artist refusing to pick one "pure" style and instead showing that all styles are costumes you can put on. Pastiche treats art history as a wardrobe to quote rather than a ladder to climb, which connects to postmodernism's broader suspicion of any one "official" story or correct way to see.`,
              audioPrompt: `Pastiche is the postmodern move of mixing styles and times on purpose, {name}. A postmodern building might stick a fake Greek column right next to a neon sign. A postmodern song might quote a classical melody inside a pop beat. The mixing is not a mistake, and it is not the artist failing to make up their mind. It is deliberate. The point is to show that all styles are costumes you can put on, rather than one pure style that everyone should be working toward. If modernism treated art history as a ladder to climb, reaching toward the one clean universal truth at the top, pastiche treats it as a wardrobe to quote from. You can pull out the Greek column and put it next to the neon sign, and the combination is not a failure of taste; it is the whole statement. Pastiche connects to postmodernism's broader attitude: suspicious of any claim that there is only one correct style, one correct way to see, one universal truth that everyone shares.`,
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
              word: `death author`,
              definition: `The central argument. Picture three people in front of the same painting, arguing where its meaning lives. POSITION 1, the artist: whatever the painter intended is the real meaning, and the viewer's job is to find it. POSITION 2, the artwork itself: the meaning is in the marks on the canvas, regardless of what the artist meant or what the viewer feels, and a careful look reveals it. POSITION 3, the viewer: a painting is just colored shapes until a person looks and makes meaning from their own life, so there are as many meanings as there are viewers. Postmodern thinking pushed hard toward Position 3. In 1967 the French critic Roland Barthes wrote a short essay, "The Death of the Author," arguing that once a work is made, the author's intentions stop being the boss of its meaning, and the reader becomes the place where meaning happens. The power of the idea: it frees you to bring your own life to a book or song and find something the author never planned. The danger: if a work means anything anyone says it means, does it still mean anything at all? Most thoughtful people hold a mix of all three, accepting that intention matters but is not the whole story, that the work sets real limits on plausible meaning, and that the viewer genuinely completes it. The skill is thinking with each position and noticing where each, pushed too far, leads somewhere strange, rather than picking one team and defending it forever.`,
              audioPrompt: `Now the central argument, {name}, the one the Perspectives screen will hand you. Picture three people standing in front of the same painting, arguing about where its meaning actually lives. The first says the meaning lives in the artist: whatever the painter intended is the real meaning, and your job is to find it. The second says the meaning lives in the artwork itself: the marks on the canvas, regardless of what the artist meant or what you feel. The third says the meaning lives in you, the viewer: a painting is just colored shapes until a person looks and makes meaning from their own life, so there are as many meanings as there are viewers. Postmodern thinking pushed hard toward that third view. In 1967 the French critic Roland Barthes wrote a piece called "The Death of the Author," arguing that once a work is made, the author's intentions stop being the boss of its meaning. The reader, Barthes said, becomes the place where meaning happens. You can feel both its power and its danger. The power: it frees you to bring your own life to a book or song and find something the author never planned. The danger: if a work means anything anyone says it means, does it still mean anything at all? Here is the honest part. Most thoughtful people do not land fully on any one of the three positions; they hold a mix. The skill is not picking a team and defending it to the death. The skill is being able to think with each position, see what it gets right, and notice where each one, pushed too far, leads somewhere strange.`,
            },
            {
              word: `Roland Barthes`,
              definition: `Roland Barthes was the French critic who wrote the 1967 essay "The Death of the Author," the piece that pushed postmodern thinking hardest toward the third position on where meaning lives: the viewer. Barthes argued that once a work is made, the author's intentions stop being the boss of its meaning, and the reader becomes the place where meaning happens. The power of his idea is that it frees you to bring your own life to a book or song and find something the author never planned. The danger the lesson names: if a work means anything anyone says it means, does it still mean anything at all?`,
              audioPrompt: `Roland Barthes was the French critic who wrote the 1967 essay that gives this vocab entry its name, {name}. "The Death of the Author" is the piece that pushed postmodern thinking hardest toward the third position on where meaning lives: the viewer, not the artist. Barthes argued that once a work is made, the author's intentions stop being the boss of its meaning. The reader, Barthes said, becomes the place where meaning happens. The birth of the reader must be at the cost of the death of the author. The power of his idea is real: it frees you to bring your own life to a book or a song and find something the author never planned, and that is not a misreading, it is the work doing its fullest work in many different lives. But the lesson also names the danger. If a work means anything anyone says it means, does it still mean anything at all? Can a painting be "about" something it clearly is not, just because a viewer insists? Barthes opened a door that most thoughtful people walk through carefully, not all the way.`,
            },
            {
              word: `three positions`,
              definition: `The three positions are the three answers to the question of where meaning lives in a work of art. The first position says meaning lives in the artist: whatever the painter intended is the real meaning, and the viewer's job is to find it. The second says meaning lives in the artwork itself: the marks on the canvas, regardless of what the artist meant or what the viewer feels, and a careful look reveals it. The third says meaning lives in the viewer: a painting is just colored shapes until a person looks and makes meaning from their own life, so there are as many meanings as there are viewers. Postmodern thinking pushed hard toward the third. Most thoughtful people hold a mix: the artist's intention matters and is not the whole story, the work itself sets real limits on what it can plausibly mean, and the viewer genuinely brings something that completes it.`,
              audioPrompt: `The three positions are the three answers to the question this section asks: where does the meaning actually live, {name}? Picture three people in front of the same painting, arguing. The first says the meaning lives in the artist. Whatever the painter intended is the real meaning, and your job as a viewer is to find it. The second says the meaning lives in the artwork itself, the marks on the canvas, regardless of what the artist meant or what you feel. A careful look reveals it. The third says the meaning lives in you, the viewer. A painting is just colored shapes until a person looks and makes meaning from their own life, so there are as many meanings as there are viewers. Postmodern thinking pushed hard toward that third view, and Roland Barthes' 1967 essay is the famous example. But the lesson's honest conclusion is that most thoughtful people do not land fully on any one position; they hold a mix. Intention matters and is not the whole story. The work sets real limits on what it can plausibly mean. And the viewer genuinely brings something that completes it. The skill is thinking with each position, not picking one and defending it forever.`,
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
              word: `tool leftout`,
              definition: `Postmodernism was not only a clever game about whether meaning is stable; it had real power and helped real people the old "universal truths" had left out. When you stop trusting the one big official story, you start asking whose voices got left out of it, and that question opened doors. Artists pushed to the edges of the art world (women, Black artists, Indigenous artists, artists from formerly colonized countries) used postmodern tools to challenge a canon that had mostly celebrated wealthy European men. Concrete examples: the Guerrilla Girls, an anonymous group formed in New York in 1985, wore gorilla masks and made posters with hard data, such as counting how few women artists hung in major museums while most of the nude paintings were of women, turning the museum's own numbers into a question it could not easily answer. Barbara Kruger (b. 1945) layered bold slogans over found photographs, work like "Your body is a battleground" (1989), using the visual language of advertising to talk back to advertising. Across Latin America, artists used appropriation and pastiche to comment on dictatorship and inequality, building on the conceptual traditions from Lesson 1. The strongest case for taking postmodernism seriously: it noticed that the "neutral" official version of art history was never neutral and made space for left-out stories. The strongest worry, sitting right next to it: pushed far enough, "there is no single truth" can leave you unable to say anything is better, truer, or more just than anything else.`,
              audioPrompt: `It would be easy to dismiss all this as clever people overthinking art, {name}. But the postmodern move had real power, and it helped real people, especially people the old "universal truths" had left out. When you stop trusting the one big official story, you start asking whose voices got left out of it. That question opened doors. Artists who had been pushed to the edges of the art world, women, Black artists, Indigenous artists, artists from formerly colonized countries, used postmodern tools to challenge a canon that had mostly celebrated wealthy European men. The Guerrilla Girls, an anonymous group formed in New York in 1985, wore gorilla masks and made posters with hard data, like counting how few women artists hung in major museums while most of the nude paintings were of women. They took the museum's own numbers and turned them into a question the museum could not easily answer. Barbara Kruger layered bold slogans over found photographs, work like "Your body is a battleground" from 1989, using the visual language of advertising to talk back to advertising. So postmodernism was not only a parlor game about whether meaning is stable. It was a set of tools for noticing that the "neutral" official version of art history was never neutral. And it sits right next to the strongest worry about it: if you push "there is no single truth" far enough, you can end up unable to say anything is better, truer, or more just than anything else.`,
            },
            {
              word: `Guerrilla Girls`,
              definition: `The Guerrilla Girls are the anonymous group formed in New York in 1985 who wore gorilla masks and made posters with hard data, like counting how few women artists hung in major museums while most of the nude paintings were of women. That is appropriation and deconstruction used as a weapon: they took the museum's own numbers and turned them into a question the museum could not easily answer. The lesson holds them up as the clearest example of postmodernism's real-world power, showing that the "neutral" official version of art history was never neutral and making space for voices it had left out.`,
              audioPrompt: `The Guerrilla Girls are the anonymous group formed in New York in 1985 who wore gorilla masks and made posters with hard data, {name}. Their move was to count: how few women artists actually hung on the walls of major museums, and how many of the nude paintings on those same walls were of women. They took the museum's own numbers and turned them into a question the museum could not easily answer. That is appropriation and deconstruction used as a weapon of justice rather than as an art theory game. The lesson holds them up as the clearest example of postmodernism's real-world power. When you stop trusting the one big official story, you start asking whose voices got left out of it. The Guerrilla Girls made that question visible, concrete, and hard to dodge. Their posters showed that the "neutral" official version of art history was not neutral at all; it was built by people with power, and they used that power to decide whose art counted.`,
            },
            {
              word: `Barbara Kruger`,
              definition: `Barbara Kruger, born 1945, is the artist who layered bold slogans over found photographs, making work like "Your body is a battleground" from 1989. She used the visual language of advertising to talk back to advertising, turning the same tools, big text, stark contrast, direct address, against the messages those tools usually delivered. The lesson names her alongside the Guerrilla Girls as an example of postmodernism's real-world power: using postmodern moves not as a parlor game but to challenge the official story and make space for voices it left out.`,
              audioPrompt: `Barbara Kruger, born 1945, is the artist who took the visual language of advertising and used it to talk back to advertising, {name}. She layered bold slogans over found photographs: big text, stark contrast, a direct address to you, the viewer. Her work "Your body is a battleground" from 1989 is the example the lesson names. The tools she used, the same ones you see in magazine ads and billboards, were turned against the messages those tools usually delivered. The lesson names her alongside the Guerrilla Girls as a concrete example of postmodernism's real-world power. Appropriation and deconstruction were not just theories; they were a set of tools for noticing that the "neutral" official version of things was never neutral, and for making space for voices the official story had left out. Kruger used the language of the system against the system itself.`,
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
              word: `say anything`,
              definition: `The synthesis before the Perspectives screen. This lesson handed you a hard idea: postmodernism doubted the big official stories, mixed high and low, treated styles as costumes you can put on, and pushed the question of where meaning lives toward the viewer. Its deepest tool, deconstruction, taught you to look at something solid-seeming and notice how its meaning was built and whom it served. Its real-world power was making space for voices the official story left out (the Guerrilla Girls, Barbara Kruger, Latin American artists under dictatorship). The Perspectives screen will put several voices in front of you, each holding a different position on whether meaning is stable, whether the artist's intention rules, whether "anything goes," and whether the whole move was liberating or corrosive. The task is not to crown a winner but to enter each voice honestly, find the true thing it points at, and feel where it strains; the most postmodern skill is refusing to let any single voice become the new official story. The steadying thought: deciding that meaning is partly made by viewers does not mean every reading is equally good. You can believe a poem speaks to you personally and still recognize that a reading that ignores every actual word on the page is worse than one that honors them. Freedom to interpret is not the same as permission to say anything.`,
              audioPrompt: `Pull it together before you weigh the voices, {name}. This lesson handed you a genuinely hard idea and asked you not to flinch from it. Postmodernism doubted the big official stories, mixed high and low, treated styles as costumes, and pushed the question of where meaning lives toward the viewer. Its deepest tool, deconstruction, taught you to look at something solid-seeming and notice how its meaning was built and whom it served. And its real-world power was making space for voices the official story left out. Now the Perspectives screen will put several voices in front of you, each holding a different position on whether meaning is stable, whether the artist's intention rules, whether anything goes, and whether the whole move was liberating or corrosive. Your task is not to crown a winner. It is to enter each voice honestly, find the true thing it is pointing at, and feel where it strains. One last steadying thought, because slippery ideas can leave a person feeling like nothing is solid. Deciding that meaning is partly made by viewers does not mean every reading is equally good. You can believe a poem speaks to you personally and still recognize that a reading ignoring every actual word on the page is a worse reading than one that honors them. Freedom to interpret is not the same as permission to say anything.`,
            },
            {
              word: `postmodern skill`,
              definition: `The postmodern skill the lesson names is refusing to let any single voice become the new official story. Postmodernism doubted big official stories, and the irony is that the most postmodern thing you can do when facing a range of voices is not to crown a winner among them. The task the lesson gives you is to enter each voice honestly, find the true thing it points at, and feel where it strains. That is the grown-up version of the idea: not picking one team and defending it forever, but being able to think with each position and notice where each one, pushed too far, leads somewhere strange.`,
              audioPrompt: `The postmodern skill the lesson names is refusing to let any single voice become the new official story, {name}. Think about the irony in that. Postmodernism was the movement that doubted big official stories altogether. It was suspicious of anyone who said: here is the one right answer, here is the one correct way to see. And yet it would be easy, after reading this lesson, to simply replace the old official story with a new one: "the viewer always makes the meaning" or "nothing is ever really true." That would be the opposite of what the lesson is asking. The most postmodern skill of all is to hold multiple voices at once, enter each one honestly, find the true thing it is pointing at, and feel where it strains. The Perspectives screen that follows asks exactly that of you. Not to crown a winner. Not to pick one team and defend it. But to think with each voice and notice where each one, pushed too far, leads somewhere strange.`,
            },
            {
              word: `freedom interpret`,
              definition: `Freedom to interpret is the idea, supported by Roland Barthes and postmodern thinking, that meaning is partly made by the viewer, and that you can bring your own life to a work and find something the author never planned. The lesson names this freedom and then immediately names its limit: freedom to interpret is not the same as permission to say anything. You can believe a poem speaks to you personally and still recognize that a reading ignoring every actual word on the page is a worse reading than one that honors them. The work itself sets real limits on what it can plausibly mean. Meaning is co-made, but with a real work that pushes back.`,
              audioPrompt: `Freedom to interpret is the idea the lesson names right before handing you the Perspectives screen, {name}. Postmodern thinking, especially Roland Barthes, argued that meaning is partly made by the viewer, that once a work is made the author's intentions stop being the boss of it, and that the reader becomes the place where meaning happens. That is real freedom. You can bring your own life to a book or a song and find something the author never planned, and that is not a misreading. But the lesson draws a line. Freedom to interpret is not the same as permission to say anything. You can believe a poem speaks to you personally and still recognize that a reading ignoring every actual word on the page is a worse reading than one that honors them. A work that clearly shows one thing cannot be "really about" the opposite just because a viewer insists. The work itself pushes back. Meaning is co-made, but it is co-made with something real. That steadying thought is what the lesson leaves you with before you walk into the Perspectives screen.`,
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
              // reasoning: must distinguish the ATTITUDE shift, not memorize dates
              question: `A museum guide says "modern and postmodern art are basically the same — both are just modern-day art." Using the lesson, what's the clearest correction?`,
              options: [
                `Modernism trusted big universal truths and pure forms; postmodernism got suspicious and asked "whose truth?"`,
                `Modernism is older, so it's worse — postmodernism improved on it by being more colorful and fun.`,
                `They differ only in date: anything before 1960 is modern, anything after is postmodern, regardless of ideas.`,
                `Modernism was about painting and postmodernism was about architecture — different art forms, same era.`,
              ],
              correctIndex: 0,
              explanation: `Modernism (roughly 1900-1950s) trusted one big universal truth and pure forms; postmodernism (1960s onward) got suspicious of big stories and asked whose truth they really were. The shift is an attitude, not just a date — the 1972 Pruitt-Igoe demolition is the marker critics cite for the move from confidence to skepticism. The distractors are the common shortcuts: treating it as quality, as pure chronology, or as different media.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              // reasoning: must locate the art in the FRAMING, rule out misconceptions
              question: `Someone says Warhol's soup-can work "isn't really art — he just copied a label, so he made nothing." What's the strongest reply based on the lesson?`,
              options: [
                `He actually redrew the label by hand, so it counts as an original drawing after all.`,
                `Copying is fine here because nobody legally owned the soup-can image anyway.`,
                `It's art mainly because Warhol was already famous when he made it.`,
                `Nothing about the can changed — what changed was the frame, and that shift of context is the art.`,
              ],
              correctIndex: 3,
              explanation: `Appropriation is taking an existing image and re-presenting it so meaning shifts. Warhol changed nothing about the can except its context — a gallery instead of a cupboard. The art is in the framing, not the object. Each wrong answer is a tempting partial-understanding: that the object must change, that it's about ownership, or that it's about the artist's fame rather than the move itself.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              // reasoning: separate what deconstruction IS from what it is NOT
              question: `A classmate says "deconstruction just means proving that nothing really means anything." Why is that wrong, according to the lesson?`,
              options: [
                `It's wrong because deconstruction is only about taking physical sculptures apart to study them.`,
                `Deconstruction shows how a meaning is built and whom it quietly serves — not that meaning is destroyed.`,
                `It's wrong because deconstruction proves the original meaning was always the only true one.`,
                `It's wrong because deconstruction can only be used on fairy tales, not on real artworks.`,
              ],
              correctIndex: 1,
              explanation: `Deconstruction (associated with Jacques Derrida) looks closely at something that seems solid and shows its meaning is shakier and more built-up than it pretends — like asking why the princess always waits to be rescued. It does NOT destroy meaning or claim nothing means anything; it notices how meaning gets made and who it serves. The distractors are the literal misreading, the opposite error, and a false limit on its scope.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              // STEM REWRITTEN from recall ("what did Barthes argue?") to application
              question: `A living poet tells two readers, "You both read my poem wrong — here's what I really meant." Using Barthes' "The Death of the Author," what does his idea actually claim about this?`,
              options: [
                `The poet automatically wins, because the author always knows the one true meaning.`,
                `Once the poem exists, the poet's intention stops being the boss of its meaning, and readers' meanings count too.`,
                `Whoever is older, or simply more educated, should get to decide which single reading is the correct one.`,
                `The poem has no meaning at all until a professional critic publishes the official one.`,
              ],
              correctIndex: 1,
              explanation: `Barthes argued that once a work is made, the author's intention stops being the boss of its meaning, and the reader becomes where meaning happens. Its power is freeing you to find meaning the author never planned; its danger is that if anything goes, it's hard to call any reading simply wrong. Option A is the exact view Barthes rejects; C swaps meaning for authority; D over-reads him into nihilism plus gatekeeping. (Pairs with q9/q10's "responsibility to the work" corrective.)`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              // reasoning: WHY the mix, not just naming three positions
              question: `The lesson says most thoughtful people hold a mix of the three positions on where meaning lives. What's the best reason for the mix?`,
              options: [
                `Mixing is just being polite — it avoids picking a side and upsetting anyone.`,
                `Because the experts simply can't agree, so quietly guessing a blend feels safer than actually choosing one.`,
                `Each single position breaks down when pushed too far, so a mix keeps the best of all three at once.`,
                `Because the artist, the work, and the viewer always mean exactly the same thing anyway.`,
              ],
              correctIndex: 2,
              explanation: `The three positions locate meaning in the artist's intention, the artwork itself, or the viewer. Each alone fails: pure intention ignores meanings the artist never imagined; pure "the work itself" ignores how the viewer's knowledge shapes it; pure "the viewer decides" slides toward anything-goes. A mix respects intention, honors what's on the canvas, and still lets the viewer complete the work. The distractors mistake the mix for politeness, indecision, or sameness.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              // [VERIFY-SECTION] reasoning: the MECHANISM of how they used data, not just "they protested"
              question: `Why was the Guerrilla Girls' use of the museums' own counting data such a powerful move, according to the lesson?`,
              options: [
                `It turned the museum's own numbers into a question about bias that the museum couldn't easily dodge.`,
                `It proved that women's art sells for more money than men's at auction.`,
                `It convinced the major museums to quietly remove all of the nude paintings from their gallery walls.`,
                `It showed that anonymous artists in masks make better art than famous ones.`,
              ],
              correctIndex: 0,
              explanation: `The Guerrilla Girls (formed 1985) counted how few women artists hung in major museums while most nudes were of women, turning the institution's own evidence against its claim of neutrality — a question it couldn't easily dodge. Barbara Kruger did similar work with slogans over found photos. This is deconstruction as a tool of justice: surfacing hidden assumptions in what looked neutral. The distractors invent claims (auction prices, removing nudes, masks = better art) the lesson never makes.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              // [VERIFY-SECTION] SYNTHESIS: combines the "worried realist" (s7) with deconstruction-for-justice (s6)
              question: `The lesson both praises deconstruction (Guerrilla Girls exposing bias) AND warns it can be abused. Holding both, what is the lesson's actual position?`,
              options: [
                `Deconstruction is always purely destructive, so the Guerrilla Girls were simply wrong to ever use it at all.`,
                `Since all truth is just power, the Guerrilla Girls' data is no more valid than anyone's opinion.`,
                `Deconstruction works on art but never on real-world questions like who gets shown in museums.`,
                `It's a tool: it can surface hidden bias AND be abused to dodge facts, so it must be used with responsibility to evidence.`,
              ],
              correctIndex: 3,
              explanation: `The lesson holds both at once. Deconstruction surfaces hidden assumptions and gives voice to the left-out — its moral payoff, seen in the Guerrilla Girls. But "no single truth," pushed too far, can excuse lies (the worried-realist's warning, e.g. dressing up Holocaust denial as "another reading"). So interpretive freedom comes with responsibility to the actual evidence. This requires combining the justice section with the limit section — synthesis, not recall.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              // reasoning: WHY pastiche's mixing is deliberate, ruling out the "couldn't decide" misread
              question: `A postmodern building puts a fake Greek column next to a neon sign. Why does the lesson call this deliberate rather than a mistake?`,
              options: [
                `Mixing styles on purpose shows styles are costumes you can put on, not a ladder of progress to climb.`,
                `The architect ran out of money and had to combine whatever materials were cheapest.`,
                `It's actually an accident — postmodern artists genuinely couldn't decide on one style.`,
                `It proves the newest style is always best and the old column is there to be mocked.`,
              ],
              correctIndex: 0,
              explanation: `Pastiche mixes styles and times on purpose — a fake Greek column beside a neon sign, a classical melody in a pop beat. It's not indecision or a budget accident; it's the point. By mixing high and low, old and new, the artist shows all styles are costumes, treating art history as a wardrobe to quote rather than a ladder to climb. This connects to postmodernism's broader doubt about any one "official" style. The distractors are the "couldn't decide," "ran out of money," and "newest is best" misreadings.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If meaning is partly made by the viewer, then every interpretation of an artwork is equally good and no reading can be called wrong.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False, and this is the key reasoning move of the lesson. Accepting that the viewer helps make meaning does not mean every reading is equally good. You can believe a poem speaks to you personally, in a way the poet never planned, and still recognize that a reading which ignores every actual word on the page is worse than one that honors them. The work itself sets real limits: an interpretation the words and images genuinely support is stronger than one they flatly contradict. Roland Barthes freed the reader to bring their own life to a work, but that freedom is the freedom to find real meaning the work can bear, not a license to claim a painting of a sunrise is "really about" something nowhere present in it. Freedom to interpret comes with responsibility to the actual work and, when facts are involved, to the actual record. That is exactly why "the viewer makes meaning" and "some readings are simply wrong" can both be true at once: meaning is co-made, but it is co-made with a real work that pushes back.`,
            },
            {
              id: `q10`,
              type: `inference`,
              // SYNTHESIS + application: pulls Barthes (s4), the three positions (s5), and the worried-realist limit (s7)
              question: `You post that a famous old painting "is secretly about climate change." Someone replies it's impossible — the painting predates climate-change talk by 200 years — and that you're "just making things up." Using the lesson, what's the most honest and thoughtful response?`,
              options: [
                `Insist the artist must have secretly predicted climate change and intended the message all along.`,
                `Separate the intention claim (which the replier defeats) from the viewer-meaning claim (which Barthes supports), concede what's true, and point to what's actually in the painting that supports your reading.`,
                `Admit you were wrong about everything and agree a painting can only ever mean what its maker intended.`,
                `Tell the replier that facts don't matter and any interpretation is automatically as good as any other.`,
              ],
              correctIndex: 1,
              explanation: `This applies the whole lesson at once. Separate the intention claim (the replier rightly defeats it — you can't intend a message about an idea that didn't exist yet) from the viewer-meaning claim (Barthes supports it — viewers find meanings the maker never planned). Concede what's true, then hold yourself to the lesson's standard: point to what's actually in the work — flooded fields, powerless figures, an overwhelming sky. If the painting genuinely shows nature overwhelming people, your climate reading is one the work can bear; if you're reading it into a calm sunny portrait, you're imposing, not interpreting. The three wrong options are the exact errors the lesson warns against: insisting on secret intention, fully caving to author-only meaning, and "anything goes."`,
            },
          ]
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
