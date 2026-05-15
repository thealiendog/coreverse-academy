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
          headline: `Art for Everyone`,
          paragraphs: [
            `For most of history, art lived in places with controlled access — temples, palaces, museums.`,
            `Street art changed that. It brought art outside, onto walls anyone can walk past — without a ticket, without permission.`,
          ],
          image: `/explorer-assets/creative-arts/l16-s1-art-for-everyone.png`,
          imageCaption: `Most art has lived behind some kind of gate. Street art walked outside and refused to ask permission to be seen.`,
          vocab: [
            { word: `public art`, definition: `Art placed in publicly accessible spaces where anyone can encounter it. No ticket required.`,
              audioPrompt: `Public art is the art you don't have to be invited to see, {name}. A mural on a building. A sculpture in a plaza. A mosaic in a train station. You don't need a membership or a ticket or any kind of permission to encounter it. That accessibility is part of the art — it's the form's most democratic quality.` },
            { word: `access`,     definition: `The ability to encounter and engage with something. Public art opens access to people who never had it.`,
              audioPrompt: `Access has always been the unspoken question in art, {name}. Who gets to see it? Who gets to feel cultured? Galleries and museums have rules — even when admission is free, there's a sense of who belongs. Public art skips all that. It meets people where they already are. Anyone walking past has full access. That's a quiet revolution.` },
            { word: `democratic`, definition: `Open and accessible to all. Public art is one of the most democratic art forms ever invented.`,
              audioPrompt: `Democratic in the art world has a specific meaning, {name}: open to everyone, regardless of background or wealth. Public art is among the most democratic art forms because it doesn't require its audience to do anything to access it — no money, no education, no insider knowledge. It just shows up where people already are.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where Street Art Came From`,
          paragraphs: [
            `Modern street art emerged from New York City graffiti culture in the 1970s.`,
            `Young people from communities the city ignored wrote their names on subway trains. Not just decoration — a declaration: I EXIST. I WAS HERE. The whole tradition flows from that.`,
          ],
          image: `/explorer-assets/creative-arts/l16-s2-roots-of-street-art.png`,
          imageCaption: `Before it was a style, street art was a claim. "I exist. I was here." That impulse is older than civilization.`,
          vocab: [
            { word: `graffiti`,    definition: `Writing or images created in public spaces without permission. The root from which modern street art grew.`,
              audioPrompt: `Graffiti is older than you'd think, {name} — there's political graffiti carved into 2,000-year-old walls in Pompeii. Its modern form emerged from New York's marginalized communities in the 1970s. It carries more than aesthetics: identity, resistance, and the fundamental human need to be seen.` },
            { word: `tag`,         definition: `A stylized signature claiming visibility. The simplest, most basic act of street art.`,
              audioPrompt: `A tag is a name written in a distinctive style, {name} — the signature of someone staking their claim on a surface. In 1970s subway culture, tags were everywhere: young people from communities the city ignored writing names in places that couldn't be ignored. The oldest cave paintings are essentially tags — evidence of a person, in a place, insisting on their presence.` },
            { word: `visibility`,  definition: `Being seen and acknowledged in public space. What street art has historically claimed for unseen communities.`,
              audioPrompt: `Visibility is the original purpose of street art, {name} — the claim that you exist in public space, even when institutions haven't given you a platform. The young people writing on subway trains weren't just making art. They were insisting on being seen. That urgency gives street art a power gallery art rarely carries.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Permission and Public Space`,
          paragraphs: [
            `Commissioned murals are legal public art — made with the property owner's blessing.`,
            `Vandalism is marking property without permission — illegal regardless of how skilled. The grey zone in between raises real questions: who owns public space? Who decides what appears there?`,
          ],
          image: `/explorer-assets/creative-arts/l16-s3-permission-debate.png`,
          imageCaption: `Same wall, two very different things. Permission isn\'t about artistic merit — it\'s about who gets to decide what cities look like.`,
          vocab: [
            { word: `commissioned`, definition: `Officially authorized, often paid for. A commissioned mural is invited — yes, we want this here.`,
              audioPrompt: `A commissioned mural is invited, {name} — the artist is asked, given permission, often paid. Commissioned murals can be just as powerful and politically charged as unauthorized ones — but their legal status is clear. They're the part of public art that cities, organizations, and communities have chosen to say yes to.` },
            { word: `vandalism`,    definition: `Marking property without permission. Illegal regardless of artistic merit — the line that makes street art genuinely contested.`,
              audioPrompt: `Vandalism is marking property without permission, {name} — and it's illegal regardless of how beautiful or skilled the result is. The debate isn't really about whether the art is good. It's about who has the right to decide what appears in public space, and whether artistic expression can justify using someone else's property without asking.` },
            { word: `public space`, definition: `Areas accessible to all — streets, plazas, walls. And the contested question of who controls what appears there.`,
              audioPrompt: `Who owns the walls of a city, {name}? The property owners? The community that looks at them every day? The advertisers who pay to put billboards there? These are questions street art raises whether it intends to or not. Public space is where everyone exists — and what it looks like, what stories it tells, shapes how communities understand themselves.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Community Voice`,
          paragraphs: [
            `Great murals are more than paint. They're public memory made visible.`,
            `Chicano LA muralists asserted erased histories. Belfast murals document conflict. Philadelphia has 4,000+ community murals. A neighborhood's murals tell you what its people want the world to see.`,
          ],
          image: `/explorer-assets/creative-arts/l16-s4-community-memory.png`,
          imageCaption: `What a neighborhood paints on its walls tells you what it wants the world to know about who lives there.`,
          vocab: [
            { word: `mural`,             definition: `A large artwork painted directly on a wall or building. Often communicates community identity, history, or values.`,
              audioPrompt: `A mural is paint on a wall that belongs to everyone who walks past it, {name}. That public quality changes what art can do. A mural can honor a neighborhood's history, celebrate its heroes, mourn its losses, speak its pride. It's art that doesn't wait inside a building for someone to choose to enter. It meets people where they are.` },
            { word: `commemorate`,       definition: `To mark and remember a person, event, or idea through art. Murals do this for communities in immediate, public ways.`,
              audioPrompt: `Murals commemorate, {name} — they say: this person mattered, this event happened here, this is part of who we are. When a neighborhood paints a mural of someone they loved and lost, that wall becomes a gathering point for grief and pride at once. Different from a statue or plaque. Larger, more immediate, more present.` },
            { word: `community identity`, definition: `The shared sense of who a community is. Murals make it visible and permanent in public space.`,
              audioPrompt: `Every neighborhood's murals tell you something about how that community sees itself, {name}. The heroes they've painted. The histories they've made visible. Community identity in murals is self-expression at a collective scale: not one person's voice, but many voices deciding together what they want the world to see.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Designing for the Street`,
          paragraphs: [
            `Public art has different design problems than gallery art.`,
            `It works at huge SCALE, must be legible from many distances, faces sun and rain for years, and meets people who didn't choose to look. Constraints are real — and creative.`,
          ],
          image: `/explorer-assets/creative-arts/l16-s5-designing-for-street.png`,
          imageCaption: `Big scale. Many angles. Years of weather. An audience that didn\'t choose to look. Public art\'s constraints are also where its creativity lives.`,
          vocab: [
            { word: `scale`,       definition: `The size at which public art operates. Monumental scale requires different design thinking than gallery work.`,
              audioPrompt: `Working at scale is a completely different creative problem, {name}. What looks balanced and clear in a small sketch can become awkward or illegible at forty feet. Artists who work on murals develop a specific skill: designing with scale in mind from the start, making bold choices that hold up at the size of a building wall.` },
            { word: `legibility`,  definition: `How clearly a design reads at a distance, in motion, in varied conditions. Critical for art encountered in passing.`,
              audioPrompt: `A design beautiful at four inches can disappear at forty feet, {name}. Legibility is what survives scale — communicating clearly even when the viewer is moving past. Public art has to be legible from many distances because the audience didn't choose to stop and study it. The most effective murals communicate their essential message in a glance.` },
            { word: `context`,     definition: `The surrounding community, history, and place. What shapes what a public artwork means.`,
              audioPrompt: `Context is everything for public art, {name}. The same image means completely different things on the wall of a police station versus a community center versus a hospital. Who lives here? What happened on this street? A mural that grows from genuine understanding of its place becomes part of the neighborhood's identity — like it was always there.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A Conversation on the Walls`,
          paragraphs: [
            `The walls of a city aren't empty. They're a conversation.`,
            `Every mural is someone saying: this matters, we were here, this is our story. Once you can read what walls say, you'll never walk past one quietly again.`,
          ],
          image: `/explorer-assets/creative-arts/l16-s6-walls-speaking.png`,
          imageCaption: `Cities have been speaking through their walls for as long as cities have existed. Now you can hear what they\'re saying.`,
          vocab: [
            { word: `conversation`, definition: `An exchange of meaning. What murals create with everyone who passes them.`,
              audioPrompt: `A great mural starts a conversation, {name} — between the artist and the community, between the wall and everyone who passes it, between generations who walk by it over time. Conversation in public art doesn't end when the paint dries. It continues every day, with every new viewer who encounters it and feels something.` },
            { word: `voice`,        definition: `The unique perspective being expressed. Every mural has one — the artist's, the community's, often both.`,
              audioPrompt: `Voice in art is whose perspective is being expressed, {name} — and public art often carries many voices at once. The artist who designed it. The community who commissioned it. The histories woven into it. Public art is voice made permanent — a perspective insisting on being part of the public conversation about who matters and what's worth seeing.` },
            { word: `presence`,     definition: `The act of being seen and asserted in space. The deepest gift of public art.`,
              audioPrompt: `Presence is what public art ultimately offers, {name} — the simple, profound act of being seen in space. Communities painted into existence on the walls everyone passes. Faces that were hidden, made visible. Stories that were untold, told. Presence is the oldest function of art, and street art carries it more directly than almost any other tradition.` },
          ],
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
    fetch('/explorer-assets/creative-arts/l16-s1-art-for-everyone.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-s2-roots-of-street-art.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-s3-permission-debate.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-s4-community-memory.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-s5-designing-for-street.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l16-s6-walls-speaking.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L16] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L16] One or more magazine assets missing'));
}
