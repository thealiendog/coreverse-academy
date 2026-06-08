// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L04 — Sound Healing and Vibrational Art
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Sound Art, Vibrational Aesthetics, Source Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: CASE STUDY (sort real work across legitimate-tradition /
// contemporary-art / wellness-industry-adjacency, applying the L03 tier framework)
// SENSITIVITY: art-first spine. Sound treated as a serious contemporary medium.
// Wellness-pseudoscience handled honestly as ONE thread, not the whole lesson.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l04-v1";

const CREATIVE_ARTS_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-04`,
      title: `Sound Healing and Vibrational Art`,
      duration: 35,
      xpReward: 75,
      badge: `sound-art-literate`,
      badgeName: `Sound Art Literate`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, here is a question with no obvious answer. Can sound be sculpture? Not sound that describes a sculpture, but sound itself, shaped in space, that you walk through the way you walk around a statue. In 1971 the Austrian artist Bernhard Leitner started building what he called "Sound Spaces": rooms wired so that a tone physically moves around your body, so you feel it travel from your left ankle to your right shoulder. He argued that sound has a shape, that your skin hears as much as your ears do. Around the same time, the composer Pauline Oliveros was developing "Deep Listening," a practice of attention to sound so complete it changes the listener. And in the wider culture, a whole industry was forming around "sound healing," promising specific frequencies cure specific ailments. Three different things, often confused. Today you learn to tell them apart, and to take the real art seriously. Onward.`,
          headline: `Sound Healing and Vibrational Art`,
          subtitle: `Sound as a sculptural medium. And the case studies that test your framework.`,
          visual: `/voyager-assets/creative-arts/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Sound Has A Shape`,
          paragraphs: [
            `Begin with the central artistic claim: sound is not only something you hear, it is something that occupies space, has form, and can be composed the way a sculptor composes stone. Bernhard Leitner (1938-2024), an Austrian artist trained as an architect, built this idea into physical rooms. His "Sound Spaces" (from 1971 onward) used dozens of speakers wired so a single tone could be sent traveling around a listener's body on precise paths. Stand inside one and a sound climbs your spine, circles your head, drops to your feet. Leitner's argument was direct: the body perceives sound spatially, not just the ears, and an artist can sculpt that spatial experience.`,
            `This was a real break from the way most music had worked for centuries. Think of an ordinary song: the notes come one after another, in time, like words in a sentence. You wait for the next note the way you wait for the next word. Leitner proposed something different. He said sound also has a where, not just a when, and that an artist could compose the where, deciding that a tone lives near your left shoulder or moves across the room, the way a sculptor decides where to put an arm or a curve. That is what made it new. The name for this kind of work is "sound art," and it sits between three things you already know, music, sculpture, and architecture, without being fully any one of them. Museums began collecting it, and art critics started taking it seriously in the 1980s and 1990s.`,
            `Why this matters for you as a thinker about art: it stretches the definition you built in Lesson 1. If a Leitner sound space has no object you can hang on a wall, no score you can read, no performer on a stage, what exactly is the artwork? It is the designed experience itself, the shaped encounter between sound and your listening body. Holding that as art, rather than dismissing it, is the move this lesson asks of you. And it leads directly to the artists who pushed the medium furthest.`,
          ],
          image: `/voyager-assets/creative-arts/l04-s1-sound-shape.webp`,
          imageCaption: `Bernhard Leitner (1938-2024), Austrian artist trained as architect: "Sound Spaces" from 1971, rooms wired with dozens of speakers sending a single tone traveling around the listener's body on precise paths. Argument: the body perceives sound spatially, not just the ears; an artist can sculpt spatial sound experience. A break from the older idea that music is only a sequence in time (notes following notes like words in a sentence); sound has a where, not just a when. "Sound art" sits between music, sculpture, architecture; term entered serious criticism in the 1980s-1990s; museums began collecting it. Stretches the Lesson 1 definition of art: the artwork is the designed experience itself, the shaped encounter between sound and the listening body.`,
          vocab: [
            {
              word: `sound art`,
              definition: `A field of contemporary art treating sound itself as the main material, shaped in space and not only in time. It sits between music, sculpture, and architecture without being fully any one. Bernhard Leitner (1938-2024), an Austrian artist trained as an architect, built "Sound Spaces" from 1971: rooms wired with dozens of speakers so a single tone travels around the listener's body on precise paths (up the spine, circling the head, dropping to the feet). Leitner's argument: the body perceives sound spatially, not just through the ears, so an artist can compose where a sound lives and moves, the way a sculptor composes where to put a shape. This broke from the older idea that music is only a sequence in time (notes following notes like words in a sentence). The term "sound art" entered serious art criticism in the 1980s-1990s and museums began collecting works. The artwork is not an object on a wall, a score, or a stage performance; it is the designed experience itself, the shaped encounter between sound and the listening body. Engaging it as art stretches the definition built in Lesson 1.`,
              audioPrompt: `Begin with the central artistic claim, {name}: sound is not only something you hear, it is something that occupies space, has form, and can be composed the way a sculptor composes stone. Bernhard Leitner, an Austrian artist who lived from 1938 to 2024 and trained as an architect, built this idea into physical rooms. His "Sound Spaces," from 1971 onward, used dozens of speakers wired so a single tone could travel around a listener's body on precise paths. Stand inside one and a sound climbs your spine, circles your head, drops to your feet. Leitner argued that the body perceives sound spatially, not just the ears, and that an artist can sculpt that spatial experience. This was a real break from the way most music had worked for centuries. Think of an ordinary song: the notes come one after another, in time, like words in a sentence. Leitner proposed something different. He said sound also has a where, not just a when, and that an artist could compose the where, deciding that a tone lives near your left shoulder or moves across the room, the way a sculptor decides where to put a curve. The name for this kind of work is "sound art," and it sits between three things you already know, music, sculpture, and architecture, without being fully any one of them. Here is the question it raises for you: if a sound space has no object, no score, no performer, what exactly is the artwork? It is the designed experience itself. Holding that as art is the move this lesson asks of you.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Artists Who Built The Medium`,
          paragraphs: [
            `Sound art has founders worth knowing by name, because each made a distinct move. Pauline Oliveros (1932-2016), an American composer and accordionist, developed "Deep Listening" after a 1988 recording session in a cistern with a 45-second reverberation time. Deep Listening became a whole practice and philosophy: listening not just to intended sounds but to the entire sonic field, including the listener's own body and the space itself. Oliveros distinguished "hearing" (the physical reception of sound) from "listening" (giving meaning and attention to it). She founded the Deep Listening Institute and taught the practice for decades. Her claim was that attention to sound, trained and deepened, genuinely changes the person doing it.`,
            `La Monte Young (born 1935) took a different path: the long tone. His "Dream House" installations (with artist Marian Zazeela, ongoing since the 1960s) fill a room with sustained, precisely tuned frequencies that never stop. A visitor moves through the space and the sound changes, not because the tones change, but because moving your head a few inches shifts which frequencies your ears combine. The artwork is partly made by your own movement. Young is obsessive about tuning, working in "just intonation" with frequency ratios calculated to many decimal places. The piece is austere, demanding, and for many listeners genuinely altering.`,
            `Maryanne Amacher (1938-2009) went furthest into the body. She composed with sounds loud and high enough that the listener's own inner ear produces additional tones that aren't in the room at all, called "otoacoustic emissions." Her audiences heard music partly generated inside their own heads. Christine Sun Kim (born 1980), a contemporary Deaf American artist, approaches sound from the other direction entirely, making drawings, performances, and installations about how sound is owned, measured, and socially controlled, asking why hearing people treat sound as theirs. Five artists, five distinct claims about what sound can be. None of them is selling a cure. That distinction matters for what comes next.`,
          ],
          image: `/voyager-assets/creative-arts/l04-s2-artists.webp`,
          imageCaption: `Founders of sound art, each a distinct move. Pauline Oliveros (1932-2016), American composer: "Deep Listening" after a 1988 cistern recording (45-second reverberation); distinguished hearing (physical reception) from listening (meaning and attention); founded the Deep Listening Institute. La Monte Young (b. 1935): "Dream House" installations with Marian Zazeela (ongoing since the 1960s), rooms of sustained precisely tuned frequencies in just intonation; the listener's own movement helps make the piece. Maryanne Amacher (1938-2009): composed so the listener's inner ear produces additional tones (otoacoustic emissions) not present in the room. Christine Sun Kim (b. 1980), contemporary Deaf American artist: drawings, performances, installations about how sound is owned, measured, and socially controlled. None is selling a cure.`,
          vocab: [
            {
              word: `sound art`,
              definition: `Pauline Oliveros (1932-2016), American composer and accordionist, developed "Deep Listening" after a 1988 recording in a cistern with a 45-second reverberation time. Deep Listening is a practice of attention to the entire sonic field, including the listener's own body and the space; Oliveros distinguished "hearing" (physical reception of sound) from "listening" (giving meaning and attention to it); founded the Deep Listening Institute. La Monte Young (b. 1935): "Dream House" installations with Marian Zazeela, ongoing since the 1960s, rooms filled with sustained precisely tuned frequencies in "just intonation" (frequency ratios calculated to many decimal places); a visitor's own head movement shifts which frequencies combine, so the listener helps make the piece. Maryanne Amacher (1938-2009): composed with sounds engineered so the listener's inner ear produces additional tones not in the room ("otoacoustic emissions"); audiences heard music partly generated inside their own heads. Christine Sun Kim (b. 1980), contemporary Deaf American artist: drawings, performances, and installations about how sound is owned, measured, and socially controlled, questioning why hearing people treat sound as theirs. Five distinct claims about what sound can be. Crucially, none of these artists is selling a cure for a medical condition.`,
              audioPrompt: `Sound art has founders worth knowing by name, {name}, because each made a distinct move. Pauline Oliveros, an American composer who lived from 1932 to 2016, developed "Deep Listening" after a 1988 recording session in a cistern with a 45-second reverberation time. Deep Listening became a practice of attention to the entire sonic field, including the listener's own body and the space itself. Oliveros distinguished hearing, the physical reception of sound, from listening, giving meaning and attention to it. La Monte Young, born in 1935, took a different path: the long tone. His "Dream House" installations, made with the artist Marian Zazeela and ongoing since the 1960s, fill a room with sustained, precisely tuned frequencies that never stop. Move your head a few inches and the sound changes, because which frequencies your ears combine shifts. The artwork is partly made by your own movement. Maryanne Amacher, who lived from 1938 to 2009, went furthest into the body, composing so that the listener's own inner ear produces additional tones that aren't in the room at all. Christine Sun Kim, born in 1980, a Deaf American artist, makes work about how sound is owned, measured, and socially controlled. Five artists, five distinct claims. None of them is selling a cure.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Traditions Sound Art Borrows From`,
          paragraphs: [
            `Sound art did not appear from nowhere. It draws on traditions that used sustained tone and vibration for thousands of years, and engaging it honestly means naming them with respect. Tibetan Buddhist practice uses singing bowls and long horns in ritual; the sound is part of a religious and contemplative framework with centuries of transmission. Indian classical music's drone, the tanpura's continuous sustained tone underneath a raga, is the ancestor of La Monte Young's long tones; Young studied Indian classical music directly under Pandit Pran Nath and was explicit about the debt. These are Tier C-cultural traditions in the framework you built in Lesson 3: they engage real human experience through practice and meaning, not through testable physics claims.`,
            `The honest artist names the borrowing. La Monte Young did. Many sound artists openly credit non-Western traditions of sustained tone, chant, and ritual sound. The trouble starts when borrowing turns into a claim it never made. A Tibetan monk ringing a bowl in a monastery is engaged in a religious practice with its own internal meaning. A wellness company selling that same bowl with a chart of "which organ each frequency heals" has added a scientific-sounding claim the tradition never made. The bowl is the same; the claim attached to it is the thing to evaluate.`,
            `This is exactly the Tier C-cultural versus Tier C-pseudoscience distinction from Lesson 3, now applied to a specific object. Caro, your own heritage holds versions of this: across Latin America, sound and music carry deep ritual meaning in Catholic, Indigenous, and Afro-diasporic traditions, from processional bells to the drums of Candomblé and Santería. Those traditions are real and serious. They become something else only when a marketer staples a falsifiable health claim onto them. Holding the respect and the skepticism at the same time is the skill. The next section is where the skill gets tested.`,
          ],
          image: `/voyager-assets/creative-arts/l04-s3-traditions.webp`,
          imageCaption: `Sound art borrows from traditions thousands of years old: Tibetan Buddhist singing bowls and long horns (ritual, contemplative framework); Indian classical music's drone (the tanpura's sustained tone under a raga), the direct ancestor of La Monte Young's long tones (Young studied under Pandit Pran Nath and credited the debt). These are Tier C-cultural traditions (Lesson 3 framework): real human experience through practice and meaning, not testable physics claims. The honest artist names the borrowing. The trouble starts when a wellness company adds a scientific-sounding claim ("which organ each frequency heals") the tradition never made. The bowl is the same; the attached claim is the thing to evaluate. Latin American parallel: processional bells, the drums of Candomblé and Santería; real and serious until a falsifiable health claim is stapled on.`,
          vocab: [
            {
              word: `attached claim`,
              definition: `Sound art draws on traditions that used sustained tone and vibration for thousands of years. Tibetan Buddhist practice uses singing bowls and long horns within a religious and contemplative framework with centuries of transmission. Indian classical music's drone (the tanpura's continuous sustained tone under a raga) is the direct ancestor of La Monte Young's long tones; Young studied Indian classical music under Pandit Pran Nath and credited the debt openly. These are Tier C-cultural traditions (Lesson 3 framework): they engage real human experience through practice and meaning, not through testable physics claims. The honest artist names the borrowing. The category error appears when borrowing turns into a claim the tradition never made: a Tibetan monk ringing a bowl in a monastery is doing religious practice with internal meaning; a wellness company selling that same bowl with a chart of "which organ each frequency heals" has added a falsifiable, scientific-sounding claim the tradition never made. The bowl is the same; the attached claim is what gets evaluated. This is the Tier C-cultural vs. Tier C-pseudoscience distinction applied to a specific object. Latin American parallel: processional bells, the drums of Candomblé and Santería carry deep ritual meaning; they become something else only when a marketer attaches a falsifiable health claim. Holding respect and skepticism at the same time is the skill.`,
              audioPrompt: `Sound art did not appear from nowhere, {name}. It draws on traditions that used sustained tone and vibration for thousands of years, and engaging it honestly means naming them with respect. Tibetan Buddhist practice uses singing bowls and long horns in ritual; the sound is part of a religious framework with centuries of transmission. Indian classical music's drone, the tanpura's continuous sustained tone underneath a raga, is the ancestor of La Monte Young's long tones. Young studied Indian classical music directly under Pandit Pran Nath and was explicit about the debt. These are Tier C-cultural traditions from the framework you built in Lesson 3: they engage real human experience through practice and meaning, not through testable physics claims. The honest artist names the borrowing. The trouble starts when borrowing turns into a claim it never made. A Tibetan monk ringing a bowl in a monastery is engaged in a religious practice with its own meaning. A wellness company selling that same bowl with a chart of which organ each frequency heals has added a scientific-sounding claim the tradition never made. The bowl is the same; the claim attached to it is the thing to evaluate. Across Latin America, sound carries deep ritual meaning in Catholic, Indigenous, and Afro-diasporic traditions. Those traditions are real. They become something else only when a marketer staples a falsifiable health claim onto them.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What The Evidence Actually Says`,
          paragraphs: [
            `Now the honest thread about wellness claims, handled carefully because the topic is full of overstatement in both directions. Some effects of sound on the body are well-established. Loud sustained sound you can feel as vibration genuinely affects the body; this is physics, not mysticism. Slow, quiet, intentional listening reliably lowers stress markers for many people; controlled research on music and relaxation supports this, as you saw in Lesson 3. A "sound bath," lying down while someone plays gongs and bowls, often does help people relax, and that relaxation is real and measurable.`,
            `Here is the careful part. The relaxation being real does not make the specific mechanism claims true. When a practitioner says "this gong is tuned to 432 hertz, which resonates with your heart chakra and dissolves trauma stored in your cells," several distinct claims are bundled together. That the experience is relaxing: supported. That a specific frequency targets a specific organ or emotion through a physical mechanism: not supported by peer-reviewed research, exactly the Tier C-pseudoscience pattern from Lesson 3. The honest position is not "it's all fake," and it is not "the frequencies heal you." It is more precise: the experience can genuinely help you relax; the specific physics-style mechanism claims are not established.`,
            `Why precision matters here and not just for arguments. If a sound bath helps someone manage everyday stress, that is a real benefit and nobody should sneer at it. The line to watch is when claims escalate, when "this helps you relax" becomes "this cures your illness, so skip your doctor." That escalation is where an enjoyable, often genuinely helpful practice turns into something that can hurt people. A 12-year-old who can hold this distinction can enjoy a sound bath, take the art of Oliveros and Young seriously, and still protect a family member from a dangerous health claim. That is the whole point of the framework. Now you apply it.`,
          ],
          image: `/voyager-assets/creative-arts/l04-s4-evidence.webp`,
          imageCaption: `The honest evidence thread. Established: loud sustained sound felt as vibration affects the body (physics); slow intentional listening lowers stress markers for many people (controlled research, Lesson 3); a "sound bath" (lying down while someone plays gongs and bowls) often genuinely helps relaxation, and that relaxation is real and measurable. The careful part: relaxation being real does not make specific mechanism claims true. "This gong is tuned to 432 Hz, resonates with your heart chakra, dissolves trauma stored in your cells" bundles distinct claims: the experience is relaxing (supported); a specific frequency targets a specific organ through a physical mechanism (not supported; Tier C-pseudoscience). Honest position: not "it's all fake," not "the frequencies heal you," but precise. Danger line: when "this helps you relax" escalates to "this cures your illness, so skip your doctor."`,
          vocab: [
            {
              word: `is test`,
              definition: `Some effects of sound on the body are well-established physics, not mysticism: loud sustained sound felt as vibration genuinely affects the body; slow, quiet, intentional listening reliably lowers stress markers for many people (controlled research on music and relaxation, Lesson 3); a "sound bath" (lying down while someone plays gongs and singing bowls) often genuinely helps people relax, and that relaxation is real and measurable. The careful part: the relaxation being real does not make the specific mechanism claims true. A statement like "this gong is tuned to 432 Hz, which resonates with your heart chakra and dissolves trauma stored in your cells" bundles distinct claims: (a) the experience is relaxing (supported); (b) a specific frequency targets a specific organ or emotion through a physical mechanism (not supported by peer-reviewed research; the Tier C-pseudoscience pattern). The honest position is neither "it's all fake" nor "the frequencies heal you"; it is precise: the experience can genuinely help you relax, and the specific physics-style mechanism claims are not established. Why precision matters: a relaxing practice is a real benefit. The danger line is escalation, when "this helps you relax" becomes "this cures your illness, so skip your doctor." Holding the distinction lets a person enjoy a sound bath, take sound art seriously, and still protect a family member from a dangerous health claim.`,
              audioPrompt: `Now the honest thread about wellness claims, {name}, handled carefully because the topic is full of overstatement in both directions. Some effects of sound on the body are well-established. Loud sustained sound that you can feel as vibration genuinely affects the body; this is physics, not mysticism. Slow, quiet, intentional listening reliably lowers stress markers for many people, as you saw in Lesson 3. A sound bath, lying down while someone plays gongs and bowls, often does help people relax, and that relaxation is real and measurable. Here is the careful part. The relaxation being real does not make the specific mechanism claims true. When a practitioner says "this gong is tuned to 432 hertz, which resonates with your heart chakra and dissolves trauma stored in your cells," several claims are bundled together. That the experience is relaxing: supported. That a specific frequency targets a specific organ through a physical mechanism: not supported by peer-reviewed research. The honest position is not "it's all fake," and it is not "the frequencies heal you." It is more precise: the experience can genuinely help you relax; the specific mechanism claims are not established. The line to watch is when "this helps you relax" becomes "this cures your illness, so skip your doctor." That is where a helpful practice turns into something that can hurt people.`,
            },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull the threads together before you apply them. This lesson has held two things at once. First, sound art is a serious contemporary medium with real artists making real work: Leitner sculpting tone in space, Oliveros training deep attention, Young building rooms of sustained frequency, Amacher composing inside the listener's own ear, Christine Sun Kim questioning who owns sound at all. Engaging this as art, with the seriousness you would give a painting or a film, is the first move. Second, the same territory of sustained tone and vibration is crowded with wellness claims that range from harmless relaxation to dangerous medical overstatement, and telling them apart is a learnable skill.`,
            `The reason to keep both in view is that they genuinely overlap. A real sound artist might use a singing bowl. A wellness practitioner might use the same bowl. A Tibetan monk might use it in ritual. The bowl is identical; what differs is the claim and the framework around it. Art makes an aesthetic claim ("experience this shaped sound"). Tradition makes a meaning claim ("this is part of our practice"). Pseudoscience makes a falsifiable physics claim ("this frequency heals this organ") that does not survive testing. Three different kinds of claim, one object.`,
            `In the case studies ahead you will sort five real or realistic examples into where they actually belong, using tier-appropriate criteria, the same discipline you built in Lesson 3 now applied to specific contemporary work. The goal is not to be the person who sneers at everything, and not the person who believes everything. It is to be the person who can walk into a gallery, a temple, and a wellness studio in the same week and engage each one accurately. That person gets more out of art, more out of tradition, and is harder to fool. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l04-s5-before.webp`,
          imageCaption: `Threads together. Sound art is a serious contemporary medium: Leitner (tone sculpted in space), Oliveros (trained deep attention), Young (rooms of sustained frequency), Amacher (composing inside the listener's ear), Christine Sun Kim (who owns sound). Engaging it as art is the first move. The same territory is crowded with wellness claims from harmless relaxation to dangerous medical overstatement. They overlap because the object is identical (a singing bowl used by an artist, a wellness practitioner, a Tibetan monk); what differs is the claim. Art = aesthetic claim ("experience this shaped sound"). Tradition = meaning claim ("part of our practice"). Pseudoscience = falsifiable physics claim ("this frequency heals this organ") that fails testing. Five case studies ahead, sorted with tier-appropriate criteria.`,
          vocab: [
            {
              word: `one object`,
              definition: `The synthesis for the case studies. This lesson holds two things at once. First, sound art is a serious contemporary medium with real artists: Bernhard Leitner (sculpting tone in space), Pauline Oliveros (training deep attention), La Monte Young (rooms of sustained frequency), Maryanne Amacher (composing inside the listener's own ear via otoacoustic emissions), Christine Sun Kim (questioning who owns sound). Engaging this as art, with the seriousness given a painting or film, is the first move. Second, the same territory of sustained tone and vibration is crowded with wellness claims ranging from harmless relaxation to dangerous medical overstatement; telling them apart is a learnable skill. They overlap because the object can be identical: a singing bowl used by a sound artist, by a wellness practitioner, and by a Tibetan monk. What differs is the claim. Art makes an aesthetic claim ("experience this shaped sound"). Tradition makes a meaning claim ("this is part of our practice"). Pseudoscience makes a falsifiable physics claim ("this frequency heals this organ") that does not survive testing. Three different kinds of claim, one object. The case studies sort five real or realistic examples into where they belong, using tier-appropriate criteria (Lesson 3 discipline applied to specific contemporary work). The goal: be the person who can walk into a gallery, a temple, and a wellness studio in one week and engage each accurately, neither sneering nor credulous.`,
              audioPrompt: `Pull the threads together before you apply them, {name}. This lesson has held two things at once. First, sound art is a serious contemporary medium with real artists making real work: Leitner sculpting tone in space, Oliveros training deep attention, Young building rooms of sustained frequency, Amacher composing inside the listener's own ear, Christine Sun Kim questioning who owns sound at all. Engaging this as art, with the seriousness you would give a painting or a film, is the first move. Second, the same territory of sustained tone and vibration is crowded with wellness claims that range from harmless relaxation to dangerous medical overstatement, and telling them apart is a learnable skill. The reason to keep both in view is that they overlap. A real sound artist might use a singing bowl. A wellness practitioner might use the same bowl. A Tibetan monk might use it in ritual. The bowl is identical; what differs is the claim. Art makes an aesthetic claim: experience this shaped sound. Tradition makes a meaning claim: this is part of our practice. Pseudoscience makes a falsifiable physics claim, this frequency heals this organ, that does not survive testing. Three different kinds of claim, one object. In the case studies ahead, you sort five examples into where they actually belong. The goal is to be the person who can walk into a gallery, a temple, and a wellness studio in the same week and engage each one accurately.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l04-case-study`,
          type: `case-study`,
          headline: `Five Cases In Sound`,
          intro: `{name}, five real or realistic examples from the world of sound. For each, decide what kind of work it is: contemporary art (aesthetic claim), legitimate tradition (meaning claim), or wellness-industry pseudoscience (falsifiable physics claim that fails testing). Some are mixed. Use tier-appropriate criteria, not one ruler for all of them.`,
          cases: [
            {
              id: `c1`,
              title: `Bernhard Leitner, "Sound Spaces" (1971+)`,
              type: `Contemporary art`,
              description: `A room wired with dozens of speakers. A single pure tone travels around your body on a designed path: up your spine, around your head, down to your feet. There is no health claim, no organ chart, no promise of a cure. Leitner's statement is that the body perceives sound spatially and that this can be sculpted as an art experience. The work is collected by museums and discussed in art criticism.`,
              questions: [
                `What kind of claim is Leitner making: aesthetic, meaning, or physics?`,
                `Notice there is no health promise. How does that change how you evaluate it?`,
                `What would you need to experience to decide whether it works as art?`,
              ],
              evaluation: `Contemporary art, an aesthetic claim. Leitner asks you to experience shaped sound; he promises no cure and attaches no organ chart. You evaluate it the way you evaluate any artwork: does the designed experience do something worth doing? Is it skillful, original, affecting? You do not evaluate it by asking "did it heal anything," because it never claimed to. This is the cleanest case: serious art, no pseudoscience attached. Engaging it well means giving it the same seriousness you would give a sculpture or a film.`,
            },
            {
              id: `c2`,
              title: `A Tibetan singing bowl used in monastery ritual`,
              type: `Legitimate tradition (Tier C-cultural)`,
              description: `A monk rings a metal bowl during a contemplative practice that has been transmitted for centuries. Within the tradition, the sound has meaning tied to attention, ritual, and a religious framework. The monk is not claiming the bowl's frequency repairs a specific organ; the bowl is part of a practice whose value is internal to the tradition.`,
              questions: [
                `What kind of claim is the tradition making: aesthetic, meaning, or physics?`,
                `Why would it be a category error to test this with peer-reviewed physics standards?`,
                `How is this different from a company selling the same bowl with a "frequency heals organ" chart?`,
              ],
              evaluation: `Legitimate tradition, a meaning claim (Tier C-cultural from Lesson 3). The tradition engages real human experience through practice, ritual, and attention, not through a testable physics mechanism. Evaluating it by asking "does the frequency cure disease in a controlled trial" misreads it, because the tradition never made that claim. You engage it on its own terms: does the practice have internal coherence, depth, and transmission? It does. The difference from the wellness company is the attached claim: the monk makes a meaning claim; the company staples a falsifiable physics claim onto the identical object.`,
            },
            {
              id: `c3`,
              title: `"432 Hz tuning realigns your cells and raises your vibration"`,
              type: `Pseudoscience (Tier C-pseudoscience)`,
              description: `A product line and a set of videos claim that music tuned to 432 hertz instead of the standard 440 is "natural," "cosmic," and physically realigns your cells, raising your vibration and improving health. The claim is sold with tuning forks, subscriptions, and specific health promises.`,
              questions: [
                `Which specific claims here are testable physics claims?`,
                `What does the actual evidence say about 432 Hz tuning (recall Lesson 3)?`,
                `If the music still relaxes someone, does that make the cell-realignment claim true?`,
              ],
              evaluation: `Pseudoscience, a falsifiable physics claim that fails testing. The "432 Hz is natural and realigns your cells" claim is testable and not supported: controlled studies do not find the claimed differences, and the "naturalness" of 432 Hz is asserted, not demonstrated (Lesson 3). The trap is the relaxation: the music may genuinely relax the listener, but that does not make the cell-realignment mechanism true. Relaxation comes from intentional engagement and the placebo effect, both real, neither requiring the specific frequency claim. This is the clearest Tier C-pseudoscience case: scientific-sounding language with no scientific basis.`,
            },
            {
              id: `c4`,
              title: `Pauline Oliveros, "Deep Listening" practice`,
              type: `Mixed: contemporary art + practice`,
              description: `Oliveros developed a practice of profound attention to the full sonic field, taught it for decades, and claimed that trained, deepened listening genuinely changes the person doing it. She did not claim specific frequencies cure specific diseases. She did claim that the practice of attention itself is transformative.`,
              questions: [
                `Is "trained attention changes the person" a physics claim or a different kind of claim?`,
                `How would you evaluate a claim about attention rather than about frequency?`,
                `Where does this sit relative to the 432 Hz case, and why?`,
              ],
              evaluation: `Mixed, leaning toward art and practice, not pseudoscience. "Trained attention changes the person" is not a falsifiable physics claim about frequencies healing organs; it is a claim about a practice, closer to claims about meditation or sustained study. There is real research suggesting trained attention practices affect people, and the claim is modest and about the listener's own engagement, not about a mechanism inside a gong. It sits far from the 432 Hz case because Oliveros is not selling a frequency-cures-organ mechanism; she is describing a discipline of attention. You evaluate it by engaging the practice, not by running a physics trial on a tone.`,
            },
            {
              id: `c5`,
              title: `A sound-bath studio: "relax with gongs" vs. "cure your anxiety, skip your meds"`,
              type: `Depends entirely on the claim`,
              description: `A studio offers sound baths: lie down, listen to gongs and bowls, relax. Version A advertises "a relaxing hour of sound to help you unwind." Version B advertises "heals anxiety and depression at the cellular level; cancel your therapy and stop your medication."`,
              questions: [
                `What is the difference between Version A's claim and Version B's claim?`,
                `Which version is safe to enjoy, and which is dangerous, and why?`,
                `How does the escalation from "relax" to "skip your meds" change everything?`,
              ],
              evaluation: `The same activity, two completely different claims. Version A makes a modest, honest claim: it helps you relax. That is supported and safe to enjoy; relaxation from intentional listening is real. Version B escalates to a falsifiable medical claim and, worse, tells people to abandon evidence-based treatment. That escalation is the danger line from Section 4. Version B is Tier C-pseudoscience with the added harm of steering people away from care for serious conditions. The discipline this lesson builds lets you book Version A happily and recognize Version B as dangerous, with the same object in the room. That is exactly the real-world payoff of the framework.`,
            },
          ],
          synthesisPrompt: `After sorting all five cases: what is the actual rule you now use to tell serious sound art and legitimate tradition apart from wellness pseudoscience? In 5-6 sentences, write the rule in your own words, and name which case was hardest to sort and why.`,
          reflectionPrompt: `Which case did you most want to dismiss too quickly, and which did you most want to believe? What does that tell you about your own defaults when you meet a claim about sound?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Bernhard Leitner's "Sound Spaces" sends tones along paths you walk through. What does that show about how sound art treats sound?`,
              options: [
                `That sound is only ever experienced as music played front-to-back in time.`,
                `That sound can only be art if it's loud enough to startle the listener.`,
                `That sound can be a material organized in space, not only something that unfolds in time.`,
                `That sound art requires expensive speakers most people can't afford.`,
              ],
              correctIndex: 2,
              explanation: `Sound art treats sound as a material organized in space, not only in time. Leitner's spatial tone-paths are the clearest example, grounding the lesson's claim that sound can be a serious artistic medium. The distractors reduce it to ordinary music-in-time, to shock, or to equipment.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Pauline Oliveros built "Deep Listening" on a distinction between hearing and listening. What is that distinction — and what kind of claim is it?`,
              options: [
                `That listening means turning the volume up; a claim about equipment.`,
                `That hearing is passive while listening is active meaning-making — a claim about trained attention.`,
                `That only formally trained musicians are able to truly hear much of anything at all.`,
                `That specific frequencies heal specific organs if you listen hard enough.`,
              ],
              correctIndex: 1,
              explanation: `Oliveros distinguished passive hearing from active, meaning-giving listening — the heart of Deep Listening. Crucially, her claim is about trained attention, which is a very different kind of claim from "this frequency cures that organ." Keeping those kinds of claims separate is the lesson's core skill. The distractors swap it for volume, gatekeeping, or the very pseudoscience claim it is NOT.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `In La Monte Young's "Dream House," the tones are fixed, yet the lesson says the listener helps make the work. How?`,
              options: [
                `The listener edits the recording afterward to add their own sounds.`,
                `The listener votes on which tones the artist should play next.`,
                `The artist secretly changes the playing tones based on exactly who happens to walk in.`,
                `As you move, your position changes which fixed frequencies combine in your ears.`,
              ],
              correctIndex: 3,
              explanation: `In "Dream House" the tones are fixed, but your movement changes which frequencies combine in your ears, so the listener co-produces the work. (Young also openly credited the Indian classical drone tradition — a model of honest borrowing.) The distractors invent editing, voting, or secret changes instead of the real mechanism: your body moving through a standing sound field.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `A singing bowl can carry both a tradition's claim and a wellness company's claim. What's the key difference between those two claims about the same object?`,
              options: [
                `The tradition makes a meaning claim on its own terms; the company makes a physics claim that fails testing.`,
                `The tradition's claim is fake and the company's claim is scientifically proven.`,
                `Both of the claims are basically identical, so there is no real difference worth tracking.`,
                `The company's claim is older and therefore more trustworthy than the tradition's.`,
              ],
              correctIndex: 0,
              explanation: `Same object, different claim. The tradition makes a meaning claim, evaluated on its own terms; the wellness company makes a falsifiable physics claim (a specific frequency producing a specific bodily cure) that fails testing. Keeping those two apart is the central skill of the lesson. The distractors reverse which is which, collapse them, or grant authority by age.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the actual evidence say about a "sound bath," and what's the careful position?`,
              options: [
                `It's all completely fake, so there's no real benefit to a sound bath at all, ever.`,
                `The gong's frequency literally cures organs, exactly as advertised.`,
                `The relaxation is real, but the frequency-cures-organ mechanism is not established.`,
                `Only the people who already firmly believe in it ever get any benefit from it at all.`,
              ],
              correctIndex: 2,
              explanation: `The relaxation is real; the specific frequency-cures-organ mechanism is not established. The honest, precise position holds both at once, rather than collapsing into "all fake" or "it heals you." The distractors are exactly those two collapses, plus a dismissal of the genuine relaxation effect.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does being precise about sound claims matter practically — beyond just being right in an argument?`,
              options: [
                `It mainly lets you win debates and feel superior to all the people who disagree with you.`,
                `Because the danger is escalation from "this relaxes me" to "skip your doctor."`,
                `It doesn't matter practically; it's only an academic distinction.`,
                `Because all relaxing practices are dangerous and should be avoided.`,
              ],
              correctIndex: 1,
              explanation: `The practical danger is escalation: from "a sound bath relaxes me" (true, harmless) to "this dissolves disease, so skip your medicine" (false, dangerous). Precision lets you keep the real benefit of a relaxing practice while catching the genuinely harmful medical overstatement. The distractors trivialize the skill or swing to fear of all relaxation.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Maryanne Amacher and Christine Sun Kim expanded sound art in different directions. Why do they stay clearly in the "art" category rather than "healing claims"?`,
              options: [
                `Because they only ever worked with traditional orchestral instruments.`,
                `Because they each promised specific medical cures through sound.`,
                `Because all of their work is simply far too quiet to ever make any real claim at all.`,
                `Amacher composed inside the listener's ear; Christine Sun Kim interrogates who controls sound.`,
              ],
              correctIndex: 3,
              explanation: `Amacher composed works that produced sound inside the listener's own ear; Christine Sun Kim interrogates who owns and controls sound (including from a Deaf perspective). Both expand what sound art can be, and neither makes a health claim — which keeps them clearly in the art category, distinct from wellness-cure marketing. The distractors misdescribe their work or invent medical claims they don't make.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `La Monte Young openly credited Indian classical music as a source. Why does the lesson treat that as a model — the ethical counterpart to its pseudoscience warning?`,
              options: [
                `Because crediting the source and not stapling on a false claim is honest borrowing.`,
                `Because borrowing from another culture is always wrong and he shouldn't have.`,
                `Because openly crediting a source somehow proves that his music actually healed people.`,
                `Because Indian classical music is much simpler and therefore a lot easier to copy.`,
              ],
              correctIndex: 0,
              explanation: `Crediting the Indian classical drone tradition models honest borrowing: name the source, keep the aesthetic purpose, and don't staple on a false health claim. It's the ethical counterpart to the lesson's pseudoscience warning — you can draw on a tradition with respect and accuracy. The distractors misread it as theft, as proof of healing, or as condescension toward the source tradition.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because a sound bath genuinely helps many people relax, the claim that the gong's specific frequency heals a specific organ must also be true.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False. The relaxation is real, but it does not follow that the specific frequency-heals-organ mechanism is true. Relaxation from a sound bath comes from intentional, quiet engagement and from the placebo effect — both real and measurable, and neither requiring any specific "healing frequency" claim to be true. This is the core reasoning move of the lesson: an experience can be genuinely beneficial while the scientific-sounding explanation attached to it is unsupported. Treating "it helped me relax" as proof of "this frequency repairs my cells" is exactly the error that lets pseudoscience pass itself off as established science. The honest position keeps the real benefit and rejects the unsupported mechanism — you can enjoy the sound bath and still refuse the cell-repair claim, with no contradiction.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend invites you to a "healing sound bath." Beforehand, the person running it tells the group the gongs are tuned to frequencies that "dissolve disease, and medicine just covers things up." Your friend has a real, serious health condition and is excited. You don't want to ruin the experience or insult your friend — and you now have a framework. What do you do, during and after?`,
              options: [
                `Stand up and announce to the room that the whole thing is a dangerous scam.`,
                `Say nothing ever, and let your friend believe the gongs can replace their medicine.`,
                `Enjoy the genuinely relaxing experience, then privately and warmly tell your friend you loved the calm but are worried about the "skip medicine" claim specifically — locating the harm there, not in the gongs, and gently encouraging them to keep their doctor in the loop.`,
                `Text everyone you know that your friend has joined a cult.`,
              ],
              correctIndex: 2,
              explanation: `Applied sound-claim literacy inside a real relationship. The move is to separate the genuinely relaxing experience (keep it) from the specific dangerous claim (catch it), locating the harm precisely in the "dissolve disease, skip medicine" escalation rather than in the gongs or the relaxation, and to engage your friend with warmth and accuracy rather than a public scene or a lecture. Because your friend has a serious condition, gently encouraging them to keep their doctor involved matters. The capstone isn't winning the argument; it's being someone who can share the experience and still tell the truth when a claim could genuinely hurt someone they love. The distractors are the failure modes: public humiliation, silent abandonment of accuracy, and gossip.`,
            },
          ]
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you think of sound as something that could be sculpture, that could occupy space and be walked through? What changed when you met Leitner, Oliveros, Young, and Amacher? What surprised you most?` },
            { id: `reflect-confusing`, category: `What's still unclear`, prompt: `The hardest part of this lesson is the overlap: the same singing bowl can be art, tradition, or pseudoscience depending on the claim around it. Where is that distinction still slippery for you? What would you need to investigate to sharpen it?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson tried to make you someone who can be in a gallery, a temple, and a wellness studio in the same week and engage each accurately. Does that person feel like who you want to be? What pulls you toward sneering, and what pulls you toward believing?` },
            { id: `reflect-heritage`, category: `Your heritage`, prompt: `Caro, sound carries deep ritual meaning across Latin American Catholic, Indigenous, and Afro-diasporic traditions, from processional bells to the drums of Candomblé and Santería. Which sound traditions live in your own family, and how do you tell the real meaning of them apart from anything a marketer might try to sell using them?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `Where in your real life are you most likely to meet a sound or wellness claim: a friend's recommendation, a video, a family member's purchase? What will you actually do with the framework you built today?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Here is a real objection: "If a sound bath helps someone with their anxiety, who cares whether the frequency claim is technically true? You're just being a killjoy." What's the strongest version of that argument, and where exactly does it stop being right?` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Sound art is meant to be experienced, not just read about. Two paths beyond the lesson.`,
          familyActivity: {
            title: `Build A Listening Room`,
            duration: `45 minutes`,
            description: `Do a Deep Listening session with your family, Pauline Oliveros style. Pick a quiet time. Everyone lies down or sits comfortably with eyes closed for ten minutes and does nothing but listen, not to chosen music, but to the entire sound field of your home: the refrigerator hum, traffic outside, a bird, the house settling, your own breath. Afterward, each person names three sounds they noticed that they normally tune out, and one sound that surprised them. Then try the opposite: play one piece of music your family loves (for many Latin American families this might be a bolero, a vallenato, a cumbia, or a hymn) and listen to it with the same total attention, noticing what you hear that you never noticed before. Discuss the difference between hearing a familiar song and truly listening to it. The conversation usually surfaces how much sound we filter out every day, which is exactly Oliveros's point.`,
          },
          projectOption: {
            title: `Make A Sound Piece, 3 weeks (optional)`,
            duration: `3 weeks, ~40 minutes per session`,
            description: `Make your own piece of sound art, no health claims allowed, pure aesthetic experiment. Week 1: choose an approach. Option A, a "sound map" of one place: record (a phone is fine) ten short sounds from a single location across a day (your kitchen, a park, your street) and arrange them into a 2-3 minute composition that captures the place. Option B, a Leitner-style spatial experiment: set up two or more speakers or devices in a room and design a simple experience where a sound moves or surrounds the listener; write instructions for how someone should sit and what they'll experience. Option C, a "score" in the spirit of Oliveros or Yoko Ono from Lesson 1: write a set of listening instructions as the artwork itself (for example, "Find the quietest sound in the room. Follow it for five minutes. Notice when it disappears."). Week 2: build and test it on a family member, get feedback, refine. Week 3: present the finished piece and write 400-600 words on what kind of claim your piece makes (aesthetic, you'll notice, never medical), what you learned about sound as a material, and which sound artist from this lesson most influenced you. This is real sound-art practice, the same medium Leitner and Oliveros worked in, at your scale.`,
            offerToParent: `Parent: opt your child into the sound-piece project. Working in sound as a deliberate artistic medium, with the explicit rule that no health claims are allowed, builds two things at once: genuine creative range and a permanent, hands-on understanding of the difference between making an aesthetic claim and making a false health claim. The 3-week arc lets them actually finish something.`,
          },
          identityQuestion: `If you become someone who can take sound art seriously as a medium, engage sound traditions with respect, and still recognize a dangerous health claim the moment it appears, what does that let you do across your life that someone who only sneers, or only believes, cannot?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can hear sound as a material an artist shapes, not just background noise.`,
            `A person who can enjoy a sound bath and still catch a dangerous health claim.`,
            `Someone who tells a tradition's meaning apart from a marketer's frequency chart.`,
          ],
          saveKey: `identity_responses_ca_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Four down. After this lesson you can do something most adults can't: walk into a gallery, a temple, and a wellness studio in the same week and engage each one accurately. You know sound art as a serious medium and you know its makers by name: Bernhard Leitner sculpting tone in space with his "Sound Spaces" from 1971; Pauline Oliveros training "Deep Listening" and separating hearing from listening; La Monte Young building rooms of sustained just-intonation frequency in "Dream House," crediting the Indian classical drone he studied under Pandit Pran Nath; Maryanne Amacher composing inside the listener's own ear; Christine Sun Kim asking who owns sound at all. You can hold the three kinds of claim apart: art's aesthetic claim, tradition's meaning claim, and pseudoscience's falsifiable physics claim that fails testing. You know the honest evidence: a sound bath genuinely relaxes people, and that real benefit does not make a "this frequency heals this organ" claim true. And you know the danger line, the escalation from "this relaxes you" to "this cures you, so skip your doctor." That single distinction can protect someone you love. Next: Postmodern art and the deconstruction of meaning, where the question stops being "what is art" and becomes "is there any stable meaning at all." Onward, {name}. — Muse`,
          badge: `sound-art-literate`,
          badgeName: `Sound Art Literate`,
          xpEarned: 75,
          competencies: [
            `Defines sound art as a contemporary medium treating sound as a material organized in space, and names Bernhard Leitner's "Sound Spaces" (1971+)`,
            `Names the founders of sound art (Oliveros and Deep Listening; La Monte Young and "Dream House"; Maryanne Amacher and otoacoustic emissions; Christine Sun Kim) with their distinct moves`,
            `Distinguishes three kinds of claim about the same object: aesthetic (art), meaning (Tier C-cultural tradition), and falsifiable physics (Tier C-pseudoscience)`,
            `States the honest evidence: a sound bath genuinely aids relaxation, which does not make specific frequency-heals-organ mechanism claims true`,
            `Identifies the danger line: escalation from "this relaxes you" to "this cures you, so skip your doctor"`,
            `Recognizes honest borrowing (Young crediting the Indian classical drone tradition) versus stapling a false claim onto a tradition's object`,
            `Applies the framework in a real relationship without sneering or becoming credulous`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: Postmodern Art and the Deconstruction of Meaning`,
            hook: `The question shifts from "what is art" to "is there any stable meaning at all." Perspectives screen.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L04 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz} r=${reflect}`
  );
}
