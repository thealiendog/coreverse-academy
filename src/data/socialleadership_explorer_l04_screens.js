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
          headline: `Hearing vs Listening`,
          paragraphs: [
            `HEARING is automatic. Your ears do it without permission.`,
            `LISTENING is a choice — focusing your full attention on understanding what someone's communicating. Most of the time we think we're listening, we're just hearing.`,
          ],
          image: `/explorer-assets/leadership/l04-s1-hearing-vs-listening.png`,
          imageCaption: `Most of us hear a lot and listen rarely. The good news: listening is something you can choose to start doing right now.`,
          vocab: [
            { word: `hearing`,     definition: `The automatic physical process of detecting sound. Happens whether you want it to or not.`,
              audioPrompt: `Hearing is effortless, {name} — your ears do it without any help from you. Listening is different. Listening is what happens when you decide to actually take in what someone is saying, not just let the sounds wash over you. One is automatic. The other is a choice.` },
            { word: `listening`,   definition: `The intentional act of focusing fully on what someone is communicating. Words, tone, and feeling together.`,
              audioPrompt: `Real listening means your whole attention is on the other person, {name}. Not on what you'll say next. Not on your phone. When someone feels genuinely listened to, it changes them — they open up, they trust you, they remember the conversation. That's what listening does.` },
            { word: `intentional`, definition: `Done on purpose, with awareness and deliberate focus. The opposite of automatic.`,
              audioPrompt: `Valor believes that the greatest gift one person can offer another is intentional attention, {name}. When you choose to put everything else aside and truly focus on someone, you're telling them: you matter enough for my full presence. That message lands, even without words.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Active Listening Looks Like`,
          paragraphs: [
            `Active listening starts with your body.`,
            `Face the speaker. Make comfortable eye contact. Put your phone completely AWAY. Nod to show you're following. Don't interrupt. The physical setup is half the skill.`,
          ],
          image: `/explorer-assets/leadership/l04-s2-active-listening-posture.png`,
          imageCaption: `Before a word is exchanged, your body already tells the speaker whether you're really listening.`,
          vocab: [
            { word: `eye contact`, definition: `Looking at someone while they speak. A direct signal of attention, respect, and presence.`,
              audioPrompt: `Eye contact says "I'm here with you," {name}, without a single word. It's one of the most direct signals of real listening. You don't need to stare — just enough to show the other person that you see them. That you're not somewhere else. That they have your actual attention.` },
            { word: `presence`,    definition: `Being fully here, with this person, in this moment. The foundation of all real listening.`,
              audioPrompt: `Presence is the simplest and rarest thing in conversation, {name} — being fully here with the person in front of you. Not half-here while thinking about something else. Not waiting for a chance to speak. Just here. When you can offer presence to someone, you're offering them something most people never give. They feel it.` },
            { word: `attention`,   definition: `Focused awareness directed at one thing. The actual gift of listening — and a rare one.`,
              audioPrompt: `Attention is currency, {name} — and most people spread theirs across a hundred things at once. When you give someone your undivided attention, you're spending something genuinely valuable on them. That's why being truly listened to feels so meaningful. Real attention is rare. Receiving it is unforgettable.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Reflecting Move`,
          paragraphs: [
            `The single most powerful listening technique is REFLECTING.`,
            `Before you respond, say back what you heard: "So it sounds like you're feeling worried about the test." That move shows the other person they were actually heard.`,
          ],
          image: `/explorer-assets/leadership/l04-s3-reflecting-move.png`,
          imageCaption: `Reflecting back is one extra sentence. It can completely change whether the other person feels heard.`,
          vocab: [
            { word: `reflect`,       definition: `Saying back what you heard in your own words. Checks your understanding — and proves you were listening.`,
              audioPrompt: `Reflecting back is the step most people skip, {name} — and it's the most important one. "So it sounds like you're feeling..." shows the other person that their words actually landed. It also catches misunderstandings before they become real problems. Reflect first. Then respond.` },
            { word: `understanding`, definition: `The meeting between what was said and what was heard. The actual point of listening.`,
              audioPrompt: `Understanding isn't automatic, {name}. Two people in the same conversation can walk away with completely different versions of what was said. The reflecting move is how you check: did I actually get this? What you assume you understood and what the speaker actually meant aren't always the same thing.` },
            { word: `check`,         definition: `Confirming you got it right before responding. Saves a thousand misunderstandings.`,
              audioPrompt: `A check is a one-sentence courtesy, {name} — "did I get that right?" or "is that what you mean?" That tiny pause has prevented more conflicts than any other communication move. People appreciate being checked with. It tells them you care enough to make sure you actually heard them.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why It Matters`,
          paragraphs: [
            `Being truly listened to is one of the most meaningful human experiences.`,
            `People who feel heard become more open, more trusting, more willing to work together. Research shows: just feeling heard is often more helpful than any advice.`,
          ],
          image: `/explorer-assets/leadership/l04-s4-why-listening-matters.png`,
          imageCaption: `Feeling heard changes how people show up — more open, more trusting, more willing. Often more than any advice can.`,
          vocab: [
            { word: `heard`,       definition: `The feeling of being truly listened to. One of the most meaningful and rare human experiences.`,
              audioPrompt: `Being heard is one of the most powerful experiences a human can have, {name} — and most people don't get enough of it. When you offer someone the experience of being truly heard, you're meeting a need they may not even know they had. The change in them is often visible. It's worth the effort, every time.` },
            { word: `trust`,       definition: `The safety that grows when people know they'll be genuinely heard. The currency of every relationship.`,
              audioPrompt: `Trust grows when people feel safe to say the real thing, {name}. And that feeling of safety comes most reliably from being truly listened to. When someone knows you'll actually hear them — without judgment, without rushing — they'll tell you what they really think. That's when real leadership becomes possible.` },
            { word: `perspective`, definition: `Another person's point of view. Only accessible if you listen before you speak.`,
              audioPrompt: `Every person in the room has information you don't have, {name}. Their experience, their read on the situation, their concerns. You can only access that information by listening — really listening, not just waiting. The leaders who hear the most perspectives make the best decisions. That's not a coincidence.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Traps`,
          paragraphs: [
            `Most people fall into the same traps.`,
            `Finishing their sentences. Planning your reply while they're still talking. Judging before they finish. Giving advice they didn't ask for. Making it about you. Notice which one you do most.`,
          ],
          image: `/explorer-assets/leadership/l04-s5-listening-traps.png`,
          imageCaption: `Almost everyone falls into at least one trap. Spotting yours is the first step out of it.`,
          vocab: [
            { word: `interrupt`,   definition: `Cutting someone off before they finish. One of the quickest ways to make a person feel unheard.`,
              audioPrompt: `When you interrupt, {name}, even with good intentions, you're saying: my thoughts matter more than yours right now. The person speaking usually loses their train of thought — and feels dismissed. Let people finish. Even when you already think you know where they're going. You might be wrong.` },
            { word: `judgment`,    definition: `Forming an opinion before someone finishes speaking. A trap that shuts your mind before the full picture arrives.`,
              audioPrompt: `When you judge before someone finishes, {name}, your mind closes to anything that might change it. You stop listening and start defending a conclusion you've already made. Let them finish. The last thing they say might be the most important.` },
            { word: `distraction`, definition: `Anything that pulls your attention from the speaker. Including your own next thought.`,
              audioPrompt: `The sneakiest distraction isn't your phone, {name} — it's your own next thought. The moment you start planning what you'll say, you stop hearing what's being said. Real listening means staying present with the speaker, not racing ahead to your response.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Start With Two Minutes`,
          paragraphs: [
            `Try this once today: let someone talk for two full minutes without interrupting.`,
            `Reflect back what you heard before saying anything else. Watch how they respond. The skill is real, and it's learnable.`,
          ],
          image: `/explorer-assets/leadership/l04-s6-two-minutes.png`,
          imageCaption: `Two minutes of pure attention. One sentence of reflection. The change in the other person is real.`,
          vocab: [
            { word: `practice`, definition: `Deliberate, repeated effort to build a skill. How listening improves — like any other skill.`,
              audioPrompt: `Listening is a skill, {name} — which means it improves with practice. The leaders who listen well weren't born with it. They built it by paying attention to how they listened, noticing the traps they kept falling into, and trying again the next day. You can do exactly the same thing, starting now.` },
            { word: `patience`, definition: `Staying with someone long enough to actually hear them. Slowing down on purpose.`,
              audioPrompt: `Listening requires patience, {name} — the willingness to stay with someone as they find their words, even if it takes them a while. Speeding people up, finishing their sentences, rushing past their pauses — all of it cuts the conversation short. Patience is what lets the real thing actually come out.` },
            { word: `gift`,     definition: `What attentive listening gives the other person. Something rare, and clearly felt.`,
              audioPrompt: `Listening is a gift, {name} — and one of the few you can give without spending anything but your attention. Most people walk through their days half-heard at best. When you give someone your full presence, even for two minutes, you've given them something most people never receive. Don't underestimate how much that lands.` },
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
    fetch('/explorer-assets/leadership/l04-s1-hearing-vs-listening.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-s2-active-listening-posture.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-s3-reflecting-move.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-s4-why-listening-matters.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-s5-listening-traps.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l04-s6-two-minutes.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L04] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L04] One or more magazine assets missing'));
}
