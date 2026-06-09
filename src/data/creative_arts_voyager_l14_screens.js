// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L14 — Synesthesia: Seeing Sound, Hearing Color
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Perception, Neuroscience, Creativity, Source Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort claims about synesthesia across
// reliability tiers, separating the genuine, well-documented phenomenon from myth
// and marketing). Contract matches L03/L06/L08/L11/L12/L13.
// Real science: synesthesia is real, involuntary, consistent over time, runs in
// families, affects a minority (~estimates around 4%), common types grapheme-color
// and chromesthesia (sound-to-color). Artists: Kandinsky, Scriabin, and contemporary
// musicians who describe it. Myths debunked: "anyone can train real synesthesia as a
// superpower," "a drug trip is the same as synesthesia," "synesthetes are geniuses."
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l14-v1";

const CREATIVE_ARTS_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-14`,
      title: `Synesthesia: Seeing Sound, Hearing Color`,
      duration: 35,
      xpReward: 75,
      badge: `synesthesia-literate`,
      badgeName: `Synesthesia Literate`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, imagine that every time you heard a trumpet, you saw a burst of gold, or that the letter A was always, unmistakably red to you, not as a poetic comparison but as something you genuinely perceived. For a real minority of people, that is simply how the world works. It is called synesthesia, a real, well-documented difference in how some brains process the senses, where one sense automatically triggers another. It has inspired painters and composers, and it is genuinely fascinating. But like everything real and amazing, it has collected a cloud of myth around it: that anyone can train it into a superpower, that a drug trip is the same thing, that synesthetes are secret geniuses. Today you will learn what synesthesia actually is, meet artists who have it, and sharpen the skill you have built all band: telling the real, careful science from the hype that grows around anything wondrous. Onward.`,
          headline: `Synesthesia: Seeing Sound, Hearing Color`,
          subtitle: `A real blending of the senses — and its myths. Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Synesthesia Actually Is`,
          paragraphs: [
            `Synesthesia is a real, well-documented condition in which stimulating one sense automatically and involuntarily triggers an experience in another. A person with grapheme-color synesthesia, the most studied type, perceives letters or numbers as having specific, consistent colors, the 7 might always be green, the letter A always red. A person with chromesthesia hears sounds and sees colors at the same time, a piano note arriving with a particular hue. There are many other forms, from tasting words to feeling that days of the week have positions in space. It is not imagination or metaphor; it is a genuine difference in perception.`,
            `Two features make it scientifically convincing rather than just a claim. First, it is involuntary: synesthetes do not choose or try to make the colors appear; they simply do, automatically, the way you cannot choose to stop seeing a red apple as red. Second, it is consistent: a given synesthete's pairings stay remarkably stable over time, if A is red today, it was red years ago and will be red years from now, and researchers test exactly this by re-checking people's pairings months apart. That involuntary consistency is the fingerprint that separates real synesthesia from someone merely imagining or pretending.`,
            `Synesthesia affects a minority of people, with estimates often cited around 4 percent, and it tends to run in families, suggesting a genetic component. It is not a disorder or illness; most synesthetes experience it as a neutral or even pleasant part of how they perceive the world, and many do not realize for years that others do not share it. The key first fact to carry: synesthesia is genuinely real, measurable, and fascinating, a true difference in how some brains wire the senses together. Everything skeptical we say later is aimed at the myths around it, never at the real phenomenon.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s1-what.webp`,
          imageCaption: `Synesthesia is a real, well-documented condition where stimulating one sense automatically and involuntarily triggers another. Grapheme-color synesthesia (most studied) perceives letters/numbers as having specific consistent colors (7 always green, A always red); chromesthesia hears sounds and sees colors at once (a piano note with a hue); other forms include tasting words or feeling days have positions in space. Not imagination or metaphor, a genuine difference in perception. Two features make it scientifically convincing: it's involuntary (synesthetes don't choose the colors, like you can't choose to stop seeing an apple as red) and consistent (pairings stay stable over time, tested by re-checking months apart). That involuntary consistency is the fingerprint separating real synesthesia from imagining or pretending. It affects a minority (estimates around 4%), tends to run in families (a genetic component), and is not a disorder, most experience it as neutral or pleasant. Key fact: it's genuinely real and measurable; later skepticism targets the myths, never the phenomenon.`,
          vocab: [
            {
              word: `actually is`,
              definition: `Synesthesia is a real, well-documented condition in which stimulating one sense automatically and involuntarily triggers an experience in another. In grapheme-color synesthesia, the most studied type, a person perceives letters or numbers as having specific, consistent colors (the 7 might always be green, the letter A always red); in chromesthesia, a person hears sounds and sees colors at the same time (a piano note arriving with a particular hue); and there are many other forms, from tasting words to feeling that days of the week occupy positions in space. It is not imagination or metaphor but a genuine difference in perception, and two features make it scientifically convincing: it is involuntary (synesthetes do not choose or try to make the colors appear, the way you cannot choose to stop seeing a red apple as red) and it is consistent (a given synesthete's pairings stay remarkably stable over time, so if A is red today it was red years ago, which researchers test by re-checking people's pairings months apart). That involuntary consistency is the fingerprint that separates real synesthesia from someone merely imagining or pretending. Synesthesia affects a minority of people (estimates often cited around 4 percent), tends to run in families (suggesting a genetic component), and is not a disorder or illness, with most synesthetes experiencing it as a neutral or even pleasant part of perception and many not realizing for years that others do not share it. The key first fact is that synesthesia is genuinely real, measurable, and fascinating, so all later skepticism is aimed at the myths around it, never at the real phenomenon.`,
              audioPrompt: `Synesthesia is a real, well-documented condition, {name}, in which stimulating one sense automatically and involuntarily triggers an experience in another. A person with grapheme-color synesthesia, the most studied type, perceives letters or numbers as having specific, consistent colors, the 7 might always be green, the letter A always red. A person with chromesthesia hears sounds and sees colors at the same time. It is not imagination or metaphor; it is a genuine difference in perception. Two features make it scientifically convincing. First, it is involuntary: synesthetes do not choose to make the colors appear; they simply do, the way you cannot choose to stop seeing a red apple as red. Second, it is consistent: a given person's pairings stay remarkably stable over time, and researchers test exactly this by re-checking people's pairings months apart. That involuntary consistency is the fingerprint that separates real synesthesia from someone merely imagining. Synesthesia affects a minority of people, with estimates often around 4 percent, and it tends to run in families. It is not a disorder; most synesthetes experience it as a neutral or even pleasant part of how they perceive the world. The key fact to carry: synesthesia is genuinely real, measurable, and fascinating, and everything skeptical we say later is aimed at the myths around it, never at the real phenomenon.`,
            },
            {
              word: `grapheme-color`,
              definition: `Grapheme-color synesthesia is the most studied type: a person perceives letters or numbers as having specific, consistent colors — the 7 might always be green, the letter A always red. Grapheme means a written letter or character. The colors are not chosen or imagined; they simply appear, automatically, every time the person sees or thinks of that letter or number.`,
              audioPrompt: `Grapheme-color synesthesia is the most studied and best-documented type of synesthesia, {name}, and it is a good place to start understanding what the condition actually is. The word "grapheme" means a written letter or character, like A, B, or 7. In grapheme-color synesthesia, a person perceives each letter or number as having a specific, consistent color. Not as a metaphor. Not as a choice. The 7 might always appear green. The letter A might always appear red. The letter S might always appear blue or gold or whatever the person's specific pairing is. And these pairings are consistent: if A is red today, it was red years ago and will be red years from now. The person did not decide this. It simply is that way, the same way you simply see a red apple as red, not because you decided to. That involuntary, automatic quality is exactly what makes grapheme-color synesthesia scientifically convincing and what separates it from someone who has just learned to associate certain colors with certain letters as a game. For a real grapheme-color synesthete, there is no learning involved. The color is simply there.`,
            },
            {
              word: `involuntary consistent`,
              definition: `The two defining features that make synesthesia scientifically convincing rather than just a claim. First, it is involuntary: synesthetes do not choose or try to make the colors appear; they simply do, the way you cannot choose to stop seeing a red apple as red. Second, it is consistent: a given synesthete's pairings stay remarkably stable over time, which researchers test by re-checking people's pairings months apart. That involuntary consistency is the fingerprint that separates real synesthesia from someone merely imagining or pretending.`,
              audioPrompt: `Involuntary and consistent are the two words that define what makes synesthesia scientifically convincing, {name}, and they are worth holding clearly. Involuntary means the synesthete does not choose the experience. A grapheme-color synesthete does not decide to see the letter A as red. They simply do, automatically, the way you cannot choose to stop seeing a red apple as red. The perception happens whether they want it to or not. That involuntary quality is the first fingerprint. Consistent means the pairings stay stable over time. If A is red today, it was red years ago and will still be red years from now. The specific color associated with each letter or sound does not randomly change. Researchers test exactly this by re-checking people's pairings months or even years apart, and finding that the pairings hold. That consistency is the second fingerprint. Together, these two qualities are what separate real synesthesia from someone who is imagining colors, pretending, or who has learned to associate colors with sounds as a deliberate exercise. A person who is imagining will give different answers when tested months apart. A real synesthete will give the same answers because the perception is not a choice or a memory; it is just how they perceive.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Synesthesia And Art`,
          paragraphs: [
            `Synesthesia has a deep and genuine connection to art, especially the meeting of music and color. The painter Wassily Kandinsky, a pioneer of abstract art in the early 1900s, described experiencing color and sound together and spoke of "hearing" his paintings and "seeing" music; many scholars believe synesthesia shaped his drive to paint the way music feels. The composer Alexander Scriabin designed a "color organ" meant to project colors alongside his music, mapping notes to hues. Whether every such artist was a clinical synesthete is debated, but the link between blended senses and a certain kind of art is real and old.`,
            `It continues today. A number of contemporary musicians have described seeing colors when they make or hear music, including artists who say specific songs or keys have specific colors to them, and some have spoken about composing partly by matching the colors they want. For a chromesthete musician, sound and color are not a metaphor they reach for; they are how the music actually arrives. This can genuinely inform creative choices, what colors an album should feel like, how a sound and an image belong together.`,
            `But here is where care begins, and it connects to last lesson. It is tempting to spin a neat story, "synesthesia is the secret of artistic genius," and that story is too simple. Plenty of great artists have no synesthesia at all, and plenty of synesthetes are not artists; the condition is not a creativity cheat code. What is true and interesting is more modest: for some artists, synesthesia gives a distinctive, ready-made way of connecting senses that can feed their work, one ingredient among many, not a magic source of talent. Hold the real, fascinating connection, and resist the tidy "genius gene" exaggeration, exactly the move you practiced with the brain myths.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s2-art.webp`,
          imageCaption: `Synesthesia has a deep, genuine connection to art, especially music and color. Wassily Kandinsky, abstract-art pioneer of the early 1900s, described experiencing color and sound together, "hearing" paintings and "seeing" music; many scholars think synesthesia shaped his drive to paint how music feels. Composer Alexander Scriabin designed a "color organ" to project colors with his music, mapping notes to hues. (Whether every such artist was clinically synesthetic is debated, but the link between blended senses and a kind of art is real and old.) It continues: contemporary musicians describe seeing colors when they make or hear music, some composing by matching colors they want, for a chromesthete, sound and color aren't a metaphor but how music actually arrives. But care begins here (connecting to last lesson): the neat story "synesthesia is the secret of artistic genius" is too simple, plenty of great artists have none, plenty of synesthetes aren't artists, it's not a creativity cheat code. The modest truth: for some artists it's a distinctive ready-made sense-connection that feeds their work, one ingredient, not magic talent.`,
          vocab: [
            {
              word: `synesthesia and art`,
              definition: `Synesthesia has a deep and genuine connection to art, especially the meeting of music and color. Wassily Kandinsky, a pioneer of abstract art in the early 1900s, described experiencing color and sound together and spoke of "hearing" his paintings and "seeing" music, and many scholars believe synesthesia shaped his drive to paint the way music feels; the composer Alexander Scriabin designed a "color organ" meant to project colors alongside his music, mapping notes to hues. Whether every such artist was a clinical synesthete is debated, but the link between blended senses and a certain kind of art is real and old, and it continues today, with a number of contemporary musicians describing seeing colors when they make or hear music and some composing partly by matching the colors they want, because for a chromesthete musician sound and color are not a metaphor they reach for but how the music actually arrives, which can genuinely inform creative choices. But care begins here, connecting to the last lesson: it is tempting to spin the neat story that "synesthesia is the secret of artistic genius," and that story is too simple, because plenty of great artists have no synesthesia and plenty of synesthetes are not artists, so the condition is not a creativity cheat code. The true, more modest and interesting point is that for some artists synesthesia gives a distinctive, ready-made way of connecting senses that can feed their work, one ingredient among many rather than a magic source of talent, so you hold the real, fascinating connection while resisting the tidy "genius gene" exaggeration, exactly the move practiced with the brain myths.`,
              audioPrompt: `Synesthesia has a deep and genuine connection to art, {name}, especially the meeting of music and color. The painter Wassily Kandinsky, a pioneer of abstract art in the early 1900s, described experiencing color and sound together and spoke of hearing his paintings and seeing music; many scholars believe synesthesia shaped his drive to paint the way music feels. The composer Alexander Scriabin designed a color organ meant to project colors alongside his music. It continues today. A number of contemporary musicians have described seeing colors when they make or hear music, and some compose partly by matching the colors they want. For a chromesthete musician, sound and color are not a metaphor; they are how the music actually arrives. But here is where care begins, and it connects to last lesson. It is tempting to spin a neat story, synesthesia is the secret of artistic genius, and that story is too simple. Plenty of great artists have no synesthesia at all, and plenty of synesthetes are not artists; the condition is not a creativity cheat code. What is true and interesting is more modest: for some artists, synesthesia gives a distinctive, ready-made way of connecting senses that can feed their work, one ingredient among many, not a magic source of talent. Hold the real, fascinating connection, and resist the tidy genius exaggeration.`,
            },
            {
              word: `Kandinsky`,
              definition: `Wassily Kandinsky, a pioneer of abstract art in the early 1900s, described experiencing color and sound together and spoke of "hearing" his paintings and "seeing" music. Many scholars believe synesthesia shaped his drive to paint the way music feels — making abstract art that tried to capture sound as color and movement rather than depicting objects. He is one of the most often-cited examples of the real, old connection between blended senses and art.`,
              audioPrompt: `Kandinsky is one of the most important and often-cited examples of synesthesia in art, {name}. Wassily Kandinsky was a pioneer of abstract art in the early 1900s, a painter who helped develop the idea that painting did not need to represent recognizable objects at all. It could work like music: pure color and form evoking feeling directly. And his path to that idea was shaped, many scholars believe, by his experience of blended senses. Kandinsky described experiencing color and sound together. He spoke of "hearing" his paintings and "seeing" music. For him, a color had a sound, and a sound had a color. His art was partly an attempt to translate that experience into paint, to make you see, in a canvas, something of what music felt like for a person who perceived it in color. Whether Kandinsky met every clinical definition of synesthesia is debated. But the link between his blended-sense perception and his revolutionary abstract work is real and serious, not a casual metaphor. He was trying to paint something he genuinely experienced, and understanding that makes his work more remarkable, not less.`,
            },
            {
              word: `Scriabin`,
              definition: `Composer Alexander Scriabin designed a "color organ" meant to project colors alongside his music, mapping specific notes to specific hues, so that an audience could see as well as hear his compositions. Whether every detail of his sense-blending was clinically synesthetic is debated, but the link between his blended-sense perception and his music is real and old — one of the most concrete historical examples of a composer trying to unify sound and color in performance.`,
              audioPrompt: `Alexander Scriabin was a Russian composer who took the idea of music and color so seriously that he invented something to make it visible, {name}. He designed what he called a "color organ," a device meant to project colored light alongside his music in performance. Different notes were mapped to different hues, so that an audience sitting in the hall would see colors shifting and moving as the music played, light and sound together in real time. He was composing for multiple senses at once. Whether Scriabin met every clinical definition of synesthesia is debated among scholars. But what is clear is that for him, sound and color had a real, specific connection, not a poetic metaphor but a felt association he took seriously enough to build an instrument around. His "color organ" is one of the most concrete historical examples of a composer trying to unify music and color as a single experience, and it places him directly in the real, old connection between blended senses and a certain kind of art. The drive to paint the way music feels, or to make music that looks like something, runs through many artists, and Scriabin is one of the clearest and most ambitious examples of what that drive can produce.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Myths Around Synesthesia`,
          paragraphs: [
            `Now the cloud of myth, because something this fascinating attracts plenty. The first and biggest is that "anyone can train themselves to have real synesthesia, like unlocking a superpower." This is mostly false in the strong sense. Genuine synesthesia is involuntary and consistent, usually present from childhood and likely genetic; you cannot simply practice your way into automatically seeing the letter A as red the way a real grapheme-color synesthete does. People can absolutely learn to associate colors with sounds on purpose, and that can be a useful creative exercise, but a deliberate, learned association is not the same as the automatic, involuntary perception that defines real synesthesia. The product promising to "unlock your synesthetic genius in 30 days" is selling the myth, not the phenomenon.`,
            `The second myth is that a drug-induced experience of blended senses is "the same as synesthesia." Certain substances can produce temporary sensory-blending experiences, but most researchers distinguish these from true synesthesia, which is stable, lifelong, consistent, and involuntary in everyday life, not a temporary altered state. Treating a one-off chemical experience as identical to a lifelong perceptual trait blurs an important line, and it is often used to make a product or experience sound more profound than it is.`,
            `The third myth is the one from last lesson wearing a new costume: "synesthetes are geniuses, and synesthesia is the key to extraordinary creativity or memory." Synesthesia is genuinely associated with some interesting cognitive differences, and a few famous high-memory individuals have had it, but it does not make someone a genius, and most synesthetes are ordinary people who happen to perceive an extra layer of the world. The honest picture is wonderful enough without the inflation: a real, involuntary, often-beautiful difference in perception that a minority of people live with, sometimes feeding their art, never a superpower, a shortcut, or a guarantee of genius.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s3-myths.webp`,
          imageCaption: `The cloud of myth around synesthesia. First and biggest: "anyone can train real synesthesia like unlocking a superpower", mostly false in the strong sense. Genuine synesthesia is involuntary, consistent, usually present from childhood, likely genetic; you can't practice your way into automatically seeing A as red like a real grapheme-color synesthete. You CAN deliberately learn to associate colors with sounds (a useful creative exercise), but a learned association isn't the automatic, involuntary perception that defines real synesthesia, so "unlock your synesthetic genius in 30 days" sells the myth. Second myth: a drug-induced sense-blend is "the same as synesthesia", but researchers distinguish temporary altered states from true synesthesia (stable, lifelong, consistent, involuntary). Third (last lesson's myth in a new costume): "synesthetes are geniuses." It's associated with some interesting cognitive differences and a few high-memory people had it, but it doesn't make someone a genius, most synesthetes are ordinary people perceiving an extra layer. The honest picture is wonderful without inflation.`,
          vocab: [
            {
              word: `around synesthesia`,
              definition: `Because synesthesia is so fascinating, it has collected a cloud of myth. The first and biggest is that "anyone can train themselves to have real synesthesia, like unlocking a superpower," which is mostly false in the strong sense: genuine synesthesia is involuntary and consistent, usually present from childhood and likely genetic, so you cannot simply practice your way into automatically seeing the letter A as red the way a real grapheme-color synesthete does, and although people can deliberately learn to associate colors with sounds (a useful creative exercise), a learned association is not the same as the automatic, involuntary perception that defines real synesthesia, so any product promising to "unlock your synesthetic genius in 30 days" is selling the myth, not the phenomenon. The second myth is that a drug-induced experience of blended senses is "the same as synesthesia," but most researchers distinguish temporary substance-induced sensory blending from true synesthesia, which is stable, lifelong, consistent, and involuntary in everyday life rather than a temporary altered state, so treating a one-off chemical experience as identical to a lifelong perceptual trait blurs an important line and is often used to make something sound more profound than it is. The third myth is last lesson's "genius" myth in a new costume, that "synesthetes are geniuses and synesthesia is the key to extraordinary creativity or memory"; synesthesia is genuinely associated with some interesting cognitive differences and a few famous high-memory individuals have had it, but it does not make someone a genius, and most synesthetes are ordinary people who happen to perceive an extra layer of the world. The honest picture is wonderful enough without inflation: a real, involuntary, often-beautiful difference in perception that a minority live with, sometimes feeding their art, never a superpower, a shortcut, or a guarantee of genius.`,
              audioPrompt: `Now the cloud of myth, {name}, because something this fascinating attracts plenty. The first and biggest is that anyone can train themselves to have real synesthesia, like unlocking a superpower. This is mostly false in the strong sense. Genuine synesthesia is involuntary and consistent, usually present from childhood and likely genetic; you cannot simply practice your way into automatically seeing the letter A as red the way a real synesthete does. People can absolutely learn to associate colors with sounds on purpose, and that can be a useful creative exercise, but a deliberate, learned association is not the same as the automatic, involuntary perception that defines real synesthesia. The second myth is that a drug-induced experience of blended senses is the same as synesthesia. Certain substances can produce temporary sensory-blending experiences, but most researchers distinguish these from true synesthesia, which is stable, lifelong, consistent, and involuntary in everyday life. The third myth is the one from last lesson wearing a new costume: synesthetes are geniuses, and synesthesia is the key to extraordinary creativity. It is associated with some interesting cognitive differences, but it does not make someone a genius, and most synesthetes are ordinary people who happen to perceive an extra layer of the world. The honest picture is wonderful enough without the inflation.`,
            },
            {
              word: `trainable myth`,
              definition: `The first and biggest myth around synesthesia: that anyone can train themselves to have real synesthesia, like unlocking a superpower. This is mostly false in the strong sense. Genuine synesthesia is involuntary and consistent, usually present from childhood and likely genetic; you cannot simply practice your way into automatically seeing the letter A as red the way a real grapheme-color synesthete does. People can learn deliberate color-sound associations, but a learned association is not the same as the automatic, involuntary perception that defines real synesthesia. Any product promising to "unlock your synesthetic genius in 30 days" is selling the myth, not the phenomenon.`,
              audioPrompt: `The trainable myth is the first and biggest false claim around synesthesia, {name}, and it is worth understanding precisely so you can spot it when you see it. The myth says: anyone can train themselves to have real synesthesia, like unlocking a superpower that was always hidden inside them. Products, apps, and posts repeat this constantly, and it sounds exciting. The problem is that it is mostly false in the strong sense. Genuine synesthesia is involuntary. It is consistent. It is usually present from childhood. And it likely has a genetic component. You do not practice your way into automatically seeing the letter A as red in the way a real grapheme-color synesthete does. Now, there is something true nearby: people absolutely can learn to deliberately associate colors with sounds or letters. That is a real, sometimes useful creative exercise. You can intentionally link warm colors to warm sounds, and you can practice doing this until it comes more naturally. But a deliberately learned, intentional association is not the same as the automatic, involuntary, lifelong perception that defines real synesthesia. The app that promises to install genuine synesthesia in 30 days is selling the myth, not the phenomenon. At best it delivers the learned association while claiming to deliver the involuntary trait. That is the sleight of hand to catch.`,
            },
            {
              word: `drug trip`,
              definition: `The second myth around synesthesia: that a drug-induced experience of blended senses is "the same as synesthesia." Certain substances can produce temporary sensory-blending experiences, but most researchers distinguish these from true synesthesia, which is stable, lifelong, consistent, and involuntary in everyday life — not a temporary altered state. Treating a one-off chemical episode as identical to a lifelong perceptual trait blurs an important line and is often used to make something sound more profound than it is.`,
              audioPrompt: `The drug trip myth is the second false claim around synesthesia, {name}. You will sometimes hear people say that a substance they took "gave them synesthesia" — that they experienced colors with sounds or blended senses in a way that felt like synesthesia. And it is true that certain substances can produce temporary sensory-blending experiences. The brain does interesting things in altered states, and some of those things can superficially resemble synesthesia. But most researchers draw a careful distinction between a temporary, substance-induced experience and true synesthesia. True synesthesia is stable and lifelong. It is consistent. It is involuntary in ordinary daily life, not just during an altered state. A grapheme-color synesthete sees A as red when they are completely sober, when they have just woken up, when they are reading the news. Every time. Without a substance. A temporary drug-induced sense-blending is a different kind of thing, interesting in its own right, but not the same as a stable, involuntary, lifelong perceptual trait. Conflating the two blurs an important line, and it is often done to make a product or experience sound more profound or significant than it is.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What You Can And Can't Learn From It`,
          paragraphs: [
            `So if you cannot train yourself into real synesthesia, what can you actually take from all this as a creative person? Quite a lot, as long as you are honest about the difference between the genuine trait and a deliberate technique. You can absolutely use cross-sensory thinking on purpose: deciding what color a song should "feel" like, choosing music to match the mood of a painting, designing a poster so its colors echo the rhythm of the words. This is a real and powerful creative tool, and it is available to everyone, you just have to be honest that you are choosing these connections deliberately, not perceiving them automatically.`,
            `This honesty matters, and it is the same care you have practiced all band. Saying "I deliberately matched warm colors to this warm-sounding song" is true and useful. Saying "I have synesthesia, I literally see this song as orange" when you are actually making a deliberate artistic choice is borrowing a real condition's name for something it is not, which both misdescribes your own process and muddies what synesthesia actually means for the people who genuinely have it. You can use cross-sensory creativity fully and freely without claiming a perceptual trait you do not have.`,
            `There is also a deeper, gentler lesson here about difference. Synesthesia is a vivid reminder that other people can genuinely perceive the world differently from you, not wrongly, just differently, and that this is part of the ordinary range of being human. The synesthete is not broken or magical; they are experiencing a real, neutral variation in perception. Meeting that with curiosity rather than either dismissal ("you're making it up") or hype ("you have a superpower") is its own small act of respect, the same clear, kind seeing this whole band has been building toward.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s4-learn.webp`,
          imageCaption: `What you can and can't take from synesthesia as a creative person, if you're honest about the difference between the genuine trait and a deliberate technique. You CAN use cross-sensory thinking on purpose: deciding what color a song should "feel" like, choosing music to match a painting's mood, designing a poster so colors echo the words' rhythm, a real, powerful creative tool available to everyone, as long as you're honest you're choosing these connections deliberately, not perceiving them automatically. The honesty matters (same band-long care): "I deliberately matched warm colors to this warm song" is true and useful; "I have synesthesia, I literally see this song as orange" when you're actually making an artistic choice borrows a real condition's name, misdescribing your process AND muddying what synesthesia means for those who have it. A deeper, gentler lesson about difference: synesthesia reminds us others genuinely perceive the world differently, not wrongly, just differently, part of the ordinary human range. The synesthete isn't broken or magical. Meet it with curiosity, not dismissal ("you're making it up") or hype ("superpower").`,
          vocab: [
            {
              word: `from synesthesia`,
              definition: `Even though you cannot train yourself into real synesthesia, there is a great deal to take from it as a creative person, as long as you are honest about the difference between the genuine trait and a deliberate technique. You can absolutely use cross-sensory thinking on purpose, deciding what color a song should "feel" like, choosing music to match the mood of a painting, or designing a poster so its colors echo the rhythm of the words, which is a real and powerful creative tool available to everyone, provided you are honest that you are choosing these connections deliberately rather than perceiving them automatically. This honesty matters and is the same care practiced all band: saying "I deliberately matched warm colors to this warm-sounding song" is true and useful, while saying "I have synesthesia, I literally see this song as orange" when you are actually making a deliberate artistic choice borrows a real condition's name for something it is not, which both misdescribes your own process and muddies what synesthesia actually means for the people who genuinely have it, so you can use cross-sensory creativity fully and freely without claiming a perceptual trait you do not have. There is also a deeper, gentler lesson about difference: synesthesia is a vivid reminder that other people can genuinely perceive the world differently from you, not wrongly but differently, as part of the ordinary range of being human, and the synesthete is not broken or magical but experiencing a real, neutral variation in perception, so meeting that with curiosity rather than either dismissal ("you're making it up") or hype ("you have a superpower") is its own small act of respect, the same clear, kind seeing this whole band has been building toward.`,
              audioPrompt: `So if you cannot train yourself into real synesthesia, {name}, what can you actually take from all this as a creative person? Quite a lot, as long as you are honest about the difference between the genuine trait and a deliberate technique. You can absolutely use cross-sensory thinking on purpose: deciding what color a song should feel like, choosing music to match the mood of a painting, designing a poster so its colors echo the rhythm of the words. This is a real and powerful creative tool, available to everyone, you just have to be honest that you are choosing these connections deliberately, not perceiving them automatically. Saying I deliberately matched warm colors to this warm-sounding song is true and useful. Saying I have synesthesia, I literally see this song as orange when you are actually making a deliberate artistic choice borrows a real condition's name for something it is not. You can use cross-sensory creativity fully and freely without claiming a perceptual trait you do not have. There is also a deeper, gentler lesson here about difference. Synesthesia is a vivid reminder that other people can genuinely perceive the world differently from you, not wrongly, just differently. The synesthete is not broken or magical. Meeting that with curiosity rather than either dismissal or hype is its own small act of respect.`,
            },
            {
              word: `cross-sensory`,
              definition: `Using cross-sensory thinking on purpose as a creative tool: deciding what color a song should "feel" like, choosing music to match the mood of a painting, designing a poster so its colors echo the rhythm of the words. This is a real and powerful creative tool available to everyone — you just have to be honest that you are choosing these connections deliberately, not perceiving them automatically. Cross-sensory thinking used intentionally is not the same as synesthesia, but it is genuinely powerful creative craft.`,
              audioPrompt: `Cross-sensory thinking is a real and powerful creative tool, {name}, and it is available to everyone, not just synesthetes. Here is what it means to use it on purpose. You decide what color a piece of music should "feel" like. You choose a piece of music to match the mood of a painting you are working on. You design a poster so that its colors echo the rhythm of the words on it. You notice that a warm sound and a warm color feel like they belong together, and you use that connection deliberately. These are all real creative choices, and they are used by designers, musicians, filmmakers, and artists constantly. The key is honesty about what you are doing. You are choosing these connections. You are not perceiving them automatically the way a synesthete does. Saying "I deliberately matched warm colors to this warm-sounding song" is accurate and useful. Saying "I have synesthesia, I literally see this song as orange" when you are making a deliberate artistic choice borrows a real condition's name for something it is not. That matters both for your own process, because it misdescribes how you work, and for people who genuinely have synesthesia, because it muddies what their actual experience means. Use cross-sensory thinking fully and freely. Just call it what it is.`,
            },
            {
              word: `perceive differently`,
              definition: `A deeper, gentler lesson from synesthesia: other people can genuinely perceive the world differently from you — not wrongly, just differently — as part of the ordinary range of being human. The synesthete is not broken or magical; they are experiencing a real, neutral variation in perception. Meeting that with curiosity rather than either dismissal ("you're making it up") or hype ("you have a superpower") is its own small act of respect.`,
              audioPrompt: `Perceiving differently is the deeper, gentler lesson that synesthesia offers, {name}, beyond the neuroscience and the source evaluation. Here it is, simply: other people can genuinely perceive the world differently from you. Not wrongly. Not in a way that is broken or needs fixing. Just differently. A synesthete does not perceive A as red because something is wrong with their brain. They perceive it that way because that is how their brain has always been wired, and it is a real, neutral variation in how human perception works. Most synesthetes do not think of themselves as special or magical. Many of them do not even realize for years that other people do not share their perception, because it is simply how the world has always been for them. Meeting that with curiosity is the right response. Not dismissal, "you're making it up, there's no way you actually see red when you look at the letter A." And not hype, "you have a superpower, you're secretly a genius." Just curiosity: that is genuinely interesting, what is it like? That small act of curious respect is part of the same clear, kind seeing that this whole band has been building toward. Other people's experience is real, even when it is different from yours.`,
            },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You learned that synesthesia is genuinely real: an involuntary, consistent blending of the senses where one sense automatically triggers another, present in a minority of people, running in families, and not a disorder. You saw its real and old connection to art, from Kandinsky and Scriabin to contemporary musicians who see colors in sound, while resisting the too-tidy claim that synesthesia is the secret of genius.`,
            `You met the cloud of myth: that anyone can train real synesthesia like a superpower (no, deliberate association is not the same as involuntary perception), that a drug trip equals synesthesia (no, researchers separate temporary altered states from a stable lifelong trait), and that synesthetes are geniuses (no, most are ordinary people perceiving an extra layer). And you learned what you genuinely can take from it: deliberate cross-sensory creativity, used honestly, plus a gentle respect for the real fact that people perceive differently.`,
            `Now the source-evaluation screen will hand you several real or realistic sources about synesthesia: a careful researcher, a person describing their own genuine experience, an app promising to "unlock synesthesia" as a superpower, a post equating a drug trip with the condition, and a thoughtful artist describing deliberate cross-sensory technique. Sort them with the right criteria, honoring the real phenomenon and real first-person experience, while catching the superpower hype, the false equivalences, and the genius inflation. Real wonder and clear eyes, one more time. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l14-s5-before.webp`,
          imageCaption: `Threads together. Synesthesia is genuinely real: an involuntary, consistent blending of senses where one automatically triggers another, in a minority of people, running in families, not a disorder. Its art connection is real and old (Kandinsky, Scriabin, contemporary musicians who see colors in sound), while resisting the too-tidy "secret of genius" claim. The cloud of myth: "anyone can train it like a superpower" (no, deliberate association isn't involuntary perception), "a drug trip equals synesthesia" (no, researchers separate temporary states from a stable lifelong trait), "synesthetes are geniuses" (no, most are ordinary people perceiving an extra layer). What you genuinely can take: deliberate cross-sensory creativity used honestly, plus gentle respect for the fact that people perceive differently. The source-evaluation screen hands you sources to sort: honor the real phenomenon and real first-person experience, catch the superpower hype, false equivalences, and genius inflation. Real wonder and clear eyes, one more time.`,
          vocab: [
            {
              word: `catching hype`,
              definition: `The synthesis before the source-evaluation screen. You learned that synesthesia is genuinely real: an involuntary, consistent blending of the senses where one sense automatically triggers another (grapheme-color, chromesthesia, and other forms), present in a minority of people with estimates around 4 percent, running in families, and not a disorder. You saw its real and old connection to art, from Wassily Kandinsky and Alexander Scriabin to contemporary musicians who see colors in sound, while resisting the too-tidy claim that synesthesia is the secret of artistic genius. You met the cloud of myth: that anyone can train real synesthesia like a superpower (no, because deliberate association is not the same as involuntary, automatic perception), that a drug-induced experience equals synesthesia (no, because researchers separate temporary altered states from a stable, lifelong, involuntary trait), and that synesthetes are geniuses (no, because most are ordinary people who perceive an extra layer, even if a few famous high-memory individuals had it). And you learned what you genuinely can take from it: deliberate cross-sensory creativity used honestly (choosing colors for a song on purpose, while not claiming a perceptual trait you do not have), plus a gentle respect for the real fact that people perceive the world differently. The source-evaluation screen will hand you several real or realistic sources to sort with the right criteria, honoring the real phenomenon and real first-person experience while catching the superpower hype, the false equivalences, and the genius inflation, holding real wonder and clear eyes at once.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You learned that synesthesia is genuinely real: an involuntary, consistent blending of the senses where one sense automatically triggers another, present in a minority of people, running in families, and not a disorder. You saw its real and old connection to art, from Kandinsky and Scriabin to contemporary musicians who see colors in sound, while resisting the too-tidy claim that synesthesia is the secret of genius. You met the cloud of myth: that anyone can train real synesthesia like a superpower, that a drug trip equals synesthesia, and that synesthetes are geniuses, and you saw why each is false. And you learned what you genuinely can take from it: deliberate cross-sensory creativity, used honestly, plus a gentle respect for the real fact that people perceive differently. Now the source-evaluation screen will hand you several sources about synesthesia, and your job is to sort them with the right criteria, honoring the real phenomenon and real first-person experience, while catching the superpower hype, the false equivalences, and the genius inflation. Real wonder and clear eyes, one more time.`,
            },
            {
              word: `four percent`,
              definition: `Synesthesia affects a minority of people — estimates often cited around 4 percent — and tends to run in families, suggesting a genetic component. It is not a disorder or illness; most synesthetes experience it as a neutral or even pleasant part of how they perceive the world, and many do not realize for years that others do not share it.`,
              audioPrompt: `Four percent is the estimate often cited for how many people have synesthesia, {name}, and that number tells you a few important things. It is a minority, but not a tiny one. If around 4 percent of people experience synesthesia in some form, that is roughly 1 in 25 people. There are probably people in any large school, any large workplace, any large neighborhood who have it. And yet because most synesthetes do not realize for years that others do not share their perception, it often goes unnoticed. The reason it runs in families is that it appears to have a genetic component: the tendency to wire the senses this way together seems to be heritable. This is part of why it resists the "anyone can train it" narrative, it is not a learned skill but a neurological difference you are born with. And it is important that it is not a disorder or illness. Most synesthetes experience their synesthesia as neutral or even pleasant. It is simply an extra layer of the world. A grapheme-color synesthete does not experience their letters' colors as distressing or distracting; for them it is just how letters are. Understanding this changes how you would respond if someone told you they have synesthesia: not with alarm or pity, but with genuine curiosity about what their ordinary experience of the world is like.`,
            },
            {
              word: `deliberate honest`,
              definition: `The key to using cross-sensory creativity as a non-synesthete: use it deliberately and honestly. You can decide what color a song should "feel" like, choose music to match a painting's mood, design a poster so its colors echo the rhythm of the words — and all of this is real creative craft. You just have to be honest that you are choosing these connections rather than perceiving them automatically. Claiming a perceptual trait you do not have misdescribes your process and muddies what synesthesia means for people who genuinely have it.`,
              audioPrompt: `Deliberate and honest is the right combination for using cross-sensory creativity when you are not a synesthete, {name}. Deliberate means you are choosing the connections on purpose: this song feels warm, so I will use warm colors. This rhythm is sharp and staccato, so I will use sharp, high-contrast shapes. This melody feels expansive, so I will let the colors breathe. Those are real creative decisions. They have real effects. They are used by designers, composers, filmmakers, and artists everywhere, and they are available to you completely and freely. The honest part means calling it what it is: a deliberate choice, not an automatic perception. The difference matters. A real synesthete does not choose their color-sound connections. They simply have them, involuntarily, from childhood. When you say "I deliberately matched warm colors to this warm-sounding song," you are being accurate about your process, and that accuracy is useful: it tells you and your audience how the work was made. When you say "I have synesthesia, I literally see this song as orange" as a way of sounding more authentic or special, you are borrowing a real condition's name for something it is not. That misdescribes your own process, and it muddies what synesthesia actually means for the people who genuinely have it. Use cross-sensory creativity fully and freely. Just be honest about what it is.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l14-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Sources On Synesthesia`,
          intro: `{name}, five sources about synesthesia. For each, decide how much to trust it and on what terms. The key skill: honor the genuine phenomenon and real first-person experience, while catching the "unlock it as a superpower" hype, the drug-trip false equivalence, and the "synesthetes are geniuses" inflation.`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `A perception researcher explaining synesthesia`,
              type: `Scholarly / researcher source`,
              context: `A researcher who studies synesthesia explains what defines it (involuntary, consistent, often from childhood, likely genetic), how it is tested (re-checking pairings over time), roughly how common it is, and is careful to note it is a neutral perceptual difference, not a disorder or a superpower.`,
              quote: `"What makes it synesthesia, not imagination, is that it's involuntary and consistent, we re-test people months apart and the pairings hold. It's a real perceptual difference. It isn't a disorder, and it isn't a superpower."`,
              questions: [
                `Why is this a strong, trustworthy source on synesthesia?`,
                `Why does "involuntary and consistent, re-tested months apart" matter as evidence?`,
                `How does this source avoid both dismissal and hype?`,
              ],
              evaluation: `This is a strong Tier A source. The researcher gives the actual defining features, involuntary and consistent, explains how the claim is tested (re-checking pairings months apart, which is the real method), notes roughly how common it is, and carefully frames it as a neutral perceptual difference rather than a disorder or a superpower. The "involuntary and consistent, re-tested months apart" point matters because it is precisely what separates genuine synesthesia from imagination or pretending, a verifiable fingerprint, not a vibe. And it threads the needle perfectly: it neither dismisses synesthesia as made up nor inflates it into a superpower, which is exactly the balanced, evidence-based posture you should trust most.`,
            },
            {
              id: `s2`,
              tier: `B`,
              title: `A synesthete describing their own experience`,
              type: `First-person / lived-experience source`,
              context: `A person with grapheme-color synesthesia describes, in their own words, how letters and numbers have always had specific colors for them, that it is automatic and unchosen, that it has been stable their whole life, and that they didn't realize for years that others don't experience it. They make no grand claims about genius or superpowers.`,
              quote: `"To me the 4 has always been green and the 7 dark red, I never decided that, it's just there, and it's been the same since I was little. I didn't realize until middle school that not everyone sees numbers this way."`,
              questions: [
                `What kind of evidence is a first-person account, and what are its strengths and limits?`,
                `Why does this account fit what the researcher (S1) described?`,
                `How is this different from someone claiming a trained "superpower"?`,
              ],
              evaluation: `This is solid Tier B: genuine, valuable first-person testimony. Its strength is that lived experience is exactly the right kind of evidence for what synesthesia feels like from the inside, and this account rings true because it matches the defining features the researcher named, involuntary ("I never decided that"), consistent ("the same since I was little"), and present from childhood. Its limit is the usual limit of any single personal account: one person's report is not a controlled study, and you would not generalize population-level facts from it. Crucially, it is the opposite of a trained-superpower claim, the person describes an automatic, lifelong perception they did not choose and makes no boast of genius, which is exactly what makes it credible. Trust it as authentic lived experience that fits the science.`,
            },
            {
              id: `s3`,
              tier: `C-pseudoscience`,
              title: `An app promising to "unlock your synesthesia superpower"`,
              type: `App / product claim`,
              context: `An app claims that with 30 days of daily training, anyone can "unlock latent synesthesia," "see music in color like a genius," and "supercharge creativity and memory," selling a subscription on the promise of installing a real synesthetic perception.`,
              quote: `"Unlock the hidden synesthesia superpower inside you! Just 30 days of training to see sound, taste color, and access genius-level creativity and memory. Your brain's secret ability, activated."`,
              questions: [
                `Which specific claims here cross from "useful exercise" into myth?`,
                `What's the difference between learning deliberate associations and the app's promise?`,
                `Which earlier myths is this product combining?`,
              ],
              evaluation: `This is Tier C-pseudoscience, combining several myths at once. The claims that cross from useful exercise into myth are "unlock latent synesthesia," "activate your brain's secret ability," and "access genius-level creativity and memory", these promise to install a genuine, involuntary perceptual trait and to confer genius, neither of which training can do. The real distinction it blurs: you genuinely can learn deliberate color-sound associations as a creative exercise, but that is a chosen technique, not the automatic, involuntary, lifelong perception that defines real synesthesia, and the app sells the latter while at best delivering the former. It bundles the "anyone can train it as a superpower" myth with the "synesthetes are geniuses" myth from last lesson, plus a subscription motive, the flattering promise of hidden genius for a monthly fee is the whole tell. Skepticism is the right response.`,
            },
            {
              id: `s4`,
              tier: `C-pseudoscience`,
              title: `A post claiming a drug trip "gave me synesthesia"`,
              type: `Popular / social-media claim`,
              context: `A viral post claims that a single drug experience "gave the writer synesthesia," presenting a temporary, substance-induced episode of blended senses as identical to the lifelong clinical trait, and implying anyone can access "real synesthesia" this way.`,
              quote: `"One trip and suddenly I had full synesthesia, I could see the music as colors. It's proof anyone can unlock it, your brain already has the ability, you just need the right key."`,
              questions: [
                `Why do researchers distinguish a temporary drug experience from synesthesia?`,
                `What false equivalence is this post making?`,
                `Why is "proof anyone can unlock it" an overreach here?`,
              ],
              evaluation: `This is Tier C-pseudoscience built on a false equivalence. Researchers distinguish substance-induced sensory blending from true synesthesia because real synesthesia is stable, lifelong, consistent, and involuntary in ordinary daily life, whereas a drug experience is a temporary altered state, calling them the same thing collapses an important distinction. The false equivalence is exactly that: treating a one-off chemical episode as identical to a lifelong perceptual trait. And "proof anyone can unlock it" is a double overreach: a single anecdote is not proof of anything general, and a temporary trip does not demonstrate that anyone can acquire the permanent, involuntary condition. The post is also implicitly promoting drug use as a creativity "key," which is both unsafe and unsupported. Skepticism, and a note of caution, is the right response.`,
            },
            {
              id: `s5`,
              tier: `B`,
              title: `An artist describing deliberate cross-sensory technique`,
              type: `Practitioner source`,
              context: `An artist who does NOT claim to have synesthesia explains how they deliberately use cross-sensory thinking in their work, choosing colors to match a song's mood, designing visuals to echo a rhythm, and is explicit that these are chosen artistic decisions, not automatic perceptions.`,
              quote: `"I don't have synesthesia, I'm not seeing the colors automatically. I choose them. This song feels warm, so I reach for warm colors. It's a deliberate tool, and being honest about that matters to me."`,
              questions: [
                `Why is this artist's honesty about NOT having synesthesia important?`,
                `Is deliberate cross-sensory technique a legitimate creative tool?`,
                `How does this model the right way to use these ideas?`,
              ],
              evaluation: `This is solid Tier B and a model of honest practice. The artist's explicit statement that they do not have synesthesia matters because it correctly separates a deliberate technique from an involuntary trait, instead of borrowing a real condition's name for an artistic choice (which would both misdescribe their process and muddy what synesthesia means for people who genuinely have it). Deliberate cross-sensory technique is absolutely a legitimate, powerful creative tool, available to everyone, choosing colors to match a song's mood is real craft. This source models exactly the right way to use the lesson's ideas: use cross-sensory creativity fully and freely, while being honest that you are choosing the connections, not perceiving them automatically. Trustworthy, and a good example of the honesty the whole band has been building.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your rule for honoring real synesthesia (and real first-person accounts of it) while catching the "unlock it as a superpower" and "a drug trip is the same thing" myths? And how do you use cross-sensory creativity honestly without claiming a trait you don't have? In 5-6 sentences.`,
          reflectionPrompt: `Synesthesia shows that other people can genuinely perceive the world differently from you. Have you ever assumed everyone experiences something the way you do, only to find they don't? And where have you seen a real, fascinating thing (like synesthesia) get turned into a "superpower" product or a too-tidy genius story?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What actually defines synesthesia as a real phenomenon, rather than imagination?`,
              options: [
                `That it's a poetic way of describing strong feelings about colors and sounds.`,
                `That it can be switched on and off whenever the person chooses to.`,
                `That it's involuntary and consistent — pairings happen automatically and stay stable over time.`,
                `That it only ever appears in a person right after they take certain particular substances.`,
              ],
              correctIndex: 2,
              explanation: `Synesthesia is defined by being involuntary (the person doesn't choose it) and consistent (the pairings stay stable over time, which researchers verify by re-testing months apart). That fingerprint separates it from imagination or pretending. The distractors reduce it to metaphor, make it voluntary, or confuse it with a drug state.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Roughly what's true about how common synesthesia is and where it comes from?`,
              options: [
                `It's a disorder that about half of all people develop after illness.`,
                `It affects a minority (estimates around 4%) and tends to run in families.`,
                `Everyone has it but most people suppress it.`,
                `It only exists in professional artists and musicians.`,
              ],
              correctIndex: 1,
              explanation: `Synesthesia affects a minority of people — estimates often cited around 4% — and tends to run in families, suggesting a genetic component; it's not a disorder. The distractors invent a disorder, the "everyone has it" myth, or restrict it to artists.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Kandinsky and Scriabin are linked to synesthesia and art. What's the careful, accurate takeaway?`,
              options: [
                `Synesthesia is the secret cause of all great art.`,
                `Only people who genuinely have synesthesia can ever go on to become real, serious artists.`,
                `Great art proves the artist must have had synesthesia.`,
                `Blended senses have a real link to some art — but synesthesia is one ingredient, not a cheat code.`,
              ],
              correctIndex: 3,
              explanation: `The link between blended senses and certain art is real and old, but synesthesia isn't the secret of genius — plenty of great artists don't have it and plenty of synesthetes aren't artists. It's one ingredient among many. The distractors all inflate it into the cause of, or requirement for, great art.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `An app promises to "train you into real synesthesia in 30 days." Why is that mostly a myth?`,
              options: [
                `Because real synesthesia is involuntary and likely genetic — a learned association isn't the same.`,
                `Because 30 days is too short, but 90 days would work.`,
                `Because only very young children, and never any adults, can ever be successfully trained into it.`,
                `Because synesthesia is not actually a real phenomenon in the very first place, so none of it works.`,
              ],
              correctIndex: 0,
              explanation: `Genuine synesthesia is involuntary, consistent, usually present from childhood, and likely genetic — you can't practice your way into automatically seeing A as red. You CAN learn deliberate color-sound associations, but that chosen technique isn't the automatic perception that defines real synesthesia. The distractors suggest a longer program works, limit it to children, or deny it's real.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Someone says a drug experience "gave them full synesthesia." Why do researchers push back on that?`,
              options: [
                `Because drugs can never affect perception in any way.`,
                `Because real synesthesia is a stable, lifelong, involuntary trait, not a temporary altered state.`,
                `Because only completely sober people are ever able to have any kind of real experiences at all.`,
                `Because synesthesia can only be caused by music, never anything else.`,
              ],
              correctIndex: 1,
              explanation: `Researchers distinguish temporary, substance-induced sensory blending from true synesthesia, which is stable, lifelong, consistent, and involuntary in everyday life. Treating a one-off chemical episode as identical to a lifelong trait collapses an important distinction. The distractors overclaim drugs do nothing, moralize about sobriety, or invent a music-only rule.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `The "synesthetes are geniuses" claim is really a familiar myth in a new costume. Which one?`,
              options: [
                `The "we only use 10% of our brains" myth from last lesson.`,
                `The "left brain vs right brain" myth from last lesson.`,
                `The famous golden-ratio "it is secretly hidden absolutely everywhere in the world" myth.`,
                `The genius/special-gift inflation — most synesthetes are ordinary people, not geniuses.`,
              ],
              correctIndex: 3,
              explanation: `It's the same "special gift = genius" inflation from the brain-myth lesson, wearing a new costume. Synesthesia is associated with some interesting cognitive differences and a few high-memory people had it, but it doesn't make someone a genius — most synesthetes are ordinary people. The distractors name other specific myths rather than the genius-inflation pattern.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `You don't have synesthesia, but you want to use color-and-sound connections in your art. What's the honest way to do it?`,
              options: [
                `Use deliberate cross-sensory choices freely — just be honest you're choosing them, not perceiving them.`,
                `Tell people you have synesthesia so your art seems more special.`,
                `Avoid connecting senses at all, since only real synesthetes are allowed to.`,
                `Wait patiently until you have fully trained yourself into having real synesthesia first, then begin.`,
              ],
              correctIndex: 0,
              explanation: `Deliberate cross-sensory creativity — choosing colors to match a song's mood — is a real, powerful tool available to everyone, as long as you're honest you're choosing the connections, not perceiving them automatically. The distractors claim a trait you don't have, needlessly forbid the technique, or chase the trainable-synesthesia myth.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the deeper, gentler lesson synesthesia offers about other people?`,
              options: [
                `That people who perceive differently are broken and need fixing.`,
                `That you should always deeply envy anyone who happens to have a different perception from yours.`,
                `That others can genuinely perceive the world differently — and that deserves curiosity, not dismissal or hype.`,
                `That perception is identical for everyone once you correct for opinion.`,
              ],
              correctIndex: 2,
              explanation: `Synesthesia is a vivid reminder that other people can genuinely perceive the world differently — not wrongly, just differently — as part of the ordinary range of being human, and that deserves curiosity rather than dismissal ("you're making it up") or hype ("you have a superpower"). The distractors pathologize difference, turn it into envy, or deny perceptual variation exists.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Since synesthesia is real, an app that promises to train anyone into "full synesthesia superpowers" in 30 days must be legitimate too.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False, and this is the core source-evaluation move of the lesson. The fact that synesthesia is genuinely real does not make a product promising to install it legitimate — a real phenomenon can have a cloud of false claims around it, and the trick is to aim skepticism precisely at the claims, not at the phenomenon. Genuine synesthesia is involuntary, consistent, usually present from childhood, and likely genetic; you can't practice your way into automatically perceiving the letter A as red the way a real grapheme-color synesthete does. What you genuinely can do is learn deliberate color-sound associations as a creative exercise — but a chosen, learned association is not the automatic, involuntary, lifelong perception that defines real synesthesia, and the app sells the latter while at best delivering the former. It also bundles in the "synesthetes are geniuses" inflation by promising "genius-level creativity," and it has an obvious subscription motive. So you can fully accept that synesthesia is real and fascinating, honor people who genuinely have it, AND reject the app's specific promises as myth-for-sale — holding both at once is exactly the clear-eyed wonder this lesson builds.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 13. A friend insists they "developed synesthesia" from a video game and that you can train it too as a creativity superpower — and they're a little hurt when you seem unconvinced. Using this lesson, what's the most honest and kind response?`,
              options: [
                `Tell them synesthesia isn't real and they're making the whole thing up.`,
                `Agree you both have synesthesia superpowers now, to keep the peace.`,
                `Affirm that cross-sensory experiences and deliberate color-sound associations are real and cool, gently explain that genuine synesthesia is involuntary and consistent (not trained-on like a superpower), and keep respect for their experience without endorsing the "trainable superpower" claim.`,
                `Refuse to talk about it, since correcting a friend isn't worth the awkwardness.`,
              ],
              correctIndex: 2,
              explanation: `Applied source evaluation, done kindly. The move is to honor what's genuinely real and cool (cross-sensory experiences, and deliberately associating colors with sounds as a creative tool everyone can use), while gently distinguishing that from genuine synesthesia, which is involuntary and consistent rather than a superpower you train into — and to do it without either calling your friend a liar or caving to a false claim to avoid friction. Keeping respect for their experience while staying accurate is the whole skill. The distractors are the failure modes: harsh dismissal, peace-keeping agreement with the myth, and disengaging entirely.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, had you heard of synesthesia? What surprised you most — that it's genuinely real and involuntary, or that so many myths (superpower training, drug trips, genius) have grown around it? What changed in how you'd react if a friend said they "see colors in music"?` },
            { id: `reflect-perception`, category: `How others perceive`, prompt: `Synesthesia shows people can perceive the world genuinely differently. Have you ever discovered that something you assumed everyone experienced the same way (a taste, a sound, a feeling) is actually different for other people? What was that like to realize?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson asked you to honor a real phenomenon AND catch the hype around it. When you meet something fascinating, do you tend to get swept up in the magical version, or do you stay skeptical? Which did you have to work at here?` },
            { id: `reflect-creative`, category: `Using it honestly`, prompt: `You can use deliberate cross-sensory thinking in your own creative work — choosing colors for a song's mood, sounds for a picture. Try imagining one: what color is your favorite song, and why? And how is "I'm choosing this color" different from "I automatically see this color"?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `Lots of real, amazing things (synesthesia, the creative brain, sacred geometry) get turned into "superpower" or "genius" products. What's your rule now for honoring something real while spotting the hype someone bolted onto it to sell you something?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "if learning to associate colors with sounds is useful anyway, who cares whether we call it 'real synesthesia' or not?" State the strongest version of that. Where is it partly fair, and why does the honest distinction still matter — both for your own process and for people who genuinely have synesthesia?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Synesthesia is real and fascinating, deliberate cross-sensory creativity is a tool anyone can use, and the hype around both is everywhere. Two ways to engage.`,
          familyActivity: {
            title: `A Cross-Sensory Creativity Game`,
            duration: `45 minutes`,
            description: `Play with cross-sensory connections together as a family — honestly, as a deliberate creative exercise (not claiming anyone has synesthesia). Try a few rounds: play a short piece of music and have everyone quickly say or draw what color it "feels" like, then compare — did people agree or differ, and why? Pick a few words (like "Tuesday," "seven," "mango") and have everyone say what color, if any, they'd give them. Then try it backward: pick a color and brainstorm what sound, food, or mood it suggests. Talk about what you notice: these are deliberate, chosen associations, and that's exactly what makes them a creative tool everyone can use. If anyone in the family genuinely experiences automatic sense-blending, listen with curiosity and respect — and notice the difference between their involuntary perception and the connections the rest of you are choosing on purpose. The goal is to enjoy cross-sensory creativity honestly, while feeling the real line between a chosen technique and an involuntary trait.`,
          },
          projectOption: {
            title: `A Color-And-Sound Art Piece, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Create a piece of art that deliberately connects sound and color — used honestly as a technique. Week 1: choose a song, piece of music, or even a single instrument that means something to you, and listen closely several times, noting what colors, shapes, and movements it suggests to you (these are your deliberate associations). Sketch ideas: how could a painting, collage, or digital image capture how this music feels in color and form? Week 2: make the piece, then write a short artist's note explaining your choices — what the music is, what colors and shapes you chose and why, and one honest sentence making clear these were deliberate creative decisions, not automatic perceptions. Bonus: if you want, research one real synesthete artist (like Kandinsky) and note one thing you learned about how blended senses can feed art. The point is to use cross-sensory creativity as a genuine, powerful tool — fully and freely — while practicing the honesty of naming it as a chosen technique.`,
            offerToParent: `Parent: opt your child into the color-and-sound art project. It develops real creative skill (cross-sensory thinking is used by designers, musicians, and filmmakers everywhere) while reinforcing this lesson's core honesty — using a powerful technique freely without claiming a perceptual trait they don't have. It's a gentle, age-appropriate way to explore perception, creativity, and respect for human difference all at once, and it produces a real, shareable piece of art with a thoughtful artist's note.`,
          },
          identityQuestion: `If you become someone who can be genuinely fascinated by a real phenomenon like synesthesia, use cross-sensory creativity honestly as a tool, respect that other people truly perceive the world differently, AND still spot the "unlock your superpower" hype for what it is — what kind of thinker and maker does that let you be in a world full of both real wonders and clever sales pitches?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can be amazed by something real without believing the "superpower" hype around it.`,
            `A person who respects that others genuinely perceive the world differently than I do.`,
            `Someone who uses color-and-sound creativity honestly, as a tool I choose rather than a trait I fake.`,
          ],
          saveKey: `identity_responses_ca_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteen down. This one was a delight, and you handled it with exactly the balance it needed. You learned that synesthesia is genuinely real — an involuntary, consistent blending of the senses where one sense automatically triggers another, present in a minority of people, running in families, and not a disorder but a neutral, often beautiful difference in perception. You saw its real and old connection to art, from Kandinsky and Scriabin to musicians today who see colors in sound, while resisting the too-tidy story that synesthesia is the secret of genius. You cut cleanly through the myths — that anyone can train it as a superpower, that a drug trip is the same thing, that synesthetes are automatically geniuses — and you learned what you genuinely can take from it: deliberate cross-sensory creativity, used honestly, plus a gentle respect for the real fact that people perceive differently. Most of all, you practiced the band's deepest move one more time: honoring something real and wondrous while refusing the hype bolted onto it. Next: installation and immersive art, where artists build entire worlds you walk inside — and we look at what makes them powerful, and where "immersive experience" becomes a marketing buzzword. Onward, {name}. — Muse`,
          badge: `synesthesia-literate`,
          badgeName: `Synesthesia Literate`,
          xpEarned: 75,
          competencies: [
            `Explains what genuinely defines synesthesia (involuntary, consistent, often lifelong) and how it's tested by re-checking pairings over time`,
            `Knows it affects a minority (estimates around 4%), tends to run in families, and is a neutral perceptual difference, not a disorder`,
            `Understands the real, old link between blended senses and art (Kandinsky, Scriabin, contemporary musicians) without inflating it into a "genius" cause`,
            `Identifies and rejects the key myths: trainable-superpower, drug-trip-equals-synesthesia, and synesthetes-are-geniuses`,
            `Distinguishes deliberate cross-sensory creative technique (available to everyone) from the involuntary trait, and uses the technique honestly`,
            `Treats differing perception with curiosity rather than dismissal or hype, as ordinary human variation`,
            `Applies source evaluation kindly in a real situation: honoring a friend's experience while not endorsing a "trainable superpower" claim`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Installation and Immersive Art`,
            hook: `Artists who build whole worlds you step inside — what gives them real power, and where "immersive" becomes a marketing buzzword. Case Study.`,
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
