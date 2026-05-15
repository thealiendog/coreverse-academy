// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L19 — Creating a Portfolio
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L19 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-19`,
      title:     `Creating a Portfolio`,
      duration:  12,
      xpReward:  50,
      badge:     `portfolio-builder`,
      badgeName: `Portfolio Builder`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Here's something worth knowing about the creative world: almost every professional in it — artist, photographer, designer, architect, illustrator, filmmaker — is asked to show a portfolio at some point. Not a list of things they've made. A selection. A curated story about who they are as a creative and what they can do. Building a portfolio is a skill in its own right — separate from the skill of making the work. It requires honest self-evaluation, good judgment about what to include, and the courage to leave things out. Today we look at how to do it well. Everything you've made so far is material.`,
          headline: `Creating a Portfolio`,
          subtitle: `Every creative professional in the world uses a portfolio. It's the primary way creative people show who they are and what they can do. But a great portfolio isn't just a collection of work — it's a curated, intentional story about your creative identity. Learning to build one is a skill as important as the art itself`,
          visual: `/explorer-assets/creative-arts/l19-welcome.png`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Selection, Not Archive`,
          paragraphs: [
            `A portfolio is NOT everything you've ever made. It's a SELECTION.`,
            `That selection is itself a creative act. Which pieces show who you are? Which show range? Which show where you're going?`,
          ],
          image: `/explorer-assets/creative-arts/l19-s1-selection-not-archive.png`,
          imageCaption: `A portfolio isn't a memory box. It's a deliberate choice about what to show — and what to leave behind.`,
          vocab: [
            { word: `portfolio`,      definition: `A curated collection of an artist's best work. Selective representation — not an archive of everything they've ever made.`,
              audioPrompt: `A portfolio is not everything, {name} — it's the best things, chosen with care. A portfolio tells a story about the kind of artist you are, and every piece either serves that story or doesn't. If it doesn't, it doesn't belong there — no matter how much work went into it.` },
            { word: `selection`,      definition: `The act of choosing which works to include. One of the most important creative skills in portfolio building.`,
              audioPrompt: `Selection is harder than making, {name} — because it requires looking at your own work honestly and asking: is this my best? Is this earning its place? The instinct is to include everything, especially work that cost you something to make. Ten excellent pieces outperform thirty good ones every time.` },
            { word: `intentionality`, definition: `Every choice in a portfolio made deliberately, with purpose. The opposite of including pieces by accident.`,
              audioPrompt: `Intentionality is what separates a portfolio from a folder, {name}. When every piece is chosen for a reason — this shows range, this shows growth, this is my strongest work in this medium — the portfolio communicates more than any individual piece could alone. That awareness itself is part of what you're presenting.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Curating Is the Skill`,
          paragraphs: [
            `Curating is choosing what to include — and it's one of the hardest skills in portfolio work.`,
            `10 EXCELLENT pieces beat 30 mediocre ones every time. Quality over quantity, always. Including everything because every piece feels significant almost always weakens the portfolio.`,
          ],
          image: `/explorer-assets/creative-arts/l19-s2-curating-discipline.png`,
          imageCaption: `Curating means saying "not this one" — even to pieces you love. That courage is what makes a portfolio strong.`,
          vocab: [
            { word: `curate`,             definition: `To carefully select and arrange works. Applying critical judgment about what belongs and what doesn't.`,
              audioPrompt: `To curate your portfolio, {name}, is to be your own editor — and editors are ruthless in the best way. They ask: is this the best version of this idea? Does this belong? Curating takes courage — the courage to say "not this one," even when it cost you something.` },
            { word: `quality over quantity`, definition: `The principle that fewer excellent pieces outperform more mediocre ones. The core rule of curation.`,
              audioPrompt: `Quality over quantity is one of the oldest rules in portfolio work, {name}, and one of the hardest to follow. The instinct is to include everything that's pretty good. The discipline is to include only what's actually excellent. Ten strong pieces will outperform thirty mixed ones every single time.` },
            { word: `editing`,            definition: `The discipline of removing. Central to curation — and to writing, music, film, and every other creative form.`,
              audioPrompt: `Editing is removing, {name} — and it's where most creative work actually gets made. Writers edit. Filmmakers edit. Curators edit. The discipline is the same: cut what isn't essential so what remains can land harder. A portfolio is one of the few creative forms where the editing happens visibly. What you leave out matters as much as what you put in.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Showing Range and Voice`,
          paragraphs: [
            `A strong portfolio balances RANGE (showing you can do more than one thing) with VOICE (showing a consistent point of view).`,
            `Ten pieces in the same style raise the question: what else can you do? Ten random pieces raise: who actually are you?`,
          ],
          image: `/explorer-assets/creative-arts/l19-s3-range-and-voice.png`,
          imageCaption: `Range without voice feels scattered. Voice without range feels limited. The strongest portfolios show both.`,
          vocab: [
            { word: `range`,     definition: `Variety of subjects, styles, or mediums. Shows you can do more than one thing.`,
              audioPrompt: `Range in a portfolio says: I can do more than one thing, {name}. Range shows versatility — different mediums, different moods, different scales, different subjects — without sacrificing quality. The balance between range and consistency is one of portfolio building's central challenges.` },
            { word: `voice`,     definition: `A consistent point of view across the work. What holds the range together.`,
              audioPrompt: `Voice is what makes ten different pieces feel like one artist's portfolio rather than ten artists' work, {name}. Even when the subjects and mediums vary, something underneath stays consistent — a way of looking, a recurring concern, a quality of attention. Voice is what curation protects.` },
            { word: `coherence`, definition: `The quality of belonging together. What makes a portfolio feel like one body of work, not scattered pieces.`,
              audioPrompt: `Coherence in a portfolio is what tells the viewer this is all one artist's work, {name} — that there's an underlying logic connecting the pieces even when they look very different on the surface. Strong portfolios feel coherent. Weak ones feel like collections of unrelated objects. The difference is usually invisible — but always felt.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Artist Statement`,
          paragraphs: [
            `An ARTIST STATEMENT is short writing (100-300 words) explaining who you are and what you make.`,
            `Be SPECIFIC. "I express myself through art" says nothing. "I make drawings about memory and place" says something. Give the viewer a lens — not a sales pitch.`,
          ],
          image: `/explorer-assets/creative-arts/l19-s4-artist-statement.png`,
          imageCaption: `A great artist statement gives viewers a way in. Vague statements close doors. Specific ones open them.`,
          vocab: [
            { word: `artist statement`, definition: `Short writing explaining who you are, what you make, why you make it. Gives viewers a lens.`,
              audioPrompt: `An artist statement is not a sales pitch, {name} — it's an honest account of who you are and what your work is doing. What questions are you exploring? What materials do you use and why? Be specific, be honest, and trust the reader with the real thing.` },
            { word: `specificity`,      definition: `Being concrete rather than vague. What makes an artist statement work.`,
              audioPrompt: `Specificity is the single most important quality in an artist statement, {name}. Vague statements say nothing. Specific ones say something. The harder it is to write your statement specifically, the more useful the process is — because it forces you to actually examine what you make and why.` },
            { word: `lens`,             definition: `A way of seeing. What the artist statement provides to help viewers engage more deeply with the work.`,
              audioPrompt: `A great artist statement gives viewers a lens, {name} — a way of looking that helps them see more than they would have on their own. It doesn't explain the work away. It says: here is where I'm coming from, here is the question I'm asking. With that, the viewer enters the work with more to bring to it.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Documenting Your Work`,
          paragraphs: [
            `Great work POORLY documented is invisible — especially online.`,
            `Even light. Shoot straight on. Edit to accurate color. Multiple angles for 3D. Poor documentation tells viewers: I don't care enough about this to show it properly.`,
          ],
          image: `/explorer-assets/creative-arts/l19-s5-documenting-work.png`,
          imageCaption: `Online, the documentation IS the work. Bad photos make great work look bad. Good photos give it a chance.`,
          vocab: [
            { word: `documentation`,  definition: `Photographing, scanning, or recording your work. As important as the work itself for a portfolio.`,
              audioPrompt: `Great work poorly documented is almost invisible, {name} — especially online, where the image is all the viewer has. Documentation quality is part of the work. It says as much about your professionalism and pride in what you've made as the work itself does.` },
            { word: `accuracy`,       definition: `How faithfully the documentation represents the original. True colors, proportions, details.`,
              audioPrompt: `Color accuracy matters in documentation, {name} — if a painting looks orange on screen but is actually red in person, the viewer is seeing a different work than you made. A viewer who eventually sees the original should feel the documentation prepared them correctly. Accuracy is respect for the work and for the viewer.` },
            { word: `professionalism`, definition: `Presenting your work with care, consistency, and attention to detail. Communicates that you take your work seriously.`,
              audioPrompt: `Professionalism in a portfolio doesn't mean formal or corporate, {name} — it means consistent, considered, and clearly cared-for. Even if you're twelve years old and this is your first portfolio, you can bring professionalism to it. The habit of presenting your work well is one you'll use your whole creative life.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Version of You That Goes First`,
          paragraphs: [
            `Your portfolio is the version of you that enters the room before you do.`,
            `Choose what it says. The story is yours to tell — with the work you've made.`,
          ],
          image: `/explorer-assets/creative-arts/l19-s6-arrives-first.png`,
          imageCaption: `Your portfolio arrives before you do. What it says about you is something you get to decide.`,
          vocab: [
            { word: `presentation`,   definition: `The act of showing your work to others. Itself a part of the creative work.`,
              audioPrompt: `Presentation is part of the creative practice, {name}, not a separate thing that happens after the work is done. How you frame your work, photograph it, write about it, sequence it — all of that shapes how it's received. Presentation isn't decoration. It's communication, continued by other means.` },
            { word: `representation`, definition: `What your portfolio shows about you. The version of yourself that goes ahead into the world.`,
              audioPrompt: `Your portfolio represents you, {name} — not everything you've ever made, but who you are as an artist right now, at your best. It's the version of you that goes into the room before you do. That's both exciting and demanding. It means showing what you're most proud of, not what's most comfortable.` },
            { word: `ownership`,      definition: `The awareness that the story is yours to tell. With your own work, your own voice, your own selection.`,
              audioPrompt: `Ownership of your portfolio is something many people never quite claim, {name} — they wait for someone else to tell them what their work means. But the story is yours. The selection is yours. The way you frame it is yours. Claiming that ownership early is one of the most empowering things you can do as a creative.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `stronger`,
              label: `📁 This will make your portfolio stronger`,
              color: `#34D399`,
            },
            {
              id: `weakens`,
              label: `⚠️ This weakens a portfolio`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l19-g1`,
              image: `l19-game-1.png`,
              label: `Selecting 10 pieces that each show something different — your best work, your range, where you're heading — rather than including everything you've ever made.`,
              matchPhrase: `That's curating — the most important skill in building a portfolio. A focused selection of your best, most varied work tells a much clearer story about who you are as a creator than a large pile of everything. The viewer doesn't want to sift through a hundred pieces to find the good ones; they want to see that you already know which ones are good.`,
              correctMatch: `stronger`,
            },
            {
              id: `l19-g2`,
              image: `l19-game-2.png`,
              label: `Writing an artist statement that says specifically what you make, why you make it, and what questions your work explores — not just "I love expressing myself."`,
              matchPhrase: `That's the difference between a statement that opens up a portfolio and one that closes it down. Vague statements tell the viewer nothing — "expressing myself" is true of every artist who ever lived and says nothing about you specifically. A statement that names what you actually make, why, and what you're exploring gives the viewer a lens — a way to look at your work more carefully and understand what they're seeing.`,
              correctMatch: `stronger`,
            },
            {
              id: `l19-g3`,
              image: `l19-game-3.png`,
              label: `Photographing your artwork in a dim room with shadows falling across it, figuring the quality of the photo doesn't matter as long as the work itself is good.`,
              matchPhrase: `Documentation quality is not separate from the portfolio — it is part of it. Poor photos make great work look unprofessional and careless. A viewer who can't clearly see what you made can't judge it fairly. Good, even lighting and accurate colour are the minimum standard: they communicate that you take your work seriously enough to present it properly.`,
              correctMatch: `weakens`,
            },
            {
              id: `l19-g4`,
              image: `l19-game-4.png`,
              label: `Keeping every piece you've ever made in your portfolio because removing older work feels like losing part of your creative history.`,
              matchPhrase: `A portfolio is not an archive — it's a curated selection. Keeping older, weaker work dilutes the impact of your best work and makes the whole portfolio harder to read. Your creative history is preserved in your sketchbooks, your files, your memory — not necessarily in what you show others. Removing older work as you improve is not erasure; it's confidence in where you are now.`,
              correctMatch: `weakens`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l19-q1`,
              format: `multiple-choice`,
              question: `What is the key principle in deciding what to include in a portfolio?`,
              options: [
                `Include everything you've made to show the full breadth of your work`,
                `Quality over quantity — every piece should earn its place and show something valuable; 10 excellent pieces is far stronger than 30 mediocre ones`,
                `Include only your most recent work — older pieces make you look outdated`,
                `Include whatever you personally love most, regardless of technical quality`,
              ],
              correctIndex: 1,
              explanation: `The single most important principle in portfolio building is quality over quantity. A focused, well-curated selection of your best work tells a clear story about who you are as a creator. Filling a portfolio with everything you've ever made forces the viewer to do the curation work themselves — and most won't. The selection process — deciding what earns its place — is itself a critical creative skill, separate from the skill of making the work.`,
            },
            {
              id: `l19-q2`,
              format: `multiple-choice`,
              question: `What should an artist statement communicate?`,
              options: [
                `A list of awards, exhibitions, and training programmes you have completed`,
                `Who you are as a creative, what you make, why you make it, and what questions or ideas your work explores`,
                `A technical description of every material and method you use in your practice`,
                `Why your work is different from or better than other artists working in similar areas`,
              ],
              correctIndex: 1,
              explanation: `An artist statement is not a CV or a technical manual — it's an invitation. Its job is to give viewers a lens through which to understand your work more clearly and deeply. Who are you as a creative? What are you actually making? Why does it matter to you? What questions drive it? A statement that answers these specifically and honestly makes a viewer want to look at your work more carefully. A vague or defensive statement makes them look away.`,
            },
            {
              id: `l19-q3`,
              format: `multiple-choice`,
              question: `Why does documentation quality matter in a portfolio?`,
              options: [
                `It doesn't really matter — skilled reviewers can see past poor photos to evaluate the work itself`,
                `Poor documentation makes great work look bad — documentation quality communicates your professionalism as much as the work itself`,
                `Documentation only matters for photography portfolios — for other art forms, simple phone photos are fine`,
                `Documentation only matters for digital portfolios — physical portfolios don't need it`,
              ],
              correctIndex: 1,
              explanation: `Documentation quality is part of how a portfolio is experienced — it is not separate from it. A powerful piece of work photographed in dim light with shadows and colour distortion signals carelessness. It tells the viewer that you don't value your work enough to present it properly. Conversely, clean, well-lit, accurately coloured documentation signals that you take your practice seriously — and that attention to presentation is part of how you work. Documentation is not an afterthought; it's the last creative decision in the portfolio-building process.`,
            },
            {
              id: `l19-q4`,
              format: `true-false`,
              question: `A portfolio is a curated selection of your strongest work — not an archive of everything you have ever made.`,
              correctAnswer: true,
              explanation: `True. A portfolio and an archive serve completely different purposes. An archive preserves everything — it's a record of your creative history. A portfolio is a selection — it's a curated presentation of who you are as a creator right now. Keeping every piece you've ever made in your portfolio doesn't demonstrate range; it demonstrates an inability to evaluate your own work. The act of choosing — deciding which pieces earn their place — is itself a creative skill that portfolio building develops.`,
            },
            {
              id: `l19-q5`,
              format: `fill-blank`,
              question: `A short piece of writing that explains who you are as a creative, what you make, and why you make it is called an artist ___.`,
              options: [
                `statement`,
                `biography`,
                `manifesto`,
                `description`,
              ],
              correctIndex: 0,
              explanation: `An artist statement is the written companion to a portfolio — it gives viewers a way in. Unlike a biography (which is about your life chronologically) or a technical description (which explains materials and methods), a statement addresses the most important questions: what is this work trying to do, and why does it matter to the person making it? At its best, an artist statement makes you want to look at the work differently — it's a lens, not a label.`,
            },
            {
              id: `l19-q6`,
              format: `multiple-choice`,
              question: `Why is curating — choosing what to include in a portfolio — itself a creative skill, not just a practical one?`,
              options: [
                `Because it requires knowing the technical specifications of different portfolio formats`,
                `Because selecting from your own work requires honest self-evaluation — understanding which pieces best represent your voice, your range, and where you're heading as a creative`,
                `Because the order of pieces in a portfolio affects how viewers receive the whole collection`,
                `Because curating requires knowledge of what current audiences and institutions are looking for`,
              ],
              correctIndex: 1,
              explanation: `Curating your own work is a form of creative self-knowledge — it requires you to look at everything you've made and evaluate it honestly: what is this actually doing? Does it represent my best thinking? Does it show something the other pieces don't? Where is this work in relation to where I want to go? These are not administrative questions; they're questions about creative identity. The ability to evaluate your own work clearly — without either dismissing it or over-valuing it — is one of the most valuable and undervalued skills any creative person can develop.`,
            },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Portfolios are used in almost every creative field — art, design, photography, architecture, fashion, writing, filmmaking, game design, and more. They're also increasingly used in non-creative fields, where people compile evidence of their skills and achievements rather than artworks. The underlying skill — selecting and presenting your best work with intention and clarity — is one of the most universally valuable professional skills there is. Learning to see your own work clearly is the foundation.`,
          familyAdventure: `Hold a family creative showcase — each person shares their portfolio or a selection of their favourite creative work from any medium. Give each person 5–10 minutes. The audience's job: listen, look, then share one specific thing that stood out — not "it's all great," but something specific about one piece. Practice the kind of genuine, specific attention that helps creators understand what's actually working. Then display everyone's favourite piece somewhere in the house.`,
          creativePrompt: `Start your creative portfolio today. Step 1: gather everything you've made — drawings, photos, written pieces, crafts, designs, digital work. Step 2: sort into three piles — your best work, good work, and everything else. Step 3: from your best work, select 8–12 pieces that together show your range. Step 4: photograph or scan each piece properly — good light, straight on, accurate colour. Step 5: write a 100-word artist statement: who you are as a creator, what you make, and why. Arrange it in a folder, binder, or digital album. Show it to someone you trust.`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that a portfolio is not just a collection — it's a story you tell about yourself with your own work. Choosing what to include, how to present it, and how to write about it honestly are creative acts in their own right. Muse is so proud of everything you've already made, and can't wait to see what you'll add to that story next.`,
          badge: `portfolio-builder`,
          badgeName: `Portfolio Builder`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L19.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L19] Loaded: "Creating a Portfolio" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l19-s1-selection-not-archive.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-s2-curating-discipline.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-s3-range-and-voice.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-s4-artist-statement.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-s5-documenting-work.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-s6-arrives-first.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L19] One or more magazine assets missing'));
}
