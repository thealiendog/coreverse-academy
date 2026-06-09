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
              word: `fight starts`,
              definition: `A generative AI image tool (Midjourney, DALL-E, Stable Diffusion) does not look up or copy an existing picture. It was trained: shown enormous numbers of images (hundreds of millions, scraped from the internet), each paired with words describing it, and over time it learned the patterns connecting words to shapes, colors, and styles. When you type a prompt like "a fox in a snowy forest, watercolor," it builds a brand-new image from those learned patterns, pixel by pixel, in seconds, like a student who studied ten thousand paintings and can now paint something new in a blended style, except the student is software. The fight starts at the training step: the hundreds of millions of images were made by real human artists, photographers, and illustrators, and almost none were asked, paid, or credited. So when a tool makes an image "in the style of" a living illustrator, that illustrator can fairly say their life's work taught the machine to imitate them, for free, and now it competes with them, a concrete economic fact at the heart of real lawsuits. Both sides hold true at once: the tools are powerful and put creative power in hands that cannot draw, and new tools have always frightened existing artists (photography terrified painters in the 1800s, and painting survived); AND these tools learned from specific real people's work without consent, and the toolmakers, not the artists who unknowingly trained them, make the money. A serious thinker holds both facts, not just the convenient one.`,
              audioPrompt: `Start with how the machine actually works, {name}, in plain terms, because most of the arguing goes sideways when people do not understand this part. A generative AI image tool, like Midjourney, DALL-E, or Stable Diffusion, does not look up a picture or copy one image. Instead it was trained. It was shown enormous numbers of images, hundreds of millions of them scraped from the internet, each paired with words describing it. Over time it learned the patterns that connect words to shapes, colors, and styles. When you type "a fox in a snowy forest, watercolor," it builds a brand-new image from those learned patterns, pixel by pixel. Think of a student who studied ten thousand paintings and can now paint something new in a blended style, except this student is software and works in seconds. That training step is where the whole fight begins. The hundreds of millions of images the tools learned from were made by real human artists, and almost none of them were asked, paid, or credited. So when the tool produces a slick image in the style of a living illustrator, that illustrator can fairly say: my life's work taught this machine to imitate me, for free, and now it competes with me. Here is what is genuinely true on both sides. It is true that the tools put creative power in the hands of people who cannot draw, and that new tools have always frightened existing artists; photography terrified painters in the 1800s, and painting survived. It is also true that these particular tools learned from specific real people's work without consent. Both of those are facts.`,
            },
            {
              word: `generative AI`,
              definition: `Generative AI, in the context of image tools like Midjourney, DALL-E, and Stable Diffusion, refers to software that does not look up or copy an existing picture but instead was trained on enormous numbers of images, hundreds of millions scraped from the internet, each paired with words describing it. It learned the patterns connecting words to shapes, colors, and styles. When you type a text prompt, it builds a brand-new image from those learned patterns, pixel by pixel. Think of it like a student who studied ten thousand paintings and can now paint something new in a blended style, except the student is software that works in seconds. The name "generative" captures the key point: it generates new images from learned patterns rather than retrieving stored ones.`,
              audioPrompt: `Generative AI, in the context of image tools, refers to software that builds brand-new images from learned patterns, {name}. Tools like Midjourney, DALL-E, and Stable Diffusion do not look up a picture or copy one image from a database. Instead they were trained: shown enormous numbers of images, hundreds of millions scraped from the internet, each paired with describing words. Over time they learned the patterns that connect words to shapes, colors, and styles. When you type "a fox in a snowy forest, watercolor," the tool builds a new image from those patterns, pixel by pixel. Think of it like a student who studied ten thousand paintings and can now paint something new in a blended style, except the student is software and works in seconds. The word "generative" is the key: it generates, builds fresh, from patterns it learned, rather than retrieving something it stored. That is what separates a generative AI tool from a search engine, and it is the part people often misunderstand when they say the tools "just copy-paste."`,
            },
            {
              word: `training step`,
              definition: `The training step is the part of building a generative AI image tool where it is shown enormous numbers of images, hundreds of millions scraped from the internet, each paired with words describing it, and learns the patterns connecting words to shapes, colors, and styles. The lesson says this is where the whole fight begins. The images the tools trained on were made by real human artists, photographers, and illustrators, and almost none of them were asked, paid, or credited. So when the tool produces an image "in the style of" a living illustrator, that illustrator can fairly say their life's work taught the machine to imitate them, for free, and now it competes with them. That is the concrete economic fact at the heart of real lawsuits.`,
              audioPrompt: `The training step is where the whole fight begins, {name}, and understanding it is what separates a thoughtful view from a hot take. When a generative AI image tool was built, it went through a training phase: it was shown enormous numbers of images, hundreds of millions scraped from the internet, each paired with words describing it. Over time it learned the patterns connecting words to shapes, colors, and styles. That is how it knows what "watercolor" looks like, what "fox" looks like, how they go together. The problem is that the images used in the training step were made by real human artists, photographers, and illustrators, and almost none of them were asked, paid, or credited. The tool learned from their life's work without their permission. So when it produces an image "in the style of" a specific living illustrator, that illustrator can fairly say: my years of work taught this machine to imitate me, for free, and now it competes with me for commissions. That is a concrete economic fact, not just a feeling, and it is the heart of real lawsuits that are happening right now.`,
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
              word: `ai image`,
              definition: `When an AI image is made, who counts as the artist? Real, defensible, disagreeing answers. ONE: the human who wrote the prompt is the artist, because choosing the words, refining them dozens of times, and selecting the best result is a genuine creative act, like a film director who never operates the camera but shapes the whole film. TWO: the machine is just a tool, no more an artist than a camera is, so calling yourself an "artist" for typing a sentence is like calling yourself a chef for ordering at a restaurant. THREE: the thousands of uncredited artists whose work trained the model are the hidden co-authors of every AI image, since without their paintings the machine could make nothing. FOUR: "artist" may be the wrong question entirely, and these images may be a genuinely new kind of object that the old word "art" does not fit cleanly. This is the Lesson 5 puzzle (where does the creative act live, who gets to claim it) in new clothes. A real-world fact sharpens it: in the United States, the Copyright Office has repeatedly decided that an image made purely by typing a prompt cannot be copyrighted by the person who typed it, because copyright requires human authorship and, in their view, the human did not make the actual image, the machine did. That is a live official ruling with real consequences: if you cannot own it, you cannot stop anyone else from using it. The question is not just philosophical; courts and offices are answering "who is the author?" with real money attached, and landing in genuinely contested places.`,
              audioPrompt: `Now the question that connects straight back to Lesson 5, {name}: when an AI image is made, who counts as the artist? There are real, defensible answers, and they disagree. One answer says the human who wrote the prompt is the artist, because choosing the words, refining them dozens of times, and selecting the best result is a real creative act, like a film director who never operates the camera but shapes the whole film. Another answer says the machine is just a tool, no more an artist than a camera is, so calling yourself an artist for typing a sentence is like calling yourself a chef for ordering at a restaurant. A third answer points at the thousands of uncredited artists whose work trained the model and says they are the hidden co-authors of every AI image. And a fourth answer asks whether "artist" is even the right question, suggesting these images are a genuinely new kind of object that our old word "art" does not fit cleanly. This is exactly the Lesson 5 puzzle in new clothes: where does the creative act actually live, and who gets to claim it? A real-world fact sharpens all of this. In the United States, the Copyright Office has repeatedly decided that an image made purely by typing a prompt cannot be copyrighted by the person who typed it, because copyright requires human authorship. That is a live, official ruling with real consequences: if you cannot own it, you cannot stop anyone else from using it.`,
            },
            {
              word: `hidden co-authors`,
              definition: `Hidden co-authors is the term the lesson uses for the third answer to the question of who is the artist when an AI makes an image. It points at the thousands of uncredited artists whose work trained the model: since without their paintings the machine could make nothing, they are in some sense the hidden co-authors of every AI image produced. They were never asked, never paid, and never credited, yet the machine's ability to produce any image at all rests on what it learned from their work. This framing connects to the consent fairness question: even if the tool use is legal, many of those artists feel it is not fair.`,
              audioPrompt: `Hidden co-authors is the term for the third answer to the question of who is the artist when an AI makes an image, {name}. It points at the thousands of uncredited artists whose work trained the generative AI model in the first place. Without their paintings, their photographs, their illustrations, the machine could make nothing. It learned from them, and in that sense they are the hidden co-authors of every AI image the tool produces. They were not in the room; they may not even know their work was used. They were never asked, never paid, and never credited. Their work is baked into the patterns the model learned, invisible inside every output. The lesson uses this framing to show why the question "who is the artist?" is not simple, and why it connects to real fairness concerns. Even if it is legal for the tool to train on publicly posted images, many of those artists feel it is not fair, and the lesson reminds you that legal and fair are not the same thing.`,
            },
            {
              word: `human authorship`,
              definition: `Human authorship is the requirement the U.S. Copyright Office applies when deciding whether something can be copyrighted. The Copyright Office has repeatedly decided that an image made purely by typing a text prompt into a generative AI tool cannot be copyrighted by the person who typed it, because copyright protects only material that is the product of human creativity, and in their view the human did not make the actual image, the machine did. The consequence is concrete: if you cannot own it, you cannot stop anyone else from copying and using it. The office has indicated that work where a human meaningfully edits or arranges AI output may qualify, decided case by case.`,
              audioPrompt: `Human authorship is the requirement the U.S. Copyright Office uses as its test for whether something can be copyrighted, {name}. Copyright protects material that is the product of human creativity. When an AI technology determines the expressive elements of an output, the generated material is not the product of human authorship and cannot be copyrighted. The Copyright Office has applied this in real decisions: an image made purely by typing a text prompt cannot be copyrighted by the person who typed it, because in the office's view the human did not make the actual image, the machine did. That is a live, official ruling, not a theory, and it has real consequences. If you cannot copyright it, you cannot stop anyone else from copying and using it. A business cannot fully own a purely AI-made logo. The office has also said that work where a human meaningfully edits or arranges the AI output may qualify, decided case by case, so the law is not all-or-nothing. But the baseline rule is clear: purely prompt-generated means not copyrightable under the human-authorship requirement.`,
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
              word: `ai art`,
              definition: `Because the topic is new, loud, and full of money, it is drowning in bad information, so the Lesson 3 source-evaluation skill matters here more than almost anywhere. The same tier idea: Tier A is careful sources (court rulings you can actually read, statements from artists explaining their real experience, technical explanations from people who build the tools, reporting from journalists who checked their facts); Tier B is decent popular coverage that simplifies but does not lie; the dangerous tier is hype, from both directions. Hype comes in two flavors. SELL-SIDE hype: companies and influencers claiming AI will instantly replace all artists, that anyone can be a "professional artist" in a weekend, that this changes everything overnight, overselling to get attention and money. PANIC hype: claims that AI art is worthless garbage, that it is "just stealing" with no nuance, that everyone who uses it is a fraud, flattening a real complicated situation into a slogan. Both share a tell: they are certain, simple, and emotional, where the honest truth is uncertain, complicated, and still unfolding. Practical filter, three questions for any strong claim: Who benefits if I believe this (a tool company benefits from "it changes everything"; a frightened competitor benefits from "it is all theft")? What specific evidence is offered, a real ruling, a real artist's account, a real number, versus just a confident vibe? Does the claim admit any complexity, or is it suspiciously tidy? Real expertise on this topic almost always sounds a little uncertain, because the law and the technology are both still moving; certainty is the warning sign, not the reassurance.`,
              audioPrompt: `Because this topic is new, loud, and full of money, it is drowning in bad information, {name}, so the source-evaluation skill from Lesson 3 matters here more than almost anywhere. The same three-tier idea applies. Tier A is careful sources: court rulings you can actually read, statements from artists explaining their real experience, technical explanations from people who build the tools, reporting from journalists who checked their facts. Tier B is decent popular coverage that simplifies but does not lie. And the dangerous tier is the hype, from both directions at once. The first flavor is sell-side hype: companies and influencers claiming AI will instantly replace all artists, that anyone can be a professional artist in a weekend. This oversells to get your attention and money. The second is panic hype: claims that AI art is worthless garbage, that it is just stealing with no nuance. This feels righteous but flattens a real, complicated situation into a slogan. Both share a tell: they are certain, simple, and emotional, where the honest truth is uncertain, complicated, and still unfolding. Here is the practical filter. When you see a strong claim, ask: Who benefits if I believe this? What specific evidence is offered versus just a confident vibe? And does the claim admit any complexity, or is it suspiciously tidy? Real expertise almost always sounds a little uncertain. Certainty is the warning sign, not the reassurance.`,
            },
            {
              word: `sell-side hype`,
              definition: `Sell-side hype is the first of the two flavors of bad information the lesson names about AI and art. It comes from companies and influencers claiming AI will instantly replace all artists, that anyone can be a "professional artist" in a weekend, that this changes everything overnight. Its purpose is to get your attention and money. The tell that identifies it: it is certain, simple, and emotional, where the honest truth is uncertain, complicated, and still unfolding. Real expertise almost always sounds a little uncertain, because the law and the technology are both still moving. On this topic, certainty is the warning sign, not the reassurance.`,
              audioPrompt: `Sell-side hype is the first flavor of bad information the lesson names about AI and art, {name}. It comes from companies and influencers who have a financial stake in convincing you that AI will transform everything instantly. The claims look like this: AI will instantly replace all artists. Anyone can be a professional artist in a weekend. No talent needed. No years of practice. The age of struggling to create is over forever. All of those are overselling to get your attention and your money. The tell is that the claims are certain, simple, and emotional. They deal in absolutes: "anyone," "instantly," "forever," "all artists." Real expertise on a topic this new and this fast-moving almost never talks in such tidy absolutes, because the genuine experts know the law is still being written and the technology is still changing. The lesson's rule is that certainty is the warning sign, not the reassurance. When a source sounds suspiciously tidy about a genuinely unsettled question, that is the moment to ask: who benefits if I believe this?`,
            },
            {
              word: `panic hype`,
              definition: `Panic hype is the second flavor of bad information the lesson names about AI and art. It sounds like claims that AI art is worthless garbage, that it is "just stealing" with no nuance, that everyone who uses any AI tool is a fraud. It can feel righteous because it seems to defend artists, but it flattens a real, complicated situation into a slogan. It shares a tell with sell-side hype: it is certain, simple, and emotional, where the honest truth is uncertain, complicated, and still unfolding. The lesson points out that the real concern the panic hype is pointing at, consent and harm to artists, is genuine. The error is not caring about the right thing; the error is turning a real, specific harm into an absolute that cannot think.`,
              audioPrompt: `Panic hype is the second flavor of bad information on this topic, {name}, and it is trickier to spot than sell-side hype because it feels like it is on the right side. It sounds like: AI art is 100% theft, 100% garbage. Anyone who uses any AI tool is a fraud. Real artists make everything by hand or they are not real artists. Period. It can feel righteous because it seems to defend artists and oppose the corporations. But the lesson names it as hype anyway, and here is why. It flattens a real, complicated situation into a slogan. It erases real distinctions, between a person who deliberately copies a living artist's exact style to undercut them economically and a person who uses an AI tool for a personal sketch and labels it honestly. Panic hype cannot make those distinctions because it has already declared the answer: all of it, always, is theft. It shares the same tell as sell-side hype: certain, simple, emotional, where the honest truth is uncertain and complicated. The real concern underneath the panic is genuine. The consent and income harms to artists are real. The error is turning that genuine concern into a blunt absolute that stops being able to think.`,
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
              word: `ai art`,
              definition: `Beneath the "is it real art?" debate sit harder fairness questions that touch real lives. CONSENT: the artists whose work trained these models were not asked. Imagine spending ten years developing a personal painting style, then a machine trained on your posted work produces "your style" for anyone in seconds, for free. Even if it is legal, many people feel it is not fair, and "legal" and "fair" are not the same thing. MONEY AND WORK: some real jobs are already affected (companies that hired illustrators for quick background art, stock-photo work, or simple logos now sometimes use AI instead), while new kinds of work appear (people skilled at directing these tools, fixing their output, combining them with hand-made work). History suggests technology rarely destroys creative work cleanly; it reshapes it, helping some and hurting others, and who gets hurt is usually not random, often the people with the least power to begin with, which makes it a fairness question, not just a tech question. YOUR OWN CREATIVE LIFE, the question closest to you: you will grow up with these tools as normal, the way you grew up with the internet, and you get to decide how you use them thoughtfully instead of automatically. You might use AI as one tool among many while still building real hand skills; you might refuse it for certain work because making it yourself matters to you; you might use it openly and credit it honestly rather than passing it off as fully your own. There is no single right answer, but there is a real difference between a choice you actually made and a habit you drifted into.`,
              audioPrompt: `Beneath the "is it real art?" debate sit harder fairness questions, {name}, and these are where it stops being abstract and starts touching real lives. The first is consent: the artists whose work trained these models were not asked. Imagine spending ten years developing a personal painting style and then a machine, trained on your posted work, can produce your style for anyone in seconds, for free. Even if it is legal, many people feel it is not fair, and legal and fair are not the same thing. The second is money and work. Some real jobs are already affected: companies that used to hire illustrators for quick background art or simple logos now sometimes use AI instead. At the same time, new kinds of work appear, people who are genuinely skilled at directing these tools and combining them with hand-made work. History suggests technology rarely destroys creative work cleanly; it reshapes it, helping some and hurting others, and who gets hurt is often the people with the least power to begin with. The third question is the one closest to you: what do you want for your own creative life? You will grow up with these tools as normal, the way you grew up with the internet. You get to decide how you use them. You might use AI as one tool among many while still building real hand skills. You might refuse it for certain work because making it yourself matters to you. You might use it openly and credit it honestly. There is no single right answer, but there is a difference between a choice you actually made and a habit you drifted into.`,
            },
            {
              word: `legal fair`,
              definition: `Legal and fair are not the same thing, and the lesson names this as something worth sitting with. Even if using artists' work to train an AI model is technically legal, many of those artists feel it is not fair, because they were not asked, not paid, and not credited. The lesson points out this distinction in the context of the consent fairness question: spending ten years developing a personal painting style and then having a machine trained on your posted work produce "your style" for anyone in seconds, for free, may be within the law while still being something many people reasonably feel crosses a line. The gap between legal and fair is where a lot of the real argument about AI and art lives.`,
              audioPrompt: `Legal and fair are not the same thing, {name}, and the lesson says that distinction is itself worth sitting with. When the AI image tools were trained on hundreds of millions of images from the internet, most of that use may have been legal under the terms of service people agreed to when they posted their work publicly. But many of the artists whose work was used feel it was not fair. Imagine spending ten years developing a personal painting style, posting your work so people could see it, and then discovering that a machine was trained on your portfolio and can now produce "your style" for anyone, in seconds, for free. You did not get asked. You did not get paid. You do not get credited. And now the machine competes with you. Even if that is legal, many people feel it crosses a line. The lesson uses this gap, the space between what the law allows and what people reasonably feel is right, to make a point: the debate about AI and art is not only a legal question. It is a fairness question, and those two questions have different answers.`,
            },
            {
              word: `least power`,
              definition: `The lesson notes that when technology reshapes an industry rather than destroying it cleanly, who gets hurt is usually not random: it is often the people with the least power to begin with. In the context of AI and creative work, this means freelance illustrators doing quick background art, stock-photo work, or simple logos are more at risk than established artists with strong personal brands and loyal clients. Technology rarely destroys creative work cleanly; it reshapes it, helping some and hurting others. That reshaping is a fairness question, not just a tech question, because the distribution of harm follows existing power imbalances.`,
              audioPrompt: `When technology reshapes an industry, who gets hurt is usually not random, {name}. The lesson makes this point directly: it is often the people with the least power to begin with who absorb the most disruption. In the context of AI and creative work, that means freelance illustrators taking quick background-art commissions, stock photographers, or designers doing simple logos. Those are the jobs where AI substitution is already happening. An established artist with a strong personal brand, direct client relationships, and a recognizable style that clients specifically want may be much more insulated. The lesson points out that history suggests technology rarely destroys creative work cleanly; it reshapes it, helping some and hurting others. But the reshaping does not land randomly. It tends to land on the people who already had the least leverage, which makes it a fairness question and not just a tech question. Understanding that pattern is what separates a thoughtful view of the AI and jobs debate from a simple "technology always works out fine in the end."`,
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
              word: `open careful`,
              definition: `The synthesis before the source-evaluation screen. You learned how the tools actually work (trained on hundreds of millions of human-made images to build new images from learned patterns), why the training step started the fight (real artists' work used without consent or pay), and the four real answers to "who is the artist now" (the human prompter; nobody human, the machine is a tool; the uncredited training artists as hidden co-authors; or "artist" being the wrong question for a new kind of object), which echo the Lesson 5 puzzle about where meaning and making live. You learned to spot hype in two flavors, sell-side ("AI replaces all artists, be a pro in a weekend") and panic ("AI art is worthless theft, all of it"), and the fairness questions of consent, work, and your own choices. The source-evaluation screen will hand you several real or realistic sources (a court ruling, an artist's statement, a tool company's marketing, a panic-driven post, a balanced piece of journalism) to sort by how much you should trust them and why, the exact Lesson 3 skill aimed at the most fast-moving topic in the band, one you will face this year, not in a distant future. Steadying thought: it can feel like you are supposed to already have a strong opinion, for or against, and that not having one means you are behind. The opposite is true. On a question this new, where the law is still being written and the technology still changing, the most respectable position is a thoughtful, evidence-based "here is what I think so far and here is what would change my mind." You are not behind for holding the question open; you are ahead for holding it carefully.`,
              audioPrompt: `Pull it together before you evaluate the sources, {name}. You learned how the tools actually work, trained on hundreds of millions of human-made images to build new ones from patterns. You learned why the training step started the fight, because real artists' work was used without consent or pay. You learned the four real answers to "who is the artist now," which echo the Lesson 5 puzzle about where meaning and making live. You learned to spot hype in both flavors, sell-side and panic, and you learned the fairness questions of consent, work, and your own choices. Now the source-evaluation screen will hand you several real or realistic sources about AI and art, a court ruling, an artist's statement, a tool company's marketing, a panic-driven post, a balanced piece of journalism, and ask you to sort them by how much you should trust them and why. This is the exact skill from Lesson 3, now aimed at the most fast-moving topic in this whole band. One steadying thought before you start. It can feel like you are supposed to already have a strong opinion about AI art, and that not having one means you are behind. The opposite is true. On a question this new, where the law is still being written and the technology still changing, the most respectable position is a thoughtful "here is what I think so far and here is what would change my mind." You are not behind for holding the question open. You are ahead for holding it carefully.`,
            },
            {
              word: `certainty warning`,
              definition: `Certainty is the warning sign, not the reassurance, is the rule the lesson gives you for evaluating claims about AI and art. On a topic this new, where the law is still being written and the technology is still changing, real expertise almost always sounds a little uncertain, because the genuine experts know how much is still unsettled. When a source is certain, simple, and emotional about this question, that is a flag to check harder, not a sign of reliability. This applies equally to sell-side hype (certain that AI will instantly transform everything) and panic hype (certain that all AI art is theft with no nuance). Both deal in absolutes where the honest truth is complicated and still unfolding.`,
              audioPrompt: `Certainty is the warning sign, not the reassurance, and the lesson makes this the core rule for evaluating claims about AI and art, {name}. On a topic this new, where the law is still being written and the technology is still changing month by month, real expertise almost always sounds a little uncertain. The genuine experts know how much is still unsettled: the lawsuits are still in court, the Copyright Office rulings are still being appealed, the tools themselves are still changing. A source that is completely confident about what this means, certain in both directions, whether "AI will instantly replace all artists" or "AI art is 100% theft, no nuance, period," is the source to check hardest. Both of those claims deal in absolutes where the actual situation is complicated and still unfolding. The practical filter the lesson gives you captures it: when you see a strong claim, ask whether it admits complexity or is suspiciously tidy. Suspiciously tidy is the tell. The map of a genuine expert is uncertainty in the right places. Certainty on a genuinely unsettled question is the warning sign.`,
            },
            {
              word: `think so far`,
              definition: `"Here is what I think so far and here is what would change my mind" is the model position the lesson holds up as the most respectable stance on AI and art, given how new and unsettled the question is. It can feel like you are supposed to already have a strong opinion, for it or against it, and that not having one means you are behind. The lesson says the opposite is true. On a question where the law is still being written and the technology is still changing, holding the question open carefully, with a stated current view and real conditions for changing it, is more honest and more intellectually strong than grabbing a tidy slogan. You are not behind for holding the question open; you are ahead for holding it carefully.`,
              audioPrompt: `Here is what I think so far, and here is what would change my mind. That is the model position the lesson holds up as the most respectable stance on AI and art, {name}. It can feel like you are supposed to already have a strong opinion, for or against, and that not having one means you are behind. The lesson turns that around. On a question this new, where the law is still being written and the technology is still changing, the most respectable position is not a confident declaration. It is a thoughtful, evidence-based "here is what I think so far" paired with honest conditions: "here is what would change my mind." That structure is the opposite of grabbing a tidy slogan. It shows you have thought carefully about the evidence, that you know what you know and know what you do not know, and that you are not going to be unmoved by new information. Real expertise on this topic sounds like uncertainty in the right places. A person who can say "I think the training step raises real fairness questions, and what would change my mind is a consent framework that compensates artists whose work trained the model" is further along than a person who has memorized a side. You are not behind for holding the question open. You are ahead for holding it carefully.`,
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
              question: `A friend says an AI image tool "just copy-pastes bits of other people's pictures together." Based on the lesson, what actually happens?`,
              options: [
                `It learns patterns from huge numbers of images and builds a new one from those patterns.`,
                `It searches the internet live and stitches together the closest matching photos.`,
                `It keeps a giant folder of pictures and pastes pieces of them into a collage.`,
                `It asks human artists to quickly draw each image whenever you type a prompt.`,
              ],
              correctIndex: 0,
              explanation: `Generative image tools learn statistical patterns from huge numbers of images and build new ones from those patterns — they don't copy-paste, search live, or store a collage folder. Getting this right separates a thoughtful view from a misinformed hot take, and it matters for the fairness debate too: the issue is what the tool learned from, not literal copying.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `The lesson says the central fairness fight over AI image tools begins at a specific point. Where, and why there?`,
              options: [
                `At the output stage — because AI images sometimes end up looking better than the human ones.`,
                `At the price — because the tools are too cheap for artists to compete with.`,
                `At training — artists' work was used without consent, pay, or credit while makers profit.`,
                `At the prompt — because typing words is too easy to count as real effort.`,
              ],
              correctIndex: 2,
              explanation: `The fight starts at training: real artists' work was used to build the tools without consent, payment, or credit, while the companies profit. That concrete fact — not just how the images look — is what the actual lawsuits turn on. The distractors locate the dispute in output quality, price, or prompt-effort, which miss the real grievance.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `When an AI makes an image, "who is the artist?" The lesson says this echoes Lesson 5's question about where making lives. Which best captures its stance?`,
              options: [
                `There's one obvious answer: the prompter is always the sole artist.`,
                `Several answers compete: the prompter, no human, the training artists, or "wrong question."`,
                `The AI company itself is always the real artist, simply because it happens to own the tool.`,
                `It's a settled legal fact that nobody can ever be called the artist.`,
              ],
              correctIndex: 1,
              explanation: `Four defensible answers disagree: the prompter, nobody-human, the uncredited training artists, or "artist is the wrong question." It's the Lesson 5 question of where making lives, in a new form — genuinely unsettled, not a single obvious answer. The distractors each force a false certainty onto an open question.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `You type a prompt and an AI spits out an image with no further editing. What has the U.S. Copyright Office decided about owning it, and why does that matter?`,
              options: [
                `You own it fully — typing the prompt counts as complete authorship.`,
                `The AI company alone owns it, which means you can never use the image you made at all.`,
                `Nobody can ever own any AI-assisted image under any circumstances.`,
                `A purely prompt-made image can't be copyrighted, since copyright needs human authorship.`,
              ],
              correctIndex: 3,
              explanation: `Purely prompt-made images can't be copyrighted because copyright requires human authorship; meaningful human editing may change that, decided case by case. It matters because you can't protect — or license, or stop others from using — what you can't own. The distractors overclaim ownership, hand it to the company, or wrongly make all AI-assisted work unownable.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `The lesson names two flavors of "hype" about AI art — sell-side and panic. What do they share that makes both unreliable?`,
              options: [
                `Both are certain, simple, and emotional, where the truth is uncertain and complicated.`,
                `Both of them come only from the companies that are trying to sell you something.`,
                `Both are always completely false with no grain of truth at all.`,
                `Both appear only in social media comments, never in real articles.`,
              ],
              correctIndex: 0,
              explanation: `Sell-side hype oversells ("anyone, instantly, no talent needed"); panic hype flattens ("art is over"). What they share is the tell of being certain, simple, and emotional about a topic that is actually uncertain and complicated — so confident certainty is the warning sign. The distractors mislocate the tell in the source's identity, in total falsehood, or in where it's posted.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Someone shows you a loud, tidy, very confident claim about AI and art. What does the lesson's three-question filter tell you to do?`,
              options: [
                `Trust it more, since confident and well-organized claims are usually right.`,
                `Ask who benefits, what evidence backs it, and whether it admits complexity.`,
                `Reject it automatically, since anything confident must be propaganda.`,
                `Share it quickly before checking anything, as long as the claim basically sounds reasonable.`,
              ],
              correctIndex: 1,
              explanation: `The filter: ask who benefits, what specific evidence backs the claim, and whether it admits complexity. On an unsettled topic, loud and tidy certainty is a flag to check harder, not a sign of reliability. The distractors reward confidence, reject reflexively, or skip checking entirely — all failures of source evaluation.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Beneath "is it real art?" the lesson says there are sharper fairness questions. Which set actually captures them?`,
              options: [
                `Whether the images are pretty, whether they're popular, and whether they sell.`,
                `Whether AI is conscious, whether it has feelings, and whether it can suffer.`,
                `Consent, money and work (often hurting the least powerful), and your own choices.`,
                `Whether the tool happens to be free, whether it is fast, and whether it is easy to use.`,
              ],
              correctIndex: 2,
              explanation: `The real questions underneath are consent (legal is not the same as fair), money and work (reshaped rather than cleanly destroyed, often hurting the least powerful), and your own choices (a deliberate decision versus a drifted-into habit). The distractors swap these for surface traits (looks, popularity, speed) or a sci-fi tangent about AI consciousness.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `People compare AI tools to past tech like photography in the 1800s. Why is that comparison both useful and limited?`,
              options: [
                `Useful because cameras and AI are identical; limited only because AI is newer.`,
                `Useful because it proves art always gets worse; limited because this time it won't.`,
                `It is neither useful nor limited, since past technology has nothing at all to teach us about AI.`,
                `Useful: art adapts and survives new tools; limited: a camera doesn't train on an artist's own work.`,
              ],
              correctIndex: 3,
              explanation: `Useful: history shows art adapts and survives new tools, so "art is over" is unlikely. Limited: a camera doesn't train on a specific living artist's own work to reproduce their style — which is the genuinely new fairness issue. Holding both is the point. The distractors collapse the comparison into sameness, into decline, or into uselessness.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because an AI tool company's marketing page is trying to sell you something, nothing on it can be true and you should ignore it entirely.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False, and the reasoning matters. A source having a motive to persuade doesn't make everything it says false; it makes the source a witness with an obvious interest, to be read carefully rather than ignored. A marketing page overstates with absolutes ("anyone," "instantly," "no talent needed," "the age of struggling is over forever") — reject that inflated frame — but buried inside the hype is usually a grain of real truth, here that the tools genuinely do let people who can't draw produce striking images quickly. The skill source evaluation teaches is not "trust everything" or "trust nothing" but extracting the checkable, true part while rejecting the spin. The same applies in reverse to the panic post: unreliable as a guide, yet the harm it points at — work used without consent — is genuine. Good evaluation weighs how much to trust which part of each source, rather than throwing whole sources away because of who made them. "Trust is not all-or-nothing" is the core of the whole skill.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 14 and enter a school art contest. You generated your image with an AI tool, then spent two hours editing it by hand. A classmate who drew everything from scratch finds out, says you cheated, and wants you disqualified. The teacher asks you to explain what you did and whether it was fair. Drawing on this lesson, what's the most honest and thoughtful thing to say and do?`,
              options: [
                `Deny using AI at all and hope the teacher can't tell the difference.`,
                `Insist that since you edited it, it's 100% your original art and the classmate is just jealous.`,
                `Tell the exact truth about what you did, acknowledge the classmate's fairness point is real, separate "is it art?" from "was this entry fair?", and recognize the real mistake was not disclosing the AI use.`,
                `Argue that AI does everything now so drawing from scratch is pointless anyway.`,
              ],
              correctIndex: 2,
              explanation: `Applied AI-art ethics in a real situation. The strong move: tell the exact truth about what you did, recognize the classmate's fairness point as real, separate "is it art?" from "was this entry fair?", and see that the actual mistake was non-disclosure, not tool use. Transparency — using AI openly and crediting it honestly — is the lesson's core practical answer and what makes a person trustworthy with these tools. The distractors are the failure modes: lying, contemptuous deflection, and a cynical dodge.`,
            },
          ]
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
