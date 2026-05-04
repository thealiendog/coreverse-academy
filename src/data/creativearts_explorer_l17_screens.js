// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L17 — The History of Art (Highlights)
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L17 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-17`,
      title:     `The History of Art (Highlights)`,
      duration:  12,
      xpReward:  50,
      badge:     `art-historian`,
      badgeName: `Art Historian`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Here's a thought that moves me every time, {name}: forty thousand years ago, somewhere in Europe, a person pressed their hand to a rock wall, blew pigment around it, and left a print. We don't know their name. We don't know their language or what they believed. But we know this: they wanted to leave a mark. That impulse — the need to make something, to say "I was here, I saw this, I felt this" — has never stopped. Art history is the unbroken story of that impulse across all of human time. Today we walk through it together. Ready?`,
          headline: `The History of Art (Highlights)`,
          subtitle: `40,000 years ago, someone pressed pigment to a rock wall and made a handprint. We don't know their name, their language, or what they believed — but we know they wanted to leave a mark. That impulse has never stopped. Art history is the story of that impulse across all of human time`,
          visual: `/explorer-assets/creative-arts/l17-welcome.png`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Ancient and Medieval Art`,
          paragraphs: [
            `Ancient Egyptian art followed **strict conventions for 3,000 years** — figures shown from multiple angles simultaneously (head in profile, eyes and shoulders facing forward), hierarchy of scale (important figures drawn larger than lesser ones), and flat, symbolic representation. This wasn't a failure to observe reality — it was a deliberate system designed to communicate specific meanings clearly and consistently. Ancient Greek art moved toward **idealising the human body**, pursuing mathematical proportions. Medieval European art was primarily **religious** — illuminated manuscripts, stained glass, and altarpieces designed to teach Bible stories to largely illiterate populations through images. Each style served its society's specific needs and beliefs — not one is more or less "correct" than another.`,
          ],
          image: `/explorer-assets/creative-arts/l17-magazine-1.png`,
          imageCaption: `Ancient Egyptian conventions weren't mistakes — they were a deliberate system serving specific cultural purposes`,
          vocab: [
            { word: `convention`, definition: `An agreed-upon rule or practice in art — like the ancient Egyptian system of showing figures from multiple angles simultaneously — that serves a specific cultural or communicative purpose.`, audioPrompt: `Ancient Egyptian art looks "wrong" only if you assume it was trying to do what Renaissance art does, {name}. It wasn't. Egyptian artists followed strict conventions — deliberate rules about how to represent people, rank, and meaning — that served their culture's specific purposes. A convention isn't a mistake. It's a shared agreement about how to communicate. Every era's art has them. The interesting question is: what does this convention reveal about what mattered to the people who made it?` },
            { word: `hierarchy of scale`, definition: `An artistic convention where more important figures are drawn larger than less important ones — used in ancient Egyptian and medieval art to communicate social and spiritual rank.`, audioPrompt: `In ancient Egyptian art, {name}, the pharaoh is always the largest figure in any scene — not because he was physically larger, but because he was spiritually and politically more important. That's hierarchy of scale: size communicates importance rather than physical reality. Medieval Christian art used the same system. It's a different visual language from the one we're used to — not worse, not cruder, but organized by different values and different purposes.` },
            { word: `illuminated manuscript`, definition: `A handwritten book decorated with intricate illustrations, gold, and color — produced by medieval monks to preserve and communicate religious stories and knowledge.`, audioPrompt: `Before printing, {name}, books were made by hand — and the most important ones were made extraordinary. Illuminated manuscripts are handwritten books decorated with intricate illustrations, gold leaf, vivid color, and patterns so detailed they seem impossible at the scale they were painted. Monks spent years on single pages. They were art objects as much as texts — the beauty of the book communicating the importance of what it contained. Some have survived almost a thousand years, still vivid, still astonishing.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Renaissance to Baroque`,
          paragraphs: [
            `The **Renaissance** (14th–17th century) saw a radical shift: art rediscovered the ancient Greek ideal, developed **mathematical perspective** — a system for representing three-dimensional space on a flat surface exactly as the eye perceives it — and moved toward depicting the world as it actually appears. Leonardo da Vinci, Michelangelo, and Raphael created works that still define Western artistic achievement. The **Baroque** period (17th century) pushed drama further — Caravaggio's intense, theatrical light and shadow, Bernini's swirling marble sculptures that seem to move, Rembrandt's deep psychological portraiture. These movements developed the technical vocabulary that all subsequent Western art would either build upon or **rebel against** — and both of those responses required knowing it first.`,
          ],
          image: `/explorer-assets/creative-arts/l17-magazine-2.png`,
          imageCaption: `Renaissance perspective changed everything — art now depicted the world as the eye actually perceives it`,
          vocab: [
            { word: `Renaissance`, definition: `A European cultural movement from the 14th to 17th centuries — characterized by renewed interest in classical learning, mathematical perspective, and the realistic depiction of the human body.`, audioPrompt: `Renaissance means "rebirth," {name} — and it was: a recovery of ancient Greek and Roman ideals, combined with new discoveries in mathematics and observation, that transformed art, science, and philosophy in Europe. Artists like Leonardo, Michelangelo, and Raphael created works that still define what many people think of when they think of great art. They developed techniques — perspective, sfumato, human anatomy — that art would build on and rebel against for the next five centuries.` },
            { word: `chiaroscuro`, definition: `An Italian word meaning "light-dark" — the technique of using strong contrast between light and shadow to create a sense of volume, drama, and depth in a painting.`, audioPrompt: `Chiaroscuro is Italian for "light-dark," {name} — and it's one of the most dramatic tools in all of painting. Caravaggio used it to create scenes that feel like spotlights in darkness: figures emerging from shadow with an almost theatrical intensity. Leonardo used it more subtly, blending light and shadow so gradually that the transitions become invisible. Both are chiaroscuro: using the contrast between light and dark to make form, space, and emotion feel real.` },
            { word: `Baroque`, definition: `An art movement of the 17th century characterized by dramatic light, intense emotion, movement, and sensory richness — a response to and elaboration of Renaissance restraint.`, audioPrompt: `If the Renaissance was the great calm, {name}, the Baroque was everything turned up. Caravaggio's knife-edge light and shadow. Bernini's marble that seems to breathe and move. Rembrandt's faces emerging from darkness like they're thinking thoughts you can almost hear. Baroque art is about drama, emotion, and the sensory experience of being in the world. It pushed past Renaissance idealism toward something rawer and more human. The psychological depth it unlocked shaped Western art for centuries.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Impressionism and Modern Art`,
          paragraphs: [
            `In 1874, a group of French painters rejected by the official Salon held their own exhibition. Critics mocked them as **"Impressionists"** — painting mere impressions rather than finished reality. Monet, Renoir, Degas, and Cassatt embraced the insult and **transformed art forever**. Rather than carefully rendered realistic scenes, they captured light, colour, and momentary perception. This rebellion opened the door to all modern art. Post-Impressionists Van Gogh, Gauguin, and Cézanne each took entirely different directions. Then came Picasso's Cubism — showing multiple viewpoints simultaneously — Kandinsky's pure abstraction, Dalí's Surrealism, and Pollock's Abstract Expressionism. Each new movement responded to the one before it: accepting some things, rejecting others, and asking *what can art be that it hasn't been yet?*`,
          ],
          image: `/explorer-assets/creative-arts/l17-magazine-3.png`,
          imageCaption: `The Impressionists were mocked — then changed art forever. Every modern movement follows from their rebellion`,
          vocab: [
            { word: `Impressionism`, definition: `A 19th-century French painting movement that captured light, color, and fleeting moments rather than carefully rendered realistic scenes — initially mocked, then recognized as transformative.`, audioPrompt: `In 1874, a group of French painters were rejected by the official art establishment, {name}, and held their own exhibition. Critics called them "Impressionists" as an insult — painting mere impressions rather than finished reality. Monet, Renoir, Degas embraced the name and kept working. What they were doing was revolutionary: capturing the quality of light in a moment, the shimmer of water, the feeling of an afternoon. They changed what painting could be. Every modern art movement follows from the door they kicked open.` },
            { word: `abstraction`, definition: `Art that departs from realistic representation — using shapes, colors, and forms that don't directly depict the visual world — to express ideas, emotions, or pure visual experience.`, audioPrompt: `Abstraction is the question "what if art didn't have to look like anything?" answered, {name}. Kandinsky believed colors and shapes alone could carry emotion without representing objects. Mondrian reduced painting to pure grids of color. Pollock dripped and poured paint in gestures that recorded movement itself. Abstraction took everything the Impressionists loosened about representation and kept going — past the recognizable world into pure visual experience. It still divides opinion, which might mean it's still doing something real.` },
            { word: `movement`, definition: `A group of artists working in a shared time and place who develop related ideas, techniques, and aesthetic goals — forming a recognizable approach that influences and responds to the culture around them.`, audioPrompt: `Art movements are conversations, {name} — artists responding to each other, to the world they're living in, and to the art that came before. Impressionism leads to Post-Impressionism leads to Cubism leads to abstraction. Each movement asks: what did the last one discover, and where can we go from there? Understanding movements helps you see art not as isolated individual objects but as an ongoing argument about what art should be — a conversation that's still happening.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Contemporary Art`,
          paragraphs: [
            `Contemporary art — roughly from 1970 to now — is defined by its **radical pluralism**: there is no single dominant style or movement. Contemporary art can be painting, sculpture, video, performance, installation, digital art, social practice, or anything else. It often engages directly with social and political questions. Artists like Kara Walker (race and history), Ai Weiwei (political power and freedom), Frida Kahlo (identity and body), and Banksy (consumerism and power) use art to **confront rather than decorate**. Contemporary art asks: *What is art for? Who gets to make it? Who gets to see it? Who does it serve?* These are not easy questions with comfortable answers — and that discomfort is often the point. Art that makes you think, not just feel, is still art.`,
          ],
          image: `/explorer-assets/creative-arts/l17-magazine-4.png`,
          imageCaption: `Contemporary art is defined by pluralism — any medium, any subject, and questions that confront rather than comfort`,
          vocab: [
            { word: `pluralism`, definition: `The coexistence of many different styles, mediums, and approaches in contemporary art — with no single dominant movement or aesthetic defining what art should be.`, audioPrompt: `Contemporary art has no single style, {name} — and that's the point. Pluralism means many approaches existing at once, each valid on its own terms: painting beside performance, photography beside weaving, installation beside video. There's no ruling movement saying "this is what art looks like now." That freedom is exhilarating and also sometimes disorienting. But it means the field is genuinely open — to new mediums, new voices, new questions. More than any previous era, contemporary art belongs to whoever shows up to make it.` },
            { word: `installation`, definition: `A form of contemporary art that creates an immersive environment or experience in a space — often site-specific, three-dimensional, and designed to be entered and moved through.`, audioPrompt: `Installation art creates a space you walk into, {name} — not an object you look at from outside, but an environment that surrounds you. A room filled with hanging light bulbs. A floor covered in sunflower seeds. A tunnel of mirrors. The experience of the work is inseparable from your body moving through it, the scale of it, the way it transforms your perception of space. It's one of contemporary art's most direct ways of making the viewer part of the work rather than just its audience.` },
            { word: `contemporary`, definition: `Belonging to or reflecting the present time — in art, referring to work made from approximately 1970 onward, defined by diversity of medium, subject matter, and approach.`, audioPrompt: `Contemporary just means "of our time," {name} — art made now, by people living in the same world you are, responding to its questions, pressures, and possibilities. What makes contemporary art distinctive is how wide it is: any medium, any subject, any approach can be contemporary art if it's engaging with real questions seriously. The art of your time is always available to you in ways art history isn't. You don't need a museum ticket. You just need to look.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `works`,
              label: `🎨 This is how art movements actually work`,
              color: `#34D399`,
            },
            {
              id: `misunderstands`,
              label: `🤔 A common misunderstanding about art history`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l17-g1`,
              image: `l17-game-1.png`,
              label: `A Renaissance artist using vanishing points and a horizon line to make a flat painting appear to show real three-dimensional space.`,
              matchPhrase: `That's mathematical perspective — one of the most significant developments in the history of Western art. Before the Renaissance, flat, symbolic representation was the norm. The system of converging lines and a single vanishing point allowed artists to create the convincing illusion of depth on a flat surface for the first time — and it changed how humans depicted and understood the visible world.`,
              correctMatch: `works`,
            },
            {
              id: `l17-g2`,
              image: `l17-game-2.png`,
              label: `A group of painters who were publicly mocked and rejected for their style deciding to keep exhibiting their work anyway — and eventually changing art forever.`,
              matchPhrase: `That's exactly what the Impressionists did. Rejected by the official Salon, they organised their own exhibition. Critics gave them the name "Impressionists" as a mockery — and they kept it. The lesson of their story isn't that every rejected work is great; it's that new ways of seeing are almost always uncomfortable before they become obvious. Persistence in the face of genuine hostility is part of how art history moves forward.`,
              correctMatch: `works`,
            },
            {
              id: `l17-g3`,
              image: `l17-game-3.png`,
              label: `Thinking that ancient Egyptian paintings with flat, sideways-facing figures were just mistakes made by artists who hadn't yet learned how to draw realistically.`,
              matchPhrase: `Ancient Egyptian art followed a deliberate, sophisticated visual system that served specific cultural and religious purposes — maintained consistently for 3,000 years. Showing a figure's head in profile while the shoulders face forward was not a failure of observation; it was a choice about how to communicate clearly across time. Judging it by Renaissance standards of realism misses the point of what it was doing and why.`,
              correctMatch: `misunderstands`,
            },
            {
              id: `l17-g4`,
              image: `l17-game-4.png`,
              label: `Assuming that contemporary art has no logic or standards — that because it can be "anything," there's nothing meaningful to understand about it.`,
              matchPhrase: `Contemporary art's radical pluralism doesn't mean it's without logic — it means the logic is about questions, not style. Contemporary art is often deeply engaged with specific social, political, and philosophical questions, and understanding those questions is what makes the work legible. "It can be anything" doesn't mean it can be understood without thought — it means the frame for understanding it has shifted from "does it look like something?" to "what is it asking?"`,
              correctMatch: `misunderstands`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l17-q1`,
              format: `multiple-choice`,
              question: `What revolutionary development did Renaissance art introduce?`,
              options: [
                `The use of colour for emotional expression rather than realistic representation`,
                `Mathematical perspective — a system for representing three-dimensional space on a flat surface as the eye actually perceives it`,
                `Abstract and non-representational imagery`,
                `Religious themes and symbolic meaning in painting`,
              ],
              correctIndex: 1,
              explanation: `Mathematical perspective — the system of vanishing points, horizon lines, and converging parallel lines — allowed Renaissance artists to create convincing three-dimensional depth on a flat surface for the first time. Before this, Western art used flat, symbolic, or hierarchical representation. After it, artists could depict space and volume with optical accuracy. This technical breakthrough transformed painting and became the foundation that all subsequent Western art built upon — or later rebelled against.`,
            },
            {
              id: `l17-q2`,
              format: `multiple-choice`,
              question: `What did the Impressionists do that was so radical at the time?`,
              options: [
                `They painted outdoors for the first time in art history`,
                `They refused to depict any religious subjects`,
                `They captured light, colour, and momentary perception rather than carefully rendered realistic scenes`,
                `They used completely unrealistic colours purely to express emotion`,
              ],
              correctIndex: 2,
              explanation: `The Impressionists prioritised the immediate sensory experience of a scene — how light changed, how colour shimmered, the feeling of a moment — over careful, detailed realistic depiction. This was deeply controversial at the time because it broke from centuries of European academic painting tradition. Their loose brushwork, visible marks, and unfinished-looking surfaces were seen as lazy or incompetent. We now understand they were doing something entirely intentional: capturing perception rather than fact.`,
            },
            {
              id: `l17-q3`,
              format: `multiple-choice`,
              question: `How is contemporary art different from earlier art movements?`,
              options: [
                `It uses only digital and technological media`,
                `It focuses exclusively on abstract rather than representational imagery`,
                `It is defined by radical pluralism — any medium, any subject, any style — and often engages directly with social and political questions`,
                `Contemporary artists reject all techniques developed before 1970`,
              ],
              correctIndex: 2,
              explanation: `Contemporary art's defining characteristic is that there is no single defining characteristic. Unlike the Renaissance (perspective, humanism), Impressionism (light, perception), or Cubism (multiple viewpoints), contemporary art has no shared style — only a shared set of questions. What is art for? Who makes it? Who sees it? Who does it serve? This pluralism is both liberating and disorienting: without a shared style, the frame for understanding a work must come from understanding what it is asking, not what it looks like.`,
            },
            {
              id: `l17-q4`,
              format: `true-false`,
              question: `Ancient Egyptian artists deliberately showed figures in a specific way — not because they lacked the skill to draw realistically, but because their style served specific cultural and religious purposes.`,
              correctAnswer: true,
              explanation: `True. Ancient Egyptian art followed a sophisticated, intentional visual system maintained with extraordinary consistency for 3,000 years. Showing a head in profile while keeping shoulders facing front, or making pharaohs larger than priests, were not failures of observation — they were deliberate choices about how to communicate meaning clearly and hierarchically. Judging these choices as primitive or mistaken is to misunderstand what they were trying to do. Every artistic tradition has its own internal logic, and understanding that logic is what makes it legible.`,
            },
            {
              id: `l17-q5`,
              format: `fill-blank`,
              question: `The movement that began when French painters rejected by the official Salon held their own exhibition and painted light and momentary perception was called ___.`,
              options: [
                `Impressionism`,
                `Cubism`,
                `Surrealism`,
                `Baroque`,
              ],
              correctIndex: 0,
              explanation: `Impressionism began in 1874 when a group of painters — including Monet, Renoir, Degas, and Cassatt — held their own exhibition after being rejected by the official French Salon. A critic mockingly called their work "impressionist" — claiming they painted only vague impressions rather than finished reality. They adopted the name and kept exhibiting. Their focus on light, colour, and immediate perception rather than careful realistic depiction transformed the trajectory of Western art and opened the door to every modern movement that followed.`,
            },
            {
              id: `l17-q6`,
              format: `multiple-choice`,
              question: `Why did artists in each historical period develop new styles rather than simply continuing what came before?`,
              options: [
                `Because artists in each period lacked access to the technical knowledge of earlier periods`,
                `Because art movements are driven by fashion — people simply get tired of looking at the same thing`,
                `Because each movement responded to its specific historical moment — new ideas, new technologies, new social conditions, and new questions about what art could or should do`,
                `Because patrons and collectors stopped paying for older styles once they went out of fashion`,
              ],
              correctIndex: 2,
              explanation: `Art movements don't emerge randomly — each is a response to specific historical conditions. Renaissance perspective responded to a renewed interest in classical learning and human observation. Impressionism responded to photography (which could now capture reality mechanically) by asking what painting could do that photography couldn't. Contemporary pluralism responds to globalisation and the collapse of any single dominant cultural narrative. The history of art is the history of humans asking, in each new moment: what is this for, and what can it do that nothing else can?`,
            },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Art history is not just a list of past styles — it's a live conversation that contemporary artists are actively continuing. Every artist today is responding to, building on, or deliberately rejecting what came before. When you understand the history, you understand the conversation — and you can see where each new work fits within it. Art history is the context that makes contemporary art legible, and the story that shows why making things has always mattered to human beings.`,
          familyAdventure: `Do a family art museum visit together — in person if possible, or using a free virtual tour from a major museum (most of the world's greatest museums offer these online). Before you go, each person picks one movement from this lesson to focus on. During the visit, find at least one artwork from your chosen movement and look at it for longer than feels comfortable — at least five minutes. Notice what you see on second and third look that you missed at first. Share what you found with each other afterward.`,
          creativePrompt: `Choose one art movement from this lesson. Find three specific artworks from that movement online — look at each one for at least two minutes. For each: write what you see, what emotion or idea it communicates to you, and one specific intentional choice the artist made (a colour decision, a composition choice, a technique). Then create a small artwork of your own inspired by that movement — your own response to the style. What did you discover about that movement by trying to work in it?`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that art history is not a list of names and dates — it's a 40,000-year conversation about what it means to be human, conducted in paint and stone and light. Every artist you'll ever admire was part of that conversation. And every piece of art you make is your own entry into it. Muse finds that thought extraordinarily beautiful.`,
          badge: `art-historian`,
          badgeName: `Art Historian`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L17.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L17] Loaded: "The History of Art (Highlights)" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l17-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L17] One or more magazine assets missing'));
}
