// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L01 — Conceptual Art: When Ideas Are the Art
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Conceptual Art, Aesthetic Theory, Latin American conceptualism
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: ARGUMENT BUILDER (what makes something art?)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ca-l01-v1";

const CREATIVE_ARTS_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-01`,
      title: `Conceptual Art: When Ideas Are the Art`,
      duration: 35,
      xpReward: 75,
      badge: `conceptual-art-literate`,
      badgeName: `Conceptual Art Literate`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, here is the question that starts this band: what is art? Not in a homework-question way. In the actually-contested way that the 20th century blew open and we still haven't closed. In 1917 Marcel Duchamp submitted a urinal turned on its side, signed "R. Mutt," titled "Fountain," to a New York art exhibition. The work was rejected. It became one of the most influential artworks of the century. In 1969 Joseph Kosuth wrote "Art After Philosophy" arguing that art's job is no longer to make objects but to investigate what art is. In 1967 Sol LeWitt published "Paragraphs on Conceptual Art" declaring "the idea becomes a machine that makes the art." Yoko Ono in 1964 published "Grapefruit," a book of instructions like "Light a match and watch till it goes out" as artworks. Lygia Clark in Brazil from the 1960s created participatory objects that only became art when viewers engaged them. Felipe Ehrenberg, Cildo Meireles, Adrian Piper, Lawrence Weiner, Tehching Hsieh; a generation of artists across continents made the same move: the idea is the art; the object, if there is one, is the residue. Today you engage that move seriously. Three positions on what makes something art: traditional (skill and material execution); conceptual (the idea is the art); institutional (art is what the art world accepts as art). You pick one as your working position knowing the question stays open. The band's question.`,
          headline: `Conceptual Art: When Ideas Are the Art`,
          subtitle: `Three positions on what makes something art. Argument Builder.`,
          visual: `/voyager-assets/creative-arts/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Move That Opened The Question`,
          paragraphs: [
            `Marcel Duchamp's "Fountain" (1917) is the standard origin story even though it wasn't the first conceptual move. Duchamp purchased a urinal from J. L. Mott Iron Works in New York, turned it on its side, signed it "R. Mutt 1917," and submitted it to the Society of Independent Artists exhibition that he himself had helped found. The Society's rule was that any artist could submit any work for a fee; no jury would reject it. They rejected Duchamp's submission. The work was lost (the original was probably discarded); only photographs by Alfred Stieglitz remain. Duchamp then made the rejection itself part of the work by writing about it pseudonymously.`,
            `What "Fountain" did. It separated three things that the standard art tradition had bundled together: making (the artist's hand and skill); choosing (the artist's selection of what becomes art); and presenting (placing the chosen object in an art context). Duchamp's argument was that the choosing was the art-making, i.e. selecting an ordinary mass-produced object and declaring it art was itself the creative act. The object's manufacturer hadn't made art; Duchamp's selection did. This is the readymade concept. Duchamp made several others (bottle rack 1914, snow shovel 1915, comb 1916) but "Fountain" became the symbol.`,
            `The move's predecessors. Cubism (Pablo Picasso and Georges Braque from ~1907) had already fragmented the object; Dada (Zurich Cabaret Voltaire from 1916 with Hugo Ball, Tristan Tzara, others) had embraced anti-art positions; Russian Suprematism (Kazimir Malevich's "Black Square" 1915) had moved toward pure abstraction with metaphysical claims. Duchamp's readymade was one move among others; its specific contribution was making the conceptual nature of the move explicit and unavoidable.`,
            `The move's consequences. After "Fountain," art-making was forever a question rather than a settled practice. Anyone proposing to make art now had to engage what they thought art was, even if their answer was traditional. The question "is this art?" became something artists actively worked on rather than something the tradition answered for them. Half a century after "Fountain," in the 1960s-70s, a generation of artists made the conceptual move their primary working principle. The lineage runs through Conceptual Art's specific 1960s emergence (Sol LeWitt's "Paragraphs on Conceptual Art" 1967, Joseph Kosuth's "Art After Philosophy" 1969); through Fluxus (George Maciunas organizing Yoko Ono, La Monte Young, Nam June Paik, others from ~1961); through Land Art (Robert Smithson's "Spiral Jetty" 1970, Walter De Maria's "Lightning Field" 1977); through Performance Art (Marina Abramović from 1973, Chris Burden, Vito Acconci); through Institutional Critique (Hans Haacke from 1970, Daniel Buren); and through multiple subsequent waves to current practice.`,
            `Latin American conceptualism specifically. The Brazilian Neo-Concrete movement (1959-1961) with Lygia Clark, Hélio Oiticica, Lygia Pape developed conceptual approaches in dialogue with but distinct from North American/European conceptualism. Clark's "Bichos" ("Beasts") 1960 were hinged metal objects that only became art when viewers manipulated them; her later "Relational Objects" went further into participation. Oiticica's "Parangolés" (1964+) were wearable cape-like structures that activated when worn and danced in. Cildo Meireles's "Inserções em Circuitos Ideológicos" ("Insertions into Ideological Circuits") (1970s) stamped political messages on Coca-Cola bottles and currency, returning them to circulation. Mexican conceptual artist Felipe Ehrenberg (1943-2017) worked across mail art, performance, and political intervention. The Latin American conceptualists often engaged political conditions (dictatorship, censorship, inequality) that North American conceptualists could engage more abstractly.`,
          ],
          image: `/voyager-assets/creative-arts/l01-s1-the-move.webp`,
          imageCaption: `Marcel Duchamp "Fountain" 1917: urinal from J. L. Mott Iron Works signed "R. Mutt," submitted to Society of Independent Artists, rejected. Original lost; only Alfred Stieglitz photographs remain. Separated making (artist's hand) + choosing (artist's selection) + presenting (placing in art context). Choosing as creative act = readymade concept. Predecessors: Cubism (Picasso/Braque ~1907), Dada (Zurich Cabaret Voltaire 1916, Tzara/Ball), Russian Suprematism (Malevich "Black Square" 1915). 1960s conceptualism: Sol LeWitt "Paragraphs" 1967, Kosuth "Art After Philosophy" 1969. Brazilian Neo-Concrete 1959-1961 (Clark/Oiticica/Pape); Clark's "Bichos" 1960; Oiticica's "Parangolés" 1964+. Cildo Meireles "Insertions into Ideological Circuits" 1970s. Mexican conceptual: Felipe Ehrenberg.`,
          vocab: [
            {
              word: `readymade move`,
              definition: `Marcel Duchamp's "Fountain" 1917: urinal from J. L. Mott Iron Works in New York, turned on side, signed "R. Mutt 1917," submitted to Society of Independent Artists exhibition Duchamp had helped found (rule: any artist could submit any work for fee; no jury would reject). Society rejected it. Original work lost (probably discarded); only Alfred Stieglitz photographs remain. Duchamp made rejection part of work by writing about it pseudonymously. What "Fountain" did: separated three things standard art tradition bundled together: (1) making (artist's hand and skill); (2) choosing (artist's selection of what becomes art); (3) presenting (placing chosen object in art context). Duchamp's argument: choosing was art-making; selecting ordinary mass-produced object and declaring it art was itself creative act. Manufacturer hadn't made art; Duchamp's selection did. Readymade concept. Other Duchamp readymades: bottle rack 1914, snow shovel 1915, comb 1916; "Fountain" became symbol. Predecessors: Cubism (Picasso + Braque ~1907) fragmented object; Dada (Zurich Cabaret Voltaire from 1916; Hugo Ball, Tristan Tzara) embraced anti-art; Russian Suprematism (Kazimir Malevich "Black Square" 1915) pure abstraction with metaphysical claims. Consequences: after "Fountain," art-making forever a question rather than settled practice. Anyone proposing to make art had to engage what they thought art was even if answer was traditional. 1960s-70s generation made conceptual move primary: Sol LeWitt "Paragraphs on Conceptual Art" 1967; Joseph Kosuth "Art After Philosophy" 1969; Fluxus (George Maciunas + Yoko Ono + La Monte Young + Nam June Paik from ~1961); Land Art (Robert Smithson "Spiral Jetty" 1970, Walter De Maria "Lightning Field" 1977); Performance Art (Marina Abramović from 1973, Chris Burden, Vito Acconci); Institutional Critique (Hans Haacke from 1970, Daniel Buren). Latin American conceptualism: Brazilian Neo-Concrete 1959-1961 (Lygia Clark "Bichos" 1960; Hélio Oiticica "Parangolés" 1964+; Lygia Pape); Cildo Meireles "Insertions into Ideological Circuits" 1970s stamped political messages on Coca-Cola bottles and currency; Mexican Felipe Ehrenberg (1943-2017) across mail art, performance, political intervention. Latin American conceptualists often engaged political conditions (dictatorship, censorship, inequality) North American conceptualists engaged more abstractly.`,
              audioPrompt: `Marcel Duchamp's "Fountain" from 1917 is the standard origin story for conceptual art even though it wasn't the first conceptual move, {name}. Duchamp purchased a urinal from J. L. Mott Iron Works in New York, turned it on its side, signed it "R. Mutt 1917," and submitted it to the Society of Independent Artists exhibition that he himself had helped found. The Society's rule was that any artist could submit any work for a fee; no jury would reject it. They rejected Duchamp's submission. The work was lost; only photographs by Alfred Stieglitz remain. What "Fountain" did: it separated three things that the standard art tradition had bundled together: making, choosing, and presenting. Duchamp's argument was that the choosing was the art-making. Selecting an ordinary mass-produced object and declaring it art was itself the creative act. This is the readymade concept. After "Fountain," art-making was forever a question rather than a settled practice. A generation of artists in the 1960s and 70s made the conceptual move their primary working principle. Brazilian Neo-Concrete artists Lygia Clark, Hélio Oiticica, and Lygia Pape from 1959 to 1961 developed conceptual approaches distinct from North American and European conceptualism, often engaging political conditions like dictatorship and censorship that North American conceptualists engaged more abstractly.`,
            },
            {
              word: `Society of Independent Artists`,
              definition: `The Society of Independent Artists was the New York exhibition body that Duchamp himself had helped found, with a rule that any artist could submit any work for a fee and no jury would reject it. When Duchamp submitted "Fountain" (1917) under the pseudonym "R. Mutt," the Society rejected it despite its own no-rejection rule. The original work was lost, probably discarded; only photographs by Alfred Stieglitz remain. Duchamp then made the rejection itself part of the work by writing about it pseudonymously. The rejection by an exhibition founded on the principle of open submission sharpened the conceptual point: the same institution that committed to accepting all art refused to accept art that questioned what art was. The Society's rejection became inseparable from the work's meaning and its subsequent influence.`,
              audioPrompt: `The Society of Independent Artists is the New York exhibition body that Duchamp himself had helped found, {name}. The Society's rule was that any artist could submit any work for a fee, and no jury would reject it. When Duchamp submitted "Fountain" in 1917 under the pseudonym "R. Mutt," the Society rejected it despite its own no-rejection rule. The original work was lost, probably discarded; only photographs by Alfred Stieglitz remain. Duchamp then made the rejection itself part of the work by writing about it pseudonymously. The rejection by an institution founded on the principle of accepting all art sharpened the conceptual point: the same body that committed to open submission refused to accept art that questioned what art was. The Society's rejection became inseparable from the work's meaning and its subsequent enormous influence on 20th-century art history.`,
            },
            {
              word: `Alfred Stieglitz`,
              definition: `Alfred Stieglitz was the photographer whose photographs of Duchamp's "Fountain" (1917) are the only visual record of the original work, which was lost after the Society of Independent Artists rejected and probably discarded it. Stieglitz photographed "Fountain" before it disappeared, and those photographs became the primary evidence of what the work looked like. The survival of "Fountain" as an influential artwork thus depends entirely on Stieglitz's photographs rather than any physical object. The photograph's survival while the original was discarded is itself consistent with the conceptual argument Duchamp was making: the idea and the record of the idea matter more than the object. All subsequent reproductions and the work's entire art-historical life derive from Stieglitz's photographs.`,
              audioPrompt: `Alfred Stieglitz was the photographer whose photographs of Duchamp's "Fountain" from 1917 are the only visual record of the original work, {name}. The original was lost after the Society of Independent Artists rejected and probably discarded it. Stieglitz photographed "Fountain" before it disappeared, and those photographs became the primary evidence of what the work looked like. The survival of "Fountain" as an influential artwork thus depends entirely on Stieglitz's photographs rather than any physical object. The photograph's survival while the original was discarded is itself consistent with the conceptual argument Duchamp was making: the idea and the record of the idea matter more than the object. All subsequent reproductions and the work's entire art-historical life derive from Stieglitz's photographs of the rejected urinal.`,
            },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What 1960s-70s Conceptualism Actually Did`,
          paragraphs: [
            `Specific moves the 1960s-70s conceptual artists made. Each is worth knowing by name because each is a distinct kind of work.`,
            `Sol LeWitt (1928-2007) wrote instructions for wall drawings that other people executed. The artist's job was generating the instruction; the drawing's execution by others was part of the work's structure. Specific example: "Wall Drawing #260" 1975 instructions read: "On a black wall, white lines from the midpoints of four sides, and the midpoints of halves of sides, etc." LeWitt's "Paragraphs on Conceptual Art" (1967, published in Artforum) and "Sentences on Conceptual Art" (1969) articulated the position: "The idea becomes a machine that makes the art." Execution is not aesthetic; conception is. LeWitt's wall drawings continue to be installed by other people from his instructions after his death.`,
            `Joseph Kosuth (born 1945) produced "One and Three Chairs" (1965): an actual chair, a photograph of the chair, and a dictionary definition of "chair" presented together. The work asks what counts as the chair: object, image, or word. Kosuth's "Art After Philosophy" (1969) argued that art's job, after Duchamp, is investigating what art is. Art replaces philosophy as the discipline asking foundational questions; philosophy in the 20th century had become professional academic discourse, while art could still ask "what is anything?" through specific materially-embodied questions.`,
            `Yoko Ono (born 1933) published "Grapefruit" (1964), a book of instructions presented as artworks. Examples: "PAINTING FOR THE WIND. Make a hole. Leave it in the wind." "TUNAFISH SANDWICH PIECE. Imagine one thousand suns in the sky at the same time. Let them shine for one hour. Then, let them gradually melt into the sky. Make one tunafish sandwich and eat." The instruction is the artwork; performing or imagining performing is the activation. Ono's "Cut Piece" (first performed 1964 in Kyoto, then New York 1965, then Carnegie Hall 1965) had her sit on stage in her best clothes while audience members were invited to come up and cut her clothing with scissors. The work engaged vulnerability, gender, performance, audience complicity.`,
            `Lawrence Weiner (1942-2021) wrote text on walls as primary artworks. Specific example: "THE RESIDUE OF A FLARE IGNITED UPON A BOUNDARY" (1969). The text can be written on any wall in any size, language, or material. Weiner published "Declaration of Intent" 1968: "1. The artist may construct the piece. 2. The piece may be fabricated. 3. The piece need not be built. Each being equal and consistent with the intent of the artist." The text is the work; whether anyone makes the physical realization is not essential.`,
            `Tehching Hsieh (born 1950, Taiwan, lived in NYC from 1974) created One Year Performances. "One Year Performance 1980-1981" (Time Clock Piece): Hsieh punched a time clock every hour on the hour for an entire year. The performance produced 8,627 photographs (one per punch, with 133 missed punches). "One Year Performance 1981-1982" (Outdoor Piece): Hsieh lived outdoors in Manhattan for a year, never entering any building. "One Year Performance 1983-1984" (Rope Piece, with Linda Montano): Hsieh and Montano lived tied to each other with an 8-foot rope for a year without touching. The works engaged time, endurance, the body, and the question of whether such extreme commitments produce art or madness or political statement.`,
            `Adrian Piper (born 1948) used conceptual moves to investigate race and identity. "My Calling (Card) #1" (1986+) was a card she handed to white people who made racist comments in her presence, identifying herself as Black and naming what they'd said as racist; the cards were the artwork. "Funk Lessons" (1982-1984) was a performance series teaching white audiences to dance to funk music, engaging cultural appropriation, racial knowledge, and bodily participation. Piper's conceptualism explicitly engaged race in ways most 1960s-70s conceptualism didn't.`,
            `The pattern. Each artist made a specific move that couldn't be reduced to traditional art categories. The work wasn't the object (or wasn't only the object); it was the idea, the instruction, the procedure, the situation, the question. Critics and curators built the framework "Conceptual Art" partly to name the cluster; artists themselves often resisted the label or kept moving beyond it.`,
          ],
          image: `/voyager-assets/creative-arts/l01-s2-1960s-conceptualism.webp`,
          imageCaption: `1960s-70s conceptual moves: Sol LeWitt (1928-2007) instructions for wall drawings executed by others; "Wall Drawing #260" 1975; "Paragraphs on Conceptual Art" 1967 in Artforum; "the idea becomes a machine that makes the art." Joseph Kosuth (b. 1945) "One and Three Chairs" 1965: object + photograph + dictionary definition; "Art After Philosophy" 1969. Yoko Ono (b. 1933) "Grapefruit" 1964 instruction book; "Cut Piece" 1964 Kyoto / 1965 NYC. Lawrence Weiner (1942-2021) text artworks; "Declaration of Intent" 1968 (artist may construct or not). Tehching Hsieh (b. 1950) One Year Performances; "Time Clock Piece" 1980-1981 (8,627 photographs, 133 missed punches); "Outdoor Piece" 1981-1982; "Rope Piece" 1983-1984 with Linda Montano. Adrian Piper (b. 1948) "My Calling (Card) #1" 1986+ for racist incidents; "Funk Lessons" 1982-1984.`,
          vocab: [
            {
              word: `conceptual moves`,
              definition: `Sol LeWitt (1928-2007): instructions for wall drawings executed by others; "Wall Drawing #260" 1975; "Paragraphs on Conceptual Art" 1967 in Artforum; "Sentences on Conceptual Art" 1969; "the idea becomes a machine that makes the art"; wall drawings continue installed by others from instructions after his death. Joseph Kosuth (b. 1945) "One and Three Chairs" 1965: actual chair + photograph of chair + dictionary definition of "chair" presented together asking what counts as the chair; "Art After Philosophy" 1969 argued art's job after Duchamp is investigating what art is. Yoko Ono (b. 1933) "Grapefruit" 1964 book of instructions as artworks (e.g., "PAINTING FOR THE WIND. Make a hole. Leave it in the wind."); "Cut Piece" first performed 1964 Kyoto + 1965 NYC + 1965 Carnegie Hall, sitting on stage while audience cut her clothing engaging vulnerability/gender/performance/complicity. Lawrence Weiner (1942-2021) text artworks like "THE RESIDUE OF A FLARE IGNITED UPON A BOUNDARY" 1969; "Declaration of Intent" 1968: artist may construct, piece may be fabricated, piece need not be built, each equal and consistent with intent. Tehching Hsieh (b. 1950, Taiwan, NYC from 1974) One Year Performances: "Time Clock Piece" 1980-1981 (punched time clock every hour on hour for year, 8,627 photographs, 133 missed); "Outdoor Piece" 1981-1982 (lived outdoors Manhattan year, never entered building); "Rope Piece" 1983-1984 with Linda Montano (tied with 8-foot rope for year without touching). Engaged time, endurance, body, question of whether such commitments produce art/madness/political statement. Adrian Piper (b. 1948): "My Calling (Card) #1" 1986+ handed to white people making racist comments naming their racism; cards as artwork. "Funk Lessons" 1982-1984 teaching white audiences to dance funk engaging cultural appropriation/racial knowledge/bodily participation. Piper's conceptualism explicitly engaged race in ways most 1960s-70s conceptualism didn't. Pattern: each made specific move not reducible to traditional categories; work was idea/instruction/procedure/situation/question rather than (or as well as) object. Critics/curators built "Conceptual Art" framework to name cluster; artists often resisted label or kept moving beyond.`,
              audioPrompt: `Specific moves the 1960s and 70s conceptual artists made, {name}. Sol LeWitt wrote instructions for wall drawings that other people executed. His "Paragraphs on Conceptual Art" from 1967, published in Artforum, declared "the idea becomes a machine that makes the art." Joseph Kosuth produced "One and Three Chairs" in 1965: an actual chair, a photograph of the chair, and a dictionary definition of "chair" presented together. The work asks what counts as the chair: object, image, or word. Yoko Ono published "Grapefruit" in 1964, a book of instructions presented as artworks. Her "Cut Piece" first performed in Kyoto in 1964 had her sit on stage in her best clothes while audience members were invited to come up and cut her clothing with scissors. Lawrence Weiner wrote text on walls as primary artworks. Tehching Hsieh created One Year Performances: he punched a time clock every hour on the hour for an entire year, producing 8,627 photographs with 133 missed punches. He lived outdoors in Manhattan for a year, never entering any building. He and Linda Montano lived tied to each other with an 8-foot rope for a year without touching. Adrian Piper used conceptual moves to investigate race and identity, handing cards to white people who made racist comments in her presence, identifying herself as Black and naming what they had said as racist; the cards were the artwork.`,
            },
            {
              word: `One Year Performance`,
              definition: `One Year Performance is the name Tehching Hsieh gave to his series of durational works in which he sustained a single rule or condition for exactly one year. "One Year Performance 1980-1981" (Time Clock Piece): Hsieh punched a time clock every hour on the hour for an entire year, producing 8,627 photographs (one per punch, with 133 missed punches). "One Year Performance 1981-1982" (Outdoor Piece): Hsieh lived outdoors in Manhattan for a year, never entering any building. "One Year Performance 1983-1984" (Rope Piece, with Linda Montano): Hsieh and Montano lived tied to each other with an 8-foot rope for a year without touching. The works engaged time, endurance, the body, and the question of whether such extreme commitments produce art or madness or political statement. Hsieh was born in 1950 in Taiwan and lived in New York City from 1974.`,
              audioPrompt: `One Year Performance is the name Tehching Hsieh gave to his series of durational works in which he sustained a single rule or condition for exactly one year, {name}. Hsieh was born in 1950 in Taiwan and lived in New York City from 1974. "One Year Performance 1980-1981," the Time Clock Piece, had Hsieh punching a time clock every hour on the hour for an entire year, producing 8,627 photographs with 133 missed punches. "One Year Performance 1981-1982," the Outdoor Piece, had Hsieh living outdoors in Manhattan for a year and never entering any building. "One Year Performance 1983-1984," the Rope Piece made with Linda Montano, had Hsieh and Montano living tied to each other with an 8-foot rope for a year without touching. The works engaged time, endurance, the body, and the question of whether such extreme commitments produce art or madness or political statement.`,
            },
            {
              word: `instruction artwork`,
              definition: `An instruction artwork is a work where the written instruction itself is the primary art object, not any physical realization of it. Sol LeWitt wrote instructions for wall drawings that other people executed; the artist's job was generating the instruction, and the drawing's execution by others was part of the work's structure. Yoko Ono published "Grapefruit" (1964), a book of instructions presented as artworks, such as "PAINTING FOR THE WIND. Make a hole. Leave it in the wind." The instruction is the artwork; performing or imagining performing is the activation. Lawrence Weiner's "Declaration of Intent" 1968 stated: "The artist may construct the piece. The piece may be fabricated. The piece need not be built. Each being equal and consistent with the intent of the artist." Whether anyone makes a physical realization is not essential; the text is the work.`,
              audioPrompt: `An instruction artwork is a work where the written instruction itself is the primary art object, not any physical realization of it, {name}. Sol LeWitt wrote instructions for wall drawings that other people executed; his "Paragraphs on Conceptual Art" from 1967 declared "the idea becomes a machine that makes the art." Yoko Ono published "Grapefruit" in 1964, a book of instructions presented as artworks. One example reads: "PAINTING FOR THE WIND. Make a hole. Leave it in the wind." The instruction is the artwork; performing or imagining performing is the activation. Lawrence Weiner's "Declaration of Intent" from 1968 stated that the artist may construct the piece, the piece may be fabricated, or the piece need not be built at all, each being equal and consistent with the artist's intent. Whether anyone makes a physical realization is not essential; the text is the work.`,
            },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Positions On What Makes Something Art`,
          paragraphs: [
            `Three positions ahead. Each has serious defenders in philosophy and art theory. Each engages the conceptual move differently. You'll commit to one as your working position.`,
            `Position 1: Traditional. Art requires skill, technical execution, and material craft. The artist's hand and labor are essential. Without made objects produced through trained capability, what you have is concept-mongering, not art. Conceptual works are interesting philosophical exercises but they're not art; they're a different category that has confused itself with art. Defenders historically include figures from Plato through Aquinas through the Renaissance theorists (Alberti, Vasari) to Joshua Reynolds's "Discourses on Art" 1769-1790; in contemporary thought, Roger Scruton "Beauty" 2009 and various traditional aesthetic philosophers. The position has substantial popular support; most non-art-world people, asked what art is, gravitate toward something like this.`,
            `Position 2: Conceptual. The idea is the art; physical execution is secondary or unnecessary. Art's work is investigating what art is, what perception is, what aesthetic experience is; Duchamp, LeWitt, Kosuth all argued versions of this. Without conceptual investigation, what you have is craft, decoration, or skilled production, but not art in the high sense the modern tradition developed. Defenders include the artists themselves (LeWitt's "Paragraphs"; Kosuth's "Art After Philosophy"); philosophers including Arthur Danto "The Transfiguration of the Commonplace" 1981 (Danto argued post-Duchamp, art-philosophical inquiry IS art's work); contemporary art theorists across multiple positions.`,
            `Position 3: Institutional. Art is what the art world (museums, critics, collectors, curators, galleries, art schools, biennials) accepts as art. This isn't bad faith; it's recognition that the category "art" is socially constructed by specific institutions and cultures. Without art-world acceptance, conceptual moves wouldn't have stuck and traditional craft objects wouldn't have circulated as art either. Defender: George Dickie "Art and the Aesthetic: An Institutional Analysis" 1974 with later refinements; substantial sociology of art tradition including Pierre Bourdieu "Distinction" 1979 and "The Rules of Art" 1992. The position is descriptively powerful; it explains why specific works become art-historically important while equivalently interesting works don't.`,
            `What each position helps you see. Traditional position helps you notice when conceptual moves substitute for craft (when a "conceptual" work is actually just laziness or marketing rather than substantive investigation. Conceptual position helps you notice that any non-trivial art-making engages questions about what art is, even when wearing traditional clothes. Institutional position helps you notice the social and economic structures that produce "art" as category: the art schools, museums, biennials, collectors, market dynamics that substantially shape what stays in circulation as art.`,
            `What each position misses. Traditional position has trouble with the obvious fact that Duchamp's "Fountain" has been one of the most influential artworks of the 20th century even though it required no traditional craft. Conceptual position has trouble with the obvious fact that most great traditional works (Velázquez, Vermeer, Cézanne, Lygia Clark's later participatory works) had substantial conceptual investigations going on alongside their craft, undermining the conceptual/traditional opposition. Institutional position has trouble with the obvious fact that some works the art world has rejected (Vincent van Gogh during his lifetime; multiple Black, women, Indigenous, and non-Western artists across decades) were nonetheless great art that the institutions failed to recognize.`,
            `One last framing. The position you commit to today is your working position. It's not your final answer. Across decades of engaging art, your position will probably move, refine, complicate. The work of having a working position is being able to engage specific works seriously rather than encountering each new thing as if from scratch.`,
          ],
          image: `/voyager-assets/creative-arts/l01-s3-three-positions.webp`,
          imageCaption: `Three positions on what makes something art: (1) Traditional: skill, technical execution, material craft are essential; defenders: Plato through Reynolds "Discourses" 1769-1790; Scruton "Beauty" 2009. (2) Conceptual: the idea is the art; defenders: Duchamp, LeWitt, Kosuth; Danto "The Transfiguration of the Commonplace" 1981. (3) Institutional: art is what art world (museums, critics, collectors, curators, galleries, schools, biennials) accepts; defenders: George Dickie "Art and the Aesthetic" 1974; Bourdieu "Distinction" 1979 + "The Rules of Art" 1992. Each helps notice different things; each misses different things. Working position not final answer.`,
          vocab: [
            {
              word: `something art`,
              definition: `Three positions for the argument-builder. Position 1: Traditional. Art requires skill, technical execution, material craft. Artist's hand and labor essential. Without made objects produced through trained capability, you have concept-mongering, not art. Defenders historically: Plato, Aquinas, Renaissance theorists (Alberti, Vasari), Joshua Reynolds "Discourses on Art" 1769-1790; contemporary: Roger Scruton "Beauty" 2009. Substantial popular support among non-art-world people. Position 2: Conceptual. Idea is the art; physical execution secondary or unnecessary. Art's work is investigating what art is, what perception is, what aesthetic experience is. Duchamp, LeWitt, Kosuth argued versions. Without conceptual investigation you have craft/decoration/skilled production but not art in high sense modern tradition developed. Defenders: artists themselves (LeWitt's "Paragraphs"; Kosuth's "Art After Philosophy"); philosophers Arthur Danto "The Transfiguration of the Commonplace" 1981 (post-Duchamp art-philosophical inquiry IS art's work); contemporary art theorists. Position 3: Institutional. Art is what art world (museums, critics, collectors, curators, galleries, art schools, biennials) accepts as art. Not bad faith; recognition that "art" category is socially constructed. Defender: George Dickie "Art and the Aesthetic: An Institutional Analysis" 1974; sociology of art including Pierre Bourdieu "Distinction" 1979 + "The Rules of Art" 1992. Descriptively powerful; explains why specific works become art-historically important while equivalently interesting works don't. What each helps notice: traditional notices when conceptual moves substitute for craft (laziness or marketing rather than substantive investigation); conceptual notices that any non-trivial art-making engages art-definition questions; institutional notices social/economic structures producing "art" category. What each misses: traditional struggles with Duchamp's influence; conceptual undermined by great traditional works (Velázquez, Vermeer, Cézanne, Lygia Clark) doing substantial conceptual work alongside craft; institutional struggles with art-world rejected works (Van Gogh in lifetime; multiple Black/women/Indigenous/non-Western artists) being nonetheless great art. Position you commit to is working position not final answer.`,
              audioPrompt: `Three positions on what makes something art ahead, {name}. Each has serious defenders in philosophy and art theory. Position 1: Traditional. Art requires skill, technical execution, and material craft. The artist's hand and labor are essential. Without made objects produced through trained capability, what you have is concept-mongering, not art. Defenders include Plato, Aquinas, and Renaissance theorists; in contemporary thought, Roger Scruton's "Beauty" from 2009. Position 2: Conceptual. The idea is the art; physical execution is secondary or unnecessary. Art's work is investigating what art is. Duchamp, LeWitt, Kosuth all argued versions of this. Defenders include Arthur Danto in "The Transfiguration of the Commonplace" from 1981, who argued that post-Duchamp, art-philosophical inquiry IS art's work. Position 3: Institutional. Art is what the art world (museums, critics, collectors, curators, galleries, art schools, biennials) accepts as art. This isn't bad faith; it's recognition that the category "art" is socially constructed by specific institutions and cultures. Defender: George Dickie's "Art and the Aesthetic: An Institutional Analysis" from 1974. The position you commit to today is your working position. It's not your final answer.`,
            },
            {
              word: `institutional position`,
              definition: `The institutional position holds that art is what the art world (museums, critics, collectors, curators, galleries, art schools, biennials) accepts as art. This isn't bad faith; it's recognition that the category "art" is socially constructed by specific institutions and cultures. Without art-world acceptance, conceptual moves wouldn't have stuck and traditional craft objects wouldn't have circulated as art either. Defender: George Dickie "Art and the Aesthetic: An Institutional Analysis" 1974 with later refinements; substantial sociology of art tradition including Pierre Bourdieu "Distinction" 1979 and "The Rules of Art" 1992. The position is descriptively powerful; it explains why specific works become art-historically important while equivalently interesting works don't. Its difficulty: some works the art world has rejected (Vincent van Gogh during his lifetime; multiple Black, women, Indigenous, and non-Western artists across decades) were nonetheless great art that the institutions failed to recognize.`,
              audioPrompt: `The institutional position holds that art is what the art world (museums, critics, collectors, curators, galleries, art schools, biennials) accepts as art, {name}. This isn't bad faith; it's recognition that the category "art" is socially constructed by specific institutions and cultures. Without art-world acceptance, conceptual moves wouldn't have stuck and traditional craft objects wouldn't have circulated as art either. The main defender is George Dickie in "Art and the Aesthetic: An Institutional Analysis" from 1974, with later refinements; the sociology of art tradition including Pierre Bourdieu's "Distinction" from 1979 and "The Rules of Art" from 1992 also supports this view. The position is descriptively powerful; it explains why specific works become art-historically important while equivalently interesting works don't. Its difficulty is that some works the art world has rejected, including Vincent van Gogh's work during his lifetime, were nonetheless great art that the institutions failed to recognize.`,
            },
            {
              word: `working position`,
              definition: `A working position is a commitment to one of the three frameworks for what makes something art (traditional, conceptual, or institutional) that organizes your engagement with specific artworks, while acknowledging that the position is not a final answer. The position you commit to today will probably move, refine, and complicate across decades of engaging art. Many people who start with the traditional position move toward conceptual or institutional after sustained engagement; many who start with the conceptual position move back toward traditional after recognizing how much craft and material engagement matter in works they find moving; many end up with hybrid positions that integrate elements. The work of having a working position is being able to engage specific works seriously rather than encountering each new thing as if from scratch.`,
              audioPrompt: `A working position is a commitment to one of the three frameworks for what makes something art that organizes your engagement with specific artworks, while acknowledging that the position is not a final answer, {name}. The three positions are traditional (art requires skill, technical execution, material craft), conceptual (the idea is the art), and institutional (art is what the art world accepts). The position you commit to today will probably move, refine, and complicate across decades of engaging art. Many people who start with the traditional position move toward conceptual or institutional after sustained engagement. Many who start with the conceptual position move back toward traditional after recognizing how much craft and material engagement matter in works they find moving. Many end up with hybrid positions that integrate elements. The work of having a working position is being able to engage specific works seriously rather than encountering each new thing as if from scratch.`,
            },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Where Latin American Conceptualism Goes Further`,
          paragraphs: [
            `One specific reason to engage Latin American conceptualism on its own terms rather than as appendix to North American/European conceptualism. The political contexts substantially shaped what conceptual moves meant and what they accomplished.`,
            `Lygia Clark (1920-1988, Brazil) developed conceptual approaches from the late 1950s through her death that focused on the body, participation, and therapeutic application. Her "Bichos" ("Beasts," 1960+) were hinged metal sculptures that only became artworks when viewers manipulated their joints. The viewer wasn't observer of art; the viewer's hands and decisions made the work into a work. Later "Relational Objects" (1976+) went further: Clark provided participants with various objects (mesh bags filled with shells, breathable plastic bags, fabric webs) that they used in extended participatory sessions Clark facilitated. Clark moved her practice from object-making to what she called "structuring the self." She worked in Paris from 1968-1976 and then returned to Rio de Janeiro and worked therapeutically with patients using her "Relational Objects" until 1988.`,
            `Hélio Oiticica (1937-1980, Brazil) developed "Parangolés" (1964+), wearable cape-like structures that activated only when worn and danced in. Oiticica collaborated with dancers from Mangueira favela samba school; the works engaged class boundaries (the favela dancers were Black working-class; the art world was wealthy white) by making the favela bodies essential to the artwork's existence. His "Tropicália" (1967) installation at Rio's Museum of Modern Art presented a walk-through environment of sand, plants, parrots, and small structures, anticipating the Tropicália cultural movement (Caetano Veloso, Gilberto Gil, Os Mutantes) that took the name. Oiticica's work was simultaneously political (engaging Brazilian dictatorship from 1964 and structural racism) and joyful (using color, music, dance, sensuality as substantive elements).`,
            `Cildo Meireles (born 1948, Brazil) made "Inserções em Circuitos Ideológicos" ("Insertions into Ideological Circuits," 1970s): Coca-Cola bottle insertions where Meireles stamped messages including "Yankees Go Home" or instructions for making Molotov cocktails on Coca-Cola bottles and returned them to circulation; Banknote Project stamped political messages on currency. The work used existing capitalist circulation systems against themselves; the dictatorship couldn't easily intervene because the works were diffused through the economy. Meireles's "Zero Dollar" (1984) was an art piece that looked like US currency with George Washington replaced. His major installation "Missão/Missões: Como Construir Catedrais" ("Mission/Missions: How to Build Cathedrals") 1987 used 600,000 coins, 800 communion wafers, 2,000 cattle bones, and 80 stones to engage Jesuit missionary history in Brazil.`,
            `Felipe Ehrenberg (1943-2017, Mexico) worked across mail art, performance, intervention, and political activism. He cofounded Beau Geste Press in England 1971-1976 publishing artist books across continents during exile from Mexico following his 1968 critique of the government response to the Tlatelolco massacre (October 2, 1968, covered partially in L16 of the History band). His mail art network connected artists across Latin America during dictatorship periods when other communication was restricted; mail art's distributed structure made it harder to suppress.`,
            `The substantive point. North American conceptualism could engage Duchamp's question "what is art?" relatively abstractly because the political situation didn't materially threaten the artists. Latin American conceptualists engaged the same question while their friends were being imprisoned, exiled, tortured, or murdered (Brazilian dictatorship 1964-1985; Argentine military dictatorship 1976-1983; Pinochet's Chile 1973-1990; Mexican PRI single-party rule with periodic repression including Tlatelolco 1968 and dirty war 1960s-1980s; multiple others). The conceptual move had different weight. Engaging Latin American conceptualism on its own terms means recognizing that the political dimension wasn't optional add-on to the conceptual move; it substantially shaped what the conceptual move did.`,
          ],
          image: `/voyager-assets/creative-arts/l01-s4-latin-american.webp`,
          imageCaption: `Latin American conceptualism in political context. Lygia Clark (1920-1988): "Bichos" 1960+ (hinged metal viewers manipulate); "Relational Objects" 1976+ (therapeutic participatory work); Paris 1968-1976, Rio therapeutic practice until 1988. Hélio Oiticica (1937-1980): "Parangolés" 1964+ (wearable activated by dancing; collaborated with Mangueira favela samba school); "Tropicália" 1967 installation at Rio MAM anticipated cultural movement (Veloso, Gil, Os Mutantes). Cildo Meireles (b. 1948): "Insertions into Ideological Circuits" 1970s (Coca-Cola bottle + currency stamping); "Zero Dollar" 1984; "Missão/Missões" 1987. Felipe Ehrenberg (1943-2017): mail art + Beau Geste Press 1971-1976 + exile after 1968 Tlatelolco critique. Brazilian dictatorship 1964-1985; Argentine 1976-1983; Pinochet 1973-1990; Mexico PRI + Tlatelolco 1968. Political weight wasn't optional add-on.`,
          vocab: [
            {
              word: `conceptualism`,
              definition: `Specific reason to engage Latin American conceptualism on own terms not as appendix to North American/European. Political contexts substantially shaped what conceptual moves meant. Lygia Clark (1920-1988, Brazil): from late 1950s through death focused on body, participation, therapeutic application. "Bichos" ("Beasts") 1960+ hinged metal sculptures only artwork when viewers manipulated joints; viewer's hands and decisions made work into work. "Relational Objects" 1976+ went further: Clark provided participants various objects (mesh bags filled with shells, breathable plastic bags, fabric webs) used in extended participatory sessions Clark facilitated. Moved practice from object-making to what she called "structuring the self." Worked Paris 1968-1976 then returned Rio working therapeutically with patients using "Relational Objects" until 1988. Hélio Oiticica (1937-1980, Brazil): "Parangolés" 1964+ wearable cape-like structures activated only when worn and danced in; collaborated with dancers from Mangueira favela samba school engaging class boundaries (favela dancers Black working-class; art world wealthy white) by making favela bodies essential to artwork's existence. "Tropicália" 1967 installation Rio MAM presented walk-through environment of sand, plants, parrots, small structures; anticipated Tropicália cultural movement (Caetano Veloso, Gilberto Gil, Os Mutantes) that took name. Simultaneously political (engaging Brazilian dictatorship from 1964 + structural racism) and joyful (color, music, dance, sensuality substantive). Cildo Meireles (b. 1948, Brazil): "Insertions into Ideological Circuits" 1970s Coca-Cola bottle insertions with messages ("Yankees Go Home" or instructions for Molotov cocktails); Banknote Project stamped political messages on currency. Used existing capitalist circulation systems against themselves; dictatorship couldn't easily intervene because works diffused through economy. "Zero Dollar" 1984 art piece looked like US currency with George Washington replaced. "Missão/Missões: Como Construir Catedrais" 1987 used 600,000 coins, 800 communion wafers, 2,000 cattle bones, 80 stones to engage Jesuit missionary history in Brazil. Felipe Ehrenberg (1943-2017, Mexico): mail art, performance, intervention, political activism. Cofounded Beau Geste Press England 1971-1976 publishing artist books across continents during exile from Mexico following 1968 critique of government response to Tlatelolco massacre (Oct 2 1968, covered in History L16). Mail art network connected artists across Latin America during dictatorship periods. Substantive point: North American conceptualism could engage "what is art?" relatively abstractly because political situation didn't materially threaten artists. Latin American conceptualists engaged same question while friends imprisoned/exiled/tortured/murdered (Brazilian dictatorship 1964-1985; Argentine 1976-1983; Pinochet's Chile 1973-1990; Mexican PRI single-party rule + Tlatelolco 1968 + dirty war 1960s-1980s; multiple others). Conceptual move had different weight.`,
              audioPrompt: `One specific reason to engage Latin American conceptualism on its own terms, {name}. The political contexts substantially shaped what conceptual moves meant. Lygia Clark, Brazilian artist who lived from 1920 to 1988, developed conceptual approaches focused on the body, participation, and therapeutic application. Her "Bichos" or "Beasts" from 1960 onward were hinged metal sculptures that only became artworks when viewers manipulated their joints. The viewer wasn't observer of art; the viewer's hands and decisions made the work into a work. Hélio Oiticica, who lived from 1937 to 1980, developed "Parangolés" from 1964 onward, wearable cape-like structures that activated only when worn and danced in. Oiticica collaborated with dancers from Mangueira favela samba school; the works engaged class boundaries by making favela bodies essential to the artwork's existence. Cildo Meireles made "Insertions into Ideological Circuits" in the 1970s: Coca-Cola bottle insertions where Meireles stamped political messages on Coca-Cola bottles and currency and returned them to circulation. The substantive point: North American conceptualism could engage Duchamp's question "what is art?" relatively abstractly because the political situation didn't materially threaten the artists. Latin American conceptualists engaged the same question while their friends were being imprisoned, exiled, tortured, or murdered during the Brazilian dictatorship from 1964 to 1985, the Argentine military dictatorship from 1976 to 1983, Pinochet's Chile from 1973 to 1990, and Mexican PRI single-party rule. The conceptual move had different weight.`,
            },
            {
              word: `Relational Objects`,
              definition: `Relational Objects are the objects Lygia Clark provided to participants in extended participatory sessions from 1976 onward. Examples include mesh bags filled with shells, breathable plastic bags, and fabric webs. Participants used these objects in sessions that Clark facilitated. The Relational Objects extended Clark's earlier "Bichos" (hinged metal sculptures that only became artworks when viewers manipulated them) further into participation and therapeutic application. Clark moved her practice from object-making to what she called "structuring the self." She worked in Paris from 1968 to 1976, then returned to Rio de Janeiro and worked therapeutically with patients using her Relational Objects until her death in 1988. The line between art and therapy became substantially permeable in her practice.`,
              audioPrompt: `Relational Objects are the objects Lygia Clark provided to participants in extended participatory sessions from 1976 onward, {name}. Examples include mesh bags filled with shells, breathable plastic bags, and fabric webs. Participants used these objects in sessions that Clark facilitated. The Relational Objects extended Clark's earlier "Bichos," hinged metal sculptures that only became artworks when viewers manipulated their joints, further into participation and therapeutic application. Clark moved her practice from object-making to what she called "structuring the self." She worked in Paris from 1968 to 1976, then returned to Rio de Janeiro and worked therapeutically with patients using her Relational Objects until her death in 1988. The line between art and therapy became substantially permeable in her practice, making her one of the most distinctive figures in Latin American conceptualism.`,
            },
            {
              word: `Parangolés`,
              definition: `"Parangolés" are wearable cape-like structures developed by Hélio Oiticica from 1964 onward that activated only when worn and danced in. Oiticica collaborated with dancers from Mangueira favela samba school; the works engaged class boundaries (the favela dancers were Black working-class; the art world was wealthy white) by making the favela bodies essential to the artwork's existence. The "Parangolés" could not be experienced as art without the participation of dancers from a community the art world had excluded. Oiticica's work was simultaneously political, engaging the Brazilian dictatorship from 1964 and structural racism, and joyful, using color, music, dance, and sensuality as substantive elements. His "Tropicália" (1967) installation at Rio's Museum of Modern Art anticipated the Tropicália cultural movement (Caetano Veloso, Gilberto Gil, Os Mutantes) that took the name.`,
              audioPrompt: `"Parangolés" are wearable cape-like structures developed by Hélio Oiticica from 1964 onward that activated only when worn and danced in, {name}. Oiticica collaborated with dancers from Mangueira favela samba school; the works engaged class boundaries, with the favela dancers being Black working-class while the art world was wealthy white, by making the favela bodies essential to the artwork's existence. The "Parangolés" could not be experienced as art without the participation of dancers from a community the art world had excluded. Oiticica's work was simultaneously political, engaging the Brazilian dictatorship from 1964 and structural racism, and joyful, using color, music, dance, and sensuality as substantive elements. His "Tropicália" installation from 1967 at Rio's Museum of Modern Art presented a walk-through environment of sand, plants, parrots, and small structures, anticipating the Tropicália cultural movement featuring Caetano Veloso, Gilberto Gil, and Os Mutantes.`,
            },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Commit`,
          paragraphs: [
            `One framing before the argument. The conceptual move is one of the central events of 20th-century cultural history. Engaging it seriously isn't optional; it's basic literacy about how the modern art world thinks. But the conceptual move isn't the only legitimate move; the traditional position holds substantial ground; the institutional position describes substantial reality. Your task is committing to a working position that lets you engage specific works seriously, while engaging the other positions on their best terms.`,
            `Another framing. The position you commit to today will probably move across your engagement with art over decades. Many people who start with traditional position move toward conceptual or institutional after sustained engagement; many people who start with conceptual position move back toward traditional after recognizing how much craft and material engagement matter in works they find moving; many people end up with hybrid positions that integrate elements. The point isn't picking the right final position; the point is committing to a working position that organizes your continuing engagement.`,
            `One specific note. Your engagement with the conceptual question might also be your engagement with your own creative work. If you're going to make art across your lifetime (whether visual, musical, written, performative, designed, or hybrid) your position on "what counts as art" will substantially shape what you make. Traditional position pushes toward refined craft and material specificity. Conceptual position pushes toward investigation of ideas and procedures. Institutional position pushes toward strategic engagement with the art world's actual structures. Your commitment today is partly a commitment to what kind of artist you might be.`,
            `One last framing. The argument ahead has six pieces of evidence drawn from across this lesson and beyond. You build your case for one position; you respond to the strongest counterargument; you reflect on what the commitment means. The interactive structure is the same Argument Builder you'll use across the band. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l01-s5-before.webp`,
          imageCaption: `Before committing. Conceptual move is one of central events of 20th-century cultural history; engaging seriously is basic literacy. Traditional + institutional positions hold substantial ground too. Position commitment is working position not final answer. Position will probably move across decades of engagement. Your commitment is partly commitment to what kind of artist you might be. Six evidence pieces. Argument Builder.`,
          vocab: [
            {
              word: `framing before commitment`,
              definition: `Conceptual move is central 20th-century cultural event; engaging seriously is basic literacy about how modern art world thinks. But not only legitimate move; traditional holds substantial ground; institutional describes substantial reality. Task is committing to working position that lets you engage specific works seriously while engaging others on best terms. Position will probably move across decades of engagement; many traditional → conceptual or institutional; many conceptual → back toward traditional after recognizing craft and material engagement matter; many hybrid integrating elements. Point not picking right final position; committing to working position organizes continuing engagement. Position also engagement with own creative work. If making art across lifetime (visual, musical, written, performative, designed, hybrid), position on "what counts as art" shapes what you make. Traditional pushes toward refined craft and material specificity. Conceptual pushes toward investigation of ideas and procedures. Institutional pushes toward strategic engagement with art world's actual structures. Today's commitment partly commitment to what kind of artist you might be.`,
              audioPrompt: `One framing before the argument, {name}. The conceptual move is one of the central events of 20th-century cultural history. Engaging it seriously isn't optional; it's basic literacy about how the modern art world thinks. But the conceptual move isn't the only legitimate move; the traditional position holds substantial ground; the institutional position describes substantial reality. Your task is committing to a working position that lets you engage specific works seriously, while engaging the other positions on their best terms. The position you commit to today will probably move across your engagement with art over decades. Many people who start with traditional position move toward conceptual or institutional after sustained engagement. Many people who start with conceptual position move back toward traditional after recognizing how much craft and material engagement matter in works they find moving. Your engagement with the conceptual question might also be your engagement with your own creative work. If you're going to make art across your lifetime, your position on "what counts as art" will substantially shape what you make. The interactive structure is the same Argument Builder you'll use across the band.`,
            },
            {
              word: `material specificity`,
              definition: `Material specificity refers to the quality of refined craft and engagement with physical materials that the traditional position pushes artists toward. If you hold the traditional position, your creative work will be shaped toward careful attention to the physical properties of whatever medium you work in: the texture and resistance of materials, the demands of trained technique, and the qualities that only come from sustained hands-on engagement with a craft. Traditional position defenders from Plato through Roger Scruton's "Beauty" (2009) hold that without made objects produced through trained capability, what you have is concept-mongering, not art. Material specificity is what distinguishes art from merely interesting ideas or philosophical exercises, on this view.`,
              audioPrompt: `Material specificity refers to the quality of refined craft and engagement with physical materials that the traditional position pushes artists toward, {name}. If you hold the traditional position, your creative work will be shaped toward careful attention to the physical properties of whatever medium you work in: the texture and resistance of materials, the demands of trained technique, and the qualities that only come from sustained hands-on engagement with a craft. Traditional position defenders from Plato through Roger Scruton's "Beauty" from 2009 hold that without made objects produced through trained capability, what you have is concept-mongering, not art. Material specificity is what distinguishes art from merely interesting ideas or philosophical exercises on this view. The traditional position has substantial popular support; most non-art-world people, asked what art is, gravitate toward something like this.`,
            },
            {
              word: `Argument Builder`,
              definition: `The Argument Builder is the interactive structure used at the end of this lesson and across the band. In it, you commit to one of three positions on what makes something art (traditional, conceptual, or institutional); you build your case using six pieces of evidence drawn from across the lesson and beyond; you respond to the strongest counterargument to your position; and you reflect on what the commitment means. The Argument Builder is designed to develop the capacity to engage specific works seriously from a committed framework rather than encountering each new thing as if from scratch. Your commitment is a working position, not a final answer.`,
              audioPrompt: `The Argument Builder is the interactive structure used at the end of this lesson and across the band, {name}. In it, you commit to one of three positions on what makes something art: traditional (art requires skill, technical execution, and material craft), conceptual (the idea is the art), or institutional (art is what the art world accepts). You build your case using six pieces of evidence drawn from across the lesson and beyond. You respond to the strongest counterargument to your position. And you reflect on what the commitment means. The argument ahead has six pieces of evidence. You build your case for one position, you respond to the strongest counterargument, and you reflect on what the commitment means. The Argument Builder is designed to develop your capacity to engage specific works seriously from a committed framework rather than encountering each new thing as if from scratch.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ──────────────────────────────────────────────
        {
          id: `l01-argument-builder`,
          type: `argument-builder`,
          headline: `What Makes Something Art?`,
          intro: `{name}, commit to one of three positions. Build your case with evidence. Respond to the strongest counterargument.`,
          positions: [
            {
              id: `traditional`,
              label: `Traditional: art requires skill, technical execution, material craft; conceptual moves are philosophy or marketing, not art`,
              summary: `Defenders: Plato through Aquinas through Renaissance theorists (Alberti, Vasari) to Joshua Reynolds "Discourses on Art" 1769-1790; contemporary Roger Scruton "Beauty" 2009 and various traditional aesthetic philosophers. Artist's hand and labor essential. Without made objects produced through trained capability, you have concept-mongering, not art. Substantial popular support; most non-art-world people gravitate toward something like this.`,
            },
            {
              id: `conceptual`,
              label: `Conceptual: the idea is the art; physical execution is secondary or unnecessary; art's work is investigating what art is`,
              summary: `Defenders: Duchamp through 1960s-70s conceptualism (Sol LeWitt "Paragraphs on Conceptual Art" 1967; Joseph Kosuth "Art After Philosophy" 1969; Yoko Ono "Grapefruit" 1964; Lawrence Weiner "Declaration of Intent" 1968; Tehching Hsieh One Year Performances; Adrian Piper); philosopher Arthur Danto "The Transfiguration of the Commonplace" 1981 (post-Duchamp, art-philosophical inquiry IS art's work). Without conceptual investigation you have craft, decoration, or skilled production but not art in the high sense modern tradition developed.`,
            },
            {
              id: `institutional`,
              label: `Institutional: art is what the art world (museums, critics, collectors, curators, galleries, schools, biennials) accepts as art`,
              summary: `Defender: George Dickie "Art and the Aesthetic: An Institutional Analysis" 1974 with later refinements; sociology of art tradition including Pierre Bourdieu "Distinction" 1979 + "The Rules of Art" 1992. Not bad faith; recognition that "art" category is socially constructed by specific institutions and cultures. Descriptively powerful; explains why specific works become art-historically important while equivalently interesting works don't. Without art-world acceptance, conceptual moves wouldn't have stuck and traditional craft objects wouldn't have circulated as art.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Duchamp's "Fountain" 1917 has been one of the most influential artworks of the 20th century. In 2004, a poll of 500 art experts (sculptors, museum directors, critics, curators) for Britain's Turner Prize organization named "Fountain" the most influential modern artwork of all time, ahead of Picasso's "Les Demoiselles d'Avignon" 1907 and his "Guernica" 1937. The work required no traditional craft; the influence came entirely from the conceptual move. Whatever position you hold, this fact needs accounting for.`,
              source: `Turner Prize poll 2004; standard art history`,
            },
            {
              id: `e2`,
              text: `Velázquez's "Las Meninas" 1656, Vermeer's "Girl with a Pearl Earring" ~1665, Cézanne's late landscapes 1880s-1906: all combined extraordinary craft with substantial conceptual investigation (what is representation; what is perspective; how does looking work). The "craft vs concept" opposition substantially fails when applied to historically major works.`,
              source: `Standard art history; multiple scholars`,
            },
            {
              id: `e3`,
              text: `Sol LeWitt's wall drawings continue to be installed by other people from his instructions after his death (2007). The "work" exists across many instantiations; no single physical installation is THE work. Traditional craft frameworks have trouble accounting for what kind of object this is.`,
              source: `LeWitt "Paragraphs on Conceptual Art" 1967; Estate of Sol LeWitt`,
            },
            {
              id: `e4`,
              text: `Lygia Clark's "Bichos" ("Beasts") 1960+ are hinged metal objects that only become artworks when viewers manipulate them. The viewer's hands are part of the work. Clark moved her practice from object-making to therapeutic facilitation; she worked with patients using "Relational Objects" 1976-1988. The line between "art" and "therapy" became substantially permeable in her practice.`,
              source: `Lygia Clark estate; multiple scholars including Suely Rolnik`,
            },
            {
              id: `e5`,
              text: `Vincent van Gogh sold one painting during his lifetime ("The Red Vineyard" 1888 sold for 400 francs in 1890). The art world of his lifetime substantially rejected his work; he is now considered one of the greatest artists of the 19th century. The institutional theory of art has to account for the fact that institutions sometimes reject great work.`,
              source: `Van Gogh biographies; standard art history`,
            },
            {
              id: `e6`,
              text: `The art world's gatekeepers have systematically underrepresented Black, women, Indigenous, and non-Western artists across decades. Hilma af Klint (1862-1944, Swedish) painted abstract works from 1906 that predate Kandinsky's abstraction by years; her work was substantially excluded from canonical art history until the 21st century (2013 Stockholm Moderna Museet retrospective; 2018-2019 Guggenheim retrospective broke attendance records). The institutional theory has descriptive power AND descriptive limits.`,
              source: `Hilma af Klint Foundation; recent scholarship`,
            },
            {
              id: `e7`,
              text: `Conceptual works require institutional support to circulate as art. Lawrence Weiner's text artworks ("THE RESIDUE OF A FLARE IGNITED UPON A BOUNDARY" 1969) need museums or galleries to present them; without that, they're sentences. Sol LeWitt's wall drawings need institutional commitment to install. The institutional position correctly identifies that conceptual works depend on institutions in ways traditional works don't.`,
              source: `Multiple conceptual art scholarship`,
            },
            {
              id: `e8`,
              text: `Latin American conceptualism (Clark, Oiticica, Meireles, Ehrenberg) substantially engaged political conditions (dictatorship, censorship, structural racism, economic inequality) in ways most North American conceptualism didn't. The political weight changes what the conceptual move does. Engaging this as serious art history rather than appendix to North American story is itself a critical move.`,
              source: `Mari Carmen Ramírez "Inverted Utopias" 2004; multiple scholars`,
            },
            {
              id: `e9`,
              text: `In contemporary practice, most artists work in some combination: substantial craft + substantial conceptual investigation + strategic engagement with institutional structures. Pure positions in any direction are unusual. Kehinde Wiley combines technical mastery of traditional portraiture with conceptual engagement of representation politics and substantial institutional engagement. Adrian Piper's conceptual moves required philosophical training (she earned a Harvard PhD in philosophy 1981).`,
              source: `Contemporary art practice`,
            },
            {
              id: `e10`,
              text: `Adrian Piper's "My Calling (Card) #1" (1986+), cards handed to white people making racist comments in her presence, identifying her as Black and naming what they'd said as racist, engages race, identity, and political work that traditional or purely formalist art categories would struggle to capture. The conceptual move enabled engagement that other frameworks couldn't.`,
              source: `Adrian Piper "Out of Order, Out of Sight" 1996`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You've committed to one position. Here's the strongest objection. The position you've committed to substantially gets in the way of engaging works that don't fit it. Traditional position struggles with Duchamp, LeWitt, Ono, Hsieh, Piper, most of what's lived as art in the past century. Conceptual position struggles with Velázquez, Vermeer, Cézanne, the craft-heavy traditions across most of art history including most non-Western traditions. Institutional position struggles with rejected-then-recognized artists (Van Gogh; Hilma af Klint; multiple Black, women, Indigenous, non-Western artists). Whatever you committed to, you've made yourself blind to substantial parts of what people who care about art have engaged seriously. Maybe the honest position is to refuse to commit at all, engaging each work on its own terms without imposing a definition of art."`,
            promptInstruction: `In 4-6 sentences, respond. Does committing to a working position close more than it opens? What's the case for committing despite the blindness it creates?`,
          },
          reflectionPrompt: `Looking at the position you didn't commit to: which has the strongest argument for what your committed framework misses? Which artists from this lesson (LeWitt, Ono, Clark, Oiticica, Piper, Hsieh, Meireles, others) does your position help you engage well, and which does it fight?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              // was recall ("what did Fountain do?") -> reasoning about the MOVE
              question: `Duchamp submitted a store-bought urinal, signed "R. Mutt," as art. The lesson says the real "art-making" in this was which act?`,
              options: [
                `The manufacturing — the factory that shaped the porcelain did the creative work.`,
                `The signing — writing a made-up name on the object is the thing that turned it into real art.`,
                `The choosing — selecting an ordinary object and placing it in an art context.`,
                `The skill — Duchamp secretly reworked the urinal by hand to make it beautiful.`,
              ],
              correctIndex: 2,
              explanation: `Duchamp's "Fountain" (1917) separated three things tradition had bundled — making (the hand/skill), choosing (selecting what becomes art), and presenting (placing it in an art context) — and argued the choosing was the art-making. The factory hadn't made art; Duchamp's selection did. This is the "readymade." After it, art-making became a question rather than a settled practice. (In a 2004 Turner Prize poll, 500 experts named it the most influential modern artwork, ahead of Picasso's "Les Demoiselles d'Avignon" and "Guernica.") The distractors are the natural misreadings: that the factory, the signature, or hidden craft did the work.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              // was recall ("LeWitt's contribution?") -> reasoning about WHY others executing it still counts
              question: `Sol LeWitt wrote instructions for wall drawings that other people execute — even now, after his death. Why does the lesson say the work is still LeWitt's art?`,
              options: [
                `Because he must secretly finish each and every drawing himself before anyone is allowed to see it.`,
                `Because the conception is the art, so others can carry out the execution.`,
                `Because a drawing only counts as art if a famous person's name is attached to it.`,
                `Because the assistants are not really artists, so the credit defaults to him.`,
              ],
              correctIndex: 1,
              explanation: `LeWitt (1928-2007) located the art in the instruction, not the hand: in "Paragraphs on Conceptual Art" (1967) and "Sentences on Conceptual Art" (1969) he wrote "the idea becomes a machine that makes the art." Generating the instruction was the artistic work; execution by others was part of the work's structure, which is why his wall drawings are still installed from his instructions after his death. The distractors miss the move: secret authorship, fame-as-art, or dismissing the executors.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              // synthesis-ish: connects instruction-art (Ono) to the lesson's core claim about where art lives
              question: `Yoko Ono's "Grapefruit" (1964) presents written instructions like "Make a hole. Leave it in the wind" as the artworks themselves. What does this share with Duchamp's and LeWitt's moves?`,
              options: [
                `All three prove that art must be a physical object you can hang on a wall.`,
                `All three show the artist needs formal training in painting before making art.`,
                `All three locate the art in the artist's idea or choice, not in hand-made craft.`,
                `All three argue that only performances done on a stage can count as art.`,
              ],
              correctIndex: 2,
              explanation: `Ono (b. 1933) made the instruction the artwork; performing or even imagining performing it is the activation. Her "Cut Piece" (1964) had the audience cut her clothing, engaging vulnerability, gender, and audience complicity. This is the same thread as Duchamp's readymade and LeWitt's instructions: the art lives in the idea/choice, not in trained craft. The distractors are the exact assumptions conceptualism overturned — that art must be an object, require craft training, or be stage performance.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              // was recall ("what is the traditional position?") -> apply it to a case
              question: `Someone holds the traditional position on art. Looking at Duchamp's "Fountain," what would they most likely say — and what's the real difficulty with their view?`,
              options: [
                `"It's great art because it took huge manual skill" — but the difficulty is that it took none.`,
                `"It's not art, since art needs skill and craft" — but the difficulty is explaining its huge influence.`,
                `"It's art only because it's old now" — but the difficulty is that age doesn't make art.`,
                `"It's art because a museum owns it" — but that's actually the institutional position, not the traditional one.`,
              ],
              correctIndex: 1,
              explanation: `The traditional position (defenders from Plato through Reynolds to Roger Scruton's "Beauty," 2009) holds that art requires skill, craft, and the artist's hand — so a readymade wouldn't qualify. Its strongest evidence is huge swaths of art history (Velázquez, Vermeer, Cézanne) that depended on trained capability. Its real difficulty is works like "Fountain" that took no craft yet became enormously influential. The distractors mis-state the position (praising skill it lacks, or confusing it with the institutional position).`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              // was recall ("what's the conceptual position?") -> distinguish it from a common misreading
              question: `What does the conceptual position actually claim — as opposed to the common misreading of it?`,
              options: [
                `That art's work is investigating what art is — NOT that craft is worthless or anything goes.`,
                `That literally anything at all automatically becomes art the moment someone says so.`,
                `That ideas matter, so artists should never use materials, craft, or skill again.`,
                `That only objects displayed in famous museums can ever truly count as real art.`,
              ],
              correctIndex: 0,
              explanation: `The conceptual position (LeWitt's "Paragraphs," Kosuth's "Art After Philosophy" 1969, Arthur Danto's "The Transfiguration of the Commonplace" 1981) holds that art's work is conceptual investigation — what art, perception, and aesthetic experience are. Its strongest evidence is the influence of works like "Fountain," Malevich's "Black Square" (1915), and LeWitt's wall drawings. The misreadings the distractors capture: "anything goes," "never use craft again," and confusing it with the institutional position.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              // SYNTHESIS: distinguish all three positions on one case (rejected-then-recognized)
              question: `The Society of Independent Artists rejected "Fountain," yet it later became canonical. Which position best explains this, and which struggles most with it?`,
              options: [
                `The traditional position explains it best; the institutional position can't account for it.`,
                `No position can possibly explain it, since art that is rejected can never later become important.`,
                `The institutional position explains it, but rejected-then-recognized cases are its difficulty.`,
                `Only the conceptual position is involved; institutions play no role in what becomes art.`,
              ],
              correctIndex: 2,
              explanation: `The institutional position (George Dickie's "Institutional Analysis" 1974; Bourdieu's sociology of art) says art is what the art world accepts. It has strong descriptive power over what circulates as important — but rejected-then-recognized artists are exactly its difficulty: if institutions define art, how did a rejected work become canonical? This question requires holding all three positions from section 3 against one case — synthesis, not recall.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              // SYNTHESIS across sections: why the SAME conceptual move carried different weight in Latin America
              question: `North American and Latin American conceptualists both asked "what is art?" Why does the lesson say the same conceptual move carried different weight in Latin America?`,
              options: [
                `Because Latin American artists had better materials and training than others.`,
                `Because they made the same move under dictatorships, so the act carried real political risk.`,
                `Because their work was really just regional folk craft rather than any kind of true conceptual art.`,
                `Because they invented conceptual art first and North Americans merely copied them.`,
              ],
              correctIndex: 1,
              explanation: `Figures like Lygia Clark ("Bichos"), Hélio Oiticica ("Parangolés," "Tropicália"), and Cildo Meireles ("Insertions into Ideological Circuits," which used Coca-Cola bottles to spread messages the dictatorship couldn't easily intercept) engaged "what is art?" while the Brazilian (1964-85), Argentine, and Chilean dictatorships imprisoned, exiled, and killed dissidents. North American conceptualism could ask the question abstractly; in Latin America the same move carried real danger and weight. The distractors diminish it as better-resourced, mere folk craft, or a priority claim.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              // was recall ("Piper's contribution?") -> reasoning about HOW her move extended conceptualism
              question: `Adrian Piper handed "calling cards" to people who made racist remarks, naming the act as racist — the cards being the artwork. How did this extend what conceptual art could do?`,
              options: [
                `It returned conceptual art to traditional oil painting and away from ideas.`,
                `It proved that conceptual art should always avoid politics entirely and stay completely, purely abstract.`,
                `It used conceptual moves to investigate race and identity directly, which most 1960s-70s conceptualism didn't.`,
                `It showed that only artists with no philosophical training can make honest work.`,
              ],
              correctIndex: 2,
              explanation: `Adrian Piper (b. 1948), who earned a Harvard philosophy PhD in 1981, used conceptual moves to engage race and identity directly — "My Calling (Card) #1" (1986) and "Funk Lessons" (1982-84) — expanding conceptual art beyond what most of its 1960s-70s practitioners engaged. The distractors invert her contribution (back to painting, away from politics) or deny the philosophical depth that was central to it.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Conceptual art's claim that "the idea is the art" means that craft and material engagement no longer matter in contemporary art.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False. The conceptual move opened a question contemporary art keeps engaging in many directions. Most major contemporary artists work in some combination of substantial craft, conceptual investigation, and strategic institutional engagement; pure positions are unusual. Kehinde Wiley combines technical mastery of portraiture with conceptual engagement of representation politics. Marina Abramović's performance work requires extraordinary physical training. Even LeWitt's instructed wall drawings require skilled execution that affects the work. The "concept vs craft" opposition mostly fails when applied to real contemporary works — the conceptual move didn't eliminate craft, it opened the question of what relationships among craft, idea, material, and procedure are possible. Engaging contemporary art seriously means engaging that whole space rather than choosing one corner.`,
            },
            {
              id: `q10`,
              type: `inference`,
              // application kept; long correct compressed to one strong option, real wrong-approaches as decoys
              question: `In a museum, your friend points at a conceptual work — a text on the wall, or a Lygia Clark "Bicho" you can manipulate — and says, "This isn't art; the artist didn't even make anything; my kid could do this." Based on the lesson, what's the most honest and thoughtful response?`,
              options: [
                `Agree completely — if there's no handmade object, it can't really be art.`,
                `Acknowledge their view is a serious one (the traditional position), then show that "anyone could do this" usually understates the work, clarify that conceptual art claims the investigation IS the art, and note its real historical influence — so their reaction can be informed rather than reflexive.`,
                `Tell them art is whatever anyone feels like calling art, so any reaction is equally correct.`,
                `Insist they're simply wrong and that questioning modern art shows they're uneducated.`,
              ],
              correctIndex: 1,
              explanation: `Applied conceptual-art literacy. The strong response: (1) name the traditional position as serious, not stupid (Scruton, the centuries-long craft tradition); (2) show "my kid could do this" usually understates the work — LeWitt's instructions need skilled execution, Tehching Hsieh's year-long performances required extraordinary endurance, Clark's "Bichos" need expert fabrication; (3) clarify the actual claim (Kosuth/LeWitt: the conceptual investigation is the art-making, not "ideas without execution"); (4) account for the historical record (the 2004 poll naming "Fountain" most influential); (5) suggest engaging one artist seriously so the reaction is informed. The wrong options are the errors the lesson warns against: full capitulation, "anything goes" relativism, and contemptuous dismissal.`,
            },
          ]
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-position`, category: `Your position`, prompt: `Why did you commit to the position you picked? Which evidence pushed hardest in that direction? What would change your mind?` },
            { id: `reflect-fountain`, category: `Fountain at 12`, prompt: `Imagine you're encountering Duchamp's "Fountain" 1917 fresh, knowing nothing about its history. Without the institutional context, would you experience it as art? What does that tell you about which position is actually operating in your experience?` },
            { id: `reflect-latin-american`, category: `Latin American conceptualism`, prompt: `Lygia Clark, Hélio Oiticica, Cildo Meireles, Felipe Ehrenberg worked under dictatorship and economic structural injustice. How does their political context change what their conceptual moves accomplished? Caro, you're Colombian; does Latin American conceptualism feel different from North American conceptualism for you specifically?` },
            { id: `reflect-piper`, category: `Adrian Piper's calling cards`, prompt: `Adrian Piper handed white people calling cards naming their racist comments and calling herself Black; the cards were the artwork. Could this exist without conceptual art's prior history opening that possibility? What does the work do that traditional art couldn't?` },
            { id: `reflect-your-art`, category: `Your own creative work`, prompt: `Your position on what makes something art will shape what you make if you create art across your lifetime. What kind of artist might your committed position make you become? What kind of art would you want to make that your committed position helps you toward?` },
            { id: `reflect-band-start`, category: `Starting this band`, prompt: `You've just started the Creative Arts Voyager band. What questions do you carry into the next 19 lessons? What kind of relationship to art do you want to develop through this band?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Engaging conceptual art changes how you see everything visual around you. Two paths.`,
          familyActivity: {
            title: `Family Museum / Gallery Visit`,
            duration: `2-3 hours`,
            description: `Visit a contemporary art museum or gallery with family. If you're near major cities: MOCA or LACMA (Los Angeles), MoMA or Whitney or New Museum (NYC), Museum of Contemporary Art (Chicago), SFMOMA (San Francisco), Hammer Museum (LA). For Colombian and Latin American context: Museo de Arte Moderno de Bogotá; Museo del Banco de la República also in Bogotá has substantial collection. If museums aren't accessible, art galleries are usually free; Instagram and museum websites also allow extensive virtual engagement. At the museum, find one piece that aligns with your committed position and one that challenges it. Discuss with family which positions are operating in their reactions. The conversation often surfaces what frameworks family members hold without naming them.`,
          },
          projectOption: {
            title: `Your Own Conceptual Piece, 4 weeks (optional)`,
            duration: `4 weeks, ~45 minutes per session`,
            description: `Make your own conceptual work this month. Pick a format: instruction piece (à la Yoko Ono, write 5 instructions as artworks); text piece (à la Lawrence Weiner, a sentence that activates when read); participatory object (à la Lygia Clark, something that requires the viewer to manipulate); time-based performance (à la Tehching Hsieh, pick a sustained activity for a defined period); calling card piece (à la Adrian Piper, design cards for a specific social situation). Week 1: choose format, draft initial idea. Week 2: refine, get feedback from family or friend. Week 3: execute, document. Week 4: write 500-1,000 words about what the work does, what position on art it operates from, what you learned. This is real conceptual practice, not preparation for it.`,
            offerToParent: `Parent: opt your kid into the conceptual practice project. Engaging art-making at this level at 12-13 builds creative capacity that compounds across decades. The 4-week timeline lets your kid actually make something rather than just think about making something.`,
          },
          identityQuestion: `If you become someone who engages conceptual art seriously (Duchamp, LeWitt, Ono, Clark, Oiticica, Meireles, Piper, Hsieh) and develops their own working position on what art is, what does that change about how you see the visual world, how you engage with culture, and what kind of creative person you become?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can name what Duchamp's "Fountain" did and what it opened.`,
            `A person whose working position on art is [traditional / conceptual / institutional] and who can defend it.`,
            `Someone who engages Latin American conceptualism on its own terms.`,
          ],
          saveKey: `identity_responses_ca_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. First Creative Arts Voyager lesson done. The band opens with the question that 20th-century art opened: what is art? You have framework for three positions on it (traditional craft; conceptual investigation; institutional construction) and you've committed to one as your working position. You know Duchamp's "Fountain" 1917 and what the readymade move did. You know the 1960s-70s conceptual generation by name: Sol LeWitt + "Paragraphs on Conceptual Art" 1967; Joseph Kosuth + "Art After Philosophy" 1969; Yoko Ono + "Grapefruit" 1964 + "Cut Piece"; Lawrence Weiner + "Declaration of Intent" 1968; Tehching Hsieh's One Year Performances 1980-1984; Adrian Piper + "My Calling (Card) #1" 1986+ + Harvard PhD in philosophy 1981. You know Latin American conceptualism: Lygia Clark + "Bichos" 1960+ + "Relational Objects" 1976-1988; Hélio Oiticica + "Parangolés" 1964+ + "Tropicália" 1967 + Mangueira favela samba school collaboration; Cildo Meireles + "Insertions into Ideological Circuits" 1970s + "Missão/Missões" 1987; Felipe Ehrenberg + mail art + Beau Geste Press 1971-1976 + Tlatelolco. You know the political weight of these moves under Brazilian dictatorship 1964-1985, Argentine 1976-1983, Pinochet 1973-1990, Mexican PRI. Nineteen lessons to go. Next: the avant-garde and rule-breaking. Onward, {name}. — Muse 🦋`,
          badge: `conceptual-art-literate`,
          badgeName: `Conceptual Art Literate`,
          xpEarned: 75,
          competencies: [
            `Names Duchamp's "Fountain" 1917 and the readymade move (separating making, choosing, presenting)`,
            `Names the 1960s-70s conceptual generation (LeWitt, Kosuth, Ono, Weiner, Hsieh, Piper) with foundational works and texts`,
            `Names Latin American conceptualism (Clark, Oiticica, Meireles, Ehrenberg) and its political weight`,
            `Articulates three positions on what makes something art (traditional, conceptual, institutional) with defenders`,
            `Commits to a working position while engaging the others seriously`,
            `Recognizes that the position commitment will probably move across decades of engagement`,
            `Identifies Adrian Piper's contribution to conceptual art engaging race and identity`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: The Avant-Garde: Breaking Rules`,
            hook: `Manifestos and movements. Futurism, Dada, Surrealism, Russian Constructivism, Bauhaus. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const positions = l.screens.find((s) => s.type === `argument-builder`)?.positions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L01 ${VERSION}] "${l.title}" mags=${mags} pos=${positions} q=${quiz} r=${reflect}`
  );
}
