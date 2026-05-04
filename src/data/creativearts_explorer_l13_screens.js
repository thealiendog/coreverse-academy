// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L13 — Architecture: Designing Spaces
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L13 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-13`,
      title:     `Architecture: Designing Spaces`,
      duration:  12,
      xpReward:  50,
      badge:     `space-designer`,
      badgeName: `Space Designer`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Something I want you to notice today, {name}, and for the rest of your life: you spend your entire existence inside spaces that were designed by someone. Your home. Your school. The shops you walk through. Every doorway, ceiling height, window placement, and material choice was made deliberately — and those choices shape how you feel, how you move, and how you think, mostly without you realizing it. Architecture is the only art form you cannot choose to avoid. It is always around you. Today we're going to start really seeing it — and once you do, walking into a building will never be quite the same.`,
          headline: `Architecture: Designing Spaces`,
          subtitle: `You spend your entire life inside buildings — and architecture shapes your mood, your behaviour, and your sense of the world more than almost any other art form. Once you start seeing the design behind the spaces you inhabit, you can never un-see it`,
          visual: `/explorer-assets/creative-arts/l13-welcome.png`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Architecture as Art and Function`,
          paragraphs: [
            `Architecture is unique among the arts because it must be **simultaneously beautiful, functional, and structurally safe** — all three are required. A painting that doesn't look good has failed. But a building that looks spectacular and then collapses — or makes its inhabitants miserable — has also failed. Architects must consider: **structural engineering** (how to hold the building up), **materials science** (what to build with), **human behaviour** (how will people actually move through and use this space?), **acoustics** (how sound travels), **natural light** (how sunlight enters and moves through the day), and **aesthetics** (how to make it beautiful). Every decision involves tradeoffs, and no decision is purely one thing.`,
          ],
          image: `/explorer-assets/creative-arts/l13-magazine-1.png`,
          imageCaption: `Architecture must be beautiful, functional, and safe — all three. Any one missing and it fails`,
          vocab: [
            { word: `function`, definition: `In architecture, how well a building serves the practical needs of the people who use it — which must be considered alongside aesthetic beauty and structural safety.`, audioPrompt: `A building that looks spectacular but makes its inhabitants miserable has failed, {name}. Architecture is unique among the arts: it must be beautiful AND structurally sound AND actually work for the people inside it. Function means asking: how will people move through this space? Where do they need light? What does this building need to do? Beauty without function is sculpture. Function without beauty is a warehouse. Architecture requires both at once.` },
            { word: `structural`, definition: `Related to the physical system that holds a building up — the skeleton of beams, walls, foundations, and supports that allows architecture to stand safely.`, audioPrompt: `Every building has a skeleton, {name} — a structural system that holds it up against gravity and weather and time. Stone arches. Steel frames. Reinforced concrete. Wooden beams. The material and form of the structure shapes everything else: what shapes are possible, how large spaces can be, how light can enter. Architecture's creative possibilities are always in dialogue with structural reality. The most beautiful forms often come from finding the most elegant structural solution.` },
            { word: `aesthetic`, definition: `Related to visual beauty and artistic effect — in architecture, the qualities of a building that create an emotional and sensory response beyond its functional purpose.`, audioPrompt: `Aesthetic is everything a building makes you feel beyond the practical, {name}. The quality of light in a cathedral. The way a building seems to grow from its landscape. The elegance of a staircase. These aren't accidents — they're choices made by architects who understood that how a space feels is as important as what it does. Great architecture makes you experience something: awe, calm, curiosity, belonging. That emotional dimension is the aesthetic.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Space Affects You`,
          paragraphs: [
            `Architecture actively shapes how you **feel and behave**. Research has found that high ceilings encourage abstract, creative thinking, while low ceilings tend to encourage detail-focused, precise work. **Natural light** improves mood, alertness, and health outcomes. Open-plan spaces encourage collaboration but increase distraction; private spaces encourage focused work but can lead to isolation. Hospital patients with views of nature have been found to recover faster and need less pain medication than those without. **Acoustics** shape concentration: a room with harsh echoes makes focus difficult; a room with soft, absorbed sound feels calmer and easier to think in. Architects who understand human psychology design spaces for **human flourishing** — not just human occupation.`,
          ],
          image: `/explorer-assets/creative-arts/l13-magazine-2.png`,
          imageCaption: `Ceiling height, light, views of nature — the spaces we're in shape how we think, feel, and recover`,
          vocab: [
            { word: `scale`, definition: `The size of architectural spaces and elements relative to the human body — which powerfully influences how people feel inside a building, from intimate and enclosed to vast and awe-inspiring.`, audioPrompt: `Scale is how a space compares to your body, {name}. A cathedral ceiling hundreds of feet high makes you feel small against something vast. A low-ceilinged reading nook makes you feel enclosed and safe. Architects choose scale deliberately — high ceilings for creative, expansive thinking; lower ones for intimate, focused work. You feel scale in your body before your brain registers it. It's one of architecture's most direct tools.` },
            { word: `natural light`, definition: `Sunlight that enters a building through windows, skylights, and openings — which affects mood, health, and how a space feels to be in throughout the day.`, audioPrompt: `Stand in a room with no windows, {name}, and then in one flooded with morning light. The difference is felt immediately in the body — not just in how well you can see, but in mood, in energy, in the quality of the space itself. Natural light moves through the day, changes with the weather, creates shadows that shift and live. Architects design around it the way painters design around a composition: it's not an afterthought, it's the whole thing.` },
            { word: `acoustics`, definition: `How sound behaves in a space — how it echoes, absorbs, or carries — which architects design carefully to create environments that feel right to be in and work in.`, audioPrompt: `Have you ever been in a room with a harsh echo, {name} — where every sound bounced and multiplied until the noise became physical? That's poor acoustics. A concert hall designed for music uses curved surfaces and specific materials to carry sound perfectly to every seat. A library uses soft materials to absorb sound and create quiet. Acoustics is invisible architecture — you can't see it, but you feel it constantly in how comfortable a space is to inhabit.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Famous Architecture and What It Communicates`,
          paragraphs: [
            `Great buildings communicate **meaning through form**. The **Taj Mahal** in India — its perfect symmetry and luminous white marble communicate eternal, transcendent love. The **Sydney Opera House** — its sail-like shells communicate movement, aspiration, and creativity. The **Pantheon** in Rome — its oculus (an open circular hole in the ceiling) connects the building to the sky and cosmos, communicating human humility before the infinite. **Fallingwater**, a house in Pennsylvania designed by Frank Lloyd Wright, is built directly over a waterfall — communicating the harmony between human habitation and the natural world. Architecture tells stories in stone, glass, steel, and space — and some of those stories are still speaking, clearly, thousands of years after they were built.`,
          ],
          image: `/explorer-assets/creative-arts/l13-magazine-3.png`,
          imageCaption: `The Taj Mahal, the Pantheon, Fallingwater — great buildings communicate meaning across centuries`,
          vocab: [
            { word: `symmetry`, definition: `A design principle where one side mirrors the other — used in architecture to create a sense of order, balance, formality, and often grandeur.`, audioPrompt: `Stand in front of the Taj Mahal, {name}, and you're looking at perfect symmetry — the left side is the exact mirror of the right. This symmetry isn't accidental: it communicates eternity, transcendence, absolute order. Symmetrical buildings feel formal, authoritative, and monumental. Asymmetrical ones feel dynamic and human. Architects choose symmetry or asymmetry the way poets choose form or free verse: it shapes the entire experience of what you're encountering.` },
            { word: `form`, definition: `The three-dimensional shape and massing of a building — how it looks from outside, its silhouette against the sky, and what its physical presence communicates.`, audioPrompt: `A building's form is its presence in the world, {name} — the shapes it creates against the sky, the way its mass sits on the land. The Sydney Opera House's sail-like shells are an unmistakable form: dynamic, aspirational, unlike anything before them. Frank Lloyd Wright's Fallingwater wraps itself into the landscape rather than sitting on top of it. Form is the first conversation a building has with the world — before you enter, before you read a word, before you know what it's for.` },
            { word: `oculus`, definition: `A circular opening at the top of a dome — most famously in the Pantheon in Rome — which connects the interior to the sky and creates a symbolic link between the human and the infinite.`, audioPrompt: `Walk into the Pantheon in Rome, {name}, and look up: there's a perfect circle of open sky at the top of the dome, 30 feet across, open to rain and sun and night. That's the oculus — the eye of the building. It's been there for nearly 2,000 years. The light moves across the interior throughout the day, turning the building into a sundial. It connects the human scale of the room to the infinite scale of the sky. Architecture rarely makes meaning so direct.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Sustainable Architecture`,
          paragraphs: [
            `Buildings consume around **40% of all energy worldwide** and produce significant carbon emissions. **Sustainable architecture** designs buildings that minimise environmental impact while still serving human needs beautifully. Strategies include: **passive solar design** (orienting buildings to maximise natural heating and cooling from the sun's position), **green roofs** (living plants on rooftops that insulate, absorb rainfall, and reduce urban heat), **recycled and natural materials**, **natural ventilation** instead of air conditioning, **solar panels**, **rainwater harvesting**, and designing for deconstruction — buildings that can eventually be disassembled and their materials reused. The most sustainable building works **with** its environment rather than against it. Architecture that ignores its environment isn't just wasteful — it's a missed creative opportunity.`,
          ],
          image: `/explorer-assets/creative-arts/l13-magazine-4.png`,
          imageCaption: `Sustainable architecture works with nature — passive solar, green roofs, natural ventilation instead of machines`,
          vocab: [
            { word: `passive solar design`, definition: `An architectural approach that orients and designs buildings to capture warmth from the sun in winter and shade from it in summer — reducing energy use without mechanical systems.`, audioPrompt: `Passive solar design is architecture thinking, {name} — using the sun's angle and movement to naturally heat a building in winter and keep it cool in summer, without any mechanical system running. South-facing windows for winter sun. Deep overhangs for summer shade. The right orientation, the right materials, the right window placement — and the building does what a furnace and air conditioner would otherwise do, for free, forever. It's one of the oldest architectural ideas and one of the most elegant.` },
            { word: `green roof`, definition: `A roof covered with living plants and soil — which insulates the building, absorbs rainwater, reduces urban heat, and creates habitat.`, audioPrompt: `A green roof is a living layer on top of a building, {name} — plants, soil, sometimes small trees — that does multiple things at once. It insulates, reducing heating and cooling costs. It absorbs rainfall instead of channeling it into drains. It reduces the urban heat island effect. It creates habitat for insects and birds. And it's beautiful. A neighborhood full of green roofs looks like the city is breathing. It's architecture that gives back to the environment it sits in.` },
            { word: `sustainable design`, definition: `Designing buildings that minimize environmental impact throughout their entire lifecycle — from materials and construction to operation, maintenance, and eventually disassembly.`, audioPrompt: `Sustainable design asks a longer question, {name}: what happens to this building over its whole life? Where do the materials come from? How much energy will it use for decades? What happens when it's eventually torn down? Buildings that ignore these questions leave a long shadow. Buildings that answer them thoughtfully become part of the solution. Muse finds sustainable architecture deeply exciting — it's where creativity and responsibility push each other toward the most interesting problems.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `shapes`,
              label: `🏛️ This is how architecture shapes human experience`,
              color: `#34D399`,
            },
            {
              id: `misunderstands`,
              label: `🤔 A common misunderstanding about architecture`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l13-g1`,
              image: `l13-game-1.png`,
              label: `An architect choosing very high ceilings for a creative studio because she knows that open, spacious rooms encourage more expansive and abstract thinking.`,
              matchPhrase: `That's using architecture's effect on cognition deliberately. Research has found that ceiling height genuinely influences how people think — high ceilings favour abstract and creative thinking, while lower ceilings favour focused detail work. An architect who understands this doesn't just design for how a space looks; she designs for how it thinks.`,
              correctMatch: `shapes`,
            },
            {
              id: `l13-g2`,
              image: `l13-game-2.png`,
              label: `Noticing that a building's soaring pointed arches and vast height make you feel small and awestruck — an effect its designers created on purpose.`,
              matchPhrase: `That's architecture communicating meaning through form. Great buildings don't just house people — they tell them something about the world. A cathedral's height says: there are things larger than you. A parliament's columns say: this is the seat of power. A community library's low steps and open doors say: you belong here. The feeling you get when you enter a space is rarely an accident.`,
              correctMatch: `shapes`,
            },
            {
              id: `l13-g3`,
              image: `l13-game-3.png`,
              label: `Thinking a building's job is done once the outside looks impressive — that what happens inside is purely a practical matter, separate from design.`,
              matchPhrase: `Architecture must be simultaneously beautiful, functional, and structurally sound — all three, inseparably. A building that looks spectacular but makes its occupants uncomfortable, confused, or unsafe has failed just as much as one that functions perfectly but looks dreadful. Interior experience — light, space, acoustics, movement — is as much a design responsibility as the exterior face.`,
              correctMatch: `misunderstands`,
            },
            {
              id: `l13-g4`,
              image: `l13-game-4.png`,
              label: `A city placing gardens on its rooftops so that rainwater soaks in naturally, the building stays cooler in summer, and less energy is needed for air conditioning.`,
              matchPhrase: `That's sustainable architecture working with nature rather than against it. Green roofs insulate, absorb rainfall, reduce urban heat, and support biodiversity — all while giving occupants a connection to living things. The best sustainable solutions don't just reduce harm; they improve the experience of the space for the people inside it.`,
              correctMatch: `shapes`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l13-q1`,
              format: `multiple-choice`,
              question: `What makes architecture different from other art forms?`,
              options: [
                `Architecture is permanent while other art forms can be changed or destroyed`,
                `It must be simultaneously beautiful, functional, and structurally safe — all three are required, not just one`,
                `Architecture is designed by teams while other arts are made by individuals`,
                `Architecture must serve commercial purposes while other arts are purely expressive`,
              ],
              correctIndex: 1,
              explanation: `Architecture's unique challenge is that it cannot succeed on aesthetics alone. A painting only needs to be beautiful; a novel only needs to tell its story. But a building that looks extraordinary while leaking, collapsing, or making its occupants miserable has failed. Every architectural decision involves balancing beauty, function, structural integrity, human behaviour, acoustics, light, and often cost and environmental impact — simultaneously. That complexity is what makes architecture one of the hardest and most complete creative disciplines.`,
            },
            {
              id: `l13-q2`,
              format: `multiple-choice`,
              question: `What does research suggest about the effect of ceiling height on how people think?`,
              options: [
                `Higher ceilings always produce better environments for any kind of work`,
                `High ceilings encourage abstract, creative thinking; lower ceilings tend to encourage detail-focused, precise work`,
                `Ceiling height has no measurable effect on thinking or cognitive performance`,
                `People prefer lower ceilings for comfort regardless of what kind of work they're doing`,
              ],
              correctIndex: 1,
              explanation: `Research has found that ceiling height genuinely influences cognition. High ceilings — associated with openness and freedom — tend to promote abstract thinking, broader perspectives, and creative problem-solving. Lower ceilings tend to promote focused, detail-oriented, precise work. This is one of many ways the physical space we occupy actively shapes how we think, not just how we feel. Architects who understand psychology can design spaces that actively support the kind of thinking their occupants need to do.`,
            },
            {
              id: `l13-q3`,
              format: `multiple-choice`,
              question: `Why is sustainable architecture increasingly important?`,
              options: [
                `Because sustainable materials are cheaper than traditional building materials`,
                `Because buildings consume around 40% of all energy worldwide — designing them to minimise environmental impact makes a significant difference`,
                `Because laws in most countries now require sustainable design for all new buildings`,
                `Because sustainable buildings look more impressive and signal technological advancement`,
              ],
              correctIndex: 1,
              explanation: `Buildings are among the largest consumers of energy on the planet — for heating, cooling, lighting, and construction. Sustainable architecture addresses this by designing buildings that work with their environment: using the sun's position for passive heating and cooling, natural ventilation instead of air conditioning, green roofs for insulation and water absorption. The potential impact is enormous: if every new building used significantly less energy, the cumulative effect on global energy use would be transformative.`,
            },
            {
              id: `l13-q4`,
              format: `true-false`,
              question: `Architecture shapes not just how a space looks but how the people inside it feel, think, and behave — making it one of the most influential art forms in everyday life.`,
              correctAnswer: true,
              explanation: `True. Unlike most art forms, architecture is unavoidable — you inhabit it. You can choose not to visit a gallery or watch a film, but you cannot choose not to be inside a building. And the qualities of that building — its ceiling height, its light, its sound, its connection to nature, its proportions — actively shape your psychology without you having to do anything. This pervasive, inescapable influence is what makes architecture one of the most powerful and most underappreciated art forms in human life.`,
            },
            {
              id: `l13-q5`,
              format: `fill-blank`,
              question: `Designing a building to use the sun's position for natural heating and cooling — rather than relying entirely on machines — is called ___ solar design.`,
              options: [
                `passive`,
                `active`,
                `direct`,
                `green`,
              ],
              correctIndex: 0,
              explanation: `Passive solar design uses the building's orientation, window placement, and thermal mass to collect and store solar heat in winter and block it in summer — without any mechanical systems. By facing windows toward the sun, using materials that absorb heat during the day and release it at night, and designing overhangs that shade summer sun while allowing lower winter sun to enter, passive solar buildings can maintain comfortable temperatures with dramatically less energy. It's architecture working with physics rather than against it.`,
            },
            {
              id: `l13-q6`,
              format: `multiple-choice`,
              question: `Why might a hospital architect care deeply about whether patients can see trees or a garden from their windows?`,
              options: [
                `Because gardens make hospitals look more welcoming from the outside to visiting families`,
                `Because patients with views of nature have been found to recover faster and need less pain medication — the environment actively affects healing`,
                `Because trees provide natural air filtration that reduces infection risk inside the hospital`,
                `Because natural views reduce the need for artwork on the walls, which lowers maintenance costs`,
              ],
              correctIndex: 1,
              explanation: `Research on hospital design has found that patients with views of nature — even a simple garden or group of trees — recover measurably faster and require less pain medication than patients looking at walls or other buildings. This is one of the most striking demonstrations of architecture's effect on human wellbeing: the physical environment doesn't just affect mood, it affects biological recovery. Hospital architects who understand this design with views, natural light, and connection to living things as therapeutic priorities — not decorative afterthoughts.`,
            },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Architecture is one of the few art forms that affects everyone regardless of whether they choose to engage with it. The design of schools affects how children learn. The design of prisons affects rehabilitation. The design of cities affects health, social connection, and quality of life. When we invest in thoughtful, humane, beautiful architecture — especially in public spaces — we invest in the wellbeing of everyone who lives inside it, whether they know it or not.`,
          familyAdventure: `Take an architecture walk in your neighbourhood or town. Look at three different buildings and discuss: What is this building trying to communicate? How does the outside make you feel — welcoming, imposing, interesting? Then go inside one building and notice: the ceiling height, the natural light, the materials. How does it feel inside compared to outside? Take photos of details that interest you. When you get home, look up who designed your most interesting local building and learn one thing about why they made the choices they did.`,
          creativePrompt: `Design your ideal learning space — a room built specifically for how you learn best. Consider: How big is it? What is the ceiling height? Where are the windows and how does natural light move through the day? What materials are on the walls and floor? How is the furniture arranged — open or private areas? What do you hear? Draw a floor plan (view from above) and a quick sketch of what it feels like inside. Then write five specific design choices and explain why you made each one. Think like an architect: every choice should serve the person who will be inside.`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that every room you walk into was designed by someone who made deliberate choices about how you would feel inside it. The ceiling height, the light, the way the space opens or closes — all of it is intentional. Muse hopes you walk through doors differently now, noticing the art that was always already there.`,
          badge: `space-designer`,
          badgeName: `Space Designer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L13;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L13.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L13] Loaded: "Architecture: Designing Spaces" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l13-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L13] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L13] One or more magazine assets missing'));
}
