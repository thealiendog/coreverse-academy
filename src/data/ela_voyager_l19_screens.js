// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L19 — Media Analysis
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Analyzing Media, Visual & Multimodal Texts
// Interaction: SOURCE EVALUATION. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l19-v1";

const ELA_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-19`,
      title: `Media Analysis`,
      duration: 35,
      xpReward: 75,
      badge: `media-decoder`,
      badgeName: `Media Decoder`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, rhetoric shapes democracy — the quality of public deliberation determines the quality of collective decisions. This lesson connects everything in the band to civic life: how to read political speech critically, how to evaluate debate, how to be a rhetorically literate citizen rather than an easy target for manipulation.`,
          headline: `Media Analysis`,
          subtitle: `Reading the messages and persuasion in images, video, and ads. A Source Evaluation.`,
          visual: `/voyager-assets/ela/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `An Ocean Of Messages`,
          paragraphs: [
            `You've learned to read words deeply. But every day you swim in an ocean of messages that aren't only words: images, video, ads, thumbnails, music, logos, design. Estimates put the number of media messages the average person encounters daily in the thousands. They wash over us so constantly that we mostly stop noticing them, which is exactly the problem.`,
            `Almost none of these messages are neutral. Someone made each one, on purpose, with a goal: to make you feel something, believe something, want something, or do something. The cheerful music in a store, the color of a button, the camera angle on a face, none of it is accidental. Behind every media message is a maker and an intention you usually never see.`,
            `Media literacy is the skill of reading these messages as carefully as you read a text: seeing the choices behind them, the techniques they use, and the purposes they serve. The goal isn't to become paranoid and distrust everything. It's to be the one in control, decoding the messages on purpose, instead of letting them quietly steer your feelings, beliefs, and desires without your notice.`,
          ],
          image: `/voyager-assets/ela/l19-s1-ocean.webp`,
          imageCaption: `You've learned to read words deeply, but every day you swim in an ocean of messages that aren't only words: images, video, ads, thumbnails, music, logos, design. The average person encounters thousands of media messages daily, washing over us so constantly we stop noticing, which is exactly the problem. Almost none are NEUTRAL: someone made each one, on purpose, to make you FEEL, BELIEVE, WANT, or DO something. The music in a store, the color of a button, the angle on a face, none of it is accidental; behind every message is a maker and an intention you never see. MEDIA LITERACY is reading these messages as carefully as a text, seeing the choices, techniques, and purposes. The goal isn't paranoia but control: decoding messages instead of letting them quietly steer you.`,
          vocab: [
            { word: `media literacy`,
              definition: `The skill of reading media messages, images, video, ads, as carefully as text, seeing the choices, techniques, and purposes behind them.`,
              audioPrompt: `Media literacy, {name}, is the skill of reading media messages, images, video, ads, music, design, as carefully as you read words. It means seeing the choices, techniques, and purposes behind everything that's made to reach you.` },
            { word: `media message`,
              definition: `Any created communication, an image, video, ad, or design, made on purpose to make you feel, believe, want, or do something.`,
              audioPrompt: `A media message, {name}, is any created communication, an image, ad, video, or design, made on purpose to affect you. You see thousands a day, and almost none of them are neutral or accidental.` },
            { word: `intention`,
              definition: `The maker's hidden goal behind a media message. There's always a maker and a purpose you usually never see directly.`,
              audioPrompt: `Intention, {name}, is the maker's hidden goal behind a media message, to make you feel, believe, want, or do something. There's always a maker and a purpose behind every message, even when you never see them.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `All Media Is Constructed`,
          paragraphs: [
            `Here's the foundational idea of media analysis: all media is constructed. Nothing you see is raw reality, it's the result of countless human choices. A photograph feels like a window onto the world, but it's actually a single frame, chosen from thousands, cropped to a particular edge, lit a certain way, taken at one chosen instant. Reality was edited into that image.`,
            `Every medium has its own construction choices. In a photo or video: framing (what's in and out), angle (a low angle makes a subject look powerful, a high one weak), lighting, and what happens just outside the frame. In design: color, font, layout, and size all send signals before you read a word. None of these are neutral; each is a decision aimed at an effect.`,
            `So the key questions for any media message are: Who made this, and why? What techniques did they use to grab and hold me? What lifestyle or values does it suggest are normal or desirable? And crucially, what's left out, who or what isn't shown? Asking these turns you from a passive receiver into an active reader who sees the construction, not just the surface.`,
          ],
          image: `/voyager-assets/ela/l19-s2-constructed.webp`,
          imageCaption: `The foundational idea of media analysis: ALL MEDIA IS CONSTRUCTED. Nothing you see is raw reality; it's the result of countless human choices. A photo feels like a window onto the world, but it's a single frame chosen from thousands, cropped, lit, and timed by a person, reality EDITED into an image. Every medium has construction choices: in photo or video, FRAMING (what's in and out), ANGLE (low makes a subject look powerful, high makes them weak), LIGHTING, and what's just outside the frame; in design, COLOR, FONT, LAYOUT, and SIZE signal before you read a word. None are neutral. The key questions for any message: Who made this and why? What techniques grab me? What values does it suggest are normal? And what's LEFT OUT, who isn't shown?`,
          vocab: [
            { word: `constructed`,
              definition: `Built from human choices rather than being raw reality. The foundational idea: every media message is constructed, not neutral.`,
              audioPrompt: `Constructed, {name}, means built from human choices rather than being raw reality. The foundational idea of media analysis is that all media is constructed: every image and message is the result of countless decisions, not a neutral window.` },
            { word: `framing`,
              definition: `What a maker chooses to include and exclude in an image or story. What's outside the frame can matter as much as what's in it.`,
              audioPrompt: `Framing, {name}, is what a maker chooses to put inside an image or story, and what to leave out. What's outside the frame can matter as much as what's in it, which is why "what's left out?" is a key question.` },
            { word: `camera angle`,
              definition: `The viewpoint a shot is taken from. A low angle makes a subject look powerful; a high angle makes them look small or weak.`,
              audioPrompt: `Camera angle, {name}, is the viewpoint a shot is taken from, and it shapes how you feel about a subject. A low angle looking up makes someone look powerful; a high angle looking down makes them look small or weak.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Advertising: Persuasion Engineered`,
          paragraphs: [
            `Advertising is media analysis on hard mode, because an ad's entire purpose is to persuade, and it's engineered down to the smallest detail. Ads rarely sell a product on its features alone. Instead they sell a feeling or an identity: buy this, and you'll be happy, cool, loved, successful, free. The product gets linked to a desire that has nothing to do with the product itself.`,
            `Ads lean on familiar techniques. The bandwagon ("everyone's using it") plays on the fear of being left out. The celebrity or "expert" endorsement borrows someone's authority or glamour. Emotional appeals tie a product to love, fear, status, or belonging. And aspirational imagery shows beautiful people living an enviable life the product supposedly unlocks.`,
            `The sharpest media reader asks of any ad: what feeling are they selling, and what are they hoping I won't think about? Often the answer is the product's actual cost, limits, or whether you need it at all. Ads work best on autopilot; the moment you name the technique and the desire being targeted, the spell weakens, and you, not the ad, decide what you want.`,
          ],
          image: `/voyager-assets/ela/l19-s3-ads.webp`,
          imageCaption: `Advertising is media analysis on hard mode: an ad's entire purpose is to persuade, engineered to the smallest detail. Ads rarely sell a product on features, they sell a FEELING or IDENTITY: buy this and you'll be happy, cool, loved, successful, free, linking the product to a desire that has nothing to do with it. Familiar techniques: BANDWAGON ("everyone's using it") plays on fear of missing out; CELEBRITY or "expert" ENDORSEMENT borrows authority or glamour; EMOTIONAL APPEALS tie products to love, fear, or belonging; ASPIRATIONAL IMAGERY shows beautiful people living an enviable life. The sharpest reader asks: what feeling are they selling, and what do they hope I WON'T think about, the cost, the limits, whether I need it? Name the technique, and the spell weakens.`,
          vocab: [
            { word: `selling a feeling`,
              definition: `Advertising's core move: linking a product to a desire or identity (happiness, status, belonging) rather than selling its actual features.`,
              audioPrompt: `Selling a feeling, {name}, is advertising's core move: instead of selling a product's features, an ad links it to a desire, happiness, coolness, love, success, so you buy the feeling, not the thing itself.` },
            { word: `bandwagon`,
              definition: `An ad technique that says "everyone's using it," playing on the fear of being left out to make you want something.`,
              audioPrompt: `Bandwagon, {name}, is the ad technique that says everyone's doing it or everyone has it, playing on your fear of being left out. It pressures you to want something just because it seems like everyone else does.` },
            { word: `aspirational imagery`,
              definition: `Images of beautiful people living an enviable life that a product supposedly unlocks, tying the product to who you wish you were.`,
              audioPrompt: `Aspirational imagery, {name}, shows beautiful people living an enviable life the product supposedly unlocks. It ties the product to who you wish you could be, selling an identity rather than an honest description of the thing.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `News, Framing, And What's Left Out`,
          paragraphs: [
            `Even media meant to inform makes choices that shape how you see the world. The news can't show everything, so it selects, and selection is power. Which stories get covered, and which are ignored? What gets the big headline versus a tiny mention? These choices decide what feels important, often more than the events themselves do.`,
            `Framing is how a story is presented, and it shifts meaning without stating a single falsehood. The same protest can be framed as a "riot" or a "demonstration"; the same policy as a "crackdown" or a "reform." Word choice, which voices are quoted, which image runs on top, all frame the event, nudging you toward a feeling and a judgment you may not realize you're being handed.`,
            `So the most important media question is often: what's left out? Whose voice isn't quoted? What context is missing? What story didn't get told at all? A media reader doesn't just analyze what's in front of them; they notice the silences and absences, because what a message leaves out can shape your view as powerfully as what it includes.`,
          ],
          image: `/voyager-assets/ela/l19-s4-news.webp`,
          imageCaption: `Even media meant to inform makes choices that shape how you see the world. The news can't show everything, so it SELECTS, and selection is power: which stories get covered or ignored, which get the big headline versus a tiny mention, decides what feels important. FRAMING is how a story is presented, shifting meaning without a single falsehood: the same protest framed as a "riot" or a "demonstration." Word choice, which voices are quoted, which image runs on top, all frame the event and hand you a feeling. So the key question is often: WHAT'S LEFT OUT? Whose voice isn't quoted, what context is missing, what story wasn't told? Notice the silences, they shape your view too.`,
          vocab: [
            { word: `selection`,
              definition: `The choice of which stories to cover and emphasize. Because the news can't show everything, what it selects shapes what feels important.`,
              audioPrompt: `Selection, {name}, is the choice of which stories get covered and which get ignored. Because no outlet can show everything, selection itself is a powerful, often invisible kind of influence over what feels important.` },
            { word: `framing`,
              definition: `How a story is presented, through word choice, images, and quoted voices, which shifts its meaning without stating any falsehood.`,
              audioPrompt: `Framing, {name}, is how a story is presented: the words chosen, the images on top, which voices get quoted. The same event framed two ways, a "riot" versus a "demonstration," can leave you with completely different feelings.` },
            { word: `what's left out`,
              definition: `The silences and absences in a message, missing voices, missing context, untold stories, which can shape your view as much as what's shown.`,
              audioPrompt: `What's left out, {name}, is the silences in a message: whose voice isn't quoted, what context is missing, what story wasn't told. A good media reader notices the absences, because they shape your view as powerfully as what's shown.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together. You live in an ocean of media messages, thousands a day, and almost none are neutral: each has a maker and an intention to make you feel, believe, want, or do something. Media literacy is reading those messages as carefully as text, so you control them rather than letting them quietly steer you.`,
            `The foundational truth is that all media is constructed, built from choices like framing, angle, lighting, color, and word choice, never raw reality. Advertising weaponizes this to sell a feeling or identity through bandwagon, endorsement, emotional appeals, and aspirational imagery. Even news shapes your view through selection, framing, and, above all, what's left out.`,
            `Now the source-evaluation screen gives you five real media messages: an ad, two framings of the same news event, a constructed image, and a piece of "native" content that blurs the line between information and persuasion. Evaluate each like a media decoder: who made it and why, what techniques it uses, what feeling or judgment it's handing you, and what's been left out. Onward.`,
          ],
          image: `/voyager-assets/ela/l19-s5-before.webp`,
          imageCaption: `Threads together. You live in an ocean of media messages, thousands a day, almost none neutral: each has a maker and an INTENTION. MEDIA LITERACY is reading them as carefully as text, so you control them rather than being steered. The foundational truth: ALL MEDIA IS CONSTRUCTED, built from choices, framing, angle, lighting, color, word choice, never raw reality. ADVERTISING weaponizes this to sell a feeling or identity through bandwagon, endorsement, emotional appeals, and aspirational imagery. Even NEWS shapes your view through selection, framing, and what's LEFT OUT. The source-evaluation screen gives five real media messages. Decode each: who made it and why, what techniques, what feeling it hands you, and what's missing.`,
          vocab: [
            { word: `persuasion`,
              definition: `The line between media that aims to inform and media that aims to persuade, often deliberately blurred, as in ads disguised as content.`,
              audioPrompt: `Persuasion versus information, {name}, is the line between media meant to inform you and media meant to persuade you. That line is often blurred on purpose, like ads dressed up to look like neutral articles.` },
            { word: `native advertising`,
              definition: `Paid promotion designed to look like ordinary content or news, blurring the line between information and selling.`,
              audioPrompt: `Native advertising, {name}, is paid promotion designed to look like an ordinary article rather than an obvious ad. It blurs the line between information and selling, which is exactly why it can fool people.` },
            { word: `media decoder`,
              definition: `A reader who actively decodes media, naming the maker, techniques, intended feeling, and what's left out, instead of receiving it passively.`,
              audioPrompt: `A media decoder, {name}, is someone who actively reads media, naming who made it, what techniques it uses, what feeling it's selling, and what's left out, instead of just letting the message wash over them.` },
          ],
        },

        {
          id: `l19-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Messages To Decode`,
          intro: `{name}, here are five real media messages of different kinds. For each, be the media decoder: ask who made it and why, what techniques it uses, what feeling or judgment it's handing you, and, crucially, what's been left out.`,
          sources: [
            {
              id: `s1`,
              tier: `Persuasion`,
              title: `A soda ad: sunshine, friends, and laughter`,
              type: `Advertising`,
              context: `A glossy ad shows beautiful young people laughing on a sunny beach, sharing a soda. The soda itself appears for only a moment. The vibe is freedom, friendship, and pure joy.`,
              quote: `"Taste the feeling."`,
              questions: [
                `What is this ad actually selling, beyond the soda?`,
                `Which techniques (aspirational imagery, emotional appeal) are at work?`,
                `What are they hoping you won't think about?`,
              ],
              evaluation: `Beyond the soda, this ad is selling a feeling and an identity, freedom, friendship, joyful belonging, exactly the "selling a feeling" move at advertising's core. The soda barely appears because the product's actual features (it's a sugary drink) aren't the point; the point is to link the brand to a desirable life. The techniques are textbook: aspirational imagery (beautiful people living an enviable life the product supposedly unlocks) and emotional appeal (tying the drink to happiness and connection). The slogan "Taste the feeling" says it outright, you're invited to consume an emotion, not evaluate a beverage. What they're hoping you won't think about is everything real: the sugar and health effects, the cost, and the simple fact that a drink can't actually deliver friendship or freedom. The decoder's move is to name it: "This is aspirational imagery selling belonging, and the product is incidental." The moment you see the technique, the spell weakens and you, not the ad, decide whether you want it.`,
            },
            {
              id: `s2`,
              tier: `Framing A`,
              title: `Headline A: the same event as "chaos"`,
              type: `News framing`,
              context: `One outlet covers a large street gathering with the headline "City Streets Descend Into Chaos," a photo of a small fire, and quotes only from frustrated shop owners.`,
              quote: `"City Streets Descend Into Chaos"`,
              questions: [
                `How do the word choice, photo, and quoted voices frame the event?`,
                `What feeling and judgment is this framing handing you?`,
                `What might be left out of this version?`,
              ],
              evaluation: `Every choice here frames the event as dangerous disorder, without necessarily stating a single false fact. The word "chaos" (versus "protest" or "gathering") signals threat; the photo of a small fire, chosen over countless calmer images, makes destruction feel central; and quoting only frustrated shop owners narrows the voices to one angry perspective. Together they hand you a clear feeling, alarm, and a judgment: this was a destructive mob. What's likely left out is enormous: why people gathered, the probably large majority who were peaceful, the voices of participants or neutral observers, and the wider context. This is framing at work, the same raw event could be presented completely differently. A media decoder doesn't ask only "is this true?" (each detail might be) but "what feeling is this constructed to produce, and whose perspective and context are missing?" Recognizing the frame is what lets you see the event rather than just absorb someone's pre-packaged judgment of it.`,
            },
            {
              id: `s3`,
              tier: `Framing B`,
              title: `Headline B: the same event as "a movement"`,
              type: `News framing`,
              context: `Another outlet covers the very same gathering: "Thousands Gather Peacefully to Demand Change," a photo of a vast, calm crowd holding signs, with quotes only from inspired participants.`,
              quote: `"Thousands Gather Peacefully to Demand Change"`,
              questions: [
                `How does this framing differ from Headline A of the same event?`,
                `Is this version automatically more "true," or also a frame?`,
                `What does comparing the two teach about all news?`,
              ],
              evaluation: `This framing presents the identical event as inspiring and legitimate. "Gather peacefully to demand change" (versus "descend into chaos") signals purpose and dignity; the photo of a vast, calm crowd, chosen instead of the small fire, makes peacefulness feel central; and quoting only inspired participants narrows the voices to one sympathetic perspective. Crucially, this version is not automatically more "true" than Headline A, it's also a frame, making its own selective choices, just toward a different feeling and judgment. It may leave out real disruption or opposing views, exactly as A left out the peaceful majority. The deepest lesson comes from comparing the two: the same raw event, framed two ways, produces opposite impressions, and neither is the unfiltered truth. This is why a media decoder seeks multiple sources and asks what each one's word choice, images, and quoted voices are doing. The reality lies somewhere the single frames don't fully capture, and recognizing that is the whole skill.`,
            },
            {
              id: `s4`,
              tier: `Constructed`,
              title: `A "candid" social media photo`,
              type: `Constructed image`,
              context: `An influencer posts a "totally candid, woke up like this" photo at a stunning location, captioned as effortless and spontaneous, that was in fact one of two hundred shots, posed, edited, and filtered.`,
              quote: `"Just a random morning, nothing special!"`,
              questions: [
                `Why is calling this photo "candid" misleading?`,
                `What construction choices are hidden behind it?`,
                `What effect can this have on someone who believes it's real?`,
              ],
              evaluation: `Calling it "candid" is misleading because the image is heavily constructed while pretending not to be, which is its central deception. Behind the "effortless" result are hidden choices: it was one of two hundred shots (selection), carefully posed, shot at a flattering angle and lighting, then edited and filtered. The caption "nothing special" actively denies all that work, presenting a manufactured image as raw reality. This connects straight to the foundational idea: all media is constructed, and here the construction is disguised. The effect on someone who believes it's real can be genuinely harmful: comparing their actual unfiltered life to someone else's edited highlight reel, they may feel inadequate or behind, measuring reality against a fiction. A media decoder defuses this by remembering that what looks candid is usually crafted, that they're seeing chosen, edited frames, not anyone's true ordinary life. Naming the construction, "this is posed and filtered, not candid", protects you from a comparison that was never fair to begin with.`,
            },
            {
              id: `s5`,
              tier: `Blurred`,
              title: `An article that's secretly an ad`,
              type: `Native advertising`,
              context: `A piece styled exactly like a normal news article, "5 Science-Backed Ways to Sleep Better," reads like helpful information but repeatedly steers toward one brand's mattress, with a tiny "Sponsored" label up top.`,
              quote: `"Experts agree the right mattress changes everything (like this one)."`,
              questions: [
                `What makes native advertising especially tricky?`,
                `Why does the "news article" styling matter so much?`,
                `How would a media decoder handle it?`,
              ],
              evaluation: `Native advertising is especially tricky because it deliberately blurs the line between information and persuasion: it's an ad wearing the costume of a helpful, neutral article. The "news article" styling matters enormously because it borrows the trust we extend to journalism, we drop our guard for what looks like information in a way we wouldn't for an obvious ad, so the selling slips past our defenses. The content may even contain some true tips, which makes it more convincing, but it's engineered to steer you toward one paying brand, and the giveaways are there: the tiny "Sponsored" label (easy to miss, legally required for a reason), the vague "experts agree," and the repeated nudging toward a single product. A media decoder handles it by first spotting that it's persuasion, not information, reading the "Sponsored" label, noticing the one-brand steering, and asking the core question: who made this and why? Once you see it's a paid pitch, you can still take any genuinely useful tip, but you weigh the mattress recommendation as advertising, not advice. The skill is refusing to let the costume of "information" disguise the intention to sell.`,
            },
          ],
          synthesisPrompt: `After all five: how will you "read" the media flooding your day, ads, news, social posts, differently now? Which message here was most cleverly constructed, and what's the single most useful question to ask any media you encounter? In 5-6 sentences.`,
          reflectionPrompt: `Headlines A and B framed the exact same event into opposite impressions, and neither was the raw truth. When have you seen the same event or story told in ways that made you feel completely differently? What did that teach you about trusting a single source?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "media literacy," according to the lesson?`,
              options: [
                `The ability to use the latest social media apps and devices.`,
                `Reading media messages as carefully as text, seeing their choices, techniques, and purposes.`,
                `Knowing how to create and edit professional-looking videos, photos, and other digital content.`,
                `Believing that all media is evil and should be avoided entirely.`,
              ],
              correctIndex: 1,
              explanation: `Media literacy is the skill of reading media messages, images, video, ads, as carefully as you read text, seeing the choices, techniques, and purposes behind them. The distractors confuse it with tech skills, content creation, or blanket distrust.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the foundational idea of media analysis?`,
              options: [
                `All media is constructed from human choices, never raw reality.`,
                `All media is completely truthful and can be trusted at face value.`,
                `Only advertisements are constructed; news and photos are neutral.`,
                `Media is too complex for ordinary people to ever understand.`,
              ],
              correctIndex: 0,
              explanation: `The foundational idea is that all media is constructed, built from countless human choices (framing, angle, lighting, word choice), never raw reality. The distractors treat media as neutral truth, exempt news and photos, or call it incomprehensible.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `How does a low camera angle (looking up at a subject) tend to make that subject appear?`,
              options: [
                `Small, weak, or unimportant.`,
                `Exactly the same as any other angle would.`,
                `Powerful, dominant, or important.`,
                `Blurry and difficult to see clearly.`,
              ],
              correctIndex: 2,
              explanation: `A low angle looking up makes a subject look powerful or important, while a high angle looking down makes them look small or weak, a construction choice that shapes how you feel. The distractors reverse the effect, deny it, or confuse it with focus.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `According to the lesson, what does advertising mainly sell?`,
              options: [
                `A detailed, honest list of a product's features and flaws.`,
                `A feeling or identity, like happiness, status, or belonging, linked to the product.`,
                `Only the lowest possible price of the product compared with all of its direct competitors.`,
                `Purely factual scientific information about the product.`,
              ],
              correctIndex: 1,
              explanation: `Advertising rarely sells features; it sells a feeling or identity (happiness, coolness, love, success, belonging) linked to the product, so you buy the feeling, not the thing. The distractors describe honest disclosure, price, or pure facts, which ads usually avoid.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the "bandwagon" advertising technique?`,
              options: [
                `Showing a famous celebrity using the product.`,
                `Listing the product's technical specifications in detail.`,
                `Offering a discount if you buy within a time limit.`,
                `Suggesting "everyone's using it," playing on the fear of being left out.`,
              ],
              correctIndex: 3,
              explanation: `Bandwagon says "everyone's using it" and plays on the fear of being left out to make you want something. The distractors describe celebrity endorsement, a spec list, and a time-limited discount, which are different tactics.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "framing" in news media?`,
              options: [
                `How a story is presented, through word choice, images, and quoted voices, shifting meaning without stating a falsehood.`,
                `The decorative wooden or metal border that is physically placed around a printed photograph on a wall.`,
                `The rule that all news stories must be exactly the same length.`,
                `Making up completely false events that never actually happened.`,
              ],
              correctIndex: 0,
              explanation: `Framing is how a story is presented, word choice, which image runs, which voices are quoted, which shifts meaning without stating any falsehood (a "riot" vs. a "demonstration"). The distractors confuse it with a physical frame, a length rule, or outright fabrication.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `The lesson says one media question is often the most important. Which?`,
              options: [
                `How many likes or shares the message received.`,
                `What's left out, whose voice, what context, what story isn't shown?`,
                `How recently the message was posted online.`,
                `How long the entire article or video happens to be from beginning to end in total.`,
              ],
              correctIndex: 1,
              explanation: `The most important question is often what's left out, the missing voices, context, and untold stories, because absences can shape your view as powerfully as what's included. The distractors rely on popularity, recency, or length, none of which reveal what's missing.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What makes "native advertising" (an ad styled like a normal article) especially tricky?`,
              options: [
                `It is always completely false from start to finish.`,
                `It is always far too short for anyone to ever actually sit down and read the whole thing.`,
                `It borrows the trust we give to information, slipping the selling past our guard.`,
                `It can only ever appear on television, never online.`,
              ],
              correctIndex: 2,
              explanation: `Native advertising is tricky because it wears the costume of a neutral, helpful article, borrowing the trust we extend to information so the persuasion slips past our defenses. The distractors call it always false, too short, or TV-only, none of which is the real issue.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A photograph is a neutral, objective window onto reality, so unlike an ad or an opinion piece, a real photo simply shows you the truth as it is.`,
              correctAnswer: false,
              explanation: `False, and overturning this assumption is at the very heart of media analysis. A photograph feels like a neutral window onto reality, which is exactly what makes it so persuasive, but it is actually one of the most constructed things there is. The foundational idea of this whole lesson is that all media is constructed, built from countless human choices, and a photo is no exception. Consider everything a person decided before you ever saw it: it's a single frame chosen from possibly hundreds of shots (selection); it's cropped to a particular edge, so what's just outside the frame, which might completely change the story, is invisible to you (framing); it's taken from a chosen angle (a low angle makes a subject look powerful, a high one makes them look weak); it's lit a certain way and captured at one specific instant out of many. Reality was edited into that image by a human being making decisions, often to produce a particular feeling or impression. The "candid" influencer photo is a vivid example: it looks spontaneous but was posed, selected from two hundred shots, and filtered. Even a news photo is a choice, an outlet that ran a picture of a small fire framed an event as "chaos," while one that ran a vast calm crowd framed the same event as a peaceful movement. Neither photo lied, exactly, yet they handed viewers opposite impressions. So a photo is never raw, neutral truth; it's a constructed message with a maker and, usually, an intention. A media decoder treats images with the same active reading as words, asking who made this, from what angle, with what cropped out, and to make me feel what?`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You see two headlines about the same protest: one calls it "chaos" with a photo of a fire and angry shop-owner quotes; the other calls it a "peaceful movement" with a photo of a huge calm crowd and inspired participant quotes. Using the lesson, what's the wisest conclusion?`,
              options: [
                `The "chaos" one is true because fire is scary, so the other is fake news.`,
                `The "peaceful movement" one is true because it sounds nicer and kinder.`,
                `Both are frames of the same event, each making selective choices of words, images, and voices, so neither is the raw truth; the wise move is to recognize the framing and seek multiple sources and what each leaves out.`,
                `Photos never lie, so whichever headline has a photo must be the correct one.`,
              ],
              correctIndex: 2,
              explanation: `This applies the lesson's core insight about framing. The identical event, presented with different words ("chaos" vs. "peaceful movement"), different chosen photos, and different quoted voices, produces opposite impressions, and neither single frame is the unfiltered truth; each leaves things out. The wise move is to recognize both as frames, seek multiple sources, and ask what each omits. The distractors pick a "winner" by emotion or niceness, or wrongly trust photos as neutral.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-constructed`, category: `Seeing the construction`, prompt: `All media is constructed from choices. Pick an image, ad, or video that affected you recently. Now look behind it: what choices, framing, angle, music, what's left out, were made to create that effect? Does seeing the construction change how it lands?` },
            { id: `reflect-ads`, category: `What's being sold`, prompt: `Ads sell a feeling, not a product. Think of an ad that made you want something. What feeling or identity was it really selling, and what were they hoping you wouldn't think about? Did naming it weaken the pull?` },
            { id: `reflect-candid`, category: `Highlight reels`, prompt: `The "candid" photo was posed and filtered, one of two hundred shots. When have you compared your real life to someone's edited online highlight reel? How does remembering that what looks candid is usually crafted change how you feel scrolling?` },
            { id: `reflect-heritage`, category: `The maker's eye`, prompt: `Caro, you're a maker of media now, building Coreverse's images, messages, and story. Knowing all media is constructed, what feelings and values do you want your media to honestly create for the families you serve? Where's the line between persuasion and manipulation?` },
            { id: `reflect-framing`, category: `Whose frame`, prompt: `The same event, framed two ways, gave opposite impressions. Think of a story you've seen covered very differently by different sources. How did each one's word choices and images shape it? What did seeking more than one source reveal?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this 'everything is constructed' talk just makes people cynical and paranoid, sometimes a photo is just a photo and an ad is just an ad." State that view as strongly as you can. Where does it have a real point, and where does the lesson show why decoding still matters?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Once you can decode media, you can never un-see it, and that's the point. These sharpen the eye. Two paths.`,
          familyActivity: {
            title: `Decode The Ads Together`,
            duration: `One sitting`,
            description: `Spend an evening becoming media decoders as a family, and watch how quickly everyone's eyes open. Pull up a handful of ads (commercials, magazine or online ads, sponsored posts) and decode each one together, out loud. For every ad, ask the core questions: Who made this, and why? What feeling or identity are they actually selling, beyond the product? Which techniques are at work, aspirational imagery, bandwagon, celebrity endorsement, emotional appeal? And what are they hoping you won't think about, the cost, the limits, whether you need it at all? Then push further: notice the construction, the lighting, the music, the camera angles, the beautiful people, and ask what's been left out. For a second round, try news: find the same story covered by two different outlets and compare the framing, headlines, word choices, which photo runs on top, whose voices get quoted, and what each version leaves out. Finish with a fun challenge: for one day, have each family member try to "catch" media messages in the wild, a store's music, a thumbnail designed to make them click, a "candid" post that's clearly staged, and report back. The goal isn't to become cynical or joyless; it's to flip everyone from passive receivers into active decoders, so the thousands of messages you all swim through every day become things you read and control, instead of things that quietly steer you.`,
          },
          projectOption: {
            title: `The Media Deconstruction (and Reconstruction), 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Truly understand media by taking it apart and then building it yourself. Week 1, deconstruct: choose one rich media message, a specific ad, a magazine cover, a movie poster, a viral video, or a piece of news coverage, and analyze it like an expert. Identify who made it and their purpose; name every construction choice you can see (framing, angle, lighting, color, music, word choice, who or what is shown); spot the persuasion techniques; explain what feeling or judgment it's engineered to produce; and, crucially, identify what's left out, the missing voices, context, or perspectives. Write it up as a full deconstruction. Week 2, reconstruct: now become the maker. Create your own small media message on a topic you choose, a mini-ad, a poster, a short video, or two contrasting "news" framings of the same imagined event, deliberately using the techniques you studied. Then write a short "maker's note" revealing your choices: what feeling you engineered, which techniques you used, and what you deliberately left out, and reflect on the line between honest persuasion and manipulation. Building media from the inside is the deepest way to learn to read it, because you'll feel exactly how every choice shapes the message. You'll come away able to decode the ocean of media around you, and to create within it thoughtfully and honestly.`,
            offerToParent: `Parent: opt your child into the Media Deconstruction and Reconstruction project. Deeply analyzing a media message's construction, techniques, intended effect, and omissions, then building one themselves and reflecting on the ethics of persuasion, develops the media-analysis strand of the standards and a form of critical thinking that's essential in a media-saturated world. The maker's-note reflection on the line between persuasion and manipulation builds real ethical awareness. It's creative, rigorous, CCSS-aligned work that turns your child into both a sharp decoder and a thoughtful, honest creator of media.`,
          },
          identityQuestion: `If you become someone who can decode the thousands of media messages you meet each day, seeing the maker, the techniques, the feeling being sold, and what's been left out, what kind of person does that make you, in a world engineered to steer your feelings and desires without your notice, that someone who just lets it all wash over them can never quite become?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who sees the choices behind every image and ad.`,
            `A decoder who asks what a message is selling and what it leaves out.`,
            `Someone who controls the messages instead of being steered by them.`,
          ],
          saveKey: `identity_responses_ela_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. Nineteen done, and you've learned to read the whole ocean of media you swim in every day, not just words. You learned that you encounter thousands of media messages daily and that almost none are neutral: each has a maker and an intention to make you feel, believe, want, or do something. You learned the foundational truth that all media is constructed, built from choices like framing, camera angle, lighting, color, and word choice, never raw reality, not even a photograph. You learned how advertising weaponizes this to sell a feeling or identity through aspirational imagery, bandwagon, endorsements, and emotional appeals, and the freeing question to ask: what feeling are they selling, and what do they hope I won't think about? And you learned that even the news shapes your view through selection, framing, and above all what's left out, so the same event can be framed into opposite impressions, neither of them the raw truth. You can now decode the messages instead of letting them steer you. Next is our final lesson, where everything comes together: building a lifelong reading life, the habit that will keep feeding your mind long after this course ends. Onward, {name}. — Quill`,
          badge: `media-decoder`,
          badgeName: `Media Decoder`,
          xpEarned: 75,
          competencies: [
            `Understands media literacy as actively reading non-text messages for choices, techniques, and purpose`,
            `Grasps the foundational idea that all media is constructed, including photographs`,
            `Analyzes construction choices: framing, camera angle, lighting, color, and word choice`,
            `Decodes advertising techniques: selling a feeling, bandwagon, endorsement, aspirational imagery`,
            `Recognizes how news shapes perception through selection, framing, and what is left out`,
            `Identifies native advertising and the blurred line between information and persuasion`,
            `Evaluates real media messages as a decoder, asking who made it, why, how, and what is missing`,
          ],
          nextLessonPreview: {
            title: `Lesson 20: Building a Lifelong Reading Life`,
            hook: `The final lesson: the habit that keeps feeding your mind for the rest of your life. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L19 ${VERSION}] "${l.title}" mags=${mags} sources=${src} q=${quiz}`);
}
