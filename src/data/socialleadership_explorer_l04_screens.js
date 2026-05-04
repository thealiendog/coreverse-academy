// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L04 — Active Listening: Really Hearing Others
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L04 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-04`,
      title:     `Active Listening: Really Hearing Others`,
      duration:  12,
      xpReward:  50,
      badge:     `deep-listener`,
      badgeName: `Deep Listener`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Think about a time someone really listened to you, {name}. Not just waited for their turn to talk — but actually heard you. Eyes on you. No distractions. Asking a follow-up question that proved they'd been paying attention. How did that feel? Now think about a time you knew someone wasn't really listening. That feeling of being invisible. Today we're going to look at active listening — what it actually is, what makes it so rare, and why the leaders who master it earn a kind of loyalty that the loudest talkers never do. This one might surprise you.`,
          headline: `Active Listening: Really Hearing Others`,
          subtitle: `Giving someone your full attention is one of the most powerful things you can do`,
          visual: `/explorer-assets/leadership/l04-welcome.png`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The difference between hearing and listening`,
          paragraphs: [
            `Hearing is automatic — your ears pick up sound whether you want them to or not. **Listening** is intentional — you choose to focus your full attention on understanding what someone is communicating. Most of the time when we think we're listening, we're actually just hearing. We're mentally composing our response, thinking about something else, or waiting for the person to finish so we can talk. True listening requires effort. It means choosing to set aside your own thoughts and really take in what the other person is saying — not just the words, but the feeling behind them.`,
          ],
          image: `/explorer-assets/leadership/l04-magazine-1.png`,
          imageCaption: `Hearing happens automatically — listening is a choice`,
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What active listening looks like`,
          paragraphs: [
            `Active listening has both physical and mental parts. **Physically:** face the speaker, make comfortable eye contact, put your phone completely away, nod to show you're following, and don't interrupt. **Mentally:** focus on what they're actually saying — not your response — and notice their tone and body language as well as their words. Try to understand their perspective, not just their content. After they finish: **reflect back what you heard** before sharing your own thoughts. That reflection step is what turns ordinary listening into something that really makes people feel understood.`,
          ],
          image: `/explorer-assets/leadership/l04-magazine-2.png`,
          imageCaption: `Put the phone down, face the speaker, and listen with your whole self`,
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why active listening is so powerful`,
          paragraphs: [
            `Being truly listened to is one of the most meaningful human experiences. People who feel genuinely heard become more open, more trusting, and more willing to work together. Therapists are trained to listen deeply — and research shows that simply feeling heard is often more helpful than any specific advice. In leadership, listening is how you understand what your team actually needs, spot problems early, and make people feel genuinely valued. The best leaders in every field are often also the best listeners in the room.`,
          ],
          image: `/explorer-assets/leadership/l04-magazine-3.png`,
          imageCaption: `The best leaders are often the best listeners`,
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Listening traps to avoid`,
          paragraphs: [
            `Most people fall into at least one of these listening traps. **Finishing people's sentences** — you might be wrong, and it feels dismissive. **Planning your response while they're still talking** — you miss the second half of what they say. **Judging before they finish** — your mind closes to new information. **Giving advice before they ask for it** — sometimes people just want to be heard, not fixed. **Making it about you** — "that reminds me of when I..." suddenly shifts the focus away from them. Notice which of these you do most. That's where to start practising.`,
          ],
          image: `/explorer-assets/leadership/l04-magazine-4.png`,
          imageCaption: `Even good listeners fall into traps — noticing them is the first step`,
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `active`,
              label: `👂 Active Listening`,
              color: `#34D399`,
            },
            {
              id: `passive`,
              label: `🔇 Passive Listening`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l04-g1`,
              image: `l04-game-1.png`,
              label: `Facing the speaker and putting your phone face-down before they start talking.`,
              matchPhrase: `Getting ready to really listen — that's active listening before a word is even said.`,
              correctMatch: `active`,
            },
            {
              id: `l04-g2`,
              image: `l04-game-2.png`,
              label: `Saying "so it sounds like you're feeling worried about the test" before sharing your own thoughts.`,
              matchPhrase: `Reflecting back what you heard shows you were truly paying attention.`,
              correctMatch: `active`,
            },
            {
              id: `l04-g3`,
              image: `l04-game-3.png`,
              label: `Nodding along while thinking about what you'll say next.`,
              matchPhrase: `If your mind is already on your reply, you're not really listening — you're just waiting.`,
              correctMatch: `passive`,
            },
            {
              id: `l04-g4`,
              image: `l04-game-4.png`,
              label: `Finishing the other person's sentence because you think you know where they're going.`,
              matchPhrase: `Even if you guess right, it cuts them off. Let them finish — you might be surprised.`,
              correctMatch: `passive`,
            },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l04-q1`,
              format: `multiple-choice`,
              question: `What is the difference between hearing and listening?`,
              options: [
                `Hearing uses your ears; listening uses your brain`,
                `Hearing is automatic; listening is an intentional choice to focus on understanding`,
                `Hearing is for sounds; listening is for words only`,
                `There is no real difference — they mean the same thing`,
              ],
              correctIndex: 1,
              explanation: `Hearing happens whether you want it to or not. Listening is a deliberate act — you choose to focus fully on understanding what someone is communicating.`,
            },
            {
              id: `l04-q2`,
              format: `multiple-choice`,
              question: `What is one thing active listeners do that passive listeners don't?`,
              options: [
                `Ask more questions than the speaker`,
                `Reflect back what they heard before sharing their own thoughts`,
                `Always give advice at the end`,
                `Agree with everything the speaker says`,
              ],
              correctIndex: 1,
              explanation: `Reflecting back — "so it sounds like you're saying..." — confirms understanding and shows the speaker they've actually been heard, not just received.`,
            },
            {
              id: `l04-q3`,
              format: `multiple-choice`,
              question: `Why is being listened to so important?`,
              options: [
                `Because it saves time by reducing misunderstandings`,
                `People who feel genuinely heard become more open, trusting, and willing to collaborate`,
                `Because it is required by law in professional settings`,
                `Because listening is the most efficient way to share information`,
              ],
              correctIndex: 1,
              explanation: `Feeling heard changes how people show up. It opens them up, builds trust, and makes real collaboration possible — more than any advice or solution usually does.`,
            },
            {
              id: `l04-q4`,
              format: `true-false`,
              question: `Giving advice as soon as someone finishes talking is always a sign of good listening.`,
              correctAnswer: false,
              explanation: `False. Sometimes people just want to feel heard — not fixed. Jumping straight to advice can actually make people feel less understood, not more.`,
            },
            {
              id: `l04-q5`,
              format: `fill-blank`,
              question: `Before sharing your own thoughts, active listeners ___ back what they heard to check they understood correctly.`,
              options: [
                `reflect`,
                `write`,
                `argue`,
                `guess`,
              ],
              correctIndex: 0,
              explanation: `Reflecting back — summarising what you heard in your own words — is the step that transforms hearing into truly listening. It checks your understanding and makes the speaker feel seen.`,
            },
            {
              id: `l04-q6`,
              format: `multiple-choice`,
              question: `Which of these is a listening trap?`,
              options: [
                `Waiting until the person finishes before responding`,
                `Making comfortable eye contact and nodding`,
                `Planning what you'll say while they're still talking`,
                `Reflecting back what you heard`,
              ],
              correctIndex: 2,
              explanation: `When you're already composing your response, you stop taking in new information. You miss things — and the speaker can often sense you've mentally checked out.`,
            },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Active listening is one of the skills most valued in every profession — from medicine to teaching to management to sport. The people who make others feel genuinely heard build the deepest trust and the strongest teams.`,
          familyAdventure: `For one week, try a new dinner rule: before anyone can respond to what someone said, they must first say "what I heard you say was..." and reflect back the main point. It feels awkward at first — but notice how conversations change when everyone knows they'll be truly heard.`,
          creativePrompt: `Try this once today: let someone talk for two full minutes without interrupting, then reflect back what you heard before saying anything else. Notice how they respond.`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know the difference between hearing and truly listening — and that giving someone your full attention is one of the most powerful gifts one person can offer another. Valor is so proud to share this with you.`,
          badge: `deep-listener`,
          badgeName: `Deep Listener`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L04.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L04] Loaded: "Active Listening: Really Hearing Others" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l04-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L04] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L04] One or more magazine assets missing'));
}
