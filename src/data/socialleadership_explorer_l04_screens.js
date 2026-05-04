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
          vocab: [
            { word: `hearing`, definition: `The automatic physical process of detecting sound — you hear whether you want to or not.`, audioPrompt: `Hearing is effortless, {name} — your ears do it without any help from you. Listening is different. Listening is what happens when you decide to actually take in what someone is saying, not just let the sounds wash over you. One is automatic. The other is a choice.` },
            { word: `listening`, definition: `The intentional act of focusing fully on what someone is communicating — words, tone, and feeling together.`, audioPrompt: `Real listening means your whole attention is on the other person, {name}. Not on what you'll say next. Not on your phone. When someone feels genuinely listened to, it changes them — they open up, they trust you, they remember the conversation. That's what listening does.` },
            { word: `intentional`, definition: `Done on purpose, with awareness and deliberate focus — listening is intentional in a way that hearing never is.`, audioPrompt: `Valor believes that the greatest gift one person can offer another is intentional attention, {name}. When you choose to put everything else aside and truly focus on someone, you're telling them: you matter enough for my full presence. That message lands, even without words.` },
          ],
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
          vocab: [
            { word: `reflect`, definition: `To say back what you heard in your own words — checking your understanding and showing the speaker they were truly heard.`, audioPrompt: `Reflecting back is the step most people skip, {name} — and it's the most important one. "So it sounds like you're feeling..." shows the other person that their words actually landed. It also catches misunderstandings before they become real problems. Reflect first. Then respond.` },
            { word: `eye contact`, definition: `Looking at someone while they speak — a signal of attention, respect, and genuine presence.`, audioPrompt: `Eye contact says "I'm here with you," {name}, without a single word. It's one of the most direct signals of real listening. You don't need to stare — just enough to show the other person that you see them. That you're not somewhere else. That they have your actual attention.` },
            { word: `interrupt`, definition: `To cut someone off before they finish speaking — one of the quickest ways to make a person feel unheard.`, audioPrompt: `When you interrupt, {name}, even with good intentions, you're saying: my thoughts matter more than yours right now. The person speaking usually loses their train of thought — and feels dismissed. Let people finish. Even when you already think you know where they're going. You might be wrong.` },
          ],
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
          vocab: [
            { word: `trust`, definition: `The feeling of safety that comes when someone knows they will be genuinely heard — built through consistent active listening.`, audioPrompt: `Trust grows when people feel safe to say the real thing, {name}. And that feeling of safety comes most reliably from being truly listened to. When someone knows you'll actually hear them — without judgment, without rushing — they'll tell you what they really think. That's when real leadership becomes possible.` },
            { word: `perspective`, definition: `Another person's point of view — something you can only access if you listen before you speak.`, audioPrompt: `Every person in the room has information you don't have, {name}. Their experience, their read on the situation, their concerns. You can only access that information by listening — really listening, not just waiting. The leaders who hear the most perspectives make the best decisions. That's not a coincidence.` },
            { word: `genuine`, definition: `Listening that is real and focused — not performed or half-attentive — the kind that people can feel and that builds real connection.`, audioPrompt: `People can tell the difference between genuine listening and performed listening, {name}. Genuine listening isn't about the right facial expressions — it's about actually caring what the person is saying. When it's real, the other person feels it. When it's not, they feel that too.` },
          ],
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
          vocab: [
            { word: `advice`, definition: `Acting on the urge to fix someone's problem before they've asked — one of the most common listening traps.`, audioPrompt: `Sometimes people don't want a solution, {name} — they want to feel heard. Jumping straight to advice, even good advice, can make the other person feel less understood. Ask yourself first: are they looking for help, or do they just need someone to really listen?` },
            { word: `judgment`, definition: `Forming an opinion before someone has finished speaking — a trap that shuts your mind before you have the full picture.`, audioPrompt: `When you judge before someone finishes, {name}, your mind closes to anything that might change it. You stop listening and start defending a conclusion you've already made. Let them finish. The last thing they say might be the most important.` },
            { word: `distraction`, definition: `Anything that pulls your attention away from the speaker — including the thoughts forming in your own head.`, audioPrompt: `The sneakiest distraction isn't your phone, {name} — it's your own next thought. The moment you start planning what you'll say, you stop hearing what's being said. Real listening means staying present with the speaker, not racing ahead to your response.` },
          ],
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
