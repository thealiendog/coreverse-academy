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
          headline: `40,000 Years of Wanting to Mark`,
          paragraphs: [
            `Forty thousand years ago, someone pressed pigment to a rock wall and made a handprint.`,
            `We don't know their name or language. We know they wanted to leave a mark. Art history is that impulse across all of human time.`,
          ],
          image: `/explorer-assets/creative-arts/l17-s1-handprint-to-now.png`,
          imageCaption: `One handprint, 40,000 years ago. The thread runs from there all the way to whatever\'s being made today.`,
          vocab: [
            { word: `art history`,  definition: `The study of art across time. How it has changed, what each era valued, what the work tells us about its makers.`,
              audioPrompt: `Art history isn't just memorizing names and dates, {name} — it's understanding a conversation that's been going on for 40,000 years. Every artist who ever made anything was answering questions earlier artists asked. Every artist today is doing the same. Knowing that conversation gives you a place inside it.` },
            { word: `mark-making`,  definition: `The human impulse to leave a sign of being here. Older than civilization itself.`,
              audioPrompt: `Mark-making is older than language, {name} — older than agriculture, older than cities. People have been pressing color to surfaces, carving into stone, leaving traces of themselves for tens of thousands of years. Whatever else art is, it begins here: the simple act of making a mark and saying "I was here."` },
            { word: `impulse`,      definition: `An urge that drives action. The urge to make art is one of humanity's oldest and most universal.`,
              audioPrompt: `An impulse is a feeling that moves you to do something, {name}. The impulse to make art seems to be wired into human beings. Every culture invented it. Every era kept inventing new forms. That consistency tells you something: making things isn't optional for humans. It's part of how we exist in the world.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Ancient Conventions Aren't Mistakes`,
          paragraphs: [
            `Ancient Egyptian art shows figures from multiple angles — head in profile, eyes facing forward. Important people drawn LARGER than less important.`,
            `This isn't a failure to draw realistically. It's a deliberate system that served Egyptian culture for 3,000 years. Different visual language, different purposes.`,
          ],
          image: `/explorer-assets/creative-arts/l17-s2-egyptian-conventions.png`,
          imageCaption: `Egyptian art looks "wrong" only if you assume it was trying to do what Renaissance art does. It wasn\'t.`,
          vocab: [
            { word: `convention`,         definition: `An agreed-upon rule in art. Not a mistake — a chosen system that served a culture's purposes.`,
              audioPrompt: `A convention isn't a mistake, {name} — it's a shared agreement about how to communicate. Egyptian artists followed strict conventions for 3,000 years that served their culture's specific purposes. Every era's art has them. The interesting question is: what does this convention reveal about what mattered to the people who made it?` },
            { word: `hierarchy of scale`, definition: `Bigger figures = more important. Ancient Egyptian and medieval visual logic.`,
              audioPrompt: `In ancient Egyptian art, {name}, the pharaoh is always the largest figure — not because he was physically larger, but because he was spiritually and politically more important. That's hierarchy of scale: size communicates importance rather than physical reality. Different visual language. Not worse — different.` },
            { word: `representation`,     definition: `How art depicts reality. Every era uses its own rules — none of them objectively "correct."`,
              audioPrompt: `Representation is how art shows the world, {name}. Egyptian art represented social rank. Medieval art represented religious meaning. Renaissance art represented optical reality. Each is a different choice about what's most important to show. There's no universally "correct" way to represent — only choices about what matters.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Renaissance and Baroque`,
          paragraphs: [
            `The Renaissance discovered PERSPECTIVE — a system for putting 3D space on a flat surface, exactly as the eye sees it. Leonardo, Michelangelo, Raphael.`,
            `The Baroque pushed drama further — Caravaggio's intense light, Bernini's marble that seems to move, Rembrandt's deep psychology.`,
          ],
          image: `/explorer-assets/creative-arts/l17-s3-renaissance-perspective.png`,
          imageCaption: `Perspective changed what painting could do. The Baroque took those tools and made them feel.`,
          vocab: [
            { word: `perspective`, definition: `A system for showing three-dimensional space on a flat surface. The Renaissance's revolutionary breakthrough.`,
              audioPrompt: `Mathematical perspective was a revolution, {name}. Before the Renaissance, Western art was largely flat and symbolic. After it, artists could create the convincing illusion of depth on a flat surface using converging lines and a vanishing point. It became the foundation that all subsequent Western art would build on — or rebel against.` },
            { word: `chiaroscuro`, definition: `Dramatic light and shadow contrast. Baroque's signature — light becomes story.`,
              audioPrompt: `Chiaroscuro is Italian for "light-dark," {name} — the technique of using strong contrast to create volume, drama, and depth. Caravaggio used it to create scenes that feel like spotlights in darkness. It's one of the most dramatic tools in all of painting — light becoming psychology, light becoming story.` },
            { word: `realism`,     definition: `Depicting the world as the eye actually sees it. The Renaissance's goal for centuries of Western art.`,
              audioPrompt: `Realism in art means depicting the world as it actually appears, {name} — and it became the Western art ideal for centuries after the Renaissance. Until 1874, when the Impressionists asked: what if reality is more about perception than precise rendering? That question opened everything that came after.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Impressionists' Rebellion`,
          paragraphs: [
            `In 1874, a group of French painters rejected by the official Salon held their own exhibition.`,
            `Critics mocked them as "Impressionists" for painting impressions rather than finished reality. They kept going. Their rebellion opened the door to all modern art.`,
          ],
          image: `/explorer-assets/creative-arts/l17-s4-impressionist-rebellion.png`,
          imageCaption: `Mocked, rejected, persistent. The Impressionists won the future every modern artist after them inherited.`,
          vocab: [
            { word: `Impressionism`, definition: `The 1874 movement that captured light, color, and momentary perception. Rejected, then revolutionary.`,
              audioPrompt: `The Impressionists weren't trying to be radicals, {name} — they were trying to capture how light actually behaves. The shimmer of water. The feeling of an afternoon. The way perception itself happens before the brain organizes it. They were doing something revolutionary: prioritizing experience over precise depiction. The whole modern era flows from that choice.` },
            { word: `rebellion`,     definition: `A deliberate break from what came before. How art moves forward — by refusing what's expected.`,
              audioPrompt: `Rebellion in art is rarely about destruction, {name} — it's about asking different questions. The Impressionists rebelled against the official Salon by exhibiting separately. Picasso rebelled against single-viewpoint painting. Each rebellion built something new while refusing what was assumed. That cycle is how art moves forward.` },
            { word: `modern art`,    definition: `Art from roughly the 1860s onward. Everything after the door Impressionism opened.`,
              audioPrompt: `Modern art is a specific period, {name} — roughly from the 1860s through the mid-20th century — when artists were systematically asking: what can art be that it hasn't been yet? Impressionism led to Post-Impressionism led to Cubism led to abstraction. Each movement built on and reacted against the one before. The momentum was extraordinary.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Modern and Contemporary`,
          paragraphs: [
            `After Impressionism: Cubism, abstraction, Surrealism, Abstract Expressionism. Each movement asked: what can art be that it hasn't been yet?`,
            `Today's contemporary art has no single style. Painting beside video beside installation. Engaged with race, identity, power, politics. Pluralism is the point.`,
          ],
          image: `/explorer-assets/creative-arts/l17-s5-contemporary-pluralism.png`,
          imageCaption: `No single style rules now. That openness is the defining quality of art being made today.`,
          vocab: [
            { word: `abstraction`,  definition: `Art that doesn't depict the visible world. Pure form, color, gesture — meaning without representation.`,
              audioPrompt: `Abstraction is the question "what if art didn't have to look like anything?" answered, {name}. Kandinsky believed colors and shapes alone could carry emotion. Pollock dripped paint in gestures that recorded movement itself. Abstraction took everything the Impressionists loosened and kept going — past the recognizable world into pure visual experience.` },
            { word: `pluralism`,    definition: `Many styles and approaches coexisting. Contemporary art's defining quality — no single dominant movement.`,
              audioPrompt: `Contemporary art has no single style, {name} — and that's the point. Pluralism means many approaches existing at once, each valid on its own terms. Painting beside performance, photography beside weaving. There's no ruling movement saying "this is what art looks like now." That freedom is exhilarating and sometimes disorienting.` },
            { word: `contemporary`, definition: `Art being made now. Engaged with today's questions — and accessible to anyone who shows up.`,
              audioPrompt: `Contemporary just means "of our time," {name} — art made now, by people living in the same world you are, responding to its questions and possibilities. The art of your time is always available to you in ways art history isn't. You don't need a museum ticket. You just need to look.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You're In the Conversation`,
          paragraphs: [
            `Art history isn't a list of names and dates. It's a 40,000-year conversation about what it means to be human.`,
            `Every artist you admire was part of it. Every piece of art you make is your own entry.`,
          ],
          image: `/explorer-assets/creative-arts/l17-s6-conversation-continues.png`,
          imageCaption: `The conversation never closed. The moment you make something, you\'re in it.`,
          vocab: [
            { word: `legacy`,     definition: `What one generation passes to the next. Every artist inherits a legacy — and adds to it.`,
              audioPrompt: `Legacy means what gets passed forward, {name} — what one generation hands to the next. Every artist inherits techniques, questions, traditions from those who came before. And every artist adds something. Yours might be small or large, but if you make anything, you're already adding to the legacy. The chain doesn't stop with you. It continues through you.` },
            { word: `continuity`, definition: `An unbroken chain. Art has had one for 40,000 years — and the next link is still being made.`,
              audioPrompt: `Continuity is the most extraordinary fact about art history, {name}. For 40,000 years, in every culture, in every time, humans have been making things. The chain has never broken. The questions evolve. The mediums change. But the fundamental act — making something to say something — has continued without pause. You're part of that continuity now.` },
            { word: `voice`,      definition: `Your own perspective added to the conversation. Already forming, even now.`,
              audioPrompt: `Voice is what you add to the conversation, {name} — your specific perspective, your particular way of seeing. It's already forming, even if you don't know it yet. The more you make, the clearer it becomes. The artists you admire weren't born with their voices fully formed. They found them by doing the work, again and again, until something distinctly theirs emerged.` },
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
    fetch('/explorer-assets/creative-arts/l17-s1-handprint-to-now.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-s2-egyptian-conventions.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-s3-renaissance-perspective.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-s4-impressionist-rebellion.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-s5-contemporary-pluralism.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l17-s6-conversation-continues.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L17] One or more magazine assets missing'));
}
