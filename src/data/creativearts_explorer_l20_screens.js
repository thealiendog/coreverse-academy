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
          headline: `What Does Your Art Say About You?`,
          paragraphs: [
            `We've covered elements, color, history, craft. Now the deepest question.`,
            `What does YOUR art say about YOU? Not art in general — yours. Your specific identity isn't a limitation. It's the material.`,
          ],
          image: `/explorer-assets/creative-arts/l20-s1-art-and-identity.png`,
          imageCaption: `The deepest question in art isn't technical. It's personal. What does your work say about you?`,
          vocab: [
            { word: `expression`, definition: `Outward communication of inner experience. What art ultimately is for.`,
              audioPrompt: `Expression is what makes art different from everything else, {name} — it's the outward communication of something that started inside someone. A feeling, an idea, a question, a longing. The thing that was internal becomes external, and once it's external, other people can encounter it. That movement — from inside to outside — is what every artwork in history has done.` },
            { word: `identity`,   definition: `Who you are. Including everything you've come from — family, culture, history, experience.`,
              audioPrompt: `Identity is everything that has shaped you, {name} — your family, your culture, the places you've lived, the experiences you've had. People sometimes talk about identity as if it's a label. It's more than that. It's the whole layered, complicated, specific reality of who you actually are. And it's the most powerful raw material any artist will ever have access to.` },
            { word: `material`,   definition: `What art is made from. Your real life is your richest source.`,
              audioPrompt: `Material is what art is built from, {name} — and the most fertile material any artist has access to is their own real life. Not what you wish your life looked like. Not the generic version. The actual, specific, particular thing you've lived. That's where every great artist eventually arrives. It's where you can start right now.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Making Is Discovery`,
          paragraphs: [
            `Making art about something forces you to know it more clearly.`,
            `Try to write a poem about a feeling — you discover what you actually feel. Paint a place you love — you find out which details matter most. Creation is discovery, not just expression.`,
          ],
          image: `/explorer-assets/creative-arts/l20-s2-making-is-discovery.png`,
          imageCaption: `You don't always know what you think or feel until you've tried to make something that holds it.`,
          vocab: [
            { word: `self-knowledge`, definition: `Understanding of your own feelings, values, inner life. Something making art develops in you.`,
              audioPrompt: `Making art teaches you things about yourself you didn't know before you started, {name}. When you try to write a poem about a feeling, you discover what you actually feel — not the simple version, but the complicated real one. Art is a way of knowing from the inside out. It's one of the most honest forms of self-examination there is.` },
            { word: `discovery`,      definition: `Finding out something new through the act of making. What creation offers beyond expression.`,
              audioPrompt: `Creation is discovery, {name} — not just expression of something you already know, but exploration of something you don't yet understand. Artists consistently describe making work as a way of finding out: what do I think? What do I feel? What matters to me and why? You go in with one understanding and come out with another.` },
            { word: `authentic`,      definition: `True to your own experience and feelings. Not performed for an audience or shaped by what you think you should say.`,
              audioPrompt: `Authentic work rings differently, {name} — there's a quality to art made from real experience and genuine feeling that an audience recognizes even when they can't name it. It doesn't perform. It says what's actually true for the person who made it. Authenticity isn't a style. It's a commitment to telling the truth.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Your Specific Life Is the Material`,
          paragraphs: [
            `Your cultural background, family history, joys, losses — all of it is your material.`,
            `Kahlo painted her pain and her Mexican identity. Basquiat used his Haitian-American experience. The greatest artists work from where they actually stand.`,
          ],
          image: `/explorer-assets/creative-arts/l20-s3-life-as-material.png`,
          imageCaption: `Heritage. Family. Real experience. The specific things that shaped you are the strongest material you have access to.`,
          vocab: [
            { word: `raw material`, definition: `The source an artist draws from. For the greatest artists, it's almost always their own life.`,
              audioPrompt: `Your life is your raw material, {name} — everything you've experienced, everyone you've come from, every place you've belonged to or longed for. Kahlo used her pain and her Mexican identity. Basquiat used his experience of being Black and young in a white art world. What's particular to you is the richest material you have.` },
            { word: `heritage`,     definition: `What you inherit from family, culture, history. Fertile creative material — already inside you, waiting to be used.`,
              audioPrompt: `Heritage is something you inherit, {name} — the family you come from, the culture that shaped you, the history that came before you. People sometimes think of heritage as something fixed or finished. But for an artist, it's living material — full of stories, images, sounds, traditions, and questions you carry whether you know it or not. Every artist who has used their heritage as material has found it deeper than they expected.` },
            { word: `experience`,   definition: `What you've actually lived through. Always enough to begin with — even if it feels small or ordinary.`,
              audioPrompt: `Your experience is always enough to begin with, {name} — even if it feels small or ordinary or not yet dramatic. Some of the most beloved art ever made is about completely ordinary moments seen clearly: a meal, a window, a walk to school. The size of the experience matters less than the honesty of the looking. You already have the material. You always have.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Specificity Paradox`,
          paragraphs: [
            `Specificity is universal.`,
            `The MORE specific and true to your particular experience, the MORE other people recognize themselves in it. Your particular background isn't a niche. It's a depth.`,
          ],
          image: `/explorer-assets/creative-arts/l20-s4-specificity-paradox.png`,
          imageCaption: `One specific true detail reaches further than a thousand general ones. The paradox is real — and it's your superpower.`,
          vocab: [
            { word: `specificity`,   definition: `Being particular and precise. What paradoxically creates the most universal resonance.`,
              audioPrompt: `The more specific you are, {name}, the more universal your work becomes. Not "loss" but this particular loss. Not "a community" but this street, these people, this specific thing they said. The reader who has never been to your neighborhood will recognize the truth of a specific, honest portrait of it — because the specificity makes it real, and real things connect across distance.` },
            { word: `universality`,  definition: `Speaking to shared human experience. Reached through specificity, not generality.`,
              audioPrompt: `What reaches the most people, {name}, is almost never the most general statement — it's the most specific, honest one. The poem about one particular grandmother in one particular kitchen connects to people who never met her, in kitchens completely unlike the one described. Specificity and universality aren't opposites. The most specific thing you can say is often the most universal thing anyone has ever heard.` },
            { word: `depth`,         definition: `Substantial weight and richness. What your specific experience offers — not a limit, but a well.`,
              audioPrompt: `Your particular background is not a niche, {name} — it's a depth. People sometimes worry that their experience is too specific to interest anyone else, that they need to make it more general or more relatable. The opposite is true. The deeper you go into your specific experience, the more other people find something of themselves in what you make. Depth is what reaches them.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Finding Your Voice`,
          paragraphs: [
            `Voice cannot be forced. It EMERGES from sustained, honest making.`,
            `Don't ask "how do I find my voice?" Ask "what do I actually need to say?" Answer that honestly, and the voice follows.`,
          ],
          image: `/explorer-assets/creative-arts/l20-s5-voice-emerging.png`,
          imageCaption: `Voice isn't found. It emerges — slowly, through many honest works, revealing itself one piece at a time.`,
          vocab: [
            { word: `artistic voice`, definition: `The distinctive way you see and express things. The combination that makes work recognizably yours.`,
              audioPrompt: `Artistic voice is what makes Van Gogh's paintings impossible to mistake for anyone else's, {name} — or Basquiat's, or Kahlo's. It's the combination of what you're drawn to, how you use your medium, what you keep returning to. Voice isn't found. It emerges from making — slowly, through many works, through finding what feels most true.` },
            { word: `emerge`,         definition: `To develop gradually through a process. How voice forms — slowly, through making, not through deciding.`,
              audioPrompt: `Voice emerges, {name} — it isn't decided. You can't sit down and choose what your artistic voice will be. But you can make things, consistently and honestly, and notice what keeps appearing. What seems most truly yours rather than borrowed from someone you admire. These patterns are your voice developing. Making is the only way to let it emerge.` },
            { word: `imitation`,      definition: `Copying artists you love. A legitimate learning stage — but not a destination.`,
              audioPrompt: `Every artist begins by imitating, {name} — copying the artists you love is how you learn their techniques and understand how they solved problems. There's no shame in it. But imitation is a stage, not a destination. At some point, you stop trying to paint like your favorite artist and start finding what only you would paint. The imitation was never the point — it was the path.` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A Gift to Other People`,
          paragraphs: [
            `When you make something TRUE and share it, you give others permission to feel what they've been feeling alone.`,
            `Your most personal work is your most universal gift. The world has been waiting for your particular voice.`,
          ],
          image: `/explorer-assets/creative-arts/l20-s6-gift-and-meeting.png`,
          imageCaption: `The world has been waiting for your particular voice. Not someone else's. Yours.`,
          vocab: [
            { word: `connection`, definition: `The meeting point where an artwork and a viewer recognize each other. What art lives for.`,
              audioPrompt: `Connection is what happens when a work reaches you, {name} — when you read a poem and feel "yes, exactly that." That moment of recognition is what art lives for. The artist made something from their own experience. You encountered it and found something of yours inside it. Two people's inner lives briefly meeting through what one of them made.` },
            { word: `resonance`,  definition: `The quality of art that stays with the viewer. Echoes beyond the moment of encounter.`,
              audioPrompt: `Resonance is what stays, {name} — the quality of a work that follows you after you've left it. You finish the poem and you're still in it. You walk away from the painting and it's still with you three days later. Resonance happens when a work touches something deep and real — when the truth in it matches something the viewer has been carrying without words.` },
            { word: `gift`,       definition: `Art understood as something given to others — your specific truth, offered as a meeting place for theirs.`,
              audioPrompt: `Making something true is a gift, {name} — even if that's not how it started. When you write honestly about your experience, you give other people permission to feel what they've been feeling alone. The person who reads your poem and thinks "I didn't know anyone else felt this way" — you've given them something real. Your most personal work is your most universal gift.` },
          ],
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
    fetch('/explorer-assets/creative-arts/l20-s1-art-and-identity.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-s2-making-is-discovery.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-s3-life-as-material.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-s4-specificity-paradox.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-s5-voice-emerging.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l20-s6-gift-and-meeting.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L20] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L20] One or more magazine assets missing'));
}
