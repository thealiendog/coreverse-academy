// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L03 — Communication: How to Say What You Mean
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L03 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-03`,
      title:     `Communication: How to Say What You Mean`,
      duration:  12,
      xpReward:  50,
      badge:     `clear-communicator`,
      badgeName: `Clear Communicator`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey, {name} — here's something that happens all the time: a person says exactly what they mean, and the person listening hears something completely different. Not because anyone is dishonest — but because communication is harder than it looks. The words you choose, the tone in your voice, whether you're direct or vague — all of it shapes what the other person actually receives. Today we're going to look at how to close that gap between what you intend and what people actually hear. Being understood is a skill, and it's one the best leaders in history worked hard to develop. Let's get into it.`,
          headline: `Communication: How to Say What You Mean`,
          subtitle: `How you say something matters just as much as what you say`,
          visual: `/explorer-assets/leadership/l03-welcome.png`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Communication is more than words`,
          paragraphs: [
            `When you communicate, only a small part of your message comes from the actual words you choose. The bigger parts are your **tone of voice** — whether you sound warm, sharp, bored, or excited — and your **body language** — whether you make eye contact, face the person, or cross your arms. This means you can say "I'm fine" in a way that clearly tells everyone you are absolutely not fine. Great communicators make sure their words, tone, and body language are all sending the same message — because when they conflict, people believe the tone and body language over the words every time.`,
          ],
          image: `/explorer-assets/leadership/l03-magazine-1.png`,
          imageCaption: `Words, tone, and body language all need to say the same thing`,
          vocab: [
            { word: `tone`, definition: `The feeling carried by your voice — whether you sound warm, sharp, bored, or caring — often heard more clearly than the words themselves.`, audioPrompt: `Your tone tells people what your words won't, {name}. Someone can say "I'm fine" in a way that makes everyone know they're not. Your voice carries emotion — warmth, frustration, confidence, care. Great leaders make sure their tone matches their intention, or the message gets lost.` },
            { word: `body language`, definition: `The communication that happens through posture, facial expression, and gesture — often more believed than words.`, audioPrompt: `Your body speaks before your mouth opens, {name}. The way you stand, whether you make eye contact, how you hold your face — people read all of it constantly. When your words say one thing and your body says another, people believe the body. Every time.` },
            { word: `nonverbal`, definition: `All the parts of communication that are not spoken words — tone, expression, posture, gesture, and silence itself.`, audioPrompt: `More than half of every message you send is nonverbal, {name}. That means paying attention to how you're communicating — not just what you're saying — is not optional. It's where most misunderstandings actually come from.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Clarity: say what you mean`,
          paragraphs: [
            `Most communication fails not because people lie — but because they assume the other person already knows things they don't. "Can you help me with this?" is unclear. Help with what? When? For how long? Compare that to: "Can you help me organise my room this Saturday morning for about an hour?" — that's clear. Great communicators are specific, give context, and check that they've actually been understood. Here's the key idea: the **burden of clear communication is on the speaker**, not the listener. If someone doesn't understand you, that's feedback to say it more clearly.`,
          ],
          image: `/explorer-assets/leadership/l03-magazine-2.png`,
          imageCaption: `The clearer your message, the less room there is for misunderstanding`,
          vocab: [
            { word: `clarity`, definition: `Saying exactly what you mean with enough detail that the listener knows what to do — the goal of every clear message.`, audioPrompt: `Clear communication is a courtesy, {name}. When you say exactly what you need — who, what, when, for how long — you respect the other person's time and make it easy to say yes or no. Vague requests create confusion. Clear ones create action.` },
            { word: `context`, definition: `The background information that helps someone understand why something matters — missing context is one of the most common reasons messages fail.`, audioPrompt: `Context is the "why" behind your message, {name}. Without it, even a clear request can feel confusing or demanding. When you tell someone why something matters — what it's for, what's at stake — they understand what you actually need, not just what you said.` },
            { word: `specific`, definition: `Using exact details rather than vague generalities — the difference between a message that gets misunderstood and one that gets done.`, audioPrompt: `Specific is kind, {name}. "Can you help me this Saturday morning from ten to eleven to reorganize the storage room?" leaves no room for guessing. The other person knows exactly what they're agreeing to. Specificity shows respect for their time — and it means yes actually means yes.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Adapting to your audience`,
          paragraphs: [
            `Skilled communicators adjust how they speak depending on who they're talking to. You'd explain a video game very differently to a close friend than to your grandparent. You talk to your teacher differently than you talk to your best friend — and that's not being fake, it's being effective. Great leaders can speak to a wide range of people in the same day and make every single one feel respected and understood. Adapting your communication shows both intelligence and genuine care for the person in front of you.`,
          ],
          image: `/explorer-assets/leadership/l03-magazine-3.png`,
          imageCaption: `Adjusting how you communicate isn't fake — it's thoughtful`,
          vocab: [
            { word: `adapt`, definition: `Changing how you communicate based on who you are talking to — a skill that shows intelligence and genuine care.`, audioPrompt: `Adapting how you speak isn't being fake, {name} — it's being thoughtful. You already do this naturally: you speak differently to a younger child than to a friend. That's not dishonesty. That's good communication. It shows you care whether people actually understand you.` },
            { word: `audience`, definition: `The person or group you are communicating with — great communicators think about their audience before they speak.`, audioPrompt: `Every message has an audience, {name}. And the right message for one person can completely miss another. Before you speak, ask: who is hearing this? What do they already know? What might confuse them? That question — just that one — makes your communication dramatically more effective.` },
            { word: `effective`, definition: `Communication that achieves its goal — the other person understands what you meant and can act on it.`, audioPrompt: `Effective means it worked, {name}. You can say something perfectly clearly and still fail to communicate — if the other person didn't understand, the communication failed. The goal isn't to say something well. It's to be understood. Effectiveness is the measure.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Difficult conversations`,
          paragraphs: [
            `The most important communication often happens in hard conversations — telling someone something they don't want to hear, disagreeing with someone you respect, or raising a concern with someone in authority. A few key principles make these conversations much more likely to go well. **Choose the right time and place** — private and calm, not in front of an audience. **Start with your intention**: "I care about our friendship, and I need to share something." Use **"I" statements** instead of "you" accusations: "I felt hurt when..." rather than "You always..." And **listen as much as you speak** — a conversation isn't a speech.`,
          ],
          image: `/explorer-assets/leadership/l03-magazine-4.png`,
          imageCaption: `Hard conversations, handled well, make relationships stronger`,
          vocab: [
            { word: `intention`, definition: `Your underlying purpose in a conversation — being clear about why you are having a hard conversation changes how it goes.`, audioPrompt: `Before a hard conversation, know why you're having it, {name}. Are you trying to fix something? Clear something up? Stay connected? When you start with "I care about this relationship, and I need to share something" — you're leading with intention. That changes how the conversation lands.` },
            { word: `I statement`, definition: `A way of sharing how you feel by describing your own experience — "I felt..." — without blaming or accusing the other person.`, audioPrompt: `An "I statement" puts the focus on your experience, not the other person's character, {name}. "I felt left out when that happened" opens a conversation. "You always exclude me" closes it. One invites understanding. The other invites defense.` },
            { word: `mediation`, definition: `The process of bringing in a neutral person to help two sides work through a conflict they cannot resolve alone — used at every level of leadership.`, audioPrompt: `Sometimes the wisest move in a conflict is asking for outside help, {name}. A mediator isn't a judge — they don't decide who was right. They create conditions where both people can actually hear each other. Knowing when to ask for that help is itself a form of leadership.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `clear`,
              label: `🎯 Clear Communication`,
              color: `#34D399`,
            },
            {
              id: `unclear`,
              label: `❓ Unclear Communication`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l03-g1`,
              image: `l03-game-1.png`,
              label: `"Can you help me organise my room this Saturday morning for about an hour?"`,
              matchPhrase: `Specific, timed, and easy to say yes or no to — that's clear communication.`,
              correctMatch: `clear`,
            },
            {
              id: `l03-g2`,
              image: `l03-game-2.png`,
              label: `"I felt worried when you didn't show up — can we talk about it?"`,
              matchPhrase: `It names the feeling, the situation, and the next step — clear and honest.`,
              correctMatch: `clear`,
            },
            {
              id: `l03-g3`,
              image: `l03-game-3.png`,
              label: `"Can you help me with this?"`,
              matchPhrase: `Help with what? When? For how long? The listener has to guess too much.`,
              correctMatch: `unclear`,
            },
            {
              id: `l03-g4`,
              image: `l03-game-4.png`,
              label: `"You always do that thing that bothers everyone."`,
              matchPhrase: `Which thing? "Always" is rarely true, and "everyone" makes it feel like an attack.`,
              correctMatch: `unclear`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l03-q1`,
              format: `multiple-choice`,
              question: `What have researchers found about how much of our communication comes from body language and tone?`,
              options: [
                `Most of communication is in the words we choose`,
                `Body language and tone carry more of the message than words alone`,
                `Written messages are always clearer than spoken ones`,
                `Louder voices are always understood more clearly`,
              ],
              correctIndex: 1,
              explanation: `Research consistently shows that tone of voice and body language carry far more of the message than the words themselves — which is why someone can say "I'm fine" and clearly mean the opposite.`,
            },
            {
              id: `l03-q2`,
              format: `multiple-choice`,
              question: `Whose responsibility is it to communicate clearly?`,
              options: [
                `The listener — they should ask questions if confused`,
                `The speaker — the person giving the message`,
                `Both equally share the responsibility`,
                `Whoever has more communication experience`,
              ],
              correctIndex: 1,
              explanation: `The speaker knows what they meant. The listener only knows what they heard. If communication breaks down, it's a signal for the speaker to try again more clearly.`,
            },
            {
              id: `l03-q3`,
              format: `multiple-choice`,
              question: `Why do great communicators adapt to their audience?`,
              options: [
                `Because it is more polite to change your speaking style`,
                `Because effective communication means the message is understood, not just delivered`,
                `Because different audiences have different rules for talking`,
                `Because adapting shows you know more than your audience`,
              ],
              correctIndex: 1,
              explanation: `The goal of communication isn't just to say something — it's to be understood. Adapting to your audience is how you make that actually happen.`,
            },
            {
              id: `l03-q4`,
              format: `true-false`,
              question: `In a difficult conversation, saying "I felt hurt when..." instead of "You always..." makes it less likely to feel like an attack on the other person.`,
              correctAnswer: true,
              explanation: `True. "I" statements describe your own experience without blaming. "You always..." puts people on the defensive — they start arguing rather than listening.`,
            },
            {
              id: `l03-q5`,
              format: `fill-blank`,
              question: `Adjusting how you speak to match who you're talking to isn't being fake — it's being ___.`,
              options: [
                `effective`,
                `polite`,
                `loud`,
                `quiet`,
              ],
              correctIndex: 0,
              explanation: `Effectiveness is the point of communication. Adjusting your style for different people shows care and intelligence — the goal is always for the message to land clearly.`,
            },
            {
              id: `l03-q6`,
              format: `multiple-choice`,
              question: `Why is the burden of clear communication on the speaker, not the listener?`,
              options: [
                `Because listeners are always too distracted to keep up`,
                `Because the speaker knows what they meant — and the listener only knows what they heard`,
                `Because listeners are responsible for asking questions`,
                `Because speaking requires more effort than listening`,
              ],
              correctIndex: 1,
              explanation: `The speaker has the full picture of what they're trying to say. If a listener is confused, the information they need to clear it up lives with the speaker — so the fix has to come from there.`,
            },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Clear communication is the skill that holds every team, every family, and every project together. Leaders, doctors, engineers, and teachers all name it as one of the most important things they had to learn.`,
          familyAdventure: `Play "Communication Surgeon" at dinner: each person describes their day with specific, clear details only. Ask follow-up questions to get even clearer. At the end, discuss what you learned about someone's day that you usually miss when they just say "it was fine."`,
          creativePrompt: `For one meal, try describing your day using only specific, clear details — no vague words like "fine," "stuff," or "things." Notice how much more there is to share when you get specific.`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that how you say something matters just as much as what you say — and that clear, honest communication is a skill you build, not a talent you're born with. Valor is so proud to share this with you.`,
          badge: `clear-communicator`,
          badgeName: `Clear Communicator`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L03.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L03] Loaded: "Communication: How to Say What You Mean" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l03-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l03-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l03-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l03-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L03] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L03] One or more magazine assets missing'));
}
