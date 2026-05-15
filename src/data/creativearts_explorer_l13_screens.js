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
          headline: `The Art You Can't Avoid`,
          paragraphs: [
            `You spend your entire life inside spaces that were designed by someone.`,
            `Every doorway, ceiling height, window placement was a deliberate choice. Those choices shape how you feel, how you move, how you think — usually without you realizing it.`,
          ],
          image: `/explorer-assets/creative-arts/l13-s1-art-you-cant-avoid.png`,
          imageCaption: `You can skip a gallery. You can't skip the buildings you live in. Architecture is the art form you can't opt out of.`,
          vocab: [
            { word: `architecture`, definition: `The art and science of designing buildings and spaces. One of the oldest creative disciplines.`,
              audioPrompt: `Architecture is the art form you cannot avoid, {name}. You can skip a painting in a gallery. You cannot skip the room you're standing in. Every space humans have ever built was shaped by someone's choices — and those choices are still affecting everyone who walks through them. Architecture is creative work that lasts centuries.` },
            { word: `design`,       definition: `Deliberate choices made to create something. The opposite of accident.`,
              audioPrompt: `Design means choices made on purpose, {name} — not accidents. Everything you see in a well-designed space was decided: this material, this height, this color, this proportion. Even the things that look casual were planned. Once you understand that, walking through the world becomes much more interesting.` },
            { word: `intentional`,  definition: `Done on purpose, with consideration. Every element of architecture was an intentional decision.`,
              audioPrompt: `Intentional is a word architects live by, {name}. Why is this hallway exactly this width? Why does light come through this window at this angle? Why this material on the floor? Every element was an intentional choice. The art is in understanding why each choice was made — and what it does to you.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Beauty + Function + Safety`,
          paragraphs: [
            `Architecture must be three things at once: beautiful, functional, and structurally safe.`,
            `A painting that's ugly has failed. A building that looks spectacular but collapses — or makes people miserable — has also failed. All three. Always.`,
          ],
          image: `/explorer-assets/creative-arts/l13-s2-three-pillars.png`,
          imageCaption: `Most arts only need to succeed at one thing. Architecture has to succeed at three at once. That's why it's so hard.`,
          vocab: [
            { word: `function`,   definition: `How well a building serves the people who use it. Beauty without function is sculpture, not architecture.`,
              audioPrompt: `A building that looks spectacular but makes its inhabitants miserable has failed, {name}. Architecture must be beautiful AND structurally sound AND actually work for the people inside it. Function means asking: how will people use this space? Where do they need light? Beauty without function is sculpture. Architecture requires both.` },
            { word: `structural`, definition: `Related to the system holding a building up — beams, walls, foundations, supports.`,
              audioPrompt: `Every building has a skeleton, {name} — a structural system that holds it up against gravity and weather and time. Stone arches. Steel frames. Reinforced concrete. The structure shapes everything else: what shapes are possible, how large spaces can be. Architecture's creative possibilities are always in dialogue with structural reality.` },
            { word: `aesthetic`,  definition: `Related to visual beauty and emotional response. How a building feels, not just what it does.`,
              audioPrompt: `Aesthetic is everything a building makes you feel beyond the practical, {name}. The quality of light in a cathedral. The way a building seems to grow from its landscape. The elegance of a staircase. These aren't accidents — they're choices. Great architecture makes you experience something: awe, calm, curiosity, belonging.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Space Affects You`,
          paragraphs: [
            `High ceilings encourage abstract, creative thinking. Low ceilings encourage focused detail work. Research confirms this.`,
            `Natural light improves mood and health. Hospital patients with views of nature recover faster and need less pain medication. Architecture isn't just décor — it shapes your biology.`,
          ],
          image: `/explorer-assets/creative-arts/l13-s3-ceiling-height-thinking.png`,
          imageCaption: `The same person thinks differently in different rooms. Architecture isn't background — it's shaping you constantly.`,
          vocab: [
            { word: `scale`,         definition: `The size of a space relative to the human body. Powerfully shapes how you feel inside it.`,
              audioPrompt: `Scale is how a space compares to your body, {name}. A cathedral ceiling makes you feel small against something vast. A low-ceilinged reading nook makes you feel enclosed and safe. You feel scale in your body before your brain registers it. It's one of architecture's most direct tools.` },
            { word: `natural light`, definition: `Sunlight that enters a building. Affects mood, alertness, and even physical health.`,
              audioPrompt: `Stand in a windowless room, {name}, then in one flooded with morning light. The difference is felt immediately — not just in seeing, but in mood, in energy, in the quality of the space itself. Natural light moves through the day, changes with the weather. Architects design around it the way painters design around composition.` },
            { word: `acoustics`,     definition: `How sound behaves in a space — echo, absorption, carry. Invisible architecture that you feel constantly.`,
              audioPrompt: `Have you ever been in a room with a harsh echo, {name} — where every sound multiplied until the noise became physical? That's poor acoustics. A concert hall uses curved surfaces to carry sound perfectly. A library uses soft materials to absorb it. Acoustics is invisible architecture — you can't see it, but you feel it constantly.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Buildings That Speak`,
          paragraphs: [
            `Great buildings communicate meaning through form.`,
            `The Taj Mahal's perfect symmetry says eternal love. The Pantheon's oculus connects the human to the infinite. Cathedral arches make you feel small before something vast. None of it is accidental.`,
          ],
          image: `/explorer-assets/creative-arts/l13-s4-oculus-meaning.png`,
          imageCaption: `A circle of sky in a 2,000-year-old ceiling. Architecture rarely makes meaning more direct than this.`,
          vocab: [
            { word: `symmetry`, definition: `Design where one side mirrors the other. Creates order, balance, formality, and grandeur.`,
              audioPrompt: `Stand in front of the Taj Mahal, {name}, and you're looking at perfect symmetry — the left side is the exact mirror of the right. This isn't accidental: it communicates eternity, transcendence, absolute order. Symmetrical buildings feel formal and monumental. Asymmetrical ones feel dynamic and human.` },
            { word: `form`,     definition: `The three-dimensional shape and presence of a building. Its silhouette against the sky.`,
              audioPrompt: `A building's form is its presence in the world, {name} — the shapes it creates against the sky, the way its mass sits on the land. The Sydney Opera House's sail-like shells are unmistakable. Fallingwater wraps itself into the landscape. Form is the first conversation a building has with the world.` },
            { word: `oculus`,   definition: `A circular opening at the top of a dome. The Pantheon's connects interior to sky — and human to infinite.`,
              audioPrompt: `Walk into the Pantheon in Rome, {name}, and look up: a perfect circle of open sky at the top of the dome, 30 feet across. That's the oculus. It's been there for nearly 2,000 years. Light moves across the interior throughout the day. It connects the human scale of the room to the infinite scale of the sky.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Working With Nature`,
          paragraphs: [
            `Buildings consume about 40% of all energy worldwide.`,
            `SUSTAINABLE ARCHITECTURE works WITH nature, not against it. Passive solar design. Green roofs. Natural ventilation. The most sustainable building uses its environment instead of fighting it.`,
          ],
          image: `/explorer-assets/creative-arts/l13-s5-sustainable-building.png`,
          imageCaption: `Plants on the roof. Sunlight as fuel. Wind as ventilation. The best sustainable design barely needs machines at all.`,
          vocab: [
            { word: `passive solar design`, definition: `Architecture that uses the sun's position to naturally heat and cool buildings — no mechanical systems required.`,
              audioPrompt: `Passive solar design is architecture thinking, {name} — using the sun's angle to naturally heat a building in winter and shade it in summer, without any mechanical system. South-facing windows. Deep overhangs. The right orientation, materials, and placement — and the building does what a furnace and air conditioner would otherwise do, for free.` },
            { word: `green roof`,           definition: `A roof covered with living plants and soil. Insulates, absorbs rainfall, reduces heat, creates habitat.`,
              audioPrompt: `A green roof is a living layer on top of a building, {name} — plants, soil, sometimes small trees — that does many things at once. Insulates. Absorbs rainfall. Reduces the urban heat island effect. Creates habitat. And it's beautiful. A neighborhood full of green roofs looks like the city is breathing.` },
            { word: `sustainable design`,   definition: `Designing buildings that minimize environmental impact across their entire lifecycle.`,
              audioPrompt: `Sustainable design asks a longer question, {name}: what happens to this building over its whole life? Where do the materials come from? How much energy will it use for decades? Buildings that ignore these questions leave a long shadow. Buildings that answer them thoughtfully become part of the solution.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Walking Differently Now`,
          paragraphs: [
            `You're surrounded by architecture every minute of every day. Schools, homes, shops, offices, libraries.`,
            `Now that you can see the design behind the spaces, you can never un-see it. Every room you walk into was designed by someone.`,
          ],
          image: `/explorer-assets/creative-arts/l13-s6-walking-differently.png`,
          imageCaption: `The buildings haven't changed. But now you can see them. That's the gift of an educated eye.`,
          vocab: [
            { word: `space`,     definition: `An enclosed or defined area shaped by architecture. The basic unit of architectural experience.`,
              audioPrompt: `Space in architecture is the actual thing being designed, {name} — not the walls themselves, but the volume of air and light enclosed by them. Architects think in terms of spaces: where they connect, where they separate, how they flow. The walls are just what defines the spaces. The spaces are what you actually live inside.` },
            { word: `inhabit`,   definition: `To live in or spend time in a place. What we all do, constantly, with architecture.`,
              audioPrompt: `To inhabit a space is to live inside it, {name} — and architecture is the only art form humans truly inhabit. You don't visit a building the way you visit a painting. You live in it. That's why every architectural decision matters so much. Each one shapes someone's daily experience of being alive.` },
            { word: `awareness`, definition: `Noticing what was always there. The gift of an educated eye — and the goal of this lesson.`,
              audioPrompt: `Awareness is the most useful gift this lesson can give you, {name}. The buildings around you haven't changed. But now you can see them. The ceiling height. The light. The proportions. The materials. The intentions behind every choice. Awareness multiplies the richness of ordinary days. That's the gift of an educated eye.` },
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
    fetch('/explorer-assets/creative-arts/l13-s1-art-you-cant-avoid.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-s2-three-pillars.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-s3-ceiling-height-thinking.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-s4-oculus-meaning.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-s5-sustainable-building.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l13-s6-walking-differently.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L13] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L13] One or more magazine assets missing'));
}
