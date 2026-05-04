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
          headline: `Communication beyond words`,
          paragraphs: [
            `Long before humans had complex language, we communicated through expression, posture, gesture, and tone. That ancient system is still running — every time you walk into a room, sit down across from someone, or try to explain something difficult. Research by psychologist Albert Mehrabian found that in emotional and relational conversations, **how** something is said — the tone, the face, the body — carries far more weight than the words themselves. We process these signals faster than conscious thought, which is why a person can say "I'm fine" and yet everyone in the room knows they're not.`,
          ],
          image: `/explorer-assets/leadership/l14-magazine-1.png`,
          imageCaption: `Our bodies communicate constantly — whether we intend them to or not`,
          vocab: [
            { word: `nonverbal`, definition: `All the ways we communicate without words — expression, posture, gesture, eye contact, and tone of voice.`, audioPrompt: `Nonverbal communication never goes offline, {name}. The moment you walk into a room, people are already reading you. Your posture, your expression, the pace you move at — all of it carries information before a word is spoken. Great leaders learn to use that channel intentionally, not just let it run on autopilot.` },
            { word: `expression`, definition: `What your face communicates — one of the most powerful and most automatically read forms of nonverbal communication.`, audioPrompt: `Your face is one of the most honest channels of communication you have, {name}. People read it faster than conscious thought — and they often trust it more than your words. When your expression and your words don't match, people believe the expression. Every time.` },
            { word: `posture`, definition: `How you hold your body — upright and open or closed and hunched — which communicates your state before anyone hears your voice.`, audioPrompt: `Posture speaks first, {name}. Before you say a word, how you hold yourself tells people whether you feel confident, uncertain, engaged, or disconnected. The good news: you can change your posture deliberately. And when you do, it changes not just how you look — it changes how you feel.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Reading body language accurately`,
          paragraphs: [
            `Body language is often misread because people interpret single signals in isolation. Someone crossing their arms isn't necessarily defensive — they might just be cold, or comfortable. The key is to read **clusters**: multiple signals together that point in the same direction. Crossed arms, a flat expression, leaning back, and minimal eye contact together suggest disengagement. The same crossed arms with a relaxed face and forward lean might just mean someone is thinking. Context matters enormously too — what happened just before? What's the relationship between the people? Reading body language well requires patience and curiosity, not snap judgements.`,
          ],
          image: `/explorer-assets/leadership/l14-magazine-2.png`,
          imageCaption: `Read clusters of signals together, not single gestures in isolation`,
          vocab: [
            { word: `cluster`, definition: `Multiple body language signals read together — the accurate way to understand what someone is actually communicating.`, audioPrompt: `A cluster is when several signals point the same direction, {name}. Crossed arms could mean anything alone. But crossed arms, a flat expression, leaning back, and avoiding eye contact together? That's a clear picture. Read the cluster — not the single gesture — and your reading will almost always be more accurate.` },
            { word: `context`, definition: `The situation surrounding a moment — what happened before, who is involved, and what the relationship is — essential for reading body language accurately.`, audioPrompt: `Context changes everything, {name}. The same body language in a job interview means something completely different than at a family dinner. Before you read someone's signals, ask: what's the situation? What happened just before? What's the relationship? Context is the frame that makes the picture make sense.` },
            { word: `misread`, definition: `Interpreting someone's body language incorrectly — what happens when signals are read in isolation or without context.`, audioPrompt: `Misreading body language causes real misunderstandings, {name}. You assume someone's unfriendly because they crossed their arms — but they were just cold. You think someone agrees because they're nodding — but they're just following along. Reading clusters, staying curious, and asking when unsure are all habits that protect you from misreading people.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How your body shapes your mind`,
          paragraphs: [
            `Here's something remarkable: your body language doesn't just communicate to others — it communicates to **you**. Psychologist Amy Cuddy's research found that standing tall and taking up space helps you feel more confident — your body sends signals to your mind. The reverse is also true: slouching, hunching, and making yourself small can actually reinforce feelings of nervousness or uncertainty. This means you have a tool available to you right now: before a challenge, you can shift your physical posture to help shift your mental state. Stand tall. Open up. Breathe. Your body is already part of your preparation.`,
          ],
          image: `/explorer-assets/leadership/l14-magazine-3.png`,
          imageCaption: `How you hold your body affects not just how others see you — but how you feel`,
          vocab: [
            { word: `confidence`, definition: `A state of inner assurance — one that can be reinforced or undermined by how you physically hold yourself.`, audioPrompt: `Confidence isn't just a feeling, {name} — it's something your body participates in. Standing tall, opening your chest, breathing steadily — these don't just signal confidence to others. They help create it in you. Your body and mind are connected. Use that connection on purpose.` },
            { word: `feedback loop`, definition: `The way your body's signals travel back inward to affect your mental state — standing tall makes you feel more confident, and that feeling reinforces the posture.`, audioPrompt: `Your body is in constant conversation with your mind, {name}. You slump and feel less capable. You stand tall and feel more ready. That loop works in both directions — which means you have more control over your mental state than you might think. Your next move before something hard? Adjust your posture first.` },
            { word: `prepare`, definition: `Using your body intentionally before a challenge — adjusting posture, breathing, and physical state to help your mind approach it from a stronger place.`, audioPrompt: `Before something difficult, most people try to calm their thoughts, {name}. But your body is faster. Stand up straight. Open your posture. Take a slow breath. Those physical actions change your mental state — often faster than telling yourself to feel confident ever could. Use your body to prepare your mind.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Using body language intentionally`,
          paragraphs: [
            `Once you understand body language, you can use it with intention. **Eye contact** shows engagement and respect — though the right amount varies across cultures, so staying curious and adaptive matters. **Open posture** (facing someone, uncrossed arms, relaxed shoulders) signals that you're present and approachable. **Mirroring** — subtly matching someone's posture and pace — builds rapport naturally. **Nodding** while someone speaks tells them you're following and encourages them to continue. None of these are tricks. They're the physical expression of genuine attention — and when your body language matches your intention, communication becomes far more honest and effective.`,
          ],
          image: `/explorer-assets/leadership/l14-magazine-4.png`,
          imageCaption: `Intentional body language is the physical expression of genuine attention`,
          vocab: [
            { word: `rapport`, definition: `A feeling of connection and mutual trust — built partly through aligned body language and genuine attentiveness.`, audioPrompt: `Rapport is the feeling of being on the same wavelength, {name}. It's what makes a conversation feel easy and natural instead of stiff and formal. Body language contributes to it powerfully — facing someone, matching their energy, nodding as they speak. Not as tricks, but as the physical expression of actually caring about the conversation.` },
            { word: `mirroring`, definition: `Subtly matching someone's posture or pace — a natural sign of connection that builds rapport without either person noticing.`, audioPrompt: `Mirroring happens naturally when people feel connected, {name} — they lean the same way, match each other's energy, shift into similar postures. When you do it intentionally, it's not a trick — it's a way of physically showing: I'm with you. I'm following you. Most people never notice it consciously. But they feel the warmth it creates.` },
            { word: `intentional`, definition: `Done with awareness and purpose — body language used intentionally is the physical expression of genuinely wanting to connect.`, audioPrompt: `Intentional body language isn't about performing, {name}. It's about making the outside match the inside. When you genuinely care about someone, your body naturally turns toward them, your face softens, your attention sharpens. Intentional means you choose those signals — so that even when you're nervous, your presence still communicates what you actually mean.` },
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
    fetch('/explorer-assets/leadership/l14-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l14-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L14] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L14] One or more magazine assets missing'));
}
