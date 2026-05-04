// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L18 — Famous Artists and Their Stories
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L18 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-18`,
      title:     `Famous Artists and Their Stories`,
      duration:  12,
      xpReward:  50,
      badge:     `art-scholar`,
      badgeName: `Art Scholar`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Something I want you to know before we start, {name}: the artists we call "great" were not superhuman. They were not born with a gift that ordinary people lack. They were people who burned with a need to create, who faced doubt, poverty, rejection, and heartbreak — and who kept going anyway. Behind every famous artwork is a human life full of struggle and surprising grace. Today we're going to meet some of those lives. Not just the work — the people who made it. I want you to see yourself in them. Because if you have the desire to create, you already have the most important thing they had.`,
          headline: `Famous Artists and Their Stories`,
          subtitle: `Behind every great artwork is a human life — full of doubt, passion, struggle, and surprising moments of grace. The greatest artists were not superhuman geniuses who effortlessly produced masterpieces. They were people who burned with a need to create, who faced enormous obstacles, who failed and kept going`,
          visual: `/explorer-assets/creative-arts/l18-welcome.png`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Frida Kahlo: Pain as Material`,
          paragraphs: [
            `Frida Kahlo (1907–1954) contracted polio at age 6, leaving one leg thinner than the other. At 18, she was in a near-fatal bus accident that broke her spine, collarbone, ribs, pelvis, and right leg in 11 places. She had 35 surgeries during her lifetime and spent months in full-body casts. She **began painting in bed** using a special easel, turning her physical experience directly into art. Her self-portraits — brutally honest, surrealistic, achingly personal — made her one of the most recognised artists in history. She said: *"I paint myself because I am so often alone and because I am the subject I know best."* Her life shows something essential: difficulty does not have to be an obstacle to making. It can be the material itself.`,
          ],
          image: `/explorer-assets/creative-arts/l18-magazine-1.png`,
          imageCaption: `Kahlo turned her lived experience directly into art — difficulty as material, not obstacle`,
          vocab: [
            { word: `self-portrait`, definition: `A work of art in which the artist depicts themselves — used by Kahlo to turn her own experience, body, and inner life directly into subject matter.`, audioPrompt: `Most of Frida Kahlo's paintings are self-portraits, {name} — she painted herself because, as she said, she was so often alone and was the subject she knew best. But her self-portraits aren't simply what she looked like. They're what she felt, what she survived, what she couldn't say any other way. She used herself as material because her experience was her most honest subject. That's a choice every artist can make: your own life, looked at with honesty, is always enough to begin with.` },
            { word: `surrealism`, definition: `An art movement that combined realistic imagery with dream-like, impossible, or symbolic elements — used to access the unconscious and express psychological or emotional truths.`, audioPrompt: `Surrealism takes the real world and does something to it, {name} — combines it with dream, symbol, impossibility, the logic of the unconscious. Kahlo's paintings are often called surrealist: her body split open, deer with her face, her heart outside her chest. These aren't meant to be realistic — they're meant to be true in a deeper way. Surrealism asks: what if the image showed you what it actually feels like, rather than what it actually looks like? Often, that's more honest.` },
            { word: `autobiography`, definition: `An artwork or written work that draws directly from the artist's own life, experiences, and identity as its primary material.`, audioPrompt: `Kahlo's entire body of work is essentially autobiography, {name} — her physical experience, her relationships, her cultural identity, her losses. She didn't separate her art from her life; she made her life into art. That move — using your own experience as primary material rather than as something to hide or overcome — is one of the most honest things an artist can do. It requires courage to look clearly at your own life and to trust that what you find there is worth making visible.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Vincent van Gogh: Creating Without Recognition`,
          paragraphs: [
            `Van Gogh (1853–1890) struggled with mental illness throughout his life and sold exactly **one painting** during his lifetime. He created over **2,000 artworks in just ten years** — paintings like *The Starry Night*, *Sunflowers*, and *Bedroom in Arles* are now among the most recognised works in human history. He wrote over 800 letters to his brother Theo, documenting his artistic process and inner life with extraordinary clarity. He said: *"If you hear a voice within you say you cannot paint, then by all means paint, and that voice will be silenced."* Van Gogh's story demonstrates something that might be the most important thing about creative work: **output and recognition are completely separate**. He created because he had to — not for validation, not for money, and not for fame he would never see.`,
          ],
          image: `/explorer-assets/creative-arts/l18-magazine-2.png`,
          imageCaption: `Van Gogh created thousands of works without recognition — output and external validation are completely separate`,
          vocab: [
            { word: `output`, definition: `The total volume of work an artist produces — which, in Van Gogh's case, shows that creative productivity and external recognition are completely independent of each other.`, audioPrompt: `Van Gogh sold one painting in his lifetime, {name}. He made over two thousand works. Those two facts together tell you something important: output and recognition are completely separate. He created because he had to — because the making was the point, not the reception. The Starry Night, Sunflowers, the Wheatfields: none of those were made for an audience that was watching. They were made because he was alive and needed to paint. That's a model worth holding onto.` },
            { word: `brushstroke`, definition: `A single movement of a paint-loaded brush across a surface — which, in Van Gogh's work, became thick, expressive, and individually visible, making the act of painting as present as its subject.`, audioPrompt: `Look closely at Van Gogh's paintings, {name}, and you see the brush: thick swirling strokes of paint that record his hand moving, his energy, his vision of how light moved in the sky or how the cypress trees turned. His brushstrokes weren't hidden — they were the subject, as much as the landscape. That expressiveness — letting the mark itself carry emotion — was revolutionary. It opened the door to every expressive, gestural art that followed.` },
            { word: `resilience`, definition: `The ability to continue creating through rejection, difficulty, and self-doubt — demonstrated by Van Gogh's sustained output despite a lifetime of struggle and very little external validation.`, audioPrompt: `Van Gogh was rejected his whole life, {name} — by galleries, by the art world, often by his own sense of what his work should be. And he kept going. Over 2,000 works in a decade. Painting in the asylum. Painting when he had nothing. He wrote: if you hear a voice within you say you cannot paint, then by all means paint, and that voice will be silenced. That's resilience — not the absence of doubt, but the decision to make something anyway.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Basquiat: From Street to Museum`,
          paragraphs: [
            `Jean-Michel Basquiat (1960–1988) was the son of a Haitian father and Puerto Rican mother, born in Brooklyn. At 17, he was homeless in Manhattan, writing graffiti under the tag **SAMO** and selling hand-painted postcards on the street. By 22, he was showing work at the Whitney Museum of American Art. By 24, he was on the cover of the New York Times Magazine. His work combined raw mark-making, text, figures, and urgent social commentary — processing **race, identity, and power in America** with visual energy unlike anything the art world had seen. He died at 27, but left a body of work that permanently transformed American art. His story is a direct answer to anyone who believes that where you start determines where you can go.`,
          ],
          image: `/explorer-assets/creative-arts/l18-magazine-3.png`,
          imageCaption: `Basquiat went from homeless graffiti artist to major museum shows in five years — where you start is not where you finish`,
          vocab: [
            { word: `raw`, definition: `Unpolished, immediate, and direct — a quality in Basquiat's work where the energy of the mark-making and the urgency of his ideas were more important than technical refinement.`, audioPrompt: `Basquiat's paintings feel urgent, {name} — raw in the best sense: immediate, unfiltered, packed with text and symbols and figures that feel scratched directly from his mind onto the canvas. He didn't sand down the edges or smooth out the energy. The rawness was the point — the directness of it, the aliveness. Raw doesn't mean careless. It means the work hasn't had its energy removed in the process of being polished. His work crackles because he kept the electricity in it.` },
            { word: `social commentary`, definition: `Art that responds to and critiques social issues — race, power, inequality, history — using visual language to say what politics and journalism sometimes can't.`, audioPrompt: `Basquiat's paintings were about power and race and America, {name} — not quietly, but directly. He painted crowns on Black figures that mainstream culture had rendered invisible. He painted over anatomy diagrams, interrupting the authority of medical knowledge with his own mark. His social commentary wasn't separate from his art: it was the art. He used visual language to say things the world needed to hear, in a form that refused to be ignored.` },
            { word: `mark-making`, definition: `The specific way an artist makes marks on a surface — which in Basquiat's work was scratchy, energetic, and text-integrated, becoming central to the meaning of the work.`, audioPrompt: `Basquiat started as a graffiti writer, {name} — someone who understood the power of a mark in public space. When he moved to canvas, he brought that sensibility with him: scratchy, urgent, combining text and image, crossing things out, adding and subtracting layers of meaning. His mark-making is immediately recognizable. It feels like a mind thinking out loud, too fast for any single image to hold. The marks are the work — not just a way of creating it.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Great Artists Teach Us`,
          paragraphs: [
            `Looking across the lives of great artists, certain patterns emerge. They **created regardless of recognition or reward** — they made things because they had to, not because someone was watching or applauding. They **used their specific experience** — their background, their struggles, their unique way of seeing — as raw material rather than treating it as an obstacle or a limitation. They **persisted through criticism and rejection** — most of the artists we now consider great were dismissed, mocked, or ignored during parts of their lives. They developed a **distinctive voice** that was unmistakably theirs. These are not superhuman traits. They are **practices** — ways of approaching creative work that anyone can choose. The artists we remember were not born different. They committed.`,
          ],
          image: `/explorer-assets/creative-arts/l18-magazine-4.png`,
          imageCaption: `Creating regardless of recognition, using your specific experience, persisting — these are practices, not innate gifts`,
          vocab: [
            { word: `persistence`, definition: `Continuing to create through rejection, difficulty, criticism, and self-doubt — which Kahlo, Van Gogh, and Basquiat all demonstrate as central to what makes a creative life.`, audioPrompt: `Every great artist in this lesson faced rejection, {name}. Kahlo was initially dismissed. Van Gogh was ignored his whole life. Basquiat was seen as an outsider before he was seen as a genius. What they shared was persistence: continuing to make things when no one was watching, when the reception was cold, when the work wasn't yet what they wanted it to be. Persistence isn't stubbornness. It's faith in the work — the belief that making is the point, whatever the response turns out to be.` },
            { word: `distinctive voice`, definition: `A way of making art that is unmistakably and recognizably your own — developed through sustained practice, not arrived at instantly.`, audioPrompt: `A distinctive voice in art is something you'd recognize anywhere, {name} — even without seeing a signature. Kahlo's surrealist self-examination. Van Gogh's swirling expressive brushwork. Basquiat's crowns and crossed-out words. None of these voices arrived fully formed. They developed through years of making, failing, discovering what was theirs and what was borrowed, and making more. Your voice is in everything you make right now. Paying attention to it — to what keeps appearing, what feels most true — is how it becomes stronger.` },
            { word: `commitment`, definition: `A sustained dedication to making art regardless of external conditions — what the lives of great artists demonstrate, and what separates those who make things from those who intend to.`, audioPrompt: `Great artists weren't born more talented, {name} — they committed. Committed to showing up, to making things when it was hard, to developing their vision over years rather than weeks. Commitment isn't dramatic. It doesn't look like anything from the outside, most of the time. It's just the decision, made again and again, to keep going. To start the next piece before you've decided what you think of the last one. The artists we remember made that decision consistently, for a long time.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `practice`,
              label: `🌟 A practice great artists share`,
              color: `#34D399`,
            },
            {
              id: `nottrue`,
              label: `🤔 A common belief about artistic greatness that isn't true`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l18-g1`,
              image: `l18-game-1.png`,
              label: `Drawing or writing about something you actually feel — happy, sad, confused, excited — instead of waiting until your feelings are tidy or "right."`,
              matchPhrase: `That's using your real inner life as creative material — exactly what the greatest artists do. Frida Kahlo painted what she actually experienced, not a polished version of it. Van Gogh wrote and painted his genuine inner state. The act of expressing something real, before you've figured out how to make it neat or acceptable, is often where the most honest and powerful creative work begins.`,
              correctMatch: `practice`,
            },
            {
              id: `l18-g2`,
              image: `l18-game-2.png`,
              label: `Continuing to make hundreds of works even when no one is buying, celebrating, or even noticing what you're creating.`,
              matchPhrase: `That's Van Gogh's practice exactly — over 2,000 works in ten years while selling essentially none. Output and recognition are separate. The work doesn't become more or less valuable based on who is watching. Creating consistently, regardless of external response, is one of the most important practices any artist can develop.`,
              correctMatch: `practice`,
            },
            {
              id: `l18-g3`,
              image: `l18-game-3.png`,
              label: `Believing that where an artist starts out — their background, their resources, their community — determines the ceiling of what their art can achieve.`,
              matchPhrase: `Basquiat was homeless at 17 and showing at the Whitney Museum at 22. Where you start is real — it shapes the obstacles you face — but it doesn't determine the ceiling. The artists we most admire came from every possible circumstance. What they shared wasn't resources or connections; it was commitment to making, regardless of where they began.`,
              correctMatch: `nottrue`,
            },
            {
              id: `l18-g4`,
              image: `l18-game-4.png`,
              label: `Thinking that true artistic greatness requires a special inborn talent that most people simply don't have and cannot develop through practice.`,
              matchPhrase: `Every great artist in history developed through sustained practice — not through innate genius that bypassed effort. Van Gogh taught himself to draw in his late twenties. Basquiat built his visual language on the street. Kahlo learned to paint during a long physical recovery. The practices great artists share — creating consistently, using real experience, persisting through rejection — are available to anyone who chooses them. Talent is developed, not delivered.`,
              correctMatch: `nottrue`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l18-q1`,
              format: `multiple-choice`,
              question: `What was remarkable about Frida Kahlo's artistic process?`,
              options: [
                `She learned to paint entirely from books without any formal teacher or mentor`,
                `She began painting from her hospital bed after a devastating accident and turned her physical experience directly into powerful self-portraits`,
                `She was the first woman admitted to the Mexican Academy of Fine Arts`,
                `She painted exclusively using colours she ground herself from natural materials`,
              ],
              correctIndex: 1,
              explanation: `After a catastrophic bus accident at 18 left her in months of enforced immobility, Kahlo began painting using a special easel mounted over her bed. The act of being unable to do anything else — combined with having her own body and experience as her only available subject — produced some of the most direct and searingly personal self-portraits in the history of art. Her story shows that the circumstances that seem most limiting can also be the ones that generate the most authentic work.`,
            },
            {
              id: `l18-q2`,
              format: `multiple-choice`,
              question: `What does Van Gogh's story suggest about the relationship between creating art and receiving recognition for it?`,
              options: [
                `Recognition is what gives art its meaning — without an audience, the work doesn't fully exist`,
                `Artists should stop creating if they receive no recognition after a reasonable period`,
                `Creating and receiving recognition are completely separate — a person can produce extraordinary work whether or not anyone notices during their lifetime`,
                `Van Gogh's story is unique — most artists who create consistently do receive recognition within their lifetimes`,
              ],
              correctIndex: 2,
              explanation: `Van Gogh created over 2,000 works and sold essentially none during his lifetime. The paintings we now consider among the most valuable and recognised in human history were made while he was largely ignored. His story is the most vivid possible demonstration that the value of the work and the extent of its recognition are two entirely different things. He created because he had to — not for money, not for validation, and not for the fame he would never see. That separation between making and being noticed is one of the most liberating truths in art.`,
            },
            {
              id: `l18-q3`,
              format: `multiple-choice`,
              question: `What do great artists have in common across history?`,
              options: [
                `They all received formal training at prestigious art schools or academies`,
                `They created regardless of recognition, used their specific experience as material, persisted through rejection, and developed a distinctive voice`,
                `They all worked alone without collaboration or influence from others`,
                `They became famous only after death — none were recognised or celebrated during their lifetime`,
              ],
              correctIndex: 1,
              explanation: `Looking across very different lives — Kahlo in Mexico, Van Gogh in the Netherlands, Basquiat in New York — certain patterns emerge that have nothing to do with formal training, wealth, or cultural background. They created consistently regardless of external response. They used their specific, personal experience as raw material rather than trying to make universally palatable work. They persisted through periods of rejection or neglect. And each developed a voice so distinctive that their work is instantly recognisable. These are practices — available to anyone who chooses them.`,
            },
            {
              id: `l18-q4`,
              format: `true-false`,
              question: `Van Gogh's story demonstrates that creative output and external recognition are completely separate — a person can create extraordinary work whether or not anyone notices during their lifetime.`,
              correctAnswer: true,
              explanation: `True. Van Gogh created more than 2,000 works — paintings, drawings, sketches — in just ten years, while selling essentially none and receiving little public acknowledgement. The works he produced are now among the most recognised and valued in human history. His story is not about misfortune; it's about the complete separability of making and being noticed. The work's value was not created by recognition — it existed independent of it. This is one of the most important and liberating things any creative person can understand.`,
            },
            {
              id: `l18-q5`,
              format: `fill-blank`,
              question: `The quality that makes an artist's work instantly recognisable as theirs — their unique combination of style, subject, and way of seeing — is called their artistic ___.`,
              options: [
                `voice`,
                `style`,
                `talent`,
                `method`,
              ],
              correctIndex: 0,
              explanation: `Artistic voice is the combination of everything that makes a particular artist's work distinctively theirs — not just their technique or style, but their subject matter, their perspective, their recurring concerns, and the quality of attention they bring to what they make. Van Gogh's voice is unmistakable. Kahlo's is unmistakable. Basquiat's is unmistakable. Voice develops through sustained making — not through talent alone — and it emerges most powerfully when an artist stops trying to sound like someone else and starts paying attention to what only they can see.`,
            },
            {
              id: `l18-q6`,
              format: `multiple-choice`,
              question: `Why do great artists' stories often feel inspiring even when their lives involved enormous hardship and rejection?`,
              options: [
                `Because their suffering is what made their art better — hardship is necessary for great creative work`,
                `Because their fame after death makes the earlier difficulties seem worthwhile in retrospect`,
                `Because they show that commitment to making — creating regardless of external response, using real experience as material, persisting — is available to anyone, not just those with talent or privilege`,
                `Because most people enjoy stories of failure that end in success`,
              ],
              correctIndex: 2,
              explanation: `The most inspiring thing about the lives of great artists is not the suffering or the eventual recognition — it's the practices. The way Kahlo painted through immobility. The way Van Gogh kept making regardless of silence. The way Basquiat turned street-level experience into museum-level art. These practices are not exclusive to geniuses or the specially gifted. They are available to anyone who commits to them. That's why the stories matter — not as proof that suffering leads to greatness, but as evidence that the act of creating, consistently and honestly, is within everyone's reach.`,
            },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Understanding that great artists developed their abilities through sustained practice — not through talent that bypassed effort — has implications far beyond art. Every field that requires skill, creativity, and persistence follows the same pattern. Scientists, musicians, writers, engineers, and athletes all develop through doing the work consistently, using their specific experience as material, and persisting through the periods when no one is noticing. The artist's story is also the story of anyone who commits to getting better at something that matters to them.`,
          familyAdventure: `Watch a documentary or film about an artist together. There are many available free online — search for documentaries about any artist from this lesson or one your family chooses. After watching, discuss: What surprised you about this person's life? What obstacles did they face? What drove them to keep creating when things were difficult? Is there anything from their story that applies to your own creative life — or any part of your life?`,
          creativePrompt: `Choose one artist you've never studied before — from any time period or culture. Research: their early life, the obstacles they faced, how they developed their style, and what they believed art was for. Then create one artwork directly inspired by their approach — try their technique, their colour palette, or their subject matter. Write a short paragraph connecting what you learned about their life to what you can see in their art. What did working in their style teach you about how they saw the world?`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that behind the most celebrated artworks in history were people who doubted themselves, who kept working anyway, who used whatever life gave them as their material. The practices they used — making consistently, expressing what's real, persisting — belong to you too. Muse is moved every time by how much courage it takes to create something true.`,
          badge: `art-scholar`,
          badgeName: `Art Scholar`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L18.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L18] Loaded: "Famous Artists and Their Stories" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l18-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L18] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L18] One or more magazine assets missing'));
}
