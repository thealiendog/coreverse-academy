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
          headline: `The Myth of Genius`,
          paragraphs: [
            `The artists we call "great" were not superhuman. They weren't born with a gift ordinary people lack.`,
            `They were people who burned with a need to create, who faced doubt, poverty, rejection — and kept going anyway.`,
          ],
          image: `/explorer-assets/creative-arts/l18-s1-myth-of-genius.png`,
          imageCaption: `Genius is a myth that makes great art feel out of reach. The truth is more demanding — and more available.`,
          vocab: [
            { word: `genius`,   definition: `A label sometimes used to imply innate gift. Usually misleading about how artists actually develop.`,
              audioPrompt: `Genius is a tricky word, {name} — it implies that some people are born able to do things others can't. That story makes for good legends but bad reality. The artists we call geniuses worked, failed, and worked more. The label sometimes hides the practice. Behind every genius is a person who showed up consistently.` },
            { word: `talent`,   definition: `The natural ability for something. Much less determinative than people assume.`,
              audioPrompt: `Talent is real, {name} — some people start with more natural ability in particular areas. But talent without practice fades fast. And practice without much talent often outperforms talent without practice. The artists we remember weren't necessarily the most naturally gifted of their generation. They were the most committed.` },
            { word: `practice`, definition: `Sustained, deliberate effort to develop a skill. What every great artist actually relies on.`,
              audioPrompt: `Practice is what builds an artist, {name} — not waiting for inspiration, not having the perfect setup, not being talented enough. Just showing up to the work. The hours don't always feel meaningful in the moment. But cumulatively, they're what every great artist's body of work was built from. There's no shortcut around them.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Frida Kahlo`,
          paragraphs: [
            `At 18, Kahlo survived a near-fatal bus accident. 35 surgeries. Months in casts.`,
            `She began painting in bed, turning her physical experience into art. "I paint myself because I am the subject I know best." Difficulty wasn't her obstacle. It was her material.`,
          ],
          image: `/explorer-assets/creative-arts/l18-s2-frida-kahlo.png`,
          imageCaption: `Kahlo didn\'t paint despite her body. She painted with it — her experience as her most honest subject.`,
          vocab: [
            { word: `self-portrait`, definition: `A work in which the artist depicts themselves. Kahlo's primary form — herself as subject.`,
              audioPrompt: `Most of Frida Kahlo's paintings are self-portraits, {name} — she painted herself because, as she said, she was so often alone and was the subject she knew best. Her self-portraits aren't just what she looked like. They're what she felt, what she survived, what she couldn't say any other way.` },
            { word: `surrealism`,    definition: `Combining realistic imagery with dream-like or impossible elements. Kahlo used it to express psychological truth.`,
              audioPrompt: `Surrealism takes the real world and does something to it, {name} — combines it with dream and symbol. Kahlo's body split open. Deer with her face. Her heart outside her chest. These aren't meant to be realistic. They're meant to be true in a deeper way — what it feels like, rather than what it looks like.` },
            { word: `autobiography`, definition: `Drawing directly from your own life as primary material. What Kahlo's entire body of work essentially is.`,
              audioPrompt: `Kahlo's entire body of work is essentially autobiography, {name} — her physical experience, her relationships, her cultural identity, her losses. She didn't separate her art from her life. She made her life into art. That move — using your own experience as primary material rather than as something to hide — requires real courage.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Vincent van Gogh`,
          paragraphs: [
            `Van Gogh sold exactly ONE painting in his lifetime. He created over 2,000 works.`,
            `The Starry Night. Sunflowers. The Bedroom. All made for an audience that wasn't watching. He created because he had to. Output and recognition are completely separate.`,
          ],
          image: `/explorer-assets/creative-arts/l18-s3-van-gogh.png`,
          imageCaption: `One sale. Two thousand works. The value of what he made never depended on who was paying attention.`,
          vocab: [
            { word: `output`,       definition: `The total volume of work an artist produces. Independent of recognition — Van Gogh proved this.`,
              audioPrompt: `Van Gogh sold one painting in his lifetime, {name}. He made over two thousand works. Those two facts together tell you something important: output and recognition are completely separate. He created because he had to — because the making was the point. That's a model worth holding onto.` },
            { word: `brushstroke`,  definition: `A single mark of a paint-loaded brush. Van Gogh made his thick, visible, expressive — the marks themselves became the subject.`,
              audioPrompt: `Look closely at Van Gogh's paintings, {name}, and you see the brush: thick swirling strokes of paint that record his hand moving, his energy, his vision. His brushstrokes weren't hidden. They were the subject, as much as the landscape. Letting the mark itself carry emotion was revolutionary.` },
            { word: `recognition`,  definition: `External acknowledgment. Completely separate from creative output — and not what makes work valuable.`,
              audioPrompt: `Recognition is what other people give your work, {name} — and Van Gogh's story is the clearest possible demonstration that it's separate from the work itself. The paintings we now consider masterpieces were made while he was largely ignored. The value of the work existed independent of recognition. That separation is one of the most liberating truths in art.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Jean-Michel Basquiat`,
          paragraphs: [
            `At 17, Basquiat was homeless in Manhattan, writing graffiti and selling postcards on the street.`,
            `At 22, his work was at the Whitney Museum. At 24, on the cover of the New York Times Magazine. Where you start doesn't determine where you finish.`,
          ],
          image: `/explorer-assets/creative-arts/l18-s4-basquiat.png`,
          imageCaption: `Five years. Street wall to museum wall. Starting place is real — but it doesn\'t set the ceiling.`,
          vocab: [
            { word: `graffiti`,         definition: `Street writing. Where Basquiat's career began, and a sensibility he brought to canvas.`,
              audioPrompt: `Basquiat started as a graffiti writer, {name} — someone who understood the power of a mark in public space, made without permission. When he moved to canvas, he brought that sensibility with him: urgent, direct, refusing to be ignored. The street was his first studio. It taught him things gallery training couldn't.` },
            { word: `social commentary`, definition: `Art that responds to and critiques social issues. Basquiat used painting to speak about race, power, and America.`,
              audioPrompt: `Basquiat's paintings were about power and race and America, {name} — not quietly, but directly. He painted crowns on Black figures that mainstream culture had rendered invisible. Social commentary wasn't separate from his art — it was the art. He used visual language to say things the world needed to hear.` },
            { word: `mark-making`,       definition: `The specific way an artist makes marks. Basquiat's was scratchy, urgent, text-integrated — central to the meaning.`,
              audioPrompt: `Basquiat's mark-making is immediately recognizable, {name} — scratchy, energetic, combining text and image, crossing things out, adding and subtracting layers of meaning. It feels like a mind thinking out loud. The marks are the work — not just a way of creating it.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What They All Share`,
          paragraphs: [
            `Across very different lives, the same patterns emerge.`,
            `They CREATED REGARDLESS of recognition. Used their SPECIFIC EXPERIENCE as material. PERSISTED through rejection. Developed a distinctive voice. These are practices, not gifts.`,
          ],
          image: `/explorer-assets/creative-arts/l18-s5-shared-practices.png`,
          imageCaption: `Different lives. Different eras. Same handful of practices. The practices are the part that\'s actually transferable.`,
          vocab: [
            { word: `persistence`,        definition: `Continuing to create through rejection, difficulty, and self-doubt. The common thread across great artistic lives.`,
              audioPrompt: `Every great artist faced rejection, {name}. Kahlo was initially dismissed. Van Gogh was ignored. Basquiat was seen as an outsider before he was seen as a genius. What they shared was persistence: continuing to make things when no one was watching. Persistence isn't stubbornness — it's faith in the work itself.` },
            { word: `distinctive voice`,  definition: `A way of making that is unmistakably your own. Developed through sustained practice — not arrived at instantly.`,
              audioPrompt: `A distinctive voice in art is something you'd recognize anywhere, {name}. Kahlo's surrealist self-examination. Van Gogh's swirling brushwork. Basquiat's crowns and crossed-out words. None of these voices arrived fully formed. They developed through years of making, failing, discovering what was theirs.` },
            { word: `commitment`,         definition: `Sustained dedication to making, regardless of external conditions. What separates those who make from those who intend to.`,
              audioPrompt: `Great artists weren't born more talented, {name} — they committed. To showing up. To making things when it was hard. To developing their vision over years rather than weeks. Commitment isn't dramatic. It doesn't look like anything from the outside. It's just the decision, made again and again, to keep going.` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `It's Available to You`,
          paragraphs: [
            `The artists we remember weren't born different. They committed.`,
            `Talent is developed, not delivered. Voice forms through sustained making. The practices great artists used are available to anyone who chooses them.`,
          ],
          image: `/explorer-assets/creative-arts/l18-s6-invitation.png`,
          imageCaption: `These lives aren\'t closed doors. They\'re open invitations. The practices belong to anyone who decides to use them.`,
          vocab: [
            { word: `agency`,     definition: `The power to act and make choices for yourself — including the choice to create something.`,
              audioPrompt: `Agency is the power to choose what you do, {name}. Every great artist exercised it. They didn't wait for permission or perfect conditions. They made the choice to create — not once, but every day, for years. Agency is what makes commitment possible. You have it. The question is what you'll do with it.` },
            { word: `discipline`, definition: `Doing the work consistently, especially when it's hard. The opposite of waiting for inspiration.`,
              audioPrompt: `Discipline is showing up to the work when you don't feel inspired, {name} — when the work isn't going well, when no one cares, when other things would be easier. Every great artist had discipline. Inspiration is wonderful when it arrives, but discipline is what builds the body of work that inspiration eventually has somewhere to land.` },
            { word: `invitation`, definition: `An opening. These lives extend one — the practices great artists used are not exclusive.`,
              audioPrompt: `The stories of Kahlo and Van Gogh and Basquiat aren't closed doors, {name} — they're invitations. To make things. To use your real experience. To persist when the response is silence. These practices aren't gated. They're not for the talented. They're for whoever decides to take them up. Including you. Especially you.` },
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
    fetch('/explorer-assets/creative-arts/l18-s1-myth-of-genius.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-s2-frida-kahlo.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-s3-van-gogh.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-s4-basquiat.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-s5-shared-practices.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l18-s6-invitation.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L18] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L18] One or more magazine assets missing'));
}
