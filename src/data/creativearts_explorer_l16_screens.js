// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L16 — Street Art and Murals
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L16 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-16`,
      title:     `Street Art and Murals`,
      duration:  12,
      xpReward:  50,
      badge:     `public-artist`,
      badgeName: `Public Artist`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `For most of human history, {name}, art lived in places with controlled access — temples, palaces, galleries, museums. Most people never got close to it. Street art changed that. It brought art outside, onto walls anyone can walk past, into conversations anyone can join — without a ticket, without permission, without belonging to any class that traditionally had access to culture. Today we're going to look at street art and murals as a serious artistic tradition: the history behind it, the techniques involved, and the artists who turned public walls into some of the most powerful works of the twentieth and twenty-first centuries. Art belongs to everyone. This lesson shows you why.`,
          headline: `Street Art and Murals`,
          subtitle: `For most of human history, art lived in temples, palaces, and museums — places where most people had limited access. Street art changed that. It brought art outside, into public spaces, where anyone could encounter it without permission, without a ticket, and without belonging to any class that traditionally had access to art`,
          visual: `/explorer-assets/creative-arts/l16-welcome.png`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Brief History of Street Art`,
          paragraphs: [
            `Street art in its modern form emerged from **New York City graffiti culture in the 1970s** — young people from marginalised communities using subway trains as their canvas, signing their names (called **tags**) to claim visibility in a city that largely rendered them invisible. This was not simply decoration — it was a declaration: *I exist. I was here.* Street art evolved through hip-hop culture, spread globally, and diversified into stencil art, wheatpaste, yarn bombing, large-scale muralism, and more. Artists like Banksy (UK), Jean-Michel Basquiat (NYC), Shepard Fairey, and Os Gemeos (Brazil) brought street aesthetics into galleries and mainstream culture — each in their own way continuing the tradition of using public space to say what official spaces wouldn't.`,
          ],
          image: `/explorer-assets/creative-arts/l16-magazine-1.png`,
          imageCaption: `Street art emerged from marginalised communities claiming visibility — "I exist. I was here."`,
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Street Art vs Vandalism`,
          paragraphs: [
            `The line between street art and vandalism is **genuinely contested**. Vandalism means marking or damaging property without permission — it's illegal and harms property owners. **Commissioned murals** are legal public art, created with the property owner's and often the city's explicit blessing. The grey zone: some argue that unauthorised art in public spaces is valid expression even without permission — that reclaiming public walls from advertising and corporate messages is itself a political act. Others argue that any unauthorised marking is vandalism regardless of artistic merit. Both positions have real arguments behind them. The question isn't just about art: it's about **who owns public space**, and who gets to decide what appears there. There is no clean answer — and that tension is part of what makes street art culturally alive.`,
          ],
          image: `/explorer-assets/creative-arts/l16-magazine-2.png`,
          imageCaption: `Commissioned murals are legal; the grey zone of unauthorised art raises real questions about who owns public space`,
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Murals as Community Voice`,
          paragraphs: [
            `Commissioned murals have transformed neighbourhoods worldwide. In Los Angeles in the 1960s and 70s, Chicano muralists used murals to **assert cultural identity** and tell stories that mainstream art history had erased. In Belfast, Northern Ireland, murals document decades of political conflict and memory. In Philadelphia, a community arts programme has created over 4,000 murals, using collaborative art as a tool for **community healing**. Murals communicate what a community values, remembers, mourns, and celebrates — they function as **public memory made visible**. A neighbourhood's murals tell you what the people there want the world to see about them — their history, their heroes, their grief, their pride. That is a fundamentally different purpose from art made for a gallery or a collector.`,
          ],
          image: `/explorer-assets/creative-arts/l16-magazine-3.png`,
          imageCaption: `Murals are public memory — they communicate what a community values, mourns, and wants the world to see`,
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Creating for Public Spaces`,
          paragraphs: [
            `Designing art for public spaces requires thinking **differently** from designing for a gallery. Public art must work at **large scale** — a design beautiful at 4 inches may be bland at 40 feet, and a design too complex at small size may become illegible when monumental. It must be **legible from different distances and angles**, since viewers approach from many directions and never for a sustained period. It must **respect the context and community** — what does this community need to see here? It must **endure weather and ageing** — outdoor art faces sun, rain, and pollution. And ideally it creates a **moment of unexpected delight**: stopping people mid-step, making them feel something they weren't expecting to feel when they walked past a wall. The best public art is a gift to strangers.`,
          ],
          image: `/explorer-assets/creative-arts/l16-magazine-4.png`,
          imageCaption: `Public art works at scale, from many angles, in all weather — designed for strangers who didn't choose to see it`,
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `best`,
              label: `🎨 This is what public art does at its best`,
              color: `#34D399`,
            },
            {
              id: `misunderstands`,
              label: `🤔 A common misunderstanding about street art`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l16-g1`,
              image: `l16-game-1.png`,
              label: `A mural painted with community input that shows the history, faces, and stories of the people who live in that neighbourhood.`,
              matchPhrase: `That's public art functioning as community memory — one of its most powerful purposes. A mural that tells a neighbourhood's own story, in its own language, makes visible what might otherwise be forgotten or overlooked. It says: these people were here, these things mattered, this is who we are. That's fundamentally different from art made for a gallery or a collector.`,
              correctMatch: `best`,
            },
            {
              id: `l16-g2`,
              image: `l16-game-2.png`,
              label: `An artist designing a public mural by thinking about how it will read from across a busy street — not just up close — and in full sun, rain, and years of weathering.`,
              matchPhrase: `That's thinking like a public artist — considering scale, legibility, and durability as creative challenges rather than just practical ones. A design that only works up close fails as public art. A design that fades or loses its impact within a year fails the community. The constraints of public space are not limitations — they're invitations to solve harder, more interesting creative problems.`,
              correctMatch: `best`,
            },
            {
              id: `l16-g3`,
              image: `l16-game-3.png`,
              label: `Thinking street art only counts as real art if it was painted without permission — that having the building owner's approval makes it just decoration.`,
              matchPhrase: `Whether a piece has permission has nothing to do with whether it's art. Commissioned murals — made with community input, designed with care, serving a neighbourhood's need to tell its story — are as artistically valid as any unauthorised work. The permission question is genuinely complicated, but it's a question about ethics and ownership, not about artistic worth.`,
              correctMatch: `misunderstands`,
            },
            {
              id: `l16-g4`,
              image: `l16-game-4.png`,
              label: `Thinking street art is just about making blank walls look more colourful — not realising it grew from communities using public space to tell stories others refused to tell for them.`,
              matchPhrase: `The origin of modern street art was explicitly political: young people from communities the city had made invisible claiming visible space to say "I exist, I was here." That act of claiming space — not decorating it — is the beating heart of the tradition. Aesthetic and political were always inseparable.`,
              correctMatch: `misunderstands`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l16-q1`,
              format: `multiple-choice`,
              question: `What made early street art politically significant — beyond being art?`,
              options: [
                `It was technically more challenging than gallery painting because of the outdoor conditions`,
                `It claimed visible public space for communities the city had rendered invisible — an act of asserting existence and presence`,
                `It was the first time photography was used to document an art movement`,
                `It was created faster than gallery art, allowing artists to respond to current events immediately`,
              ],
              correctIndex: 1,
              explanation: `The young people who originated modern street art in 1970s New York were from communities with very little social or cultural power. Using subway trains and public walls to put their names and images in front of everyone — forcing visibility — was a political act before it was an aesthetic one. This tradition of claiming public space as a way of asserting identity and presence is what gives street art its cultural weight beyond its visual qualities.`,
            },
            {
              id: `l16-q2`,
              format: `multiple-choice`,
              question: `What makes commissioned murals different from vandalism?`,
              options: [
                `Commissioned murals are painted by professional artists; vandalism is by untrained individuals`,
                `Commissioned murals are always large-scale; vandalism is always small`,
                `Commissioned murals have the property owner's and often the city's explicit permission — they are legal public art`,
                `Commissioned murals always depict positive imagery; vandalism is always negative or offensive`,
              ],
              correctIndex: 2,
              explanation: `The distinction between a commissioned mural and vandalism is fundamentally about permission, not artistic quality. A commissioned mural is made with the property owner's agreement — and often with community input, city support, and a deliberate brief about what the neighbourhood wants to see. Vandalism is marking property without that consent. Whether unauthorised art can also be valid art is a genuine ethical debate — but the legal distinction is straightforwardly about permission.`,
            },
            {
              id: `l16-q3`,
              format: `multiple-choice`,
              question: `How does designing for public space differ from designing for a gallery?`,
              options: [
                `Public art must be simpler because viewers don't spend as much time looking at it`,
                `Public art must work at large scale, from multiple distances and angles, in outdoor conditions, and for an audience that didn't choose to encounter it`,
                `Public art has fewer creative restrictions because it is seen by more people`,
                `Gallery art is more serious; public art is always meant to be fun and broadly accessible`,
              ],
              correctIndex: 1,
              explanation: `Gallery art is seen by people who chose to be there, in controlled conditions, from a specific distance. Public art is encountered by anyone, in any weather, from many angles and distances, often in passing. This changes everything about design: scale, legibility, durability, and the community's relationship to the space all become creative variables. Some of the hardest design problems in art are public ones — because the constraints are so demanding and the audience so unpredictable.`,
            },
            {
              id: `l16-q4`,
              format: `true-false`,
              question: `A neighbourhood's murals communicate something about that community even to someone who knows nothing about its history — public art functions as visible public memory.`,
              correctAnswer: true,
              explanation: `True. Murals are one of the most direct forms of public memory — a community choosing what to make visible on the walls that everyone passes every day. The subjects chosen, the stories told, the faces depicted, the events commemorated: all of this communicates what the community values, mourns, and wants the world to know about them. Someone who knows nothing about a neighbourhood can learn a great deal about it simply by paying attention to what its murals say.`,
            },
            {
              id: `l16-q5`,
              format: `fill-blank`,
              question: `Art placed in publicly accessible spaces — on walls, in parks, on buildings — where anyone can encounter it without a ticket or invitation is called ___ art.`,
              options: [
                `public`,
                `street`,
                `mural`,
                `graffiti`,
              ],
              correctIndex: 0,
              explanation: `Public art is the broad term for art created for and displayed in spaces accessible to everyone — no ticket required, no gallery membership, no cultural or class gatekeeping. Murals, sculptures in parks, mosaics in train stations, and large-scale installations in city squares are all forms of public art. The defining quality is accessibility: anyone who moves through that space can encounter the work. This is what makes public art one of the most democratic art forms in existence.`,
            },
            {
              id: `l16-q6`,
              format: `multiple-choice`,
              question: `Why does a large-scale public mural require different design thinking than a painting made for a gallery?`,
              options: [
                `Because public murals require government approval that changes what content is allowed`,
                `Because gallery paintings can be moved; murals are permanent`,
                `Because a mural must work at enormous scale, from many distances and angles, in changing light and weather, and for an audience who didn't choose to look at it — all of which changes what makes a design effective`,
                `Because public murals are always painted in groups, requiring designs that multiple people can execute consistently`,
              ],
              correctIndex: 2,
              explanation: `Every constraint of public space — scale, angle, light, weather, an audience that is passing rather than pausing — changes what makes a design effective. A composition that is beautiful and intimate at gallery scale may become flat and empty when painted across an entire building. Fine detail that carries meaning in a small painting becomes invisible from the street. The public artist must design for impact from 50 metres as well as 5, in sunlight and rain, for viewers who may glance for five seconds. That is a fundamentally different creative challenge.`,
            },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Public art programmes exist in cities all over the world — some of the largest employ hundreds of artists and have transformed crime-affected or economically struggling neighbourhoods. Research consistently finds that public art investment correlates with increased civic pride, community cohesion, and local economic activity. Art isn't separate from the life of a community — it is part of what makes a community feel alive. What's on the walls matters.`,
          familyAdventure: `Research the murals in your city or region. Find at least two significant ones — look up their history, who made them, and how the community responded. If you can, visit one in person and photograph it from multiple distances. Research: was it commissioned or unauthorised? What is it communicating? How has the community responded? Then discuss: who gets to decide what appears on public walls in your city — and do you think that system is fair?`,
          creativePrompt: `Design a mural for your school or neighbourhood. Start by thinking about the community: what matters to the people here? What story has never been told on these walls? Who is often not represented? Then design your mural on paper: sketch the full composition, choose a colour palette and explain why those colours, and identify one message you want someone to take away after 10 seconds of looking. Write a short artist statement explaining your choices. Imagine presenting it to the community as a real proposal — what would you say?`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that the walls of a city are not empty — they're a conversation. Every mural is someone saying: this matters, we were here, this is our story. Art in public space is one of the most democratic and powerful things humans do with creativity. Muse hopes you'll never walk past a painted wall without hearing what it's trying to say.`,
          badge: `public-artist`,
          badgeName: `Public Artist`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L16.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L16] Loaded: "Street Art and Murals" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l16-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L16] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L16] One or more magazine assets missing'));
}
