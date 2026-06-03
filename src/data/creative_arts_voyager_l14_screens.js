// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L14 — Synesthesia
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Perception, Neuroscience, Creativity, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort claims about synesthesia: real,
// documented neurological trait vs. the myths and romantic overclaims around it).
// Contract matches L03/L06/L08/L11/L13: sources[] with tier/title/type/context/quote/
// questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// HONESTY: synesthesia is REAL (Tier A), a genuine, studied perceptual trait. The
// lesson neither dismisses it as fake nor inflates it into "the secret of genius" or
// something you can buy/unlock. Builds on L13 (real brain science vs. brain hype).
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l14-v1";

const CREATIVE_ARTS_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-14`,
      title: `Synesthesia`,
      duration: 35,
      xpReward: 75,
      badge: `synesthesia-literate`,
      badgeName: `Synesthesia Literate`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, imagine that for you the number 7 was always green, that hearing a trumpet flooded your vision with orange, or that the name "Carolina" tasted faintly of vanilla. For a small number of real people, this is not imagination, it is simply how they perceive the world, every day, automatically. It is called synesthesia, and it is one of the most fascinating things the human brain does. Last lesson you learned to think clearly about your own brain and to spot brain hype. This lesson is the perfect place to practice, because synesthesia sits right at the line you have been learning to walk: it is absolutely real, a genuine, studied trait, and it is also surrounded by myths, romantic exaggerations, and even products claiming to "unlock" it. Today you learn what synesthesia actually is, why it is real, how it has shaped real art, and how to tell the genuine, amazing truth from the inflated story. Onward.`,
          headline: `Synesthesia`,
          subtitle: `When senses blend: the real trait, and the myths around it. Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Synesthesia Actually Is`,
          paragraphs: [
            `Start with the real thing, clearly defined, because it is genuinely amazing and needs no exaggeration. Synesthesia is a real neurological trait in which one kind of sense or concept automatically and consistently triggers another. For a person with synesthesia, a stimulus that most people experience in one way, a sound, a letter, a number, also reliably produces an extra experience: they might see a specific color whenever they hear a certain note, or always perceive the letter A as red, or feel that Tuesday sits in a particular spot in space. It is not a choice, not pretending, and not a metaphor; it is how their perception genuinely works.`,
            `Two features make it clearly real rather than imagined. First, it is automatic and involuntary, the person does not decide that 7 is green, it simply is, every time, whether they want it or not. Second, it is consistent, a given synesthete will report the same pairings over and over across years, so if their letter A is red today, it will still be red when tested again much later, which is exactly what researchers find when they check. This consistency over time is strong evidence that something genuine is happening in perception, not that someone is making it up, and it is one of the main ways scientists confirm synesthesia is real.`,
            `There are many forms, and learning a few shows how varied it is. The most studied include seeing colors when hearing sounds or music, seeing letters and numbers as having inherent colors (one of the most common types), and experiencing time units like days or months as having specific locations in space. Other forms are rarer, like tasting words or feeling that shapes have personalities. Synesthesia is not a disorder or a problem to be fixed, most synesthetes simply experience the world this way and many find it pleasant or useful, and it is not the same as hallucinating, because the synesthete knows the letter is not "really" colored on the page; they just also experience the color. It is a genuine, well-documented variation in how some human brains perceive, no more and no less.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s1-what.webp`,
          imageCaption: `The real thing, clearly defined, genuinely amazing with no exaggeration needed. Synesthesia is a real neurological trait where one kind of sense or concept automatically and consistently triggers another: a person might see a specific color whenever they hear a certain note, always perceive the letter A as red, or feel Tuesday sits in a particular spot in space. Not a choice, not pretending, not metaphor, it is how their perception genuinely works. Two features prove it is real, not imagined: (1) automatic and involuntary (7 simply IS green, every time, whether they want it or not); (2) consistent (a synesthete reports the same pairings across years, confirmed when researchers re-test). Many forms: colors from sounds/music, colored letters and numbers (most common), days or months located in space; rarer ones like tasting words. Not a disorder, not hallucinating (they know the letter is not really colored on the page, they just also experience the color), a genuine, well-documented variation in perception.`,
          vocab: [
            {
              word: `what synesthesia actually is`,
              definition: `Synesthesia is a real neurological trait in which one kind of sense or concept automatically and consistently triggers another. For a person with synesthesia, a stimulus most people experience in one way (a sound, a letter, a number) also reliably produces an extra experience: they might see a specific color whenever they hear a certain note, always perceive the letter A as red, or feel that Tuesday sits in a particular spot in space. It is not a choice, not pretending, and not a metaphor; it is how their perception genuinely works. Two features make it clearly real rather than imagined. First, it is automatic and involuntary: the person does not decide that 7 is green, it simply is, every time, whether they want it or not. Second, it is consistent: a given synesthete reports the same pairings over and over across years, so if their letter A is red today it will still be red when tested again much later, which is exactly what researchers find when they check, and this consistency over time is strong evidence that something genuine is happening in perception rather than being made up. There are many forms: the most studied include seeing colors when hearing sounds or music, seeing letters and numbers as having inherent colors (one of the most common types), and experiencing time units like days or months as having specific locations in space; rarer forms include tasting words or feeling that shapes have personalities. Synesthesia is not a disorder or a problem to be fixed (most synesthetes simply experience the world this way, and many find it pleasant or useful), and it is not the same as hallucinating, because the synesthete knows the letter is not "really" colored on the page; they just also experience the color. It is a genuine, well-documented variation in how some human brains perceive.`,
              audioPrompt: `Start with the real thing, {name}, clearly defined, because it is genuinely amazing and needs no exaggeration. Synesthesia is a real neurological trait in which one kind of sense or concept automatically and consistently triggers another. For a person with synesthesia, a stimulus that most people experience in one way, a sound, a letter, a number, also reliably produces an extra experience: they might see a specific color whenever they hear a certain note, or always perceive the letter A as red, or feel that Tuesday sits in a particular spot in space. It is not a choice, not pretending, and not a metaphor; it is how their perception genuinely works. Two features make it clearly real rather than imagined. First, it is automatic and involuntary: the person does not decide that 7 is green, it simply is, every time, whether they want it or not. Second, it is consistent: a given synesthete will report the same pairings over and over across years, so if their letter A is red today, it will still be red when tested again much later, which is exactly what researchers find when they check. This consistency over time is strong evidence that something genuine is happening in perception. There are many forms: seeing colors when hearing music, seeing letters and numbers as having inherent colors, and experiencing days or months as having specific locations in space. Synesthesia is not a disorder, and it is not the same as hallucinating, because the synesthete knows the letter is not really colored on the page; they just also experience the color. It is a genuine, well-documented variation in how some human brains perceive.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why We Know It's Real`,
          paragraphs: [
            `This is the perfect lesson to practice the skill from Lesson 13, telling real brain science from hype, because here the careful science says the thing is real, which is its own important lesson: being a clear thinker does not mean doubting everything, it means believing what the evidence supports. And the evidence for synesthesia is genuinely strong, which is why scientists accept it. Understanding why is more valuable than just being told to believe it.`,
            `The strongest evidence is that consistency test. If you ask a synesthete which color goes with the letter A, then ask again months or even years later without warning, they give the same answer at far higher rates than people who are just making associations up on the spot, who cannot remember their "made-up" answers later. That reliable, repeatable consistency is hard to fake and is exactly what you would expect if the pairing is a genuine feature of their perception. Researchers also use clever indirect tests: for example, a synesthete who sees the number 2 as red can pick out 2s hidden among 5s faster than other people, because to them the 2s "pop" in color, a real performance difference you cannot just pretend into existence.`,
            `Brain imaging adds another layer, and this is where you apply Lesson 13 carefully. Studies suggest that in synesthetes' brains, areas that process one kind of information (say, letters) and areas that process another (say, color) are more connected or more co-active than usual, which fits the idea that the senses are genuinely "talking" to each other more. Here is the honest calibration: this real imaging evidence supports that something distinctive is happening in synesthetes' brains, which is solid, while the exact details of how it works are still being researched, which is the appropriate humility. So synesthesia is firmly real, confirmed by consistency tests, performance tests, and brain studies together, even as scientists keep refining the precise mechanism. Believing it because the evidence is strong is exactly the clear thinking this band has been building.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s2-real.webp`,
          imageCaption: `The perfect place to practice Lesson 13's skill, telling real science from hype, because here the careful science says the thing is REAL, and clear thinking means believing what the evidence supports, not doubting everything. The evidence is strong. The strongest: the consistency test, ask a synesthete which color goes with A, ask again months or years later unannounced, and they give the same answer far more reliably than people inventing associations on the spot (who cannot recall their made-up answers), hard to fake. Clever indirect tests too: a synesthete who sees 2 as red picks out 2s hidden among 5s faster, because the 2s "pop" in color, a real performance difference you cannot pretend. Brain imaging (apply Lesson 13 carefully): areas processing letters and color appear more connected or co-active in synesthetes, supporting that something distinctive is happening (solid), while the exact mechanism is still being researched (appropriate humility). Firmly real, mechanism still being refined.`,
          vocab: [
            {
              word: `why we know synesthesia is real`,
              definition: `This is the perfect lesson to practice the Lesson 13 skill of telling real brain science from hype, because here the careful science says the thing is real, which is its own important lesson: being a clear thinker does not mean doubting everything, it means believing what the evidence supports, and the evidence for synesthesia is genuinely strong, which is why scientists accept it. The strongest evidence is the consistency test: if you ask a synesthete which color goes with the letter A, then ask again months or even years later without warning, they give the same answer at far higher rates than people who make associations up on the spot (who cannot remember their invented answers later), and that reliable, repeatable consistency is hard to fake and exactly what you would expect if the pairing is a genuine feature of their perception. Researchers also use clever indirect tests: for example, a synesthete who sees the number 2 as red can pick out 2s hidden among 5s faster than other people, because to them the 2s "pop" in color, a real performance difference you cannot just pretend into existence. Brain imaging adds another layer (where you apply Lesson 13 carefully): studies suggest that in synesthetes' brains, areas that process one kind of information (say letters) and areas that process another (say color) are more connected or co-active than usual, fitting the idea that the senses are genuinely talking to each other more. The honest calibration: this imaging evidence supports that something distinctive is happening in synesthetes' brains (solid), while the exact details of how it works are still being researched (appropriate humility). So synesthesia is firmly real, confirmed by consistency tests, performance tests, and brain studies together, even as scientists keep refining the precise mechanism, and believing it because the evidence is strong is exactly the clear thinking this band has been building.`,
              audioPrompt: `This is the perfect lesson to practice the skill from Lesson 13, {name}, telling real brain science from hype, because here the careful science says the thing is real, which is its own important lesson: being a clear thinker does not mean doubting everything, it means believing what the evidence supports. And the evidence for synesthesia is genuinely strong. The strongest evidence is the consistency test. If you ask a synesthete which color goes with the letter A, then ask again months or even years later without warning, they give the same answer at far higher rates than people who are just making associations up on the spot, who cannot remember their made-up answers later. That reliable, repeatable consistency is hard to fake and is exactly what you would expect if the pairing is a genuine feature of their perception. Researchers also use clever indirect tests: a synesthete who sees the number 2 as red can pick out 2s hidden among 5s faster than other people, because to them the 2s pop in color, a real performance difference you cannot just pretend into existence. Brain imaging adds another layer, and this is where you apply Lesson 13 carefully. Studies suggest that in synesthetes' brains, areas that process letters and areas that process color are more connected than usual. This imaging evidence supports that something distinctive is happening, which is solid, while the exact details of how it works are still being researched, which is the appropriate humility. So synesthesia is firmly real, even as scientists keep refining the precise mechanism.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Synesthesia And Art`,
          paragraphs: [
            `Synesthesia connects beautifully to art, and this is where it gets genuinely inspiring, with one important caution we will get to. A number of artists and musicians have had synesthesia and have said it shaped their work. Some painters who saw colors when they heard music tried to put that experience onto the canvas, painting what music "looked like" to them. Some composers who experienced sound and color together built those links into how they thought about music. For these artists, synesthesia was a real source of imagery and connection, a private sensory world they could draw from, and the art it inspired can be fascinating.`,
            `Even for the large majority of people who do not have synesthesia, the idea has been creatively powerful, and this is a subtler and important point. Artists without synesthesia have long played with crossing the senses on purpose, asking what a color "sounds" like or what music "tastes" like, using it as a deliberate creative technique rather than an automatic trait. This is a meaningful distinction: a synesthete automatically and involuntarily perceives the crossing, while a non-synesthete artist can choose to explore sensory crossings as a creative tool. Both can make wonderful art, but they are doing different things, one is reporting a genuine perception, the other is using a deliberate metaphor or technique, and it is worth keeping that honest.`,
            `Here is the careful caution, applying everything from Lesson 13. It is true and lovely that synesthesia has inspired real art. It is NOT true that synesthesia is "the secret of creative genius" or that all great artists had it or that having it makes you brilliant. Most great artists did not have synesthesia, most synesthetes are not famous artists, and the trait is a fascinating perceptual variation, not a superpower or a guarantee of talent. The romantic overclaim, "synesthesia is the hidden key to genius", is exactly the kind of real-seed-inflated-to-magic move you learned to spot: a genuine, cool fact (some artists had synesthesia and it shaped their work) stretched into a false universal claim (it is the source of artistic genius). Hold the real, inspiring truth and decline the inflated version, the same skill, now applied to a trait instead of a ratio.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s3-art.webp`,
          imageCaption: `Synesthesia connects beautifully to art, genuinely inspiring, with one caution. Some painters who saw colors when hearing music tried to put that onto canvas, painting what music "looked like" to them; some composers built sound-color links into how they thought about music. For them synesthesia was a real source of imagery, a private sensory world to draw from. A subtler point: even people WITHOUT synesthesia have used sensory-crossing creatively on purpose (asking what a color "sounds" like), as a deliberate technique, not an automatic trait. Keep that honest, a synesthete reports a genuine automatic perception; a non-synesthete artist chooses a metaphor/technique; both make wonderful art doing different things. The caution (applying Lesson 13): true and lovely that synesthesia inspired real art; NOT true that it is "the secret of creative genius" or that all great artists had it. Most great artists did not; most synesthetes are not famous artists. The romantic overclaim is real-seed-inflated-to-magic. Hold the real truth, decline the inflated version.`,
          vocab: [
            {
              word: `synesthesia and art, and the genius overclaim`,
              definition: `Synesthesia connects beautifully to art, which is genuinely inspiring, with one important caution. A number of artists and musicians have had synesthesia and said it shaped their work: some painters who saw colors when they heard music tried to put that experience onto the canvas, painting what music "looked like" to them, and some composers who experienced sound and color together built those links into how they thought about music. For these artists, synesthesia was a real source of imagery and connection, a private sensory world they could draw from. Even for the large majority of people who do not have synesthesia, the idea has been creatively powerful, and this is a subtler important point: artists without synesthesia have long played with crossing the senses on purpose, asking what a color "sounds" like or what music "tastes" like, using it as a deliberate creative technique rather than an automatic trait. The distinction matters: a synesthete automatically and involuntarily perceives the crossing, while a non-synesthete artist can choose to explore sensory crossings as a creative tool; both can make wonderful art, but one is reporting a genuine perception and the other is using a deliberate metaphor or technique, and it is worth keeping that honest. The careful caution (applying Lesson 13): it is true and lovely that synesthesia has inspired real art, but it is NOT true that synesthesia is "the secret of creative genius," that all great artists had it, or that having it makes you brilliant. Most great artists did not have synesthesia, most synesthetes are not famous artists, and the trait is a fascinating perceptual variation, not a superpower or a guarantee of talent. The romantic overclaim ("synesthesia is the hidden key to genius") is exactly the real-seed-inflated-to-magic move: a genuine cool fact (some artists had it and it shaped their work) stretched into a false universal claim. Hold the real, inspiring truth and decline the inflated version.`,
              audioPrompt: `Synesthesia connects beautifully to art, {name}, and this is where it gets genuinely inspiring, with one important caution we will get to. A number of artists and musicians have had synesthesia and have said it shaped their work. Some painters who saw colors when they heard music tried to put that experience onto the canvas, painting what music looked like to them. Some composers who experienced sound and color together built those links into how they thought about music. For these artists, synesthesia was a real source of imagery and connection. Even for the large majority of people who do not have synesthesia, the idea has been creatively powerful. Artists without synesthesia have long played with crossing the senses on purpose, asking what a color sounds like or what music tastes like, using it as a deliberate creative technique rather than an automatic trait. This is a meaningful distinction: a synesthete automatically perceives the crossing, while a non-synesthete artist can choose to explore sensory crossings as a creative tool. Both can make wonderful art, but they are doing different things. Here is the careful caution. It is true and lovely that synesthesia has inspired real art. It is not true that synesthesia is the secret of creative genius, or that all great artists had it, or that having it makes you brilliant. Most great artists did not have synesthesia, and most synesthetes are not famous artists. The romantic overclaim, that synesthesia is the hidden key to genius, is exactly the kind of real-seed-inflated-to-magic move you learned to spot. Hold the real, inspiring truth and decline the inflated version.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Myths And The "Unlock It" Hype`,
          paragraphs: [
            `Now the myths, because a real, fascinating trait attracts exaggeration like nothing else, and you are now well equipped to sort it. The first myth is the genius claim you just met: that synesthesia is the secret of creativity. The truth is gentler and truer, it is a cool perceptual variation that some creative people happen to have, which has sometimes inspired wonderful work, and that is plenty without inflating it into a superpower. A clear thinker can find synesthesia genuinely amazing without pretending it is magic.`,
            `The second and more commercial myth is the "unlock your synesthesia" hype, and this is where Lesson 13's brain-hype radar should light up immediately. You will find apps, courses, and programs claiming to "awaken your hidden synesthesia," "train your brain to see sounds," or "unlock synesthetic genius," usually for a price. Here is the honest picture: genuine synesthesia is generally something people have from early in life, often described as lifelong, not a skill you buy and switch on in a weekend. While people without synesthesia can absolutely practice creative sensory associations, deliberately linking colors to sounds as an exercise, that is a learnable creative technique, not the same as developing the automatic, involuntary, consistent perception that defines real synesthesia. So a product promising to "unlock real synesthesia" is usually inflating that ordinary, learnable association practice into a magical-sounding promise to sell it, the exact pattern from the neuroscience lesson.`,
            `Watch the familiar tells one more time, because they transfer perfectly. The hype takes a real, cool fact (synesthesia exists and is fascinating; people can practice sensory associations) and inflates it into a sellable magical promise ("unlock your hidden synesthetic genius in 21 days"), often dressed in brain-science language to lower your guard. The honest line has the same two sides as always: real synesthesia is genuinely real and worth being amazed by, and practicing creative sensory crossings is a genuinely useful technique, while products promising to "unlock" or "install" true synesthesia fast are selling hype. You lose nothing real by rejecting the hype, the actual trait stays fascinating, the actual technique stays available, and you simply stop being sold a magical version of either.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s4-hype.webp`,
          imageCaption: `The myths, because a real fascinating trait attracts exaggeration, and you can now sort it. Myth 1, the genius claim (synesthesia is the secret of creativity), truth is gentler: a cool perceptual variation some creative people happen to have, which sometimes inspired wonderful work, amazing without being magic. Myth 2, the commercial "unlock your synesthesia" hype (apps/courses to "awaken your hidden synesthesia," "train your brain to see sounds," for a price), where Lesson 13's brain-hype radar should light up. Honest picture: genuine synesthesia is generally lifelong, present from early on, not a skill you buy and switch on; people without it can practice creative sensory associations (a learnable technique), but that is NOT the automatic, involuntary, consistent perception that defines real synesthesia. The familiar tells: real cool fact inflated into a sellable magical promise ("unlock synesthetic genius in 21 days"), dressed in brain-science language. Two sides: the real trait and the real technique both stay; reject only the magical "unlock it fast" product. You lose nothing real.`,
          vocab: [
            {
              word: `the synesthesia myths and "unlock it" hype`,
              definition: `A real, fascinating trait attracts exaggeration, and you are now equipped to sort it. The first myth is the genius claim: that synesthesia is the secret of creativity. The truth is gentler and truer, it is a cool perceptual variation that some creative people happen to have, which has sometimes inspired wonderful work, and that is plenty without inflating it into a superpower; a clear thinker can find synesthesia genuinely amazing without pretending it is magic. The second, more commercial myth is the "unlock your synesthesia" hype, where Lesson 13's brain-hype radar should light up: apps, courses, and programs claiming to "awaken your hidden synesthesia," "train your brain to see sounds," or "unlock synesthetic genius," usually for a price. The honest picture: genuine synesthesia is generally something people have from early in life, often described as lifelong, not a skill you buy and switch on in a weekend; while people without synesthesia can absolutely practice creative sensory associations (deliberately linking colors to sounds as an exercise), that is a learnable creative technique, not the same as developing the automatic, involuntary, consistent perception that defines real synesthesia, so a product promising to "unlock real synesthesia" is usually inflating ordinary, learnable association practice into a magical-sounding promise to sell it. Watch the familiar tells: the hype takes a real, cool fact (synesthesia exists and is fascinating; people can practice sensory associations) and inflates it into a sellable magical promise ("unlock your hidden synesthetic genius in 21 days"), often dressed in brain-science language to lower your guard. The honest line has the same two sides as always: real synesthesia is genuinely real and worth being amazed by, and practicing creative sensory crossings is a genuinely useful technique, while products promising to "unlock" or "install" true synesthesia fast are selling hype, and you lose nothing real by rejecting the hype.`,
              audioPrompt: `Now the myths, {name}, because a real, fascinating trait attracts exaggeration like nothing else, and you are now well equipped to sort it. The first myth is the genius claim you just met: that synesthesia is the secret of creativity. The truth is gentler and truer, it is a cool perceptual variation that some creative people happen to have, which has sometimes inspired wonderful work, and that is plenty without inflating it into a superpower. The second and more commercial myth is the "unlock your synesthesia" hype, and this is where Lesson 13's brain-hype radar should light up immediately. You will find apps, courses, and programs claiming to awaken your hidden synesthesia, train your brain to see sounds, or unlock synesthetic genius, usually for a price. Here is the honest picture: genuine synesthesia is generally something people have from early in life, often described as lifelong, not a skill you buy and switch on in a weekend. While people without synesthesia can absolutely practice creative sensory associations, that is a learnable creative technique, not the same as developing the automatic, involuntary, consistent perception that defines real synesthesia. So a product promising to unlock real synesthesia is usually inflating ordinary, learnable association practice into a magical-sounding promise to sell it. The honest line has the same two sides as always: real synesthesia is genuinely real and worth being amazed by, and practicing creative sensory crossings is a genuinely useful technique, while products promising to unlock true synesthesia fast are selling hype. You lose nothing real by rejecting the hype.`,
            },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You learned what synesthesia really is, a genuine neurological trait where one sense or concept automatically and consistently triggers another, and why we know it is real: the consistency test, performance tests like spotting 2s among 5s, and brain imaging, held with honest calibration (real that something distinctive happens, still being researched exactly how). You learned how it has genuinely inspired art, while keeping the honest difference between a synesthete's automatic perception and an artist's deliberate sensory technique. And you learned the myths, the "secret of genius" overclaim and the commercial "unlock it" hype, and how to spot both with your Lesson 13 radar.`,
            `Now the source-evaluation screen will hand you several real or realistic claims about synesthesia, a careful science explanation, a person describing their own genuine experience, a "synesthesia is the key to genius" overclaim, an "unlock your synesthesia in 21 days" product, and ask you to sort them by how much you should trust them and why. The special skill here is one you have been building toward all band: applying real belief to a real thing while still rejecting the inflated claims around it, never sliding into either "it's all fake" or "it's all magic."`,
            `One last thought to carry. Synesthesia is a beautiful reminder that the truth is usually more interesting than the hype, not less. The real trait, some people genuinely, automatically, consistently perceive the world with the senses braided together, is astonishing on its own, a window into how varied human minds actually are. You do not need to inflate it into a genius-superpower to find it amazing, and you do not need to doubt it to be a careful thinker. Holding the genuine wonder and the clear skepticism together, amazed by the real thing, unfooled by the inflated version, is the exact balance this whole band has been teaching, and synesthesia is one of the loveliest places to practice it. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s5-before.webp`,
          imageCaption: `Threads together. What synesthesia really is: a genuine neurological trait where one sense or concept automatically and consistently triggers another. Why we know it is real: the consistency test, performance tests (spotting 2s among 5s faster), brain imaging, held with honest calibration (something distinctive happens; mechanism still researched). How it inspired art, keeping the honest difference between a synesthete's automatic perception and an artist's deliberate sensory technique. The myths: "secret of genius" overclaim and commercial "unlock it" hype, spotted with the Lesson 13 radar. The source-evaluation screen ahead hands you claims to sort by trust. The special skill: apply real belief to a real thing while rejecting inflated claims, never sliding into "all fake" or "all magic." Last thought: truth is usually MORE interesting than hype, the real trait is astonishing on its own. Amazed by the real, unfooled by the inflated, the band's core balance.`,
          vocab: [
            {
              word: `amazed by the real, unfooled by the inflated`,
              definition: `The synthesis before the source-evaluation screen. You learned what synesthesia really is: a genuine neurological trait where one sense or concept automatically and consistently triggers another (seeing colors for sounds, letters as having inherent colors, time units located in space). You learned why we know it is real: the consistency test (same pairings reported across years, hard to fake), performance tests (a synesthete spotting 2s among 5s faster because the 2s "pop" in color), and brain imaging suggesting more connection between the relevant brain areas, all held with honest calibration that something distinctive is genuinely happening while the exact mechanism is still being researched. You learned how synesthesia has genuinely inspired art (painters putting the colors of music onto canvas, composers building sound-color links), while keeping the honest difference between a synesthete's automatic, involuntary perception and a non-synesthete artist's deliberate sensory-crossing technique. And you learned the myths: the "secret of creative genius" overclaim (most great artists did not have it, most synesthetes are not famous artists) and the commercial "unlock your synesthesia" hype (real synesthesia is generally lifelong, not a skill you buy fast), both spotted with the Lesson 13 brain-hype radar. The source-evaluation screen will hand you several claims to sort by trust, and the special skill is applying real belief to a real thing while rejecting the inflated claims around it, never sliding into "it's all fake" or "it's all magic." The last thought: truth is usually more interesting than hype, not less. The real trait is astonishing on its own, a window into how varied human minds are, so you need neither inflate it into a superpower nor doubt it to be a careful thinker. Holding genuine wonder and clear skepticism together, amazed by the real thing and unfooled by the inflated version, is the exact balance this whole band has been teaching.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You learned what synesthesia really is, a genuine neurological trait where one sense or concept automatically and consistently triggers another, and why we know it is real: the consistency test, performance tests like spotting 2s among 5s, and brain imaging, held with honest calibration that something distinctive happens while the exact mechanism is still being researched. You learned how it has genuinely inspired art, while keeping the honest difference between a synesthete's automatic perception and an artist's deliberate sensory technique. And you learned the myths, the secret-of-genius overclaim and the commercial unlock-it hype, and how to spot both with your Lesson 13 radar. Now the source-evaluation screen will hand you several claims about synesthesia and ask you to sort them by how much you should trust them and why. The special skill here is applying real belief to a real thing while still rejecting the inflated claims around it, never sliding into either it's all fake or it's all magic. One last thought to carry. Synesthesia is a beautiful reminder that the truth is usually more interesting than the hype, not less. The real trait, some people genuinely, automatically, consistently perceive the world with the senses braided together, is astonishing on its own. You do not need to inflate it into a genius-superpower to find it amazing, and you do not need to doubt it to be a careful thinker. Amazed by the real thing, unfooled by the inflated version, is the exact balance this whole band has been teaching.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l14-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Claims About Synesthesia`,
          intro: `{name}, five claims about synesthesia. For each, decide how much you should trust it and why. The special challenge: the trait itself is REAL, so this is not about doubting everything, it is about believing the well-supported truth while rejecting the inflated genius-claims and the "unlock it" products around it. Believe what the evidence supports; reject what it does not.`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `A careful science explanation of synesthesia and the consistency test`,
              type: `Fact-checked science source`,
              context: `A well-sourced explainer says synesthesia is a real neurological trait in which one sense or concept automatically and consistently triggers another, that researchers confirm it largely through consistency over time (synesthetes give the same pairings when retested months or years later) and performance tests, and that the exact brain mechanism is still being studied.`,
              quote: `"Synesthesia is a genuine, involuntary perceptual trait. We confirm it through consistency over time and performance tests, while research continues into exactly how it works in the brain."`,
              questions: [
                `Why should you trust this, and what does the consistency test actually show?`,
                `How does it model "believe what's supported, stay humble on what isn't"?`,
                `Is admitting "we're still studying the mechanism" a weakness here?`,
              ],
              evaluation: `High trust, this is Tier A. It states the well-supported truth, synesthesia is a genuine, involuntary, consistent perceptual trait, and explains the actual evidence: the consistency test shows synesthetes report the same pairings when retested without warning months or years later, far more reliably than people inventing associations on the spot, which is hard to fake and strong evidence the trait is real. It models exactly the right epistemics: confidently affirming what the evidence supports (the trait is real) while staying humble about what is still open (the precise mechanism). Admitting "we're still studying the mechanism" is not a weakness but a mark of honesty, just as in Lesson 13, real expertise is confident where the evidence is strong and careful where it is not. This is what trustworthy science on a real phenomenon sounds like.`,
            },
            {
              id: `s2`,
              tier: `A`,
              title: `A synesthete describing their own genuine experience`,
              type: `Primary-source first-hand account`,
              context: `A person with synesthesia describes, plainly and without drama, that they have always seen letters and numbers as having specific colors, that A has been red for as long as they can remember, that it is automatic and not something they chose, and that they know the letter is not "really" colored on the page, they simply also see the color.`,
              quote: `"A has always been red to me. I didn't decide it, it just is, and it's been the same my whole life. I know it's not really colored on the page. I just also see red."`,
              questions: [
                `What makes this a strong first-hand source?`,
                `Which details match the scientific markers of real synesthesia?`,
                `How is this different from someone claiming a dramatic "superpower"?`,
              ],
              evaluation: `High trust as a first-hand account, and notice how it lines up with the science. It is a primary source: a person describing their own direct, lifelong experience, which is the strongest evidence about that experience. The details match the scientific markers precisely, automatic ("I didn't decide it"), consistent ("the same my whole life"), and clearly not hallucination ("I know it's not really colored on the page, I just also see red"), which is exactly how researchers describe genuine synesthesia. It is also notably undramatic, the person is not claiming a superpower or genius, just describing how they perceive, which actually makes it more credible, not less. This is what a real account of a real trait sounds like: specific, consistent, matter-of-fact, and matching the documented features, the opposite of a hyped "I have magic powers" story.`,
            },
            {
              id: `s3`,
              tier: `overclaim`,
              title: `"Synesthesia is the secret of all creative genius"`,
              type: `Romantic overclaim`,
              context: `An article or video claims that synesthesia is the hidden key to creative genius, that the greatest artists and musicians all had it, and that it is the source of true artistic brilliance, implying that creativity comes from this special trait.`,
              quote: `"The secret behind every great artist? Synesthesia. It's the hidden neurological gift that separates true creative geniuses from everyone else."`,
              questions: [
                `Which part is the real seed, and which part is the inflation?`,
                `Why is "all great artists had it" checkably false?`,
                `Does rejecting this overclaim mean denying synesthesia inspires art?`,
              ],
              evaluation: `Low trust, this is the romantic overclaim, the real-seed-inflated-to-magic pattern from Lesson 12. The real seed: some artists and musicians genuinely had synesthesia and it shaped their work, true and cool. The inflation: that it is "the secret of all creative genius" and that the greatest artists "all had it," which is checkably false, most great artists did not have synesthesia, and most people with synesthesia are not famous artists, so it is neither necessary nor sufficient for creativity. Crucially, rejecting this overclaim does NOT mean denying that synesthesia inspires art, it absolutely has, for the artists who had it; it means refusing to inflate "some creative people had this cool trait" into "this trait is the source of genius." Keep the lovely real fact, drop the magical universal claim, exactly the skill you have practiced all band.`,
            },
            {
              id: `s4`,
              tier: `hype (product)`,
              title: `"Unlock your hidden synesthesia in 21 days!"`,
              type: `Product / program marketing`,
              context: `An app or course promises to "awaken the synesthesia hidden in your brain," "train you to truly see sounds and taste colors," and "unlock synesthetic genius in just 21 days," using neuroscience-sounding language and selling it as a path to creativity, for a fee.`,
              quote: `"Everyone has dormant synesthesia. Our neuroscience-based program awakens it in 21 days, unlocking the sensory genius hidden inside you. Train your brain to truly see sound!"`,
              questions: [
                `What real things is this inflating, and into what false promise?`,
                `How is "practicing sensory associations" different from "unlocking real synesthesia"?`,
                `Spot the Lesson 13 tells here.`,
              ],
              evaluation: `Low trust, this is brain hype, straight out of the Lesson 13 playbook. It inflates two real things, that synesthesia exists and is fascinating, and that people can practice creative sensory associations, into a false magical promise: "awaken your dormant synesthesia and unlock sensory genius in 21 days." The key distinction it blurs: practicing sensory associations (deliberately linking colors to sounds as a creative exercise) is a real, learnable technique, but it is not the same as the automatic, involuntary, lifelong, consistent perception that defines genuine synesthesia, which is generally not something you "switch on" as an adult through a course. The Lesson 13 tells are all here: "neuroscience-based" decoration to borrow authority, the "21 days" magic timeline, and "genius" inflation. Reject the product while keeping both real things: genuine synesthesia stays fascinating, and sensory-association practice stays a genuinely useful creative tool, you just stop paying for a magical version of either.`,
            },
            {
              id: `s5`,
              tier: `B`,
              title: `An article on an artist who used sensory crossing as a deliberate technique`,
              type: `Arts journalism`,
              context: `A reported article describes a contemporary artist who does NOT have synesthesia but deliberately explores crossing the senses in their work, asking what music might "look" like or building art around sensory associations as a chosen creative method, and the article is careful to distinguish this deliberate technique from the involuntary trait.`,
              quote: `"The artist doesn't have synesthesia. Instead, they deliberately explore sensory crossings as a technique, imagining what a sound might look like, which they're careful to distinguish from the involuntary condition."`,
              questions: [
                `Why is this trustworthy, and what important distinction does it keep clear?`,
                `Is using sensory crossing as a technique "less real" than having synesthesia?`,
                `How does keeping these separate help you think clearly?`,
              ],
              evaluation: `Solid trust, this is good Tier B, and it is valuable precisely because it keeps a distinction the hype loves to blur. It accurately reports that the artist does not have synesthesia but uses deliberate sensory crossing as a chosen creative technique, and explicitly distinguishes that from the involuntary trait, which is exactly the honest line from the lesson. Using sensory crossing as a technique is not "less real" or lesser art, it is simply a different thing: a deliberate creative method rather than an automatic perception, and both can produce wonderful work. Keeping them separate helps you think clearly because it stops two errors at once, you do not mistake every artist who "thinks in color and sound" for a synesthete, and you do not dismiss non-synesthetic sensory art as fake. The article models accurate, non-inflating arts journalism: it celebrates the creative technique without falsely claiming the artist has the neurological trait.`,
            },
          ],
          synthesisPrompt: `After sorting all five: synesthesia is real, yet two of these sources were untrustworthy. What is your rule for believing a real thing while still rejecting the inflated claims around it? And what is the actual difference between having synesthesia and using sensory-crossing as a creative technique? In 5-6 sentences.`,
          reflectionPrompt: `This lesson asked you to believe something (synesthesia is real) while doubting other things (the genius claim, the "unlock it" product), all on the same topic. Where else in life do you need to hold belief and skepticism about the same subject at once, instead of going all-in on "true" or "fake"?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is synesthesia, and what two features show it is real rather than imagined?`,
              options: [
                `Random`,
                `Synesthesia is a real neurological trait in which one kind of sense or concept automatically and consistently triggers another, so a person might see a specific color whenever they hear a certain note, always perceive the letter A as red, or feel that a day of the week sits in a particular spot in space. It is not a choice, not pretending, and not a metaphor; it is how their perception genuinely works. Two features show it is real rather than imagined. First, it is automatic and involuntary: the person does not decide that 7 is green, it simply is, every time, whether they want it or not. Second, it is consistent: a given synesthete reports the same pairings over and over across years, so if their A is red today it will still be red when tested again much later. It is also not the same as hallucinating, because the synesthete knows the letter is not really colored on the page, they just also experience the color, a genuine, well-documented variation in how some human brains perceive.`,
                `Just imagination`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Synesthesia is a real trait where one sense or concept automatically triggers another. It is shown real by being automatic/involuntary and consistent over years, and it differs from hallucination (the synesthete knows the letter is not really colored, they just also see the color).`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the strongest evidence that synesthesia is real, and why is it hard to fake?`,
              options: [
                `Random`,
                `The strongest evidence is the consistency test. If you ask a synesthete which color goes with the letter A, then ask again months or even years later without warning, they give the same answer at far higher rates than people who simply make associations up on the spot, because made-up associations are not remembered reliably later, while a genuine perceptual pairing stays stable. That reliable, repeatable consistency over long stretches of time is very hard to fake and is exactly what you would expect if the pairing is a real feature of perception. Researchers also use clever indirect tests: a synesthete who sees the number 2 as red can pick out 2s hidden among 5s faster than other people, because to them the 2s visually "pop" in color, a real performance difference you cannot just pretend into existence. Brain imaging adds further support, suggesting more connection between the relevant brain areas, with the honest note that the exact mechanism is still being researched. Together, these make synesthesia firmly real.`,
                `Just people's word`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The consistency test: synesthetes give the same pairings when retested months or years later, unlike people inventing associations (who cannot recall them). Plus performance tests (spotting 2s among 5s faster) and imaging. Hard to fake, and exactly what a real perceptual trait predicts.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the honest relationship between synesthesia and art?`,
              options: [
                `Random`,
                `It is true and lovely that synesthesia has genuinely inspired real art: some painters who saw colors when they heard music tried to put that experience onto the canvas, and some composers built sound-color links into how they thought about music, drawing on a real private sensory world. Even people without synesthesia have used sensory crossing creatively on purpose, asking what a color "sounds" like as a deliberate technique. But it is NOT true that synesthesia is "the secret of creative genius," that all great artists had it, or that having it makes you brilliant, because most great artists did not have synesthesia and most synesthetes are not famous artists, so it is a fascinating perceptual variation, not a superpower or guarantee of talent. The honest move is to hold the real, inspiring truth (it has shaped wonderful work for the artists who had it) while declining the inflated claim (it is the source of all genius), the same real-seed-inflated-to-magic skill from the geometry lesson, now applied to a trait.`,
                `Just makes you a genius`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Synesthesia genuinely inspired real art (the real seed), but it is not "the secret of genius", most great artists lacked it and most synesthetes are not famous artists (the inflation). Keep the lovely real fact, drop the magical universal claim.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the difference between having synesthesia and using "sensory crossing" as a creative technique?`,
              options: [
                `Random`,
                `A synesthete automatically and involuntarily perceives the crossing: they do not choose to see the color or feel the link, it simply happens, consistently, as a genuine feature of their perception, usually for as long as they can remember. A non-synesthete artist, by contrast, can deliberately explore sensory crossings as a chosen creative tool, imagining what a sound might look like or building art around color-sound associations on purpose, as a technique rather than an automatic perception. Both can make wonderful art, but they are doing genuinely different things: one is reporting a real, involuntary perceptual experience, and the other is using a deliberate metaphor or method. Using sensory crossing as a technique is not "less real" or lesser art, it is simply not the same as having the neurological trait, and keeping the two separate prevents two errors at once: mistaking every artist who "thinks in color and sound" for a synesthete, and dismissing non-synesthetic sensory art as fake or inferior.`,
                `Just the same thing`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `A synesthete automatically and involuntarily perceives the crossing; a non-synesthete artist deliberately uses sensory crossing as a chosen technique. Both make real art, but one is a genuine perception and the other a method, keeping them separate prevents two opposite errors.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why should your "brain hype" radar from Lesson 13 light up at an "unlock your hidden synesthesia in 21 days" product?`,
              options: [
                `Random`,
                `Because it follows the exact brain-hype pattern. It takes real things, synesthesia exists and is fascinating, and people can practice creative sensory associations, and inflates them into a false magical promise: "awaken your dormant synesthesia and unlock sensory genius in 21 days." The key distinction it blurs is that practicing sensory associations is a real, learnable creative technique, but it is not the same as the automatic, involuntary, lifelong, consistent perception that defines genuine synesthesia, which is generally not something an adult "switches on" through a course. The Lesson 13 tells are all present: "neuroscience-based" language used as decoration to borrow authority, a magic timeline ("21 days"), and "genius" inflation. The honest response keeps both real things while rejecting the product: genuine synesthesia stays genuinely fascinating, and sensory-association practice stays a useful creative tool, you simply decline to pay for a magical-sounding version that promises to install a lifelong perceptual trait in three weeks.`,
                `Just costs money`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `It inflates real things (synesthesia exists; sensory-association practice is learnable) into a magical promise ("unlock dormant synesthesia, genius, 21 days"), with neuro-decoration and a magic timeline, the Lesson 13 tells. Genuine synesthesia is generally lifelong, not switched on by a course.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is synesthesia a good lesson in the idea that "being a clear thinker doesn't mean doubting everything"?`,
              options: [
                `Random`,
                `Because synesthesia is genuinely real, well-supported by consistency tests, performance tests, and brain imaging, so the clear-thinking move here is to believe it, not doubt it. This matters because skepticism is sometimes mistaken for doubting everything, but real critical thinking means believing what the evidence supports and rejecting what it does not, calibrating your confidence to the actual evidence. On the same topic, you simultaneously believe the well-supported trait, reject the unsupported "secret of genius" overclaim, and reject the "unlock it in 21 days" product, which shows that belief and skepticism are not opposites but parts of the same skill: aiming each at the right claim. A thinker who doubts everything would wrongly dismiss the real, fascinating trait; a thinker who believes everything would fall for the genius myth and the product. The mature position holds them apart: amazed by and convinced of the real thing, unfooled by the inflated claims around it.`,
                `Just believe it all`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Synesthesia is well-supported, so clear thinking means believing it, while still rejecting the genius overclaim and the "unlock it" product on the same topic. Belief and skepticism are the same skill aimed at the right claims, not blanket doubt or blanket trust.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is a synesthete's matter-of-fact, undramatic description of their experience MORE credible, not less?`,
              options: [
                `Random`,
                `Because genuine synesthesia is, for the people who have it, simply how they perceive, not a dramatic superpower, so an account that describes it plainly ("A has always been red, I didn't decide it, I know it's not really on the page, I just also see red") matches how the real trait actually shows up. The details in such an account line up exactly with the scientific markers: automatic ("I didn't decide it"), consistent ("the same my whole life"), and clearly not hallucination ("I know it's not really colored on the page"). By contrast, someone framing synesthesia as a thrilling "magic power that makes me a genius" is leaning toward the inflated story rather than the real trait, which is a reason for more caution, not less. The matter-of-fact tone is credible precisely because real synesthetes generally are not amazed by their own perception, it is just normal for them, so the undramatic, specific, marker-matching account is exactly what a true first-hand report sounds like.`,
                `Just sounds boring`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Real synesthesia is just normal perception for the person, so a plain, specific account that matches the scientific markers (automatic, consistent, not hallucination) rings true, while a "thrilling superpower/genius" framing leans toward the inflated story and warrants more caution.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does the lesson mean by "the truth is usually more interesting than the hype, not less"?`,
              options: [
                `Random`,
                `It means the real trait, that some people genuinely, automatically, and consistently perceive the world with the senses braided together, seeing colors in music or letters, feeling time laid out in space, is astonishing on its own, a real window into how varied human minds actually are. You do not need to inflate it into a "secret of genius" superpower to find it amazing, and inflating it actually makes it worse, because the magical version collapses the moment you check it (most great artists did not have it; you cannot buy it in 21 days), while the real version stays fascinating under any amount of scrutiny. This mirrors the geometry lesson: the true story is richer than the myth because it survives examination, a fake key opens nothing, a real one opens real doors. So the mature stance is to keep all the genuine wonder at the real trait while declining the inflated claims, and the reward is a wonder that is both amazing and accurate, which cannot be knocked down by the next person who actually looks closely.`,
                `Just be amazed`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The real trait, genuinely perceiving senses braided together, is astonishing on its own and survives scrutiny, while the inflated "secret of genius" version collapses when checked. Accurate wonder beats magical hype, the same lesson as sacred geometry.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because some products that claim to "unlock synesthesia" are hype, you should conclude that synesthesia itself is probably fake or exaggerated.`,
              correctAnswer: false,
              explanation: `False, and this is the central balance of the lesson. The fact that some products and articles inflate or exploit synesthesia does not make the trait itself fake, it just means those specific claims are unreliable, exactly as the false "right-brain personality" myth did not make all brain science useless in Lesson 13. Synesthesia is genuinely real and well-supported: synesthetes give the same sense-pairings when retested without warning months or years later (the consistency test), they show real performance differences like spotting a colored "2" among "5"s faster, and brain imaging suggests more connection between the relevant areas, all converging on the same conclusion. So the clear-thinking move is to hold two things at once on the same topic: believe the well-supported trait, and reject the inflated claims around it (the "secret of genius" overclaim and the "unlock it in 21 days" product). Concluding "synesthesia is fake because some claims about it are hype" would be the cynical overcorrection that throws away a real, fascinating, evidence-backed phenomenon along with the nonsense, which is its own failure of clear thinking. Believing what the evidence supports while rejecting what it does not, even about the very same subject, is exactly the skill, the real trait stays real, and only the inflated claims get dropped.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you are 13. A classmate insists they have synesthesia and that it makes them a genius who will obviously be a famous artist; meanwhile another classmate says synesthesia is "totally fake, nobody really sees colors in music, they're just making it up." Both turn to you. Using this whole lesson, what do you actually think and say?`,
              options: [
                `"Just pick a side"`,
                `Several things, held together, because both classmates are partly right and partly wrong, and the honest answer threads between them in a way this lesson prepared you for exactly. First, correct the "it's totally fake" classmate, gently but clearly, because synesthesia is genuinely real and well-supported: it is not people making things up, it is a documented neurological trait confirmed by the consistency test (synesthetes give the same sense-pairings when retested months or years later, which people inventing associations cannot do), by performance tests (a synesthete who sees a "2" as red can spot 2s among 5s faster because they visually pop), and by brain imaging suggesting more connection between the relevant areas. So "nobody really sees colors in music" is just wrong, and dismissing the whole trait as fake is the cynical error of doubting something real. Second, correct the "it makes me a genius who'll obviously be famous" classmate, also gently, because that is the romantic overclaim the lesson warned about: synesthesia is a fascinating perceptual variation, but it is not the secret of creative genius and it does not guarantee talent or fame, since most great artists did not have synesthesia and most synesthetes are not famous artists, so having it is genuinely cool but is not a golden ticket. Third, separate the two questions that are getting tangled, which is the real skill: "is synesthesia real?" (yes, strongly supported) and "does having it make you a genius?" (no, that is the inflation), are completely different claims, and you can answer the first with belief and the second with skepticism without contradiction. Fourth, be fair to the first classmate's actual experience while still puncturing the overclaim: if they genuinely have synesthesia, that is real and interesting and worth being curious about, and you can take their perception seriously without endorsing their prediction that it makes them a future famous genius, those are two different things, and respecting the trait does not require swallowing the myth. Fifth, model the lesson's core balance out loud, something like: "Synesthesia is real, that's well proven, so I believe you probably do experience that. But it being real doesn't mean it's a genius-power, most great artists didn't have it and most people who have it aren't famous, so it's a cool way your brain works, not a guarantee you'll be a famous artist, that part is up to practice, like anything." Sixth, hold the deepest takeaway: this is a perfect real-life case of the whole band's skill, believing what the evidence supports (the real trait) while rejecting the inflated claims around it (the genius myth), and refusing both the "it's all fake" cynicism and the "it's all magic" credulity. The most useful thing you can do is not pick a side but show both classmates that the accurate picture is more interesting than either of their extremes: synesthesia is genuinely real and genuinely fascinating, and it is not a superpower, and both of those are true at once.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Applied "believe the real, reject the inflated" on the same topic. The move is to correct the "it's fake" classmate (synesthesia is well-supported by consistency tests, performance tests, and imaging) AND the "it makes me a genius" classmate (it is a fascinating trait, not the secret of genius, most great artists lacked it and most synesthetes are not famous), by separating "is it real?" (yes) from "does it make you a genius?" (no). Refusing both cynicism and credulity is the band's core skill.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Had you heard of synesthesia before? Did you assume it was real, exaggerated, or made up? What changed when you saw the actual evidence, the consistency test, the 2s-among-5s test? Did learning it is real surprise you more, or learning the genius claim is a myth?` },
            { id: `reflect-perception`, category: `How you perceive`, prompt: `Most people do not have synesthesia, but everyone has small sensory associations (a song that feels "warm," a word that feels "sharp"). What sensory crossings, if any, do you notice in yourself? How is that different from the automatic, consistent trait of real synesthesia?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson asked you to believe a real thing while doubting the hype around it, on the same topic. Which is harder for you, believing what is genuinely supported, or rejecting an exciting claim that turns out to be inflated? Why?` },
            { id: `reflect-technique`, category: `Sensory crossing as a tool`, prompt: `Artists without synesthesia deliberately cross the senses as a creative technique. If you tried it on purpose, what would your favorite song "look" like as a painting? What might a color "sound" like? Notice you are using a real creative tool, not pretending to have the trait.` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `The "real thing wrapped in hype" pattern is everywhere, real science used to sell fake products, a true fact inflated into a magic claim. Where else have you seen something genuinely real surrounded by exaggeration? How do you keep the real part and drop the hype?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "if synesthesia inspired great artists, then learning to think in crossed senses really could make me more creative, so the 'unlock it' apps aren't totally wrong." State the strongest version. Where is it partly right (sensory technique is real), and where does it still slide into hype?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Synesthesia is a chance to practice belief and skepticism at once, and to play with the senses creatively. Two paths.`,
          familyActivity: {
            title: `Real, Technique, Or Hype?`,
            duration: `40 minutes`,
            description: `As a family, explore synesthesia and practice sorting the real from the inflated. First, learn together what synesthesia actually is and why scientists know it is real (the consistency test is the most striking, talk about why giving the same answer years later is hard to fake). See if anyone in the family has any genuine synesthetic experiences, or just everyday sensory associations, and discuss the difference between an automatic, consistent perception and a learned association. Then do the sorting game: find a few real claims and pieces of content about synesthesia online (a science explainer, a first-hand account, a "synesthesia = genius" article, an "unlock your synesthesia" app) and sort each one together into real-and-supported, real-technique, romantic-overclaim, or sales-hype, using the lesson's questions. The goal is for everyone to practice the band's core balance: being genuinely amazed by a real, fascinating trait while staying unfooled by the exaggerations and products that cluster around it.`,
          },
          projectOption: {
            title: `Paint The Music, Honestly, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Use sensory crossing as a deliberate creative technique, honestly labeled as a technique, not a claim to have synesthesia. Week 1: choose a few pieces of music that feel very different from each other (a calm one, an energetic one, a sad one), listen closely, and for each ask yourself: if this music were a color, a shape, a texture, a movement, what would it be? Sketch or note your associations, knowing you are choosing these on purpose as an artist, which is a real and valid creative tool. Week 2: make a piece of visual art for one of the songs, a painting, collage, or digital image that tries to capture how the music feels to you in color, line, and shape. Then write a short, honest reflection: what associations did you use, and, importantly, note clearly that you were using sensory crossing as a deliberate technique (not claiming the automatic, involuntary trait of synesthesia). The point is to experience how powerful and fun deliberate sensory crossing is as a creative method, while practicing the honesty of naming exactly what you are doing.`,
            offerToParent: `Parent: opt your child into the Paint The Music project. Deliberately using sensory crossing as a creative technique, while honestly distinguishing it from the involuntary trait of synesthesia, builds both creative range and intellectual honesty at once, the habit of using a powerful tool while being accurate about what it is and is not. It is also simply a joyful, low-pressure way to make art from music.`,
          },
          identityQuestion: `If you become someone who can believe a genuinely real, well-supported thing like synesthesia, AND reject the genius-myths and "unlock it" products that cluster around it, all on the same topic, what does that let you do in a world where real discoveries are constantly wrapped in exaggeration and sold back to you?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can believe a real thing and still reject the hype around it.`,
            `A person who finds the true version more amazing than the inflated one.`,
            `Someone who knows the difference between a real trait and a creative technique.`,
          ],
          saveKey: `identity_responses_ca_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteen down. You took on a topic that is real AND surrounded by hype, and you learned to hold both at once. You learned what synesthesia actually is, a genuine neurological trait where one sense or concept automatically and consistently triggers another, and why we know it is real: the consistency test, performance tests like spotting 2s among 5s, and brain imaging, held with honest calibration. You learned how synesthesia has genuinely inspired art, while keeping the honest difference between a synesthete's automatic perception and an artist's deliberate sensory technique. And you learned to spot the myths, the "secret of genius" overclaim and the commercial "unlock it in 21 days" hype, using the brain-hype radar from Lesson 13. Most of all, you practiced the band's deepest balance: believing what the evidence genuinely supports while rejecting the inflated claims around it, on the very same topic, refusing both "it's all fake" and "it's all magic." And you saw the lovely truth that the real thing is more fascinating than the hype, because it survives a close look. Next: installation and immersive art, where artists build entire worlds you step inside, and the real debate about whether spectacle is art. Onward, {name}. — Muse`,
          badge: `synesthesia-literate`,
          badgeName: `Synesthesia Literate`,
          xpEarned: 75,
          competencies: [
            `Explains what synesthesia is (one sense or concept automatically and consistently triggering another) and that it is automatic, consistent, and not hallucination`,
            `Knows why synesthesia is established as real: the consistency test, performance tests, and brain imaging, held with appropriate calibration`,
            `Understands how synesthesia has genuinely inspired art, while distinguishing a synesthete's automatic perception from a non-synesthete artist's deliberate sensory technique`,
            `Identifies and rejects the "secret of genius" overclaim (most great artists lacked it; most synesthetes are not famous artists)`,
            `Spots "unlock your synesthesia" hype using the Lesson 13 tells (neuro-decoration, magic timeline, genius inflation), and knows genuine synesthesia is generally lifelong`,
            `Practices the core balance: believing a well-supported real thing while rejecting inflated claims about it, refusing both cynicism and credulity`,
            `Recognizes that the accurate truth is often more interesting than the hype because it survives scrutiny`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Installation and Immersive Art`,
            hook: `Artists who build whole worlds you walk inside, and the real debate: is immersive spectacle great art, or hollow? Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L14 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
