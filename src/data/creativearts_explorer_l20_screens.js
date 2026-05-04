// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L20 — Art as Expression of Identity
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L20 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-20`,
      title:     `Art as Expression of Identity`,
      duration:  12,
      xpReward:  50,
      badge:     `creative-voice`,
      badgeName: `Creative Voice`,

      screens: [

        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}. We've reached the final lesson of our Creative Arts journey together, and I have to say — I've loved every step of it with you. We've explored elements and principles, color and composition, history and technique and craft. And now we arrive at the deepest question of all: what does your art say about you? Not art in general. Yours. Today we're talking about how your specific identity — your background, your stories, your joys and your losses — isn't a limitation on your creative work. It's the very material of it. The world has been waiting for your particular voice. Today we talk about how to use it.`,
          headline: `Art as Expression of Identity`,
          subtitle: `Who are you — really? What do you love? What angers you? What fills you with wonder? Art is one of the most powerful answers to these questions. Not because art is therapy, but because the act of creating forces you to know yourself more clearly — and gives others a way to meet you there`,
          visual: `/explorer-assets/creative-arts/l20-welcome.png`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Art as Self-Knowledge`,
          paragraphs: [
            `Making art about something **forces you to know it more clearly**. When you try to write a poem about a feeling, you discover what you actually feel — not what you're supposed to feel. When you paint a place you love, you discover which details matter most to you and why. When you design a character, you reveal your values through the choices you make for them. Artists consistently report that their creative work taught them things about themselves they didn't know before they made it. This is one of art's least talked about qualities: it is not just expression outward, it is **discovery inward**. You don't always know what you think or feel until you've tried to make something that holds it.`,
          ],
          image: `/explorer-assets/creative-arts/l20-magazine-1.png`,
          imageCaption: `Making art about something forces you to know it more clearly — creation is discovery, not just expression`,
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Identity as Artistic Material`,
          paragraphs: [
            `Your specific identity — your cultural background, your family history, your experiences of belonging and not belonging, your joys and your losses — is not a limitation on your art. **It is your art.** The most powerful creative work in history comes from artists who used their specific experience as raw material: Frida Kahlo's physical pain and Mexican identity. Basquiat's Haitian-American experience navigating a predominantly white art world. Langston Hughes' experience of the Harlem Renaissance. Toni Morrison's exploration of Black American history and memory. **Specificity is universal** — the more specific and true to a particular experience, the more other people recognise themselves in it. Your particular background is not a niche — it is a depth.`,
          ],
          image: `/explorer-assets/creative-arts/l20-magazine-2.png`,
          imageCaption: `Your specific experience is not a limitation — it is your material. Specificity is universal`,
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Finding Your Voice`,
          paragraphs: [
            `Your **artistic voice** is the way you see and express things — the combination of subject matter, style, aesthetic choices, and concerns that makes your work distinctively yours. Voice develops over time through: **making a lot of work** without censoring yourself, **studying the work of artists who move you**, experimenting with different mediums and approaches, paying attention to what you naturally gravitate toward, and having the **courage to make work that is genuinely yours** rather than imitative. Voice cannot be forced — it emerges from authentic making. The question is not *"how do I find my voice?"* but *"what do I actually need to say?"* Answer that question honestly, and the voice follows. Start making, and the voice reveals itself in the making.`,
          ],
          image: `/explorer-assets/creative-arts/l20-magazine-3.png`,
          imageCaption: `Voice cannot be forced — it emerges from making. Ask "what do I need to say?" and start from there`,
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Art as Gift and Connection`,
          paragraphs: [
            `When you make something **true** and share it, you give other people permission to feel what they've been feeling alone. The reader of a poem who thinks *"yes, exactly that — I didn't know how to say it"* — they feel less alone. The person who sees a painting of grief and cries — they were given something to cry into. The greatest art doesn't just express the artist's experience. It creates a **meeting place** where artist and audience recognise their shared humanity. Your most personal creative work is, paradoxically, your most universal gift. What you think is too specific, too personal, or too small to interest anyone else is often exactly what reaches people most deeply — because they recognise the truth in it, even through an experience very different from their own.`,
          ],
          image: `/explorer-assets/creative-arts/l20-magazine-4.png`,
          imageCaption: `Making something true creates a meeting place — your most personal work is your most universal gift`,
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `best`,
              label: `🎨 Art doing what it does best`,
              color: `#34D399`,
            },
            {
              id: `holdsback`,
              label: `⚠️ A habit that holds creative expression back`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l20-g1`,
              image: `l20-game-1.png`,
              label: `A young writer writing about a specific memory from their own childhood — not trying to make it universal, just trying to make it completely true.`,
              matchPhrase: `That's art using self-knowledge as its starting point — and it works because the more specific and true a piece of writing is, the more other people recognise themselves in it. The paradox of personal art is that what feels most particular often turns out to be most universal. Writing honestly about one specific memory is not a niche act — it's a gift to everyone who has a memory of their own.`,
              correctMatch: `best`,
            },
            {
              id: `l20-g2`,
              image: `l20-game-2.png`,
              label: `Writing a song or making a drawing about a tradition from your family — a meal you make together, a holiday you celebrate, a story your grandparent tells.`,
              matchPhrase: `That's using your specific identity as creative material — one of the most powerful things art can do. Your family's particular traditions, the specific flavour of your holidays, the exact words your grandparent uses — these details are not too small or too personal. They are the real stuff of life, and when expressed honestly, they invite others to think about their own family's particular version of the same human things.`,
              correctMatch: `best`,
            },
            {
              id: `l20-g3`,
              image: `l20-game-3.png`,
              label: `Waiting until you feel you have "something important to say" before starting to create — assuming that your everyday experience isn't interesting enough material.`,
              matchPhrase: `Artistic voice emerges from making, not from waiting. The idea that you need something "important" to say before you begin is one of the most effective ways to never begin at all. Everyday experience — a walk, a conversation, an object on a table, an ordinary feeling — is where art starts. You don't find your voice by thinking about it; you find it by making things and noticing what you naturally say.`,
              correctMatch: `holdsback`,
            },
            {
              id: `l20-g4`,
              image: `l20-game-4.png`,
              label: `Trying to make art that will appeal to everyone by keeping it general and safe — avoiding anything too personal in case not everyone relates to it.`,
              matchPhrase: `Art made to appeal to everyone usually reaches no one, because the specificity and truth that make art resonate have been smoothed away. The art that changes people is almost always the art that risked saying something personal and true, even uncomfortably so. Making work that is genuinely yours — even if not everyone relates — is how art becomes a gift: it gives others the courage to be specific and true in their own lives too.`,
              correctMatch: `holdsback`,
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l20-q1`,
              format: `multiple-choice`,
              question: `How does making art help with self-knowledge?`,
              options: [
                `Art requires research that teaches you facts about yourself`,
                `The act of making art about something forces you to know it more clearly — you discover what you actually feel, not what you're supposed to feel`,
                `Showing art to others provides feedback that helps you understand yourself better`,
                `Art keeps a record of who you were at different points in your life`,
              ],
              correctIndex: 1,
              explanation: `Making art about something requires you to know it — really know it — in order to represent it. When you try to write a poem about a feeling, you quickly discover that "I feel sad" is not enough; you have to find the specific texture of that sadness, its particular quality. That search is a form of self-knowledge that ordinary thinking doesn't always provide. Artists consistently report that their work taught them things about themselves they didn't know before they made it. Creation is discovery.`,
            },
            {
              id: `l20-q2`,
              format: `multiple-choice`,
              question: `Why is specificity in art actually universal?`,
              options: [
                `Because specific artwork is more technically impressive to create`,
                `The more specific and true to a particular experience, the more other people recognise their own humanity in it`,
                `Because audiences prefer detailed, precise depictions to vague or abstract ones`,
                `Specificity makes art more historically accurate and therefore more educational`,
              ],
              correctIndex: 1,
              explanation: `This is one of art's most surprising and beautiful paradoxes: the most specific work is often the most universal. A poem about one person's particular grief reaches readers who have never experienced that exact grief — because the specificity makes it real, and the realness allows other people to map their own experience onto it. Vague, generalised art about "feelings" tends to reach no one deeply precisely because it tries to reach everyone. Particularity is not a limitation — it is the mechanism of connection.`,
            },
            {
              id: `l20-q3`,
              format: `multiple-choice`,
              question: `How does artistic voice develop?`,
              options: [
                `By choosing one style early in your creative life and practising it exclusively`,
                `By studying the technical rules of every art form until you've mastered them completely`,
                `Through making a lot of work without censoring yourself, studying artists who move you, experimenting, and having the courage to make work that is genuinely yours`,
                `Voice is innate — you either have a distinctive voice or you don't`,
              ],
              correctIndex: 2,
              explanation: `Artistic voice is not found — it is developed, through sustained authentic making. It emerges when you stop trying to sound like your influences and start paying attention to what only you see and feel. This requires making a lot of work (to find what you naturally gravitate toward), studying artists who move you (to understand what resonates and why), experimenting (to discover what different approaches make possible), and courage (to make work that is genuinely yours even before you're confident in it). Voice is the residue of honest practice over time.`,
            },
            {
              id: `l20-q4`,
              format: `true-false`,
              question: `Your specific experience — your background, your history, your struggles, your joys — is not a limitation on your art. It is your most powerful creative material.`,
              correctAnswer: true,
              explanation: `True. The instinct to treat one's specific background as a limitation — "my experience is too particular, too small, too niche to be interesting to others" — is one of the most common and damaging creative misconceptions. The evidence from art history is overwhelming: the most specific and personally grounded work is consistently what reaches people most deeply. Frida Kahlo's very particular physical experience. Basquiat's very specific cultural navigation. Your very specific life. These are not limitations — they are the only material any artist ever actually has.`,
            },
            {
              id: `l20-q5`,
              format: `fill-blank`,
              question: `The paradox that the most ___ art is often the most universal — because other people recognise their own experience in it — is one of art's most beautiful truths.`,
              options: [
                `specific`,
                `personal`,
                `honest`,
                `vulnerable`,
              ],
              correctIndex: 0,
              explanation: `Specificity is universal — the more particular and true a piece of art is to one specific experience, the more other people are able to recognise their own humanity in it. This seems counterintuitive: surely something written for everyone reaches everyone? But art written for everyone tends to have the particularity sanded away — and it is particularity that creates the recognition. "Grief" reaches no one. "The way a room felt the day after" reaches everyone who has ever lost something.`,
            },
            {
              id: `l20-q6`,
              format: `multiple-choice`,
              question: `Why is sharing deeply personal creative work an act of generosity toward others?`,
              options: [
                `Because it gives others an example to follow when creating their own work`,
                `Because personal work shows more technical skill and gives others something to learn from`,
                `Because when you make something true and share it, you give others permission to feel what they've been feeling alone — your honesty creates a meeting place`,
                `Because sharing personal work invites feedback that helps others understand their own creativity`,
              ],
              correctIndex: 2,
              explanation: `Sharing personal creative work is generous because it does something for the audience that nothing else quite can: it makes them feel less alone. When a reader encounters a poem or a painting that names something they've felt but couldn't say, the recognition is profound — someone else has been there, has understood it well enough to make something of it, and has offered it back. Your most honest creative work is not self-indulgence; it is a gift — a meeting place where another person can bring what they've been carrying alone.`,
            },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Art made from personal identity and specific experience is not a recent phenomenon — it is the oldest art there is. Cave paintings were someone marking their particular presence: I was here. Every oral tradition passed down specific family and community stories. Folk art, ritual art, and craft traditions worldwide encode specific cultural identity in physical form. The idea that art must be "universal" to be valuable is a recent and somewhat narrow concept. Art that is specifically yours is how the world comes to understand what it means to be human from the inside of an experience different from its own.`,
          familyAdventure: `Hold a family art share where each person creates something from their own experience or identity and shares it — with the story behind it. It can be anything: a drawing, a written memory, a photograph, a song, a dish from your cultural heritage, a found object with meaning attached. After each person shares, the family responds not with critique but with connection: "This makes me think of..." or "The part that moved me most was..." This is art doing exactly what it does best.`,
          creativePrompt: `Create a piece of art about something true and personal — in any medium you choose: drawing, painting, collage, poem, short story, photograph, or mixed media. The subject: something from your own life that you want someone else to understand. Not your favourite colour or hobby — something real. A place that shaped you. A feeling you carry. A piece of your heritage. Something you've witnessed. Something you hope for. Make it honest. Make it specific. Then share it with one person and tell them what it means to you.`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You've now completed the entire Creative Arts journey — twenty lessons about the elements, history, craft, and meaning of creative expression. The world has been waiting for your particular voice — your specific eye, your specific hand, your specific way of seeing — and now you have the tools to share it. Muse has been delighted to walk every step of this path with you.`,
          badge: `creative-voice`,
          badgeName: `Creative Voice`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L20.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L20] Loaded: "Art as Expression of Identity" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l20-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L20] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L20] One or more magazine assets missing'));
}
