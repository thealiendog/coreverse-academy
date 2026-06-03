// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L06 — AI and Creative Arts
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Generative AI, Authorship, Creative Ethics
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort claims/sources about AI art across
// reliability tiers + authorship/ethics questions). Contract matches L03:
// sources[] with tier/title/type/context/quote/questions[]/evaluation;
// synthesisPrompt + reflectionPrompt.
// SENSITIVITY: balanced. Names real tools and real disputes; does not declare a
// single "correct" verdict on whether AI art is "real art." Holds the open question.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l06-v1";

const CREATIVE_ARTS_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-06`,
      title: `AI and Creative Arts`,
      duration: 35,
      xpReward: 75,
      badge: `ai-art-literate`,
      badgeName: `AI & Art Literate`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, you are growing up at the exact moment a brand-new question arrived, one your grandparents never had to answer. If you type a sentence and a computer makes a picture in ten seconds, who is the artist? You? The computer? The thousands of people whose paintings the computer learned from without asking? This is not science fiction; it is happening right now, and the people arguing about it include artists, lawyers, judges, and engineers who genuinely disagree. The same questions you wrestled with in Lesson 5, where meaning lives and who counts as a maker, come roaring back, except now there is real money, real jobs, and real fairness on the line. Today you will not be told the "right" answer, because the honest truth is that the world has not settled it yet. Instead you will learn to sort good information from hype, hold the hardest questions clearly, and form a view you can actually defend. Onward.`,
          headline: `AI and Creative Arts`,
          subtitle: `If a machine makes the picture, who is the artist? Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What These Tools Actually Do`,
          paragraphs: [
            `Start with how the machine actually works, in plain terms, because most of the arguing goes sideways when people do not understand this part. A generative AI image tool, like Midjourney, DALL-E, or Stable Diffusion, does not "look up" a picture or copy one image. Instead it was trained: it was shown enormous numbers of images, hundreds of millions of them scraped from the internet, each paired with words describing it. Over time it learned the patterns that connect words to shapes, colors, and styles. When you type "a fox in a snowy forest, watercolor," it builds a brand-new image from those learned patterns, pixel by pixel. Think of a student who studied ten thousand paintings and can now paint something new in a blended style, except this student is software and works in seconds.`,
            `That training step is where the whole fight begins. The hundreds of millions of images the tools learned from were made by real human artists, photographers, and illustrators, and almost none of them were asked, paid, or credited. So when the tool produces a slick image "in the style of" a living illustrator, that illustrator can fairly say: my life's work taught this machine to imitate me, for free, and now it competes with me. That is not a feeling, it is a concrete economic fact, and it is the heart of several real lawsuits happening right now. Understanding this is what separates a thoughtful view from a hot take.`,
            `Here is what is genuinely true on both sides, held together. It is true that the tools can make striking images fast, that they put creative power in the hands of people who cannot draw, and that new tools have always frightened existing artists (photography terrified painters in the 1800s, and painting survived). It is also true that these particular tools learned from specific real people's work without consent, and that the people who built the tools, not the artists who unknowingly trained them, are the ones making money. Both of those are facts. A serious thinker does not pick the convenient one and ignore the other.`,
          ],
          image: `/voyager-assets/creative-arts/l06-s1-how.webp`,
          imageCaption: `How generative image tools (Midjourney, DALL-E, Stable Diffusion) work: not lookup or copy. Trained on hundreds of millions of internet images, each paired with describing words; learned patterns connecting words to shapes, colors, styles; builds a brand-new image pixel by pixel from a text prompt. Like a student who studied ten thousand paintings and can now paint something new in a blended style, but in seconds. The fight's root: those training images were made by real artists who were not asked, paid, or credited; "in the style of" a living illustrator means their work taught the machine to imitate them for free, now competing with them, the heart of real lawsuits. Both true at once: tools are powerful and democratizing (photography scared painters in the 1800s; painting survived), AND they learned from specific people's work without consent while toolmakers, not those artists, profit.`,
          vocab: [
            {
              word: `how generative AI image tools work, and where the fight starts`,
              definition: `A generative AI image tool (Midjourney, DALL-E, Stable Diffusion) does not look up or copy an existing picture. It was trained: shown enormous numbers of images (hundreds of millions, scraped from the internet), each paired with words describing it, and over time it learned the patterns connecting words to shapes, colors, and styles. When you type a prompt like "a fox in a snowy forest, watercolor," it builds a brand-new image from those learned patterns, pixel by pixel, in seconds, like a student who studied ten thousand paintings and can now paint something new in a blended style, except the student is software. The fight starts at the training step: the hundreds of millions of images were made by real human artists, photographers, and illustrators, and almost none were asked, paid, or credited. So when a tool makes an image "in the style of" a living illustrator, that illustrator can fairly say their life's work taught the machine to imitate them, for free, and now it competes with them, a concrete economic fact at the heart of real lawsuits. Both sides hold true at once: the tools are powerful and put creative power in hands that cannot draw, and new tools have always frightened existing artists (photography terrified painters in the 1800s, and painting survived); AND these tools learned from specific real people's work without consent, and the toolmakers, not the artists who unknowingly trained them, make the money. A serious thinker holds both facts, not just the convenient one.`,
              audioPrompt: `Start with how the machine actually works, {name}, in plain terms, because most of the arguing goes sideways when people do not understand this part. A generative AI image tool, like Midjourney, DALL-E, or Stable Diffusion, does not look up a picture or copy one image. Instead it was trained. It was shown enormous numbers of images, hundreds of millions of them scraped from the internet, each paired with words describing it. Over time it learned the patterns that connect words to shapes, colors, and styles. When you type "a fox in a snowy forest, watercolor," it builds a brand-new image from those learned patterns, pixel by pixel. Think of a student who studied ten thousand paintings and can now paint something new in a blended style, except this student is software and works in seconds. That training step is where the whole fight begins. The hundreds of millions of images the tools learned from were made by real human artists, and almost none of them were asked, paid, or credited. So when the tool produces a slick image in the style of a living illustrator, that illustrator can fairly say: my life's work taught this machine to imitate me, for free, and now it competes with me. Here is what is genuinely true on both sides. It is true that the tools put creative power in the hands of people who cannot draw, and that new tools have always frightened existing artists; photography terrified painters in the 1800s, and painting survived. It is also true that these particular tools learned from specific real people's work without consent. Both of those are facts.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Who Is The Artist Now?`,
          paragraphs: [
            `Now the question that connects straight back to Lesson 5: when an AI image is made, who counts as the artist? There are real, defensible answers, and they disagree. One answer says the human who wrote the prompt is the artist, because choosing the words, refining them dozens of times, and selecting the best result is a real creative act, like a film director who never operates the camera but shapes the whole film. Another answer says the machine is just a tool, no more an artist than a camera is, so calling yourself an "artist" for typing a sentence is like calling yourself a chef for ordering at a restaurant.`,
            `A third answer points at the thousands of uncredited artists whose work trained the model and says they are the hidden co-authors of every AI image, since without their paintings the machine could make nothing. And a fourth answer, the most unsettling, asks whether "artist" is even the right question, suggesting these images are a genuinely new kind of object that our old word "art" does not fit cleanly. Notice this is exactly the Lesson 5 puzzle in new clothes: where does the creative act actually live, and who gets to claim it?`,
            `A real-world fact sharpens all of this. In the United States, the Copyright Office has repeatedly decided that an image made purely by typing a prompt cannot be copyrighted by the person who typed it, because copyright requires human authorship and, in their view, the human did not make the actual image, the machine did. That is a live, official ruling with real consequences: if you cannot own it, you cannot stop anyone else from using it. Whether you agree with that ruling or not, it shows the question is not just philosophical. Courts and offices are being forced to answer "who is the author?" with real money attached, and they are landing in genuinely contested places.`,
          ],
          image: `/voyager-assets/creative-arts/l06-s2-who.webp`,
          imageCaption: `Who is the artist when an AI makes the image? Four defensible, disagreeing answers. (1) The human prompt-writer: choosing/refining words and selecting results is a creative act, like a film director who never touches the camera. (2) Nobody human in the usual sense: the machine is a tool like a camera; typing a sentence is like ordering at a restaurant, not cooking. (3) The uncredited training artists: hidden co-authors, since without their work the machine makes nothing. (4) "Artist" may be the wrong question: a genuinely new kind of object the old word "art" does not fit. The Lesson 5 puzzle in new clothes. Real fact: the U.S. Copyright Office has repeatedly ruled an image made purely by typing a prompt cannot be copyrighted (copyright requires human authorship); if you cannot own it, you cannot stop others using it. The question has real money attached.`,
          vocab: [
            {
              word: `who counts as the artist of an AI image`,
              definition: `When an AI image is made, who counts as the artist? Real, defensible, disagreeing answers. ONE: the human who wrote the prompt is the artist, because choosing the words, refining them dozens of times, and selecting the best result is a genuine creative act, like a film director who never operates the camera but shapes the whole film. TWO: the machine is just a tool, no more an artist than a camera is, so calling yourself an "artist" for typing a sentence is like calling yourself a chef for ordering at a restaurant. THREE: the thousands of uncredited artists whose work trained the model are the hidden co-authors of every AI image, since without their paintings the machine could make nothing. FOUR: "artist" may be the wrong question entirely, and these images may be a genuinely new kind of object that the old word "art" does not fit cleanly. This is the Lesson 5 puzzle (where does the creative act live, who gets to claim it) in new clothes. A real-world fact sharpens it: in the United States, the Copyright Office has repeatedly decided that an image made purely by typing a prompt cannot be copyrighted by the person who typed it, because copyright requires human authorship and, in their view, the human did not make the actual image, the machine did. That is a live official ruling with real consequences: if you cannot own it, you cannot stop anyone else from using it. The question is not just philosophical; courts and offices are answering "who is the author?" with real money attached, and landing in genuinely contested places.`,
              audioPrompt: `Now the question that connects straight back to Lesson 5, {name}: when an AI image is made, who counts as the artist? There are real, defensible answers, and they disagree. One answer says the human who wrote the prompt is the artist, because choosing the words, refining them dozens of times, and selecting the best result is a real creative act, like a film director who never operates the camera but shapes the whole film. Another answer says the machine is just a tool, no more an artist than a camera is, so calling yourself an artist for typing a sentence is like calling yourself a chef for ordering at a restaurant. A third answer points at the thousands of uncredited artists whose work trained the model and says they are the hidden co-authors of every AI image. And a fourth answer asks whether "artist" is even the right question, suggesting these images are a genuinely new kind of object that our old word "art" does not fit cleanly. This is exactly the Lesson 5 puzzle in new clothes: where does the creative act actually live, and who gets to claim it? A real-world fact sharpens all of this. In the United States, the Copyright Office has repeatedly decided that an image made purely by typing a prompt cannot be copyrighted by the person who typed it, because copyright requires human authorship. That is a live, official ruling with real consequences: if you cannot own it, you cannot stop anyone else from using it.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Telling Good Information From Hype`,
          paragraphs: [
            `Because this topic is new, loud, and full of money, it is drowning in bad information, so the source-evaluation skill from Lesson 3 matters more here than almost anywhere. The same three-tier idea applies. Tier A is careful sources: court rulings you can actually read, statements from artists explaining their real experience, technical explanations from people who build the tools, reporting from journalists who checked their facts. Tier B is decent popular coverage that simplifies but does not lie. And the dangerous tier is the hype, from both directions at once.`,
            `Hype comes in two flavors, and a sharp thinker spots both. The first is sell-side hype: companies and influencers claiming AI will instantly replace all artists, that anyone can be a "professional artist" in a weekend, that this changes everything overnight. This oversells to get your attention and money. The second is panic hype: claims that AI art is worthless garbage, that it is "just stealing" with no nuance, that everyone who uses it is a fraud. This feels righteous but flattens a real, complicated situation into a slogan. Both flavors share a tell: they are certain, simple, and emotional, where the honest truth is uncertain, complicated, and still unfolding.`,
            `Here is the practical filter you can actually use. When you see a strong claim about AI and art, ask three quick questions. Who benefits if I believe this? A tool company benefits from "it changes everything"; a frightened competitor benefits from "it is all theft." What specific evidence is offered, a real ruling, a real artist's account, a real number, versus just a confident vibe? And does the claim admit any complexity, or is it suspiciously tidy? Real expertise on this topic almost always sounds a little uncertain, because the genuine experts know the law and the technology are both still moving. Certainty is the warning sign, not the reassurance.`,
          ],
          image: `/voyager-assets/creative-arts/l06-s3-hype.webp`,
          imageCaption: `Source evaluation (Lesson 3 skill) matters here because the topic is new, loud, and money-soaked. Tier A: court rulings you can read, artists' first-hand accounts, technical explanations from tool-builders, fact-checked reporting. Tier B: decent popular coverage that simplifies but does not lie. The dangerous tier is hype, in two flavors: SELL-SIDE hype (AI instantly replaces all artists; be a "pro" in a weekend; changes everything overnight) oversells for attention and money; PANIC hype (AI art is worthless garbage, "just stealing," everyone using it is a fraud) flattens a complicated reality into a slogan. Both tells: certain, simple, emotional, where the truth is uncertain, complicated, unfolding. Practical filter, three questions: Who benefits if I believe this? What specific evidence (ruling, account, number) versus a confident vibe? Does it admit complexity, or is it suspiciously tidy? Real expertise sounds a little uncertain; certainty is the warning sign.`,
          vocab: [
            {
              word: `sorting good information from hype on AI art`,
              definition: `Because the topic is new, loud, and full of money, it is drowning in bad information, so the Lesson 3 source-evaluation skill matters here more than almost anywhere. The same tier idea: Tier A is careful sources (court rulings you can actually read, statements from artists explaining their real experience, technical explanations from people who build the tools, reporting from journalists who checked their facts); Tier B is decent popular coverage that simplifies but does not lie; the dangerous tier is hype, from both directions. Hype comes in two flavors. SELL-SIDE hype: companies and influencers claiming AI will instantly replace all artists, that anyone can be a "professional artist" in a weekend, that this changes everything overnight, overselling to get attention and money. PANIC hype: claims that AI art is worthless garbage, that it is "just stealing" with no nuance, that everyone who uses it is a fraud, flattening a real complicated situation into a slogan. Both share a tell: they are certain, simple, and emotional, where the honest truth is uncertain, complicated, and still unfolding. Practical filter, three questions for any strong claim: Who benefits if I believe this (a tool company benefits from "it changes everything"; a frightened competitor benefits from "it is all theft")? What specific evidence is offered, a real ruling, a real artist's account, a real number, versus just a confident vibe? Does the claim admit any complexity, or is it suspiciously tidy? Real expertise on this topic almost always sounds a little uncertain, because the law and the technology are both still moving; certainty is the warning sign, not the reassurance.`,
              audioPrompt: `Because this topic is new, loud, and full of money, it is drowning in bad information, {name}, so the source-evaluation skill from Lesson 3 matters here more than almost anywhere. The same three-tier idea applies. Tier A is careful sources: court rulings you can actually read, statements from artists explaining their real experience, technical explanations from people who build the tools, reporting from journalists who checked their facts. Tier B is decent popular coverage that simplifies but does not lie. And the dangerous tier is the hype, from both directions at once. The first flavor is sell-side hype: companies and influencers claiming AI will instantly replace all artists, that anyone can be a professional artist in a weekend. This oversells to get your attention and money. The second is panic hype: claims that AI art is worthless garbage, that it is just stealing with no nuance. This feels righteous but flattens a real, complicated situation into a slogan. Both share a tell: they are certain, simple, and emotional, where the honest truth is uncertain, complicated, and still unfolding. Here is the practical filter. When you see a strong claim, ask: Who benefits if I believe this? What specific evidence is offered versus just a confident vibe? And does the claim admit any complexity, or is it suspiciously tidy? Real expertise almost always sounds a little uncertain. Certainty is the warning sign, not the reassurance.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Fairness Questions Underneath`,
          paragraphs: [
            `Beneath the "is it real art?" debate sit harder fairness questions, and these are where it stops being abstract and starts touching real lives. The first is consent: the artists whose work trained these models were not asked. Imagine spending ten years developing a personal painting style and then a machine, trained on your posted work, can produce "your style" for anyone in seconds, for free. Even if it is legal, many people feel it is not fair, and "legal" and "fair" are not the same thing, which is itself worth sitting with.`,
            `The second is money and work. Some real jobs are already affected: companies that used to hire illustrators for quick background art, stock-photo work, or simple logos now sometimes use AI instead. At the same time, new kinds of work appear (people who are genuinely skilled at directing these tools, fixing their output, and combining them with hand-made work). History suggests technology rarely destroys creative work cleanly; it reshapes it, helping some and hurting others, and who gets hurt is usually not random, it is often the people with the least power to begin with. That is a fairness question, not just a tech question.`,
            `The third question is the one closest to you: what do you want for your own creative life? You will grow up with these tools as normal, the way you grew up with the internet. You get to decide how you use them, and that decision can be thoughtful instead of automatic. You might use AI as one tool among many while still building real hand skills. You might refuse it for certain work because making it yourself matters to you. You might use it openly and credit it honestly rather than passing it off as fully your own. There is no single right answer here, but there is a difference between a choice you actually made and a habit you drifted into, and this lesson is trying to give you the first.`,
          ],
          image: `/voyager-assets/creative-arts/l06-s4-fairness.webp`,
          imageCaption: `Fairness questions under the "is it real art?" debate. (1) Consent: training artists were not asked; spend ten years building a style, then a machine trained on your posted work makes "your style" for anyone, free, in seconds. Even if legal, many feel it is not fair, and "legal" and "fair" are not the same. (2) Money and work: real jobs already affected (quick background art, stock photos, simple logos sometimes done by AI now); new work appears (skilled tool-directors, fixers, hybrid makers); technology rarely destroys creative work cleanly, it reshapes it, and who gets hurt is often the people with the least power, a fairness question. (3) Closest to you: what do you want for your own creative life? Use AI as one tool while building hand skills; refuse it where making it yourself matters; use it openly and credit it honestly. No single right answer, but a real difference between a choice you made and a habit you drifted into.`,
          vocab: [
            {
              word: `the fairness questions under AI art`,
              definition: `Beneath the "is it real art?" debate sit harder fairness questions that touch real lives. CONSENT: the artists whose work trained these models were not asked. Imagine spending ten years developing a personal painting style, then a machine trained on your posted work produces "your style" for anyone in seconds, for free. Even if it is legal, many people feel it is not fair, and "legal" and "fair" are not the same thing. MONEY AND WORK: some real jobs are already affected (companies that hired illustrators for quick background art, stock-photo work, or simple logos now sometimes use AI instead), while new kinds of work appear (people skilled at directing these tools, fixing their output, combining them with hand-made work). History suggests technology rarely destroys creative work cleanly; it reshapes it, helping some and hurting others, and who gets hurt is usually not random, often the people with the least power to begin with, which makes it a fairness question, not just a tech question. YOUR OWN CREATIVE LIFE, the question closest to you: you will grow up with these tools as normal, the way you grew up with the internet, and you get to decide how you use them thoughtfully instead of automatically. You might use AI as one tool among many while still building real hand skills; you might refuse it for certain work because making it yourself matters to you; you might use it openly and credit it honestly rather than passing it off as fully your own. There is no single right answer, but there is a real difference between a choice you actually made and a habit you drifted into.`,
              audioPrompt: `Beneath the "is it real art?" debate sit harder fairness questions, {name}, and these are where it stops being abstract and starts touching real lives. The first is consent: the artists whose work trained these models were not asked. Imagine spending ten years developing a personal painting style and then a machine, trained on your posted work, can produce your style for anyone in seconds, for free. Even if it is legal, many people feel it is not fair, and legal and fair are not the same thing. The second is money and work. Some real jobs are already affected: companies that used to hire illustrators for quick background art or simple logos now sometimes use AI instead. At the same time, new kinds of work appear, people who are genuinely skilled at directing these tools and combining them with hand-made work. History suggests technology rarely destroys creative work cleanly; it reshapes it, helping some and hurting others, and who gets hurt is often the people with the least power to begin with. The third question is the one closest to you: what do you want for your own creative life? You will grow up with these tools as normal, the way you grew up with the internet. You get to decide how you use them. You might use AI as one tool among many while still building real hand skills. You might refuse it for certain work because making it yourself matters to you. You might use it openly and credit it honestly. There is no single right answer, but there is a difference between a choice you actually made and a habit you drifted into.`,
            },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you evaluate the sources. You learned how the tools actually work (trained on hundreds of millions of human-made images to build new ones from patterns), why the training step started the fight (real artists' work used without consent or pay), and the four real answers to "who is the artist now," which echo the Lesson 5 puzzle about where meaning and making live. You learned to spot hype in both flavors, sell-side and panic, and you learned the fairness questions of consent, work, and your own choices.`,
            `Now the source-evaluation screen will hand you several real or realistic sources about AI and art, a court ruling, an artist's statement, a tool company's marketing, a panic-driven post, a balanced piece of journalism, and ask you to sort them by how much you should trust them and why. This is the exact skill from Lesson 3, now aimed at the most fast-moving topic in this whole band, the one you will actually face this year, not in some distant future.`,
            `One steadying thought before you start. It can feel like you are supposed to already have a strong opinion about AI art, for it or against it, and that not having one means you are behind. The opposite is true. On a question this new, where the law is still being written and the technology still changing, the most respectable position is a thoughtful, evidence-based, "here is what I think so far and here is what would change my mind." You are not behind for holding the question open. You are ahead for holding it carefully. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l06-s5-before.webp`,
          imageCaption: `Threads together. You learned how the tools work (trained on hundreds of millions of human images, building new ones from patterns), why training started the fight (real work used without consent or pay), the four answers to "who is the artist now" (echoing Lesson 5), how to spot hype in both flavors (sell-side and panic), and the fairness questions (consent, work, your own choices). The source-evaluation screen ahead hands you several real/realistic sources (a court ruling, an artist's statement, a tool company's marketing, a panic post, balanced journalism) to sort by trustworthiness and why, the Lesson 3 skill aimed at the most fast-moving topic in the band. Steadying thought: you are not behind for holding the question open; on something this new, the most respectable position is "here is what I think so far and what would change my mind."`,
          vocab: [
            {
              word: `holding the AI-art question open and careful`,
              definition: `The synthesis before the source-evaluation screen. You learned how the tools actually work (trained on hundreds of millions of human-made images to build new images from learned patterns), why the training step started the fight (real artists' work used without consent or pay), and the four real answers to "who is the artist now" (the human prompter; nobody human, the machine is a tool; the uncredited training artists as hidden co-authors; or "artist" being the wrong question for a new kind of object), which echo the Lesson 5 puzzle about where meaning and making live. You learned to spot hype in two flavors, sell-side ("AI replaces all artists, be a pro in a weekend") and panic ("AI art is worthless theft, all of it"), and the fairness questions of consent, work, and your own choices. The source-evaluation screen will hand you several real or realistic sources (a court ruling, an artist's statement, a tool company's marketing, a panic-driven post, a balanced piece of journalism) to sort by how much you should trust them and why, the exact Lesson 3 skill aimed at the most fast-moving topic in the band, one you will face this year, not in a distant future. Steadying thought: it can feel like you are supposed to already have a strong opinion, for or against, and that not having one means you are behind. The opposite is true. On a question this new, where the law is still being written and the technology still changing, the most respectable position is a thoughtful, evidence-based "here is what I think so far and here is what would change my mind." You are not behind for holding the question open; you are ahead for holding it carefully.`,
              audioPrompt: `Pull it together before you evaluate the sources, {name}. You learned how the tools actually work, trained on hundreds of millions of human-made images to build new ones from patterns. You learned why the training step started the fight, because real artists' work was used without consent or pay. You learned the four real answers to "who is the artist now," which echo the Lesson 5 puzzle about where meaning and making live. You learned to spot hype in both flavors, sell-side and panic, and you learned the fairness questions of consent, work, and your own choices. Now the source-evaluation screen will hand you several real or realistic sources about AI and art, a court ruling, an artist's statement, a tool company's marketing, a panic-driven post, a balanced piece of journalism, and ask you to sort them by how much you should trust them and why. This is the exact skill from Lesson 3, now aimed at the most fast-moving topic in this whole band. One steadying thought before you start. It can feel like you are supposed to already have a strong opinion about AI art, and that not having one means you are behind. The opposite is true. On a question this new, where the law is still being written and the technology still changing, the most respectable position is a thoughtful "here is what I think so far and here is what would change my mind." You are not behind for holding the question open. You are ahead for holding it carefully.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l06-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Sources On AI And Art`,
          intro: `{name}, five sources about AI and art, spanning careful evidence to pure hype in both directions. For each, decide how much you should trust it and why, using tier-appropriate criteria. Notice that "trust" is not all-or-nothing: a marketing page can still contain a true fact, and a passionate artist can still overstate. Sort carefully.`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `U.S. Copyright Office decision on a purely AI-generated image (real ruling type)`,
              type: `Official government ruling`,
              context: `The U.S. Copyright Office has, in real decisions, refused to register images created solely by typing a text prompt into a generative AI tool, on the grounds that copyright protection requires human authorship and the human did not create the actual image. The office has also indicated that work where a human meaningfully edits or arranges AI output may qualify, case by case.`,
              quote: `"Copyright protects only material that is the product of human creativity... when an AI technology determines the expressive elements of its output, the generated material is not the product of human authorship."`,
              questions: [
                `How much should you trust this, and why? (Hint: it is an official ruling you can read, not someone's opinion about a ruling.)`,
                `What does it actually decide, and what does it leave open?`,
                `Why does "you cannot copyright it" matter in real, practical terms?`,
              ],
              evaluation: `High trust as a source of fact, this is Tier A: an official ruling you can read directly, not a hot take about one. What it decides: an image made purely by prompt cannot be copyrighted by the prompter, because copyright requires human authorship. What it leaves open: work where a human meaningfully edits or arranges the output may qualify, decided case by case, and the law could change. Why it matters practically: if you cannot copyright something, you cannot stop others from copying and using it, so a business cannot fully "own" a purely AI-made logo. Note the limit even of Tier A: a ruling tells you the current legal situation, not whether AI art is "good," "real art," or morally fine. Those are separate questions a court is not answering.`,
            },
            {
              id: `s2`,
              tier: `A`,
              title: `A working illustrator's first-hand account of finding her style imitated`,
              type: `Primary-source artist statement`,
              context: `A professional illustrator describes discovering that an AI tool, trained partly on her publicly posted portfolio, can now generate images "in her style" on demand, and that a former client used such images instead of commissioning her. She explains the concrete effect on her income and her sense of her own work.`,
              quote: `"I posted my work so people could see it, not so a company could teach a machine to be me for free. I did not get asked. I did not get paid. And now I am competing with a copy of myself."`,
              questions: [
                `What kind of source is this, and what is it strong evidence for?`,
                `What is it NOT strong evidence for? (Hint: one person's experience versus the whole industry.)`,
                `How should her real experience weigh against a tool company's claims?`,
              ],
              evaluation: `High trust for what it is: a primary source, a real person describing her own direct experience, which is the strongest possible evidence about that experience. It is strong evidence that the consent and income harms are real and specific, not imaginary. What it is NOT: proof about the entire industry's future, since one person's experience cannot settle big statistical questions about jobs overall. The right weighting: her account is exactly the kind of concrete, checkable, human evidence that should count heavily against a tool company's cheerful "everyone wins" marketing, while still being one data point you would combine with broader reporting. First-hand artist accounts are essential Tier A material on the fairness questions.`,
            },
            {
              id: `s3`,
              tier: `hype (sell-side)`,
              title: `An AI tool company's landing page`,
              type: `Marketing`,
              context: `A company selling an AI image tool advertises it with sweeping promises: become a professional-level artist instantly, no skills needed, create unlimited masterpieces in seconds, the future of art is here and it is effortless.`,
              quote: `"You don't need talent. You don't need years of practice. With [Tool], anyone is a professional artist in minutes. The age of struggling to create is over forever."`,
              questions: [
                `Who benefits if you believe this, and how does that shape it?`,
                `Which specific words are doing the overselling?`,
                `Is there any true thing buried inside the hype?`,
              ],
              evaluation: `Low trust as a balanced source, this is sell-side hype: the company profits if you believe it, which shapes every word. The overselling is in the absolutes: "anyone," "instantly," "no talent," "forever," "professional artist in minutes." Real expertise rarely talks in such tidy absolutes. But notice the honest move: there IS a true thing buried inside, the tools genuinely do let people who cannot draw produce striking images quickly. The skill is extracting that grain of truth while rejecting the inflated frame around it. A marketing page is not worthless; it is just a witness with an obvious motive, to be read accordingly.`,
            },
            {
              id: `s4`,
              tier: `hype (panic)`,
              title: `A viral post declaring all AI art worthless theft`,
              type: `Social-media opinion (panic)`,
              context: `A passionate viral post declares that all AI art is "just stealing," that everyone who uses any AI tool for anything is a talentless thief, and that AI images are worthless garbage with no possible value, ever.`,
              quote: `"There is no debate. AI art is 100% theft, 100% garbage, and anyone who touches it is a fraud. Real artists make everything by hand or they are not real artists. Period."`,
              questions: [
                `This post is "on the artists' side," so why is it still low-trust?`,
                `Which words flatten a real, complicated situation into a slogan?`,
                `What real concern is this post pointing at, even though it overstates?`,
              ],
              evaluation: `Low trust as a reliable guide, even though it sounds righteous, this is panic hype. Being "on the right side" does not make a claim accurate. The flattening words are the absolutes again: "100%," "no debate," "anyone," "period," "not real artists." It erases real distinctions, between a person who copies a living artist's exact style to undercut them and a person who uses AI for a personal hobby sketch and credits it. The real concern underneath is genuine and serious, the consent and income harms from source 2 are real. The error is turning a real, specific harm into a blanket slogan that cannot think. Note the symmetry with the marketing page: both are certain, simple, and emotional, just pointed in opposite directions.`,
            },
            {
              id: `s5`,
              tier: `B`,
              title: `A balanced news article on AI, artists, and the law`,
              type: `Fact-checked journalism`,
              context: `A reported article quotes artists describing harm, quotes technologists explaining how the tools work, explains the current legal rulings accurately, notes what is still unsettled, and avoids declaring a single winner. It cites specific lawsuits, specific rulings, and specific people by name.`,
              quote: `"Artists and AI companies are headed for years of legal fights. Early rulings favor human authorship requirements, but the law is unsettled, and reasonable experts disagree about where it should land."`,
              questions: [
                `Why is this useful even though it does not give you a single clean answer?`,
                `What makes it more trustworthy than sources 3 and 4?`,
                `What are the limits of even good journalism here?`,
              ],
              evaluation: `Solid trust, this is good Tier B: fact-checked journalism that quotes multiple real sides, explains the law accurately, names specifics, and admits what is unsettled. It is useful precisely because it does not hand you a tidy answer; it hands you an accurate map of a genuinely unsettled situation, which is what an honest source on this topic should do. It beats sources 3 and 4 because it offers checkable specifics (named lawsuits, real rulings) instead of absolutes and emotion, and it admits complexity instead of selling certainty. Its limits: even good journalism can go out of date fast on a moving topic, can lean slightly toward whichever side it interviewed more, and reports the dispute rather than resolving the deeper "is it real art?" question, which no news article can settle for you.`,
            },
          ],
          synthesisPrompt: `After sorting all five sources: what is your actual rule for deciding how much to trust a claim about AI and art? Where do you land, so far, on whether AI images are "art" and whether using these tools is fair, and, just as important, what specific evidence would change your mind? In 5-6 sentences.`,
          reflectionPrompt: `Notice that the marketing page and the panic post were both low-trust for the same reason: certain, simple, emotional. Where else in your life do you see the same "certainty is the warning sign" pattern, where the loudest, tidiest claims are the ones to check hardest?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `How does a generative AI image tool actually make a picture?`,
              options: [
                `Random`,
                `It does not look up or copy an existing picture. It was trained: shown enormous numbers of images, hundreds of millions of them scraped from the internet, each paired with words describing it, and over time it learned the patterns connecting words to shapes, colors, and styles. When you type a prompt like "a fox in a snowy forest, watercolor," it builds a brand-new image from those learned patterns, pixel by pixel, in seconds. A useful comparison: it is like a student who studied ten thousand paintings and can now paint something new in a blended style, except the student is software. Understanding this matters because most of the arguing about AI art goes sideways when people think the tool is simply copying and pasting existing images, which is not how it works.`,
                `Just copies pictures`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The tool learns patterns from huge numbers of images and builds new ones from those patterns; it does not copy-paste. Getting this right is what separates a thoughtful view from a misinformed hot take.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Where does the central fairness fight about AI image tools begin?`,
              options: [
                `Random`,
                `At the training step. The hundreds of millions of images these tools learned from were made by real human artists, photographers, and illustrators, and almost none of them were asked, paid, or credited. So when a tool produces a slick image "in the style of" a living illustrator, that illustrator can fairly say that their life's work taught the machine to imitate them, for free, and now it competes with them. That is not just a feeling; it is a concrete economic fact and the heart of several real lawsuits. The fight is not mainly about the final images looking nice or not; it is about the fact that the tools were built using specific real people's work without their consent, while the companies that built the tools, not those artists, are the ones making money.`,
                `Just about money`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The fight starts at training: real artists' work was used without consent, pay, or credit, while toolmakers profit. That concrete fact, not just the look of the images, is what the real lawsuits are about.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the competing answers to "who is the artist?" when an AI makes an image?`,
              options: [
                `Random`,
                `There are several real, defensible, disagreeing answers. One: the human who wrote the prompt is the artist, because choosing and refining the words and selecting the best result is a creative act, like a film director who never operates the camera. Two: the machine is just a tool, no more an artist than a camera, so calling yourself an artist for typing a sentence is like calling yourself a chef for ordering at a restaurant. Three: the thousands of uncredited artists whose work trained the model are the hidden co-authors, since without their work the machine could make nothing. Four: "artist" may be the wrong question entirely, and these images may be a genuinely new kind of object the old word does not fit. This is the Lesson 5 puzzle (where does the creative act live, and who gets to claim it) in new clothes.`,
                `Just the typer`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Four defensible answers disagree: the prompter, nobody-human, the uncredited training artists, or "artist is the wrong question." It is the Lesson 5 question of where making lives, in a new form.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What has the U.S. Copyright Office decided about images made purely by typing a prompt, and why does it matter?`,
              options: [
                `Random`,
                `The U.S. Copyright Office has repeatedly decided that an image created solely by typing a text prompt cannot be copyrighted by the person who typed it, because copyright protection requires human authorship and, in their view, the human did not create the actual image, the machine did. The office has indicated that work where a human meaningfully edits or arranges AI output might qualify, case by case. Why it matters practically: if you cannot copyright something, you cannot stop other people from copying and using it, so a business cannot fully "own" a purely AI-generated logo or image. This shows the "who is the author?" question is not just philosophical; courts and government offices are being forced to answer it with real money attached, and they are landing in genuinely contested, still-changing places.`,
                `Just no rules`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Purely prompt-made images cannot be copyrighted because copyright needs human authorship; meaningful human editing may change that, case by case. It matters because you cannot protect what you cannot own.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are the two flavors of "hype" about AI art, and what do they share?`,
              options: [
                `Random`,
                `Sell-side hype: companies and influencers claiming AI will instantly replace all artists, that anyone can be a "professional artist" in a weekend, that it changes everything overnight; this oversells to get attention and money. Panic hype: claims that AI art is worthless garbage, that it is "just stealing" with no nuance, that everyone who uses it is a fraud; this feels righteous but flattens a real, complicated situation into a slogan. What they share is a tell: both are certain, simple, and emotional, where the honest truth about AI art is uncertain, complicated, and still unfolding. The practical filter is to ask who benefits if you believe the claim, what specific evidence is offered versus a confident vibe, and whether the claim admits any complexity. On this topic, real expertise almost always sounds a little uncertain, so certainty is the warning sign, not the reassurance.`,
                `Just two opinions`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Sell-side hype oversells; panic hype flattens. Both share the tell of being certain, simple, and emotional, where the truth is uncertain and complicated. Certainty is the warning sign.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the three-question filter for evaluating any strong claim about AI and art?`,
              options: [
                `Random`,
                `First: who benefits if I believe this? A tool company benefits from "it changes everything"; a frightened competitor benefits from "it is all theft"; knowing who gains shapes how you read the claim. Second: what specific evidence is offered, a real court ruling, a real artist's first-hand account, a real number, versus just a confident vibe or strong feeling? Third: does the claim admit any complexity, or is it suspiciously tidy and absolute? The reasoning behind the filter is that on a topic where the law is still being written and the technology is still changing, genuine experts tend to sound a little uncertain because they know how much is unsettled. So a claim that is loud, simple, certain, and emotional should be checked harder than one that is careful, specific, and willing to say "it depends." Certainty is the warning sign, not the reassurance.`,
                `Just ask around`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Ask who benefits, what specific evidence backs it, and whether it admits complexity. Loud, tidy certainty on an unsettled topic is a flag to check harder, not a sign of reliability.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What are the fairness questions underneath the "is it real art?" debate?`,
              options: [
                `Random`,
                `Three. Consent: the artists whose work trained the models were not asked, and even if using their public work was legal, many feel it was not fair, which matters because "legal" and "fair" are not the same thing. Money and work: some real jobs are already affected (quick background art, stock photos, simple logos sometimes done by AI now), while new kinds of work appear (skilled tool-directors and people who combine AI with hand-made work); technology rarely destroys creative work cleanly, it reshapes it, and who gets hurt is often the people with the least power, making it a fairness question, not just a tech question. And the question closest to you: what do you want for your own creative life, since you can choose to use AI as one tool while building real skills, refuse it where making something yourself matters, or use it openly and credit it honestly, the difference being between a choice you actually made and a habit you drifted into.`,
                `Just jobs`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Consent (legal is not the same as fair), money and work (reshaped, not cleanly destroyed, often hurting the least powerful), and your own choices (a deliberate choice versus a drifted-into habit).`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is comparing AI tools to past technologies (like photography in the 1800s) both useful and limited?`,
              options: [
                `Random`,
                `It is useful because it is genuinely true that new tools have always frightened existing artists and that art survived: photography terrified painters in the 1800s, yet painting did not die, it changed (some painters moved toward what a camera could not do, like abstraction and impressionism). That history is a real reason not to panic that "art is over." But the comparison is limited, and a careful thinker notices the difference: a camera does not learn to imitate a specific living photographer's exact style by training on that photographer's own life's work without permission. The specific consent-and-imitation issue, a machine trained directly on particular artists' work to reproduce their look, is genuinely new, so the photography comparison reassures on one point (art adapts and survives) while missing the new fairness problem at the center of the current fight.`,
                `Just the same`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Useful: history shows art adapts and survives new tools, so "art is over" is unlikely. Limited: a camera does not train on a specific living artist's own work to copy their style, which is the genuinely new fairness issue.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because an AI tool company's marketing page is trying to sell you something, nothing on it can be true and you should ignore it entirely.`,
              correctAnswer: false,
              explanation: `False, and the reasoning matters. A source having a motive to persuade you does not make everything it says false; it makes the source a witness with an obvious interest, to be read carefully rather than ignored entirely. An AI tool company's marketing page overstates with absolutes ("anyone," "instantly," "no talent needed," "the age of struggling is over forever"), and you should reject that inflated frame. But buried inside the hype there is usually a grain of real truth, in this case, that the tools genuinely do let people who cannot draw produce striking images quickly. The skill source evaluation actually teaches is not "trust everything" or "trust nothing," but extracting the checkable, true part while rejecting the spin around it. The same applies in reverse to the panic post: it is also unreliable as a guide, yet the real harm it points at, artists' work used without consent, is genuine. Good evaluation means weighing each source by how much to trust which part of it, not throwing whole sources away because of who made them. That nuance, "trust is not all-or-nothing," is the core of the whole skill.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you are 14 and you enter a school art contest. You used an AI tool to generate your image, then spent two hours editing it by hand. A classmate who drew everything from scratch finds out and says you cheated and should be disqualified. The teacher asks you to explain what you actually did and whether it was fair. Drawing on this lesson, what is the most honest and thoughtful thing to say and do?`,
              options: [
                `"Just deny it"`,
                `Several moves, held together honestly, because this is exactly the real situation the lesson was preparing you for. First, tell the exact truth about what you did, because honesty is the whole game here: you used an AI tool to generate a starting image from a prompt, and then you spent two hours editing it by hand, and the right move is to say precisely that rather than hide the AI part or exaggerate the hand part. Second, recognize that your classmate has a real and fair point, not a silly one: a contest usually has an unspoken assumption that the work is made by the entrant's own hand and skill, and if that was the rule everyone else understood, then entering substantially AI-generated work without disclosing it genuinely is unfair to people who drew from scratch, even if you added editing. The lesson's consent-and-fairness thread applies to you here, not just to big companies: fairness is about what people reasonably expected and agreed to. Third, separate the questions the way this whole lesson taught: "is AI art real art?" is a genuinely open question reasonable people disagree about, but "was entering it in this specific contest without disclosing it fair?" is a narrower, more answerable question, and the honest answer depends on what the contest rules actually said and what everyone assumed. Fourth, apply the difference between a choice you made and a habit you drifted into: the real problem was probably not using AI as a tool, it was not disclosing it, because the same image entered with a clear note saying "AI-generated base, hand-edited by me" would have let the judges and your classmates evaluate it fairly. Disclosure is the move that turns a possible cheat into an honest entry. Fifth, decide what to actually do, and let it be the responsible thing: tell the teacher exactly what you did, acknowledge that not disclosing it up front was the real mistake, and accept the teacher's ruling, whether that means disclosing and being judged in a separate category, or being disqualified if the rules required all-hand work. That is what taking responsibility looks like. Sixth, hold the longer lesson: you are growing up with these tools as normal, and the people who will be trusted with them are the ones who are transparent about when and how they use them. The skill is not hiding the AI or pretending you did not use it; it is using it openly, crediting it honestly, and being the kind of person whose creative claims people can trust. That reputation is worth far more than one contest, and building it starts with telling the truth in exactly this kind of moment.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Applied AI-art ethics in a real situation. The move is to tell the exact truth about what you did, recognize the classmate's fairness point as real, separate "is it art?" from "was this entry fair?", and see that the actual mistake was non-disclosure, not tool use. Transparency, using AI openly and crediting it honestly, is the lesson's core practical answer, and it is what makes a person trustworthy with these tools.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you think AI image tools just copy and paste existing pictures, or did you know they learn patterns and build new ones? Now that you know how they actually work, does your view of "is it stealing?" get more complicated? Where exactly?` },
            { id: `reflect-unclear`, category: `What's still unclear`, prompt: `Of the four answers to "who is the artist?" (the prompter, nobody-human, the training artists, or "wrong question"), which one do you find hardest to dismiss, and which hardest to accept? What would you need to know to decide?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson tried to make you someone who can hold a brand-new, loud question open and careful instead of grabbing a tidy slogan. On AI and art, can you say "here is what I think so far, and here is what would change my mind"? Try it.` },
            { id: `reflect-heritage`, category: `Your own creative life`, prompt: `You will grow up with these tools as normal. What do you actually want for your own creative life: AI as one tool among many, refusing it for certain work, using it openly and crediting it? There is no single right answer, but make it a choice, not a drift.` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `The "certainty is the warning sign" filter works far beyond AI. Where else do you meet claims that are loud, simple, certain, and emotional, that you should check harder? Pick one from your real life and run the three-question filter on it.` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Take the side you disagree with most on AI art, whether that is "it is all theft" or "it is just a tool, get over it," and state its strongest version fairly. Where does even the side you reject have a real point?` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the most current topic in the band, and you will meet it constantly. Two paths beyond the lesson.`,
          familyActivity: {
            title: `The Family AI Art Test`,
            duration: `45 minutes`,
            description: `Do an honest experiment as a family, no special tools required. First, look together at a small mix of images, some made by humans, some made by AI (many news articles and museum sites now show clearly labeled examples). Before revealing which is which, each person guesses. Talk about what tipped you off, or fooled you. Then have the real conversation this lesson is about: ask each family member where they land on "is an AI image art?", "who is the artist?", and "is it fair that the tools learned from artists without asking?" The goal is not to agree. It is to practice disagreeing thoughtfully, with each person giving a reason and saying what would change their mind. If anyone in the family makes or sells creative work, ask how they feel about these tools personally; first-hand views are the strongest evidence, exactly like source 2 in the lesson.`,
          },
          projectOption: {
            title: `Human, AI, Hybrid: A 2-week comparison (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Make the same artwork three ways and reflect on the difference, with full honesty about your process. Pick one simple subject (a portrait of a pet, a scene from your window, an imaginary creature). Week 1: make version A entirely by hand (drawing, painting, collage, whatever you like), and, if you have access to an AI tool with a parent's permission, make version B from a text prompt only. Week 2: make version C as a hybrid, start from an AI image or your own rough sketch and then meaningfully change it by hand. Then write 400-600 words comparing the three: which felt most like "yours," which you are proudest of, what each method was good and bad at, and where you would honestly say the "artist" was in each case. Crucially, label each version truthfully. The point is not to decide AI is good or bad; it is to feel the difference from the inside, which is worth more than any opinion you could borrow.`,
            offerToParent: `Parent: opt your child into the human/AI/hybrid project, and please supervise any AI tool use directly (account access, prompts, and outputs). Making the same piece three ways turns an abstract debate into felt, first-hand knowledge, and it builds the habit of labeling AI use honestly, which is the single most important real-world skill in this lesson.`,
          },
          identityQuestion: `If you become someone who understands how these tools actually work, can sort real evidence from hype in both directions, and uses AI (or chooses not to) openly and honestly rather than hiding it, what does that let you do in a world where most people will either fear these tools blindly or use them carelessly?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows how AI image tools actually work, not just how people argue about them.`,
            `A person who can hold a brand-new question open instead of grabbing a slogan.`,
            `Someone who uses creative tools honestly and credits them, whatever I choose to use.`,
          ],
          saveKey: `identity_responses_ca_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Six down. You took on the most current, fastest-moving question in this whole band and refused to grab a slogan. You understand how generative AI image tools actually work: trained on hundreds of millions of human-made images, building brand-new images from learned patterns, not copying and pasting. You know why the training step started the real fight, because real artists' work was used without consent, pay, or credit, while the toolmakers profit, the heart of real lawsuits. You can hold the four answers to "who is the artist now," which echo the Lesson 5 puzzle, and you know the U.S. Copyright Office has ruled that purely prompt-made images cannot be copyrighted, because copyright needs human authorship. You can spot hype in both flavors, sell-side and panic, and you learned that on a topic this new, certainty is the warning sign, not the reassurance. You can name the fairness questions of consent, work, and your own choices, and you know that legal and fair are not the same thing. Most of all, you learned that being able to say "here is what I think so far, and here is what would change my mind" is not being behind, it is being ahead. Next: the economics of the creative industry, how artists, musicians, and writers actually make a living, which makes the money questions from today fully concrete. Onward, {name}. — Muse`,
          badge: `ai-art-literate`,
          badgeName: `AI & Art Literate`,
          xpEarned: 75,
          competencies: [
            `Explains how generative AI image tools work (trained on huge image sets, building new images from learned patterns, not copy-paste)`,
            `Identifies why the training step started the fight: real artists' work used without consent, pay, or credit while toolmakers profit`,
            `Articulates the four competing answers to "who is the artist?" and connects them to the Lesson 5 question of where making lives`,
            `Knows the U.S. Copyright Office position that purely prompt-generated images cannot be copyrighted (human-authorship requirement) and why ownership matters`,
            `Spots both flavors of hype (sell-side and panic) and applies the "certainty is the warning sign" filter`,
            `Names the fairness questions (consent, work, personal choice) and distinguishes "legal" from "fair"`,
            `Holds a new, contested question open and evidence-based: "here is what I think so far and what would change my mind"`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: The Economics of the Creative Industry`,
            hook: `How do artists, musicians, and writers actually make a living? The money questions, made concrete. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L06 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
