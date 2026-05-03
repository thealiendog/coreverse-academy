// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L19 — Creating a Portfolio
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L19 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-19',
      title:     'Creating a Portfolio',
      duration:  12,
      xpReward:  50,
      badge:     'portfolio-builder',
      badgeName: 'Portfolio Builder',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l19-welcome',
          type:     'welcome',
          headline: 'Creating a Portfolio',
          subtitle: `Every creative professional in the world uses a portfolio. It's the primary way creative people show who they are and what they can do. But a great portfolio isn't just a collection of work — it's a curated, intentional story about your creative identity. Learning to build one is a skill as important as the art itself`,
          visual:   '/explorer-assets/creative-arts/l19-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l19-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What a Portfolio Is and Isn't`,
            body: `A portfolio is **not** everything you've ever made — it's a **selection**. The selection itself is a creative and critical act: which pieces best represent who you are? Which show your range? Which show your development over time? A portfolio can be **physical** (a binder or box of original work), **digital** (a website, PDF, or online gallery), or both. Different contexts call for different portfolios: an art school application portfolio looks different from a professional design portfolio, which looks different from a social media creative presence. What all portfolios share is intentionality — every piece is there because it **earns its place**, not because it exists.`,
            image:   '/explorer-assets/creative-arts/l19-magazine-1.png',
            caption: `A portfolio is a selection, not an archive — every piece earns its place or it doesn't belong there`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l19-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Curating: Choosing What to Include`,
            body: `**Curating** is the art of selection, and it's one of the hardest skills in building a portfolio. Every piece should earn its place. Ask of each potential piece: *Is this my best work, or just my most comfortable work? Does it show something the other pieces don't? Does it represent where I'm going, not just where I've been?* A portfolio of **10 excellent pieces** is far stronger than 30 mediocre ones. Quality over quantity, always. The instinct to include everything — because every piece feels personally significant — is understandable but almost always works against a strong portfolio. And **updating regularly** — removing older work as you improve — is not erasing your history; it's having the confidence to show only your best current self.`,
            image:   '/explorer-assets/creative-arts/l19-magazine-2.png',
            caption: `10 excellent pieces beats 30 mediocre ones — curating is the hardest and most important skill in portfolio building`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l19-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `The Artist Statement`,
            body: `Most portfolios include an **artist statement** — a short piece of writing (usually 100–300 words) that explains: who you are as a creative, what you make, why you make it, what questions your work explores, and what influences shape your vision. Artist statements are notoriously difficult to write because they require **honest self-examination**. The biggest mistakes: being vague (*"I love to express myself through art"*), overly technical, or defensive. The best statements are **specific, honest, and give viewers a lens** through which to understand the work. You are not explaining your work — you are giving the reader a way in. A great artist statement makes someone want to look at your work more carefully.`,
            image:   '/explorer-assets/creative-arts/l19-magazine-3.png',
            caption: `An artist statement gives viewers a lens — specific and honest, not vague or defensive`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l19-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Documenting Your Work`,
            body: `Great work **poorly documented** is invisible — especially for digital portfolios. Key principles: photograph artwork in **good, even light** without shadows falling across it. For flat work, shoot **straight on** rather than at an angle — any tilt distorts the proportions. Edit photos to **accurate colour** — what you show should look like the original. For three-dimensional work, photograph from multiple angles. For performance or process-based work, **video documentation** matters. Consider **scanning** flat work rather than photographing, for maximum accuracy. The documentation quality communicates as much about your professionalism as the work itself. A great piece presented poorly tells the viewer: *I don't care enough about this to show it properly.* Documentation is part of the creative practice.`,
            image:   '/explorer-assets/creative-arts/l19-magazine-4.png',
            caption: `Documentation quality communicates professionalism — great work presented poorly tells viewers you don't care`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l19-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'stronger', label: `📁 This will make your portfolio stronger`, color: '#34D399' },
              { id: 'weakens',  label: `⚠️ This weakens a portfolio`,               color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l19-g1',
                image:         'l19-game-1.png',
                label:         `Selecting 10 pieces that each show something different — your best work, your range, where you're heading — rather than including everything you've ever made.`,
                correctBucket: 'stronger',
                matchPhrase:   `That's curating — the most important skill in building a portfolio. A focused selection of your best, most varied work tells a much clearer story about who you are as a creator than a large pile of everything. The viewer doesn't want to sift through a hundred pieces to find the good ones; they want to see that you already know which ones are good.`,
              },
              {
                id:            'l19-g2',
                image:         'l19-game-2.png',
                label:         `Writing an artist statement that says specifically what you make, why you make it, and what questions your work explores — not just "I love expressing myself."`,
                correctBucket: 'stronger',
                matchPhrase:   `That's the difference between a statement that opens up a portfolio and one that closes it down. Vague statements tell the viewer nothing — "expressing myself" is true of every artist who ever lived and says nothing about you specifically. A statement that names what you actually make, why, and what you're exploring gives the viewer a lens — a way to look at your work more carefully and understand what they're seeing.`,
              },
              {
                id:            'l19-g3',
                image:         'l19-game-3.png',
                label:         `Photographing your artwork in a dim room with shadows falling across it, figuring the quality of the photo doesn't matter as long as the work itself is good.`,
                correctBucket: 'weakens',
                matchPhrase:   `Documentation quality is not separate from the portfolio — it is part of it. Poor photos make great work look unprofessional and careless. A viewer who can't clearly see what you made can't judge it fairly. Good, even lighting and accurate colour are the minimum standard: they communicate that you take your work seriously enough to present it properly.`,
              },
              {
                id:            'l19-g4',
                image:         'l19-game-4.png',
                label:         `Keeping every piece you've ever made in your portfolio because removing older work feels like losing part of your creative history.`,
                correctBucket: 'weakens',
                matchPhrase:   `A portfolio is not an archive — it's a curated selection. Keeping older, weaker work dilutes the impact of your best work and makes the whole portfolio harder to read. Your creative history is preserved in your sketchbooks, your files, your memory — not necessarily in what you show others. Removing older work as you improve is not erasure; it's confidence in where you are now.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l19-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l19-q1',
              format:       'mc',
              question:     `What is the key principle in deciding what to include in a portfolio?`,
              options:      [
                `Include everything you've made to show the full breadth of your work`,
                `Quality over quantity — every piece should earn its place and show something valuable; 10 excellent pieces is far stronger than 30 mediocre ones`,
                `Include only your most recent work — older pieces make you look outdated`,
                `Include whatever you personally love most, regardless of technical quality`,
              ],
              correctIndex: 1,
              explanation:  `The single most important principle in portfolio building is quality over quantity. A focused, well-curated selection of your best work tells a clear story about who you are as a creator. Filling a portfolio with everything you've ever made forces the viewer to do the curation work themselves — and most won't. The selection process — deciding what earns its place — is itself a critical creative skill, separate from the skill of making the work.`,
            },

            // Q2 — MC (source)
            {
              id:           'l19-q2',
              format:       'mc',
              question:     `What should an artist statement communicate?`,
              options:      [
                `A list of awards, exhibitions, and training programmes you have completed`,
                `Who you are as a creative, what you make, why you make it, and what questions or ideas your work explores`,
                `A technical description of every material and method you use in your practice`,
                `Why your work is different from or better than other artists working in similar areas`,
              ],
              correctIndex: 1,
              explanation:  `An artist statement is not a CV or a technical manual — it's an invitation. Its job is to give viewers a lens through which to understand your work more clearly and deeply. Who are you as a creative? What are you actually making? Why does it matter to you? What questions drive it? A statement that answers these specifically and honestly makes a viewer want to look at your work more carefully. A vague or defensive statement makes them look away.`,
            },

            // Q3 — MC (source)
            {
              id:           'l19-q3',
              format:       'mc',
              question:     `Why does documentation quality matter in a portfolio?`,
              options:      [
                `It doesn't really matter — skilled reviewers can see past poor photos to evaluate the work itself`,
                `Poor documentation makes great work look bad — documentation quality communicates your professionalism as much as the work itself`,
                `Documentation only matters for photography portfolios — for other art forms, simple phone photos are fine`,
                `Documentation only matters for digital portfolios — physical portfolios don't need it`,
              ],
              correctIndex: 1,
              explanation:  `Documentation quality is part of how a portfolio is experienced — it is not separate from it. A powerful piece of work photographed in dim light with shadows and colour distortion signals carelessness. It tells the viewer that you don't value your work enough to present it properly. Conversely, clean, well-lit, accurately coloured documentation signals that you take your practice seriously — and that attention to presentation is part of how you work. Documentation is not an afterthought; it's the last creative decision in the portfolio-building process.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l19-q4',
              format:        'tf',
              question:      `A portfolio is a curated selection of your strongest work — not an archive of everything you have ever made.`,
              correctAnswer: true,
              explanation:   `True. A portfolio and an archive serve completely different purposes. An archive preserves everything — it's a record of your creative history. A portfolio is a selection — it's a curated presentation of who you are as a creator right now. Keeping every piece you've ever made in your portfolio doesn't demonstrate range; it demonstrates an inability to evaluate your own work. The act of choosing — deciding which pieces earn their place — is itself a creative skill that portfolio building develops.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l19-q5',
              format:       'fill-blank',
              question:     `A short piece of writing that explains who you are as a creative, what you make, and why you make it is called an artist ___.`,
              options:      ['statement', 'biography', 'manifesto', 'description'],
              correctIndex: 0,
              explanation:  `An artist statement is the written companion to a portfolio — it gives viewers a way in. Unlike a biography (which is about your life chronologically) or a technical description (which explains materials and methods), a statement addresses the most important questions: what is this work trying to do, and why does it matter to the person making it? At its best, an artist statement makes you want to look at the work differently — it's a lens, not a label.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l19-q6',
              format:       'mc',
              question:     `Why is curating — choosing what to include in a portfolio — itself a creative skill, not just a practical one?`,
              options:      [
                `Because it requires knowing the technical specifications of different portfolio formats`,
                `Because selecting from your own work requires honest self-evaluation — understanding which pieces best represent your voice, your range, and where you're heading as a creative`,
                `Because the order of pieces in a portfolio affects how viewers receive the whole collection`,
                `Because curating requires knowledge of what current audiences and institutions are looking for`,
              ],
              correctIndex: 1,
              explanation:  `Curating your own work is a form of creative self-knowledge — it requires you to look at everything you've made and evaluate it honestly: what is this actually doing? Does it represent my best thinking? Does it show something the other pieces don't? Where is this work in relation to where I want to go? These are not administrative questions; they're questions about creative identity. The ability to evaluate your own work clearly — without either dismissing it or over-valuing it — is one of the most valuable and undervalued skills any creative person can develop.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l19-realworld',
          type: 'real-world',
          content: {
            scenario:    `Portfolio Building`,
            description: `Start your creative portfolio today. Step 1: gather everything you've made — drawings, photos, written pieces, crafts, designs, digital work. Step 2: sort into three piles — your best work, good work, and everything else. Step 3: from your best work, select 8–12 pieces that together show your range. Step 4: photograph or scan each piece properly — good light, straight on, accurate colour. Step 5: write a 100-word artist statement: who you are as a creator, what you make, and why. Arrange it in a folder, binder, or digital album. Show it to someone you trust.`,
            familyAdventure: `Hold a family creative showcase — each person shares their portfolio or a selection of their favourite creative work from any medium. Give each person 5–10 minutes. The audience's job: listen, look, then share one specific thing that stood out — not "it's all great," but something specific about one piece. Practice the kind of genuine, specific attention that helps creators understand what's actually working. Then display everyone's favourite piece somewhere in the house.`,
            realWorldConnection: `Portfolios are used in almost every creative field — art, design, photography, architecture, fashion, writing, filmmaking, game design, and more. They're also increasingly used in non-creative fields, where people compile evidence of their skills and achievements rather than artworks. The underlying skill — selecting and presenting your best work with intention and clarity — is one of the most universally valuable professional skills there is. Learning to see your own work clearly is the foundation.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l19-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that a portfolio is not just a collection — it's a story you tell about yourself with your own work. Choosing what to include, how to present it, and how to write about it honestly are creative acts in their own right. Muse is so proud of everything you've already made, and can't wait to see what you'll add to that story next.`,
          },
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
    fetch('/explorer-assets/creative-arts/l19-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l19-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L19] One or more magazine assets missing'));
}
