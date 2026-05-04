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
