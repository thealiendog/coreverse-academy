// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L11 — Sacred Art Across Cultures
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Sacred Art, World Religions, Aesthetics of the Holy
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort claims about sacred art across
// reliability tiers, including the Tier C-cultural vs. Tier C-pseudoscience split).
// Contract matches L03/L06/L08: sources[] with tier/title/type/context/quote/
// questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// SENSITIVITY (HIGH): treats living religious traditions with deep respect, NEVER
// ranks religions, NEVER declares any faith true or false, presents the sacred as
// something real traditions engage seriously. Distinguishes respectful engagement
// with traditions (Tier C-cultural) from wellness-industry pseudoscience that bolts
// scientific-sounding claims onto borrowed sacred imagery.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l11-v1";

const CREATIVE_ARTS_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-11`,
      title: `Sacred Art Across Cultures`,
      duration: 35,
      xpReward: 75,
      badge: `sacred-art-literate`,
      badgeName: `Sacred Art Literate`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, across every culture on Earth, for as long as there have been humans, people have made art to reach toward the sacred, toward whatever they hold as holy, ultimate, or beyond ordinary life. Cathedrals reaching toward the sky, Islamic patterns spiraling into infinity, Buddhist mandalas, Hindu temple carvings, Indigenous ceremonies, the soaring music of a hundred faiths. This is one of the oldest and deepest uses of human creativity, and it deserves real respect and real understanding. Today you will explore how different cultures make the sacred visible, and you will do it with two commitments at once: deep respect for traditions that are precious to billions of people, and clear thinking about the difference between genuine sacred traditions and modern claims that borrow sacred imagery to sell things. Holding both, reverence and clear sight, is the grown-up way to engage the holy in art. Onward.`,
          headline: `Sacred Art Across Cultures`,
          subtitle: `How cultures make the holy visible. Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Humans Make Sacred Art`,
          paragraphs: [
            `Start with a simple, striking fact: in every known human culture, people have made art aimed at the sacred. That universality is worth pausing on. Whatever you personally believe about religion, the fact that humans everywhere, across every continent and era, poured their greatest skill and resources into making the holy visible tells you something deep about people. Sacred art is not a side hobby of human creativity; for most of history it was the main event, the place where cultures put their finest craft, their biggest buildings, their most precious materials, and their highest hopes.`,
            `Why do humans do this? Because the sacred, by definition, points at things that are hard or impossible to say in plain words: the infinite, the holy, the mystery of existence, the feeling that there is something greater than ourselves. Ordinary language strains at these edges, and art steps in where words run out. A vast cathedral makes you feel small and lifted at once in a way a sentence cannot; a repeating pattern can suggest infinity better than the word "infinity" does; music can carry a feeling of the sacred straight into the body. Sacred art exists because art can gesture toward what cannot be fully said, and the sacred is the ultimate thing that cannot be fully said.`,
            `This connects to something you have met all through this band: art works on the parts of us beneath argument. In Lesson 10 you saw that art reaches the feeling-mind before the reasoning-mind, and sacred art uses exactly that power, not to manipulate, but to open. It uses beauty, scale, pattern, light, sound, and ritual to create experiences of awe, peace, or transcendence that help people feel connected to whatever they hold sacred. Whether or not you share a given faith, you can recognize the craft: these are some of the most skilled, ambitious, and moving objects and spaces humans have ever made, built to do one of the hardest jobs there is, to make the invisible feel present.`,
          ],
          image: `/voyager-assets/creative-arts/l11-s1-why.webp`,
          imageCaption: `A striking universal fact: in every known human culture, people have made art aimed at the sacred, pouring their greatest skill, biggest buildings, and most precious materials into making the holy visible. For most of history sacred art was the main event of human creativity, not a side hobby. Why: the sacred points at things hard to say in plain words (the infinite, the holy, the mystery of existence), and art steps in where language runs out, a vast cathedral makes you feel small and lifted at once; a repeating pattern suggests infinity better than the word; music carries the sacred into the body. It connects to Lesson 10: art reaches the feeling-mind before the reasoning-mind, and sacred art uses that power to open (beauty, scale, pattern, light, sound, ritual creating awe, peace, transcendence). Whatever you believe, you can recognize the craft, some of the most skilled, ambitious, moving things humans have made.`,
          vocab: [
            {
              word: `why humans make sacred art`,
              definition: `A simple, striking fact: in every known human culture, across every continent and era, people have made art aimed at the sacred, toward whatever they hold as holy, ultimate, or beyond ordinary life. That universality is worth pausing on, because whatever you personally believe about religion, the fact that humans everywhere poured their greatest skill and resources into making the holy visible tells you something deep about people: sacred art was not a side hobby of human creativity but, for most of history, the main event, the place where cultures put their finest craft, biggest buildings, most precious materials, and highest hopes. Humans do this because the sacred, by definition, points at things hard or impossible to say in plain words (the infinite, the holy, the mystery of existence, the feeling that there is something greater than ourselves), and ordinary language strains at these edges while art steps in where words run out: a vast cathedral makes you feel small and lifted at once in a way a sentence cannot; a repeating pattern can suggest infinity better than the word "infinity" does; music can carry a feeling of the sacred straight into the body. This connects to Lesson 10's point that art reaches the feeling-mind before the reasoning-mind; sacred art uses exactly that power, not to manipulate but to open, using beauty, scale, pattern, light, sound, and ritual to create experiences of awe, peace, or transcendence that help people feel connected to whatever they hold sacred. Whether or not you share a given faith, you can recognize the craft, these are among the most skilled, ambitious, and moving objects and spaces humans have ever made, built to do one of the hardest jobs there is, making the invisible feel present.`,
              audioPrompt: `Start with a simple, striking fact, {name}: in every known human culture, people have made art aimed at the sacred. That universality is worth pausing on. Whatever you personally believe about religion, the fact that humans everywhere, across every continent and era, poured their greatest skill and resources into making the holy visible tells you something deep about people. Sacred art is not a side hobby of human creativity; for most of history it was the main event, the place where cultures put their finest craft, their biggest buildings, their most precious materials, and their highest hopes. Why do humans do this? Because the sacred, by definition, points at things that are hard or impossible to say in plain words: the infinite, the holy, the mystery of existence, the feeling that there is something greater than ourselves. Ordinary language strains at these edges, and art steps in where words run out. A vast cathedral makes you feel small and lifted at once in a way a sentence cannot; a repeating pattern can suggest infinity better than the word infinity does; music can carry a feeling of the sacred straight into the body. This connects to something you met in Lesson 10: art reaches the feeling-mind before the reasoning-mind, and sacred art uses exactly that power, not to manipulate, but to open. Whether or not you share a given faith, you can recognize the craft: these are some of the most skilled, ambitious, and moving things humans have ever made.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Different Cultures, Different Ways To The Sacred`,
          paragraphs: [
            `Different traditions reach for the sacred in strikingly different ways, and learning a few, with respect, reveals how varied and ingenious human creativity is. In much of Christian tradition, especially the great cathedrals of medieval Europe, sacred art reached upward: soaring stone, stained glass turning sunlight into colored stories, scale designed to make a person feel small before something vast. The building itself is an argument made of stone and light, that there is something far greater than you, and that beauty can lift you toward it.`,
            `Islamic sacred art took a profoundly different path, partly because many Islamic traditions avoid depicting living figures in religious art, treating that as God's domain. So instead of picturing the holy, Islamic art developed breathtaking geometric patterns and flowing calligraphy of sacred words, patterns that repeat and interlock in ways that suggest the infinite and the unity of all things. A great mosque's geometric ceiling does not show God; it points toward an order beyond human grasp. This is a different and equally profound answer to the same human question, and its mathematical beauty has fascinated artists and mathematicians for centuries.`,
            `Other traditions answer differently again. Buddhist mandalas are intricate circular designs that map a sacred order and serve as aids to meditation; some are made painstakingly from colored sand and then deliberately swept away, a built-in lesson about impermanence, that nothing lasts and that is part of the truth. Hindu temples cover themselves in carvings teeming with figures and stories, a riot of life and the divine intertwined. Indigenous traditions across the world weave the sacred into ceremony, song, dance, body, and land, often in ways inseparable from daily life rather than housed in a separate building. Each of these is a serious, sophisticated answer to the question of how to make the holy present, and none is "more advanced" than another; they are different languages for the same deep human reaching.`,
          ],
          image: `/voyager-assets/creative-arts/l11-s2-traditions.webp`,
          imageCaption: `Different traditions reach for the sacred in strikingly different ways (learned with respect, never ranked). Christian cathedrals of medieval Europe reach upward: soaring stone, stained glass turning sunlight into colored stories, scale that makes a person feel small before something vast, a building as an argument in stone and light. Islamic sacred art (many traditions avoid depicting living figures in religious art) developed breathtaking geometric patterns and flowing calligraphy of sacred words, suggesting the infinite and the unity of all things, pointing toward an order beyond human grasp rather than picturing the holy. Buddhist mandalas map a sacred order as meditation aids; sand mandalas are swept away to teach impermanence. Hindu temples teem with carved figures and stories. Indigenous traditions weave the sacred into ceremony, song, dance, body, and land, inseparable from daily life. Each is a serious, sophisticated answer; none is "more advanced", different languages for the same deep human reaching.`,
          vocab: [
            {
              word: `how different cultures make the sacred visible`,
              definition: `Different traditions reach for the sacred in strikingly different ways, and learning a few with respect reveals how varied and ingenious human creativity is (none is "more advanced" than another; they are different languages for the same deep human reaching). In much of Christian tradition, especially the great cathedrals of medieval Europe, sacred art reached upward: soaring stone, stained glass turning sunlight into colored stories, and scale designed to make a person feel small before something vast, the building itself an argument made of stone and light that there is something far greater than you. Islamic sacred art took a profoundly different path, partly because many Islamic traditions avoid depicting living figures in religious art, treating that as God's domain, so instead of picturing the holy it developed breathtaking geometric patterns and flowing calligraphy of sacred words, patterns that repeat and interlock to suggest the infinite and the unity of all things, pointing toward an order beyond human grasp (a beauty that has fascinated artists and mathematicians for centuries). Buddhist mandalas are intricate circular designs that map a sacred order and serve as meditation aids; some sand mandalas are deliberately swept away after being made, a built-in lesson about impermanence. Hindu temples cover themselves in carvings teeming with figures and stories, life and the divine intertwined. Indigenous traditions across the world weave the sacred into ceremony, song, dance, body, and land, often inseparable from daily life rather than housed in a separate building. Each is a serious, sophisticated answer to how to make the holy present.`,
              audioPrompt: `Different traditions reach for the sacred in strikingly different ways, {name}, and learning a few, with respect, reveals how varied and ingenious human creativity is. In much of Christian tradition, especially the great cathedrals of medieval Europe, sacred art reached upward: soaring stone, stained glass turning sunlight into colored stories, scale designed to make a person feel small before something vast. The building itself is an argument made of stone and light, that there is something far greater than you. Islamic sacred art took a profoundly different path, partly because many Islamic traditions avoid depicting living figures in religious art, treating that as God's domain. So instead of picturing the holy, Islamic art developed breathtaking geometric patterns and flowing calligraphy of sacred words, patterns that repeat and interlock in ways that suggest the infinite and the unity of all things. Buddhist mandalas are intricate circular designs that map a sacred order and serve as aids to meditation; some are made painstakingly from colored sand and then deliberately swept away, a built-in lesson about impermanence. Hindu temples cover themselves in carvings teeming with figures and stories. Indigenous traditions across the world weave the sacred into ceremony, song, dance, body, and land. Each of these is a serious, sophisticated answer, and none is more advanced than another; they are different languages for the same deep human reaching.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How To Engage Sacred Art With Respect`,
          paragraphs: [
            `Now a genuinely important skill: how to engage sacred art that is not your own, with respect rather than carelessness. You will encounter the sacred art of traditions you do not belong to constantly, in museums, in travel, online, in your own diverse communities, and there is a right way to meet it. The starting posture is respect and humility: this object or space or song is precious to real people, often central to how they understand their whole lives, so it is not just a pretty thing to consume or a curiosity to gawk at. Meeting it as something that matters deeply to someone is the first move.`,
            `Respectful engagement does not require you to share the belief. You can stand in awe inside a mosque, a temple, a cathedral, or at a ceremony without converting, and you can appreciate the craft, the meaning, and the human reaching it represents while being honest that it is not your own tradition. What respect does require is a few concrete things: learning enough to understand what something means before judging it, following the actual rules of sacred spaces (covering your head or removing shoes where asked, not photographing where it is forbidden, staying quiet during ceremony), and never treating someone's sacred object as a mere decoration or costume.`,
            `That last point names a real and common harm worth understanding: the difference between appreciation and appropriation. Appreciation is engaging respectfully with another culture's sacred art, learning its meaning, honoring its context, often with the welcome of people from that tradition. Appropriation is taking sacred things out of their context and using them as fashion, decoration, or product, stripped of meaning and often without the consent of the people they belong to, like wearing a sacred ceremonial item as a costume, or a company slapping a sacred symbol on merchandise to look exotic. The line is not always perfectly clear, and reasonable people debate specific cases, but the core distinction is real: appreciation honors the meaning and the people; appropriation takes the look and discards both. Learning to tell them apart is part of being a respectful person in a world full of traditions not your own.`,
          ],
          image: `/voyager-assets/creative-arts/l11-s3-respect.webp`,
          imageCaption: `How to engage sacred art that is not your own, with respect not carelessness. You meet it constantly (museums, travel, online, diverse communities). Starting posture: respect and humility, this is precious to real people, central to how they understand their lives, not a pretty thing to consume. Respect does NOT require sharing the belief, you can stand in awe inside a mosque, temple, or cathedral without converting, appreciating the craft and human reaching while honest that it is not your tradition. What respect requires: learn what something means before judging, follow the rules of sacred spaces (cover head, remove shoes, no photos where forbidden, quiet during ceremony), never treat a sacred object as decoration or costume. The key distinction: appreciation (engaging respectfully, honoring meaning and context, often welcomed) vs. appropriation (taking sacred things out of context as fashion or product, stripped of meaning, without consent). The line can be debated, but the core is real: appreciation honors meaning and people; appropriation takes the look and discards both.`,
          vocab: [
            {
              word: `respectful engagement, appreciation vs. appropriation`,
              definition: `How to engage sacred art that is not your own, with respect rather than carelessness, since you will encounter sacred art of traditions you do not belong to constantly (museums, travel, online, diverse communities). The starting posture is respect and humility: the object, space, or song is precious to real people and often central to how they understand their whole lives, so it is not just a pretty thing to consume or a curiosity to gawk at, and meeting it as something that matters deeply to someone is the first move. Respectful engagement does not require sharing the belief: you can stand in awe inside a mosque, temple, cathedral, or at a ceremony without converting, appreciating the craft, meaning, and human reaching while being honest that it is not your own tradition. What respect does require is concrete: learning enough to understand what something means before judging it, following the actual rules of sacred spaces (covering your head or removing shoes where asked, not photographing where forbidden, staying quiet during ceremony), and never treating a sacred object as mere decoration or costume. That names a real, common harm, the difference between appreciation and appropriation: appreciation is engaging respectfully with another culture's sacred art, learning its meaning and honoring its context, often with the welcome of people from that tradition; appropriation is taking sacred things out of context and using them as fashion, decoration, or product, stripped of meaning and often without consent (wearing a sacred ceremonial item as a costume; a company putting a sacred symbol on merchandise to look exotic). The line is not always perfectly clear and reasonable people debate specific cases, but the core is real: appreciation honors the meaning and the people; appropriation takes the look and discards both.`,
              audioPrompt: `Now a genuinely important skill, {name}: how to engage sacred art that is not your own, with respect rather than carelessness. You will encounter the sacred art of traditions you do not belong to constantly, in museums, in travel, online, in your own communities. The starting posture is respect and humility: this object or space or song is precious to real people, often central to how they understand their whole lives, so it is not just a pretty thing to consume. Respectful engagement does not require you to share the belief. You can stand in awe inside a mosque, a temple, a cathedral, or at a ceremony without converting, and you can appreciate the craft, the meaning, and the human reaching it represents while being honest that it is not your own tradition. What respect does require is a few concrete things: learning enough to understand what something means before judging it, following the actual rules of sacred spaces, like covering your head or removing shoes where asked, and never treating someone's sacred object as a mere decoration or costume. That last point names a real and common harm: the difference between appreciation and appropriation. Appreciation is engaging respectfully with another culture's sacred art, learning its meaning, honoring its context. Appropriation is taking sacred things out of their context and using them as fashion, decoration, or product, stripped of meaning and often without the consent of the people they belong to. Appreciation honors the meaning and the people; appropriation takes the look and discards both.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Real Traditions Versus Borrowed Imagery For Sale`,
          paragraphs: [
            `Now the source-evaluation skill from Lesson 3 returns, applied to one of the trickiest places it lives: the difference between genuine sacred traditions and modern claims that borrow sacred imagery to sell things. Recall the careful distinction you built earlier. A real spiritual tradition, like Buddhist mandala practice, Islamic sacred geometry, or any faith's art, is engaging the sacred through meaning, ritual, and centuries of practice; it is making claims about meaning and the holy, not testable claims about physics. That is what was called Tier C-cultural: legitimate, serious, not the kind of thing you test in a lab because it is not trying to be a lab experiment.`,
            `But there is also a modern wellness industry that takes the look and vocabulary of sacred traditions and bolts scientific-sounding claims onto them to sell products. A company might take a genuine sacred symbol and claim it "raises your vibration" or "heals your energy field," dressing a spiritual-sounding promise in fake science. That is the Tier C-pseudoscience pattern: a falsifiable claim ("this object changes your body's energy in a measurable way") presented as fact, with no evidence, often using a real tradition's imagery as decoration. The crucial move is to keep these apart, and notice that conflating them does double harm: it disrespects the real tradition by reducing it to a product, and it fools the customer with claims that do not hold up.`,
            `Here is the careful, respectful way to hold all of this, and it matters that you get the tone right. When a Buddhist monk creates a sand mandala as a meditation practice, that is a profound, legitimate spiritual tradition, and the right response is respect, not "prove it works." When a company sells you a "mandala energy disk" claiming it will measurably heal your body, that is a product making a testable claim, and the right response is healthy skepticism, not because the sacred is fake, but because the company's specific physics-style claim is unsupported and is using sacred imagery as marketing. Telling these apart is not disrespect to religion; it is the opposite. It protects real traditions from being cheapened into products, and it protects people from being sold pseudoscience wearing sacred clothes.`,
          ],
          image: `/voyager-assets/creative-arts/l11-s4-tiers.webp`,
          imageCaption: `The Lesson 3 source-evaluation skill applied to a tricky place: real sacred traditions vs. modern claims borrowing sacred imagery to sell things. A real tradition (Buddhist mandala practice, Islamic sacred geometry, any faith's art) engages the sacred through meaning, ritual, and centuries of practice, making claims about meaning and the holy, NOT testable physics claims, that is Tier C-cultural: legitimate, serious, not lab-testable because not trying to be. But a wellness industry takes the look and vocabulary of sacred traditions and bolts scientific-sounding claims on to sell products (a sacred symbol that "raises your vibration" or "heals your energy field"), that is Tier C-pseudoscience: a falsifiable claim presented as fact, no evidence, using a tradition's imagery as decoration. Conflating them does double harm: disrespects the tradition by reducing it to a product AND fools the customer. Monk's sand mandala → respect, not "prove it works." Company's "mandala energy disk that heals your body" → healthy skepticism. Telling them apart protects real traditions AND protects people.`,
          vocab: [
            {
              word: `real traditions vs. borrowed sacred imagery for sale`,
              definition: `The source-evaluation skill from Lesson 3 applied to a tricky place: the difference between genuine sacred traditions and modern claims that borrow sacred imagery to sell things. A real spiritual tradition (Buddhist mandala practice, Islamic sacred geometry, any faith's art) engages the sacred through meaning, ritual, and centuries of practice; it makes claims about meaning and the holy, not testable claims about physics, which is Tier C-cultural: legitimate, serious, and not the kind of thing you test in a lab because it is not trying to be a lab experiment. But a modern wellness industry takes the look and vocabulary of sacred traditions and bolts scientific-sounding claims onto them to sell products, for example taking a genuine sacred symbol and claiming it "raises your vibration" or "heals your energy field," dressing a spiritual-sounding promise in fake science. That is Tier C-pseudoscience: a falsifiable claim ("this object changes your body's energy in a measurable way") presented as fact, with no evidence, often using a real tradition's imagery as decoration. Conflating them does double harm: it disrespects the real tradition by reducing it to a product, and it fools the customer with claims that do not hold up. The respectful way to hold it: when a Buddhist monk creates a sand mandala as a meditation practice, that is a profound, legitimate tradition and the right response is respect, not "prove it works"; when a company sells a "mandala energy disk" claiming it will measurably heal your body, that is a product making a testable claim and the right response is healthy skepticism, not because the sacred is fake but because the company's specific physics-style claim is unsupported and uses sacred imagery as marketing. Telling these apart is not disrespect to religion; it protects real traditions from being cheapened into products and protects people from pseudoscience wearing sacred clothes.`,
              audioPrompt: `Now the source-evaluation skill from Lesson 3 returns, {name}, applied to one of the trickiest places it lives: the difference between genuine sacred traditions and modern claims that borrow sacred imagery to sell things. Recall the careful distinction you built earlier. A real spiritual tradition, like Buddhist mandala practice or Islamic sacred geometry, is engaging the sacred through meaning, ritual, and centuries of practice; it is making claims about meaning and the holy, not testable claims about physics. That is what was called Tier C-cultural: legitimate, serious, not the kind of thing you test in a lab because it is not trying to be a lab experiment. But there is also a modern wellness industry that takes the look and vocabulary of sacred traditions and bolts scientific-sounding claims onto them to sell products. A company might take a genuine sacred symbol and claim it raises your vibration or heals your energy field, dressing a spiritual-sounding promise in fake science. That is the Tier C-pseudoscience pattern. When a Buddhist monk creates a sand mandala as a meditation practice, that is a profound, legitimate spiritual tradition, and the right response is respect, not "prove it works." When a company sells you a mandala energy disk claiming it will measurably heal your body, that is a product making a testable claim, and the right response is healthy skepticism, not because the sacred is fake, but because the company's specific claim is unsupported and is using sacred imagery as marketing. Telling these apart protects real traditions from being cheapened into products, and protects people from being sold pseudoscience wearing sacred clothes.`,
            },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You saw that humans everywhere make sacred art because art can gesture toward what cannot be said, and the sacred is the ultimate thing that cannot be said. You saw how different traditions answer the same deep question in profoundly different, equally serious ways, cathedrals reaching up, Islamic geometry suggesting the infinite, mandalas mapping order and impermanence, temples teeming with life, Indigenous sacred woven into land and ceremony, with none ranked above another. You learned to engage sacred art with respect and humility, and the real difference between appreciation and appropriation. And you brought back the tier skill to separate genuine traditions from pseudoscience that borrows their look to sell things.`,
            `Now the source-evaluation screen will hand you several real or realistic sources about sacred art, a respectful explanation of a genuine tradition, a wellness product bolting fake science onto sacred imagery, an example of appropriation, a careful museum or scholarly account, and ask you to sort them, using the right criteria for each. Crucially, you will practice the hardest move of all: applying real skepticism to false claims while keeping deep respect for genuine traditions, never confusing the two.`,
            `One last thing to carry, said carefully. This lesson asks you to hold reverence and clear sight at the same time, and that is not a contradiction; it is maturity. You can be genuinely moved by the holy in art, honor that billions of people find profound meaning in their traditions, and refuse to judge anyone's faith, while also thinking clearly enough to spot a company exploiting sacred imagery to sell you something with a fake health claim. Respect for the sacred and clear thinking about claims are not enemies. The person who can hold both honors what deserves honor and is fooled by no one, and that is exactly the kind of thoughtful, respectful person this whole band is trying to help you become. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l11-s5-before.webp`,
          imageCaption: `Threads together. Humans everywhere make sacred art because art gestures toward what cannot be said, and the sacred is the ultimate unsayable. Different traditions answer the same question in profoundly different, equally serious ways (cathedrals up, Islamic geometry toward the infinite, mandalas mapping order and impermanence, temples teeming with life, Indigenous sacred woven into land), none ranked above another. Engage with respect and humility; know appreciation from appropriation. Bring back the tier skill to separate genuine traditions (Tier C-cultural) from pseudoscience borrowing their look (Tier C-pseudoscience). The source-evaluation screen ahead hands you real/realistic sources to sort with the right criteria for each. The hardest move: real skepticism toward false claims AND deep respect for genuine traditions, never confused. Reverence and clear sight together is not contradiction; it is maturity, honor what deserves honor, be fooled by no one.`,
          vocab: [
            {
              word: `holding reverence and clear sight together`,
              definition: `The synthesis before the source-evaluation screen. You saw that humans everywhere make sacred art because art can gesture toward what cannot be said, and the sacred is the ultimate thing that cannot be said. You saw how different traditions answer the same deep question in profoundly different, equally serious ways: Christian cathedrals reaching up, Islamic geometry suggesting the infinite, Buddhist mandalas mapping order and impermanence, Hindu temples teeming with life and the divine, Indigenous sacred woven into land and ceremony, with none ranked above another. You learned to engage sacred art with respect and humility, the concrete requirements (learn the meaning, follow the rules of sacred spaces, never treat a sacred object as costume), and the real difference between appreciation (honoring meaning and people) and appropriation (taking the look and discarding both). And you brought back the tier skill to separate genuine traditions (Tier C-cultural, claims about meaning and the holy) from pseudoscience that borrows their look to sell things (Tier C-pseudoscience, falsifiable physics-style claims with no evidence). The source-evaluation screen will hand you several real or realistic sources to sort using the right criteria for each, practicing the hardest move: applying real skepticism to false claims while keeping deep respect for genuine traditions, never confusing the two. The last thing to carry: holding reverence and clear sight at the same time is not a contradiction but maturity. You can be genuinely moved by the holy in art, honor that billions find profound meaning in their traditions, and refuse to judge anyone's faith, while also thinking clearly enough to spot a company exploiting sacred imagery to sell a fake health claim. The person who holds both honors what deserves honor and is fooled by no one.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You saw that humans everywhere make sacred art because art can gesture toward what cannot be said, and the sacred is the ultimate thing that cannot be said. You saw how different traditions answer the same deep question in profoundly different, equally serious ways, cathedrals reaching up, Islamic geometry suggesting the infinite, mandalas mapping order and impermanence, temples teeming with life, Indigenous sacred woven into land and ceremony, with none ranked above another. You learned to engage sacred art with respect and humility, and the real difference between appreciation and appropriation. And you brought back the tier skill to separate genuine traditions from pseudoscience that borrows their look to sell things. Now the source-evaluation screen will hand you several real or realistic sources about sacred art, and ask you to sort them using the right criteria for each. You will practice the hardest move of all: applying real skepticism to false claims while keeping deep respect for genuine traditions, never confusing the two. One last thing to carry. This lesson asks you to hold reverence and clear sight at the same time, and that is not a contradiction; it is maturity. You can be genuinely moved by the holy in art and refuse to judge anyone's faith, while also thinking clearly enough to spot a company exploiting sacred imagery to sell you something with a fake health claim. The person who can hold both honors what deserves honor and is fooled by no one.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l11-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Sources On Sacred Art`,
          intro: `{name}, five sources about sacred art. For each, decide how much you should trust it and on what terms, using the right criteria. The key skill here is holding two things at once: deep respect for genuine traditions, and clear skepticism toward claims that borrow sacred imagery to sell things. Never confuse a real tradition with a product, in either direction.`,
          sources: [
            {
              id: `s1`,
              tier: `C-cultural`,
              title: `A Buddhist teacher explaining sand mandala practice`,
              type: `Practitioner-tradition source`,
              context: `A Buddhist monk explains that creating a sand mandala is a meditation practice with centuries of tradition: monks spend days placing colored sand grain by grain into an intricate sacred design, and then deliberately sweep it away, as a practice of focus, devotion, and a teaching about impermanence, that all things pass.`,
              quote: `"We make it with great care, and then we destroy it. This is not waste. It teaches the heart that nothing lasts, and that this is not sad but true. The practice is the point, not the picture."`,
              questions: [
                `What kind of claim is the monk making, a claim about meaning, or a testable physics claim?`,
                `Why would "prove the mandala scientifically heals you" be the wrong response here?`,
                `How do you evaluate a tradition like this respectfully?`,
              ],
              evaluation: `This is Tier C-cultural at its most genuine: a real practitioner explaining a centuries-old practice in terms of meaning, focus, devotion, and a teaching about impermanence, not in terms of testable physics. The monk is not claiming the mandala measurably alters your body; he is describing a spiritual practice whose point is the practice itself. So "prove it scientifically heals you" is the wrong response, because the tradition never made that claim, it is a category error, like demanding a poem pass a math test. You evaluate it respectfully by engaging it on its own terms: does the tradition have depth, coherence, and meaning for its practitioners? Clearly yes, across centuries. Respect, not skepticism, is the right posture here, because there is no false factual claim to be skeptical of.`,
            },
            {
              id: `s2`,
              tier: `C-pseudoscience`,
              title: `A wellness company selling a "sacred energy mandala disk"`,
              type: `Wellness-industry product claim`,
              context: `A company sells a metal disk printed with a mandala-like design, claiming it "harmonizes your body's energy field," "raises your vibration to 528 Hz," and "heals physical and emotional blockages," using sacred-looking imagery and spiritual-sounding language to market a physical product with health promises.`,
              quote: `"Our Sacred Energy Mandala Disk realigns your body's vibrational frequency, clears energetic blockages, and restores cellular harmony. Backed by ancient wisdom and modern energy science."`,
              questions: [
                `Which specific claims here are testable physics-and-health claims?`,
                `Is being skeptical of this product disrespectful to Buddhism or to the sacred?`,
                `Why does this both fool customers AND disrespect the real tradition?`,
              ],
              evaluation: `This is Tier C-pseudoscience. The claims "harmonizes your energy field," "raises your vibration to 528 Hz," "heals physical blockages," "restores cellular harmony" are testable physical and health claims dressed in spiritual-sounding language, and they have no scientific support (recall the 528 Hz pattern from Lesson 3). Being skeptical of this product is NOT disrespectful to Buddhism or the sacred; it is the opposite. The company is exploiting sacred imagery to sell a product with fake science, which does double harm: it fools the customer with unsupported physics-style health claims, AND it disrespects the real tradition by reducing a profound practice to a $50 disk with a marketing slogan. The right response is healthy skepticism toward the company's claims precisely because you respect both the customer and the genuine tradition being borrowed.`,
            },
            {
              id: `s3`,
              tier: `appropriation`,
              title: `A fashion brand using a sacred symbol as a "trendy" print`,
              type: `Cultural appropriation example`,
              context: `A clothing company prints a symbol that is sacred and specific to a particular Indigenous or religious tradition onto swimwear and party clothes as a "trendy ethnic print," with no involvement from or benefit to the people it belongs to, and members of that community publicly explain that the symbol is sacred and its use this way is hurtful.`,
              quote: `[A member of the tradition:] "That symbol is sacred to us. It belongs in ceremony, not on a swimsuit sold for profit by people who never asked us and do not even know what it means."`,
              questions: [
                `Is this appreciation or appropriation? How can you tell?`,
                `Why does the community's own explanation matter as evidence?`,
                `What would respectful engagement with this symbol look like instead?`,
              ],
              evaluation: `This is appropriation, not appreciation. The test from the lesson: appreciation honors the meaning and the people and often has their welcome; appropriation takes the look and discards both. Here a sacred symbol is stripped from its context, used as a "trendy print" for profit, with no involvement from or benefit to the people it belongs to, and members of the community explain it is sacred and the use is hurtful, their first-hand testimony is exactly the evidence that matters most, because they are the people the symbol belongs to. Respectful engagement would look completely different: learning what the symbol means, honoring where it belongs (ceremony, not swimwear), not using it as decoration or product, and, if collaboration ever happened, doing it with the community's involvement and consent. The harm is real even if technically legal, another case where legal, fair, and right come apart, as in Lesson 8.`,
            },
            {
              id: `s4`,
              tier: `B`,
              title: `A museum's respectful exhibit on Islamic geometric art`,
              type: `Scholarly / museum source`,
              context: `A museum presents an exhibit on Islamic geometric art that explains the religious and cultural context (why many traditions avoid figural images in sacred art, how geometry suggests the infinite and divine unity), shows the genuine mathematical sophistication of the patterns, includes voices from the tradition, and treats the work with both scholarly accuracy and respect.`,
              quote: `"These patterns are not mere decoration. For the traditions that created them, the repeating geometry points toward the infinite and the unity of all creation. Their mathematical complexity has influenced artists and mathematicians for centuries."`,
              questions: [
                `Why is this a trustworthy way to engage sacred art you may not share?`,
                `How does it combine respect with accuracy?`,
                `What are the limits of even a good museum exhibit?`,
              ],
              evaluation: `This is solid Tier B: a scholarly, respectful presentation that explains the genuine religious and cultural context, shows the real mathematical sophistication, and includes voices from the tradition rather than speaking over it. It is trustworthy because it does the two right things at once, accuracy (explaining what the art actually means and how it works) and respect (honoring the tradition's own understanding instead of reducing it to "exotic decoration"). It models exactly the lesson's posture: you can engage sacred art you do not share, with awe and understanding, without converting and without disrespect. Its limits: even a great exhibit takes objects out of their living religious context (a pattern in a museum case is not the same as in a working mosque), and a museum's framing is still an outsider's framing, however careful, so it is a respectful window, not the full living tradition itself.`,
            },
            {
              id: `s5`,
              tier: `mixed`,
              title: `A travel video by a respectful visitor to sacred sites`,
              type: `Personal account / mixed`,
              context: `A traveler makes a video visiting sacred sites of traditions not their own (a mosque, a temple, a cathedral). They follow the rules (cover up, remove shoes, stay quiet during prayer), express genuine awe, clearly say "this is not my tradition but it moved me," and try to explain what they learned, though they occasionally get a detail slightly wrong.`,
              quote: `"I'm not part of this faith, and I want to be respectful, so I covered my head and stayed quiet. I don't fully understand it, but standing here, I felt something I can only call awe. I'm trying to learn, and I'll fix anything I got wrong."`,
              questions: [
                `Is this appreciation or appropriation, and how can you tell?`,
                `Does getting a small detail wrong while clearly trying to be respectful ruin it?`,
                `What makes this a basically trustworthy and respectful engagement despite imperfections?`,
              ],
              evaluation: `This is appreciation, not appropriation, and a basically trustworthy and respectful engagement despite small imperfections. The signs are clear: the traveler follows the rules of the sacred spaces, openly acknowledges "this is not my tradition," expresses genuine awe without claiming to own or fully understand it, and is willing to be corrected. Getting a small detail slightly wrong while sincerely trying to be respectful and open to learning does not ruin it, because the posture is humble and honoring, not extractive or careless, the opposite of stripping a symbol for a swimsuit. It models the lesson's core: you can engage sacred art that is not yours, be genuinely moved, learn with humility, and honor the tradition, all without sharing the belief. The mix here is between sincere respect (strong) and minor factual error (correctable), and the right response is to trust the respectful intent while gently valuing accuracy, exactly how you would want your own honest, imperfect attempts at respect to be received.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your rule for holding respect and skepticism at the same time when it comes to sacred art? Specifically, how do you stay deeply respectful of genuine traditions while still spotting a company that bolts fake science onto sacred imagery? In 5-6 sentences.`,
          reflectionPrompt: `The hardest skill in this lesson was applying skepticism to false claims while keeping respect for real traditions, never confusing the two. Where have you seen sacred imagery used to sell something? And where have you seen genuine tradition dismissed unfairly as if it were just a product or superstition?`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Sacred art shows up in every culture on Earth. What does the lesson say that universality reveals?`,
              options: [
                `That all of the world's cultures must have secretly copied one same original religion.`,
                `Art can gesture toward what can't be said in words, and the sacred is the ultimate unsayable thing.`,
                `That sacred art is just decoration that happens to look similar everywhere.`,
                `That humans make sacred art only because powerful institutions require it.`,
              ],
              correctIndex: 1,
              explanation: `Sacred art exists because art can gesture toward what cannot be said in plain words, and the sacred is the ultimate unsayable thing. Its universality across all cultures shows how deep this human reaching goes. The distractors explain the universality as copying, decoration, or institutional control instead of the shared human reach.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Cathedrals reach upward, Islamic geometry suggests the infinite, mandalas map impermanence, Indigenous sacred is woven into land. What's the right attitude toward these differences?`,
              options: [
                `Rank them to decide which tradition reaches the sacred most successfully.`,
                `Treat them as the same thing wearing different costumes, with no real differences.`,
                `See them as different languages for the same reaching — none ranked above another.`,
                `Pick the one nearest your own culture as the true version.`,
              ],
              correctIndex: 2,
              explanation: `Cathedrals reach up, Islamic geometry suggests the infinite, mandalas map order and impermanence, temples teem with life, Indigenous sacred is woven into the land — different languages for the same reaching, none ranked above another. The distractors rank them, flatten the real differences, or privilege the familiar one.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the difference between appreciation and appropriation of sacred art — and what's the key evidence?`,
              options: [
                `Appreciation means you share the belief; appropriation means you don't.`,
                `Appreciation honors meaning, context, and people; appropriation takes the look and discards the rest.`,
                `Appreciation is only ever for the experts, while appropriation is just what tourists do.`,
                `There's no real difference as long as you find the art beautiful.`,
              ],
              correctIndex: 1,
              explanation: `Appreciation honors meaning, context, and people (often with their welcome); appropriation takes the look and discards the meaning and people. The community's own testimony is key evidence, and respect does not require sharing the belief. The distractors make it about belief, expertise, or collapse the distinction entirely.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What separates a genuine sacred tradition (Tier C-cultural) from wellness pseudoscience that borrows sacred imagery (Tier C-pseudoscience)?`,
              options: [
                `The genuine tradition is much older, so it is therefore automatically the more scientific one.`,
                `They are basically the very same thing, since both of them make claims you could test in a lab.`,
                `The pseudoscience is actually the more honest one, because it at least makes specific promises.`,
                `A real tradition makes meaning claims; pseudoscience bolts fake physics claims onto sacred imagery.`,
              ],
              correctIndex: 3,
              explanation: `A real tradition makes claims about meaning and the holy (not testable physics), deserving respect; wellness pseudoscience bolts falsifiable, unsupported physics-style claims onto sacred imagery to sell products, deserving skepticism. Conflating them harms both. The distractors confuse age with science, collapse the categories, or praise the pseudoscience's specificity.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is being skeptical of a "sacred energy disk" health product NOT disrespectful to religion?`,
              options: [
                `The skepticism targets the company's false health claim, not the sacred — defending both.`,
                `Because religion deserves no respect anyway, so skepticism is always fine.`,
                `Because the product isn't really connected to any tradition at all.`,
                `Because health claims are the one part of religion you're allowed to doubt.`,
              ],
              correctIndex: 0,
              explanation: `Skepticism targets the company's false, testable health claim, not the sacred. It actually defends the tradition (from being cheapened into a product) and the customer (from fake science), so it's respect for both, not disrespect. The distractors disrespect religion outright, deny the borrowing, or misframe what's being doubted.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does respectful engagement with sacred art that isn't your own actually require?`,
              options: [
                `Converting to the tradition before you're allowed to engage with it.`,
                `Carefully avoiding all sacred art entirely unless it comes from your own birth culture.`,
                `Learn the meaning before judging, follow the rules, and never treat sacred objects as decoration.`,
                `Treating sacred objects as beautiful decorations as long as you admire them.`,
              ],
              correctIndex: 2,
              explanation: `Respect and humility: learn the meaning before judging, follow the rules of sacred spaces, never treat sacred objects as decoration. It doesn't require sharing the belief — you can be moved without converting — but it rules out careless appropriation. The distractors demand conversion, total avoidance, or the very decoration-treatment the lesson forbids.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `A traveler follows the rules of a sacred site, says "this isn't my tradition but it moved me," and gets one small detail wrong. Why is that still respectful engagement?`,
              options: [
                `Because tourists are always excused from getting things right.`,
                `Respect is about humble, honoring conduct and being correctable, not flawless expertise.`,
                `Because the wrong detail was small enough that probably nobody present would even notice it.`,
                `Because saying "it moved me" cancels out any mistake automatically.`,
              ],
              correctIndex: 1,
              explanation: `Respect is about humble, honoring intent and conduct (following the rules, acknowledging it's not yours, being correctable), not flawless expertise. A small honest error doesn't ruin sincere appreciation — it's the opposite of extractive appropriation. The distractors excuse tourists generally, hinge on getting away with it, or treat a phrase as a free pass.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the lesson say holding reverence and clear sight at the same time is "maturity," not contradiction?`,
              options: [
                `Because you should secretly doubt the traditions while pretending to revere them.`,
                `Because reverence and skepticism cancel out, leaving you neutral.`,
                `Reverence and skepticism aim at different things, so the mature position is fooled by no one.`,
                `Because mature people eventually stop believing in anything sacred.`,
              ],
              correctIndex: 2,
              explanation: `Reverence (the right response to genuine traditions) and skepticism (the right response to false sales claims) aim at different things, so they don't conflict. The mature position honors what deserves honor and is fooled by no one. The distractors turn it into secret hypocrisy, mutual cancellation, or loss of belief.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: To be skeptical of a wellness company's claim that its "sacred energy disk" measurably heals your body, you have to believe that all sacred and religious traditions are fake or foolish.`,
              correctAnswer: false,
              explanation: `False, and untangling this is the central skill of the lesson. Being skeptical of a company's specific, testable, unsupported claim — that a metal disk measurably heals your body and "raises your vibration" — does not require believing anything about whether religious or sacred traditions are true, because they're completely different kinds of things. A genuine tradition like Buddhist mandala practice makes claims about meaning, devotion, and the holy, not testable physics claims, so it's engaged with respect, not lab tests; the company's product, by contrast, makes a falsifiable physical-and-health claim with no evidence, dressed in borrowed sacred imagery, so it's rightly met with skepticism. You can hold deep respect for the sacred, refuse to judge anyone's faith, be genuinely moved standing inside a mosque or temple or cathedral, AND see clearly that a $50 "energy disk" with a fake science claim is pseudoscience using sacred decoration as marketing. In fact, the skepticism protects the tradition as much as the customer, because it refuses to let a profound, centuries-old practice be cheapened into a product with a marketing slogan. Reverence for genuine traditions and skepticism toward false commercial claims are not opposites; holding both at once is exactly the mature, respectful clarity this lesson is building.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 13. A relative you love starts spending a lot of money on "sacred geometry healing crystals" and "chakra-aligned mandala disks," telling you they cure illness by "fixing your energy frequency." You deeply respect this relative and don't want to insult their spiritual beliefs — but you have this lesson's framework. What do you actually think and do?`,
              options: [
                `Tell them their whole spiritual belief system is nonsense and the crystals prove it.`,
                `Say nothing and agree the crystals are curing them, to avoid hurting their feelings.`,
                `Separate their genuine spirituality (a meaning claim deserving full respect, not yours to judge) from the product's specific, testable, unsupported health claim, honor the first sincerely while gently raising the second, and persistently watch the real danger line — money is their choice, but skipping real medical care is serious.`,
                `Buy the crystals yourself to understand what they're experiencing first.`,
              ],
              correctIndex: 2,
              explanation: `Applied "reverence and clear sight" in a loved relationship. The move is to separate the relative's genuine spirituality (a meaning claim deserving full respect, not yours to judge) from the product's specific, testable, unsupported health claim (Tier C-pseudoscience), honor the first sincerely while gently raising the second, and watch the real danger line: money is their choice, but skipping real medical care for a "healing" product is serious enough to raise persistently. Respecting faith and protecting someone from fake health claims are both forms of love, not opposites. The distractors attack the faith, abandon accuracy, or get drawn in.`,
            },
          ]
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, how did you think about sacred art, mainly as "religious decoration," or as something deeper? What changed when you saw it as humans everywhere reaching for what cannot be said? What surprised you most?` },
            { id: `reflect-awe`, category: `Awe`, prompt: `Have you ever felt awe in a sacred space or in front of sacred art, your own tradition or someone else's? What did the art actually do to create that feeling, the scale, the light, the pattern, the music? Could you feel it even without sharing the belief?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson asked you to hold reverence and clear sight at once. Which comes more naturally to you, respect or skepticism, and which do you have to work at? When have you collapsed into one and lost the other?` },
            { id: `reflect-heritage`, category: `Your heritage`, prompt: `Caro, sacred art runs deep through Latin American Catholic, Indigenous, and Afro-diasporic traditions, processions, retablos, devotional music, mixed-tradition imagery. Which sacred art lives in your own family's heritage, and what does it carry that words alone could not?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You will meet sacred art from many traditions, and also products borrowing sacred imagery to sell things. Where have you already seen each? How will you tell genuine tradition from a marketing slogan next time, without disrespecting either real faith or your own clear thinking?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "it's all the same, you can't respect every religion's art and also doubt energy crystals; either you believe in the spiritual or you don't." State the strongest version of that. Where is it confused, and how does the tier distinction answer it?` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Sacred art is everywhere around you, and so is imagery borrowed from it. Two paths to engage both wisely.`,
          familyActivity: {
            title: `Sacred Art In Your Family And World`,
            duration: `45 minutes`,
            description: `Explore sacred art together as a family, starting with your own heritage and reaching outward with respect. First, look at and talk about sacred art from your own family's traditions, for a Colombian and Latin American family this might include church art and architecture, retablos and devotional images, processional traditions, and the blended Catholic-Indigenous-Afro-diasporic imagery rich across the region. What does it mean to your family, and what does it carry that words could not? Then, with respect and curiosity, look at sacred art from a tradition no one in the family belongs to (Islamic geometric patterns, a Buddhist mandala, a Hindu temple, an Indigenous ceremony shown respectfully), and practice the lesson's posture: learn a little about what it means before reacting, notice the craft and the human reaching, and feel the awe without needing to share the belief. The goal is to deepen reverence for the sacred art in your own life and to practice meeting other traditions with respect rather than either dismissal or careless consumption.`,
          },
          projectOption: {
            title: `Make Sacred-Inspired Art, Honestly, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Create art inspired by the sacred while practicing the line between respectful inspiration and appropriation. Week 1: choose one of two honest paths. Path A, work within your own tradition or beliefs, making art that expresses your own sense of the sacred, the awe of nature, a value you hold holy, your own faith if you have one, in your own voice. Path B, take inspiration from the universal techniques sacred art uses (geometry suggesting the infinite, light, scale, repeating pattern, symmetry) to make something abstract and your own, without lifting any specific tradition's sacred symbols out of their context. Either way, the rule is: be inspired by approaches, never appropriate a living tradition's specific sacred symbols as decoration. Week 2: make the piece, then write a short reflection on what you tried to evoke (awe? peace? the infinite?), which techniques you used, and how you stayed on the respectful side of the appreciation-versus-appropriation line. The point is to feel, as a maker, both the deep power of sacred-art techniques and the responsibility of using them honestly.`,
            offerToParent: `Parent: opt your child into the sacred-inspired art project, and consider guiding the choice between the two paths. Making art that reaches for awe or the sacred, while deliberately respecting the line between inspiration and appropriation, builds both creative depth and genuine cross-cultural respect, an especially valuable combination, and it lets your child explore meaning and the holy in a safe, age-appropriate, tradition-honoring way.`,
          },
          identityQuestion: `If you become someone who can stand in awe before the sacred art of any tradition, honor what billions of people hold holy without having to share it, and still tell the difference between a genuine tradition and a company selling fake science in sacred clothing, what does that let you be in a diverse world, that neither a cynic nor a person who believes every spiritual-sounding sales pitch can be?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can feel awe before sacred art from any tradition, even ones not my own.`,
            `A person who respects real faith and still spots fake science dressed in sacred clothes.`,
            `Someone who knows the difference between honoring a tradition and taking its look for a costume.`,
          ],
          saveKey: `identity_responses_ca_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. Eleven down. This one asked something rare of you, to hold deep reverence and clear thinking at the same time, and you did. You learned that humans in every culture make sacred art because art can gesture toward what cannot be said, and the sacred is the ultimate unsayable. You saw how different traditions answer that same reaching in profoundly different, equally serious ways, cathedrals soaring up, Islamic geometry suggesting the infinite, mandalas mapping order and impermanence, temples teeming with life, Indigenous sacred woven into land, none ranked above another. You learned to engage sacred art that is not your own with respect and humility, and the real difference between appreciation, which honors the meaning and the people, and appropriation, which takes the look and discards both. And you brought back the tier skill to keep genuine traditions, which deserve respect, apart from pseudoscience that borrows their imagery to sell things, which deserves skepticism, doing double justice to both the tradition and the customer. Most of all, you learned that reverence and clear sight are not enemies but maturity: you can honor what deserves honor and be fooled by no one. Next: architecture and sacred geometry, where the human reaching for the holy meets the precise beauty of mathematics. Onward, {name}. — Muse`,
          badge: `sacred-art-literate`,
          badgeName: `Sacred Art Literate`,
          xpEarned: 75,
          competencies: [
            `Explains why humans across all cultures make sacred art (art gestures toward what cannot be said; the sacred is the ultimate unsayable)`,
            `Knows how major traditions make the sacred visible in profoundly different, equally serious ways, holding them with respect and without ranking`,
            `Distinguishes appreciation (honoring meaning, context, and people) from appropriation (taking the look and discarding both), valuing the community's own testimony`,
            `Applies the tier skill: respect for genuine traditions (Tier C-cultural, meaning claims) vs. skepticism toward pseudoscience borrowing sacred imagery (Tier C-pseudoscience, false testable claims)`,
            `Understands that respectful engagement does not require sharing the belief, but does require learning meaning and following the rules of sacred spaces`,
            `Holds reverence and clear sight at once as maturity, avoiding both credulous belief in sales pitches and cynical dismissal of faith`,
            `Applies this in a real relationship: honoring a loved one's spirituality while protecting them from a product's false health claims`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Architecture and Sacred Geometry`,
            hook: `Where the reaching for the holy meets the precise beauty of mathematics, and where real math ends and mystical claims begin. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L11 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
