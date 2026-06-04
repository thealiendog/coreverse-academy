// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L02 — The Avant-Garde: Breaking Rules
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Avant-Garde Movements, 20th C Art History
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: PERSPECTIVES (5 voices on what avant-garde does)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ca-l02-v1";

const CREATIVE_ARTS_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-02`,
      title: `The Avant-Garde: Breaking Rules`,
      duration: 35,
      xpReward: 75,
      badge: `avant-garde-literate`,
      badgeName: `Avant-Garde Literate`,

      screens: [
        {
          id: `l2-welcome`,
          type: `welcome`,
          guideText: `{name}. Last lesson asked what art is. This one asks: when artists deliberately break the rules of their time, what are they doing? The avant-garde (French military term meaning "advance guard," the scouts who go ahead of the main army) is the tradition of artists who position themselves ahead of mainstream art, breaking established conventions to push art into new territory. The tradition spans the 20th century: Dada (Zurich 1916, in the middle of World War I); Surrealism (Paris 1924); Futurism (Italy 1909, with later fascist entanglements you need to know); Constructivism (Russia post-1917); Fluxus (1960s, blurring art and life); Situationists (1957-1972, art as revolution); Punk (1970s, breaking aesthetic and social rules together); Riot Grrrl (1991+, feminist punk); contemporary avant-gardes including digital, performance, and decolonial movements. Five voices ahead, each articulating a distinct logic for why breaking rules matters. The voices don't fully agree; engaging each on its terms is the work. By end of lesson you'll know which logic of rule-breaking is most yours, and you'll know what serious avant-garde tradition has already done so you don't have to reinvent it from scratch.`,
          headline: `The Avant-Garde: Breaking Rules`,
          subtitle: `From Dada 1916 to current. Five logics of rule-breaking, each distinct.`,
          visual: `/voyager-assets/creative-arts/l2-welcome.webp`,
        },

        {
          id: `l2-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Avant-Garde" Actually Means`,
          paragraphs: [
            `"Avant-garde" is French military terminology meaning "advance guard." Scouts and forward troops go ahead of the main army to engage the unfamiliar terrain first. Saint-Simon (French social theorist, 1760-1825) borrowed the term for artists and writers around 1825: he argued that artists could function as society's advance guard, going into intellectual and aesthetic territory before the rest of society followed. The military metaphor is precise. The avant-garde does scouting work; takes the early hits; sometimes gets killed (artistic obscurity, poverty, social rejection); occasionally produces the breakthrough that the rest of art then follows.`,
            `What avant-garde isn't: it isn't just "shocking" or "weird" or "controversial." Those are sometimes side effects but they aren't the function. The function is exploring territory the rest of art hasn't reached yet: new techniques, new subject matter, new institutional contexts, new relationships between artist and viewer, new social or political possibilities. Sometimes the territory is genuinely valuable and the rest of art follows; sometimes it's a dead end and the work is forgotten. The avant-garde tradition includes both kinds.`,
            `What the avant-garde isn't either: it isn't a single position. Multiple distinct logics for why breaking rules matters operate across the tradition. Some avant-gardes break rules to shock and disturb (Dada, Punk). Some break rational rules to access deeper truth (Surrealism). Some break rules to embrace new technology or speed (Futurism, some current digital movements). Some break the art-object boundary entirely (Fluxus, performance art, social practice). Some break rules to politicize art (Situationists, Riot Grrrl, current activist art). Each logic has serious defenders and substantial accomplishment.`,
            `Historical context for why the 20th-century avant-gardes happened. The early 20th century saw massive disruption: industrial transformation; mass democracy; World War I (~16-20 million deaths); the Russian Revolution 1917; mass media (photography, then radio, then film); rapid scientific change (relativity, quantum mechanics, genetics, psychoanalysis). Artists across multiple traditions concluded that inherited 19th-century artistic conventions couldn't engage these realities. The avant-gardes were attempts at adequate response. The pattern continued: World War II and Holocaust produced post-war avant-gardes; Cold War produced 1960s movements; civil rights, feminism, anti-colonial movements produced subsequent avant-gardes; digital revolution and current climate/AI moment producing current movements.`,
            `Why this matters for you. If you're going to make creative work seriously, you'll be working in conversation with these traditions whether you know them or not. Knowing them means you don't have to reinvent gestures that have been made; you can stand on what's been built; you can push into genuinely new territory rather than re-discovering Dada in 2026 unawares. Most aspiring artists who don't know the avant-garde traditions repeat them without recognizing it; those who know them can do something else.`,
          ],
          image: `/voyager-assets/creative-arts/l2-s1-what-avant-garde-is.webp`,
          imageCaption: `Avant-garde: French military "advance guard." Saint-Simon (1760-1825) borrowed for artists ~1825. Function: scouting territory rest of art hasn't reached: new techniques, subject matter, institutional contexts, artist-viewer relationships, social/political possibilities. Not single position: multiple distinct logics (shock, unconscious access, technological/speed, anti-art-object, political). 20th-century context: industrial disruption, mass democracy, WWI ~16-20M deaths, Russian Revolution 1917, mass media, scientific change. Pattern continued through WWII/Holocaust, Cold War, civil rights/feminist/anti-colonial movements, digital revolution, current climate/AI.`,
          vocab: [
            {
              word: `avant-garde, defined`,
              definition: `French military terminology meaning "advance guard," scouts and forward troops who go ahead of main army to engage unfamiliar terrain first. Saint-Simon (French social theorist 1760-1825) borrowed for artists/writers around 1825: artists as society's advance guard, going into intellectual and aesthetic territory before rest of society follows. Military metaphor precise: avant-garde does scouting work, takes early hits, sometimes gets killed (artistic obscurity, poverty, social rejection), occasionally produces breakthrough that rest of art follows. NOT just "shocking" or "weird" or "controversial" (those are sometimes side effects, not the function). Function: exploring territory rest of art hasn't reached (new techniques, subject matter, institutional contexts, artist-viewer relationships, social/political possibilities). Multiple distinct logics within the tradition: shock and disturb (Dada, Punk); access deeper truth through breaking rational rules (Surrealism); embrace new technology or speed (Futurism, current digital); break art-object boundary entirely (Fluxus, performance art, social practice); politicize art (Situationists, Riot Grrrl, current activist). Each logic has serious defenders and substantial accomplishment. 20th-century historical context: industrial transformation; mass democracy; WWI ~16-20M deaths; Russian Revolution 1917; mass media (photography → radio → film); rapid scientific change (relativity, quantum mechanics, genetics, psychoanalysis). Inherited 19th-century artistic conventions couldn't engage these realities. Pattern continued: WWII/Holocaust → post-war avant-gardes; Cold War → 1960s movements; civil rights/feminist/anti-colonial → subsequent avant-gardes; digital revolution + current climate/AI moment → current movements.`,
              audioPrompt: `"Avant-garde" is French military terminology meaning "advance guard," {name}. The scouts and forward troops who go ahead of the main army to engage the unfamiliar terrain first. Saint-Simon, a French social theorist who lived from 1760 to 1825, borrowed the term for artists and writers around 1825. He argued that artists could function as society's advance guard, going into intellectual and aesthetic territory before the rest of society followed. The military metaphor is precise. The avant-garde does scouting work; takes the early hits; sometimes gets killed in artistic obscurity, poverty, social rejection; occasionally produces the breakthrough that the rest of art then follows. What avant-garde isn't: it isn't just shocking or weird or controversial. Those are sometimes side effects but they aren't the function. The function is exploring territory the rest of art hasn't reached yet: new techniques, new subject matter, new institutional contexts, new relationships between artist and viewer, new social or political possibilities. The avant-garde isn't a single position. Multiple distinct logics for why breaking rules matters operate across the tradition. Some avant-gardes break rules to shock and disturb. Some break rational rules to access deeper truth. Some break rules to embrace new technology. Some break the art-object boundary entirely. Some break rules to politicize art. Each logic has serious defenders.`,
            },
          ],
        },

        {
          id: `l2-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Dada And Surrealism In Detail`,
          paragraphs: [
            `Dada emerged at Cabaret Voltaire in Zurich, Switzerland, opening February 5, 1916, in the middle of World War I. The founders were primarily artists and writers who had fled to neutral Switzerland to escape the war: Hugo Ball (German poet, opened the Cabaret); Tristan Tzara (Romanian poet, became major theorist); Hans (Jean) Arp (Alsatian sculptor/poet); Sophie Taeuber-Arp (Swiss artist, married Arp, substantial in her own right); Marcel Janco (Romanian); Richard Huelsenbeck (German). They held nightly performances combining poetry recitation, music, dance, and visual art that deliberately abandoned conventional meaning. Hugo Ball recited "sound poems" (poems consisting only of nonsense syllables) in a cardboard cubist costume. Tzara wrote manifestos rejecting all reason as the cause of the war's slaughter. The name "Dada" was reportedly chosen by stabbing a knife into a dictionary (or perhaps consulting a French dictionary where "dada" means hobbyhorse); the arbitrary origin was part of the point.`,
            `Dada's logic: the war demonstrated that European rationalism, civilization, art, and culture had failed completely; they had produced unprecedented industrial slaughter. The appropriate response was not to make better art within the inherited tradition but to attack the inherited tradition itself, including art's pretensions to meaning, beauty, and seriousness. Dada produced anti-art: deliberately meaningless poetry; collages combining random fragments; readymades (Duchamp's "Fountain" 1917 emerged from this milieu); performances designed to provoke and confuse audiences; manifestos contradicting themselves. The movement spread from Zurich to Berlin (Hannah Höch, Raoul Hausmann, John Heartfield). Berlin Dada was more politically radical, with photomontages directly attacking German nationalism and bourgeois society), Cologne (Max Ernst), Paris (where it transitioned into Surrealism), New York (Duchamp, Picabia, Man Ray).`,
            `Surrealism formally launched in Paris with André Breton's "Manifesto of Surrealism" October 1924. Breton (1896-1966, formerly Dada in Paris) defined Surrealism as "pure psychic automatism, by which one intends to express verbally, in writing, or by any other method, the real functioning of the mind. Dictation by thought, in the absence of all control exercised by reason, and beyond all aesthetic or moral preoccupation." The movement was substantially influenced by Sigmund Freud's psychoanalysis (Breton had worked with shell-shocked WWI soldiers, encountering the unconscious clinically before encountering Freud's writings). Surrealism's logic: rationalism is incomplete; the unconscious mind contains substantial truth that rational consciousness suppresses; art that bypasses rational control accesses deeper truth.`,
            `Surrealist artists. André Breton (theorist, poet). Salvador Dalí (1904-1989, Spanish): "The Persistence of Memory" 1931 (melting clocks); "The Hallucinogenic Toreador" 1968-1970; technically virtuosic surrealist painter who became commercially successful and ultimately expelled from formal Surrealism for his political and economic positions; "I myself am Surrealism" he claimed. René Magritte (1898-1967, Belgian): "The Treachery of Images" 1929 (the painting of a pipe with text "Ceci n'est pas une pipe" / "This is not a pipe" (because it's a painting of a pipe, not an actual pipe)); "The Son of Man" 1964 (man in bowler hat with floating apple obscuring face); precise photographic painting style with impossible content. Leonora Carrington (1917-2011, British-Mexican): paintings, sculptures, writings; "Self-Portrait (Inn of the Dawn Horse)" ~1937-38; substantially overlooked in the formal Surrealist movement because women were often positioned as "muses" rather than full artists; her work substantially recognized in subsequent decades. Remedios Varo (1908-1963, Spanish-Mexican) emigrated to Mexico City 1941 with Carrington and other surrealist exiles; "Creation of the Birds" 1957, "Embroidering Earth's Mantle" 1961; substantial recovery of her work in current scholarship. Joan Miró (1893-1983, Catalan/Spanish): biomorphic abstraction, "Harlequin's Carnival" 1924-25. Max Ernst (1891-1976, German-French-American): frottage technique (rubbing paper over textured surfaces), collage novels.`,
            `Surrealism's relationship to Mexico. Multiple major Surrealists relocated to Mexico City during and after World War II (Carrington, Varo, Wolfgang Paalen, Benjamin Péret, Alice Rahon, others). Mexico had substantial draw; André Breton called Mexico "the surrealist country par excellence" after his 1938 visit. The Mexican context substantially shaped subsequent surrealism. Frida Kahlo (1907-1954) was claimed by Breton as Surrealist when he visited Mexico in 1938, though Kahlo herself rejected the label: "They thought I was a Surrealist, but I wasn't. I never painted dreams. I painted my own reality." The distinction matters: Kahlo's work engaged personal and political reality (her injuries from a 1925 streetcar accident; her relationship with Diego Rivera; her communist politics; Mexican indigenous culture and Catholicism) rather than unconscious-access framework. Latin American magical realism (Gabriel García Márquez "One Hundred Years of Solitude" 1967; Isabel Allende; Juan Rulfo; many others) has substantial conceptual relationship to Surrealism while being a distinct tradition with its own logic.`,
          ],
          image: `/voyager-assets/creative-arts/l2-s2-dada-surrealism.webp`,
          imageCaption: `Dada: Cabaret Voltaire Zurich Feb 5 1916, founders Hugo Ball, Tristan Tzara, Hans Arp, Sophie Taeuber-Arp; war-driven anti-art response to WWI's industrial slaughter. Spread Zurich → Berlin (Hannah Höch, Raoul Hausmann, John Heartfield) → Cologne → Paris → New York. Surrealism: Paris, André Breton's "Manifesto of Surrealism" October 1924; "pure psychic automatism" bypassing rational control. Artists: Dalí ("Persistence of Memory" 1931, "Hallucinogenic Toreador" 1968-70); Magritte ("Treachery of Images" 1929, "Son of Man" 1964); Leonora Carrington; Remedios Varo (emigrated Mexico City 1941); Joan Miró; Max Ernst. Mexico City became surrealist hub; Kahlo rejected the label ("I never painted dreams. I painted my own reality"). Latin American magical realism (García Márquez "Cien años" 1967) has conceptual relationship while being distinct tradition.`,
          vocab: [
            {
              word: `Dada and Surrealism in specific detail`,
              definition: `Dada: emerged at Cabaret Voltaire Zurich, opening February 5, 1916, in middle of WWI. Founders: Hugo Ball (German poet); Tristan Tzara (Romanian, became major theorist); Hans (Jean) Arp (Alsatian); Sophie Taeuber-Arp (Swiss); Marcel Janco (Romanian); Richard Huelsenbeck (German). Nightly performances combined poetry, music, dance, visual art deliberately abandoning conventional meaning. Hugo Ball recited "sound poems" of nonsense syllables in cardboard cubist costume. Tzara wrote manifestos rejecting all reason as cause of war's slaughter. Name reportedly chosen by stabbing knife into dictionary. Logic: war demonstrated European rationalism/civilization/art had failed completely producing unprecedented industrial slaughter; appropriate response was attacking the inherited tradition itself. Produced anti-art: meaningless poetry, random-fragment collages, readymades (Duchamp's "Fountain" 1917 from this milieu), provocative performances, self-contradicting manifestos. Spread: Zurich → Berlin (Hannah Höch, Raoul Hausmann, John Heartfield, more politically radical with photomontages attacking German nationalism and bourgeois society) → Cologne (Max Ernst) → Paris (transitioned into Surrealism) → New York (Duchamp, Picabia, Man Ray). Surrealism: formally launched Paris with André Breton's "Manifesto of Surrealism" October 1924. Breton (1896-1966, formerly Paris Dada). Defined Surrealism as "pure psychic automatism... the real functioning of the mind... in the absence of all control exercised by reason, and beyond all aesthetic or moral preoccupation." Substantially influenced by Sigmund Freud's psychoanalysis. Logic: rationalism incomplete; unconscious contains substantial truth rational consciousness suppresses; art bypassing rational control accesses deeper truth. Artists: Salvador Dalí (1904-1989, "Persistence of Memory" 1931, "Hallucinogenic Toreador" 1968-70, technically virtuosic, expelled for political/economic positions); René Magritte (1898-1967, Belgian, "Treachery of Images" 1929 / "Ceci n'est pas une pipe," "Son of Man" 1964, precise photographic painting style with impossible content); Leonora Carrington (1917-2011, British-Mexican, "Self-Portrait (Inn of the Dawn Horse)" ~1937-38, women often positioned as "muses" rather than full artists, substantially recognized in subsequent decades); Remedios Varo (1908-1963, Spanish-Mexican, emigrated Mexico City 1941, "Creation of the Birds" 1957, "Embroidering Earth's Mantle" 1961); Joan Miró (1893-1983 Catalan/Spanish); Max Ernst (1891-1976 German-French-American). Mexico City became substantial surrealist hub (Carrington, Varo, Wolfgang Paalen, Benjamin Péret, Alice Rahon); Breton called Mexico "the surrealist country par excellence" after 1938 visit. Frida Kahlo (1907-1954) claimed by Breton 1938 but rejected the label: "They thought I was a Surrealist, but I wasn't. I never painted dreams. I painted my own reality." Kahlo's work engaged personal and political reality (1925 streetcar accident injuries, Diego Rivera, communist politics, indigenous culture and Catholicism). Latin American magical realism (García Márquez "Cien años de soledad" 1967; Isabel Allende; Juan Rulfo) has conceptual relationship to Surrealism while being distinct tradition with own logic.`,
              audioPrompt: `Dada emerged at Cabaret Voltaire in Zurich, Switzerland, opening February 5, 1916, in the middle of World War I, {name}. The founders were primarily artists and writers who had fled to neutral Switzerland to escape the war: Hugo Ball, Tristan Tzara, Hans Arp, Sophie Taeuber-Arp, Marcel Janco, Richard Huelsenbeck. They held nightly performances combining poetry, music, dance, and visual art that deliberately abandoned conventional meaning. Dada's logic: the war demonstrated that European rationalism, civilization, art, and culture had failed completely; they had produced unprecedented industrial slaughter. Dada produced anti-art. Surrealism formally launched in Paris with André Breton's "Manifesto of Surrealism" in October 1924. Surrealism's logic: rationalism is incomplete; the unconscious mind contains substantial truth that rational consciousness suppresses. Surrealist artists include Salvador Dalí with "The Persistence of Memory" from 1931; René Magritte with "The Treachery of Images" from 1929, the painting of a pipe with text "this is not a pipe"; Leonora Carrington; Remedios Varo; Joan Miró; Max Ernst. Multiple major Surrealists relocated to Mexico City during and after World War II. Frida Kahlo was claimed by Breton as Surrealist when he visited Mexico in 1938, but Kahlo rejected the label: "They thought I was a Surrealist, but I wasn't. I never painted dreams. I painted my own reality." Latin American magical realism via Gabriel García Márquez's "One Hundred Years of Solitude" from 1967, Isabel Allende: substantial conceptual relationship to Surrealism while being a distinct tradition.`,
            },
          ],
        },

        {
          id: `l2-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Futurism, Constructivism, Fluxus, And The Political Tradition`,
          paragraphs: [
            `Futurism. Italian movement launched with Filippo Tommaso Marinetti's "Futurist Manifesto" published in Le Figaro newspaper February 20, 1909. Marinetti and subsequent Futurists (Umberto Boccioni, Carlo Carrà, Luigi Russolo, Giacomo Balla, Gino Severini) embraced speed, technology, mechanization, violence as legitimate aesthetic subjects. The manifesto's specific claims include: "We will glorify war (the world's only hygiene), militarism, patriotism, the destructive gesture of freedom-bringers, beautiful ideas worth dying for"; "We will sing of great crowds excited by work, by pleasure, and by riot; we will sing of the multicolored, polyphonic tides of revolution in the modern capitals"; "A racing car... is more beautiful than the Victory of Samothrace." The aesthetics influenced subsequent abstraction substantially. The political trajectory needs naming honestly: Marinetti became a founding member of Italian Fascist party in 1919 and supported Mussolini through the regime; Futurism as movement substantially aligned with Italian fascism. The tradition's legacy is complicated: real aesthetic accomplishment (Boccioni's "Unique Forms of Continuity in Space" 1913 is a major modernist sculpture; Futurist sound experiments influenced subsequent music) within explicit fascist political commitments. Engaging Futurism seriously means engaging both.`,
            `Russian Constructivism. Post-Russian Revolution 1917, Russian avant-garde artists committed to using art for revolutionary social transformation. Key figures: Vladimir Tatlin (1885-1953): "Monument to the Third International" 1919-20 (a 400-meter tower planned to house revolutionary government, never built, but enormously influential as proposal); Alexander Rodchenko (1891-1956): photography, graphic design, posters; Liubov Popova (1889-1924): painting, textile design, theater design; Varvara Stepanova (1894-1958): graphic design, costume design; El Lissitzky (1890-1941): graphic design, architecture, photomontage, "Beat the Whites with the Red Wedge" 1919 propaganda poster. The movement's logic: art must serve revolutionary social transformation; the inherited bourgeois category of "fine art" must be abandoned in favor of design, architecture, propaganda, mass production that builds the new socialist society. Constructivists worked on textiles, ceramics, books, posters, theater, architecture; substantially merging art and life through revolutionary politics. Stalin's consolidation 1928+ and the imposition of "socialist realism" 1934 substantially ended Constructivist freedom; many figures were marginalized, exiled, or killed; the work was substantially suppressed in USSR until cultural thaw post-1956.`,
            `Fluxus. International movement emerging early 1960s, formally launched by Lithuanian-American architect George Maciunas with "Fluxus Manifesto" 1963. Key figures: George Maciunas (1931-1978, theorist and organizer); Yoko Ono (born 1933, "Cut Piece" 1964 performance where audience members cut her clothing); Nam June Paik (1932-2006, Korean-American, pioneering video artist, "TV Buddha" 1974); Joseph Beuys (1921-1986, German, "How to Explain Pictures to a Dead Hare" 1965 performance, "social sculpture" framework); La Monte Young (born 1935, drone music pioneer); George Brecht (1926-2008, "event scores," brief instructions for actions). Logic: art and life should not be separated; the boundary between artwork and ordinary action is artificial; "concerts," "events," and "everyday actions" can all be art. Many Fluxus works are "event scores": brief instructions printed on cards that performers can realize. Yoko Ono's "Grapefruit" 1964 (covered in L01) emerged from this milieu. Fluxus dissolved the art-object boundary that Dada had attacked; substantially influential on subsequent performance art, social practice, relational aesthetics.`,
            `The political tradition. Multiple avant-gardes have explicitly committed to art-as-political-action. Situationist International (1957-1972, founded by Guy Debord and others): Debord's "The Society of the Spectacle" 1967 articulated framework where capitalism produces "spectacle," image-mediated reality that displaces direct experience and substantially controls political consciousness; situationists used "détournement" (subversive recontextualization of existing images) and "dérive" (deliberately aimless urban wandering) as political-aesthetic practices. Substantially influential on May 1968 Paris uprising. Punk (1970s): The Sex Pistols (1975-1978) brought avant-garde gestures (deliberate ugliness, anti-musicianship, provocation) into popular music; punk's logic was anti-everything (anti-establishment, anti-prog-rock, anti-respectability) with substantial musical and political consequences. Riot Grrrl (1991+, US): feminist punk movement with bands including Bikini Kill (Kathleen Hanna), Bratmobile, Heavens to Betsy, Sleater-Kinney; zines, all-girl mosh pits, "girls to the front" practices; substantially built infrastructure for women in punk and beyond. Current activist art includes: Pussy Riot (Russia, 2011+); various Latin American performance art traditions (Doris Salcedo, Tania Bruguera); various Indigenous and decolonial movements globally.`,
            `Recognize what's recurring. Across these distinct traditions (Dada, Surrealism, Futurism, Constructivism, Fluxus, Situationists, Punk, Riot Grrrl, current activist art), a pattern repeats: serious artists conclude that mainstream art of their time can't engage what's actually happening (war, revolution, mass society, capitalism, feminism, climate, AI); they break the rules to make work that can engage; the rule-breaking produces new techniques and new subject matter; the rest of art either follows substantially (institutionalizing the new techniques) or rejects substantially (treating the avant-garde as failure). The pattern has been productive across a century-plus; engaging it positions you to participate seriously when your generation needs new avant-garde work for new problems.`,
          ],
          image: `/voyager-assets/creative-arts/l2-s3-multiple-traditions.webp`,
          imageCaption: `Multiple avant-garde traditions. Futurism: Marinetti's manifesto Feb 20 1909 in Le Figaro; embraced speed, technology, mechanization, violence; Boccioni "Unique Forms of Continuity in Space" 1913; explicit fascist alignment from 1919. Russian Constructivism: post-1917, Tatlin "Monument to the Third International" 1919-20 (never built), Rodchenko, Popova, Stepanova, El Lissitzky "Beat the Whites with the Red Wedge" 1919; merged art with revolutionary politics; suppressed by Stalinist socialist realism 1934+. Fluxus: early 1960s, Maciunas manifesto 1963; Yoko Ono "Cut Piece" 1964, Nam June Paik "TV Buddha" 1974, Joseph Beuys; dissolved art-object boundary. Political: Situationists 1957-1972 (Debord "The Society of the Spectacle" 1967, détournement, dérive); Punk 1970s; Riot Grrrl from 1991 (Kathleen Hanna's Bikini Kill, Bratmobile, Sleater-Kinney); current Pussy Riot 2011+, Latin American performance (Doris Salcedo, Tania Bruguera).`,
          vocab: [
            {
              word: `Futurism through current political avant-garde`,
              definition: `Futurism: Italian movement launched with Filippo Tommaso Marinetti's "Futurist Manifesto" in Le Figaro newspaper February 20, 1909. Marinetti + Futurists (Umberto Boccioni, Carlo Carrà, Luigi Russolo, Giacomo Balla, Gino Severini) embraced speed, technology, mechanization, violence. Manifesto claims: "We will glorify war, the world's only hygiene"; "A racing car... is more beautiful than the Victory of Samothrace." Aesthetics influenced subsequent abstraction. Political trajectory must be named: Marinetti became founding member of Italian Fascist party 1919, supported Mussolini through regime; Futurism substantially aligned with Italian fascism. Legacy complicated: real aesthetic accomplishment (Boccioni "Unique Forms of Continuity in Space" 1913) within explicit fascist commitments. Russian Constructivism: post-1917 Russian Revolution, art for revolutionary social transformation. Figures: Vladimir Tatlin 1885-1953 ("Monument to the Third International" 1919-20, 400m tower never built); Alexander Rodchenko 1891-1956; Liubov Popova 1889-1924; Varvara Stepanova 1894-1958; El Lissitzky 1890-1941 ("Beat the Whites with the Red Wedge" 1919). Worked on textiles, ceramics, books, posters, theater, architecture merging art and life. Stalin's consolidation 1928+ and socialist realism imposition 1934 substantially ended Constructivist freedom. Fluxus: international movement emerging early 1960s; Lithuanian-American architect George Maciunas "Fluxus Manifesto" 1963. Figures: Maciunas 1931-1978; Yoko Ono born 1933 ("Cut Piece" 1964); Nam June Paik 1932-2006 (Korean-American pioneer video artist, "TV Buddha" 1974); Joseph Beuys 1921-1986 (German, "How to Explain Pictures to a Dead Hare" 1965, "social sculpture"); La Monte Young; George Brecht 1926-2008 ("event scores"). Logic: art and life shouldn't be separated; boundary between artwork and ordinary action artificial. Political tradition: Situationist International 1957-1972 (Guy Debord "The Society of the Spectacle" 1967, "détournement" subversive recontextualization, "dérive" deliberately aimless urban wandering); substantially influential on May 1968 Paris. Punk 1970s (Sex Pistols 1975-1978, deliberate ugliness, anti-musicianship). Riot Grrrl 1991+ US (Bikini Kill / Kathleen Hanna, Bratmobile, Heavens to Betsy, Sleater-Kinney, zines, "girls to the front"). Current: Pussy Riot Russia 2011+; Latin American performance (Doris Salcedo, Tania Bruguera); Indigenous and decolonial movements globally. Pattern recurring across traditions: serious artists conclude mainstream art can't engage what's happening, break rules to make work that can engage, new techniques/subject matter produced, rest of art follows or rejects.`,
              audioPrompt: `Futurism was an Italian movement launched with Filippo Tommaso Marinetti's "Futurist Manifesto" published in Le Figaro newspaper on February 20, 1909, {name}. Marinetti and the Futurists embraced speed, technology, mechanization, violence as legitimate aesthetic subjects. The political trajectory needs naming honestly: Marinetti became a founding member of the Italian Fascist party in 1919 and supported Mussolini through the regime; Futurism as a movement substantially aligned with Italian fascism. The tradition's legacy is complicated: real aesthetic accomplishment within explicit fascist political commitments. Russian Constructivism emerged post-1917 with key figures including Vladimir Tatlin and his "Monument to the Third International" from 1919-20, a 400-meter tower planned to house revolutionary government, never built. Stalin's consolidation in 1928 and the imposition of "socialist realism" in 1934 substantially ended Constructivist freedom. Fluxus was an international movement emerging in the early 1960s, formally launched by George Maciunas with the "Fluxus Manifesto" in 1963. Key figures include Yoko Ono with "Cut Piece" from 1964, Nam June Paik with "TV Buddha" from 1974, and Joseph Beuys with "How to Explain Pictures to a Dead Hare" from 1965. The political avant-garde tradition includes the Situationist International from 1957 to 1972, Guy Debord's "The Society of the Spectacle" from 1967, Punk in the 1970s, Riot Grrrl from 1991 with bands including Bikini Kill, and current movements including Pussy Riot from 2011 onward and Latin American performance artists Doris Salcedo and Tania Bruguera.`,
            },
          ],
        },

        {
          id: `l2-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What This Tradition Lets You Do`,
          paragraphs: [
            `Knowing the avant-garde tradition substantially changes what's available to you as a creative maker. Three concrete payoffs.`,
            `First: you don't have to reinvent gestures that have been made. If you decide at 14 to make work that breaks meaning, you'll be repeating Dada (Zurich 1916) whether you know it or not; knowing Dada means you can engage what Dada already accomplished and push into new territory rather than re-discovering the gesture unawares. If you decide to make instruction-based work, you'll be working with what Fluxus and Yoko Ono made specific; knowing them means you can build on it. If you decide to make explicitly political performance, you'll be working with what the Situationists, Riot Grrrl, Pussy Riot, Tania Bruguera have built; knowing them means your work can be in conversation with substantial existing achievement.`,
            `Second: you can choose which logic of rule-breaking is yours rather than defaulting. Most aspiring artists who break rules don't know which logic they're operating from; they just react. The five perspectives ahead articulate distinct logics. Knowing which one is yours means you can develop the practice that logic supports: read its theorists, study its masters, engage its current practitioners, build community with people who share the framework. Skill-building becomes more focused; engagement with criticism becomes more productive; you waste less time.`,
            `Third: you can recognize what's not avant-garde when it's marketed as such. Substantial work currently marketed as "edgy" or "avant-garde" is actually quite conventional; it repeats gestures from 50-100 years ago without recognizing the repetition; it's avant-garde-adjacent commercial work rather than actual scouting. Knowing the tradition lets you see what's genuinely new vs what's pseudo-new. This sounds elitist; it's actually empowering. You stop being marketed-to as easily.`,
            `What the avant-garde tradition isn't going to give you. It isn't a guarantee that breaking rules produces good work; substantial avant-garde history is forgettable failure as well as substantial accomplishment. It isn't going to settle the question of how avant-garde and craft relate (the L01 positions remain in play; some avant-garde traditions have substantial craft, some don't). It isn't going to tell you whether your specific rule-breaking work will succeed; that depends on substance you have to bring to it. But it positions you to do the work seriously rather than reinventing it accidentally.`,
            `One specific framing for Caro and other readers in Latin American contexts. The Latin American avant-garde traditions (Brazilian Concrete Poetry from 1950s; Argentine Madí movement 1944+; Mexican muralism Diego Rivera + David Alfaro Siqueiros + José Clemente Orozco; Latin American magical realism; contemporary Latin American conceptualism and performance) deserve substantial engagement separately from Euro-American framings. Doris Salcedo (Colombian, born 1958): "Shibboleth" 2007 (167-meter crack in floor of Tate Modern Turbine Hall, marking colonial and racial violence); "A Flor de Piel" 2014; substantial international recognition. Tania Bruguera (Cuban, born 1968): "Tatlin's Whisper #6" performance series engaging Cuban political conditions. Beatriz González (Colombian, born 1932): substantial career engaging Colombian violence and political memory. Multiple other contemporary Latin American artists working in serious avant-garde traditions globally.`,
          ],
          image: `/voyager-assets/creative-arts/l2-s4-payoffs.webp`,
          imageCaption: `Three payoffs: don't reinvent gestures already made (Dada 1916, Fluxus 1960s, etc.); choose your logic of rule-breaking deliberately; recognize pseudo-avant-garde marketing. Latin American avant-garde deserves substantial engagement: Brazilian Concrete Poetry 1950s+; Argentine Madí 1944+; Mexican muralism (Rivera, Siqueiros, Orozco); magical realism; contemporary conceptualism. Specific current artists: Doris Salcedo (Colombian, "Shibboleth" 2007, 167-meter floor crack at Tate Modern; "A Flor de Piel" 2014); Tania Bruguera (Cuban, "Tatlin's Whisper #6" series); Beatriz González (Colombian); multiple others working in serious avant-garde traditions globally.`,
          vocab: [
            {
              word: `what the avant-garde tradition lets you do`,
              definition: `Three concrete payoffs. First: don't reinvent gestures already made. If you decide at 14 to make work breaking meaning you'll be repeating Dada (Zurich 1916) whether you know it or not; knowing means engaging what Dada already accomplished and pushing into new territory. Instruction-based work → Fluxus + Yoko Ono. Explicitly political performance → Situationists, Riot Grrrl, Pussy Riot, Tania Bruguera. Second: choose which logic of rule-breaking is yours rather than defaulting. Five distinct logics articulated in Perspectives ahead. Knowing which is yours means developing the practice that logic supports: reading theorists, studying masters, engaging current practitioners, building community with shared framework. Skill-building more focused, criticism more productive, less time wasted. Third: recognize what's not avant-garde when marketed as such. Substantial current work marketed as "edgy" or "avant-garde" repeats gestures from 50-100 years ago without recognition; pseudo-new rather than genuinely new. Knowing tradition reveals difference. What avant-garde tradition isn't: guarantee that rule-breaking produces good work (substantial history is forgettable failure); settlement of how avant-garde and craft relate (L01 positions remain in play); guarantee your specific work succeeds. But positions you to do work seriously rather than reinventing it accidentally. Latin American avant-garde traditions deserve separate engagement: Brazilian Concrete Poetry 1950s+; Argentine Madí 1944+; Mexican muralism (Diego Rivera, David Alfaro Siqueiros, José Clemente Orozco); Latin American magical realism; contemporary conceptualism and performance. Specific current artists: Doris Salcedo (Colombian, born 1958, "Shibboleth" 2007 167-meter crack in Tate Modern Turbine Hall marking colonial and racial violence; "A Flor de Piel" 2014); Tania Bruguera (Cuban, born 1968, "Tatlin's Whisper #6" performance series engaging Cuban political conditions); Beatriz González (Colombian, born 1932, substantial career on Colombian violence and political memory); multiple others in serious avant-garde traditions globally.`,
              audioPrompt: `Knowing the avant-garde tradition substantially changes what's available to you as a creative maker, {name}. Three concrete payoffs. First: you don't have to reinvent gestures that have been made. If you decide at 14 to make work that breaks meaning, you'll be repeating Dada from Zurich 1916 whether you know it or not; knowing Dada means you can engage what Dada already accomplished and push into new territory. Second: you can choose which logic of rule-breaking is yours rather than defaulting. The five perspectives ahead articulate distinct logics. Third: you can recognize what's not avant-garde when it's marketed as such. Substantial work currently marketed as "edgy" or "avant-garde" actually repeats gestures from 50 to 100 years ago without recognizing the repetition. Knowing the tradition lets you see what's genuinely new versus what's pseudo-new. One specific framing for Latin American readers. The Latin American avant-garde traditions deserve substantial engagement separately from Euro-American framings: Brazilian Concrete Poetry from the 1950s; Argentine Madí movement from 1944; Mexican muralism with Diego Rivera, David Alfaro Siqueiros, and José Clemente Orozco; Latin American magical realism. Doris Salcedo, born Colombian in 1958, created "Shibboleth" in 2007: a 167-meter crack in the floor of Tate Modern's Turbine Hall marking colonial and racial violence. Tania Bruguera, Cuban, born 1968, has worked with "Tatlin's Whisper" performance series engaging Cuban political conditions.`,
            },
          ],
        },

        {
          id: `l2-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Five voices ahead, each articulating a distinct logic for why rule-breaking matters. The voices don't fully agree. Engaging each on its terms is the work. By the end you'll know which logic of rule-breaking is most yours.`,
            `One framing. The five voices aren't representative of the entire avant-garde tradition; multiple other voices could speak (Constructivist political voice; Afrofuturist voice; queer avant-garde; eco-art; AI/digital avant-garde; many more). The five chosen show enough variety to make the multiple-logics point concrete. Treat them as starting points for engagement with the broader tradition.`,
            `Another framing. Engaging avant-garde traditions seriously at 12 builds capacity for serious creative work across decades. Most adults who attempt creative work haven't engaged these traditions; their work is substantially limited by what they don't know. Building the framework now positions you for serious engagement throughout your creative life regardless of which medium or tradition you ultimately work in.`,
            `One last framing. The avant-garde has costs. Genuine rule-breaking work is often rejected initially; substantial avant-garde artists died poor and unrecognized; ordinary social life can be hard for serious avant-garde practitioners. The tradition isn't romantic; it's serious. If you commit to working in an avant-garde tradition, you're committing to taking some early hits in service of work that might or might not be recognized later. That commitment is yours to make consciously, not by default. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l2-s5-before.webp`,
          imageCaption: `Five voices ahead. Distinct logics: shock and disturb (Dada, Punk); access deeper truth through breaking rational rules (Surrealism); embrace new technology/speed (Futurism with fascist trajectory); break art-object boundary (Fluxus); politicize art (Situationists, Riot Grrrl, current). Five voices aren't complete representation; multiple others could speak (Constructivism, Afrofuturism, queer avant-garde, eco-art, AI/digital, more). Avant-garde has costs: rejection, poverty, social difficulty. Commitment to working in tradition is conscious choice not default.`,
          vocab: [
            {
              word: `framing before perspectives`,
              definition: `Five voices ahead with distinct logics. Each represents serious avant-garde tradition with substantial defenders. Five aren't complete representation: multiple other voices could speak (Constructivist political voice; Afrofuturist; queer avant-garde; eco-art; AI/digital avant-garde; many more). Treat as starting points for broader engagement. Engaging avant-garde traditions seriously at 12 builds capacity for serious creative work across decades. Most adults who attempt creative work haven't engaged these traditions; their work substantially limited by what they don't know. Building framework now positions for serious engagement regardless of which medium or tradition you ultimately work in. Avant-garde has costs: genuine rule-breaking work often rejected initially; substantial avant-garde artists died poor and unrecognized; ordinary social life hard for serious practitioners. Tradition isn't romantic; it's serious. Committing to working in avant-garde tradition is committing to taking some early hits in service of work that might or might not be recognized later. Conscious commitment, not default.`,
              audioPrompt: `Five voices ahead, each articulating a distinct logic for why rule-breaking matters, {name}. The voices don't fully agree. Engaging each on its terms is the work. By the end you'll know which logic of rule-breaking is most yours. One framing. The five voices aren't representative of the entire avant-garde tradition; multiple other voices could speak. Another framing. Engaging avant-garde traditions seriously at 12 builds capacity for serious creative work across decades. Most adults who attempt creative work haven't engaged these traditions; their work is substantially limited by what they don't know. One last framing. The avant-garde has costs. Genuine rule-breaking work is often rejected initially; substantial avant-garde artists died poor and unrecognized; ordinary social life can be hard for serious avant-garde practitioners. The tradition isn't romantic; it's serious. If you commit to working in an avant-garde tradition, you're committing to taking some early hits in service of work that might or might not be recognized later.`,
            },
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l2-perspectives`,
          type: `perspectives`,
          headline: `Five Logics Of Rule-Breaking`,
          intro: `{name}, five voices on what rule-breaking is for. Each represents a serious avant-garde tradition with substantial defenders. The voices don't fully agree. Engage each on its terms.`,
          voices: [
            {
              id: `shock`,
              speaker: `Tristan Tzara (Dada theorist, Zurich/Paris) and the punk inheritance`,
              position: `Rule-breaking shocks the system. The shock is the point.`,
              quote: `"Dada means nothing... I write this manifesto to show that people can perform contrary actions together while taking one fresh gulp of air; I am against action; for continuous contradiction, for affirmation too, I am neither for nor against and I do not explain because I hate common sense."`,
              context: `Tzara's "Dada Manifesto" 1918 articulated the logic: the world (specifically the WWI world that produced 16-20 million deaths) had failed completely; any art that pretended to meaning, beauty, or seriousness within that failed framework was complicit; the appropriate response was attack: shock the system, disrupt complacency, refuse the comforting lies of inherited culture. The shock isn't gratuitous; it's diagnostic. By making work the inherited tradition can't categorize, the avant-garde reveals the tradition's inadequacy. Punk inherited this logic substantially: The Sex Pistols' deliberate offensiveness, Riot Grrrl's confrontational performances, Pussy Riot's church-altar political performances all use shock to reveal what mainstream culture wants to hide. Critique: shock can become its own convention; pure attack without alternative becomes nihilism; second-generation shock often loses the diagnostic edge that made first-generation shock productive.`,
            },
            {
              id: `unconscious`,
              speaker: `André Breton (Surrealist theorist, Paris) and the unconscious-access tradition`,
              position: `Rational rules suppress deeper truth. Breaking them accesses the unconscious where real reality lives.`,
              quote: `"I believe in the future resolution of these two states, dream and reality, which are seemingly so contradictory, into a kind of absolute reality, a surreality."`,
              context: `Breton's "Manifesto of Surrealism" 1924 articulated the logic. Rationalism is incomplete; the unconscious mind contains substantial truth that rational consciousness suppresses (Freud's influence is direct here); art that bypasses rational control accesses what rational art can't reach. Specific practices: automatic writing (writing without conscious control); collage and assemblage of images that produce unconscious resonance without rational coherence; dream documentation; "exquisite corpse" collaborative drawings where each artist could only see the previous artist's small contribution. Salvador Dalí's "paranoiac-critical method" pushed this further; deliberately inducing paranoid states to access unconscious imagery. Substantial subsequent influence: Abstract Expressionism (Jackson Pollock's drip paintings as automatic-writing visual equivalent); psychedelic art; current practices around contemplative and altered-state art. Critique: "access to deeper truth" claims aren't verifiable; can become self-indulgent; the framework can be used to dismiss legitimate criticism ("you don't understand my unconscious access"); cultural and contextual variation in what counts as "deeper" is substantial.`,
            },
            {
              id: `technology`,
              speaker: `The technological avant-garde (Marinetti's Futurism; current digital/AI movements)`,
              position: `Breaking rules embraces new technology, new speed, new possibility. Art has to engage what's actually happening or it becomes irrelevant museum work.`,
              quote: `"A racing car... is more beautiful than the Victory of Samothrace... We will sing of great crowds excited by work, by pleasure, and by riot; we will sing of the multicolored, polyphonic tides of revolution in the modern capitals; we will sing of the vibrant nightly fervor of arsenals and shipyards blazing with violent electric moons."`,
              context: `Marinetti's "Futurist Manifesto" 1909 articulated this voice's earliest version. Industrial technology, mechanization, speed, mass society are reality; art that pretends otherwise becomes nostalgic decoration. The logic has substantial subsequent versions: Constructivism applied it to revolutionary politics; subsequent technological avant-gardes (kinetic art; computer art from 1960s onward; net art from 1990s; current AI-collaborative art) work with successive technologies. Trevor Paglen, Hito Steyerl, Refik Anadol, multiple others currently work in this tradition. The voice's specific challenge: Marinetti's Futurism became substantially fascist (Marinetti was founding Italian Fascist 1919); the framework "embrace whatever technology and mass dynamics emerge" has historically lent itself to authoritarian outcomes. Engaging this voice seriously means engaging both the aesthetic productivity AND the political risks. Current AI art moment has these political stakes substantially in play.`,
            },
            {
              id: `boundary`,
              speaker: `George Maciunas (Fluxus theorist) and the anti-art-object tradition`,
              position: `The boundary between artwork and ordinary action is itself the problem. Break the boundary and art becomes life.`,
              quote: `"Fluxus art-amusement is the rear-guard without any pretension or urge to participate in the competition of 'one-upmanship' with the avant-garde. It strives for the monostructural and nontheatrical qualities of simple natural event, a game or a gag. It is the fusion of Spike Jones, vaudeville, gag, children's games and Duchamp."`,
              context: `Maciunas's "Fluxus Manifesto" 1963 articulated the logic. Inherited art categories (painting, sculpture, traditional performance) artificially separate art from life. The separation is the problem; ordinary action can be art when framed appropriately. Specific practices: "event scores" (brief instructions for actions that anyone can perform); fluxconcerts (performances of mundane actions framed as concerts); Yoko Ono's instruction pieces; Joseph Beuys's "social sculpture" framework (society itself as artwork being collaboratively shaped). Substantial influence on subsequent performance art, social practice (Rick Lowe's Project Row Houses in Houston; Theaster Gates's Rebuild Foundation in Chicago; current participatory art globally), relational aesthetics (Nicolas Bourriaud 1998 framework). Critique: dissolving art-life boundary can dissolve what makes art valuable in the first place; "ordinary action framed as art" can become elite performance of ordinariness while remaining within elite institutions; tradition has been substantially absorbed into MFA-program practice in ways that contradict its anti-institutional origins.`,
            },
            {
              id: `political`,
              speaker: `Guy Debord (Situationist), Kathleen Hanna (Riot Grrrl), Tania Bruguera (contemporary), and the political-action tradition`,
              position: `Rule-breaking is for political transformation. Art that doesn't transform anything is complicit. Break the rules to change the world.`,
              quote: `"In societies dominated by modern conditions of production, life is presented as an immense accumulation of spectacles. Everything that was directly lived has receded into a representation. The spectacle is not a collection of images; it is a social relation between people that is mediated by images." (Debord, "The Society of the Spectacle" 1967, opening thesis)`,
              context: `Debord's Situationist analysis articulated the strongest version. Capitalism produces "spectacle," image-mediated reality that displaces direct experience and substantially controls political consciousness. Art's potential function is to break the spectacle: through "détournement" (subversive recontextualization that reveals hidden meanings); through "dérive" (deliberately aimless wandering that disrupts capitalist time/space); through political agitation that brings hidden conditions into view. Situationists substantially influenced May 1968 Paris uprising. Subsequent inheritance: Punk's anti-establishment political dimensions; Riot Grrrl's feminist political practice (Kathleen Hanna of Bikini Kill making explicit political demands through punk performance); Pussy Riot's Russian Orthodox Church performance February 21, 2012 (members imprisoned 2 years for political dissent through performance); Tania Bruguera's Cuban work confronting state restrictions; current activist art globally including climate art, decolonial art, current Black Lives Matter-adjacent visual production. The voice's substantial challenge: claiming political effectiveness for art is often empirically wrong (most "political art" doesn't actually change politics; the relationship between aesthetic gestures and political outcomes is contested); positioning art as fundamentally political can flatten artistic considerations that don't reduce to politics; tradition has substantial internal disagreements about what counts as effective political art.`,
            },
          ],
          synthesisPrompt: `You've heard five logics of rule-breaking: shock and diagnose (Dada/Punk); access unconscious truth (Surrealism); embrace technological reality (Futurism/digital); break art-life boundary (Fluxus); political transformation (Situationist/Riot Grrrl/current). Each has serious defenders and serious limits. Which logic is most yours and why? What does the voice you most identify with let you do that the others wouldn't? What does it miss that another voice would catch?`,
          reflectionPrompt: `If you decide to make rule-breaking work, which voice would you work from? What about your own context (Latin American heritage, current moment, age, family creative inheritance) shapes that?`,
        },

        {
          id: `l2-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `"Avant-garde" comes from a military term for the scouts who go ahead of the main army. Why is that origin a good description of what avant-garde art does?`,
              options: [
                `It means avant-garde artists are literally soldiers who fight in real wars.`,
                `It means the art is always violent and meant to frighten the people who see it.`,
                `It means the work scouts ahead — testing new territory the rest of culture may follow into later.`,
                `It means avant-garde art always wins and proves every older style completely wrong.`,
              ],
              correctIndex: 2,
              explanation: `"Avant-garde" is a military term (scouts ahead of the main force) that Saint-Simon borrowed for art. The function it names is scouting territory — testing new ground the broader culture may move into later — which is what distinguishes a genuine avant-garde from mere provocation. The distractors take the metaphor too literally (real soldiers, violence) or mistake it for a claim of superiority.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Dada was founded in 1916, during World War I. Knowing that context, what was the logic behind its attacks on reason and tradition?`,
              options: [
                `The war had exposed inherited rationalism as a failure, so attacking that tradition was the point.`,
                `The artists simply wanted to be famous and chose shock as the fastest route to it.`,
                `They were bored and made nonsense for fun, with no connection to the world around them.`,
                `They believed traditional painting skills were too hard for them to ever learn.`,
              ],
              correctIndex: 0,
              explanation: `Dada launched at the Cabaret Voltaire in Zurich on February 5, 1916, and spread to several cities. Its logic was diagnostic: the catastrophe of WWI seemed to expose the failure of the "rational" civilization that produced it, so the fitting response was to attack the inherited tradition itself. The distractors reduce a deliberate response to fame-seeking, boredom, or lack of skill.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Frida Kahlo was claimed by the Surrealists, but she rejected the label, saying "I painted my own reality." Why does the lesson treat that detail as important?`,
              options: [
                `It supposedly proves that Kahlo was not really a serious or skilled artist at all.`,
                `It shows Surrealism only ever happened in Europe and never reached Mexico.`,
                `It shows she had no idea what Surrealism was when she made her work.`,
                `It marks serious engagement, not generic art-history: she resisted a label others imposed.`,
              ],
              correctIndex: 3,
              explanation: `Surrealism formally launched with André Breton's 1924 manifesto and was Freud-influenced, with a substantial Mexico connection. Kahlo's rejection of the label ("I painted my own reality") is the kind of specific, resisting detail that separates serious engagement from generic survey treatment — it respects her self-understanding rather than filing her under a European movement. The distractors insult her, erase the Mexico link, or misread her refusal as ignorance.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Futurism produced real artistic innovation, and its founder later aligned with fascism. What does the lesson say is the honest way to engage it?`,
              options: [
                `Only discuss its art and never mention the fascist alignment, to keep things positive.`,
                `Hold both at once — name the real innovation AND the fascist trajectory; ignoring either is dishonest.`,
                `Only condemn the fascism and refuse to admit it produced any real art at all.`,
                `Decide that politics and art never connect, so the alignment simply doesn't matter.`,
              ],
              correctIndex: 1,
              explanation: `Marinetti published the Futurist manifesto in Le Figaro in 1909; he aligned with fascism by 1919. Honest engagement holds both: treating Futurism as pure aesthetic innovation while ignoring the fascist trajectory is dishonest, and treating it as only fascism while ignoring real artistic accomplishment is also dishonest. The distractors each drop one half of that truth.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Dada attacked the art tradition; Fluxus went further. What was the additional move Fluxus made?`,
              options: [
                `It returned art to careful oil painting and rejected everything Dada had done.`,
                `It made art more expensive and exclusive so only collectors could own it.`,
                `It dissolved the boundary between art and everyday life, treating events and instructions as art.`,
                `It proved that only music, and never any visual art form, could ever truly be avant-garde.`,
              ],
              correctIndex: 2,
              explanation: `Fluxus (Maciunas's 1963 manifesto; Yoko Ono's "Cut Piece" 1964; Nam June Paik's video art; Joseph Beuys's "social sculpture") dissolved the art-object boundary that Dada had merely attacked — events, instructions, and ordinary actions became the art, with lasting influence on performance and social practice. The distractors reverse the move (back to painting, more exclusive) or wrongly limit it to one medium.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Guy Debord's "society of the spectacle" describes how images and consumption can replace real life. How does the political avant-garde respond, and where does that lineage show up later?`,
              options: [
                `It withdraws from the world entirely; later this shows up only in quiet landscape painting.`,
                `It uses tactics like détournement and dérive to disrupt the spectacle — a lineage through punk and Pussy Riot.`,
                `It fully embraces the spectacle, on the view that advertising is the very highest form of art.`,
                `It insists art must avoid politics, which is why no protest movements ever used it.`,
              ],
              correctIndex: 1,
              explanation: `Debord's "The Society of the Spectacle" (1967) is foundational for the political avant-garde. The Situationists' specific practices — détournement (repurposing existing media) and dérive (drifting through the city to break habitual perception) — aimed to disrupt the spectacle, and that lineage runs through May 1968 Paris, punk, Riot Grrrl, Pussy Riot, and Tania Bruguera. The distractors invert the tradition into withdrawal, surrender, or apolitical art.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `The lesson insists Latin American avant-garde be engaged on its own terms. Which best reflects that, rather than treating it as an appendix to the European story?`,
              options: [
                `Knowing Salcedo's "Shibboleth" (2007) and Bruguera's work as major art in their own right.`,
                `Assuming Latin American artists simply followed whatever Europe did a few years later.`,
                `Treating absolutely all of it as mere folk craft rather than serious avant-garde work.`,
                `Listing just one European movement and then assuming it covers the whole region too.`,
              ],
              correctIndex: 0,
              explanation: `Figures like Doris Salcedo (whose "Shibboleth," 2007, opened a crack across the floor of Tate Modern), Tania Bruguera ("Tatlin's Whisper"), and Beatriz González are foundational contemporary artists in their own right. Engaging them with specific works — rather than as a delayed echo of Europe or as folk craft — is the work the lesson asks for. The distractors are exactly the dismissive framings it rejects.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson says knowing the avant-garde tradition gives three concrete payoffs. Which is a real one — and what's the lesson's actual goal?`,
              options: [
                `It lets you prove avant-garde art is always better than traditional art.`,
                `It basically guarantees that your own art will go on to become famous and influential.`,
                `It lets you recognize pseudo-avant-garde marketing — the goal being deliberate engagement.`,
                `It means you must reject all older styles once you understand the tradition.`,
              ],
              correctIndex: 2,
              explanation: `The three payoffs are concrete skills: avoiding reinventing what's been done, choosing your moves deliberately, and recognizing pseudo-avant-garde marketing (rebellion as a sales pitch). Crucially, the lesson's goal isn't to prefer the avant-garde — it's to engage it deliberately if you engage it at all. The distractors turn a thinking skill into a ranking, a fame guarantee, or a mandate to reject tradition.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The avant-garde is a single coherent position with a single logic for why rule-breaking matters.`,
              correctAnswer: false,
              explanation: `False. The avant-garde tradition contains multiple distinct logics for why rule-breaking matters, each with serious defenders and real accomplishments. Five this lesson engages: (1) shock and diagnose (Dada, Cabaret Voltaire, Zurich, February 5, 1916; punk and Riot Grrrl inheritance); (2) access deeper unconscious truth (Surrealism, Breton's 1924 manifesto, Freud-influenced, automatic writing); (3) embrace new technology and speed (Futurism, Marinetti's 1909 Le Figaro manifesto, with its fascist trajectory worth naming; today's digital and AI avant-gardes); (4) break the art-object boundary entirely (Fluxus, Maciunas 1963, Ono's "Cut Piece" 1964, Paik's video art, Beuys's "social sculpture"); (5) politicize art for transformation (Situationist International 1957-1972, Debord's "Society of the Spectacle" 1967, détournement and dérive, May 1968, punk, Riot Grrrl from 1991, Pussy Riot, Tania Bruguera). Others exist too: Constructivist (Tatlin, Rodchenko, Popova, Stepanova, El Lissitzky), Afrofuturist, queer avant-garde, eco-art, Indigenous and decolonial. Treating the avant-garde as one position obscures this variation; serious engagement means recognizing which logic is operating and what's at stake in it.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 17, interviewing for a competitive arts program. The interviewer asks, "What's your relationship to the avant-garde tradition?" Based on this lesson, what's the strongest kind of answer?`,
              options: [
                `Say you've never heard of it but you're sure you'd be great at it anyway.`,
                `Name the five distinct logics with their founders and works, commit to one with real reasons, engage Latin American traditions on their own terms, and frame it as a foundation you'll keep developing.`,
                `Say the avant-garde is whatever feels rebellious, so there's nothing specific to know.`,
                `Insist the avant-garde is over and that only traditional craft matters now.`,
              ],
              correctIndex: 1,
              explanation: `Applied avant-garde literacy. A strong answer shows you can distinguish the five logics (shock/diagnose, unconscious truth, technology/speed, dissolving the art-object, politicization) with specific founders, dates, and works; make a personal commitment to one logic with reasons; engage Latin American traditions (Salcedo, Bruguera, González) on their own terms; acknowledge the tradition's costs and limits; and frame the commitment as a foundation for growth, not a fixed identity. The distractors are the empty, vague, and dismissive non-answers a serious program would not value.`,
            },
          ]
        },

        {
          id: `l2-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-voice`, category: `Your voice`, prompt: `Which of the five voices was most yours and why? What about your life right now (what you want to make, what you're frustrated with, what your generation faces) makes that voice resonate?` },
            { id: `reflect-fascism`, category: `Futurism's political trajectory`, prompt: `Futurism produced real aesthetic accomplishment AND aligned with Italian fascism. How do you sit with that combination? What does it teach about engaging avant-garde traditions honestly?` },
            { id: `reflect-mexico`, category: `Mexico City surrealism`, prompt: `Surrealism's substantial relocation to Mexico City during WWII, Kahlo's rejection of the Surrealist label ("I never painted dreams. I painted my own reality"), and the subsequent magical realism tradition show how avant-garde traditions get transformed in new contexts. What does this teach about how creative traditions move across cultures?` },
            { id: `reflect-latin`, category: `Latin American avant-garde`, prompt: `Doris Salcedo, Tania Bruguera, Beatriz González represent serious contemporary Latin American avant-garde work. What does engaging these artists alongside Euro-American figures change about your sense of where avant-garde tradition is happening now?` },
            { id: `reflect-cost`, category: `The cost of working in this tradition`, prompt: `The avant-garde has costs: rejection, poverty, social difficulty. If you commit to working seriously in this tradition, you're committing to taking some early hits. Are you willing? What changes if you commit consciously vs by default?` },
            { id: `reflect-current`, category: `Your generation's avant-garde`, prompt: `If your generation needs new avant-garde work for new problems (climate, AI, current political dynamics), what might it look like? What gestures might still need to be made?` },
          ],
        },

        {
          id: `l2-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Knowing the tradition is foundation. Two paths beyond.`,
          familyActivity: {
            title: `Family Avant-Garde Conversation`,
            duration: `60-75 minutes`,
            description: `Share the five voices with your family. Most adults don't know the avant-garde traditions in any specific detail; the conversation often surfaces what frameworks family members are operating from when they engage (or reject) "modern art" they find confusing. For Latin American families specifically, the conversation can engage Mexican muralism (Rivera, Siqueiros, Orozco (substantial public murals you can find images of online), magical realism (García Márquez "Cien años" 1967 if read in your family, Isabel Allende, Juan Rulfo), and contemporary Latin American figures (Salcedo, Bruguera, González). Many families have artistic inheritance that connects to one of the five voices without naming it; the conversation can make that conscious.`,
          },
          projectOption: {
            title: `Make Five Works In Five Voices, 10 weeks (optional)`,
            duration: `10 weeks, ~60 minutes per session`,
            description: `Make five works each exemplifying one of the five voices deliberately. Weeks 1-2 Dada/shock: make something deliberately disruptive that breaks expected meaning (a collage of unrelated text fragments; a "manifesto" of contradictory claims; a deliberately confusing performance for family). Weeks 3-4 Surrealist/unconscious: make something through automatic process (timed automatic writing; a drawing made with eyes closed; an exquisite-corpse collaboration with a friend). Weeks 5-6 Technology/Futurist: make something engaging current technology seriously (an AI-collaborative piece; a digital art experiment; a work about speed or mechanization). Weeks 7-8 Fluxus/boundary: make an event score (a card with instructions for a simple action that can be performed by anyone; the card is the work). Weeks 9-10 Political: make work explicitly engaging a political condition you care about (climate; current Latin American politics; women's rights; a local concern). At the end: which one was most yours? Which surprised you?`,
            offerToParent: `Parent: opt your kid into this project. Making five deliberate avant-garde works at 12-13 builds capacity to engage rule-breaking traditions across decades. The project requires substantial parental support for materials and conversation.`,
          },
          identityQuestion: `If you become someone who knows the avant-garde tradition: five voices, specific founders and works, Latin American traditions alongside Euro-American: what does that change about how you'll engage galleries, films, music, your own creative work across the rest of your life?`,
        },

        {
          id: `l2-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can name five distinct logics of rule-breaking and engage which is mine.`,
            `An artist whose voice is the political tradition: Debord, Riot Grrrl, Bruguera. Art is for transformation.`,
            `Someone who engages Latin American avant-garde (Salcedo, Bruguera, González) alongside Euro-American traditions.`,
          ],
          saveKey: `identity_responses_ca_11_12_02`,
        },

        {
          id: `l2-celebration`,
          type: `celebration`,
          guideText: `{name}. Second Creative Arts lesson done. You have framework for five logics of avant-garde rule-breaking: shock and diagnose (Dada, Cabaret Voltaire Zurich Feb 5 1916 with Hugo Ball, Tristan Tzara, Hans Arp, Sophie Taeuber-Arp, Marcel Janco, Richard Huelsenbeck; punk inheritance through Sex Pistols and Riot Grrrl); access unconscious truth (Surrealism, André Breton's "Manifesto of Surrealism" October 1924, Dalí "Persistence of Memory" 1931, Magritte "Treachery of Images" 1929, Carrington, Varo, Miró, Max Ernst; Mexico City as substantial hub with Kahlo's rejection of the label); embrace technology and speed (Futurism, Marinetti's manifesto in Le Figaro Feb 20 1909, Boccioni "Unique Forms" 1913, with explicit fascist alignment from 1919 needing honest naming; current digital + AI movements continuing); break art-object boundary (Fluxus, Maciunas's manifesto 1963, Yoko Ono "Cut Piece" 1964, Nam June Paik "TV Buddha" 1974, Joseph Beuys "social sculpture"); political transformation (Situationist International 1957-1972 with Debord's "The Society of the Spectacle" 1967 and détournement + dérive, May 1968 Paris, Punk, Riot Grrrl from 1991 with Bikini Kill and Kathleen Hanna, Pussy Riot from 2011, Tania Bruguera, current activist globally). You can name Latin American avant-garde substantially: Brazilian Concrete Poetry, Argentine Madí, Mexican muralism (Rivera, Siqueiros, Orozco), magical realism (García Márquez "Cien años" 1967), contemporary Salcedo + Bruguera + González. Eighteen lessons to go. Next: music and consciousness, where neuroscience meets philosophy meets traditional practice. Onward, {name}. — Muse`,
          badge: `avant-garde-literate`,
          badgeName: `Avant-Garde Literate`,
          xpEarned: 75,
          competencies: [
            `Defines avant-garde with military-origin precision (Saint-Simon ~1825 borrowing) and "scouting territory" function`,
            `Articulates Dada with specific founding (Cabaret Voltaire Zurich Feb 5 1916, founders named) and logic (WWI-driven anti-art response)`,
            `Articulates Surrealism with Breton's manifesto Oct 1924, key artists (Dalí, Magritte, Carrington, Varo, Miró, Ernst), Mexico relationship, Kahlo's rejection`,
            `Names Futurism's complicated legacy (Marinetti's 1909 manifesto + aesthetic accomplishment + 1919 fascist alignment)`,
            `Articulates Fluxus (Maciunas 1963 manifesto, Yoko Ono, Nam June Paik, Joseph Beuys) and anti-art-object logic`,
            `Articulates political tradition (Situationist 1957-1972, Debord "Society of the Spectacle" 1967, Punk, Riot Grrrl, Pussy Riot, Tania Bruguera)`,
            `Engages Latin American avant-garde substantially (Salcedo, Bruguera, González, Brazilian Concrete Poetry, Argentine Madí, Mexican muralism, magical realism)`,
            `Commits to one voice as primary logic while engaging others seriously`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Music and Consciousness`,
            hook: `Neuroscience meets philosophy meets traditional practice. Three tiers of sources for engaging music's effect on mind.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L02 ${VERSION}] "${l.title}" mags=${mags} voices=${persp?.voices?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
