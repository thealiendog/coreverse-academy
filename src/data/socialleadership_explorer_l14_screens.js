// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L14 — Body Language and Non-Verbal Communication
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L14 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-14`,
      title:     `Body Language and Non-Verbal Communication`,
      duration:  12,
      xpReward:  50,
      badge:     `body-language-reader`,
      badgeName: `Body Language Reader`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `I want you to try something, {name}: without saying a word, try to look confident. Now try to look like you don't care. Now try to look like you're genuinely interested in someone. Notice what your body did. That's the thing about non-verbal communication — we do it constantly, whether we intend to or not. Your posture, your eye contact, how you use your hands, whether you lean in or away — people are reading all of it. Today we're going to look at what your body says without words, and how to make sure it's saying what you actually mean.`,
          headline: `Body Language and Non-Verbal Communication`,
          subtitle: `What you say with your body often speaks louder than the words you choose`,
          visual: `/explorer-assets/leadership/l14-welcome.png`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Communication Beyond Words`,
          paragraphs: [
            `Long before humans had complex language, we communicated through expression, posture, and tone.`,
            `That ancient system is still running. Every time you walk into a room, sit down across from someone, or try to explain something — your body is already speaking.`,
          ],
          image: `/explorer-assets/leadership/l14-s1-beyond-words.png`,
          imageCaption: `Your body started communicating before you said hello. People have been reading you the whole time.`,
          vocab: [
            { word: `nonverbal`,  definition: `All the ways we communicate without words. Expression, posture, gesture, eye contact, tone.`,
              audioPrompt: `Nonverbal communication never goes offline, {name}. The moment you walk into a room, people are already reading you. Your posture, your expression, the pace you move at — all of it carries information before a word is spoken. Great leaders learn to use that channel intentionally, not just let it run on autopilot.` },
            { word: `expression`, definition: `What your face communicates. One of the most powerful and most automatically read forms of nonverbal communication.`,
              audioPrompt: `Your face is one of the most honest channels of communication you have, {name}. People read it faster than conscious thought — and they often trust it more than your words. When your expression and your words don't match, people believe the expression. Every time.` },
            { word: `posture`,    definition: `How you hold your body — upright and open, or closed and hunched. Speaks before your voice does.`,
              audioPrompt: `Posture speaks first, {name}. Before you say a word, how you hold yourself tells people whether you feel confident, uncertain, engaged, or disconnected. The good news: you can change your posture deliberately. And when you do, it changes not just how you look — it changes how you feel.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `People Read Faster Than Words`,
          paragraphs: [
            `Research is clear: in emotional or relational conversations, HOW you say something carries far more weight than the words.`,
            `People process nonverbal signals faster than conscious thought. Which is why someone can say "I'm fine" and everyone in the room knows they're not.`,
          ],
          image: `/explorer-assets/leadership/l14-s2-body-speaks-louder.png`,
          imageCaption: `When the words and the body disagree, people always trust the body. They're not even doing it consciously — it just happens.`,
          vocab: [
            { word: `tone`,          definition: `The feeling carried by your voice. Heard before — and often louder than — the words it carries.`,
              audioPrompt: `Tone is what your voice carries underneath the words, {name}. Warm, sharp, bored, present — the listener picks all of it up automatically. You can say the kindest words in a cold tone and the message lands cold. Tone is doing constant work whether you notice it or not.` },
            { word: `congruence`,    definition: `When words and body language match. What makes a message land believably — and what fakes can't manufacture.`,
              audioPrompt: `Congruence is when everything in your communication agrees, {name} — your words, your tone, your face, your body all telling the same story. When they're aligned, people trust you instantly. When they're not, people sense something is off even if they can't say what. That sense is them detecting incongruence.` },
            { word: `mixed signals`, definition: `When words say one thing and body says another. People believe the body — every time.`,
              audioPrompt: `Mixed signals are when your words and your body don't match, {name}. "I'm fine" said with a tight jaw and a tense face. "I'm not upset" said while turning away. Every time those signals conflict, people trust what they see over what they hear. Their brains are wired to. Knowing that helps you make sure both channels are saying the same thing.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Read Clusters, Not Single Signals`,
          paragraphs: [
            `People often misread body language by interpreting single gestures alone.`,
            `Crossed arms isn't always defensive — could be cold, or just comfortable. Read CLUSTERS: multiple signals together pointing the same direction. And always with CONTEXT.`,
          ],
          image: `/explorer-assets/leadership/l14-s3-read-clusters.png`,
          imageCaption: `One signal is ambiguous. Three or four pointing the same direction is real information.`,
          vocab: [
            { word: `cluster`, definition: `Multiple body language signals read together. The accurate way to interpret what someone is actually communicating.`,
              audioPrompt: `A cluster is when several signals point the same direction, {name}. Crossed arms could mean anything alone. But crossed arms, a flat expression, leaning back, and avoiding eye contact together? That's a clear picture. Read the cluster — not the single gesture — and your reading will almost always be more accurate.` },
            { word: `context`, definition: `The situation around a moment. Without it, body language can mean almost anything.`,
              audioPrompt: `Context changes everything, {name}. The same body language in a job interview means something completely different than at a family dinner. Before you read someone's signals, ask: what's the situation? What happened just before? What's the relationship? Context is the frame that makes the picture make sense.` },
            { word: `misread`, definition: `Interpreting body language incorrectly. What happens when signals are read in isolation or without context.`,
              audioPrompt: `Misreading body language causes real misunderstandings, {name}. You assume someone's unfriendly because they crossed their arms — but they were just cold. You think someone agrees because they're nodding — but they're just following along. Reading clusters, staying curious, and asking when unsure are all habits that protect you from misreading people.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Body Shapes Your Mind`,
          paragraphs: [
            `Here's something remarkable: your body language doesn't just communicate to others. It communicates to YOU.`,
            `Standing tall makes you feel more confident. Slouching reinforces uncertainty. Before something hard, adjust your posture first. Your body is already part of your preparation.`,
          ],
          image: `/explorer-assets/leadership/l14-s4-body-shapes-mind.png`,
          imageCaption: `Your body and mind are in constant conversation. Most people only listen one direction. Both directions work.`,
          vocab: [
            { word: `feedback loop`, definition: `The way your body's signals travel back to affect your mental state. Standing tall makes you feel more confident — which reinforces the posture.`,
              audioPrompt: `Your body is in constant conversation with your mind, {name}. You slump and feel less capable. You stand tall and feel more ready. That loop works in both directions — which means you have more control over your mental state than you might think. Your next move before something hard? Adjust your posture first.` },
            { word: `prepare`,       definition: `Using your body intentionally before a challenge. Adjusting posture, breathing, and physical state to help your mind.`,
              audioPrompt: `Before something difficult, most people try to calm their thoughts, {name}. But your body is faster. Stand up straight. Open your posture. Take a slow breath. Those physical actions change your mental state — often faster than telling yourself to feel confident ever could. Use your body to prepare your mind.` },
            { word: `confidence`,    definition: `A state of inner assurance. Reinforced or undermined by how you physically hold yourself.`,
              audioPrompt: `Confidence isn't just a feeling, {name} — it's something your body participates in. Standing tall, opening your chest, breathing steadily — these don't just signal confidence to others. They help create it in you. Your body and mind are connected. Use that connection on purpose.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Open Signals Connection`,
          paragraphs: [
            `Open, engaged body language looks the same across most situations.`,
            `Face the speaker. Make comfortable eye contact. Uncrossed arms. Relaxed shoulders. Lean slightly in. Each signal alone is small — together they say: I'm with you.`,
          ],
          image: `/explorer-assets/leadership/l14-s5-open-signals.png`,
          imageCaption: `Each piece is small. Together they tell anyone in the room: this person is present, engaged, and here.`,
          vocab: [
            { word: `open posture`, definition: `Facing someone with uncrossed arms and relaxed shoulders. Signals presence and approachability.`,
              audioPrompt: `Open posture is the body's way of saying "I'm here, and I'm available," {name}. Facing the person. Arms uncrossed. Shoulders dropped. None of it is loud. But the combination tells everyone in the room: this person is engaged. The opposite — turned away, arms crossed, hunched — tells them the opposite, even when the words are friendly.` },
            { word: `eye contact`,  definition: `Looking at someone while they speak. A direct signal of attention and respect.`,
              audioPrompt: `Eye contact says "I'm with you," {name}, without a single word. You don't need to stare. Just enough to show the other person you see them, that you're not somewhere else, that they have your actual attention. It's one of the most direct signals of real presence there is.` },
            { word: `engagement`,   definition: `Full presence in a conversation. What open body language demonstrates — and what makes the other person feel actually heard.`,
              audioPrompt: `Engagement is the difference between being in a conversation and just being near one, {name}. Engaged people lean in slightly. They make eye contact. They nod naturally as they follow along. Other people feel that engagement — and they respond to it by becoming more engaged themselves. It's contagious in the best way.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Use It On Purpose`,
          paragraphs: [
            `Once you understand body language, you can use it intentionally.`,
            `Not as a trick — as the physical expression of genuine attention. When your body matches your intention, communication becomes far more honest and effective.`,
          ],
          image: `/explorer-assets/leadership/l14-s6-use-it-on-purpose.png`,
          imageCaption: `Intentional body language isn't performance. It's making sure your outside matches what's actually true inside.`,
          vocab: [
            { word: `intentional`, definition: `Done with awareness and purpose. Body language used intentionally is the physical expression of actually wanting to connect.`,
              audioPrompt: `Intentional body language isn't about performing, {name}. It's about making the outside match the inside. When you genuinely care about someone, your body naturally turns toward them, your face softens, your attention sharpens. Intentional means you choose those signals — so that even when you're nervous, your presence still communicates what you actually mean.` },
            { word: `rapport`,     definition: `A feeling of connection and mutual trust. Built partly through aligned body language and genuine attentiveness.`,
              audioPrompt: `Rapport is the feeling of being on the same wavelength, {name}. It's what makes a conversation feel easy and natural instead of stiff and formal. Body language contributes to it powerfully — facing someone, matching their energy, nodding as they speak. Not as tricks, but as the physical expression of actually caring about the conversation.` },
            { word: `mirroring`,   definition: `Subtly matching someone's posture or pace. A natural sign of connection that builds rapport without either person noticing.`,
              audioPrompt: `Mirroring happens naturally when people feel connected, {name} — they lean the same way, match each other's energy, shift into similar postures. When you do it intentionally, it's not a trick — it's a way of physically showing: I'm with you. I'm following you. Most people never notice it consciously. But they feel the warmth it creates.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `confident`,
              label: `💪 Signals Confidence & Engagement`,
              color: `#34D399`,
            },
            {
              id: `discomfort`,
              label: `😔 Signals Discomfort or Disinterest`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l14-g1`,
              image: `l14-game-1.png`,
              label: `Standing tall with open shoulders and a relaxed, upright posture.`,
              matchPhrase: `Open, upright posture signals confidence — and also helps you feel more confident yourself.`,
              correctMatch: `confident`,
            },
            {
              id: `l14-g2`,
              image: `l14-game-2.png`,
              label: `Keeping comfortable eye contact while someone is speaking to you.`,
              matchPhrase: `Eye contact shows you're present and genuinely listening — one of the clearest signals of engagement.`,
              correctMatch: `confident`,
            },
            {
              id: `l14-g3`,
              image: `l14-game-3.png`,
              label: `Slouching in your chair and staring at the floor while someone talks to you.`,
              matchPhrase: `Slouching and avoiding eye contact signals disengagement — and can reinforce feelings of nervousness in yourself too.`,
              correctMatch: `discomfort`,
            },
            {
              id: `l14-g4`,
              image: `l14-game-4.png`,
              label: `Crossing your arms tightly and looking away when someone is trying to talk with you.`,
              matchPhrase: `Together, closed posture and averted gaze form a cluster that signals discomfort or disinterest.`,
              correctMatch: `discomfort`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l14-q1`,
              format: `multiple-choice`,
              question: `Why did humans develop non-verbal communication before complex language?`,
              options: [
                `Because words were considered less important in early human culture`,
                `Because we needed to communicate quickly and reliably before language existed`,
                `Because non-verbal signals are easier to fake than words`,
                `Because early humans had limited hearing`,
              ],
              correctIndex: 1,
              explanation: `Non-verbal communication evolved as a fast, reliable system for conveying information before complex language existed. That system is still running in every conversation we have.`,
            },
            {
              id: `l14-q2`,
              format: `multiple-choice`,
              question: `Why is it important to read clusters of body language signals rather than single gestures?`,
              options: [
                `Because individual signals are always meaningless on their own`,
                `Because it's polite to pay attention to the whole person`,
                `Because a single gesture can mean many different things — context and combinations reveal the real message`,
                `Because clusters are faster to read than individual signals`,
              ],
              correctIndex: 2,
              explanation: `A single gesture like crossed arms can mean many things. Reading clusters — multiple signals together, in context — gives you a far more accurate picture of what someone is actually feeling or thinking.`,
            },
            {
              id: `l14-q3`,
              format: `multiple-choice`,
              question: `How does body language affect the person using it — not just the people watching?`,
              options: [
                `It doesn't — body language only affects how others perceive you`,
                `Standing tall and taking up space can help you feel more confident — your body sends signals to your own mind`,
                `Body language only affects your mood if you consciously decide it will`,
                `Expansive posture only works if other people notice and respond positively`,
              ],
              correctIndex: 1,
              explanation: `Your body language doesn't just communicate outward — it feeds back inward. Standing tall and open can genuinely help you feel more confident, while hunching can reinforce feelings of nervousness.`,
            },
            {
              id: `l14-q4`,
              format: `true-false`,
              question: `Body language only matters because of the impression it makes on other people — it has no effect on how you feel yourself.`,
              correctAnswer: false,
              explanation: `False. Research shows that your own posture and body language feeds back to your own mental state. Standing tall and open doesn't just signal confidence to others — it can help you feel more confident yourself.`,
            },
            {
              id: `l14-q5`,
              format: `fill-blank`,
              question: `When you're unsure what someone's body language means, the best response is to ___ — curiosity and context reveal far more than snap judgements.`,
              options: [
                `ask`,
                `ignore`,
                `mirror`,
                `retreat`,
              ],
              correctIndex: 0,
              explanation: `When body language is unclear, asking is always more accurate than assuming. Curiosity — "are you okay?" or "is now a good time?" — gets you real information instead of a guess.`,
            },
            {
              id: `l14-q6`,
              format: `multiple-choice`,
              question: `Why is it better to read clusters of body language signals rather than relying on one gesture?`,
              options: [
                `Because one gesture is always too subtle to notice`,
                `Because body language clusters are more polite to observe`,
                `Because a single gesture, like crossed arms, could mean many different things depending on context`,
                `Because clusters include verbal communication, which is always more reliable`,
              ],
              correctIndex: 2,
              explanation: `A single gesture is easy to misread. Crossed arms could mean defensiveness, cold temperature, or deep thought. Clusters — multiple signals in context — give you a far more reliable picture of what's actually happening.`,
            },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Body language awareness is used by coaches, doctors, counsellors, negotiators, and leaders in every field. The ability to read what someone is feeling — and to communicate clearly without words — is one of the most practical forms of emotional intelligence.`,
          familyAdventure: `Watch a short scene from a film or TV show with the sound off. What can you tell about each character's mood, relationship, and intentions just from their body language? Then watch it again with sound — how much did the words confirm or surprise what you'd already figured out?`,
          creativePrompt: `Over the next day, pay attention to your own body language in different situations. When you're confident, what do you notice about how you hold yourself? When you're nervous or bored? Try adjusting your posture intentionally before something challenging — notice whether it changes anything about how you feel going in.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that communication happens long before a word is spoken — and that your posture, expression, and presence are all part of how you show up in the world. Use them with intention and you'll connect with people in ways that words alone never quite manage. Valor is so proud to share this with you.`,
          badge: `body-language-reader`,
          badgeName: `Body Language Reader`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L14.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L14] Loaded: "Body Language and Non-Verbal Communication" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l14-s1-beyond-words.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-s2-body-speaks-louder.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-s3-read-clusters.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-s4-body-shapes-mind.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-s5-open-signals.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-s6-use-it-on-purpose.png',  { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L14] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L14] One or more magazine assets missing'));
}
