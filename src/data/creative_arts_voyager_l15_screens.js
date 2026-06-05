// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L15 — Installation and Immersive Art
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Installation Art, Immersive Experience, Aesthetics, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: PERSPECTIVES (multi-viewpoint debate: is immersive/experiential
// art great art, or hollow spectacle?). Contract matches L05/L10: perspectives[] with
// id/voice/era/stance/quote/argument/evidence/strengths_and_limits; synthesisPrompt +
// reflectionPrompt.
// EVENHANDEDNESS: presents the real, ongoing debate fairly; does not declare immersive
// art either "real art" or "fake". Teaches the reader to build their own view from
// competing serious positions. Real named examples (Kusama Infinity Rooms, teamLab,
// James Turrell, earlier installation artists) treated factually.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l15-v1";

const CREATIVE_ARTS_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-15`,
      title: `Installation and Immersive Art`,
      duration: 35,
      xpReward: 75,
      badge: `immersive-art-literate`,
      badgeName: `Immersive Art Literate`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, for most of history, art was something you looked AT, a painting on a wall, a sculpture on a stand, with you standing outside it. Then artists started making art you step INTO, rooms and environments that surround you, that you walk through and become part of. This is installation art, and its dramatic, spectacular cousin, immersive art, mirrored rooms that seem infinite, halls of projected light, environments built to flood every sense. Some of it is breathtaking. And it has sparked a genuinely good fight that you will hear all around you: is this stuff profound, important art, or is it just expensive spectacle, pretty backdrops for photos with nothing real underneath? Serious people disagree, and they have good reasons on both sides. Today you will not be told the answer. You will hear the strongest versions of the competing views, and build your own, which is exactly the kind of thinking a question this open deserves. Onward.`,
          headline: `Installation and Immersive Art`,
          subtitle: `Art you step inside, and the debate: profound, or just spectacle? Perspectives.`,
          visual: `/voyager-assets/creative-arts/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Art You Step Inside`,
          paragraphs: [
            `Start with what installation art actually is, because the idea is genuinely new in the long story of art. An installation is artwork made for a specific space that you enter and experience from the inside, rather than view from a distance. Instead of hanging one painting on a wall, an installation artist might fill an entire room, with objects, light, sound, materials, even smell, so the whole environment is the artwork and you are inside it. The space itself, and your movement through it, becomes part of the piece. This shifts something fundamental: you are no longer a viewer looking at art, you are a participant moving within it.`,
            `That shift is the key idea, and it is worth pausing on. In a traditional painting, the art is the object on the wall, and you are outside it, observing. In an installation, there is often no single object to point at, the art is the whole experience of being in the space, including what you notice, where you walk, and how it makes you feel as you move. This means time and your own body become part of the artwork in a way they never were for a framed picture. Installation art asks a real question: what if art were not a thing you look at, but a place you go and an experience you have?`,
            `Immersive art is the bigger, flashier branch of this idea, and it is what has exploded in popularity recently. Immersive works try to surround and overwhelm your senses completely: rooms lined with mirrors and lights that seem to stretch to infinity, halls where famous paintings are projected huge across every wall and the floor while music plays, spaces of pure colored light you stand inside. The artist Yayoi Kusama became famous worldwide for her "Infinity Mirror Rooms," small rooms whose mirrors create the feeling of endless space; the collective teamLab builds vast digital environments of moving light; James Turrell has spent decades making art purely out of light and space. These works can be genuinely stunning, and they are also exactly where the big debate begins.`,
          ],
          image: `/voyager-assets/creative-arts/l15-s1-inside.webp`,
          imageCaption: `What installation art is, a genuinely new idea in art's long story: artwork made for a specific space that you ENTER and experience from inside, rather than view from a distance. Instead of one painting on a wall, an installation artist might fill a whole room with objects, light, sound, materials, even smell, so the environment is the artwork and you are inside it; the space and your movement through it become part of the piece. The fundamental shift: you are no longer a viewer looking AT art but a participant moving WITHIN it, so time and your own body become part of the artwork. Immersive art is the bigger, flashier branch that has exploded recently, trying to surround and overwhelm the senses: mirrored rooms that seem infinite, halls of projected paintings with music, rooms of pure colored light. Yayoi Kusama's "Infinity Mirror Rooms," the collective teamLab's vast digital light environments, James Turrell's decades of art made from light and space, genuinely stunning, and exactly where the debate begins.`,
          vocab: [
            {
              word: `installation and immersive art: art you step inside`,
              definition: `Installation art is a genuinely new idea in the long story of art: artwork made for a specific space that you enter and experience from the inside, rather than view from a distance. Instead of hanging one painting on a wall, an installation artist might fill an entire room with objects, light, sound, materials, even smell, so the whole environment is the artwork and you are inside it, and the space itself plus your movement through it becomes part of the piece. This shifts something fundamental: you are no longer a viewer looking at art, you are a participant moving within it. In a traditional painting the art is the object on the wall and you observe from outside; in an installation there is often no single object to point at, the art is the whole experience of being in the space, including what you notice, where you walk, and how it makes you feel, so time and your own body become part of the artwork in a way they never were for a framed picture. Installation art asks a real question: what if art were not a thing you look at but a place you go and an experience you have? Immersive art is the bigger, flashier branch that has exploded in popularity recently, trying to surround and overwhelm your senses completely: rooms lined with mirrors and lights that seem to stretch to infinity, halls where famous paintings are projected huge across every wall and the floor while music plays, spaces of pure colored light you stand inside. Yayoi Kusama became world-famous for her "Infinity Mirror Rooms" whose mirrors create endless-seeming space; the collective teamLab builds vast digital environments of moving light; James Turrell has spent decades making art purely from light and space. These works can be genuinely stunning, and they are exactly where the big debate begins.`,
              audioPrompt: `Start with what installation art actually is, {name}, because the idea is genuinely new in the long story of art. An installation is artwork made for a specific space that you enter and experience from the inside, rather than view from a distance. Instead of hanging one painting on a wall, an installation artist might fill an entire room, with objects, light, sound, materials, even smell, so the whole environment is the artwork and you are inside it. The space itself, and your movement through it, becomes part of the piece. This shifts something fundamental: you are no longer a viewer looking at art, you are a participant moving within it. In a traditional painting, the art is the object on the wall, and you are outside it, observing. In an installation, there is often no single object to point at; the art is the whole experience of being in the space, including what you notice, where you walk, and how it makes you feel. Installation art asks a real question: what if art were not a thing you look at, but a place you go and an experience you have? Immersive art is the bigger, flashier branch of this idea, and it is what has exploded in popularity recently. Immersive works try to surround and overwhelm your senses completely: rooms lined with mirrors and lights that seem to stretch to infinity, halls where famous paintings are projected huge across every wall, spaces of pure colored light you stand inside. Yayoi Kusama became famous worldwide for her Infinity Mirror Rooms; the collective teamLab builds vast digital environments of moving light; James Turrell has spent decades making art purely out of light and space. These works can be genuinely stunning, and they are also exactly where the big debate begins.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why People Love It`,
          paragraphs: [
            `There are real, serious reasons people, including many artists and critics, find immersive and installation art genuinely valuable, and a fair thinker takes these seriously before judging. The first is that it can create powerful, embodied experiences that a flat picture cannot. Standing inside a space of seemingly infinite mirrored light, or surrounded on all sides by moving color, can produce a feeling of awe, smallness, wonder, or dissolving boundaries that you simply cannot get from looking at an image of it. The art works on your whole body and your sense of being somewhere, which is a real artistic effect, not a trick.`,
            `Second, supporters argue it democratizes art, makes it welcoming to people who find traditional galleries cold or intimidating. A quiet room of paintings with little plaques can feel like it requires special knowledge to "get." A vast hall of moving light that simply surrounds you invites everyone in, no art degree required, and many people who would never visit a traditional museum will happily enter an immersive experience and feel something real. To supporters, that openness is a feature, not a flaw, art reaching people it usually misses.`,
            `Third, defenders point out that "art you experience rather than just look at" is not new or shallow, it has a serious history. Artists have been making installations and environments for many decades, long before social media, exploring exactly these questions about space, perception, and the viewer's role. James Turrell has worked with light and space seriously for half a century; Yayoi Kusama's infinity rooms grow out of decades of genuine artistic vision about infinity and the self. So the strongest case for immersive art is that, at its best, it is a real and serious art form, creating embodied experiences, opening art to more people, and continuing a long, thoughtful tradition of art you inhabit rather than observe. That is the case to take seriously, even if you end up disagreeing with parts of it.`,
          ],
          image: `/voyager-assets/creative-arts/l15-s2-love.webp`,
          imageCaption: `Real, serious reasons people (including artists and critics) value immersive and installation art, taken seriously before judging. (1) Powerful embodied experiences a flat picture cannot give: standing inside infinite mirrored light or surrounded by moving color can produce awe, smallness, wonder, or dissolving boundaries you cannot get from an image, working on your whole body and sense of being somewhere, a real artistic effect, not a trick. (2) It democratizes art, welcoming people who find traditional galleries cold or intimidating; a hall of moving light invites everyone, no art degree required, reaching people museums usually miss. (3) It has a serious history, not new or shallow: artists made installations for decades before social media, James Turrell working with light and space for half a century, Kusama's infinity rooms from decades of real vision about infinity and self. The strongest case: at its best it is a real, serious art form, embodied, open, and continuing a long thoughtful tradition of art you inhabit.`,
          vocab: [
            {
              word: `the serious case for immersive art`,
              definition: `There are real, serious reasons many artists and critics find immersive and installation art genuinely valuable, and a fair thinker takes these seriously before judging. First, it can create powerful, embodied experiences that a flat picture cannot: standing inside a space of seemingly infinite mirrored light, or surrounded on all sides by moving color, can produce a feeling of awe, smallness, wonder, or dissolving boundaries that you simply cannot get from looking at an image of it, because the art works on your whole body and your sense of being somewhere, which is a real artistic effect, not a trick. Second, supporters argue it democratizes art, makes it welcoming to people who find traditional galleries cold or intimidating: a quiet room of paintings with little plaques can feel like it requires special knowledge to "get," while a vast hall of moving light that surrounds you invites everyone in with no art degree required, and many people who would never visit a traditional museum will happily enter an immersive experience and feel something real, an openness supporters count as a feature, not a flaw. Third, defenders point out that "art you experience rather than just look at" is not new or shallow but has a serious history: artists have made installations and environments for many decades, long before social media, exploring real questions about space, perception, and the viewer's role, with James Turrell working with light and space seriously for half a century and Yayoi Kusama's infinity rooms growing out of decades of genuine artistic vision about infinity and the self. So the strongest case is that, at its best, immersive art is a real and serious art form, creating embodied experiences, opening art to more people, and continuing a long, thoughtful tradition of art you inhabit rather than observe, the case to take seriously even if you end up disagreeing with parts of it.`,
              audioPrompt: `There are real, serious reasons people, including many artists and critics, find immersive and installation art genuinely valuable, {name}, and a fair thinker takes these seriously before judging. The first is that it can create powerful, embodied experiences that a flat picture cannot. Standing inside a space of seemingly infinite mirrored light, or surrounded on all sides by moving color, can produce a feeling of awe, wonder, or dissolving boundaries that you simply cannot get from looking at an image of it. The art works on your whole body and your sense of being somewhere, which is a real artistic effect, not a trick. Second, supporters argue it democratizes art, makes it welcoming to people who find traditional galleries cold or intimidating. A quiet room of paintings with little plaques can feel like it requires special knowledge to get. A vast hall of moving light that simply surrounds you invites everyone in, no art degree required. To supporters, that openness is a feature, not a flaw. Third, defenders point out that art you experience rather than just look at is not new or shallow, it has a serious history. Artists have been making installations and environments for many decades, long before social media. James Turrell has worked with light and space seriously for half a century; Yayoi Kusama's infinity rooms grow out of decades of genuine artistic vision. So the strongest case for immersive art is that, at its best, it is a real and serious art form, creating embodied experiences, opening art to more people, and continuing a long, thoughtful tradition of art you inhabit rather than observe.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Critics Push Back`,
          paragraphs: [
            `Now the other side, just as seriously, because the critics are not just grumpy traditionalists, they have real arguments, and a fair thinker takes these seriously too. The sharpest criticism is about the rise of immersive experiences that seem designed mainly to be photographed and posted, rather than to mean anything. Critics call this "Instagram art" or "the experience economy": spaces built less as art and more as attractive backdrops, where the real product is the photo you take and share, and the artistic content underneath is thin or absent. The worry is not that something is pretty, it is that prettiness plus a good photo op is being sold as if it were profound art.`,
            `A second criticism is about depth versus spectacle. Critics argue that some immersive experiences overwhelm your senses without giving you much to actually think about or return to, that the awe wears off quickly and leaves nothing behind, the way a fireworks show is dazzling but not exactly deep. Great art, on this view, rewards return and reflection: you can look at a real painting for years and keep finding more, while a flashy light room may give you one big "wow" and then have little left to offer once the novelty fades. Spectacle, the critics say, is not the same as substance, and a sensory overload can disguise the fact that there is not much underneath.`,
            `A third criticism is about money and authenticity. Many of the most heavily marketed "immersive experiences" are commercial productions, often not made by the original artist at all, like halls that project a famous dead painter's work across the walls. Critics argue these can be more like theme-park rides than art, expensive, crowd-pleasing, designed to sell tickets and merchandise, trading on a great artist's name without their involvement or vision. This connects to questions you have met before about authenticity and commerce: when an "experience" is built by a company to monetize a famous name and generate shareable photos, is it art, entertainment, or advertising wearing art's clothes? The critics are not saying all immersive work is empty, they are saying you should look hard at which is genuine art and which is spectacle sold as art.`,
          ],
          image: `/voyager-assets/creative-arts/l15-s3-critics.webp`,
          imageCaption: `The other side, taken just as seriously, critics with real arguments, not grumpy traditionalists. (1) "Instagram art" / the "experience economy": spaces designed mainly to be photographed and posted, where the real product is the shareable photo and the artistic content underneath is thin, the worry is prettiness plus a photo op being sold as profound art. (2) Depth vs. spectacle: some immersive experiences overwhelm the senses without giving you much to think about or return to; the awe wears off fast, like fireworks, dazzling but not deep, while great art rewards return and reflection (a painting keeps giving for years). Spectacle is not substance; sensory overload can hide that little is underneath. (3) Money and authenticity: many heavily marketed "immersive experiences" are commercial productions, often not made by the original artist (halls projecting a dead painter's work), more theme-park ride than art, trading on a famous name to sell tickets. Look hard at which is genuine art and which is spectacle sold as art.`,
          vocab: [
            {
              word: `the serious case against (much) immersive art`,
              definition: `The critics of immersive art are not just grumpy traditionalists; they have real arguments a fair thinker takes seriously. The sharpest is about experiences designed mainly to be photographed and posted rather than to mean anything, what critics call "Instagram art" or "the experience economy": spaces built less as art and more as attractive backdrops, where the real product is the shareable photo and the artistic content underneath is thin or absent, so the worry is not that something is pretty but that prettiness plus a good photo op is being sold as if it were profound art. A second criticism is depth versus spectacle: some immersive experiences overwhelm your senses without giving you much to think about or return to, the awe wearing off quickly and leaving nothing behind, the way a fireworks show is dazzling but not deep, whereas great art rewards return and reflection (you can look at a real painting for years and keep finding more, while a flashy light room may give one big "wow" and then little once novelty fades), so spectacle is not the same as substance and sensory overload can disguise a lack underneath. A third criticism is money and authenticity: many heavily marketed "immersive experiences" are commercial productions often not made by the original artist at all (halls projecting a famous dead painter's work across the walls), which critics argue can be more like theme-park rides than art, expensive and crowd-pleasing, trading on a great artist's name without their involvement or vision, raising the authenticity-and-commerce question of whether an experience built by a company to monetize a famous name and generate shareable photos is art, entertainment, or advertising wearing art's clothes. The critics are not saying all immersive work is empty; they are saying look hard at which is genuine art and which is spectacle sold as art.`,
              audioPrompt: `Now the other side, just as seriously, {name}, because the critics are not just grumpy traditionalists, they have real arguments. The sharpest criticism is about the rise of immersive experiences that seem designed mainly to be photographed and posted, rather than to mean anything. Critics call this Instagram art or the experience economy: spaces built less as art and more as attractive backdrops, where the real product is the photo you take and share, and the artistic content underneath is thin or absent. The worry is not that something is pretty, it is that prettiness plus a good photo op is being sold as if it were profound art. A second criticism is about depth versus spectacle. Critics argue that some immersive experiences overwhelm your senses without giving you much to actually think about or return to, that the awe wears off quickly, the way a fireworks show is dazzling but not exactly deep. Great art, on this view, rewards return and reflection: you can look at a real painting for years and keep finding more, while a flashy light room may give you one big wow and then have little left. A third criticism is about money and authenticity. Many of the most heavily marketed immersive experiences are commercial productions, often not made by the original artist at all, like halls that project a famous dead painter's work across the walls. Critics argue these can be more like theme-park rides than art, trading on a great artist's name without their involvement. The critics are not saying all immersive work is empty; they are saying you should look hard at which is genuine art and which is spectacle sold as art.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Better Question Than "Is It Art?"`,
          paragraphs: [
            `Here is a move that will serve you for the rest of your life: when a debate gets stuck on "is this real art or not?", it is often the wrong question, and a better one is hiding underneath. Arguing endlessly about whether immersive experiences "count as art" tends to go in circles, because people mean different things by "art." A sharper, more useful question is: what is THIS particular piece actually doing, and is it doing it well? That moves you from a vague label-fight to a real evaluation you can actually make, piece by piece, instead of all at once.`,
            `With that sharper question, the whole debate becomes more honest, because you stop having to defend or attack "immersive art" as one big thing and start judging individual works. Some immersive pieces are genuinely profound: they create real experiences of awe or insight, reward your attention, and come from a real artistic vision, like the best of Turrell or Kusama. Some are basically empty: pretty backdrops with nothing underneath, built to sell photo tickets, and trading on a famous name. And many are somewhere in between, genuinely beautiful and genuinely shallow at the same time. Lumping them all together as either "all profound art" or "all Instagram junk" is exactly the lazy thinking to avoid. The honest position is that immersive art is a real form that contains both masterpieces and empty spectacle, and the skill is telling them apart.`,
            `So how do you actually tell them apart, in front of a specific piece? Ask real questions. Does it create an experience you could not get from a photo, or is the photo basically the whole point? Does it reward your attention and reflection, or does the awe evaporate the second you leave? Does it come from a genuine artistic vision, or was it manufactured by a company to monetize a name and generate shareable images? Is it asking you to feel and think, or just to feel and post? None of these is a perfect test, and reasonable people will still disagree about specific pieces, which is fine. But these questions move you from "is immersive art real art?" (a circular fight) to "is THIS piece good, and why?" (a real judgment), which is both more honest and more useful, and it is a tool you can carry into any "is it really art?" argument you ever have.`,
          ],
          image: `/voyager-assets/creative-arts/l15-s4-betterquestion.webp`,
          imageCaption: `A move for life: when a debate gets stuck on "is this real art or not?", that is often the wrong question, and a better one hides underneath. Arguing whether immersive experiences "count as art" goes in circles because people mean different things by "art." A sharper question: what is THIS particular piece actually doing, and is it doing it well? That moves you from a label-fight to a real, piece-by-piece evaluation. Then the debate gets honest: some immersive pieces are genuinely profound (real awe and vision, like the best of Turrell or Kusama), some basically empty (pretty backdrops built to sell photo tickets), many in between (beautiful AND shallow at once). Lumping them all as "all profound" or "all Instagram junk" is the lazy thinking to avoid. Telling them apart, ask: an experience you couldn't get from a photo, or is the photo the point? Rewards reflection, or awe evaporates on exit? Genuine vision, or manufactured to monetize a name? Feel and think, or just feel and post? A tool for any "is it really art?" argument.`,
          vocab: [
            {
              word: `the better question than "is it art?"`,
              definition: `A move that serves you for life: when a debate gets stuck on "is this real art or not?", it is often the wrong question, and a better one is hiding underneath. Arguing endlessly about whether immersive experiences "count as art" tends to go in circles because people mean different things by "art," so a sharper, more useful question is: what is THIS particular piece actually doing, and is it doing it well? That moves you from a vague label-fight to a real evaluation you can make piece by piece instead of all at once. With that sharper question the debate becomes more honest: you stop defending or attacking "immersive art" as one big thing and start judging individual works, recognizing that some immersive pieces are genuinely profound (creating real experiences of awe or insight, rewarding attention, coming from real artistic vision, like the best of Turrell or Kusama), some are basically empty (pretty backdrops with nothing underneath, built to sell photo tickets and trade on a famous name), and many are somewhere in between, genuinely beautiful and genuinely shallow at once. Lumping them all together as either "all profound art" or "all Instagram junk" is the lazy thinking to avoid; the honest position is that immersive art is a real form containing both masterpieces and empty spectacle, and the skill is telling them apart. To do that in front of a specific piece, ask real questions: does it create an experience you could not get from a photo, or is the photo basically the whole point; does it reward attention and reflection, or does the awe evaporate the second you leave; does it come from a genuine artistic vision, or was it manufactured by a company to monetize a name and generate shareable images; is it asking you to feel and think, or just to feel and post? None is a perfect test and reasonable people still disagree about specific pieces, but these questions move you from "is immersive art real art?" (a circular fight) to "is THIS piece good, and why?" (a real judgment), a tool you can carry into any "is it really art?" argument.`,
              audioPrompt: `Here is a move that will serve you for the rest of your life, {name}: when a debate gets stuck on "is this real art or not?", it is often the wrong question, and a better one is hiding underneath. Arguing endlessly about whether immersive experiences count as art tends to go in circles, because people mean different things by art. A sharper, more useful question is: what is this particular piece actually doing, and is it doing it well? That moves you from a vague label-fight to a real evaluation you can actually make, piece by piece, instead of all at once. With that sharper question, the whole debate becomes more honest. Some immersive pieces are genuinely profound: they create real experiences of awe or insight, reward your attention, and come from a real artistic vision, like the best of Turrell or Kusama. Some are basically empty: pretty backdrops with nothing underneath, built to sell photo tickets. And many are somewhere in between, genuinely beautiful and genuinely shallow at the same time. So how do you tell them apart in front of a specific piece? Ask real questions. Does it create an experience you could not get from a photo, or is the photo basically the whole point? Does it reward your attention, or does the awe evaporate the second you leave? Does it come from a genuine artistic vision, or was it manufactured by a company to monetize a name? Is it asking you to feel and think, or just to feel and post? These questions move you from "is immersive art real art?" to "is this piece good, and why?", which is both more honest and more useful.`,
            },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together before you weigh the voices. You learned what installation and immersive art are, art you step inside and experience from within, rather than view from a distance, turning you from a viewer into a participant. You heard the serious case for it: real embodied experiences a flat image cannot give, an openness that welcomes people traditional galleries intimidate, and a genuine artistic history going back decades. You heard the serious case against much of it: experiences built mainly for photos, spectacle that overwhelms without depth, and commercial productions trading on famous names. And you learned the move that beats the circular fight: stop asking "is it art?" and start asking "what is THIS piece doing, and is it doing it well?"`,
            `Now the Perspectives screen will put several voices before you, each holding a serious view: that immersive art is a profound, important form, that much of it is shallow spectacle sold as art, that it valuably democratizes art for everyone, that the photo-driven version corrupts it, and that the right move is to judge each piece on its own rather than the whole category. Your task, as always, is not to crown a winner but to enter each voice honestly, find the true thing it points at, and feel where it strains, then build a position you can defend.`,
            `One last thing to carry, because it is bigger than immersive art. You are going to spend your life surrounded by experiences engineered to be captured and shared, and "is this real, or is it built for the photo?" is one of the most useful questions you can carry into all of it, not just art, but places, events, even how people present their lives online. Learning to enjoy genuine experiences fully, to spot when something is hollow spectacle dressed up as meaning, and to tell the difference without becoming either a cynic who sneers at all beauty or a sucker who falls for every pretty backdrop, is a life skill far beyond the museum. Immersive art is just an unusually clear place to practice it. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l15-s5-before.webp`,
          imageCaption: `Threads together. What installation/immersive art is: art you step inside and experience from within, turning viewer into participant. The serious case FOR: real embodied experiences a flat image cannot give, openness that welcomes people galleries intimidate, a genuine decades-long artistic history. The serious case AGAINST much of it: experiences built mainly for photos ("Instagram art"), spectacle without depth, commercial productions trading on famous names. The move that beats the circular fight: stop asking "is it art?", ask "what is THIS piece doing, and is it doing it well?" The Perspectives screen ahead offers several serious views to weigh and build your own from. Last thought, bigger than art: you will live surrounded by experiences engineered to be captured and shared, and "is this real, or built for the photo?" is a life skill, enjoy the genuine, spot the hollow, without becoming a cynic or a sucker.`,
          vocab: [
            {
              word: `is this real, or built for the photo?`,
              definition: `The synthesis before the Perspectives screen. You learned what installation and immersive art are: art you step inside and experience from within rather than view from a distance, turning you from a viewer into a participant, so the space, your movement, and time become part of the work. You heard the serious case for it: real embodied experiences a flat image cannot give (awe, wonder, dissolving boundaries), an openness that welcomes people traditional galleries intimidate, and a genuine artistic history going back decades (Turrell, Kusama, and others working seriously long before social media). You heard the serious case against much of it: experiences built mainly to be photographed and posted ("Instagram art"), spectacle that overwhelms the senses without depth or anything to return to, and commercial productions that trade on famous names without the artist's involvement. And you learned the move that beats the circular fight: stop asking "is it art?" (where people just mean different things) and start asking "what is THIS particular piece doing, and is it doing it well?", judging works one at a time, since the form contains both masterpieces and empty spectacle. The Perspectives screen will put several serious voices before you to weigh and build your own position from. The last thing to carry is bigger than immersive art: you will spend your life surrounded by experiences engineered to be captured and shared, and "is this real, or is it built for the photo?" is one of the most useful questions you can carry into all of it, not just art but places, events, and how people present their lives online, so learning to enjoy genuine experiences fully, spot hollow spectacle dressed as meaning, and tell the difference without becoming either a cynic who sneers at all beauty or a sucker who falls for every pretty backdrop is a life skill, and immersive art is just an unusually clear place to practice it.`,
              audioPrompt: `Pull it together before you weigh the voices, {name}. You learned what installation and immersive art are, art you step inside and experience from within, rather than view from a distance, turning you from a viewer into a participant. You heard the serious case for it: real embodied experiences a flat image cannot give, an openness that welcomes people traditional galleries intimidate, and a genuine artistic history going back decades. You heard the serious case against much of it: experiences built mainly for photos, spectacle that overwhelms without depth, and commercial productions trading on famous names. And you learned the move that beats the circular fight: stop asking "is it art?" and start asking "what is this piece doing, and is it doing it well?" Now the Perspectives screen will put several voices before you, each holding a serious view. Your task is not to crown a winner but to enter each voice honestly, find the true thing it points at, and feel where it strains, then build a position you can defend. One last thing to carry, because it is bigger than immersive art. You are going to spend your life surrounded by experiences engineered to be captured and shared, and "is this real, or is it built for the photo?" is one of the most useful questions you can carry into all of it, not just art, but places, events, even how people present their lives online. Learning to enjoy genuine experiences fully, to spot when something is hollow spectacle dressed up as meaning, and to tell the difference without becoming either a cynic or a sucker, is a life skill far beyond the museum.`,
            },
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l15-perspectives`,
          type: `perspectives`,
          headline: `Profound Art, Or Just Spectacle?`,
          intro: `{name}, five voices on immersive and installation art. Open each one. Find the true thing it points at, and feel where it strains. You are not crowning a winner; you are building a position you can actually defend, on a question serious people genuinely disagree about.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The Champion of Immersive Art`,
              era: `the believer`,
              stance: `Immersive and installation art is a profound, serious form that does things traditional art never could.`,
              quote: `"Standing inside infinite light, you feel something no painting on a wall can give you. That is not a trick. That is art using your whole body."`,
              argument: `Art that surrounds you creates real embodied experiences, awe, wonder, the dissolving of boundaries, that a flat image cannot. It turns you from a distant viewer into a participant, and it continues a serious artistic tradition decades old.`,
              evidence: `James Turrell has worked seriously with light and space for half a century; Yayoi Kusama's infinity rooms come from decades of genuine vision about infinity and the self. People weep, gasp, and feel genuine awe in these spaces.`,
              strengths_and_limits: `Strength: it honors a real, powerful artistic effect and a genuine tradition, refusing to dismiss embodied experience as lesser than a framed picture. Limit: it can overgeneralize, treating all immersive work as profound when much of it is in fact shallow spectacle, so the champion risks defending the empty photo-trap along with the masterpiece.`,
            },
            {
              id: `p2`,
              voice: `The Skeptic of Spectacle`,
              era: `the critic`,
              stance: `Much of today's "immersive art" is hollow spectacle, pretty backdrops built to be photographed, sold as if it were profound.`,
              quote: `"If the whole point is the photo you post on the way out, you didn't see art. You bought a ticket to a really nice background."`,
              argument: `A lot of immersive experiences overwhelm the senses without giving you anything to think about or return to; the awe evaporates the moment you leave, like fireworks. Spectacle is not substance, and a sensory rush can hide that nothing is underneath.`,
              evidence: `Many heavily marketed "experiences" are designed around photo opportunities, sell tickets and merchandise, and offer one big "wow" with little to reward reflection, unlike a real painting you can return to for years.`,
              strengths_and_limits: `Strength: it names a real and growing phenomenon, art-shaped products built mainly for sharing, and rightly insists that prettiness is not the same as depth. Limit: pushed too far it becomes blanket cynicism that dismisses genuinely profound immersive work along with the empty kind, and it can sound like snobbery toward experiences ordinary people honestly love.`,
            },
            {
              id: `p3`,
              voice: `The Democratizer`,
              era: `the welcomer`,
              stance: `Immersive art's great virtue is that it opens art to everyone, including people traditional galleries push away.`,
              quote: `"My family never set foot in an art museum. They felt unwelcome. But they walked into a hall of light and felt something real. That matters."`,
              argument: `Traditional galleries can feel cold, exclusive, and like they require special knowledge to "get." Immersive art needs no art degree; it simply surrounds you and invites you to feel, reaching huge numbers of people that conventional art misses entirely.`,
              evidence: `Immersive exhibitions draw enormous, diverse crowds, including many people who never visit traditional museums, and many of them report feeling genuine wonder and connection, not just taking photos.`,
              strengths_and_limits: `Strength: it takes seriously who art is for, and refuses to treat accessibility and popularity as proof of shallowness, a real corrective to art-world snobbery. Limit: being welcoming and popular does not by itself make something good or deep; democratizing access is genuinely valuable, but it does not settle whether a particular piece has real artistic substance or is just an easy crowd-pleaser.`,
            },
            {
              id: `p4`,
              voice: `The Authenticity Watcher`,
              era: `the follow-the-money one`,
              stance: `The key question is who made it and why, much "immersive art" is a company monetizing a famous name, not an artist's vision.`,
              quote: `"That dead painter never built this light show. A company did, to sell tickets using his name. Call it what it is: a branded attraction."`,
              argument: `Many big immersive experiences are commercial productions, often projecting a famous artist's work without that artist's involvement or vision, closer to a theme-park ride than to art. The driving force is ticket and merchandise sales, with the famous name as bait.`,
              evidence: `Numerous touring "immersive [famous painter]" shows are made by production companies, not the artists (who are often long dead), and are explicitly built as profitable, crowd-pleasing attractions trading on a recognizable name.`,
              strengths_and_limits: `Strength: it follows the money and the authorship, exactly the authenticity-and-commerce thinking from earlier lessons, and rightly separates a genuine artist's vision from a company's branded product. Limit: commercial origin does not automatically make something worthless (plenty of real art is also sold and marketed), so "a company made it to sell tickets" is a serious warning flag but not, by itself, proof there is no artistic value.`,
            },
            {
              id: `p5`,
              voice: `The "Judge Each Piece" Thinker`,
              era: `the synthesizer`,
              stance: `"Is immersive art real art?" is the wrong question; the right one is "what is THIS piece doing, and is it doing it well?"`,
              quote: `"Stop arguing about the category. Some of it is brilliant, some is empty, most is in between. Judge the piece in front of you, not the label."`,
              argument: `The whole "is it art?" fight goes in circles because people mean different things by "art." It is more honest to drop the category war and evaluate individual works: some immersive pieces are profound, some are hollow, many are both beautiful and shallow at once.`,
              evidence: `The same form produces both a decades-deep Turrell light work and a manufactured photo-trap built to sell tickets; treating those as the same thing, in either direction, obviously misdescribes reality.`,
              strengths_and_limits: `Strength: it dissolves a stuck, circular debate into a real, doable evaluation, and matches reality, which genuinely contains both masterpieces and spectacle. Limit: judging each piece requires actual criteria and effort, and "it depends on the piece" can become a way to dodge ever taking a position, so at some point you still have to decide whether the specific thing in front of you is good, and say why.`,
            },
          ],
          synthesisPrompt: `After hearing all five voices: where do you land on immersive art, and, more importantly, what is your actual method for judging a specific immersive piece as profound, empty, or in between? Which voice did you most want to agree with, and which one corrected it? In 5-6 sentences, build your own position.`,
          reflectionPrompt: `Think of an immersive experience or "Instagram-famous" spot you have seen or visited (in person or online). Run the lesson's questions on it: was it an experience you couldn't get from a photo, or was the photo the point? Did the feeling last, or evaporate? Where does it land for you, and why?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
              {
                id: `q1`,
                type: `multiple-choice`,
                question: `What makes installation art fundamentally different from a traditional painting or sculpture?`,
                options: [
                  `It is always much larger and more expensive than a normal painting or sculpture.`,
                  `You enter and experience it from the inside as a participant, not viewing an object from outside.`,
                  `It uses brighter colors and modern materials that older art forms never had access to.`,
                  `It is always made by large teams of people rather than by a single artist working alone in a studio somewhere.`,
                ],
                correctIndex: 1,
                explanation: `An installation is artwork made for a specific space that you enter and experience from the inside, rather than view from a distance. Instead of one painting on a wall, an artist might fill a whole room with objects, light, sound, materials, even smell, making the environment the artwork with you inside it. The fundamental shift is that you are no longer a viewer looking at art but a participant moving within it, so your body, movement, and time become part of the work. The distractors mistake size, materials, or team size for the real difference, which is the shift from observing an object to inhabiting an experience.`,
              },
              {
                id: `q2`,
                type: `multiple-choice`,
                question: `What is the strongest case FOR immersive and installation art?`,
                options: [
                  `It is more popular on social media, which proves it must be better art.`,
                  `It is newer than painting, and newer art forms are generally more advanced.`,
                  `It creates embodied experiences, welcomes people galleries intimidate, and has a serious decades-long history.`,
                  `It is simply much easier and cheaper to make than traditional art, so a great many more artists can take part in it.`,
                ],
                correctIndex: 2,
                explanation: `Three serious reasons. It can create powerful embodied experiences a flat picture cannot (standing inside infinite mirrored light produces real awe, not a trick). It democratizes art, welcoming people who find traditional galleries cold, since a hall of light needs no art degree to feel something. And it has a serious history, not shallow novelty, with James Turrell working with light and space for half a century and Yayoi Kusama's infinity rooms growing from decades of vision. The distractors confuse popularity, newness, or ease with artistic merit.`,
              },
              {
                id: `q3`,
                type: `multiple-choice`,
                question: `What are the serious criticisms of much immersive art?`,
                options: [
                  `That it is too difficult for ordinary people without an art degree to understand.`,
                  `That it is too old-fashioned and refuses to use new technology or social media.`,
                  `That it is somehow never popular with anyone, so almost nobody ever actually bothers to go and see any of it at all.`,
                  `Much is built mainly to be photographed, overwhelms without substance, and is commercial spectacle sold as art.`,
                ],
                correctIndex: 3,
                explanation: `Three real arguments. The "Instagram art" critique: many experiences are designed mainly to be photographed and posted, attractive backdrops where the shareable photo is the real product and the content underneath is thin. Depth versus spectacle: some overwhelm the senses without giving you anything to think about, the awe evaporating like fireworks. And money and authenticity: many heavily marketed "immersive experiences" are commercial productions projecting a famous (often dead) artist's work without involvement, closer to theme-park rides. The distractors invert the criticisms into complaints about difficulty, being old-fashioned, or unpopularity.`,
              },
              {
                id: `q4`,
                type: `multiple-choice`,
                question: `Why is "what is THIS piece doing, and is it doing it well?" a better question than "is immersive art real art?"`,
                options: [
                  `Because "is it real art?" circles over definitions, while the sharper question evaluates one piece at a time.`,
                  `Because immersive art is never real art, so the first question is always answered with a simple no.`,
                  `Because only professional critics are allowed to decide whether something counts as real art.`,
                  `Because the whole question of what does and does not count as real art was settled long ago and no longer matters to anyone.`,
                ],
                correctIndex: 0,
                explanation: `"Is it real art?" goes in circles because people mean different things by "art," so it becomes a clash of definitions that never resolves. The sharper question moves you to a real evaluation you can make one piece at a time, which matches reality: immersive art contains genuine masterpieces, empty spectacle, and work that is both beautiful and shallow at once. Lumping it all together is lazy; judging individual works is honest. The distractors pre-decide the verdict, hand it to critics, or dismiss the question as settled.`,
              },
              {
                id: `q5`,
                type: `multiple-choice`,
                question: `What specific questions help you tell a profound immersive piece from a hollow one?`,
                options: [
                  `Is it expensive, is it famous, and did a well-known artist's name get attached to it?`,
                  `Is it on social media, is it crowded, and did your friends say that they liked it?`,
                  `Could you get it from a photo, does it reward reflection, is it real vision or a name being monetized?`,
                  `Is the work new, is it physically big, and does it happen to use the very latest projection and lighting technology?`,
                ],
                correctIndex: 2,
                explanation: `Several honest questions, none a perfect test but useful together. Does the piece create an experience you could not get from a photo, or is the photo the whole point? Does it reward attention and reflection, or does the awe evaporate the second you leave? Does it come from a genuine artistic vision, or was it manufactured to monetize a famous name? Is it asking you to feel and think, or just to feel and post? These move you from the circular "is it real art?" to the answerable "is THIS piece good, and why?" The distractors substitute price, fame, popularity, or technology for substance.`,
              },
              {
                id: `q6`,
                type: `multiple-choice`,
                question: `Why does the lesson say the immersive-art debate is "bigger than immersive art"?`,
                options: [
                  `Because immersive art will soon completely replace every other kind of art everywhere.`,
                  `Because "is this real, or built for the photo?" applies to almost anything made to be captured and shared.`,
                  `Because the debate has been going on longer than any other argument in the history of art.`,
                  `Because far more money is now spent on immersive art every year than on all of the other art forms in the world combined.`,
                ],
                correctIndex: 1,
                explanation: `The core question, "is this real, or built for the photo?", applies to almost everything in a world full of experiences engineered to be captured and shared, not just art. The same skill helps you evaluate places marketed as must-see backdrops, events designed mainly to be posted, and even how people present their lives online. Learning to enjoy genuine experiences, notice hollow spectacle dressed as meaning, and avoid both failure modes (the cynic who sneers at all beauty, the sucker who falls for every pretty backdrop) is a broad life skill. The distractors inflate the claim into replacement, longevity, or money rather than transferable skill.`,
              },
              {
                id: `q7`,
                type: `multiple-choice`,
                question: `What is the strongest version of the "democratizer" view, and what is its limit?`,
                options: [
                  `Strength: it reliably makes the most money of all. Limit: making money does not always actually mean lasting artistic quality.`,
                  `Strength: it is the newest form. Limit: newness wears off as still newer forms arrive.`,
                  `Strength: it uses the best technology. Limit: technology breaks and quickly becomes outdated.`,
                  `Strength: it opens art to people galleries push away. Limit: being welcoming and popular doesn't make a work deep or good.`,
                ],
                correctIndex: 3,
                explanation: `The strongest version: immersive art's virtue is opening art to people whom traditional galleries push away, since those galleries feel cold and exclusive, while a hall of light needs no art degree and invites everyone to feel something, reaching crowds who report genuine wonder. Its real strength is taking seriously who art is for, refusing to treat popularity as automatic proof of shallowness. Its limit: being welcoming and popular does not by itself make a work good or deep, so the view can slide into treating "lots of people loved it" as if it settled "it is profound art," when those are separate questions. The distractors swap in money, newness, or technology for the actual access-versus-depth point.`,
              },
              {
                id: `q8`,
                type: `multiple-choice`,
                question: `Why is "a company made it to sell tickets" a serious warning flag but not, by itself, proof a work has no value?`,
                options: [
                  `Because commercial origin is a real red flag, but plenty of genuine art is also sold and ticketed.`,
                  `Because companies are never involved in making any kind of genuine or serious art at all.`,
                  `Because selling tickets automatically guarantees that the work inside must be high quality.`,
                  `Because the presence of money has absolutely nothing whatsoever to do with whether something truly counts as real art.`,
                ],
                correctIndex: 0,
                explanation: `Commercial origin and authorship genuinely matter, so a touring "immersive [famous painter]" show built by a production company, projecting a long-dead artist's work without involvement to sell tickets and merchandise, is rightly flagged as closer to a branded attraction than to that artist's vision. But commercial origin does not automatically make something worthless, because plenty of genuine art is also sold and ticketed, so "made to make money" describes much of the art world. The honest move is to treat commercial-and-inauthentic origin as a strong reason to look harder, not an automatic verdict. The distractors over-correct into "companies never make art," "tickets prove quality," or "money is irrelevant."`,
              },
              {
                id: `q9`,
                type: `true-false`,
                question: `True or false: Because some immersive "experiences" are shallow photo-traps built to sell tickets, all immersive and installation art is basically empty spectacle and not real art.`,
                correctAnswer: false,
                explanation: `False, and this is the core thinking move of the lesson. The existence of shallow, commercial photo-traps does not prove that all immersive art is empty, any more than the existence of bad paintings proves painting is not real art. Immersive and installation art is a genuine form with a serious decades-long history: James Turrell has worked with light and space for half a century, and Yayoi Kusama's infinity rooms grew from decades of real vision, producing embodied experiences of awe a flat picture cannot. At the same time, much heavily marketed "immersive experience" really is spectacle built mainly to be photographed and sold. The honest position holds both: the form contains genuine masterpieces, empty spectacle, and plenty that is beautiful and shallow at once, so you judge individual works rather than condemning or praising the whole category. Sliding into "it's all junk" is the cynic's error, just as "it's all profound" is the sucker's, and the lesson's whole point is to refuse both and evaluate the specific piece in front of you.`,
              },
              {
                id: `q10`,
                type: `inference`,
                question: `You're 14, and your friends are excited about a new ticketed light-and-projection "immersive experience" built around a famous dead painter's work. One friend says "it's basically just an expensive photo booth, not real art." Another says "you're a snob, it's beautiful and everyone loves it, so it's great art." They want you to settle it. Using this whole lesson, what do you actually say?`,
                options: [
                  `Side with the first friend: any ticketed immersive show is automatically just an empty photo booth.`,
                  `Reframe to "what is THIS piece doing?", grant each friend's real point, correct each with the other's truth, and offer honest questions to judge it together.`,
                  `Side with the second friend: lots of people love it and it's pretty, so that settles that it is great art.`,
                  `Refuse to go at all, since immersive experiences are too commercial to ever be worth your time.`,
                ],
                correctIndex: 1,
                explanation: `Applied evaluation, holding both halves. The key move is to reframe: arguing whether the whole thing "is real art" goes in circles, so the sharper question is "what is THIS experience actually doing, and is it doing it well?" Then give the first friend credit (photo-traps are real, and a ticketed commercial show projecting a dead painter's work without involvement is a legitimate warning flag) and the second friend credit (accessibility and genuine wonder for crowds galleries intimidate are real and valuable). Then correct each with the other's truth: "shallow traps exist" doesn't prove this one is empty, and "it's popular and pretty" doesn't make it deep. Finally offer the method instead of a verdict, judging by honest questions (could you get it from a photo? does the awe linger? real vision or a name to monetize? feel-and-think or just feel-and-post?), refusing to be either the cynic who sneers at all beauty or the sucker who calls every backdrop a masterpiece. The distractors are exactly those two failure modes, plus a fearful refusal.`,
              },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you have an opinion about "immersive experiences", that they're amazing, or that they're shallow photo-bait? What changed when you heard the serious case on both sides? Did the "judge each piece" move shift how you'd argue it?` },
            { id: `reflect-experience`, category: `An experience you've had`, prompt: `Think of the most immersive or surrounding artistic experience you've had, a light show, a concert, a space, even a powerful film. Did it give you something a photo couldn't? Did the feeling last, or fade fast? Where does it land on the profound-to-spectacle range?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson warns against being either a cynic who sneers at all beauty or a sucker who falls for every pretty backdrop. Which are you more at risk of? How would "judge each piece honestly" protect you from your particular failure mode?` },
            { id: `reflect-photo`, category: `Built for the photo?`, prompt: `"Is this real, or is it built for the photo?" applies way beyond art, to places, events, and how people present their lives online. Where have you noticed something engineered mainly to be captured and shared? How did knowing that change your experience of it?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `The move "stop asking 'is it X?' and ask 'what is this particular thing doing, and is it doing it well?'" works far beyond art. Where else do you get stuck in a circular label-fight that this reframe could cut through? Try it on one.` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Take the side you lean against. If you love immersive art, make the strongest case that much of it is hollow spectacle. If you're skeptical, make the strongest case that it's a profound, important form. Where does the side you resist have a real point?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This lesson is a lens for a world full of experiences built to be shared. Two paths.`,
          familyActivity: {
            title: `The "Real Or Built For The Photo?" Walk`,
            duration: `45 minutes`,
            description: `As a family, practice the lesson's core question out in the world, no museum required. Pick a few places or experiences you can look at together, in person or online: a heavily marketed "immersive experience," a famous local photo-spot, a restaurant or cafe designed to look great in pictures, even a viral travel destination. For each, ask the lesson's questions together: is this an experience you could genuinely only get by being there, or is the photo basically the whole point? Does it offer something that would reward your attention and linger, or is the appeal mostly the shareable image? Was it made by someone with a real vision, or manufactured mainly to attract and monetize attention? The goal is not to become cynical and decide everything pretty is fake, it is to practice telling genuine experiences from things built mainly to be captured, and to notice that you can still enjoy a beautiful spot while being clear-eyed about what it actually is. Talk about where each thing lands, and where you disagree.`,
          },
          projectOption: {
            title: `Design Your Own Installation, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Design an installation or immersive experience of your own, on paper or as a small model, and wrestle with the depth-versus-spectacle question from the maker's side. Week 1: choose a feeling or idea you genuinely want a viewer to experience (awe, calm, the feeling of being small in a big universe, the experience of a memory, anything real to you), then design a space that would create it: sketch the room, and plan the light, sound, materials, scale, and how a person would move through it. The key constraint, drawn from the lesson, is that it must do something a single photo of it could not, it should reward actually being inside it. Week 2: refine your design and write a short "artist's statement" explaining what experience you intended, what idea is underneath it (not just "it looks cool"), and how it would reward someone's attention rather than just their camera. Then honestly assess your own design with the lesson's questions: is there real substance under the spectacle, or did you accidentally design a photo-trap? The point is to feel, as a maker, how hard and how meaningful it is to build an immersive experience with genuine depth, not just surface dazzle.`,
            offerToParent: `Parent: opt your child into the design-your-own-installation project. Designing an immersive space around a real idea, and being made to articulate the substance underneath the spectacle, turns this lesson's central debate into hands-on creative judgment, they have to decide, as a maker, what separates a meaningful experience from a pretty photo-trap. The artist's statement step is where the real thinking happens.`,
          },
          identityQuestion: `If you become someone who can step into a dazzling immersive experience, feel its real beauty fully, AND clearly tell whether there's genuine substance underneath or just spectacle built to be photographed, what does that let you enjoy and see through in a world increasingly designed to be captured and shared rather than truly experienced?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can enjoy a beautiful experience and still tell if there's real substance underneath.`,
            `A person who asks "what is THIS doing?" instead of fighting about labels.`,
            `Someone who can spot when something is built for the photo, without sneering at all beauty.`,
          ],
          saveKey: `identity_responses_ca_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifteen down, three-quarters through the band. You took on a live, unsettled debate and learned to think your way through it instead of just picking a team. You learned what installation and immersive art are, art you step inside and experience from within, turning you from a viewer into a participant. You heard the serious case for it, real embodied experiences a flat image cannot give, an openness that welcomes people galleries intimidate, and a genuine artistic history going back decades, and you heard the serious case against much of it, experiences built mainly for photos, spectacle without depth, and commercial productions trading on famous names. Most importantly, you learned the move that beats the circular fight: stop asking "is it real art?" and start asking "what is THIS piece doing, and is it doing it well?", which lets you judge works one at a time and matches a reality that holds both masterpieces and empty spectacle. And you saw that this is bigger than art, that "is this real, or built for the photo?" is a life skill for a world engineered to be captured and shared, to be carried without becoming either a cynic or a sucker. Next: performance and the body, where the artist's own body becomes the artwork, and the question "is that art or a stunt?" gets real. Onward, {name}. — Muse`,
          badge: `immersive-art-literate`,
          badgeName: `Immersive Art Literate`,
          xpEarned: 75,
          competencies: [
            `Explains how installation and immersive art differ from traditional art (you enter and participate rather than view from outside; body, movement, and time become part of the work)`,
            `Articulates the serious case for immersive art: embodied experience, democratized access, and a genuine decades-long artistic history`,
            `Articulates the serious criticisms: "Instagram art" built for photos, spectacle without depth, and commercial productions trading on famous names`,
            `Uses the reframe "what is THIS piece doing, and is it doing it well?" instead of the circular "is it real art?"`,
            `Applies concrete evaluation questions (experience beyond the photo, rewards reflection, genuine vision, feel-and-think vs. feel-and-post) to individual works`,
            `Avoids both overcorrections: neither "all immersive art is profound" nor "all of it is empty spectacle"`,
            `Transfers the skill beyond art: judging whether any experience is genuine or "built for the photo," without becoming a cynic or a sucker`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Performance and the Body`,
            hook: `When the artist's own body becomes the artwork, and the real question: is that profound art, or just a stunt? Case Study.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L15 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz} r=${reflect}`
  );
}
